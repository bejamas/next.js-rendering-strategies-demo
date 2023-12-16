"use client";

import { useEffect, useState } from "react";
import Card from "@/components/Card";
export interface Repo {
  owner: {
    avatar_url: string;
    login: string;
  };
  name: string;
  description: string;
  language: string;
  size: number;
  open_issues: number;
  id: string;
  stargazers_count: number;
}


const CSRuseEffect = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchRepos = async () => {
        try {
            const response = await fetch(
                "https://api.github.com/search/repositories?q=stars:>1&sort=stars&order=desc&per_page=12"
            );
            const data = await response.json();
            setRepos(data.items);
        } catch (error) {
            console.error("Error fetching GitHub repositories:", error);
        }
        finally { 
            setLoading(false)
        }
    };
    fetchRepos();
  }, []);
    if (loading) {
        return <h4>Loading...</h4>
    }
  return (
    <>
      <section className="main-section">
        {repos.map((repo) => (
          <Card
            avatarURL={repo.owner.avatar_url}
            name={repo.name}
            description={repo.description}
            language={repo.language}
            size={repo.size}
            openIssues={repo.open_issues}
            id={repo.id}
            starGazersCount={repo.stargazers_count}
            owner={repo.owner.login}
            directory="csr"
          />
        ))}
      </section>
    </>
  );
};

export default CSRuseEffect;

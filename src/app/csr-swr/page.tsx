"use client";

import useSWR from "swr";
import Card from "@/components/Card";
import { Repo } from "../csr/page";
import Loading from "@/components/Loading";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const CSRuseSWR = () => {
  const { data, error } = useSWR(
    "https://api.github.com/search/repositories?q=stars:>1&sort=stars&order=desc&per_page=12",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loading />;

  const repos: Repo[] = data.items;

  return (
    <>
      <section className="main-section">
        {repos.map((repo) => (
            <Card
            key={repo.id}
            avatarURL={repo.owner.avatar_url}
            name={repo.name}
            description={repo.description}
            language={repo.language}
            size={repo.size}
            openIssues={repo.open_issues}
            id={repo.id}
            starGazersCount={repo.stargazers_count}
            owner={repo.owner.login}
            directory="csr-swr"
          />
        ))}
      </section>
    </>
  );
};

export default CSRuseSWR;
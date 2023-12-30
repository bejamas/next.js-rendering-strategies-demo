"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import Details from "@/components/Details";
import Loading from "@/components/Loading";

export interface RepoDetailsData {
  created_at: string;
  topics: string[];
  name: string;
  owner: {
    avatar_url: string;
  };
  description: string;
  homepage: string;
  stargazers_count: number;
  language: string;
  watchers_count: number;
  private: boolean;
  forks_count: number;
  open_issues_count: number;
  default_branch: string;
}

const RepoDetails = () => {
  const params = useParams();
  const owner = params.owner;
  const repo = params.repo;

  const apiUrl = `https://api.github.com/repos/${owner}/${repo}`;
  const [repoData, setRepoData] = useState<RepoDetailsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const data: RepoDetailsData = await response.json();
          setRepoData(data);
        } else {
          console.error(
            "Error fetching GitHub repository:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching GitHub repository:", error);
      } finally {
        setLoading(false);
      }
    };

    if (owner && repo) {
      setLoading(true);
      fetchRepo();
    }
  }, [owner, repo, apiUrl]);

  return (
    <>
      {loading && <Loading />}
      {!loading && repoData && (
        <Details
          createdAt={repoData.created_at}
          topics={repoData.topics}
          name={repoData.name}
          avatarUrl={repoData.owner.avatar_url}
          description={repoData.description}
          homepage={repoData.homepage}
          stargazersCount={repoData.stargazers_count}
          language={repoData.language}
          watchersCount={repoData.watchers_count}
          visibility={repoData.private ? "private" : "public"}
          forks={repoData.forks_count}
          openIssues={repoData.open_issues_count}
          defaultBranch={repoData.default_branch}
        />
      )}
    </>
  );
};

export default RepoDetails;

"use client";

import { useParams } from "next/navigation";
import useSWR from "swr";

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

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (response.ok) {
    const data: RepoDetailsData = await response.json();
    return data;
  } else {
    throw new Error(response.statusText);
  }
};

const RepoDetails = () => {
  const params = useParams();
  const owner = params.owner;
  const repo = params.repo;

  const apiUrl = `https://api.github.com/repos/${owner}/${repo}`;
  const { data, error } = useSWR(apiUrl, fetcher);

  return (
    <>
      {error && <h4>Failed to load</h4>}
      {!error && !data && <Loading />}
      {!error && data && (
        <Details
          createdAt={data.created_at}
          topics={data.topics}
          name={data.name}
          avatarUrl={data.owner.avatar_url}
          description={data.description}
          homepage={data.homepage}
          stargazersCount={data.stargazers_count}
          language={data.language}
          watchersCount={data.watchers_count}
          visibility={data.private ? "private" : "public"}
          forks={data.forks_count}
          openIssues={data.open_issues_count}
          defaultBranch={data.default_branch}
        />
      )}
    </>
  );
};

export default RepoDetails;

import { RepoDetailsData } from "@/app/csr/details/[owner]/[repo]/page";
import Details from "@/components/Details";


async function getData(url: string) {
  const response = await fetch(url, { cache: "force-cache" });
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  console.log({ data });
  return data;
}

const RepoDetails = async ({
  params,
}: {
  params: { owner: string; repo: string };
}) => {
  const owner = params.owner;
  const repo = params.repo;
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}`;
  const repoData: RepoDetailsData = await getData(apiUrl);

  return (
    <>
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
    </>
  );
};

export default RepoDetails;

import { RepoDetailsData } from "@/app/csr/details/[owner]/[repo]/page";
import Details from "@/components/Details";
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  

async function getData(url: string) {

  const response = await fetch(url);
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
}

const RepoDetails = async ({
  params,
}: {
  params: { owner: string; repo: string };
}) => {
  const owner = params.owner;
  const repo = params.repo;
  console.log({ owner });
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}`;
    await delay(5000);
  const repoData: RepoDetailsData = await getData(apiUrl);
  console.log({ repoData });
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

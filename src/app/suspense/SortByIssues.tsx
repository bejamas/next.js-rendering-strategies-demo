
import Card from "@/components/Card";
import { Repo } from "../csr/page";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
async function getData() {
    await delay(4000);
  const response = await fetch(
    "https://api.github.com/search/repositories?q=sort=issues&order=desc&per_page=3",
    { cache: "no-store" }
  );

  const data = await response.json();
  return data.items;
}

const SortByIssues = async () => {
    const repos = (await getData()) as Repo[] | undefined;

  return (
    <>
      <section className="main-section">
        {repos?.map((repo) => (
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
            directory="suspense"
          />
        ))}
      </section>
    </>
  );
};




export default SortByIssues;
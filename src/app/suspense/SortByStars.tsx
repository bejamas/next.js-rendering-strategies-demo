

import Card from "@/components/Card";
import { Repo } from "../csr/page";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
async function getData() {
    await delay(6000);
  const response = await fetch(
    "https://api.github.com/search/repositories?q=stars:>1&sort=stars&order=desc&per_page=3",
    { cache: "no-store" }
  );

  const data = await response.json();
  return data.items;
}

const SortByStars = async () => {
  const repos = (await getData()) as Repo[];

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
            directory="ssr"
          />
        ))}
      </section>
    </>
  );
};




export default SortByStars;
import Card from "../../components/Card";
import { Repo } from "../csr/page";

async function getData() {
  const response = await fetch(
    "https://api.github.com/search/repositories?q=stars:>1&sort=stars&order=desc&per_page=12",
    { cache: "force-cache" } // The { cache: 'force-cache' } is the default option and can be omitted.
  );

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data.items;
}

const SSGPage = async () => {
  const repos = (await getData()) as Repo[];

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
            directory="ssg"
          />
        ))}
      </section>
    </>
  );
};

export default SSGPage;

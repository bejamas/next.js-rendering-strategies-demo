import React from "react";

interface DetailsProps {
  createdAt: string;
  topics: string[];
  name: string;
  avatarUrl: string;
  description: string;
  homepage: string;
  stargazersCount: number;
  language: string;
  watchersCount: number;
  visibility: string;
  forks: number;
  openIssues: number;
  defaultBranch: string;
}

const Details: React.FC<DetailsProps> = ({
  createdAt,
  topics,
  name,
  avatarUrl,
  description,
  homepage,
  stargazersCount,
  language,
  watchersCount,
  visibility,
  forks,
  openIssues,
  defaultBranch,
}) => {
  let dateString = createdAt;

  let originalDate = new Date(dateString);

  let formattedDate = `${originalDate.getDate().toString().padStart(2, "0")}-${(
    originalDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${originalDate.getFullYear()}`;

  return (
    <>
      <section className="details-container">
        <h1 className="details-title">{name.split("-").join(" ")}</h1>
        <p className="date">{formattedDate}</p>

        <img src={avatarUrl} alt={name.split("-").join(" ")} />

        <div className="table-container">
          <table>
            <tbody>
              <tr>
                <td>
                  <h4>Description:</h4>
                </td>
                <td>
                  <p>{description}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Homepage:</h4>
                </td>
                <td>
                  <p>{homepage}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Stargazers Count:</h4>
                </td>
                <td>
                  <p>{stargazersCount}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Language:</h4>
                </td>
                <td>
                  <p>{language}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Watchers Count:</h4>
                </td>
                <td>
                  <p>{watchersCount}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Open Issues Count:</h4>
                </td>
                <td>
                  <p>{openIssues}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Visibility</h4>
                </td>
                <td>
                  <p>{visibility}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Forks</h4>
                </td>
                <td>
                  <p>{forks}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Open Issues</h4>
                </td>
                <td>
                  <p>{openIssues}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Default Branch</h4>
                </td>
                <td>
                  <p>{defaultBranch}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Topics:</h4>
                </td>
                <td>
                  <div className="topics-container">
                    {topics.map((topic, index) => (
                      <p key={index} className="topic">
                        {topic}
                      </p>
                    ))}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Details;

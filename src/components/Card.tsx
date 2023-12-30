import Link from "next/link";

interface CardProps {
  name: string;
  key: string;
  id: string;
  avatarURL: string;
  description: string;
  language: string;
  size: number;
  openIssues: number;
  starGazersCount: number;
  owner: string;
  directory: "csr" | "ssr" | "ssg" | "csr-swr" | "suspense";
}

const Card = ({
  name,
  id,
  avatarURL,
  description,
  language,
  size,
  openIssues,
  starGazersCount,
  owner,
    directory,
  key,
}: CardProps) => {
  return (
    <Link href={`/${directory}/details/${owner}/${name}`}>
      <section className="card" id={id} key={id}>
        <div className="card-header">
          <img src={avatarURL} alt={name} />
        </div>
        <div className="card-body">
          <div className="labels-container">
            {language ? <h6 className="label">{language}</h6> : null}
            <h6 className="label">{Math.round(size / 1000)}kb</h6>
          </div>
          <h4 className="title">{name.split("-").join(" ")}</h4>
          <p>{description}</p>
        </div>
        <div className="card-footer">
          <div className="icon-container">
            <span className="icon">&#x2605;</span>: <p> {starGazersCount}</p>
          </div>
          <div className="icon-container">
            <span className="icon"> &#x2609;</span>:<p> {openIssues}</p>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default Card;

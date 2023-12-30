import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const CardSkeleton = () => {
  return (
    <>
      <section className="card">
        <div className="card-header">
          <Skeleton height={"100%"} baseColor="#202020" highlightColor="#444" />
        </div>
        <div className="labels-container" style={{ marginTop: 12 }}>
          <Skeleton
            className="label"
            width={"90px"}
            baseColor="#202020"
            highlightColor="#444"
          />
          <Skeleton
            className="label"
            width={"90px"}
            baseColor="#202020"
            highlightColor="#444"
          />
        </div>
        <Skeleton
          style={{ marginTop: 6, marginBottom: 6 }}
          count={1}
          width={"100%"}
          height={"20px"}
          baseColor={"#202020"}
          highlightColor={"#444"}
        />
        <Skeleton
          count={4}
          width={"100%"}
          baseColor="#202020"
          highlightColor="#444"
        />
        <div className="labels-container">
          <Skeleton
            className="label"
            width={"90px"}
            baseColor="#202020"
            highlightColor="#444"
          />
          <Skeleton
            className="label"
            width={"90px"}
            baseColor="#202020"
            highlightColor="#444"
          />
        </div>
      </section>
    </>
  );
};
export default CardSkeleton;

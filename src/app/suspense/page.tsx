import { Suspense } from "react";
import Loader from "../../components/CardSkeletonLoader";
import SortByForks from "./SortByForks";
import SortBySize from "./SortBySize";
import SortByStars from "./SortByStars";
import SortByIssues from "./SortByIssues";
import SortByPullRequests from "./SortByPullRequests";

const StreamingWithSuspense = () => {
  return (
      <>
      <h3 style={{ textAlign: "center", margin: "15px 0 0", fontSize: 30 }}>
        Order by Fork Count
      </h3>
      <Suspense fallback={<Loader />}>
        <SortByForks />
      </Suspense>
      <h3 style={{ textAlign: "center", margin: "15px 0 0", fontSize: 30 }}>
        Order by Size
      </h3>
      <Suspense fallback={<Loader />}>
        <SortBySize />
      </Suspense>
      <h3 style={{ textAlign: "center", margin: "15px 0 0", fontSize: 30 }}>
        Order by Star Ratings
      </h3>
      <Suspense fallback={<Loader />}>
        <SortByStars />
      </Suspense>
      <h3 style={{ textAlign: "center", margin: "15px 0 0", fontSize: 30 }}>
        Order by Number of Issues
      </h3>
      <Suspense fallback={<Loader />}>
        <SortByIssues />
      </Suspense>
      <h3 style={{ textAlign: "center", margin: "15px 0 0", fontSize: 30 }}>
        Order by Number of Pull Requests
      </h3>
      <Suspense fallback={<Loader />}>
        <SortByPullRequests />
          </Suspense>
    </>
  );
};

export default StreamingWithSuspense;

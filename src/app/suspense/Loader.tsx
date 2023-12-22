import CardSkeleton from "@/components/CardSkeleton";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Loader = () => {
  return (
    <>
      <section className="main-section">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </section>
    </>
  );
};
export default Loader;

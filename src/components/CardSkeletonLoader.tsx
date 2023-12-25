import CardSkeleton from "@/components/CardSkeleton";
const CardSkeletonLoader = () => {
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
export default CardSkeletonLoader;

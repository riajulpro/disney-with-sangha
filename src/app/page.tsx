import MoviesCarousel from "@/components/MoviesCarousel";

const IndexPage = async () => {
  
  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome</h1>
      {/* MoviesCarousels */}
      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MoviesCarousel movies={[]} title="Upcoming" />
      </div>
    </div>
  );
};

export default IndexPage;

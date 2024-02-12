import MoviesCarousel from "@/components/MoviesCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

const GenrePage = async ({
  params: { id },
  searchParams: { genre },
}: Props) => {
  const movies = await getDiscoverMovies(id);

  return (
    <div className="max-w-7xl mx-auto mt-32 lg:mt-42">
      <div className="flex flex-col space-y-4">
        <h1 className="text-6xl font-bold px-5 lg:px-10">
          Search Results for {genre}
        </h1>
        <MoviesCarousel movies={movies} title="Movies by Genre" isVertical />
      </div>
    </div>
  );
};

export default GenrePage;

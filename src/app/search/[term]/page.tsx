import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

const SearchPage = async ({ params: { term } }: Props) => {
  if (!term) {
    notFound();
  }

  const termToUse = decodeURI(term);

  // Call the searched api
  const movies = await getSearchedMovies(termToUse);
  const popularMovies = await getPopularMovies();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 lg:mt-42">
        <h1 className="text-6xl font-bold px-5 lg:px-10">
          Searched result for {termToUse}
        </h1>
        <MoviesCarousel movies={movies} title="Movies" isVertical />
        <MoviesCarousel movies={popularMovies} title="You may also like" />
      </div>
    </div>
  );
};

export default SearchPage;

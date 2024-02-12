import Image from "next/image";
import { Movie } from "../../typing";
import getImagePath from "@/lib/getImagePath";

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div className="relative flex-shrink-0 transform hover:scale-105 transition duration-200 hover:drop-shadow-lg cursor-pointer">
      <div className="absolute z-10 inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-300 dark:to-[#1A1C29]/80" />
      <p className="text-xs md:text-sm lg:text-base absolute z-20 bottom-5 left-5">
        {movie.title}
      </p>
      <Image
        className="w-fit lg:min-w-[400px] object-cover object-center lg:h-56 shadow-md drop-shadow-xl dark:shadow-gray-900 rounded-sm"
        src={getImagePath(movie.backdrop_path || movie.poster_path)}
        alt={movie.title}
        height={1080}
        width={1920}
        key={movie.id}
      />
    </div>
  );
};

export default MovieCard;

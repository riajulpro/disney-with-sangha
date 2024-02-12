"use client";

import { Movie } from "../../typing";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import getImagePath from "@/lib/getImagePath";

Autoplay.globalOptions = {
  delay: 8000,
};

const CarouselBanner = ({ movies }: { movies: Movie[] }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);

  return (
    <div ref={emblaRef} className="relative overflow-hidden cursor-pointer">
      <div className="flex">
        {movies.map((movie) => (
          <div key={movie.id} className="flex-full relative">
            <Image
              className=""
              src={getImagePath(movie.backdrop_path, true)}
              alt={movie.title}
              height={1080}
              width={1920}
              key={movie.id}
            />

            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-gray-300 dark:to-[#1A1C29]" />

            <div className="hidden md:inline absolute inset-0 z-50 bg-gradient-to-r from-gray-900/80 via-transparent to-transparent">
              <div className="absolute left-10 top-1/2 -translate-y-1/2 z-20">
                <h2 className="text-5xl font-bold max-w-xl">{movie.title}</h2>
                <p className="max-w-xl line-clamp-3">{movie.overview}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselBanner;

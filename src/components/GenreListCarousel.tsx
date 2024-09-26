import { ReactNode } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { tTopSong } from "@/types/song";
import { chunkArray } from "@/lib/utils";
import SongCard from "@/components/SongCard";
import GenreCard from "@/components/GenreCard";

type Props = {
  title: string;
  subTitle?: string;
  Thumbnail?: ReactNode;
  genres: string[];
};

export default function GenreListCarousel({
  title,
  subTitle,
  Thumbnail,
  genres,
}: Props) {
  const chunkedGenres = chunkArray(genres, 4);

  return (
    <div className="w-full">
      <Carousel>
        <div className="flex flex-row justify-between items-end">
          <article className="flex flex-row gap-4">
            {Thumbnail}
            <div className="flex flex-col justify-center">
              <div>
                {subTitle && <div className="text-neutral-500">{subTitle}</div>}
              </div>
              <div className="text-[34px] font-bold leading-[34px]">
                {title}
              </div>
            </div>
          </article>
          <div className="relative left-[-45px]">
            <div className="absolute bottom-[20px]">
              <CarouselPrevious className="right-2" />
              <CarouselNext className="left-2" />
            </div>
          </div>
        </div>
        <CarouselContent className="mt-4">
          {chunkedGenres?.map((genres, index) => (
            <CarouselItem key={index} className="basis-1/2 lg:basis-1/4">
              <GenreColumn genres={genres} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

type GenreColumnProps = {
  genres: string[];
};

function GenreColumn({ genres }: GenreColumnProps) {
  return (
    <div className="flex flex-col gap-4">
      {genres.map((genre, index) => (
        <GenreCard key={genre} genre={genre} />
      ))}
    </div>
  );
}

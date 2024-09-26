import { ReactNode } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PlaylistCard from "@/components/PlaylistCard";
import { tTopSong } from "@/types/song";
import { chunkArray } from "@/lib/utils";
import SongCard from "@/components/SongCard";

type Props = {
  title: string;
  subTitle?: string;
  Thumbnail?: ReactNode;
  top10Songs: tTopSong[];
};

export default function SongListCarousel({
  title,
  subTitle,
  Thumbnail,
  top10Songs,
}: Props) {
  const chunkedTopSongs = chunkArray(top10Songs, 4);

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
          {chunkedTopSongs?.map((topSongs, index) => (
            <CarouselItem key={index} className="lg:basis-1/2">
              <SongColumn topSongs={topSongs} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

type SongColumnProps = {
  topSongs: tTopSong[];
};

function SongColumn({ topSongs }: SongColumnProps) {
  return (
    <div className="flex flex-col gap-4">
      {topSongs.map((topSong, index) => (
        <SongCard key={index} topSong={topSong} />
      ))}
    </div>
  );
}

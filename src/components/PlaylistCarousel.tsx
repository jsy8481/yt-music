import { tPlaylist } from "@/types/playlist";
import { ReactNode } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PlaylistCard from "@/components/PlaylistCard";

type Props = {
  title: string;
  subTitle?: string;
  Thumbnail?: ReactNode;
  playlists?: tPlaylist[];
};

export default function PlaylistCarousel({
  title,
  subTitle,
  Thumbnail,
  playlists,
}: Props) {
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
          {playlists?.map((playlist, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <PlaylistCard playlist={playlist} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

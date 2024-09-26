"use client";

import IconButton from "@/components/IconButton";
import { getRandomElementFromArray } from "@/lib/utils";
import { tPlaylist } from "@/types/playlist";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiPlay } from "react-icons/fi";
import { MdMoreVert } from "react-icons/md";

type Props = {
  playlist: tPlaylist;
};

export default function PlaylistCard({ playlist }: Props) {
  const router = useRouter();
  const { id, owner, playlistName, songList } = playlist;
  const songListLength = songList.length;

  const onClickCard = () => {
    router.push(`/playlist?list=${id}`);
  };

  const onClickPlay = () => {
    // TODO play
  };

  return (
    <article className="h-[240px] cursor-pointer group">
      <section onClick={onClickCard} className="relative h-[136px]">
        <Image
          fill={true}
          alt="thumbnail"
          quality={50}
          className="object-cover rounded-md"
          src={getRandomElementFromArray(songList).imageSrc}
        />
        <div className="relative hidden group-hover:block bg-gradient-to-b from-[rgba(0,0,0,0.7)] top-0 h-[136px]">
          <div className="absolute top-2 right-4">
            <IconButton icon={<MdMoreVert size={20} />} />
          </div>
          <div
            onClick={onClickPlay}
            className="absolute bottom-4 right-4 flex items-center justify-center transform-gpu transition-transform hover:scale-110 bg-[rgba(0,0,0,0.7)] w-[45px] h-[45px] rounded-full hover:bg-[rgba(0,0,0,0.9)] pl-1"
          >
            <FiPlay size={22} color="red" />
          </div>
        </div>
      </section>
      <section className="mt-2">
        <div>{playlistName}</div>
        <div className="text-neutral-500">{`${owner} - 트랙 ${songListLength}`}</div>
      </section>
    </article>
  );
}

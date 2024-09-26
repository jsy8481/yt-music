"use client";
import { tSong, tTopSong } from "@/types/song";
import Image from "next/image";
import {
  FiMoreVertical,
  FiPlayCircle,
  FiThumbsDown,
  FiThumbsUp,
} from "react-icons/fi"; 
import IconButton from "@/components/IconButton";
import { useRouter } from "next/navigation";

type Props = {
  song: tSong;
};

export default function SongCardExpand({ song }: Props) {
  const router = useRouter();
  function onClickChannel() {
    router.push(`/channel/${song.channelId}`);
  }

  return (
    <article className="flex flex-row gap-4 h-[48px] w-full items-center relative group">
      <div className="w-[48px] h-[48px] relative">
        <Image fill alt="커버" src={song.imageSrc} className="object-cover" />
        <section className="absolute hidden group-hover:flex w-[48px] h-[48px] items-center justify-center bg-black transition cursor-pointer">
          <FiPlayCircle size={20} />
        </section>
      </div>
      <div className="flex flex-row gap-4 justify-between basis-1/3">
        <div className="w-[130px] truncate">{song.name}</div>
        <div
          onClick={onClickChannel}
          className="text-neutral-500 hover:underline cursor-pointer"
        >
          {song.channel}
        </div>
      </div>
      <section className="hidden group-hover:flex absolute right-0 flex-row bg-[rgba(0,0,0,0.7)]">
        <IconButton icon={<FiThumbsDown size={20} />} />
        <IconButton icon={<FiThumbsUp size={20} />} />
        <IconButton icon={<FiMoreVertical size={20} />} />
      </section>
    </article>
  );
}

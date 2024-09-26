import { tSong, tTopSong } from "@/types/song";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import {
  FiMoreVertical,
  FiPlayCircle,
  FiThumbsDown,
  FiThumbsUp,
} from "react-icons/fi";
import IconButton from "@/components/IconButton";

type Props = {
  topSong: tTopSong;
};

export default function SongCard({ topSong }: Props) {
  return (
    <article className="flex flex-row gap-4 h-[48px] w-full items-center relative group">
      <div className="w-[48px] h-[48px] relative">
        <Image
          fill
          alt="커버"
          src={topSong.imageSrc}
          className="object-cover"
        />
        <section className="absolute hidden group-hover:flex w-[48px] h-[48px] items-center justify-center bg-black transition cursor-pointer">
          <FiPlayCircle size={20} />
        </section>
      </div>
      <div className="flex flex-row items-center gap-4 justify-center">
        {topSong.rank === topSong.prevRank ? (
          <div>
            <FaCircle size={10} />
          </div>
        ) : topSong.rank > topSong.prevRank ? (
          <AiOutlineCaretDown size={10} color="#3CA63F" />
        ) : (
          <AiOutlineCaretUp size={10} color="#FF0000" />
        )}
        <div>{topSong.rank + 1}</div>
      </div>
      <div>
        <div>{topSong.name}</div>
      </div>
      <section className="hidden group-hover:flex absolute right-0 flex-row bg-[rgba(0,0,0,0.7)]">
        <IconButton icon={<FiThumbsDown size={20} />} />
        <IconButton icon={<FiThumbsUp size={20} />} />
        <IconButton icon={<FiMoreVertical size={20} />} />
      </section>
    </article>
  );
}

import DarkButton from "@/app/playlist/components/PlaylistHead/components/DarkButton";
import WhiteButton from "@/app/playlist/components/PlaylistHead/components/WhiteButton";
import IconButton from "@/components/IconButton";
import { getRandomElementFromArray } from "@/lib/utils";
import { tPlaylist } from "@/types/playlist";
import Image from "next/image";
import { FiMoreVertical } from "react-icons/fi";
import { FaCaretRight } from "react-icons/fa6";
import { RiPlayListAddFill } from "react-icons/ri";

type Props = {
  playlist: tPlaylist;
};

export default function PlaylistHead({ playlist }: Props) {
  const { playlistName, owner, songList } = playlist;
  const randomSong = getRandomElementFromArray(songList);
  return (
    <section>
      <div className="flex flex-row justify-center gap-[50px]">
        <div className="relative h-[160px] w-[160px] lg:h-[240px] lg:w-[240px]">
          <Image alt="songImage" fill src={randomSong.imageSrc} />
        </div>
        <article className="flex flex-col justify-center">
          <div className="font-bold text-[28px]">{playlistName}</div>
          <div className="text-neutral-400 mt-4 text-[14px]">
            <div>{`앨범 ∙ ${owner} ∙ 2019`}</div>
            <div>{`${songList.length}곡 ∙ 15분`}</div>
          </div>
          <ul className="hidden lg:flex flex-row items-center gap-4 mt-4">
            <WhiteButton
              className={"w-[90px] text-[14px]"}
              icon={<FaCaretRight size={20} />}
              label="재생"
            />
            <DarkButton
              className={"w-[140px] text-[14px]"}
              icon={<RiPlayListAddFill size={20} />}
              label={"보관함에 저장"}
            />
            <IconButton icon={<FiMoreVertical size={24} />} />
          </ul>
        </article>
      </div>
      <ul className="flex lg:hidden flex-row items-center gap-4 mt-4">
        <WhiteButton
          className={"w-[90px] text-[14px]"}
          icon={<FaCaretRight size={20} />}
          label="재생"
        />
        <DarkButton
          className={"w-[140px] text-[14px]"}
          icon={<RiPlayListAddFill size={20} />}
          label={"보관함에 저장"}
        />
        <IconButton icon={<FiMoreVertical size={24} />} />
      </ul>
    </section>
  );
}

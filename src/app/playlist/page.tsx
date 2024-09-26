import HeaderBgChanger from "@/app/playlist/components/HeaderBgChanger";
import PlaylistHead from "@/app/playlist/components/PlaylistHead/PlaylistHead";
import SongCardExpand from "@/app/playlist/components/SongCardExpand";
import PagePadding from "@/components/PagePadding";
import { getPlaylistById } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";
import { NextPage } from "next";
import { permanentRedirect } from "next/navigation";

type Props = {
  searchParams: { list: string };
};

const page = async ({ searchParams }: Props) => {
  const playlist = await getPlaylistById(+searchParams.list);
  if (!playlist) {
    permanentRedirect("/");
  }
  const imageSrc = getRandomElementFromArray(playlist.songList)?.imageSrc;

  return (
    <PagePadding>
      <HeaderBgChanger imageSrc={imageSrc} />
      <div className="mt-12"></div>
      <PlaylistHead playlist={playlist} />
      <div className="mt-12"></div>
      <section className="flex flex-col gap-2">
        {playlist.songList.map((song, index) => (
          <SongCardExpand key={index} song={song} />
        ))}
      </section>
    </PagePadding>
  );
};

export default page;

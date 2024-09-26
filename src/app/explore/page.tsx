import Category from "@/app/explore/components/Category";
import GenreListCarousel from "@/components/GenreListCarousel";
import PagePadding from "@/components/PagePadding";
import PlaylistCarousel from "@/components/PlaylistCarousel";
import SongListCarousel from "@/components/SongListCarousel";
import {
  dummyGenreList,
  getAllPlaylist,
  getSongListTop10,
} from "@/lib/dummyData";

export default async function Page() {
  const [playlists, top10Songs] = await Promise.all([
    getAllPlaylist(),
    getSongListTop10(),
  ]);

  return (
    <PagePadding>
      <div className="mt-4" />
      <Category />
      <div className="mt-20"></div>
      <PlaylistCarousel title="새 앨범 및 싱글" playlists={playlists} />
      <div className="mt-20"></div>
      <SongListCarousel title="인기곡" top10Songs={top10Songs} />
      <div className="mt-20"></div>
      <GenreListCarousel title="분위기 및 장르" genres={dummyGenreList} />
      <div className="mt-20"></div>
      <div className="mt-20"></div>
    </PagePadding>
  );
}

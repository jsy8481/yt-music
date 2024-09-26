import Category from "@/app/(site)/components/Category";
import PagePadding from "@/components/PagePadding";
import PlaylistCarousel from "@/components/PlaylistCarousel";
import UserIcon from "@/components/UserIcon";
import { dummyPlaylistArray, getPlaylistById } from "@/lib/dummyData";

export default async function Home() {
  const dummyPlaylistArray1 = [...dummyPlaylistArray];
  const dummyPlaylistArray2 = [await getPlaylistById(1)];
  const dummyPlaylistArray3 = [await getPlaylistById(2)];
  const dummyPlaylistArray4 = [await getPlaylistById(3)];

  return (
    <PagePadding>
      <div className="min-h-[600px]">
        <div className="mt-9"></div>
        <Category />
        <div className="mt-12"></div>
        <PlaylistCarousel
          playlists={[...dummyPlaylistArray1]}
          Thumbnail={
            <div className="w-[56px] h-[56px] flex justify-center items-center">
              <UserIcon size="lg" />
            </div>
          }
          title="다시 듣기"
          subTitle="도도"
        />
        <div className="mt-20"></div>
        <PlaylistCarousel
          playlists={[...dummyPlaylistArray2]}
          Thumbnail={
            <div className="w-[56px] h-[56px] flex justify-center items-center">
              <UserIcon size="lg" />
            </div>
          }
          title="케이시 - Full Bloom"
          subTitle="새로운 앨범"
        />
        <div className="mt-20"></div>
        <PlaylistCarousel
          playlists={[...dummyPlaylistArray3]}
          title="커뮤니티 제공"
        />
        <div className="mt-20"></div>
        <PlaylistCarousel
          playlists={[...dummyPlaylistArray4]}
          title="커버 및 리믹스"
        />
      </div>
    </PagePadding>
  );
}

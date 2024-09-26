import Category from "@/app/library/components/Category";
import PagePadding from "@/components/PagePadding";
import PlaylistCard from "@/components/PlaylistCard";
import { dummyPlaylistArray } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";

export default function Page() {
  return (
    <PagePadding>
      <div className="mt-9"></div>
      <Category />
      <div className="mt-12"></div>
      <section className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
      </section>
    </PagePadding>
  );
}

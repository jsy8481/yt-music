import { tSong } from "@/types/song";

export type tPlaylist = {
  id: number;
  owner: string;
  playlistName: string;
  songList: tSong[];
};

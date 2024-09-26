import { tPlaylist } from "@/types/playlist";
import { tSong } from "@/types/song";

export interface tChannel {
  id: number;
  subscribers: number;
  name: string;
  songList: tSong[];
  playlistArray: tPlaylist[];
}

export interface tSong {
  name: string;
  channelId: number;
  channel: string;
  src: string;
  imageSrc: string;
}

export interface tTopSong extends tSong {
  prevRank: number;
  rank: number;
}

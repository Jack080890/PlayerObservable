import { Player } from "./player.model";


export interface IAlbum {
    currentSong: Player | undefined,
    songList: Player[]
};
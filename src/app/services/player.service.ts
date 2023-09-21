import { Injectable } from '@angular/core';
import { Player, demoCanzoni } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  currentSong: Player | undefined;
  songList:Player[] = demoCanzoni;

  constructor() { }
}

import { Injectable } from '@angular/core';
import { Player, demoCanzoni } from '../models/player.model';
import { IAlbum } from '../models/album.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  currentSong: Player | undefined;
  songList:Player[] = demoCanzoni;
  private album$: BehaviorSubject<IAlbum>;

  constructor() {
    if (this.songList.length) {
      this.currentSong = this.songList[0];
    }
    this.album$ = new BehaviorSubject({
      currentSong: this.currentSong,
      songList: this.songList
    })
}

getAlbum$():Observable<IAlbum>{
  return this.album$.asObservable();
}

next(){
  if(this.songList.length && this.currentSong){
    const lunghezza = this.songList.length;
    const posizione = this.songList.indexOf(this.currentSong);
    const next = posizione < (lunghezza-1) ? posizione+1 : 0;

    this.currentSong = this.songList[next];
    this.update();
  }else return;
}

prev(){
  if(this.songList.length && this.currentSong){
    const posizione = this.songList.indexOf(this.currentSong);
    const prev = posizione > 0 ? posizione-1 : (this.songList.length-1) ;
  
    this.currentSong = this.songList[prev];
    this.update();
  }else return;
}

setSong(i: number) {
  if (i <= this.songList.length - 1) {
    this.currentSong = this.songList[i];
    this.update();
  }
}


 private update(){
    this.album$.next({
      currentSong: this.currentSong,
      songList: this.songList
    });
  }



}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlbum } from 'src/app/models/album.model';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent {

  album$: Observable<IAlbum>;
  album: IAlbum | undefined;
  constructor(
    public playerService: PlayerService
  ){
    this.album$ = this.playerService.getAlbum$();
  }

}

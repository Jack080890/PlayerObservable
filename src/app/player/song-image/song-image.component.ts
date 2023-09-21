import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlbum } from 'src/app/models/album.model';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-song-image',
  templateUrl: './song-image.component.html',
  styleUrls: ['./song-image.component.scss']
})
export class SongImageComponent {

  album$: Observable<IAlbum>;
  album: IAlbum | undefined;
  constructor(
    public playerService: PlayerService
  ){
    this.album$ = this.playerService.getAlbum$();
  }

}

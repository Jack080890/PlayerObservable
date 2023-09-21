import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlbum } from 'src/app/models/album.model';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-header',
  templateUrl: './player-header.component.html',
  styleUrls: ['./player-header.component.scss']
})
export class PlayerHeaderComponent {

  album$: Observable<IAlbum>;
  album: IAlbum | undefined;
  constructor(
    public playerService: PlayerService
  ){
    this.album$ = this.playerService.getAlbum$();
  }

}

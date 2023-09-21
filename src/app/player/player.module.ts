import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { PlayerHeaderComponent } from './player-header/player-header.component';
import { SongImageComponent } from './song-image/song-image.component';
import { PlayerActionsComponent } from './player-actions/player-actions.component';
import { SongListComponent } from './song-list/song-list.component';



@NgModule({
  declarations: [PlayerComponent, PlayerHeaderComponent, SongImageComponent, PlayerActionsComponent, SongListComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    PlayerComponent
  ]
})
export class PlayerModule { }

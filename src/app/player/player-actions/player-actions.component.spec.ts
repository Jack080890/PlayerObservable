import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerActionsComponent } from './player-actions.component';

describe('PlayerActionsComponent', () => {
  let component: PlayerActionsComponent;
  let fixture: ComponentFixture<PlayerActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerActionsComponent]
    });
    fixture = TestBed.createComponent(PlayerActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

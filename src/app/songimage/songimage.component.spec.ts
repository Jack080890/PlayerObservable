import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongimageComponent } from './songimage.component';

describe('SongimageComponent', () => {
  let component: SongimageComponent;
  let fixture: ComponentFixture<SongimageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SongimageComponent]
    });
    fixture = TestBed.createComponent(SongimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

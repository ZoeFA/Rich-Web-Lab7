import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumGenreComponent } from './album-genre.component';

describe('AlbumGenreComponent', () => {
  let component: AlbumGenreComponent;
  let fixture: ComponentFixture<AlbumGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumGenreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

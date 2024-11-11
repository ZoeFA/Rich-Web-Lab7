import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Albumgenre } from '../albumgenre';
import {provideRouter} from '@angular/router';
import {Routes, RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-album-genre',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  //templateUrl: './album-genre.component.html',
  template: `
    <section class="album">
      <img
        class="album-image"
        [src]="albumGenre.cover"
        alt="Image of the album cover for {{albumGenre.title}}"
        crossorigin
        (error)="handleImageError($event)"
      />
      <h2 class="album-title">{{albumGenre.title}}</h2>
      <p class="album-artist">by {{albumGenre.artist}}</p>
      <a [routerLink]="['/details', albumGenre.id]">Learn More</a>
    </section>
    `,
  styleUrl: './album-genre.component.css'
})
export class AlbumGenreComponent {
  @Input() albumGenre!: Albumgenre;

  handleImageError(event: Event) {
    const target = event.target as HTMLImageElement;

    //mapp each album id to its specific fallback image
    const fallbackImages: {[key: number]: string} ={

      101: '/assets/brat-cover.png',
      102: '/assets/lossoflife-cover.png',
      103: '/assets/diamondjub-cover.jpg',
      104: '/assets/hyperdrama-cover.png',
      105: '/assets/fearlessmove-cover.png',
    };

    //use the album ID to get the correct fallback image
    const fallbackImage = fallbackImages[this.albumGenre.id];
    target.src = fallbackImage;
  }
}

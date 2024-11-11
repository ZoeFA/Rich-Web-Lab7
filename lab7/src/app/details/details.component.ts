import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Albumgenre } from '../albumgenre';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  //templateUrl: './details.component.html',
  template:`
    <article>
      <img
        class="album-cover"
        [src]="albumGenre?.cover"
        alt="Album cover of {{albumGenre?.title}}"
        crossorigin
        (error)="handleImageError($event)"
      />
      <section class="album-description">
        <h2 class="album-title">{{albumGenre?.title}}</h2>
        <p class="album-desc">
          {{albumGenre?.description}}
        </p>
      </section>
      <section class="album-details">
        <h2 class="section-heading">About this album</h2>
        <ul>
          <li>
            Release Date: {{albumGenre?.date}}
          </li>
          <li>
            Artist: {{albumGenre?.artist}}
          </li>
          <li>
            Genre(s): {{albumGenre?.genres}}
          </li>
        </ul>
      </section>
      <section class="album-review">
        <h2 class="section-heading">Send in a review here!</h2>
        <form [formGroup]="reviewForm" (submit)="submitReview()">
          <label for="rating-label">What do you give this album out of 10?(one decimal place is allowed)</label>
          <input id="rating-input" type="number" formControlName="rating" />

          <label for="opinion-label">Please leave a short review</label>
          <input id="opinion-input" type="text" formControlName="opinion" />

          <label for="username-label">Enter in a username</label>
          <input id="username-input" type="text" formControlName="username" />
          <button type="submit" class="primary">Submit Review</button>
        </form>
      </section>
    </article>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  albumsService = inject(AlbumsService);
  albumGenre: Albumgenre | undefined;

  reviewForm = new FormGroup({
    rating: new FormControl(null, [Validators.min(0.0), Validators.max(10.0)]),
    opinion: new FormControl(''),
    username: new FormControl(''),
  });

  constructor(){
    const albumGenreId = this.route.snapshot.params['id'];
    this.albumsService.getAlbumGenreById(albumGenreId).then((albumGenre) =>{
      this.albumGenre = albumGenre;
    });
  }

  submitReview(){
    this.albumsService.submitReview(
      this.reviewForm.value.rating ?? 0.0,
      this.reviewForm.value.opinion ?? '',
      this.reviewForm.value.username ?? '',
    );
  }

  //method to handle image load errors, set to fallback image
  handleImageError(event: Event){
    const target = event.target as HTMLImageElement;
    
    if (this.albumGenre) {
      switch (this.albumGenre.id) {
        case 101:
          target.src = '/assets/brat-cover.png';
          break;
        case 102:
          target.src = '/assets/lossoflife-cover.png';
          break;
        case 103:
          target.src = '/assets/diamondjub-cover.jpg';
          break;
        case 104:
          target.src = '/assets/hyperdrama-cover.png';
          break;
        case 105:
          target.src = '/assets/fearlessmove-cover.png';
          break;
        default:
          target.src = '/assets/logo.png'; // A generic fallback image
          break;
      }
    } else {
      target.src = '/assets/logo.png'; // A generic fallback image
    }
  }
}

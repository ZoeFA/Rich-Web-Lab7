import { Injectable } from '@angular/core';
import { Albumgenre } from './albumgenre';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  url = 'http://localhost:3000/albums';

  async getAllAlbumGenres(): Promise<Albumgenre[]>{
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getAlbumGenreById(id: number): Promise<Albumgenre | undefined>{
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  submitReview(rating: number, opinion: string, username: string){
    console.log(
      `Album review received: rating: ${rating}, opinion: ${opinion}, username: ${username}.`,
    );
  }
}

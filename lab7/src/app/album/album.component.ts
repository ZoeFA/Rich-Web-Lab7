import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AlbumGenreComponent } from '../album-genre/album-genre.component';
import { Albumgenre } from '../albumgenre';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [CommonModule, AlbumGenreComponent],
  //templateUrl: './album.component.html',
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by genre" #filter />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-album-genre 
        *ngFor="let albumGenre of filteredGenreList" [albumGenre]="albumGenre">
      </app-album-genre>
    </section>
  `,
  styleUrl: './album.component.css'
})


export class AlbumComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';


  albumGenreList: Albumgenre[] =[];
  filteredGenreList: Albumgenre[] = [];

  albumsService: AlbumsService = inject(AlbumsService);

  constructor(){
    
    this.albumsService.getAllAlbumGenres().then((albumGenreList: Albumgenre[]) =>{

      this.albumGenreList = albumGenreList;
      this.filteredGenreList = albumGenreList;
    });   
    
  }

  filterResults(text: string){
    
    if(!text){
      this.filteredGenreList = this.albumGenreList;
      return;
    }
    
    this.filteredGenreList = this.albumGenreList.filter((albumGenre) =>
      albumGenre?.genres.some(genre => genre.toLowerCase().includes(text.toLowerCase())),
      );
  }

}

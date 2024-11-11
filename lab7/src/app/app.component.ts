import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlbumComponent, RouterLink],
  //templateUrl: './app.component.html',
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
          <img class="name-logo" src="/assets/web-name.png" />
        </header>
      </a>
      <section class="content">
      <h1>2024 Albums</h1>
        <router-outlet></router-outlet>
      </section>
    </main>
    
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'albums24';
}

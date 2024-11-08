import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  template: `
    <h1>2024 Albums</1>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'albums24';
}

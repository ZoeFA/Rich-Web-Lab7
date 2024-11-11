import {Routes} from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
  {
    path:'',
    component: AlbumComponent,
    title: 'Home Page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home Details',
  },
];

export default routeConfig;
import {Routes} from '@angular/router';

import {ProjectsComponent} from './projects.component';
import {HomeComponent} from './home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent}
];

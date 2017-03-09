import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MovieComponent } from './movie/movie.component';
import { MovieRoutingModule } from './movie-routing.module';

@NgModule({
  imports: [
  	SharedModule,
  	MovieRoutingModule
  ],
  declarations: [MovieComponent]
})
export class MovieModule { }

import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DiscoverComponent } from './discover/discover.component';
import { DiscoverRoutingModule } from './discover-routing.module';
import { MovieItemComponent } from './shared/movie-item/movie-item.component';
import { DiscoverActions } from './discover.actions';

@NgModule({
	imports: [
		SharedModule,
		DiscoverRoutingModule
	],
	declarations: [DiscoverComponent, MovieItemComponent],
	providers: [DiscoverActions]
})
export class DiscoverModule { }

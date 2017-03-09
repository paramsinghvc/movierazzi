import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
	{ path: '', redirectTo: 'discover', pathMatch: 'full' },
	{ path: 'discover', loadChildren: 'app/discover/discover.module#DiscoverModule' },
	{ path: 'movie/:movieId', loadChildren: 'app/movie/movie.module#MovieModule' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
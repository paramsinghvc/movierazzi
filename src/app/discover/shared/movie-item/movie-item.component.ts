import { Component, OnInit, Input, HostListener } from '@angular/core';
import { IMovie } from '../models';
import { Router } from '@angular/router';

@Component({
	selector: 'app-movie-item',
	templateUrl: './movie-item.component.html',
	styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
	@Input() movie: IMovie;
	@HostListener('click', ['$event'])
	onMovieClick(e) {
		this.router.navigate(['/movie', 2]);
	}

	constructor(private router: Router) { }

	ngOnInit() {
	}

}

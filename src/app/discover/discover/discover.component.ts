import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { DiscoverActions } from '../discover.actions';
import { Subject } from 'rxjs/Rx';
import {IMovieResult} from '../shared/models';

@Component({
	selector: 'app-discover',
	templateUrl: './discover.component.html',
	styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {
	
	@select(['discover', 'movies']) movies$: Subject<IMovieResult>;

	constructor(private redux: NgRedux<any>, private discoverActions: DiscoverActions) { }

	ngOnInit() {
		this.redux.dispatch(<any>this.discoverActions.fetchDiscoverMovies());
	}

}

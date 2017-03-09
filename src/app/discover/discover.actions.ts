import { Injectable } from '@angular/core';
import { IActionCreator } from '../shared/models';
import { ApiBridgeService } from '../core/api-bridge.service';
import { DiscoverConstants } from './discover.constants';
import { IMovie, IMovieResult, Movie } from './shared/models';

@Injectable()
export class DiscoverActions {
	constructor(private apiBridge: ApiBridgeService) {

	}

	setMovies: IActionCreator = (payload: IMovieResult) => {
		return {
			type: DiscoverConstants.SET_MOVIES,
			payload
		}
	}

	fetchDiscoverMovies() {
		return (dispatch) => {
			this.apiBridge.makeGet(`discover/movie`, [`language=en-US`, `sort_by=popularity.desc`, `include_adult=true`, `page=1`])
				.map(res => res.json())
				.map(res => res.results)
				.map((res) => {
					return res.map(r => new Movie({
						title: r.original_title,
						backdropImage: r.backdrop_path,
						adult: r.adult,
						description: r.overview,
						rating: r.vote_average,
						votes: r.vote_count,
						posterImage: r.poster_path,
						id: r.id
					}))
				})
				.subscribe((res: IMovieResult) => {
					dispatch(this.setMovies(res));
				})
		}
	}
}
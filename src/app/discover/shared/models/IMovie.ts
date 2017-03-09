const IMG_PREFIX = `http://image.tmdb.org/t/p/w500/`;

export interface IMovie {
	title: string;
	backdropImage: string;
	adult: boolean;
	description: string;
	rating: number;
	votes: number;
	posterImage: string;
	id: number;
}

export class Movie implements IMovie {
	title: string;
	backdropImage: string;
	adult: boolean;
	description: string;
	rating: number;
	votes: number;
	posterImage: string;
	id: number;

	constructor(obj: any) {
		this.title = obj.title || '';
		this.backdropImage = obj.backdropImage ? this.getImagePath(obj.backdropImage) : '';
		this.adult = obj.adult;
		this.description = obj.description || '';
		this.rating = obj.rating || '';
		this.votes = obj.votes || '';
		this.posterImage = obj.posterImage ?  this.getImagePath(obj.posterImage) : '';
		this.id = obj.id || '';
	}

	getImagePath(path) {
		return `${IMG_PREFIX}${path}`;
	}
}
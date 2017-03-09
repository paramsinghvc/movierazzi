import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";

const PREFIX_URL = `https://api.themoviedb.org/3/`;

@Injectable()
export class ApiBridgeService {
	key: string;
	constructor(apiKey: string, private http: Http) {
		this.key = apiKey;
	}

	private constructUri(segment, params = []) {
		var prefixUrl = PREFIX_URL;
		params.push(`api_key=${this.key}`);
		var p = params ? `?${params.join('&')}` : ``;
		var completeUrl = (p != "?") ? `${prefixUrl}${segment}${p}` : `${prefixUrl}${segment}`;
		return completeUrl;
	}

	prepareCall(method, url, params, payload = {}, reqHeaders = {}) {
		var uri = this.constructUri(url, params);
		return this.http.request.call(this.http, uri, { method, reqHeaders, body: payload });
	}

	makeGet(url, params = []) {
		return this.prepareCall('get', url, params, {}, {})
	}

	makePost(url, payload = {}, headers = {}, params = []) {
		return this.prepareCall('post', url, params, payload, headers)
	}

	makePut(url, payload = {}, headers = {}, params = []) {
		return this.prepareCall('put', url, params, payload, headers)
	}

	makeDelete(url, payload = {}, headers = {}, params = []) {
		return this.prepareCall('delete', url, params, payload, headers)
	}
}

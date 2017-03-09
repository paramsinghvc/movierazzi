import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiBridgeService } from './api-bridge.service';
import { Http } from "@angular/http";
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { store } from './utils/build-redux-store.service';


const TMDB_API_KEY = `80008a565ce00c783952aebe37b66bb1`;

export function depInject(http) {
	return new ApiBridgeService(TMDB_API_KEY, http);
}

@NgModule({
	imports: [
		CommonModule,
		NgReduxModule
	],
	declarations: []
})
export class CoreModule {
	constructor( @Optional() @SkipSelf() parentModule: CoreModule, ngRedux: NgRedux<any>) {
		if (parentModule) {
			throw new Error(
				'CoreModule is already loaded. Import it in the AppModule only');
		}
		ngRedux.provideStore(store);
	}

	static forRoot(): ModuleWithProviders {
		return {
			ngModule: CoreModule,
			providers: [
				{
					provide: ApiBridgeService,
					useFactory: depInject,
					deps: [Http]
				}
			]
		};
	}
}

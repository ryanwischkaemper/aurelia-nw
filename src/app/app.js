export class App {
	configureRouter(config, router){
		config.title = 'Aurelia-NW.js';
		config.map([
			{ route: ['','welcome'],  moduleId: './welcome',      nav: true, title:'Welcome' },
			{ route: 'flickr',        moduleId: './flickr',       nav: true, title:'Flickr' },
			{ route: 'child-router',  moduleId: './child-router', nav: true, title:'Child Router' }
		]);

		this.router = router;
	}
}
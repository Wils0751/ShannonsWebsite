angular.module('App', ['ui.router'])
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/categories');
		//routing happens here
		$stateProvider
			.state('home', {
				url: '/categories',
				templateUrl: 'main.html',
				controller: "loadCtrl",

			})

			.state('categories', {
				url: '/categories/:catid',
				templateUrl: 'categories.html',
				controller: 'categoryCtrl'

			})
			.state('categories.details', {
				url: '/:itemid',
				templateUrl: 'details.html',
				controller:'detailsCtrl'
				
			});



}]);
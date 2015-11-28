var app = angular.module('nessie', ['ui.router', 'ngMaterial']);

app.constant('api', {
	key: '<PUT YOUR API KEY HERE>'
});

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/main');
	
	$stateProvider
		.state('main', {
			url: '/main',
			templateUrl: 'partials/main.html',
			controller: 'MainController'
		});
});
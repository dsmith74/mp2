var demoApp = angular.module('demoApp', [
	'ngRoute',
	'movieControllers'
]);

demoApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/list', {
		templateUrl: './partials/list.html',
		controller: 'SearchController'
	}).
	when('/details/:imdbID', {
		templateUrl: './partials/details.html',
		controller: 'DetailsController'
	}).
	when('/gallery', {
		templateUrl: './partials/gallery.html',
		controller: 'GalleryController'
	}).
	otherwise({
		redirectTo: '/list'
	});
}]);
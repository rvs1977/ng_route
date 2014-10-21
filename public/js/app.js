(function(){
	var app = angular.module('myApp', ['ngRoute']);

	app.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/', {templateUrl: 'partials/login.html', controller: 'LoginController'});
		$routeProvider.when('/f', {templateUrl: 'mainpage', controller: 'AppController'});
		$routeProvider.otherwise('/');
	}]);

	app.controller('LoginController', function($scope, $location){
		$scope.go = function(){
			// alert('helllllo');
			$location.path('/f');
		}
	});

	

	app.controller('AppController', function($scope, $route){
		$scope.test = 'virker det?: ';
	});
})();
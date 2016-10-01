var mainApp = angular.module("mainApp", ['ngRoute']);

//routing setup in angular js 
 mainApp.config(function($routeProvider) {
    $routeProvider.
    
    when('/add', {
       templateUrl: './partials/addUser.html',
       controller: 'AddUserController'
    }).
    
    when('/view', {
       templateUrl: './partials/viewUser.html',
       controller: 'ViewUserController'
    }).

    when('/about', {
       template: '<h3> Author is Sharif Malik</h3>'
    }).
	    
    otherwise({
       redirectTo: '/about'
    });
 });

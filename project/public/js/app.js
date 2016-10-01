var app  =  angular.module('myapp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {

    $routeProvider.when('/users', {
            templateUrl: 'partials/user.html',
            controller: 'UserCtrl'
        })
        .when('/users/:userId', {
            templateUrl: 'partials/userView.html',
            controller: 'UserViewCtrl'
        })
        .when('/users/:userId/edit', {
            templateUrl: 'partials/userEdit.html',
            controller: 'UserEditCtrl'
        });

    $routeProvider.otherwise({
        redirectTo: '/users'
    });

});

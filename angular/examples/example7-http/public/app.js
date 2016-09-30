var app = angular.module('myApp', []);
  
//Creating controller here  
app.controller('UserController', function($scope, $http) {  
	
	$http.get('http://localhost:1991/api/users').then(function (response){
		$scope.users = response.data;
		console.log(response);
	});
});

var app = angular.module('myApp', []);
  
//Creating controller here  
app.controller('UserController', function($scope) {  
	
	//Creating model here
	$scope.user =  {  
		'name'    :   'Sharif Malik',  
		'address' :   '12-13-283/A1, Chinchwad, Pune',  
		'email'   :   'malik_sharif@yahoo.com'
	};  
});

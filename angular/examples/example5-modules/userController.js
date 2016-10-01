//Creating controller here  

myApp.controller('UserController', function ($scope) {  
	
	//Creating model here
	$scope.user =  {  
		'name'    :   'Sharif Malik',  
		'address' :   '12-13-283/A1, Chinchwad, Pune',  
		'email'   :   'malik_sharif@ymail.com'
	};
	$scope.fieldname = 'user.name'; 
});

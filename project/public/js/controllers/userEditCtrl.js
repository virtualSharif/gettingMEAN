app.controller('UserEditCtrl', function ($routeParams, $scope, $http, $location) {
        
	$scope.id = $routeParams.userId;

	$scope.isNew = function () {
		if($scope.id === 'new')
			return true;
		return false; 
	};

	var createRequestData = function () {
		var data = {
			'firstName' : $scope.user.firstName,
			'lastName' : $scope.user.lastName,
			'emailId' : $scope.user.emailId		
		};
		return data;
	};
	
	$scope.saveUser = function () {
		$http.post('/api/users', createRequestData() ).then(function (response) {
			$location.path('/users');		
		});
	};	

	$scope.updateUser = function () {
		$http.put('/api/users/' + $scope.id, createRequestData()).then(function (response) {
			$location.path('/users');	
		});
	};
	
	$scope.cancel = function () {
		$location.path('/users');
	};

	if(!$scope.isNew()) {
		$http.get('/api/users/' + $scope.id).then(function (response) {
		        $scope.user = response.data[0];
        		console.log(response.data);
    		});
	}

    
});

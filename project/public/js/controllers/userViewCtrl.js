angular.module('myapp').controller('UserViewCtrl', function ($routeParams, $http, $scope, $location) {
    
	$scope.id = $routeParams.userId;

	$http.get("/api/users/" + $scope.id).then(function (response) {
	        $scope.user = response.data[0];
    	});	
	
	$scope.editUser = function (id) {
	        $location.path('/users/' + id + '/edit');
	};
	
});

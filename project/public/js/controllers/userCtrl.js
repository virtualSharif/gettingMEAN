app.controller('UserCtrl', function ($route, $scope, $location, $http, $routeParams) {

	$scope.viewUser = function (id) {
	        $location.path('/users/' + id);
	};

	$scope.editUser = function (id) {
	        $location.path('/users/' + id + '/edit');
	};

	$scope.deleteUser = function (id) {
        	$http.delete("/api/users/" + id).then(function (response) {
        		$route.reload();
		});
	};

	$http.get("/api/users").then(function (response) {
        	$scope.users = response.data;
	});
});

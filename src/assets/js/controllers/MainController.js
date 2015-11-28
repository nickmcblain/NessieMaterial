app.controller('MainController', function($scope, APIService) {
	function init() {
		var promise = APIService.getCustomers();
		promise.then(function(successResponse) {
			$scope.customers = successResponse.data;
			console.log(successResponse.data);
		}, function(errorResponse) {
			console.error(errorResponse);
		});
	}
	
	init();
});
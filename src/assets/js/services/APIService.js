app.factory('APIService', function($http, api) {
	return {
		getCustomers: function() {
			return $http.get('http://api.reimaginebanking.com/customers?key=' + api.key);
		}
	}
});
(function(ng, glob, document, undefined) {
	'use strict';

	var module = angular.module('loader', []);

	function loaderController($scope, $http) {
		$scope.url = 'file://localhost/Users/aparhomenko/development/projects/dxbin_trunk/regression/screenshots/';

		$scope.loadScreeenshots = function loadScreeenshots() {
			var url = $scope.url + 'index.json';
			console.log(url);

			delete $http.defaults.headers.common['X-Requested-With'];
			$http.get(url)
				.success(function(data) {
					console.log(data);
				})
				.error(function() {
					console.log('error', arguments);
				})
			;
		}
	}

	module.directive('screenshotLoader', function() {
		return {
			restrict: "AE",
			controller: loaderController,
			templateUrl: "loader.html"
		}
	})
})(angular, window, document);
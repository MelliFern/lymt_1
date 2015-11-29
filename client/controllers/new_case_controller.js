'use strict';

module.exports = function(app){


	app.controller('newCaseController',
					['$scope', 'resource','$routeParams','$location',  
					function($scope, resource, $routeParams, $location){
		
		//$scope.cases=[];
		//$scope.username = $routeParams.username; 
		
		//var Cases = resource('cases'); 
		
		$scope.uploadDocs = function() {
						    var x = document.createElement("INPUT");
						    x.setAttribute("type", "file");
						    document.body.appendChild(x);
							};
										
						
	}]);


};
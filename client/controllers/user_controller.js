	'use strict';

module.exports = function(app){


	app.controller('userController',
					['$scope', 'resource','$routeParams','$location','$cookies',  
					function($scope, resource, $routeParams, $location, $cookies){		
		//$scope.blog=[];
		var User = resource('user'); 
		$scope.errorhidden = false; 
		$scope.create_new_user = function(newUser){
			console.log('Create new user');
				User.save(newUser, function(data){
					$cookies.eat = data.eat;
					$location.path('/organizations/'+data.user.user_name);
				});
			}
		$scope.login 		= function(user){
			console.log('**** LOGIN ***');
				User.login(user,function(data){
					console.log("client: login callback  " + data);
					if(data == null){
						$scope.errorhidden = true;
					 	$scope.message = "Invalid Email and Password. Please try again.";
			      		}
					else{
						$cookies.eat = data.eat;
						$location.path('/organizations/'+data.user.user_name);
					}
				});
			}
	}]);


};
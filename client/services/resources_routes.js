'use strict';
module.exports = function(app){
	var handleError = function(data){
		console.log("handle Error"); 
		console.dir(data);

	}; 

app.factory('resource', ['$http','$base64', function($http,$base64){
	return function(resourceName){
		return{
			
			save	: function (resource, callback){
				
						$http({
							method	: 'POST', 
							url 	:'/api/v1/create_user', 
							data	: resource
						})
						.success(callback)
						.error(handleError)
					},

			getAll	: function (callback){
				
						$http({
							method	: 'GET', 
							url 	:'/api/v1/org_info'
						})
						.success(callback)
						.error(handleError); 
			},
			login 	:function(resource,callback){
						console.log("Services - Login");
						 $http.defaults.headers.common['Authorization'] 
						      = 'Basic: ' + $base64.encode(resource.username 
						                                      + ':' + resource.password);
					      $http({
							method	: 'GET', 
							url 	:'/api/v1/login'
						})
						.success(callback)
						.error(callback(null));


					}
		}
	}

}])

}
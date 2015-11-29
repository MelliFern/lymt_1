'use strict'; 

require('angular/angular');
require('angular-route');
require('angular-cookies');
require('angular-base64');
var lymtApp = angular.module('lymtApp', ['ngRoute','base64','ngCookies']);

// controllers
require('./controllers/user_controller')(lymtApp);
require('./controllers/organization_controller')(lymtApp);
require('./controllers/new_case_controller.js')(lymtApp);


// services
require('./services/resources_routes')(lymtApp);

//directives
//require('./views/directives/create_blog_directive.js')(blogsApp);

// Routes
lymtApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/', {

		templateUrl	: './views/home.html',
		//controller 	: 'homeController'
	})
	.when('/success_stories', {

		templateUrl	: './views/success_stories.html',
		//controller 	: 'homeController'
	})
	.when('/organizations/:username', {

		templateUrl	: './views/organization.html',
		controller 	: 'orgController'
	})
	.when('/organizations', {

		templateUrl	: './views/organization.html',
		controller 	: 'orgController'
	})
	.when('/urgent_need', {

		templateUrl	: './views/urgent_need.html',
		//controller 	: 'homeController'
	})
	.when('/help_now', {

		templateUrl	: './views/help_now.html',
		//controller 	: 'homeController'
	})
	.when('/register', {

		templateUrl	: './views/create_user.html',
		controller 	: 'userController'
	})
	.when('/login', {

		templateUrl	: './views/login.html',
		controller 	: 'userController'
	})
	.when('/about',{
		templateUrl:'./views/about.html'
	})
	.when('/new_case',{
		templateUrl:'./views/new_case.html'
	})
	.when('/case_list',{
		templateUrl:'./views/case_list.html'
	})
	.otherwise({
		templateUrl:'./views/four_oh_four.html'	
	})

}]);

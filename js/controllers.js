var myApp = angular.module('myApp',[]);//[]normally put dependencies
//can create different controllers
myApp.controller('MyController',function MyController($scope){
//receive a super variable called scope, can pass things from JS to Application and vice versa
//create a model manually this time
	$scope.author = {
		'name': "Jiaming",
		'title': "Student",
		'school': "NYU"  
	}

});

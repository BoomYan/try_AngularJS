var myApp = angular.module('myApp', []); //[]normally put dependencies
//can create different controllers
//use array to protect the names from minification
myApp.controller('MyController', ['$scope', '$http', function ($scope, $http) {
    //receive a super variable called scope, can pass things from JS to Application and vice versa
    //create a model manually this time
    // $scope.author = {
    // 	'name': "Jiaming",
    // 	'title': "Student",
    // 	'school': "NYU"  
    // }

    //ask the http service to get JSON file
    $http.get('js/data.json').success(function(data){
    	$scope.artists = data;
    });

}]);

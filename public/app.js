var myApp = angular.module('myApp', []);
myApp.controller('appCtrl', ['$scope','$http', function($scope, $http){

	console.log('Hello bitch');
	var refresh = function(){
		$http.get('/contactList').success(function(response){
			console.log('I have the data');
			$scope.contactList=response;
			$scope.contact='';
		});
	};

	refresh();

	$scope.addContact = function(){
		$http.post('/contactList',$scope.contact).success(function(response){
			console.log($scope.contact);
			console.log(response);
			refresh();
		});
	};

	$scope.remove = function(id){
		console.log(id);
		$http.delete('/ContactList/'+id).success(function(response){
			refresh();
		});
	};

}]);

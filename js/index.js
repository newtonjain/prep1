var app = angular.module('prep', []);

var gem = {

	name: 'newton jain is in the house',
	age: '25',
	id: '007',
	instore: true,
}

app.controller('build1', function($scope){

$scope.var1 = " Hello World";
$scope.var2 = gem;
$scope.fun1 = function(){

	alert("you have clicked this button congrats" + gem.name);
}

});
var app = angular.module('prep', []);

var gem = [
{
	name: 'newton jain is in the house',
	age: '25',
	id: '007',
	instore: true,

},

{
	name: 'jacob si',
	age: '24',
	id: '001',
	instore: true,
},
{
	name: 'nadir hassan',
	age: '34',
	id: '654',
	instore: true,
},
{
	name: 'gautam',
	age: '21',
	id: '003',
	instore: true,
}];

app.controller('build1', function($scope){

$scope.var1 = " Hello World";
$scope.var2 = [];
$scope.var2 = gem;
$scope.fun1 = function(){

	alert("you have clicked this button congrats" + JSON.stringify($scope.var2[1]));
}

});
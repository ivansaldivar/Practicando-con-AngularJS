angular.module('miAp', []);

angular.module('miAp')
.factory('Dato', function() {
  return {mensaje: 'Saludos desde la Fabrica!'};
});

angular.module('miAp')
.controller('ControladorUno', function($scope, Dato) {
  $scope.dato = Dato;
});

angular.module('miAp')
.controller('ControladorDos', function($scope, Dato) {
  $scope.dato = Dato;
});

angular.module('miAp')
.controller('ControladorTres', function($scope) {
  $scope.dato = {mensaje: 'Saludos desde ControladorTres!'};
});

/*
//angular 1.2

var miAP = angular.module('miAp',[]);

miAP.factory(
	'Dato', 
	function(){
		return {mensaje: 'Saludos desde la Fabrica!'};
	}
);

function ControladorUno($scope, Dato) {
  $scope.dato = Dato;
});

function ControladorDos($scope, Dato) {
  $scope.dato = Dato;
});

*/
angular.module('directivaSimple', [])
  .controller('Controlador', function($scope) {
    $scope.texto1 = {titulo: 'Directiva', subtitulo: 'AngularJS'};
    $scope.texto2 = {titulo: 'Otro Objeto', subtitulo: 'como parametro'};

    $scope.mitexto = {titulo: 'Otro Texto como atributo de un DIV', subtitulo: 'como atributo'};
  })
  .directive('miEncabezado', function() {
    return {
      restrict: 'E',
      scope: {
        textoVariable: '=texto'
      },
      templateUrl: 'mi-encabezado.html'
    }
  })
  .directive('miDirectiva', function() {
    //NOTA=> el nombre de la directiva por el lado del controlador se escribe todo junto:
    //       miDirectiva
    //       en cambio en el HTML (vista) se escribe separado y em minusculas como buena practica:
    //       mi-directiva, aunque podría escribirse como mi-Directiva
    //       Por defecto todas las directivas son ATRIBUTOS de otros objetos HTML
    //       Una directiva puede ser E = Element, o A= Attribute , o ambos casos
    return {
      restrict: 'A',
      template: '<div class="page-header"><h1>{{mitexto.titulo}} <small>{{mitexto.subtitulo}}</small></h1></div>'
    }
  })
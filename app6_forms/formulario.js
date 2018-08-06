function Controlador($scope, $log) {

    usuario: {nombre: '', email: ''};

    $scope.registrar = function(usuario) {
        $log.info('Usuario: ');
        $log.info(usuario);
        $log.info('fue registrado correctamente!');
    };
};
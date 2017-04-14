'use strict';

angular.module('myApp.capitulo5', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/capitulo5', {
            templateUrl: 'capitulo5/capitulo5.html',
            controller: 'Capitulo5Ctrl'
        });
    }])

    .controller('Capitulo5Ctrl', ['$scope', function($scope) {

        $scope.form = {};
        $scope.mostrarValidacion = false;

        $scope.enviarFormulario = enviarFormulario;

        function enviarFormulario() {
            var camposAValidar = ["email", "fechaNacimiento", "paquete", "numMensualidades", "tarjetaVisa"];
            var campoErroneo = validarFormulario($scope.form, camposAValidar);
            campoErroneo = campoErroneo!==""?campoErroneo:validarCondiciones($scope.form.condiciones);
            procesarCampoErroneo(campoErroneo);

            function procesarCampoErroneo(campoErroneo) {
                if (campoErroneo === "") {
                    $scope.mostrarValidacion=false;
                } else {
                    $scope.mostrarValidacion=true;
                    $scope.textoValidacion=campoErroneo;
                }
            }

            function validarCondiciones(ischecked) {
                return ischecked?"":"condiciones";
            }

        }

        function validarFormulario(objForm, campos) {
            for (var a = 0;a<campos.length;a++) {
                var valorCampo = objForm[campos[a]];
                if (!valorCampo) {
                    return campos[a];
                }
            }
            return "";
        }

    }]);
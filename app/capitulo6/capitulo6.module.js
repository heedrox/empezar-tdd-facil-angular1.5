'use strict';

angular.module('myApp.capitulo6', ['ngRoute', 'myApp.lib'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/capitulo6', {
            templateUrl: 'capitulo6/capitulo6.html',
            controller: 'Capitulo6Ctrl'
        });
    }])

    .controller('Capitulo6Ctrl', ['$scope', 'RemoteService', function ($scope, RemoteService) {

        $scope.enviarFormulario = function () {
            var parametros = construirParametros();
            RemoteService.post("/api/capitulo6", parametros);
        };

        function construirParametros() {
            return {
                email: $scope.form.email,
                dateBirth: transformarFechaNacimiento($scope.form.fechaNacimiento),
                package: transformarPaquete($scope.form.paquete),
                monthPayment: obtenerPayment($scope.form.paquete, $scope.form.numMensualidades)
            }
        }

        function transformarFechaNacimiento(fecha) {
            return fecha.getFullYear() + "" + zpad(fecha.getMonth() + 1) + zpad(fecha.getDate());

            function zpad(d) {
                return (d < 10) ? ('0' + d) : d;
            }
        }

        function transformarPaquete(paquete) {
            return paquete === "BASICO" ? 1 : 2;
        }

        function obtenerPayment(paquete, numMensualidades) {
            var COSTES = {
                "BASICO": 50,
                "AVANZADO": 200
            };

            return COSTES[paquete] / numMensualidades;
        }

    }]);
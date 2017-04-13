'use strict';

angular.module('myApp.capitulo4', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/capitulo4', {
            templateUrl: 'capitulo4/capitulo4.html',
            controller: 'Capitulo4Ctrl'
        });
    }])

    .controller('Capitulo4Ctrl', ['$scope', 'CalculoImportes', function($scope, CalculoImportes) {

        $scope.entrada = JSON.stringify(obtenerJsonEntrada());
        $scope.salida = "";
        $scope.obtenerSalida = function() {
            $scope.salida = JSON.stringify(CalculoImportes.calcularImportes(JSON.parse($scope.entrada)));
        };

        function obtenerJsonEntrada() {
            return [
                { "id": 1, "title": "Maniac Mansion Videojuego", "ctd": 5, "pvp": 40 },
                { "id": 2, "title": "Consola XBOX Zero", "ctd": 1, "pvp": 300 },
                { "id": 3, "title": "Prison Break Temporada 76", "ctd": 2, "pvp": 15 }
            ];
        }

    }]);
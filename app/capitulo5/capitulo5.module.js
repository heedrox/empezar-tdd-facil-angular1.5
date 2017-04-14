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

        $scope.enviarFormulario = function() {
            $scope.mostrarValidacion = false;
            if (!$scope.form.email) {
                $scope.textoValidacion = "email";
                $scope.mostrarValidacion = true;
            } else if (!$scope.form.fechaNacimiento) {
                $scope.textoValidacion = "fechaNacimiento";
                $scope.mostrarValidacion = true;
            }
        }
    }]);
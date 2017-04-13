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
        $scope.textoValidacion = "email";

    }]);
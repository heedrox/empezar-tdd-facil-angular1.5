'use strict';

angular.module('myApp.capitulo4', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/capitulo4', {
            templateUrl: 'capitulo4/capitulo4.html',
            controller: 'Capitulo4Ctrl'
        });
    }])

    .controller('Capitulo4Ctrl', [function() {

    }]);
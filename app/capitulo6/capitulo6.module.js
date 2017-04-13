'use strict';

angular.module('myApp.capitulo6', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/capitulo6', {
            templateUrl: 'capitulo6/capitulo6.html',
            controller: 'Capitulo6Ctrl'
        });
    }])

    .controller('Capitulo6Ctrl', [function() {

    }]);
'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.index',
    'myApp.lib',
    'myApp.capitulo4',
    'myApp.capitulo5',
    'myApp.capitulo6'
])
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({redirectTo: '/index'});
    }])
    .run(['$rootScope', '$location', function($rootScope, $location){
        var path = function() { return $location.path();};
        $rootScope.$watch(path, function(newVal, oldVal){
            $rootScope.activetab = newVal;
        });
    }]);
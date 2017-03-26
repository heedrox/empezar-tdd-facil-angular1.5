'use strict';

angular.module('myApp.capitulo1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/capitulo1', {
    templateUrl: 'capitulo1/capitulo1.html',
    controller: 'Capitulo1Ctrl'
  });
}])

.controller('Capitulo1Ctrl', [function() {

}]);
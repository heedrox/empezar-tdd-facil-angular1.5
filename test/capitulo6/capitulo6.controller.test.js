describe("Capitulo5Ctrl valida el formulario del capitulo 5", function() {
    var $rootScope, $controller, $scope;

    beforeEach(module('myApp.capitulo6'));

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));

    beforeEach(function() {
        $scope = $rootScope.$new();
        $controller("Capitulo6Ctrl", { $scope: $scope });
    });



});
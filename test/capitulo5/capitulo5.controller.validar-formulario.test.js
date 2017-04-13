describe("Capitulo5Ctrl valida formulario", function () {

    var $rootScope, $controller;

    beforeEach(module('myApp.capitulo5'));

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));

    it("obtiene el controlador", function () {
        var $scope = $rootScope.$new();
        $controller("Capitulo5Ctrl", { $scope: $scope });

        $scope.enviarFormulario();

        expect($scope.mostrarValidacion).toBeTruthy();
    });

});
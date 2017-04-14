describe("Capitulo6Ctrl hace llamadas AJAX a api/capitulo6 con los datos transformados", function() {
    var $rootScope, $controller, $scope, RemoteService;

    beforeEach(module('myApp.capitulo6'));

    beforeEach(inject(function (_$controller_, _$rootScope_, _RemoteService_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        RemoteService = _RemoteService_;
    }));

    beforeEach(function() {
        $scope = $rootScope.$new();
        $controller("Capitulo6Ctrl", { $scope: $scope });
    });

    it("llama al servidor cuando se pulsa enviar", function() {
        spyOn(RemoteService, "post");

        $scope.enviarFormulario();

        expect(RemoteService.post).toHaveBeenCalled();
    });

});
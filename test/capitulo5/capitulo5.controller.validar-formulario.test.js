describe("Capitulo5Ctrl valida el formulario del capitulo 5", function() {
    var $rootScope, $controller, $scope;

    beforeEach(module('myApp.capitulo5'));

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));

    beforeEach(function() {
        $scope = $rootScope.$new();
        $controller("Capitulo5Ctrl", { $scope: $scope });
    });


    describe("validación correcta", function() {
        it("no muestra mensaje error si todos los campos están bien rellenados", function() {
            dadoUnFormularioRellenadoCorrectamente($scope);

            $scope.enviarFormulario();

            expect($scope.mostrarValidacion).toBeFalsy();
        });
    });

    describe("validación incorrecta", function() {
        var camposQueCausanValidacionIncorrecta = [ "email", "fechaNacimiento"];

        using(camposQueCausanValidacionIncorrecta, function(campo) {
            it("muestra mensaje error si "+campo+" no rellenado", function() {
                dadoUnFormularioRellenadoCorrectamente($scope);
                $scope.form[campo] = null;

                $scope.enviarFormulario();

                expect($scope.mostrarValidacion).toBeTruthy();
                expect($scope.textoValidacion).toBe(campo);
            });
        });

    });
    function dadoUnFormularioRellenadoCorrectamente($scope) {
        $scope.form.email = "unemail@cualquiera.com";
        $scope.form.fechaNacimiento = new Date();
    }
});
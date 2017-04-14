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
        $scope.form = {};
        $scope.form.fechaNacimiento = new Date();
    });

    it("llama al servidor con la api api/capitulo6", function() {
        spyOn(RemoteService, "post");

        $scope.enviarFormulario();

        expect(RemoteService.post.calls.first().args[0]).toBe("/api/capitulo6");
    });

    it("envía el email", function() {
        spyOn(RemoteService, "post");
        $scope.form.email = "unemail@cualquiera.com";

        $scope.enviarFormulario();

        expect(RemoteService.post.calls.first().args[1].email).toBe("unemail@cualquiera.com");
    });

    var fechas = [
        { fechaNacimiento: new Date(1977,03,7), dateBirth: "19770407" },
        { fechaNacimiento: new Date(1977,10,10), dateBirth: "19771110" }
    ];

    using(fechas, function(caso) {
        it("envía la fecha de nacimiento como dateBirth en formato YYYYMMDD para el caso "+caso.dateBirth, function() {
            spyOn(RemoteService, "post");
            $scope.form.fechaNacimiento = caso.fechaNacimiento;

            $scope.enviarFormulario();

            expect(RemoteService.post.calls.first().args[1].dateBirth).toBe(caso.dateBirth);
        });

    });

    var paquetes = [
        { paquete: "BASICO", package: 1 },
        { paquete: "AVANZADO", package: 2 }
    ];

    using(paquetes, function(caso) {
        it("envía el paquete traducido por 1 o 2 - "+caso.package, function() {
            spyOn(RemoteService, "post");
            $scope.form.paquete = caso.paquete;

            $scope.enviarFormulario();

            expect(RemoteService.post.calls.first().args[1].package).toBe(caso.package);
        });

    });

    var COSTES = { BASICO: 50, AVANZADO: 200 };

    var mensualidades = [
        { paquete: "BASICO", numMensualidades: "6", monthPayment: COSTES.BASICO/6 },
        { paquete: "BASICO", numMensualidades: "12", monthPayment: COSTES.BASICO/12 },
        { paquete: "AVANZADO", numMensualidades: "10", monthPayment: COSTES.AVANZADO/10 },
        { paquete: "AVANZADO", numMensualidades: "2", monthPayment: COSTES.AVANZADO/2 }
    ];

    using(mensualidades, function(caso) {
        it("envía el pago mensual (monthPayment) - "+caso.monthPayment, function() {
            spyOn(RemoteService, "post");
            $scope.form.paquete = caso.paquete;
            $scope.form.numMensualidades = caso.numMensualidades;

            $scope.enviarFormulario();

            expect(RemoteService.post.calls.first().args[1].monthPayment).toBe(caso.monthPayment);
        });

    });


});
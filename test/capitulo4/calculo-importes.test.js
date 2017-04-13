describe("CalculoImportes calcula los importes por cada producto y agrega un importe total", function () {

    var CalculoImportes;

    beforeEach(module('myApp.capitulo4'));

    beforeEach(inject(function (_CalculoImportes_) {
        CalculoImportes = _CalculoImportes_;
    }));

    it("is defined", function () {
        expect(CalculoImportes).toBeDefined();
    });

});
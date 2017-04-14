'use strict';

describe('RemoteService', function() {

    var RemoteService;

    beforeEach(module('myApp.lib'));

    beforeEach(inject(function(_RemoteService_) {
        RemoteService = _RemoteService_;
    }));

    it('should be defined', function() {
        expect(RemoteService).toBeDefined();
    });

});

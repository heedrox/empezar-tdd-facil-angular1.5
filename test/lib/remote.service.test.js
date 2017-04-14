/*
'use strict';

describe('RemoteService', function() {

    var URL = "/a/url";
    var PARAMS = { anyParams: 1 };

    var RemoteService, $http, $q;

    beforeEach(module('myApp.lib'));

    beforeEach(inject(function(_RemoteService_, _$http_, _$q_) {
        RemoteService = _RemoteService_;
        $http = _$http_;
        $q = _$q_;
    }));

    it('should be defined', function() {
        spyOn($http, "post").and.returnValue($q.resolve({}));

        RemoteService.post(URL, PARAMS);

        expect($http.post).toHaveBeenCalledWith(URL, PARAMS);
    });

});
*/

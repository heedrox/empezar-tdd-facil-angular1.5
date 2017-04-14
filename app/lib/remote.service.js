(function() {
    angular.module('myApp.lib')
        .service("RemoteService", [ '$http', '$httpParamSerializer', RemoteService ] );

    function RemoteService($http, $httpParamSerializer) {

        var ENDPOINT = "http://localhost:8888";

        return {
            post: post
        };

        function post(url, params) {
            return $http({
                method: 'POST',
                url: ENDPOINT + url,
                data: $httpParamSerializer(params),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(extractData);

            function extractData(x) {
                return x.data;
            }
        }
    }
})();


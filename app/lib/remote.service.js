(function() {
    angular.module('myApp.lib')
        .service("RemoteService", [ '$http', RemoteService ] );

    function RemoteService($http) {

        var ENDPOINT = "http://localhost:8888";

        return {
            post: post
        };

        function post(url, params) {
            return $http.post(ENDPOINT+url, params).then(extractData);

            function extractData(x) {
                return x.data;
            }
        }
    }
})();


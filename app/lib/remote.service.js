(function() {
    angular.module('myApp.lib')
        .service("RemoteService", [ '$http', RemoteService ] );

    function RemoteService($http) {
        return {
            post: post
        };

        function post(url, params) {
            return $http.post(url, params);
        }
    }
})();


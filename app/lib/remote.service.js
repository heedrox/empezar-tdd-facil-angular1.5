(function() {
    angular.module('myApp.lib')
        .service("RemoteService", [ '$http', RemoteService ] );

    function RemoteService($http) {
        return {};
    }
})();


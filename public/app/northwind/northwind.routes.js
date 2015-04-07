(function () {
    'use strict';
    angular.module("app.northwind").config(config);
    config.$inject = ["$stateProvider", "$urlRouterProvider"];
    function config($stateProvider) {
        $stateProvider.state('northwind', {
            url: '/northwind',
            templateUrl: '/app/northwind/views/index.html',
            controller: 'app.northwind.index.controller',
            controllerAs: 'vm'
        });
    }
})();
//# sourceMappingURL=northwind.routes.js.map
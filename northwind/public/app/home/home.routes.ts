(():void => {
    'use strict';

    angular
        .module("app.home")
        .config(config);

    config.$inject = ["$stateProvider", "$urlRouterProvider"];

    function config(
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider):void {

        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/app/home/views/index.html'
            })
            .state('errors', {
                url: '/home/error',
                templateUrl: '/app/home/views/errors.html',
                controller: 'app.home.ErrorController',
                controllerAs: 'vm'
            });
    }
})();

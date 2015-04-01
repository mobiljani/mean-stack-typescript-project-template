module app {
    'use strict';

    interface IErrorScope {
    };

    class Error implements IErrorScope {
        constructor() {
            var vm = this;
        }
    }

    angular
        .module('app.home')
        .controller('app.home.ErrorController', Error);
}

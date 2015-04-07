/// <reference path="../../../typings/tsd.d.ts" />
var app;
(function (app) {
    'use strict';
    ;
    var Index = (function () {
        function Index() {
            var vm = this;
            vm.options = {
                dataSource: {
                    type: "odata",
                    transport: {
                        read: {
                            url: "/api/odata/customer",
                            dataType: 'json'
                        }
                    },
                    pageSize: 10,
                    serverPaging: true,
                    serverSorting: true,
                    schema: {
                        data: function (data) {
                            return data.Results;
                        },
                        total: function (data) {
                            return data.InlineCount;
                        }
                    }
                },
                sortable: true,
                pageable: true,
                columns: [{
                    field: "name",
                    title: "Name"
                }, {
                    field: "address",
                    title: "Address",
                }, {
                    field: "country",
                    title: "Country",
                }, {
                    field: "city",
                    title: "City",
                }, {
                    field: "phone",
                    title: "Phone"
                }]
            };
        }
        return Index;
    })();
    angular.module('app.northwind').controller('app.northwind.index.controller', Index);
})(app || (app = {}));
//# sourceMappingURL=northwind.index.controller.js.map
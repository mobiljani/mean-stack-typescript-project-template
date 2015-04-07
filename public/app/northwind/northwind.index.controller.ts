/// <reference path="../../../typings/tsd.d.ts" />

module app {
    'use strict';

    interface IndexScope {
        options: kendo.ui.GridOptions;
    };

    class Index implements IndexScope {
        options: kendo.ui.GridOptions;

        constructor() {
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
               }
        }
    }

    angular
        .module('app.northwind')
        .controller('app.northwind.index.controller', Index);
}

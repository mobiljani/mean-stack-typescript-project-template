var Enum = (function () {
    function Enum() {
    }
    Enum.getNames = function (e) {
        var a = [];
        for (var val in e) {
            if (isNaN(val)) {
                a.push(val);
            }
        }
        return a;
    };
    Enum.getValues = function (e) {
        var a = [];
        for (var val in e) {
            if (!isNaN(val)) {
                a.push(parseInt(val, 10));
            }
        }
        return a;
    };
    Enum.getValue = function (e, name) {
        return e[name];
    };
    Enum.getName = function (e, val) {
        return e[val];
    };
    return Enum;
})();
exports.Enum = Enum;
//# sourceMappingURL=utility.js.map
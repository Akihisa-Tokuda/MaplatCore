(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Logger = exports.LoggerLevel = void 0;
    exports.LoggerLevel = {
        ALL: -99,
        DEBUG: -1,
        INFO: 0,
        WARN: 1,
        ERROR: 2,
        OFF: 99
    };
    var Logger = (function () {
        function Logger(level) {
            this.level = isNaN(level) ? exports.LoggerLevel.INFO : level;
            this.make();
        }
        Logger.prototype.make = function () {
            for (var key in console) {
                var l = exports.LoggerLevel[key.toUpperCase()];
                if (!l) {
                    continue;
                }
                if (this.level <= l) {
                    return console.log.bind(console);
                }
                else {
                    Logger.prototype[key] = function () { };
                }
            }
        };
        return Logger;
    }());
    exports.Logger = Logger;
});
//# sourceMappingURL=logger.js.map
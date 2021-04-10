"use strict";
exports.__esModule = true;
exports.registerLog = void 0;
function registerLog(route) {
    var prefix = route.join(' > ');
    var cR = route;
    var log = function log(message, data) {
        console.log(prefix + " -> " + message + " | " + JSON.stringify(data || {}));
    };
    return log;
}
exports.registerLog = registerLog;

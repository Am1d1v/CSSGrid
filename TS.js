"use strict";
// Generics
function logTime(num) {
    console.log(new Date());
    return num;
}
function logInfo(info) {
    if (typeof info === 'string') {
        console.log(info.toUpperCase());
    }
    return info;
}
logTime('Some String');
logTime(10);
logInfo('Dima');

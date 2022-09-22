"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTimeStringToMinutes = exports.convertMinutesToTimeString = void 0;
function convertMinutesToTimeString(minutes) {
    const hour = Math.floor(minutes / 60);
    const min = minutes % 60;
    const hourString = hour < 10 ? `0${hour}` : hour;
    const minuteString = min < 10 ? `0${min}` : min;
    return `${hourString}:${minuteString}`;
}
exports.convertMinutesToTimeString = convertMinutesToTimeString;
;
function convertTimeStringToMinutes(time) {
    const [hour, min] = time.split(':').map(Number);
    return (hour * 60) + min;
}
exports.convertTimeStringToMinutes = convertTimeStringToMinutes;
;

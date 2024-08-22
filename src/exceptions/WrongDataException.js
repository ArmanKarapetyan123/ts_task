"use strict";
module.exports = class WrongDataException extends Error {
    // message:string;
    constructor(message) {
        super(message);
        this.name = 'WrongDataException';
        Object.setPrototypeOf(this, WrongDataException.prototype);
    }
};

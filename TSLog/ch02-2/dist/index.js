"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person/person");
var testMakePerson = function () {
    var jane = (0, person_1.makePerson)('Jane');
    var jack = (0, person_1.makePerson)('Jack');
    console.log(jane, jack);
};
testMakePerson();
//# sourceMappingURL=index.js.map
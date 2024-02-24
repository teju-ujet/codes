"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Countrycapital = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Countrycapital = class Countrycapital extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
    }),
    tslib_1.__metadata("design:type", String)
], Countrycapital.prototype, "country", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Countrycapital.prototype, "capital", void 0);
Countrycapital = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Countrycapital);
exports.Countrycapital = Countrycapital;
// Create an array of country-capital pairs
const countrycapitals = [
    new Countrycapital({ country: 'USA', capital: 'Washington, D.C.' }),
    new Countrycapital({ country: 'UK', capital: 'London' }),
    // Add more country-capital pairs here
];
// Export the updated class and types
//# sourceMappingURL=countrycapital.model.js.map
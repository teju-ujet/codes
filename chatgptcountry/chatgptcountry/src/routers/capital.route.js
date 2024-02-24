"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapitalRouter = void 0;
const tslib_1 = require("tslib");
const context_1 = require("@loopback/context");
const rest_1 = require("@loopback/rest");
const controllers_1 = require("../controllers");
let CapitalRouter = class CapitalRouter extends rest_1.Route {
    constructor(countryController) {
        super('get', '/capital/:country', {
            responses: {
                '200': {
                    description: 'Success',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    country: { type: 'string' },
                                    capital: { type: 'string' },
                                },
                            },
                        },
                    },
                },
                '500': {
                    description: 'Internal Server Error',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    error: { type: 'string' },
                                },
                            },
                        },
                    },
                },
            },
        }, async (request, response) => {
            const country = request.params.country;
            try {
                const capital = await this.countryController.getCapital(country);
                response.json({ country, capital });
            }
            catch (error) {
                response.status(500).json({ error: error.message });
            }
        });
        this.countryController = countryController;
    }
};
tslib_1.__decorate([
    (0, context_1.inject)(rest_1.RestBindings.Http.CONTEXT),
    tslib_1.__metadata("design:type", context_1.Context)
], CapitalRouter.prototype, "context", void 0);
CapitalRouter = tslib_1.__decorate([
    tslib_1.__param(0, (0, context_1.inject)('controllers.CountryController')),
    tslib_1.__metadata("design:paramtypes", [controllers_1.QuestionController])
], CapitalRouter);
exports.CapitalRouter = CapitalRouter;
//# sourceMappingURL=capital.route.js.map
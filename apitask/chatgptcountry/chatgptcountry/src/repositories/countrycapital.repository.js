"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountrycapitalRepository = void 0;
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
class CountrycapitalRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Countrycapital, dataSource);
    }
}
exports.CountrycapitalRepository = CountrycapitalRepository;
//# sourceMappingURL=countrycapital.repository.js.map
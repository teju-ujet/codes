"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountrycapitalDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const dsconfig = tslib_1.__importStar(require("./countrycapital.datasource.json"));
const config = {
    name: 'countrycapital',
    connector: 'mysql',
    url: '',
    host: '127.0.0.1',
    port: 3307,
    user: 'root',
    password: 'teju2000',
    database: 'connect'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let CountrycapitalDataSource = class CountrycapitalDataSource extends repository_1.juggler.DataSource {
    constructor(dataSourceConfig = dsconfig) {
        super(dataSourceConfig);
    }
};
CountrycapitalDataSource.dataSourceName = 'countrycapital';
CountrycapitalDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.countrycapital', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], CountrycapitalDataSource);
exports.CountrycapitalDataSource = CountrycapitalDataSource;
//# sourceMappingURL=countrycapital.datasource.js.map
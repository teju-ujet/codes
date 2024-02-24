"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatbotApplication = void 0;
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const boot_1 = require("@loopback/boot");
const service_proxy_1 = require("@loopback/service-proxy");
const questions_controller_1 = require("./controllers/questions.controller");
const country_service_1 = require("./services/country.service");
const openai_service_1 = require("./services/openai.service");
class ChatbotApplication extends (0, boot_1.BootMixin)((0, service_proxy_1.ServiceMixin)(rest_1.RestApplication)) {
    migrateSchema(arg0) {
        throw new Error('Method not implemented.');
    }
    constructor(options) {
        super(options);
        this.setupBindings();
        this.setupControllers();
        this.setupRouter();
    }
    setupBindings() {
        this.bind('services.CountryService').toClass(country_service_1.CountryService);
        this.bind('services.OpenAIService').toClass(openai_service_1.OpenAIService);
    }
    setupControllers() {
        this.controller(questions_controller_1.QuestionController);
    }
    async setupRouter() {
        const server = await this.getServer(rest_1.RestServer);
        server.basePath('/api');
    }
}
exports.ChatbotApplication = ChatbotApplication;
// Create and run the application
const app = new ChatbotApplication();
app
    .bind(core_1.CoreBindings.APPLICATION_INSTANCE)
    .to(app)
    .tag({ [rest_1.RestBindings.SERVER.key]: 'rest-server' })
    .tag({ [rest_1.RestBindings.INVOKE_MIDDLEWARE_SERVICE.key]: true });
app.start().catch((err) => {
    console.error('Cannot start the application.', err);
    process.exit(1);
});
//# sourceMappingURL=application.js.map
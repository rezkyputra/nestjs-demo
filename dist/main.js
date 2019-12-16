"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const port = process.env.PORT || 8080;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const option = new swagger_1.DocumentBuilder()
        .setTitle('Cats example')
        .setDescription('The cat API description')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, option);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(port);
    common_1.Logger.log(`server jalan pada http://localhost:${port}`, 'Running');
}
bootstrap();
//# sourceMappingURL=main.js.map
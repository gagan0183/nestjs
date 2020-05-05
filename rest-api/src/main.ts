import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { FallExceptionFilter } from "./filters/fall.filter";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    app.useGlobalFilters(new FallExceptionFilter());
    await app.listen(9000);
}

bootstrap();
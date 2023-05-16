import { Module } from "@nestjs/common";
import { AppController } from "./app/api/rest/app.controller";
import { AppService } from "./app/services/app.service";

@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

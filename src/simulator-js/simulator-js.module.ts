import { Module } from "@nestjs/common"
import { SimulatorJsService } from "./simulator-js.service";

@Module({
    providers: [SimulatorJsService],
    exports: [SimulatorJsService]
})
export class SimulatorJsModule {}
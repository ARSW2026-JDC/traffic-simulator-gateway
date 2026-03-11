import { Module } from '@nestjs/common';
import { TrafficLightsController } from './traffic-lights.controller';
import { TrafficLightsService } from './traffic-lights.service';
import { TrafficLightsGateway } from './traffic-lights.gateway';

@Module({
  controllers: [TrafficLightsController],
  providers: [TrafficLightsService, TrafficLightsGateway]
})
export class TrafficLightsModule {}

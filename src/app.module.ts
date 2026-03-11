import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrafficLightsModule } from './traffic-lights/traffic-lights.module';
import { MapModule } from './map/map.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { HistoryModule } from './history/history.module';
import { ChatModule } from './chat/chat.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, ChatModule, HistoryModule, VehiclesModule, MapModule, TrafficLightsModule],
  controllers: [AppController, ],
  providers: [AppService, ],
})
export class AppModule {}

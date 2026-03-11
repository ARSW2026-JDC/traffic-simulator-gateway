import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AppGateway } from './app/app.gateway';
import { MapsService } from './maps/maps.service';
import { MapsController } from './maps/maps.controller';
import { TrafficLightsModule } from './traffic-lights/traffic-lights.module';
import { MapModule } from './map/map.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { HistoryModule } from './history/history.module';
import { ChatModule } from './chat/chat.module';
import { AuthModule } from './auth/auth.module';
import { HistoryModule } from './history/history.module';
import { ChatModule } from './chat/chat.module';
import { ChatModule } from './chat/chat.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, ChatModule, HistoryModule, VehiclesModule, MapModule, TrafficLightsModule],
  controllers: [AppController, MapsController],
  providers: [AppService, MapsService, AppGateway],
})
export class AppModule {}

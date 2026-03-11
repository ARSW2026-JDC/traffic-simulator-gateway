import { Module } from '@nestjs/common';
import { HistoryController } from './history.controller';
import { HistoryService } from './history.service';
import { HistoryGateway } from './history.gateway';

@Module({
  controllers: [HistoryController],
  providers: [HistoryService, HistoryGateway]
})
export class HistoryModule {}

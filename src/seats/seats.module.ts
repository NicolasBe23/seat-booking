import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeatsController } from './seats.controller';
import { SeatsService } from './seats.service';
import { Seat } from './seat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Seat])],
  controllers: [SeatsController],
  providers: [SeatsService],
})
export class SeatsModule {}

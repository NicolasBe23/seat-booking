import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Seat } from './seat.entity';

@Injectable()
export class SeatsService implements OnModuleInit {
  constructor(
    @InjectRepository(Seat)
    private readonly seatRepository: Repository<Seat>,
  ) {}

  async onModuleInit() {
    const count = await this.seatRepository.count();
    if (count === 0) {
      const seats: DeepPartial<Seat>[] = Array.from({ length: 10 }, (_, i) => ({
        seatNumber: `A${i + 1}`,
        status: 'available',
      }));
      await this.seatRepository.save(seats);
    }
  }

  async getAllSeats() {
    return this.seatRepository.find();
  }

  async bookSeats(userId: string, seatNumbers: string[]) {
    const bookedSeats: string[] = [];
    const failedSeats: string[] = [];

    for (const seatNumber of seatNumbers) {
      const seat = await this.seatRepository.findOne({ where: { seatNumber } });
      if (seat && seat.status === 'available') {
        seat.status = 'booked';
        seat.userId = userId;
        await this.seatRepository.save(seat);
        bookedSeats.push(seatNumber);
      } else {
        failedSeats.push(seatNumber);
      }
    }

    return { bookedSeats, failedSeats };
  }

  async getSeatsByUser(userId: string) {
    return this.seatRepository.find({ where: { userId } });
  }
}

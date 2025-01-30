import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { SeatsService } from './seats.service';

@Controller('seats')
export class SeatsController {
  constructor(private readonly seatsService: SeatsService) {}

  @Get()
  async getSeats(@Query('userId') userId?: string) {
    if (userId) {
      return {
        userId,
        bookedSeats: await this.seatsService.getSeatsByUser(userId),
      };
    }
    return { seats: await this.seatsService.getAllSeats() };
  }

  @Post()
  async bookSeats(@Body() body: { userId: string; seatNumbers: string[] }) {
    const { bookedSeats, failedSeats } = await this.seatsService.bookSeats(
      body.userId,
      body.seatNumbers,
    );

    if (failedSeats.length > 0) {
      return {
        message: 'Some seats could not be booked.',
        failedSeats,
        bookedSeats,
      };
    }

    return {
      message: 'Seats successfully booked.',
      bookedSeats,
    };
  }
}

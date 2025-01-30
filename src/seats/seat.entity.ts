import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Seat {
  @PrimaryColumn()
  seatNumber: string;

  @Column()
  status: 'available' | 'booked';

  @Column({ nullable: true })
  userId?: string;
}

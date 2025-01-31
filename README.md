<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Seat Booking

Seat reservation system developed with **NestJS**, **TypeORM**, and **PostgreSQL**.

## 🚀 How to Run the Project

1️⃣ **Clone the Repository**
```sh
git clone https://github.com/NicolasBe23/seat-booking.git
cd seat-booking
```

2️⃣ **Start the Database with Docker**
```sh
docker-compose up -d
```

3️⃣ **Install Dependencies**
```sh
npm install
```

4️⃣ **Run the Server**
```sh
npm run start
```
The server will be available at **http://localhost:3000**.

## 📡 Main Endpoints

### **🔹 List Seats**
```http
GET /seats
```
**Example Response:**
```json
{
  "seats": [
    { "seatNumber": "A1", "status": "available" },
    { "seatNumber": "A2", "status": "booked", "userId": "user-123" }
  ]
}
```

### **🔹 Book Seats**
```http
POST /seats
Content-Type: application/json
```
**Request Body:**
```json
{
  "userId": "user-123",
  "seatNumbers": ["A3", "A4"]
}
```
**Example Response:**
```json
{
  "message": "Seats successfully booked.",
  "bookedSeats": ["A3", "A4"]
}
```

## 📄 License
Free-to-use project. Modify and use as you wish! 😃



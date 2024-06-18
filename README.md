# Doctor Appointment System

## Overview
The Doctor Appointment System is a comprehensive web application built using the MERN stack (MongoDB, Express.js, React, Node.js). This system aims to simplify the process of booking medical appointments for patients and managing appointments for doctors. 

## Features
- **Secure Login**: Patients and doctors can securely log in to the system.
- **Doctor Search**: Patients can view all available doctors and search by name, specialization, or locality.
- **Reviews**: Patients can leave reviews for doctors to provide feedback and help others make informed decisions.
- **Appointment Booking**: Patients can book appointments with their chosen doctors and make payments through the Stripe payment gateway.
- **Profile Management**: Both patients and doctors can update their profiles.
- **Doctor Dashboard**: Doctors can view all their appointments and monitor the status of their billing.

## Technologies Used
- **MongoDB**: For the database to store user and appointment information.
- **Express.js**: As the web application framework for the backend.
- **React**: For building the user interface.
- **Node.js**: For the server environment.
- **Stripe**: For payment processing.

## Installation
Follow these steps to get the project up and running on your local machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Gobi-J/doctor-app.git
   cd doctor-app
   ```

2. **Set up environment variables:**
   Create a `.env` file in the `backend` directory and add your MongoDB URI, Stripe keys, and other necessary environment variables.
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_uri
   STRIPE_SECRET_KEY=your_stripe_secret_key
   JWT_SECRET=your_stripe_publishable_key
   ```

3. **Install backend dependencies and run server:**
   ```bash
   cd backend
   npm install
   npm start
   ```

4. **Open new terminal, install frontend dependencies and run server:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

## Usage
1. **Register and login**: Users (patients and doctors) can register and log in to the system.
2. **Search for doctors**: Patients can search for doctors by name, specialization, or locality.
3. **Book appointments**: Patients can book appointments and make payments via Stripe.
4. **Leave reviews**: Patients can leave reviews for doctors.
5. **Manage profiles**: Users can update their profiles.
6. **Doctor dashboard**: Doctors can view their appointments and billing status.

## Demo Link
[Video](https://www.linkedin.com/posts/gobi-j_mern-webdevelopment-frontenddevelopment-activity-7208829297308893185-YoBh?utm_source=share&utm_medium=member_desktop)

## License
This project is licensed under the MIT License.

# Octave8 Music Academy Backend

A RESTful API backend for the Octave8 Music Academy application built with Node.js, Express.js, and MongoDB using MVC architecture.

## Features

- **Authentication System**: JWT-based authentication with signup/login
- **Role-based Access Control**: Admin and User roles
- **User Management**: Complete CRUD operations for users (Admin only)
- **MVC Architecture**: Proper separation of concerns with controllers and middleware
- **Input Validation**: Server-side validation using express-validator
- **Security**: Password hashing, JWT tokens, and secure routes

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database with Mongoose ODM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **express-validator** - Input validation
- **cors** - Cross-origin resource sharing

## Project Structure

```
backend/
├── controllers/
│   ├── authController.js     # Authentication logic
│   └── userController.js     # User management logic
├── middleware/
│   ├── auth.js              # JWT authentication & authorization
│   └── validation.js        # Input validation middleware
├── models/
│   └── User.js              # User database schema
├── routes/
│   ├── authRoutes.js        # Authentication endpoints
│   └── userRoutes.js        # User management endpoints
├── .env                     # Environment variables
├── .gitignore              # Git ignore file
├── package.json            # Dependencies and scripts
└── server.js               # Main server file
```

## Installation & Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Environment Setup**
   Create a `.env` file with:

   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=6003
   JWT_SECRET=your_super_secret_jwt_key
   FRONTEND_URL=http://localhost:8081
   ```

3. **Start the server**

   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

## API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint           | Description              | Access  |
| ------ | ------------------ | ------------------------ | ------- |
| POST   | `/signup`          | Register a new user      | Public  |
| POST   | `/login`           | Login user               | Public  |
| GET    | `/me`              | Get current user profile | Private |
| PUT    | `/profile`         | Update user profile      | Private |
| POST   | `/change-password` | Change user password     | Private |
| POST   | `/logout`          | Logout user              | Private |

### User Management Routes (`/api/users`) - Admin Only

| Method | Endpoint | Description               | Access |
| ------ | -------- | ------------------------- | ------ |
| GET    | `/`      | Get all users (paginated) | Admin  |
| GET    | `/stats` | Get user statistics       | Admin  |
| GET    | `/:id`   | Get user by ID            | Admin  |
| PUT    | `/:id`   | Update user by ID         | Admin  |
| DELETE | `/:id`   | Delete user by ID         | Admin  |

## Default Admin Account

When the server starts, it automatically creates a default admin account:

- **Email**: admin@octave8.com
- **Password**: Admin123!

⚠️ **Important**: Change the default admin password after first login!

## Authentication

The API uses JWT tokens for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## Environment Variables

| Variable       | Description               | Default               |
| -------------- | ------------------------- | --------------------- |
| `MONGO_URI`    | MongoDB connection string | Required              |
| `PORT`         | Server port               | 5000                  |
| `JWT_SECRET`   | JWT signing secret        | Required              |
| `FRONTEND_URL` | Frontend URL for CORS     | http://localhost:5173 |

## License

This project is licensed under the MIT License.

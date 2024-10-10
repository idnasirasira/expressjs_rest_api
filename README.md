# Express.js REST API

This project is designed to help students understand how to create a REST API using Express.js. It provides a simple implementation of a user management system with basic CRUD (Create, Read, Update, Delete) operations.

## Project Structure

```
expressjs_rest_api/
├── .env
├── .env.example
├── .gitignore
├── .prettierrc
├── package.json
├── src/
│   ├── controllers/
│   │   └── userController.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── routes/
│   │   ├── index.js
│   │   ├── userRoutes.js
│   │   └── userRoute.js
│   ├── services/
│   │   └── userService.js
│   └── server.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/idnasirasira/expressjs_rest_api.git
   ```
2. Navigate to the project directory:
   ```sh
   cd expressjs_rest_api
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

### Configuration

1. Create a `.env` file in the root directory and add the following content:
   ```env
   PORT=3000
   ```
   You can refer to the `.env.example` file for an example configuration.

### Running the Application

To start the server, run:

```sh
npm start
```

For development mode with hot-reloading, run:

```sh
npm run dev
```

The server will be running on `http://localhost:3000`.

## API Endpoints

### User Routes

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get a user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update a user by ID
- `DELETE /api/users/:id` - Delete a user by ID

## Project Details

### Controllers

- **userController.js**: Handles the request and response logic for user-related operations.

### Services

- **userService.js**: Contains the business logic and data manipulation for users.

### Middleware

- **errorHandler.js**: A middleware to handle errors and send appropriate responses.

### Routes

- **index.js**: Main router file that includes all route definitions.
- **userRoutes.js**: Defines routes for user-related operations.

### Server

- **server.js**: Entry point of the application. Sets up middleware, routes, and starts the server.

## Development Tools

- **Prettier**: Code formatter configured in `.prettierrc`.
- **Nodemon**: Development tool for automatically restarting the server.

## License

This project is licensed under the MIT License.

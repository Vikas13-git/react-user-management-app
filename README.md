# React User Management Application

A full-stack MERN user-management application built with React, Node.js, Express.js, MongoDB Atlas, and Mongoose. It demonstrates component-based frontend development, REST API design, persistent CRUD operations, form validation, routing, automated testing, and cloud deployment.

## Live Demo

[View the live application](https://react-user-management-app-five.vercel.app/)

> The free Render backend may take up to a minute to start after being inactive.

## Features

* Fetch and display users from MongoDB
* Search and sort users
* View users through dynamic routes
* Add users with validation and submission feedback
* Edit users with `PATCH` requests
* Delete users with confirmation and loading feedback
* Persist changes after refreshing the application
* Handle loading, error, success, and empty states
* Share application data using Context API
* Reuse API logic through a custom Hook
* Validate MongoDB user IDs through Express middleware
* Responsive and accessible interface
* Automated React component tests
* Custom page for unmatched routes

## Application Architecture

| Layer    | Technology                 | Hosting       |
| -------- | -------------------------- | ------------- |
| Frontend | React and Vite             | Vercel        |
| Backend  | Node.js and Express.js     | Render        |
| Database | MongoDB Atlas and Mongoose | MongoDB Atlas |

## Frontend Routes

| Path         | Description                            |
| ------------ | -------------------------------------- |
| `/`          | Displays the user-management interface |
| `/about`     | Displays the About page                |
| `/users/:id` | Fetches and displays a specific user   |
| `*`          | Displays the Page Not Found message    |

## Technologies Used

### Frontend

* React
* JavaScript
* HTML5
* CSS3
* React Router
* Context API
* Fetch API
* Vite
* Vitest
* React Testing Library
* Vercel

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* CORS
* dotenv
* Render

### Development Tools

* ESLint
* Git
* GitHub

## Backend API

The application uses a custom REST API built with Node.js, Express.js, Mongoose, and MongoDB Atlas.

**Base URL:**

```text
https://react-user-management-app-gdz5.onrender.com/api
```

| Method   | Endpoint     | Purpose                          |
| -------- | ------------ | -------------------------------- |
| `GET`    | `/health`    | Check whether the API is running |
| `GET`    | `/users`     | Retrieve all users               |
| `GET`    | `/users/:id` | Retrieve one user                |
| `POST`   | `/users`     | Create a user                    |
| `PATCH`  | `/users/:id` | Update a user                    |
| `DELETE` | `/users/:id` | Delete a user                    |

The API returns appropriate HTTP status codes for successful requests, invalid input, missing users, and unexpected server errors.

## Getting Started

### Prerequisites

Install:

* Node.js
* npm
* Git
* A MongoDB Atlas account

### Installation

Clone the repository:

```bash
git clone https://github.com/Vikas13-git/react-user-management-app.git
```

Enter the project folder:

```bash
cd react-user-management-app
```

Install frontend dependencies:

```bash
npm install
```

Install backend dependencies:

```bash
cd server
npm install
cd ..
```

### Environment Variables

Create `.env.local` in the project root:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Create `.env` inside the `server` directory:

```env
MONGODB_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:5173
PORT=5000
```

Do not commit either private environment file to Git.

### Start the Backend

From the `server` directory:

```bash
npm run dev
```

The backend normally runs at:

```text
http://localhost:5000
```

### Start the Frontend

In a second terminal, from the project root:

```bash
npm run dev
```

The frontend normally runs at:

```text
http://localhost:5173
```

## Available Frontend Scripts

### Start development mode

```bash
npm run dev
```

### Run automated tests

```bash
npm test
```

### Check ESLint

```bash
npm run lint
```

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Available Backend Scripts

Run these commands from the `server` directory.

### Start with automatic restart

```bash
npm run dev
```

### Start in production mode

```bash
npm start
```

## Project Structure

```text
.
├── server/
│   ├── controllers/
│   │   └── userController.js
│   ├── middleware/
│   │   └── validateUserId.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── src/
│   ├── config/
│   │   └── api.js
│   ├── hooks/
│   │   └── useFetch.js
│   ├── test/
│   │   └── setup.js
│   ├── AddUserForm.jsx
│   ├── AddUserForm.test.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── EditUserForm.jsx
│   ├── UserCard.jsx
│   ├── UserContext.jsx
│   ├── UserDetails.jsx
│   ├── UserLists.jsx
│   ├── UserStatus.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── vercel.json
├── vite.config.js
└── package.json
```

## Concepts Practised

### React

* JSX and reusable components
* Props and callback functions
* State management with `useState`
* Side effects with `useEffect`
* Context API and `useContext`
* Custom Hooks
* Controlled forms and validation
* Conditional rendering
* Immutable updates with spread, `map`, and `filter`
* Client-side routing and dynamic parameters
* Programmatic navigation
* Component testing
* Responsive and accessible UI design

### Backend

* REST API design
* Express routing
* Controllers and middleware
* HTTP methods and status codes
* Mongoose schemas and models
* MongoDB CRUD operations
* Environment-variable management
* CORS configuration
* Asynchronous error handling
* Object ID validation

### Deployment

* Git and GitHub workflow
* Vercel frontend deployment
* Render backend deployment
* MongoDB Atlas network access
* Production environment variables
* Automated deployment from the `main` branch

## Future Improvements

* Add authentication and protected routes
* Add pagination
* Add stronger email and phone validation
* Add backend API and controller tests
* Add rate limiting and security middleware
* Improve the design and user experience

## Author

**Vikas Kolla**

GitHub: [Vikas13-git](https://github.com/Vikas13-git)

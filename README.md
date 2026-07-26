# User Management Application

A responsive React application for managing users through a REST API. It demonstrates CRUD operations, controlled forms, validation, asynchronous requests, loading states, error handling, searching, sorting, and communication between React components.

## Features

- Fetch and display users from an API
- Search users by name or email
- Sort users alphabetically
- View complete user details
- Add a new user with form validation
- Edit an existing user
- Delete a user with confirmation
- Refresh the users list
- Loading and submission states
- Success and error feedback
- Prevent duplicate form submissions

## Technologies Used

- React
- JavaScript
- HTML
- CSS
- Vite
- Fetch API
- JSONPlaceholder REST API

## API Operations

| Operation | HTTP method | Purpose |
|---|---|---|
| Load users | `GET` | Retrieve the users list |
| Add user | `POST` | Create a new user |
| Edit user | `PATCH` | Update selected user details |
| Delete user | `DELETE` | Remove a user |

## React Concepts Practised

- Functional components
- Props and callback props
- `useState`
- `useEffect`
- Controlled inputs
- Conditional rendering
- List rendering and keys
- Immutable array updates
- Form validation
- `async/await`
- `try...catch...finally`
- Loading and error states

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Create a production build

```bash
npm run build
```

## API Information

This project uses the free [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API.

JSONPlaceholder simulates `POST`, `PATCH`, and `DELETE` requests. These changes are displayed in the React state but are not permanently stored on the JSONPlaceholder server. Refreshing the application reloads the original API data.

## Learning Outcomes

This project strengthened my understanding of:

- Building reusable React components
- Integrating REST APIs
- Managing asynchronous operations
- Troubleshooting failed API requests
- Maintaining predictable application state
- Providing useful loading, validation, success, and error feedback

## Future Improvements

- Connect to a persistent backend and database
- Add user authentication
- Add pagination
- Improve accessibility
- Add automated tests
- Deploy the application online

## Author

**Vikas Kolla**
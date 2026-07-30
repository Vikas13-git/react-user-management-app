# React User Management Application

A frontend user-management application built with React and Vite. The project demonstrates component-based development, client-side routing, REST API integration, form validation, asynchronous workflows, and CRUD-style user operations.

## Features

- Fetch and display users from a REST API
- Search users by name or email
- Sort users by name in ascending or descending order
- Refresh the users list
- View individual users through dynamic routes
- Add users with form validation and submission feedback
- Edit existing users with `PATCH` requests
- Delete users with confirmation and per-user loading feedback
- Handle loading, error, success, and empty states
- Navigate without full-page reloads using React Router
- Display a custom page for unmatched routes

## Routes

| Path | Description |
| --- | --- |
| `/` | Displays the users list and management interface |
| `/about` | Displays the About page |
| `/users/:id` | Fetches and displays a specific user |
| `*` | Displays the Page Not Found message |

## Technologies Used

- React
- JavaScript
- HTML5
- CSS3
- React Router
- Fetch API
- JSONPlaceholder
- Vite
- ESLint
- Git and GitHub

## API

The application uses the [JSONPlaceholder Users API](https://jsonplaceholder.typicode.com/users).

JSONPlaceholder simulates `POST`, `PATCH`, and `DELETE` requests. These mutations return realistic responses but are not permanently stored on its server. The application updates its local React state so the changes remain visible until the page is refreshed.

## Getting Started

### Prerequisites

Install:

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/Vikas13-git/react-user-management-app.git
```

Enter the project folder:

```bash
cd react-user-management-app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown by Vite, normally:

```text
http://localhost:5173/
```

## Available Scripts

```bash
npm run dev
```

Runs the application in development mode.

```bash
npm run lint
```

Checks the project for ESLint problems.

```bash
npm run build
```

Creates an optimized production build in the `dist` directory.

```bash
npm run preview
```

Locally previews the production build.

## Project Structure

```text
src/
├── AddUserForm.jsx
├── App.css
├── App.jsx
├── EditUserForm.jsx
├── UserCard.jsx
├── UserDetails.jsx
├── UserLists.jsx
├── index.css
└── main.jsx
```

## Concepts Practised

- JSX and reusable components
- Props and callback functions
- State management with `useState`
- Side effects with `useEffect`
- Controlled forms and validation
- Conditional rendering
- Immutable array updates with spread, `map`, and `filter`
- Asynchronous JavaScript with `async` and `await`
- HTTP response and error handling
- Client-side routing with `BrowserRouter`, `Routes`, `Route`, and `Link`
- Dynamic route parameters with `useParams`
- Git version-control workflow

## Future Improvements

- Replace JSONPlaceholder with a custom backend and database
- Add authentication and protected routes
- Add automated component and integration tests
- Improve accessibility and responsive styling
- Deploy the application publicly

## Author

**Vikas Kolla**

GitHub: [Vikas13-git](https://github.com/Vikas13-git)

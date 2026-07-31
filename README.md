# React User Management Application

A frontend user-management application built with React and Vite. The project demonstrates component-based development, client-side routing, REST API integration, form validation, asynchronous workflows, and CRUD-style user operations.

## Live Demo

[View the live application](https://react-user-management-app-five.vercel.app/)

## Features

- Fetch and display users from a REST API
- Search and sort users
- Refresh the users list
- View users through dynamic routes
- Add users with validation and submission feedback
- Edit users with `PATCH` requests
- Delete users with confirmation and loading feedback
- Handle loading, error, success, and empty states
- Share application data using Context API
- Reuse API logic through a custom Hook
- Responsive and accessible interface
- Automated component tests
- Custom page for unmatched routes

## Routes

| Path | Description |
| --- | --- |
| `/` | Displays the user-management interface |
| `/about` | Displays the About page |
| `/users/:id` | Fetches and displays a specific user |
| `*` | Displays the Page Not Found message |

## Technologies Used

- React
- JavaScript
- HTML5
- CSS3
- React Router
- Context API
- Fetch API
- JSONPlaceholder
- Vite
- Vitest
- React Testing Library
- ESLint
- Git and GitHub
- Vercel

## API

The application uses the [JSONPlaceholder Users API](https://jsonplaceholder.typicode.com/users).

JSONPlaceholder simulates `POST`, `PATCH`, and `DELETE` requests. These mutations return realistic responses but are not permanently stored on its server. The application updates local React state, so changes remain visible until the page is refreshed.

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

## Project Structure

```text
.
├── src/
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
├── vercel.json
├── vite.config.js
└── package.json
```

## Concepts Practised

- JSX and reusable components
- Props and callback functions
- State management with `useState`
- Side effects with `useEffect`
- Context API and `useContext`
- Custom Hooks
- Controlled forms and validation
- Conditional rendering
- Immutable array updates with spread, `map`, and `filter`
- Asynchronous JavaScript with `async` and `await`
- HTTP response and error handling
- Client-side routing
- Dynamic route parameters with `useParams`
- Programmatic navigation with `useNavigate`
- Component testing
- Responsive and accessible UI design
- Git version-control and deployment workflow

## Future Improvements

- Replace JSONPlaceholder with a persistent backend and database
- Add authentication and protected routes
- Add pagination
- Expand API and routing test coverage

## Author

**Vikas Kolla**

GitHub: [Vikas13-git](https://github.com/Vikas13-git)
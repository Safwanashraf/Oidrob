`UpToDate! - Day 2`

# Oidrob[ Online Task & Project management tool ]

Oidrob is an online tool for managing tasks and projects, helping individuals and teams stay organized and efficient. It provides a central platform to track tasks, set deadlines, manage projects, and collaborate, making it easier to streamline work and boost productivity.

---

## Features

- **Backend Initialization**: Set up backend with essential dependencies and folder structure.
- **User Model**: Created a schema for users (username, email, password, role).
- **Password Security**: Added password hashing with `bcryptjs`.
- **Registration Endpoint**: Built an API for user registration, including validation.
- **Environment Config**: Set up `.env` file for secure configuration management.
- **Login Functionality with JWT**: Implemented user login and generated JWT tokens for authentication.
- **Middleware for Protected Routes**: Added middleware to secure endpoints and protect routes.
- **User Profile Endpoint**: Created an endpoint for authenticated users to view their profile.
- **Role-Based Authorization**: Set up role-based access to restrict routes based on user roles.
- **Project and Task Models**: Began creating models for projects and tasks, laying the groundwork for task management.
- **Rate Limiting on Login Route**: Added rate limiting on the login endpoint to prevent brute-force attacks.

---

## Technologies Used

- **Node.js**: JavaScript runtime for backend development.
- **Express.js**: Web framework to set up the backend server and routes.
- **MongoDB**: Database for storing user and project information.
- **Mongoose**: ODM (Object Data Modeling) library to manage MongoDB with schemas.
- **dotenv**: To manage environment variables securely.
- **bcryptjs**: For hashing and securing user passwords.
- **jsonwebtoken**: For generating and verifying JWT tokens.
- **express-rate-limit**: To apply rate limiting and prevent brute-force attacks.
- **Thunder Client** (in VS Code): For testing API endpoints directly within the editor.

---


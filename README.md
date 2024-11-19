`UpToDate! - Day 6`

# Oidrob[ Online Task & Project management tool ]

Oidrob is an online tool for managing tasks and projects, helping individuals and teams stay organized and efficient. It provides a central platform to track tasks, set deadlines, manage projects, and collaborate, making it easier to streamline work and boost productivity.

---

## Backend

### **Features**
- **Backend Initialization**: Set up backend with essential dependencies and folder structure.
- **User Model**: Created a schema for users (username, email, password, role).
- **Password Security**: Added password hashing with bcryptjs.
- **Registration Endpoint**: Built an API for user registration, including validation.
- **Environment Config**: Set up .env file for secure configuration management.
- **Login Functionality with JWT**: Implemented user login and generated JWT tokens for authentication.
- **Middleware for Protected Routes**: Added middleware to secure endpoints and protect routes.
- **User Profile Endpoint**: Created an endpoint for authenticated users to view their profile.
- **Role-Based Authorization**: Set up role-based access to restrict routes based on user roles.
- **Project and Task Models**: Began creating models for projects and tasks, laying the groundwork for task management.
- **Rate Limiting on Login Route**: Added rate limiting on the login endpoint to prevent brute-force attacks.
- **Critical Error Fixes (Day 6)**: Identified and fixed long-term backend errors to ensure stability and smooth integration.
- **Backend-Frontend Integration (Day 6)**: Enabled communication between backend and frontend using CORS.

### **Technologies Used**

- **Node.js**: JavaScript runtime for backend development.
- **Express.js**: Web framework to set up the backend server and routes.
- **MongoDB**: Database for storing user and project information.
- **Mongoose**: ODM (Object Data Modeling) library to manage MongoDB with schemas.
- **dotenv**: To manage environment variables securely.
- **bcryptjs**: For hashing and securing user passwords.
- **jsonwebtoken**: For generating and verifying JWT tokens.
- **express-rate-limit**: To apply rate limiting and prevent brute-force attacks.
- **CORS**: Middleware to enable cross-origin requests between backend and frontend.
- **Thunder Client (in VS Code)**: For testing API endpoints directly within the editor.

---

## Frontend

### **Features**

- **React Frontend Setup**: Set up React frontend with React Router and Axios.
- **Login and Register Pages**: Created basic Login and Register pages with form submission.
- **Authentication Context**: Implemented Context API to manage login/logout globally.
- **JWT Token Storage**: Configured token storage in localStorage and added redirection after login.
- **Tailwind CSS**: Integrated Tailwind for styling and updated Login and Register pages with responsive designs.
- **Critical Frontend Issue Fixes (Day 4)**: Resolved React Router DOM warnings and updated code for future compatibility using createBrowserRouter with future flags.
- **Clean Architecture Implementation (Day 4)**: Restructured routing with a MainLayout component, reducing complexity and improving readability, maintainability, and scalability.

### **Technologies Used**

- **React.js**: Frontend library for building user interfaces.
- **React Router**: Library for handling routing in the frontend.
- **Axios**: HTTP client for making API requests.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **ES6+ Standards (Day 6)**: Upgraded frontend codebase to modern JavaScript standards for better efficiency and readability.

---
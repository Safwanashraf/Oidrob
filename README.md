# Oidrob[ Online Task & Project management tool ]

Oidrob is an online tool for managing tasks and projects, helping individuals and teams stay organized and efficient. It provides a central platform to track tasks, set deadlines, manage projects, and collaborate, making it easier to streamline work and boost productivity.

---

## Progress Summary for Oidrob

### **Features Completed**:

### **Backend Setup**:

- Initialized with essential dependencies and a clean folder structure.
- Implemented **JWT-based Authentication** (Login/Register).
- Added **User Profile API** for retrieving user details.
- Introduced **Role-Based Authorization** to restrict access to specific routes.
- Designed **Project and Task Models** to support task management workflows.
- Enabled **Rate Limiting** on login routes to prevent brute-force attacks.

### **Frontend Setup**:

- Configured React with **React Router** for routing.
- Created **Login and Register Pages** with form validation and backend integration.
- Implemented **Authentication Context** for global login/logout state management.
- Styled using **Tailwind CSS** for consistency and responsiveness.
- Integrated **JWT storage** in localStorage for seamless authentication.

### **Project Restructuring**:

- Refactored frontend to follow a **clean architecture** approach, improving maintainability.
- Upgraded from CommonJS to **ES6 Modules** for modern standards.

### **Initial Dashboard Work**:
 
- Began styling the **Task Table** with Tailwind.
- Set up reusable components for **TaskRow**, **TaskStatus**, and **TaskDetails**.

---

## **Technologies Used**:

### **Frontend**:

- **React.js**: For building dynamic and responsive user interfaces.
- **React Router**: For managing navigation and route protection.
- **Tailwind CSS**: For styling the project with utility-first design.
- **Axios**: For seamless API communication with the backend.

### **Backend**:

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for creating APIs and managing routes.
- **MongoDB**: Database for storing user, project, and task data.
- **Mongoose**: ODM for managing MongoDB schemas and relationships.
- **jsonwebtoken (JWT)**: For secure authentication and role-based authorization.
- **express-rate-limit**: To prevent brute-force attacks.
- **dot env**: For secure environment variable management.
- **CORS**: For enabling cross-origin requests between frontend and backend.

### **Additional Tools**:
- **Thunder Client (VS Code)**: For testing APIs during development.
- **Git/GitHub**: For version control and collaboration.

---

## **Current Focus**:

### **Frontend Development**:

- Styling and functionality of the Dashboard, starting with the Task Table.
- Making all fields (status, type, due date) editable for interactivity.

### **Scalability**:

- Ensuring components are reusable and maintainable for future enhancements.

----

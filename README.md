# Library Management System

A web-based library management system built with **Express.js** and **MongoDB**. It allows efficient management of books and users, with features like user authentication, password security, and protected routes. The system supports adding, updating, and deleting books and users, as well as ensuring secure access to sensitive operations.

## **Functions**

1. **Add User** - Add new users to the system with details such as name, email, and membership type.
2. **JWT Authentication** - Secure endpoints with JWT-based user authentication.
3. **Hash Passwords** - Use bcryptjs to securely hash user passwords for security.
4. **Books Management** - Add, view, update, and delete books.
5. **Protected Routes** - Implement protected routes to secure sensitive operations like deletion or modification.

## **Installation**

1. Clone this repository:
    ```bash
    git clone https://github.com/Centinoughty/library-management-system.git
    ```

2. Navigate into the project directory:
    ```bash
    cd library-management-system
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Set up your environment variables (`.env`) for JWT_SECRET, database connection, etc.

5. Start the server:
    ```bash
    npm start
    ```

## **Backend Hosted URL**

The backend is hosted on Render. You can access it at the following URL:
> https://library-management-system-eq7b.onrender.com

## **Example cURL Requests**

1. **Register a new user**:
    ```bash
    curl -X POST https://library-management-system-eq7b.onrender.com/api/auth/register \
    -H "Content-Type: application/json" \
    -d '{"name": "John Doe", "email": "test@example.com", "password": "test@123", "membershipType": "regular"}'
    ```

2. **Login and receive JWT**:
    ```bash
    curl -X POST https://library-management-system-eq7b.onrender.com/api/auth/login \
    -H "Content-Type: application/json" \
    -d '{"email": "test@example.com", "password": "test@123"}'
    ```

3. **Add a new book**:
    ```bash
    curl -X POST https://library-management-system-eq7b.onrender.com/api/books/ \
    -H "Content-Type: application/json" \
    -d '{"title": "Harry Potter", "author": "JK Rowling", "published_year": 2000, "genre": "Fiction", "available_copies": 5}'
    ```


## **Technologies Used**
- Node.js
- Express.js
- JWT for authentication
- bcryptjs for password hashing
- MongoDB (or your preferred database)

## **License**
This project is licensed under the MIT License.

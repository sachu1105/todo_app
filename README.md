# Todo App

The **Todo Application** is designed to streamline task management with a range of features, allowing users to efficiently create, read, update, and delete tasks. Built using modern web technologies, this app provides a seamless experience for task organization.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Routes](#api-routes)

## Features
- **CRUD Functionality**: Manage tasks with **create**, **read**, **update**, and **delete** operations.
- **Responsive UI**: Built using **Tailwind CSS** to ensure a modern, mobile-friendly design.
- **RESTful API Integration**: Communication between the frontend and backend using a RESTful API.
- **MongoDB**: Persistent task storage using MongoDB.
- **Fast Development**: The app uses **Vite** for quick builds and efficient development.

## Tech Stack

### Frontend
- **React**: A dynamic and interactive library for building the user interface.
- **Vite**: A fast and efficient module bundler for quicker builds.
- **Tailwind CSS**: A utility-first CSS framework for responsive design.
- **Axios**: For making HTTP requests to interact with the backend API.

### Backend
- **Node.js**: A runtime environment for building server-side applications.
- **Express.js**: A web framework to create the RESTful API.
- **MongoDB**: A NoSQL database used for storing tasks.

## Installation

### Frontend Setup
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend

2. Install the frontend dependencies:
   ```bash
   npm install
Start the development server:
npm run dev
The frontend will be accessible at http://localhost:5173.

### Backend Setup
1. Navigate to the `backend` folder:
    ```bash 
    cd backend
2.  Install the backend dependencies:

    ```bash
    npm install
Configure environment variables by creating a **.env** file in the backend folder and setting the following:

###### plaintext
PORT=3000
MONGO_URI=your-mongodb-connection-string

3.  Start the backend server:
    ```bash
    npm start
The backend will be accessible at http://localhost:3000.

## Usage
**Frontend**: Open the frontend app in a browser at http://localhost:5173.
**Backend**: Ensure the backend server is running at http://localhost:3000.
Use the application to add, update, delete, or toggle tasks.

## Folder Structure


**Todo_app/**
├── frontend/                  # Frontend React app
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── Task.jsx       # Component to display a single task
│   │   │   ├── TaskForm.jsx   # Component for the task input form
│   │   │   ├── TaskList.jsx   # Component to display the list of tasks
│   │   ├── App.jsx            # Main app component
│   │   ├── axiosInstance.js   # Configured Axios instance for API requests
│   │   ├── main.jsx           # React entry point
│   ├── public/                # Static assets
│   ├── vite.config.js         # Vite configuration file
│   ├── package.json           # Frontend dependencies
├── backend/                   # Backend Express app
│   ├── models/
│   │   ├── Task.js            # Mongoose schema for task management
│   ├── routes/
│   │   ├── taskRoutes.js      # Routes for task-related operations
│   ├── server.js              # Express server entry point
│   ├── package.json           # Backend dependencies
├── README.md                  # Documentation

**API Routes**
Base URL: http://localhost:3000/api/tasks

**GET /**

- **Description**: Fetch all tasks.

- **Response**:
  ```json
  [
    {
      "_id": "123abc",
      "text": "task 1",
      "completed": false
    }
  ]

**POST /**
- **Description**: Add a new task.

- **Request Body**:
    ```json

    {
    "text": "task 2"
    }
- **Response**:
    ```json

    {
    "_id": "456def",
    "text": "task 2 ",
    "completed": false
    }
    
**PUT /:id**
- **Description**:Update a task.

- **Request Body**:
    ```json

    {
    "text": "Task 2",
    "completed": true
    }
- **Response**:
    ```json
    {
    "_id": "456def",
    "text": "Task 2",
    "completed": true
    }

**DELETE /:id**
- **Description**:Delete a task.

- **Response**:
    ```json
    {
    "message": "Task deleted successfully"
    }

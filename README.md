# Task Manager

Task Manager is a simple web application that allows you to manage your tasks. You can add new tasks, update existing tasks, and delete tasks using this application.

## Features

- Add a task with a title, description, due date, and status.
- Update task details such as title, description, due date, and status.
- Delete tasks from the task list.
- Responsive design for optimal viewing on various devices.

## Technologies Used

- Front-end: HTML, CSS, JavaScript
- Back-end: Node.js, Express.js
- Database: MySQL

## Getting Started

To get started with the Task Manager application, follow these steps:

1. Clone the repository: ```git clone https://github.com/your-username/task-manager.git``` 
2. Install the dependencies: ```npm install```
3. Create a MySQL database and update the connection details in `app.js` file:
```javascript
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your-username',
  password: 'your-password',
  database: 'task_manager'
});
```
4. Run the application:```npm start```
5. Open your web browser and visit ```http://localhost:5555``` to access the Task Manager application.

## API Endpoints
The Task Manager application exposes the following API endpoints:

- GET /api/tasks: Fetches all tasks from the server.
- POST /api/tasks: Adds a new task to the server.
- PUT /api/tasks/:id: Updates an existing task on the server.
- DELETE /api/tasks/:id: Deletes a task from the server.

## ScreenShot
- ![image](https://github.com/viveklistenus/task-manager/assets/28853520/001087d0-72f9-46d9-aefa-dbf8a6a21c0f)


Please note that you should replace `your-username` and `your-password` with your actual MySQL database credentials, and modify the installation and running steps if needed.

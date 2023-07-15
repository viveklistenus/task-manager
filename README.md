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
3. Create a MySQL database and update the connection details in `app.js` file: ```
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your-username',
  password: 'your-password',
  database: 'task_manager'
});```

4. Run the application:```npm start```
5. Open your web browser and visit ```http://localhost:5555``` to access the Task Manager application.


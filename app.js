const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');


const app = express();
// Serve static files from the "public" directory
app.use(express.static('public'));
// Parse JSON bodies for API endpoints
app.use(bodyParser.json());

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'sql6.freemysqlhosting.net',
  user: 'sql6632905',
  password: 'B8PaWxTYKp',
  database: 'sql6632905'
});

// Connect to MySQL
connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html');
  });
  

// Fetch all tasks
app.get('/api/tasks', (req, res) => {
  const query = 'SELECT * FROM tasks';

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching tasks from MySQL:', error);
      res.status(500).json({ error: 'Failed to fetch tasks' });
      return;
    }

    res.json(results);
  });
});

// Add a new task
app.post('/api/tasks', (req, res) => {
  const { title, description, dueDate, status } = req.body;
  const query = 'INSERT INTO tasks (title, description, dueDate, status) VALUES (?, ?, ?, ?)';
  const values = [title, description, dueDate, status];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Error adding task to MySQL:', error);
      res.status(500).json({ error: 'Failed to add task' });
      return;
    }

    res.sendStatus(201);
  });
});

// Update an existing task
app.put('/api/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const { title, description, dueDate, status } = req.body;
  const query = 'UPDATE tasks SET title = ?, description = ?, dueDate = ?, status = ? WHERE id = ?';
  const values = [title, description, dueDate, status, taskId];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Error updating task in MySQL:', error);
      res.status(500).json({ error: 'Failed to update task' });
      return;
    }

    res.sendStatus(200);
  });
});

// Delete a task
app.delete('/api/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const query = 'DELETE FROM tasks WHERE id = ?';
  const values = [taskId];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Error deleting task from MySQL:', error);
      res.status(500).json({ error: 'Failed to delete task' });
      return;
    }

    res.sendStatus(200);
  });
});

// Start the server
const port = 5555;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

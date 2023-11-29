const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'work_tracker_db'
  },
  console.log(`Connected to the work_tracker_db database.`)
);

app.post('/api/new-department', ({ body }, res) => {
  const sql = `INSERT INTO departments (department_name)
    VALUES (?)`;
  const params = [body.department_name];
  
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: body
    });
  });
});

app.get('/api/departments', (req, res) => {
  const sql = `SELECT id, department_name FROM departments`;
  
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

app.post('/api/new-role', ({ body }, res) => {
  const sql = `INSERT INTO roles (title, salary, department_id)
    VALUES (?, ?, ?)`;
  const params = [body.title, body.salary, body.department_id];
  
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: body
    });
  });
});

app.get('/api/roles', (req, res) => {
  const sql = `SELECT id, title, salary, department_id FROM roles`;
  
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

app.put('/api/role/:id', (req, res) => {
  const sql = `UPDATE roles SET salary = ? WHERE id = ?`;
  const params = [req.body.salary, req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({
        message: 'Role not found'
      });
    } else {
      res.json({
        message: 'success',
        data: req.body,
        changes: result.affectedRows
      });
    }
  });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

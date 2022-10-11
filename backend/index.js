const express = require("express");
const db = require("./index.json");

const app = express();

app.use(function corsMiddleware(request, response, next) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, PATCH, DELETE");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use(express.json());

app.post("/login", (req, res) => {
  const { login, password } = req.body;

  if (login === db.me.login && password === db.me.password) {
    res.send({ id: db.me.id, createdAt: db.me.createdAt, name: db.me.name, avatar: db.me.avatar });
  } else {
    res.status(400).json({ message: "Bad request" });
  }
});

app.get("users", (req, res) => {
  res.send(db.users);
});

app.get("boards", (req, res) => {
  res.send(db.boards);
});

app.get("/board_main_tasks", (req, res) => {
  res.send(db.board_main_tasks);
});

app.get("/board_main_tasks/:id", (req, res) => {
  res.send(db.board_main_tasks.find((task) => (task.id = req.params.id)));
});

app.get("/board_development_tasks", (req, res) => {
  res.send(db.board_development_tasks);
});

app.get("/board_development_tasks/:id", (req, res) => {
  res.send(db.board_development_tasks.find((task) => (task.id = req.params.id)));
});

const PORT = process.env.PORT || 7000;
const start = () => {
  try {
    app.listen(PORT, () => console.log(`SERVER was been start on ${PORT} port`));
  } catch (e) {
    console.log(e);
  }
};

start();

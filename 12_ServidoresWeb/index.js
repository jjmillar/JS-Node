const express = require("express");

const Service = require("./src/service");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Lista de usuarios",
    body: Service.getUsers(),
  });
});

app.get("/:id", (req, res) => {
  let { params: { id }} = req;
  let user = Service.getUser(id)
  console.log(id);
  res.json({
    message: `Usuario ${id}`,
    body: user,
  });
});

app.post("/", (req, res) => {
  let newUser = req.body; //let { body: newUser } = req;
  res.status(201).json({
    message: "Usuario creado",
    body: Service.createUser(newUser),
  });
});

app.put('/:id', (req, res) => {
    // respuesta
});

app.delete('/:id', (req, res) => {
    // respuesta
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

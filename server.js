const express = require("express");
const app = express();

app.use(express.json());

// endpoint principal
app.get("/", (req, res) => {
  res.json({ status: "MCP Server rodando 🚀" });
});

// exemplo de endpoint 
app.post("/tool", (req, res) => {
  const { input } = req.body;

  res.json({
    output: `Você enviou: ${input}`
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
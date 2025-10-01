const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

// Ruta principal
app.get("/", (req, res) => {
  res.send("Hello from OpenShift!");
});

// Ruta que devuelve la hora actual
app.get("/time", (req, res) => {
  res.send(`⏰ Current server time: ${new Date().toLocaleString()}`);
});

// Ruta de health check
app.get("/health", (req, res) => {
  res.json({ status: "UP", uptime: process.uptime() });
});

// Ruta con información de la app
app.get("/about", (req, res) => {
  res.json({
    app: "Hello OpenShift App",
    version: "1.1.0",
    author: "Aplicacion de Integracion de sistemas y plataformas"
  });
});

app.listen(port, () => {
  console.log(`✅ App listening on port ${port}`);
});

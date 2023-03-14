// Imports
const express = require("express");
const fs = require("fs");

// Dashboard erstellen
const app = express();

app.enable("trust proxy");
app.set("etag", false);
app.use(express.static(__dirname + "/dashboard-files"));

// Handler
app.get("/", async (req, res) => {
  //res.sendFile('./dashboard/html/home.html', {root: __dirname})
  res.redirect("wip");
  //console.log(`New Request ${req.method}, ${req.ip}`);
});

app.get("/wip", async (req, res) => {
  res.sendFile("./dashboard-files/html/wip.html", { root: __dirname });
});

app.get("/home", async (req, res) => {
  //res.redirect("/wip");
  res.sendFile("./dashboard-files/html/home.html", { root: __dirname });
});

app.get("/about", async (req, res) => {
  //res.redirect("wip");
  res.sendFile("./dashboard-files/html/about.html", { root: __dirname });
});

app.get("/dashboard", async (req, res) => {
  //res.redirect("wip");
  res.sendFile('./dashboard-files/html/dashboard.html', {root: __dirname})
});

// Dashboard starten
try {
  var port = 80;
  app.listen(port);
  console.log(`Dashboard is Online and listens on Port: ${port}`);
} catch (error) {
  console.log("Something went wrong. Error:");
  console.log(error);
}

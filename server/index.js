const express = require("express");
const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/notes", (req, res) => {
  const notes = [
    {
      text: "Do HomeWork",
      link: "",
    },
    {
      text: "Go to walk",
      link: "",
    },
  ];

  res.json({
    notes,
  });
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}.`);
});

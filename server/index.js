const express = require("express");
const app = express();
const cors = require("cors");

const port = 5000;

app.use(cors());

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

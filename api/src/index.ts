import express from "express";

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello baby Jade Mwesigwa");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

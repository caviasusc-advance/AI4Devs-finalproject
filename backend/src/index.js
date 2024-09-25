require('dotenv').config();
const express = require("express");
const accountRoutes = require("./routes/accountRoutes");
const userRoutes = require("./routes/userRoutes");

const port = process.env.PORT || 8000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ msg: "Server is up and running" });
});

app.use(accountRoutes)
app.use(userRoutes)

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
  })
};

module.exports = app
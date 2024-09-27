require('dotenv').config();
const express = require("express");
const accountRoutes = require("./routes/accountRoutes");
const userRoutes = require("./routes/userRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const systemConfigurationRoutes = require("./routes/systemConfigurationRoutes");

const port = process.env.PORT || 8000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', `${process.env.SPARK_BANK_FRONT_URL}`);
  res.setHeader('Access-Control-Allow-Credentials',"true");
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, X-Origin");
  next();
});

app.get("/", (req, res) => {
  res.status(200).send({ msg: "Server is up and running" });
});

app.use(accountRoutes)
app.use(userRoutes)
app.use(transactionRoutes)
app.use(systemConfigurationRoutes)

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
  })
};

module.exports = app
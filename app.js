require("dotenv").config();
const express = require("express");
const cors = require("cors");
const conn = require("./database/config");
const router = require("./routes/routes");

const app = express();

conn();

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(3001, () => console.log("conected"));

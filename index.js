const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routesHandler = require("./routes/handler");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routesHandler);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});

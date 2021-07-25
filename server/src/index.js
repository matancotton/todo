const express = require("express");
require("./db/mongoose");
const cors = require("cors");
const taskRouter = require("./routers/taskRouter");
const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(taskRouter);

app.listen(port, () => {
    console.log("Server is running on port ", port);
});

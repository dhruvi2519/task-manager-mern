const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoutes");
const cors = require("cors");

const app = express();
app.use(cors()); // ⭐ VERY IMPORTANT
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/taskdb")
.then(() => console.log("MongoDB connected"));

app.use("/", taskRoutes);


app.listen(3001, () => console.log("Server running on 3001"));

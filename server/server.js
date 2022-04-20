const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require('dotenv').config();

require("./models/index");

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to the database")
}).catch(err => {
    console.log("Cannot connect to the database", err)
    process.exit();
})

const app = express();

// const corsOptions = {
//     origin: "http://localhost:3000"
// }
//
// app.use(cors(corsOptions));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World! API is Ready🫣')
})

const todo = require("./routes/todo-router");
app.use('/api', todo);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

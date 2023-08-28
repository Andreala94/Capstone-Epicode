const express = require("express");
const mongoose = require("mongoose");
const PORT = 6060;

const app = express();


// middleware
app.use(express.json());


mongoose.connect(process.env.MONGO_DB_URL);





// ultima riga
app.listen(PORT, () =>
    console.log(`Server avviato ed in ascolto sulla PORTA ${PORT}`)
);
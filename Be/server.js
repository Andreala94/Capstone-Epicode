const express = require("express");
const mongoose = require("mongoose"); //
const PORT = 6060;

const app = express();

require('dotenv').config(); //per recuperare le variabili d'ambiente

const autoriRoute = require('./routes/autori')

// middleware
app.use(express.json());
// app.use(cors());



//importo le rotte
app.use("/", autoriRoute);


mongoose.connect(process.env.MONGO_DB_URL);



const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Errore di connessione al server!'))
db.once('open', () => {
    console.log('Database MondoDB connesso!');
})





// ultima riga
app.listen(PORT, () =>
    console.log(`Server avviato ed in ascolto sulla PORTA ${PORT}`)
);
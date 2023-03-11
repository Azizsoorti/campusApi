require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const  authRoutes = require ("./routes/authRoutes")
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.get('/', (req, res) => {
  res.send({'msg':'server started successfully'})
})

app.use('/api/auth',  authRoutes)
app.use(express.json())
app.use( express.urlencoded({ extended: true, }))




app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
})
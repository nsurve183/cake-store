

const express = require('express');
const cors = require('cors');
const connectToMongo = require('./connect');

// const Upload = require('./models/BirthDayCakes')


connectToMongo();

const app = express();
const port = 5000
app.use(cors())
app.use(express.json());


app.use('/api/contact', require('./routes/contact'));
app.use('/api/view', require('./routes/views'));
app.use('/api/cakescategory', require('./routes/cakesCategory'));
app.use('/api/auth', require('./routes/auth'));

app.listen(port , () => {
    console.log(`Cake-store app listening on port http://localhost:${port}`)
})

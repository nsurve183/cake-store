

const express = require('express');
const cors = require('cors');
const connectToMongo = require('./connect');
connectToMongo();

const app = express();
const port = 5000

app.use(cors())
app.use(express.json());

app.use('/api/contact', require('./routes/user'))
app.use('/api/view', require('./routes/views'))
app.use('/api/chocolateCake', require('./routes/chocolateCake'))

app.listen(port , () => {
    console.log(`Cake-store app listening on port http://localhost:${port}`)
})


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

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'public/images')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//     }
// })


// const upload = multer({storage: storage});


// app.post('/upload', upload.single('file'), async (req, res) => {
//     let upload = await Upload.create({
//         photo: req.file.filename
//     })
//     res.json(upload);
// })

app.listen(port , () => {
    console.log(`Cake-store app listening on port http://localhost:${port}`)
})

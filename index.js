const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const port = process.env.PORT || 5000;

dotenv.config();

// middleware
const app = express();
app.use(cors());
app.use(bodyParser.json());







app.get('/', (req, res) => {
    res.send('Hello World CraftMyPlate server... !')
})

app.listen(port, () => {
    console.log(`This server running on port ${port}`)
})
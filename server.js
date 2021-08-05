const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;

//middleweres
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./server/config/mongoose.config')

//routes
require('./server/routes/author.routes')(app);


// listening on port
app.listen(port, () => console.log(`Listening on port: ${port}`));

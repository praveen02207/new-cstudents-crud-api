const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const route = require("./Routes/route");
const app = express();
const port = 5000;

app.use(cors());

app.use(bodyParser.json());

app.use(route);

app.listen(port, () => console.log(`App listening on port ${port}`));

app.get('/', (req, res) => {
    return res.send("Server Running Successfully!");
});

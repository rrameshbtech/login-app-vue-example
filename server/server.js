const express = require('express');
var cors = require('cors')
const app = express();
 
app.use(cors());

app.post('/login', function (req, res) {
    const email = req.get("email");
    const password = req.get("password");
    if(email === "test@thoughtworks.com" && password === "admin123"){
        res.send(true);
    } else {
        res.send(false);
    }
})
 
app.listen(3000)
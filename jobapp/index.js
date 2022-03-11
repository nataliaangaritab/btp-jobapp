const express = require('express');
const app = express();

app.get('/runjob', (req, res) => {
    console.log('Job is running!');
    res.send('Job executed');
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Listening on port: ' + port)
})
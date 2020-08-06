const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Integration!!');
});

app.get('/api/test', (req, res) => {
    res.send('Welcome to Integration api test me aaya gaya!!');
});

const port = process.env.PORT || 8999;
app.listen(port, () => console.log(`Listening on port ${port}..`));

const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
    {
        id: 0,
        name: 'Arijit Sahai'
    },
    {
        id: 1,
        name: 'Ujjwal Dhir'
    },
    {
        id: 2,
        name: 'Naveen Kumar'
    },
    {
        id: 3,
        name: 'Divyanand'
    },
    {
        id: 4,
        name: 'Pranjal Agarwal'
    }
]

app.get('/', (req, res) => {
    res.send('Hello Aviral!');
})

app.get('/messages', (req, res) => {
    res.send('<ul><li>How have you been?</li></ul>');
})

app.get('/friends', (req, res) => {
    res.send(friends);
})

app.post('/messages', (req, res) => {
    console.log(`Updating messages`);
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
});
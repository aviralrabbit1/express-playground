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

app.use((req, res, next) => {
    const start = Date.now();
    next();
    // won't get reponse without calling next, response is not set in handlers
    const duration = Date.now() - start; // measuring amount of processing taken by node, different from 
    // postman - measuring information making sense and returning back to it, takens longer
    console.log(`using ${req.method} at ${req.url} for ${duration}ms`);
})

app.get('/messages', (req, res) => {
    res.send('<ul><li>How have you been?</li></ul>');
})

app.get('/friends', (req, res) => {
    res.json(friends);
})

app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId); // Number() or +req.params
    const friend = friends[friendId];
    if(friend){
        res.status(200).json(friend);
    }
    else {
        res.status(404).json({
            error: "Friend does not exist"
        });
    }
});

app.post('/messages', (req, res) => {
    console.log(`Updating messages`);
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
});

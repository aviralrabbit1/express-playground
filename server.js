const express = require('express');

const messagesController = require('./controllers/messages.controller');
const friendsController = require('./controllers/friends.controller');

const app = express();

const PORT = 3000;

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

app.use(express.json());
// return middleware like above, looks up content type
// set re.body to js object when content-tye = application/json

app.post('/friends', friendsController.postFriends);

app.get('/friends', friendsController.getFriends);

app.get('/friends/:friendId', friendsController.getFriend);

app.get('/messages',messagesController.getMessages);
app.post('/messages',messagesController.postMessages);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
});

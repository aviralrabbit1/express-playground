const express = require('express');

const friendsRouter = require('./routes/friends.router');

const messagesRouter = require('./routes/messages.router');

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

app.use('/friends',friendsRouter); // mounting the router on app object
// we can mount a group of path under a specific route
// the friendsRouter paths will be set relative to path it is mounted on
// creates a self container application on its own, not worried about other paths

app.use('/messages',messagesRouter);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
});

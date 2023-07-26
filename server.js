const express = require('express');
const path = require('path');

const friendsRouter = require('./routers/friends.router');

const messagesRouter = require('./routers/messages.router');

const app = express();

app.set('view engine', 'hbs'); // info need to load handlebars internally
app.set('views', path.join(__dirname,'views')); //find templates in project folder

const PORT = 3000;

app.get('/', (req, res) => {
    res.render('index', {
        title: "Express playground",
        caption: "TEDxHBTU 2018"
    });
});

app.use((req, res, next) => {
    const start = Date.now();
    next();
    // won't get reponse without calling next, response is not set in handlers
    const duration = Date.now() - start; // measuring amount of processing taken by node, different from 
    // postman - measuring information making sense and returning back to it, takens longer
    console.log(`using ${req.method} at ${req.baseUrl}${req.url} for ${duration}ms`);
})

app.use('/site',express.static(path.join(__dirname, 'public'))); // Middleware, relative path from where we start
// Serving static files
// app.use('/site',express.static('public')); // Not very RESTful as not serving from a collection of data

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

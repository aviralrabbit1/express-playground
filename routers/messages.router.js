const express = require('express');

const messagesController = require('./controllers/messages.controller');

const messagesRouter = express.Router(); //used as middleware

messagesRouter.get('/',messagesController.getMessages);
messagesRouter.post('/',messagesController.postMessages);

module.exports = messagesRouter;

const express = require('express');

const friendsController = require('./controllers/friends.controller');

const friendsRouter = express.Router(); //used as middleware

friendsRouter.post('/', friendsController.postFriends);
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendId', friendsController.getFriend);

module.exports = friendsRouter;

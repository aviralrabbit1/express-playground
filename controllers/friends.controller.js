const friends = require('../models/friends.models');

function postFriends(req, res){

    if(!req.body.name){
        // return will allow us to not set empty friends name, else will give error in console
        return res.status(400).json({
            error: 'Missing friend name'
        });
    }
    const newFriend = {
        name: req.body.name,
        id: friends.length
    };
    friends.push(newFriend);
    res.json(newFriend); // all req returns json, error or not
}

function getFriends(req, res){
    res.json(friends);
}

function getFriend(req, res){
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
}

module.exports = {
    postFriends,
    getFriends,
    getFriend
}

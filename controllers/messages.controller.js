const path = require('path');

// const getMessages = (req, res) => {
//     res.send('<ul><li>How have you been?</li></ul>');
// }

// names function can be tracked in errors
function getMessages(req, res){
    const image = path.join(__dirname,'..','public', 'images', 'TEDxHBTI.jpg');
    // res.sendFile(image);

    res.render('messages', {
        title: 'Message to my friends',
        friend: 'Suryansh',
    });
    // res.sendfile('../public/TEDxHBTI .jpg');
    // res.send('<ul><li>How have you been?</li></ul>');
}

function postMessages(req, res){
    console.log(`Updating messages`);
}

module.exports = {
    getMessages,
    postMessages
}

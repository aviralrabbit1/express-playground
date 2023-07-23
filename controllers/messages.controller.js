// const getMessages = (req, res) => {
//     res.send('<ul><li>How have you been?</li></ul>');
// }

// names function can be tracked in errors
function getMessages(req, res){
    res.send('<ul><li>How have you been?</li></ul>');
}

function postMessages(req, res){
    console.log(`Updating messages`);
}

module.exports = {
    getMessages,
    postMessages
}

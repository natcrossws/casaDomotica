const path = require('path');

function login(req, res) {
    //res.render('login.html');
    res.sendFile(path.join(__dirname, '../', 'views','login.html'));
}

module.exports = {
    login: login
};

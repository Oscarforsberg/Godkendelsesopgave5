
//henter User model
const User = require('../Model/user');

//hardcoder ny user ud fra model-klasse
let User1 = new User('Lars', 'Larsen', '22');

//controller
function usercontroller(req, res) {
    res.end(JSON.stringify(User1))
}

//eksporter controlleren
module.exports = usercontroller;
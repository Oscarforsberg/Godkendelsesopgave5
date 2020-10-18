//controller
function intcontroller(req, res) {
    res.end(JSON.stringify(User1))
}

//eksporter controlleren
module.exports = intcontroller;
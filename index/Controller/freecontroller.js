//controller
function freecontroller(req, res) {
    res.end(JSON.stringify(freecontroller))
}

//eksporter controlleren
module.exports = freecontroller;
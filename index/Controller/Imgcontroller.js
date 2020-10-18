const image = require('../Client/user')

let image1 = new image[2] ('C-drevet', '100px', '200px');



//controller
function Imgcontroller(req, res) {
    res.end(JSON.stringify(image1))
}

//eksporter controlleren
module.exports = Imgcontroller;
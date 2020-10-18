//gemmer express-library i variabel
const express = require('express')
//initialiserer express-server
const server = express()
const port = 3000
 
//henter controller fra sti
let userController = require('../Controller/usercontroller');
let paycontroller = require('../Controller/paycontroller');
let matchcontroller = require('../Controller/matchcontroller');
let intcontroller = require('../Controller/intcontroller');
let Imgcontroller = require('../Controller/Imgcontroller');
let freecontroller = require('../Controller/freecontroller');




//read endpoint på routen '/'
server.get('/user', userController)
server.delete('/delete', paycontroller);
server.get('/match', matchcontroller);
server.get('/update', intcontroller);
server.get('/Img', Imgcontroller);
server.put('/created', freecontroller);

//server aktiveres
server.listen(port, () => {
  console.log(`Server-applikation lytter på http://localhost:${port}`)
})
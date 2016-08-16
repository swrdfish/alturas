'use strict'


const {ipcRenderer} = require('electron')
const Backbone = require('backbone')
const _ = require('underscore')
const PotatoRouter = require('./js/routes/router')


let potatorouter = new PotatoRouter()
Backbone.history.start()



// Start the express server
// ipcRenderer.send('start-server')

// ipcRenderer.on('server-started', function(){
// 	$("#server-response").load("http://localhost:3000")
// })

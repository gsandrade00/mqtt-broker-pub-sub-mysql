// MQTT broker
var mosca = require('mosca')
var settings = {port: 1236}
var broker = new mosca.Server(settings)
var mysql = require('mysql')


broker.on('ready', ()=>{
    console.log('Broker is ready!')
})

broker.on('published', (packet)=>{
    message = packet.payload.toString()
    console.log(message)
})
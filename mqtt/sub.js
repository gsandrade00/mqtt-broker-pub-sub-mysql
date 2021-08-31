
// MQTT subscriber
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:1236')
var topic = 'gsa123'

client.on('message', (topic, message)=>{
    message = message.toString()
    console.log(message)
})

client.on('connect', ()=>{
    client.subscribe(topic)
})
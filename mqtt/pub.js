// MQTT publisher
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:1236')
var topic = 'gsa123'
var message = '4900'

client.on('connect', ()=>{
  //  setInterval(()=>{
        client.publish(topic, message)
        console.log('Message sent!', message)
  //  }, 5000)
})
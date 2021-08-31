// MQTT broker
var mosca = require('mosca')
var settings = {port: 1236}
var broker = new mosca.Server(settings)
var mysql = require('mysql')


// MySQL 
var db = mysql.createConnection({
    host: 'localhost',
    user: 'user_test',
    password: 'T&st12345678',
    database: 'iot_test'
})
db.connect(()=>{
    console.log('Database connected!')
})

broker.on('ready', ()=>{
    console.log('Broker is ready!')
})


broker.on('published', (packet)=>{
    message = packet.payload.toString()
    console.log(message)
    var sql = "INSERT INTO tempSensorB (tempSensor_value) VALUES ?";  
    var values = [  
        [message]  
    ];  
    if(message.slice(0,1) != '{' && message.slice(0,4) != 'mqtt'){
        db.query(sql, [values], function (err, result) {  
            if(err){
                console.log(err)
            } else {
                console.log('Data saved to database!')
            } 
        });  
    }
})
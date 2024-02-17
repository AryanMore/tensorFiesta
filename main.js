var mqtt = require('mqtt')

var options = {
    host: '95a0778f498e4b0282b640b05341507c.s1.eu.hivemq.cloud',
    port: 8883,
    protocol: 'mqtts',
    username: 'Aryan',
    password: 'AryanMore123'
}

// initialize the MQTT client
var client = mqtt.connect(options);

// setup the callbacks
client.on('connect', function () {
    console.log('Connected');
});

client.on('error', function (error) {
    console.log(error);
});

client.on('message', function (topic, message) {
    // called each time a message is received
    console.log('Received message:', topic, message.toString());
});

// publish message 'Hello' to topic 'my/test/topic'
client.publish('Aryan/data', 'Hi');
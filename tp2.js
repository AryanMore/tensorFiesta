/*const childProcess = require('child_process');

childProcess.exec('ls -l', (error, stdout, stderr) => {
    if (error) {
      console.error('Error running command:', error);
    } else {
      console.log('Command output:', stdout);
    }
  });*/

var s =0;
var w = 0;
var m = 0;
//Getting The Seasons Data From the Python Script

const data = require('./trends.json');
console.log(data.Winter);
// ... (the rest of your magical code)

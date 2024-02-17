const fs = require('fs');
const { json } = require('react-router-dom');

function send_data(parameter, callback) {
    fs.readFile('cleaned_data.json', 'utf-8', (error, data) => {
        if (error) {
            console.error('Error reading JSON file:', error);
            callback(error, null);
            return;
        }

        try {
            const jsonData = JSON.parse(data);
            callback(null, jsonData[parameter].rating);
            return jsonData[parameter].rating;
        } catch (jsonError) {
            console.error('Error parsing JSON:', jsonError);
            callback(jsonError, null);
        }
    });
}

// Example usage with a callback
send_data("image", (error, rating) => {
    if (!error) {
        console.log('Rating:', rating);
    } else {
        console.error('Error:', error);
    }
});

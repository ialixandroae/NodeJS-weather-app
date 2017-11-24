const request = require("request");

var getWeather = (lat, long, callback) => {
    request({
        url: `https://api.darksky.net/forecast/e8ebcc3b0ac07e00ef4f629844d01747/${lat},${long}`,
        json: true
    }, (err, resp, body) => {
        callback(undefined, {
            temperature: (body.currently.temperature - 32) * 5/9,
            apparentTemperature: (body.currently.apparentTemperature - 32) * 5/9 
        });
    });
};


module.exports.getWeather = getWeather;

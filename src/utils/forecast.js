const request = require ('request')

const forecast = (latitude, longtitude, callback) => {
    const url = 'https://api.darksky.net/forecast/e5e40afd3b77dc2f3e495929a416165b/' + latitude + ',' + longtitude + '?units=si'

    request({ url, json: true}, (error, {body}) => {

        if (error) {
                callback('Unable to connect to weather server!', undefined)
            } else if (body.error) {
                 callback('Unable to find location', undefined)
            }
            else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain. ' +
            'The highest temperature for today will be ' + body.daily.data[0].temperatureHigh + ' degrees, and the lowest will be '+  body.daily.data[0].temperatureLow + ' degrees.')
            }
    })
}

module.exports = forecast
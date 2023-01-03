//https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
//https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

//b848147bf5412822feebe8c7cc3ad03d



var apiKey = 'b848147bf5412822feebe8c7cc3ad03d';
var city = 'London';
var baseURL = 'https://api.openweathermap.org/data/2.5/';
var currentURL = baseURL + `weather?appid=${apiKey}&units=metric&`;
var forecastURL = baseURL + `forecast?appid=${apiKey}&units=metric&`;
var iconURL = 'https://openweathermap.org/img/w/';






function inputSubmitted(cityName) {
    $.get(currentURL + `q=${cityName}`)
        .then(function(currentData) {
            console.log(currentData);

            console.log(`
            Temp: ${Math.round(currentData.main.temp)}
            Humidity: ${currentData.main.humidity}%
            Wind: ${currentData.wind.speed}
            IconURL: ${iconURL + currentData.weather[0].icon}.png
             `);


            $.get(forecastURL + `lat=${currentData.coord.lat}&lon=${currentData.coord.lon}`)
                .then(function(forecastData) {
                    for (var castObj of forecastData.list) {
                        console.log(`${iconURL + castObj.weather[0].icon}.png`)
                    }

                });

        });
}

inputSubmitted(city);
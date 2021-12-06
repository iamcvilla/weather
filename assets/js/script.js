function weather() {
    fetch("api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}")
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log("data", data);
        });
    
};
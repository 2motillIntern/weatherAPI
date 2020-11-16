function weatherGetter() {
    let cityWeather = document.querySelector('#city').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityWeather}&appid=2e3c135388fe301b2cff9c0698128f51&units=imperial`)
    .then(response => response.json())
    .then(data => {


       
        let lon = data.coord.lon
        let lat = data.coord.lat
    
        let tempH = Math.round(data.main.temp_max)
        let temp_text_high = document.querySelector('#tempHigh')
        temp_text_high.innerHTML = tempH

   
        let tempL = Math.round(data.main.temp_min)
        let temp_text_low = document.querySelector('#tempLow')
        temp_text_low.innerHTML = tempL
        
        let humidity = data.main.humidity
        let humidity_text = document.querySelector('#humidity')
        humidity_text.innerHTML = humidity
        
    
        let description = data.weather[0].description
        let description_text = document.querySelector('#description')
        description_text.innerHTML = description

         let location = data.name
         let location_text = document.querySelector('#location')
         location_text.innerHTML = location

        
        
        
    });
}
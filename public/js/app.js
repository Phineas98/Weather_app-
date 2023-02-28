// https://api.openweathermap.org/data/2.5/weather?q=dehradun&appid=e8b05595006c39c45469fd7d4e5f1def

const weatherApi = {
    key: "e8b05595006c39c45469fd7d4e5f1def",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox = document.getElementById('input-box');

const place = document.getElementById('city');
const temp = document.getElementById('temp');
const weather = document.getElementById('weather');
const MinMax = document.getElementById('MinMax');
const date = document.getElementById('date');


// Event Listener Function on keypress
searchInputBox.addEventListener('keypress', (event)=>{
    if(event.keyCode == 13){
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
    }
})


// Get Weather Report 
function getWeatherReport(city) {
      fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}`)
      .then(response => {
        response.json().then(data => {
            console.log(data);
            // city.innerText = `${data.name}, ${data.sys.country}`;
            place.innerText = `${data.name}, ${data.sys.country}`;
            temp.innerHTML = `${(data.main.temp - 273.15).toFixed(2)}&deg;C`;
            MinMax.innerHTML = `${(data.main.temp_min - 273.15).toFixed(2)}&deg;C (min) | ${(data.main.temp_max - 273.15).toFixed(2)}&deg;C (max)`;
            weather.innerText = `${data.weather[0].main}`;
           

               
           if(weather.textContent == 'Clear') {
            document.body.style.backgroundImage = "url('./Images/clear.jpg')";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundRepeat = "no-repeat";
            
        } 
        else if(weather.textContent == 'Clouds') {
            document.body.style.backgroundImage = "url('./Images/clouds.jpg')";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundRepeat = "no-repeat";
        } 
        else if(weather.textContent == 'Haze') {
            document.body.style.backgroundImage = "url('./Images/haze.jpg')";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundRepeat = "no-repeat";
        } 
        else if(weather.textContent == 'Mist') {
            document.body.style.backgroundImage = "url('./Images/mist.jpg')";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundRepeat = "no-repeat";
        } 
        else if(weather.textContent == 'Rain') {
            document.body.style.backgroundImage = "url('./Images/rain.jpg')";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundRepeat = "no-repeat";
        } 
        else if(weather.textContent == 'Snow') {
            document.body.style.backgroundImage = "url('./Images/snow.jpg')";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundRepeat = "no-repeat";
        } 
        else if(weather.textContent == 'Sunny') {
            document.body.style.backgroundImage = "url('./Images/sunny.jpg')";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundRepeat = "no-repeat";
           } 


            let todayDate  = new Date();
            date.innerText = dateManage(todayDate);
        })
      })
}



// Date manage 

function dateManage(dateArg){
    let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;


} 
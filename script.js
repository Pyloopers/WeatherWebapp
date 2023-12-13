
document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.getElementById('submitBtn');
    console.log(submitBtn);

// const submitBtn = document.getElementById("submitBtn1");
// console.log(submitBtn);

async function getWeather() {
    var search = document.getElementById('locationInput');
    var searchString = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + search.value;
    console.log(searchString);

    try {
        const response = await fetch(searchString, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1f6bbfd2afmsh40dcde836ec1986p128a8ajsna91fc9263f6f',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        });
        const result = await response.text();
        const details = document.getElementById("detailsShow");
        details.textContent = result;
    } catch (error) {
        console.log(error);
    }
}

submitBtn.addEventListener('click', getWeather);

var senta = document.getElementById("weatherDetails");
senta.style.display = "block";
});
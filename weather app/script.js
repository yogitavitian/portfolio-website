async function getWeather() {

    const city = document.getElementById("city").value;

    if(city === ""){
        alert("Please enter a city name");
        return;
    }

    const url = `https://wttr.in/${city}?format=j1`;

    try{

        const response = await fetch(url);
        const data = await response.json();

        const temp = data.current_condition[0].temp_C;
        const humidity = data.current_condition[0].humidity;
        const wind = data.current_condition[0].windspeedKmph;

        document.getElementById("result").innerHTML = `
            <h3>${city}</h3>
            <p>Temperature: ${temp} °C</p>
            <p>Humidity: ${humidity}%</p>
            <p>Wind Speed: ${wind} km/h</p>
        `;

    }catch(error){

        document.getElementById("result").innerHTML =
        "<p>Unable to fetch weather data.</p>";

    }
}
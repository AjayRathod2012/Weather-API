const apiKey = "db342e2a69c74c419c161144262903";

async function getWeather() {
  try {
    const city = document.getElementById("city").value;

    if (!city) {
      alert("City name daal bhai 😄");
      return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    const res = await fetch(url);
    const data = await res.json();

    console.log(data);

    document.getElementById("result").innerHTML = `
      <h2>${data.location.name}</h2>
      <p>🌡 Temp: ${data.current.temp_c}°C</p>
      <p>☁ ${data.current.condition.text}</p>
      <p>💧 Humidity: ${data.current.humidity}%</p>
      <p>🌬 Wind: ${data.current.wind_kph} km/h</p>
    `;
  } catch (err) {
    console.log("Error:", err);
  }
}
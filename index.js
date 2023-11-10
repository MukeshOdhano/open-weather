const search = document.querySelector("#search");
const search_btn = document.querySelector("#search-btn");
const place_name = document.querySelector(".place-name h2");
const weather = document.querySelector(".weather");
const temp = document.querySelector(".temp");
const temp_max = document.querySelector(".max-temp");
const temp_min = document.querySelector(".min-temp");

// API KEY
// copy ur api key here...
const api_key = "API KEY";

let city_name = undefined;

// serach
search_btn.addEventListener("click", () => {
	city_name = search.value;
	const api_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}`;

	fetchAPI(api_URL);

	search.value = "";
});

function fetchAPI(url) {
	let usePromise = fetch(url);

	usePromise
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			// console.log(data);
			weatherInfo(data);
		})
		.catch((err) => {
			console.log(err);
		});
}

const weatherInfo = (data) => {
	console.log(data.main);
	place_name.textContent = data.name;
	weather.textContent = data.weather[0].main;
	temp.textContent = data.main.temp + "°";
	temp_max.textContent = data.main.temp_max + "°";
	temp_min.textContent = data.main.temp_min + "°";
};

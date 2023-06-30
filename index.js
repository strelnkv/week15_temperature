let cities = ["Москва", "Нью-Йорк", "Париж", "Лиссабон"];
let temperatures = [];

//получение температуры для каждого города
for (let i = 0; i < cities.length; i++) {
  let temperature = prompt(`Введите температуру для города ${cities[i]}`);
  temperatures.push(Number(temperature));
  const $city = document.createElement("p");
  $city.innerHTML = `Температура в городе ${cities[i]} равна ${temperature}`;
  document.body.appendChild($city);
}

//максимальная и минимальная температуры
const maxTemp = Math.max(...temperatures);
const minTemp = Math.min(...temperatures);
const $minTemp = document.createElement("p");
$minTemp.innerHTML = `Минимальная температура: ${minTemp}`;
document.body.appendChild($minTemp);

const $maxTemp = document.createElement("p");
$maxTemp.innerHTML = `Минимальная температура: ${maxTemp}`;
document.body.appendChild($maxTemp);

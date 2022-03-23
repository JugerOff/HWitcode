
const app = document.querySelector('.weather-app');
const temp = document.querySelector('.temp');
const dateOutput = document.querySelector('.date');
const timeOutput = document.querySelector('.time');
const conditionOutput = document.querySelector('.condition');
const nameOutput = document.querySelector('.name');
const icon = document.querySelector('.icon');
const CloudyOutput = document.querySelector('.Cloudy');
const WindOutput = document.querySelector('.Wind');
const HumidityOutput = document.querySelector('.Humidity');
const form = document.getElementById('locationInput');
const seacrh = document.querySelector('.search');
const btn = document.querySelector('.submit');
const cities = document.querySelector('.city');




let cityInput = "Ufa";

cities.forEach((city) => {
   city.addeventListener('click', (e) => {
      cityInput = e.target.innerHTML;
      fetchWeatherData();
      app.style.opacity = "0";
   });
})

form.addEventListener('submit', (e) =>
   if(seacrh.ariaValueMax.length == 0) {
      alert('Введите название города');
   } else {
      cityInput = search.value;
      fetchWeatherData();
      seacrh.value = "";
      app.style.opacity = "0";
      e.preventDefault();
   });

   function dayOfTheWeek (day, month, year) {
      const weekday = [
         "Понедельник",
         "Вторник",
         "Среда",
         "Четверг",
         "Пятница",
         "Суббота",
         "Воскресенье"
      ];
      return weekday[new Date(`${day}/${month}/${year}`).getDay()];
   };

      function fetchWeatherData() {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=Ufa,ru&appid=e10651d6f01fc10ee55032a6986a9550$`)
      .then(response => response.json())
      .then(data => {
         console.log(data);
         temp.innerHTML = data.current.temp_c + "&#176;"
         conditionOutput.innerHTML = data.current.condition.text;
         const data = data.location.localtime;
         const y = parseInt(date.substr(0, 4));
         const m = parseInt(date.substr(5, 2));
         const d = parseInt(date.substr(8, 2));
         const time = date.substr(11);

         dateOutput.innerHTML = `${dayOfTheWeek(d, m, y)} ${d}, ${m}, ${y},`
         timeOutput.innerHTML = time;

         nameOutput.innerHTML = data.localtion.name;
         const iconId = data.current.condition.icon.substr(
            "//cdn.weatherapi.com/weather/64x64/".length);
            icon.src = "./icons/" + iconId;
            сloudOutput.innerHTML = data.current.cloud + "%";
            humidityOutput.innerHTML = data.current.humidity + "%";
            windOutput.innerHTML = data.current.wind_kph + "КМ/Ч";

            let timeOfDay = "day";
            const code = data.current.condition.code;
            if(!data.current.is_day) {
               timeOfDay = "night";
            }
            if(code == 1000) {
               app.style.backgroundImage = `url(./img/${timeOfDay}/clear.jpg)`

               btn.style.background = "#e5ba92";
               if(timeOfDay == "night") {
                  btn.style.background = "#181e27";
               }
               else if(
                  code == 1003 ||
                  code == 1006 ||
                  code == 1009 ||
                  code == 1030 ||
                  code == 1068 ||
                  code == 1087 ||
               ) {
                  app.style.backgroundImage = `url(./img/${timeOfDay}/Облачно.jpg)`;
                  btn.style.background = "#fa6d1b";
                  if(timeOfDay == "night") {
                     btn.style.background = "#181e27";
                  } else if (
                     code == 1063 ||
                     code == 1069 ||
                     code == 1072 ||
                     code == 1150 ||
                     code == 1153 ||
                     code == 1180 ||
                  ) {
                     app.style.backgroundImage = `url(./img/${timeOfDay}/rainy.jpg)`
                     btn.style.background = "#647d75";
                     if(timeOfDay == "night") {
                     btn.style.background = "#325c80";
               }
            }else {
               app.style.backgroundImage = `url(./img/${timeOfDay}/snowy.jpg)`
               btn.style.background = "#4d72aa";
                     if(timeOfDay == "night") {
                     btn.style.background = "#1b1b1b";
            }
                  }
               }
               app.style.opacity = "1";
                  }
               }
               )
            }
         )
      })
      .catch(() => {
         alert('Город не найден. Пожалуйста, введите снова');
         app.style.opacity = "1";
      });
      }
      fetchWeatherData();

      app.style.opacity = "1";
   }

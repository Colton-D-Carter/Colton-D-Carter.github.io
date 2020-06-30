
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('.ham');


hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')});

let w_name = ['Sunday', 'Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday'];
let m_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let mydate = new Date();

let weekname = w_name[mydate.getDay()];
let monthname =m_name[mydate.getMonth()];


const dateoutput = document.querySelector('.date');

dateoutput.textContent = weekname + ", " + mydate.getDate() + " " + monthname + " " + mydate.getFullYear();


const salart = document.querySelector('.sat-alart');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');

if (weekname === 'Sunday'){
  five.style.display = "none";
  six.style.display = "none";

  // one.style.display = "block";
  // two.style.display = "block";
  // three.style.display = "block";
  // four.style.display = "block";
  // seven.style.display = "block";
}
if (weekname === 'Monday'){
  // one.style.display = "block";
  // two.style.display = "block";
  // three.style.display = "block";
  // four.style.display = "block";
  // five.style.display = "block";
  
  six.style.display = "none";
  seven.style.display = "none";
  
}
if (weekname === 'Tuesday'){
  one.style.display = "none";
  seven.style.display = "none";
}
if (weekname === 'Wednesday'){
  one.style.display = "none";
  two.style.display = "none"; 
  
  // three.style.display = "block";
  // four.style.display = "block";
  // five.style.display = "block";
  // six.style.display = "block";
  // seven.style.display = "block";
}
if (weekname === 'Thursday'){
  two.style.display = "none";
  three.style.display = "none";

  // one.style.display = "block";
  // four.style.display = "block";
  // five.style.display = "block";
  // six.style.display = "block";
  // seven.style.display = "block";
}
if (weekname === 'Friday'){
    salart.style.display = "block";

  three.style.display = "none";
  four.style.display = "none";


  // one.style.display = "block";
  // two.style.display = "block";
  // five.style.display = "block";
  // six.style.display = "block";
  // seven.style.display = "block";
}
if (weekname === 'Saturday'){
  four.style.display = "none";
  five.style.display = "none";

  // one.style.display = "block";
  // two.style.display = "block";
  // three.style.display = "block";
  // six.style.display = "block";
  // seven.style.display = "block";
}


const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=fdd4ae86db7db8e70269504861cc299b"

fetch(apiURL) 
    .then((response) => response.json())
    .then((jsonObject) => {
        console.log(jsonObject); 

        let k = document.textContent = jsonObject.main.temp;
        let t = parseFloat(k);
        let temp = Math.round(t * 9 / 5 - 459.76);

        let a = document.textContent = jsonObject.wind.speed;
        let b = parseFloat(a);
        
        let f = 35.74 + 0.6215 * b - 35.75 * Math.pow(t,.16) + .4275 * b * Math.pow(t,.16);

        document.getElementById("wind-chill").innerHTML = f;
        document.getElementById("wind-speed").innerHTML = b;
        

        document.getElementById('Currently').textContent = jsonObject.weather[0].description;
        document.getElementById('high').textContent = temp;

        document.getElementById('humidity').textContent = jsonObject.main.humidity;
        

        const imagesrc = 'https://openweathermap.org/img/w/' + jsonObject.weather[0].icon + '.png';
        const desc = jsonObject.weather[0].description;
        
        document.getElementById('imagesrc').textContent = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', desc);
    });

const api7day = "http://api.openweathermap.org/data/2.5/forecast/daily?id=5604473&cnt=16&appid=122437fcd7a16833f2ce66647e9a1481"

fetch(apiURL) 
    .then((response) => response.json())
    .then((jsonObject) => {
        console.log(jsonObject); 
        
//LOOP????
//day???

        const imagesrc = 'https://openweathermap.org/img/w/' + jsonObject.weather[0].icon + '.png';
        const desc = jsonObject.weather[0].description;
        
        document.getElementById('imagesrc').textContent = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', desc);
    });
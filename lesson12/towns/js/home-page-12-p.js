
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

const oned = document.querySelector('oned')
const twod = document.querySelector('.twod');
const threed = document.querySelector('.threed');
const fourd = document.querySelector('.fourd');
const fived = document.querySelector('.fived');
const sixd = document.querySelector('.sixd');
const sevend = document.querySelector('.sevend');

const onetm = document.querySelector('.onetm');
const twotm = document.querySelector('.twotm');
const threetm = document.querySelector('.threetm');
const fourtm = document.querySelector('.fourtm');
const fivetm = document.querySelector('.fivetm');
const sixtm = document.querySelector('.sixtm');
const seventm = document.querySelector('.seventm');

if (weekname === 'Sunday'){
  sevend.style.backgroundColor = '#FFFF00';;
  seven.style.backgroundColor = '#FFFF00';;
  seventm.style.backgroundColor = '#FFFF00';;

  fived.style.display = "none";
  sixd.style.display = "none";

  five.style.display = "none";
  six.style.display = "none";

  fivetm.style.display = "none";
  sixtm.style.display = "none";

  

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
  
  sixd.style.display = "none";
  sevend.style.display = "none";

  six.style.display = "none";
  seven.style.display = "none";

  sixtm.style.display = "none";
  seventm.style.display = "none";
  
}
if (weekname === 'Tuesday'){

  oned.style.display = "none"
  sevend.style.display = "none";

  one.style.display = "none";
  seven.style.display = "none";

  onetm.style.display = "none";
  seventm.style.display = "none";
}
if (weekname === 'Wednesday'){
  oned.style.display = "none";
  twod.style.display = "none"; 

  one.style.display = "none";
  two.style.display = "none"; 

  onetm.style.display = "none";
  twotm.style.display = "none"; 
  
  // three.style.display = "block";
  // four.style.display = "block";
  // five.style.display = "block";
  // six.style.display = "block";
  // seven.style.display = "block";
}
if (weekname === 'Thursday'){
  twod.style.display = "none";
  threed.style.display = "none";

  two.style.display = "none";
  three.style.display = "none";

  twotm.style.display = "none";
  threetm.style.display = "none";

  // one.style.display = "block";
  // four.style.display = "block";
  // five.style.display = "block";
  // six.style.display = "block";
  // seven.style.display = "block";
}
if (weekname === 'Friday'){
  fived.style.backgroundColor = '#FFFF00';;
  five.style.backgroundColor = '#FFFF00';;
  fivetm.style.backgroundColor = '#FFFF00';;

    salart.style.display = "block";

  threed.style.display = "none";
  fourd.style.display = "none";

  three.style.display = "none";
  four.style.display = "none";

  threetm.style.display = "none";
  fourtm.style.display = "none";


  // one.style.display = "block";
  // two.style.display = "block";
  // five.style.display = "block";
  // six.style.display = "block";
  // seven.style.display = "block";
}
if (weekname === 'Saturday'){
  fourd.style.display = "none";
  fived.style.display = "none";

  four.style.display = "none";
  five.style.display = "none";

  fourtm.style.display = "none";
  fivetm.style.display = "none";

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
        //console.log(jsonObject); 

        let k = document.textContent = jsonObject.main.temp;
        let t = parseFloat(k);
        let z = Math.round(t * 9 / 5 - 459.76);

        let a = document.textContent = jsonObject.wind.speed;
        let b = parseFloat(a);
        let f = 35.74 + 0.6215 * b - 35.75 * Math.pow(t,.16) + .4275 * b * Math.pow(t,.16).toFixed(0);

        document.getElementById("wind-chill").innerHTML = f;
        document.getElementById("wind-speed").innerHTML = b;
        

        document.getElementById('Currently').textContent = jsonObject.weather[0].description;
        document.getElementById('high').textContent = z;
        document.getElementById('humidity').textContent = jsonObject.main.humidity;  
    });

const api7day = "https://api.openweathermap.org/data/2.5/onecall?lat=42.1&lon=-111.88&exclude=minutely,hourly,current&appid=55301fa1a5b3fe4a3c34d2eb4ab01fd5"

fetch(api7day) 
    .then((response) => response.json())
    .then((jsonObject) => {
      console.log(jsonObject);
        

        for (let x = 0; x <= 6; x++){
          //tmp
          console.log(jsonObject.daily[x].temp.day)
          let g = jsonObject.daily[x].temp.day;
          let y = (g * (9/5) - 459.67).toFixed(0);
          document.getElementById('tmp' + x).textContent = y;

          //img
          //imagesrc =  src="http://openweathermap.org/img/wn/" + jsonObject.daily[x].weather[0].icon + "@2x.png";
          //imagesrc = jsonObject.daily[x].weather[0].icon;
          //desc = jsonObject.daily[x].weather[0].description;
          console.log(jsonObject.daily[x].weather[0].icon)
          //console log check for icon
          //console.log(jsonObject.daily[i].weather[i].icon);
          
          //document.getElementById('icon' + x).setAttribute("http://openweathermap.org/img/wn/" + imagesrc + "@2x.png");
          //document.getElementById('icon' + x).setAttribute('alt', desc);    
      }
    });
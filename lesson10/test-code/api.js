const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=fdd4ae86db7db8e70269504861cc299b"

fetch(apiURL) 
    .then((response) => response.json())
    .then((jsonObject) => {
        console.log(jsonObject); 

        let k = document.textContent = jsonObject.main.temp;
        let t = parseFloat(k);
        let temp = Math.round(t * 9 / 5 - 459.76);

        document.getElementById('current-temp').textContent = temp;
        document.getElementById('current-temp').textContent = temp;

        const imagesrc = 'https://openweathermap.org/img/w/' + jsonObject.weather[0].icon + '.png';
        const desc = jsonObject.weather[0].description;
        
        document.getElementById('imagesrc').textContent = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', desc);
    });
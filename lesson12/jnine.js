const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('.ham');


hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')});

const requestURL ='https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++ ) {
            if(towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") { /*filter I need to call only towns by the name of Preston,Fish Haven, and Soda Springs you can find the Json link at requestURL(line 7 of) */
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let para1 = document.createElement('p');
            let para2 = document.createElement('p');
            let para3 = document.createElement('p');
            let para4 = document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = towns[i].name;
            card.appendChild(h2);
            document.querySelector('div.cards').appendChild(card);

            para1.textContent = towns[i].motto;
            card.appendChild(para1);
            document.querySelector('div.cards').appendChild(card);

            para2.textContent = 'Year Founded: ' + towns[i].yearFounded;
            card.appendChild(para2);  
            document.querySelector('div.cards').appendChild(card);

            para3.textContent = 'Population: ' + towns[i].currentPopulation;
            card.appendChild(para3);  
            document.querySelector('div.cards').appendChild(card);

            para4.textContent = 'Annual Rain fall: ' + towns[i].averageRainfall;
            card.appendChild(para4);  
            document.querySelector('div.cards').appendChild(card);

            image.setAttribute("src", towns[i].photo);
            image.setAttribute("alt", "picture of the town");
            card.appendChild(image);
           
            document.querySelector('div.cards').appendChild(card);
        }
    }
    })
    .catch(function(error) {
        alert("We appoligize, we seam to be having truble with our data.");
    });
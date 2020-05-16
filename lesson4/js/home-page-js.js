alert ('I suck at JS 4!');
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('.ham');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')});

  const images = document.querySelectorAll('[data-src]');
  
  function preloadImage(img){
      const source = img.getAttribute('data-src');
      if(!source) {
          return;
      }
  
      img.src = source;
  }
  
  const options = { threshold: [1] }
  
  const io = new IntersectionObserver (
      (entries, io) => {
          entries.forEach(entry => {
              if (!entry.isIntersecting) {
                  return;
              } else {
                  preloadImage(entry.target);
                  io.unobserve(entry.target);
              }
          });
      }, options
  );
  
  
      images.forEach(image => {
      io.observe(image);
  })
  
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
if (weekname === 'Friday'){
    salart.style.display = "block";
}

WebFont.load({
    google: {
      families: [
         'Noto Sans JP'
      ]
    }
  });
 
 

const toggles = document.querySelectorAll('.toggle-menu')
const nav = document.querySelector('#menu')

for (const toggle of toggles) {
  toggle.addEventListener('click', ()=>{
    nav.classList.toggle('active')
    console.log("oi")
  })
}


const links = document.querySelectorAll('nav a');

for(const link of links){
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    })
};


window.addEventListener('resize', function () {
  var largura = window.innerWidth;
  if (largura > 1000) 
    nav.classList.remove('active');
});




var telInput = document.querySelector('#tel-input');
var telOptions = {
  mask: '(00)0 0000-0000'
};
const telInputMasked = IMask(telInput, telOptions);

document.querySelector('form').addEventListener("submit", (e) => {
  e.preventDefault()
})

const dateLabel = document.querySelector('#actual-year')
const actualDate = new Date().getFullYear()
console.log(actualDate)

dateLabel.innerHTML = actualDate
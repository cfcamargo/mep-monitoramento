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
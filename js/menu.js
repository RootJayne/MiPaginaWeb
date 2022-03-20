const menu = document.querySelector('.menu');
const Menu = document.querySelector('.Menu-Navegacion');

console.log(menu)
console.log(Menu)

menu.addEventListener('click', ()=>{
    Menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(Menu.classList.contains('spread')
       && e.target != Menu && e.target != menu){
           Menu.classList.toggle("spread")

       }
})
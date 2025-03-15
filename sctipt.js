const bar = document.getElementById('bar');
const nav = document.getElementById('nav-bar');

if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active')
    })
}
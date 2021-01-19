const btnMenu = document.getElementById('btn_menu');
const ctnEnlaces = document.getElementById('ctn_enlaces');

btnMenu.addEventListener('click', () =>{
    ctnEnlaces.classList.toggle('active');
    if(ctnEnlaces.classList.contains('active')){
        btnMenu.firstElementChild.classList.replace('fa-bars','fa-times')
    }else{
        btnMenu.firstElementChild.classList.replace('fa-times','fa-bars')
    }
})
let navigation = document.querySelector('.navbar')

window.addEventListener('scroll', () =>{
    if(window.scrollY > 50){
        navigation.classList.add('sticky')
    }else{
        navigation.classList.remove('sticky')
    }
})
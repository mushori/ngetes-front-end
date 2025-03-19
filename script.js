function scrollToElement(elementSelector, instance = 0 ){
    //memilih semua elemen yang sesuai dengan pilihannya
    const element = document.querySelectorAll(elementSelector);
    //mengecek apakah elemen yang dipilih ada atau tidak
    if(element.length > instance){
        //scroll ke elemen yang dipilih
        element[instance].scrollIntoView({behavior: 'smooth'});
    }
}

const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');

link1.addEventListener('click', () =>{
    scrollToElement('.header');
});

link2.addEventListener('click', () =>{
    //scroll ke elemen yang memiliki kelas "header"
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () =>{
    scrollToElement('.column');
});
//Creo array immagini
const imagesArray = [
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp"
]

//Creiamo dinamicamente i div con le immagini del carosello
let itemsContent = '';

for(let i = 0; i < imagesArray.length; i++){
    itemsContent += `<div class="item">
        <img src="./img/${imagesArray[i]}">
    </div>`
}

//inseriamo le immagini nel div che le deve contenere
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

//Prendiamo la prima immagine dell'array e la rendiamo attiva

//const items = document.querySelector('.item'); //ALTERNATIVA

const items = document.getElementsByClassName('item');
let itemActive = 0;

items[itemActive].classList.add('active');

//rendo attivo anche il primo cerchio di navigazione

const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
console.log(itemActive)


next.addEventListener('click', function(){
    //verifico l'elemento attivo (itemActive)
    //incremento il suo valore di 1
    //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
    //stessa cosa per i cerchi
/*     let itemactive_2; */

    


    items[itemActive].classList.remove('active');

    let itemactive_2 = ++itemActive

    items[itemactive_2].classList.add('active');

    circles[itemActive].classList.remove('active');

    circles[itemactive_2].classList.add('active');

    circles[--itemactive_2].classList.remove('active');

/*     if(itemActive == 4){
        itemActive = 0

        items[itemActive].classList.remove('active');

        let itemactive_2 = ++itemActive
        circles[itemactive_2].classList.remove('active');
        items[itemactive_2].classList.add('active');

    } */

    console.log(itemActive)

    console.log(itemactive_2)
/* 
    itemactive_2 = items[itemActive +1]

    itemactive_2.classList.add('active')

    items[itemActive].classList.remove('active') */;


 /*    items[--itemactive_2].classList.remove('active'); */

/*     circles[itemactive_2].classList.add('active');

    circles[itemActive].classList.remove('active');

    circles[--itemactive_2].classList.remove('active');
 */
    

});

prev.addEventListener('click', function(){
    //verifico l'elemento attivo (itemActive)
    //decremento il suo valore di 1
    //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
    //stessa cosa per i cerchi

    items[itemActive].classList.remove('active');

    let itemactive_2 = --itemActive

    items[itemactive_2].classList.add('active');
    
    circles[itemActive].classList.remove('active');

    circles[itemactive_2].classList.add('active');

    circles[++itemactive_2].classList.remove('active');
    /* items[--itemactive_2].classList.remove('active'); */

})



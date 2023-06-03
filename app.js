//Sekcja podpiecia zdarzeń do elementów td i definicji zmiennych

var znak=true;
const pole = document.querySelectorAll("td");
const button = document.querySelector("#button");

button.addEventListener("click",startGry);

/**
 * Uruchamienie interakcji na obiekty <td>.
 */
function startGry(){

    for(let n = 0; n<pole.length; n++){
        pole[n].addEventListener("mouseover", zaznacz);
        pole[n].addEventListener("mouseout", zaznaczOFF);
        pole[n].addEventListener("click",wstawZnak);
    }
}


/**
 * Funkcja zaznacza obszar po najechaniu myszką
 * @param {pointer} event - obiekt na którym dokonano zdarzenia
 */
function zaznacz(event){
    event.target.style.border = "1px solid #ff0000";
}

/**
 * Funckja kasująca zaznaczenie obszar po zjechaniu myszki
 * @param {pointer} event - obiekt na którym dokonano zdarzenia
 */
function zaznaczOFF(event){
    event.target.style.border = "1px solid #0000aa";
}
/**
 * Funkcja wstawiająca znak w obszar kliknięcia
 * @param {pointer} event - wskaźnik na obiekt
 */
function wstawZnak(event){
    if(znak) {
        event.target.innerHTML="X";
        event.target.style.backgroundColor="#FFAAAA";
        znak=false;
    }else{
        event.target.innerHTML="O";
        event.target.style.backgroundColor="#AAAAFF";
        znak=true;
    };
}
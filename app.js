//Sekcja podpiecia zdarzeń po elementy td

const pole = document.querySelectorAll("td");

for(let n = 0; n<pole.length; n++){
    pole[n].addEventListener("mouseover", zaznacz);
    pole[n].addEventListener("mouseout", zaznaczOFF);
}

/**
 * Funckja zaznacza obszar po najechaniu myszką
 * @param {pinter} event - obiekt na którym dokonano zdarzenia
 */
function zaznacz(event){
    event.target.style.backgroundColor = "#ffaaaa";
}

/**
 * Funckja kasująca zaznaczenie obszar po zjechaniu myszki
 * @param {pinter} event - obiekt na którym dokonano zdarzenia
 */
function zaznaczOFF(event){
    event.target.style.backgroundColor = "";
}
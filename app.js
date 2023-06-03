/****************************************************************
 * TicTacToe v.0.6
 * 
 * Artur Pelo / 03.06.2023
 * artur.pelo@gmail.com
 */


//Sekcja podpiecia zdarzeń do elementów td i definicji zmiennych

var znak=true;
const pole = document.querySelectorAll("td");
const button = document.querySelector("#button");

button.addEventListener("click",startGry);

/****************************************************************
 * Uruchamienie interakcji na obiekty <td>.
 */
function startGry(){

    document.querySelectorAll(".gracz")[0].disabled=true;  
    document.querySelectorAll(".gracz")[1].disabled=true; 
    button.disabled=true;
    for(let n = 0; n<pole.length; n++){
        pole[n].addEventListener("mouseover", zaznacz);
        pole[n].addEventListener("mouseout", zaznaczOFF);
        pole[n].addEventListener("click",wstawZnak);
    }
}

/*****************************************************************
 * Funkcja zaznacza obszar po najechaniu myszką
 * @param {pointer} event - obiekt na którym dokonano zdarzenia
 */
function zaznacz(event){
    event.target.style.border = "1px solid #ff0000";
}

/****************************************************************
 * Funckja kasująca zaznaczenie obszar po zjechaniu myszki
 * @param {pointer} event - obiekt na którym dokonano zdarzenia
 */
function zaznaczOFF(event){
    event.target.style.border = "1px solid #0000aa";
}
/****************************************************************
 * Funkcja wstawiająca znak w obszar kliknięcia
 * @param {pointer} event - wskaźnik na obiekt
 */
function wstawZnak(event){
    console.dir(event.target);
    if(event.target.innerHTML==""){
        if(znak) {
            event.target.innerHTML="X";
            event.target.style.backgroundColor="#FFAAAA";
            znak=false;
        }else{
            event.target.innerHTML="O";
            event.target.style.backgroundColor="#AAAAFF";
            znak=true;
        };
    };
}
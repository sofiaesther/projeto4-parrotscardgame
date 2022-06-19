let contador = 0;
let jogadas=0;
let start= false;

contador = prompt("Quer jogar com quantas cartas?");
while (contador>14 || contador<4 || contador%2!==0){
    contador = prompt("Quer jogar com quantas cartas?");
}
console.log(contador);

const allcards = ["explodyparrot.gif","bobrossparrot.gif","fiestaparrot.gif","metalparrot.gif","revertitparrot.gif","tripletsparrot.gif","unicornparrot.gif"];

const avCards=[];
cardsingame()
let cartascertas = 0;

function cardsingame() {
    allcards.sort(comparador);
    for (let i = 0; i < contador/2; i++){
       avCards.push(allcards[i])
       avCards.push(allcards[i])
    }

    avCards.sort(comparador);

    for (let i = 0; i < contador; i++) {
      const cardfront = `
        <li>
        <div class="card" onclick="selecionar(this)"> 
            <img src="front.png"/>
            <img src="${avCards[i]}"/>
            <p>${avCards[i]}</p>
        </div>
        </li>
    `;
      document.querySelector("ul").innerHTML += cardfront;
    }
  }

let carta1;
let carta2;
let carta1obj;
let carta2obj;
let otheritem;
let pardecartas;

function selecionar (elemento) {
    if (elemento.classList.contains("certa"))
    {} else{    
    start=true;
    jogadas=jogadas+1
    const cartavirada = document.querySelector(".virada.selected");
    elemento.classList.add("virada");
    const cardturned = setTimeout(setcardturned, 250);

    if (carta1==null){
        carta1obj = elemento.querySelector("p").innerText;
        carta1 = elemento;


    } else{

        carta2obj = elemento.querySelector("p").innerText;
        carta2 = elemento;

        if (carta1obj==carta2obj){
            elemento.classList.add("certa")
            elemento.classList.remove("frente")
            elemento.classList.remove("selected")
            elemento.classList.remove("card")

            pardecartas = document.querySelector(".selected");

    
            pardecartas.classList.add("certa")
            pardecartas.classList.remove("selected")
            pardecartas.classList.remove("frente")
  
            
            carta1 = null;
            carta2 =null;

            otheritem = [];
            pardecartas = null;
            cartascertas=cartascertas+1
            if (cartascertas==contador/2){
                const acaboujogo = setTimeout(endgame, 1000);
            }


        } else{
            elemento.classList.remove("selected");
            const turnback = setTimeout(turncardback, 1000);
            carta1 = null;
            carta2 =null;
            otheritem = [];
            pardecartas = null;
        }
    }
    }}

function endgame(){
    alert(`Você ganhou em ${jogadas} jogadas!`);
}
 function turncardback(){
     const turncard = setTimeout(wrongpair, 250);
 }

function setcardturned () {
    const item = document.querySelector(".virada.card");
    if( item!=null){
        item.classList.add("frente");
        item.classList.add("selected");
        item.classList.remove("card");
    }
}

function wrongpair (){
    const pardecartas = document.querySelectorAll(".virada.selected");
    for (let i = 0; i < pardecartas.length; i++){
        pardecartas[i].classList.add("card");
        pardecartas[i].classList.remove("frente");
        pardecartas[i].classList.remove("virada");
        pardecartas[i].classList.remove("selected");
    }
}

function comparador() { 
	return Math.random()- 0.5; 
}

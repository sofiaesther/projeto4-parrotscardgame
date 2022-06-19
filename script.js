let contador = 0;
contador = prompt("Quer jogar com quantas cartas?");
while (contador>14 || contador<4 || contador%2!==0){
    contador = prompt("Quer jogar com quantas cartas?");
}
console.log(contador);
cardsingame();

function cardsingame() {
    for (let i = 0; i < contador/2; i++) {
      const cardfront = `
        <li>
        <div class="card" onclick="selecionar(this)"> 
            <img src="front.png"/>
        </div>
        </li>
    `;
      document.querySelector("ul").innerHTML += cardfront;
    }
  }


function selecionar (elemento) {
    elemento.classList.add("virada");
    const cardturned = setTimeout(setcardturned, 250);
 }

function setcardturned () {
    const item = document.querySelector(".virada");
    if (item !== null){
        item.classList.add("frente");
        item.classList.remove("card");
    }
}


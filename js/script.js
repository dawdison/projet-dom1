/* quantity click + on click -
// unit-price*quantity
// trash on click remove / maybe an option to revert action ?
// on click heart on favorite / maybe an alert to say that it as added to the favorite
// add the sum of every total on total price
*/

// Prix total
let totalDisplay = document.getElementById("TotalPrices")

function PriceUpdate() {
let total=0;
 basketsprice =100* parseInt(document.getElementById("QuantityBaskt").innerHTML);
 socksprice= 20*parseInt(document.getElementById("QuantitySocks").innerHTML);
 bagprice= 50*parseInt(document.getElementById("QuantityBag").innerHTML);
total = basketsprice+ socksprice+ bagprice;
totalDisplay.textContent = total;
}

//Increment
let a =0
let b=0
let c=0
function IncrementBaskt() {
    
    a++;
    document.getElementById("QuantityBaskt").innerHTML = a; PriceUpdate()
}

function IncrementSocks() {
    b++;
    document.getElementById("QuantitySocks").innerHTML = b;PriceUpdate()
}

function IncrementBag() {
    c++;
    document.getElementById("QuantityBag").innerHTML = c;PriceUpdate()
}

//Decrement
function DecrementBaskt() {
    a--;
    document.getElementById("QuantityBaskt").innerHTML = a;
    if (a<0) {
        document.getElementById("QuantityBaskt").innerHTML=0;
    } 
}

function DecrementSocks() {
    b--;
    document.getElementById("QuantitySocks").innerHTML = b;
    if (b<0) {
        document.getElementById("QuantitySocks").innerHTML=0;
    } 
}

function DecrementBag() {
    c--;
    document.getElementById("QuantityBag").innerHTML = c;
    if (c<0) {
        document.getElementById("QuantityBag").innerHTML=0;
    } 
}


//Enlever elements
function RBasket() {
    let element = document.getElementById("removeBaskt");
    element.remove(); 
    let card = document.getElementByClassName ("card-title");
    alert(card-title[0].getAttribute('value')+ "a ete retire du panier")
}
function RSocks() {
    let element = document.getElementById("removeSocks");
    element.remove();
}
function RBag() {
    let element = document.getElementById("removeBag");
    element.remove();
}





//Boutons coeurs
function BasketBtn() {
    document.getElementById("likeBask").style.color = "red";
}
function SocksBtn() {
    document.getElementById("LikeSocks").style.color = "red"
}

function BagBtn() {
    document.getElementById("LikeBag").style.color = "red"
}



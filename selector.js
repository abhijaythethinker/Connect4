let cards = ["Red & Yellow", "Black & White", "Red & White", "Blue & Peach"]
let hollowOne = ["Black & White", "Red & White", "Blue & Peach", "Red & Yellow"]
let hollowTwo = ["Blue & Peach", "Red & Yellow", "Black & White", "Red & White"]
let count = 0;
let buttonTwo = document.querySelector(".buttonTwo");

buttonTwo.addEventListener("click", switchCard);

let cardBig = document.getElementById("cardBig");
let cardLeft = document.getElementById("cardLeft");
let cardRight = document.getElementById("cardRight");

function switchCard() {
    count++;
    if (count > 3) {
        count = 0;
    }
    cardBig.innerText = cards[count]
    cardLeft.innerText = hollowOne[count]
    cardRight.innerText = hollowTwo[count]
}

let buttonOne = document.querySelector(".buttonOne")
buttonOne.addEventListener("click", gameStart)

function gameStart() {
    if (cardBig.innerText == "Red & Yellow") {
        location.replace("./redyellow.html")
    } else if (cardBig.innerText == "Black & White") {
        location.replace("./blackwhite.html")
    } else if (cardBig.innerText == "Red & White") {
        location.replace("./redwhite.html")
    } else {
        location.replace("./bluepeach.html")
    }
}

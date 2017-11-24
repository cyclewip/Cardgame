var cards = ["img/2_of_clubs.png", "img/2_of_diamonds.png", "img/2_of_hearts.png", "img/2_of_spades.png", "img/3_of_clubs.png", "img/3_of_diamonds.png",
    "img/3_of_hearts.png", "img/3_of_spades.png", "img4_of_clubs.png", "img/4_of_diamonds.png", "img/4_of_hearts.png", "img/4_of_spades.png",
    "img/5_of_clubs.png", "img/5_of_diamonds.png", "img/5_of_hearts.png", "img/5_of_spades.png", "img/6_of_clubs.png", "img/6_of_diamonds.png",
    "img/6_of_hearts.png", "img/6_of_spades.png", "img/7_of_clubs.png", "img/7_of_diamonds.png", "img/7_of_hearts.png", "img/7_of_spades.png",
    "img/8_of_clubs.png", "img/8_of_diamonds.png", "img/8_of_hearts.png", "img/8_of_spades.png", "img/9_of_clubs.png", "img/9_of_diamonds.png",
    "img/10_of_hearts.png", "img/10_of_spades.png", "img/10_of_clubs.png", "img/10_of_diamonds.png", "img/jack_of_clubs.png", "img/jack_of_diamonds.png",
    "img/jack_of_hearts.png", "img/jack_of_spades.png", "img/queen_of_clubs.png", "img/queen_of_diamonds.png", "img/queen_of_hearts.png", "img/queen_of_spades.png",
    "img/king_of_clubs.png", "img/king_of_diamonds.png", "img/king_of_hearts.png", "img/king_of_spades.png", "img/ace_of_clubs.png", "img/ace_of_spades.png",
    "img/ace_of_hearts.png", "img/ace_of_diamonds.png"];

var clubs2 = {color: "clubs", value: "2"};
var clubs3 = {color: "clubs", value: "3"};
var clubs4 = {color: "clubs", value: "4"};
var clubs5 = {color: "clubs", value: "5"};
var clubs6 = {color: "clubs", value: "6"};
var clubs7 = {color: "clubs", value: "7"};
var clubs8 = {color: "clubs", value: "8"};
var clubs9 = {color: "clubs", value: "9"};
var clubs10 = {color: "clubs", value: "10"};
var clubsjack = {color: "clubs", value: "11"};
var clubsqueen = {color: "clubs", value: "12"};
var clubsking = {color: "clubs", value: "13"};
var clubsace = {color: "clubs", value: "14"};

var spades2 = {color: "spades", value: "2"};
var spades3 = {color: "spades", value: "3"};
var spades4 = {color: "spades", value: "4"};
var spades5 = {color: "spades", value: "5"};
var spades6 = {color: "spades", value: "6"};
var spades7 = {color: "spades", value: "7"};
var spades8 = {color: "spades", value: "8"};
var spades9 = {color: "spades", value: "9"};
var spades10 = {color: "spades", value: "10"};
var spadesjack = {color: "spades", value: "11"};
var spadesqueen = {color: "spades", value: "12"};
var spadesking = {color: "spades", value: "13"};
var spadesace = {color: "spades", value: "14"};

var hearts2 = {color: "hearts", value: "2"};
var hearts3 = {color: "hearts", value: "3"};
var hearts4 = {color: "hearts", value: "4"};
var hearts5 = {color: "hearts", value: "5"};
var hearts6 = {color: "hearts", value: "6"};
var hearts7 = {color: "hearts", value: "7"};
var hearts8 = {color: "hearts", value: "8"};
var hearts9 = {color: "hearts", value: "9"};
var hearts10 = {color: "hearts", value: "10"};
var heartsjack = {color: "hearts", value: "11"};
var heartsqueen = {color: "hearts", value: "12"};
var heartsking = {color: "hearts", value: "13"};
var heartsace = {color: "hearts", value: "14"};

var diamonds2 = {color: "diamonds", value: "2"};
var diamonds3 = {color: "diamonds", value: "3"};
var diamonds4 = {color: "diamonds", value: "4"};
var diamonds5 = {color: "diamonds", value: "5"};
var diamonds6 = {color: "diamonds", value: "6"};
var diamonds7 = {color: "diamonds", value: "7"};
var diamonds8 = {color: "diamonds", value: "8"};
var diamonds9 = {color: "diamonds", value: "9"};
var diamonds10 = {color: "diamonds", value: "10"};
var diamondsjack = {color: "diamonds", value: "11"};
var diamondsqueen = {color: "diamonds", value: "12"};
var diamondsking = {color: "diamonds", value: "13"};
var diamondsace = {color: "diamonds", value: "14"};

var cardsValue = [clubs2, diamonds2, hearts2, spades2, clubs3, diamonds3, hearts3, spades3,
    clubs4, diamonds4, hearts4, spades4, clubs5, diamonds5, hearts5, spades5,
    clubs5, diamonds5, hearts5, spades5, clubs6, diamonds6, hearts6, spades6,
    clubs7, diamonds7, hearts7, spades7, clubs8, diamonds8, hearts8, spades8,
    clubs9, diamonds9, hearts9, spades9, clubs10, diamonds10, hearts10, spades10,
    clubsjack, diamondsjack, heartsjack, spadesjack, clubsqueen, diamondsqueen, heartsqueen, spadesqueen,
    clubsking, diamondsking, heartsking, spadesking, clubsace, diamondsace, heartsace, spadesace
];

var btnDeal = document.getElementById("btnDeal");

var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var total = document.getElementById("total");

var cardPc1 = document.getElementById("cardPc1");
var cardPc2 = document.getElementById("cardPc2");
var totalPc = document.getElementById("totalPc");

var winnerMessage = document.getElementById("winner");

var cardImageHuman1 = document.getElementById("cardImageHuman1");
var cardImageHuman2 = document.getElementById("cardImageHuman2");
var cardImagePc1 = document.getElementById("cardImagePc1");
var cardImagePc2 = document.getElementById("cardImagePc2");


function deal() {
    var drawnCards = 0;
    var value1 = Math.floor(Math.random() * 51);
    var value2 = Math.floor(Math.random() * 51);

    var tableCard1 = cardsValue[Math.floor(Math.random() * 51)];
    var tableCard2 = cardsValue[Math.floor(Math.random() * 51)];
    var tableCard3 = cardsValue[Math.floor(Math.random() * 51)];
    var tableCard4 = cardsValue[Math.floor(Math.random() * 51)];
    var tableCard5 = cardsValue[Math.floor(Math.random() * 51)];

    var result = value1 + value2;
    cardImageHuman1.src = cards[value1];
    cardImageHuman2.src = cards[value2];

    var humanCard1 = cardsValue[value1];
    var humanCard2 = cardsValue[value2];

    card1.innerHTML = value1;
    card2.innerHTML = value2;
    total.innerHTML = result;

    value1 = Math.floor(Math.random() * 51);
    value2 = Math.floor(Math.random() * 51);
    var resultPc = value1 + value2;
    cardImagePc1.src = cards[value1];
    cardImagePc2.src = cards[value2];

    var pcCard1 = cardsValue[value1];
    var pcCard2 = cardsValue[value2];

    var newResultHuman = countValue(humanCard1, humanCard2, tableCard1, tableCard2, tableCard3, tableCard4, tableCard5, drawnCards);
    var newResultPC = countValue(pcCard1, pcCard2, tableCard1, tableCard2, tableCard3, tableCard4, tableCard5, drawnCards);
    cardPc1.innerHTML = value1;
    cardPc2.innerHTML = value2;
    totalPc.innerHTML = resultPc;

    winner(result, resultPc);
}

function countValue(card1, card2, randomCard1, randomCard2, randomCard3, randomCard4, randomCard5, drawnCards) {
    var sameNumber = 0;
    var sameColor = 0;
    var collectedValue = 0;
    var cardsBasicValue;
    var allCards = [card1, card2];
    if (card1 < card2)
        cardsBasicValue = card2;

    else if (card2 < card1)
        cardsBasicValue = card1;

    var colorValue = 0;
    var flush = false;
    var pairs = false;
    var threeOfaKind = false;
    var fourOfaKind = false;
    if (card1.color === card2.color) {
        colorValue++;

    }
    if (card1.value === card2.value) {
        pairs = true;
    }

    for (var key in cardsValue.value) {

    }


    if (drawnCards === 3) {
        allCards = [card1, card2, randomCard1, randomCard2, randomCard3];
        var tempSameNumber = 0;
        var tempSameNumber2 = 0;
        var tempSameColor = 0;


        for (var i = 0; i < allCards.length; i++) {
            if (tempSameNumber > sameNumber) {
                sameNumber = tempSameNumber;
                tempSameNumber = 0;
            }
            if (tempSameColor > sameColor) {
                sameColor = tempSameColor;
                tempSameColor = 0;
            }
            for (var y = 0; y < allCards.length; y++) {
                if (allCards[i].value = allCards[y].value)
                    tempSameNumber++;
                if (allCards[i].color = allCards[y].color)
                    sameColor++;
            }
        }
    }

    if (pairs) {
    }
    if (drawnCards === 4) {
        allCards = [card1, card2, randomCard1, randomCard2, randomCard3, randomCard4];

        if (drawnCards === 5) {
            allCards = [card1, card2, randomCard1, randomCard2, randomCard3, randomCard4, randomCard5];
        }
    }

}

function compareCards(){

}

function winner(result, resultPc) {
    console.log("Human had" + result);
    console.log("Pc had" + resultPc);

    if (result > resultPc) {
        winnerMessage.innerHTML = "Human won!"
    }
    else if (result === resultPc) {
        winnerMessage.innerHTML = "It's a tie!";
    }
    else {
        winnerMessage.innerHTML = "Pc won!";
    }
}

btnDeal.addEventListener("click", deal);
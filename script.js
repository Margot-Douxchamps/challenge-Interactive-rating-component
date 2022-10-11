let numberEl = document.querySelectorAll('.number-el');
let ratingFeedback = document.querySelector('.feedback')
let thanksMsg = document.querySelector('.thanksMsg');
let userFeedback = document.querySelector('.userFeedback');
let userRate = 0;
let error = document.querySelector('.errorMsg');

let ratingScore1 = false;
let ratingScore2 = false;
let ratingScore3 = false;
let ratingScore4 = false;
let ratingScore5 = false;

thanksMsg.style.display = "none";

function checkedScore(num) {
    if (num === 1) {
        ratingScore1 = !ratingScore1;
        colorChange(ratingScore1, 0, 1, 2, 3, 4);
        userRate = 1;
        userFeedback.textContent = "You selected " + userRate + " out of 5" 
    } else if (num === 2) {
        ratingScore2 = !ratingScore2;
        colorChange(ratingScore2, 1, 0, 2, 3, 4);
        userRate = 2;
        userFeedback.textContent = "You selected " + userRate + " out of 5" 
    } else if (num === 3) {
        ratingScore3 = !ratingScore3;
        colorChange(ratingScore3, 2, 0, 1, 3, 4);
        userRate = 3;
        userFeedback.textContent = "You selected " + userRate + " out of 5" 
    } else if (num === 4) {
        ratingScore4 = !ratingScore4;
        colorChange(ratingScore4, 3, 0, 1, 2, 4);
        userRate = 4;
        userFeedback.textContent = "You selected " + userRate + " out of 5" 
    } else if (num === 5) { 
        ratingScore5 = !ratingScore5;
        colorChange(ratingScore5, 4, 0, 1, 2, 3);
        userRate = 5;
        userFeedback.textContent = "You selected " + userRate + " out of 5" 
    }
}


function colorChange(scoreSelected, indexScore, indexOtherEl1, indexOtherEl2, indexOtherEl3, indexOtherEl4) {
    if (scoreSelected) {
        numberEl[indexScore].style.backgroundColor = "hsl(217, 12%, 63%)";
        numberEl[indexScore].style.color = "#FFF";
        numberEl[indexOtherEl1].style.backgroundColor = null;
        numberEl[indexOtherEl1].style.color = null;
        numberEl[indexOtherEl2].style.backgroundColor = null;
        numberEl[indexOtherEl2].style.color = null;
        numberEl[indexOtherEl3].style.backgroundColor = null;
        numberEl[indexOtherEl3].style.color = null;
        numberEl[indexOtherEl4].style.backgroundColor = null;
        numberEl[indexOtherEl4].style.color = null 
    } else if (!scoreSelected){
        numberEl[indexScore].style.backgroundColor = null;
        numberEl[indexScore].style.color = null 
    }
}

function changeView() {
    if (!ratingScore1 && !ratingScore2 && !ratingScore3 && !ratingScore4 && !ratingScore5) {
        error.textContent = "Plese, give us a feedback!"
    } else {
        ratingFeedback.style.display = 'none';
        thanksMsg.style.display = 'flex'
    }
}
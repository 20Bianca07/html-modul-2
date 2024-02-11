let couter = 0;
const score = document.getElementsByClassName("score")[0];
const FirstButton = document.getElementById("first");
const SecondButton = document.getElementById("second");
const backgroundDiv = document.getElementsByClassName("background")[0];
const marioDiv = doocument.getElementsByClassName("mario")[0];
const obstacleDiv = document.getElementsByClassName("obstacle")[0];

document.addEventListener("DOMContentLoaded", () => {
    window.alert("Click pe OK ca sa incepi jocul!");
})

function increment() {
    counter++;
    score.innerHTML = "Score:" + counter;
}

setInterval(increment, 1000);

function returnPos() {
    marioDiv.style.bottom = "1%";
    marioDiv.style.backgroundImage = "url(mariowalk.png)";
}

document.addEventListener("keydown", (e) => {
    if(e.code == "Space") {
        marioDiv.style.bottom = "35%";
        marioDiv.style.backgroundImage = "url(mariojump.png)";
        setTimeout(returnPos, 1000);
    }
})

function obstacle() {
    obstacleDiv.style.transition = "3s all";
    obstacleDiv.style.right = "130%";

    setTimeout( () => {
        obstacleDiv.style.transition = "0s all";
        obstacleDiv.style.right = "-10%";
    }, 2000);
}

setInterval(obstacle, 4000);

function col() {
    if(obstacleDiv.getBoundingClientRect().left <= marioDiv.getBoundingClientRect().right &&
     obstacleDiv.getBoundingClientRect().right >= marioDiv.getBoundingClientRect().left &&
      obstacleDiv.getBoundingClientRect().top <= marioDiv.getBoundingClientRect().bottom) {
        location.reload();
      }
}

setInterval(col, 100);

FirstButton.addEventListener("click", () => {
    backgroundDiv.style.backgroundImage = "url(background.jpg)";
})

SecondButton.addEventListener("click", () => {
    backgroundDiv.style.backgroundImage = "url(background.jpg)";
})
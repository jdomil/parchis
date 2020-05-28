// Randomize dice number and change image upon click
function randomNum() {
    num = Math.floor(Math.random() * 6) + 1;
    let dice = document.getElementById("dice");
    dice.style.backgroundImage = "url(assets/images/" + num + ".png)";
    console.log(num);
};


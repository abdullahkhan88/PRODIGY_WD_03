const gameContainer = document.querySelector(".game");
const allButton = gameContainer.querySelectorAll("button");
const ResetBtn = document.querySelector(".reset-btn");
const resultMsg = document.querySelector(".mesg");
const newGameBtn = document.querySelector("#newGame-btn");

let turnO = true;


const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const disableBtn = () => {
    for (let allBtn of allButton) {
        allBtn.disabled = true;
    }
}
const enableBtn = () => {
    for (let allBtn of allButton) {
        allBtn.disabled = false;
        allBtn.innerText = "";
    }
}

const checkwinner = () => {
    for (let checkPattern of winPatterns) {
        let pos1Val = allButton[checkPattern[0]].innerText;
        let pos2Val = allButton[checkPattern[1]].innerText;
        let pos3Val = allButton[checkPattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val == pos2Val && pos2Val == pos3Val) {
                resultMsg.innerHTML = pos1Val + " " + "is Winner !";
                disableBtn()
                return true;
            }
        }

    }
}

allButton.forEach((item) => {
    item.addEventListener("click", () => {
       
        if (turnO == true) {
            item.innerHTML = "O";
            turnO = false;

        }
        else {
            item.innerHTML = "X"
            turnO = true;

        }
        item.disabled = true;

        checkwinner()
    })
});


newGameBtn.addEventListener("click", () => {

})

const resetGame = () => {
    turnO = true;
    enableBtn();
    resultMsg.innerHTML = "";

};

newGameBtn.addEventListener("click", resetGame);
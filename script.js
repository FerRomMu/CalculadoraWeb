const numButtons = document.querySelectorAll(".button__num");
const dotButton = document.querySelector(".button__dot");
const operationButtons = document.querySelectorAll(".button__operation");
const equalButton = document.querySelector(".button__equals");
const deleteButton = document.querySelector(".button__del");
const allClearButton = document.querySelector(".button__ac");
const previousOperandText = document.querySelector(".calculator__previous-operand");
const currentOperandText = document.querySelector(".calculator__current-operand");

class Calculator{

    constructor(prevOperand, currentOperand) {
        this.prevOperandElement = prevOperand;
        this.currentOperandElement = currentOperand;
        this.dotLock = false;
        this.clear();
    }

    refreshDisplay(){
        this.prevOperandElement.innerText = this.prevOperand;
        this.currentOperandElement.innerText = this.currentOperand;
    }

    clear() {
        this.prevOperand = "";
        this.currentOperand = 0;
        this.operator = undefined;
        this.dotIsLocked = false;
        this.refreshDisplay();
    }

    numClick(num) {
        if(this.currentOperand == "0"){
            this.currentOperand = "";
        }
        this.currentOperand = this.currentOperand + num;
        this.refreshDisplay();
    }

    dotClick(){
        if(!this.dotIsLocked) {
            this.currentOperand = this.currentOperand + '.';
            this.dotIsLocked = true;
        }
    }
}

const calculator = new Calculator(previousOperandText, currentOperandText);

numButtons.forEach(button => {
    button.addEventListener('click', () => {calculator.numClick(button.innerText)})
})

dotButton.addEventListener('click', () => {calculator.dotClick()})


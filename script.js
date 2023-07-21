afaadsaconst numButtons = document.querySelectorAll(".button__num");
const dotButton = document.querySelector(".button__dot");
const operationButtons = document.querySelectorAll(".button__operation");
const equalsButton = document.querySelector(".button__equals");
const deleteButton = document.querySelector(".button__del");
const allClearButton = document.querySelector(".button__ac");
const previousOperandText = document.querySelector(".calculator__previous-operand");
const currentOperandText = document.querySelector(".calculator__current-operand");
const currentOperator = document.querySelector(".calculator__current-operator");

class Calculator{

    constructor(prevOperand, currentOperand, currentOperator) {
        this.prevOperandElement = prevOperand;
        this.currentOperandElement = currentOperand;
        this.currentOperatorElement = currentOperator;
        this.dotLock = false;
        this.clear();
    }

    refreshDisplay(){
        if (this.currentOperand == "") {
            this.currentOperand = "0";
        }
        this.prevOperandElement.innerText = this.prevOperand;
        this.currentOperandElement.innerText = this.currentOperand;
        this.currentOperatorElement.innerText = this.operator;
    }

    clear() {
        this.prevOperand = "";
        this.currentOperand = "";
        this.operator = "+";
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

    del(){
        if(this.currentOperand.charAt(this.currentOperand.length - 1) == ".") {
            this.dotIsLocked = false;
        }
        this.currentOperand = this.currentOperand.slice(0,-1);
        this.refreshDisplay();
    }

    operate(operation) {
        this.equals();
        this.operator = operation;
        this.refreshDisplay();
    }

    equals(){
        let a = parseFloat(this.prevOperand);
        if (isNaN(a)){
            a = 0;
        }
        let b = parseFloat(this.currentOperand);
        switch(this.operator) {
            case "+":
                this.prevOperand = a + b;
                break;
            case "-":
                this.prevOperand = a - b;
                break;
            case "/":
                this.prevOperand = a / b;
                break;
            case "*":
                this.prevOperand = a * b;
                break;
            default:
                return;
        }
        this.currentOperand = "";
        this.operator = "+";
        this.refreshDisplay();
        this.dotIsLocked = false;
    }
}

const calculator = new Calculator(previousOperandText, currentOperandText, currentOperator);

numButtons.forEach(button => {
    button.addEventListener('click', () => {calculator.numClick(button.innerText)})
})

dotButton.addEventListener('click', () => {calculator.dotClick()})

deleteButton.addEventListener('click', () => {calculator.del()})

allClearButton.addEventListener('click', () => {calculator.clear()})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {calculator.operate(button.innerText)})
})

equalsButton.addEventListener('click', () => {calculator.equals()})

const firstInput = document.querySelector("#firstInput");
const resultInput = document.querySelector("#resultInput");
const firstSelect = document.querySelector("#firstSelect");
const secondSelect = document.querySelector("#secondSelect");


const api = new Api();

runEventListeners();

function runEventListeners(){
    firstInput.addEventListener("keyup", run);
    firstSelect.addEventListener("change", run);
    secondSelect.addEventListener("change", run);
}

function run(){
    let firstValue = getFirstSelectValue();
    let secondValue = getSecondSelectValue();
    let inputValue = firstInput.value.trim();

    let result = api.getCurrencyDatas(firstValue, secondValue, inputValue);
    result
    .then(value => addValueToUI(value));

}

function addValueToUI(result){
    resultInput.value = result.toFixed(2);
}

function getFirstSelectValue(){
    let value = firstSelect.value;

    return value;
}

function getSecondSelectValue(){
    let value = secondSelect.value;

    return value;
}
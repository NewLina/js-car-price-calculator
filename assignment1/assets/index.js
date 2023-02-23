import {reno, opel, mazda, jaguar} from './cars.js';
const brands=document.querySelector('.brand__options');
const models=document.querySelector('.model__options');
const engineVolumeInput=form.elements.engineVolume;
const button=document.querySelector('.button__count');
const resultContainer=document.querySelector('.result');
const text=document.querySelector('.text');
const owners=document.querySelector('.owners');
const conditionOptions=document.querySelectorAll('.condition__type__option');

const pricePerLiter=450;

const priceOfOptions = {
    petrol: 20000,
    diesel: 5000,
    gas: 28000,
    electricity: 35000,
    new: 100000
}

brands.addEventListener("change", makeChoice);
makeChoice();

function makeChoice() {
if (brands.value ==="Reno"){
    clean();
    reno.forEach(function (item) {
    const modelOption=document.createElement('option');
    modelOption.className='model-name';
    models.appendChild(modelOption);
    modelOption.value=item.model;
    modelOption.innerHTML=`${item.model}`;
    });
} else if (brands.value ==="Opel") {
    clean();
    opel.forEach(function (item) {
    const modelOption=document.createElement('option');
    modelOption.className='model-name';
    models.appendChild(modelOption);
    modelOption.value=item.model;
    modelOption.innerHTML=`${item.model}`;        
    });
} else if (brands.value ==="Mazda") {
    clean();
    mazda.forEach(function (item) {
    const modelOption=document.createElement('option');
    modelOption.className='model-name';
    models.appendChild(modelOption);
    modelOption.value=item.model;
    modelOption.innerHTML=`${item.model}`;       
    });
} else {
    clean();
    jaguar.forEach(function (item) {
    const modelOption=document.createElement('option');
    modelOption.className='model-name';
    models.appendChild(modelOption);
    modelOption.value=item.model;
    modelOption.innerHTML=`${item.model}`;      
    });  
}
} 

function clean(){
    models.innerHTML='';
}

function checkEngineVolumeInput() {
let content;
if (engineVolumeInput.validity.rangeOverflow || engineVolumeInput.validity.rangeUnderflow){
    content='Недопустимое значение. Введите число от 1.1 до 3.5';
    engineVolumeInput.style.border='1.5px solid red';
    clearResult();
} else if (engineVolumeInput.value==='') {
    content='Поле не заполнено!';
    engineVolumeInput.style.border='1.5px solid red';
    clearResult();
} else{
    content='';
    engineVolumeInput.style.border='none';
}
text.innerHTML=content;
}

function clearResult() {
    resultContainer.innerHTML = '';
}
function getFuelPrice() {
    if (document.getElementById('petrol').checked){
        return priceOfOptions.petrol;
    } else if(document.getElementById('diesel').checked) {
        return priceOfOptions.diesel;
    } else if(document.getElementById('gas').checked) {
        return priceOfOptions.gas;
    } else {
        return priceOfOptions.electricity;
    }
}

function checkConditionOfCar() {
    return document.getElementById('new').checked ? priceOfOptions.new : checkNumberOfOwners(); 
}

function checkNumberOfOwners(){
    console.log('vdfvfd');
}
checkConditionOfCar();

button.onclick = () => {
    models.addEventListener("change", countTotalPrice());
}
function countTotalPrice(){
    const selectedModel=document.getElementById('model').options.selectedIndex;
    let sum=0;
    function getModelPrice(){
        if (brands.value ==="Reno"){
            return reno[selectedModel].price;
        } else if (brands.value ==="Opel") {
            return opel[selectedModel].price;
        } else if (brands.value ==="Mazda") {
            return mazda[selectedModel].price;
        } else {
            return jaguar[selectedModel].price;
        }
    }
    const priceOfEngineVolume=pricePerLiter*engineVolumeInput.value;


    sum=sum+getModelPrice()+priceOfEngineVolume+getFuelPrice();
    console.log(sum);

    let displayResult='';
        displayResult=`
        <div class="result__sum">Стоимость автомобиля = ${sum} руб.</div>`;
        resultContainer.innerHTML = displayResult;
        checkEngineVolumeInput();

}

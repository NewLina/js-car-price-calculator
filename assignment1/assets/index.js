import {reno, opel, mazda, jaguar} from './cars.js';
const brands=document.querySelector('.brand__options');
const models=document.querySelector('.model__options');
const engineVolumeInput=form.elements.engineVolume;
const button=document.querySelector('.button__count');
const resultContainer=document.querySelector('.result');
const text=document.querySelector('.text');
const owners=document.querySelector('.owners');

const pricePerLiter=450;

const priceOfOptions = {
    petrol: 20000,
    diesel: 5000,
    gas: 28000,
    electricity: 35000,
    new: 100000
}

const priceByOwners = {
    less: 15000,
    more: -10000
}

const paymentMethodPrice={
    card: 1000,
    cash: -50000,
    invoice: 20000
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

const carConditionOption=form.elements.conditionType;
for (let i=0; i<carConditionOption.length; i++) {
    carConditionOption[i].onchange=checkConditionPrice;
}

function checkConditionPrice() {
    if (carConditionOption.value==='new') {
        owners.innerHTML = '';
        let conditionPrice=0;
        conditionPrice=priceOfOptions.new;
        return conditionPrice;
    } else if (carConditionOption.value==='used'){
        findConditionPriceByOwners();
        let conditionPrice=0;
        conditionPrice=conditionPrice+getOwnersPrice();
        return conditionPrice;
    };
}
function findConditionPriceByOwners() {
    let displayOwners='';
        displayOwners=`
        <div class="owners__question">
                    <legend class="owners__question__label">Выберите количество владельцев</legend>
                </div>

                <div class="owners__quantity number">
                    <div class="number__option">
                        <input class="number__option-choice number__option--1" type="radio" id="lessOwners"
                            name="numberOfOwners" value="1-2"/>
                        <label class="number__option-label--1" for="lessOwners">1-2</label>
                    </div>
                    <div class="number__option">
                        <input class="number__option-choice number__option--2" type="radio" id="moreOwners"
                            name="numberOfOwners" value="moreThan3" />
                        <label class="number__option-label--2" for="moreOwners">3 и более</label>
                    </div>
                </div>`;
        owners.innerHTML = displayOwners;
}
function getOwnersPrice(){
    if (document.getElementById('lessOwners').checked){
        return priceByOwners.less;
    } else {
        return priceByOwners.more;
    }
}

function getPaymentMethodPrice(){
    if (document.getElementById('cash').checked){
        return paymentMethodPrice.cash;
    } else if(document.getElementById('invoice').checked) {
        return paymentMethodPrice.invoice;
    } else {
        return paymentMethodPrice.card;
    }
}

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
    
    function getModelName(){
        if (brands.value ==="Reno"){
            return reno[selectedModel].model;
        } else if (brands.value ==="Opel") {
            return opel[selectedModel].model;
        } else if (brands.value ==="Mazda") {
            return mazda[selectedModel].model;
        } else {
            return jaguar[selectedModel].model;
        }
    }
    
    function getModelPicture(){
        if (brands.value ==="Reno"){
            return reno[selectedModel].image;
        } else if (brands.value ==="Opel") {
            return opel[selectedModel].image;
        } else if (brands.value ==="Mazda") {
            return mazda[selectedModel].image;
        } else {
            return jaguar[selectedModel].image;
        }
    }

    const priceOfEngineVolume=pricePerLiter*engineVolumeInput.value;

    sum=sum+getModelPrice()+priceOfEngineVolume+getFuelPrice()+checkConditionPrice()+getPaymentMethodPrice();
    console.log(checkConditionPrice());

    let displayResult='';
        displayResult=`
        <div class="result__sum">Стоимость автомобиля = ${sum} руб.</div>
        <div class="results__content content">
        <div class="content__brand-name">${brands.options[brands.selectedIndex].text}</div>
        <div class="content__model-name">${getModelName()}</div>
        <div class="content__model-image"><img class="image" src='${getModelPicture()}' alt="model-picture"></div>
        </div>`;
        resultContainer.innerHTML = displayResult;
        checkEngineVolumeInput();

}



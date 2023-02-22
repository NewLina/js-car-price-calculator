const brands=document.querySelector('.brand__options');
const models=document.querySelector('.model__options');

const reno=[
    {model: 'LOGAN', price: 500},
    {model: 'CLIO', price: 400},
    {model: 'ESPACE', price: 1000}
];
const opel=[
    {model: 'CASCADA', price: 250},
        {model: 'MOKKA', price: 2000},
        {model: 'INSIGNIA', price: 185}
];

const mazda=[
    {model: 'CX-3', price: 5000},
    {model: 'CX-4', price: 5500},
    {model: 'CX-9', price: 1450},
    {model: 'MX-5', price: 6000}
];

const jaguar=[
    {model: 'F-PACE', price: 5080},
    {model: 'F-TYPE', price: 4800},
    {model: 'XKR', price: 7000},
    {model: 'XF', price: 6550}
];

brands.addEventListener("change", makeChoice);


function makeChoice() {
if (brands.value ==="Reno"){
reno.forEach(function (item) {
    const modelOption=document.createElement('option');
    modelOption.className='model-name';
    brands.prepend(modelOption);
    modelOption.value=item.model;
});
} 
}


let billInput = document.getElementById("input-bill");
let peopleInput = document.getElementById("people-input");
let tipPerPerson = document.getElementById("tip-amount");
let totalPerPerson = document.getElementById("total-amount");
let resetButton = document.getElementById("reset");
let tips = document.querySelectorAll(".btn");
let error = document.querySelector('.error-msg');

let billValue = 0;
billInput.addEventListener('input', function () {
    billValue = parseFloat(billInput.value);
    console.log(billValue);
      calculateTip();
});
let peopleValue = 0;
peopleInput.addEventListener('input', function () {
    peopleValue = parseFloat(peopleInput.value);
    console.log(peopleValue);
      calculateTip();
    if (peopleValue == 0) {
        error.classList.add('active');
    }else{
        error.classList.remove('active');
    }
});

tips.forEach(element => {
    element.addEventListener('click', persentageClick);
});

let tipValue = 0;

function persentageClick(event) {
    tips.forEach(element => {
        element.classList.remove('btn-active');
        if (event.target.innerHTML == element.innerHTML) {
            element.classList.add('btn-active');
            tipValue = parseFloat((element.innerHTML))/100;
            console.log(tipValue);
        }
    });
}

function calculateTip (){
    if(peopleInput.value >=1 && billValue >= 1){
        let tipAmount = ((billValue * tipValue)/(peopleValue));
        tipPerPerson.innerHTML = `$  ${tipAmount}` ;
        let totalAmount = (billValue/peopleValue) + tipAmount;
        totalPerPerson.innerHTML = `$  ${totalAmount}` ;      
    }
}

calculateTip();


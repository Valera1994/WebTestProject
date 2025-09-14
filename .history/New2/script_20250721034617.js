const user = {
    name: "",
    surname: "",
    totalPrice: 0,
}

const btnElement = document.querySelector(".btn");
const resultElement = document.querySelector(".result");
const priceElements = document.querySelectorAll(".price"); // Переименовано во множественное число
const firstName = document.querySelector(".name");
const surName = document.querySelector(".surname");
const inputElements = document.querySelectorAll('input[name="coffee"]');

// Функция для пересчёта общей суммы
function calculateTotal() {
    user.totalPrice = 0;
    inputElements.forEach((element, i) => {
        if(element.checked) {
            const quantity = parseInt(priceElements[i].value) || 0;
            user.totalPrice += parseInt(element.dataset.price) * quantity;
        }
    });
    resultElement.textContent = user.totalPrice + 'р.';
}

firstName.addEventListener("input", function(){
    user.name = firstName.value;    
});

surName.addEventListener("input", function(){    
    user.surname = surName.value;
});

// Обработчики для чекбоксов
inputElements.forEach((element, i) => {    
    element.addEventListener("change", calculateTotal);
});

// Обработчики для полей количества
priceElements.forEach((element, i) => {
    element.addEventListener("input", calculateTotal);
});

btnElement.addEventListener("click", function(){
    if(!user.name || !user.surname) {
        alert("Пожалуйста, введите имя и фамилию");
        return;
    }
    
    if(user.totalPrice <= 0) {
        alert("Пожалуйста, выберите хотя бы один товар");
        return;
    }
    
    alert(`Имя: ${user.name}
Фамилия: ${user.surname}
Стоимость заказа: ${user.totalPrice}р.`);
});
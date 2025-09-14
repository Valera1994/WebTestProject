const user = {
    name: "",
    surname: "",
    totalPrice: 0,
}

const btnElement = document.querySelector(".btn");
const resultElement = document.querySelector(".result");
const firstName = document.querySelector(".name");
const surName = document.querySelector(".surname");
const coffeeInputs = document.querySelectorAll('input[name="coffee"]');
const quantityInputs = document.querySelectorAll('.price'); // Получаем все поля количества

firstName.addEventListener("input", function() {
    user.name = firstName.value;    
});

surName.addEventListener("input", function() {    
    user.surname = surName.value;
});

coffeeInputs.forEach((element, index) => {
    element.addEventListener("change", function() {
        const quantity = parseInt(quantityInputs[index].value) || 0; // Берем соответствующее поле количества
        
        if(element.checked) {
            user.totalPrice += parseInt(element.dataset.price) * quantity;
        } else {
            user.totalPrice -= parseInt(element.dataset.price) * quantity;
        }
        
        resultElement.textContent = user.totalPrice + 'р.';
    });
});

btnElement.addEventListener("click", function() {
    if(!user.name || !user.surname) {
        alert("Введите имя и фамилию!");
        return;
    }
    
    if(user.totalPrice <= 0) {
        alert("Выберите хотя бы один товар!");
        return;
    }
    
    alert(`Имя: ${user.name}\nФамилия: ${user.surname}\nСумма заказа: ${user.totalPrice}р.`);
});
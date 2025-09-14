const user = {
    name: "",
    surname: "",
    totalPrice: 0,
}

const btnElement = document.querySelector(".btn");
const resultElement = document.querySelector(".result");
const firstName = document.querySelector(".name");
const surName = document.querySelector(".surname");
const inputElements = document.querySelectorAll('input[name="coffee"]');

// 1. Исправлено: добавлен обработчик input (вместо change) для мгновенного обновления
firstName.addEventListener("input", function(){
    user.name = firstName.value;    
});

surName.addEventListener("input", function(){    
    user.surname = surName.value;
});

// 2. Исправлено: убрано лишнее обнуление totalPrice (оно в объекте уже есть)
inputElements.forEach(element => {
    element.addEventListener("change", function(){
        // 3. Исправлено: находим соответствующий input количества для этого товара
        const quantityInput = element.parentElement.querySelector('.price');
        const quantity = parseInt(quantityInput.value) || 0; // 4. Исправлено: добавлена проверка на число
        
        if(element.checked){
            user.totalPrice += parseInt(element.dataset.price) * quantity;
        } else {
            // 5. Исправлено: опечатка datase -> dataset
            user.totalPrice -= parseInt(element.dataset.price) * quantity;
        }
        
        // 6. Исправлено: обновляем текст через textContent
        resultElement.textContent = user.totalPrice + 'р.';
    });
});

// 7. Исправлено: проверка на заполнение данных перед заказом
btnElement.addEventListener("click", function(){
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
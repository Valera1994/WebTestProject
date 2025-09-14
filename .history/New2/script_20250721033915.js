const user = {
    name: "",
    surname: "",
    totalPrice: 0,
}

btnElement = document.querySelector(".btn");
resultElement = document.querySelector(".result");
priceElement = document.querySelector(".price");
firstName = document.querySelector(".name");
surName = document.querySelector(".surname");
inputElement = document.querySelectorAll('input[name = "coffee"]');

firstName.addEventListener("input", function(){
    user.name = firstName.value;    
});

surName.addEventListener("input", function(){    
    user.surname = surName.value;
});

user.totalPrice = 0;
inputElement.forEach(element, i => {    
    element.addEventListener("change", function(){
        const quantity = parseInt(priceElement[index].value) || 0;
        if(element.checked){
            user.totalPrice += parseInt(element.dataset.price) * quantity;
        } else {
            user.totalPrice -= parseInt(element.dataset.price) * quantity;
        }
        resultElement.textContent = user.totalPrice + 'p.';
    });
});





document.querySelector(".btn").onclick = function(){
    alert(`Имя: ${user.name}
Фамилия: ${user.surname}
Стоимость заказа: ${user.totalPrice}`);
}
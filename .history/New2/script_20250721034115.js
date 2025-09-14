const user = {
    name: "",
    surname: "",
    totalPrice: 0,
}

const btnElement = document.querySelector(".btn");
const resultElement = document.querySelector(".result");
const priceElement = document.querySelectorAll(".price");
const firstName = document.querySelector(".name");
const surName = document.querySelector(".surname");
const inputElement = document.querySelectorAll('input[name = "coffee"]');

firstName.addEventListener("input", function(){
    user.name = firstName.value;    
});

surName.addEventListener("input", function(){    
    user.surname = surName.value;
});


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
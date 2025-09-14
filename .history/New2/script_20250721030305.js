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
let selectValue = 0;

firstName.addEventListener("change", function(){
    user.name = firstName.value;    
});

surName.addEventListener("change", function(){    
    user.surname = surName.value;
});

inputElement.forEach(element => {
    element.addEventListener("change", function(){
        if(element.checked){
            user.totalPrice += parseInt(element.dataset.price) * parseInt(priceElement.value);
        } else {
            user.totalPrice -= parseInt(element.datase.price) * parseInt(priceElement.value);
        }
        
    });
});

resultElement = user.totalPrice;















document.querySelector(".btn").onclick = function(){
    alert(`Имя: ${user.name}
Фамилия: ${user.surname}
Стоимость заказа: ${user.totalPrice}`);
}
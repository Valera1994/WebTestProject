btnElement = document.querySelector(".btn");
resultElement = document.querySelector(".result");
firstName = document.querySelector(".name");
surName = document.querySelector(".surname");
inputElement = document.querySelectorAll("#coffee");
let selectValue = 0;




inputElement.forEach(element => {
    element.addEventListener("change", function(){
        if(element.checked){
            resultElement += element.value;
        } else {
            resultElement -= element.value;
        }

        
    });
});

















document.querySelector(".btn").onclick = function(){
    alert("Привет!");
}
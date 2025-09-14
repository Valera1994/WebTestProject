btnElement = document.querySelector(".btn");
resultElement = document.querySelector(".result");
firstName = document.querySelector(".name");
surName = document.querySelector(".surname");


inputElement = document.querySelector("#coffee");

inputElement.addEventListener("change", function(){
    resultElement.textContent = inputElement.value;
})

















document.querySelector(".btn").onclick = function(){
    alert("Привет!");
}
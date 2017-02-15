var button = document.querySelector(".search");
var popup = document.querySelector(".modal-order-form");
var depdate = popup.querySelector("[name=departure-date]");

depdate.focus();

button.addEventListener("click", function(event) {
	  event.preventDefault();
	  console.log("Клик по ссылке");
	  if (popup.classList.contains("emergence")) {
	      /*console.log("Содержит");*/
	      popup.classList.remove("emergence");
        popup.classList.add("vanishing");
    }
    else {
        /*console.log("Не содержит");*/
        popup.classList.remove("vanishing");
        popup.classList.add("emergence");
        depdate.focus();
    }
});
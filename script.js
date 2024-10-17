const selectOptions = document.querySelector("#selectOptions");
const selectText = document.querySelector("#selectOptions > p");
const optionsBody = document.querySelector(".options");
const options = document.getElementsByClassName("option");
const hide = document.querySelector(".hide");

selectOptions.addEventListener("click", e=> {
    optionsBody.classList.toggle("hide");
    for(option of options){
        option.onclick = function () {
            selectText.innerHTML = this.textContent;
            optionsBody.classList.toggle("hide");
        }
    }
})

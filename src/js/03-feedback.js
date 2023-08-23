import throttle from "lodash.throttle";


const selectors = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector("input"),
    textArea : document.querySelector("textarea")
}
autoFill()
const LS_KEY = "feedback-form-state";
selectors.form.addEventListener("input", throttle(handlerInput,500))

const value = {}
function handlerInput(evt) {
    value[evt.target.name] = evt.target.value
    localStorage.setItem("LS_KEY", JSON.stringify(value))
}

 selectors.form.addEventListener("submit", handlerSubmit)
function handlerSubmit(evt) {
    evt.preventDefault();
    console.log(value);
    selectors.form.reset();
    localStorage.removeItem("LS_KEY");
 }



function autoFill() {
    const lsValue = JSON.parse(localStorage.getItem("LS_KEY"));
    if (lsValue) {
        selectors.input.value = lsValue.email;
        selectors.textArea.value = lsValue.message
    }
}


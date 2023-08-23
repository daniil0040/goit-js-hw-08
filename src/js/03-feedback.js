import throttle from "lodash.throttle";

const selectors = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector("input"),
    textArea : document.querySelector("textarea")
}
const LS_KEY = "feedback-form-state";
let userData = JSON.parse(localStorage.getItem("LS_KEY")) ?? { email: "", message: ""}

selectors.form.addEventListener("input", throttle(handlerInput,500))
selectors.form.addEventListener("submit", handlerSubmit)

renderPage()

function handlerInput(evt) {
    userData[evt.target.name] = evt.target.value
    localStorage.setItem("LS_KEY", JSON.stringify(userData))
}

function handlerSubmit(evt) {
    evt.preventDefault();
    console.log(userData);
    selectors.form.reset();
    localStorage.removeItem("LS_KEY");
    userData = { email: "", message: ""}
 }



function renderPage() {
    // const lsValue = JSON.parse(localStorage.getItem("LS_KEY"));
    if (userData) {
        selectors.input.value = userData.email;
        selectors.textArea.value = userData.message
    }
}


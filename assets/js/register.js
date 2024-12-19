let firstname = false;
let lastname = false;
let email = false;
let adress = false;
let postalCode = false
let city = false;
let phone = false;
let rgpd = false;


document.querySelector("#registration_form_firstname").addEventListener("input", checkFirstname);
document.querySelector("#registration_form_lastname").addEventListener("input", checkLastname);
document.querySelector("#registration_form_email").addEventListener("input", checkEmail);
document.querySelector("#registration_form_adress").addEventListener("input", checkAdress);
document.querySelector("#registration_form_postalCode").addEventListener("input", checkPostalCode);
document.querySelector("#registration_form_phone").addEventListener("input", checkPhone);
document.querySelector("#registration_form_city").addEventListener("input", checkCity);
document.querySelector("#registration_form_agreeTerms").addEventListener("input", checkRgpd);

function checkFirstname() {
    firstname = this.value.length > 2;
    checkAll();
}

function checkLastname() {
    lastname = this.value.length > 1;
    checkAll();
}

function checkEmail(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    email = emailRegex.test(this.value);
}

function checkAdress(){
    adress = this.value.length > 1;
    checkAll();
}

function checkPostalCode() {
    const postalCodeValue = this.value; // Obtenez la valeur actuelle
    const postalCodeRegex = /^((0[1-9])|([1-8][0-9])|(9[0-8])|(2A)|(2B)) *([0-9]{3})?$/i;
    postalCode = postalCodeRegex.test(postalCodeValue);
    checkAll();
}

function checkCity() {
    const cityValue = this.value; // Obtenez la valeur actuelle
    const cityRegex = /^\s*[a-zA-Z]{1}[0-9a-zA-Z][0-9a-zA-Z '-.=#/]*$/gmi;
    city = cityRegex.test(cityValue);
    checkAll();
}

function checkPhone(){
    const phoneRegex = /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g;
    phone = phoneRegex.test(this.value);
    checkAll();
}

function checkRgpd(){
    rgpd = this.checked;
    checkAll();
}

function checkAll() {
    document.querySelector("#submit-button").setAttribute("disabled", "disabled");
    if (email && firstname && lastname && adress && postalCode && city && phone && rgpd) {
        document.querySelector("#submit-button").remove("disabled");
    }
}
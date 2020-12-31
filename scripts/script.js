const form = document.getElementById("form");
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const dob = document.getElementById('dob');
const street = document.getElementById('street');
const state = document.getElementById('state');
const city = document.getElementById('city');
const zip = document.getElementById('zip');
const phone = document.getElementById('phone');
const submitBtn = document.getElementById("submitBtn");
const gender = document.getElementsByName("gender");
const citizen = document.getElementsByName("citizenship");
const martial = document.getElementsByName("martial");
const studies = document.getElementsByName("studies");
const lang = document.getElementsByName("lang");

const genderid = document.getElementById("1");
const citizenid = document.getElementById("citizen1");
const martialid = document.getElementById("status");
const studiesid = document.getElementById("101");
const langid = document.getElementById("python")
const demo = document.getElementById("marks");



// validate function
function inputCheck(){
    const firstnamevalue = firstname.value.trim();
    const lastnamevalue = lastname.value.trim();
    const emailvalue = email.value.trim();
    const dobvalue = dob.value.trim();
    const streetvalue = street.value.trim();
    const statevalue = state.value.trim();
    const cityvalue = city.value.trim();
    const zipvalue = zip.value.trim();
    const phonevalue = phone.value.trim();

    if (firstnamevalue ===""){
        setErrorMsg(firstname,"Firstname cannot be blank");
        return false;
        
    }else{
        setSuccessMsg(firstname)
    }
    if (lastnamevalue ===""){
        setErrorMsg(lastname,"Lastname cannot be blank");
        return false;
        
    }else{
        setSuccessMsg(lastname)
    }
    if (emailvalue ===""){
        setErrorMsg(email,"Email cannot be blank");
        return false;
    }else if(!EmailRegexp(emailvalue)){
        setErrorMsg(email," enter a valid email!")
        return false;
    }else{
        setSuccessMsg(email)
    }
    if (dobvalue ===""){
        setErrorMsg(dob,"Date of Birth cannot be blank");
        return false;
    }else{
        setSuccessMsg(dob)
    }
    if (streetvalue ===""){
        setErrorMsg(street," enter the street");
        return false;
    }else{
        setSuccessMsg(street)
    }
    if (statevalue ===""){
        setErrorMsg(state," enter the state");
        return false;
    }else{
        setSuccessMsg(state)
    }
    if (cityvalue ===""){
        setErrorMsg(city," enter the city");
        return false;
    }else{
        setSuccessMsg(city)
    }
    if (zipvalue ===""){
        setErrorMsg(zip," enter the Zip");
        return false;
    }else if(zipvalue.length !== 6){
        setErrorMsg(zip, "enter valid zip code")
    }else{
        setSuccessMsg(zip)
    }
 
    radios(gender,genderid)
    radios(citizen,citizenid);
    radios(martial,martialid);
    education(studies,studiesid);
    radios(lang, langid);
    if (phonevalue ==""){
        setErrorMsg(phone," enter the Phone number");
        return false;
    }else if(phonevalue.length !== 10){
        setErrorMsg(phone, "enter 10 digit valid phone number");
        return false;
    }else{
        setSuccessMsg(phone)
    }


}


// all functions used to evalute in the validate function
function radios(check,id) {
    var radio = check;
    var formValid = false;

    var i = 0;
    while (!formValid && i < radio.length) {
        if (radio[i].checked) formValid = true;
        i++; 
    }

    if (!formValid){setErrorMsg(id," select any one option!");
    return formValid&&false;
    }else{setSuccessMsg(id);}
}
function education(check,id) {
    var radio = check;
    var formValid = false;

    var i = 0;
    while (!formValid && i < radio.length) {
        if (radio[i].checked&&demo[i].value > 1) formValid = true;
        i++; 
    }
    
    if (!formValid){setErrorMsg(id," select at least one option and enter marks");
    return formValid;
    }else{setSuccessMsg(id);}
}


function setErrorMsg(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error"
    small.innerText = message;
}
function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    
}

function EmailRegexp(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// all fuctions ended


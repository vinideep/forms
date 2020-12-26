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
const citizen = document.getElementsByName("indian");
const martial = document.getElementsByName("martial");
const studies = document.getElementsByName("studies");
const lang = document.getElementsByName("lang");
const genderid = document.getElementById("1");
const citizenid = document.getElementById("citizen1");
const martialid = document.getElementById("status");
const studiesid = document.getElementById("101");
const langid = document.getElementById("python")
const demo = document.getElementsByName("studies3");

console.log(document.getElementsByName("studies")[0].checked === document.getElementsByName("studies3")[0].checked);
form.addEventListener('submit',function(nothing){
    nothing.preventDefault();
    inputCheck();
    radios(gender,genderid);
    radios(citizen,citizenid);
    radios(martial,martialid);
    radios(studies,studiesid);
    radios(lang, langid);
});
function radios(check,id) {
    var radio = check;
    var formValid = false;

    var i = 0;
    while (!formValid && i < radio.length) {
        if (radio[i].checked) formValid = true;
        i++; 
    }

    if (!formValid){setErrorMsg(id," select some option!");
    return formValid;
    }else{setSuccessMsg(id);}
}
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
    }else{
        setSuccessMsg(firstname)
    }
    if (lastnamevalue ===""){
        setErrorMsg(lastname,"Lastname cannot be blank");
    }else{
        setSuccessMsg(lastname)
    }
    if (emailvalue ===""){
        setErrorMsg(email,"Email cannot be blank");
    }else if(!EmailRegexp(emailvalue)){
        setErrorMsg(email," enter a valid email!")
    }
else{
        setSuccessMsg(email)
    }
    if (dobvalue ===""){
        setErrorMsg(dob,"Date of Birth cannot be blank");
    }else{
        setSuccessMsg(dob)
    }
    if (streetvalue ===""){
        setErrorMsg(street," enter the street");
    }else{
        setSuccessMsg(street)
    }
    if (statevalue ===""){
        setErrorMsg(state," enter the state");
    }else{
        setSuccessMsg(state)
    }
    if (cityvalue ===""){
        setErrorMsg(city," enter the city");
    }else{
        setSuccessMsg(city)
    }
    if (zipvalue ===""){
        setErrorMsg(zip," enter the Zip");
    }else{
        setSuccessMsg(zip)
    }
    if (phonevalue ==""){
        setErrorMsg(phone," enter the Phone number");
    }else if(phonevalue.length !== 10){
        setErrorMsg(phone, "enter 10 digit valid phone number")
    }else{
        setSuccessMsg(phone)
    }
   
    // if (radios(citizen)){
    //     setErrorMsg(citizen," select the citizen");
    // }else{
    //     setSuccessMsg(citizen)
    // }
    // if (radios(martial)){
    //     setErrorMsg(martial," select the martial status");
    // }else{
    //     setSuccessMsg(martial)
    // }
    // if (radios(studies)){
    //     setErrorMsg(studies," select the studies");
    // }else{
    //     setSuccessMsg(studies)
    // }
    // if (radios(lang)){
    //     setErrorMsg(lang," select the languages");
    // }else{
    //     setSuccessMsg(lang)
    // }
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


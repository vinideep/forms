const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const dob = document.getElementById('dob');
const street = document.getElementById('street');
const state = document.getElementById('state');
const city = document.getElementById('city');
const zip = document.getElementById('zip');
const phone = document.getElementById('phone');
const gender = document.getElementById('gender');
const citizen = document.getElementById('citizen');
const martial = document.getElementById('martial');
const studies = document.getElementById('studies');
const lang = document.getElementById('lang');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const firstnamevalue =  firstname.value.trim();
    const lastnamevalue =  lastname.value.trim();
    const emailvalue = email.value.trim();
    const dobvalue =  dob.value.trim();
    const streetvalue = street.value;
    const statevalue =state.value.trim();
    const cityvalue =  city.value.trim();
    const zipvalue =  zip.value.trim();
    const phonevalue =  phone.value.trim();
    const gendervalue = gender.value.trim();
    const citizenvalue =citizen.value.trim();
    const martialvalue =martial.value.trim();
    const studiesvalue =studies.value.trim();
    const langvalue = lang.value.trim();

    if (firstnamevalue ===""){
        setErrorMsg(firstname, "error");
    }else{
        setSuccessMsg(firstname);
    }
    }
        function setErrorMsg(input,message){
            const formcontrol = input.parentElement;
            const small = formcontrol.querySelector('small');
        
            small.innertext = message;
        
            formcontrol.classname = "form-control error"
    }
window.addEventListener('load',()=>{
    const params = new URL(document.location).searchParams;
    const fname = params.get('firstname');
    const lname = params.get('lastname');
    const dob = params.get('dob');
    const email = params.get('email');
    const street = params.get("street");
    const studies = params.get('studies3');
    const gender = params.get('gender');
    const state = params.get('state');
    const city = params.get('city');
    const phone = params.get('phone');
    const martial = params.get('martial');
    const course = params.get('studies');
    const citizenship = params.get('citizenship');
    const zip = params.get('zip');


    document.getElementById("fname").innerHTML = "Firstname: "+fname;
    document.getElementById("lname").innerHTML = "Lastname: "+lname;
    document.getElementById("email").innerHTML = "Email: "+email;
    document.getElementById("dob").innerHTML = "Date of Birth: "+dob;
    document.getElementById("street").innerHTML = "Street: "+street;
    document.getElementById("state").innerHTML = "State: "+state;
    document.getElementById("gender").innerHTML = "gender: "+gender;
    document.getElementById("citizenship").innerHTML = "Citizenship: "+citizenship;
    document.getElementById("city").innerHTML = "City: "+city;
    document.getElementById('martial').innerHTML= "Martial-Status: "+martial;
    document.getElementById('course').innerHTML= "Course: "+course;
    document.getElementById("studies").innerHTML = "Marks: "+studies;
    document.getElementById("zip").innerHTML = "Zip: "+zip;
    document.getElementById("phone").innerHTML = "Phone: "+phone;
})
console.log("working");


let signup_form = document.getElementById('signup-form'); //entire form
let first_name = document.getElementById('first-name');
let middle_name = document.getElementById('last-name');
let last_name = document.getElementById('last-name');
let gender_options = document.getElementsByName("Gender");
let WhatsApp_number = document.getElementById('WhatsApp_number');
let phone_number = document.getElementById('phone_number');



//get user data from frontend
function getFrontendData() {

    // get selected gender 
    let gender = '';
    gender_options.forEach((ele) => {
        console.log(ele);
        if (ele.checked) {
            console.log(ele.value);
            gender = ele.value;
        }
    });



    let frontend_data = {
        firstName: first_name.value,
        middleName: middle_name.value,
        lastName: last_name.value,
        gender: gender,
        phoneNumber: phone_number.value,
        whatsAppNumber: WhatsApp_number.value
    }

    // console.log(frontend_data);



    return frontend_data;
}


//validate frontend data
function validateFrondendData(data) {
    if (data.firstName === "") {
        first_name.style.border = "1px solid red";
        alert("First Name field is required");
        return 1;
    } else if (data.lastName === "") {
        last_name.style.border = "1px solid red";
        alert("Last Name field is required");
        return 1;
    } else if (data.gender === "") {
        alert("Select a gender");
        return 1;
    }

    return 0;
}


//add data to db/json file
function sendDataToBackend(user_data, url) {
    console.log("Sending data...........");


}


//add data submission functionality to form
signup_form.addEventListener('submit', () => {

    //remove default behaviour from form 
    event.preventDefault()


    //data from frontend
    let user_data = getFrontendData();
    console.log(user_data);

    //validate data
    let validation_status = validateFrondendData(user_data);

    if (validation_status === 0) {
        sendDataToBackend(user_data, "/people/create");
    } else {
        console.log("Error in validation");
    }


})
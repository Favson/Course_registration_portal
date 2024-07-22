let retrievedData = JSON.parse(localStorage.getItem("data")) || [];
console.log(retrievedData);
let details = []
//Calling out the id needed and saving them in a new variable
let display = document.getElementById('display')
let checkBox = document.getElementById('checkBox')
let checkboxes = document.querySelectorAll('input[type="checkbox"]')
let count = 0;

//For the checkbox to count all the box checked       
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            count++;
        } else {
            count--;
        }
        document.getElementById('display').innerHTML = ` ${count}`;
    });
});


//Function to know the registered courses and to make sure it's 9 courses registered 
function registerCourses() {
    let inputName = document.getElementById('inputName').value;
    let matricNumber = document.getElementById("matricNumber").value;
    if(inputName.value === "" || matricNumber.value ===""){
        document.getElementById('err').style.display='block'
        document.getElementById('incorrect').style.display='none'
    }else if (inputName != `${retrievedData[0].matric}` || matricNumber != `${registerCourses[0].password}`){
        document.getElementById('incorrect').style.display='block'
        document.getElementById('err').style.display='none'
    }else if (matricNumber.length >10 || matricNumber.length < 10){
        alert('Incorrect Credential')
    }else{
        localStorage.setItem('name', inputName);
        localStorage.setItem('matric', matricNumber)
        window.location.href = 'display.html';
        document.getElementById('incorrect').style.display='none'
        document.getElementById('err').style.display='none'
        const form = document.getElementById('registrationForm');
        const selectedCourses = Array.from(form.elements['course'])
                                    .filter(course => course.checked)
                                    .map(course => course.value);
    }
    checkboxes.forEach(checkbox => checkbox.checked = false);
    document.getElementById('inputName').value=''
    document.getElementById('matricNumber').value="" 
    count="" 
}


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
document.getElementById('inputSpan1').innerText = `${retrievedData[0].fullName}`;
document.getElementById('inputSpan2').innerText = `${retrievedData[0].matric}`;

function registerCourses() {
    if (count > 0){
        window.location.href = 'scractch.html';
        document.getElementById('incorrect').style.display='none'
        document.getElementById('err').style.display='none'
        const selectedCourses = Array.from(form.elements['course'])
                                    .filter(course => course.checked)
                                    .map(course => course.value)
    checkboxes.forEach(checkbox => checkbox.checked = false);
    document.getElementById('inputName').value=''
    document.getElementById('matricNumber').value="" 
    count="" 
    }else{
        return;
    }
}

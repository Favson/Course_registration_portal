let display = document.getElementById('display')
let checkBox = document.getElementById('checkBox')
let checkboxes = document.querySelectorAll('input[type="checkbox"]')
let count = 0;        
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

let studentMatric =[2023008625, 2023007271, 2023006202, 2023007238, 2023002857,2023008028, 2023010703, 2023004212, 2023002427, 2023002524, 2023010465, 2023011681, 2023003139, 2023008891, 2023008239, 2023011299, 2023004947, 2023005814]
let UserArray=[]
function registerCourses() {
    let inputName = document.getElementById('inputName').value;
    let matricNumber = document.getElementById("matricNumber").value;
    if(inputName.value === "" || matricNumber.value ===""){
        document.getElementById('err').style.display='block'
        document.getElementById('incorrect').style.display='none'
    }else if (!studentMatric){
        document.getElementById('incorrect').style.display='block'
        document.getElementById('err').style.display='none'
    }else if (count < 9){
        alert('All Must be checked')
    }else if(document.getElementById('checkBox').checked.length =  9){
        document.getElementById('incorrect').style.display='none'
        document.getElementById('err').style.display='none'
        let UserObj = {inputName, matricNumber}
        UserArray.push(UserObj)
        localStorage.setItem('username', JSON.stringify(UserArray));

        const form = document.getElementById('registrationForm');
        const selectedCourses = Array.from(form.elements['course'])
                                    .filter(course => course.checked)
                                    .map(course => course.value);
    }
                                
    if(matricNumber == 2023008625 || inputName == "ADEBISI FAVOUR MOMOLUWA"){
        window.location.href = 'summary.html';
    }else if (matricNumber === 2023004212 || inputName == "ADEBOWALE ADEOLA PRECIOUS"){
        window.location.href='adeolaSummary.html '
    }
    checkboxes.forEach(checkbox => checkbox.checked = false);
    document.getElementById('inputName').value=''
    document.getElementById('matricNumber').value="" 
    count=""
    document.getElementById('inputName').value=''
    document.getElementById('matricNumber').value="" 
    document.getElementById('UserNameOut').innerHTML ="";
    document.getElementById('matricNoOut').innerHTML ="";
}
 UserArray = JSON.parse(localStorage.getItem("username")) || [];
 
 if (UserArray.length > 1) {
     document.getElementById('UserNameOut').innerHTML = `${UserArray.inputName}`;
     document.getElementById('matricNoOut').innerHTML = `${UserArray.matricNumber}`;
     console.log(UserArray)
     registerCourses()
 }

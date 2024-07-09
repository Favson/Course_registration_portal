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

let studentMatric =[2023008625, 2023007271, 2023006202, 2023007238, 2023002857,2023008028, 2023010703, 2023004212, 2023002427, 2023002524, 2023010465, 2023011681, 2023003139, 2023008891, 2023008239, 2023011299, 2023004947, 2023005814]
//Function to know the registered courses and to make sure it's 9 courses registered 
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
    }else if (matricNumber.length >10 || matricNumber.length < 10){
        alert('Incorrect Credential')
    } else if(document.getElementById('checkBox').checked.length =  9){
        localStorage.setItem('name', inputName);
        localStorage.setItem('matric', matricNumber)
        window.location.href = 'display.html';
        document.getElementById('incorrect').style.display='none'
        document.getElementById('err').style.display='none'
        const form = document.getElementById('registrationForm');
        const selectedCourses = Array.from(form.elements['course'])
                                    .filter(course => course.checked)
                                    .map(course => course.value);
        alert("Congratulations! You've been registered successfully!")
    }                           
    let comfirmation = confirm('Are you sure you want to proceed?')
    if (comfirmation){
        if(matricNumber == 2023008625 || inputName == "ADEBISI FAVOUR MOMOLUWA"){
            window.location.href = 'summary.html';
        }else if (matricNumber == 2023004212 || inputName == "ADEBOWALE ADEOLA PRECIOUS"){
            window.location.href='adeolaSummary.html '
        }else if (inputName == 'ADEBISI ISHAQ AYOMIDE'|| matricNumber == 2023002857){
            window.location.href='Adebisi ishaqresult.html'
        }else if(inputName == 'Adebisi olaide Ezekiel' || matricNumber == 2023011681){
            window.location.href='Adebisi OlaideResult.html'
        }else if (inputName == 'Adebowale victor Oladayo' || matricNumber ==2023010703){
            window.location.href='Adebowale victo OladayoResult.html'
        }else if (inputName == 'Adedeji Micheal Adewale' || matricNumber == 2023011681){
            window.location.href='AdedejiReult.html'
        }else if (inputName == 'Adediji Victor Oluwabukunmi' || matricNumber == 2023010465){
            window.location.href='Adediji victorRe.html'
        }else if (inputName == 'Adedokun Elijah Adewale' || matricNumber == 2023008028){
            window.location.href='Adedokun elijahResult.html'
        }else if (inputName == 'Adegun Temiloluwa Samuel' || matricNumber == 2023011299){
            window.location.href='Adegun Temiloluwareslut.html'
        }else if (inputName == 'Adekoya Anjolaoluwa Abdulahmid' || matricNumber == 2023008891){
            window.location.href='Adekoya Anjolaoluwaresly.html'
        }else if (inputName == 'Adekunjo Emmanuel Ayomide' || matricNumber == 2023002524){
            window.location.href='Adekunjo Emmanuel AyomideReslt.html'
        }else if (inputName == 'Adekunle Abdulhameed Ademola' || matricNumber == 2023005814){
            window.location.href='Adekunle Abdulhameedresult.html'
        }else if (inputName == 'Adekunle Glory olamide' || matricNumber == 2023003139){
            window.location.href='Adekunle Glryresult.html'
        }else if (inputName == 'Adelaja Abraham Ayomide' || matricNumber ==2023007238){
            window.location.href='Adelaja AbrahamResult.html'
        }else if (inputName == 'Adelakun Ayobami Grace' || matricNumber == 2023007271){
            window.location.href='AdelakunGraceResult.html'
        }else if (inputName == 'ADELEYE, Oluwaferanmi Promise' || matricNumber ==2023004947){
            window.location.href='Adeleye,oluwaferanmiResult.html'
        }else if (inputName == 'Adelusi Desmond' || matricNumber == 2023006202){
            window.location.href='Adelusi DesmondResult.html'
        }else if (inputName == 'Ademola Christopher Adeleye' || matricNumber == 2023009597){
            window.location.href='Ademola ChristopheResult.html'
        }else if (inputName == "Emmanuel Jeremiah GLory" || matricNumber == 2023008411){
            window.location.href='emmanuel jeremiahResult.html'
        }
    }   
    checkboxes.forEach(checkbox => checkbox.checked = false);
    document.getElementById('inputName').value=''
    document.getElementById('matricNumber').value="" 
    count="" 
}


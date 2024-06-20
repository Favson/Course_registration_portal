
//TimeShow
function updateGMTTime() {
    const timeDateInNigeria = new Date().toLocaleString('en-NG', {timeZone: 'Africa/Lagos'});  
    dateTimeDisplay.innerHTML=(timeDateInNigeria);
}
setInterval(updateGMTTime, 1000);

let studentMatric =[studentInfo = {
    "2023008625":"ADEBISI FAVOUR MOMOOLUWA",
    "2023007271": "AFOLABI JOSEPH ENIOLA"},
    2023008625, 2023007271, 2023006202, 2023007238, 2023002857,2023008028, 2023010703, 2023004212, 2023002427, 2023002524, 2023010465, 2023011681, 2023003139, 2023008891, 2023008239, 2023011299, 2023004947, 2023005814]
//The Login Button
function login(){
    button.innerText=`Processing...` 
    setTimeout(() => {
        button.innerHTML="Login"
    }, 1000);
    let password = document.getElementById('password').value
    let matricNo = document.getElementById('matricNo').value
    let matricPass1 = document.getElementById('matricPass1')
    let matricPass = document.getElementById('matricPass')
    let matricPass2 = document.getElementById('matricPass2')
    let matricPattern = /^2023/;
    let PassPhrase = "cybCla$$28"

    if (password.value ==="" || matricNo ===""){
        matricPass.style.display='block';
        matricPass2.style.display='block';
        matricPass1.style.display='none'
        document.getElementById('password').value=""
    }else if (!matricPattern.test(matricNo) || !studentMatric || matricNo.length > 10 || matricNo.length < 10 || password.value > 11 || password != PassPhrase){
        document.getElementById('password').value=""
        matricPass1.style.display='block'
        matricPass.style.display='none';
        matricPass2.style.display='none';
    }else{
        document.getElementById('loading').style.display='block'
        setTimeout(() => {
            document.getElementById('loading').style.display='none'
        }, 2000);
        matricPass.style.display='none';
        matricPass2.style.display='none';
        matricPass1.style.display='none'
        studentMatric.push(matricNo.value)
        if(PassPhrase == password){
            if (matricNo == 2023008625){
                window.location.href = "home.html"
            }else if (matricNo == 2023008239){
                window.location.href='Adedeji.html'
            }else if (matricNo == 2023011681){
                window.location.href='Adebisi olaide.html'
            }else if (matricNo == 2023003139){
                window.location.href='Adekunle Glory olamide.html'
            }else if (matricNo == 2023011299){
                window.location.href='Adegun Temiloluwa.html'
            }else if(matricNo == 2023010465){
                window.location.href='Adediji Victor.html'
            }else if (matricNo == 2023008028){
                window.location.href = 'Adedokun Elijah Adewale.html'
            }else if (matricNo == 2023007271){
                window.location.href='AdelakunGrace.html'
            }else if (matricNo == 2023002524){
                window.location.href='Adekunjo Emmanuel Ayomide.html'
            }else if (matricNo == 2023004947){
                window.location.href='ADELEYE, Oluwaferanmi.html'
            }else if (matricNo == 2023010703){
                window.location.href='Adebowale Victor Oladayo.html'
            }else if (matricNo == 2023002857){
                window.location.href='Adebisi ishaq Ayomide.html'
            }else if (matricNo == 2023006202){
                window.location.href='Adelusi Desmond.html'
            }else if (matricNo == 2023008891){
                window.location.href = 'Adekoya Anjolaoluwa.html'
            }else if (matricNo == 2023005814){
                window.location.href='Adekunle Abdulhameed.html'
            }
        }
    }
}
document.getElementById('eyeiconspan').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    
    // Toggle the type attribute
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    
    // Toggle the eye icon
    eyeIcon.classList.toggle('fa-eye');
    eyeIcon.classList.toggle('fa-eye-slash');
});

//Reset Script.js
function resetCode() {
    let email = document.getElementById('email').value
    let emailError = document.getElementById('emailError');
    let emailPattern = /@student.lautech.edu.ng^/;
   if(email ===''){
    emailError.style.display='block'
    emailError.innerHTML='The email field is required.'
   }else if (!emailPattern.test(email)){
    emailError.innerHTML= 'It must be a valid email address ending with @student.lautech.edu.ng'
   }else{
    console.error("Go abck to school");
    emailError.style.display='none'
   }
}





//Homepage Scripts


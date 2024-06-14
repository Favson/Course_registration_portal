function login(){
    button.innerText=`Processing...` 
    setTimeout(() => {
        button.innerHTML="Login"
    }, 2000);
    let studentMatric =[2023008625, 2023007271, 2023006202, 2023007238,]
    let password = document.getElementById('password')
    let matricNo = document.getElementById('matricNo').value
    let matricPass1 = document.getElementById('matricPass1')
    let matricPass = document.getElementById('matricPass')
    let matricPass2 = document.getElementById('matricPass2')
    let matricPattern = /^2023/;
    if (password.value ==="" || matricNo ==="" || matricNo.length > 10 || matricNo.length < 10 || password.value > 14){
        matricPass.style.display='block';
        matricPass2.style.display='block';
        matricPass1.style.display='none'
        password.value=''
    }else if (!matricPattern.test(matricNo) || studentMatric){
        password.innerHTML=" "
        matricPass1.style.display='block'
        matricPass.style.display='none';
        matricPass2.style.display='none';
    } else{
        matricPass.style.display='none';
        matricPass2.style.display='none';
        matricPass1.style.display='none'
        console.log("You're in danger")

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

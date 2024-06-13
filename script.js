function login(){
    button.innerText=`Processing...` 
    setTimeout(() => {
        button.innerHTML="Login"
    }, 2000);
    let password = document.getElementById('password').value
    let matricNo = document.getElementById('matricNo').value
    let matricPass1 = document.getElementById('matricPass1')
    let matricPass = document.getElementById('matricPass')
    let matricPass2 = document.getElementById('matricPass2')
    let matricPattern = /^2023/;
    if (password ==="" || matricNo ==="" || matricNo.length > 10 || matricNo.length < 10 || password > 14){
        matricPass.style.display='block';
        matricPass2.style.display='block';
        matricPass1.style.display='none'
    }else if (!matricPattern.test(matricNo)){
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
function submit() {
    let email = document.getElementById('email').value
    let emailError = document.getElementById('emailError');
    let emailPattern = /@student.lautech.edu.ng/;
   if(email ===''){
    emailError.style.display='block'
    console.log('error');
   }else{
    console.error("Go abck to school");
   }
}
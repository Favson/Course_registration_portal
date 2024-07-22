let retrievedData = JSON.parse(localStorage.getItem("data")) || [];
console.log(retrievedData);
//login buttom
function login(){
    button.innerText="Processing...";
    setTimeout(() => {
        button.innerHTML="Login"
    }, 1000);
    let password = document.getElementById('password').value
    let matricNo = document.getElementById('matricNo').value
    let matricPass1 = document.getElementById('matricPass1')
    let matricPass = document.getElementById('matricPass')
    let matricPass2 = document.getElementById('matricPass2')
    let matricPattern = /^2023/;

    if (password.value ==="" || matricNo ===""){
        matricPass.style.display='block';
        matricPass2.style.display='block';
        matricPass1.style.display='none'
        document.getElementById('password').value=""
    }else if (!matricPattern.test(matricNo) && !studentMatric && matricNo.length > 10 && matricNo.length < 10 && password.value > 11 && password != PassPhrase){
        document.getElementById('password').value=""
        matricPass1.style.display='block'
        matricPass.style.display='none';
        matricPass2.style.display='none';
    }
    else{
        document.getElementById('loading').style.display="block"
        setTimeout(() => {
            document.getElementById('loading').style.display='none'
        }, 2000);
        matricPass.style.display='none';
        matricPass2.style.display='none';
        matricPass1.style.display='none'
        if(matricNo == `${retrievedData[0].matric}` && password == `${retrievedData[0].password}`){
            window.location.href = 'home.html'
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
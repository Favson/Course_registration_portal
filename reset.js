function resetCode() {
    let email = document.getElementById('email').value
    let emailError = document.getElementById('emailError');
    let emailPattern = /@student.lautech.edu.ng^/;
   if(email ===''){
    emailError.style.display='block'
    console.log('error');
   }else if (!emailPattern.test(email)){
    emailError.innerHTML= 'It must be a valid email address ending with @student.lautech.edu.ng'
   }else{
    console.error("Go abck to school");
   }
}


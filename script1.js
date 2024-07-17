//TimeShow
function updateGMTTime() {
    const timeDateInNigeria = new Date().toLocaleString('en-NG', {timeZone: 'Africa/Lagos'});  
    dateTimeDisplay.innerHTML=(timeDateInNigeria);
}
setInterval(updateGMTTime, 1000);

let matricArray = [];

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

    if (matricNo == "" || password == ""){
        matricPass.style.display='block';
        matricPass2.style.display='block';
        matricPass1.style.display='none'
        // document.getElementById('password').value=""
    }else if (matricNo == matricNo){
        
    }


}
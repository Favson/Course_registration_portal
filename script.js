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
        matricPass2.style.display='block' ;
    }else if (!matricPattern.test(matricNo)){
        matricPass1.style.display='block'
    } else{
        matricPass.style.display='none';
        matricPass2.style.display='none';
        matricPass1.style.display='none'
        console.log("You're in danger")

    }
}
let passwordfield= document.getElementById('password').value
function eyeicon(){
    document.getElementById('eyeiconspan').innerHTML=`<i class="fa-solid fa-eye-slash pt-4" onclick='eyeicon2()'></i>`
    const type = pass
    // document.getElementById('eyeiconspan').innerHTML=''
}

function eyeicon2(){
    document.getElementById('eyeiconspan').innerHTML=`<i class="fa-solid fa-eye pt-4" onclick="eyeicon()"></i>`
}


function login(){
    let password = document.getElementById('password').value
    let matricNo = document.getElementById('matricNo').value
    let matricPass = document.getElementById('matricPass')
    let matricPass2 = document.getElementById('matricPass2')
    let matricPattern = /^2023/;
    if (password ==="" || matricNo ==="" || matricNo.length > 10 || matricNo.length < 10 || password > 14){
        matricPass.style.display='block';
        matricPass2.style.display='block' ;
    }else if (!matricPattern.test(matricNo)){
        matricPass.innerHTML=``
    } else{
        console.log("You're in danger")
    }
}
function eyeicon(){
    document.getElementById('eyeiconspan').innerHTML=`<i class="fa-solid fa-eye-slash pt-4" onclick='eyeicon2()'></i>`
    // document.getElementById('eyeiconspan').innerHTML=''
}

function eyeicon2(){
    document.getElementById('eyeiconspan').innerHTML=`<i class="fa-solid fa-eye pt-4" id="eyeicon"></i>`
}
eyeicon()

let eyeicon = document.getElementById('eyeicon')
// const button = document.getElementById('button')

function login(){
    let password = document.getElementById('password').value
    let matricNo = document.getElementById('matricNo').value
    let matricPass = document.getElementById('matricPass')
    let matricPass2 = document.getElementById('matricPass2')
    if (password ==="" || matricNo ==="" || matricNo.length > 10 || matricNo.length < 10){
        matricPass.style.display='block';
        matricPass2.style.display='block' ;
    }else{
        console.log("You're in danger")
    }
}
eyeicon.addEventListener('click', (e)=>{
    document.getElementById('eyeiconspan').innerHTML=`<i class="fa-solid fa-eye-slash pt-4" onclick='eyeicon2'></i>`
    
})

// let eyeicon2 =document.getElementById('eyeicon2')
// function eyeicon2(){
//     document.getElementById('eyeiconspan').innerHTML=`<i class="fa-solid fa-eye pt-4" id="eyeicon"></i>`
// }



// button.addEventListener('click', (e)=>{
//     if (password ==="" || matricNo ===""){
//         alert("This spaces can't be empty")
//     }
// })

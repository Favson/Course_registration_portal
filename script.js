let eyeicon = document.getElementById('eyeicon')
const button = document.getElementById('button')
eyeicon.addEventListener('click', (e)=>{
    document.getElementById('eyeiconspan').innerHTML=`<i class="fa-solid fa-eye-slash pt-4" onclick='eyeicon2'></i>`
    
})

// let eyeicon2 =document.getElementById('eyeicon2')
function eyeicon2(){
    document.getElementById('eyeiconspan').innerHTML=`<i class="fa-solid fa-eye pt-4" id="eyeicon"></i>`
}



button.addEventListener('click', (e)=>{
    if (password || matricNo ==""){
        
    }
})
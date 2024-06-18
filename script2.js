if (matricNo.value == 2023008625) {
    document.getElementById('studentName1').innerHTML='ADEBISI FAVOUR MOMOLUWA';
    //studentMatricNo.innerHTML = matricNo
    
    //console.log("I Am djn");
}

const studentData = {
    "2023007271": "AFOLABI JOSEPH ENIOLA",
    "2023008625": "ADEBISI FAVOUR MOMOOLUWA",
    // add more matric numbers and names here
  };
  
  //...
  
  if (studentData[matricNo]) {
    studentName1.innerHTML = studentData[matricNo];
    studentMatricNo.innerHTML = matricNo
    console.log("I Am djn");
}


let slideOut = document.getElementById('slideOut')
function arrowDiv() {
    if(window.innerWidth <= 768){
        let nameDIv = document.getElementById('nameDIv')
        slideOut.style.display = slideOut.style.display === 'block' ? 'none' : 'block';
    }
}

function nameDiv(){
    if (window.innerWidth <= 768) {
        slideOut.style.display = 'none';
    }
}
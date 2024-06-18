
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
function updateGMTTime() {
    const timeDateInNigeria = new Date().toLocaleString('en-NG', {timeZone: 'Africa/Lagos'});  
    dateTimeDisplay.innerHTML=(timeDateInNigeria);
}
setInterval(updateGMTTime, 1000);
let retrievedData = JSON.parse(localStorage.getItem("data")) || [];
console.log(retrievedData);

if (retrievedData.length > 0) {
    document.getElementById('studentName1').innerText = `${retrievedData[0].fullName}`;
    document.getElementById('faculty').innerText = `${retrievedData[0].faculty}`;
    document.getElementById('locate').innerText = `${retrievedData[0].locate}`;
    document.getElementById('semester').innerText = `${retrievedData[0].semesterTyp}`;
    document.getElementById('studentName').innerText = `${retrievedData[0].fullName}`;
    document.getElementById('dept').innerText = `${retrievedData[0].dept}`;
    document.getElementById('faculty1').innerText = `${retrievedData[0].faculty}`;
    document.getElementById('studentEmail').innerText = `${retrievedData[0].email}`;
    document.getElementById('phoneNumber1').innerText = `${retrievedData[0].phoneNumber}`;
    document.getElementById('matricNo').innerText = `${retrievedData[0].matric}`;
    document.getElementById('abb').innerText = `${retrievedData[0].deptAbbr}`;
}

const image = localStorage.getItem('image');
if (image) {
    document.getElementById('storedImage').src = image;
}

const image1 = localStorage.getItem('image');
if (image1) {
    document.getElementById('storedImage1').src = image1;
}
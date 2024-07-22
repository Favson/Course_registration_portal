let database = [];

document.getElementById('fileInput').addEventListener('change', function() {
    const file = this.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const base64String = event.target.result;
        localStorage.setItem('image', base64String);
        console.log('Image saved in localStorage');
    };

    reader.readAsDataURL(file);
});

function submit() {
    let fullNameInpt = document.getElementById('fullNameInpt').value;
    let emailInpt = document.getElementById('emailInpt').value;
    let phoneNumberinpt = document.getElementById('phoneNumberinpt').value;
    let matricInpt = document.getElementById('matricInpt').value;
    let levelInpt = document.getElementById('levelInpt').value;
    let deptInpt = document.getElementById('deptInpt').value;
    let passwordInpt = document.getElementById('passwordInpt').value;
    let facultyInpt = document.getElementById('facultyInpt').value
    let deptAbbInpt = document.getElementById('deptAbbInpt').value
    let semesterInpt = document.getElementById('semesterInpt').value
    let location = document.getElementById('location').value

    if (matricInpt === "" || fullNameInpt === "" || emailInpt === "" || phoneNumberinpt === "" || levelInpt === "" || deptInpt === "" || passwordInpt === "" || facultyInpt == '' || deptAbbInpt == "" || semesterInpt =="") {
        alert('Fill in all fields');
        console.error('Error: One or more fields are empty');
    }else if (matricInpt.length <10 && matricInpt.length > 10 && phoneNumberinpt > 11 && phoneNumberinpt < 11 && levelInpt > 4 ){
        alert('Fill up the spaces correctly')
    } 
    else {
        document.getElementById('fileInput').addEventListener('change', function() {
            const file = this.files[0];
            const reader = new FileReader();
    
            reader.onload = function(event) {
                const base64String = event.target.result;
                localStorage.setItem('image', base64String);
                console.log('Image saved in localStorage');
            };
    
            reader.readAsDataURL(file);
        });
        database.push({
            fullName: fullNameInpt,
            email: emailInpt,
            phoneNumber: phoneNumberinpt,
            matric: matricInpt,
            level: levelInpt,
            dept: deptInpt,
            password: passwordInpt,
            faculty: facultyInpt,
            deptAbbr: deptAbbInpt,
            semesterTyp: semesterInpt,
            locate: location,
        }); 
        console.log('Form data:', database);
        window.location.href='login.html'
        localStorage.setItem("data", JSON.stringify(database));
    }
    // Clear the form fields
    document.getElementById('fullNameInpt').value = ""
    document.getElementById('emailInpt').value =""
    document.getElementById('phoneNumberinpt').value =""
    document.getElementById('matricInpt').value =""
    document.getElementById('levelInpt').value =""
    document.getElementById('deptInpt').value =""
    document.getElementById('passwordInpt').value =""

}

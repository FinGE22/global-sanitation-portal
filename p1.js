 
const reportForm = document.getElementById('reportForm');
const successMessage = document.getElementById('successMessage');

reportForm.addEventListener('submit', function(e) {
    e.preventDefault();
     
    reportForm.reset();
    successMessage.style.display = 'block';
});

 
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
     
    alert('Login functionality is not implemented.');
});

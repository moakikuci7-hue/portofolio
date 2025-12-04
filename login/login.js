const CORRECT_USERNAME = "fauzan";
const CORRECT_PASSWORD = "123";

function handleLogin() {
    
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const staySignedInCheckbox = document.getElementById('staySignedIn');

    const enteredUsername = emailInput.value;
    const enteredPassword = passwordInput.value;
    const isStaySignedInChecked = staySignedInCheckbox.checked;

   
    if (enteredUsername === CORRECT_USERNAME && enteredPassword === CORRECT_PASSWORD) {
        alert("✅ Login Berhasil! Selamat datang, " + enteredUsername + ".");

        
        if (isStaySignedInChecked) {
            console.log("Pengguna ingin tetap login.");
           
        }

        
        passwordInput.value = "";
        emailInput.value = "";
    } else {
        alert("❌ Login Gagal! Username atau password salah. Silakan coba lagi.");

        
        passwordInput.value = "";
        passwordInput.focus();
    }
}


window.onload = function() {
    document.getElementById('emailInput').value = CORRECT_USERNAME;
    document.getElementById('passwordInput').value = CORRECT_PASSWORD;
    
};
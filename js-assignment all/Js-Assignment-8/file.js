// ///////// loader start /////////
let loader = document.getElementById("loader");
let loginForm = document.getElementById("loginForm");

window.addEventListener("load", () => {
  loader.style.display = "flex";
  loginForm.style.display = "none";
  setTimeout(() => {
    loader.style.display = "none";
    loginForm.style.display = "flex";
  }, 2000);
});
// ////////// loader end

// ////// login form start ///////
document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault();
  clearErrors();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  let valid = true;

  // Name 
  if (name === '') {
    showError('name', 'Name zaroori hai.');
    valid = false;
  } else if (name.length < 2) {
    showError('name', 'Name kam se kam 2 letters ka hona chahiye.');
    valid = false;
  }

  // Email
  if (email === '') {
    showError('email', 'Email zaroori hai.');
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError('email', 'Valid email daaliye.');
    valid = false;
  }

  // Password
  if (password === '') {
    showError('password', 'Password zaroori hai.');
    valid = false;
  } else if (!/^\d{6}$/.test(password)) {
    showError('password', 'Password 6 digits ka hona chahiye.');
    valid = false;
  }

  if (valid) {
    window.location.href = `recipe.html?name=${encodeURIComponent(name)}`;
  } else {
    const firstError = document.querySelector('.input-error');
    if (firstError) firstError.focus();
  }
});

function showError(fieldId, message) {
  document.getElementById(fieldId + 'Err').textContent = message;
  document.getElementById(fieldId).classList.add('input-error');
}

function clearErrors() {
  ['name','email','password'].forEach(id => {
    document.getElementById(id + 'Err').textContent = '';
    document.getElementById(id).classList.remove('input-error');
  });
}

// ///// login form end /////
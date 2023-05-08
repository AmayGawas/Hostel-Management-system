const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', e => {
  e.preventDefault();

  const emailValue = usernameInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if(emailValue === '') {
    showError(emailInput, 'Email is required');
  } else {
    showSuccess(emailInput);
  }

 

  // Submit form if there are no errors
  if(!document.querySelector('.error')) {
    form.submit();
  }
});

function showError(input, message) {
  // Remove any existing error message
  hideError(input);

  // Create error message
  const error = document.createElement('div');
  error.className = 'error';
  error.textContent = message;

  // Add error message after input element
  input.parentNode.insertBefore(error, input.nextSibling);

  // Add red border to input element
  input.classList.add('error-border');
}

function showSuccess(input) {
  // Remove any existing error message
  hideError(input);

  // Remove red border from input element
  input.classList.remove('error-border');
}

function hideError(input) {
  // Remove any existing error message
  const error = input.nextElementSibling;
  if(error && error.classList.contains('error')) {
    error.remove();
  }
}

function login() {
    // Get user input from login form
    const email = document.getElementById("email").value;
    const OTP=document.getElementById("OPT").value;
    
  
    // Validate user input
    if (email === "" ) {
      alert("Please enter your email .");
      return false;
    }
    if (OTP === "" ) {
      alert("Please enter OTP .");
      return false;
    }
  
    // Send login request to server
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Redirect to user dashboard on successful login
        window.location.href = "/Index";
      } else {
        alert("Incorrect email or password.");
      }
    })
    .catch(error => console.error(error));
  }
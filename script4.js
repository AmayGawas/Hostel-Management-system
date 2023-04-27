const vacantRoomsElement = document.getElementById('Roomdetails');
const newApplicationsElement = document.getElementById('Notices');
const pendingComplaintsElement = document.getElementById('Complaints');

// Function to update the numbers on the cards
function updateNumbers() {
  // Get the number of vacant rooms, new applications, and pending complaints from the server
  const Roomdetails = 101; // Example number, replace with actual value from server
  const Notices = 5; // Example number, replace with actual value from server
  const Complaints = 2; // Example number, replace with actual value from server
  
  // Update the numbers on the cards
  vacantRoomsElement.textContent = Roomdetails;
  newApplicationsElement.textContent = Notices;
  pendingComplaintsElement.textContent = Complaints;
}

// Call the function initially to set the numbers on page load
updateNumbers();
//replace the example numbers with the actual values that you fetch from the server. You can use AJAX or fetch to retrieve the values from the server asynchronously.


// Function to log out the user
function logOut() {
    // Perform any necessary actions to log out the user, such as deleting the session or clearing local storage
    // Redirect the user to the login page
    window.location.href = "studentlogin.html"; // Replace with the actual URL of the login page
  }
  
  // Add an event listener to the logout button
  const logoutBtn = document.getElementById('logout-btn');
  logoutBtn.addEventListener('click', logOut);
const vacantRoomsElement = document.getElementById('vacant-rooms');
const newApplicationsElement = document.getElementById('new-applications');
const pendingComplaintsElement = document.getElementById('pending-complaints');

// Function to update the numbers on the cards
function updateNumbers() {

  fetch('http://127.0.0.1:8080/api/warden/getVacancyBYWardenMail/john.doe@example.com', {
      method: "get", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer",
    }).then(response => {
      if (response.ok) {
        if (response.ok) {
          return response.json();
        }
      } else {
        // Display error message
        console.log("Error occured")
      }
    }).then((responseJson) => {
      dummyData = responseJson;
      const vacantRooms=dummyData[0].vacancy;
      vacantRoomsElement.textContent = vacantRooms;
    })
      .catch(error => {
        console.log("Error occured ", error)
      });
  

      fetch('http://127.0.0.1:8080/api/warden/getNewApplicationCount/john.doe@example.com', {
        method: "get", // *GET, POST, PUT, DELETE, etc.
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer",
      }).then(response => {
        if (response.ok) {
          if (response.ok) {
            return response.json();
          }
        } else {
          // Display error message
          console.log("Error occured")
        }
      }).then((responseJson) => {
        dummyData = responseJson;
        const newApplications=dummyData.applicationCount;
        newApplicationsElement.textContent = newApplications;
      })
        .catch(error => {
          console.log("Error occured ", error)
        });



 // const newApplications = 5; // Example number, replace with actual value from server
  const pendingComplaints = 2; // Example number, replace with actual value from server
  
  // Update the numbers on the cards
  
 // newApplicationsElement.textContent = newApplications;
  pendingComplaintsElement.textContent = pendingComplaints;
}

// Call the function initially to set the numbers on page load
updateNumbers();
//replace the example numbers with the actual values that you fetch from the server. You can use AJAX or fetch to retrieve the values from the server asynchronously.


// Function to log out the user
function logOut() {
    // Perform any necessary actions to log out the user, such as deleting the session or clearing local storage
    // Redirect the user to the login page
    window.location.href = "Index1.html"; // Replace with the actual URL of the login page
  }
  
  // Add an event listener to the logout button
  const logoutBtn = document.getElementById('logout-btn');
  logoutBtn.addEventListener('click', logOut);




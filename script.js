function submitForm(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the form data
    var form = document.getElementById('entrance-form');
    var formData = new FormData(form);
  
    // Store the form data (replace with your desired logic)
    // Here, we log the form data to the console
    for (var pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }
  
    // Redirect to another page
    window.location.href = "Additional details/indexad.html";
  }
  

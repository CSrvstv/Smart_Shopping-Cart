document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  // Get form data
  var name = document.getElementById('name').value;
  var number = document.getElementById('number').value;
  var allergies = document.getElementById('allergies').value
  
  // Create an object to hold the form data
  var formData = {
    name: name,
    number: number,
    allergies:allergies
  };
  
  // Retrieve existing data from local storage
  var existingData = JSON.parse(localStorage.getItem('formData')) || [];
  
  // Add new form data to the existing array
  existingData.push(formData);
  
  // Convert the array to a JSON string and store it in local storage
  localStorage.setItem('formData', JSON.stringify(existingData));
  
  // Optionally, you can provide feedback to the user
  // alert('Form data submitted successfully!');
  
  // Clear the form fields after submission
  document.getElementById('myForm').reset();
  document.getElementById('exportButton').addEventListener('click', function() {
    exportData();
  });
  function exportData() {
    // Retrieve existing data from local storage
    var existingData = JSON.parse(localStorage.getItem('formData')) || [];
    
    // Create a CSV string with form data
    var csvContent = "Name,Number,Allergies\n";
    existingData.forEach(function(formData) {
      csvContent += formData.name + "," + formData.number + "," + formData.allergies + "\n";
    });
    
    // Create a Blob object containing the CSV data
    var blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    
    // Create a temporary anchor element to download the file
    var a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = 'formData.csv';
    
    // Append the anchor element to the body and trigger a click event to initiate the download
    document.body.appendChild(a);
    a.click();
    
    // Optionally, you can provide feedback to the user
    alert('Form data exported as CSV file!');
  }
})
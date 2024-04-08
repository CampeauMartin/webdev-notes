// Load stored values from local storage when the page loads
window.onload = function() {
    var storedValues = JSON.parse(localStorage.getItem('submittedValues')) || [];
    storedValues.forEach(function(value) {
      displaySubmittedValue(value);
    });
  };
  
  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page
  
    // Retrieve the value entered in the text field
    var inputValue = document.getElementById('textField').value;
    
    // Clear the text field
    document.getElementById('textField').value = "";
  
    // Store the submitted value in local storage
    var storedValues = JSON.parse(localStorage.getItem('submittedValues')) || [];
    storedValues.push(inputValue);
    localStorage.setItem('submittedValues', JSON.stringify(storedValues));
  
    // Display the submitted value
    displaySubmittedValue(inputValue);
  });
  
  function displaySubmittedValue(value) {
    // Create a new <p> element
    var paragraph = document.createElement('p');
    // Set the text content of the <p> element
    paragraph.textContent = value;
    // Append the <p> element to the display container
    document.getElementById('displayContainer').appendChild(paragraph);
  }

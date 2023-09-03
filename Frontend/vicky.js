// Get the modal and button elements
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
openModalBtn.addEventListener("click", function() {
  modal.style.display = "block";
});

// When the user clicks the close button, close the modal
closeModalBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// When the user clicks anywhere outside the modal, close it
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Handle form submission
const giftForm = document.getElementById("giftForm");

giftForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Retrieve form values
  const relation = document.getElementById("relation").value;
  const age = document.getElementById("age").value;
  const budget = document.getElementById("budget").value;
  //const giftType = document.getElementById("giftType").value;
  const occasion = document.getElementById("occasion").value;

  // You can use these values to make recommendations or perform any desired actions
  // For now, we'll display an alert with the form data
  alert(`Gift Recommendation Form Data:\nRelation: ${relation}\nAge: ${age}\nBudget: ${budget}\nOccasion: ${occasion}`);

  // Close the modal
  modal.style.display = "none";
});

// Get a reference to the button element
    var button = document.getElementById('newPage');
    
    // Add a click event listener to the button
    button.addEventListener('click', function() {
        // Define the URL of the HTML page you want to open
        var pageURL = ('file:///C:/Users/91735/Desktop/giftRecommendation.html');
        
        // Open the HTML page in a new tab/window
        window.open(pageURL, '_blank');
             
    });

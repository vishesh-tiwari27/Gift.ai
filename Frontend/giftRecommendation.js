document.addEventListener('DOMContentLoaded', function () {
    const displayedDetails = document.getElementById('displayedDetails');

    // Get the data from the query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const dataParam = urlParams.get('data');
    
    if (dataParam) {
        const data = JSON.parse(dataParam);

        // Display the data on the page
        displayedDetails.textContent = `Details: ${data}`;
    }
});

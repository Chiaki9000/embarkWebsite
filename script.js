// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Add event listener for each "More Info" button
    document.querySelectorAll('.overlay-button').forEach(button => {
        button.addEventListener('click', function () {
            // Get the ID of the corresponding overlay from the button's ID
            var overlayId = this.id.replace('-overlay-btn', '-overlay');
            // Toggle the display of the corresponding overlay
            var overlay = document.getElementById(overlayId);
            overlay.style.display = 'block'; // Show the corresponding overlay
        });
    });

    // Add event listener for clicking on an overlay to hide it
    document.querySelectorAll('.overlay').forEach(overlay => {
        overlay.addEventListener('click', function () {
            this.style.display = 'none'; // Hide the overlay when clicked
        });
    });
});

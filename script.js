// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Add event listener for each "More Info" button
    document.querySelectorAll('.overlay-button').forEach(button => {
        button.addEventListener('click', function () {
            // Get the ID of the corresponding overlay from the button's ID
            var overlayId = this.id.replace('overlay-btn', 'overlay');
            // Toggle the display of the corresponding overlay
            var overlay = document.getElementById(overlayId);
            overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
        });
    });
});

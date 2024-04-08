document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.overlay-button').forEach(button => {
        button.addEventListener('click', function () {
            var overlayId = this.id.replace('-overlay-btn', '-overlay');
            var overlay = document.getElementById(overlayId);
            overlay.style.display = 'block';
        });
    });

    document.querySelectorAll('.overlay').forEach(overlay => {
        overlay.addEventListener('click', function () {
            this.style.display = 'none';
        });
    });
});
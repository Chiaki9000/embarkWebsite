document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.overlay-button').forEach(button => {
        button.addEventListener('click', function () {
            var overlayId = this.id.replace('-overlay-btn', '-overlay');
            var overlay = document.getElementById(overlayId);
            overlay.style.display = 'block';
        });
    });

    document.querySelectorAll('.overlay').forEach(overlay => {
        overlay.addEventListener('click', function (e) {
            if (!e.target.closest('.overlay-content')) {
                this.style.display = 'none';
            }
        });
    });

    document.addEventListener('keydown', function (e) {
        if (document.activeElement.classList.contains('backbutton') && e.key === 'Enter') {
            document.activeElement.closest('.overlay').style.display = 'none';
        }
    });
});
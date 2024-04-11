// Add an event listener to each image
document.getElementById('image-container').addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG') {
        // Create modal
        var modal = document.createElement('div');
        modal.className = 'modal';

        // Create modal content
        var modalContent = document.createElement('div');
        modalContent.className = 'modal-content';

        // Create title
        var title = document.createElement('h2');
        title.textContent = e.target.dataset.title;
        modalContent.appendChild(title);

        // Create description
        var description = document.createElement('p');
        description.textContent = e.target.dataset.description;
        modalContent.appendChild(description);

        // Add modal content to modal
        modal.appendChild(modalContent);

        // Add modal to body
        document.body.appendChild(modal);

        // Add 'show' class to modal after a short delay
        setTimeout(function() {
            modal.classList.add('show');
        }, 10);

        // Add an event listener to the modal
        modal.addEventListener('click', function(event) {
            // Check if the click was outside the modal content
            if (event.target === modal) {
                // Remove the modal from the body
                document.body.removeChild(modal);
            }
        });
    }
});
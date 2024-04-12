// Add an event listener to each image
document.body.addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG') {
        // Create modal
        var modal = document.createElement('div');
        modal.className = 'modal';

        // Create modal content
        var modalContent = document.createElement('div');
        modalContent.className = 'modal-content';

        // Create text container
        var textContainer = document.createElement('div');
        textContainer.className = 'text-container';
        modalContent.appendChild(textContainer);

        // Create title
        var title = document.createElement('h2');
        title.textContent = e.target.dataset.title;
        textContainer.appendChild(title);

        // Create authors subtitle
        var authors = document.createElement('h3');
        authors.textContent =  e.target.dataset.authors;
        textContainer.appendChild(authors);

        // Create date subtitle
        var date = document.createElement('h3');
        date.textContent = e.target.dataset.date;
        textContainer.appendChild(date);

        // Create description
        var description = document.createElement('p');
        description.textContent = e.target.dataset.description;
        textContainer.appendChild(description);

        // Create image container
        var imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';
        modalContent.appendChild(imageContainer);

        // Create image carousel
        var images = e.target.dataset.images.split(',');
        images.forEach(function(imageSrc) {
            var image = document.createElement('img');
            image.src = imageSrc;
            imageContainer.appendChild(image);
        });

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

var previousScrollTop = 0;
var scrollTimeout;

window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var windowHeight = window.innerHeight;
    var bodyHeight = document.body.clientHeight;

    // Check if the user has scrolled to the bottom of the page
    if (scrollTop + windowHeight >= bodyHeight) {
        // Clone the image container and append it to the body
        var imageContainer = document.getElementById('image-container');
        var clone = imageContainer.cloneNode(true);
        document.body.appendChild(clone);
    }

    // Get all images
    var images = document.querySelectorAll('.image');

    // Change perspective depending on scroll direction
    if (scrollTop > previousScrollTop) {
        // Scrolling down
        images.forEach(function(image) {
            image.style.transform = 'perspective(500px) rotateX(-2deg)';
        });
    } else {
        // Scrolling up
        images.forEach(function(image) {
            image.style.transform = 'perspective(500px) rotateX(2deg)';
        });
    }

    // Clear previous timeout if it exists
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }

    // Set a timeout to reset the perspective after 100ms of no scrolling
    scrollTimeout = setTimeout(function() {
        images.forEach(function(image) {
            image.style.transform = 'perspective(500px) rotateX(0deg)';
        });
    }, 100);

    // Update previous scroll position
    previousScrollTop = scrollTop;
});


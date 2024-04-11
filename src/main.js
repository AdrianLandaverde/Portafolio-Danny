var isScrolling;

window.addEventListener('scroll', function () {
    // Clear our timeout throughout the scroll
    window.clearTimeout(isScrolling);

    // Add the tilt class to all images
    document.querySelectorAll('.image').forEach(function (imgDiv) {
        imgDiv.classList.add('tilt');
    });

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function () {
        // Remove the tilt class from all images
        document.querySelectorAll('.image').forEach(function (imgDiv) {
            imgDiv.classList.remove('tilt');
        });
    }, 66);

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        fetchImages();
    }
});

function fetchImages() {
    // Array of image paths
    var images = [
        {
            path: 'images/image1.png',
            title: 'Title 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.'
        },
        {
            path: 'images/image2.png',
            title: 'Title 2',
            description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.'
        },
        {
            path: 'images/image3.png',
            title: 'Title 3',
            description: 'Praesent id libero id metus varius consectetur ac eget diam.'
        },

        {
            path: 'images/image1.png',
            title: 'Title 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.'
        },
        {
            path: 'images/image2.png',
            title: 'Title 2',
            description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.'
        },
        {
            path: 'images/image3.png',
            title: 'Title 3',
            description: 'Praesent id libero id metus varius consectetur ac eget diam.'
        },

        {
            path: 'images/image1.png',
            title: 'Title 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.'
        },
        {
            path: 'images/image2.png',
            title: 'Title 2',
            description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.'
        },
        {
            path: 'images/image3.png',
            title: 'Title 3',
            description: 'Praesent id libero id metus varius consectetur ac eget diam.'
        },

        
        // Add more images and corresponding titles and descriptions as needed
    ];

    images.forEach(image => {
        var imgDiv = document.createElement('div');
        imgDiv.className = 'image';
        imgDiv.style.backgroundImage = 'url(' + image.path + ')';
        document.getElementById('image-container').appendChild(imgDiv);

        // Add click event listener
        imgDiv.addEventListener('click', function() {
            // Create modal
            var modal = document.createElement('div');
            modal.className = 'modal';

            // Create modal content
            var modalContent = document.createElement('div');
            modalContent.className = 'modal-content';

            // Create title and description elements
            var title = document.createElement('h1');
            title.textContent = image.title;
            var description = document.createElement('p');
            description.textContent = image.description;

            // Add title and description to modal content
            modalContent.appendChild(title);
            modalContent.appendChild(description);

            // Add modal content to modal
            modal.appendChild(modalContent);

            // Add modal to body
            document.body.appendChild(modal);

            // Add click event listener to modal to close it
            modal.addEventListener('click', function() {
                document.body.removeChild(modal);
            });
        });
    });
}
// Call fetchImages once to load the initial set of images
fetchImages();
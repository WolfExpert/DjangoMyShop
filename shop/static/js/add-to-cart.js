// Find all the "add to cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart-button-small');

// Loop through each button and add a click event listener
addToCartButtons.forEach(button => {
    // Store the original HTML content of the button
    const originalButtonContent = button.innerHTML;

    button.addEventListener('click', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Change the button content to "Added"
        button.textContent = 'Added!';

        // Set a timeout to revert the button back to the original content after 2 seconds
        setTimeout(() => {
            button.innerHTML = originalButtonContent;
        }, 1000); // 2000 milliseconds = 2 seconds

        // You can also add additional functionality here such as adding the product to the cart
    });
});

        function submitForm(productId) {
            console.log('Before form submission');
            // Prevent the default form submission
            event.preventDefault();


// Update the form action based on the selected product ID
            document.getElementById('add-to-cart-form').action = `/cart/add/${productId}/`;

// Perform the form submission using JavaScript
            fetch(document.getElementById('add-to-cart-form').action, {
                method: 'POST',
                body: new FormData(document.getElementById('add-to-cart-form'))
            }).then(response => {
                console.log(`Form submitted successfully for product with ID ${productId}`);
                // Handle the response if needed
            }).catch(error => {
                console.error('Error submitting the form:', error);
                // Handle the error if needed
            });
            console.log('After form submission');
        }

function signIn() {
    // Get values from form fields
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmpassword').value;

    // Perform your sign-in logic here, for example:
    if (password === confirmPassword) {
        // Passwords match, proceed with sign-in
        console.log('Sign in successful!');
    } else {
        // Passwords do not match, display an error message or take appropriate action
        console.error('Passwords do not match');
    }
}
function searchTopics() {
    // Get the search input value
    var searchTerm = document.getElementById('Search').value.toLowerCase();

    // Get all buttons
    var buttons = document.querySelectorAll('button');

    // Loop through each button to check if it contains the search term
    buttons.forEach(function (button) {
        var buttonText = button.textContent.toLowerCase();

        // Show or hide the button based on whether it contains the search term
        if (buttonText.includes(searchTerm)) {
            button.style.display = 'inline-block';
        } else {
            button.style.display = 'none';
        }
    });
}
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        displayStatus("All fields are required.", "error");
        return;
    }

    // Simulate form submission
    displayStatus("Thank you for reaching out! We'll get back to you soon.", "success");

    // Clear form
    document.getElementById('contactForm').reset();
});

function displayStatus(message, status) {
    const statusDiv = document.getElementById('form-status');
    statusDiv.textContent = message;

    if (status === "success") {
        statusDiv.style.color = "green";
    } else {
        statusDiv.style.color = "red";
    }
}
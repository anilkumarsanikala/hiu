// Ensure the script is loaded after the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const clickMe = document.getElementById("click");
    
    // Check if the button is found
    if (clickMe) {
        clickMe.addEventListener("click", () => {
            // Redirect to the next page (make sure "next.html" is the correct file name)
            window.location.href = "next.html"; // Corrected file name
        });
    } else {
        console.error("Button with id 'click' not found.");
    }
});

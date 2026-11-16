
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("message").innerText =
        "Thank you " + name + "! Your message has been received.";

    this.reset();
});

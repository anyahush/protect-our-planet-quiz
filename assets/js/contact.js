

// Contact form
// Modified from W3 schools tutorial, full details in README.md
function closeModal() {
    var myModal2 = document.getElementById("myModal2");
    if (myModal2.style.display === "none") {
        myModal2.style.display = "block";
    } else {
        myModal2.style.display = "none";
        alert("Thank you for your enquiry. We will respond as soon as possible.");
    }
}
// End of W3 schools 



function sendMail(contactForm) {
    emailjs.send("service_a66lyia", "quiz", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("ERROR", error);
        }
    );
    return false;
}
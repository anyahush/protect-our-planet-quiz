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
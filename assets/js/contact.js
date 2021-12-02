const contactForm = document.getElementById("contact-form");
const myModal2 = document.getElementById("myModal2");
const sendButton = document.getElementById("send-btn");

contactForm.addEventListener('submit', sendForm)

function sendForm(event) {
    event.preventDefault();

    return sendMail(contactForm);

    function sendMail(contactForm) {
        emailjs.send("service_a66lyia", "quiz", {
                "from_name": contactForm.name.value,
                "from_email": contactForm.emailaddress.value,
                "message": contactForm.message.value
            })
            .then(
                function (response) {
                    console.log("SUCCESS", response);
                },
                function (error) {
                    console.log("ERROR", error);
                }
            );

        if (myModal2.style.display === "none") {
            myModal2.style.display = "block";
        } else {
            myModal2.style.display = "none";
            alert("Thank you for your enquiry. We will respond as soon as possible.");
        }

    }

}
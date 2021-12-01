// // End of W3 schools 


const contactForm = document.getElementById("contact-form");
const myModal2 = document.getElementById("myModal2");
const sendButton = document.getElementById("send-btn");

contactForm.addEventListener('submit', sendForm);
sendButton.addEventListener("click", () => {
    myModal2.style.display = "none";
    alert("Thank you for your enquiry. We will respond as soon as possible.");
})

function sendForm(event) {
    event.preventDefault();

    return sendMail(this);

    function sendMail(contactForm) {
        emailjs.send("service_a66lyia", "quiz", {
                "from_name": contactForm.name.value,
                "from_email": contactForm.email.value,
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
    }

}



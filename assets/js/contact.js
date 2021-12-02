/*jshint esversion: 6 */

// Declared constant variables
const contactForm = document.getElementById("contact-form");
const myModal2 = document.getElementById("myModal2");

//Submit event listener for contact form
contactForm.addEventListener('submit', sendForm);

//Function that sends form and closes modal once sent
function sendForm(event) {
    event.preventDefault();

//SendMail function used from Code Institute Solutions. Full details in README
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

//Modal display modified from W3 Schools. Full details in README
        if (myModal2.style.display === "none") {
            myModal2.style.display = "block";
        } else {
            myModal2.style.display = "none";
            alert("Thank you for your enquiry. We will respond as soon as possible.");
        }
    }
}
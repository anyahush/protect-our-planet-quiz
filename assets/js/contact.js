
const contactForm = document.getElementById("contact-form");
const myModal2 = document.getElementById("myModal2");
const sendButton = document.getElementById("send-btn");

contactForm.submit(function(e) {
    e.preventDefault();
    validateForm(this);
});

function validateForm(contactForm) {
    let name = document.getElementById("name").value;
    let emailAddress = document.getElementById("email-address").value;
    let message = document.getElementById("message").value;
    let errorMessage = document.getElementsByClassName("error-message");

    var text;
    if(name.length < 5){
        text = "Please enter valid name";
        errorMessage.innerHTML = text;
        return false;
    }
    if(emailAddress.indexOf("@") == -1 || email.length < 6) {
        text = "Please enter valid email address";
        errorMessage.innerHTML = text;
        return false;
    }
    if(message.length <= 100) {
        text = "Please enter more than 100 characters";
        errorMessage.innerHTML = text;
        return false;
    }

    return sendMail(contactForm);
}


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





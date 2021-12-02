
const contactForm = document.getElementById("contact-form");
const myModal2 = document.getElementById("myModal2");
const sendButton = document.getElementById("send-btn");

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    validateForm();
});

function validateForm(contactForm) {
    let nameInput = document.getElementById("name").value;
    let emailInput = document.getElementById("emailaddress").value;
    let message = document.getElementById("message").value;
    let errorMessage = document.getElementsByClassName("error-message");

  
    if(nameInput.length < 5){
        errorMessage[0].innerHTML = "Please enter valid name";
        console.log(errorMessage);
        return false;
    }
    if(emailInput.indexOf("@") == -1) {
        errorMessage[1].innerHTML =  "Please enter valid email address";
        console.log(errorMessage);
        return false;
    }
    if(message.length <= 50) {
        errorMessage[2].innerHTML = "Please enter more than 50 characters";
        return false;
    }

    return sendMail(contactForm);
}


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
        myModal2.display.none;
        return false;
    }





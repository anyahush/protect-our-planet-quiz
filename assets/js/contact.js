
const contactForm = document.getElementById("contact-form");
const myModal2 = document.getElementById("myModal2");
const sendButton = document.getElementById("send-btn");

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    validateForm();
});

function validateForm(contactForm) {
    let name = document.getElementById("name").value;
    let emailAddress = document.getElementById("emailaddress").value;
    let message = document.getElementById("message").value;
    let errorMessage = document.getElementsByClassName("error-message");

  
    if(name.length < 5){
        errorMessage.innerHTML = "Please enter valid name";
        console.log(errorMessage);
        return false;
    }
    if(emailAddress.indexOf("@") == -1) {
        errorMessage.innerHTML =  "Please enter valid email address";
        console.log(errorMessage);
        return false;
    }
    if(message.length <= 100) {
        errorMessage.innerHTML = "Please enter more than 100 characters";
        console.log(errorMessage);
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
        myModal2.display.none;
        return false;
    }





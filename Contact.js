function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Here you can implement your own logic to handle the form submission, such as sending an email or saving the message to a database.

    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    alert("Your message has been sent. We will get back to you soon!");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }
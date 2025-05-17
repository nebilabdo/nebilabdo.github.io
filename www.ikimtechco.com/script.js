// Initialize EmailJS with your public key
emailjs.init("5eTZDQQOFLCjJJcFG");

// Function to validate the form
function validateForm(data) {
  const errors = {};
  if (!data.user_name) errors.user_name = "Name is required";
  if (!data.email) errors.email = "Email is required";
  if (!data.phone_number) errors.phone_number = "Mobile is required";
  if (!data.service) errors.service = "Service is required";
  if (!data.message) errors.message = "Message is required";
  return errors;
}

// Function to handle form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Validate form
    const errors = validateForm(data);
    if (Object.keys(errors).length > 0) {
      alert("Please fill out all fields.");
      return;
    }

    // Send email using EmailJS
    emailjs
      .sendForm("service_en4g6b5", "template_4ahymte", form, {
        publicKey: "5eTZDQQOFLCjJJcFG",
      })
      .then(
        () => {
          // Show success message
          document.getElementById("success-message").classList.remove("d-none");
          setTimeout(() => {
            document.getElementById("success-message").classList.add("d-none");
          }, 5000);
          form.reset();
        },
        (error) => {
          // Show failure message
          document.getElementById("failure-message").classList.remove("d-none");
          setTimeout(() => {
            document.getElementById("failure-message").classList.add("d-none");
          }, 5000);
          console.error("Failed to send email:", error);
        }
      );
  });

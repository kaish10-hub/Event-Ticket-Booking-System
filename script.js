// MOBILE MENU
const menuBtn =
document.querySelector(".menu-btn");

const navLinks =
document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// SHOW/HIDE DETAILS
const toggleButtons =
document.querySelectorAll(".toggle-btn");

toggleButtons.forEach(button => {

  button.addEventListener("click", () => {

    const details =
    button.previousElementSibling;

    if(details.style.display === "block"){

      details.style.display = "none";
      button.innerText = "Show Details";

    }
    else{

      details.style.display = "block";
      button.innerText = "Hide Details";

    }

  });

});


// BOOK NOW BUTTON
const bookButtons =
document.querySelectorAll(".book-btn");

const selectedEventInput =
document.getElementById("selectedEvent");

bookButtons.forEach(button => {

  button.addEventListener("click", () => {

    // Event name get karo
    const eventName =
    button.getAttribute("data-event");

    // Form me event fill karo
    selectedEventInput.value = eventName;

    // Booking section pe scroll karo
    document
      .getElementById("booking")
      .scrollIntoView({
        behavior:"smooth"
      });

  });

});


// FORM VALIDATION
const form =
document.getElementById("bookingForm");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  const name =
  document.getElementById("name").value;

  const email =
  document.getElementById("email").value;

  const event =
  document.getElementById("selectedEvent").value;

  const tickets =
  document.getElementById("tickets").value;

  if(
    name === "" ||
    email === "" ||
    event === "" ||
    tickets === ""
  ){

    alert("Please fill all fields!");
    return;

  }

  // Email validation
  if(!email.includes("@")){

    alert("Enter valid email!");
    return;

  }

  // Success Message
  alert(
    `🎉 Booking Confirmed!\n\n` +
    `Name: ${name}\n` +
    `Event: ${event}\n` +
    `Tickets: ${tickets}`
  );

  form.reset();

});
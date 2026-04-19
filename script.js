function scrollToProjects() {
    document.getElementById("home").scrollIntoView({
        behavior: "smooth"
    });
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
    document.getElementById("photography").scrollIntoView({
        behavior: "smooth"
    });
    document.getElementById("writing").scrollIntoView({
        behavior: "smooth"
    });
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}
const text = "Hey, Asad here. Welcome to my website.";
const typingElement = document.getElementById("typing-text");

let index = 0;

function type() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 50); // speed (lower = faster)
  }
}

type();
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");
document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".dropdown");
  const button = document.querySelector(".dropbtn");

  button.addEventListener("click", () => {
    dropdown.classList.toggle("active");
  });

dropdown.addEventListener("click", function () {
  this.classList.toggle("open");
});
});
toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
function sendEmail() {
  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  emailjs.send("service_4hvpjcp", "template_6jvjbkp", params)
    .then(() => {
      document.getElementById("status").innerText = "Message sent!";
    })
    .catch((err) => {
  console.log("EMAILJS ERROR:", err);
  document.getElementById("status").innerText = "Failed: check console";
})
}
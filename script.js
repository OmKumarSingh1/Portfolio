// Typed.js initialization with error handling
try {
  const typeData = new Typed(".role", {
    strings: [
      "Web Developer",
      "Problem Solver",
      "Software Engineer",
      "Coder",
      "Tech Enthusiast"
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
    startDelay: 300,
    smartBackspace: true,
    showCursor: true,
    cursorChar: '|'
  });
} catch (error) {
  console.error("Typed.js initialization error:", error);
  // Fallback if Typed.js fails
  document.querySelector(".role").textContent = "Web Developer";
}

// Form submission handler with improved validation
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Capture form data
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Enhanced validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;
    let errorMessage = "";

    if (!name) {
      isValid = false;
      errorMessage += "Please enter your name.\n";
      document.getElementById("name").classList.add("error");
    } else {
      document.getElementById("name").classList.remove("error");
    }

    if (!email || !emailRegex.test(email)) {
      isValid = false;
      errorMessage += "Please enter a valid email address.\n";
      document.getElementById("email").classList.add("error");
    } else {
      document.getElementById("email").classList.remove("error");
    }

    if (!message || message.length < 10) {
      isValid = false;
      errorMessage += "Please enter a message with at least 10 characters.\n";
      document.getElementById("message").classList.add("error");
    } else {
      document.getElementById("message").classList.remove("error");
    }

    if (isValid) {
      // In a real application, you would send the data to a server here
      console.log("Form submitted:", { name, email, message });
      
      // Show success message
      const successMessage = `Thank you, ${name}! Your message has been sent successfully. 
      We'll get back to you at ${email} soon.`;
      
      alert(successMessage);
      
      // Reset form
      contactForm.reset();
      
      // Focus on name field for better UX
      document.getElementById("name").focus();
    } else {
      // Show all validation errors at once
      alert("Please correct the following errors:\n\n" + errorMessage);
    }
  });
} else {
  console.warn("Contact form not found in the document");
}

// Add CSS for error states (could also be in your styles.css)
const style = document.createElement('style');
style.textContent = `
  .error {
    border-color: #ff4444 !important;
    background-color: #ffebee !important;
  }
`;
document.head.appendChild(style);

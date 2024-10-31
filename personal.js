// Smooth Scroll
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
  
  // Contact Form Submission
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! I'll get back to you soon.");
  });
  
  // Chat Widget Toggle
  function toggleChat() {
    const chatContent = document.getElementById("chat-content");
    chatContent.style.display = chatContent.style.display === "none" ? "block" : "none";
  }
  
  // Chat Send Message
  function sendMessage(event) {
    if (event.key === "Enter") {
      const chatMessages = document.getElementById("chat-messages");
      const chatInput = document.getElementById("chat-input");
      
      if (chatInput.value.trim() !== "") {
        const message = document.createElement("div");
        message.textContent = "You: " + chatInput.value;
        chatMessages.appendChild(message);
        chatInput.value = "";
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
    }
  }
  
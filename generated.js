// generated.js

const ticketData = JSON.parse(localStorage.getItem("ticketData"));

if (ticketData) {
  // Fill in user details
  document.getElementById("ticket-name").textContent = ticketData.fullname;
  document.getElementById("ticket-name1").textContent = ticketData.fullname;
  document.getElementById("ticket-email").textContent = ticketData.email;
  document.getElementById("ticket-github").textContent = ticketData.github;
  document.getElementById("profile-photo").src = ticketData.photo;

  // Generate and display a random ticket number
  const ticketNumber = "CC" + Math.floor(100000 + Math.random() * 900000);
  document.getElementById("ticket-number").textContent = ticketNumber;
} else {
  console.error("No ticket data found in localStorage.");
}

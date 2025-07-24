// script.js

function display() {
  const fullname = document.getElementById("name").value.trim();
  const email = document.getElementById("Email").value.trim();
  const github = document.getElementById("githubusername").value.trim();
  const pic = document.getElementById("dp");

  if (pic.files.length === 0) {
    alert("Please upload a photo.");
    return;
  }

  const file = pic.files[0];
  const reader = new FileReader();

  reader.onload = function () {
    const imageBase64 = reader.result;

    const ticketData = {
      fullname,
      email,
      github,
      photo: imageBase64,
    };

    localStorage.setItem("ticketData", JSON.stringify(ticketData));
    window.location.href = "generated.html";
  };

  reader.readAsDataURL(file);
}

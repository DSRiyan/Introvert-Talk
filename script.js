const form = document.getElementById("signupForm");
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const rulesPopup = document.getElementById("rulesPopup");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("fullname").value;
  const dob = document.getElementById("dob").value;
  const gender = document.getElementById("gender").value;

  // Save data to localStorage
  localStorage.setItem("name", name);
  localStorage.setItem("dob", dob);
  localStorage.setItem("gender", gender);

  // Populate popup
  document.getElementById("popupName").textContent = name;
  document.getElementById("popupDOB").textContent = dob;
  document.getElementById("popupGender").textContent = gender;

  popup.classList.add("active");
  overlay.classList.add("active");
});


// Close all popups when overlay is clicked
overlay.addEventListener("click", () => {
  popup.classList.remove("active");
  rulesPopup.classList.remove("active");
  overlay.classList.remove("active");
});



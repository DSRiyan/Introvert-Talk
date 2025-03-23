const form = document.getElementById("signupForm");
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const rulesPopup = document.getElementById("rulesPopup");
const clickSound = document.getElementById("clickSound");

const playSound = () => clickSound.play();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  playSound();

  const name = document.getElementById("fullname").value;
  const dob = document.getElementById("dob").value;
  const gender = document.getElementById("gender").value;
  const reason = document.getElementById("review").value;

  localStorage.setItem("name", name);
  localStorage.setItem("dob", dob);
  localStorage.setItem("gender", gender);
  localStorage.setItem("reason", reason);

  document.getElementById("popupName").textContent = name;
  document.getElementById("popupDOB").textContent = dob;
  document.getElementById("popupGender").textContent = gender;
  document.getElementById("popupReason").textContent = reason;

  popup.classList.add("active");
  overlay.style.display = "block";
});

document.getElementById("rulesBtn").addEventListener("click", () => {
  playSound();
  rulesPopup.classList.add("active");
});

function closeRulesPopup() {
  rulesPopup.classList.remove("active");
  playSound();
}

overlay.addEventListener("click", () => {
  popup.classList.remove("active");
  rulesPopup.classList.remove("active");
  overlay.style.display = "none";
});

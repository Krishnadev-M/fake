const searchBtn = document.getElementById("searchBtn");
const resultMessage = document.getElementById("resultMessage");
const modalOverlay = document.getElementById("modalOverlay");
const tandcCheckbox = document.getElementById("tandcCheckbox");
const agreeBtn = document.getElementById("agreeBtn");

searchBtn.addEventListener("click", () => {
  const input = document.getElementById("searchInput").value.trim();

  resultMessage.innerHTML = `
    🔍 No results found for "<strong>${
      input || "..."
    }"</strong>. Please check your spelling or try again.
    <br><br>
    ⚠️ Before continuing, you must accept our Terms & Conditions.
  `;

  setTimeout(() => {
    modalOverlay.style.display = "flex";
  }, 1000);
});

// Dodging checkbox label behavior
const label = document.getElementById("tandcLabel");
label.addEventListener("mouseover", () => {
  const randomX = Math.random() * 300 - 150;
  const randomY = Math.random() * 100 - 50;
  label.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

// Checkbox listener
tandcCheckbox.addEventListener("change", () => {
  if (tandcCheckbox.checked) {
    agreeBtn.disabled = false;
  } else {
    agreeBtn.disabled = true;
  }
});

// Agree button behavior
agreeBtn.addEventListener("click", () => {
  modalOverlay.style.display = "none";
  resultMessage.innerHTML = `
    ✅ Thank you. Your data has been sold.
    <br><br>
    🐶 Your dog's left paw will be collected shortly.
  `;
});

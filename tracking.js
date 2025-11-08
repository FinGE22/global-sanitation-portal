const steps = document.querySelectorAll(".status-step");
const nextBtn = document.getElementById("nextBtn");

let currentStep = 0;
updateSteps();

nextBtn.addEventListener("click", () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    updateSteps();
  } else {
    alert("✅ Your problem has been resolved. Thank you for your patience!");
  }
});

function updateSteps() {
  steps.forEach((step, index) => {
    if (index <= currentStep) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });

  if (currentStep === steps.length - 1) {
    nextBtn.textContent = "Completed ✅";
    nextBtn.disabled = true;
    nextBtn.style.background = "#777";
  }
}

let shiftToggle = document.getElementById("shiftToggle");
let shiftStatus = document.getElementById("shiftStatus");

shiftToggle.addEventListener("change", function () {
  if (shiftToggle.checked) {
    shiftStatus.textContent = "Current Shift: Night";
    document.body.style.backgroundColor = "#0f172a";
    document.body.style.color = "white";
  } else {
    shiftStatus.textContent = "Current Shift: Day";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
});
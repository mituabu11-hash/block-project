// Get HTML elements
let toggleImageBtn = document.getElementById("toggleImageBtn");
let toggleTextBtn = document.getElementById("toggleTextBtn");
let imageDiv = document.getElementById("imageDiv");
let textPara = document.getElementById("textPara");

// Function to show/hide image
toggleImageBtn.onclick = function() {
  if (imageDiv.style.display === "none") {
    imageDiv.style.display = "block";
    toggleImageBtn.textContent = "Hide Image";
  } else {
    imageDiv.style.display = "none";
    toggleImageBtn.textContent = "Show Image";
  }
};

// Function to show/hide text
toggleTextBtn.onclick = function() {
  if (textPara.style.display === "none") {
    textPara.style.display = "block";
    toggleTextBtn.textContent = "Hide Text";
  } else {
    textPara.style.display = "none";
    toggleTextBtn.textContent = "Show Text";
  }
};

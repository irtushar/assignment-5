//Header Section
let heartCounter = 0;
let coinCount = 100;
let copyCount = 0;

// Function to update counters display
function updateCounters() {
  document.getElementById("heart-count").innerText = heartCounter;
  document.getElementById("coin-count").innerText = coinCount;
  document.getElementById("copy-count").innerText = copyCount;
}

// Initialize counters
updateCounters();

// Header Section
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

function updateCounters() {
  document.getElementById("heart-count").innerText = heartCount;
  document.getElementById("coin-count").innerText = coinCount;
  document.getElementById("copy-count").innerText = copyCount;
}
updateCounters();

// Card Section
document
  .getElementById("parent-card-container")
  .addEventListener("click", function (event) {
    const card = event.target.closest(".card");
    if (!card) return;

    // Heart Button
    if (event.target.classList.contains("heart-btn")) {
      heartCount++;
      updateCounters();

      // Toggle heart icon style
      if (event.target.classList.contains("fa-regular")) {
        event.target.classList.remove("fa-regular");
        event.target.classList.add("fa-solid", "text-red-500");
      } else {
        event.target.classList.remove("fa-solid", "text-red-500");
        event.target.classList.add("fa-regular");
      }
    }

    // Call Button
    if (event.target.closest(".btn-call")) {
      const serviceName = card.querySelector("h3").innerText;
      const serviceNumber = card.querySelector(".service-number").innerText;

      if (coinCount >= 20) {
        alert("📞 Calling " + serviceName + " " + serviceNumber);
        coinCount -= 20;
        updateCounters();
        addToCallHistory(serviceName, serviceNumber);
      } else {
        alert("😭 Insufficient Coin.");
      }
    }

    //Copy Button
    if (event.target.closest(".btn-copy")) {
      const serviceName = card.querySelector("h3").innerText;
      const serviceNumber = card.querySelector(".service-number").innerText;

      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(serviceNumber)
          .then(() => {
            copyCount++;
            updateCounters();
            alert(`${serviceName} ("${serviceNumber}") copied.`);
          })
          .catch(() => {
            fallbackCopyTextToClipboard(serviceNumber, serviceName);
          });
      } else {
        fallbackCopyTextToClipboard(serviceNumber, serviceName);
      }
    }
  });

// Copy Function

function fallbackCopyTextToClipboard(text, serviceName) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  copyCount++;
  updateCounters();
  alert(`${serviceName} ("${text}") copied.`);
}

// Add Call to History
function addToCallHistory(serviceName, serviceNumber) {
  const historyElement = document.createElement("div");
  historyElement.className =
    "bg-white border border-gray-200 rounded-xl shadow-sm p-3 flex justify-between items-center";
  historyElement.innerHTML = `
    <div>
      <p class="font-semibold">${serviceName}</p>
      <p class="text-gray-600">${serviceNumber}</p>
    </div>
    <div class="text-gray-500 text-sm">${new Date().toLocaleTimeString()}</div>
  `;
  document.getElementById("call-history").prepend(historyElement);
}

// Clear Call History
document.getElementById("btn-clear").addEventListener("click", function () {
  document.getElementById("call-history").innerHTML = "";
});

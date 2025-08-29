//  Header Counters
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

function updateCounters() {
  document.getElementById("heart-count").innerText = heartCount;
  document.getElementById("coin-count").innerText = coinCount;
  document.getElementById("copy-count").innerText = copyCount;
}
updateCounters();

//  Card Actions
document
  .getElementById("parent-card-container")
  .addEventListener("click", function (event) {
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

    // 📞 Call Button
    if (event.target.closest(".btn-call")) {
      const card = event.target.closest(".bg-base-100");
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

    // 📋 Copy Button
    if (event.target.closest(".btn-copy")) {
      const card = event.target.closest(".bg-base-100");
      const serviceName = card.querySelector("h3").innerText;
      const serviceNumber = card.querySelector(".service-number").innerText;

      // Use modern clipboard API if available
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(serviceNumber)
          .then(() => {
            copyCount++;
            updateCounters();
            alert(`${serviceName} ("${serviceNumber}") copied.`);
          })
          .catch((err) => {
            console.error("Clipboard error:", err);
            fallbackCopyTextToClipboard(serviceNumber, serviceName);
          });
      } else {
        // Fallback for older browsers
        fallbackCopyTextToClipboard(serviceNumber, serviceName);
      }
    }
  });

//  Fallback Copy Function
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

//  Add Call to History
function addToCallHistory(serviceName, serviceNumber) {
  const historyElement = document.createElement("div");
  historyElement.innerHTML = `
    <div class="bg-[#fafafa] p-4 flex justify-between items-center rounded-3xl my-5">
      <div>
        <p class="font-semibold">${serviceName}</p>
        <p>${serviceNumber}</p>
      </div>
      <div>${new Date().toLocaleTimeString()}</div>
    </div>
  `;
  document.getElementById("call-history").appendChild(historyElement);
}

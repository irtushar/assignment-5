//Header Section
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

function updateCounters() {
  document.getElementById("heart-count").innerText = heartCount;
  document.getElementById("coin-count").innerText = coinCount;
  document.getElementById("copy-count").innerText = copyCount;
}
updateCounters();

//Card Section
document
  .getElementById("parent-card-container")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("heart-btn")) {
      heartCount++;
      updateCounters();

      // Toggle heart icon
      if (event.target.classList.contains("fa-regular")) {
        event.target.classList.remove("fa-regular");
        event.target.classList.add("fa-solid", "text-red-500");
      } else {
        event.target.classList.remove("fa-solid", "text-red-500");
        event.target.classList.add("fa-regular");
      }
    }

    // Call button
    if (event.target.closest(".btn-call")) {
      const card = event.target.closest(".bg-base-100");
      const serviceName = card.querySelector("h3").innerText;
      const serviceNumber = card.querySelector(".service-number").innerText;

      if (coinCount >= 20) {
        alert("📞 Calling " + serviceName + " " + serviceNumber);
        coinCount -= 20;
        updateCounters();

        // Call history
        addToCallHistory(serviceName, serviceNumber);
      } else {
        alert("😭 Insufficient Coin.");
      }
    }

    //Button functionality
    if (event.target.closest(".btn-copy")) {
      const card = event.target.closest(".bg-base-100");
      const serviceName = card.querySelector("h3").innerText;
      const serviceNumber = card.querySelector(".service-number").innerText;

      // Copy to clipboard
      navigator.clipboard.writeText(serviceNumber).then(() => {
        alert(serviceName + ' "' + serviceNumber + '" copied.');
        copyCount++;
        updateCounters();
      });
    }
  });

// Call history
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

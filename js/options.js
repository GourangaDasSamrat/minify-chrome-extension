document.addEventListener("DOMContentLoaded", () => {
  // Load saved API key if it exists
  chrome.storage.sync.get(["geminiApiKey"], (result) => {
    if (result.geminiApiKey) {
      document.getElementById("api-key").value = result.geminiApiKey;
    }
  });

  // Save API key when button is clicked
  document.getElementById("save-button").addEventListener("click", () => {
    const apiKey = document.getElementById("api-key").value.trim();

    if (apiKey) {
      chrome.storage.sync.set({ geminiApiKey: apiKey }, () => {
        const successMessage = document.getElementById("success-message");
        successMessage.style.display = "block";

        // Close the tab after a short delay to show the success message
        setTimeout(() => {
          window.close();
          chrome.tabs.getCurrent((tab) => {
            if (tab) {
              chrome.tabs.remove(tab.id);
            }
          });
        }, 1000);
      });
    }
  });
});

const apiInput = document.getElementById("api-key");
const toggleBtn = document.getElementById("toggle-api");
const toggleIcon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {
  const isHidden = apiInput.type === "password";

  apiInput.type = isHidden ? "text" : "password";
  toggleIcon.className = isHidden ? "bi bi-eye-slash" : "bi bi-eye";
});

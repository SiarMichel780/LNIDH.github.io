// Interactive Button
document.getElementById("interactiveBtn").addEventListener("click", function() {
  const result = document.getElementById("interactionResult");
  result.textContent = "🎬 You’ve discovered an LNIDH secret! Stay tuned for our next big project...";
  result.classList.remove("hidden");
});

// Tab Navigation
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach(tab => {
  tab.addEventListener("click", e => {
    e.preventDefault();
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));
    
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

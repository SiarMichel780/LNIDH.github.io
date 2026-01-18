// Tabs
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.content');

tabs.forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault();
    tabs.forEach(t => t.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.target).classList.add('active');
  });
});

// Countdown
const targetDate = new Date("January 19, 2026 18:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff < 0) {
    document.getElementById("countdown").innerHTML = "IT'S OUT!";
    return;
  }

  document.getElementById("days").textContent = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("hours").textContent = Math.floor((diff / (1000 * 60 * 60)) % 24);
  document.getElementById("minutes").textContent = Math.floor((diff / (1000 * 60)) % 60);
  document.getElementById("seconds").textContent = Math.floor((diff / 1000) % 60);
}, 1000);


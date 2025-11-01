// Tab switching for single-page layout
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.content');

tabs.forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault();

    // Remove active class from all tabs and sections
    tabs.forEach(t => t.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));

    // Activate the clicked tab and its section
    tab.classList.add('active');
    const target = tab.getAttribute('data-target');
    document.getElementById(target).classList.add('active');
  });
});

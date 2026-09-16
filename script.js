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

    // Load the Merch iframe only the first time that tab is opened.
    // This is the fix for the 20-30s load delay: the iframe used to
    // sit in the page with a real src, so the browser fetched it on
    // every page load even while the Merch tab was hidden.
    if (tab.dataset.target === 'merch') {
      const merchIframe = document.querySelector('.merch-iframe');
      if (merchIframe && !merchIframe.src) {
        merchIframe.src = merchIframe.dataset.src;
      }
    }
  });
});

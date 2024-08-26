const toggleThemeElement = document.getElementById('toggle-theme');
const toggleIconElement = document.getElementById('toggle-icon');
const toggleTextElement = document.getElementById('toggle-text');

const toggleColorsElement = document.getElementById('toggle-colors');

const rootStyles = document.documentElement.style;

toggleThemeElement.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (toggleIconElement.src.includes('moon.svg')) {
    toggleIconElement.src = './docs/assets/images/sun.svg';
    toggleTextElement.textContent = 'Light Mode';
  } else {
    toggleIconElement.src = './docs/assets/images/moon.svg';
    toggleTextElement.textContent = 'Dark Mode';
  }
});

toggleColorsElement.addEventListener('click', (event) => {
  rootStyles.setProperty('--primary-color', event.target.dataset.color);
});

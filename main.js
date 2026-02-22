const generateBtn = document.getElementById('generate-btn');
const numbersContainer = document.getElementById('numbers-container');
const themeToggle = document.getElementById('checkbox');

// Function to set theme
function setTheme(theme) {
    document.body.classList.toggle('dark-mode', theme === 'dark');
    themeToggle.checked = (theme === 'dark');
}

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // If no saved theme, check system preference
    setTheme('dark');
} else {
    setTheme('light');
}


// Event listener for theme toggle
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        setTheme('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        setTheme('light');
        localStorage.setItem('theme', 'light');
    }
});


generateBtn.addEventListener('click', () => {
    numbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    for (const number of numbers) {
        const circle = document.createElement('div');
        circle.classList.add('number-circle');
        circle.textContent = number;
        numbersContainer.appendChild(circle);
    }
});
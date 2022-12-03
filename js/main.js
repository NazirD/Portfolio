const btnDarkMode = document.querySelector('.dark-mode-btn');

// проверка темной темы в localStorage
if(localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add("dark");
}

// проверка темной темы на уровне системных настроек
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add("dark");
}

// включение ночного режима по кнопке
btnDarkMode.onclick = function () {
    console.log('Click')
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    document.body.classList.toggle('dark');

    if(isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'light');
    }
}

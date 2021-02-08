//page setup
(function() {
    const $ = (e) => document.querySelector(e);
    const $a = (e) => document.querySelectorAll(e);

    //apply theme
    function setTheme(themeName) {
        localStorage.setItem('theme', themeName);
        document.querySelector('body').className = themeName;
        for (let s of $a('.toggle-switch')) {
            s.checked = themeName === 'theme-dark' ? true : false;
        }
    }

    function toggleTheme() {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
        } else {
            setTheme('theme-dark');
        }
    }

    function stickNavbar() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("navbar-fixed")
        } else {
            navbar.classList.remove("navbar-fixed");
        }
    }
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }
    window.addEventListener('scroll', () => stickNavbar(), { passive: true });
    const navbar = $('#navbar-fixed');
    const sticky = navbar.offsetTop;

    for (let s of $a('.toggle-switch')) {
        s.addEventListener("change", () => toggleTheme());
    }

    M.Sidenav.init($a('.sidenav'));
})();
$(document).ready(function () {
    $('#hidden-section').click(function(){
        $('.hidden-content').toggleClass('active-content');
    });

    $('.open-menu').click(function(){
        $('.menu-list').addClass('active-list');
    });

    let theme = localStorage.getItem('theme');
    theme === 'dark' ? enableDarkMode() : disableDarkMode();

    function enableDarkMode() {
        localStorage.setItem('theme', 'dark');
        document.body.classList.add('dark-mode');
        $('.darkTheme').addClass('active');
        $('.theme').addClass('darkmode');
    }

    function disableDarkMode() {
        localStorage.setItem('theme', 'light');
        document.body.classList.remove('dark-mode');
        $('.lightTheme').addClass('active');
        $('.theme').removeClass('darkmode');
    }

    $('.darkTheme').on('click', () => {
        enableDarkMode();
        console.log('Dark Btn  ', theme);
        // $('.themeBtn').removeClass('active');
        // $(this).addClass('active');
    });

    $('.lightTheme').on('click', () => {
        disableDarkMode();
        console.log('light Btn', theme);
    });

});
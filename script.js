document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navDesktop = document.querySelector('.nav-desktop');
    
    if (burgerMenu && navDesktop) {
        burgerMenu.addEventListener('click', function() {
            navDesktop.classList.toggle('active');
        });
    }
});

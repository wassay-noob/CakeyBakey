document.addEventListener('scroll', function () {
    const navBar = document.querySelector('.nav-bar');
    if (window.scrollY > 0) {
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
});

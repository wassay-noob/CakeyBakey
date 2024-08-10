document.addEventListener('scroll', function() {
    const navBar = document.querySelector('.nav-bar');
    if (window.scrollY > 0) {
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
});

window.onload = function() {
    // Show the popup with animation
    var popupOverlay = document.getElementById('popup');
    var popupContent = document.querySelector('.popup-content');

    setTimeout(function() {
        popupOverlay.classList.add('show');
        popupContent.classList.add('show');
    }, 100); // Small delay to ensure transition works

    // Close the popup when the close button is clicked
    var closeBtn = document.querySelector('.popup-content .close');
    closeBtn.onclick = function() {
        popupOverlay.classList.remove('show');
        popupContent.classList.remove('show');
    }

    // Close the popup when clicking outside of it
    window.onclick = function(event) {
        if (event.target == popupOverlay) {
            popupOverlay.classList.remove('show');
            popupContent.classList.remove('show');
        }
    }

    // Redirect to call when "Call to Inquire" button is clicked
    var callBtn = document.querySelector('.popup-content .call-to-inquire');
    callBtn.onclick = function() {
        window.location.href = 'tel:+1234567890'; // Replace with your phone number
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const viewMoreButtons = document.querySelectorAll(".view-more");

    viewMoreButtons.forEach(button => {
        button.addEventListener("click", function () {
            const url = this.getAttribute("data-url");
            window.location.href = url;
        });
    });
});




    
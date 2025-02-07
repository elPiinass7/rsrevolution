document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".carousel-item");
    const prevButton = document.querySelector(".carousel-btn.prev");
    const nextButton = document.querySelector(".carousel-btn.next");

    let currentIndex = 1; // Comenzamos con la segunda imagen centrada

    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.remove("center");

            if (index === currentIndex) {
                item.classList.add("center");
                item.style.zIndex = "2";
                item.style.transform = "scale(1.2)";
                item.style.filter = "brightness(1)";
            } else {
                item.style.zIndex = "1";
                item.style.transform = "scale(0.9)";
                item.style.filter = "brightness(0.5)";
            }
        });
    }

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    // Auto-slide cada 3 segundos
    setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }, 3000);

    updateCarousel();
});
/* ==========================
GALLERY CONTROLLER
========================== */

document.addEventListener("DOMContentLoaded", () => {

    const galleryBtn = document.getElementById("galleryBtn");
    const gallerySection = document.getElementById("gallerySection");

    if (!galleryBtn || !gallerySection) return;

    galleryBtn.addEventListener("click", () => {

        closeAllSections();

        gallerySection.style.display = "block";

        setTimeout(() => {

            gallerySection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);
    });

    /* ==========================
       PHOTO FLOAT DELAY
    ========================== */

    const photos = document.querySelectorAll(".photo-card");

    photos.forEach((photo, i) => {
        photo.style.animationDelay = `${i * 0.5}s`;
    });

});

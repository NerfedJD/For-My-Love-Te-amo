/* ==========================
SECTION ELEMENTS
========================== */

const lettersBtn = document.getElementById("lettersBtn");
const galleryBtn = document.getElementById("galleryBtn");
const finalBtn = document.getElementById("finalBtn");

const lettersSection = document.getElementById("lettersSection");
const gallerySection = document.getElementById("gallerySection");
const finalSection = document.getElementById("finalSection");

/* ==========================
CLOSE ALL SECTIONS
========================== */

function closeAllSections() {

    if (lettersSection) lettersSection.style.display = "none";
    if (gallerySection) gallerySection.style.display = "none";
    if (finalSection) finalSection.style.display = "none";
}

/* ==========================
LETTERS SLIDER
========================== */

function startLettersSlider() {

    const letters = document.querySelectorAll(".letter-card");

    if (!letters.length) return;

    let current = 0;

    letters.forEach(letter => {
        letter.classList.remove("active");
    });

    letters[current].classList.add("active");

    const slider = setInterval(() => {

        letters[current].classList.remove("active");
        current++;

        if (current >= letters.length) {
            clearInterval(slider);
            return;
        }

        letters[current].classList.add("active");

    }, 3000);
}

/* ==========================
LETTERS BUTTON
========================== */

if (lettersBtn && lettersSection) {

    lettersBtn.addEventListener("click", () => {

        closeAllSections();

        lettersSection.style.display = "block";

        setTimeout(() => {

            lettersSection.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 100);

        startLettersSlider();
    });
}

/* ==========================
GALLERY BUTTON
========================== */

if (galleryBtn && gallerySection) {

    galleryBtn.addEventListener("click", () => {

        closeAllSections();

        gallerySection.style.display = "block";

        setTimeout(() => {

            gallerySection.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 100);
    });
}

/* ==========================
FINAL BUTTON
========================== */

if (finalBtn && finalSection) {

    finalBtn.addEventListener("click", () => {

        closeAllSections();

        finalSection.style.display = "block";

        setTimeout(() => {

            finalSection.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 100);
    });
}
/* ==========================
   STARS
========================== */

const starsContainer = document.getElementById("stars");

if (starsContainer) {

    for (let i = 0; i < 200; i++) {

        const star = document.createElement("div");

        star.classList.add("star");

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.animationDuration =
            (Math.random() * 4 + 2) + "s";

        starsContainer.appendChild(star);
    }
}


/* ==========================
   FIREFLIES
========================== */

for (let i = 0; i < 25; i++) {

    const firefly = document.createElement("div");

    firefly.classList.add("firefly");

    firefly.style.left =
        Math.random() * window.innerWidth + "px";

    firefly.style.top =
        Math.random() * window.innerHeight + "px";

    firefly.style.animationDuration =
        (Math.random() * 8 + 6) + "s";

    document.body.appendChild(firefly);
}
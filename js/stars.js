/* ==========================
   STARS (OPTIMIZED)
========================== */

document.addEventListener("DOMContentLoaded", () => {

    const starsContainer = document.getElementById("stars");

    if (!starsContainer) {
        console.error("❌ #stars container not found");
        return;
    }

    starsContainer.innerHTML = "";

    // 🔥 Reduce for performance
    const STAR_COUNT = window.innerWidth < 768 ? 40 : 70;

    for (let i = 0; i < STAR_COUNT; i++) {

        const star = document.createElement("div");
        star.className = "star";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        // smoother + less CPU
        star.style.animationDuration =
            (Math.random() * 2 + 3) + "s";

        star.style.animationDelay =
            Math.random() * 2 + "s";

        starsContainer.appendChild(star);
    }

    console.log("⭐ Stars generated:", STAR_COUNT);
});


/* ==========================
   FIREFLIES (OPTIMIZED)
========================== */

document.addEventListener("DOMContentLoaded", () => {

    // 🔥 Disable on smaller devices (fix lag + audio)
    if (window.innerWidth < 768) return;

    const FIREFLY_COUNT = 10; // was 25 ❌

    for (let i = 0; i < FIREFLY_COUNT; i++) {

        const firefly = document.createElement("div");
        firefly.classList.add("firefly");

        firefly.style.left =
            Math.random() * window.innerWidth + "px";

        firefly.style.top =
            Math.random() * window.innerHeight + "px";

        // slower = smoother
        firefly.style.animationDuration =
            (Math.random() * 6 + 8) + "s";

        document.body.appendChild(firefly);
    }

    console.log("✨ Fireflies generated:", FIREFLY_COUNT);
});

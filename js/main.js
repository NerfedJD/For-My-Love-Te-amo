/* ==========================
   STARS (CLEAN + SAFE)
========================== */

document.addEventListener("DOMContentLoaded", () => {

    const starsContainer = document.getElementById("stars");

    if (starsContainer) {
        starsContainer.innerHTML = "";

        for (let i = 0; i < 120; i++) { // 🔥 slightly reduced for performance
            const star = document.createElement("div");
            star.className = "star";

            star.style.left = Math.random() * 100 + "%";
            star.style.top = Math.random() * 100 + "%";

            star.style.animationDuration =
                (Math.random() * 3 + 2) + "s";

            star.style.animationDelay =
                Math.random() * 3 + "s";

            starsContainer.appendChild(star);
        }
    }

});


/* ==========================
   FIREFLIES (OPTIONAL SAFE)
========================== */

document.addEventListener("DOMContentLoaded", () => {

    // 🔥 disable on small devices for performance
    if (window.innerWidth <= 768) return;

    for (let i = 0; i < 20; i++) {

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

});


/* ==========================
   MAIN FLOW (FIXED)
========================== */

document.addEventListener("DOMContentLoaded", () => {

    const startBtn = document.getElementById("startBtn");
    const introScene = document.getElementById("introScene");
    const bgMusic = document.getElementById("bgMusic");

    if (!startBtn || !introScene) return;

    /* 🎵 PREPARE AUDIO */
    if (bgMusic) {
        bgMusic.loop = true;
        bgMusic.volume = 0.5;
        bgMusic.preload = "auto";
    }

    /* 🔥 KEEP AUDIO ALIVE (ONLY ONCE) */
    if (bgMusic) {
        document.addEventListener("visibilitychange", () => {
            if (bgMusic.paused) {
                bgMusic.play().catch(() => {});
            }
        });
    }

    startBtn.addEventListener("click", () => {

        /* ▶️ PLAY MUSIC */
        if (bgMusic && bgMusic.paused) {
            bgMusic.play().catch(() => {});
        }

        /* INTRO FADE OUT */
        introScene.style.transition = "opacity 1s ease";
        introScene.style.opacity = "0";

        setTimeout(() => {
            introScene.style.display = "none";
        }, 1000);

        /* START FAIRY */
        setTimeout(() => {
            if (window.startFairySequence) {
                window.startFairySequence();
            }
        }, 300);

    });

});


/* ==========================
   PAGE LOAD (BACKGROUND FADE FIX)
========================== */

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

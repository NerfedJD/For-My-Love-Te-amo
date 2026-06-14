/* ==========================
   MAIN FLOW (FIXED + STABLE)
========================== */

document.addEventListener("DOMContentLoaded", () => {

    const startBtn = document.getElementById("startBtn");
    const introScene = document.getElementById("introScene");
    const bgMusic = document.getElementById("bgMusic");

    if (!startBtn || !introScene) return;

    /* 🔥 PREPARE AUDIO */
    if (bgMusic) {
        bgMusic.loop = true;
        bgMusic.volume = 0.5;
        bgMusic.preload = "auto";
    }

    startBtn.addEventListener("click", () => {

        /* 🎵 PLAY MUSIC (SAFE) */
        if (bgMusic && bgMusic.paused) {
            bgMusic.play().catch(() => {});
        }

        /* 🔥 KEEP AUDIO ALIVE (fix random stopping) */
        document.addEventListener("visibilitychange", () => {
            if (bgMusic.paused) {
                bgMusic.play().catch(() => {});
            }
        });

        /* INTRO FADE OUT */
        introScene.style.transition = "opacity 1s ease";
        introScene.style.opacity = "0";

        setTimeout(() => {
            introScene.style.display = "none";
        }, 1000);

        /* START FAIRY SEQUENCE */
        setTimeout(() => {
            if (window.startFairySequence) {
                window.startFairySequence();
            }
        }, 300);

    });

});

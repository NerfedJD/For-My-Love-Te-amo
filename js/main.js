/* ==========================
   MAIN FLOW
========================== */

document.addEventListener("DOMContentLoaded", () => {

    const startBtn = document.getElementById("startBtn");
    const introScene = document.getElementById("introScene");
    const bgMusic = document.getElementById("bgMusic");

    if (!startBtn || !introScene) return;

    startBtn.addEventListener("click", () => {

        /* MUSIC */
        bgMusic?.play().catch(() => {});

        /* INTRO FADE OUT */
        introScene.style.transition = "1s ease";
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

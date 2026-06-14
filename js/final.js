/* ==========================
FINAL TYPEWRITER
========================== */

function typeElement(elementId, text, speed, callback) {

    const element = document.getElementById(elementId);
    if (!element) return;

    element.innerHTML = "";

    let i = 0;

    const typing = setInterval(() => {

        element.innerHTML += text.charAt(i);
        i++;

        if (i >= text.length) {
            clearInterval(typing);
            if (callback) callback();
        }

    }, speed);
}

/* ==========================
FINAL MESSAGE SEQUENCE
========================== */

function typeFinalMessage(onComplete) {

    typeElement(
        "finalText1",
        `Out of all the stars in the sky,
you shine the brightest.`,
        45,
        () => {

            typeElement(
                "finalText2",
                `No matter where life takes us,
there will always be a place in my heart
that belongs only to you.`,
                45,
                () => {

                    typeElement(
                        "finalSignature",
                        `Love,
Four Eyes`,
                        60,
                        () => {
                            if (onComplete) onComplete();
                        }
                    );

                }
            );

        }
    );
}

/* ==========================
SCROLL TO END (FIXED + FASTER)
========================== */

function scrollToPageEnd() {

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });

}

/* ==========================
FINAL FLOW
========================== */

function runFinalSequence() {

    const finalSection = document.getElementById("finalSection");
    const fairyEndingScene = document.getElementById("fairyEndingScene");
    const finalBtn = document.getElementById("finalBtn");
    const thanks = document.querySelector(".thanks-for-watching");

    if (!finalSection || !finalBtn) return;

    /* SHOW FINAL SECTION */
    finalSection.style.display = "block";

    /* SHOW FAIRY SCENE */
    if (fairyEndingScene) {
        fairyEndingScene.style.display = "flex";
    }

    /* START TYPEWRITER */
    typeFinalMessage(() => {

        /* SHORT DELAY FOR EMOTION FEEL */
        setTimeout(() => {

            scrollToPageEnd();

            /* SHOW THANK YOU AFTER SCROLL BEGINS */
            setTimeout(() => {

                if (thanks) {
                    thanks.classList.add("show");
                    thanks.style.transform = "translateY(0)";
                }

            }, 2000); // Wait before thanks appears 
            
            setTimeout(() => {
    document.documentElement.style.scrollBehavior = "auto";
}, 6000);
        }, 3200); // Wait before scroll 

    });
}

/* ==========================
BUTTON EVENT
========================== */

document.addEventListener("DOMContentLoaded", () => {

    const finalBtn = document.getElementById("finalBtn");

    if (!finalBtn) return;

    finalBtn.addEventListener("click", runFinalSequence);
});

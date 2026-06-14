/* ==========================
   FAIRY ELEMENTS
========================== */

const fairyContainer = document.getElementById("fairyContainer");
const fairy = document.getElementById("fairy");
const fairyChat = document.getElementById("fairyChat");
const fairyHint = document.getElementById("fairyHint");

/* ==========================
   UTILITY
========================== */

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/* ==========================
   INITIAL STATE
========================== */

window.addEventListener("DOMContentLoaded", () => {

    if (!fairyContainer) return;

    fairyContainer.style.display = "none";
    fairyContainer.style.opacity = "0";
    fairyContainer.style.left = "-200px";
    fairyContainer.style.top = "40%";

    if (fairyChat) fairyChat.style.opacity = "0";
    if (fairyHint) fairyHint.style.opacity = "0";

});

/* ==========================
   TYPEWRITER
========================== */

function typeFairyText(text) {

    return new Promise(resolve => {

        fairyChat.textContent = "";
        fairyChat.style.opacity = "1";

        let i = 0;

        const typing = setInterval(() => {

            fairyChat.textContent += text.charAt(i);

            i++;

            if (i >= text.length) {

                clearInterval(typing);

                setTimeout(resolve, 700);

            }

        }, 55);

    });

}

/* ==========================
   FAIRY FLY IN
========================== */

function fairyFlyIn() {

    fairyContainer.style.display = "block";

    fairyContainer.style.transition = "none";

    fairyContainer.style.left = "-200px";
    fairyContainer.style.top = "20%";
    fairyContainer.style.opacity = "0";

    setTimeout(() => {

        fairyContainer.offsetHeight;

        fairyContainer.style.transition =
    "left 2.7s ease-in-out, opacity 2.2s ease";

        fairyContainer.style.left = "35%";
        fairyContainer.style.opacity = "1";

    }, 50);

}

/* ==========================
   HINT
========================== */

function showHint() {

    fairyHint.textContent = "✨ Click the fairy ✨";
    fairyHint.style.opacity = "1";

}

/* ==========================
   START SEQUENCE
========================== */

async function startFairySequence() {

    fairyFlyIn();

    /* match 4.5 second fly-in */
    await delay(3000);

    await typeFairyText("Harrow 3 Eyes");

    /* keep visible longer */
    await delay(800);

    fairyChat.style.opacity = "0";

    await delay(800);

    showHint();

}

/* ==========================
   FAIRY FLY AROUND
========================== */

function fairyFlyAround() {

    return new Promise(resolve => {

        const positions = [
            { x: 20, y: 20 },
            { x: 75, y: 15 },
            { x: 80, y: 60 },
            { x: 30, y: 70 },
            { x: 50, y: 35 }
        ];

        let current = 0;

        const fly = setInterval(() => {

            fairyContainer.style.transition =
                "left 2.8s ease-in-out, top 2.8s ease-in-out";

            fairyContainer.style.left =
                positions[current].x + "%";

            fairyContainer.style.top =
                positions[current].y + "%";

            current++;

            if (current >= positions.length) {

                clearInterval(fly);

                setTimeout(resolve, 600);

            }

        }, 3000);

    });

}

/* ==========================
   MAIN CINEMATIC FLOW
========================== */

async function startSequenceAfterText() {

    fairyChat.style.opacity = "0";

    await delay(800);

    /* fairy starts flying */
    const fairyFlight = fairyFlyAround();

    /* flower begins while fairy is flying */
    await delay(1200);

    if (window.bloomFlowerBottom) {
        window.bloomFlowerBottom();
    }

    /* stem growth */
    await delay(4000);

    /* leaves */
    await delay(1500);

    /* flower bloom */
    await delay(1500);

    await fairyFlight;

  /* fairy + flower fade together */
fairyContainer.style.opacity = "0";

if (window.hideFlower) {
    window.hideFlower();
}

await delay(1500);

fairyContainer.style.display = "none";

if (window.showMessage) {
    window.showMessage();
}
}

/* ==========================
   FAIRY CLICK
========================== */

if (fairy) {

    fairy.addEventListener("click", async () => {

        fairyHint.style.opacity = "0";

        /* allow hint to fade */
        await delay(500);

        fairy.style.pointerEvents = "none";

        await typeFairyText("You Ready?");

        await delay(1200);

        await startSequenceAfterText();

    });

}

/* ==========================
   EXPOSE
========================== */

window.fairyFlyIn = fairyFlyIn;
window.fairyFlyAround = fairyFlyAround;
window.typeFairyText = typeFairyText;
window.startFairySequence = startFairySequence;
window.startSequenceAfterText = startSequenceAfterText;

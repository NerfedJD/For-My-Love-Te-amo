/* ==========================
   FLOWER CONTROLLER
========================== */

function getFlower() {
    return document.getElementById("flowerScene");
}

/* ==========================
   RESET ANIMATION SYSTEM
========================== */

function resetFlower(flower) {

    // remove animation classes
    flower.classList.remove("playing");

    void flower.offsetWidth; // force reflow (CRITICAL)

    flower.classList.add("playing");
}

/* ==========================
   BLOOM FLOWER (BOTTOM SEQUENCE)
========================== */

function bloomFlowerBottom() {

    const flower = getFlower();

    if (!flower) {
        console.error("flowerScene not found");
        return;
    }

    flower.style.display = "flex";
    flower.style.opacity = "1";

    flower.classList.remove("center");

    const stem = flower.querySelector(".stem");
    const leftLeaf = flower.querySelector(".leaf-left");
    const rightLeaf = flower.querySelector(".leaf-right");
    const head = flower.querySelector(".flower-head");

    if (!stem || !leftLeaf || !rightLeaf || !head) {
        console.error("Missing flower parts");
        return;
    }

    /* RESET ALL STATES */
    stem.classList.remove("grow");
    leftLeaf.classList.remove("grow");
    rightLeaf.classList.remove("grow");
    head.classList.remove("bloom");

    void flower.offsetWidth;

    /* ==========================
       TIMED SEQUENCE
    ========================== */

    // 🌱 STEM FIRST
    stem.classList.add("grow");

    // 🍃 LEAVES AFTER STEM
    setTimeout(() => {
        leftLeaf.classList.add("grow");
        rightLeaf.classList.add("grow");
    }, 2500);

    // 🌸 FLOWER BLOOM LAST
    setTimeout(() => {
        head.classList.add("bloom");
    }, 4000);
}

/* ==========================
   HIDE FLOWER
========================== */

function hideFlower() {

    const flower = getFlower();

    if (!flower) return;

    flower.style.opacity = "0";

    setTimeout(() => {
        flower.style.display = "none";
    }, 800);
}

/* ==========================
   CENTER FLOWER (OPTIONAL)
========================== */

function showFlowerCenter() {

    const flower = getFlower();

    if (!flower) return;

    flower.classList.add("center");

    flower.style.display = "flex";
    flower.style.opacity = "1";
}

/* ==========================
   GLOBAL EXPORT
========================== */

window.bloomFlowerBottom = bloomFlowerBottom;
window.hideFlower = hideFlower;
window.showFlowerCenter = showFlowerCenter;
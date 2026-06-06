document.addEventListener("DOMContentLoaded", () => {
    const moon = document.querySelector(".moon");

    if (!moon) return;

    let growing = true;

    setInterval(() => {

        if (growing) {
            moon.style.transform = "scale(1.05)";
        } else {
            moon.style.transform = "scale(1)";
        }

        growing = !growing;

    }, 2500);
});

/* FLOATING HEARTS */

(function () {

    function spawnHeart() {

        const container = document.getElementById("heartContainer");

        if (!container) {
            console.error("❌ heartContainer not found");
            return;
        }

        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerText = "💙";

        // random position
        heart.style.left = Math.random() * 100 + "vw";

        // random size
        heart.style.fontSize =
            (12 + Math.random() * 28) + "px";

        // random speed (3–8 seconds)
        const duration =
            (15 + Math.random() * 15).toFixed(2);

        heart.style.animationDuration =
            duration + "s";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }

    function startHearts() {

        setInterval(() => {
            spawnHeart();
        }, 1500);

        console.log("💙 Hearts started");
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            startHearts
        );
    } else {
        startHearts();
    }

})();
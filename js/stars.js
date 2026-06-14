/* ==========================
   STARS (FIXED)
========================== */

document.addEventListener("DOMContentLoaded", () => {

    const starsContainer = document.getElementById("stars");

    if (!starsContainer) {
        console.error("❌ #stars container not found");
        return;
    }

    // Clear any duplicates
    starsContainer.innerHTML = "";

    for (let i = 0; i < 150; i++) {

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

    console.log("⭐ Stars generated");
});


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

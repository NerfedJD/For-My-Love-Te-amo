/* ==========================
   FIRST MESSAGE
========================== */

function showMessage(){

    // ✅ ENABLE smooth scrolling ONLY here
    document.documentElement.style.scrollBehavior = "smooth";

    fairyContainer.style.opacity = "0";
    fairyContainer.style.pointerEvents = "none";

    messageSection.style.display = "block";

    setTimeout(() => {
        messageSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 100);

    const message = `

Dear Manaia,

Every day feels brighter knowing you exist.

No matter how far apart we are,
you always find a way to make me smile.

You are beautiful,
kind,
and one of the most special people
I have ever met.

Te amo 🩷💙
`;

    typewriter.innerHTML = "";

    let i = 0;

    const typing = setInterval(() => {

        typewriter.innerHTML += message.charAt(i);
        i++;

        if (i >= message.length) {

            clearInterval(typing);

            // small pause before second message
            setTimeout(() => {
                showSecondMessage();
            }, 1500);

            // buttons appear AFTER second message starts (no overlap bug fix)
            setTimeout(() => {
                buttonsSection.style.display = "block";

                buttonsSection.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }, 6500);
        }

    }, 45);
}


/* ==========================
   SECOND MESSAGE
========================== */

function showSecondMessage(){

    secondMessageSection.style.display = "block";

    setTimeout(() => {
        secondMessageSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 100);

    const secondMessage = `

I know life is not always easy,
but I hope you never forget
how important you are.

You deserve love,
peace,
happiness,
and every beautiful thing
this world can offer.

And no matter what happens,
a part of me will always care
about you.

🩷💙
`;

    secondTypewriter.innerHTML = "";

    let i = 0;

    const typing = setInterval(() => {

        secondTypewriter.innerHTML += secondMessage.charAt(i);
        i++;

        if (i >= secondMessage.length) {
            clearInterval(typing);
        }

    }, 45);
       }

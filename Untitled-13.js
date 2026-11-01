function sendMessage(event) {

        event.preventDefault();

        let name =
            document.getElementById("name").value;

        alert(
            "Thank you, " +
            name +
            "! Your message has been received."
        );

        document.querySelector("form").reset();

    }


    /* DARK / LIGHT MODE */

    const themeBtn =
        document.getElementById("themeBtn");

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {

            themeBtn.textContent = "🌙";

        } else {

            themeBtn.textContent = "☀️";

        }

    });


    /* SCROLL ANIMATION */

    const reveals =
        document.querySelectorAll(".reveal");

    function revealOnScroll() {

        reveals.forEach(function (element) {

            const windowHeight =
                window.innerHeight;

            const elementTop =
                element.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {

                element.classList.add("show");

            }

        });

    }

    window.addEventListener(
        "scroll",
        revealOnScroll
    );

    revealOnScroll();


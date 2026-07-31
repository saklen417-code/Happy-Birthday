const surpriseBtn = document.getElementById("surpriseBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

/* Surprise button click */

surpriseBtn.addEventListener("click", function () {

```
popup.classList.add("show");

createConfetti();
```

});

/* Close button click */

closeBtn.addEventListener("click", function () {

```
popup.classList.remove("show");
```

});

/* Popup ke bahar click karne par close */

popup.addEventListener("click", function (event) {

```
if (event.target === popup) {

    popup.classList.remove("show");

}
```

});

/* Escape key se popup close */

document.addEventListener("keydown", function (event) {

```
if (event.key === "Escape") {

    popup.classList.remove("show");

}
```

});

/* Confetti animation */

function createConfetti() {

```
for (let i = 0; i < 80; i++) {

    const confetti = document.createElement("span");

    confetti.innerHTML = "💗";

    confetti.style.position = "fixed";

    confetti.style.left =
    Math.random() * 100 + "vw";

    confetti.style.top = "-50px";

    confetti.style.fontSize =
    Math.random() * 20 + 15 + "px";

    confetti.style.zIndex = "200";

    confetti.style.pointerEvents = "none";

    confetti.style.transition =
    "top 3s linear, transform 3s linear, opacity 3s";

    document.body.appendChild(confetti);


    setTimeout(function () {

        confetti.style.top = "110vh";

        confetti.style.transform =
        "rotate(" +
        Math.random() * 720 +
        "deg)";

        confetti.style.opacity = "0";

    }, 50);


    setTimeout(function () {

        confetti.remove();

    }, 3200);

}
```

}document.addEventListener("DOMContentLoaded", function(){

```
const surpriseButton =
    document.querySelector("button");

const popup =
    document.getElementById("popup");

const closeButton =
    document.querySelector(".close");


surpriseButton.addEventListener(
    "click",
    function(){

        popup.style.display = "flex";

    }
);


closeButton.addEventListener(
    "click",
    function(){

        popup.style.display = "none";

    }
);


popup.addEventListener(
    "click",
    function(event){

        if(event.target === popup){

            popup.style.display = "none";

        }

    }
);
```

});


const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const box = document.querySelector(".box");

btn1.addEventListener("click", function () {
    box.style.setProperty("--animation-state", "running");
});

btn2.addEventListener("click", function () {
    box.style.setProperty("--animation-state", "paused");
});
$(".box").click(function () {
    $("body").css("background", "conic-gradient(from var(--angle), green, blue, red, green)")
});

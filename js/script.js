document.addEventListener("DOMContentLoaded", () => {
    const text = "𐍈𐍂𐍉𐍀𐌴 𐌲𐌰𐍄𐍄𐍉";
    let index = 0;
    const btn = document.getElementById("welcomeBtn");

    function typeWriter() {
        if (index < text.length) {
            btn.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();

    btn.addEventListener("click", () => {
        document.querySelector(".main-image").classList.add("show");
        confetti({
            particleCount: 400,
            spread: 1000,
            origin: { y: 0.5, x: 0.5 },
            colors: ["#000", "#FFF"]
        });
    });
});

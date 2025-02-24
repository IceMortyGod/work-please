const trailColors = ["#FF0000", "#FFFFFF"];
let trails = [];

document.addEventListener("mousemove", (event) => {
    const trail = document.createElement("div");
    trail.classList.add("trail");
    document.body.appendChild(trail);

    trail.style.left = `${event.clientX}px`;
    trail.style.top = `${event.clientY}px`;
    trail.style.backgroundColor = trailColors[Math.floor(Math.random() * trailColors.length)];

    setTimeout(() => {
        trail.remove();
    }, 500);
});

const style = document.createElement("style");
style.innerHTML = `
.trail {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    pointer-events: none;
    opacity: 0.7;
    transition: transform 0.1s, opacity 0.5s;
}
`;
document.head.appendChild(style);

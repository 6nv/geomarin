export function setColor(path, button, color) {
    path.setAttribute('fill', color);
    button.style.background = color;
}
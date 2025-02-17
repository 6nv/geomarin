export function setColor(path: SVGElement, button: HTMLDivElement, color: string): void {
    path.setAttribute('fill', color);
    button.style.background = color;
}
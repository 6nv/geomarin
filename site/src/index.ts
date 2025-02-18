import { COLORS, STATIC_PATHS } from './globals';
import { setColor } from './lib';

window.addEventListener('load', main);

function main(): void {
  console.log('Loaded!');
  const map = document.getElementById('marin-map')!,
    buttonContainer = document.getElementById('buttons')!,
    doc = (map as HTMLObjectElement).contentDocument!,
    paths = doc.getElementsByTagNameNS('http://www.w3.org/2000/svg', 'path'),
    filteredPaths = Array.from(paths).filter(path => !STATIC_PATHS.includes(path.id)).sort((a, b) => a.id.localeCompare(b.id)),
    territories: { [k: string]: SVGElement } = {};
  filteredPaths.forEach(path => {
    territories[path.id] = path;
    const button = document.createElement('div');
    button.setAttribute('class', 'button')
    buttonContainer.append(button);
    button.innerText = path.id;
    button.addEventListener('mouseenter', () => setColor(path, button, COLORS.HOVER));
    button.addEventListener('mouseleave', () => setColor(path, button, COLORS.DEFAULT));
    button.addEventListener('mousedown', () => setColor(path, button, COLORS.ACTIVE));
    button.addEventListener('mouseup', () => setColor(path, button, COLORS.HOVER));
    path.style.cursor = 'pointer';
    path.addEventListener('mouseenter', () => setColor(path, button, COLORS.HOVER));
    path.addEventListener('mouseleave', () => setColor(path, button, COLORS.DEFAULT));
    path.addEventListener('mousedown', () => setColor(path, button, COLORS.ACTIVE));
    path.addEventListener('mouseup', () => setColor(path, button, COLORS.HOVER));
  });
}
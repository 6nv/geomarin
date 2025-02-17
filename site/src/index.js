import { ACTIVE_COLOR, DEFAULT_COLOR, HOVER_COLOR } from './globals';
import { setColor } from './lib';

window.addEventListener('load', main);

function main() {
    console.log('Loaded!');
    const map = document.getElementById('marin-map'),
        buttonContainer = document.getElementById('buttons');
    if (map instanceof HTMLObjectElement) {
        const doc = map.contentDocument,
            paths = doc.getElementsByTagNameNS('http://www.w3.org/2000/svg', 'path'),
            filterOut = [
                'Water',
                'Coastal Marin',
                'Outer Territory',
                'Marin County',
            ],
            filteredPaths = [...paths].filter(path => !filterOut.includes(path.id)).sort((a, b) => a.id.localeCompare(b.id)),
            territories = {};
        filteredPaths.forEach(path => {
            territories[path.id] = path;
            const button = document.createElement('div');
            button.setAttribute('class', 'button')
            buttonContainer.append(button);
            button.innerText = path.id;
            button.addEventListener('mouseenter', () => setColor(path, button, HOVER_COLOR));
            button.addEventListener('mouseleave', () => setColor(path, button, DEFAULT_COLOR));
            button.addEventListener('mousedown', () => setColor(path, button, ACTIVE_COLOR));
            button.addEventListener('mouseup', () => setColor(path, button, HOVER_COLOR));
            path.style.cursor = 'pointer';
            path.addEventListener('mouseenter', () => setColor(path, button, HOVER_COLOR));
            path.addEventListener('mouseleave', () => setColor(path, button, DEFAULT_COLOR));
            path.addEventListener('mousedown', () => setColor(path, button, ACTIVE_COLOR));
            path.addEventListener('mouseup', () => setColor(path, button, HOVER_COLOR));
        });
    }
}
window.addEventListener('load', main);

function main() {
    console.log('Loaded!');
    const map = document.getElementById('marin-map');
    if (map instanceof HTMLObjectElement) {
        const doc = map.contentDocument,
            paths = doc.getElementsByTagNameNS('http://www.w3.org/2000/svg', 'path'),
            filterOut = [
                'Water',
                'Coastal Marin',
                'Outer Territory',
                'Marin County',
            ],
            filteredPaths = [...paths].filter(path => !filterOut.includes(path.id)),
            territories = {};
        filteredPaths.forEach(path => {
            territories[path.id] = path;
            path.style.cursor = 'pointer';
            path.addEventListener('mouseenter', () => path.setAttribute('fill', '#cdcdcd'));
            path.addEventListener('mouseleave', () => path.setAttribute('fill', '#f2f2f2'));
            path.addEventListener('mousedown', () => path.setAttribute('fill', '#eeffaa'));
            path.addEventListener('mouseup', () => path.setAttribute('fill', '#cdcdcd'));
        });
    }
}
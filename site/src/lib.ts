import global from './globals';

/**
 * Function library for GeoMarin.
 */
export namespace Lib {
  /**
   * Set the color of an SVG and corresponding HTML elements.
   */
  function setColor(path: SVGElement, button: HTMLDivElement, color: string): void {
    path.setAttribute('fill', color);
    button.style.background = color;
  }
  /**
   * Set the color-responsive behavior for cursor events.
   */
  export function setColorBehavior(path: SVGElement, button: HTMLDivElement): void {
    button.addEventListener('mouseenter', () => setColor(path, button, global.colors.hover));
    button.addEventListener('mouseleave', () => setColor(path, button, global.colors.default));
    button.addEventListener('mousedown', () => setColor(path, button, global.colors.active));
    button.addEventListener('mouseup', () => setColor(path, button, global.colors.hover));
    path.addEventListener('mouseenter', () => setColor(path, button, global.colors.hover));
    path.addEventListener('mouseleave', () => setColor(path, button, global.colors.default));
    path.addEventListener('mousedown', () => setColor(path, button, global.colors.active));
    path.addEventListener('mouseup', () => setColor(path, button, global.colors.hover));
  }
}
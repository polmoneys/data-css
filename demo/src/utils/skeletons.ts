import { html, render, svg } from 'lit-html';
import { Shape } from './shape';

interface Params {
    lines: number;
}

export function renderSkeletons(params: Params) {
    render(
        Line(params.lines),
        document.querySelector<HTMLDivElement>('.skeleton-1')!,
    );
    render(Line(5), document.querySelector<HTMLDivElement>('.skeleton-2')!);
    render(Line(5), document.querySelector<HTMLDivElement>('.skeleton-3')!);
    render(Line(5), document.querySelector<HTMLDivElement>('.skeleton-4')!);
}

export function Icon() {
    const opts = {
        vertices: 3, // sides
        fill: 'var(--group-content-color)',
        size: 15,
        transforms: 'translateY(2px)',
    };
    return svg`
      ${Shape(opts)}
    `;
}

export function Avatar(size: number = 100) {
    return Shape({ vertices: 22, size: size, fill: 'currentColor' });
}

export function HeadLine() {
    return html`<h2 class="headline" />`;
}
export function Line(times: number = 1, short?: boolean) {
    return html` ${[...Array(times)].map(
        (_) => html`<p class="text ${short ? 'text-short' : ''}" />`,
    )}`;
}
export function Action() {
    return html` <button>${Line()}</button> `;
}

import { html } from 'lit-html';
import { Line } from '../utils/skeletons';

export function Fonts() {
    return html`
        ${Line(1)}
        <div data-group="flex" data-gap="xl" data-place-items="baseline">
            <p data-font="xs">Aa AA</p>
            <p data-font="sm">Aa AA</p>
            <p data-font="md">Aa AA</p>
            <p data-font="">Aa AA</p>
            <p data-font="lg">Aa AA</p>
            <p data-font="xl">Aa AA</p>
            <p data-font="xxl">Aa AA</p>
        </div>
        ${Line(3)}
    `;
}

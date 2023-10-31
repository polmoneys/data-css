import { html } from 'lit-html';
import { Shape } from '../utils/shape';

export function GridDense() {
    return html`
        <div
            data-grid-dense
            data-gap="xl"
            data-group="grid"
            style="width:100%;min-height:60vh;grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(3, 100px)"
        >
            ${Cell(14)}
        </div>
    `;
}

function Cell(times: number = 1) {
    return html` ${[...Array(times)].map(
        (_, index: number) =>
            html`<div
                data-group="grid"
                data-paper
                data-paper-outline
                data-place-items="center"
                data-place-content="center"
                style="min-height: 100px;${[3, 7, 9].includes(index)
                    ? 'grid-column: 2 / span 2;'
                    : ''}${[4, 7, 11].includes(index)
                    ? 'grid-row: span 2;'
                    : ''}"
            >
                ${Shape({
                    vertices: 5,
                })}
            </div>`,
    )}`;
}

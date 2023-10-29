import { html } from 'lit-html';
import { Line } from '../utils/skeletons';

export function Reset() {
    return html`
        <p data-font>box-sizing:border-box</p>
        ${Line(2)}
    `;
}

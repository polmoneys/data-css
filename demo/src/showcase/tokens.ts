import { html } from 'lit-html';
import { Line } from '../utils/skeletons';

export function Tokens() {
    return html`
        <p data-font>Don't overdo it</p>
        ${Line(2)}
    `;
}

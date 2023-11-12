import { html } from 'lit-html';
import { Line } from './skeletons';

export function Soon() {
    return html`${Line(4)}
        <p data-font>Docs incoming</p> `;
}

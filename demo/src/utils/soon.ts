import { html } from 'lit-html';
import { Line } from './skeletons';

export function Soon() {
    return html` <p data-font>Docs incoming</p>
        <div data-paper-color="" data-paper="error">${Line(4)}</div>`;
}

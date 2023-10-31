import { html } from 'lit-html';
import { Line } from '../utils/skeletons';

export function Progress() {
    return html`
        ${Line(1)}

        <div data-group="flex" data-flex="column" data-gap="xl">
            <progress max="100" value="10">10%</progress>
            <progress max="100" value="20">20%</progress>
            <progress max="100" value="30">30%</progress>
            <progress max="100" value="50">50%</progress>
            <progress max="100" value="60">60%</progress>
            <progress max="100" value="90">90%</progress>
            <progress max="100" value="100">100%</progress>
        </div>
        ${Line(1)}
    `;
}

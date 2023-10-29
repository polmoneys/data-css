import { html } from 'lit-html';
import { Line } from '../utils/skeletons';

export function Article() {
    return html`
        ${Line(3)}
        <div
            data-article=""
            data-gap="md"
            data-border-shadow="outer"
            data-padding="y"
            data-hero
        >
            ${Line(5)}${Line(1, true)}${Line(5)}
            <img
                src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt=" "
            />
            ${Line(1, true)}${Line(5)}
        </div>
        ${Line(3)}
    `;
}

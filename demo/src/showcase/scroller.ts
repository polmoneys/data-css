import { html } from 'lit-html';
import { Line } from '../utils/skeletons';

export function Scroller() {
    // class="${orientation === 'portrait' ? 'fix-portrait-card-height' : ''}"

    const onScroll = (event: any) => {
        event.target.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'center',
        });
    };

    return html`
        <div aria-hidden="true">${Line(4)}</div>
        <div data-scroller="">
            <div>
                ${[...Array(12)].map(
                    (_x, number) =>
                        html`<div
                            data-ratio="portrait"
                            style="--scroller-max-inline-size:10rem"
                            data-place-items="start"
                            data-padding="xy"
                            data-place-content="start"
                            data-paper
                            data-font="xxxl"
                        >
                            <img
                                @click=${{ handleEvent: onScroll }}
                                data-avatar-size="${number < 4
                                    ? 'lg'
                                    : [10, 11, 12].includes(number)
                                    ? 'sm'
                                    : ''}"
                                src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                                alt=" "
                            />
                        </div>`,
                )}
            </div>
        </div>
        ${Line(8)}
        <div data-scroller="">
            <div>
                ${[...Array(12)].map(
                    (_num, number) =>
                        html` <div
                            data-ratio="landscape"
                            data-scroller-item="${[0, 1, 2, 10].includes(number)
                                ? 'lg'
                                : [6, 7, 12].includes(number)
                                ? 'sm'
                                : ''}"
                        >
                            <picture>
                                <img
                                    src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                                    alt=" "
                                />
                            </picture>
                        </div>`,
                )}
            </div>
        </div>
        ${Line(1)}
    `;
}

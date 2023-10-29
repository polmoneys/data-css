import { html, render } from 'lit-html';
import { CardUI } from './skeletons';
import { store } from '../../store';
import { renderMenu } from '../../utils/controls';
import { renderCardGrid } from './grid';

export function renderCard() {
    render(Card(), document.querySelector<HTMLDivElement>('article')!);
    renderMenu();
    renderCardGrid(false);
}

export function Card() {
    const { orientation } = store.getState();

    return html` <div
        class="${orientation === 'portrait' ? 'fix-portrait-card-height' : ''}"
    >
        <div data-group="" data-card="" data-ratio="${orientation}">
            ${CardContent()}
        </div>
    </div>`;
}

function CardContent() {
    const { variant } = store.getState();
    switch (variant) {
        case 'actions':
            return html` ${CardUI.Content()} ${CardUI.Actions()} `;
        case 'pic':
            return html` ${CardUI.Pic()}
                <div class="pin-avatar">${CardUI.Avatar()}</div>`;
        case 'pic-content':
            return html` ${CardUI.Pic()} ${CardUI.Content()} `;
        case 'pic-reorder':
            return html` ${CardUI.Pic()} ${CardUI.Content(true)} `;
        default:
            return html``;
    }
}

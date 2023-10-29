import { html, render } from 'lit-html';
import { VariantPanel } from '../../interfaces/state';
import { PanelUI } from './skeletons';
import { store } from '../../store';
import { renderMenu } from '../../utils/controls';
import { renderCardGrid } from '../card/grid';

export function renderPanel() {
    render(Panel(), document.querySelector<HTMLDivElement>('article')!);
    renderMenu();
    renderCardGrid(true);
}

function Panel() {
    return html`
        <div id="controls">
            <h2></h2>
            <nav></nav>
        </div>
        <div data-group="" data-panel="">${PanelContent()}</div>
    `;
}

function PanelContent() {
    const { variantPanel } = store.getState();

    switch (variantPanel) {
        case 'actions':
            return html` ${PanelUI.Content()} ${PanelUI.Actions()} `;
        case 'actions-reorder' as VariantPanel:
            return html` ${PanelUI.Content()}${PanelUI.Actions(true)} `;
        case 'input' as VariantPanel:
            return html` ${PanelUI.Content(true, true)} ${PanelUI.Actions()} `;
        default:
            return html` ${PanelUI.Content()}`;
    }
}

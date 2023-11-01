import { html, render } from 'lit-html';
import { Card, Group, Panel, Ratio } from './actions';
import { store } from '../store';

export function renderMenu() {
    render(Nav(), document.querySelector<HTMLDivElement>('#controls nav')!);
    render(Title(), document.querySelector<HTMLDivElement>('#controls h2')!);
}

function Nav() {
    const { variant, variantPanel, orientation } = store.getState();

    const urlParams = new URLSearchParams(window.location.search);
    const snippet = urlParams.get('snippet');
    const isCard = snippet === 'card';
    const isPanel = snippet === 'panel';

    return html`
        ${Group()} ${isCard ? Card(variant) : Card(variant, true)}
        ${isCard ? Ratio(orientation) : Ratio(orientation, true)}
        ${isPanel ? Panel(variantPanel) : Panel(variantPanel, true)}
    `;
}

function Title() {
    const urlParams = new URLSearchParams(window.location.search);
    const snippet = urlParams.get('snippet');
    const description =
        snippet === 'card' ? 'content with ratio' : 'interactive elements';

    return html` <strong>${`${snippet}:`}</strong> groups ${description}`;
}

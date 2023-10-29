import { html, render } from 'lit-html';
import { Shape } from '../utils/shape';
import { Line } from '../utils/skeletons';
import { snippetKindToShape } from '../utils';
import { Icon } from '../utils/icon';
import { Snippet, SnippetKind, Snippets } from '../interfaces/snippet';
import { dispatch, store } from '../store';
import SNIPPETS from '../snippets';

interface SnippetsList {
    label: string;
    snippets: Snippets;
}

export function renderSnippets(props: SnippetsList) {
    render(
        SnippetsList(props),
        document.querySelector<HTMLDivElement>('article')!,
    );
}

function SnippetsList(props: SnippetsList) {
    const { label, snippets } = props;
    return html`
        <ul role="list" aria-label=${label} data-group="" data-list="">
            ${snippets
                .filter((snippet) => !snippet.hidden)
                .map((snippet) => Item(snippet))}
        </ul>
    `;
}

function Item(props: Snippet) {
    const { value, label, kind, description } = props;

    const onSelectKind = (kind: SnippetKind) => {
        const { kind: kindStore } = store.getState();
        if (kindStore !== kind) {
            dispatch(store, 'SET_KIND', kind);
            const nextFiltered = SNIPPETS.filter(
                (snippet) => snippet.kind === kind,
            );
            dispatch(store, 'FILTERED', nextFiltered);
        } else {
            dispatch(store, 'SET_KIND', undefined);
            dispatch(store, 'FILTERED', SNIPPETS);
        }
    };
    // divider
    if (value === '')
        return html`
            <li data-list-item="">
                <div>
                    <div data-list-item-divider="">${Line(1, true)}</div>
                </div>
            </li>
        `;

    return html` <li data-list-item="">
        ${html`<div data-list-item-start="">
            <button
                type="button"
                data-button="circle"
                data-paper="transparent"
                @click=${{ handleEvent: () => onSelectKind(kind) }}
            >
                ${Shape({
                    ...snippetKindToShape(kind),
                    size: 24,
                    fill: 'currentColor',
                })}
            </button>
        </div>`}
        <div data-padding="x">
            <h2>${label}</h2>
            <p>${description}</p>
        </div>
        ${html`<div data-list-item-end="">
            <a href=${`?snippet=${value}`}>
                ${Icon({ d: 'chevronRight', size: 42, label: 'Ico label' })}</a
            >
        </div>`}
    </li>`;
}

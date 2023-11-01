import { html, render } from 'lit-html';
import { Shape } from '../utils/shape';
import { Line } from '../utils/skeletons';
import { snippetKindToShape } from '../utils';
import { Icon } from '../showcase/icon';
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
        <ul
            id="snippets-list"
            role="list"
            aria-label=${label}
            data-group=""
            data-list=""
        >
            ${snippets.length === 0
                ? html` <li data-list-item="">
                      <div><p data-font="lg">No results</p></div>
                  </li>`
                : html``}
            ${snippets.map((snippet) => Item(snippet))}
        </ul>
    `;
}

function Item(props: Snippet) {
    const { value, label, kind, description } = props;
    const { kind: kindStore } = store.getState();

    const onSelectKind = (kind: SnippetKind) => {
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

    // data-animation-wiggle
    return html` <li data-list-item="">
        <div data-list-item-start="">
            <button
                type="button"
                data-paper="transparent"
                @click=${{ handleEvent: () => onSelectKind(kind) }}
            >
                ${Shape({
                    ...snippetKindToShape(kind),
                    size: 24,
                    fill:
                        kind === kindStore ? 'var(--red-100)' : 'currentColor',
                })}
            </button>
        </div>
        <div data-padding="x">
            <h2>${label}</h2>
            ${description === '' ? html`` : html` <p>${description}</p>`}
        </div>
        <div data-list-item-end="">
            <a href=${`?snippet=${value}`}>
                ${Icon({ d: 'chevronRight', size: 42, label: 'Ico label' })}</a
            >
        </div>
    </li>`;
}

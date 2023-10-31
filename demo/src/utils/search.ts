import { html, render } from 'lit-html';
import { store } from '../store';

export function renderSearchResults() {
    render(
        SearchResults(),
        document.querySelector<HTMLDivElement>('#search-results-container')!,
    );
}

function SearchResults() {
    const { suggestions } = store.getState();
    if (suggestions.length === 0) return html``;
    return html`
        <ul id="search-results">
            ${suggestions?.map(
                (snippet) => html`
                    <li>
                        <svg width="28" height="28" focusable="false" data-icon>
                            <use href="./sprite.svg#pin" />
                        </svg>
                        <a href=${`?snippet=${snippet.value}`}
                            >${snippet.label}</a
                        >
                    </li>
                `,
            )}
        </ul>
    `;
}

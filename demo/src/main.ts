import { dispatch, store } from './store';

import '../../package/src/theme/data-reset.css';
import '../../package/src/theme/data-tokens.css';

import '../../package/src/form/data-button.css';
import '../../package/src/form/data-checkbox.css';
import '../../package/src/form/data-input.css';
import '../../package/src/form/data-radio.css';
import '../../package/src/form/data-progress.css';
import '../../package/src/form/data-range.css';
import '../../package/src/form/data-select.css';
import '../../package/src/form/data-switch.css';

import '../../package/src/group/data-actionsheet.css';
import '../../package/src/group/data-article.css';
import '../../package/src/group/data-card.css';
import '../../package/src/group/data-group.css';
import '../../package/src/group/data-list.css';
import '../../package/src/group/data-panel.css';
import '../../package/src/group/data-panes.css';
import '../../package/src/group/data-scroller.css';
import '../../package/src/group/data-table.css';
import '../../package/src/group/data-tabs.css';
import '../../package/src/group/data-tray.css';

import '../../package/src/media/data-avatar.css';
import '../../package/src/media/data-hero.css';
import '../../package/src/media/data-icon.css';
import '../../package/src/media/data-spinner.css';

import '../../package/src/utils/data-animations.css';
import '../../package/src/utils/data-block-flow.css';
import '../../package/src/utils/data-border.css';
import '../../package/src/utils/data-elevation.css';
import '../../package/src/utils/data-fit.css';
import '../../package/src/utils/data-font.css';
import '../../package/src/utils/data-gap.css';
import '../../package/src/utils/data-hide.css';
import '../../package/src/utils/data-margin-auto.css';
import '../../package/src/utils/data-mask.css';
import '../../package/src/utils/data-overflow.css';
import '../../package/src/utils/data-padding.css';
import '../../package/src/utils/data-place.css';
import '../../package/src/utils/data-print.css';
import '../../package/src/utils/data-ratio.css';
import '../../package/src/utils/data-util.css';

import '../../package/src/theme/data-theme.css';
import '../../package/src/theme/data-colors.css';
import '../../package/src/theme/data-gradient.css';
import '../../package/src/theme/data-paper.css';

// import '../../package/dist/merged.css';

import './utils/actions.css';
import './utils/skeletons.css';
import './layout.css';

import { renderSnippets } from './pages';
import { renderDetail } from './pages/detail';
import { renderCard } from './showcase/card';
import { renderPanel } from './showcase/panel';
import { initialState } from './store/initialState';
import { ActionTypes } from './interfaces/state';
import { $, COLORLESS, emptyNode } from './utils';
import { renderSearchResults } from './utils/search';
import { renderColorPicker } from './utils/actions';
import { renderLab } from './pages/lab';

store.subscribe(loop);

function onClear() {
    const input = $('#q');
    if (input != null) {
        (input as HTMLInputElement).value = '';
    }
    dispatch(store, ActionTypes.FILTERED, initialState.filtered);
    dispatch(store, ActionTypes.SUGGESTIONS, []);
    dispatch(store, ActionTypes.SET_OUTPUT, []);
}

function update(event: Event) {
    const value = (event.target as HTMLInputElement)?.value;
    const sanitized = value.replace(/[^a-zA-Z]/g, '').toLowerCase();

    if (sanitized !== '') {
        const results = initialState.filtered.filter((snip) => {
            return snip.value.startsWith(sanitized);
        });

        if (results.length > 0) {
            dispatch(store, ActionTypes.FILTERED, results);
            dispatch(store, ActionTypes.SUGGESTIONS, results);
        } else {
            dispatch(store, ActionTypes.FILTERED, initialState.filtered);
            dispatch(store, ActionTypes.SUGGESTIONS, []);
        }
    } else {
        dispatch(store, ActionTypes.SUGGESTIONS, []);
    }
}

function loop() {
    const { filtered } = store.getState();
    const urlParams = new URLSearchParams(window.location.search);
    const snippet = urlParams.get('snippet');

    renderSearchResults();

    // landing
    if (snippet === null) {
        emptyNode('#controls');
        renderSnippets({
            label: 'Featured snippets',
            snippets: filtered,
        });
        return;
    }

    // detail
    emptyNode('h1');

    // detail specific nav
    const menu = $('#controls');
    if (['card', 'panel'].includes(snippet)) {
        if (menu != null) {
            menu.classList.add('show');
        }

        if (snippet === 'card') {
            renderCard();
        }
        if (snippet === 'panel') {
            renderPanel();
        }
    } else {
        if (menu != null) {
            menu.classList.remove('show');
        }
        if (snippet === 'lab') {
            renderLab();
        } else {
            renderDetail(snippet);
        }
        if (!COLORLESS.includes(snippet)) {
            renderColorPicker();
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // search
    const btn = $('#clear-input');
    if (btn != null) {
        btn.addEventListener('click', onClear);
    }
    const searchInput = $('#q');
    if (searchInput != null) {
        searchInput.addEventListener('input', update);
    }

    loop();
});

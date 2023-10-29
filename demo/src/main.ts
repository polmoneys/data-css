import { dispatch, store } from './store';
import { autocomp } from '@knadh/autocomp';

import '../../package/src/data-reset.css';
import '../../package/src/data-tokens.css';

import '../../package/src/form/index.css';
import '../../package/src/form/data-button.css';
import '../../package/src/form/data-checkbox.css';
import '../../package/src/form/data-input.css';
import '../../package/src/form/data-radio.css';
import '../../package/src/form/data-range.css';
import '../../package/src/form/data-select.css';
import '../../package/src/form/data-switch.css';

import '../../package/src/group/data-actionsheet.css';
import '../../package/src/group/data-article.css';
import '../../package/src/group/data-card.css';
import '../../package/src/group/data-group.css';
import '../../package/src/group/data-list.css';
import '../../package/src/group/data-panel.css';
import '../../package/src/group/data-scroller.css';
import '../../package/src/group/data-table.css';
import '../../package/src/group/data-tabs.css';
import '../../package/src/group/data-tray.css';

import '../../package/src/media/data-avatar.css';
import '../../package/src/media/data-hero.css';
import '../../package/src/media/data-icon.css';

import '../../package/src/utils/data-block-flow.css';
import '../../package/src/utils/data-border.css';
import '../../package/src/utils/data-fit.css';
import '../../package/src/utils/data-font.css';
import '../../package/src/utils/data-gap.css';
import '../../package/src/utils/data-hide.css';
import '../../package/src/utils/data-margin-auto.css';
import '../../package/src/utils/data-mask.css';
import '../../package/src/utils/data-overflow.css';
import '../../package/src/utils/data-padding.css';
import '../../package/src/utils/data-paper.css';
import '../../package/src/utils/data-place.css';
import '../../package/src/utils/data-print.css';
import '../../package/src/utils/data-ratio.css';
import '../../package/src/utils/data-reorder.css';
import '../../package/src/utils/data-util.css';
// import '../../package/dist/merged.css';

import './utils/actions.css';
import './utils/skeletons.css';
import './layout.css';

import { renderSnippets } from './pages';
import { renderDetail } from './pages/detail';
import { $, emptyNode } from './utils';
import SNIPPETS from './snippets';
import { renderCard } from './showcase/card';
import { renderPanel } from './showcase/panel';

store.subscribe(loop);
// const unsubscribe = store.subscribe(loop);

// todo: git push -u origin unicorn

function onClear() {
    const input = $('#q input');
    if (input != null) {
        (input as HTMLInputElement).value = '';
    }
    dispatch(store, 'FILTERED', SNIPPETS);
}

function loop() {
    const { filtered } = store.getState();
    const urlParams = new URLSearchParams(window.location.search);
    const snippet = urlParams.get('snippet');

    // search
    autocomp($('#q'), {
        // https://github.com/knadh/autocomp.js/blob/master/docs/index.html
        onQuery: async (val: any) => {
            const value = filtered.filter((snip) =>
                snip.value.startsWith(val.toLowerCase()),
            );
            if (snippet === null) {
                dispatch(store, 'FILTERED', value);
            }
            return value;
        },

        // Link vs. https://developer.mozilla.org/en-US/docs/Web/API/History/pushState
        // onSelect: (o: any) => {
        //     const input = $('#q') as HTMLInputElement;
        //     if (input != null) {
        //         input.value = o.value;
        //     }
        //     return o.value;
        // },

        onRender: (o: any) => {
            const ul = document.createElement('ul');
            ul.dataset.list = '';
            const dot = document.createElement('span');
            dot.innerHTML = `<svg
                                    width="28"
                                    height="28"
                                    focusable="false"
                                    data-icon
                                >
                                    <use href="./sprite.svg#pin" />
                                </svg>`;
            dot.dataset.listItemStart = '';
            const link = document.createElement('a');
            link.href = `?snippet=${o.value}`;
            link.appendChild(document.createTextNode(o.label));
            const li = document.createElement('li');
            li.dataset.listItem = '';
            li.appendChild(dot);
            li.appendChild(link);
            ul.appendChild(li);

            return li;
        },
    });

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
        renderDetail(snippet);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // search
    const btn = document.querySelector('#clear-input');
    if (btn != null) {
        btn.addEventListener('click', onClear);
    }
    loop();
});

import { html, render } from 'lit-html';
import {
    ActionTypes,
    Orientations,
    Variant,
    VariantPanel,
} from '../interfaces/state';
import { Shape } from './shape';
import { $ } from '.';
import { store, dispatch } from '../store';
import { renderCard } from '../showcase/card';
import { renderPanel } from '../showcase/panel';

export function Group() {
    const urlParams = new URLSearchParams(window.location.search);
    const snippet = urlParams.get('snippet');

    const isCard = snippet === 'card';
    const onButtonChange = (event: any) => {
        const nextGroup = event.target.dataset.option;

        if (snippet === nextGroup) {
            return;
        }
        const url = new URL(document.location.href);
        url.searchParams.set('snippet', nextGroup);
        history.pushState({}, '', url);

        if (nextGroup === 'card') {
            renderCard();
        } else {
            renderPanel();
        }
    };

    return html`
        <div class="subnav bi">
            <button
                data-side="bottom"
                data-nav="group"
                data-option="card"
                @click=${{ handleEvent: onButtonChange }}
            >
                ${Shape({
                    vertices: 3,
                    size: 45,
                    transforms: 'translateX(10px)',
                    fill: isCard ? 'var(--red-100)' : 'currentColor',
                })}
            </button>
            <button
                data-side="bottom"
                data-nav="group"
                data-option="panel"
                @click=${{ handleEvent: onButtonChange }}
            >
                ${Shape({
                    vertices: 4,
                    size: 45,
                    transforms: 'translateX(10px)',
                    fill: !isCard ? 'var(--red-100)' : 'currentColor',
                })}
            </button>
        </div>
    `;
}

export function Card(variant: Variant, empty?: boolean) {
    const onContentChange = (event: any) => {
        const v = Number(event.target.value);
        if (v === 0) return dispatch(store, ActionTypes.SET_VARIANT, 'pic');
        if (v === 5)
            return dispatch(store, ActionTypes.SET_VARIANT, 'pic-content');
        if (v === 10)
            return dispatch(store, ActionTypes.SET_VARIANT, 'pic-reorder');
        if (v === 15)
            return dispatch(store, ActionTypes.SET_VARIANT, 'actions');
    };

    const matchVariantToValue = (variant: Variant) => {
        const dict = {
            pic: 0,
            'pic-content': 5,
            'pic-reorder': 10,
            actions: 15,
        };
        return dict[variant];
    };
    if (empty) return html``;

    return html`
        <label>
            <input
                type="range"
                min="0"
                max="15"
                value="${matchVariantToValue(variant)}"
                step="5"
                id="range"
                @input=${{ handleEvent: onContentChange }}
                list="markers"
            />
        </label>
        <datalist id="markers">
            <option value="0"></option>
            <option value="5"></option>
            <option value="10"></option>
            <option value="15"></option>
            <option value="20"></option>
        </datalist>
    `;
}

export function Panel(variant: VariantPanel, empty?: boolean) {
    const onContentChange = (event: any) => {
        const nextValue = Number(event.target.value);
        switch (nextValue) {
            case 0:
                return dispatch(
                    store,
                    ActionTypes.SET_VARIANT_PANEL,
                    'actions',
                );
            case 10:
                return dispatch(
                    store,
                    ActionTypes.SET_VARIANT_PANEL,
                    'actions-reorder',
                );
            case 20:
            default:
                return dispatch(store, ActionTypes.SET_VARIANT_PANEL, 'input');
        }
    };

    const currentValue = {
        actions: 0,
        'actions-reorder': 5,
        input: 10,
    }[variant];

    if (empty) return html``;

    return html`
        <label>
            <input
                type="range"
                min="0"
                max="20"
                value="${currentValue}"
                step="10"
                id="range"
                @input=${{ handleEvent: onContentChange }}
                list="markers"
            />
        </label>
        <datalist id="markers">
            <option value="0"></option>
            <option value="10"></option>
            <option value="20"></option>
        </datalist>
    `;
}

export function Ratio(orientation: Orientations, empty?: boolean) {
    const isSquare = orientation === 'square';
    const isPortrait = orientation === 'portrait';
    const isLandscape = orientation === 'landscape';

    const onButtonChange = (event: any) => {
        const { nav, option } = event.target.dataset;
        if (nav === 'ratio') {
            dispatch(store, ActionTypes.SET_ORIENTATION, option);
        }
    };
    if (empty) return html``;
    return html`
        <div class="subnav">
            <button
                data-nav="ratio"
                data-option="square"
                @click=${{ handleEvent: onButtonChange }}
            >
                <svg viewBox="0 0 64 64" width="64" height="64">
                    <rect
                        x="10"
                        y="10"
                        width="44"
                        height="44"
                        fill="${isSquare ? 'var(--red-100)' : 'currentColor'}"
                        rx="2"
                    />
                </svg>
            </button>

            <button
                data-nav="ratio"
                data-option="portrait"
                @click=${{ handleEvent: onButtonChange }}
            >
                <svg viewBox="0 0 64 64" width="64" height="64">
                    <rect
                        x="10"
                        y="6"
                        width="44"
                        height="52"
                        fill="${isPortrait ? 'var(--red-100)' : 'currentColor'}"
                        rx="2"
                    />
                </svg>
            </button>

            <button
                data-nav="ratio"
                data-option="landscape"
                @click=${{ handleEvent: onButtonChange }}
            >
                <svg viewBox="0 0 64 64" width="64" height="64">
                    <rect
                        x="6"
                        y="14"
                        width="52"
                        height="38"
                        fill="${isLandscape
                            ? 'var(--red-100)'
                            : 'currentColor'}"
                        rx="2"
                    />
                </svg>
            </button>
        </div>
    `;
}

const COLORS = [
    {
        label: 'default',
        value: 'currentColor',
    },
    {
        label: 'red',
        value: 'var(--red-100)',
    },
    {
        label: 'purple',
        value: 'var(--purple-100)',
    },
    {
        label: 'gray',
        value: 'var(--gray-100)',
    },
];

export function renderColorPicker() {
    render(
        ColorPicker(),
        document.querySelector<HTMLDivElement>(
            'section > header div:first-of-type',
        )!,
    );
}

function ColorPicker() {
    const onButtonChange = (event: any) => {
        const { swatch } = event.target.dataset;

        const className = {
            red: 'error',
            purple: 'focus',
            gray: 'gray',
            default: '',
        }[swatch as string];

        const article = $('article');
        const serachBarContainer = $('header [data-input=""]');
        if (article != null && serachBarContainer != null) {
            article.classList.remove('error', 'focus', 'gray');
            serachBarContainer.classList.remove('error', 'focus', 'gray');

            if (className !== '') {
                article.classList.add(className as string);
                serachBarContainer.classList.add(className as string);
            }
        }
    };

    return html`
        <div data-group="flex" data-gap="sm">
            ${COLORS.map(
                (color) => html`
                    <button
                        data-animation-wiggle-hover
                        data-button="circle"
                        data-fit="comfy-height"
                        data-paper
                        data-paper-outline
                        data-swatch=${color.label}
                        @click=${{ handleEvent: onButtonChange }}
                    >
                        ${Shape({
                            vertices: 8,
                            size: 32,
                            // transforms: 'translateX(10px)',
                            fill: color.value,
                        })}
                    </button>
                `,
            )}
        </div>
    `;
}

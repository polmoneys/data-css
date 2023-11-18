import { SnippetKind } from '../interfaces/snippet';

export const COLORLESS = [
    'paper',
    'tray',
    'action-sheet',
    'reset',
    'tokens',
    'button',
    'group',
    'avatar',
    'scroller',
    'fit',
    'overflow',
    'gap',
    'margin-auto',
    'lab',
];

export function snippetKindToShape(kind: SnippetKind) {
    const config = {
        form: { vertices: 5 },
        utils: { vertices: 7 },
        media: { vertices: 6 },
        theme: { vertices: 3 },
        group: { vertices: 4 },
    }[kind];

    return config;
}

export function emptyNode(selector: string) {
    const target = document.querySelector(selector);
    if (target instanceof HTMLElement) {
        target.innerHTML = '';
    }
}
export function $(selector: string) {
    return document.querySelector(selector);
}

export function $$(selector: string) {
    return [].slice.call(document.querySelectorAll(selector));
}

export function slice(store: any, key: string) {
    return store.getState()[key];
}

export function hasInputDateSupport() {
    const input = document.createElement('input');
    input.type = 'date';
    input.value = 'invalid date value';
    return input.value !== 'invalid date value';
}

export function copyToClipboard(text: string): Promise<void> {
    return navigator.clipboard
        .writeText(text)
        .then(() => {
            console.log('Text copied to clipboard!');
        })
        .catch((error) => {
            console.error('🙏🏽', error);
        });
}

export function updateURLCopyParameter(nextState: 'true' | 'false'): void {
    const urlSearchParams = new URLSearchParams(window.location.search);
    urlSearchParams.set('copy', nextState);
    const newURL = `${window.location.pathname}?${urlSearchParams.toString()}`;
    window.history.replaceState({ path: newURL }, '', newURL);
}

export function pointerCoord(event: any) {
    if (event) {
        const changedTouches = event.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            const touch = changedTouches[0];
            return { x: touch.clientX, y: touch.clientY };
        }
        const pageX = event.pageX;
        if (pageX !== undefined) {
            return { x: pageX, y: event.pageY };
        }
    }
    return { x: 0, y: 0 };
}

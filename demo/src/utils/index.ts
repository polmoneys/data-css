import { SnippetKind } from '../interfaces/snippet';

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

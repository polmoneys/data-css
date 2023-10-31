import { SnippetKind, Snippets } from './snippet';

export const ActionTypes = {
    TOGGLE_THEME: 'TOGGLE_THEME',
    SET_ORIENTATION: 'SET_ORIENTATION',
    SET_GROUP: 'SET_GROUP',
    SET_VARIANT: 'SET_VARIANT',
    SET_VARIANT_PANEL: 'SET_VARIANT_PANEL',
    RESET: 'RESET',
    FILTERED: 'FILTERED',
    SUGGESTIONS: 'SUGGESTIONS',
    SET_KIND: 'SET_KIND',
} as const;

export type Orientations = 'portrait' | 'landscape' | 'ultrawide' | 'square';

export type Groups = 'card' | 'panel';

export type Variant = 'pic' | 'pic-content' | 'actions' | 'pic-reorder';
export type VariantPanel = 'input' | 'actions' | 'actions-reorder';

export interface State {
    lightTheme: boolean;
    orientation: Orientations;
    group?: Groups;
    variant: Variant;
    variantPanel: VariantPanel;
    filtered: Snippets;
    suggestions: Snippets;
    kind?: SnippetKind;
}

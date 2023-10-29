import { SnippetKind, Snippets } from '../interfaces/snippet';
import {
    ActionTypes,
    Orientations,
    Groups,
    Variant,
    VariantPanel,
} from '../interfaces/state';

const setOrientation = (newOrientation?: Orientations) => ({
    type: ActionTypes.SET_ORIENTATION,
    payload: newOrientation,
});
const setVariant = (newVariant: Variant) => ({
    type: ActionTypes.SET_VARIANT,
    payload: newVariant,
});

const setVariantPanel = (newVariant: VariantPanel) => ({
    type: ActionTypes.SET_VARIANT_PANEL,
    payload: newVariant,
});
const setGroup = (newGroup: Groups) => ({
    type: ActionTypes.SET_GROUP,
    payload: newGroup,
});
const toggleTheme = () => ({ type: ActionTypes.TOGGLE_THEME });

// function next(section: boolean | string) {
//     return { type: ActionTypes.UNLOCKED, payload: section };
// }
// function simulation(section = false) {
//     return { type: ActionTypes.TOGGLE_LOADING, payload: section };
// }
// export function unlocked(section: boolean | string) {
//     return function (dispatch: any, _getState: any) {
//         dispatch(simulation(section as boolean));
//         setTimeout(() => {
//             dispatch(next(section as string));
//         }, 1100);
//     };
// }

const setFiltered = (snippets: Snippets) => ({
    type: ActionTypes.FILTERED,
    payload: snippets,
});

const setVisited = (snippets: Snippets) => ({
    type: ActionTypes.VISITED,
    payload: snippets,
});

const setKind = (kind: SnippetKind | undefined) => ({
    type: ActionTypes.SET_KIND,
    payload: kind,
});

export const matchActionToFn = (action: keyof typeof ActionTypes) => {
    switch (action) {
        case ActionTypes.SET_ORIENTATION:
            return setOrientation;
        case ActionTypes.TOGGLE_THEME:
            return toggleTheme;
        case ActionTypes.SET_GROUP:
            return setGroup;
        case ActionTypes.SET_VARIANT:
            return setVariant;
        case ActionTypes.SET_VARIANT_PANEL:
            return setVariantPanel;
        // case ActionTypes.UNLOCKED:
        //     return unlocked;
        case ActionTypes.FILTERED:
            return setFiltered;
        case ActionTypes.VISITED:
            return setVisited;
        case ActionTypes.SET_KIND:
            return setKind;
        default:
            return () => ({});
    }
};

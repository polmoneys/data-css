import SNIPPETS from '../snippets';
import { State } from '../interfaces/state';

export const initialState: State = {
    lightTheme: true,
    orientation: 'landscape',
    group: undefined,
    variant: 'pic',
    variantPanel: 'actions',
    unlocked: [],
    loading: true,
    filtered: SNIPPETS,
    kind: undefined,
    visited: [],
};

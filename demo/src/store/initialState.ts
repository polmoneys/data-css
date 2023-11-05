import SNIPPETS from '../snippets';
import { State } from '../interfaces/state';

export const initialState: State = {
    lightTheme: true,
    orientation: 'landscape',
    group: undefined,
    variant: 'pic',
    variantPanel: 'actions',
    // unlocked: [],
    filtered: SNIPPETS.filter(
        (snippet) => snippet.hidden === undefined || !snippet.hidden,
    ),
    kind: undefined,
    suggestions: [],
    output: [],
};

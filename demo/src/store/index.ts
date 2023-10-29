import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { matchActionToFn } from './actions';
import thunk from 'redux-thunk';
import { initialState } from './initialState';
import { ActionTypes, State } from '../interfaces/state';

export function dispatch(
    store: any,
    action: keyof typeof ActionTypes,
    payload?: any,
) {
    const fn: any = matchActionToFn(action);
    store.dispatch(fn(payload));
}

function reducer(state: State = initialState, action: any) {
    switch (action.type) {
        case ActionTypes.TOGGLE_THEME:
            return {
                ...state,
                lightTheme: !state.lightTheme,
            };
        case ActionTypes.SET_ORIENTATION:
            return {
                ...state,
                orientation: action.payload,
            };
        case ActionTypes.SET_GROUP:
            return {
                ...state,
                group: action.payload,
            };
        case ActionTypes.SET_VARIANT:
            return {
                ...state,
                variant: action.payload,
            };
        case ActionTypes.SET_VARIANT_PANEL:
            return {
                ...state,
                variantPanel: action.payload,
            };
        case ActionTypes.FILTERED:
            return {
                ...state,
                filtered: action.payload,
            };

        case ActionTypes.SET_KIND:
            return {
                ...state,
                kind: action.payload,
            };

        case ActionTypes.VISITED:
            return {
                ...state,
                visited: action.payload,
            };
        // case ActionTypes.UNLOCKED:
        //     const addition = action.payload;
        //     const concatenated = [...state.unlocked, addition];
        //     const next = [...new Set(concatenated)];
        //     return {
        //         ...state,
        //         unlocked: next,
        //         loading: false,
        //     };

        default:
            return state;
    }
}
export const store = createStore(reducer, applyMiddleware(thunk));

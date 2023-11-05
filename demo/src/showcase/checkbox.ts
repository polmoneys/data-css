import { html } from 'lit-html';
import { Line } from '../utils/skeletons';
import { $, $$ } from '../utils';
import { dispatch, store } from '../store';
import { ActionTypes } from '../interfaces/state';

export function getCheckedCheckboxes(): {
    checked: HTMLInputElement[];
    all: HTMLInputElement[];
} {
    const checkboxes = $$(
        'input[type="checkbox"]:not(#checkbox-e)',
    ) as Array<HTMLInputElement>;
    const all = Array.from(checkboxes);
    return {
        checked: all.filter((radioButton) => radioButton.checked),
        all,
    };
}

export function Checkbox() {
    const { output } = store.getState();

    const setIndeterminate = (nextState: boolean = true) => {
        const checkboxIndeterminate = $('#checkbox-e') as HTMLInputElement;
        if (checkboxIndeterminate != null) {
            checkboxIndeterminate.indeterminate = nextState;
        }
    };

    const onReset = () => {
        const { checked, all } = getCheckedCheckboxes();
        if (checked.length === 0) {
            dispatch(store, ActionTypes.SET_OUTPUT, all);
            all.filter((input) => !input.disabled).map(
                (input) => (input.checked = true),
            );
        } else {
            dispatch(store, ActionTypes.SET_OUTPUT, []);
            all.filter((input) => !input.disabled).map(
                (input) => (input.checked = false),
            );
        }
    };

    const onCheckboxChange = () => {
        const { checked } = getCheckedCheckboxes();
        if (checked.length === 0) {
            setIndeterminate(false);
            return;
        }
        dispatch(store, ActionTypes.SET_OUTPUT, checked);
        setIndeterminate();
    };

    return html`
        ${Line(4)}
        <form id="checkbox-showcase">
            <div class="output">
                <output
                    data-padding="xy"
                    data-group="flex"
                    data-flex="column"
                    data-ratio="portrait"
                    form="checkbox-showcase"
                    name="checkbox-showcase-result"
                    for="checkbox-a checkbox-b checkbox-c checkbox-d"
                >
                    ${output.length > 0
                        ? output.map(
                              (o) =>
                                  html`<p data-font="xl">${o.defaultValue}</p>`,
                          )
                        : '-'}</output
                >
            </div>
            <fieldset>
                <legend>Check options:</legend>

                <div data-group="unit" data-place-content="start" data-gap="sm">
                    <label for="checkbox-a"> A </label>
                    <input
                        @change=${() => onCheckboxChange()}
                        type="checkbox"
                        name="option"
                        value="A"
                        id="checkbox-a"
                    />
                </div>
                <div data-group="unit" data-place-content="start" data-gap="sm">
                    <label for="checkbox-b"> B </label>
                    <input
                        @change=${() => onCheckboxChange()}
                        type="checkbox"
                        name="option"
                        value="B"
                        id="checkbox-b"
                    />
                </div>

                <div data-group="unit" data-place-content="start" data-gap="sm">
                    <label for="checkbox-c"> C </label>
                    <input
                        @change=${() => onCheckboxChange()}
                        type="checkbox"
                        name="option"
                        value="C"
                        id="checkbox-c"
                    />
                </div>
                <div data-group="unit" data-place-content="start" data-gap="sm">
                    <label for="checkbox-d"> D </label>
                    <input
                        @change=${() => onCheckboxChange()}
                        type="checkbox"
                        name="option"
                        value="D"
                        id="checkbox-d"
                        disabled
                    />
                </div>
                <div data-group="unit" data-place-content="start" data-gap="sm">
                    <label for="checkbox-e"> Some checked </label>
                    <input
                        type="checkbox"
                        name="option"
                        value="E"
                        id="checkbox-e"
                        @change=${() => onReset()}
                    />
                </div>
            </fieldset>
        </form>

        ${Line(1)}
    `;
}

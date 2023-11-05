import { html } from 'lit-html';
import { Line } from '../utils/skeletons';
import { $$ } from '../utils';
import { dispatch, store } from '../store';
import { ActionTypes } from '../interfaces/state';

function getCheckedRadioButtons(): {
    checked: HTMLInputElement[];
    all: HTMLInputElement[];
} {
    const radioButtons = $$(
        'input[type="radio"]:not(#radio-d)',
    ) as Array<HTMLInputElement>;
    const all = Array.from(radioButtons);
    return {
        checked: all.filter((radioButton) => radioButton.checked),
        all,
    };
}
export function Radio() {
    const { output } = store.getState();
    // dispatch(store, ActionTypes.SET_OUTPUT, []);

    const onRadioChange = () => {
        const { checked } = getCheckedRadioButtons();
        dispatch(store, ActionTypes.SET_OUTPUT, checked);
    };

    return html`
        ${Line(2)}
        <form id="radio-showcase">
            <div class="output">
                <output
                    data-padding="xy"
                    data-group="flex"
                    data-flex="column"
                    data-ratio="portrait"
                    form="radio-showcase"
                    name="radio-showcase-result"
                    for="radio-a radio-b radio-c radio-d"
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
                <legend>Select option:</legend>
                <div data-group="unit" data-place-content="start" data-gap="sm">
                    <label for="radio-a"> A </label>
                    <input
                        @change=${() => onRadioChange()}
                        type="radio"
                        name="option"
                        value="A"
                        id="radio-a"
                    />
                </div>
                <div data-group="unit" data-place-content="start" data-gap="sm">
                    <label for="radio-b"> B </label>

                    <input
                        @change=${() => onRadioChange()}
                        type="radio"
                        name="option"
                        value="B"
                        id="radio-b"
                    />
                </div>
                <div data-group="unit" data-place-content="start" data-gap="sm">
                    <label for="radio-c"> C </label>

                    <input
                        @change=${() => onRadioChange()}
                        type="radio"
                        name="option"
                        value="C"
                        id="radio-c"
                    />
                </div>
                <div data-group="unit" data-place-content="start" data-gap="sm">
                    <label for="radio-d"> D </label>
                    <input
                        @change=${() => onRadioChange()}
                        type="radio"
                        name="option"
                        value="D"
                        disabled
                        id="radio-d"
                    />
                </div>
            </fieldset>
        </form>
        ${Line(2)}
    `;
}

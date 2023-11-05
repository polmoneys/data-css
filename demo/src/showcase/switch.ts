import { html } from 'lit-html';
import { Line } from '../utils/skeletons';
import { dispatch, store } from '../store';
import { getCheckedCheckboxes } from './checkbox';
import { ActionTypes } from '../interfaces/state';

export function Switch() {
    const { output } = store.getState();

    const onCheckboxChange = () => {
        const { checked } = getCheckedCheckboxes();
        dispatch(store, ActionTypes.SET_OUTPUT, checked);
    };
    return html`
        ${Line(2)}
        <form id="switch-showcase">
            <div class="output">
                <output
                    data-padding="xy"
                    data-group="flex"
                    data-flex="column"
                    data-ratio="portrait"
                    form="switch-showcase"
                    name="switch-showcase-result"
                    for="checkbox-e checkbox-f"
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
                <legend>Activate features:</legend>
                <div data-group="unit" data-place-content="start" data-gap="sm">
                    <label for="checkbox-f"> F </label>
                    <input
                        @change=${() => onCheckboxChange()}
                        data-switch=""
                        type="checkbox"
                        name="option"
                        value="F"
                        id="checkbox-f"
                    />
                </div>
                <div data-group="unit" data-place-content="start" data-gap="sm">
                    <label for="checkbox-g"> G </label>
                    <input
                        @change=${() => onCheckboxChange()}
                        data-switch=""
                        type="checkbox"
                        name="option"
                        value="G"
                        id="checkbox-g"
                    />
                </div>
            </fieldset>
        </form>
        ${Line(2)}
    `;
}

import { html } from 'lit-html';
import { Line } from '../utils/skeletons';

export function Switch() {
    // inputInstance.indeterminate = true;
    return html`
        ${Line(2)}
        <fieldset>
            <legend>Activate features:</legend>
            <div data-group="unit" data-place-content="start" data-gap="sm">
                <label for="checkbox-e"> E </label>
                <input
                    data-switch=""
                    type="checkbox"
                    name="option"
                    value="E"
                    id="checkbox-e"
                />
            </div>
            <div data-group="unit" data-place-content="start" data-gap="sm">
                <label for="checkbox-f"> F </label>
                <input
                    data-switch=""
                    type="checkbox"
                    name="option"
                    value="F"
                    id="checkbox-f"
                    checked
                />
            </div>
        </fieldset>
        ${Line(2)}
    `;
}

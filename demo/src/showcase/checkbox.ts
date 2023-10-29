import { html } from 'lit-html';
import { Line } from '../utils/skeletons';

export function Checkbox() {
    // inputInstance.indeterminate = true;
    return html`
        ${Line(4)}
        <fieldset>
            <legend>Check options:</legend>

            <div data-group="unit" data-place-content="start" data-gap="sm">
                <label for="radio-a"> A </label>
                <input type="checkbox" name="option" value="A" id="radio-a" />
            </div>
            <div data-group="unit" data-place-content="start" data-gap="sm">
                <label for="radio-b"> B </label>
                <input
                    type="checkbox"
                    name="option"
                    value="B"
                    checked
                    id="radio-b"
                />
            </div>

            <div data-group="unit" data-place-content="start" data-gap="sm">
                <label for="checkbox-c"> C </label>
                <input
                    type="checkbox"
                    name="option"
                    value="C"
                    id="checkbox-c"
                />
            </div>
            <div data-group="unit" data-place-content="start" data-gap="sm">
                <label for="checkbox-d"> D </label>
                <input
                    type="checkbox"
                    name="option"
                    value="D"
                    id="checkbox-d"
                    checked
                    disabled
                />
            </div>
        </fieldset>
        ${Line(1)}
    `;
}

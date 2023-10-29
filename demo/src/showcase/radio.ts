import { html } from 'lit-html';
import { Line } from '../utils/skeletons';

export function Radio() {
    /*
    Note: Checkboxes are similar to radio buttons, 
    but with an important distinction: radio buttons are designed for selecting 
    one value out of a set, 
    whereas checkboxes let you turn individual values on and off. 
    Where multiple controls exist, radio buttons allow one to be selected out of them all, 
    whereas checkboxes allow multiple values to be selected.
    */
    return html`
        ${Line(2)}

        <fieldset>
            <legend>Select option:</legend>
            <div data-group="unit" data-place-content="start" data-gap="sm">
                <label for="radio-a"> A </label>
                <input type="radio" name="option" value="A" id="radio-a" />
            </div>
            <div data-group="unit" data-place-content="start" data-gap="sm">
                <label for="radio-b"> B </label>
                <input
                    type="radio"
                    name="option"
                    value="B"
                    checked
                    id="radio-b"
                />
            </div>
            <div data-group="unit" data-place-content="start" data-gap="sm">
                <label for="radio-c"> C </label>
                <input type="radio" name="option" value="C" id="radio-c" />
            </div>
            <div data-group="unit" data-place-content="start" data-gap="sm">
                <label for="radio-d"> D </label>
                <input
                    type="radio"
                    name="option"
                    value="D"
                    checked
                    disabled
                    id="radio-d"
                />
            </div>
        </fieldset>
        ${Line(2)}
    `;
}

import { html } from 'lit-html';
import { Line } from '../utils/skeletons';

export function Range() {
    /*
       Updated border colors such as for an error state 
     Add to .select ➡️ style="--select-border: red; --select-focus: red" 
    */
    return html`
        ${Line(1)}

        <div data-intrinsic-grid data-gap="xl">
            <div data-group="grid" data-gap="sm">
                <label for="range-a">Range</label>
                <input
                    type="range"
                    name="range-a"
                    min="0"
                    max="100"
                    value="25"
                    list="markers"
                />

                <label for="range-b">Disabled Range</label>

                <input
                    type="range"
                    name="range-b"
                    min="0"
                    max="100"
                    value="25"
                    disabled
                />
                <label for="range-c">Range</label>
                <input
                    orient="vertical"
                    type="range"
                    name="range-c"
                    min="0"
                    max="100"
                    value="25"
                    list="markers"
                />
                <datalist id="markers">
                    <option value="0"></option>
                    <option value="25"></option>
                    <option value="50"></option>
                    <option value="75"></option>
                    <option value="100"></option>
                </datalist>
            </div>
        </div>
        ${Line(1)}
    `;
}

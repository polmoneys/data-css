import { html } from 'lit-html';
import { Line } from '../utils/skeletons';
import { Button } from '../utils/copyPaste';

export function Ratio() {
    const snippet = `@supports (aspect-ratio: 1) {
    [data-ratio] {
        width: 100%;
    }
    [data-ratio='auto'] {
        aspect-ratio: auto;
    }
    [data-ratio='square'] {
        aspect-ratio: 1;
    }
    [data-ratio='landscape'] {
        aspect-ratio: 16/9;
    }
    [data-ratio='portrait'] {
        aspect-ratio: 9/16;
    }
    [data-ratio='ultrawide'] {
        aspect-ratio: 18/5;
    }
}`;

    return html`
        ${Line(4)}
        <div data-group="grid" class="ratio-demo" >

        <fieldset data-group="grid"  >
            <div data-ratio="square" data-paper data-paper-outline >
                <div
                    data-stack
                    data-place-items="center"
                    data-place-content="center"
                >
                    <label data-font="xl" for="checkbox-a"> A </label data-font="xl">
                    <input
                        type="checkbox"
                        name="option"
                        value="A"
                        id="checkbox-a"
                    />
                </div>
            </div>

            <div data-ratio="square" data-paper data-paper-outline >
                <div
                    data-stack
                    data-place-items="center"
                    data-place-content="center"
                >
                    <label data-font="xl" for="checkbox-b"> B </label data-font="xl">
                    <input
                        type="checkbox"
                        name="option"
                        value="B"
                        id="checkbox-b"
                    />
                </div>
            </div>

            <div data-ratio="square" data-paper data-paper-outline >
                <div
                    data-stack
                    data-place-items="center"
                    data-place-content="center"
                >
                    <label data-font="xl" for="checkbox-c"> C </label data-font="xl">
                    <input
                        type="checkbox"
                        name="option"
                        value="C"
                        id="checkbox-c"
                    />
                </div>
            </div>

            <div data-ratio="square" data-paper data-paper-outline >
                <div
                    data-stack
                    data-place-items="center"
                    data-place-content="center"
                >
                    <label data-font="xl" for="checkbox-d"> D </label>
                    <input
                        type="checkbox"
                        name="option"
                        value="D"
                        id="checkbox-d"
                    />
                </div>
            </div>
        </fieldset>



         <fieldset data-group="grid"  >
            <div data-ratio="landscape" data-paper data-paper-outline >
                <div
                    data-stack
                    data-place-items="center"
                    data-place-content="center"
                >
                    <label data-font="xl" for="radio-a"> A </label data-font="xl">
                    <input
                        type="radio"
                        name="option"
                        value="A"
                        id="radio-a"
                    />
                </div>
            </div>

            <div data-ratio="landscape" data-paper data-paper-outline >
                <div
                    data-stack
                    data-place-items="center"
                    data-place-content="center"
                >
                    <label data-font="xl" for="radio-b"> B </label data-font="xl">
                    <input
                        type="radio"
                        name="option"
                        value="B"
                        id="radio-b"
                    />
                </div>
            </div>

            <div data-ratio="landscape" data-paper data-paper-outline >
                <div
                    data-stack
                    data-place-items="center"
                    data-place-content="center"
                >
                    <label data-font="xl" for="radio-c"> C </label data-font="xl">
                    <input
                        type="radio"
                        name="option"
                        value="C"
                        id="radio-c"
                    />
                </div>
            </div>

            <div data-ratio="landscape" data-paper data-paper-outline >
                <div
                    data-stack
                    data-place-items="center"
                    data-place-content="center"
                >
                    <label data-font="xl" for="radio-d"> D </label>
                    <input
                        type="radio"
                        name="option"
                        value="D"
                        id="radio-d"
                    />
                </div>
            </div>
        </fieldset>
            </div>


        <br />
        <div data-overflow="x" data-overflow-portrait>
            <code>
                <span class="line highlight-comment">/*</span>
                <span class="line highlight-comment level-1"
                    >Ratio everything</span>
                    <span class="line highlight-comment">*/</span>
                    <span class="line highlight-comment"></span>
                <span class="line highlight-comment"> [data-ratio='portrait'] {</span>
                <span class="line highlight-snippet level-1">
                     aspect-ratio: 9/16;</span>
                <span class="line highlight-comment"> }</span>
<span class="line highlight-comment"> [data-ratio='landscape'] {</span>
                <span class="line highlight-snippet level-1">
                     aspect-ratio: 16/9;</span>
                <span class="line highlight-comment"> }</span>

            </code>
        </div>
        <br />
        ${Button(snippet)}
        <br />
        <br />
    `;
}

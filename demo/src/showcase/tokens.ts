import { html } from 'lit-html';
import { Line } from '../utils/skeletons';
import { Button } from '../utils/copyPaste';

export function Tokens() {
    const snippet = `<div
                        data-input=""
                        style="
                            --input-start-width: 90px;
                            --input-end-width: 60px;
                        "
                    ></div>`;
    return html`
        ${Line(4)}
        <br />
        <div data-overflow="x" data-overflow-portrait>
            <code>
                <span class="line highlight-comment">/*</span>
                <span class="line highlight-comment level-1">
                    We can fine tune
                </span>
                <span class="line highlight-comment level-1">
                    CSS custom properties
                </span>
                <span class="line highlight-comment level-1">
                    values inline
                </span>
                <span class="line highlight-comment"> */ </span>
                <span class="line highlight-comment"> </span>

                <span class="line highlight-noise level-1"> ... </span>
                <span class="line highlight-snippet level-1"> data-input </span>
                <span class="line highlight-snippet level-1"> style=" </span>
                <span class="line highlight-snippet level-2">
                    --input-start-width: 90px;
                </span>
                <span class="line highlight-snippet level-2">
                    --input-end-width: 60px;
                </span>
                <span class="line highlight-noise level-1"> " </span>
                <span class="line highlight-noise level-1"> ... </span>
            </code>
        </div>
        <br />
        ${Button(snippet)}
        <br />
        <br />
    `;
}

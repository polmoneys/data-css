import { html } from 'lit-html';
import { Line } from '../utils/skeletons';
import { Button } from '../utils/copyPaste';

export function Reset() {
    const snippet = `a {
            text-decoration: underline;
            text-decoration-skip-ink: auto;
            text-decoration-thickness: 0.1em;
            text-underline-offset: 0.09em;
            hyphens: none;
            outline: none;
        }`;

    return html`
        ${Line(4)}
        <br />
        <div data-overflow="x" data-overflow-portrait>
            <code>
                <span class="line highlight-comment">/*</span>
                <span class="line highlight-comment level-1"
                    >I'm from the 80s, <3 links.</span
                >
                <span class="line highlight-comment level-1">
                    Now we can style as
                </span>
                <span class="line highlight-comment  level-1"
                    >them deserve</span
                >
                <span class="line highlight-comment">*/</span>
                <span class="line highlight-comment"> a {</span>
                <span class="line highlight-snippet level-1">
                    text-decoration: underline;</span
                >
                <span class="line highlight-snippet level-1">
                    text-decoration-skip-ink: auto;</span
                >
                <span class="line highlight-snippet level-1">
                    text-decoration-thickness: 0.1em;</span
                >
                <span class="line highlight-snippet level-1">
                    text-underline-offset: 0.09em;</span
                >
                <span class="line highlight-noise level-1">
                    hyphens: none;</span
                >
                <span class="line highlight-noise level-1">
                    outline: none;</span
                >
                <span class="line highlight-comment"> }</span>
            </code>
        </div>
        <br />
        ${Button(snippet)}
        <br />
        <br />
    `;
}

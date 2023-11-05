import { html } from 'lit-html';

/*

<output> is a container element into which a site/app can inject 
the results of a calculation or the outcome of a user action

return html`<form
        oninput="result.value=parseInt(a.value)+parseInt(b.value)"
    >
        <input type="range" id="b" name="b" value="50" /> +
        <input type="number" id="a" name="a" value="10" /> =
        <output name="result" form=${form} for=${forIds}>60</output>
    </form>`;

*/
export function Output({
    form,
    forIds,
    output,
}: {
    form: string;
    forIds: string;
    output: string;
}) {
    return html`
        <output name="result" form=${form} for=${forIds}>${output}</output>
    `;
}

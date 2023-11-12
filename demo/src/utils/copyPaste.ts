import { html } from 'lit-html';
import { $, copyToClipboard, updateURLCopyParameter } from '../utils';
import { Icon } from '../showcase/icon';

export function Button(input: string) {
    // const urlSearchParams = new URLSearchParams(window.location.search);
    // const isCopied = urlSearchParams.get('copy') === 'true';

    const onCopy = async () => {
        await copyToClipboard(input);
        updateURLCopyParameter('true');
        const button = $('#copy-button');
        if (button != null) {
            button.innerHTML = `<svg
      width="24"
      height="24"
      focusable="false"
      data-icon
      aria-labelledby="copyied-icon"
    viewbox="0 0 24 24"
    >
      <title id="copyied-icon">copy </title>
      <use href="./sprite.svg#check" />
    </svg>`;
        }
    };

    return html` <button
        type="button"
        data-button
        id="copy-button"
        @click=${{ handleEvent: onCopy }}
    >
        ${Icon({
            d: 'arrowDown',
            label: 'arrowDown',
            size: 24,
        })}
    </button>`;
}

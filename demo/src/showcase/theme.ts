import { html } from 'lit-html';
import { Icon } from './icon';

export function GroupTheme(variant: number = 100) {
    return html`
        <div
            data-theme=${variant}
            data-padding="xl"
            data-group="flex"
            data-place-content="center"
        >
            ${Icon({ d: 'heart', label: 'heart', size: 48 })}
        </div>
    `;
}

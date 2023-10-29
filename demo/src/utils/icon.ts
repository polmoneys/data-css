import { html, svg } from 'lit-html';

const icons: Array<IconName> = [
    'chevronLeft',
    'chevronRight',
    'chevronDown',
    'chevronUp',
    'caretLeft',
    'caretRight',
    'caretDown',
    'caretUp',
    'arrowDown',
    'arrowUp',
    'slash',
    'handle',
    'check',
    'cross',
    'plus',
    'dotsY',
    'dotsX',
    'minus',
    'heart',
    'bookmark',
    'pin',
    'star',
];

export function Icons() {
    return html`
        <h3 data-font>Sprited Icons</h3>
        <div data-group="flex" data-gap="xl" data-place-items="baseline">
            ${icons.map(
                (icon) => html`${Icon({ d: icon, label: icon, size: 24 })}`,
            )}
        </div>
    `;
}

type IconName =
    | 'star'
    | 'pin'
    | 'heart'
    | 'bookmark'
    | 'dotsX'
    | 'dotsY'
    | 'minus'
    | 'plus'
    | 'cross'
    | 'check'
    | 'handle'
    | 'slash'
    | 'arrowUp'
    | 'arrowDown'
    | 'caretUp'
    | 'caretDown'
    | 'caretRight'
    | 'caretLeft'
    | 'chevronUp'
    | 'chevronDown'
    | 'chevronRight'
    | 'chevronLeft';

export function Icon({
    d,
    size,
    label,
}: {
    d: IconName;
    size: number;
    label: string;
}) {
    // {...(label === "" && { "aria-hidden": "true" })}
    return svg`<svg
      width=${size}
      height=${size}
      focusable="false"
      data-icon
      aria-labelledby="${label}-icon"
      
    >
      <title id="${label}-icon">{label} </title>
      <use href="./sprite.svg#${d}" />
    </svg>
  `;
}

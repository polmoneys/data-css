import { html, svg } from 'lit-html';
import { Line } from '../utils/skeletons';

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
    'github',
];

export function Icons() {
    return html`
        ${Line(2)}
        <div
            data-group="flex"
            data-flex-wrap
            data-gap="xl"
            data-place-items="baseline"
        >
            ${icons.map(
                (icon) => html`${Icon({ d: icon, label: icon, size: 48 })}`,
            )}
            <div data-spinner style="--spinner-count: 10">
                <span style="--spinner-index: 0"></span>
                <span style="--spinner-index: 1"></span>
                <span style="--spinner-index: 2"></span>
                <span style="--spinner-index: 3"></span>
                <span style="--spinner-index: 4"></span>
                <span style="--spinner-index: 5"></span>
                <span style="--spinner-index: 6"></span>
                <span style="--spinner-index: 7"></span>
                <span style="--spinner-index: 8"></span>
                <span style="--spinner-index: 9"></span>
            </div>
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
    | 'chevronLeft'
    | 'github';

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
      width="${size}px"
      height="${size}px"
      focusable="false"
      data-icon
      aria-labelledby="${label}-icon"
    viewbox="0 0 ${size} ${size}"
    >
      <title id="${label}-icon">{label} </title>
      <use href="./sprite.svg#${d}" />
    </svg>
  `;
}

import { html } from 'lit-html';
import { Shape } from '../utils/shape';
import { Line } from '../utils/skeletons';

export function Paper() {
    return html`
        ${Line(2)}
        <div data-intrinsic-grid="xsm" data-gap="sm">
            <div
                data-ratio="square"
                data-paper=""
                data-place-items="center"
                data-place-content="center"
                data-group="grid"
                data-gap="sm"
            >
                ${Shape({
                    vertices: 3,
                    size: 24,
                    fill: 'currentColor',
                })}
                ${Line(1, true)}
            </div>
            <div
                data-ratio="square"
                data-paper-outline=""
                data-paper=""
                data-place-items="center"
                data-place-content="center"
                data-group="grid"
                data-gap="sm"
            >
                ${Shape({
                    vertices: 3,
                    size: 24,
                    fill: 'currentColor',
                })}
                ${Line(1, true)}
            </div>

            <div
                data-ratio="square"
                data-paper="error"
                data-place-items="center"
                data-place-content="center"
                data-group="grid"
                data-gap="sm"
            >
                ${Shape({
                    vertices: 5,
                    size: 24,
                    fill: 'currentColor',
                })}
                ${Line(1, true)}
            </div>
            <div
                data-ratio="square"
                data-paper-outline=""
                data-paper="error"
                data-place-items="center"
                data-place-content="center"
                data-group="grid"
                data-gap="sm"
            >
                ${Shape({
                    vertices: 4,
                    size: 24,
                    fill: 'currentColor',
                })}
                ${Line(1, true)}
            </div>
            <div
                data-ratio="square"
                data-paper="accent"
                data-place-items="center"
                data-place-content="center"
                data-group="grid"
                data-gap="sm"
            >
                ${Shape({
                    vertices: 6,
                    size: 24,
                    fill: 'currentColor',
                })}
                ${Line(1, true)}
            </div>
            <div
                data-ratio="square"
                data-paper-outline=""
                data-paper="accent"
                data-place-items="center"
                data-place-content="center"
                data-group="grid"
                data-gap="sm"
            >
                ${Shape({
                    vertices: 7,
                    size: 24,
                    fill: 'currentColor',
                })}
                ${Line(1, true)}
            </div>

            <div
                data-ratio="square"
                data-theme
                data-place-items="center"
                data-place-content="center"
                data-group="grid"
                data-gap="sm"
            >
                ${Shape({
                    vertices: 7,
                    size: 24,
                    fill: 'currentColor',
                })}
                ${Line(1, true)}
            </div>
        </div>
        ${Line(2)}
    `;
}

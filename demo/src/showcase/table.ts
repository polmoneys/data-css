import { html } from 'lit-html';
import { Shape } from '../utils/shape';
import { Line } from '../utils/skeletons';

export function Table() {
    return html`
        ${Line(5)}
        <div data-overflow="x" data-border-shadow="outer">
            <table>
                <thead>
                    <tr>
                        <th>Emoji</th>
                        <th>NSFW</th>
                        <th>Flirting</th>
                        <th>Bad day</th>
                        <th>Random</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>🔫</td>
                        <td>
                            ${Shape({
                                vertices: 3,
                                size: 20,
                                fill: 'currentColor',
                                transforms: 'rotate(180deg)',
                            })}
                            ${Shape({
                                vertices: 3,
                                size: 20,
                                fill: 'currentColor',
                                transforms: 'rotate(180deg)',
                            })}
                        </td>

                        <td>
                            ${Shape({
                                vertices: 6,
                                size: 17,
                                fill: 'currentColor',
                            })}
                        </td>
                        <td>
                            ${Shape({
                                vertices: 20,
                                size: 16,
                                fill: 'currentColor',
                            })}
                            ${Shape({
                                vertices: 20,
                                size: 16,
                                fill: 'currentColor',
                            })}
                            ${Shape({
                                vertices: 20,
                                size: 16,
                                fill: 'currentColor',
                            })}
                            ${Shape({
                                vertices: 20,
                                size: 16,
                                fill: 'currentColor',
                            })}
                            ${Shape({
                                vertices: 20,
                                size: 16,
                                fill: 'currentColor',
                            })}
                        </td>
                        <td>
                            ${Shape({
                                vertices: 4,
                                size: 19,
                                fill: 'currentColor',
                            })}
                        </td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>🚬</td>
                        <td>
                            ${Shape({
                                vertices: 3,
                                size: 20,
                                fill: 'currentColor',
                            })}
                        </td>

                        <td>
                            ${Shape({
                                vertices: 6,
                                size: 17,
                                fill: 'currentColor',
                            })}
                        </td>
                        <td>
                            ${Shape({
                                vertices: 20,
                                size: 16,
                                fill: 'currentColor',
                            })}
                            ${Shape({
                                vertices: 20,
                                size: 16,
                                fill: 'currentColor',
                            })}
                        </td>
                        <td>
                            ${Shape({
                                vertices: 4,
                                size: 19,
                                fill: 'currentColor',
                            })}
                        </td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>🚨</td>
                        <td>
                            ${Shape({
                                vertices: 3,
                                size: 20,
                                fill: 'currentColor',
                            })}
                            ${Shape({
                                vertices: 3,
                                size: 20,
                                fill: 'currentColor',
                            })}
                            ${Shape({
                                vertices: 3,
                                size: 20,
                                fill: 'currentColor',
                            })}
                        </td>

                        <td>
                            ${Shape({
                                vertices: 6,
                                size: 17,
                                fill: 'currentColor',
                            })}
                        </td>
                        <td>
                            ${Shape({
                                vertices: 20,
                                size: 16,
                                fill: 'currentColor',
                            })}
                        </td>
                        <td>
                            ${Shape({
                                vertices: 4,
                                size: 19,
                                fill: 'currentColor',
                            })}
                            ${Shape({
                                vertices: 4,
                                size: 19,
                                fill: 'currentColor',
                            })}
                            ${Shape({
                                vertices: 4,
                                size: 19,
                                fill: 'currentColor',
                            })}
                        </td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>🤸🏽‍♂️</td>
                        <td>
                            ${Shape({
                                vertices: 3,
                                size: 20,
                                fill: 'currentColor',
                            })}
                            ${Shape({
                                vertices: 3,
                                size: 20,
                                fill: 'currentColor',
                            })}
                            ${Shape({
                                vertices: 3,
                                size: 20,
                                fill: 'currentColor',
                            })}
                            ${Shape({
                                vertices: 3,
                                size: 20,
                                fill: 'currentColor',
                            })}
                        </td>

                        <td>
                            ${Shape({
                                vertices: 6,
                                size: 17,
                                fill: 'currentColor',
                            })}
                            ${Shape({
                                vertices: 6,
                                size: 17,
                                fill: 'currentColor',
                            })}
                        </td>

                        <td>
                            ${Shape({
                                vertices: 20,
                                size: 16,
                                fill: 'currentColor',
                            })}
                            ${Shape({
                                vertices: 20,
                                size: 16,
                                fill: 'currentColor',
                            })}
                            ${Shape({
                                vertices: 20,
                                size: 16,
                                fill: 'currentColor',
                            })}
                        </td>
                        <td>
                            ${Shape({
                                vertices: 4,
                                size: 19,
                                fill: 'currentColor',
                            })}
                            ${Shape({
                                vertices: 4,
                                size: 19,
                                fill: 'currentColor',
                            })}
                        </td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>💐</td>
                        <td>
                            ${Shape({
                                vertices: 3,
                                size: 20,
                                fill: 'currentColor',
                            })}
                            ${Shape({
                                vertices: 3,
                                size: 20,
                                fill: 'currentColor',
                            })}
                        </td>
                        <td>
                            ${Shape({
                                vertices: 6,
                                size: 17,
                                fill: 'currentColor',
                            })}
                            ${Shape({
                                vertices: 6,
                                size: 17,
                                fill: 'currentColor',
                            })}
                            ${Shape({
                                vertices: 6,
                                size: 17,
                                fill: 'currentColor',
                            })}
                        </td>
                        <td>
                            ${Shape({
                                vertices: 20,
                                size: 16,
                                fill: 'currentColor',
                            })}
                        </td>
                        <td>
                            ${Shape({
                                vertices: 4,
                                size: 19,
                                fill: 'currentColor',
                            })}
                        </td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>🦚</td>
                        <td>
                            ${Shape({
                                vertices: 3,
                                size: 20,
                                fill: 'currentColor',
                                transforms: 'rotate(180deg)',
                            })}
                        </td>
                        <td>
                            ${Shape({
                                vertices: 6,
                                size: 17,
                                fill: 'currentColor',
                            })}
                            ${Shape({
                                vertices: 6,
                                size: 17,
                                fill: 'currentColor',
                            })}
                            ${Shape({
                                vertices: 6,
                                size: 17,
                                fill: 'currentColor',
                            })}
                            ${Shape({
                                vertices: 6,
                                size: 17,
                                fill: 'currentColor',
                            })}
                            ${Shape({
                                vertices: 6,
                                size: 17,
                                fill: 'currentColor',
                            })}
                        </td>
                        <td>
                            ${Shape({
                                vertices: 20,
                                size: 16,
                                fill: 'currentColor',
                            })}
                            ${Shape({
                                vertices: 20,
                                size: 16,
                                fill: 'currentColor',
                            })}
                        </td>

                        <td>
                            ${Shape({
                                vertices: 4,
                                size: 19,
                                fill: 'currentColor',
                            })}
                            ${Shape({
                                vertices: 4,
                                size: 19,
                                fill: 'currentColor',
                            })}
                            ${Shape({
                                vertices: 4,
                                size: 19,
                                fill: 'currentColor',
                            })}
                        </td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </div>
        ${Line(5)}
    `;
}

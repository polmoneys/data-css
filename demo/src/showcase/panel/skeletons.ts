import { html } from 'lit-html';
import { Action, HeadLine, Line } from '../../utils/skeletons';

function Content(reorder: boolean, input?: boolean) {
    return html`
        <div class="gap:md ${reorder ? 'reorder:top' : ''}">
            ${PanelUI.HeadLine()} ${PanelUI.Line(3)}
            ${input
                ? html` <label class="text-input">
                      <input type="text" placeholder="Write it" />
                  </label>`
                : html``}
        </div>
    `;
}

export function Actions(reorder: boolean) {
    return html`
        <div data-reorder="${reorder ? 'top' : ''}">
            ${Line(1, true)}
            <div>${Action()}${Action()}</div>
        </div>
    `;
}

export const PanelUI: Record<'Content' | 'HeadLine' | 'Line' | 'Actions', any> =
    {} as any;

PanelUI.Content = Content;
PanelUI.HeadLine = HeadLine;
PanelUI.Line = Line;
PanelUI.Actions = Actions;

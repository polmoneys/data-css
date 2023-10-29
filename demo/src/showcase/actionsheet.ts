import { html } from 'lit-html';
import { $ } from '../utils';
import { Line } from '../utils/skeletons';

export function ActionSheet() {
    document.body.addEventListener('click', (event: any) => {
        const actionsheet = $('[data-actionsheet]');
        const isActionSheetOpen =
            (actionsheet as HTMLElement)!.dataset.actionsheetOpen === 'true';

        if (event.target.id === 'show-tray') {
            return;
        }

        if (event.target.id === 'clear-input') {
            return;
        }

        if (event.target.id === 'show-sheet') {
            if (isActionSheetOpen) {
                (actionsheet as HTMLElement)!.dataset.actionsheetOpen = 'false';
                actionsheet!
                    .querySelector('[data-actionsheet-snap-sentinel]')!
                    .scrollIntoView({ behavior: 'smooth' });
            } else {
                actionsheet!
                    .querySelector('[data-actionsheet-menu]:first-of-type')!
                    .scrollIntoView({ behavior: 'smooth' });
                (actionsheet as HTMLElement)!.dataset.actionsheetOpen = 'true';
            }
        } else {
            if (isActionSheetOpen) {
                (actionsheet as HTMLElement)!.dataset.actionsheetOpen = 'false';
                actionsheet!
                    .querySelector('[data-actionsheet-snap-sentinel]')!
                    .scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
    return html` ${Line(5)}
        <button id="show-sheet" data-button>Show action sheet</button>
        ${Line(5)}
        <div data-actionsheet data-actionsheet-open="false">
            <div data-actionsheet-snap-sentinel></div>
            <menu data-actionsheet-menu>
                <button>Action 1</button>
                <button>Action 2</button>
                <button>Action 3</button>
            </menu>
            <menu>
                <button type="reset">Cancel</button>
            </menu>
        </div>`;
}

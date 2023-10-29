import { html, render } from 'lit-html';
import { $ } from '../utils';
import { Line } from '../utils/skeletons';

export const toggleTray = () => {
    const main = $('main');
    const tray = $('[data-tray]');
    const overlay = $('[data-tray-overlay]');

    if ((tray as HTMLElement)!.dataset.trayOpen === 'false') {
        main!.setAttribute('inert', 'true');
        (overlay as HTMLElement)!.dataset.trayOverlayOpen = 'true';
        (tray as HTMLElement)!.dataset.trayOpen = 'true';
        render(TrayContent(), $('[data-tray]')! as HTMLElement);
    } else {
        main!.removeAttribute('inert');
        (overlay as HTMLElement)!.dataset.trayOverlayOpen = 'false';
        (tray as HTMLElement)!.dataset.trayOpen = 'false';
    }
};

export function Tray() {
    // document.body.addEventListener('click', (event: any) => {
    //     const tray = $('[data-tray]');

    //     if (event.target.id === 'show-sheet') {
    //         tray!
    //             .querySelector('[data-tray-menu]:first-of-type')!
    //             .scrollIntoView({ behavior: 'smooth' });
    //         tray!.setAttribute('open', 'true');
    //     } else {
    //         tray!.removeAttribute('open');
    //         tray!
    //             .querySelector('[data-actionsheet-snap-sentinel]')!
    //             .scrollIntoView({ behavior: 'smooth' });
    //     }
    // });

    return html`
        ${Line(1)}
        <button
            id="show-tray"
            @click=${{ handleEvent: toggleTray }}
            data-button
        >
            Show tray
        </button>
        ${Line(1)}
    `;
}

export function TrayContent() {
    return html` <div
        data-group="flex"
        data-flex="column"
        data-gap="sm"
        data-padding="xy"
    >
        ${Line(4, true)}
        <menu>
            <button @click=${{ handleEvent: toggleTray }} type="reset">
                Cancel
            </button>
        </menu>
    </div>`;
}

import { html } from 'lit-html';
import { Avatar, Line } from '../utils/skeletons';

export function Tabs() {
    const onButtonChange = (event: any) => {
        const tabId = event.target.dataset.tabId;
        const dest: any = document.querySelectorAll(
            `[data-tabs] [data-tab-id]`,
        );
        if (dest) {
            if (dest[0].dataset.tabId === tabId) {
                dest[0].dataset.tabVisible = 'true';
            } else {
                dest[0].dataset.tabVisible = 'false';
            }
            if (dest[1].dataset.tabId === tabId) {
                dest[1].dataset.tabVisible = 'true';
            } else {
                dest[1].dataset.tabVisible = 'false';
            }
        }
    };
    return html` ${Line(2)}

        <div data-layout="flex">
            <button
                type="button"
                data-tab-id="1"
                @click=${{ handleEvent: onButtonChange }}
            >
                Tab 1
            </button>
            <button
                type="button"
                data-tab-id="2"
                @click=${{ handleEvent: onButtonChange }}
            >
                Tab 2
            </button>
        </div>
        <div
            data-tabs=""
            data-padding="xy"
            data-gap="sm"
            data-border-shadow="outer"
        >
            <div data-tab-id="1">${Avatar(84)} ${Line(1)}${Line(1, true)}</div>
            <div data-tab-id="2" data-tab-visible="false">
                ${Line(1, true)} ${Line(3)}${Line(1, true)}
            </div>
        </div>

        ${Line(2)}`;
}

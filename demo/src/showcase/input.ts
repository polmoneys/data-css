import { html, svg } from 'lit-html';
import { Line } from '../utils/skeletons';

export function Input() {
    return html`
        ${Line(2)}
        <div data-group="flex" data-flex="column" data-gap="sm">
            <label for="text-input" style="transform:translateY(7px)"
                >Text Input</label
            >
            <div data-input="">
                <input
                    id="text-input"
                    type="text"
                    autocomplete="off"
                    placeholder="Write..."
                />
            </div>
            <div data-input="">
                ${svg`<svg data-input-start="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>`}
                <input
                    id="text-input"
                    type="text"
                    autocomplete="off"
                    placeholder="Write..."
                />
            </div>
            <div data-input="">
                <input
                    id="text-input"
                    type="text"
                    autocomplete="off"
                    placeholder="Write..."
                />
                ${svg`<svg data-input-end="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>`}
            </div>
            <div data-input="">
                ${svg`<svg data-input-start="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>`}
                <input
                    id="text-input"
                    type="text"
                    autocomplete="off"
                    placeholder="Write..."
                />
                ${svg`<svg data-input-end="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>`}
            </div>
            <div data-input="" style="--input-end-width:60px">
                <p data-padding="x" data-input-start="">+34</p>
                <input
                    id="text-input"
                    type="text"
                    autocomplete="off"
                    placeholder="Phone number"
                />
            </div>
            <div data-input="" style="--input-end-width:68px">
                <input
                    id="text-input"
                    type="text"
                    autocomplete="off"
                    placeholder="Website:"
                    required
                />
                <p
                    data-padding="x"
                    data-input-end=""
                    style="--input-end-width:68px"
                >
                    .com
                </p>
            </div>
            ${Line(4)}
            <div data-intrinsic-grid data-gap="xl">
                <div>
                    <label for="date-input">Date Input</label>
                    <div data-input="">
                        <input
                            id="date-input"
                            type="date"
                            placeholder="Select Day"
                            pattern="d{4}-d{2}-d{2}"
                        />
                    </div>
                </div>

                <div>
                    <label for="file-input">File Input</label>
                    <div data-input="">
                        <input id="file-input" type="file" />
                    </div>
                </div>
                <div>
                    <label for="readonly-input">Read-Only Input</label>
                    <div data-input="">
                        <input
                            id="readonly-input"
                            type="text"
                            readonly
                            value="This can only be copied"
                        />
                    </div>
                </div>
                <div>
                    <label for="disabled-input">Disabled Input</label>
                    <div data-input="">
                        <input
                            id="disabled-input"
                            value="Some datum"
                            type="text"
                            disabled
                        />
                    </div>
                </div>
                <div>
                    <label for="textarea">Textarea</label>
                    <div data-input="">
                        <textarea
                            id="textarea"
                            spellcheck="false"
                            autocorrect="off"
                            autocapitalize="off"
                            translate="no"
                        ></textarea>
                    </div>
                </div>

                <div>
                    <label for="textarea-disabled">Textarea Disabled</label>
                    <div data-input="">
                        <textarea id="textarea-disabled" disabled></textarea>
                    </div>
                </div>
            </div>
        </div>
        ${Line(1)}
    `;
}

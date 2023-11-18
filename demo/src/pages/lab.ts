import { html, render } from 'lit-html';
import { Line } from '../utils/skeletons';
import { GroupTheme } from '../showcase/theme';

export function renderLab() {
    const attach = document.querySelector<HTMLDivElement>('article');
    if (attach != null) {
        render(Lab(), attach);
    }
}

function Lab() {
    return html`
        ${Line(4)}

        <div data-panes data-theme="100">
            <div data-pane>
                <div pane-content="">
                    <div pane-content-main="">
                        <p>
                            Panes are resizable. 2 states, when collapsed
                            display summary
                        </p>
                    </div>
                    <div pane-content-aside="" data-theme="300">
                        I'm <strong>collapsed</strong>
                    </div>
                </div>
                <div data-pane-resizer></div>
            </div>

            <div data-pane>
                <div pane-content-secondary>
                    <button>
                        <span>Important (5)</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </button>
                    <button>
                        <span>Unread (10)</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </button>
                    <button>
                        <span>Everything Else (24)</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </button>

                    <button pane-content-secondary-aside="">
                        <span>Inbox (39)</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        ${Line(4)} ${GroupTheme(200)} ${GroupTheme(300)}${GroupTheme(400)}
        ${GroupTheme(500)} ${Line(4)}
    `;
}

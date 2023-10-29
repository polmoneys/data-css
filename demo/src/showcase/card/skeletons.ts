import { html } from 'lit-html';
import { Action, Avatar, HeadLine, Line } from '../../utils/skeletons';

function Pic() {
    return html`
        <picture>
            <img
                src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            />
        </picture>
    `;
}

function Content(reorder: boolean) {
    return html`
        <div data-gap="sm" data-reorder="${reorder ? 'top' : ''}">
            ${CardUI.HeadLine()} ${CardUI.Line(3)}
        </div>
    `;
}

function Actions(reorder: boolean) {
    return html`
        <div data-gap="sm" data-reorder="${reorder ? 'top' : ''}">
            ${Action()}
        </div>
    `;
}

export const CardUI: Record<
    'Pic' | 'Content' | 'Avatar' | 'HeadLine' | 'Line' | 'Actions',
    any
> = {} as any;

CardUI.Pic = Pic;
CardUI.Content = Content;
CardUI.Avatar = Avatar;
CardUI.HeadLine = HeadLine;
CardUI.Line = Line;
CardUI.Actions = Actions;

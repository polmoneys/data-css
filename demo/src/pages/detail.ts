import { html, render } from 'lit-html';
import { ActionSheet } from '../showcase/actionsheet';
import { Article } from '../showcase/article';
import { Button } from '../showcase/button';
import { Checkbox } from '../showcase/checkbox';
import { Fonts } from '../showcase/font';
import { Icons } from '../showcase/icon';
import { Input } from '../showcase/input';
import { Paper } from '../showcase/paper';
import { Radio } from '../showcase/radio';
import { Range } from '../showcase/range';
import { Scroller } from '../showcase/scroller';
import { Select } from '../showcase/select';
import { Switch } from '../showcase/switch';
import { Table } from '../showcase/table';
import { Tabs } from '../showcase/tabs';
import { Tray } from '../showcase/tray';
import { Unit } from '../showcase/unit';
import { Line } from '../utils/skeletons';
import { Soon } from '../utils/soon';
import { Progress } from '../showcase/progress';
import { Reset } from '../showcase/reset';
import { Tokens } from '../showcase/tokens';

export function renderDetail(value: string) {
    const attach = document.querySelector<HTMLDivElement>('article');
    if (attach != null) {
        render(getDetail(value), attach);
    }
}

function getDetail(value: string) {
    switch (value) {
        case 'reset':
            return html`${Reset()}`;
        case 'tokens':
            return html`${Tokens()}`;
        // form
        case 'button':
            return html`${Button()}`;
        case 'checkbox':
            return html`${Checkbox()}`;
        case 'input':
            return html`${Input()}`;
        case 'radio':
            return html`${Radio()}`;
        case 'range':
            return html`${Range()}`;
        case 'select':
            return html`${Select()}`;
        case 'progress':
            return html`${Progress()}`;
        case 'switch':
            return html`${Switch()}`;
        // media
        case 'avatar':
        case 'scroller':
        case 'image':
            return html`${Scroller()}`;
        case 'article':
        case 'hero':
            return html`${Article()}`;
        case 'icon':
            return html`${Icons()}`;
        // group
        case 'action-sheet':
            return html`${ActionSheet()}`;
        case 'panel':
        case 'card':
            return;
        case 'group':
            return html`${Unit()}`;
        case 'list':
            return html`<p data-font>Check landing</p>
                ${Line(4)}`;
        case 'table':
            return html`${Table()}`;
        case 'tabs':
            return html`${Tabs()}`;
        case 'tray':
            return html`${Tray()}`;
        // utils
        case 'lobotomized-owl':
        case 'border':
        case 'fit':
        case 'gap':
        case 'gradient':
        case 'hide':
        case 'margin-auto':
        case 'mask':
        case 'overflow':
        case 'padding':
        case 'place':
        case 'print':
        case 'ratio':
        case 'reorder':
        case 'util':
            return html`${Soon()}`;
        case 'font':
            return html`${Fonts()}`;
        case 'paper':
            return html`${Paper()}`;
        default:
            return html``;
    }
}

import { Snippets } from './interfaces/snippet';

const SNIPPETS_FORM: Snippets = [
    {
        label: 'Button',
        value: 'button',
        kind: 'form',
        src: 'https://github.com/polmoneys/data-css',
        description: 'Links and Buttons',
    },
    {
        label: 'Checkbox',
        value: 'checkbox',
        kind: 'form',
        src: 'https://github.com/polmoneys/data-css',
        description: 'CurrentColor friendly',
    },
    {
        label: 'Input',
        value: 'input',
        kind: 'form',
        src: 'https://github.com/polmoneys/data-css',
        description: 'Start and End slots',
    },
    {
        // TODO:
        label: 'Progress',
        value: 'progress',
        kind: 'form',
        src: 'https://github.com/polmoneys/data-css',
        description: '',
        hidden: true,
    },
    {
        label: 'Radio',
        value: 'radio',
        kind: 'form',
        src: 'https://github.com/polmoneys/data-css',
        description: 'CurrentColor friendly',
    },
    {
        label: 'Range',
        value: 'range',
        kind: 'form',
        src: 'https://github.com/polmoneys/data-css',
        description: 'Horizontal/Vertical with meter',
    },
    {
        label: 'Select',
        value: 'select',
        kind: 'form',
        src: 'https://github.com/polmoneys/data-css',
        description: 'Accent color and multiple',
    },
    {
        label: 'Switch',
        value: 'switch',
        kind: 'form',
        src: 'https://github.com/polmoneys/data-css',
        description: 'CurrentColor friendly',
    },
];

const SNIPPETS_MEDIA: Snippets = [
    {
        label: 'Avatar',
        value: 'avatar',
        kind: 'media',
        src: 'https://github.com/polmoneys/data-css',
        description: 'Sizes with custom CSS properties',
    },
    {
        label: 'Hero',
        value: 'hero',
        kind: 'media',
        src: 'https://github.com/polmoneys/data-css',
        description: 'Dimm background to pop CTA',
    },
    {
        label: 'Icon',
        value: 'icon',
        kind: 'media',
        src: 'https://github.com/polmoneys/data-css',
        description: '...',
    },
    {
        label: 'Image',
        value: 'image',
        kind: 'media',
        src: 'https://github.com/polmoneys/data-css',
        description: 'Picture',
    },
];

const SNIPPETS_GROUP: Snippets = [
    {
        label: 'Action Sheet',
        value: 'action-sheet',
        kind: 'group',
        src: 'https://github.com/polmoneys/data-css',
        description: '...',
    },
    {
        label: 'Article',
        value: 'article',
        kind: 'group',
        src: 'https://github.com/polmoneys/data-css',
        description: 'Text clamped, images full width',
    },
    {
        label: 'Card',
        value: 'card',
        kind: 'group',
        src: 'https://github.com/polmoneys/data-css',
        description: 'Ratio cards',
    },
    {
        label: 'Group',
        value: 'group',
        kind: 'group',
        src: 'https://github.com/polmoneys/data-css',
        description: 'Flex & Grid <3 ',
    },
    {
        label: 'List',
        value: 'list',
        kind: 'group',
        src: 'https://github.com/polmoneys/data-css',
        description: 'Start and End slots',
    },
    {
        label: 'Panel',
        value: 'panel',
        kind: 'group',
        src: 'https://github.com/polmoneys/data-css',
        description: 'Group content and interactions',
    },
    {
        label: 'Scroller',
        value: 'scroller',
        kind: 'group',
        src: 'https://github.com/polmoneys/data-css',
        description: 'Group content',
    },
    {
        label: 'Table',
        value: 'table',
        kind: 'group',
        src: 'https://github.com/polmoneys/data-css',
        description: 'Tabular love',
    },
    {
        label: 'Tabs',
        value: 'tabs',
        kind: 'group',
        src: 'https://github.com/polmoneys/data-css',
        description: '...',
    },
    {
        label: 'Tray',
        value: 'tray',
        kind: 'group',
        src: 'https://github.com/polmoneys/data-css',
        description: 'Personal fav',
    },
];

const SNIPPETS_UTILS: Snippets = [
    {
        label: 'Lobotomized Owl',
        value: 'lobotomized-owl',
        kind: 'utils',
        src: 'https://github.com/polmoneys/data-css',
        description: '*>*',
        hidden: true,
    },
    {
        label: 'Border',
        value: 'border',
        kind: 'utils',
        src: 'https://github.com/polmoneys/data-css',
        description: '...',
        hidden: true,
    },
    {
        label: 'Fit',
        value: 'fit',
        kind: 'utils',
        src: 'https://github.com/polmoneys/data-css',
        description: 'Personal Fav',
    },
    {
        label: 'Font',
        value: 'font',
        kind: 'utils',
        src: 'https://github.com/polmoneys/data-css',
        description: '...',
    },
    {
        label: 'Gap',
        value: 'gap',
        kind: 'utils',
        src: 'https://github.com/polmoneys/data-css',
        description: '...',
    },
    {
        label: 'Gradient',
        value: 'gradient',
        kind: 'utils',
        src: 'https://github.com/polmoneys/data-css',
        description: '...',
    },
    {
        label: 'Hide',
        value: 'hide',
        kind: 'utils',
        src: 'https://github.com/polmoneys/data-css',
        description: '...',
        hidden: true,
    },
    {
        label: 'Margin Auto',
        value: 'margin-auto',
        kind: 'utils',
        src: 'https://github.com/polmoneys/data-css',
        description: 'Personal Fav',
    },
    {
        label: 'Mask',
        value: 'mask',
        kind: 'utils',
        src: 'https://github.com/polmoneys/data-css',
        description: '...',
        hidden: true,
    },
    {
        label: 'Overflow',
        value: 'overflow',
        kind: 'utils',
        src: 'https://github.com/polmoneys/data-css',
        description: '...',
    },
    {
        label: 'Padding',
        value: 'padding',
        kind: 'utils',
        src: 'https://github.com/polmoneys/data-css',
        description: '...',
        hidden: true,
    },
    {
        label: 'Paper',
        value: 'paper',
        kind: 'utils',
        src: 'https://github.com/polmoneys/data-css',
        description: 'Surfaces',
    },
    {
        label: 'Place',
        value: 'place',
        kind: 'utils',
        src: 'https://github.com/polmoneys/data-css',
        description: '...',
        hidden: true,
    },
    {
        label: 'Print',
        value: 'print',
        kind: 'utils',
        src: 'https://github.com/polmoneys/data-css',
        description: 'Do not print',
        hidden: true,
    },
    {
        label: 'Ratio',
        value: 'ratio',
        kind: 'utils',
        src: 'https://github.com/polmoneys/data-css',
        description: 'Personal Fav',
    },
    {
        label: 'Reorder',
        value: 'reorder',
        kind: 'utils',
        src: 'https://github.com/polmoneys/data-css',
        description: '...',
        hidden: true,
    },
    {
        label: 'Util',
        value: 'util',
        kind: 'utils',
        src: 'https://github.com/polmoneys/data-css',
        description: '...',
        hidden: true,
    },
];

const SNIPPETS: Snippets = [
    {
        label: 'Reset',
        value: 'reset',
        kind: 'theme',
        src: 'https://github.com/polmoneys/data-css',
        description: 'Minimal',
    },
    {
        label: 'Tokens',
        value: 'tokens',
        kind: 'theme',
        src: 'https://github.com/polmoneys/data-css',
        description: 'Custom CSS properties',
    },
    {
        label: '',
        value: '',
        kind: 'theme',
        src: 'https://github.com/polmoneys/data-css',
        description: '',
    },
    ...SNIPPETS_FORM,
    {
        label: '',
        value: '',
        kind: 'form',
        src: 'https://github.com/polmoneys/data-css',
        description: '',
    },
    ...SNIPPETS_MEDIA,
    {
        label: '',
        value: '',
        kind: 'media',
        src: 'https://github.com/polmoneys/data-css',
        description: '',
    },
    ...SNIPPETS_GROUP,
    {
        label: '',
        value: '',
        kind: 'group',
        src: 'https://github.com/polmoneys/data-css',
        description: '',
    },
    ...SNIPPETS_UTILS,
];

export default SNIPPETS;

export type SnippetKind = 'utils' | 'form' | 'media' | 'group' | 'theme';

export interface Snippet {
    label: string;
    value: string;
    kind: SnippetKind;
    src: string;
    description: string;
    hidden?: boolean;
}

export interface Snippets extends Array<Snippet> {}

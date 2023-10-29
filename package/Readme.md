## TLDR

CSS documentation for FFF

### Use

Override `CSS property` value **inline** as in:

```html
<section data-container style="--container-width: 780px">
    <!-- ... -->
</section>
```

### Coming soon

Apply `:focus-visible`:

```css
[data-input] input:focus-visible,
[data-input] textarea:focus-visible {
    box-shadow: var(--shadow-focus);
    outline: var(--input-focus-outline);
}

@supports not selector(:focus-visible) {
    [data-input] input:focus,
    [data-input] textarea:focus {
        box-shadow: var(--shadow-focus);
        outline: var(--input-focus-outline);
    }
}
```

Provide `List` fallback for Firefox, still no `has` support yet:

```css
@supports not (selector(:has(*))) {
    /* ... */
}
```

Showcase `CSS gradients` to style Inputs/Dialogs/Cards with **slots** (start/end):

```css

[data-input]:has([data-input-start]):not(:has([data-input-end])) {
    background: repeating-linear-gradient(90deg, blue 0%, blue var(--input-start-width), transparent 100%);
}

[data-input]:not([data-input-start]):has(:has([data-input-end])) {
    background: repeating-linear-gradient(90deg, transparent calc(100% - var(--input-end-width), blue calc(100% - var(--input-end-width) , blue 100%);
}

```
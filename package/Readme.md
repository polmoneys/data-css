## TLDR

CSS documentation for F.F.F
Friends. Fools. Family

### Customization

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

Showcase `CSS gradients` to style IDialogs/Cards with **slots** (start/end).


### Why

Tokens and `[data-attributes]` will work with any **framework**, a quick `Group` component in React:

```tsx

const Group(props:GroupProps){
const {
    children,
    as,
    gap = '0',
    size,
    ratio,
    DANGEROUS,
    direction,
    stretch,
    alignItems,
    justifyContent,
    wrap,
    border,
    padding,
    marginAuto,
    ...rest
  } = props

  const stylesConfig: CSSProperties = useMemo(() => {
    return {
      gap,
      ...(wrap != null && { flexWrap: wrap }),
      ...(size != null && { flex: `1 0 ${size}` }),
      ...(direction != null && {
        flexDirection: direction,
      }),
      ...(stretch != null && {
        width: '100%',
        height: '100%',
      }),
      ...(alignItems != null && {
        alignItems,
      }),
      ...(justifyContent != null && {
        justifyContent,
      }),
    }
  }, [gap, size, stretch, alignItems, direction, justifyContent, wrap])

  const Tag = as ?? ('div' as ElementType)

  return createElement(
    Tag,
    {
      ...rest,
      style: {
        ...(DANGEROUS !== undefined && {
          ...DANGEROUS,
        }),
        ...stylesConfig,
      },
      'data-group': 'flex',
      ...(ratio != null && { 'data-ratio': ratio }),
      ...(border != null && { 'data-border': border }),
      ...(padding != null && { 'data-padding': padding }),
      ...(marginAuto != null && { 'data-margin-auto': marginAuto }),
    },
    children,
  )
}
```
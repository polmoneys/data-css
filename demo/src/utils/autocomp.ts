import { $ } from './';

// credits to https://knadh.github.io/autocomp.js/ - Super tiny Javascript autocomplete demo

const DEFAULTS = {
    onQuery: null,
    onNavigate: null,
    onSelect: null,
    onRender: null,
    debounce: 100,
};

export function autocomp(el: HTMLInputElement, options: any) {
    const opt: any = { ...DEFAULTS, ...options };
    let box: any,
        cur = 0,
        items: any = [],
        val: string | null,
        req: any;

    el.autocomplete = 'off';

    ['input', 'keydown', 'blur', 'focus'].forEach((k) =>
        el.addEventListener(k, handleEvent),
    );

    function handleEvent(event: Event) {
        if (event.type === 'keydown' && handleKeydown(event)) {
            return;
        }

        if (event.type === 'blur') {
            destroy();
            return;
        }

        if ((event.target as HTMLInputElement)?.value === '') {
            destroy();
            val = null;
            return;
        }

        if ((event.target as HTMLInputElement)?.value === val) {
            return;
        }

        val = (event.target as HTMLInputElement)?.value;

        // Clear (debounce) any existing pending requests and queue
        // the next search request.
        clearTimeout(req);
        req = setTimeout(query, opt.debounce);
    }

    function handleKeydown(event: Event) {
        if (!box) {
            return true;
        }

        switch ((event as KeyboardEvent).keyCode) {
            case 38:
                return navigate(-1, event); // Down arrow.
            case 40:
                return navigate(1, event); // Up arrow
            case 13: // Enter
                select(cur);
                destroy();
                return;
            case 27: // Escape.
                destroy();
                return;
        }
    }

    async function query() {
        if (!val) {
            return;
        }
        items = await opt.onQuery(val);
        if (!items.length) {
            destroy();
            return;
        }

        if (!$('.autocomp')) {
            createBox();
        }

        renderResults();
    }

    function createBox() {
        box = document.createElement('div');
        Object.assign(box.style, {
            width: window.getComputedStyle(el).width,
            position: 'absolute',
            left: `${el.offsetLeft}px`,
            top: `${el.offsetTop + el.offsetHeight}px`,
        });

        box.classList.add('autocomp');
        el?.parentNode?.insertBefore(box, el.nextSibling);
    }

    function renderResults() {
        box.innerHTML = '';

        items.forEach((item: any, idx: number) => {
            const div = document.createElement('div');
            div.classList.add('autocomp-item');

            // If there's a custom renderer callback, use it, else, simply insert the value/text as-is.
            opt.onRender
                ? div.appendChild(opt.onRender(item)!)
                : (div.innerText = item);
            if (idx === cur) {
                div.classList.add('autocomp-sel');
            }

            div.addEventListener('mousedown', () => select(idx));
            box.appendChild(div);
        });
    }

    function navigate(direction: any, event: Event) {
        event.preventDefault();

        // Remove the previous item's highlight;
        const prev = box.querySelector(`:nth-child(${cur + 1})`);
        prev && prev.classList.remove('autocomp-sel');

        // Increment the cursor and highlight the next item, cycled between [0, n].
        cur = (cur + direction + items.length) % items.length;
        box.querySelector(`:nth-child(${cur + 1})`).classList.add(
            'autocomp-sel',
        );
    }

    function select(idx: number) {
        if (!opt.onSelect) {
            return;
        }

        val = opt.onSelect(items[idx]);
        el.value = val || items[idx];
    }

    function destroy() {
        items = [];
        cur = 0;
        if (box) {
            box.remove();
            box = null;
        }
    }
}

export default autocomp;

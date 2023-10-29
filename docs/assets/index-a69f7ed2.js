(function () {
    const t = document.createElement('link').relList;
    if (t && t.supports && t.supports('modulepreload')) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]'))
        n(a);
    new MutationObserver((a) => {
        for (const o of a)
            if (o.type === 'childList')
                for (const r of o.addedNodes)
                    r.tagName === 'LINK' && r.rel === 'modulepreload' && n(r);
    }).observe(document, { childList: !0, subtree: !0 });
    function i(a) {
        const o = {};
        return (
            a.integrity && (o.integrity = a.integrity),
            a.referrerPolicy && (o.referrerPolicy = a.referrerPolicy),
            a.crossOrigin === 'use-credentials'
                ? (o.credentials = 'include')
                : a.crossOrigin === 'anonymous'
                ? (o.credentials = 'omit')
                : (o.credentials = 'same-origin'),
            o
        );
    }
    function n(a) {
        if (a.ep) return;
        a.ep = !0;
        const o = i(a);
        fetch(a.href, o);
    }
})();
function b(e) {
    return (
        'Minified Redux error #' +
        e +
        '; visit https://redux.js.org/Errors?code=' +
        e +
        ' for the full message or use the non-minified dev environment for full errors. '
    );
}
var et = (function () {
        return (
            (typeof Symbol == 'function' && Symbol.observable) || '@@observable'
        );
    })(),
    U = function () {
        return Math.random().toString(36).substring(7).split('').join('.');
    },
    it = {
        INIT: '@@redux/INIT' + U(),
        REPLACE: '@@redux/REPLACE' + U(),
        PROBE_UNKNOWN_ACTION: function () {
            return '@@redux/PROBE_UNKNOWN_ACTION' + U();
        },
    };
function Tt(e) {
    if (typeof e != 'object' || e === null) return !1;
    for (var t = e; Object.getPrototypeOf(t) !== null; )
        t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t;
}
function ft(e, t, i) {
    var n;
    if (
        (typeof t == 'function' && typeof i == 'function') ||
        (typeof i == 'function' && typeof arguments[3] == 'function')
    )
        throw new Error(b(0));
    if (
        (typeof t == 'function' && typeof i > 'u' && ((i = t), (t = void 0)),
        typeof i < 'u')
    ) {
        if (typeof i != 'function') throw new Error(b(1));
        return i(ft)(e, t);
    }
    if (typeof e != 'function') throw new Error(b(2));
    var a = e,
        o = t,
        r = [],
        c = r,
        l = !1;
    function d() {
        c === r && (c = r.slice());
    }
    function p() {
        if (l) throw new Error(b(3));
        return o;
    }
    function u(h) {
        if (typeof h != 'function') throw new Error(b(4));
        if (l) throw new Error(b(5));
        var M = !0;
        return (
            d(),
            c.push(h),
            function () {
                if (M) {
                    if (l) throw new Error(b(6));
                    (M = !1), d();
                    var E = c.indexOf(h);
                    c.splice(E, 1), (r = null);
                }
            }
        );
    }
    function v(h) {
        if (!Tt(h)) throw new Error(b(7));
        if (typeof h.type > 'u') throw new Error(b(8));
        if (l) throw new Error(b(9));
        try {
            (l = !0), (o = a(o, h));
        } finally {
            l = !1;
        }
        for (var M = (r = c), R = 0; R < M.length; R++) {
            var E = M[R];
            E();
        }
        return h;
    }
    function A(h) {
        if (typeof h != 'function') throw new Error(b(10));
        (a = h), v({ type: it.REPLACE });
    }
    function G() {
        var h,
            M = u;
        return (
            (h = {
                subscribe: function (E) {
                    if (typeof E != 'object' || E === null)
                        throw new Error(b(11));
                    function tt() {
                        E.next && E.next(p());
                    }
                    tt();
                    var Et = M(tt);
                    return { unsubscribe: Et };
                },
            }),
            (h[et] = function () {
                return this;
            }),
            h
        );
    }
    return (
        v({ type: it.INIT }),
        (n = { dispatch: v, subscribe: u, getState: p, replaceReducer: A }),
        (n[et] = G),
        n
    );
}
var It = ft;
const f = {
        TOGGLE_THEME: 'TOGGLE_THEME',
        SET_ORIENTATION: 'SET_ORIENTATION',
        SET_GROUP: 'SET_GROUP',
        SET_VARIANT: 'SET_VARIANT',
        SET_VARIANT_PANEL: 'SET_VARIANT_PANEL',
        RESET: 'RESET',
    },
    Mt = (e) => ({ type: f.SET_ORIENTATION, payload: e }),
    Ot = (e) => ({ type: f.SET_VARIANT, payload: e }),
    Nt = (e) => ({ type: f.SET_VARIANT_PANEL, payload: e }),
    Lt = (e) => ({ type: f.SET_GROUP, payload: e }),
    Ht = () => ({ type: f.TOGGLE_THEME }),
    St = (e) => {
        switch (e) {
            case f.SET_ORIENTATION:
                return Mt;
            case f.TOGGLE_THEME:
                return Ht;
            case f.SET_GROUP:
                return Lt;
            case f.SET_VARIANT:
                return Ot;
            case f.SET_VARIANT_PANEL:
                return Nt;
            default:
                return () => ({});
        }
    },
    Bt = {
        lightTheme: !0,
        orientation: 'landscape',
        group: 'panel',
        variant: 'pic',
        variantPanel: 'actions',
    };
function w(e, t, i) {
    const n = St(t);
    e.dispatch(n(i));
}
function Gt(e = Bt, t) {
    switch (t.type) {
        case f.TOGGLE_THEME:
            return { ...e, lightTheme: !e.lightTheme };
        case f.SET_ORIENTATION:
            return { ...e, orientation: t.payload };
        case f.SET_GROUP:
            return { ...e, group: t.payload };
        case f.SET_VARIANT:
            return { ...e, variant: t.payload };
        case f.SET_VARIANT_PANEL:
            return { ...e, variantPanel: t.payload };
        default:
            return e;
    }
}
const y = It(Gt);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var Y;
const W = window,
    H = W.trustedTypes,
    nt = H ? H.createPolicy('lit-html', { createHTML: (e) => e }) : void 0,
    X = '$lit$',
    T = `lit$${(Math.random() + '').slice(9)}$`,
    ht = '?' + T,
    Rt = `<${ht}>`,
    L = document,
    D = () => L.createComment(''),
    V = (e) => e === null || (typeof e != 'object' && typeof e != 'function'),
    gt = Array.isArray,
    Pt = (e) =>
        gt(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == 'function',
    z = `[ 	
\f\r]`,
    P = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
    at = /-->/g,
    ot = />/g,
    O = RegExp(
        `>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,
        'g',
    ),
    rt = /'/g,
    st = /"/g,
    mt = /^(?:script|style|textarea|title)$/i,
    $t =
        (e) =>
        (t, ...i) => ({ _$litType$: e, strings: t, values: i }),
    s = $t(1),
    _ = $t(2),
    S = Symbol.for('lit-noChange'),
    g = Symbol.for('lit-nothing'),
    lt = new WeakMap(),
    N = L.createTreeWalker(L, 129, null, !1);
function At(e, t) {
    if (!Array.isArray(e) || !e.hasOwnProperty('raw'))
        throw Error('invalid template strings array');
    return nt !== void 0 ? nt.createHTML(t) : t;
}
const jt = (e, t) => {
    const i = e.length - 1,
        n = [];
    let a,
        o = t === 2 ? '<svg>' : '',
        r = P;
    for (let c = 0; c < i; c++) {
        const l = e[c];
        let d,
            p,
            u = -1,
            v = 0;
        for (
            ;
            v < l.length && ((r.lastIndex = v), (p = r.exec(l)), p !== null);

        )
            (v = r.lastIndex),
                r === P
                    ? p[1] === '!--'
                        ? (r = at)
                        : p[1] !== void 0
                        ? (r = ot)
                        : p[2] !== void 0
                        ? (mt.test(p[2]) && (a = RegExp('</' + p[2], 'g')),
                          (r = O))
                        : p[3] !== void 0 && (r = O)
                    : r === O
                    ? p[0] === '>'
                        ? ((r = a ?? P), (u = -1))
                        : p[1] === void 0
                        ? (u = -2)
                        : ((u = r.lastIndex - p[2].length),
                          (d = p[1]),
                          (r = p[3] === void 0 ? O : p[3] === '"' ? st : rt))
                    : r === st || r === rt
                    ? (r = O)
                    : r === at || r === ot
                    ? (r = P)
                    : ((r = O), (a = void 0));
        const A = r === O && e[c + 1].startsWith('/>') ? ' ' : '';
        o +=
            r === P
                ? l + Rt
                : u >= 0
                ? (n.push(d), l.slice(0, u) + X + l.slice(u) + T + A)
                : l + T + (u === -2 ? (n.push(void 0), c) : A);
    }
    return [At(e, o + (e[i] || '<?>') + (t === 2 ? '</svg>' : '')), n];
};
class k {
    constructor({ strings: t, _$litType$: i }, n) {
        let a;
        this.parts = [];
        let o = 0,
            r = 0;
        const c = t.length - 1,
            l = this.parts,
            [d, p] = jt(t, i);
        if (
            ((this.el = k.createElement(d, n)),
            (N.currentNode = this.el.content),
            i === 2)
        ) {
            const u = this.el.content,
                v = u.firstChild;
            v.remove(), u.append(...v.childNodes);
        }
        for (; (a = N.nextNode()) !== null && l.length < c; ) {
            if (a.nodeType === 1) {
                if (a.hasAttributes()) {
                    const u = [];
                    for (const v of a.getAttributeNames())
                        if (v.endsWith(X) || v.startsWith(T)) {
                            const A = p[r++];
                            if ((u.push(v), A !== void 0)) {
                                const G = a
                                        .getAttribute(A.toLowerCase() + X)
                                        .split(T),
                                    h = /([.?@])?(.*)/.exec(A);
                                l.push({
                                    type: 1,
                                    index: o,
                                    name: h[2],
                                    strings: G,
                                    ctor:
                                        h[1] === '.'
                                            ? Vt
                                            : h[1] === '?'
                                            ? qt
                                            : h[1] === '@'
                                            ? Wt
                                            : Z,
                                });
                            } else l.push({ type: 6, index: o });
                        }
                    for (const v of u) a.removeAttribute(v);
                }
                if (mt.test(a.tagName)) {
                    const u = a.textContent.split(T),
                        v = u.length - 1;
                    if (v > 0) {
                        a.textContent = H ? H.emptyScript : '';
                        for (let A = 0; A < v; A++)
                            a.append(u[A], D()),
                                N.nextNode(),
                                l.push({ type: 2, index: ++o });
                        a.append(u[v], D());
                    }
                }
            } else if (a.nodeType === 8)
                if (a.data === ht) l.push({ type: 2, index: o });
                else {
                    let u = -1;
                    for (; (u = a.data.indexOf(T, u + 1)) !== -1; )
                        l.push({ type: 7, index: o }), (u += T.length - 1);
                }
            o++;
        }
    }
    static createElement(t, i) {
        const n = L.createElement('template');
        return (n.innerHTML = t), n;
    }
}
function B(e, t, i = e, n) {
    var a, o, r, c;
    if (t === S) return t;
    let l =
        n !== void 0
            ? (a = i._$Co) === null || a === void 0
                ? void 0
                : a[n]
            : i._$Cl;
    const d = V(t) ? void 0 : t._$litDirective$;
    return (
        (l == null ? void 0 : l.constructor) !== d &&
            ((o = l == null ? void 0 : l._$AO) === null ||
                o === void 0 ||
                o.call(l, !1),
            d === void 0 ? (l = void 0) : ((l = new d(e)), l._$AT(e, i, n)),
            n !== void 0
                ? (((r = (c = i)._$Co) !== null && r !== void 0
                      ? r
                      : (c._$Co = []))[n] = l)
                : (i._$Cl = l)),
        l !== void 0 && (t = B(e, l._$AS(e, t.values), l, n)),
        t
    );
}
class Dt {
    constructor(t, i) {
        (this._$AV = []),
            (this._$AN = void 0),
            (this._$AD = t),
            (this._$AM = i);
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        var i;
        const {
                el: { content: n },
                parts: a,
            } = this._$AD,
            o = (
                (i = t == null ? void 0 : t.creationScope) !== null &&
                i !== void 0
                    ? i
                    : L
            ).importNode(n, !0);
        N.currentNode = o;
        let r = N.nextNode(),
            c = 0,
            l = 0,
            d = a[0];
        for (; d !== void 0; ) {
            if (c === d.index) {
                let p;
                d.type === 2
                    ? (p = new q(r, r.nextSibling, this, t))
                    : d.type === 1
                    ? (p = new d.ctor(r, d.name, d.strings, this, t))
                    : d.type === 6 && (p = new Zt(r, this, t)),
                    this._$AV.push(p),
                    (d = a[++l]);
            }
            c !== (d == null ? void 0 : d.index) && ((r = N.nextNode()), c++);
        }
        return (N.currentNode = L), o;
    }
    v(t) {
        let i = 0;
        for (const n of this._$AV)
            n !== void 0 &&
                (n.strings !== void 0
                    ? (n._$AI(t, n, i), (i += n.strings.length - 2))
                    : n._$AI(t[i])),
                i++;
    }
}
class q {
    constructor(t, i, n, a) {
        var o;
        (this.type = 2),
            (this._$AH = g),
            (this._$AN = void 0),
            (this._$AA = t),
            (this._$AB = i),
            (this._$AM = n),
            (this.options = a),
            (this._$Cp =
                (o = a == null ? void 0 : a.isConnected) === null ||
                o === void 0 ||
                o);
    }
    get _$AU() {
        var t, i;
        return (i =
            (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !==
            null && i !== void 0
            ? i
            : this._$Cp;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return (
            i !== void 0 &&
                (t == null ? void 0 : t.nodeType) === 11 &&
                (t = i.parentNode),
            t
        );
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        (t = B(this, t, i)),
            V(t)
                ? t === g || t == null || t === ''
                    ? (this._$AH !== g && this._$AR(), (this._$AH = g))
                    : t !== this._$AH && t !== S && this._(t)
                : t._$litType$ !== void 0
                ? this.g(t)
                : t.nodeType !== void 0
                ? this.$(t)
                : Pt(t)
                ? this.T(t)
                : this._(t);
    }
    k(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    $(t) {
        this._$AH !== t && (this._$AR(), (this._$AH = this.k(t)));
    }
    _(t) {
        this._$AH !== g && V(this._$AH)
            ? (this._$AA.nextSibling.data = t)
            : this.$(L.createTextNode(t)),
            (this._$AH = t);
    }
    g(t) {
        var i;
        const { values: n, _$litType$: a } = t,
            o =
                typeof a == 'number'
                    ? this._$AC(t)
                    : (a.el === void 0 &&
                          (a.el = k.createElement(
                              At(a.h, a.h[0]),
                              this.options,
                          )),
                      a);
        if (((i = this._$AH) === null || i === void 0 ? void 0 : i._$AD) === o)
            this._$AH.v(n);
        else {
            const r = new Dt(o, this),
                c = r.u(this.options);
            r.v(n), this.$(c), (this._$AH = r);
        }
    }
    _$AC(t) {
        let i = lt.get(t.strings);
        return i === void 0 && lt.set(t.strings, (i = new k(t))), i;
    }
    T(t) {
        gt(this._$AH) || ((this._$AH = []), this._$AR());
        const i = this._$AH;
        let n,
            a = 0;
        for (const o of t)
            a === i.length
                ? i.push(
                      (n = new q(this.k(D()), this.k(D()), this, this.options)),
                  )
                : (n = i[a]),
                n._$AI(o),
                a++;
        a < i.length && (this._$AR(n && n._$AB.nextSibling, a), (i.length = a));
    }
    _$AR(t = this._$AA.nextSibling, i) {
        var n;
        for (
            (n = this._$AP) === null || n === void 0 || n.call(this, !1, !0, i);
            t && t !== this._$AB;

        ) {
            const a = t.nextSibling;
            t.remove(), (t = a);
        }
    }
    setConnected(t) {
        var i;
        this._$AM === void 0 &&
            ((this._$Cp = t),
            (i = this._$AP) === null || i === void 0 || i.call(this, t));
    }
}
class Z {
    constructor(t, i, n, a, o) {
        (this.type = 1),
            (this._$AH = g),
            (this._$AN = void 0),
            (this.element = t),
            (this.name = i),
            (this._$AM = a),
            (this.options = o),
            n.length > 2 || n[0] !== '' || n[1] !== ''
                ? ((this._$AH = Array(n.length - 1).fill(new String())),
                  (this.strings = n))
                : (this._$AH = g);
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t, i = this, n, a) {
        const o = this.strings;
        let r = !1;
        if (o === void 0)
            (t = B(this, t, i, 0)),
                (r = !V(t) || (t !== this._$AH && t !== S)),
                r && (this._$AH = t);
        else {
            const c = t;
            let l, d;
            for (t = o[0], l = 0; l < o.length - 1; l++)
                (d = B(this, c[n + l], i, l)),
                    d === S && (d = this._$AH[l]),
                    r || (r = !V(d) || d !== this._$AH[l]),
                    d === g ? (t = g) : t !== g && (t += (d ?? '') + o[l + 1]),
                    (this._$AH[l] = d);
        }
        r && !a && this.j(t);
    }
    j(t) {
        t === g
            ? this.element.removeAttribute(this.name)
            : this.element.setAttribute(this.name, t ?? '');
    }
}
class Vt extends Z {
    constructor() {
        super(...arguments), (this.type = 3);
    }
    j(t) {
        this.element[this.name] = t === g ? void 0 : t;
    }
}
const kt = H ? H.emptyScript : '';
class qt extends Z {
    constructor() {
        super(...arguments), (this.type = 4);
    }
    j(t) {
        t && t !== g
            ? this.element.setAttribute(this.name, kt)
            : this.element.removeAttribute(this.name);
    }
}
class Wt extends Z {
    constructor(t, i, n, a, o) {
        super(t, i, n, a, o), (this.type = 5);
    }
    _$AI(t, i = this) {
        var n;
        if ((t = (n = B(this, t, i, 0)) !== null && n !== void 0 ? n : g) === S)
            return;
        const a = this._$AH,
            o =
                (t === g && a !== g) ||
                t.capture !== a.capture ||
                t.once !== a.once ||
                t.passive !== a.passive,
            r = t !== g && (a === g || o);
        o && this.element.removeEventListener(this.name, this, a),
            r && this.element.addEventListener(this.name, this, t),
            (this._$AH = t);
    }
    handleEvent(t) {
        var i, n;
        typeof this._$AH == 'function'
            ? this._$AH.call(
                  (n =
                      (i = this.options) === null || i === void 0
                          ? void 0
                          : i.host) !== null && n !== void 0
                      ? n
                      : this.element,
                  t,
              )
            : this._$AH.handleEvent(t);
    }
}
class Zt {
    constructor(t, i, n) {
        (this.element = t),
            (this.type = 6),
            (this._$AN = void 0),
            (this._$AM = i),
            (this.options = n);
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        B(this, t);
    }
}
const dt = W.litHtmlPolyfillSupport;
dt == null || dt(k, q),
    ((Y = W.litHtmlVersions) !== null && Y !== void 0
        ? Y
        : (W.litHtmlVersions = [])
    ).push('2.8.0');
const C = (e, t, i) => {
    var n, a;
    const o =
        (n = i == null ? void 0 : i.renderBefore) !== null && n !== void 0
            ? n
            : t;
    let r = o._$litPart$;
    if (r === void 0) {
        const c =
            (a = i == null ? void 0 : i.renderBefore) !== null && a !== void 0
                ? a
                : null;
        o._$litPart$ = r = new q(t.insertBefore(D(), c), c, void 0, i ?? {});
    }
    return r._$AI(e), r;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Ut = {
        ATTRIBUTE: 1,
        CHILD: 2,
        PROPERTY: 3,
        BOOLEAN_ATTRIBUTE: 4,
        EVENT: 5,
        ELEMENT: 6,
    },
    Yt =
        (e) =>
        (...t) => ({ _$litDirective$: e, values: t });
let zt = class {
    constructor(t) {}
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t, i, n) {
        (this._$Ct = t), (this._$AM = i), (this._$Ci = n);
    }
    _$AS(t, i) {
        return this.update(t, i);
    }
    update(t, i) {
        return this.render(...i);
    }
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const xt = 'important',
    Qt = ' !' + xt,
    Ft = Yt(
        class extends zt {
            constructor(e) {
                var t;
                if (
                    (super(e),
                    e.type !== Ut.ATTRIBUTE ||
                        e.name !== 'style' ||
                        ((t = e.strings) === null || t === void 0
                            ? void 0
                            : t.length) > 2)
                )
                    throw Error(
                        'The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.',
                    );
            }
            render(e) {
                return Object.keys(e).reduce((t, i) => {
                    const n = e[i];
                    return n == null
                        ? t
                        : t +
                              `${(i = i.includes('-')
                                  ? i
                                  : i
                                        .replace(
                                            /(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,
                                            '-$&',
                                        )
                                        .toLowerCase())}:${n};`;
                }, '');
            }
            update(e, [t]) {
                const { style: i } = e.element;
                if (this.ht === void 0) {
                    this.ht = new Set();
                    for (const n in t) this.ht.add(n);
                    return this.render(t);
                }
                this.ht.forEach((n) => {
                    t[n] == null &&
                        (this.ht.delete(n),
                        n.includes('-') ? i.removeProperty(n) : (i[n] = ''));
                });
                for (const n in t) {
                    const a = t[n];
                    if (a != null) {
                        this.ht.add(n);
                        const o = typeof a == 'string' && a.endsWith(Qt);
                        n.includes('-') || o
                            ? i.setProperty(
                                  n,
                                  o ? a.slice(0, -11) : a,
                                  o ? xt : '',
                              )
                            : (i[n] = a);
                    }
                }
                return S;
            }
        },
    );
function I(e) {
    const {
        vertices: t,
        size: i,
        fill: n,
        label: a,
        transforms: o,
        children: r = !1,
    } = e;
    return Jt({
        children: r,
        vertices: t,
        size: i,
        fill: n,
        label: a,
        transforms: o,
    });
}
let bt = function (e) {
        return (Math.PI * e) / 180;
    },
    Kt = function (e, t, i) {
        return i + e * Math.cos(bt(t));
    },
    Xt = function (e, t, i) {
        return i + e * Math.sin(bt(t));
    },
    ct = function (e) {
        return e < 1e-7 ? 0 : e;
    };
const Jt = (e) => {
    let t = e.size || 96,
        i = t / 2,
        n = (1 * t) / 2,
        a = 360 / e.vertices,
        o = 90,
        r = e.fill || 'red',
        c = [0, 0, t, t].join(' ');
    const d = [
        (function (p) {
            for (var u = [], v = 0; v < p; v++) {
                var A = a * v - o,
                    G = [
                        v === 0 ? 'M' : 'L',
                        ct(Kt(n, A, i)),
                        ct(Xt(n, A, i)),
                    ].join(' ');
                u.push(G);
            }
            return u.join(' ');
        })(e.vertices),
    ].join(' ');
    return e.children
        ? s`
            <div class="col-center align-center shape-with-label">
                ${Q(t, c, r, d, e.transforms)}
                ${e.children}
            </div>
        `
        : e.label
        ? s`
            <div class="col-center align-center shape-with-label">
                ${Q(t, c, r, d, e.transforms)}
                <p class="-win" style="font-size:55px;font-weight:bold">
                    ${e.label}
                </p>
            </div>
        `
        : s` ${Q(t, c, r, d, e.transforms)} `;
};
function Q(e, t, i, n, a) {
    if (a) {
        let o = { transformOrigin: 'center', transform: `${a}` };
        return _`<svg
    viewBox=${t}
    width=${e}
    height=${e}
    fill=${i}
    style="${Ft(o)}"
  >
    <path d=${n} />
  </svg>`;
    } else
        return _`<svg
    viewBox=${t}
    width=${e}
    height=${e}
    fill=${i}
  >
    <path d=${n} />
  </svg>`;
}
function te() {
    return I({ vertices: 22, size: 100, fill: 'var(--group-actions-bg)' });
}
function _t() {
    return s`<h2 class="headline" />`;
}
function $(e = 1, t) {
    return s` ${[...Array(e)].map(
        (i) => s`<p class="text ${t ? 'text-short' : ''}" />`,
    )}`;
}
function J() {
    return s` <button>${$()}</button> `;
}
function ee(e, t) {
    return s`
        <div class="gap:md ${e ? 'reorder:top' : ''}">
            ${x.HeadLine()} ${x.Line(3)}
            ${
                t
                    ? s` <label class="text-input">
                      <input type="text" placeholder="Write it" />
                  </label>`
                    : s``
            }
        </div>
    `;
}
function ie(e) {
    return s`
        <div data-reorder="${e ? 'top' : ''}">
            ${$(1, !0)}
            <div>${J()}${J()}</div>
        </div>
    `;
}
const x = {};
x.Content = ee;
x.HeadLine = _t;
x.Line = $;
x.Actions = ie;
function ne(e) {
    C(ae(e), document.querySelector('#loop article'));
}
function ae(e) {
    return s`
        <div data-group="" data-panel="">${oe(e)}</div>
    `;
}
function oe(e) {
    switch (e) {
        case 'actions':
            return s` ${x.Content()} ${x.Actions()} `;
        case 'actions-reorder':
            return s` ${x.Content()}${x.Actions(!0)} `;
        case 'input':
            return s` ${x.Content(!0, !0)} ${x.Actions()} `;
        default:
            return s` ${x.Content()}`;
    }
}
function re() {
    return s`
        <picture>
            <img
                src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            />
        </picture>
    `;
}
function se(e) {
    return s`
        <div data-gap="sm" data-reorder="${e ? 'top' : ''}">
            ${m.HeadLine()} ${m.Line(3)}
        </div>
    `;
}
function le(e) {
    return s`
        <div data-gap="sm" data-reorder="${e ? 'top' : ''}">
            ${J()}
        </div>
    `;
}
const m = {};
m.Pic = re;
m.Content = se;
m.Avatar = te;
m.HeadLine = _t;
m.Line = $;
m.Actions = le;
function de(e, t) {
    C(yt(e, t), document.querySelector('#loop article'));
}
function yt(e, t) {
    return s` <div
        class="${e === 'portrait' ? 'fix-portrait-card-height' : ''}"
    >
        <div data-group="" data-card="" data-ratio="${e}">
            ${ce(t)}
        </div>
    </div>`;
}
function ce(e) {
    switch (e) {
        case 'actions':
            return s` ${m.Content()} ${m.Actions()} `;
        case 'pic':
            return s` ${m.Pic()}
                <div class="pin-avatar">${m.Avatar()}</div>`;
        case 'pic-content':
            return s` ${m.Pic()} ${m.Content()} `;
        case 'pic-reorder':
            return s` ${m.Pic()} ${m.Content(!0)} `;
        default:
            return s``;
    }
}
function ue(e) {
    C(pe(e), document.querySelector('#loop article'));
}
function pe(e) {
    return ve(e);
}
function ve(e) {
    return s`
        <ul role="list" aria-label=${e} data-group="" data-list="">
            ${F()} ${F(!0)}${F(!1, !0)}
            ${[...Array(3)].map((t, i) => j(i))} ${j(1e4, !0)}
            ${[...Array(3)].map((t, i) => j(i + 4))} ${j(1e4, !0)}
            ${[...Array(2)].map((t, i) => j(i + 8))}
        </ul>
    `;
}
function wt() {
    return s`<p class="headline headline-short" />`;
}
function F(e, t) {
    return s` <li data-list-item="">
        ${
            e
                ? s`<div data-list-item-start="">
                  ${I({ vertices: 8, size: 24, fill: 'rgba(0,0,0,.4)' })}
              </div>`
                : s``
        }
        <div>${wt()} ${$()}</div>
        ${
            t
                ? s`<div data-list-item-end="">
                  ${I({ vertices: 8, size: 24, fill: 'rgba(0,0,0,.4)' })}
              </div>`
                : s``
        }
    </li>`;
}
function j(e, t) {
    const i = [1, 5],
        n = [1, 2, 3, 5, 7];
    return t !== void 0
        ? s`
            <li data-list-item="">
                <div>
                    <div data-list-item-divider="">${$(1, !0)}</div>
                </div>
            </li>
        `
        : s` <li data-list-item="">
        ${s`<div data-list-item-start="">
            ${I({
                vertices: 8,
                size: 24,
                fill: i.includes(e) ? 'var(--accent-error)' : 'rgba(0,0,0,.4)',
            })}
        </div>`}
        <div>${wt()} ${$()}</div>

        ${s`<div data-list-item-end="">
            ${I({
                vertices: 4,
                size: 24,
                fill: [...n, ...i].includes(e)
                    ? 'var(--accent)'
                    : 'rgba(0,0,0,.4)',
            })}
        </div>`}
    </li>`;
}
function fe(e) {
    const t = (i) => {
        const n = i.target.dataset.nav,
            a = i.target.dataset.option;
        n === 'group' && w(y, f.SET_GROUP, a);
    };
    return s`
        <div class="subnav">
            <button
                data-side="bottom"
                data-nav="group"
                data-option="card"
                @click=${{ handleEvent: t }}
            >
                ${I({
                    vertices: 3,
                    size: 45,
                    transforms: 'translateX(10px)',
                    fill:
                        e === 'card'
                            ? 'var(--accent-error)'
                            : 'var(--group-actions-color)',
                })}
            </button>
            <button
                data-side="bottom"
                data-nav="group"
                data-option="panel"
                @click=${{ handleEvent: t }}
            >
                ${I({
                    vertices: 4,
                    size: 45,
                    transforms: 'translateX(10px)',
                    fill:
                        e === 'panel'
                            ? 'var(--accent-error)'
                            : 'var(--group-actions-color)',
                })}
            </button>
            <button
                data-side="bottom"
                data-nav="group"
                data-option="list"
                @click=${{ handleEvent: t }}
            >
                ${I({
                    vertices: 22,
                    size: 45,
                    transforms: 'translateX(10px)',
                    fill:
                        e === 'list'
                            ? 'var(--accent-error)'
                            : 'var(--group-actions-color)',
                })}
            </button>
        </div>
    `;
}
function ut(e, t) {
    const i = (a) => {
            const o = Number(a.target.value);
            if (o === 0) return w(y, f.SET_VARIANT, 'pic');
            if (o === 5) return w(y, f.SET_VARIANT, 'pic-content');
            if (o === 10) return w(y, f.SET_VARIANT, 'pic-reorder');
            if (o === 15) return w(y, f.SET_VARIANT, 'actions');
        },
        n = (a) =>
            ({ pic: 0, 'pic-content': 5, 'pic-reorder': 10, actions: 15 })[a];
    return t
        ? s``
        : s`
        <label>
            <input
                type="range"
                min="0"
                max="15"
                value="${n(e)}"
                step="5"
                id="range"
                @input=${{ handleEvent: i }}
                list="markers"
            />
        </label>
        <datalist id="markers">
            <option value="0"></option>
            <option value="5"></option>
            <option value="10"></option>
            <option value="15"></option>
            <option value="20"></option>
        </datalist>
    `;
}
function pt(e, t) {
    const i = (a) => {
            const o = Number(a.target.value);
            if (o === 0) return w(y, f.SET_VARIANT_PANEL, 'actions');
            if (o === 10) return w(y, f.SET_VARIANT_PANEL, 'actions-reorder');
            if (o === 20) return w(y, f.SET_VARIANT_PANEL, 'input');
        },
        n = (a) => ({ actions: 0, 'actions-reorder': 5, input: 10 })[a];
    return t
        ? s``
        : s`
        <label>
            <input
                type="range"
                min="0"
                max="20"
                value="${n(e)}"
                step="10"
                id="range"
                @input=${{ handleEvent: i }}
                list="markers"
            />
        </label>
        <datalist id="markers">
            <option value="0"></option>
            <option value="10"></option>
            <option value="20"></option>
        </datalist>
    `;
}
function vt(e, t) {
    const i = (n) => {
        const a = n.target.dataset.nav,
            o = n.target.dataset.option;
        a === 'ratio' && w(y, f.SET_ORIENTATION, o);
    };
    return t
        ? s``
        : s`
        <div class="subnav">
            <button
                data-nav="ratio"
                data-option="square"
                @click=${{ handleEvent: i }}
            >
                <svg viewBox="0 0 64 64" width="64" height="64">
                    <rect
                        x="10"
                        y="10"
                        width="44"
                        height="44"
                        fill="${
                            e === 'square'
                                ? 'var(--accent-error)'
                                : 'var(--group-actions-color)'
                        }"
                        rx="2"
                    />
                </svg>
            </button>

            <button
                data-nav="ratio"
                data-option="portrait"
                @click=${{ handleEvent: i }}
            >
                <svg viewBox="0 0 64 64" width="64" height="64">
                    <rect
                        x="10"
                        y="6"
                        width="44"
                        height="52"
                        fill="${
                            e === 'portrait'
                                ? 'var(--accent-error)'
                                : 'var(--group-actions-color)'
                        }"
                        rx="2"
                    />
                </svg>
            </button>

            <button
                data-nav="ratio"
                data-option="landscape"
                @click=${{ handleEvent: i }}
            >
                <svg viewBox="0 0 64 64" width="64" height="64">
                    <rect
                        x="6"
                        y="14"
                        width="52"
                        height="38"
                        fill="${
                            e === 'landscape'
                                ? 'var(--accent-error)'
                                : 'var(--group-actions-color)'
                        }"
                        rx="2"
                    />
                </svg>
            </button>
        </div>
    `;
}
function he(e) {
    C(ge(e), document.querySelector('#controls-nav'));
}
function ge(e) {
    const t = e.group === 'card',
        i = e.group === 'panel';
    return s`
        ${fe(e.group)}
        ${t ? ut(e.variant) : ut(e.variant, !0)}
        ${t ? vt(e.orientation) : vt(e.orientation, !0)}
        ${i ? pt(e.variantPanel) : pt(e.variantPanel, !0)}
    `;
}
function me(e) {
    C($e(e), document.querySelector('#title'));
}
function $e(e) {
    const t =
        e === 'card'
            ? 'content with ratio'
            : e === 'list'
            ? 'items with prefix/sufix actions'
            : 'interactive elements';
    return s` <strong>${`${e}:`}</strong> groups ${t}`;
}
function K(e, t, i) {
    C(Ae(e, t, i), document.querySelector('aside'));
}
function Ae(e, t, i) {
    const n = e === 'portrait';
    return i
        ? s``
        : s`
        <div
            data-group=""
            data-gap="md"
            data-intrinsic-grid="${n ? '' : 'md'}"
        >
            ${[...Array(4)].map((a) => yt(e, t))}
        </div>
    `;
}
function xe() {
    C(be(), document.querySelector('#font'));
}
function be() {
    return s`
        <div data-group="flex" data-flex="column" data-gap="sm">
            <div aria-hidden="true">${$(8)}</div>
            ${_e()}
            <div aria-hidden="true">${$(3)}</div>
            ${ye()}
            <div aria-hidden="true">${$(3)}</div>
        </div>
    `;
}
function _e() {
    return s`
        <div data-intrinsic-grid="">
            <div data-group="flex" data-flex="column" data-gap="sm">
                <p data-font="xs">Aa AA</p>
                <p data-font="sm">Aa AA</p>
                <p data-font="md">Aa AA</p>
                <p data-font="">Aa AA</p>
                <p data-font="lg">Aa AA</p>
                <p data-font="xl">Aa AA</p>
                <p data-font="xxl">Aa AA</p>
            </div>
            <div data-group="flex" data-flex="column" data-gap="sm">
                <a href="javascript:;">Link</a>
                <a href="javascript:;" data-button="">Button Link</a>
                <a href="javascript:;" data-button="sm">Small</a>

                <button data-button="" type="button">Real Button</button>
                <button data-button="circle" type="button" aria-label="Like">
                    ${_`<svg data-input-start="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="var(--color-focus)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>`}
                </button>
                <a href="javascript:;" data-button="stretch">✨ Stretch ✨</a>
            </div>
        </div>
    `;
}
function ye() {
    return s` <p data-font="lg">
            Intrinsic sizes with flex-wrap. Above Fonts and Buttons/Links are
            made with grid. No width mediaQuery used yet site is reponsive.
        </p>
        <div id="extras">
            <div
                data-group="unit"
                data-gap="sm"
                data-padding="xy"
                data-paper="accent"
            >
                ${_`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="var(--color-focus)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>`}
                <p data-font="">3.444</p>
            </div>
            <div
                data-group="unit"
                data-gap="sm"
                data-padding="xy"
                data-paper="accent"
            >
                ${_`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="var(--color-focus)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>`}
                <p data-font="">688.888</p>
            </div>
            <div
                data-group="unit"
                data-gap="sm"
                data-padding="xy"
                data-paper="accent"
            >
                <p data-font="">3.444</p>
                ${_`
            <svg width="15" height="15" viewBox="0 0 15 15"   ><path fill="var(--color-focus)" d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z" fill="currentColor"></path></svg>
           `}
            </div>
            <div
                data-group="unit"
                data-gap="sm"
                data-padding="xy"
                data-paper="accent"
            >
                <p data-font="">688.888</p>
                ${_`
            <svg width="15" height="15" viewBox="0 0 15 15"   ><path fill="var(--color-focus)" d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z" fill="currentColor"></path></svg>
           `}
            </div>
        </div>`;
}
function we() {
    C(Ce(), document.querySelector('#form'));
}
function Ce() {
    return s` <form
        action=""
        data-group="flex"
        data-flex="column"
        data-gap="sm"
    >
        ${Me()}
        <div aria-hidden="true">${$(2)}</div>
        <div data-intrinsic-grid data-gap="xl">${Te()} ${Ie()}</div>
        <div aria-hidden="true">${$(6)}</div>
        ${Ee()}
        <div aria-hidden="true">${$(3)}</div>
    </form>`;
}
function Ee() {
    return s`
        <div data-intrinsic-grid data-gap="xl">
            <div data-group="grid" data-gap="sm">
                <label for="standard-select">Standard Select</label>
                <div data-select="">
                    <select id="standard-select">
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                        <option value="Option 4">Option 4</option>
                        <option value="Option 5">Option 5</option>
                        <option value="Option length">
                            Option that has too long of a value to fit
                        </option>
                    </select>
                    <span data-select-focus=""></span>
                </div>

                <label for="multi-select">Multiple Select</label>
                <div data-select="multiple">
                    <select id="multi-select" multiple>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                        <option value="Option 4">Option 4</option>
                        <option value="Option 5">Option 5</option>
                        <option value="Option length">
                            Option that has too long of a value to fit
                        </option>
                    </select>
                    <span data-select-focus=""></span>
                </div>
            </div>
            <div>
                <label for="standard-select-disabled">Disabled Select</label>
                <div data-select="">
                    <select id="standard-select-disabled" disabled>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                        <option value="Option 4">Option 4</option>
                        <option value="Option 5">Option 5</option>
                        <option value="Option length">
                            Option that is a long value and could wrap
                        </option>
                    </select>
                </div>

                <label for="standard-select">Disabled Multiple Select</label>
                <div data-select="multiple">
                    <select id="multi-select-disabled" multiple disabled>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                        <option value="Option 4">Option 4</option>
                        <option value="Option 5">Option 5</option>
                        <option value="Option length">
                            Option that is a long value and could wrap
                        </option>
                    </select>
                </div>
            </div>
        </div>
    `;
}
function Te() {
    return s`
        <fieldset>
            <legend>Select option:</legend>
            <div data-group="unit" data-place-content="start" data-gap="sm">
                <label for="radio-a"> A </label>
                <input type="radio" name="option" value="A" id="radio-a" />
            </div>
            <div data-group="unit" data-place-content="start" data-gap="sm">
                <label for="radio-b"> B </label>
                <input
                    type="radio"
                    name="option"
                    value="B"
                    checked
                    id="radio-b"
                />
            </div>
            <div data-group="unit" data-place-content="start" data-gap="sm">
                <label for="radio-c"> C </label>
                <input type="radio" name="option" value="C" id="radio-c" />
            </div>
            <div data-group="unit" data-place-content="start" data-gap="sm">
                <label for="radio-d"> D </label>
                <input
                    type="radio"
                    name="option"
                    value="D"
                    checked
                    disabled
                    id="radio-d"
                />
            </div>
        </fieldset>
    `;
}
function Ie() {
    return s`
        <fieldset>
            <legend>Check options:</legend>

            <div data-group="unit" data-place-content="start" data-gap="sm">
                <label for="radio-a"> A </label>
                <input type="checkbox" name="option" value="A" id="radio-a" />
            </div>
            <div data-group="unit" data-place-content="start" data-gap="sm">
                <label for="radio-b"> B </label>
                <input
                    type="checkbox"
                    name="option"
                    value="B"
                    checked
                    id="radio-b"
                />
            </div>

            <div data-group="unit" data-place-content="start" data-gap="sm">
                <label for="checkbox-c"> C </label>
                <input
                    type="checkbox"
                    name="option"
                    value="C"
                    id="checkbox-c"
                />
            </div>
            <div data-group="unit" data-place-content="start" data-gap="sm">
                <label for="checkbox-d"> D </label>
                <input
                    type="checkbox"
                    name="option"
                    value="D"
                    checked
                    disabled
                    id="checkbox-d"
                />
            </div>
        </fieldset>
    `;
}
function Me() {
    return s`
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
                ${_`<svg data-input-start="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="var(--color-focus)"
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
                ${_`<svg data-input-end="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="var(--color-focus)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>`}
            </div>
            <div data-input="">
                ${_`<svg data-input-start="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="var(--color-focus)"
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
                ${_`<svg data-input-end="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="var(--color-focus)"
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
                />
                <p
                    data-padding="x"
                    data-input-end=""
                    style="--input-end-width:68px"
                >
                    .com
                </p>
            </div>
            ${$(4)}
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
                        <textarea id="textarea"></textarea>
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
    `;
}
function Oe() {
    var e = new URLSearchParams(window.location.search);
    return e.get('group') === 'true';
}
function Ne() {
    C(Le(), document.querySelector('#cards'));
}
function Le() {
    return s` <div>
        <div data-scroller="">
            <div>
                ${[...Array(12)].map(
                    (e) => s`<div
                            data-ratio="portrait"
                            style="--scroller-max-inline-size:10rem"
                            data-place-items="center"
                            data-place-content="center"
                            data-paper="accent"
                            data-font="xxxl"
                        >
                            ${_`<svg style="transform:scale(2.4)" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                    fill="var(--color-focus)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>`}
                        </div>`,
                )}
            </div>
        </div>
        ${$(8)}
        <div data-scroller="">
            <div>
                <div data-ratio="landscape" data-scroller-item="lg">
                    <picture>
                        <img
                            src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        />
                    </picture>
                </div>
                <div data-ratio="landscape" data-scroller-item="lg">
                    <picture>
                        <img
                            src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        />
                    </picture>
                </div>
                <div data-ratio="landscape">
                    <picture>
                        <img
                            src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        />
                    </picture>
                </div>
                <div data-ratio="landscape">
                    <picture>
                        <img
                            src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        />
                    </picture>
                </div>
                <div data-scroller-item="sm">
                    <picture>
                        <img
                            src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        />
                    </picture>
                </div>
                <div data-scroller-item="sm">
                    <picture>
                        <img
                            src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        />
                    </picture>
                </div>
                <div data-ratio="landscape">
                    <picture>
                        <img
                            src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        />
                    </picture>
                </div>
                <div data-scroller-item="lg">
                    <picture>
                        <img
                            src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        />
                    </picture>
                </div>
                <div data-ratio="landscape">
                    <picture>
                        <img
                            src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        />
                    </picture>
                </div>
                <div data-ratio="landscape" data-scroller-item="lg">
                    <picture>
                        <img
                            src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        />
                    </picture>
                </div>
                <div data-ratio="landscape">
                    <picture>
                        <img
                            src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        />
                    </picture>
                </div>
                <div data-ratio="landscape" data-scroller-item="sm">
                    <picture>
                        <img
                            src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        />
                    </picture>
                </div>
                <div data-ratio="landscape">
                    <picture>
                        <img
                            src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        />
                    </picture>
                </div>
            </div>
        </div>
        ${$(1)}
    </div>`;
}
y.subscribe(Ct);
function Ct() {
    const {
        orientation: e,
        group: t,
        variant: i,
        variantPanel: n,
    } = y.getState();
    me(t),
        he({ orientation: e, group: t, variant: i, variantPanel: n }),
        t === 'card' && (de(e, i), K(e, i)),
        t === 'panel' && (K(e, i, !0), ne(n)),
        t === 'list' && (K(e, i, !0), ue('list-label'));
}
document.addEventListener('DOMContentLoaded', function () {
    var t, i;
    if (!Oe())
        (i = document.querySelector('#controls')) == null ||
            i.classList.remove('show'),
            xe(),
            we(),
            Ne();
    else {
        (t = document.querySelector('#controls')) == null ||
            t.classList.add('show');
        const n = document.querySelector('header');
        n instanceof HTMLElement && (n.innerHTML = ''), Ct();
    }
});

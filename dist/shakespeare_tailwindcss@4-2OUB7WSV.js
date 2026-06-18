// esm:https://esm.sh/@tailwindcss/browser@4.3.1/es2022/browser.mjs
var Ya = Object.create;
var no = Object.defineProperty;
var Za = Object.getOwnPropertyDescriptor;
var Ga = Object.getOwnPropertyNames;
var Xa = Object.getPrototypeOf;
var Ja = Object.prototype.hasOwnProperty;
var Qa = (ne, oe) => () => (oe || ne((oe = { exports: {} }).exports, oe), oe.exports);
var en = (ne, oe, se, xe) => {
  if (oe && typeof oe == "object" || typeof oe == "function") for (let fe of Ga(oe)) !Ja.call(ne, fe) && fe !== se && no(ne, fe, { get: () => oe[fe], enumerable: !(xe = Za(oe, fe)) || xe.enumerable });
  return ne;
};
var tn = (ne, oe, se) => (se = ne != null ? Ya(Xa(ne)) : {}, en(oe || !ne || !ne.__esModule ? no(se, "default", { value: ne, enumerable: true }) : se, ne));
var so = Qa(() => {
  "use strict";
  (() => {
    var ne = "4.3.1";
    function oe(e) {
      let r = [0];
      for (let n = 0; n < e.length; n++) e.charCodeAt(n) === 10 && r.push(n + 1);
      function o(n) {
        let s = 0, l = r.length;
        for (; l > 0; ) {
          let p = (l | 0) >> 1, c = s + p;
          r[c] <= n ? (s = c + 1, l = l - p - 1) : l = p;
        }
        s -= 1;
        let h = n - r[s];
        return { line: s + 1, column: h };
      }
      function t({ line: n, column: s }) {
        n -= 1, n = Math.min(Math.max(n, 0), r.length - 1);
        let l = r[n], h = r[n + 1] ?? l;
        return Math.min(Math.max(l + s, 0), h);
      }
      return { find: o, findOffset: t };
    }
    var se = 92, xe = 47, fe = 42, Lt = 34, Dt = 39, co = 58, Le = 59, ce = 10, De = 13, Te = 32, Oe = 9, _t = 123, ot = 125, it = 40, Bt = 41, uo = 91, fo = 93, Mt = 45, at = 64, po = 33, he = class lo extends Error {
      loc;
      constructor(r, o) {
        if (o) {
          let t = o[0], n = oe(t.code).find(o[1]);
          r = `${t.file}:${n.line}:${n.column + 1}: ${r}`;
        }
        super(r), this.name = "CssSyntaxError", this.loc = o, Error.captureStackTrace && Error.captureStackTrace(this, lo);
      }
    };
    function nt(e, r) {
      let o = r?.from ? { file: r.from, code: e } : null;
      e[0] === "\uFEFF" && (e = " " + e.slice(1));
      let t = [], n = [], s = [], l = null, h = null, p = "", c = "", m = 0, f;
      for (let d = 0; d < e.length; d++) {
        let k = e.charCodeAt(d);
        if (!(k === De && (f = e.charCodeAt(d + 1), f === ce))) if (k === se) p === "" && (m = d), p += e.slice(d, d + 2), d += 1;
        else if (k === xe && e.charCodeAt(d + 1) === fe) {
          let g = d;
          for (let $ = d + 2; $ < e.length; $++) if (f = e.charCodeAt($), f === se) $ += 1;
          else if (f === fe && e.charCodeAt($ + 1) === xe) {
            d = $ + 1;
            break;
          }
          let b = e.slice(g, d + 1);
          if (b.charCodeAt(2) === po) {
            let $ = ir(b.slice(2, -2));
            n.push($), o && ($.src = [o, g, d + 1], $.dst = [o, g, d + 1]);
          }
        } else if (k === Dt || k === Lt) {
          let g = It(e, d, k, o);
          p += e.slice(d, g + 1), d = g;
        } else {
          if ((k === Te || k === ce || k === Oe) && (f = e.charCodeAt(d + 1)) && (f === Te || f === ce || f === Oe || f === De && (f = e.charCodeAt(d + 2)) && f == ce)) continue;
          if (k === ce) {
            if (p.length === 0) continue;
            f = p.charCodeAt(p.length - 1), f !== Te && f !== ce && f !== Oe && (p += " ");
          } else if (k === Mt && e.charCodeAt(d + 1) === Mt && p.length === 0) {
            let g = "", b = d, $ = -1;
            for (let z = d + 2; z < e.length; z++) if (f = e.charCodeAt(z), f === se) z += 1;
            else if (f === Dt || f === Lt) z = It(e, z, f, o);
            else if (f === xe && e.charCodeAt(z + 1) === fe) {
              for (let y = z + 2; y < e.length; y++) if (f = e.charCodeAt(y), f === se) y += 1;
              else if (f === fe && e.charCodeAt(y + 1) === xe) {
                z = y + 1;
                break;
              }
            } else if ($ === -1 && f === co) $ = p.length + z - b;
            else if (f === Le && g.length === 0) {
              p += e.slice(b, z), d = z;
              break;
            } else if (f === it) g += ")";
            else if (f === uo) g += "]";
            else if (f === _t) g += "}";
            else if ((f === ot || e.length - 1 === z) && g.length === 0) {
              d = z - 1, p += e.slice(b, z);
              break;
            } else (f === Bt || f === fo || f === ot) && g.length > 0 && e[z] === g[g.length - 1] && (g = g.slice(0, -1));
            let T = lt(p, $);
            if (!T) throw new he("Invalid custom property, expected a value", o ? [o, b, d] : null);
            o && (T.src = [o, b, d], T.dst = [o, b, d]), l ? l.nodes.push(T) : t.push(T), p = "";
          } else if (k === Le && p.charCodeAt(0) === at) h = _e(p), o && (h.src = [o, m, d], h.dst = [o, m, d]), l ? l.nodes.push(h) : t.push(h), p = "", h = null;
          else if (k === Le && c[c.length - 1] !== ")") {
            let g = lt(p);
            if (!g) {
              if (p.length === 0) continue;
              throw new he(`Invalid declaration: \`${p.trim()}\``, o ? [o, m, d] : null);
            }
            o && (g.src = [o, m, d], g.dst = [o, m, d]), l ? l.nodes.push(g) : t.push(g), p = "";
          } else if (k === _t && c[c.length - 1] !== ")") c += "}", h = J(p.trim()), o && (h.src = [o, m, d], h.dst = [o, m, d]), l && l.nodes.push(h), s.push(l), l = h, p = "", h = null;
          else if (k === ot && c[c.length - 1] !== ")") {
            if (c === "") throw new he("Missing opening {", o ? [o, d, d] : null);
            if (c = c.slice(0, -1), p.length > 0) if (p.charCodeAt(0) === at) h = _e(p), o && (h.src = [o, m, d], h.dst = [o, m, d]), l ? l.nodes.push(h) : t.push(h), p = "", h = null;
            else {
              let b = p.indexOf(":");
              if (l) {
                let $ = lt(p, b);
                if (!$) throw new he(`Invalid declaration: \`${p.trim()}\``, o ? [o, m, d] : null);
                o && ($.src = [o, m, d], $.dst = [o, m, d]), l.nodes.push($);
              }
            }
            let g = s.pop() ?? null;
            g === null && l && t.push(l), l = g, p = "", h = null;
          } else if (k === it) c += ")", p += "(";
          else if (k === Bt) {
            if (c[c.length - 1] !== ")") throw new he("Missing opening (", o ? [o, d, d] : null);
            c = c.slice(0, -1), p += ")";
          } else {
            if (p.length === 0 && (k === Te || k === ce || k === Oe)) continue;
            p === "" && (m = d), p += String.fromCharCode(k);
          }
        }
      }
      if (p.charCodeAt(0) === at) {
        let d = _e(p);
        o && (d.src = [o, m, e.length], d.dst = [o, m, e.length]), t.push(d);
      }
      if (c.length > 0 && l) {
        if (l.kind === "rule") throw new he(`Missing closing } at ${l.selector}`, l.src ? [l.src[0], l.src[1], l.src[1]] : null);
        if (l.kind === "at-rule") throw new he(`Missing closing } at ${l.name} ${l.params}`, l.src ? [l.src[0], l.src[1], l.src[1]] : null);
      }
      return n.length > 0 ? n.concat(t) : t;
    }
    function _e(e, r = []) {
      let o = e, t = "";
      for (let n = 5; n < e.length; n++) {
        let s = e.charCodeAt(n);
        if (s === Te || s === Oe || s === it) {
          o = e.slice(0, n), t = e.slice(n);
          break;
        }
      }
      return P(o.trim(), t.trim(), r);
    }
    function lt(e, r = e.indexOf(":")) {
      if (r === -1) return null;
      let o = e.indexOf("!important", r + 1);
      return i(e.slice(0, r).trim(), e.slice(r + 1, o === -1 ? e.length : o).trim(), o !== -1);
    }
    function It(e, r, o, t = null) {
      let n;
      for (let s = r + 1; s < e.length; s++) if (n = e.charCodeAt(s), n === se) s += 1;
      else {
        if (n === o) return s;
        if (n === Le && (e.charCodeAt(s + 1) === ce || e.charCodeAt(s + 1) === De && e.charCodeAt(s + 2) === ce)) throw new he(`Unterminated string: ${e.slice(r, s + 1) + String.fromCharCode(o)}`, t ? [t, r, s + 1] : null);
        if (n === ce || n === De && e.charCodeAt(s + 1) === ce) throw new he(`Unterminated string: ${e.slice(r, s) + String.fromCharCode(o)}`, t ? [t, r, s + 1] : null);
      }
      return r;
    }
    function Be(e) {
      if (arguments.length === 0) throw new TypeError("`CSS.escape` requires an argument.");
      let r = String(e), o = r.length, t = -1, n, s = "", l = r.charCodeAt(0);
      if (o === 1 && l === 45) return "\\" + r;
      for (; ++t < o; ) {
        if (n = r.charCodeAt(t), n === 0) {
          s += "\uFFFD";
          continue;
        }
        if (n >= 1 && n <= 31 || n === 127 || t === 0 && n >= 48 && n <= 57 || t === 1 && n >= 48 && n <= 57 && l === 45) {
          s += "\\" + n.toString(16) + " ";
          continue;
        }
        if (n >= 128 || n === 45 || n === 95 || n >= 48 && n <= 57 || n >= 65 && n <= 90 || n >= 97 && n <= 122) {
          s += r.charAt(t);
          continue;
        }
        s += "\\" + r.charAt(t);
      }
      return s;
    }
    function Ne(e) {
      return e.replace(/\\([\dA-Fa-f]{1,6}[\t\n\f\r ]?|[\S\s])/g, (r) => {
        if (r.length <= 2) return r[1];
        let o = Number.parseInt(r.slice(1).trim(), 16);
        return o === 0 || o > 1114111 || o >= 55296 && o <= 57343 ? "\uFFFD" : String.fromCodePoint(o);
      });
    }
    var Pt = /* @__PURE__ */ new Map([["--font", ["--font-weight", "--font-size"]], ["--inset", ["--inset-shadow", "--inset-ring"]], ["--text", ["--text-color", "--text-decoration-color", "--text-decoration-thickness", "--text-indent", "--text-shadow", "--text-underline-offset"]], ["--grid-column", ["--grid-column-start", "--grid-column-end"]], ["--grid-row", ["--grid-row-start", "--grid-row-end"]]]);
    function qt(e, r) {
      return (Pt.get(r) ?? []).some((o) => e === o || e.startsWith(`${o}-`));
    }
    var ho = class {
      constructor(e = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set([])) {
        this.values = e, this.keyframes = r;
      }
      values;
      keyframes;
      prefix = null;
      get size() {
        return this.values.size;
      }
      add(e, r, o = 0, t) {
        if (e.endsWith("-*")) {
          if (r !== "initial") throw new Error(`Invalid theme value \`${r}\` for namespace \`${e}\``);
          e === "--*" ? this.values.clear() : this.clearNamespace(e.slice(0, -2), 0);
        }
        if (o & 4) {
          let n = this.values.get(e);
          if (n && !(n.options & 4)) return;
        }
        r === "initial" ? this.values.delete(e) : this.values.set(e, { value: r, options: o, src: t });
      }
      keysInNamespaces(e) {
        let r = [];
        for (let o of e) {
          let t = `${o}-`;
          for (let n of this.values.keys()) n.startsWith(t) && n.indexOf("--", 2) === -1 && (qt(n, o) || r.push(n.slice(t.length)));
        }
        return r;
      }
      get(e) {
        for (let r of e) {
          let o = this.values.get(r);
          if (o) return o.value;
        }
        return null;
      }
      hasDefault(e) {
        return (this.getOptions(e) & 4) === 4;
      }
      getOptions(e) {
        return e = Ne(this.#r(e)), this.values.get(e)?.options ?? 0;
      }
      entries() {
        return this.prefix ? Array.from(this.values, (e) => (e[0] = this.prefixKey(e[0]), e)) : this.values.entries();
      }
      prefixKey(e) {
        return this.prefix ? `--${this.prefix}-${e.slice(2)}` : e;
      }
      #r(e) {
        return this.prefix ? `--${e.slice(3 + this.prefix.length)}` : e;
      }
      clearNamespace(e, r) {
        let o = Pt.get(e) ?? [];
        e: for (let t of this.values.keys()) if (t.startsWith(e)) {
          if (r !== 0 && (this.getOptions(t) & r) !== r) continue;
          for (let n of o) if (t.startsWith(n)) continue e;
          this.values.delete(t);
        }
      }
      #e(e, r) {
        for (let o of r) {
          let t = e !== null ? `${o}-${e}` : o;
          if (!this.values.has(t)) if (e !== null && e.includes(".")) {
            if (t = `${o}-${e.replaceAll(".", "_")}`, !this.values.has(t)) continue;
          } else continue;
          if (!qt(t, o)) return t;
        }
        return null;
      }
      #t(e) {
        let r = this.values.get(e);
        if (!r) return null;
        let o = null;
        return r.options & 2 && (o = r.value), `var(${Be(this.prefixKey(e))}${o ? `, ${o}` : ""})`;
      }
      markUsedVariable(e) {
        let r = Ne(this.#r(e)), o = this.values.get(r);
        if (!o) return false;
        let t = o.options & 16;
        return o.options |= 16, !t;
      }
      resolve(e, r, o = 0) {
        let t = this.#e(e, r);
        if (!t) return null;
        let n = this.values.get(t);
        return (o | n.options) & 1 ? n.value : this.#t(t);
      }
      resolveValue(e, r) {
        let o = this.#e(e, r);
        return o ? this.values.get(o).value : null;
      }
      resolveWith(e, r, o = []) {
        let t = this.#e(e, r);
        if (!t) return null;
        let n = {};
        for (let l of o) {
          let h = `${t}${l}`, p = this.values.get(h);
          p && (p.options & 1 ? n[l] = p.value : n[l] = this.#t(h));
        }
        let s = this.values.get(t);
        return s.options & 1 ? [s.value, n] : [this.#t(t), n];
      }
      namespace(e) {
        let r = /* @__PURE__ */ new Map(), o = `${e}-`;
        for (let [t, n] of this.values) t === e ? r.set(null, n.value) : t.startsWith(`${o}-`) ? r.set(t.slice(e.length), n.value) : t.startsWith(o) && r.set(t.slice(o.length), n.value);
        return r;
      }
      addKeyframes(e) {
        this.keyframes.add(e);
      }
      getKeyframes() {
        return Array.from(this.keyframes);
      }
    }, G = class extends Map {
      constructor(e) {
        super(), this.factory = e;
      }
      factory;
      get(e) {
        let r = super.get(e);
        return r === void 0 && (r = this.factory(e, this), this.set(e, r)), r;
      }
    };
    function Ee(e) {
      return { kind: "word", value: e };
    }
    function mo(e, r) {
      return { kind: "function", value: e, nodes: r };
    }
    function go(e) {
      return { kind: "separator", value: e };
    }
    function Y(e) {
      let r = "";
      for (let o of e) switch (o.kind) {
        case "word":
        case "separator": {
          r += o.value;
          break;
        }
        case "function":
          r += o.value + "(" + Y(o.nodes) + ")";
      }
      return r;
    }
    var Ht = 92, vo = 41, Yt = 58, Zt = 44, ko = 34, Gt = 61, Xt = 62, Jt = 60, Qt = 10, wo = 40, bo = 39, yo = 47, er = 32, tr = 9;
    function H(e) {
      e = e.replaceAll(`\r
`, `
`);
      let r = [], o = [], t = null, n = "", s;
      for (let l = 0; l < e.length; l++) {
        let h = e.charCodeAt(l);
        switch (h) {
          case Ht: {
            n += e[l] + e[l + 1], l++;
            break;
          }
          case yo: {
            if (n.length > 0) {
              let c = Ee(n);
              t ? t.nodes.push(c) : r.push(c), n = "";
            }
            let p = Ee(e[l]);
            t ? t.nodes.push(p) : r.push(p);
            break;
          }
          case Yt:
          case Zt:
          case Gt:
          case Xt:
          case Jt:
          case Qt:
          case er:
          case tr: {
            if (n.length > 0) {
              let f = Ee(n);
              t ? t.nodes.push(f) : r.push(f), n = "";
            }
            let p = l, c = l + 1;
            for (; c < e.length && (s = e.charCodeAt(c), !(s !== Yt && s !== Zt && s !== Gt && s !== Xt && s !== Jt && s !== Qt && s !== er && s !== tr)); c++) ;
            l = c - 1;
            let m = go(e.slice(p, c));
            t ? t.nodes.push(m) : r.push(m);
            break;
          }
          case bo:
          case ko: {
            let p = l;
            for (let c = l + 1; c < e.length; c++) if (s = e.charCodeAt(c), s === Ht) c += 1;
            else if (s === h) {
              l = c;
              break;
            }
            n += e.slice(p, l + 1);
            break;
          }
          case wo: {
            let p = mo(n, []);
            n = "", t ? t.nodes.push(p) : r.push(p), o.push(p), t = p;
            break;
          }
          case vo: {
            let p = o.pop();
            if (n.length > 0) {
              let c = Ee(n);
              p?.nodes.push(c), n = "";
            }
            o.length > 0 ? t = o[o.length - 1] : t = null;
            break;
          }
          default:
            n += String.fromCharCode(h);
        }
      }
      return n.length > 0 && r.push(Ee(n)), r;
    }
    var st = ((e) => (e[e.Continue = 0] = "Continue", e[e.Skip = 1] = "Skip", e[e.Stop = 2] = "Stop", e[e.Replace = 3] = "Replace", e[e.ReplaceSkip = 4] = "ReplaceSkip", e[e.ReplaceStop = 5] = "ReplaceStop", e))(st || {}), O = { Continue: { kind: 0 }, Skip: { kind: 1 }, Stop: { kind: 2 }, Replace: (e) => ({ kind: 3, nodes: Array.isArray(e) ? e : [e] }), ReplaceSkip: (e) => ({ kind: 4, nodes: Array.isArray(e) ? e : [e] }), ReplaceStop: (e) => ({ kind: 5, nodes: Array.isArray(e) ? e : [e] }) };
    function R(e, r) {
      typeof r == "function" ? rr(e, r) : rr(e, r.enter, r.exit);
    }
    function rr(e, r = () => O.Continue, o = () => O.Continue) {
      let t = { value: [e, 0, null], prev: null }, n = { parent: null, depth: 0, index: 0, siblings: e, path() {
        let s = [], l = t;
        for (; l; ) {
          let h = l.value[2];
          h && s.push(h), l = l.prev;
        }
        return s.reverse(), s;
      } };
      for (; t !== null; ) {
        let s = t.value, l = s[0], h = s[1], p = s[2];
        if (h >= l.length) {
          t = t.prev, n.depth -= 1;
          continue;
        }
        if (n.parent = p, n.siblings = l, h >= 0) {
          n.index = h;
          let d = l[h], k = r(d, n) ?? O.Continue;
          switch (k.kind) {
            case 0: {
              d.nodes && d.nodes.length > 0 && (n.depth += 1, t = { value: [d.nodes, 0, d], prev: t }), s[1] = ~h;
              continue;
            }
            case 2:
              return;
            case 1: {
              s[1] = ~h;
              continue;
            }
            case 3: {
              l.splice(h, 1, ...k.nodes);
              continue;
            }
            case 5: {
              l.splice(h, 1, ...k.nodes);
              return;
            }
            case 4: {
              l.splice(h, 1, ...k.nodes), s[1] += k.nodes.length;
              continue;
            }
            default:
              throw new Error(`Invalid \`WalkAction.${st[k.kind] ?? `Unknown(${k.kind})`}\` in enter.`);
          }
        }
        let c = ~h;
        n.index = c;
        let m = l[c], f = o(m, n) ?? O.Continue;
        switch (f.kind) {
          case 0:
            s[1] = c + 1;
            continue;
          case 2:
            return;
          case 3: {
            l.splice(c, 1, ...f.nodes), s[1] = c + f.nodes.length;
            continue;
          }
          case 5: {
            l.splice(c, 1, ...f.nodes);
            return;
          }
          case 4: {
            l.splice(c, 1, ...f.nodes), s[1] = c + f.nodes.length;
            continue;
          }
          default:
            throw new Error(`Invalid \`WalkAction.${st[f.kind] ?? `Unknown(${f.kind})`}\` in exit.`);
        }
      }
    }
    function or(e) {
      let r = [];
      return R(H(e), (o) => {
        if (!(o.kind !== "function" || o.value !== "var")) return R(o.nodes, (t) => {
          t.kind !== "word" || t.value[0] !== "-" || t.value[1] !== "-" || r.push(t.value);
        }), O.Skip;
      }), r;
    }
    var xo = 64;
    function q(e, r = []) {
      return { kind: "rule", selector: e, nodes: r };
    }
    function P(e, r = "", o = []) {
      return { kind: "at-rule", name: e, params: r, nodes: o };
    }
    function J(e, r = []) {
      return e.charCodeAt(0) === xo ? _e(e, r) : q(e, r);
    }
    function i(e, r, o = false) {
      return { kind: "declaration", property: e, value: r, important: o };
    }
    function ir(e) {
      return { kind: "comment", value: e };
    }
    function $e(e, r) {
      return { kind: "context", context: e, nodes: r };
    }
    function I(e) {
      return { kind: "at-root", nodes: e };
    }
    function le(e) {
      switch (e.kind) {
        case "rule":
          return { kind: e.kind, selector: e.selector, nodes: e.nodes.map(le), src: e.src, dst: e.dst };
        case "at-rule":
          return { kind: e.kind, name: e.name, params: e.params, nodes: e.nodes.map(le), src: e.src, dst: e.dst };
        case "at-root":
          return { kind: e.kind, nodes: e.nodes.map(le), src: e.src, dst: e.dst };
        case "context":
          return { kind: e.kind, context: { ...e.context }, nodes: e.nodes.map(le), src: e.src, dst: e.dst };
        case "declaration":
          return { kind: e.kind, property: e.property, value: e.value, important: e.important, src: e.src, dst: e.dst };
        case "comment":
          return { kind: e.kind, value: e.value, src: e.src, dst: e.dst };
        default:
          throw new Error(`Unknown node kind: ${e.kind}`);
      }
    }
    function ct(e) {
      return { depth: e.depth, index: e.index, siblings: e.siblings, get context() {
        let r = {};
        for (let o of e.path()) o.kind === "context" && Object.assign(r, o.context);
        return Object.defineProperty(this, "context", { value: r }), r;
      }, get parent() {
        let r = this.path().pop() ?? null;
        return Object.defineProperty(this, "parent", { value: r }), r;
      }, path() {
        return e.path().filter((r) => r.kind !== "context");
      } };
    }
    function Fe(e, r, o = 3) {
      let t = [], n = /* @__PURE__ */ new Set(), s = new G(() => /* @__PURE__ */ new Set()), l = new G(() => /* @__PURE__ */ new Set()), h = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), c = [], m = [], f = new G(() => /* @__PURE__ */ new Set());
      function d(g, b, $ = {}, T = 0) {
        if (g.kind === "declaration") {
          if (g.property === "--tw-sort" || g.value === void 0 || g.value === null) return;
          if ($.theme && g.property[0] === "-" && g.property[1] === "-") {
            if (g.value === "initial") {
              g.value = void 0;
              return;
            }
            $.keyframes || s.get(b).add(g);
          }
          if (g.value.includes("var(")) if ($.theme && g.property[0] === "-" && g.property[1] === "-") for (let z of or(g.value)) f.get(z).add(g.property);
          else r.trackUsedVariables(g.value);
          if (g.property === "animation") for (let z of nr(g.value)) p.add(z);
          o & 2 && g.value.includes("color-mix(") && !$.supportsColorMix && !$.keyframes && l.get(b).add(g), b.push(g);
        } else if (g.kind === "rule") {
          let z = [];
          for (let F of g.nodes) d(F, z, $, T + 1);
          let y = {}, U = /* @__PURE__ */ new Set();
          for (let F of z) {
            if (F.kind !== "declaration") continue;
            let W = `${F.property}:${F.value}:${F.important}`;
            y[W] ??= [], y[W].push(F);
          }
          for (let F in y) for (let W = 0; W < y[F].length - 1; ++W) U.add(y[F][W]);
          if (U.size > 0 && (z = z.filter((F) => !U.has(F))), z.length === 0) return;
          g.selector === "&" ? b.push(...z) : b.push({ ...g, nodes: z });
        } else if (g.kind === "at-rule" && g.name === "@property" && T === 0) {
          if (n.has(g.params)) return;
          if (o & 1) {
            let y = g.params, U = null, F = false;
            for (let E of g.nodes) E.kind === "declaration" && (E.property === "initial-value" ? U = E.value : E.property === "inherits" && (F = E.value === "true"));
            let W = i(y, U ?? "initial");
            W.src = g.src, F ? c.push(W) : m.push(W);
          }
          n.add(g.params);
          let z = { ...g, nodes: [] };
          for (let y of g.nodes) d(y, z.nodes, $, T + 1);
          b.push(z);
        } else if (g.kind === "at-rule") {
          g.name === "@keyframes" ? $ = { ...$, keyframes: true } : g.name === "@supports" && g.params.includes("color-mix(") && ($ = { ...$, supportsColorMix: true });
          let z = { ...g, nodes: [] };
          for (let y of g.nodes) d(y, z.nodes, $, T + 1);
          g.name === "@keyframes" && $.theme && h.add(z), (z.nodes.length > 0 || z.name === "@layer" || z.name === "@charset" || z.name === "@custom-media" || z.name === "@namespace" || z.name === "@import" || z.name === "@apply") && b.push(z);
        } else if (g.kind === "at-root") for (let z of g.nodes) {
          let y = [];
          d(z, y, $, 0);
          for (let U of y) t.push(U);
        }
        else if (g.kind === "context") {
          if (g.context.reference) return;
          for (let z of g.nodes) d(z, b, { ...$, ...g.context }, T);
        } else g.kind === "comment" && b.push(g);
      }
      let k = [];
      for (let g of e) d(g, k, {}, 0);
      e: for (let [g, b] of s) for (let $ of b) {
        if (ar($.property, r.theme, f)) {
          if ($.property.startsWith(r.theme.prefixKey("--animate-"))) for (let z of nr($.value)) p.add(z);
          continue;
        }
        let T = g.indexOf($);
        if (g.splice(T, 1), g.length === 0) {
          let z = $o(k, (y) => y.kind === "rule" && y.nodes === g);
          if (!z || z.length === 0) continue e;
          z.unshift({ kind: "at-root", nodes: k });
          do {
            let y = z.pop();
            if (!y) break;
            let U = z[z.length - 1];
            if (!U || U.kind !== "at-root" && U.kind !== "at-rule") break;
            let F = U.nodes.indexOf(y);
            if (F === -1) break;
            U.nodes.splice(F, 1);
          } while (true);
          continue e;
        }
      }
      for (let g of h) if (!p.has(g.params)) {
        let b = t.indexOf(g);
        t.splice(b, 1);
      }
      if (k = k.concat(t), o & 2) for (let [g, b] of l) for (let $ of b) {
        let T = g.indexOf($);
        if (T === -1 || $.value == null) continue;
        let z = H($.value), y = false;
        if (R(z, (W) => {
          if (W.kind !== "function" || W.value !== "color-mix") return;
          let E = false, K = false;
          if (R(W.nodes, (L) => {
            if (L.kind == "word" && L.value.toLowerCase() === "currentcolor") {
              K = true, y = true;
              return;
            }
            let B = L, D = null, Q = /* @__PURE__ */ new Set();
            do {
              if (B.kind !== "function" || B.value !== "var") return;
              let ae = B.nodes[0];
              if (!ae || ae.kind !== "word") return;
              let a = ae.value;
              if (Q.has(a)) {
                E = true;
                return;
              }
              if (Q.add(a), y = true, D = r.theme.resolveValue(null, [ae.value]), !D) {
                E = true;
                return;
              }
              if (D.toLowerCase() === "currentcolor") {
                K = true;
                return;
              }
              D.startsWith("var(") ? B = H(D)[0] : B = null;
            } while (B);
            return O.Replace({ kind: "word", value: D });
          }), E || K) {
            let L = W.nodes.findIndex((D) => D.kind === "separator" && D.value.trim().includes(","));
            if (L === -1) return;
            let B = W.nodes.length > L ? W.nodes[L + 1] : null;
            return B ? O.Replace(B) : void 0;
          } else if (y) {
            let L = W.nodes[2];
            L.kind === "word" && (L.value === "oklab" || L.value === "oklch" || L.value === "lab" || L.value === "lch") && (L.value = "srgb");
          }
        }), !y) continue;
        let U = { ...$, value: Y(z) }, F = J("@supports (color: color-mix(in lab, red, red))", [$]);
        F.src = $.src, g.splice(T, 1, U, F);
      }
      if (o & 1) {
        let g = [];
        if (c.length > 0) {
          let b = J(":root, :host", c);
          b.src = c[0].src, g.push(b);
        }
        if (m.length > 0) {
          let b = J("*, ::before, ::after, ::backdrop", m);
          b.src = m[0].src, g.push(b);
        }
        if (g.length > 0) {
          let b = k.findIndex((z) => !(z.kind === "comment" || z.kind === "at-rule" && (z.name === "@charset" || z.name === "@import"))), $ = P("@layer", "properties", []);
          $.src = g[0].src, k.splice(b < 0 ? k.length : b, 0, $);
          let T = J("@layer properties", [P("@supports", "((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b))))", g)]);
          T.src = g[0].src, T.nodes[0].src = g[0].src, k.push(T);
        }
      }
      return k;
    }
    function ke(e, r) {
      let o = 0, t = { file: null, code: "" };
      function n(l, h = 0) {
        let p = "", c = "  ".repeat(h);
        if (l.kind === "declaration") {
          if (p += `${c}${l.property}: ${l.value}${l.important ? " !important" : ""};
`, r) {
            o += c.length;
            let m = o;
            o += l.property.length, o += 2, o += l.value?.length ?? 0, l.important && (o += 11);
            let f = o;
            o += 2, l.dst = [t, m, f];
          }
        } else if (l.kind === "rule") {
          if (p += `${c}${l.selector} {
`, r) {
            o += c.length;
            let m = o;
            o += l.selector.length, o += 1;
            let f = o;
            l.dst = [t, m, f], o += 2;
          }
          for (let m of l.nodes) p += n(m, h + 1);
          p += `${c}}
`, r && (o += c.length, o += 2);
        } else if (l.kind === "at-rule") {
          if (l.nodes.length === 0) {
            let m = `${c}${l.name} ${l.params};
`;
            if (r) {
              o += c.length;
              let f = o;
              o += l.name.length, o += 1, o += l.params.length;
              let d = o;
              o += 2, l.dst = [t, f, d];
            }
            return m;
          }
          if (p += `${c}${l.name}${l.params ? ` ${l.params} ` : " "}{
`, r) {
            o += c.length;
            let m = o;
            o += l.name.length, l.params && (o += 1, o += l.params.length), o += 1;
            let f = o;
            l.dst = [t, m, f], o += 2;
          }
          for (let m of l.nodes) p += n(m, h + 1);
          p += `${c}}
`, r && (o += c.length, o += 2);
        } else if (l.kind === "comment") {
          if (p += `${c}/*${l.value}*/
`, r) {
            o += c.length;
            let m = o;
            o += 2 + l.value.length + 2;
            let f = o;
            l.dst = [t, m, f], o += 1;
          }
        } else if (l.kind === "context" || l.kind === "at-root") return "";
        return p;
      }
      let s = "";
      for (let l of e) s += n(l, 0);
      return t.code = s, s;
    }
    function $o(e, r) {
      let o = [];
      return R(e, (t, n) => {
        if (r(t)) return o = n.path(), o.push(t), O.Stop;
      }), o;
    }
    function ar(e, r, o, t = /* @__PURE__ */ new Set()) {
      if (t.has(e) || (t.add(e), r.getOptions(e) & 24)) return true;
      {
        let n = o.get(e) ?? [];
        for (let s of n) if (ar(s, r, o, t)) return true;
      }
      return false;
    }
    function nr(e) {
      return e.split(/[\s,]+/);
    }
    var ut = ["calc", "min", "max", "clamp", "mod", "rem", "sin", "cos", "tan", "asin", "acos", "atan", "atan2", "pow", "sqrt", "hypot", "log", "exp", "round"];
    function Me(e) {
      return e.indexOf("(") !== -1 && ut.some((r) => e.includes(`${r}(`));
    }
    function lr(e) {
      if (!ut.some((s) => e.includes(s))) return e;
      let r = "", o = [], t = null, n = null;
      for (let s = 0; s < e.length; s++) {
        let l = e.charCodeAt(s);
        if (l >= 48 && l <= 57 || t !== null && (l === 37 || l >= 97 && l <= 122 || l >= 65 && l <= 90) ? t = s : (n = t, t = null), l === 40) {
          r += e[s];
          let h = s;
          for (let c = s - 1; c >= 0; c--) {
            let m = e.charCodeAt(c);
            if (m >= 48 && m <= 57) h = c;
            else if (m >= 97 && m <= 122) h = c;
            else break;
          }
          let p = e.slice(h, s);
          if (ut.includes(p)) {
            o.unshift(true);
            continue;
          } else if (o[0] && p === "") {
            o.unshift(true);
            continue;
          }
          o.unshift(false);
          continue;
        } else if (l === 41) r += e[s], o.shift();
        else if (l === 44 && o[0]) {
          r += ", ";
          continue;
        } else {
          if (l === 32 && o[0] && r.charCodeAt(r.length - 1) === 32) continue;
          if ((l === 43 || l === 42 || l === 47 || l === 45) && o[0]) {
            let h = r.trimEnd(), p = h.charCodeAt(h.length - 1), c = h.charCodeAt(h.length - 2), m = e.charCodeAt(s + 1);
            if ((p === 101 || p === 69) && c >= 48 && c <= 57) {
              r += e[s];
              continue;
            } else if (p === 43 || p === 42 || p === 47 || p === 45) {
              r += e[s];
              continue;
            } else if (p === 40 || p === 44) {
              r += e[s];
              continue;
            } else e.charCodeAt(s - 1) === 32 ? r += `${e[s]} ` : p >= 48 && p <= 57 || m >= 48 && m <= 57 || p === 41 || m === 40 || m === 43 || m === 42 || m === 47 || m === 45 || n !== null && n === s - 1 ? r += ` ${e[s]} ` : r += e[s];
          } else r += e[s];
        }
      }
      return r;
    }
    function ze(e) {
      if (e.indexOf("(") === -1) return Ce(e);
      let r = H(e);
      return dt(r), e = Y(r), e = lr(e), e;
    }
    function Ce(e, r = false) {
      let o = "";
      for (let t = 0; t < e.length; t++) {
        let n = e[t];
        n === "\\" && e[t + 1] === "_" ? (o += "_", t += 1) : n === "_" && !r ? o += " " : o += n;
      }
      return o;
    }
    function dt(e) {
      for (let r of e) switch (r.kind) {
        case "function": {
          if (r.value === "url" || r.value.endsWith("_url")) {
            r.value = Ce(r.value);
            break;
          }
          if (r.value === "var" || r.value.endsWith("_var") || r.value === "theme" || r.value.endsWith("_theme")) {
            r.value = Ce(r.value);
            for (let o = 0; o < r.nodes.length; o++) {
              if (o == 0 && r.nodes[o].kind === "word") {
                r.nodes[o].value = Ce(r.nodes[o].value, true);
                continue;
              }
              dt([r.nodes[o]]);
            }
            break;
          }
          r.value = Ce(r.value), dt(r.nodes);
          break;
        }
        case "separator":
        case "word": {
          r.value = Ce(r.value);
          break;
        }
        default:
          zo(r);
      }
    }
    function zo(e) {
      throw new Error(`Unexpected value: ${e}`);
    }
    var ft = new Uint8Array(256);
    function we(e) {
      let r = 0, o = e.length;
      for (let t = 0; t < o; t++) {
        let n = e.charCodeAt(t);
        switch (n) {
          case 92:
            t += 1;
            break;
          case 39:
          case 34:
            for (; ++t < o; ) {
              let s = e.charCodeAt(t);
              if (s === 92) {
                t += 1;
                continue;
              }
              if (s === n) break;
            }
            break;
          case 40:
            ft[r] = 41, r++;
            break;
          case 91:
            ft[r] = 93, r++;
            break;
          case 123:
            break;
          case 93:
          case 125:
          case 41:
            if (r === 0) return false;
            r > 0 && n === ft[r - 1] && r--;
            break;
          case 59:
            if (r === 0) return false;
            break;
        }
      }
      return true;
    }
    var Ie = new Uint8Array(256);
    function _(e, r) {
      let o = 0, t = [], n = 0, s = e.length, l = r.charCodeAt(0);
      for (let h = 0; h < s; h++) {
        let p = e.charCodeAt(h);
        if (o === 0 && p === l) {
          t.push(e.slice(n, h)), n = h + 1;
          continue;
        }
        switch (p) {
          case 92:
            h += 1;
            break;
          case 39:
          case 34:
            for (; ++h < s; ) {
              let c = e.charCodeAt(h);
              if (c === 92) {
                h += 1;
                continue;
              }
              if (c === p) break;
            }
            break;
          case 40:
            Ie[o] = 41, o++;
            break;
          case 91:
            Ie[o] = 93, o++;
            break;
          case 123:
            Ie[o] = 125, o++;
            break;
          case 93:
          case 125:
          case 41:
            o > 0 && p === Ie[o - 1] && o--;
            break;
        }
      }
      return t.push(e.slice(n)), t;
    }
    var Ao = 58, sr = 45, cr = 97, ur = 122, pt = /^[a-zA-Z0-9_.%-]+$/;
    function* Co(e, r) {
      let o = _(e, ":");
      if (r.theme.prefix) {
        if (o.length === 1 || o[0] !== r.theme.prefix) return null;
        o.shift();
      }
      let t = o.pop(), n = [];
      for (let f = o.length - 1; f >= 0; --f) {
        let d = r.parseVariant(o[f]);
        if (d === null) return;
        n.push(d);
      }
      let s = false;
      t[t.length - 1] === "!" ? (s = true, t = t.slice(0, -1)) : t[0] === "!" && (s = true, t = t.slice(1)), r.utilities.has(t, "static") && !t.includes("[") && (yield { kind: "static", root: t, variants: n, important: s, raw: e });
      let [l, h = null, p] = _(t, "/");
      if (p) return;
      let c = h === null ? null : ht(h);
      if (h !== null && c === null) return;
      if (l[0] === "[") {
        if (l[l.length - 1] !== "]") return;
        let f = l.charCodeAt(1);
        if (f !== sr && !(f >= cr && f <= ur)) return;
        l = l.slice(1, -1);
        let d = l.indexOf(":");
        if (d === -1 || d === 0 || d === l.length - 1) return;
        let k = l.slice(0, d), g = ze(l.slice(d + 1));
        if (!we(g)) return;
        yield { kind: "arbitrary", property: k, value: g, modifier: c, variants: n, important: s, raw: e };
        return;
      }
      let m;
      if (l[l.length - 1] === "]") {
        let f = l.indexOf("-[");
        if (f === -1) return;
        let d = l.slice(0, f);
        if (!r.utilities.has(d, "functional")) return;
        let k = l.slice(f + 1);
        m = [[d, k]];
      } else if (l[l.length - 1] === ")") {
        let f = l.indexOf("-(");
        if (f === -1) return;
        let d = l.slice(0, f);
        if (!r.utilities.has(d, "functional")) return;
        let k = l.slice(f + 2, -1), g = _(k, ":"), b = null;
        if (g.length === 2 && (b = g[0], k = g[1]), k[0] !== "-" || k[1] !== "-" || !we(k)) return;
        m = [[d, b === null ? `[var(${k})]` : `[${b}:var(${k})]`]];
      } else m = dr(l, (f) => r.utilities.has(f, "functional"));
      for (let [f, d] of m) {
        let k = { kind: "functional", root: f, modifier: c, value: null, variants: n, important: s, raw: e };
        if (d === null) {
          yield k;
          continue;
        }
        {
          let g = d.indexOf("[");
          if (g !== -1) {
            if (d[d.length - 1] !== "]") return;
            let b = ze(d.slice(g + 1, -1));
            if (!we(b)) continue;
            let $ = null;
            for (let T = 0; T < b.length; T++) {
              let z = b.charCodeAt(T);
              if (z === Ao) {
                $ = b.slice(0, T), b = b.slice(T + 1);
                break;
              }
              if (!(z === sr || z >= cr && z <= ur)) break;
            }
            if (b.length === 0 || b.trim().length === 0 || $ === "") continue;
            k.value = { kind: "arbitrary", dataType: $ || null, value: b };
          } else {
            let b = h === null || k.modifier?.kind === "arbitrary" ? null : `${d}/${h}`;
            if (!pt.test(d)) continue;
            k.value = { kind: "named", value: d, fraction: b };
          }
        }
        yield k;
      }
    }
    function ht(e) {
      if (e[0] === "[" && e[e.length - 1] === "]") {
        let r = ze(e.slice(1, -1));
        return !we(r) || r.length === 0 || r.trim().length === 0 ? null : { kind: "arbitrary", value: r };
      }
      return e[0] === "(" && e[e.length - 1] === ")" ? (e = e.slice(1, -1), e[0] !== "-" || e[1] !== "-" || !we(e) ? null : (e = `var(${e})`, { kind: "arbitrary", value: ze(e) })) : pt.test(e) ? { kind: "named", value: e } : null;
    }
    function So(e, r) {
      if (e[0] === "[" && e[e.length - 1] === "]") {
        if (e[1] === "@" && e.includes("&")) return null;
        let o = ze(e.slice(1, -1));
        if (!we(o) || o.length === 0 || o.trim().length === 0) return null;
        let t = o[0] === ">" || o[0] === "+" || o[0] === "~";
        return !t && o[0] !== "@" && !o.includes("&") && (o = `&:is(${o})`), { kind: "arbitrary", selector: o, relative: t };
      }
      {
        let [o, t = null, n] = _(e, "/");
        if (n) return null;
        let s = dr(o, (l) => r.variants.has(l));
        for (let [l, h] of s) switch (r.variants.kind(l)) {
          case "static":
            return h !== null || t !== null ? null : { kind: "static", root: l };
          case "functional": {
            let p = t === null ? null : ht(t);
            if (t !== null && p === null) return null;
            if (h === null) return { kind: "functional", root: l, modifier: p, value: null };
            if (h[h.length - 1] === "]") {
              if (h[0] !== "[") continue;
              let c = ze(h.slice(1, -1));
              return !we(c) || c.length === 0 || c.trim().length === 0 ? null : { kind: "functional", root: l, modifier: p, value: { kind: "arbitrary", value: c } };
            }
            if (h[h.length - 1] === ")") {
              if (h[0] !== "(") continue;
              let c = ze(h.slice(1, -1));
              return !we(c) || c.length === 0 || c.trim().length === 0 || c[0] !== "-" || c[1] !== "-" ? null : { kind: "functional", root: l, modifier: p, value: { kind: "arbitrary", value: `var(${c})` } };
            }
            if (!pt.test(h)) continue;
            return { kind: "functional", root: l, modifier: p, value: { kind: "named", value: h } };
          }
          case "compound": {
            if (h === null) return null;
            t && (l === "not" || l === "has" || l === "in") && (h = `${h}/${t}`, t = null);
            let p = r.parseVariant(h);
            if (p === null || !r.variants.compoundsWith(l, p)) return null;
            let c = t === null ? null : ht(t);
            return t !== null && c === null ? null : { kind: "compound", root: l, modifier: c, variant: p };
          }
        }
      }
      return null;
    }
    function* dr(e, r) {
      r(e) && (yield [e, null]);
      let o = e.lastIndexOf("-");
      for (; o > 0; ) {
        let t = e.slice(0, o);
        if (r(t)) {
          let n = [t, e.slice(o + 1)];
          if (n[1] === "" || n[0] === "@" && r("@") && e[o] === "-") break;
          yield n;
        }
        o = e.lastIndexOf("-", o - 1);
      }
      e[0] === "@" && r("@") && (yield ["@", e.slice(1)]);
    }
    function jo(e, r) {
      let o = [];
      for (let n of r.variants) o.unshift(mt(n));
      e.theme.prefix && o.unshift(e.theme.prefix);
      let t = "";
      if (r.kind === "static" && (t += r.root), r.kind === "functional" && (t += r.root, r.value)) if (r.value.kind === "arbitrary") {
        if (r.value !== null) {
          let n = vt(r.value.value), s = n ? r.value.value.slice(4, -1) : r.value.value, [l, h] = n ? ["(", ")"] : ["[", "]"];
          r.value.dataType ? t += `-${l}${r.value.dataType}:${Se(s)}${h}` : t += `-${l}${Se(s)}${h}`;
        }
      } else r.value.kind === "named" && (t += `-${r.value.value}`);
      return r.kind === "arbitrary" && (t += `[${r.property}:${Se(r.value)}]`), (r.kind === "arbitrary" || r.kind === "functional") && (t += fr(r.modifier)), r.important && (t += "!"), o.push(t), o.join(":");
    }
    function fr(e) {
      if (e === null) return "";
      let r = vt(e.value), o = r ? e.value.slice(4, -1) : e.value, [t, n] = r ? ["(", ")"] : ["[", "]"];
      return e.kind === "arbitrary" ? `/${t}${Se(o)}${n}` : e.kind === "named" ? `/${e.value}` : "";
    }
    function mt(e) {
      if (e.kind === "static") return e.root;
      if (e.kind === "arbitrary") return `[${Se(To(e.selector))}]`;
      let r = "";
      if (e.kind === "functional") {
        r += e.root;
        let o = e.root !== "@";
        if (e.value) if (e.value.kind === "arbitrary") {
          let t = vt(e.value.value), n = t ? e.value.value.slice(4, -1) : e.value.value, [s, l] = t ? ["(", ")"] : ["[", "]"];
          r += `${o ? "-" : ""}${s}${Se(n)}${l}`;
        } else e.value.kind === "named" && (r += `${o ? "-" : ""}${e.value.value}`);
      }
      return e.kind === "compound" && (r += e.root, r += "-", r += mt(e.variant)), (e.kind === "functional" || e.kind === "compound") && (r += fr(e.modifier)), r;
    }
    var Vo = new G((e) => {
      let r = H(e), o = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Set(["~", ">", "+", "-", "*", "/"]);
      return R(r, (n, s) => {
        if (n.kind === "word" && t.has(n.value)) {
          let l = s.index;
          if (l === -1) return;
          let h = s.siblings[l - 1];
          if (h?.kind !== "separator" || h.value !== " ") return;
          let p = s.siblings[l + 1];
          if (p?.kind !== "separator" || p.value !== " ") return;
          let c = s.siblings[l - 2];
          if (c && t.has(c.value)) return;
          let m = s.siblings[l + 2];
          if (m && t.has(m.value)) return;
          o.add(h), o.add(p);
        } else if (n.kind === "separator" && n.value.length > 0 && n.value.trim() === "") (s.siblings[0] === n || s.siblings[s.siblings.length - 1] === n) && o.add(n);
        else if (n.kind === "separator" && n.value.trim() === ",") n.value = ",";
        else if (n.kind === "function" && n.value.startsWith("--")) {
          let l = s.index;
          if (l <= 0) return;
          let h = s.siblings[l - 1];
          if (h?.kind === "separator" && h.value === ",") return;
          let p = s.siblings[l - 2];
          return p && !t.has(p.value) ? void 0 : O.ReplaceSkip({ kind: "function", value: "", nodes: [n] });
        }
      }), o.size > 0 && R(r, (n) => {
        if (o.has(n)) return o.delete(n), O.ReplaceSkip([]);
      }), gt(r), Y(r);
    });
    function Se(e) {
      return Vo.get(e);
    }
    var Ko = new G((e) => {
      let r = H(e);
      return r.length === 3 && r[0].kind === "word" && r[0].value === "&" && r[1].kind === "separator" && r[1].value === ":" && r[2].kind === "function" && r[2].value === "is" ? Y(r[2].nodes) : e;
    });
    function To(e) {
      return Ko.get(e);
    }
    function gt(e) {
      for (let r of e) switch (r.kind) {
        case "function": {
          if (r.value === "url" || r.value.endsWith("_url")) {
            r.value = Ue(r.value);
            break;
          }
          if (r.value === "var" || r.value.endsWith("_var") || r.value === "theme" || r.value.endsWith("_theme")) {
            r.value = Ue(r.value);
            for (let o = 0; o < r.nodes.length; o++) gt([r.nodes[o]]);
            break;
          }
          r.value = Ue(r.value), gt(r.nodes);
          break;
        }
        case "separator":
          r.value = Ue(r.value);
          break;
        case "word": {
          (r.value[0] !== "-" || r.value[1] !== "-") && (r.value = Ue(r.value));
          break;
        }
        default:
          No(r);
      }
    }
    var Oo = new G((e) => {
      let r = H(e);
      return r.length === 1 && r[0].kind === "function" && r[0].value === "var";
    });
    function vt(e) {
      return Oo.get(e);
    }
    function No(e) {
      throw new Error(`Unexpected value: ${e}`);
    }
    function Ue(e) {
      return e.replaceAll("_", String.raw`\_`).replaceAll(" ", "_");
    }
    function Pe(e, r, o) {
      if (e === r) return 0;
      let t = e.indexOf("("), n = r.indexOf("("), s = t === -1 ? e.replace(/[\d.]+/g, "") : e.slice(0, t), l = n === -1 ? r.replace(/[\d.]+/g, "") : r.slice(0, n), h = (s === l ? 0 : s < l ? -1 : 1) || (o === "asc" ? parseInt(e) - parseInt(r) : parseInt(r) - parseInt(e));
      return Number.isNaN(h) ? e < r ? -1 : 1 : h;
    }
    var Eo = /^(?<value>[-+]?(?:\d*\.)?\d+)(?<unit>[a-z]+|%)?$/i, kt = new G((e) => {
      let r = Eo.exec(e);
      if (!r) return null;
      let o = r.groups?.value;
      if (o === void 0) return null;
      let t = Number(o);
      if (Number.isNaN(t)) return null;
      let n = r.groups?.unit;
      return n === void 0 ? [t, null] : [t, n];
    }), pr = /* @__PURE__ */ new Set(["black", "silver", "gray", "white", "maroon", "red", "purple", "fuchsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua", "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen", "transparent", "currentcolor", "canvas", "canvastext", "linktext", "visitedtext", "activetext", "buttonface", "buttontext", "buttonborder", "field", "fieldtext", "highlight", "highlighttext", "selecteditem", "selecteditemtext", "mark", "marktext", "graytext", "accentcolor", "accentcolortext"]), Fo = /^(rgba?|hsla?|hwb|color|(ok)?(lab|lch)|light-dark|color-mix)\(/i;
    function Uo(e) {
      return e.charCodeAt(0) === 35 || Fo.test(e) || pr.has(e.toLowerCase());
    }
    function Wo(e) {
      return pr.has(e.toLowerCase());
    }
    var Ro = { color: Uo, length: je, percentage: wt, ratio: Xo, number: mr, integer: V, url: hr, position: ei, "bg-size": ti, "line-width": Do, image: Mo, "family-name": Po, "generic-name": Io, "absolute-size": qo, "relative-size": Ho, angle: ii, vector: ni };
    function Z(e, r) {
      if (e.startsWith("var(")) return null;
      for (let o of r) if (Ro[o]?.(e)) return o;
      return null;
    }
    var Lo = /^url\(.*\)$/;
    function hr(e) {
      return Lo.test(e);
    }
    function Do(e) {
      return _(e, " ").every((r) => je(r) || mr(r) || r === "thin" || r === "medium" || r === "thick");
    }
    var _o = /^(?:element|image|cross-fade|image-set)\(/, Bo = /^(repeating-)?(conic|linear|radial)-gradient\(/;
    function Mo(e) {
      let r = 0;
      for (let o of _(e, ",")) if (!o.startsWith("var(")) {
        if (hr(o)) {
          r += 1;
          continue;
        }
        if (Bo.test(o)) {
          r += 1;
          continue;
        }
        if (_o.test(o)) {
          r += 1;
          continue;
        }
        return false;
      }
      return r > 0;
    }
    function Io(e) {
      return e === "serif" || e === "sans-serif" || e === "monospace" || e === "cursive" || e === "fantasy" || e === "system-ui" || e === "ui-serif" || e === "ui-sans-serif" || e === "ui-monospace" || e === "ui-rounded" || e === "math" || e === "emoji" || e === "fangsong";
    }
    function Po(e) {
      let r = 0;
      for (let o of _(e, ",")) {
        let t = o.charCodeAt(0);
        if (t >= 48 && t <= 57) return false;
        o.startsWith("var(") || (r += 1);
      }
      return r > 0;
    }
    function qo(e) {
      return e === "xx-small" || e === "x-small" || e === "small" || e === "medium" || e === "large" || e === "x-large" || e === "xx-large" || e === "xxx-large";
    }
    function Ho(e) {
      return e === "larger" || e === "smaller";
    }
    var me = /[+-]?\d*\.?\d+(?:[eE][+-]?\d+)?/, Yo = new RegExp(`^${me.source}$`);
    function mr(e) {
      return Yo.test(e) || Me(e);
    }
    var Zo = new RegExp(`^${me.source}%$`);
    function wt(e) {
      return Zo.test(e) || Me(e);
    }
    var Go = new RegExp(`^${me.source}\\s*/\\s*${me.source}$`);
    function Xo(e) {
      return Go.test(e) || Me(e);
    }
    var Jo = ["cm", "mm", "Q", "in", "pc", "pt", "px", "em", "ex", "ch", "rem", "lh", "rlh", "vw", "vh", "vmin", "vmax", "vb", "vi", "svw", "svh", "lvw", "lvh", "dvw", "dvh", "cqw", "cqh", "cqi", "cqb", "cqmin", "cqmax"], Qo = new RegExp(`^${me.source}(${Jo.join("|")})$`);
    function je(e) {
      return Qo.test(e) || Me(e);
    }
    function ei(e) {
      let r = 0;
      for (let o of _(e, " ")) {
        if (o === "center" || o === "top" || o === "right" || o === "bottom" || o === "left") {
          r += 1;
          continue;
        }
        if (!o.startsWith("var(")) {
          if (je(o) || wt(o)) {
            r += 1;
            continue;
          }
          return false;
        }
      }
      return r > 0;
    }
    function ti(e) {
      let r = 0;
      for (let o of _(e, ",")) {
        if (o === "cover" || o === "contain") {
          r += 1;
          continue;
        }
        let t = _(o, " ");
        if (t.length !== 1 && t.length !== 2) return false;
        if (t.every((n) => n === "auto" || je(n) || wt(n))) {
          r += 1;
          continue;
        }
      }
      return r > 0;
    }
    var ri = ["deg", "rad", "grad", "turn"], oi = new RegExp(`^${me.source}(${ri.join("|")})$`);
    function ii(e) {
      return oi.test(e);
    }
    var ai = new RegExp(`^${me.source} +${me.source} +${me.source}$`);
    function ni(e) {
      return ai.test(e);
    }
    function V(e) {
      let r = Number(e);
      return Number.isInteger(r) && r >= 0 && String(r) === String(e);
    }
    function gr(e) {
      let r = Number(e);
      return Number.isInteger(r) && r > 0 && String(r) === String(e);
    }
    function pe(e) {
      return vr(e, 0.25);
    }
    function bt(e) {
      return vr(e, 0.25);
    }
    function vr(e, r) {
      let o = Number(e);
      return o >= 0 && o % r === 0 && String(o) === String(e);
    }
    var li = /* @__PURE__ */ new Set(["inset", "inherit", "initial", "revert", "unset"]), si = /* @__PURE__ */ new Set(["calc", "clamp", "max", "min", "--spacing"]), ci = /* @__PURE__ */ new Set(["color", "color-mix", "contrast-color", "device-cmyk", "hsl", "hsla", "hwb", "lab", "lch", "light-dark", "oklab", "oklch", "rgb", "rgba", "--alpha"]), ui = /^-?(\d+|\.\d+)(.*?)$/;
    function qe(e, r) {
      function o(t) {
        let n = Y([t]), s = r(n);
        return H(s);
      }
      return _(e, ",").map((t) => {
        t = t.trim();
        let n = H(t), s = null, l = 0, h = 0, p = false;
        return R(n, (c) => {
          switch (c.kind) {
            case "word": {
              if (li.has(c.value.toLowerCase())) return O.Continue;
              if (ui.test(c.value.toLowerCase())) return h++, O.Continue;
              if (c.value[0] === "#" || Wo(c.value)) return p = true, O.ReplaceStop(o(c));
              s = c, l++;
              break;
            }
            case "function":
              return ci.has(c.value.toLowerCase()) ? (p = true, O.ReplaceStop(o(c))) : si.has(c.value.toLowerCase()) ? (h++, O.Skip) : (s = c, l++, O.Skip);
            case "separator":
              return O.Continue;
            default:
          }
        }), p ? Y(n) : h < 2 ? t : l === 0 ? `${t} ${r("currentcolor")}` : (l === 1 && R(n, (c) => c === s ? (p = true, O.ReplaceStop(o(c))) : O.Skip), p ? Y(n) : t);
      }).join(", ");
    }
    var He = ["0", "0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14", "16", "20", "24", "28", "32", "36", "40", "44", "48", "52", "56", "60", "64", "72", "80", "96"], di = class {
      utilities = new G(() => []);
      completions = /* @__PURE__ */ new Map();
      static(e, r) {
        this.utilities.get(e).push({ kind: "static", compileFn: r });
      }
      functional(e, r, o) {
        this.utilities.get(e).push({ kind: "functional", compileFn: r, options: o });
      }
      has(e, r) {
        return this.utilities.has(e) && this.utilities.get(e).some((o) => o.kind === r);
      }
      get(e) {
        return this.utilities.has(e) ? this.utilities.get(e) : [];
      }
      getCompletions(e) {
        return this.has(e, "static") ? this.completions.get(e)?.() ?? [{ supportsNegative: false, values: [], modifiers: [] }] : this.completions.get(e)?.() ?? [];
      }
      suggest(e, r) {
        let o = this.completions.get(e);
        o ? this.completions.set(e, () => [...o?.(), ...r?.()]) : this.completions.set(e, r);
      }
      keys(e) {
        let r = [];
        for (let [o, t] of this.utilities.entries()) for (let n of t) if (n.kind === e) {
          r.push(o);
          break;
        }
        return r;
      }
    };
    function A(e, r, o) {
      return P("@property", e, [i("syntax", o ? `"${o}"` : '"*"'), i("inherits", "false"), ...r ? [i("initial-value", r)] : []]);
    }
    function ee(e, r) {
      if (r === null) return e;
      let o = Number(r);
      return Number.isNaN(o) || (r = `${o * 100}%`), r === "100%" ? e : `color-mix(in oklab, ${e} ${r}, transparent)`;
    }
    function kr(e, r) {
      let o = Number(r);
      return Number.isNaN(o) || (r = `${o * 100}%`), `oklab(from ${e} l a b / ${r})`;
    }
    function X(e, r, o) {
      if (!r) return e;
      if (r.kind === "arbitrary") return ee(e, r.value);
      let t = o.resolve(r.value, ["--opacity"]);
      return t ? ee(e, t) : bt(r.value) ? ee(e, `${r.value}%`) : null;
    }
    function te(e, r, o) {
      let t = null;
      switch (e.value.value) {
        case "inherit": {
          t = "inherit";
          break;
        }
        case "transparent": {
          t = "transparent";
          break;
        }
        case "current": {
          t = "currentcolor";
          break;
        }
        default: {
          t = r.resolve(e.value.value, o);
          break;
        }
      }
      return t ? X(t, e.modifier, r) : null;
    }
    var wr = /(\d+)_(\d+)/g;
    function fi(e) {
      let r = new di();
      function o(a, u) {
        function* v(w) {
          for (let C of e.keysInNamespaces(w)) yield C.replace(wr, (N, S, j) => `${S}.${j}`);
        }
        let x = ["1/2", "1/3", "2/3", "1/4", "2/4", "3/4", "1/5", "2/5", "3/5", "4/5", "1/6", "2/6", "3/6", "4/6", "5/6", "1/12", "2/12", "3/12", "4/12", "5/12", "6/12", "7/12", "8/12", "9/12", "10/12", "11/12"];
        r.suggest(a, () => {
          let w = [];
          for (let C of u()) {
            if (typeof C == "string") {
              w.push({ values: [C], modifiers: [] });
              continue;
            }
            let N = [...C.values ?? [], ...v(C.valueThemeKeys ?? [])], S = [...C.modifiers ?? [], ...v(C.modifierThemeKeys ?? [])];
            C.supportsFractions && N.push(...x), C.hasDefaultValue && N.unshift(null), w.push({ supportsNegative: C.supportsNegative, values: N, modifiers: S });
          }
          return w;
        });
      }
      function t(a, u) {
        r.static(a, () => u.map((v) => typeof v == "function" ? v() : i(v[0], v[1])));
      }
      function n(a, u) {
        u.staticValues && (u.staticValues = Object.assign(/* @__PURE__ */ Object.create(null), u.staticValues));
        function v({ negative: x }) {
          return (w) => {
            let C = null, N = null;
            if (w.value) if (w.value.kind === "arbitrary") {
              if (w.modifier) return;
              C = w.value.value, N = w.value.dataType;
            } else {
              if (C = e.resolve(w.value.fraction ?? w.value.value, u.themeKeys ?? []), C === null && u.supportsFractions && w.value.fraction) {
                let [S, j] = _(w.value.fraction, "/");
                if (!V(S) || !V(j)) return;
                C = `calc(${S} / ${j} * 100%)`;
              }
              if (C === null && x && u.handleNegativeBareValue) {
                if (C = u.handleNegativeBareValue(w.value), !C?.includes("/") && w.modifier) return;
                if (C !== null) return u.handle(C, null);
              }
              if (C === null && u.handleBareValue && (C = u.handleBareValue(w.value), !C?.includes("/") && w.modifier)) return;
              if (C === null && !x && u.staticValues && !w.modifier) {
                let S = u.staticValues[w.value.value];
                if (S) return S.map(le);
              }
            }
            else {
              if (w.modifier) return;
              C = u.defaultValue !== void 0 ? u.defaultValue : e.resolve(null, u.themeKeys ?? []);
            }
            if (C !== null) return u.handle(x ? lr(`calc(${C} * -1)`) : C, N);
          };
        }
        if (u.supportsNegative && r.functional(`-${a}`, v({ negative: true })), r.functional(a, v({ negative: false })), o(a, () => [{ supportsNegative: u.supportsNegative, valueThemeKeys: u.themeKeys ?? [], hasDefaultValue: u.defaultValue !== void 0 && u.defaultValue !== null, supportsFractions: u.supportsFractions }]), u.staticValues && Object.keys(u.staticValues).length > 0) {
          let x = Object.keys(u.staticValues);
          o(a, () => [{ values: x }]);
        }
      }
      function s(a, u) {
        r.functional(a, (v) => {
          if (!v.value) return;
          let x = null;
          if (v.value.kind === "arbitrary" ? (x = v.value.value, x = X(x, v.modifier, e)) : x = te(v, e, u.themeKeys), x !== null) return u.handle(x);
        }), o(a, () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: u.themeKeys, modifiers: Array.from({ length: 21 }, (v, x) => `${x * 5}`) }]);
      }
      function l(a, u, v, { supportsNegative: x = false, supportsFractions: w = false, staticValues: C } = {}) {
        x && r.static(`-${a}-px`, () => v("-1px")), r.static(`${a}-px`, () => v("1px")), n(a, { themeKeys: u, supportsFractions: w, supportsNegative: x, defaultValue: null, handleBareValue: ({ value: N }) => !e.resolve(null, ["--spacing"]) || !pe(N) ? null : `--spacing(${N})`, handleNegativeBareValue: ({ value: N }) => !e.resolve(null, ["--spacing"]) || !pe(N) ? null : `--spacing(-${N})`, handle: v, staticValues: C }), o(a, () => [{ values: e.get(["--spacing"]) ? He : [], supportsNegative: x, supportsFractions: w, valueThemeKeys: u }]);
      }
      t("sr-only", [["position", "absolute"], ["width", "1px"], ["height", "1px"], ["padding", "0"], ["margin", "-1px"], ["overflow", "hidden"], ["clip-path", "inset(50%)"], ["white-space", "nowrap"], ["border-width", "0"]]), t("not-sr-only", [["position", "static"], ["width", "auto"], ["height", "auto"], ["padding", "0"], ["margin", "0"], ["overflow", "visible"], ["clip-path", "none"], ["white-space", "normal"]]), t("pointer-events-none", [["pointer-events", "none"]]), t("pointer-events-auto", [["pointer-events", "auto"]]), t("visible", [["visibility", "visible"]]), t("invisible", [["visibility", "hidden"]]), t("collapse", [["visibility", "collapse"]]), t("static", [["position", "static"]]), t("fixed", [["position", "fixed"]]), t("absolute", [["position", "absolute"]]), t("relative", [["position", "relative"]]), t("sticky", [["position", "sticky"]]);
      for (let [a, u] of [["inset", "inset"], ["inset-x", "inset-inline"], ["inset-y", "inset-block"], ["inset-s", "inset-inline-start"], ["inset-e", "inset-inline-end"], ["inset-bs", "inset-block-start"], ["inset-be", "inset-block-end"], ["top", "top"], ["right", "right"], ["bottom", "bottom"], ["left", "left"]]) t(`${a}-auto`, [[u, "auto"]]), t(`${a}-full`, [[u, "100%"]]), t(`-${a}-full`, [[u, "-100%"]]), l(a, ["--inset", "--spacing"], (v) => [i(u, v)], { supportsNegative: true, supportsFractions: true });
      t("isolate", [["isolation", "isolate"]]), t("isolation-auto", [["isolation", "auto"]]), n("z", { supportsNegative: true, handleBareValue: ({ value: a }) => V(a) ? a : null, themeKeys: ["--z-index"], handle: (a) => [i("z-index", a)], staticValues: { auto: [i("z-index", "auto")] } }), o("z", () => [{ supportsNegative: true, values: ["0", "10", "20", "30", "40", "50"], valueThemeKeys: ["--z-index"] }]), n("order", { supportsNegative: true, handleBareValue: ({ value: a }) => V(a) ? a : null, themeKeys: ["--order"], handle: (a) => [i("order", a)], staticValues: { first: [i("order", "-9999")], last: [i("order", "9999")] } }), o("order", () => [{ supportsNegative: true, values: Array.from({ length: 12 }, (a, u) => `${u + 1}`), valueThemeKeys: ["--order"] }]), n("col", { supportsNegative: true, handleBareValue: ({ value: a }) => V(a) ? a : null, themeKeys: ["--grid-column"], handle: (a) => [i("grid-column", a)], staticValues: { auto: [i("grid-column", "auto")] } }), n("col-span", { handleBareValue: ({ value: a }) => V(a) ? a : null, handle: (a) => [i("grid-column", `span ${a} / span ${a}`)], staticValues: { full: [i("grid-column", "1 / -1")] } }), n("col-start", { supportsNegative: true, handleBareValue: ({ value: a }) => V(a) ? a : null, themeKeys: ["--grid-column-start"], handle: (a) => [i("grid-column-start", a)], staticValues: { auto: [i("grid-column-start", "auto")] } }), n("col-end", { supportsNegative: true, handleBareValue: ({ value: a }) => V(a) ? a : null, themeKeys: ["--grid-column-end"], handle: (a) => [i("grid-column-end", a)], staticValues: { auto: [i("grid-column-end", "auto")] } }), o("col-span", () => [{ values: Array.from({ length: 12 }, (a, u) => `${u + 1}`), valueThemeKeys: [] }]), o("col-start", () => [{ supportsNegative: true, values: Array.from({ length: 13 }, (a, u) => `${u + 1}`), valueThemeKeys: ["--grid-column-start"] }]), o("col-end", () => [{ supportsNegative: true, values: Array.from({ length: 13 }, (a, u) => `${u + 1}`), valueThemeKeys: ["--grid-column-end"] }]), n("row", { supportsNegative: true, handleBareValue: ({ value: a }) => V(a) ? a : null, themeKeys: ["--grid-row"], handle: (a) => [i("grid-row", a)], staticValues: { auto: [i("grid-row", "auto")] } }), n("row-span", { themeKeys: [], handleBareValue: ({ value: a }) => V(a) ? a : null, handle: (a) => [i("grid-row", `span ${a} / span ${a}`)], staticValues: { full: [i("grid-row", "1 / -1")] } }), n("row-start", { supportsNegative: true, handleBareValue: ({ value: a }) => V(a) ? a : null, themeKeys: ["--grid-row-start"], handle: (a) => [i("grid-row-start", a)], staticValues: { auto: [i("grid-row-start", "auto")] } }), n("row-end", { supportsNegative: true, handleBareValue: ({ value: a }) => V(a) ? a : null, themeKeys: ["--grid-row-end"], handle: (a) => [i("grid-row-end", a)], staticValues: { auto: [i("grid-row-end", "auto")] } }), o("row-span", () => [{ values: Array.from({ length: 12 }, (a, u) => `${u + 1}`), valueThemeKeys: [] }]), o("row-start", () => [{ supportsNegative: true, values: Array.from({ length: 13 }, (a, u) => `${u + 1}`), valueThemeKeys: ["--grid-row-start"] }]), o("row-end", () => [{ supportsNegative: true, values: Array.from({ length: 13 }, (a, u) => `${u + 1}`), valueThemeKeys: ["--grid-row-end"] }]), t("float-start", [["float", "inline-start"]]), t("float-end", [["float", "inline-end"]]), t("float-right", [["float", "right"]]), t("float-left", [["float", "left"]]), t("float-none", [["float", "none"]]), t("clear-start", [["clear", "inline-start"]]), t("clear-end", [["clear", "inline-end"]]), t("clear-right", [["clear", "right"]]), t("clear-left", [["clear", "left"]]), t("clear-both", [["clear", "both"]]), t("clear-none", [["clear", "none"]]);
      for (let [a, u] of [["m", "margin"], ["mx", "margin-inline"], ["my", "margin-block"], ["ms", "margin-inline-start"], ["me", "margin-inline-end"], ["mbs", "margin-block-start"], ["mbe", "margin-block-end"], ["mt", "margin-top"], ["mr", "margin-right"], ["mb", "margin-bottom"], ["ml", "margin-left"]]) t(`${a}-auto`, [[u, "auto"]]), l(a, ["--margin", "--spacing"], (v) => [i(u, v)], { supportsNegative: true });
      t("box-border", [["box-sizing", "border-box"]]), t("box-content", [["box-sizing", "content-box"]]), n("line-clamp", { themeKeys: ["--line-clamp"], handleBareValue: ({ value: a }) => V(a) ? a : null, handle: (a) => [i("overflow", "hidden"), i("display", "-webkit-box"), i("-webkit-box-orient", "vertical"), i("-webkit-line-clamp", a)], staticValues: { none: [i("overflow", "visible"), i("display", "block"), i("-webkit-box-orient", "horizontal"), i("-webkit-line-clamp", "unset")] } }), o("line-clamp", () => [{ values: ["1", "2", "3", "4", "5", "6"], valueThemeKeys: ["--line-clamp"] }]), t("block", [["display", "block"]]), t("inline-block", [["display", "inline-block"]]), t("inline", [["display", "inline"]]), t("hidden", [["display", "none"]]), t("inline-flex", [["display", "inline-flex"]]), t("table", [["display", "table"]]), t("inline-table", [["display", "inline-table"]]), t("table-caption", [["display", "table-caption"]]), t("table-cell", [["display", "table-cell"]]), t("table-column", [["display", "table-column"]]), t("table-column-group", [["display", "table-column-group"]]), t("table-footer-group", [["display", "table-footer-group"]]), t("table-header-group", [["display", "table-header-group"]]), t("table-row-group", [["display", "table-row-group"]]), t("table-row", [["display", "table-row"]]), t("flow-root", [["display", "flow-root"]]), t("flex", [["display", "flex"]]), t("grid", [["display", "grid"]]), t("inline-grid", [["display", "inline-grid"]]), t("contents", [["display", "contents"]]), t("list-item", [["display", "list-item"]]), t("field-sizing-content", [["field-sizing", "content"]]), t("field-sizing-fixed", [["field-sizing", "fixed"]]), n("aspect", { themeKeys: ["--aspect"], handleBareValue: ({ fraction: a }) => {
        if (a === null) return null;
        let [u, v] = _(a, "/");
        return !pe(u) || !pe(v) ? null : a;
      }, handle: (a) => [i("aspect-ratio", a)], staticValues: { auto: [i("aspect-ratio", "auto")], square: [i("aspect-ratio", "1 / 1")] } });
      for (let [a, u] of [["full", "100%"], ["svw", "100svw"], ["lvw", "100lvw"], ["dvw", "100dvw"], ["svh", "100svh"], ["lvh", "100lvh"], ["dvh", "100dvh"], ["min", "min-content"], ["max", "max-content"], ["fit", "fit-content"]]) t(`size-${a}`, [["--tw-sort", "size"], ["width", u], ["height", u]]), t(`w-${a}`, [["width", u]]), t(`h-${a}`, [["height", u]]), t(`min-w-${a}`, [["min-width", u]]), t(`min-h-${a}`, [["min-height", u]]), t(`max-w-${a}`, [["max-width", u]]), t(`max-h-${a}`, [["max-height", u]]);
      t("size-auto", [["--tw-sort", "size"], ["width", "auto"], ["height", "auto"]]), t("w-auto", [["width", "auto"]]), t("h-auto", [["height", "auto"]]), t("min-w-auto", [["min-width", "auto"]]), t("min-h-auto", [["min-height", "auto"]]), t("h-lh", [["height", "1lh"]]), t("min-h-lh", [["min-height", "1lh"]]), t("max-h-lh", [["max-height", "1lh"]]), t("w-screen", [["width", "100vw"]]), t("min-w-screen", [["min-width", "100vw"]]), t("max-w-screen", [["max-width", "100vw"]]), t("h-screen", [["height", "100vh"]]), t("min-h-screen", [["min-height", "100vh"]]), t("max-h-screen", [["max-height", "100vh"]]), t("max-w-none", [["max-width", "none"]]), t("max-h-none", [["max-height", "none"]]), l("size", ["--size", "--spacing"], (a) => [i("--tw-sort", "size"), i("width", a), i("height", a)], { supportsFractions: true });
      for (let [a, u, v] of [["w", ["--width", "--spacing", "--container"], "width"], ["min-w", ["--min-width", "--spacing", "--container"], "min-width"], ["max-w", ["--max-width", "--spacing", "--container"], "max-width"], ["h", ["--height", "--spacing"], "height"], ["min-h", ["--min-height", "--height", "--spacing"], "min-height"], ["max-h", ["--max-height", "--height", "--spacing"], "max-height"]]) l(a, u, (x) => [i(v, x)], { supportsFractions: true });
      for (let [a, u] of [["full", "100%"], ["min", "min-content"], ["max", "max-content"], ["fit", "fit-content"]]) t(`inline-${a}`, [["inline-size", u]]), t(`block-${a}`, [["block-size", u]]), t(`min-inline-${a}`, [["min-inline-size", u]]), t(`min-block-${a}`, [["min-block-size", u]]), t(`max-inline-${a}`, [["max-inline-size", u]]), t(`max-block-${a}`, [["max-block-size", u]]);
      for (let [a, u] of [["svw", "100svw"], ["lvw", "100lvw"], ["dvw", "100dvw"]]) t(`inline-${a}`, [["inline-size", u]]), t(`min-inline-${a}`, [["min-inline-size", u]]), t(`max-inline-${a}`, [["max-inline-size", u]]);
      for (let [a, u] of [["svh", "100svh"], ["lvh", "100lvh"], ["dvh", "100dvh"]]) t(`block-${a}`, [["block-size", u]]), t(`min-block-${a}`, [["min-block-size", u]]), t(`max-block-${a}`, [["max-block-size", u]]);
      t("inline-auto", [["inline-size", "auto"]]), t("block-auto", [["block-size", "auto"]]), t("min-inline-auto", [["min-inline-size", "auto"]]), t("min-block-auto", [["min-block-size", "auto"]]), t("block-lh", [["block-size", "1lh"]]), t("min-block-lh", [["min-block-size", "1lh"]]), t("max-block-lh", [["max-block-size", "1lh"]]), t("inline-screen", [["inline-size", "100vw"]]), t("min-inline-screen", [["min-inline-size", "100vw"]]), t("max-inline-screen", [["max-inline-size", "100vw"]]), t("block-screen", [["block-size", "100vh"]]), t("min-block-screen", [["min-block-size", "100vh"]]), t("max-block-screen", [["max-block-size", "100vh"]]), t("max-inline-none", [["max-inline-size", "none"]]), t("max-block-none", [["max-block-size", "none"]]);
      for (let [a, u, v] of [["inline", ["--spacing", "--container"], "inline-size"], ["min-inline", ["--spacing", "--container"], "min-inline-size"], ["max-inline", ["--spacing", "--container"], "max-inline-size"], ["block", ["--spacing"], "block-size"], ["min-block", ["--spacing"], "min-block-size"], ["max-block", ["--spacing"], "max-block-size"]]) l(a, u, (x) => [i(v, x)], { supportsFractions: true });
      r.static("container", () => {
        let a = [...e.namespace("--breakpoint").values()];
        a.sort((v, x) => Pe(v, x, "asc"));
        let u = [i("--tw-sort", "--tw-container-component"), i("width", "100%")];
        for (let v of a) u.push(P("@media", `(width >= ${v})`, [i("max-width", v)]));
        return u;
      }), t("flex-auto", [["flex", "auto"]]), t("flex-initial", [["flex", "0 auto"]]), t("flex-none", [["flex", "none"]]), r.functional("flex", (a) => {
        if (a.value) {
          if (a.value.kind === "arbitrary") return a.modifier ? void 0 : [i("flex", a.value.value)];
          if (a.value.fraction) {
            let [u, v] = _(a.value.fraction, "/");
            return !V(u) || !V(v) ? void 0 : [i("flex", `calc(${a.value.fraction} * 100%)`)];
          }
          if (V(a.value.value)) return a.modifier ? void 0 : [i("flex", a.value.value)];
        }
      }), o("flex", () => [{ supportsFractions: true }, { values: Array.from({ length: 12 }, (a, u) => `${u + 1}`) }]), n("shrink", { defaultValue: "1", handleBareValue: ({ value: a }) => V(a) ? a : null, handle: (a) => [i("flex-shrink", a)] }), n("grow", { defaultValue: "1", handleBareValue: ({ value: a }) => V(a) ? a : null, handle: (a) => [i("flex-grow", a)] }), o("shrink", () => [{ values: ["0"], valueThemeKeys: [], hasDefaultValue: true }]), o("grow", () => [{ values: ["0"], valueThemeKeys: [], hasDefaultValue: true }]), t("basis-auto", [["flex-basis", "auto"]]), t("basis-full", [["flex-basis", "100%"]]), l("basis", ["--flex-basis", "--spacing", "--container"], (a) => [i("flex-basis", a)], { supportsFractions: true }), t("table-auto", [["table-layout", "auto"]]), t("table-fixed", [["table-layout", "fixed"]]), t("caption-top", [["caption-side", "top"]]), t("caption-bottom", [["caption-side", "bottom"]]), t("border-collapse", [["border-collapse", "collapse"]]), t("border-separate", [["border-collapse", "separate"]]);
      let h = () => I([A("--tw-border-spacing-x", "0", "<length>"), A("--tw-border-spacing-y", "0", "<length>")]);
      l("border-spacing", ["--border-spacing", "--spacing"], (a) => [h(), i("--tw-border-spacing-x", a), i("--tw-border-spacing-y", a), i("border-spacing", "var(--tw-border-spacing-x) var(--tw-border-spacing-y)")]), l("border-spacing-x", ["--border-spacing", "--spacing"], (a) => [h(), i("--tw-border-spacing-x", a), i("border-spacing", "var(--tw-border-spacing-x) var(--tw-border-spacing-y)")]), l("border-spacing-y", ["--border-spacing", "--spacing"], (a) => [h(), i("--tw-border-spacing-y", a), i("border-spacing", "var(--tw-border-spacing-x) var(--tw-border-spacing-y)")]), n("origin", { themeKeys: ["--transform-origin"], handle: (a) => [i("transform-origin", a)], staticValues: { center: [i("transform-origin", "center")], top: [i("transform-origin", "top")], "top-right": [i("transform-origin", "100% 0")], right: [i("transform-origin", "100%")], "bottom-right": [i("transform-origin", "100% 100%")], bottom: [i("transform-origin", "bottom")], "bottom-left": [i("transform-origin", "0 100%")], left: [i("transform-origin", "0")], "top-left": [i("transform-origin", "0 0")] } }), n("perspective-origin", { themeKeys: ["--perspective-origin"], handle: (a) => [i("perspective-origin", a)], staticValues: { center: [i("perspective-origin", "center")], top: [i("perspective-origin", "top")], "top-right": [i("perspective-origin", "100% 0")], right: [i("perspective-origin", "100%")], "bottom-right": [i("perspective-origin", "100% 100%")], bottom: [i("perspective-origin", "bottom")], "bottom-left": [i("perspective-origin", "0 100%")], left: [i("perspective-origin", "0")], "top-left": [i("perspective-origin", "0 0")] } }), n("perspective", { themeKeys: ["--perspective"], handle: (a) => [i("perspective", a)], staticValues: { none: [i("perspective", "none")] } });
      let p = () => I([A("--tw-translate-x", "0"), A("--tw-translate-y", "0"), A("--tw-translate-z", "0")]);
      t("translate-none", [["translate", "none"]]), t("-translate-full", [p, ["--tw-translate-x", "-100%"], ["--tw-translate-y", "-100%"], ["translate", "var(--tw-translate-x) var(--tw-translate-y)"]]), t("translate-full", [p, ["--tw-translate-x", "100%"], ["--tw-translate-y", "100%"], ["translate", "var(--tw-translate-x) var(--tw-translate-y)"]]), l("translate", ["--translate", "--spacing"], (a) => [p(), i("--tw-translate-x", a), i("--tw-translate-y", a), i("translate", "var(--tw-translate-x) var(--tw-translate-y)")], { supportsNegative: true, supportsFractions: true });
      for (let a of ["x", "y"]) t(`-translate-${a}-full`, [p, [`--tw-translate-${a}`, "-100%"], ["translate", "var(--tw-translate-x) var(--tw-translate-y)"]]), t(`translate-${a}-full`, [p, [`--tw-translate-${a}`, "100%"], ["translate", "var(--tw-translate-x) var(--tw-translate-y)"]]), l(`translate-${a}`, ["--translate", "--spacing"], (u) => [p(), i(`--tw-translate-${a}`, u), i("translate", "var(--tw-translate-x) var(--tw-translate-y)")], { supportsNegative: true, supportsFractions: true });
      l("translate-z", ["--translate", "--spacing"], (a) => [p(), i("--tw-translate-z", a), i("translate", "var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)")], { supportsNegative: true }), t("translate-3d", [p, ["translate", "var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)"]]);
      let c = () => I([A("--tw-scale-x", "1"), A("--tw-scale-y", "1"), A("--tw-scale-z", "1")]);
      t("scale-none", [["scale", "none"]]);
      function m({ negative: a }) {
        return (u) => {
          if (!u.value || u.modifier) return;
          let v;
          return u.value.kind === "arbitrary" ? (v = u.value.value, v = a ? `calc(${v} * -1)` : v, [i("scale", v)]) : (v = e.resolve(u.value.value, ["--scale"]), !v && V(u.value.value) && (v = `${u.value.value}%`), v ? (v = a ? `calc(${v} * -1)` : v, [c(), i("--tw-scale-x", v), i("--tw-scale-y", v), i("--tw-scale-z", v), i("scale", "var(--tw-scale-x) var(--tw-scale-y)")]) : void 0);
        };
      }
      r.functional("-scale", m({ negative: true })), r.functional("scale", m({ negative: false })), o("scale", () => [{ supportsNegative: true, values: ["0", "50", "75", "90", "95", "100", "105", "110", "125", "150", "200"], valueThemeKeys: ["--scale"] }]);
      for (let a of ["x", "y", "z"]) n(`scale-${a}`, { supportsNegative: true, themeKeys: ["--scale"], handleBareValue: ({ value: u }) => V(u) ? `${u}%` : null, handle: (u) => [c(), i(`--tw-scale-${a}`, u), i("scale", `var(--tw-scale-x) var(--tw-scale-y)${a === "z" ? " var(--tw-scale-z)" : ""}`)] }), o(`scale-${a}`, () => [{ supportsNegative: true, values: ["0", "50", "75", "90", "95", "100", "105", "110", "125", "150", "200"], valueThemeKeys: ["--scale"] }]);
      t("scale-3d", [c, ["scale", "var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z)"]]), t("rotate-none", [["rotate", "none"]]);
      function f({ negative: a }) {
        return (u) => {
          if (!u.value || u.modifier) return;
          let v;
          if (u.value.kind === "arbitrary") {
            v = u.value.value;
            let x = u.value.dataType ?? Z(v, ["angle", "vector"]);
            if (x === "vector") return [i("rotate", `${v} var(--tw-rotate)`)];
            if (x !== "angle") return [i("rotate", a ? `calc(${v} * -1)` : v)];
          } else if (v = e.resolve(u.value.value, ["--rotate"]), !v && V(u.value.value) && (v = `${u.value.value}deg`), !v) return;
          return [i("rotate", a ? `calc(${v} * -1)` : v)];
        };
      }
      r.functional("-rotate", f({ negative: true })), r.functional("rotate", f({ negative: false })), o("rotate", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12", "45", "90", "180"], valueThemeKeys: ["--rotate"] }]);
      {
        let a = ["var(--tw-rotate-x,)", "var(--tw-rotate-y,)", "var(--tw-rotate-z,)", "var(--tw-skew-x,)", "var(--tw-skew-y,)"].join(" "), u = () => I([A("--tw-rotate-x"), A("--tw-rotate-y"), A("--tw-rotate-z"), A("--tw-skew-x"), A("--tw-skew-y")]);
        for (let v of ["x", "y", "z"]) n(`rotate-${v}`, { supportsNegative: true, themeKeys: ["--rotate"], handleBareValue: ({ value: x }) => V(x) ? `${x}deg` : null, handle: (x) => [u(), i(`--tw-rotate-${v}`, `rotate${v.toUpperCase()}(${x})`), i("transform", a)] }), o(`rotate-${v}`, () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12", "45", "90", "180"], valueThemeKeys: ["--rotate"] }]);
        n("skew", { supportsNegative: true, themeKeys: ["--skew"], handleBareValue: ({ value: v }) => V(v) ? `${v}deg` : null, handle: (v) => [u(), i("--tw-skew-x", `skewX(${v})`), i("--tw-skew-y", `skewY(${v})`), i("transform", a)] }), n("skew-x", { supportsNegative: true, themeKeys: ["--skew"], handleBareValue: ({ value: v }) => V(v) ? `${v}deg` : null, handle: (v) => [u(), i("--tw-skew-x", `skewX(${v})`), i("transform", a)] }), n("skew-y", { supportsNegative: true, themeKeys: ["--skew"], handleBareValue: ({ value: v }) => V(v) ? `${v}deg` : null, handle: (v) => [u(), i("--tw-skew-y", `skewY(${v})`), i("transform", a)] }), o("skew", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12"], valueThemeKeys: ["--skew"] }]), o("skew-x", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12"], valueThemeKeys: ["--skew"] }]), o("skew-y", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12"], valueThemeKeys: ["--skew"] }]), r.functional("transform", (v) => {
          if (v.modifier) return;
          let x = null;
          if (v.value ? v.value.kind === "arbitrary" && (x = v.value.value) : x = a, x !== null) return [u(), i("transform", x)];
        }), o("transform", () => [{ hasDefaultValue: true }]), t("transform-cpu", [["transform", a]]), t("transform-gpu", [["transform", `translateZ(0) ${a}`]]), t("transform-none", [["transform", "none"]]);
      }
      n("zoom", { handleBareValue: ({ value: a }) => V(a) ? `${a}%` : null, handle: (a) => [i("zoom", a)] }), o("zoom", () => [{ values: ["50", "75", "90", "95", "100", "105", "110", "125", "150", "200"] }]), t("transform-flat", [["transform-style", "flat"]]), t("transform-3d", [["transform-style", "preserve-3d"]]), t("transform-content", [["transform-box", "content-box"]]), t("transform-border", [["transform-box", "border-box"]]), t("transform-fill", [["transform-box", "fill-box"]]), t("transform-stroke", [["transform-box", "stroke-box"]]), t("transform-view", [["transform-box", "view-box"]]), t("backface-visible", [["backface-visibility", "visible"]]), t("backface-hidden", [["backface-visibility", "hidden"]]);
      for (let a of ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out"]) t(`cursor-${a}`, [["cursor", a]]);
      n("cursor", { themeKeys: ["--cursor"], handle: (a) => [i("cursor", a)] });
      for (let a of ["auto", "none", "manipulation"]) t(`touch-${a}`, [["touch-action", a]]);
      let d = () => I([A("--tw-pan-x"), A("--tw-pan-y"), A("--tw-pinch-zoom")]);
      for (let a of ["x", "left", "right"]) t(`touch-pan-${a}`, [d, ["--tw-pan-x", `pan-${a}`], ["touch-action", "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"]]);
      for (let a of ["y", "up", "down"]) t(`touch-pan-${a}`, [d, ["--tw-pan-y", `pan-${a}`], ["touch-action", "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"]]);
      t("touch-pinch-zoom", [d, ["--tw-pinch-zoom", "pinch-zoom"], ["touch-action", "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"]]);
      for (let a of ["none", "text", "all", "auto"]) t(`select-${a}`, [["-webkit-user-select", a], ["user-select", a]]);
      t("resize-none", [["resize", "none"]]), t("resize-x", [["resize", "horizontal"]]), t("resize-y", [["resize", "vertical"]]), t("resize", [["resize", "both"]]), t("snap-none", [["scroll-snap-type", "none"]]);
      let k = () => I([A("--tw-scroll-snap-strictness", "proximity", "*")]);
      for (let a of ["x", "y", "both"]) t(`snap-${a}`, [k, ["scroll-snap-type", `${a} var(--tw-scroll-snap-strictness)`]]);
      t("snap-mandatory", [k, ["--tw-scroll-snap-strictness", "mandatory"]]), t("snap-proximity", [k, ["--tw-scroll-snap-strictness", "proximity"]]), t("snap-align-none", [["scroll-snap-align", "none"]]), t("snap-start", [["scroll-snap-align", "start"]]), t("snap-end", [["scroll-snap-align", "end"]]), t("snap-center", [["scroll-snap-align", "center"]]), t("snap-normal", [["scroll-snap-stop", "normal"]]), t("snap-always", [["scroll-snap-stop", "always"]]);
      for (let [a, u] of [["scroll-m", "scroll-margin"], ["scroll-mx", "scroll-margin-inline"], ["scroll-my", "scroll-margin-block"], ["scroll-ms", "scroll-margin-inline-start"], ["scroll-me", "scroll-margin-inline-end"], ["scroll-mbs", "scroll-margin-block-start"], ["scroll-mbe", "scroll-margin-block-end"], ["scroll-mt", "scroll-margin-top"], ["scroll-mr", "scroll-margin-right"], ["scroll-mb", "scroll-margin-bottom"], ["scroll-ml", "scroll-margin-left"]]) l(a, ["--scroll-margin", "--spacing"], (v) => [i(u, v)], { supportsNegative: true });
      for (let [a, u] of [["scroll-p", "scroll-padding"], ["scroll-px", "scroll-padding-inline"], ["scroll-py", "scroll-padding-block"], ["scroll-ps", "scroll-padding-inline-start"], ["scroll-pe", "scroll-padding-inline-end"], ["scroll-pbs", "scroll-padding-block-start"], ["scroll-pbe", "scroll-padding-block-end"], ["scroll-pt", "scroll-padding-top"], ["scroll-pr", "scroll-padding-right"], ["scroll-pb", "scroll-padding-bottom"], ["scroll-pl", "scroll-padding-left"]]) l(a, ["--scroll-padding", "--spacing"], (v) => [i(u, v)]);
      t("list-inside", [["list-style-position", "inside"]]), t("list-outside", [["list-style-position", "outside"]]), n("list", { themeKeys: ["--list-style-type"], handle: (a) => [i("list-style-type", a)], staticValues: { none: [i("list-style-type", "none")], disc: [i("list-style-type", "disc")], decimal: [i("list-style-type", "decimal")] } }), n("list-image", { themeKeys: ["--list-style-image"], handle: (a) => [i("list-style-image", a)], staticValues: { none: [i("list-style-image", "none")] } }), t("appearance-none", [["appearance", "none"]]), t("appearance-auto", [["appearance", "auto"]]), t("scheme-normal", [["color-scheme", "normal"]]), t("scheme-dark", [["color-scheme", "dark"]]), t("scheme-light", [["color-scheme", "light"]]), t("scheme-light-dark", [["color-scheme", "light dark"]]), t("scheme-only-dark", [["color-scheme", "only dark"]]), t("scheme-only-light", [["color-scheme", "only light"]]), n("columns", { themeKeys: ["--columns", "--container"], handleBareValue: ({ value: a }) => V(a) ? a : null, handle: (a) => [i("columns", a)], staticValues: { auto: [i("columns", "auto")] } }), o("columns", () => [{ values: Array.from({ length: 12 }, (a, u) => `${u + 1}`), valueThemeKeys: ["--columns", "--container"] }]);
      for (let a of ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]) t(`break-before-${a}`, [["break-before", a]]);
      for (let a of ["auto", "avoid", "avoid-page", "avoid-column"]) t(`break-inside-${a}`, [["break-inside", a]]);
      for (let a of ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]) t(`break-after-${a}`, [["break-after", a]]);
      t("grid-flow-row", [["grid-auto-flow", "row"]]), t("grid-flow-col", [["grid-auto-flow", "column"]]), t("grid-flow-dense", [["grid-auto-flow", "dense"]]), t("grid-flow-row-dense", [["grid-auto-flow", "row dense"]]), t("grid-flow-col-dense", [["grid-auto-flow", "column dense"]]), n("auto-cols", { themeKeys: ["--grid-auto-columns"], handle: (a) => [i("grid-auto-columns", a)], staticValues: { auto: [i("grid-auto-columns", "auto")], min: [i("grid-auto-columns", "min-content")], max: [i("grid-auto-columns", "max-content")], fr: [i("grid-auto-columns", "minmax(0, 1fr)")] } }), n("auto-rows", { themeKeys: ["--grid-auto-rows"], handle: (a) => [i("grid-auto-rows", a)], staticValues: { auto: [i("grid-auto-rows", "auto")], min: [i("grid-auto-rows", "min-content")], max: [i("grid-auto-rows", "max-content")], fr: [i("grid-auto-rows", "minmax(0, 1fr)")] } }), n("grid-cols", { themeKeys: ["--grid-template-columns"], handleBareValue: ({ value: a }) => gr(a) ? `repeat(${a}, minmax(0, 1fr))` : null, handle: (a) => [i("grid-template-columns", a)], staticValues: { none: [i("grid-template-columns", "none")], subgrid: [i("grid-template-columns", "subgrid")] } }), n("grid-rows", { themeKeys: ["--grid-template-rows"], handleBareValue: ({ value: a }) => gr(a) ? `repeat(${a}, minmax(0, 1fr))` : null, handle: (a) => [i("grid-template-rows", a)], staticValues: { none: [i("grid-template-rows", "none")], subgrid: [i("grid-template-rows", "subgrid")] } }), o("grid-cols", () => [{ values: Array.from({ length: 12 }, (a, u) => `${u + 1}`), valueThemeKeys: ["--grid-template-columns"] }]), o("grid-rows", () => [{ values: Array.from({ length: 12 }, (a, u) => `${u + 1}`), valueThemeKeys: ["--grid-template-rows"] }]), t("flex-row", [["flex-direction", "row"]]), t("flex-row-reverse", [["flex-direction", "row-reverse"]]), t("flex-col", [["flex-direction", "column"]]), t("flex-col-reverse", [["flex-direction", "column-reverse"]]), t("flex-wrap", [["flex-wrap", "wrap"]]), t("flex-nowrap", [["flex-wrap", "nowrap"]]), t("flex-wrap-reverse", [["flex-wrap", "wrap-reverse"]]), t("place-content-center", [["place-content", "center"]]), t("place-content-start", [["place-content", "start"]]), t("place-content-end", [["place-content", "end"]]), t("place-content-center-safe", [["place-content", "safe center"]]), t("place-content-end-safe", [["place-content", "safe end"]]), t("place-content-between", [["place-content", "space-between"]]), t("place-content-around", [["place-content", "space-around"]]), t("place-content-evenly", [["place-content", "space-evenly"]]), t("place-content-baseline", [["place-content", "baseline"]]), t("place-content-stretch", [["place-content", "stretch"]]), t("place-items-center", [["place-items", "center"]]), t("place-items-start", [["place-items", "start"]]), t("place-items-end", [["place-items", "end"]]), t("place-items-center-safe", [["place-items", "safe center"]]), t("place-items-end-safe", [["place-items", "safe end"]]), t("place-items-baseline", [["place-items", "baseline"]]), t("place-items-stretch", [["place-items", "stretch"]]), t("content-normal", [["align-content", "normal"]]), t("content-center", [["align-content", "center"]]), t("content-start", [["align-content", "flex-start"]]), t("content-end", [["align-content", "flex-end"]]), t("content-center-safe", [["align-content", "safe center"]]), t("content-end-safe", [["align-content", "safe flex-end"]]), t("content-between", [["align-content", "space-between"]]), t("content-around", [["align-content", "space-around"]]), t("content-evenly", [["align-content", "space-evenly"]]), t("content-baseline", [["align-content", "baseline"]]), t("content-stretch", [["align-content", "stretch"]]), t("items-center", [["align-items", "center"]]), t("items-start", [["align-items", "flex-start"]]), t("items-end", [["align-items", "flex-end"]]), t("items-center-safe", [["align-items", "safe center"]]), t("items-end-safe", [["align-items", "safe flex-end"]]), t("items-baseline", [["align-items", "baseline"]]), t("items-baseline-last", [["align-items", "last baseline"]]), t("items-stretch", [["align-items", "stretch"]]), t("justify-normal", [["justify-content", "normal"]]), t("justify-center", [["justify-content", "center"]]), t("justify-start", [["justify-content", "flex-start"]]), t("justify-end", [["justify-content", "flex-end"]]), t("justify-center-safe", [["justify-content", "safe center"]]), t("justify-end-safe", [["justify-content", "safe flex-end"]]), t("justify-between", [["justify-content", "space-between"]]), t("justify-around", [["justify-content", "space-around"]]), t("justify-evenly", [["justify-content", "space-evenly"]]), t("justify-baseline", [["justify-content", "baseline"]]), t("justify-stretch", [["justify-content", "stretch"]]), t("justify-items-normal", [["justify-items", "normal"]]), t("justify-items-center", [["justify-items", "center"]]), t("justify-items-start", [["justify-items", "start"]]), t("justify-items-end", [["justify-items", "end"]]), t("justify-items-center-safe", [["justify-items", "safe center"]]), t("justify-items-end-safe", [["justify-items", "safe end"]]), t("justify-items-stretch", [["justify-items", "stretch"]]), l("gap", ["--gap", "--spacing"], (a) => [i("gap", a)]), l("gap-x", ["--gap", "--spacing"], (a) => [i("column-gap", a)]), l("gap-y", ["--gap", "--spacing"], (a) => [i("row-gap", a)]), l("space-x", ["--space", "--spacing"], (a) => {
        let u = (() => {
          if (a === "--spacing(0)" || a === "--spacing(-0)") return true;
          let v = kt.get(a);
          return !!(v && v[0] === 0 && (v[1] === null || je(a)));
        })();
        return [I([A("--tw-space-x-reverse", "0")]), q(":where(& > :not(:last-child))", [i("--tw-sort", "row-gap"), i("--tw-space-x-reverse", "0"), i("margin-inline-start", u ? "0" : `calc(${a} * var(--tw-space-x-reverse))`), i("margin-inline-end", u ? "0" : `calc(${a} * calc(1 - var(--tw-space-x-reverse)))`)])];
      }, { supportsNegative: true }), l("space-y", ["--space", "--spacing"], (a) => {
        let u = (() => {
          if (a === "--spacing(0)" || a === "--spacing(-0)") return true;
          let v = kt.get(a);
          return !!(v && v[0] === 0 && (v[1] === null || je(a)));
        })();
        return [I([A("--tw-space-y-reverse", "0")]), q(":where(& > :not(:last-child))", [i("--tw-sort", "column-gap"), i("--tw-space-y-reverse", "0"), i("margin-block-start", u ? "0" : `calc(${a} * var(--tw-space-y-reverse))`), i("margin-block-end", u ? "0" : `calc(${a} * calc(1 - var(--tw-space-y-reverse)))`)])];
      }, { supportsNegative: true }), t("space-x-reverse", [() => I([A("--tw-space-x-reverse", "0")]), () => q(":where(& > :not(:last-child))", [i("--tw-sort", "row-gap"), i("--tw-space-x-reverse", "1")])]), t("space-y-reverse", [() => I([A("--tw-space-y-reverse", "0")]), () => q(":where(& > :not(:last-child))", [i("--tw-sort", "column-gap"), i("--tw-space-y-reverse", "1")])]), t("accent-auto", [["accent-color", "auto"]]), s("accent", { themeKeys: ["--accent-color", "--color"], handle: (a) => [i("accent-color", a)] }), s("caret", { themeKeys: ["--caret-color", "--color"], handle: (a) => [i("caret-color", a)] }), s("divide", { themeKeys: ["--divide-color", "--border-color", "--color"], handle: (a) => [q(":where(& > :not(:last-child))", [i("--tw-sort", "divide-color"), i("border-color", a)])] }), t("place-self-auto", [["place-self", "auto"]]), t("place-self-start", [["place-self", "start"]]), t("place-self-end", [["place-self", "end"]]), t("place-self-center", [["place-self", "center"]]), t("place-self-end-safe", [["place-self", "safe end"]]), t("place-self-center-safe", [["place-self", "safe center"]]), t("place-self-stretch", [["place-self", "stretch"]]), t("self-auto", [["align-self", "auto"]]), t("self-start", [["align-self", "flex-start"]]), t("self-end", [["align-self", "flex-end"]]), t("self-center", [["align-self", "center"]]), t("self-end-safe", [["align-self", "safe flex-end"]]), t("self-center-safe", [["align-self", "safe center"]]), t("self-stretch", [["align-self", "stretch"]]), t("self-baseline", [["align-self", "baseline"]]), t("self-baseline-last", [["align-self", "last baseline"]]), t("justify-self-auto", [["justify-self", "auto"]]), t("justify-self-start", [["justify-self", "flex-start"]]), t("justify-self-end", [["justify-self", "flex-end"]]), t("justify-self-center", [["justify-self", "center"]]), t("justify-self-end-safe", [["justify-self", "safe flex-end"]]), t("justify-self-center-safe", [["justify-self", "safe center"]]), t("justify-self-stretch", [["justify-self", "stretch"]]);
      for (let a of ["auto", "hidden", "clip", "visible", "scroll"]) t(`overflow-${a}`, [["overflow", a]]), t(`overflow-x-${a}`, [["overflow-x", a]]), t(`overflow-y-${a}`, [["overflow-y", a]]);
      for (let a of ["auto", "contain", "none"]) t(`overscroll-${a}`, [["overscroll-behavior", a]]), t(`overscroll-x-${a}`, [["overscroll-behavior-x", a]]), t(`overscroll-y-${a}`, [["overscroll-behavior-y", a]]);
      t("scroll-auto", [["scroll-behavior", "auto"]]), t("scroll-smooth", [["scroll-behavior", "smooth"]]), t("scrollbar-auto", [["scrollbar-width", "auto"]]), t("scrollbar-thin", [["scrollbar-width", "thin"]]), t("scrollbar-none", [["scrollbar-width", "none"]]);
      {
        let a = () => I([A("--tw-scrollbar-thumb", "#0000", "<color>"), A("--tw-scrollbar-track", "#0000", "<color>")]);
        s("scrollbar-thumb", { themeKeys: ["--color"], handle: (u) => [a(), i("--tw-scrollbar-thumb", u), i("scrollbar-color", "var(--tw-scrollbar-thumb) var(--tw-scrollbar-track)")] }), s("scrollbar-track", { themeKeys: ["--color"], handle: (u) => [a(), i("--tw-scrollbar-track", u), i("scrollbar-color", "var(--tw-scrollbar-thumb) var(--tw-scrollbar-track)")] });
      }
      t("scrollbar-gutter-auto", [["scrollbar-gutter", "auto"]]), t("scrollbar-gutter-stable", [["scrollbar-gutter", "stable"]]), t("scrollbar-gutter-both", [["scrollbar-gutter", "stable both-edges"]]), t("truncate", [["overflow", "hidden"], ["text-overflow", "ellipsis"], ["white-space", "nowrap"]]), t("text-ellipsis", [["text-overflow", "ellipsis"]]), t("text-clip", [["text-overflow", "clip"]]), t("hyphens-none", [["-webkit-hyphens", "none"], ["hyphens", "none"]]), t("hyphens-manual", [["-webkit-hyphens", "manual"], ["hyphens", "manual"]]), t("hyphens-auto", [["-webkit-hyphens", "auto"], ["hyphens", "auto"]]), t("whitespace-normal", [["white-space", "normal"]]), t("whitespace-nowrap", [["white-space", "nowrap"]]), t("whitespace-pre", [["white-space", "pre"]]), t("whitespace-pre-line", [["white-space", "pre-line"]]), t("whitespace-pre-wrap", [["white-space", "pre-wrap"]]), t("whitespace-break-spaces", [["white-space", "break-spaces"]]), n("tab", { handleBareValue: ({ value: a }) => V(a) ? a : null, handle: (a) => [i("tab-size", a)] }), o("tab", () => [{ values: ["2", "4", "8"] }]), t("text-wrap", [["text-wrap", "wrap"]]), t("text-nowrap", [["text-wrap", "nowrap"]]), t("text-balance", [["text-wrap", "balance"]]), t("text-pretty", [["text-wrap", "pretty"]]), t("break-normal", [["overflow-wrap", "normal"], ["word-break", "normal"]]), t("break-all", [["word-break", "break-all"]]), t("break-keep", [["word-break", "keep-all"]]), t("wrap-anywhere", [["overflow-wrap", "anywhere"]]), t("wrap-break-word", [["overflow-wrap", "break-word"]]), t("wrap-normal", [["overflow-wrap", "normal"]]);
      for (let [a, u] of [["rounded", ["border-radius"]], ["rounded-s", ["border-start-start-radius", "border-end-start-radius"]], ["rounded-e", ["border-start-end-radius", "border-end-end-radius"]], ["rounded-t", ["border-top-left-radius", "border-top-right-radius"]], ["rounded-r", ["border-top-right-radius", "border-bottom-right-radius"]], ["rounded-b", ["border-bottom-right-radius", "border-bottom-left-radius"]], ["rounded-l", ["border-top-left-radius", "border-bottom-left-radius"]], ["rounded-ss", ["border-start-start-radius"]], ["rounded-se", ["border-start-end-radius"]], ["rounded-ee", ["border-end-end-radius"]], ["rounded-es", ["border-end-start-radius"]], ["rounded-tl", ["border-top-left-radius"]], ["rounded-tr", ["border-top-right-radius"]], ["rounded-br", ["border-bottom-right-radius"]], ["rounded-bl", ["border-bottom-left-radius"]]]) n(a, { themeKeys: ["--radius"], handle: (v) => u.map((x) => i(x, v)), staticValues: { none: u.map((v) => i(v, "0")), full: u.map((v) => i(v, "calc(infinity * 1px)")) } });
      t("border-solid", [["--tw-border-style", "solid"], ["border-style", "solid"]]), t("border-dashed", [["--tw-border-style", "dashed"], ["border-style", "dashed"]]), t("border-dotted", [["--tw-border-style", "dotted"], ["border-style", "dotted"]]), t("border-double", [["--tw-border-style", "double"], ["border-style", "double"]]), t("border-hidden", [["--tw-border-style", "hidden"], ["border-style", "hidden"]]), t("border-none", [["--tw-border-style", "none"], ["border-style", "none"]]);
      {
        let a = function(v, x) {
          r.functional(v, (w) => {
            if (!w.value) {
              if (w.modifier) return;
              let C = e.get(["--default-border-width"]) ?? "1px", N = x.width(C);
              return N ? [u(), ...N] : void 0;
            }
            if (w.value.kind === "arbitrary") {
              let C = w.value.value;
              switch (w.value.dataType ?? Z(C, ["color", "line-width", "length"])) {
                case "line-width":
                case "length": {
                  if (w.modifier) return;
                  let N = x.width(C);
                  return N ? [u(), ...N] : void 0;
                }
                default:
                  return C = X(C, w.modifier, e), C === null ? void 0 : x.color(C);
              }
            }
            {
              let C = te(w, e, ["--border-color", "--color"]);
              if (C) return x.color(C);
            }
            {
              if (w.modifier) return;
              let C = e.resolve(w.value.value, ["--border-width"]);
              if (C) {
                let N = x.width(C);
                return N ? [u(), ...N] : void 0;
              }
              if (V(w.value.value)) {
                let N = x.width(`${w.value.value}px`);
                return N ? [u(), ...N] : void 0;
              }
            }
          }), o(v, () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--border-color", "--color"], modifiers: Array.from({ length: 21 }, (w, C) => `${C * 5}`), hasDefaultValue: true }, { values: ["0", "2", "4", "8"], valueThemeKeys: ["--border-width"] }]);
        };
        var g = a;
        let u = () => I([A("--tw-border-style", "solid")]);
        a("border", { width: (v) => [i("border-style", "var(--tw-border-style)"), i("border-width", v)], color: (v) => [i("border-color", v)] }), a("border-x", { width: (v) => [i("border-inline-style", "var(--tw-border-style)"), i("border-inline-width", v)], color: (v) => [i("border-inline-color", v)] }), a("border-y", { width: (v) => [i("border-block-style", "var(--tw-border-style)"), i("border-block-width", v)], color: (v) => [i("border-block-color", v)] }), a("border-s", { width: (v) => [i("border-inline-start-style", "var(--tw-border-style)"), i("border-inline-start-width", v)], color: (v) => [i("border-inline-start-color", v)] }), a("border-e", { width: (v) => [i("border-inline-end-style", "var(--tw-border-style)"), i("border-inline-end-width", v)], color: (v) => [i("border-inline-end-color", v)] }), a("border-bs", { width: (v) => [i("border-block-start-style", "var(--tw-border-style)"), i("border-block-start-width", v)], color: (v) => [i("border-block-start-color", v)] }), a("border-be", { width: (v) => [i("border-block-end-style", "var(--tw-border-style)"), i("border-block-end-width", v)], color: (v) => [i("border-block-end-color", v)] }), a("border-t", { width: (v) => [i("border-top-style", "var(--tw-border-style)"), i("border-top-width", v)], color: (v) => [i("border-top-color", v)] }), a("border-r", { width: (v) => [i("border-right-style", "var(--tw-border-style)"), i("border-right-width", v)], color: (v) => [i("border-right-color", v)] }), a("border-b", { width: (v) => [i("border-bottom-style", "var(--tw-border-style)"), i("border-bottom-width", v)], color: (v) => [i("border-bottom-color", v)] }), a("border-l", { width: (v) => [i("border-left-style", "var(--tw-border-style)"), i("border-left-width", v)], color: (v) => [i("border-left-color", v)] }), n("divide-x", { defaultValue: e.get(["--default-border-width"]) ?? "1px", themeKeys: ["--divide-width", "--border-width"], handleBareValue: ({ value: v }) => V(v) ? `${v}px` : null, handle: (v) => [I([A("--tw-divide-x-reverse", "0")]), q(":where(& > :not(:last-child))", [i("--tw-sort", "divide-x-width"), u(), i("--tw-divide-x-reverse", "0"), i("border-inline-style", "var(--tw-border-style)"), i("border-inline-start-width", `calc(${v} * var(--tw-divide-x-reverse))`), i("border-inline-end-width", `calc(${v} * calc(1 - var(--tw-divide-x-reverse)))`)])] }), n("divide-y", { defaultValue: e.get(["--default-border-width"]) ?? "1px", themeKeys: ["--divide-width", "--border-width"], handleBareValue: ({ value: v }) => V(v) ? `${v}px` : null, handle: (v) => [I([A("--tw-divide-y-reverse", "0")]), q(":where(& > :not(:last-child))", [i("--tw-sort", "divide-y-width"), u(), i("--tw-divide-y-reverse", "0"), i("border-bottom-style", "var(--tw-border-style)"), i("border-top-style", "var(--tw-border-style)"), i("border-top-width", `calc(${v} * var(--tw-divide-y-reverse))`), i("border-bottom-width", `calc(${v} * calc(1 - var(--tw-divide-y-reverse)))`)])] }), o("divide-x", () => [{ values: ["0", "2", "4", "8"], valueThemeKeys: ["--divide-width", "--border-width"], hasDefaultValue: true }]), o("divide-y", () => [{ values: ["0", "2", "4", "8"], valueThemeKeys: ["--divide-width", "--border-width"], hasDefaultValue: true }]), t("divide-x-reverse", [() => I([A("--tw-divide-x-reverse", "0")]), () => q(":where(& > :not(:last-child))", [i("--tw-divide-x-reverse", "1")])]), t("divide-y-reverse", [() => I([A("--tw-divide-y-reverse", "0")]), () => q(":where(& > :not(:last-child))", [i("--tw-divide-y-reverse", "1")])]);
        for (let v of ["solid", "dashed", "dotted", "double", "none"]) t(`divide-${v}`, [() => q(":where(& > :not(:last-child))", [i("--tw-sort", "divide-style"), i("--tw-border-style", v), i("border-style", v)])]);
      }
      t("bg-auto", [["background-size", "auto"]]), t("bg-cover", [["background-size", "cover"]]), t("bg-contain", [["background-size", "contain"]]), n("bg-size", { handle(a) {
        if (a) return [i("background-size", a)];
      } }), t("bg-fixed", [["background-attachment", "fixed"]]), t("bg-local", [["background-attachment", "local"]]), t("bg-scroll", [["background-attachment", "scroll"]]), t("bg-top", [["background-position", "top"]]), t("bg-top-left", [["background-position", "left top"]]), t("bg-top-right", [["background-position", "right top"]]), t("bg-bottom", [["background-position", "bottom"]]), t("bg-bottom-left", [["background-position", "left bottom"]]), t("bg-bottom-right", [["background-position", "right bottom"]]), t("bg-left", [["background-position", "left"]]), t("bg-right", [["background-position", "right"]]), t("bg-center", [["background-position", "center"]]), n("bg-position", { handle(a) {
        if (a) return [i("background-position", a)];
      } }), t("bg-repeat", [["background-repeat", "repeat"]]), t("bg-no-repeat", [["background-repeat", "no-repeat"]]), t("bg-repeat-x", [["background-repeat", "repeat-x"]]), t("bg-repeat-y", [["background-repeat", "repeat-y"]]), t("bg-repeat-round", [["background-repeat", "round"]]), t("bg-repeat-space", [["background-repeat", "space"]]), t("bg-none", [["background-image", "none"]]);
      {
        let a = function(C) {
          let N = "in oklab";
          if (C?.kind === "named") switch (C.value) {
            case "longer":
            case "shorter":
            case "increasing":
            case "decreasing":
              N = `in oklch ${C.value} hue`;
              break;
            default:
              N = `in ${C.value}`;
          }
          else C?.kind === "arbitrary" && (N = C.value);
          return N;
        }, u = function({ negative: C }) {
          return (N) => {
            if (!N.value) return;
            if (N.value.kind === "arbitrary") {
              if (N.modifier) return;
              let M = N.value.value;
              return (N.value.dataType ?? Z(M, ["angle"])) === "angle" ? (M = C ? `calc(${M} * -1)` : `${M}`, [i("--tw-gradient-position", M), i("background-image", `linear-gradient(var(--tw-gradient-stops,${M}))`)]) : C ? void 0 : [i("--tw-gradient-position", M), i("background-image", `linear-gradient(var(--tw-gradient-stops,${M}))`)];
            }
            let S = N.value.value;
            if (!C && w.has(S)) S = w.get(S);
            else if (V(S)) S = C ? `calc(${S}deg * -1)` : `${S}deg`;
            else return;
            let j = a(N.modifier);
            return [i("--tw-gradient-position", `${S}`), J("@supports (background-image: linear-gradient(in lab, red, red))", [i("--tw-gradient-position", `${S} ${j}`)]), i("background-image", "linear-gradient(var(--tw-gradient-stops))")];
          };
        }, v = function({ negative: C }) {
          return (N) => {
            if (N.value?.kind === "arbitrary") {
              if (N.modifier) return;
              let M = N.value.value;
              return [i("--tw-gradient-position", M), i("background-image", `conic-gradient(var(--tw-gradient-stops,${M}))`)];
            }
            let S = a(N.modifier);
            if (!N.value) return [i("--tw-gradient-position", S), i("background-image", "conic-gradient(var(--tw-gradient-stops))")];
            let j = N.value.value;
            if (V(j)) return j = C ? `calc(${j}deg * -1)` : `${j}deg`, [i("--tw-gradient-position", `from ${j} ${S}`), i("background-image", "conic-gradient(var(--tw-gradient-stops))")];
          };
        };
        var b = a, $ = u, T = v;
        let x = ["oklab", "oklch", "srgb", "hsl", "longer", "shorter", "increasing", "decreasing"], w = /* @__PURE__ */ new Map([["to-t", "to top"], ["to-tr", "to top right"], ["to-r", "to right"], ["to-br", "to bottom right"], ["to-b", "to bottom"], ["to-bl", "to bottom left"], ["to-l", "to left"], ["to-tl", "to top left"]]);
        r.functional("-bg-linear", u({ negative: true })), r.functional("bg-linear", u({ negative: false })), o("bg-linear", () => [{ values: [...w.keys()], modifiers: x }, { values: ["0", "30", "60", "90", "120", "150", "180", "210", "240", "270", "300", "330"], supportsNegative: true, modifiers: x }]), r.functional("-bg-conic", v({ negative: true })), r.functional("bg-conic", v({ negative: false })), o("bg-conic", () => [{ hasDefaultValue: true, modifiers: x }, { values: ["0", "30", "60", "90", "120", "150", "180", "210", "240", "270", "300", "330"], supportsNegative: true, modifiers: x }]), r.functional("bg-radial", (C) => {
          if (!C.value) {
            let N = a(C.modifier);
            return [i("--tw-gradient-position", N), i("background-image", "radial-gradient(var(--tw-gradient-stops))")];
          }
          if (C.value.kind === "arbitrary") {
            if (C.modifier) return;
            let N = C.value.value;
            return [i("--tw-gradient-position", N), i("background-image", `radial-gradient(var(--tw-gradient-stops,${N}))`)];
          }
        }), o("bg-radial", () => [{ hasDefaultValue: true, modifiers: x }]);
      }
      r.functional("bg", (a) => {
        if (a.value) {
          if (a.value.kind === "arbitrary") {
            let u = a.value.value;
            switch (a.value.dataType ?? Z(u, ["image", "color", "percentage", "position", "bg-size", "length", "url"])) {
              case "percentage":
              case "position":
                return a.modifier ? void 0 : [i("background-position", u)];
              case "bg-size":
              case "length":
              case "size":
                return a.modifier ? void 0 : [i("background-size", u)];
              case "image":
              case "url":
                return a.modifier ? void 0 : [i("background-image", u)];
              default:
                return u = X(u, a.modifier, e), u === null ? void 0 : [i("background-color", u)];
            }
          }
          {
            let u = te(a, e, ["--background-color", "--color"]);
            if (u) return [i("background-color", u)];
          }
          {
            if (a.modifier) return;
            let u = e.resolve(a.value.value, ["--background-image"]);
            if (u) return [i("background-image", u)];
          }
        }
      }), o("bg", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--background-color", "--color"], modifiers: Array.from({ length: 21 }, (a, u) => `${u * 5}`) }, { values: [], valueThemeKeys: ["--background-image"] }]);
      let z = () => I([A("--tw-gradient-position"), A("--tw-gradient-from", "#0000", "<color>"), A("--tw-gradient-via", "#0000", "<color>"), A("--tw-gradient-to", "#0000", "<color>"), A("--tw-gradient-stops"), A("--tw-gradient-via-stops"), A("--tw-gradient-from-position", "0%", "<length-percentage>"), A("--tw-gradient-via-position", "50%", "<length-percentage>"), A("--tw-gradient-to-position", "100%", "<length-percentage>")]);
      function y(a, u) {
        r.functional(a, (v) => {
          if (v.value) {
            if (v.value.kind === "arbitrary") {
              let x = v.value.value;
              switch (v.value.dataType ?? Z(x, ["color", "length", "percentage"])) {
                case "length":
                case "percentage":
                  return v.modifier ? void 0 : u.position(x);
                default:
                  return x = X(x, v.modifier, e), x === null ? void 0 : u.color(x);
              }
            }
            {
              let x = te(v, e, ["--background-color", "--color"]);
              if (x) return u.color(x);
            }
            {
              if (v.modifier) return;
              let x = e.resolve(v.value.value, ["--gradient-color-stop-positions"]);
              if (x) return u.position(x);
              if (v.value.value[v.value.value.length - 1] === "%" && V(v.value.value.slice(0, -1))) return u.position(v.value.value);
            }
          }
        }), o(a, () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--background-color", "--color"], modifiers: Array.from({ length: 21 }, (v, x) => `${x * 5}`) }, { values: Array.from({ length: 21 }, (v, x) => `${x * 5}%`), valueThemeKeys: ["--gradient-color-stop-positions"] }]);
      }
      y("from", { color: (a) => [z(), i("--tw-sort", "--tw-gradient-from"), i("--tw-gradient-from", a), i("--tw-gradient-stops", "var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))")], position: (a) => [z(), i("--tw-gradient-from-position", a)] }), t("via-none", [["--tw-gradient-via-stops", "initial"]]), y("via", { color: (a) => [z(), i("--tw-sort", "--tw-gradient-via"), i("--tw-gradient-via", a), i("--tw-gradient-via-stops", "var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position)"), i("--tw-gradient-stops", "var(--tw-gradient-via-stops)")], position: (a) => [z(), i("--tw-gradient-via-position", a)] }), y("to", { color: (a) => [z(), i("--tw-sort", "--tw-gradient-to"), i("--tw-gradient-to", a), i("--tw-gradient-stops", "var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))")], position: (a) => [z(), i("--tw-gradient-to-position", a)] }), t("mask-none", [["mask-image", "none"]]), r.functional("mask", (a) => {
        if (!a.value || a.modifier || a.value.kind !== "arbitrary") return;
        let u = a.value.value;
        switch (a.value.dataType ?? Z(u, ["image", "percentage", "position", "bg-size", "length", "url"])) {
          case "percentage":
          case "position":
            return a.modifier ? void 0 : [i("mask-position", u)];
          case "bg-size":
          case "length":
          case "size":
            return [i("mask-size", u)];
          default:
            return [i("mask-image", u)];
        }
      }), t("mask-add", [["mask-composite", "add"]]), t("mask-subtract", [["mask-composite", "subtract"]]), t("mask-intersect", [["mask-composite", "intersect"]]), t("mask-exclude", [["mask-composite", "exclude"]]), t("mask-alpha", [["mask-mode", "alpha"]]), t("mask-luminance", [["mask-mode", "luminance"]]), t("mask-match", [["mask-mode", "match-source"]]), t("mask-type-alpha", [["mask-type", "alpha"]]), t("mask-type-luminance", [["mask-type", "luminance"]]), t("mask-auto", [["mask-size", "auto"]]), t("mask-cover", [["mask-size", "cover"]]), t("mask-contain", [["mask-size", "contain"]]), n("mask-size", { handle(a) {
        if (a) return [i("mask-size", a)];
      } }), t("mask-top", [["mask-position", "top"]]), t("mask-top-left", [["mask-position", "left top"]]), t("mask-top-right", [["mask-position", "right top"]]), t("mask-bottom", [["mask-position", "bottom"]]), t("mask-bottom-left", [["mask-position", "left bottom"]]), t("mask-bottom-right", [["mask-position", "right bottom"]]), t("mask-left", [["mask-position", "left"]]), t("mask-right", [["mask-position", "right"]]), t("mask-center", [["mask-position", "center"]]), n("mask-position", { handle(a) {
        if (a) return [i("mask-position", a)];
      } }), t("mask-repeat", [["mask-repeat", "repeat"]]), t("mask-no-repeat", [["mask-repeat", "no-repeat"]]), t("mask-repeat-x", [["mask-repeat", "repeat-x"]]), t("mask-repeat-y", [["mask-repeat", "repeat-y"]]), t("mask-repeat-round", [["mask-repeat", "round"]]), t("mask-repeat-space", [["mask-repeat", "space"]]), t("mask-clip-border", [["mask-clip", "border-box"]]), t("mask-clip-padding", [["mask-clip", "padding-box"]]), t("mask-clip-content", [["mask-clip", "content-box"]]), t("mask-clip-fill", [["mask-clip", "fill-box"]]), t("mask-clip-stroke", [["mask-clip", "stroke-box"]]), t("mask-clip-view", [["mask-clip", "view-box"]]), t("mask-no-clip", [["mask-clip", "no-clip"]]), t("mask-origin-border", [["mask-origin", "border-box"]]), t("mask-origin-padding", [["mask-origin", "padding-box"]]), t("mask-origin-content", [["mask-origin", "content-box"]]), t("mask-origin-fill", [["mask-origin", "fill-box"]]), t("mask-origin-stroke", [["mask-origin", "stroke-box"]]), t("mask-origin-view", [["mask-origin", "view-box"]]);
      let U = () => I([A("--tw-mask-linear", "linear-gradient(#fff, #fff)"), A("--tw-mask-radial", "linear-gradient(#fff, #fff)"), A("--tw-mask-conic", "linear-gradient(#fff, #fff)")]);
      function F(a, u) {
        r.functional(a, (v) => {
          if (v.value) {
            if (v.value.kind === "arbitrary") {
              let x = v.value.value;
              switch (v.value.dataType ?? Z(x, ["length", "percentage", "color"])) {
                case "color":
                  return x = X(x, v.modifier, e), x === null ? void 0 : u.color(x);
                case "percentage":
                  return v.modifier || !V(x.slice(0, -1)) ? void 0 : u.position(x);
                default:
                  return v.modifier ? void 0 : u.position(x);
              }
            }
            {
              let x = te(v, e, ["--background-color", "--color"]);
              if (x) return u.color(x);
            }
            {
              if (v.modifier) return;
              let x = Z(v.value.value, ["number", "percentage"]);
              if (!x) return;
              switch (x) {
                case "number":
                  return !e.resolve(null, ["--spacing"]) || !pe(v.value.value) ? void 0 : u.position(`--spacing(${v.value.value})`);
                case "percentage":
                  return V(v.value.value.slice(0, -1)) ? u.position(v.value.value) : void 0;
                default:
                  return;
              }
            }
          }
        }), o(a, () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--background-color", "--color"], modifiers: Array.from({ length: 21 }, (v, x) => `${x * 5}`) }, { values: Array.from({ length: 21 }, (v, x) => `${x * 5}%`), valueThemeKeys: ["--gradient-color-stop-positions"] }]), o(a, () => [{ values: Array.from({ length: 21 }, (v, x) => `${x * 5}%`) }, { values: e.get(["--spacing"]) ? He : [] }, { values: ["current", "inherit", "transparent"], valueThemeKeys: ["--background-color", "--color"], modifiers: Array.from({ length: 21 }, (v, x) => `${x * 5}`) }]);
      }
      let W = () => I([A("--tw-mask-left", "linear-gradient(#fff, #fff)"), A("--tw-mask-right", "linear-gradient(#fff, #fff)"), A("--tw-mask-bottom", "linear-gradient(#fff, #fff)"), A("--tw-mask-top", "linear-gradient(#fff, #fff)")]);
      function E(a, u, v) {
        F(a, { color(x) {
          let w = [U(), W(), i("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), i("mask-composite", "intersect"), i("--tw-mask-linear", "var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top)")];
          for (let C of ["top", "right", "bottom", "left"]) v[C] && (w.push(i(`--tw-mask-${C}`, `linear-gradient(to ${C}, var(--tw-mask-${C}-from-color) var(--tw-mask-${C}-from-position), var(--tw-mask-${C}-to-color) var(--tw-mask-${C}-to-position))`)), w.push(I([A(`--tw-mask-${C}-from-position`, "0%"), A(`--tw-mask-${C}-to-position`, "100%"), A(`--tw-mask-${C}-from-color`, "black"), A(`--tw-mask-${C}-to-color`, "transparent")])), w.push(i(`--tw-mask-${C}-${u}-color`, x)));
          return w;
        }, position(x) {
          let w = [U(), W(), i("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), i("mask-composite", "intersect"), i("--tw-mask-linear", "var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top)")];
          for (let C of ["top", "right", "bottom", "left"]) v[C] && (w.push(i(`--tw-mask-${C}`, `linear-gradient(to ${C}, var(--tw-mask-${C}-from-color) var(--tw-mask-${C}-from-position), var(--tw-mask-${C}-to-color) var(--tw-mask-${C}-to-position))`)), w.push(I([A(`--tw-mask-${C}-from-position`, "0%"), A(`--tw-mask-${C}-to-position`, "100%"), A(`--tw-mask-${C}-from-color`, "black"), A(`--tw-mask-${C}-to-color`, "transparent")])), w.push(i(`--tw-mask-${C}-${u}-position`, x)));
          return w;
        } });
      }
      E("mask-x-from", "from", { top: false, right: true, bottom: false, left: true }), E("mask-x-to", "to", { top: false, right: true, bottom: false, left: true }), E("mask-y-from", "from", { top: true, right: false, bottom: true, left: false }), E("mask-y-to", "to", { top: true, right: false, bottom: true, left: false }), E("mask-t-from", "from", { top: true, right: false, bottom: false, left: false }), E("mask-t-to", "to", { top: true, right: false, bottom: false, left: false }), E("mask-r-from", "from", { top: false, right: true, bottom: false, left: false }), E("mask-r-to", "to", { top: false, right: true, bottom: false, left: false }), E("mask-b-from", "from", { top: false, right: false, bottom: true, left: false }), E("mask-b-to", "to", { top: false, right: false, bottom: true, left: false }), E("mask-l-from", "from", { top: false, right: false, bottom: false, left: true }), E("mask-l-to", "to", { top: false, right: false, bottom: false, left: true });
      let K = () => I([A("--tw-mask-linear-position", "0deg"), A("--tw-mask-linear-from-position", "0%"), A("--tw-mask-linear-to-position", "100%"), A("--tw-mask-linear-from-color", "black"), A("--tw-mask-linear-to-color", "transparent")]);
      n("mask-linear", { defaultValue: null, supportsNegative: true, supportsFractions: false, handleBareValue({ value: a }) {
        if (!V(a)) return null;
        let u = Number(a);
        return u === 0 ? "0deg" : u === 1 ? "1deg" : `calc(1deg * ${a})`;
      }, handleNegativeBareValue({ value: a }) {
        if (!V(a)) return null;
        let u = Number(a);
        return u === 0 ? "0deg" : u === 1 ? "-1deg" : `calc(1deg * -${a})`;
      }, handle: (a) => [U(), K(), i("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), i("mask-composite", "intersect"), i("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops, var(--tw-mask-linear-position)))"), i("--tw-mask-linear-position", a)] }), o("mask-linear", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12", "45", "90", "180"] }]), F("mask-linear-from", { color: (a) => [U(), K(), i("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), i("mask-composite", "intersect"), i("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"), i("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"), i("--tw-mask-linear-from-color", a)], position: (a) => [U(), K(), i("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), i("mask-composite", "intersect"), i("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"), i("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"), i("--tw-mask-linear-from-position", a)] }), F("mask-linear-to", { color: (a) => [U(), K(), i("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), i("mask-composite", "intersect"), i("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"), i("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"), i("--tw-mask-linear-to-color", a)], position: (a) => [U(), K(), i("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), i("mask-composite", "intersect"), i("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"), i("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"), i("--tw-mask-linear-to-position", a)] });
      let L = () => I([A("--tw-mask-radial-from-position", "0%"), A("--tw-mask-radial-to-position", "100%"), A("--tw-mask-radial-from-color", "black"), A("--tw-mask-radial-to-color", "transparent"), A("--tw-mask-radial-shape", "ellipse"), A("--tw-mask-radial-size", "farthest-corner"), A("--tw-mask-radial-position", "center")]);
      t("mask-circle", [["--tw-mask-radial-shape", "circle"]]), t("mask-ellipse", [["--tw-mask-radial-shape", "ellipse"]]), t("mask-radial-closest-side", [["--tw-mask-radial-size", "closest-side"]]), t("mask-radial-farthest-side", [["--tw-mask-radial-size", "farthest-side"]]), t("mask-radial-closest-corner", [["--tw-mask-radial-size", "closest-corner"]]), t("mask-radial-farthest-corner", [["--tw-mask-radial-size", "farthest-corner"]]), t("mask-radial-at-top", [["--tw-mask-radial-position", "top"]]), t("mask-radial-at-top-left", [["--tw-mask-radial-position", "top left"]]), t("mask-radial-at-top-right", [["--tw-mask-radial-position", "top right"]]), t("mask-radial-at-bottom", [["--tw-mask-radial-position", "bottom"]]), t("mask-radial-at-bottom-left", [["--tw-mask-radial-position", "bottom left"]]), t("mask-radial-at-bottom-right", [["--tw-mask-radial-position", "bottom right"]]), t("mask-radial-at-left", [["--tw-mask-radial-position", "left"]]), t("mask-radial-at-right", [["--tw-mask-radial-position", "right"]]), t("mask-radial-at-center", [["--tw-mask-radial-position", "center"]]), n("mask-radial-at", { defaultValue: null, supportsNegative: false, supportsFractions: false, handle: (a) => [i("--tw-mask-radial-position", a)] }), n("mask-radial", { defaultValue: null, supportsNegative: false, supportsFractions: false, handle: (a) => [U(), L(), i("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), i("mask-composite", "intersect"), i("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops, var(--tw-mask-radial-size)))"), i("--tw-mask-radial-size", a)] }), F("mask-radial-from", { color: (a) => [U(), L(), i("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), i("mask-composite", "intersect"), i("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"), i("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"), i("--tw-mask-radial-from-color", a)], position: (a) => [U(), L(), i("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), i("mask-composite", "intersect"), i("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"), i("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"), i("--tw-mask-radial-from-position", a)] }), F("mask-radial-to", { color: (a) => [U(), L(), i("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), i("mask-composite", "intersect"), i("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"), i("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"), i("--tw-mask-radial-to-color", a)], position: (a) => [U(), L(), i("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), i("mask-composite", "intersect"), i("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"), i("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"), i("--tw-mask-radial-to-position", a)] });
      let B = () => I([A("--tw-mask-conic-position", "0deg"), A("--tw-mask-conic-from-position", "0%"), A("--tw-mask-conic-to-position", "100%"), A("--tw-mask-conic-from-color", "black"), A("--tw-mask-conic-to-color", "transparent")]);
      n("mask-conic", { defaultValue: null, supportsNegative: true, supportsFractions: false, handleBareValue({ value: a }) {
        if (!V(a)) return null;
        let u = Number(a);
        return u === 0 ? "0deg" : u === 1 ? "1deg" : `calc(1deg * ${a})`;
      }, handleNegativeBareValue({ value: a }) {
        if (!V(a)) return null;
        let u = Number(a);
        return u === 0 ? "0deg" : u === 1 ? "-1deg" : `calc(1deg * -${a})`;
      }, handle: (a) => [U(), B(), i("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), i("mask-composite", "intersect"), i("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops, var(--tw-mask-conic-position)))"), i("--tw-mask-conic-position", a)] }), o("mask-conic", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12", "45", "90", "180"] }]), F("mask-conic-from", { color: (a) => [U(), B(), i("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), i("mask-composite", "intersect"), i("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"), i("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"), i("--tw-mask-conic-from-color", a)], position: (a) => [U(), B(), i("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), i("mask-composite", "intersect"), i("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"), i("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"), i("--tw-mask-conic-from-position", a)] }), F("mask-conic-to", { color: (a) => [U(), B(), i("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), i("mask-composite", "intersect"), i("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"), i("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"), i("--tw-mask-conic-to-color", a)], position: (a) => [U(), B(), i("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), i("mask-composite", "intersect"), i("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"), i("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"), i("--tw-mask-conic-to-position", a)] }), t("box-decoration-slice", [["-webkit-box-decoration-break", "slice"], ["box-decoration-break", "slice"]]), t("box-decoration-clone", [["-webkit-box-decoration-break", "clone"], ["box-decoration-break", "clone"]]), t("bg-clip-text", [["background-clip", "text"]]), t("bg-clip-border", [["background-clip", "border-box"]]), t("bg-clip-padding", [["background-clip", "padding-box"]]), t("bg-clip-content", [["background-clip", "content-box"]]), t("bg-origin-border", [["background-origin", "border-box"]]), t("bg-origin-padding", [["background-origin", "padding-box"]]), t("bg-origin-content", [["background-origin", "content-box"]]);
      for (let a of ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]) t(`bg-blend-${a}`, [["background-blend-mode", a]]), t(`mix-blend-${a}`, [["mix-blend-mode", a]]);
      t("mix-blend-plus-darker", [["mix-blend-mode", "plus-darker"]]), t("mix-blend-plus-lighter", [["mix-blend-mode", "plus-lighter"]]), t("fill-none", [["fill", "none"]]), r.functional("fill", (a) => {
        if (!a.value) return;
        if (a.value.kind === "arbitrary") {
          let v = X(a.value.value, a.modifier, e);
          return v === null ? void 0 : [i("fill", v)];
        }
        let u = te(a, e, ["--fill", "--color"]);
        if (u) return [i("fill", u)];
      }), o("fill", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--fill", "--color"], modifiers: Array.from({ length: 21 }, (a, u) => `${u * 5}`) }]), t("stroke-none", [["stroke", "none"]]), r.functional("stroke", (a) => {
        if (a.value) {
          if (a.value.kind === "arbitrary") {
            let u = a.value.value;
            switch (a.value.dataType ?? Z(u, ["color", "number", "length", "percentage"])) {
              case "number":
              case "length":
              case "percentage":
                return a.modifier ? void 0 : [i("stroke-width", u)];
              default:
                return u = X(a.value.value, a.modifier, e), u === null ? void 0 : [i("stroke", u)];
            }
          }
          {
            let u = te(a, e, ["--stroke", "--color"]);
            if (u) return [i("stroke", u)];
          }
          {
            let u = e.resolve(a.value.value, ["--stroke-width"]);
            if (u) return [i("stroke-width", u)];
            if (V(a.value.value)) return [i("stroke-width", a.value.value)];
          }
        }
      }), o("stroke", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--stroke", "--color"], modifiers: Array.from({ length: 21 }, (a, u) => `${u * 5}`) }, { values: ["0", "1", "2", "3"], valueThemeKeys: ["--stroke-width"] }]), t("object-contain", [["object-fit", "contain"]]), t("object-cover", [["object-fit", "cover"]]), t("object-fill", [["object-fit", "fill"]]), t("object-none", [["object-fit", "none"]]), t("object-scale-down", [["object-fit", "scale-down"]]), n("object", { themeKeys: ["--object-position"], handle: (a) => [i("object-position", a)], staticValues: { top: [i("object-position", "top")], "top-left": [i("object-position", "left top")], "top-right": [i("object-position", "right top")], bottom: [i("object-position", "bottom")], "bottom-left": [i("object-position", "left bottom")], "bottom-right": [i("object-position", "right bottom")], left: [i("object-position", "left")], right: [i("object-position", "right")], center: [i("object-position", "center")] } });
      for (let [a, u] of [["p", "padding"], ["px", "padding-inline"], ["py", "padding-block"], ["ps", "padding-inline-start"], ["pe", "padding-inline-end"], ["pbs", "padding-block-start"], ["pbe", "padding-block-end"], ["pt", "padding-top"], ["pr", "padding-right"], ["pb", "padding-bottom"], ["pl", "padding-left"]]) l(a, ["--padding", "--spacing"], (v) => [i(u, v)]);
      t("text-left", [["text-align", "left"]]), t("text-center", [["text-align", "center"]]), t("text-right", [["text-align", "right"]]), t("text-justify", [["text-align", "justify"]]), t("text-start", [["text-align", "start"]]), t("text-end", [["text-align", "end"]]), l("indent", ["--text-indent", "--spacing"], (a) => [i("text-indent", a)], { supportsNegative: true }), t("align-baseline", [["vertical-align", "baseline"]]), t("align-top", [["vertical-align", "top"]]), t("align-middle", [["vertical-align", "middle"]]), t("align-bottom", [["vertical-align", "bottom"]]), t("align-text-top", [["vertical-align", "text-top"]]), t("align-text-bottom", [["vertical-align", "text-bottom"]]), t("align-sub", [["vertical-align", "sub"]]), t("align-super", [["vertical-align", "super"]]), n("align", { themeKeys: [], handle: (a) => [i("vertical-align", a)] }), r.functional("font", (a) => {
        if (!(!a.value || a.modifier)) {
          if (a.value.kind === "arbitrary") {
            let u = a.value.value;
            switch (a.value.dataType ?? Z(u, ["number", "generic-name", "family-name"])) {
              case "generic-name":
              case "family-name":
                return [i("font-family", u)];
              default:
                return [I([A("--tw-font-weight")]), i("--tw-font-weight", u), i("font-weight", u)];
            }
          }
          {
            let u = e.resolveWith(a.value.value, ["--font"], ["--font-feature-settings", "--font-variation-settings"]);
            if (u) {
              let [v, x = {}] = u;
              return [i("font-family", v), i("font-feature-settings", x["--font-feature-settings"]), i("font-variation-settings", x["--font-variation-settings"])];
            }
          }
          {
            let u = e.resolve(a.value.value, ["--font-weight"]);
            if (u) return [I([A("--tw-font-weight")]), i("--tw-font-weight", u), i("font-weight", u)];
          }
        }
      }), o("font", () => [{ values: [], valueThemeKeys: ["--font"] }, { values: [], valueThemeKeys: ["--font-weight"] }]), n("font-features", { themeKeys: [], handle: (a) => [i("font-feature-settings", a)] }), t("uppercase", [["text-transform", "uppercase"]]), t("lowercase", [["text-transform", "lowercase"]]), t("capitalize", [["text-transform", "capitalize"]]), t("normal-case", [["text-transform", "none"]]), t("italic", [["font-style", "italic"]]), t("not-italic", [["font-style", "normal"]]), t("underline", [["text-decoration-line", "underline"]]), t("overline", [["text-decoration-line", "overline"]]), t("line-through", [["text-decoration-line", "line-through"]]), t("no-underline", [["text-decoration-line", "none"]]), t("font-stretch-normal", [["font-stretch", "normal"]]), t("font-stretch-ultra-condensed", [["font-stretch", "ultra-condensed"]]), t("font-stretch-extra-condensed", [["font-stretch", "extra-condensed"]]), t("font-stretch-condensed", [["font-stretch", "condensed"]]), t("font-stretch-semi-condensed", [["font-stretch", "semi-condensed"]]), t("font-stretch-semi-expanded", [["font-stretch", "semi-expanded"]]), t("font-stretch-expanded", [["font-stretch", "expanded"]]), t("font-stretch-extra-expanded", [["font-stretch", "extra-expanded"]]), t("font-stretch-ultra-expanded", [["font-stretch", "ultra-expanded"]]), n("font-stretch", { handleBareValue: ({ value: a }) => {
        if (!a.endsWith("%")) return null;
        let u = Number(a.slice(0, -1));
        return !V(u) || Number.isNaN(u) || u < 50 || u > 200 ? null : a;
      }, handle: (a) => [i("font-stretch", a)] }), o("font-stretch", () => [{ values: ["50%", "75%", "90%", "95%", "100%", "105%", "110%", "125%", "150%", "200%"] }]), s("placeholder", { themeKeys: ["--placeholder-color", "--color"], handle: (a) => [q("&::placeholder", [i("--tw-sort", "placeholder-color"), i("color", a)])] }), t("decoration-solid", [["text-decoration-style", "solid"]]), t("decoration-double", [["text-decoration-style", "double"]]), t("decoration-dotted", [["text-decoration-style", "dotted"]]), t("decoration-dashed", [["text-decoration-style", "dashed"]]), t("decoration-wavy", [["text-decoration-style", "wavy"]]), t("decoration-auto", [["text-decoration-thickness", "auto"]]), t("decoration-from-font", [["text-decoration-thickness", "from-font"]]), r.functional("decoration", (a) => {
        if (a.value) {
          if (a.value.kind === "arbitrary") {
            let u = a.value.value;
            switch (a.value.dataType ?? Z(u, ["color", "length", "percentage"])) {
              case "length":
              case "percentage":
                return a.modifier ? void 0 : [i("text-decoration-thickness", u)];
              default:
                return u = X(u, a.modifier, e), u === null ? void 0 : [i("text-decoration-color", u)];
            }
          }
          {
            let u = e.resolve(a.value.value, ["--text-decoration-thickness"]);
            if (u) return a.modifier ? void 0 : [i("text-decoration-thickness", u)];
            if (V(a.value.value)) return a.modifier ? void 0 : [i("text-decoration-thickness", `${a.value.value}px`)];
          }
          {
            let u = te(a, e, ["--text-decoration-color", "--color"]);
            if (u) return [i("text-decoration-color", u)];
          }
        }
      }), o("decoration", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--text-decoration-color", "--color"], modifiers: Array.from({ length: 21 }, (a, u) => `${u * 5}`) }, { values: ["0", "1", "2"], valueThemeKeys: ["--text-decoration-thickness"] }]), n("animate", { themeKeys: ["--animate"], handle: (a) => [i("animation", a)], staticValues: { none: [i("animation", "none")] } });
      {
        let a = ["var(--tw-blur,)", "var(--tw-brightness,)", "var(--tw-contrast,)", "var(--tw-grayscale,)", "var(--tw-hue-rotate,)", "var(--tw-invert,)", "var(--tw-saturate,)", "var(--tw-sepia,)", "var(--tw-drop-shadow,)"].join(" "), u = ["var(--tw-backdrop-blur,)", "var(--tw-backdrop-brightness,)", "var(--tw-backdrop-contrast,)", "var(--tw-backdrop-grayscale,)", "var(--tw-backdrop-hue-rotate,)", "var(--tw-backdrop-invert,)", "var(--tw-backdrop-opacity,)", "var(--tw-backdrop-saturate,)", "var(--tw-backdrop-sepia,)"].join(" "), v = () => I([A("--tw-blur"), A("--tw-brightness"), A("--tw-contrast"), A("--tw-grayscale"), A("--tw-hue-rotate"), A("--tw-invert"), A("--tw-opacity"), A("--tw-saturate"), A("--tw-sepia"), A("--tw-drop-shadow"), A("--tw-drop-shadow-color"), A("--tw-drop-shadow-alpha", "100%", "<percentage>"), A("--tw-drop-shadow-size")]), x = () => I([A("--tw-backdrop-blur"), A("--tw-backdrop-brightness"), A("--tw-backdrop-contrast"), A("--tw-backdrop-grayscale"), A("--tw-backdrop-hue-rotate"), A("--tw-backdrop-invert"), A("--tw-backdrop-opacity"), A("--tw-backdrop-saturate"), A("--tw-backdrop-sepia")]);
        r.functional("filter", (w) => {
          if (!w.modifier) {
            if (w.value === null) return [v(), i("filter", a)];
            if (w.value.kind === "arbitrary") return [i("filter", w.value.value)];
            if (w.value.value === "none") return [i("filter", "none")];
          }
        }), r.functional("backdrop-filter", (w) => {
          if (!w.modifier) {
            if (w.value === null) return [x(), i("-webkit-backdrop-filter", u), i("backdrop-filter", u)];
            if (w.value.kind === "arbitrary") return [i("-webkit-backdrop-filter", w.value.value), i("backdrop-filter", w.value.value)];
            if (w.value.value === "none") return [i("-webkit-backdrop-filter", "none"), i("backdrop-filter", "none")];
          }
        }), n("blur", { themeKeys: ["--blur"], handle: (w) => [v(), i("--tw-blur", `blur(${w})`), i("filter", a)], staticValues: { none: [v(), i("--tw-blur", " "), i("filter", a)] } }), n("backdrop-blur", { themeKeys: ["--backdrop-blur", "--blur"], handle: (w) => [x(), i("--tw-backdrop-blur", `blur(${w})`), i("-webkit-backdrop-filter", u), i("backdrop-filter", u)], staticValues: { none: [x(), i("--tw-backdrop-blur", " "), i("-webkit-backdrop-filter", u), i("backdrop-filter", u)] } }), n("brightness", { themeKeys: ["--brightness"], handleBareValue: ({ value: w }) => V(w) ? `${w}%` : null, handle: (w) => [v(), i("--tw-brightness", `brightness(${w})`), i("filter", a)] }), n("backdrop-brightness", { themeKeys: ["--backdrop-brightness", "--brightness"], handleBareValue: ({ value: w }) => V(w) ? `${w}%` : null, handle: (w) => [x(), i("--tw-backdrop-brightness", `brightness(${w})`), i("-webkit-backdrop-filter", u), i("backdrop-filter", u)] }), o("brightness", () => [{ values: ["0", "50", "75", "90", "95", "100", "105", "110", "125", "150", "200"], valueThemeKeys: ["--brightness"] }]), o("backdrop-brightness", () => [{ values: ["0", "50", "75", "90", "95", "100", "105", "110", "125", "150", "200"], valueThemeKeys: ["--backdrop-brightness", "--brightness"] }]), n("contrast", { themeKeys: ["--contrast"], handleBareValue: ({ value: w }) => V(w) ? `${w}%` : null, handle: (w) => [v(), i("--tw-contrast", `contrast(${w})`), i("filter", a)] }), n("backdrop-contrast", { themeKeys: ["--backdrop-contrast", "--contrast"], handleBareValue: ({ value: w }) => V(w) ? `${w}%` : null, handle: (w) => [x(), i("--tw-backdrop-contrast", `contrast(${w})`), i("-webkit-backdrop-filter", u), i("backdrop-filter", u)] }), o("contrast", () => [{ values: ["0", "50", "75", "100", "125", "150", "200"], valueThemeKeys: ["--contrast"] }]), o("backdrop-contrast", () => [{ values: ["0", "50", "75", "100", "125", "150", "200"], valueThemeKeys: ["--backdrop-contrast", "--contrast"] }]), n("grayscale", { themeKeys: ["--grayscale"], handleBareValue: ({ value: w }) => V(w) ? `${w}%` : null, defaultValue: "100%", handle: (w) => [v(), i("--tw-grayscale", `grayscale(${w})`), i("filter", a)] }), n("backdrop-grayscale", { themeKeys: ["--backdrop-grayscale", "--grayscale"], handleBareValue: ({ value: w }) => V(w) ? `${w}%` : null, defaultValue: "100%", handle: (w) => [x(), i("--tw-backdrop-grayscale", `grayscale(${w})`), i("-webkit-backdrop-filter", u), i("backdrop-filter", u)] }), o("grayscale", () => [{ values: ["0", "25", "50", "75", "100"], valueThemeKeys: ["--grayscale"], hasDefaultValue: true }]), o("backdrop-grayscale", () => [{ values: ["0", "25", "50", "75", "100"], valueThemeKeys: ["--backdrop-grayscale", "--grayscale"], hasDefaultValue: true }]), n("hue-rotate", { supportsNegative: true, themeKeys: ["--hue-rotate"], handleBareValue: ({ value: w }) => V(w) ? `${w}deg` : null, handle: (w) => [v(), i("--tw-hue-rotate", `hue-rotate(${w})`), i("filter", a)] }), n("backdrop-hue-rotate", { supportsNegative: true, themeKeys: ["--backdrop-hue-rotate", "--hue-rotate"], handleBareValue: ({ value: w }) => V(w) ? `${w}deg` : null, handle: (w) => [x(), i("--tw-backdrop-hue-rotate", `hue-rotate(${w})`), i("-webkit-backdrop-filter", u), i("backdrop-filter", u)] }), o("hue-rotate", () => [{ values: ["0", "15", "30", "60", "90", "180"], valueThemeKeys: ["--hue-rotate"] }]), o("backdrop-hue-rotate", () => [{ values: ["0", "15", "30", "60", "90", "180"], valueThemeKeys: ["--backdrop-hue-rotate", "--hue-rotate"] }]), n("invert", { themeKeys: ["--invert"], handleBareValue: ({ value: w }) => V(w) ? `${w}%` : null, defaultValue: "100%", handle: (w) => [v(), i("--tw-invert", `invert(${w})`), i("filter", a)] }), n("backdrop-invert", { themeKeys: ["--backdrop-invert", "--invert"], handleBareValue: ({ value: w }) => V(w) ? `${w}%` : null, defaultValue: "100%", handle: (w) => [x(), i("--tw-backdrop-invert", `invert(${w})`), i("-webkit-backdrop-filter", u), i("backdrop-filter", u)] }), o("invert", () => [{ values: ["0", "25", "50", "75", "100"], valueThemeKeys: ["--invert"], hasDefaultValue: true }]), o("backdrop-invert", () => [{ values: ["0", "25", "50", "75", "100"], valueThemeKeys: ["--backdrop-invert", "--invert"], hasDefaultValue: true }]), n("saturate", { themeKeys: ["--saturate"], handleBareValue: ({ value: w }) => V(w) ? `${w}%` : null, handle: (w) => [v(), i("--tw-saturate", `saturate(${w})`), i("filter", a)] }), n("backdrop-saturate", { themeKeys: ["--backdrop-saturate", "--saturate"], handleBareValue: ({ value: w }) => V(w) ? `${w}%` : null, handle: (w) => [x(), i("--tw-backdrop-saturate", `saturate(${w})`), i("-webkit-backdrop-filter", u), i("backdrop-filter", u)] }), o("saturate", () => [{ values: ["0", "50", "100", "150", "200"], valueThemeKeys: ["--saturate"] }]), o("backdrop-saturate", () => [{ values: ["0", "50", "100", "150", "200"], valueThemeKeys: ["--backdrop-saturate", "--saturate"] }]), n("sepia", { themeKeys: ["--sepia"], handleBareValue: ({ value: w }) => V(w) ? `${w}%` : null, defaultValue: "100%", handle: (w) => [v(), i("--tw-sepia", `sepia(${w})`), i("filter", a)] }), n("backdrop-sepia", { themeKeys: ["--backdrop-sepia", "--sepia"], handleBareValue: ({ value: w }) => V(w) ? `${w}%` : null, defaultValue: "100%", handle: (w) => [x(), i("--tw-backdrop-sepia", `sepia(${w})`), i("-webkit-backdrop-filter", u), i("backdrop-filter", u)] }), o("sepia", () => [{ values: ["0", "50", "100"], valueThemeKeys: ["--sepia"], hasDefaultValue: true }]), o("backdrop-sepia", () => [{ values: ["0", "50", "100"], valueThemeKeys: ["--backdrop-sepia", "--sepia"], hasDefaultValue: true }]), t("drop-shadow-none", [v, ["--tw-drop-shadow", " "], ["filter", a]]), r.functional("drop-shadow", (w) => {
          let C;
          if (w.modifier && (w.modifier.kind === "arbitrary" ? C = w.modifier.value : V(w.modifier.value) && (C = `${w.modifier.value}%`)), !w.value) {
            let N = e.get(["--drop-shadow"]), S = e.resolve(null, ["--drop-shadow"]);
            return N === null || S === null ? void 0 : [v(), i("--tw-drop-shadow-alpha", C), ...Ye("--tw-drop-shadow-size", N, C, (j) => `var(--tw-drop-shadow-color, ${j})`), i("--tw-drop-shadow", _(S, ",").map((j) => `drop-shadow(${j})`).join(" ")), i("filter", a)];
          }
          if (w.value.kind === "arbitrary") {
            let N = w.value.value;
            return (w.value.dataType ?? Z(N, ["color"])) === "color" ? (N = X(N, w.modifier, e), N === null ? void 0 : [v(), i("--tw-drop-shadow-color", ee(N, "var(--tw-drop-shadow-alpha)")), i("--tw-drop-shadow", "var(--tw-drop-shadow-size)")]) : w.modifier && !C ? void 0 : [v(), i("--tw-drop-shadow-alpha", C), ...Ye("--tw-drop-shadow-size", N, C, (S) => `var(--tw-drop-shadow-color, ${S})`), i("--tw-drop-shadow", "var(--tw-drop-shadow-size)"), i("filter", a)];
          }
          {
            let N = e.get([`--drop-shadow-${w.value.value}`]), S = e.resolve(w.value.value, ["--drop-shadow"]);
            if (N && S) return w.modifier && !C ? void 0 : C ? [v(), i("--tw-drop-shadow-alpha", C), ...Ye("--tw-drop-shadow-size", N, C, (j) => `var(--tw-drop-shadow-color, ${j})`), i("--tw-drop-shadow", "var(--tw-drop-shadow-size)"), i("filter", a)] : [v(), i("--tw-drop-shadow-alpha", C), ...Ye("--tw-drop-shadow-size", N, C, (j) => `var(--tw-drop-shadow-color, ${j})`), i("--tw-drop-shadow", _(S, ",").map((j) => `drop-shadow(${j})`).join(" ")), i("filter", a)];
          }
          {
            let N = te(w, e, ["--drop-shadow-color", "--color"]);
            if (N) return N === "inherit" ? [v(), i("--tw-drop-shadow-color", "inherit"), i("--tw-drop-shadow", "var(--tw-drop-shadow-size)")] : [v(), i("--tw-drop-shadow-color", ee(N, "var(--tw-drop-shadow-alpha)")), i("--tw-drop-shadow", "var(--tw-drop-shadow-size)")];
          }
        }), o("drop-shadow", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--drop-shadow-color", "--color"], modifiers: Array.from({ length: 21 }, (w, C) => `${C * 5}`) }, { valueThemeKeys: ["--drop-shadow"] }]), n("backdrop-opacity", { themeKeys: ["--backdrop-opacity", "--opacity"], handleBareValue: ({ value: w }) => bt(w) ? `${w}%` : null, handle: (w) => [x(), i("--tw-backdrop-opacity", `opacity(${w})`), i("-webkit-backdrop-filter", u), i("backdrop-filter", u)] }), o("backdrop-opacity", () => [{ values: Array.from({ length: 21 }, (w, C) => `${C * 5}`), valueThemeKeys: ["--backdrop-opacity", "--opacity"] }]);
      }
      {
        let a = `var(--tw-ease, ${e.resolve(null, ["--default-transition-timing-function"]) ?? "ease"})`, u = `var(--tw-duration, ${e.resolve(null, ["--default-transition-duration"]) ?? "0s"})`;
        n("transition", { defaultValue: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events", themeKeys: ["--transition-property"], handle: (v) => [i("transition-property", v), i("transition-timing-function", a), i("transition-duration", u)], staticValues: { none: [i("transition-property", "none")], all: [i("transition-property", "all"), i("transition-timing-function", a), i("transition-duration", u)], colors: [i("transition-property", "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to"), i("transition-timing-function", a), i("transition-duration", u)], opacity: [i("transition-property", "opacity"), i("transition-timing-function", a), i("transition-duration", u)], shadow: [i("transition-property", "box-shadow"), i("transition-timing-function", a), i("transition-duration", u)], transform: [i("transition-property", "transform, translate, scale, rotate"), i("transition-timing-function", a), i("transition-duration", u)] } }), t("transition-discrete", [["transition-behavior", "allow-discrete"]]), t("transition-normal", [["transition-behavior", "normal"]]), n("delay", { handleBareValue: ({ value: v }) => V(v) ? `${v}ms` : null, themeKeys: ["--transition-delay"], handle: (v) => [i("transition-delay", v)] });
        {
          let v = () => I([A("--tw-duration")]);
          t("duration-initial", [v, ["--tw-duration", "initial"]]), r.functional("duration", (x) => {
            if (x.modifier || !x.value) return;
            let w = null;
            if (x.value.kind === "arbitrary" ? w = x.value.value : (w = e.resolve(x.value.fraction ?? x.value.value, ["--transition-duration"]), w === null && V(x.value.value) && (w = `${x.value.value}ms`)), w !== null) return [v(), i("--tw-duration", w), i("transition-duration", w)];
          });
        }
        o("delay", () => [{ values: ["75", "100", "150", "200", "300", "500", "700", "1000"], valueThemeKeys: ["--transition-delay"] }]), o("duration", () => [{ values: ["75", "100", "150", "200", "300", "500", "700", "1000"], valueThemeKeys: ["--transition-duration"] }]);
      }
      {
        let a = () => I([A("--tw-ease")]);
        n("ease", { themeKeys: ["--ease"], handle: (u) => [a(), i("--tw-ease", u), i("transition-timing-function", u)], staticValues: { initial: [a(), i("--tw-ease", "initial")], linear: [a(), i("--tw-ease", "linear"), i("transition-timing-function", "linear")] } });
      }
      t("will-change-auto", [["will-change", "auto"]]), t("will-change-scroll", [["will-change", "scroll-position"]]), t("will-change-contents", [["will-change", "contents"]]), t("will-change-transform", [["will-change", "transform"]]), n("will-change", { themeKeys: [], handle: (a) => [i("will-change", a)] }), t("content-none", [["--tw-content", "none"], ["content", "none"]]), n("content", { themeKeys: ["--content"], handle: (a) => [I([A("--tw-content", '""')]), i("--tw-content", a), i("content", "var(--tw-content)")] });
      {
        let a = "var(--tw-contain-size,) var(--tw-contain-layout,) var(--tw-contain-paint,) var(--tw-contain-style,)", u = () => I([A("--tw-contain-size"), A("--tw-contain-layout"), A("--tw-contain-paint"), A("--tw-contain-style")]);
        t("contain-none", [["contain", "none"]]), t("contain-content", [["contain", "content"]]), t("contain-strict", [["contain", "strict"]]), t("contain-size", [u, ["--tw-contain-size", "size"], ["contain", a]]), t("contain-inline-size", [u, ["--tw-contain-size", "inline-size"], ["contain", a]]), t("contain-layout", [u, ["--tw-contain-layout", "layout"], ["contain", a]]), t("contain-paint", [u, ["--tw-contain-paint", "paint"], ["contain", a]]), t("contain-style", [u, ["--tw-contain-style", "style"], ["contain", a]]), n("contain", { themeKeys: [], handle: (v) => [i("contain", v)] });
      }
      t("forced-color-adjust-none", [["forced-color-adjust", "none"]]), t("forced-color-adjust-auto", [["forced-color-adjust", "auto"]]), l("leading", ["--leading", "--spacing"], (a) => [I([A("--tw-leading")]), i("--tw-leading", a), i("line-height", a)], { staticValues: { none: [I([A("--tw-leading")]), i("--tw-leading", "1"), i("line-height", "1")] } }), n("tracking", { supportsNegative: true, themeKeys: ["--tracking"], handle: (a) => [I([A("--tw-tracking")]), i("--tw-tracking", a), i("letter-spacing", a)] }), t("antialiased", [["-webkit-font-smoothing", "antialiased"], ["-moz-osx-font-smoothing", "grayscale"]]), t("subpixel-antialiased", [["-webkit-font-smoothing", "auto"], ["-moz-osx-font-smoothing", "auto"]]);
      {
        let a = "var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)", u = () => I([A("--tw-ordinal"), A("--tw-slashed-zero"), A("--tw-numeric-figure"), A("--tw-numeric-spacing"), A("--tw-numeric-fraction")]);
        t("normal-nums", [["font-variant-numeric", "normal"]]), t("ordinal", [u, ["--tw-ordinal", "ordinal"], ["font-variant-numeric", a]]), t("slashed-zero", [u, ["--tw-slashed-zero", "slashed-zero"], ["font-variant-numeric", a]]), t("lining-nums", [u, ["--tw-numeric-figure", "lining-nums"], ["font-variant-numeric", a]]), t("oldstyle-nums", [u, ["--tw-numeric-figure", "oldstyle-nums"], ["font-variant-numeric", a]]), t("proportional-nums", [u, ["--tw-numeric-spacing", "proportional-nums"], ["font-variant-numeric", a]]), t("tabular-nums", [u, ["--tw-numeric-spacing", "tabular-nums"], ["font-variant-numeric", a]]), t("diagonal-fractions", [u, ["--tw-numeric-fraction", "diagonal-fractions"], ["font-variant-numeric", a]]), t("stacked-fractions", [u, ["--tw-numeric-fraction", "stacked-fractions"], ["font-variant-numeric", a]]);
      }
      {
        let a = () => I([A("--tw-outline-style", "solid")]);
        r.static("outline-hidden", () => [i("--tw-outline-style", "none"), i("outline-style", "none"), P("@media", "(forced-colors: active)", [i("outline", "2px solid transparent"), i("outline-offset", "2px")])]), t("outline-none", [["--tw-outline-style", "none"], ["outline-style", "none"]]), t("outline-solid", [["--tw-outline-style", "solid"], ["outline-style", "solid"]]), t("outline-dashed", [["--tw-outline-style", "dashed"], ["outline-style", "dashed"]]), t("outline-dotted", [["--tw-outline-style", "dotted"], ["outline-style", "dotted"]]), t("outline-double", [["--tw-outline-style", "double"], ["outline-style", "double"]]), r.functional("outline", (u) => {
          if (u.value === null) {
            if (u.modifier) return;
            let v = e.get(["--default-outline-width"]) ?? "1px";
            return [a(), i("outline-style", "var(--tw-outline-style)"), i("outline-width", v)];
          }
          if (u.value.kind === "arbitrary") {
            let v = u.value.value;
            switch (u.value.dataType ?? Z(v, ["color", "length", "number", "percentage"])) {
              case "length":
              case "number":
              case "percentage":
                return u.modifier ? void 0 : [a(), i("outline-style", "var(--tw-outline-style)"), i("outline-width", v)];
              default:
                return v = X(v, u.modifier, e), v === null ? void 0 : [i("outline-color", v)];
            }
          }
          {
            let v = te(u, e, ["--outline-color", "--color"]);
            if (v) return [i("outline-color", v)];
          }
          {
            if (u.modifier) return;
            let v = e.resolve(u.value.value, ["--outline-width"]);
            if (v) return [a(), i("outline-style", "var(--tw-outline-style)"), i("outline-width", v)];
            if (V(u.value.value)) return [a(), i("outline-style", "var(--tw-outline-style)"), i("outline-width", `${u.value.value}px`)];
          }
        }), o("outline", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--outline-color", "--color"], modifiers: Array.from({ length: 21 }, (u, v) => `${v * 5}`), hasDefaultValue: true }, { values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--outline-width"] }]), n("outline-offset", { supportsNegative: true, themeKeys: ["--outline-offset"], handleBareValue: ({ value: u }) => V(u) ? `${u}px` : null, handle: (u) => [i("outline-offset", u)] }), o("outline-offset", () => [{ supportsNegative: true, values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--outline-offset"] }]);
      }
      n("opacity", { themeKeys: ["--opacity"], handleBareValue: ({ value: a }) => bt(a) ? `${a}%` : null, handle: (a) => [i("opacity", a)] }), o("opacity", () => [{ values: Array.from({ length: 21 }, (a, u) => `${u * 5}`), valueThemeKeys: ["--opacity"] }]), n("underline-offset", { supportsNegative: true, themeKeys: ["--text-underline-offset"], handleBareValue: ({ value: a }) => V(a) ? `${a}px` : null, handle: (a) => [i("text-underline-offset", a)], staticValues: { auto: [i("text-underline-offset", "auto")] } }), o("underline-offset", () => [{ supportsNegative: true, values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--text-underline-offset"] }]), r.functional("text", (a) => {
        if (a.value) {
          if (a.value.kind === "arbitrary") {
            let u = a.value.value;
            switch (a.value.dataType ?? Z(u, ["color", "length", "percentage", "absolute-size", "relative-size"])) {
              case "size":
              case "length":
              case "percentage":
              case "absolute-size":
              case "relative-size": {
                if (a.modifier) {
                  let v = a.modifier.kind === "arbitrary" ? a.modifier.value : e.resolve(a.modifier.value, ["--leading"]);
                  if (!v && pe(a.modifier.value)) {
                    if (!e.resolve(null, ["--spacing"])) return null;
                    v = `--spacing(${a.modifier.value})`;
                  }
                  return !v && a.modifier.value === "none" && (v = "1"), v ? [i("font-size", u), i("line-height", v)] : null;
                }
                return [i("font-size", u)];
              }
              default:
                return u = X(u, a.modifier, e), u === null ? void 0 : [i("color", u)];
            }
          }
          {
            let u = te(a, e, ["--text-color", "--color"]);
            if (u) return [i("color", u)];
          }
          {
            let u = e.resolveWith(a.value.value, ["--text"], ["--line-height", "--letter-spacing", "--font-weight"]);
            if (u) {
              let [v, x = {}] = Array.isArray(u) ? u : [u];
              if (a.modifier) {
                let w = a.modifier.kind === "arbitrary" ? a.modifier.value : e.resolve(a.modifier.value, ["--leading"]);
                if (!w && pe(a.modifier.value)) {
                  if (!e.resolve(null, ["--spacing"])) return null;
                  w = `--spacing(${a.modifier.value})`;
                }
                if (!w && a.modifier.value === "none" && (w = "1"), !w) return null;
                let C = [i("font-size", v)];
                return w && C.push(i("line-height", w)), C;
              }
              return typeof x == "string" ? [i("font-size", v), i("line-height", x)] : [i("font-size", v), i("line-height", x["--line-height"] ? `var(--tw-leading, ${x["--line-height"]})` : void 0), i("letter-spacing", x["--letter-spacing"] ? `var(--tw-tracking, ${x["--letter-spacing"]})` : void 0), i("font-weight", x["--font-weight"] ? `var(--tw-font-weight, ${x["--font-weight"]})` : void 0)];
            }
          }
        }
      }), o("text", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--text-color", "--color"], modifiers: Array.from({ length: 21 }, (a, u) => `${u * 5}`) }, { values: [], valueThemeKeys: ["--text"], modifiers: [], modifierThemeKeys: ["--leading"] }]);
      let D = () => I([A("--tw-text-shadow-color"), A("--tw-text-shadow-alpha", "100%", "<percentage>")]);
      t("text-shadow-initial", [D, ["--tw-text-shadow-color", "initial"]]), r.functional("text-shadow", (a) => {
        let u;
        if (a.modifier && (a.modifier.kind === "arbitrary" ? u = a.modifier.value : V(a.modifier.value) && (u = `${a.modifier.value}%`)), !a.value) {
          let v = e.get(["--text-shadow"]);
          return v === null ? void 0 : [D(), i("--tw-text-shadow-alpha", u), ...ge("text-shadow", v, u, (x) => `var(--tw-text-shadow-color, ${x})`)];
        }
        if (a.value.kind === "arbitrary") {
          let v = a.value.value;
          return (a.value.dataType ?? Z(v, ["color"])) === "color" ? (v = X(v, a.modifier, e), v === null ? void 0 : [D(), i("--tw-text-shadow-color", ee(v, "var(--tw-text-shadow-alpha)"))]) : [D(), i("--tw-text-shadow-alpha", u), ...ge("text-shadow", v, u, (x) => `var(--tw-text-shadow-color, ${x})`)];
        }
        switch (a.value.value) {
          case "none":
            return a.modifier ? void 0 : [D(), i("text-shadow", "none")];
          case "inherit":
            return a.modifier ? void 0 : [D(), i("--tw-text-shadow-color", "inherit")];
        }
        {
          let v = e.get([`--text-shadow-${a.value.value}`]);
          if (v) return [D(), i("--tw-text-shadow-alpha", u), ...ge("text-shadow", v, u, (x) => `var(--tw-text-shadow-color, ${x})`)];
        }
        {
          let v = te(a, e, ["--text-shadow-color", "--color"]);
          if (v) return [D(), i("--tw-text-shadow-color", ee(v, "var(--tw-text-shadow-alpha)"))];
        }
      }), o("text-shadow", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--text-shadow-color", "--color"], modifiers: Array.from({ length: 21 }, (a, u) => `${u * 5}`) }, { values: ["none"] }, { valueThemeKeys: ["--text-shadow"], modifiers: Array.from({ length: 21 }, (a, u) => `${u * 5}`), hasDefaultValue: e.get(["--text-shadow"]) !== null }]);
      {
        let a = function(S) {
          return `var(--tw-ring-inset,) 0 0 0 calc(${S} + var(--tw-ring-offset-width)) var(--tw-ring-color, ${C})`;
        }, u = function(S) {
          return `inset 0 0 0 ${S} var(--tw-inset-ring-color, currentcolor)`;
        };
        var Q = a, ae = u;
        let v = ["var(--tw-inset-shadow)", "var(--tw-inset-ring-shadow)", "var(--tw-ring-offset-shadow)", "var(--tw-ring-shadow)", "var(--tw-shadow)"].join(", "), x = "0 0 #0000", w = () => I([A("--tw-shadow", x), A("--tw-shadow-color"), A("--tw-shadow-alpha", "100%", "<percentage>"), A("--tw-inset-shadow", x), A("--tw-inset-shadow-color"), A("--tw-inset-shadow-alpha", "100%", "<percentage>"), A("--tw-ring-color"), A("--tw-ring-shadow", x), A("--tw-inset-ring-color"), A("--tw-inset-ring-shadow", x), A("--tw-ring-inset"), A("--tw-ring-offset-width", "0px", "<length>"), A("--tw-ring-offset-color", "#fff"), A("--tw-ring-offset-shadow", x)]);
        t("shadow-initial", [w, ["--tw-shadow-color", "initial"]]), r.functional("shadow", (S) => {
          let j;
          if (S.modifier && (S.modifier.kind === "arbitrary" ? j = S.modifier.value : V(S.modifier.value) && (j = `${S.modifier.value}%`)), !S.value) {
            let M = e.get(["--shadow"]);
            return M === null ? void 0 : [w(), i("--tw-shadow-alpha", j), ...ge("--tw-shadow", M, j, (de) => `var(--tw-shadow-color, ${de})`), i("box-shadow", v)];
          }
          if (S.value.kind === "arbitrary") {
            let M = S.value.value;
            return (S.value.dataType ?? Z(M, ["color"])) === "color" ? (M = X(M, S.modifier, e), M === null ? void 0 : [w(), i("--tw-shadow-color", ee(M, "var(--tw-shadow-alpha)"))]) : [w(), i("--tw-shadow-alpha", j), ...ge("--tw-shadow", M, j, (de) => `var(--tw-shadow-color, ${de})`), i("box-shadow", v)];
          }
          switch (S.value.value) {
            case "none":
              return S.modifier ? void 0 : [w(), i("--tw-shadow", x), i("box-shadow", v)];
            case "inherit":
              return S.modifier ? void 0 : [w(), i("--tw-shadow-color", "inherit")];
          }
          {
            let M = e.get([`--shadow-${S.value.value}`]);
            if (M) return [w(), i("--tw-shadow-alpha", j), ...ge("--tw-shadow", M, j, (de) => `var(--tw-shadow-color, ${de})`), i("box-shadow", v)];
          }
          {
            let M = te(S, e, ["--box-shadow-color", "--color"]);
            if (M) return [w(), i("--tw-shadow-color", ee(M, "var(--tw-shadow-alpha)"))];
          }
        }), o("shadow", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--box-shadow-color", "--color"], modifiers: Array.from({ length: 21 }, (S, j) => `${j * 5}`) }, { values: ["none"] }, { valueThemeKeys: ["--shadow"], modifiers: Array.from({ length: 21 }, (S, j) => `${j * 5}`), hasDefaultValue: e.get(["--shadow"]) !== null }]), t("inset-shadow-initial", [w, ["--tw-inset-shadow-color", "initial"]]), r.functional("inset-shadow", (S) => {
          let j;
          if (S.modifier && (S.modifier.kind === "arbitrary" ? j = S.modifier.value : V(S.modifier.value) && (j = `${S.modifier.value}%`)), !S.value) {
            let M = e.get(["--inset-shadow"]);
            return M === null ? void 0 : [w(), i("--tw-inset-shadow-alpha", j), ...ge("--tw-inset-shadow", M, j, (de) => `var(--tw-inset-shadow-color, ${de})`), i("box-shadow", v)];
          }
          if (S.value.kind === "arbitrary") {
            let M = S.value.value;
            return (S.value.dataType ?? Z(M, ["color"])) === "color" ? (M = X(M, S.modifier, e), M === null ? void 0 : [w(), i("--tw-inset-shadow-color", ee(M, "var(--tw-inset-shadow-alpha)"))]) : [w(), i("--tw-inset-shadow-alpha", j), ...ge("--tw-inset-shadow", M, j, (de) => `var(--tw-inset-shadow-color, ${de})`, "inset"), i("box-shadow", v)];
          }
          switch (S.value.value) {
            case "none":
              return S.modifier ? void 0 : [w(), i("--tw-inset-shadow", `inset ${x}`), i("box-shadow", v)];
            case "inherit":
              return S.modifier ? void 0 : [w(), i("--tw-inset-shadow-color", "inherit")];
          }
          {
            let M = e.get([`--inset-shadow-${S.value.value}`]);
            if (M) return [w(), i("--tw-inset-shadow-alpha", j), ...ge("--tw-inset-shadow", M, j, (de) => `var(--tw-inset-shadow-color, ${de})`), i("box-shadow", v)];
          }
          {
            let M = te(S, e, ["--box-shadow-color", "--color"]);
            if (M) return [w(), i("--tw-inset-shadow-color", ee(M, "var(--tw-inset-shadow-alpha)"))];
          }
        }), o("inset-shadow", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--box-shadow-color", "--color"], modifiers: Array.from({ length: 21 }, (S, j) => `${j * 5}`) }, { values: ["none"] }, { valueThemeKeys: ["--inset-shadow"], modifiers: Array.from({ length: 21 }, (S, j) => `${j * 5}`), hasDefaultValue: e.get(["--inset-shadow"]) !== null }]), t("ring-inset", [w, ["--tw-ring-inset", "inset"]]);
        let C = e.get(["--default-ring-color"]) ?? "currentcolor";
        r.functional("ring", (S) => {
          if (!S.value) {
            if (S.modifier) return;
            let j = e.get(["--default-ring-width"]) ?? "1px";
            return [w(), i("--tw-ring-shadow", a(j)), i("box-shadow", v)];
          }
          if (S.value.kind === "arbitrary") {
            let j = S.value.value;
            return (S.value.dataType ?? Z(j, ["color", "length"])) === "length" ? S.modifier ? void 0 : [w(), i("--tw-ring-shadow", a(j)), i("box-shadow", v)] : (j = X(j, S.modifier, e), j === null ? void 0 : [i("--tw-ring-color", j)]);
          }
          {
            let j = te(S, e, ["--ring-color", "--color"]);
            if (j) return [i("--tw-ring-color", j)];
          }
          {
            if (S.modifier) return;
            let j = e.resolve(S.value.value, ["--ring-width"]);
            if (j === null && V(S.value.value) && (j = `${S.value.value}px`), j) return [w(), i("--tw-ring-shadow", a(j)), i("box-shadow", v)];
          }
        }), o("ring", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--ring-color", "--color"], modifiers: Array.from({ length: 21 }, (S, j) => `${j * 5}`) }, { values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--ring-width"], hasDefaultValue: true }]), r.functional("inset-ring", (S) => {
          if (!S.value) return S.modifier ? void 0 : [w(), i("--tw-inset-ring-shadow", u("1px")), i("box-shadow", v)];
          if (S.value.kind === "arbitrary") {
            let j = S.value.value;
            return (S.value.dataType ?? Z(j, ["color", "length"])) === "length" ? S.modifier ? void 0 : [w(), i("--tw-inset-ring-shadow", u(j)), i("box-shadow", v)] : (j = X(j, S.modifier, e), j === null ? void 0 : [i("--tw-inset-ring-color", j)]);
          }
          {
            let j = te(S, e, ["--ring-color", "--color"]);
            if (j) return [i("--tw-inset-ring-color", j)];
          }
          {
            if (S.modifier) return;
            let j = e.resolve(S.value.value, ["--ring-width"]);
            if (j === null && V(S.value.value) && (j = `${S.value.value}px`), j) return [w(), i("--tw-inset-ring-shadow", u(j)), i("box-shadow", v)];
          }
        }), o("inset-ring", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--ring-color", "--color"], modifiers: Array.from({ length: 21 }, (S, j) => `${j * 5}`) }, { values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--ring-width"], hasDefaultValue: true }]);
        let N = "var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)";
        r.functional("ring-offset", (S) => {
          if (S.value) {
            if (S.value.kind === "arbitrary") {
              let j = S.value.value;
              return (S.value.dataType ?? Z(j, ["color", "length"])) === "length" ? S.modifier ? void 0 : [i("--tw-ring-offset-width", j), i("--tw-ring-offset-shadow", N)] : (j = X(j, S.modifier, e), j === null ? void 0 : [i("--tw-ring-offset-color", j)]);
            }
            {
              let j = e.resolve(S.value.value, ["--ring-offset-width"]);
              if (j) return S.modifier ? void 0 : [i("--tw-ring-offset-width", j), i("--tw-ring-offset-shadow", N)];
              if (V(S.value.value)) return S.modifier ? void 0 : [i("--tw-ring-offset-width", `${S.value.value}px`), i("--tw-ring-offset-shadow", N)];
            }
            {
              let j = te(S, e, ["--ring-offset-color", "--color"]);
              if (j) return [i("--tw-ring-offset-color", j)];
            }
          }
        });
      }
      return o("ring-offset", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--ring-offset-color", "--color"], modifiers: Array.from({ length: 21 }, (a, u) => `${u * 5}`) }, { values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--ring-offset-width"] }]), r.functional("@container", (a) => {
        let u = null;
        if (a.value === null ? u = "inline-size" : a.value.kind === "arbitrary" ? u = a.value.value : a.value.kind === "named" && a.value.value === "normal" ? u = "normal" : a.value.kind === "named" && a.value.value === "size" && (u = "size"), u !== null) return a.modifier ? [i("container-type", u), i("container-name", a.modifier.value)] : [i("container-type", u)];
      }), o("@container", () => [{ values: ["normal"], valueThemeKeys: [], hasDefaultValue: true }]), r;
    }
    var yt = ["number", "integer", "ratio", "percentage"];
    function pi(e) {
      let r = Ne(e.params);
      return zi(r) ? (o) => {
        let t = { "--value": { usedSpacingInteger: false, usedSpacingNumber: false, themeKeys: /* @__PURE__ */ new Set(), literals: /* @__PURE__ */ new Set() }, "--modifier": { usedSpacingInteger: false, usedSpacingNumber: false, themeKeys: /* @__PURE__ */ new Set(), literals: /* @__PURE__ */ new Set() } };
        R(e.nodes, (n) => {
          if (n.kind !== "declaration" || !n.value || !n.value.includes("--value(") && !n.value.includes("--modifier(")) return;
          let s = H(n.value);
          R(s, (l) => {
            if (l.kind !== "function") return;
            if (l.value === "--spacing" && !(t["--modifier"].usedSpacingNumber && t["--value"].usedSpacingNumber)) return R(l.nodes, (p) => {
              if (p.kind !== "function" || p.value !== "--value" && p.value !== "--modifier") return;
              let c = p.value;
              for (let m of p.nodes) if (m.kind === "word") {
                if (m.value === "integer") t[c].usedSpacingInteger ||= true;
                else if (m.value === "number" && (t[c].usedSpacingNumber ||= true, t["--modifier"].usedSpacingNumber && t["--value"].usedSpacingNumber)) return O.Stop;
              }
            }), O.Continue;
            if (l.value !== "--value" && l.value !== "--modifier") return;
            let h = _(Y(l.nodes), ",");
            for (let [p, c] of h.entries()) c = c.replace(/\\\*/g, "*"), c = c.replace(/--(.*?)\s--(.*?)/g, "--$1-*--$2"), c = c.replace(/\s+/g, ""), c = c.replace(/(-\*){2,}/g, "-*"), c[0] === "-" && c[1] === "-" && !c.includes("(") && !c.includes("-*") && (c += "-*"), h[p] = c;
            l.nodes = H(h.join(","));
            for (let p of l.nodes) if (p.kind === "word" && (p.value[0] === '"' || p.value[0] === "'") && p.value[0] === p.value[p.value.length - 1]) {
              let c = p.value.slice(1, -1);
              t[l.value].literals.add(c);
            } else if (p.kind === "word" && p.value[0] === "-" && p.value[1] === "-") {
              let c = p.value.replace(/-\*.*$/g, "");
              t[l.value].themeKeys.add(c);
            } else if (p.kind === "word" && !(p.value[0] === "[" && p.value[p.value.length - 1] === "]") && !yt.includes(p.value)) {
              console.warn(`Unsupported bare value data type: "${p.value}".
Only valid data types are: ${yt.map((b) => `"${b}"`).join(", ")}.
`);
              let c = p.value, m = structuredClone(l), f = "\xB6";
              R(m.nodes, (b) => {
                if (b.kind === "word" && b.value === c) return O.ReplaceSkip({ kind: "word", value: f });
              });
              let d = "^".repeat(Y([p]).length), k = Y([m]).indexOf(f), g = ["```css", Y([l]), " ".repeat(k) + d, "```"].join(`
`);
              console.warn(g);
            }
          }), n.value = Y(s);
        }), o.utilities.functional(r.slice(0, -2), (n) => {
          let s = le(e), l = n.value, h = n.modifier, p = false, c = false, m = false, f = false, d = /* @__PURE__ */ new Map(), k = false;
          if (R([s], (g, b) => {
            let $ = b.parent;
            if ($?.kind !== "rule" && $?.kind !== "at-rule" || g.kind !== "declaration" || !g.value) return;
            let T = false, z = H(g.value);
            if (R(z, (y) => {
              if (y.kind === "function") {
                if (y.value === "--value") {
                  p = true;
                  let U = br(l, y, o);
                  return U ? (c = true, U.ratio ? k = true : d.set(g, $), O.ReplaceSkip(U.nodes)) : (T = true, O.Stop);
                } else if (y.value === "--modifier") {
                  m = true;
                  let U = br(h, y, o);
                  return U ? (f = true, O.ReplaceSkip(U.nodes)) : (T = true, O.Stop);
                }
              }
            }), T) return O.ReplaceSkip([]);
            g.value = Y(z);
          }), !p || !c || m && !f && h !== null || k && f || h && !k && !f) return null;
          if (k) for (let [g, b] of d) {
            let $ = b.nodes.indexOf(g);
            $ !== -1 && b.nodes.splice($, 1);
          }
          return s.nodes;
        }), o.utilities.suggest(r.slice(0, -2), () => {
          let n = [], s = [];
          for (let [l, { literals: h, usedSpacingNumber: p, usedSpacingInteger: c, themeKeys: m }] of [[n, t["--value"]], [s, t["--modifier"]]]) {
            for (let f of h) l.push(f);
            if (p) l.push(...He);
            else if (c) for (let f of He) V(f) && l.push(f);
            for (let f of o.theme.keysInNamespaces(m)) l.push(f.replace(wr, (d, k, g) => `${k}.${g}`));
          }
          return [{ values: n, modifiers: s }];
        });
      } : $i(r) ? (o) => {
        o.utilities.static(r, () => e.nodes.map(le));
      } : null;
    }
    function br(e, r, o) {
      if (e === null) {
        for (let t of r.nodes) if (t.kind === "function" && t.value === "--default") return { nodes: t.nodes };
        return;
      }
      for (let t of r.nodes) {
        if (e.kind === "named" && t.kind === "word" && (t.value[0] === "'" || t.value[0] === '"') && t.value[t.value.length - 1] === t.value[0] && t.value.slice(1, -1) === e.value) return { nodes: H(e.value) };
        if (e.kind === "named" && t.kind === "word" && t.value[0] === "-" && t.value[1] === "-") {
          let n = t.value;
          if (n.endsWith("-*")) {
            n = n.slice(0, -2);
            let s = o.theme.resolve(e.value, [n]);
            if (s) return { nodes: H(s) };
          } else {
            let s = n.split("-*");
            if (s.length <= 1) continue;
            let l = [s.shift()], h = o.theme.resolveWith(e.value, l, s);
            if (h) {
              let [, p = {}] = h;
              {
                let c = p[s.pop()];
                if (c) return { nodes: H(c) };
              }
            }
          }
        } else if (e.kind === "named" && t.kind === "word") {
          if (!yt.includes(t.value)) continue;
          let n = t.value === "ratio" && "fraction" in e ? e.fraction : e.value;
          if (!n) continue;
          let s = Z(n, [t.value]);
          if (s === null) continue;
          if (s === "ratio") {
            let [l, h] = _(n, "/").map(Number);
            if (!V(l) || !V(h)) continue;
          } else if (s === "number" && !pe(n) || s === "percentage" && !V(n.slice(0, -1))) continue;
          if (s === "ratio") {
            let [l, h] = _(n, "/");
            return { nodes: H(`${l.trim()} / ${h.trim()}`), ratio: true };
          }
          return { nodes: H(n), ratio: false };
        } else if (e.kind === "arbitrary" && t.kind === "word" && t.value[0] === "[" && t.value[t.value.length - 1] === "]") {
          let n = t.value.slice(1, -1);
          if (n === "*") return { nodes: H(e.value) };
          if ("dataType" in e && e.dataType && e.dataType !== n) continue;
          if ("dataType" in e && e.dataType) return { nodes: H(e.value) };
          if (Z(e.value, [n]) !== null) return { nodes: H(e.value) };
        }
      }
    }
    function ge(e, r, o, t, n = "") {
      let s = false, l = qe(r, (p) => o == null ? t(p) : p.startsWith("current") ? t(ee(p, o)) : ((p.startsWith("var(") || o.startsWith("var(")) && (s = true), t(kr(p, o))));
      function h(p) {
        return n ? _(p, ",").map((c) => n.trim() + " " + c.trim()).join(", ") : p;
      }
      return s ? [i(e, h(qe(r, t))), J("@supports (color: lab(from red l a b))", [i(e, h(l))])] : [i(e, h(l))];
    }
    function Ye(e, r, o, t, n = "") {
      let s = false, l = _(r, ",").map((h) => qe(h, (p) => o == null ? t(p) : p.startsWith("current") ? t(ee(p, o)) : ((p.startsWith("var(") || o.startsWith("var(")) && (s = true), t(kr(p, o))))).map((h) => `drop-shadow(${h})`).join(" ");
      return s ? [i(e, n + _(r, ",").map((h) => `drop-shadow(${qe(h, t)})`).join(" ")), J("@supports (color: lab(from red l a b))", [i(e, n + l)])] : [i(e, n + l)];
    }
    var yr = /^-?[a-z][a-zA-Z0-9_-]*/, hi = 37, mi = 47, gi = 46, vi = 97, ki = 122, wi = 65, bi = 90, Ze = 48, Ge = 57, yi = 95, xi = 45;
    function $i(e) {
      let r = yr.exec(e);
      if (r === null) return false;
      let o = r[0], t = e.slice(o.length);
      if (t.length === 0 && o.endsWith("-")) return false;
      if (t.length === 0) return true;
      let n = false;
      for (let s = 0; s < t.length; s++) {
        let l = t.charCodeAt(s);
        switch (l) {
          case hi: {
            if (s !== t.length - 1) return false;
            let h = (t[s - 1] || o[o.length - 1] || "").charCodeAt(0);
            if (h < Ze || h > Ge) return false;
            break;
          }
          case mi: {
            if (s === t.length - 1 || n) return false;
            n = true;
            break;
          }
          case gi: {
            let h = (t[s - 1] || o[o.length - 1] || "").charCodeAt(0);
            if (h < Ze || h > Ge) return false;
            let p = (t[s + 1] || "").charCodeAt(0);
            if (p < Ze || p > Ge) return false;
            break;
          }
          case yi:
          case xi:
            continue;
          default: {
            if (l >= vi && l <= ki || l >= wi && l <= bi || l >= Ze && l <= Ge) continue;
            return false;
          }
        }
      }
      return true;
    }
    function zi(e) {
      if (!e.endsWith("-*")) return false;
      e = e.slice(0, -2);
      let r = yr.exec(e);
      if (r === null) return false;
      let o = r[0];
      return e.slice(o.length).length === 0;
    }
    var xt = { "--alpha": Ai, "--spacing": Ci, "--theme": Si, theme: ji };
    function Ai(e, r, o, ...t) {
      let [n, s] = _(o, "/").map((l) => l.trim());
      if (!n || !s) throw new Error(`The --alpha(\u2026) function requires a color and an alpha value, e.g.: \`--alpha(${n || "var(--my-color)"} / ${s || "50%"})\``);
      if (t.length > 0) throw new Error(`The --alpha(\u2026) function only accepts one argument, e.g.: \`--alpha(${n || "var(--my-color)"} / ${s || "50%"})\``);
      return ee(n, s);
    }
    function Ci(e, r, o, ...t) {
      if (!o) throw new Error("The --spacing(\u2026) function requires an argument, but received none.");
      if (t.length > 0) throw new Error(`The --spacing(\u2026) function only accepts a single argument, but received ${t.length + 1}.`);
      let n = e.theme.resolve(null, ["--spacing"]);
      if (!n) throw new Error("The --spacing(\u2026) function requires that the `--spacing` theme variable exists, but it was not found.");
      let s = kt.get(o);
      if (s) {
        if (s[0] === 0) return "0";
        if (s[0] === 1) return n;
      }
      return `calc(${n} * ${o})`;
    }
    function Si(e, r, o, ...t) {
      if (!o.startsWith("--")) throw new Error("The --theme(\u2026) function can only be used with CSS variables from your theme.");
      let n = false;
      o.endsWith(" inline") && (n = true, o = o.slice(0, -7)), r.kind === "at-rule" && (n = true);
      let s = e.resolveThemeValue(o, n);
      if (!s) {
        if (t.length > 0) return t.join(", ");
        throw new Error(`Could not resolve value for theme function: \`theme(${o})\`. Consider checking if the variable name is correct or provide a fallback value to silence this error.`);
      }
      if (t.length === 0) return s;
      let l = t.join(", ");
      if (l === "initial") return s;
      if (s === "initial") return l;
      if (s.startsWith("var(") || s.startsWith("theme(") || s.startsWith("--theme(")) {
        let h = H(s);
        return Ki(h, l), Y(h);
      }
      return s;
    }
    function ji(e, r, o, ...t) {
      o = Vi(o);
      let n = e.resolveThemeValue(o);
      if (!n && t.length > 0) return t.join(", ");
      if (!n) throw new Error(`Could not resolve value for theme function: \`theme(${o})\`. Consider checking if the path is correct or provide a fallback value to silence this error.`);
      return n;
    }
    var xr = new RegExp(Object.keys(xt).map((e) => `${e}\\(`).join("|"));
    function $t(e, r) {
      let o = 0;
      return R(e, (t) => {
        if (t.kind === "declaration" && t.value && xr.test(t.value)) {
          o |= 8, t.value = $r(t.value, t, r);
          return;
        }
        t.kind === "at-rule" && (t.name === "@media" || t.name === "@custom-media" || t.name === "@container" || t.name === "@supports") && xr.test(t.params) && (o |= 8, t.params = $r(t.params, t, r));
      }), o;
    }
    function $r(e, r, o) {
      let t = H(e);
      return R(t, (n) => {
        if (n.kind === "function" && n.value in xt) {
          let s = _(Y(n.nodes).trim(), ",").map((h) => h.trim()), l = xt[n.value](o, r, ...s);
          return O.Replace(H(l));
        }
      }), Y(t);
    }
    function Vi(e) {
      if (e[0] !== "'" && e[0] !== '"') return e;
      let r = "", o = e[0];
      for (let t = 1; t < e.length - 1; t++) {
        let n = e[t], s = e[t + 1];
        n === "\\" && (s === o || s === "\\") ? (r += s, t++) : r += n;
      }
      return r;
    }
    function Ki(e, r) {
      R(e, (o) => {
        if (o.kind === "function" && !(o.value !== "var" && o.value !== "theme" && o.value !== "--theme")) if (o.nodes.length === 1) o.nodes.push({ kind: "word", value: `, ${r}` });
        else {
          let t = o.nodes[o.nodes.length - 1];
          t.kind === "word" && t.value === "initial" && (t.value = r);
        }
      });
    }
    function Ti() {
      return [];
    }
    function Oi() {
      return [];
    }
    function Ni() {
      return [];
    }
    function Ei(e, r) {
      let { astNodes: o, nodeSorting: t } = Je(Array.from(r), e), n = new Map(r.map((l) => [l, null])), s = 0n;
      for (let l of o) {
        let h = t.get(l)?.candidate;
        h && n.set(h, n.get(h) ?? s++);
      }
      return r.map((l) => [l, n.get(l) ?? null]);
    }
    var zr = /^@?[a-z0-9][a-zA-Z0-9_-]*(?<![_-])$/, Fi = class {
      compareFns = /* @__PURE__ */ new Map();
      variants = /* @__PURE__ */ new Map();
      completions = /* @__PURE__ */ new Map();
      groupOrder = null;
      lastOrder = 0;
      static(e, r, { compounds: o, order: t } = {}) {
        this.set(e, { kind: "static", applyFn: r, compoundsWith: 0, compounds: o ?? 2, order: t });
      }
      fromAst(e, r, o) {
        let t = [], n = false;
        R(r, (s) => {
          s.kind === "rule" ? t.push(s.selector) : s.kind === "at-rule" && s.name === "@variant" ? n = true : s.kind === "at-rule" && s.name !== "@slot" && t.push(`${s.name} ${s.params}`);
        }), this.static(e, (s) => {
          let l = r.map(le);
          n && Xe(l, o), Cr(l, s.nodes), s.nodes = l;
        }, { compounds: We(t) });
      }
      functional(e, r, { compounds: o, order: t } = {}) {
        this.set(e, { kind: "functional", applyFn: r, compoundsWith: 0, compounds: o ?? 2, order: t });
      }
      compound(e, r, o, { compounds: t, order: n } = {}) {
        this.set(e, { kind: "compound", applyFn: o, compoundsWith: r, compounds: t ?? 2, order: n });
      }
      group(e, r) {
        this.groupOrder = this.nextOrder(), r && this.compareFns.set(this.groupOrder, r), e(), this.groupOrder = null;
      }
      has(e) {
        return this.variants.has(e);
      }
      get(e) {
        return this.variants.get(e);
      }
      kind(e) {
        return this.variants.get(e)?.kind;
      }
      compoundsWith(e, r) {
        let o = this.variants.get(e), t = typeof r == "string" ? this.variants.get(r) : r.kind === "arbitrary" ? { compounds: We([r.selector]) } : this.variants.get(r.root);
        return !(!o || !t || o.kind !== "compound" || t.compounds === 0 || o.compoundsWith === 0 || (o.compoundsWith & t.compounds) === 0);
      }
      suggest(e, r) {
        this.completions.set(e, r);
      }
      getCompletions(e) {
        return this.completions.get(e)?.() ?? [];
      }
      compare(e, r) {
        if (e === r) return 0;
        if (e === null) return -1;
        if (r === null) return 1;
        if (e.kind === "arbitrary" && r.kind === "arbitrary") return e.selector < r.selector ? -1 : 1;
        if (e.kind === "arbitrary") return 1;
        if (r.kind === "arbitrary") return -1;
        let o = this.variants.get(e.root).order, t = this.variants.get(r.root).order, n = o - t;
        if (n !== 0) return n;
        if (e.kind === "compound" && r.kind === "compound") {
          let p = this.compare(e.variant, r.variant);
          return p !== 0 ? p : e.modifier && r.modifier ? e.modifier.value < r.modifier.value ? -1 : 1 : e.modifier ? 1 : r.modifier ? -1 : 0;
        }
        let s = this.compareFns.get(o);
        if (s !== void 0) return s(e, r);
        if (e.root !== r.root) return e.root < r.root ? -1 : 1;
        let l = e.value, h = r.value;
        return l === null ? -1 : h === null || l.kind === "arbitrary" && h.kind !== "arbitrary" ? 1 : l.kind !== "arbitrary" && h.kind === "arbitrary" || l.value < h.value ? -1 : 1;
      }
      keys() {
        return this.variants.keys();
      }
      entries() {
        return this.variants.entries();
      }
      set(e, { kind: r, applyFn: o, compounds: t, compoundsWith: n, order: s }) {
        let l = this.variants.get(e);
        l ? Object.assign(l, { kind: r, applyFn: o, compounds: t }) : (s === void 0 && (this.lastOrder = this.nextOrder(), s = this.lastOrder), this.variants.set(e, { kind: r, applyFn: o, order: s, compoundsWith: n, compounds: t }));
      }
      nextOrder() {
        return this.groupOrder ?? this.lastOrder + 1;
      }
    };
    function We(e) {
      let r = 0;
      for (let o of e) {
        if (o[0] === "@") {
          if (!o.startsWith("@media") && !o.startsWith("@supports") && !o.startsWith("@container")) return 0;
          r |= 1;
          continue;
        }
        if (o.includes("::")) return 0;
        r |= 2;
      }
      return r;
    }
    function Ui(e) {
      let r = new Fi();
      function o(c, m, { compounds: f } = {}) {
        f = f ?? We(m), r.static(c, (d) => {
          d.nodes = m.map((k) => J(k, d.nodes));
        }, { compounds: f });
      }
      o("*", [":is(& > *)"], { compounds: 0 }), o("**", [":is(& *)"], { compounds: 0 });
      function t(c, m) {
        return m.map((f) => {
          if (c === "@container") {
            let d = H(f.trim());
            return d.length >= 1 && d[0].kind === "function" ? `not ${f}` : d.length >= 3 && d[0].kind === "word" && d[0].value === "not" && d[2].kind === "function" ? (d.splice(0, 2), Y(d)) : d.length >= 5 && d[0].kind === "word" && d[2].kind === "word" && d[2].value === "not" && d[4].kind === "function" ? (d.splice(2, 2), Y(d)) : d.length >= 3 && d[0].kind === "word" && d[0].value !== "not" && d[2].kind === "function" ? (d.splice(1, 0, { kind: "separator", value: " " }, { kind: "word", value: "not" }), Y(d)) : `not ${f}`;
          } else {
            f = f.trim();
            let d = _(f, " ");
            return d[0] === "not" ? d.slice(1).join(" ") : `not ${f}`;
          }
        });
      }
      let n = ["@media", "@supports", "@container"];
      function s(c) {
        for (let m of n) {
          if (m !== c.name) continue;
          let f = _(c.params, ",");
          return f.length > 1 ? null : (f = t(c.name, f), P(c.name, f.join(", ")));
        }
        return null;
      }
      function l(c) {
        return c.includes("::") ? null : `&:not(${_(c, ",").map((m) => (m = m.replaceAll("&", "*"), m)).join(", ")})`;
      }
      r.compound("not", 3, (c, m) => {
        if (m.variant.kind === "arbitrary" && m.variant.relative || m.modifier) return null;
        let f = false;
        if (R([c], (d, k) => {
          if (d.kind !== "rule" && d.kind !== "at-rule" || d.nodes.length > 0) return O.Continue;
          let g = [], b = [], $ = k.path();
          $.push(d);
          for (let z of $) z.kind === "at-rule" ? g.push(z) : z.kind === "rule" && b.push(z);
          if (g.length > 1 || b.length > 1) return O.Stop;
          let T = [];
          for (let z of b) {
            let y = l(z.selector);
            if (!y) return f = false, O.Stop;
            T.push(q(y, []));
          }
          for (let z of g) {
            let y = s(z);
            if (!y) return f = false, O.Stop;
            T.push(y);
          }
          return Object.assign(c, q("&", T)), f = true, O.Skip;
        }), c.kind === "rule" && c.selector === "&" && c.nodes.length === 1 && Object.assign(c, c.nodes[0]), !f) return null;
      }), r.suggest("not", () => Array.from(r.keys()).filter((c) => r.compoundsWith("not", c))), r.compound("group", 2, (c, m) => {
        if (m.variant.kind === "arbitrary" && m.variant.relative) return null;
        let f = m.modifier ? `:where(.${e.prefix ? `${e.prefix}\\:` : ""}group\\/${m.modifier.value})` : `:where(.${e.prefix ? `${e.prefix}\\:` : ""}group)`, d = false;
        if (R([c], (k, g) => {
          if (k.kind !== "rule") return O.Continue;
          for (let $ of g.path()) if ($.kind === "rule") return d = false, O.Stop;
          let b = k.selector.replaceAll("&", f);
          _(b, ",").length > 1 && (b = `:is(${b})`), k.selector = `&:is(${b} *)`, d = true;
        }), !d) return null;
      }), r.suggest("group", () => Array.from(r.keys()).filter((c) => r.compoundsWith("group", c))), r.compound("peer", 2, (c, m) => {
        if (m.variant.kind === "arbitrary" && m.variant.relative) return null;
        let f = m.modifier ? `:where(.${e.prefix ? `${e.prefix}\\:` : ""}peer\\/${m.modifier.value})` : `:where(.${e.prefix ? `${e.prefix}\\:` : ""}peer)`, d = false;
        if (R([c], (k, g) => {
          if (k.kind !== "rule") return O.Continue;
          for (let $ of g.path()) if ($.kind === "rule") return d = false, O.Stop;
          let b = k.selector.replaceAll("&", f);
          _(b, ",").length > 1 && (b = `:is(${b})`), k.selector = `&:is(${b} ~ *)`, d = true;
        }), !d) return null;
      }), r.suggest("peer", () => Array.from(r.keys()).filter((c) => r.compoundsWith("peer", c))), o("first-letter", ["&::first-letter"]), o("first-line", ["&::first-line"]), o("marker", ["& *::marker", "&::marker", "& *::-webkit-details-marker", "&::-webkit-details-marker"]), o("selection", ["& *::selection", "&::selection"]), o("file", ["&::file-selector-button"]), o("placeholder", ["&::placeholder"]), o("backdrop", ["&::backdrop"]), o("details-content", ["&::details-content"]);
      {
        let c = function() {
          return I([P("@property", "--tw-content", [i("syntax", '"*"'), i("initial-value", '""'), i("inherits", "false")])]);
        };
        var h = c;
        r.static("before", (m) => {
          m.nodes = [q("&::before", [c(), i("content", "var(--tw-content)"), ...m.nodes])];
        }, { compounds: 0 }), r.static("after", (m) => {
          m.nodes = [q("&::after", [c(), i("content", "var(--tw-content)"), ...m.nodes])];
        }, { compounds: 0 });
      }
      o("first", ["&:first-child"]), o("last", ["&:last-child"]), o("only", ["&:only-child"]), o("odd", ["&:nth-child(odd)"]), o("even", ["&:nth-child(even)"]), o("first-of-type", ["&:first-of-type"]), o("last-of-type", ["&:last-of-type"]), o("only-of-type", ["&:only-of-type"]), o("visited", ["&:visited"]), o("target", ["&:target"]), o("open", ["&:is([open], :popover-open, :open)"]), o("default", ["&:default"]), o("checked", ["&:checked"]), o("indeterminate", ["&:indeterminate"]), o("placeholder-shown", ["&:placeholder-shown"]), o("autofill", ["&:autofill"]), o("optional", ["&:optional"]), o("required", ["&:required"]), o("valid", ["&:valid"]), o("invalid", ["&:invalid"]), o("user-valid", ["&:user-valid"]), o("user-invalid", ["&:user-invalid"]), o("in-range", ["&:in-range"]), o("out-of-range", ["&:out-of-range"]), o("read-only", ["&:read-only"]), o("empty", ["&:empty"]), o("focus-within", ["&:focus-within"]), r.static("hover", (c) => {
        c.nodes = [q("&:hover", [P("@media", "(hover: hover)", c.nodes)])];
      }), o("focus", ["&:focus"]), o("focus-visible", ["&:focus-visible"]), o("active", ["&:active"]), o("enabled", ["&:enabled"]), o("disabled", ["&:disabled"]), o("inert", ["&:is([inert], [inert] *)"]), r.compound("in", 2, (c, m) => {
        if (m.modifier) return null;
        let f = false;
        if (R([c], (d, k) => {
          if (d.kind !== "rule") return O.Continue;
          for (let g of k.path()) if (g.kind === "rule") return f = false, O.Stop;
          d.selector = `:where(${d.selector.replaceAll("&", "*")}) &`, f = true;
        }), !f) return null;
      }), r.suggest("in", () => Array.from(r.keys()).filter((c) => r.compoundsWith("in", c))), r.compound("has", 2, (c, m) => {
        if (m.modifier) return null;
        let f = false;
        if (R([c], (d, k) => {
          if (d.kind !== "rule") return O.Continue;
          for (let g of k.path()) if (g.kind === "rule") return f = false, O.Stop;
          d.selector = `&:has(${d.selector.replaceAll("&", "*")})`, f = true;
        }), !f) return null;
      }), r.suggest("has", () => Array.from(r.keys()).filter((c) => r.compoundsWith("has", c))), r.functional("aria", (c, m) => {
        if (!m.value || m.modifier) return null;
        m.value.kind === "arbitrary" ? c.nodes = [q(`&[aria-${Ar(m.value.value)}]`, c.nodes)] : c.nodes = [q(`&[aria-${m.value.value}="true"]`, c.nodes)];
      }), r.suggest("aria", () => ["busy", "checked", "disabled", "expanded", "hidden", "pressed", "readonly", "required", "selected"]), r.functional("data", (c, m) => {
        if (!m.value || m.modifier) return null;
        c.nodes = [q(`&[data-${Ar(m.value.value)}]`, c.nodes)];
      }), r.functional("nth", (c, m) => {
        if (!m.value || m.modifier || m.value.kind === "named" && !V(m.value.value)) return null;
        c.nodes = [q(`&:nth-child(${m.value.value})`, c.nodes)];
      }), r.functional("nth-last", (c, m) => {
        if (!m.value || m.modifier || m.value.kind === "named" && !V(m.value.value)) return null;
        c.nodes = [q(`&:nth-last-child(${m.value.value})`, c.nodes)];
      }), r.functional("nth-of-type", (c, m) => {
        if (!m.value || m.modifier || m.value.kind === "named" && !V(m.value.value)) return null;
        c.nodes = [q(`&:nth-of-type(${m.value.value})`, c.nodes)];
      }), r.functional("nth-last-of-type", (c, m) => {
        if (!m.value || m.modifier || m.value.kind === "named" && !V(m.value.value)) return null;
        c.nodes = [q(`&:nth-last-of-type(${m.value.value})`, c.nodes)];
      }), r.functional("supports", (c, m) => {
        if (!m.value || m.modifier) return null;
        let f = m.value.value;
        if (f === null) return null;
        if (/^[\w-]*\s*\(/.test(f)) {
          let d = f.replace(/\b(and|or|not)\b/g, " $1 ");
          c.nodes = [P("@supports", d, c.nodes)];
          return;
        }
        f.includes(":") || (f = `${f}: var(--tw)`), (f[0] !== "(" || f[f.length - 1] !== ")") && (f = `(${f})`), c.nodes = [P("@supports", f, c.nodes)];
      }, { compounds: 1 }), o("motion-safe", ["@media (prefers-reduced-motion: no-preference)"]), o("motion-reduce", ["@media (prefers-reduced-motion: reduce)"]), o("contrast-more", ["@media (prefers-contrast: more)"]), o("contrast-less", ["@media (prefers-contrast: less)"]);
      {
        let c = function(m, f, d, k) {
          if (m === f) return 0;
          let g = k.get(m);
          if (g === null) return d === "asc" ? -1 : 1;
          let b = k.get(f);
          return b === null ? d === "asc" ? 1 : -1 : Pe(g, b, d);
        };
        var p = c;
        {
          let m = e.namespace("--breakpoint"), f = new G((d) => {
            switch (d.kind) {
              case "static":
                return e.resolveValue(d.root, ["--breakpoint"]) ?? null;
              case "functional": {
                if (!d.value || d.modifier) return null;
                let k = null;
                return d.value.kind === "arbitrary" ? k = d.value.value : d.value.kind === "named" && (k = e.resolveValue(d.value.value, ["--breakpoint"])), !k || k.includes("var(") ? null : k;
              }
              case "arbitrary":
              case "compound":
                return null;
            }
          });
          r.group(() => {
            r.functional("max", (d, k) => {
              if (k.modifier) return null;
              let g = f.get(k);
              if (g === null) return null;
              d.nodes = [P("@media", `(width < ${g})`, d.nodes)];
            }, { compounds: 1 });
          }, (d, k) => c(d, k, "desc", f)), r.suggest("max", () => Array.from(m.keys()).filter((d) => d !== null)), r.group(() => {
            for (let [d, k] of e.namespace("--breakpoint")) d !== null && r.static(d, (g) => {
              g.nodes = [P("@media", `(width >= ${k})`, g.nodes)];
            }, { compounds: 1 });
            r.functional("min", (d, k) => {
              if (k.modifier) return null;
              let g = f.get(k);
              if (g === null) return null;
              d.nodes = [P("@media", `(width >= ${g})`, d.nodes)];
            }, { compounds: 1 });
          }, (d, k) => c(d, k, "asc", f)), r.suggest("min", () => Array.from(m.keys()).filter((d) => d !== null));
        }
        {
          let m = e.namespace("--container"), f = new G((d) => {
            switch (d.kind) {
              case "functional": {
                if (d.value === null) return null;
                let k = null;
                return d.value.kind === "arbitrary" ? k = d.value.value : d.value.kind === "named" && (k = e.resolveValue(d.value.value, ["--container"])), !k || k.includes("var(") ? null : k;
              }
              case "static":
              case "arbitrary":
              case "compound":
                return null;
            }
          });
          r.group(() => {
            r.functional("@max", (d, k) => {
              let g = f.get(k);
              if (g === null) return null;
              d.nodes = [P("@container", k.modifier ? `${k.modifier.value} (width < ${g})` : `(width < ${g})`, d.nodes)];
            }, { compounds: 1 });
          }, (d, k) => c(d, k, "desc", f)), r.suggest("@max", () => Array.from(m.keys()).filter((d) => d !== null)), r.group(() => {
            r.functional("@", (d, k) => {
              let g = f.get(k);
              if (g === null) return null;
              d.nodes = [P("@container", k.modifier ? `${k.modifier.value} (width >= ${g})` : `(width >= ${g})`, d.nodes)];
            }, { compounds: 1 }), r.functional("@min", (d, k) => {
              let g = f.get(k);
              if (g === null) return null;
              d.nodes = [P("@container", k.modifier ? `${k.modifier.value} (width >= ${g})` : `(width >= ${g})`, d.nodes)];
            }, { compounds: 1 });
          }, (d, k) => c(d, k, "asc", f)), r.suggest("@min", () => Array.from(m.keys()).filter((d) => d !== null)), r.suggest("@", () => Array.from(m.keys()).filter((d) => d !== null));
        }
      }
      return o("portrait", ["@media (orientation: portrait)"]), o("landscape", ["@media (orientation: landscape)"]), o("ltr", ['&:where(:dir(ltr), [dir="ltr"], [dir="ltr"] *)']), o("rtl", ['&:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *)']), o("dark", ["@media (prefers-color-scheme: dark)"]), o("starting", ["@starting-style"]), o("print", ["@media print"]), o("forced-colors", ["@media (forced-colors: active)"]), o("inverted-colors", ["@media (inverted-colors: inverted)"]), o("pointer-none", ["@media (pointer: none)"]), o("pointer-coarse", ["@media (pointer: coarse)"]), o("pointer-fine", ["@media (pointer: fine)"]), o("any-pointer-none", ["@media (any-pointer: none)"]), o("any-pointer-coarse", ["@media (any-pointer: coarse)"]), o("any-pointer-fine", ["@media (any-pointer: fine)"]), o("noscript", ["@media (scripting: none)"]), r;
    }
    function Ar(e) {
      if (e.includes("=")) {
        let [r, ...o] = _(e, "="), t = o.join("=").trim();
        if (t[0] === "'" || t[0] === '"') return e;
        if (t.length > 1) {
          let n = t[t.length - 1];
          if (t[t.length - 2] === " " && (n === "i" || n === "I" || n === "s" || n === "S")) return `${r}="${t.slice(0, -2)}" ${n}`;
        }
        return `${r}="${t}"`;
      }
      return e;
    }
    function Cr(e, r) {
      R(e, (o) => {
        if (o.kind === "at-rule" && o.name === "@slot") return O.ReplaceSkip(r);
        if (o.kind === "at-rule" && (o.name === "@keyframes" || o.name === "@property")) return Object.assign(o, I([P(o.name, o.params, o.nodes)])), O.Skip;
      });
    }
    function Xe(e, r) {
      let o = 0;
      return R(e, (t) => {
        if (t.kind !== "at-rule" || t.name !== "@variant") return;
        let n = [], s = _(t.params, ",");
        for (let [l, h] of s.entries()) {
          let p = q("&", l === s.length - 1 ? t.nodes : t.nodes.map(le)), c = _(h, ":");
          for (let m = c.length - 1; m >= 0; --m) {
            let f = c[m].trim();
            if (!f) throw new Error("Cannot use `@variant` with empty variant");
            let d = r.parseVariant(f);
            if (d === null) throw new Error(`Cannot use \`@variant\` with unknown variant: ${f}`);
            if (zt(p, d, r.variants) === null) throw new Error(`Cannot use \`@variant\` with variant: ${f}`);
          }
          n.push(p);
        }
        return o |= 32, O.Replace(n);
      }), o;
    }
    function Wi(e, r) {
      let o = fi(e), t = Ui(e), n = new G((f) => So(f, m)), s = new G((f) => Array.from(Co(f, m))), l = new G((f) => new G((d) => {
        let k = Li(d, m, f);
        try {
          $t(k.map(({ node: g }) => g), m), Xe(k.map(({ node: g }) => g), m);
        } catch {
          return [];
        }
        return k;
      })), h = new G((f) => {
        for (let d of or(f)) e.markUsedVariable(d);
      });
      function p(f) {
        let d = [];
        for (let k of f) {
          let g = true, { astNodes: b } = Je([k], m, { onInvalidCandidate() {
            g = false;
          } });
          r && R(b, ($) => ($.src ??= r, O.Continue)), b = Fe(b, m, 0), d.push(g ? b : []);
        }
        return d;
      }
      function c(f) {
        return p(f).map((d) => d.length > 0 ? ke(d) : null);
      }
      let m = { theme: e, utilities: o, variants: t, invalidCandidates: /* @__PURE__ */ new Set(), important: false, candidatesToCss: c, candidatesToAst: p, getClassOrder(f) {
        return Ei(this, f);
      }, getClassList() {
        return Ti(this);
      }, getVariants() {
        return Oi(this);
      }, parseCandidate(f) {
        return s.get(f);
      }, parseVariant(f) {
        return n.get(f);
      }, compileAstNodes(f, d = 1) {
        return l.get(d).get(f);
      }, printCandidate(f) {
        return jo(m, f);
      }, printVariant(f) {
        return mt(f);
      }, getVariantOrder() {
        let f = Array.from(n.values());
        f.sort((b, $) => this.variants.compare(b, $));
        let d = /* @__PURE__ */ new Map(), k, g = 0;
        for (let b of f) b !== null && (k !== void 0 && this.variants.compare(k, b) !== 0 && g++, d.set(b, g), k = b);
        return d;
      }, resolveThemeValue(f, d = true) {
        let k = f.lastIndexOf("/"), g = null;
        k !== -1 && (g = f.slice(k + 1).trim(), f = f.slice(0, k).trim());
        let b = e.resolve(null, [f], d ? 1 : 0) ?? void 0;
        return g && b ? ee(b, g) : b;
      }, trackUsedVariables(f) {
        h.get(f);
      }, canonicalizeCandidates(f, d) {
        return Ni(this, f, d);
      }, storage: {} };
      return m;
    }
    var Sr = ["container-type", "pointer-events", "visibility", "position", "inset", "inset-inline", "inset-block", "inset-inline-start", "inset-inline-end", "inset-block-start", "inset-block-end", "top", "right", "bottom", "left", "isolation", "z-index", "order", "grid-column", "grid-column-start", "grid-column-end", "grid-row", "grid-row-start", "grid-row-end", "float", "clear", "--tw-container-component", "margin", "margin-inline", "margin-block", "margin-inline-start", "margin-inline-end", "margin-block-start", "margin-block-end", "margin-top", "margin-right", "margin-bottom", "margin-left", "box-sizing", "display", "field-sizing", "aspect-ratio", "height", "max-height", "min-height", "width", "max-width", "min-width", "flex", "flex-shrink", "flex-grow", "flex-basis", "table-layout", "caption-side", "border-collapse", "border-spacing", "transform-origin", "translate", "--tw-translate-x", "--tw-translate-y", "--tw-translate-z", "scale", "--tw-scale-x", "--tw-scale-y", "--tw-scale-z", "rotate", "--tw-rotate-x", "--tw-rotate-y", "--tw-rotate-z", "--tw-skew-x", "--tw-skew-y", "transform", "zoom", "animation", "cursor", "touch-action", "--tw-pan-x", "--tw-pan-y", "--tw-pinch-zoom", "resize", "scroll-snap-type", "--tw-scroll-snap-strictness", "scroll-snap-align", "scroll-snap-stop", "scroll-margin", "scroll-margin-inline", "scroll-margin-block", "scroll-margin-inline-start", "scroll-margin-inline-end", "scroll-margin-block-start", "scroll-margin-block-end", "scroll-margin-top", "scroll-margin-right", "scroll-margin-bottom", "scroll-margin-left", "scroll-padding", "scroll-padding-inline", "scroll-padding-block", "scroll-padding-inline-start", "scroll-padding-inline-end", "scroll-padding-block-start", "scroll-padding-block-end", "scroll-padding-top", "scroll-padding-right", "scroll-padding-bottom", "scroll-padding-left", "scrollbar-width", "scrollbar-color", "scrollbar-gutter", "list-style-position", "list-style-type", "list-style-image", "appearance", "columns", "break-before", "break-inside", "break-after", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-template-columns", "grid-template-rows", "flex-direction", "flex-wrap", "place-content", "place-items", "align-content", "align-items", "justify-content", "justify-items", "gap", "column-gap", "row-gap", "--tw-space-x-reverse", "--tw-space-y-reverse", "divide-x-width", "divide-y-width", "--tw-divide-y-reverse", "divide-style", "divide-color", "place-self", "align-self", "justify-self", "overflow", "overflow-x", "overflow-y", "overscroll-behavior", "overscroll-behavior-x", "overscroll-behavior-y", "scroll-behavior", "border-radius", "border-start-radius", "border-end-radius", "border-top-radius", "border-right-radius", "border-bottom-radius", "border-left-radius", "border-start-start-radius", "border-start-end-radius", "border-end-end-radius", "border-end-start-radius", "border-top-left-radius", "border-top-right-radius", "border-bottom-right-radius", "border-bottom-left-radius", "border-width", "border-inline-width", "border-block-width", "border-inline-start-width", "border-inline-end-width", "border-block-start-width", "border-block-end-width", "border-top-width", "border-right-width", "border-bottom-width", "border-left-width", "border-style", "border-inline-style", "border-block-style", "border-inline-start-style", "border-inline-end-style", "border-block-start-style", "border-block-end-style", "border-top-style", "border-right-style", "border-bottom-style", "border-left-style", "border-color", "border-inline-color", "border-block-color", "border-inline-start-color", "border-inline-end-color", "border-block-start-color", "border-block-end-color", "border-top-color", "border-right-color", "border-bottom-color", "border-left-color", "background-color", "background-image", "--tw-gradient-position", "--tw-gradient-stops", "--tw-gradient-via-stops", "--tw-gradient-from", "--tw-gradient-from-position", "--tw-gradient-via", "--tw-gradient-via-position", "--tw-gradient-to", "--tw-gradient-to-position", "mask-image", "--tw-mask-top", "--tw-mask-top-from-color", "--tw-mask-top-from-position", "--tw-mask-top-to-color", "--tw-mask-top-to-position", "--tw-mask-right", "--tw-mask-right-from-color", "--tw-mask-right-from-position", "--tw-mask-right-to-color", "--tw-mask-right-to-position", "--tw-mask-bottom", "--tw-mask-bottom-from-color", "--tw-mask-bottom-from-position", "--tw-mask-bottom-to-color", "--tw-mask-bottom-to-position", "--tw-mask-left", "--tw-mask-left-from-color", "--tw-mask-left-from-position", "--tw-mask-left-to-color", "--tw-mask-left-to-position", "--tw-mask-linear", "--tw-mask-linear-position", "--tw-mask-linear-from-color", "--tw-mask-linear-from-position", "--tw-mask-linear-to-color", "--tw-mask-linear-to-position", "--tw-mask-radial", "--tw-mask-radial-shape", "--tw-mask-radial-size", "--tw-mask-radial-position", "--tw-mask-radial-from-color", "--tw-mask-radial-from-position", "--tw-mask-radial-to-color", "--tw-mask-radial-to-position", "--tw-mask-conic", "--tw-mask-conic-position", "--tw-mask-conic-from-color", "--tw-mask-conic-from-position", "--tw-mask-conic-to-color", "--tw-mask-conic-to-position", "box-decoration-break", "background-size", "background-attachment", "background-clip", "background-position", "background-repeat", "background-origin", "mask-composite", "mask-mode", "mask-type", "mask-size", "mask-clip", "mask-position", "mask-repeat", "mask-origin", "fill", "stroke", "stroke-width", "object-fit", "object-position", "padding", "padding-inline", "padding-block", "padding-inline-start", "padding-inline-end", "padding-block-start", "padding-block-end", "padding-top", "padding-right", "padding-bottom", "padding-left", "text-align", "text-indent", "vertical-align", "font-family", "font-feature-settings", "font-size", "line-height", "font-weight", "letter-spacing", "text-wrap", "overflow-wrap", "word-break", "text-overflow", "hyphens", "white-space", "tab-size", "color", "text-transform", "font-style", "font-stretch", "font-variant-numeric", "text-decoration-line", "text-decoration-color", "text-decoration-style", "text-decoration-thickness", "text-underline-offset", "-webkit-font-smoothing", "placeholder-color", "caret-color", "accent-color", "color-scheme", "opacity", "background-blend-mode", "mix-blend-mode", "box-shadow", "--tw-shadow", "--tw-shadow-color", "--tw-ring-shadow", "--tw-ring-color", "--tw-inset-shadow", "--tw-inset-shadow-color", "--tw-inset-ring-shadow", "--tw-inset-ring-color", "--tw-ring-offset-width", "--tw-ring-offset-color", "outline", "outline-width", "outline-offset", "outline-color", "--tw-blur", "--tw-brightness", "--tw-contrast", "--tw-drop-shadow", "--tw-grayscale", "--tw-hue-rotate", "--tw-invert", "--tw-saturate", "--tw-sepia", "filter", "--tw-backdrop-blur", "--tw-backdrop-brightness", "--tw-backdrop-contrast", "--tw-backdrop-grayscale", "--tw-backdrop-hue-rotate", "--tw-backdrop-invert", "--tw-backdrop-opacity", "--tw-backdrop-saturate", "--tw-backdrop-sepia", "backdrop-filter", "transition-property", "transition-behavior", "transition-delay", "transition-duration", "transition-timing-function", "will-change", "contain", "content", "forced-color-adjust"];
    function Ri(e, r) {
      let o = e.length, t = r.length, n = o < t ? o : t;
      for (let s = 0; s < n; s++) {
        let l = e.charCodeAt(s), h = r.charCodeAt(s);
        if (l >= 48 && l <= 57 && h >= 48 && h <= 57) {
          let p = s, c = s + 1, m = s, f = s + 1;
          for (l = e.charCodeAt(c); l >= 48 && l <= 57; ) l = e.charCodeAt(++c);
          for (h = r.charCodeAt(f); h >= 48 && h <= 57; ) h = r.charCodeAt(++f);
          let d = e.slice(p, c), k = r.slice(m, f), g = Number(d) - Number(k);
          if (g) return g;
          if (d < k) return -1;
          if (d > k) return 1;
          continue;
        }
        if (l !== h) return l - h;
      }
      return e.length - r.length;
    }
    function Je(e, r, { onInvalidCandidate: o, respectImportant: t } = {}) {
      let n = /* @__PURE__ */ new Map(), s = [], l = /* @__PURE__ */ new Map();
      for (let c of e) {
        if (r.invalidCandidates.has(c)) {
          o?.(c);
          continue;
        }
        let m = r.parseCandidate(c);
        if (m.length === 0) {
          o?.(c);
          continue;
        }
        l.set(c, m);
      }
      let h = 0;
      (t ?? true) && (h |= 1);
      let p = r.getVariantOrder();
      for (let [c, m] of l) {
        let f = false;
        for (let d of m) {
          let k = r.compileAstNodes(d, h);
          if (k.length !== 0) {
            f = true;
            for (let { node: g, propertySort: b } of k) {
              let $ = 0n;
              for (let T of d.variants) $ |= 1n << BigInt(p.get(T));
              n.set(g, { properties: b, variants: $, candidate: c }), s.push(g);
            }
          }
        }
        f || o?.(c);
      }
      return s.sort((c, m) => {
        let f = n.get(c), d = n.get(m);
        if (f.variants - d.variants !== 0n) return Number(f.variants - d.variants);
        let k = 0;
        for (; k < f.properties.order.length && k < d.properties.order.length && f.properties.order[k] === d.properties.order[k]; ) k += 1;
        return (f.properties.order[k] ?? 1 / 0) - (d.properties.order[k] ?? 1 / 0) || d.properties.count - f.properties.count || Ri(f.candidate, d.candidate);
      }), { astNodes: s, nodeSorting: n };
    }
    function Li(e, r, o) {
      let t = Di(e, r);
      if (t.length === 0) return [];
      let n = r.important && !!(o & 1), s = [], l = `.${Be(e.raw)}`;
      for (let h of t) {
        let p = _i(h);
        (e.important || n) && Vr(h);
        let c = { kind: "rule", selector: l, nodes: h };
        for (let m of e.variants) if (zt(c, m, r.variants) === null) return [];
        s.push({ node: c, propertySort: p });
      }
      return s;
    }
    function zt(e, r, o, t = 0) {
      if (r.kind === "arbitrary") {
        if (r.relative && t === 0) return null;
        e.nodes = [J(r.selector, e.nodes)];
        return;
      }
      let { applyFn: n } = o.get(r.root);
      if (r.kind === "compound") {
        let s = P("@slot");
        if (zt(s, r.variant, o, t + 1) === null || r.root === "not" && s.nodes.length > 1) return null;
        for (let l of s.nodes) if (l.kind !== "rule" && l.kind !== "at-rule" || n(l, r) === null) return null;
        R(s.nodes, (l) => {
          if ((l.kind === "rule" || l.kind === "at-rule") && l.nodes.length <= 0) return l.nodes = e.nodes, O.Skip;
        }), e.nodes = s.nodes;
        return;
      }
      if (n(e, r) === null) return null;
    }
    function jr(e) {
      let r = e.options?.types ?? [];
      return r.length > 1 && r.includes("any");
    }
    function Di(e, r) {
      if (e.kind === "arbitrary") {
        let l = e.value;
        return e.modifier && (l = X(l, e.modifier, r.theme)), l === null ? [] : [[i(e.property, l)]];
      }
      let o = r.utilities.get(e.root) ?? [], t = [], n = o.filter((l) => !jr(l));
      for (let l of n) {
        if (l.kind !== e.kind) continue;
        let h = l.compileFn(e);
        if (h !== void 0) {
          if (h === null) {
            if (l.options?.types?.length) return t;
            continue;
          }
          t.push(h);
        }
      }
      if (t.length > 0) return t;
      let s = o.filter((l) => jr(l));
      for (let l of s) {
        if (l.kind !== e.kind) continue;
        let h = l.compileFn(e);
        if (h !== void 0) {
          if (h === null) {
            if (l.options?.types?.length) return t;
            continue;
          }
          t.push(h);
        }
      }
      return t;
    }
    function Vr(e) {
      for (let r of e) r.kind !== "at-root" && (r.kind === "declaration" ? r.important = true : (r.kind === "rule" || r.kind === "at-rule") && Vr(r.nodes));
    }
    function _i(e) {
      let r = /* @__PURE__ */ new Set(), o = 0, t = e.slice(), n = false;
      for (; t.length > 0; ) {
        let s = t.shift();
        if (s.kind === "declaration") {
          if (s.value === void 0 || (o++, n)) continue;
          if (s.property === "--tw-sort") {
            let h = Sr.indexOf(s.value ?? "");
            if (h !== -1) {
              r.add(h), n = true;
              continue;
            }
          }
          let l = Sr.indexOf(s.property);
          l !== -1 && r.add(l);
        } else if (s.kind === "rule" || s.kind === "at-rule") for (let l of s.nodes) t.push(l);
      }
      return { order: Array.from(r).sort((s, l) => s - l), count: o };
    }
    function At(e, r) {
      let o = 0, t = J("&", e), n = /* @__PURE__ */ new Set(), s = new G(() => /* @__PURE__ */ new Set()), l = new G(() => /* @__PURE__ */ new Set());
      R([t], (f, d) => {
        if (f.kind === "at-rule") {
          if (f.name === "@keyframes") return R(f.nodes, (k) => {
            if (k.kind === "at-rule" && k.name === "@apply") throw new Error("You cannot use `@apply` inside `@keyframes`.");
          }), O.Skip;
          if (f.name === "@utility") {
            let k = f.params.replace(/-\*$/, "");
            l.get(k).add(f), R(f.nodes, (g) => {
              if (!(g.kind !== "at-rule" || g.name !== "@apply")) {
                n.add(f);
                for (let b of Kr(g, r)) s.get(f).add(b);
              }
            });
            return;
          }
          if (f.name === "@apply") {
            if (d.parent === null) return;
            o |= 1, n.add(d.parent);
            for (let k of Kr(f, r)) for (let g of d.path()) n.has(g) && s.get(g).add(k);
          }
        }
      });
      let h = /* @__PURE__ */ new Set(), p = [], c = /* @__PURE__ */ new Set();
      function m(f, d = []) {
        if (!h.has(f)) {
          if (c.has(f)) {
            let k = d[(d.indexOf(f) + 1) % d.length];
            throw f.kind === "at-rule" && f.name === "@utility" && k.kind === "at-rule" && k.name === "@utility" && R(f.nodes, (g) => {
              if (g.kind !== "at-rule" || g.name !== "@apply") return;
              let b = g.params.split(/\s+/g);
              for (let $ of b) for (let T of r.parseCandidate($)) switch (T.kind) {
                case "arbitrary":
                  break;
                case "static":
                case "functional":
                  if (k.params.replace(/-\*$/, "") === T.root) throw new Error(`You cannot \`@apply\` the \`${$}\` utility here because it creates a circular dependency.`);
                  break;
                default:
              }
            }), new Error(`Circular dependency detected:

${ke([f])}
Relies on:

${ke([k])}`);
          }
          c.add(f);
          for (let k of s.get(f)) for (let g of l.get(k)) d.push(f), m(g, d), d.pop();
          h.add(f), c.delete(f), p.push(f);
        }
      }
      for (let f of n) m(f);
      for (let f of p) "nodes" in f && R(f.nodes, (d) => {
        if (d.kind !== "at-rule" || d.name !== "@apply") return;
        let k = d.params.split(/(\s+)/g), g = {}, b = [], $ = [], T = 0;
        for (let [z, y] of k.entries()) z % 2 === 0 && (y[0] === "-" && y[1] === "-" ? $.push(y) : b.push(y), g[y] = T), T += y.length;
        if ($.length) {
          if (b.length === 0) return O.Skip;
          let z = $.join(" ");
          throw new Error(`You cannot use \`@apply\` with both mixins and utilities. Please move \`@apply ${z}\` into a separate rule.`);
        }
        if (d.nodes.length > 0 && b.length) {
          let z = b.join(" ");
          throw new Error(`The rule \`@apply ${z}\` must not have a body.`);
        }
        {
          let z = Object.keys(g), y = Je(z, r, { respectImportant: false, onInvalidCandidate: (E) => {
            if (r.theme.prefix && !E.startsWith(r.theme.prefix)) throw new Error(`Cannot apply unprefixed utility class \`${E}\`. Did you mean \`${r.theme.prefix}:${E}\`?`);
            if (r.invalidCandidates.has(E)) throw new Error(`Cannot apply utility class \`${E}\` because it has been explicitly disabled: https://tailwindcss.com/docs/detecting-classes-in-source-files#explicitly-excluding-classes`);
            let K = _(E, ":");
            if (K.length > 1) {
              let L = K.pop();
              if (r.candidatesToCss([L])[0]) {
                let B = r.candidatesToCss(K.map((Q) => `${Q}:[--tw-variant-check:1]`)), D = K.filter((Q, ae) => B[ae] === null);
                if (D.length > 0) {
                  if (D.length === 1) throw new Error(`Cannot apply utility class \`${E}\` because the ${D.map((Q) => `\`${Q}\``)} variant does not exist.`);
                  {
                    let Q = new Intl.ListFormat("en", { style: "long", type: "conjunction" });
                    throw new Error(`Cannot apply utility class \`${E}\` because the ${Q.format(D.map((ae) => `\`${ae}\``))} variants do not exist.`);
                  }
                }
              }
            }
            throw r.theme.size === 0 ? new Error(`Cannot apply unknown utility class \`${E}\`. Are you using CSS modules or similar and missing \`@reference\`? https://tailwindcss.com/docs/functions-and-directives#reference-directive`) : new Error(`Cannot apply unknown utility class \`${E}\``);
          } }), U = d.src, F = y.astNodes.map((E) => {
            let K = y.nodeSorting.get(E)?.candidate, L = K ? g[K] : void 0;
            if (E = le(E), !U || !K || L === void 0) return R([E], (D) => {
              D.src = U;
            }), E;
            let B = [U[0], U[1], U[2]];
            return B[1] += 7 + L, B[2] = B[1] + K.length, R([E], (D) => {
              D.src = B;
            }), E;
          }), W = [];
          for (let E of F) if (E.kind === "rule") for (let K of E.nodes) W.push(K);
          else W.push(E);
          return O.Replace(W);
        }
      });
      return o;
    }
    function* Kr(e, r) {
      for (let o of e.params.split(/\s+/g)) for (let t of r.parseCandidate(o)) switch (t.kind) {
        case "arbitrary":
          break;
        case "static":
        case "functional":
          yield t.root;
          break;
        default:
      }
    }
    async function Tr(e, r, o, t = 0, n = false) {
      let s = 0, l = [];
      return R(e, (h) => {
        if (h.kind === "at-rule" && (h.name === "@import" || h.name === "@reference")) {
          let p = Bi(H(h.params));
          if (p === null) return;
          h.name === "@reference" && (p.media = "reference"), s |= 2;
          let { uri: c, layer: m, media: f, supports: d } = p;
          if (c.startsWith("data:") || c.startsWith("http://") || c.startsWith("https://")) return;
          let k = $e({}, []);
          return l.push((async () => {
            if (t > 100) throw new Error(`Exceeded maximum recursion depth while resolving \`${c}\` in \`${r}\`)`);
            let g = await o(c, r), b = nt(g.content, { from: n ? g.path : void 0 });
            await Tr(b, g.base, o, t + 1, n), k.nodes = Mi(h, [$e({ base: g.base }, b)], m, f, d);
          })()), O.ReplaceSkip(k);
        }
      }), l.length > 0 && await Promise.all(l), s;
    }
    function Bi(e) {
      let r, o = null, t = null, n = null;
      for (let s = 0; s < e.length; s++) {
        let l = e[s];
        if (l.kind !== "separator") {
          if (l.kind === "word" && !r) {
            if (!l.value || l.value[0] !== '"' && l.value[0] !== "'") return null;
            r = l.value.slice(1, -1);
            continue;
          }
          if (l.kind === "function" && l.value.toLowerCase() === "url" || !r) return null;
          if ((l.kind === "word" || l.kind === "function") && l.value.toLowerCase() === "layer") {
            if (o) return null;
            if (n) throw new Error("`layer(\u2026)` in an `@import` should come before any other functions or conditions");
            "nodes" in l ? o = Y(l.nodes) : o = "";
            continue;
          }
          if (l.kind === "function" && l.value.toLowerCase() === "supports") {
            if (n) return null;
            n = Y(l.nodes);
            continue;
          }
          t = Y(e.slice(s));
          break;
        }
      }
      return r ? { uri: r, layer: o, media: t, supports: n } : null;
    }
    function Mi(e, r, o, t, n) {
      let s = r;
      if (o !== null) {
        let l = P("@layer", o, s);
        l.src = e.src, s = [l];
      }
      if (t !== null) {
        let l = P("@media", t, s);
        l.src = e.src, s = [l];
      }
      if (n !== null) {
        let l = P("@supports", n[0] === "(" ? n : `(${n})`, s);
        l.src = e.src, s = [l];
      }
      return s;
    }
    function Ve(e, r = null) {
      return Array.isArray(e) && e.length === 2 && typeof e[1] == "object" && typeof e[1] !== null ? r ? e[1][r] ?? null : e[0] : Array.isArray(e) && r === null ? e.join(", ") : typeof e == "string" && r === null ? e : null;
    }
    function Ii(e, { theme: r }, o) {
      for (let t of o) {
        let n = Ct([t]);
        n && e.theme.clearNamespace(`--${n}`, 4);
      }
      for (let [t, n] of Pi(r)) {
        if (typeof n != "string" && typeof n != "number") continue;
        if (typeof n == "string" && (n = n.replace(/<alpha-value>/g, "1")), t[0] === "opacity" && (typeof n == "number" || typeof n == "string")) {
          let l = typeof n == "string" ? parseFloat(n) : n;
          l >= 0 && l <= 1 && (n = l * 100 + "%");
        }
        let s = Ct(t);
        s && e.theme.add(`--${s}`, "" + n, 7);
      }
      if (Object.hasOwn(r, "fontFamily")) {
        let t = 5;
        {
          let n = Ve(r.fontFamily.sans);
          n && e.theme.hasDefault("--font-sans") && (e.theme.add("--default-font-family", n, t), e.theme.add("--default-font-feature-settings", Ve(r.fontFamily.sans, "fontFeatureSettings") ?? "normal", t), e.theme.add("--default-font-variation-settings", Ve(r.fontFamily.sans, "fontVariationSettings") ?? "normal", t));
        }
        {
          let n = Ve(r.fontFamily.mono);
          n && e.theme.hasDefault("--font-mono") && (e.theme.add("--default-mono-font-family", n, t), e.theme.add("--default-mono-font-feature-settings", Ve(r.fontFamily.mono, "fontFeatureSettings") ?? "normal", t), e.theme.add("--default-mono-font-variation-settings", Ve(r.fontFamily.mono, "fontVariationSettings") ?? "normal", t));
        }
      }
      return r;
    }
    function Pi(e) {
      let r = [];
      return Or(e, [], (o, t) => {
        if (Zi(o)) return r.push([t, o]), 1;
        if (Gi(o)) {
          r.push([t, o[0]]);
          for (let n of Reflect.ownKeys(o[1])) r.push([[...t, `-${n}`], o[1][n]]);
          return 1;
        }
        if (Array.isArray(o) && o.every((n) => typeof n == "string")) return t[0] === "fontSize" ? (r.push([t, o[0]]), o.length >= 2 && r.push([[...t, "-line-height"], o[1]])) : r.push([t, o.join(", ")]), 1;
      }), r;
    }
    var qi = { borderWidth: "border-width", outlineWidth: "outline-width", ringColor: "ring-color", ringWidth: "ring-width", transitionDuration: "transition-duration", transitionTimingFunction: "transition-timing-function" }, Hi = { animation: "animate", aspectRatio: "aspect", borderRadius: "radius", boxShadow: "shadow", colors: "color", containers: "container", fontFamily: "font", fontSize: "text", letterSpacing: "tracking", lineHeight: "leading", maxWidth: "container", screens: "breakpoint", transitionTimingFunction: "ease" }, Yi = /^[a-zA-Z0-9-_%/.]+$/;
    function Ct(e) {
      let r = qi[e[0]];
      if (r && e[1] === "DEFAULT") return `default-${r}`;
      if (e[0] === "container") return null;
      for (let t of e) if (!Yi.test(t)) return null;
      let o = Hi[e[0]];
      return o && (e = e.slice(), e[0] = o), e.map((t, n, s) => t === "1" && n !== s.length - 1 ? "" : t).map((t, n) => (t = t.replaceAll(".", "_"), (n === 0 || t.startsWith("-") || t === "lineHeight") && (t = t.replace(/([a-z])([A-Z])/g, (s, l, h) => `${l}-${h.toLowerCase()}`)), t)).filter((t, n) => t !== "DEFAULT" || n !== e.length - 1).join("-");
    }
    function Zi(e) {
      return typeof e == "number" || typeof e == "string";
    }
    function Gi(e) {
      if (!Array.isArray(e) || e.length !== 2 || typeof e[0] != "string" && typeof e[0] != "number" || e[1] === void 0 || e[1] === null || typeof e[1] != "object") return false;
      for (let r of Reflect.ownKeys(e[1])) if (typeof r != "string" || typeof e[1][r] != "string" && typeof e[1][r] != "number") return false;
      return true;
    }
    function Or(e, r = [], o) {
      for (let t of Reflect.ownKeys(e)) {
        let n = e[t];
        if (n == null) continue;
        let s = [...r, t], l = o(n, s) ?? 0;
        if (l !== 1 && (l === 2 || !(!Array.isArray(n) && typeof n != "object") && Or(n, s, o) === 2)) return 2;
      }
    }
    function Xi(e) {
      return { kind: "combinator", value: e };
    }
    function St(e) {
      return { kind: "complex", nodes: e };
    }
    function Nr(e) {
      return { kind: "compound", nodes: e };
    }
    function Ji(e, r) {
      return { kind: "function", value: e, nodes: r };
    }
    function Qi(e) {
      return { kind: "list", nodes: e };
    }
    function be(e) {
      return { kind: "selector", value: e };
    }
    function ea(e) {
      return { kind: "value", value: e };
    }
    function Ke(e, r = false) {
      let o = "";
      for (let t of e) switch (t.kind) {
        case "selector":
        case "value": {
          o += t.value;
          break;
        }
        case "combinator": {
          r || t.value === " " ? o += t.value : o += ` ${t.value} `;
          break;
        }
        case "function": {
          o += `${t.value}(${Ke(t.nodes, r)})`;
          break;
        }
        case "complex":
        case "compound": {
          o += Ke(t.nodes, r);
          break;
        }
        case "list": {
          o += t.nodes.map((n) => Ke([n], r)).join(r ? "," : ", ");
          break;
        }
      }
      return o;
    }
    var Er = 92, ta = 93, Fr = 41, Ur = 58, Wr = 44, ra = 34, oa = 46, Rr = 62, jt = 10, ia = 35, Lr = 91, Dr = 40, _r = 43, aa = 39, Vt = 32, Kt = 9, Br = 126, na = 38, la = 42;
    function Tt(e) {
      e = e.replaceAll(`\r
`, `
`);
      let r = [], o = r, t = false, n = [], s = null, l = "", h;
      function p(m = o) {
        return m.length === 1 ? m[0] : t ? St(m) : Nr(m);
      }
      function c(m) {
        let f = o[o.length - 1];
        f?.kind === "compound" ? f.nodes.push(m) : f && f.kind !== "list" && f.kind !== "combinator" ? o[o.length - 1] = Nr([f, m]) : o.push(m);
      }
      for (let m = 0; m < e.length; m++) {
        let f = e.charCodeAt(m);
        switch (f) {
          case Wr: {
            for (l.length > 0 && (c(be(l)), l = ""); m + 1 < e.length && (h = e.charCodeAt(m + 1), !(h !== jt && h !== Vt && h !== Kt)); m++) ;
            if (s) s.nodes.push(p()), o = [], t = false;
            else {
              let d = o.splice(0), k = p(d), g = Qi([k]);
              o.push(g), s = g, o = [], t = false;
            }
            break;
          }
          case Rr:
          case jt:
          case Vt:
          case _r:
          case Kt:
          case Br: {
            l.length > 0 && (c(be(l)), l = "");
            let d = m, k = m + 1;
            for (; k < e.length && (h = e.charCodeAt(k), !(h !== Rr && h !== jt && h !== Vt && h !== _r && h !== Kt && h !== Br)); k++) ;
            m = k - 1;
            let g = e.slice(d, k).trim();
            if (g === "" && (o.length === 0 || k >= e.length || e.charCodeAt(k) === Wr)) break;
            o.push(Xi(g === "" ? " " : g)), t = true;
            break;
          }
          case Dr: {
            let d = Ji(l, []);
            if (l = "", d.value !== ":not" && d.value !== ":where" && d.value !== ":has" && d.value !== ":is") {
              let k = m + 1, g = 0;
              for (let $ = m + 1; $ < e.length; $++) {
                if (h = e.charCodeAt($), h === Dr) {
                  g++;
                  continue;
                }
                if (h === Fr) {
                  if (g === 0) {
                    m = $;
                    break;
                  }
                  g--;
                }
              }
              let b = m;
              d.nodes.push(ea(e.slice(k, b))), l = "", m = b, c(d);
              break;
            }
            c(d), n.push({ target: o, currentList: s, containsCombinator: t }), o = d.nodes, t = false, s = null;
            break;
          }
          case Fr: {
            l.length > 0 && (c(be(l)), l = ""), s ? s.nodes.push(p()) : t && o.splice(0, o.length, St(o.splice(0)));
            let d = n.pop();
            o = d?.target ?? r, s = d?.currentList ?? null, t = d?.containsCombinator ?? false;
            break;
          }
          case oa:
          case Ur:
          case ia: {
            if (f === Ur && l === ":") {
              l += e[m];
              break;
            }
            l.length > 0 && c(be(l)), l = e[m];
            break;
          }
          case Lr: {
            l.length > 0 && c(be(l)), l = "";
            let d = m, k = 0;
            for (let g = m + 1; g < e.length; g++) {
              if (h = e.charCodeAt(g), h === Lr) {
                k++;
                continue;
              }
              if (h === ta) {
                if (k === 0) {
                  m = g;
                  break;
                }
                k--;
              }
            }
            l += e.slice(d, m + 1);
            break;
          }
          case aa:
          case ra: {
            let d = m;
            for (let k = m + 1; k < e.length; k++) if (h = e.charCodeAt(k), h === Er) k += 1;
            else if (h === f) {
              m = k;
              break;
            }
            l += e.slice(d, m + 1);
            break;
          }
          case na:
          case la: {
            l.length > 0 && (c(be(l)), l = ""), c(be(e[m]));
            break;
          }
          case Er: {
            l += e[m] + e[m + 1], m += 1;
            break;
          }
          default:
            l += e[m];
        }
      }
      return l.length > 0 && c(be(l)), s ? s.nodes.push(p()) : t && o.splice(0, o.length, St(o.splice(0))), r;
    }
    function Mr(e) {
      let r = [];
      for (let o of _(e, ".")) {
        if (!o.includes("[")) {
          r.push(o);
          continue;
        }
        let t = 0;
        for (; ; ) {
          let n = o.indexOf("[", t), s = o.indexOf("]", n);
          if (n === -1 || s === -1) break;
          n > t && r.push(o.slice(t, n)), r.push(o.slice(n + 1, s)), t = s + 1;
        }
        t <= o.length - 1 && r.push(o.slice(t));
      }
      return r;
    }
    function Re(e) {
      if (Object.prototype.toString.call(e) !== "[object Object]") return false;
      let r = Object.getPrototypeOf(e);
      return r === null || Object.getPrototypeOf(r) === null;
    }
    function Ot(e, r, o, t = []) {
      for (let n of r) if (n != null) for (let s of Reflect.ownKeys(n)) {
        t.push(s);
        let l = o(e[s], n[s], t);
        l !== void 0 ? e[s] = l : !Re(e[s]) || !Re(n[s]) ? e[s] = n[s] : e[s] = Ot({}, [e[s], n[s]], o, t), t.pop();
      }
      return e;
    }
    function Ir(e, r, o) {
      return function(t, n) {
        let s = t.lastIndexOf("/"), l = null;
        s !== -1 && (l = t.slice(s + 1).trim(), t = t.slice(0, s).trim());
        let h = (() => {
          let p = Mr(t), [c, m] = sa(e.theme, p), f = o(Pr(r() ?? {}, p) ?? null);
          if (typeof f == "string" && (f = f.replace("<alpha-value>", "1")), typeof c != "object") return typeof m != "object" && m & 4 ? f ?? c : c;
          if (f !== null && typeof f == "object" && !Array.isArray(f)) {
            let d = Ot({}, [f], (k, g) => g);
            if (c === null && Object.hasOwn(f, "__CSS_VALUES__")) {
              let k = {};
              for (let g in f.__CSS_VALUES__) k[g] = f[g], delete d[g];
              c = k;
            }
            for (let k in c) k !== "__CSS_VALUES__" && (f?.__CSS_VALUES__?.[k] & 4 && Pr(d, k.split("-")) !== void 0 || (d[Ne(k)] = c[k]));
            return d;
          }
          if (Array.isArray(c) && Array.isArray(m) && Array.isArray(f)) {
            let d = c[0], k = c[1];
            m[0] & 4 && (d = f[0] ?? d);
            for (let g of Object.keys(k)) m[1][g] & 4 && (k[g] = f[1][g] ?? k[g]);
            return [d, k];
          }
          return c ?? f;
        })();
        return l && typeof h == "string" && (h = ee(h, l)), h ?? n;
      };
    }
    function sa(e, r) {
      if (r.length === 1 && r[0].startsWith("--")) return [e.get([r[0]]), e.getOptions(r[0])];
      let o = Ct(r), t = /* @__PURE__ */ new Map(), n = new G(() => /* @__PURE__ */ new Map()), s = e.namespace(`--${o}`);
      if (s.size === 0) return [null, 0];
      let l = /* @__PURE__ */ new Map();
      for (let [m, f] of s) {
        if (!m || !m.includes("--")) {
          t.set(m, f), l.set(m, e.getOptions(m ? `--${o}-${m}` : `--${o}`));
          continue;
        }
        let d = m.indexOf("--"), k = m.slice(0, d), g = m.slice(d + 2);
        g = g.replace(/-([a-z])/g, (b, $) => $.toUpperCase()), n.get(k === "" ? null : k).set(g, [f, e.getOptions(`--${o}${m}`)]);
      }
      let h = e.getOptions(`--${o}`);
      for (let [m, f] of n) {
        let d = t.get(m);
        if (typeof d != "string") continue;
        let k = {}, g = {};
        for (let [b, [$, T]] of f) k[b] = $, g[b] = T;
        t.set(m, [d, k]), l.set(m, [h, g]);
      }
      let p = {}, c = {};
      for (let [m, f] of t) qr(p, [m ?? "DEFAULT"], f);
      for (let [m, f] of l) qr(c, [m ?? "DEFAULT"], f);
      return r[r.length - 1] === "DEFAULT" ? [p?.DEFAULT ?? null, c.DEFAULT ?? 0] : "DEFAULT" in p && Object.keys(p).length === 1 ? [p.DEFAULT, c.DEFAULT ?? 0] : (p.__CSS_VALUES__ = c, [p, c]);
    }
    function Pr(e, r) {
      for (let o = 0; o < r.length; ++o) {
        let t = r[o];
        if (e == null || typeof e != "object" || !Object.hasOwn(e, t)) {
          if (r[o + 1] === void 0) return;
          r[o + 1] = `${t}-${r[o + 1]}`;
          continue;
        }
        e = e[t];
      }
      return e;
    }
    function qr(e, r, o) {
      for (let t of r.slice(0, -1)) e[t] === void 0 && (e[t] = {}), e = e[t];
      e[r[r.length - 1]] = o;
    }
    var Hr = /^[a-z@][a-zA-Z0-9/%._-]*$/;
    function Yr({ designSystem: e, ast: r, resolvedConfig: o, featuresRef: t, referenceMode: n, src: s }) {
      let l = { addBase(h) {
        if (n) return;
        let p = ve(h);
        t.current |= $t(p, e), t.current |= Xe(p, e);
        let c = P("@layer", "base", p);
        R([c], (m) => {
          m.src = s;
        }), r.push(c);
      }, addVariant(h, p) {
        if (!zr.test(h)) throw new Error(`\`addVariant('${h}')\` defines an invalid variant name. Variants should only contain alphanumeric, dashes, or underscore characters and start with a lowercase letter or number.`);
        if (typeof p == "string") {
          if (p.includes(":merge(")) return;
        } else if (Array.isArray(p)) {
          if (p.some((m) => m.includes(":merge("))) return;
        } else if (typeof p == "object") {
          let m = function(f, d) {
            return Object.entries(f).some(([k, g]) => k.includes(d) || typeof g == "object" && m(g, d));
          };
          var c = m;
          if (m(p, ":merge(")) return;
        }
        typeof p == "string" || Array.isArray(p) ? e.variants.static(h, (m) => {
          m.nodes = Zr(p, m.nodes);
        }, { compounds: We(typeof p == "string" ? [p] : p) }) : typeof p == "object" && e.variants.fromAst(h, ve(p), e);
      }, matchVariant(h, p, c) {
        function m(d, k, g) {
          let b = p(d, { modifier: k?.value ?? null });
          return Zr(b, g);
        }
        try {
          let d = p("a", { modifier: null });
          if (typeof d == "string" && d.includes(":merge(") || Array.isArray(d) && d.some((k) => k.includes(":merge("))) return;
        } catch {
        }
        let f = Object.keys(c?.values ?? {});
        e.variants.group(() => {
          e.variants.functional(h, (d, k) => {
            if (!k.value) {
              if (c?.values && "DEFAULT" in c.values) {
                d.nodes = m(c.values.DEFAULT, k.modifier, d.nodes);
                return;
              }
              return null;
            }
            if (k.value.kind === "arbitrary") d.nodes = m(k.value.value, k.modifier, d.nodes);
            else if (k.value.kind === "named" && c?.values) {
              if (!Object.hasOwn(c.values, k.value.value)) return null;
              let g = c.values[k.value.value];
              if (typeof g != "string") return null;
              d.nodes = m(g, k.modifier, d.nodes);
            } else return null;
          });
        }, (d, k) => {
          if (d.kind !== "functional" || k.kind !== "functional") return 0;
          let g = d.value ? d.value.value : "DEFAULT", b = k.value ? k.value.value : "DEFAULT", $ = (c?.values && Object.hasOwn(c.values, g) ? c.values[g] : void 0) ?? g, T = (c?.values && Object.hasOwn(c.values, b) ? c.values[b] : void 0) ?? b;
          if (c && typeof c.sort == "function") return c.sort({ value: $, modifier: d.modifier?.value ?? null }, { value: T, modifier: k.modifier?.value ?? null });
          let z = f.indexOf(g), y = f.indexOf(b);
          return z = z === -1 ? f.length : z, y = y === -1 ? f.length : y, z !== y ? z - y : $ < T ? -1 : 1;
        }), e.variants.suggest(h, () => Object.keys(c?.values ?? {}).filter((d) => d !== "DEFAULT"));
      }, addUtilities(h) {
        h = Array.isArray(h) ? h : [h];
        let p = h.flatMap((m) => Object.entries(m));
        p = p.flatMap(([m, f]) => _(m, ",").map((d) => [d.trim(), f]));
        let c = new G(() => []);
        for (let [m, f] of p) {
          if (m.startsWith("@keyframes ")) {
            if (!n) {
              let g = J(m, ve(f));
              R([g], (b) => {
                b.src = s;
              }), r.push(g);
            }
            continue;
          }
          let d = Tt(m), k = false;
          if (R(d, (g) => {
            if (g.kind === "selector" && g.value[0] === "." && Hr.test(g.value.slice(1))) {
              let b = g.value;
              g.value = "&";
              let $ = Ke(d), T = b.slice(1), z = $ === "&" ? ve(f) : [J($, ve(f))];
              c.get(T).push(...z), k = true, g.value = b;
              return;
            }
            if (g.kind === "function" && g.value === ":not") return O.Skip;
          }), !k) throw new Error(`\`addUtilities({ '${m}' : \u2026 })\` defines an invalid utility selector. Utilities must be a single class name and start with a lowercase letter, eg. \`.scrollbar-none\`.`);
        }
        for (let [m, f] of c) e.theme.prefix && R(f, (d) => {
          if (d.kind === "rule") {
            let k = Tt(d.selector);
            R(k, (g) => {
              g.kind === "selector" && g.value[0] === "." && (g.value = `.${e.theme.prefix}\\:${g.value.slice(1)}`);
            }), d.selector = Ke(k);
          }
        }), e.utilities.static(m, (d) => {
          let k = f.map(le);
          return Gr(k, m, d.raw), t.current |= At(k, e), k;
        });
      }, matchUtilities(h, p) {
        let c = p?.type ? Array.isArray(p?.type) ? p.type : [p.type] : ["any"];
        for (let [f, d] of Object.entries(h)) {
          let k = function({ negative: g }) {
            return (b) => {
              if (b.value?.kind === "arbitrary" && c.length > 0 && !c.includes("any") && (b.value.dataType && !c.includes(b.value.dataType) || !b.value.dataType && !Z(b.value.value, c))) return;
              let $ = c.includes("color"), T = null, z = false;
              {
                let F = p?.values ?? {};
                $ && (F = Object.assign({ inherit: "inherit", transparent: "transparent", current: "currentcolor" }, F)), b.value ? b.value.kind === "arbitrary" ? T = b.value.value : b.value.fraction && Object.hasOwn(F, b.value.fraction) ? (T = F[b.value.fraction], z = true) : Object.hasOwn(F, b.value.value) ? T = F[b.value.value] : F.__BARE_VALUE__ && (T = F.__BARE_VALUE__(b.value) ?? null, z = (b.value.fraction !== null && T?.includes("/")) ?? false) : T = F.DEFAULT ?? null;
              }
              if (T === null) return;
              let y;
              {
                let F = p?.modifiers ?? null;
                b.modifier ? F === "any" || b.modifier.kind === "arbitrary" ? y = b.modifier.value : F && Object.hasOwn(F, b.modifier.value) ? y = F[b.modifier.value] : $ && !Number.isNaN(Number(b.modifier.value)) ? y = `${b.modifier.value}%` : y = null : y = null;
              }
              if (b.modifier && y === null && !z) return b.value?.kind === "arbitrary" ? null : void 0;
              $ && y !== null && (T = ee(T, y)), g && (T = `calc(${T} * -1)`);
              let U = ve(d(T, { modifier: y }));
              return Gr(U, f, b.raw), t.current |= At(U, e), U;
            };
          };
          var m = k;
          if (!Hr.test(f)) throw new Error(`\`matchUtilities({ '${f}' : \u2026 })\` defines an invalid utility name. Utilities should be alphanumeric and start with a lowercase letter, eg. \`scrollbar\`.`);
          p?.supportsNegativeValues && e.utilities.functional(`-${f}`, k({ negative: true }), { types: c }), e.utilities.functional(f, k({ negative: false }), { types: c }), e.utilities.suggest(f, () => {
            let g = p?.values ?? {}, b = new Set(Object.keys(g));
            b.delete("__BARE_VALUE__"), b.delete("__CSS_VALUES__"), b.has("DEFAULT") && (b.delete("DEFAULT"), b.add(null));
            let $ = p?.modifiers ?? {}, T = $ === "any" ? [] : Object.keys($);
            return [{ supportsNegative: p?.supportsNegativeValues ?? false, values: Array.from(b), modifiers: T }];
          });
        }
      }, addComponents(h, p) {
        this.addUtilities(h, p);
      }, matchComponents(h, p) {
        this.matchUtilities(h, p);
      }, theme: Ir(e, () => o.theme ?? {}, (h) => h), prefix(h) {
        return h;
      }, config(h, p) {
        let c = o;
        if (!h) return c;
        let m = Mr(h);
        for (let f = 0; f < m.length; ++f) {
          let d = m[f];
          if (c[d] === void 0) return p;
          c = c[d];
        }
        return c ?? p;
      } };
      return l.addComponents = l.addComponents.bind(l), l.matchComponents = l.matchComponents.bind(l), l;
    }
    function ve(e) {
      let r = [];
      e = Array.isArray(e) ? e : [e];
      let o = e.flatMap((t) => Object.entries(t));
      for (let [t, n] of o) if (n != null && n !== false) if (typeof n != "object") {
        if (!t.startsWith("--")) {
          if (n === "@slot") {
            r.push(J(t, [P("@slot")]));
            continue;
          }
          t = t.replace(/([A-Z])/g, "-$1").toLowerCase();
        }
        r.push(i(t, String(n)));
      } else if (Array.isArray(n)) for (let s of n) typeof s == "string" ? r.push(i(t, s)) : r.push(J(t, ve(s)));
      else r.push(J(t, ve(n)));
      return r;
    }
    function Zr(e, r) {
      return (typeof e == "string" ? [e] : e).flatMap((o) => {
        if (o.trim().endsWith("}")) {
          let t = o.replace("}", "{@slot}}"), n = nt(t);
          return Cr(n, r), n;
        } else return J(o, r);
      });
    }
    function Gr(e, r, o) {
      R(e, (t) => {
        if (t.kind === "rule") {
          let n = Tt(t.selector);
          R(n, (s) => {
            s.kind === "selector" && s.value === `.${r}` && (s.value = `.${Be(o)}`);
          }), t.selector = Ke(n);
        }
      });
    }
    function ca(e, r) {
      for (let o of ua(r)) e.theme.addKeyframes(o);
    }
    function ua(e) {
      let r = [];
      if ("keyframes" in e.theme) for (let [o, t] of Object.entries(e.theme.keyframes)) r.push(P("@keyframes", o, ve(t)));
      return r;
    }
    var Xr = { inherit: "inherit", current: "currentcolor", transparent: "transparent", black: "#000", white: "#fff", slate: { 50: "oklch(98.4% 0.003 247.858)", 100: "oklch(96.8% 0.007 247.896)", 200: "oklch(92.9% 0.013 255.508)", 300: "oklch(86.9% 0.022 252.894)", 400: "oklch(70.4% 0.04 256.788)", 500: "oklch(55.4% 0.046 257.417)", 600: "oklch(44.6% 0.043 257.281)", 700: "oklch(37.2% 0.044 257.287)", 800: "oklch(27.9% 0.041 260.031)", 900: "oklch(20.8% 0.042 265.755)", 950: "oklch(12.9% 0.042 264.695)" }, gray: { 50: "oklch(98.5% 0.002 247.839)", 100: "oklch(96.7% 0.003 264.542)", 200: "oklch(92.8% 0.006 264.531)", 300: "oklch(87.2% 0.01 258.338)", 400: "oklch(70.7% 0.022 261.325)", 500: "oklch(55.1% 0.027 264.364)", 600: "oklch(44.6% 0.03 256.802)", 700: "oklch(37.3% 0.034 259.733)", 800: "oklch(27.8% 0.033 256.848)", 900: "oklch(21% 0.034 264.665)", 950: "oklch(13% 0.028 261.692)" }, zinc: { 50: "oklch(98.5% 0 0)", 100: "oklch(96.7% 0.001 286.375)", 200: "oklch(92% 0.004 286.32)", 300: "oklch(87.1% 0.006 286.286)", 400: "oklch(70.5% 0.015 286.067)", 500: "oklch(55.2% 0.016 285.938)", 600: "oklch(44.2% 0.017 285.786)", 700: "oklch(37% 0.013 285.805)", 800: "oklch(27.4% 0.006 286.033)", 900: "oklch(21% 0.006 285.885)", 950: "oklch(14.1% 0.005 285.823)" }, neutral: { 50: "oklch(98.5% 0 0)", 100: "oklch(97% 0 0)", 200: "oklch(92.2% 0 0)", 300: "oklch(87% 0 0)", 400: "oklch(70.8% 0 0)", 500: "oklch(55.6% 0 0)", 600: "oklch(43.9% 0 0)", 700: "oklch(37.1% 0 0)", 800: "oklch(26.9% 0 0)", 900: "oklch(20.5% 0 0)", 950: "oklch(14.5% 0 0)" }, stone: { 50: "oklch(98.5% 0.001 106.423)", 100: "oklch(97% 0.001 106.424)", 200: "oklch(92.3% 0.003 48.717)", 300: "oklch(86.9% 0.005 56.366)", 400: "oklch(70.9% 0.01 56.259)", 500: "oklch(55.3% 0.013 58.071)", 600: "oklch(44.4% 0.011 73.639)", 700: "oklch(37.4% 0.01 67.558)", 800: "oklch(26.8% 0.007 34.298)", 900: "oklch(21.6% 0.006 56.043)", 950: "oklch(14.7% 0.004 49.25)" }, mauve: { 50: "oklch(98.5% 0 0)", 100: "oklch(96% 0.003 325.6)", 200: "oklch(92.2% 0.005 325.62)", 300: "oklch(86.5% 0.012 325.68)", 400: "oklch(71.1% 0.019 323.02)", 500: "oklch(54.2% 0.034 322.5)", 600: "oklch(43.5% 0.029 321.78)", 700: "oklch(36.4% 0.029 323.89)", 800: "oklch(26.3% 0.024 320.12)", 900: "oklch(21.2% 0.019 322.12)", 950: "oklch(14.5% 0.008 326)" }, olive: { 50: "oklch(98.8% 0.003 106.5)", 100: "oklch(96.6% 0.005 106.5)", 200: "oklch(93% 0.007 106.5)", 300: "oklch(88% 0.011 106.6)", 400: "oklch(73.7% 0.021 106.9)", 500: "oklch(58% 0.031 107.3)", 600: "oklch(46.6% 0.025 107.3)", 700: "oklch(39.4% 0.023 107.4)", 800: "oklch(28.6% 0.016 107.4)", 900: "oklch(22.8% 0.013 107.4)", 950: "oklch(15.3% 0.006 107.1)" }, mist: { 50: "oklch(98.7% 0.002 197.1)", 100: "oklch(96.3% 0.002 197.1)", 200: "oklch(92.5% 0.005 214.3)", 300: "oklch(87.2% 0.007 219.6)", 400: "oklch(72.3% 0.014 214.4)", 500: "oklch(56% 0.021 213.5)", 600: "oklch(45% 0.017 213.2)", 700: "oklch(37.8% 0.015 216)", 800: "oklch(27.5% 0.011 216.9)", 900: "oklch(21.8% 0.008 223.9)", 950: "oklch(14.8% 0.004 228.8)" }, taupe: { 50: "oklch(98.6% 0.002 67.8)", 100: "oklch(96% 0.002 17.2)", 200: "oklch(92.2% 0.005 34.3)", 300: "oklch(86.8% 0.007 39.5)", 400: "oklch(71.4% 0.014 41.2)", 500: "oklch(54.7% 0.021 43.1)", 600: "oklch(43.8% 0.017 39.3)", 700: "oklch(36.7% 0.016 35.7)", 800: "oklch(26.8% 0.011 36.5)", 900: "oklch(21.4% 0.009 43.1)", 950: "oklch(14.7% 0.004 49.3)" }, red: { 50: "oklch(97.1% 0.013 17.38)", 100: "oklch(93.6% 0.032 17.717)", 200: "oklch(88.5% 0.062 18.334)", 300: "oklch(80.8% 0.114 19.571)", 400: "oklch(70.4% 0.191 22.216)", 500: "oklch(63.7% 0.237 25.331)", 600: "oklch(57.7% 0.245 27.325)", 700: "oklch(50.5% 0.213 27.518)", 800: "oklch(44.4% 0.177 26.899)", 900: "oklch(39.6% 0.141 25.723)", 950: "oklch(25.8% 0.092 26.042)" }, orange: { 50: "oklch(98% 0.016 73.684)", 100: "oklch(95.4% 0.038 75.164)", 200: "oklch(90.1% 0.076 70.697)", 300: "oklch(83.7% 0.128 66.29)", 400: "oklch(75% 0.183 55.934)", 500: "oklch(70.5% 0.213 47.604)", 600: "oklch(64.6% 0.222 41.116)", 700: "oklch(55.3% 0.195 38.402)", 800: "oklch(47% 0.157 37.304)", 900: "oklch(40.8% 0.123 38.172)", 950: "oklch(26.6% 0.079 36.259)" }, amber: { 50: "oklch(98.7% 0.022 95.277)", 100: "oklch(96.2% 0.059 95.617)", 200: "oklch(92.4% 0.12 95.746)", 300: "oklch(87.9% 0.169 91.605)", 400: "oklch(82.8% 0.189 84.429)", 500: "oklch(76.9% 0.188 70.08)", 600: "oklch(66.6% 0.179 58.318)", 700: "oklch(55.5% 0.163 48.998)", 800: "oklch(47.3% 0.137 46.201)", 900: "oklch(41.4% 0.112 45.904)", 950: "oklch(27.9% 0.077 45.635)" }, yellow: { 50: "oklch(98.7% 0.026 102.212)", 100: "oklch(97.3% 0.071 103.193)", 200: "oklch(94.5% 0.129 101.54)", 300: "oklch(90.5% 0.182 98.111)", 400: "oklch(85.2% 0.199 91.936)", 500: "oklch(79.5% 0.184 86.047)", 600: "oklch(68.1% 0.162 75.834)", 700: "oklch(55.4% 0.135 66.442)", 800: "oklch(47.6% 0.114 61.907)", 900: "oklch(42.1% 0.095 57.708)", 950: "oklch(28.6% 0.066 53.813)" }, lime: { 50: "oklch(98.6% 0.031 120.757)", 100: "oklch(96.7% 0.067 122.328)", 200: "oklch(93.8% 0.127 124.321)", 300: "oklch(89.7% 0.196 126.665)", 400: "oklch(84.1% 0.238 128.85)", 500: "oklch(76.8% 0.233 130.85)", 600: "oklch(64.8% 0.2 131.684)", 700: "oklch(53.2% 0.157 131.589)", 800: "oklch(45.3% 0.124 130.933)", 900: "oklch(40.5% 0.101 131.063)", 950: "oklch(27.4% 0.072 132.109)" }, green: { 50: "oklch(98.2% 0.018 155.826)", 100: "oklch(96.2% 0.044 156.743)", 200: "oklch(92.5% 0.084 155.995)", 300: "oklch(87.1% 0.15 154.449)", 400: "oklch(79.2% 0.209 151.711)", 500: "oklch(72.3% 0.219 149.579)", 600: "oklch(62.7% 0.194 149.214)", 700: "oklch(52.7% 0.154 150.069)", 800: "oklch(44.8% 0.119 151.328)", 900: "oklch(39.3% 0.095 152.535)", 950: "oklch(26.6% 0.065 152.934)" }, emerald: { 50: "oklch(97.9% 0.021 166.113)", 100: "oklch(95% 0.052 163.051)", 200: "oklch(90.5% 0.093 164.15)", 300: "oklch(84.5% 0.143 164.978)", 400: "oklch(76.5% 0.177 163.223)", 500: "oklch(69.6% 0.17 162.48)", 600: "oklch(59.6% 0.145 163.225)", 700: "oklch(50.8% 0.118 165.612)", 800: "oklch(43.2% 0.095 166.913)", 900: "oklch(37.8% 0.077 168.94)", 950: "oklch(26.2% 0.051 172.552)" }, teal: { 50: "oklch(98.4% 0.014 180.72)", 100: "oklch(95.3% 0.051 180.801)", 200: "oklch(91% 0.096 180.426)", 300: "oklch(85.5% 0.138 181.071)", 400: "oklch(77.7% 0.152 181.912)", 500: "oklch(70.4% 0.14 182.503)", 600: "oklch(60% 0.118 184.704)", 700: "oklch(51.1% 0.096 186.391)", 800: "oklch(43.7% 0.078 188.216)", 900: "oklch(38.6% 0.063 188.416)", 950: "oklch(27.7% 0.046 192.524)" }, cyan: { 50: "oklch(98.4% 0.019 200.873)", 100: "oklch(95.6% 0.045 203.388)", 200: "oklch(91.7% 0.08 205.041)", 300: "oklch(86.5% 0.127 207.078)", 400: "oklch(78.9% 0.154 211.53)", 500: "oklch(71.5% 0.143 215.221)", 600: "oklch(60.9% 0.126 221.723)", 700: "oklch(52% 0.105 223.128)", 800: "oklch(45% 0.085 224.283)", 900: "oklch(39.8% 0.07 227.392)", 950: "oklch(30.2% 0.056 229.695)" }, sky: { 50: "oklch(97.7% 0.013 236.62)", 100: "oklch(95.1% 0.026 236.824)", 200: "oklch(90.1% 0.058 230.902)", 300: "oklch(82.8% 0.111 230.318)", 400: "oklch(74.6% 0.16 232.661)", 500: "oklch(68.5% 0.169 237.323)", 600: "oklch(58.8% 0.158 241.966)", 700: "oklch(50% 0.134 242.749)", 800: "oklch(44.3% 0.11 240.79)", 900: "oklch(39.1% 0.09 240.876)", 950: "oklch(29.3% 0.066 243.157)" }, blue: { 50: "oklch(97% 0.014 254.604)", 100: "oklch(93.2% 0.032 255.585)", 200: "oklch(88.2% 0.059 254.128)", 300: "oklch(80.9% 0.105 251.813)", 400: "oklch(70.7% 0.165 254.624)", 500: "oklch(62.3% 0.214 259.815)", 600: "oklch(54.6% 0.245 262.881)", 700: "oklch(48.8% 0.243 264.376)", 800: "oklch(42.4% 0.199 265.638)", 900: "oklch(37.9% 0.146 265.522)", 950: "oklch(28.2% 0.091 267.935)" }, indigo: { 50: "oklch(96.2% 0.018 272.314)", 100: "oklch(93% 0.034 272.788)", 200: "oklch(87% 0.065 274.039)", 300: "oklch(78.5% 0.115 274.713)", 400: "oklch(67.3% 0.182 276.935)", 500: "oklch(58.5% 0.233 277.117)", 600: "oklch(51.1% 0.262 276.966)", 700: "oklch(45.7% 0.24 277.023)", 800: "oklch(39.8% 0.195 277.366)", 900: "oklch(35.9% 0.144 278.697)", 950: "oklch(25.7% 0.09 281.288)" }, violet: { 50: "oklch(96.9% 0.016 293.756)", 100: "oklch(94.3% 0.029 294.588)", 200: "oklch(89.4% 0.057 293.283)", 300: "oklch(81.1% 0.111 293.571)", 400: "oklch(70.2% 0.183 293.541)", 500: "oklch(60.6% 0.25 292.717)", 600: "oklch(54.1% 0.281 293.009)", 700: "oklch(49.1% 0.27 292.581)", 800: "oklch(43.2% 0.232 292.759)", 900: "oklch(38% 0.189 293.745)", 950: "oklch(28.3% 0.141 291.089)" }, purple: { 50: "oklch(97.7% 0.014 308.299)", 100: "oklch(94.6% 0.033 307.174)", 200: "oklch(90.2% 0.063 306.703)", 300: "oklch(82.7% 0.119 306.383)", 400: "oklch(71.4% 0.203 305.504)", 500: "oklch(62.7% 0.265 303.9)", 600: "oklch(55.8% 0.288 302.321)", 700: "oklch(49.6% 0.265 301.924)", 800: "oklch(43.8% 0.218 303.724)", 900: "oklch(38.1% 0.176 304.987)", 950: "oklch(29.1% 0.149 302.717)" }, fuchsia: { 50: "oklch(97.7% 0.017 320.058)", 100: "oklch(95.2% 0.037 318.852)", 200: "oklch(90.3% 0.076 319.62)", 300: "oklch(83.3% 0.145 321.434)", 400: "oklch(74% 0.238 322.16)", 500: "oklch(66.7% 0.295 322.15)", 600: "oklch(59.1% 0.293 322.896)", 700: "oklch(51.8% 0.253 323.949)", 800: "oklch(45.2% 0.211 324.591)", 900: "oklch(40.1% 0.17 325.612)", 950: "oklch(29.3% 0.136 325.661)" }, pink: { 50: "oklch(97.1% 0.014 343.198)", 100: "oklch(94.8% 0.028 342.258)", 200: "oklch(89.9% 0.061 343.231)", 300: "oklch(82.3% 0.12 346.018)", 400: "oklch(71.8% 0.202 349.761)", 500: "oklch(65.6% 0.241 354.308)", 600: "oklch(59.2% 0.249 0.584)", 700: "oklch(52.5% 0.223 3.958)", 800: "oklch(45.9% 0.187 3.815)", 900: "oklch(40.8% 0.153 2.432)", 950: "oklch(28.4% 0.109 3.907)" }, rose: { 50: "oklch(96.9% 0.015 12.422)", 100: "oklch(94.1% 0.03 12.58)", 200: "oklch(89.2% 0.058 10.001)", 300: "oklch(81% 0.117 11.638)", 400: "oklch(71.2% 0.194 13.428)", 500: "oklch(64.5% 0.246 16.439)", 600: "oklch(58.6% 0.253 17.585)", 700: "oklch(51.4% 0.222 16.935)", 800: "oklch(45.5% 0.188 13.697)", 900: "oklch(41% 0.159 10.272)", 950: "oklch(27.1% 0.105 12.094)" } };
    function Ae(e) {
      return { __BARE_VALUE__: e };
    }
    var ue = Ae((e) => {
      if (V(e.value)) return e.value;
    }), ie = Ae((e) => {
      if (V(e.value)) return `${e.value}%`;
    }), ye = Ae((e) => {
      if (V(e.value)) return `${e.value}px`;
    }), Jr = Ae((e) => {
      if (V(e.value)) return `${e.value}ms`;
    }), Qe = Ae((e) => {
      if (V(e.value)) return `${e.value}deg`;
    }), da = Ae((e) => {
      if (e.fraction === null) return;
      let [r, o] = _(e.fraction, "/");
      if (!(!V(r) || !V(o))) return e.fraction;
    }), Qr = Ae((e) => {
      if (V(Number(e.value))) return `repeat(${e.value}, minmax(0, 1fr))`;
    }), fa = { accentColor: ({ theme: e }) => e("colors"), animation: { none: "none", spin: "spin 1s linear infinite", ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite", pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite", bounce: "bounce 1s infinite" }, aria: { busy: 'busy="true"', checked: 'checked="true"', disabled: 'disabled="true"', expanded: 'expanded="true"', hidden: 'hidden="true"', pressed: 'pressed="true"', readonly: 'readonly="true"', required: 'required="true"', selected: 'selected="true"' }, aspectRatio: { auto: "auto", square: "1 / 1", video: "16 / 9", ...da }, backdropBlur: ({ theme: e }) => e("blur"), backdropBrightness: ({ theme: e }) => ({ ...e("brightness"), ...ie }), backdropContrast: ({ theme: e }) => ({ ...e("contrast"), ...ie }), backdropGrayscale: ({ theme: e }) => ({ ...e("grayscale"), ...ie }), backdropHueRotate: ({ theme: e }) => ({ ...e("hueRotate"), ...Qe }), backdropInvert: ({ theme: e }) => ({ ...e("invert"), ...ie }), backdropOpacity: ({ theme: e }) => ({ ...e("opacity"), ...ie }), backdropSaturate: ({ theme: e }) => ({ ...e("saturate"), ...ie }), backdropSepia: ({ theme: e }) => ({ ...e("sepia"), ...ie }), backgroundColor: ({ theme: e }) => e("colors"), backgroundImage: { none: "none", "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))", "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))", "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))", "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))", "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))", "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))", "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))", "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))" }, backgroundOpacity: ({ theme: e }) => e("opacity"), backgroundPosition: { bottom: "bottom", center: "center", left: "left", "left-bottom": "left bottom", "left-top": "left top", right: "right", "right-bottom": "right bottom", "right-top": "right top", top: "top" }, backgroundSize: { auto: "auto", cover: "cover", contain: "contain" }, blur: { 0: "0", none: "", sm: "4px", DEFAULT: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "40px", "3xl": "64px" }, borderColor: ({ theme: e }) => ({ DEFAULT: "currentcolor", ...e("colors") }), borderOpacity: ({ theme: e }) => e("opacity"), borderRadius: { none: "0px", sm: "0.125rem", DEFAULT: "0.25rem", md: "0.375rem", lg: "0.5rem", xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem", full: "9999px" }, borderSpacing: ({ theme: e }) => e("spacing"), borderWidth: { DEFAULT: "1px", 0: "0px", 2: "2px", 4: "4px", 8: "8px", ...ye }, boxShadow: { sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)", DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)", inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)", none: "none" }, boxShadowColor: ({ theme: e }) => e("colors"), brightness: { 0: "0", 50: ".5", 75: ".75", 90: ".9", 95: ".95", 100: "1", 105: "1.05", 110: "1.1", 125: "1.25", 150: "1.5", 200: "2", ...ie }, caretColor: ({ theme: e }) => e("colors"), colors: () => ({ ...Xr }), columns: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", "3xs": "16rem", "2xs": "18rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", ...ue }, container: {}, content: { none: "none" }, contrast: { 0: "0", 50: ".5", 75: ".75", 100: "1", 125: "1.25", 150: "1.5", 200: "2", ...ie }, cursor: { auto: "auto", default: "default", pointer: "pointer", wait: "wait", text: "text", move: "move", help: "help", "not-allowed": "not-allowed", none: "none", "context-menu": "context-menu", progress: "progress", cell: "cell", crosshair: "crosshair", "vertical-text": "vertical-text", alias: "alias", copy: "copy", "no-drop": "no-drop", grab: "grab", grabbing: "grabbing", "all-scroll": "all-scroll", "col-resize": "col-resize", "row-resize": "row-resize", "n-resize": "n-resize", "e-resize": "e-resize", "s-resize": "s-resize", "w-resize": "w-resize", "ne-resize": "ne-resize", "nw-resize": "nw-resize", "se-resize": "se-resize", "sw-resize": "sw-resize", "ew-resize": "ew-resize", "ns-resize": "ns-resize", "nesw-resize": "nesw-resize", "nwse-resize": "nwse-resize", "zoom-in": "zoom-in", "zoom-out": "zoom-out" }, divideColor: ({ theme: e }) => e("borderColor"), divideOpacity: ({ theme: e }) => e("borderOpacity"), divideWidth: ({ theme: e }) => ({ ...e("borderWidth"), ...ye }), dropShadow: { sm: "0 1px 1px rgb(0 0 0 / 0.05)", DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"], md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"], lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"], xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"], "2xl": "0 25px 25px rgb(0 0 0 / 0.15)", none: "0 0 #0000" }, fill: ({ theme: e }) => e("colors"), flex: { 1: "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" }, flexBasis: ({ theme: e }) => ({ auto: "auto", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", full: "100%", ...e("spacing") }), flexGrow: { 0: "0", DEFAULT: "1", ...ue }, flexShrink: { 0: "0", DEFAULT: "1", ...ue }, fontFamily: { sans: ["ui-sans-serif", "system-ui", "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'], serif: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"], mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", '"Liberation Mono"', '"Courier New"', "monospace"] }, fontSize: { xs: ["0.75rem", { lineHeight: "1rem" }], sm: ["0.875rem", { lineHeight: "1.25rem" }], base: ["1rem", { lineHeight: "1.5rem" }], lg: ["1.125rem", { lineHeight: "1.75rem" }], xl: ["1.25rem", { lineHeight: "1.75rem" }], "2xl": ["1.5rem", { lineHeight: "2rem" }], "3xl": ["1.875rem", { lineHeight: "2.25rem" }], "4xl": ["2.25rem", { lineHeight: "2.5rem" }], "5xl": ["3rem", { lineHeight: "1" }], "6xl": ["3.75rem", { lineHeight: "1" }], "7xl": ["4.5rem", { lineHeight: "1" }], "8xl": ["6rem", { lineHeight: "1" }], "9xl": ["8rem", { lineHeight: "1" }] }, fontWeight: { thin: "100", extralight: "200", light: "300", normal: "400", medium: "500", semibold: "600", bold: "700", extrabold: "800", black: "900" }, gap: ({ theme: e }) => e("spacing"), gradientColorStops: ({ theme: e }) => e("colors"), gradientColorStopPositions: { "0%": "0%", "5%": "5%", "10%": "10%", "15%": "15%", "20%": "20%", "25%": "25%", "30%": "30%", "35%": "35%", "40%": "40%", "45%": "45%", "50%": "50%", "55%": "55%", "60%": "60%", "65%": "65%", "70%": "70%", "75%": "75%", "80%": "80%", "85%": "85%", "90%": "90%", "95%": "95%", "100%": "100%", ...ie }, grayscale: { 0: "0", DEFAULT: "100%", ...ie }, gridAutoColumns: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0, 1fr)" }, gridAutoRows: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0, 1fr)" }, gridColumn: { auto: "auto", "span-1": "span 1 / span 1", "span-2": "span 2 / span 2", "span-3": "span 3 / span 3", "span-4": "span 4 / span 4", "span-5": "span 5 / span 5", "span-6": "span 6 / span 6", "span-7": "span 7 / span 7", "span-8": "span 8 / span 8", "span-9": "span 9 / span 9", "span-10": "span 10 / span 10", "span-11": "span 11 / span 11", "span-12": "span 12 / span 12", "span-full": "1 / -1" }, gridColumnEnd: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13", ...ue }, gridColumnStart: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13", ...ue }, gridRow: { auto: "auto", "span-1": "span 1 / span 1", "span-2": "span 2 / span 2", "span-3": "span 3 / span 3", "span-4": "span 4 / span 4", "span-5": "span 5 / span 5", "span-6": "span 6 / span 6", "span-7": "span 7 / span 7", "span-8": "span 8 / span 8", "span-9": "span 9 / span 9", "span-10": "span 10 / span 10", "span-11": "span 11 / span 11", "span-12": "span 12 / span 12", "span-full": "1 / -1" }, gridRowEnd: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13", ...ue }, gridRowStart: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13", ...ue }, gridTemplateColumns: { none: "none", subgrid: "subgrid", 1: "repeat(1, minmax(0, 1fr))", 2: "repeat(2, minmax(0, 1fr))", 3: "repeat(3, minmax(0, 1fr))", 4: "repeat(4, minmax(0, 1fr))", 5: "repeat(5, minmax(0, 1fr))", 6: "repeat(6, minmax(0, 1fr))", 7: "repeat(7, minmax(0, 1fr))", 8: "repeat(8, minmax(0, 1fr))", 9: "repeat(9, minmax(0, 1fr))", 10: "repeat(10, minmax(0, 1fr))", 11: "repeat(11, minmax(0, 1fr))", 12: "repeat(12, minmax(0, 1fr))", ...Qr }, gridTemplateRows: { none: "none", subgrid: "subgrid", 1: "repeat(1, minmax(0, 1fr))", 2: "repeat(2, minmax(0, 1fr))", 3: "repeat(3, minmax(0, 1fr))", 4: "repeat(4, minmax(0, 1fr))", 5: "repeat(5, minmax(0, 1fr))", 6: "repeat(6, minmax(0, 1fr))", 7: "repeat(7, minmax(0, 1fr))", 8: "repeat(8, minmax(0, 1fr))", 9: "repeat(9, minmax(0, 1fr))", 10: "repeat(10, minmax(0, 1fr))", 11: "repeat(11, minmax(0, 1fr))", 12: "repeat(12, minmax(0, 1fr))", ...Qr }, height: ({ theme: e }) => ({ auto: "auto", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", full: "100%", screen: "100vh", svh: "100svh", lvh: "100lvh", dvh: "100dvh", min: "min-content", max: "max-content", fit: "fit-content", ...e("spacing") }), hueRotate: { 0: "0deg", 15: "15deg", 30: "30deg", 60: "60deg", 90: "90deg", 180: "180deg", ...Qe }, inset: ({ theme: e }) => ({ auto: "auto", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", full: "100%", ...e("spacing") }), invert: { 0: "0", DEFAULT: "100%", ...ie }, keyframes: { spin: { to: { transform: "rotate(360deg)" } }, ping: { "75%, 100%": { transform: "scale(2)", opacity: "0" } }, pulse: { "50%": { opacity: ".5" } }, bounce: { "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" }, "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" } } }, letterSpacing: { tighter: "-0.05em", tight: "-0.025em", normal: "0em", wide: "0.025em", wider: "0.05em", widest: "0.1em" }, lineHeight: { none: "1", tight: "1.25", snug: "1.375", normal: "1.5", relaxed: "1.625", loose: "2", 3: ".75rem", 4: "1rem", 5: "1.25rem", 6: "1.5rem", 7: "1.75rem", 8: "2rem", 9: "2.25rem", 10: "2.5rem" }, listStyleType: { none: "none", disc: "disc", decimal: "decimal" }, listStyleImage: { none: "none" }, margin: ({ theme: e }) => ({ auto: "auto", ...e("spacing") }), lineClamp: { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", ...ue }, maxHeight: ({ theme: e }) => ({ none: "none", full: "100%", screen: "100vh", svh: "100svh", lvh: "100lvh", dvh: "100dvh", min: "min-content", max: "max-content", fit: "fit-content", ...e("spacing") }), maxWidth: ({ theme: e }) => ({ none: "none", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", prose: "65ch", ...e("spacing") }), minHeight: ({ theme: e }) => ({ full: "100%", screen: "100vh", svh: "100svh", lvh: "100lvh", dvh: "100dvh", min: "min-content", max: "max-content", fit: "fit-content", ...e("spacing") }), minWidth: ({ theme: e }) => ({ full: "100%", min: "min-content", max: "max-content", fit: "fit-content", ...e("spacing") }), objectPosition: { bottom: "bottom", center: "center", left: "left", "left-bottom": "left bottom", "left-top": "left top", right: "right", "right-bottom": "right bottom", "right-top": "right top", top: "top" }, opacity: { 0: "0", 5: "0.05", 10: "0.1", 15: "0.15", 20: "0.2", 25: "0.25", 30: "0.3", 35: "0.35", 40: "0.4", 45: "0.45", 50: "0.5", 55: "0.55", 60: "0.6", 65: "0.65", 70: "0.7", 75: "0.75", 80: "0.8", 85: "0.85", 90: "0.9", 95: "0.95", 100: "1", ...ie }, order: { first: "-9999", last: "9999", none: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", ...ue }, outlineColor: ({ theme: e }) => e("colors"), outlineOffset: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ...ye }, outlineWidth: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ...ye }, padding: ({ theme: e }) => e("spacing"), placeholderColor: ({ theme: e }) => e("colors"), placeholderOpacity: ({ theme: e }) => e("opacity"), ringColor: ({ theme: e }) => ({ DEFAULT: "currentcolor", ...e("colors") }), ringOffsetColor: ({ theme: e }) => e("colors"), ringOffsetWidth: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ...ye }, ringOpacity: ({ theme: e }) => ({ DEFAULT: "0.5", ...e("opacity") }), ringWidth: { DEFAULT: "3px", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ...ye }, rotate: { 0: "0deg", 1: "1deg", 2: "2deg", 3: "3deg", 6: "6deg", 12: "12deg", 45: "45deg", 90: "90deg", 180: "180deg", ...Qe }, saturate: { 0: "0", 50: ".5", 100: "1", 150: "1.5", 200: "2", ...ie }, scale: { 0: "0", 50: ".5", 75: ".75", 90: ".9", 95: ".95", 100: "1", 105: "1.05", 110: "1.1", 125: "1.25", 150: "1.5", ...ie }, screens: { sm: "40rem", md: "48rem", lg: "64rem", xl: "80rem", "2xl": "96rem" }, scrollMargin: ({ theme: e }) => e("spacing"), scrollPadding: ({ theme: e }) => e("spacing"), sepia: { 0: "0", DEFAULT: "100%", ...ie }, skew: { 0: "0deg", 1: "1deg", 2: "2deg", 3: "3deg", 6: "6deg", 12: "12deg", ...Qe }, space: ({ theme: e }) => e("spacing"), spacing: { px: "1px", 0: "0px", 0.5: "0.125rem", 1: "0.25rem", 1.5: "0.375rem", 2: "0.5rem", 2.5: "0.625rem", 3: "0.75rem", 3.5: "0.875rem", 4: "1rem", 5: "1.25rem", 6: "1.5rem", 7: "1.75rem", 8: "2rem", 9: "2.25rem", 10: "2.5rem", 11: "2.75rem", 12: "3rem", 14: "3.5rem", 16: "4rem", 20: "5rem", 24: "6rem", 28: "7rem", 32: "8rem", 36: "9rem", 40: "10rem", 44: "11rem", 48: "12rem", 52: "13rem", 56: "14rem", 60: "15rem", 64: "16rem", 72: "18rem", 80: "20rem", 96: "24rem" }, stroke: ({ theme: e }) => ({ none: "none", ...e("colors") }), strokeWidth: { 0: "0", 1: "1", 2: "2", ...ue }, supports: {}, data: {}, textColor: ({ theme: e }) => e("colors"), textDecorationColor: ({ theme: e }) => e("colors"), textDecorationThickness: { auto: "auto", "from-font": "from-font", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ...ye }, textIndent: ({ theme: e }) => e("spacing"), textOpacity: ({ theme: e }) => e("opacity"), textUnderlineOffset: { auto: "auto", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ...ye }, transformOrigin: { center: "center", top: "top", "top-right": "top right", right: "right", "bottom-right": "bottom right", bottom: "bottom", "bottom-left": "bottom left", left: "left", "top-left": "top left" }, transitionDelay: { 0: "0s", 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms", ...Jr }, transitionDuration: { DEFAULT: "150ms", 0: "0s", 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms", ...Jr }, transitionProperty: { none: "none", all: "all", DEFAULT: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter", colors: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke", opacity: "opacity", shadow: "box-shadow", transform: "transform" }, transitionTimingFunction: { DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)", linear: "linear", in: "cubic-bezier(0.4, 0, 1, 1)", out: "cubic-bezier(0, 0, 0.2, 1)", "in-out": "cubic-bezier(0.4, 0, 0.2, 1)" }, translate: ({ theme: e }) => ({ "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", full: "100%", ...e("spacing") }), size: ({ theme: e }) => ({ auto: "auto", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", ...e("spacing") }), width: ({ theme: e }) => ({ auto: "auto", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", full: "100%", screen: "100vw", svw: "100svw", lvw: "100lvw", dvw: "100dvw", min: "min-content", max: "max-content", fit: "fit-content", ...e("spacing") }), willChange: { auto: "auto", scroll: "scroll-position", contents: "contents", transform: "transform" }, zIndex: { auto: "auto", 0: "0", 10: "10", 20: "20", 30: "30", 40: "40", 50: "50", ...ue } };
    function pa(e) {
      return { theme: { ...fa, colors: ({ theme: r }) => r("color", {}), extend: { fontSize: ({ theme: r }) => ({ ...r("text", {}) }), boxShadow: ({ theme: r }) => ({ ...r("shadow", {}) }), animation: ({ theme: r }) => ({ ...r("animate", {}) }), aspectRatio: ({ theme: r }) => ({ ...r("aspect", {}) }), borderRadius: ({ theme: r }) => ({ ...r("radius", {}) }), screens: ({ theme: r }) => ({ ...r("breakpoint", {}) }), letterSpacing: ({ theme: r }) => ({ ...r("tracking", {}) }), lineHeight: ({ theme: r }) => ({ ...r("leading", {}) }), transitionDuration: { DEFAULT: e.get(["--default-transition-duration"]) ?? null }, transitionTimingFunction: { DEFAULT: e.get(["--default-transition-timing-function"]) ?? null }, maxWidth: ({ theme: r }) => ({ ...r("container", {}) }) } } };
    }
    var ha = { blocklist: [], future: {}, experimental: {}, prefix: "", important: false, darkMode: null, theme: {}, plugins: [], content: { files: [] } };
    function eo(e, r) {
      let o = { design: e, configs: [], plugins: [], content: { files: [] }, theme: {}, extend: {}, result: structuredClone(ha) };
      for (let n of r) Nt(o, n);
      for (let n of o.configs) "darkMode" in n && n.darkMode !== void 0 && (o.result.darkMode = n.darkMode ?? null), "prefix" in n && n.prefix !== void 0 && (o.result.prefix = n.prefix ?? ""), "blocklist" in n && n.blocklist !== void 0 && (o.result.blocklist = n.blocklist ?? []), "important" in n && n.important !== void 0 && (o.result.important = n.important ?? false);
      let t = ga(o);
      return { resolvedConfig: { ...o.result, content: o.content, theme: o.theme, plugins: o.plugins }, replacedThemeKeys: t };
    }
    function ma(e, r) {
      if (Array.isArray(e) && Re(e[0])) return e.concat(r);
      if (Array.isArray(r) && Re(r[0]) && Re(e)) return [e, ...r];
      if (Array.isArray(r)) return r;
    }
    function Nt(e, { config: r, base: o, path: t, reference: n, src: s }) {
      let l = [];
      for (let c of r.plugins ?? []) "__isOptionsFunction" in c ? l.push({ ...c(), reference: n, src: s }) : "handler" in c ? l.push({ ...c, reference: n, src: s }) : l.push({ handler: c, reference: n, src: s });
      if (Array.isArray(r.presets) && r.presets.length === 0) throw new Error("Error in the config file/plugin/preset. An empty preset (`preset: []`) is not currently supported.");
      for (let c of r.presets ?? []) Nt(e, { path: t, base: o, config: c, reference: n, src: s });
      for (let c of l) e.plugins.push(c), c.config && Nt(e, { path: t, base: o, config: c.config, reference: !!c.reference, src: c.src ?? s });
      let h = r.content ?? [], p = Array.isArray(h) ? h : h.files;
      for (let c of p) e.content.files.push(typeof c == "object" ? c : { base: o, pattern: c });
      e.configs.push(r);
    }
    function ga(e) {
      let r = /* @__PURE__ */ new Set(), o = Ir(e.design, () => e.theme, n), t = Object.assign(o, { theme: o, colors: Xr });
      function n(s) {
        return typeof s == "function" ? s(t) ?? null : s ?? null;
      }
      for (let s of e.configs) {
        let l = s.theme ?? {}, h = l.extend ?? {};
        for (let p in l) p !== "extend" && r.add(p);
        Object.assign(e.theme, l);
        for (let p in h) e.extend[p] ??= [], e.extend[p].push(h[p]);
      }
      delete e.theme.extend;
      for (let s in e.extend) {
        let l = [e.theme[s], ...e.extend[s]];
        e.theme[s] = () => {
          let h = l.map(n);
          return Ot({}, h, ma);
        };
      }
      for (let s in e.theme) e.theme[s] = n(e.theme[s]);
      if (e.theme.screens && typeof e.theme.screens == "object") for (let s of Object.keys(e.theme.screens)) {
        let l = e.theme.screens[s];
        l && typeof l == "object" && ("raw" in l || "max" in l || "min" in l && (e.theme.screens[s] = l.min));
      }
      return r;
    }
    function va(e, r) {
      let o = e.theme.container || {};
      if (typeof o != "object" || o === null) return;
      let t = ka(o, r);
      t.length !== 0 && r.utilities.static("container", () => t.map(le));
    }
    function ka({ center: e, padding: r, screens: o }, t) {
      let n = [], s = null;
      if (e && n.push(i("margin-inline", "auto")), (typeof r == "string" || typeof r == "object" && r !== null && "DEFAULT" in r) && n.push(i("padding-inline", typeof r == "string" ? r : r.DEFAULT)), typeof o == "object" && o !== null) {
        s = /* @__PURE__ */ new Map();
        let l = Array.from(t.theme.namespace("--breakpoint").entries());
        if (l.sort((h, p) => Pe(h[1], p[1], "asc")), l.length > 0) {
          let [h] = l[0];
          n.push(P("@media", `(width >= --theme(--breakpoint-${h}))`, [i("max-width", "none")]));
        }
        for (let [h, p] of Object.entries(o)) {
          if (typeof p == "object") if ("min" in p) p = p.min;
          else continue;
          s.set(h, P("@media", `(width >= ${p})`, [i("max-width", p)]));
        }
      }
      if (typeof r == "object" && r !== null) {
        let l = Object.entries(r).filter(([h]) => h !== "DEFAULT").map(([h, p]) => [h, t.theme.resolveValue(h, ["--breakpoint"]), p]).filter(Boolean);
        l.sort((h, p) => Pe(h[1], p[1], "asc"));
        for (let [h, , p] of l) if (s && s.has(h)) s.get(h).nodes.push(i("padding-inline", p));
        else {
          if (s) continue;
          n.push(P("@media", `(width >= theme(--breakpoint-${h}))`, [i("padding-inline", p)]));
        }
      }
      if (s) for (let [, l] of s) n.push(l);
      return n;
    }
    function wa({ addVariant: e, config: r }) {
      let o = r("darkMode", null), [t, n = ".dark"] = Array.isArray(o) ? o : [o];
      if (t === "variant") {
        let s;
        if (Array.isArray(n) || typeof n == "function" ? s = n : typeof n == "string" && (s = [n]), Array.isArray(s)) for (let l of s) l === ".dark" ? (t = false, console.warn('When using `variant` for `darkMode`, you must provide a selector.\nExample: `darkMode: ["variant", ".your-selector &"]`')) : l.includes("&") || (t = false, console.warn('When using `variant` for `darkMode`, your selector must contain `&`.\nExample `darkMode: ["variant", ".your-selector &"]`'));
        n = s;
      }
      t === null || (t === "selector" ? e("dark", `&:where(${n}, ${n} *)`) : t === "media" ? e("dark", "@media (prefers-color-scheme: dark)") : t === "variant" ? e("dark", n) : t === "class" && e("dark", `&:is(${n} *)`));
    }
    function ba(e) {
      for (let [o, t] of [["t", "top"], ["tr", "top right"], ["r", "right"], ["br", "bottom right"], ["b", "bottom"], ["bl", "bottom left"], ["l", "left"], ["tl", "top left"]]) e.utilities.suggest(`bg-gradient-to-${o}`, () => []), e.utilities.static(`bg-gradient-to-${o}`, () => [i("--tw-gradient-position", `to ${t} in oklab`), i("background-image", "linear-gradient(var(--tw-gradient-stops))")]);
      e.utilities.suggest("bg-left-top", () => []), e.utilities.static("bg-left-top", () => [i("background-position", "left top")]), e.utilities.suggest("bg-right-top", () => []), e.utilities.static("bg-right-top", () => [i("background-position", "right top")]), e.utilities.suggest("bg-left-bottom", () => []), e.utilities.static("bg-left-bottom", () => [i("background-position", "left bottom")]), e.utilities.suggest("bg-right-bottom", () => []), e.utilities.static("bg-right-bottom", () => [i("background-position", "right bottom")]), e.utilities.suggest("object-left-top", () => []), e.utilities.static("object-left-top", () => [i("object-position", "left top")]), e.utilities.suggest("object-right-top", () => []), e.utilities.static("object-right-top", () => [i("object-position", "right top")]), e.utilities.suggest("object-left-bottom", () => []), e.utilities.static("object-left-bottom", () => [i("object-position", "left bottom")]), e.utilities.suggest("object-right-bottom", () => []), e.utilities.static("object-right-bottom", () => [i("object-position", "right bottom")]), e.utilities.suggest("max-w-screen", () => []), e.utilities.functional("max-w-screen", (o) => {
        if (!o.value || o.value.kind === "arbitrary") return;
        let t = e.theme.resolve(o.value.value, ["--breakpoint"]);
        if (t) return [i("max-width", t)];
      }), e.utilities.suggest("overflow-ellipsis", () => []), e.utilities.static("overflow-ellipsis", () => [i("text-overflow", "ellipsis")]), e.utilities.suggest("decoration-slice", () => []), e.utilities.static("decoration-slice", () => [i("-webkit-box-decoration-break", "slice"), i("box-decoration-break", "slice")]), e.utilities.suggest("decoration-clone", () => []), e.utilities.static("decoration-clone", () => [i("-webkit-box-decoration-break", "clone"), i("box-decoration-break", "clone")]), e.utilities.suggest("flex-shrink", () => []), e.utilities.functional("flex-shrink", (o) => {
        if (!o.modifier) {
          if (!o.value) return [i("flex-shrink", "1")];
          if (o.value.kind === "arbitrary") return [i("flex-shrink", o.value.value)];
          if (V(o.value.value)) return [i("flex-shrink", o.value.value)];
        }
      }), e.utilities.suggest("flex-grow", () => []), e.utilities.functional("flex-grow", (o) => {
        if (!o.modifier) {
          if (!o.value) return [i("flex-grow", "1")];
          if (o.value.kind === "arbitrary") return [i("flex-grow", o.value.value)];
          if (V(o.value.value)) return [i("flex-grow", o.value.value)];
        }
      }), e.utilities.suggest("order-none", () => []), e.utilities.static("order-none", () => [i("order", "0")]), e.utilities.suggest("break-words", () => []), e.utilities.static("break-words", () => [i("overflow-wrap", "break-word")]);
      for (let [o, t] of [["start", "inset-inline-start"], ["end", "inset-inline-end"]]) {
        let n = function({ negative: s }) {
          return (l) => {
            if (l.value === null) return;
            if (l.value.kind === "arbitrary") {
              if (l.modifier) return;
              let p = l.value.value;
              return [i(t, s ? `calc(${p} * -1)` : p)];
            }
            let h = e.theme.resolve(l.value.fraction ?? l.value.value, ["--inset", "--spacing"]);
            if (h === null && l.value.fraction) {
              let [p, c] = _(l.value.fraction, "/");
              if (!V(p) || !V(c)) return;
              h = `calc(${l.value.fraction} * 100%)`;
            }
            if (h === null && s) {
              let p = e.theme.resolve(null, ["--spacing"]);
              if (p && pe(l.value.value) && (h = `calc(${p} * -${l.value.value})`, h !== null)) return [i(t, h)];
            }
            if (h === null) {
              let p = e.theme.resolve(null, ["--spacing"]);
              p && pe(l.value.value) && (h = `calc(${p} * ${l.value.value})`);
            }
            if (h !== null) return [i(t, s ? `calc(${h} * -1)` : h)];
          };
        };
        var r = n;
        e.utilities.static(`${o}-auto`, () => [i(t, "auto")]), e.utilities.static(`${o}-full`, () => [i(t, "100%")]), e.utilities.static(`-${o}-full`, () => [i(t, "-100%")]), e.utilities.static(`${o}-px`, () => [i(t, "1px")]), e.utilities.static(`-${o}-px`, () => [i(t, "-1px")]), e.utilities.functional(`-${o}`, n({ negative: true })), e.utilities.functional(o, n({ negative: false }));
      }
    }
    function ya(e, r) {
      let o = e.theme.screens || {}, t = r.variants.get("min")?.order ?? 0, n = [];
      for (let [l, h] of Object.entries(o)) {
        let p = function(k) {
          r.variants.static(l, (g) => {
            g.nodes = [P("@media", d, g.nodes)];
          }, { order: k });
        };
        var s = p;
        let c = r.variants.get(l), m = r.theme.resolveValue(l, ["--breakpoint"]);
        if (c && m && !r.theme.hasDefault(`--breakpoint-${l}`)) continue;
        let f = true;
        typeof h == "string" && (f = false);
        let d = xa(h);
        f ? n.push(p) : p(t);
      }
      if (n.length !== 0) {
        for (let [, l] of r.variants.variants) l.order > t && (l.order += n.length);
        r.variants.compareFns = new Map(Array.from(r.variants.compareFns).map(([l, h]) => (l > t && (l += n.length), [l, h])));
        for (let [l, h] of n.entries()) h(t + l + 1);
      }
    }
    function xa(e) {
      return (Array.isArray(e) ? e : [e]).map((r) => typeof r == "string" ? { min: r } : r && typeof r == "object" ? r : null).map((r) => {
        if (r === null) return null;
        if ("raw" in r) return r.raw;
        let o = "";
        return r.max !== void 0 && (o += `${r.max} >= `), o += "width", r.min !== void 0 && (o += ` >= ${r.min}`), `(${o})`;
      }).filter(Boolean).join(", ");
    }
    function $a(e, r) {
      let o = e.theme.aria || {}, t = e.theme.supports || {}, n = e.theme.data || {};
      if (Object.keys(o).length > 0) {
        let s = r.variants.get("aria"), l = s?.applyFn, h = s?.compounds;
        r.variants.functional("aria", (p, c) => {
          let m = c.value;
          return m && m.kind === "named" && m.value in o ? l?.(p, { ...c, value: { kind: "arbitrary", value: o[m.value] } }) : l?.(p, c);
        }, { compounds: h });
      }
      if (Object.keys(t).length > 0) {
        let s = r.variants.get("supports"), l = s?.applyFn, h = s?.compounds;
        r.variants.functional("supports", (p, c) => {
          let m = c.value;
          return m && m.kind === "named" && m.value in t ? l?.(p, { ...c, value: { kind: "arbitrary", value: t[m.value] } }) : l?.(p, c);
        }, { compounds: h });
      }
      if (Object.keys(n).length > 0) {
        let s = r.variants.get("data"), l = s?.applyFn, h = s?.compounds;
        r.variants.functional("data", (p, c) => {
          let m = c.value;
          return m && m.kind === "named" && m.value in n ? l?.(p, { ...c, value: { kind: "arbitrary", value: n[m.value] } }) : l?.(p, c);
        }, { compounds: h });
      }
    }
    var za = /^[a-z]+$/;
    async function Aa({ designSystem: e, base: r, ast: o, loadModule: t, sources: n }) {
      let s = 0, l = [], h = [];
      R(o, (f, d) => {
        if (f.kind !== "at-rule") return;
        let k = ct(d);
        if (f.name === "@plugin") {
          if (k.parent !== null) throw new Error("`@plugin` cannot be nested.");
          let g = f.params.slice(1, -1);
          if (g.length === 0) throw new Error("`@plugin` must have a path.");
          let b = {};
          for (let $ of f.nodes ?? []) {
            if ($.kind !== "declaration") throw new Error(`Unexpected \`@plugin\` option:

${ke([$])}

\`@plugin\` options must be a flat list of declarations.`);
            if ($.value === void 0) continue;
            let T = $.value, z = _(T, ",").map((y) => {
              if (y = y.trim(), y === "null") return null;
              if (y === "true") return true;
              if (y === "false") return false;
              if (Number.isNaN(Number(y))) {
                if (y[0] === '"' && y[y.length - 1] === '"' || y[0] === "'" && y[y.length - 1] === "'") return y.slice(1, -1);
                if (y[0] === "{" && y[y.length - 1] === "}") throw new Error(`Unexpected \`@plugin\` option: Value of declaration \`${ke([$]).trim()}\` is not supported.

Using an object as a plugin option is currently only supported in JavaScript configuration files.`);
              } else return Number(y);
              return y;
            });
            b[$.property] = z.length === 1 ? z[0] : z;
          }
          return l.push([{ id: g, base: k.context.base, reference: !!k.context.reference, src: f.src }, Object.keys(b).length > 0 ? b : null]), s |= 4, O.Replace([]);
        }
        if (f.name === "@config") {
          if (f.nodes.length > 0) throw new Error("`@config` cannot have a body.");
          if (k.parent !== null) throw new Error("`@config` cannot be nested.");
          return h.push({ id: f.params.slice(1, -1), base: k.context.base, reference: !!k.context.reference, src: f.src }), s |= 4, O.Replace([]);
        }
      }), ba(e);
      let p = e.resolveThemeValue;
      if (e.resolveThemeValue = function(f, d) {
        return f.startsWith("--") ? p(f, d) : (s |= to({ designSystem: e, base: r, ast: o, sources: n, configs: [], pluginDetails: [] }), e.resolveThemeValue(f, d));
      }, !l.length && !h.length) return 0;
      let [c, m] = await Promise.all([Promise.all(h.map(async ({ id: f, base: d, reference: k, src: g }) => {
        let b = await t(f, d, "config");
        return { path: f, base: b.base, config: b.module, reference: k, src: g };
      })), Promise.all(l.map(async ([{ id: f, base: d, reference: k, src: g }, b]) => {
        let $ = await t(f, d, "plugin");
        return { path: f, base: $.base, plugin: $.module, options: b, reference: k, src: g };
      }))]);
      return s |= to({ designSystem: e, base: r, ast: o, sources: n, configs: c, pluginDetails: m }), s;
    }
    function to({ designSystem: e, base: r, ast: o, sources: t, configs: n, pluginDetails: s }) {
      let l = 0, h = [...s.map((g) => {
        if (!g.options) return { config: { plugins: [g.plugin] }, base: g.base, reference: g.reference, src: g.src };
        if ("__isOptionsFunction" in g.plugin) return { config: { plugins: [g.plugin(g.options)] }, base: g.base, reference: g.reference, src: g.src };
        throw new Error(`The plugin "${g.path}" does not accept options`);
      }), ...n], { resolvedConfig: p } = eo(e, [{ config: pa(e.theme), base: r, reference: true, src: void 0 }, ...h, { config: { plugins: [wa] }, base: r, reference: true, src: void 0 }]), { resolvedConfig: c, replacedThemeKeys: m } = eo(e, h), f = { designSystem: e, ast: o, resolvedConfig: p, featuresRef: { set current(g) {
        l |= g;
      } } }, d = Yr({ ...f, referenceMode: false, src: void 0 }), k = e.resolveThemeValue;
      e.resolveThemeValue = function(g, b) {
        if (g[0] === "-" && g[1] === "-") return k(g, b);
        let $ = d.theme(g, void 0);
        if (Array.isArray($) && $.length === 2) return $[0];
        if (Array.isArray($)) return $.join(", ");
        if (typeof $ == "object" && $ !== null && "DEFAULT" in $) return $.DEFAULT;
        if (typeof $ == "string") return $;
      };
      for (let { handler: g, reference: b, src: $ } of p.plugins) {
        let T = Yr({ ...f, referenceMode: b ?? false, src: $ });
        g(T);
      }
      if (Ii(e, c, m), ca(e, c), $a(c, e), ya(c, e), va(c, e), !e.theme.prefix && p.prefix) {
        if (p.prefix.endsWith("-") && (p.prefix = p.prefix.slice(0, -1), console.warn(`The prefix "${p.prefix}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only and is written as a variant before all utilities. We have fixed up the prefix for you. Remove the trailing \`-\` to silence this warning.`)), !za.test(p.prefix)) throw new Error(`The prefix "${p.prefix}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only.`);
        e.theme.prefix = p.prefix;
      }
      if (!e.important && p.important === true && (e.important = true), typeof p.important == "string") {
        let g = p.important;
        R(o, (b, $) => {
          if (b.kind !== "at-rule" || b.name !== "@tailwind" || b.params !== "utilities") return;
          let T = ct($);
          return T.parent?.kind === "rule" && T.parent.selector === g ? O.Stop : O.ReplaceStop(q(g, [b]));
        });
      }
      for (let g of p.blocklist) e.invalidCandidates.add(g);
      for (let g of p.content.files) {
        if ("raw" in g) throw new Error(`Error in the config file/plugin/preset. The \`content\` key contains a \`raw\` entry:

${JSON.stringify(g, null, 2)}

This feature is not currently supported.`);
        let b = false;
        g.pattern[0] == "!" && (b = true, g.pattern = g.pattern.slice(1)), t.push({ ...g, negated: b });
      }
      return l;
    }
    function Ca({ ast: e }) {
      let r = new G((n) => oe(n.code)), o = new G((n) => ({ url: n.file, content: n.code, ignore: false })), t = { file: null, sources: [], mappings: [] };
      R(e, (n) => {
        if (!n.src || !n.dst) return;
        let s = o.get(n.src[0]);
        if (!s.content) return;
        let l = r.get(n.src[0]), h = r.get(n.dst[0]), p = s.content.slice(n.src[1], n.src[2]), c = 0;
        for (let d of p.split(`
`)) {
          if (d.trim() !== "") {
            let k = l.find(n.src[1] + c), g = h.find(n.dst[1]);
            t.mappings.push({ name: null, originalPosition: { source: s, ...k }, generatedPosition: g });
          }
          c += d.length, c += 1;
        }
        let m = l.find(n.src[2]), f = h.find(n.dst[2]);
        t.mappings.push({ name: null, originalPosition: { source: s, ...m }, generatedPosition: f });
      });
      for (let n of r.keys()) t.sources.push(o.get(n));
      return t.mappings.sort((n, s) => n.generatedPosition.line - s.generatedPosition.line || n.generatedPosition.column - s.generatedPosition.column || (n.originalPosition?.line ?? 0) - (s.originalPosition?.line ?? 0) || (n.originalPosition?.column ?? 0) - (s.originalPosition?.column ?? 0)), t;
    }
    var ro = /^(-?\d+)\.\.(-?\d+)(?:\.\.(-?\d+))?$/;
    function Et(e) {
      let r = e.indexOf("{");
      if (r === -1) return [e];
      let o = [], t = e.slice(0, r), n = e.slice(r), s = 0, l = n.lastIndexOf("}");
      for (let f = 0; f < n.length; f++) {
        let d = n[f];
        if (d === "{") s++;
        else if (d === "}" && (s--, s === 0)) {
          l = f;
          break;
        }
      }
      if (l === -1) throw new Error(`The pattern \`${e}\` is not balanced.`);
      let h = n.slice(1, l), p = n.slice(l + 1), c;
      Sa(h) ? c = ja(h) : c = _(h, ","), c = c.flatMap((f) => Et(f));
      let m = Et(p);
      for (let f of m) for (let d of c) o.push(t + d + f);
      return o;
    }
    function Sa(e) {
      return ro.test(e);
    }
    function ja(e) {
      let r = e.match(ro);
      if (!r) return [e];
      let [, o, t, n] = r, s = n ? parseInt(n, 10) : void 0, l = [];
      if (/^-?\d+$/.test(o) && /^-?\d+$/.test(t)) {
        let h = parseInt(o, 10), p = parseInt(t, 10);
        if (s === void 0 && (s = h <= p ? 1 : -1), s === 0) throw new Error("Step cannot be zero in sequence expansion.");
        let c = h < p;
        c && s < 0 && (s = -s), !c && s > 0 && (s = -s);
        for (let m = h; c ? m <= p : m >= p; m += s) l.push(m.toString());
      }
      return l;
    }
    function Va(e, r) {
      let o = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Set(), n = [];
      function s(l, h = []) {
        if (e.has(l) && !o.has(l)) {
          t.has(l) && r.onCircularDependency?.(h, l), t.add(l);
          for (let p of e.get(l) ?? []) h.push(l), s(p, h), h.pop();
          o.add(l), t.delete(l), n.push(l);
        }
      }
      for (let l of e.keys()) s(l);
      return n;
    }
    var Ka = /^[a-z]+$/;
    function Ta() {
      throw new Error("No `loadModule` function provided to `compile`");
    }
    function Oa() {
      throw new Error("No `loadStylesheet` function provided to `compile`");
    }
    function Na(e) {
      let r = 0, o = null;
      for (let t of _(e, " ")) t === "reference" ? r |= 2 : t === "inline" ? r |= 1 : t === "default" ? r |= 4 : t === "static" ? r |= 8 : t.startsWith("prefix(") && t.endsWith(")") && (o = t.slice(7, -1));
      return [r, o];
    }
    async function Ea(e, { base: r = "", from: o, loadModule: t = Ta, loadStylesheet: n = Oa } = {}) {
      let s = 0;
      e = [$e({ base: r }, e)], s |= await Tr(e, r, n, 0, o !== void 0);
      let l = null, h = new ho(), p = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), m = [], f = null, d = null, k = [], g = [], b = [], $ = [], T = null;
      R(e, (y, U) => {
        if (y.kind !== "at-rule") return;
        let F = ct(U);
        if (y.name === "@tailwind" && (y.params === "utilities" || y.params.startsWith("utilities"))) {
          if (d !== null) return O.Replace([]);
          if (F.context.reference) return O.Replace([]);
          let W = _(y.params, " ");
          for (let E of W) if (E.startsWith("source(")) {
            let K = E.slice(7, -1);
            if (K === "none") {
              T = K;
              continue;
            }
            if (K[0] === '"' && K[K.length - 1] !== '"' || K[0] === "'" && K[K.length - 1] !== "'" || K[0] !== "'" && K[0] !== '"') throw new Error("`source(\u2026)` paths must be quoted.");
            T = { base: F.context.sourceBase ?? F.context.base, pattern: K.slice(1, -1) };
          }
          d = y, s |= 16;
        }
        if (y.name === "@utility") {
          if (F.parent !== null) throw new Error("`@utility` cannot be nested.");
          if (y.nodes.length === 0) throw new Error(`\`@utility ${y.params}\` is empty. Utilities should include at least one property.`);
          let W = pi(y);
          if (W === null) {
            if (!y.params.endsWith("-*")) {
              if (y.params.endsWith("*")) throw new Error(`\`@utility ${y.params}\` defines an invalid utility name. A functional utility must end in \`-*\`.`);
              if (y.params.includes("*")) throw new Error(`\`@utility ${y.params}\` defines an invalid utility name. The dynamic portion marked by \`-*\` must appear once at the end.`);
            }
            throw new Error(`\`@utility ${y.params}\` defines an invalid utility name. Utilities should be alphanumeric and start with a lowercase letter.`);
          }
          m.push(W);
        }
        if (y.name === "@source") {
          if (y.nodes.length > 0) throw new Error("`@source` cannot have a body.");
          if (F.parent !== null) throw new Error("`@source` cannot be nested.");
          let W = false, E = false, K = y.params;
          if (K[0] === "n" && K.startsWith("not ") && (W = true, K = K.slice(4)), K[0] === "i" && K.startsWith("inline(") && (E = true, K = K.slice(7, -1).trim()), K[0] === '"' && K[K.length - 1] !== '"' || K[0] === "'" && K[K.length - 1] !== "'" || K[0] !== "'" && K[0] !== '"') throw new Error("`@source` paths must be quoted.");
          let L = K.slice(1, -1);
          if (E) {
            let B = W ? $ : b, D = _(L, " ");
            for (let Q of D) for (let ae of Et(Q)) B.push(ae);
          } else g.push({ base: F.context.base, pattern: L, negated: W });
          return O.ReplaceSkip([]);
        }
        if (y.name === "@variant" && (F.parent === null ? y.nodes.length === 0 ? y.name = "@custom-variant" : (R(y.nodes, (W) => {
          if (W.kind === "at-rule" && W.name === "@slot") return y.name = "@custom-variant", O.Stop;
        }), y.name === "@variant" && k.push(y)) : k.push(y)), y.name === "@custom-variant") {
          if (F.parent !== null) throw new Error("`@custom-variant` cannot be nested.");
          let [W, E] = _(y.params, " ");
          if (!zr.test(W)) throw new Error(`\`@custom-variant ${W}\` defines an invalid variant name. Variants should only contain alphanumeric, dashes, or underscore characters and start with a lowercase letter or number.`);
          if (y.nodes.length > 0 && E) throw new Error(`\`@custom-variant ${W}\` cannot have both a selector and a body.`);
          if (y.nodes.length === 0) {
            if (!E) throw new Error(`\`@custom-variant ${W}\` has no selector or body.`);
            let K = _(E.slice(1, -1), ",");
            if (K.length === 0 || K.some((D) => D.trim() === "")) throw new Error(`\`@custom-variant ${W} (${K.join(",")})\` selector is invalid.`);
            let L = [], B = [];
            for (let D of K) D = D.trim(), D[0] === "@" ? L.push(D) : B.push(D);
            p.set(W, (D) => {
              D.variants.static(W, (Q) => {
                let ae = [];
                B.length > 0 && ae.push(q(B.join(", "), Q.nodes));
                for (let a of L) ae.push(J(a, Q.nodes));
                Q.nodes = ae;
              }, { compounds: We([...B, ...L]) });
            }), c.set(W, /* @__PURE__ */ new Set());
          } else {
            let K = /* @__PURE__ */ new Set();
            R(y.nodes, (L) => {
              L.kind === "at-rule" && L.name === "@variant" && K.add(L.params);
            }), p.set(W, (L) => {
              L.variants.fromAst(W, y.nodes, L);
            }), c.set(W, K);
          }
          return O.ReplaceSkip([]);
        }
        if (y.name === "@media") {
          let W = _(y.params, " "), E = [];
          for (let K of W) if (K.startsWith("source(")) {
            let L = K.slice(7, -1);
            R(y.nodes, (B) => {
              if (B.kind === "at-rule" && B.name === "@tailwind" && B.params === "utilities") return B.params += ` source(${L})`, O.ReplaceStop([$e({ sourceBase: F.context.base }, [B])]);
            });
          } else if (K.startsWith("theme(")) {
            let L = K.slice(6, -1), B = L.includes("reference");
            R(y.nodes, (D) => {
              if (D.kind !== "context") {
                if (D.kind !== "at-rule") {
                  if (B) throw new Error('Files imported with `@import "\u2026" theme(reference)` must only contain `@theme` blocks.\nUse `@reference "\u2026";` instead.');
                  return O.Continue;
                }
                if (D.name === "@theme") return D.params += " " + L, O.Skip;
              }
            });
          } else if (K.startsWith("prefix(")) {
            let L = K.slice(7, -1);
            R(y.nodes, (B) => {
              if (B.kind === "at-rule" && B.name === "@theme") return B.params += ` prefix(${L})`, O.Skip;
            });
          } else K === "important" ? l = true : K === "reference" ? y.nodes = [$e({ reference: true }, y.nodes)] : E.push(K);
          if (E.length > 0) y.params = E.join(" ");
          else if (W.length > 0) return O.Replace(y.nodes);
          return O.Continue;
        }
        if (y.name === "@theme") {
          let [W, E] = Na(y.params);
          if (s |= 64, F.context.reference && (W |= 2), E) {
            if (!Ka.test(E)) throw new Error(`The prefix "${E}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only.`);
            h.prefix = E;
          }
          return R(y.nodes, (K) => {
            if (K.kind === "at-rule" && K.name === "@keyframes") return h.addKeyframes(K), O.Skip;
            if (K.kind === "comment") return;
            if (K.kind === "declaration" && K.property.startsWith("--")) {
              h.add(Ne(K.property), K.value ?? "", W, K.src);
              return;
            }
            let L = ke([P(y.name, y.params, [K])]).split(`
`).map((B, D, Q) => `${D === 0 || D >= Q.length - 2 ? " " : ">"} ${B}`).join(`
`);
            throw new Error(`\`@theme\` blocks must only contain custom properties or \`@keyframes\`.

${L}`);
          }), f ? O.ReplaceSkip([]) : (f = q(":root, :host", []), f.src = y.src, O.ReplaceSkip(f));
        }
      });
      let z = Wi(h, d?.src);
      if (l && (z.important = l), $.length > 0) for (let y of $) z.invalidCandidates.add(y);
      s |= await Aa({ designSystem: z, base: r, ast: e, loadModule: t, sources: g });
      for (let y of p.keys()) z.variants.static(y, () => {
      });
      for (let y of Va(c, { onCircularDependency(U, F) {
        let W = ke(U.map((E, K) => P("@custom-variant", E, [P("@variant", U[K + 1] ?? F, [])]))).replaceAll(";", " { \u2026 }").replace(`@custom-variant ${F} {`, `@custom-variant ${F} { /* \u2190 */`);
        throw new Error(`Circular dependency detected in custom variants:

${W}`);
      } })) p.get(y)?.(z);
      for (let y of m) y(z);
      if (f) {
        let y = [];
        for (let [F, W] of z.theme.entries()) {
          if (W.options & 2) continue;
          let E = i(Be(F), W.value);
          E.src = W.src, y.push(E);
        }
        let U = z.theme.getKeyframes();
        for (let F of U) e.push($e({ theme: true }, [I([F])]));
        f.nodes = [$e({ theme: true }, y)];
      }
      if (s |= Xe(e, z), s |= $t(e, z), s |= At(e, z), d) {
        let y = d;
        y.kind = "context", y.context = {};
      }
      return R(e, (y) => {
        if (y.kind === "at-rule") return y.name === "@utility" ? O.Replace([]) : O.Skip;
      }), { designSystem: z, ast: e, sources: g, root: T, utilitiesNode: d, features: s, inlineCandidates: b };
    }
    async function Fa(e, r = {}) {
      let { designSystem: o, ast: t, sources: n, root: s, utilitiesNode: l, features: h, inlineCandidates: p } = await Ea(e, r);
      t.unshift(ir(`! tailwindcss v${ne} | MIT License | https://tailwindcss.com `));
      function c(g) {
        o.invalidCandidates.add(g);
      }
      let m = /* @__PURE__ */ new Set(), f = null, d = 0, k = false;
      for (let g of p) o.invalidCandidates.has(g) || (m.add(g), k = true);
      return { sources: n, root: s, features: h, build(g) {
        if (h === 0) return e;
        if (!l) return f ??= Fe(t, o, r.polyfills), f;
        let b = k, $ = false;
        k = false;
        let T = m.size;
        for (let y of g) if (!o.invalidCandidates.has(y)) if (y[0] === "-" && y[1] === "-") {
          let U = o.theme.markUsedVariable(y);
          b ||= U, $ ||= U;
        } else m.add(y), b ||= m.size !== T;
        if (!b) return f ??= Fe(t, o, r.polyfills), f;
        let z = Je(m, o, { onInvalidCandidate: c }).astNodes;
        return r.from && R(z, (y) => {
          y.src ??= l.src;
        }), !$ && d === z.length ? (f ??= Fe(t, o, r.polyfills), f) : (d = z.length, l.nodes = z, f = Fe(t, o, r.polyfills), f);
      } };
    }
    async function Ua(e, r = {}) {
      let o = nt(e, { from: r.from }), t = await Fa(o, r), n = o, s = e;
      return { ...t, build(l) {
        let h = t.build(l);
        return h === n || (s = ke(h, !!r.from), n = h), s;
      }, buildSourceMap() {
        return Ca({ ast: n });
      } };
    }
    var Wa = `@layer theme, base, components, utilities;

@import './theme.css' layer(theme);
@import './preflight.css' layer(base);
@import './utilities.css' layer(utilities);
`, Ra = `/*
  1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
  2. Remove default margins and padding
  3. Reset all borders.
*/

*,
::after,
::before,
::backdrop,
::file-selector-button {
  box-sizing: border-box; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 2 */
  border: 0 solid; /* 3 */
}

/*
  1. Use a consistent sensible line-height in all browsers.
  2. Prevent adjustments of font size after orientation changes in iOS.
  3. Use a more readable tab size.
  4. Use the user's configured \`sans\` font-family by default.
  5. Use the user's configured \`sans\` font-feature-settings by default.
  6. Use the user's configured \`sans\` font-variation-settings by default.
  7. Disable tap highlights on iOS.
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  tab-size: 4; /* 3 */
  font-family: --theme(
    --default-font-family,
    ui-sans-serif,
    system-ui,
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji'
  ); /* 4 */
  font-feature-settings: --theme(--default-font-feature-settings, normal); /* 5 */
  font-variation-settings: --theme(--default-font-variation-settings, normal); /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
  1. Add the correct height in Firefox.
  2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
  3. Reset the default border style to a 1px solid border.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
  Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}

/*
  Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
  Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  -webkit-text-decoration: inherit;
  text-decoration: inherit;
}

/*
  Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
  1. Use the user's configured \`mono\` font-family by default.
  2. Use the user's configured \`mono\` font-feature-settings by default.
  3. Use the user's configured \`mono\` font-variation-settings by default.
  4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: --theme(
    --default-mono-font-family,
    ui-monospace,
    SFMono-Regular,
    Menlo,
    Monaco,
    Consolas,
    'Liberation Mono',
    'Courier New',
    monospace
  ); /* 1 */
  font-feature-settings: --theme(--default-mono-font-feature-settings, normal); /* 2 */
  font-variation-settings: --theme(--default-mono-font-variation-settings, normal); /* 3 */
  font-size: 1em; /* 4 */
}

/*
  Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
  Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
  1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
  2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
  3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
  Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
  Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
  Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
  Make lists unstyled by default.
*/

ol,
ul,
menu {
  list-style: none;
}

/*
  1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
  2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
      This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
  Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/*
  1. Inherit font styles in all browsers.
  2. Remove border radius in all browsers.
  3. Remove background color in all browsers.
  4. Ensure consistent opacity for disabled states in all browsers.
*/

button,
input,
select,
optgroup,
textarea,
::file-selector-button {
  font: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  border-radius: 0; /* 2 */
  background-color: transparent; /* 3 */
  opacity: 1; /* 4 */
}

/*
  Restore default font weight.
*/

:where(select:is([multiple], [size])) optgroup {
  font-weight: bolder;
}

/*
  Restore indentation.
*/

:where(select:is([multiple], [size])) optgroup option {
  padding-inline-start: 20px;
}

/*
  Restore space after button.
*/

::file-selector-button {
  margin-inline-end: 4px;
}

/*
  Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
*/

::placeholder {
  opacity: 1;
}

/*
  Set the default placeholder color to a semi-transparent version of the current text color in browsers that do not
  crash when using \`color-mix(\u2026)\` with \`currentcolor\`. (https://github.com/tailwindlabs/tailwindcss/issues/17194)
*/

@supports (not (-webkit-appearance: -apple-pay-button)) /* Not Safari */ or
  (contain-intrinsic-size: 1px) /* Safari 17+ */ {
  ::placeholder {
    color: color-mix(in oklab, currentcolor 50%, transparent);
  }
}

/*
  Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
  Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
  1. Ensure date/time inputs have the same height when empty in iOS Safari.
  2. Ensure text alignment can be changed on date/time inputs in iOS Safari.
*/

::-webkit-date-and-time-value {
  min-height: 1lh; /* 1 */
  text-align: inherit; /* 2 */
}

/*
  Prevent height from changing on date/time inputs in macOS Safari when the input is set to \`display: block\`.
*/

::-webkit-datetime-edit {
  display: inline-flex;
}

/*
  Remove excess padding from pseudo-elements in date/time inputs to ensure consistent height across browsers.
*/

::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}

::-webkit-datetime-edit,
::-webkit-datetime-edit-year-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-minute-field,
::-webkit-datetime-edit-second-field,
::-webkit-datetime-edit-millisecond-field,
::-webkit-datetime-edit-meridiem-field {
  padding-block: 0;
}

/*
  Center dropdown marker shown on inputs with paired \`<datalist>\`s in Chrome. (https://github.com/tailwindlabs/tailwindcss/issues/18499)
*/

::-webkit-calendar-picker-indicator {
  line-height: 1;
}

/*
  Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
  Correct the inability to style the border radius in iOS Safari.
*/

button,
input:where([type='button'], [type='reset'], [type='submit']),
::file-selector-button {
  appearance: button;
}

/*
  Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
  Make elements with the HTML hidden attribute stay hidden by default.
*/

[hidden]:where(:not([hidden='until-found'])) {
  display: none !important;
}
`, La = `@theme default {
  --font-sans:
    ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
  --font-serif: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;
  --font-mono:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
    monospace;

  --color-red-50: oklch(97.1% 0.013 17.38);
  --color-red-100: oklch(93.6% 0.032 17.717);
  --color-red-200: oklch(88.5% 0.062 18.334);
  --color-red-300: oklch(80.8% 0.114 19.571);
  --color-red-400: oklch(70.4% 0.191 22.216);
  --color-red-500: oklch(63.7% 0.237 25.331);
  --color-red-600: oklch(57.7% 0.245 27.325);
  --color-red-700: oklch(50.5% 0.213 27.518);
  --color-red-800: oklch(44.4% 0.177 26.899);
  --color-red-900: oklch(39.6% 0.141 25.723);
  --color-red-950: oklch(25.8% 0.092 26.042);

  --color-orange-50: oklch(98% 0.016 73.684);
  --color-orange-100: oklch(95.4% 0.038 75.164);
  --color-orange-200: oklch(90.1% 0.076 70.697);
  --color-orange-300: oklch(83.7% 0.128 66.29);
  --color-orange-400: oklch(75% 0.183 55.934);
  --color-orange-500: oklch(70.5% 0.213 47.604);
  --color-orange-600: oklch(64.6% 0.222 41.116);
  --color-orange-700: oklch(55.3% 0.195 38.402);
  --color-orange-800: oklch(47% 0.157 37.304);
  --color-orange-900: oklch(40.8% 0.123 38.172);
  --color-orange-950: oklch(26.6% 0.079 36.259);

  --color-amber-50: oklch(98.7% 0.022 95.277);
  --color-amber-100: oklch(96.2% 0.059 95.617);
  --color-amber-200: oklch(92.4% 0.12 95.746);
  --color-amber-300: oklch(87.9% 0.169 91.605);
  --color-amber-400: oklch(82.8% 0.189 84.429);
  --color-amber-500: oklch(76.9% 0.188 70.08);
  --color-amber-600: oklch(66.6% 0.179 58.318);
  --color-amber-700: oklch(55.5% 0.163 48.998);
  --color-amber-800: oklch(47.3% 0.137 46.201);
  --color-amber-900: oklch(41.4% 0.112 45.904);
  --color-amber-950: oklch(27.9% 0.077 45.635);

  --color-yellow-50: oklch(98.7% 0.026 102.212);
  --color-yellow-100: oklch(97.3% 0.071 103.193);
  --color-yellow-200: oklch(94.5% 0.129 101.54);
  --color-yellow-300: oklch(90.5% 0.182 98.111);
  --color-yellow-400: oklch(85.2% 0.199 91.936);
  --color-yellow-500: oklch(79.5% 0.184 86.047);
  --color-yellow-600: oklch(68.1% 0.162 75.834);
  --color-yellow-700: oklch(55.4% 0.135 66.442);
  --color-yellow-800: oklch(47.6% 0.114 61.907);
  --color-yellow-900: oklch(42.1% 0.095 57.708);
  --color-yellow-950: oklch(28.6% 0.066 53.813);

  --color-lime-50: oklch(98.6% 0.031 120.757);
  --color-lime-100: oklch(96.7% 0.067 122.328);
  --color-lime-200: oklch(93.8% 0.127 124.321);
  --color-lime-300: oklch(89.7% 0.196 126.665);
  --color-lime-400: oklch(84.1% 0.238 128.85);
  --color-lime-500: oklch(76.8% 0.233 130.85);
  --color-lime-600: oklch(64.8% 0.2 131.684);
  --color-lime-700: oklch(53.2% 0.157 131.589);
  --color-lime-800: oklch(45.3% 0.124 130.933);
  --color-lime-900: oklch(40.5% 0.101 131.063);
  --color-lime-950: oklch(27.4% 0.072 132.109);

  --color-green-50: oklch(98.2% 0.018 155.826);
  --color-green-100: oklch(96.2% 0.044 156.743);
  --color-green-200: oklch(92.5% 0.084 155.995);
  --color-green-300: oklch(87.1% 0.15 154.449);
  --color-green-400: oklch(79.2% 0.209 151.711);
  --color-green-500: oklch(72.3% 0.219 149.579);
  --color-green-600: oklch(62.7% 0.194 149.214);
  --color-green-700: oklch(52.7% 0.154 150.069);
  --color-green-800: oklch(44.8% 0.119 151.328);
  --color-green-900: oklch(39.3% 0.095 152.535);
  --color-green-950: oklch(26.6% 0.065 152.934);

  --color-emerald-50: oklch(97.9% 0.021 166.113);
  --color-emerald-100: oklch(95% 0.052 163.051);
  --color-emerald-200: oklch(90.5% 0.093 164.15);
  --color-emerald-300: oklch(84.5% 0.143 164.978);
  --color-emerald-400: oklch(76.5% 0.177 163.223);
  --color-emerald-500: oklch(69.6% 0.17 162.48);
  --color-emerald-600: oklch(59.6% 0.145 163.225);
  --color-emerald-700: oklch(50.8% 0.118 165.612);
  --color-emerald-800: oklch(43.2% 0.095 166.913);
  --color-emerald-900: oklch(37.8% 0.077 168.94);
  --color-emerald-950: oklch(26.2% 0.051 172.552);

  --color-teal-50: oklch(98.4% 0.014 180.72);
  --color-teal-100: oklch(95.3% 0.051 180.801);
  --color-teal-200: oklch(91% 0.096 180.426);
  --color-teal-300: oklch(85.5% 0.138 181.071);
  --color-teal-400: oklch(77.7% 0.152 181.912);
  --color-teal-500: oklch(70.4% 0.14 182.503);
  --color-teal-600: oklch(60% 0.118 184.704);
  --color-teal-700: oklch(51.1% 0.096 186.391);
  --color-teal-800: oklch(43.7% 0.078 188.216);
  --color-teal-900: oklch(38.6% 0.063 188.416);
  --color-teal-950: oklch(27.7% 0.046 192.524);

  --color-cyan-50: oklch(98.4% 0.019 200.873);
  --color-cyan-100: oklch(95.6% 0.045 203.388);
  --color-cyan-200: oklch(91.7% 0.08 205.041);
  --color-cyan-300: oklch(86.5% 0.127 207.078);
  --color-cyan-400: oklch(78.9% 0.154 211.53);
  --color-cyan-500: oklch(71.5% 0.143 215.221);
  --color-cyan-600: oklch(60.9% 0.126 221.723);
  --color-cyan-700: oklch(52% 0.105 223.128);
  --color-cyan-800: oklch(45% 0.085 224.283);
  --color-cyan-900: oklch(39.8% 0.07 227.392);
  --color-cyan-950: oklch(30.2% 0.056 229.695);

  --color-sky-50: oklch(97.7% 0.013 236.62);
  --color-sky-100: oklch(95.1% 0.026 236.824);
  --color-sky-200: oklch(90.1% 0.058 230.902);
  --color-sky-300: oklch(82.8% 0.111 230.318);
  --color-sky-400: oklch(74.6% 0.16 232.661);
  --color-sky-500: oklch(68.5% 0.169 237.323);
  --color-sky-600: oklch(58.8% 0.158 241.966);
  --color-sky-700: oklch(50% 0.134 242.749);
  --color-sky-800: oklch(44.3% 0.11 240.79);
  --color-sky-900: oklch(39.1% 0.09 240.876);
  --color-sky-950: oklch(29.3% 0.066 243.157);

  --color-blue-50: oklch(97% 0.014 254.604);
  --color-blue-100: oklch(93.2% 0.032 255.585);
  --color-blue-200: oklch(88.2% 0.059 254.128);
  --color-blue-300: oklch(80.9% 0.105 251.813);
  --color-blue-400: oklch(70.7% 0.165 254.624);
  --color-blue-500: oklch(62.3% 0.214 259.815);
  --color-blue-600: oklch(54.6% 0.245 262.881);
  --color-blue-700: oklch(48.8% 0.243 264.376);
  --color-blue-800: oklch(42.4% 0.199 265.638);
  --color-blue-900: oklch(37.9% 0.146 265.522);
  --color-blue-950: oklch(28.2% 0.091 267.935);

  --color-indigo-50: oklch(96.2% 0.018 272.314);
  --color-indigo-100: oklch(93% 0.034 272.788);
  --color-indigo-200: oklch(87% 0.065 274.039);
  --color-indigo-300: oklch(78.5% 0.115 274.713);
  --color-indigo-400: oklch(67.3% 0.182 276.935);
  --color-indigo-500: oklch(58.5% 0.233 277.117);
  --color-indigo-600: oklch(51.1% 0.262 276.966);
  --color-indigo-700: oklch(45.7% 0.24 277.023);
  --color-indigo-800: oklch(39.8% 0.195 277.366);
  --color-indigo-900: oklch(35.9% 0.144 278.697);
  --color-indigo-950: oklch(25.7% 0.09 281.288);

  --color-violet-50: oklch(96.9% 0.016 293.756);
  --color-violet-100: oklch(94.3% 0.029 294.588);
  --color-violet-200: oklch(89.4% 0.057 293.283);
  --color-violet-300: oklch(81.1% 0.111 293.571);
  --color-violet-400: oklch(70.2% 0.183 293.541);
  --color-violet-500: oklch(60.6% 0.25 292.717);
  --color-violet-600: oklch(54.1% 0.281 293.009);
  --color-violet-700: oklch(49.1% 0.27 292.581);
  --color-violet-800: oklch(43.2% 0.232 292.759);
  --color-violet-900: oklch(38% 0.189 293.745);
  --color-violet-950: oklch(28.3% 0.141 291.089);

  --color-purple-50: oklch(97.7% 0.014 308.299);
  --color-purple-100: oklch(94.6% 0.033 307.174);
  --color-purple-200: oklch(90.2% 0.063 306.703);
  --color-purple-300: oklch(82.7% 0.119 306.383);
  --color-purple-400: oklch(71.4% 0.203 305.504);
  --color-purple-500: oklch(62.7% 0.265 303.9);
  --color-purple-600: oklch(55.8% 0.288 302.321);
  --color-purple-700: oklch(49.6% 0.265 301.924);
  --color-purple-800: oklch(43.8% 0.218 303.724);
  --color-purple-900: oklch(38.1% 0.176 304.987);
  --color-purple-950: oklch(29.1% 0.149 302.717);

  --color-fuchsia-50: oklch(97.7% 0.017 320.058);
  --color-fuchsia-100: oklch(95.2% 0.037 318.852);
  --color-fuchsia-200: oklch(90.3% 0.076 319.62);
  --color-fuchsia-300: oklch(83.3% 0.145 321.434);
  --color-fuchsia-400: oklch(74% 0.238 322.16);
  --color-fuchsia-500: oklch(66.7% 0.295 322.15);
  --color-fuchsia-600: oklch(59.1% 0.293 322.896);
  --color-fuchsia-700: oklch(51.8% 0.253 323.949);
  --color-fuchsia-800: oklch(45.2% 0.211 324.591);
  --color-fuchsia-900: oklch(40.1% 0.17 325.612);
  --color-fuchsia-950: oklch(29.3% 0.136 325.661);

  --color-pink-50: oklch(97.1% 0.014 343.198);
  --color-pink-100: oklch(94.8% 0.028 342.258);
  --color-pink-200: oklch(89.9% 0.061 343.231);
  --color-pink-300: oklch(82.3% 0.12 346.018);
  --color-pink-400: oklch(71.8% 0.202 349.761);
  --color-pink-500: oklch(65.6% 0.241 354.308);
  --color-pink-600: oklch(59.2% 0.249 0.584);
  --color-pink-700: oklch(52.5% 0.223 3.958);
  --color-pink-800: oklch(45.9% 0.187 3.815);
  --color-pink-900: oklch(40.8% 0.153 2.432);
  --color-pink-950: oklch(28.4% 0.109 3.907);

  --color-rose-50: oklch(96.9% 0.015 12.422);
  --color-rose-100: oklch(94.1% 0.03 12.58);
  --color-rose-200: oklch(89.2% 0.058 10.001);
  --color-rose-300: oklch(81% 0.117 11.638);
  --color-rose-400: oklch(71.2% 0.194 13.428);
  --color-rose-500: oklch(64.5% 0.246 16.439);
  --color-rose-600: oklch(58.6% 0.253 17.585);
  --color-rose-700: oklch(51.4% 0.222 16.935);
  --color-rose-800: oklch(45.5% 0.188 13.697);
  --color-rose-900: oklch(41% 0.159 10.272);
  --color-rose-950: oklch(27.1% 0.105 12.094);

  --color-slate-50: oklch(98.4% 0.003 247.858);
  --color-slate-100: oklch(96.8% 0.007 247.896);
  --color-slate-200: oklch(92.9% 0.013 255.508);
  --color-slate-300: oklch(86.9% 0.022 252.894);
  --color-slate-400: oklch(70.4% 0.04 256.788);
  --color-slate-500: oklch(55.4% 0.046 257.417);
  --color-slate-600: oklch(44.6% 0.043 257.281);
  --color-slate-700: oklch(37.2% 0.044 257.287);
  --color-slate-800: oklch(27.9% 0.041 260.031);
  --color-slate-900: oklch(20.8% 0.042 265.755);
  --color-slate-950: oklch(12.9% 0.042 264.695);

  --color-gray-50: oklch(98.5% 0.002 247.839);
  --color-gray-100: oklch(96.7% 0.003 264.542);
  --color-gray-200: oklch(92.8% 0.006 264.531);
  --color-gray-300: oklch(87.2% 0.01 258.338);
  --color-gray-400: oklch(70.7% 0.022 261.325);
  --color-gray-500: oklch(55.1% 0.027 264.364);
  --color-gray-600: oklch(44.6% 0.03 256.802);
  --color-gray-700: oklch(37.3% 0.034 259.733);
  --color-gray-800: oklch(27.8% 0.033 256.848);
  --color-gray-900: oklch(21% 0.034 264.665);
  --color-gray-950: oklch(13% 0.028 261.692);

  --color-zinc-50: oklch(98.5% 0 0);
  --color-zinc-100: oklch(96.7% 0.001 286.375);
  --color-zinc-200: oklch(92% 0.004 286.32);
  --color-zinc-300: oklch(87.1% 0.006 286.286);
  --color-zinc-400: oklch(70.5% 0.015 286.067);
  --color-zinc-500: oklch(55.2% 0.016 285.938);
  --color-zinc-600: oklch(44.2% 0.017 285.786);
  --color-zinc-700: oklch(37% 0.013 285.805);
  --color-zinc-800: oklch(27.4% 0.006 286.033);
  --color-zinc-900: oklch(21% 0.006 285.885);
  --color-zinc-950: oklch(14.1% 0.005 285.823);

  --color-neutral-50: oklch(98.5% 0 0);
  --color-neutral-100: oklch(97% 0 0);
  --color-neutral-200: oklch(92.2% 0 0);
  --color-neutral-300: oklch(87% 0 0);
  --color-neutral-400: oklch(70.8% 0 0);
  --color-neutral-500: oklch(55.6% 0 0);
  --color-neutral-600: oklch(43.9% 0 0);
  --color-neutral-700: oklch(37.1% 0 0);
  --color-neutral-800: oklch(26.9% 0 0);
  --color-neutral-900: oklch(20.5% 0 0);
  --color-neutral-950: oklch(14.5% 0 0);

  --color-stone-50: oklch(98.5% 0.001 106.423);
  --color-stone-100: oklch(97% 0.001 106.424);
  --color-stone-200: oklch(92.3% 0.003 48.717);
  --color-stone-300: oklch(86.9% 0.005 56.366);
  --color-stone-400: oklch(70.9% 0.01 56.259);
  --color-stone-500: oklch(55.3% 0.013 58.071);
  --color-stone-600: oklch(44.4% 0.011 73.639);
  --color-stone-700: oklch(37.4% 0.01 67.558);
  --color-stone-800: oklch(26.8% 0.007 34.298);
  --color-stone-900: oklch(21.6% 0.006 56.043);
  --color-stone-950: oklch(14.7% 0.004 49.25);

  --color-mauve-50: oklch(98.5% 0 0);
  --color-mauve-100: oklch(96% 0.003 325.6);
  --color-mauve-200: oklch(92.2% 0.005 325.62);
  --color-mauve-300: oklch(86.5% 0.012 325.68);
  --color-mauve-400: oklch(71.1% 0.019 323.02);
  --color-mauve-500: oklch(54.2% 0.034 322.5);
  --color-mauve-600: oklch(43.5% 0.029 321.78);
  --color-mauve-700: oklch(36.4% 0.029 323.89);
  --color-mauve-800: oklch(26.3% 0.024 320.12);
  --color-mauve-900: oklch(21.2% 0.019 322.12);
  --color-mauve-950: oklch(14.5% 0.008 326);

  --color-olive-50: oklch(98.8% 0.003 106.5);
  --color-olive-100: oklch(96.6% 0.005 106.5);
  --color-olive-200: oklch(93% 0.007 106.5);
  --color-olive-300: oklch(88% 0.011 106.6);
  --color-olive-400: oklch(73.7% 0.021 106.9);
  --color-olive-500: oklch(58% 0.031 107.3);
  --color-olive-600: oklch(46.6% 0.025 107.3);
  --color-olive-700: oklch(39.4% 0.023 107.4);
  --color-olive-800: oklch(28.6% 0.016 107.4);
  --color-olive-900: oklch(22.8% 0.013 107.4);
  --color-olive-950: oklch(15.3% 0.006 107.1);

  --color-mist-50: oklch(98.7% 0.002 197.1);
  --color-mist-100: oklch(96.3% 0.002 197.1);
  --color-mist-200: oklch(92.5% 0.005 214.3);
  --color-mist-300: oklch(87.2% 0.007 219.6);
  --color-mist-400: oklch(72.3% 0.014 214.4);
  --color-mist-500: oklch(56% 0.021 213.5);
  --color-mist-600: oklch(45% 0.017 213.2);
  --color-mist-700: oklch(37.8% 0.015 216);
  --color-mist-800: oklch(27.5% 0.011 216.9);
  --color-mist-900: oklch(21.8% 0.008 223.9);
  --color-mist-950: oklch(14.8% 0.004 228.8);

  --color-taupe-50: oklch(98.6% 0.002 67.8);
  --color-taupe-100: oklch(96% 0.002 17.2);
  --color-taupe-200: oklch(92.2% 0.005 34.3);
  --color-taupe-300: oklch(86.8% 0.007 39.5);
  --color-taupe-400: oklch(71.4% 0.014 41.2);
  --color-taupe-500: oklch(54.7% 0.021 43.1);
  --color-taupe-600: oklch(43.8% 0.017 39.3);
  --color-taupe-700: oklch(36.7% 0.016 35.7);
  --color-taupe-800: oklch(26.8% 0.011 36.5);
  --color-taupe-900: oklch(21.4% 0.009 43.1);
  --color-taupe-950: oklch(14.7% 0.004 49.3);

  --color-black: #000;
  --color-white: #fff;

  --spacing: 0.25rem;

  --breakpoint-sm: 40rem;
  --breakpoint-md: 48rem;
  --breakpoint-lg: 64rem;
  --breakpoint-xl: 80rem;
  --breakpoint-2xl: 96rem;

  --container-3xs: 16rem;
  --container-2xs: 18rem;
  --container-xs: 20rem;
  --container-sm: 24rem;
  --container-md: 28rem;
  --container-lg: 32rem;
  --container-xl: 36rem;
  --container-2xl: 42rem;
  --container-3xl: 48rem;
  --container-4xl: 56rem;
  --container-5xl: 64rem;
  --container-6xl: 72rem;
  --container-7xl: 80rem;

  --text-xs: 0.75rem;
  --text-xs--line-height: calc(1 / 0.75);
  --text-sm: 0.875rem;
  --text-sm--line-height: calc(1.25 / 0.875);
  --text-base: 1rem;
  --text-base--line-height: calc(1.5 / 1);
  --text-lg: 1.125rem;
  --text-lg--line-height: calc(1.75 / 1.125);
  --text-xl: 1.25rem;
  --text-xl--line-height: calc(1.75 / 1.25);
  --text-2xl: 1.5rem;
  --text-2xl--line-height: calc(2 / 1.5);
  --text-3xl: 1.875rem;
  --text-3xl--line-height: calc(2.25 / 1.875);
  --text-4xl: 2.25rem;
  --text-4xl--line-height: calc(2.5 / 2.25);
  --text-5xl: 3rem;
  --text-5xl--line-height: 1;
  --text-6xl: 3.75rem;
  --text-6xl--line-height: 1;
  --text-7xl: 4.5rem;
  --text-7xl--line-height: 1;
  --text-8xl: 6rem;
  --text-8xl--line-height: 1;
  --text-9xl: 8rem;
  --text-9xl--line-height: 1;

  --font-weight-thin: 100;
  --font-weight-extralight: 200;
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  --font-weight-black: 900;

  --tracking-tighter: -0.05em;
  --tracking-tight: -0.025em;
  --tracking-normal: 0em;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;
  --tracking-widest: 0.1em;

  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;

  --radius-xs: 0.125rem;
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
  --radius-3xl: 1.5rem;
  --radius-4xl: 2rem;

  --shadow-2xs: 0 1px rgb(0 0 0 / 0.05);
  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

  --inset-shadow-2xs: inset 0 1px rgb(0 0 0 / 0.05);
  --inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / 0.05);
  --inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / 0.05);

  --drop-shadow-xs: 0 1px 1px rgb(0 0 0 / 0.05);
  --drop-shadow-sm: 0 1px 2px rgb(0 0 0 / 0.15);
  --drop-shadow-md: 0 3px 3px rgb(0 0 0 / 0.12);
  --drop-shadow-lg: 0 4px 4px rgb(0 0 0 / 0.15);
  --drop-shadow-xl: 0 9px 7px rgb(0 0 0 / 0.1);
  --drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / 0.15);

  --text-shadow-2xs: 0px 1px 0px rgb(0 0 0 / 0.15);
  --text-shadow-xs: 0px 1px 1px rgb(0 0 0 / 0.2);
  --text-shadow-sm:
    0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075), 0px 2px 2px rgb(0 0 0 / 0.075);
  --text-shadow-md:
    0px 1px 1px rgb(0 0 0 / 0.1), 0px 1px 2px rgb(0 0 0 / 0.1), 0px 2px 4px rgb(0 0 0 / 0.1);
  --text-shadow-lg:
    0px 1px 2px rgb(0 0 0 / 0.1), 0px 3px 2px rgb(0 0 0 / 0.1), 0px 4px 8px rgb(0 0 0 / 0.1);

  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

  --animate-spin: spin 1s linear infinite;
  --animate-ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  --animate-bounce: bounce 1s infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes ping {
    75%,
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  @keyframes pulse {
    50% {
      opacity: 0.5;
    }
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }

    50% {
      transform: none;
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }

  --blur-xs: 4px;
  --blur-sm: 8px;
  --blur-md: 12px;
  --blur-lg: 16px;
  --blur-xl: 24px;
  --blur-2xl: 40px;
  --blur-3xl: 64px;

  --perspective-dramatic: 100px;
  --perspective-near: 300px;
  --perspective-normal: 500px;
  --perspective-midrange: 800px;
  --perspective-distant: 1200px;

  --aspect-video: 16 / 9;

  --default-transition-duration: 150ms;
  --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  --default-font-family: --theme(--font-sans, initial);
  --default-font-feature-settings: --theme(--font-sans--font-feature-settings, initial);
  --default-font-variation-settings: --theme(--font-sans--font-variation-settings, initial);
  --default-mono-font-family: --theme(--font-mono, initial);
  --default-mono-font-feature-settings: --theme(--font-mono--font-feature-settings, initial);
  --default-mono-font-variation-settings: --theme(--font-mono--font-variation-settings, initial);
}

/* Deprecated */
@theme default inline reference {
  --blur: 8px;
  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
  --drop-shadow: 0 1px 2px rgb(0 0 0 / 0.1), 0 1px 1px rgb(0 0 0 / 0.06);
  --radius: 0.25rem;
  --max-width-prose: 65ch;
}
`, Da = `@tailwind utilities;
`, et = { index: Wa, preflight: Ra, theme: La, utilities: Da }, _a = class {
      start(e) {
        performance.mark(`${e} (start)`);
      }
      end(e, r) {
        performance.mark(`${e} (end)`), performance.measure(e, { start: `${e} (start)`, end: `${e} (end)`, detail: r });
      }
      hit(e, r) {
        performance.mark(e, { detail: r });
      }
      error(e) {
        throw performance.mark("(error)", { detail: { error: `${e}` } }), e;
      }
    }, oo = "text/tailwindcss", tt, Ft = /* @__PURE__ */ new Set(), Ut = "", Wt = document.createElement("style"), io = Promise.resolve(), Ba = 1, re = new _a();
    async function Ma() {
      re.start("Create compiler"), re.start("Reading Stylesheets");
      let e = document.querySelectorAll(`style[type="${oo}"]`), r = "";
      for (let o of e) ao(o), r += o.textContent + `
`;
      if (r.includes("@import") || (r = `@import "tailwindcss";${r}`), re.end("Reading Stylesheets", { size: r.length, changed: Ut !== r }), Ut !== r) {
        Ut = r, re.start("Compile CSS");
        try {
          tt = await Ua(r, { base: "/", loadStylesheet: Ia, loadModule: Pa });
        } finally {
          re.end("Compile CSS"), re.end("Create compiler");
        }
        Ft.clear();
      }
    }
    async function Ia(e, r) {
      function o() {
        if (e === "tailwindcss") return { path: "virtual:tailwindcss/index.css", base: r, content: et.index };
        if (e === "tailwindcss/preflight" || e === "tailwindcss/preflight.css" || e === "./preflight.css") return { path: "virtual:tailwindcss/preflight.css", base: r, content: et.preflight };
        if (e === "tailwindcss/theme" || e === "tailwindcss/theme.css" || e === "./theme.css") return { path: "virtual:tailwindcss/theme.css", base: r, content: et.theme };
        if (e === "tailwindcss/utilities" || e === "tailwindcss/utilities.css" || e === "./utilities.css") return { path: "virtual:tailwindcss/utilities.css", base: r, content: et.utilities };
        throw new Error(`The browser build does not support @import for "${e}"`);
      }
      try {
        let t = o();
        return re.hit("Loaded stylesheet", { id: e, base: r, size: t.content.length }), t;
      } catch (t) {
        throw re.hit("Failed to load stylesheet", { id: e, base: r, error: t.message ?? t }), t;
      }
    }
    async function Pa() {
      throw new Error("The browser build does not support plugins or config files.");
    }
    async function qa(e) {
      if (!tt) return;
      let r = /* @__PURE__ */ new Set();
      re.start("Collect classes");
      for (let o of document.querySelectorAll("[class]")) for (let t of o.classList) Ft.has(t) || (Ft.add(t), r.add(t));
      re.end("Collect classes", { count: r.size }), !(r.size === 0 && e === "incremental") && (re.start("Build utilities"), Wt.textContent = tt.build(Array.from(r)), re.end("Build utilities"));
    }
    function rt(e) {
      async function r() {
        if (!tt && e !== "full") return;
        let o = Ba++;
        re.start(`Build #${o} (${e})`), e === "full" && await Ma(), re.start("Build"), await qa(e), re.end("Build"), re.end(`Build #${o} (${e})`);
      }
      io = io.then(r).catch((o) => re.error(o));
    }
    var Ha = new MutationObserver(() => rt("full"));
    function ao(e) {
      Ha.observe(e, { attributes: true, attributeFilter: ["type"], characterData: true, subtree: true, childList: true });
    }
    new MutationObserver((e) => {
      let r = 0, o = 0;
      for (let t of e) {
        for (let n of t.addedNodes) n.nodeType === Node.ELEMENT_NODE && n.tagName === "STYLE" && n.getAttribute("type") === oo && (ao(n), r++);
        for (let n of t.addedNodes) n.nodeType === 1 && n !== Wt && o++;
        t.type === "attributes" && o++;
      }
      if (r > 0) return rt("full");
      if (o > 0) return rt("incremental");
    }).observe(document.documentElement, { attributes: true, attributeFilter: ["class"], childList: true, subtree: true }), rt("full"), document.head.append(Wt);
  })();
});
var Rt = tn(so());
var dn = Rt.default ?? Rt;
//# sourceMappingURL=shakespeare_tailwindcss@4-2OUB7WSV.js.map

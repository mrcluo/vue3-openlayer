var tu = Object.defineProperty;
var nu = (n, e, t) => e in n ? tu(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Aa = (n, e, t) => (nu(n, typeof e != "symbol" ? e + "" : e, t), t);
import { unref as T, getCurrentScope as iu, onScopeDispose as su, watch as nn, defineComponent as ye, openBlock as j, createElementBlock as ee, createElementVNode as J, warn as ru, computed as W, getCurrentInstance as sn, inject as Ae, ref as re, isRef as Oi, mergeProps as lh, renderSlot as Jt, onMounted as Xs, toRef as ou, onUnmounted as au, nextTick as Ks, toRaw as Ia, useSlots as hh, createBlock as $t, resolveDynamicComponent as Io, normalizeClass as ue, withCtx as Fe, withDirectives as Cn, withModifiers as ki, vModelCheckbox as Ss, Fragment as An, createTextVNode as ch, toDisplayString as jt, createCommentVNode as Pe, normalizeStyle as ei, provide as lu, toRefs as hu, markRaw as Ta, effectScope as cu, shallowRef as uu, Teleport as du, createVNode as Ee, Transition as fu, renderList as Hr, vShow as Qr, useAttrs as gu, onBeforeUnmount as mu, pushScopeId as pu, popScopeId as _u } from "vue";
var Sa;
const Ye = typeof window < "u", yu = (n) => typeof n == "string", qr = () => {
};
Ye && ((Sa = window == null ? void 0 : window.navigator) != null && Sa.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function To(n) {
  return typeof n == "function" ? n() : T(n);
}
function vu(n, e) {
  function t(...i) {
    return new Promise((s, r) => {
      Promise.resolve(n(() => e.apply(this, i), { fn: e, thisArg: this, args: i })).then(s).catch(r);
    });
  }
  return t;
}
function Eu(n, e = !0, t = !0, i = !1) {
  let s = 0, r, o = !0, a = qr, l;
  const h = () => {
    r && (clearTimeout(r), r = void 0, a(), a = qr);
  };
  return (u) => {
    const d = To(n), f = Date.now() - s, g = () => l = u();
    return h(), d <= 0 ? (s = Date.now(), g()) : (f > d && (t || !o) ? (s = Date.now(), g()) : e && (l = new Promise((m, p) => {
      a = i ? p : m, r = setTimeout(() => {
        s = Date.now(), o = !0, m(g()), h();
      }, Math.max(0, d - f));
    })), !t && !r && (r = setTimeout(() => o = !0, d)), o = !1, l);
  };
}
function xu(n) {
  return n;
}
function wu(n) {
  return iu() ? (su(n), !0) : !1;
}
function Cu(n, e = 200, t = !1, i = !0, s = !1) {
  return vu(Eu(e, t, i, s), n);
}
function Au(n) {
  var e;
  const t = To(n);
  return (e = t == null ? void 0 : t.$el) != null ? e : t;
}
const Iu = Ye ? window : void 0;
function Vn(...n) {
  let e, t, i, s;
  if (yu(n[0]) || Array.isArray(n[0]) ? ([t, i, s] = n, e = Iu) : [e, t, i, s] = n, !e)
    return qr;
  Array.isArray(t) || (t = [t]), Array.isArray(i) || (i = [i]);
  const r = [], o = () => {
    r.forEach((c) => c()), r.length = 0;
  }, a = (c, u, d, f) => (c.addEventListener(u, d, f), () => c.removeEventListener(u, d, f)), l = nn(() => [Au(e), To(s)], ([c, u]) => {
    o(), c && r.push(...t.flatMap((d) => i.map((f) => a(c, d, f, u))));
  }, { immediate: !0, flush: "post" }), h = () => {
    l(), o();
  };
  return wu(h), h;
}
const Ra = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ba = "__vueuse_ssr_handlers__";
Ra[ba] = Ra[ba] || {};
var La;
(function(n) {
  n.UP = "UP", n.RIGHT = "RIGHT", n.DOWN = "DOWN", n.LEFT = "LEFT", n.NONE = "NONE";
})(La || (La = {}));
var Tu = Object.defineProperty, Ma = Object.getOwnPropertySymbols, Su = Object.prototype.hasOwnProperty, Ru = Object.prototype.propertyIsEnumerable, Da = (n, e, t) => e in n ? Tu(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t, bu = (n, e) => {
  for (var t in e || (e = {}))
    Su.call(e, t) && Da(n, t, e[t]);
  if (Ma)
    for (var t of Ma(e))
      Ru.call(e, t) && Da(n, t, e[t]);
  return n;
};
const Lu = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
bu({
  linear: xu
}, Lu);
const Mu = (n, e) => {
  if (!Ye || !n || !e)
    return !1;
  const t = n.getBoundingClientRect();
  let i;
  return e instanceof Element ? i = e.getBoundingClientRect() : i = {
    top: 0,
    right: window.innerWidth,
    bottom: window.innerHeight,
    left: 0
  }, t.top < i.bottom && t.bottom > i.top && t.right > i.left && t.left < i.right;
};
/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Du = () => {
}, Pu = Object.prototype.hasOwnProperty, Pa = (n, e) => Pu.call(n, e), Fi = Array.isArray, ti = (n) => typeof n == "string", So = (n) => n !== null && typeof n == "object", Ou = (n) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t) => e[t] || (e[t] = n(t));
}, ku = /-(\w)/g, Fu = Ou((n) => n.replace(ku, (e, t) => t ? t.toUpperCase() : ""));
var uh = typeof global == "object" && global && global.Object === Object && global, Nu = typeof self == "object" && self && self.Object === Object && self, yt = uh || Nu || Function("return this")(), pt = yt.Symbol, dh = Object.prototype, Gu = dh.hasOwnProperty, Bu = dh.toString, wi = pt ? pt.toStringTag : void 0;
function zu(n) {
  var e = Gu.call(n, wi), t = n[wi];
  try {
    n[wi] = void 0;
    var i = !0;
  } catch {
  }
  var s = Bu.call(n);
  return i && (e ? n[wi] = t : delete n[wi]), s;
}
var Wu = Object.prototype, Xu = Wu.toString;
function Ku(n) {
  return Xu.call(n);
}
var Yu = "[object Null]", Uu = "[object Undefined]", Oa = pt ? pt.toStringTag : void 0;
function hi(n) {
  return n == null ? n === void 0 ? Uu : Yu : Oa && Oa in Object(n) ? zu(n) : Ku(n);
}
function ni(n) {
  return n != null && typeof n == "object";
}
var Vu = "[object Symbol]";
function Ys(n) {
  return typeof n == "symbol" || ni(n) && hi(n) == Vu;
}
function Zu(n, e) {
  for (var t = -1, i = n == null ? 0 : n.length, s = Array(i); ++t < i; )
    s[t] = e(n[t], t, n);
  return s;
}
var Mt = Array.isArray, ju = 1 / 0, ka = pt ? pt.prototype : void 0, Fa = ka ? ka.toString : void 0;
function fh(n) {
  if (typeof n == "string")
    return n;
  if (Mt(n))
    return Zu(n, fh) + "";
  if (Ys(n))
    return Fa ? Fa.call(n) : "";
  var e = n + "";
  return e == "0" && 1 / n == -ju ? "-0" : e;
}
var Hu = /\s/;
function Qu(n) {
  for (var e = n.length; e-- && Hu.test(n.charAt(e)); )
    ;
  return e;
}
var qu = /^\s+/;
function Ju(n) {
  return n && n.slice(0, Qu(n) + 1).replace(qu, "");
}
function rn(n) {
  var e = typeof n;
  return n != null && (e == "object" || e == "function");
}
var Na = NaN, $u = /^[-+]0x[0-9a-f]+$/i, ed = /^0b[01]+$/i, td = /^0o[0-7]+$/i, nd = parseInt;
function Ga(n) {
  if (typeof n == "number")
    return n;
  if (Ys(n))
    return Na;
  if (rn(n)) {
    var e = typeof n.valueOf == "function" ? n.valueOf() : n;
    n = rn(e) ? e + "" : e;
  }
  if (typeof n != "string")
    return n === 0 ? n : +n;
  n = Ju(n);
  var t = ed.test(n);
  return t || td.test(n) ? nd(n.slice(2), t ? 2 : 8) : $u.test(n) ? Na : +n;
}
function id(n) {
  return n;
}
var sd = "[object AsyncFunction]", rd = "[object Function]", od = "[object GeneratorFunction]", ad = "[object Proxy]";
function gh(n) {
  if (!rn(n))
    return !1;
  var e = hi(n);
  return e == rd || e == od || e == sd || e == ad;
}
var Ar = yt["__core-js_shared__"], Ba = function() {
  var n = /[^.]+$/.exec(Ar && Ar.keys && Ar.keys.IE_PROTO || "");
  return n ? "Symbol(src)_1." + n : "";
}();
function ld(n) {
  return !!Ba && Ba in n;
}
var hd = Function.prototype, cd = hd.toString;
function Rn(n) {
  if (n != null) {
    try {
      return cd.call(n);
    } catch {
    }
    try {
      return n + "";
    } catch {
    }
  }
  return "";
}
var ud = /[\\^$.*+?()[\]{}|]/g, dd = /^\[object .+?Constructor\]$/, fd = Function.prototype, gd = Object.prototype, md = fd.toString, pd = gd.hasOwnProperty, _d = RegExp(
  "^" + md.call(pd).replace(ud, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function yd(n) {
  if (!rn(n) || ld(n))
    return !1;
  var e = gh(n) ? _d : dd;
  return e.test(Rn(n));
}
function vd(n, e) {
  return n == null ? void 0 : n[e];
}
function bn(n, e) {
  var t = vd(n, e);
  return yd(t) ? t : void 0;
}
var Jr = bn(yt, "WeakMap");
function Ed(n, e, t) {
  switch (t.length) {
    case 0:
      return n.call(e);
    case 1:
      return n.call(e, t[0]);
    case 2:
      return n.call(e, t[0], t[1]);
    case 3:
      return n.call(e, t[0], t[1], t[2]);
  }
  return n.apply(e, t);
}
var xd = 800, wd = 16, Cd = Date.now;
function Ad(n) {
  var e = 0, t = 0;
  return function() {
    var i = Cd(), s = wd - (i - t);
    if (t = i, s > 0) {
      if (++e >= xd)
        return arguments[0];
    } else
      e = 0;
    return n.apply(void 0, arguments);
  };
}
function Id(n) {
  return function() {
    return n;
  };
}
var Rs = function() {
  try {
    var n = bn(Object, "defineProperty");
    return n({}, "", {}), n;
  } catch {
  }
}(), Td = Rs ? function(n, e) {
  return Rs(n, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Id(e),
    writable: !0
  });
} : id;
const Sd = Td;
var Rd = Ad(Sd), bd = 9007199254740991, Ld = /^(?:0|[1-9]\d*)$/;
function Ro(n, e) {
  var t = typeof n;
  return e = e ?? bd, !!e && (t == "number" || t != "symbol" && Ld.test(n)) && n > -1 && n % 1 == 0 && n < e;
}
function Md(n, e, t) {
  e == "__proto__" && Rs ? Rs(n, e, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : n[e] = t;
}
function bo(n, e) {
  return n === e || n !== n && e !== e;
}
var Dd = Object.prototype, Pd = Dd.hasOwnProperty;
function Od(n, e, t) {
  var i = n[e];
  (!(Pd.call(n, e) && bo(i, t)) || t === void 0 && !(e in n)) && Md(n, e, t);
}
var za = Math.max;
function kd(n, e, t) {
  return e = za(e === void 0 ? n.length - 1 : e, 0), function() {
    for (var i = arguments, s = -1, r = za(i.length - e, 0), o = Array(r); ++s < r; )
      o[s] = i[e + s];
    s = -1;
    for (var a = Array(e + 1); ++s < e; )
      a[s] = i[s];
    return a[e] = t(o), Ed(n, this, a);
  };
}
var Fd = 9007199254740991;
function Lo(n) {
  return typeof n == "number" && n > -1 && n % 1 == 0 && n <= Fd;
}
function Nd(n) {
  return n != null && Lo(n.length) && !gh(n);
}
var Gd = Object.prototype;
function Bd(n) {
  var e = n && n.constructor, t = typeof e == "function" && e.prototype || Gd;
  return n === t;
}
function zd(n, e) {
  for (var t = -1, i = Array(n); ++t < n; )
    i[t] = e(t);
  return i;
}
var Wd = "[object Arguments]";
function Wa(n) {
  return ni(n) && hi(n) == Wd;
}
var mh = Object.prototype, Xd = mh.hasOwnProperty, Kd = mh.propertyIsEnumerable, Mo = Wa(/* @__PURE__ */ function() {
  return arguments;
}()) ? Wa : function(n) {
  return ni(n) && Xd.call(n, "callee") && !Kd.call(n, "callee");
};
function Yd() {
  return !1;
}
var ph = typeof exports == "object" && exports && !exports.nodeType && exports, Xa = ph && typeof module == "object" && module && !module.nodeType && module, Ud = Xa && Xa.exports === ph, Ka = Ud ? yt.Buffer : void 0, Vd = Ka ? Ka.isBuffer : void 0, $r = Vd || Yd, Zd = "[object Arguments]", jd = "[object Array]", Hd = "[object Boolean]", Qd = "[object Date]", qd = "[object Error]", Jd = "[object Function]", $d = "[object Map]", ef = "[object Number]", tf = "[object Object]", nf = "[object RegExp]", sf = "[object Set]", rf = "[object String]", of = "[object WeakMap]", af = "[object ArrayBuffer]", lf = "[object DataView]", hf = "[object Float32Array]", cf = "[object Float64Array]", uf = "[object Int8Array]", df = "[object Int16Array]", ff = "[object Int32Array]", gf = "[object Uint8Array]", mf = "[object Uint8ClampedArray]", pf = "[object Uint16Array]", _f = "[object Uint32Array]", fe = {};
fe[hf] = fe[cf] = fe[uf] = fe[df] = fe[ff] = fe[gf] = fe[mf] = fe[pf] = fe[_f] = !0;
fe[Zd] = fe[jd] = fe[af] = fe[Hd] = fe[lf] = fe[Qd] = fe[qd] = fe[Jd] = fe[$d] = fe[ef] = fe[tf] = fe[nf] = fe[sf] = fe[rf] = fe[of] = !1;
function yf(n) {
  return ni(n) && Lo(n.length) && !!fe[hi(n)];
}
function vf(n) {
  return function(e) {
    return n(e);
  };
}
var _h = typeof exports == "object" && exports && !exports.nodeType && exports, Li = _h && typeof module == "object" && module && !module.nodeType && module, Ef = Li && Li.exports === _h, Ir = Ef && uh.process, Ya = function() {
  try {
    var n = Li && Li.require && Li.require("util").types;
    return n || Ir && Ir.binding && Ir.binding("util");
  } catch {
  }
}(), Ua = Ya && Ya.isTypedArray, yh = Ua ? vf(Ua) : yf, xf = Object.prototype, wf = xf.hasOwnProperty;
function Cf(n, e) {
  var t = Mt(n), i = !t && Mo(n), s = !t && !i && $r(n), r = !t && !i && !s && yh(n), o = t || i || s || r, a = o ? zd(n.length, String) : [], l = a.length;
  for (var h in n)
    (e || wf.call(n, h)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    r && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
    Ro(h, l))) && a.push(h);
  return a;
}
function Af(n, e) {
  return function(t) {
    return n(e(t));
  };
}
var If = Af(Object.keys, Object), Tf = Object.prototype, Sf = Tf.hasOwnProperty;
function Rf(n) {
  if (!Bd(n))
    return If(n);
  var e = [];
  for (var t in Object(n))
    Sf.call(n, t) && t != "constructor" && e.push(t);
  return e;
}
function bf(n) {
  return Nd(n) ? Cf(n) : Rf(n);
}
var Lf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Mf = /^\w*$/;
function Df(n, e) {
  if (Mt(n))
    return !1;
  var t = typeof n;
  return t == "number" || t == "symbol" || t == "boolean" || n == null || Ys(n) ? !0 : Mf.test(n) || !Lf.test(n) || e != null && n in Object(e);
}
var Ni = bn(Object, "create");
function Pf() {
  this.__data__ = Ni ? Ni(null) : {}, this.size = 0;
}
function Of(n) {
  var e = this.has(n) && delete this.__data__[n];
  return this.size -= e ? 1 : 0, e;
}
var kf = "__lodash_hash_undefined__", Ff = Object.prototype, Nf = Ff.hasOwnProperty;
function Gf(n) {
  var e = this.__data__;
  if (Ni) {
    var t = e[n];
    return t === kf ? void 0 : t;
  }
  return Nf.call(e, n) ? e[n] : void 0;
}
var Bf = Object.prototype, zf = Bf.hasOwnProperty;
function Wf(n) {
  var e = this.__data__;
  return Ni ? e[n] !== void 0 : zf.call(e, n);
}
var Xf = "__lodash_hash_undefined__";
function Kf(n, e) {
  var t = this.__data__;
  return this.size += this.has(n) ? 0 : 1, t[n] = Ni && e === void 0 ? Xf : e, this;
}
function In(n) {
  var e = -1, t = n == null ? 0 : n.length;
  for (this.clear(); ++e < t; ) {
    var i = n[e];
    this.set(i[0], i[1]);
  }
}
In.prototype.clear = Pf;
In.prototype.delete = Of;
In.prototype.get = Gf;
In.prototype.has = Wf;
In.prototype.set = Kf;
function Yf() {
  this.__data__ = [], this.size = 0;
}
function Us(n, e) {
  for (var t = n.length; t--; )
    if (bo(n[t][0], e))
      return t;
  return -1;
}
var Uf = Array.prototype, Vf = Uf.splice;
function Zf(n) {
  var e = this.__data__, t = Us(e, n);
  if (t < 0)
    return !1;
  var i = e.length - 1;
  return t == i ? e.pop() : Vf.call(e, t, 1), --this.size, !0;
}
function jf(n) {
  var e = this.__data__, t = Us(e, n);
  return t < 0 ? void 0 : e[t][1];
}
function Hf(n) {
  return Us(this.__data__, n) > -1;
}
function Qf(n, e) {
  var t = this.__data__, i = Us(t, n);
  return i < 0 ? (++this.size, t.push([n, e])) : t[i][1] = e, this;
}
function Ot(n) {
  var e = -1, t = n == null ? 0 : n.length;
  for (this.clear(); ++e < t; ) {
    var i = n[e];
    this.set(i[0], i[1]);
  }
}
Ot.prototype.clear = Yf;
Ot.prototype.delete = Zf;
Ot.prototype.get = jf;
Ot.prototype.has = Hf;
Ot.prototype.set = Qf;
var Gi = bn(yt, "Map");
function qf() {
  this.size = 0, this.__data__ = {
    hash: new In(),
    map: new (Gi || Ot)(),
    string: new In()
  };
}
function Jf(n) {
  var e = typeof n;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? n !== "__proto__" : n === null;
}
function Vs(n, e) {
  var t = n.__data__;
  return Jf(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map;
}
function $f(n) {
  var e = Vs(this, n).delete(n);
  return this.size -= e ? 1 : 0, e;
}
function eg(n) {
  return Vs(this, n).get(n);
}
function tg(n) {
  return Vs(this, n).has(n);
}
function ng(n, e) {
  var t = Vs(this, n), i = t.size;
  return t.set(n, e), this.size += t.size == i ? 0 : 1, this;
}
function kt(n) {
  var e = -1, t = n == null ? 0 : n.length;
  for (this.clear(); ++e < t; ) {
    var i = n[e];
    this.set(i[0], i[1]);
  }
}
kt.prototype.clear = qf;
kt.prototype.delete = $f;
kt.prototype.get = eg;
kt.prototype.has = tg;
kt.prototype.set = ng;
var ig = "Expected a function";
function Do(n, e) {
  if (typeof n != "function" || e != null && typeof e != "function")
    throw new TypeError(ig);
  var t = function() {
    var i = arguments, s = e ? e.apply(this, i) : i[0], r = t.cache;
    if (r.has(s))
      return r.get(s);
    var o = n.apply(this, i);
    return t.cache = r.set(s, o) || r, o;
  };
  return t.cache = new (Do.Cache || kt)(), t;
}
Do.Cache = kt;
var sg = 500;
function rg(n) {
  var e = Do(n, function(i) {
    return t.size === sg && t.clear(), i;
  }), t = e.cache;
  return e;
}
var og = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ag = /\\(\\)?/g, lg = rg(function(n) {
  var e = [];
  return n.charCodeAt(0) === 46 && e.push(""), n.replace(og, function(t, i, s, r) {
    e.push(s ? r.replace(ag, "$1") : i || t);
  }), e;
});
function hg(n) {
  return n == null ? "" : fh(n);
}
function Zs(n, e) {
  return Mt(n) ? n : Df(n, e) ? [n] : lg(hg(n));
}
var cg = 1 / 0;
function Po(n) {
  if (typeof n == "string" || Ys(n))
    return n;
  var e = n + "";
  return e == "0" && 1 / n == -cg ? "-0" : e;
}
function vh(n, e) {
  e = Zs(e, n);
  for (var t = 0, i = e.length; n != null && t < i; )
    n = n[Po(e[t++])];
  return t && t == i ? n : void 0;
}
function ug(n, e, t) {
  var i = n == null ? void 0 : vh(n, e);
  return i === void 0 ? t : i;
}
function Eh(n, e) {
  for (var t = -1, i = e.length, s = n.length; ++t < i; )
    n[s + t] = e[t];
  return n;
}
var Va = pt ? pt.isConcatSpreadable : void 0;
function dg(n) {
  return Mt(n) || Mo(n) || !!(Va && n && n[Va]);
}
function xh(n, e, t, i, s) {
  var r = -1, o = n.length;
  for (t || (t = dg), s || (s = []); ++r < o; ) {
    var a = n[r];
    e > 0 && t(a) ? e > 1 ? xh(a, e - 1, t, i, s) : Eh(s, a) : i || (s[s.length] = a);
  }
  return s;
}
function fg(n) {
  var e = n == null ? 0 : n.length;
  return e ? xh(n, 1) : [];
}
function gg(n) {
  return Rd(kd(n, void 0, fg), n + "");
}
function mg() {
  this.__data__ = new Ot(), this.size = 0;
}
function pg(n) {
  var e = this.__data__, t = e.delete(n);
  return this.size = e.size, t;
}
function _g(n) {
  return this.__data__.get(n);
}
function yg(n) {
  return this.__data__.has(n);
}
var vg = 200;
function Eg(n, e) {
  var t = this.__data__;
  if (t instanceof Ot) {
    var i = t.__data__;
    if (!Gi || i.length < vg - 1)
      return i.push([n, e]), this.size = ++t.size, this;
    t = this.__data__ = new kt(i);
  }
  return t.set(n, e), this.size = t.size, this;
}
function en(n) {
  var e = this.__data__ = new Ot(n);
  this.size = e.size;
}
en.prototype.clear = mg;
en.prototype.delete = pg;
en.prototype.get = _g;
en.prototype.has = yg;
en.prototype.set = Eg;
function xg(n, e) {
  for (var t = -1, i = n == null ? 0 : n.length, s = 0, r = []; ++t < i; ) {
    var o = n[t];
    e(o, t, n) && (r[s++] = o);
  }
  return r;
}
function wg() {
  return [];
}
var Cg = Object.prototype, Ag = Cg.propertyIsEnumerable, Za = Object.getOwnPropertySymbols, Ig = Za ? function(n) {
  return n == null ? [] : (n = Object(n), xg(Za(n), function(e) {
    return Ag.call(n, e);
  }));
} : wg;
const Tg = Ig;
function Sg(n, e, t) {
  var i = e(n);
  return Mt(n) ? i : Eh(i, t(n));
}
function ja(n) {
  return Sg(n, bf, Tg);
}
var eo = bn(yt, "DataView"), to = bn(yt, "Promise"), no = bn(yt, "Set"), Ha = "[object Map]", Rg = "[object Object]", Qa = "[object Promise]", qa = "[object Set]", Ja = "[object WeakMap]", $a = "[object DataView]", bg = Rn(eo), Lg = Rn(Gi), Mg = Rn(to), Dg = Rn(no), Pg = Rn(Jr), mn = hi;
(eo && mn(new eo(new ArrayBuffer(1))) != $a || Gi && mn(new Gi()) != Ha || to && mn(to.resolve()) != Qa || no && mn(new no()) != qa || Jr && mn(new Jr()) != Ja) && (mn = function(n) {
  var e = hi(n), t = e == Rg ? n.constructor : void 0, i = t ? Rn(t) : "";
  if (i)
    switch (i) {
      case bg:
        return $a;
      case Lg:
        return Ha;
      case Mg:
        return Qa;
      case Dg:
        return qa;
      case Pg:
        return Ja;
    }
  return e;
});
const el = mn;
var Og = yt.Uint8Array;
const tl = Og;
var kg = "__lodash_hash_undefined__";
function Fg(n) {
  return this.__data__.set(n, kg), this;
}
function Ng(n) {
  return this.__data__.has(n);
}
function bs(n) {
  var e = -1, t = n == null ? 0 : n.length;
  for (this.__data__ = new kt(); ++e < t; )
    this.add(n[e]);
}
bs.prototype.add = bs.prototype.push = Fg;
bs.prototype.has = Ng;
function Gg(n, e) {
  for (var t = -1, i = n == null ? 0 : n.length; ++t < i; )
    if (e(n[t], t, n))
      return !0;
  return !1;
}
function Bg(n, e) {
  return n.has(e);
}
var zg = 1, Wg = 2;
function wh(n, e, t, i, s, r) {
  var o = t & zg, a = n.length, l = e.length;
  if (a != l && !(o && l > a))
    return !1;
  var h = r.get(n), c = r.get(e);
  if (h && c)
    return h == e && c == n;
  var u = -1, d = !0, f = t & Wg ? new bs() : void 0;
  for (r.set(n, e), r.set(e, n); ++u < a; ) {
    var g = n[u], m = e[u];
    if (i)
      var p = o ? i(m, g, u, e, n, r) : i(g, m, u, n, e, r);
    if (p !== void 0) {
      if (p)
        continue;
      d = !1;
      break;
    }
    if (f) {
      if (!Gg(e, function(_, y) {
        if (!Bg(f, y) && (g === _ || s(g, _, t, i, r)))
          return f.push(y);
      })) {
        d = !1;
        break;
      }
    } else if (!(g === m || s(g, m, t, i, r))) {
      d = !1;
      break;
    }
  }
  return r.delete(n), r.delete(e), d;
}
function Xg(n) {
  var e = -1, t = Array(n.size);
  return n.forEach(function(i, s) {
    t[++e] = [s, i];
  }), t;
}
function Kg(n) {
  var e = -1, t = Array(n.size);
  return n.forEach(function(i) {
    t[++e] = i;
  }), t;
}
var Yg = 1, Ug = 2, Vg = "[object Boolean]", Zg = "[object Date]", jg = "[object Error]", Hg = "[object Map]", Qg = "[object Number]", qg = "[object RegExp]", Jg = "[object Set]", $g = "[object String]", em = "[object Symbol]", tm = "[object ArrayBuffer]", nm = "[object DataView]", nl = pt ? pt.prototype : void 0, Tr = nl ? nl.valueOf : void 0;
function im(n, e, t, i, s, r, o) {
  switch (t) {
    case nm:
      if (n.byteLength != e.byteLength || n.byteOffset != e.byteOffset)
        return !1;
      n = n.buffer, e = e.buffer;
    case tm:
      return !(n.byteLength != e.byteLength || !r(new tl(n), new tl(e)));
    case Vg:
    case Zg:
    case Qg:
      return bo(+n, +e);
    case jg:
      return n.name == e.name && n.message == e.message;
    case qg:
    case $g:
      return n == e + "";
    case Hg:
      var a = Xg;
    case Jg:
      var l = i & Yg;
      if (a || (a = Kg), n.size != e.size && !l)
        return !1;
      var h = o.get(n);
      if (h)
        return h == e;
      i |= Ug, o.set(n, e);
      var c = wh(a(n), a(e), i, s, r, o);
      return o.delete(n), c;
    case em:
      if (Tr)
        return Tr.call(n) == Tr.call(e);
  }
  return !1;
}
var sm = 1, rm = Object.prototype, om = rm.hasOwnProperty;
function am(n, e, t, i, s, r) {
  var o = t & sm, a = ja(n), l = a.length, h = ja(e), c = h.length;
  if (l != c && !o)
    return !1;
  for (var u = l; u--; ) {
    var d = a[u];
    if (!(o ? d in e : om.call(e, d)))
      return !1;
  }
  var f = r.get(n), g = r.get(e);
  if (f && g)
    return f == e && g == n;
  var m = !0;
  r.set(n, e), r.set(e, n);
  for (var p = o; ++u < l; ) {
    d = a[u];
    var _ = n[d], y = e[d];
    if (i)
      var x = o ? i(y, _, d, e, n, r) : i(_, y, d, n, e, r);
    if (!(x === void 0 ? _ === y || s(_, y, t, i, r) : x)) {
      m = !1;
      break;
    }
    p || (p = d == "constructor");
  }
  if (m && !p) {
    var v = n.constructor, E = e.constructor;
    v != E && "constructor" in n && "constructor" in e && !(typeof v == "function" && v instanceof v && typeof E == "function" && E instanceof E) && (m = !1);
  }
  return r.delete(n), r.delete(e), m;
}
var lm = 1, il = "[object Arguments]", sl = "[object Array]", gs = "[object Object]", hm = Object.prototype, rl = hm.hasOwnProperty;
function cm(n, e, t, i, s, r) {
  var o = Mt(n), a = Mt(e), l = o ? sl : el(n), h = a ? sl : el(e);
  l = l == il ? gs : l, h = h == il ? gs : h;
  var c = l == gs, u = h == gs, d = l == h;
  if (d && $r(n)) {
    if (!$r(e))
      return !1;
    o = !0, c = !1;
  }
  if (d && !c)
    return r || (r = new en()), o || yh(n) ? wh(n, e, t, i, s, r) : im(n, e, l, t, i, s, r);
  if (!(t & lm)) {
    var f = c && rl.call(n, "__wrapped__"), g = u && rl.call(e, "__wrapped__");
    if (f || g) {
      var m = f ? n.value() : n, p = g ? e.value() : e;
      return r || (r = new en()), s(m, p, t, i, r);
    }
  }
  return d ? (r || (r = new en()), am(n, e, t, i, s, r)) : !1;
}
function Ch(n, e, t, i, s) {
  return n === e ? !0 : n == null || e == null || !ni(n) && !ni(e) ? n !== n && e !== e : cm(n, e, t, i, Ch, s);
}
function um(n, e) {
  return n != null && e in Object(n);
}
function dm(n, e, t) {
  e = Zs(e, n);
  for (var i = -1, s = e.length, r = !1; ++i < s; ) {
    var o = Po(e[i]);
    if (!(r = n != null && t(n, o)))
      break;
    n = n[o];
  }
  return r || ++i != s ? r : (s = n == null ? 0 : n.length, !!s && Lo(s) && Ro(o, s) && (Mt(n) || Mo(n)));
}
function fm(n, e) {
  return n != null && dm(n, e, um);
}
var Sr = function() {
  return yt.Date.now();
}, gm = "Expected a function", mm = Math.max, pm = Math.min;
function _m(n, e, t) {
  var i, s, r, o, a, l, h = 0, c = !1, u = !1, d = !0;
  if (typeof n != "function")
    throw new TypeError(gm);
  e = Ga(e) || 0, rn(t) && (c = !!t.leading, u = "maxWait" in t, r = u ? mm(Ga(t.maxWait) || 0, e) : r, d = "trailing" in t ? !!t.trailing : d);
  function f(w) {
    var I = i, C = s;
    return i = s = void 0, h = w, o = n.apply(C, I), o;
  }
  function g(w) {
    return h = w, a = setTimeout(_, e), c ? f(w) : o;
  }
  function m(w) {
    var I = w - l, C = w - h, R = e - I;
    return u ? pm(R, r - C) : R;
  }
  function p(w) {
    var I = w - l, C = w - h;
    return l === void 0 || I >= e || I < 0 || u && C >= r;
  }
  function _() {
    var w = Sr();
    if (p(w))
      return y(w);
    a = setTimeout(_, m(w));
  }
  function y(w) {
    return a = void 0, d && i ? f(w) : (i = s = void 0, o);
  }
  function x() {
    a !== void 0 && clearTimeout(a), h = 0, i = l = s = a = void 0;
  }
  function v() {
    return a === void 0 ? o : y(Sr());
  }
  function E() {
    var w = Sr(), I = p(w);
    if (i = arguments, s = this, l = w, I) {
      if (a === void 0)
        return g(l);
      if (u)
        return clearTimeout(a), a = setTimeout(_, e), f(l);
    }
    return a === void 0 && (a = setTimeout(_, e)), o;
  }
  return E.cancel = x, E.flush = v, E;
}
function Ah(n) {
  for (var e = -1, t = n == null ? 0 : n.length, i = {}; ++e < t; ) {
    var s = n[e];
    i[s[0]] = s[1];
  }
  return i;
}
function ym(n, e) {
  return Ch(n, e);
}
function vm(n) {
  return n == null;
}
function Em(n, e, t, i) {
  if (!rn(n))
    return n;
  e = Zs(e, n);
  for (var s = -1, r = e.length, o = r - 1, a = n; a != null && ++s < r; ) {
    var l = Po(e[s]), h = t;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return n;
    if (s != o) {
      var c = a[l];
      h = i ? i(c, l, a) : void 0, h === void 0 && (h = rn(c) ? c : Ro(e[s + 1]) ? [] : {});
    }
    Od(a, l, h), a = a[l];
  }
  return n;
}
function xm(n, e, t) {
  for (var i = -1, s = e.length, r = {}; ++i < s; ) {
    var o = e[i], a = vh(n, o);
    t(a, o) && Em(r, Zs(o, n), a);
  }
  return r;
}
function wm(n, e) {
  return xm(n, e, function(t, i) {
    return fm(n, i);
  });
}
var Cm = gg(function(n, e) {
  return n == null ? {} : wm(n, e);
}), Am = "Expected a function";
function Rr(n, e, t) {
  var i = !0, s = !0;
  if (typeof n != "function")
    throw new TypeError(Am);
  return rn(t) && (i = "leading" in t ? !!t.leading : i, s = "trailing" in t ? !!t.trailing : s), _m(n, e, {
    leading: i,
    maxWait: e,
    trailing: s
  });
}
const Ls = (n) => n === void 0, io = (n) => typeof n == "boolean", Tn = (n) => typeof n == "number", Im = (n) => typeof Element > "u" ? !1 : n instanceof Element, so = (n) => vm(n), Tm = (n) => ti(n) ? !Number.isNaN(Number(n)) : !1, Sm = (n) => Object.keys(n);
class Rm extends Error {
  constructor(e) {
    super(e), this.name = "ElementPlusError";
  }
}
function Ln(n, e) {
  if (process.env.NODE_ENV !== "production") {
    const t = ti(n) ? new Rm(`[${n}] ${e}`) : n;
    console.warn(t);
  }
}
const bm = "utils/dom/style", Lm = (n, e) => {
  var t;
  if (!Ye || !n || !e)
    return "";
  let i = Fu(e);
  i === "float" && (i = "cssFloat");
  try {
    const s = n.style[i];
    if (s)
      return s;
    const r = (t = document.defaultView) == null ? void 0 : t.getComputedStyle(n, "");
    return r ? r[i] : "";
  } catch {
    return n.style[i];
  }
};
function Mm(n, e = "px") {
  if (!n)
    return "";
  if (Tn(n) || Tm(n))
    return `${n}${e}`;
  if (ti(n))
    return n;
  Ln(bm, "binding value must be a string or number");
}
const Dm = (n, e) => {
  if (!Ye)
    return !1;
  const t = {
    undefined: "overflow",
    true: "overflow-y",
    false: "overflow-x"
  }[String(e)], i = Lm(n, t);
  return ["scroll", "auto", "overlay"].some((s) => i.includes(s));
}, Pm = (n, e) => {
  if (!Ye)
    return;
  let t = n;
  for (; t; ) {
    if ([window, document, document.documentElement].includes(t))
      return window;
    if (Dm(t, e))
      return t;
    t = t.parentNode;
  }
  return t;
};
/*! Element Plus Icons Vue v2.3.1 */
var Om = /* @__PURE__ */ ye({
  name: "ArrowLeft",
  __name: "arrow-left",
  setup(n) {
    return (e, t) => (j(), ee("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      J("path", {
        fill: "currentColor",
        d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
}), km = Om, Fm = /* @__PURE__ */ ye({
  name: "ArrowRight",
  __name: "arrow-right",
  setup(n) {
    return (e, t) => (j(), ee("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      J("path", {
        fill: "currentColor",
        d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
}), Nm = Fm, Gm = /* @__PURE__ */ ye({
  name: "Close",
  __name: "close",
  setup(n) {
    return (e, t) => (j(), ee("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      J("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Bm = Gm, zm = /* @__PURE__ */ ye({
  name: "FullScreen",
  __name: "full-screen",
  setup(n) {
    return (e, t) => (j(), ee("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      J("path", {
        fill: "currentColor",
        d: "m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64z"
      })
    ]));
  }
}), Wm = zm, Xm = /* @__PURE__ */ ye({
  name: "RefreshLeft",
  __name: "refresh-left",
  setup(n) {
    return (e, t) => (j(), ee("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      J("path", {
        fill: "currentColor",
        d: "M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"
      })
    ]));
  }
}), Km = Xm, Ym = /* @__PURE__ */ ye({
  name: "RefreshRight",
  __name: "refresh-right",
  setup(n) {
    return (e, t) => (j(), ee("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      J("path", {
        fill: "currentColor",
        d: "M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"
      })
    ]));
  }
}), Um = Ym, Vm = /* @__PURE__ */ ye({
  name: "ScaleToOriginal",
  __name: "scale-to-original",
  setup(n) {
    return (e, t) => (j(), ee("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      J("path", {
        fill: "currentColor",
        d: "M813.176 180.706a60.235 60.235 0 0 1 60.236 60.235v481.883a60.235 60.235 0 0 1-60.236 60.235H210.824a60.235 60.235 0 0 1-60.236-60.235V240.94a60.235 60.235 0 0 1 60.236-60.235h602.352zm0-60.235H210.824A120.47 120.47 0 0 0 90.353 240.94v481.883a120.47 120.47 0 0 0 120.47 120.47h602.353a120.47 120.47 0 0 0 120.471-120.47V240.94a120.47 120.47 0 0 0-120.47-120.47zm-120.47 180.705a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 0 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zm-361.412 0a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 1 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118M512 361.412a30.118 30.118 0 0 0-30.118 30.117v30.118a30.118 30.118 0 0 0 60.236 0V391.53A30.118 30.118 0 0 0 512 361.412M512 512a30.118 30.118 0 0 0-30.118 30.118v30.117a30.118 30.118 0 0 0 60.236 0v-30.117A30.118 30.118 0 0 0 512 512"
      })
    ]));
  }
}), Zm = Vm, jm = /* @__PURE__ */ ye({
  name: "ZoomIn",
  __name: "zoom-in",
  setup(n) {
    return (e, t) => (j(), ee("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      J("path", {
        fill: "currentColor",
        d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704m-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), Hm = jm, Qm = /* @__PURE__ */ ye({
  name: "ZoomOut",
  __name: "zoom-out",
  setup(n) {
    return (e, t) => (j(), ee("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      J("path", {
        fill: "currentColor",
        d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704M352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64"
      })
    ]));
  }
}), qm = Qm;
const Ih = "__epPropKey", wn = (n) => n, Jm = (n) => So(n) && !!n[Ih], Th = (n, e) => {
  if (!So(n) || Jm(n))
    return n;
  const { values: t, required: i, default: s, type: r, validator: o } = n, l = {
    type: r,
    required: !!i,
    validator: t || o ? (h) => {
      let c = !1, u = [];
      if (t && (u = Array.from(t), Pa(n, "default") && u.push(s), c || (c = u.includes(h))), o && (c || (c = o(h))), !c && u.length > 0) {
        const d = [...new Set(u)].map((f) => JSON.stringify(f)).join(", ");
        ru(`Invalid prop: validation failed${e ? ` for prop "${e}"` : ""}. Expected one of [${d}], got value ${JSON.stringify(h)}.`);
      }
      return c;
    } : void 0,
    [Ih]: !0
  };
  return Pa(n, "default") && (l.default = s), l;
}, js = (n) => Ah(Object.entries(n).map(([e, t]) => [
  e,
  Th(t, e)
])), Hs = (n, e) => {
  if (n.install = (t) => {
    for (const i of [n, ...Object.values(e ?? {})])
      t.component(i.name, i);
  }, e)
    for (const [t, i] of Object.entries(e))
      n[t] = i;
  return n;
}, Sh = (n) => (n.install = Du, n), kn = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
}, Qs = "update:modelValue", $m = ["", "default", "small", "large"], Rh = (n) => n, ep = ["class", "style"], tp = /^on[A-Z]/, np = (n = {}) => {
  const { excludeListeners: e = !1, excludeKeys: t } = n, i = W(() => ((t == null ? void 0 : t.value) || []).concat(ep)), s = sn();
  return s ? W(() => {
    var r;
    return Ah(Object.entries((r = s.proxy) == null ? void 0 : r.$attrs).filter(([o]) => !i.value.includes(o) && !(e && tp.test(o))));
  }) : (Ln("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), W(() => ({})));
}, br = ({ from: n, replacement: e, scope: t, version: i, ref: s, type: r = "API" }, o) => {
  nn(() => T(o), (a) => {
    a && Ln(t, `[${r}] ${n} is about to be deprecated in version ${i}, please use ${e} instead.
For more detail, please visit: ${s}
`);
  }, {
    immediate: !0
  });
};
var ip = {
  name: "en",
  el: {
    breadcrumb: {
      label: "Breadcrumb"
    },
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tour: {
      next: "Next",
      previous: "Previous",
      finish: "Finish"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    },
    carousel: {
      leftArrow: "Carousel arrow left",
      rightArrow: "Carousel arrow right",
      indicator: "Carousel switch to index {index}"
    }
  }
};
const sp = (n) => (e, t) => rp(e, t, T(n)), rp = (n, e, t) => ug(t, n, n).replace(/\{(\w+)\}/g, (i, s) => {
  var r;
  return `${(r = e == null ? void 0 : e[s]) != null ? r : `{${s}}`}`;
}), op = (n) => {
  const e = W(() => T(n).name), t = Oi(n) ? n : re(n);
  return {
    lang: e,
    locale: t,
    t: sp(n)
  };
}, ap = Symbol("localeContextKey"), bh = (n) => {
  const e = n || Ae(ap, re());
  return op(W(() => e.value || ip));
}, Lr = "el", lp = "is-", dn = (n, e, t, i, s) => {
  let r = `${n}-${e}`;
  return t && (r += `-${t}`), i && (r += `__${i}`), s && (r += `--${s}`), r;
}, hp = Symbol("namespaceContextKey"), Lh = (n) => {
  const e = n || (sn() ? Ae(hp, re(Lr)) : re(Lr));
  return W(() => T(e) || Lr);
}, ci = (n, e) => {
  const t = Lh(e);
  return {
    namespace: t,
    b: (m = "") => dn(t.value, n, m, "", ""),
    e: (m) => m ? dn(t.value, n, "", m, "") : "",
    m: (m) => m ? dn(t.value, n, "", "", m) : "",
    be: (m, p) => m && p ? dn(t.value, n, m, p, "") : "",
    em: (m, p) => m && p ? dn(t.value, n, "", m, p) : "",
    bm: (m, p) => m && p ? dn(t.value, n, m, "", p) : "",
    bem: (m, p, _) => m && p && _ ? dn(t.value, n, m, p, _) : "",
    is: (m, ...p) => {
      const _ = p.length >= 1 ? p[0] : !0;
      return m && _ ? `${lp}${m}` : "";
    },
    cssVar: (m) => {
      const p = {};
      for (const _ in m)
        m[_] && (p[`--${t.value}-${_}`] = m[_]);
      return p;
    },
    cssVarName: (m) => `--${t.value}-${m}`,
    cssVarBlock: (m) => {
      const p = {};
      for (const _ in m)
        m[_] && (p[`--${t.value}-${n}-${_}`] = m[_]);
      return p;
    },
    cssVarBlockName: (m) => `--${t.value}-${n}-${m}`
  };
}, Mh = (n) => {
  const e = sn();
  return W(() => {
    var t, i;
    return (i = (t = e == null ? void 0 : e.proxy) == null ? void 0 : t.$props) == null ? void 0 : i[n];
  });
}, ro = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, cp = Symbol("elIdInjection"), up = () => sn() ? Ae(cp, ro) : ro, dp = (n) => {
  const e = up();
  !Ye && e === ro && Ln("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const t = Lh();
  return W(() => T(n) || `${t.value}-id-${e.prefix}-${e.current++}`);
}, ol = {
  current: 0
}, al = re(0), fp = 2e3, ll = Symbol("elZIndexContextKey"), gp = Symbol("zIndexContextKey"), mp = (n) => {
  const e = sn() ? Ae(ll, ol) : ol, t = n || (sn() ? Ae(gp, void 0) : void 0), i = W(() => {
    const o = T(t);
    return Tn(o) ? o : fp;
  }), s = W(() => i.value + al.value), r = () => (e.current++, al.value = e.current, s.value);
  return !Ye && !Ae(ll) && Ln("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`), {
    initialZIndex: i,
    currentZIndex: s,
    nextZIndex: r
  };
}, Dh = Th({
  type: String,
  values: $m,
  required: !1
}), pp = Symbol("size"), _p = () => {
  const n = Ae(pp, {});
  return W(() => T(n.size) || "");
};
var ui = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [i, s] of e)
    t[i] = s;
  return t;
};
const yp = js({
  size: {
    type: wn([Number, String])
  },
  color: {
    type: String
  }
}), vp = ye({
  name: "ElIcon",
  inheritAttrs: !1
}), Ep = /* @__PURE__ */ ye({
  ...vp,
  props: yp,
  setup(n) {
    const e = n, t = ci("icon"), i = W(() => {
      const { size: s, color: r } = e;
      return !s && !r ? {} : {
        fontSize: Ls(s) ? void 0 : Mm(s),
        "--color": r
      };
    });
    return (s, r) => (j(), ee("i", lh({
      class: T(t).b(),
      style: T(i)
    }, s.$attrs), [
      Jt(s.$slots, "default")
    ], 16));
  }
});
var xp = /* @__PURE__ */ ui(Ep, [["__file", "icon.vue"]]);
const Bt = Hs(xp), Oo = Symbol("formContextKey"), Ph = Symbol("formItemContextKey"), hl = (n, e = {}) => {
  const t = re(void 0), i = e.prop ? t : Mh("size"), s = e.global ? t : _p(), r = e.form ? { size: void 0 } : Ae(Oo, void 0), o = e.formItem ? { size: void 0 } : Ae(Ph, void 0);
  return W(() => i.value || T(n) || (o == null ? void 0 : o.size) || (r == null ? void 0 : r.size) || s.value || "");
}, wp = (n) => {
  const e = Mh("disabled"), t = Ae(Oo, void 0);
  return W(() => e.value || T(n) || (t == null ? void 0 : t.disabled) || !1);
}, ko = () => {
  const n = Ae(Oo, void 0), e = Ae(Ph, void 0);
  return {
    form: n,
    formItem: e
  };
}, Oh = (n, {
  formItemContext: e,
  disableIdGeneration: t,
  disableIdManagement: i
}) => {
  t || (t = re(!1)), i || (i = re(!1));
  const s = re();
  let r;
  const o = W(() => {
    var a;
    return !!(!n.label && e && e.inputIds && ((a = e.inputIds) == null ? void 0 : a.length) <= 1);
  });
  return Xs(() => {
    r = nn([ou(n, "id"), t], ([a, l]) => {
      const h = a ?? (l ? void 0 : dp().value);
      h !== s.value && (e != null && e.removeInputId && (s.value && e.removeInputId(s.value), !(i != null && i.value) && !l && h && e.addInputId(h)), s.value = h);
    }, { immediate: !0 });
  }), au(() => {
    r && r(), e != null && e.removeInputId && s.value && e.removeInputId(s.value);
  }), {
    isLabeledByFormItem: o,
    inputId: s
  };
};
function Cp(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
const kh = {
  modelValue: {
    type: [Number, String, Boolean],
    default: void 0
  },
  label: {
    type: [String, Boolean, Number, Object],
    default: void 0
  },
  value: {
    type: [String, Boolean, Number, Object],
    default: void 0
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: void 0
  },
  trueValue: {
    type: [String, Number],
    default: void 0
  },
  falseValue: {
    type: [String, Number],
    default: void 0
  },
  trueLabel: {
    type: [String, Number],
    default: void 0
  },
  falseLabel: {
    type: [String, Number],
    default: void 0
  },
  id: {
    type: String,
    default: void 0
  },
  controls: {
    type: String,
    default: void 0
  },
  border: Boolean,
  size: Dh,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: !0
  }
}, Fh = {
  [Qs]: (n) => ti(n) || Tn(n) || io(n),
  change: (n) => ti(n) || Tn(n) || io(n)
}, di = Symbol("checkboxGroupContextKey"), Ap = ({
  model: n,
  isChecked: e
}) => {
  const t = Ae(di, void 0), i = W(() => {
    var r, o;
    const a = (r = t == null ? void 0 : t.max) == null ? void 0 : r.value, l = (o = t == null ? void 0 : t.min) == null ? void 0 : o.value;
    return !Ls(a) && n.value.length >= a && !e.value || !Ls(l) && n.value.length <= l && e.value;
  });
  return {
    isDisabled: wp(W(() => (t == null ? void 0 : t.disabled.value) || i.value)),
    isLimitDisabled: i
  };
}, Ip = (n, {
  model: e,
  isLimitExceeded: t,
  hasOwnLabel: i,
  isDisabled: s,
  isLabeledByFormItem: r
}) => {
  const o = Ae(di, void 0), { formItem: a } = ko(), { emit: l } = sn();
  function h(g) {
    var m, p, _, y;
    return [!0, n.trueValue, n.trueLabel].includes(g) ? (p = (m = n.trueValue) != null ? m : n.trueLabel) != null ? p : !0 : (y = (_ = n.falseValue) != null ? _ : n.falseLabel) != null ? y : !1;
  }
  function c(g, m) {
    l("change", h(g), m);
  }
  function u(g) {
    if (t.value)
      return;
    const m = g.target;
    l("change", h(m.checked), g);
  }
  async function d(g) {
    t.value || !i.value && !s.value && r.value && (g.composedPath().some((_) => _.tagName === "LABEL") || (e.value = h([!1, n.falseValue, n.falseLabel].includes(e.value)), await Ks(), c(e.value, g)));
  }
  const f = W(() => (o == null ? void 0 : o.validateEvent) || n.validateEvent);
  return nn(() => n.modelValue, () => {
    f.value && (a == null || a.validate("change").catch((g) => Ln(g)));
  }), {
    handleChange: u,
    onClickRoot: d
  };
}, Tp = (n) => {
  const e = re(!1), { emit: t } = sn(), i = Ae(di, void 0), s = W(() => Ls(i) === !1), r = re(!1), o = W({
    get() {
      var a, l;
      return s.value ? (a = i == null ? void 0 : i.modelValue) == null ? void 0 : a.value : (l = n.modelValue) != null ? l : e.value;
    },
    set(a) {
      var l, h;
      s.value && Fi(a) ? (r.value = ((l = i == null ? void 0 : i.max) == null ? void 0 : l.value) !== void 0 && a.length > (i == null ? void 0 : i.max.value) && a.length > o.value.length, r.value === !1 && ((h = i == null ? void 0 : i.changeEvent) == null || h.call(i, a))) : (t(Qs, a), e.value = a);
    }
  });
  return {
    model: o,
    isGroup: s,
    isLimitExceeded: r
  };
}, Sp = (n, e, { model: t }) => {
  const i = Ae(di, void 0), s = re(!1), r = W(() => so(n.value) ? n.label : n.value), o = W(() => {
    const c = t.value;
    return io(c) ? c : Fi(c) ? So(r.value) ? c.map(Ia).some((u) => ym(u, r.value)) : c.map(Ia).includes(r.value) : c != null ? c === n.trueValue || c === n.trueLabel : !!c;
  }), a = hl(W(() => {
    var c;
    return (c = i == null ? void 0 : i.size) == null ? void 0 : c.value;
  }), {
    prop: !0
  }), l = hl(W(() => {
    var c;
    return (c = i == null ? void 0 : i.size) == null ? void 0 : c.value;
  })), h = W(() => !!e.default || !so(r.value));
  return {
    checkboxButtonSize: a,
    isChecked: o,
    isFocused: s,
    checkboxSize: l,
    hasOwnLabel: h,
    actualValue: r
  };
}, Nh = (n, e) => {
  const { formItem: t } = ko(), { model: i, isGroup: s, isLimitExceeded: r } = Tp(n), {
    isFocused: o,
    isChecked: a,
    checkboxButtonSize: l,
    checkboxSize: h,
    hasOwnLabel: c,
    actualValue: u
  } = Sp(n, e, { model: i }), { isDisabled: d } = Ap({ model: i, isChecked: a }), { inputId: f, isLabeledByFormItem: g } = Oh(n, {
    formItemContext: t,
    disableIdGeneration: c,
    disableIdManagement: s
  }), { handleChange: m, onClickRoot: p } = Ip(n, {
    model: i,
    isLimitExceeded: r,
    hasOwnLabel: c,
    isDisabled: d,
    isLabeledByFormItem: g
  });
  return (() => {
    function y() {
      var x, v;
      Fi(i.value) && !i.value.includes(u.value) ? i.value.push(u.value) : i.value = (v = (x = n.trueValue) != null ? x : n.trueLabel) != null ? v : !0;
    }
    n.checked && y();
  })(), br({
    from: "label act as value",
    replacement: "value",
    version: "3.0.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, W(() => s.value && so(n.value))), br({
    from: "true-label",
    replacement: "true-value",
    version: "3.0.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, W(() => !!n.trueLabel)), br({
    from: "false-label",
    replacement: "false-value",
    version: "3.0.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, W(() => !!n.falseLabel)), {
    inputId: f,
    isLabeledByFormItem: g,
    isChecked: a,
    isDisabled: d,
    isFocused: o,
    checkboxButtonSize: l,
    checkboxSize: h,
    hasOwnLabel: c,
    model: i,
    actualValue: u,
    handleChange: m,
    onClickRoot: p
  };
}, Rp = ["id", "indeterminate", "name", "tabindex", "disabled", "true-value", "false-value"], bp = ["id", "indeterminate", "disabled", "value", "name", "tabindex"], Lp = ye({
  name: "ElCheckbox"
}), Mp = /* @__PURE__ */ ye({
  ...Lp,
  props: kh,
  emits: Fh,
  setup(n) {
    const e = n, t = hh(), {
      inputId: i,
      isLabeledByFormItem: s,
      isChecked: r,
      isDisabled: o,
      isFocused: a,
      checkboxSize: l,
      hasOwnLabel: h,
      model: c,
      actualValue: u,
      handleChange: d,
      onClickRoot: f
    } = Nh(e, t), g = ci("checkbox"), m = W(() => [
      g.b(),
      g.m(l.value),
      g.is("disabled", o.value),
      g.is("bordered", e.border),
      g.is("checked", r.value)
    ]), p = W(() => [
      g.e("input"),
      g.is("disabled", o.value),
      g.is("checked", r.value),
      g.is("indeterminate", e.indeterminate),
      g.is("focus", a.value)
    ]);
    return (_, y) => (j(), $t(Io(!T(h) && T(s) ? "span" : "label"), {
      class: ue(T(m)),
      "aria-controls": _.indeterminate ? _.controls : null,
      onClick: T(f)
    }, {
      default: Fe(() => {
        var x, v;
        return [
          J("span", {
            class: ue(T(p))
          }, [
            _.trueValue || _.falseValue || _.trueLabel || _.falseLabel ? Cn((j(), ee("input", {
              key: 0,
              id: T(i),
              "onUpdate:modelValue": y[0] || (y[0] = (E) => Oi(c) ? c.value = E : null),
              class: ue(T(g).e("original")),
              type: "checkbox",
              indeterminate: _.indeterminate,
              name: _.name,
              tabindex: _.tabindex,
              disabled: T(o),
              "true-value": (x = _.trueValue) != null ? x : _.trueLabel,
              "false-value": (v = _.falseValue) != null ? v : _.falseLabel,
              onChange: y[1] || (y[1] = (...E) => T(d) && T(d)(...E)),
              onFocus: y[2] || (y[2] = (E) => a.value = !0),
              onBlur: y[3] || (y[3] = (E) => a.value = !1),
              onClick: y[4] || (y[4] = ki(() => {
              }, ["stop"]))
            }, null, 42, Rp)), [
              [Ss, T(c)]
            ]) : Cn((j(), ee("input", {
              key: 1,
              id: T(i),
              "onUpdate:modelValue": y[5] || (y[5] = (E) => Oi(c) ? c.value = E : null),
              class: ue(T(g).e("original")),
              type: "checkbox",
              indeterminate: _.indeterminate,
              disabled: T(o),
              value: T(u),
              name: _.name,
              tabindex: _.tabindex,
              onChange: y[6] || (y[6] = (...E) => T(d) && T(d)(...E)),
              onFocus: y[7] || (y[7] = (E) => a.value = !0),
              onBlur: y[8] || (y[8] = (E) => a.value = !1),
              onClick: y[9] || (y[9] = ki(() => {
              }, ["stop"]))
            }, null, 42, bp)), [
              [Ss, T(c)]
            ]),
            J("span", {
              class: ue(T(g).e("inner"))
            }, null, 2)
          ], 2),
          T(h) ? (j(), ee("span", {
            key: 0,
            class: ue(T(g).e("label"))
          }, [
            Jt(_.$slots, "default"),
            _.$slots.default ? Pe("v-if", !0) : (j(), ee(An, { key: 0 }, [
              ch(jt(_.label), 1)
            ], 64))
          ], 2)) : Pe("v-if", !0)
        ];
      }),
      _: 3
    }, 8, ["class", "aria-controls", "onClick"]));
  }
});
var Dp = /* @__PURE__ */ ui(Mp, [["__file", "checkbox.vue"]]);
const Pp = ["name", "tabindex", "disabled", "true-value", "false-value"], Op = ["name", "tabindex", "disabled", "value"], kp = ye({
  name: "ElCheckboxButton"
}), Fp = /* @__PURE__ */ ye({
  ...kp,
  props: kh,
  emits: Fh,
  setup(n) {
    const e = n, t = hh(), {
      isFocused: i,
      isChecked: s,
      isDisabled: r,
      checkboxButtonSize: o,
      model: a,
      actualValue: l,
      handleChange: h
    } = Nh(e, t), c = Ae(di, void 0), u = ci("checkbox"), d = W(() => {
      var g, m, p, _;
      const y = (m = (g = c == null ? void 0 : c.fill) == null ? void 0 : g.value) != null ? m : "";
      return {
        backgroundColor: y,
        borderColor: y,
        color: (_ = (p = c == null ? void 0 : c.textColor) == null ? void 0 : p.value) != null ? _ : "",
        boxShadow: y ? `-1px 0 0 0 ${y}` : void 0
      };
    }), f = W(() => [
      u.b("button"),
      u.bm("button", o.value),
      u.is("disabled", r.value),
      u.is("checked", s.value),
      u.is("focus", i.value)
    ]);
    return (g, m) => {
      var p, _;
      return j(), ee("label", {
        class: ue(T(f))
      }, [
        g.trueValue || g.falseValue || g.trueLabel || g.falseLabel ? Cn((j(), ee("input", {
          key: 0,
          "onUpdate:modelValue": m[0] || (m[0] = (y) => Oi(a) ? a.value = y : null),
          class: ue(T(u).be("button", "original")),
          type: "checkbox",
          name: g.name,
          tabindex: g.tabindex,
          disabled: T(r),
          "true-value": (p = g.trueValue) != null ? p : g.trueLabel,
          "false-value": (_ = g.falseValue) != null ? _ : g.falseLabel,
          onChange: m[1] || (m[1] = (...y) => T(h) && T(h)(...y)),
          onFocus: m[2] || (m[2] = (y) => i.value = !0),
          onBlur: m[3] || (m[3] = (y) => i.value = !1),
          onClick: m[4] || (m[4] = ki(() => {
          }, ["stop"]))
        }, null, 42, Pp)), [
          [Ss, T(a)]
        ]) : Cn((j(), ee("input", {
          key: 1,
          "onUpdate:modelValue": m[5] || (m[5] = (y) => Oi(a) ? a.value = y : null),
          class: ue(T(u).be("button", "original")),
          type: "checkbox",
          name: g.name,
          tabindex: g.tabindex,
          disabled: T(r),
          value: T(l),
          onChange: m[6] || (m[6] = (...y) => T(h) && T(h)(...y)),
          onFocus: m[7] || (m[7] = (y) => i.value = !0),
          onBlur: m[8] || (m[8] = (y) => i.value = !1),
          onClick: m[9] || (m[9] = ki(() => {
          }, ["stop"]))
        }, null, 42, Op)), [
          [Ss, T(a)]
        ]),
        g.$slots.default || g.label ? (j(), ee("span", {
          key: 2,
          class: ue(T(u).be("button", "inner")),
          style: ei(T(s) ? T(d) : void 0)
        }, [
          Jt(g.$slots, "default", {}, () => [
            ch(jt(g.label), 1)
          ])
        ], 6)) : Pe("v-if", !0)
      ], 2);
    };
  }
});
var Gh = /* @__PURE__ */ ui(Fp, [["__file", "checkbox-button.vue"]]);
const Np = js({
  modelValue: {
    type: wn(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: Dh,
  label: String,
  fill: String,
  textColor: String,
  tag: {
    type: String,
    default: "div"
  },
  validateEvent: {
    type: Boolean,
    default: !0
  }
}), Gp = {
  [Qs]: (n) => Fi(n),
  change: (n) => Fi(n)
}, Bp = ye({
  name: "ElCheckboxGroup"
}), zp = /* @__PURE__ */ ye({
  ...Bp,
  props: Np,
  emits: Gp,
  setup(n, { emit: e }) {
    const t = n, i = ci("checkbox"), { formItem: s } = ko(), { inputId: r, isLabeledByFormItem: o } = Oh(t, {
      formItemContext: s
    }), a = async (h) => {
      e(Qs, h), await Ks(), e("change", h);
    }, l = W({
      get() {
        return t.modelValue;
      },
      set(h) {
        a(h);
      }
    });
    return lu(di, {
      ...Cm(hu(t), [
        "size",
        "min",
        "max",
        "disabled",
        "validateEvent",
        "fill",
        "textColor"
      ]),
      modelValue: l,
      changeEvent: a
    }), nn(() => t.modelValue, () => {
      t.validateEvent && (s == null || s.validate("change").catch((h) => Ln(h)));
    }), (h, c) => {
      var u;
      return j(), $t(Io(h.tag), {
        id: T(r),
        class: ue(T(i).b("group")),
        role: "group",
        "aria-label": T(o) ? void 0 : h.label || "checkbox-group",
        "aria-labelledby": T(o) ? (u = T(s)) == null ? void 0 : u.labelId : void 0
      }, {
        default: Fe(() => [
          Jt(h.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var Bh = /* @__PURE__ */ ui(zp, [["__file", "checkbox-group.vue"]]);
const Wp = Hs(Dp, {
  CheckboxButton: Gh,
  CheckboxGroup: Bh
});
Sh(Gh);
const Xp = Sh(Bh), Kp = js({
  urlList: {
    type: wn(Array),
    default: () => Rh([])
  },
  zIndex: {
    type: Number
  },
  initialIndex: {
    type: Number,
    default: 0
  },
  infinite: {
    type: Boolean,
    default: !0
  },
  hideOnClickModal: Boolean,
  teleported: Boolean,
  closeOnPressEscape: {
    type: Boolean,
    default: !0
  },
  zoomRate: {
    type: Number,
    default: 1.2
  },
  minScale: {
    type: Number,
    default: 0.2
  },
  maxScale: {
    type: Number,
    default: 7
  },
  crossorigin: {
    type: wn(String)
  }
}), Yp = {
  close: () => !0,
  switch: (n) => Tn(n),
  rotate: (n) => Tn(n)
}, Up = ["src", "crossorigin"], Vp = ye({
  name: "ElImageViewer"
}), Zp = /* @__PURE__ */ ye({
  ...Vp,
  props: Kp,
  emits: Yp,
  setup(n, { expose: e, emit: t }) {
    var i;
    const s = n, r = {
      CONTAIN: {
        name: "contain",
        icon: Ta(Wm)
      },
      ORIGINAL: {
        name: "original",
        icon: Ta(Zm)
      }
    }, { t: o } = bh(), a = ci("image-viewer"), { nextZIndex: l } = mp(), h = re(), c = re([]), u = cu(), d = re(!0), f = re(s.initialIndex), g = uu(r.CONTAIN), m = re({
      scale: 1,
      deg: 0,
      offsetX: 0,
      offsetY: 0,
      enableTransition: !1
    }), p = re((i = s.zIndex) != null ? i : l()), _ = W(() => {
      const { urlList: L } = s;
      return L.length <= 1;
    }), y = W(() => f.value === 0), x = W(() => f.value === s.urlList.length - 1), v = W(() => s.urlList[f.value]), E = W(() => [
      a.e("btn"),
      a.e("prev"),
      a.is("disabled", !s.infinite && y.value)
    ]), w = W(() => [
      a.e("btn"),
      a.e("next"),
      a.is("disabled", !s.infinite && x.value)
    ]), I = W(() => {
      const { scale: L, deg: D, offsetX: O, offsetY: $, enableTransition: S } = m.value;
      let q = O / L, de = $ / L;
      switch (D % 360) {
        case 90:
        case -270:
          [q, de] = [de, -q];
          break;
        case 180:
        case -180:
          [q, de] = [-q, -de];
          break;
        case 270:
        case -90:
          [q, de] = [-de, q];
          break;
      }
      const ce = {
        transform: `scale(${L}) rotate(${D}deg) translate(${q}px, ${de}px)`,
        transition: S ? "transform .3s" : ""
      };
      return g.value.name === r.CONTAIN.name && (ce.maxWidth = ce.maxHeight = "100%"), ce;
    });
    function C() {
      z(), t("close");
    }
    function R() {
      const L = Rr((O) => {
        switch (O.code) {
          case kn.esc:
            s.closeOnPressEscape && C();
            break;
          case kn.space:
            K();
            break;
          case kn.left:
            G();
            break;
          case kn.up:
            Y("zoomIn");
            break;
          case kn.right:
            b();
            break;
          case kn.down:
            Y("zoomOut");
            break;
        }
      }), D = Rr((O) => {
        const $ = O.deltaY || O.deltaX;
        Y($ < 0 ? "zoomIn" : "zoomOut", {
          zoomRate: s.zoomRate,
          enableTransition: !1
        });
      });
      u.run(() => {
        Vn(document, "keydown", L), Vn(document, "wheel", D);
      });
    }
    function z() {
      u.stop();
    }
    function F() {
      d.value = !1;
    }
    function B(L) {
      d.value = !1, L.target.alt = o("el.image.error");
    }
    function V(L) {
      if (d.value || L.button !== 0 || !h.value)
        return;
      m.value.enableTransition = !1;
      const { offsetX: D, offsetY: O } = m.value, $ = L.pageX, S = L.pageY, q = Rr((ce) => {
        m.value = {
          ...m.value,
          offsetX: D + ce.pageX - $,
          offsetY: O + ce.pageY - S
        };
      }), de = Vn(document, "mousemove", q);
      Vn(document, "mouseup", () => {
        de();
      }), L.preventDefault();
    }
    function X() {
      m.value = {
        scale: 1,
        deg: 0,
        offsetX: 0,
        offsetY: 0,
        enableTransition: !1
      };
    }
    function K() {
      if (d.value)
        return;
      const L = Sm(r), D = Object.values(r), O = g.value.name, S = (D.findIndex((q) => q.name === O) + 1) % L.length;
      g.value = r[L[S]], X();
    }
    function M(L) {
      const D = s.urlList.length;
      f.value = (L + D) % D;
    }
    function G() {
      y.value && !s.infinite || M(f.value - 1);
    }
    function b() {
      x.value && !s.infinite || M(f.value + 1);
    }
    function Y(L, D = {}) {
      if (d.value)
        return;
      const { minScale: O, maxScale: $ } = s, { zoomRate: S, rotateDeg: q, enableTransition: de } = {
        zoomRate: s.zoomRate,
        rotateDeg: 90,
        enableTransition: !0,
        ...D
      };
      switch (L) {
        case "zoomOut":
          m.value.scale > O && (m.value.scale = Number.parseFloat((m.value.scale / S).toFixed(3)));
          break;
        case "zoomIn":
          m.value.scale < $ && (m.value.scale = Number.parseFloat((m.value.scale * S).toFixed(3)));
          break;
        case "clockwise":
          m.value.deg += q, t("rotate", m.value.deg);
          break;
        case "anticlockwise":
          m.value.deg -= q, t("rotate", m.value.deg);
          break;
      }
      m.value.enableTransition = de;
    }
    return nn(v, () => {
      Ks(() => {
        const L = c.value[0];
        L != null && L.complete || (d.value = !0);
      });
    }), nn(f, (L) => {
      X(), t("switch", L);
    }), Xs(() => {
      var L, D;
      R(), (D = (L = h.value) == null ? void 0 : L.focus) == null || D.call(L);
    }), e({
      setActiveItem: M
    }), (L, D) => (j(), $t(du, {
      to: "body",
      disabled: !L.teleported
    }, [
      Ee(fu, {
        name: "viewer-fade",
        appear: ""
      }, {
        default: Fe(() => [
          J("div", {
            ref_key: "wrapper",
            ref: h,
            tabindex: -1,
            class: ue(T(a).e("wrapper")),
            style: ei({ zIndex: p.value })
          }, [
            J("div", {
              class: ue(T(a).e("mask")),
              onClick: D[0] || (D[0] = ki((O) => L.hideOnClickModal && C(), ["self"]))
            }, null, 2),
            Pe(" CLOSE "),
            J("span", {
              class: ue([T(a).e("btn"), T(a).e("close")]),
              onClick: C
            }, [
              Ee(T(Bt), null, {
                default: Fe(() => [
                  Ee(T(Bm))
                ]),
                _: 1
              })
            ], 2),
            Pe(" ARROW "),
            T(_) ? Pe("v-if", !0) : (j(), ee(An, { key: 0 }, [
              J("span", {
                class: ue(T(E)),
                onClick: G
              }, [
                Ee(T(Bt), null, {
                  default: Fe(() => [
                    Ee(T(km))
                  ]),
                  _: 1
                })
              ], 2),
              J("span", {
                class: ue(T(w)),
                onClick: b
              }, [
                Ee(T(Bt), null, {
                  default: Fe(() => [
                    Ee(T(Nm))
                  ]),
                  _: 1
                })
              ], 2)
            ], 64)),
            Pe(" ACTIONS "),
            J("div", {
              class: ue([T(a).e("btn"), T(a).e("actions")])
            }, [
              J("div", {
                class: ue(T(a).e("actions__inner"))
              }, [
                Ee(T(Bt), {
                  onClick: D[1] || (D[1] = (O) => Y("zoomOut"))
                }, {
                  default: Fe(() => [
                    Ee(T(qm))
                  ]),
                  _: 1
                }),
                Ee(T(Bt), {
                  onClick: D[2] || (D[2] = (O) => Y("zoomIn"))
                }, {
                  default: Fe(() => [
                    Ee(T(Hm))
                  ]),
                  _: 1
                }),
                J("i", {
                  class: ue(T(a).e("actions__divider"))
                }, null, 2),
                Ee(T(Bt), { onClick: K }, {
                  default: Fe(() => [
                    (j(), $t(Io(T(g).icon)))
                  ]),
                  _: 1
                }),
                J("i", {
                  class: ue(T(a).e("actions__divider"))
                }, null, 2),
                Ee(T(Bt), {
                  onClick: D[3] || (D[3] = (O) => Y("anticlockwise"))
                }, {
                  default: Fe(() => [
                    Ee(T(Km))
                  ]),
                  _: 1
                }),
                Ee(T(Bt), {
                  onClick: D[4] || (D[4] = (O) => Y("clockwise"))
                }, {
                  default: Fe(() => [
                    Ee(T(Um))
                  ]),
                  _: 1
                })
              ], 2)
            ], 2),
            Pe(" CANVAS "),
            J("div", {
              class: ue(T(a).e("canvas"))
            }, [
              (j(!0), ee(An, null, Hr(L.urlList, (O, $) => Cn((j(), ee("img", {
                ref_for: !0,
                ref: (S) => c.value[$] = S,
                key: O,
                src: O,
                style: ei(T(I)),
                class: ue(T(a).e("img")),
                crossorigin: L.crossorigin,
                onLoad: F,
                onError: B,
                onMousedown: V
              }, null, 46, Up)), [
                [Qr, $ === f.value]
              ])), 128))
            ], 2),
            Jt(L.$slots, "default")
          ], 6)
        ]),
        _: 3
      })
    ], 8, ["disabled"]));
  }
});
var jp = /* @__PURE__ */ ui(Zp, [["__file", "image-viewer.vue"]]);
const Hp = Hs(jp), Qp = js({
  hideOnClickModal: Boolean,
  src: {
    type: String,
    default: ""
  },
  fit: {
    type: String,
    values: ["", "contain", "cover", "fill", "none", "scale-down"],
    default: ""
  },
  loading: {
    type: String,
    values: ["eager", "lazy"]
  },
  lazy: Boolean,
  scrollContainer: {
    type: wn([String, Object])
  },
  previewSrcList: {
    type: wn(Array),
    default: () => Rh([])
  },
  previewTeleported: Boolean,
  zIndex: {
    type: Number
  },
  initialIndex: {
    type: Number,
    default: 0
  },
  infinite: {
    type: Boolean,
    default: !0
  },
  closeOnPressEscape: {
    type: Boolean,
    default: !0
  },
  zoomRate: {
    type: Number,
    default: 1.2
  },
  minScale: {
    type: Number,
    default: 0.2
  },
  maxScale: {
    type: Number,
    default: 7
  },
  crossorigin: {
    type: wn(String)
  }
}), qp = {
  load: (n) => n instanceof Event,
  error: (n) => n instanceof Event,
  switch: (n) => Tn(n),
  close: () => !0,
  show: () => !0
}, Jp = ["src", "loading", "crossorigin"], $p = { key: 0 }, e0 = ye({
  name: "ElImage",
  inheritAttrs: !1
}), t0 = /* @__PURE__ */ ye({
  ...e0,
  props: Qp,
  emits: qp,
  setup(n, { emit: e }) {
    const t = n;
    let i = "";
    const { t: s } = bh(), r = ci("image"), o = gu(), a = np(), l = re(), h = re(!1), c = re(!0), u = re(!1), d = re(), f = re(), g = Ye && "loading" in HTMLImageElement.prototype;
    let m, p;
    const _ = W(() => [
      r.e("inner"),
      v.value && r.e("preview"),
      c.value && r.is("loading")
    ]), y = W(() => o.style), x = W(() => {
      const { fit: b } = t;
      return Ye && b ? { objectFit: b } : {};
    }), v = W(() => {
      const { previewSrcList: b } = t;
      return Array.isArray(b) && b.length > 0;
    }), E = W(() => {
      const { previewSrcList: b, initialIndex: Y } = t;
      let L = Y;
      return Y > b.length - 1 && (L = 0), L;
    }), w = W(() => t.loading === "eager" ? !1 : !g && t.loading === "lazy" || t.lazy), I = () => {
      Ye && (c.value = !0, h.value = !1, l.value = t.src);
    };
    function C(b) {
      c.value = !1, h.value = !1, e("load", b);
    }
    function R(b) {
      c.value = !1, h.value = !0, e("error", b);
    }
    function z() {
      Mu(d.value, f.value) && (I(), V());
    }
    const F = Cu(z, 200, !0);
    async function B() {
      var b;
      if (!Ye)
        return;
      await Ks();
      const { scrollContainer: Y } = t;
      Im(Y) ? f.value = Y : ti(Y) && Y !== "" ? f.value = (b = document.querySelector(Y)) != null ? b : void 0 : d.value && (f.value = Pm(d.value)), f.value && (m = Vn(f, "scroll", F), setTimeout(() => z(), 100));
    }
    function V() {
      !Ye || !f.value || !F || (m == null || m(), f.value = void 0);
    }
    function X(b) {
      if (b.ctrlKey) {
        if (b.deltaY < 0)
          return b.preventDefault(), !1;
        if (b.deltaY > 0)
          return b.preventDefault(), !1;
      }
    }
    function K() {
      v.value && (p = Vn("wheel", X, {
        passive: !1
      }), i = document.body.style.overflow, document.body.style.overflow = "hidden", u.value = !0, e("show"));
    }
    function M() {
      p == null || p(), document.body.style.overflow = i, u.value = !1, e("close");
    }
    function G(b) {
      e("switch", b);
    }
    return nn(() => t.src, () => {
      w.value ? (c.value = !0, h.value = !1, V(), B()) : I();
    }), Xs(() => {
      w.value ? B() : I();
    }), (b, Y) => (j(), ee("div", {
      ref_key: "container",
      ref: d,
      class: ue([T(r).b(), b.$attrs.class]),
      style: ei(T(y))
    }, [
      h.value ? Jt(b.$slots, "error", { key: 0 }, () => [
        J("div", {
          class: ue(T(r).e("error"))
        }, jt(T(s)("el.image.error")), 3)
      ]) : (j(), ee(An, { key: 1 }, [
        l.value !== void 0 ? (j(), ee("img", lh({ key: 0 }, T(a), {
          src: l.value,
          loading: b.loading,
          style: T(x),
          class: T(_),
          crossorigin: b.crossorigin,
          onClick: K,
          onLoad: C,
          onError: R
        }), null, 16, Jp)) : Pe("v-if", !0),
        c.value ? (j(), ee("div", {
          key: 1,
          class: ue(T(r).e("wrapper"))
        }, [
          Jt(b.$slots, "placeholder", {}, () => [
            J("div", {
              class: ue(T(r).e("placeholder"))
            }, null, 2)
          ])
        ], 2)) : Pe("v-if", !0)
      ], 64)),
      T(v) ? (j(), ee(An, { key: 2 }, [
        u.value ? (j(), $t(T(Hp), {
          key: 0,
          "z-index": b.zIndex,
          "initial-index": T(E),
          infinite: b.infinite,
          "zoom-rate": b.zoomRate,
          "min-scale": b.minScale,
          "max-scale": b.maxScale,
          "url-list": b.previewSrcList,
          "hide-on-click-modal": b.hideOnClickModal,
          teleported: b.previewTeleported,
          "close-on-press-escape": b.closeOnPressEscape,
          onClose: M,
          onSwitch: G
        }, {
          default: Fe(() => [
            b.$slots.viewer ? (j(), ee("div", $p, [
              Jt(b.$slots, "viewer")
            ])) : Pe("v-if", !0)
          ]),
          _: 3
        }, 8, ["z-index", "initial-index", "infinite", "zoom-rate", "min-scale", "max-scale", "url-list", "hide-on-click-modal", "teleported", "close-on-press-escape"])) : Pe("v-if", !0)
      ], 64)) : Pe("v-if", !0)
    ], 6));
  }
});
var n0 = /* @__PURE__ */ ui(t0, [["__file", "image.vue"]]);
const Mr = Hs(n0);
class Ft {
  /**
   * @param {string} type Type.
   */
  constructor(e) {
    this.propagationStopped, this.defaultPrevented, this.type = e, this.target = null;
  }
  /**
   * Prevent default. This means that no emulated `click`, `singleclick` or `doubleclick` events
   * will be fired.
   * @api
   */
  preventDefault() {
    this.defaultPrevented = !0;
  }
  /**
   * Stop event propagation.
   * @api
   */
  stopPropagation() {
    this.propagationStopped = !0;
  }
}
const ii = {
  /**
   * Triggered when a property is changed.
   * @event module:ol/Object.ObjectEvent#propertychange
   * @api
   */
  PROPERTYCHANGE: "propertychange"
};
class Fo {
  constructor() {
    this.disposed = !1;
  }
  /**
   * Clean up.
   */
  dispose() {
    this.disposed || (this.disposed = !0, this.disposeInternal());
  }
  /**
   * Extension point for disposable objects.
   * @protected
   */
  disposeInternal() {
  }
}
function i0(n, e, t) {
  let i, s;
  t = t || on;
  let r = 0, o = n.length, a = !1;
  for (; r < o; )
    i = r + (o - r >> 1), s = +t(n[i], e), s < 0 ? r = i + 1 : (o = i, a = !s);
  return a ? r : ~r;
}
function on(n, e) {
  return n > e ? 1 : n < e ? -1 : 0;
}
function No(n, e, t) {
  if (n[0] <= e)
    return 0;
  const i = n.length;
  if (e <= n[i - 1])
    return i - 1;
  if (typeof t == "function") {
    for (let s = 1; s < i; ++s) {
      const r = n[s];
      if (r === e)
        return s;
      if (r < e)
        return t(e, n[s - 1], r) > 0 ? s - 1 : s;
    }
    return i - 1;
  }
  if (t > 0) {
    for (let s = 1; s < i; ++s)
      if (n[s] < e)
        return s - 1;
    return i - 1;
  }
  if (t < 0) {
    for (let s = 1; s < i; ++s)
      if (n[s] <= e)
        return s;
    return i - 1;
  }
  for (let s = 1; s < i; ++s) {
    if (n[s] == e)
      return s;
    if (n[s] < e)
      return n[s - 1] - e < e - n[s] ? s - 1 : s;
  }
  return i - 1;
}
function s0(n, e, t) {
  for (; e < t; ) {
    const i = n[e];
    n[e] = n[t], n[t] = i, ++e, --t;
  }
}
function qs(n, e) {
  const t = Array.isArray(e) ? e : [e], i = t.length;
  for (let s = 0; s < i; s++)
    n[n.length] = t[s];
}
function hn(n, e) {
  const t = n.length;
  if (t !== e.length)
    return !1;
  for (let i = 0; i < t; i++)
    if (n[i] !== e[i])
      return !1;
  return !0;
}
function r0(n, e, t) {
  const i = e || on;
  return n.every(function(s, r) {
    if (r === 0)
      return !0;
    const o = i(n[r - 1], s);
    return !(o > 0 || t && o === 0);
  });
}
function Bi() {
  return !0;
}
function Js() {
  return !1;
}
function si() {
}
function zh(n) {
  let e = !1, t, i, s;
  return function() {
    const r = Array.prototype.slice.call(arguments);
    return (!e || this !== s || !hn(r, i)) && (e = !0, s = this, i = r, t = n.apply(this, arguments)), t;
  };
}
function es(n) {
  for (const e in n)
    delete n[e];
}
function ri(n) {
  let e;
  for (e in n)
    return !1;
  return !e;
}
class $s extends Fo {
  /**
   * @param {*} [target] Default event target for dispatched events.
   */
  constructor(e) {
    super(), this.eventTarget_ = e, this.pendingRemovals_ = null, this.dispatching_ = null, this.listeners_ = null;
  }
  /**
   * @param {string} type Type.
   * @param {import("../events.js").Listener} listener Listener.
   */
  addEventListener(e, t) {
    if (!e || !t)
      return;
    const i = this.listeners_ || (this.listeners_ = {}), s = i[e] || (i[e] = []);
    s.includes(t) || s.push(t);
  }
  /**
   * Dispatches an event and calls all listeners listening for events
   * of this type. The event parameter can either be a string or an
   * Object with a `type` property.
   *
   * @param {import("./Event.js").default|string} event Event object.
   * @return {boolean|undefined} `false` if anyone called preventDefault on the
   *     event object or if any of the listeners returned false.
   * @api
   */
  dispatchEvent(e) {
    const t = typeof e == "string", i = t ? e : e.type, s = this.listeners_ && this.listeners_[i];
    if (!s)
      return;
    const r = t ? new Ft(e) : (
      /** @type {Event} */
      e
    );
    r.target || (r.target = this.eventTarget_ || this);
    const o = this.dispatching_ || (this.dispatching_ = {}), a = this.pendingRemovals_ || (this.pendingRemovals_ = {});
    i in o || (o[i] = 0, a[i] = 0), ++o[i];
    let l;
    for (let h = 0, c = s.length; h < c; ++h)
      if ("handleEvent" in s[h] ? l = /** @type {import("../events.js").ListenerObject} */
      s[h].handleEvent(r) : l = /** @type {import("../events.js").ListenerFunction} */
      s[h].call(this, r), l === !1 || r.propagationStopped) {
        l = !1;
        break;
      }
    if (--o[i] === 0) {
      let h = a[i];
      for (delete a[i]; h--; )
        this.removeEventListener(i, si);
      delete o[i];
    }
    return l;
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    this.listeners_ && es(this.listeners_);
  }
  /**
   * Get the listeners for a specified event type. Listeners are returned in the
   * order that they will be called in.
   *
   * @param {string} type Type.
   * @return {Array<import("../events.js").Listener>|undefined} Listeners.
   */
  getListeners(e) {
    return this.listeners_ && this.listeners_[e] || void 0;
  }
  /**
   * @param {string} [type] Type. If not provided,
   *     `true` will be returned if this event target has any listeners.
   * @return {boolean} Has listeners.
   */
  hasListener(e) {
    return this.listeners_ ? e ? e in this.listeners_ : Object.keys(this.listeners_).length > 0 : !1;
  }
  /**
   * @param {string} type Type.
   * @param {import("../events.js").Listener} listener Listener.
   */
  removeEventListener(e, t) {
    if (!this.listeners_)
      return;
    const i = this.listeners_[e];
    if (!i)
      return;
    const s = i.indexOf(t);
    s !== -1 && (this.pendingRemovals_ && e in this.pendingRemovals_ ? (i[s] = si, ++this.pendingRemovals_[e]) : (i.splice(s, 1), i.length === 0 && delete this.listeners_[e]));
  }
}
const Z = {
  /**
   * Generic change event. Triggered when the revision counter is increased.
   * @event module:ol/events/Event~BaseEvent#change
   * @api
   */
  CHANGE: "change",
  /**
   * Generic error event. Triggered when an error occurs.
   * @event module:ol/events/Event~BaseEvent#error
   * @api
   */
  ERROR: "error",
  BLUR: "blur",
  CLEAR: "clear",
  CONTEXTMENU: "contextmenu",
  CLICK: "click",
  DBLCLICK: "dblclick",
  DRAGENTER: "dragenter",
  DRAGOVER: "dragover",
  DROP: "drop",
  FOCUS: "focus",
  KEYDOWN: "keydown",
  KEYPRESS: "keypress",
  LOAD: "load",
  RESIZE: "resize",
  TOUCHMOVE: "touchmove",
  WHEEL: "wheel"
};
function se(n, e, t, i, s) {
  if (i && i !== n && (t = t.bind(i)), s) {
    const o = t;
    t = function() {
      n.removeEventListener(e, t), o.apply(this, arguments);
    };
  }
  const r = {
    target: n,
    type: e,
    listener: t
  };
  return n.addEventListener(e, t), r;
}
function Ms(n, e, t, i) {
  return se(n, e, t, i, !0);
}
function ge(n) {
  n && n.target && (n.target.removeEventListener(n.type, n.listener), es(n));
}
class ts extends $s {
  constructor() {
    super(), this.on = /** @type {ObservableOnSignature<import("./events").EventsKey>} */
    this.onInternal, this.once = /** @type {ObservableOnSignature<import("./events").EventsKey>} */
    this.onceInternal, this.un = /** @type {ObservableOnSignature<void>} */
    this.unInternal, this.revision_ = 0;
  }
  /**
   * Increases the revision counter and dispatches a 'change' event.
   * @api
   */
  changed() {
    ++this.revision_, this.dispatchEvent(Z.CHANGE);
  }
  /**
   * Get the version number for this object.  Each time the object is modified,
   * its version number will be incremented.
   * @return {number} Revision.
   * @api
   */
  getRevision() {
    return this.revision_;
  }
  /**
   * @param {string|Array<string>} type Type.
   * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
   * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Event key.
   * @protected
   */
  onInternal(e, t) {
    if (Array.isArray(e)) {
      const i = e.length, s = new Array(i);
      for (let r = 0; r < i; ++r)
        s[r] = se(this, e[r], t);
      return s;
    }
    return se(
      this,
      /** @type {string} */
      e,
      t
    );
  }
  /**
   * @param {string|Array<string>} type Type.
   * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
   * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Event key.
   * @protected
   */
  onceInternal(e, t) {
    let i;
    if (Array.isArray(e)) {
      const s = e.length;
      i = new Array(s);
      for (let r = 0; r < s; ++r)
        i[r] = Ms(this, e[r], t);
    } else
      i = Ms(
        this,
        /** @type {string} */
        e,
        t
      );
    return t.ol_key = i, i;
  }
  /**
   * Unlisten for a certain type of event.
   * @param {string|Array<string>} type Type.
   * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
   * @protected
   */
  unInternal(e, t) {
    const i = (
      /** @type {Object} */
      t.ol_key
    );
    if (i)
      o0(i);
    else if (Array.isArray(e))
      for (let s = 0, r = e.length; s < r; ++s)
        this.removeEventListener(e[s], t);
    else
      this.removeEventListener(e, t);
  }
}
ts.prototype.on;
ts.prototype.once;
ts.prototype.un;
function o0(n) {
  if (Array.isArray(n))
    for (let e = 0, t = n.length; e < t; ++e)
      ge(n[e]);
  else
    ge(
      /** @type {import("./events.js").EventsKey} */
      n
    );
}
function ie() {
  throw new Error("Unimplemented abstract method.");
}
let a0 = 0;
function oe(n) {
  return n.ol_uid || (n.ol_uid = String(++a0));
}
class cl extends Ft {
  /**
   * @param {string} type The event type.
   * @param {string} key The property name.
   * @param {*} oldValue The old value for `key`.
   */
  constructor(e, t, i) {
    super(e), this.key = t, this.oldValue = i;
  }
}
class vt extends ts {
  /**
   * @param {Object<string, *>} [values] An object with key-value pairs.
   */
  constructor(e) {
    super(), this.on, this.once, this.un, oe(this), this.values_ = null, e !== void 0 && this.setProperties(e);
  }
  /**
   * Gets a value.
   * @param {string} key Key name.
   * @return {*} Value.
   * @api
   */
  get(e) {
    let t;
    return this.values_ && this.values_.hasOwnProperty(e) && (t = this.values_[e]), t;
  }
  /**
   * Get a list of object property names.
   * @return {Array<string>} List of property names.
   * @api
   */
  getKeys() {
    return this.values_ && Object.keys(this.values_) || [];
  }
  /**
   * Get an object of all property names and values.
   * @return {Object<string, *>} Object.
   * @api
   */
  getProperties() {
    return this.values_ && Object.assign({}, this.values_) || {};
  }
  /**
   * Get an object of all property names and values.
   * @return {Object<string, *>?} Object.
   */
  getPropertiesInternal() {
    return this.values_;
  }
  /**
   * @return {boolean} The object has properties.
   */
  hasProperties() {
    return !!this.values_;
  }
  /**
   * @param {string} key Key name.
   * @param {*} oldValue Old value.
   */
  notify(e, t) {
    let i;
    i = `change:${e}`, this.hasListener(i) && this.dispatchEvent(new cl(i, e, t)), i = ii.PROPERTYCHANGE, this.hasListener(i) && this.dispatchEvent(new cl(i, e, t));
  }
  /**
   * @param {string} key Key name.
   * @param {import("./events.js").Listener} listener Listener.
   */
  addChangeListener(e, t) {
    this.addEventListener(`change:${e}`, t);
  }
  /**
   * @param {string} key Key name.
   * @param {import("./events.js").Listener} listener Listener.
   */
  removeChangeListener(e, t) {
    this.removeEventListener(`change:${e}`, t);
  }
  /**
   * Sets a value.
   * @param {string} key Key name.
   * @param {*} value Value.
   * @param {boolean} [silent] Update without triggering an event.
   * @api
   */
  set(e, t, i) {
    const s = this.values_ || (this.values_ = {});
    if (i)
      s[e] = t;
    else {
      const r = s[e];
      s[e] = t, r !== t && this.notify(e, r);
    }
  }
  /**
   * Sets a collection of key-value pairs.  Note that this changes any existing
   * properties and adds new ones (it does not remove any existing properties).
   * @param {Object<string, *>} values Values.
   * @param {boolean} [silent] Update without triggering an event.
   * @api
   */
  setProperties(e, t) {
    for (const i in e)
      this.set(i, e[i], t);
  }
  /**
   * Apply any properties from another object without triggering events.
   * @param {BaseObject} source The source object.
   * @protected
   */
  applyProperties(e) {
    e.values_ && Object.assign(this.values_ || (this.values_ = {}), e.values_);
  }
  /**
   * Unsets a property.
   * @param {string} key Key name.
   * @param {boolean} [silent] Unset without triggering an event.
   * @api
   */
  unset(e, t) {
    if (this.values_ && e in this.values_) {
      const i = this.values_[e];
      delete this.values_[e], ri(this.values_) && (this.values_ = null), t || this.notify(e, i);
    }
  }
}
const le = {
  OPACITY: "opacity",
  VISIBLE: "visible",
  EXTENT: "extent",
  Z_INDEX: "zIndex",
  MAX_RESOLUTION: "maxResolution",
  MIN_RESOLUTION: "minResolution",
  MAX_ZOOM: "maxZoom",
  MIN_ZOOM: "minZoom",
  SOURCE: "source",
  MAP: "map"
};
function te(n, e) {
  if (!n)
    throw new Error(e);
}
function ve(n, e, t) {
  return Math.min(Math.max(n, e), t);
}
function l0(n, e, t, i, s, r) {
  const o = s - t, a = r - i;
  if (o !== 0 || a !== 0) {
    const l = ((n - t) * o + (e - i) * a) / (o * o + a * a);
    l > 1 ? (t = s, i = r) : l > 0 && (t += o * l, i += a * l);
  }
  return Qn(n, e, t, i);
}
function Qn(n, e, t, i) {
  const s = t - n, r = i - e;
  return s * s + r * r;
}
function h0(n) {
  const e = n.length;
  for (let i = 0; i < e; i++) {
    let s = i, r = Math.abs(n[i][i]);
    for (let a = i + 1; a < e; a++) {
      const l = Math.abs(n[a][i]);
      l > r && (r = l, s = a);
    }
    if (r === 0)
      return null;
    const o = n[s];
    n[s] = n[i], n[i] = o;
    for (let a = i + 1; a < e; a++) {
      const l = -n[a][i] / n[i][i];
      for (let h = i; h < e + 1; h++)
        i == h ? n[a][h] = 0 : n[a][h] += l * n[i][h];
    }
  }
  const t = new Array(e);
  for (let i = e - 1; i >= 0; i--) {
    t[i] = n[i][e] / n[i][i];
    for (let s = i - 1; s >= 0; s--)
      n[s][e] -= n[s][i] * t[i];
  }
  return t;
}
function Ts(n) {
  return n * Math.PI / 180;
}
function qn(n, e) {
  const t = n % e;
  return t * e < 0 ? t + e : t;
}
function Ke(n, e, t) {
  return n + t * (e - n);
}
function Go(n, e) {
  const t = Math.pow(10, e);
  return Math.round(n * t) / t;
}
function ms(n, e) {
  return Math.floor(Go(n, e));
}
function ps(n, e) {
  return Math.ceil(Go(n, e));
}
class Wh extends vt {
  /**
   * @param {Options} options Layer options.
   */
  constructor(e) {
    super(), this.on, this.once, this.un, this.background_ = e.background;
    const t = Object.assign({}, e);
    typeof e.properties == "object" && (delete t.properties, Object.assign(t, e.properties)), t[le.OPACITY] = e.opacity !== void 0 ? e.opacity : 1, te(
      typeof t[le.OPACITY] == "number",
      "Layer opacity must be a number"
    ), t[le.VISIBLE] = e.visible !== void 0 ? e.visible : !0, t[le.Z_INDEX] = e.zIndex, t[le.MAX_RESOLUTION] = e.maxResolution !== void 0 ? e.maxResolution : 1 / 0, t[le.MIN_RESOLUTION] = e.minResolution !== void 0 ? e.minResolution : 0, t[le.MIN_ZOOM] = e.minZoom !== void 0 ? e.minZoom : -1 / 0, t[le.MAX_ZOOM] = e.maxZoom !== void 0 ? e.maxZoom : 1 / 0, this.className_ = t.className !== void 0 ? t.className : "ol-layer", delete t.className, this.setProperties(t), this.state_ = null;
  }
  /**
   * Get the background for this layer.
   * @return {BackgroundColor|false} Layer background.
   */
  getBackground() {
    return this.background_;
  }
  /**
   * @return {string} CSS class name.
   */
  getClassName() {
    return this.className_;
  }
  /**
   * This method is not meant to be called by layers or layer renderers because the state
   * is incorrect if the layer is included in a layer group.
   *
   * @param {boolean} [managed] Layer is managed.
   * @return {import("./Layer.js").State} Layer state.
   */
  getLayerState(e) {
    const t = this.state_ || /** @type {?} */
    {
      layer: this,
      managed: e === void 0 ? !0 : e
    }, i = this.getZIndex();
    return t.opacity = ve(Math.round(this.getOpacity() * 100) / 100, 0, 1), t.visible = this.getVisible(), t.extent = this.getExtent(), t.zIndex = i === void 0 && !t.managed ? 1 / 0 : i, t.maxResolution = this.getMaxResolution(), t.minResolution = Math.max(this.getMinResolution(), 0), t.minZoom = this.getMinZoom(), t.maxZoom = this.getMaxZoom(), this.state_ = t, t;
  }
  /**
   * @abstract
   * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be
   *     modified in place).
   * @return {Array<import("./Layer.js").default>} Array of layers.
   */
  getLayersArray(e) {
    return ie();
  }
  /**
   * @abstract
   * @param {Array<import("./Layer.js").State>} [states] Optional list of layer
   *     states (to be modified in place).
   * @return {Array<import("./Layer.js").State>} List of layer states.
   */
  getLayerStatesArray(e) {
    return ie();
  }
  /**
   * Return the {@link module:ol/extent~Extent extent} of the layer or `undefined` if it
   * will be visible regardless of extent.
   * @return {import("../extent.js").Extent|undefined} The layer extent.
   * @observable
   * @api
   */
  getExtent() {
    return (
      /** @type {import("../extent.js").Extent|undefined} */
      this.get(le.EXTENT)
    );
  }
  /**
   * Return the maximum resolution of the layer. Returns Infinity if
   * the layer has no maximum resolution set.
   * @return {number} The maximum resolution of the layer.
   * @observable
   * @api
   */
  getMaxResolution() {
    return (
      /** @type {number} */
      this.get(le.MAX_RESOLUTION)
    );
  }
  /**
   * Return the minimum resolution of the layer. Returns 0 if
   * the layer has no minimum resolution set.
   * @return {number} The minimum resolution of the layer.
   * @observable
   * @api
   */
  getMinResolution() {
    return (
      /** @type {number} */
      this.get(le.MIN_RESOLUTION)
    );
  }
  /**
   * Return the minimum zoom level of the layer. Returns -Infinity if
   * the layer has no minimum zoom set.
   * @return {number} The minimum zoom level of the layer.
   * @observable
   * @api
   */
  getMinZoom() {
    return (
      /** @type {number} */
      this.get(le.MIN_ZOOM)
    );
  }
  /**
   * Return the maximum zoom level of the layer. Returns Infinity if
   * the layer has no maximum zoom set.
   * @return {number} The maximum zoom level of the layer.
   * @observable
   * @api
   */
  getMaxZoom() {
    return (
      /** @type {number} */
      this.get(le.MAX_ZOOM)
    );
  }
  /**
   * Return the opacity of the layer (between 0 and 1).
   * @return {number} The opacity of the layer.
   * @observable
   * @api
   */
  getOpacity() {
    return (
      /** @type {number} */
      this.get(le.OPACITY)
    );
  }
  /**
   * @abstract
   * @return {import("../source/Source.js").State} Source state.
   */
  getSourceState() {
    return ie();
  }
  /**
   * Return the value of this layer's `visible` property. To find out whether the layer
   * is visible on a map, use `isVisible()` instead.
   * @return {boolean} The value of the `visible` property of the layer.
   * @observable
   * @api
   */
  getVisible() {
    return (
      /** @type {boolean} */
      this.get(le.VISIBLE)
    );
  }
  /**
   * Return the Z-index of the layer, which is used to order layers before
   * rendering. Returns undefined if the layer is unmanaged.
   * @return {number|undefined} The Z-index of the layer.
   * @observable
   * @api
   */
  getZIndex() {
    return (
      /** @type {number|undefined} */
      this.get(le.Z_INDEX)
    );
  }
  /**
   * Sets the background color.
   * @param {BackgroundColor} [background] Background color.
   */
  setBackground(e) {
    this.background_ = e, this.changed();
  }
  /**
   * Set the extent at which the layer is visible.  If `undefined`, the layer
   * will be visible at all extents.
   * @param {import("../extent.js").Extent|undefined} extent The extent of the layer.
   * @observable
   * @api
   */
  setExtent(e) {
    this.set(le.EXTENT, e);
  }
  /**
   * Set the maximum resolution at which the layer is visible.
   * @param {number} maxResolution The maximum resolution of the layer.
   * @observable
   * @api
   */
  setMaxResolution(e) {
    this.set(le.MAX_RESOLUTION, e);
  }
  /**
   * Set the minimum resolution at which the layer is visible.
   * @param {number} minResolution The minimum resolution of the layer.
   * @observable
   * @api
   */
  setMinResolution(e) {
    this.set(le.MIN_RESOLUTION, e);
  }
  /**
   * Set the maximum zoom (exclusive) at which the layer is visible.
   * Note that the zoom levels for layer visibility are based on the
   * view zoom level, which may be different from a tile source zoom level.
   * @param {number} maxZoom The maximum zoom of the layer.
   * @observable
   * @api
   */
  setMaxZoom(e) {
    this.set(le.MAX_ZOOM, e);
  }
  /**
   * Set the minimum zoom (inclusive) at which the layer is visible.
   * Note that the zoom levels for layer visibility are based on the
   * view zoom level, which may be different from a tile source zoom level.
   * @param {number} minZoom The minimum zoom of the layer.
   * @observable
   * @api
   */
  setMinZoom(e) {
    this.set(le.MIN_ZOOM, e);
  }
  /**
   * Set the opacity of the layer, allowed values range from 0 to 1.
   * @param {number} opacity The opacity of the layer.
   * @observable
   * @api
   */
  setOpacity(e) {
    te(typeof e == "number", "Layer opacity must be a number"), this.set(le.OPACITY, e);
  }
  /**
   * Set the visibility of the layer (`true` or `false`).
   * @param {boolean} visible The visibility of the layer.
   * @observable
   * @api
   */
  setVisible(e) {
    this.set(le.VISIBLE, e);
  }
  /**
   * Set Z-index of the layer, which is used to order layers before rendering.
   * The default Z-index is 0.
   * @param {number} zindex The z-index of the layer.
   * @observable
   * @api
   */
  setZIndex(e) {
    this.set(le.Z_INDEX, e);
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    this.state_ && (this.state_.layer = null, this.state_ = null), super.disposeInternal();
  }
}
const Je = {
  /**
   * Triggered before a layer is rendered.
   * @event module:ol/render/Event~RenderEvent#prerender
   * @api
   */
  PRERENDER: "prerender",
  /**
   * Triggered after a layer is rendered.
   * @event module:ol/render/Event~RenderEvent#postrender
   * @api
   */
  POSTRENDER: "postrender",
  /**
   * Triggered before layers are composed.  When dispatched by the map, the event object will not have
   * a `context` set.  When dispatched by a layer, the event object will have a `context` set.  Only
   * WebGL layers currently dispatch this event.
   * @event module:ol/render/Event~RenderEvent#precompose
   * @api
   */
  PRECOMPOSE: "precompose",
  /**
   * Triggered after layers are composed.  When dispatched by the map, the event object will not have
   * a `context` set.  When dispatched by a layer, the event object will have a `context` set.  Only
   * WebGL layers currently dispatch this event.
   * @event module:ol/render/Event~RenderEvent#postcompose
   * @api
   */
  POSTCOMPOSE: "postcompose",
  /**
   * Triggered when rendering is complete, i.e. all sources and tiles have
   * finished loading for the current viewport, and all tiles are faded in.
   * The event object will not have a `context` set.
   * @event module:ol/render/Event~RenderEvent#rendercomplete
   * @api
   */
  RENDERCOMPLETE: "rendercomplete"
}, Re = {
  ANIMATING: 0,
  INTERACTING: 1
}, st = {
  CENTER: "center",
  RESOLUTION: "resolution",
  ROTATION: "rotation"
}, c0 = 42, Bo = 256, zi = {
  // use the radius of the Normal sphere
  radians: 6370997 / (2 * Math.PI),
  degrees: 2 * Math.PI * 6370997 / 360,
  ft: 0.3048,
  m: 1,
  "us-ft": 1200 / 3937
};
class Xh {
  /**
   * @param {Options} options Projection options.
   */
  constructor(e) {
    this.code_ = e.code, this.units_ = /** @type {import("./Units.js").Units} */
    e.units, this.extent_ = e.extent !== void 0 ? e.extent : null, this.worldExtent_ = e.worldExtent !== void 0 ? e.worldExtent : null, this.axisOrientation_ = e.axisOrientation !== void 0 ? e.axisOrientation : "enu", this.global_ = e.global !== void 0 ? e.global : !1, this.canWrapX_ = !!(this.global_ && this.extent_), this.getPointResolutionFunc_ = e.getPointResolution, this.defaultTileGrid_ = null, this.metersPerUnit_ = e.metersPerUnit;
  }
  /**
   * @return {boolean} The projection is suitable for wrapping the x-axis
   */
  canWrapX() {
    return this.canWrapX_;
  }
  /**
   * Get the code for this projection, e.g. 'EPSG:4326'.
   * @return {string} Code.
   * @api
   */
  getCode() {
    return this.code_;
  }
  /**
   * Get the validity extent for this projection.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */
  getExtent() {
    return this.extent_;
  }
  /**
   * Get the units of this projection.
   * @return {import("./Units.js").Units} Units.
   * @api
   */
  getUnits() {
    return this.units_;
  }
  /**
   * Get the amount of meters per unit of this projection.  If the projection is
   * not configured with `metersPerUnit` or a units identifier, the return is
   * `undefined`.
   * @return {number|undefined} Meters.
   * @api
   */
  getMetersPerUnit() {
    return this.metersPerUnit_ || zi[this.units_];
  }
  /**
   * Get the world extent for this projection.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */
  getWorldExtent() {
    return this.worldExtent_;
  }
  /**
   * Get the axis orientation of this projection.
   * Example values are:
   * enu - the default easting, northing, elevation.
   * neu - northing, easting, up - useful for "lat/long" geographic coordinates,
   *     or south orientated transverse mercator.
   * wnu - westing, northing, up - some planetary coordinate systems have
   *     "west positive" coordinate systems
   * @return {string} Axis orientation.
   * @api
   */
  getAxisOrientation() {
    return this.axisOrientation_;
  }
  /**
   * Is this projection a global projection which spans the whole world?
   * @return {boolean} Whether the projection is global.
   * @api
   */
  isGlobal() {
    return this.global_;
  }
  /**
   * Set if the projection is a global projection which spans the whole world
   * @param {boolean} global Whether the projection is global.
   * @api
   */
  setGlobal(e) {
    this.global_ = e, this.canWrapX_ = !!(e && this.extent_);
  }
  /**
   * @return {import("../tilegrid/TileGrid.js").default} The default tile grid.
   */
  getDefaultTileGrid() {
    return this.defaultTileGrid_;
  }
  /**
   * @param {import("../tilegrid/TileGrid.js").default} tileGrid The default tile grid.
   */
  setDefaultTileGrid(e) {
    this.defaultTileGrid_ = e;
  }
  /**
   * Set the validity extent for this projection.
   * @param {import("../extent.js").Extent} extent Extent.
   * @api
   */
  setExtent(e) {
    this.extent_ = e, this.canWrapX_ = !!(this.global_ && e);
  }
  /**
   * Set the world extent for this projection.
   * @param {import("../extent.js").Extent} worldExtent World extent
   *     [minlon, minlat, maxlon, maxlat].
   * @api
   */
  setWorldExtent(e) {
    this.worldExtent_ = e;
  }
  /**
   * Set the getPointResolution function (see {@link module:ol/proj.getPointResolution}
   * for this projection.
   * @param {function(number, import("../coordinate.js").Coordinate):number} func Function
   * @api
   */
  setGetPointResolution(e) {
    this.getPointResolutionFunc_ = e;
  }
  /**
   * Get the custom point resolution function for this projection (if set).
   * @return {function(number, import("../coordinate.js").Coordinate):number|undefined} The custom point
   * resolution function (if set).
   */
  getPointResolutionFunc() {
    return this.getPointResolutionFunc_;
  }
}
const ns = 6378137, Zn = Math.PI * ns, u0 = [-Zn, -Zn, Zn, Zn], d0 = [-180, -85, 180, 85], _s = ns * Math.log(Math.tan(Math.PI / 2));
class Fn extends Xh {
  /**
   * @param {string} code Code.
   */
  constructor(e) {
    super({
      code: e,
      units: "m",
      extent: u0,
      global: !0,
      worldExtent: d0,
      getPointResolution: function(t, i) {
        return t / Math.cosh(i[1] / ns);
      }
    });
  }
}
const ul = [
  new Fn("EPSG:3857"),
  new Fn("EPSG:102100"),
  new Fn("EPSG:102113"),
  new Fn("EPSG:900913"),
  new Fn("http://www.opengis.net/def/crs/EPSG/0/3857"),
  new Fn("http://www.opengis.net/gml/srs/epsg.xml#3857")
];
function f0(n, e, t) {
  const i = n.length;
  t = t > 1 ? t : 2, e === void 0 && (t > 2 ? e = n.slice() : e = new Array(i));
  for (let s = 0; s < i; s += t) {
    e[s] = Zn * n[s] / 180;
    let r = ns * Math.log(Math.tan(Math.PI * (+n[s + 1] + 90) / 360));
    r > _s ? r = _s : r < -_s && (r = -_s), e[s + 1] = r;
  }
  return e;
}
function g0(n, e, t) {
  const i = n.length;
  t = t > 1 ? t : 2, e === void 0 && (t > 2 ? e = n.slice() : e = new Array(i));
  for (let s = 0; s < i; s += t)
    e[s] = 180 * n[s] / Zn, e[s + 1] = 360 * Math.atan(Math.exp(n[s + 1] / ns)) / Math.PI - 90;
  return e;
}
const m0 = 6378137, dl = [-180, -90, 180, 90], p0 = Math.PI * m0 / 180;
class fn extends Xh {
  /**
   * @param {string} code Code.
   * @param {string} [axisOrientation] Axis orientation.
   */
  constructor(e, t) {
    super({
      code: e,
      units: "degrees",
      extent: dl,
      axisOrientation: t,
      global: !0,
      metersPerUnit: p0,
      worldExtent: dl
    });
  }
}
const fl = [
  new fn("CRS:84"),
  new fn("EPSG:4326", "neu"),
  new fn("urn:ogc:def:crs:OGC:1.3:CRS84"),
  new fn("urn:ogc:def:crs:OGC:2:84"),
  new fn("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),
  new fn("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"),
  new fn("http://www.opengis.net/def/crs/EPSG/0/4326", "neu")
];
let oo = {};
function _0(n) {
  return oo[n] || oo[n.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, "EPSG:$3")] || null;
}
function y0(n, e) {
  oo[n] = e;
}
let Jn = {};
function Ds(n, e, t) {
  const i = n.getCode(), s = e.getCode();
  i in Jn || (Jn[i] = {}), Jn[i][s] = t;
}
function v0(n, e) {
  let t;
  return n in Jn && e in Jn[n] && (t = Jn[n][e]), t;
}
const xe = {
  UNKNOWN: 0,
  INTERSECTING: 1,
  ABOVE: 2,
  RIGHT: 4,
  BELOW: 8,
  LEFT: 16
};
function gl(n) {
  const e = $e();
  for (let t = 0, i = n.length; t < i; ++t)
    Mi(e, n[t]);
  return e;
}
function zo(n, e, t) {
  return t ? (t[0] = n[0] - e, t[1] = n[1] - e, t[2] = n[2] + e, t[3] = n[3] + e, t) : [
    n[0] - e,
    n[1] - e,
    n[2] + e,
    n[3] + e
  ];
}
function Kh(n, e) {
  return e ? (e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e) : n.slice();
}
function Wo(n, e, t) {
  let i, s;
  return e < n[0] ? i = n[0] - e : n[2] < e ? i = e - n[2] : i = 0, t < n[1] ? s = n[1] - t : n[3] < t ? s = t - n[3] : s = 0, i * i + s * s;
}
function oi(n, e) {
  return Yh(n, e[0], e[1]);
}
function jn(n, e) {
  return n[0] <= e[0] && e[2] <= n[2] && n[1] <= e[1] && e[3] <= n[3];
}
function Yh(n, e, t) {
  return n[0] <= e && e <= n[2] && n[1] <= t && t <= n[3];
}
function ao(n, e) {
  const t = n[0], i = n[1], s = n[2], r = n[3], o = e[0], a = e[1];
  let l = xe.UNKNOWN;
  return o < t ? l = l | xe.LEFT : o > s && (l = l | xe.RIGHT), a < i ? l = l | xe.BELOW : a > r && (l = l | xe.ABOVE), l === xe.UNKNOWN && (l = xe.INTERSECTING), l;
}
function $e() {
  return [1 / 0, 1 / 0, -1 / 0, -1 / 0];
}
function an(n, e, t, i, s) {
  return s ? (s[0] = n, s[1] = e, s[2] = t, s[3] = i, s) : [n, e, t, i];
}
function er(n) {
  return an(1 / 0, 1 / 0, -1 / 0, -1 / 0, n);
}
function Uh(n, e) {
  const t = n[0], i = n[1];
  return an(t, i, t, i, e);
}
function Xo(n, e, t, i, s) {
  const r = er(s);
  return Vh(r, n, e, t, i);
}
function Wi(n, e) {
  return n[0] == e[0] && n[2] == e[2] && n[1] == e[1] && n[3] == e[3];
}
function E0(n, e) {
  return e[0] < n[0] && (n[0] = e[0]), e[2] > n[2] && (n[2] = e[2]), e[1] < n[1] && (n[1] = e[1]), e[3] > n[3] && (n[3] = e[3]), n;
}
function Mi(n, e) {
  e[0] < n[0] && (n[0] = e[0]), e[0] > n[2] && (n[2] = e[0]), e[1] < n[1] && (n[1] = e[1]), e[1] > n[3] && (n[3] = e[1]);
}
function Vh(n, e, t, i, s) {
  for (; t < i; t += s)
    x0(n, e[t], e[t + 1]);
  return n;
}
function x0(n, e, t) {
  n[0] = Math.min(n[0], e), n[1] = Math.min(n[1], t), n[2] = Math.max(n[2], e), n[3] = Math.max(n[3], t);
}
function Zh(n, e) {
  let t;
  return t = e(tr(n)), t || (t = e(nr(n)), t) || (t = e(ir(n)), t) || (t = e(Mn(n)), t) ? t : !1;
}
function lo(n) {
  let e = 0;
  return sr(n) || (e = he(n) * We(n)), e;
}
function tr(n) {
  return [n[0], n[1]];
}
function nr(n) {
  return [n[2], n[1]];
}
function Sn(n) {
  return [(n[0] + n[2]) / 2, (n[1] + n[3]) / 2];
}
function w0(n, e) {
  let t;
  if (e === "bottom-left")
    t = tr(n);
  else if (e === "bottom-right")
    t = nr(n);
  else if (e === "top-left")
    t = Mn(n);
  else if (e === "top-right")
    t = ir(n);
  else
    throw new Error("Invalid corner");
  return t;
}
function ho(n, e, t, i, s) {
  const [r, o, a, l, h, c, u, d] = co(
    n,
    e,
    t,
    i
  );
  return an(
    Math.min(r, a, h, u),
    Math.min(o, l, c, d),
    Math.max(r, a, h, u),
    Math.max(o, l, c, d),
    s
  );
}
function co(n, e, t, i) {
  const s = e * i[0] / 2, r = e * i[1] / 2, o = Math.cos(t), a = Math.sin(t), l = s * o, h = s * a, c = r * o, u = r * a, d = n[0], f = n[1];
  return [
    d - l + u,
    f - h - c,
    d - l - u,
    f - h + c,
    d + l - u,
    f + h + c,
    d + l + u,
    f + h - c,
    d - l + u,
    f - h - c
  ];
}
function We(n) {
  return n[3] - n[1];
}
function Di(n, e, t) {
  const i = t || $e();
  return Be(n, e) ? (n[0] > e[0] ? i[0] = n[0] : i[0] = e[0], n[1] > e[1] ? i[1] = n[1] : i[1] = e[1], n[2] < e[2] ? i[2] = n[2] : i[2] = e[2], n[3] < e[3] ? i[3] = n[3] : i[3] = e[3]) : er(i), i;
}
function Mn(n) {
  return [n[0], n[3]];
}
function ir(n) {
  return [n[2], n[3]];
}
function he(n) {
  return n[2] - n[0];
}
function Be(n, e) {
  return n[0] <= e[2] && n[2] >= e[0] && n[1] <= e[3] && n[3] >= e[1];
}
function sr(n) {
  return n[2] < n[0] || n[3] < n[1];
}
function C0(n, e) {
  return e ? (e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e) : n;
}
function A0(n, e, t) {
  let i = !1;
  const s = ao(n, e), r = ao(n, t);
  if (s === xe.INTERSECTING || r === xe.INTERSECTING)
    i = !0;
  else {
    const o = n[0], a = n[1], l = n[2], h = n[3], c = e[0], u = e[1], d = t[0], f = t[1], g = (f - u) / (d - c);
    let m, p;
    r & xe.ABOVE && !(s & xe.ABOVE) && (m = d - (f - h) / g, i = m >= o && m <= l), !i && r & xe.RIGHT && !(s & xe.RIGHT) && (p = f - (d - l) * g, i = p >= a && p <= h), !i && r & xe.BELOW && !(s & xe.BELOW) && (m = d - (f - a) / g, i = m >= o && m <= l), !i && r & xe.LEFT && !(s & xe.LEFT) && (p = f - (d - o) * g, i = p >= a && p <= h);
  }
  return i;
}
function jh(n, e) {
  const t = e.getExtent(), i = Sn(n);
  if (e.canWrapX() && (i[0] < t[0] || i[0] >= t[2])) {
    const s = he(t), o = Math.floor(
      (i[0] - t[0]) / s
    ) * s;
    n[0] -= o, n[2] -= o;
  }
  return n;
}
function I0(n, e) {
  if (e.canWrapX()) {
    const t = e.getExtent();
    if (!isFinite(n[0]) || !isFinite(n[2]))
      return [[t[0], n[1], t[2], n[3]]];
    jh(n, e);
    const i = he(t);
    if (he(n) > i)
      return [[t[0], n[1], t[2], n[3]]];
    if (n[0] < t[0])
      return [
        [n[0] + i, n[1], t[2], n[3]],
        [t[0], n[1], n[2], n[3]]
      ];
    if (n[2] > t[2])
      return [
        [n[0], n[1], t[2], n[3]],
        [t[0], n[1], n[2] - i, n[3]]
      ];
  }
  return [n];
}
function T0(n, e) {
  return n[0] += +e[0], n[1] += +e[1], n;
}
function Ps(n, e) {
  let t = !0;
  for (let i = n.length - 1; i >= 0; --i)
    if (n[i] != e[i]) {
      t = !1;
      break;
    }
  return t;
}
function Ko(n, e) {
  const t = Math.cos(e), i = Math.sin(e), s = n[0] * t - n[1] * i, r = n[1] * t + n[0] * i;
  return n[0] = s, n[1] = r, n;
}
function S0(n, e) {
  return n[0] *= e, n[1] *= e, n;
}
function Hh(n, e) {
  if (e.canWrapX()) {
    const t = he(e.getExtent()), i = R0(n, e, t);
    i && (n[0] -= i * t);
  }
  return n;
}
function R0(n, e, t) {
  const i = e.getExtent();
  let s = 0;
  return e.canWrapX() && (n[0] < i[0] || n[0] > i[2]) && (t = t || he(i), s = Math.floor(
    (n[0] - i[0]) / t
  )), s;
}
const b0 = 63710088e-1;
function ml(n, e, t) {
  t = t || b0;
  const i = Ts(n[1]), s = Ts(e[1]), r = (s - i) / 2, o = Ts(e[0] - n[0]) / 2, a = Math.sin(r) * Math.sin(r) + Math.sin(o) * Math.sin(o) * Math.cos(i) * Math.cos(s);
  return 2 * t * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
function Qh(...n) {
  console.warn(...n);
}
let uo = !0;
function L0(n) {
  uo = !(n === void 0 ? !0 : n);
}
function Yo(n, e) {
  if (e !== void 0) {
    for (let t = 0, i = n.length; t < i; ++t)
      e[t] = n[t];
    e = e;
  } else
    e = n.slice();
  return e;
}
function qh(n, e) {
  if (e !== void 0 && n !== e) {
    for (let t = 0, i = n.length; t < i; ++t)
      e[t] = n[t];
    n = e;
  }
  return n;
}
function M0(n) {
  y0(n.getCode(), n), Ds(n, n, Yo);
}
function D0(n) {
  n.forEach(M0);
}
function et(n) {
  return typeof n == "string" ? _0(
    /** @type {string} */
    n
  ) : (
    /** @type {Projection} */
    n || null
  );
}
function pl(n, e, t, i) {
  n = et(n);
  let s;
  const r = n.getPointResolutionFunc();
  if (r) {
    if (s = r(e, t), i && i !== n.getUnits()) {
      const o = n.getMetersPerUnit();
      o && (s = s * o / zi[i]);
    }
  } else {
    const o = n.getUnits();
    if (o == "degrees" && !i || i == "degrees")
      s = e;
    else {
      const a = rr(
        n,
        et("EPSG:4326")
      );
      if (a === qh && o !== "degrees")
        s = e * n.getMetersPerUnit();
      else {
        let h = [
          t[0] - e / 2,
          t[1],
          t[0] + e / 2,
          t[1],
          t[0],
          t[1] - e / 2,
          t[0],
          t[1] + e / 2
        ];
        h = a(h, h, 2);
        const c = ml(h.slice(0, 2), h.slice(2, 4)), u = ml(h.slice(4, 6), h.slice(6, 8));
        s = (c + u) / 2;
      }
      const l = i ? zi[i] : n.getMetersPerUnit();
      l !== void 0 && (s /= l);
    }
  }
  return s;
}
function _l(n) {
  D0(n), n.forEach(function(e) {
    n.forEach(function(t) {
      e !== t && Ds(e, t, Yo);
    });
  });
}
function P0(n, e, t, i) {
  n.forEach(function(s) {
    e.forEach(function(r) {
      Ds(s, r, t), Ds(r, s, i);
    });
  });
}
function Uo(n, e) {
  return n ? typeof n == "string" ? et(n) : (
    /** @type {Projection} */
    n
  ) : et(e);
}
function Wn(n, e) {
  if (n === e)
    return !0;
  const t = n.getUnits() === e.getUnits();
  return (n.getCode() === e.getCode() || rr(n, e) === Yo) && t;
}
function rr(n, e) {
  const t = n.getCode(), i = e.getCode();
  let s = v0(t, i);
  return s || (s = qh), s;
}
function Os(n, e) {
  const t = et(n), i = et(e);
  return rr(t, i);
}
function Vo(n, e, t) {
  return Os(e, t)(n, void 0, n.length);
}
let O0 = null;
function k0() {
  return O0;
}
function fo(n, e) {
  return n;
}
function Tt(n, e) {
  return uo && !Ps(n, [0, 0]) && n[0] >= -180 && n[0] <= 180 && n[1] >= -90 && n[1] <= 90 && (uo = !1, Qh(
    "Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates."
  )), n;
}
function Zo(n, e) {
  return n;
}
function _n(n, e) {
  return n;
}
function F0() {
  _l(ul), _l(fl), P0(
    fl,
    ul,
    f0,
    g0
  );
}
F0();
function yl(n, e, t) {
  return (
    /**
     * @param {import("./coordinate.js").Coordinate|undefined} center Center.
     * @param {number|undefined} resolution Resolution.
     * @param {import("./size.js").Size} size Viewport size; unused if `onlyCenter` was specified.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @param {Array<number>} [centerShift] Shift between map center and viewport center.
     * @return {import("./coordinate.js").Coordinate|undefined} Center.
     */
    function(i, s, r, o, a) {
      if (!i)
        return;
      if (!s && !e)
        return i;
      const l = e ? 0 : r[0] * s, h = e ? 0 : r[1] * s, c = a ? a[0] : 0, u = a ? a[1] : 0;
      let d = n[0] + l / 2 + c, f = n[2] - l / 2 + c, g = n[1] + h / 2 + u, m = n[3] - h / 2 + u;
      d > f && (d = (f + d) / 2, f = d), g > m && (g = (m + g) / 2, m = g);
      let p = ve(i[0], d, f), _ = ve(i[1], g, m);
      if (o && t && s) {
        const y = 30 * s;
        p += -y * Math.log(1 + Math.max(0, d - i[0]) / y) + y * Math.log(1 + Math.max(0, i[0] - f) / y), _ += -y * Math.log(1 + Math.max(0, g - i[1]) / y) + y * Math.log(1 + Math.max(0, i[1] - m) / y);
      }
      return [p, _];
    }
  );
}
function N0(n) {
  return n;
}
function jo(n, e, t, i) {
  const s = he(e) / t[0], r = We(e) / t[1];
  return i ? Math.min(n, Math.max(s, r)) : Math.min(n, Math.min(s, r));
}
function Ho(n, e, t) {
  let i = Math.min(n, e);
  const s = 50;
  return i *= Math.log(1 + s * Math.max(0, n / e - 1)) / s + 1, t && (i = Math.max(i, t), i /= Math.log(1 + s * Math.max(0, t / n - 1)) / s + 1), ve(i, t / 2, e * 2);
}
function G0(n, e, t, i) {
  return e = e !== void 0 ? e : !0, /**
   * @param {number|undefined} resolution Resolution.
   * @param {number} direction Direction.
   * @param {import("./size.js").Size} size Viewport size.
   * @param {boolean} [isMoving] True if an interaction or animation is in progress.
   * @return {number|undefined} Resolution.
   */
  function(s, r, o, a) {
    if (s !== void 0) {
      const l = n[0], h = n[n.length - 1], c = t ? jo(
        l,
        t,
        o,
        i
      ) : l;
      if (a)
        return e ? Ho(
          s,
          c,
          h
        ) : ve(s, h, c);
      const u = Math.min(c, s), d = Math.floor(No(n, u, r));
      return n[d] > c && d < n.length - 1 ? n[d + 1] : n[d];
    }
  };
}
function B0(n, e, t, i, s, r) {
  return i = i !== void 0 ? i : !0, t = t !== void 0 ? t : 0, /**
   * @param {number|undefined} resolution Resolution.
   * @param {number} direction Direction.
   * @param {import("./size.js").Size} size Viewport size.
   * @param {boolean} [isMoving] True if an interaction or animation is in progress.
   * @return {number|undefined} Resolution.
   */
  function(o, a, l, h) {
    if (o !== void 0) {
      const c = s ? jo(
        e,
        s,
        l,
        r
      ) : e;
      if (h)
        return i ? Ho(
          o,
          c,
          t
        ) : ve(o, t, c);
      const u = 1e-9, d = Math.ceil(
        Math.log(e / c) / Math.log(n) - u
      ), f = -a * (0.5 - u) + 0.5, g = Math.min(c, o), m = Math.floor(
        Math.log(e / g) / Math.log(n) + f
      ), p = Math.max(d, m), _ = e / Math.pow(n, p);
      return ve(_, t, c);
    }
  };
}
function vl(n, e, t, i, s) {
  return t = t !== void 0 ? t : !0, /**
   * @param {number|undefined} resolution Resolution.
   * @param {number} direction Direction.
   * @param {import("./size.js").Size} size Viewport size.
   * @param {boolean} [isMoving] True if an interaction or animation is in progress.
   * @return {number|undefined} Resolution.
   */
  function(r, o, a, l) {
    if (r !== void 0) {
      const h = i ? jo(
        n,
        i,
        a,
        s
      ) : n;
      return !t || !l ? ve(r, e, h) : Ho(
        r,
        h,
        e
      );
    }
  };
}
function Qo(n) {
  if (n !== void 0)
    return 0;
}
function El(n) {
  if (n !== void 0)
    return n;
}
function z0(n) {
  const e = 2 * Math.PI / n;
  return (
    /**
     * @param {number|undefined} rotation Rotation.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @return {number|undefined} Rotation.
     */
    function(t, i) {
      if (i)
        return t;
      if (t !== void 0)
        return t = Math.floor(t / e + 0.5) * e, t;
    }
  );
}
function W0(n) {
  const e = n === void 0 ? Ts(5) : n;
  return (
    /**
     * @param {number|undefined} rotation Rotation.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @return {number|undefined} Rotation.
     */
    function(t, i) {
      return i || t === void 0 ? t : Math.abs(t) <= e ? 0 : t;
    }
  );
}
function Jh(n) {
  return Math.pow(n, 3);
}
function fi(n) {
  return 1 - Jh(1 - n);
}
function X0(n) {
  return 3 * n * n - 2 * n * n * n;
}
function K0(n) {
  return n;
}
new Array(6);
function at() {
  return [1, 0, 0, 1, 0, 0];
}
function Y0(n, e) {
  const t = n[0], i = n[1], s = n[2], r = n[3], o = n[4], a = n[5], l = e[0], h = e[1], c = e[2], u = e[3], d = e[4], f = e[5];
  return n[0] = t * l + s * h, n[1] = i * l + r * h, n[2] = t * c + s * u, n[3] = i * c + r * u, n[4] = t * d + s * f + o, n[5] = i * d + r * f + a, n;
}
function U0(n, e, t, i, s, r, o) {
  return n[0] = e, n[1] = t, n[2] = i, n[3] = s, n[4] = r, n[5] = o, n;
}
function V0(n, e) {
  return n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[4] = e[4], n[5] = e[5], n;
}
function we(n, e) {
  const t = e[0], i = e[1];
  return e[0] = n[0] * t + n[2] * i + n[4], e[1] = n[1] * t + n[3] * i + n[5], e;
}
function Z0(n, e, t) {
  return U0(n, e, 0, 0, t, 0, 0);
}
function Dt(n, e, t, i, s, r, o, a) {
  const l = Math.sin(r), h = Math.cos(r);
  return n[0] = i * h, n[1] = s * l, n[2] = -i * l, n[3] = s * h, n[4] = o * i * h - a * i * l + e, n[5] = o * s * l + a * s * h + t, n;
}
function qo(n, e) {
  const t = j0(e);
  te(t !== 0, "Transformation matrix cannot be inverted");
  const i = e[0], s = e[1], r = e[2], o = e[3], a = e[4], l = e[5];
  return n[0] = o / t, n[1] = -s / t, n[2] = -r / t, n[3] = i / t, n[4] = (r * l - o * a) / t, n[5] = -(i * l - s * a) / t, n;
}
function j0(n) {
  return n[0] * n[3] - n[1] * n[2];
}
const xl = [1e6, 1e6, 1e6, 1e6, 2, 2];
function $h(n) {
  return "matrix(" + n.map(
    (t, i) => Math.round(t * xl[i]) / xl[i]
  ).join(", ") + ")";
}
function tn(n, e, t, i, s, r) {
  r = r || [];
  let o = 0;
  for (let a = e; a < t; a += i) {
    const l = n[a], h = n[a + 1];
    r[o++] = s[0] * l + s[2] * h + s[4], r[o++] = s[1] * l + s[3] * h + s[5];
  }
  return r && r.length != o && (r.length = o), r;
}
function ec(n, e, t, i, s, r, o) {
  o = o || [];
  const a = Math.cos(s), l = Math.sin(s), h = r[0], c = r[1];
  let u = 0;
  for (let d = e; d < t; d += i) {
    const f = n[d] - h, g = n[d + 1] - c;
    o[u++] = h + f * a - g * l, o[u++] = c + f * l + g * a;
    for (let m = d + 2; m < d + i; ++m)
      o[u++] = n[m];
  }
  return o && o.length != u && (o.length = u), o;
}
function H0(n, e, t, i, s, r, o, a) {
  a = a || [];
  const l = o[0], h = o[1];
  let c = 0;
  for (let u = e; u < t; u += i) {
    const d = n[u] - l, f = n[u + 1] - h;
    a[c++] = l + s * d, a[c++] = h + r * f;
    for (let g = u + 2; g < u + i; ++g)
      a[c++] = n[g];
  }
  return a && a.length != c && (a.length = c), a;
}
function Q0(n, e, t, i, s, r, o) {
  o = o || [];
  let a = 0;
  for (let l = e; l < t; l += i) {
    o[a++] = n[l] + s, o[a++] = n[l + 1] + r;
    for (let h = l + 2; h < l + i; ++h)
      o[a++] = n[h];
  }
  return o && o.length != a && (o.length = a), o;
}
const wl = at();
class q0 extends vt {
  constructor() {
    super(), this.extent_ = $e(), this.extentRevision_ = -1, this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = 0, this.simplifyTransformedInternal = zh(
      (e, t, i) => {
        if (!i)
          return this.getSimplifiedGeometry(t);
        const s = this.clone();
        return s.applyTransform(i), s.getSimplifiedGeometry(t);
      }
    );
  }
  /**
   * Get a transformed and simplified version of the geometry.
   * @abstract
   * @param {number} squaredTolerance Squared tolerance.
   * @param {import("../proj.js").TransformFunction} [transform] Optional transform function.
   * @return {Geometry} Simplified geometry.
   */
  simplifyTransformed(e, t) {
    return this.simplifyTransformedInternal(
      this.getRevision(),
      e,
      t
    );
  }
  /**
   * Make a complete copy of the geometry.
   * @abstract
   * @return {!Geometry} Clone.
   */
  clone() {
    return ie();
  }
  /**
   * @abstract
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(e, t, i, s) {
    return ie();
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   */
  containsXY(e, t) {
    const i = this.getClosestPoint([e, t]);
    return i[0] === e && i[1] === t;
  }
  /**
   * Return the closest point of the geometry to the passed point as
   * {@link module:ol/coordinate~Coordinate coordinate}.
   * @param {import("../coordinate.js").Coordinate} point Point.
   * @param {import("../coordinate.js").Coordinate} [closestPoint] Closest point.
   * @return {import("../coordinate.js").Coordinate} Closest point.
   * @api
   */
  getClosestPoint(e, t) {
    return t = t || [NaN, NaN], this.closestPointXY(e[0], e[1], t, 1 / 0), t;
  }
  /**
   * Returns true if this geometry includes the specified coordinate. If the
   * coordinate is on the boundary of the geometry, returns false.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @return {boolean} Contains coordinate.
   * @api
   */
  intersectsCoordinate(e) {
    return this.containsXY(e[0], e[1]);
  }
  /**
   * @abstract
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */
  computeExtent(e) {
    return ie();
  }
  /**
   * Get the extent of the geometry.
   * @param {import("../extent.js").Extent} [extent] Extent.
   * @return {import("../extent.js").Extent} extent Extent.
   * @api
   */
  getExtent(e) {
    if (this.extentRevision_ != this.getRevision()) {
      const t = this.computeExtent(this.extent_);
      (isNaN(t[0]) || isNaN(t[1])) && er(t), this.extentRevision_ = this.getRevision();
    }
    return C0(this.extent_, e);
  }
  /**
   * Rotate the geometry around a given coordinate. This modifies the geometry
   * coordinates in place.
   * @abstract
   * @param {number} angle Rotation angle in radians.
   * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
   * @api
   */
  rotate(e, t) {
    ie();
  }
  /**
   * Scale the geometry (with an optional origin).  This modifies the geometry
   * coordinates in place.
   * @abstract
   * @param {number} sx The scaling factor in the x-direction.
   * @param {number} [sy] The scaling factor in the y-direction (defaults to sx).
   * @param {import("../coordinate.js").Coordinate} [anchor] The scale origin (defaults to the center
   *     of the geometry extent).
   * @api
   */
  scale(e, t, i) {
    ie();
  }
  /**
   * Create a simplified version of this geometry.  For linestrings, this uses
   * the [Douglas Peucker](https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm)
   * algorithm.  For polygons, a quantization-based
   * simplification is used to preserve topology.
   * @param {number} tolerance The tolerance distance for simplification.
   * @return {Geometry} A new, simplified version of the original geometry.
   * @api
   */
  simplify(e) {
    return this.getSimplifiedGeometry(e * e);
  }
  /**
   * Create a simplified version of this geometry using the Douglas Peucker
   * algorithm.
   * See https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm.
   * @abstract
   * @param {number} squaredTolerance Squared tolerance.
   * @return {Geometry} Simplified geometry.
   */
  getSimplifiedGeometry(e) {
    return ie();
  }
  /**
   * Get the type of this geometry.
   * @abstract
   * @return {Type} Geometry type.
   */
  getType() {
    return ie();
  }
  /**
   * Apply a transform function to the coordinates of the geometry.
   * The geometry is modified in place.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   * @abstract
   * @param {import("../proj.js").TransformFunction} transformFn Transform function.
   * Called with a flat array of geometry coordinates.
   */
  applyTransform(e) {
    ie();
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @abstract
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   */
  intersectsExtent(e) {
    return ie();
  }
  /**
   * Translate the geometry.  This modifies the geometry coordinates in place.  If
   * instead you want a new geometry, first `clone()` this geometry.
   * @abstract
   * @param {number} deltaX Delta X.
   * @param {number} deltaY Delta Y.
   * @api
   */
  translate(e, t) {
    ie();
  }
  /**
   * Transform each coordinate of the geometry from one coordinate reference
   * system to another. The geometry is modified in place.
   * For example, a line will be transformed to a line and a circle to a circle.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   *
   * @param {import("../proj.js").ProjectionLike} source The current projection.  Can be a
   *     string identifier or a {@link module:ol/proj/Projection~Projection} object.
   * @param {import("../proj.js").ProjectionLike} destination The desired projection.  Can be a
   *     string identifier or a {@link module:ol/proj/Projection~Projection} object.
   * @return {this} This geometry.  Note that original geometry is
   *     modified in place.
   * @api
   */
  transform(e, t) {
    const i = et(e), s = i.getUnits() == "tile-pixels" ? function(r, o, a) {
      const l = i.getExtent(), h = i.getWorldExtent(), c = We(h) / We(l);
      return Dt(
        wl,
        h[0],
        h[3],
        c,
        -c,
        0,
        0,
        0
      ), tn(
        r,
        0,
        r.length,
        a,
        wl,
        o
      ), Os(i, t)(
        r,
        o,
        a
      );
    } : Os(i, t);
    return this.applyTransform(s), this;
  }
}
class or extends q0 {
  constructor() {
    super(), this.layout = "XY", this.stride = 2, this.flatCoordinates;
  }
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */
  computeExtent(e) {
    return Xo(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      e
    );
  }
  /**
   * @abstract
   * @return {Array<*> | null} Coordinates.
   */
  getCoordinates() {
    return ie();
  }
  /**
   * Return the first coordinate of the geometry.
   * @return {import("../coordinate.js").Coordinate} First coordinate.
   * @api
   */
  getFirstCoordinate() {
    return this.flatCoordinates.slice(0, this.stride);
  }
  /**
   * @return {Array<number>} Flat coordinates.
   */
  getFlatCoordinates() {
    return this.flatCoordinates;
  }
  /**
   * Return the last coordinate of the geometry.
   * @return {import("../coordinate.js").Coordinate} Last point.
   * @api
   */
  getLastCoordinate() {
    return this.flatCoordinates.slice(
      this.flatCoordinates.length - this.stride
    );
  }
  /**
   * Return the {@link import("./Geometry.js").GeometryLayout layout} of the geometry.
   * @return {import("./Geometry.js").GeometryLayout} Layout.
   * @api
   */
  getLayout() {
    return this.layout;
  }
  /**
   * Create a simplified version of this geometry using the Douglas Peucker algorithm.
   * @param {number} squaredTolerance Squared tolerance.
   * @return {SimpleGeometry} Simplified geometry.
   */
  getSimplifiedGeometry(e) {
    if (this.simplifiedGeometryRevision !== this.getRevision() && (this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = this.getRevision()), e < 0 || this.simplifiedGeometryMaxMinSquaredTolerance !== 0 && e <= this.simplifiedGeometryMaxMinSquaredTolerance)
      return this;
    const t = this.getSimplifiedGeometryInternal(e);
    return t.getFlatCoordinates().length < this.flatCoordinates.length ? t : (this.simplifiedGeometryMaxMinSquaredTolerance = e, this);
  }
  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {SimpleGeometry} Simplified geometry.
   * @protected
   */
  getSimplifiedGeometryInternal(e) {
    return this;
  }
  /**
   * @return {number} Stride.
   */
  getStride() {
    return this.stride;
  }
  /**
   * @param {import("./Geometry.js").GeometryLayout} layout Layout.
   * @param {Array<number>} flatCoordinates Flat coordinates.
   */
  setFlatCoordinates(e, t) {
    this.stride = Cl(e), this.layout = e, this.flatCoordinates = t;
  }
  /**
   * @abstract
   * @param {!Array<*>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */
  setCoordinates(e, t) {
    ie();
  }
  /**
   * @param {import("./Geometry.js").GeometryLayout|undefined} layout Layout.
   * @param {Array<*>} coordinates Coordinates.
   * @param {number} nesting Nesting.
   * @protected
   */
  setLayout(e, t, i) {
    let s;
    if (e)
      s = Cl(e);
    else {
      for (let r = 0; r < i; ++r) {
        if (t.length === 0) {
          this.layout = "XY", this.stride = 2;
          return;
        }
        t = /** @type {Array<unknown>} */
        t[0];
      }
      s = t.length, e = J0(s);
    }
    this.layout = e, this.stride = s;
  }
  /**
   * Apply a transform function to the coordinates of the geometry.
   * The geometry is modified in place.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   * @param {import("../proj.js").TransformFunction} transformFn Transform function.
   * Called with a flat array of geometry coordinates.
   * @api
   */
  applyTransform(e) {
    this.flatCoordinates && (e(this.flatCoordinates, this.flatCoordinates, this.stride), this.changed());
  }
  /**
   * Rotate the geometry around a given coordinate. This modifies the geometry
   * coordinates in place.
   * @param {number} angle Rotation angle in counter-clockwise radians.
   * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
   * @api
   */
  rotate(e, t) {
    const i = this.getFlatCoordinates();
    if (i) {
      const s = this.getStride();
      ec(
        i,
        0,
        i.length,
        s,
        e,
        t,
        i
      ), this.changed();
    }
  }
  /**
   * Scale the geometry (with an optional origin).  This modifies the geometry
   * coordinates in place.
   * @param {number} sx The scaling factor in the x-direction.
   * @param {number} [sy] The scaling factor in the y-direction (defaults to sx).
   * @param {import("../coordinate.js").Coordinate} [anchor] The scale origin (defaults to the center
   *     of the geometry extent).
   * @api
   */
  scale(e, t, i) {
    t === void 0 && (t = e), i || (i = Sn(this.getExtent()));
    const s = this.getFlatCoordinates();
    if (s) {
      const r = this.getStride();
      H0(
        s,
        0,
        s.length,
        r,
        e,
        t,
        i,
        s
      ), this.changed();
    }
  }
  /**
   * Translate the geometry.  This modifies the geometry coordinates in place.  If
   * instead you want a new geometry, first `clone()` this geometry.
   * @param {number} deltaX Delta X.
   * @param {number} deltaY Delta Y.
   * @api
   */
  translate(e, t) {
    const i = this.getFlatCoordinates();
    if (i) {
      const s = this.getStride();
      Q0(
        i,
        0,
        i.length,
        s,
        e,
        t,
        i
      ), this.changed();
    }
  }
}
function J0(n) {
  let e;
  return n == 2 ? e = "XY" : n == 3 ? e = "XYZ" : n == 4 && (e = "XYZM"), /** @type {import("./Geometry.js").GeometryLayout} */
  e;
}
function Cl(n) {
  let e;
  return n == "XY" ? e = 2 : n == "XYZ" || n == "XYM" ? e = 3 : n == "XYZM" && (e = 4), /** @type {number} */
  e;
}
function $0(n, e, t) {
  const i = n.getFlatCoordinates();
  if (!i)
    return null;
  const s = n.getStride();
  return tn(
    i,
    0,
    i.length,
    s,
    e,
    t
  );
}
function Al(n, e, t, i, s, r, o) {
  const a = n[e], l = n[e + 1], h = n[t] - a, c = n[t + 1] - l;
  let u;
  if (h === 0 && c === 0)
    u = e;
  else {
    const d = ((s - a) * h + (r - l) * c) / (h * h + c * c);
    if (d > 1)
      u = t;
    else if (d > 0) {
      for (let f = 0; f < i; ++f)
        o[f] = Ke(
          n[e + f],
          n[t + f],
          d
        );
      o.length = i;
      return;
    } else
      u = e;
  }
  for (let d = 0; d < i; ++d)
    o[d] = n[u + d];
  o.length = i;
}
function Jo(n, e, t, i, s) {
  let r = n[e], o = n[e + 1];
  for (e += i; e < t; e += i) {
    const a = n[e], l = n[e + 1], h = Qn(r, o, a, l);
    h > s && (s = h), r = a, o = l;
  }
  return s;
}
function e_(n, e, t, i, s) {
  for (let r = 0, o = t.length; r < o; ++r) {
    const a = t[r];
    s = Jo(n, e, a, i, s), e = a;
  }
  return s;
}
function $o(n, e, t, i, s, r, o, a, l, h, c) {
  if (e == t)
    return h;
  let u, d;
  if (s === 0) {
    if (d = Qn(
      o,
      a,
      n[e],
      n[e + 1]
    ), d < h) {
      for (u = 0; u < i; ++u)
        l[u] = n[e + u];
      return l.length = i, d;
    }
    return h;
  }
  c = c || [NaN, NaN];
  let f = e + i;
  for (; f < t; )
    if (Al(
      n,
      f - i,
      f,
      i,
      o,
      a,
      c
    ), d = Qn(o, a, c[0], c[1]), d < h) {
      for (h = d, u = 0; u < i; ++u)
        l[u] = c[u];
      l.length = i, f += i;
    } else
      f += i * Math.max(
        (Math.sqrt(d) - Math.sqrt(h)) / s | 0,
        1
      );
  if (r && (Al(
    n,
    t - i,
    e,
    i,
    o,
    a,
    c
  ), d = Qn(o, a, c[0], c[1]), d < h)) {
    for (h = d, u = 0; u < i; ++u)
      l[u] = c[u];
    l.length = i;
  }
  return h;
}
function t_(n, e, t, i, s, r, o, a, l, h, c) {
  c = c || [NaN, NaN];
  for (let u = 0, d = t.length; u < d; ++u) {
    const f = t[u];
    h = $o(
      n,
      e,
      f,
      i,
      s,
      r,
      o,
      a,
      l,
      h,
      c
    ), e = f;
  }
  return h;
}
function n_(n, e, t, i) {
  for (let s = 0, r = t.length; s < r; ++s)
    n[e++] = t[s];
  return e;
}
function ea(n, e, t, i) {
  for (let s = 0, r = t.length; s < r; ++s) {
    const o = t[s];
    for (let a = 0; a < i; ++a)
      n[e++] = o[a];
  }
  return e;
}
function i_(n, e, t, i, s) {
  s = s || [];
  let r = 0;
  for (let o = 0, a = t.length; o < a; ++o) {
    const l = ea(
      n,
      e,
      t[o],
      i
    );
    s[r++] = l, e = l;
  }
  return s.length = r, s;
}
function ar(n, e, t, i, s, r, o) {
  const a = (t - e) / i;
  if (a < 3) {
    for (; e < t; e += i)
      r[o++] = n[e], r[o++] = n[e + 1];
    return o;
  }
  const l = new Array(a);
  l[0] = 1, l[a - 1] = 1;
  const h = [e, t - i];
  let c = 0;
  for (; h.length > 0; ) {
    const u = h.pop(), d = h.pop();
    let f = 0;
    const g = n[d], m = n[d + 1], p = n[u], _ = n[u + 1];
    for (let y = d + i; y < u; y += i) {
      const x = n[y], v = n[y + 1], E = l0(x, v, g, m, p, _);
      E > f && (c = y, f = E);
    }
    f > s && (l[(c - e) / i] = 1, d + i < c && h.push(d, c), c + i < u && h.push(c, u));
  }
  for (let u = 0; u < a; ++u)
    l[u] && (r[o++] = n[e + u * i], r[o++] = n[e + u * i + 1]);
  return o;
}
function s_(n, e, t, i, s, r, o, a) {
  for (let l = 0, h = t.length; l < h; ++l) {
    const c = t[l];
    o = ar(
      n,
      e,
      c,
      i,
      s,
      r,
      o
    ), a.push(o), e = c;
  }
  return o;
}
function pn(n, e) {
  return e * Math.round(n / e);
}
function r_(n, e, t, i, s, r, o) {
  if (e == t)
    return o;
  let a = pn(n[e], s), l = pn(n[e + 1], s);
  e += i, r[o++] = a, r[o++] = l;
  let h, c;
  do
    if (h = pn(n[e], s), c = pn(n[e + 1], s), e += i, e == t)
      return r[o++] = h, r[o++] = c, o;
  while (h == a && c == l);
  for (; e < t; ) {
    const u = pn(n[e], s), d = pn(n[e + 1], s);
    if (e += i, u == h && d == c)
      continue;
    const f = h - a, g = c - l, m = u - a, p = d - l;
    if (f * p == g * m && (f < 0 && m < f || f == m || f > 0 && m > f) && (g < 0 && p < g || g == p || g > 0 && p > g)) {
      h = u, c = d;
      continue;
    }
    r[o++] = h, r[o++] = c, a = h, l = c, h = u, c = d;
  }
  return r[o++] = h, r[o++] = c, o;
}
function tc(n, e, t, i, s, r, o, a) {
  for (let l = 0, h = t.length; l < h; ++l) {
    const c = t[l];
    o = r_(
      n,
      e,
      c,
      i,
      s,
      r,
      o
    ), a.push(o), e = c;
  }
  return o;
}
function yn(n, e, t, i, s) {
  s = s !== void 0 ? s : [];
  let r = 0;
  for (let o = e; o < t; o += i)
    s[r++] = n.slice(o, o + i);
  return s.length = r, s;
}
function ks(n, e, t, i, s) {
  s = s !== void 0 ? s : [];
  let r = 0;
  for (let o = 0, a = t.length; o < a; ++o) {
    const l = t[o];
    s[r++] = yn(
      n,
      e,
      l,
      i,
      s[r]
    ), e = l;
  }
  return s.length = r, s;
}
function Il(n, e, t, i, s) {
  s = s !== void 0 ? s : [];
  let r = 0;
  for (let o = 0, a = t.length; o < a; ++o) {
    const l = t[o];
    s[r++] = l.length === 1 && l[0] === e ? [] : ks(
      n,
      e,
      l,
      i,
      s[r]
    ), e = l[l.length - 1];
  }
  return s.length = r, s;
}
function nc(n, e, t, i) {
  let s = 0, r = n[t - i], o = n[t - i + 1];
  for (; e < t; e += i) {
    const a = n[e], l = n[e + 1];
    s += o * a - r * l, r = a, o = l;
  }
  return s / 2;
}
function o_(n, e, t, i) {
  let s = 0;
  for (let r = 0, o = t.length; r < o; ++r) {
    const a = t[r];
    s += nc(n, e, a, i), e = a;
  }
  return s;
}
class Xi extends or {
  /**
   * @param {Array<import("../coordinate.js").Coordinate>|Array<number>} coordinates Coordinates.
   *     For internal use, flat coordinates in combination with `layout` are also accepted.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */
  constructor(e, t) {
    super(), this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, t !== void 0 && !Array.isArray(e[0]) ? this.setFlatCoordinates(
      t,
      /** @type {Array<number>} */
      e
    ) : this.setCoordinates(
      /** @type {Array<import("../coordinate.js").Coordinate>} */
      e,
      t
    );
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!LinearRing} Clone.
   * @api
   */
  clone() {
    return new Xi(this.flatCoordinates.slice(), this.layout);
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(e, t, i, s) {
    return s < Wo(this.getExtent(), e, t) ? s : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      Jo(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), $o(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      this.maxDelta_,
      !0,
      e,
      t,
      i,
      s
    ));
  }
  /**
   * Return the area of the linear ring on projected plane.
   * @return {number} Area (on projected plane).
   * @api
   */
  getArea() {
    return nc(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride
    );
  }
  /**
   * Return the coordinates of the linear ring.
   * @return {Array<import("../coordinate.js").Coordinate>} Coordinates.
   * @api
   */
  getCoordinates() {
    return yn(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride
    );
  }
  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {LinearRing} Simplified LinearRing.
   * @protected
   */
  getSimplifiedGeometryInternal(e) {
    const t = [];
    return t.length = ar(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      e,
      t,
      0
    ), new Xi(t, "XY");
  }
  /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   */
  getType() {
    return "LinearRing";
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */
  intersectsExtent(e) {
    return !1;
  }
  /**
   * Set the coordinates of the linear ring.
   * @param {!Array<import("../coordinate.js").Coordinate>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */
  setCoordinates(e, t) {
    this.setLayout(t, e, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = ea(
      this.flatCoordinates,
      0,
      e,
      this.stride
    ), this.changed();
  }
}
class lr extends or {
  /**
   * @param {import("../coordinate.js").Coordinate} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */
  constructor(e, t) {
    super(), this.setCoordinates(e, t);
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!Point} Clone.
   * @api
   */
  clone() {
    const e = new lr(this.flatCoordinates.slice(), this.layout);
    return e.applyProperties(this), e;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(e, t, i, s) {
    const r = this.flatCoordinates, o = Qn(
      e,
      t,
      r[0],
      r[1]
    );
    if (o < s) {
      const a = this.stride;
      for (let l = 0; l < a; ++l)
        i[l] = r[l];
      return i.length = a, o;
    }
    return s;
  }
  /**
   * Return the coordinate of the point.
   * @return {import("../coordinate.js").Coordinate} Coordinates.
   * @api
   */
  getCoordinates() {
    return this.flatCoordinates.slice();
  }
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */
  computeExtent(e) {
    return Uh(this.flatCoordinates, e);
  }
  /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   */
  getType() {
    return "Point";
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */
  intersectsExtent(e) {
    return Yh(e, this.flatCoordinates[0], this.flatCoordinates[1]);
  }
  /**
   * @param {!Array<*>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */
  setCoordinates(e, t) {
    this.setLayout(t, e, 0), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = n_(
      this.flatCoordinates,
      0,
      e,
      this.stride
    ), this.changed();
  }
}
function a_(n, e, t, i, s) {
  return !Zh(
    s,
    /**
     * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
     * @return {boolean} Contains (x, y).
     */
    function(o) {
      return !vn(
        n,
        e,
        t,
        i,
        o[0],
        o[1]
      );
    }
  );
}
function vn(n, e, t, i, s, r) {
  let o = 0, a = n[t - i], l = n[t - i + 1];
  for (; e < t; e += i) {
    const h = n[e], c = n[e + 1];
    l <= r ? c > r && (h - a) * (r - l) - (s - a) * (c - l) > 0 && o++ : c <= r && (h - a) * (r - l) - (s - a) * (c - l) < 0 && o--, a = h, l = c;
  }
  return o !== 0;
}
function ic(n, e, t, i, s, r) {
  if (t.length === 0 || !vn(n, e, t[0], i, s, r))
    return !1;
  for (let o = 1, a = t.length; o < a; ++o)
    if (vn(n, t[o - 1], t[o], i, s, r))
      return !1;
  return !0;
}
function ta(n, e, t, i, s, r, o) {
  let a, l, h, c, u, d, f;
  const g = s[r + 1], m = [];
  for (let y = 0, x = t.length; y < x; ++y) {
    const v = t[y];
    for (c = n[v - i], d = n[v - i + 1], a = e; a < v; a += i)
      u = n[a], f = n[a + 1], (g <= d && f <= g || d <= g && g <= f) && (h = (g - d) / (f - d) * (u - c) + c, m.push(h)), c = u, d = f;
  }
  let p = NaN, _ = -1 / 0;
  for (m.sort(on), c = m[0], a = 1, l = m.length; a < l; ++a) {
    u = m[a];
    const y = Math.abs(u - c);
    y > _ && (h = (c + u) / 2, ic(n, e, t, i, h, g) && (p = h, _ = y)), c = u;
  }
  return isNaN(p) && (p = s[r]), o ? (o.push(p, g, _), o) : [p, g, _];
}
function l_(n, e, t, i, s) {
  let r = [];
  for (let o = 0, a = t.length; o < a; ++o) {
    const l = t[o];
    r = ta(
      n,
      e,
      l,
      i,
      s,
      2 * o,
      r
    ), e = l[l.length - 1];
  }
  return r;
}
function sc(n, e, t, i, s) {
  let r;
  for (e += i; e < t; e += i)
    if (r = s(
      n.slice(e - i, e),
      n.slice(e, e + i)
    ), r)
      return r;
  return !1;
}
function na(n, e, t, i, s) {
  const r = Vh(
    $e(),
    n,
    e,
    t,
    i
  );
  return Be(s, r) ? jn(s, r) || r[0] >= s[0] && r[2] <= s[2] || r[1] >= s[1] && r[3] <= s[3] ? !0 : sc(
    n,
    e,
    t,
    i,
    /**
     * @param {import("../../coordinate.js").Coordinate} point1 Start point.
     * @param {import("../../coordinate.js").Coordinate} point2 End point.
     * @return {boolean} `true` if the segment and the extent intersect,
     *     `false` otherwise.
     */
    function(o, a) {
      return A0(s, o, a);
    }
  ) : !1;
}
function rc(n, e, t, i, s) {
  return !!(na(n, e, t, i, s) || vn(
    n,
    e,
    t,
    i,
    s[0],
    s[1]
  ) || vn(
    n,
    e,
    t,
    i,
    s[0],
    s[3]
  ) || vn(
    n,
    e,
    t,
    i,
    s[2],
    s[1]
  ) || vn(
    n,
    e,
    t,
    i,
    s[2],
    s[3]
  ));
}
function h_(n, e, t, i, s) {
  if (!rc(n, e, t[0], i, s))
    return !1;
  if (t.length === 1)
    return !0;
  for (let r = 1, o = t.length; r < o; ++r)
    if (a_(
      n,
      t[r - 1],
      t[r],
      i,
      s
    ) && !na(
      n,
      t[r - 1],
      t[r],
      i,
      s
    ))
      return !1;
  return !0;
}
function c_(n, e, t, i) {
  for (; e < t - i; ) {
    for (let s = 0; s < i; ++s) {
      const r = n[e + s];
      n[e + s] = n[t - i + s], n[t - i + s] = r;
    }
    e += i, t -= i;
  }
}
function ia(n, e, t, i) {
  let s = 0, r = n[t - i], o = n[t - i + 1];
  for (; e < t; e += i) {
    const a = n[e], l = n[e + 1];
    s += (a - r) * (l + o), r = a, o = l;
  }
  return s === 0 ? void 0 : s > 0;
}
function u_(n, e, t, i, s) {
  s = s !== void 0 ? s : !1;
  for (let r = 0, o = t.length; r < o; ++r) {
    const a = t[r], l = ia(
      n,
      e,
      a,
      i
    );
    if (r === 0) {
      if (s && l || !s && !l)
        return !1;
    } else if (s && !l || !s && l)
      return !1;
    e = a;
  }
  return !0;
}
function Tl(n, e, t, i, s) {
  s = s !== void 0 ? s : !1;
  for (let r = 0, o = t.length; r < o; ++r) {
    const a = t[r], l = ia(
      n,
      e,
      a,
      i
    );
    (r === 0 ? s && l || !s && !l : s && !l || !s && l) && c_(n, e, a, i), e = a;
  }
  return e;
}
function d_(n, e) {
  const t = [];
  let i = 0, s = 0, r;
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o], h = ia(n, i, l, 2);
    if (r === void 0 && (r = h), h === r)
      t.push(e.slice(s, o + 1));
    else {
      if (t.length === 0)
        continue;
      t[t.length - 1].push(e[s]);
    }
    s = o + 1, i = l;
  }
  return t;
}
class Ki extends or {
  /**
   * @param {!Array<Array<import("../coordinate.js").Coordinate>>|!Array<number>} coordinates
   *     Array of linear rings that define the polygon. The first linear ring of the
   *     array defines the outer-boundary or surface of the polygon. Each subsequent
   *     linear ring defines a hole in the surface of the polygon. A linear ring is
   *     an array of vertices' coordinates where the first coordinate and the last are
   *     equivalent. (For internal use, flat coordinates in combination with
   *     `layout` and `ends` are also accepted.)
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @param {Array<number>} [ends] Ends (for internal use with flat coordinates).
   */
  constructor(e, t, i) {
    super(), this.ends_ = [], this.flatInteriorPointRevision_ = -1, this.flatInteriorPoint_ = null, this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, this.orientedRevision_ = -1, this.orientedFlatCoordinates_ = null, t !== void 0 && i ? (this.setFlatCoordinates(
      t,
      /** @type {Array<number>} */
      e
    ), this.ends_ = i) : this.setCoordinates(
      /** @type {Array<Array<import("../coordinate.js").Coordinate>>} */
      e,
      t
    );
  }
  /**
   * Append the passed linear ring to this polygon.
   * @param {LinearRing} linearRing Linear ring.
   * @api
   */
  appendLinearRing(e) {
    this.flatCoordinates ? qs(this.flatCoordinates, e.getFlatCoordinates()) : this.flatCoordinates = e.getFlatCoordinates().slice(), this.ends_.push(this.flatCoordinates.length), this.changed();
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!Polygon} Clone.
   * @api
   */
  clone() {
    const e = new Ki(
      this.flatCoordinates.slice(),
      this.layout,
      this.ends_.slice()
    );
    return e.applyProperties(this), e;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(e, t, i, s) {
    return s < Wo(this.getExtent(), e, t) ? s : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      e_(
        this.flatCoordinates,
        0,
        this.ends_,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), t_(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride,
      this.maxDelta_,
      !0,
      e,
      t,
      i,
      s
    ));
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   */
  containsXY(e, t) {
    return ic(
      this.getOrientedFlatCoordinates(),
      0,
      this.ends_,
      this.stride,
      e,
      t
    );
  }
  /**
   * Return the area of the polygon on projected plane.
   * @return {number} Area (on projected plane).
   * @api
   */
  getArea() {
    return o_(
      this.getOrientedFlatCoordinates(),
      0,
      this.ends_,
      this.stride
    );
  }
  /**
   * Get the coordinate array for this geometry.  This array has the structure
   * of a GeoJSON coordinate array for polygons.
   *
   * @param {boolean} [right] Orient coordinates according to the right-hand
   *     rule (counter-clockwise for exterior and clockwise for interior rings).
   *     If `false`, coordinates will be oriented according to the left-hand rule
   *     (clockwise for exterior and counter-clockwise for interior rings).
   *     By default, coordinate orientation will depend on how the geometry was
   *     constructed.
   * @return {Array<Array<import("../coordinate.js").Coordinate>>} Coordinates.
   * @api
   */
  getCoordinates(e) {
    let t;
    return e !== void 0 ? (t = this.getOrientedFlatCoordinates().slice(), Tl(t, 0, this.ends_, this.stride, e)) : t = this.flatCoordinates, ks(t, 0, this.ends_, this.stride);
  }
  /**
   * @return {Array<number>} Ends.
   */
  getEnds() {
    return this.ends_;
  }
  /**
   * @return {Array<number>} Interior point.
   */
  getFlatInteriorPoint() {
    if (this.flatInteriorPointRevision_ != this.getRevision()) {
      const e = Sn(this.getExtent());
      this.flatInteriorPoint_ = ta(
        this.getOrientedFlatCoordinates(),
        0,
        this.ends_,
        this.stride,
        e,
        0
      ), this.flatInteriorPointRevision_ = this.getRevision();
    }
    return (
      /** @type {import("../coordinate.js").Coordinate} */
      this.flatInteriorPoint_
    );
  }
  /**
   * Return an interior point of the polygon.
   * @return {Point} Interior point as XYM coordinate, where M is the
   * length of the horizontal intersection that the point belongs to.
   * @api
   */
  getInteriorPoint() {
    return new lr(this.getFlatInteriorPoint(), "XYM");
  }
  /**
   * Return the number of rings of the polygon,  this includes the exterior
   * ring and any interior rings.
   *
   * @return {number} Number of rings.
   * @api
   */
  getLinearRingCount() {
    return this.ends_.length;
  }
  /**
   * Return the Nth linear ring of the polygon geometry. Return `null` if the
   * given index is out of range.
   * The exterior linear ring is available at index `0` and the interior rings
   * at index `1` and beyond.
   *
   * @param {number} index Index.
   * @return {LinearRing|null} Linear ring.
   * @api
   */
  getLinearRing(e) {
    return e < 0 || this.ends_.length <= e ? null : new Xi(
      this.flatCoordinates.slice(
        e === 0 ? 0 : this.ends_[e - 1],
        this.ends_[e]
      ),
      this.layout
    );
  }
  /**
   * Return the linear rings of the polygon.
   * @return {Array<LinearRing>} Linear rings.
   * @api
   */
  getLinearRings() {
    const e = this.layout, t = this.flatCoordinates, i = this.ends_, s = [];
    let r = 0;
    for (let o = 0, a = i.length; o < a; ++o) {
      const l = i[o], h = new Xi(
        t.slice(r, l),
        e
      );
      s.push(h), r = l;
    }
    return s;
  }
  /**
   * @return {Array<number>} Oriented flat coordinates.
   */
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const e = this.flatCoordinates;
      u_(e, 0, this.ends_, this.stride) ? this.orientedFlatCoordinates_ = e : (this.orientedFlatCoordinates_ = e.slice(), this.orientedFlatCoordinates_.length = Tl(
        this.orientedFlatCoordinates_,
        0,
        this.ends_,
        this.stride
      )), this.orientedRevision_ = this.getRevision();
    }
    return (
      /** @type {Array<number>} */
      this.orientedFlatCoordinates_
    );
  }
  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {Polygon} Simplified Polygon.
   * @protected
   */
  getSimplifiedGeometryInternal(e) {
    const t = [], i = [];
    return t.length = tc(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride,
      Math.sqrt(e),
      t,
      0,
      i
    ), new Ki(t, "XY", i);
  }
  /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   */
  getType() {
    return "Polygon";
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */
  intersectsExtent(e) {
    return h_(
      this.getOrientedFlatCoordinates(),
      0,
      this.ends_,
      this.stride,
      e
    );
  }
  /**
   * Set the coordinates of the polygon.
   * @param {!Array<Array<import("../coordinate.js").Coordinate>>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */
  setCoordinates(e, t) {
    this.setLayout(t, e, 2), this.flatCoordinates || (this.flatCoordinates = []);
    const i = i_(
      this.flatCoordinates,
      0,
      e,
      this.stride,
      this.ends_
    );
    this.flatCoordinates.length = i.length === 0 ? 0 : i[i.length - 1], this.changed();
  }
}
function Sl(n) {
  if (sr(n))
    throw new Error("Cannot create polygon from empty extent");
  const e = n[0], t = n[1], i = n[2], s = n[3], r = [
    e,
    t,
    e,
    s,
    i,
    s,
    i,
    t,
    e,
    t
  ];
  return new Ki(r, "XY", [r.length]);
}
const Dr = 0;
class f_ extends vt {
  /**
   * @param {ViewOptions} [options] View options.
   */
  constructor(e) {
    super(), this.on, this.once, this.un, e = Object.assign({}, e), this.hints_ = [0, 0], this.animations_ = [], this.updateAnimationKey_, this.projection_ = Uo(e.projection, "EPSG:3857"), this.viewportSize_ = [100, 100], this.targetCenter_ = null, this.targetResolution_, this.targetRotation_, this.nextCenter_ = null, this.nextResolution_, this.nextRotation_, this.cancelAnchor_ = void 0, e.projection && L0(), e.center && (e.center = Tt(e.center, this.projection_)), e.extent && (e.extent = _n(e.extent, this.projection_)), this.applyOptions_(e);
  }
  /**
   * Set up the view with the given options.
   * @param {ViewOptions} options View options.
   */
  applyOptions_(e) {
    const t = Object.assign({}, e);
    for (const a in st)
      delete t[a];
    this.setProperties(t, !0);
    const i = m_(e);
    this.maxResolution_ = i.maxResolution, this.minResolution_ = i.minResolution, this.zoomFactor_ = i.zoomFactor, this.resolutions_ = e.resolutions, this.padding_ = e.padding, this.minZoom_ = i.minZoom;
    const s = g_(e), r = i.constraint, o = p_(e);
    this.constraints_ = {
      center: s,
      resolution: r,
      rotation: o
    }, this.setRotation(e.rotation !== void 0 ? e.rotation : 0), this.setCenterInternal(
      e.center !== void 0 ? e.center : null
    ), e.resolution !== void 0 ? this.setResolution(e.resolution) : e.zoom !== void 0 && this.setZoom(e.zoom);
  }
  /**
   * Padding (in css pixels).
   * If the map viewport is partially covered with other content (overlays) along
   * its edges, this setting allows to shift the center of the viewport away from that
   * content. The order of the values in the array is top, right, bottom, left.
   * The default is no padding, which is equivalent to `[0, 0, 0, 0]`.
   * @type {Array<number>|undefined}
   * @api
   */
  get padding() {
    return this.padding_;
  }
  set padding(e) {
    let t = this.padding_;
    this.padding_ = e;
    const i = this.getCenterInternal();
    if (i) {
      const s = e || [0, 0, 0, 0];
      t = t || [0, 0, 0, 0];
      const r = this.getResolution(), o = r / 2 * (s[3] - t[3] + t[1] - s[1]), a = r / 2 * (s[0] - t[0] + t[2] - s[2]);
      this.setCenterInternal([i[0] + o, i[1] - a]);
    }
  }
  /**
   * Get an updated version of the view options used to construct the view.  The
   * current resolution (or zoom), center, and rotation are applied to any stored
   * options.  The provided options can be used to apply new min/max zoom or
   * resolution limits.
   * @param {ViewOptions} newOptions New options to be applied.
   * @return {ViewOptions} New options updated with the current view state.
   */
  getUpdatedOptions_(e) {
    const t = this.getProperties();
    return t.resolution !== void 0 ? t.resolution = this.getResolution() : t.zoom = this.getZoom(), t.center = this.getCenterInternal(), t.rotation = this.getRotation(), Object.assign({}, t, e);
  }
  /**
   * Animate the view.  The view's center, zoom (or resolution), and rotation
   * can be animated for smooth transitions between view states.  For example,
   * to animate the view to a new zoom level:
   *
   *     view.animate({zoom: view.getZoom() + 1});
   *
   * By default, the animation lasts one second and uses in-and-out easing.  You
   * can customize this behavior by including `duration` (in milliseconds) and
   * `easing` options (see {@link module:ol/easing}).
   *
   * To chain together multiple animations, call the method with multiple
   * animation objects.  For example, to first zoom and then pan:
   *
   *     view.animate({zoom: 10}, {center: [0, 0]});
   *
   * If you provide a function as the last argument to the animate method, it
   * will get called at the end of an animation series.  The callback will be
   * called with `true` if the animation series completed on its own or `false`
   * if it was cancelled.
   *
   * Animations are cancelled by user interactions (e.g. dragging the map) or by
   * calling `view.setCenter()`, `view.setResolution()`, or `view.setRotation()`
   * (or another method that calls one of these).
   *
   * @param {...(AnimationOptions|function(boolean): void)} var_args Animation
   *     options.  Multiple animations can be run in series by passing multiple
   *     options objects.  To run multiple animations in parallel, call the method
   *     multiple times.  An optional callback can be provided as a final
   *     argument.  The callback will be called with a boolean indicating whether
   *     the animation completed without being cancelled.
   * @api
   */
  animate(e) {
    this.isDef() && !this.getAnimating() && this.resolveConstraints(0);
    const t = new Array(arguments.length);
    for (let i = 0; i < t.length; ++i) {
      let s = arguments[i];
      s.center && (s = Object.assign({}, s), s.center = Tt(
        s.center,
        this.getProjection()
      )), s.anchor && (s = Object.assign({}, s), s.anchor = Tt(
        s.anchor,
        this.getProjection()
      )), t[i] = s;
    }
    this.animateInternal.apply(this, t);
  }
  /**
   * @param {...(AnimationOptions|function(boolean): void)} var_args Animation options.
   */
  animateInternal(e) {
    let t = arguments.length, i;
    t > 1 && typeof arguments[t - 1] == "function" && (i = arguments[t - 1], --t);
    let s = 0;
    for (; s < t && !this.isDef(); ++s) {
      const c = arguments[s];
      c.center && this.setCenterInternal(c.center), c.zoom !== void 0 ? this.setZoom(c.zoom) : c.resolution && this.setResolution(c.resolution), c.rotation !== void 0 && this.setRotation(c.rotation);
    }
    if (s === t) {
      i && ys(i, !0);
      return;
    }
    let r = Date.now(), o = this.targetCenter_.slice(), a = this.targetResolution_, l = this.targetRotation_;
    const h = [];
    for (; s < t; ++s) {
      const c = (
        /** @type {AnimationOptions} */
        arguments[s]
      ), u = {
        start: r,
        complete: !1,
        anchor: c.anchor,
        duration: c.duration !== void 0 ? c.duration : 1e3,
        easing: c.easing || X0,
        callback: i
      };
      if (c.center && (u.sourceCenter = o, u.targetCenter = c.center.slice(), o = u.targetCenter), c.zoom !== void 0 ? (u.sourceResolution = a, u.targetResolution = this.getResolutionForZoom(c.zoom), a = u.targetResolution) : c.resolution && (u.sourceResolution = a, u.targetResolution = c.resolution, a = u.targetResolution), c.rotation !== void 0) {
        u.sourceRotation = l;
        const d = qn(c.rotation - l + Math.PI, 2 * Math.PI) - Math.PI;
        u.targetRotation = l + d, l = u.targetRotation;
      }
      __(u) ? u.complete = !0 : r += u.duration, h.push(u);
    }
    this.animations_.push(h), this.setHint(Re.ANIMATING, 1), this.updateAnimations_();
  }
  /**
   * Determine if the view is being animated.
   * @return {boolean} The view is being animated.
   * @api
   */
  getAnimating() {
    return this.hints_[Re.ANIMATING] > 0;
  }
  /**
   * Determine if the user is interacting with the view, such as panning or zooming.
   * @return {boolean} The view is being interacted with.
   * @api
   */
  getInteracting() {
    return this.hints_[Re.INTERACTING] > 0;
  }
  /**
   * Cancel any ongoing animations.
   * @api
   */
  cancelAnimations() {
    this.setHint(Re.ANIMATING, -this.hints_[Re.ANIMATING]);
    let e;
    for (let t = 0, i = this.animations_.length; t < i; ++t) {
      const s = this.animations_[t];
      if (s[0].callback && ys(s[0].callback, !1), !e)
        for (let r = 0, o = s.length; r < o; ++r) {
          const a = s[r];
          if (!a.complete) {
            e = a.anchor;
            break;
          }
        }
    }
    this.animations_.length = 0, this.cancelAnchor_ = e, this.nextCenter_ = null, this.nextResolution_ = NaN, this.nextRotation_ = NaN;
  }
  /**
   * Update all animations.
   */
  updateAnimations_() {
    if (this.updateAnimationKey_ !== void 0 && (cancelAnimationFrame(this.updateAnimationKey_), this.updateAnimationKey_ = void 0), !this.getAnimating())
      return;
    const e = Date.now();
    let t = !1;
    for (let i = this.animations_.length - 1; i >= 0; --i) {
      const s = this.animations_[i];
      let r = !0;
      for (let o = 0, a = s.length; o < a; ++o) {
        const l = s[o];
        if (l.complete)
          continue;
        const h = e - l.start;
        let c = l.duration > 0 ? h / l.duration : 1;
        c >= 1 ? (l.complete = !0, c = 1) : r = !1;
        const u = l.easing(c);
        if (l.sourceCenter) {
          const d = l.sourceCenter[0], f = l.sourceCenter[1], g = l.targetCenter[0], m = l.targetCenter[1];
          this.nextCenter_ = l.targetCenter;
          const p = d + u * (g - d), _ = f + u * (m - f);
          this.targetCenter_ = [p, _];
        }
        if (l.sourceResolution && l.targetResolution) {
          const d = u === 1 ? l.targetResolution : l.sourceResolution + u * (l.targetResolution - l.sourceResolution);
          if (l.anchor) {
            const f = this.getViewportSize_(this.getRotation()), g = this.constraints_.resolution(
              d,
              0,
              f,
              !0
            );
            this.targetCenter_ = this.calculateCenterZoom(
              g,
              l.anchor
            );
          }
          this.nextResolution_ = l.targetResolution, this.targetResolution_ = d, this.applyTargetState_(!0);
        }
        if (l.sourceRotation !== void 0 && l.targetRotation !== void 0) {
          const d = u === 1 ? qn(l.targetRotation + Math.PI, 2 * Math.PI) - Math.PI : l.sourceRotation + u * (l.targetRotation - l.sourceRotation);
          if (l.anchor) {
            const f = this.constraints_.rotation(
              d,
              !0
            );
            this.targetCenter_ = this.calculateCenterRotate(
              f,
              l.anchor
            );
          }
          this.nextRotation_ = l.targetRotation, this.targetRotation_ = d;
        }
        if (this.applyTargetState_(!0), t = !0, !l.complete)
          break;
      }
      if (r) {
        this.animations_[i] = null, this.setHint(Re.ANIMATING, -1), this.nextCenter_ = null, this.nextResolution_ = NaN, this.nextRotation_ = NaN;
        const o = s[0].callback;
        o && ys(o, !0);
      }
    }
    this.animations_ = this.animations_.filter(Boolean), t && this.updateAnimationKey_ === void 0 && (this.updateAnimationKey_ = requestAnimationFrame(
      this.updateAnimations_.bind(this)
    ));
  }
  /**
   * @param {number} rotation Target rotation.
   * @param {import("./coordinate.js").Coordinate} anchor Rotation anchor.
   * @return {import("./coordinate.js").Coordinate|undefined} Center for rotation and anchor.
   */
  calculateCenterRotate(e, t) {
    let i;
    const s = this.getCenterInternal();
    return s !== void 0 && (i = [s[0] - t[0], s[1] - t[1]], Ko(i, e - this.getRotation()), T0(i, t)), i;
  }
  /**
   * @param {number} resolution Target resolution.
   * @param {import("./coordinate.js").Coordinate} anchor Zoom anchor.
   * @return {import("./coordinate.js").Coordinate|undefined} Center for resolution and anchor.
   */
  calculateCenterZoom(e, t) {
    let i;
    const s = this.getCenterInternal(), r = this.getResolution();
    if (s !== void 0 && r !== void 0) {
      const o = t[0] - e * (t[0] - s[0]) / r, a = t[1] - e * (t[1] - s[1]) / r;
      i = [o, a];
    }
    return i;
  }
  /**
   * Returns the current viewport size.
   * @private
   * @param {number} [rotation] Take into account the rotation of the viewport when giving the size
   * @return {import("./size.js").Size} Viewport size or `[100, 100]` when no viewport is found.
   */
  getViewportSize_(e) {
    const t = this.viewportSize_;
    if (e) {
      const i = t[0], s = t[1];
      return [
        Math.abs(i * Math.cos(e)) + Math.abs(s * Math.sin(e)),
        Math.abs(i * Math.sin(e)) + Math.abs(s * Math.cos(e))
      ];
    }
    return t;
  }
  /**
   * Stores the viewport size on the view. The viewport size is not read every time from the DOM
   * to avoid performance hit and layout reflow.
   * This should be done on map size change.
   * Note: the constraints are not resolved during an animation to avoid stopping it
   * @param {import("./size.js").Size} [size] Viewport size; if undefined, [100, 100] is assumed
   */
  setViewportSize(e) {
    this.viewportSize_ = Array.isArray(e) ? e.slice() : [100, 100], this.getAnimating() || this.resolveConstraints(0);
  }
  /**
   * Get the view center.
   * @return {import("./coordinate.js").Coordinate|undefined} The center of the view.
   * @observable
   * @api
   */
  getCenter() {
    const e = this.getCenterInternal();
    return e && fo(e, this.getProjection());
  }
  /**
   * Get the view center without transforming to user projection.
   * @return {import("./coordinate.js").Coordinate|undefined} The center of the view.
   */
  getCenterInternal() {
    return (
      /** @type {import("./coordinate.js").Coordinate|undefined} */
      this.get(st.CENTER)
    );
  }
  /**
   * @return {Constraints} Constraints.
   */
  getConstraints() {
    return this.constraints_;
  }
  /**
   * @return {boolean} Resolution constraint is set
   */
  getConstrainResolution() {
    return this.get("constrainResolution");
  }
  /**
   * @param {Array<number>} [hints] Destination array.
   * @return {Array<number>} Hint.
   */
  getHints(e) {
    return e !== void 0 ? (e[0] = this.hints_[0], e[1] = this.hints_[1], e) : this.hints_.slice();
  }
  /**
   * Calculate the extent for the current view state and the passed box size.
   * @param {import("./size.js").Size} [size] The pixel dimensions of the box
   * into which the calculated extent should fit. Defaults to the size of the
   * map the view is associated with.
   * If no map or multiple maps are connected to the view, provide the desired
   * box size (e.g. `map.getSize()`).
   * @return {import("./extent.js").Extent} Extent.
   * @api
   */
  calculateExtent(e) {
    const t = this.calculateExtentInternal(e);
    return Zo(t, this.getProjection());
  }
  /**
   * @param {import("./size.js").Size} [size] Box pixel size. If not provided,
   * the map's last known viewport size will be used.
   * @return {import("./extent.js").Extent} Extent.
   */
  calculateExtentInternal(e) {
    e = e || this.getViewportSizeMinusPadding_();
    const t = (
      /** @type {!import("./coordinate.js").Coordinate} */
      this.getCenterInternal()
    );
    te(t, "The view center is not defined");
    const i = (
      /** @type {!number} */
      this.getResolution()
    );
    te(i !== void 0, "The view resolution is not defined");
    const s = (
      /** @type {!number} */
      this.getRotation()
    );
    return te(s !== void 0, "The view rotation is not defined"), ho(t, i, s, e);
  }
  /**
   * Get the maximum resolution of the view.
   * @return {number} The maximum resolution of the view.
   * @api
   */
  getMaxResolution() {
    return this.maxResolution_;
  }
  /**
   * Get the minimum resolution of the view.
   * @return {number} The minimum resolution of the view.
   * @api
   */
  getMinResolution() {
    return this.minResolution_;
  }
  /**
   * Get the maximum zoom level for the view.
   * @return {number} The maximum zoom level.
   * @api
   */
  getMaxZoom() {
    return (
      /** @type {number} */
      this.getZoomForResolution(this.minResolution_)
    );
  }
  /**
   * Set a new maximum zoom level for the view.
   * @param {number} zoom The maximum zoom level.
   * @api
   */
  setMaxZoom(e) {
    this.applyOptions_(this.getUpdatedOptions_({ maxZoom: e }));
  }
  /**
   * Get the minimum zoom level for the view.
   * @return {number} The minimum zoom level.
   * @api
   */
  getMinZoom() {
    return (
      /** @type {number} */
      this.getZoomForResolution(this.maxResolution_)
    );
  }
  /**
   * Set a new minimum zoom level for the view.
   * @param {number} zoom The minimum zoom level.
   * @api
   */
  setMinZoom(e) {
    this.applyOptions_(this.getUpdatedOptions_({ minZoom: e }));
  }
  /**
   * Set whether the view should allow intermediary zoom levels.
   * @param {boolean} enabled Whether the resolution is constrained.
   * @api
   */
  setConstrainResolution(e) {
    this.applyOptions_(this.getUpdatedOptions_({ constrainResolution: e }));
  }
  /**
   * Get the view projection.
   * @return {import("./proj/Projection.js").default} The projection of the view.
   * @api
   */
  getProjection() {
    return this.projection_;
  }
  /**
   * Get the view resolution.
   * @return {number|undefined} The resolution of the view.
   * @observable
   * @api
   */
  getResolution() {
    return (
      /** @type {number|undefined} */
      this.get(st.RESOLUTION)
    );
  }
  /**
   * Get the resolutions for the view. This returns the array of resolutions
   * passed to the constructor of the View, or undefined if none were given.
   * @return {Array<number>|undefined} The resolutions of the view.
   * @api
   */
  getResolutions() {
    return this.resolutions_;
  }
  /**
   * Get the resolution for a provided extent (in map units) and size (in pixels).
   * @param {import("./extent.js").Extent} extent Extent.
   * @param {import("./size.js").Size} [size] Box pixel size.
   * @return {number} The resolution at which the provided extent will render at
   *     the given size.
   * @api
   */
  getResolutionForExtent(e, t) {
    return this.getResolutionForExtentInternal(
      _n(e, this.getProjection()),
      t
    );
  }
  /**
   * Get the resolution for a provided extent (in map units) and size (in pixels).
   * @param {import("./extent.js").Extent} extent Extent.
   * @param {import("./size.js").Size} [size] Box pixel size.
   * @return {number} The resolution at which the provided extent will render at
   *     the given size.
   */
  getResolutionForExtentInternal(e, t) {
    t = t || this.getViewportSizeMinusPadding_();
    const i = he(e) / t[0], s = We(e) / t[1];
    return Math.max(i, s);
  }
  /**
   * Return a function that returns a value between 0 and 1 for a
   * resolution. Exponential scaling is assumed.
   * @param {number} [power] Power.
   * @return {function(number): number} Resolution for value function.
   */
  getResolutionForValueFunction(e) {
    e = e || 2;
    const t = this.getConstrainedResolution(this.maxResolution_), i = this.minResolution_, s = Math.log(t / i) / Math.log(e);
    return (
      /**
       * @param {number} value Value.
       * @return {number} Resolution.
       */
      function(r) {
        return t / Math.pow(e, r * s);
      }
    );
  }
  /**
   * Get the view rotation.
   * @return {number} The rotation of the view in radians.
   * @observable
   * @api
   */
  getRotation() {
    return (
      /** @type {number} */
      this.get(st.ROTATION)
    );
  }
  /**
   * Return a function that returns a resolution for a value between
   * 0 and 1. Exponential scaling is assumed.
   * @param {number} [power] Power.
   * @return {function(number): number} Value for resolution function.
   */
  getValueForResolutionFunction(e) {
    const t = Math.log(e || 2), i = this.getConstrainedResolution(this.maxResolution_), s = this.minResolution_, r = Math.log(i / s) / t;
    return (
      /**
       * @param {number} resolution Resolution.
       * @return {number} Value.
       */
      function(o) {
        return Math.log(i / o) / t / r;
      }
    );
  }
  /**
   * Returns the size of the viewport minus padding.
   * @private
   * @param {number} [rotation] Take into account the rotation of the viewport when giving the size
   * @return {import("./size.js").Size} Viewport size reduced by the padding.
   */
  getViewportSizeMinusPadding_(e) {
    let t = this.getViewportSize_(e);
    const i = this.padding_;
    return i && (t = [
      t[0] - i[1] - i[3],
      t[1] - i[0] - i[2]
    ]), t;
  }
  /**
   * @return {State} View state.
   */
  getState() {
    const e = this.getProjection(), t = this.getResolution(), i = this.getRotation();
    let s = (
      /** @type {import("./coordinate.js").Coordinate} */
      this.getCenterInternal()
    );
    const r = this.padding_;
    if (r) {
      const o = this.getViewportSizeMinusPadding_();
      s = Pr(
        s,
        this.getViewportSize_(),
        [o[0] / 2 + r[3], o[1] / 2 + r[0]],
        t,
        i
      );
    }
    return {
      center: s.slice(0),
      projection: e !== void 0 ? e : null,
      resolution: t,
      nextCenter: this.nextCenter_,
      nextResolution: this.nextResolution_,
      nextRotation: this.nextRotation_,
      rotation: i,
      zoom: this.getZoom()
    };
  }
  /**
   * @return {ViewStateLayerStateExtent} Like `FrameState`, but just `viewState` and `extent`.
   */
  getViewStateAndExtent() {
    return {
      viewState: this.getState(),
      extent: this.calculateExtent()
    };
  }
  /**
   * Get the current zoom level. This method may return non-integer zoom levels
   * if the view does not constrain the resolution, or if an interaction or
   * animation is underway.
   * @return {number|undefined} Zoom.
   * @api
   */
  getZoom() {
    let e;
    const t = this.getResolution();
    return t !== void 0 && (e = this.getZoomForResolution(t)), e;
  }
  /**
   * Get the zoom level for a resolution.
   * @param {number} resolution The resolution.
   * @return {number|undefined} The zoom level for the provided resolution.
   * @api
   */
  getZoomForResolution(e) {
    let t = this.minZoom_ || 0, i, s;
    if (this.resolutions_) {
      const r = No(this.resolutions_, e, 1);
      t = r, i = this.resolutions_[r], r == this.resolutions_.length - 1 ? s = 2 : s = i / this.resolutions_[r + 1];
    } else
      i = this.maxResolution_, s = this.zoomFactor_;
    return t + Math.log(i / e) / Math.log(s);
  }
  /**
   * Get the resolution for a zoom level.
   * @param {number} zoom Zoom level.
   * @return {number} The view resolution for the provided zoom level.
   * @api
   */
  getResolutionForZoom(e) {
    if (this.resolutions_) {
      if (this.resolutions_.length <= 1)
        return 0;
      const t = ve(
        Math.floor(e),
        0,
        this.resolutions_.length - 2
      ), i = this.resolutions_[t] / this.resolutions_[t + 1];
      return this.resolutions_[t] / Math.pow(i, ve(e - t, 0, 1));
    }
    return this.maxResolution_ / Math.pow(this.zoomFactor_, e - this.minZoom_);
  }
  /**
   * Fit the given geometry or extent based on the given map size and border.
   * The size is pixel dimensions of the box to fit the extent into.
   * In most cases you will want to use the map size, that is `map.getSize()`.
   * Takes care of the map angle.
   * @param {import("./geom/SimpleGeometry.js").default|import("./extent.js").Extent} geometryOrExtent The geometry or
   *     extent to fit the view to.
   * @param {FitOptions} [options] Options.
   * @api
   */
  fit(e, t) {
    let i;
    if (te(
      Array.isArray(e) || typeof /** @type {?} */
      e.getSimplifiedGeometry == "function",
      "Invalid extent or geometry provided as `geometry`"
    ), Array.isArray(e)) {
      te(
        !sr(e),
        "Cannot fit empty extent provided as `geometry`"
      );
      const s = _n(e, this.getProjection());
      i = Sl(s);
    } else if (e.getType() === "Circle") {
      const s = _n(
        e.getExtent(),
        this.getProjection()
      );
      i = Sl(s), i.rotate(this.getRotation(), Sn(s));
    } else
      i = e;
    this.fitInternal(i, t);
  }
  /**
   * Calculate rotated extent
   * @param {import("./geom/SimpleGeometry.js").default} geometry The geometry.
   * @return {import("./extent").Extent} The rotated extent for the geometry.
   */
  rotatedExtentForGeometry(e) {
    const t = this.getRotation(), i = Math.cos(t), s = Math.sin(-t), r = e.getFlatCoordinates(), o = e.getStride();
    let a = 1 / 0, l = 1 / 0, h = -1 / 0, c = -1 / 0;
    for (let u = 0, d = r.length; u < d; u += o) {
      const f = r[u] * i - r[u + 1] * s, g = r[u] * s + r[u + 1] * i;
      a = Math.min(a, f), l = Math.min(l, g), h = Math.max(h, f), c = Math.max(c, g);
    }
    return [a, l, h, c];
  }
  /**
   * @param {import("./geom/SimpleGeometry.js").default} geometry The geometry.
   * @param {FitOptions} [options] Options.
   */
  fitInternal(e, t) {
    t = t || {};
    let i = t.size;
    i || (i = this.getViewportSizeMinusPadding_());
    const s = t.padding !== void 0 ? t.padding : [0, 0, 0, 0], r = t.nearest !== void 0 ? t.nearest : !1;
    let o;
    t.minResolution !== void 0 ? o = t.minResolution : t.maxZoom !== void 0 ? o = this.getResolutionForZoom(t.maxZoom) : o = 0;
    const a = this.rotatedExtentForGeometry(e);
    let l = this.getResolutionForExtentInternal(a, [
      i[0] - s[1] - s[3],
      i[1] - s[0] - s[2]
    ]);
    l = isNaN(l) ? o : Math.max(l, o), l = this.getConstrainedResolution(l, r ? 0 : 1);
    const h = this.getRotation(), c = Math.sin(h), u = Math.cos(h), d = Sn(a);
    d[0] += (s[1] - s[3]) / 2 * l, d[1] += (s[0] - s[2]) / 2 * l;
    const f = d[0] * u - d[1] * c, g = d[1] * u + d[0] * c, m = this.getConstrainedCenter([f, g], l), p = t.callback ? t.callback : si;
    t.duration !== void 0 ? this.animateInternal(
      {
        resolution: l,
        center: m,
        duration: t.duration,
        easing: t.easing
      },
      p
    ) : (this.targetResolution_ = l, this.targetCenter_ = m, this.applyTargetState_(!1, !0), ys(p, !0));
  }
  /**
   * Center on coordinate and view position.
   * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("./size.js").Size} size Box pixel size.
   * @param {import("./pixel.js").Pixel} position Position on the view to center on.
   * @api
   */
  centerOn(e, t, i) {
    this.centerOnInternal(
      Tt(e, this.getProjection()),
      t,
      i
    );
  }
  /**
   * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("./size.js").Size} size Box pixel size.
   * @param {import("./pixel.js").Pixel} position Position on the view to center on.
   */
  centerOnInternal(e, t, i) {
    this.setCenterInternal(
      Pr(
        e,
        t,
        i,
        this.getResolution(),
        this.getRotation()
      )
    );
  }
  /**
   * Calculates the shift between map and viewport center.
   * @param {import("./coordinate.js").Coordinate} center Center.
   * @param {number} resolution Resolution.
   * @param {number} rotation Rotation.
   * @param {import("./size.js").Size} size Size.
   * @return {Array<number>|undefined} Center shift.
   */
  calculateCenterShift(e, t, i, s) {
    let r;
    const o = this.padding_;
    if (o && e) {
      const a = this.getViewportSizeMinusPadding_(-i), l = Pr(
        e,
        s,
        [a[0] / 2 + o[3], a[1] / 2 + o[0]],
        t,
        i
      );
      r = [
        e[0] - l[0],
        e[1] - l[1]
      ];
    }
    return r;
  }
  /**
   * @return {boolean} Is defined.
   */
  isDef() {
    return !!this.getCenterInternal() && this.getResolution() !== void 0;
  }
  /**
   * Adds relative coordinates to the center of the view. Any extent constraint will apply.
   * @param {import("./coordinate.js").Coordinate} deltaCoordinates Relative value to add.
   * @api
   */
  adjustCenter(e) {
    const t = fo(this.targetCenter_, this.getProjection());
    this.setCenter([
      t[0] + e[0],
      t[1] + e[1]
    ]);
  }
  /**
   * Adds relative coordinates to the center of the view. Any extent constraint will apply.
   * @param {import("./coordinate.js").Coordinate} deltaCoordinates Relative value to add.
   */
  adjustCenterInternal(e) {
    const t = this.targetCenter_;
    this.setCenterInternal([
      t[0] + e[0],
      t[1] + e[1]
    ]);
  }
  /**
   * Multiply the view resolution by a ratio, optionally using an anchor. Any resolution
   * constraint will apply.
   * @param {number} ratio The ratio to apply on the view resolution.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   * @api
   */
  adjustResolution(e, t) {
    t = t && Tt(t, this.getProjection()), this.adjustResolutionInternal(e, t);
  }
  /**
   * Multiply the view resolution by a ratio, optionally using an anchor. Any resolution
   * constraint will apply.
   * @param {number} ratio The ratio to apply on the view resolution.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   */
  adjustResolutionInternal(e, t) {
    const i = this.getAnimating() || this.getInteracting(), s = this.getViewportSize_(this.getRotation()), r = this.constraints_.resolution(
      this.targetResolution_ * e,
      0,
      s,
      i
    );
    t && (this.targetCenter_ = this.calculateCenterZoom(r, t)), this.targetResolution_ *= e, this.applyTargetState_();
  }
  /**
   * Adds a value to the view zoom level, optionally using an anchor. Any resolution
   * constraint will apply.
   * @param {number} delta Relative value to add to the zoom level.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   * @api
   */
  adjustZoom(e, t) {
    this.adjustResolution(Math.pow(this.zoomFactor_, -e), t);
  }
  /**
   * Adds a value to the view rotation, optionally using an anchor. Any rotation
   * constraint will apply.
   * @param {number} delta Relative value to add to the zoom rotation, in radians.
   * @param {import("./coordinate.js").Coordinate} [anchor] The rotation center.
   * @api
   */
  adjustRotation(e, t) {
    t && (t = Tt(t, this.getProjection())), this.adjustRotationInternal(e, t);
  }
  /**
   * @param {number} delta Relative value to add to the zoom rotation, in radians.
   * @param {import("./coordinate.js").Coordinate} [anchor] The rotation center.
   */
  adjustRotationInternal(e, t) {
    const i = this.getAnimating() || this.getInteracting(), s = this.constraints_.rotation(
      this.targetRotation_ + e,
      i
    );
    t && (this.targetCenter_ = this.calculateCenterRotate(s, t)), this.targetRotation_ += e, this.applyTargetState_();
  }
  /**
   * Set the center of the current view. Any extent constraint will apply.
   * @param {import("./coordinate.js").Coordinate|undefined} center The center of the view.
   * @observable
   * @api
   */
  setCenter(e) {
    this.setCenterInternal(
      e && Tt(e, this.getProjection())
    );
  }
  /**
   * Set the center using the view projection (not the user projection).
   * @param {import("./coordinate.js").Coordinate|undefined} center The center of the view.
   */
  setCenterInternal(e) {
    this.targetCenter_ = e, this.applyTargetState_();
  }
  /**
   * @param {import("./ViewHint.js").default} hint Hint.
   * @param {number} delta Delta.
   * @return {number} New value.
   */
  setHint(e, t) {
    return this.hints_[e] += t, this.changed(), this.hints_[e];
  }
  /**
   * Set the resolution for this view. Any resolution constraint will apply.
   * @param {number|undefined} resolution The resolution of the view.
   * @observable
   * @api
   */
  setResolution(e) {
    this.targetResolution_ = e, this.applyTargetState_();
  }
  /**
   * Set the rotation for this view. Any rotation constraint will apply.
   * @param {number} rotation The rotation of the view in radians.
   * @observable
   * @api
   */
  setRotation(e) {
    this.targetRotation_ = e, this.applyTargetState_();
  }
  /**
   * Zoom to a specific zoom level. Any resolution constrain will apply.
   * @param {number} zoom Zoom level.
   * @api
   */
  setZoom(e) {
    this.setResolution(this.getResolutionForZoom(e));
  }
  /**
   * Recompute rotation/resolution/center based on target values.
   * Note: we have to compute rotation first, then resolution and center considering that
   * parameters can influence one another in case a view extent constraint is present.
   * @param {boolean} [doNotCancelAnims] Do not cancel animations.
   * @param {boolean} [forceMoving] Apply constraints as if the view is moving.
   * @private
   */
  applyTargetState_(e, t) {
    const i = this.getAnimating() || this.getInteracting() || t, s = this.constraints_.rotation(
      this.targetRotation_,
      i
    ), r = this.getViewportSize_(s), o = this.constraints_.resolution(
      this.targetResolution_,
      0,
      r,
      i
    ), a = this.constraints_.center(
      this.targetCenter_,
      o,
      r,
      i,
      this.calculateCenterShift(
        this.targetCenter_,
        o,
        s,
        r
      )
    );
    this.get(st.ROTATION) !== s && this.set(st.ROTATION, s), this.get(st.RESOLUTION) !== o && (this.set(st.RESOLUTION, o), this.set("zoom", this.getZoom(), !0)), (!a || !this.get(st.CENTER) || !Ps(this.get(st.CENTER), a)) && this.set(st.CENTER, a), this.getAnimating() && !e && this.cancelAnimations(), this.cancelAnchor_ = void 0;
  }
  /**
   * If any constraints need to be applied, an animation will be triggered.
   * This is typically done on interaction end.
   * Note: calling this with a duration of 0 will apply the constrained values straight away,
   * without animation.
   * @param {number} [duration] The animation duration in ms.
   * @param {number} [resolutionDirection] Which direction to zoom.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   */
  resolveConstraints(e, t, i) {
    e = e !== void 0 ? e : 200;
    const s = t || 0, r = this.constraints_.rotation(this.targetRotation_), o = this.getViewportSize_(r), a = this.constraints_.resolution(
      this.targetResolution_,
      s,
      o
    ), l = this.constraints_.center(
      this.targetCenter_,
      a,
      o,
      !1,
      this.calculateCenterShift(
        this.targetCenter_,
        a,
        r,
        o
      )
    );
    if (e === 0 && !this.cancelAnchor_) {
      this.targetResolution_ = a, this.targetRotation_ = r, this.targetCenter_ = l, this.applyTargetState_();
      return;
    }
    i = i || (e === 0 ? this.cancelAnchor_ : void 0), this.cancelAnchor_ = void 0, (this.getResolution() !== a || this.getRotation() !== r || !this.getCenterInternal() || !Ps(this.getCenterInternal(), l)) && (this.getAnimating() && this.cancelAnimations(), this.animateInternal({
      rotation: r,
      center: l,
      resolution: a,
      duration: e,
      easing: fi,
      anchor: i
    }));
  }
  /**
   * Notify the View that an interaction has started.
   * The view state will be resolved to a stable one if needed
   * (depending on its constraints).
   * @api
   */
  beginInteraction() {
    this.resolveConstraints(0), this.setHint(Re.INTERACTING, 1);
  }
  /**
   * Notify the View that an interaction has ended. The view state will be resolved
   * to a stable one if needed (depending on its constraints).
   * @param {number} [duration] Animation duration in ms.
   * @param {number} [resolutionDirection] Which direction to zoom.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   * @api
   */
  endInteraction(e, t, i) {
    i = i && Tt(i, this.getProjection()), this.endInteractionInternal(e, t, i);
  }
  /**
   * Notify the View that an interaction has ended. The view state will be resolved
   * to a stable one if needed (depending on its constraints).
   * @param {number} [duration] Animation duration in ms.
   * @param {number} [resolutionDirection] Which direction to zoom.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   */
  endInteractionInternal(e, t, i) {
    this.getInteracting() && (this.setHint(Re.INTERACTING, -1), this.resolveConstraints(e, t, i));
  }
  /**
   * Get a valid position for the view center according to the current constraints.
   * @param {import("./coordinate.js").Coordinate|undefined} targetCenter Target center position.
   * @param {number} [targetResolution] Target resolution. If not supplied, the current one will be used.
   * This is useful to guess a valid center position at a different zoom level.
   * @return {import("./coordinate.js").Coordinate|undefined} Valid center position.
   */
  getConstrainedCenter(e, t) {
    const i = this.getViewportSize_(this.getRotation());
    return this.constraints_.center(
      e,
      t || this.getResolution(),
      i
    );
  }
  /**
   * Get a valid zoom level according to the current view constraints.
   * @param {number|undefined} targetZoom Target zoom.
   * @param {number} [direction=0] Indicate which resolution should be used
   * by a renderer if the view resolution does not match any resolution of the tile source.
   * If 0, the nearest resolution will be used. If 1, the nearest lower resolution
   * will be used. If -1, the nearest higher resolution will be used.
   * @return {number|undefined} Valid zoom level.
   */
  getConstrainedZoom(e, t) {
    const i = this.getResolutionForZoom(e);
    return this.getZoomForResolution(
      this.getConstrainedResolution(i, t)
    );
  }
  /**
   * Get a valid resolution according to the current view constraints.
   * @param {number|undefined} targetResolution Target resolution.
   * @param {number} [direction=0] Indicate which resolution should be used
   * by a renderer if the view resolution does not match any resolution of the tile source.
   * If 0, the nearest resolution will be used. If 1, the nearest lower resolution
   * will be used. If -1, the nearest higher resolution will be used.
   * @return {number|undefined} Valid resolution.
   */
  getConstrainedResolution(e, t) {
    t = t || 0;
    const i = this.getViewportSize_(this.getRotation());
    return this.constraints_.resolution(e, t, i);
  }
}
function ys(n, e) {
  setTimeout(function() {
    n(e);
  }, 0);
}
function g_(n) {
  if (n.extent !== void 0) {
    const t = n.smoothExtentConstraint !== void 0 ? n.smoothExtentConstraint : !0;
    return yl(n.extent, n.constrainOnlyCenter, t);
  }
  const e = Uo(n.projection, "EPSG:3857");
  if (n.multiWorld !== !0 && e.isGlobal()) {
    const t = e.getExtent().slice();
    return t[0] = -1 / 0, t[2] = 1 / 0, yl(t, !1, !1);
  }
  return N0;
}
function m_(n) {
  let e, t, i, o = n.minZoom !== void 0 ? n.minZoom : Dr, a = n.maxZoom !== void 0 ? n.maxZoom : 28;
  const l = n.zoomFactor !== void 0 ? n.zoomFactor : 2, h = n.multiWorld !== void 0 ? n.multiWorld : !1, c = n.smoothResolutionConstraint !== void 0 ? n.smoothResolutionConstraint : !0, u = n.showFullExtent !== void 0 ? n.showFullExtent : !1, d = Uo(n.projection, "EPSG:3857"), f = d.getExtent();
  let g = n.constrainOnlyCenter, m = n.extent;
  if (!h && !m && d.isGlobal() && (g = !1, m = f), n.resolutions !== void 0) {
    const p = n.resolutions;
    t = p[o], i = p[a] !== void 0 ? p[a] : p[p.length - 1], n.constrainResolution ? e = G0(
      p,
      c,
      !g && m,
      u
    ) : e = vl(
      t,
      i,
      c,
      !g && m,
      u
    );
  } else {
    const _ = (f ? Math.max(he(f), We(f)) : (
      // use an extent that can fit the whole world if need be
      360 * zi.degrees / d.getMetersPerUnit()
    )) / Bo / Math.pow(2, Dr), y = _ / Math.pow(2, 28 - Dr);
    t = n.maxResolution, t !== void 0 ? o = 0 : t = _ / Math.pow(l, o), i = n.minResolution, i === void 0 && (n.maxZoom !== void 0 ? n.maxResolution !== void 0 ? i = t / Math.pow(l, a) : i = _ / Math.pow(l, a) : i = y), a = o + Math.floor(
      Math.log(t / i) / Math.log(l)
    ), i = t / Math.pow(l, a - o), n.constrainResolution ? e = B0(
      l,
      t,
      i,
      c,
      !g && m,
      u
    ) : e = vl(
      t,
      i,
      c,
      !g && m,
      u
    );
  }
  return {
    constraint: e,
    maxResolution: t,
    minResolution: i,
    minZoom: o,
    zoomFactor: l
  };
}
function p_(n) {
  if (n.enableRotation !== void 0 ? n.enableRotation : !0) {
    const t = n.constrainRotation;
    return t === void 0 || t === !0 ? W0() : t === !1 ? El : typeof t == "number" ? z0(t) : El;
  }
  return Qo;
}
function __(n) {
  return !(n.sourceCenter && n.targetCenter && !Ps(n.sourceCenter, n.targetCenter) || n.sourceResolution !== n.targetResolution || n.sourceRotation !== n.targetRotation);
}
function Pr(n, e, t, i, s) {
  const r = Math.cos(-s);
  let o = Math.sin(-s), a = n[0] * r - n[1] * o, l = n[1] * r + n[0] * o;
  a += (e[0] / 2 - t[0]) * i, l += (t[1] - e[1] / 2) * i, o = -o;
  const h = a * r - l * o, c = l * r + a * o;
  return [h, c];
}
const ct = f_;
class hr extends Wh {
  /**
   * @param {Options<SourceType>} options Layer options.
   */
  constructor(e) {
    const t = Object.assign({}, e);
    delete t.source, super(t), this.on, this.once, this.un, this.mapPrecomposeKey_ = null, this.mapRenderKey_ = null, this.sourceChangeKey_ = null, this.renderer_ = null, this.sourceReady_ = !1, this.rendered = !1, e.render && (this.render = e.render), e.map && this.setMap(e.map), this.addChangeListener(
      le.SOURCE,
      this.handleSourcePropertyChange_
    );
    const i = e.source ? (
      /** @type {SourceType} */
      e.source
    ) : null;
    this.setSource(i);
  }
  /**
   * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be modified in place).
   * @return {Array<import("./Layer.js").default>} Array of layers.
   */
  getLayersArray(e) {
    return e = e || [], e.push(this), e;
  }
  /**
   * @param {Array<import("./Layer.js").State>} [states] Optional list of layer states (to be modified in place).
   * @return {Array<import("./Layer.js").State>} List of layer states.
   */
  getLayerStatesArray(e) {
    return e = e || [], e.push(this.getLayerState()), e;
  }
  /**
   * Get the layer source.
   * @return {SourceType|null} The layer source (or `null` if not yet set).
   * @observable
   * @api
   */
  getSource() {
    return (
      /** @type {SourceType} */
      this.get(le.SOURCE) || null
    );
  }
  /**
   * @return {SourceType|null} The source being rendered.
   */
  getRenderSource() {
    return this.getSource();
  }
  /**
   * @return {import("../source/Source.js").State} Source state.
   */
  getSourceState() {
    const e = this.getSource();
    return e ? e.getState() : "undefined";
  }
  /**
   * @private
   */
  handleSourceChange_() {
    this.changed(), !(this.sourceReady_ || this.getSource().getState() !== "ready") && (this.sourceReady_ = !0, this.dispatchEvent("sourceready"));
  }
  /**
   * @private
   */
  handleSourcePropertyChange_() {
    this.sourceChangeKey_ && (ge(this.sourceChangeKey_), this.sourceChangeKey_ = null), this.sourceReady_ = !1;
    const e = this.getSource();
    e && (this.sourceChangeKey_ = se(
      e,
      Z.CHANGE,
      this.handleSourceChange_,
      this
    ), e.getState() === "ready" && (this.sourceReady_ = !0, setTimeout(() => {
      this.dispatchEvent("sourceready");
    }, 0))), this.changed();
  }
  /**
   * @param {import("../pixel").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../Feature").FeatureLike>>} Promise that resolves with
   * an array of features.
   */
  getFeatures(e) {
    return this.renderer_ ? this.renderer_.getFeatures(e) : Promise.resolve([]);
  }
  /**
   * @param {import("../pixel").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
   */
  getData(e) {
    return !this.renderer_ || !this.rendered ? null : this.renderer_.getData(e);
  }
  /**
   * The layer is visible on the map view, i.e. within its min/max resolution or zoom and
   * extent, not set to `visible: false`, and not inside a layer group that is set
   * to `visible: false`.
   * @param {View|import("../View.js").ViewStateLayerStateExtent} [view] View or {@link import("../Map.js").FrameState}.
   * Only required when the layer is not added to a map.
   * @return {boolean} The layer is visible in the map view.
   * @api
   */
  isVisible(e) {
    let t;
    const i = this.getMapInternal();
    !e && i && (e = i.getView()), e instanceof ct ? t = {
      viewState: e.getState(),
      extent: e.calculateExtent()
    } : t = e, !t.layerStatesArray && i && (t.layerStatesArray = i.getLayerGroup().getLayerStatesArray());
    let s;
    t.layerStatesArray ? s = t.layerStatesArray.find(
      (o) => o.layer === this
    ) : s = this.getLayerState();
    const r = this.getExtent();
    return sa(s, t.viewState) && (!r || Be(r, t.extent));
  }
  /**
   * Get the attributions of the source of this layer for the given view.
   * @param {View|import("../View.js").ViewStateLayerStateExtent} [view] View or {@link import("../Map.js").FrameState}.
   * Only required when the layer is not added to a map.
   * @return {Array<string>} Attributions for this layer at the given view.
   * @api
   */
  getAttributions(e) {
    if (!this.isVisible(e))
      return [];
    let t;
    const i = this.getSource();
    if (i && (t = i.getAttributions()), !t)
      return [];
    const s = e instanceof ct ? e.getViewStateAndExtent() : e;
    let r = t(s);
    return Array.isArray(r) || (r = [r]), r;
  }
  /**
   * In charge to manage the rendering of the layer. One layer type is
   * bounded with one layer renderer.
   * @param {?import("../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement} target Target which the renderer may (but need not) use
   * for rendering its content.
   * @return {HTMLElement|null} The rendered element.
   */
  render(e, t) {
    const i = this.getRenderer();
    return i.prepareFrame(e) ? (this.rendered = !0, i.renderFrame(e, t)) : null;
  }
  /**
   * Called when a layer is not visible during a map render.
   */
  unrender() {
    this.rendered = !1;
  }
  /** @return {string} Declutter */
  getDeclutter() {
  }
  /**
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @param {import("../layer/Layer.js").State} layerState Layer state.
   */
  renderDeclutter(e, t) {
  }
  /**
   * When the renderer follows a layout -> render approach, do the final rendering here.
   * @param {import('../Map.js').FrameState} frameState Frame state
   */
  renderDeferred(e) {
    const t = this.getRenderer();
    t && t.renderDeferred(e);
  }
  /**
   * For use inside the library only.
   * @param {import("../Map.js").default|null} map Map.
   */
  setMapInternal(e) {
    e || this.unrender(), this.set(le.MAP, e);
  }
  /**
   * For use inside the library only.
   * @return {import("../Map.js").default|null} Map.
   */
  getMapInternal() {
    return this.get(le.MAP);
  }
  /**
   * Sets the layer to be rendered on top of other layers on a map. The map will
   * not manage this layer in its layers collection. This
   * is useful for temporary layers. To remove an unmanaged layer from the map,
   * use `#setMap(null)`.
   *
   * To add the layer to a map and have it managed by the map, use
   * {@link module:ol/Map~Map#addLayer} instead.
   * @param {import("../Map.js").default|null} map Map.
   * @api
   */
  setMap(e) {
    this.mapPrecomposeKey_ && (ge(this.mapPrecomposeKey_), this.mapPrecomposeKey_ = null), e || this.changed(), this.mapRenderKey_ && (ge(this.mapRenderKey_), this.mapRenderKey_ = null), e && (this.mapPrecomposeKey_ = se(
      e,
      Je.PRECOMPOSE,
      function(t) {
        const s = /** @type {import("../render/Event.js").default} */ t.frameState.layerStatesArray, r = this.getLayerState(!1);
        te(
          !s.some(function(o) {
            return o.layer === r.layer;
          }),
          "A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both."
        ), s.push(r);
      },
      this
    ), this.mapRenderKey_ = se(this, Z.CHANGE, e.render, e), this.changed());
  }
  /**
   * Set the layer source.
   * @param {SourceType|null} source The layer source.
   * @observable
   * @api
   */
  setSource(e) {
    this.set(le.SOURCE, e);
  }
  /**
   * Get the renderer for this layer.
   * @return {RendererType|null} The layer renderer.
   */
  getRenderer() {
    return this.renderer_ || (this.renderer_ = this.createRenderer()), this.renderer_;
  }
  /**
   * @return {boolean} The layer has a renderer.
   */
  hasRenderer() {
    return !!this.renderer_;
  }
  /**
   * Create a renderer for this layer.
   * @return {RendererType} A layer renderer.
   * @protected
   */
  createRenderer() {
    return null;
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    this.renderer_ && (this.renderer_.dispose(), delete this.renderer_), this.setSource(null), super.disposeInternal();
  }
}
function sa(n, e) {
  if (!n.visible)
    return !1;
  const t = e.resolution;
  if (t < n.minResolution || t >= n.maxResolution)
    return !1;
  const i = e.zoom;
  return i > n.minZoom && i <= n.maxZoom;
}
const vs = {
  PRELOAD: "preload",
  USE_INTERIM_TILES_ON_ERROR: "useInterimTilesOnError"
};
class y_ extends hr {
  /**
   * @param {Options<TileSourceType>} [options] Tile layer options.
   */
  constructor(e) {
    e = e || {};
    const t = Object.assign({}, e);
    delete t.preload, delete t.useInterimTilesOnError, super(t), this.on, this.once, this.un, this.setPreload(e.preload !== void 0 ? e.preload : 0), this.setUseInterimTilesOnError(
      e.useInterimTilesOnError !== void 0 ? e.useInterimTilesOnError : !0
    );
  }
  /**
   * Return the level as number to which we will preload tiles up to.
   * @return {number} The level to preload tiles up to.
   * @observable
   * @api
   */
  getPreload() {
    return (
      /** @type {number} */
      this.get(vs.PRELOAD)
    );
  }
  /**
   * Set the level as number to which we will preload tiles up to.
   * @param {number} preload The level to preload tiles up to.
   * @observable
   * @api
   */
  setPreload(e) {
    this.set(vs.PRELOAD, e);
  }
  /**
   * Whether we use interim tiles on error.
   * @return {boolean} Use interim tiles on error.
   * @observable
   * @api
   */
  getUseInterimTilesOnError() {
    return (
      /** @type {boolean} */
      this.get(vs.USE_INTERIM_TILES_ON_ERROR)
    );
  }
  /**
   * Set whether we use interim tiles on error.
   * @param {boolean} useInterimTilesOnError Use interim tiles on error.
   * @observable
   * @api
   */
  setUseInterimTilesOnError(e) {
    this.set(vs.USE_INTERIM_TILES_ON_ERROR, e);
  }
  /**
   * Get data for a pixel location.  The return type depends on the source data.  For image tiles,
   * a four element RGBA array will be returned.  For data tiles, the array length will match the
   * number of bands in the dataset.  For requests outside the layer extent, `null` will be returned.
   * Data for a image tiles can only be retrieved if the source's `crossOrigin` property is set.
   *
   * ```js
   * // display layer data on every pointer move
   * map.on('pointermove', (event) => {
   *   console.log(layer.getData(event.pixel));
   * });
   * ```
   * @param {import("../pixel").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
   * @api
   */
  getData(e) {
    return super.getData(e);
  }
}
const Q = {
  IDLE: 0,
  LOADING: 1,
  LOADED: 2,
  ERROR: 3,
  EMPTY: 4
};
class v_ extends ts {
  /**
   * @param {LayerType} layer Layer.
   */
  constructor(e) {
    super(), this.ready = !0, this.boundHandleImageChange_ = this.handleImageChange_.bind(this), this.layer_ = e, this.declutterExecutorGroup = null;
  }
  /**
   * Asynchronous layer level hit detection.
   * @param {import("../pixel.js").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../Feature").FeatureLike>>} Promise that resolves with
   * an array of features.
   */
  getFeatures(e) {
    return ie();
  }
  /**
   * @param {import("../pixel.js").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
   */
  getData(e) {
    return null;
  }
  /**
   * Determine whether render should be called.
   * @abstract
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   */
  prepareFrame(e) {
    return ie();
  }
  /**
   * Render the layer.
   * @abstract
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement|null} target Target that may be used to render content to.
   * @return {HTMLElement|null} The rendered element.
   */
  renderFrame(e, t) {
    return ie();
  }
  /**
   * @param {Object<number, Object<string, import("../Tile.js").default>>} tiles Lookup of loaded tiles by zoom level.
   * @param {number} zoom Zoom level.
   * @param {import("../Tile.js").default} tile Tile.
   * @return {boolean|void} If `false`, the tile will not be considered loaded.
   */
  loadedTileCallback(e, t, i) {
    e[t] || (e[t] = {}), e[t][i.tileCoord.toString()] = i;
  }
  /**
   * Create a function that adds loaded tiles to the tile lookup.
   * @param {import("../source/Tile.js").default} source Tile source.
   * @param {import("../proj/Projection.js").default} projection Projection of the tiles.
   * @param {Object<number, Object<string, import("../Tile.js").default>>} tiles Lookup of loaded tiles by zoom level.
   * @return {function(number, import("../TileRange.js").default):boolean} A function that can be
   *     called with a zoom level and a tile range to add loaded tiles to the lookup.
   * @protected
   */
  createLoadedTileFinder(e, t, i) {
    return (
      /**
       * @param {number} zoom Zoom level.
       * @param {import("../TileRange.js").default} tileRange Tile range.
       * @return {boolean} The tile range is fully loaded.
       */
      (s, r) => {
        const o = this.loadedTileCallback.bind(this, i, s);
        return e.forEachLoadedTile(t, s, r, o);
      }
    );
  }
  /**
   * @abstract
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {import("./vector.js").FeatureCallback<T>} callback Feature callback.
   * @param {Array<import("./Map.js").HitMatch<T>>} matches The hit detected matches with tolerance.
   * @return {T|undefined} Callback result.
   * @template T
   */
  forEachFeatureAtCoordinate(e, t, i, s, r) {
  }
  /**
   * @return {LayerType} Layer.
   */
  getLayer() {
    return this.layer_;
  }
  /**
   * Perform action necessary to get the layer rendered after new fonts have loaded
   * @abstract
   */
  handleFontsChanged() {
  }
  /**
   * Handle changes in image state.
   * @param {import("../events/Event.js").default} event Image change event.
   * @private
   */
  handleImageChange_(e) {
    const t = (
      /** @type {import("../Image.js").default} */
      e.target
    );
    (t.getState() === Q.LOADED || t.getState() === Q.ERROR) && this.renderIfReadyAndVisible();
  }
  /**
   * Load the image if not already loaded, and register the image change
   * listener if needed.
   * @param {import("../Image.js").default} image Image.
   * @return {boolean} `true` if the image is already loaded, `false` otherwise.
   * @protected
   */
  loadImage(e) {
    let t = e.getState();
    return t != Q.LOADED && t != Q.ERROR && e.addEventListener(Z.CHANGE, this.boundHandleImageChange_), t == Q.IDLE && (e.load(), t = e.getState()), t == Q.LOADED;
  }
  /**
   * @protected
   */
  renderIfReadyAndVisible() {
    const e = this.getLayer();
    e && e.getVisible() && e.getSourceState() === "ready" && e.changed();
  }
  /**
   * @param {import("../Map.js").FrameState} frameState Frame state.
   */
  renderDeferred(e) {
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    delete this.layer_, super.disposeInternal();
  }
}
class oc extends Ft {
  /**
   * @param {import("./EventType.js").default} type Type.
   * @param {import("../transform.js").Transform} [inversePixelTransform] Transform for
   *     CSS pixels to rendered pixels.
   * @param {import("../Map.js").FrameState} [frameState] Frame state.
   * @param {?(CanvasRenderingContext2D|WebGLRenderingContext)} [context] Context.
   */
  constructor(e, t, i, s) {
    super(e), this.inversePixelTransform = t, this.frameState = i, this.context = s;
  }
}
const ln = typeof navigator < "u" && typeof navigator.userAgent < "u" ? navigator.userAgent.toLowerCase() : "", E_ = ln.includes("firefox"), x_ = ln.includes("safari") && !ln.includes("chrom");
x_ && (ln.includes("version/15.4") || /cpu (os|iphone os) 15_4 like mac os x/.test(ln));
const w_ = ln.includes("webkit") && !ln.includes("edge"), ac = ln.includes("macintosh"), lc = typeof devicePixelRatio < "u" ? devicePixelRatio : 1, hc = typeof WorkerGlobalScope < "u" && typeof OffscreenCanvas < "u" && self instanceof WorkerGlobalScope, cc = typeof Image < "u" && Image.prototype.decode, uc = function() {
  let n = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get: function() {
        n = !0;
      }
    });
    window.addEventListener("_", null, e), window.removeEventListener("_", null, e);
  } catch {
  }
  return n;
}();
function Ie(n, e, t, i) {
  let s;
  return t && t.length ? s = /** @type {HTMLCanvasElement} */
  t.shift() : hc ? s = new OffscreenCanvas(n || 300, e || 300) : s = document.createElement("canvas"), n && (s.width = n), e && (s.height = e), /** @type {CanvasRenderingContext2D} */
  s.getContext("2d", i);
}
let Or;
function go() {
  return Or || (Or = Ie(1, 1)), Or;
}
function cr(n) {
  const e = n.canvas;
  e.width = 1, e.height = 1, n.clearRect(0, 0, 1, 1);
}
function Rl(n, e) {
  const t = e.parentNode;
  t && t.replaceChild(n, e);
}
function mo(n) {
  return n && n.parentNode ? n.parentNode.removeChild(n) : null;
}
function C_(n) {
  for (; n.lastChild; )
    n.removeChild(n.lastChild);
}
function A_(n, e) {
  const t = n.childNodes;
  for (let i = 0; ; ++i) {
    const s = t[i], r = e[i];
    if (!s && !r)
      break;
    if (s !== r) {
      if (!s) {
        n.appendChild(r);
        continue;
      }
      if (!r) {
        n.removeChild(s), --i;
        continue;
      }
      n.insertBefore(r, s);
    }
  }
}
class dc {
  constructor() {
    /**
     * @private
     * @param {...*} args Args.
     * @return {ZIndexContext} This.
     */
    Aa(this, "pushMethodArgs_", (...e) => (this.instructions_[this.zIndex + this.offset_].push(e), this));
    this.instructions_ = [], this.zIndex = 0, this.offset_ = 0, this.context_ = /** @type {ZIndexContextProxy} */
    new Proxy(CanvasRenderingContext2D.prototype, {
      get: (e, t) => {
        if (typeof /** @type {*} */
        go()[t] == "function")
          return this.instructions_[this.zIndex + this.offset_] || (this.instructions_[this.zIndex + this.offset_] = []), this.instructions_[this.zIndex + this.offset_].push(t), this.pushMethodArgs_;
      },
      set: (e, t, i) => (this.instructions_[this.zIndex + this.offset_] || (this.instructions_[this.zIndex + this.offset_] = []), this.instructions_[this.zIndex + this.offset_].push(t, i), !0)
    });
  }
  /**
   * Get a proxy for CanvasRenderingContext2D which does not support getting state
   * (e.g. `context.globalAlpha`, which will return `undefined`). To set state, if it relies on a
   * previous state (e.g. `context.globalAlpha = context.globalAlpha / 2`), set a function,
   * e.g. `context.globalAlpha = (context) => context.globalAlpha / 2`.
   * @return {ZIndexContextProxy} Context.
   */
  getContext() {
    return this.context_;
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   */
  draw(e) {
    this.instructions_.forEach((t) => {
      for (let i = 0, s = t.length; i < s; i += 2) {
        const r = t[i], o = t[i + 1];
        if (typeof /** @type {*} */
        e[r] == "function")
          e[r](...o);
        else {
          if (typeof o == "function") {
            e[r] = o(e);
            continue;
          }
          e[r] = o;
        }
      }
    });
  }
  clear() {
    this.instructions_.length = 0, this.zIndex = 0, this.offset_ = 0;
  }
  /**
   * Offsets the zIndex by the highest current zIndex. Useful for rendering multiple worlds or tiles, to
   * avoid conflicting context.clip() or context.save()/restore() calls.
   */
  offset() {
    this.offset_ = this.instructions_.length, this.zIndex = 0;
  }
}
const Yi = {
  name: "rgb",
  min: [0, 0, 0],
  max: [255, 255, 255],
  channel: ["red", "green", "blue"],
  alias: ["RGB"]
};
var Ce = {
  name: "xyz",
  min: [0, 0, 0],
  channel: ["X", "Y", "Z"],
  alias: ["XYZ", "ciexyz", "cie1931"]
};
Ce.whitepoint = {
  //1931 2°
  2: {
    //incadescent
    A: [109.85, 100, 35.585],
    // B:[],
    C: [98.074, 100, 118.232],
    D50: [96.422, 100, 82.521],
    D55: [95.682, 100, 92.149],
    //daylight
    D65: [95.045592705167, 100, 108.9057750759878],
    D75: [94.972, 100, 122.638],
    //flourescent
    // F1: [],
    F2: [99.187, 100, 67.395],
    // F3: [],
    // F4: [],
    // F5: [],
    // F6:[],
    F7: [95.044, 100, 108.755],
    // F8: [],
    // F9: [],
    // F10: [],
    F11: [100.966, 100, 64.37],
    // F12: [],
    E: [100, 100, 100]
  },
  //1964  10°
  10: {
    //incadescent
    A: [111.144, 100, 35.2],
    C: [97.285, 100, 116.145],
    D50: [96.72, 100, 81.427],
    D55: [95.799, 100, 90.926],
    //daylight
    D65: [94.811, 100, 107.304],
    D75: [94.416, 100, 120.641],
    //flourescent
    F2: [103.28, 100, 69.026],
    F7: [95.792, 100, 107.687],
    F11: [103.866, 100, 65.627],
    E: [100, 100, 100]
  }
};
Ce.max = Ce.whitepoint[2].D65;
Ce.rgb = function(n, e) {
  e = e || Ce.whitepoint[2].E;
  var t = n[0] / e[0], i = n[1] / e[1], s = n[2] / e[2], r, o, a;
  return r = t * 3.240969941904521 + i * -1.537383177570093 + s * -0.498610760293, o = t * -0.96924363628087 + i * 1.87596750150772 + s * 0.041555057407175, a = t * 0.055630079696993 + i * -0.20397695888897 + s * 1.056971514242878, r = r > 31308e-7 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : r = r * 12.92, o = o > 31308e-7 ? 1.055 * Math.pow(o, 1 / 2.4) - 0.055 : o = o * 12.92, a = a > 31308e-7 ? 1.055 * Math.pow(a, 1 / 2.4) - 0.055 : a = a * 12.92, r = Math.min(Math.max(0, r), 1), o = Math.min(Math.max(0, o), 1), a = Math.min(Math.max(0, a), 1), [r * 255, o * 255, a * 255];
};
Yi.xyz = function(n, e) {
  var t = n[0] / 255, i = n[1] / 255, s = n[2] / 255;
  t = t > 0.04045 ? Math.pow((t + 0.055) / 1.055, 2.4) : t / 12.92, i = i > 0.04045 ? Math.pow((i + 0.055) / 1.055, 2.4) : i / 12.92, s = s > 0.04045 ? Math.pow((s + 0.055) / 1.055, 2.4) : s / 12.92;
  var r = t * 0.41239079926595 + i * 0.35758433938387 + s * 0.18048078840183, o = t * 0.21263900587151 + i * 0.71516867876775 + s * 0.072192315360733, a = t * 0.019330818715591 + i * 0.11919477979462 + s * 0.95053215224966;
  return e = e || Ce.whitepoint[2].E, [r * e[0], o * e[1], a * e[2]];
};
const ra = {
  name: "luv",
  //NOTE: luv has no rigidly defined limits
  //easyrgb fails to get proper coords
  //boronine states no rigid limits
  //colorMine refers this ones:
  min: [0, -134, -140],
  max: [100, 224, 122],
  channel: ["lightness", "u", "v"],
  alias: ["LUV", "cieluv", "cie1976"],
  xyz: function(n, e, t) {
    var i, s, r, o, a, l, h, c, u, d, f, g, m;
    if (r = n[0], o = n[1], a = n[2], r === 0)
      return [0, 0, 0];
    var p = 0.0011070564598794539;
    return e = e || "D65", t = t || 2, u = Ce.whitepoint[t][e][0], d = Ce.whitepoint[t][e][1], f = Ce.whitepoint[t][e][2], g = 4 * u / (u + 15 * d + 3 * f), m = 9 * d / (u + 15 * d + 3 * f), i = o / (13 * r) + g || 0, s = a / (13 * r) + m || 0, h = r > 8 ? d * Math.pow((r + 16) / 116, 3) : d * r * p, l = h * 9 * i / (4 * s) || 0, c = h * (12 - 3 * i - 20 * s) / (4 * s) || 0, [l, h, c];
  }
};
Ce.luv = function(n, e, t) {
  var i, s, r, o, a, l, h, c, u, d, f, g, m, p = 0.008856451679035631, _ = 903.2962962962961;
  e = e || "D65", t = t || 2, u = Ce.whitepoint[t][e][0], d = Ce.whitepoint[t][e][1], f = Ce.whitepoint[t][e][2], g = 4 * u / (u + 15 * d + 3 * f), m = 9 * d / (u + 15 * d + 3 * f), l = n[0], h = n[1], c = n[2], i = 4 * l / (l + 15 * h + 3 * c) || 0, s = 9 * h / (l + 15 * h + 3 * c) || 0;
  var y = h / d;
  return r = y <= p ? _ * y : 116 * Math.pow(y, 1 / 3) - 16, o = 13 * r * (i - g), a = 13 * r * (s - m), [r, o, a];
};
var fc = {
  name: "lchuv",
  channel: ["lightness", "chroma", "hue"],
  alias: ["LCHuv", "cielchuv"],
  min: [0, 0, 0],
  max: [100, 100, 360],
  luv: function(n) {
    var e = n[0], t = n[1], i = n[2], s, r, o;
    return o = i / 360 * 2 * Math.PI, s = t * Math.cos(o), r = t * Math.sin(o), [e, s, r];
  },
  xyz: function(n) {
    return ra.xyz(fc.luv(n));
  }
};
ra.lchuv = function(n) {
  var e = n[0], t = n[1], i = n[2], s = Math.sqrt(t * t + i * i), r = Math.atan2(i, t), o = r * 360 / 2 / Math.PI;
  return o < 0 && (o += 360), [e, s, o];
};
Ce.lchuv = function(n) {
  return ra.lchuv(Ce.luv(n));
};
var I_ = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
};
const bl = /* @__PURE__ */ Cp(I_);
var Ll = {
  red: 0,
  orange: 60,
  yellow: 120,
  green: 180,
  blue: 240,
  purple: 300
};
function T_(n) {
  var c, u;
  var e, t = [], i = 1, s;
  if (typeof n == "number")
    return { space: "rgb", values: [n >>> 16, (n & 65280) >>> 8, n & 255], alpha: 1 };
  if (typeof n == "number")
    return { space: "rgb", values: [n >>> 16, (n & 65280) >>> 8, n & 255], alpha: 1 };
  if (n = String(n).toLowerCase(), bl[n])
    t = bl[n].slice(), s = "rgb";
  else if (n === "transparent")
    i = 0, s = "rgb", t = [0, 0, 0];
  else if (n[0] === "#") {
    var r = n.slice(1), o = r.length, a = o <= 4;
    i = 1, a ? (t = [
      parseInt(r[0] + r[0], 16),
      parseInt(r[1] + r[1], 16),
      parseInt(r[2] + r[2], 16)
    ], o === 4 && (i = parseInt(r[3] + r[3], 16) / 255)) : (t = [
      parseInt(r[0] + r[1], 16),
      parseInt(r[2] + r[3], 16),
      parseInt(r[4] + r[5], 16)
    ], o === 8 && (i = parseInt(r[6] + r[7], 16) / 255)), t[0] || (t[0] = 0), t[1] || (t[1] = 0), t[2] || (t[2] = 0), s = "rgb";
  } else if (e = /^((?:rgba?|hs[lvb]a?|hwba?|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms|oklch|oklab|color))\s*\(([^\)]*)\)/.exec(n)) {
    var l = e[1];
    s = l.replace(/a$/, "");
    var h = s === "cmyk" ? 4 : s === "gray" ? 1 : 3;
    t = e[2].trim().split(/\s*[,\/]\s*|\s+/), s === "color" && (s = t.shift()), t = t.map(function(d, f) {
      if (d[d.length - 1] === "%")
        return d = parseFloat(d) / 100, f === 3 ? d : s === "rgb" ? d * 255 : s[0] === "h" || s[0] === "l" && !f ? d * 100 : s === "lab" ? d * 125 : s === "lch" ? f < 2 ? d * 150 : d * 360 : s[0] === "o" && !f ? d : s === "oklab" ? d * 0.4 : s === "oklch" ? f < 2 ? d * 0.4 : d * 360 : d;
      if (s[f] === "h" || f === 2 && s[s.length - 1] === "h") {
        if (Ll[d] !== void 0)
          return Ll[d];
        if (d.endsWith("deg"))
          return parseFloat(d);
        if (d.endsWith("turn"))
          return parseFloat(d) * 360;
        if (d.endsWith("grad"))
          return parseFloat(d) * 360 / 400;
        if (d.endsWith("rad"))
          return parseFloat(d) * 180 / Math.PI;
      }
      return d === "none" ? 0 : parseFloat(d);
    }), i = t.length > h ? t.pop() : 1;
  } else
    /[0-9](?:\s|\/|,)/.test(n) && (t = n.match(/([0-9]+)/g).map(function(d) {
      return parseFloat(d);
    }), s = ((u = (c = n.match(/([a-z])/ig)) == null ? void 0 : c.join("")) == null ? void 0 : u.toLowerCase()) || "rgb");
  return {
    space: s,
    values: t,
    alpha: i
  };
}
const kr = {
  name: "hsl",
  min: [0, 0, 0],
  max: [360, 100, 100],
  channel: ["hue", "saturation", "lightness"],
  alias: ["HSL"],
  rgb: function(n) {
    var e = n[0] / 360, t = n[1] / 100, i = n[2] / 100, s, r, o, a, l, h = 0;
    if (t === 0)
      return l = i * 255, [l, l, l];
    for (r = i < 0.5 ? i * (1 + t) : i + t - i * t, s = 2 * i - r, a = [0, 0, 0]; h < 3; )
      o = e + 1 / 3 * -(h - 1), o < 0 ? o++ : o > 1 && o--, l = 6 * o < 1 ? s + (r - s) * 6 * o : 2 * o < 1 ? r : 3 * o < 2 ? s + (r - s) * (2 / 3 - o) * 6 : s, a[h++] = l * 255;
    return a;
  }
};
Yi.hsl = function(n) {
  var e = n[0] / 255, t = n[1] / 255, i = n[2] / 255, s = Math.min(e, t, i), r = Math.max(e, t, i), o = r - s, a, l, h;
  return r === s ? a = 0 : e === r ? a = (t - i) / o : t === r ? a = 2 + (i - e) / o : i === r && (a = 4 + (e - t) / o), a = Math.min(a * 60, 360), a < 0 && (a += 360), h = (s + r) / 2, r === s ? l = 0 : h <= 0.5 ? l = o / (r + s) : l = o / (2 - r - s), [a, l * 100, h * 100];
};
function S_(n) {
  Array.isArray(n) && n.raw && (n = String.raw(...arguments)), n instanceof Number && (n = +n);
  var e, t = T_(n);
  if (!t.space)
    return [];
  const i = t.space[0] === "h" ? kr.min : Yi.min, s = t.space[0] === "h" ? kr.max : Yi.max;
  return e = Array(3), e[0] = Math.min(Math.max(t.values[0], i[0]), s[0]), e[1] = Math.min(Math.max(t.values[1], i[1]), s[1]), e[2] = Math.min(Math.max(t.values[2], i[2]), s[2]), t.space[0] === "h" && (e = kr.rgb(e)), e.push(Math.min(Math.max(t.alpha, 0), 1)), e;
}
function R_(n) {
  return typeof n == "string" ? n : mc(n);
}
const b_ = 1024, Ci = {};
let Fr = 0;
function L_(n) {
  if (n.length === 4)
    return n;
  const e = n.slice();
  return e[3] = 1, e;
}
function Ml(n) {
  const e = Ce.lchuv(Yi.xyz(n));
  return e[3] = n[3], e;
}
function M_(n) {
  const e = Ce.rgb(fc.xyz(n));
  return e[3] = n[3], e;
}
function oa(n) {
  if (Ci.hasOwnProperty(n))
    return Ci[n];
  if (Fr >= b_) {
    let t = 0;
    for (const i in Ci)
      t++ & 3 || (delete Ci[i], --Fr);
  }
  const e = S_(n);
  if (e.length !== 4)
    throw new Error('Failed to parse "' + n + '" as color');
  for (const t of e)
    if (isNaN(t))
      throw new Error('Failed to parse "' + n + '" as color');
  return gc(e), Ci[n] = e, ++Fr, e;
}
function Ui(n) {
  return Array.isArray(n) ? n : oa(n);
}
function gc(n) {
  return n[0] = ve(n[0] + 0.5 | 0, 0, 255), n[1] = ve(n[1] + 0.5 | 0, 0, 255), n[2] = ve(n[2] + 0.5 | 0, 0, 255), n[3] = ve(n[3], 0, 1), n;
}
function mc(n) {
  let e = n[0];
  e != (e | 0) && (e = e + 0.5 | 0);
  let t = n[1];
  t != (t | 0) && (t = t + 0.5 | 0);
  let i = n[2];
  i != (i | 0) && (i = i + 0.5 | 0);
  const s = n[3] === void 0 ? 1 : Math.round(n[3] * 1e3) / 1e3;
  return "rgba(" + e + "," + t + "," + i + "," + s + ")";
}
function D_(n) {
  try {
    return oa(n), !0;
  } catch {
    return !1;
  }
}
const Dl = [];
let Xn = null;
function P_() {
  Xn = Ie(1, 1, void 0, {
    willReadFrequently: !0
  });
}
class pc extends v_ {
  /**
   * @param {LayerType} layer Layer.
   */
  constructor(e) {
    super(e), this.container = null, this.renderedResolution, this.tempTransform = at(), this.pixelTransform = at(), this.inversePixelTransform = at(), this.context = null, this.deferredContext_ = null, this.containerReused = !1, this.pixelContext_ = null, this.frameState = null;
  }
  /**
   * @param {import('../../DataTile.js').ImageLike} image Image.
   * @param {number} col The column index.
   * @param {number} row The row index.
   * @return {Uint8ClampedArray|null} The image data.
   */
  getImageData(e, t, i) {
    Xn || P_(), Xn.clearRect(0, 0, 1, 1);
    let s;
    try {
      Xn.drawImage(e, t, i, 1, 1, 0, 0, 1, 1), s = Xn.getImageData(0, 0, 1, 1).data;
    } catch {
      return Xn = null, null;
    }
    return s;
  }
  /**
   * @param {import('../../Map.js').FrameState} frameState Frame state.
   * @return {string} Background color.
   */
  getBackground(e) {
    let i = this.getLayer().getBackground();
    return typeof i == "function" && (i = i(e.viewState.resolution)), i || void 0;
  }
  /**
   * Get a rendering container from an existing target, if compatible.
   * @param {HTMLElement} target Potential render target.
   * @param {string} transform CSS Transform.
   * @param {string} [backgroundColor] Background color.
   */
  useContainer(e, t, i) {
    const s = this.getLayer().getClassName();
    let r, o;
    if (e && e.className === s && (!i || e && e.style.backgroundColor && hn(
      Ui(e.style.backgroundColor),
      Ui(i)
    ))) {
      const a = e.firstElementChild;
      a instanceof HTMLCanvasElement && (o = a.getContext("2d"));
    }
    if (o && o.canvas.style.transform === t ? (this.container = e, this.context = o, this.containerReused = !0) : this.containerReused ? (this.container = null, this.context = null, this.containerReused = !1) : this.container && (this.container.style.backgroundColor = null), !this.container) {
      r = document.createElement("div"), r.className = s;
      let a = r.style;
      a.position = "absolute", a.width = "100%", a.height = "100%", o = Ie();
      const l = o.canvas;
      r.appendChild(l), a = l.style, a.position = "absolute", a.left = "0", a.transformOrigin = "top left", this.container = r, this.context = o;
    }
    !this.containerReused && i && !this.container.style.backgroundColor && (this.container.style.backgroundColor = i);
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {import("../../extent.js").Extent} extent Clip extent.
   * @protected
   */
  clipUnrotated(e, t, i) {
    const s = Mn(i), r = ir(i), o = nr(i), a = tr(i);
    we(t.coordinateToPixelTransform, s), we(t.coordinateToPixelTransform, r), we(t.coordinateToPixelTransform, o), we(t.coordinateToPixelTransform, a);
    const l = this.inversePixelTransform;
    we(l, s), we(l, r), we(l, o), we(l, a), e.save(), e.beginPath(), e.moveTo(Math.round(s[0]), Math.round(s[1])), e.lineTo(Math.round(r[0]), Math.round(r[1])), e.lineTo(Math.round(o[0]), Math.round(o[1])), e.lineTo(Math.round(a[0]), Math.round(a[1])), e.clip();
  }
  /**
   * @param {import("../../render/EventType.js").default} type Event type.
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @private
   */
  dispatchRenderEvent_(e, t, i) {
    const s = this.getLayer();
    if (s.hasListener(e)) {
      const r = new oc(
        e,
        this.inversePixelTransform,
        i,
        t
      );
      s.dispatchEvent(r);
    }
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @protected
   */
  preRender(e, t) {
    this.frameState = t, !t.declutter && this.dispatchRenderEvent_(Je.PRERENDER, e, t);
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @protected
   */
  postRender(e, t) {
    t.declutter || this.dispatchRenderEvent_(Je.POSTRENDER, e, t);
  }
  /**
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   */
  renderDeferredInternal(e) {
  }
  /**
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {import('../../render/canvas/ZIndexContext.js').ZIndexContextProxy} Context.
   */
  getRenderContext(e) {
    return e.declutter && !this.deferredContext_ && (this.deferredContext_ = new dc()), e.declutter ? this.deferredContext_.getContext() : this.context;
  }
  /**
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @override
   */
  renderDeferred(e) {
    e.declutter && (this.dispatchRenderEvent_(
      Je.PRERENDER,
      this.context,
      e
    ), e.declutter && this.deferredContext_ && (this.deferredContext_.draw(this.context), this.deferredContext_.clear()), this.renderDeferredInternal(e), this.dispatchRenderEvent_(
      Je.POSTRENDER,
      this.context,
      e
    ));
  }
  /**
   * Creates a transform for rendering to an element that will be rotated after rendering.
   * @param {import("../../coordinate.js").Coordinate} center Center.
   * @param {number} resolution Resolution.
   * @param {number} rotation Rotation.
   * @param {number} pixelRatio Pixel ratio.
   * @param {number} width Width of the rendered element (in pixels).
   * @param {number} height Height of the rendered element (in pixels).
   * @param {number} offsetX Offset on the x-axis in view coordinates.
   * @protected
   * @return {!import("../../transform.js").Transform} Transform.
   */
  getRenderTransform(e, t, i, s, r, o, a) {
    const l = r / 2, h = o / 2, c = s / t, u = -c, d = -e[0] + a, f = -e[1];
    return Dt(
      this.tempTransform,
      l,
      h,
      c,
      u,
      -i,
      d,
      f
    );
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    delete this.frameState, super.disposeInternal();
  }
}
const N = {
  IDLE: 0,
  LOADING: 1,
  LOADED: 2,
  /**
   * Indicates that tile loading failed
   * @type {number}
   */
  ERROR: 3,
  EMPTY: 4
};
class _c extends $s {
  /**
   * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("./TileState.js").default} state State.
   * @param {Options} [options] Tile options.
   */
  constructor(e, t, i) {
    super(), i = i || {}, this.tileCoord = e, this.state = t, this.interimTile = null, this.key = "", this.transition_ = i.transition === void 0 ? 250 : i.transition, this.transitionStarts_ = {}, this.interpolate = !!i.interpolate;
  }
  /**
   * @protected
   */
  changed() {
    this.dispatchEvent(Z.CHANGE);
  }
  /**
   * Called by the tile cache when the tile is removed from the cache due to expiry
   */
  release() {
    this.state === N.ERROR && this.setState(N.EMPTY);
  }
  /**
   * @return {string} Key.
   */
  getKey() {
    return this.key + "/" + this.tileCoord;
  }
  /**
   * Get the interim tile most suitable for rendering using the chain of interim
   * tiles. This corresponds to the  most recent tile that has been loaded, if no
   * such tile exists, the original tile is returned.
   * @return {!Tile} Best tile for rendering.
   */
  getInterimTile() {
    let e = this.interimTile;
    if (!e)
      return this;
    do {
      if (e.getState() == N.LOADED)
        return this.transition_ = 0, e;
      e = e.interimTile;
    } while (e);
    return this;
  }
  /**
   * Goes through the chain of interim tiles and discards sections of the chain
   * that are no longer relevant.
   */
  refreshInterimChain() {
    let e = this.interimTile;
    if (!e)
      return;
    let t = this;
    do {
      if (e.getState() == N.LOADED) {
        e.interimTile = null;
        break;
      }
      e.getState() == N.LOADING ? t = e : e.getState() == N.IDLE ? t.interimTile = e.interimTile : t = e, e = t.interimTile;
    } while (e);
  }
  /**
   * Get the tile coordinate for this tile.
   * @return {import("./tilecoord.js").TileCoord} The tile coordinate.
   * @api
   */
  getTileCoord() {
    return this.tileCoord;
  }
  /**
   * @return {import("./TileState.js").default} State.
   */
  getState() {
    return this.state;
  }
  /**
   * Sets the state of this tile. If you write your own {@link module:ol/Tile~LoadFunction tileLoadFunction} ,
   * it is important to set the state correctly to {@link module:ol/TileState~ERROR}
   * when the tile cannot be loaded. Otherwise the tile cannot be removed from
   * the tile queue and will block other requests.
   * @param {import("./TileState.js").default} state State.
   * @api
   */
  setState(e) {
    if (this.state !== N.ERROR && this.state > e)
      throw new Error("Tile load sequence violation");
    this.state = e, this.changed();
  }
  /**
   * Load the image or retry if loading previously failed.
   * Loading is taken care of by the tile queue, and calling this method is
   * only needed for preloading or for reloading in case of an error.
   * @abstract
   * @api
   */
  load() {
    ie();
  }
  /**
   * Get the alpha value for rendering.
   * @param {string} id An id for the renderer.
   * @param {number} time The render frame time.
   * @return {number} A number between 0 and 1.
   */
  getAlpha(e, t) {
    if (!this.transition_)
      return 1;
    let i = this.transitionStarts_[e];
    if (!i)
      i = t, this.transitionStarts_[e] = i;
    else if (i === -1)
      return 1;
    const s = t - i + 1e3 / 60;
    return s >= this.transition_ ? 1 : Jh(s / this.transition_);
  }
  /**
   * Determine if a tile is in an alpha transition.  A tile is considered in
   * transition if tile.getAlpha() has not yet been called or has been called
   * and returned 1.
   * @param {string} id An id for the renderer.
   * @return {boolean} The tile is in transition.
   */
  inTransition(e) {
    return this.transition_ ? this.transitionStarts_[e] !== -1 : !1;
  }
  /**
   * Mark a transition as complete.
   * @param {string} id An id for the renderer.
   */
  endTransition(e) {
    this.transition_ && (this.transitionStarts_[e] = -1);
  }
}
function O_(n, e, t) {
  const i = (
    /** @type {HTMLImageElement} */
    n
  );
  let s = !0, r = !1, o = !1;
  const a = [
    Ms(i, Z.LOAD, function() {
      o = !0, r || e();
    })
  ];
  return i.src && cc ? (r = !0, i.decode().then(function() {
    s && e();
  }).catch(function(l) {
    s && (o ? e() : t());
  })) : a.push(Ms(i, Z.ERROR, t)), function() {
    s = !1, a.forEach(ge);
  };
}
function k_(n, e) {
  return new Promise((t, i) => {
    function s() {
      o(), t(n);
    }
    function r() {
      o(), i(new Error("Image load error"));
    }
    function o() {
      n.removeEventListener("load", s), n.removeEventListener("error", r);
    }
    n.addEventListener("load", s), n.addEventListener("error", r), e && (n.src = e);
  });
}
function F_(n, e) {
  return e && (n.src = e), n.src && cc ? new Promise(
    (t, i) => n.decode().then(() => t(n)).catch(
      (s) => n.complete && n.width ? t(n) : i(s)
    )
  ) : k_(n);
}
class yc extends _c {
  /**
   * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("./TileState.js").default} state State.
   * @param {string} src Image source URI.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("./Tile.js").LoadFunction} tileLoadFunction Tile load function.
   * @param {import("./Tile.js").Options} [options] Tile options.
   */
  constructor(e, t, i, s, r, o) {
    super(e, t, o), this.crossOrigin_ = s, this.src_ = i, this.key = i, this.image_ = new Image(), s !== null && (this.image_.crossOrigin = s), this.unlisten_ = null, this.tileLoadFunction_ = r;
  }
  /**
   * Get the HTML image element for this tile (may be a Canvas, Image, or Video).
   * @return {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} Image.
   * @api
   */
  getImage() {
    return this.image_;
  }
  /**
   * Sets an HTML image element for this tile (may be a Canvas or preloaded Image).
   * @param {HTMLCanvasElement|HTMLImageElement} element Element.
   */
  setImage(e) {
    this.image_ = e, this.state = N.LOADED, this.unlistenImage_(), this.changed();
  }
  /**
   * Tracks loading or read errors.
   *
   * @private
   */
  handleImageError_() {
    this.state = N.ERROR, this.unlistenImage_(), this.image_ = N_(), this.changed();
  }
  /**
   * Tracks successful image load.
   *
   * @private
   */
  handleImageLoad_() {
    const e = (
      /** @type {HTMLImageElement} */
      this.image_
    );
    e.naturalWidth && e.naturalHeight ? this.state = N.LOADED : this.state = N.EMPTY, this.unlistenImage_(), this.changed();
  }
  /**
   * Load the image or retry if loading previously failed.
   * Loading is taken care of by the tile queue, and calling this method is
   * only needed for preloading or for reloading in case of an error.
   *
   * To retry loading tiles on failed requests, use a custom `tileLoadFunction`
   * that checks for error status codes and reloads only when the status code is
   * 408, 429, 500, 502, 503 and 504, and only when not too many retries have been
   * made already:
   *
   * ```js
   * const retryCodes = [408, 429, 500, 502, 503, 504];
   * const retries = {};
   * source.setTileLoadFunction((tile, src) => {
   *   const image = tile.getImage();
   *   fetch(src)
   *     .then((response) => {
   *       if (retryCodes.includes(response.status)) {
   *         retries[src] = (retries[src] || 0) + 1;
   *         if (retries[src] <= 3) {
   *           setTimeout(() => tile.load(), retries[src] * 1000);
   *         }
   *         return Promise.reject();
   *       }
   *       return response.blob();
   *     })
   *     .then((blob) => {
   *       const imageUrl = URL.createObjectURL(blob);
   *       image.src = imageUrl;
   *       setTimeout(() => URL.revokeObjectURL(imageUrl), 5000);
   *     })
   *     .catch(() => tile.setState(3)); // error
   * });
   * ```
   *
   * @api
   */
  load() {
    this.state == N.ERROR && (this.state = N.IDLE, this.image_ = new Image(), this.crossOrigin_ !== null && (this.image_.crossOrigin = this.crossOrigin_)), this.state == N.IDLE && (this.state = N.LOADING, this.changed(), this.tileLoadFunction_(this, this.src_), this.unlisten_ = O_(
      this.image_,
      this.handleImageLoad_.bind(this),
      this.handleImageError_.bind(this)
    ));
  }
  /**
   * Discards event handlers which listen for load completion or errors.
   *
   * @private
   */
  unlistenImage_() {
    this.unlisten_ && (this.unlisten_(), this.unlisten_ = null);
  }
}
function N_() {
  const n = Ie(1, 1);
  return n.fillStyle = "rgba(0,0,0,0)", n.fillRect(0, 0, 1, 1), n.canvas;
}
const G_ = 0.5, B_ = 10, Pl = 0.25;
class z_ {
  /**
   * @param {import("../proj/Projection.js").default} sourceProj Source projection.
   * @param {import("../proj/Projection.js").default} targetProj Target projection.
   * @param {import("../extent.js").Extent} targetExtent Target extent to triangulate.
   * @param {import("../extent.js").Extent} maxSourceExtent Maximal source extent that can be used.
   * @param {number} errorThreshold Acceptable error (in source units).
   * @param {?number} destinationResolution The (optional) resolution of the destination.
   */
  constructor(e, t, i, s, r, o) {
    this.sourceProj_ = e, this.targetProj_ = t;
    let a = {};
    const l = Os(this.targetProj_, this.sourceProj_);
    this.transformInv_ = function(y) {
      const x = y[0] + "/" + y[1];
      return a[x] || (a[x] = l(y)), a[x];
    }, this.maxSourceExtent_ = s, this.errorThresholdSquared_ = r * r, this.triangles_ = [], this.wrapsXInSource_ = !1, this.canWrapXInSource_ = this.sourceProj_.canWrapX() && !!s && !!this.sourceProj_.getExtent() && he(s) >= he(this.sourceProj_.getExtent()), this.sourceWorldWidth_ = this.sourceProj_.getExtent() ? he(this.sourceProj_.getExtent()) : null, this.targetWorldWidth_ = this.targetProj_.getExtent() ? he(this.targetProj_.getExtent()) : null;
    const h = Mn(i), c = ir(i), u = nr(i), d = tr(i), f = this.transformInv_(h), g = this.transformInv_(c), m = this.transformInv_(u), p = this.transformInv_(d), _ = B_ + (o ? Math.max(
      0,
      Math.ceil(
        Math.log2(
          lo(i) / (o * o * 256 * 256)
        )
      )
    ) : 0);
    if (this.addQuad_(
      h,
      c,
      u,
      d,
      f,
      g,
      m,
      p,
      _
    ), this.wrapsXInSource_) {
      let y = 1 / 0;
      this.triangles_.forEach(function(x, v, E) {
        y = Math.min(
          y,
          x.source[0][0],
          x.source[1][0],
          x.source[2][0]
        );
      }), this.triangles_.forEach((x) => {
        if (Math.max(
          x.source[0][0],
          x.source[1][0],
          x.source[2][0]
        ) - y > this.sourceWorldWidth_ / 2) {
          const v = [
            [x.source[0][0], x.source[0][1]],
            [x.source[1][0], x.source[1][1]],
            [x.source[2][0], x.source[2][1]]
          ];
          v[0][0] - y > this.sourceWorldWidth_ / 2 && (v[0][0] -= this.sourceWorldWidth_), v[1][0] - y > this.sourceWorldWidth_ / 2 && (v[1][0] -= this.sourceWorldWidth_), v[2][0] - y > this.sourceWorldWidth_ / 2 && (v[2][0] -= this.sourceWorldWidth_);
          const E = Math.min(
            v[0][0],
            v[1][0],
            v[2][0]
          );
          Math.max(
            v[0][0],
            v[1][0],
            v[2][0]
          ) - E < this.sourceWorldWidth_ / 2 && (x.source = v);
        }
      });
    }
    a = {};
  }
  /**
   * Adds triangle to the triangulation.
   * @param {import("../coordinate.js").Coordinate} a The target a coordinate.
   * @param {import("../coordinate.js").Coordinate} b The target b coordinate.
   * @param {import("../coordinate.js").Coordinate} c The target c coordinate.
   * @param {import("../coordinate.js").Coordinate} aSrc The source a coordinate.
   * @param {import("../coordinate.js").Coordinate} bSrc The source b coordinate.
   * @param {import("../coordinate.js").Coordinate} cSrc The source c coordinate.
   * @private
   */
  addTriangle_(e, t, i, s, r, o) {
    this.triangles_.push({
      source: [s, r, o],
      target: [e, t, i]
    });
  }
  /**
   * Adds quad (points in clock-wise order) to the triangulation
   * (and reprojects the vertices) if valid.
   * Performs quad subdivision if needed to increase precision.
   *
   * @param {import("../coordinate.js").Coordinate} a The target a coordinate.
   * @param {import("../coordinate.js").Coordinate} b The target b coordinate.
   * @param {import("../coordinate.js").Coordinate} c The target c coordinate.
   * @param {import("../coordinate.js").Coordinate} d The target d coordinate.
   * @param {import("../coordinate.js").Coordinate} aSrc The source a coordinate.
   * @param {import("../coordinate.js").Coordinate} bSrc The source b coordinate.
   * @param {import("../coordinate.js").Coordinate} cSrc The source c coordinate.
   * @param {import("../coordinate.js").Coordinate} dSrc The source d coordinate.
   * @param {number} maxSubdivision Maximal allowed subdivision of the quad.
   * @private
   */
  addQuad_(e, t, i, s, r, o, a, l, h) {
    const c = gl([r, o, a, l]), u = this.sourceWorldWidth_ ? he(c) / this.sourceWorldWidth_ : null, d = (
      /** @type {number} */
      this.sourceWorldWidth_
    ), f = this.sourceProj_.canWrapX() && u > 0.5 && u < 1;
    let g = !1;
    if (h > 0) {
      if (this.targetProj_.isGlobal() && this.targetWorldWidth_) {
        const p = gl([e, t, i, s]);
        g = he(p) / this.targetWorldWidth_ > Pl || g;
      }
      !f && this.sourceProj_.isGlobal() && u && (g = u > Pl || g);
    }
    if (!g && this.maxSourceExtent_ && isFinite(c[0]) && isFinite(c[1]) && isFinite(c[2]) && isFinite(c[3]) && !Be(c, this.maxSourceExtent_))
      return;
    let m = 0;
    if (!g && (!isFinite(r[0]) || !isFinite(r[1]) || !isFinite(o[0]) || !isFinite(o[1]) || !isFinite(a[0]) || !isFinite(a[1]) || !isFinite(l[0]) || !isFinite(l[1]))) {
      if (h > 0)
        g = !0;
      else if (m = (!isFinite(r[0]) || !isFinite(r[1]) ? 8 : 0) + (!isFinite(o[0]) || !isFinite(o[1]) ? 4 : 0) + (!isFinite(a[0]) || !isFinite(a[1]) ? 2 : 0) + (!isFinite(l[0]) || !isFinite(l[1]) ? 1 : 0), m != 1 && m != 2 && m != 4 && m != 8)
        return;
    }
    if (h > 0) {
      if (!g) {
        const p = [(e[0] + i[0]) / 2, (e[1] + i[1]) / 2], _ = this.transformInv_(p);
        let y;
        f ? y = (qn(r[0], d) + qn(a[0], d)) / 2 - qn(_[0], d) : y = (r[0] + a[0]) / 2 - _[0];
        const x = (r[1] + a[1]) / 2 - _[1];
        g = y * y + x * x > this.errorThresholdSquared_;
      }
      if (g) {
        if (Math.abs(e[0] - i[0]) <= Math.abs(e[1] - i[1])) {
          const p = [(t[0] + i[0]) / 2, (t[1] + i[1]) / 2], _ = this.transformInv_(p), y = [(s[0] + e[0]) / 2, (s[1] + e[1]) / 2], x = this.transformInv_(y);
          this.addQuad_(
            e,
            t,
            p,
            y,
            r,
            o,
            _,
            x,
            h - 1
          ), this.addQuad_(
            y,
            p,
            i,
            s,
            x,
            _,
            a,
            l,
            h - 1
          );
        } else {
          const p = [(e[0] + t[0]) / 2, (e[1] + t[1]) / 2], _ = this.transformInv_(p), y = [(i[0] + s[0]) / 2, (i[1] + s[1]) / 2], x = this.transformInv_(y);
          this.addQuad_(
            e,
            p,
            y,
            s,
            r,
            _,
            x,
            l,
            h - 1
          ), this.addQuad_(
            p,
            t,
            i,
            y,
            _,
            o,
            a,
            x,
            h - 1
          );
        }
        return;
      }
    }
    if (f) {
      if (!this.canWrapXInSource_)
        return;
      this.wrapsXInSource_ = !0;
    }
    m & 11 || this.addTriangle_(e, i, s, r, a, l), m & 14 || this.addTriangle_(e, i, t, r, a, o), m && (m & 13 || this.addTriangle_(t, s, e, o, l, r), m & 7 || this.addTriangle_(t, s, i, o, l, a));
  }
  /**
   * Calculates extent of the `source` coordinates from all the triangles.
   *
   * @return {import("../extent.js").Extent} Calculated extent.
   */
  calculateSourceExtent() {
    const e = $e();
    return this.triangles_.forEach(function(t, i, s) {
      const r = t.source;
      Mi(e, r[0]), Mi(e, r[1]), Mi(e, r[2]);
    }), e;
  }
  /**
   * @return {Array<Triangle>} Array of the calculated triangles.
   */
  getTriangles() {
    return this.triangles_;
  }
}
let Nr;
const $n = [];
function Ol(n, e, t, i, s) {
  n.beginPath(), n.moveTo(0, 0), n.lineTo(e, t), n.lineTo(i, s), n.closePath(), n.save(), n.clip(), n.fillRect(0, 0, Math.max(e, i) + 1, Math.max(t, s)), n.restore();
}
function Gr(n, e) {
  return Math.abs(n[e * 4] - 210) > 2 || Math.abs(n[e * 4 + 3] - 0.75 * 255) > 2;
}
function W_() {
  if (Nr === void 0) {
    const n = Ie(6, 6, $n);
    n.globalCompositeOperation = "lighter", n.fillStyle = "rgba(210, 0, 0, 0.75)", Ol(n, 4, 5, 4, 0), Ol(n, 4, 5, 0, 5);
    const e = n.getImageData(0, 0, 3, 3).data;
    Nr = Gr(e, 0) || Gr(e, 4) || Gr(e, 8), cr(n), $n.push(n.canvas);
  }
  return Nr;
}
function kl(n, e, t, i) {
  const s = Vo(t, e, n);
  let r = pl(
    e,
    i,
    t
  );
  const o = e.getMetersPerUnit();
  o !== void 0 && (r *= o);
  const a = n.getMetersPerUnit();
  a !== void 0 && (r /= a);
  const l = n.getExtent();
  if (!l || oi(l, s)) {
    const h = pl(n, r, s) / r;
    isFinite(h) && h > 0 && (r /= h);
  }
  return r;
}
function X_(n, e, t, i) {
  const s = Sn(t);
  let r = kl(
    n,
    e,
    s,
    i
  );
  return (!isFinite(r) || r <= 0) && Zh(t, function(o) {
    return r = kl(
      n,
      e,
      o,
      i
    ), isFinite(r) && r > 0;
  }), r;
}
function K_(n, e, t, i, s, r, o, a, l, h, c, u, d, f) {
  const g = Ie(
    Math.round(t * n),
    Math.round(t * e),
    $n
  );
  if (u || (g.imageSmoothingEnabled = !1), l.length === 0)
    return g.canvas;
  g.scale(t, t);
  function m(E) {
    return Math.round(E * t) / t;
  }
  g.globalCompositeOperation = "lighter";
  const p = $e();
  l.forEach(function(E, w, I) {
    E0(p, E.extent);
  });
  let _;
  const y = t / i, x = (u ? 1 : 1 + Math.pow(2, -24)) / y;
  if (!d || l.length !== 1 || h !== 0) {
    if (_ = Ie(
      Math.round(he(p) * y),
      Math.round(We(p) * y),
      $n
    ), u || (_.imageSmoothingEnabled = !1), s && f) {
      const E = (s[0] - p[0]) * y, w = -(s[3] - p[3]) * y, I = he(s) * y, C = We(s) * y;
      _.rect(E, w, I, C), _.clip();
    }
    l.forEach(function(E, w, I) {
      const C = (E.extent[0] - p[0]) * y, R = -(E.extent[3] - p[3]) * y, z = he(E.extent) * y, F = We(E.extent) * y;
      E.image.width > 0 && E.image.height > 0 && _.drawImage(
        E.image,
        h,
        h,
        E.image.width - 2 * h,
        E.image.height - 2 * h,
        u ? C : Math.round(C),
        u ? R : Math.round(R),
        u ? z : Math.round(C + z) - Math.round(C),
        u ? F : Math.round(R + F) - Math.round(R)
      );
    });
  }
  const v = Mn(o);
  return a.getTriangles().forEach(function(E, w, I) {
    const C = E.source, R = E.target;
    let z = C[0][0], F = C[0][1], B = C[1][0], V = C[1][1], X = C[2][0], K = C[2][1];
    const M = m((R[0][0] - v[0]) / r), G = m(
      -(R[0][1] - v[1]) / r
    ), b = m((R[1][0] - v[0]) / r), Y = m(
      -(R[1][1] - v[1]) / r
    ), L = m((R[2][0] - v[0]) / r), D = m(
      -(R[2][1] - v[1]) / r
    ), O = z, $ = F;
    z = 0, F = 0, B -= O, V -= $, X -= O, K -= $;
    const S = [
      [B, V, 0, 0, b - M],
      [X, K, 0, 0, L - M],
      [0, 0, B, V, Y - G],
      [0, 0, X, K, D - G]
    ], q = h0(S);
    if (!q)
      return;
    if (g.save(), g.beginPath(), W_() || !u) {
      g.moveTo(b, Y);
      const ce = 4, Oe = M - b, tt = G - Y;
      for (let ke = 0; ke < ce; ke++)
        g.lineTo(
          b + m((ke + 1) * Oe / ce),
          Y + m(ke * tt / (ce - 1))
        ), ke != ce - 1 && g.lineTo(
          b + m((ke + 1) * Oe / ce),
          Y + m((ke + 1) * tt / (ce - 1))
        );
      g.lineTo(L, D);
    } else
      g.moveTo(b, Y), g.lineTo(M, G), g.lineTo(L, D);
    g.clip(), g.transform(
      q[0],
      q[2],
      q[1],
      q[3],
      M,
      G
    ), g.translate(
      p[0] - O,
      p[3] - $
    );
    let de;
    if (_)
      de = _.canvas, g.scale(x, -x);
    else {
      const ce = l[0], Oe = ce.extent;
      de = ce.image, g.scale(
        he(Oe) / de.width,
        -We(Oe) / de.height
      );
    }
    g.drawImage(de, 0, 0), g.restore();
  }), _ && (cr(_), $n.push(_.canvas)), c && (g.save(), g.globalCompositeOperation = "source-over", g.strokeStyle = "black", g.lineWidth = 1, a.getTriangles().forEach(function(E, w, I) {
    const C = E.target, R = (C[0][0] - v[0]) / r, z = -(C[0][1] - v[1]) / r, F = (C[1][0] - v[0]) / r, B = -(C[1][1] - v[1]) / r, V = (C[2][0] - v[0]) / r, X = -(C[2][1] - v[1]) / r;
    g.beginPath(), g.moveTo(F, B), g.lineTo(R, z), g.lineTo(V, X), g.closePath(), g.stroke();
  }), g.restore()), g.canvas;
}
class po extends _c {
  /**
   * @param {import("../proj/Projection.js").default} sourceProj Source projection.
   * @param {import("../tilegrid/TileGrid.js").default} sourceTileGrid Source tile grid.
   * @param {import("../proj/Projection.js").default} targetProj Target projection.
   * @param {import("../tilegrid/TileGrid.js").default} targetTileGrid Target tile grid.
   * @param {import("../tilecoord.js").TileCoord} tileCoord Coordinate of the tile.
   * @param {import("../tilecoord.js").TileCoord} wrappedTileCoord Coordinate of the tile wrapped in X.
   * @param {number} pixelRatio Pixel ratio.
   * @param {number} gutter Gutter of the source tiles.
   * @param {FunctionType} getTileFunction
   *     Function returning source tiles (z, x, y, pixelRatio).
   * @param {number} [errorThreshold] Acceptable reprojection error (in px).
   * @param {boolean} [renderEdges] Render reprojection edges.
   * @param {import("../Tile.js").Options} [options] Tile options.
   */
  constructor(e, t, i, s, r, o, a, l, h, c, u, d) {
    super(r, N.IDLE, d), this.renderEdges_ = u !== void 0 ? u : !1, this.pixelRatio_ = a, this.gutter_ = l, this.canvas_ = null, this.sourceTileGrid_ = t, this.targetTileGrid_ = s, this.wrappedTileCoord_ = o || r, this.sourceTiles_ = [], this.sourcesListenerKeys_ = null, this.sourceZ_ = 0;
    const f = s.getTileCoordExtent(
      this.wrappedTileCoord_
    ), g = this.targetTileGrid_.getExtent();
    let m = this.sourceTileGrid_.getExtent();
    const p = g ? Di(f, g) : f;
    if (lo(p) === 0) {
      this.state = N.EMPTY;
      return;
    }
    const _ = e.getExtent();
    _ && (m ? m = Di(m, _) : m = _);
    const y = s.getResolution(
      this.wrappedTileCoord_[0]
    ), x = X_(
      e,
      i,
      p,
      y
    );
    if (!isFinite(x) || x <= 0) {
      this.state = N.EMPTY;
      return;
    }
    const v = c !== void 0 ? c : G_;
    if (this.triangulation_ = new z_(
      e,
      i,
      p,
      m,
      x * v,
      y
    ), this.triangulation_.getTriangles().length === 0) {
      this.state = N.EMPTY;
      return;
    }
    this.sourceZ_ = t.getZForResolution(x);
    let E = this.triangulation_.calculateSourceExtent();
    if (m && (e.canWrapX() ? (E[1] = ve(
      E[1],
      m[1],
      m[3]
    ), E[3] = ve(
      E[3],
      m[1],
      m[3]
    )) : E = Di(E, m)), !lo(E))
      this.state = N.EMPTY;
    else {
      const w = t.getTileRangeForExtentAndZ(
        E,
        this.sourceZ_
      );
      for (let I = w.minX; I <= w.maxX; I++)
        for (let C = w.minY; C <= w.maxY; C++) {
          const R = h(this.sourceZ_, I, C, a);
          R && this.sourceTiles_.push(R);
        }
      this.sourceTiles_.length === 0 && (this.state = N.EMPTY);
    }
  }
  /**
   * Get the HTML Canvas element for this tile.
   * @return {HTMLCanvasElement} Canvas.
   */
  getImage() {
    return this.canvas_;
  }
  /**
   * @private
   */
  reproject_() {
    const e = [];
    if (this.sourceTiles_.forEach((t) => {
      t && t.getState() == N.LOADED && e.push({
        extent: this.sourceTileGrid_.getTileCoordExtent(t.tileCoord),
        image: t.getImage()
      });
    }), this.sourceTiles_.length = 0, e.length === 0)
      this.state = N.ERROR;
    else {
      const t = this.wrappedTileCoord_[0], i = this.targetTileGrid_.getTileSize(t), s = typeof i == "number" ? i : i[0], r = typeof i == "number" ? i : i[1], o = this.targetTileGrid_.getResolution(t), a = this.sourceTileGrid_.getResolution(
        this.sourceZ_
      ), l = this.targetTileGrid_.getTileCoordExtent(
        this.wrappedTileCoord_
      );
      this.canvas_ = K_(
        s,
        r,
        this.pixelRatio_,
        a,
        this.sourceTileGrid_.getExtent(),
        o,
        l,
        this.triangulation_,
        e,
        this.gutter_,
        this.renderEdges_,
        this.interpolate
      ), this.state = N.LOADED;
    }
    this.changed();
  }
  /**
   * Load not yet loaded URI.
   */
  load() {
    if (this.state == N.IDLE) {
      this.state = N.LOADING, this.changed();
      let e = 0;
      this.sourcesListenerKeys_ = [], this.sourceTiles_.forEach((t) => {
        const i = t.getState();
        if (i == N.IDLE || i == N.LOADING) {
          e++;
          const s = se(
            t,
            Z.CHANGE,
            function(r) {
              const o = t.getState();
              (o == N.LOADED || o == N.ERROR || o == N.EMPTY) && (ge(s), e--, e === 0 && (this.unlistenSources_(), this.reproject_()));
            },
            this
          );
          this.sourcesListenerKeys_.push(s);
        }
      }), e === 0 ? setTimeout(this.reproject_.bind(this), 0) : this.sourceTiles_.forEach(function(t, i, s) {
        t.getState() == N.IDLE && t.load();
      });
    }
  }
  /**
   * @private
   */
  unlistenSources_() {
    this.sourcesListenerKeys_.forEach(ge), this.sourcesListenerKeys_ = null;
  }
  /**
   * Remove from the cache due to expiry
   */
  release() {
    this.canvas_ && (cr(this.canvas_.getContext("2d")), $n.push(this.canvas_), this.canvas_ = null), super.release();
  }
}
class aa {
  /**
   * @param {number} minX Minimum X.
   * @param {number} maxX Maximum X.
   * @param {number} minY Minimum Y.
   * @param {number} maxY Maximum Y.
   */
  constructor(e, t, i, s) {
    this.minX = e, this.maxX = t, this.minY = i, this.maxY = s;
  }
  /**
   * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @return {boolean} Contains tile coordinate.
   */
  contains(e) {
    return this.containsXY(e[1], e[2]);
  }
  /**
   * @param {TileRange} tileRange Tile range.
   * @return {boolean} Contains.
   */
  containsTileRange(e) {
    return this.minX <= e.minX && e.maxX <= this.maxX && this.minY <= e.minY && e.maxY <= this.maxY;
  }
  /**
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @return {boolean} Contains coordinate.
   */
  containsXY(e, t) {
    return this.minX <= e && e <= this.maxX && this.minY <= t && t <= this.maxY;
  }
  /**
   * @param {TileRange} tileRange Tile range.
   * @return {boolean} Equals.
   */
  equals(e) {
    return this.minX == e.minX && this.minY == e.minY && this.maxX == e.maxX && this.maxY == e.maxY;
  }
  /**
   * @param {TileRange} tileRange Tile range.
   */
  extend(e) {
    e.minX < this.minX && (this.minX = e.minX), e.maxX > this.maxX && (this.maxX = e.maxX), e.minY < this.minY && (this.minY = e.minY), e.maxY > this.maxY && (this.maxY = e.maxY);
  }
  /**
   * @return {number} Height.
   */
  getHeight() {
    return this.maxY - this.minY + 1;
  }
  /**
   * @return {import("./size.js").Size} Size.
   */
  getSize() {
    return [this.getWidth(), this.getHeight()];
  }
  /**
   * @return {number} Width.
   */
  getWidth() {
    return this.maxX - this.minX + 1;
  }
  /**
   * @param {TileRange} tileRange Tile range.
   * @return {boolean} Intersects.
   */
  intersects(e) {
    return this.minX <= e.maxX && this.maxX >= e.minX && this.minY <= e.maxY && this.maxY >= e.minY;
  }
}
function Nn(n, e, t, i, s) {
  return s !== void 0 ? (s.minX = n, s.maxX = e, s.minY = t, s.maxY = i, s) : new aa(n, e, t, i);
}
function Fl(n) {
  return n[0] > 0 && n[1] > 0;
}
function Y_(n, e, t) {
  return t === void 0 && (t = [0, 0]), t[0] = n[0] * e + 0.5 | 0, t[1] = n[1] * e + 0.5 | 0, t;
}
function Ue(n, e) {
  return Array.isArray(n) ? n : (e === void 0 ? e = [n, n] : (e[0] = n, e[1] = n), e);
}
class U_ extends pc {
  /**
   * @param {LayerType} tileLayer Tile layer.
   */
  constructor(e) {
    super(e), this.extentChanged = !0, this.renderedExtent_ = null, this.renderedPixelRatio, this.renderedProjection = null, this.renderedRevision, this.renderedTiles = [], this.newTiles_ = !1, this.tmpExtent = $e(), this.tmpTileRange_ = new aa(0, 0, 0, 0);
  }
  /**
   * @protected
   * @param {import("../../Tile.js").default} tile Tile.
   * @return {boolean} Tile is drawable.
   */
  isDrawableTile(e) {
    const t = this.getLayer(), i = e.getState(), s = t.getUseInterimTilesOnError();
    return i == N.LOADED || i == N.EMPTY || i == N.ERROR && !s;
  }
  /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {!import("../../Tile.js").default} Tile.
   */
  getTile(e, t, i, s) {
    const r = s.pixelRatio, o = s.viewState.projection, a = this.getLayer();
    let h = a.getSource().getTile(e, t, i, r, o);
    return h.getState() == N.ERROR && a.getUseInterimTilesOnError() && a.getPreload() > 0 && (this.newTiles_ = !0), this.isDrawableTile(h) || (h = h.getInterimTile()), h;
  }
  /**
   * @param {import("../../pixel.js").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray} Data at the pixel location.
   */
  getData(e) {
    const t = this.frameState;
    if (!t)
      return null;
    const i = this.getLayer(), s = we(
      t.pixelToCoordinateTransform,
      e.slice()
    ), r = i.getExtent();
    if (r && !oi(r, s))
      return null;
    const o = t.pixelRatio, a = t.viewState.projection, l = t.viewState, h = i.getRenderSource(), c = h.getTileGridForProjection(l.projection), u = h.getTilePixelRatio(t.pixelRatio);
    for (let d = c.getZForResolution(l.resolution); d >= c.getMinZoom(); --d) {
      const f = c.getTileCoordForCoordAndZ(s, d), g = h.getTile(
        d,
        f[1],
        f[2],
        o,
        a
      );
      if (!(g instanceof yc || g instanceof po) || g instanceof po && g.getState() === N.EMPTY)
        return null;
      if (g.getState() !== N.LOADED)
        continue;
      const m = c.getOrigin(d), p = Ue(c.getTileSize(d)), _ = c.getResolution(d), y = Math.floor(
        u * ((s[0] - m[0]) / _ - f[1] * p[0])
      ), x = Math.floor(
        u * ((m[1] - s[1]) / _ - f[2] * p[1])
      ), v = Math.round(
        u * h.getGutterForProjection(l.projection)
      );
      return this.getImageData(g.getImage(), y + v, x + v);
    }
    return null;
  }
  /**
   * @param {Object<number, Object<string, import("../../Tile.js").default>>} tiles Lookup of loaded tiles by zoom level.
   * @param {number} zoom Zoom level.
   * @param {import("../../Tile.js").default} tile Tile.
   * @return {boolean|void} If `false`, the tile will not be considered loaded.
   */
  loadedTileCallback(e, t, i) {
    return this.isDrawableTile(i) ? super.loadedTileCallback(e, t, i) : !1;
  }
  /**
   * Determine whether render should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   */
  prepareFrame(e) {
    return !!this.getLayer().getSource();
  }
  /**
   * Render the layer.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement} target Target that may be used to render content to.
   * @return {HTMLElement} The rendered element.
   */
  renderFrame(e, t) {
    const i = e.layerStatesArray[e.layerIndex], s = e.viewState, r = s.projection, o = s.resolution, a = s.center, l = s.rotation, h = e.pixelRatio, c = this.getLayer(), u = c.getSource(), d = u.getRevision(), f = u.getTileGridForProjection(r), g = f.getZForResolution(o, u.zDirection), m = f.getResolution(g);
    let p = e.extent;
    const _ = e.viewState.resolution, y = u.getTilePixelRatio(h), x = Math.round(he(p) / _ * h), v = Math.round(We(p) / _ * h), E = i.extent && _n(i.extent);
    E && (p = Di(
      p,
      _n(i.extent)
    ));
    const w = m * x / 2 / y, I = m * v / 2 / y, C = [
      a[0] - w,
      a[1] - I,
      a[0] + w,
      a[1] + I
    ], R = f.getTileRangeForExtentAndZ(p, g), z = {};
    z[g] = {};
    const F = this.createLoadedTileFinder(
      u,
      r,
      z
    ), B = this.tmpExtent, V = this.tmpTileRange_;
    this.newTiles_ = !1;
    const X = l ? co(
      s.center,
      _,
      l,
      e.size
    ) : void 0;
    for (let $ = R.minX; $ <= R.maxX; ++$)
      for (let S = R.minY; S <= R.maxY; ++S) {
        if (l && !f.tileCoordIntersectsViewport([g, $, S], X))
          continue;
        const q = this.getTile(g, $, S, e);
        if (this.isDrawableTile(q)) {
          const Oe = oe(this);
          if (q.getState() == N.LOADED) {
            z[g][q.tileCoord.toString()] = q;
            let tt = q.inTransition(Oe);
            tt && i.opacity !== 1 && (q.endTransition(Oe), tt = !1), !this.newTiles_ && (tt || !this.renderedTiles.includes(q)) && (this.newTiles_ = !0);
          }
          if (q.getAlpha(Oe, e.time) === 1)
            continue;
        }
        const de = f.getTileCoordChildTileRange(
          q.tileCoord,
          V,
          B
        );
        let ce = !1;
        de && (ce = F(g + 1, de)), ce || f.forEachTileCoordParentTileRange(
          q.tileCoord,
          F,
          V,
          B
        );
      }
    const K = m / o * h / y;
    Dt(
      this.pixelTransform,
      e.size[0] / 2,
      e.size[1] / 2,
      1 / h,
      1 / h,
      l,
      -x / 2,
      -v / 2
    );
    const M = $h(this.pixelTransform);
    this.useContainer(t, M, this.getBackground(e));
    const G = this.getRenderContext(e), b = this.context.canvas;
    qo(this.inversePixelTransform, this.pixelTransform), Dt(
      this.tempTransform,
      x / 2,
      v / 2,
      K,
      K,
      0,
      -x / 2,
      -v / 2
    ), b.width != x || b.height != v ? (b.width = x, b.height = v) : this.containerReused || G.clearRect(0, 0, x, v), E && this.clipUnrotated(G, e, E), u.getInterpolate() || (G.imageSmoothingEnabled = !1), this.preRender(G, e), this.renderedTiles.length = 0;
    let Y = Object.keys(z).map(Number);
    Y.sort(on);
    let L, D, O;
    i.opacity === 1 && (!this.containerReused || u.getOpaque(e.viewState.projection)) ? Y = Y.reverse() : (L = [], D = []);
    for (let $ = Y.length - 1; $ >= 0; --$) {
      const S = Y[$], q = u.getTilePixelSize(
        S,
        h,
        r
      ), ce = f.getResolution(S) / m, Oe = q[0] * ce * K, tt = q[1] * ce * K, ke = f.getTileCoordForCoordAndZ(
        Mn(C),
        S
      ), yi = f.getTileCoordExtent(ke), cn = we(this.tempTransform, [
        y * (yi[0] - C[0]) / m,
        y * (C[3] - yi[3]) / m
      ]), yr = y * u.getGutterForProjection(r), hs = z[S];
      for (const cs in hs) {
        const Ve = (
          /** @type {import("../../ImageTile.js").default} */
          hs[cs]
        ), Dn = Ve.tileCoord, us = ke[1] - Dn[1], vr = Math.round(cn[0] - (us - 1) * Oe), ds = ke[2] - Dn[2], fs = Math.round(cn[1] - (ds - 1) * tt), Xe = Math.round(cn[0] - us * Oe), nt = Math.round(cn[1] - ds * tt), lt = vr - Xe, it = fs - nt, Pn = g === S, On = Pn && Ve.getAlpha(oe(this), e.time) !== 1;
        let Gt = !1;
        if (!On)
          if (L) {
            O = [Xe, nt, Xe + lt, nt, Xe + lt, nt + it, Xe, nt + it];
            for (let Et = 0, Er = L.length; Et < Er; ++Et)
              if (g !== S && S < D[Et]) {
                const Me = L[Et];
                Be(
                  [Xe, nt, Xe + lt, nt + it],
                  [Me[0], Me[3], Me[4], Me[7]]
                ) && (Gt || (G.save(), Gt = !0), G.beginPath(), G.moveTo(O[0], O[1]), G.lineTo(O[2], O[3]), G.lineTo(O[4], O[5]), G.lineTo(O[6], O[7]), G.moveTo(Me[6], Me[7]), G.lineTo(Me[4], Me[5]), G.lineTo(Me[2], Me[3]), G.lineTo(Me[0], Me[1]), G.clip());
              }
            L.push(O), D.push(S);
          } else
            G.clearRect(Xe, nt, lt, it);
        this.drawTileImage(
          Ve,
          e,
          Xe,
          nt,
          lt,
          it,
          yr,
          Pn
        ), L && !On ? (Gt && G.restore(), this.renderedTiles.unshift(Ve)) : this.renderedTiles.push(Ve), this.updateUsedTiles(e.usedTiles, u, Ve);
      }
    }
    return this.renderedRevision = d, this.renderedResolution = m, this.extentChanged = !this.renderedExtent_ || !Wi(this.renderedExtent_, C), this.renderedExtent_ = C, this.renderedPixelRatio = h, this.renderedProjection = r, this.manageTilePyramid(
      e,
      u,
      f,
      h,
      r,
      p,
      g,
      c.getPreload()
    ), this.scheduleExpireCache(e, u), this.postRender(this.context, e), i.extent && G.restore(), G.imageSmoothingEnabled = !0, M !== b.style.transform && (b.style.transform = M), this.container;
  }
  /**
   * @param {import("../../ImageTile.js").default} tile Tile.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {number} x Left of the tile.
   * @param {number} y Top of the tile.
   * @param {number} w Width of the tile.
   * @param {number} h Height of the tile.
   * @param {number} gutter Tile gutter.
   * @param {boolean} transition Apply an alpha transition.
   */
  drawTileImage(e, t, i, s, r, o, a, l) {
    const h = this.getTileImage(e);
    if (!h)
      return;
    const c = this.getRenderContext(t), u = oe(this), d = t.layerStatesArray[t.layerIndex], f = d.opacity * (l ? e.getAlpha(u, t.time) : 1), g = f !== c.globalAlpha;
    g && (c.save(), c.globalAlpha = f), c.drawImage(
      h,
      a,
      a,
      h.width - 2 * a,
      h.height - 2 * a,
      i,
      s,
      r,
      o
    ), g && c.restore(), f !== d.opacity ? t.animate = !0 : l && e.endTransition(u);
  }
  /**
   * @return {HTMLCanvasElement} Image
   */
  getImage() {
    const e = this.context;
    return e ? e.canvas : null;
  }
  /**
   * Get the image from a tile.
   * @param {import("../../ImageTile.js").default} tile Tile.
   * @return {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} Image.
   * @protected
   */
  getTileImage(e) {
    return e.getImage();
  }
  /**
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {import("../../source/Tile.js").default} tileSource Tile source.
   * @protected
   */
  scheduleExpireCache(e, t) {
    if (t.canExpireCache()) {
      const i = (function(s, r, o) {
        const a = oe(s);
        a in o.usedTiles && s.expireCache(
          o.viewState.projection,
          o.usedTiles[a]
        );
      }).bind(null, t);
      e.postRenderFunctions.push(
        /** @type {import("../../Map.js").PostRenderFunction} */
        i
      );
    }
  }
  /**
   * @param {!Object<string, !Object<string, boolean>>} usedTiles Used tiles.
   * @param {import("../../source/Tile.js").default} tileSource Tile source.
   * @param {import('../../Tile.js').default} tile Tile.
   * @protected
   */
  updateUsedTiles(e, t, i) {
    const s = oe(t);
    s in e || (e[s] = {}), e[s][i.getKey()] = !0;
  }
  /**
   * Manage tile pyramid.
   * This function performs a number of functions related to the tiles at the
   * current zoom and lower zoom levels:
   * - registers idle tiles in frameState.wantedTiles so that they are not
   *   discarded by the tile queue
   * - enqueues missing tiles
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {import("../../source/Tile.js").default} tileSource Tile source.
   * @param {import("../../tilegrid/TileGrid.js").default} tileGrid Tile grid.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../../proj/Projection.js").default} projection Projection.
   * @param {import("../../extent.js").Extent} extent Extent.
   * @param {number} currentZ Current Z.
   * @param {number} preload Load low resolution tiles up to `preload` levels.
   * @param {function(import("../../Tile.js").default):void} [tileCallback] Tile callback.
   * @protected
   */
  manageTilePyramid(e, t, i, s, r, o, a, l, h) {
    const c = oe(t);
    c in e.wantedTiles || (e.wantedTiles[c] = {});
    const u = e.wantedTiles[c], d = e.tileQueue, f = i.getMinZoom(), g = e.viewState.rotation, m = g ? co(
      e.viewState.center,
      e.viewState.resolution,
      g,
      e.size
    ) : void 0;
    let p = 0, _, y, x, v, E, w;
    for (w = f; w <= a; ++w)
      for (y = i.getTileRangeForExtentAndZ(o, w, y), x = i.getResolution(w), v = y.minX; v <= y.maxX; ++v)
        for (E = y.minY; E <= y.maxY; ++E)
          g && !i.tileCoordIntersectsViewport([w, v, E], m) || (a - w <= l ? (++p, _ = t.getTile(w, v, E, s, r), _.getState() == N.IDLE && (u[_.getKey()] = !0, d.isKeyQueued(_.getKey()) || d.enqueue([
            _,
            c,
            i.getTileCoordCenter(_.tileCoord),
            x
          ])), h !== void 0 && h(_)) : t.useTile(w, v, E, r));
    t.updateCacheSize(p, r);
  }
}
class V_ extends y_ {
  /**
   * @param {import("./BaseTile.js").Options<TileSourceType>} [options] Tile layer options.
   */
  constructor(e) {
    super(e);
  }
  createRenderer() {
    return new U_(this);
  }
}
const Z_ = V_;
class j_ {
  /**
   * @param {number} [highWaterMark] High water mark.
   */
  constructor(e) {
    this.highWaterMark = e !== void 0 ? e : 2048, this.count_ = 0, this.entries_ = {}, this.oldest_ = null, this.newest_ = null;
  }
  /**
   * @return {boolean} Can expire cache.
   */
  canExpireCache() {
    return this.highWaterMark > 0 && this.getCount() > this.highWaterMark;
  }
  /**
   * Expire the cache.
   * @param {!Object<string, boolean>} [keep] Keys to keep. To be implemented by subclasses.
   */
  expireCache(e) {
    for (; this.canExpireCache(); )
      this.pop();
  }
  /**
   * FIXME empty description for jsdoc
   */
  clear() {
    this.count_ = 0, this.entries_ = {}, this.oldest_ = null, this.newest_ = null;
  }
  /**
   * @param {string} key Key.
   * @return {boolean} Contains key.
   */
  containsKey(e) {
    return this.entries_.hasOwnProperty(e);
  }
  /**
   * @param {function(T, string, LRUCache<T>): ?} f The function
   *     to call for every entry from the oldest to the newer. This function takes
   *     3 arguments (the entry value, the entry key and the LRUCache object).
   *     The return value is ignored.
   */
  forEach(e) {
    let t = this.oldest_;
    for (; t; )
      e(t.value_, t.key_, this), t = t.newer;
  }
  /**
   * @param {string} key Key.
   * @param {*} [options] Options (reserved for subclasses).
   * @return {T} Value.
   */
  get(e, t) {
    const i = this.entries_[e];
    return te(
      i !== void 0,
      "Tried to get a value for a key that does not exist in the cache"
    ), i === this.newest_ || (i === this.oldest_ ? (this.oldest_ = /** @type {Entry} */
    this.oldest_.newer, this.oldest_.older = null) : (i.newer.older = i.older, i.older.newer = i.newer), i.newer = null, i.older = this.newest_, this.newest_.newer = i, this.newest_ = i), i.value_;
  }
  /**
   * Remove an entry from the cache.
   * @param {string} key The entry key.
   * @return {T} The removed entry.
   */
  remove(e) {
    const t = this.entries_[e];
    return te(
      t !== void 0,
      "Tried to get a value for a key that does not exist in the cache"
    ), t === this.newest_ ? (this.newest_ = /** @type {Entry} */
    t.older, this.newest_ && (this.newest_.newer = null)) : t === this.oldest_ ? (this.oldest_ = /** @type {Entry} */
    t.newer, this.oldest_ && (this.oldest_.older = null)) : (t.newer.older = t.older, t.older.newer = t.newer), delete this.entries_[e], --this.count_, t.value_;
  }
  /**
   * @return {number} Count.
   */
  getCount() {
    return this.count_;
  }
  /**
   * @return {Array<string>} Keys.
   */
  getKeys() {
    const e = new Array(this.count_);
    let t = 0, i;
    for (i = this.newest_; i; i = i.older)
      e[t++] = i.key_;
    return e;
  }
  /**
   * @return {Array<T>} Values.
   */
  getValues() {
    const e = new Array(this.count_);
    let t = 0, i;
    for (i = this.newest_; i; i = i.older)
      e[t++] = i.value_;
    return e;
  }
  /**
   * @return {T} Last value.
   */
  peekLast() {
    return this.oldest_.value_;
  }
  /**
   * @return {string} Last key.
   */
  peekLastKey() {
    return this.oldest_.key_;
  }
  /**
   * Get the key of the newest item in the cache.  Throws if the cache is empty.
   * @return {string} The newest key.
   */
  peekFirstKey() {
    return this.newest_.key_;
  }
  /**
   * Return an entry without updating least recently used time.
   * @param {string} key Key.
   * @return {T|undefined} Value.
   */
  peek(e) {
    var t;
    return (t = this.entries_[e]) == null ? void 0 : t.value_;
  }
  /**
   * @return {T} value Value.
   */
  pop() {
    const e = this.oldest_;
    return delete this.entries_[e.key_], e.newer && (e.newer.older = null), this.oldest_ = /** @type {Entry} */
    e.newer, this.oldest_ || (this.newest_ = null), --this.count_, e.value_;
  }
  /**
   * @param {string} key Key.
   * @param {T} value Value.
   */
  replace(e, t) {
    this.get(e), this.entries_[e].value_ = t;
  }
  /**
   * @param {string} key Key.
   * @param {T} value Value.
   */
  set(e, t) {
    te(
      !(e in this.entries_),
      "Tried to set a value for a key that is used already"
    );
    const i = {
      key_: e,
      newer: null,
      older: this.newest_,
      value_: t
    };
    this.newest_ ? this.newest_.newer = i : this.oldest_ = i, this.newest_ = i, this.entries_[e] = i, ++this.count_;
  }
  /**
   * Set a maximum number of entries for the cache.
   * @param {number} size Cache size.
   * @api
   */
  setSize(e) {
    this.highWaterMark = e;
  }
}
function Nl(n, e, t, i) {
  return i !== void 0 ? (i[0] = n, i[1] = e, i[2] = t, i) : [n, e, t];
}
function ur(n, e, t) {
  return n + "/" + e + "/" + t;
}
function vc(n) {
  return ur(n[0], n[1], n[2]);
}
function H_(n) {
  return n.split("/").map(Number);
}
function Q_(n) {
  return (n[1] << n[0]) + n[2];
}
function q_(n, e) {
  const t = n[0], i = n[1], s = n[2];
  if (e.getMinZoom() > t || t > e.getMaxZoom())
    return !1;
  const r = e.getFullTileRange(t);
  return r ? r.containsXY(i, s) : !0;
}
class Ec extends j_ {
  clear() {
    for (; this.getCount() > 0; )
      this.pop().release();
    super.clear();
  }
  /**
   * @param {!Object<string, boolean>} usedTiles Used tiles.
   */
  expireCache(e) {
    for (; this.canExpireCache() && !(this.peekLast().getKey() in e); )
      this.pop().release();
  }
  /**
   * Prune all tiles from the cache that don't have the same z as the newest tile.
   */
  pruneExceptNewestZ() {
    if (this.getCount() === 0)
      return;
    const e = this.peekFirstKey(), i = H_(e)[0];
    this.forEach((s) => {
      s.tileCoord[0] !== i && (this.remove(vc(s.tileCoord)), s.release());
    });
  }
}
const Br = {
  /**
   * Triggered when a tile starts loading.
   * @event module:ol/source/Tile.TileSourceEvent#tileloadstart
   * @api
   */
  TILELOADSTART: "tileloadstart",
  /**
   * Triggered when a tile finishes loading, either when its data is loaded,
   * or when loading was aborted because the tile is no longer needed.
   * @event module:ol/source/Tile.TileSourceEvent#tileloadend
   * @api
   */
  TILELOADEND: "tileloadend",
  /**
   * Triggered if tile loading results in an error. Note that this is not the
   * right place to re-fetch tiles. See {@link module:ol/ImageTile~ImageTile#load}
   * for details.
   * @event module:ol/source/Tile.TileSourceEvent#tileloaderror
   * @api
   */
  TILELOADERROR: "tileloaderror"
};
class xc extends vt {
  /**
   * @param {Options} options Source options.
   */
  constructor(e) {
    super(), this.projection = et(e.projection), this.attributions_ = Gl(e.attributions), this.attributionsCollapsible_ = e.attributionsCollapsible !== void 0 ? e.attributionsCollapsible : !0, this.loading = !1, this.state_ = e.state !== void 0 ? e.state : "ready", this.wrapX_ = e.wrapX !== void 0 ? e.wrapX : !1, this.interpolate_ = !!e.interpolate, this.viewResolver = null, this.viewRejector = null;
    const t = this;
    this.viewPromise_ = new Promise(function(i, s) {
      t.viewResolver = i, t.viewRejector = s;
    });
  }
  /**
   * Get the attribution function for the source.
   * @return {?Attribution} Attribution function.
   * @api
   */
  getAttributions() {
    return this.attributions_;
  }
  /**
   * @return {boolean} Attributions are collapsible.
   * @api
   */
  getAttributionsCollapsible() {
    return this.attributionsCollapsible_;
  }
  /**
   * Get the projection of the source.
   * @return {import("../proj/Projection.js").default|null} Projection.
   * @api
   */
  getProjection() {
    return this.projection;
  }
  /**
   * @param {import("../proj/Projection").default} [projection] Projection.
   * @return {Array<number>|null} Resolutions.
   */
  getResolutions(e) {
    return null;
  }
  /**
   * @return {Promise<import("../View.js").ViewOptions>} A promise for view-related properties.
   */
  getView() {
    return this.viewPromise_;
  }
  /**
   * Get the state of the source, see {@link import("./Source.js").State} for possible states.
   * @return {import("./Source.js").State} State.
   * @api
   */
  getState() {
    return this.state_;
  }
  /**
   * @return {boolean|undefined} Wrap X.
   */
  getWrapX() {
    return this.wrapX_;
  }
  /**
   * @return {boolean} Use linear interpolation when resampling.
   */
  getInterpolate() {
    return this.interpolate_;
  }
  /**
   * Refreshes the source. The source will be cleared, and data from the server will be reloaded.
   * @api
   */
  refresh() {
    this.changed();
  }
  /**
   * Set the attributions of the source.
   * @param {AttributionLike|undefined} attributions Attributions.
   *     Can be passed as `string`, `Array<string>`, {@link module:ol/source/Source~Attribution},
   *     or `undefined`.
   * @api
   */
  setAttributions(e) {
    this.attributions_ = Gl(e), this.changed();
  }
  /**
   * Set the state of the source.
   * @param {import("./Source.js").State} state State.
   */
  setState(e) {
    this.state_ = e, this.changed();
  }
}
function Gl(n) {
  return n ? Array.isArray(n) ? function(e) {
    return n;
  } : typeof n == "function" ? n : function(e) {
    return [n];
  } : null;
}
const Gn = [0, 0, 0], zt = 5;
class J_ {
  /**
   * @param {Options} options Tile grid options.
   */
  constructor(e) {
    this.minZoom = e.minZoom !== void 0 ? e.minZoom : 0, this.resolutions_ = e.resolutions, te(
      r0(
        this.resolutions_,
        /**
         * @param {number} a First resolution
         * @param {number} b Second resolution
         * @return {number} Comparison result
         */
        (s, r) => r - s,
        !0
      ),
      "`resolutions` must be sorted in descending order"
    );
    let t;
    if (!e.origins) {
      for (let s = 0, r = this.resolutions_.length - 1; s < r; ++s)
        if (!t)
          t = this.resolutions_[s] / this.resolutions_[s + 1];
        else if (this.resolutions_[s] / this.resolutions_[s + 1] !== t) {
          t = void 0;
          break;
        }
    }
    this.zoomFactor_ = t, this.maxZoom = this.resolutions_.length - 1, this.origin_ = e.origin !== void 0 ? e.origin : null, this.origins_ = null, e.origins !== void 0 && (this.origins_ = e.origins, te(
      this.origins_.length == this.resolutions_.length,
      "Number of `origins` and `resolutions` must be equal"
    ));
    const i = e.extent;
    i !== void 0 && !this.origin_ && !this.origins_ && (this.origin_ = Mn(i)), te(
      !this.origin_ && this.origins_ || this.origin_ && !this.origins_,
      "Either `origin` or `origins` must be configured, never both"
    ), this.tileSizes_ = null, e.tileSizes !== void 0 && (this.tileSizes_ = e.tileSizes, te(
      this.tileSizes_.length == this.resolutions_.length,
      "Number of `tileSizes` and `resolutions` must be equal"
    )), this.tileSize_ = e.tileSize !== void 0 ? e.tileSize : this.tileSizes_ ? null : Bo, te(
      !this.tileSize_ && this.tileSizes_ || this.tileSize_ && !this.tileSizes_,
      "Either `tileSize` or `tileSizes` must be configured, never both"
    ), this.extent_ = i !== void 0 ? i : null, this.fullTileRanges_ = null, this.tmpSize_ = [0, 0], this.tmpExtent_ = [0, 0, 0, 0], e.sizes !== void 0 ? this.fullTileRanges_ = e.sizes.map((s, r) => {
      const o = new aa(
        Math.min(0, s[0]),
        Math.max(s[0] - 1, -1),
        Math.min(0, s[1]),
        Math.max(s[1] - 1, -1)
      );
      if (i) {
        const a = this.getTileRangeForExtentAndZ(i, r);
        o.minX = Math.max(a.minX, o.minX), o.maxX = Math.min(a.maxX, o.maxX), o.minY = Math.max(a.minY, o.minY), o.maxY = Math.min(a.maxY, o.maxY);
      }
      return o;
    }) : i && this.calculateTileRanges_(i);
  }
  /**
   * Call a function with each tile coordinate for a given extent and zoom level.
   *
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} zoom Integer zoom level.
   * @param {function(import("../tilecoord.js").TileCoord): void} callback Function called with each tile coordinate.
   * @api
   */
  forEachTileCoord(e, t, i) {
    const s = this.getTileRangeForExtentAndZ(e, t);
    for (let r = s.minX, o = s.maxX; r <= o; ++r)
      for (let a = s.minY, l = s.maxY; a <= l; ++a)
        i([t, r, a]);
  }
  /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {function(number, import("../TileRange.js").default): boolean} callback Callback.
   * @param {import("../TileRange.js").default} [tempTileRange] Temporary import("../TileRange.js").default object.
   * @param {import("../extent.js").Extent} [tempExtent] Temporary import("../extent.js").Extent object.
   * @return {boolean} Callback succeeded.
   */
  forEachTileCoordParentTileRange(e, t, i, s) {
    let r, o, a, l = null, h = e[0] - 1;
    for (this.zoomFactor_ === 2 ? (o = e[1], a = e[2]) : l = this.getTileCoordExtent(e, s); h >= this.minZoom; ) {
      if (o !== void 0 && a !== void 0 ? (o = Math.floor(o / 2), a = Math.floor(a / 2), r = Nn(o, o, a, a, i)) : r = this.getTileRangeForExtentAndZ(
        l,
        h,
        i
      ), t(h, r))
        return !0;
      --h;
    }
    return !1;
  }
  /**
   * Get the extent for this tile grid, if it was configured.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */
  getExtent() {
    return this.extent_;
  }
  /**
   * Get the maximum zoom level for the grid.
   * @return {number} Max zoom.
   * @api
   */
  getMaxZoom() {
    return this.maxZoom;
  }
  /**
   * Get the minimum zoom level for the grid.
   * @return {number} Min zoom.
   * @api
   */
  getMinZoom() {
    return this.minZoom;
  }
  /**
   * Get the origin for the grid at the given zoom level.
   * @param {number} z Integer zoom level.
   * @return {import("../coordinate.js").Coordinate} Origin.
   * @api
   */
  getOrigin(e) {
    return this.origin_ ? this.origin_ : this.origins_[e];
  }
  /**
   * Get the resolution for the given zoom level.
   * @param {number} z Integer zoom level.
   * @return {number} Resolution.
   * @api
   */
  getResolution(e) {
    return this.resolutions_[e];
  }
  /**
   * Get the list of resolutions for the tile grid.
   * @return {Array<number>} Resolutions.
   * @api
   */
  getResolutions() {
    return this.resolutions_;
  }
  /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("../TileRange.js").default} [tempTileRange] Temporary import("../TileRange.js").default object.
   * @param {import("../extent.js").Extent} [tempExtent] Temporary import("../extent.js").Extent object.
   * @return {import("../TileRange.js").default|null} Tile range.
   */
  getTileCoordChildTileRange(e, t, i) {
    if (e[0] < this.maxZoom) {
      if (this.zoomFactor_ === 2) {
        const r = e[1] * 2, o = e[2] * 2;
        return Nn(
          r,
          r + 1,
          o,
          o + 1,
          t
        );
      }
      const s = this.getTileCoordExtent(
        e,
        i || this.tmpExtent_
      );
      return this.getTileRangeForExtentAndZ(
        s,
        e[0] + 1,
        t
      );
    }
    return null;
  }
  /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {number} z Integer zoom level.
   * @param {import("../TileRange.js").default} [tempTileRange] Temporary import("../TileRange.js").default object.
   * @return {import("../TileRange.js").default|null} Tile range.
   */
  getTileRangeForTileCoordAndZ(e, t, i) {
    if (t > this.maxZoom || t < this.minZoom)
      return null;
    const s = e[0], r = e[1], o = e[2];
    if (t === s)
      return Nn(
        r,
        o,
        r,
        o,
        i
      );
    if (this.zoomFactor_) {
      const l = Math.pow(this.zoomFactor_, t - s), h = Math.floor(r * l), c = Math.floor(o * l);
      if (t < s)
        return Nn(h, h, c, c, i);
      const u = Math.floor(l * (r + 1)) - 1, d = Math.floor(l * (o + 1)) - 1;
      return Nn(h, u, c, d, i);
    }
    const a = this.getTileCoordExtent(e, this.tmpExtent_);
    return this.getTileRangeForExtentAndZ(a, t, i);
  }
  /**
   * Get a tile range for the given extent and integer zoom level.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} z Integer zoom level.
   * @param {import("../TileRange.js").default} [tempTileRange] Temporary tile range object.
   * @return {import("../TileRange.js").default} Tile range.
   */
  getTileRangeForExtentAndZ(e, t, i) {
    this.getTileCoordForXYAndZ_(e[0], e[3], t, !1, Gn);
    const s = Gn[1], r = Gn[2];
    this.getTileCoordForXYAndZ_(e[2], e[1], t, !0, Gn);
    const o = Gn[1], a = Gn[2];
    return Nn(s, o, r, a, i);
  }
  /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @return {import("../coordinate.js").Coordinate} Tile center.
   */
  getTileCoordCenter(e) {
    const t = this.getOrigin(e[0]), i = this.getResolution(e[0]), s = Ue(this.getTileSize(e[0]), this.tmpSize_);
    return [
      t[0] + (e[1] + 0.5) * s[0] * i,
      t[1] - (e[2] + 0.5) * s[1] * i
    ];
  }
  /**
   * Get the extent of a tile coordinate.
   *
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("../extent.js").Extent} [tempExtent] Temporary extent object.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */
  getTileCoordExtent(e, t) {
    const i = this.getOrigin(e[0]), s = this.getResolution(e[0]), r = Ue(this.getTileSize(e[0]), this.tmpSize_), o = i[0] + e[1] * r[0] * s, a = i[1] - (e[2] + 1) * r[1] * s, l = o + r[0] * s, h = a + r[1] * s;
    return an(o, a, l, h, t);
  }
  /**
   * Get the tile coordinate for the given map coordinate and resolution.  This
   * method considers that coordinates that intersect tile boundaries should be
   * assigned the higher tile coordinate.
   *
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {number} resolution Resolution.
   * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Destination import("../tilecoord.js").TileCoord object.
   * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
   * @api
   */
  getTileCoordForCoordAndResolution(e, t, i) {
    return this.getTileCoordForXYAndResolution_(
      e[0],
      e[1],
      t,
      !1,
      i
    );
  }
  /**
   * Note that this method should not be called for resolutions that correspond
   * to an integer zoom level.  Instead call the `getTileCoordForXYAndZ_` method.
   * @param {number} x X.
   * @param {number} y Y.
   * @param {number} resolution Resolution (for a non-integer zoom level).
   * @param {boolean} reverseIntersectionPolicy Instead of letting edge
   *     intersections go to the higher tile coordinate, let edge intersections
   *     go to the lower tile coordinate.
   * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Temporary import("../tilecoord.js").TileCoord object.
   * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
   * @private
   */
  getTileCoordForXYAndResolution_(e, t, i, s, r) {
    const o = this.getZForResolution(i), a = i / this.getResolution(o), l = this.getOrigin(o), h = Ue(this.getTileSize(o), this.tmpSize_);
    let c = a * (e - l[0]) / i / h[0], u = a * (l[1] - t) / i / h[1];
    return s ? (c = ps(c, zt) - 1, u = ps(u, zt) - 1) : (c = ms(c, zt), u = ms(u, zt)), Nl(o, c, u, r);
  }
  /**
   * Although there is repetition between this method and `getTileCoordForXYAndResolution_`,
   * they should have separate implementations.  This method is for integer zoom
   * levels.  The other method should only be called for resolutions corresponding
   * to non-integer zoom levels.
   * @param {number} x Map x coordinate.
   * @param {number} y Map y coordinate.
   * @param {number} z Integer zoom level.
   * @param {boolean} reverseIntersectionPolicy Instead of letting edge
   *     intersections go to the higher tile coordinate, let edge intersections
   *     go to the lower tile coordinate.
   * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Temporary import("../tilecoord.js").TileCoord object.
   * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
   * @private
   */
  getTileCoordForXYAndZ_(e, t, i, s, r) {
    const o = this.getOrigin(i), a = this.getResolution(i), l = Ue(this.getTileSize(i), this.tmpSize_);
    let h = (e - o[0]) / a / l[0], c = (o[1] - t) / a / l[1];
    return s ? (h = ps(h, zt) - 1, c = ps(c, zt) - 1) : (h = ms(h, zt), c = ms(c, zt)), Nl(i, h, c, r);
  }
  /**
   * Get a tile coordinate given a map coordinate and zoom level.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {number} z Integer zoom level, e.g. the result of a `getZForResolution()` method call
   * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Destination import("../tilecoord.js").TileCoord object.
   * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
   * @api
   */
  getTileCoordForCoordAndZ(e, t, i) {
    return this.getTileCoordForXYAndZ_(
      e[0],
      e[1],
      t,
      !1,
      i
    );
  }
  /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @return {number} Tile resolution.
   */
  getTileCoordResolution(e) {
    return this.resolutions_[e[0]];
  }
  /**
   * Get the tile size for a zoom level. The type of the return value matches the
   * `tileSize` or `tileSizes` that the tile grid was configured with. To always
   * get an {@link import("../size.js").Size}, run the result through {@link module:ol/size.toSize}.
   * @param {number} z Z.
   * @return {number|import("../size.js").Size} Tile size.
   * @api
   */
  getTileSize(e) {
    return this.tileSize_ ? this.tileSize_ : this.tileSizes_[e];
  }
  /**
   * @param {number} z Zoom level.
   * @return {import("../TileRange.js").default|null} Extent tile range for the specified zoom level.
   */
  getFullTileRange(e) {
    return this.fullTileRanges_ ? this.fullTileRanges_[e] : this.extent_ ? this.getTileRangeForExtentAndZ(this.extent_, e) : null;
  }
  /**
   * @param {number} resolution Resolution.
   * @param {number|import("../array.js").NearestDirectionFunction} [opt_direction]
   *     If 0, the nearest resolution will be used.
   *     If 1, the nearest higher resolution (lower Z) will be used. If -1, the
   *     nearest lower resolution (higher Z) will be used. Default is 0.
   *     Use a {@link module:ol/array~NearestDirectionFunction} for more precise control.
   *
   * For example to change tile Z at the midpoint of zoom levels
   * ```js
   * function(value, high, low) {
   *   return value - low * Math.sqrt(high / low);
   * }
   * ```
   * @return {number} Z.
   * @api
   */
  getZForResolution(e, t) {
    const i = No(
      this.resolutions_,
      e,
      t || 0
    );
    return ve(i, this.minZoom, this.maxZoom);
  }
  /**
   * The tile with the provided tile coordinate intersects the given viewport.
   * @param {import('../tilecoord.js').TileCoord} tileCoord Tile coordinate.
   * @param {Array<number>} viewport Viewport as returned from {@link module:ol/extent.getRotatedViewport}.
   * @return {boolean} The tile with the provided tile coordinate intersects the given viewport.
   */
  tileCoordIntersectsViewport(e, t) {
    return rc(
      t,
      0,
      t.length,
      2,
      this.getTileCoordExtent(e)
    );
  }
  /**
   * @param {!import("../extent.js").Extent} extent Extent for this tile grid.
   * @private
   */
  calculateTileRanges_(e) {
    const t = this.resolutions_.length, i = new Array(t);
    for (let s = this.minZoom; s < t; ++s)
      i[s] = this.getTileRangeForExtentAndZ(e, s);
    this.fullTileRanges_ = i;
  }
}
const wc = J_;
function Cc(n) {
  let e = n.getDefaultTileGrid();
  return e || (e = ny(n), n.setDefaultTileGrid(e)), e;
}
function $_(n, e, t) {
  const i = e[0], s = n.getTileCoordCenter(e), r = la(t);
  if (!oi(r, s)) {
    const o = he(r), a = Math.ceil(
      (r[0] - s[0]) / o
    );
    return s[0] += o * a, n.getTileCoordForCoordAndZ(s, i);
  }
  return e;
}
function ey(n, e, t, i) {
  i = i !== void 0 ? i : "top-left";
  const s = Ac(n, e, t);
  return new wc({
    extent: n,
    origin: w0(n, i),
    resolutions: s,
    tileSize: t
  });
}
function ty(n) {
  const e = n || {}, t = e.extent || et("EPSG:3857").getExtent(), i = {
    extent: t,
    minZoom: e.minZoom,
    tileSize: e.tileSize,
    resolutions: Ac(
      t,
      e.maxZoom,
      e.tileSize,
      e.maxResolution
    )
  };
  return new wc(i);
}
function Ac(n, e, t, i) {
  e = e !== void 0 ? e : c0, t = Ue(t !== void 0 ? t : Bo);
  const s = We(n), r = he(n);
  i = i > 0 ? i : Math.max(r / t[0], s / t[1]);
  const o = e + 1, a = new Array(o);
  for (let l = 0; l < o; ++l)
    a[l] = i / Math.pow(2, l);
  return a;
}
function ny(n, e, t, i) {
  const s = la(n);
  return ey(s, e, t, i);
}
function la(n) {
  n = et(n);
  let e = n.getExtent();
  if (!e) {
    const t = 180 * zi.degrees / n.getMetersPerUnit();
    e = an(-t, -t, t, t);
  }
  return e;
}
class iy extends xc {
  /**
   * @param {Options} options SourceTile source options.
   */
  constructor(e) {
    super({
      attributions: e.attributions,
      attributionsCollapsible: e.attributionsCollapsible,
      projection: e.projection,
      state: e.state,
      wrapX: e.wrapX,
      interpolate: e.interpolate
    }), this.on, this.once, this.un, this.opaque_ = e.opaque !== void 0 ? e.opaque : !1, this.tilePixelRatio_ = e.tilePixelRatio !== void 0 ? e.tilePixelRatio : 1, this.tileGrid = e.tileGrid !== void 0 ? e.tileGrid : null;
    const t = [256, 256];
    this.tileGrid && Ue(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()), t), this.tileCache = new Ec(e.cacheSize || 0), this.tmpSize = [0, 0], this.key_ = e.key || "", this.tileOptions = {
      transition: e.transition,
      interpolate: e.interpolate
    }, this.zDirection = e.zDirection ? e.zDirection : 0;
  }
  /**
   * @return {boolean} Can expire cache.
   */
  canExpireCache() {
    return this.tileCache.canExpireCache();
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @param {!Object<string, boolean>} usedTiles Used tiles.
   */
  expireCache(e, t) {
    const i = this.getTileCacheForProjection(e);
    i && i.expireCache(t);
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @param {number} z Zoom level.
   * @param {import("../TileRange.js").default} tileRange Tile range.
   * @param {function(import("../Tile.js").default):(boolean|void)} callback Called with each
   *     loaded tile.  If the callback returns `false`, the tile will not be
   *     considered loaded.
   * @return {boolean} The tile range is fully covered with loaded tiles.
   */
  forEachLoadedTile(e, t, i, s) {
    const r = this.getTileCacheForProjection(e);
    if (!r)
      return !1;
    let o = !0, a, l, h;
    for (let c = i.minX; c <= i.maxX; ++c)
      for (let u = i.minY; u <= i.maxY; ++u)
        l = ur(t, c, u), h = !1, r.containsKey(l) && (a = /** @type {!import("../Tile.js").default} */
        r.get(l), h = a.getState() === N.LOADED, h && (h = s(a) !== !1)), h || (o = !1);
    return o;
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {number} Gutter.
   */
  getGutterForProjection(e) {
    return 0;
  }
  /**
   * Return the key to be used for all tiles in the source.
   * @return {string} The key for all tiles.
   */
  getKey() {
    return this.key_;
  }
  /**
   * Set the value to be used as the key for all tiles in the source.
   * @param {string} key The key for tiles.
   * @protected
   */
  setKey(e) {
    this.key_ !== e && (this.key_ = e, this.changed());
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {boolean} Opaque.
   */
  getOpaque(e) {
    return this.opaque_;
  }
  /**
   * @param {import("../proj/Projection").default} [projection] Projection.
   * @return {Array<number>|null} Resolutions.
   */
  getResolutions(e) {
    const t = e ? this.getTileGridForProjection(e) : this.tileGrid;
    return t ? t.getResolutions() : null;
  }
  /**
   * @abstract
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {!import("../Tile.js").default} Tile.
   */
  getTile(e, t, i, s, r) {
    return ie();
  }
  /**
   * Return the tile grid of the tile source.
   * @return {import("../tilegrid/TileGrid.js").default|null} Tile grid.
   * @api
   */
  getTileGrid() {
    return this.tileGrid;
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {!import("../tilegrid/TileGrid.js").default} Tile grid.
   */
  getTileGridForProjection(e) {
    return this.tileGrid ? this.tileGrid : Cc(e);
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {import("../TileCache.js").default} Tile cache.
   * @protected
   */
  getTileCacheForProjection(e) {
    const t = this.getProjection();
    return te(
      t === null || Wn(t, e),
      "A VectorTile source can only be rendered if it has a projection compatible with the view projection."
    ), this.tileCache;
  }
  /**
   * Get the tile pixel ratio for this source. Subclasses may override this
   * method, which is meant to return a supported pixel ratio that matches the
   * provided `pixelRatio` as close as possible.
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} Tile pixel ratio.
   */
  getTilePixelRatio(e) {
    return this.tilePixelRatio_;
  }
  /**
   * @param {number} z Z.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {import("../size.js").Size} Tile size.
   */
  getTilePixelSize(e, t, i) {
    const s = this.getTileGridForProjection(i), r = this.getTilePixelRatio(t), o = Ue(s.getTileSize(e), this.tmpSize);
    return r == 1 ? o : Y_(o, r, this.tmpSize);
  }
  /**
   * Returns a tile coordinate wrapped around the x-axis. When the tile coordinate
   * is outside the resolution and extent range of the tile grid, `null` will be
   * returned.
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("../proj/Projection.js").default} [projection] Projection.
   * @return {import("../tilecoord.js").TileCoord} Tile coordinate to be passed to the tileUrlFunction or
   *     null if no tile URL should be created for the passed `tileCoord`.
   */
  getTileCoordForTileUrlFunction(e, t) {
    t = t !== void 0 ? t : this.getProjection();
    const i = this.getTileGridForProjection(t);
    return this.getWrapX() && t.isGlobal() && (e = $_(i, e, t)), q_(e, i) ? e : null;
  }
  /**
   * Remove all cached tiles from the source. The next render cycle will fetch new tiles.
   * @api
   */
  clear() {
    this.tileCache.clear();
  }
  refresh() {
    this.clear(), super.refresh();
  }
  /**
   * Increases the cache size if needed
   * @param {number} tileCount Minimum number of tiles needed.
   * @param {import("../proj/Projection.js").default} projection Projection.
   */
  updateCacheSize(e, t) {
    const i = this.getTileCacheForProjection(t);
    e > i.highWaterMark && (i.highWaterMark = e);
  }
  /**
   * Marks a tile coord as being used, without triggering a load.
   * @abstract
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {import("../proj/Projection.js").default} projection Projection.
   */
  useTile(e, t, i, s) {
  }
}
class sy extends Ft {
  /**
   * @param {string} type Type.
   * @param {import("../Tile.js").default} tile The tile.
   */
  constructor(e, t) {
    super(e), this.tile = t;
  }
}
function ry(n, e) {
  const t = /\{z\}/g, i = /\{x\}/g, s = /\{y\}/g, r = /\{-y\}/g;
  return (
    /**
     * @param {import("./tilecoord.js").TileCoord} tileCoord Tile Coordinate.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("./proj/Projection.js").default} projection Projection.
     * @return {string|undefined} Tile URL.
     */
    function(o, a, l) {
      if (o)
        return n.replace(t, o[0].toString()).replace(i, o[1].toString()).replace(s, o[2].toString()).replace(r, function() {
          const h = o[0], c = e.getFullTileRange(h);
          if (!c)
            throw new Error(
              "The {-y} placeholder requires a tile grid with extent"
            );
          return (c.getHeight() - o[2] - 1).toString();
        });
    }
  );
}
function oy(n, e) {
  const t = n.length, i = new Array(t);
  for (let s = 0; s < t; ++s)
    i[s] = ry(n[s], e);
  return ay(i);
}
function ay(n) {
  return n.length === 1 ? n[0] : (
    /**
     * @param {import("./tilecoord.js").TileCoord} tileCoord Tile Coordinate.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("./proj/Projection.js").default} projection Projection.
     * @return {string|undefined} Tile URL.
     */
    function(e, t, i) {
      if (!e)
        return;
      const s = Q_(e), r = qn(s, n.length);
      return n[r](e, t, i);
    }
  );
}
function ly(n) {
  const e = [];
  let t = /\{([a-z])-([a-z])\}/.exec(n);
  if (t) {
    const i = t[1].charCodeAt(0), s = t[2].charCodeAt(0);
    let r;
    for (r = i; r <= s; ++r)
      e.push(n.replace(t[0], String.fromCharCode(r)));
    return e;
  }
  if (t = /\{(\d+)-(\d+)\}/.exec(n), t) {
    const i = parseInt(t[2], 10);
    for (let s = parseInt(t[1], 10); s <= i; s++)
      e.push(n.replace(t[0], s.toString()));
    return e;
  }
  return e.push(n), e;
}
class ha extends iy {
  /**
   * @param {Options} options Image tile options.
   */
  constructor(e) {
    super({
      attributions: e.attributions,
      cacheSize: e.cacheSize,
      opaque: e.opaque,
      projection: e.projection,
      state: e.state,
      tileGrid: e.tileGrid,
      tilePixelRatio: e.tilePixelRatio,
      wrapX: e.wrapX,
      transition: e.transition,
      interpolate: e.interpolate,
      key: e.key,
      attributionsCollapsible: e.attributionsCollapsible,
      zDirection: e.zDirection
    }), this.generateTileUrlFunction_ = this.tileUrlFunction === ha.prototype.tileUrlFunction, this.tileLoadFunction = e.tileLoadFunction, e.tileUrlFunction && (this.tileUrlFunction = e.tileUrlFunction), this.urls = null, e.urls ? this.setUrls(e.urls) : e.url && this.setUrl(e.url), this.tileLoadingKeys_ = {};
  }
  /**
   * Return the tile load function of the source.
   * @return {import("../Tile.js").LoadFunction} TileLoadFunction
   * @api
   */
  getTileLoadFunction() {
    return this.tileLoadFunction;
  }
  /**
   * Return the tile URL function of the source.
   * @return {import("../Tile.js").UrlFunction} TileUrlFunction
   * @api
   */
  getTileUrlFunction() {
    return Object.getPrototypeOf(this).tileUrlFunction === this.tileUrlFunction ? this.tileUrlFunction.bind(this) : this.tileUrlFunction;
  }
  /**
   * Return the URLs used for this source.
   * When a tileUrlFunction is used instead of url or urls,
   * null will be returned.
   * @return {!Array<string>|null} URLs.
   * @api
   */
  getUrls() {
    return this.urls;
  }
  /**
   * Handle tile change events.
   * @param {import("../events/Event.js").default} event Event.
   * @protected
   */
  handleTileChange(e) {
    const t = (
      /** @type {import("../Tile.js").default} */
      e.target
    ), i = oe(t), s = t.getState();
    let r;
    s == N.LOADING ? (this.tileLoadingKeys_[i] = !0, r = Br.TILELOADSTART) : i in this.tileLoadingKeys_ && (delete this.tileLoadingKeys_[i], r = s == N.ERROR ? Br.TILELOADERROR : s == N.LOADED ? Br.TILELOADEND : void 0), r != null && this.dispatchEvent(new sy(r, t));
  }
  /**
   * Set the tile load function of the source.
   * @param {import("../Tile.js").LoadFunction} tileLoadFunction Tile load function.
   * @api
   */
  setTileLoadFunction(e) {
    this.tileCache.clear(), this.tileLoadFunction = e, this.changed();
  }
  /**
   * Set the tile URL function of the source.
   * @param {import("../Tile.js").UrlFunction} tileUrlFunction Tile URL function.
   * @param {string} [key] Optional new tile key for the source.
   * @api
   */
  setTileUrlFunction(e, t) {
    this.tileUrlFunction = e, this.tileCache.pruneExceptNewestZ(), typeof t < "u" ? this.setKey(t) : this.changed();
  }
  /**
   * Set the URL to use for requests.
   * @param {string} url URL.
   * @api
   */
  setUrl(e) {
    const t = ly(e);
    this.urls = t, this.setUrls(t);
  }
  /**
   * Set the URLs to use for requests.
   * @param {Array<string>} urls URLs.
   * @api
   */
  setUrls(e) {
    this.urls = e;
    const t = e.join(`
`);
    this.generateTileUrlFunction_ ? this.setTileUrlFunction(oy(e, this.tileGrid), t) : this.setKey(t);
  }
  /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {string|undefined} Tile URL.
   */
  tileUrlFunction(e, t, i) {
  }
  /**
   * Marks a tile coord as being used, without triggering a load.
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   */
  useTile(e, t, i) {
    const s = ur(e, t, i);
    this.tileCache.containsKey(s) && this.tileCache.get(s);
  }
}
class hy extends ha {
  /**
   * @param {!Options} options Image tile options.
   */
  constructor(e) {
    super({
      attributions: e.attributions,
      cacheSize: e.cacheSize,
      opaque: e.opaque,
      projection: e.projection,
      state: e.state,
      tileGrid: e.tileGrid,
      tileLoadFunction: e.tileLoadFunction ? e.tileLoadFunction : cy,
      tilePixelRatio: e.tilePixelRatio,
      tileUrlFunction: e.tileUrlFunction,
      url: e.url,
      urls: e.urls,
      wrapX: e.wrapX,
      transition: e.transition,
      interpolate: e.interpolate !== void 0 ? e.interpolate : !0,
      key: e.key,
      attributionsCollapsible: e.attributionsCollapsible,
      zDirection: e.zDirection
    }), this.crossOrigin = e.crossOrigin !== void 0 ? e.crossOrigin : null, this.tileClass = e.tileClass !== void 0 ? e.tileClass : yc, this.tileCacheForProjection = {}, this.tileGridForProjection = {}, this.reprojectionErrorThreshold_ = e.reprojectionErrorThreshold, this.renderReprojectionEdges_ = !1;
  }
  /**
   * @return {boolean} Can expire cache.
   */
  canExpireCache() {
    if (this.tileCache.canExpireCache())
      return !0;
    for (const e in this.tileCacheForProjection)
      if (this.tileCacheForProjection[e].canExpireCache())
        return !0;
    return !1;
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @param {!Object<string, boolean>} usedTiles Used tiles.
   */
  expireCache(e, t) {
    const i = this.getTileCacheForProjection(e);
    this.tileCache.expireCache(
      this.tileCache == i ? t : {}
    );
    for (const s in this.tileCacheForProjection) {
      const r = this.tileCacheForProjection[s];
      r.expireCache(r == i ? t : {});
    }
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {number} Gutter.
   */
  getGutterForProjection(e) {
    return this.getProjection() && e && !Wn(this.getProjection(), e) ? 0 : this.getGutter();
  }
  /**
   * @return {number} Gutter.
   */
  getGutter() {
    return 0;
  }
  /**
   * Return the key to be used for all tiles in the source.
   * @return {string} The key for all tiles.
   */
  getKey() {
    let e = super.getKey();
    return this.getInterpolate() || (e += ":disable-interpolation"), e;
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {boolean} Opaque.
   */
  getOpaque(e) {
    return this.getProjection() && e && !Wn(this.getProjection(), e) ? !1 : super.getOpaque(e);
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {!import("../tilegrid/TileGrid.js").default} Tile grid.
   */
  getTileGridForProjection(e) {
    const t = this.getProjection();
    if (this.tileGrid && (!t || Wn(t, e)))
      return this.tileGrid;
    const i = oe(e);
    return i in this.tileGridForProjection || (this.tileGridForProjection[i] = Cc(e)), this.tileGridForProjection[i];
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {import("../TileCache.js").default} Tile cache.
   */
  getTileCacheForProjection(e) {
    const t = this.getProjection();
    if (!t || Wn(t, e))
      return this.tileCache;
    const i = oe(e);
    return i in this.tileCacheForProjection || (this.tileCacheForProjection[i] = new Ec(
      this.tileCache.highWaterMark
    )), this.tileCacheForProjection[i];
  }
  /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @param {string} key The key set on the tile.
   * @return {!ImageTile} Tile.
   * @private
   */
  createTile_(e, t, i, s, r, o) {
    const a = [e, t, i], l = this.getTileCoordForTileUrlFunction(
      a,
      r
    ), h = l ? this.tileUrlFunction(l, s, r) : void 0, c = new this.tileClass(
      a,
      h !== void 0 ? N.IDLE : N.EMPTY,
      h !== void 0 ? h : "",
      this.crossOrigin,
      this.tileLoadFunction,
      this.tileOptions
    );
    return c.key = o, c.addEventListener(Z.CHANGE, this.handleTileChange.bind(this)), c;
  }
  /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {!(ImageTile|ReprojTile)} Tile.
   */
  getTile(e, t, i, s, r) {
    const o = this.getProjection();
    if (!o || !r || Wn(o, r))
      return this.getTileInternal(
        e,
        t,
        i,
        s,
        o || r
      );
    const a = this.getTileCacheForProjection(r), l = [e, t, i];
    let h;
    const c = vc(l);
    a.containsKey(c) && (h = a.get(c));
    const u = this.getKey();
    if (h && h.key == u)
      return h;
    const d = this.getTileGridForProjection(o), f = this.getTileGridForProjection(r), g = this.getTileCoordForTileUrlFunction(
      l,
      r
    ), m = new po(
      o,
      d,
      r,
      f,
      l,
      g,
      this.getTilePixelRatio(s),
      this.getGutter(),
      (p, _, y, x) => this.getTileInternal(p, _, y, x, o),
      this.reprojectionErrorThreshold_,
      this.renderReprojectionEdges_,
      this.tileOptions
    );
    return m.key = u, h ? (m.interimTile = h, m.refreshInterimChain(), a.replace(c, m)) : a.set(c, m), m;
  }
  /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {number} pixelRatio Pixel ratio.
   * @param {!import("../proj/Projection.js").default} projection Projection.
   * @return {!ImageTile} Tile.
   * @protected
   */
  getTileInternal(e, t, i, s, r) {
    let o = null;
    const a = ur(e, t, i), l = this.getKey();
    if (!this.tileCache.containsKey(a))
      o = this.createTile_(e, t, i, s, r, l), this.tileCache.set(a, o);
    else if (o = this.tileCache.get(a), o.key != l) {
      const h = o;
      o = this.createTile_(e, t, i, s, r, l), h.getState() == N.IDLE ? o.interimTile = h.interimTile : o.interimTile = h, o.refreshInterimChain(), this.tileCache.replace(a, o);
    }
    return o;
  }
  /**
   * Sets whether to render reprojection edges or not (usually for debugging).
   * @param {boolean} render Render the edges.
   * @api
   */
  setRenderReprojectionEdges(e) {
    if (this.renderReprojectionEdges_ != e) {
      this.renderReprojectionEdges_ = e;
      for (const t in this.tileCacheForProjection)
        this.tileCacheForProjection[t].clear();
      this.changed();
    }
  }
  /**
   * Sets the tile grid to use when reprojecting the tiles to the given
   * projection instead of the default tile grid for the projection.
   *
   * This can be useful when the default tile grid cannot be created
   * (e.g. projection has no extent defined) or
   * for optimization reasons (custom tile size, resolutions, ...).
   *
   * @param {import("../proj.js").ProjectionLike} projection Projection.
   * @param {import("../tilegrid/TileGrid.js").default} tilegrid Tile grid to use for the projection.
   * @api
   */
  setTileGridForProjection(e, t) {
    const i = et(e);
    if (i) {
      const s = oe(i);
      s in this.tileGridForProjection || (this.tileGridForProjection[s] = t);
    }
  }
  clear() {
    super.clear();
    for (const e in this.tileCacheForProjection)
      this.tileCacheForProjection[e].clear();
  }
}
function cy(n, e) {
  n.getImage().src = e;
}
class uy extends hy {
  /**
   * @param {Options} [options] XYZ options.
   */
  constructor(e) {
    e = e || {};
    const t = e.projection !== void 0 ? e.projection : "EPSG:3857", i = e.tileGrid !== void 0 ? e.tileGrid : ty({
      extent: la(t),
      maxResolution: e.maxResolution,
      maxZoom: e.maxZoom,
      minZoom: e.minZoom,
      tileSize: e.tileSize
    });
    super({
      attributions: e.attributions,
      cacheSize: e.cacheSize,
      crossOrigin: e.crossOrigin,
      interpolate: e.interpolate,
      opaque: e.opaque,
      projection: t,
      reprojectionErrorThreshold: e.reprojectionErrorThreshold,
      tileGrid: i,
      tileLoadFunction: e.tileLoadFunction,
      tilePixelRatio: e.tilePixelRatio,
      tileUrlFunction: e.tileUrlFunction,
      url: e.url,
      urls: e.urls,
      wrapX: e.wrapX !== void 0 ? e.wrapX : !0,
      transition: e.transition,
      attributionsCollapsible: e.attributionsCollapsible,
      zDirection: e.zDirection
    }), this.gutter_ = e.gutter !== void 0 ? e.gutter : 0;
  }
  /**
   * @return {number} Gutter.
   */
  getGutter() {
    return this.gutter_;
  }
}
const dy = '&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.';
class fy extends uy {
  /**
   * @param {Options} [options] Open Street Map options.
   */
  constructor(e) {
    e = e || {};
    let t;
    e.attributions !== void 0 ? t = e.attributions : t = [dy];
    const i = e.crossOrigin !== void 0 ? e.crossOrigin : "anonymous", s = e.url !== void 0 ? e.url : "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
    super({
      attributions: t,
      attributionsCollapsible: !1,
      cacheSize: e.cacheSize,
      crossOrigin: i,
      interpolate: e.interpolate,
      maxZoom: e.maxZoom !== void 0 ? e.maxZoom : 19,
      opaque: e.opaque !== void 0 ? e.opaque : !0,
      reprojectionErrorThreshold: e.reprojectionErrorThreshold,
      tileLoadFunction: e.tileLoadFunction,
      transition: e.transition,
      url: s,
      wrapX: e.wrapX,
      zDirection: e.zDirection
    });
  }
}
const gy = fy, Ne = {
  /**
   * Triggered when an item is added to the collection.
   * @event module:ol/Collection.CollectionEvent#add
   * @api
   */
  ADD: "add",
  /**
   * Triggered when an item is removed from the collection.
   * @event module:ol/Collection.CollectionEvent#remove
   * @api
   */
  REMOVE: "remove"
}, Bl = {
  LENGTH: "length"
};
class Es extends Ft {
  /**
   * @param {import("./CollectionEventType.js").default} type Type.
   * @param {T} element Element.
   * @param {number} index The index of the added or removed element.
   */
  constructor(e, t, i) {
    super(e), this.element = t, this.index = i;
  }
}
class dt extends vt {
  /**
   * @param {Array<T>} [array] Array.
   * @param {Options} [options] Collection options.
   */
  constructor(e, t) {
    if (super(), this.on, this.once, this.un, t = t || {}, this.unique_ = !!t.unique, this.array_ = e || [], this.unique_)
      for (let i = 0, s = this.array_.length; i < s; ++i)
        this.assertUnique_(this.array_[i], i);
    this.updateLength_();
  }
  /**
   * Remove all elements from the collection.
   * @api
   */
  clear() {
    for (; this.getLength() > 0; )
      this.pop();
  }
  /**
   * Add elements to the collection.  This pushes each item in the provided array
   * to the end of the collection.
   * @param {!Array<T>} arr Array.
   * @return {Collection<T>} This collection.
   * @api
   */
  extend(e) {
    for (let t = 0, i = e.length; t < i; ++t)
      this.push(e[t]);
    return this;
  }
  /**
   * Iterate over each element, calling the provided callback.
   * @param {function(T, number, Array<T>): *} f The function to call
   *     for every element. This function takes 3 arguments (the element, the
   *     index and the array). The return value is ignored.
   * @api
   */
  forEach(e) {
    const t = this.array_;
    for (let i = 0, s = t.length; i < s; ++i)
      e(t[i], i, t);
  }
  /**
   * Get a reference to the underlying Array object. Warning: if the array
   * is mutated, no events will be dispatched by the collection, and the
   * collection's "length" property won't be in sync with the actual length
   * of the array.
   * @return {!Array<T>} Array.
   * @api
   */
  getArray() {
    return this.array_;
  }
  /**
   * Get the element at the provided index.
   * @param {number} index Index.
   * @return {T} Element.
   * @api
   */
  item(e) {
    return this.array_[e];
  }
  /**
   * Get the length of this collection.
   * @return {number} The length of the array.
   * @observable
   * @api
   */
  getLength() {
    return this.get(Bl.LENGTH);
  }
  /**
   * Insert an element at the provided index.
   * @param {number} index Index.
   * @param {T} elem Element.
   * @api
   */
  insertAt(e, t) {
    if (e < 0 || e > this.getLength())
      throw new Error("Index out of bounds: " + e);
    this.unique_ && this.assertUnique_(t), this.array_.splice(e, 0, t), this.updateLength_(), this.dispatchEvent(
      new Es(Ne.ADD, t, e)
    );
  }
  /**
   * Remove the last element of the collection and return it.
   * Return `undefined` if the collection is empty.
   * @return {T|undefined} Element.
   * @api
   */
  pop() {
    return this.removeAt(this.getLength() - 1);
  }
  /**
   * Insert the provided element at the end of the collection.
   * @param {T} elem Element.
   * @return {number} New length of the collection.
   * @api
   */
  push(e) {
    this.unique_ && this.assertUnique_(e);
    const t = this.getLength();
    return this.insertAt(t, e), this.getLength();
  }
  /**
   * Remove the first occurrence of an element from the collection.
   * @param {T} elem Element.
   * @return {T|undefined} The removed element or undefined if none found.
   * @api
   */
  remove(e) {
    const t = this.array_;
    for (let i = 0, s = t.length; i < s; ++i)
      if (t[i] === e)
        return this.removeAt(i);
  }
  /**
   * Remove the element at the provided index and return it.
   * Return `undefined` if the collection does not contain this index.
   * @param {number} index Index.
   * @return {T|undefined} Value.
   * @api
   */
  removeAt(e) {
    if (e < 0 || e >= this.getLength())
      return;
    const t = this.array_[e];
    return this.array_.splice(e, 1), this.updateLength_(), this.dispatchEvent(
      /** @type {CollectionEvent<T>} */
      new Es(Ne.REMOVE, t, e)
    ), t;
  }
  /**
   * Set the element at the provided index.
   * @param {number} index Index.
   * @param {T} elem Element.
   * @api
   */
  setAt(e, t) {
    const i = this.getLength();
    if (e >= i) {
      this.insertAt(e, t);
      return;
    }
    if (e < 0)
      throw new Error("Index out of bounds: " + e);
    this.unique_ && this.assertUnique_(t, e);
    const s = this.array_[e];
    this.array_[e] = t, this.dispatchEvent(
      /** @type {CollectionEvent<T>} */
      new Es(Ne.REMOVE, s, e)
    ), this.dispatchEvent(
      /** @type {CollectionEvent<T>} */
      new Es(Ne.ADD, t, e)
    );
  }
  /**
   * @private
   */
  updateLength_() {
    this.set(Bl.LENGTH, this.array_.length);
  }
  /**
   * @private
   * @param {T} elem Element.
   * @param {number} [except] Optional index to ignore.
   */
  assertUnique_(e, t) {
    for (let i = 0, s = this.array_.length; i < s; ++i)
      if (this.array_[i] === e && i !== t)
        throw new Error("Duplicate item added to a unique collection");
  }
}
function my(n, e, t, i, s) {
  Ic(n, e, t || 0, i || n.length - 1, s || py);
}
function Ic(n, e, t, i, s) {
  for (; i > t; ) {
    if (i - t > 600) {
      var r = i - t + 1, o = e - t + 1, a = Math.log(r), l = 0.5 * Math.exp(2 * a / 3), h = 0.5 * Math.sqrt(a * l * (r - l) / r) * (o - r / 2 < 0 ? -1 : 1), c = Math.max(t, Math.floor(e - o * l / r + h)), u = Math.min(i, Math.floor(e + (r - o) * l / r + h));
      Ic(n, e, c, u, s);
    }
    var d = n[e], f = t, g = i;
    for (Ai(n, t, e), s(n[i], d) > 0 && Ai(n, t, i); f < g; ) {
      for (Ai(n, f, g), f++, g--; s(n[f], d) < 0; )
        f++;
      for (; s(n[g], d) > 0; )
        g--;
    }
    s(n[t], d) === 0 ? Ai(n, t, g) : (g++, Ai(n, g, i)), g <= e && (t = g + 1), e <= g && (i = g - 1);
  }
}
function Ai(n, e, t) {
  var i = n[e];
  n[e] = n[t], n[t] = i;
}
function py(n, e) {
  return n < e ? -1 : n > e ? 1 : 0;
}
let Tc = class {
  constructor(e = 9) {
    this._maxEntries = Math.max(4, e), this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4)), this.clear();
  }
  all() {
    return this._all(this.data, []);
  }
  search(e) {
    let t = this.data;
    const i = [];
    if (!ws(e, t))
      return i;
    const s = this.toBBox, r = [];
    for (; t; ) {
      for (let o = 0; o < t.children.length; o++) {
        const a = t.children[o], l = t.leaf ? s(a) : a;
        ws(e, l) && (t.leaf ? i.push(a) : Wr(e, l) ? this._all(a, i) : r.push(a));
      }
      t = r.pop();
    }
    return i;
  }
  collides(e) {
    let t = this.data;
    if (!ws(e, t))
      return !1;
    const i = [];
    for (; t; ) {
      for (let s = 0; s < t.children.length; s++) {
        const r = t.children[s], o = t.leaf ? this.toBBox(r) : r;
        if (ws(e, o)) {
          if (t.leaf || Wr(e, o))
            return !0;
          i.push(r);
        }
      }
      t = i.pop();
    }
    return !1;
  }
  load(e) {
    if (!(e && e.length))
      return this;
    if (e.length < this._minEntries) {
      for (let i = 0; i < e.length; i++)
        this.insert(e[i]);
      return this;
    }
    let t = this._build(e.slice(), 0, e.length - 1, 0);
    if (!this.data.children.length)
      this.data = t;
    else if (this.data.height === t.height)
      this._splitRoot(this.data, t);
    else {
      if (this.data.height < t.height) {
        const i = this.data;
        this.data = t, t = i;
      }
      this._insert(t, this.data.height - t.height - 1, !0);
    }
    return this;
  }
  insert(e) {
    return e && this._insert(e, this.data.height - 1), this;
  }
  clear() {
    return this.data = Kn([]), this;
  }
  remove(e, t) {
    if (!e)
      return this;
    let i = this.data;
    const s = this.toBBox(e), r = [], o = [];
    let a, l, h;
    for (; i || r.length; ) {
      if (i || (i = r.pop(), l = r[r.length - 1], a = o.pop(), h = !0), i.leaf) {
        const c = _y(e, i.children, t);
        if (c !== -1)
          return i.children.splice(c, 1), r.push(i), this._condense(r), this;
      }
      !h && !i.leaf && Wr(i, s) ? (r.push(i), o.push(a), a = 0, l = i, i = i.children[0]) : l ? (a++, i = l.children[a], h = !1) : i = null;
    }
    return this;
  }
  toBBox(e) {
    return e;
  }
  compareMinX(e, t) {
    return e.minX - t.minX;
  }
  compareMinY(e, t) {
    return e.minY - t.minY;
  }
  toJSON() {
    return this.data;
  }
  fromJSON(e) {
    return this.data = e, this;
  }
  _all(e, t) {
    const i = [];
    for (; e; )
      e.leaf ? t.push(...e.children) : i.push(...e.children), e = i.pop();
    return t;
  }
  _build(e, t, i, s) {
    const r = i - t + 1;
    let o = this._maxEntries, a;
    if (r <= o)
      return a = Kn(e.slice(t, i + 1)), Bn(a, this.toBBox), a;
    s || (s = Math.ceil(Math.log(r) / Math.log(o)), o = Math.ceil(r / Math.pow(o, s - 1))), a = Kn([]), a.leaf = !1, a.height = s;
    const l = Math.ceil(r / o), h = l * Math.ceil(Math.sqrt(o));
    zl(e, t, i, h, this.compareMinX);
    for (let c = t; c <= i; c += h) {
      const u = Math.min(c + h - 1, i);
      zl(e, c, u, l, this.compareMinY);
      for (let d = c; d <= u; d += l) {
        const f = Math.min(d + l - 1, u);
        a.children.push(this._build(e, d, f, s - 1));
      }
    }
    return Bn(a, this.toBBox), a;
  }
  _chooseSubtree(e, t, i, s) {
    for (; s.push(t), !(t.leaf || s.length - 1 === i); ) {
      let r = 1 / 0, o = 1 / 0, a;
      for (let l = 0; l < t.children.length; l++) {
        const h = t.children[l], c = zr(h), u = Ey(e, h) - c;
        u < o ? (o = u, r = c < r ? c : r, a = h) : u === o && c < r && (r = c, a = h);
      }
      t = a || t.children[0];
    }
    return t;
  }
  _insert(e, t, i) {
    const s = i ? e : this.toBBox(e), r = [], o = this._chooseSubtree(s, this.data, t, r);
    for (o.children.push(e), Ri(o, s); t >= 0 && r[t].children.length > this._maxEntries; )
      this._split(r, t), t--;
    this._adjustParentBBoxes(s, r, t);
  }
  // split overflowed node into two
  _split(e, t) {
    const i = e[t], s = i.children.length, r = this._minEntries;
    this._chooseSplitAxis(i, r, s);
    const o = this._chooseSplitIndex(i, r, s), a = Kn(i.children.splice(o, i.children.length - o));
    a.height = i.height, a.leaf = i.leaf, Bn(i, this.toBBox), Bn(a, this.toBBox), t ? e[t - 1].children.push(a) : this._splitRoot(i, a);
  }
  _splitRoot(e, t) {
    this.data = Kn([e, t]), this.data.height = e.height + 1, this.data.leaf = !1, Bn(this.data, this.toBBox);
  }
  _chooseSplitIndex(e, t, i) {
    let s, r = 1 / 0, o = 1 / 0;
    for (let a = t; a <= i - t; a++) {
      const l = Si(e, 0, a, this.toBBox), h = Si(e, a, i, this.toBBox), c = xy(l, h), u = zr(l) + zr(h);
      c < r ? (r = c, s = a, o = u < o ? u : o) : c === r && u < o && (o = u, s = a);
    }
    return s || i - t;
  }
  // sorts node children by the best axis for split
  _chooseSplitAxis(e, t, i) {
    const s = e.leaf ? this.compareMinX : yy, r = e.leaf ? this.compareMinY : vy, o = this._allDistMargin(e, t, i, s), a = this._allDistMargin(e, t, i, r);
    o < a && e.children.sort(s);
  }
  // total margin of all possible split distributions where each node is at least m full
  _allDistMargin(e, t, i, s) {
    e.children.sort(s);
    const r = this.toBBox, o = Si(e, 0, t, r), a = Si(e, i - t, i, r);
    let l = xs(o) + xs(a);
    for (let h = t; h < i - t; h++) {
      const c = e.children[h];
      Ri(o, e.leaf ? r(c) : c), l += xs(o);
    }
    for (let h = i - t - 1; h >= t; h--) {
      const c = e.children[h];
      Ri(a, e.leaf ? r(c) : c), l += xs(a);
    }
    return l;
  }
  _adjustParentBBoxes(e, t, i) {
    for (let s = i; s >= 0; s--)
      Ri(t[s], e);
  }
  _condense(e) {
    for (let t = e.length - 1, i; t >= 0; t--)
      e[t].children.length === 0 ? t > 0 ? (i = e[t - 1].children, i.splice(i.indexOf(e[t]), 1)) : this.clear() : Bn(e[t], this.toBBox);
  }
};
function _y(n, e, t) {
  if (!t)
    return e.indexOf(n);
  for (let i = 0; i < e.length; i++)
    if (t(n, e[i]))
      return i;
  return -1;
}
function Bn(n, e) {
  Si(n, 0, n.children.length, e, n);
}
function Si(n, e, t, i, s) {
  s || (s = Kn(null)), s.minX = 1 / 0, s.minY = 1 / 0, s.maxX = -1 / 0, s.maxY = -1 / 0;
  for (let r = e; r < t; r++) {
    const o = n.children[r];
    Ri(s, n.leaf ? i(o) : o);
  }
  return s;
}
function Ri(n, e) {
  return n.minX = Math.min(n.minX, e.minX), n.minY = Math.min(n.minY, e.minY), n.maxX = Math.max(n.maxX, e.maxX), n.maxY = Math.max(n.maxY, e.maxY), n;
}
function yy(n, e) {
  return n.minX - e.minX;
}
function vy(n, e) {
  return n.minY - e.minY;
}
function zr(n) {
  return (n.maxX - n.minX) * (n.maxY - n.minY);
}
function xs(n) {
  return n.maxX - n.minX + (n.maxY - n.minY);
}
function Ey(n, e) {
  return (Math.max(e.maxX, n.maxX) - Math.min(e.minX, n.minX)) * (Math.max(e.maxY, n.maxY) - Math.min(e.minY, n.minY));
}
function xy(n, e) {
  const t = Math.max(n.minX, e.minX), i = Math.max(n.minY, e.minY), s = Math.min(n.maxX, e.maxX), r = Math.min(n.maxY, e.maxY);
  return Math.max(0, s - t) * Math.max(0, r - i);
}
function Wr(n, e) {
  return n.minX <= e.minX && n.minY <= e.minY && e.maxX <= n.maxX && e.maxY <= n.maxY;
}
function ws(n, e) {
  return e.minX <= n.maxX && e.minY <= n.maxY && e.maxX >= n.minX && e.maxY >= n.minY;
}
function Kn(n) {
  return {
    children: n,
    height: 1,
    leaf: !0,
    minX: 1 / 0,
    minY: 1 / 0,
    maxX: -1 / 0,
    maxY: -1 / 0
  };
}
function zl(n, e, t, i, s) {
  const r = [e, t];
  for (; r.length; ) {
    if (t = r.pop(), e = r.pop(), t - e <= i)
      continue;
    const o = e + Math.ceil((t - e) / i / 2) * i;
    my(n, o, e, t, s), r.push(e, o, o, t);
  }
}
class dr {
  /**
   * @param {Options} options Options.
   */
  constructor(e) {
    this.opacity_ = e.opacity, this.rotateWithView_ = e.rotateWithView, this.rotation_ = e.rotation, this.scale_ = e.scale, this.scaleArray_ = Ue(e.scale), this.displacement_ = e.displacement, this.declutterMode_ = e.declutterMode;
  }
  /**
   * Clones the style.
   * @return {ImageStyle} The cloned style.
   * @api
   */
  clone() {
    const e = this.getScale();
    return new dr({
      opacity: this.getOpacity(),
      scale: Array.isArray(e) ? e.slice() : e,
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode()
    });
  }
  /**
   * Get the symbolizer opacity.
   * @return {number} Opacity.
   * @api
   */
  getOpacity() {
    return this.opacity_;
  }
  /**
   * Determine whether the symbolizer rotates with the map.
   * @return {boolean} Rotate with map.
   * @api
   */
  getRotateWithView() {
    return this.rotateWithView_;
  }
  /**
   * Get the symoblizer rotation.
   * @return {number} Rotation.
   * @api
   */
  getRotation() {
    return this.rotation_;
  }
  /**
   * Get the symbolizer scale.
   * @return {number|import("../size.js").Size} Scale.
   * @api
   */
  getScale() {
    return this.scale_;
  }
  /**
   * Get the symbolizer scale array.
   * @return {import("../size.js").Size} Scale array.
   */
  getScaleArray() {
    return this.scaleArray_;
  }
  /**
   * Get the displacement of the shape
   * @return {Array<number>} Shape's center displacement
   * @api
   */
  getDisplacement() {
    return this.displacement_;
  }
  /**
   * Get the declutter mode of the shape
   * @return {import("./Style.js").DeclutterMode} Shape's declutter mode
   * @api
   */
  getDeclutterMode() {
    return this.declutterMode_;
  }
  /**
   * Get the anchor point in pixels. The anchor determines the center point for the
   * symbolizer.
   * @abstract
   * @return {Array<number>} Anchor.
   */
  getAnchor() {
    return ie();
  }
  /**
   * Get the image element for the symbolizer.
   * @abstract
   * @param {number} pixelRatio Pixel ratio.
   * @return {import('../DataTile.js').ImageLike} Image element.
   */
  getImage(e) {
    return ie();
  }
  /**
   * @abstract
   * @return {import('../DataTile.js').ImageLike} Image element.
   */
  getHitDetectionImage() {
    return ie();
  }
  /**
   * Get the image pixel ratio.
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} Pixel ratio.
   */
  getPixelRatio(e) {
    return 1;
  }
  /**
   * @abstract
   * @return {import("../ImageState.js").default} Image state.
   */
  getImageState() {
    return ie();
  }
  /**
   * @abstract
   * @return {import("../size.js").Size} Image size.
   */
  getImageSize() {
    return ie();
  }
  /**
   * Get the origin of the symbolizer.
   * @abstract
   * @return {Array<number>} Origin.
   */
  getOrigin() {
    return ie();
  }
  /**
   * Get the size of the symbolizer (in pixels).
   * @abstract
   * @return {import("../size.js").Size} Size.
   */
  getSize() {
    return ie();
  }
  /**
   * Set the displacement.
   *
   * @param {Array<number>} displacement Displacement.
   * @api
   */
  setDisplacement(e) {
    this.displacement_ = e;
  }
  /**
   * Set the opacity.
   *
   * @param {number} opacity Opacity.
   * @api
   */
  setOpacity(e) {
    this.opacity_ = e;
  }
  /**
   * Set whether to rotate the style with the view.
   *
   * @param {boolean} rotateWithView Rotate with map.
   * @api
   */
  setRotateWithView(e) {
    this.rotateWithView_ = e;
  }
  /**
   * Set the rotation.
   *
   * @param {number} rotation Rotation.
   * @api
   */
  setRotation(e) {
    this.rotation_ = e;
  }
  /**
   * Set the scale.
   *
   * @param {number|import("../size.js").Size} scale Scale.
   * @api
   */
  setScale(e) {
    this.scale_ = e, this.scaleArray_ = Ue(e);
  }
  /**
   * @abstract
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  listenImageChange(e) {
    ie();
  }
  /**
   * Load not yet loaded URI.
   * @abstract
   */
  load() {
    ie();
  }
  /**
   * @abstract
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  unlistenImageChange(e) {
    ie();
  }
  /**
   * @return {Promise<void>} `false` or Promise that resolves when the style is ready to use.
   */
  ready() {
    return Promise.resolve();
  }
}
class wy {
  constructor() {
    this.cache_ = {}, this.patternCache_ = {}, this.cacheSize_ = 0, this.maxCacheSize_ = 32;
  }
  /**
   * FIXME empty description for jsdoc
   */
  clear() {
    this.cache_ = {}, this.patternCache_ = {}, this.cacheSize_ = 0;
  }
  /**
   * @return {boolean} Can expire cache.
   */
  canExpireCache() {
    return this.cacheSize_ > this.maxCacheSize_;
  }
  /**
   * FIXME empty description for jsdoc
   */
  expire() {
    if (this.canExpireCache()) {
      let e = 0;
      for (const t in this.cache_) {
        const i = this.cache_[t];
        !(e++ & 3) && !i.hasListener() && (delete this.cache_[t], delete this.patternCache_[t], --this.cacheSize_);
      }
    }
  }
  /**
   * @param {string} src Src.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("../color.js").Color|string|null} color Color.
   * @return {import("./IconImage.js").default} Icon image.
   */
  get(e, t, i) {
    const s = Xr(e, t, i);
    return s in this.cache_ ? this.cache_[s] : null;
  }
  /**
   * @param {string} src Src.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("../color.js").Color|string|null} color Color.
   * @return {CanvasPattern} Icon image.
   */
  getPattern(e, t, i) {
    const s = Xr(e, t, i);
    return s in this.patternCache_ ? this.patternCache_[s] : null;
  }
  /**
   * @param {string} src Src.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("../color.js").Color|string|null} color Color.
   * @param {import("./IconImage.js").default|null} iconImage Icon image.
   * @param {boolean} [pattern] Also cache a `'repeat'` pattern with this `iconImage`.
   */
  set(e, t, i, s, r) {
    const o = Xr(e, t, i), a = o in this.cache_;
    this.cache_[o] = s, r && (s.getImageState() === Q.IDLE && s.load(), s.getImageState() === Q.LOADING ? s.ready().then(() => {
      this.patternCache_[o] = go().createPattern(
        s.getImage(1),
        "repeat"
      );
    }) : this.patternCache_[o] = go().createPattern(
      s.getImage(1),
      "repeat"
    )), a || ++this.cacheSize_;
  }
  /**
   * Set the cache size of the icon cache. Default is `32`. Change this value when
   * your map uses more than 32 different icon images and you are not caching icon
   * styles on the application level.
   * @param {number} maxCacheSize Cache max size.
   * @api
   */
  setSize(e) {
    this.maxCacheSize_ = e, this.expire();
  }
}
function Xr(n, e, t) {
  const i = t ? Ui(t) : "null";
  return e + ":" + n + ":" + i;
}
const ft = new wy();
let Ii = null;
class Cy extends $s {
  /**
   * @param {HTMLImageElement|HTMLCanvasElement|ImageBitmap|null} image Image.
   * @param {string|undefined} src Src.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("../ImageState.js").default|undefined} imageState Image state.
   * @param {import("../color.js").Color|string|null} color Color.
   */
  constructor(e, t, i, s, r) {
    super(), this.hitDetectionImage_ = null, this.image_ = e, this.crossOrigin_ = i, this.canvas_ = {}, this.color_ = r, this.imageState_ = s === void 0 ? Q.IDLE : s, this.size_ = e && e.width && e.height ? [e.width, e.height] : null, this.src_ = t, this.tainted_, this.ready_ = null;
  }
  /**
   * @private
   */
  initializeImage_() {
    this.image_ = new Image(), this.crossOrigin_ !== null && (this.image_.crossOrigin = this.crossOrigin_);
  }
  /**
   * @private
   * @return {boolean} The image canvas is tainted.
   */
  isTainted_() {
    if (this.tainted_ === void 0 && this.imageState_ === Q.LOADED) {
      Ii || (Ii = Ie(1, 1, void 0, {
        willReadFrequently: !0
      })), Ii.drawImage(this.image_, 0, 0);
      try {
        Ii.getImageData(0, 0, 1, 1), this.tainted_ = !1;
      } catch {
        Ii = null, this.tainted_ = !0;
      }
    }
    return this.tainted_ === !0;
  }
  /**
   * @private
   */
  dispatchChangeEvent_() {
    this.dispatchEvent(Z.CHANGE);
  }
  /**
   * @private
   */
  handleImageError_() {
    this.imageState_ = Q.ERROR, this.dispatchChangeEvent_();
  }
  /**
   * @private
   */
  handleImageLoad_() {
    this.imageState_ = Q.LOADED, this.size_ = [this.image_.width, this.image_.height], this.dispatchChangeEvent_();
  }
  /**
   * @param {number} pixelRatio Pixel ratio.
   * @return {HTMLImageElement|HTMLCanvasElement|ImageBitmap} Image or Canvas element or image bitmap.
   */
  getImage(e) {
    return this.image_ || this.initializeImage_(), this.replaceColor_(e), this.canvas_[e] ? this.canvas_[e] : this.image_;
  }
  /**
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} Image or Canvas element.
   */
  getPixelRatio(e) {
    return this.replaceColor_(e), this.canvas_[e] ? e : 1;
  }
  /**
   * @return {import("../ImageState.js").default} Image state.
   */
  getImageState() {
    return this.imageState_;
  }
  /**
   * @return {HTMLImageElement|HTMLCanvasElement|ImageBitmap} Image element.
   */
  getHitDetectionImage() {
    if (this.image_ || this.initializeImage_(), !this.hitDetectionImage_)
      if (this.isTainted_()) {
        const e = this.size_[0], t = this.size_[1], i = Ie(e, t);
        i.fillRect(0, 0, e, t), this.hitDetectionImage_ = i.canvas;
      } else
        this.hitDetectionImage_ = this.image_;
    return this.hitDetectionImage_;
  }
  /**
   * Get the size of the icon (in pixels).
   * @return {import("../size.js").Size} Image size.
   */
  getSize() {
    return this.size_;
  }
  /**
   * @return {string|undefined} Image src.
   */
  getSrc() {
    return this.src_;
  }
  /**
   * Load not yet loaded URI.
   */
  load() {
    if (this.imageState_ === Q.IDLE) {
      this.image_ || this.initializeImage_(), this.imageState_ = Q.LOADING;
      try {
        this.src_ !== void 0 && (this.image_.src = this.src_);
      } catch {
        this.handleImageError_();
      }
      this.image_ instanceof HTMLImageElement && F_(this.image_, this.src_).then((e) => {
        this.image_ = e, this.handleImageLoad_();
      }).catch(this.handleImageError_.bind(this));
    }
  }
  /**
   * @param {number} pixelRatio Pixel ratio.
   * @private
   */
  replaceColor_(e) {
    if (!this.color_ || this.canvas_[e] || this.imageState_ !== Q.LOADED)
      return;
    const t = this.image_, i = document.createElement("canvas");
    i.width = Math.ceil(t.width * e), i.height = Math.ceil(t.height * e);
    const s = i.getContext("2d");
    s.scale(e, e), s.drawImage(t, 0, 0), s.globalCompositeOperation = "multiply", s.fillStyle = R_(this.color_), s.fillRect(0, 0, i.width / e, i.height / e), s.globalCompositeOperation = "destination-in", s.drawImage(t, 0, 0), this.canvas_[e] = i;
  }
  /**
   * @return {Promise<void>} Promise that resolves when the image is loaded.
   */
  ready() {
    return this.ready_ || (this.ready_ = new Promise((e) => {
      this.imageState_ === Q.LOADED || this.imageState_ === Q.ERROR ? e() : this.addEventListener(Z.CHANGE, function t() {
        (this.imageState_ === Q.LOADED || this.imageState_ === Q.ERROR) && (this.removeEventListener(Z.CHANGE, t), e());
      });
    })), this.ready_;
  }
}
function ca(n, e, t, i, s, r) {
  let o = e === void 0 ? void 0 : ft.get(e, t, s);
  return o || (o = new Cy(
    n,
    n instanceof HTMLImageElement ? n.src || void 0 : e,
    t,
    i,
    s
  ), ft.set(e, t, s, o, r)), r && o && !ft.getPattern(e, t, s) && ft.set(e, t, s, o, r), o;
}
function gt(n) {
  return n ? Array.isArray(n) ? mc(n) : typeof n == "object" && "src" in n ? Ay(n) : n : null;
}
function Ay(n) {
  if (!n.offset || !n.size)
    return ft.getPattern(n.src, "anonymous", n.color);
  const e = n.src + ":" + n.offset, t = ft.getPattern(
    e,
    void 0,
    n.color
  );
  if (t)
    return t;
  const i = ft.get(n.src, "anonymous", null);
  if (i.getImageState() !== Q.LOADED)
    return null;
  const s = Ie(
    n.size[0],
    n.size[1]
  );
  return s.drawImage(
    i.getImage(1),
    n.offset[0],
    n.offset[1],
    n.size[0],
    n.size[1],
    0,
    0,
    n.size[0],
    n.size[1]
  ), ca(
    s.canvas,
    e,
    void 0,
    Q.LOADED,
    n.color,
    !0
  ), ft.getPattern(e, void 0, n.color);
}
const Cs = "ol-hidden", fr = "ol-unselectable", ua = "ol-control", Wl = "ol-collapsed", Iy = new RegExp(
  [
    "^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)",
    "(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)",
    "(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)",
    "(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?",
    "(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))",
    "(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))",
    `?\\s*([-,\\"\\'\\sa-z]+?)\\s*$`
  ].join(""),
  "i"
), Xl = [
  "style",
  "variant",
  "weight",
  "size",
  "lineHeight",
  "family"
], Sc = function(n) {
  const e = n.match(Iy);
  if (!e)
    return null;
  const t = (
    /** @type {FontParameters} */
    {
      lineHeight: "normal",
      size: "1.2em",
      style: "normal",
      weight: "normal",
      variant: "normal"
    }
  );
  for (let i = 0, s = Xl.length; i < s; ++i) {
    const r = e[i + 1];
    r !== void 0 && (t[Xl[i]] = r);
  }
  return t.families = t.family.split(/,\s?/), t;
}, Rc = "10px sans-serif", Ge = "#000", ai = "round", bt = [], Lt = 0, li = "round", Vi = 10, Zi = "#000", ji = "center", Fs = "middle", En = [0, 0, 0, 0], Hi = 1, St = new vt();
let Yn = null, _o;
const yo = {}, Ty = function() {
  const e = "32px ", t = ["monospace", "serif"], i = t.length, s = "wmytzilWMYTZIL@#/&?$%10";
  let r, o;
  function a(h, c, u) {
    let d = !0;
    for (let f = 0; f < i; ++f) {
      const g = t[f];
      if (o = Ns(
        h + " " + c + " " + e + g,
        s
      ), u != g) {
        const m = Ns(
          h + " " + c + " " + e + u + "," + g,
          s
        );
        d = d && m != o;
      }
    }
    return !!d;
  }
  function l() {
    let h = !0;
    const c = St.getKeys();
    for (let u = 0, d = c.length; u < d; ++u) {
      const f = c[u];
      St.get(f) < 100 && (a.apply(this, f.split(`
`)) ? (es(yo), Yn = null, _o = void 0, St.set(f, 100)) : (St.set(f, St.get(f) + 1, !0), h = !1));
    }
    h && (clearInterval(r), r = void 0);
  }
  return function(h) {
    const c = Sc(h);
    if (!c)
      return;
    const u = c.families;
    for (let d = 0, f = u.length; d < f; ++d) {
      const g = u[d], m = c.style + `
` + c.weight + `
` + g;
      St.get(m) === void 0 && (St.set(m, 100, !0), a(c.style, c.weight, g) || (St.set(m, 0, !0), r === void 0 && (r = setInterval(l, 32))));
    }
  };
}(), Sy = /* @__PURE__ */ function() {
  let n;
  return function(e) {
    let t = yo[e];
    if (t == null) {
      if (hc) {
        const i = Sc(e), s = bc(e, "Žg");
        t = (isNaN(Number(i.lineHeight)) ? 1.2 : Number(i.lineHeight)) * (s.actualBoundingBoxAscent + s.actualBoundingBoxDescent);
      } else
        n || (n = document.createElement("div"), n.innerHTML = "M", n.style.minHeight = "0", n.style.maxHeight = "none", n.style.height = "auto", n.style.padding = "0", n.style.border = "none", n.style.position = "absolute", n.style.display = "block", n.style.left = "-99999px"), n.style.font = e, document.body.appendChild(n), t = n.offsetHeight, document.body.removeChild(n);
      yo[e] = t;
    }
    return t;
  };
}();
function bc(n, e) {
  return Yn || (Yn = Ie(1, 1)), n != _o && (Yn.font = n, _o = Yn.font), Yn.measureText(e);
}
function Ns(n, e) {
  return bc(n, e).width;
}
function Kl(n, e, t) {
  if (e in t)
    return t[e];
  const i = e.split(`
`).reduce((s, r) => Math.max(s, Ns(n, r)), 0);
  return t[e] = i, i;
}
function Ry(n, e) {
  const t = [], i = [], s = [];
  let r = 0, o = 0, a = 0, l = 0;
  for (let h = 0, c = e.length; h <= c; h += 2) {
    const u = e[h];
    if (u === `
` || h === c) {
      r = Math.max(r, o), s.push(o), o = 0, a += l;
      continue;
    }
    const d = e[h + 1] || n.font, f = Ns(d, u);
    t.push(f), o += f;
    const g = Sy(d);
    i.push(g), l = Math.max(l, g);
  }
  return { width: r, height: a, widths: t, heights: i, lineWidths: s };
}
function by(n, e, t, i, s, r, o, a, l, h, c) {
  n.save(), t !== 1 && (n.globalAlpha === void 0 ? n.globalAlpha = (u) => u.globalAlpha *= t : n.globalAlpha *= t), e && n.transform.apply(n, e), /** @type {*} */
  i.contextInstructions ? (n.translate(l, h), n.scale(c[0], c[1]), Ly(
    /** @type {Label} */
    i,
    n
  )) : c[0] < 0 || c[1] < 0 ? (n.translate(l, h), n.scale(c[0], c[1]), n.drawImage(
    /** @type {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} */
    i,
    s,
    r,
    o,
    a,
    0,
    0,
    o,
    a
  )) : n.drawImage(
    /** @type {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} */
    i,
    s,
    r,
    o,
    a,
    l,
    h,
    o * c[0],
    a * c[1]
  ), n.restore();
}
function Ly(n, e) {
  const t = n.contextInstructions;
  for (let i = 0, s = t.length; i < s; i += 2)
    Array.isArray(t[i + 1]) ? e[t[i]].apply(
      e,
      t[i + 1]
    ) : e[t[i]] = t[i + 1];
}
class gr extends dr {
  /**
   * @param {Options} options Options.
   */
  constructor(e) {
    super({
      opacity: 1,
      rotateWithView: e.rotateWithView !== void 0 ? e.rotateWithView : !1,
      rotation: e.rotation !== void 0 ? e.rotation : 0,
      scale: e.scale !== void 0 ? e.scale : 1,
      displacement: e.displacement !== void 0 ? e.displacement : [0, 0],
      declutterMode: e.declutterMode
    }), this.canvases_, this.hitDetectionCanvas_ = null, this.fill_ = e.fill !== void 0 ? e.fill : null, this.origin_ = [0, 0], this.points_ = e.points, this.radius_ = e.radius, this.radius2_ = e.radius2, this.angle_ = e.angle !== void 0 ? e.angle : 0, this.stroke_ = e.stroke !== void 0 ? e.stroke : null, this.size_, this.renderOptions_, this.imageState_ = this.fill_ && this.fill_.loading() ? Q.LOADING : Q.LOADED, this.imageState_ === Q.LOADING && this.ready().then(() => this.imageState_ = Q.LOADED), this.render();
  }
  /**
   * Clones the style.
   * @return {RegularShape} The cloned style.
   * @api
   */
  clone() {
    const e = this.getScale(), t = new gr({
      fill: this.getFill() ? this.getFill().clone() : void 0,
      points: this.getPoints(),
      radius: this.getRadius(),
      radius2: this.getRadius2(),
      angle: this.getAngle(),
      stroke: this.getStroke() ? this.getStroke().clone() : void 0,
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      scale: Array.isArray(e) ? e.slice() : e,
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode()
    });
    return t.setOpacity(this.getOpacity()), t;
  }
  /**
   * Get the anchor point in pixels. The anchor determines the center point for the
   * symbolizer.
   * @return {Array<number>} Anchor.
   * @api
   */
  getAnchor() {
    const e = this.size_, t = this.getDisplacement(), i = this.getScaleArray();
    return [
      e[0] / 2 - t[0] / i[0],
      e[1] / 2 + t[1] / i[1]
    ];
  }
  /**
   * Get the angle used in generating the shape.
   * @return {number} Shape's rotation in radians.
   * @api
   */
  getAngle() {
    return this.angle_;
  }
  /**
   * Get the fill style for the shape.
   * @return {import("./Fill.js").default|null} Fill style.
   * @api
   */
  getFill() {
    return this.fill_;
  }
  /**
   * Set the fill style.
   * @param {import("./Fill.js").default|null} fill Fill style.
   * @api
   */
  setFill(e) {
    this.fill_ = e, this.render();
  }
  /**
   * @return {HTMLCanvasElement} Image element.
   */
  getHitDetectionImage() {
    return this.hitDetectionCanvas_ || (this.hitDetectionCanvas_ = this.createHitDetectionCanvas_(
      this.renderOptions_
    )), this.hitDetectionCanvas_;
  }
  /**
   * Get the image icon.
   * @param {number} pixelRatio Pixel ratio.
   * @return {HTMLCanvasElement} Image or Canvas element.
   * @api
   */
  getImage(e) {
    let t = this.canvases_[e];
    if (!t) {
      const i = this.renderOptions_, s = Ie(
        i.size * e,
        i.size * e
      );
      this.draw_(i, s, e), t = s.canvas, this.canvases_[e] = t;
    }
    return t;
  }
  /**
   * Get the image pixel ratio.
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} Pixel ratio.
   */
  getPixelRatio(e) {
    return e;
  }
  /**
   * @return {import("../size.js").Size} Image size.
   */
  getImageSize() {
    return this.size_;
  }
  /**
   * @return {import("../ImageState.js").default} Image state.
   */
  getImageState() {
    return this.imageState_;
  }
  /**
   * Get the origin of the symbolizer.
   * @return {Array<number>} Origin.
   * @api
   */
  getOrigin() {
    return this.origin_;
  }
  /**
   * Get the number of points for generating the shape.
   * @return {number} Number of points for stars and regular polygons.
   * @api
   */
  getPoints() {
    return this.points_;
  }
  /**
   * Get the (primary) radius for the shape.
   * @return {number} Radius.
   * @api
   */
  getRadius() {
    return this.radius_;
  }
  /**
   * Get the secondary radius for the shape.
   * @return {number|undefined} Radius2.
   * @api
   */
  getRadius2() {
    return this.radius2_;
  }
  /**
   * Get the size of the symbolizer (in pixels).
   * @return {import("../size.js").Size} Size.
   * @api
   */
  getSize() {
    return this.size_;
  }
  /**
   * Get the stroke style for the shape.
   * @return {import("./Stroke.js").default|null} Stroke style.
   * @api
   */
  getStroke() {
    return this.stroke_;
  }
  /**
   * Set the stroke style.
   * @param {import("./Stroke.js").default|null} stroke Stroke style.
   * @api
   */
  setStroke(e) {
    this.stroke_ = e, this.render();
  }
  /**
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  listenImageChange(e) {
  }
  /**
   * Load not yet loaded URI.
   */
  load() {
  }
  /**
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  unlistenImageChange(e) {
  }
  /**
   * Calculate additional canvas size needed for the miter.
   * @param {string} lineJoin Line join
   * @param {number} strokeWidth Stroke width
   * @param {number} miterLimit Miter limit
   * @return {number} Additional canvas size needed
   * @private
   */
  calculateLineJoinSize_(e, t, i) {
    if (t === 0 || this.points_ === 1 / 0 || e !== "bevel" && e !== "miter")
      return t;
    let s = this.radius_, r = this.radius2_ === void 0 ? s : this.radius2_;
    if (s < r) {
      const w = s;
      s = r, r = w;
    }
    const o = this.radius2_ === void 0 ? this.points_ : this.points_ * 2, a = 2 * Math.PI / o, l = r * Math.sin(a), h = Math.sqrt(r * r - l * l), c = s - h, u = Math.sqrt(l * l + c * c), d = u / l;
    if (e === "miter" && d <= i)
      return d * t;
    const f = t / 2 / d, g = t / 2 * (c / u), p = Math.sqrt((s + f) * (s + f) + g * g) - s;
    if (this.radius2_ === void 0 || e === "bevel")
      return p * 2;
    const _ = s * Math.sin(a), y = Math.sqrt(s * s - _ * _), x = r - y, E = Math.sqrt(_ * _ + x * x) / _;
    if (E <= i) {
      const w = E * t / 2 - r - s;
      return 2 * Math.max(p, w);
    }
    return p * 2;
  }
  /**
   * @return {RenderOptions}  The render options
   * @protected
   */
  createRenderOptions() {
    let e = ai, t = li, i = 0, s = null, r = 0, o, a = 0;
    this.stroke_ && (o = gt(this.stroke_.getColor() ?? Zi), a = this.stroke_.getWidth() ?? Hi, s = this.stroke_.getLineDash(), r = this.stroke_.getLineDashOffset() ?? 0, t = this.stroke_.getLineJoin() ?? li, e = this.stroke_.getLineCap() ?? ai, i = this.stroke_.getMiterLimit() ?? Vi);
    const l = this.calculateLineJoinSize_(t, a, i), h = Math.max(this.radius_, this.radius2_ || 0), c = Math.ceil(2 * h + l);
    return {
      strokeStyle: o,
      strokeWidth: a,
      size: c,
      lineCap: e,
      lineDash: s,
      lineDashOffset: r,
      lineJoin: t,
      miterLimit: i
    };
  }
  /**
   * @protected
   */
  render() {
    this.renderOptions_ = this.createRenderOptions();
    const e = this.renderOptions_.size;
    this.canvases_ = {}, this.hitDetectionCanvas_ = null, this.size_ = [e, e];
  }
  /**
   * @private
   * @param {RenderOptions} renderOptions Render options.
   * @param {CanvasRenderingContext2D} context The rendering context.
   * @param {number} pixelRatio The pixel ratio.
   */
  draw_(e, t, i) {
    if (t.scale(i, i), t.translate(e.size / 2, e.size / 2), this.createPath_(t), this.fill_) {
      let s = this.fill_.getColor();
      s === null && (s = Ge), t.fillStyle = gt(s), t.fill();
    }
    e.strokeStyle && (t.strokeStyle = e.strokeStyle, t.lineWidth = e.strokeWidth, e.lineDash && (t.setLineDash(e.lineDash), t.lineDashOffset = e.lineDashOffset), t.lineCap = e.lineCap, t.lineJoin = e.lineJoin, t.miterLimit = e.miterLimit, t.stroke());
  }
  /**
   * @private
   * @param {RenderOptions} renderOptions Render options.
   * @return {HTMLCanvasElement} Canvas containing the icon
   */
  createHitDetectionCanvas_(e) {
    let t;
    if (this.fill_) {
      let i = this.fill_.getColor(), s = 0;
      typeof i == "string" && (i = Ui(i)), i === null ? s = 1 : Array.isArray(i) && (s = i.length === 4 ? i[3] : 1), s === 0 && (t = Ie(e.size, e.size), this.drawHitDetectionCanvas_(e, t));
    }
    return t ? t.canvas : this.getImage(1);
  }
  /**
   * @private
   * @param {CanvasRenderingContext2D} context The context to draw in.
   */
  createPath_(e) {
    let t = this.points_;
    const i = this.radius_;
    if (t === 1 / 0)
      e.arc(0, 0, i, 0, 2 * Math.PI);
    else {
      const s = this.radius2_ === void 0 ? i : this.radius2_;
      this.radius2_ !== void 0 && (t *= 2);
      const r = this.angle_ - Math.PI / 2, o = 2 * Math.PI / t;
      for (let a = 0; a < t; a++) {
        const l = r + a * o, h = a % 2 === 0 ? i : s;
        e.lineTo(h * Math.cos(l), h * Math.sin(l));
      }
      e.closePath();
    }
  }
  /**
   * @private
   * @param {RenderOptions} renderOptions Render options.
   * @param {CanvasRenderingContext2D} context The context.
   */
  drawHitDetectionCanvas_(e, t) {
    t.translate(e.size / 2, e.size / 2), this.createPath_(t), t.fillStyle = Ge, t.fill(), e.strokeStyle && (t.strokeStyle = e.strokeStyle, t.lineWidth = e.strokeWidth, e.lineDash && (t.setLineDash(e.lineDash), t.lineDashOffset = e.lineDashOffset), t.lineJoin = e.lineJoin, t.miterLimit = e.miterLimit, t.stroke());
  }
  ready() {
    return this.fill_ ? this.fill_.ready() : Promise.resolve();
  }
}
class is extends gr {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    e = e || { radius: 5 }, super({
      points: 1 / 0,
      fill: e.fill,
      radius: e.radius,
      stroke: e.stroke,
      scale: e.scale !== void 0 ? e.scale : 1,
      rotation: e.rotation !== void 0 ? e.rotation : 0,
      rotateWithView: e.rotateWithView !== void 0 ? e.rotateWithView : !1,
      displacement: e.displacement !== void 0 ? e.displacement : [0, 0],
      declutterMode: e.declutterMode
    });
  }
  /**
   * Clones the style.
   * @return {CircleStyle} The cloned style.
   * @api
   */
  clone() {
    const e = this.getScale(), t = new is({
      fill: this.getFill() ? this.getFill().clone() : void 0,
      stroke: this.getStroke() ? this.getStroke().clone() : void 0,
      radius: this.getRadius(),
      scale: Array.isArray(e) ? e.slice() : e,
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode()
    });
    return t.setOpacity(this.getOpacity()), t;
  }
  /**
   * Set the circle radius.
   *
   * @param {number} radius Circle radius.
   * @api
   */
  setRadius(e) {
    this.radius_ = e, this.render();
  }
}
class gi {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    e = e || {}, this.patternImage_ = null, this.color_ = null, e.color !== void 0 && this.setColor(e.color);
  }
  /**
   * Clones the style. The color is not cloned if it is an {@link module:ol/colorlike~ColorLike}.
   * @return {Fill} The cloned style.
   * @api
   */
  clone() {
    const e = this.getColor();
    return new gi({
      color: Array.isArray(e) ? e.slice() : e || void 0
    });
  }
  /**
   * Get the fill color.
   * @return {import("../color.js").Color|import("../colorlike.js").ColorLike|import('../colorlike.js').PatternDescriptor|null} Color.
   * @api
   */
  getColor() {
    return this.color_;
  }
  /**
   * Set the color.
   *
   * @param {import("../color.js").Color|import("../colorlike.js").ColorLike|import('../colorlike.js').PatternDescriptor|null} color Color.
   * @api
   */
  setColor(e) {
    if (e !== null && typeof e == "object" && "src" in e) {
      const t = ca(
        null,
        e.src,
        "anonymous",
        void 0,
        e.offset ? null : e.color ? e.color : null,
        !(e.offset && e.size)
      );
      t.ready().then(() => {
        this.patternImage_ = null;
      }), t.getImageState() === Q.IDLE && t.load(), t.getImageState() === Q.LOADING && (this.patternImage_ = t);
    }
    this.color_ = e;
  }
  /**
   * @return {boolean} The fill style is loading an image pattern.
   */
  loading() {
    return !!this.patternImage_;
  }
  /**
   * @return {Promise<void>} `false` or a promise that resolves when the style is ready to use.
   */
  ready() {
    return this.patternImage_ ? this.patternImage_.ready() : Promise.resolve();
  }
}
class Ht {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    e = e || {}, this.color_ = e.color !== void 0 ? e.color : null, this.lineCap_ = e.lineCap, this.lineDash_ = e.lineDash !== void 0 ? e.lineDash : null, this.lineDashOffset_ = e.lineDashOffset, this.lineJoin_ = e.lineJoin, this.miterLimit_ = e.miterLimit, this.width_ = e.width;
  }
  /**
   * Clones the style.
   * @return {Stroke} The cloned style.
   * @api
   */
  clone() {
    const e = this.getColor();
    return new Ht({
      color: Array.isArray(e) ? e.slice() : e || void 0,
      lineCap: this.getLineCap(),
      lineDash: this.getLineDash() ? this.getLineDash().slice() : void 0,
      lineDashOffset: this.getLineDashOffset(),
      lineJoin: this.getLineJoin(),
      miterLimit: this.getMiterLimit(),
      width: this.getWidth()
    });
  }
  /**
   * Get the stroke color.
   * @return {import("../color.js").Color|import("../colorlike.js").ColorLike} Color.
   * @api
   */
  getColor() {
    return this.color_;
  }
  /**
   * Get the line cap type for the stroke.
   * @return {CanvasLineCap|undefined} Line cap.
   * @api
   */
  getLineCap() {
    return this.lineCap_;
  }
  /**
   * Get the line dash style for the stroke.
   * @return {Array<number>|null} Line dash.
   * @api
   */
  getLineDash() {
    return this.lineDash_;
  }
  /**
   * Get the line dash offset for the stroke.
   * @return {number|undefined} Line dash offset.
   * @api
   */
  getLineDashOffset() {
    return this.lineDashOffset_;
  }
  /**
   * Get the line join type for the stroke.
   * @return {CanvasLineJoin|undefined} Line join.
   * @api
   */
  getLineJoin() {
    return this.lineJoin_;
  }
  /**
   * Get the miter limit for the stroke.
   * @return {number|undefined} Miter limit.
   * @api
   */
  getMiterLimit() {
    return this.miterLimit_;
  }
  /**
   * Get the stroke width.
   * @return {number|undefined} Width.
   * @api
   */
  getWidth() {
    return this.width_;
  }
  /**
   * Set the color.
   *
   * @param {import("../color.js").Color|import("../colorlike.js").ColorLike} color Color.
   * @api
   */
  setColor(e) {
    this.color_ = e;
  }
  /**
   * Set the line cap.
   *
   * @param {CanvasLineCap|undefined} lineCap Line cap.
   * @api
   */
  setLineCap(e) {
    this.lineCap_ = e;
  }
  /**
   * Set the line dash.
   *
   * @param {Array<number>|null} lineDash Line dash.
   * @api
   */
  setLineDash(e) {
    this.lineDash_ = e;
  }
  /**
   * Set the line dash offset.
   *
   * @param {number|undefined} lineDashOffset Line dash offset.
   * @api
   */
  setLineDashOffset(e) {
    this.lineDashOffset_ = e;
  }
  /**
   * Set the line join.
   *
   * @param {CanvasLineJoin|undefined} lineJoin Line join.
   * @api
   */
  setLineJoin(e) {
    this.lineJoin_ = e;
  }
  /**
   * Set the miter limit.
   *
   * @param {number|undefined} miterLimit Miter limit.
   * @api
   */
  setMiterLimit(e) {
    this.miterLimit_ = e;
  }
  /**
   * Set the width.
   *
   * @param {number|undefined} width Width.
   * @api
   */
  setWidth(e) {
    this.width_ = e;
  }
}
class qe {
  /**
   * @param {Options} [options] Style options.
   */
  constructor(e) {
    e = e || {}, this.geometry_ = null, this.geometryFunction_ = Yl, e.geometry !== void 0 && this.setGeometry(e.geometry), this.fill_ = e.fill !== void 0 ? e.fill : null, this.image_ = e.image !== void 0 ? e.image : null, this.renderer_ = e.renderer !== void 0 ? e.renderer : null, this.hitDetectionRenderer_ = e.hitDetectionRenderer !== void 0 ? e.hitDetectionRenderer : null, this.stroke_ = e.stroke !== void 0 ? e.stroke : null, this.text_ = e.text !== void 0 ? e.text : null, this.zIndex_ = e.zIndex;
  }
  /**
   * Clones the style.
   * @return {Style} The cloned style.
   * @api
   */
  clone() {
    let e = this.getGeometry();
    return e && typeof e == "object" && (e = /** @type {import("../geom/Geometry.js").default} */
    e.clone()), new qe({
      geometry: e ?? void 0,
      fill: this.getFill() ? this.getFill().clone() : void 0,
      image: this.getImage() ? this.getImage().clone() : void 0,
      renderer: this.getRenderer() ?? void 0,
      stroke: this.getStroke() ? this.getStroke().clone() : void 0,
      text: this.getText() ? this.getText().clone() : void 0,
      zIndex: this.getZIndex()
    });
  }
  /**
   * Get the custom renderer function that was configured with
   * {@link #setRenderer} or the `renderer` constructor option.
   * @return {RenderFunction|null} Custom renderer function.
   * @api
   */
  getRenderer() {
    return this.renderer_;
  }
  /**
   * Sets a custom renderer function for this style. When set, `fill`, `stroke`
   * and `image` options of the style will be ignored.
   * @param {RenderFunction|null} renderer Custom renderer function.
   * @api
   */
  setRenderer(e) {
    this.renderer_ = e;
  }
  /**
   * Sets a custom renderer function for this style used
   * in hit detection.
   * @param {RenderFunction|null} renderer Custom renderer function.
   * @api
   */
  setHitDetectionRenderer(e) {
    this.hitDetectionRenderer_ = e;
  }
  /**
   * Get the custom renderer function that was configured with
   * {@link #setHitDetectionRenderer} or the `hitDetectionRenderer` constructor option.
   * @return {RenderFunction|null} Custom renderer function.
   * @api
   */
  getHitDetectionRenderer() {
    return this.hitDetectionRenderer_;
  }
  /**
   * Get the geometry to be rendered.
   * @return {string|import("../geom/Geometry.js").default|GeometryFunction|null}
   * Feature property or geometry or function that returns the geometry that will
   * be rendered with this style.
   * @api
   */
  getGeometry() {
    return this.geometry_;
  }
  /**
   * Get the function used to generate a geometry for rendering.
   * @return {!GeometryFunction} Function that is called with a feature
   * and returns the geometry to render instead of the feature's geometry.
   * @api
   */
  getGeometryFunction() {
    return this.geometryFunction_;
  }
  /**
   * Get the fill style.
   * @return {import("./Fill.js").default|null} Fill style.
   * @api
   */
  getFill() {
    return this.fill_;
  }
  /**
   * Set the fill style.
   * @param {import("./Fill.js").default|null} fill Fill style.
   * @api
   */
  setFill(e) {
    this.fill_ = e;
  }
  /**
   * Get the image style.
   * @return {import("./Image.js").default|null} Image style.
   * @api
   */
  getImage() {
    return this.image_;
  }
  /**
   * Set the image style.
   * @param {import("./Image.js").default} image Image style.
   * @api
   */
  setImage(e) {
    this.image_ = e;
  }
  /**
   * Get the stroke style.
   * @return {import("./Stroke.js").default|null} Stroke style.
   * @api
   */
  getStroke() {
    return this.stroke_;
  }
  /**
   * Set the stroke style.
   * @param {import("./Stroke.js").default|null} stroke Stroke style.
   * @api
   */
  setStroke(e) {
    this.stroke_ = e;
  }
  /**
   * Get the text style.
   * @return {import("./Text.js").default|null} Text style.
   * @api
   */
  getText() {
    return this.text_;
  }
  /**
   * Set the text style.
   * @param {import("./Text.js").default} text Text style.
   * @api
   */
  setText(e) {
    this.text_ = e;
  }
  /**
   * Get the z-index for the style.
   * @return {number|undefined} ZIndex.
   * @api
   */
  getZIndex() {
    return this.zIndex_;
  }
  /**
   * Set a geometry that is rendered instead of the feature's geometry.
   *
   * @param {string|import("../geom/Geometry.js").default|GeometryFunction} geometry
   *     Feature property or geometry or function returning a geometry to render
   *     for this style.
   * @api
   */
  setGeometry(e) {
    typeof e == "function" ? this.geometryFunction_ = e : typeof e == "string" ? this.geometryFunction_ = function(t) {
      return (
        /** @type {import("../geom/Geometry.js").default} */
        t.get(e)
      );
    } : e ? e !== void 0 && (this.geometryFunction_ = function() {
      return (
        /** @type {import("../geom/Geometry.js").default} */
        e
      );
    }) : this.geometryFunction_ = Yl, this.geometry_ = e;
  }
  /**
   * Set the z-index.
   *
   * @param {number|undefined} zIndex ZIndex.
   * @api
   */
  setZIndex(e) {
    this.zIndex_ = e;
  }
}
function My(n) {
  let e;
  if (typeof n == "function")
    e = n;
  else {
    let t;
    Array.isArray(n) ? t = n : (te(
      typeof /** @type {?} */
      n.getZIndex == "function",
      "Expected an `Style` or an array of `Style`"
    ), t = [
      /** @type {Style} */
      n
    ]), e = function() {
      return t;
    };
  }
  return e;
}
let Kr = null;
function Dy(n, e) {
  if (!Kr) {
    const t = new gi({
      color: "rgba(255,255,255,0.4)"
    }), i = new Ht({
      color: "#3399CC",
      width: 1.25
    });
    Kr = [
      new qe({
        image: new is({
          fill: t,
          stroke: i,
          radius: 5
        }),
        fill: t,
        stroke: i
      })
    ];
  }
  return Kr;
}
function Yl(n) {
  return n.getGeometry();
}
function Ul(n, e, t, i) {
  return t !== void 0 && i !== void 0 ? [t / n, i / e] : t !== void 0 ? t / n : i !== void 0 ? i / e : 1;
}
class ss extends dr {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    e = e || {};
    const t = e.opacity !== void 0 ? e.opacity : 1, i = e.rotation !== void 0 ? e.rotation : 0, s = e.scale !== void 0 ? e.scale : 1, r = e.rotateWithView !== void 0 ? e.rotateWithView : !1;
    super({
      opacity: t,
      rotation: i,
      scale: s,
      displacement: e.displacement !== void 0 ? e.displacement : [0, 0],
      rotateWithView: r,
      declutterMode: e.declutterMode
    }), this.anchor_ = e.anchor !== void 0 ? e.anchor : [0.5, 0.5], this.normalizedAnchor_ = null, this.anchorOrigin_ = e.anchorOrigin !== void 0 ? e.anchorOrigin : "top-left", this.anchorXUnits_ = e.anchorXUnits !== void 0 ? e.anchorXUnits : "fraction", this.anchorYUnits_ = e.anchorYUnits !== void 0 ? e.anchorYUnits : "fraction", this.crossOrigin_ = e.crossOrigin !== void 0 ? e.crossOrigin : null;
    const o = e.img !== void 0 ? e.img : null;
    let a = e.src;
    te(
      !(a !== void 0 && o),
      "`image` and `src` cannot be provided at the same time"
    ), (a === void 0 || a.length === 0) && o && (a = /** @type {HTMLImageElement} */
    o.src || oe(o)), te(
      a !== void 0 && a.length > 0,
      "A defined and non-empty `src` or `image` must be provided"
    ), te(
      !((e.width !== void 0 || e.height !== void 0) && e.scale !== void 0),
      "`width` or `height` cannot be provided together with `scale`"
    );
    let l;
    if (e.src !== void 0 ? l = Q.IDLE : o !== void 0 && (o instanceof HTMLImageElement ? o.complete ? l = o.src ? Q.LOADED : Q.IDLE : l = Q.LOADING : l = Q.LOADED), this.color_ = e.color !== void 0 ? Ui(e.color) : null, this.iconImage_ = ca(
      o,
      /** @type {string} */
      a,
      this.crossOrigin_,
      l,
      this.color_
    ), this.offset_ = e.offset !== void 0 ? e.offset : [0, 0], this.offsetOrigin_ = e.offsetOrigin !== void 0 ? e.offsetOrigin : "top-left", this.origin_ = null, this.size_ = e.size !== void 0 ? e.size : null, e.width !== void 0 || e.height !== void 0) {
      let h, c;
      if (e.size)
        [h, c] = e.size;
      else {
        const u = this.getImage(1);
        if (u.width && u.height)
          h = u.width, c = u.height;
        else if (u instanceof HTMLImageElement) {
          this.initialOptions_ = e;
          const d = () => {
            if (this.unlistenImageChange(d), !this.initialOptions_)
              return;
            const f = this.iconImage_.getSize();
            this.setScale(
              Ul(
                f[0],
                f[1],
                e.width,
                e.height
              )
            );
          };
          this.listenImageChange(d);
          return;
        }
      }
      h !== void 0 && this.setScale(
        Ul(h, c, e.width, e.height)
      );
    }
  }
  /**
   * Clones the style. The underlying Image/HTMLCanvasElement is not cloned.
   * @return {Icon} The cloned style.
   * @api
   */
  clone() {
    let e, t, i;
    return this.initialOptions_ ? (t = this.initialOptions_.width, i = this.initialOptions_.height) : (e = this.getScale(), e = Array.isArray(e) ? e.slice() : e), new ss({
      anchor: this.anchor_.slice(),
      anchorOrigin: this.anchorOrigin_,
      anchorXUnits: this.anchorXUnits_,
      anchorYUnits: this.anchorYUnits_,
      color: this.color_ && this.color_.slice ? this.color_.slice() : this.color_ || void 0,
      crossOrigin: this.crossOrigin_,
      offset: this.offset_.slice(),
      offsetOrigin: this.offsetOrigin_,
      opacity: this.getOpacity(),
      rotateWithView: this.getRotateWithView(),
      rotation: this.getRotation(),
      scale: e,
      width: t,
      height: i,
      size: this.size_ !== null ? this.size_.slice() : void 0,
      src: this.getSrc(),
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode()
    });
  }
  /**
   * Get the anchor point in pixels. The anchor determines the center point for the
   * symbolizer.
   * @return {Array<number>} Anchor.
   * @api
   */
  getAnchor() {
    let e = this.normalizedAnchor_;
    if (!e) {
      e = this.anchor_;
      const s = this.getSize();
      if (this.anchorXUnits_ == "fraction" || this.anchorYUnits_ == "fraction") {
        if (!s)
          return null;
        e = this.anchor_.slice(), this.anchorXUnits_ == "fraction" && (e[0] *= s[0]), this.anchorYUnits_ == "fraction" && (e[1] *= s[1]);
      }
      if (this.anchorOrigin_ != "top-left") {
        if (!s)
          return null;
        e === this.anchor_ && (e = this.anchor_.slice()), (this.anchorOrigin_ == "top-right" || this.anchorOrigin_ == "bottom-right") && (e[0] = -e[0] + s[0]), (this.anchorOrigin_ == "bottom-left" || this.anchorOrigin_ == "bottom-right") && (e[1] = -e[1] + s[1]);
      }
      this.normalizedAnchor_ = e;
    }
    const t = this.getDisplacement(), i = this.getScaleArray();
    return [
      e[0] - t[0] / i[0],
      e[1] + t[1] / i[1]
    ];
  }
  /**
   * Set the anchor point. The anchor determines the center point for the
   * symbolizer.
   *
   * @param {Array<number>} anchor Anchor.
   * @api
   */
  setAnchor(e) {
    this.anchor_ = e, this.normalizedAnchor_ = null;
  }
  /**
   * Get the icon color.
   * @return {import("../color.js").Color} Color.
   * @api
   */
  getColor() {
    return this.color_;
  }
  /**
   * Get the image icon.
   * @param {number} pixelRatio Pixel ratio.
   * @return {HTMLImageElement|HTMLCanvasElement|ImageBitmap} Image or Canvas element. If the Icon
   * style was configured with `src` or with a not let loaded `img`, an `ImageBitmap` will be returned.
   * @api
   */
  getImage(e) {
    return this.iconImage_.getImage(e);
  }
  /**
   * Get the pixel ratio.
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} The pixel ratio of the image.
   * @api
   */
  getPixelRatio(e) {
    return this.iconImage_.getPixelRatio(e);
  }
  /**
   * @return {import("../size.js").Size} Image size.
   */
  getImageSize() {
    return this.iconImage_.getSize();
  }
  /**
   * @return {import("../ImageState.js").default} Image state.
   */
  getImageState() {
    return this.iconImage_.getImageState();
  }
  /**
   * @return {HTMLImageElement|HTMLCanvasElement|ImageBitmap} Image element.
   */
  getHitDetectionImage() {
    return this.iconImage_.getHitDetectionImage();
  }
  /**
   * Get the origin of the symbolizer.
   * @return {Array<number>} Origin.
   * @api
   */
  getOrigin() {
    if (this.origin_)
      return this.origin_;
    let e = this.offset_;
    if (this.offsetOrigin_ != "top-left") {
      const t = this.getSize(), i = this.iconImage_.getSize();
      if (!t || !i)
        return null;
      e = e.slice(), (this.offsetOrigin_ == "top-right" || this.offsetOrigin_ == "bottom-right") && (e[0] = i[0] - t[0] - e[0]), (this.offsetOrigin_ == "bottom-left" || this.offsetOrigin_ == "bottom-right") && (e[1] = i[1] - t[1] - e[1]);
    }
    return this.origin_ = e, this.origin_;
  }
  /**
   * Get the image URL.
   * @return {string|undefined} Image src.
   * @api
   */
  getSrc() {
    return this.iconImage_.getSrc();
  }
  /**
   * Get the size of the icon (in pixels).
   * @return {import("../size.js").Size} Image size.
   * @api
   */
  getSize() {
    return this.size_ ? this.size_ : this.iconImage_.getSize();
  }
  /**
   * Get the width of the icon (in pixels). Will return undefined when the icon image is not yet loaded.
   * @return {number} Icon width (in pixels).
   * @api
   */
  getWidth() {
    const e = this.getScaleArray();
    if (this.size_)
      return this.size_[0] * e[0];
    if (this.iconImage_.getImageState() == Q.LOADED)
      return this.iconImage_.getSize()[0] * e[0];
  }
  /**
   * Get the height of the icon (in pixels). Will return undefined when the icon image is not yet loaded.
   * @return {number} Icon height (in pixels).
   * @api
   */
  getHeight() {
    const e = this.getScaleArray();
    if (this.size_)
      return this.size_[1] * e[1];
    if (this.iconImage_.getImageState() == Q.LOADED)
      return this.iconImage_.getSize()[1] * e[1];
  }
  /**
   * Set the scale.
   *
   * @param {number|import("../size.js").Size} scale Scale.
   * @api
   */
  setScale(e) {
    delete this.initialOptions_, super.setScale(e);
  }
  /**
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  listenImageChange(e) {
    this.iconImage_.addEventListener(Z.CHANGE, e);
  }
  /**
   * Load not yet loaded URI.
   * When rendering a feature with an icon style, the vector renderer will
   * automatically call this method. However, you might want to call this
   * method yourself for preloading or other purposes.
   * @api
   */
  load() {
    this.iconImage_.load();
  }
  /**
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  unlistenImageChange(e) {
    this.iconImage_.removeEventListener(Z.CHANGE, e);
  }
  ready() {
    return this.iconImage_.ready();
  }
}
const Py = "#333";
class da {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    e = e || {}, this.font_ = e.font, this.rotation_ = e.rotation, this.rotateWithView_ = e.rotateWithView, this.scale_ = e.scale, this.scaleArray_ = Ue(e.scale !== void 0 ? e.scale : 1), this.text_ = e.text, this.textAlign_ = e.textAlign, this.justify_ = e.justify, this.repeat_ = e.repeat, this.textBaseline_ = e.textBaseline, this.fill_ = e.fill !== void 0 ? e.fill : new gi({ color: Py }), this.maxAngle_ = e.maxAngle !== void 0 ? e.maxAngle : Math.PI / 4, this.placement_ = e.placement !== void 0 ? e.placement : "point", this.overflow_ = !!e.overflow, this.stroke_ = e.stroke !== void 0 ? e.stroke : null, this.offsetX_ = e.offsetX !== void 0 ? e.offsetX : 0, this.offsetY_ = e.offsetY !== void 0 ? e.offsetY : 0, this.backgroundFill_ = e.backgroundFill ? e.backgroundFill : null, this.backgroundStroke_ = e.backgroundStroke ? e.backgroundStroke : null, this.padding_ = e.padding === void 0 ? null : e.padding, this.declutterMode_ = e.declutterMode;
  }
  /**
   * Clones the style.
   * @return {Text} The cloned style.
   * @api
   */
  clone() {
    const e = this.getScale();
    return new da({
      font: this.getFont(),
      placement: this.getPlacement(),
      repeat: this.getRepeat(),
      maxAngle: this.getMaxAngle(),
      overflow: this.getOverflow(),
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      scale: Array.isArray(e) ? e.slice() : e,
      text: this.getText(),
      textAlign: this.getTextAlign(),
      justify: this.getJustify(),
      textBaseline: this.getTextBaseline(),
      fill: this.getFill() ? this.getFill().clone() : void 0,
      stroke: this.getStroke() ? this.getStroke().clone() : void 0,
      offsetX: this.getOffsetX(),
      offsetY: this.getOffsetY(),
      backgroundFill: this.getBackgroundFill() ? this.getBackgroundFill().clone() : void 0,
      backgroundStroke: this.getBackgroundStroke() ? this.getBackgroundStroke().clone() : void 0,
      padding: this.getPadding() || void 0,
      declutterMode: this.getDeclutterMode()
    });
  }
  /**
   * Get the `overflow` configuration.
   * @return {boolean} Let text overflow the length of the path they follow.
   * @api
   */
  getOverflow() {
    return this.overflow_;
  }
  /**
   * Get the font name.
   * @return {string|undefined} Font.
   * @api
   */
  getFont() {
    return this.font_;
  }
  /**
   * Get the maximum angle between adjacent characters.
   * @return {number} Angle in radians.
   * @api
   */
  getMaxAngle() {
    return this.maxAngle_;
  }
  /**
   * Get the label placement.
   * @return {TextPlacement} Text placement.
   * @api
   */
  getPlacement() {
    return this.placement_;
  }
  /**
   * Get the repeat interval of the text.
   * @return {number|undefined} Repeat interval in pixels.
   * @api
   */
  getRepeat() {
    return this.repeat_;
  }
  /**
   * Get the x-offset for the text.
   * @return {number} Horizontal text offset.
   * @api
   */
  getOffsetX() {
    return this.offsetX_;
  }
  /**
   * Get the y-offset for the text.
   * @return {number} Vertical text offset.
   * @api
   */
  getOffsetY() {
    return this.offsetY_;
  }
  /**
   * Get the fill style for the text.
   * @return {import("./Fill.js").default|null} Fill style.
   * @api
   */
  getFill() {
    return this.fill_;
  }
  /**
   * Determine whether the text rotates with the map.
   * @return {boolean|undefined} Rotate with map.
   * @api
   */
  getRotateWithView() {
    return this.rotateWithView_;
  }
  /**
   * Get the text rotation.
   * @return {number|undefined} Rotation.
   * @api
   */
  getRotation() {
    return this.rotation_;
  }
  /**
   * Get the text scale.
   * @return {number|import("../size.js").Size|undefined} Scale.
   * @api
   */
  getScale() {
    return this.scale_;
  }
  /**
   * Get the symbolizer scale array.
   * @return {import("../size.js").Size} Scale array.
   */
  getScaleArray() {
    return this.scaleArray_;
  }
  /**
   * Get the stroke style for the text.
   * @return {import("./Stroke.js").default|null} Stroke style.
   * @api
   */
  getStroke() {
    return this.stroke_;
  }
  /**
   * Get the text to be rendered.
   * @return {string|Array<string>|undefined} Text.
   * @api
   */
  getText() {
    return this.text_;
  }
  /**
   * Get the text alignment.
   * @return {CanvasTextAlign|undefined} Text align.
   * @api
   */
  getTextAlign() {
    return this.textAlign_;
  }
  /**
   * Get the justification.
   * @return {TextJustify|undefined} Justification.
   * @api
   */
  getJustify() {
    return this.justify_;
  }
  /**
   * Get the text baseline.
   * @return {CanvasTextBaseline|undefined} Text baseline.
   * @api
   */
  getTextBaseline() {
    return this.textBaseline_;
  }
  /**
   * Get the background fill style for the text.
   * @return {import("./Fill.js").default|null} Fill style.
   * @api
   */
  getBackgroundFill() {
    return this.backgroundFill_;
  }
  /**
   * Get the background stroke style for the text.
   * @return {import("./Stroke.js").default|null} Stroke style.
   * @api
   */
  getBackgroundStroke() {
    return this.backgroundStroke_;
  }
  /**
   * Get the padding for the text.
   * @return {Array<number>|null} Padding.
   * @api
   */
  getPadding() {
    return this.padding_;
  }
  /**
   * Get the declutter mode of the shape
   * @return {import("./Style.js").DeclutterMode} Shape's declutter mode
   * @api
   */
  getDeclutterMode() {
    return this.declutterMode_;
  }
  /**
   * Set the `overflow` property.
   *
   * @param {boolean} overflow Let text overflow the path that it follows.
   * @api
   */
  setOverflow(e) {
    this.overflow_ = e;
  }
  /**
   * Set the font.
   *
   * @param {string|undefined} font Font.
   * @api
   */
  setFont(e) {
    this.font_ = e;
  }
  /**
   * Set the maximum angle between adjacent characters.
   *
   * @param {number} maxAngle Angle in radians.
   * @api
   */
  setMaxAngle(e) {
    this.maxAngle_ = e;
  }
  /**
   * Set the x offset.
   *
   * @param {number} offsetX Horizontal text offset.
   * @api
   */
  setOffsetX(e) {
    this.offsetX_ = e;
  }
  /**
   * Set the y offset.
   *
   * @param {number} offsetY Vertical text offset.
   * @api
   */
  setOffsetY(e) {
    this.offsetY_ = e;
  }
  /**
   * Set the text placement.
   *
   * @param {TextPlacement} placement Placement.
   * @api
   */
  setPlacement(e) {
    this.placement_ = e;
  }
  /**
   * Set the repeat interval of the text.
   * @param {number|undefined} [repeat] Repeat interval in pixels.
   * @api
   */
  setRepeat(e) {
    this.repeat_ = e;
  }
  /**
   * Set whether to rotate the text with the view.
   *
   * @param {boolean} rotateWithView Rotate with map.
   * @api
   */
  setRotateWithView(e) {
    this.rotateWithView_ = e;
  }
  /**
   * Set the fill.
   *
   * @param {import("./Fill.js").default|null} fill Fill style.
   * @api
   */
  setFill(e) {
    this.fill_ = e;
  }
  /**
   * Set the rotation.
   *
   * @param {number|undefined} rotation Rotation.
   * @api
   */
  setRotation(e) {
    this.rotation_ = e;
  }
  /**
   * Set the scale.
   *
   * @param {number|import("../size.js").Size|undefined} scale Scale.
   * @api
   */
  setScale(e) {
    this.scale_ = e, this.scaleArray_ = Ue(e !== void 0 ? e : 1);
  }
  /**
   * Set the stroke.
   *
   * @param {import("./Stroke.js").default|null} stroke Stroke style.
   * @api
   */
  setStroke(e) {
    this.stroke_ = e;
  }
  /**
   * Set the text.
   *
   * @param {string|Array<string>|undefined} text Text.
   * @api
   */
  setText(e) {
    this.text_ = e;
  }
  /**
   * Set the text alignment.
   *
   * @param {CanvasTextAlign|undefined} textAlign Text align.
   * @api
   */
  setTextAlign(e) {
    this.textAlign_ = e;
  }
  /**
   * Set the justification.
   *
   * @param {TextJustify|undefined} justify Justification.
   * @api
   */
  setJustify(e) {
    this.justify_ = e;
  }
  /**
   * Set the text baseline.
   *
   * @param {CanvasTextBaseline|undefined} textBaseline Text baseline.
   * @api
   */
  setTextBaseline(e) {
    this.textBaseline_ = e;
  }
  /**
   * Set the background fill.
   *
   * @param {import("./Fill.js").default|null} fill Fill style.
   * @api
   */
  setBackgroundFill(e) {
    this.backgroundFill_ = e;
  }
  /**
   * Set the background stroke.
   *
   * @param {import("./Stroke.js").default|null} stroke Stroke style.
   * @api
   */
  setBackgroundStroke(e) {
    this.backgroundStroke_ = e;
  }
  /**
   * Set the padding (`[top, right, bottom, left]`).
   *
   * @param {Array<number>|null} padding Padding.
   * @api
   */
  setPadding(e) {
    this.padding_ = e;
  }
}
let mi = 0;
const pi = 0, _e = 1 << mi++, P = 1 << mi++, ot = 1 << mi++, be = 1 << mi++, Pt = 1 << mi++, Te = Math.pow(2, mi) - 1, Lc = {
  [_e]: "boolean",
  [P]: "number",
  [ot]: "string",
  [be]: "color",
  [Pt]: "number[]"
}, Oy = Object.keys(Lc).map(Number).sort(on);
function Le(n) {
  const e = [];
  for (const t of Oy)
    ky(n, t) && e.push(Lc[t]);
  return e.length === 0 ? "untyped" : e.length < 3 ? e.join(" or ") : e.slice(0, -1).join(", ") + ", or " + e[e.length - 1];
}
function ky(n, e) {
  return (n & e) === e;
}
function mt(n, e) {
  return !!(n & e);
}
function mr(n, e) {
  return n === e;
}
class Qt {
  /**
   * @param {number} type The value type.
   * @param {LiteralValue} value The literal value.
   */
  constructor(e, t) {
    this.type = e, this.value = t;
  }
}
class Fy {
  /**
   * @param {number} type The return type.
   * @param {string} operator The operator.
   * @param {...Expression} args The arguments.
   */
  constructor(e, t, ...i) {
    this.type = e, this.operator = t, this.args = i;
  }
}
function Mc() {
  return {
    variables: /* @__PURE__ */ new Set(),
    properties: /* @__PURE__ */ new Set(),
    featureId: !1,
    geometryType: !1,
    style: {}
  };
}
function Ny(n) {
  switch (n) {
    case "string":
      return ot;
    case "color":
      return be;
    case "number":
      return P;
    case "boolean":
      return _e;
    case "number[]":
      return Pt;
    default:
      throw new Error(`Unrecognized type hint: ${n}`);
  }
}
function ae(n, e, t) {
  switch (typeof n) {
    case "boolean":
      return new Qt(_e, n);
    case "number":
      return new Qt(P, n);
    case "string": {
      let s = ot;
      return D_(n) && (s |= be), mr(s & t, pi) || (s &= t), new Qt(s, n);
    }
  }
  if (!Array.isArray(n))
    throw new Error("Expression must be an array or a primitive value");
  if (n.length === 0)
    throw new Error("Empty expression");
  if (typeof n[0] == "string")
    return Hy(n, e, t);
  for (const s of n)
    if (typeof s != "number")
      throw new Error("Expected an array of numbers");
  let i = Pt;
  return (n.length === 3 || n.length === 4) && (i |= be), t && (i &= t), new Qt(i, n);
}
const A = {
  Get: "get",
  Var: "var",
  Concat: "concat",
  GeometryType: "geometry-type",
  Any: "any",
  All: "all",
  Not: "!",
  Resolution: "resolution",
  Zoom: "zoom",
  Time: "time",
  Equal: "==",
  NotEqual: "!=",
  GreaterThan: ">",
  GreaterThanOrEqualTo: ">=",
  LessThan: "<",
  LessThanOrEqualTo: "<=",
  Multiply: "*",
  Divide: "/",
  Add: "+",
  Subtract: "-",
  Clamp: "clamp",
  Mod: "%",
  Pow: "^",
  Abs: "abs",
  Floor: "floor",
  Ceil: "ceil",
  Round: "round",
  Sin: "sin",
  Cos: "cos",
  Atan: "atan",
  Sqrt: "sqrt",
  Match: "match",
  Between: "between",
  Interpolate: "interpolate",
  Coalesce: "coalesce",
  Case: "case",
  In: "in",
  Number: "number",
  String: "string",
  Array: "array",
  Color: "color",
  Id: "id",
  Band: "band",
  Palette: "palette"
}, Gy = {
  [A.Get]: U(
    ([n, e]) => e !== void 0 ? Ny(
      /** @type {string} */
      /** @type {LiteralExpression} */
      e.value
    ) : Te,
    H(1, 2),
    By
  ),
  [A.Var]: U(
    ([n]) => n.type,
    H(1, 1),
    zy
  ),
  [A.Id]: U(P | ot, Ti, Wy),
  [A.Concat]: U(
    ot,
    H(2, 1 / 0),
    ne(Te)
  ),
  [A.GeometryType]: U(ot, Ti, Xy),
  [A.Resolution]: U(P, Ti),
  [A.Zoom]: U(P, Ti),
  [A.Time]: U(P, Ti),
  [A.Any]: U(
    _e,
    H(2, 1 / 0),
    ne(_e)
  ),
  [A.All]: U(
    _e,
    H(2, 1 / 0),
    ne(_e)
  ),
  [A.Not]: U(
    _e,
    H(1, 1),
    ne(_e)
  ),
  [A.Equal]: U(
    _e,
    H(2, 2),
    ne(Te),
    Wt
  ),
  [A.NotEqual]: U(
    _e,
    H(2, 2),
    ne(Te),
    Wt
  ),
  [A.GreaterThan]: U(
    _e,
    H(2, 2),
    ne(Te),
    Wt
  ),
  [A.GreaterThanOrEqualTo]: U(
    _e,
    H(2, 2),
    ne(Te),
    Wt
  ),
  [A.LessThan]: U(
    _e,
    H(2, 2),
    ne(Te),
    Wt
  ),
  [A.LessThanOrEqualTo]: U(
    _e,
    H(2, 2),
    ne(Te),
    Wt
  ),
  [A.Multiply]: U(
    (n) => {
      let e = P | be;
      for (let t = 0; t < n.length; t++)
        e &= n[t].type;
      return e;
    },
    H(2, 1 / 0),
    ne(P | be),
    Wt
  ),
  [A.Coalesce]: U(
    (n) => {
      let e = Te;
      for (let t = 1; t < n.length; t += 2)
        e &= n[t].type;
      return e &= n[n.length - 1].type, e;
    },
    H(2, 1 / 0),
    ne(Te),
    Wt
  ),
  [A.Divide]: U(
    P,
    H(2, 2),
    ne(P)
  ),
  [A.Add]: U(
    P,
    H(2, 1 / 0),
    ne(P)
  ),
  [A.Subtract]: U(
    P,
    H(2, 2),
    ne(P)
  ),
  [A.Clamp]: U(
    P,
    H(3, 3),
    ne(P)
  ),
  [A.Mod]: U(
    P,
    H(2, 2),
    ne(P)
  ),
  [A.Pow]: U(
    P,
    H(2, 2),
    ne(P)
  ),
  [A.Abs]: U(
    P,
    H(1, 1),
    ne(P)
  ),
  [A.Floor]: U(
    P,
    H(1, 1),
    ne(P)
  ),
  [A.Ceil]: U(
    P,
    H(1, 1),
    ne(P)
  ),
  [A.Round]: U(
    P,
    H(1, 1),
    ne(P)
  ),
  [A.Sin]: U(
    P,
    H(1, 1),
    ne(P)
  ),
  [A.Cos]: U(
    P,
    H(1, 1),
    ne(P)
  ),
  [A.Atan]: U(
    P,
    H(1, 2),
    ne(P)
  ),
  [A.Sqrt]: U(
    P,
    H(1, 1),
    ne(P)
  ),
  [A.Match]: U(
    (n) => {
      let e = Te;
      for (let t = 2; t < n.length; t += 2)
        e &= n[t].type;
      return e &= n[n.length - 1].type, e;
    },
    H(4, 1 / 0),
    Vl,
    Yy
  ),
  [A.Between]: U(
    _e,
    H(3, 3),
    ne(P)
  ),
  [A.Interpolate]: U(
    (n) => {
      let e = be | P;
      for (let t = 3; t < n.length; t += 2)
        e &= n[t].type;
      return e;
    },
    H(6, 1 / 0),
    Vl,
    Uy
  ),
  [A.Case]: U(
    (n) => {
      let e = Te;
      for (let t = 1; t < n.length; t += 2)
        e &= n[t].type;
      return e &= n[n.length - 1].type, e;
    },
    H(3, 1 / 0),
    Ky,
    Vy
  ),
  [A.In]: U(_e, H(2, 2), Zy),
  [A.Number]: U(
    P,
    H(1, 1 / 0),
    ne(Te)
  ),
  [A.String]: U(
    ot,
    H(1, 1 / 0),
    ne(Te)
  ),
  [A.Array]: U(
    (n) => n.length === 3 || n.length === 4 ? Pt | be : Pt,
    H(1, 1 / 0),
    ne(P)
  ),
  [A.Color]: U(
    be,
    H(1, 4),
    ne(P)
  ),
  [A.Band]: U(
    P,
    H(1, 3),
    ne(P)
  ),
  [A.Palette]: U(be, H(2, 2), jy)
};
function By(n, e) {
  const t = ae(n[1], e);
  if (!(t instanceof Qt))
    throw new Error("Expected a literal argument for get operation");
  if (typeof t.value != "string")
    throw new Error("Expected a string argument for get operation");
  if (e.properties.add(t.value), n.length === 3) {
    const i = ae(n[2], e);
    return [t, i];
  }
  return [t];
}
function zy(n, e, t, i) {
  const s = n[1];
  if (typeof s != "string")
    throw new Error("Expected a string argument for var operation");
  if (e.variables.add(s), !("variables" in e.style) || e.style.variables[s] === void 0)
    return [new Qt(Te, s)];
  const r = e.style.variables[s], o = (
    /** @type {LiteralExpression} */
    ae(r, e)
  );
  if (o.value = s, i && !mt(i, o.type))
    throw new Error(
      `The variable ${s} has type ${Le(
        o.type
      )} but the following type was expected: ${Le(i)}`
    );
  return [o];
}
function Wy(n, e) {
  e.featureId = !0;
}
function Xy(n, e) {
  e.geometryType = !0;
}
function Ti(n, e) {
  const t = n[0];
  if (n.length !== 1)
    throw new Error(`Expected no arguments for ${t} operation`);
  return [];
}
function H(n, e) {
  return function(t, i) {
    const s = t[0], r = t.length - 1;
    if (n === e) {
      if (r !== n) {
        const o = n === 1 ? "" : "s";
        throw new Error(
          `Expected ${n} argument${o} for ${s}, got ${r}`
        );
      }
    } else if (r < n || r > e) {
      const o = e === 1 / 0 ? `${n} or more` : `${n} to ${e}`;
      throw new Error(
        `Expected ${o} arguments for ${s}, got ${r}`
      );
    }
  };
}
function ne(n) {
  return function(e, t) {
    const i = e[0], s = e.length - 1, r = new Array(s);
    for (let o = 0; o < s; ++o) {
      const a = ae(e[o + 1], t);
      if (!mt(n, a.type)) {
        const l = Le(n), h = Le(a.type);
        throw new Error(
          `Unexpected type for argument ${o} of ${i} operation, got ${l} but expected ${h}`
        );
      }
      a.type &= n, r[o] = a;
    }
    return r;
  };
}
function Wt(n, e, t) {
  const i = n[0], s = n.length - 1;
  let r = Te;
  for (let a = 0; a < t.length; ++a)
    r &= t[a].type;
  if (r === pi)
    throw new Error(
      `No common type could be found for arguments of ${i} operation`
    );
  const o = new Array(s);
  for (let a = 0; a < s; ++a)
    o[a] = ae(n[a + 1], e, r);
  return o;
}
function Ky(n, e) {
  const t = n[0], i = n.length - 1;
  if (i % 2 === 0)
    throw new Error(
      `An odd amount of arguments was expected for operation ${t}, got ${JSON.stringify(
        i
      )} instead`
    );
}
function Vl(n, e) {
  const t = n[0], i = n.length - 1;
  if (i % 2 === 1)
    throw new Error(
      `An even amount of arguments was expected for operation ${t}, got ${JSON.stringify(
        i
      )} instead`
    );
}
function Yy(n, e, t, i) {
  const s = n.length - 1;
  let o = ae(n[1], e).type;
  const a = ae(n[n.length - 1], e);
  let l = i !== void 0 ? i & a.type : a.type;
  const h = new Array(s - 2);
  for (let u = 0; u < s - 2; u += 2) {
    const d = ae(n[u + 2], e), f = ae(n[u + 3], e);
    o &= d.type, l &= f.type, h[u] = d, h[u + 1] = f;
  }
  const c = ot | P | _e;
  if (!mt(c, o))
    throw new Error(
      `Expected an input of type ${Le(
        c
      )} for the interpolate operation, got ${Le(o)} instead`
    );
  if (mr(l, pi))
    throw new Error(
      "Could not find a common output type for the following match operation: " + JSON.stringify(n)
    );
  for (let u = 0; u < s - 2; u += 2) {
    const d = ae(n[u + 2], e, o), f = ae(n[u + 3], e, l);
    h[u] = d, h[u + 1] = f;
  }
  return [
    ae(n[1], e, o),
    ...h,
    ae(n[n.length - 1], e, l)
  ];
}
function Uy(n, e, t, i) {
  const s = n[1];
  let r;
  switch (s[0]) {
    case "linear":
      r = 1;
      break;
    case "exponential":
      if (r = s[1], typeof r != "number")
        throw new Error(
          `Expected a number base for exponential interpolation, got ${JSON.stringify(r)} instead`
        );
      break;
    default:
      r = null;
  }
  if (!r)
    throw new Error(
      `Invalid interpolation type: ${JSON.stringify(s)}`
    );
  r = ae(r, e);
  let o = ae(n[2], e);
  if (!mt(P, o.type))
    throw new Error(
      `Expected an input of type number for the interpolate operation, got ${Le(o.type)} instead`
    );
  o = ae(n[2], e, P);
  const a = new Array(n.length - 3);
  for (let l = 0; l < a.length; l += 2) {
    let h = ae(n[l + 3], e);
    if (!mt(P, h.type))
      throw new Error(
        `Expected all stop input values in the interpolate operation to be of type number, got ${Le(h.type)} at position ${l + 2} instead`
      );
    let c = ae(n[l + 4], e);
    if (!mt(P | be, c.type))
      throw new Error(
        `Expected all stop output values in the interpolate operation to be a number or color, got ${Le(c.type)} at position ${l + 3} instead`
      );
    h = ae(n[l + 3], e, P), c = ae(n[l + 4], e, P | be), a[l] = h, a[l + 1] = c;
  }
  return [r, o, ...a];
}
function Vy(n, e, t, i) {
  const s = ae(n[n.length - 1], e);
  let r = i !== void 0 ? i & s.type : s.type;
  const o = new Array(n.length - 1);
  for (let a = 0; a < o.length - 1; a += 2) {
    const l = ae(n[a + 1], e), h = ae(n[a + 2], e);
    if (!mt(_e, l.type))
      throw new Error(
        `Expected all conditions in the case operation to be of type boolean, got ${Le(l.type)} at position ${a} instead`
      );
    r &= h.type, o[a] = l, o[a + 1] = h;
  }
  if (mr(r, pi))
    throw new Error(
      "Could not find a common output type for the following case operation: " + JSON.stringify(n)
    );
  for (let a = 0; a < o.length - 1; a += 2)
    o[a + 1] = ae(n[a + 2], e, r);
  return o[o.length - 1] = ae(
    n[n.length - 1],
    e,
    r
  ), o;
}
function Zy(n, e) {
  let t = (
    /** @type {any} */
    n[2]
  );
  if (!Array.isArray(t))
    throw new Error(
      'The "in" operator was provided a literal value which was not an array as second argument.'
    );
  if (typeof t[0] == "string") {
    if (t[0] !== "literal")
      throw new Error(
        'For the "in" operator, a string array should be wrapped in a "literal" operator to disambiguate from expressions.'
      );
    if (!Array.isArray(t[1]))
      throw new Error(
        'The "in" operator was provided a literal value which was not an array as second argument.'
      );
    t = t[1];
  }
  let i = ot | P;
  const s = new Array(t.length);
  for (let o = 0; o < s.length; o++) {
    const a = ae(t[o], e);
    i &= a.type, s[o] = a;
  }
  if (mr(i, pi))
    throw new Error(
      "Could not find a common type for the following in operation: " + JSON.stringify(n)
    );
  return [ae(n[1], e, i), ...s];
}
function jy(n, e) {
  const t = ae(n[1], e, P);
  if (t.type !== P)
    throw new Error(
      `The first argument of palette must be an number, got ${Le(
        t.type
      )} instead`
    );
  const i = n[2];
  if (!Array.isArray(i))
    throw new Error("The second argument of palette must be an array");
  const s = new Array(i.length);
  for (let r = 0; r < s.length; r++) {
    const o = ae(i[r], e, be);
    if (!(o instanceof Qt))
      throw new Error(
        `The palette color at index ${r} must be a literal value`
      );
    if (!mt(o.type, be))
      throw new Error(
        `The palette color at index ${r} should be of type color, got ${Le(
          o.type
        )} instead`
      );
    s[r] = o;
  }
  return [t, ...s];
}
function U(n, ...e) {
  return function(t, i, s) {
    const r = t[0];
    let o = [];
    for (let l = 0; l < e.length; l++)
      o = e[l](t, i, o, s) || o;
    let a = typeof n == "function" ? n(o) : n;
    if (s !== void 0) {
      if (!mt(a, s))
        throw new Error(
          `The following expression was expected to return ${Le(
            s
          )}, but returns ${Le(a)} instead: ${JSON.stringify(
            t
          )}`
        );
      a &= s;
    }
    if (a === pi)
      throw new Error(
        `No matching type was found for the following expression: ${JSON.stringify(
          t
        )}`
      );
    return new Fy(a, r, ...o);
  };
}
function Hy(n, e, t) {
  const i = n[0], s = Gy[i];
  if (!s)
    throw new Error(`Unknown operator: ${i}`);
  return s(n, e, t);
}
function Dc(n) {
  if (!n)
    return "";
  const e = n.getType();
  switch (e) {
    case "Point":
    case "LineString":
    case "Polygon":
      return e;
    case "MultiPoint":
    case "MultiLineString":
    case "MultiPolygon":
      return (
        /** @type {'Point'|'LineString'|'Polygon'} */
        e.substring(5)
      );
    case "Circle":
      return "Polygon";
    case "GeometryCollection":
      return Dc(
        /** @type {import("../geom/GeometryCollection.js").default} */
        n.getGeometries()[0]
      );
    default:
      return "";
  }
}
function Pc() {
  return {
    variables: {},
    properties: {},
    resolution: NaN,
    featureId: null,
    geometryType: ""
  };
}
function Nt(n, e, t) {
  const i = ae(n, t);
  if (!mt(e, i.type)) {
    const s = Le(e), r = Le(i.type);
    throw new Error(
      `Expected expression to be of type ${s}, got ${r}`
    );
  }
  return _t(i);
}
function _t(n, e) {
  if (n instanceof Qt) {
    if (n.type === be && typeof n.value == "string") {
      const i = oa(n.value);
      return function() {
        return i;
      };
    }
    return function() {
      return n.value;
    };
  }
  const t = n.operator;
  switch (t) {
    case A.Number:
    case A.String:
    case A.Coalesce:
      return Qy(n);
    case A.Get:
    case A.Var:
      return qy(n);
    case A.Id:
      return (i) => i.featureId;
    case A.GeometryType:
      return (i) => i.geometryType;
    case A.Concat: {
      const i = n.args.map((s) => _t(s));
      return (s) => "".concat(...i.map((r) => r(s).toString()));
    }
    case A.Resolution:
      return (i) => i.resolution;
    case A.Any:
    case A.All:
    case A.Not:
      return $y(n);
    case A.Equal:
    case A.NotEqual:
    case A.LessThan:
    case A.LessThanOrEqualTo:
    case A.GreaterThan:
    case A.GreaterThanOrEqualTo:
      return Jy(n);
    case A.Multiply:
    case A.Divide:
    case A.Add:
    case A.Subtract:
    case A.Clamp:
    case A.Mod:
    case A.Pow:
    case A.Abs:
    case A.Floor:
    case A.Ceil:
    case A.Round:
    case A.Sin:
    case A.Cos:
    case A.Atan:
    case A.Sqrt:
      return e1(n);
    case A.Case:
      return t1(n);
    case A.Match:
      return n1(n);
    case A.Interpolate:
      return i1(n);
    default:
      throw new Error(`Unsupported operator ${t}`);
  }
}
function Qy(n, e) {
  const t = n.operator, i = n.args.length, s = new Array(i);
  for (let r = 0; r < i; ++r)
    s[r] = _t(n.args[r]);
  switch (t) {
    case A.Coalesce:
      return (r) => {
        for (let o = 0; o < i; ++o) {
          const a = s[o](r);
          if (typeof a < "u" && a !== null)
            return a;
        }
        throw new Error("Expected one of the values to be non-null");
      };
    case A.Number:
    case A.String:
      return (r) => {
        for (let o = 0; o < i; ++o) {
          const a = s[o](r);
          if (typeof a === t)
            return a;
        }
        throw new Error(`Expected one of the values to be a ${t}`);
      };
    default:
      throw new Error(`Unsupported assertion operator ${t}`);
  }
}
function qy(n, e) {
  const i = (
    /** @type {string} */
    /** @type {LiteralExpression} */
    n.args[0].value
  );
  switch (n.operator) {
    case A.Get:
      return (s) => s.properties[i];
    case A.Var:
      return (s) => s.variables[i];
    default:
      throw new Error(`Unsupported accessor operator ${n.operator}`);
  }
}
function Jy(n, e) {
  const t = n.operator, i = _t(n.args[0]), s = _t(n.args[1]);
  switch (t) {
    case A.Equal:
      return (r) => i(r) === s(r);
    case A.NotEqual:
      return (r) => i(r) !== s(r);
    case A.LessThan:
      return (r) => i(r) < s(r);
    case A.LessThanOrEqualTo:
      return (r) => i(r) <= s(r);
    case A.GreaterThan:
      return (r) => i(r) > s(r);
    case A.GreaterThanOrEqualTo:
      return (r) => i(r) >= s(r);
    default:
      throw new Error(`Unsupported comparison operator ${t}`);
  }
}
function $y(n, e) {
  const t = n.operator, i = n.args.length, s = new Array(i);
  for (let r = 0; r < i; ++r)
    s[r] = _t(n.args[r]);
  switch (t) {
    case A.Any:
      return (r) => {
        for (let o = 0; o < i; ++o)
          if (s[o](r))
            return !0;
        return !1;
      };
    case A.All:
      return (r) => {
        for (let o = 0; o < i; ++o)
          if (!s[o](r))
            return !1;
        return !0;
      };
    case A.Not:
      return (r) => !s[0](r);
    default:
      throw new Error(`Unsupported logical operator ${t}`);
  }
}
function e1(n, e) {
  const t = n.operator, i = n.args.length, s = new Array(i);
  for (let r = 0; r < i; ++r)
    s[r] = _t(n.args[r]);
  switch (t) {
    case A.Multiply:
      return (r) => {
        let o = 1;
        for (let a = 0; a < i; ++a)
          o *= s[a](r);
        return o;
      };
    case A.Divide:
      return (r) => s[0](r) / s[1](r);
    case A.Add:
      return (r) => {
        let o = 0;
        for (let a = 0; a < i; ++a)
          o += s[a](r);
        return o;
      };
    case A.Subtract:
      return (r) => s[0](r) - s[1](r);
    case A.Clamp:
      return (r) => {
        const o = s[0](r), a = s[1](r);
        if (o < a)
          return a;
        const l = s[2](r);
        return o > l ? l : o;
      };
    case A.Mod:
      return (r) => s[0](r) % s[1](r);
    case A.Pow:
      return (r) => Math.pow(s[0](r), s[1](r));
    case A.Abs:
      return (r) => Math.abs(s[0](r));
    case A.Floor:
      return (r) => Math.floor(s[0](r));
    case A.Ceil:
      return (r) => Math.ceil(s[0](r));
    case A.Round:
      return (r) => Math.round(s[0](r));
    case A.Sin:
      return (r) => Math.sin(s[0](r));
    case A.Cos:
      return (r) => Math.cos(s[0](r));
    case A.Atan:
      return i === 2 ? (r) => Math.atan2(s[0](r), s[1](r)) : (r) => Math.atan(s[0](r));
    case A.Sqrt:
      return (r) => Math.sqrt(s[0](r));
    default:
      throw new Error(`Unsupported numeric operator ${t}`);
  }
}
function t1(n, e) {
  const t = n.args.length, i = new Array(t);
  for (let s = 0; s < t; ++s)
    i[s] = _t(n.args[s]);
  return (s) => {
    for (let r = 0; r < t - 1; r += 2)
      if (i[r](s))
        return i[r + 1](s);
    return i[t - 1](s);
  };
}
function n1(n, e) {
  const t = n.args.length, i = new Array(t);
  for (let s = 0; s < t; ++s)
    i[s] = _t(n.args[s]);
  return (s) => {
    const r = i[0](s);
    for (let o = 1; o < t; o += 2)
      if (r === i[o](s))
        return i[o + 1](s);
    return i[t - 1](s);
  };
}
function i1(n, e) {
  const t = n.args.length, i = new Array(t);
  for (let s = 0; s < t; ++s)
    i[s] = _t(n.args[s]);
  return (s) => {
    const r = i[0](s), o = i[1](s);
    let a, l;
    for (let h = 2; h < t; h += 2) {
      const c = i[h](s);
      let u = i[h + 1](s);
      const d = Array.isArray(u);
      if (d && (u = L_(u)), c >= o)
        return h === 2 ? u : d ? s1(
          r,
          o,
          a,
          l,
          c,
          u
        ) : bi(
          r,
          o,
          a,
          l,
          c,
          u
        );
      a = c, l = u;
    }
    return l;
  };
}
function bi(n, e, t, i, s, r) {
  const o = s - t;
  if (o === 0)
    return i;
  const a = e - t, l = n === 1 ? a / o : (Math.pow(n, a) - 1) / (Math.pow(n, o) - 1);
  return i + l * (r - i);
}
function s1(n, e, t, i, s, r) {
  if (s - t === 0)
    return i;
  const a = Ml(i), l = Ml(r);
  let h = l[2] - a[2];
  h > 180 ? h -= 360 : h < -180 && (h += 360);
  const c = [
    bi(n, e, t, a[0], s, l[0]),
    bi(n, e, t, a[1], s, l[1]),
    a[2] + bi(n, e, t, 0, s, h),
    bi(n, e, t, i[3], s, r[3])
  ];
  return gc(M_(c));
}
function r1(n) {
  return !0;
}
function o1(n) {
  const e = Mc(), t = a1(n, e), i = Pc();
  return function(s, r) {
    if (i.properties = s.getPropertiesInternal(), i.resolution = r, e.featureId) {
      const o = s.getId();
      o !== void 0 ? i.featureId = o : i.featureId = null;
    }
    return e.geometryType && (i.geometryType = Dc(
      s.getGeometry()
    )), t(i);
  };
}
function Zl(n) {
  const e = Mc(), t = n.length, i = new Array(t);
  for (let o = 0; o < t; ++o)
    i[o] = vo(n[o], e);
  const s = Pc(), r = new Array(t);
  return function(o, a) {
    if (s.properties = o.getPropertiesInternal(), s.resolution = a, e.featureId) {
      const h = o.getId();
      h !== void 0 ? s.featureId = h : s.featureId = null;
    }
    let l = 0;
    for (let h = 0; h < t; ++h) {
      const c = i[h](s);
      c && (r[l] = c, l += 1);
    }
    return r.length = l, r;
  };
}
function a1(n, e) {
  const t = n.length, i = new Array(t);
  for (let s = 0; s < t; ++s) {
    const r = n[s], o = "filter" in r ? Nt(r.filter, _e, e) : r1;
    let a;
    if (Array.isArray(r.style)) {
      const l = r.style.length;
      a = new Array(l);
      for (let h = 0; h < l; ++h)
        a[h] = vo(r.style[h], e);
    } else
      a = [vo(r.style, e)];
    i[s] = { filter: o, styles: a };
  }
  return function(s) {
    const r = [];
    let o = !1;
    for (let a = 0; a < t; ++a) {
      const l = i[a].filter;
      if (l(s) && !(n[a].else && o)) {
        o = !0;
        for (const h of i[a].styles) {
          const c = h(s);
          c && r.push(c);
        }
      }
    }
    return r;
  };
}
function vo(n, e) {
  const t = Qi(n, "", e), i = qi(n, "", e), s = l1(n, e), r = h1(n, e), o = ze(n, "z-index", e);
  if (!t && !i && !s && !r && !ri(n))
    throw new Error(
      "No fill, stroke, point, or text symbolizer properties in style: " + JSON.stringify(n)
    );
  const a = new qe();
  return function(l) {
    let h = !0;
    if (t) {
      const c = t(l);
      c && (h = !1), a.setFill(c);
    }
    if (i) {
      const c = i(l);
      c && (h = !1), a.setStroke(c);
    }
    if (s) {
      const c = s(l);
      c && (h = !1), a.setText(c);
    }
    if (r) {
      const c = r(l);
      c && (h = !1), a.setImage(c);
    }
    return o && a.setZIndex(o(l)), h ? null : a;
  };
}
function Qi(n, e, t) {
  let i;
  if (e + "fill-pattern-src" in n ? i = f1(n, e + "fill-", t) : i = fa(
    n,
    e + "fill-color",
    t
  ), !i)
    return null;
  const s = new gi();
  return function(r) {
    const o = i(r);
    return o === "none" ? null : (s.setColor(o), s);
  };
}
function qi(n, e, t) {
  const i = ze(
    n,
    e + "stroke-width",
    t
  ), s = fa(
    n,
    e + "stroke-color",
    t
  );
  if (!i && !s)
    return null;
  const r = Rt(
    n,
    e + "stroke-line-cap",
    t
  ), o = Rt(
    n,
    e + "stroke-line-join",
    t
  ), a = Oc(
    n,
    e + "stroke-line-dash",
    t
  ), l = ze(
    n,
    e + "stroke-line-dash-offset",
    t
  ), h = ze(
    n,
    e + "stroke-miter-limit",
    t
  ), c = new Ht();
  return function(u) {
    if (s) {
      const d = s(u);
      if (d === "none")
        return null;
      c.setColor(d);
    }
    if (i && c.setWidth(i(u)), r) {
      const d = r(u);
      if (d !== "butt" && d !== "round" && d !== "square")
        throw new Error("Expected butt, round, or square line cap");
      c.setLineCap(d);
    }
    if (o) {
      const d = o(u);
      if (d !== "bevel" && d !== "round" && d !== "miter")
        throw new Error("Expected bevel, round, or miter line join");
      c.setLineJoin(d);
    }
    return a && c.setLineDash(a(u)), l && c.setLineDashOffset(l(u)), h && c.setMiterLimit(h(u)), c;
  };
}
function l1(n, e) {
  const t = "text-", i = Rt(n, t + "value", e);
  if (!i)
    return null;
  const s = Qi(n, t, e), r = Qi(
    n,
    t + "background-",
    e
  ), o = qi(n, t, e), a = qi(
    n,
    t + "background-",
    e
  ), l = Rt(n, t + "font", e), h = ze(
    n,
    t + "max-angle",
    e
  ), c = ze(
    n,
    t + "offset-x",
    e
  ), u = ze(
    n,
    t + "offset-y",
    e
  ), d = Ji(
    n,
    t + "overflow",
    e
  ), f = Rt(
    n,
    t + "placement",
    e
  ), g = ze(n, t + "repeat", e), m = pr(n, t + "scale", e), p = Ji(
    n,
    t + "rotate-with-view",
    e
  ), _ = ze(
    n,
    t + "rotation",
    e
  ), y = Rt(n, t + "align", e), x = Rt(
    n,
    t + "justify",
    e
  ), v = Rt(
    n,
    t + "baseline",
    e
  ), E = Oc(
    n,
    t + "padding",
    e
  ), w = _r(
    n,
    t + "declutter-mode"
  ), I = new da({ declutterMode: w });
  return function(C) {
    if (I.setText(i(C)), s && I.setFill(s(C)), r && I.setBackgroundFill(r(C)), o && I.setStroke(o(C)), a && I.setBackgroundStroke(a(C)), l && I.setFont(l(C)), h && I.setMaxAngle(h(C)), c && I.setOffsetX(c(C)), u && I.setOffsetY(u(C)), d && I.setOverflow(d(C)), f) {
      const R = f(C);
      if (R !== "point" && R !== "line")
        throw new Error("Expected point or line for text-placement");
      I.setPlacement(R);
    }
    if (g && I.setRepeat(g(C)), m && I.setScale(m(C)), p && I.setRotateWithView(p(C)), _ && I.setRotation(_(C)), y) {
      const R = y(C);
      if (R !== "left" && R !== "center" && R !== "right" && R !== "end" && R !== "start")
        throw new Error(
          "Expected left, right, center, start, or end for text-align"
        );
      I.setTextAlign(R);
    }
    if (x) {
      const R = x(C);
      if (R !== "left" && R !== "right" && R !== "center")
        throw new Error("Expected left, right, or center for text-justify");
      I.setJustify(R);
    }
    if (v) {
      const R = v(C);
      if (R !== "bottom" && R !== "top" && R !== "middle" && R !== "alphabetic" && R !== "hanging")
        throw new Error(
          "Expected bottom, top, middle, alphabetic, or hanging for text-baseline"
        );
      I.setTextBaseline(R);
    }
    return E && I.setPadding(E(C)), I;
  };
}
function h1(n, e) {
  return "icon-src" in n ? c1(n, e) : "shape-points" in n ? u1(n, e) : "circle-radius" in n ? d1(n, e) : null;
}
function c1(n, e) {
  const t = "icon-", i = t + "src", s = kc(n[i], i), r = Gs(
    n,
    t + "anchor",
    e
  ), o = pr(n, t + "scale", e), a = ze(
    n,
    t + "opacity",
    e
  ), l = Gs(
    n,
    t + "displacement",
    e
  ), h = ze(
    n,
    t + "rotation",
    e
  ), c = Ji(
    n,
    t + "rotate-with-view",
    e
  ), u = Hl(n, t + "anchor-origin"), d = Ql(
    n,
    t + "anchor-x-units"
  ), f = Ql(
    n,
    t + "anchor-y-units"
  ), g = _1(n, t + "color"), m = m1(n, t + "cross-origin"), p = p1(n, t + "offset"), _ = Hl(n, t + "offset-origin"), y = Bs(n, t + "width"), x = Bs(n, t + "height"), v = g1(n, t + "size"), E = _r(
    n,
    t + "declutter-mode"
  ), w = new ss({
    src: s,
    anchorOrigin: u,
    anchorXUnits: d,
    anchorYUnits: f,
    color: g,
    crossOrigin: m,
    offset: p,
    offsetOrigin: _,
    height: x,
    width: y,
    size: v,
    declutterMode: E
  });
  return function(I) {
    return a && w.setOpacity(a(I)), l && w.setDisplacement(l(I)), h && w.setRotation(h(I)), c && w.setRotateWithView(c(I)), o && w.setScale(o(I)), r && w.setAnchor(r(I)), w;
  };
}
function u1(n, e) {
  const t = "shape-", i = t + "points", s = t + "radius", r = Eo(n[i], i), o = Eo(n[s], s), a = Qi(n, t, e), l = qi(n, t, e), h = pr(n, t + "scale", e), c = Gs(
    n,
    t + "displacement",
    e
  ), u = ze(
    n,
    t + "rotation",
    e
  ), d = Ji(
    n,
    t + "rotate-with-view",
    e
  ), f = Bs(n, t + "radius2"), g = Bs(n, t + "angle"), m = _r(
    n,
    t + "declutter-mode"
  ), p = new gr({
    points: r,
    radius: o,
    radius2: f,
    angle: g,
    declutterMode: m
  });
  return function(_) {
    return a && p.setFill(a(_)), l && p.setStroke(l(_)), c && p.setDisplacement(c(_)), u && p.setRotation(u(_)), d && p.setRotateWithView(d(_)), h && p.setScale(h(_)), p;
  };
}
function d1(n, e) {
  const t = "circle-", i = Qi(n, t, e), s = qi(n, t, e), r = ze(n, t + "radius", e), o = pr(n, t + "scale", e), a = Gs(
    n,
    t + "displacement",
    e
  ), l = ze(
    n,
    t + "rotation",
    e
  ), h = Ji(
    n,
    t + "rotate-with-view",
    e
  ), c = _r(
    n,
    t + "declutter-mode"
  ), u = new is({
    radius: 5,
    // this is arbitrary, but required - the evaluated radius is used below
    declutterMode: c
  });
  return function(d) {
    return r && u.setRadius(r(d)), i && u.setFill(i(d)), s && u.setStroke(s(d)), a && u.setDisplacement(a(d)), l && u.setRotation(l(d)), h && u.setRotateWithView(h(d)), o && u.setScale(o(d)), u;
  };
}
function ze(n, e, t) {
  if (!(e in n))
    return;
  const i = Nt(n[e], P, t);
  return function(s) {
    return Eo(i(s), e);
  };
}
function Rt(n, e, t) {
  if (!(e in n))
    return null;
  const i = Nt(n[e], ot, t);
  return function(s) {
    return kc(i(s), e);
  };
}
function f1(n, e, t) {
  const i = Rt(
    n,
    e + "pattern-src",
    t
  ), s = jl(
    n,
    e + "pattern-offset",
    t
  ), r = jl(
    n,
    e + "pattern-size",
    t
  ), o = fa(
    n,
    e + "color",
    t
  );
  return function(a) {
    return {
      src: i(a),
      offset: s && s(a),
      size: r && r(a),
      color: o && o(a)
    };
  };
}
function Ji(n, e, t) {
  if (!(e in n))
    return null;
  const i = Nt(n[e], _e, t);
  return function(s) {
    const r = i(s);
    if (typeof r != "boolean")
      throw new Error(`Expected a boolean for ${e}`);
    return r;
  };
}
function fa(n, e, t) {
  if (!(e in n))
    return null;
  const i = Nt(
    n[e],
    be | ot,
    t
  );
  return function(s) {
    return Fc(i(s), e);
  };
}
function Oc(n, e, t) {
  if (!(e in n))
    return null;
  const i = Nt(n[e], Pt, t);
  return function(s) {
    return rs(i(s), e);
  };
}
function Gs(n, e, t) {
  if (!(e in n))
    return null;
  const i = Nt(n[e], Pt, t);
  return function(s) {
    const r = rs(i(s), e);
    if (r.length !== 2)
      throw new Error(`Expected two numbers for ${e}`);
    return r;
  };
}
function jl(n, e, t) {
  if (!(e in n))
    return null;
  const i = Nt(n[e], Pt, t);
  return function(s) {
    return Nc(i(s), e);
  };
}
function pr(n, e, t) {
  if (!(e in n))
    return null;
  const i = Nt(
    n[e],
    Pt | P,
    t
  );
  return function(s) {
    return y1(i(s), e);
  };
}
function Bs(n, e) {
  const t = n[e];
  if (t !== void 0) {
    if (typeof t != "number")
      throw new Error(`Expected a number for ${e}`);
    return t;
  }
}
function g1(n, e) {
  const t = n[e];
  if (t !== void 0) {
    if (typeof t == "number")
      return Ue(t);
    if (!Array.isArray(t))
      throw new Error(`Expected a number or size array for ${e}`);
    if (t.length !== 2 || typeof t[0] != "number" || typeof t[1] != "number")
      throw new Error(`Expected a number or size array for ${e}`);
    return t;
  }
}
function m1(n, e) {
  const t = n[e];
  if (t !== void 0) {
    if (typeof t != "string")
      throw new Error(`Expected a string for ${e}`);
    return t;
  }
}
function Hl(n, e) {
  const t = n[e];
  if (t !== void 0) {
    if (t !== "bottom-left" && t !== "bottom-right" && t !== "top-left" && t !== "top-right")
      throw new Error(
        `Expected bottom-left, bottom-right, top-left, or top-right for ${e}`
      );
    return t;
  }
}
function Ql(n, e) {
  const t = n[e];
  if (t !== void 0) {
    if (t !== "pixels" && t !== "fraction")
      throw new Error(`Expected pixels or fraction for ${e}`);
    return t;
  }
}
function p1(n, e) {
  const t = n[e];
  if (t !== void 0)
    return rs(t, e);
}
function _r(n, e) {
  const t = n[e];
  if (t !== void 0) {
    if (typeof t != "string")
      throw new Error(`Expected a string for ${e}`);
    if (t !== "declutter" && t !== "obstacle" && t !== "none")
      throw new Error(`Expected declutter, obstacle, or none for ${e}`);
    return t;
  }
}
function _1(n, e) {
  const t = n[e];
  if (t !== void 0)
    return Fc(t, e);
}
function rs(n, e) {
  if (!Array.isArray(n))
    throw new Error(`Expected an array for ${e}`);
  const t = n.length;
  for (let i = 0; i < t; ++i)
    if (typeof n[i] != "number")
      throw new Error(`Expected an array of numbers for ${e}`);
  return n;
}
function kc(n, e) {
  if (typeof n != "string")
    throw new Error(`Expected a string for ${e}`);
  return n;
}
function Eo(n, e) {
  if (typeof n != "number")
    throw new Error(`Expected a number for ${e}`);
  return n;
}
function Fc(n, e) {
  if (typeof n == "string")
    return n;
  const t = rs(n, e), i = t.length;
  if (i < 3 || i > 4)
    throw new Error(`Expected a color with 3 or 4 values for ${e}`);
  return t;
}
function Nc(n, e) {
  const t = rs(n, e);
  if (t.length !== 2)
    throw new Error(`Expected an array of two numbers for ${e}`);
  return t;
}
function y1(n, e) {
  return typeof n == "number" ? n : Nc(n, e);
}
const ql = {
  RENDER_ORDER: "renderOrder"
};
class Gc extends hr {
  /**
   * @param {Options<VectorSourceType>} [options] Options.
   */
  constructor(e) {
    e = e || {};
    const t = Object.assign({}, e);
    delete t.style, delete t.renderBuffer, delete t.updateWhileAnimating, delete t.updateWhileInteracting, super(t), this.declutter_ = e.declutter ? String(e.declutter) : void 0, this.renderBuffer_ = e.renderBuffer !== void 0 ? e.renderBuffer : 100, this.style_ = null, this.styleFunction_ = void 0, this.setStyle(e.style), this.updateWhileAnimating_ = e.updateWhileAnimating !== void 0 ? e.updateWhileAnimating : !1, this.updateWhileInteracting_ = e.updateWhileInteracting !== void 0 ? e.updateWhileInteracting : !1;
  }
  /**
   * @return {string} Declutter group.
   */
  getDeclutter() {
    return this.declutter_;
  }
  /**
   * Get the topmost feature that intersects the given pixel on the viewport. Returns a promise
   * that resolves with an array of features. The array will either contain the topmost feature
   * when a hit was detected, or it will be empty.
   *
   * The hit detection algorithm used for this method is optimized for performance, but is less
   * accurate than the one used in [map.getFeaturesAtPixel()]{@link import("../Map.js").default#getFeaturesAtPixel}.
   * Text is not considered, and icons are only represented by their bounding box instead of the exact
   * image.
   *
   * @param {import("../pixel.js").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../Feature").FeatureLike>>} Promise that resolves with an array of features.
   * @api
   */
  getFeatures(e) {
    return super.getFeatures(e);
  }
  /**
   * @return {number|undefined} Render buffer.
   */
  getRenderBuffer() {
    return this.renderBuffer_;
  }
  /**
   * @return {function(import("../Feature.js").default, import("../Feature.js").default): number|null|undefined} Render
   *     order.
   */
  getRenderOrder() {
    return (
      /** @type {import("../render.js").OrderFunction|null|undefined} */
      this.get(ql.RENDER_ORDER)
    );
  }
  /**
   * Get the style for features.  This returns whatever was passed to the `style`
   * option at construction or to the `setStyle` method.
   * @return {import("../style/Style.js").StyleLike|null|undefined} Layer style.
   * @api
   */
  getStyle() {
    return this.style_;
  }
  /**
   * Get the style function.
   * @return {import("../style/Style.js").StyleFunction|undefined} Layer style function.
   * @api
   */
  getStyleFunction() {
    return this.styleFunction_;
  }
  /**
   * @return {boolean} Whether the rendered layer should be updated while
   *     animating.
   */
  getUpdateWhileAnimating() {
    return this.updateWhileAnimating_;
  }
  /**
   * @return {boolean} Whether the rendered layer should be updated while
   *     interacting.
   */
  getUpdateWhileInteracting() {
    return this.updateWhileInteracting_;
  }
  /**
   * Render declutter items for this layer
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @param {import("../layer/Layer.js").State} layerState Layer state.
   */
  renderDeclutter(e, t) {
    const i = this.getDeclutter();
    i in e.declutter || (e.declutter[i] = new Tc(9)), this.getRenderer().renderDeclutter(e, t);
  }
  /**
   * @param {import("../render.js").OrderFunction|null|undefined} renderOrder
   *     Render order.
   */
  setRenderOrder(e) {
    this.set(ql.RENDER_ORDER, e);
  }
  /**
   * Set the style for features.  This can be a single style object, an array
   * of styles, or a function that takes a feature and resolution and returns
   * an array of styles. If set to `null`, the layer has no style (a `null` style),
   * so only features that have their own styles will be rendered in the layer. Call
   * `setStyle()` without arguments to reset to the default style. See
   * [the ol/style/Style module]{@link module:ol/style/Style~Style} for information on the default style.
   *
   * If your layer has a static style, you can use [flat style]{@link module:ol/style/flat~FlatStyle} object
   * literals instead of using the `Style` and symbolizer constructors (`Fill`, `Stroke`, etc.):
   * ```js
   * vectorLayer.setStyle({
   *   "fill-color": "yellow",
   *   "stroke-color": "black",
   *   "stroke-width": 4
   * })
   * ```
   *
   * @param {import("../style/Style.js").StyleLike|import("../style/flat.js").FlatStyleLike|null} [style] Layer style.
   * @api
   */
  setStyle(e) {
    this.style_ = v1(e), this.styleFunction_ = e === null ? void 0 : My(this.style_), this.changed();
  }
}
function v1(n) {
  if (n === void 0)
    return Dy;
  if (!n)
    return null;
  if (typeof n == "function" || n instanceof qe)
    return n;
  if (!Array.isArray(n))
    return Zl([n]);
  if (n.length === 0)
    return [];
  const e = n.length, t = n[0];
  if (t instanceof qe) {
    const s = new Array(e);
    for (let r = 0; r < e; ++r) {
      const o = n[r];
      if (!(o instanceof qe))
        throw new Error("Expected a list of style instances");
      s[r] = o;
    }
    return s;
  }
  if ("style" in t) {
    const s = new Array(e);
    for (let r = 0; r < e; ++r) {
      const o = n[r];
      if (!("style" in o))
        throw new Error("Expected a list of rules with a style property");
      s[r] = o;
    }
    return o1(s);
  }
  return Zl(
    /** @type {Array<import("../style/flat.js").FlatStyle>} */
    n
  );
}
class E1 extends Fo {
  /**
   * @param {import("../Map.js").default} map Map.
   */
  constructor(e) {
    super(), this.map_ = e;
  }
  /**
   * @abstract
   * @param {import("../render/EventType.js").default} type Event type.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   */
  dispatchRenderEvent(e, t) {
    ie();
  }
  /**
   * @param {import("../Map.js").FrameState} frameState FrameState.
   * @protected
   */
  calculateMatrices2D(e) {
    const t = e.viewState, i = e.coordinateToPixelTransform, s = e.pixelToCoordinateTransform;
    Dt(
      i,
      e.size[0] / 2,
      e.size[1] / 2,
      1 / t.resolution,
      -1 / t.resolution,
      -t.rotation,
      -t.center[0],
      -t.center[1]
    ), qo(s, i);
  }
  /**
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("../Map.js").FrameState} frameState FrameState.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {boolean} checkWrapped Check for wrapped geometries.
   * @param {import("./vector.js").FeatureCallback<T>} callback Feature callback.
   * @param {S} thisArg Value to use as `this` when executing `callback`.
   * @param {function(this: U, import("../layer/Layer.js").default): boolean} layerFilter Layer filter
   *     function, only layers which are visible and for which this function
   *     returns `true` will be tested for features.  By default, all visible
   *     layers will be tested.
   * @param {U} thisArg2 Value to use as `this` when executing `layerFilter`.
   * @return {T|undefined} Callback result.
   * @template S,T,U
   */
  forEachFeatureAtCoordinate(e, t, i, s, r, o, a, l) {
    let h;
    const c = t.viewState;
    function u(v, E, w, I) {
      return r.call(o, E, v ? w : null, I);
    }
    const d = c.projection, f = Hh(e.slice(), d), g = [[0, 0]];
    if (d.canWrapX() && s) {
      const v = d.getExtent(), E = he(v);
      g.push([-E, 0], [E, 0]);
    }
    const m = t.layerStatesArray, p = m.length, _ = (
      /** @type {Array<HitMatch<T>>} */
      []
    ), y = [];
    for (let v = 0; v < g.length; v++)
      for (let E = p - 1; E >= 0; --E) {
        const w = m[E], I = w.layer;
        if (I.hasRenderer() && sa(w, c) && a.call(l, I)) {
          const C = I.getRenderer(), R = I.getSource();
          if (C && R) {
            const z = R.getWrapX() ? f : e, F = u.bind(
              null,
              w.managed
            );
            y[0] = z[0] + g[v][0], y[1] = z[1] + g[v][1], h = C.forEachFeatureAtCoordinate(
              y,
              t,
              i,
              F,
              _
            );
          }
          if (h)
            return h;
        }
      }
    if (_.length === 0)
      return;
    const x = 1 / _.length;
    return _.forEach((v, E) => v.distanceSq += E * x), _.sort((v, E) => v.distanceSq - E.distanceSq), _.some((v) => h = v.callback(v.feature, v.layer, v.geometry)), h;
  }
  /**
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("../Map.js").FrameState} frameState FrameState.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {boolean} checkWrapped Check for wrapped geometries.
   * @param {function(this: U, import("../layer/Layer.js").default): boolean} layerFilter Layer filter
   *     function, only layers which are visible and for which this function
   *     returns `true` will be tested for features.  By default, all visible
   *     layers will be tested.
   * @param {U} thisArg Value to use as `this` when executing `layerFilter`.
   * @return {boolean} Is there a feature at the given coordinate?
   * @template U
   */
  hasFeatureAtCoordinate(e, t, i, s, r, o) {
    return this.forEachFeatureAtCoordinate(
      e,
      t,
      i,
      s,
      Bi,
      this,
      r,
      o
    ) !== void 0;
  }
  /**
   * @return {import("../Map.js").default} Map.
   */
  getMap() {
    return this.map_;
  }
  /**
   * Render.
   * @abstract
   * @param {?import("../Map.js").FrameState} frameState Frame state.
   */
  renderFrame(e) {
    ie();
  }
  /**
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @protected
   */
  scheduleExpireIconCache(e) {
    ft.canExpireCache() && e.postRenderFunctions.push(x1);
  }
}
function x1(n, e) {
  ft.expire();
}
class w1 extends E1 {
  /**
   * @param {import("../Map.js").default} map Map.
   */
  constructor(e) {
    super(e), this.fontChangeListenerKey_ = se(
      St,
      ii.PROPERTYCHANGE,
      e.redrawText.bind(e)
    ), this.element_ = document.createElement("div");
    const t = this.element_.style;
    t.position = "absolute", t.width = "100%", t.height = "100%", t.zIndex = "0", this.element_.className = fr + " ol-layers";
    const i = e.getViewport();
    i.insertBefore(this.element_, i.firstChild || null), this.children_ = [], this.renderedVisible_ = !0;
  }
  /**
   * @param {import("../render/EventType.js").default} type Event type.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   */
  dispatchRenderEvent(e, t) {
    const i = this.getMap();
    if (i.hasListener(e)) {
      const s = new oc(e, void 0, t);
      i.dispatchEvent(s);
    }
  }
  disposeInternal() {
    ge(this.fontChangeListenerKey_), this.element_.parentNode.removeChild(this.element_), super.disposeInternal();
  }
  /**
   * Render.
   * @param {?import("../Map.js").FrameState} frameState Frame state.
   */
  renderFrame(e) {
    if (!e) {
      this.renderedVisible_ && (this.element_.style.display = "none", this.renderedVisible_ = !1);
      return;
    }
    this.calculateMatrices2D(e), this.dispatchRenderEvent(Je.PRECOMPOSE, e);
    const t = e.layerStatesArray.sort(function(a, l) {
      return a.zIndex - l.zIndex;
    });
    t.some(
      (a) => a.layer instanceof Gc && a.layer.getDeclutter()
    ) && (e.declutter = {});
    const s = e.viewState;
    this.children_.length = 0;
    const r = [];
    let o = null;
    for (let a = 0, l = t.length; a < l; ++a) {
      const h = t[a];
      e.layerIndex = a;
      const c = h.layer, u = c.getSourceState();
      if (!sa(h, s) || u != "ready" && u != "undefined") {
        c.unrender();
        continue;
      }
      const d = c.render(e, o);
      d && (d !== o && (this.children_.push(d), o = d), r.push(h));
    }
    this.declutter(e, r), A_(this.element_, this.children_), this.dispatchRenderEvent(Je.POSTCOMPOSE, e), this.renderedVisible_ || (this.element_.style.display = "", this.renderedVisible_ = !0), this.scheduleExpireIconCache(e);
  }
  /**
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @param {Array<import('../layer/Layer.js').State>} layerStates Layers.
   */
  declutter(e, t) {
    for (let i = t.length - 1; i >= 0; --i) {
      const s = t[i], r = s.layer;
      r.getDeclutter() && r.renderDeclutter(e, s);
    }
    t.forEach(
      (i) => i.layer.renderDeferred(e)
    );
  }
}
class Zt extends Ft {
  /**
   * @param {EventType} type The event type.
   * @param {BaseLayer} layer The layer.
   */
  constructor(e, t) {
    super(e), this.layer = t;
  }
}
const Yr = {
  LAYERS: "layers"
};
class _i extends Wh {
  /**
   * @param {Options} [options] Layer options.
   */
  constructor(e) {
    e = e || {};
    const t = (
      /** @type {Options} */
      Object.assign({}, e)
    );
    delete t.layers;
    let i = e.layers;
    super(t), this.on, this.once, this.un, this.layersListenerKeys_ = [], this.listenerKeys_ = {}, this.addChangeListener(Yr.LAYERS, this.handleLayersChanged_), i ? Array.isArray(i) ? i = new dt(i.slice(), { unique: !0 }) : te(
      typeof /** @type {?} */
      i.getArray == "function",
      "Expected `layers` to be an array or a `Collection`"
    ) : i = new dt(void 0, { unique: !0 }), this.setLayers(i);
  }
  /**
   * @private
   */
  handleLayerChange_() {
    this.changed();
  }
  /**
   * @private
   */
  handleLayersChanged_() {
    this.layersListenerKeys_.forEach(ge), this.layersListenerKeys_.length = 0;
    const e = this.getLayers();
    this.layersListenerKeys_.push(
      se(e, Ne.ADD, this.handleLayersAdd_, this),
      se(
        e,
        Ne.REMOVE,
        this.handleLayersRemove_,
        this
      )
    );
    for (const i in this.listenerKeys_)
      this.listenerKeys_[i].forEach(ge);
    es(this.listenerKeys_);
    const t = e.getArray();
    for (let i = 0, s = t.length; i < s; i++) {
      const r = t[i];
      this.registerLayerListeners_(r), this.dispatchEvent(new Zt("addlayer", r));
    }
    this.changed();
  }
  /**
   * @param {BaseLayer} layer The layer.
   */
  registerLayerListeners_(e) {
    const t = [
      se(
        e,
        ii.PROPERTYCHANGE,
        this.handleLayerChange_,
        this
      ),
      se(e, Z.CHANGE, this.handleLayerChange_, this)
    ];
    e instanceof _i && t.push(
      se(e, "addlayer", this.handleLayerGroupAdd_, this),
      se(e, "removelayer", this.handleLayerGroupRemove_, this)
    ), this.listenerKeys_[oe(e)] = t;
  }
  /**
   * @param {GroupEvent} event The layer group event.
   */
  handleLayerGroupAdd_(e) {
    this.dispatchEvent(new Zt("addlayer", e.layer));
  }
  /**
   * @param {GroupEvent} event The layer group event.
   */
  handleLayerGroupRemove_(e) {
    this.dispatchEvent(new Zt("removelayer", e.layer));
  }
  /**
   * @param {import("../Collection.js").CollectionEvent<import("./Base.js").default>} collectionEvent CollectionEvent.
   * @private
   */
  handleLayersAdd_(e) {
    const t = e.element;
    this.registerLayerListeners_(t), this.dispatchEvent(new Zt("addlayer", t)), this.changed();
  }
  /**
   * @param {import("../Collection.js").CollectionEvent<import("./Base.js").default>} collectionEvent CollectionEvent.
   * @private
   */
  handleLayersRemove_(e) {
    const t = e.element, i = oe(t);
    this.listenerKeys_[i].forEach(ge), delete this.listenerKeys_[i], this.dispatchEvent(new Zt("removelayer", t)), this.changed();
  }
  /**
   * Returns the {@link module:ol/Collection~Collection collection} of {@link module:ol/layer/Layer~Layer layers}
   * in this group.
   * @return {!Collection<import("./Base.js").default>} Collection of
   *   {@link module:ol/layer/Base~BaseLayer layers} that are part of this group.
   * @observable
   * @api
   */
  getLayers() {
    return (
      /** @type {!Collection<import("./Base.js").default>} */
      this.get(Yr.LAYERS)
    );
  }
  /**
   * Set the {@link module:ol/Collection~Collection collection} of {@link module:ol/layer/Layer~Layer layers}
   * in this group.
   * @param {!Collection<import("./Base.js").default>} layers Collection of
   *   {@link module:ol/layer/Base~BaseLayer layers} that are part of this group.
   * @observable
   * @api
   */
  setLayers(e) {
    const t = this.getLayers();
    if (t) {
      const i = t.getArray();
      for (let s = 0, r = i.length; s < r; ++s)
        this.dispatchEvent(new Zt("removelayer", i[s]));
    }
    this.set(Yr.LAYERS, e);
  }
  /**
   * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be modified in place).
   * @return {Array<import("./Layer.js").default>} Array of layers.
   */
  getLayersArray(e) {
    return e = e !== void 0 ? e : [], this.getLayers().forEach(function(t) {
      t.getLayersArray(e);
    }), e;
  }
  /**
   * Get the layer states list and use this groups z-index as the default
   * for all layers in this and nested groups, if it is unset at this point.
   * If dest is not provided and this group's z-index is undefined
   * 0 is used a the default z-index.
   * @param {Array<import("./Layer.js").State>} [dest] Optional list
   * of layer states (to be modified in place).
   * @return {Array<import("./Layer.js").State>} List of layer states.
   */
  getLayerStatesArray(e) {
    const t = e !== void 0 ? e : [], i = t.length;
    this.getLayers().forEach(function(o) {
      o.getLayerStatesArray(t);
    });
    const s = this.getLayerState();
    let r = s.zIndex;
    !e && s.zIndex === void 0 && (r = 0);
    for (let o = i, a = t.length; o < a; o++) {
      const l = t[o];
      l.opacity *= s.opacity, l.visible = l.visible && s.visible, l.maxResolution = Math.min(
        l.maxResolution,
        s.maxResolution
      ), l.minResolution = Math.max(
        l.minResolution,
        s.minResolution
      ), l.minZoom = Math.max(l.minZoom, s.minZoom), l.maxZoom = Math.min(l.maxZoom, s.maxZoom), s.extent !== void 0 && (l.extent !== void 0 ? l.extent = Di(
        l.extent,
        s.extent
      ) : l.extent = s.extent), l.zIndex === void 0 && (l.zIndex = r);
    }
    return t;
  }
  /**
   * @return {import("../source/Source.js").State} Source state.
   */
  getSourceState() {
    return "ready";
  }
}
class Un extends Ft {
  /**
   * @param {string} type Event type.
   * @param {import("./Map.js").default} map Map.
   * @param {?import("./Map.js").FrameState} [frameState] Frame state.
   */
  constructor(e, t, i) {
    super(e), this.map = t, this.frameState = i !== void 0 ? i : null;
  }
}
class Ut extends Un {
  /**
   * @param {string} type Event type.
   * @param {import("./Map.js").default} map Map.
   * @param {EVENT} originalEvent Original event.
   * @param {boolean} [dragging] Is the map currently being dragged?
   * @param {import("./Map.js").FrameState} [frameState] Frame state.
   * @param {Array<PointerEvent>} [activePointers] Active pointers.
   */
  constructor(e, t, i, s, r, o) {
    super(e, t, r), this.originalEvent = i, this.pixel_ = null, this.coordinate_ = null, this.dragging = s !== void 0 ? s : !1, this.activePointers = o;
  }
  /**
   * The map pixel relative to the viewport corresponding to the original event.
   * @type {import("./pixel.js").Pixel}
   * @api
   */
  get pixel() {
    return this.pixel_ || (this.pixel_ = this.map.getEventPixel(this.originalEvent)), this.pixel_;
  }
  set pixel(e) {
    this.pixel_ = e;
  }
  /**
   * The coordinate corresponding to the original browser event.  This will be in the user
   * projection if one is set.  Otherwise it will be in the view projection.
   * @type {import("./coordinate.js").Coordinate}
   * @api
   */
  get coordinate() {
    return this.coordinate_ || (this.coordinate_ = this.map.getCoordinateFromPixel(this.pixel)), this.coordinate_;
  }
  set coordinate(e) {
    this.coordinate_ = e;
  }
  /**
   * Prevents the default browser action.
   * See https://developer.mozilla.org/en-US/docs/Web/API/event.preventDefault.
   * @api
   */
  preventDefault() {
    super.preventDefault(), "preventDefault" in this.originalEvent && this.originalEvent.preventDefault();
  }
  /**
   * Prevents further propagation of the current event.
   * See https://developer.mozilla.org/en-US/docs/Web/API/event.stopPropagation.
   * @api
   */
  stopPropagation() {
    super.stopPropagation(), "stopPropagation" in this.originalEvent && this.originalEvent.stopPropagation();
  }
}
const pe = {
  /**
   * A true single click with no dragging and no double click. Note that this
   * event is delayed by 250 ms to ensure that it is not a double click.
   * @event module:ol/MapBrowserEvent~MapBrowserEvent#singleclick
   * @api
   */
  SINGLECLICK: "singleclick",
  /**
   * A click with no dragging. A double click will fire two of this.
   * @event module:ol/MapBrowserEvent~MapBrowserEvent#click
   * @api
   */
  CLICK: Z.CLICK,
  /**
   * A true double click, with no dragging.
   * @event module:ol/MapBrowserEvent~MapBrowserEvent#dblclick
   * @api
   */
  DBLCLICK: Z.DBLCLICK,
  /**
   * Triggered when a pointer is dragged.
   * @event module:ol/MapBrowserEvent~MapBrowserEvent#pointerdrag
   * @api
   */
  POINTERDRAG: "pointerdrag",
  /**
   * Triggered when a pointer is moved. Note that on touch devices this is
   * triggered when the map is panned, so is not the same as mousemove.
   * @event module:ol/MapBrowserEvent~MapBrowserEvent#pointermove
   * @api
   */
  POINTERMOVE: "pointermove",
  POINTERDOWN: "pointerdown",
  POINTERUP: "pointerup",
  POINTEROVER: "pointerover",
  POINTEROUT: "pointerout",
  POINTERENTER: "pointerenter",
  POINTERLEAVE: "pointerleave",
  POINTERCANCEL: "pointercancel"
}, xo = {
  POINTERMOVE: "pointermove",
  POINTERDOWN: "pointerdown",
  POINTERUP: "pointerup",
  POINTEROVER: "pointerover",
  POINTEROUT: "pointerout",
  POINTERENTER: "pointerenter",
  POINTERLEAVE: "pointerleave",
  POINTERCANCEL: "pointercancel"
};
class C1 extends $s {
  /**
   * @param {import("./Map.js").default} map The map with the viewport to listen to events on.
   * @param {number} [moveTolerance] The minimal distance the pointer must travel to trigger a move.
   */
  constructor(e, t) {
    super(e), this.map_ = e, this.clickTimeoutId_, this.emulateClicks_ = !1, this.dragging_ = !1, this.dragListenerKeys_ = [], this.moveTolerance_ = t === void 0 ? 1 : t, this.down_ = null;
    const i = this.map_.getViewport();
    this.activePointers_ = [], this.trackedTouches_ = {}, this.element_ = i, this.pointerdownListenerKey_ = se(
      i,
      xo.POINTERDOWN,
      this.handlePointerDown_,
      this
    ), this.originalPointerMoveEvent_, this.relayedListenerKey_ = se(
      i,
      xo.POINTERMOVE,
      this.relayMoveEvent_,
      this
    ), this.boundHandleTouchMove_ = this.handleTouchMove_.bind(this), this.element_.addEventListener(
      Z.TOUCHMOVE,
      this.boundHandleTouchMove_,
      uc ? { passive: !1 } : !1
    );
  }
  /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */
  emulateClick_(e) {
    let t = new Ut(
      pe.CLICK,
      this.map_,
      e
    );
    this.dispatchEvent(t), this.clickTimeoutId_ !== void 0 ? (clearTimeout(this.clickTimeoutId_), this.clickTimeoutId_ = void 0, t = new Ut(
      pe.DBLCLICK,
      this.map_,
      e
    ), this.dispatchEvent(t)) : this.clickTimeoutId_ = setTimeout(() => {
      this.clickTimeoutId_ = void 0;
      const i = new Ut(
        pe.SINGLECLICK,
        this.map_,
        e
      );
      this.dispatchEvent(i);
    }, 250);
  }
  /**
   * Keeps track on how many pointers are currently active.
   *
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */
  updateActivePointers_(e) {
    const t = e, i = t.pointerId;
    if (t.type == pe.POINTERUP || t.type == pe.POINTERCANCEL) {
      delete this.trackedTouches_[i];
      for (const s in this.trackedTouches_)
        if (this.trackedTouches_[s].target !== t.target) {
          delete this.trackedTouches_[s];
          break;
        }
    } else
      (t.type == pe.POINTERDOWN || t.type == pe.POINTERMOVE) && (this.trackedTouches_[i] = t);
    this.activePointers_ = Object.values(this.trackedTouches_);
  }
  /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */
  handlePointerUp_(e) {
    this.updateActivePointers_(e);
    const t = new Ut(
      pe.POINTERUP,
      this.map_,
      e,
      void 0,
      void 0,
      this.activePointers_
    );
    this.dispatchEvent(t), this.emulateClicks_ && !t.defaultPrevented && !this.dragging_ && this.isMouseActionButton_(e) && this.emulateClick_(this.down_), this.activePointers_.length === 0 && (this.dragListenerKeys_.forEach(ge), this.dragListenerKeys_.length = 0, this.dragging_ = !1, this.down_ = null);
  }
  /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @return {boolean} If the left mouse button was pressed.
   * @private
   */
  isMouseActionButton_(e) {
    return e.button === 0;
  }
  /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */
  handlePointerDown_(e) {
    this.emulateClicks_ = this.activePointers_.length === 0, this.updateActivePointers_(e);
    const t = new Ut(
      pe.POINTERDOWN,
      this.map_,
      e,
      void 0,
      void 0,
      this.activePointers_
    );
    if (this.dispatchEvent(t), this.down_ = new PointerEvent(e.type, e), Object.defineProperty(this.down_, "target", {
      writable: !1,
      value: e.target
    }), this.dragListenerKeys_.length === 0) {
      const i = this.map_.getOwnerDocument();
      this.dragListenerKeys_.push(
        se(
          i,
          pe.POINTERMOVE,
          this.handlePointerMove_,
          this
        ),
        se(i, pe.POINTERUP, this.handlePointerUp_, this),
        /* Note that the listener for `pointercancel is set up on
         * `pointerEventHandler_` and not `documentPointerEventHandler_` like
         * the `pointerup` and `pointermove` listeners.
         *
         * The reason for this is the following: `TouchSource.vacuumTouches_()`
         * issues `pointercancel` events, when there was no `touchend` for a
         * `touchstart`. Now, let's say a first `touchstart` is registered on
         * `pointerEventHandler_`. The `documentPointerEventHandler_` is set up.
         * But `documentPointerEventHandler_` doesn't know about the first
         * `touchstart`. If there is no `touchend` for the `touchstart`, we can
         * only receive a `touchcancel` from `pointerEventHandler_`, because it is
         * only registered there.
         */
        se(
          this.element_,
          pe.POINTERCANCEL,
          this.handlePointerUp_,
          this
        )
      ), this.element_.getRootNode && this.element_.getRootNode() !== i && this.dragListenerKeys_.push(
        se(
          this.element_.getRootNode(),
          pe.POINTERUP,
          this.handlePointerUp_,
          this
        )
      );
    }
  }
  /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */
  handlePointerMove_(e) {
    if (this.isMoving_(e)) {
      this.updateActivePointers_(e), this.dragging_ = !0;
      const t = new Ut(
        pe.POINTERDRAG,
        this.map_,
        e,
        this.dragging_,
        void 0,
        this.activePointers_
      );
      this.dispatchEvent(t);
    }
  }
  /**
   * Wrap and relay a pointermove event.
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */
  relayMoveEvent_(e) {
    this.originalPointerMoveEvent_ = e;
    const t = !!(this.down_ && this.isMoving_(e));
    this.dispatchEvent(
      new Ut(
        pe.POINTERMOVE,
        this.map_,
        e,
        t
      )
    );
  }
  /**
   * Flexible handling of a `touch-action: none` css equivalent: because calling
   * `preventDefault()` on a `pointermove` event does not stop native page scrolling
   * and zooming, we also listen for `touchmove` and call `preventDefault()` on it
   * when an interaction (currently `DragPan` handles the event.
   * @param {TouchEvent} event Event.
   * @private
   */
  handleTouchMove_(e) {
    const t = this.originalPointerMoveEvent_;
    (!t || t.defaultPrevented) && (typeof e.cancelable != "boolean" || e.cancelable === !0) && e.preventDefault();
  }
  /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @return {boolean} Is moving.
   * @private
   */
  isMoving_(e) {
    return this.dragging_ || Math.abs(e.clientX - this.down_.clientX) > this.moveTolerance_ || Math.abs(e.clientY - this.down_.clientY) > this.moveTolerance_;
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    this.relayedListenerKey_ && (ge(this.relayedListenerKey_), this.relayedListenerKey_ = null), this.element_.removeEventListener(
      Z.TOUCHMOVE,
      this.boundHandleTouchMove_
    ), this.pointerdownListenerKey_ && (ge(this.pointerdownListenerKey_), this.pointerdownListenerKey_ = null), this.dragListenerKeys_.forEach(ge), this.dragListenerKeys_.length = 0, this.element_ = null, super.disposeInternal();
  }
}
const Vt = {
  /**
   * Triggered after a map frame is rendered.
   * @event module:ol/MapEvent~MapEvent#postrender
   * @api
   */
  POSTRENDER: "postrender",
  /**
   * Triggered when the map starts moving.
   * @event module:ol/MapEvent~MapEvent#movestart
   * @api
   */
  MOVESTART: "movestart",
  /**
   * Triggered after the map is moved.
   * @event module:ol/MapEvent~MapEvent#moveend
   * @api
   */
  MOVEEND: "moveend",
  /**
   * Triggered when loading of additional map data (tiles, images, features) starts.
   * @event module:ol/MapEvent~MapEvent#loadstart
   * @api
   */
  LOADSTART: "loadstart",
  /**
   * Triggered when loading of additional map data has completed.
   * @event module:ol/MapEvent~MapEvent#loadend
   * @api
   */
  LOADEND: "loadend"
}, Se = {
  LAYERGROUP: "layergroup",
  SIZE: "size",
  TARGET: "target",
  VIEW: "view"
}, zs = 1 / 0;
class A1 {
  /**
   * @param {function(T): number} priorityFunction Priority function.
   * @param {function(T): string} keyFunction Key function.
   */
  constructor(e, t) {
    this.priorityFunction_ = e, this.keyFunction_ = t, this.elements_ = [], this.priorities_ = [], this.queuedElements_ = {};
  }
  /**
   * FIXME empty description for jsdoc
   */
  clear() {
    this.elements_.length = 0, this.priorities_.length = 0, es(this.queuedElements_);
  }
  /**
   * Remove and return the highest-priority element. O(log N).
   * @return {T} Element.
   */
  dequeue() {
    const e = this.elements_, t = this.priorities_, i = e[0];
    e.length == 1 ? (e.length = 0, t.length = 0) : (e[0] = /** @type {T} */
    e.pop(), t[0] = /** @type {number} */
    t.pop(), this.siftUp_(0));
    const s = this.keyFunction_(i);
    return delete this.queuedElements_[s], i;
  }
  /**
   * Enqueue an element. O(log N).
   * @param {T} element Element.
   * @return {boolean} The element was added to the queue.
   */
  enqueue(e) {
    te(
      !(this.keyFunction_(e) in this.queuedElements_),
      "Tried to enqueue an `element` that was already added to the queue"
    );
    const t = this.priorityFunction_(e);
    return t != zs ? (this.elements_.push(e), this.priorities_.push(t), this.queuedElements_[this.keyFunction_(e)] = !0, this.siftDown_(0, this.elements_.length - 1), !0) : !1;
  }
  /**
   * @return {number} Count.
   */
  getCount() {
    return this.elements_.length;
  }
  /**
   * Gets the index of the left child of the node at the given index.
   * @param {number} index The index of the node to get the left child for.
   * @return {number} The index of the left child.
   * @private
   */
  getLeftChildIndex_(e) {
    return e * 2 + 1;
  }
  /**
   * Gets the index of the right child of the node at the given index.
   * @param {number} index The index of the node to get the right child for.
   * @return {number} The index of the right child.
   * @private
   */
  getRightChildIndex_(e) {
    return e * 2 + 2;
  }
  /**
   * Gets the index of the parent of the node at the given index.
   * @param {number} index The index of the node to get the parent for.
   * @return {number} The index of the parent.
   * @private
   */
  getParentIndex_(e) {
    return e - 1 >> 1;
  }
  /**
   * Make this a heap. O(N).
   * @private
   */
  heapify_() {
    let e;
    for (e = (this.elements_.length >> 1) - 1; e >= 0; e--)
      this.siftUp_(e);
  }
  /**
   * @return {boolean} Is empty.
   */
  isEmpty() {
    return this.elements_.length === 0;
  }
  /**
   * @param {string} key Key.
   * @return {boolean} Is key queued.
   */
  isKeyQueued(e) {
    return e in this.queuedElements_;
  }
  /**
   * @param {T} element Element.
   * @return {boolean} Is queued.
   */
  isQueued(e) {
    return this.isKeyQueued(this.keyFunction_(e));
  }
  /**
   * @param {number} index The index of the node to move down.
   * @private
   */
  siftUp_(e) {
    const t = this.elements_, i = this.priorities_, s = t.length, r = t[e], o = i[e], a = e;
    for (; e < s >> 1; ) {
      const l = this.getLeftChildIndex_(e), h = this.getRightChildIndex_(e), c = h < s && i[h] < i[l] ? h : l;
      t[e] = t[c], i[e] = i[c], e = c;
    }
    t[e] = r, i[e] = o, this.siftDown_(a, e);
  }
  /**
   * @param {number} startIndex The index of the root.
   * @param {number} index The index of the node to move up.
   * @private
   */
  siftDown_(e, t) {
    const i = this.elements_, s = this.priorities_, r = i[t], o = s[t];
    for (; t > e; ) {
      const a = this.getParentIndex_(t);
      if (s[a] > o)
        i[t] = i[a], s[t] = s[a], t = a;
      else
        break;
    }
    i[t] = r, s[t] = o;
  }
  /**
   * FIXME empty description for jsdoc
   */
  reprioritize() {
    const e = this.priorityFunction_, t = this.elements_, i = this.priorities_;
    let s = 0;
    const r = t.length;
    let o, a, l;
    for (a = 0; a < r; ++a)
      o = t[a], l = e(o), l == zs ? delete this.queuedElements_[this.keyFunction_(o)] : (i[s] = l, t[s++] = o);
    t.length = s, i.length = s, this.heapify_();
  }
}
class I1 extends A1 {
  /**
   * @param {PriorityFunction} tilePriorityFunction Tile priority function.
   * @param {function(): ?} tileChangeCallback Function called on each tile change event.
   */
  constructor(e, t) {
    super(
      /**
       * @param {Array} element Element.
       * @return {number} Priority.
       */
      function(i) {
        return e.apply(null, i);
      },
      /**
       * @param {Array} element Element.
       * @return {string} Key.
       */
      function(i) {
        return (
          /** @type {import("./Tile.js").default} */
          i[0].getKey()
        );
      }
    ), this.boundHandleTileChange_ = this.handleTileChange.bind(this), this.tileChangeCallback_ = t, this.tilesLoading_ = 0, this.tilesLoadingKeys_ = {};
  }
  /**
   * @param {Array} element Element.
   * @return {boolean} The element was added to the queue.
   */
  enqueue(e) {
    const t = super.enqueue(e);
    return t && e[0].addEventListener(Z.CHANGE, this.boundHandleTileChange_), t;
  }
  /**
   * @return {number} Number of tiles loading.
   */
  getTilesLoading() {
    return this.tilesLoading_;
  }
  /**
   * @param {import("./events/Event.js").default} event Event.
   * @protected
   */
  handleTileChange(e) {
    const t = (
      /** @type {import("./Tile.js").default} */
      e.target
    ), i = t.getState();
    if (i === N.LOADED || i === N.ERROR || i === N.EMPTY) {
      i !== N.ERROR && t.removeEventListener(Z.CHANGE, this.boundHandleTileChange_);
      const s = t.getKey();
      s in this.tilesLoadingKeys_ && (delete this.tilesLoadingKeys_[s], --this.tilesLoading_), this.tileChangeCallback_();
    }
  }
  /**
   * @param {number} maxTotalLoading Maximum number tiles to load simultaneously.
   * @param {number} maxNewLoads Maximum number of new tiles to load.
   */
  loadMoreTiles(e, t) {
    let i = 0, s, r, o;
    for (; this.tilesLoading_ < e && i < t && this.getCount() > 0; )
      r = /** @type {import("./Tile.js").default} */
      this.dequeue()[0], o = r.getKey(), s = r.getState(), s === N.IDLE && !(o in this.tilesLoadingKeys_) && (this.tilesLoadingKeys_[o] = !0, ++this.tilesLoading_, ++i, r.load());
  }
}
function T1(n, e, t, i, s) {
  if (!n || !(t in n.wantedTiles) || !n.wantedTiles[t][e.getKey()])
    return zs;
  const r = n.viewState.center, o = i[0] - r[0], a = i[1] - r[1];
  return 65536 * Math.log(s) + Math.sqrt(o * o + a * a) / s;
}
class ga extends vt {
  /**
   * @param {Options} options Control options.
   */
  constructor(e) {
    super();
    const t = e.element;
    t && !e.target && !t.style.pointerEvents && (t.style.pointerEvents = "auto"), this.element = t || null, this.target_ = null, this.map_ = null, this.listenerKeys = [], e.render && (this.render = e.render), e.target && this.setTarget(e.target);
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    mo(this.element), super.disposeInternal();
  }
  /**
   * Get the map associated with this control.
   * @return {import("../Map.js").default|null} Map.
   * @api
   */
  getMap() {
    return this.map_;
  }
  /**
   * Remove the control from its current map and attach it to the new map.
   * Pass `null` to just remove the control from the current map.
   * Subclasses may set up event handlers to get notified about changes to
   * the map here.
   * @param {import("../Map.js").default|null} map Map.
   * @api
   */
  setMap(e) {
    this.map_ && mo(this.element);
    for (let t = 0, i = this.listenerKeys.length; t < i; ++t)
      ge(this.listenerKeys[t]);
    this.listenerKeys.length = 0, this.map_ = e, e && ((this.target_ ? this.target_ : e.getOverlayContainerStopEvent()).appendChild(this.element), this.render !== si && this.listenerKeys.push(
      se(e, Vt.POSTRENDER, this.render, this)
    ), e.render());
  }
  /**
   * Renders the control.
   * @param {import("../MapEvent.js").default} mapEvent Map event.
   * @api
   */
  render(e) {
  }
  /**
   * This function is used to set a target element for the control. It has no
   * effect if it is called after the control has been added to the map (i.e.
   * after `setMap` is called on the control). If no `target` is set in the
   * options passed to the control constructor and if `setTarget` is not called
   * then the control is added to the map's overlay container.
   * @param {HTMLElement|string} target Target.
   * @api
   */
  setTarget(e) {
    this.target_ = typeof e == "string" ? document.getElementById(e) : e;
  }
}
class S1 extends ga {
  /**
   * @param {Options} [options] Attribution options.
   */
  constructor(e) {
    e = e || {}, super({
      element: document.createElement("div"),
      render: e.render,
      target: e.target
    }), this.ulElement_ = document.createElement("ul"), this.collapsed_ = e.collapsed !== void 0 ? e.collapsed : !0, this.userCollapsed_ = this.collapsed_, this.overrideCollapsible_ = e.collapsible !== void 0, this.collapsible_ = e.collapsible !== void 0 ? e.collapsible : !0, this.collapsible_ || (this.collapsed_ = !1);
    const t = e.className !== void 0 ? e.className : "ol-attribution", i = e.tipLabel !== void 0 ? e.tipLabel : "Attributions", s = e.expandClassName !== void 0 ? e.expandClassName : t + "-expand", r = e.collapseLabel !== void 0 ? e.collapseLabel : "›", o = e.collapseClassName !== void 0 ? e.collapseClassName : t + "-collapse";
    typeof r == "string" ? (this.collapseLabel_ = document.createElement("span"), this.collapseLabel_.textContent = r, this.collapseLabel_.className = o) : this.collapseLabel_ = r;
    const a = e.label !== void 0 ? e.label : "i";
    typeof a == "string" ? (this.label_ = document.createElement("span"), this.label_.textContent = a, this.label_.className = s) : this.label_ = a;
    const l = this.collapsible_ && !this.collapsed_ ? this.collapseLabel_ : this.label_;
    this.toggleButton_ = document.createElement("button"), this.toggleButton_.setAttribute("type", "button"), this.toggleButton_.setAttribute("aria-expanded", String(!this.collapsed_)), this.toggleButton_.title = i, this.toggleButton_.appendChild(l), this.toggleButton_.addEventListener(
      Z.CLICK,
      this.handleClick_.bind(this),
      !1
    );
    const h = t + " " + fr + " " + ua + (this.collapsed_ && this.collapsible_ ? " " + Wl : "") + (this.collapsible_ ? "" : " ol-uncollapsible"), c = this.element;
    c.className = h, c.appendChild(this.toggleButton_), c.appendChild(this.ulElement_), this.renderedAttributions_ = [], this.renderedVisible_ = !0;
  }
  /**
   * Collect a list of visible attributions and set the collapsible state.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @return {Array<string>} Attributions.
   * @private
   */
  collectSourceAttributions_(e) {
    const t = Array.from(
      new Set(
        this.getMap().getAllLayers().flatMap((s) => s.getAttributions(e))
      )
    ), i = !this.getMap().getAllLayers().some(
      (s) => s.getSource() && s.getSource().getAttributionsCollapsible() === !1
    );
    return this.overrideCollapsible_ || this.setCollapsible(i), t;
  }
  /**
   * @private
   * @param {?import("../Map.js").FrameState} frameState Frame state.
   */
  updateElement_(e) {
    if (!e) {
      this.renderedVisible_ && (this.element.style.display = "none", this.renderedVisible_ = !1);
      return;
    }
    const t = this.collectSourceAttributions_(e), i = t.length > 0;
    if (this.renderedVisible_ != i && (this.element.style.display = i ? "" : "none", this.renderedVisible_ = i), !hn(t, this.renderedAttributions_)) {
      C_(this.ulElement_);
      for (let s = 0, r = t.length; s < r; ++s) {
        const o = document.createElement("li");
        o.innerHTML = t[s], this.ulElement_.appendChild(o);
      }
      this.renderedAttributions_ = t;
    }
  }
  /**
   * @param {MouseEvent} event The event to handle
   * @private
   */
  handleClick_(e) {
    e.preventDefault(), this.handleToggle_(), this.userCollapsed_ = this.collapsed_;
  }
  /**
   * @private
   */
  handleToggle_() {
    this.element.classList.toggle(Wl), this.collapsed_ ? Rl(this.collapseLabel_, this.label_) : Rl(this.label_, this.collapseLabel_), this.collapsed_ = !this.collapsed_, this.toggleButton_.setAttribute("aria-expanded", String(!this.collapsed_));
  }
  /**
   * Return `true` if the attribution is collapsible, `false` otherwise.
   * @return {boolean} True if the widget is collapsible.
   * @api
   */
  getCollapsible() {
    return this.collapsible_;
  }
  /**
   * Set whether the attribution should be collapsible.
   * @param {boolean} collapsible True if the widget is collapsible.
   * @api
   */
  setCollapsible(e) {
    this.collapsible_ !== e && (this.collapsible_ = e, this.element.classList.toggle("ol-uncollapsible"), this.userCollapsed_ && this.handleToggle_());
  }
  /**
   * Collapse or expand the attribution according to the passed parameter. Will
   * not do anything if the attribution isn't collapsible or if the current
   * collapsed state is already the one requested.
   * @param {boolean} collapsed True if the widget is collapsed.
   * @api
   */
  setCollapsed(e) {
    this.userCollapsed_ = e, !(!this.collapsible_ || this.collapsed_ === e) && this.handleToggle_();
  }
  /**
   * Return `true` when the attribution is currently collapsed or `false`
   * otherwise.
   * @return {boolean} True if the widget is collapsed.
   * @api
   */
  getCollapsed() {
    return this.collapsed_;
  }
  /**
   * Update the attribution element.
   * @param {import("../MapEvent.js").default} mapEvent Map event.
   * @override
   */
  render(e) {
    this.updateElement_(e.frameState);
  }
}
const R1 = S1;
class b1 extends ga {
  /**
   * @param {Options} [options] Rotate options.
   */
  constructor(e) {
    e = e || {}, super({
      element: document.createElement("div"),
      render: e.render,
      target: e.target
    });
    const t = e.className !== void 0 ? e.className : "ol-rotate", i = e.label !== void 0 ? e.label : "⇧", s = e.compassClassName !== void 0 ? e.compassClassName : "ol-compass";
    this.label_ = null, typeof i == "string" ? (this.label_ = document.createElement("span"), this.label_.className = s, this.label_.textContent = i) : (this.label_ = i, this.label_.classList.add(s));
    const r = e.tipLabel ? e.tipLabel : "Reset rotation", o = document.createElement("button");
    o.className = t + "-reset", o.setAttribute("type", "button"), o.title = r, o.appendChild(this.label_), o.addEventListener(
      Z.CLICK,
      this.handleClick_.bind(this),
      !1
    );
    const a = t + " " + fr + " " + ua, l = this.element;
    l.className = a, l.appendChild(o), this.callResetNorth_ = e.resetNorth ? e.resetNorth : void 0, this.duration_ = e.duration !== void 0 ? e.duration : 250, this.autoHide_ = e.autoHide !== void 0 ? e.autoHide : !0, this.rotation_ = void 0, this.autoHide_ && this.element.classList.add(Cs);
  }
  /**
   * @param {MouseEvent} event The event to handle
   * @private
   */
  handleClick_(e) {
    e.preventDefault(), this.callResetNorth_ !== void 0 ? this.callResetNorth_() : this.resetNorth_();
  }
  /**
   * @private
   */
  resetNorth_() {
    const t = this.getMap().getView();
    if (!t)
      return;
    const i = t.getRotation();
    i !== void 0 && (this.duration_ > 0 && i % (2 * Math.PI) !== 0 ? t.animate({
      rotation: 0,
      duration: this.duration_,
      easing: fi
    }) : t.setRotation(0));
  }
  /**
   * Update the rotate control element.
   * @param {import("../MapEvent.js").default} mapEvent Map event.
   * @override
   */
  render(e) {
    const t = e.frameState;
    if (!t)
      return;
    const i = t.viewState.rotation;
    if (i != this.rotation_) {
      const s = "rotate(" + i + "rad)";
      if (this.autoHide_) {
        const r = this.element.classList.contains(Cs);
        !r && i === 0 ? this.element.classList.add(Cs) : r && i !== 0 && this.element.classList.remove(Cs);
      }
      this.label_.style.transform = s;
    }
    this.rotation_ = i;
  }
}
const L1 = b1;
class M1 extends ga {
  /**
   * @param {Options} [options] Zoom options.
   */
  constructor(e) {
    e = e || {}, super({
      element: document.createElement("div"),
      target: e.target
    });
    const t = e.className !== void 0 ? e.className : "ol-zoom", i = e.delta !== void 0 ? e.delta : 1, s = e.zoomInClassName !== void 0 ? e.zoomInClassName : t + "-in", r = e.zoomOutClassName !== void 0 ? e.zoomOutClassName : t + "-out", o = e.zoomInLabel !== void 0 ? e.zoomInLabel : "+", a = e.zoomOutLabel !== void 0 ? e.zoomOutLabel : "–", l = e.zoomInTipLabel !== void 0 ? e.zoomInTipLabel : "Zoom in", h = e.zoomOutTipLabel !== void 0 ? e.zoomOutTipLabel : "Zoom out", c = document.createElement("button");
    c.className = s, c.setAttribute("type", "button"), c.title = l, c.appendChild(
      typeof o == "string" ? document.createTextNode(o) : o
    ), c.addEventListener(
      Z.CLICK,
      this.handleClick_.bind(this, i),
      !1
    );
    const u = document.createElement("button");
    u.className = r, u.setAttribute("type", "button"), u.title = h, u.appendChild(
      typeof a == "string" ? document.createTextNode(a) : a
    ), u.addEventListener(
      Z.CLICK,
      this.handleClick_.bind(this, -i),
      !1
    );
    const d = t + " " + fr + " " + ua, f = this.element;
    f.className = d, f.appendChild(c), f.appendChild(u), this.duration_ = e.duration !== void 0 ? e.duration : 250;
  }
  /**
   * @param {number} delta Zoom delta.
   * @param {MouseEvent} event The event to handle
   * @private
   */
  handleClick_(e, t) {
    t.preventDefault(), this.zoomByDelta_(e);
  }
  /**
   * @param {number} delta Zoom delta.
   * @private
   */
  zoomByDelta_(e) {
    const i = this.getMap().getView();
    if (!i)
      return;
    const s = i.getZoom();
    if (s !== void 0) {
      const r = i.getConstrainedZoom(s + e);
      this.duration_ > 0 ? (i.getAnimating() && i.cancelAnimations(), i.animate({
        zoom: r,
        duration: this.duration_,
        easing: fi
      })) : i.setZoom(r);
    }
  }
}
const D1 = M1;
function P1(n) {
  n = n || {};
  const e = new dt();
  return (n.zoom !== void 0 ? n.zoom : !0) && e.push(new D1(n.zoomOptions)), (n.rotate !== void 0 ? n.rotate : !0) && e.push(new L1(n.rotateOptions)), (n.attribution !== void 0 ? n.attribution : !0) && e.push(new R1(n.attributionOptions)), e;
}
const Jl = {
  ACTIVE: "active"
};
class os extends vt {
  /**
   * @param {InteractionOptions} [options] Options.
   */
  constructor(e) {
    super(), this.on, this.once, this.un, e && e.handleEvent && (this.handleEvent = e.handleEvent), this.map_ = null, this.setActive(!0);
  }
  /**
   * Return whether the interaction is currently active.
   * @return {boolean} `true` if the interaction is active, `false` otherwise.
   * @observable
   * @api
   */
  getActive() {
    return (
      /** @type {boolean} */
      this.get(Jl.ACTIVE)
    );
  }
  /**
   * Get the map associated with this interaction.
   * @return {import("../Map.js").default|null} Map.
   * @api
   */
  getMap() {
    return this.map_;
  }
  /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event}.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   * @api
   */
  handleEvent(e) {
    return !0;
  }
  /**
   * Activate or deactivate the interaction.
   * @param {boolean} active Active.
   * @observable
   * @api
   */
  setActive(e) {
    this.set(Jl.ACTIVE, e);
  }
  /**
   * Remove the interaction from its current map and attach it to the new map.
   * Subclasses may set up event handlers to get notified about changes to
   * the map here.
   * @param {import("../Map.js").default|null} map Map.
   */
  setMap(e) {
    this.map_ = e;
  }
}
function O1(n, e, t) {
  const i = n.getCenterInternal();
  if (i) {
    const s = [i[0] + e[0], i[1] + e[1]];
    n.animateInternal({
      duration: t !== void 0 ? t : 250,
      easing: K0,
      center: n.getConstrainedCenter(s)
    });
  }
}
function ma(n, e, t, i) {
  const s = n.getZoom();
  if (s === void 0)
    return;
  const r = n.getConstrainedZoom(s + e), o = n.getResolutionForZoom(r);
  n.getAnimating() && n.cancelAnimations(), n.animate({
    resolution: o,
    anchor: t,
    duration: i !== void 0 ? i : 250,
    easing: fi
  });
}
class k1 extends os {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    super(), e = e || {}, this.delta_ = e.delta ? e.delta : 1, this.duration_ = e.duration !== void 0 ? e.duration : 250;
  }
  /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} (if it was a
   * doubleclick) and eventually zooms the map.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   */
  handleEvent(e) {
    let t = !1;
    if (e.type == pe.DBLCLICK) {
      const i = (
        /** @type {MouseEvent} */
        e.originalEvent
      ), s = e.map, r = e.coordinate, o = i.shiftKey ? -this.delta_ : this.delta_, a = s.getView();
      ma(a, o, r, this.duration_), i.preventDefault(), t = !0;
    }
    return !t;
  }
}
const F1 = k1;
class as extends os {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    e = e || {}, super(
      /** @type {import("./Interaction.js").InteractionOptions} */
      e
    ), e.handleDownEvent && (this.handleDownEvent = e.handleDownEvent), e.handleDragEvent && (this.handleDragEvent = e.handleDragEvent), e.handleMoveEvent && (this.handleMoveEvent = e.handleMoveEvent), e.handleUpEvent && (this.handleUpEvent = e.handleUpEvent), e.stopDown && (this.stopDown = e.stopDown), this.handlingDownUpSequence = !1, this.targetPointers = [];
  }
  /**
   * Returns the current number of pointers involved in the interaction,
   * e.g. `2` when two fingers are used.
   * @return {number} The number of pointers.
   * @api
   */
  getPointerCount() {
    return this.targetPointers.length;
  }
  /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   * @protected
   */
  handleDownEvent(e) {
    return !1;
  }
  /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @protected
   */
  handleDragEvent(e) {
  }
  /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} and may call into
   * other functions, if event sequences like e.g. 'drag' or 'down-up' etc. are
   * detected.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   * @api
   */
  handleEvent(e) {
    if (!e.originalEvent)
      return !0;
    let t = !1;
    if (this.updateTrackedPointers_(e), this.handlingDownUpSequence) {
      if (e.type == pe.POINTERDRAG)
        this.handleDragEvent(e), e.originalEvent.preventDefault();
      else if (e.type == pe.POINTERUP) {
        const i = this.handleUpEvent(e);
        this.handlingDownUpSequence = i && this.targetPointers.length > 0;
      }
    } else if (e.type == pe.POINTERDOWN) {
      const i = this.handleDownEvent(e);
      this.handlingDownUpSequence = i, t = this.stopDown(i);
    } else
      e.type == pe.POINTERMOVE && this.handleMoveEvent(e);
    return !t;
  }
  /**
   * Handle pointer move events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @protected
   */
  handleMoveEvent(e) {
  }
  /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   * @protected
   */
  handleUpEvent(e) {
    return !1;
  }
  /**
   * This function is used to determine if "down" events should be propagated
   * to other interactions or should be stopped.
   * @param {boolean} handled Was the event handled by the interaction?
   * @return {boolean} Should the `down` event be stopped?
   */
  stopDown(e) {
    return e;
  }
  /**
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @private
   */
  updateTrackedPointers_(e) {
    e.activePointers && (this.targetPointers = e.activePointers);
  }
}
function pa(n) {
  const e = n.length;
  let t = 0, i = 0;
  for (let s = 0; s < e; s++)
    t += n[s].clientX, i += n[s].clientY;
  return { clientX: t / e, clientY: i / e };
}
function wo(n) {
  const e = arguments;
  return function(t) {
    let i = !0;
    for (let s = 0, r = e.length; s < r && (i = i && e[s](t), !!i); ++s)
      ;
    return i;
  };
}
const N1 = function(n) {
  const e = (
    /** @type {KeyboardEvent|MouseEvent|TouchEvent} */
    n.originalEvent
  );
  return e.altKey && !(e.metaKey || e.ctrlKey) && e.shiftKey;
}, G1 = function(n) {
  const e = n.map.getTargetElement(), t = n.map.getOwnerDocument().activeElement;
  return e.contains(t);
}, Bc = function(n) {
  return n.map.getTargetElement().hasAttribute("tabindex") ? G1(n) : !0;
}, B1 = Bi, zc = function(n) {
  const e = (
    /** @type {MouseEvent} */
    n.originalEvent
  );
  return e.button == 0 && !(w_ && ac && e.ctrlKey);
}, Wc = function(n) {
  const e = (
    /** @type {KeyboardEvent|MouseEvent|TouchEvent} */
    n.originalEvent
  );
  return !e.altKey && !(e.metaKey || e.ctrlKey) && !e.shiftKey;
}, z1 = function(n) {
  const e = (
    /** @type {KeyboardEvent|MouseEvent|TouchEvent} */
    n.originalEvent
  );
  return ac ? e.metaKey : e.ctrlKey;
}, W1 = function(n) {
  const e = (
    /** @type {KeyboardEvent|MouseEvent|TouchEvent} */
    n.originalEvent
  );
  return !e.altKey && !(e.metaKey || e.ctrlKey) && e.shiftKey;
}, Xc = function(n) {
  const e = (
    /** @type {KeyboardEvent|MouseEvent|TouchEvent} */
    n.originalEvent
  ), t = (
    /** @type {Element} */
    e.target.tagName
  );
  return t !== "INPUT" && t !== "SELECT" && t !== "TEXTAREA" && // `isContentEditable` is only available on `HTMLElement`, but it may also be a
  // different type like `SVGElement`.
  // @ts-ignore
  !e.target.isContentEditable;
}, Ur = function(n) {
  const e = (
    /** @type {import("../MapBrowserEvent").default} */
    n.originalEvent
  );
  return te(
    e !== void 0,
    "mapBrowserEvent must originate from a pointer event"
  ), e.pointerType == "mouse";
}, X1 = function(n) {
  const e = (
    /** @type {import("../MapBrowserEvent").default} */
    n.originalEvent
  );
  return te(
    e !== void 0,
    "mapBrowserEvent must originate from a pointer event"
  ), e.isPrimary && e.button === 0;
};
class K1 extends as {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    super({
      stopDown: Js
    }), e = e || {}, this.kinetic_ = e.kinetic, this.lastCentroid = null, this.lastPointersCount_, this.panning_ = !1;
    const t = e.condition ? e.condition : wo(Wc, X1);
    this.condition_ = e.onFocusOnly ? wo(Bc, t) : t, this.noKinetic_ = !1;
  }
  /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   */
  handleDragEvent(e) {
    const t = e.map;
    this.panning_ || (this.panning_ = !0, t.getView().beginInteraction());
    const i = this.targetPointers, s = t.getEventPixel(pa(i));
    if (i.length == this.lastPointersCount_) {
      if (this.kinetic_ && this.kinetic_.update(s[0], s[1]), this.lastCentroid) {
        const r = [
          this.lastCentroid[0] - s[0],
          s[1] - this.lastCentroid[1]
        ], a = e.map.getView();
        S0(r, a.getResolution()), Ko(r, a.getRotation()), a.adjustCenterInternal(r);
      }
    } else
      this.kinetic_ && this.kinetic_.begin();
    this.lastCentroid = s, this.lastPointersCount_ = i.length, e.originalEvent.preventDefault();
  }
  /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */
  handleUpEvent(e) {
    const t = e.map, i = t.getView();
    if (this.targetPointers.length === 0) {
      if (!this.noKinetic_ && this.kinetic_ && this.kinetic_.end()) {
        const s = this.kinetic_.getDistance(), r = this.kinetic_.getAngle(), o = i.getCenterInternal(), a = t.getPixelFromCoordinateInternal(o), l = t.getCoordinateFromPixelInternal([
          a[0] - s * Math.cos(r),
          a[1] - s * Math.sin(r)
        ]);
        i.animateInternal({
          center: i.getConstrainedCenter(l),
          duration: 500,
          easing: fi
        });
      }
      return this.panning_ && (this.panning_ = !1, i.endInteraction()), !1;
    }
    return this.kinetic_ && this.kinetic_.begin(), this.lastCentroid = null, !0;
  }
  /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */
  handleDownEvent(e) {
    if (this.targetPointers.length > 0 && this.condition_(e)) {
      const i = e.map.getView();
      return this.lastCentroid = null, i.getAnimating() && i.cancelAnimations(), this.kinetic_ && this.kinetic_.begin(), this.noKinetic_ = this.targetPointers.length > 1, !0;
    }
    return !1;
  }
}
const Y1 = K1;
class U1 extends as {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    e = e || {}, super({
      stopDown: Js
    }), this.condition_ = e.condition ? e.condition : N1, this.lastAngle_ = void 0, this.duration_ = e.duration !== void 0 ? e.duration : 250;
  }
  /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   */
  handleDragEvent(e) {
    if (!Ur(e))
      return;
    const t = e.map, i = t.getView();
    if (i.getConstraints().rotation === Qo)
      return;
    const s = t.getSize(), r = e.pixel, o = Math.atan2(s[1] / 2 - r[1], r[0] - s[0] / 2);
    if (this.lastAngle_ !== void 0) {
      const a = o - this.lastAngle_;
      i.adjustRotationInternal(-a);
    }
    this.lastAngle_ = o;
  }
  /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */
  handleUpEvent(e) {
    return Ur(e) ? (e.map.getView().endInteraction(this.duration_), !1) : !0;
  }
  /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */
  handleDownEvent(e) {
    return Ur(e) && zc(e) && this.condition_(e) ? (e.map.getView().beginInteraction(), this.lastAngle_ = void 0, !0) : !1;
  }
}
class V1 extends Fo {
  /**
   * @param {string} className CSS class name.
   */
  constructor(e) {
    super(), this.geometry_ = null, this.element_ = document.createElement("div"), this.element_.style.position = "absolute", this.element_.style.pointerEvents = "auto", this.element_.className = "ol-box " + e, this.map_ = null, this.startPixel_ = null, this.endPixel_ = null;
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    this.setMap(null);
  }
  /**
   * @private
   */
  render_() {
    const e = this.startPixel_, t = this.endPixel_, i = "px", s = this.element_.style;
    s.left = Math.min(e[0], t[0]) + i, s.top = Math.min(e[1], t[1]) + i, s.width = Math.abs(t[0] - e[0]) + i, s.height = Math.abs(t[1] - e[1]) + i;
  }
  /**
   * @param {import("../Map.js").default|null} map Map.
   */
  setMap(e) {
    if (this.map_) {
      this.map_.getOverlayContainer().removeChild(this.element_);
      const t = this.element_.style;
      t.left = "inherit", t.top = "inherit", t.width = "inherit", t.height = "inherit";
    }
    this.map_ = e, this.map_ && this.map_.getOverlayContainer().appendChild(this.element_);
  }
  /**
   * @param {import("../pixel.js").Pixel} startPixel Start pixel.
   * @param {import("../pixel.js").Pixel} endPixel End pixel.
   */
  setPixels(e, t) {
    this.startPixel_ = e, this.endPixel_ = t, this.createOrUpdateGeometry(), this.render_();
  }
  /**
   * Creates or updates the cached geometry.
   */
  createOrUpdateGeometry() {
    const e = this.startPixel_, t = this.endPixel_, s = [
      e,
      [e[0], t[1]],
      t,
      [t[0], e[1]]
    ].map(
      this.map_.getCoordinateFromPixelInternal,
      this.map_
    );
    s[4] = s[0].slice(), this.geometry_ ? this.geometry_.setCoordinates([s]) : this.geometry_ = new Ki([s]);
  }
  /**
   * @return {import("../geom/Polygon.js").default} Geometry.
   */
  getGeometry() {
    return this.geometry_;
  }
}
const As = {
  /**
   * Triggered upon drag box start.
   * @event DragBoxEvent#boxstart
   * @api
   */
  BOXSTART: "boxstart",
  /**
   * Triggered on drag when box is active.
   * @event DragBoxEvent#boxdrag
   * @api
   */
  BOXDRAG: "boxdrag",
  /**
   * Triggered upon drag box end.
   * @event DragBoxEvent#boxend
   * @api
   */
  BOXEND: "boxend",
  /**
   * Triggered upon drag box canceled.
   * @event DragBoxEvent#boxcancel
   * @api
   */
  BOXCANCEL: "boxcancel"
};
class Vr extends Ft {
  /**
   * @param {string} type The event type.
   * @param {import("../coordinate.js").Coordinate} coordinate The event coordinate.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Originating event.
   */
  constructor(e, t, i) {
    super(e), this.coordinate = t, this.mapBrowserEvent = i;
  }
}
class Z1 extends as {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    super(), this.on, this.once, this.un, e = e || {}, this.box_ = new V1(e.className || "ol-dragbox"), this.minArea_ = e.minArea !== void 0 ? e.minArea : 64, e.onBoxEnd && (this.onBoxEnd = e.onBoxEnd), this.startPixel_ = null, this.condition_ = e.condition ? e.condition : zc, this.boxEndCondition_ = e.boxEndCondition ? e.boxEndCondition : this.defaultBoxEndCondition;
  }
  /**
   * The default condition for determining whether the boxend event
   * should fire.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent The originating MapBrowserEvent
   *     leading to the box end.
   * @param {import("../pixel.js").Pixel} startPixel The starting pixel of the box.
   * @param {import("../pixel.js").Pixel} endPixel The end pixel of the box.
   * @return {boolean} Whether or not the boxend condition should be fired.
   */
  defaultBoxEndCondition(e, t, i) {
    const s = i[0] - t[0], r = i[1] - t[1];
    return s * s + r * r >= this.minArea_;
  }
  /**
   * Returns geometry of last drawn box.
   * @return {import("../geom/Polygon.js").default} Geometry.
   * @api
   */
  getGeometry() {
    return this.box_.getGeometry();
  }
  /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   */
  handleDragEvent(e) {
    this.box_.setPixels(this.startPixel_, e.pixel), this.dispatchEvent(
      new Vr(
        As.BOXDRAG,
        e.coordinate,
        e
      )
    );
  }
  /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */
  handleUpEvent(e) {
    this.box_.setMap(null);
    const t = this.boxEndCondition_(
      e,
      this.startPixel_,
      e.pixel
    );
    return t && this.onBoxEnd(e), this.dispatchEvent(
      new Vr(
        t ? As.BOXEND : As.BOXCANCEL,
        e.coordinate,
        e
      )
    ), !1;
  }
  /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */
  handleDownEvent(e) {
    return this.condition_(e) ? (this.startPixel_ = e.pixel, this.box_.setMap(e.map), this.box_.setPixels(this.startPixel_, this.startPixel_), this.dispatchEvent(
      new Vr(
        As.BOXSTART,
        e.coordinate,
        e
      )
    ), !0) : !1;
  }
  /**
   * Function to execute just before `onboxend` is fired
   * @param {import("../MapBrowserEvent.js").default} event Event.
   */
  onBoxEnd(e) {
  }
}
class j1 extends Z1 {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    e = e || {};
    const t = e.condition ? e.condition : W1;
    super({
      condition: t,
      className: e.className || "ol-dragzoom",
      minArea: e.minArea
    }), this.duration_ = e.duration !== void 0 ? e.duration : 200, this.out_ = e.out !== void 0 ? e.out : !1;
  }
  /**
   * Function to execute just before `onboxend` is fired
   * @param {import("../MapBrowserEvent.js").default} event Event.
   */
  onBoxEnd(e) {
    const i = (
      /** @type {!import("../View.js").default} */
      this.getMap().getView()
    );
    let s = this.getGeometry();
    if (this.out_) {
      const r = i.rotatedExtentForGeometry(s), o = i.getResolutionForExtentInternal(r), a = i.getResolution() / o;
      s = s.clone(), s.scale(a * a);
    }
    i.fitInternal(s, {
      duration: this.duration_,
      easing: fi
    });
  }
}
const H1 = j1, gn = {
  LEFT: "ArrowLeft",
  UP: "ArrowUp",
  RIGHT: "ArrowRight",
  DOWN: "ArrowDown"
};
class Q1 extends os {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    super(), e = e || {}, this.defaultCondition_ = function(t) {
      return Wc(t) && Xc(t);
    }, this.condition_ = e.condition !== void 0 ? e.condition : this.defaultCondition_, this.duration_ = e.duration !== void 0 ? e.duration : 100, this.pixelDelta_ = e.pixelDelta !== void 0 ? e.pixelDelta : 128;
  }
  /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} if it was a
   * `KeyEvent`, and decides the direction to pan to (if an arrow key was
   * pressed).
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   */
  handleEvent(e) {
    let t = !1;
    if (e.type == Z.KEYDOWN) {
      const i = (
        /** @type {KeyboardEvent} */
        e.originalEvent
      ), s = i.key;
      if (this.condition_(e) && (s == gn.DOWN || s == gn.LEFT || s == gn.RIGHT || s == gn.UP)) {
        const o = e.map.getView(), a = o.getResolution() * this.pixelDelta_;
        let l = 0, h = 0;
        s == gn.DOWN ? h = -a : s == gn.LEFT ? l = -a : s == gn.RIGHT ? l = a : h = a;
        const c = [l, h];
        Ko(c, o.getRotation()), O1(o, c, this.duration_), i.preventDefault(), t = !0;
      }
    }
    return !t;
  }
}
class q1 extends os {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    super(), e = e || {}, this.condition_ = e.condition ? e.condition : function(t) {
      return !z1(t) && Xc(t);
    }, this.delta_ = e.delta ? e.delta : 1, this.duration_ = e.duration !== void 0 ? e.duration : 100;
  }
  /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} if it was a
   * `KeyEvent`, and decides whether to zoom in or out (depending on whether the
   * key pressed was '+' or '-').
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   */
  handleEvent(e) {
    let t = !1;
    if (e.type == Z.KEYDOWN || e.type == Z.KEYPRESS) {
      const i = (
        /** @type {KeyboardEvent} */
        e.originalEvent
      ), s = i.key;
      if (this.condition_(e) && (s === "+" || s === "-")) {
        const r = e.map, o = s === "+" ? this.delta_ : -this.delta_, a = r.getView();
        ma(a, o, void 0, this.duration_), i.preventDefault(), t = !0;
      }
    }
    return !t;
  }
}
const J1 = q1;
class $1 {
  /**
   * @param {number} decay Rate of decay (must be negative).
   * @param {number} minVelocity Minimum velocity (pixels/millisecond).
   * @param {number} delay Delay to consider to calculate the kinetic
   *     initial values (milliseconds).
   */
  constructor(e, t, i) {
    this.decay_ = e, this.minVelocity_ = t, this.delay_ = i, this.points_ = [], this.angle_ = 0, this.initialVelocity_ = 0;
  }
  /**
   * FIXME empty description for jsdoc
   */
  begin() {
    this.points_.length = 0, this.angle_ = 0, this.initialVelocity_ = 0;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   */
  update(e, t) {
    this.points_.push(e, t, Date.now());
  }
  /**
   * @return {boolean} Whether we should do kinetic animation.
   */
  end() {
    if (this.points_.length < 6)
      return !1;
    const e = Date.now() - this.delay_, t = this.points_.length - 3;
    if (this.points_[t + 2] < e)
      return !1;
    let i = t - 3;
    for (; i > 0 && this.points_[i + 2] > e; )
      i -= 3;
    const s = this.points_[t + 2] - this.points_[i + 2];
    if (s < 1e3 / 60)
      return !1;
    const r = this.points_[t] - this.points_[i], o = this.points_[t + 1] - this.points_[i + 1];
    return this.angle_ = Math.atan2(o, r), this.initialVelocity_ = Math.sqrt(r * r + o * o) / s, this.initialVelocity_ > this.minVelocity_;
  }
  /**
   * @return {number} Total distance travelled (pixels).
   */
  getDistance() {
    return (this.minVelocity_ - this.initialVelocity_) / this.decay_;
  }
  /**
   * @return {number} Angle of the kinetic panning animation (radians).
   */
  getAngle() {
    return this.angle_;
  }
}
class ev extends os {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    e = e || {}, super(
      /** @type {import("./Interaction.js").InteractionOptions} */
      e
    ), this.totalDelta_ = 0, this.lastDelta_ = 0, this.maxDelta_ = e.maxDelta !== void 0 ? e.maxDelta : 1, this.duration_ = e.duration !== void 0 ? e.duration : 250, this.timeout_ = e.timeout !== void 0 ? e.timeout : 80, this.useAnchor_ = e.useAnchor !== void 0 ? e.useAnchor : !0, this.constrainResolution_ = e.constrainResolution !== void 0 ? e.constrainResolution : !1;
    const t = e.condition ? e.condition : B1;
    this.condition_ = e.onFocusOnly ? wo(Bc, t) : t, this.lastAnchor_ = null, this.startTime_ = void 0, this.timeoutId_, this.mode_ = void 0, this.trackpadEventGap_ = 400, this.trackpadTimeoutId_, this.deltaPerZoom_ = 300;
  }
  /**
   * @private
   */
  endInteraction_() {
    this.trackpadTimeoutId_ = void 0;
    const e = this.getMap();
    if (!e)
      return;
    e.getView().endInteraction(
      void 0,
      this.lastDelta_ ? this.lastDelta_ > 0 ? 1 : -1 : 0,
      this.lastAnchor_
    );
  }
  /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} (if it was a mousewheel-event) and eventually
   * zooms the map.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   */
  handleEvent(e) {
    if (!this.condition_(e) || e.type !== Z.WHEEL)
      return !0;
    const i = e.map, s = (
      /** @type {WheelEvent} */
      e.originalEvent
    );
    s.preventDefault(), this.useAnchor_ && (this.lastAnchor_ = e.coordinate);
    let r;
    if (e.type == Z.WHEEL && (r = s.deltaY, E_ && s.deltaMode === WheelEvent.DOM_DELTA_PIXEL && (r /= lc), s.deltaMode === WheelEvent.DOM_DELTA_LINE && (r *= 40)), r === 0)
      return !1;
    this.lastDelta_ = r;
    const o = Date.now();
    this.startTime_ === void 0 && (this.startTime_ = o), (!this.mode_ || o - this.startTime_ > this.trackpadEventGap_) && (this.mode_ = Math.abs(r) < 4 ? "trackpad" : "wheel");
    const a = i.getView();
    if (this.mode_ === "trackpad" && !(a.getConstrainResolution() || this.constrainResolution_))
      return this.trackpadTimeoutId_ ? clearTimeout(this.trackpadTimeoutId_) : (a.getAnimating() && a.cancelAnimations(), a.beginInteraction()), this.trackpadTimeoutId_ = setTimeout(
        this.endInteraction_.bind(this),
        this.timeout_
      ), a.adjustZoom(-r / this.deltaPerZoom_, this.lastAnchor_), this.startTime_ = o, !1;
    this.totalDelta_ += r;
    const l = Math.max(this.timeout_ - (o - this.startTime_), 0);
    return clearTimeout(this.timeoutId_), this.timeoutId_ = setTimeout(
      this.handleWheelZoom_.bind(this, i),
      l
    ), !1;
  }
  /**
   * @private
   * @param {import("../Map.js").default} map Map.
   */
  handleWheelZoom_(e) {
    const t = e.getView();
    t.getAnimating() && t.cancelAnimations();
    let i = -ve(
      this.totalDelta_,
      -this.maxDelta_ * this.deltaPerZoom_,
      this.maxDelta_ * this.deltaPerZoom_
    ) / this.deltaPerZoom_;
    (t.getConstrainResolution() || this.constrainResolution_) && (i = i ? i > 0 ? 1 : -1 : 0), ma(t, i, this.lastAnchor_, this.duration_), this.mode_ = void 0, this.totalDelta_ = 0, this.lastAnchor_ = null, this.startTime_ = void 0, this.timeoutId_ = void 0;
  }
  /**
   * Enable or disable using the mouse's location as an anchor when zooming
   * @param {boolean} useAnchor true to zoom to the mouse's location, false
   * to zoom to the center of the map
   * @api
   */
  setMouseAnchor(e) {
    this.useAnchor_ = e, e || (this.lastAnchor_ = null);
  }
}
const tv = ev;
class nv extends as {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    e = e || {};
    const t = (
      /** @type {import("./Pointer.js").Options} */
      e
    );
    t.stopDown || (t.stopDown = Js), super(t), this.anchor_ = null, this.lastAngle_ = void 0, this.rotating_ = !1, this.rotationDelta_ = 0, this.threshold_ = e.threshold !== void 0 ? e.threshold : 0.3, this.duration_ = e.duration !== void 0 ? e.duration : 250;
  }
  /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   */
  handleDragEvent(e) {
    let t = 0;
    const i = this.targetPointers[0], s = this.targetPointers[1], r = Math.atan2(
      s.clientY - i.clientY,
      s.clientX - i.clientX
    );
    if (this.lastAngle_ !== void 0) {
      const l = r - this.lastAngle_;
      this.rotationDelta_ += l, !this.rotating_ && Math.abs(this.rotationDelta_) > this.threshold_ && (this.rotating_ = !0), t = l;
    }
    this.lastAngle_ = r;
    const o = e.map, a = o.getView();
    a.getConstraints().rotation !== Qo && (this.anchor_ = o.getCoordinateFromPixelInternal(
      o.getEventPixel(pa(this.targetPointers))
    ), this.rotating_ && (o.render(), a.adjustRotationInternal(t, this.anchor_)));
  }
  /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */
  handleUpEvent(e) {
    return this.targetPointers.length < 2 ? (e.map.getView().endInteraction(this.duration_), !1) : !0;
  }
  /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */
  handleDownEvent(e) {
    if (this.targetPointers.length >= 2) {
      const t = e.map;
      return this.anchor_ = null, this.lastAngle_ = void 0, this.rotating_ = !1, this.rotationDelta_ = 0, this.handlingDownUpSequence || t.getView().beginInteraction(), !0;
    }
    return !1;
  }
}
class iv extends as {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    e = e || {};
    const t = (
      /** @type {import("./Pointer.js").Options} */
      e
    );
    t.stopDown || (t.stopDown = Js), super(t), this.anchor_ = null, this.duration_ = e.duration !== void 0 ? e.duration : 400, this.lastDistance_ = void 0, this.lastScaleDelta_ = 1;
  }
  /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   */
  handleDragEvent(e) {
    let t = 1;
    const i = this.targetPointers[0], s = this.targetPointers[1], r = i.clientX - s.clientX, o = i.clientY - s.clientY, a = Math.sqrt(r * r + o * o);
    this.lastDistance_ !== void 0 && (t = this.lastDistance_ / a), this.lastDistance_ = a;
    const l = e.map, h = l.getView();
    t != 1 && (this.lastScaleDelta_ = t), this.anchor_ = l.getCoordinateFromPixelInternal(
      l.getEventPixel(pa(this.targetPointers))
    ), l.render(), h.adjustResolutionInternal(t, this.anchor_);
  }
  /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */
  handleUpEvent(e) {
    if (this.targetPointers.length < 2) {
      const i = e.map.getView(), s = this.lastScaleDelta_ > 1 ? 1 : -1;
      return i.endInteraction(this.duration_, s), !1;
    }
    return !0;
  }
  /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */
  handleDownEvent(e) {
    if (this.targetPointers.length >= 2) {
      const t = e.map;
      return this.anchor_ = null, this.lastDistance_ = void 0, this.lastScaleDelta_ = 1, this.handlingDownUpSequence || t.getView().beginInteraction(), !0;
    }
    return !1;
  }
}
const sv = iv;
function rv(n) {
  n = n || {};
  const e = new dt(), t = new $1(-5e-3, 0.05, 100);
  return (n.altShiftDragRotate !== void 0 ? n.altShiftDragRotate : !0) && e.push(new U1()), (n.doubleClickZoom !== void 0 ? n.doubleClickZoom : !0) && e.push(
    new F1({
      delta: n.zoomDelta,
      duration: n.zoomDuration
    })
  ), (n.dragPan !== void 0 ? n.dragPan : !0) && e.push(
    new Y1({
      onFocusOnly: n.onFocusOnly,
      kinetic: t
    })
  ), (n.pinchRotate !== void 0 ? n.pinchRotate : !0) && e.push(new nv()), (n.pinchZoom !== void 0 ? n.pinchZoom : !0) && e.push(
    new sv({
      duration: n.zoomDuration
    })
  ), (n.keyboard !== void 0 ? n.keyboard : !0) && (e.push(new Q1()), e.push(
    new J1({
      delta: n.zoomDelta,
      duration: n.zoomDuration
    })
  )), (n.mouseWheelZoom !== void 0 ? n.mouseWheelZoom : !0) && e.push(
    new tv({
      onFocusOnly: n.onFocusOnly,
      duration: n.zoomDuration
    })
  ), (n.shiftDragZoom !== void 0 ? n.shiftDragZoom : !0) && e.push(
    new H1({
      duration: n.zoomDuration
    })
  ), e;
}
function Kc(n) {
  if (n instanceof hr) {
    n.setMapInternal(null);
    return;
  }
  n instanceof _i && n.getLayers().forEach(Kc);
}
function Yc(n, e) {
  if (n instanceof hr) {
    n.setMapInternal(e);
    return;
  }
  if (n instanceof _i) {
    const t = n.getLayers().getArray();
    for (let i = 0, s = t.length; i < s; ++i)
      Yc(t[i], e);
  }
}
class ov extends vt {
  /**
   * @param {MapOptions} [options] Map options.
   */
  constructor(e) {
    super(), e = e || {}, this.on, this.once, this.un;
    const t = av(e);
    this.renderComplete_, this.loaded_ = !0, this.boundHandleBrowserEvent_ = this.handleBrowserEvent.bind(this), this.maxTilesLoading_ = e.maxTilesLoading !== void 0 ? e.maxTilesLoading : 16, this.pixelRatio_ = e.pixelRatio !== void 0 ? e.pixelRatio : lc, this.postRenderTimeoutHandle_, this.animationDelayKey_, this.animationDelay_ = this.animationDelay_.bind(this), this.coordinateToPixelTransform_ = at(), this.pixelToCoordinateTransform_ = at(), this.frameIndex_ = 0, this.frameState_ = null, this.previousExtent_ = null, this.viewPropertyListenerKey_ = null, this.viewChangeListenerKey_ = null, this.layerGroupPropertyListenerKeys_ = null, this.viewport_ = document.createElement("div"), this.viewport_.className = "ol-viewport" + ("ontouchstart" in window ? " ol-touch" : ""), this.viewport_.style.position = "relative", this.viewport_.style.overflow = "hidden", this.viewport_.style.width = "100%", this.viewport_.style.height = "100%", this.overlayContainer_ = document.createElement("div"), this.overlayContainer_.style.position = "absolute", this.overlayContainer_.style.zIndex = "0", this.overlayContainer_.style.width = "100%", this.overlayContainer_.style.height = "100%", this.overlayContainer_.style.pointerEvents = "none", this.overlayContainer_.className = "ol-overlaycontainer", this.viewport_.appendChild(this.overlayContainer_), this.overlayContainerStopEvent_ = document.createElement("div"), this.overlayContainerStopEvent_.style.position = "absolute", this.overlayContainerStopEvent_.style.zIndex = "0", this.overlayContainerStopEvent_.style.width = "100%", this.overlayContainerStopEvent_.style.height = "100%", this.overlayContainerStopEvent_.style.pointerEvents = "none", this.overlayContainerStopEvent_.className = "ol-overlaycontainer-stopevent", this.viewport_.appendChild(this.overlayContainerStopEvent_), this.mapBrowserEventHandler_ = null, this.moveTolerance_ = e.moveTolerance, this.keyboardEventTarget_ = t.keyboardEventTarget, this.targetChangeHandlerKeys_ = null, this.targetElement_ = null, this.resizeObserver_ = new ResizeObserver(() => this.updateSize()), this.controls = t.controls || P1(), this.interactions = t.interactions || rv({
      onFocusOnly: !0
    }), this.overlays_ = t.overlays, this.overlayIdIndex_ = {}, this.renderer_ = null, this.postRenderFunctions_ = [], this.tileQueue_ = new I1(
      this.getTilePriority.bind(this),
      this.handleTileChange_.bind(this)
    ), this.addChangeListener(
      Se.LAYERGROUP,
      this.handleLayerGroupChanged_
    ), this.addChangeListener(Se.VIEW, this.handleViewChanged_), this.addChangeListener(Se.SIZE, this.handleSizeChanged_), this.addChangeListener(Se.TARGET, this.handleTargetChanged_), this.setProperties(t.values);
    const i = this;
    e.view && !(e.view instanceof ct) && e.view.then(function(s) {
      i.setView(new ct(s));
    }), this.controls.addEventListener(
      Ne.ADD,
      /**
       * @param {import("./Collection.js").CollectionEvent<import("./control/Control.js").default>} event CollectionEvent
       */
      (s) => {
        s.element.setMap(this);
      }
    ), this.controls.addEventListener(
      Ne.REMOVE,
      /**
       * @param {import("./Collection.js").CollectionEvent<import("./control/Control.js").default>} event CollectionEvent.
       */
      (s) => {
        s.element.setMap(null);
      }
    ), this.interactions.addEventListener(
      Ne.ADD,
      /**
       * @param {import("./Collection.js").CollectionEvent<import("./interaction/Interaction.js").default>} event CollectionEvent.
       */
      (s) => {
        s.element.setMap(this);
      }
    ), this.interactions.addEventListener(
      Ne.REMOVE,
      /**
       * @param {import("./Collection.js").CollectionEvent<import("./interaction/Interaction.js").default>} event CollectionEvent.
       */
      (s) => {
        s.element.setMap(null);
      }
    ), this.overlays_.addEventListener(
      Ne.ADD,
      /**
       * @param {import("./Collection.js").CollectionEvent<import("./Overlay.js").default>} event CollectionEvent.
       */
      (s) => {
        this.addOverlayInternal_(s.element);
      }
    ), this.overlays_.addEventListener(
      Ne.REMOVE,
      /**
       * @param {import("./Collection.js").CollectionEvent<import("./Overlay.js").default>} event CollectionEvent.
       */
      (s) => {
        const r = s.element.getId();
        r !== void 0 && delete this.overlayIdIndex_[r.toString()], s.element.setMap(null);
      }
    ), this.controls.forEach(
      /**
       * @param {import("./control/Control.js").default} control Control.
       */
      (s) => {
        s.setMap(this);
      }
    ), this.interactions.forEach(
      /**
       * @param {import("./interaction/Interaction.js").default} interaction Interaction.
       */
      (s) => {
        s.setMap(this);
      }
    ), this.overlays_.forEach(this.addOverlayInternal_.bind(this));
  }
  /**
   * Add the given control to the map.
   * @param {import("./control/Control.js").default} control Control.
   * @api
   */
  addControl(e) {
    this.getControls().push(e);
  }
  /**
   * Add the given interaction to the map. If you want to add an interaction
   * at another point of the collection use `getInteractions()` and the methods
   * available on {@link module:ol/Collection~Collection}. This can be used to
   * stop the event propagation from the handleEvent function. The interactions
   * get to handle the events in the reverse order of this collection.
   * @param {import("./interaction/Interaction.js").default} interaction Interaction to add.
   * @api
   */
  addInteraction(e) {
    this.getInteractions().push(e);
  }
  /**
   * Adds the given layer to the top of this map. If you want to add a layer
   * elsewhere in the stack, use `getLayers()` and the methods available on
   * {@link module:ol/Collection~Collection}.
   * @param {import("./layer/Base.js").default} layer Layer.
   * @api
   */
  addLayer(e) {
    this.getLayerGroup().getLayers().push(e);
  }
  /**
   * @param {import("./layer/Group.js").GroupEvent} event The layer add event.
   * @private
   */
  handleLayerAdd_(e) {
    Yc(e.layer, this);
  }
  /**
   * Add the given overlay to the map.
   * @param {import("./Overlay.js").default} overlay Overlay.
   * @api
   */
  addOverlay(e) {
    this.getOverlays().push(e);
  }
  /**
   * This deals with map's overlay collection changes.
   * @param {import("./Overlay.js").default} overlay Overlay.
   * @private
   */
  addOverlayInternal_(e) {
    const t = e.getId();
    t !== void 0 && (this.overlayIdIndex_[t.toString()] = e), e.setMap(this);
  }
  /**
   *
   * Clean up.
   */
  disposeInternal() {
    this.controls.clear(), this.interactions.clear(), this.overlays_.clear(), this.resizeObserver_.disconnect(), this.setTarget(null), super.disposeInternal();
  }
  /**
   * Detect features that intersect a pixel on the viewport, and execute a
   * callback with each intersecting feature. Layers included in the detection can
   * be configured through the `layerFilter` option in `options`.
   * @param {import("./pixel.js").Pixel} pixel Pixel.
   * @param {function(import("./Feature.js").FeatureLike, import("./layer/Layer.js").default<import("./source/Source").default>, import("./geom/SimpleGeometry.js").default): T} callback Feature callback. The callback will be
   *     called with two arguments. The first argument is one
   *     {@link module:ol/Feature~Feature feature} or
   *     {@link module:ol/render/Feature~RenderFeature render feature} at the pixel, the second is
   *     the {@link module:ol/layer/Layer~Layer layer} of the feature and will be null for
   *     unmanaged layers. To stop detection, callback functions can return a
   *     truthy value.
   * @param {AtPixelOptions} [options] Optional options.
   * @return {T|undefined} Callback result, i.e. the return value of last
   * callback execution, or the first truthy callback return value.
   * @template T
   * @api
   */
  forEachFeatureAtPixel(e, t, i) {
    if (!this.frameState_ || !this.renderer_)
      return;
    const s = this.getCoordinateFromPixelInternal(e);
    i = i !== void 0 ? i : {};
    const r = i.hitTolerance !== void 0 ? i.hitTolerance : 0, o = i.layerFilter !== void 0 ? i.layerFilter : Bi, a = i.checkWrapped !== !1;
    return this.renderer_.forEachFeatureAtCoordinate(
      s,
      this.frameState_,
      r,
      a,
      t,
      null,
      o,
      null
    );
  }
  /**
   * Get all features that intersect a pixel on the viewport.
   * @param {import("./pixel.js").Pixel} pixel Pixel.
   * @param {AtPixelOptions} [options] Optional options.
   * @return {Array<import("./Feature.js").FeatureLike>} The detected features or
   * an empty array if none were found.
   * @api
   */
  getFeaturesAtPixel(e, t) {
    const i = [];
    return this.forEachFeatureAtPixel(
      e,
      function(s) {
        i.push(s);
      },
      t
    ), i;
  }
  /**
   * Get all layers from all layer groups.
   * @return {Array<import("./layer/Layer.js").default>} Layers.
   * @api
   */
  getAllLayers() {
    const e = [];
    function t(i) {
      i.forEach(function(s) {
        s instanceof _i ? t(s.getLayers()) : e.push(s);
      });
    }
    return t(this.getLayers()), e;
  }
  /**
   * Detect if features intersect a pixel on the viewport. Layers included in the
   * detection can be configured through the `layerFilter` option.
   * @param {import("./pixel.js").Pixel} pixel Pixel.
   * @param {AtPixelOptions} [options] Optional options.
   * @return {boolean} Is there a feature at the given pixel?
   * @api
   */
  hasFeatureAtPixel(e, t) {
    if (!this.frameState_ || !this.renderer_)
      return !1;
    const i = this.getCoordinateFromPixelInternal(e);
    t = t !== void 0 ? t : {};
    const s = t.layerFilter !== void 0 ? t.layerFilter : Bi, r = t.hitTolerance !== void 0 ? t.hitTolerance : 0, o = t.checkWrapped !== !1;
    return this.renderer_.hasFeatureAtCoordinate(
      i,
      this.frameState_,
      r,
      o,
      s,
      null
    );
  }
  /**
   * Returns the coordinate in user projection for a browser event.
   * @param {MouseEvent} event Event.
   * @return {import("./coordinate.js").Coordinate} Coordinate.
   * @api
   */
  getEventCoordinate(e) {
    return this.getCoordinateFromPixel(this.getEventPixel(e));
  }
  /**
   * Returns the coordinate in view projection for a browser event.
   * @param {MouseEvent} event Event.
   * @return {import("./coordinate.js").Coordinate} Coordinate.
   */
  getEventCoordinateInternal(e) {
    return this.getCoordinateFromPixelInternal(this.getEventPixel(e));
  }
  /**
   * Returns the map pixel position for a browser event relative to the viewport.
   * @param {UIEvent|{clientX: number, clientY: number}} event Event.
   * @return {import("./pixel.js").Pixel} Pixel.
   * @api
   */
  getEventPixel(e) {
    const i = this.viewport_.getBoundingClientRect(), s = this.getSize(), r = i.width / s[0], o = i.height / s[1], a = (
      //FIXME Are we really calling this with a TouchEvent anywhere?
      "changedTouches" in e ? (
        /** @type {TouchEvent} */
        e.changedTouches[0]
      ) : (
        /** @type {MouseEvent} */
        e
      )
    );
    return [
      (a.clientX - i.left) / r,
      (a.clientY - i.top) / o
    ];
  }
  /**
   * Get the target in which this map is rendered.
   * Note that this returns what is entered as an option or in setTarget:
   * if that was an element, it returns an element; if a string, it returns that.
   * @return {HTMLElement|string|undefined} The Element or id of the Element that the
   *     map is rendered in.
   * @observable
   * @api
   */
  getTarget() {
    return (
      /** @type {HTMLElement|string|undefined} */
      this.get(Se.TARGET)
    );
  }
  /**
   * Get the DOM element into which this map is rendered. In contrast to
   * `getTarget` this method always return an `Element`, or `null` if the
   * map has no target.
   * @return {HTMLElement} The element that the map is rendered in.
   * @api
   */
  getTargetElement() {
    return this.targetElement_;
  }
  /**
   * Get the coordinate for a given pixel.  This returns a coordinate in the
   * user projection.
   * @param {import("./pixel.js").Pixel} pixel Pixel position in the map viewport.
   * @return {import("./coordinate.js").Coordinate} The coordinate for the pixel position.
   * @api
   */
  getCoordinateFromPixel(e) {
    return fo(
      this.getCoordinateFromPixelInternal(e),
      this.getView().getProjection()
    );
  }
  /**
   * Get the coordinate for a given pixel.  This returns a coordinate in the
   * map view projection.
   * @param {import("./pixel.js").Pixel} pixel Pixel position in the map viewport.
   * @return {import("./coordinate.js").Coordinate} The coordinate for the pixel position.
   */
  getCoordinateFromPixelInternal(e) {
    const t = this.frameState_;
    return t ? we(t.pixelToCoordinateTransform, e.slice()) : null;
  }
  /**
   * Get the map controls. Modifying this collection changes the controls
   * associated with the map.
   * @return {Collection<import("./control/Control.js").default>} Controls.
   * @api
   */
  getControls() {
    return this.controls;
  }
  /**
   * Get the map overlays. Modifying this collection changes the overlays
   * associated with the map.
   * @return {Collection<import("./Overlay.js").default>} Overlays.
   * @api
   */
  getOverlays() {
    return this.overlays_;
  }
  /**
   * Get an overlay by its identifier (the value returned by overlay.getId()).
   * Note that the index treats string and numeric identifiers as the same. So
   * `map.getOverlayById(2)` will return an overlay with id `'2'` or `2`.
   * @param {string|number} id Overlay identifier.
   * @return {import("./Overlay.js").default|null} Overlay.
   * @api
   */
  getOverlayById(e) {
    const t = this.overlayIdIndex_[e.toString()];
    return t !== void 0 ? t : null;
  }
  /**
   * Get the map interactions. Modifying this collection changes the interactions
   * associated with the map.
   *
   * Interactions are used for e.g. pan, zoom and rotate.
   * @return {Collection<import("./interaction/Interaction.js").default>} Interactions.
   * @api
   */
  getInteractions() {
    return this.interactions;
  }
  /**
   * Get the layergroup associated with this map.
   * @return {LayerGroup} A layer group containing the layers in this map.
   * @observable
   * @api
   */
  getLayerGroup() {
    return (
      /** @type {LayerGroup} */
      this.get(Se.LAYERGROUP)
    );
  }
  /**
   * Clear any existing layers and add layers to the map.
   * @param {Array<import("./layer/Base.js").default>|Collection<import("./layer/Base.js").default>} layers The layers to be added to the map.
   * @api
   */
  setLayers(e) {
    const t = this.getLayerGroup();
    if (e instanceof dt) {
      t.setLayers(e);
      return;
    }
    const i = t.getLayers();
    i.clear(), i.extend(e);
  }
  /**
   * Get the collection of layers associated with this map.
   * @return {!Collection<import("./layer/Base.js").default>} Layers.
   * @api
   */
  getLayers() {
    return this.getLayerGroup().getLayers();
  }
  /**
   * @return {boolean} Layers have sources that are still loading.
   */
  getLoadingOrNotReady() {
    const e = this.getLayerGroup().getLayerStatesArray();
    for (let t = 0, i = e.length; t < i; ++t) {
      const s = e[t];
      if (!s.visible)
        continue;
      const r = s.layer.getRenderer();
      if (r && !r.ready)
        return !0;
      const o = s.layer.getSource();
      if (o && o.loading)
        return !0;
    }
    return !1;
  }
  /**
   * Get the pixel for a coordinate.  This takes a coordinate in the user
   * projection and returns the corresponding pixel.
   * @param {import("./coordinate.js").Coordinate} coordinate A map coordinate.
   * @return {import("./pixel.js").Pixel} A pixel position in the map viewport.
   * @api
   */
  getPixelFromCoordinate(e) {
    const t = Tt(
      e,
      this.getView().getProjection()
    );
    return this.getPixelFromCoordinateInternal(t);
  }
  /**
   * Get the pixel for a coordinate.  This takes a coordinate in the map view
   * projection and returns the corresponding pixel.
   * @param {import("./coordinate.js").Coordinate} coordinate A map coordinate.
   * @return {import("./pixel.js").Pixel} A pixel position in the map viewport.
   */
  getPixelFromCoordinateInternal(e) {
    const t = this.frameState_;
    return t ? we(
      t.coordinateToPixelTransform,
      e.slice(0, 2)
    ) : null;
  }
  /**
   * Get the map renderer.
   * @return {import("./renderer/Map.js").default|null} Renderer
   */
  getRenderer() {
    return this.renderer_;
  }
  /**
   * Get the size of this map.
   * @return {import("./size.js").Size|undefined} The size in pixels of the map in the DOM.
   * @observable
   * @api
   */
  getSize() {
    return (
      /** @type {import("./size.js").Size|undefined} */
      this.get(Se.SIZE)
    );
  }
  /**
   * Get the view associated with this map. A view manages properties such as
   * center and resolution.
   * @return {View} The view that controls this map.
   * @observable
   * @api
   */
  getView() {
    return (
      /** @type {View} */
      this.get(Se.VIEW)
    );
  }
  /**
   * Get the element that serves as the map viewport.
   * @return {HTMLElement} Viewport.
   * @api
   */
  getViewport() {
    return this.viewport_;
  }
  /**
   * Get the element that serves as the container for overlays.  Elements added to
   * this container will let mousedown and touchstart events through to the map,
   * so clicks and gestures on an overlay will trigger {@link module:ol/MapBrowserEvent~MapBrowserEvent}
   * events.
   * @return {!HTMLElement} The map's overlay container.
   */
  getOverlayContainer() {
    return this.overlayContainer_;
  }
  /**
   * Get the element that serves as a container for overlays that don't allow
   * event propagation. Elements added to this container won't let mousedown and
   * touchstart events through to the map, so clicks and gestures on an overlay
   * don't trigger any {@link module:ol/MapBrowserEvent~MapBrowserEvent}.
   * @return {!HTMLElement} The map's overlay container that stops events.
   */
  getOverlayContainerStopEvent() {
    return this.overlayContainerStopEvent_;
  }
  /**
   * @return {!Document} The document where the map is displayed.
   */
  getOwnerDocument() {
    const e = this.getTargetElement();
    return e ? e.ownerDocument : document;
  }
  /**
   * @param {import("./Tile.js").default} tile Tile.
   * @param {string} tileSourceKey Tile source key.
   * @param {import("./coordinate.js").Coordinate} tileCenter Tile center.
   * @param {number} tileResolution Tile resolution.
   * @return {number} Tile priority.
   */
  getTilePriority(e, t, i, s) {
    return T1(
      this.frameState_,
      e,
      t,
      i,
      s
    );
  }
  /**
   * @param {UIEvent} browserEvent Browser event.
   * @param {string} [type] Type.
   */
  handleBrowserEvent(e, t) {
    t = t || e.type;
    const i = new Ut(t, this, e);
    this.handleMapBrowserEvent(i);
  }
  /**
   * @param {MapBrowserEvent} mapBrowserEvent The event to handle.
   */
  handleMapBrowserEvent(e) {
    if (!this.frameState_)
      return;
    const t = (
      /** @type {PointerEvent} */
      e.originalEvent
    ), i = t.type;
    if (i === xo.POINTERDOWN || i === Z.WHEEL || i === Z.KEYDOWN) {
      const s = this.getOwnerDocument(), r = this.viewport_.getRootNode ? this.viewport_.getRootNode() : s, o = (
        /** @type {Node} */
        t.target
      );
      if (
        // Abort if the target is a child of the container for elements whose events are not meant
        // to be handled by map interactions.
        this.overlayContainerStopEvent_.contains(o) || // Abort if the event target is a child of the container that is no longer in the page.
        // It's possible for the target to no longer be in the page if it has been removed in an
        // event listener, this might happen in a Control that recreates it's content based on
        // user interaction either manually or via a render in something like https://reactjs.org/
        !(r === s ? s.documentElement : r).contains(o)
      )
        return;
    }
    if (e.frameState = this.frameState_, this.dispatchEvent(e) !== !1) {
      const s = this.getInteractions().getArray().slice();
      for (let r = s.length - 1; r >= 0; r--) {
        const o = s[r];
        if (o.getMap() !== this || !o.getActive() || !this.getTargetElement())
          continue;
        if (!o.handleEvent(e) || e.propagationStopped)
          break;
      }
    }
  }
  /**
   * @protected
   */
  handlePostRender() {
    const e = this.frameState_, t = this.tileQueue_;
    if (!t.isEmpty()) {
      let s = this.maxTilesLoading_, r = s;
      if (e) {
        const o = e.viewHints;
        if (o[Re.ANIMATING] || o[Re.INTERACTING]) {
          const a = Date.now() - e.time > 8;
          s = a ? 0 : 8, r = a ? 0 : 2;
        }
      }
      t.getTilesLoading() < s && (t.reprioritize(), t.loadMoreTiles(s, r));
    }
    e && this.renderer_ && !e.animate && (this.renderComplete_ === !0 ? (this.hasListener(Je.RENDERCOMPLETE) && this.renderer_.dispatchRenderEvent(
      Je.RENDERCOMPLETE,
      e
    ), this.loaded_ === !1 && (this.loaded_ = !0, this.dispatchEvent(
      new Un(Vt.LOADEND, this, e)
    ))) : this.loaded_ === !0 && (this.loaded_ = !1, this.dispatchEvent(
      new Un(Vt.LOADSTART, this, e)
    )));
    const i = this.postRenderFunctions_;
    for (let s = 0, r = i.length; s < r; ++s)
      i[s](this, e);
    i.length = 0;
  }
  /**
   * @private
   */
  handleSizeChanged_() {
    this.getView() && !this.getView().getAnimating() && this.getView().resolveConstraints(0), this.render();
  }
  /**
   * @private
   */
  handleTargetChanged_() {
    if (this.mapBrowserEventHandler_) {
      for (let i = 0, s = this.targetChangeHandlerKeys_.length; i < s; ++i)
        ge(this.targetChangeHandlerKeys_[i]);
      this.targetChangeHandlerKeys_ = null, this.viewport_.removeEventListener(
        Z.CONTEXTMENU,
        this.boundHandleBrowserEvent_
      ), this.viewport_.removeEventListener(
        Z.WHEEL,
        this.boundHandleBrowserEvent_
      ), this.mapBrowserEventHandler_.dispose(), this.mapBrowserEventHandler_ = null, mo(this.viewport_);
    }
    if (this.targetElement_) {
      this.resizeObserver_.unobserve(this.targetElement_);
      const i = this.targetElement_.getRootNode();
      i instanceof ShadowRoot && this.resizeObserver_.unobserve(i.host), this.setSize(void 0);
    }
    const e = this.getTarget(), t = typeof e == "string" ? document.getElementById(e) : e;
    if (this.targetElement_ = t, !t)
      this.renderer_ && (clearTimeout(this.postRenderTimeoutHandle_), this.postRenderTimeoutHandle_ = void 0, this.postRenderFunctions_.length = 0, this.renderer_.dispose(), this.renderer_ = null), this.animationDelayKey_ && (cancelAnimationFrame(this.animationDelayKey_), this.animationDelayKey_ = void 0);
    else {
      t.appendChild(this.viewport_), this.renderer_ || (this.renderer_ = new w1(this)), this.mapBrowserEventHandler_ = new C1(
        this,
        this.moveTolerance_
      );
      for (const r in pe)
        this.mapBrowserEventHandler_.addEventListener(
          pe[r],
          this.handleMapBrowserEvent.bind(this)
        );
      this.viewport_.addEventListener(
        Z.CONTEXTMENU,
        this.boundHandleBrowserEvent_,
        !1
      ), this.viewport_.addEventListener(
        Z.WHEEL,
        this.boundHandleBrowserEvent_,
        uc ? { passive: !1 } : !1
      );
      const i = this.keyboardEventTarget_ ? this.keyboardEventTarget_ : t;
      this.targetChangeHandlerKeys_ = [
        se(
          i,
          Z.KEYDOWN,
          this.handleBrowserEvent,
          this
        ),
        se(
          i,
          Z.KEYPRESS,
          this.handleBrowserEvent,
          this
        )
      ];
      const s = t.getRootNode();
      s instanceof ShadowRoot && this.resizeObserver_.observe(s.host), this.resizeObserver_.observe(t);
    }
    this.updateSize();
  }
  /**
   * @private
   */
  handleTileChange_() {
    this.render();
  }
  /**
   * @private
   */
  handleViewPropertyChanged_() {
    this.render();
  }
  /**
   * @private
   */
  handleViewChanged_() {
    this.viewPropertyListenerKey_ && (ge(this.viewPropertyListenerKey_), this.viewPropertyListenerKey_ = null), this.viewChangeListenerKey_ && (ge(this.viewChangeListenerKey_), this.viewChangeListenerKey_ = null);
    const e = this.getView();
    e && (this.updateViewportSize_(this.getSize()), this.viewPropertyListenerKey_ = se(
      e,
      ii.PROPERTYCHANGE,
      this.handleViewPropertyChanged_,
      this
    ), this.viewChangeListenerKey_ = se(
      e,
      Z.CHANGE,
      this.handleViewPropertyChanged_,
      this
    ), e.resolveConstraints(0)), this.render();
  }
  /**
   * @private
   */
  handleLayerGroupChanged_() {
    this.layerGroupPropertyListenerKeys_ && (this.layerGroupPropertyListenerKeys_.forEach(ge), this.layerGroupPropertyListenerKeys_ = null);
    const e = this.getLayerGroup();
    e && (this.handleLayerAdd_(new Zt("addlayer", e)), this.layerGroupPropertyListenerKeys_ = [
      se(e, ii.PROPERTYCHANGE, this.render, this),
      se(e, Z.CHANGE, this.render, this),
      se(e, "addlayer", this.handleLayerAdd_, this),
      se(e, "removelayer", this.handleLayerRemove_, this)
    ]), this.render();
  }
  /**
   * @return {boolean} Is rendered.
   */
  isRendered() {
    return !!this.frameState_;
  }
  /**
   * @private
   */
  animationDelay_() {
    this.animationDelayKey_ = void 0, this.renderFrame_(Date.now());
  }
  /**
   * Requests an immediate render in a synchronous manner.
   * @api
   */
  renderSync() {
    this.animationDelayKey_ && cancelAnimationFrame(this.animationDelayKey_), this.animationDelay_();
  }
  /**
   * Redraws all text after new fonts have loaded
   */
  redrawText() {
    const e = this.getLayerGroup().getLayerStatesArray();
    for (let t = 0, i = e.length; t < i; ++t) {
      const s = e[t].layer;
      s.hasRenderer() && s.getRenderer().handleFontsChanged();
    }
  }
  /**
   * Request a map rendering (at the next animation frame).
   * @api
   */
  render() {
    this.renderer_ && this.animationDelayKey_ === void 0 && (this.animationDelayKey_ = requestAnimationFrame(this.animationDelay_));
  }
  /**
   * Remove the given control from the map.
   * @param {import("./control/Control.js").default} control Control.
   * @return {import("./control/Control.js").default|undefined} The removed control (or undefined
   *     if the control was not found).
   * @api
   */
  removeControl(e) {
    return this.getControls().remove(e);
  }
  /**
   * Remove the given interaction from the map.
   * @param {import("./interaction/Interaction.js").default} interaction Interaction to remove.
   * @return {import("./interaction/Interaction.js").default|undefined} The removed interaction (or
   *     undefined if the interaction was not found).
   * @api
   */
  removeInteraction(e) {
    return this.getInteractions().remove(e);
  }
  /**
   * Removes the given layer from the map.
   * @param {import("./layer/Base.js").default} layer Layer.
   * @return {import("./layer/Base.js").default|undefined} The removed layer (or undefined if the
   *     layer was not found).
   * @api
   */
  removeLayer(e) {
    return this.getLayerGroup().getLayers().remove(e);
  }
  /**
   * @param {import("./layer/Group.js").GroupEvent} event The layer remove event.
   * @private
   */
  handleLayerRemove_(e) {
    Kc(e.layer);
  }
  /**
   * Remove the given overlay from the map.
   * @param {import("./Overlay.js").default} overlay Overlay.
   * @return {import("./Overlay.js").default|undefined} The removed overlay (or undefined
   *     if the overlay was not found).
   * @api
   */
  removeOverlay(e) {
    return this.getOverlays().remove(e);
  }
  /**
   * @param {number} time Time.
   * @private
   */
  renderFrame_(e) {
    const t = this.getSize(), i = this.getView(), s = this.frameState_;
    let r = null;
    if (t !== void 0 && Fl(t) && i && i.isDef()) {
      const o = i.getHints(
        this.frameState_ ? this.frameState_.viewHints : void 0
      ), a = i.getState();
      if (r = {
        animate: !1,
        coordinateToPixelTransform: this.coordinateToPixelTransform_,
        declutter: null,
        extent: ho(
          a.center,
          a.resolution,
          a.rotation,
          t
        ),
        index: this.frameIndex_++,
        layerIndex: 0,
        layerStatesArray: this.getLayerGroup().getLayerStatesArray(),
        pixelRatio: this.pixelRatio_,
        pixelToCoordinateTransform: this.pixelToCoordinateTransform_,
        postRenderFunctions: [],
        size: t,
        tileQueue: this.tileQueue_,
        time: e,
        usedTiles: {},
        viewState: a,
        viewHints: o,
        wantedTiles: {},
        mapId: oe(this),
        renderTargets: {}
      }, a.nextCenter && a.nextResolution) {
        const l = isNaN(a.nextRotation) ? a.rotation : a.nextRotation;
        r.nextExtent = ho(
          a.nextCenter,
          a.nextResolution,
          l,
          t
        );
      }
    }
    this.frameState_ = r, this.renderer_.renderFrame(r), r && (r.animate && this.render(), Array.prototype.push.apply(
      this.postRenderFunctions_,
      r.postRenderFunctions
    ), s && (!this.previousExtent_ || !sr(this.previousExtent_) && !Wi(r.extent, this.previousExtent_)) && (this.dispatchEvent(
      new Un(Vt.MOVESTART, this, s)
    ), this.previousExtent_ = er(this.previousExtent_)), this.previousExtent_ && !r.viewHints[Re.ANIMATING] && !r.viewHints[Re.INTERACTING] && !Wi(r.extent, this.previousExtent_) && (this.dispatchEvent(
      new Un(Vt.MOVEEND, this, r)
    ), Kh(r.extent, this.previousExtent_))), this.dispatchEvent(new Un(Vt.POSTRENDER, this, r)), this.renderComplete_ = this.hasListener(Vt.LOADSTART) || this.hasListener(Vt.LOADEND) || this.hasListener(Je.RENDERCOMPLETE) ? !this.tileQueue_.getTilesLoading() && !this.tileQueue_.getCount() && !this.getLoadingOrNotReady() : void 0, this.postRenderTimeoutHandle_ || (this.postRenderTimeoutHandle_ = setTimeout(() => {
      this.postRenderTimeoutHandle_ = void 0, this.handlePostRender();
    }, 0));
  }
  /**
   * Sets the layergroup of this map.
   * @param {LayerGroup} layerGroup A layer group containing the layers in this map.
   * @observable
   * @api
   */
  setLayerGroup(e) {
    const t = this.getLayerGroup();
    t && this.handleLayerRemove_(new Zt("removelayer", t)), this.set(Se.LAYERGROUP, e);
  }
  /**
   * Set the size of this map.
   * @param {import("./size.js").Size|undefined} size The size in pixels of the map in the DOM.
   * @observable
   * @api
   */
  setSize(e) {
    this.set(Se.SIZE, e);
  }
  /**
   * Set the target element to render this map into.
   * @param {HTMLElement|string} [target] The Element or id of the Element
   *     that the map is rendered in.
   * @observable
   * @api
   */
  setTarget(e) {
    this.set(Se.TARGET, e);
  }
  /**
   * Set the view for this map.
   * @param {View|Promise<import("./View.js").ViewOptions>} view The view that controls this map.
   * It is also possible to pass a promise that resolves to options for constructing a view.  This
   * alternative allows view properties to be resolved by sources or other components that load
   * view-related metadata.
   * @observable
   * @api
   */
  setView(e) {
    if (!e || e instanceof ct) {
      this.set(Se.VIEW, e);
      return;
    }
    this.set(Se.VIEW, new ct());
    const t = this;
    e.then(function(i) {
      t.setView(new ct(i));
    });
  }
  /**
   * Force a recalculation of the map viewport size.  This should be called when
   * third-party code changes the size of the map viewport.
   * @api
   */
  updateSize() {
    const e = this.getTargetElement();
    let t;
    if (e) {
      const s = getComputedStyle(e), r = e.offsetWidth - parseFloat(s.borderLeftWidth) - parseFloat(s.paddingLeft) - parseFloat(s.paddingRight) - parseFloat(s.borderRightWidth), o = e.offsetHeight - parseFloat(s.borderTopWidth) - parseFloat(s.paddingTop) - parseFloat(s.paddingBottom) - parseFloat(s.borderBottomWidth);
      !isNaN(r) && !isNaN(o) && (t = [r, o], !Fl(t) && (e.offsetWidth || e.offsetHeight || e.getClientRects().length) && Qh(
        "No map visible because the map container's width or height are 0."
      ));
    }
    const i = this.getSize();
    t && (!i || !hn(t, i)) && (this.setSize(t), this.updateViewportSize_(t));
  }
  /**
   * Recomputes the viewport size and save it on the view object (if any)
   * @param {import("./size.js").Size|undefined} size The size.
   * @private
   */
  updateViewportSize_(e) {
    const t = this.getView();
    t && t.setViewportSize(e);
  }
}
function av(n) {
  let e = null;
  n.keyboardEventTarget !== void 0 && (e = typeof n.keyboardEventTarget == "string" ? document.getElementById(n.keyboardEventTarget) : n.keyboardEventTarget);
  const t = {}, i = n.layers && typeof /** @type {?} */
  n.layers.getLayers == "function" ? (
    /** @type {LayerGroup} */
    n.layers
  ) : new _i({
    layers: (
      /** @type {Collection<import("./layer/Base.js").default>|Array<import("./layer/Base.js").default>} */
      n.layers
    )
  });
  t[Se.LAYERGROUP] = i, t[Se.TARGET] = n.target, t[Se.VIEW] = n.view instanceof ct ? n.view : new ct();
  let s;
  n.controls !== void 0 && (Array.isArray(n.controls) ? s = new dt(n.controls.slice()) : (te(
    typeof /** @type {?} */
    n.controls.getArray == "function",
    "Expected `controls` to be an array or an `ol/Collection.js`"
  ), s = n.controls));
  let r;
  n.interactions !== void 0 && (Array.isArray(n.interactions) ? r = new dt(n.interactions.slice()) : (te(
    typeof /** @type {?} */
    n.interactions.getArray == "function",
    "Expected `interactions` to be an array or an `ol/Collection.js`"
  ), r = n.interactions));
  let o;
  return n.overlays !== void 0 ? Array.isArray(n.overlays) ? o = new dt(n.overlays.slice()) : (te(
    typeof /** @type {?} */
    n.overlays.getArray == "function",
    "Expected `overlays` to be an array or an `ol/Collection.js`"
  ), o = n.overlays) : o = new dt(), {
    controls: s,
    interactions: r,
    keyboardEventTarget: e,
    overlays: o,
    values: t
  };
}
const lv = ov;
class Hn extends vt {
  /**
   * @param {Geometry|ObjectWithGeometry<Geometry>} [geometryOrProperties]
   *     You may pass a Geometry object directly, or an object literal containing
   *     properties. If you pass an object literal, you may include a Geometry
   *     associated with a `geometry` key.
   */
  constructor(e) {
    if (super(), this.on, this.once, this.un, this.id_ = void 0, this.geometryName_ = "geometry", this.style_ = null, this.styleFunction_ = void 0, this.geometryChangeKey_ = null, this.addChangeListener(this.geometryName_, this.handleGeometryChanged_), e)
      if (typeof /** @type {?} */
      e.getSimplifiedGeometry == "function") {
        const t = (
          /** @type {Geometry} */
          e
        );
        this.setGeometry(t);
      } else {
        const t = e;
        this.setProperties(t);
      }
  }
  /**
   * Clone this feature. If the original feature has a geometry it
   * is also cloned. The feature id is not set in the clone.
   * @return {Feature<Geometry>} The clone.
   * @api
   */
  clone() {
    const e = (
      /** @type {Feature<Geometry>} */
      new Hn(this.hasProperties() ? this.getProperties() : null)
    );
    e.setGeometryName(this.getGeometryName());
    const t = this.getGeometry();
    t && e.setGeometry(
      /** @type {Geometry} */
      t.clone()
    );
    const i = this.getStyle();
    return i && e.setStyle(i), e;
  }
  /**
   * Get the feature's default geometry.  A feature may have any number of named
   * geometries.  The "default" geometry (the one that is rendered by default) is
   * set when calling {@link module:ol/Feature~Feature#setGeometry}.
   * @return {Geometry|undefined} The default geometry for the feature.
   * @api
   * @observable
   */
  getGeometry() {
    return (
      /** @type {Geometry|undefined} */
      this.get(this.geometryName_)
    );
  }
  /**
   * Get the feature identifier.  This is a stable identifier for the feature and
   * is either set when reading data from a remote source or set explicitly by
   * calling {@link module:ol/Feature~Feature#setId}.
   * @return {number|string|undefined} Id.
   * @api
   */
  getId() {
    return this.id_;
  }
  /**
   * Get the name of the feature's default geometry.  By default, the default
   * geometry is named `geometry`.
   * @return {string} Get the property name associated with the default geometry
   *     for this feature.
   * @api
   */
  getGeometryName() {
    return this.geometryName_;
  }
  /**
   * Get the feature's style. Will return what was provided to the
   * {@link module:ol/Feature~Feature#setStyle} method.
   * @return {import("./style/Style.js").StyleLike|undefined} The feature style.
   * @api
   */
  getStyle() {
    return this.style_;
  }
  /**
   * Get the feature's style function.
   * @return {import("./style/Style.js").StyleFunction|undefined} Return a function
   * representing the current style of this feature.
   * @api
   */
  getStyleFunction() {
    return this.styleFunction_;
  }
  /**
   * @private
   */
  handleGeometryChange_() {
    this.changed();
  }
  /**
   * @private
   */
  handleGeometryChanged_() {
    this.geometryChangeKey_ && (ge(this.geometryChangeKey_), this.geometryChangeKey_ = null);
    const e = this.getGeometry();
    e && (this.geometryChangeKey_ = se(
      e,
      Z.CHANGE,
      this.handleGeometryChange_,
      this
    )), this.changed();
  }
  /**
   * Set the default geometry for the feature.  This will update the property
   * with the name returned by {@link module:ol/Feature~Feature#getGeometryName}.
   * @param {Geometry|undefined} geometry The new geometry.
   * @api
   * @observable
   */
  setGeometry(e) {
    this.set(this.geometryName_, e);
  }
  /**
   * Set the style for the feature to override the layer style.  This can be a
   * single style object, an array of styles, or a function that takes a
   * resolution and returns an array of styles. To unset the feature style, call
   * `setStyle()` without arguments or a falsey value.
   * @param {import("./style/Style.js").StyleLike} [style] Style for this feature.
   * @api
   * @fires module:ol/events/Event~BaseEvent#event:change
   */
  setStyle(e) {
    this.style_ = e, this.styleFunction_ = e ? hv(e) : void 0, this.changed();
  }
  /**
   * Set the feature id.  The feature id is considered stable and may be used when
   * requesting features or comparing identifiers returned from a remote source.
   * The feature id can be used with the
   * {@link module:ol/source/Vector~VectorSource#getFeatureById} method.
   * @param {number|string|undefined} id The feature id.
   * @api
   * @fires module:ol/events/Event~BaseEvent#event:change
   */
  setId(e) {
    this.id_ = e, this.changed();
  }
  /**
   * Set the property name to be used when getting the feature's default geometry.
   * When calling {@link module:ol/Feature~Feature#getGeometry}, the value of the property with
   * this name will be returned.
   * @param {string} name The property name of the default geometry.
   * @api
   */
  setGeometryName(e) {
    this.removeChangeListener(this.geometryName_, this.handleGeometryChanged_), this.geometryName_ = e, this.addChangeListener(this.geometryName_, this.handleGeometryChanged_), this.handleGeometryChanged_();
  }
}
function hv(n) {
  if (typeof n == "function")
    return n;
  let e;
  return Array.isArray(n) ? e = n : (te(
    typeof /** @type {?} */
    n.getZIndex == "function",
    "Expected an `ol/style/Style` or an array of `ol/style/Style.js`"
  ), e = [
    /** @type {import("./style/Style.js").default} */
    n
  ]), function() {
    return e;
  };
}
function Co(n, e, t, i, s, r, o) {
  let a, l;
  const h = (t - e) / i;
  if (h === 1)
    a = e;
  else if (h === 2)
    a = e, l = s;
  else if (h !== 0) {
    let c = n[e], u = n[e + 1], d = 0;
    const f = [0];
    for (let p = e + i; p < t; p += i) {
      const _ = n[p], y = n[p + 1];
      d += Math.sqrt((_ - c) * (_ - c) + (y - u) * (y - u)), f.push(d), c = _, u = y;
    }
    const g = s * d, m = i0(f, g);
    m < 0 ? (l = (g - f[-m - 2]) / (f[-m - 1] - f[-m - 2]), a = e + (-m - 2) * i) : a = e + m * i;
  }
  o = o > 1 ? o : 2, r = r || new Array(o);
  for (let c = 0; c < o; ++c)
    r[c] = a === void 0 ? NaN : l === void 0 ? n[a + c] : Ke(n[a + c], n[a + i + c], l);
  return r;
}
function cv(n, e, t, i, s, r) {
  if (t == e)
    return null;
  let o;
  if (s < n[e + i - 1])
    return r ? (o = n.slice(e, e + i), o[i - 1] = s, o) : null;
  if (n[t - 1] < s)
    return r ? (o = n.slice(t - i, t), o[i - 1] = s, o) : null;
  if (s == n[e + i - 1])
    return n.slice(e, e + i);
  let a = e / i, l = t / i;
  for (; a < l; ) {
    const d = a + l >> 1;
    s < n[(d + 1) * i - 1] ? l = d : a = d + 1;
  }
  const h = n[a * i - 1];
  if (s == h)
    return n.slice((a - 1) * i, (a - 1) * i + i);
  const c = n[(a + 1) * i - 1], u = (s - h) / (c - h);
  o = [];
  for (let d = 0; d < i - 1; ++d)
    o.push(
      Ke(
        n[(a - 1) * i + d],
        n[a * i + d],
        u
      )
    );
  return o.push(s), o;
}
function Uc(n, e, t, i) {
  let s = n[e], r = n[e + 1], o = 0;
  for (let a = e + i; a < t; a += i) {
    const l = n[a], h = n[a + 1];
    o += Math.sqrt((l - s) * (l - s) + (h - r) * (h - r)), s = l, r = h;
  }
  return o;
}
class $i extends or {
  /**
   * @param {Array<import("../coordinate.js").Coordinate>|Array<number>} coordinates Coordinates.
   *     For internal use, flat coordinates in combination with `layout` are also accepted.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */
  constructor(e, t) {
    super(), this.flatMidpoint_ = null, this.flatMidpointRevision_ = -1, this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, t !== void 0 && !Array.isArray(e[0]) ? this.setFlatCoordinates(
      t,
      /** @type {Array<number>} */
      e
    ) : this.setCoordinates(
      /** @type {Array<import("../coordinate.js").Coordinate>} */
      e,
      t
    );
  }
  /**
   * Append the passed coordinate to the coordinates of the linestring.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @api
   */
  appendCoordinate(e) {
    qs(this.flatCoordinates, e), this.changed();
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!LineString} Clone.
   * @api
   */
  clone() {
    const e = new $i(
      this.flatCoordinates.slice(),
      this.layout
    );
    return e.applyProperties(this), e;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(e, t, i, s) {
    return s < Wo(this.getExtent(), e, t) ? s : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      Jo(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), $o(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      this.maxDelta_,
      !1,
      e,
      t,
      i,
      s
    ));
  }
  /**
   * Iterate over each segment, calling the provided callback.
   * If the callback returns a truthy value the function returns that
   * value immediately. Otherwise the function returns `false`.
   *
   * @param {function(this: S, import("../coordinate.js").Coordinate, import("../coordinate.js").Coordinate): T} callback Function
   *     called for each segment. The function will receive two arguments, the start and end coordinates of the segment.
   * @return {T|boolean} Value.
   * @template T,S
   * @api
   */
  forEachSegment(e) {
    return sc(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      e
    );
  }
  /**
   * Returns the coordinate at `m` using linear interpolation, or `null` if no
   * such coordinate exists.
   *
   * `extrapolate` controls extrapolation beyond the range of Ms in the
   * MultiLineString. If `extrapolate` is `true` then Ms less than the first
   * M will return the first coordinate and Ms greater than the last M will
   * return the last coordinate.
   *
   * @param {number} m M.
   * @param {boolean} [extrapolate] Extrapolate. Default is `false`.
   * @return {import("../coordinate.js").Coordinate|null} Coordinate.
   * @api
   */
  getCoordinateAtM(e, t) {
    return this.layout != "XYM" && this.layout != "XYZM" ? null : (t = t !== void 0 ? t : !1, cv(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      e,
      t
    ));
  }
  /**
   * Return the coordinates of the linestring.
   * @return {Array<import("../coordinate.js").Coordinate>} Coordinates.
   * @api
   */
  getCoordinates() {
    return yn(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride
    );
  }
  /**
   * Return the coordinate at the provided fraction along the linestring.
   * The `fraction` is a number between 0 and 1, where 0 is the start of the
   * linestring and 1 is the end.
   * @param {number} fraction Fraction.
   * @param {import("../coordinate.js").Coordinate} [dest] Optional coordinate whose values will
   *     be modified. If not provided, a new coordinate will be returned.
   * @return {import("../coordinate.js").Coordinate} Coordinate of the interpolated point.
   * @api
   */
  getCoordinateAt(e, t) {
    return Co(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      e,
      t,
      this.stride
    );
  }
  /**
   * Return the length of the linestring on projected plane.
   * @return {number} Length (on projected plane).
   * @api
   */
  getLength() {
    return Uc(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride
    );
  }
  /**
   * @return {Array<number>} Flat midpoint.
   */
  getFlatMidpoint() {
    return this.flatMidpointRevision_ != this.getRevision() && (this.flatMidpoint_ = this.getCoordinateAt(
      0.5,
      this.flatMidpoint_ ?? void 0
    ), this.flatMidpointRevision_ = this.getRevision()), /** @type {Array<number>} */
    this.flatMidpoint_;
  }
  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {LineString} Simplified LineString.
   * @protected
   */
  getSimplifiedGeometryInternal(e) {
    const t = [];
    return t.length = ar(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      e,
      t,
      0
    ), new $i(t, "XY");
  }
  /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   */
  getType() {
    return "LineString";
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */
  intersectsExtent(e) {
    return na(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      e
    );
  }
  /**
   * Set the coordinates of the linestring.
   * @param {!Array<import("../coordinate.js").Coordinate>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */
  setCoordinates(e, t) {
    this.setLayout(t, e, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = ea(
      this.flatCoordinates,
      0,
      e,
      this.stride
    ), this.changed();
  }
}
const k = {
  BEGIN_GEOMETRY: 0,
  BEGIN_PATH: 1,
  CIRCLE: 2,
  CLOSE_PATH: 3,
  CUSTOM: 4,
  DRAW_CHARS: 5,
  DRAW_IMAGE: 6,
  END_GEOMETRY: 7,
  FILL: 8,
  MOVE_TO_LINE_TO: 9,
  SET_FILL_STYLE: 10,
  SET_STROKE_STYLE: 11,
  STROKE: 12
}, Is = [k.FILL], qt = [k.STROKE], xn = [k.BEGIN_PATH], $l = [k.CLOSE_PATH];
class Vc {
  /**
   * Render a geometry with a custom renderer.
   *
   * @param {import("../geom/SimpleGeometry.js").default} geometry Geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {Function} renderer Renderer.
   * @param {Function} hitDetectionRenderer Renderer.
   * @param {number} [index] Render order index.
   */
  drawCustom(e, t, i, s, r) {
  }
  /**
   * Render a geometry.
   *
   * @param {import("../geom/Geometry.js").default} geometry The geometry to render.
   */
  drawGeometry(e) {
  }
  /**
   * Set the rendering style.
   *
   * @param {import("../style/Style.js").default} style The rendering style.
   */
  setStyle(e) {
  }
  /**
   * @param {import("../geom/Circle.js").default} circleGeometry Circle geometry.
   * @param {import("../Feature.js").default} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawCircle(e, t, i) {
  }
  /**
   * @param {import("../Feature.js").default} feature Feature.
   * @param {import("../style/Style.js").default} style Style.
   * @param {number} [index] Render order index.
   */
  drawFeature(e, t, i) {
  }
  /**
   * @param {import("../geom/GeometryCollection.js").default} geometryCollectionGeometry Geometry collection.
   * @param {import("../Feature.js").default} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawGeometryCollection(e, t, i) {
  }
  /**
   * @param {import("../geom/LineString.js").default|import("./Feature.js").default} lineStringGeometry Line string geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawLineString(e, t, i) {
  }
  /**
   * @param {import("../geom/MultiLineString.js").default|import("./Feature.js").default} multiLineStringGeometry MultiLineString geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawMultiLineString(e, t, i) {
  }
  /**
   * @param {import("../geom/MultiPoint.js").default|import("./Feature.js").default} multiPointGeometry MultiPoint geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawMultiPoint(e, t, i) {
  }
  /**
   * @param {import("../geom/MultiPolygon.js").default} multiPolygonGeometry MultiPolygon geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawMultiPolygon(e, t, i) {
  }
  /**
   * @param {import("../geom/Point.js").default|import("./Feature.js").default} pointGeometry Point geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawPoint(e, t, i) {
  }
  /**
   * @param {import("../geom/Polygon.js").default|import("./Feature.js").default} polygonGeometry Polygon geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawPolygon(e, t, i) {
  }
  /**
   * @param {import("../geom/SimpleGeometry.js").default|import("./Feature.js").default} geometry Geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawText(e, t, i) {
  }
  /**
   * @param {import("../style/Fill.js").default} fillStyle Fill style.
   * @param {import("../style/Stroke.js").default} strokeStyle Stroke style.
   */
  setFillStrokeStyle(e, t) {
  }
  /**
   * @param {import("../style/Image.js").default} imageStyle Image style.
   * @param {import("../render/canvas.js").DeclutterImageWithText} [declutterImageWithText] Shared data for combined decluttering with a text style.
   */
  setImageStyle(e, t) {
  }
  /**
   * @param {import("../style/Text.js").default} textStyle Text style.
   * @param {import("../render/canvas.js").DeclutterImageWithText} [declutterImageWithText] Shared data for combined decluttering with an image style.
   */
  setTextStyle(e, t) {
  }
}
class ls extends Vc {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(e, t, i, s) {
    super(), this.tolerance = e, this.maxExtent = t, this.pixelRatio = s, this.maxLineWidth = 0, this.resolution = i, this.beginGeometryInstruction1_ = null, this.beginGeometryInstruction2_ = null, this.bufferedMaxExtent_ = null, this.instructions = [], this.coordinates = [], this.tmpCoordinate_ = [], this.hitDetectionInstructions = [], this.state = /** @type {import("../canvas.js").FillStrokeState} */
    {};
  }
  /**
   * @protected
   * @param {Array<number>} dashArray Dash array.
   * @return {Array<number>} Dash array with pixel ratio applied
   */
  applyPixelRatio(e) {
    const t = this.pixelRatio;
    return t == 1 ? e : e.map(function(i) {
      return i * t;
    });
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} stride Stride.
   * @protected
   * @return {number} My end
   */
  appendFlatPointCoordinates(e, t) {
    const i = this.getBufferedMaxExtent(), s = this.tmpCoordinate_, r = this.coordinates;
    let o = r.length;
    for (let a = 0, l = e.length; a < l; a += t)
      s[0] = e[a], s[1] = e[a + 1], oi(i, s) && (r[o++] = s[0], r[o++] = s[1]);
    return o;
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @param {boolean} closed Last input coordinate equals first.
   * @param {boolean} skipFirst Skip first coordinate.
   * @protected
   * @return {number} My end.
   */
  appendFlatLineCoordinates(e, t, i, s, r, o) {
    const a = this.coordinates;
    let l = a.length;
    const h = this.getBufferedMaxExtent();
    o && (t += s);
    let c = e[t], u = e[t + 1];
    const d = this.tmpCoordinate_;
    let f = !0, g, m, p;
    for (g = t + s; g < i; g += s)
      d[0] = e[g], d[1] = e[g + 1], p = ao(h, d), p !== m ? (f && (a[l++] = c, a[l++] = u, f = !1), a[l++] = d[0], a[l++] = d[1]) : p === xe.INTERSECTING ? (a[l++] = d[0], a[l++] = d[1], f = !1) : f = !0, c = d[0], u = d[1], m = p;
    return (r && f || g === t + s) && (a[l++] = c, a[l++] = u), l;
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {Array<number>} ends Ends.
   * @param {number} stride Stride.
   * @param {Array<number>} builderEnds Builder ends.
   * @return {number} Offset.
   */
  drawCustomCoordinates_(e, t, i, s, r) {
    for (let o = 0, a = i.length; o < a; ++o) {
      const l = i[o], h = this.appendFlatLineCoordinates(
        e,
        t,
        l,
        s,
        !1,
        !1
      );
      r.push(h), t = l;
    }
    return t;
  }
  /**
   * @param {import("../../geom/SimpleGeometry.js").default} geometry Geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {Function} renderer Renderer.
   * @param {Function} hitDetectionRenderer Renderer.
   * @param {number} [index] Render order index.
   */
  drawCustom(e, t, i, s, r) {
    this.beginGeometry(e, t, r);
    const o = e.getType(), a = e.getStride(), l = this.coordinates.length;
    let h, c, u, d, f;
    switch (o) {
      case "MultiPolygon":
        h = /** @type {import("../../geom/MultiPolygon.js").default} */
        e.getOrientedFlatCoordinates(), d = [];
        const g = (
          /** @type {import("../../geom/MultiPolygon.js").default} */
          e.getEndss()
        );
        f = 0;
        for (let m = 0, p = g.length; m < p; ++m) {
          const _ = [];
          f = this.drawCustomCoordinates_(
            h,
            f,
            g[m],
            a,
            _
          ), d.push(_);
        }
        this.instructions.push([
          k.CUSTOM,
          l,
          d,
          e,
          i,
          Il,
          r
        ]), this.hitDetectionInstructions.push([
          k.CUSTOM,
          l,
          d,
          e,
          s || i,
          Il,
          r
        ]);
        break;
      case "Polygon":
      case "MultiLineString":
        u = [], h = o == "Polygon" ? (
          /** @type {import("../../geom/Polygon.js").default} */
          e.getOrientedFlatCoordinates()
        ) : e.getFlatCoordinates(), f = this.drawCustomCoordinates_(
          h,
          0,
          /** @type {import("../../geom/Polygon.js").default|import("../../geom/MultiLineString.js").default} */
          e.getEnds(),
          a,
          u
        ), this.instructions.push([
          k.CUSTOM,
          l,
          u,
          e,
          i,
          ks,
          r
        ]), this.hitDetectionInstructions.push([
          k.CUSTOM,
          l,
          u,
          e,
          s || i,
          ks,
          r
        ]);
        break;
      case "LineString":
      case "Circle":
        h = e.getFlatCoordinates(), c = this.appendFlatLineCoordinates(
          h,
          0,
          h.length,
          a,
          !1,
          !1
        ), this.instructions.push([
          k.CUSTOM,
          l,
          c,
          e,
          i,
          yn,
          r
        ]), this.hitDetectionInstructions.push([
          k.CUSTOM,
          l,
          c,
          e,
          s || i,
          yn,
          r
        ]);
        break;
      case "MultiPoint":
        h = e.getFlatCoordinates(), c = this.appendFlatPointCoordinates(h, a), c > l && (this.instructions.push([
          k.CUSTOM,
          l,
          c,
          e,
          i,
          yn,
          r
        ]), this.hitDetectionInstructions.push([
          k.CUSTOM,
          l,
          c,
          e,
          s || i,
          yn,
          r
        ]));
        break;
      case "Point":
        h = e.getFlatCoordinates(), this.coordinates.push(h[0], h[1]), c = this.coordinates.length, this.instructions.push([
          k.CUSTOM,
          l,
          c,
          e,
          i,
          void 0,
          r
        ]), this.hitDetectionInstructions.push([
          k.CUSTOM,
          l,
          c,
          e,
          s || i,
          void 0,
          r
        ]);
        break;
    }
    this.endGeometry(t);
  }
  /**
   * @protected
   * @param {import("../../geom/Geometry").default|import("../Feature.js").default} geometry The geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} index Render order index
   */
  beginGeometry(e, t, i) {
    this.beginGeometryInstruction1_ = [
      k.BEGIN_GEOMETRY,
      t,
      0,
      e,
      i
    ], this.instructions.push(this.beginGeometryInstruction1_), this.beginGeometryInstruction2_ = [
      k.BEGIN_GEOMETRY,
      t,
      0,
      e,
      i
    ], this.hitDetectionInstructions.push(this.beginGeometryInstruction2_);
  }
  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   */
  finish() {
    return {
      instructions: this.instructions,
      hitDetectionInstructions: this.hitDetectionInstructions,
      coordinates: this.coordinates
    };
  }
  /**
   * Reverse the hit detection instructions.
   */
  reverseHitDetectionInstructions() {
    const e = this.hitDetectionInstructions;
    e.reverse();
    let t;
    const i = e.length;
    let s, r, o = -1;
    for (t = 0; t < i; ++t)
      s = e[t], r = /** @type {import("./Instruction.js").default} */
      s[0], r == k.END_GEOMETRY ? o = t : r == k.BEGIN_GEOMETRY && (s[2] = t, s0(this.hitDetectionInstructions, o, t), o = -1);
  }
  /**
   * @param {import("../../style/Fill.js").default} fillStyle Fill style.
   * @param {import("../../style/Stroke.js").default} strokeStyle Stroke style.
   */
  setFillStrokeStyle(e, t) {
    const i = this.state;
    if (e) {
      const s = e.getColor();
      i.fillPatternScale = s && typeof s == "object" && "src" in s ? this.pixelRatio : 1, i.fillStyle = gt(
        s || Ge
      );
    } else
      i.fillStyle = void 0;
    if (t) {
      const s = t.getColor();
      i.strokeStyle = gt(
        s || Zi
      );
      const r = t.getLineCap();
      i.lineCap = r !== void 0 ? r : ai;
      const o = t.getLineDash();
      i.lineDash = o ? o.slice() : bt;
      const a = t.getLineDashOffset();
      i.lineDashOffset = a || Lt;
      const l = t.getLineJoin();
      i.lineJoin = l !== void 0 ? l : li;
      const h = t.getWidth();
      i.lineWidth = h !== void 0 ? h : Hi;
      const c = t.getMiterLimit();
      i.miterLimit = c !== void 0 ? c : Vi, i.lineWidth > this.maxLineWidth && (this.maxLineWidth = i.lineWidth, this.bufferedMaxExtent_ = null);
    } else
      i.strokeStyle = void 0, i.lineCap = void 0, i.lineDash = null, i.lineDashOffset = void 0, i.lineJoin = void 0, i.lineWidth = void 0, i.miterLimit = void 0;
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @return {Array<*>} Fill instruction.
   */
  createFill(e) {
    const t = e.fillStyle, i = [k.SET_FILL_STYLE, t];
    return typeof t != "string" && i.push(e.fillPatternScale), i;
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   */
  applyStroke(e) {
    this.instructions.push(this.createStroke(e));
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @return {Array<*>} Stroke instruction.
   */
  createStroke(e) {
    return [
      k.SET_STROKE_STYLE,
      e.strokeStyle,
      e.lineWidth * this.pixelRatio,
      e.lineCap,
      e.lineJoin,
      e.miterLimit,
      this.applyPixelRatio(e.lineDash),
      e.lineDashOffset * this.pixelRatio
    ];
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @param {function(this:CanvasBuilder, import("../canvas.js").FillStrokeState):Array<*>} createFill Create fill.
   */
  updateFillStyle(e, t) {
    const i = e.fillStyle;
    (typeof i != "string" || e.currentFillStyle != i) && (i !== void 0 && this.instructions.push(t.call(this, e)), e.currentFillStyle = i);
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @param {function(this:CanvasBuilder, import("../canvas.js").FillStrokeState): void} applyStroke Apply stroke.
   */
  updateStrokeStyle(e, t) {
    const i = e.strokeStyle, s = e.lineCap, r = e.lineDash, o = e.lineDashOffset, a = e.lineJoin, l = e.lineWidth, h = e.miterLimit;
    (e.currentStrokeStyle != i || e.currentLineCap != s || r != e.currentLineDash && !hn(e.currentLineDash, r) || e.currentLineDashOffset != o || e.currentLineJoin != a || e.currentLineWidth != l || e.currentMiterLimit != h) && (i !== void 0 && t.call(this, e), e.currentStrokeStyle = i, e.currentLineCap = s, e.currentLineDash = r, e.currentLineDashOffset = o, e.currentLineJoin = a, e.currentLineWidth = l, e.currentMiterLimit = h);
  }
  /**
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  endGeometry(e) {
    this.beginGeometryInstruction1_[2] = this.instructions.length, this.beginGeometryInstruction1_ = null, this.beginGeometryInstruction2_[2] = this.hitDetectionInstructions.length, this.beginGeometryInstruction2_ = null;
    const t = [k.END_GEOMETRY, e];
    this.instructions.push(t), this.hitDetectionInstructions.push(t);
  }
  /**
   * Get the buffered rendering extent.  Rendering will be clipped to the extent
   * provided to the constructor.  To account for symbolizers that may intersect
   * this extent, we calculate a buffered extent (e.g. based on stroke width).
   * @return {import("../../extent.js").Extent} The buffered rendering extent.
   * @protected
   */
  getBufferedMaxExtent() {
    if (!this.bufferedMaxExtent_ && (this.bufferedMaxExtent_ = Kh(this.maxExtent), this.maxLineWidth > 0)) {
      const e = this.resolution * (this.maxLineWidth + 1) / 2;
      zo(this.bufferedMaxExtent_, e, this.bufferedMaxExtent_);
    }
    return this.bufferedMaxExtent_;
  }
}
class uv extends ls {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(e, t, i, s) {
    super(e, t, i, s), this.hitDetectionImage_ = null, this.image_ = null, this.imagePixelRatio_ = void 0, this.anchorX_ = void 0, this.anchorY_ = void 0, this.height_ = void 0, this.opacity_ = void 0, this.originX_ = void 0, this.originY_ = void 0, this.rotateWithView_ = void 0, this.rotation_ = void 0, this.scale_ = void 0, this.width_ = void 0, this.declutterMode_ = void 0, this.declutterImageWithText_ = void 0;
  }
  /**
   * @param {import("../../geom/Point.js").default|import("../Feature.js").default} pointGeometry Point geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawPoint(e, t, i) {
    if (!this.image_ || this.maxExtent && !oi(this.maxExtent, e.getFlatCoordinates()))
      return;
    this.beginGeometry(e, t, i);
    const s = e.getFlatCoordinates(), r = e.getStride(), o = this.coordinates.length, a = this.appendFlatPointCoordinates(s, r);
    this.instructions.push([
      k.DRAW_IMAGE,
      o,
      a,
      this.image_,
      // Remaining arguments to DRAW_IMAGE are in alphabetical order
      this.anchorX_ * this.imagePixelRatio_,
      this.anchorY_ * this.imagePixelRatio_,
      Math.ceil(this.height_ * this.imagePixelRatio_),
      this.opacity_,
      this.originX_ * this.imagePixelRatio_,
      this.originY_ * this.imagePixelRatio_,
      this.rotateWithView_,
      this.rotation_,
      [
        this.scale_[0] * this.pixelRatio / this.imagePixelRatio_,
        this.scale_[1] * this.pixelRatio / this.imagePixelRatio_
      ],
      Math.ceil(this.width_ * this.imagePixelRatio_),
      this.declutterMode_,
      this.declutterImageWithText_
    ]), this.hitDetectionInstructions.push([
      k.DRAW_IMAGE,
      o,
      a,
      this.hitDetectionImage_,
      // Remaining arguments to DRAW_IMAGE are in alphabetical order
      this.anchorX_,
      this.anchorY_,
      this.height_,
      1,
      this.originX_,
      this.originY_,
      this.rotateWithView_,
      this.rotation_,
      this.scale_,
      this.width_,
      this.declutterMode_,
      this.declutterImageWithText_
    ]), this.endGeometry(t);
  }
  /**
   * @param {import("../../geom/MultiPoint.js").default|import("../Feature.js").default} multiPointGeometry MultiPoint geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawMultiPoint(e, t, i) {
    if (!this.image_)
      return;
    this.beginGeometry(e, t, i);
    const s = e.getFlatCoordinates(), r = [];
    for (let l = 0, h = s.length; l < h; l += e.getStride())
      (!this.maxExtent || oi(this.maxExtent, s.slice(l, l + 2))) && r.push(
        s[l],
        s[l + 1]
      );
    const o = this.coordinates.length, a = this.appendFlatPointCoordinates(r, 2);
    this.instructions.push([
      k.DRAW_IMAGE,
      o,
      a,
      this.image_,
      // Remaining arguments to DRAW_IMAGE are in alphabetical order
      this.anchorX_ * this.imagePixelRatio_,
      this.anchorY_ * this.imagePixelRatio_,
      Math.ceil(this.height_ * this.imagePixelRatio_),
      this.opacity_,
      this.originX_ * this.imagePixelRatio_,
      this.originY_ * this.imagePixelRatio_,
      this.rotateWithView_,
      this.rotation_,
      [
        this.scale_[0] * this.pixelRatio / this.imagePixelRatio_,
        this.scale_[1] * this.pixelRatio / this.imagePixelRatio_
      ],
      Math.ceil(this.width_ * this.imagePixelRatio_),
      this.declutterMode_,
      this.declutterImageWithText_
    ]), this.hitDetectionInstructions.push([
      k.DRAW_IMAGE,
      o,
      a,
      this.hitDetectionImage_,
      // Remaining arguments to DRAW_IMAGE are in alphabetical order
      this.anchorX_,
      this.anchorY_,
      this.height_,
      1,
      this.originX_,
      this.originY_,
      this.rotateWithView_,
      this.rotation_,
      this.scale_,
      this.width_,
      this.declutterMode_,
      this.declutterImageWithText_
    ]), this.endGeometry(t);
  }
  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   */
  finish() {
    return this.reverseHitDetectionInstructions(), this.anchorX_ = void 0, this.anchorY_ = void 0, this.hitDetectionImage_ = null, this.image_ = null, this.imagePixelRatio_ = void 0, this.height_ = void 0, this.scale_ = void 0, this.opacity_ = void 0, this.originX_ = void 0, this.originY_ = void 0, this.rotateWithView_ = void 0, this.rotation_ = void 0, this.width_ = void 0, super.finish();
  }
  /**
   * @param {import("../../style/Image.js").default} imageStyle Image style.
   * @param {Object} [sharedData] Shared data.
   */
  setImageStyle(e, t) {
    const i = e.getAnchor(), s = e.getSize(), r = e.getOrigin();
    this.imagePixelRatio_ = e.getPixelRatio(this.pixelRatio), this.anchorX_ = i[0], this.anchorY_ = i[1], this.hitDetectionImage_ = e.getHitDetectionImage(), this.image_ = e.getImage(this.pixelRatio), this.height_ = s[1], this.opacity_ = e.getOpacity(), this.originX_ = r[0], this.originY_ = r[1], this.rotateWithView_ = e.getRotateWithView(), this.rotation_ = e.getRotation(), this.scale_ = e.getScaleArray(), this.width_ = s[0], this.declutterMode_ = e.getDeclutterMode(), this.declutterImageWithText_ = t;
  }
}
const dv = uv;
class fv extends ls {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(e, t, i, s) {
    super(e, t, i, s);
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @private
   * @return {number} end.
   */
  drawFlatCoordinates_(e, t, i, s) {
    const r = this.coordinates.length, o = this.appendFlatLineCoordinates(
      e,
      t,
      i,
      s,
      !1,
      !1
    ), a = [
      k.MOVE_TO_LINE_TO,
      r,
      o
    ];
    return this.instructions.push(a), this.hitDetectionInstructions.push(a), i;
  }
  /**
   * @param {import("../../geom/LineString.js").default|import("../Feature.js").default} lineStringGeometry Line string geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawLineString(e, t, i) {
    const s = this.state, r = s.strokeStyle, o = s.lineWidth;
    if (r === void 0 || o === void 0)
      return;
    this.updateStrokeStyle(s, this.applyStroke), this.beginGeometry(e, t, i), this.hitDetectionInstructions.push(
      [
        k.SET_STROKE_STYLE,
        s.strokeStyle,
        s.lineWidth,
        s.lineCap,
        s.lineJoin,
        s.miterLimit,
        bt,
        Lt
      ],
      xn
    );
    const a = e.getFlatCoordinates(), l = e.getStride();
    this.drawFlatCoordinates_(
      a,
      0,
      a.length,
      l
    ), this.hitDetectionInstructions.push(qt), this.endGeometry(t);
  }
  /**
   * @param {import("../../geom/MultiLineString.js").default|import("../Feature.js").default} multiLineStringGeometry MultiLineString geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawMultiLineString(e, t, i) {
    const s = this.state, r = s.strokeStyle, o = s.lineWidth;
    if (r === void 0 || o === void 0)
      return;
    this.updateStrokeStyle(s, this.applyStroke), this.beginGeometry(e, t, i), this.hitDetectionInstructions.push(
      [
        k.SET_STROKE_STYLE,
        s.strokeStyle,
        s.lineWidth,
        s.lineCap,
        s.lineJoin,
        s.miterLimit,
        bt,
        Lt
      ],
      xn
    );
    const a = e.getEnds(), l = e.getFlatCoordinates(), h = e.getStride();
    let c = 0;
    for (let u = 0, d = a.length; u < d; ++u)
      c = this.drawFlatCoordinates_(
        l,
        c,
        /** @type {number} */
        a[u],
        h
      );
    this.hitDetectionInstructions.push(qt), this.endGeometry(t);
  }
  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   */
  finish() {
    const e = this.state;
    return e.lastStroke != null && e.lastStroke != this.coordinates.length && this.instructions.push(qt), this.reverseHitDetectionInstructions(), this.state = null, super.finish();
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   */
  applyStroke(e) {
    e.lastStroke != null && e.lastStroke != this.coordinates.length && (this.instructions.push(qt), e.lastStroke = this.coordinates.length), e.lastStroke = 0, super.applyStroke(e), this.instructions.push(xn);
  }
}
const gv = fv;
class mv extends ls {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(e, t, i, s) {
    super(e, t, i, s);
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {Array<number>} ends Ends.
   * @param {number} stride Stride.
   * @private
   * @return {number} End.
   */
  drawFlatCoordinatess_(e, t, i, s) {
    const r = this.state, o = r.fillStyle !== void 0, a = r.strokeStyle !== void 0, l = i.length;
    this.instructions.push(xn), this.hitDetectionInstructions.push(xn);
    for (let h = 0; h < l; ++h) {
      const c = i[h], u = this.coordinates.length, d = this.appendFlatLineCoordinates(
        e,
        t,
        c,
        s,
        !0,
        !a
      ), f = [
        k.MOVE_TO_LINE_TO,
        u,
        d
      ];
      this.instructions.push(f), this.hitDetectionInstructions.push(f), a && (this.instructions.push($l), this.hitDetectionInstructions.push($l)), t = c;
    }
    return o && (this.instructions.push(Is), this.hitDetectionInstructions.push(Is)), a && (this.instructions.push(qt), this.hitDetectionInstructions.push(qt)), t;
  }
  /**
   * @param {import("../../geom/Circle.js").default} circleGeometry Circle geometry.
   * @param {import("../../Feature.js").default} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawCircle(e, t, i) {
    const s = this.state, r = s.fillStyle, o = s.strokeStyle;
    if (r === void 0 && o === void 0)
      return;
    this.setFillStrokeStyles_(), this.beginGeometry(e, t, i), s.fillStyle !== void 0 && this.hitDetectionInstructions.push([
      k.SET_FILL_STYLE,
      Ge
    ]), s.strokeStyle !== void 0 && this.hitDetectionInstructions.push([
      k.SET_STROKE_STYLE,
      s.strokeStyle,
      s.lineWidth,
      s.lineCap,
      s.lineJoin,
      s.miterLimit,
      bt,
      Lt
    ]);
    const a = e.getFlatCoordinates(), l = e.getStride(), h = this.coordinates.length;
    this.appendFlatLineCoordinates(
      a,
      0,
      a.length,
      l,
      !1,
      !1
    );
    const c = [k.CIRCLE, h];
    this.instructions.push(xn, c), this.hitDetectionInstructions.push(xn, c), s.fillStyle !== void 0 && (this.instructions.push(Is), this.hitDetectionInstructions.push(Is)), s.strokeStyle !== void 0 && (this.instructions.push(qt), this.hitDetectionInstructions.push(qt)), this.endGeometry(t);
  }
  /**
   * @param {import("../../geom/Polygon.js").default|import("../Feature.js").default} polygonGeometry Polygon geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawPolygon(e, t, i) {
    const s = this.state, r = s.fillStyle, o = s.strokeStyle;
    if (r === void 0 && o === void 0)
      return;
    this.setFillStrokeStyles_(), this.beginGeometry(e, t, i), s.fillStyle !== void 0 && this.hitDetectionInstructions.push([
      k.SET_FILL_STYLE,
      Ge
    ]), s.strokeStyle !== void 0 && this.hitDetectionInstructions.push([
      k.SET_STROKE_STYLE,
      s.strokeStyle,
      s.lineWidth,
      s.lineCap,
      s.lineJoin,
      s.miterLimit,
      bt,
      Lt
    ]);
    const a = e.getEnds(), l = e.getOrientedFlatCoordinates(), h = e.getStride();
    this.drawFlatCoordinatess_(
      l,
      0,
      /** @type {Array<number>} */
      a,
      h
    ), this.endGeometry(t);
  }
  /**
   * @param {import("../../geom/MultiPolygon.js").default} multiPolygonGeometry MultiPolygon geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawMultiPolygon(e, t, i) {
    const s = this.state, r = s.fillStyle, o = s.strokeStyle;
    if (r === void 0 && o === void 0)
      return;
    this.setFillStrokeStyles_(), this.beginGeometry(e, t, i), s.fillStyle !== void 0 && this.hitDetectionInstructions.push([
      k.SET_FILL_STYLE,
      Ge
    ]), s.strokeStyle !== void 0 && this.hitDetectionInstructions.push([
      k.SET_STROKE_STYLE,
      s.strokeStyle,
      s.lineWidth,
      s.lineCap,
      s.lineJoin,
      s.miterLimit,
      bt,
      Lt
    ]);
    const a = e.getEndss(), l = e.getOrientedFlatCoordinates(), h = e.getStride();
    let c = 0;
    for (let u = 0, d = a.length; u < d; ++u)
      c = this.drawFlatCoordinatess_(
        l,
        c,
        a[u],
        h
      );
    this.endGeometry(t);
  }
  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   */
  finish() {
    this.reverseHitDetectionInstructions(), this.state = null;
    const e = this.tolerance;
    if (e !== 0) {
      const t = this.coordinates;
      for (let i = 0, s = t.length; i < s; ++i)
        t[i] = pn(t[i], e);
    }
    return super.finish();
  }
  /**
   * @private
   */
  setFillStrokeStyles_() {
    const e = this.state;
    e.fillStyle !== void 0 && this.updateFillStyle(e, this.createFill), e.strokeStyle !== void 0 && this.updateStrokeStyle(e, this.applyStroke);
  }
}
const eh = mv;
function pv(n, e, t, i, s) {
  const r = [];
  let o = t, a = 0, l = e.slice(t, 2);
  for (; a < n && o + s < i; ) {
    const [h, c] = l.slice(-2), u = e[o + s], d = e[o + s + 1], f = Math.sqrt(
      (u - h) * (u - h) + (d - c) * (d - c)
    );
    if (a += f, a >= n) {
      const g = (n - a + f) / f, m = Ke(h, u, g), p = Ke(c, d, g);
      l.push(m, p), r.push(l), l = [m, p], a == n && (o += s), a = 0;
    } else if (a < n)
      l.push(
        e[o + s],
        e[o + s + 1]
      ), o += s;
    else {
      const g = f - a, m = Ke(h, u, g / f), p = Ke(c, d, g / f);
      l.push(m, p), r.push(l), l = [m, p], a = 0, o += s;
    }
  }
  return a > 0 && r.push(l), r;
}
function _v(n, e, t, i, s) {
  let r = t, o = t, a = 0, l = 0, h = t, c, u, d, f, g, m, p, _, y, x;
  for (u = t; u < i; u += s) {
    const v = e[u], E = e[u + 1];
    g !== void 0 && (y = v - g, x = E - m, f = Math.sqrt(y * y + x * x), p !== void 0 && (l += d, c = Math.acos((p * y + _ * x) / (d * f)), c > n && (l > a && (a = l, r = h, o = u), l = 0, h = u - s)), d = f, p = y, _ = x), g = v, m = E;
  }
  return l += f, l > a ? [h, u] : [r, o];
}
const Ws = {
  left: 0,
  center: 0.5,
  right: 1,
  top: 0,
  middle: 0.5,
  hanging: 0.2,
  alphabetic: 0.8,
  ideographic: 0.8,
  bottom: 1
};
class yv extends ls {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(e, t, i, s) {
    super(e, t, i, s), this.labels_ = null, this.text_ = "", this.textOffsetX_ = 0, this.textOffsetY_ = 0, this.textRotateWithView_ = void 0, this.textRotation_ = 0, this.textFillState_ = null, this.fillStates = {}, this.fillStates[Ge] = { fillStyle: Ge }, this.textStrokeState_ = null, this.strokeStates = {}, this.textState_ = /** @type {import("../canvas.js").TextState} */
    {}, this.textStates = {}, this.textKey_ = "", this.fillKey_ = "", this.strokeKey_ = "", this.declutterMode_ = void 0, this.declutterImageWithText_ = void 0;
  }
  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   */
  finish() {
    const e = super.finish();
    return e.textStates = this.textStates, e.fillStates = this.fillStates, e.strokeStates = this.strokeStates, e;
  }
  /**
   * @param {import("../../geom/SimpleGeometry.js").default|import("../Feature.js").default} geometry Geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawText(e, t, i) {
    const s = this.textFillState_, r = this.textStrokeState_, o = this.textState_;
    if (this.text_ === "" || !o || !s && !r)
      return;
    const a = this.coordinates;
    let l = a.length;
    const h = e.getType();
    let c = null, u = e.getStride();
    if (o.placement === "line" && (h == "LineString" || h == "MultiLineString" || h == "Polygon" || h == "MultiPolygon")) {
      if (!Be(this.maxExtent, e.getExtent()))
        return;
      let d;
      if (c = e.getFlatCoordinates(), h == "LineString")
        d = [c.length];
      else if (h == "MultiLineString")
        d = /** @type {import("../../geom/MultiLineString.js").default} */
        e.getEnds();
      else if (h == "Polygon")
        d = /** @type {import("../../geom/Polygon.js").default} */
        e.getEnds().slice(0, 1);
      else if (h == "MultiPolygon") {
        const p = (
          /** @type {import("../../geom/MultiPolygon.js").default} */
          e.getEndss()
        );
        d = [];
        for (let _ = 0, y = p.length; _ < y; ++_)
          d.push(p[_][0]);
      }
      this.beginGeometry(e, t, i);
      const f = o.repeat, g = f ? void 0 : o.textAlign;
      let m = 0;
      for (let p = 0, _ = d.length; p < _; ++p) {
        let y;
        f ? y = pv(
          f * this.resolution,
          c,
          m,
          d[p],
          u
        ) : y = [c.slice(m, d[p])];
        for (let x = 0, v = y.length; x < v; ++x) {
          const E = y[x];
          let w = 0, I = E.length;
          if (g == null) {
            const R = _v(
              o.maxAngle,
              E,
              0,
              E.length,
              2
            );
            w = R[0], I = R[1];
          }
          for (let R = w; R < I; R += u)
            a.push(E[R], E[R + 1]);
          const C = a.length;
          m = d[p], this.drawChars_(l, C), l = C;
        }
      }
      this.endGeometry(t);
    } else {
      let d = o.overflow ? null : [];
      switch (h) {
        case "Point":
        case "MultiPoint":
          c = /** @type {import("../../geom/MultiPoint.js").default} */
          e.getFlatCoordinates();
          break;
        case "LineString":
          c = /** @type {import("../../geom/LineString.js").default} */
          e.getFlatMidpoint();
          break;
        case "Circle":
          c = /** @type {import("../../geom/Circle.js").default} */
          e.getCenter();
          break;
        case "MultiLineString":
          c = /** @type {import("../../geom/MultiLineString.js").default} */
          e.getFlatMidpoints(), u = 2;
          break;
        case "Polygon":
          c = /** @type {import("../../geom/Polygon.js").default} */
          e.getFlatInteriorPoint(), o.overflow || d.push(c[2] / this.resolution), u = 3;
          break;
        case "MultiPolygon":
          const y = (
            /** @type {import("../../geom/MultiPolygon.js").default} */
            e.getFlatInteriorPoints()
          );
          c = [];
          for (let x = 0, v = y.length; x < v; x += 3)
            o.overflow || d.push(y[x + 2] / this.resolution), c.push(y[x], y[x + 1]);
          if (c.length === 0)
            return;
          u = 2;
          break;
      }
      const f = this.appendFlatPointCoordinates(c, u);
      if (f === l)
        return;
      if (d && (f - l) / 2 !== c.length / u) {
        let y = l / 2;
        d = d.filter((x, v) => {
          const E = a[(y + v) * 2] === c[v * u] && a[(y + v) * 2 + 1] === c[v * u + 1];
          return E || --y, E;
        });
      }
      this.saveTextStates_(), (o.backgroundFill || o.backgroundStroke) && (this.setFillStrokeStyle(
        o.backgroundFill,
        o.backgroundStroke
      ), o.backgroundFill && this.updateFillStyle(this.state, this.createFill), o.backgroundStroke && (this.updateStrokeStyle(this.state, this.applyStroke), this.hitDetectionInstructions.push(this.createStroke(this.state)))), this.beginGeometry(e, t, i);
      let g = o.padding;
      if (g != En && (o.scale[0] < 0 || o.scale[1] < 0)) {
        let y = o.padding[0], x = o.padding[1], v = o.padding[2], E = o.padding[3];
        o.scale[0] < 0 && (x = -x, E = -E), o.scale[1] < 0 && (y = -y, v = -v), g = [y, x, v, E];
      }
      const m = this.pixelRatio;
      this.instructions.push([
        k.DRAW_IMAGE,
        l,
        f,
        null,
        NaN,
        NaN,
        NaN,
        1,
        0,
        0,
        this.textRotateWithView_,
        this.textRotation_,
        [1, 1],
        NaN,
        this.declutterMode_,
        this.declutterImageWithText_,
        g == En ? En : g.map(function(y) {
          return y * m;
        }),
        !!o.backgroundFill,
        !!o.backgroundStroke,
        this.text_,
        this.textKey_,
        this.strokeKey_,
        this.fillKey_,
        this.textOffsetX_,
        this.textOffsetY_,
        d
      ]);
      const p = 1 / m, _ = this.state.fillStyle;
      o.backgroundFill && (this.state.fillStyle = Ge, this.hitDetectionInstructions.push(this.createFill(this.state))), this.hitDetectionInstructions.push([
        k.DRAW_IMAGE,
        l,
        f,
        null,
        NaN,
        NaN,
        NaN,
        1,
        0,
        0,
        this.textRotateWithView_,
        this.textRotation_,
        [p, p],
        NaN,
        this.declutterMode_,
        this.declutterImageWithText_,
        g,
        !!o.backgroundFill,
        !!o.backgroundStroke,
        this.text_,
        this.textKey_,
        this.strokeKey_,
        this.fillKey_ ? Ge : this.fillKey_,
        this.textOffsetX_,
        this.textOffsetY_,
        d
      ]), o.backgroundFill && (this.state.fillStyle = _, this.hitDetectionInstructions.push(this.createFill(this.state))), this.endGeometry(t);
    }
  }
  /**
   * @private
   */
  saveTextStates_() {
    const e = this.textStrokeState_, t = this.textState_, i = this.textFillState_, s = this.strokeKey_;
    e && (s in this.strokeStates || (this.strokeStates[s] = {
      strokeStyle: e.strokeStyle,
      lineCap: e.lineCap,
      lineDashOffset: e.lineDashOffset,
      lineWidth: e.lineWidth,
      lineJoin: e.lineJoin,
      miterLimit: e.miterLimit,
      lineDash: e.lineDash
    }));
    const r = this.textKey_;
    r in this.textStates || (this.textStates[r] = {
      font: t.font,
      textAlign: t.textAlign || ji,
      justify: t.justify,
      textBaseline: t.textBaseline || Fs,
      scale: t.scale
    });
    const o = this.fillKey_;
    i && (o in this.fillStates || (this.fillStates[o] = {
      fillStyle: i.fillStyle
    }));
  }
  /**
   * @private
   * @param {number} begin Begin.
   * @param {number} end End.
   */
  drawChars_(e, t) {
    const i = this.textStrokeState_, s = this.textState_, r = this.strokeKey_, o = this.textKey_, a = this.fillKey_;
    this.saveTextStates_();
    const l = this.pixelRatio, h = Ws[s.textBaseline], c = this.textOffsetY_ * l, u = this.text_, d = i ? i.lineWidth * Math.abs(s.scale[0]) / 2 : 0;
    this.instructions.push([
      k.DRAW_CHARS,
      e,
      t,
      h,
      s.overflow,
      a,
      s.maxAngle,
      l,
      c,
      r,
      d * l,
      u,
      o,
      1,
      this.declutterMode_
    ]), this.hitDetectionInstructions.push([
      k.DRAW_CHARS,
      e,
      t,
      h,
      s.overflow,
      a && Ge,
      s.maxAngle,
      l,
      c,
      r,
      d * l,
      u,
      o,
      1 / l,
      this.declutterMode_
    ]);
  }
  /**
   * @param {import("../../style/Text.js").default} textStyle Text style.
   * @param {Object} [sharedData] Shared data.
   */
  setTextStyle(e, t) {
    let i, s, r;
    if (!e)
      this.text_ = "";
    else {
      const o = e.getFill();
      o ? (s = this.textFillState_, s || (s = /** @type {import("../canvas.js").FillState} */
      {}, this.textFillState_ = s), s.fillStyle = gt(
        o.getColor() || Ge
      )) : (s = null, this.textFillState_ = s);
      const a = e.getStroke();
      if (!a)
        r = null, this.textStrokeState_ = r;
      else {
        r = this.textStrokeState_, r || (r = /** @type {import("../canvas.js").StrokeState} */
        {}, this.textStrokeState_ = r);
        const g = a.getLineDash(), m = a.getLineDashOffset(), p = a.getWidth(), _ = a.getMiterLimit();
        r.lineCap = a.getLineCap() || ai, r.lineDash = g ? g.slice() : bt, r.lineDashOffset = m === void 0 ? Lt : m, r.lineJoin = a.getLineJoin() || li, r.lineWidth = p === void 0 ? Hi : p, r.miterLimit = _ === void 0 ? Vi : _, r.strokeStyle = gt(
          a.getColor() || Zi
        );
      }
      i = this.textState_;
      const l = e.getFont() || Rc;
      Ty(l);
      const h = e.getScaleArray();
      i.overflow = e.getOverflow(), i.font = l, i.maxAngle = e.getMaxAngle(), i.placement = e.getPlacement(), i.textAlign = e.getTextAlign(), i.repeat = e.getRepeat(), i.justify = e.getJustify(), i.textBaseline = e.getTextBaseline() || Fs, i.backgroundFill = e.getBackgroundFill(), i.backgroundStroke = e.getBackgroundStroke(), i.padding = e.getPadding() || En, i.scale = h === void 0 ? [1, 1] : h;
      const c = e.getOffsetX(), u = e.getOffsetY(), d = e.getRotateWithView(), f = e.getRotation();
      this.text_ = e.getText() || "", this.textOffsetX_ = c === void 0 ? 0 : c, this.textOffsetY_ = u === void 0 ? 0 : u, this.textRotateWithView_ = d === void 0 ? !1 : d, this.textRotation_ = f === void 0 ? 0 : f, this.strokeKey_ = r ? (typeof r.strokeStyle == "string" ? r.strokeStyle : oe(r.strokeStyle)) + r.lineCap + r.lineDashOffset + "|" + r.lineWidth + r.lineJoin + r.miterLimit + "[" + r.lineDash.join() + "]" : "", this.textKey_ = i.font + i.scale + (i.textAlign || "?") + (i.repeat || "?") + (i.justify || "?") + (i.textBaseline || "?"), this.fillKey_ = s && s.fillStyle ? typeof s.fillStyle == "string" ? s.fillStyle : "|" + oe(s.fillStyle) : "";
    }
    this.declutterMode_ = e.getDeclutterMode(), this.declutterImageWithText_ = t;
  }
}
const vv = {
  Circle: eh,
  Default: ls,
  Image: dv,
  LineString: gv,
  Polygon: eh,
  Text: yv
};
class Ev {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Max extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(e, t, i, s) {
    this.tolerance_ = e, this.maxExtent_ = t, this.pixelRatio_ = s, this.resolution_ = i, this.buildersByZIndex_ = {};
  }
  /**
   * @return {!Object<string, !Object<import("../canvas.js").BuilderType, import("./Builder.js").SerializableInstructions>>} The serializable instructions
   */
  finish() {
    const e = {};
    for (const t in this.buildersByZIndex_) {
      e[t] = e[t] || {};
      const i = this.buildersByZIndex_[t];
      for (const s in i) {
        const r = i[s].finish();
        e[t][s] = r;
      }
    }
    return e;
  }
  /**
   * @param {number|undefined} zIndex Z index.
   * @param {import("../canvas.js").BuilderType} builderType Replay type.
   * @return {import("../VectorContext.js").default} Replay.
   */
  getBuilder(e, t) {
    const i = e !== void 0 ? e.toString() : "0";
    let s = this.buildersByZIndex_[i];
    s === void 0 && (s = {}, this.buildersByZIndex_[i] = s);
    let r = s[t];
    if (r === void 0) {
      const o = vv[t];
      r = new o(
        this.tolerance_,
        this.maxExtent_,
        this.resolution_,
        this.pixelRatio_
      ), s[t] = r;
    }
    return r;
  }
}
function xv(n, e, t, i, s, r, o, a, l, h, c, u) {
  let d = n[e], f = n[e + 1], g = 0, m = 0, p = 0, _ = 0;
  function y() {
    g = d, m = f, e += i, d = n[e], f = n[e + 1], _ += p, p = Math.sqrt((d - g) * (d - g) + (f - m) * (f - m));
  }
  do
    y();
  while (e < t - i && _ + p < r);
  let x = p === 0 ? 0 : (r - _) / p;
  const v = Ke(g, d, x), E = Ke(m, f, x), w = e - i, I = _, C = r + a * l(h, s, c);
  for (; e < t - i && _ + p < C; )
    y();
  x = p === 0 ? 0 : (C - _) / p;
  const R = Ke(g, d, x), z = Ke(m, f, x);
  let F;
  if (u) {
    const M = [v, E, R, z];
    ec(M, 0, 4, 2, u, M, M), F = M[0] > M[2];
  } else
    F = v > R;
  const B = Math.PI, V = [], X = w + i === e;
  e = w, p = 0, _ = I, d = n[e], f = n[e + 1];
  let K;
  if (X) {
    y(), K = Math.atan2(f - m, d - g), F && (K += K > 0 ? -B : B);
    const M = (R + v) / 2, G = (z + E) / 2;
    return V[0] = [M, G, (C - r) / 2, K, s], V;
  }
  s = s.replace(/\n/g, " ");
  for (let M = 0, G = s.length; M < G; ) {
    y();
    let b = Math.atan2(f - m, d - g);
    if (F && (b += b > 0 ? -B : B), K !== void 0) {
      let S = b - K;
      if (S += S > B ? -2 * B : S < -B ? 2 * B : 0, Math.abs(S) > o)
        return null;
    }
    K = b;
    const Y = M;
    let L = 0;
    for (; M < G; ++M) {
      const S = F ? G - M - 1 : M, q = a * l(h, s[S], c);
      if (e + i < t && _ + p < r + L + q / 2)
        break;
      L += q;
    }
    if (M === Y)
      continue;
    const D = F ? s.substring(G - Y, G - M) : s.substring(Y, M);
    x = p === 0 ? 0 : (r + L / 2 - _) / p;
    const O = Ke(g, d, x), $ = Ke(m, f, x);
    V.push([O, $, L / 2, b, D]), r += L;
  }
  return V;
}
const zn = $e(), Xt = [], At = [], It = [], Kt = [];
function th(n) {
  return n[3].declutterBox;
}
const nh = new RegExp(
  /* eslint-disable prettier/prettier */
  "[֑-ࣿיִ-﷿ﹰ-ﻼࠀ-࿿-]"
  /* eslint-enable prettier/prettier */
);
function Zr(n, e) {
  return e === "start" ? e = nh.test(n) ? "right" : "left" : e === "end" && (e = nh.test(n) ? "left" : "right"), Ws[e];
}
function wv(n, e, t) {
  return t > 0 && n.push(`
`, ""), n.push(e, ""), n;
}
class Cv {
  /**
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {boolean} overlaps The replay can have overlapping geometries.
   * @param {import("../canvas.js").SerializableInstructions} instructions The serializable instructions.
   * @param {boolean} [deferredRendering] Enable deferred rendering.
   */
  constructor(e, t, i, s, r) {
    this.overlaps = i, this.pixelRatio = t, this.resolution = e, this.alignAndScaleFill_, this.instructions = s.instructions, this.coordinates = s.coordinates, this.coordinateCache_ = {}, this.renderedTransform_ = at(), this.hitDetectionInstructions = s.hitDetectionInstructions, this.pixelCoordinates_ = null, this.viewRotation_ = 0, this.fillStates = s.fillStates || {}, this.strokeStates = s.strokeStates || {}, this.textStates = s.textStates || {}, this.widths_ = {}, this.labels_ = {}, this.zIndexContext_ = r ? new dc() : null;
  }
  /**
   * @return {ZIndexContext} ZIndex context.
   */
  getZIndexContext() {
    return this.zIndexContext_;
  }
  /**
   * @param {string|Array<string>} text Text.
   * @param {string} textKey Text style key.
   * @param {string} fillKey Fill style key.
   * @param {string} strokeKey Stroke style key.
   * @return {import("../canvas.js").Label} Label.
   */
  createLabel(e, t, i, s) {
    const r = e + t + i + s;
    if (this.labels_[r])
      return this.labels_[r];
    const o = s ? this.strokeStates[s] : null, a = i ? this.fillStates[i] : null, l = this.textStates[t], h = this.pixelRatio, c = [
      l.scale[0] * h,
      l.scale[1] * h
    ], u = Array.isArray(e), d = l.justify ? Ws[l.justify] : Zr(
      Array.isArray(e) ? e[0] : e,
      l.textAlign || ji
    ), f = s && o.lineWidth ? o.lineWidth : 0, g = u ? e : e.split(`
`).reduce(wv, []), { width: m, height: p, widths: _, heights: y, lineWidths: x } = Ry(
      l,
      g
    ), v = m + f, E = [], w = (v + 2) * c[0], I = (p + f) * c[1], C = {
      width: w < 0 ? Math.floor(w) : Math.ceil(w),
      height: I < 0 ? Math.floor(I) : Math.ceil(I),
      contextInstructions: E
    };
    (c[0] != 1 || c[1] != 1) && E.push("scale", c), s && (E.push("strokeStyle", o.strokeStyle), E.push("lineWidth", f), E.push("lineCap", o.lineCap), E.push("lineJoin", o.lineJoin), E.push("miterLimit", o.miterLimit), E.push("setLineDash", [o.lineDash]), E.push("lineDashOffset", o.lineDashOffset)), i && E.push("fillStyle", a.fillStyle), E.push("textBaseline", "middle"), E.push("textAlign", "center");
    const R = 0.5 - d;
    let z = d * v + R * f;
    const F = [], B = [];
    let V = 0, X = 0, K = 0, M = 0, G;
    for (let b = 0, Y = g.length; b < Y; b += 2) {
      const L = g[b];
      if (L === `
`) {
        X += V, V = 0, z = d * v + R * f, ++M;
        continue;
      }
      const D = g[b + 1] || l.font;
      D !== G && (s && F.push("font", D), i && B.push("font", D), G = D), V = Math.max(V, y[K]);
      const O = [
        L,
        z + R * _[K] + d * (_[K] - x[M]),
        0.5 * (f + V) + X
      ];
      z += _[K], s && F.push("strokeText", O), i && B.push("fillText", O), ++K;
    }
    return Array.prototype.push.apply(E, F), Array.prototype.push.apply(E, B), this.labels_[r] = C, C;
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../coordinate.js").Coordinate} p1 1st point of the background box.
   * @param {import("../../coordinate.js").Coordinate} p2 2nd point of the background box.
   * @param {import("../../coordinate.js").Coordinate} p3 3rd point of the background box.
   * @param {import("../../coordinate.js").Coordinate} p4 4th point of the background box.
   * @param {Array<*>} fillInstruction Fill instruction.
   * @param {Array<*>} strokeInstruction Stroke instruction.
   */
  replayTextBackground_(e, t, i, s, r, o, a) {
    e.beginPath(), e.moveTo.apply(e, t), e.lineTo.apply(e, i), e.lineTo.apply(e, s), e.lineTo.apply(e, r), e.lineTo.apply(e, t), o && (this.alignAndScaleFill_ = /** @type {number} */
    o[2], this.fill_(e)), a && (this.setStrokeStyle_(
      e,
      /** @type {Array<*>} */
      a
    ), e.stroke());
  }
  /**
   * @private
   * @param {number} sheetWidth Width of the sprite sheet.
   * @param {number} sheetHeight Height of the sprite sheet.
   * @param {number} centerX X.
   * @param {number} centerY Y.
   * @param {number} width Width.
   * @param {number} height Height.
   * @param {number} anchorX Anchor X.
   * @param {number} anchorY Anchor Y.
   * @param {number} originX Origin X.
   * @param {number} originY Origin Y.
   * @param {number} rotation Rotation.
   * @param {import("../../size.js").Size} scale Scale.
   * @param {boolean} snapToPixel Snap to pixel.
   * @param {Array<number>} padding Padding.
   * @param {boolean} fillStroke Background fill or stroke.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @return {ImageOrLabelDimensions} Dimensions for positioning and decluttering the image or label.
   */
  calculateImageOrLabelDimensions_(e, t, i, s, r, o, a, l, h, c, u, d, f, g, m, p) {
    a *= d[0], l *= d[1];
    let _ = i - a, y = s - l;
    const x = r + h > e ? e - h : r, v = o + c > t ? t - c : o, E = g[3] + x * d[0] + g[1], w = g[0] + v * d[1] + g[2], I = _ - g[3], C = y - g[0];
    (m || u !== 0) && (Xt[0] = I, Kt[0] = I, Xt[1] = C, At[1] = C, At[0] = I + E, It[0] = At[0], It[1] = C + w, Kt[1] = It[1]);
    let R;
    return u !== 0 ? (R = Dt(
      at(),
      i,
      s,
      1,
      1,
      u,
      -i,
      -s
    ), we(R, Xt), we(R, At), we(R, It), we(R, Kt), an(
      Math.min(Xt[0], At[0], It[0], Kt[0]),
      Math.min(Xt[1], At[1], It[1], Kt[1]),
      Math.max(Xt[0], At[0], It[0], Kt[0]),
      Math.max(Xt[1], At[1], It[1], Kt[1]),
      zn
    )) : an(
      Math.min(I, I + E),
      Math.min(C, C + w),
      Math.max(I, I + E),
      Math.max(C, C + w),
      zn
    ), f && (_ = Math.round(_), y = Math.round(y)), {
      drawImageX: _,
      drawImageY: y,
      drawImageW: x,
      drawImageH: v,
      originX: h,
      originY: c,
      declutterBox: {
        minX: zn[0],
        minY: zn[1],
        maxX: zn[2],
        maxY: zn[3],
        value: p
      },
      canvasTransform: R,
      scale: d
    };
  }
  /**
   * @private
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import('../../size.js').Size} scaledCanvasSize Scaled canvas size.
   * @param {import("../canvas.js").Label|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} imageOrLabel Image.
   * @param {ImageOrLabelDimensions} dimensions Dimensions.
   * @param {number} opacity Opacity.
   * @param {Array<*>} fillInstruction Fill instruction.
   * @param {Array<*>} strokeInstruction Stroke instruction.
   * @return {boolean} The image or label was rendered.
   */
  replayImageOrLabel_(e, t, i, s, r, o, a) {
    const l = !!(o || a), h = s.declutterBox, c = a ? a[2] * s.scale[0] / 2 : 0;
    return h.minX - c <= t[0] && h.maxX + c >= 0 && h.minY - c <= t[1] && h.maxY + c >= 0 && (l && this.replayTextBackground_(
      e,
      Xt,
      At,
      It,
      Kt,
      /** @type {Array<*>} */
      o,
      /** @type {Array<*>} */
      a
    ), by(
      e,
      s.canvasTransform,
      r,
      i,
      s.originX,
      s.originY,
      s.drawImageW,
      s.drawImageH,
      s.drawImageX,
      s.drawImageY,
      s.scale
    )), !0;
  }
  /**
   * @private
   * @param {CanvasRenderingContext2D} context Context.
   */
  fill_(e) {
    const t = this.alignAndScaleFill_;
    if (t) {
      const i = we(this.renderedTransform_, [0, 0]), s = 512 * this.pixelRatio;
      e.save(), e.translate(i[0] % s, i[1] % s), t !== 1 && e.scale(t, t), e.rotate(this.viewRotation_);
    }
    e.fill(), t && e.restore();
  }
  /**
   * @private
   * @param {CanvasRenderingContext2D} context Context.
   * @param {Array<*>} instruction Instruction.
   */
  setStrokeStyle_(e, t) {
    e.strokeStyle = /** @type {import("../../colorlike.js").ColorLike} */
    t[1], e.lineWidth = /** @type {number} */
    t[2], e.lineCap = /** @type {CanvasLineCap} */
    t[3], e.lineJoin = /** @type {CanvasLineJoin} */
    t[4], e.miterLimit = /** @type {number} */
    t[5], e.lineDashOffset = /** @type {number} */
    t[7], e.setLineDash(
      /** @type {Array<number>} */
      t[6]
    );
  }
  /**
   * @private
   * @param {string|Array<string>} text The text to draw.
   * @param {string} textKey The key of the text state.
   * @param {string} strokeKey The key for the stroke state.
   * @param {string} fillKey The key for the fill state.
   * @return {{label: import("../canvas.js").Label, anchorX: number, anchorY: number}} The text image and its anchor.
   */
  drawLabelWithPointPlacement_(e, t, i, s) {
    const r = this.textStates[t], o = this.createLabel(e, t, s, i), a = this.strokeStates[i], l = this.pixelRatio, h = Zr(
      Array.isArray(e) ? e[0] : e,
      r.textAlign || ji
    ), c = Ws[r.textBaseline || Fs], u = a && a.lineWidth ? a.lineWidth : 0, d = o.width / l - 2 * r.scale[0], f = h * d + 2 * (0.5 - h) * u, g = c * o.height / l + 2 * (0.5 - c) * u;
    return {
      label: o,
      anchorX: f,
      anchorY: g
    };
  }
  /**
   * @private
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import('../../size.js').Size} scaledCanvasSize Scaled canvas size
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {Array<*>} instructions Instructions array.
   * @param {boolean} snapToPixel Snap point symbols and text to integer pixels.
   * @param {FeatureCallback<T>} [featureCallback] Feature callback.
   * @param {import("../../extent.js").Extent} [hitExtent] Only check
   *     features that intersect this extent.
   * @param {import("rbush").default} [declutterTree] Declutter tree.
   * @return {T|undefined} Callback result.
   * @template T
   */
  execute_(e, t, i, s, r, o, a, l) {
    const h = this.zIndexContext_;
    let c;
    this.pixelCoordinates_ && hn(i, this.renderedTransform_) ? c = this.pixelCoordinates_ : (this.pixelCoordinates_ || (this.pixelCoordinates_ = []), c = tn(
      this.coordinates,
      0,
      this.coordinates.length,
      2,
      i,
      this.pixelCoordinates_
    ), V0(this.renderedTransform_, i));
    let u = 0;
    const d = s.length;
    let f = 0, g, m, p, _, y, x, v, E, w, I, C, R, z, F = 0, B = 0, V = null, X = null;
    const K = this.coordinateCache_, M = this.viewRotation_, G = Math.round(Math.atan2(-i[1], i[0]) * 1e12) / 1e12, b = (
      /** @type {import("../../render.js").State} */
      {
        context: e,
        pixelRatio: this.pixelRatio,
        resolution: this.resolution,
        rotation: M
      }
    ), Y = this.instructions != s || this.overlaps ? 0 : 200;
    let L, D, O, $;
    for (; u < d; ) {
      const S = s[u];
      switch (
        /** @type {import("./Instruction.js").default} */
        S[0]
      ) {
        case k.BEGIN_GEOMETRY:
          L = /** @type {import("../../Feature.js").FeatureLike} */
          S[1], $ = S[3], L.getGeometry() ? a !== void 0 && !Be(a, $.getExtent()) ? u = /** @type {number} */
          S[2] + 1 : ++u : u = /** @type {number} */
          S[2], h && (h.zIndex = S[4]);
          break;
        case k.BEGIN_PATH:
          F > Y && (this.fill_(e), F = 0), B > Y && (e.stroke(), B = 0), !F && !B && (e.beginPath(), y = NaN, x = NaN), ++u;
          break;
        case k.CIRCLE:
          f = /** @type {number} */
          S[1];
          const de = c[f], ce = c[f + 1], Oe = c[f + 2], tt = c[f + 3], ke = Oe - de, yi = tt - ce, cn = Math.sqrt(ke * ke + yi * yi);
          e.moveTo(de + cn, ce), e.arc(de, ce, cn, 0, 2 * Math.PI, !0), ++u;
          break;
        case k.CLOSE_PATH:
          e.closePath(), ++u;
          break;
        case k.CUSTOM:
          f = /** @type {number} */
          S[1], g = S[2];
          const yr = (
            /** @type {import("../../geom/SimpleGeometry.js").default} */
            S[3]
          ), hs = S[4], cs = S[5];
          b.geometry = yr, b.feature = L, u in K || (K[u] = []);
          const Ve = K[u];
          cs ? cs(c, f, g, 2, Ve) : (Ve[0] = c[f], Ve[1] = c[f + 1], Ve.length = 2), h && (h.zIndex = S[6]), hs(Ve, b), ++u;
          break;
        case k.DRAW_IMAGE:
          f = /** @type {number} */
          S[1], g = /** @type {number} */
          S[2], w = /** @type {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement} */
          S[3], m = /** @type {number} */
          S[4], p = /** @type {number} */
          S[5];
          let Dn = (
            /** @type {number} */
            S[6]
          );
          const us = (
            /** @type {number} */
            S[7]
          ), vr = (
            /** @type {number} */
            S[8]
          ), ds = (
            /** @type {number} */
            S[9]
          ), fs = (
            /** @type {boolean} */
            S[10]
          );
          let Xe = (
            /** @type {number} */
            S[11]
          );
          const nt = (
            /** @type {import("../../size.js").Size} */
            S[12]
          );
          let lt = (
            /** @type {number} */
            S[13]
          );
          _ = S[14] || "declutter";
          const it = (
            /** @type {{args: import("../canvas.js").DeclutterImageWithText, declutterMode: import('../../style/Style.js').DeclutterMode}} */
            S[15]
          );
          if (!w && S.length >= 20) {
            I = /** @type {string} */
            S[19], C = /** @type {string} */
            S[20], R = /** @type {string} */
            S[21], z = /** @type {string} */
            S[22];
            const Ze = this.drawLabelWithPointPlacement_(
              I,
              C,
              R,
              z
            );
            w = Ze.label, S[3] = w;
            const un = (
              /** @type {number} */
              S[23]
            );
            m = (Ze.anchorX - un) * this.pixelRatio, S[4] = m;
            const je = (
              /** @type {number} */
              S[24]
            );
            p = (Ze.anchorY - je) * this.pixelRatio, S[5] = p, Dn = w.height, S[6] = Dn, lt = w.width, S[13] = lt;
          }
          let Pn;
          S.length > 25 && (Pn = /** @type {number} */
          S[25]);
          let On, Gt, Et;
          S.length > 17 ? (On = /** @type {Array<number>} */
          S[16], Gt = /** @type {boolean} */
          S[17], Et = /** @type {boolean} */
          S[18]) : (On = En, Gt = !1, Et = !1), fs && G ? Xe += M : !fs && !G && (Xe -= M);
          let Er = 0;
          for (; f < g; f += 2) {
            if (Pn && Pn[Er++] < lt / this.pixelRatio)
              continue;
            const Ze = this.calculateImageOrLabelDimensions_(
              w.width,
              w.height,
              c[f],
              c[f + 1],
              lt,
              Dn,
              m,
              p,
              vr,
              ds,
              Xe,
              nt,
              r,
              On,
              Gt || Et,
              L
            ), un = [
              e,
              t,
              w,
              Ze,
              us,
              Gt ? (
                /** @type {Array<*>} */
                V
              ) : null,
              Et ? (
                /** @type {Array<*>} */
                X
              ) : null
            ];
            if (l) {
              let je, ht, He;
              if (it) {
                const me = g - f;
                if (!it[me]) {
                  it[me] = { args: un, declutterMode: _ };
                  continue;
                }
                const De = it[me];
                je = De.args, ht = De.declutterMode, delete it[me], He = th(je);
              }
              let xt, wt;
              if (je && (ht !== "declutter" || !l.collides(He)) && (xt = !0), (_ !== "declutter" || !l.collides(Ze.declutterBox)) && (wt = !0), ht === "declutter" && _ === "declutter") {
                const me = xt && wt;
                xt = me, wt = me;
              }
              xt && (ht !== "none" && l.insert(He), this.replayImageOrLabel_.apply(this, je)), wt && (_ !== "none" && l.insert(Ze.declutterBox), this.replayImageOrLabel_.apply(this, un));
            } else
              this.replayImageOrLabel_.apply(this, un);
          }
          ++u;
          break;
        case k.DRAW_CHARS:
          const Me = (
            /** @type {number} */
            S[1]
          ), ya = (
            /** @type {number} */
            S[2]
          ), xr = (
            /** @type {number} */
            S[3]
          ), Jc = (
            /** @type {number} */
            S[4]
          );
          z = /** @type {string} */
          S[5];
          const $c = (
            /** @type {number} */
            S[6]
          ), va = (
            /** @type {number} */
            S[7]
          ), Ea = (
            /** @type {number} */
            S[8]
          );
          R = /** @type {string} */
          S[9];
          const wr = (
            /** @type {number} */
            S[10]
          );
          I = /** @type {string} */
          S[11], C = /** @type {string} */
          S[12];
          const xa = [
            /** @type {number} */
            S[13],
            /** @type {number} */
            S[13]
          ];
          _ = S[14] || "declutter";
          const Cr = this.textStates[C], vi = Cr.font, Ei = [
            Cr.scale[0] * va,
            Cr.scale[1] * va
          ];
          let xi;
          vi in this.widths_ ? xi = this.widths_[vi] : (xi = {}, this.widths_[vi] = xi);
          const wa = Uc(c, Me, ya, 2), Ca = Math.abs(Ei[0]) * Kl(vi, I, xi);
          if (Jc || Ca <= wa) {
            const Ze = this.textStates[C].textAlign, un = (wa - Ca) * Zr(I, Ze), je = xv(
              c,
              Me,
              ya,
              2,
              I,
              un,
              $c,
              Math.abs(Ei[0]),
              Kl,
              vi,
              xi,
              G ? 0 : this.viewRotation_
            );
            e:
              if (je) {
                const ht = [];
                let He, xt, wt, me, De;
                if (R)
                  for (He = 0, xt = je.length; He < xt; ++He) {
                    De = je[He], wt = /** @type {string} */
                    De[4], me = this.createLabel(wt, C, "", R), m = /** @type {number} */
                    De[2] + (Ei[0] < 0 ? -wr : wr), p = xr * me.height + (0.5 - xr) * 2 * wr * Ei[1] / Ei[0] - Ea;
                    const Ct = this.calculateImageOrLabelDimensions_(
                      me.width,
                      me.height,
                      De[0],
                      De[1],
                      me.width,
                      me.height,
                      m,
                      p,
                      0,
                      0,
                      De[3],
                      xa,
                      !1,
                      En,
                      !1,
                      L
                    );
                    if (l && _ === "declutter" && l.collides(Ct.declutterBox))
                      break e;
                    ht.push([
                      e,
                      t,
                      me,
                      Ct,
                      1,
                      null,
                      null
                    ]);
                  }
                if (z)
                  for (He = 0, xt = je.length; He < xt; ++He) {
                    De = je[He], wt = /** @type {string} */
                    De[4], me = this.createLabel(wt, C, z, ""), m = /** @type {number} */
                    De[2], p = xr * me.height - Ea;
                    const Ct = this.calculateImageOrLabelDimensions_(
                      me.width,
                      me.height,
                      De[0],
                      De[1],
                      me.width,
                      me.height,
                      m,
                      p,
                      0,
                      0,
                      De[3],
                      xa,
                      !1,
                      En,
                      !1,
                      L
                    );
                    if (l && _ === "declutter" && l.collides(Ct.declutterBox))
                      break e;
                    ht.push([
                      e,
                      t,
                      me,
                      Ct,
                      1,
                      null,
                      null
                    ]);
                  }
                l && _ !== "none" && l.load(ht.map(th));
                for (let Ct = 0, eu = ht.length; Ct < eu; ++Ct)
                  this.replayImageOrLabel_.apply(this, ht[Ct]);
              }
          }
          ++u;
          break;
        case k.END_GEOMETRY:
          if (o !== void 0) {
            L = /** @type {import("../../Feature.js").FeatureLike} */
            S[1];
            const Ze = o(L, $);
            if (Ze)
              return Ze;
          }
          ++u;
          break;
        case k.FILL:
          Y ? F++ : this.fill_(e), ++u;
          break;
        case k.MOVE_TO_LINE_TO:
          for (f = /** @type {number} */
          S[1], g = /** @type {number} */
          S[2], D = c[f], O = c[f + 1], v = D + 0.5 | 0, E = O + 0.5 | 0, (v !== y || E !== x) && (e.moveTo(D, O), y = v, x = E), f += 2; f < g; f += 2)
            D = c[f], O = c[f + 1], v = D + 0.5 | 0, E = O + 0.5 | 0, (f == g - 2 || v !== y || E !== x) && (e.lineTo(D, O), y = v, x = E);
          ++u;
          break;
        case k.SET_FILL_STYLE:
          V = S, this.alignAndScaleFill_ = S[2], F && (this.fill_(e), F = 0, B && (e.stroke(), B = 0)), e.fillStyle = S[1], ++u;
          break;
        case k.SET_STROKE_STYLE:
          X = S, B && (e.stroke(), B = 0), this.setStrokeStyle_(
            e,
            /** @type {Array<*>} */
            S
          ), ++u;
          break;
        case k.STROKE:
          Y ? B++ : e.stroke(), ++u;
          break;
        default:
          ++u;
          break;
      }
    }
    F && this.fill_(e), B && e.stroke();
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import('../../size.js').Size} scaledCanvasSize Scaled canvas size.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {number} viewRotation View rotation.
   * @param {boolean} snapToPixel Snap point symbols and text to integer pixels.
   * @param {import("rbush").default} [declutterTree] Declutter tree.
   */
  execute(e, t, i, s, r, o) {
    this.viewRotation_ = s, this.execute_(
      e,
      t,
      i,
      this.instructions,
      r,
      void 0,
      void 0,
      o
    );
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {number} viewRotation View rotation.
   * @param {FeatureCallback<T>} [featureCallback] Feature callback.
   * @param {import("../../extent.js").Extent} [hitExtent] Only check
   *     features that intersect this extent.
   * @return {T|undefined} Callback result.
   * @template T
   */
  executeHitDetection(e, t, i, s, r) {
    return this.viewRotation_ = i, this.execute_(
      e,
      [e.canvas.width, e.canvas.height],
      t,
      this.hitDetectionInstructions,
      !0,
      s,
      r
    );
  }
}
const Pi = [
  "Polygon",
  "Circle",
  "LineString",
  "Image",
  "Text",
  "Default"
], Zc = ["Image", "Text"], Av = Pi.filter(
  (n) => !Zc.includes(n)
);
class Iv {
  /**
   * @param {import("../../extent.js").Extent} maxExtent Max extent for clipping. When a
   * `maxExtent` was set on the Builder for this executor group, the same `maxExtent`
   * should be set here, unless the target context does not exceed that extent (which
   * can be the case when rendering to tiles).
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {boolean} overlaps The executor group can have overlapping geometries.
   * @param {!Object<string, !Object<import("../canvas.js").BuilderType, import("../canvas.js").SerializableInstructions>>} allInstructions
   * The serializable instructions.
   * @param {number} [renderBuffer] Optional rendering buffer.
   * @param {boolean} [deferredRendering] Enable deferred rendering with renderDeferred().
   */
  constructor(e, t, i, s, r, o, a) {
    this.maxExtent_ = e, this.overlaps_ = s, this.pixelRatio_ = i, this.resolution_ = t, this.renderBuffer_ = o, this.executorsByZIndex_ = {}, this.hitDetectionContext_ = null, this.hitDetectionTransform_ = at(), this.renderedContext_ = null, this.deferredZIndexContexts_ = [], this.createExecutors_(r, a);
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../transform.js").Transform} transform Transform.
   */
  clip(e, t) {
    const i = this.getClipCoords(t);
    e.beginPath(), e.moveTo(i[0], i[1]), e.lineTo(i[2], i[3]), e.lineTo(i[4], i[5]), e.lineTo(i[6], i[7]), e.clip();
  }
  /**
   * Create executors and populate them using the provided instructions.
   * @private
   * @param {!Object<string, !Object<string, import("../canvas.js").SerializableInstructions>>} allInstructions The serializable instructions
   * @param {boolean} deferredRendering Enable deferred rendering.
   */
  createExecutors_(e, t) {
    for (const i in e) {
      let s = this.executorsByZIndex_[i];
      s === void 0 && (s = {}, this.executorsByZIndex_[i] = s);
      const r = e[i];
      for (const o in r) {
        const a = r[o];
        s[o] = new Cv(
          this.resolution_,
          this.pixelRatio_,
          this.overlaps_,
          a,
          t
        );
      }
    }
  }
  /**
   * @param {Array<import("../canvas.js").BuilderType>} executors Executors.
   * @return {boolean} Has executors of the provided types.
   */
  hasExecutors(e) {
    for (const t in this.executorsByZIndex_) {
      const i = this.executorsByZIndex_[t];
      for (let s = 0, r = e.length; s < r; ++s)
        if (e[s] in i)
          return !0;
    }
    return !1;
  }
  /**
   * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {number} resolution Resolution.
   * @param {number} rotation Rotation.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {function(import("../../Feature.js").FeatureLike, import("../../geom/SimpleGeometry.js").default, number): T} callback Feature callback.
   * @param {Array<import("../../Feature.js").FeatureLike>} declutteredFeatures Decluttered features.
   * @return {T|undefined} Callback result.
   * @template T
   */
  forEachFeatureAtCoordinate(e, t, i, s, r, o) {
    s = Math.round(s);
    const a = s * 2 + 1, l = Dt(
      this.hitDetectionTransform_,
      s + 0.5,
      s + 0.5,
      1 / t,
      -1 / t,
      -i,
      -e[0],
      -e[1]
    ), h = !this.hitDetectionContext_;
    h && (this.hitDetectionContext_ = Ie(
      a,
      a,
      void 0,
      { willReadFrequently: !0 }
    ));
    const c = this.hitDetectionContext_;
    c.canvas.width !== a || c.canvas.height !== a ? (c.canvas.width = a, c.canvas.height = a) : h || c.clearRect(0, 0, a, a);
    let u;
    this.renderBuffer_ !== void 0 && (u = $e(), Mi(u, e), zo(
      u,
      t * (this.renderBuffer_ + s),
      u
    ));
    const d = Tv(s);
    let f;
    function g(E, w) {
      const I = c.getImageData(
        0,
        0,
        a,
        a
      ).data;
      for (let C = 0, R = d.length; C < R; C++)
        if (I[d[C]] > 0) {
          if (!o || f !== "Image" && f !== "Text" || o.includes(E)) {
            const z = (d[C] - 3) / 4, F = s - z % a, B = s - (z / a | 0), V = r(E, w, F * F + B * B);
            if (V)
              return V;
          }
          c.clearRect(0, 0, a, a);
          break;
        }
    }
    const m = Object.keys(this.executorsByZIndex_).map(Number);
    m.sort(on);
    let p, _, y, x, v;
    for (p = m.length - 1; p >= 0; --p) {
      const E = m[p].toString();
      for (y = this.executorsByZIndex_[E], _ = Pi.length - 1; _ >= 0; --_)
        if (f = Pi[_], x = y[f], x !== void 0 && (v = x.executeHitDetection(
          c,
          l,
          i,
          g,
          u
        ), v))
          return v;
    }
  }
  /**
   * @param {import("../../transform.js").Transform} transform Transform.
   * @return {Array<number>|null} Clip coordinates.
   */
  getClipCoords(e) {
    const t = this.maxExtent_;
    if (!t)
      return null;
    const i = t[0], s = t[1], r = t[2], o = t[3], a = [i, s, i, o, r, o, r, s];
    return tn(a, 0, 8, 2, e, a), a;
  }
  /**
   * @return {boolean} Is empty.
   */
  isEmpty() {
    return ri(this.executorsByZIndex_);
  }
  /**
   * @param {CanvasRenderingContext2D} targetContext Context.
   * @param {import('../../size.js').Size} scaledCanvasSize Scale of the context.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {number} viewRotation View rotation.
   * @param {boolean} snapToPixel Snap point symbols and test to integer pixel.
   * @param {Array<import("../canvas.js").BuilderType>} [builderTypes] Ordered replay types to replay.
   *     Default is {@link module:ol/render/replay~ALL}
   * @param {import("rbush").default|null} [declutterTree] Declutter tree.
   *     When set to null, no decluttering is done, even when the executor group has a `ZIndexContext`.
   */
  execute(e, t, i, s, r, o, a) {
    const l = Object.keys(this.executorsByZIndex_).map(Number);
    l.sort(on), o = o || Pi;
    let h, c, u, d, f, g;
    for (a && l.reverse(), h = 0, c = l.length; h < c; ++h) {
      const m = l[h].toString();
      for (f = this.executorsByZIndex_[m], u = 0, d = o.length; u < d; ++u) {
        const p = o[u];
        if (g = f[p], g !== void 0) {
          const _ = a === null ? void 0 : g.getZIndexContext(), y = _ ? _.getContext() : e, x = this.maxExtent_ && p !== "Image" && p !== "Text";
          if (x && (y.save(), this.clip(y, i)), g.execute(
            y,
            t,
            i,
            s,
            r,
            a
          ), x && y.restore(), _) {
            _.offset();
            const v = l[h];
            this.deferredZIndexContexts_[v] || (this.deferredZIndexContexts_[v] = []), this.deferredZIndexContexts_[v].push(_);
          }
        }
      }
    }
    this.renderedContext_ = e;
  }
  getDeferredZIndexContexts() {
    return this.deferredZIndexContexts_;
  }
  getRenderedContext() {
    return this.renderedContext_;
  }
  renderDeferred() {
    this.deferredZIndexContexts_.forEach((e) => {
      e.forEach((t) => {
        t.draw(this.renderedContext_), t.clear();
      });
    });
  }
}
const jr = {};
function Tv(n) {
  if (jr[n] !== void 0)
    return jr[n];
  const e = n * 2 + 1, t = n * n, i = new Array(t + 1);
  for (let r = 0; r <= n; ++r)
    for (let o = 0; o <= n; ++o) {
      const a = r * r + o * o;
      if (a > t)
        break;
      let l = i[a];
      l || (l = [], i[a] = l), l.push(((n + r) * e + (n + o)) * 4 + 3), r > 0 && l.push(((n - r) * e + (n + o)) * 4 + 3), o > 0 && (l.push(((n + r) * e + (n - o)) * 4 + 3), r > 0 && l.push(((n - r) * e + (n - o)) * 4 + 3));
    }
  const s = [];
  for (let r = 0, o = i.length; r < o; ++r)
    i[r] && s.push(...i[r]);
  return jr[n] = s, s;
}
class Sv extends Vc {
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../../extent.js").Extent} extent Extent.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {number} viewRotation View rotation.
   * @param {number} [squaredTolerance] Optional squared tolerance for simplification.
   * @param {import("../../proj.js").TransformFunction} [userTransform] Transform from user to view projection.
   */
  constructor(e, t, i, s, r, o, a) {
    super(), this.context_ = e, this.pixelRatio_ = t, this.extent_ = i, this.transform_ = s, this.transformRotation_ = s ? Go(Math.atan2(s[1], s[0]), 10) : 0, this.viewRotation_ = r, this.squaredTolerance_ = o, this.userTransform_ = a, this.contextFillState_ = null, this.contextStrokeState_ = null, this.contextTextState_ = null, this.fillState_ = null, this.strokeState_ = null, this.image_ = null, this.imageAnchorX_ = 0, this.imageAnchorY_ = 0, this.imageHeight_ = 0, this.imageOpacity_ = 0, this.imageOriginX_ = 0, this.imageOriginY_ = 0, this.imageRotateWithView_ = !1, this.imageRotation_ = 0, this.imageScale_ = [0, 0], this.imageWidth_ = 0, this.text_ = "", this.textOffsetX_ = 0, this.textOffsetY_ = 0, this.textRotateWithView_ = !1, this.textRotation_ = 0, this.textScale_ = [0, 0], this.textFillState_ = null, this.textStrokeState_ = null, this.textState_ = null, this.pixelCoordinates_ = [], this.tmpLocalTransform_ = at();
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @private
   */
  drawImages_(e, t, i, s) {
    if (!this.image_)
      return;
    const r = tn(
      e,
      t,
      i,
      s,
      this.transform_,
      this.pixelCoordinates_
    ), o = this.context_, a = this.tmpLocalTransform_, l = o.globalAlpha;
    this.imageOpacity_ != 1 && (o.globalAlpha = l * this.imageOpacity_);
    let h = this.imageRotation_;
    this.transformRotation_ === 0 && (h -= this.viewRotation_), this.imageRotateWithView_ && (h += this.viewRotation_);
    for (let c = 0, u = r.length; c < u; c += 2) {
      const d = r[c] - this.imageAnchorX_, f = r[c + 1] - this.imageAnchorY_;
      if (h !== 0 || this.imageScale_[0] != 1 || this.imageScale_[1] != 1) {
        const g = d + this.imageAnchorX_, m = f + this.imageAnchorY_;
        Dt(
          a,
          g,
          m,
          1,
          1,
          h,
          -g,
          -m
        ), o.save(), o.transform.apply(o, a), o.translate(g, m), o.scale(this.imageScale_[0], this.imageScale_[1]), o.drawImage(
          this.image_,
          this.imageOriginX_,
          this.imageOriginY_,
          this.imageWidth_,
          this.imageHeight_,
          -this.imageAnchorX_,
          -this.imageAnchorY_,
          this.imageWidth_,
          this.imageHeight_
        ), o.restore();
      } else
        o.drawImage(
          this.image_,
          this.imageOriginX_,
          this.imageOriginY_,
          this.imageWidth_,
          this.imageHeight_,
          d,
          f,
          this.imageWidth_,
          this.imageHeight_
        );
    }
    this.imageOpacity_ != 1 && (o.globalAlpha = l);
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @private
   */
  drawText_(e, t, i, s) {
    if (!this.textState_ || this.text_ === "")
      return;
    this.textFillState_ && this.setContextFillState_(this.textFillState_), this.textStrokeState_ && this.setContextStrokeState_(this.textStrokeState_), this.setContextTextState_(this.textState_);
    const r = tn(
      e,
      t,
      i,
      s,
      this.transform_,
      this.pixelCoordinates_
    ), o = this.context_;
    let a = this.textRotation_;
    for (this.transformRotation_ === 0 && (a -= this.viewRotation_), this.textRotateWithView_ && (a += this.viewRotation_); t < i; t += s) {
      const l = r[t] + this.textOffsetX_, h = r[t + 1] + this.textOffsetY_;
      a !== 0 || this.textScale_[0] != 1 || this.textScale_[1] != 1 ? (o.save(), o.translate(l - this.textOffsetX_, h - this.textOffsetY_), o.rotate(a), o.translate(this.textOffsetX_, this.textOffsetY_), o.scale(this.textScale_[0], this.textScale_[1]), this.textStrokeState_ && o.strokeText(this.text_, 0, 0), this.textFillState_ && o.fillText(this.text_, 0, 0), o.restore()) : (this.textStrokeState_ && o.strokeText(this.text_, l, h), this.textFillState_ && o.fillText(this.text_, l, h));
    }
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @param {boolean} close Close.
   * @private
   * @return {number} end End.
   */
  moveToLineTo_(e, t, i, s, r) {
    const o = this.context_, a = tn(
      e,
      t,
      i,
      s,
      this.transform_,
      this.pixelCoordinates_
    );
    o.moveTo(a[0], a[1]);
    let l = a.length;
    r && (l -= 2);
    for (let h = 2; h < l; h += 2)
      o.lineTo(a[h], a[h + 1]);
    return r && o.closePath(), i;
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {Array<number>} ends Ends.
   * @param {number} stride Stride.
   * @private
   * @return {number} End.
   */
  drawRings_(e, t, i, s) {
    for (let r = 0, o = i.length; r < o; ++r)
      t = this.moveToLineTo_(
        e,
        t,
        i[r],
        s,
        !0
      );
    return t;
  }
  /**
   * Render a circle geometry into the canvas.  Rendering is immediate and uses
   * the current fill and stroke styles.
   *
   * @param {import("../../geom/Circle.js").default} geometry Circle geometry.
   * @api
   */
  drawCircle(e) {
    if (this.squaredTolerance_ && (e = /** @type {import("../../geom/Circle.js").default} */
    e.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    )), !!Be(this.extent_, e.getExtent())) {
      if (this.fillState_ || this.strokeState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const t = $0(
          e,
          this.transform_,
          this.pixelCoordinates_
        ), i = t[2] - t[0], s = t[3] - t[1], r = Math.sqrt(i * i + s * s), o = this.context_;
        o.beginPath(), o.arc(
          t[0],
          t[1],
          r,
          0,
          2 * Math.PI
        ), this.fillState_ && o.fill(), this.strokeState_ && o.stroke();
      }
      this.text_ !== "" && this.drawText_(e.getCenter(), 0, 2, 2);
    }
  }
  /**
   * Set the rendering style.  Note that since this is an immediate rendering API,
   * any `zIndex` on the provided style will be ignored.
   *
   * @param {import("../../style/Style.js").default} style The rendering style.
   * @api
   */
  setStyle(e) {
    this.setFillStrokeStyle(e.getFill(), e.getStroke()), this.setImageStyle(e.getImage()), this.setTextStyle(e.getText());
  }
  /**
   * @param {import("../../transform.js").Transform} transform Transform.
   */
  setTransform(e) {
    this.transform_ = e;
  }
  /**
   * Render a geometry into the canvas.  Call
   * {@link module:ol/render/canvas/Immediate~CanvasImmediateRenderer#setStyle renderer.setStyle()} first to set the rendering style.
   *
   * @param {import("../../geom/Geometry.js").default|import("../Feature.js").default} geometry The geometry to render.
   * @api
   */
  drawGeometry(e) {
    switch (e.getType()) {
      case "Point":
        this.drawPoint(
          /** @type {import("../../geom/Point.js").default} */
          e
        );
        break;
      case "LineString":
        this.drawLineString(
          /** @type {import("../../geom/LineString.js").default} */
          e
        );
        break;
      case "Polygon":
        this.drawPolygon(
          /** @type {import("../../geom/Polygon.js").default} */
          e
        );
        break;
      case "MultiPoint":
        this.drawMultiPoint(
          /** @type {import("../../geom/MultiPoint.js").default} */
          e
        );
        break;
      case "MultiLineString":
        this.drawMultiLineString(
          /** @type {import("../../geom/MultiLineString.js").default} */
          e
        );
        break;
      case "MultiPolygon":
        this.drawMultiPolygon(
          /** @type {import("../../geom/MultiPolygon.js").default} */
          e
        );
        break;
      case "GeometryCollection":
        this.drawGeometryCollection(
          /** @type {import("../../geom/GeometryCollection.js").default} */
          e
        );
        break;
      case "Circle":
        this.drawCircle(
          /** @type {import("../../geom/Circle.js").default} */
          e
        );
        break;
    }
  }
  /**
   * Render a feature into the canvas.  Note that any `zIndex` on the provided
   * style will be ignored - features are rendered immediately in the order that
   * this method is called.  If you need `zIndex` support, you should be using an
   * {@link module:ol/layer/Vector~VectorLayer} instead.
   *
   * @param {import("../../Feature.js").default} feature Feature.
   * @param {import("../../style/Style.js").default} style Style.
   * @api
   */
  drawFeature(e, t) {
    const i = t.getGeometryFunction()(e);
    i && (this.setStyle(t), this.drawGeometry(i));
  }
  /**
   * Render a GeometryCollection to the canvas.  Rendering is immediate and
   * uses the current styles appropriate for each geometry in the collection.
   *
   * @param {import("../../geom/GeometryCollection.js").default} geometry Geometry collection.
   */
  drawGeometryCollection(e) {
    const t = e.getGeometriesArray();
    for (let i = 0, s = t.length; i < s; ++i)
      this.drawGeometry(t[i]);
  }
  /**
   * Render a Point geometry into the canvas.  Rendering is immediate and uses
   * the current style.
   *
   * @param {import("../../geom/Point.js").default|import("../Feature.js").default} geometry Point geometry.
   */
  drawPoint(e) {
    this.squaredTolerance_ && (e = /** @type {import("../../geom/Point.js").default} */
    e.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    ));
    const t = e.getFlatCoordinates(), i = e.getStride();
    this.image_ && this.drawImages_(t, 0, t.length, i), this.text_ !== "" && this.drawText_(t, 0, t.length, i);
  }
  /**
   * Render a MultiPoint geometry  into the canvas.  Rendering is immediate and
   * uses the current style.
   *
   * @param {import("../../geom/MultiPoint.js").default|import("../Feature.js").default} geometry MultiPoint geometry.
   */
  drawMultiPoint(e) {
    this.squaredTolerance_ && (e = /** @type {import("../../geom/MultiPoint.js").default} */
    e.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    ));
    const t = e.getFlatCoordinates(), i = e.getStride();
    this.image_ && this.drawImages_(t, 0, t.length, i), this.text_ !== "" && this.drawText_(t, 0, t.length, i);
  }
  /**
   * Render a LineString into the canvas.  Rendering is immediate and uses
   * the current style.
   *
   * @param {import("../../geom/LineString.js").default|import("../Feature.js").default} geometry LineString geometry.
   */
  drawLineString(e) {
    if (this.squaredTolerance_ && (e = /** @type {import("../../geom/LineString.js").default} */
    e.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    )), !!Be(this.extent_, e.getExtent())) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
        const t = this.context_, i = e.getFlatCoordinates();
        t.beginPath(), this.moveToLineTo_(
          i,
          0,
          i.length,
          e.getStride(),
          !1
        ), t.stroke();
      }
      if (this.text_ !== "") {
        const t = e.getFlatMidpoint();
        this.drawText_(t, 0, 2, 2);
      }
    }
  }
  /**
   * Render a MultiLineString geometry into the canvas.  Rendering is immediate
   * and uses the current style.
   *
   * @param {import("../../geom/MultiLineString.js").default|import("../Feature.js").default} geometry MultiLineString geometry.
   */
  drawMultiLineString(e) {
    this.squaredTolerance_ && (e = /** @type {import("../../geom/MultiLineString.js").default} */
    e.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    ));
    const t = e.getExtent();
    if (Be(this.extent_, t)) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
        const i = this.context_, s = e.getFlatCoordinates();
        let r = 0;
        const o = (
          /** @type {Array<number>} */
          e.getEnds()
        ), a = e.getStride();
        i.beginPath();
        for (let l = 0, h = o.length; l < h; ++l)
          r = this.moveToLineTo_(
            s,
            r,
            o[l],
            a,
            !1
          );
        i.stroke();
      }
      if (this.text_ !== "") {
        const i = e.getFlatMidpoints();
        this.drawText_(i, 0, i.length, 2);
      }
    }
  }
  /**
   * Render a Polygon geometry into the canvas.  Rendering is immediate and uses
   * the current style.
   *
   * @param {import("../../geom/Polygon.js").default|import("../Feature.js").default} geometry Polygon geometry.
   */
  drawPolygon(e) {
    if (this.squaredTolerance_ && (e = /** @type {import("../../geom/Polygon.js").default} */
    e.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    )), !!Be(this.extent_, e.getExtent())) {
      if (this.strokeState_ || this.fillState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const t = this.context_;
        t.beginPath(), this.drawRings_(
          e.getOrientedFlatCoordinates(),
          0,
          /** @type {Array<number>} */
          e.getEnds(),
          e.getStride()
        ), this.fillState_ && t.fill(), this.strokeState_ && t.stroke();
      }
      if (this.text_ !== "") {
        const t = e.getFlatInteriorPoint();
        this.drawText_(t, 0, 2, 2);
      }
    }
  }
  /**
   * Render MultiPolygon geometry into the canvas.  Rendering is immediate and
   * uses the current style.
   * @param {import("../../geom/MultiPolygon.js").default} geometry MultiPolygon geometry.
   */
  drawMultiPolygon(e) {
    if (this.squaredTolerance_ && (e = /** @type {import("../../geom/MultiPolygon.js").default} */
    e.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    )), !!Be(this.extent_, e.getExtent())) {
      if (this.strokeState_ || this.fillState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const t = this.context_, i = e.getOrientedFlatCoordinates();
        let s = 0;
        const r = e.getEndss(), o = e.getStride();
        t.beginPath();
        for (let a = 0, l = r.length; a < l; ++a) {
          const h = r[a];
          s = this.drawRings_(i, s, h, o);
        }
        this.fillState_ && t.fill(), this.strokeState_ && t.stroke();
      }
      if (this.text_ !== "") {
        const t = e.getFlatInteriorPoints();
        this.drawText_(t, 0, t.length, 2);
      }
    }
  }
  /**
   * @param {import("../canvas.js").FillState} fillState Fill state.
   * @private
   */
  setContextFillState_(e) {
    const t = this.context_, i = this.contextFillState_;
    i ? i.fillStyle != e.fillStyle && (i.fillStyle = e.fillStyle, t.fillStyle = e.fillStyle) : (t.fillStyle = e.fillStyle, this.contextFillState_ = {
      fillStyle: e.fillStyle
    });
  }
  /**
   * @param {import("../canvas.js").StrokeState} strokeState Stroke state.
   * @private
   */
  setContextStrokeState_(e) {
    const t = this.context_, i = this.contextStrokeState_;
    i ? (i.lineCap != e.lineCap && (i.lineCap = e.lineCap, t.lineCap = e.lineCap), hn(i.lineDash, e.lineDash) || t.setLineDash(
      i.lineDash = e.lineDash
    ), i.lineDashOffset != e.lineDashOffset && (i.lineDashOffset = e.lineDashOffset, t.lineDashOffset = e.lineDashOffset), i.lineJoin != e.lineJoin && (i.lineJoin = e.lineJoin, t.lineJoin = e.lineJoin), i.lineWidth != e.lineWidth && (i.lineWidth = e.lineWidth, t.lineWidth = e.lineWidth), i.miterLimit != e.miterLimit && (i.miterLimit = e.miterLimit, t.miterLimit = e.miterLimit), i.strokeStyle != e.strokeStyle && (i.strokeStyle = e.strokeStyle, t.strokeStyle = e.strokeStyle)) : (t.lineCap = e.lineCap, t.setLineDash(e.lineDash), t.lineDashOffset = e.lineDashOffset, t.lineJoin = e.lineJoin, t.lineWidth = e.lineWidth, t.miterLimit = e.miterLimit, t.strokeStyle = e.strokeStyle, this.contextStrokeState_ = {
      lineCap: e.lineCap,
      lineDash: e.lineDash,
      lineDashOffset: e.lineDashOffset,
      lineJoin: e.lineJoin,
      lineWidth: e.lineWidth,
      miterLimit: e.miterLimit,
      strokeStyle: e.strokeStyle
    });
  }
  /**
   * @param {import("../canvas.js").TextState} textState Text state.
   * @private
   */
  setContextTextState_(e) {
    const t = this.context_, i = this.contextTextState_, s = e.textAlign ? e.textAlign : ji;
    i ? (i.font != e.font && (i.font = e.font, t.font = e.font), i.textAlign != s && (i.textAlign = s, t.textAlign = s), i.textBaseline != e.textBaseline && (i.textBaseline = e.textBaseline, t.textBaseline = e.textBaseline)) : (t.font = e.font, t.textAlign = s, t.textBaseline = e.textBaseline, this.contextTextState_ = {
      font: e.font,
      textAlign: s,
      textBaseline: e.textBaseline
    });
  }
  /**
   * Set the fill and stroke style for subsequent draw operations.  To clear
   * either fill or stroke styles, pass null for the appropriate parameter.
   *
   * @param {import("../../style/Fill.js").default} fillStyle Fill style.
   * @param {import("../../style/Stroke.js").default} strokeStyle Stroke style.
   */
  setFillStrokeStyle(e, t) {
    if (!e)
      this.fillState_ = null;
    else {
      const i = e.getColor();
      this.fillState_ = {
        fillStyle: gt(
          i || Ge
        )
      };
    }
    if (!t)
      this.strokeState_ = null;
    else {
      const i = t.getColor(), s = t.getLineCap(), r = t.getLineDash(), o = t.getLineDashOffset(), a = t.getLineJoin(), l = t.getWidth(), h = t.getMiterLimit(), c = r || bt;
      this.strokeState_ = {
        lineCap: s !== void 0 ? s : ai,
        lineDash: this.pixelRatio_ === 1 ? c : c.map((u) => u * this.pixelRatio_),
        lineDashOffset: (o || Lt) * this.pixelRatio_,
        lineJoin: a !== void 0 ? a : li,
        lineWidth: (l !== void 0 ? l : Hi) * this.pixelRatio_,
        miterLimit: h !== void 0 ? h : Vi,
        strokeStyle: gt(
          i || Zi
        )
      };
    }
  }
  /**
   * Set the image style for subsequent draw operations.  Pass null to remove
   * the image style.
   *
   * @param {import("../../style/Image.js").default} imageStyle Image style.
   */
  setImageStyle(e) {
    let t;
    if (!e || !(t = e.getSize())) {
      this.image_ = null;
      return;
    }
    const i = e.getPixelRatio(this.pixelRatio_), s = e.getAnchor(), r = e.getOrigin();
    this.image_ = e.getImage(this.pixelRatio_), this.imageAnchorX_ = s[0] * i, this.imageAnchorY_ = s[1] * i, this.imageHeight_ = t[1] * i, this.imageOpacity_ = e.getOpacity(), this.imageOriginX_ = r[0], this.imageOriginY_ = r[1], this.imageRotateWithView_ = e.getRotateWithView(), this.imageRotation_ = e.getRotation();
    const o = e.getScaleArray();
    this.imageScale_ = [
      o[0] * this.pixelRatio_ / i,
      o[1] * this.pixelRatio_ / i
    ], this.imageWidth_ = t[0] * i;
  }
  /**
   * Set the text style for subsequent draw operations.  Pass null to
   * remove the text style.
   *
   * @param {import("../../style/Text.js").default} textStyle Text style.
   */
  setTextStyle(e) {
    if (!e)
      this.text_ = "";
    else {
      const t = e.getFill();
      if (!t)
        this.textFillState_ = null;
      else {
        const f = t.getColor();
        this.textFillState_ = {
          fillStyle: gt(
            f || Ge
          )
        };
      }
      const i = e.getStroke();
      if (!i)
        this.textStrokeState_ = null;
      else {
        const f = i.getColor(), g = i.getLineCap(), m = i.getLineDash(), p = i.getLineDashOffset(), _ = i.getLineJoin(), y = i.getWidth(), x = i.getMiterLimit();
        this.textStrokeState_ = {
          lineCap: g !== void 0 ? g : ai,
          lineDash: m || bt,
          lineDashOffset: p || Lt,
          lineJoin: _ !== void 0 ? _ : li,
          lineWidth: y !== void 0 ? y : Hi,
          miterLimit: x !== void 0 ? x : Vi,
          strokeStyle: gt(
            f || Zi
          )
        };
      }
      const s = e.getFont(), r = e.getOffsetX(), o = e.getOffsetY(), a = e.getRotateWithView(), l = e.getRotation(), h = e.getScaleArray(), c = e.getText(), u = e.getTextAlign(), d = e.getTextBaseline();
      this.textState_ = {
        font: s !== void 0 ? s : Rc,
        textAlign: u !== void 0 ? u : ji,
        textBaseline: d !== void 0 ? d : Fs
      }, this.text_ = c !== void 0 ? Array.isArray(c) ? c.reduce((f, g, m) => f += m % 2 ? " " : g, "") : c : "", this.textOffsetX_ = r !== void 0 ? this.pixelRatio_ * r : 0, this.textOffsetY_ = o !== void 0 ? this.pixelRatio_ * o : 0, this.textRotateWithView_ = a !== void 0 ? a : !1, this.textRotation_ = l !== void 0 ? l : 0, this.textScale_ = [
        this.pixelRatio_ * h[0],
        this.pixelRatio_ * h[1]
      ];
    }
  }
}
const jc = Sv, ut = 0.5;
function Rv(n, e, t, i, s, r, o, a, l) {
  const h = l ? Zo(s) : s, c = n[0] * ut, u = n[1] * ut, d = Ie(c, u);
  d.imageSmoothingEnabled = !1;
  const f = d.canvas, g = new jc(
    d,
    ut,
    s,
    null,
    o,
    a,
    l ? rr(k0(), l) : null
  ), m = t.length, p = Math.floor((256 * 256 * 256 - 1) / m), _ = {};
  for (let x = 1; x <= m; ++x) {
    const v = t[x - 1], E = v.getStyleFunction() || i;
    if (!E)
      continue;
    let w = E(v, r);
    if (!w)
      continue;
    Array.isArray(w) || (w = [w]);
    const C = (x * p).toString(16).padStart(7, "#00000");
    for (let R = 0, z = w.length; R < z; ++R) {
      const F = w[R], B = F.getGeometryFunction()(v);
      if (!B || !Be(h, B.getExtent()))
        continue;
      const V = F.clone(), X = V.getFill();
      X && X.setColor(C);
      const K = V.getStroke();
      K && (K.setColor(C), K.setLineDash(null)), V.setText(void 0);
      const M = F.getImage();
      if (M) {
        const L = M.getImageSize();
        if (!L)
          continue;
        const D = Ie(
          L[0],
          L[1],
          void 0,
          { alpha: !1 }
        ), O = D.canvas;
        D.fillStyle = C, D.fillRect(0, 0, O.width, O.height), V.setImage(
          new ss({
            img: O,
            anchor: M.getAnchor(),
            anchorXUnits: "pixels",
            anchorYUnits: "pixels",
            offset: M.getOrigin(),
            opacity: 1,
            size: M.getSize(),
            scale: M.getScale(),
            rotation: M.getRotation(),
            rotateWithView: M.getRotateWithView()
          })
        );
      }
      const G = V.getZIndex() || 0;
      let b = _[G];
      b || (b = {}, _[G] = b, b.Polygon = [], b.Circle = [], b.LineString = [], b.Point = []);
      const Y = B.getType();
      if (Y === "GeometryCollection") {
        const L = (
          /** @type {import("../../geom/GeometryCollection.js").default} */
          B.getGeometriesArrayRecursive()
        );
        for (let D = 0, O = L.length; D < O; ++D) {
          const $ = L[D];
          b[$.getType().replace("Multi", "")].push(
            $,
            V
          );
        }
      } else
        b[Y.replace("Multi", "")].push(B, V);
    }
  }
  const y = Object.keys(_).map(Number).sort(on);
  for (let x = 0, v = y.length; x < v; ++x) {
    const E = _[y[x]];
    for (const w in E) {
      const I = E[w];
      for (let C = 0, R = I.length; C < R; C += 2) {
        g.setStyle(I[C + 1]);
        for (let z = 0, F = e.length; z < F; ++z)
          g.setTransform(e[z]), g.drawGeometry(I[C]);
      }
    }
  }
  return d.getImageData(0, 0, f.width, f.height);
}
function bv(n, e, t) {
  const i = [];
  if (t) {
    const s = Math.floor(Math.round(n[0]) * ut), r = Math.floor(Math.round(n[1]) * ut), o = (ve(s, 0, t.width - 1) + ve(r, 0, t.height - 1) * t.width) * 4, a = t.data[o], l = t.data[o + 1], c = t.data[o + 2] + 256 * (l + 256 * a), u = Math.floor((256 * 256 * 256 - 1) / e.length);
    c && c % u === 0 && i.push(e[c / u - 1]);
  }
  return i;
}
const Lv = 0.5, Hc = {
  Point: Gv,
  LineString: kv,
  Polygon: zv,
  MultiPoint: Bv,
  MultiLineString: Fv,
  MultiPolygon: Nv,
  GeometryCollection: Ov,
  Circle: Dv
};
function Mv(n, e) {
  return parseInt(oe(n), 10) - parseInt(oe(e), 10);
}
function Ao(n, e) {
  const t = Qc(n, e);
  return t * t;
}
function Qc(n, e) {
  return Lv * n / e;
}
function Dv(n, e, t, i) {
  const s = t.getFill(), r = t.getStroke();
  if (s || r) {
    const a = n.getBuilder(t.getZIndex(), "Circle");
    a.setFillStrokeStyle(s, r), a.drawCircle(e, i);
  }
  const o = t.getText();
  if (o && o.getText()) {
    const a = n.getBuilder(t.getZIndex(), "Text");
    a.setTextStyle(o), a.drawText(e, i);
  }
}
function ih(n, e, t, i, s, r, o, a) {
  const l = [], h = t.getImage();
  if (h) {
    let d = !0;
    const f = h.getImageState();
    f == Q.LOADED || f == Q.ERROR ? d = !1 : f == Q.IDLE && h.load(), d && l.push(h.ready());
  }
  const c = t.getFill();
  c && c.loading() && l.push(c.ready());
  const u = l.length > 0;
  return u && Promise.all(l).then(() => s(null)), Pv(
    n,
    e,
    t,
    i,
    r,
    o,
    a
  ), u;
}
function Pv(n, e, t, i, s, r, o) {
  const a = t.getGeometryFunction()(e);
  if (!a)
    return;
  const l = a.simplifyTransformed(
    i,
    s
  );
  if (t.getRenderer())
    qc(n, l, t, e, o);
  else {
    const c = Hc[l.getType()];
    c(
      n,
      l,
      t,
      e,
      o,
      r
    );
  }
}
function qc(n, e, t, i, s) {
  if (e.getType() == "GeometryCollection") {
    const o = (
      /** @type {import("../geom/GeometryCollection.js").default} */
      e.getGeometries()
    );
    for (let a = 0, l = o.length; a < l; ++a)
      qc(n, o[a], t, i, s);
    return;
  }
  n.getBuilder(t.getZIndex(), "Default").drawCustom(
    /** @type {import("../geom/SimpleGeometry.js").default} */
    e,
    i,
    t.getRenderer(),
    t.getHitDetectionRenderer(),
    s
  );
}
function Ov(n, e, t, i, s, r) {
  const o = e.getGeometriesArray();
  let a, l;
  for (a = 0, l = o.length; a < l; ++a) {
    const h = Hc[o[a].getType()];
    h(
      n,
      o[a],
      t,
      i,
      s,
      r
    );
  }
}
function kv(n, e, t, i, s) {
  const r = t.getStroke();
  if (r) {
    const a = n.getBuilder(
      t.getZIndex(),
      "LineString"
    );
    a.setFillStrokeStyle(null, r), a.drawLineString(e, i, s);
  }
  const o = t.getText();
  if (o && o.getText()) {
    const a = n.getBuilder(t.getZIndex(), "Text");
    a.setTextStyle(o), a.drawText(e, i, s);
  }
}
function Fv(n, e, t, i, s) {
  const r = t.getStroke();
  if (r) {
    const a = n.getBuilder(
      t.getZIndex(),
      "LineString"
    );
    a.setFillStrokeStyle(null, r), a.drawMultiLineString(e, i, s);
  }
  const o = t.getText();
  if (o && o.getText()) {
    const a = n.getBuilder(t.getZIndex(), "Text");
    a.setTextStyle(o), a.drawText(e, i, s);
  }
}
function Nv(n, e, t, i, s) {
  const r = t.getFill(), o = t.getStroke();
  if (o || r) {
    const l = n.getBuilder(t.getZIndex(), "Polygon");
    l.setFillStrokeStyle(r, o), l.drawMultiPolygon(e, i, s);
  }
  const a = t.getText();
  if (a && a.getText()) {
    const l = n.getBuilder(t.getZIndex(), "Text");
    l.setTextStyle(a), l.drawText(e, i, s);
  }
}
function Gv(n, e, t, i, s, r) {
  const o = t.getImage(), a = t.getText(), l = a && a.getText(), h = r && o && l ? {} : void 0;
  if (o) {
    if (o.getImageState() != Q.LOADED)
      return;
    const c = n.getBuilder(t.getZIndex(), "Image");
    c.setImageStyle(o, h), c.drawPoint(e, i, s);
  }
  if (l) {
    const c = n.getBuilder(t.getZIndex(), "Text");
    c.setTextStyle(a, h), c.drawText(e, i, s);
  }
}
function Bv(n, e, t, i, s, r) {
  const o = t.getImage(), a = o && o.getOpacity() !== 0, l = t.getText(), h = l && l.getText(), c = r && a && h ? {} : void 0;
  if (a) {
    if (o.getImageState() != Q.LOADED)
      return;
    const u = n.getBuilder(t.getZIndex(), "Image");
    u.setImageStyle(o, c), u.drawMultiPoint(e, i, s);
  }
  if (h) {
    const u = n.getBuilder(t.getZIndex(), "Text");
    u.setTextStyle(l, c), u.drawText(e, i, s);
  }
}
function zv(n, e, t, i, s) {
  const r = t.getFill(), o = t.getStroke();
  if (r || o) {
    const l = n.getBuilder(t.getZIndex(), "Polygon");
    l.setFillStrokeStyle(r, o), l.drawPolygon(e, i, s);
  }
  const a = t.getText();
  if (a && a.getText()) {
    const l = n.getBuilder(t.getZIndex(), "Text");
    l.setTextStyle(a), l.drawText(e, i, s);
  }
}
class Wv extends pc {
  /**
   * @param {import("../../layer/BaseVector.js").default} vectorLayer Vector layer.
   */
  constructor(e) {
    super(e), this.boundHandleStyleImageChange_ = this.handleStyleImageChange_.bind(this), this.animatingOrInteracting_, this.hitDetectionImageData_ = null, this.renderedFeatures_ = null, this.renderedRevision_ = -1, this.renderedResolution_ = NaN, this.renderedExtent_ = $e(), this.wrappedRenderedExtent_ = $e(), this.renderedRotation_, this.renderedCenter_ = null, this.renderedProjection_ = null, this.renderedPixelRatio_ = 1, this.renderedRenderOrder_ = null, this.replayGroup_ = null, this.replayGroupChanged = !0, this.clipping = !0, this.compositionContext_ = null, this.opacity_ = 1;
  }
  /**
   * @param {ExecutorGroup} executorGroup Executor group.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {boolean} [declutterable] `true` to only render declutterable items,
   *     `false` to only render non-declutterable items, `undefined` to render all.
   */
  renderWorlds(e, t, i) {
    const s = t.extent, r = t.viewState, o = r.center, a = r.resolution, l = r.projection, h = r.rotation, c = l.getExtent(), u = this.getLayer().getSource(), d = this.getLayer().getDeclutter(), f = t.pixelRatio, g = t.viewHints, m = !(g[Re.ANIMATING] || g[Re.INTERACTING]), p = this.compositionContext_, _ = Math.round(t.size[0] * f), y = Math.round(t.size[1] * f), x = u.getWrapX() && l.canWrapX(), v = x ? he(c) : null, E = x ? Math.ceil((s[2] - c[2]) / v) + 1 : 1;
    let w = x ? Math.floor((s[0] - c[0]) / v) : 0;
    do {
      const I = this.getRenderTransform(
        o,
        a,
        h,
        f,
        _,
        y,
        w * v
      );
      e.execute(
        p,
        [p.canvas.width, p.canvas.height],
        I,
        h,
        m,
        i === void 0 ? Pi : i ? Zc : Av,
        i ? d && t.declutter[d] : void 0
      );
    } while (++w < E);
  }
  setupCompositionContext_() {
    if (this.opacity_ !== 1) {
      const e = Ie(
        this.context.canvas.width,
        this.context.canvas.height,
        Dl
      );
      this.compositionContext_ = e;
    } else
      this.compositionContext_ = this.context;
  }
  releaseCompositionContext_() {
    if (this.opacity_ !== 1) {
      const e = this.context.globalAlpha;
      this.context.globalAlpha = this.opacity_, this.context.drawImage(this.compositionContext_.canvas, 0, 0), this.context.globalAlpha = e, cr(this.compositionContext_), Dl.push(this.compositionContext_.canvas), this.compositionContext_ = null;
    }
  }
  /**
   * Render declutter items for this layer
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   */
  renderDeclutter(e) {
    this.getLayer().getDeclutter() && (this.setupCompositionContext_(), this.renderWorlds(this.replayGroup_, e, !0), this.releaseCompositionContext_());
  }
  /**
   * Render deferred instructions.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   */
  renderDeferredInternal(e) {
    this.replayGroup_.renderDeferred();
  }
  /**
   * Render the layer.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement|null} target Target that may be used to render content to.
   * @return {HTMLElement|null} The rendered element.
   */
  renderFrame(e, t) {
    const i = e.pixelRatio, s = e.layerStatesArray[e.layerIndex];
    Z0(this.pixelTransform, 1 / i, 1 / i), qo(this.inversePixelTransform, this.pixelTransform);
    const r = $h(this.pixelTransform);
    this.useContainer(t, r, this.getBackground(e));
    const o = this.context, a = o.canvas, l = this.replayGroup_;
    let h = l && !l.isEmpty();
    if (!h && !(this.getLayer().hasListener(Je.PRERENDER) || this.getLayer().hasListener(Je.POSTRENDER)))
      return null;
    const c = Math.round(e.size[0] * i), u = Math.round(e.size[1] * i);
    a.width != c || a.height != u ? (a.width = c, a.height = u, a.style.transform !== r && (a.style.transform = r)) : this.containerReused || o.clearRect(0, 0, c, u), this.preRender(o, e);
    const d = e.viewState;
    d.projection, this.opacity_ = s.opacity, this.setupCompositionContext_();
    let f = !1;
    if (h && s.extent && this.clipping) {
      const g = _n(s.extent);
      h = Be(g, e.extent), f = h && !jn(g, e.extent), f && this.clipUnrotated(this.compositionContext_, e, g);
    }
    return h && this.renderWorlds(
      l,
      e,
      this.getLayer().getDeclutter() ? !1 : void 0
    ), f && this.compositionContext_.restore(), this.releaseCompositionContext_(), this.postRender(o, e), this.renderedRotation_ !== d.rotation && (this.renderedRotation_ = d.rotation, this.hitDetectionImageData_ = null), this.container;
  }
  /**
   * Asynchronous layer level hit detection.
   * @param {import("../../pixel.js").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../../Feature").default>>} Promise
   * that resolves with an array of features.
   */
  getFeatures(e) {
    return new Promise((t) => {
      if (!this.hitDetectionImageData_ && !this.animatingOrInteracting_) {
        const i = [this.context.canvas.width, this.context.canvas.height];
        we(this.pixelTransform, i);
        const s = this.renderedCenter_, r = this.renderedResolution_, o = this.renderedRotation_, a = this.renderedProjection_, l = this.wrappedRenderedExtent_, h = this.getLayer(), c = [], u = i[0] * ut, d = i[1] * ut;
        c.push(
          this.getRenderTransform(
            s,
            r,
            o,
            ut,
            u,
            d,
            0
          ).slice()
        );
        const f = h.getSource(), g = a.getExtent();
        if (f.getWrapX() && a.canWrapX() && !jn(g, l)) {
          let m = l[0];
          const p = he(g);
          let _ = 0, y;
          for (; m < g[0]; )
            --_, y = p * _, c.push(
              this.getRenderTransform(
                s,
                r,
                o,
                ut,
                u,
                d,
                y
              ).slice()
            ), m += p;
          for (_ = 0, m = l[2]; m > g[2]; )
            ++_, y = p * _, c.push(
              this.getRenderTransform(
                s,
                r,
                o,
                ut,
                u,
                d,
                y
              ).slice()
            ), m -= p;
        }
        this.hitDetectionImageData_ = Rv(
          i,
          c,
          this.renderedFeatures_,
          h.getStyleFunction(),
          l,
          r,
          o,
          Ao(r, this.renderedPixelRatio_),
          null
        );
      }
      t(
        bv(e, this.renderedFeatures_, this.hitDetectionImageData_)
      );
    });
  }
  /**
   * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {import("../vector.js").FeatureCallback<T>} callback Feature callback.
   * @param {Array<import("../Map.js").HitMatch<T>>} matches The hit detected matches with tolerance.
   * @return {T|undefined} Callback result.
   * @template T
   */
  forEachFeatureAtCoordinate(e, t, i, s, r) {
    if (!this.replayGroup_)
      return;
    const o = t.viewState.resolution, a = t.viewState.rotation, l = this.getLayer(), h = {}, c = function(g, m, p) {
      const _ = oe(g), y = h[_];
      if (y) {
        if (y !== !0 && p < y.distanceSq) {
          if (p === 0)
            return h[_] = !0, r.splice(r.lastIndexOf(y), 1), s(g, l, m);
          y.geometry = m, y.distanceSq = p;
        }
      } else {
        if (p === 0)
          return h[_] = !0, s(g, l, m);
        r.push(
          h[_] = {
            feature: g,
            layer: l,
            geometry: m,
            distanceSq: p,
            callback: s
          }
        );
      }
    };
    let u;
    const d = [this.replayGroup_], f = this.getLayer().getDeclutter();
    return d.some((g) => u = g.forEachFeatureAtCoordinate(
      e,
      o,
      a,
      i,
      c,
      f && t.declutter[f] ? t.declutter[f].all().map((m) => m.value) : null
    )), u;
  }
  /**
   * Perform action necessary to get the layer rendered after new fonts have loaded
   */
  handleFontsChanged() {
    const e = this.getLayer();
    e.getVisible() && this.replayGroup_ && e.changed();
  }
  /**
   * Handle changes in image style state.
   * @param {import("../../events/Event.js").default} event Image style change event.
   * @private
   */
  handleStyleImageChange_(e) {
    this.renderIfReadyAndVisible();
  }
  /**
   * Determine whether render should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   */
  prepareFrame(e) {
    const t = this.getLayer(), i = t.getSource();
    if (!i)
      return !1;
    const s = e.viewHints[Re.ANIMATING], r = e.viewHints[Re.INTERACTING], o = t.getUpdateWhileAnimating(), a = t.getUpdateWhileInteracting();
    if (this.ready && !o && s || !a && r)
      return this.animatingOrInteracting_ = !0, !0;
    this.animatingOrInteracting_ = !1;
    const l = e.extent, h = e.viewState, c = h.projection, u = h.resolution, d = e.pixelRatio, f = t.getRevision(), g = t.getRenderBuffer();
    let m = t.getRenderOrder();
    m === void 0 && (m = Mv);
    const p = h.center.slice(), _ = zo(
      l,
      g * u
    ), y = _.slice(), x = [_.slice()], v = c.getExtent();
    if (i.getWrapX() && c.canWrapX() && !jn(v, e.extent)) {
      const X = he(v), K = Math.max(he(_) / 2, X);
      _[0] = v[0] - K, _[2] = v[2] + K, Hh(p, c);
      const M = jh(x[0], c);
      M[0] < v[0] && M[2] < v[2] ? x.push([
        M[0] + X,
        M[1],
        M[2] + X,
        M[3]
      ]) : M[0] > v[0] && M[2] > v[2] && x.push([
        M[0] - X,
        M[1],
        M[2] - X,
        M[3]
      ]);
    }
    if (this.ready && this.renderedResolution_ == u && this.renderedRevision_ == f && this.renderedRenderOrder_ == m && jn(this.wrappedRenderedExtent_, _))
      return hn(this.renderedExtent_, y) || (this.hitDetectionImageData_ = null, this.renderedExtent_ = y), this.renderedCenter_ = p, this.replayGroupChanged = !1, !0;
    this.replayGroup_ = null;
    const E = new Ev(
      Qc(u, d),
      _,
      u,
      d
    );
    let w;
    for (let X = 0, K = x.length; X < K; ++X)
      i.loadFeatures(x[X], u, c);
    const I = Ao(u, d);
    let C = !0;
    const R = (
      /**
       * @param {import("../../Feature.js").default} feature Feature.
       * @param {number} index Index.
       */
      (X, K) => {
        let M;
        const G = X.getStyleFunction() || t.getStyleFunction();
        if (G && (M = G(X, u)), M) {
          const b = this.renderFeature(
            X,
            I,
            M,
            E,
            w,
            this.getLayer().getDeclutter(),
            K
          );
          C = C && !b;
        }
      }
    ), z = Zo(_), F = i.getFeaturesInExtent(z);
    m && F.sort(m);
    for (let X = 0, K = F.length; X < K; ++X)
      R(F[X], X);
    this.renderedFeatures_ = F, this.ready = C;
    const B = E.finish(), V = new Iv(
      _,
      u,
      d,
      i.getOverlaps(),
      B,
      t.getRenderBuffer(),
      !!e.declutter
    );
    return this.renderedResolution_ = u, this.renderedRevision_ = f, this.renderedRenderOrder_ = m, this.renderedExtent_ = y, this.wrappedRenderedExtent_ = _, this.renderedCenter_ = p, this.renderedProjection_ = c, this.renderedPixelRatio_ = d, this.replayGroup_ = V, this.hitDetectionImageData_ = null, this.replayGroupChanged = !0, !0;
  }
  /**
   * @param {import("../../Feature.js").default} feature Feature.
   * @param {number} squaredTolerance Squared render tolerance.
   * @param {import("../../style/Style.js").default|Array<import("../../style/Style.js").default>} styles The style or array of styles.
   * @param {import("../../render/canvas/BuilderGroup.js").default} builderGroup Builder group.
   * @param {import("../../proj.js").TransformFunction} [transform] Transform from user to view projection.
   * @param {boolean} [declutter] Enable decluttering.
   * @param {number} [index] Render order index.
   * @return {boolean} `true` if an image is loading.
   */
  renderFeature(e, t, i, s, r, o, a) {
    if (!i)
      return !1;
    let l = !1;
    if (Array.isArray(i))
      for (let h = 0, c = i.length; h < c; ++h)
        l = ih(
          s,
          e,
          i[h],
          t,
          this.boundHandleStyleImageChange_,
          r,
          o,
          a
        ) || l;
    else
      l = ih(
        s,
        e,
        i,
        t,
        this.boundHandleStyleImageChange_,
        r,
        o,
        a
      );
    return l;
  }
}
class Xv extends Gc {
  /**
   * @param {import("./BaseVector.js").Options<VectorSourceType>} [options] Options.
   */
  constructor(e) {
    super(e);
  }
  createRenderer() {
    return new Wv(this);
  }
}
class sh {
  /**
   * @param {number} [maxEntries] Max entries.
   */
  constructor(e) {
    this.rbush_ = new Tc(e), this.items_ = {};
  }
  /**
   * Insert a value into the RBush.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {T} value Value.
   */
  insert(e, t) {
    const i = {
      minX: e[0],
      minY: e[1],
      maxX: e[2],
      maxY: e[3],
      value: t
    };
    this.rbush_.insert(i), this.items_[oe(t)] = i;
  }
  /**
   * Bulk-insert values into the RBush.
   * @param {Array<import("../extent.js").Extent>} extents Extents.
   * @param {Array<T>} values Values.
   */
  load(e, t) {
    const i = new Array(t.length);
    for (let s = 0, r = t.length; s < r; s++) {
      const o = e[s], a = t[s], l = {
        minX: o[0],
        minY: o[1],
        maxX: o[2],
        maxY: o[3],
        value: a
      };
      i[s] = l, this.items_[oe(a)] = l;
    }
    this.rbush_.load(i);
  }
  /**
   * Remove a value from the RBush.
   * @param {T} value Value.
   * @return {boolean} Removed.
   */
  remove(e) {
    const t = oe(e), i = this.items_[t];
    return delete this.items_[t], this.rbush_.remove(i) !== null;
  }
  /**
   * Update the extent of a value in the RBush.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {T} value Value.
   */
  update(e, t) {
    const i = this.items_[oe(t)], s = [i.minX, i.minY, i.maxX, i.maxY];
    Wi(s, e) || (this.remove(t), this.insert(e, t));
  }
  /**
   * Return all values in the RBush.
   * @return {Array<T>} All.
   */
  getAll() {
    return this.rbush_.all().map(function(t) {
      return t.value;
    });
  }
  /**
   * Return all values in the given extent.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {Array<T>} All in extent.
   */
  getInExtent(e) {
    const t = {
      minX: e[0],
      minY: e[1],
      maxX: e[2],
      maxY: e[3]
    };
    return this.rbush_.search(t).map(function(s) {
      return s.value;
    });
  }
  /**
   * Calls a callback function with each value in the tree.
   * If the callback returns a truthy value, this value is returned without
   * checking the rest of the tree.
   * @param {function(T): *} callback Callback.
   * @return {*} Callback return value.
   */
  forEach(e) {
    return this.forEach_(this.getAll(), e);
  }
  /**
   * Calls a callback function with each value in the provided extent.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {function(T): *} callback Callback.
   * @return {*} Callback return value.
   */
  forEachInExtent(e, t) {
    return this.forEach_(this.getInExtent(e), t);
  }
  /**
   * @param {Array<T>} values Values.
   * @param {function(T): *} callback Callback.
   * @private
   * @return {*} Callback return value.
   */
  forEach_(e, t) {
    let i;
    for (let s = 0, r = e.length; s < r; s++)
      if (i = t(e[s]), i)
        return i;
    return i;
  }
  /**
   * @return {boolean} Is empty.
   */
  isEmpty() {
    return ri(this.items_);
  }
  /**
   * Remove all values from the RBush.
   */
  clear() {
    this.rbush_.clear(), this.items_ = {};
  }
  /**
   * @param {import("../extent.js").Extent} [extent] Extent.
   * @return {import("../extent.js").Extent} Extent.
   */
  getExtent(e) {
    const t = this.rbush_.toJSON();
    return an(t.minX, t.minY, t.maxX, t.maxY, e);
  }
  /**
   * @param {RBush} rbush R-Tree.
   */
  concat(e) {
    this.rbush_.load(e.rbush_.all());
    for (const t in e.items_)
      this.items_[t] = e.items_[t];
  }
}
function Kv(n, e, t, i) {
  const s = [];
  let r = $e();
  for (let o = 0, a = t.length; o < a; ++o) {
    const l = t[o];
    r = Xo(
      n,
      e,
      l[0],
      i
    ), s.push((r[0] + r[2]) / 2, (r[1] + r[3]) / 2), e = l[l.length - 1];
  }
  return s;
}
const rh = at();
class Qe {
  /**
   * @param {Type} type Geometry type.
   * @param {Array<number>} flatCoordinates Flat coordinates. These always need
   *     to be right-handed for polygons.
   * @param {Array<number>} ends Ends.
   * @param {number} stride Stride.
   * @param {Object<string, *>} properties Properties.
   * @param {number|string|undefined} id Feature id.
   */
  constructor(e, t, i, s, r, o) {
    this.styleFunction, this.extent_, this.id_ = o, this.type_ = e, this.flatCoordinates_ = t, this.flatInteriorPoints_ = null, this.flatMidpoints_ = null, this.ends_ = i || null, this.properties_ = r, this.squaredTolerance_, this.stride_ = s, this.simplifiedGeometry_;
  }
  /**
   * Get a feature property by its key.
   * @param {string} key Key
   * @return {*} Value for the requested key.
   * @api
   */
  get(e) {
    return this.properties_[e];
  }
  /**
   * Get the extent of this feature's geometry.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */
  getExtent() {
    return this.extent_ || (this.extent_ = this.type_ === "Point" ? Uh(this.flatCoordinates_) : Xo(
      this.flatCoordinates_,
      0,
      this.flatCoordinates_.length,
      2
    )), this.extent_;
  }
  /**
   * @return {Array<number>} Flat interior points.
   */
  getFlatInteriorPoint() {
    if (!this.flatInteriorPoints_) {
      const e = Sn(this.getExtent());
      this.flatInteriorPoints_ = ta(
        this.flatCoordinates_,
        0,
        this.ends_,
        2,
        e,
        0
      );
    }
    return this.flatInteriorPoints_;
  }
  /**
   * @return {Array<number>} Flat interior points.
   */
  getFlatInteriorPoints() {
    if (!this.flatInteriorPoints_) {
      const e = d_(this.flatCoordinates_, this.ends_), t = Kv(this.flatCoordinates_, 0, e, 2);
      this.flatInteriorPoints_ = l_(
        this.flatCoordinates_,
        0,
        e,
        2,
        t
      );
    }
    return this.flatInteriorPoints_;
  }
  /**
   * @return {Array<number>} Flat midpoint.
   */
  getFlatMidpoint() {
    return this.flatMidpoints_ || (this.flatMidpoints_ = Co(
      this.flatCoordinates_,
      0,
      this.flatCoordinates_.length,
      2,
      0.5
    )), this.flatMidpoints_;
  }
  /**
   * @return {Array<number>} Flat midpoints.
   */
  getFlatMidpoints() {
    if (!this.flatMidpoints_) {
      this.flatMidpoints_ = [];
      const e = this.flatCoordinates_;
      let t = 0;
      const i = (
        /** @type {Array<number>} */
        this.ends_
      );
      for (let s = 0, r = i.length; s < r; ++s) {
        const o = i[s], a = Co(e, t, o, 2, 0.5);
        qs(this.flatMidpoints_, a), t = o;
      }
    }
    return this.flatMidpoints_;
  }
  /**
   * Get the feature identifier.  This is a stable identifier for the feature and
   * is set when reading data from a remote source.
   * @return {number|string|undefined} Id.
   * @api
   */
  getId() {
    return this.id_;
  }
  /**
   * @return {Array<number>} Flat coordinates.
   */
  getOrientedFlatCoordinates() {
    return this.flatCoordinates_;
  }
  /**
   * For API compatibility with {@link module:ol/Feature~Feature}, this method is useful when
   * determining the geometry type in style function (see {@link #getType}).
   * @return {RenderFeature} Feature.
   * @api
   */
  getGeometry() {
    return this;
  }
  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {RenderFeature} Simplified geometry.
   */
  getSimplifiedGeometry(e) {
    return this;
  }
  /**
   * Get a transformed and simplified version of the geometry.
   * @param {number} squaredTolerance Squared tolerance.
   * @param {import("../proj.js").TransformFunction} [transform] Optional transform function.
   * @return {RenderFeature} Simplified geometry.
   */
  simplifyTransformed(e, t) {
    return this;
  }
  /**
   * Get the feature properties.
   * @return {Object<string, *>} Feature properties.
   * @api
   */
  getProperties() {
    return this.properties_;
  }
  /**
   * Get an object of all property names and values.  This has the same behavior as getProperties,
   * but is here to conform with the {@link module:ol/Feature~Feature} interface.
   * @return {Object<string, *>?} Object.
   */
  getPropertiesInternal() {
    return this.properties_;
  }
  /**
   * @return {number} Stride.
   */
  getStride() {
    return this.stride_;
  }
  /**
   * @return {import('../style/Style.js').StyleFunction|undefined} Style
   */
  getStyleFunction() {
    return this.styleFunction;
  }
  /**
   * Get the type of this feature's geometry.
   * @return {Type} Geometry type.
   * @api
   */
  getType() {
    return this.type_;
  }
  /**
   * Transform geometry coordinates from tile pixel space to projected.
   *
   * @param {import("../proj.js").ProjectionLike} projection The data projection
   */
  transform(e) {
    e = et(e);
    const t = e.getExtent(), i = e.getWorldExtent();
    if (t && i) {
      const s = We(i) / We(t);
      Dt(
        rh,
        i[0],
        i[3],
        s,
        -s,
        0,
        0,
        0
      ), tn(
        this.flatCoordinates_,
        0,
        this.flatCoordinates_.length,
        2,
        rh,
        this.flatCoordinates_
      );
    }
  }
  /**
   * Apply a transform function to the coordinates of the geometry.
   * The geometry is modified in place.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   * @param {import("../proj.js").TransformFunction} transformFn Transform function.
   */
  applyTransform(e) {
    e(this.flatCoordinates_, this.flatCoordinates_, this.stride_);
  }
  /**
   * @return {RenderFeature} A cloned render feature.
   */
  clone() {
    var e;
    return new Qe(
      this.type_,
      this.flatCoordinates_.slice(),
      (e = this.ends_) == null ? void 0 : e.slice(),
      this.stride_,
      Object.assign({}, this.properties_),
      this.id_
    );
  }
  /**
   * @return {Array<number>|null} Ends.
   */
  getEnds() {
    return this.ends_;
  }
  /**
   * Add transform and resolution based geometry simplification to this instance.
   * @return {RenderFeature} This render feature.
   */
  enableSimplifyTransformed() {
    return this.simplifyTransformed = zh((e, t) => {
      if (e === this.squaredTolerance_)
        return this.simplifiedGeometry_;
      this.simplifiedGeometry_ = this.clone(), t && this.simplifiedGeometry_.applyTransform(t);
      const i = this.simplifiedGeometry_.getFlatCoordinates();
      let s;
      switch (this.type_) {
        case "LineString":
          i.length = ar(
            i,
            0,
            this.simplifiedGeometry_.flatCoordinates_.length,
            this.simplifiedGeometry_.stride_,
            e,
            i,
            0
          ), s = [i.length];
          break;
        case "MultiLineString":
          s = [], i.length = s_(
            i,
            0,
            this.simplifiedGeometry_.ends_,
            this.simplifiedGeometry_.stride_,
            e,
            i,
            0,
            s
          );
          break;
        case "Polygon":
          s = [], i.length = tc(
            i,
            0,
            this.simplifiedGeometry_.ends_,
            this.simplifiedGeometry_.stride_,
            Math.sqrt(e),
            i,
            0,
            s
          );
          break;
      }
      return s && (this.simplifiedGeometry_ = new Qe(
        this.type_,
        i,
        s,
        2,
        this.properties_,
        this.id_
      )), this.squaredTolerance_ = e, this.simplifiedGeometry_;
    }), this;
  }
}
Qe.prototype.getFlatCoordinates = Qe.prototype.getOrientedFlatCoordinates;
const rt = {
  /**
   * Triggered when a feature is added to the source.
   * @event module:ol/source/Vector.VectorSourceEvent#addfeature
   * @api
   */
  ADDFEATURE: "addfeature",
  /**
   * Triggered when a feature is updated.
   * @event module:ol/source/Vector.VectorSourceEvent#changefeature
   * @api
   */
  CHANGEFEATURE: "changefeature",
  /**
   * Triggered when the clear method is called on the source.
   * @event module:ol/source/Vector.VectorSourceEvent#clear
   * @api
   */
  CLEAR: "clear",
  /**
   * Triggered when a feature is removed from the source.
   * See {@link module:ol/source/Vector~VectorSource#clear source.clear()} for exceptions.
   * @event module:ol/source/Vector.VectorSourceEvent#removefeature
   * @api
   */
  REMOVEFEATURE: "removefeature",
  /**
   * Triggered when features starts loading.
   * @event module:ol/source/Vector.VectorSourceEvent#featuresloadstart
   * @api
   */
  FEATURESLOADSTART: "featuresloadstart",
  /**
   * Triggered when features finishes loading.
   * @event module:ol/source/Vector.VectorSourceEvent#featuresloadend
   * @api
   */
  FEATURESLOADEND: "featuresloadend",
  /**
   * Triggered if feature loading results in an error.
   * @event module:ol/source/Vector.VectorSourceEvent#featuresloaderror
   * @api
   */
  FEATURESLOADERROR: "featuresloaderror"
};
function Yv(n, e) {
  return [[-1 / 0, -1 / 0, 1 / 0, 1 / 0]];
}
let Uv = !1;
function Vv(n, e, t, i, s, r, o) {
  const a = new XMLHttpRequest();
  a.open(
    "GET",
    typeof n == "function" ? n(t, i, s) : n,
    !0
  ), e.getType() == "arraybuffer" && (a.responseType = "arraybuffer"), a.withCredentials = Uv, a.onload = function(l) {
    if (!a.status || a.status >= 200 && a.status < 300) {
      const h = e.getType();
      let c;
      h == "json" ? c = JSON.parse(a.responseText) : h == "text" ? c = a.responseText : h == "xml" ? (c = a.responseXML, c || (c = new DOMParser().parseFromString(
        a.responseText,
        "application/xml"
      ))) : h == "arraybuffer" && (c = /** @type {ArrayBuffer} */
      a.response), c ? r(
        /** @type {Array<import("./Feature.js").default>} */
        e.readFeatures(c, {
          extent: t,
          featureProjection: s
        }),
        e.readProjection(c)
      ) : o();
    } else
      o();
  }, a.onerror = o, a.send();
}
function oh(n, e) {
  return function(t, i, s, r, o) {
    const a = (
      /** @type {import("./source/Vector").default} */
      this
    );
    Vv(
      n,
      e,
      t,
      i,
      s,
      /**
       * @param {Array<import("./Feature.js").default>} features The loaded features.
       * @param {import("./proj/Projection.js").default} dataProjection Data
       * projection.
       */
      function(l, h) {
        a.addFeatures(l), r !== void 0 && r(l);
      },
      /* FIXME handle error */
      o || si
    );
  };
}
class Yt extends Ft {
  /**
   * @param {string} type Type.
   * @param {FeatureClass} [feature] Feature.
   * @param {Array<FeatureClass>} [features] Features.
   */
  constructor(e, t, i) {
    super(e), this.feature = t, this.features = i;
  }
}
class Zv extends xc {
  /**
   * @param {Options<FeatureType>} [options] Vector source options.
   */
  constructor(e) {
    e = e || {}, super({
      attributions: e.attributions,
      interpolate: !0,
      projection: void 0,
      state: "ready",
      wrapX: e.wrapX !== void 0 ? e.wrapX : !0
    }), this.on, this.once, this.un, this.loader_ = si, this.format_ = e.format, this.overlaps_ = e.overlaps === void 0 ? !0 : e.overlaps, this.url_ = e.url, e.loader !== void 0 ? this.loader_ = e.loader : this.url_ !== void 0 && (te(this.format_, "`format` must be set when `url` is set"), this.loader_ = oh(
      this.url_,
      /** @type {import("../format/Feature.js").default} */
      this.format_
    )), this.strategy_ = e.strategy !== void 0 ? e.strategy : Yv;
    const t = e.useSpatialIndex !== void 0 ? e.useSpatialIndex : !0;
    this.featuresRtree_ = t ? new sh() : null, this.loadedExtentsRtree_ = new sh(), this.loadingExtentsCount_ = 0, this.nullGeometryFeatures_ = {}, this.idIndex_ = {}, this.uidIndex_ = {}, this.featureChangeKeys_ = {}, this.featuresCollection_ = null;
    let i, s;
    Array.isArray(e.features) ? s = e.features : e.features && (i = e.features, s = i.getArray()), !t && i === void 0 && (i = new dt(s)), s !== void 0 && this.addFeaturesInternal(s), i !== void 0 && this.bindFeaturesCollection_(i);
  }
  /**
   * Add a single feature to the source.  If you want to add a batch of features
   * at once, call {@link module:ol/source/Vector~VectorSource#addFeatures #addFeatures()}
   * instead. A feature will not be added to the source if feature with
   * the same id is already there. The reason for this behavior is to avoid
   * feature duplication when using bbox or tile loading strategies.
   * Note: this also applies if an {@link module:ol/Collection~Collection} is used for features,
   * meaning that if a feature with a duplicate id is added in the collection, it will
   * be removed from it right away.
   * @param {FeatureType} feature Feature to add.
   * @api
   */
  addFeature(e) {
    this.addFeatureInternal(e), this.changed();
  }
  /**
   * Add a feature without firing a `change` event.
   * @param {FeatureType} feature Feature.
   * @protected
   */
  addFeatureInternal(e) {
    const t = oe(e);
    if (!this.addToIndex_(t, e)) {
      this.featuresCollection_ && this.featuresCollection_.remove(e);
      return;
    }
    this.setupChangeEvents_(t, e);
    const i = e.getGeometry();
    if (i) {
      const s = i.getExtent();
      this.featuresRtree_ && this.featuresRtree_.insert(s, e);
    } else
      this.nullGeometryFeatures_[t] = e;
    this.dispatchEvent(
      new Yt(rt.ADDFEATURE, e)
    );
  }
  /**
   * @param {string} featureKey Unique identifier for the feature.
   * @param {FeatureType} feature The feature.
   * @private
   */
  setupChangeEvents_(e, t) {
    t instanceof Qe || (this.featureChangeKeys_[e] = [
      se(t, Z.CHANGE, this.handleFeatureChange_, this),
      se(
        t,
        ii.PROPERTYCHANGE,
        this.handleFeatureChange_,
        this
      )
    ]);
  }
  /**
   * @param {string} featureKey Unique identifier for the feature.
   * @param {FeatureType} feature The feature.
   * @return {boolean} The feature is "valid", in the sense that it is also a
   *     candidate for insertion into the Rtree.
   * @private
   */
  addToIndex_(e, t) {
    let i = !0;
    if (t.getId() !== void 0) {
      const s = String(t.getId());
      if (!(s in this.idIndex_))
        this.idIndex_[s] = t;
      else if (t instanceof Qe) {
        const r = this.idIndex_[s];
        r instanceof Qe ? Array.isArray(r) ? r.push(t) : this.idIndex_[s] = [r, t] : i = !1;
      } else
        i = !1;
    }
    return i && (te(
      !(e in this.uidIndex_),
      "The passed `feature` was already added to the source"
    ), this.uidIndex_[e] = t), i;
  }
  /**
   * Add a batch of features to the source.
   * @param {Array<FeatureType>} features Features to add.
   * @api
   */
  addFeatures(e) {
    this.addFeaturesInternal(e), this.changed();
  }
  /**
   * Add features without firing a `change` event.
   * @param {Array<FeatureType>} features Features.
   * @protected
   */
  addFeaturesInternal(e) {
    const t = [], i = [], s = [];
    for (let r = 0, o = e.length; r < o; r++) {
      const a = e[r], l = oe(a);
      this.addToIndex_(l, a) && i.push(a);
    }
    for (let r = 0, o = i.length; r < o; r++) {
      const a = i[r], l = oe(a);
      this.setupChangeEvents_(l, a);
      const h = a.getGeometry();
      if (h) {
        const c = h.getExtent();
        t.push(c), s.push(a);
      } else
        this.nullGeometryFeatures_[l] = a;
    }
    if (this.featuresRtree_ && this.featuresRtree_.load(t, s), this.hasListener(rt.ADDFEATURE))
      for (let r = 0, o = i.length; r < o; r++)
        this.dispatchEvent(
          new Yt(rt.ADDFEATURE, i[r])
        );
  }
  /**
   * @param {!Collection<FeatureType>} collection Collection.
   * @private
   */
  bindFeaturesCollection_(e) {
    let t = !1;
    this.addEventListener(
      rt.ADDFEATURE,
      /**
       * @param {VectorSourceEvent<FeatureType>} evt The vector source event
       */
      function(i) {
        t || (t = !0, e.push(i.feature), t = !1);
      }
    ), this.addEventListener(
      rt.REMOVEFEATURE,
      /**
       * @param {VectorSourceEvent<FeatureType>} evt The vector source event
       */
      function(i) {
        t || (t = !0, e.remove(i.feature), t = !1);
      }
    ), e.addEventListener(
      Ne.ADD,
      /**
       * @param {import("../Collection.js").CollectionEvent<FeatureType>} evt The collection event
       */
      (i) => {
        t || (t = !0, this.addFeature(i.element), t = !1);
      }
    ), e.addEventListener(
      Ne.REMOVE,
      /**
       * @param {import("../Collection.js").CollectionEvent<FeatureType>} evt The collection event
       */
      (i) => {
        t || (t = !0, this.removeFeature(i.element), t = !1);
      }
    ), this.featuresCollection_ = e;
  }
  /**
   * Remove all features from the source.
   * @param {boolean} [fast] Skip dispatching of {@link module:ol/source/Vector.VectorSourceEvent#event:removefeature} events.
   * @api
   */
  clear(e) {
    if (e) {
      for (const i in this.featureChangeKeys_)
        this.featureChangeKeys_[i].forEach(ge);
      this.featuresCollection_ || (this.featureChangeKeys_ = {}, this.idIndex_ = {}, this.uidIndex_ = {});
    } else if (this.featuresRtree_) {
      const i = (s) => {
        this.removeFeatureInternal(s);
      };
      this.featuresRtree_.forEach(i);
      for (const s in this.nullGeometryFeatures_)
        this.removeFeatureInternal(this.nullGeometryFeatures_[s]);
    }
    this.featuresCollection_ && this.featuresCollection_.clear(), this.featuresRtree_ && this.featuresRtree_.clear(), this.nullGeometryFeatures_ = {};
    const t = new Yt(rt.CLEAR);
    this.dispatchEvent(t), this.changed();
  }
  /**
   * Iterate through all features on the source, calling the provided callback
   * with each one.  If the callback returns any "truthy" value, iteration will
   * stop and the function will return the same value.
   * Note: this function only iterate through the feature that have a defined geometry.
   *
   * @param {function(FeatureType): T} callback Called with each feature
   *     on the source.  Return a truthy value to stop iteration.
   * @return {T|undefined} The return value from the last call to the callback.
   * @template T
   * @api
   */
  forEachFeature(e) {
    if (this.featuresRtree_)
      return this.featuresRtree_.forEach(e);
    this.featuresCollection_ && this.featuresCollection_.forEach(e);
  }
  /**
   * Iterate through all features whose geometries contain the provided
   * coordinate, calling the callback with each feature.  If the callback returns
   * a "truthy" value, iteration will stop and the function will return the same
   * value.
   *
   * For {@link module:ol/render/Feature~RenderFeature} features, the callback will be
   * called for all features.
   *
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {function(FeatureType): T} callback Called with each feature
   *     whose goemetry contains the provided coordinate.
   * @return {T|undefined} The return value from the last call to the callback.
   * @template T
   */
  forEachFeatureAtCoordinateDirect(e, t) {
    const i = [e[0], e[1], e[0], e[1]];
    return this.forEachFeatureInExtent(i, function(s) {
      const r = s.getGeometry();
      if (r instanceof Qe || r.intersectsCoordinate(e))
        return t(s);
    });
  }
  /**
   * Iterate through all features whose bounding box intersects the provided
   * extent (note that the feature's geometry may not intersect the extent),
   * calling the callback with each feature.  If the callback returns a "truthy"
   * value, iteration will stop and the function will return the same value.
   *
   * If you are interested in features whose geometry intersects an extent, call
   * the {@link module:ol/source/Vector~VectorSource#forEachFeatureIntersectingExtent #forEachFeatureIntersectingExtent()} method instead.
   *
   * When `useSpatialIndex` is set to false, this method will loop through all
   * features, equivalent to {@link module:ol/source/Vector~VectorSource#forEachFeature #forEachFeature()}.
   *
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {function(FeatureType): T} callback Called with each feature
   *     whose bounding box intersects the provided extent.
   * @return {T|undefined} The return value from the last call to the callback.
   * @template T
   * @api
   */
  forEachFeatureInExtent(e, t) {
    if (this.featuresRtree_)
      return this.featuresRtree_.forEachInExtent(e, t);
    this.featuresCollection_ && this.featuresCollection_.forEach(t);
  }
  /**
   * Iterate through all features whose geometry intersects the provided extent,
   * calling the callback with each feature.  If the callback returns a "truthy"
   * value, iteration will stop and the function will return the same value.
   *
   * If you only want to test for bounding box intersection, call the
   * {@link module:ol/source/Vector~VectorSource#forEachFeatureInExtent #forEachFeatureInExtent()} method instead.
   *
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {function(FeatureType): T} callback Called with each feature
   *     whose geometry intersects the provided extent.
   * @return {T|undefined} The return value from the last call to the callback.
   * @template T
   * @api
   */
  forEachFeatureIntersectingExtent(e, t) {
    return this.forEachFeatureInExtent(
      e,
      /**
       * @param {FeatureType} feature Feature.
       * @return {T|undefined} The return value from the last call to the callback.
       */
      function(i) {
        const s = i.getGeometry();
        if (s instanceof Qe || s.intersectsExtent(e)) {
          const r = t(i);
          if (r)
            return r;
        }
      }
    );
  }
  /**
   * Get the features collection associated with this source. Will be `null`
   * unless the source was configured with `useSpatialIndex` set to `false`, or
   * with an {@link module:ol/Collection~Collection} as `features`.
   * @return {Collection<FeatureType>|null} The collection of features.
   * @api
   */
  getFeaturesCollection() {
    return this.featuresCollection_;
  }
  /**
   * Get a snapshot of the features currently on the source in random order. The returned array
   * is a copy, the features are references to the features in the source.
   * @return {Array<FeatureType>} Features.
   * @api
   */
  getFeatures() {
    let e;
    return this.featuresCollection_ ? e = this.featuresCollection_.getArray().slice(0) : this.featuresRtree_ && (e = this.featuresRtree_.getAll(), ri(this.nullGeometryFeatures_) || qs(e, Object.values(this.nullGeometryFeatures_))), e;
  }
  /**
   * Get all features whose geometry intersects the provided coordinate.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @return {Array<import("../Feature.js").default>} Features.
   * @api
   */
  getFeaturesAtCoordinate(e) {
    const t = [];
    return this.forEachFeatureAtCoordinateDirect(e, function(i) {
      t.push(i);
    }), t;
  }
  /**
   * Get all features whose bounding box intersects the provided extent.  Note that this returns an array of
   * all features intersecting the given extent in random order (so it may include
   * features whose geometries do not intersect the extent).
   *
   * When `useSpatialIndex` is set to false, this method will return all
   * features.
   *
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {import("../proj/Projection.js").default} [projection] Include features
   * where `extent` exceeds the x-axis bounds of `projection` and wraps around the world.
   * @return {Array<FeatureType>} Features.
   * @api
   */
  getFeaturesInExtent(e, t) {
    if (this.featuresRtree_) {
      if (!(t && t.canWrapX() && this.getWrapX()))
        return this.featuresRtree_.getInExtent(e);
      const s = I0(e, t);
      return [].concat(
        ...s.map((r) => this.featuresRtree_.getInExtent(r))
      );
    }
    return this.featuresCollection_ ? this.featuresCollection_.getArray().slice(0) : [];
  }
  /**
   * Get the closest feature to the provided coordinate.
   *
   * This method is not available when the source is configured with
   * `useSpatialIndex` set to `false` and the features in this source are of type
   * {@link module:ol/Feature~Feature}.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {function(FeatureType):boolean} [filter] Feature filter function.
   *     The filter function will receive one argument, the {@link module:ol/Feature~Feature feature}
   *     and it should return a boolean value. By default, no filtering is made.
   * @return {FeatureType} Closest feature.
   * @api
   */
  getClosestFeatureToCoordinate(e, t) {
    const i = e[0], s = e[1];
    let r = null;
    const o = [NaN, NaN];
    let a = 1 / 0;
    const l = [-1 / 0, -1 / 0, 1 / 0, 1 / 0];
    return t = t || Bi, this.featuresRtree_.forEachInExtent(
      l,
      /**
       * @param {FeatureType} feature Feature.
       */
      function(h) {
        if (t(h)) {
          const c = h.getGeometry(), u = a;
          if (a = c instanceof Qe ? 0 : c.closestPointXY(i, s, o, a), a < u) {
            r = h;
            const d = Math.sqrt(a);
            l[0] = i - d, l[1] = s - d, l[2] = i + d, l[3] = s + d;
          }
        }
      }
    ), r;
  }
  /**
   * Get the extent of the features currently in the source.
   *
   * This method is not available when the source is configured with
   * `useSpatialIndex` set to `false`.
   * @param {import("../extent.js").Extent} [extent] Destination extent. If provided, no new extent
   *     will be created. Instead, that extent's coordinates will be overwritten.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */
  getExtent(e) {
    return this.featuresRtree_.getExtent(e);
  }
  /**
   * Get a feature by its identifier (the value returned by feature.getId()). When `RenderFeature`s
   * are used, `getFeatureById()` can return an array of `RenderFeature`s. This allows for handling
   * of `GeometryCollection` geometries, where format readers create one `RenderFeature` per
   * `GeometryCollection` member.
   * Note that the index treats string and numeric identifiers as the same.  So
   * `source.getFeatureById(2)` will return a feature with id `'2'` or `2`.
   *
   * @param {string|number} id Feature identifier.
   * @return {FeatureClassOrArrayOfRenderFeatures<FeatureType>|null} The feature (or `null` if not found).
   * @api
   */
  getFeatureById(e) {
    const t = this.idIndex_[e.toString()];
    return t !== void 0 ? (
      /** @type {FeatureClassOrArrayOfRenderFeatures<FeatureType>} */
      t
    ) : null;
  }
  /**
   * Get a feature by its internal unique identifier (using `getUid`).
   *
   * @param {string} uid Feature identifier.
   * @return {FeatureType|null} The feature (or `null` if not found).
   */
  getFeatureByUid(e) {
    const t = this.uidIndex_[e];
    return t !== void 0 ? t : null;
  }
  /**
   * Get the format associated with this source.
   *
   * @return {import("../format/Feature.js").default<import('../format/Feature.js').FeatureToFeatureClass<FeatureType>>|undefined} The feature format.
   * @api
   */
  getFormat() {
    return this.format_;
  }
  /**
   * @return {boolean} The source can have overlapping geometries.
   */
  getOverlaps() {
    return this.overlaps_;
  }
  /**
   * Get the url associated with this source.
   *
   * @return {string|import("../featureloader.js").FeatureUrlFunction|undefined} The url.
   * @api
   */
  getUrl() {
    return this.url_;
  }
  /**
   * @param {Event} event Event.
   * @private
   */
  handleFeatureChange_(e) {
    const t = (
      /** @type {FeatureType} */
      e.target
    ), i = oe(t), s = t.getGeometry();
    if (!s)
      i in this.nullGeometryFeatures_ || (this.featuresRtree_ && this.featuresRtree_.remove(t), this.nullGeometryFeatures_[i] = t);
    else {
      const o = s.getExtent();
      i in this.nullGeometryFeatures_ ? (delete this.nullGeometryFeatures_[i], this.featuresRtree_ && this.featuresRtree_.insert(o, t)) : this.featuresRtree_ && this.featuresRtree_.update(o, t);
    }
    const r = t.getId();
    if (r !== void 0) {
      const o = r.toString();
      this.idIndex_[o] !== t && (this.removeFromIdIndex_(t), this.idIndex_[o] = t);
    } else
      this.removeFromIdIndex_(t), this.uidIndex_[i] = t;
    this.changed(), this.dispatchEvent(
      new Yt(rt.CHANGEFEATURE, t)
    );
  }
  /**
   * Returns true if the feature is contained within the source.
   * @param {FeatureType} feature Feature.
   * @return {boolean} Has feature.
   * @api
   */
  hasFeature(e) {
    const t = e.getId();
    return t !== void 0 ? t in this.idIndex_ : oe(e) in this.uidIndex_;
  }
  /**
   * @return {boolean} Is empty.
   */
  isEmpty() {
    return this.featuresRtree_ ? this.featuresRtree_.isEmpty() && ri(this.nullGeometryFeatures_) : this.featuresCollection_ ? this.featuresCollection_.getLength() === 0 : !0;
  }
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} resolution Resolution.
   * @param {import("../proj/Projection.js").default} projection Projection.
   */
  loadFeatures(e, t, i) {
    const s = this.loadedExtentsRtree_, r = this.strategy_(e, t, i);
    for (let o = 0, a = r.length; o < a; ++o) {
      const l = r[o];
      s.forEachInExtent(
        l,
        /**
         * @param {{extent: import("../extent.js").Extent}} object Object.
         * @return {boolean} Contains.
         */
        function(c) {
          return jn(c.extent, l);
        }
      ) || (++this.loadingExtentsCount_, this.dispatchEvent(
        new Yt(rt.FEATURESLOADSTART)
      ), this.loader_.call(
        this,
        l,
        t,
        i,
        (c) => {
          --this.loadingExtentsCount_, this.dispatchEvent(
            new Yt(
              rt.FEATURESLOADEND,
              void 0,
              c
            )
          );
        },
        () => {
          --this.loadingExtentsCount_, this.dispatchEvent(
            new Yt(rt.FEATURESLOADERROR)
          );
        }
      ), s.insert(l, { extent: l.slice() }));
    }
    this.loading = this.loader_.length < 4 ? !1 : this.loadingExtentsCount_ > 0;
  }
  refresh() {
    this.clear(!0), this.loadedExtentsRtree_.clear(), super.refresh();
  }
  /**
   * Remove an extent from the list of loaded extents.
   * @param {import("../extent.js").Extent} extent Extent.
   * @api
   */
  removeLoadedExtent(e) {
    const t = this.loadedExtentsRtree_;
    let i;
    t.forEachInExtent(e, function(s) {
      if (Wi(s.extent, e))
        return i = s, !0;
    }), i && t.remove(i);
  }
  /**
   * Remove a single feature from the source.  If you want to remove all features
   * at once, use the {@link module:ol/source/Vector~VectorSource#clear #clear()} method
   * instead.
   * @param {FeatureType} feature Feature to remove.
   * @api
   */
  removeFeature(e) {
    if (!e)
      return;
    const t = oe(e);
    t in this.nullGeometryFeatures_ ? delete this.nullGeometryFeatures_[t] : this.featuresRtree_ && this.featuresRtree_.remove(e), this.removeFeatureInternal(e) && this.changed();
  }
  /**
   * Remove feature without firing a `change` event.
   * @param {FeatureType} feature Feature.
   * @return {FeatureType|undefined} The removed feature
   *     (or undefined if the feature was not found).
   * @protected
   */
  removeFeatureInternal(e) {
    const t = oe(e), i = this.featureChangeKeys_[t];
    if (!i)
      return;
    i.forEach(ge), delete this.featureChangeKeys_[t];
    const s = e.getId();
    return s !== void 0 && delete this.idIndex_[s.toString()], delete this.uidIndex_[t], this.dispatchEvent(
      new Yt(rt.REMOVEFEATURE, e)
    ), e;
  }
  /**
   * Remove a feature from the id index.  Called internally when the feature id
   * may have changed.
   * @param {FeatureType} feature The feature.
   * @return {boolean} Removed the feature from the index.
   * @private
   */
  removeFromIdIndex_(e) {
    let t = !1;
    for (const i in this.idIndex_) {
      const s = this.idIndex_[i];
      if (e instanceof Qe && Array.isArray(s) && s.includes(e))
        s.splice(s.indexOf(e), 1);
      else if (this.idIndex_[i] === e) {
        delete this.idIndex_[i], t = !0;
        break;
      }
    }
    return t;
  }
  /**
   * Set the new loader of the source. The next render cycle will use the
   * new loader.
   * @param {import("../featureloader.js").FeatureLoader} loader The loader to set.
   * @api
   */
  setLoader(e) {
    this.loader_ = e;
  }
  /**
   * Points the source to a new url. The next render cycle will use the new url.
   * @param {string|import("../featureloader.js").FeatureUrlFunction} url Url.
   * @api
   */
  setUrl(e) {
    te(this.format_, "`format` must be set when `url` is set"), this.url_ = e, this.setLoader(oh(e, this.format_));
  }
}
function ah(n) {
  if (!(n.context instanceof CanvasRenderingContext2D))
    throw new Error("Only works for render events from Canvas 2D layers");
  const e = n.inversePixelTransform[0], t = n.inversePixelTransform[1], i = Math.sqrt(e * e + t * t), s = n.frameState, r = Y0(
    n.inversePixelTransform.slice(),
    s.coordinateToPixelTransform
  ), o = Ao(
    s.viewState.resolution,
    i
  );
  let a;
  return new jc(
    n.context,
    i,
    s.extent,
    r,
    s.viewState.rotation,
    o,
    a
  );
}
const jv = "data:image/png;base64,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";
class Hv {
  constructor(e, t, i) {
    this.map = e, this.speed = 200, this.tracksLayer = [], this.allOverAnimates = [], this.styles = {}, this.lastTime, this.distance = 0, this.animating = t, this.trackDetails = i;
  }
  singleTrack(e, t) {
    let i = e.map((u) => {
      let { longitude: d, latitude: f } = u;
      return Vo([d, f], "EPSG:4326", "EPSG:3857");
    }), s = new $i(i);
    const r = new Hn({
      type: "track",
      geometry: s
    }), o = new Hn({
      type: "carTrack",
      geometry: new $i([s.getFirstCoordinate()])
    }), l = new Hn({
      type: "geoMarker",
      geometry: new lr(s.getFirstCoordinate())
    }).getGeometry().clone(), h = o.getGeometry().clone(), c = new Hn({
      type: "icon",
      geometry: l
    });
    return {
      trackLine: s,
      carTrackFeature: o,
      carPosition: h,
      geoMarker: c,
      position: l,
      passCoordinates: [],
      trackLineCoordinate: e,
      layer: new Xv({
        source: new Zv({
          features: [r, o, c]
        }),
        style: (u) => u.get("type") === "track" ? new qe({
          stroke: new Ht({
            width: 6,
            color: t
          })
        }) : this.styles[u.get("type")]
      })
    };
  }
  initMultiplyTrack(e, t) {
    return e.map((i) => {
      var r;
      let s = (r = t.filter((o) => {
        var a;
        return +o.rybh == +((a = i[0]) == null ? void 0 : a.rybh);
      })[0]) == null ? void 0 : r.color;
      return this.singleTrack(i, s);
    });
  }
  addLayer(e, t) {
    this.styles = {
      track: new qe({
        stroke: new Ht({
          width: 6,
          color: [220, 30, 60, 0.9]
        })
      }),
      carTrack: new qe({
        stroke: new Ht({
          width: 6,
          color: [117, 46, 195, 1]
        })
      }),
      icon: new qe({
        image: new ss({
          anchor: [0.5, 0.5],
          scale: 0.3,
          src: jv
        })
      }),
      geoMarker: new qe({
        image: new is({
          radius: 8,
          fill: new gi({ color: "#333" }),
          stroke: new Ht({
            color: "#f00",
            width: 2
          })
        })
      })
    }, Array.isArray(e) && e.length > 0 && (this.tracksLayer = this.initMultiplyTrack(e, t), this.tracksLayer.forEach((i) => {
      this.map.addLayer(i.layer);
    }));
  }
  drawCarTrack(e, t) {
    const i = ah(e);
    i.setStyle(this.styles.carTrack), i.drawGeometry(t.carPosition);
  }
  moveFeature(e, t) {
    const i = e.frameState.time, s = i - this.lastTime;
    this.distance = (this.distance + this.speed * s / 1e6) % 2;
    let r = Math.floor(this.distance * t.trackLineCoordinate.length), o = t.trackLineCoordinate[r];
    o && (this.trackDetails.value[o.rybh] = o), this.lastTime = i;
    const a = t.trackLine.getCoordinateAt(this.distance > 1 ? 2 - this.distance : this.distance);
    this.distance >= 1 && this.stopMove("single", t), t.position.setCoordinates(a), t.passCoordinates.push(a), t.carPosition.setCoordinates(t.passCoordinates), this.drawCarTrack(e, t);
    const l = ah(e);
    l.setStyle(this.styles.icon), l.drawGeometry(t.position), this.map.render();
  }
  resetMove(e, t) {
    this.stopMove(), this.distance = 0, this.lastTime = null, this.allOverAnimates = [], this.animating.value = !1, this.tracksLayer.forEach((i) => {
      i.layer.getSource().clear();
    }), this.tracksLayer = [], this.addTrack(e, t);
  }
  startMove(e) {
    e.length && (this.animating.value || this.distance >= 1 || (this.animating.value = !0, this.lastTime = Date.now(), this.tracksLayer.forEach((t) => {
      t.moveFeature = (i) => this.moveFeature(i, t), t.layer.on("postrender", t.moveFeature), t.geoMarker.setGeometry(null);
    })));
  }
  checkAllOverAnimating() {
    this.allOverAnimates.length === this.tracksLayer.length && (this.animating.value = !1);
  }
  stopMove(e, t) {
    if (this.animating.value) {
      if (e === "single") {
        t.geoMarker.setGeometry(t.position), t.carTrackFeature.setGeometry(t.carPosition), t.layer.un("postrender", t.moveFeature), this.allOverAnimates.push(!0), this.checkAllOverAnimating();
        return;
      }
      this.animating.value = !1, this.tracksLayer.forEach((i) => {
        i.geoMarker.setGeometry(i.position), i.carTrackFeature.setGeometry(i.carPosition), i.layer.un("postrender", i.moveFeature);
      });
    }
  }
  addTrack(e, t) {
    this.addLayer(e, t);
  }
}
const Qv = "data:image/png;base64,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", qv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAFTlJREFUeF7tXV2MHNWV/k7PdDVGGilknYdY6eqxDHTPtL3EIyIcPMs+gGCVmCW2RLT7kCw2kcLmR5tAHCeCTbJZUDJ2IIvys0QKnmx42BVIJixOdkHwsKxNjILssPZ4uvlZT1dHzkO8AWkkTFdP11mqewZmhvmp6q5bdev2GQk8su895zvfOV/XvdX3hyA/yhiobsJGHhwsgqgIjzaDeAhMQyB0/mv/7v8dhgAaAnioA4ZmAZ4FYRZMsyCeBfu/Y/53mkWGz4G5SnNz1eJ5XFAWRJ8bpj6PP5LwK5tzRcyhCOIS2P+TigCKAG+MxMG6RsgXSNUXDMj/kyoYRLV0rlFdt6s0WJMBEUjIApn6EN5vUe7qFvjPmOg6Al8X0kSszRn0HDE/NwD6b5cbL5Z/hz/GCiDlzkQg6yTwlXxuSxP8EcrwRwDaSYxr0pxzJrwA8HH26DdZ0G+uqDdeS3M8qrGLQFZguGpfcj2jdTNA1wPYqjoJCds/A/CzhIEni85bzyaMRTv3IpD5lJwdzu7IMO2Ch10gXKVdpuIAxHgJGRz1iI+OzjRPxOFSdx99LZCzeWvrAGEXg3YBvFP3ZMWLj44T+GiLcXS07p6J17c+3vpOIFNlWJnZ7F6A9hBwoz6p0BcJA08DfMQbak6Wp+DqizR6ZH0jkJqNy97k3L4M8V4GytFTab5FAqY8pslLqXG44OB18yMGjBfI6U0b8tZgyxfFXgDD/ZDUGGKcIWDSnRuY3Hb+Yj0Gf4m5MFYg1WGr1PKwLwPaG98XdonlMSHHdMEDTw5kcLg441YSAqHUrXECmSpktw8g8xni9lBqg1L2xHibAQIuMtFkC95Py7XmKZNoMUYgr1yOnOdaBzzgAAGXmpSktMTCwJsZYCJjuRNXvIpGWnCvhdMIgVRs61YAXwVwtQlJMSCGFwEcLDnuY2mPJdUCmbKt8gBwAMCn0p4IQ/E/0gImyo47ldb4UikQBuhl2zrAHXG8L63k9wnuNwiYuNJxJwjgtMWcOoFU8tYtoPZw6tq0kd3neJ8H42Cp7j6RJh5SJZBp2/rW259C30wTwYJ1KQNvP/3/YcRxv5UWXlIhkNP53JZB8CEi7E4LsYJzdQaY8fgcaP+2FCy1114g1YK1G4xDDGyRojOHAQJeA2F/seY+rnNUWgtEhlQ6l0402HQfcmkpEBlSRVN8abGi85BLO4HIkCotZR0tTl2HXFoJZLqQ+wIx/yBa6sVamhhgoi+O1Bo/1AWzNgKpFKx7wbhbF2IER4IMEO4r1dx7EkTwjmstBFLJWw+DsE8HQgSDJgwwDpfq7u1Jo0lcIFXb+iUDH0uaCPGvHwME/KrouB9PElmiApm2rZMEbE+SAPGtNwMMnBpx3LGkUCYmkIptnQfwwaQCF7+pYuD3JcfdlATiRARSsa3UrepMIjnicykDJceNvV5jd1gpWFUwrpTkCwOhGSC8XKq5/sHgsf3EKpCqbT3JwK7YohNHxjFAwNGi494cV2CxCWS6kH2AmL4cV2Dix1wGmPj7I7XmnXFEGItAqrb1NQa+E0dA4qM/GCDg60XH/a7qaJULRJaPqE5h/9qPY1mKUoFM57O3EdFk/6ZQIlfNADPvHak3f6bKjzKB+KtymXFEFXCxKwwsMECEPao2XikRiL+fwyJ+SnYBShHHwYC/VN5luknFFl4lApnOW0dk/3gcpSE+FhjwN12N1N09UTMSuUBkm2zUKRJ7QRlQsX03UoHIvCNoKqWdKgaino9EJhCZd6hKudgNw0DU85HIBCLzjjBplLYqGYhyPhKJQGTeoTLdYrsbBqKaj/QskPmzcn/RTRDSRxhQygDjE72eBdyTQPxT1qu2dUwOklaaZjHePQPPFx13vJdT5XsSiCxC7D5z0jMeBnpd1Ni1QOYvr/GfHnI/Rzy5Fi/dMfBGCxjv9hKfrgVSsa2fy81O3WVMesXOwCMlx/10N167Esj8nYCPduNQ+ggDCTHwyW7uTAwtEP822ZbbnpjLhZkJZVrcdsXAiwOWOx729t3QAqna1jf8d8xdQZROwkCCDPi3kxUd99thIIQSyFQhuz3DdEzuIQ9DsbTVhQH/HnePeLxca54KiimUQCqF3I/A/LmgxqWdMKAdA0Q/LtUanw+KK7BAqsNWCR5OMrAhqHFpJwzoxgABF5HBWHHGrQTBFlggZ23rYAbYH8SotBEGdGbAAw6NOq5/lfi6P4EEcnrThnx20DsJ8MZ1LUoDYUB7BuhCcy4ztu38xfp6UAMJRN5crUej/HvaGAj6RmtdgdRsXHYR1kkAw2kjQfAKA2swMLMB7ljBwetrsbSuQKbzubuI+HtCtTBgGgPM9JWReuP+rgUyVYY1OGv5b67KppEj8QgDBEzNDblj5Sm4q7Gx5hNk2s5+lkAPCZXCgKkMMPiOEaf5ky4FYj1FwI0mkhPXchl/MqiSP1PiUMnRWrYZeHrEcW8KLZCzeWtrhnA6KeCq/Ua1Z3ktnHHs1TclDtX5Xsu+x9g2WnfPrNRm1SGW6bsFTSksU+JIUiBr7TpcVSAVO3cM4J1JAlfp25TCMiUOlble3zYdLzmN8cBPkLPD2R0Zj369vuH0tjClsEyJI+lK8jL80dGZ5onlOFZ8glQK1r1g3J00aJX+TSksU+JQmetAtgn3lWruPcEEkrd+C8JVgQyntJEphWVKHImXEeOlUt398LoCqdqXXM/wnkkcsGIAphSWKXEoTncg84TMDUXnrWcXN37PEKtiZ/8JoL8LZDHFjUwpLFPi0KOU+MGS0/zSmgKp2taZflhaYkphmRKHDgLxl54UHXfrqgKpbM4V0eJAO610CKgXDKYUlilx9JLLSPsOUKl0rlFdsLlkiFW1s3/DIGU3hkYaSI/GTCksU+LoMZ2RdSfwbUWn+S8rCqRi5/4Z4Dsi86axIVMKy5Q49CkVeqjkNP52RYFM29ZJArbrA1YdElMKy5Q41GU6nGUGTo047th7BFLdhI08aP0hnLn0tjalsEyJQ6dKojn3A8XzuOBjemcOUsnn/hLET+gEVCUWUwrLlDhU5jq0baZbSvXGvy8ViG1NAAh0FEpohxp2MKWwTIlDsxI5WHLcA8sEYvbq3eUJMKWwTIlDL4G8u7r33SGWbbFeINWiMaWwTIlDbbbDWy85blsb7f/10xeEC1SZUlimxBG+hBX3mP/CsCOQPpug+zGbUlimxKG43MObn5+odwRiW/7k3J+k982PKYVlShwaFt6BkuMenH+CWA+DsE9DkMogmVJYpsShLNHdGmYcLtXd2+efIP31BkuGWOGqJo7TWcIhiqN1503WgkD+0G8nt5vyyWtKHHGUfDgfdKHkND5A/bbERN5ihSsTv3V/PkEAf8kJVezBnUDGv7W2r35M+eQ1JQ49i88bp0ohuw9MD+sJUB0qUwrLlDjUZboHy8S3UyVv/SMI7znupAezqehqSmGZEoeWRcO4l/rlkIblCTClsEyJQ0uBgB/0nyB99x2IvOYNV479OkkH4zBVbOtRALeGoyz9rU355DUlDk0r6jGqFKz/AOMvNAWoDJYphWVKHMoS3Ythwn+S6ae4r8aPKYVlShy91LG6vnTcf4K8BMafqnOip2VTCsuUOLSsEsL/+HOQ/wWwWUuACkGZUlimxKEw1b2YPucPsfpuHZa8xQpXM337Fgt0wX+CvAUgF46y9Lc25ZPXlDg0raiGCERhZuL45BWBKEwg4AtEhliqKBaBqGI2LrudIZZM0hXxLQJRRGx8Zs/Ja16FZItAFJIbh+nOa97+224rb7HCVVccQg+HKK7WnS8KZamJIr7jKCyZpCtKnm+2s9REFiuqolgEoorZ2Ow+JsvdFXItAlFIbhymO8vd++NW2+V8mjI0MSWOOOo9vI/OhinZchueuUA95AkSiCZ9G7W33MqhDcoSJAJRRm08htuHNsixP8rIFoEoozYmw964HBynkGoRiEJyYzDdPjjO99OP67FMmdyaEkcM9R7SxfzRo/MCOQbwzpAWUt3clMIyJQ79imnx4dV9ePSPKYVlShzaCWTp9QdygY6KBMkcRAWrsdlcfIFOf92R7lNsyievKXHEVvZBHS25gm1zrogWV4L2NaGdKYVlShza1dTiSzw7E3W5BjrqJMkQK2pG47O35Bpo3+20nfsvAl8XH4RkPZnyyWtKHMlWw1LvDHpuxGn8uf+37e9B2k+QPluTZUphmRKHTgIB495S3f37JQJ5JZ+7sUX8lFZAFYIxpbBMiUNhqkObHmC66Yp64+klApn6EN4/kLH+L7S1lHYwpbBMiUOnMmp57p+Uf4c/LhFIex5SsE4Q4xqdwKrCYkphmRKHqjyHtcuEF0Zq7o6Ffu/MQToCyd5PTHeGNZrG9qYUlilx6FJDTPzASK1514oCOZu3/ipD+FddwKrEYUphmRKHylyHse0x/nq07v7bigJ5JZ/b0iJ+NYzBtLY1pbBMiUOXOhpguvyKeuO1FQXSft1rW6cBbNUFsCocphSWKXGoynNIu2dKjrttcZ8lc5COQPrjEAdTCsuUOEIWsqLm/GDJaX5pTYFU7UuuZ3jPKEKgjVlTCsuUOHQoDELmhqLz1rNrCqT9FMlbvwXhKh1Aq8JgSmGZEoeqPAe2y3ipVHc/vLz9e4ZYbYEUrHvBuDuw8RQ2NKWwTIkj8RIi3FequfcEEsjZ4eyOjEe/Thy0QgCmFJYpcShMdSDTXoY/OjrTPBFIIJ3JutmnvptSWKbEEaiKlTXq7D9fyfyKQyy/YdW2vsbAd5RhStiwKYVlShxJlgMBXy867ndDCeRs3tqaIfjfiRj5Y0phmRJHkkXmMbaN1t0zoQTiN562racIuDFJ8Kp8+4WVaW9NB7xF+2KW+wvSZi2MBHxTVQy+XVPiUMnRWrYZeHrEcW9arc2qQ6yOQLKfJdBDSYEXv8KAagYYfMeI0/xJVwKZKsManLVOMlBWDVTsCwNxM0DA1NyQO1aegtuVQNpPkXzuLiL+XtzgxZ8woJoBZvrKSL1x/zpD5LVh1GxcdhHWSQDDqgGLfWEgRgZmNsAdKzh4vSeB+J2rtvUNfzIYI3hxJQwoZcB/eVJ03G+v52TNSfpC59ObNuSzg95JgDeuZ1D+XRjQnwG60JzLjG07f7G+HtZAAvGNnLWtgxlg/3oG5d+FAd0Z8IBDo4771SA4AwukOmyV4MF/o7UhiGFpIwzoyAABF5HBWHHGDXTUbmCB+MFWCrkfgflzOgYumISBQAwQ/bhUa3w+UNvFJysG6TBVyG7PMB0j4NIg7aWNMKATAwy86RGPl2vNU0FxhXqC+EbljVZQaqWdbgwEfXO1GHdogbxyOXIt1zoG4GrdCBA8wsAaDLw4YLnjV7yKRhiWQgukPRexrVsBPBrGkbQVBhJm4JMlx30sLIauBDIvkp8D+FRYh9JeGEiAgUdKjvvpbvx2LZAp2yoPAP5Q633dOJY+wkBMDLzRAsbLjjvVjb+uBTI/YTd612E3hEofvRhYa7dgEKQ9CeTt9VlUtdsT9muDOJM2wkDMDDxfdNzxt99etTfGdfPTk0Dac5G8dQsIv+jGufQRBpQywPhEqe4+0YuPngXiO4/jsspegpS+/cdAVHv1IxFIWyR56wgRdvdfKiRi3RhgxuMjdXdPFLgiE8jpfG6LRfwUA1uiACY2hIFuGCDgNZfppm2LrjDoxs5Cn8gE4husFqzdzDjSCyDpKwz0wgAR9hRr7uO92FjcN1KByHwkqrSInW4YiGreoVQgMh/pJrXSp1cGopx3KBeIzEd6Tbf0D8NA1PMO5QKR+UiY9ErbXhmIet4Ri0DaQ61C7gvE/INeCZD+wsBqDDDRF0dqjR+qYijySfpyoP1wGY+q5IjddRhY5dKbKHlTLhAfbCVvPQzCviiBi60+Z4BxuFR3b1fNQiwCac9JbOuXDHxMdUBi33wGCPhV0XE/HkeksQmkPSexrZMEbI8jMPFhJgMMnBpx3LG4ootVIO3hlm2dB/DBuAIUP0Yx8PuS426KM6LYBTIvkq7X58dJjvjSi4GS48Zer7E7XKC8UrCqYFypVwoEjZYMEF4u1dxiEtgSE8j8xP1JBnYlEbj4TAcDBBwtOu7NSaFNVCDtiXsh+wAxfTkpAsSvvgww8fdHas07k0SYuEDmnyRy+EOSVaCh714PW4gqJC0E0nmSyLKUqJKadjuql4+E4UcbgbRFks/eRkSTYQKQtmYxwMx7R+rNn+kSlVYCaQ+3CtZuMA7J1l1dSiQeHP6SdRD2R7kbMArk2gnED8rfTzIIPiSHQESRYv1t+Jud5kD7o9pHHmXEWgpkIUA5TijKVOtpS8U22Sgj1VogMuSKMtV62dJ1SLWcJe0FIkMuvQo7CjQ6D6lSKRAZckVRlnrY0H1IlWqB+ODnzwL2r/CVA7P1qPmgKJ4H42CvZ+UGdRZVu1QMsZYH658q/7JtHWDggNxPElUpKLPzBgETVzruRC+nrCtDt47hVApkIab5S3x8kchNV0lV0Np+H2kBE91eXqNDSKkWyAKB83cm+sMuuVhUh6oCXgRwsJs7AfWA/y4KIwTih+Pfvuu51gEPOCD3uCdTZv495BlgImO5E2Fvk00G8fpejRHIO8OuQnb7ADKfIea9DGxYnwJp0SsDBFxkoskWvJ+Wa81TvdrTqb9xAlkgtzpslVoe9mVAewHeqBPp5mChCx54ciCDw8UZt2JOXAYOsVZLzulNG/LWYMt/muwFMGxiEhOIaYaASXduYHLb+Yv1BPzH5tLYJ8hyBms2LnuTc/sy1B56lWNj2CBHBEx5TJOXUuNwwcHrBoW2aih9I5B35ihlWJnZ7F6A9hBwYz8kudcYGXga4CPeUHOyPAW3V3tp6t93AlmcnLN5a+sAYReDdgG8M02JU4+VjhP4aItxdLTunlHvT08PfS2QJWIZzu7IMO2Ch10gXKVnuhSjYryEDI56xEdHZ5onFHtLhXkRyAppqtqXXM9o3UygG0yfr/jzCgY/Qxh4sui89WwqqjZGkCKQdciubM4VqeXtYGR2MPiatJ8t7J9tS6AXCN4JHsicKJ1rVGOst9S5EoGETFl1EzbyQO5akD9noZ36z13oOMDHwXScWo3ni+dxIWTIfd1cBBJB+v2nDOZQBHEJ7P9J/jGZxfi+oCS/6KtgroL8P6mCQVTl6dB7ckUgvXO4qoX202ZwsCMYjzaDeAhMQyB0/mv/7v8dhgAaAnioY4xmAZ4FYRZMsyCeBfu/Y/53mkWGz/mCoLm5qjwV1CXx/wGqEFgECzaxDAAAAABJRU5ErkJggg==", Jv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAIABJREFUeF7tfQuYHFW17r+qZ/KCCChwlUvS1UlgIsMj6eokPIIHhCNiSNLVYThcvSoBj+IRVFBArshDQU1Q8ImPq0Tk+kkc09WBgJID6gUigenqQGCOBJLp6gkGr0YhhpAwM13rUj0TyCQz07sevbt6pur7hsc36/nv+mfvqtp7LUJ01QwBbeGmw6l5QguYW5iQAPNkBk0moPLDwGQ4P4TJYJoMsPP/AGgniHeCsRPATgJ28sAPgXeCaCcxiiDaxL17Npn3tWyvWRJj3DCN8fwDST+1qKsFTU0tsMszbaIWAloAagH48EAcVDVC2wHexMAmhXkTlNhz6OvblL932qaqqpHAiAhEBHF5g5zS1vn2nt7JKSj26cT0Hga/x6UJqeIEeoSJH4GtPDqueWf+8fbWf0gNoMGdRQSpMoBauns6UXkOg+aAcRoI8xp6zBlPgLCOwB3MsQ4zN3VLQ+dT4+AjggwB8Ox06SyF7IUAnQXg+BqPQb3NPwvwwzYr923IxR+udzBh8x8RZGBEkpniyWA6j4DzAJwUtoGSFM/TDKwB8ZpCNrFeks9QuxnTBEnp3ccz2CHEeQCfFuqRkh4crQOwhkBr8sbUZ6W7D4nDMUeQ1rbOcRPLBy9ltjMAvS8k4xDyMHgtkZLdHXt1RWd7a0/Igw00vDFDkBMWlA4b18wXg7AUQGugKI4dY51grOjppTufuT/+8lhIe9QTZM7izVNspXkpwA4x1PoPKj/fHwMdW/9YPEdgAbRCsXtXdKyesdWzlQZQHLUE0ZYUZ5JNFzMqM4akD3YjjvhVTdR0zxPZo190pOZlXjy6j/suAPBVAOMb4F4ZKsTtBKxghe80VyWea9AcRgx71BEktcSazWV8bGApNTEEg7bONNT5w8Wh6aX5AP+wwZd9u52lF8Xwk/wqdUMIMA8shFFDkBnn8vhDJnRfA/A1ACYFhpAvQ7S9aU/P9Cd+c8w/RzKT1K13E3glQCf4cld/5dcAWrZjz9Rlm39Dr9c/HP8RjAqCaHpXG5FyNTNS/iEJ1MJVpqF+Q8RiatGfWzjWu3I0fIMhQp7ZXm4a09pFcg+zTEMTZM6SUmu5zNcQ4cNhBJmYz8znEn8QjW3Wkq3HxMrllSDMFtUJsxwz7o7FaFnHqnhnmOMcKbYGJQiTplvXAOQspw4NK/imobrG19n7BbKdmUQLa14u43oF4GWmoS4DiF3q1l3c9QDWO+KUXlxsE11NjFPrHUs1/zZw6gZDfbya3P6/n9tmJfr6aCWB57jVDas8E/6oMC/PG4nVYY1xqLgaiiDJdPFGIrqhUQAmKFfmjam3e4l3VrqoxhS6B9zgu4f3S56ZbyrkEjd6waQeOg1BkIFlx60A9HqA5NknY7PSzKd3tCf+4sWGdt6WqdQcu4eBU7zoh1jHACtXNcJW+9ATJJmxdGI45Jge4gEfPjTGd82c+mmvsc/LvHB0r928kij8S0qXOW5hwlWFrGq41JMqHmqCNNqSatiRI9xsZtUveR3Z2YueO0qJTXAe3If94OjVdr31wr7kCiVBGnZJNeLdxl83jcS1Xm/IOW3Fd3IfVjIo1Ed8PeYX2iVX6AjS8Euqke+Qb5iGepXHmwgn6puPbEaTM5Oc4dVGiPVCueQKFUFS6a7LmJTvhngQfYdGRN/KZ+NXeDXklBJC03iHJO/1aiPMesT25fnctO+FJcbQECSpWzcT8MWwAFPLOAj4ft5QL/Pq45S2rW9/vbfsPLif7dVGmPUYuKVgqNeFIcZQECSpWz8l4OIwACIrBgb/qGAkLvXqb1a6eGiMlJUAj8pTkQzcWTDUS7ziE5Re3QmiZaz7wfhAUAk1lB3GHWZO/ZTXmOed+8LbyhOaVzLwfq82Qq1HeMDMqgvqGWNdCaKlrcJo2ZjnfRD526aR+KxX/da2zoMnlA9aOWr/yDA2mDk16RUfv3p1I4imW9sAvMtvAqNBn0C35o341V5z0RZum4SmHufB3anQMhqvl0xDPaoeidWFIJpuNdyuzloPDgFfzRuq55cUZ1xUnPDPHYqzwXFRrWOtl30vu6P9xiqdIJpuOQWVG7lggV/MHf3XAP47mLaDaDvD/rvzb9j8dz8b+ZySRgPLrXQQQYbQxvOmobbIjEsqQTS9dB/6C7WN9qsXwDpmbAWhWyHeijJthaJ0c1PvVrN9+o5aAXDGGb9vevWwhPPgnqmVj/rapTWmEV8oKwZpBEnqxdsI5PkDmSxAPPp5qf+8g7KuDHu9lzMgHv0OrXYjK9rTJeeZ5PxA7YbEGINvLxiJK2WEI4Ugml78AkBfk5GQRB/rQHjQZjxUd0IMk7Smlx4crd9JAL7WNBJfr/V415wgqbR1GRNGxfYRZjwEstdCaX6wsGrKxloPjl/7ySVbTyS7vBbAf/NrK4z6xLg8n1Nrui2lpgRJposXEdGKMILrIqanAL6nrDRln1o15QUXeqEQ1TKla8HsFKcblRczLy3kEj+rVXI1I8jArtxsrQKvvV36NVF5ZT477de191U7D6Pkj9SIADEhU6uDVzUhyMB5jgcb8BTgXys1Z9m+pyOXeKp2t608y6l08Qwm+r08j3XxtAWsnFOLI7y1IYhuOTNHQ50fZ8L3yO79lpk7ZlS1JNMy1gfB+EVdblu5Tg3TUAN/tR04QRrtmCwBWdu2v1VYPe1RueMpx9sofYM4JHi1OL4bKEEa7LljPTPdXsjFfyXnVpXvZbS/xRoK0aCfRwIjSAM9d+wm4Ja8od4i/5aV63F0fwcZFstAn0eCI0hDPHfwaoXsWzqy0zvk3qr93ma3vXRErHdPKyt0HDH+O4gmMfNBYBwEBZPg/DeoGcDfTEN1eod4vjTdcmbGNs8GGlsxsOeRQAjSAM8d20C4xcyqd8gad6ewNpf5ZAaSIBwHcCtARwj4b4/IIYBSFZGgnkd8E8SplcugnP+UamWBfwmOfakWrwD3RqwtzE/ipsPfT4xZICTh1A0mHOYho4gcHkAbToXAab+1gH0ShCmZKT0W4kLSvsrsVBurOeniLJvwbwA5y6Fp1eSr/D4ih08A91d3NpAWsvH5fqrK+yJIqF8hEn3azMZrsgcsmSn+m8J0QYBbyiNyBEyOt8z529TomSDOGtu2+bEQ9uf4BzfF5hXap2wOEvO5+ovvsGF/hGF/NOAuUBE5ghyoA229oig032sTH88ESaatn4ews9MfTEM9M0i85+pbju1D7CMEOMQ4OkjbbzTujMgRMKBDmXM6XRVy6ke8uPJEEKcnIKCE7QNboOSYvbh0nKLgcoAdYtSiW25EDi93rGcd+wIvPRNdE8TpJnvoxNJjIWuYGRg5nFpTveObrqycfiS8zfN4jKwYkaNGwA77RouQf2V3fL7b7ruuCaLppesBvklyfiO5C4wcqbR1CZNzLNj5ZlGzKyJHzaCtZphuMI34l6tJ7ft7VwRJLbFmsw3nwTwkfcgRCDlSmdJpbONLID7HDXgeZCNyeAAtQJXXSMH8/Cp1g6hNVwTR0tb3QfgPUeO1laN1puG84/Z3DRwJXiaB9BE5/A1VMNouy70KE0RbUpwJmwo1emB1mTw9YxrxE10qDRJ32ghw0/hlkopmR+TwM1jB6u6GwklzVeI5EbPCBEnp1nIGPDd/EQlGUKa0p2nX8Z3tra8Kyh8gltK7/pVZWSanLjCtNo24r0JuY3zjoddhHlaPgFvzhipU6lWIIHMWb55iK03O7HF44NG6M/gyFD5VlP1Dme5/EMdP3Ln1LN0Dm99jrk484dVCRA6vyI2ot12x+5Idq2dsrWZdiCAheXNVVhR6f8eq+EPVkhru97K3xvjdURqRw+tIi+iJvdGqSpATFpQOGzeOndlDFXFbKxkGLisY6ve92q/Llnxm3cwlPO10jsjhdaSF9ayeHko+c3/85ZE0qhJES1ufA+Ebwm5rIsg/N42E80Xb01UXcgAoMx/2VC7xitugI3K4RcyjPOPzZk79pmeCVKqF9x3kzB61/HBWLbvn+ppiZz/dPuXP1QSH+n0yU/osMd/uRdevjm1T64bV8f9yYycihxu0fMt27mnalexsb+0ZztKIM0gqU/oEM//Qdxg+DPg5hK/ppTaA67ZnjBgfy+fUn4qmH5FDFKng5Ijo0nw2/iNPBNH04oMA1a9JJNHXzGz8f3mBo97kGIjZNA01JRJ/RA4RlGohw2tNIzHsDophZ5CU3n08w36mFiGJ2aTHTCN+upjsYKmQkKMSFBPdXcjGh91q7bR07ukrO7P0WC2w4GWIA9UhKCfkjanPDmV0WIJoeukLANetZQGDFhaM+Bq3SISxNpfT0riZmm54Inv0i/vmk9StDxHo2hpvjnQL4RiUp2tNIz5kK4WRCPIYwKfVAy0i/nE+m/iEW9+z0kU1RspagI9xq1t7eXqViTcqoCeZOQ7A2SozvfZ+Iw/VERh+X9+QBElmiicT0+PVDddCgrYpCk7vWBXvcmtd052uSuyrnpRbn5H86ECAiU8pZBPr989maILo1s0EeO646g8y+oxpxL/j1ka9l4Ru443kw4UAA7cUDPU6IYJouuWU/j9JdgpOB6dCTv1Xt36TS4rnkE2/dasXyUcI7IPA06ahzqpKkNnp0lkKsef9Tn4gJ1IW57NT73VjY8a5L4w/ZELzH+FUMIyuCAEfCNhMZ2/IxR/e18QBSyxNL34LoM/48ONRlf/TNBKuv7lESyuPcEdqQyDA3zaNxGerEMRy3gdL31rCpFxYyE51WhcLX/0V5cuPC9a8FbYbCY5ZBDpNQz1+WIKkFnW1cEwROmkVMISPmYbq+qNguI4AB4xIZK4uCFDZnpm/d9qmvc4HLbE0vfRRgGvWMXS4jJl4aSHrrlPpGOm9V5ebZGw7pYtMI37XMAQp/gCgSyUDJLxfad+4knppNYEXSY41cjfqEeAfmkbik0MTJG0V5JzTfgtlAq5z2+0pqVvvJWDQ24ZRP25RgnIQYGwwc+qbb0TfXGI5VT7QNP5vcqLYx4sdO9FcPcXVpkhNL94FkKdaq9Lzixw2HgJ9rx9h3tey3Qn8TYKkMt2LmO3VUrNhftDMJd7vxudsveskBcqo6GHuJu9IVh4C+36Pe5MgyUxpGTELlUIJLFTCp9y2RUvqxdsqdXOjK0KgRggw0fJCNn7NoBlE0y2npKi83btEu5oQm7n/FvCRcp6XefHoPu5zZo931AibyGyEgIPAOtNQK1U733oG0S2WjM0vTUP9oBufKb14BYNuc6MTyUYIeEHANNQKNyr/qMcHQgZfXDASK9wEr+nW7wGc4UYnko0Q8ILA3g+G/QSpywN67wwzd8wW0eBT6a65TIrnCoWifiK5CIHKzDGwcbafIOni1UzkVDiXdNGTphGf58ZZsq5nVNxEGsmOBgSI+Zp8LrG8QpCkbv1UUpXzfuwI3zSz6ufdAKnplvOtZNBGMjf6kWyEgBsEnDoCBUO9pEIQ2W+wGDirYKi/Ew04uaT7HLLt6ECUKGCRXBAIVN5kDRCk9DeA5VRuJ9plZuMHu8kgpXfdwlA81cdy4yeSDQMCtA3g5/sj4aMAOrY+UdF204gfQXXYYrLGNNSFbpLW9OIjALneDu/GRyRbdwTabaYf7X+iL6mXzlMIH2dmV/dMINn0vX4EVfrzMTsfCeVcjK+YOfV6UWez0sVDY0QjVuAWtRXJhRaBETtwOZ2VD5lQcpbYUl/xE9F8SunWxQwI14/1C7HbWrtaupgGkeHXb6QfUgSIdpVt+/incglrpAhnLdl6TMwuO6/5D5OVCQGXkJaxvgLGAeVOahVEmTlRDYx9facypduZedA54VrFFtmtAwJEPzOz8aUinpMZ69fEWCIiG4gM4WaSXKThZdNQ3+4m+KRefJJAc9zoRLKNgwAxn5nPJf4gEnFKL17IoF+KyAYjw98myd9Afmca6llugtcypVfBfJAbnUi2cRBwQxBt8dYToJQ3ysrO+RZCUsvuM75p5sQ/EPbX2qWiLEAiP/IRcEWQhdsOR1OPzEN97c5D+m8YcHVoySuMBL4ybySEuz2lllgfYBv3e/UX6YUfAWKcn8+pq0Qj1TJWDxjNovJ+5Aj4rTODSDsHQkQfyWfjd4sGndStqwhYLiofyTUeAkR8aT6bGLbD0/4ZaRmrBMZUSZmucwjy9EAp/pr7JBsL8qvVB0QdaZnSCjBfJCofyTUeAm6Ldmh68QmA5krKdKPzmrcLjIQMh8T2vHxu2pOivqIv6KJINa4cA7cXDPVK0Qw0vZgDaLGovC85QpE0Xd4+LEWh6W76fmi6ZUZFqX0NceiVmXF3IacKV6jRdJm122i7s8TaA2C8FCSbyoea7dN3iPrSdOtPAGaKykdyDYgA4QEzqy4QjVzTS9e/0fnxJlF5n3KvSyXI3nO+okFrerEboCmi8pFcIyLg7vBcUi/9O4F/LClThyDylljuCVLaDnBUwUTS3VAnN12moQr3anR29xL4PjmxOkssiQ/p7gli7QYwQQ4YkZc6IbDDNNRDRX2n0ta5TBB+Eypqd0i5/od0ea953ROk1AdwzFeSkXLIEaCyacSbRINMpkv/k4iFv6WJ2h1GbqPUD4XuCVL8J0CTfSYZqYcaAd5pGom3iYaYTBc/S0TCuzFE7Q4jt07qVhP3BLFeAvBOn0lG6uFG4C+mob5LNESZxzP2bjX5FYA20QD9yLknSGkzwMIPcH5ii3TrhQBtMY34DFHvWsa6A4w3+3eI6nmUa5e73d31d5DiRoBO8JhcpNYQCPAzppE4UTRUTS+uBOgCUXk/cgPb3eV1tfXwJf1xACf7STLSDT0C601DPUU0ypRuPeSUjRKV9yfH35Z65Nb9XixrDQDhr6z+wIi064IA4wEz5+ZLurUBwCwpsTpHbmUWbXC9m1cvfh2gSp+G6BqdCBBwa95QhfvSaHqpG2ApuysqRRtklv3xcB7kQwT8n9F5a0RZOQgw89JCTrzDsaaXdgE8SQZ6lbI/MgvHuT1RGLVbk3Eb1NeHQsrcjuzUDpEotIz1LjC2icgGIuMUjnMMSduP5fJMelvbr2JdfXP7Akk2MhJKBHp37Th449qTdokEp2WsBWA4z6USroHSo/0EkXbs1n1VE93qBHCcBEQiF/IRsExDFT6sp2Ws68D4iqQw3ypeLbH0j+u6WJpuOc8gH5IESuRGLgKGaagZUZeabmUB6KLyfuQGtT+Q2UDHdWXFtHUZE77rJ9lIN6wIKJ80jak/FI1O0y2nPGlcVN6P3KAGOjJbsLmtzTtnsXWqrWCdn2Qj3XAiYNvUumF1/L9EotPO2zIVzbGSiGwQMoNbsC3qauGY8lwQhqvacFndvbWt8+AJfQe/Em17r4psowlsMQ1VeA9WcnFpISl8r6wkBzXxHHhQl9UG2nV/kGTGWkeMU2WBE/mRgADjp2ZO/ZioJy3T9SWw8mVReb9yg9pAO8ZSeun/Mvg9fg0L6L9qGqqrMx5yK1kIZBCJ+EaAGB/L51ThthsyK7sT6JG8Ef8XJ8nKd5DKDCKxDYJi47SO1eofRVFOZUrnM3O7qHwkF3oEbLByrJmbKtwGXMuUXgCz8JLMFwKEm82s+qXBBEl3vw9kP+jLsKgy4Xozq7p6ny3zaLBoGpGcNwQYdG/BiAsXf9MWF+dBofXevHnQYuUcMzd17SCCnNLW+faevoP+7sGcBxV+1DQSrpZzKd36IgM3e3AWqYQMAWb+RCGXEC7dk0wXbySiG2SlMa5p1zseb2/9xyCCVJZZaWs9CPOkBNJUjpvt07tFfSUXbZ1BsfKz0orciQYWyblEgF61y9Sy4d6pwnuqtIy1HizpvmQ8YebUN88gvfkMUiGIbn0TgHCdVJfI7CfOF5lG4i43NjS9dBfAwmUq3diOZOUgQMwr87nEhaLepC+vgNtMQ/3c3vgGEURmiyu3QFUILHWzmugQRnJuEGCmDxdyceEjDLKXVwT+H3kjcc+QBNHS3dNB9mY3CfuQfV1Reo7rWHVslxsbmm49DOC9bnQi2dAg8LR5UjyJG8kWjUjq8soJipUZ+75dGzSDDCyzngFwvGgCPuU+ZxrqbW5spPTSRxjsamnmxn4kW0sE6DOmEf+OqIc6LK+eNQ11UJGQIQgir4gDgMdMQz1dFLC9cppuPQXgJLd6kXw9EaAX9jRNTHa2H/mqaBSyl1cAf9s0EoNajh9AkNnp0lkK8UOiSfiXo9NNI+60gRO+Unr3FQzb1cwjbDwSrBECdK1pxL/uxrjs5ZXNdPaGXNxZwr95HUCQgWWWzL/Qg94aiAA4V3/xHWX0OTEeLSIfydQdgT/3oi+50ZjxV9FI6rC8eto01AOqpQxJkKRu3UzAF0WT8SdH20CcMrOqU2ZU+JJ5hkU4qEhwGAQ8zR4/AeMSWZAycEvBUK/b39/QBMkUTyYmp2iblIuZbyrkEje6dSbxqLDb0CL5txAo7NjTe+rm3xzzuigoMivt7I2JiU8pZBMHbGcZkiD9y6zSYwCfJpqUPzmPs0imexGzvdqf70i7lgi4/e5RuffS1i9A+GAt4xpsm9aZRnz+UP5GIsgXAP6arCC9ziISz9PLgmLU+HG7KdFJfM6S0tm2zf8pF4Thl4DDEiSldx/PsJ1vIpIuj7NI5TRkzJntDpcUaORGEAFiPjOfS/xBULwiJrMww964CMoJeWOqs8/vgGtYgvQHW3wQoPe5SdCPrNdZREt3XQ5ShD9A+Ykx0hVDgImXF7IJV2VjU5muRcyK5CUzrzWNxDnDZTUiQVKZ0ieYWbjqhBh0I0ptj6F82pPG9Ofd2pK/bnUb4ViS59WmkUi7zVjTrd8BONOtnh95Iro0n43/yBNBWts6x03oO6gAoNVPEO506X+bRvzj7nSAuQutRDmGh0EQLkTm1kckL4TAn2yyz92QneaqAommFy8F6AdCHoIT6tzTtCvZ2d7a44kglWVW2vocCN8ILqbqltxWgd9rUVtsfRAKflHdQyRRIwRssH2umZtWOY0nep2woHTYuHHsfFZoEdUJRI7xeTOnOkc8hr1GXGI5WgPBO7OIGkhQYkZ+bxqqpx27Wrr0HRBfLuYmkgoSAWJcns+p33NrU0tbXwahcgZc4mX19FDymfvjL/siSGUW0UvXA3yTxOCdfcefMY2EpwfvpG49QMC5cuMd294YuL1gqK4P281ZUmq17crs4arSjX+06QbTiFctI1R1BnECmbN48xRbaXJmEYmvUnkrOHamm8oX+4KWSlsdTEj5BzKyUA0BJlpVyMbPryY31O81vXgXQLJPiW5X7L5kx+oZW6vFLEQQx0hKt5YzcFU1g8H+3tvbkL0xyKzlGmzejWONQR0FIz7XS8RJ3foUAa6XZF587avjpquVMEG0JcWZsMmZRSb6DdCN/nCbyERtaLrl9J6Q0pFINKZRJPf/TEP11Mc+le6ay0QPASR5aYXdUDhprkoIldoVJkjlWSRtfR+E/5A9wPufE3brX9OtVwAc4lYvkh8RgT2moXr+Yym3W+0+eTDuMHPqp0TH1hVBUkus2WzDOdwk+y/yNoJyznDbAUSS1fSo57oIToIyz5mG+m5B2QPEtEzpq2C+1qu+D73XSMH8/CrV6ZQrdLkiSGUWqcsbLcfzyFsCRLLV9KittAhOI8kQ8Nu8oXp+Q5jKdJ3PrNSpjKzYm6v9nlfcQTbjXB5/6MTSY8zy3xARsCJvqBe7i3iwtKZbvwLQ5sfGGNZtNw31Aq/5J3XrvQTO1eG5A0TIv7I7Pn/zb0j4XIqTp+sZpH8W6WoDFOdGq8fl+oju/kEm09bPifDhegTfuD7556aR+KjX+Oed+8Lb+iY0b5TVIerAOO0LTGOa65nLE0Ec5/W8yQjKlXlj6u1eB8vRS+nFKxi0DECzHztjQPfvAF9nGglfm1Y13XLW/Qec+ZaBHzPuLuRUT99aPBNk4Auo88B+qIwk9/dhA6duMFRfx4JT6eIZTMoygD29x69H3nJ90hob5es2GNOe9uNXS5d+C+Jht5T7sS2g+4qi0PyOVXGnW7LryzNB+pdaxS8AJO3U4f7Z7e0C5DrrfRS0ti2HcF/TMgJ/wo+d0aZLwHV5Q73Fb17JdOkGInZdb8Cv37f0+VrTSLgqN7Svb18EeWN/FiUzpcfq2R4tht2HP2m823fbBk0vtRH4CgZOCW5wGs8Sg+9VSFmez8Z9N06VX/htMN5M+GMh65w1J8/tBX0SpLKWX8ygXD1vhbISO/apVVNeCCKGgaJ0zqa7sVZzaxMBy/OGemcQONabHE4OBE7njYSvE4q+CeIEEgYwhivb4mWw52VePLqXe68k0BVe9BtNh4mWU++eW837WrYHEbumW7cC+HwQtrza8Hp8e39/gRCk/3nEygLQvSYUhB4pWJBfpT4QhC3HhrNzwGZcTAzn24vs3QNBpTGsHSL+sW0rPy7k4mZQzlJ68U4GLQ3Knkc7hmmoGY+6g9SCI0h/6wSnx+H0IALzbIPw72ZW/Yln/SEUU4u6Wuym2ABRGr96Si2IkWzbOgN95e+E4BzOFvT3GBRuEDrSvRIYQSpLrYylE8OZSep6MfPyQs5dRQ2RgOcs/vOUMvVcooAWNOBZkx1EvDLoGaMy06atcxn4DghyutCOMFhMyBSyqiEyniIygRKkQhLJDReHS5KAbG9T7NNPt0/5swgQbmWSi7tPB5XPI1IWACyxqIXLSAkPEPhep4ib2/rHIp60TOlyMHs6+Sli341MUM8d+/oMnCCO8TA8j1SSJGwkmz/jtniZm0Gp/FFYXDxHIbyfiZxeJ5pb/UDlCXsYKCiMBwBltZ8d0NXi0tKWM2uE5fx/YM8dtSdIWJ5H+jPdDdAX3HQ2qnZjjPT7WemiqgBnkKL8C5jPqH2xC34eIBMMk8DmePt1c929M3f6yaGabnJx1+mkKE6NAqk1rEaIK9DnjpoTpPJXNSTPI/sk+2sGri8Y6p+q3QBB/n5220tHxHr3tLJCx8FGKwivKip6AAAGZ0lEQVTH9S/J6AiXfv5KoGcYeBbEz4Jiz/ROan52493vdE5MSru0dPFaEDnFDpqkOa3iKOjnDikEcZyk0l2XMSnfDQuQAP7CzDe4aWJfq9i1j3Nz+a/WQdzXcxCNnzSpudx3EJqo/1VyH7/WG2vaxa+/9ho1jdsVO1LdZf6YemsVi4jd2Yu6UxQrf5lAns+CiPhxK0NsX57PTavZufaaPIPsm6TcZjxi8Dq7O9+ocHb9U7mEJaYxtqWSmdJnidmZNWSfHx8ReL/1CkRGteYEqSy3dOunhMrHtjBd2wi4o7lp1w8eb2/9R5gCC0ssml78KIg+Cca8sMS0Nw4G7iwYas07UEkhiJOUlrHuB+MDYQMagPNB6Y5xTbEfPN4+ZXcI45MeUjLddQGR8kkAzkuG8F2EB8ysukBGYNIIUiFJ2iqAMFtGYh58PAvCD8yseocH3VGhklxcWgiFPxmCr+HD48nYYObUpCzApRKkQhLd2gbgXbIS9ODnWQLuYVbuCWq7gocYpKmcqG8+shnNFxL4wgbY6v+SaahHSQPH65l0vwFquuV5f75f3y70d+9DFFfVyl34qJvobN06RQFfCNCFbywxj6xbIC4cB3FAzoW7iqj0GWRvgJpubQJwrNuA6yFPoEcYWAXFXitaka8ecVbzOXtR91FKrLzojS/ti8L2urZK7M+bhiq3NcJAQHUjSP9yq3QfwOdVG9iQ/f53To0uhfFgRy7xVMhiOyCcU9q2Tny9115IxIsAOD+helVbHT9aYxrxhdXlaiNRV4I4KSX14m2NejCJgMdt5rUgJU99zevN+44K5MCR36Geky7OYlJOtInnkM2LQDTVr8166DP49oKRcN1SIchY606Q/pmkvsUfAgTUJGLTtpVHWSk/6rYNmds4tI/nm+lvR7Yw2ScSaI7NPJuAEwC83a2t8Mn7K7YQVD6hIIiTTCptXcaEMG1LCQLjHQBKRFQCc7cNlEDcjXJsGzN2g/i1Zpt3c5l3K9z3Wt9fd+yu7AV++bBJKMcmKUQT2aZJ4L5JAE2CghabqYUILWDMBDAtiCDDZsNrp6pa5BEaglSWW+niRUS0ohaJRjYbAwFmXlrIJX4WlmhDRZAKSfp3ATuH/ut7dDcsIzR24tjChKuCPA0YBHShI0jlmaT/PIlDkroWgQgC4MiGEAIGWLkqjB9mQ0mQvZCG5fiu0BBHQp4QqMUxWU+BDKMUaoJES64ghzp0tkK5pNofpdATJFpyhe7GDiKg0C6pGpIg0ZIriHsyHDbCvqRqaII4wTu1gG2iq+tZMDsct1pjReEUklaYl/utlSs764ZYYh0ICpOmW9cAdE29+pPIHqgG9vcKwMve6Ii7zE+V9Xrl36AE6YfLaeJTLvM1UTu1et0+I/t1zv7HYrTMa/OaMGTV0ATZC6DTM5FIuboejUXDMIhhi8FpmMlsL/fSEzB0uYQtIK/xON13D5nQfQ3AzrJr1FVi94qLZL3XAFq2Y8/UZW67yUqOU9jdqJhB9s3WaVnAZXwMBKcE/0RhJCJBPwjsBmMFxfCT/CrVadY5aq5RR5A3l11LijPJposZFaIcPmpGLFyJbHd617PCdzbyScuRIB21BNmb9JzFm6fYSvNSgB2iqOG6vxo2GgugFYrdu6Jj9YytDZuFQOCjniB7MThhQemwcc188cDSK7ztCgQGrY4inc5SqqeX7nzm/vjLdYxDmusxQ5C9iLa2dY6bWD54KbOdAeh90pBuaEe8lkjJ7o69uqKzvbWnoVNxGfyYI8igB3q9+3juLxpxHsCnucRulIuT0wZ6DYHW1LLHSNhBHNME2XdwkpniyWA6jypkwUlhH7gaxfc0A2tAvKaQTayvkY+GMhsRZIjhmp0unaWQvRCgswGM9ueVToAfslm5b0Mu/nBD3b0Sgo0IUgVkp8Mtx2InA7Yzw8wLcW1hsduFsQHETwDKeiqX1+fvneYU8IuuYRCICOLy1tAWbjqcmieeaoNPI648t4T92WUdE61TQOu4d/cfzftaQlG7yyXsdROPCBIA9M4sg6amFtjlmTZRCwEtALUAsnqq03aANzGwSWHeBCX2HPr6NkWzg//BjQjiH8NhLfTPNhNawNzChASYJzNoMgGVH+4vAzoZhMlgmgzwQFlQ2gninWA4zTh3ErCTB34IvBNEO4lRBNEm7t2zKZoVajeI/x8xLuvaooQaJQAAAABJRU5ErkJggg==", $v = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [i, s] of e)
    t[i] = s;
  return t;
}, _a = (n) => (pu("data-v-d58c4a91"), n = n(), _u(), n), eE = {
  key: 0,
  class: "flex flex-justify-between flex-items-center"
}, tE = { class: "mb-3 flex-shrink flex" }, nE = {
  key: 1,
  class: "details rounded-2 overflow-hidden px-5 bg-dark-100 bg-opacity-90"
}, iE = { class: "text-[15px] text-white line-clamp-1" }, sE = { class: "des flex flex-justify-between" }, rE = /* @__PURE__ */ _a(() => /* @__PURE__ */ J("span", { class: "" }, "时间", -1)), oE = { class: "" }, aE = { class: "des flex flex-justify-between" }, lE = /* @__PURE__ */ _a(() => /* @__PURE__ */ J("span", { class: "" }, "经度", -1)), hE = { class: "" }, cE = { class: "des flex flex-justify-between" }, uE = /* @__PURE__ */ _a(() => /* @__PURE__ */ J("span", { class: "" }, "维度", -1)), dE = { class: "" }, fE = {
  __name: "index",
  props: {
    streams: {
      type: Array,
      value: () => []
    },
    colors: {
      type: Array,
      value: () => []
    },
    showHeader: {
      type: Boolean,
      value: !0
    },
    showDetails: {
      type: Boolean,
      value: !0
    },
    source: String,
    height: String
  },
  setup(n, { expose: e }) {
    const t = re(), i = re(), s = re([]), r = re([]), o = re([]), a = re(!1), l = re([]);
    let h = {}, c = null;
    const u = n, d = () => {
      c == null || c.startMove(r.value);
    }, f = () => {
      c == null || c.stopMove();
    }, g = () => {
      p();
    }, m = () => {
      t.value = new lv({
        // 设置地图图层
        layers: [
          // 创建一个使用Open Street Map地图源的瓦片图层
          new Z_({ source: u.source || new gy() })
        ],
        // 设置显示地图的视图
        view: new ct({
          // 地图中心点
          center: Vo([121.480248, 31.036276], "EPSG:4326", "EPSG:3857"),
          zoom: 10
          // 层级显示为10
        }),
        // ref="mapRef"作为地图的容器
        target: i.value
      }), c = new Hv(t.value, a, l);
    }, p = () => {
      let v = x(s.value, r.value);
      c.resetMove(v, r.value);
    }, _ = () => {
      h = {}, r.value.map((v) => {
        let E = l.value[v.rybh];
        E != null && E.rybh && (h[E.rybh] = E);
      }), l.value = h;
    }, y = () => {
      _(), p();
    }, x = (v, E) => {
      let w = [];
      return E.forEach((I) => {
        let C = v.filter((R) => I.rybh === R.rybh);
        C.length && w.push(C[0].streams);
      }), w;
    };
    return mu(() => {
      c == null || c.stopMove();
    }), Xs(async () => {
      const { streams: v, colors: E } = u;
      if (m(), !v && !Array.isArray(v))
        return;
      let w = v || [], I = E || [
        [220, 30, 60, 0.9],
        [255, 165, 0, 0.9],
        [255, 255, 0, 0.9],
        [0, 128, 0, 0.9],
        [0, 0, 255, 0.9],
        [0, 255, 255, 0.9]
      ], C = w.map((z, F) => {
        let { hphm: B, rybh: V, sgid: X } = z;
        return {
          hphm: B,
          rybh: V,
          sgid: X,
          color: I[F]
        };
      });
      s.value = w, o.value = C;
      const R = x(w, []);
      c.addTrack(R, r.value);
    }), e({ startAnimate: d, stopAnimate: f, resetAnimate: g }), (v, E) => (j(), ee("div", {
      class: "track-area",
      style: ei(n.height)
    }, [
      n.showHeader ? Cn((j(), ee("div", eE, [
        J("div", tE, [
          a.value ? (j(), $t(T(Mr), {
            key: 1,
            class: "w-9 mr-2",
            onClick: f,
            src: T(qv)
          }, null, 8, ["src"])) : (j(), $t(T(Mr), {
            key: 0,
            class: "w-9 mr-2",
            onClick: d,
            src: T(Qv)
          }, null, 8, ["src"])),
          Ee(T(Mr), {
            class: "w-9 mr-2",
            onClick: g,
            src: T(Jv)
          }, null, 8, ["src"])
        ]),
        J("div", null, [
          Ee(T(Xp), {
            modelValue: r.value,
            "onUpdate:modelValue": E[0] || (E[0] = (w) => r.value = w),
            onChange: y
          }, {
            default: Fe(() => [
              (j(!0), ee(An, null, Hr(o.value, (w, I) => (j(), $t(T(Wp), {
                disabled: a.value,
                key: I,
                label: w
              }, {
                default: Fe(() => [
                  J("span", null, jt(w.hphm || `车辆${I + 1}`), 1),
                  J("span", {
                    class: "trackColor",
                    style: ei(`background: rgba(${w.color})`)
                  }, null, 4)
                ]),
                _: 2
              }, 1032, ["disabled", "label"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])
      ], 512)), [
        [Qr, x(s.value, [])]
      ]) : Pe("", !0),
      n.showDetails ? Cn((j(), ee("div", nE, [
        (j(!0), ee(An, null, Hr(l.value, (w, I) => (j(), ee("div", {
          class: "w-60 text-[14px] text-stone-400 py-3 line-height-7 dash-border",
          key: I
        }, [
          J("div", iE, jt((w == null ? void 0 : w.hphm) || "-"), 1),
          J("div", sE, [
            rE,
            J("span", oE, jt((w == null ? void 0 : w.timestamp) || "0"), 1)
          ]),
          J("div", aE, [
            lE,
            J("span", hE, jt((w == null ? void 0 : w.longitude) || "0"), 1)
          ]),
          J("div", cE, [
            uE,
            J("span", dE, jt((w == null ? void 0 : w.latitude) || "0"), 1)
          ])
        ]))), 128))
      ], 512)), [
        [Qr, Object.keys(l.value).length]
      ]) : Pe("", !0),
      J("div", {
        ref_key: "mapRef",
        ref: i,
        class: "w-full h-full"
      }, null, 512)
    ], 4));
  }
}, gE = /* @__PURE__ */ $v(fE, [["__scopeId", "data-v-d58c4a91"]]), mE = function(n) {
  n.component("vue3OpenlayerTrack", gE);
}, vE = { install: mE };
export {
  vE as default,
  gE as vue3OpenlayerTrack
};

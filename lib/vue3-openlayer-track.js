var ul = Object.defineProperty;
var dl = (n, t, e) => t in n ? ul(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var Xr = (n, t, e) => (dl(n, typeof t != "symbol" ? t + "" : t, e), e);
import { ref as We, onBeforeUnmount as fl, onMounted as gl, resolveComponent as _s, openBlock as he, createElementBlock as ti, normalizeStyle as Yr, withDirectives as Kr, createElementVNode as Ct, createBlock as ps, unref as ys, createVNode as Ur, withCtx as Vr, Fragment as Zr, renderList as Hr, toDisplayString as Pi, vShow as jr, createCommentVNode as Qr, pushScopeId as ml, popScopeId as _l } from "vue";
class Ee {
  /**
   * @param {string} type Type.
   */
  constructor(t) {
    this.propagationStopped, this.defaultPrevented, this.type = t, this.target = null;
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
const yi = {
  /**
   * Triggered when a property is changed.
   * @event module:ol/Object.ObjectEvent#propertychange
   * @api
   */
  PROPERTYCHANGE: "propertychange"
};
class tr {
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
function pl(n, t, e) {
  let i, s;
  e = e || Oe;
  let r = 0, o = n.length, a = !1;
  for (; r < o; )
    i = r + (o - r >> 1), s = +e(n[i], t), s < 0 ? r = i + 1 : (o = i, a = !s);
  return a ? r : ~r;
}
function Oe(n, t) {
  return n > t ? 1 : n < t ? -1 : 0;
}
function er(n, t, e) {
  if (n[0] <= t)
    return 0;
  const i = n.length;
  if (t <= n[i - 1])
    return i - 1;
  if (typeof e == "function") {
    for (let s = 1; s < i; ++s) {
      const r = n[s];
      if (r === t)
        return s;
      if (r < t)
        return e(t, n[s - 1], r) > 0 ? s - 1 : s;
    }
    return i - 1;
  }
  if (e > 0) {
    for (let s = 1; s < i; ++s)
      if (n[s] < t)
        return s - 1;
    return i - 1;
  }
  if (e < 0) {
    for (let s = 1; s < i; ++s)
      if (n[s] <= t)
        return s;
    return i - 1;
  }
  for (let s = 1; s < i; ++s) {
    if (n[s] == t)
      return s;
    if (n[s] < t)
      return n[s - 1] - t < t - n[s] ? s - 1 : s;
  }
  return i - 1;
}
function yl(n, t, e) {
  for (; t < e; ) {
    const i = n[t];
    n[t] = n[e], n[e] = i, ++t, --e;
  }
}
function Yn(n, t) {
  const e = Array.isArray(t) ? t : [t], i = e.length;
  for (let s = 0; s < i; s++)
    n[n.length] = e[s];
}
function Ne(n, t) {
  const e = n.length;
  if (e !== t.length)
    return !1;
  for (let i = 0; i < e; i++)
    if (n[i] !== t[i])
      return !1;
  return !0;
}
function El(n, t, e) {
  const i = t || Oe;
  return n.every(function(s, r) {
    if (r === 0)
      return !0;
    const o = i(n[r - 1], s);
    return !(o > 0 || e && o === 0);
  });
}
function Ki() {
  return !0;
}
function Kn() {
  return !1;
}
function Ei() {
}
function Qo(n) {
  let t = !1, e, i, s;
  return function() {
    const r = Array.prototype.slice.call(arguments);
    return (!t || this !== s || !Ne(r, i)) && (t = !0, s = this, i = r, e = n.apply(this, arguments)), e;
  };
}
function on(n) {
  for (const t in n)
    delete n[t];
}
function xi(n) {
  let t;
  for (t in n)
    return !1;
  return !t;
}
class Un extends tr {
  /**
   * @param {*} [target] Default event target for dispatched events.
   */
  constructor(t) {
    super(), this.eventTarget_ = t, this.pendingRemovals_ = null, this.dispatching_ = null, this.listeners_ = null;
  }
  /**
   * @param {string} type Type.
   * @param {import("../events.js").Listener} listener Listener.
   */
  addEventListener(t, e) {
    if (!t || !e)
      return;
    const i = this.listeners_ || (this.listeners_ = {}), s = i[t] || (i[t] = []);
    s.includes(e) || s.push(e);
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
  dispatchEvent(t) {
    const e = typeof t == "string", i = e ? t : t.type, s = this.listeners_ && this.listeners_[i];
    if (!s)
      return;
    const r = e ? new Ee(t) : (
      /** @type {Event} */
      t
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
        this.removeEventListener(i, Ei);
      delete o[i];
    }
    return l;
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    this.listeners_ && on(this.listeners_);
  }
  /**
   * Get the listeners for a specified event type. Listeners are returned in the
   * order that they will be called in.
   *
   * @param {string} type Type.
   * @return {Array<import("../events.js").Listener>|undefined} Listeners.
   */
  getListeners(t) {
    return this.listeners_ && this.listeners_[t] || void 0;
  }
  /**
   * @param {string} [type] Type. If not provided,
   *     `true` will be returned if this event target has any listeners.
   * @return {boolean} Has listeners.
   */
  hasListener(t) {
    return this.listeners_ ? t ? t in this.listeners_ : Object.keys(this.listeners_).length > 0 : !1;
  }
  /**
   * @param {string} type Type.
   * @param {import("../events.js").Listener} listener Listener.
   */
  removeEventListener(t, e) {
    if (!this.listeners_)
      return;
    const i = this.listeners_[t];
    if (!i)
      return;
    const s = i.indexOf(e);
    s !== -1 && (this.pendingRemovals_ && t in this.pendingRemovals_ ? (i[s] = Ei, ++this.pendingRemovals_[t]) : (i.splice(s, 1), i.length === 0 && delete this.listeners_[t]));
  }
}
const N = {
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
function j(n, t, e, i, s) {
  if (i && i !== n && (e = e.bind(i)), s) {
    const o = e;
    e = function() {
      n.removeEventListener(t, e), o.apply(this, arguments);
    };
  }
  const r = {
    target: n,
    type: t,
    listener: e
  };
  return n.addEventListener(t, e), r;
}
function Dn(n, t, e, i) {
  return j(n, t, e, i, !0);
}
function it(n) {
  n && n.target && (n.target.removeEventListener(n.type, n.listener), on(n));
}
class an extends Un {
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
    ++this.revision_, this.dispatchEvent(N.CHANGE);
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
  onInternal(t, e) {
    if (Array.isArray(t)) {
      const i = t.length, s = new Array(i);
      for (let r = 0; r < i; ++r)
        s[r] = j(this, t[r], e);
      return s;
    }
    return j(
      this,
      /** @type {string} */
      t,
      e
    );
  }
  /**
   * @param {string|Array<string>} type Type.
   * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
   * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Event key.
   * @protected
   */
  onceInternal(t, e) {
    let i;
    if (Array.isArray(t)) {
      const s = t.length;
      i = new Array(s);
      for (let r = 0; r < s; ++r)
        i[r] = Dn(this, t[r], e);
    } else
      i = Dn(
        this,
        /** @type {string} */
        t,
        e
      );
    return e.ol_key = i, i;
  }
  /**
   * Unlisten for a certain type of event.
   * @param {string|Array<string>} type Type.
   * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
   * @protected
   */
  unInternal(t, e) {
    const i = (
      /** @type {Object} */
      e.ol_key
    );
    if (i)
      xl(i);
    else if (Array.isArray(t))
      for (let s = 0, r = t.length; s < r; ++s)
        this.removeEventListener(t[s], e);
    else
      this.removeEventListener(t, e);
  }
}
an.prototype.on;
an.prototype.once;
an.prototype.un;
function xl(n) {
  if (Array.isArray(n))
    for (let t = 0, e = n.length; t < e; ++t)
      it(n[t]);
  else
    it(
      /** @type {import("./events.js").EventsKey} */
      n
    );
}
function H() {
  throw new Error("Unimplemented abstract method.");
}
let Cl = 0;
function Q(n) {
  return n.ol_uid || (n.ol_uid = String(++Cl));
}
class qr extends Ee {
  /**
   * @param {string} type The event type.
   * @param {string} key The property name.
   * @param {*} oldValue The old value for `key`.
   */
  constructor(t, e, i) {
    super(t), this.key = e, this.oldValue = i;
  }
}
class se extends an {
  /**
   * @param {Object<string, *>} [values] An object with key-value pairs.
   */
  constructor(t) {
    super(), this.on, this.once, this.un, Q(this), this.values_ = null, t !== void 0 && this.setProperties(t);
  }
  /**
   * Gets a value.
   * @param {string} key Key name.
   * @return {*} Value.
   * @api
   */
  get(t) {
    let e;
    return this.values_ && this.values_.hasOwnProperty(t) && (e = this.values_[t]), e;
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
  notify(t, e) {
    let i;
    i = `change:${t}`, this.hasListener(i) && this.dispatchEvent(new qr(i, t, e)), i = yi.PROPERTYCHANGE, this.hasListener(i) && this.dispatchEvent(new qr(i, t, e));
  }
  /**
   * @param {string} key Key name.
   * @param {import("./events.js").Listener} listener Listener.
   */
  addChangeListener(t, e) {
    this.addEventListener(`change:${t}`, e);
  }
  /**
   * @param {string} key Key name.
   * @param {import("./events.js").Listener} listener Listener.
   */
  removeChangeListener(t, e) {
    this.removeEventListener(`change:${t}`, e);
  }
  /**
   * Sets a value.
   * @param {string} key Key name.
   * @param {*} value Value.
   * @param {boolean} [silent] Update without triggering an event.
   * @api
   */
  set(t, e, i) {
    const s = this.values_ || (this.values_ = {});
    if (i)
      s[t] = e;
    else {
      const r = s[t];
      s[t] = e, r !== e && this.notify(t, r);
    }
  }
  /**
   * Sets a collection of key-value pairs.  Note that this changes any existing
   * properties and adds new ones (it does not remove any existing properties).
   * @param {Object<string, *>} values Values.
   * @param {boolean} [silent] Update without triggering an event.
   * @api
   */
  setProperties(t, e) {
    for (const i in t)
      this.set(i, t[i], e);
  }
  /**
   * Apply any properties from another object without triggering events.
   * @param {BaseObject} source The source object.
   * @protected
   */
  applyProperties(t) {
    t.values_ && Object.assign(this.values_ || (this.values_ = {}), t.values_);
  }
  /**
   * Unsets a property.
   * @param {string} key Key name.
   * @param {boolean} [silent] Unset without triggering an event.
   * @api
   */
  unset(t, e) {
    if (this.values_ && t in this.values_) {
      const i = this.values_[t];
      delete this.values_[t], xi(this.values_) && (this.values_ = null), e || this.notify(t, i);
    }
  }
}
const $ = {
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
function U(n, t) {
  if (!n)
    throw new Error(t);
}
function lt(n, t, e) {
  return Math.min(Math.max(n, t), e);
}
function wl(n, t, e, i, s, r) {
  const o = s - e, a = r - i;
  if (o !== 0 || a !== 0) {
    const l = ((n - e) * o + (t - i) * a) / (o * o + a * a);
    l > 1 ? (e = s, i = r) : l > 0 && (e += o * l, i += a * l);
  }
  return gi(n, t, e, i);
}
function gi(n, t, e, i) {
  const s = e - n, r = i - t;
  return s * s + r * r;
}
function Al(n) {
  const t = n.length;
  for (let i = 0; i < t; i++) {
    let s = i, r = Math.abs(n[i][i]);
    for (let a = i + 1; a < t; a++) {
      const l = Math.abs(n[a][i]);
      l > r && (r = l, s = a);
    }
    if (r === 0)
      return null;
    const o = n[s];
    n[s] = n[i], n[i] = o;
    for (let a = i + 1; a < t; a++) {
      const l = -n[a][i] / n[i][i];
      for (let h = i; h < t + 1; h++)
        i == h ? n[a][h] = 0 : n[a][h] += l * n[i][h];
    }
  }
  const e = new Array(t);
  for (let i = t - 1; i >= 0; i--) {
    e[i] = n[i][t] / n[i][i];
    for (let s = i - 1; s >= 0; s--)
      n[s][t] -= n[s][i] * e[i];
  }
  return e;
}
function bn(n) {
  return n * Math.PI / 180;
}
function mi(n, t) {
  const e = n % t;
  return e * t < 0 ? e + t : e;
}
function bt(n, t, e) {
  return n + e * (t - n);
}
function ir(n, t) {
  const e = Math.pow(10, t);
  return Math.round(n * e) / e;
}
function xn(n, t) {
  return Math.floor(ir(n, t));
}
function Cn(n, t) {
  return Math.ceil(ir(n, t));
}
class qo extends se {
  /**
   * @param {Options} options Layer options.
   */
  constructor(t) {
    super(), this.on, this.once, this.un, this.background_ = t.background;
    const e = Object.assign({}, t);
    typeof t.properties == "object" && (delete e.properties, Object.assign(e, t.properties)), e[$.OPACITY] = t.opacity !== void 0 ? t.opacity : 1, U(
      typeof e[$.OPACITY] == "number",
      "Layer opacity must be a number"
    ), e[$.VISIBLE] = t.visible !== void 0 ? t.visible : !0, e[$.Z_INDEX] = t.zIndex, e[$.MAX_RESOLUTION] = t.maxResolution !== void 0 ? t.maxResolution : 1 / 0, e[$.MIN_RESOLUTION] = t.minResolution !== void 0 ? t.minResolution : 0, e[$.MIN_ZOOM] = t.minZoom !== void 0 ? t.minZoom : -1 / 0, e[$.MAX_ZOOM] = t.maxZoom !== void 0 ? t.maxZoom : 1 / 0, this.className_ = e.className !== void 0 ? e.className : "ol-layer", delete e.className, this.setProperties(e), this.state_ = null;
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
  getLayerState(t) {
    const e = this.state_ || /** @type {?} */
    {
      layer: this,
      managed: t === void 0 ? !0 : t
    }, i = this.getZIndex();
    return e.opacity = lt(Math.round(this.getOpacity() * 100) / 100, 0, 1), e.visible = this.getVisible(), e.extent = this.getExtent(), e.zIndex = i === void 0 && !e.managed ? 1 / 0 : i, e.maxResolution = this.getMaxResolution(), e.minResolution = Math.max(this.getMinResolution(), 0), e.minZoom = this.getMinZoom(), e.maxZoom = this.getMaxZoom(), this.state_ = e, e;
  }
  /**
   * @abstract
   * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be
   *     modified in place).
   * @return {Array<import("./Layer.js").default>} Array of layers.
   */
  getLayersArray(t) {
    return H();
  }
  /**
   * @abstract
   * @param {Array<import("./Layer.js").State>} [states] Optional list of layer
   *     states (to be modified in place).
   * @return {Array<import("./Layer.js").State>} List of layer states.
   */
  getLayerStatesArray(t) {
    return H();
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
      this.get($.EXTENT)
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
      this.get($.MAX_RESOLUTION)
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
      this.get($.MIN_RESOLUTION)
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
      this.get($.MIN_ZOOM)
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
      this.get($.MAX_ZOOM)
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
      this.get($.OPACITY)
    );
  }
  /**
   * @abstract
   * @return {import("../source/Source.js").State} Source state.
   */
  getSourceState() {
    return H();
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
      this.get($.VISIBLE)
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
      this.get($.Z_INDEX)
    );
  }
  /**
   * Sets the background color.
   * @param {BackgroundColor} [background] Background color.
   */
  setBackground(t) {
    this.background_ = t, this.changed();
  }
  /**
   * Set the extent at which the layer is visible.  If `undefined`, the layer
   * will be visible at all extents.
   * @param {import("../extent.js").Extent|undefined} extent The extent of the layer.
   * @observable
   * @api
   */
  setExtent(t) {
    this.set($.EXTENT, t);
  }
  /**
   * Set the maximum resolution at which the layer is visible.
   * @param {number} maxResolution The maximum resolution of the layer.
   * @observable
   * @api
   */
  setMaxResolution(t) {
    this.set($.MAX_RESOLUTION, t);
  }
  /**
   * Set the minimum resolution at which the layer is visible.
   * @param {number} minResolution The minimum resolution of the layer.
   * @observable
   * @api
   */
  setMinResolution(t) {
    this.set($.MIN_RESOLUTION, t);
  }
  /**
   * Set the maximum zoom (exclusive) at which the layer is visible.
   * Note that the zoom levels for layer visibility are based on the
   * view zoom level, which may be different from a tile source zoom level.
   * @param {number} maxZoom The maximum zoom of the layer.
   * @observable
   * @api
   */
  setMaxZoom(t) {
    this.set($.MAX_ZOOM, t);
  }
  /**
   * Set the minimum zoom (inclusive) at which the layer is visible.
   * Note that the zoom levels for layer visibility are based on the
   * view zoom level, which may be different from a tile source zoom level.
   * @param {number} minZoom The minimum zoom of the layer.
   * @observable
   * @api
   */
  setMinZoom(t) {
    this.set($.MIN_ZOOM, t);
  }
  /**
   * Set the opacity of the layer, allowed values range from 0 to 1.
   * @param {number} opacity The opacity of the layer.
   * @observable
   * @api
   */
  setOpacity(t) {
    U(typeof t == "number", "Layer opacity must be a number"), this.set($.OPACITY, t);
  }
  /**
   * Set the visibility of the layer (`true` or `false`).
   * @param {boolean} visible The visibility of the layer.
   * @observable
   * @api
   */
  setVisible(t) {
    this.set($.VISIBLE, t);
  }
  /**
   * Set Z-index of the layer, which is used to order layers before rendering.
   * The default Z-index is 0.
   * @param {number} zindex The z-index of the layer.
   * @observable
   * @api
   */
  setZIndex(t) {
    this.set($.Z_INDEX, t);
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    this.state_ && (this.state_.layer = null, this.state_ = null), super.disposeInternal();
  }
}
const Bt = {
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
}, _t = {
  ANIMATING: 0,
  INTERACTING: 1
}, Ut = {
  CENTER: "center",
  RESOLUTION: "resolution",
  ROTATION: "rotation"
}, Il = 42, nr = 256, Ui = {
  // use the radius of the Normal sphere
  radians: 6370997 / (2 * Math.PI),
  degrees: 2 * Math.PI * 6370997 / 360,
  ft: 0.3048,
  m: 1,
  "us-ft": 1200 / 3937
};
class Jo {
  /**
   * @param {Options} options Projection options.
   */
  constructor(t) {
    this.code_ = t.code, this.units_ = /** @type {import("./Units.js").Units} */
    t.units, this.extent_ = t.extent !== void 0 ? t.extent : null, this.worldExtent_ = t.worldExtent !== void 0 ? t.worldExtent : null, this.axisOrientation_ = t.axisOrientation !== void 0 ? t.axisOrientation : "enu", this.global_ = t.global !== void 0 ? t.global : !1, this.canWrapX_ = !!(this.global_ && this.extent_), this.getPointResolutionFunc_ = t.getPointResolution, this.defaultTileGrid_ = null, this.metersPerUnit_ = t.metersPerUnit;
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
    return this.metersPerUnit_ || Ui[this.units_];
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
  setGlobal(t) {
    this.global_ = t, this.canWrapX_ = !!(t && this.extent_);
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
  setDefaultTileGrid(t) {
    this.defaultTileGrid_ = t;
  }
  /**
   * Set the validity extent for this projection.
   * @param {import("../extent.js").Extent} extent Extent.
   * @api
   */
  setExtent(t) {
    this.extent_ = t, this.canWrapX_ = !!(this.global_ && t);
  }
  /**
   * Set the world extent for this projection.
   * @param {import("../extent.js").Extent} worldExtent World extent
   *     [minlon, minlat, maxlon, maxlat].
   * @api
   */
  setWorldExtent(t) {
    this.worldExtent_ = t;
  }
  /**
   * Set the getPointResolution function (see {@link module:ol/proj.getPointResolution}
   * for this projection.
   * @param {function(number, import("../coordinate.js").Coordinate):number} func Function
   * @api
   */
  setGetPointResolution(t) {
    this.getPointResolutionFunc_ = t;
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
const ln = 6378137, ui = Math.PI * ln, vl = [-ui, -ui, ui, ui], Rl = [-180, -85, 180, 85], wn = ln * Math.log(Math.tan(Math.PI / 2));
class ei extends Jo {
  /**
   * @param {string} code Code.
   */
  constructor(t) {
    super({
      code: t,
      units: "m",
      extent: vl,
      global: !0,
      worldExtent: Rl,
      getPointResolution: function(e, i) {
        return e / Math.cosh(i[1] / ln);
      }
    });
  }
}
const Jr = [
  new ei("EPSG:3857"),
  new ei("EPSG:102100"),
  new ei("EPSG:102113"),
  new ei("EPSG:900913"),
  new ei("http://www.opengis.net/def/crs/EPSG/0/3857"),
  new ei("http://www.opengis.net/gml/srs/epsg.xml#3857")
];
function Tl(n, t, e) {
  const i = n.length;
  e = e > 1 ? e : 2, t === void 0 && (e > 2 ? t = n.slice() : t = new Array(i));
  for (let s = 0; s < i; s += e) {
    t[s] = ui * n[s] / 180;
    let r = ln * Math.log(Math.tan(Math.PI * (+n[s + 1] + 90) / 360));
    r > wn ? r = wn : r < -wn && (r = -wn), t[s + 1] = r;
  }
  return t;
}
function Sl(n, t, e) {
  const i = n.length;
  e = e > 1 ? e : 2, t === void 0 && (e > 2 ? t = n.slice() : t = new Array(i));
  for (let s = 0; s < i; s += e)
    t[s] = 180 * n[s] / ui, t[s + 1] = 360 * Math.atan(Math.exp(n[s + 1] / ln)) / Math.PI - 90;
  return t;
}
const Ml = 6378137, $r = [-180, -90, 180, 90], Ll = Math.PI * Ml / 180;
class ze extends Jo {
  /**
   * @param {string} code Code.
   * @param {string} [axisOrientation] Axis orientation.
   */
  constructor(t, e) {
    super({
      code: t,
      units: "degrees",
      extent: $r,
      axisOrientation: e,
      global: !0,
      metersPerUnit: Ll,
      worldExtent: $r
    });
  }
}
const to = [
  new ze("CRS:84"),
  new ze("EPSG:4326", "neu"),
  new ze("urn:ogc:def:crs:OGC:1.3:CRS84"),
  new ze("urn:ogc:def:crs:OGC:2:84"),
  new ze("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),
  new ze("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"),
  new ze("http://www.opengis.net/def/crs/EPSG/0/4326", "neu")
];
let Fs = {};
function bl(n) {
  return Fs[n] || Fs[n.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, "EPSG:$3")] || null;
}
function Dl(n, t) {
  Fs[n] = t;
}
let _i = {};
function Pn(n, t, e) {
  const i = n.getCode(), s = t.getCode();
  i in _i || (_i[i] = {}), _i[i][s] = e;
}
function Pl(n, t) {
  let e;
  return n in _i && t in _i[n] && (e = _i[n][t]), e;
}
const ct = {
  UNKNOWN: 0,
  INTERSECTING: 1,
  ABOVE: 2,
  RIGHT: 4,
  BELOW: 8,
  LEFT: 16
};
function eo(n) {
  const t = Wt();
  for (let e = 0, i = n.length; e < i; ++e)
    zi(t, n[e]);
  return t;
}
function sr(n, t, e) {
  return e ? (e[0] = n[0] - t, e[1] = n[1] - t, e[2] = n[2] + t, e[3] = n[3] + t, e) : [
    n[0] - t,
    n[1] - t,
    n[2] + t,
    n[3] + t
  ];
}
function $o(n, t) {
  return t ? (t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t) : n.slice();
}
function rr(n, t, e) {
  let i, s;
  return t < n[0] ? i = n[0] - t : n[2] < t ? i = t - n[2] : i = 0, e < n[1] ? s = n[1] - e : n[3] < e ? s = e - n[3] : s = 0, i * i + s * s;
}
function Ci(n, t) {
  return ta(n, t[0], t[1]);
}
function di(n, t) {
  return n[0] <= t[0] && t[2] <= n[2] && n[1] <= t[1] && t[3] <= n[3];
}
function ta(n, t, e) {
  return n[0] <= t && t <= n[2] && n[1] <= e && e <= n[3];
}
function Ns(n, t) {
  const e = n[0], i = n[1], s = n[2], r = n[3], o = t[0], a = t[1];
  let l = ct.UNKNOWN;
  return o < e ? l = l | ct.LEFT : o > s && (l = l | ct.RIGHT), a < i ? l = l | ct.BELOW : a > r && (l = l | ct.ABOVE), l === ct.UNKNOWN && (l = ct.INTERSECTING), l;
}
function Wt() {
  return [1 / 0, 1 / 0, -1 / 0, -1 / 0];
}
function ke(n, t, e, i, s) {
  return s ? (s[0] = n, s[1] = t, s[2] = e, s[3] = i, s) : [n, t, e, i];
}
function Vn(n) {
  return ke(1 / 0, 1 / 0, -1 / 0, -1 / 0, n);
}
function ea(n, t) {
  const e = n[0], i = n[1];
  return ke(e, i, e, i, t);
}
function or(n, t, e, i, s) {
  const r = Vn(s);
  return ia(r, n, t, e, i);
}
function Vi(n, t) {
  return n[0] == t[0] && n[2] == t[2] && n[1] == t[1] && n[3] == t[3];
}
function Ol(n, t) {
  return t[0] < n[0] && (n[0] = t[0]), t[2] > n[2] && (n[2] = t[2]), t[1] < n[1] && (n[1] = t[1]), t[3] > n[3] && (n[3] = t[3]), n;
}
function zi(n, t) {
  t[0] < n[0] && (n[0] = t[0]), t[0] > n[2] && (n[2] = t[0]), t[1] < n[1] && (n[1] = t[1]), t[1] > n[3] && (n[3] = t[1]);
}
function ia(n, t, e, i, s) {
  for (; e < i; e += s)
    kl(n, t[e], t[e + 1]);
  return n;
}
function kl(n, t, e) {
  n[0] = Math.min(n[0], t), n[1] = Math.min(n[1], e), n[2] = Math.max(n[2], t), n[3] = Math.max(n[3], e);
}
function na(n, t) {
  let e;
  return e = t(Zn(n)), e || (e = t(Hn(n)), e) || (e = t(jn(n)), e) || (e = t(Qe(n)), e) ? e : !1;
}
function Gs(n) {
  let t = 0;
  return Qn(n) || (t = tt(n) * St(n)), t;
}
function Zn(n) {
  return [n[0], n[1]];
}
function Hn(n) {
  return [n[2], n[1]];
}
function je(n) {
  return [(n[0] + n[2]) / 2, (n[1] + n[3]) / 2];
}
function Fl(n, t) {
  let e;
  if (t === "bottom-left")
    e = Zn(n);
  else if (t === "bottom-right")
    e = Hn(n);
  else if (t === "top-left")
    e = Qe(n);
  else if (t === "top-right")
    e = jn(n);
  else
    throw new Error("Invalid corner");
  return e;
}
function Bs(n, t, e, i, s) {
  const [r, o, a, l, h, c, u, d] = Ws(
    n,
    t,
    e,
    i
  );
  return ke(
    Math.min(r, a, h, u),
    Math.min(o, l, c, d),
    Math.max(r, a, h, u),
    Math.max(o, l, c, d),
    s
  );
}
function Ws(n, t, e, i) {
  const s = t * i[0] / 2, r = t * i[1] / 2, o = Math.cos(e), a = Math.sin(e), l = s * o, h = s * a, c = r * o, u = r * a, d = n[0], f = n[1];
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
function St(n) {
  return n[3] - n[1];
}
function Xi(n, t, e) {
  const i = e || Wt();
  return Rt(n, t) ? (n[0] > t[0] ? i[0] = n[0] : i[0] = t[0], n[1] > t[1] ? i[1] = n[1] : i[1] = t[1], n[2] < t[2] ? i[2] = n[2] : i[2] = t[2], n[3] < t[3] ? i[3] = n[3] : i[3] = t[3]) : Vn(i), i;
}
function Qe(n) {
  return [n[0], n[3]];
}
function jn(n) {
  return [n[2], n[3]];
}
function tt(n) {
  return n[2] - n[0];
}
function Rt(n, t) {
  return n[0] <= t[2] && n[2] >= t[0] && n[1] <= t[3] && n[3] >= t[1];
}
function Qn(n) {
  return n[2] < n[0] || n[3] < n[1];
}
function Nl(n, t) {
  return t ? (t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t) : n;
}
function Gl(n, t, e) {
  let i = !1;
  const s = Ns(n, t), r = Ns(n, e);
  if (s === ct.INTERSECTING || r === ct.INTERSECTING)
    i = !0;
  else {
    const o = n[0], a = n[1], l = n[2], h = n[3], c = t[0], u = t[1], d = e[0], f = e[1], g = (f - u) / (d - c);
    let m, _;
    r & ct.ABOVE && !(s & ct.ABOVE) && (m = d - (f - h) / g, i = m >= o && m <= l), !i && r & ct.RIGHT && !(s & ct.RIGHT) && (_ = f - (d - l) * g, i = _ >= a && _ <= h), !i && r & ct.BELOW && !(s & ct.BELOW) && (m = d - (f - a) / g, i = m >= o && m <= l), !i && r & ct.LEFT && !(s & ct.LEFT) && (_ = f - (d - o) * g, i = _ >= a && _ <= h);
  }
  return i;
}
function sa(n, t) {
  const e = t.getExtent(), i = je(n);
  if (t.canWrapX() && (i[0] < e[0] || i[0] >= e[2])) {
    const s = tt(e), o = Math.floor(
      (i[0] - e[0]) / s
    ) * s;
    n[0] -= o, n[2] -= o;
  }
  return n;
}
function Bl(n, t) {
  if (t.canWrapX()) {
    const e = t.getExtent();
    if (!isFinite(n[0]) || !isFinite(n[2]))
      return [[e[0], n[1], e[2], n[3]]];
    sa(n, t);
    const i = tt(e);
    if (tt(n) > i)
      return [[e[0], n[1], e[2], n[3]]];
    if (n[0] < e[0])
      return [
        [n[0] + i, n[1], e[2], n[3]],
        [e[0], n[1], n[2], n[3]]
      ];
    if (n[2] > e[2])
      return [
        [n[0], n[1], e[2], n[3]],
        [e[0], n[1], n[2] - i, n[3]]
      ];
  }
  return [n];
}
function Wl(n, t) {
  return n[0] += +t[0], n[1] += +t[1], n;
}
function On(n, t) {
  let e = !0;
  for (let i = n.length - 1; i >= 0; --i)
    if (n[i] != t[i]) {
      e = !1;
      break;
    }
  return e;
}
function ar(n, t) {
  const e = Math.cos(t), i = Math.sin(t), s = n[0] * e - n[1] * i, r = n[1] * e + n[0] * i;
  return n[0] = s, n[1] = r, n;
}
function zl(n, t) {
  return n[0] *= t, n[1] *= t, n;
}
function ra(n, t) {
  if (t.canWrapX()) {
    const e = tt(t.getExtent()), i = Xl(n, t, e);
    i && (n[0] -= i * e);
  }
  return n;
}
function Xl(n, t, e) {
  const i = t.getExtent();
  let s = 0;
  return t.canWrapX() && (n[0] < i[0] || n[0] > i[2]) && (e = e || tt(i), s = Math.floor(
    (n[0] - i[0]) / e
  )), s;
}
const Yl = 63710088e-1;
function io(n, t, e) {
  e = e || Yl;
  const i = bn(n[1]), s = bn(t[1]), r = (s - i) / 2, o = bn(t[0] - n[0]) / 2, a = Math.sin(r) * Math.sin(r) + Math.sin(o) * Math.sin(o) * Math.cos(i) * Math.cos(s);
  return 2 * e * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
function oa(...n) {
  console.warn(...n);
}
let zs = !0;
function Kl(n) {
  zs = !(n === void 0 ? !0 : n);
}
function lr(n, t) {
  if (t !== void 0) {
    for (let e = 0, i = n.length; e < i; ++e)
      t[e] = n[e];
    t = t;
  } else
    t = n.slice();
  return t;
}
function aa(n, t) {
  if (t !== void 0 && n !== t) {
    for (let e = 0, i = n.length; e < i; ++e)
      t[e] = n[e];
    n = t;
  }
  return n;
}
function Ul(n) {
  Dl(n.getCode(), n), Pn(n, n, lr);
}
function Vl(n) {
  n.forEach(Ul);
}
function zt(n) {
  return typeof n == "string" ? bl(
    /** @type {string} */
    n
  ) : (
    /** @type {Projection} */
    n || null
  );
}
function no(n, t, e, i) {
  n = zt(n);
  let s;
  const r = n.getPointResolutionFunc();
  if (r) {
    if (s = r(t, e), i && i !== n.getUnits()) {
      const o = n.getMetersPerUnit();
      o && (s = s * o / Ui[i]);
    }
  } else {
    const o = n.getUnits();
    if (o == "degrees" && !i || i == "degrees")
      s = t;
    else {
      const a = qn(
        n,
        zt("EPSG:4326")
      );
      if (a === aa && o !== "degrees")
        s = t * n.getMetersPerUnit();
      else {
        let h = [
          e[0] - t / 2,
          e[1],
          e[0] + t / 2,
          e[1],
          e[0],
          e[1] - t / 2,
          e[0],
          e[1] + t / 2
        ];
        h = a(h, h, 2);
        const c = io(h.slice(0, 2), h.slice(2, 4)), u = io(h.slice(4, 6), h.slice(6, 8));
        s = (c + u) / 2;
      }
      const l = i ? Ui[i] : n.getMetersPerUnit();
      l !== void 0 && (s /= l);
    }
  }
  return s;
}
function so(n) {
  Vl(n), n.forEach(function(t) {
    n.forEach(function(e) {
      t !== e && Pn(t, e, lr);
    });
  });
}
function Zl(n, t, e, i) {
  n.forEach(function(s) {
    t.forEach(function(r) {
      Pn(s, r, e), Pn(r, s, i);
    });
  });
}
function hr(n, t) {
  return n ? typeof n == "string" ? zt(n) : (
    /** @type {Projection} */
    n
  ) : zt(t);
}
function oi(n, t) {
  if (n === t)
    return !0;
  const e = n.getUnits() === t.getUnits();
  return (n.getCode() === t.getCode() || qn(n, t) === lr) && e;
}
function qn(n, t) {
  const e = n.getCode(), i = t.getCode();
  let s = Pl(e, i);
  return s || (s = aa), s;
}
function kn(n, t) {
  const e = zt(n), i = zt(t);
  return qn(e, i);
}
function cr(n, t, e) {
  return kn(t, e)(n, void 0, n.length);
}
let Hl = null;
function jl() {
  return Hl;
}
function Xs(n, t) {
  return n;
}
function de(n, t) {
  return zs && !On(n, [0, 0]) && n[0] >= -180 && n[0] <= 180 && n[1] >= -90 && n[1] <= 90 && (zs = !1, oa(
    "Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates."
  )), n;
}
function ur(n, t) {
  return n;
}
function Ke(n, t) {
  return n;
}
function Ql() {
  so(Jr), so(to), Zl(
    to,
    Jr,
    Tl,
    Sl
  );
}
Ql();
function ro(n, t, e) {
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
      if (!s && !t)
        return i;
      const l = t ? 0 : r[0] * s, h = t ? 0 : r[1] * s, c = a ? a[0] : 0, u = a ? a[1] : 0;
      let d = n[0] + l / 2 + c, f = n[2] - l / 2 + c, g = n[1] + h / 2 + u, m = n[3] - h / 2 + u;
      d > f && (d = (f + d) / 2, f = d), g > m && (g = (m + g) / 2, m = g);
      let _ = lt(i[0], d, f), p = lt(i[1], g, m);
      if (o && e && s) {
        const y = 30 * s;
        _ += -y * Math.log(1 + Math.max(0, d - i[0]) / y) + y * Math.log(1 + Math.max(0, i[0] - f) / y), p += -y * Math.log(1 + Math.max(0, g - i[1]) / y) + y * Math.log(1 + Math.max(0, i[1] - m) / y);
      }
      return [_, p];
    }
  );
}
function ql(n) {
  return n;
}
function dr(n, t, e, i) {
  const s = tt(t) / e[0], r = St(t) / e[1];
  return i ? Math.min(n, Math.max(s, r)) : Math.min(n, Math.min(s, r));
}
function fr(n, t, e) {
  let i = Math.min(n, t);
  const s = 50;
  return i *= Math.log(1 + s * Math.max(0, n / t - 1)) / s + 1, e && (i = Math.max(i, e), i /= Math.log(1 + s * Math.max(0, e / n - 1)) / s + 1), lt(i, e / 2, t * 2);
}
function Jl(n, t, e, i) {
  return t = t !== void 0 ? t : !0, /**
   * @param {number|undefined} resolution Resolution.
   * @param {number} direction Direction.
   * @param {import("./size.js").Size} size Viewport size.
   * @param {boolean} [isMoving] True if an interaction or animation is in progress.
   * @return {number|undefined} Resolution.
   */
  function(s, r, o, a) {
    if (s !== void 0) {
      const l = n[0], h = n[n.length - 1], c = e ? dr(
        l,
        e,
        o,
        i
      ) : l;
      if (a)
        return t ? fr(
          s,
          c,
          h
        ) : lt(s, h, c);
      const u = Math.min(c, s), d = Math.floor(er(n, u, r));
      return n[d] > c && d < n.length - 1 ? n[d + 1] : n[d];
    }
  };
}
function $l(n, t, e, i, s, r) {
  return i = i !== void 0 ? i : !0, e = e !== void 0 ? e : 0, /**
   * @param {number|undefined} resolution Resolution.
   * @param {number} direction Direction.
   * @param {import("./size.js").Size} size Viewport size.
   * @param {boolean} [isMoving] True if an interaction or animation is in progress.
   * @return {number|undefined} Resolution.
   */
  function(o, a, l, h) {
    if (o !== void 0) {
      const c = s ? dr(
        t,
        s,
        l,
        r
      ) : t;
      if (h)
        return i ? fr(
          o,
          c,
          e
        ) : lt(o, e, c);
      const u = 1e-9, d = Math.ceil(
        Math.log(t / c) / Math.log(n) - u
      ), f = -a * (0.5 - u) + 0.5, g = Math.min(c, o), m = Math.floor(
        Math.log(t / g) / Math.log(n) + f
      ), _ = Math.max(d, m), p = t / Math.pow(n, _);
      return lt(p, e, c);
    }
  };
}
function oo(n, t, e, i, s) {
  return e = e !== void 0 ? e : !0, /**
   * @param {number|undefined} resolution Resolution.
   * @param {number} direction Direction.
   * @param {import("./size.js").Size} size Viewport size.
   * @param {boolean} [isMoving] True if an interaction or animation is in progress.
   * @return {number|undefined} Resolution.
   */
  function(r, o, a, l) {
    if (r !== void 0) {
      const h = i ? dr(
        n,
        i,
        a,
        s
      ) : n;
      return !e || !l ? lt(r, t, h) : fr(
        r,
        h,
        t
      );
    }
  };
}
function gr(n) {
  if (n !== void 0)
    return 0;
}
function ao(n) {
  if (n !== void 0)
    return n;
}
function th(n) {
  const t = 2 * Math.PI / n;
  return (
    /**
     * @param {number|undefined} rotation Rotation.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @return {number|undefined} Rotation.
     */
    function(e, i) {
      if (i)
        return e;
      if (e !== void 0)
        return e = Math.floor(e / t + 0.5) * t, e;
    }
  );
}
function eh(n) {
  const t = n === void 0 ? bn(5) : n;
  return (
    /**
     * @param {number|undefined} rotation Rotation.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @return {number|undefined} Rotation.
     */
    function(e, i) {
      return i || e === void 0 ? e : Math.abs(e) <= t ? 0 : e;
    }
  );
}
function la(n) {
  return Math.pow(n, 3);
}
function Ii(n) {
  return 1 - la(1 - n);
}
function ih(n) {
  return 3 * n * n - 2 * n * n * n;
}
function nh(n) {
  return n;
}
new Array(6);
function Ht() {
  return [1, 0, 0, 1, 0, 0];
}
function sh(n, t) {
  const e = n[0], i = n[1], s = n[2], r = n[3], o = n[4], a = n[5], l = t[0], h = t[1], c = t[2], u = t[3], d = t[4], f = t[5];
  return n[0] = e * l + s * h, n[1] = i * l + r * h, n[2] = e * c + s * u, n[3] = i * c + r * u, n[4] = e * d + s * f + o, n[5] = i * d + r * f + a, n;
}
function rh(n, t, e, i, s, r, o) {
  return n[0] = t, n[1] = e, n[2] = i, n[3] = s, n[4] = r, n[5] = o, n;
}
function oh(n, t) {
  return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n;
}
function ut(n, t) {
  const e = t[0], i = t[1];
  return t[0] = n[0] * e + n[2] * i + n[4], t[1] = n[1] * e + n[3] * i + n[5], t;
}
function ah(n, t, e) {
  return rh(n, t, 0, 0, e, 0, 0);
}
function pe(n, t, e, i, s, r, o, a) {
  const l = Math.sin(r), h = Math.cos(r);
  return n[0] = i * h, n[1] = s * l, n[2] = -i * l, n[3] = s * h, n[4] = o * i * h - a * i * l + t, n[5] = o * s * l + a * s * h + e, n;
}
function mr(n, t) {
  const e = lh(t);
  U(e !== 0, "Transformation matrix cannot be inverted");
  const i = t[0], s = t[1], r = t[2], o = t[3], a = t[4], l = t[5];
  return n[0] = o / e, n[1] = -s / e, n[2] = -r / e, n[3] = i / e, n[4] = (r * l - o * a) / e, n[5] = -(i * l - s * a) / e, n;
}
function lh(n) {
  return n[0] * n[3] - n[1] * n[2];
}
const lo = [1e6, 1e6, 1e6, 1e6, 2, 2];
function ha(n) {
  return "matrix(" + n.map(
    (e, i) => Math.round(e * lo[i]) / lo[i]
  ).join(", ") + ")";
}
function Pe(n, t, e, i, s, r) {
  r = r || [];
  let o = 0;
  for (let a = t; a < e; a += i) {
    const l = n[a], h = n[a + 1];
    r[o++] = s[0] * l + s[2] * h + s[4], r[o++] = s[1] * l + s[3] * h + s[5];
  }
  return r && r.length != o && (r.length = o), r;
}
function ca(n, t, e, i, s, r, o) {
  o = o || [];
  const a = Math.cos(s), l = Math.sin(s), h = r[0], c = r[1];
  let u = 0;
  for (let d = t; d < e; d += i) {
    const f = n[d] - h, g = n[d + 1] - c;
    o[u++] = h + f * a - g * l, o[u++] = c + f * l + g * a;
    for (let m = d + 2; m < d + i; ++m)
      o[u++] = n[m];
  }
  return o && o.length != u && (o.length = u), o;
}
function hh(n, t, e, i, s, r, o, a) {
  a = a || [];
  const l = o[0], h = o[1];
  let c = 0;
  for (let u = t; u < e; u += i) {
    const d = n[u] - l, f = n[u + 1] - h;
    a[c++] = l + s * d, a[c++] = h + r * f;
    for (let g = u + 2; g < u + i; ++g)
      a[c++] = n[g];
  }
  return a && a.length != c && (a.length = c), a;
}
function ch(n, t, e, i, s, r, o) {
  o = o || [];
  let a = 0;
  for (let l = t; l < e; l += i) {
    o[a++] = n[l] + s, o[a++] = n[l + 1] + r;
    for (let h = l + 2; h < l + i; ++h)
      o[a++] = n[h];
  }
  return o && o.length != a && (o.length = a), o;
}
const ho = Ht();
class uh extends se {
  constructor() {
    super(), this.extent_ = Wt(), this.extentRevision_ = -1, this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = 0, this.simplifyTransformedInternal = Qo(
      (t, e, i) => {
        if (!i)
          return this.getSimplifiedGeometry(e);
        const s = this.clone();
        return s.applyTransform(i), s.getSimplifiedGeometry(e);
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
  simplifyTransformed(t, e) {
    return this.simplifyTransformedInternal(
      this.getRevision(),
      t,
      e
    );
  }
  /**
   * Make a complete copy of the geometry.
   * @abstract
   * @return {!Geometry} Clone.
   */
  clone() {
    return H();
  }
  /**
   * @abstract
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(t, e, i, s) {
    return H();
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   */
  containsXY(t, e) {
    const i = this.getClosestPoint([t, e]);
    return i[0] === t && i[1] === e;
  }
  /**
   * Return the closest point of the geometry to the passed point as
   * {@link module:ol/coordinate~Coordinate coordinate}.
   * @param {import("../coordinate.js").Coordinate} point Point.
   * @param {import("../coordinate.js").Coordinate} [closestPoint] Closest point.
   * @return {import("../coordinate.js").Coordinate} Closest point.
   * @api
   */
  getClosestPoint(t, e) {
    return e = e || [NaN, NaN], this.closestPointXY(t[0], t[1], e, 1 / 0), e;
  }
  /**
   * Returns true if this geometry includes the specified coordinate. If the
   * coordinate is on the boundary of the geometry, returns false.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @return {boolean} Contains coordinate.
   * @api
   */
  intersectsCoordinate(t) {
    return this.containsXY(t[0], t[1]);
  }
  /**
   * @abstract
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */
  computeExtent(t) {
    return H();
  }
  /**
   * Get the extent of the geometry.
   * @param {import("../extent.js").Extent} [extent] Extent.
   * @return {import("../extent.js").Extent} extent Extent.
   * @api
   */
  getExtent(t) {
    if (this.extentRevision_ != this.getRevision()) {
      const e = this.computeExtent(this.extent_);
      (isNaN(e[0]) || isNaN(e[1])) && Vn(e), this.extentRevision_ = this.getRevision();
    }
    return Nl(this.extent_, t);
  }
  /**
   * Rotate the geometry around a given coordinate. This modifies the geometry
   * coordinates in place.
   * @abstract
   * @param {number} angle Rotation angle in radians.
   * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
   * @api
   */
  rotate(t, e) {
    H();
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
  scale(t, e, i) {
    H();
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
  simplify(t) {
    return this.getSimplifiedGeometry(t * t);
  }
  /**
   * Create a simplified version of this geometry using the Douglas Peucker
   * algorithm.
   * See https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm.
   * @abstract
   * @param {number} squaredTolerance Squared tolerance.
   * @return {Geometry} Simplified geometry.
   */
  getSimplifiedGeometry(t) {
    return H();
  }
  /**
   * Get the type of this geometry.
   * @abstract
   * @return {Type} Geometry type.
   */
  getType() {
    return H();
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
  applyTransform(t) {
    H();
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @abstract
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   */
  intersectsExtent(t) {
    return H();
  }
  /**
   * Translate the geometry.  This modifies the geometry coordinates in place.  If
   * instead you want a new geometry, first `clone()` this geometry.
   * @abstract
   * @param {number} deltaX Delta X.
   * @param {number} deltaY Delta Y.
   * @api
   */
  translate(t, e) {
    H();
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
  transform(t, e) {
    const i = zt(t), s = i.getUnits() == "tile-pixels" ? function(r, o, a) {
      const l = i.getExtent(), h = i.getWorldExtent(), c = St(h) / St(l);
      return pe(
        ho,
        h[0],
        h[3],
        c,
        -c,
        0,
        0,
        0
      ), Pe(
        r,
        0,
        r.length,
        a,
        ho,
        o
      ), kn(i, e)(
        r,
        o,
        a
      );
    } : kn(i, e);
    return this.applyTransform(s), this;
  }
}
class Jn extends uh {
  constructor() {
    super(), this.layout = "XY", this.stride = 2, this.flatCoordinates;
  }
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */
  computeExtent(t) {
    return or(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t
    );
  }
  /**
   * @abstract
   * @return {Array<*> | null} Coordinates.
   */
  getCoordinates() {
    return H();
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
  getSimplifiedGeometry(t) {
    if (this.simplifiedGeometryRevision !== this.getRevision() && (this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = this.getRevision()), t < 0 || this.simplifiedGeometryMaxMinSquaredTolerance !== 0 && t <= this.simplifiedGeometryMaxMinSquaredTolerance)
      return this;
    const e = this.getSimplifiedGeometryInternal(t);
    return e.getFlatCoordinates().length < this.flatCoordinates.length ? e : (this.simplifiedGeometryMaxMinSquaredTolerance = t, this);
  }
  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {SimpleGeometry} Simplified geometry.
   * @protected
   */
  getSimplifiedGeometryInternal(t) {
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
  setFlatCoordinates(t, e) {
    this.stride = co(t), this.layout = t, this.flatCoordinates = e;
  }
  /**
   * @abstract
   * @param {!Array<*>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */
  setCoordinates(t, e) {
    H();
  }
  /**
   * @param {import("./Geometry.js").GeometryLayout|undefined} layout Layout.
   * @param {Array<*>} coordinates Coordinates.
   * @param {number} nesting Nesting.
   * @protected
   */
  setLayout(t, e, i) {
    let s;
    if (t)
      s = co(t);
    else {
      for (let r = 0; r < i; ++r) {
        if (e.length === 0) {
          this.layout = "XY", this.stride = 2;
          return;
        }
        e = /** @type {Array<unknown>} */
        e[0];
      }
      s = e.length, t = dh(s);
    }
    this.layout = t, this.stride = s;
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
  applyTransform(t) {
    this.flatCoordinates && (t(this.flatCoordinates, this.flatCoordinates, this.stride), this.changed());
  }
  /**
   * Rotate the geometry around a given coordinate. This modifies the geometry
   * coordinates in place.
   * @param {number} angle Rotation angle in counter-clockwise radians.
   * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
   * @api
   */
  rotate(t, e) {
    const i = this.getFlatCoordinates();
    if (i) {
      const s = this.getStride();
      ca(
        i,
        0,
        i.length,
        s,
        t,
        e,
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
  scale(t, e, i) {
    e === void 0 && (e = t), i || (i = je(this.getExtent()));
    const s = this.getFlatCoordinates();
    if (s) {
      const r = this.getStride();
      hh(
        s,
        0,
        s.length,
        r,
        t,
        e,
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
  translate(t, e) {
    const i = this.getFlatCoordinates();
    if (i) {
      const s = this.getStride();
      ch(
        i,
        0,
        i.length,
        s,
        t,
        e,
        i
      ), this.changed();
    }
  }
}
function dh(n) {
  let t;
  return n == 2 ? t = "XY" : n == 3 ? t = "XYZ" : n == 4 && (t = "XYZM"), /** @type {import("./Geometry.js").GeometryLayout} */
  t;
}
function co(n) {
  let t;
  return n == "XY" ? t = 2 : n == "XYZ" || n == "XYM" ? t = 3 : n == "XYZM" && (t = 4), /** @type {number} */
  t;
}
function fh(n, t, e) {
  const i = n.getFlatCoordinates();
  if (!i)
    return null;
  const s = n.getStride();
  return Pe(
    i,
    0,
    i.length,
    s,
    t,
    e
  );
}
function uo(n, t, e, i, s, r, o) {
  const a = n[t], l = n[t + 1], h = n[e] - a, c = n[e + 1] - l;
  let u;
  if (h === 0 && c === 0)
    u = t;
  else {
    const d = ((s - a) * h + (r - l) * c) / (h * h + c * c);
    if (d > 1)
      u = e;
    else if (d > 0) {
      for (let f = 0; f < i; ++f)
        o[f] = bt(
          n[t + f],
          n[e + f],
          d
        );
      o.length = i;
      return;
    } else
      u = t;
  }
  for (let d = 0; d < i; ++d)
    o[d] = n[u + d];
  o.length = i;
}
function _r(n, t, e, i, s) {
  let r = n[t], o = n[t + 1];
  for (t += i; t < e; t += i) {
    const a = n[t], l = n[t + 1], h = gi(r, o, a, l);
    h > s && (s = h), r = a, o = l;
  }
  return s;
}
function gh(n, t, e, i, s) {
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r];
    s = _r(n, t, a, i, s), t = a;
  }
  return s;
}
function pr(n, t, e, i, s, r, o, a, l, h, c) {
  if (t == e)
    return h;
  let u, d;
  if (s === 0) {
    if (d = gi(
      o,
      a,
      n[t],
      n[t + 1]
    ), d < h) {
      for (u = 0; u < i; ++u)
        l[u] = n[t + u];
      return l.length = i, d;
    }
    return h;
  }
  c = c || [NaN, NaN];
  let f = t + i;
  for (; f < e; )
    if (uo(
      n,
      f - i,
      f,
      i,
      o,
      a,
      c
    ), d = gi(o, a, c[0], c[1]), d < h) {
      for (h = d, u = 0; u < i; ++u)
        l[u] = c[u];
      l.length = i, f += i;
    } else
      f += i * Math.max(
        (Math.sqrt(d) - Math.sqrt(h)) / s | 0,
        1
      );
  if (r && (uo(
    n,
    e - i,
    t,
    i,
    o,
    a,
    c
  ), d = gi(o, a, c[0], c[1]), d < h)) {
    for (h = d, u = 0; u < i; ++u)
      l[u] = c[u];
    l.length = i;
  }
  return h;
}
function mh(n, t, e, i, s, r, o, a, l, h, c) {
  c = c || [NaN, NaN];
  for (let u = 0, d = e.length; u < d; ++u) {
    const f = e[u];
    h = pr(
      n,
      t,
      f,
      i,
      s,
      r,
      o,
      a,
      l,
      h,
      c
    ), t = f;
  }
  return h;
}
function _h(n, t, e, i) {
  for (let s = 0, r = e.length; s < r; ++s)
    n[t++] = e[s];
  return t;
}
function yr(n, t, e, i) {
  for (let s = 0, r = e.length; s < r; ++s) {
    const o = e[s];
    for (let a = 0; a < i; ++a)
      n[t++] = o[a];
  }
  return t;
}
function ph(n, t, e, i, s) {
  s = s || [];
  let r = 0;
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = yr(
      n,
      t,
      e[o],
      i
    );
    s[r++] = l, t = l;
  }
  return s.length = r, s;
}
function $n(n, t, e, i, s, r, o) {
  const a = (e - t) / i;
  if (a < 3) {
    for (; t < e; t += i)
      r[o++] = n[t], r[o++] = n[t + 1];
    return o;
  }
  const l = new Array(a);
  l[0] = 1, l[a - 1] = 1;
  const h = [t, e - i];
  let c = 0;
  for (; h.length > 0; ) {
    const u = h.pop(), d = h.pop();
    let f = 0;
    const g = n[d], m = n[d + 1], _ = n[u], p = n[u + 1];
    for (let y = d + i; y < u; y += i) {
      const C = n[y], E = n[y + 1], x = wl(C, E, g, m, _, p);
      x > f && (c = y, f = x);
    }
    f > s && (l[(c - t) / i] = 1, d + i < c && h.push(d, c), c + i < u && h.push(c, u));
  }
  for (let u = 0; u < a; ++u)
    l[u] && (r[o++] = n[t + u * i], r[o++] = n[t + u * i + 1]);
  return o;
}
function yh(n, t, e, i, s, r, o, a) {
  for (let l = 0, h = e.length; l < h; ++l) {
    const c = e[l];
    o = $n(
      n,
      t,
      c,
      i,
      s,
      r,
      o
    ), a.push(o), t = c;
  }
  return o;
}
function Ye(n, t) {
  return t * Math.round(n / t);
}
function Eh(n, t, e, i, s, r, o) {
  if (t == e)
    return o;
  let a = Ye(n[t], s), l = Ye(n[t + 1], s);
  t += i, r[o++] = a, r[o++] = l;
  let h, c;
  do
    if (h = Ye(n[t], s), c = Ye(n[t + 1], s), t += i, t == e)
      return r[o++] = h, r[o++] = c, o;
  while (h == a && c == l);
  for (; t < e; ) {
    const u = Ye(n[t], s), d = Ye(n[t + 1], s);
    if (t += i, u == h && d == c)
      continue;
    const f = h - a, g = c - l, m = u - a, _ = d - l;
    if (f * _ == g * m && (f < 0 && m < f || f == m || f > 0 && m > f) && (g < 0 && _ < g || g == _ || g > 0 && _ > g)) {
      h = u, c = d;
      continue;
    }
    r[o++] = h, r[o++] = c, a = h, l = c, h = u, c = d;
  }
  return r[o++] = h, r[o++] = c, o;
}
function ua(n, t, e, i, s, r, o, a) {
  for (let l = 0, h = e.length; l < h; ++l) {
    const c = e[l];
    o = Eh(
      n,
      t,
      c,
      i,
      s,
      r,
      o
    ), a.push(o), t = c;
  }
  return o;
}
function Ue(n, t, e, i, s) {
  s = s !== void 0 ? s : [];
  let r = 0;
  for (let o = t; o < e; o += i)
    s[r++] = n.slice(o, o + i);
  return s.length = r, s;
}
function Fn(n, t, e, i, s) {
  s = s !== void 0 ? s : [];
  let r = 0;
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o];
    s[r++] = Ue(
      n,
      t,
      l,
      i,
      s[r]
    ), t = l;
  }
  return s.length = r, s;
}
function fo(n, t, e, i, s) {
  s = s !== void 0 ? s : [];
  let r = 0;
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o];
    s[r++] = l.length === 1 && l[0] === t ? [] : Fn(
      n,
      t,
      l,
      i,
      s[r]
    ), t = l[l.length - 1];
  }
  return s.length = r, s;
}
function da(n, t, e, i) {
  let s = 0, r = n[e - i], o = n[e - i + 1];
  for (; t < e; t += i) {
    const a = n[t], l = n[t + 1];
    s += o * a - r * l, r = a, o = l;
  }
  return s / 2;
}
function xh(n, t, e, i) {
  let s = 0;
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r];
    s += da(n, t, a, i), t = a;
  }
  return s;
}
class Zi extends Jn {
  /**
   * @param {Array<import("../coordinate.js").Coordinate>|Array<number>} coordinates Coordinates.
   *     For internal use, flat coordinates in combination with `layout` are also accepted.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */
  constructor(t, e) {
    super(), this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, e !== void 0 && !Array.isArray(t[0]) ? this.setFlatCoordinates(
      e,
      /** @type {Array<number>} */
      t
    ) : this.setCoordinates(
      /** @type {Array<import("../coordinate.js").Coordinate>} */
      t,
      e
    );
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!LinearRing} Clone.
   * @api
   */
  clone() {
    return new Zi(this.flatCoordinates.slice(), this.layout);
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(t, e, i, s) {
    return s < rr(this.getExtent(), t, e) ? s : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      _r(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), pr(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      this.maxDelta_,
      !0,
      t,
      e,
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
    return da(
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
    return Ue(
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
  getSimplifiedGeometryInternal(t) {
    const e = [];
    return e.length = $n(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t,
      e,
      0
    ), new Zi(e, "XY");
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
  intersectsExtent(t) {
    return !1;
  }
  /**
   * Set the coordinates of the linear ring.
   * @param {!Array<import("../coordinate.js").Coordinate>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */
  setCoordinates(t, e) {
    this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = yr(
      this.flatCoordinates,
      0,
      t,
      this.stride
    ), this.changed();
  }
}
class ts extends Jn {
  /**
   * @param {import("../coordinate.js").Coordinate} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */
  constructor(t, e) {
    super(), this.setCoordinates(t, e);
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!Point} Clone.
   * @api
   */
  clone() {
    const t = new ts(this.flatCoordinates.slice(), this.layout);
    return t.applyProperties(this), t;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(t, e, i, s) {
    const r = this.flatCoordinates, o = gi(
      t,
      e,
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
  computeExtent(t) {
    return ea(this.flatCoordinates, t);
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
  intersectsExtent(t) {
    return ta(t, this.flatCoordinates[0], this.flatCoordinates[1]);
  }
  /**
   * @param {!Array<*>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */
  setCoordinates(t, e) {
    this.setLayout(e, t, 0), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = _h(
      this.flatCoordinates,
      0,
      t,
      this.stride
    ), this.changed();
  }
}
function Ch(n, t, e, i, s) {
  return !na(
    s,
    /**
     * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
     * @return {boolean} Contains (x, y).
     */
    function(o) {
      return !Ve(
        n,
        t,
        e,
        i,
        o[0],
        o[1]
      );
    }
  );
}
function Ve(n, t, e, i, s, r) {
  let o = 0, a = n[e - i], l = n[e - i + 1];
  for (; t < e; t += i) {
    const h = n[t], c = n[t + 1];
    l <= r ? c > r && (h - a) * (r - l) - (s - a) * (c - l) > 0 && o++ : c <= r && (h - a) * (r - l) - (s - a) * (c - l) < 0 && o--, a = h, l = c;
  }
  return o !== 0;
}
function fa(n, t, e, i, s, r) {
  if (e.length === 0 || !Ve(n, t, e[0], i, s, r))
    return !1;
  for (let o = 1, a = e.length; o < a; ++o)
    if (Ve(n, e[o - 1], e[o], i, s, r))
      return !1;
  return !0;
}
function Er(n, t, e, i, s, r, o) {
  let a, l, h, c, u, d, f;
  const g = s[r + 1], m = [];
  for (let y = 0, C = e.length; y < C; ++y) {
    const E = e[y];
    for (c = n[E - i], d = n[E - i + 1], a = t; a < E; a += i)
      u = n[a], f = n[a + 1], (g <= d && f <= g || d <= g && g <= f) && (h = (g - d) / (f - d) * (u - c) + c, m.push(h)), c = u, d = f;
  }
  let _ = NaN, p = -1 / 0;
  for (m.sort(Oe), c = m[0], a = 1, l = m.length; a < l; ++a) {
    u = m[a];
    const y = Math.abs(u - c);
    y > p && (h = (c + u) / 2, fa(n, t, e, i, h, g) && (_ = h, p = y)), c = u;
  }
  return isNaN(_) && (_ = s[r]), o ? (o.push(_, g, p), o) : [_, g, p];
}
function wh(n, t, e, i, s) {
  let r = [];
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o];
    r = Er(
      n,
      t,
      l,
      i,
      s,
      2 * o,
      r
    ), t = l[l.length - 1];
  }
  return r;
}
function ga(n, t, e, i, s) {
  let r;
  for (t += i; t < e; t += i)
    if (r = s(
      n.slice(t - i, t),
      n.slice(t, t + i)
    ), r)
      return r;
  return !1;
}
function xr(n, t, e, i, s) {
  const r = ia(
    Wt(),
    n,
    t,
    e,
    i
  );
  return Rt(s, r) ? di(s, r) || r[0] >= s[0] && r[2] <= s[2] || r[1] >= s[1] && r[3] <= s[3] ? !0 : ga(
    n,
    t,
    e,
    i,
    /**
     * @param {import("../../coordinate.js").Coordinate} point1 Start point.
     * @param {import("../../coordinate.js").Coordinate} point2 End point.
     * @return {boolean} `true` if the segment and the extent intersect,
     *     `false` otherwise.
     */
    function(o, a) {
      return Gl(s, o, a);
    }
  ) : !1;
}
function ma(n, t, e, i, s) {
  return !!(xr(n, t, e, i, s) || Ve(
    n,
    t,
    e,
    i,
    s[0],
    s[1]
  ) || Ve(
    n,
    t,
    e,
    i,
    s[0],
    s[3]
  ) || Ve(
    n,
    t,
    e,
    i,
    s[2],
    s[1]
  ) || Ve(
    n,
    t,
    e,
    i,
    s[2],
    s[3]
  ));
}
function Ah(n, t, e, i, s) {
  if (!ma(n, t, e[0], i, s))
    return !1;
  if (e.length === 1)
    return !0;
  for (let r = 1, o = e.length; r < o; ++r)
    if (Ch(
      n,
      e[r - 1],
      e[r],
      i,
      s
    ) && !xr(
      n,
      e[r - 1],
      e[r],
      i,
      s
    ))
      return !1;
  return !0;
}
function Ih(n, t, e, i) {
  for (; t < e - i; ) {
    for (let s = 0; s < i; ++s) {
      const r = n[t + s];
      n[t + s] = n[e - i + s], n[e - i + s] = r;
    }
    t += i, e -= i;
  }
}
function Cr(n, t, e, i) {
  let s = 0, r = n[e - i], o = n[e - i + 1];
  for (; t < e; t += i) {
    const a = n[t], l = n[t + 1];
    s += (a - r) * (l + o), r = a, o = l;
  }
  return s === 0 ? void 0 : s > 0;
}
function vh(n, t, e, i, s) {
  s = s !== void 0 ? s : !1;
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r], l = Cr(
      n,
      t,
      a,
      i
    );
    if (r === 0) {
      if (s && l || !s && !l)
        return !1;
    } else if (s && !l || !s && l)
      return !1;
    t = a;
  }
  return !0;
}
function go(n, t, e, i, s) {
  s = s !== void 0 ? s : !1;
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r], l = Cr(
      n,
      t,
      a,
      i
    );
    (r === 0 ? s && l || !s && !l : s && !l || !s && l) && Ih(n, t, a, i), t = a;
  }
  return t;
}
function Rh(n, t) {
  const e = [];
  let i = 0, s = 0, r;
  for (let o = 0, a = t.length; o < a; ++o) {
    const l = t[o], h = Cr(n, i, l, 2);
    if (r === void 0 && (r = h), h === r)
      e.push(t.slice(s, o + 1));
    else {
      if (e.length === 0)
        continue;
      e[e.length - 1].push(t[s]);
    }
    s = o + 1, i = l;
  }
  return e;
}
class Hi extends Jn {
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
  constructor(t, e, i) {
    super(), this.ends_ = [], this.flatInteriorPointRevision_ = -1, this.flatInteriorPoint_ = null, this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, this.orientedRevision_ = -1, this.orientedFlatCoordinates_ = null, e !== void 0 && i ? (this.setFlatCoordinates(
      e,
      /** @type {Array<number>} */
      t
    ), this.ends_ = i) : this.setCoordinates(
      /** @type {Array<Array<import("../coordinate.js").Coordinate>>} */
      t,
      e
    );
  }
  /**
   * Append the passed linear ring to this polygon.
   * @param {LinearRing} linearRing Linear ring.
   * @api
   */
  appendLinearRing(t) {
    this.flatCoordinates ? Yn(this.flatCoordinates, t.getFlatCoordinates()) : this.flatCoordinates = t.getFlatCoordinates().slice(), this.ends_.push(this.flatCoordinates.length), this.changed();
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!Polygon} Clone.
   * @api
   */
  clone() {
    const t = new Hi(
      this.flatCoordinates.slice(),
      this.layout,
      this.ends_.slice()
    );
    return t.applyProperties(this), t;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(t, e, i, s) {
    return s < rr(this.getExtent(), t, e) ? s : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      gh(
        this.flatCoordinates,
        0,
        this.ends_,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), mh(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride,
      this.maxDelta_,
      !0,
      t,
      e,
      i,
      s
    ));
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   */
  containsXY(t, e) {
    return fa(
      this.getOrientedFlatCoordinates(),
      0,
      this.ends_,
      this.stride,
      t,
      e
    );
  }
  /**
   * Return the area of the polygon on projected plane.
   * @return {number} Area (on projected plane).
   * @api
   */
  getArea() {
    return xh(
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
  getCoordinates(t) {
    let e;
    return t !== void 0 ? (e = this.getOrientedFlatCoordinates().slice(), go(e, 0, this.ends_, this.stride, t)) : e = this.flatCoordinates, Fn(e, 0, this.ends_, this.stride);
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
      const t = je(this.getExtent());
      this.flatInteriorPoint_ = Er(
        this.getOrientedFlatCoordinates(),
        0,
        this.ends_,
        this.stride,
        t,
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
    return new ts(this.getFlatInteriorPoint(), "XYM");
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
  getLinearRing(t) {
    return t < 0 || this.ends_.length <= t ? null : new Zi(
      this.flatCoordinates.slice(
        t === 0 ? 0 : this.ends_[t - 1],
        this.ends_[t]
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
    const t = this.layout, e = this.flatCoordinates, i = this.ends_, s = [];
    let r = 0;
    for (let o = 0, a = i.length; o < a; ++o) {
      const l = i[o], h = new Zi(
        e.slice(r, l),
        t
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
      const t = this.flatCoordinates;
      vh(t, 0, this.ends_, this.stride) ? this.orientedFlatCoordinates_ = t : (this.orientedFlatCoordinates_ = t.slice(), this.orientedFlatCoordinates_.length = go(
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
  getSimplifiedGeometryInternal(t) {
    const e = [], i = [];
    return e.length = ua(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride,
      Math.sqrt(t),
      e,
      0,
      i
    ), new Hi(e, "XY", i);
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
  intersectsExtent(t) {
    return Ah(
      this.getOrientedFlatCoordinates(),
      0,
      this.ends_,
      this.stride,
      t
    );
  }
  /**
   * Set the coordinates of the polygon.
   * @param {!Array<Array<import("../coordinate.js").Coordinate>>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */
  setCoordinates(t, e) {
    this.setLayout(e, t, 2), this.flatCoordinates || (this.flatCoordinates = []);
    const i = ph(
      this.flatCoordinates,
      0,
      t,
      this.stride,
      this.ends_
    );
    this.flatCoordinates.length = i.length === 0 ? 0 : i[i.length - 1], this.changed();
  }
}
function mo(n) {
  if (Qn(n))
    throw new Error("Cannot create polygon from empty extent");
  const t = n[0], e = n[1], i = n[2], s = n[3], r = [
    t,
    e,
    t,
    s,
    i,
    s,
    i,
    e,
    t,
    e
  ];
  return new Hi(r, "XY", [r.length]);
}
const Es = 0;
class Th extends se {
  /**
   * @param {ViewOptions} [options] View options.
   */
  constructor(t) {
    super(), this.on, this.once, this.un, t = Object.assign({}, t), this.hints_ = [0, 0], this.animations_ = [], this.updateAnimationKey_, this.projection_ = hr(t.projection, "EPSG:3857"), this.viewportSize_ = [100, 100], this.targetCenter_ = null, this.targetResolution_, this.targetRotation_, this.nextCenter_ = null, this.nextResolution_, this.nextRotation_, this.cancelAnchor_ = void 0, t.projection && Kl(), t.center && (t.center = de(t.center, this.projection_)), t.extent && (t.extent = Ke(t.extent, this.projection_)), this.applyOptions_(t);
  }
  /**
   * Set up the view with the given options.
   * @param {ViewOptions} options View options.
   */
  applyOptions_(t) {
    const e = Object.assign({}, t);
    for (const a in Ut)
      delete e[a];
    this.setProperties(e, !0);
    const i = Mh(t);
    this.maxResolution_ = i.maxResolution, this.minResolution_ = i.minResolution, this.zoomFactor_ = i.zoomFactor, this.resolutions_ = t.resolutions, this.padding_ = t.padding, this.minZoom_ = i.minZoom;
    const s = Sh(t), r = i.constraint, o = Lh(t);
    this.constraints_ = {
      center: s,
      resolution: r,
      rotation: o
    }, this.setRotation(t.rotation !== void 0 ? t.rotation : 0), this.setCenterInternal(
      t.center !== void 0 ? t.center : null
    ), t.resolution !== void 0 ? this.setResolution(t.resolution) : t.zoom !== void 0 && this.setZoom(t.zoom);
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
  set padding(t) {
    let e = this.padding_;
    this.padding_ = t;
    const i = this.getCenterInternal();
    if (i) {
      const s = t || [0, 0, 0, 0];
      e = e || [0, 0, 0, 0];
      const r = this.getResolution(), o = r / 2 * (s[3] - e[3] + e[1] - s[1]), a = r / 2 * (s[0] - e[0] + e[2] - s[2]);
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
  getUpdatedOptions_(t) {
    const e = this.getProperties();
    return e.resolution !== void 0 ? e.resolution = this.getResolution() : e.zoom = this.getZoom(), e.center = this.getCenterInternal(), e.rotation = this.getRotation(), Object.assign({}, e, t);
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
  animate(t) {
    this.isDef() && !this.getAnimating() && this.resolveConstraints(0);
    const e = new Array(arguments.length);
    for (let i = 0; i < e.length; ++i) {
      let s = arguments[i];
      s.center && (s = Object.assign({}, s), s.center = de(
        s.center,
        this.getProjection()
      )), s.anchor && (s = Object.assign({}, s), s.anchor = de(
        s.anchor,
        this.getProjection()
      )), e[i] = s;
    }
    this.animateInternal.apply(this, e);
  }
  /**
   * @param {...(AnimationOptions|function(boolean): void)} var_args Animation options.
   */
  animateInternal(t) {
    let e = arguments.length, i;
    e > 1 && typeof arguments[e - 1] == "function" && (i = arguments[e - 1], --e);
    let s = 0;
    for (; s < e && !this.isDef(); ++s) {
      const c = arguments[s];
      c.center && this.setCenterInternal(c.center), c.zoom !== void 0 ? this.setZoom(c.zoom) : c.resolution && this.setResolution(c.resolution), c.rotation !== void 0 && this.setRotation(c.rotation);
    }
    if (s === e) {
      i && An(i, !0);
      return;
    }
    let r = Date.now(), o = this.targetCenter_.slice(), a = this.targetResolution_, l = this.targetRotation_;
    const h = [];
    for (; s < e; ++s) {
      const c = (
        /** @type {AnimationOptions} */
        arguments[s]
      ), u = {
        start: r,
        complete: !1,
        anchor: c.anchor,
        duration: c.duration !== void 0 ? c.duration : 1e3,
        easing: c.easing || ih,
        callback: i
      };
      if (c.center && (u.sourceCenter = o, u.targetCenter = c.center.slice(), o = u.targetCenter), c.zoom !== void 0 ? (u.sourceResolution = a, u.targetResolution = this.getResolutionForZoom(c.zoom), a = u.targetResolution) : c.resolution && (u.sourceResolution = a, u.targetResolution = c.resolution, a = u.targetResolution), c.rotation !== void 0) {
        u.sourceRotation = l;
        const d = mi(c.rotation - l + Math.PI, 2 * Math.PI) - Math.PI;
        u.targetRotation = l + d, l = u.targetRotation;
      }
      bh(u) ? u.complete = !0 : r += u.duration, h.push(u);
    }
    this.animations_.push(h), this.setHint(_t.ANIMATING, 1), this.updateAnimations_();
  }
  /**
   * Determine if the view is being animated.
   * @return {boolean} The view is being animated.
   * @api
   */
  getAnimating() {
    return this.hints_[_t.ANIMATING] > 0;
  }
  /**
   * Determine if the user is interacting with the view, such as panning or zooming.
   * @return {boolean} The view is being interacted with.
   * @api
   */
  getInteracting() {
    return this.hints_[_t.INTERACTING] > 0;
  }
  /**
   * Cancel any ongoing animations.
   * @api
   */
  cancelAnimations() {
    this.setHint(_t.ANIMATING, -this.hints_[_t.ANIMATING]);
    let t;
    for (let e = 0, i = this.animations_.length; e < i; ++e) {
      const s = this.animations_[e];
      if (s[0].callback && An(s[0].callback, !1), !t)
        for (let r = 0, o = s.length; r < o; ++r) {
          const a = s[r];
          if (!a.complete) {
            t = a.anchor;
            break;
          }
        }
    }
    this.animations_.length = 0, this.cancelAnchor_ = t, this.nextCenter_ = null, this.nextResolution_ = NaN, this.nextRotation_ = NaN;
  }
  /**
   * Update all animations.
   */
  updateAnimations_() {
    if (this.updateAnimationKey_ !== void 0 && (cancelAnimationFrame(this.updateAnimationKey_), this.updateAnimationKey_ = void 0), !this.getAnimating())
      return;
    const t = Date.now();
    let e = !1;
    for (let i = this.animations_.length - 1; i >= 0; --i) {
      const s = this.animations_[i];
      let r = !0;
      for (let o = 0, a = s.length; o < a; ++o) {
        const l = s[o];
        if (l.complete)
          continue;
        const h = t - l.start;
        let c = l.duration > 0 ? h / l.duration : 1;
        c >= 1 ? (l.complete = !0, c = 1) : r = !1;
        const u = l.easing(c);
        if (l.sourceCenter) {
          const d = l.sourceCenter[0], f = l.sourceCenter[1], g = l.targetCenter[0], m = l.targetCenter[1];
          this.nextCenter_ = l.targetCenter;
          const _ = d + u * (g - d), p = f + u * (m - f);
          this.targetCenter_ = [_, p];
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
          const d = u === 1 ? mi(l.targetRotation + Math.PI, 2 * Math.PI) - Math.PI : l.sourceRotation + u * (l.targetRotation - l.sourceRotation);
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
        if (this.applyTargetState_(!0), e = !0, !l.complete)
          break;
      }
      if (r) {
        this.animations_[i] = null, this.setHint(_t.ANIMATING, -1), this.nextCenter_ = null, this.nextResolution_ = NaN, this.nextRotation_ = NaN;
        const o = s[0].callback;
        o && An(o, !0);
      }
    }
    this.animations_ = this.animations_.filter(Boolean), e && this.updateAnimationKey_ === void 0 && (this.updateAnimationKey_ = requestAnimationFrame(
      this.updateAnimations_.bind(this)
    ));
  }
  /**
   * @param {number} rotation Target rotation.
   * @param {import("./coordinate.js").Coordinate} anchor Rotation anchor.
   * @return {import("./coordinate.js").Coordinate|undefined} Center for rotation and anchor.
   */
  calculateCenterRotate(t, e) {
    let i;
    const s = this.getCenterInternal();
    return s !== void 0 && (i = [s[0] - e[0], s[1] - e[1]], ar(i, t - this.getRotation()), Wl(i, e)), i;
  }
  /**
   * @param {number} resolution Target resolution.
   * @param {import("./coordinate.js").Coordinate} anchor Zoom anchor.
   * @return {import("./coordinate.js").Coordinate|undefined} Center for resolution and anchor.
   */
  calculateCenterZoom(t, e) {
    let i;
    const s = this.getCenterInternal(), r = this.getResolution();
    if (s !== void 0 && r !== void 0) {
      const o = e[0] - t * (e[0] - s[0]) / r, a = e[1] - t * (e[1] - s[1]) / r;
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
  getViewportSize_(t) {
    const e = this.viewportSize_;
    if (t) {
      const i = e[0], s = e[1];
      return [
        Math.abs(i * Math.cos(t)) + Math.abs(s * Math.sin(t)),
        Math.abs(i * Math.sin(t)) + Math.abs(s * Math.cos(t))
      ];
    }
    return e;
  }
  /**
   * Stores the viewport size on the view. The viewport size is not read every time from the DOM
   * to avoid performance hit and layout reflow.
   * This should be done on map size change.
   * Note: the constraints are not resolved during an animation to avoid stopping it
   * @param {import("./size.js").Size} [size] Viewport size; if undefined, [100, 100] is assumed
   */
  setViewportSize(t) {
    this.viewportSize_ = Array.isArray(t) ? t.slice() : [100, 100], this.getAnimating() || this.resolveConstraints(0);
  }
  /**
   * Get the view center.
   * @return {import("./coordinate.js").Coordinate|undefined} The center of the view.
   * @observable
   * @api
   */
  getCenter() {
    const t = this.getCenterInternal();
    return t && Xs(t, this.getProjection());
  }
  /**
   * Get the view center without transforming to user projection.
   * @return {import("./coordinate.js").Coordinate|undefined} The center of the view.
   */
  getCenterInternal() {
    return (
      /** @type {import("./coordinate.js").Coordinate|undefined} */
      this.get(Ut.CENTER)
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
  getHints(t) {
    return t !== void 0 ? (t[0] = this.hints_[0], t[1] = this.hints_[1], t) : this.hints_.slice();
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
  calculateExtent(t) {
    const e = this.calculateExtentInternal(t);
    return ur(e, this.getProjection());
  }
  /**
   * @param {import("./size.js").Size} [size] Box pixel size. If not provided,
   * the map's last known viewport size will be used.
   * @return {import("./extent.js").Extent} Extent.
   */
  calculateExtentInternal(t) {
    t = t || this.getViewportSizeMinusPadding_();
    const e = (
      /** @type {!import("./coordinate.js").Coordinate} */
      this.getCenterInternal()
    );
    U(e, "The view center is not defined");
    const i = (
      /** @type {!number} */
      this.getResolution()
    );
    U(i !== void 0, "The view resolution is not defined");
    const s = (
      /** @type {!number} */
      this.getRotation()
    );
    return U(s !== void 0, "The view rotation is not defined"), Bs(e, i, s, t);
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
  setMaxZoom(t) {
    this.applyOptions_(this.getUpdatedOptions_({ maxZoom: t }));
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
  setMinZoom(t) {
    this.applyOptions_(this.getUpdatedOptions_({ minZoom: t }));
  }
  /**
   * Set whether the view should allow intermediary zoom levels.
   * @param {boolean} enabled Whether the resolution is constrained.
   * @api
   */
  setConstrainResolution(t) {
    this.applyOptions_(this.getUpdatedOptions_({ constrainResolution: t }));
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
      this.get(Ut.RESOLUTION)
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
  getResolutionForExtent(t, e) {
    return this.getResolutionForExtentInternal(
      Ke(t, this.getProjection()),
      e
    );
  }
  /**
   * Get the resolution for a provided extent (in map units) and size (in pixels).
   * @param {import("./extent.js").Extent} extent Extent.
   * @param {import("./size.js").Size} [size] Box pixel size.
   * @return {number} The resolution at which the provided extent will render at
   *     the given size.
   */
  getResolutionForExtentInternal(t, e) {
    e = e || this.getViewportSizeMinusPadding_();
    const i = tt(t) / e[0], s = St(t) / e[1];
    return Math.max(i, s);
  }
  /**
   * Return a function that returns a value between 0 and 1 for a
   * resolution. Exponential scaling is assumed.
   * @param {number} [power] Power.
   * @return {function(number): number} Resolution for value function.
   */
  getResolutionForValueFunction(t) {
    t = t || 2;
    const e = this.getConstrainedResolution(this.maxResolution_), i = this.minResolution_, s = Math.log(e / i) / Math.log(t);
    return (
      /**
       * @param {number} value Value.
       * @return {number} Resolution.
       */
      function(r) {
        return e / Math.pow(t, r * s);
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
      this.get(Ut.ROTATION)
    );
  }
  /**
   * Return a function that returns a resolution for a value between
   * 0 and 1. Exponential scaling is assumed.
   * @param {number} [power] Power.
   * @return {function(number): number} Value for resolution function.
   */
  getValueForResolutionFunction(t) {
    const e = Math.log(t || 2), i = this.getConstrainedResolution(this.maxResolution_), s = this.minResolution_, r = Math.log(i / s) / e;
    return (
      /**
       * @param {number} resolution Resolution.
       * @return {number} Value.
       */
      function(o) {
        return Math.log(i / o) / e / r;
      }
    );
  }
  /**
   * Returns the size of the viewport minus padding.
   * @private
   * @param {number} [rotation] Take into account the rotation of the viewport when giving the size
   * @return {import("./size.js").Size} Viewport size reduced by the padding.
   */
  getViewportSizeMinusPadding_(t) {
    let e = this.getViewportSize_(t);
    const i = this.padding_;
    return i && (e = [
      e[0] - i[1] - i[3],
      e[1] - i[0] - i[2]
    ]), e;
  }
  /**
   * @return {State} View state.
   */
  getState() {
    const t = this.getProjection(), e = this.getResolution(), i = this.getRotation();
    let s = (
      /** @type {import("./coordinate.js").Coordinate} */
      this.getCenterInternal()
    );
    const r = this.padding_;
    if (r) {
      const o = this.getViewportSizeMinusPadding_();
      s = xs(
        s,
        this.getViewportSize_(),
        [o[0] / 2 + r[3], o[1] / 2 + r[0]],
        e,
        i
      );
    }
    return {
      center: s.slice(0),
      projection: t !== void 0 ? t : null,
      resolution: e,
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
    let t;
    const e = this.getResolution();
    return e !== void 0 && (t = this.getZoomForResolution(e)), t;
  }
  /**
   * Get the zoom level for a resolution.
   * @param {number} resolution The resolution.
   * @return {number|undefined} The zoom level for the provided resolution.
   * @api
   */
  getZoomForResolution(t) {
    let e = this.minZoom_ || 0, i, s;
    if (this.resolutions_) {
      const r = er(this.resolutions_, t, 1);
      e = r, i = this.resolutions_[r], r == this.resolutions_.length - 1 ? s = 2 : s = i / this.resolutions_[r + 1];
    } else
      i = this.maxResolution_, s = this.zoomFactor_;
    return e + Math.log(i / t) / Math.log(s);
  }
  /**
   * Get the resolution for a zoom level.
   * @param {number} zoom Zoom level.
   * @return {number} The view resolution for the provided zoom level.
   * @api
   */
  getResolutionForZoom(t) {
    if (this.resolutions_) {
      if (this.resolutions_.length <= 1)
        return 0;
      const e = lt(
        Math.floor(t),
        0,
        this.resolutions_.length - 2
      ), i = this.resolutions_[e] / this.resolutions_[e + 1];
      return this.resolutions_[e] / Math.pow(i, lt(t - e, 0, 1));
    }
    return this.maxResolution_ / Math.pow(this.zoomFactor_, t - this.minZoom_);
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
  fit(t, e) {
    let i;
    if (U(
      Array.isArray(t) || typeof /** @type {?} */
      t.getSimplifiedGeometry == "function",
      "Invalid extent or geometry provided as `geometry`"
    ), Array.isArray(t)) {
      U(
        !Qn(t),
        "Cannot fit empty extent provided as `geometry`"
      );
      const s = Ke(t, this.getProjection());
      i = mo(s);
    } else if (t.getType() === "Circle") {
      const s = Ke(
        t.getExtent(),
        this.getProjection()
      );
      i = mo(s), i.rotate(this.getRotation(), je(s));
    } else
      i = t;
    this.fitInternal(i, e);
  }
  /**
   * Calculate rotated extent
   * @param {import("./geom/SimpleGeometry.js").default} geometry The geometry.
   * @return {import("./extent").Extent} The rotated extent for the geometry.
   */
  rotatedExtentForGeometry(t) {
    const e = this.getRotation(), i = Math.cos(e), s = Math.sin(-e), r = t.getFlatCoordinates(), o = t.getStride();
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
  fitInternal(t, e) {
    e = e || {};
    let i = e.size;
    i || (i = this.getViewportSizeMinusPadding_());
    const s = e.padding !== void 0 ? e.padding : [0, 0, 0, 0], r = e.nearest !== void 0 ? e.nearest : !1;
    let o;
    e.minResolution !== void 0 ? o = e.minResolution : e.maxZoom !== void 0 ? o = this.getResolutionForZoom(e.maxZoom) : o = 0;
    const a = this.rotatedExtentForGeometry(t);
    let l = this.getResolutionForExtentInternal(a, [
      i[0] - s[1] - s[3],
      i[1] - s[0] - s[2]
    ]);
    l = isNaN(l) ? o : Math.max(l, o), l = this.getConstrainedResolution(l, r ? 0 : 1);
    const h = this.getRotation(), c = Math.sin(h), u = Math.cos(h), d = je(a);
    d[0] += (s[1] - s[3]) / 2 * l, d[1] += (s[0] - s[2]) / 2 * l;
    const f = d[0] * u - d[1] * c, g = d[1] * u + d[0] * c, m = this.getConstrainedCenter([f, g], l), _ = e.callback ? e.callback : Ei;
    e.duration !== void 0 ? this.animateInternal(
      {
        resolution: l,
        center: m,
        duration: e.duration,
        easing: e.easing
      },
      _
    ) : (this.targetResolution_ = l, this.targetCenter_ = m, this.applyTargetState_(!1, !0), An(_, !0));
  }
  /**
   * Center on coordinate and view position.
   * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("./size.js").Size} size Box pixel size.
   * @param {import("./pixel.js").Pixel} position Position on the view to center on.
   * @api
   */
  centerOn(t, e, i) {
    this.centerOnInternal(
      de(t, this.getProjection()),
      e,
      i
    );
  }
  /**
   * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("./size.js").Size} size Box pixel size.
   * @param {import("./pixel.js").Pixel} position Position on the view to center on.
   */
  centerOnInternal(t, e, i) {
    this.setCenterInternal(
      xs(
        t,
        e,
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
  calculateCenterShift(t, e, i, s) {
    let r;
    const o = this.padding_;
    if (o && t) {
      const a = this.getViewportSizeMinusPadding_(-i), l = xs(
        t,
        s,
        [a[0] / 2 + o[3], a[1] / 2 + o[0]],
        e,
        i
      );
      r = [
        t[0] - l[0],
        t[1] - l[1]
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
  adjustCenter(t) {
    const e = Xs(this.targetCenter_, this.getProjection());
    this.setCenter([
      e[0] + t[0],
      e[1] + t[1]
    ]);
  }
  /**
   * Adds relative coordinates to the center of the view. Any extent constraint will apply.
   * @param {import("./coordinate.js").Coordinate} deltaCoordinates Relative value to add.
   */
  adjustCenterInternal(t) {
    const e = this.targetCenter_;
    this.setCenterInternal([
      e[0] + t[0],
      e[1] + t[1]
    ]);
  }
  /**
   * Multiply the view resolution by a ratio, optionally using an anchor. Any resolution
   * constraint will apply.
   * @param {number} ratio The ratio to apply on the view resolution.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   * @api
   */
  adjustResolution(t, e) {
    e = e && de(e, this.getProjection()), this.adjustResolutionInternal(t, e);
  }
  /**
   * Multiply the view resolution by a ratio, optionally using an anchor. Any resolution
   * constraint will apply.
   * @param {number} ratio The ratio to apply on the view resolution.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   */
  adjustResolutionInternal(t, e) {
    const i = this.getAnimating() || this.getInteracting(), s = this.getViewportSize_(this.getRotation()), r = this.constraints_.resolution(
      this.targetResolution_ * t,
      0,
      s,
      i
    );
    e && (this.targetCenter_ = this.calculateCenterZoom(r, e)), this.targetResolution_ *= t, this.applyTargetState_();
  }
  /**
   * Adds a value to the view zoom level, optionally using an anchor. Any resolution
   * constraint will apply.
   * @param {number} delta Relative value to add to the zoom level.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   * @api
   */
  adjustZoom(t, e) {
    this.adjustResolution(Math.pow(this.zoomFactor_, -t), e);
  }
  /**
   * Adds a value to the view rotation, optionally using an anchor. Any rotation
   * constraint will apply.
   * @param {number} delta Relative value to add to the zoom rotation, in radians.
   * @param {import("./coordinate.js").Coordinate} [anchor] The rotation center.
   * @api
   */
  adjustRotation(t, e) {
    e && (e = de(e, this.getProjection())), this.adjustRotationInternal(t, e);
  }
  /**
   * @param {number} delta Relative value to add to the zoom rotation, in radians.
   * @param {import("./coordinate.js").Coordinate} [anchor] The rotation center.
   */
  adjustRotationInternal(t, e) {
    const i = this.getAnimating() || this.getInteracting(), s = this.constraints_.rotation(
      this.targetRotation_ + t,
      i
    );
    e && (this.targetCenter_ = this.calculateCenterRotate(s, e)), this.targetRotation_ += t, this.applyTargetState_();
  }
  /**
   * Set the center of the current view. Any extent constraint will apply.
   * @param {import("./coordinate.js").Coordinate|undefined} center The center of the view.
   * @observable
   * @api
   */
  setCenter(t) {
    this.setCenterInternal(
      t && de(t, this.getProjection())
    );
  }
  /**
   * Set the center using the view projection (not the user projection).
   * @param {import("./coordinate.js").Coordinate|undefined} center The center of the view.
   */
  setCenterInternal(t) {
    this.targetCenter_ = t, this.applyTargetState_();
  }
  /**
   * @param {import("./ViewHint.js").default} hint Hint.
   * @param {number} delta Delta.
   * @return {number} New value.
   */
  setHint(t, e) {
    return this.hints_[t] += e, this.changed(), this.hints_[t];
  }
  /**
   * Set the resolution for this view. Any resolution constraint will apply.
   * @param {number|undefined} resolution The resolution of the view.
   * @observable
   * @api
   */
  setResolution(t) {
    this.targetResolution_ = t, this.applyTargetState_();
  }
  /**
   * Set the rotation for this view. Any rotation constraint will apply.
   * @param {number} rotation The rotation of the view in radians.
   * @observable
   * @api
   */
  setRotation(t) {
    this.targetRotation_ = t, this.applyTargetState_();
  }
  /**
   * Zoom to a specific zoom level. Any resolution constrain will apply.
   * @param {number} zoom Zoom level.
   * @api
   */
  setZoom(t) {
    this.setResolution(this.getResolutionForZoom(t));
  }
  /**
   * Recompute rotation/resolution/center based on target values.
   * Note: we have to compute rotation first, then resolution and center considering that
   * parameters can influence one another in case a view extent constraint is present.
   * @param {boolean} [doNotCancelAnims] Do not cancel animations.
   * @param {boolean} [forceMoving] Apply constraints as if the view is moving.
   * @private
   */
  applyTargetState_(t, e) {
    const i = this.getAnimating() || this.getInteracting() || e, s = this.constraints_.rotation(
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
    this.get(Ut.ROTATION) !== s && this.set(Ut.ROTATION, s), this.get(Ut.RESOLUTION) !== o && (this.set(Ut.RESOLUTION, o), this.set("zoom", this.getZoom(), !0)), (!a || !this.get(Ut.CENTER) || !On(this.get(Ut.CENTER), a)) && this.set(Ut.CENTER, a), this.getAnimating() && !t && this.cancelAnimations(), this.cancelAnchor_ = void 0;
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
  resolveConstraints(t, e, i) {
    t = t !== void 0 ? t : 200;
    const s = e || 0, r = this.constraints_.rotation(this.targetRotation_), o = this.getViewportSize_(r), a = this.constraints_.resolution(
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
    if (t === 0 && !this.cancelAnchor_) {
      this.targetResolution_ = a, this.targetRotation_ = r, this.targetCenter_ = l, this.applyTargetState_();
      return;
    }
    i = i || (t === 0 ? this.cancelAnchor_ : void 0), this.cancelAnchor_ = void 0, (this.getResolution() !== a || this.getRotation() !== r || !this.getCenterInternal() || !On(this.getCenterInternal(), l)) && (this.getAnimating() && this.cancelAnimations(), this.animateInternal({
      rotation: r,
      center: l,
      resolution: a,
      duration: t,
      easing: Ii,
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
    this.resolveConstraints(0), this.setHint(_t.INTERACTING, 1);
  }
  /**
   * Notify the View that an interaction has ended. The view state will be resolved
   * to a stable one if needed (depending on its constraints).
   * @param {number} [duration] Animation duration in ms.
   * @param {number} [resolutionDirection] Which direction to zoom.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   * @api
   */
  endInteraction(t, e, i) {
    i = i && de(i, this.getProjection()), this.endInteractionInternal(t, e, i);
  }
  /**
   * Notify the View that an interaction has ended. The view state will be resolved
   * to a stable one if needed (depending on its constraints).
   * @param {number} [duration] Animation duration in ms.
   * @param {number} [resolutionDirection] Which direction to zoom.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   */
  endInteractionInternal(t, e, i) {
    this.getInteracting() && (this.setHint(_t.INTERACTING, -1), this.resolveConstraints(t, e, i));
  }
  /**
   * Get a valid position for the view center according to the current constraints.
   * @param {import("./coordinate.js").Coordinate|undefined} targetCenter Target center position.
   * @param {number} [targetResolution] Target resolution. If not supplied, the current one will be used.
   * This is useful to guess a valid center position at a different zoom level.
   * @return {import("./coordinate.js").Coordinate|undefined} Valid center position.
   */
  getConstrainedCenter(t, e) {
    const i = this.getViewportSize_(this.getRotation());
    return this.constraints_.center(
      t,
      e || this.getResolution(),
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
  getConstrainedZoom(t, e) {
    const i = this.getResolutionForZoom(t);
    return this.getZoomForResolution(
      this.getConstrainedResolution(i, e)
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
  getConstrainedResolution(t, e) {
    e = e || 0;
    const i = this.getViewportSize_(this.getRotation());
    return this.constraints_.resolution(t, e, i);
  }
}
function An(n, t) {
  setTimeout(function() {
    n(t);
  }, 0);
}
function Sh(n) {
  if (n.extent !== void 0) {
    const e = n.smoothExtentConstraint !== void 0 ? n.smoothExtentConstraint : !0;
    return ro(n.extent, n.constrainOnlyCenter, e);
  }
  const t = hr(n.projection, "EPSG:3857");
  if (n.multiWorld !== !0 && t.isGlobal()) {
    const e = t.getExtent().slice();
    return e[0] = -1 / 0, e[2] = 1 / 0, ro(e, !1, !1);
  }
  return ql;
}
function Mh(n) {
  let t, e, i, o = n.minZoom !== void 0 ? n.minZoom : Es, a = n.maxZoom !== void 0 ? n.maxZoom : 28;
  const l = n.zoomFactor !== void 0 ? n.zoomFactor : 2, h = n.multiWorld !== void 0 ? n.multiWorld : !1, c = n.smoothResolutionConstraint !== void 0 ? n.smoothResolutionConstraint : !0, u = n.showFullExtent !== void 0 ? n.showFullExtent : !1, d = hr(n.projection, "EPSG:3857"), f = d.getExtent();
  let g = n.constrainOnlyCenter, m = n.extent;
  if (!h && !m && d.isGlobal() && (g = !1, m = f), n.resolutions !== void 0) {
    const _ = n.resolutions;
    e = _[o], i = _[a] !== void 0 ? _[a] : _[_.length - 1], n.constrainResolution ? t = Jl(
      _,
      c,
      !g && m,
      u
    ) : t = oo(
      e,
      i,
      c,
      !g && m,
      u
    );
  } else {
    const p = (f ? Math.max(tt(f), St(f)) : (
      // use an extent that can fit the whole world if need be
      360 * Ui.degrees / d.getMetersPerUnit()
    )) / nr / Math.pow(2, Es), y = p / Math.pow(2, 28 - Es);
    e = n.maxResolution, e !== void 0 ? o = 0 : e = p / Math.pow(l, o), i = n.minResolution, i === void 0 && (n.maxZoom !== void 0 ? n.maxResolution !== void 0 ? i = e / Math.pow(l, a) : i = p / Math.pow(l, a) : i = y), a = o + Math.floor(
      Math.log(e / i) / Math.log(l)
    ), i = e / Math.pow(l, a - o), n.constrainResolution ? t = $l(
      l,
      e,
      i,
      c,
      !g && m,
      u
    ) : t = oo(
      e,
      i,
      c,
      !g && m,
      u
    );
  }
  return {
    constraint: t,
    maxResolution: e,
    minResolution: i,
    minZoom: o,
    zoomFactor: l
  };
}
function Lh(n) {
  if (n.enableRotation !== void 0 ? n.enableRotation : !0) {
    const e = n.constrainRotation;
    return e === void 0 || e === !0 ? eh() : e === !1 ? ao : typeof e == "number" ? th(e) : ao;
  }
  return gr;
}
function bh(n) {
  return !(n.sourceCenter && n.targetCenter && !On(n.sourceCenter, n.targetCenter) || n.sourceResolution !== n.targetResolution || n.sourceRotation !== n.targetRotation);
}
function xs(n, t, e, i, s) {
  const r = Math.cos(-s);
  let o = Math.sin(-s), a = n[0] * r - n[1] * o, l = n[1] * r + n[0] * o;
  a += (t[0] / 2 - e[0]) * i, l += (e[1] - t[1] / 2) * i, o = -o;
  const h = a * r - l * o, c = l * r + a * o;
  return [h, c];
}
const qt = Th;
class es extends qo {
  /**
   * @param {Options<SourceType>} options Layer options.
   */
  constructor(t) {
    const e = Object.assign({}, t);
    delete e.source, super(e), this.on, this.once, this.un, this.mapPrecomposeKey_ = null, this.mapRenderKey_ = null, this.sourceChangeKey_ = null, this.renderer_ = null, this.sourceReady_ = !1, this.rendered = !1, t.render && (this.render = t.render), t.map && this.setMap(t.map), this.addChangeListener(
      $.SOURCE,
      this.handleSourcePropertyChange_
    );
    const i = t.source ? (
      /** @type {SourceType} */
      t.source
    ) : null;
    this.setSource(i);
  }
  /**
   * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be modified in place).
   * @return {Array<import("./Layer.js").default>} Array of layers.
   */
  getLayersArray(t) {
    return t = t || [], t.push(this), t;
  }
  /**
   * @param {Array<import("./Layer.js").State>} [states] Optional list of layer states (to be modified in place).
   * @return {Array<import("./Layer.js").State>} List of layer states.
   */
  getLayerStatesArray(t) {
    return t = t || [], t.push(this.getLayerState()), t;
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
      this.get($.SOURCE) || null
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
    const t = this.getSource();
    return t ? t.getState() : "undefined";
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
    this.sourceChangeKey_ && (it(this.sourceChangeKey_), this.sourceChangeKey_ = null), this.sourceReady_ = !1;
    const t = this.getSource();
    t && (this.sourceChangeKey_ = j(
      t,
      N.CHANGE,
      this.handleSourceChange_,
      this
    ), t.getState() === "ready" && (this.sourceReady_ = !0, setTimeout(() => {
      this.dispatchEvent("sourceready");
    }, 0))), this.changed();
  }
  /**
   * @param {import("../pixel").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../Feature").FeatureLike>>} Promise that resolves with
   * an array of features.
   */
  getFeatures(t) {
    return this.renderer_ ? this.renderer_.getFeatures(t) : Promise.resolve([]);
  }
  /**
   * @param {import("../pixel").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
   */
  getData(t) {
    return !this.renderer_ || !this.rendered ? null : this.renderer_.getData(t);
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
  isVisible(t) {
    let e;
    const i = this.getMapInternal();
    !t && i && (t = i.getView()), t instanceof qt ? e = {
      viewState: t.getState(),
      extent: t.calculateExtent()
    } : e = t, !e.layerStatesArray && i && (e.layerStatesArray = i.getLayerGroup().getLayerStatesArray());
    let s;
    e.layerStatesArray ? s = e.layerStatesArray.find(
      (o) => o.layer === this
    ) : s = this.getLayerState();
    const r = this.getExtent();
    return wr(s, e.viewState) && (!r || Rt(r, e.extent));
  }
  /**
   * Get the attributions of the source of this layer for the given view.
   * @param {View|import("../View.js").ViewStateLayerStateExtent} [view] View or {@link import("../Map.js").FrameState}.
   * Only required when the layer is not added to a map.
   * @return {Array<string>} Attributions for this layer at the given view.
   * @api
   */
  getAttributions(t) {
    if (!this.isVisible(t))
      return [];
    let e;
    const i = this.getSource();
    if (i && (e = i.getAttributions()), !e)
      return [];
    const s = t instanceof qt ? t.getViewStateAndExtent() : t;
    let r = e(s);
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
  render(t, e) {
    const i = this.getRenderer();
    return i.prepareFrame(t) ? (this.rendered = !0, i.renderFrame(t, e)) : null;
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
  renderDeclutter(t, e) {
  }
  /**
   * When the renderer follows a layout -> render approach, do the final rendering here.
   * @param {import('../Map.js').FrameState} frameState Frame state
   */
  renderDeferred(t) {
    const e = this.getRenderer();
    e && e.renderDeferred(t);
  }
  /**
   * For use inside the library only.
   * @param {import("../Map.js").default|null} map Map.
   */
  setMapInternal(t) {
    t || this.unrender(), this.set($.MAP, t);
  }
  /**
   * For use inside the library only.
   * @return {import("../Map.js").default|null} Map.
   */
  getMapInternal() {
    return this.get($.MAP);
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
  setMap(t) {
    this.mapPrecomposeKey_ && (it(this.mapPrecomposeKey_), this.mapPrecomposeKey_ = null), t || this.changed(), this.mapRenderKey_ && (it(this.mapRenderKey_), this.mapRenderKey_ = null), t && (this.mapPrecomposeKey_ = j(
      t,
      Bt.PRECOMPOSE,
      function(e) {
        const s = /** @type {import("../render/Event.js").default} */ e.frameState.layerStatesArray, r = this.getLayerState(!1);
        U(
          !s.some(function(o) {
            return o.layer === r.layer;
          }),
          "A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both."
        ), s.push(r);
      },
      this
    ), this.mapRenderKey_ = j(this, N.CHANGE, t.render, t), this.changed());
  }
  /**
   * Set the layer source.
   * @param {SourceType|null} source The layer source.
   * @observable
   * @api
   */
  setSource(t) {
    this.set($.SOURCE, t);
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
function wr(n, t) {
  if (!n.visible)
    return !1;
  const e = t.resolution;
  if (e < n.minResolution || e >= n.maxResolution)
    return !1;
  const i = t.zoom;
  return i > n.minZoom && i <= n.maxZoom;
}
const In = {
  PRELOAD: "preload",
  USE_INTERIM_TILES_ON_ERROR: "useInterimTilesOnError"
};
class Dh extends es {
  /**
   * @param {Options<TileSourceType>} [options] Tile layer options.
   */
  constructor(t) {
    t = t || {};
    const e = Object.assign({}, t);
    delete e.preload, delete e.useInterimTilesOnError, super(e), this.on, this.once, this.un, this.setPreload(t.preload !== void 0 ? t.preload : 0), this.setUseInterimTilesOnError(
      t.useInterimTilesOnError !== void 0 ? t.useInterimTilesOnError : !0
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
      this.get(In.PRELOAD)
    );
  }
  /**
   * Set the level as number to which we will preload tiles up to.
   * @param {number} preload The level to preload tiles up to.
   * @observable
   * @api
   */
  setPreload(t) {
    this.set(In.PRELOAD, t);
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
      this.get(In.USE_INTERIM_TILES_ON_ERROR)
    );
  }
  /**
   * Set whether we use interim tiles on error.
   * @param {boolean} useInterimTilesOnError Use interim tiles on error.
   * @observable
   * @api
   */
  setUseInterimTilesOnError(t) {
    this.set(In.USE_INTERIM_TILES_ON_ERROR, t);
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
  getData(t) {
    return super.getData(t);
  }
}
const X = {
  IDLE: 0,
  LOADING: 1,
  LOADED: 2,
  ERROR: 3,
  EMPTY: 4
};
class Ph extends an {
  /**
   * @param {LayerType} layer Layer.
   */
  constructor(t) {
    super(), this.ready = !0, this.boundHandleImageChange_ = this.handleImageChange_.bind(this), this.layer_ = t, this.declutterExecutorGroup = null;
  }
  /**
   * Asynchronous layer level hit detection.
   * @param {import("../pixel.js").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../Feature").FeatureLike>>} Promise that resolves with
   * an array of features.
   */
  getFeatures(t) {
    return H();
  }
  /**
   * @param {import("../pixel.js").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
   */
  getData(t) {
    return null;
  }
  /**
   * Determine whether render should be called.
   * @abstract
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   */
  prepareFrame(t) {
    return H();
  }
  /**
   * Render the layer.
   * @abstract
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement|null} target Target that may be used to render content to.
   * @return {HTMLElement|null} The rendered element.
   */
  renderFrame(t, e) {
    return H();
  }
  /**
   * @param {Object<number, Object<string, import("../Tile.js").default>>} tiles Lookup of loaded tiles by zoom level.
   * @param {number} zoom Zoom level.
   * @param {import("../Tile.js").default} tile Tile.
   * @return {boolean|void} If `false`, the tile will not be considered loaded.
   */
  loadedTileCallback(t, e, i) {
    t[e] || (t[e] = {}), t[e][i.tileCoord.toString()] = i;
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
  createLoadedTileFinder(t, e, i) {
    return (
      /**
       * @param {number} zoom Zoom level.
       * @param {import("../TileRange.js").default} tileRange Tile range.
       * @return {boolean} The tile range is fully loaded.
       */
      (s, r) => {
        const o = this.loadedTileCallback.bind(this, i, s);
        return t.forEachLoadedTile(e, s, r, o);
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
  forEachFeatureAtCoordinate(t, e, i, s, r) {
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
  handleImageChange_(t) {
    const e = (
      /** @type {import("../Image.js").default} */
      t.target
    );
    (e.getState() === X.LOADED || e.getState() === X.ERROR) && this.renderIfReadyAndVisible();
  }
  /**
   * Load the image if not already loaded, and register the image change
   * listener if needed.
   * @param {import("../Image.js").default} image Image.
   * @return {boolean} `true` if the image is already loaded, `false` otherwise.
   * @protected
   */
  loadImage(t) {
    let e = t.getState();
    return e != X.LOADED && e != X.ERROR && t.addEventListener(N.CHANGE, this.boundHandleImageChange_), e == X.IDLE && (t.load(), e = t.getState()), e == X.LOADED;
  }
  /**
   * @protected
   */
  renderIfReadyAndVisible() {
    const t = this.getLayer();
    t && t.getVisible() && t.getSourceState() === "ready" && t.changed();
  }
  /**
   * @param {import("../Map.js").FrameState} frameState Frame state.
   */
  renderDeferred(t) {
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    delete this.layer_, super.disposeInternal();
  }
}
class _a extends Ee {
  /**
   * @param {import("./EventType.js").default} type Type.
   * @param {import("../transform.js").Transform} [inversePixelTransform] Transform for
   *     CSS pixels to rendered pixels.
   * @param {import("../Map.js").FrameState} [frameState] Frame state.
   * @param {?(CanvasRenderingContext2D|WebGLRenderingContext)} [context] Context.
   */
  constructor(t, e, i, s) {
    super(t), this.inversePixelTransform = e, this.frameState = i, this.context = s;
  }
}
const Fe = typeof navigator < "u" && typeof navigator.userAgent < "u" ? navigator.userAgent.toLowerCase() : "", Oh = Fe.includes("firefox"), kh = Fe.includes("safari") && !Fe.includes("chrom");
kh && (Fe.includes("version/15.4") || /cpu (os|iphone os) 15_4 like mac os x/.test(Fe));
const Fh = Fe.includes("webkit") && !Fe.includes("edge"), pa = Fe.includes("macintosh"), ya = typeof devicePixelRatio < "u" ? devicePixelRatio : 1, Ea = typeof WorkerGlobalScope < "u" && typeof OffscreenCanvas < "u" && self instanceof WorkerGlobalScope, xa = typeof Image < "u" && Image.prototype.decode, Ca = function() {
  let n = !1;
  try {
    const t = Object.defineProperty({}, "passive", {
      get: function() {
        n = !0;
      }
    });
    window.addEventListener("_", null, t), window.removeEventListener("_", null, t);
  } catch {
  }
  return n;
}();
function ft(n, t, e, i) {
  let s;
  return e && e.length ? s = /** @type {HTMLCanvasElement} */
  e.shift() : Ea ? s = new OffscreenCanvas(n || 300, t || 300) : s = document.createElement("canvas"), n && (s.width = n), t && (s.height = t), /** @type {CanvasRenderingContext2D} */
  s.getContext("2d", i);
}
let Cs;
function Ys() {
  return Cs || (Cs = ft(1, 1)), Cs;
}
function is(n) {
  const t = n.canvas;
  t.width = 1, t.height = 1, n.clearRect(0, 0, 1, 1);
}
function _o(n, t) {
  const e = t.parentNode;
  e && e.replaceChild(n, t);
}
function Ks(n) {
  return n && n.parentNode ? n.parentNode.removeChild(n) : null;
}
function Nh(n) {
  for (; n.lastChild; )
    n.removeChild(n.lastChild);
}
function Gh(n, t) {
  const e = n.childNodes;
  for (let i = 0; ; ++i) {
    const s = e[i], r = t[i];
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
class wa {
  constructor() {
    /**
     * @private
     * @param {...*} args Args.
     * @return {ZIndexContext} This.
     */
    Xr(this, "pushMethodArgs_", (...t) => (this.instructions_[this.zIndex + this.offset_].push(t), this));
    this.instructions_ = [], this.zIndex = 0, this.offset_ = 0, this.context_ = /** @type {ZIndexContextProxy} */
    new Proxy(CanvasRenderingContext2D.prototype, {
      get: (t, e) => {
        if (typeof /** @type {*} */
        Ys()[e] == "function")
          return this.instructions_[this.zIndex + this.offset_] || (this.instructions_[this.zIndex + this.offset_] = []), this.instructions_[this.zIndex + this.offset_].push(e), this.pushMethodArgs_;
      },
      set: (t, e, i) => (this.instructions_[this.zIndex + this.offset_] || (this.instructions_[this.zIndex + this.offset_] = []), this.instructions_[this.zIndex + this.offset_].push(e, i), !0)
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
  draw(t) {
    this.instructions_.forEach((e) => {
      for (let i = 0, s = e.length; i < s; i += 2) {
        const r = e[i], o = e[i + 1];
        if (typeof /** @type {*} */
        t[r] == "function")
          t[r](...o);
        else {
          if (typeof o == "function") {
            t[r] = o(t);
            continue;
          }
          t[r] = o;
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
const ji = {
  name: "rgb",
  min: [0, 0, 0],
  max: [255, 255, 255],
  channel: ["red", "green", "blue"],
  alias: ["RGB"]
};
var dt = {
  name: "xyz",
  min: [0, 0, 0],
  channel: ["X", "Y", "Z"],
  alias: ["XYZ", "ciexyz", "cie1931"]
};
dt.whitepoint = {
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
dt.max = dt.whitepoint[2].D65;
dt.rgb = function(n, t) {
  t = t || dt.whitepoint[2].E;
  var e = n[0] / t[0], i = n[1] / t[1], s = n[2] / t[2], r, o, a;
  return r = e * 3.240969941904521 + i * -1.537383177570093 + s * -0.498610760293, o = e * -0.96924363628087 + i * 1.87596750150772 + s * 0.041555057407175, a = e * 0.055630079696993 + i * -0.20397695888897 + s * 1.056971514242878, r = r > 31308e-7 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : r = r * 12.92, o = o > 31308e-7 ? 1.055 * Math.pow(o, 1 / 2.4) - 0.055 : o = o * 12.92, a = a > 31308e-7 ? 1.055 * Math.pow(a, 1 / 2.4) - 0.055 : a = a * 12.92, r = Math.min(Math.max(0, r), 1), o = Math.min(Math.max(0, o), 1), a = Math.min(Math.max(0, a), 1), [r * 255, o * 255, a * 255];
};
ji.xyz = function(n, t) {
  var e = n[0] / 255, i = n[1] / 255, s = n[2] / 255;
  e = e > 0.04045 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92, i = i > 0.04045 ? Math.pow((i + 0.055) / 1.055, 2.4) : i / 12.92, s = s > 0.04045 ? Math.pow((s + 0.055) / 1.055, 2.4) : s / 12.92;
  var r = e * 0.41239079926595 + i * 0.35758433938387 + s * 0.18048078840183, o = e * 0.21263900587151 + i * 0.71516867876775 + s * 0.072192315360733, a = e * 0.019330818715591 + i * 0.11919477979462 + s * 0.95053215224966;
  return t = t || dt.whitepoint[2].E, [r * t[0], o * t[1], a * t[2]];
};
const Ar = {
  name: "luv",
  //NOTE: luv has no rigidly defined limits
  //easyrgb fails to get proper coords
  //boronine states no rigid limits
  //colorMine refers this ones:
  min: [0, -134, -140],
  max: [100, 224, 122],
  channel: ["lightness", "u", "v"],
  alias: ["LUV", "cieluv", "cie1976"],
  xyz: function(n, t, e) {
    var i, s, r, o, a, l, h, c, u, d, f, g, m;
    if (r = n[0], o = n[1], a = n[2], r === 0)
      return [0, 0, 0];
    var _ = 0.0011070564598794539;
    return t = t || "D65", e = e || 2, u = dt.whitepoint[e][t][0], d = dt.whitepoint[e][t][1], f = dt.whitepoint[e][t][2], g = 4 * u / (u + 15 * d + 3 * f), m = 9 * d / (u + 15 * d + 3 * f), i = o / (13 * r) + g || 0, s = a / (13 * r) + m || 0, h = r > 8 ? d * Math.pow((r + 16) / 116, 3) : d * r * _, l = h * 9 * i / (4 * s) || 0, c = h * (12 - 3 * i - 20 * s) / (4 * s) || 0, [l, h, c];
  }
};
dt.luv = function(n, t, e) {
  var i, s, r, o, a, l, h, c, u, d, f, g, m, _ = 0.008856451679035631, p = 903.2962962962961;
  t = t || "D65", e = e || 2, u = dt.whitepoint[e][t][0], d = dt.whitepoint[e][t][1], f = dt.whitepoint[e][t][2], g = 4 * u / (u + 15 * d + 3 * f), m = 9 * d / (u + 15 * d + 3 * f), l = n[0], h = n[1], c = n[2], i = 4 * l / (l + 15 * h + 3 * c) || 0, s = 9 * h / (l + 15 * h + 3 * c) || 0;
  var y = h / d;
  return r = y <= _ ? p * y : 116 * Math.pow(y, 1 / 3) - 16, o = 13 * r * (i - g), a = 13 * r * (s - m), [r, o, a];
};
var Aa = {
  name: "lchuv",
  channel: ["lightness", "chroma", "hue"],
  alias: ["LCHuv", "cielchuv"],
  min: [0, 0, 0],
  max: [100, 100, 360],
  luv: function(n) {
    var t = n[0], e = n[1], i = n[2], s, r, o;
    return o = i / 360 * 2 * Math.PI, s = e * Math.cos(o), r = e * Math.sin(o), [t, s, r];
  },
  xyz: function(n) {
    return Ar.xyz(Aa.luv(n));
  }
};
Ar.lchuv = function(n) {
  var t = n[0], e = n[1], i = n[2], s = Math.sqrt(e * e + i * i), r = Math.atan2(i, e), o = r * 360 / 2 / Math.PI;
  return o < 0 && (o += 360), [t, s, o];
};
dt.lchuv = function(n) {
  return Ar.lchuv(dt.luv(n));
};
function Bh(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Wh = {
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
const po = /* @__PURE__ */ Bh(Wh);
var yo = {
  red: 0,
  orange: 60,
  yellow: 120,
  green: 180,
  blue: 240,
  purple: 300
};
function zh(n) {
  var c, u;
  var t, e = [], i = 1, s;
  if (typeof n == "number")
    return { space: "rgb", values: [n >>> 16, (n & 65280) >>> 8, n & 255], alpha: 1 };
  if (typeof n == "number")
    return { space: "rgb", values: [n >>> 16, (n & 65280) >>> 8, n & 255], alpha: 1 };
  if (n = String(n).toLowerCase(), po[n])
    e = po[n].slice(), s = "rgb";
  else if (n === "transparent")
    i = 0, s = "rgb", e = [0, 0, 0];
  else if (n[0] === "#") {
    var r = n.slice(1), o = r.length, a = o <= 4;
    i = 1, a ? (e = [
      parseInt(r[0] + r[0], 16),
      parseInt(r[1] + r[1], 16),
      parseInt(r[2] + r[2], 16)
    ], o === 4 && (i = parseInt(r[3] + r[3], 16) / 255)) : (e = [
      parseInt(r[0] + r[1], 16),
      parseInt(r[2] + r[3], 16),
      parseInt(r[4] + r[5], 16)
    ], o === 8 && (i = parseInt(r[6] + r[7], 16) / 255)), e[0] || (e[0] = 0), e[1] || (e[1] = 0), e[2] || (e[2] = 0), s = "rgb";
  } else if (t = /^((?:rgba?|hs[lvb]a?|hwba?|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms|oklch|oklab|color))\s*\(([^\)]*)\)/.exec(n)) {
    var l = t[1];
    s = l.replace(/a$/, "");
    var h = s === "cmyk" ? 4 : s === "gray" ? 1 : 3;
    e = t[2].trim().split(/\s*[,\/]\s*|\s+/), s === "color" && (s = e.shift()), e = e.map(function(d, f) {
      if (d[d.length - 1] === "%")
        return d = parseFloat(d) / 100, f === 3 ? d : s === "rgb" ? d * 255 : s[0] === "h" || s[0] === "l" && !f ? d * 100 : s === "lab" ? d * 125 : s === "lch" ? f < 2 ? d * 150 : d * 360 : s[0] === "o" && !f ? d : s === "oklab" ? d * 0.4 : s === "oklch" ? f < 2 ? d * 0.4 : d * 360 : d;
      if (s[f] === "h" || f === 2 && s[s.length - 1] === "h") {
        if (yo[d] !== void 0)
          return yo[d];
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
    }), i = e.length > h ? e.pop() : 1;
  } else
    /[0-9](?:\s|\/|,)/.test(n) && (e = n.match(/([0-9]+)/g).map(function(d) {
      return parseFloat(d);
    }), s = ((u = (c = n.match(/([a-z])/ig)) == null ? void 0 : c.join("")) == null ? void 0 : u.toLowerCase()) || "rgb");
  return {
    space: s,
    values: e,
    alpha: i
  };
}
const ws = {
  name: "hsl",
  min: [0, 0, 0],
  max: [360, 100, 100],
  channel: ["hue", "saturation", "lightness"],
  alias: ["HSL"],
  rgb: function(n) {
    var t = n[0] / 360, e = n[1] / 100, i = n[2] / 100, s, r, o, a, l, h = 0;
    if (e === 0)
      return l = i * 255, [l, l, l];
    for (r = i < 0.5 ? i * (1 + e) : i + e - i * e, s = 2 * i - r, a = [0, 0, 0]; h < 3; )
      o = t + 1 / 3 * -(h - 1), o < 0 ? o++ : o > 1 && o--, l = 6 * o < 1 ? s + (r - s) * 6 * o : 2 * o < 1 ? r : 3 * o < 2 ? s + (r - s) * (2 / 3 - o) * 6 : s, a[h++] = l * 255;
    return a;
  }
};
ji.hsl = function(n) {
  var t = n[0] / 255, e = n[1] / 255, i = n[2] / 255, s = Math.min(t, e, i), r = Math.max(t, e, i), o = r - s, a, l, h;
  return r === s ? a = 0 : t === r ? a = (e - i) / o : e === r ? a = 2 + (i - t) / o : i === r && (a = 4 + (t - e) / o), a = Math.min(a * 60, 360), a < 0 && (a += 360), h = (s + r) / 2, r === s ? l = 0 : h <= 0.5 ? l = o / (r + s) : l = o / (2 - r - s), [a, l * 100, h * 100];
};
function Xh(n) {
  Array.isArray(n) && n.raw && (n = String.raw(...arguments)), n instanceof Number && (n = +n);
  var t, e = zh(n);
  if (!e.space)
    return [];
  const i = e.space[0] === "h" ? ws.min : ji.min, s = e.space[0] === "h" ? ws.max : ji.max;
  return t = Array(3), t[0] = Math.min(Math.max(e.values[0], i[0]), s[0]), t[1] = Math.min(Math.max(e.values[1], i[1]), s[1]), t[2] = Math.min(Math.max(e.values[2], i[2]), s[2]), e.space[0] === "h" && (t = ws.rgb(t)), t.push(Math.min(Math.max(e.alpha, 0), 1)), t;
}
function Yh(n) {
  return typeof n == "string" ? n : va(n);
}
const Kh = 1024, Oi = {};
let As = 0;
function Uh(n) {
  if (n.length === 4)
    return n;
  const t = n.slice();
  return t[3] = 1, t;
}
function Eo(n) {
  const t = dt.lchuv(ji.xyz(n));
  return t[3] = n[3], t;
}
function Vh(n) {
  const t = dt.rgb(Aa.xyz(n));
  return t[3] = n[3], t;
}
function Ir(n) {
  if (Oi.hasOwnProperty(n))
    return Oi[n];
  if (As >= Kh) {
    let e = 0;
    for (const i in Oi)
      e++ & 3 || (delete Oi[i], --As);
  }
  const t = Xh(n);
  if (t.length !== 4)
    throw new Error('Failed to parse "' + n + '" as color');
  for (const e of t)
    if (isNaN(e))
      throw new Error('Failed to parse "' + n + '" as color');
  return Ia(t), Oi[n] = t, ++As, t;
}
function Qi(n) {
  return Array.isArray(n) ? n : Ir(n);
}
function Ia(n) {
  return n[0] = lt(n[0] + 0.5 | 0, 0, 255), n[1] = lt(n[1] + 0.5 | 0, 0, 255), n[2] = lt(n[2] + 0.5 | 0, 0, 255), n[3] = lt(n[3], 0, 1), n;
}
function va(n) {
  let t = n[0];
  t != (t | 0) && (t = t + 0.5 | 0);
  let e = n[1];
  e != (e | 0) && (e = e + 0.5 | 0);
  let i = n[2];
  i != (i | 0) && (i = i + 0.5 | 0);
  const s = n[3] === void 0 ? 1 : Math.round(n[3] * 1e3) / 1e3;
  return "rgba(" + t + "," + e + "," + i + "," + s + ")";
}
function Zh(n) {
  try {
    return Ir(n), !0;
  } catch {
    return !1;
  }
}
const xo = [];
let ai = null;
function Hh() {
  ai = ft(1, 1, void 0, {
    willReadFrequently: !0
  });
}
class Ra extends Ph {
  /**
   * @param {LayerType} layer Layer.
   */
  constructor(t) {
    super(t), this.container = null, this.renderedResolution, this.tempTransform = Ht(), this.pixelTransform = Ht(), this.inversePixelTransform = Ht(), this.context = null, this.deferredContext_ = null, this.containerReused = !1, this.pixelContext_ = null, this.frameState = null;
  }
  /**
   * @param {import('../../DataTile.js').ImageLike} image Image.
   * @param {number} col The column index.
   * @param {number} row The row index.
   * @return {Uint8ClampedArray|null} The image data.
   */
  getImageData(t, e, i) {
    ai || Hh(), ai.clearRect(0, 0, 1, 1);
    let s;
    try {
      ai.drawImage(t, e, i, 1, 1, 0, 0, 1, 1), s = ai.getImageData(0, 0, 1, 1).data;
    } catch {
      return ai = null, null;
    }
    return s;
  }
  /**
   * @param {import('../../Map.js').FrameState} frameState Frame state.
   * @return {string} Background color.
   */
  getBackground(t) {
    let i = this.getLayer().getBackground();
    return typeof i == "function" && (i = i(t.viewState.resolution)), i || void 0;
  }
  /**
   * Get a rendering container from an existing target, if compatible.
   * @param {HTMLElement} target Potential render target.
   * @param {string} transform CSS Transform.
   * @param {string} [backgroundColor] Background color.
   */
  useContainer(t, e, i) {
    const s = this.getLayer().getClassName();
    let r, o;
    if (t && t.className === s && (!i || t && t.style.backgroundColor && Ne(
      Qi(t.style.backgroundColor),
      Qi(i)
    ))) {
      const a = t.firstElementChild;
      a instanceof HTMLCanvasElement && (o = a.getContext("2d"));
    }
    if (o && o.canvas.style.transform === e ? (this.container = t, this.context = o, this.containerReused = !0) : this.containerReused ? (this.container = null, this.context = null, this.containerReused = !1) : this.container && (this.container.style.backgroundColor = null), !this.container) {
      r = document.createElement("div"), r.className = s;
      let a = r.style;
      a.position = "absolute", a.width = "100%", a.height = "100%", o = ft();
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
  clipUnrotated(t, e, i) {
    const s = Qe(i), r = jn(i), o = Hn(i), a = Zn(i);
    ut(e.coordinateToPixelTransform, s), ut(e.coordinateToPixelTransform, r), ut(e.coordinateToPixelTransform, o), ut(e.coordinateToPixelTransform, a);
    const l = this.inversePixelTransform;
    ut(l, s), ut(l, r), ut(l, o), ut(l, a), t.save(), t.beginPath(), t.moveTo(Math.round(s[0]), Math.round(s[1])), t.lineTo(Math.round(r[0]), Math.round(r[1])), t.lineTo(Math.round(o[0]), Math.round(o[1])), t.lineTo(Math.round(a[0]), Math.round(a[1])), t.clip();
  }
  /**
   * @param {import("../../render/EventType.js").default} type Event type.
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @private
   */
  dispatchRenderEvent_(t, e, i) {
    const s = this.getLayer();
    if (s.hasListener(t)) {
      const r = new _a(
        t,
        this.inversePixelTransform,
        i,
        e
      );
      s.dispatchEvent(r);
    }
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @protected
   */
  preRender(t, e) {
    this.frameState = e, !e.declutter && this.dispatchRenderEvent_(Bt.PRERENDER, t, e);
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @protected
   */
  postRender(t, e) {
    e.declutter || this.dispatchRenderEvent_(Bt.POSTRENDER, t, e);
  }
  /**
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   */
  renderDeferredInternal(t) {
  }
  /**
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {import('../../render/canvas/ZIndexContext.js').ZIndexContextProxy} Context.
   */
  getRenderContext(t) {
    return t.declutter && !this.deferredContext_ && (this.deferredContext_ = new wa()), t.declutter ? this.deferredContext_.getContext() : this.context;
  }
  /**
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @override
   */
  renderDeferred(t) {
    t.declutter && (this.dispatchRenderEvent_(
      Bt.PRERENDER,
      this.context,
      t
    ), t.declutter && this.deferredContext_ && (this.deferredContext_.draw(this.context), this.deferredContext_.clear()), this.renderDeferredInternal(t), this.dispatchRenderEvent_(
      Bt.POSTRENDER,
      this.context,
      t
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
  getRenderTransform(t, e, i, s, r, o, a) {
    const l = r / 2, h = o / 2, c = s / e, u = -c, d = -t[0] + a, f = -t[1];
    return pe(
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
const b = {
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
class Ta extends Un {
  /**
   * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("./TileState.js").default} state State.
   * @param {Options} [options] Tile options.
   */
  constructor(t, e, i) {
    super(), i = i || {}, this.tileCoord = t, this.state = e, this.interimTile = null, this.key = "", this.transition_ = i.transition === void 0 ? 250 : i.transition, this.transitionStarts_ = {}, this.interpolate = !!i.interpolate;
  }
  /**
   * @protected
   */
  changed() {
    this.dispatchEvent(N.CHANGE);
  }
  /**
   * Called by the tile cache when the tile is removed from the cache due to expiry
   */
  release() {
    this.state === b.ERROR && this.setState(b.EMPTY);
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
    let t = this.interimTile;
    if (!t)
      return this;
    do {
      if (t.getState() == b.LOADED)
        return this.transition_ = 0, t;
      t = t.interimTile;
    } while (t);
    return this;
  }
  /**
   * Goes through the chain of interim tiles and discards sections of the chain
   * that are no longer relevant.
   */
  refreshInterimChain() {
    let t = this.interimTile;
    if (!t)
      return;
    let e = this;
    do {
      if (t.getState() == b.LOADED) {
        t.interimTile = null;
        break;
      }
      t.getState() == b.LOADING ? e = t : t.getState() == b.IDLE ? e.interimTile = t.interimTile : e = t, t = e.interimTile;
    } while (t);
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
  setState(t) {
    if (this.state !== b.ERROR && this.state > t)
      throw new Error("Tile load sequence violation");
    this.state = t, this.changed();
  }
  /**
   * Load the image or retry if loading previously failed.
   * Loading is taken care of by the tile queue, and calling this method is
   * only needed for preloading or for reloading in case of an error.
   * @abstract
   * @api
   */
  load() {
    H();
  }
  /**
   * Get the alpha value for rendering.
   * @param {string} id An id for the renderer.
   * @param {number} time The render frame time.
   * @return {number} A number between 0 and 1.
   */
  getAlpha(t, e) {
    if (!this.transition_)
      return 1;
    let i = this.transitionStarts_[t];
    if (!i)
      i = e, this.transitionStarts_[t] = i;
    else if (i === -1)
      return 1;
    const s = e - i + 1e3 / 60;
    return s >= this.transition_ ? 1 : la(s / this.transition_);
  }
  /**
   * Determine if a tile is in an alpha transition.  A tile is considered in
   * transition if tile.getAlpha() has not yet been called or has been called
   * and returned 1.
   * @param {string} id An id for the renderer.
   * @return {boolean} The tile is in transition.
   */
  inTransition(t) {
    return this.transition_ ? this.transitionStarts_[t] !== -1 : !1;
  }
  /**
   * Mark a transition as complete.
   * @param {string} id An id for the renderer.
   */
  endTransition(t) {
    this.transition_ && (this.transitionStarts_[t] = -1);
  }
}
function jh(n, t, e) {
  const i = (
    /** @type {HTMLImageElement} */
    n
  );
  let s = !0, r = !1, o = !1;
  const a = [
    Dn(i, N.LOAD, function() {
      o = !0, r || t();
    })
  ];
  return i.src && xa ? (r = !0, i.decode().then(function() {
    s && t();
  }).catch(function(l) {
    s && (o ? t() : e());
  })) : a.push(Dn(i, N.ERROR, e)), function() {
    s = !1, a.forEach(it);
  };
}
function Qh(n, t) {
  return new Promise((e, i) => {
    function s() {
      o(), e(n);
    }
    function r() {
      o(), i(new Error("Image load error"));
    }
    function o() {
      n.removeEventListener("load", s), n.removeEventListener("error", r);
    }
    n.addEventListener("load", s), n.addEventListener("error", r), t && (n.src = t);
  });
}
function qh(n, t) {
  return t && (n.src = t), n.src && xa ? new Promise(
    (e, i) => n.decode().then(() => e(n)).catch(
      (s) => n.complete && n.width ? e(n) : i(s)
    )
  ) : Qh(n);
}
class Sa extends Ta {
  /**
   * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("./TileState.js").default} state State.
   * @param {string} src Image source URI.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("./Tile.js").LoadFunction} tileLoadFunction Tile load function.
   * @param {import("./Tile.js").Options} [options] Tile options.
   */
  constructor(t, e, i, s, r, o) {
    super(t, e, o), this.crossOrigin_ = s, this.src_ = i, this.key = i, this.image_ = new Image(), s !== null && (this.image_.crossOrigin = s), this.unlisten_ = null, this.tileLoadFunction_ = r;
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
  setImage(t) {
    this.image_ = t, this.state = b.LOADED, this.unlistenImage_(), this.changed();
  }
  /**
   * Tracks loading or read errors.
   *
   * @private
   */
  handleImageError_() {
    this.state = b.ERROR, this.unlistenImage_(), this.image_ = Jh(), this.changed();
  }
  /**
   * Tracks successful image load.
   *
   * @private
   */
  handleImageLoad_() {
    const t = (
      /** @type {HTMLImageElement} */
      this.image_
    );
    t.naturalWidth && t.naturalHeight ? this.state = b.LOADED : this.state = b.EMPTY, this.unlistenImage_(), this.changed();
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
    this.state == b.ERROR && (this.state = b.IDLE, this.image_ = new Image(), this.crossOrigin_ !== null && (this.image_.crossOrigin = this.crossOrigin_)), this.state == b.IDLE && (this.state = b.LOADING, this.changed(), this.tileLoadFunction_(this, this.src_), this.unlisten_ = jh(
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
function Jh() {
  const n = ft(1, 1);
  return n.fillStyle = "rgba(0,0,0,0)", n.fillRect(0, 0, 1, 1), n.canvas;
}
const $h = 0.5, tc = 10, Co = 0.25;
class ec {
  /**
   * @param {import("../proj/Projection.js").default} sourceProj Source projection.
   * @param {import("../proj/Projection.js").default} targetProj Target projection.
   * @param {import("../extent.js").Extent} targetExtent Target extent to triangulate.
   * @param {import("../extent.js").Extent} maxSourceExtent Maximal source extent that can be used.
   * @param {number} errorThreshold Acceptable error (in source units).
   * @param {?number} destinationResolution The (optional) resolution of the destination.
   */
  constructor(t, e, i, s, r, o) {
    this.sourceProj_ = t, this.targetProj_ = e;
    let a = {};
    const l = kn(this.targetProj_, this.sourceProj_);
    this.transformInv_ = function(y) {
      const C = y[0] + "/" + y[1];
      return a[C] || (a[C] = l(y)), a[C];
    }, this.maxSourceExtent_ = s, this.errorThresholdSquared_ = r * r, this.triangles_ = [], this.wrapsXInSource_ = !1, this.canWrapXInSource_ = this.sourceProj_.canWrapX() && !!s && !!this.sourceProj_.getExtent() && tt(s) >= tt(this.sourceProj_.getExtent()), this.sourceWorldWidth_ = this.sourceProj_.getExtent() ? tt(this.sourceProj_.getExtent()) : null, this.targetWorldWidth_ = this.targetProj_.getExtent() ? tt(this.targetProj_.getExtent()) : null;
    const h = Qe(i), c = jn(i), u = Hn(i), d = Zn(i), f = this.transformInv_(h), g = this.transformInv_(c), m = this.transformInv_(u), _ = this.transformInv_(d), p = tc + (o ? Math.max(
      0,
      Math.ceil(
        Math.log2(
          Gs(i) / (o * o * 256 * 256)
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
      _,
      p
    ), this.wrapsXInSource_) {
      let y = 1 / 0;
      this.triangles_.forEach(function(C, E, x) {
        y = Math.min(
          y,
          C.source[0][0],
          C.source[1][0],
          C.source[2][0]
        );
      }), this.triangles_.forEach((C) => {
        if (Math.max(
          C.source[0][0],
          C.source[1][0],
          C.source[2][0]
        ) - y > this.sourceWorldWidth_ / 2) {
          const E = [
            [C.source[0][0], C.source[0][1]],
            [C.source[1][0], C.source[1][1]],
            [C.source[2][0], C.source[2][1]]
          ];
          E[0][0] - y > this.sourceWorldWidth_ / 2 && (E[0][0] -= this.sourceWorldWidth_), E[1][0] - y > this.sourceWorldWidth_ / 2 && (E[1][0] -= this.sourceWorldWidth_), E[2][0] - y > this.sourceWorldWidth_ / 2 && (E[2][0] -= this.sourceWorldWidth_);
          const x = Math.min(
            E[0][0],
            E[1][0],
            E[2][0]
          );
          Math.max(
            E[0][0],
            E[1][0],
            E[2][0]
          ) - x < this.sourceWorldWidth_ / 2 && (C.source = E);
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
  addTriangle_(t, e, i, s, r, o) {
    this.triangles_.push({
      source: [s, r, o],
      target: [t, e, i]
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
  addQuad_(t, e, i, s, r, o, a, l, h) {
    const c = eo([r, o, a, l]), u = this.sourceWorldWidth_ ? tt(c) / this.sourceWorldWidth_ : null, d = (
      /** @type {number} */
      this.sourceWorldWidth_
    ), f = this.sourceProj_.canWrapX() && u > 0.5 && u < 1;
    let g = !1;
    if (h > 0) {
      if (this.targetProj_.isGlobal() && this.targetWorldWidth_) {
        const _ = eo([t, e, i, s]);
        g = tt(_) / this.targetWorldWidth_ > Co || g;
      }
      !f && this.sourceProj_.isGlobal() && u && (g = u > Co || g);
    }
    if (!g && this.maxSourceExtent_ && isFinite(c[0]) && isFinite(c[1]) && isFinite(c[2]) && isFinite(c[3]) && !Rt(c, this.maxSourceExtent_))
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
        const _ = [(t[0] + i[0]) / 2, (t[1] + i[1]) / 2], p = this.transformInv_(_);
        let y;
        f ? y = (mi(r[0], d) + mi(a[0], d)) / 2 - mi(p[0], d) : y = (r[0] + a[0]) / 2 - p[0];
        const C = (r[1] + a[1]) / 2 - p[1];
        g = y * y + C * C > this.errorThresholdSquared_;
      }
      if (g) {
        if (Math.abs(t[0] - i[0]) <= Math.abs(t[1] - i[1])) {
          const _ = [(e[0] + i[0]) / 2, (e[1] + i[1]) / 2], p = this.transformInv_(_), y = [(s[0] + t[0]) / 2, (s[1] + t[1]) / 2], C = this.transformInv_(y);
          this.addQuad_(
            t,
            e,
            _,
            y,
            r,
            o,
            p,
            C,
            h - 1
          ), this.addQuad_(
            y,
            _,
            i,
            s,
            C,
            p,
            a,
            l,
            h - 1
          );
        } else {
          const _ = [(t[0] + e[0]) / 2, (t[1] + e[1]) / 2], p = this.transformInv_(_), y = [(i[0] + s[0]) / 2, (i[1] + s[1]) / 2], C = this.transformInv_(y);
          this.addQuad_(
            t,
            _,
            y,
            s,
            r,
            p,
            C,
            l,
            h - 1
          ), this.addQuad_(
            _,
            e,
            i,
            y,
            p,
            o,
            a,
            C,
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
    m & 11 || this.addTriangle_(t, i, s, r, a, l), m & 14 || this.addTriangle_(t, i, e, r, a, o), m && (m & 13 || this.addTriangle_(e, s, t, o, l, r), m & 7 || this.addTriangle_(e, s, i, o, l, a));
  }
  /**
   * Calculates extent of the `source` coordinates from all the triangles.
   *
   * @return {import("../extent.js").Extent} Calculated extent.
   */
  calculateSourceExtent() {
    const t = Wt();
    return this.triangles_.forEach(function(e, i, s) {
      const r = e.source;
      zi(t, r[0]), zi(t, r[1]), zi(t, r[2]);
    }), t;
  }
  /**
   * @return {Array<Triangle>} Array of the calculated triangles.
   */
  getTriangles() {
    return this.triangles_;
  }
}
let Is;
const pi = [];
function wo(n, t, e, i, s) {
  n.beginPath(), n.moveTo(0, 0), n.lineTo(t, e), n.lineTo(i, s), n.closePath(), n.save(), n.clip(), n.fillRect(0, 0, Math.max(t, i) + 1, Math.max(e, s)), n.restore();
}
function vs(n, t) {
  return Math.abs(n[t * 4] - 210) > 2 || Math.abs(n[t * 4 + 3] - 0.75 * 255) > 2;
}
function ic() {
  if (Is === void 0) {
    const n = ft(6, 6, pi);
    n.globalCompositeOperation = "lighter", n.fillStyle = "rgba(210, 0, 0, 0.75)", wo(n, 4, 5, 4, 0), wo(n, 4, 5, 0, 5);
    const t = n.getImageData(0, 0, 3, 3).data;
    Is = vs(t, 0) || vs(t, 4) || vs(t, 8), is(n), pi.push(n.canvas);
  }
  return Is;
}
function Ao(n, t, e, i) {
  const s = cr(e, t, n);
  let r = no(
    t,
    i,
    e
  );
  const o = t.getMetersPerUnit();
  o !== void 0 && (r *= o);
  const a = n.getMetersPerUnit();
  a !== void 0 && (r /= a);
  const l = n.getExtent();
  if (!l || Ci(l, s)) {
    const h = no(n, r, s) / r;
    isFinite(h) && h > 0 && (r /= h);
  }
  return r;
}
function nc(n, t, e, i) {
  const s = je(e);
  let r = Ao(
    n,
    t,
    s,
    i
  );
  return (!isFinite(r) || r <= 0) && na(e, function(o) {
    return r = Ao(
      n,
      t,
      o,
      i
    ), isFinite(r) && r > 0;
  }), r;
}
function sc(n, t, e, i, s, r, o, a, l, h, c, u, d, f) {
  const g = ft(
    Math.round(e * n),
    Math.round(e * t),
    pi
  );
  if (u || (g.imageSmoothingEnabled = !1), l.length === 0)
    return g.canvas;
  g.scale(e, e);
  function m(x) {
    return Math.round(x * e) / e;
  }
  g.globalCompositeOperation = "lighter";
  const _ = Wt();
  l.forEach(function(x, v, T) {
    Ol(_, x.extent);
  });
  let p;
  const y = e / i, C = (u ? 1 : 1 + Math.pow(2, -24)) / y;
  if (!d || l.length !== 1 || h !== 0) {
    if (p = ft(
      Math.round(tt(_) * y),
      Math.round(St(_) * y),
      pi
    ), u || (p.imageSmoothingEnabled = !1), s && f) {
      const x = (s[0] - _[0]) * y, v = -(s[3] - _[3]) * y, T = tt(s) * y, I = St(s) * y;
      p.rect(x, v, T, I), p.clip();
    }
    l.forEach(function(x, v, T) {
      const I = (x.extent[0] - _[0]) * y, w = -(x.extent[3] - _[3]) * y, D = tt(x.extent) * y, P = St(x.extent) * y;
      x.image.width > 0 && x.image.height > 0 && p.drawImage(
        x.image,
        h,
        h,
        x.image.width - 2 * h,
        x.image.height - 2 * h,
        u ? I : Math.round(I),
        u ? w : Math.round(w),
        u ? D : Math.round(I + D) - Math.round(I),
        u ? P : Math.round(w + P) - Math.round(w)
      );
    });
  }
  const E = Qe(o);
  return a.getTriangles().forEach(function(x, v, T) {
    const I = x.source, w = x.target;
    let D = I[0][0], P = I[0][1], k = I[1][0], Y = I[1][1], B = I[2][0], W = I[2][1];
    const S = m((w[0][0] - E[0]) / r), O = m(
      -(w[0][1] - E[1]) / r
    ), G = m((w[1][0] - E[0]) / r), et = m(
      -(w[1][1] - E[1]) / r
    ), K = m((w[2][0] - E[0]) / r), J = m(
      -(w[2][1] - E[1]) / r
    ), V = D, ot = P;
    D = 0, P = 0, k -= V, Y -= ot, B -= V, W -= ot;
    const R = [
      [k, Y, 0, 0, G - S],
      [B, W, 0, 0, K - S],
      [0, 0, k, Y, et - O],
      [0, 0, B, W, J - O]
    ], nt = Al(R);
    if (!nt)
      return;
    if (g.save(), g.beginPath(), ic() || !u) {
      g.moveTo(G, et);
      const ht = 4, wt = S - G, Xt = O - et;
      for (let At = 0; At < ht; At++)
        g.lineTo(
          G + m((At + 1) * wt / ht),
          et + m(At * Xt / (ht - 1))
        ), At != ht - 1 && g.lineTo(
          G + m((At + 1) * wt / ht),
          et + m((At + 1) * Xt / (ht - 1))
        );
      g.lineTo(K, J);
    } else
      g.moveTo(G, et), g.lineTo(S, O), g.lineTo(K, J);
    g.clip(), g.transform(
      nt[0],
      nt[2],
      nt[1],
      nt[3],
      S,
      O
    ), g.translate(
      _[0] - V,
      _[3] - ot
    );
    let Mt;
    if (p)
      Mt = p.canvas, g.scale(C, -C);
    else {
      const ht = l[0], wt = ht.extent;
      Mt = ht.image, g.scale(
        tt(wt) / Mt.width,
        -St(wt) / Mt.height
      );
    }
    g.drawImage(Mt, 0, 0), g.restore();
  }), p && (is(p), pi.push(p.canvas)), c && (g.save(), g.globalCompositeOperation = "source-over", g.strokeStyle = "black", g.lineWidth = 1, a.getTriangles().forEach(function(x, v, T) {
    const I = x.target, w = (I[0][0] - E[0]) / r, D = -(I[0][1] - E[1]) / r, P = (I[1][0] - E[0]) / r, k = -(I[1][1] - E[1]) / r, Y = (I[2][0] - E[0]) / r, B = -(I[2][1] - E[1]) / r;
    g.beginPath(), g.moveTo(P, k), g.lineTo(w, D), g.lineTo(Y, B), g.closePath(), g.stroke();
  }), g.restore()), g.canvas;
}
class Us extends Ta {
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
  constructor(t, e, i, s, r, o, a, l, h, c, u, d) {
    super(r, b.IDLE, d), this.renderEdges_ = u !== void 0 ? u : !1, this.pixelRatio_ = a, this.gutter_ = l, this.canvas_ = null, this.sourceTileGrid_ = e, this.targetTileGrid_ = s, this.wrappedTileCoord_ = o || r, this.sourceTiles_ = [], this.sourcesListenerKeys_ = null, this.sourceZ_ = 0;
    const f = s.getTileCoordExtent(
      this.wrappedTileCoord_
    ), g = this.targetTileGrid_.getExtent();
    let m = this.sourceTileGrid_.getExtent();
    const _ = g ? Xi(f, g) : f;
    if (Gs(_) === 0) {
      this.state = b.EMPTY;
      return;
    }
    const p = t.getExtent();
    p && (m ? m = Xi(m, p) : m = p);
    const y = s.getResolution(
      this.wrappedTileCoord_[0]
    ), C = nc(
      t,
      i,
      _,
      y
    );
    if (!isFinite(C) || C <= 0) {
      this.state = b.EMPTY;
      return;
    }
    const E = c !== void 0 ? c : $h;
    if (this.triangulation_ = new ec(
      t,
      i,
      _,
      m,
      C * E,
      y
    ), this.triangulation_.getTriangles().length === 0) {
      this.state = b.EMPTY;
      return;
    }
    this.sourceZ_ = e.getZForResolution(C);
    let x = this.triangulation_.calculateSourceExtent();
    if (m && (t.canWrapX() ? (x[1] = lt(
      x[1],
      m[1],
      m[3]
    ), x[3] = lt(
      x[3],
      m[1],
      m[3]
    )) : x = Xi(x, m)), !Gs(x))
      this.state = b.EMPTY;
    else {
      const v = e.getTileRangeForExtentAndZ(
        x,
        this.sourceZ_
      );
      for (let T = v.minX; T <= v.maxX; T++)
        for (let I = v.minY; I <= v.maxY; I++) {
          const w = h(this.sourceZ_, T, I, a);
          w && this.sourceTiles_.push(w);
        }
      this.sourceTiles_.length === 0 && (this.state = b.EMPTY);
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
    const t = [];
    if (this.sourceTiles_.forEach((e) => {
      e && e.getState() == b.LOADED && t.push({
        extent: this.sourceTileGrid_.getTileCoordExtent(e.tileCoord),
        image: e.getImage()
      });
    }), this.sourceTiles_.length = 0, t.length === 0)
      this.state = b.ERROR;
    else {
      const e = this.wrappedTileCoord_[0], i = this.targetTileGrid_.getTileSize(e), s = typeof i == "number" ? i : i[0], r = typeof i == "number" ? i : i[1], o = this.targetTileGrid_.getResolution(e), a = this.sourceTileGrid_.getResolution(
        this.sourceZ_
      ), l = this.targetTileGrid_.getTileCoordExtent(
        this.wrappedTileCoord_
      );
      this.canvas_ = sc(
        s,
        r,
        this.pixelRatio_,
        a,
        this.sourceTileGrid_.getExtent(),
        o,
        l,
        this.triangulation_,
        t,
        this.gutter_,
        this.renderEdges_,
        this.interpolate
      ), this.state = b.LOADED;
    }
    this.changed();
  }
  /**
   * Load not yet loaded URI.
   */
  load() {
    if (this.state == b.IDLE) {
      this.state = b.LOADING, this.changed();
      let t = 0;
      this.sourcesListenerKeys_ = [], this.sourceTiles_.forEach((e) => {
        const i = e.getState();
        if (i == b.IDLE || i == b.LOADING) {
          t++;
          const s = j(
            e,
            N.CHANGE,
            function(r) {
              const o = e.getState();
              (o == b.LOADED || o == b.ERROR || o == b.EMPTY) && (it(s), t--, t === 0 && (this.unlistenSources_(), this.reproject_()));
            },
            this
          );
          this.sourcesListenerKeys_.push(s);
        }
      }), t === 0 ? setTimeout(this.reproject_.bind(this), 0) : this.sourceTiles_.forEach(function(e, i, s) {
        e.getState() == b.IDLE && e.load();
      });
    }
  }
  /**
   * @private
   */
  unlistenSources_() {
    this.sourcesListenerKeys_.forEach(it), this.sourcesListenerKeys_ = null;
  }
  /**
   * Remove from the cache due to expiry
   */
  release() {
    this.canvas_ && (is(this.canvas_.getContext("2d")), pi.push(this.canvas_), this.canvas_ = null), super.release();
  }
}
class vr {
  /**
   * @param {number} minX Minimum X.
   * @param {number} maxX Maximum X.
   * @param {number} minY Minimum Y.
   * @param {number} maxY Maximum Y.
   */
  constructor(t, e, i, s) {
    this.minX = t, this.maxX = e, this.minY = i, this.maxY = s;
  }
  /**
   * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @return {boolean} Contains tile coordinate.
   */
  contains(t) {
    return this.containsXY(t[1], t[2]);
  }
  /**
   * @param {TileRange} tileRange Tile range.
   * @return {boolean} Contains.
   */
  containsTileRange(t) {
    return this.minX <= t.minX && t.maxX <= this.maxX && this.minY <= t.minY && t.maxY <= this.maxY;
  }
  /**
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @return {boolean} Contains coordinate.
   */
  containsXY(t, e) {
    return this.minX <= t && t <= this.maxX && this.minY <= e && e <= this.maxY;
  }
  /**
   * @param {TileRange} tileRange Tile range.
   * @return {boolean} Equals.
   */
  equals(t) {
    return this.minX == t.minX && this.minY == t.minY && this.maxX == t.maxX && this.maxY == t.maxY;
  }
  /**
   * @param {TileRange} tileRange Tile range.
   */
  extend(t) {
    t.minX < this.minX && (this.minX = t.minX), t.maxX > this.maxX && (this.maxX = t.maxX), t.minY < this.minY && (this.minY = t.minY), t.maxY > this.maxY && (this.maxY = t.maxY);
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
  intersects(t) {
    return this.minX <= t.maxX && this.maxX >= t.minX && this.minY <= t.maxY && this.maxY >= t.minY;
  }
}
function ii(n, t, e, i, s) {
  return s !== void 0 ? (s.minX = n, s.maxX = t, s.minY = e, s.maxY = i, s) : new vr(n, t, e, i);
}
function Io(n) {
  return n[0] > 0 && n[1] > 0;
}
function rc(n, t, e) {
  return e === void 0 && (e = [0, 0]), e[0] = n[0] * t + 0.5 | 0, e[1] = n[1] * t + 0.5 | 0, e;
}
function Dt(n, t) {
  return Array.isArray(n) ? n : (t === void 0 ? t = [n, n] : (t[0] = n, t[1] = n), t);
}
class oc extends Ra {
  /**
   * @param {LayerType} tileLayer Tile layer.
   */
  constructor(t) {
    super(t), this.extentChanged = !0, this.renderedExtent_ = null, this.renderedPixelRatio, this.renderedProjection = null, this.renderedRevision, this.renderedTiles = [], this.newTiles_ = !1, this.tmpExtent = Wt(), this.tmpTileRange_ = new vr(0, 0, 0, 0);
  }
  /**
   * @protected
   * @param {import("../../Tile.js").default} tile Tile.
   * @return {boolean} Tile is drawable.
   */
  isDrawableTile(t) {
    const e = this.getLayer(), i = t.getState(), s = e.getUseInterimTilesOnError();
    return i == b.LOADED || i == b.EMPTY || i == b.ERROR && !s;
  }
  /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {!import("../../Tile.js").default} Tile.
   */
  getTile(t, e, i, s) {
    const r = s.pixelRatio, o = s.viewState.projection, a = this.getLayer();
    let h = a.getSource().getTile(t, e, i, r, o);
    return h.getState() == b.ERROR && a.getUseInterimTilesOnError() && a.getPreload() > 0 && (this.newTiles_ = !0), this.isDrawableTile(h) || (h = h.getInterimTile()), h;
  }
  /**
   * @param {import("../../pixel.js").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray} Data at the pixel location.
   */
  getData(t) {
    const e = this.frameState;
    if (!e)
      return null;
    const i = this.getLayer(), s = ut(
      e.pixelToCoordinateTransform,
      t.slice()
    ), r = i.getExtent();
    if (r && !Ci(r, s))
      return null;
    const o = e.pixelRatio, a = e.viewState.projection, l = e.viewState, h = i.getRenderSource(), c = h.getTileGridForProjection(l.projection), u = h.getTilePixelRatio(e.pixelRatio);
    for (let d = c.getZForResolution(l.resolution); d >= c.getMinZoom(); --d) {
      const f = c.getTileCoordForCoordAndZ(s, d), g = h.getTile(
        d,
        f[1],
        f[2],
        o,
        a
      );
      if (!(g instanceof Sa || g instanceof Us) || g instanceof Us && g.getState() === b.EMPTY)
        return null;
      if (g.getState() !== b.LOADED)
        continue;
      const m = c.getOrigin(d), _ = Dt(c.getTileSize(d)), p = c.getResolution(d), y = Math.floor(
        u * ((s[0] - m[0]) / p - f[1] * _[0])
      ), C = Math.floor(
        u * ((m[1] - s[1]) / p - f[2] * _[1])
      ), E = Math.round(
        u * h.getGutterForProjection(l.projection)
      );
      return this.getImageData(g.getImage(), y + E, C + E);
    }
    return null;
  }
  /**
   * @param {Object<number, Object<string, import("../../Tile.js").default>>} tiles Lookup of loaded tiles by zoom level.
   * @param {number} zoom Zoom level.
   * @param {import("../../Tile.js").default} tile Tile.
   * @return {boolean|void} If `false`, the tile will not be considered loaded.
   */
  loadedTileCallback(t, e, i) {
    return this.isDrawableTile(i) ? super.loadedTileCallback(t, e, i) : !1;
  }
  /**
   * Determine whether render should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   */
  prepareFrame(t) {
    return !!this.getLayer().getSource();
  }
  /**
   * Render the layer.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement} target Target that may be used to render content to.
   * @return {HTMLElement} The rendered element.
   */
  renderFrame(t, e) {
    const i = t.layerStatesArray[t.layerIndex], s = t.viewState, r = s.projection, o = s.resolution, a = s.center, l = s.rotation, h = t.pixelRatio, c = this.getLayer(), u = c.getSource(), d = u.getRevision(), f = u.getTileGridForProjection(r), g = f.getZForResolution(o, u.zDirection), m = f.getResolution(g);
    let _ = t.extent;
    const p = t.viewState.resolution, y = u.getTilePixelRatio(h), C = Math.round(tt(_) / p * h), E = Math.round(St(_) / p * h), x = i.extent && Ke(i.extent);
    x && (_ = Xi(
      _,
      Ke(i.extent)
    ));
    const v = m * C / 2 / y, T = m * E / 2 / y, I = [
      a[0] - v,
      a[1] - T,
      a[0] + v,
      a[1] + T
    ], w = f.getTileRangeForExtentAndZ(_, g), D = {};
    D[g] = {};
    const P = this.createLoadedTileFinder(
      u,
      r,
      D
    ), k = this.tmpExtent, Y = this.tmpTileRange_;
    this.newTiles_ = !1;
    const B = l ? Ws(
      s.center,
      p,
      l,
      t.size
    ) : void 0;
    for (let ot = w.minX; ot <= w.maxX; ++ot)
      for (let R = w.minY; R <= w.maxY; ++R) {
        if (l && !f.tileCoordIntersectsViewport([g, ot, R], B))
          continue;
        const nt = this.getTile(g, ot, R, t);
        if (this.isDrawableTile(nt)) {
          const wt = Q(this);
          if (nt.getState() == b.LOADED) {
            D[g][nt.tileCoord.toString()] = nt;
            let Xt = nt.inTransition(wt);
            Xt && i.opacity !== 1 && (nt.endTransition(wt), Xt = !1), !this.newTiles_ && (Xt || !this.renderedTiles.includes(nt)) && (this.newTiles_ = !0);
          }
          if (nt.getAlpha(wt, t.time) === 1)
            continue;
        }
        const Mt = f.getTileCoordChildTileRange(
          nt.tileCoord,
          Y,
          k
        );
        let ht = !1;
        Mt && (ht = P(g + 1, Mt)), ht || f.forEachTileCoordParentTileRange(
          nt.tileCoord,
          P,
          Y,
          k
        );
      }
    const W = m / o * h / y;
    pe(
      this.pixelTransform,
      t.size[0] / 2,
      t.size[1] / 2,
      1 / h,
      1 / h,
      l,
      -C / 2,
      -E / 2
    );
    const S = ha(this.pixelTransform);
    this.useContainer(e, S, this.getBackground(t));
    const O = this.getRenderContext(t), G = this.context.canvas;
    mr(this.inversePixelTransform, this.pixelTransform), pe(
      this.tempTransform,
      C / 2,
      E / 2,
      W,
      W,
      0,
      -C / 2,
      -E / 2
    ), G.width != C || G.height != E ? (G.width = C, G.height = E) : this.containerReused || O.clearRect(0, 0, C, E), x && this.clipUnrotated(O, t, x), u.getInterpolate() || (O.imageSmoothingEnabled = !1), this.preRender(O, t), this.renderedTiles.length = 0;
    let et = Object.keys(D).map(Number);
    et.sort(Oe);
    let K, J, V;
    i.opacity === 1 && (!this.containerReused || u.getOpaque(t.viewState.projection)) ? et = et.reverse() : (K = [], J = []);
    for (let ot = et.length - 1; ot >= 0; --ot) {
      const R = et[ot], nt = u.getTilePixelSize(
        R,
        h,
        r
      ), ht = f.getResolution(R) / m, wt = nt[0] * ht * W, Xt = nt[1] * ht * W, At = f.getTileCoordForCoordAndZ(
        Qe(I),
        R
      ), Mi = f.getTileCoordExtent(At), Ge = ut(this.tempTransform, [
        y * (Mi[0] - I[0]) / m,
        y * (I[3] - Mi[3]) / m
      ]), cs = y * u.getGutterForProjection(r), mn = D[R];
      for (const _n in mn) {
        const Pt = (
          /** @type {import("../../ImageTile.js").default} */
          mn[_n]
        ), qe = Pt.tileCoord, pn = At[1] - qe[1], us = Math.round(Ge[0] - (pn - 1) * wt), yn = At[2] - qe[2], En = Math.round(Ge[1] - (yn - 1) * Xt), Lt = Math.round(Ge[0] - pn * wt), Yt = Math.round(Ge[1] - yn * Xt), jt = us - Lt, Kt = En - Yt, Je = g === R, $e = Je && Pt.getAlpha(Q(this), t.time) !== 1;
        let Ce = !1;
        if (!$e)
          if (K) {
            V = [Lt, Yt, Lt + jt, Yt, Lt + jt, Yt + Kt, Lt, Yt + Kt];
            for (let re = 0, ds = K.length; re < ds; ++re)
              if (g !== R && R < J[re]) {
                const Et = K[re];
                Rt(
                  [Lt, Yt, Lt + jt, Yt + Kt],
                  [Et[0], Et[3], Et[4], Et[7]]
                ) && (Ce || (O.save(), Ce = !0), O.beginPath(), O.moveTo(V[0], V[1]), O.lineTo(V[2], V[3]), O.lineTo(V[4], V[5]), O.lineTo(V[6], V[7]), O.moveTo(Et[6], Et[7]), O.lineTo(Et[4], Et[5]), O.lineTo(Et[2], Et[3]), O.lineTo(Et[0], Et[1]), O.clip());
              }
            K.push(V), J.push(R);
          } else
            O.clearRect(Lt, Yt, jt, Kt);
        this.drawTileImage(
          Pt,
          t,
          Lt,
          Yt,
          jt,
          Kt,
          cs,
          Je
        ), K && !$e ? (Ce && O.restore(), this.renderedTiles.unshift(Pt)) : this.renderedTiles.push(Pt), this.updateUsedTiles(t.usedTiles, u, Pt);
      }
    }
    return this.renderedRevision = d, this.renderedResolution = m, this.extentChanged = !this.renderedExtent_ || !Vi(this.renderedExtent_, I), this.renderedExtent_ = I, this.renderedPixelRatio = h, this.renderedProjection = r, this.manageTilePyramid(
      t,
      u,
      f,
      h,
      r,
      _,
      g,
      c.getPreload()
    ), this.scheduleExpireCache(t, u), this.postRender(this.context, t), i.extent && O.restore(), O.imageSmoothingEnabled = !0, S !== G.style.transform && (G.style.transform = S), this.container;
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
  drawTileImage(t, e, i, s, r, o, a, l) {
    const h = this.getTileImage(t);
    if (!h)
      return;
    const c = this.getRenderContext(e), u = Q(this), d = e.layerStatesArray[e.layerIndex], f = d.opacity * (l ? t.getAlpha(u, e.time) : 1), g = f !== c.globalAlpha;
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
    ), g && c.restore(), f !== d.opacity ? e.animate = !0 : l && t.endTransition(u);
  }
  /**
   * @return {HTMLCanvasElement} Image
   */
  getImage() {
    const t = this.context;
    return t ? t.canvas : null;
  }
  /**
   * Get the image from a tile.
   * @param {import("../../ImageTile.js").default} tile Tile.
   * @return {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} Image.
   * @protected
   */
  getTileImage(t) {
    return t.getImage();
  }
  /**
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {import("../../source/Tile.js").default} tileSource Tile source.
   * @protected
   */
  scheduleExpireCache(t, e) {
    if (e.canExpireCache()) {
      const i = (function(s, r, o) {
        const a = Q(s);
        a in o.usedTiles && s.expireCache(
          o.viewState.projection,
          o.usedTiles[a]
        );
      }).bind(null, e);
      t.postRenderFunctions.push(
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
  updateUsedTiles(t, e, i) {
    const s = Q(e);
    s in t || (t[s] = {}), t[s][i.getKey()] = !0;
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
  manageTilePyramid(t, e, i, s, r, o, a, l, h) {
    const c = Q(e);
    c in t.wantedTiles || (t.wantedTiles[c] = {});
    const u = t.wantedTiles[c], d = t.tileQueue, f = i.getMinZoom(), g = t.viewState.rotation, m = g ? Ws(
      t.viewState.center,
      t.viewState.resolution,
      g,
      t.size
    ) : void 0;
    let _ = 0, p, y, C, E, x, v;
    for (v = f; v <= a; ++v)
      for (y = i.getTileRangeForExtentAndZ(o, v, y), C = i.getResolution(v), E = y.minX; E <= y.maxX; ++E)
        for (x = y.minY; x <= y.maxY; ++x)
          g && !i.tileCoordIntersectsViewport([v, E, x], m) || (a - v <= l ? (++_, p = e.getTile(v, E, x, s, r), p.getState() == b.IDLE && (u[p.getKey()] = !0, d.isKeyQueued(p.getKey()) || d.enqueue([
            p,
            c,
            i.getTileCoordCenter(p.tileCoord),
            C
          ])), h !== void 0 && h(p)) : e.useTile(v, E, x, r));
    e.updateCacheSize(_, r);
  }
}
class ac extends Dh {
  /**
   * @param {import("./BaseTile.js").Options<TileSourceType>} [options] Tile layer options.
   */
  constructor(t) {
    super(t);
  }
  createRenderer() {
    return new oc(this);
  }
}
const lc = ac;
class hc {
  /**
   * @param {number} [highWaterMark] High water mark.
   */
  constructor(t) {
    this.highWaterMark = t !== void 0 ? t : 2048, this.count_ = 0, this.entries_ = {}, this.oldest_ = null, this.newest_ = null;
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
  expireCache(t) {
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
  containsKey(t) {
    return this.entries_.hasOwnProperty(t);
  }
  /**
   * @param {function(T, string, LRUCache<T>): ?} f The function
   *     to call for every entry from the oldest to the newer. This function takes
   *     3 arguments (the entry value, the entry key and the LRUCache object).
   *     The return value is ignored.
   */
  forEach(t) {
    let e = this.oldest_;
    for (; e; )
      t(e.value_, e.key_, this), e = e.newer;
  }
  /**
   * @param {string} key Key.
   * @param {*} [options] Options (reserved for subclasses).
   * @return {T} Value.
   */
  get(t, e) {
    const i = this.entries_[t];
    return U(
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
  remove(t) {
    const e = this.entries_[t];
    return U(
      e !== void 0,
      "Tried to get a value for a key that does not exist in the cache"
    ), e === this.newest_ ? (this.newest_ = /** @type {Entry} */
    e.older, this.newest_ && (this.newest_.newer = null)) : e === this.oldest_ ? (this.oldest_ = /** @type {Entry} */
    e.newer, this.oldest_ && (this.oldest_.older = null)) : (e.newer.older = e.older, e.older.newer = e.newer), delete this.entries_[t], --this.count_, e.value_;
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
    const t = new Array(this.count_);
    let e = 0, i;
    for (i = this.newest_; i; i = i.older)
      t[e++] = i.key_;
    return t;
  }
  /**
   * @return {Array<T>} Values.
   */
  getValues() {
    const t = new Array(this.count_);
    let e = 0, i;
    for (i = this.newest_; i; i = i.older)
      t[e++] = i.value_;
    return t;
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
  peek(t) {
    var e;
    return (e = this.entries_[t]) == null ? void 0 : e.value_;
  }
  /**
   * @return {T} value Value.
   */
  pop() {
    const t = this.oldest_;
    return delete this.entries_[t.key_], t.newer && (t.newer.older = null), this.oldest_ = /** @type {Entry} */
    t.newer, this.oldest_ || (this.newest_ = null), --this.count_, t.value_;
  }
  /**
   * @param {string} key Key.
   * @param {T} value Value.
   */
  replace(t, e) {
    this.get(t), this.entries_[t].value_ = e;
  }
  /**
   * @param {string} key Key.
   * @param {T} value Value.
   */
  set(t, e) {
    U(
      !(t in this.entries_),
      "Tried to set a value for a key that is used already"
    );
    const i = {
      key_: t,
      newer: null,
      older: this.newest_,
      value_: e
    };
    this.newest_ ? this.newest_.newer = i : this.oldest_ = i, this.newest_ = i, this.entries_[t] = i, ++this.count_;
  }
  /**
   * Set a maximum number of entries for the cache.
   * @param {number} size Cache size.
   * @api
   */
  setSize(t) {
    this.highWaterMark = t;
  }
}
function vo(n, t, e, i) {
  return i !== void 0 ? (i[0] = n, i[1] = t, i[2] = e, i) : [n, t, e];
}
function ns(n, t, e) {
  return n + "/" + t + "/" + e;
}
function Ma(n) {
  return ns(n[0], n[1], n[2]);
}
function cc(n) {
  return n.split("/").map(Number);
}
function uc(n) {
  return (n[1] << n[0]) + n[2];
}
function dc(n, t) {
  const e = n[0], i = n[1], s = n[2];
  if (t.getMinZoom() > e || e > t.getMaxZoom())
    return !1;
  const r = t.getFullTileRange(e);
  return r ? r.containsXY(i, s) : !0;
}
class La extends hc {
  clear() {
    for (; this.getCount() > 0; )
      this.pop().release();
    super.clear();
  }
  /**
   * @param {!Object<string, boolean>} usedTiles Used tiles.
   */
  expireCache(t) {
    for (; this.canExpireCache() && !(this.peekLast().getKey() in t); )
      this.pop().release();
  }
  /**
   * Prune all tiles from the cache that don't have the same z as the newest tile.
   */
  pruneExceptNewestZ() {
    if (this.getCount() === 0)
      return;
    const t = this.peekFirstKey(), i = cc(t)[0];
    this.forEach((s) => {
      s.tileCoord[0] !== i && (this.remove(Ma(s.tileCoord)), s.release());
    });
  }
}
const Rs = {
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
class ba extends se {
  /**
   * @param {Options} options Source options.
   */
  constructor(t) {
    super(), this.projection = zt(t.projection), this.attributions_ = Ro(t.attributions), this.attributionsCollapsible_ = t.attributionsCollapsible !== void 0 ? t.attributionsCollapsible : !0, this.loading = !1, this.state_ = t.state !== void 0 ? t.state : "ready", this.wrapX_ = t.wrapX !== void 0 ? t.wrapX : !1, this.interpolate_ = !!t.interpolate, this.viewResolver = null, this.viewRejector = null;
    const e = this;
    this.viewPromise_ = new Promise(function(i, s) {
      e.viewResolver = i, e.viewRejector = s;
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
  getResolutions(t) {
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
  setAttributions(t) {
    this.attributions_ = Ro(t), this.changed();
  }
  /**
   * Set the state of the source.
   * @param {import("./Source.js").State} state State.
   */
  setState(t) {
    this.state_ = t, this.changed();
  }
}
function Ro(n) {
  return n ? Array.isArray(n) ? function(t) {
    return n;
  } : typeof n == "function" ? n : function(t) {
    return [n];
  } : null;
}
const ni = [0, 0, 0], we = 5;
class fc {
  /**
   * @param {Options} options Tile grid options.
   */
  constructor(t) {
    this.minZoom = t.minZoom !== void 0 ? t.minZoom : 0, this.resolutions_ = t.resolutions, U(
      El(
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
    let e;
    if (!t.origins) {
      for (let s = 0, r = this.resolutions_.length - 1; s < r; ++s)
        if (!e)
          e = this.resolutions_[s] / this.resolutions_[s + 1];
        else if (this.resolutions_[s] / this.resolutions_[s + 1] !== e) {
          e = void 0;
          break;
        }
    }
    this.zoomFactor_ = e, this.maxZoom = this.resolutions_.length - 1, this.origin_ = t.origin !== void 0 ? t.origin : null, this.origins_ = null, t.origins !== void 0 && (this.origins_ = t.origins, U(
      this.origins_.length == this.resolutions_.length,
      "Number of `origins` and `resolutions` must be equal"
    ));
    const i = t.extent;
    i !== void 0 && !this.origin_ && !this.origins_ && (this.origin_ = Qe(i)), U(
      !this.origin_ && this.origins_ || this.origin_ && !this.origins_,
      "Either `origin` or `origins` must be configured, never both"
    ), this.tileSizes_ = null, t.tileSizes !== void 0 && (this.tileSizes_ = t.tileSizes, U(
      this.tileSizes_.length == this.resolutions_.length,
      "Number of `tileSizes` and `resolutions` must be equal"
    )), this.tileSize_ = t.tileSize !== void 0 ? t.tileSize : this.tileSizes_ ? null : nr, U(
      !this.tileSize_ && this.tileSizes_ || this.tileSize_ && !this.tileSizes_,
      "Either `tileSize` or `tileSizes` must be configured, never both"
    ), this.extent_ = i !== void 0 ? i : null, this.fullTileRanges_ = null, this.tmpSize_ = [0, 0], this.tmpExtent_ = [0, 0, 0, 0], t.sizes !== void 0 ? this.fullTileRanges_ = t.sizes.map((s, r) => {
      const o = new vr(
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
  forEachTileCoord(t, e, i) {
    const s = this.getTileRangeForExtentAndZ(t, e);
    for (let r = s.minX, o = s.maxX; r <= o; ++r)
      for (let a = s.minY, l = s.maxY; a <= l; ++a)
        i([e, r, a]);
  }
  /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {function(number, import("../TileRange.js").default): boolean} callback Callback.
   * @param {import("../TileRange.js").default} [tempTileRange] Temporary import("../TileRange.js").default object.
   * @param {import("../extent.js").Extent} [tempExtent] Temporary import("../extent.js").Extent object.
   * @return {boolean} Callback succeeded.
   */
  forEachTileCoordParentTileRange(t, e, i, s) {
    let r, o, a, l = null, h = t[0] - 1;
    for (this.zoomFactor_ === 2 ? (o = t[1], a = t[2]) : l = this.getTileCoordExtent(t, s); h >= this.minZoom; ) {
      if (o !== void 0 && a !== void 0 ? (o = Math.floor(o / 2), a = Math.floor(a / 2), r = ii(o, o, a, a, i)) : r = this.getTileRangeForExtentAndZ(
        l,
        h,
        i
      ), e(h, r))
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
  getOrigin(t) {
    return this.origin_ ? this.origin_ : this.origins_[t];
  }
  /**
   * Get the resolution for the given zoom level.
   * @param {number} z Integer zoom level.
   * @return {number} Resolution.
   * @api
   */
  getResolution(t) {
    return this.resolutions_[t];
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
  getTileCoordChildTileRange(t, e, i) {
    if (t[0] < this.maxZoom) {
      if (this.zoomFactor_ === 2) {
        const r = t[1] * 2, o = t[2] * 2;
        return ii(
          r,
          r + 1,
          o,
          o + 1,
          e
        );
      }
      const s = this.getTileCoordExtent(
        t,
        i || this.tmpExtent_
      );
      return this.getTileRangeForExtentAndZ(
        s,
        t[0] + 1,
        e
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
  getTileRangeForTileCoordAndZ(t, e, i) {
    if (e > this.maxZoom || e < this.minZoom)
      return null;
    const s = t[0], r = t[1], o = t[2];
    if (e === s)
      return ii(
        r,
        o,
        r,
        o,
        i
      );
    if (this.zoomFactor_) {
      const l = Math.pow(this.zoomFactor_, e - s), h = Math.floor(r * l), c = Math.floor(o * l);
      if (e < s)
        return ii(h, h, c, c, i);
      const u = Math.floor(l * (r + 1)) - 1, d = Math.floor(l * (o + 1)) - 1;
      return ii(h, u, c, d, i);
    }
    const a = this.getTileCoordExtent(t, this.tmpExtent_);
    return this.getTileRangeForExtentAndZ(a, e, i);
  }
  /**
   * Get a tile range for the given extent and integer zoom level.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} z Integer zoom level.
   * @param {import("../TileRange.js").default} [tempTileRange] Temporary tile range object.
   * @return {import("../TileRange.js").default} Tile range.
   */
  getTileRangeForExtentAndZ(t, e, i) {
    this.getTileCoordForXYAndZ_(t[0], t[3], e, !1, ni);
    const s = ni[1], r = ni[2];
    this.getTileCoordForXYAndZ_(t[2], t[1], e, !0, ni);
    const o = ni[1], a = ni[2];
    return ii(s, o, r, a, i);
  }
  /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @return {import("../coordinate.js").Coordinate} Tile center.
   */
  getTileCoordCenter(t) {
    const e = this.getOrigin(t[0]), i = this.getResolution(t[0]), s = Dt(this.getTileSize(t[0]), this.tmpSize_);
    return [
      e[0] + (t[1] + 0.5) * s[0] * i,
      e[1] - (t[2] + 0.5) * s[1] * i
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
  getTileCoordExtent(t, e) {
    const i = this.getOrigin(t[0]), s = this.getResolution(t[0]), r = Dt(this.getTileSize(t[0]), this.tmpSize_), o = i[0] + t[1] * r[0] * s, a = i[1] - (t[2] + 1) * r[1] * s, l = o + r[0] * s, h = a + r[1] * s;
    return ke(o, a, l, h, e);
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
  getTileCoordForCoordAndResolution(t, e, i) {
    return this.getTileCoordForXYAndResolution_(
      t[0],
      t[1],
      e,
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
  getTileCoordForXYAndResolution_(t, e, i, s, r) {
    const o = this.getZForResolution(i), a = i / this.getResolution(o), l = this.getOrigin(o), h = Dt(this.getTileSize(o), this.tmpSize_);
    let c = a * (t - l[0]) / i / h[0], u = a * (l[1] - e) / i / h[1];
    return s ? (c = Cn(c, we) - 1, u = Cn(u, we) - 1) : (c = xn(c, we), u = xn(u, we)), vo(o, c, u, r);
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
  getTileCoordForXYAndZ_(t, e, i, s, r) {
    const o = this.getOrigin(i), a = this.getResolution(i), l = Dt(this.getTileSize(i), this.tmpSize_);
    let h = (t - o[0]) / a / l[0], c = (o[1] - e) / a / l[1];
    return s ? (h = Cn(h, we) - 1, c = Cn(c, we) - 1) : (h = xn(h, we), c = xn(c, we)), vo(i, h, c, r);
  }
  /**
   * Get a tile coordinate given a map coordinate and zoom level.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {number} z Integer zoom level, e.g. the result of a `getZForResolution()` method call
   * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Destination import("../tilecoord.js").TileCoord object.
   * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
   * @api
   */
  getTileCoordForCoordAndZ(t, e, i) {
    return this.getTileCoordForXYAndZ_(
      t[0],
      t[1],
      e,
      !1,
      i
    );
  }
  /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @return {number} Tile resolution.
   */
  getTileCoordResolution(t) {
    return this.resolutions_[t[0]];
  }
  /**
   * Get the tile size for a zoom level. The type of the return value matches the
   * `tileSize` or `tileSizes` that the tile grid was configured with. To always
   * get an {@link import("../size.js").Size}, run the result through {@link module:ol/size.toSize}.
   * @param {number} z Z.
   * @return {number|import("../size.js").Size} Tile size.
   * @api
   */
  getTileSize(t) {
    return this.tileSize_ ? this.tileSize_ : this.tileSizes_[t];
  }
  /**
   * @param {number} z Zoom level.
   * @return {import("../TileRange.js").default|null} Extent tile range for the specified zoom level.
   */
  getFullTileRange(t) {
    return this.fullTileRanges_ ? this.fullTileRanges_[t] : this.extent_ ? this.getTileRangeForExtentAndZ(this.extent_, t) : null;
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
  getZForResolution(t, e) {
    const i = er(
      this.resolutions_,
      t,
      e || 0
    );
    return lt(i, this.minZoom, this.maxZoom);
  }
  /**
   * The tile with the provided tile coordinate intersects the given viewport.
   * @param {import('../tilecoord.js').TileCoord} tileCoord Tile coordinate.
   * @param {Array<number>} viewport Viewport as returned from {@link module:ol/extent.getRotatedViewport}.
   * @return {boolean} The tile with the provided tile coordinate intersects the given viewport.
   */
  tileCoordIntersectsViewport(t, e) {
    return ma(
      e,
      0,
      e.length,
      2,
      this.getTileCoordExtent(t)
    );
  }
  /**
   * @param {!import("../extent.js").Extent} extent Extent for this tile grid.
   * @private
   */
  calculateTileRanges_(t) {
    const e = this.resolutions_.length, i = new Array(e);
    for (let s = this.minZoom; s < e; ++s)
      i[s] = this.getTileRangeForExtentAndZ(t, s);
    this.fullTileRanges_ = i;
  }
}
const Da = fc;
function Pa(n) {
  let t = n.getDefaultTileGrid();
  return t || (t = pc(n), n.setDefaultTileGrid(t)), t;
}
function gc(n, t, e) {
  const i = t[0], s = n.getTileCoordCenter(t), r = Rr(e);
  if (!Ci(r, s)) {
    const o = tt(r), a = Math.ceil(
      (r[0] - s[0]) / o
    );
    return s[0] += o * a, n.getTileCoordForCoordAndZ(s, i);
  }
  return t;
}
function mc(n, t, e, i) {
  i = i !== void 0 ? i : "top-left";
  const s = Oa(n, t, e);
  return new Da({
    extent: n,
    origin: Fl(n, i),
    resolutions: s,
    tileSize: e
  });
}
function _c(n) {
  const t = n || {}, e = t.extent || zt("EPSG:3857").getExtent(), i = {
    extent: e,
    minZoom: t.minZoom,
    tileSize: t.tileSize,
    resolutions: Oa(
      e,
      t.maxZoom,
      t.tileSize,
      t.maxResolution
    )
  };
  return new Da(i);
}
function Oa(n, t, e, i) {
  t = t !== void 0 ? t : Il, e = Dt(e !== void 0 ? e : nr);
  const s = St(n), r = tt(n);
  i = i > 0 ? i : Math.max(r / e[0], s / e[1]);
  const o = t + 1, a = new Array(o);
  for (let l = 0; l < o; ++l)
    a[l] = i / Math.pow(2, l);
  return a;
}
function pc(n, t, e, i) {
  const s = Rr(n);
  return mc(s, t, e, i);
}
function Rr(n) {
  n = zt(n);
  let t = n.getExtent();
  if (!t) {
    const e = 180 * Ui.degrees / n.getMetersPerUnit();
    t = ke(-e, -e, e, e);
  }
  return t;
}
class yc extends ba {
  /**
   * @param {Options} options SourceTile source options.
   */
  constructor(t) {
    super({
      attributions: t.attributions,
      attributionsCollapsible: t.attributionsCollapsible,
      projection: t.projection,
      state: t.state,
      wrapX: t.wrapX,
      interpolate: t.interpolate
    }), this.on, this.once, this.un, this.opaque_ = t.opaque !== void 0 ? t.opaque : !1, this.tilePixelRatio_ = t.tilePixelRatio !== void 0 ? t.tilePixelRatio : 1, this.tileGrid = t.tileGrid !== void 0 ? t.tileGrid : null;
    const e = [256, 256];
    this.tileGrid && Dt(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()), e), this.tileCache = new La(t.cacheSize || 0), this.tmpSize = [0, 0], this.key_ = t.key || "", this.tileOptions = {
      transition: t.transition,
      interpolate: t.interpolate
    }, this.zDirection = t.zDirection ? t.zDirection : 0;
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
  expireCache(t, e) {
    const i = this.getTileCacheForProjection(t);
    i && i.expireCache(e);
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
  forEachLoadedTile(t, e, i, s) {
    const r = this.getTileCacheForProjection(t);
    if (!r)
      return !1;
    let o = !0, a, l, h;
    for (let c = i.minX; c <= i.maxX; ++c)
      for (let u = i.minY; u <= i.maxY; ++u)
        l = ns(e, c, u), h = !1, r.containsKey(l) && (a = /** @type {!import("../Tile.js").default} */
        r.get(l), h = a.getState() === b.LOADED, h && (h = s(a) !== !1)), h || (o = !1);
    return o;
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {number} Gutter.
   */
  getGutterForProjection(t) {
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
  setKey(t) {
    this.key_ !== t && (this.key_ = t, this.changed());
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {boolean} Opaque.
   */
  getOpaque(t) {
    return this.opaque_;
  }
  /**
   * @param {import("../proj/Projection").default} [projection] Projection.
   * @return {Array<number>|null} Resolutions.
   */
  getResolutions(t) {
    const e = t ? this.getTileGridForProjection(t) : this.tileGrid;
    return e ? e.getResolutions() : null;
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
  getTile(t, e, i, s, r) {
    return H();
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
  getTileGridForProjection(t) {
    return this.tileGrid ? this.tileGrid : Pa(t);
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {import("../TileCache.js").default} Tile cache.
   * @protected
   */
  getTileCacheForProjection(t) {
    const e = this.getProjection();
    return U(
      e === null || oi(e, t),
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
  getTilePixelRatio(t) {
    return this.tilePixelRatio_;
  }
  /**
   * @param {number} z Z.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {import("../size.js").Size} Tile size.
   */
  getTilePixelSize(t, e, i) {
    const s = this.getTileGridForProjection(i), r = this.getTilePixelRatio(e), o = Dt(s.getTileSize(t), this.tmpSize);
    return r == 1 ? o : rc(o, r, this.tmpSize);
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
  getTileCoordForTileUrlFunction(t, e) {
    e = e !== void 0 ? e : this.getProjection();
    const i = this.getTileGridForProjection(e);
    return this.getWrapX() && e.isGlobal() && (t = gc(i, t, e)), dc(t, i) ? t : null;
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
  updateCacheSize(t, e) {
    const i = this.getTileCacheForProjection(e);
    t > i.highWaterMark && (i.highWaterMark = t);
  }
  /**
   * Marks a tile coord as being used, without triggering a load.
   * @abstract
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {import("../proj/Projection.js").default} projection Projection.
   */
  useTile(t, e, i, s) {
  }
}
class Ec extends Ee {
  /**
   * @param {string} type Type.
   * @param {import("../Tile.js").default} tile The tile.
   */
  constructor(t, e) {
    super(t), this.tile = e;
  }
}
function xc(n, t) {
  const e = /\{z\}/g, i = /\{x\}/g, s = /\{y\}/g, r = /\{-y\}/g;
  return (
    /**
     * @param {import("./tilecoord.js").TileCoord} tileCoord Tile Coordinate.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("./proj/Projection.js").default} projection Projection.
     * @return {string|undefined} Tile URL.
     */
    function(o, a, l) {
      if (o)
        return n.replace(e, o[0].toString()).replace(i, o[1].toString()).replace(s, o[2].toString()).replace(r, function() {
          const h = o[0], c = t.getFullTileRange(h);
          if (!c)
            throw new Error(
              "The {-y} placeholder requires a tile grid with extent"
            );
          return (c.getHeight() - o[2] - 1).toString();
        });
    }
  );
}
function Cc(n, t) {
  const e = n.length, i = new Array(e);
  for (let s = 0; s < e; ++s)
    i[s] = xc(n[s], t);
  return wc(i);
}
function wc(n) {
  return n.length === 1 ? n[0] : (
    /**
     * @param {import("./tilecoord.js").TileCoord} tileCoord Tile Coordinate.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("./proj/Projection.js").default} projection Projection.
     * @return {string|undefined} Tile URL.
     */
    function(t, e, i) {
      if (!t)
        return;
      const s = uc(t), r = mi(s, n.length);
      return n[r](t, e, i);
    }
  );
}
function Ac(n) {
  const t = [];
  let e = /\{([a-z])-([a-z])\}/.exec(n);
  if (e) {
    const i = e[1].charCodeAt(0), s = e[2].charCodeAt(0);
    let r;
    for (r = i; r <= s; ++r)
      t.push(n.replace(e[0], String.fromCharCode(r)));
    return t;
  }
  if (e = /\{(\d+)-(\d+)\}/.exec(n), e) {
    const i = parseInt(e[2], 10);
    for (let s = parseInt(e[1], 10); s <= i; s++)
      t.push(n.replace(e[0], s.toString()));
    return t;
  }
  return t.push(n), t;
}
class Tr extends yc {
  /**
   * @param {Options} options Image tile options.
   */
  constructor(t) {
    super({
      attributions: t.attributions,
      cacheSize: t.cacheSize,
      opaque: t.opaque,
      projection: t.projection,
      state: t.state,
      tileGrid: t.tileGrid,
      tilePixelRatio: t.tilePixelRatio,
      wrapX: t.wrapX,
      transition: t.transition,
      interpolate: t.interpolate,
      key: t.key,
      attributionsCollapsible: t.attributionsCollapsible,
      zDirection: t.zDirection
    }), this.generateTileUrlFunction_ = this.tileUrlFunction === Tr.prototype.tileUrlFunction, this.tileLoadFunction = t.tileLoadFunction, t.tileUrlFunction && (this.tileUrlFunction = t.tileUrlFunction), this.urls = null, t.urls ? this.setUrls(t.urls) : t.url && this.setUrl(t.url), this.tileLoadingKeys_ = {};
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
  handleTileChange(t) {
    const e = (
      /** @type {import("../Tile.js").default} */
      t.target
    ), i = Q(e), s = e.getState();
    let r;
    s == b.LOADING ? (this.tileLoadingKeys_[i] = !0, r = Rs.TILELOADSTART) : i in this.tileLoadingKeys_ && (delete this.tileLoadingKeys_[i], r = s == b.ERROR ? Rs.TILELOADERROR : s == b.LOADED ? Rs.TILELOADEND : void 0), r != null && this.dispatchEvent(new Ec(r, e));
  }
  /**
   * Set the tile load function of the source.
   * @param {import("../Tile.js").LoadFunction} tileLoadFunction Tile load function.
   * @api
   */
  setTileLoadFunction(t) {
    this.tileCache.clear(), this.tileLoadFunction = t, this.changed();
  }
  /**
   * Set the tile URL function of the source.
   * @param {import("../Tile.js").UrlFunction} tileUrlFunction Tile URL function.
   * @param {string} [key] Optional new tile key for the source.
   * @api
   */
  setTileUrlFunction(t, e) {
    this.tileUrlFunction = t, this.tileCache.pruneExceptNewestZ(), typeof e < "u" ? this.setKey(e) : this.changed();
  }
  /**
   * Set the URL to use for requests.
   * @param {string} url URL.
   * @api
   */
  setUrl(t) {
    const e = Ac(t);
    this.urls = e, this.setUrls(e);
  }
  /**
   * Set the URLs to use for requests.
   * @param {Array<string>} urls URLs.
   * @api
   */
  setUrls(t) {
    this.urls = t;
    const e = t.join(`
`);
    this.generateTileUrlFunction_ ? this.setTileUrlFunction(Cc(t, this.tileGrid), e) : this.setKey(e);
  }
  /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {string|undefined} Tile URL.
   */
  tileUrlFunction(t, e, i) {
  }
  /**
   * Marks a tile coord as being used, without triggering a load.
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   */
  useTile(t, e, i) {
    const s = ns(t, e, i);
    this.tileCache.containsKey(s) && this.tileCache.get(s);
  }
}
class Ic extends Tr {
  /**
   * @param {!Options} options Image tile options.
   */
  constructor(t) {
    super({
      attributions: t.attributions,
      cacheSize: t.cacheSize,
      opaque: t.opaque,
      projection: t.projection,
      state: t.state,
      tileGrid: t.tileGrid,
      tileLoadFunction: t.tileLoadFunction ? t.tileLoadFunction : vc,
      tilePixelRatio: t.tilePixelRatio,
      tileUrlFunction: t.tileUrlFunction,
      url: t.url,
      urls: t.urls,
      wrapX: t.wrapX,
      transition: t.transition,
      interpolate: t.interpolate !== void 0 ? t.interpolate : !0,
      key: t.key,
      attributionsCollapsible: t.attributionsCollapsible,
      zDirection: t.zDirection
    }), this.crossOrigin = t.crossOrigin !== void 0 ? t.crossOrigin : null, this.tileClass = t.tileClass !== void 0 ? t.tileClass : Sa, this.tileCacheForProjection = {}, this.tileGridForProjection = {}, this.reprojectionErrorThreshold_ = t.reprojectionErrorThreshold, this.renderReprojectionEdges_ = !1;
  }
  /**
   * @return {boolean} Can expire cache.
   */
  canExpireCache() {
    if (this.tileCache.canExpireCache())
      return !0;
    for (const t in this.tileCacheForProjection)
      if (this.tileCacheForProjection[t].canExpireCache())
        return !0;
    return !1;
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @param {!Object<string, boolean>} usedTiles Used tiles.
   */
  expireCache(t, e) {
    const i = this.getTileCacheForProjection(t);
    this.tileCache.expireCache(
      this.tileCache == i ? e : {}
    );
    for (const s in this.tileCacheForProjection) {
      const r = this.tileCacheForProjection[s];
      r.expireCache(r == i ? e : {});
    }
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {number} Gutter.
   */
  getGutterForProjection(t) {
    return this.getProjection() && t && !oi(this.getProjection(), t) ? 0 : this.getGutter();
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
    let t = super.getKey();
    return this.getInterpolate() || (t += ":disable-interpolation"), t;
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {boolean} Opaque.
   */
  getOpaque(t) {
    return this.getProjection() && t && !oi(this.getProjection(), t) ? !1 : super.getOpaque(t);
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {!import("../tilegrid/TileGrid.js").default} Tile grid.
   */
  getTileGridForProjection(t) {
    const e = this.getProjection();
    if (this.tileGrid && (!e || oi(e, t)))
      return this.tileGrid;
    const i = Q(t);
    return i in this.tileGridForProjection || (this.tileGridForProjection[i] = Pa(t)), this.tileGridForProjection[i];
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {import("../TileCache.js").default} Tile cache.
   */
  getTileCacheForProjection(t) {
    const e = this.getProjection();
    if (!e || oi(e, t))
      return this.tileCache;
    const i = Q(t);
    return i in this.tileCacheForProjection || (this.tileCacheForProjection[i] = new La(
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
  createTile_(t, e, i, s, r, o) {
    const a = [t, e, i], l = this.getTileCoordForTileUrlFunction(
      a,
      r
    ), h = l ? this.tileUrlFunction(l, s, r) : void 0, c = new this.tileClass(
      a,
      h !== void 0 ? b.IDLE : b.EMPTY,
      h !== void 0 ? h : "",
      this.crossOrigin,
      this.tileLoadFunction,
      this.tileOptions
    );
    return c.key = o, c.addEventListener(N.CHANGE, this.handleTileChange.bind(this)), c;
  }
  /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {!(ImageTile|ReprojTile)} Tile.
   */
  getTile(t, e, i, s, r) {
    const o = this.getProjection();
    if (!o || !r || oi(o, r))
      return this.getTileInternal(
        t,
        e,
        i,
        s,
        o || r
      );
    const a = this.getTileCacheForProjection(r), l = [t, e, i];
    let h;
    const c = Ma(l);
    a.containsKey(c) && (h = a.get(c));
    const u = this.getKey();
    if (h && h.key == u)
      return h;
    const d = this.getTileGridForProjection(o), f = this.getTileGridForProjection(r), g = this.getTileCoordForTileUrlFunction(
      l,
      r
    ), m = new Us(
      o,
      d,
      r,
      f,
      l,
      g,
      this.getTilePixelRatio(s),
      this.getGutter(),
      (_, p, y, C) => this.getTileInternal(_, p, y, C, o),
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
  getTileInternal(t, e, i, s, r) {
    let o = null;
    const a = ns(t, e, i), l = this.getKey();
    if (!this.tileCache.containsKey(a))
      o = this.createTile_(t, e, i, s, r, l), this.tileCache.set(a, o);
    else if (o = this.tileCache.get(a), o.key != l) {
      const h = o;
      o = this.createTile_(t, e, i, s, r, l), h.getState() == b.IDLE ? o.interimTile = h.interimTile : o.interimTile = h, o.refreshInterimChain(), this.tileCache.replace(a, o);
    }
    return o;
  }
  /**
   * Sets whether to render reprojection edges or not (usually for debugging).
   * @param {boolean} render Render the edges.
   * @api
   */
  setRenderReprojectionEdges(t) {
    if (this.renderReprojectionEdges_ != t) {
      this.renderReprojectionEdges_ = t;
      for (const e in this.tileCacheForProjection)
        this.tileCacheForProjection[e].clear();
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
  setTileGridForProjection(t, e) {
    const i = zt(t);
    if (i) {
      const s = Q(i);
      s in this.tileGridForProjection || (this.tileGridForProjection[s] = e);
    }
  }
  clear() {
    super.clear();
    for (const t in this.tileCacheForProjection)
      this.tileCacheForProjection[t].clear();
  }
}
function vc(n, t) {
  n.getImage().src = t;
}
class Rc extends Ic {
  /**
   * @param {Options} [options] XYZ options.
   */
  constructor(t) {
    t = t || {};
    const e = t.projection !== void 0 ? t.projection : "EPSG:3857", i = t.tileGrid !== void 0 ? t.tileGrid : _c({
      extent: Rr(e),
      maxResolution: t.maxResolution,
      maxZoom: t.maxZoom,
      minZoom: t.minZoom,
      tileSize: t.tileSize
    });
    super({
      attributions: t.attributions,
      cacheSize: t.cacheSize,
      crossOrigin: t.crossOrigin,
      interpolate: t.interpolate,
      opaque: t.opaque,
      projection: e,
      reprojectionErrorThreshold: t.reprojectionErrorThreshold,
      tileGrid: i,
      tileLoadFunction: t.tileLoadFunction,
      tilePixelRatio: t.tilePixelRatio,
      tileUrlFunction: t.tileUrlFunction,
      url: t.url,
      urls: t.urls,
      wrapX: t.wrapX !== void 0 ? t.wrapX : !0,
      transition: t.transition,
      attributionsCollapsible: t.attributionsCollapsible,
      zDirection: t.zDirection
    }), this.gutter_ = t.gutter !== void 0 ? t.gutter : 0;
  }
  /**
   * @return {number} Gutter.
   */
  getGutter() {
    return this.gutter_;
  }
}
const Tc = '&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.';
class Sc extends Rc {
  /**
   * @param {Options} [options] Open Street Map options.
   */
  constructor(t) {
    t = t || {};
    let e;
    t.attributions !== void 0 ? e = t.attributions : e = [Tc];
    const i = t.crossOrigin !== void 0 ? t.crossOrigin : "anonymous", s = t.url !== void 0 ? t.url : "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
    super({
      attributions: e,
      attributionsCollapsible: !1,
      cacheSize: t.cacheSize,
      crossOrigin: i,
      interpolate: t.interpolate,
      maxZoom: t.maxZoom !== void 0 ? t.maxZoom : 19,
      opaque: t.opaque !== void 0 ? t.opaque : !0,
      reprojectionErrorThreshold: t.reprojectionErrorThreshold,
      tileLoadFunction: t.tileLoadFunction,
      transition: t.transition,
      url: s,
      wrapX: t.wrapX,
      zDirection: t.zDirection
    });
  }
}
const Mc = Sc, It = {
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
}, To = {
  LENGTH: "length"
};
class vn extends Ee {
  /**
   * @param {import("./CollectionEventType.js").default} type Type.
   * @param {T} element Element.
   * @param {number} index The index of the added or removed element.
   */
  constructor(t, e, i) {
    super(t), this.element = e, this.index = i;
  }
}
class $t extends se {
  /**
   * @param {Array<T>} [array] Array.
   * @param {Options} [options] Collection options.
   */
  constructor(t, e) {
    if (super(), this.on, this.once, this.un, e = e || {}, this.unique_ = !!e.unique, this.array_ = t || [], this.unique_)
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
  extend(t) {
    for (let e = 0, i = t.length; e < i; ++e)
      this.push(t[e]);
    return this;
  }
  /**
   * Iterate over each element, calling the provided callback.
   * @param {function(T, number, Array<T>): *} f The function to call
   *     for every element. This function takes 3 arguments (the element, the
   *     index and the array). The return value is ignored.
   * @api
   */
  forEach(t) {
    const e = this.array_;
    for (let i = 0, s = e.length; i < s; ++i)
      t(e[i], i, e);
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
  item(t) {
    return this.array_[t];
  }
  /**
   * Get the length of this collection.
   * @return {number} The length of the array.
   * @observable
   * @api
   */
  getLength() {
    return this.get(To.LENGTH);
  }
  /**
   * Insert an element at the provided index.
   * @param {number} index Index.
   * @param {T} elem Element.
   * @api
   */
  insertAt(t, e) {
    if (t < 0 || t > this.getLength())
      throw new Error("Index out of bounds: " + t);
    this.unique_ && this.assertUnique_(e), this.array_.splice(t, 0, e), this.updateLength_(), this.dispatchEvent(
      new vn(It.ADD, e, t)
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
  push(t) {
    this.unique_ && this.assertUnique_(t);
    const e = this.getLength();
    return this.insertAt(e, t), this.getLength();
  }
  /**
   * Remove the first occurrence of an element from the collection.
   * @param {T} elem Element.
   * @return {T|undefined} The removed element or undefined if none found.
   * @api
   */
  remove(t) {
    const e = this.array_;
    for (let i = 0, s = e.length; i < s; ++i)
      if (e[i] === t)
        return this.removeAt(i);
  }
  /**
   * Remove the element at the provided index and return it.
   * Return `undefined` if the collection does not contain this index.
   * @param {number} index Index.
   * @return {T|undefined} Value.
   * @api
   */
  removeAt(t) {
    if (t < 0 || t >= this.getLength())
      return;
    const e = this.array_[t];
    return this.array_.splice(t, 1), this.updateLength_(), this.dispatchEvent(
      /** @type {CollectionEvent<T>} */
      new vn(It.REMOVE, e, t)
    ), e;
  }
  /**
   * Set the element at the provided index.
   * @param {number} index Index.
   * @param {T} elem Element.
   * @api
   */
  setAt(t, e) {
    const i = this.getLength();
    if (t >= i) {
      this.insertAt(t, e);
      return;
    }
    if (t < 0)
      throw new Error("Index out of bounds: " + t);
    this.unique_ && this.assertUnique_(e, t);
    const s = this.array_[t];
    this.array_[t] = e, this.dispatchEvent(
      /** @type {CollectionEvent<T>} */
      new vn(It.REMOVE, s, t)
    ), this.dispatchEvent(
      /** @type {CollectionEvent<T>} */
      new vn(It.ADD, e, t)
    );
  }
  /**
   * @private
   */
  updateLength_() {
    this.set(To.LENGTH, this.array_.length);
  }
  /**
   * @private
   * @param {T} elem Element.
   * @param {number} [except] Optional index to ignore.
   */
  assertUnique_(t, e) {
    for (let i = 0, s = this.array_.length; i < s; ++i)
      if (this.array_[i] === t && i !== e)
        throw new Error("Duplicate item added to a unique collection");
  }
}
function Lc(n, t, e, i, s) {
  ka(n, t, e || 0, i || n.length - 1, s || bc);
}
function ka(n, t, e, i, s) {
  for (; i > e; ) {
    if (i - e > 600) {
      var r = i - e + 1, o = t - e + 1, a = Math.log(r), l = 0.5 * Math.exp(2 * a / 3), h = 0.5 * Math.sqrt(a * l * (r - l) / r) * (o - r / 2 < 0 ? -1 : 1), c = Math.max(e, Math.floor(t - o * l / r + h)), u = Math.min(i, Math.floor(t + (r - o) * l / r + h));
      ka(n, t, c, u, s);
    }
    var d = n[t], f = e, g = i;
    for (ki(n, e, t), s(n[i], d) > 0 && ki(n, e, i); f < g; ) {
      for (ki(n, f, g), f++, g--; s(n[f], d) < 0; )
        f++;
      for (; s(n[g], d) > 0; )
        g--;
    }
    s(n[e], d) === 0 ? ki(n, e, g) : (g++, ki(n, g, i)), g <= t && (e = g + 1), t <= g && (i = g - 1);
  }
}
function ki(n, t, e) {
  var i = n[t];
  n[t] = n[e], n[e] = i;
}
function bc(n, t) {
  return n < t ? -1 : n > t ? 1 : 0;
}
let Fa = class {
  constructor(t = 9) {
    this._maxEntries = Math.max(4, t), this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4)), this.clear();
  }
  all() {
    return this._all(this.data, []);
  }
  search(t) {
    let e = this.data;
    const i = [];
    if (!Tn(t, e))
      return i;
    const s = this.toBBox, r = [];
    for (; e; ) {
      for (let o = 0; o < e.children.length; o++) {
        const a = e.children[o], l = e.leaf ? s(a) : a;
        Tn(t, l) && (e.leaf ? i.push(a) : Ss(t, l) ? this._all(a, i) : r.push(a));
      }
      e = r.pop();
    }
    return i;
  }
  collides(t) {
    let e = this.data;
    if (!Tn(t, e))
      return !1;
    const i = [];
    for (; e; ) {
      for (let s = 0; s < e.children.length; s++) {
        const r = e.children[s], o = e.leaf ? this.toBBox(r) : r;
        if (Tn(t, o)) {
          if (e.leaf || Ss(t, o))
            return !0;
          i.push(r);
        }
      }
      e = i.pop();
    }
    return !1;
  }
  load(t) {
    if (!(t && t.length))
      return this;
    if (t.length < this._minEntries) {
      for (let i = 0; i < t.length; i++)
        this.insert(t[i]);
      return this;
    }
    let e = this._build(t.slice(), 0, t.length - 1, 0);
    if (!this.data.children.length)
      this.data = e;
    else if (this.data.height === e.height)
      this._splitRoot(this.data, e);
    else {
      if (this.data.height < e.height) {
        const i = this.data;
        this.data = e, e = i;
      }
      this._insert(e, this.data.height - e.height - 1, !0);
    }
    return this;
  }
  insert(t) {
    return t && this._insert(t, this.data.height - 1), this;
  }
  clear() {
    return this.data = li([]), this;
  }
  remove(t, e) {
    if (!t)
      return this;
    let i = this.data;
    const s = this.toBBox(t), r = [], o = [];
    let a, l, h;
    for (; i || r.length; ) {
      if (i || (i = r.pop(), l = r[r.length - 1], a = o.pop(), h = !0), i.leaf) {
        const c = Dc(t, i.children, e);
        if (c !== -1)
          return i.children.splice(c, 1), r.push(i), this._condense(r), this;
      }
      !h && !i.leaf && Ss(i, s) ? (r.push(i), o.push(a), a = 0, l = i, i = i.children[0]) : l ? (a++, i = l.children[a], h = !1) : i = null;
    }
    return this;
  }
  toBBox(t) {
    return t;
  }
  compareMinX(t, e) {
    return t.minX - e.minX;
  }
  compareMinY(t, e) {
    return t.minY - e.minY;
  }
  toJSON() {
    return this.data;
  }
  fromJSON(t) {
    return this.data = t, this;
  }
  _all(t, e) {
    const i = [];
    for (; t; )
      t.leaf ? e.push(...t.children) : i.push(...t.children), t = i.pop();
    return e;
  }
  _build(t, e, i, s) {
    const r = i - e + 1;
    let o = this._maxEntries, a;
    if (r <= o)
      return a = li(t.slice(e, i + 1)), si(a, this.toBBox), a;
    s || (s = Math.ceil(Math.log(r) / Math.log(o)), o = Math.ceil(r / Math.pow(o, s - 1))), a = li([]), a.leaf = !1, a.height = s;
    const l = Math.ceil(r / o), h = l * Math.ceil(Math.sqrt(o));
    So(t, e, i, h, this.compareMinX);
    for (let c = e; c <= i; c += h) {
      const u = Math.min(c + h - 1, i);
      So(t, c, u, l, this.compareMinY);
      for (let d = c; d <= u; d += l) {
        const f = Math.min(d + l - 1, u);
        a.children.push(this._build(t, d, f, s - 1));
      }
    }
    return si(a, this.toBBox), a;
  }
  _chooseSubtree(t, e, i, s) {
    for (; s.push(e), !(e.leaf || s.length - 1 === i); ) {
      let r = 1 / 0, o = 1 / 0, a;
      for (let l = 0; l < e.children.length; l++) {
        const h = e.children[l], c = Ts(h), u = kc(t, h) - c;
        u < o ? (o = u, r = c < r ? c : r, a = h) : u === o && c < r && (r = c, a = h);
      }
      e = a || e.children[0];
    }
    return e;
  }
  _insert(t, e, i) {
    const s = i ? t : this.toBBox(t), r = [], o = this._chooseSubtree(s, this.data, e, r);
    for (o.children.push(t), Bi(o, s); e >= 0 && r[e].children.length > this._maxEntries; )
      this._split(r, e), e--;
    this._adjustParentBBoxes(s, r, e);
  }
  // split overflowed node into two
  _split(t, e) {
    const i = t[e], s = i.children.length, r = this._minEntries;
    this._chooseSplitAxis(i, r, s);
    const o = this._chooseSplitIndex(i, r, s), a = li(i.children.splice(o, i.children.length - o));
    a.height = i.height, a.leaf = i.leaf, si(i, this.toBBox), si(a, this.toBBox), e ? t[e - 1].children.push(a) : this._splitRoot(i, a);
  }
  _splitRoot(t, e) {
    this.data = li([t, e]), this.data.height = t.height + 1, this.data.leaf = !1, si(this.data, this.toBBox);
  }
  _chooseSplitIndex(t, e, i) {
    let s, r = 1 / 0, o = 1 / 0;
    for (let a = e; a <= i - e; a++) {
      const l = Gi(t, 0, a, this.toBBox), h = Gi(t, a, i, this.toBBox), c = Fc(l, h), u = Ts(l) + Ts(h);
      c < r ? (r = c, s = a, o = u < o ? u : o) : c === r && u < o && (o = u, s = a);
    }
    return s || i - e;
  }
  // sorts node children by the best axis for split
  _chooseSplitAxis(t, e, i) {
    const s = t.leaf ? this.compareMinX : Pc, r = t.leaf ? this.compareMinY : Oc, o = this._allDistMargin(t, e, i, s), a = this._allDistMargin(t, e, i, r);
    o < a && t.children.sort(s);
  }
  // total margin of all possible split distributions where each node is at least m full
  _allDistMargin(t, e, i, s) {
    t.children.sort(s);
    const r = this.toBBox, o = Gi(t, 0, e, r), a = Gi(t, i - e, i, r);
    let l = Rn(o) + Rn(a);
    for (let h = e; h < i - e; h++) {
      const c = t.children[h];
      Bi(o, t.leaf ? r(c) : c), l += Rn(o);
    }
    for (let h = i - e - 1; h >= e; h--) {
      const c = t.children[h];
      Bi(a, t.leaf ? r(c) : c), l += Rn(a);
    }
    return l;
  }
  _adjustParentBBoxes(t, e, i) {
    for (let s = i; s >= 0; s--)
      Bi(e[s], t);
  }
  _condense(t) {
    for (let e = t.length - 1, i; e >= 0; e--)
      t[e].children.length === 0 ? e > 0 ? (i = t[e - 1].children, i.splice(i.indexOf(t[e]), 1)) : this.clear() : si(t[e], this.toBBox);
  }
};
function Dc(n, t, e) {
  if (!e)
    return t.indexOf(n);
  for (let i = 0; i < t.length; i++)
    if (e(n, t[i]))
      return i;
  return -1;
}
function si(n, t) {
  Gi(n, 0, n.children.length, t, n);
}
function Gi(n, t, e, i, s) {
  s || (s = li(null)), s.minX = 1 / 0, s.minY = 1 / 0, s.maxX = -1 / 0, s.maxY = -1 / 0;
  for (let r = t; r < e; r++) {
    const o = n.children[r];
    Bi(s, n.leaf ? i(o) : o);
  }
  return s;
}
function Bi(n, t) {
  return n.minX = Math.min(n.minX, t.minX), n.minY = Math.min(n.minY, t.minY), n.maxX = Math.max(n.maxX, t.maxX), n.maxY = Math.max(n.maxY, t.maxY), n;
}
function Pc(n, t) {
  return n.minX - t.minX;
}
function Oc(n, t) {
  return n.minY - t.minY;
}
function Ts(n) {
  return (n.maxX - n.minX) * (n.maxY - n.minY);
}
function Rn(n) {
  return n.maxX - n.minX + (n.maxY - n.minY);
}
function kc(n, t) {
  return (Math.max(t.maxX, n.maxX) - Math.min(t.minX, n.minX)) * (Math.max(t.maxY, n.maxY) - Math.min(t.minY, n.minY));
}
function Fc(n, t) {
  const e = Math.max(n.minX, t.minX), i = Math.max(n.minY, t.minY), s = Math.min(n.maxX, t.maxX), r = Math.min(n.maxY, t.maxY);
  return Math.max(0, s - e) * Math.max(0, r - i);
}
function Ss(n, t) {
  return n.minX <= t.minX && n.minY <= t.minY && t.maxX <= n.maxX && t.maxY <= n.maxY;
}
function Tn(n, t) {
  return t.minX <= n.maxX && t.minY <= n.maxY && t.maxX >= n.minX && t.maxY >= n.minY;
}
function li(n) {
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
function So(n, t, e, i, s) {
  const r = [t, e];
  for (; r.length; ) {
    if (e = r.pop(), t = r.pop(), e - t <= i)
      continue;
    const o = t + Math.ceil((e - t) / i / 2) * i;
    Lc(n, o, t, e, s), r.push(t, o, o, e);
  }
}
class ss {
  /**
   * @param {Options} options Options.
   */
  constructor(t) {
    this.opacity_ = t.opacity, this.rotateWithView_ = t.rotateWithView, this.rotation_ = t.rotation, this.scale_ = t.scale, this.scaleArray_ = Dt(t.scale), this.displacement_ = t.displacement, this.declutterMode_ = t.declutterMode;
  }
  /**
   * Clones the style.
   * @return {ImageStyle} The cloned style.
   * @api
   */
  clone() {
    const t = this.getScale();
    return new ss({
      opacity: this.getOpacity(),
      scale: Array.isArray(t) ? t.slice() : t,
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
    return H();
  }
  /**
   * Get the image element for the symbolizer.
   * @abstract
   * @param {number} pixelRatio Pixel ratio.
   * @return {import('../DataTile.js').ImageLike} Image element.
   */
  getImage(t) {
    return H();
  }
  /**
   * @abstract
   * @return {import('../DataTile.js').ImageLike} Image element.
   */
  getHitDetectionImage() {
    return H();
  }
  /**
   * Get the image pixel ratio.
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} Pixel ratio.
   */
  getPixelRatio(t) {
    return 1;
  }
  /**
   * @abstract
   * @return {import("../ImageState.js").default} Image state.
   */
  getImageState() {
    return H();
  }
  /**
   * @abstract
   * @return {import("../size.js").Size} Image size.
   */
  getImageSize() {
    return H();
  }
  /**
   * Get the origin of the symbolizer.
   * @abstract
   * @return {Array<number>} Origin.
   */
  getOrigin() {
    return H();
  }
  /**
   * Get the size of the symbolizer (in pixels).
   * @abstract
   * @return {import("../size.js").Size} Size.
   */
  getSize() {
    return H();
  }
  /**
   * Set the displacement.
   *
   * @param {Array<number>} displacement Displacement.
   * @api
   */
  setDisplacement(t) {
    this.displacement_ = t;
  }
  /**
   * Set the opacity.
   *
   * @param {number} opacity Opacity.
   * @api
   */
  setOpacity(t) {
    this.opacity_ = t;
  }
  /**
   * Set whether to rotate the style with the view.
   *
   * @param {boolean} rotateWithView Rotate with map.
   * @api
   */
  setRotateWithView(t) {
    this.rotateWithView_ = t;
  }
  /**
   * Set the rotation.
   *
   * @param {number} rotation Rotation.
   * @api
   */
  setRotation(t) {
    this.rotation_ = t;
  }
  /**
   * Set the scale.
   *
   * @param {number|import("../size.js").Size} scale Scale.
   * @api
   */
  setScale(t) {
    this.scale_ = t, this.scaleArray_ = Dt(t);
  }
  /**
   * @abstract
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  listenImageChange(t) {
    H();
  }
  /**
   * Load not yet loaded URI.
   * @abstract
   */
  load() {
    H();
  }
  /**
   * @abstract
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  unlistenImageChange(t) {
    H();
  }
  /**
   * @return {Promise<void>} `false` or Promise that resolves when the style is ready to use.
   */
  ready() {
    return Promise.resolve();
  }
}
class Nc {
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
      let t = 0;
      for (const e in this.cache_) {
        const i = this.cache_[e];
        !(t++ & 3) && !i.hasListener() && (delete this.cache_[e], delete this.patternCache_[e], --this.cacheSize_);
      }
    }
  }
  /**
   * @param {string} src Src.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("../color.js").Color|string|null} color Color.
   * @return {import("./IconImage.js").default} Icon image.
   */
  get(t, e, i) {
    const s = Ms(t, e, i);
    return s in this.cache_ ? this.cache_[s] : null;
  }
  /**
   * @param {string} src Src.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("../color.js").Color|string|null} color Color.
   * @return {CanvasPattern} Icon image.
   */
  getPattern(t, e, i) {
    const s = Ms(t, e, i);
    return s in this.patternCache_ ? this.patternCache_[s] : null;
  }
  /**
   * @param {string} src Src.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("../color.js").Color|string|null} color Color.
   * @param {import("./IconImage.js").default|null} iconImage Icon image.
   * @param {boolean} [pattern] Also cache a `'repeat'` pattern with this `iconImage`.
   */
  set(t, e, i, s, r) {
    const o = Ms(t, e, i), a = o in this.cache_;
    this.cache_[o] = s, r && (s.getImageState() === X.IDLE && s.load(), s.getImageState() === X.LOADING ? s.ready().then(() => {
      this.patternCache_[o] = Ys().createPattern(
        s.getImage(1),
        "repeat"
      );
    }) : this.patternCache_[o] = Ys().createPattern(
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
  setSize(t) {
    this.maxCacheSize_ = t, this.expire();
  }
}
function Ms(n, t, e) {
  const i = e ? Qi(e) : "null";
  return t + ":" + n + ":" + i;
}
const te = new Nc();
let Fi = null;
class Gc extends Un {
  /**
   * @param {HTMLImageElement|HTMLCanvasElement|ImageBitmap|null} image Image.
   * @param {string|undefined} src Src.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("../ImageState.js").default|undefined} imageState Image state.
   * @param {import("../color.js").Color|string|null} color Color.
   */
  constructor(t, e, i, s, r) {
    super(), this.hitDetectionImage_ = null, this.image_ = t, this.crossOrigin_ = i, this.canvas_ = {}, this.color_ = r, this.imageState_ = s === void 0 ? X.IDLE : s, this.size_ = t && t.width && t.height ? [t.width, t.height] : null, this.src_ = e, this.tainted_, this.ready_ = null;
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
    if (this.tainted_ === void 0 && this.imageState_ === X.LOADED) {
      Fi || (Fi = ft(1, 1, void 0, {
        willReadFrequently: !0
      })), Fi.drawImage(this.image_, 0, 0);
      try {
        Fi.getImageData(0, 0, 1, 1), this.tainted_ = !1;
      } catch {
        Fi = null, this.tainted_ = !0;
      }
    }
    return this.tainted_ === !0;
  }
  /**
   * @private
   */
  dispatchChangeEvent_() {
    this.dispatchEvent(N.CHANGE);
  }
  /**
   * @private
   */
  handleImageError_() {
    this.imageState_ = X.ERROR, this.dispatchChangeEvent_();
  }
  /**
   * @private
   */
  handleImageLoad_() {
    this.imageState_ = X.LOADED, this.size_ = [this.image_.width, this.image_.height], this.dispatchChangeEvent_();
  }
  /**
   * @param {number} pixelRatio Pixel ratio.
   * @return {HTMLImageElement|HTMLCanvasElement|ImageBitmap} Image or Canvas element or image bitmap.
   */
  getImage(t) {
    return this.image_ || this.initializeImage_(), this.replaceColor_(t), this.canvas_[t] ? this.canvas_[t] : this.image_;
  }
  /**
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} Image or Canvas element.
   */
  getPixelRatio(t) {
    return this.replaceColor_(t), this.canvas_[t] ? t : 1;
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
        const t = this.size_[0], e = this.size_[1], i = ft(t, e);
        i.fillRect(0, 0, t, e), this.hitDetectionImage_ = i.canvas;
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
    if (this.imageState_ === X.IDLE) {
      this.image_ || this.initializeImage_(), this.imageState_ = X.LOADING;
      try {
        this.src_ !== void 0 && (this.image_.src = this.src_);
      } catch {
        this.handleImageError_();
      }
      this.image_ instanceof HTMLImageElement && qh(this.image_, this.src_).then((t) => {
        this.image_ = t, this.handleImageLoad_();
      }).catch(this.handleImageError_.bind(this));
    }
  }
  /**
   * @param {number} pixelRatio Pixel ratio.
   * @private
   */
  replaceColor_(t) {
    if (!this.color_ || this.canvas_[t] || this.imageState_ !== X.LOADED)
      return;
    const e = this.image_, i = document.createElement("canvas");
    i.width = Math.ceil(e.width * t), i.height = Math.ceil(e.height * t);
    const s = i.getContext("2d");
    s.scale(t, t), s.drawImage(e, 0, 0), s.globalCompositeOperation = "multiply", s.fillStyle = Yh(this.color_), s.fillRect(0, 0, i.width / t, i.height / t), s.globalCompositeOperation = "destination-in", s.drawImage(e, 0, 0), this.canvas_[t] = i;
  }
  /**
   * @return {Promise<void>} Promise that resolves when the image is loaded.
   */
  ready() {
    return this.ready_ || (this.ready_ = new Promise((t) => {
      this.imageState_ === X.LOADED || this.imageState_ === X.ERROR ? t() : this.addEventListener(N.CHANGE, function e() {
        (this.imageState_ === X.LOADED || this.imageState_ === X.ERROR) && (this.removeEventListener(N.CHANGE, e), t());
      });
    })), this.ready_;
  }
}
function Sr(n, t, e, i, s, r) {
  let o = t === void 0 ? void 0 : te.get(t, e, s);
  return o || (o = new Gc(
    n,
    n instanceof HTMLImageElement ? n.src || void 0 : t,
    e,
    i,
    s
  ), te.set(t, e, s, o, r)), r && o && !te.getPattern(t, e, s) && te.set(t, e, s, o, r), o;
}
function ee(n) {
  return n ? Array.isArray(n) ? va(n) : typeof n == "object" && "src" in n ? Bc(n) : n : null;
}
function Bc(n) {
  if (!n.offset || !n.size)
    return te.getPattern(n.src, "anonymous", n.color);
  const t = n.src + ":" + n.offset, e = te.getPattern(
    t,
    void 0,
    n.color
  );
  if (e)
    return e;
  const i = te.get(n.src, "anonymous", null);
  if (i.getImageState() !== X.LOADED)
    return null;
  const s = ft(
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
  ), Sr(
    s.canvas,
    t,
    void 0,
    X.LOADED,
    n.color,
    !0
  ), te.getPattern(t, void 0, n.color);
}
const Sn = "ol-hidden", rs = "ol-unselectable", Mr = "ol-control", Mo = "ol-collapsed", Wc = new RegExp(
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
), Lo = [
  "style",
  "variant",
  "weight",
  "size",
  "lineHeight",
  "family"
], Na = function(n) {
  const t = n.match(Wc);
  if (!t)
    return null;
  const e = (
    /** @type {FontParameters} */
    {
      lineHeight: "normal",
      size: "1.2em",
      style: "normal",
      weight: "normal",
      variant: "normal"
    }
  );
  for (let i = 0, s = Lo.length; i < s; ++i) {
    const r = t[i + 1];
    r !== void 0 && (e[Lo[i]] = r);
  }
  return e.families = e.family.split(/,\s?/), e;
}, Ga = "10px sans-serif", vt = "#000", wi = "round", me = [], _e = 0, Ai = "round", qi = 10, Ji = "#000", $i = "center", Nn = "middle", Ze = [0, 0, 0, 0], tn = 1, fe = new se();
let hi = null, Vs;
const Zs = {}, zc = function() {
  const t = "32px ", e = ["monospace", "serif"], i = e.length, s = "wmytzilWMYTZIL@#/&?$%10";
  let r, o;
  function a(h, c, u) {
    let d = !0;
    for (let f = 0; f < i; ++f) {
      const g = e[f];
      if (o = Gn(
        h + " " + c + " " + t + g,
        s
      ), u != g) {
        const m = Gn(
          h + " " + c + " " + t + u + "," + g,
          s
        );
        d = d && m != o;
      }
    }
    return !!d;
  }
  function l() {
    let h = !0;
    const c = fe.getKeys();
    for (let u = 0, d = c.length; u < d; ++u) {
      const f = c[u];
      fe.get(f) < 100 && (a.apply(this, f.split(`
`)) ? (on(Zs), hi = null, Vs = void 0, fe.set(f, 100)) : (fe.set(f, fe.get(f) + 1, !0), h = !1));
    }
    h && (clearInterval(r), r = void 0);
  }
  return function(h) {
    const c = Na(h);
    if (!c)
      return;
    const u = c.families;
    for (let d = 0, f = u.length; d < f; ++d) {
      const g = u[d], m = c.style + `
` + c.weight + `
` + g;
      fe.get(m) === void 0 && (fe.set(m, 100, !0), a(c.style, c.weight, g) || (fe.set(m, 0, !0), r === void 0 && (r = setInterval(l, 32))));
    }
  };
}(), Xc = /* @__PURE__ */ function() {
  let n;
  return function(t) {
    let e = Zs[t];
    if (e == null) {
      if (Ea) {
        const i = Na(t), s = Ba(t, "Žg");
        e = (isNaN(Number(i.lineHeight)) ? 1.2 : Number(i.lineHeight)) * (s.actualBoundingBoxAscent + s.actualBoundingBoxDescent);
      } else
        n || (n = document.createElement("div"), n.innerHTML = "M", n.style.minHeight = "0", n.style.maxHeight = "none", n.style.height = "auto", n.style.padding = "0", n.style.border = "none", n.style.position = "absolute", n.style.display = "block", n.style.left = "-99999px"), n.style.font = t, document.body.appendChild(n), e = n.offsetHeight, document.body.removeChild(n);
      Zs[t] = e;
    }
    return e;
  };
}();
function Ba(n, t) {
  return hi || (hi = ft(1, 1)), n != Vs && (hi.font = n, Vs = hi.font), hi.measureText(t);
}
function Gn(n, t) {
  return Ba(n, t).width;
}
function bo(n, t, e) {
  if (t in e)
    return e[t];
  const i = t.split(`
`).reduce((s, r) => Math.max(s, Gn(n, r)), 0);
  return e[t] = i, i;
}
function Yc(n, t) {
  const e = [], i = [], s = [];
  let r = 0, o = 0, a = 0, l = 0;
  for (let h = 0, c = t.length; h <= c; h += 2) {
    const u = t[h];
    if (u === `
` || h === c) {
      r = Math.max(r, o), s.push(o), o = 0, a += l;
      continue;
    }
    const d = t[h + 1] || n.font, f = Gn(d, u);
    e.push(f), o += f;
    const g = Xc(d);
    i.push(g), l = Math.max(l, g);
  }
  return { width: r, height: a, widths: e, heights: i, lineWidths: s };
}
function Kc(n, t, e, i, s, r, o, a, l, h, c) {
  n.save(), e !== 1 && (n.globalAlpha === void 0 ? n.globalAlpha = (u) => u.globalAlpha *= e : n.globalAlpha *= e), t && n.transform.apply(n, t), /** @type {*} */
  i.contextInstructions ? (n.translate(l, h), n.scale(c[0], c[1]), Uc(
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
function Uc(n, t) {
  const e = n.contextInstructions;
  for (let i = 0, s = e.length; i < s; i += 2)
    Array.isArray(e[i + 1]) ? t[e[i]].apply(
      t,
      e[i + 1]
    ) : t[e[i]] = e[i + 1];
}
class os extends ss {
  /**
   * @param {Options} options Options.
   */
  constructor(t) {
    super({
      opacity: 1,
      rotateWithView: t.rotateWithView !== void 0 ? t.rotateWithView : !1,
      rotation: t.rotation !== void 0 ? t.rotation : 0,
      scale: t.scale !== void 0 ? t.scale : 1,
      displacement: t.displacement !== void 0 ? t.displacement : [0, 0],
      declutterMode: t.declutterMode
    }), this.canvases_, this.hitDetectionCanvas_ = null, this.fill_ = t.fill !== void 0 ? t.fill : null, this.origin_ = [0, 0], this.points_ = t.points, this.radius_ = t.radius, this.radius2_ = t.radius2, this.angle_ = t.angle !== void 0 ? t.angle : 0, this.stroke_ = t.stroke !== void 0 ? t.stroke : null, this.size_, this.renderOptions_, this.imageState_ = this.fill_ && this.fill_.loading() ? X.LOADING : X.LOADED, this.imageState_ === X.LOADING && this.ready().then(() => this.imageState_ = X.LOADED), this.render();
  }
  /**
   * Clones the style.
   * @return {RegularShape} The cloned style.
   * @api
   */
  clone() {
    const t = this.getScale(), e = new os({
      fill: this.getFill() ? this.getFill().clone() : void 0,
      points: this.getPoints(),
      radius: this.getRadius(),
      radius2: this.getRadius2(),
      angle: this.getAngle(),
      stroke: this.getStroke() ? this.getStroke().clone() : void 0,
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      scale: Array.isArray(t) ? t.slice() : t,
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode()
    });
    return e.setOpacity(this.getOpacity()), e;
  }
  /**
   * Get the anchor point in pixels. The anchor determines the center point for the
   * symbolizer.
   * @return {Array<number>} Anchor.
   * @api
   */
  getAnchor() {
    const t = this.size_, e = this.getDisplacement(), i = this.getScaleArray();
    return [
      t[0] / 2 - e[0] / i[0],
      t[1] / 2 + e[1] / i[1]
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
  setFill(t) {
    this.fill_ = t, this.render();
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
  getImage(t) {
    let e = this.canvases_[t];
    if (!e) {
      const i = this.renderOptions_, s = ft(
        i.size * t,
        i.size * t
      );
      this.draw_(i, s, t), e = s.canvas, this.canvases_[t] = e;
    }
    return e;
  }
  /**
   * Get the image pixel ratio.
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} Pixel ratio.
   */
  getPixelRatio(t) {
    return t;
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
  setStroke(t) {
    this.stroke_ = t, this.render();
  }
  /**
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  listenImageChange(t) {
  }
  /**
   * Load not yet loaded URI.
   */
  load() {
  }
  /**
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  unlistenImageChange(t) {
  }
  /**
   * Calculate additional canvas size needed for the miter.
   * @param {string} lineJoin Line join
   * @param {number} strokeWidth Stroke width
   * @param {number} miterLimit Miter limit
   * @return {number} Additional canvas size needed
   * @private
   */
  calculateLineJoinSize_(t, e, i) {
    if (e === 0 || this.points_ === 1 / 0 || t !== "bevel" && t !== "miter")
      return e;
    let s = this.radius_, r = this.radius2_ === void 0 ? s : this.radius2_;
    if (s < r) {
      const v = s;
      s = r, r = v;
    }
    const o = this.radius2_ === void 0 ? this.points_ : this.points_ * 2, a = 2 * Math.PI / o, l = r * Math.sin(a), h = Math.sqrt(r * r - l * l), c = s - h, u = Math.sqrt(l * l + c * c), d = u / l;
    if (t === "miter" && d <= i)
      return d * e;
    const f = e / 2 / d, g = e / 2 * (c / u), _ = Math.sqrt((s + f) * (s + f) + g * g) - s;
    if (this.radius2_ === void 0 || t === "bevel")
      return _ * 2;
    const p = s * Math.sin(a), y = Math.sqrt(s * s - p * p), C = r - y, x = Math.sqrt(p * p + C * C) / p;
    if (x <= i) {
      const v = x * e / 2 - r - s;
      return 2 * Math.max(_, v);
    }
    return _ * 2;
  }
  /**
   * @return {RenderOptions}  The render options
   * @protected
   */
  createRenderOptions() {
    let t = wi, e = Ai, i = 0, s = null, r = 0, o, a = 0;
    this.stroke_ && (o = ee(this.stroke_.getColor() ?? Ji), a = this.stroke_.getWidth() ?? tn, s = this.stroke_.getLineDash(), r = this.stroke_.getLineDashOffset() ?? 0, e = this.stroke_.getLineJoin() ?? Ai, t = this.stroke_.getLineCap() ?? wi, i = this.stroke_.getMiterLimit() ?? qi);
    const l = this.calculateLineJoinSize_(e, a, i), h = Math.max(this.radius_, this.radius2_ || 0), c = Math.ceil(2 * h + l);
    return {
      strokeStyle: o,
      strokeWidth: a,
      size: c,
      lineCap: t,
      lineDash: s,
      lineDashOffset: r,
      lineJoin: e,
      miterLimit: i
    };
  }
  /**
   * @protected
   */
  render() {
    this.renderOptions_ = this.createRenderOptions();
    const t = this.renderOptions_.size;
    this.canvases_ = {}, this.hitDetectionCanvas_ = null, this.size_ = [t, t];
  }
  /**
   * @private
   * @param {RenderOptions} renderOptions Render options.
   * @param {CanvasRenderingContext2D} context The rendering context.
   * @param {number} pixelRatio The pixel ratio.
   */
  draw_(t, e, i) {
    if (e.scale(i, i), e.translate(t.size / 2, t.size / 2), this.createPath_(e), this.fill_) {
      let s = this.fill_.getColor();
      s === null && (s = vt), e.fillStyle = ee(s), e.fill();
    }
    t.strokeStyle && (e.strokeStyle = t.strokeStyle, e.lineWidth = t.strokeWidth, t.lineDash && (e.setLineDash(t.lineDash), e.lineDashOffset = t.lineDashOffset), e.lineCap = t.lineCap, e.lineJoin = t.lineJoin, e.miterLimit = t.miterLimit, e.stroke());
  }
  /**
   * @private
   * @param {RenderOptions} renderOptions Render options.
   * @return {HTMLCanvasElement} Canvas containing the icon
   */
  createHitDetectionCanvas_(t) {
    let e;
    if (this.fill_) {
      let i = this.fill_.getColor(), s = 0;
      typeof i == "string" && (i = Qi(i)), i === null ? s = 1 : Array.isArray(i) && (s = i.length === 4 ? i[3] : 1), s === 0 && (e = ft(t.size, t.size), this.drawHitDetectionCanvas_(t, e));
    }
    return e ? e.canvas : this.getImage(1);
  }
  /**
   * @private
   * @param {CanvasRenderingContext2D} context The context to draw in.
   */
  createPath_(t) {
    let e = this.points_;
    const i = this.radius_;
    if (e === 1 / 0)
      t.arc(0, 0, i, 0, 2 * Math.PI);
    else {
      const s = this.radius2_ === void 0 ? i : this.radius2_;
      this.radius2_ !== void 0 && (e *= 2);
      const r = this.angle_ - Math.PI / 2, o = 2 * Math.PI / e;
      for (let a = 0; a < e; a++) {
        const l = r + a * o, h = a % 2 === 0 ? i : s;
        t.lineTo(h * Math.cos(l), h * Math.sin(l));
      }
      t.closePath();
    }
  }
  /**
   * @private
   * @param {RenderOptions} renderOptions Render options.
   * @param {CanvasRenderingContext2D} context The context.
   */
  drawHitDetectionCanvas_(t, e) {
    e.translate(t.size / 2, t.size / 2), this.createPath_(e), e.fillStyle = vt, e.fill(), t.strokeStyle && (e.strokeStyle = t.strokeStyle, e.lineWidth = t.strokeWidth, t.lineDash && (e.setLineDash(t.lineDash), e.lineDashOffset = t.lineDashOffset), e.lineJoin = t.lineJoin, e.miterLimit = t.miterLimit, e.stroke());
  }
  ready() {
    return this.fill_ ? this.fill_.ready() : Promise.resolve();
  }
}
class hn extends os {
  /**
   * @param {Options} [options] Options.
   */
  constructor(t) {
    t = t || { radius: 5 }, super({
      points: 1 / 0,
      fill: t.fill,
      radius: t.radius,
      stroke: t.stroke,
      scale: t.scale !== void 0 ? t.scale : 1,
      rotation: t.rotation !== void 0 ? t.rotation : 0,
      rotateWithView: t.rotateWithView !== void 0 ? t.rotateWithView : !1,
      displacement: t.displacement !== void 0 ? t.displacement : [0, 0],
      declutterMode: t.declutterMode
    });
  }
  /**
   * Clones the style.
   * @return {CircleStyle} The cloned style.
   * @api
   */
  clone() {
    const t = this.getScale(), e = new hn({
      fill: this.getFill() ? this.getFill().clone() : void 0,
      stroke: this.getStroke() ? this.getStroke().clone() : void 0,
      radius: this.getRadius(),
      scale: Array.isArray(t) ? t.slice() : t,
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode()
    });
    return e.setOpacity(this.getOpacity()), e;
  }
  /**
   * Set the circle radius.
   *
   * @param {number} radius Circle radius.
   * @api
   */
  setRadius(t) {
    this.radius_ = t, this.render();
  }
}
class vi {
  /**
   * @param {Options} [options] Options.
   */
  constructor(t) {
    t = t || {}, this.patternImage_ = null, this.color_ = null, t.color !== void 0 && this.setColor(t.color);
  }
  /**
   * Clones the style. The color is not cloned if it is an {@link module:ol/colorlike~ColorLike}.
   * @return {Fill} The cloned style.
   * @api
   */
  clone() {
    const t = this.getColor();
    return new vi({
      color: Array.isArray(t) ? t.slice() : t || void 0
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
  setColor(t) {
    if (t !== null && typeof t == "object" && "src" in t) {
      const e = Sr(
        null,
        t.src,
        "anonymous",
        void 0,
        t.offset ? null : t.color ? t.color : null,
        !(t.offset && t.size)
      );
      e.ready().then(() => {
        this.patternImage_ = null;
      }), e.getImageState() === X.IDLE && e.load(), e.getImageState() === X.LOADING && (this.patternImage_ = e);
    }
    this.color_ = t;
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
class Le {
  /**
   * @param {Options} [options] Options.
   */
  constructor(t) {
    t = t || {}, this.color_ = t.color !== void 0 ? t.color : null, this.lineCap_ = t.lineCap, this.lineDash_ = t.lineDash !== void 0 ? t.lineDash : null, this.lineDashOffset_ = t.lineDashOffset, this.lineJoin_ = t.lineJoin, this.miterLimit_ = t.miterLimit, this.width_ = t.width;
  }
  /**
   * Clones the style.
   * @return {Stroke} The cloned style.
   * @api
   */
  clone() {
    const t = this.getColor();
    return new Le({
      color: Array.isArray(t) ? t.slice() : t || void 0,
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
  setColor(t) {
    this.color_ = t;
  }
  /**
   * Set the line cap.
   *
   * @param {CanvasLineCap|undefined} lineCap Line cap.
   * @api
   */
  setLineCap(t) {
    this.lineCap_ = t;
  }
  /**
   * Set the line dash.
   *
   * @param {Array<number>|null} lineDash Line dash.
   * @api
   */
  setLineDash(t) {
    this.lineDash_ = t;
  }
  /**
   * Set the line dash offset.
   *
   * @param {number|undefined} lineDashOffset Line dash offset.
   * @api
   */
  setLineDashOffset(t) {
    this.lineDashOffset_ = t;
  }
  /**
   * Set the line join.
   *
   * @param {CanvasLineJoin|undefined} lineJoin Line join.
   * @api
   */
  setLineJoin(t) {
    this.lineJoin_ = t;
  }
  /**
   * Set the miter limit.
   *
   * @param {number|undefined} miterLimit Miter limit.
   * @api
   */
  setMiterLimit(t) {
    this.miterLimit_ = t;
  }
  /**
   * Set the width.
   *
   * @param {number|undefined} width Width.
   * @api
   */
  setWidth(t) {
    this.width_ = t;
  }
}
class Gt {
  /**
   * @param {Options} [options] Style options.
   */
  constructor(t) {
    t = t || {}, this.geometry_ = null, this.geometryFunction_ = Do, t.geometry !== void 0 && this.setGeometry(t.geometry), this.fill_ = t.fill !== void 0 ? t.fill : null, this.image_ = t.image !== void 0 ? t.image : null, this.renderer_ = t.renderer !== void 0 ? t.renderer : null, this.hitDetectionRenderer_ = t.hitDetectionRenderer !== void 0 ? t.hitDetectionRenderer : null, this.stroke_ = t.stroke !== void 0 ? t.stroke : null, this.text_ = t.text !== void 0 ? t.text : null, this.zIndex_ = t.zIndex;
  }
  /**
   * Clones the style.
   * @return {Style} The cloned style.
   * @api
   */
  clone() {
    let t = this.getGeometry();
    return t && typeof t == "object" && (t = /** @type {import("../geom/Geometry.js").default} */
    t.clone()), new Gt({
      geometry: t ?? void 0,
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
  setRenderer(t) {
    this.renderer_ = t;
  }
  /**
   * Sets a custom renderer function for this style used
   * in hit detection.
   * @param {RenderFunction|null} renderer Custom renderer function.
   * @api
   */
  setHitDetectionRenderer(t) {
    this.hitDetectionRenderer_ = t;
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
  setFill(t) {
    this.fill_ = t;
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
  setImage(t) {
    this.image_ = t;
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
  setStroke(t) {
    this.stroke_ = t;
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
  setText(t) {
    this.text_ = t;
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
  setGeometry(t) {
    typeof t == "function" ? this.geometryFunction_ = t : typeof t == "string" ? this.geometryFunction_ = function(e) {
      return (
        /** @type {import("../geom/Geometry.js").default} */
        e.get(t)
      );
    } : t ? t !== void 0 && (this.geometryFunction_ = function() {
      return (
        /** @type {import("../geom/Geometry.js").default} */
        t
      );
    }) : this.geometryFunction_ = Do, this.geometry_ = t;
  }
  /**
   * Set the z-index.
   *
   * @param {number|undefined} zIndex ZIndex.
   * @api
   */
  setZIndex(t) {
    this.zIndex_ = t;
  }
}
function Vc(n) {
  let t;
  if (typeof n == "function")
    t = n;
  else {
    let e;
    Array.isArray(n) ? e = n : (U(
      typeof /** @type {?} */
      n.getZIndex == "function",
      "Expected an `Style` or an array of `Style`"
    ), e = [
      /** @type {Style} */
      n
    ]), t = function() {
      return e;
    };
  }
  return t;
}
let Ls = null;
function Zc(n, t) {
  if (!Ls) {
    const e = new vi({
      color: "rgba(255,255,255,0.4)"
    }), i = new Le({
      color: "#3399CC",
      width: 1.25
    });
    Ls = [
      new Gt({
        image: new hn({
          fill: e,
          stroke: i,
          radius: 5
        }),
        fill: e,
        stroke: i
      })
    ];
  }
  return Ls;
}
function Do(n) {
  return n.getGeometry();
}
function Po(n, t, e, i) {
  return e !== void 0 && i !== void 0 ? [e / n, i / t] : e !== void 0 ? e / n : i !== void 0 ? i / t : 1;
}
class cn extends ss {
  /**
   * @param {Options} [options] Options.
   */
  constructor(t) {
    t = t || {};
    const e = t.opacity !== void 0 ? t.opacity : 1, i = t.rotation !== void 0 ? t.rotation : 0, s = t.scale !== void 0 ? t.scale : 1, r = t.rotateWithView !== void 0 ? t.rotateWithView : !1;
    super({
      opacity: e,
      rotation: i,
      scale: s,
      displacement: t.displacement !== void 0 ? t.displacement : [0, 0],
      rotateWithView: r,
      declutterMode: t.declutterMode
    }), this.anchor_ = t.anchor !== void 0 ? t.anchor : [0.5, 0.5], this.normalizedAnchor_ = null, this.anchorOrigin_ = t.anchorOrigin !== void 0 ? t.anchorOrigin : "top-left", this.anchorXUnits_ = t.anchorXUnits !== void 0 ? t.anchorXUnits : "fraction", this.anchorYUnits_ = t.anchorYUnits !== void 0 ? t.anchorYUnits : "fraction", this.crossOrigin_ = t.crossOrigin !== void 0 ? t.crossOrigin : null;
    const o = t.img !== void 0 ? t.img : null;
    let a = t.src;
    U(
      !(a !== void 0 && o),
      "`image` and `src` cannot be provided at the same time"
    ), (a === void 0 || a.length === 0) && o && (a = /** @type {HTMLImageElement} */
    o.src || Q(o)), U(
      a !== void 0 && a.length > 0,
      "A defined and non-empty `src` or `image` must be provided"
    ), U(
      !((t.width !== void 0 || t.height !== void 0) && t.scale !== void 0),
      "`width` or `height` cannot be provided together with `scale`"
    );
    let l;
    if (t.src !== void 0 ? l = X.IDLE : o !== void 0 && (o instanceof HTMLImageElement ? o.complete ? l = o.src ? X.LOADED : X.IDLE : l = X.LOADING : l = X.LOADED), this.color_ = t.color !== void 0 ? Qi(t.color) : null, this.iconImage_ = Sr(
      o,
      /** @type {string} */
      a,
      this.crossOrigin_,
      l,
      this.color_
    ), this.offset_ = t.offset !== void 0 ? t.offset : [0, 0], this.offsetOrigin_ = t.offsetOrigin !== void 0 ? t.offsetOrigin : "top-left", this.origin_ = null, this.size_ = t.size !== void 0 ? t.size : null, t.width !== void 0 || t.height !== void 0) {
      let h, c;
      if (t.size)
        [h, c] = t.size;
      else {
        const u = this.getImage(1);
        if (u.width && u.height)
          h = u.width, c = u.height;
        else if (u instanceof HTMLImageElement) {
          this.initialOptions_ = t;
          const d = () => {
            if (this.unlistenImageChange(d), !this.initialOptions_)
              return;
            const f = this.iconImage_.getSize();
            this.setScale(
              Po(
                f[0],
                f[1],
                t.width,
                t.height
              )
            );
          };
          this.listenImageChange(d);
          return;
        }
      }
      h !== void 0 && this.setScale(
        Po(h, c, t.width, t.height)
      );
    }
  }
  /**
   * Clones the style. The underlying Image/HTMLCanvasElement is not cloned.
   * @return {Icon} The cloned style.
   * @api
   */
  clone() {
    let t, e, i;
    return this.initialOptions_ ? (e = this.initialOptions_.width, i = this.initialOptions_.height) : (t = this.getScale(), t = Array.isArray(t) ? t.slice() : t), new cn({
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
      scale: t,
      width: e,
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
    let t = this.normalizedAnchor_;
    if (!t) {
      t = this.anchor_;
      const s = this.getSize();
      if (this.anchorXUnits_ == "fraction" || this.anchorYUnits_ == "fraction") {
        if (!s)
          return null;
        t = this.anchor_.slice(), this.anchorXUnits_ == "fraction" && (t[0] *= s[0]), this.anchorYUnits_ == "fraction" && (t[1] *= s[1]);
      }
      if (this.anchorOrigin_ != "top-left") {
        if (!s)
          return null;
        t === this.anchor_ && (t = this.anchor_.slice()), (this.anchorOrigin_ == "top-right" || this.anchorOrigin_ == "bottom-right") && (t[0] = -t[0] + s[0]), (this.anchorOrigin_ == "bottom-left" || this.anchorOrigin_ == "bottom-right") && (t[1] = -t[1] + s[1]);
      }
      this.normalizedAnchor_ = t;
    }
    const e = this.getDisplacement(), i = this.getScaleArray();
    return [
      t[0] - e[0] / i[0],
      t[1] + e[1] / i[1]
    ];
  }
  /**
   * Set the anchor point. The anchor determines the center point for the
   * symbolizer.
   *
   * @param {Array<number>} anchor Anchor.
   * @api
   */
  setAnchor(t) {
    this.anchor_ = t, this.normalizedAnchor_ = null;
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
  getImage(t) {
    return this.iconImage_.getImage(t);
  }
  /**
   * Get the pixel ratio.
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} The pixel ratio of the image.
   * @api
   */
  getPixelRatio(t) {
    return this.iconImage_.getPixelRatio(t);
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
    let t = this.offset_;
    if (this.offsetOrigin_ != "top-left") {
      const e = this.getSize(), i = this.iconImage_.getSize();
      if (!e || !i)
        return null;
      t = t.slice(), (this.offsetOrigin_ == "top-right" || this.offsetOrigin_ == "bottom-right") && (t[0] = i[0] - e[0] - t[0]), (this.offsetOrigin_ == "bottom-left" || this.offsetOrigin_ == "bottom-right") && (t[1] = i[1] - e[1] - t[1]);
    }
    return this.origin_ = t, this.origin_;
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
    const t = this.getScaleArray();
    if (this.size_)
      return this.size_[0] * t[0];
    if (this.iconImage_.getImageState() == X.LOADED)
      return this.iconImage_.getSize()[0] * t[0];
  }
  /**
   * Get the height of the icon (in pixels). Will return undefined when the icon image is not yet loaded.
   * @return {number} Icon height (in pixels).
   * @api
   */
  getHeight() {
    const t = this.getScaleArray();
    if (this.size_)
      return this.size_[1] * t[1];
    if (this.iconImage_.getImageState() == X.LOADED)
      return this.iconImage_.getSize()[1] * t[1];
  }
  /**
   * Set the scale.
   *
   * @param {number|import("../size.js").Size} scale Scale.
   * @api
   */
  setScale(t) {
    delete this.initialOptions_, super.setScale(t);
  }
  /**
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  listenImageChange(t) {
    this.iconImage_.addEventListener(N.CHANGE, t);
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
  unlistenImageChange(t) {
    this.iconImage_.removeEventListener(N.CHANGE, t);
  }
  ready() {
    return this.iconImage_.ready();
  }
}
const Hc = "#333";
class Lr {
  /**
   * @param {Options} [options] Options.
   */
  constructor(t) {
    t = t || {}, this.font_ = t.font, this.rotation_ = t.rotation, this.rotateWithView_ = t.rotateWithView, this.scale_ = t.scale, this.scaleArray_ = Dt(t.scale !== void 0 ? t.scale : 1), this.text_ = t.text, this.textAlign_ = t.textAlign, this.justify_ = t.justify, this.repeat_ = t.repeat, this.textBaseline_ = t.textBaseline, this.fill_ = t.fill !== void 0 ? t.fill : new vi({ color: Hc }), this.maxAngle_ = t.maxAngle !== void 0 ? t.maxAngle : Math.PI / 4, this.placement_ = t.placement !== void 0 ? t.placement : "point", this.overflow_ = !!t.overflow, this.stroke_ = t.stroke !== void 0 ? t.stroke : null, this.offsetX_ = t.offsetX !== void 0 ? t.offsetX : 0, this.offsetY_ = t.offsetY !== void 0 ? t.offsetY : 0, this.backgroundFill_ = t.backgroundFill ? t.backgroundFill : null, this.backgroundStroke_ = t.backgroundStroke ? t.backgroundStroke : null, this.padding_ = t.padding === void 0 ? null : t.padding, this.declutterMode_ = t.declutterMode;
  }
  /**
   * Clones the style.
   * @return {Text} The cloned style.
   * @api
   */
  clone() {
    const t = this.getScale();
    return new Lr({
      font: this.getFont(),
      placement: this.getPlacement(),
      repeat: this.getRepeat(),
      maxAngle: this.getMaxAngle(),
      overflow: this.getOverflow(),
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      scale: Array.isArray(t) ? t.slice() : t,
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
  setOverflow(t) {
    this.overflow_ = t;
  }
  /**
   * Set the font.
   *
   * @param {string|undefined} font Font.
   * @api
   */
  setFont(t) {
    this.font_ = t;
  }
  /**
   * Set the maximum angle between adjacent characters.
   *
   * @param {number} maxAngle Angle in radians.
   * @api
   */
  setMaxAngle(t) {
    this.maxAngle_ = t;
  }
  /**
   * Set the x offset.
   *
   * @param {number} offsetX Horizontal text offset.
   * @api
   */
  setOffsetX(t) {
    this.offsetX_ = t;
  }
  /**
   * Set the y offset.
   *
   * @param {number} offsetY Vertical text offset.
   * @api
   */
  setOffsetY(t) {
    this.offsetY_ = t;
  }
  /**
   * Set the text placement.
   *
   * @param {TextPlacement} placement Placement.
   * @api
   */
  setPlacement(t) {
    this.placement_ = t;
  }
  /**
   * Set the repeat interval of the text.
   * @param {number|undefined} [repeat] Repeat interval in pixels.
   * @api
   */
  setRepeat(t) {
    this.repeat_ = t;
  }
  /**
   * Set whether to rotate the text with the view.
   *
   * @param {boolean} rotateWithView Rotate with map.
   * @api
   */
  setRotateWithView(t) {
    this.rotateWithView_ = t;
  }
  /**
   * Set the fill.
   *
   * @param {import("./Fill.js").default|null} fill Fill style.
   * @api
   */
  setFill(t) {
    this.fill_ = t;
  }
  /**
   * Set the rotation.
   *
   * @param {number|undefined} rotation Rotation.
   * @api
   */
  setRotation(t) {
    this.rotation_ = t;
  }
  /**
   * Set the scale.
   *
   * @param {number|import("../size.js").Size|undefined} scale Scale.
   * @api
   */
  setScale(t) {
    this.scale_ = t, this.scaleArray_ = Dt(t !== void 0 ? t : 1);
  }
  /**
   * Set the stroke.
   *
   * @param {import("./Stroke.js").default|null} stroke Stroke style.
   * @api
   */
  setStroke(t) {
    this.stroke_ = t;
  }
  /**
   * Set the text.
   *
   * @param {string|Array<string>|undefined} text Text.
   * @api
   */
  setText(t) {
    this.text_ = t;
  }
  /**
   * Set the text alignment.
   *
   * @param {CanvasTextAlign|undefined} textAlign Text align.
   * @api
   */
  setTextAlign(t) {
    this.textAlign_ = t;
  }
  /**
   * Set the justification.
   *
   * @param {TextJustify|undefined} justify Justification.
   * @api
   */
  setJustify(t) {
    this.justify_ = t;
  }
  /**
   * Set the text baseline.
   *
   * @param {CanvasTextBaseline|undefined} textBaseline Text baseline.
   * @api
   */
  setTextBaseline(t) {
    this.textBaseline_ = t;
  }
  /**
   * Set the background fill.
   *
   * @param {import("./Fill.js").default|null} fill Fill style.
   * @api
   */
  setBackgroundFill(t) {
    this.backgroundFill_ = t;
  }
  /**
   * Set the background stroke.
   *
   * @param {import("./Stroke.js").default|null} stroke Stroke style.
   * @api
   */
  setBackgroundStroke(t) {
    this.backgroundStroke_ = t;
  }
  /**
   * Set the padding (`[top, right, bottom, left]`).
   *
   * @param {Array<number>|null} padding Padding.
   * @api
   */
  setPadding(t) {
    this.padding_ = t;
  }
}
let Ri = 0;
const Ti = 0, at = 1 << Ri++, M = 1 << Ri++, Zt = 1 << Ri++, pt = 1 << Ri++, ye = 1 << Ri++, gt = Math.pow(2, Ri) - 1, Wa = {
  [at]: "boolean",
  [M]: "number",
  [Zt]: "string",
  [pt]: "color",
  [ye]: "number[]"
}, jc = Object.keys(Wa).map(Number).sort(Oe);
function yt(n) {
  const t = [];
  for (const e of jc)
    Qc(n, e) && t.push(Wa[e]);
  return t.length === 0 ? "untyped" : t.length < 3 ? t.join(" or ") : t.slice(0, -1).join(", ") + ", or " + t[t.length - 1];
}
function Qc(n, t) {
  return (n & t) === t;
}
function ie(n, t) {
  return !!(n & t);
}
function as(n, t) {
  return n === t;
}
class be {
  /**
   * @param {number} type The value type.
   * @param {LiteralValue} value The literal value.
   */
  constructor(t, e) {
    this.type = t, this.value = e;
  }
}
class qc {
  /**
   * @param {number} type The return type.
   * @param {string} operator The operator.
   * @param {...Expression} args The arguments.
   */
  constructor(t, e, ...i) {
    this.type = t, this.operator = e, this.args = i;
  }
}
function za() {
  return {
    variables: /* @__PURE__ */ new Set(),
    properties: /* @__PURE__ */ new Set(),
    featureId: !1,
    geometryType: !1,
    style: {}
  };
}
function Jc(n) {
  switch (n) {
    case "string":
      return Zt;
    case "color":
      return pt;
    case "number":
      return M;
    case "boolean":
      return at;
    case "number[]":
      return ye;
    default:
      throw new Error(`Unrecognized type hint: ${n}`);
  }
}
function q(n, t, e) {
  switch (typeof n) {
    case "boolean":
      return new be(at, n);
    case "number":
      return new be(M, n);
    case "string": {
      let s = Zt;
      return Zh(n) && (s |= pt), as(s & e, Ti) || (s &= e), new be(s, n);
    }
  }
  if (!Array.isArray(n))
    throw new Error("Expression must be an array or a primitive value");
  if (n.length === 0)
    throw new Error("Empty expression");
  if (typeof n[0] == "string")
    return cu(n, t, e);
  for (const s of n)
    if (typeof s != "number")
      throw new Error("Expected an array of numbers");
  let i = ye;
  return (n.length === 3 || n.length === 4) && (i |= pt), e && (i &= e), new be(i, n);
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
}, $c = {
  [A.Get]: F(
    ([n, t]) => t !== void 0 ? Jc(
      /** @type {string} */
      /** @type {LiteralExpression} */
      t.value
    ) : gt,
    z(1, 2),
    tu
  ),
  [A.Var]: F(
    ([n]) => n.type,
    z(1, 1),
    eu
  ),
  [A.Id]: F(M | Zt, Ni, iu),
  [A.Concat]: F(
    Zt,
    z(2, 1 / 0),
    Z(gt)
  ),
  [A.GeometryType]: F(Zt, Ni, nu),
  [A.Resolution]: F(M, Ni),
  [A.Zoom]: F(M, Ni),
  [A.Time]: F(M, Ni),
  [A.Any]: F(
    at,
    z(2, 1 / 0),
    Z(at)
  ),
  [A.All]: F(
    at,
    z(2, 1 / 0),
    Z(at)
  ),
  [A.Not]: F(
    at,
    z(1, 1),
    Z(at)
  ),
  [A.Equal]: F(
    at,
    z(2, 2),
    Z(gt),
    Ae
  ),
  [A.NotEqual]: F(
    at,
    z(2, 2),
    Z(gt),
    Ae
  ),
  [A.GreaterThan]: F(
    at,
    z(2, 2),
    Z(gt),
    Ae
  ),
  [A.GreaterThanOrEqualTo]: F(
    at,
    z(2, 2),
    Z(gt),
    Ae
  ),
  [A.LessThan]: F(
    at,
    z(2, 2),
    Z(gt),
    Ae
  ),
  [A.LessThanOrEqualTo]: F(
    at,
    z(2, 2),
    Z(gt),
    Ae
  ),
  [A.Multiply]: F(
    (n) => {
      let t = M | pt;
      for (let e = 0; e < n.length; e++)
        t &= n[e].type;
      return t;
    },
    z(2, 1 / 0),
    Z(M | pt),
    Ae
  ),
  [A.Coalesce]: F(
    (n) => {
      let t = gt;
      for (let e = 1; e < n.length; e += 2)
        t &= n[e].type;
      return t &= n[n.length - 1].type, t;
    },
    z(2, 1 / 0),
    Z(gt),
    Ae
  ),
  [A.Divide]: F(
    M,
    z(2, 2),
    Z(M)
  ),
  [A.Add]: F(
    M,
    z(2, 1 / 0),
    Z(M)
  ),
  [A.Subtract]: F(
    M,
    z(2, 2),
    Z(M)
  ),
  [A.Clamp]: F(
    M,
    z(3, 3),
    Z(M)
  ),
  [A.Mod]: F(
    M,
    z(2, 2),
    Z(M)
  ),
  [A.Pow]: F(
    M,
    z(2, 2),
    Z(M)
  ),
  [A.Abs]: F(
    M,
    z(1, 1),
    Z(M)
  ),
  [A.Floor]: F(
    M,
    z(1, 1),
    Z(M)
  ),
  [A.Ceil]: F(
    M,
    z(1, 1),
    Z(M)
  ),
  [A.Round]: F(
    M,
    z(1, 1),
    Z(M)
  ),
  [A.Sin]: F(
    M,
    z(1, 1),
    Z(M)
  ),
  [A.Cos]: F(
    M,
    z(1, 1),
    Z(M)
  ),
  [A.Atan]: F(
    M,
    z(1, 2),
    Z(M)
  ),
  [A.Sqrt]: F(
    M,
    z(1, 1),
    Z(M)
  ),
  [A.Match]: F(
    (n) => {
      let t = gt;
      for (let e = 2; e < n.length; e += 2)
        t &= n[e].type;
      return t &= n[n.length - 1].type, t;
    },
    z(4, 1 / 0),
    Oo,
    ru
  ),
  [A.Between]: F(
    at,
    z(3, 3),
    Z(M)
  ),
  [A.Interpolate]: F(
    (n) => {
      let t = pt | M;
      for (let e = 3; e < n.length; e += 2)
        t &= n[e].type;
      return t;
    },
    z(6, 1 / 0),
    Oo,
    ou
  ),
  [A.Case]: F(
    (n) => {
      let t = gt;
      for (let e = 1; e < n.length; e += 2)
        t &= n[e].type;
      return t &= n[n.length - 1].type, t;
    },
    z(3, 1 / 0),
    su,
    au
  ),
  [A.In]: F(at, z(2, 2), lu),
  [A.Number]: F(
    M,
    z(1, 1 / 0),
    Z(gt)
  ),
  [A.String]: F(
    Zt,
    z(1, 1 / 0),
    Z(gt)
  ),
  [A.Array]: F(
    (n) => n.length === 3 || n.length === 4 ? ye | pt : ye,
    z(1, 1 / 0),
    Z(M)
  ),
  [A.Color]: F(
    pt,
    z(1, 4),
    Z(M)
  ),
  [A.Band]: F(
    M,
    z(1, 3),
    Z(M)
  ),
  [A.Palette]: F(pt, z(2, 2), hu)
};
function tu(n, t) {
  const e = q(n[1], t);
  if (!(e instanceof be))
    throw new Error("Expected a literal argument for get operation");
  if (typeof e.value != "string")
    throw new Error("Expected a string argument for get operation");
  if (t.properties.add(e.value), n.length === 3) {
    const i = q(n[2], t);
    return [e, i];
  }
  return [e];
}
function eu(n, t, e, i) {
  const s = n[1];
  if (typeof s != "string")
    throw new Error("Expected a string argument for var operation");
  if (t.variables.add(s), !("variables" in t.style) || t.style.variables[s] === void 0)
    return [new be(gt, s)];
  const r = t.style.variables[s], o = (
    /** @type {LiteralExpression} */
    q(r, t)
  );
  if (o.value = s, i && !ie(i, o.type))
    throw new Error(
      `The variable ${s} has type ${yt(
        o.type
      )} but the following type was expected: ${yt(i)}`
    );
  return [o];
}
function iu(n, t) {
  t.featureId = !0;
}
function nu(n, t) {
  t.geometryType = !0;
}
function Ni(n, t) {
  const e = n[0];
  if (n.length !== 1)
    throw new Error(`Expected no arguments for ${e} operation`);
  return [];
}
function z(n, t) {
  return function(e, i) {
    const s = e[0], r = e.length - 1;
    if (n === t) {
      if (r !== n) {
        const o = n === 1 ? "" : "s";
        throw new Error(
          `Expected ${n} argument${o} for ${s}, got ${r}`
        );
      }
    } else if (r < n || r > t) {
      const o = t === 1 / 0 ? `${n} or more` : `${n} to ${t}`;
      throw new Error(
        `Expected ${o} arguments for ${s}, got ${r}`
      );
    }
  };
}
function Z(n) {
  return function(t, e) {
    const i = t[0], s = t.length - 1, r = new Array(s);
    for (let o = 0; o < s; ++o) {
      const a = q(t[o + 1], e);
      if (!ie(n, a.type)) {
        const l = yt(n), h = yt(a.type);
        throw new Error(
          `Unexpected type for argument ${o} of ${i} operation, got ${l} but expected ${h}`
        );
      }
      a.type &= n, r[o] = a;
    }
    return r;
  };
}
function Ae(n, t, e) {
  const i = n[0], s = n.length - 1;
  let r = gt;
  for (let a = 0; a < e.length; ++a)
    r &= e[a].type;
  if (r === Ti)
    throw new Error(
      `No common type could be found for arguments of ${i} operation`
    );
  const o = new Array(s);
  for (let a = 0; a < s; ++a)
    o[a] = q(n[a + 1], t, r);
  return o;
}
function su(n, t) {
  const e = n[0], i = n.length - 1;
  if (i % 2 === 0)
    throw new Error(
      `An odd amount of arguments was expected for operation ${e}, got ${JSON.stringify(
        i
      )} instead`
    );
}
function Oo(n, t) {
  const e = n[0], i = n.length - 1;
  if (i % 2 === 1)
    throw new Error(
      `An even amount of arguments was expected for operation ${e}, got ${JSON.stringify(
        i
      )} instead`
    );
}
function ru(n, t, e, i) {
  const s = n.length - 1;
  let o = q(n[1], t).type;
  const a = q(n[n.length - 1], t);
  let l = i !== void 0 ? i & a.type : a.type;
  const h = new Array(s - 2);
  for (let u = 0; u < s - 2; u += 2) {
    const d = q(n[u + 2], t), f = q(n[u + 3], t);
    o &= d.type, l &= f.type, h[u] = d, h[u + 1] = f;
  }
  const c = Zt | M | at;
  if (!ie(c, o))
    throw new Error(
      `Expected an input of type ${yt(
        c
      )} for the interpolate operation, got ${yt(o)} instead`
    );
  if (as(l, Ti))
    throw new Error(
      "Could not find a common output type for the following match operation: " + JSON.stringify(n)
    );
  for (let u = 0; u < s - 2; u += 2) {
    const d = q(n[u + 2], t, o), f = q(n[u + 3], t, l);
    h[u] = d, h[u + 1] = f;
  }
  return [
    q(n[1], t, o),
    ...h,
    q(n[n.length - 1], t, l)
  ];
}
function ou(n, t, e, i) {
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
  r = q(r, t);
  let o = q(n[2], t);
  if (!ie(M, o.type))
    throw new Error(
      `Expected an input of type number for the interpolate operation, got ${yt(o.type)} instead`
    );
  o = q(n[2], t, M);
  const a = new Array(n.length - 3);
  for (let l = 0; l < a.length; l += 2) {
    let h = q(n[l + 3], t);
    if (!ie(M, h.type))
      throw new Error(
        `Expected all stop input values in the interpolate operation to be of type number, got ${yt(h.type)} at position ${l + 2} instead`
      );
    let c = q(n[l + 4], t);
    if (!ie(M | pt, c.type))
      throw new Error(
        `Expected all stop output values in the interpolate operation to be a number or color, got ${yt(c.type)} at position ${l + 3} instead`
      );
    h = q(n[l + 3], t, M), c = q(n[l + 4], t, M | pt), a[l] = h, a[l + 1] = c;
  }
  return [r, o, ...a];
}
function au(n, t, e, i) {
  const s = q(n[n.length - 1], t);
  let r = i !== void 0 ? i & s.type : s.type;
  const o = new Array(n.length - 1);
  for (let a = 0; a < o.length - 1; a += 2) {
    const l = q(n[a + 1], t), h = q(n[a + 2], t);
    if (!ie(at, l.type))
      throw new Error(
        `Expected all conditions in the case operation to be of type boolean, got ${yt(l.type)} at position ${a} instead`
      );
    r &= h.type, o[a] = l, o[a + 1] = h;
  }
  if (as(r, Ti))
    throw new Error(
      "Could not find a common output type for the following case operation: " + JSON.stringify(n)
    );
  for (let a = 0; a < o.length - 1; a += 2)
    o[a + 1] = q(n[a + 2], t, r);
  return o[o.length - 1] = q(
    n[n.length - 1],
    t,
    r
  ), o;
}
function lu(n, t) {
  let e = (
    /** @type {any} */
    n[2]
  );
  if (!Array.isArray(e))
    throw new Error(
      'The "in" operator was provided a literal value which was not an array as second argument.'
    );
  if (typeof e[0] == "string") {
    if (e[0] !== "literal")
      throw new Error(
        'For the "in" operator, a string array should be wrapped in a "literal" operator to disambiguate from expressions.'
      );
    if (!Array.isArray(e[1]))
      throw new Error(
        'The "in" operator was provided a literal value which was not an array as second argument.'
      );
    e = e[1];
  }
  let i = Zt | M;
  const s = new Array(e.length);
  for (let o = 0; o < s.length; o++) {
    const a = q(e[o], t);
    i &= a.type, s[o] = a;
  }
  if (as(i, Ti))
    throw new Error(
      "Could not find a common type for the following in operation: " + JSON.stringify(n)
    );
  return [q(n[1], t, i), ...s];
}
function hu(n, t) {
  const e = q(n[1], t, M);
  if (e.type !== M)
    throw new Error(
      `The first argument of palette must be an number, got ${yt(
        e.type
      )} instead`
    );
  const i = n[2];
  if (!Array.isArray(i))
    throw new Error("The second argument of palette must be an array");
  const s = new Array(i.length);
  for (let r = 0; r < s.length; r++) {
    const o = q(i[r], t, pt);
    if (!(o instanceof be))
      throw new Error(
        `The palette color at index ${r} must be a literal value`
      );
    if (!ie(o.type, pt))
      throw new Error(
        `The palette color at index ${r} should be of type color, got ${yt(
          o.type
        )} instead`
      );
    s[r] = o;
  }
  return [e, ...s];
}
function F(n, ...t) {
  return function(e, i, s) {
    const r = e[0];
    let o = [];
    for (let l = 0; l < t.length; l++)
      o = t[l](e, i, o, s) || o;
    let a = typeof n == "function" ? n(o) : n;
    if (s !== void 0) {
      if (!ie(a, s))
        throw new Error(
          `The following expression was expected to return ${yt(
            s
          )}, but returns ${yt(a)} instead: ${JSON.stringify(
            e
          )}`
        );
      a &= s;
    }
    if (a === Ti)
      throw new Error(
        `No matching type was found for the following expression: ${JSON.stringify(
          e
        )}`
      );
    return new qc(a, r, ...o);
  };
}
function cu(n, t, e) {
  const i = n[0], s = $c[i];
  if (!s)
    throw new Error(`Unknown operator: ${i}`);
  return s(n, t, e);
}
function Xa(n) {
  if (!n)
    return "";
  const t = n.getType();
  switch (t) {
    case "Point":
    case "LineString":
    case "Polygon":
      return t;
    case "MultiPoint":
    case "MultiLineString":
    case "MultiPolygon":
      return (
        /** @type {'Point'|'LineString'|'Polygon'} */
        t.substring(5)
      );
    case "Circle":
      return "Polygon";
    case "GeometryCollection":
      return Xa(
        /** @type {import("../geom/GeometryCollection.js").default} */
        n.getGeometries()[0]
      );
    default:
      return "";
  }
}
function Ya() {
  return {
    variables: {},
    properties: {},
    resolution: NaN,
    featureId: null,
    geometryType: ""
  };
}
function xe(n, t, e) {
  const i = q(n, e);
  if (!ie(t, i.type)) {
    const s = yt(t), r = yt(i.type);
    throw new Error(
      `Expected expression to be of type ${s}, got ${r}`
    );
  }
  return ne(i);
}
function ne(n, t) {
  if (n instanceof be) {
    if (n.type === pt && typeof n.value == "string") {
      const i = Ir(n.value);
      return function() {
        return i;
      };
    }
    return function() {
      return n.value;
    };
  }
  const e = n.operator;
  switch (e) {
    case A.Number:
    case A.String:
    case A.Coalesce:
      return uu(n);
    case A.Get:
    case A.Var:
      return du(n);
    case A.Id:
      return (i) => i.featureId;
    case A.GeometryType:
      return (i) => i.geometryType;
    case A.Concat: {
      const i = n.args.map((s) => ne(s));
      return (s) => "".concat(...i.map((r) => r(s).toString()));
    }
    case A.Resolution:
      return (i) => i.resolution;
    case A.Any:
    case A.All:
    case A.Not:
      return gu(n);
    case A.Equal:
    case A.NotEqual:
    case A.LessThan:
    case A.LessThanOrEqualTo:
    case A.GreaterThan:
    case A.GreaterThanOrEqualTo:
      return fu(n);
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
      return mu(n);
    case A.Case:
      return _u(n);
    case A.Match:
      return pu(n);
    case A.Interpolate:
      return yu(n);
    default:
      throw new Error(`Unsupported operator ${e}`);
  }
}
function uu(n, t) {
  const e = n.operator, i = n.args.length, s = new Array(i);
  for (let r = 0; r < i; ++r)
    s[r] = ne(n.args[r]);
  switch (e) {
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
          if (typeof a === e)
            return a;
        }
        throw new Error(`Expected one of the values to be a ${e}`);
      };
    default:
      throw new Error(`Unsupported assertion operator ${e}`);
  }
}
function du(n, t) {
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
function fu(n, t) {
  const e = n.operator, i = ne(n.args[0]), s = ne(n.args[1]);
  switch (e) {
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
      throw new Error(`Unsupported comparison operator ${e}`);
  }
}
function gu(n, t) {
  const e = n.operator, i = n.args.length, s = new Array(i);
  for (let r = 0; r < i; ++r)
    s[r] = ne(n.args[r]);
  switch (e) {
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
      throw new Error(`Unsupported logical operator ${e}`);
  }
}
function mu(n, t) {
  const e = n.operator, i = n.args.length, s = new Array(i);
  for (let r = 0; r < i; ++r)
    s[r] = ne(n.args[r]);
  switch (e) {
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
      throw new Error(`Unsupported numeric operator ${e}`);
  }
}
function _u(n, t) {
  const e = n.args.length, i = new Array(e);
  for (let s = 0; s < e; ++s)
    i[s] = ne(n.args[s]);
  return (s) => {
    for (let r = 0; r < e - 1; r += 2)
      if (i[r](s))
        return i[r + 1](s);
    return i[e - 1](s);
  };
}
function pu(n, t) {
  const e = n.args.length, i = new Array(e);
  for (let s = 0; s < e; ++s)
    i[s] = ne(n.args[s]);
  return (s) => {
    const r = i[0](s);
    for (let o = 1; o < e; o += 2)
      if (r === i[o](s))
        return i[o + 1](s);
    return i[e - 1](s);
  };
}
function yu(n, t) {
  const e = n.args.length, i = new Array(e);
  for (let s = 0; s < e; ++s)
    i[s] = ne(n.args[s]);
  return (s) => {
    const r = i[0](s), o = i[1](s);
    let a, l;
    for (let h = 2; h < e; h += 2) {
      const c = i[h](s);
      let u = i[h + 1](s);
      const d = Array.isArray(u);
      if (d && (u = Uh(u)), c >= o)
        return h === 2 ? u : d ? Eu(
          r,
          o,
          a,
          l,
          c,
          u
        ) : Wi(
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
function Wi(n, t, e, i, s, r) {
  const o = s - e;
  if (o === 0)
    return i;
  const a = t - e, l = n === 1 ? a / o : (Math.pow(n, a) - 1) / (Math.pow(n, o) - 1);
  return i + l * (r - i);
}
function Eu(n, t, e, i, s, r) {
  if (s - e === 0)
    return i;
  const a = Eo(i), l = Eo(r);
  let h = l[2] - a[2];
  h > 180 ? h -= 360 : h < -180 && (h += 360);
  const c = [
    Wi(n, t, e, a[0], s, l[0]),
    Wi(n, t, e, a[1], s, l[1]),
    a[2] + Wi(n, t, e, 0, s, h),
    Wi(n, t, e, i[3], s, r[3])
  ];
  return Ia(Vh(c));
}
function xu(n) {
  return !0;
}
function Cu(n) {
  const t = za(), e = wu(n, t), i = Ya();
  return function(s, r) {
    if (i.properties = s.getPropertiesInternal(), i.resolution = r, t.featureId) {
      const o = s.getId();
      o !== void 0 ? i.featureId = o : i.featureId = null;
    }
    return t.geometryType && (i.geometryType = Xa(
      s.getGeometry()
    )), e(i);
  };
}
function ko(n) {
  const t = za(), e = n.length, i = new Array(e);
  for (let o = 0; o < e; ++o)
    i[o] = Hs(n[o], t);
  const s = Ya(), r = new Array(e);
  return function(o, a) {
    if (s.properties = o.getPropertiesInternal(), s.resolution = a, t.featureId) {
      const h = o.getId();
      h !== void 0 ? s.featureId = h : s.featureId = null;
    }
    let l = 0;
    for (let h = 0; h < e; ++h) {
      const c = i[h](s);
      c && (r[l] = c, l += 1);
    }
    return r.length = l, r;
  };
}
function wu(n, t) {
  const e = n.length, i = new Array(e);
  for (let s = 0; s < e; ++s) {
    const r = n[s], o = "filter" in r ? xe(r.filter, at, t) : xu;
    let a;
    if (Array.isArray(r.style)) {
      const l = r.style.length;
      a = new Array(l);
      for (let h = 0; h < l; ++h)
        a[h] = Hs(r.style[h], t);
    } else
      a = [Hs(r.style, t)];
    i[s] = { filter: o, styles: a };
  }
  return function(s) {
    const r = [];
    let o = !1;
    for (let a = 0; a < e; ++a) {
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
function Hs(n, t) {
  const e = en(n, "", t), i = nn(n, "", t), s = Au(n, t), r = Iu(n, t), o = Tt(n, "z-index", t);
  if (!e && !i && !s && !r && !xi(n))
    throw new Error(
      "No fill, stroke, point, or text symbolizer properties in style: " + JSON.stringify(n)
    );
  const a = new Gt();
  return function(l) {
    let h = !0;
    if (e) {
      const c = e(l);
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
function en(n, t, e) {
  let i;
  if (t + "fill-pattern-src" in n ? i = Su(n, t + "fill-", e) : i = br(
    n,
    t + "fill-color",
    e
  ), !i)
    return null;
  const s = new vi();
  return function(r) {
    const o = i(r);
    return o === "none" ? null : (s.setColor(o), s);
  };
}
function nn(n, t, e) {
  const i = Tt(
    n,
    t + "stroke-width",
    e
  ), s = br(
    n,
    t + "stroke-color",
    e
  );
  if (!i && !s)
    return null;
  const r = ge(
    n,
    t + "stroke-line-cap",
    e
  ), o = ge(
    n,
    t + "stroke-line-join",
    e
  ), a = Ka(
    n,
    t + "stroke-line-dash",
    e
  ), l = Tt(
    n,
    t + "stroke-line-dash-offset",
    e
  ), h = Tt(
    n,
    t + "stroke-miter-limit",
    e
  ), c = new Le();
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
function Au(n, t) {
  const e = "text-", i = ge(n, e + "value", t);
  if (!i)
    return null;
  const s = en(n, e, t), r = en(
    n,
    e + "background-",
    t
  ), o = nn(n, e, t), a = nn(
    n,
    e + "background-",
    t
  ), l = ge(n, e + "font", t), h = Tt(
    n,
    e + "max-angle",
    t
  ), c = Tt(
    n,
    e + "offset-x",
    t
  ), u = Tt(
    n,
    e + "offset-y",
    t
  ), d = sn(
    n,
    e + "overflow",
    t
  ), f = ge(
    n,
    e + "placement",
    t
  ), g = Tt(n, e + "repeat", t), m = ls(n, e + "scale", t), _ = sn(
    n,
    e + "rotate-with-view",
    t
  ), p = Tt(
    n,
    e + "rotation",
    t
  ), y = ge(n, e + "align", t), C = ge(
    n,
    e + "justify",
    t
  ), E = ge(
    n,
    e + "baseline",
    t
  ), x = Ka(
    n,
    e + "padding",
    t
  ), v = hs(
    n,
    e + "declutter-mode"
  ), T = new Lr({ declutterMode: v });
  return function(I) {
    if (T.setText(i(I)), s && T.setFill(s(I)), r && T.setBackgroundFill(r(I)), o && T.setStroke(o(I)), a && T.setBackgroundStroke(a(I)), l && T.setFont(l(I)), h && T.setMaxAngle(h(I)), c && T.setOffsetX(c(I)), u && T.setOffsetY(u(I)), d && T.setOverflow(d(I)), f) {
      const w = f(I);
      if (w !== "point" && w !== "line")
        throw new Error("Expected point or line for text-placement");
      T.setPlacement(w);
    }
    if (g && T.setRepeat(g(I)), m && T.setScale(m(I)), _ && T.setRotateWithView(_(I)), p && T.setRotation(p(I)), y) {
      const w = y(I);
      if (w !== "left" && w !== "center" && w !== "right" && w !== "end" && w !== "start")
        throw new Error(
          "Expected left, right, center, start, or end for text-align"
        );
      T.setTextAlign(w);
    }
    if (C) {
      const w = C(I);
      if (w !== "left" && w !== "right" && w !== "center")
        throw new Error("Expected left, right, or center for text-justify");
      T.setJustify(w);
    }
    if (E) {
      const w = E(I);
      if (w !== "bottom" && w !== "top" && w !== "middle" && w !== "alphabetic" && w !== "hanging")
        throw new Error(
          "Expected bottom, top, middle, alphabetic, or hanging for text-baseline"
        );
      T.setTextBaseline(w);
    }
    return x && T.setPadding(x(I)), T;
  };
}
function Iu(n, t) {
  return "icon-src" in n ? vu(n, t) : "shape-points" in n ? Ru(n, t) : "circle-radius" in n ? Tu(n, t) : null;
}
function vu(n, t) {
  const e = "icon-", i = e + "src", s = Ua(n[i], i), r = Bn(
    n,
    e + "anchor",
    t
  ), o = ls(n, e + "scale", t), a = Tt(
    n,
    e + "opacity",
    t
  ), l = Bn(
    n,
    e + "displacement",
    t
  ), h = Tt(
    n,
    e + "rotation",
    t
  ), c = sn(
    n,
    e + "rotate-with-view",
    t
  ), u = No(n, e + "anchor-origin"), d = Go(
    n,
    e + "anchor-x-units"
  ), f = Go(
    n,
    e + "anchor-y-units"
  ), g = Du(n, e + "color"), m = Lu(n, e + "cross-origin"), _ = bu(n, e + "offset"), p = No(n, e + "offset-origin"), y = Wn(n, e + "width"), C = Wn(n, e + "height"), E = Mu(n, e + "size"), x = hs(
    n,
    e + "declutter-mode"
  ), v = new cn({
    src: s,
    anchorOrigin: u,
    anchorXUnits: d,
    anchorYUnits: f,
    color: g,
    crossOrigin: m,
    offset: _,
    offsetOrigin: p,
    height: C,
    width: y,
    size: E,
    declutterMode: x
  });
  return function(T) {
    return a && v.setOpacity(a(T)), l && v.setDisplacement(l(T)), h && v.setRotation(h(T)), c && v.setRotateWithView(c(T)), o && v.setScale(o(T)), r && v.setAnchor(r(T)), v;
  };
}
function Ru(n, t) {
  const e = "shape-", i = e + "points", s = e + "radius", r = js(n[i], i), o = js(n[s], s), a = en(n, e, t), l = nn(n, e, t), h = ls(n, e + "scale", t), c = Bn(
    n,
    e + "displacement",
    t
  ), u = Tt(
    n,
    e + "rotation",
    t
  ), d = sn(
    n,
    e + "rotate-with-view",
    t
  ), f = Wn(n, e + "radius2"), g = Wn(n, e + "angle"), m = hs(
    n,
    e + "declutter-mode"
  ), _ = new os({
    points: r,
    radius: o,
    radius2: f,
    angle: g,
    declutterMode: m
  });
  return function(p) {
    return a && _.setFill(a(p)), l && _.setStroke(l(p)), c && _.setDisplacement(c(p)), u && _.setRotation(u(p)), d && _.setRotateWithView(d(p)), h && _.setScale(h(p)), _;
  };
}
function Tu(n, t) {
  const e = "circle-", i = en(n, e, t), s = nn(n, e, t), r = Tt(n, e + "radius", t), o = ls(n, e + "scale", t), a = Bn(
    n,
    e + "displacement",
    t
  ), l = Tt(
    n,
    e + "rotation",
    t
  ), h = sn(
    n,
    e + "rotate-with-view",
    t
  ), c = hs(
    n,
    e + "declutter-mode"
  ), u = new hn({
    radius: 5,
    // this is arbitrary, but required - the evaluated radius is used below
    declutterMode: c
  });
  return function(d) {
    return r && u.setRadius(r(d)), i && u.setFill(i(d)), s && u.setStroke(s(d)), a && u.setDisplacement(a(d)), l && u.setRotation(l(d)), h && u.setRotateWithView(h(d)), o && u.setScale(o(d)), u;
  };
}
function Tt(n, t, e) {
  if (!(t in n))
    return;
  const i = xe(n[t], M, e);
  return function(s) {
    return js(i(s), t);
  };
}
function ge(n, t, e) {
  if (!(t in n))
    return null;
  const i = xe(n[t], Zt, e);
  return function(s) {
    return Ua(i(s), t);
  };
}
function Su(n, t, e) {
  const i = ge(
    n,
    t + "pattern-src",
    e
  ), s = Fo(
    n,
    t + "pattern-offset",
    e
  ), r = Fo(
    n,
    t + "pattern-size",
    e
  ), o = br(
    n,
    t + "color",
    e
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
function sn(n, t, e) {
  if (!(t in n))
    return null;
  const i = xe(n[t], at, e);
  return function(s) {
    const r = i(s);
    if (typeof r != "boolean")
      throw new Error(`Expected a boolean for ${t}`);
    return r;
  };
}
function br(n, t, e) {
  if (!(t in n))
    return null;
  const i = xe(
    n[t],
    pt | Zt,
    e
  );
  return function(s) {
    return Va(i(s), t);
  };
}
function Ka(n, t, e) {
  if (!(t in n))
    return null;
  const i = xe(n[t], ye, e);
  return function(s) {
    return un(i(s), t);
  };
}
function Bn(n, t, e) {
  if (!(t in n))
    return null;
  const i = xe(n[t], ye, e);
  return function(s) {
    const r = un(i(s), t);
    if (r.length !== 2)
      throw new Error(`Expected two numbers for ${t}`);
    return r;
  };
}
function Fo(n, t, e) {
  if (!(t in n))
    return null;
  const i = xe(n[t], ye, e);
  return function(s) {
    return Za(i(s), t);
  };
}
function ls(n, t, e) {
  if (!(t in n))
    return null;
  const i = xe(
    n[t],
    ye | M,
    e
  );
  return function(s) {
    return Pu(i(s), t);
  };
}
function Wn(n, t) {
  const e = n[t];
  if (e !== void 0) {
    if (typeof e != "number")
      throw new Error(`Expected a number for ${t}`);
    return e;
  }
}
function Mu(n, t) {
  const e = n[t];
  if (e !== void 0) {
    if (typeof e == "number")
      return Dt(e);
    if (!Array.isArray(e))
      throw new Error(`Expected a number or size array for ${t}`);
    if (e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number")
      throw new Error(`Expected a number or size array for ${t}`);
    return e;
  }
}
function Lu(n, t) {
  const e = n[t];
  if (e !== void 0) {
    if (typeof e != "string")
      throw new Error(`Expected a string for ${t}`);
    return e;
  }
}
function No(n, t) {
  const e = n[t];
  if (e !== void 0) {
    if (e !== "bottom-left" && e !== "bottom-right" && e !== "top-left" && e !== "top-right")
      throw new Error(
        `Expected bottom-left, bottom-right, top-left, or top-right for ${t}`
      );
    return e;
  }
}
function Go(n, t) {
  const e = n[t];
  if (e !== void 0) {
    if (e !== "pixels" && e !== "fraction")
      throw new Error(`Expected pixels or fraction for ${t}`);
    return e;
  }
}
function bu(n, t) {
  const e = n[t];
  if (e !== void 0)
    return un(e, t);
}
function hs(n, t) {
  const e = n[t];
  if (e !== void 0) {
    if (typeof e != "string")
      throw new Error(`Expected a string for ${t}`);
    if (e !== "declutter" && e !== "obstacle" && e !== "none")
      throw new Error(`Expected declutter, obstacle, or none for ${t}`);
    return e;
  }
}
function Du(n, t) {
  const e = n[t];
  if (e !== void 0)
    return Va(e, t);
}
function un(n, t) {
  if (!Array.isArray(n))
    throw new Error(`Expected an array for ${t}`);
  const e = n.length;
  for (let i = 0; i < e; ++i)
    if (typeof n[i] != "number")
      throw new Error(`Expected an array of numbers for ${t}`);
  return n;
}
function Ua(n, t) {
  if (typeof n != "string")
    throw new Error(`Expected a string for ${t}`);
  return n;
}
function js(n, t) {
  if (typeof n != "number")
    throw new Error(`Expected a number for ${t}`);
  return n;
}
function Va(n, t) {
  if (typeof n == "string")
    return n;
  const e = un(n, t), i = e.length;
  if (i < 3 || i > 4)
    throw new Error(`Expected a color with 3 or 4 values for ${t}`);
  return e;
}
function Za(n, t) {
  const e = un(n, t);
  if (e.length !== 2)
    throw new Error(`Expected an array of two numbers for ${t}`);
  return e;
}
function Pu(n, t) {
  return typeof n == "number" ? n : Za(n, t);
}
const Bo = {
  RENDER_ORDER: "renderOrder"
};
class Ha extends es {
  /**
   * @param {Options<VectorSourceType>} [options] Options.
   */
  constructor(t) {
    t = t || {};
    const e = Object.assign({}, t);
    delete e.style, delete e.renderBuffer, delete e.updateWhileAnimating, delete e.updateWhileInteracting, super(e), this.declutter_ = t.declutter ? String(t.declutter) : void 0, this.renderBuffer_ = t.renderBuffer !== void 0 ? t.renderBuffer : 100, this.style_ = null, this.styleFunction_ = void 0, this.setStyle(t.style), this.updateWhileAnimating_ = t.updateWhileAnimating !== void 0 ? t.updateWhileAnimating : !1, this.updateWhileInteracting_ = t.updateWhileInteracting !== void 0 ? t.updateWhileInteracting : !1;
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
  getFeatures(t) {
    return super.getFeatures(t);
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
      this.get(Bo.RENDER_ORDER)
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
  renderDeclutter(t, e) {
    const i = this.getDeclutter();
    i in t.declutter || (t.declutter[i] = new Fa(9)), this.getRenderer().renderDeclutter(t, e);
  }
  /**
   * @param {import("../render.js").OrderFunction|null|undefined} renderOrder
   *     Render order.
   */
  setRenderOrder(t) {
    this.set(Bo.RENDER_ORDER, t);
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
  setStyle(t) {
    this.style_ = Ou(t), this.styleFunction_ = t === null ? void 0 : Vc(this.style_), this.changed();
  }
}
function Ou(n) {
  if (n === void 0)
    return Zc;
  if (!n)
    return null;
  if (typeof n == "function" || n instanceof Gt)
    return n;
  if (!Array.isArray(n))
    return ko([n]);
  if (n.length === 0)
    return [];
  const t = n.length, e = n[0];
  if (e instanceof Gt) {
    const s = new Array(t);
    for (let r = 0; r < t; ++r) {
      const o = n[r];
      if (!(o instanceof Gt))
        throw new Error("Expected a list of style instances");
      s[r] = o;
    }
    return s;
  }
  if ("style" in e) {
    const s = new Array(t);
    for (let r = 0; r < t; ++r) {
      const o = n[r];
      if (!("style" in o))
        throw new Error("Expected a list of rules with a style property");
      s[r] = o;
    }
    return Cu(s);
  }
  return ko(
    /** @type {Array<import("../style/flat.js").FlatStyle>} */
    n
  );
}
class ku extends tr {
  /**
   * @param {import("../Map.js").default} map Map.
   */
  constructor(t) {
    super(), this.map_ = t;
  }
  /**
   * @abstract
   * @param {import("../render/EventType.js").default} type Event type.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   */
  dispatchRenderEvent(t, e) {
    H();
  }
  /**
   * @param {import("../Map.js").FrameState} frameState FrameState.
   * @protected
   */
  calculateMatrices2D(t) {
    const e = t.viewState, i = t.coordinateToPixelTransform, s = t.pixelToCoordinateTransform;
    pe(
      i,
      t.size[0] / 2,
      t.size[1] / 2,
      1 / e.resolution,
      -1 / e.resolution,
      -e.rotation,
      -e.center[0],
      -e.center[1]
    ), mr(s, i);
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
  forEachFeatureAtCoordinate(t, e, i, s, r, o, a, l) {
    let h;
    const c = e.viewState;
    function u(E, x, v, T) {
      return r.call(o, x, E ? v : null, T);
    }
    const d = c.projection, f = ra(t.slice(), d), g = [[0, 0]];
    if (d.canWrapX() && s) {
      const E = d.getExtent(), x = tt(E);
      g.push([-x, 0], [x, 0]);
    }
    const m = e.layerStatesArray, _ = m.length, p = (
      /** @type {Array<HitMatch<T>>} */
      []
    ), y = [];
    for (let E = 0; E < g.length; E++)
      for (let x = _ - 1; x >= 0; --x) {
        const v = m[x], T = v.layer;
        if (T.hasRenderer() && wr(v, c) && a.call(l, T)) {
          const I = T.getRenderer(), w = T.getSource();
          if (I && w) {
            const D = w.getWrapX() ? f : t, P = u.bind(
              null,
              v.managed
            );
            y[0] = D[0] + g[E][0], y[1] = D[1] + g[E][1], h = I.forEachFeatureAtCoordinate(
              y,
              e,
              i,
              P,
              p
            );
          }
          if (h)
            return h;
        }
      }
    if (p.length === 0)
      return;
    const C = 1 / p.length;
    return p.forEach((E, x) => E.distanceSq += x * C), p.sort((E, x) => E.distanceSq - x.distanceSq), p.some((E) => h = E.callback(E.feature, E.layer, E.geometry)), h;
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
  hasFeatureAtCoordinate(t, e, i, s, r, o) {
    return this.forEachFeatureAtCoordinate(
      t,
      e,
      i,
      s,
      Ki,
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
  renderFrame(t) {
    H();
  }
  /**
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @protected
   */
  scheduleExpireIconCache(t) {
    te.canExpireCache() && t.postRenderFunctions.push(Fu);
  }
}
function Fu(n, t) {
  te.expire();
}
class Nu extends ku {
  /**
   * @param {import("../Map.js").default} map Map.
   */
  constructor(t) {
    super(t), this.fontChangeListenerKey_ = j(
      fe,
      yi.PROPERTYCHANGE,
      t.redrawText.bind(t)
    ), this.element_ = document.createElement("div");
    const e = this.element_.style;
    e.position = "absolute", e.width = "100%", e.height = "100%", e.zIndex = "0", this.element_.className = rs + " ol-layers";
    const i = t.getViewport();
    i.insertBefore(this.element_, i.firstChild || null), this.children_ = [], this.renderedVisible_ = !0;
  }
  /**
   * @param {import("../render/EventType.js").default} type Event type.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   */
  dispatchRenderEvent(t, e) {
    const i = this.getMap();
    if (i.hasListener(t)) {
      const s = new _a(t, void 0, e);
      i.dispatchEvent(s);
    }
  }
  disposeInternal() {
    it(this.fontChangeListenerKey_), this.element_.parentNode.removeChild(this.element_), super.disposeInternal();
  }
  /**
   * Render.
   * @param {?import("../Map.js").FrameState} frameState Frame state.
   */
  renderFrame(t) {
    if (!t) {
      this.renderedVisible_ && (this.element_.style.display = "none", this.renderedVisible_ = !1);
      return;
    }
    this.calculateMatrices2D(t), this.dispatchRenderEvent(Bt.PRECOMPOSE, t);
    const e = t.layerStatesArray.sort(function(a, l) {
      return a.zIndex - l.zIndex;
    });
    e.some(
      (a) => a.layer instanceof Ha && a.layer.getDeclutter()
    ) && (t.declutter = {});
    const s = t.viewState;
    this.children_.length = 0;
    const r = [];
    let o = null;
    for (let a = 0, l = e.length; a < l; ++a) {
      const h = e[a];
      t.layerIndex = a;
      const c = h.layer, u = c.getSourceState();
      if (!wr(h, s) || u != "ready" && u != "undefined") {
        c.unrender();
        continue;
      }
      const d = c.render(t, o);
      d && (d !== o && (this.children_.push(d), o = d), r.push(h));
    }
    this.declutter(t, r), Gh(this.element_, this.children_), this.dispatchRenderEvent(Bt.POSTCOMPOSE, t), this.renderedVisible_ || (this.element_.style.display = "", this.renderedVisible_ = !0), this.scheduleExpireIconCache(t);
  }
  /**
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @param {Array<import('../layer/Layer.js').State>} layerStates Layers.
   */
  declutter(t, e) {
    for (let i = e.length - 1; i >= 0; --i) {
      const s = e[i], r = s.layer;
      r.getDeclutter() && r.renderDeclutter(t, s);
    }
    e.forEach(
      (i) => i.layer.renderDeferred(t)
    );
  }
}
class Me extends Ee {
  /**
   * @param {EventType} type The event type.
   * @param {BaseLayer} layer The layer.
   */
  constructor(t, e) {
    super(t), this.layer = e;
  }
}
const bs = {
  LAYERS: "layers"
};
class Si extends qo {
  /**
   * @param {Options} [options] Layer options.
   */
  constructor(t) {
    t = t || {};
    const e = (
      /** @type {Options} */
      Object.assign({}, t)
    );
    delete e.layers;
    let i = t.layers;
    super(e), this.on, this.once, this.un, this.layersListenerKeys_ = [], this.listenerKeys_ = {}, this.addChangeListener(bs.LAYERS, this.handleLayersChanged_), i ? Array.isArray(i) ? i = new $t(i.slice(), { unique: !0 }) : U(
      typeof /** @type {?} */
      i.getArray == "function",
      "Expected `layers` to be an array or a `Collection`"
    ) : i = new $t(void 0, { unique: !0 }), this.setLayers(i);
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
    this.layersListenerKeys_.forEach(it), this.layersListenerKeys_.length = 0;
    const t = this.getLayers();
    this.layersListenerKeys_.push(
      j(t, It.ADD, this.handleLayersAdd_, this),
      j(
        t,
        It.REMOVE,
        this.handleLayersRemove_,
        this
      )
    );
    for (const i in this.listenerKeys_)
      this.listenerKeys_[i].forEach(it);
    on(this.listenerKeys_);
    const e = t.getArray();
    for (let i = 0, s = e.length; i < s; i++) {
      const r = e[i];
      this.registerLayerListeners_(r), this.dispatchEvent(new Me("addlayer", r));
    }
    this.changed();
  }
  /**
   * @param {BaseLayer} layer The layer.
   */
  registerLayerListeners_(t) {
    const e = [
      j(
        t,
        yi.PROPERTYCHANGE,
        this.handleLayerChange_,
        this
      ),
      j(t, N.CHANGE, this.handleLayerChange_, this)
    ];
    t instanceof Si && e.push(
      j(t, "addlayer", this.handleLayerGroupAdd_, this),
      j(t, "removelayer", this.handleLayerGroupRemove_, this)
    ), this.listenerKeys_[Q(t)] = e;
  }
  /**
   * @param {GroupEvent} event The layer group event.
   */
  handleLayerGroupAdd_(t) {
    this.dispatchEvent(new Me("addlayer", t.layer));
  }
  /**
   * @param {GroupEvent} event The layer group event.
   */
  handleLayerGroupRemove_(t) {
    this.dispatchEvent(new Me("removelayer", t.layer));
  }
  /**
   * @param {import("../Collection.js").CollectionEvent<import("./Base.js").default>} collectionEvent CollectionEvent.
   * @private
   */
  handleLayersAdd_(t) {
    const e = t.element;
    this.registerLayerListeners_(e), this.dispatchEvent(new Me("addlayer", e)), this.changed();
  }
  /**
   * @param {import("../Collection.js").CollectionEvent<import("./Base.js").default>} collectionEvent CollectionEvent.
   * @private
   */
  handleLayersRemove_(t) {
    const e = t.element, i = Q(e);
    this.listenerKeys_[i].forEach(it), delete this.listenerKeys_[i], this.dispatchEvent(new Me("removelayer", e)), this.changed();
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
      this.get(bs.LAYERS)
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
  setLayers(t) {
    const e = this.getLayers();
    if (e) {
      const i = e.getArray();
      for (let s = 0, r = i.length; s < r; ++s)
        this.dispatchEvent(new Me("removelayer", i[s]));
    }
    this.set(bs.LAYERS, t);
  }
  /**
   * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be modified in place).
   * @return {Array<import("./Layer.js").default>} Array of layers.
   */
  getLayersArray(t) {
    return t = t !== void 0 ? t : [], this.getLayers().forEach(function(e) {
      e.getLayersArray(t);
    }), t;
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
  getLayerStatesArray(t) {
    const e = t !== void 0 ? t : [], i = e.length;
    this.getLayers().forEach(function(o) {
      o.getLayerStatesArray(e);
    });
    const s = this.getLayerState();
    let r = s.zIndex;
    !t && s.zIndex === void 0 && (r = 0);
    for (let o = i, a = e.length; o < a; o++) {
      const l = e[o];
      l.opacity *= s.opacity, l.visible = l.visible && s.visible, l.maxResolution = Math.min(
        l.maxResolution,
        s.maxResolution
      ), l.minResolution = Math.max(
        l.minResolution,
        s.minResolution
      ), l.minZoom = Math.max(l.minZoom, s.minZoom), l.maxZoom = Math.min(l.maxZoom, s.maxZoom), s.extent !== void 0 && (l.extent !== void 0 ? l.extent = Xi(
        l.extent,
        s.extent
      ) : l.extent = s.extent), l.zIndex === void 0 && (l.zIndex = r);
    }
    return e;
  }
  /**
   * @return {import("../source/Source.js").State} Source state.
   */
  getSourceState() {
    return "ready";
  }
}
class ci extends Ee {
  /**
   * @param {string} type Event type.
   * @param {import("./Map.js").default} map Map.
   * @param {?import("./Map.js").FrameState} [frameState] Frame state.
   */
  constructor(t, e, i) {
    super(t), this.map = e, this.frameState = i !== void 0 ? i : null;
  }
}
class Te extends ci {
  /**
   * @param {string} type Event type.
   * @param {import("./Map.js").default} map Map.
   * @param {EVENT} originalEvent Original event.
   * @param {boolean} [dragging] Is the map currently being dragged?
   * @param {import("./Map.js").FrameState} [frameState] Frame state.
   * @param {Array<PointerEvent>} [activePointers] Active pointers.
   */
  constructor(t, e, i, s, r, o) {
    super(t, e, r), this.originalEvent = i, this.pixel_ = null, this.coordinate_ = null, this.dragging = s !== void 0 ? s : !1, this.activePointers = o;
  }
  /**
   * The map pixel relative to the viewport corresponding to the original event.
   * @type {import("./pixel.js").Pixel}
   * @api
   */
  get pixel() {
    return this.pixel_ || (this.pixel_ = this.map.getEventPixel(this.originalEvent)), this.pixel_;
  }
  set pixel(t) {
    this.pixel_ = t;
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
  set coordinate(t) {
    this.coordinate_ = t;
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
const rt = {
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
  CLICK: N.CLICK,
  /**
   * A true double click, with no dragging.
   * @event module:ol/MapBrowserEvent~MapBrowserEvent#dblclick
   * @api
   */
  DBLCLICK: N.DBLCLICK,
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
}, Qs = {
  POINTERMOVE: "pointermove",
  POINTERDOWN: "pointerdown",
  POINTERUP: "pointerup",
  POINTEROVER: "pointerover",
  POINTEROUT: "pointerout",
  POINTERENTER: "pointerenter",
  POINTERLEAVE: "pointerleave",
  POINTERCANCEL: "pointercancel"
};
class Gu extends Un {
  /**
   * @param {import("./Map.js").default} map The map with the viewport to listen to events on.
   * @param {number} [moveTolerance] The minimal distance the pointer must travel to trigger a move.
   */
  constructor(t, e) {
    super(t), this.map_ = t, this.clickTimeoutId_, this.emulateClicks_ = !1, this.dragging_ = !1, this.dragListenerKeys_ = [], this.moveTolerance_ = e === void 0 ? 1 : e, this.down_ = null;
    const i = this.map_.getViewport();
    this.activePointers_ = [], this.trackedTouches_ = {}, this.element_ = i, this.pointerdownListenerKey_ = j(
      i,
      Qs.POINTERDOWN,
      this.handlePointerDown_,
      this
    ), this.originalPointerMoveEvent_, this.relayedListenerKey_ = j(
      i,
      Qs.POINTERMOVE,
      this.relayMoveEvent_,
      this
    ), this.boundHandleTouchMove_ = this.handleTouchMove_.bind(this), this.element_.addEventListener(
      N.TOUCHMOVE,
      this.boundHandleTouchMove_,
      Ca ? { passive: !1 } : !1
    );
  }
  /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */
  emulateClick_(t) {
    let e = new Te(
      rt.CLICK,
      this.map_,
      t
    );
    this.dispatchEvent(e), this.clickTimeoutId_ !== void 0 ? (clearTimeout(this.clickTimeoutId_), this.clickTimeoutId_ = void 0, e = new Te(
      rt.DBLCLICK,
      this.map_,
      t
    ), this.dispatchEvent(e)) : this.clickTimeoutId_ = setTimeout(() => {
      this.clickTimeoutId_ = void 0;
      const i = new Te(
        rt.SINGLECLICK,
        this.map_,
        t
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
  updateActivePointers_(t) {
    const e = t, i = e.pointerId;
    if (e.type == rt.POINTERUP || e.type == rt.POINTERCANCEL) {
      delete this.trackedTouches_[i];
      for (const s in this.trackedTouches_)
        if (this.trackedTouches_[s].target !== e.target) {
          delete this.trackedTouches_[s];
          break;
        }
    } else
      (e.type == rt.POINTERDOWN || e.type == rt.POINTERMOVE) && (this.trackedTouches_[i] = e);
    this.activePointers_ = Object.values(this.trackedTouches_);
  }
  /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */
  handlePointerUp_(t) {
    this.updateActivePointers_(t);
    const e = new Te(
      rt.POINTERUP,
      this.map_,
      t,
      void 0,
      void 0,
      this.activePointers_
    );
    this.dispatchEvent(e), this.emulateClicks_ && !e.defaultPrevented && !this.dragging_ && this.isMouseActionButton_(t) && this.emulateClick_(this.down_), this.activePointers_.length === 0 && (this.dragListenerKeys_.forEach(it), this.dragListenerKeys_.length = 0, this.dragging_ = !1, this.down_ = null);
  }
  /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @return {boolean} If the left mouse button was pressed.
   * @private
   */
  isMouseActionButton_(t) {
    return t.button === 0;
  }
  /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */
  handlePointerDown_(t) {
    this.emulateClicks_ = this.activePointers_.length === 0, this.updateActivePointers_(t);
    const e = new Te(
      rt.POINTERDOWN,
      this.map_,
      t,
      void 0,
      void 0,
      this.activePointers_
    );
    if (this.dispatchEvent(e), this.down_ = new PointerEvent(t.type, t), Object.defineProperty(this.down_, "target", {
      writable: !1,
      value: t.target
    }), this.dragListenerKeys_.length === 0) {
      const i = this.map_.getOwnerDocument();
      this.dragListenerKeys_.push(
        j(
          i,
          rt.POINTERMOVE,
          this.handlePointerMove_,
          this
        ),
        j(i, rt.POINTERUP, this.handlePointerUp_, this),
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
        j(
          this.element_,
          rt.POINTERCANCEL,
          this.handlePointerUp_,
          this
        )
      ), this.element_.getRootNode && this.element_.getRootNode() !== i && this.dragListenerKeys_.push(
        j(
          this.element_.getRootNode(),
          rt.POINTERUP,
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
  handlePointerMove_(t) {
    if (this.isMoving_(t)) {
      this.updateActivePointers_(t), this.dragging_ = !0;
      const e = new Te(
        rt.POINTERDRAG,
        this.map_,
        t,
        this.dragging_,
        void 0,
        this.activePointers_
      );
      this.dispatchEvent(e);
    }
  }
  /**
   * Wrap and relay a pointermove event.
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */
  relayMoveEvent_(t) {
    this.originalPointerMoveEvent_ = t;
    const e = !!(this.down_ && this.isMoving_(t));
    this.dispatchEvent(
      new Te(
        rt.POINTERMOVE,
        this.map_,
        t,
        e
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
  handleTouchMove_(t) {
    const e = this.originalPointerMoveEvent_;
    (!e || e.defaultPrevented) && (typeof t.cancelable != "boolean" || t.cancelable === !0) && t.preventDefault();
  }
  /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @return {boolean} Is moving.
   * @private
   */
  isMoving_(t) {
    return this.dragging_ || Math.abs(t.clientX - this.down_.clientX) > this.moveTolerance_ || Math.abs(t.clientY - this.down_.clientY) > this.moveTolerance_;
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    this.relayedListenerKey_ && (it(this.relayedListenerKey_), this.relayedListenerKey_ = null), this.element_.removeEventListener(
      N.TOUCHMOVE,
      this.boundHandleTouchMove_
    ), this.pointerdownListenerKey_ && (it(this.pointerdownListenerKey_), this.pointerdownListenerKey_ = null), this.dragListenerKeys_.forEach(it), this.dragListenerKeys_.length = 0, this.element_ = null, super.disposeInternal();
  }
}
const Se = {
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
}, mt = {
  LAYERGROUP: "layergroup",
  SIZE: "size",
  TARGET: "target",
  VIEW: "view"
}, zn = 1 / 0;
class Bu {
  /**
   * @param {function(T): number} priorityFunction Priority function.
   * @param {function(T): string} keyFunction Key function.
   */
  constructor(t, e) {
    this.priorityFunction_ = t, this.keyFunction_ = e, this.elements_ = [], this.priorities_ = [], this.queuedElements_ = {};
  }
  /**
   * FIXME empty description for jsdoc
   */
  clear() {
    this.elements_.length = 0, this.priorities_.length = 0, on(this.queuedElements_);
  }
  /**
   * Remove and return the highest-priority element. O(log N).
   * @return {T} Element.
   */
  dequeue() {
    const t = this.elements_, e = this.priorities_, i = t[0];
    t.length == 1 ? (t.length = 0, e.length = 0) : (t[0] = /** @type {T} */
    t.pop(), e[0] = /** @type {number} */
    e.pop(), this.siftUp_(0));
    const s = this.keyFunction_(i);
    return delete this.queuedElements_[s], i;
  }
  /**
   * Enqueue an element. O(log N).
   * @param {T} element Element.
   * @return {boolean} The element was added to the queue.
   */
  enqueue(t) {
    U(
      !(this.keyFunction_(t) in this.queuedElements_),
      "Tried to enqueue an `element` that was already added to the queue"
    );
    const e = this.priorityFunction_(t);
    return e != zn ? (this.elements_.push(t), this.priorities_.push(e), this.queuedElements_[this.keyFunction_(t)] = !0, this.siftDown_(0, this.elements_.length - 1), !0) : !1;
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
  getLeftChildIndex_(t) {
    return t * 2 + 1;
  }
  /**
   * Gets the index of the right child of the node at the given index.
   * @param {number} index The index of the node to get the right child for.
   * @return {number} The index of the right child.
   * @private
   */
  getRightChildIndex_(t) {
    return t * 2 + 2;
  }
  /**
   * Gets the index of the parent of the node at the given index.
   * @param {number} index The index of the node to get the parent for.
   * @return {number} The index of the parent.
   * @private
   */
  getParentIndex_(t) {
    return t - 1 >> 1;
  }
  /**
   * Make this a heap. O(N).
   * @private
   */
  heapify_() {
    let t;
    for (t = (this.elements_.length >> 1) - 1; t >= 0; t--)
      this.siftUp_(t);
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
  isKeyQueued(t) {
    return t in this.queuedElements_;
  }
  /**
   * @param {T} element Element.
   * @return {boolean} Is queued.
   */
  isQueued(t) {
    return this.isKeyQueued(this.keyFunction_(t));
  }
  /**
   * @param {number} index The index of the node to move down.
   * @private
   */
  siftUp_(t) {
    const e = this.elements_, i = this.priorities_, s = e.length, r = e[t], o = i[t], a = t;
    for (; t < s >> 1; ) {
      const l = this.getLeftChildIndex_(t), h = this.getRightChildIndex_(t), c = h < s && i[h] < i[l] ? h : l;
      e[t] = e[c], i[t] = i[c], t = c;
    }
    e[t] = r, i[t] = o, this.siftDown_(a, t);
  }
  /**
   * @param {number} startIndex The index of the root.
   * @param {number} index The index of the node to move up.
   * @private
   */
  siftDown_(t, e) {
    const i = this.elements_, s = this.priorities_, r = i[e], o = s[e];
    for (; e > t; ) {
      const a = this.getParentIndex_(e);
      if (s[a] > o)
        i[e] = i[a], s[e] = s[a], e = a;
      else
        break;
    }
    i[e] = r, s[e] = o;
  }
  /**
   * FIXME empty description for jsdoc
   */
  reprioritize() {
    const t = this.priorityFunction_, e = this.elements_, i = this.priorities_;
    let s = 0;
    const r = e.length;
    let o, a, l;
    for (a = 0; a < r; ++a)
      o = e[a], l = t(o), l == zn ? delete this.queuedElements_[this.keyFunction_(o)] : (i[s] = l, e[s++] = o);
    e.length = s, i.length = s, this.heapify_();
  }
}
class Wu extends Bu {
  /**
   * @param {PriorityFunction} tilePriorityFunction Tile priority function.
   * @param {function(): ?} tileChangeCallback Function called on each tile change event.
   */
  constructor(t, e) {
    super(
      /**
       * @param {Array} element Element.
       * @return {number} Priority.
       */
      function(i) {
        return t.apply(null, i);
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
    ), this.boundHandleTileChange_ = this.handleTileChange.bind(this), this.tileChangeCallback_ = e, this.tilesLoading_ = 0, this.tilesLoadingKeys_ = {};
  }
  /**
   * @param {Array} element Element.
   * @return {boolean} The element was added to the queue.
   */
  enqueue(t) {
    const e = super.enqueue(t);
    return e && t[0].addEventListener(N.CHANGE, this.boundHandleTileChange_), e;
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
  handleTileChange(t) {
    const e = (
      /** @type {import("./Tile.js").default} */
      t.target
    ), i = e.getState();
    if (i === b.LOADED || i === b.ERROR || i === b.EMPTY) {
      i !== b.ERROR && e.removeEventListener(N.CHANGE, this.boundHandleTileChange_);
      const s = e.getKey();
      s in this.tilesLoadingKeys_ && (delete this.tilesLoadingKeys_[s], --this.tilesLoading_), this.tileChangeCallback_();
    }
  }
  /**
   * @param {number} maxTotalLoading Maximum number tiles to load simultaneously.
   * @param {number} maxNewLoads Maximum number of new tiles to load.
   */
  loadMoreTiles(t, e) {
    let i = 0, s, r, o;
    for (; this.tilesLoading_ < t && i < e && this.getCount() > 0; )
      r = /** @type {import("./Tile.js").default} */
      this.dequeue()[0], o = r.getKey(), s = r.getState(), s === b.IDLE && !(o in this.tilesLoadingKeys_) && (this.tilesLoadingKeys_[o] = !0, ++this.tilesLoading_, ++i, r.load());
  }
}
function zu(n, t, e, i, s) {
  if (!n || !(e in n.wantedTiles) || !n.wantedTiles[e][t.getKey()])
    return zn;
  const r = n.viewState.center, o = i[0] - r[0], a = i[1] - r[1];
  return 65536 * Math.log(s) + Math.sqrt(o * o + a * a) / s;
}
class Dr extends se {
  /**
   * @param {Options} options Control options.
   */
  constructor(t) {
    super();
    const e = t.element;
    e && !t.target && !e.style.pointerEvents && (e.style.pointerEvents = "auto"), this.element = e || null, this.target_ = null, this.map_ = null, this.listenerKeys = [], t.render && (this.render = t.render), t.target && this.setTarget(t.target);
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    Ks(this.element), super.disposeInternal();
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
  setMap(t) {
    this.map_ && Ks(this.element);
    for (let e = 0, i = this.listenerKeys.length; e < i; ++e)
      it(this.listenerKeys[e]);
    this.listenerKeys.length = 0, this.map_ = t, t && ((this.target_ ? this.target_ : t.getOverlayContainerStopEvent()).appendChild(this.element), this.render !== Ei && this.listenerKeys.push(
      j(t, Se.POSTRENDER, this.render, this)
    ), t.render());
  }
  /**
   * Renders the control.
   * @param {import("../MapEvent.js").default} mapEvent Map event.
   * @api
   */
  render(t) {
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
  setTarget(t) {
    this.target_ = typeof t == "string" ? document.getElementById(t) : t;
  }
}
class Xu extends Dr {
  /**
   * @param {Options} [options] Attribution options.
   */
  constructor(t) {
    t = t || {}, super({
      element: document.createElement("div"),
      render: t.render,
      target: t.target
    }), this.ulElement_ = document.createElement("ul"), this.collapsed_ = t.collapsed !== void 0 ? t.collapsed : !0, this.userCollapsed_ = this.collapsed_, this.overrideCollapsible_ = t.collapsible !== void 0, this.collapsible_ = t.collapsible !== void 0 ? t.collapsible : !0, this.collapsible_ || (this.collapsed_ = !1);
    const e = t.className !== void 0 ? t.className : "ol-attribution", i = t.tipLabel !== void 0 ? t.tipLabel : "Attributions", s = t.expandClassName !== void 0 ? t.expandClassName : e + "-expand", r = t.collapseLabel !== void 0 ? t.collapseLabel : "›", o = t.collapseClassName !== void 0 ? t.collapseClassName : e + "-collapse";
    typeof r == "string" ? (this.collapseLabel_ = document.createElement("span"), this.collapseLabel_.textContent = r, this.collapseLabel_.className = o) : this.collapseLabel_ = r;
    const a = t.label !== void 0 ? t.label : "i";
    typeof a == "string" ? (this.label_ = document.createElement("span"), this.label_.textContent = a, this.label_.className = s) : this.label_ = a;
    const l = this.collapsible_ && !this.collapsed_ ? this.collapseLabel_ : this.label_;
    this.toggleButton_ = document.createElement("button"), this.toggleButton_.setAttribute("type", "button"), this.toggleButton_.setAttribute("aria-expanded", String(!this.collapsed_)), this.toggleButton_.title = i, this.toggleButton_.appendChild(l), this.toggleButton_.addEventListener(
      N.CLICK,
      this.handleClick_.bind(this),
      !1
    );
    const h = e + " " + rs + " " + Mr + (this.collapsed_ && this.collapsible_ ? " " + Mo : "") + (this.collapsible_ ? "" : " ol-uncollapsible"), c = this.element;
    c.className = h, c.appendChild(this.toggleButton_), c.appendChild(this.ulElement_), this.renderedAttributions_ = [], this.renderedVisible_ = !0;
  }
  /**
   * Collect a list of visible attributions and set the collapsible state.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @return {Array<string>} Attributions.
   * @private
   */
  collectSourceAttributions_(t) {
    const e = Array.from(
      new Set(
        this.getMap().getAllLayers().flatMap((s) => s.getAttributions(t))
      )
    ), i = !this.getMap().getAllLayers().some(
      (s) => s.getSource() && s.getSource().getAttributionsCollapsible() === !1
    );
    return this.overrideCollapsible_ || this.setCollapsible(i), e;
  }
  /**
   * @private
   * @param {?import("../Map.js").FrameState} frameState Frame state.
   */
  updateElement_(t) {
    if (!t) {
      this.renderedVisible_ && (this.element.style.display = "none", this.renderedVisible_ = !1);
      return;
    }
    const e = this.collectSourceAttributions_(t), i = e.length > 0;
    if (this.renderedVisible_ != i && (this.element.style.display = i ? "" : "none", this.renderedVisible_ = i), !Ne(e, this.renderedAttributions_)) {
      Nh(this.ulElement_);
      for (let s = 0, r = e.length; s < r; ++s) {
        const o = document.createElement("li");
        o.innerHTML = e[s], this.ulElement_.appendChild(o);
      }
      this.renderedAttributions_ = e;
    }
  }
  /**
   * @param {MouseEvent} event The event to handle
   * @private
   */
  handleClick_(t) {
    t.preventDefault(), this.handleToggle_(), this.userCollapsed_ = this.collapsed_;
  }
  /**
   * @private
   */
  handleToggle_() {
    this.element.classList.toggle(Mo), this.collapsed_ ? _o(this.collapseLabel_, this.label_) : _o(this.label_, this.collapseLabel_), this.collapsed_ = !this.collapsed_, this.toggleButton_.setAttribute("aria-expanded", String(!this.collapsed_));
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
  setCollapsible(t) {
    this.collapsible_ !== t && (this.collapsible_ = t, this.element.classList.toggle("ol-uncollapsible"), this.userCollapsed_ && this.handleToggle_());
  }
  /**
   * Collapse or expand the attribution according to the passed parameter. Will
   * not do anything if the attribution isn't collapsible or if the current
   * collapsed state is already the one requested.
   * @param {boolean} collapsed True if the widget is collapsed.
   * @api
   */
  setCollapsed(t) {
    this.userCollapsed_ = t, !(!this.collapsible_ || this.collapsed_ === t) && this.handleToggle_();
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
  render(t) {
    this.updateElement_(t.frameState);
  }
}
const Yu = Xu;
class Ku extends Dr {
  /**
   * @param {Options} [options] Rotate options.
   */
  constructor(t) {
    t = t || {}, super({
      element: document.createElement("div"),
      render: t.render,
      target: t.target
    });
    const e = t.className !== void 0 ? t.className : "ol-rotate", i = t.label !== void 0 ? t.label : "⇧", s = t.compassClassName !== void 0 ? t.compassClassName : "ol-compass";
    this.label_ = null, typeof i == "string" ? (this.label_ = document.createElement("span"), this.label_.className = s, this.label_.textContent = i) : (this.label_ = i, this.label_.classList.add(s));
    const r = t.tipLabel ? t.tipLabel : "Reset rotation", o = document.createElement("button");
    o.className = e + "-reset", o.setAttribute("type", "button"), o.title = r, o.appendChild(this.label_), o.addEventListener(
      N.CLICK,
      this.handleClick_.bind(this),
      !1
    );
    const a = e + " " + rs + " " + Mr, l = this.element;
    l.className = a, l.appendChild(o), this.callResetNorth_ = t.resetNorth ? t.resetNorth : void 0, this.duration_ = t.duration !== void 0 ? t.duration : 250, this.autoHide_ = t.autoHide !== void 0 ? t.autoHide : !0, this.rotation_ = void 0, this.autoHide_ && this.element.classList.add(Sn);
  }
  /**
   * @param {MouseEvent} event The event to handle
   * @private
   */
  handleClick_(t) {
    t.preventDefault(), this.callResetNorth_ !== void 0 ? this.callResetNorth_() : this.resetNorth_();
  }
  /**
   * @private
   */
  resetNorth_() {
    const e = this.getMap().getView();
    if (!e)
      return;
    const i = e.getRotation();
    i !== void 0 && (this.duration_ > 0 && i % (2 * Math.PI) !== 0 ? e.animate({
      rotation: 0,
      duration: this.duration_,
      easing: Ii
    }) : e.setRotation(0));
  }
  /**
   * Update the rotate control element.
   * @param {import("../MapEvent.js").default} mapEvent Map event.
   * @override
   */
  render(t) {
    const e = t.frameState;
    if (!e)
      return;
    const i = e.viewState.rotation;
    if (i != this.rotation_) {
      const s = "rotate(" + i + "rad)";
      if (this.autoHide_) {
        const r = this.element.classList.contains(Sn);
        !r && i === 0 ? this.element.classList.add(Sn) : r && i !== 0 && this.element.classList.remove(Sn);
      }
      this.label_.style.transform = s;
    }
    this.rotation_ = i;
  }
}
const Uu = Ku;
class Vu extends Dr {
  /**
   * @param {Options} [options] Zoom options.
   */
  constructor(t) {
    t = t || {}, super({
      element: document.createElement("div"),
      target: t.target
    });
    const e = t.className !== void 0 ? t.className : "ol-zoom", i = t.delta !== void 0 ? t.delta : 1, s = t.zoomInClassName !== void 0 ? t.zoomInClassName : e + "-in", r = t.zoomOutClassName !== void 0 ? t.zoomOutClassName : e + "-out", o = t.zoomInLabel !== void 0 ? t.zoomInLabel : "+", a = t.zoomOutLabel !== void 0 ? t.zoomOutLabel : "–", l = t.zoomInTipLabel !== void 0 ? t.zoomInTipLabel : "Zoom in", h = t.zoomOutTipLabel !== void 0 ? t.zoomOutTipLabel : "Zoom out", c = document.createElement("button");
    c.className = s, c.setAttribute("type", "button"), c.title = l, c.appendChild(
      typeof o == "string" ? document.createTextNode(o) : o
    ), c.addEventListener(
      N.CLICK,
      this.handleClick_.bind(this, i),
      !1
    );
    const u = document.createElement("button");
    u.className = r, u.setAttribute("type", "button"), u.title = h, u.appendChild(
      typeof a == "string" ? document.createTextNode(a) : a
    ), u.addEventListener(
      N.CLICK,
      this.handleClick_.bind(this, -i),
      !1
    );
    const d = e + " " + rs + " " + Mr, f = this.element;
    f.className = d, f.appendChild(c), f.appendChild(u), this.duration_ = t.duration !== void 0 ? t.duration : 250;
  }
  /**
   * @param {number} delta Zoom delta.
   * @param {MouseEvent} event The event to handle
   * @private
   */
  handleClick_(t, e) {
    e.preventDefault(), this.zoomByDelta_(t);
  }
  /**
   * @param {number} delta Zoom delta.
   * @private
   */
  zoomByDelta_(t) {
    const i = this.getMap().getView();
    if (!i)
      return;
    const s = i.getZoom();
    if (s !== void 0) {
      const r = i.getConstrainedZoom(s + t);
      this.duration_ > 0 ? (i.getAnimating() && i.cancelAnimations(), i.animate({
        zoom: r,
        duration: this.duration_,
        easing: Ii
      })) : i.setZoom(r);
    }
  }
}
const Zu = Vu;
function Hu(n) {
  n = n || {};
  const t = new $t();
  return (n.zoom !== void 0 ? n.zoom : !0) && t.push(new Zu(n.zoomOptions)), (n.rotate !== void 0 ? n.rotate : !0) && t.push(new Uu(n.rotateOptions)), (n.attribution !== void 0 ? n.attribution : !0) && t.push(new Yu(n.attributionOptions)), t;
}
const Wo = {
  ACTIVE: "active"
};
class dn extends se {
  /**
   * @param {InteractionOptions} [options] Options.
   */
  constructor(t) {
    super(), this.on, this.once, this.un, t && t.handleEvent && (this.handleEvent = t.handleEvent), this.map_ = null, this.setActive(!0);
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
      this.get(Wo.ACTIVE)
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
  handleEvent(t) {
    return !0;
  }
  /**
   * Activate or deactivate the interaction.
   * @param {boolean} active Active.
   * @observable
   * @api
   */
  setActive(t) {
    this.set(Wo.ACTIVE, t);
  }
  /**
   * Remove the interaction from its current map and attach it to the new map.
   * Subclasses may set up event handlers to get notified about changes to
   * the map here.
   * @param {import("../Map.js").default|null} map Map.
   */
  setMap(t) {
    this.map_ = t;
  }
}
function ju(n, t, e) {
  const i = n.getCenterInternal();
  if (i) {
    const s = [i[0] + t[0], i[1] + t[1]];
    n.animateInternal({
      duration: e !== void 0 ? e : 250,
      easing: nh,
      center: n.getConstrainedCenter(s)
    });
  }
}
function Pr(n, t, e, i) {
  const s = n.getZoom();
  if (s === void 0)
    return;
  const r = n.getConstrainedZoom(s + t), o = n.getResolutionForZoom(r);
  n.getAnimating() && n.cancelAnimations(), n.animate({
    resolution: o,
    anchor: e,
    duration: i !== void 0 ? i : 250,
    easing: Ii
  });
}
class Qu extends dn {
  /**
   * @param {Options} [options] Options.
   */
  constructor(t) {
    super(), t = t || {}, this.delta_ = t.delta ? t.delta : 1, this.duration_ = t.duration !== void 0 ? t.duration : 250;
  }
  /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} (if it was a
   * doubleclick) and eventually zooms the map.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   */
  handleEvent(t) {
    let e = !1;
    if (t.type == rt.DBLCLICK) {
      const i = (
        /** @type {MouseEvent} */
        t.originalEvent
      ), s = t.map, r = t.coordinate, o = i.shiftKey ? -this.delta_ : this.delta_, a = s.getView();
      Pr(a, o, r, this.duration_), i.preventDefault(), e = !0;
    }
    return !e;
  }
}
const qu = Qu;
class fn extends dn {
  /**
   * @param {Options} [options] Options.
   */
  constructor(t) {
    t = t || {}, super(
      /** @type {import("./Interaction.js").InteractionOptions} */
      t
    ), t.handleDownEvent && (this.handleDownEvent = t.handleDownEvent), t.handleDragEvent && (this.handleDragEvent = t.handleDragEvent), t.handleMoveEvent && (this.handleMoveEvent = t.handleMoveEvent), t.handleUpEvent && (this.handleUpEvent = t.handleUpEvent), t.stopDown && (this.stopDown = t.stopDown), this.handlingDownUpSequence = !1, this.targetPointers = [];
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
  handleDownEvent(t) {
    return !1;
  }
  /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @protected
   */
  handleDragEvent(t) {
  }
  /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} and may call into
   * other functions, if event sequences like e.g. 'drag' or 'down-up' etc. are
   * detected.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   * @api
   */
  handleEvent(t) {
    if (!t.originalEvent)
      return !0;
    let e = !1;
    if (this.updateTrackedPointers_(t), this.handlingDownUpSequence) {
      if (t.type == rt.POINTERDRAG)
        this.handleDragEvent(t), t.originalEvent.preventDefault();
      else if (t.type == rt.POINTERUP) {
        const i = this.handleUpEvent(t);
        this.handlingDownUpSequence = i && this.targetPointers.length > 0;
      }
    } else if (t.type == rt.POINTERDOWN) {
      const i = this.handleDownEvent(t);
      this.handlingDownUpSequence = i, e = this.stopDown(i);
    } else
      t.type == rt.POINTERMOVE && this.handleMoveEvent(t);
    return !e;
  }
  /**
   * Handle pointer move events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @protected
   */
  handleMoveEvent(t) {
  }
  /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   * @protected
   */
  handleUpEvent(t) {
    return !1;
  }
  /**
   * This function is used to determine if "down" events should be propagated
   * to other interactions or should be stopped.
   * @param {boolean} handled Was the event handled by the interaction?
   * @return {boolean} Should the `down` event be stopped?
   */
  stopDown(t) {
    return t;
  }
  /**
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @private
   */
  updateTrackedPointers_(t) {
    t.activePointers && (this.targetPointers = t.activePointers);
  }
}
function Or(n) {
  const t = n.length;
  let e = 0, i = 0;
  for (let s = 0; s < t; s++)
    e += n[s].clientX, i += n[s].clientY;
  return { clientX: e / t, clientY: i / t };
}
function qs(n) {
  const t = arguments;
  return function(e) {
    let i = !0;
    for (let s = 0, r = t.length; s < r && (i = i && t[s](e), !!i); ++s)
      ;
    return i;
  };
}
const Ju = function(n) {
  const t = (
    /** @type {KeyboardEvent|MouseEvent|TouchEvent} */
    n.originalEvent
  );
  return t.altKey && !(t.metaKey || t.ctrlKey) && t.shiftKey;
}, $u = function(n) {
  const t = n.map.getTargetElement(), e = n.map.getOwnerDocument().activeElement;
  return t.contains(e);
}, ja = function(n) {
  return n.map.getTargetElement().hasAttribute("tabindex") ? $u(n) : !0;
}, td = Ki, Qa = function(n) {
  const t = (
    /** @type {MouseEvent} */
    n.originalEvent
  );
  return t.button == 0 && !(Fh && pa && t.ctrlKey);
}, qa = function(n) {
  const t = (
    /** @type {KeyboardEvent|MouseEvent|TouchEvent} */
    n.originalEvent
  );
  return !t.altKey && !(t.metaKey || t.ctrlKey) && !t.shiftKey;
}, ed = function(n) {
  const t = (
    /** @type {KeyboardEvent|MouseEvent|TouchEvent} */
    n.originalEvent
  );
  return pa ? t.metaKey : t.ctrlKey;
}, id = function(n) {
  const t = (
    /** @type {KeyboardEvent|MouseEvent|TouchEvent} */
    n.originalEvent
  );
  return !t.altKey && !(t.metaKey || t.ctrlKey) && t.shiftKey;
}, Ja = function(n) {
  const t = (
    /** @type {KeyboardEvent|MouseEvent|TouchEvent} */
    n.originalEvent
  ), e = (
    /** @type {Element} */
    t.target.tagName
  );
  return e !== "INPUT" && e !== "SELECT" && e !== "TEXTAREA" && // `isContentEditable` is only available on `HTMLElement`, but it may also be a
  // different type like `SVGElement`.
  // @ts-ignore
  !t.target.isContentEditable;
}, Ds = function(n) {
  const t = (
    /** @type {import("../MapBrowserEvent").default} */
    n.originalEvent
  );
  return U(
    t !== void 0,
    "mapBrowserEvent must originate from a pointer event"
  ), t.pointerType == "mouse";
}, nd = function(n) {
  const t = (
    /** @type {import("../MapBrowserEvent").default} */
    n.originalEvent
  );
  return U(
    t !== void 0,
    "mapBrowserEvent must originate from a pointer event"
  ), t.isPrimary && t.button === 0;
};
class sd extends fn {
  /**
   * @param {Options} [options] Options.
   */
  constructor(t) {
    super({
      stopDown: Kn
    }), t = t || {}, this.kinetic_ = t.kinetic, this.lastCentroid = null, this.lastPointersCount_, this.panning_ = !1;
    const e = t.condition ? t.condition : qs(qa, nd);
    this.condition_ = t.onFocusOnly ? qs(ja, e) : e, this.noKinetic_ = !1;
  }
  /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   */
  handleDragEvent(t) {
    const e = t.map;
    this.panning_ || (this.panning_ = !0, e.getView().beginInteraction());
    const i = this.targetPointers, s = e.getEventPixel(Or(i));
    if (i.length == this.lastPointersCount_) {
      if (this.kinetic_ && this.kinetic_.update(s[0], s[1]), this.lastCentroid) {
        const r = [
          this.lastCentroid[0] - s[0],
          s[1] - this.lastCentroid[1]
        ], a = t.map.getView();
        zl(r, a.getResolution()), ar(r, a.getRotation()), a.adjustCenterInternal(r);
      }
    } else
      this.kinetic_ && this.kinetic_.begin();
    this.lastCentroid = s, this.lastPointersCount_ = i.length, t.originalEvent.preventDefault();
  }
  /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */
  handleUpEvent(t) {
    const e = t.map, i = e.getView();
    if (this.targetPointers.length === 0) {
      if (!this.noKinetic_ && this.kinetic_ && this.kinetic_.end()) {
        const s = this.kinetic_.getDistance(), r = this.kinetic_.getAngle(), o = i.getCenterInternal(), a = e.getPixelFromCoordinateInternal(o), l = e.getCoordinateFromPixelInternal([
          a[0] - s * Math.cos(r),
          a[1] - s * Math.sin(r)
        ]);
        i.animateInternal({
          center: i.getConstrainedCenter(l),
          duration: 500,
          easing: Ii
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
  handleDownEvent(t) {
    if (this.targetPointers.length > 0 && this.condition_(t)) {
      const i = t.map.getView();
      return this.lastCentroid = null, i.getAnimating() && i.cancelAnimations(), this.kinetic_ && this.kinetic_.begin(), this.noKinetic_ = this.targetPointers.length > 1, !0;
    }
    return !1;
  }
}
const rd = sd;
class od extends fn {
  /**
   * @param {Options} [options] Options.
   */
  constructor(t) {
    t = t || {}, super({
      stopDown: Kn
    }), this.condition_ = t.condition ? t.condition : Ju, this.lastAngle_ = void 0, this.duration_ = t.duration !== void 0 ? t.duration : 250;
  }
  /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   */
  handleDragEvent(t) {
    if (!Ds(t))
      return;
    const e = t.map, i = e.getView();
    if (i.getConstraints().rotation === gr)
      return;
    const s = e.getSize(), r = t.pixel, o = Math.atan2(s[1] / 2 - r[1], r[0] - s[0] / 2);
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
  handleUpEvent(t) {
    return Ds(t) ? (t.map.getView().endInteraction(this.duration_), !1) : !0;
  }
  /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */
  handleDownEvent(t) {
    return Ds(t) && Qa(t) && this.condition_(t) ? (t.map.getView().beginInteraction(), this.lastAngle_ = void 0, !0) : !1;
  }
}
class ad extends tr {
  /**
   * @param {string} className CSS class name.
   */
  constructor(t) {
    super(), this.geometry_ = null, this.element_ = document.createElement("div"), this.element_.style.position = "absolute", this.element_.style.pointerEvents = "auto", this.element_.className = "ol-box " + t, this.map_ = null, this.startPixel_ = null, this.endPixel_ = null;
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
    const t = this.startPixel_, e = this.endPixel_, i = "px", s = this.element_.style;
    s.left = Math.min(t[0], e[0]) + i, s.top = Math.min(t[1], e[1]) + i, s.width = Math.abs(e[0] - t[0]) + i, s.height = Math.abs(e[1] - t[1]) + i;
  }
  /**
   * @param {import("../Map.js").default|null} map Map.
   */
  setMap(t) {
    if (this.map_) {
      this.map_.getOverlayContainer().removeChild(this.element_);
      const e = this.element_.style;
      e.left = "inherit", e.top = "inherit", e.width = "inherit", e.height = "inherit";
    }
    this.map_ = t, this.map_ && this.map_.getOverlayContainer().appendChild(this.element_);
  }
  /**
   * @param {import("../pixel.js").Pixel} startPixel Start pixel.
   * @param {import("../pixel.js").Pixel} endPixel End pixel.
   */
  setPixels(t, e) {
    this.startPixel_ = t, this.endPixel_ = e, this.createOrUpdateGeometry(), this.render_();
  }
  /**
   * Creates or updates the cached geometry.
   */
  createOrUpdateGeometry() {
    const t = this.startPixel_, e = this.endPixel_, s = [
      t,
      [t[0], e[1]],
      e,
      [e[0], t[1]]
    ].map(
      this.map_.getCoordinateFromPixelInternal,
      this.map_
    );
    s[4] = s[0].slice(), this.geometry_ ? this.geometry_.setCoordinates([s]) : this.geometry_ = new Hi([s]);
  }
  /**
   * @return {import("../geom/Polygon.js").default} Geometry.
   */
  getGeometry() {
    return this.geometry_;
  }
}
const Mn = {
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
class Ps extends Ee {
  /**
   * @param {string} type The event type.
   * @param {import("../coordinate.js").Coordinate} coordinate The event coordinate.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Originating event.
   */
  constructor(t, e, i) {
    super(t), this.coordinate = e, this.mapBrowserEvent = i;
  }
}
class ld extends fn {
  /**
   * @param {Options} [options] Options.
   */
  constructor(t) {
    super(), this.on, this.once, this.un, t = t || {}, this.box_ = new ad(t.className || "ol-dragbox"), this.minArea_ = t.minArea !== void 0 ? t.minArea : 64, t.onBoxEnd && (this.onBoxEnd = t.onBoxEnd), this.startPixel_ = null, this.condition_ = t.condition ? t.condition : Qa, this.boxEndCondition_ = t.boxEndCondition ? t.boxEndCondition : this.defaultBoxEndCondition;
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
  defaultBoxEndCondition(t, e, i) {
    const s = i[0] - e[0], r = i[1] - e[1];
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
  handleDragEvent(t) {
    this.box_.setPixels(this.startPixel_, t.pixel), this.dispatchEvent(
      new Ps(
        Mn.BOXDRAG,
        t.coordinate,
        t
      )
    );
  }
  /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */
  handleUpEvent(t) {
    this.box_.setMap(null);
    const e = this.boxEndCondition_(
      t,
      this.startPixel_,
      t.pixel
    );
    return e && this.onBoxEnd(t), this.dispatchEvent(
      new Ps(
        e ? Mn.BOXEND : Mn.BOXCANCEL,
        t.coordinate,
        t
      )
    ), !1;
  }
  /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */
  handleDownEvent(t) {
    return this.condition_(t) ? (this.startPixel_ = t.pixel, this.box_.setMap(t.map), this.box_.setPixels(this.startPixel_, this.startPixel_), this.dispatchEvent(
      new Ps(
        Mn.BOXSTART,
        t.coordinate,
        t
      )
    ), !0) : !1;
  }
  /**
   * Function to execute just before `onboxend` is fired
   * @param {import("../MapBrowserEvent.js").default} event Event.
   */
  onBoxEnd(t) {
  }
}
class hd extends ld {
  /**
   * @param {Options} [options] Options.
   */
  constructor(t) {
    t = t || {};
    const e = t.condition ? t.condition : id;
    super({
      condition: e,
      className: t.className || "ol-dragzoom",
      minArea: t.minArea
    }), this.duration_ = t.duration !== void 0 ? t.duration : 200, this.out_ = t.out !== void 0 ? t.out : !1;
  }
  /**
   * Function to execute just before `onboxend` is fired
   * @param {import("../MapBrowserEvent.js").default} event Event.
   */
  onBoxEnd(t) {
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
      easing: Ii
    });
  }
}
const cd = hd, Xe = {
  LEFT: "ArrowLeft",
  UP: "ArrowUp",
  RIGHT: "ArrowRight",
  DOWN: "ArrowDown"
};
class ud extends dn {
  /**
   * @param {Options} [options] Options.
   */
  constructor(t) {
    super(), t = t || {}, this.defaultCondition_ = function(e) {
      return qa(e) && Ja(e);
    }, this.condition_ = t.condition !== void 0 ? t.condition : this.defaultCondition_, this.duration_ = t.duration !== void 0 ? t.duration : 100, this.pixelDelta_ = t.pixelDelta !== void 0 ? t.pixelDelta : 128;
  }
  /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} if it was a
   * `KeyEvent`, and decides the direction to pan to (if an arrow key was
   * pressed).
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   */
  handleEvent(t) {
    let e = !1;
    if (t.type == N.KEYDOWN) {
      const i = (
        /** @type {KeyboardEvent} */
        t.originalEvent
      ), s = i.key;
      if (this.condition_(t) && (s == Xe.DOWN || s == Xe.LEFT || s == Xe.RIGHT || s == Xe.UP)) {
        const o = t.map.getView(), a = o.getResolution() * this.pixelDelta_;
        let l = 0, h = 0;
        s == Xe.DOWN ? h = -a : s == Xe.LEFT ? l = -a : s == Xe.RIGHT ? l = a : h = a;
        const c = [l, h];
        ar(c, o.getRotation()), ju(o, c, this.duration_), i.preventDefault(), e = !0;
      }
    }
    return !e;
  }
}
class dd extends dn {
  /**
   * @param {Options} [options] Options.
   */
  constructor(t) {
    super(), t = t || {}, this.condition_ = t.condition ? t.condition : function(e) {
      return !ed(e) && Ja(e);
    }, this.delta_ = t.delta ? t.delta : 1, this.duration_ = t.duration !== void 0 ? t.duration : 100;
  }
  /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} if it was a
   * `KeyEvent`, and decides whether to zoom in or out (depending on whether the
   * key pressed was '+' or '-').
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   */
  handleEvent(t) {
    let e = !1;
    if (t.type == N.KEYDOWN || t.type == N.KEYPRESS) {
      const i = (
        /** @type {KeyboardEvent} */
        t.originalEvent
      ), s = i.key;
      if (this.condition_(t) && (s === "+" || s === "-")) {
        const r = t.map, o = s === "+" ? this.delta_ : -this.delta_, a = r.getView();
        Pr(a, o, void 0, this.duration_), i.preventDefault(), e = !0;
      }
    }
    return !e;
  }
}
const fd = dd;
class gd {
  /**
   * @param {number} decay Rate of decay (must be negative).
   * @param {number} minVelocity Minimum velocity (pixels/millisecond).
   * @param {number} delay Delay to consider to calculate the kinetic
   *     initial values (milliseconds).
   */
  constructor(t, e, i) {
    this.decay_ = t, this.minVelocity_ = e, this.delay_ = i, this.points_ = [], this.angle_ = 0, this.initialVelocity_ = 0;
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
  update(t, e) {
    this.points_.push(t, e, Date.now());
  }
  /**
   * @return {boolean} Whether we should do kinetic animation.
   */
  end() {
    if (this.points_.length < 6)
      return !1;
    const t = Date.now() - this.delay_, e = this.points_.length - 3;
    if (this.points_[e + 2] < t)
      return !1;
    let i = e - 3;
    for (; i > 0 && this.points_[i + 2] > t; )
      i -= 3;
    const s = this.points_[e + 2] - this.points_[i + 2];
    if (s < 1e3 / 60)
      return !1;
    const r = this.points_[e] - this.points_[i], o = this.points_[e + 1] - this.points_[i + 1];
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
class md extends dn {
  /**
   * @param {Options} [options] Options.
   */
  constructor(t) {
    t = t || {}, super(
      /** @type {import("./Interaction.js").InteractionOptions} */
      t
    ), this.totalDelta_ = 0, this.lastDelta_ = 0, this.maxDelta_ = t.maxDelta !== void 0 ? t.maxDelta : 1, this.duration_ = t.duration !== void 0 ? t.duration : 250, this.timeout_ = t.timeout !== void 0 ? t.timeout : 80, this.useAnchor_ = t.useAnchor !== void 0 ? t.useAnchor : !0, this.constrainResolution_ = t.constrainResolution !== void 0 ? t.constrainResolution : !1;
    const e = t.condition ? t.condition : td;
    this.condition_ = t.onFocusOnly ? qs(ja, e) : e, this.lastAnchor_ = null, this.startTime_ = void 0, this.timeoutId_, this.mode_ = void 0, this.trackpadEventGap_ = 400, this.trackpadTimeoutId_, this.deltaPerZoom_ = 300;
  }
  /**
   * @private
   */
  endInteraction_() {
    this.trackpadTimeoutId_ = void 0;
    const t = this.getMap();
    if (!t)
      return;
    t.getView().endInteraction(
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
  handleEvent(t) {
    if (!this.condition_(t) || t.type !== N.WHEEL)
      return !0;
    const i = t.map, s = (
      /** @type {WheelEvent} */
      t.originalEvent
    );
    s.preventDefault(), this.useAnchor_ && (this.lastAnchor_ = t.coordinate);
    let r;
    if (t.type == N.WHEEL && (r = s.deltaY, Oh && s.deltaMode === WheelEvent.DOM_DELTA_PIXEL && (r /= ya), s.deltaMode === WheelEvent.DOM_DELTA_LINE && (r *= 40)), r === 0)
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
  handleWheelZoom_(t) {
    const e = t.getView();
    e.getAnimating() && e.cancelAnimations();
    let i = -lt(
      this.totalDelta_,
      -this.maxDelta_ * this.deltaPerZoom_,
      this.maxDelta_ * this.deltaPerZoom_
    ) / this.deltaPerZoom_;
    (e.getConstrainResolution() || this.constrainResolution_) && (i = i ? i > 0 ? 1 : -1 : 0), Pr(e, i, this.lastAnchor_, this.duration_), this.mode_ = void 0, this.totalDelta_ = 0, this.lastAnchor_ = null, this.startTime_ = void 0, this.timeoutId_ = void 0;
  }
  /**
   * Enable or disable using the mouse's location as an anchor when zooming
   * @param {boolean} useAnchor true to zoom to the mouse's location, false
   * to zoom to the center of the map
   * @api
   */
  setMouseAnchor(t) {
    this.useAnchor_ = t, t || (this.lastAnchor_ = null);
  }
}
const _d = md;
class pd extends fn {
  /**
   * @param {Options} [options] Options.
   */
  constructor(t) {
    t = t || {};
    const e = (
      /** @type {import("./Pointer.js").Options} */
      t
    );
    e.stopDown || (e.stopDown = Kn), super(e), this.anchor_ = null, this.lastAngle_ = void 0, this.rotating_ = !1, this.rotationDelta_ = 0, this.threshold_ = t.threshold !== void 0 ? t.threshold : 0.3, this.duration_ = t.duration !== void 0 ? t.duration : 250;
  }
  /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   */
  handleDragEvent(t) {
    let e = 0;
    const i = this.targetPointers[0], s = this.targetPointers[1], r = Math.atan2(
      s.clientY - i.clientY,
      s.clientX - i.clientX
    );
    if (this.lastAngle_ !== void 0) {
      const l = r - this.lastAngle_;
      this.rotationDelta_ += l, !this.rotating_ && Math.abs(this.rotationDelta_) > this.threshold_ && (this.rotating_ = !0), e = l;
    }
    this.lastAngle_ = r;
    const o = t.map, a = o.getView();
    a.getConstraints().rotation !== gr && (this.anchor_ = o.getCoordinateFromPixelInternal(
      o.getEventPixel(Or(this.targetPointers))
    ), this.rotating_ && (o.render(), a.adjustRotationInternal(e, this.anchor_)));
  }
  /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */
  handleUpEvent(t) {
    return this.targetPointers.length < 2 ? (t.map.getView().endInteraction(this.duration_), !1) : !0;
  }
  /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */
  handleDownEvent(t) {
    if (this.targetPointers.length >= 2) {
      const e = t.map;
      return this.anchor_ = null, this.lastAngle_ = void 0, this.rotating_ = !1, this.rotationDelta_ = 0, this.handlingDownUpSequence || e.getView().beginInteraction(), !0;
    }
    return !1;
  }
}
class yd extends fn {
  /**
   * @param {Options} [options] Options.
   */
  constructor(t) {
    t = t || {};
    const e = (
      /** @type {import("./Pointer.js").Options} */
      t
    );
    e.stopDown || (e.stopDown = Kn), super(e), this.anchor_ = null, this.duration_ = t.duration !== void 0 ? t.duration : 400, this.lastDistance_ = void 0, this.lastScaleDelta_ = 1;
  }
  /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   */
  handleDragEvent(t) {
    let e = 1;
    const i = this.targetPointers[0], s = this.targetPointers[1], r = i.clientX - s.clientX, o = i.clientY - s.clientY, a = Math.sqrt(r * r + o * o);
    this.lastDistance_ !== void 0 && (e = this.lastDistance_ / a), this.lastDistance_ = a;
    const l = t.map, h = l.getView();
    e != 1 && (this.lastScaleDelta_ = e), this.anchor_ = l.getCoordinateFromPixelInternal(
      l.getEventPixel(Or(this.targetPointers))
    ), l.render(), h.adjustResolutionInternal(e, this.anchor_);
  }
  /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */
  handleUpEvent(t) {
    if (this.targetPointers.length < 2) {
      const i = t.map.getView(), s = this.lastScaleDelta_ > 1 ? 1 : -1;
      return i.endInteraction(this.duration_, s), !1;
    }
    return !0;
  }
  /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */
  handleDownEvent(t) {
    if (this.targetPointers.length >= 2) {
      const e = t.map;
      return this.anchor_ = null, this.lastDistance_ = void 0, this.lastScaleDelta_ = 1, this.handlingDownUpSequence || e.getView().beginInteraction(), !0;
    }
    return !1;
  }
}
const Ed = yd;
function xd(n) {
  n = n || {};
  const t = new $t(), e = new gd(-5e-3, 0.05, 100);
  return (n.altShiftDragRotate !== void 0 ? n.altShiftDragRotate : !0) && t.push(new od()), (n.doubleClickZoom !== void 0 ? n.doubleClickZoom : !0) && t.push(
    new qu({
      delta: n.zoomDelta,
      duration: n.zoomDuration
    })
  ), (n.dragPan !== void 0 ? n.dragPan : !0) && t.push(
    new rd({
      onFocusOnly: n.onFocusOnly,
      kinetic: e
    })
  ), (n.pinchRotate !== void 0 ? n.pinchRotate : !0) && t.push(new pd()), (n.pinchZoom !== void 0 ? n.pinchZoom : !0) && t.push(
    new Ed({
      duration: n.zoomDuration
    })
  ), (n.keyboard !== void 0 ? n.keyboard : !0) && (t.push(new ud()), t.push(
    new fd({
      delta: n.zoomDelta,
      duration: n.zoomDuration
    })
  )), (n.mouseWheelZoom !== void 0 ? n.mouseWheelZoom : !0) && t.push(
    new _d({
      onFocusOnly: n.onFocusOnly,
      duration: n.zoomDuration
    })
  ), (n.shiftDragZoom !== void 0 ? n.shiftDragZoom : !0) && t.push(
    new cd({
      duration: n.zoomDuration
    })
  ), t;
}
function $a(n) {
  if (n instanceof es) {
    n.setMapInternal(null);
    return;
  }
  n instanceof Si && n.getLayers().forEach($a);
}
function tl(n, t) {
  if (n instanceof es) {
    n.setMapInternal(t);
    return;
  }
  if (n instanceof Si) {
    const e = n.getLayers().getArray();
    for (let i = 0, s = e.length; i < s; ++i)
      tl(e[i], t);
  }
}
class Cd extends se {
  /**
   * @param {MapOptions} [options] Map options.
   */
  constructor(t) {
    super(), t = t || {}, this.on, this.once, this.un;
    const e = wd(t);
    this.renderComplete_, this.loaded_ = !0, this.boundHandleBrowserEvent_ = this.handleBrowserEvent.bind(this), this.maxTilesLoading_ = t.maxTilesLoading !== void 0 ? t.maxTilesLoading : 16, this.pixelRatio_ = t.pixelRatio !== void 0 ? t.pixelRatio : ya, this.postRenderTimeoutHandle_, this.animationDelayKey_, this.animationDelay_ = this.animationDelay_.bind(this), this.coordinateToPixelTransform_ = Ht(), this.pixelToCoordinateTransform_ = Ht(), this.frameIndex_ = 0, this.frameState_ = null, this.previousExtent_ = null, this.viewPropertyListenerKey_ = null, this.viewChangeListenerKey_ = null, this.layerGroupPropertyListenerKeys_ = null, this.viewport_ = document.createElement("div"), this.viewport_.className = "ol-viewport" + ("ontouchstart" in window ? " ol-touch" : ""), this.viewport_.style.position = "relative", this.viewport_.style.overflow = "hidden", this.viewport_.style.width = "100%", this.viewport_.style.height = "100%", this.overlayContainer_ = document.createElement("div"), this.overlayContainer_.style.position = "absolute", this.overlayContainer_.style.zIndex = "0", this.overlayContainer_.style.width = "100%", this.overlayContainer_.style.height = "100%", this.overlayContainer_.style.pointerEvents = "none", this.overlayContainer_.className = "ol-overlaycontainer", this.viewport_.appendChild(this.overlayContainer_), this.overlayContainerStopEvent_ = document.createElement("div"), this.overlayContainerStopEvent_.style.position = "absolute", this.overlayContainerStopEvent_.style.zIndex = "0", this.overlayContainerStopEvent_.style.width = "100%", this.overlayContainerStopEvent_.style.height = "100%", this.overlayContainerStopEvent_.style.pointerEvents = "none", this.overlayContainerStopEvent_.className = "ol-overlaycontainer-stopevent", this.viewport_.appendChild(this.overlayContainerStopEvent_), this.mapBrowserEventHandler_ = null, this.moveTolerance_ = t.moveTolerance, this.keyboardEventTarget_ = e.keyboardEventTarget, this.targetChangeHandlerKeys_ = null, this.targetElement_ = null, this.resizeObserver_ = new ResizeObserver(() => this.updateSize()), this.controls = e.controls || Hu(), this.interactions = e.interactions || xd({
      onFocusOnly: !0
    }), this.overlays_ = e.overlays, this.overlayIdIndex_ = {}, this.renderer_ = null, this.postRenderFunctions_ = [], this.tileQueue_ = new Wu(
      this.getTilePriority.bind(this),
      this.handleTileChange_.bind(this)
    ), this.addChangeListener(
      mt.LAYERGROUP,
      this.handleLayerGroupChanged_
    ), this.addChangeListener(mt.VIEW, this.handleViewChanged_), this.addChangeListener(mt.SIZE, this.handleSizeChanged_), this.addChangeListener(mt.TARGET, this.handleTargetChanged_), this.setProperties(e.values);
    const i = this;
    t.view && !(t.view instanceof qt) && t.view.then(function(s) {
      i.setView(new qt(s));
    }), this.controls.addEventListener(
      It.ADD,
      /**
       * @param {import("./Collection.js").CollectionEvent<import("./control/Control.js").default>} event CollectionEvent
       */
      (s) => {
        s.element.setMap(this);
      }
    ), this.controls.addEventListener(
      It.REMOVE,
      /**
       * @param {import("./Collection.js").CollectionEvent<import("./control/Control.js").default>} event CollectionEvent.
       */
      (s) => {
        s.element.setMap(null);
      }
    ), this.interactions.addEventListener(
      It.ADD,
      /**
       * @param {import("./Collection.js").CollectionEvent<import("./interaction/Interaction.js").default>} event CollectionEvent.
       */
      (s) => {
        s.element.setMap(this);
      }
    ), this.interactions.addEventListener(
      It.REMOVE,
      /**
       * @param {import("./Collection.js").CollectionEvent<import("./interaction/Interaction.js").default>} event CollectionEvent.
       */
      (s) => {
        s.element.setMap(null);
      }
    ), this.overlays_.addEventListener(
      It.ADD,
      /**
       * @param {import("./Collection.js").CollectionEvent<import("./Overlay.js").default>} event CollectionEvent.
       */
      (s) => {
        this.addOverlayInternal_(s.element);
      }
    ), this.overlays_.addEventListener(
      It.REMOVE,
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
  addControl(t) {
    this.getControls().push(t);
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
  addInteraction(t) {
    this.getInteractions().push(t);
  }
  /**
   * Adds the given layer to the top of this map. If you want to add a layer
   * elsewhere in the stack, use `getLayers()` and the methods available on
   * {@link module:ol/Collection~Collection}.
   * @param {import("./layer/Base.js").default} layer Layer.
   * @api
   */
  addLayer(t) {
    this.getLayerGroup().getLayers().push(t);
  }
  /**
   * @param {import("./layer/Group.js").GroupEvent} event The layer add event.
   * @private
   */
  handleLayerAdd_(t) {
    tl(t.layer, this);
  }
  /**
   * Add the given overlay to the map.
   * @param {import("./Overlay.js").default} overlay Overlay.
   * @api
   */
  addOverlay(t) {
    this.getOverlays().push(t);
  }
  /**
   * This deals with map's overlay collection changes.
   * @param {import("./Overlay.js").default} overlay Overlay.
   * @private
   */
  addOverlayInternal_(t) {
    const e = t.getId();
    e !== void 0 && (this.overlayIdIndex_[e.toString()] = t), t.setMap(this);
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
  forEachFeatureAtPixel(t, e, i) {
    if (!this.frameState_ || !this.renderer_)
      return;
    const s = this.getCoordinateFromPixelInternal(t);
    i = i !== void 0 ? i : {};
    const r = i.hitTolerance !== void 0 ? i.hitTolerance : 0, o = i.layerFilter !== void 0 ? i.layerFilter : Ki, a = i.checkWrapped !== !1;
    return this.renderer_.forEachFeatureAtCoordinate(
      s,
      this.frameState_,
      r,
      a,
      e,
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
  getFeaturesAtPixel(t, e) {
    const i = [];
    return this.forEachFeatureAtPixel(
      t,
      function(s) {
        i.push(s);
      },
      e
    ), i;
  }
  /**
   * Get all layers from all layer groups.
   * @return {Array<import("./layer/Layer.js").default>} Layers.
   * @api
   */
  getAllLayers() {
    const t = [];
    function e(i) {
      i.forEach(function(s) {
        s instanceof Si ? e(s.getLayers()) : t.push(s);
      });
    }
    return e(this.getLayers()), t;
  }
  /**
   * Detect if features intersect a pixel on the viewport. Layers included in the
   * detection can be configured through the `layerFilter` option.
   * @param {import("./pixel.js").Pixel} pixel Pixel.
   * @param {AtPixelOptions} [options] Optional options.
   * @return {boolean} Is there a feature at the given pixel?
   * @api
   */
  hasFeatureAtPixel(t, e) {
    if (!this.frameState_ || !this.renderer_)
      return !1;
    const i = this.getCoordinateFromPixelInternal(t);
    e = e !== void 0 ? e : {};
    const s = e.layerFilter !== void 0 ? e.layerFilter : Ki, r = e.hitTolerance !== void 0 ? e.hitTolerance : 0, o = e.checkWrapped !== !1;
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
  getEventCoordinate(t) {
    return this.getCoordinateFromPixel(this.getEventPixel(t));
  }
  /**
   * Returns the coordinate in view projection for a browser event.
   * @param {MouseEvent} event Event.
   * @return {import("./coordinate.js").Coordinate} Coordinate.
   */
  getEventCoordinateInternal(t) {
    return this.getCoordinateFromPixelInternal(this.getEventPixel(t));
  }
  /**
   * Returns the map pixel position for a browser event relative to the viewport.
   * @param {UIEvent|{clientX: number, clientY: number}} event Event.
   * @return {import("./pixel.js").Pixel} Pixel.
   * @api
   */
  getEventPixel(t) {
    const i = this.viewport_.getBoundingClientRect(), s = this.getSize(), r = i.width / s[0], o = i.height / s[1], a = (
      //FIXME Are we really calling this with a TouchEvent anywhere?
      "changedTouches" in t ? (
        /** @type {TouchEvent} */
        t.changedTouches[0]
      ) : (
        /** @type {MouseEvent} */
        t
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
      this.get(mt.TARGET)
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
  getCoordinateFromPixel(t) {
    return Xs(
      this.getCoordinateFromPixelInternal(t),
      this.getView().getProjection()
    );
  }
  /**
   * Get the coordinate for a given pixel.  This returns a coordinate in the
   * map view projection.
   * @param {import("./pixel.js").Pixel} pixel Pixel position in the map viewport.
   * @return {import("./coordinate.js").Coordinate} The coordinate for the pixel position.
   */
  getCoordinateFromPixelInternal(t) {
    const e = this.frameState_;
    return e ? ut(e.pixelToCoordinateTransform, t.slice()) : null;
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
  getOverlayById(t) {
    const e = this.overlayIdIndex_[t.toString()];
    return e !== void 0 ? e : null;
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
      this.get(mt.LAYERGROUP)
    );
  }
  /**
   * Clear any existing layers and add layers to the map.
   * @param {Array<import("./layer/Base.js").default>|Collection<import("./layer/Base.js").default>} layers The layers to be added to the map.
   * @api
   */
  setLayers(t) {
    const e = this.getLayerGroup();
    if (t instanceof $t) {
      e.setLayers(t);
      return;
    }
    const i = e.getLayers();
    i.clear(), i.extend(t);
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
    const t = this.getLayerGroup().getLayerStatesArray();
    for (let e = 0, i = t.length; e < i; ++e) {
      const s = t[e];
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
  getPixelFromCoordinate(t) {
    const e = de(
      t,
      this.getView().getProjection()
    );
    return this.getPixelFromCoordinateInternal(e);
  }
  /**
   * Get the pixel for a coordinate.  This takes a coordinate in the map view
   * projection and returns the corresponding pixel.
   * @param {import("./coordinate.js").Coordinate} coordinate A map coordinate.
   * @return {import("./pixel.js").Pixel} A pixel position in the map viewport.
   */
  getPixelFromCoordinateInternal(t) {
    const e = this.frameState_;
    return e ? ut(
      e.coordinateToPixelTransform,
      t.slice(0, 2)
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
      this.get(mt.SIZE)
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
      this.get(mt.VIEW)
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
    const t = this.getTargetElement();
    return t ? t.ownerDocument : document;
  }
  /**
   * @param {import("./Tile.js").default} tile Tile.
   * @param {string} tileSourceKey Tile source key.
   * @param {import("./coordinate.js").Coordinate} tileCenter Tile center.
   * @param {number} tileResolution Tile resolution.
   * @return {number} Tile priority.
   */
  getTilePriority(t, e, i, s) {
    return zu(
      this.frameState_,
      t,
      e,
      i,
      s
    );
  }
  /**
   * @param {UIEvent} browserEvent Browser event.
   * @param {string} [type] Type.
   */
  handleBrowserEvent(t, e) {
    e = e || t.type;
    const i = new Te(e, this, t);
    this.handleMapBrowserEvent(i);
  }
  /**
   * @param {MapBrowserEvent} mapBrowserEvent The event to handle.
   */
  handleMapBrowserEvent(t) {
    if (!this.frameState_)
      return;
    const e = (
      /** @type {PointerEvent} */
      t.originalEvent
    ), i = e.type;
    if (i === Qs.POINTERDOWN || i === N.WHEEL || i === N.KEYDOWN) {
      const s = this.getOwnerDocument(), r = this.viewport_.getRootNode ? this.viewport_.getRootNode() : s, o = (
        /** @type {Node} */
        e.target
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
    if (t.frameState = this.frameState_, this.dispatchEvent(t) !== !1) {
      const s = this.getInteractions().getArray().slice();
      for (let r = s.length - 1; r >= 0; r--) {
        const o = s[r];
        if (o.getMap() !== this || !o.getActive() || !this.getTargetElement())
          continue;
        if (!o.handleEvent(t) || t.propagationStopped)
          break;
      }
    }
  }
  /**
   * @protected
   */
  handlePostRender() {
    const t = this.frameState_, e = this.tileQueue_;
    if (!e.isEmpty()) {
      let s = this.maxTilesLoading_, r = s;
      if (t) {
        const o = t.viewHints;
        if (o[_t.ANIMATING] || o[_t.INTERACTING]) {
          const a = Date.now() - t.time > 8;
          s = a ? 0 : 8, r = a ? 0 : 2;
        }
      }
      e.getTilesLoading() < s && (e.reprioritize(), e.loadMoreTiles(s, r));
    }
    t && this.renderer_ && !t.animate && (this.renderComplete_ === !0 ? (this.hasListener(Bt.RENDERCOMPLETE) && this.renderer_.dispatchRenderEvent(
      Bt.RENDERCOMPLETE,
      t
    ), this.loaded_ === !1 && (this.loaded_ = !0, this.dispatchEvent(
      new ci(Se.LOADEND, this, t)
    ))) : this.loaded_ === !0 && (this.loaded_ = !1, this.dispatchEvent(
      new ci(Se.LOADSTART, this, t)
    )));
    const i = this.postRenderFunctions_;
    for (let s = 0, r = i.length; s < r; ++s)
      i[s](this, t);
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
        it(this.targetChangeHandlerKeys_[i]);
      this.targetChangeHandlerKeys_ = null, this.viewport_.removeEventListener(
        N.CONTEXTMENU,
        this.boundHandleBrowserEvent_
      ), this.viewport_.removeEventListener(
        N.WHEEL,
        this.boundHandleBrowserEvent_
      ), this.mapBrowserEventHandler_.dispose(), this.mapBrowserEventHandler_ = null, Ks(this.viewport_);
    }
    if (this.targetElement_) {
      this.resizeObserver_.unobserve(this.targetElement_);
      const i = this.targetElement_.getRootNode();
      i instanceof ShadowRoot && this.resizeObserver_.unobserve(i.host), this.setSize(void 0);
    }
    const t = this.getTarget(), e = typeof t == "string" ? document.getElementById(t) : t;
    if (this.targetElement_ = e, !e)
      this.renderer_ && (clearTimeout(this.postRenderTimeoutHandle_), this.postRenderTimeoutHandle_ = void 0, this.postRenderFunctions_.length = 0, this.renderer_.dispose(), this.renderer_ = null), this.animationDelayKey_ && (cancelAnimationFrame(this.animationDelayKey_), this.animationDelayKey_ = void 0);
    else {
      e.appendChild(this.viewport_), this.renderer_ || (this.renderer_ = new Nu(this)), this.mapBrowserEventHandler_ = new Gu(
        this,
        this.moveTolerance_
      );
      for (const r in rt)
        this.mapBrowserEventHandler_.addEventListener(
          rt[r],
          this.handleMapBrowserEvent.bind(this)
        );
      this.viewport_.addEventListener(
        N.CONTEXTMENU,
        this.boundHandleBrowserEvent_,
        !1
      ), this.viewport_.addEventListener(
        N.WHEEL,
        this.boundHandleBrowserEvent_,
        Ca ? { passive: !1 } : !1
      );
      const i = this.keyboardEventTarget_ ? this.keyboardEventTarget_ : e;
      this.targetChangeHandlerKeys_ = [
        j(
          i,
          N.KEYDOWN,
          this.handleBrowserEvent,
          this
        ),
        j(
          i,
          N.KEYPRESS,
          this.handleBrowserEvent,
          this
        )
      ];
      const s = e.getRootNode();
      s instanceof ShadowRoot && this.resizeObserver_.observe(s.host), this.resizeObserver_.observe(e);
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
    this.viewPropertyListenerKey_ && (it(this.viewPropertyListenerKey_), this.viewPropertyListenerKey_ = null), this.viewChangeListenerKey_ && (it(this.viewChangeListenerKey_), this.viewChangeListenerKey_ = null);
    const t = this.getView();
    t && (this.updateViewportSize_(this.getSize()), this.viewPropertyListenerKey_ = j(
      t,
      yi.PROPERTYCHANGE,
      this.handleViewPropertyChanged_,
      this
    ), this.viewChangeListenerKey_ = j(
      t,
      N.CHANGE,
      this.handleViewPropertyChanged_,
      this
    ), t.resolveConstraints(0)), this.render();
  }
  /**
   * @private
   */
  handleLayerGroupChanged_() {
    this.layerGroupPropertyListenerKeys_ && (this.layerGroupPropertyListenerKeys_.forEach(it), this.layerGroupPropertyListenerKeys_ = null);
    const t = this.getLayerGroup();
    t && (this.handleLayerAdd_(new Me("addlayer", t)), this.layerGroupPropertyListenerKeys_ = [
      j(t, yi.PROPERTYCHANGE, this.render, this),
      j(t, N.CHANGE, this.render, this),
      j(t, "addlayer", this.handleLayerAdd_, this),
      j(t, "removelayer", this.handleLayerRemove_, this)
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
    const t = this.getLayerGroup().getLayerStatesArray();
    for (let e = 0, i = t.length; e < i; ++e) {
      const s = t[e].layer;
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
  removeControl(t) {
    return this.getControls().remove(t);
  }
  /**
   * Remove the given interaction from the map.
   * @param {import("./interaction/Interaction.js").default} interaction Interaction to remove.
   * @return {import("./interaction/Interaction.js").default|undefined} The removed interaction (or
   *     undefined if the interaction was not found).
   * @api
   */
  removeInteraction(t) {
    return this.getInteractions().remove(t);
  }
  /**
   * Removes the given layer from the map.
   * @param {import("./layer/Base.js").default} layer Layer.
   * @return {import("./layer/Base.js").default|undefined} The removed layer (or undefined if the
   *     layer was not found).
   * @api
   */
  removeLayer(t) {
    return this.getLayerGroup().getLayers().remove(t);
  }
  /**
   * @param {import("./layer/Group.js").GroupEvent} event The layer remove event.
   * @private
   */
  handleLayerRemove_(t) {
    $a(t.layer);
  }
  /**
   * Remove the given overlay from the map.
   * @param {import("./Overlay.js").default} overlay Overlay.
   * @return {import("./Overlay.js").default|undefined} The removed overlay (or undefined
   *     if the overlay was not found).
   * @api
   */
  removeOverlay(t) {
    return this.getOverlays().remove(t);
  }
  /**
   * @param {number} time Time.
   * @private
   */
  renderFrame_(t) {
    const e = this.getSize(), i = this.getView(), s = this.frameState_;
    let r = null;
    if (e !== void 0 && Io(e) && i && i.isDef()) {
      const o = i.getHints(
        this.frameState_ ? this.frameState_.viewHints : void 0
      ), a = i.getState();
      if (r = {
        animate: !1,
        coordinateToPixelTransform: this.coordinateToPixelTransform_,
        declutter: null,
        extent: Bs(
          a.center,
          a.resolution,
          a.rotation,
          e
        ),
        index: this.frameIndex_++,
        layerIndex: 0,
        layerStatesArray: this.getLayerGroup().getLayerStatesArray(),
        pixelRatio: this.pixelRatio_,
        pixelToCoordinateTransform: this.pixelToCoordinateTransform_,
        postRenderFunctions: [],
        size: e,
        tileQueue: this.tileQueue_,
        time: t,
        usedTiles: {},
        viewState: a,
        viewHints: o,
        wantedTiles: {},
        mapId: Q(this),
        renderTargets: {}
      }, a.nextCenter && a.nextResolution) {
        const l = isNaN(a.nextRotation) ? a.rotation : a.nextRotation;
        r.nextExtent = Bs(
          a.nextCenter,
          a.nextResolution,
          l,
          e
        );
      }
    }
    this.frameState_ = r, this.renderer_.renderFrame(r), r && (r.animate && this.render(), Array.prototype.push.apply(
      this.postRenderFunctions_,
      r.postRenderFunctions
    ), s && (!this.previousExtent_ || !Qn(this.previousExtent_) && !Vi(r.extent, this.previousExtent_)) && (this.dispatchEvent(
      new ci(Se.MOVESTART, this, s)
    ), this.previousExtent_ = Vn(this.previousExtent_)), this.previousExtent_ && !r.viewHints[_t.ANIMATING] && !r.viewHints[_t.INTERACTING] && !Vi(r.extent, this.previousExtent_) && (this.dispatchEvent(
      new ci(Se.MOVEEND, this, r)
    ), $o(r.extent, this.previousExtent_))), this.dispatchEvent(new ci(Se.POSTRENDER, this, r)), this.renderComplete_ = this.hasListener(Se.LOADSTART) || this.hasListener(Se.LOADEND) || this.hasListener(Bt.RENDERCOMPLETE) ? !this.tileQueue_.getTilesLoading() && !this.tileQueue_.getCount() && !this.getLoadingOrNotReady() : void 0, this.postRenderTimeoutHandle_ || (this.postRenderTimeoutHandle_ = setTimeout(() => {
      this.postRenderTimeoutHandle_ = void 0, this.handlePostRender();
    }, 0));
  }
  /**
   * Sets the layergroup of this map.
   * @param {LayerGroup} layerGroup A layer group containing the layers in this map.
   * @observable
   * @api
   */
  setLayerGroup(t) {
    const e = this.getLayerGroup();
    e && this.handleLayerRemove_(new Me("removelayer", e)), this.set(mt.LAYERGROUP, t);
  }
  /**
   * Set the size of this map.
   * @param {import("./size.js").Size|undefined} size The size in pixels of the map in the DOM.
   * @observable
   * @api
   */
  setSize(t) {
    this.set(mt.SIZE, t);
  }
  /**
   * Set the target element to render this map into.
   * @param {HTMLElement|string} [target] The Element or id of the Element
   *     that the map is rendered in.
   * @observable
   * @api
   */
  setTarget(t) {
    this.set(mt.TARGET, t);
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
  setView(t) {
    if (!t || t instanceof qt) {
      this.set(mt.VIEW, t);
      return;
    }
    this.set(mt.VIEW, new qt());
    const e = this;
    t.then(function(i) {
      e.setView(new qt(i));
    });
  }
  /**
   * Force a recalculation of the map viewport size.  This should be called when
   * third-party code changes the size of the map viewport.
   * @api
   */
  updateSize() {
    const t = this.getTargetElement();
    let e;
    if (t) {
      const s = getComputedStyle(t), r = t.offsetWidth - parseFloat(s.borderLeftWidth) - parseFloat(s.paddingLeft) - parseFloat(s.paddingRight) - parseFloat(s.borderRightWidth), o = t.offsetHeight - parseFloat(s.borderTopWidth) - parseFloat(s.paddingTop) - parseFloat(s.paddingBottom) - parseFloat(s.borderBottomWidth);
      !isNaN(r) && !isNaN(o) && (e = [r, o], !Io(e) && (t.offsetWidth || t.offsetHeight || t.getClientRects().length) && oa(
        "No map visible because the map container's width or height are 0."
      ));
    }
    const i = this.getSize();
    e && (!i || !Ne(e, i)) && (this.setSize(e), this.updateViewportSize_(e));
  }
  /**
   * Recomputes the viewport size and save it on the view object (if any)
   * @param {import("./size.js").Size|undefined} size The size.
   * @private
   */
  updateViewportSize_(t) {
    const e = this.getView();
    e && e.setViewportSize(t);
  }
}
function wd(n) {
  let t = null;
  n.keyboardEventTarget !== void 0 && (t = typeof n.keyboardEventTarget == "string" ? document.getElementById(n.keyboardEventTarget) : n.keyboardEventTarget);
  const e = {}, i = n.layers && typeof /** @type {?} */
  n.layers.getLayers == "function" ? (
    /** @type {LayerGroup} */
    n.layers
  ) : new Si({
    layers: (
      /** @type {Collection<import("./layer/Base.js").default>|Array<import("./layer/Base.js").default>} */
      n.layers
    )
  });
  e[mt.LAYERGROUP] = i, e[mt.TARGET] = n.target, e[mt.VIEW] = n.view instanceof qt ? n.view : new qt();
  let s;
  n.controls !== void 0 && (Array.isArray(n.controls) ? s = new $t(n.controls.slice()) : (U(
    typeof /** @type {?} */
    n.controls.getArray == "function",
    "Expected `controls` to be an array or an `ol/Collection.js`"
  ), s = n.controls));
  let r;
  n.interactions !== void 0 && (Array.isArray(n.interactions) ? r = new $t(n.interactions.slice()) : (U(
    typeof /** @type {?} */
    n.interactions.getArray == "function",
    "Expected `interactions` to be an array or an `ol/Collection.js`"
  ), r = n.interactions));
  let o;
  return n.overlays !== void 0 ? Array.isArray(n.overlays) ? o = new $t(n.overlays.slice()) : (U(
    typeof /** @type {?} */
    n.overlays.getArray == "function",
    "Expected `overlays` to be an array or an `ol/Collection.js`"
  ), o = n.overlays) : o = new $t(), {
    controls: s,
    interactions: r,
    keyboardEventTarget: t,
    overlays: o,
    values: e
  };
}
const Ad = Cd;
class fi extends se {
  /**
   * @param {Geometry|ObjectWithGeometry<Geometry>} [geometryOrProperties]
   *     You may pass a Geometry object directly, or an object literal containing
   *     properties. If you pass an object literal, you may include a Geometry
   *     associated with a `geometry` key.
   */
  constructor(t) {
    if (super(), this.on, this.once, this.un, this.id_ = void 0, this.geometryName_ = "geometry", this.style_ = null, this.styleFunction_ = void 0, this.geometryChangeKey_ = null, this.addChangeListener(this.geometryName_, this.handleGeometryChanged_), t)
      if (typeof /** @type {?} */
      t.getSimplifiedGeometry == "function") {
        const e = (
          /** @type {Geometry} */
          t
        );
        this.setGeometry(e);
      } else {
        const e = t;
        this.setProperties(e);
      }
  }
  /**
   * Clone this feature. If the original feature has a geometry it
   * is also cloned. The feature id is not set in the clone.
   * @return {Feature<Geometry>} The clone.
   * @api
   */
  clone() {
    const t = (
      /** @type {Feature<Geometry>} */
      new fi(this.hasProperties() ? this.getProperties() : null)
    );
    t.setGeometryName(this.getGeometryName());
    const e = this.getGeometry();
    e && t.setGeometry(
      /** @type {Geometry} */
      e.clone()
    );
    const i = this.getStyle();
    return i && t.setStyle(i), t;
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
    this.geometryChangeKey_ && (it(this.geometryChangeKey_), this.geometryChangeKey_ = null);
    const t = this.getGeometry();
    t && (this.geometryChangeKey_ = j(
      t,
      N.CHANGE,
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
  setGeometry(t) {
    this.set(this.geometryName_, t);
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
  setStyle(t) {
    this.style_ = t, this.styleFunction_ = t ? Id(t) : void 0, this.changed();
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
  setId(t) {
    this.id_ = t, this.changed();
  }
  /**
   * Set the property name to be used when getting the feature's default geometry.
   * When calling {@link module:ol/Feature~Feature#getGeometry}, the value of the property with
   * this name will be returned.
   * @param {string} name The property name of the default geometry.
   * @api
   */
  setGeometryName(t) {
    this.removeChangeListener(this.geometryName_, this.handleGeometryChanged_), this.geometryName_ = t, this.addChangeListener(this.geometryName_, this.handleGeometryChanged_), this.handleGeometryChanged_();
  }
}
function Id(n) {
  if (typeof n == "function")
    return n;
  let t;
  return Array.isArray(n) ? t = n : (U(
    typeof /** @type {?} */
    n.getZIndex == "function",
    "Expected an `ol/style/Style` or an array of `ol/style/Style.js`"
  ), t = [
    /** @type {import("./style/Style.js").default} */
    n
  ]), function() {
    return t;
  };
}
function Js(n, t, e, i, s, r, o) {
  let a, l;
  const h = (e - t) / i;
  if (h === 1)
    a = t;
  else if (h === 2)
    a = t, l = s;
  else if (h !== 0) {
    let c = n[t], u = n[t + 1], d = 0;
    const f = [0];
    for (let _ = t + i; _ < e; _ += i) {
      const p = n[_], y = n[_ + 1];
      d += Math.sqrt((p - c) * (p - c) + (y - u) * (y - u)), f.push(d), c = p, u = y;
    }
    const g = s * d, m = pl(f, g);
    m < 0 ? (l = (g - f[-m - 2]) / (f[-m - 1] - f[-m - 2]), a = t + (-m - 2) * i) : a = t + m * i;
  }
  o = o > 1 ? o : 2, r = r || new Array(o);
  for (let c = 0; c < o; ++c)
    r[c] = a === void 0 ? NaN : l === void 0 ? n[a + c] : bt(n[a + c], n[a + i + c], l);
  return r;
}
function vd(n, t, e, i, s, r) {
  if (e == t)
    return null;
  let o;
  if (s < n[t + i - 1])
    return r ? (o = n.slice(t, t + i), o[i - 1] = s, o) : null;
  if (n[e - 1] < s)
    return r ? (o = n.slice(e - i, e), o[i - 1] = s, o) : null;
  if (s == n[t + i - 1])
    return n.slice(t, t + i);
  let a = t / i, l = e / i;
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
      bt(
        n[(a - 1) * i + d],
        n[a * i + d],
        u
      )
    );
  return o.push(s), o;
}
function el(n, t, e, i) {
  let s = n[t], r = n[t + 1], o = 0;
  for (let a = t + i; a < e; a += i) {
    const l = n[a], h = n[a + 1];
    o += Math.sqrt((l - s) * (l - s) + (h - r) * (h - r)), s = l, r = h;
  }
  return o;
}
class rn extends Jn {
  /**
   * @param {Array<import("../coordinate.js").Coordinate>|Array<number>} coordinates Coordinates.
   *     For internal use, flat coordinates in combination with `layout` are also accepted.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */
  constructor(t, e) {
    super(), this.flatMidpoint_ = null, this.flatMidpointRevision_ = -1, this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, e !== void 0 && !Array.isArray(t[0]) ? this.setFlatCoordinates(
      e,
      /** @type {Array<number>} */
      t
    ) : this.setCoordinates(
      /** @type {Array<import("../coordinate.js").Coordinate>} */
      t,
      e
    );
  }
  /**
   * Append the passed coordinate to the coordinates of the linestring.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @api
   */
  appendCoordinate(t) {
    Yn(this.flatCoordinates, t), this.changed();
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!LineString} Clone.
   * @api
   */
  clone() {
    const t = new rn(
      this.flatCoordinates.slice(),
      this.layout
    );
    return t.applyProperties(this), t;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(t, e, i, s) {
    return s < rr(this.getExtent(), t, e) ? s : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      _r(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), pr(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      this.maxDelta_,
      !1,
      t,
      e,
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
  forEachSegment(t) {
    return ga(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t
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
  getCoordinateAtM(t, e) {
    return this.layout != "XYM" && this.layout != "XYZM" ? null : (e = e !== void 0 ? e : !1, vd(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t,
      e
    ));
  }
  /**
   * Return the coordinates of the linestring.
   * @return {Array<import("../coordinate.js").Coordinate>} Coordinates.
   * @api
   */
  getCoordinates() {
    return Ue(
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
  getCoordinateAt(t, e) {
    return Js(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t,
      e,
      this.stride
    );
  }
  /**
   * Return the length of the linestring on projected plane.
   * @return {number} Length (on projected plane).
   * @api
   */
  getLength() {
    return el(
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
  getSimplifiedGeometryInternal(t) {
    const e = [];
    return e.length = $n(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t,
      e,
      0
    ), new rn(e, "XY");
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
  intersectsExtent(t) {
    return xr(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t
    );
  }
  /**
   * Set the coordinates of the linestring.
   * @param {!Array<import("../coordinate.js").Coordinate>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */
  setCoordinates(t, e) {
    this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = yr(
      this.flatCoordinates,
      0,
      t,
      this.stride
    ), this.changed();
  }
}
const L = {
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
}, Ln = [L.FILL], De = [L.STROKE], He = [L.BEGIN_PATH], zo = [L.CLOSE_PATH];
class il {
  /**
   * Render a geometry with a custom renderer.
   *
   * @param {import("../geom/SimpleGeometry.js").default} geometry Geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {Function} renderer Renderer.
   * @param {Function} hitDetectionRenderer Renderer.
   * @param {number} [index] Render order index.
   */
  drawCustom(t, e, i, s, r) {
  }
  /**
   * Render a geometry.
   *
   * @param {import("../geom/Geometry.js").default} geometry The geometry to render.
   */
  drawGeometry(t) {
  }
  /**
   * Set the rendering style.
   *
   * @param {import("../style/Style.js").default} style The rendering style.
   */
  setStyle(t) {
  }
  /**
   * @param {import("../geom/Circle.js").default} circleGeometry Circle geometry.
   * @param {import("../Feature.js").default} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawCircle(t, e, i) {
  }
  /**
   * @param {import("../Feature.js").default} feature Feature.
   * @param {import("../style/Style.js").default} style Style.
   * @param {number} [index] Render order index.
   */
  drawFeature(t, e, i) {
  }
  /**
   * @param {import("../geom/GeometryCollection.js").default} geometryCollectionGeometry Geometry collection.
   * @param {import("../Feature.js").default} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawGeometryCollection(t, e, i) {
  }
  /**
   * @param {import("../geom/LineString.js").default|import("./Feature.js").default} lineStringGeometry Line string geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawLineString(t, e, i) {
  }
  /**
   * @param {import("../geom/MultiLineString.js").default|import("./Feature.js").default} multiLineStringGeometry MultiLineString geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawMultiLineString(t, e, i) {
  }
  /**
   * @param {import("../geom/MultiPoint.js").default|import("./Feature.js").default} multiPointGeometry MultiPoint geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawMultiPoint(t, e, i) {
  }
  /**
   * @param {import("../geom/MultiPolygon.js").default} multiPolygonGeometry MultiPolygon geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawMultiPolygon(t, e, i) {
  }
  /**
   * @param {import("../geom/Point.js").default|import("./Feature.js").default} pointGeometry Point geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawPoint(t, e, i) {
  }
  /**
   * @param {import("../geom/Polygon.js").default|import("./Feature.js").default} polygonGeometry Polygon geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawPolygon(t, e, i) {
  }
  /**
   * @param {import("../geom/SimpleGeometry.js").default|import("./Feature.js").default} geometry Geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawText(t, e, i) {
  }
  /**
   * @param {import("../style/Fill.js").default} fillStyle Fill style.
   * @param {import("../style/Stroke.js").default} strokeStyle Stroke style.
   */
  setFillStrokeStyle(t, e) {
  }
  /**
   * @param {import("../style/Image.js").default} imageStyle Image style.
   * @param {import("../render/canvas.js").DeclutterImageWithText} [declutterImageWithText] Shared data for combined decluttering with a text style.
   */
  setImageStyle(t, e) {
  }
  /**
   * @param {import("../style/Text.js").default} textStyle Text style.
   * @param {import("../render/canvas.js").DeclutterImageWithText} [declutterImageWithText] Shared data for combined decluttering with an image style.
   */
  setTextStyle(t, e) {
  }
}
class gn extends il {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(t, e, i, s) {
    super(), this.tolerance = t, this.maxExtent = e, this.pixelRatio = s, this.maxLineWidth = 0, this.resolution = i, this.beginGeometryInstruction1_ = null, this.beginGeometryInstruction2_ = null, this.bufferedMaxExtent_ = null, this.instructions = [], this.coordinates = [], this.tmpCoordinate_ = [], this.hitDetectionInstructions = [], this.state = /** @type {import("../canvas.js").FillStrokeState} */
    {};
  }
  /**
   * @protected
   * @param {Array<number>} dashArray Dash array.
   * @return {Array<number>} Dash array with pixel ratio applied
   */
  applyPixelRatio(t) {
    const e = this.pixelRatio;
    return e == 1 ? t : t.map(function(i) {
      return i * e;
    });
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} stride Stride.
   * @protected
   * @return {number} My end
   */
  appendFlatPointCoordinates(t, e) {
    const i = this.getBufferedMaxExtent(), s = this.tmpCoordinate_, r = this.coordinates;
    let o = r.length;
    for (let a = 0, l = t.length; a < l; a += e)
      s[0] = t[a], s[1] = t[a + 1], Ci(i, s) && (r[o++] = s[0], r[o++] = s[1]);
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
  appendFlatLineCoordinates(t, e, i, s, r, o) {
    const a = this.coordinates;
    let l = a.length;
    const h = this.getBufferedMaxExtent();
    o && (e += s);
    let c = t[e], u = t[e + 1];
    const d = this.tmpCoordinate_;
    let f = !0, g, m, _;
    for (g = e + s; g < i; g += s)
      d[0] = t[g], d[1] = t[g + 1], _ = Ns(h, d), _ !== m ? (f && (a[l++] = c, a[l++] = u, f = !1), a[l++] = d[0], a[l++] = d[1]) : _ === ct.INTERSECTING ? (a[l++] = d[0], a[l++] = d[1], f = !1) : f = !0, c = d[0], u = d[1], m = _;
    return (r && f || g === e + s) && (a[l++] = c, a[l++] = u), l;
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {Array<number>} ends Ends.
   * @param {number} stride Stride.
   * @param {Array<number>} builderEnds Builder ends.
   * @return {number} Offset.
   */
  drawCustomCoordinates_(t, e, i, s, r) {
    for (let o = 0, a = i.length; o < a; ++o) {
      const l = i[o], h = this.appendFlatLineCoordinates(
        t,
        e,
        l,
        s,
        !1,
        !1
      );
      r.push(h), e = l;
    }
    return e;
  }
  /**
   * @param {import("../../geom/SimpleGeometry.js").default} geometry Geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {Function} renderer Renderer.
   * @param {Function} hitDetectionRenderer Renderer.
   * @param {number} [index] Render order index.
   */
  drawCustom(t, e, i, s, r) {
    this.beginGeometry(t, e, r);
    const o = t.getType(), a = t.getStride(), l = this.coordinates.length;
    let h, c, u, d, f;
    switch (o) {
      case "MultiPolygon":
        h = /** @type {import("../../geom/MultiPolygon.js").default} */
        t.getOrientedFlatCoordinates(), d = [];
        const g = (
          /** @type {import("../../geom/MultiPolygon.js").default} */
          t.getEndss()
        );
        f = 0;
        for (let m = 0, _ = g.length; m < _; ++m) {
          const p = [];
          f = this.drawCustomCoordinates_(
            h,
            f,
            g[m],
            a,
            p
          ), d.push(p);
        }
        this.instructions.push([
          L.CUSTOM,
          l,
          d,
          t,
          i,
          fo,
          r
        ]), this.hitDetectionInstructions.push([
          L.CUSTOM,
          l,
          d,
          t,
          s || i,
          fo,
          r
        ]);
        break;
      case "Polygon":
      case "MultiLineString":
        u = [], h = o == "Polygon" ? (
          /** @type {import("../../geom/Polygon.js").default} */
          t.getOrientedFlatCoordinates()
        ) : t.getFlatCoordinates(), f = this.drawCustomCoordinates_(
          h,
          0,
          /** @type {import("../../geom/Polygon.js").default|import("../../geom/MultiLineString.js").default} */
          t.getEnds(),
          a,
          u
        ), this.instructions.push([
          L.CUSTOM,
          l,
          u,
          t,
          i,
          Fn,
          r
        ]), this.hitDetectionInstructions.push([
          L.CUSTOM,
          l,
          u,
          t,
          s || i,
          Fn,
          r
        ]);
        break;
      case "LineString":
      case "Circle":
        h = t.getFlatCoordinates(), c = this.appendFlatLineCoordinates(
          h,
          0,
          h.length,
          a,
          !1,
          !1
        ), this.instructions.push([
          L.CUSTOM,
          l,
          c,
          t,
          i,
          Ue,
          r
        ]), this.hitDetectionInstructions.push([
          L.CUSTOM,
          l,
          c,
          t,
          s || i,
          Ue,
          r
        ]);
        break;
      case "MultiPoint":
        h = t.getFlatCoordinates(), c = this.appendFlatPointCoordinates(h, a), c > l && (this.instructions.push([
          L.CUSTOM,
          l,
          c,
          t,
          i,
          Ue,
          r
        ]), this.hitDetectionInstructions.push([
          L.CUSTOM,
          l,
          c,
          t,
          s || i,
          Ue,
          r
        ]));
        break;
      case "Point":
        h = t.getFlatCoordinates(), this.coordinates.push(h[0], h[1]), c = this.coordinates.length, this.instructions.push([
          L.CUSTOM,
          l,
          c,
          t,
          i,
          void 0,
          r
        ]), this.hitDetectionInstructions.push([
          L.CUSTOM,
          l,
          c,
          t,
          s || i,
          void 0,
          r
        ]);
        break;
    }
    this.endGeometry(e);
  }
  /**
   * @protected
   * @param {import("../../geom/Geometry").default|import("../Feature.js").default} geometry The geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} index Render order index
   */
  beginGeometry(t, e, i) {
    this.beginGeometryInstruction1_ = [
      L.BEGIN_GEOMETRY,
      e,
      0,
      t,
      i
    ], this.instructions.push(this.beginGeometryInstruction1_), this.beginGeometryInstruction2_ = [
      L.BEGIN_GEOMETRY,
      e,
      0,
      t,
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
    const t = this.hitDetectionInstructions;
    t.reverse();
    let e;
    const i = t.length;
    let s, r, o = -1;
    for (e = 0; e < i; ++e)
      s = t[e], r = /** @type {import("./Instruction.js").default} */
      s[0], r == L.END_GEOMETRY ? o = e : r == L.BEGIN_GEOMETRY && (s[2] = e, yl(this.hitDetectionInstructions, o, e), o = -1);
  }
  /**
   * @param {import("../../style/Fill.js").default} fillStyle Fill style.
   * @param {import("../../style/Stroke.js").default} strokeStyle Stroke style.
   */
  setFillStrokeStyle(t, e) {
    const i = this.state;
    if (t) {
      const s = t.getColor();
      i.fillPatternScale = s && typeof s == "object" && "src" in s ? this.pixelRatio : 1, i.fillStyle = ee(
        s || vt
      );
    } else
      i.fillStyle = void 0;
    if (e) {
      const s = e.getColor();
      i.strokeStyle = ee(
        s || Ji
      );
      const r = e.getLineCap();
      i.lineCap = r !== void 0 ? r : wi;
      const o = e.getLineDash();
      i.lineDash = o ? o.slice() : me;
      const a = e.getLineDashOffset();
      i.lineDashOffset = a || _e;
      const l = e.getLineJoin();
      i.lineJoin = l !== void 0 ? l : Ai;
      const h = e.getWidth();
      i.lineWidth = h !== void 0 ? h : tn;
      const c = e.getMiterLimit();
      i.miterLimit = c !== void 0 ? c : qi, i.lineWidth > this.maxLineWidth && (this.maxLineWidth = i.lineWidth, this.bufferedMaxExtent_ = null);
    } else
      i.strokeStyle = void 0, i.lineCap = void 0, i.lineDash = null, i.lineDashOffset = void 0, i.lineJoin = void 0, i.lineWidth = void 0, i.miterLimit = void 0;
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @return {Array<*>} Fill instruction.
   */
  createFill(t) {
    const e = t.fillStyle, i = [L.SET_FILL_STYLE, e];
    return typeof e != "string" && i.push(t.fillPatternScale), i;
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   */
  applyStroke(t) {
    this.instructions.push(this.createStroke(t));
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @return {Array<*>} Stroke instruction.
   */
  createStroke(t) {
    return [
      L.SET_STROKE_STYLE,
      t.strokeStyle,
      t.lineWidth * this.pixelRatio,
      t.lineCap,
      t.lineJoin,
      t.miterLimit,
      this.applyPixelRatio(t.lineDash),
      t.lineDashOffset * this.pixelRatio
    ];
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @param {function(this:CanvasBuilder, import("../canvas.js").FillStrokeState):Array<*>} createFill Create fill.
   */
  updateFillStyle(t, e) {
    const i = t.fillStyle;
    (typeof i != "string" || t.currentFillStyle != i) && (i !== void 0 && this.instructions.push(e.call(this, t)), t.currentFillStyle = i);
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @param {function(this:CanvasBuilder, import("../canvas.js").FillStrokeState): void} applyStroke Apply stroke.
   */
  updateStrokeStyle(t, e) {
    const i = t.strokeStyle, s = t.lineCap, r = t.lineDash, o = t.lineDashOffset, a = t.lineJoin, l = t.lineWidth, h = t.miterLimit;
    (t.currentStrokeStyle != i || t.currentLineCap != s || r != t.currentLineDash && !Ne(t.currentLineDash, r) || t.currentLineDashOffset != o || t.currentLineJoin != a || t.currentLineWidth != l || t.currentMiterLimit != h) && (i !== void 0 && e.call(this, t), t.currentStrokeStyle = i, t.currentLineCap = s, t.currentLineDash = r, t.currentLineDashOffset = o, t.currentLineJoin = a, t.currentLineWidth = l, t.currentMiterLimit = h);
  }
  /**
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  endGeometry(t) {
    this.beginGeometryInstruction1_[2] = this.instructions.length, this.beginGeometryInstruction1_ = null, this.beginGeometryInstruction2_[2] = this.hitDetectionInstructions.length, this.beginGeometryInstruction2_ = null;
    const e = [L.END_GEOMETRY, t];
    this.instructions.push(e), this.hitDetectionInstructions.push(e);
  }
  /**
   * Get the buffered rendering extent.  Rendering will be clipped to the extent
   * provided to the constructor.  To account for symbolizers that may intersect
   * this extent, we calculate a buffered extent (e.g. based on stroke width).
   * @return {import("../../extent.js").Extent} The buffered rendering extent.
   * @protected
   */
  getBufferedMaxExtent() {
    if (!this.bufferedMaxExtent_ && (this.bufferedMaxExtent_ = $o(this.maxExtent), this.maxLineWidth > 0)) {
      const t = this.resolution * (this.maxLineWidth + 1) / 2;
      sr(this.bufferedMaxExtent_, t, this.bufferedMaxExtent_);
    }
    return this.bufferedMaxExtent_;
  }
}
class Rd extends gn {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(t, e, i, s) {
    super(t, e, i, s), this.hitDetectionImage_ = null, this.image_ = null, this.imagePixelRatio_ = void 0, this.anchorX_ = void 0, this.anchorY_ = void 0, this.height_ = void 0, this.opacity_ = void 0, this.originX_ = void 0, this.originY_ = void 0, this.rotateWithView_ = void 0, this.rotation_ = void 0, this.scale_ = void 0, this.width_ = void 0, this.declutterMode_ = void 0, this.declutterImageWithText_ = void 0;
  }
  /**
   * @param {import("../../geom/Point.js").default|import("../Feature.js").default} pointGeometry Point geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawPoint(t, e, i) {
    if (!this.image_ || this.maxExtent && !Ci(this.maxExtent, t.getFlatCoordinates()))
      return;
    this.beginGeometry(t, e, i);
    const s = t.getFlatCoordinates(), r = t.getStride(), o = this.coordinates.length, a = this.appendFlatPointCoordinates(s, r);
    this.instructions.push([
      L.DRAW_IMAGE,
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
      L.DRAW_IMAGE,
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
    ]), this.endGeometry(e);
  }
  /**
   * @param {import("../../geom/MultiPoint.js").default|import("../Feature.js").default} multiPointGeometry MultiPoint geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawMultiPoint(t, e, i) {
    if (!this.image_)
      return;
    this.beginGeometry(t, e, i);
    const s = t.getFlatCoordinates(), r = [];
    for (let l = 0, h = s.length; l < h; l += t.getStride())
      (!this.maxExtent || Ci(this.maxExtent, s.slice(l, l + 2))) && r.push(
        s[l],
        s[l + 1]
      );
    const o = this.coordinates.length, a = this.appendFlatPointCoordinates(r, 2);
    this.instructions.push([
      L.DRAW_IMAGE,
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
      L.DRAW_IMAGE,
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
    ]), this.endGeometry(e);
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
  setImageStyle(t, e) {
    const i = t.getAnchor(), s = t.getSize(), r = t.getOrigin();
    this.imagePixelRatio_ = t.getPixelRatio(this.pixelRatio), this.anchorX_ = i[0], this.anchorY_ = i[1], this.hitDetectionImage_ = t.getHitDetectionImage(), this.image_ = t.getImage(this.pixelRatio), this.height_ = s[1], this.opacity_ = t.getOpacity(), this.originX_ = r[0], this.originY_ = r[1], this.rotateWithView_ = t.getRotateWithView(), this.rotation_ = t.getRotation(), this.scale_ = t.getScaleArray(), this.width_ = s[0], this.declutterMode_ = t.getDeclutterMode(), this.declutterImageWithText_ = e;
  }
}
const Td = Rd;
class Sd extends gn {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(t, e, i, s) {
    super(t, e, i, s);
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @private
   * @return {number} end.
   */
  drawFlatCoordinates_(t, e, i, s) {
    const r = this.coordinates.length, o = this.appendFlatLineCoordinates(
      t,
      e,
      i,
      s,
      !1,
      !1
    ), a = [
      L.MOVE_TO_LINE_TO,
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
  drawLineString(t, e, i) {
    const s = this.state, r = s.strokeStyle, o = s.lineWidth;
    if (r === void 0 || o === void 0)
      return;
    this.updateStrokeStyle(s, this.applyStroke), this.beginGeometry(t, e, i), this.hitDetectionInstructions.push(
      [
        L.SET_STROKE_STYLE,
        s.strokeStyle,
        s.lineWidth,
        s.lineCap,
        s.lineJoin,
        s.miterLimit,
        me,
        _e
      ],
      He
    );
    const a = t.getFlatCoordinates(), l = t.getStride();
    this.drawFlatCoordinates_(
      a,
      0,
      a.length,
      l
    ), this.hitDetectionInstructions.push(De), this.endGeometry(e);
  }
  /**
   * @param {import("../../geom/MultiLineString.js").default|import("../Feature.js").default} multiLineStringGeometry MultiLineString geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawMultiLineString(t, e, i) {
    const s = this.state, r = s.strokeStyle, o = s.lineWidth;
    if (r === void 0 || o === void 0)
      return;
    this.updateStrokeStyle(s, this.applyStroke), this.beginGeometry(t, e, i), this.hitDetectionInstructions.push(
      [
        L.SET_STROKE_STYLE,
        s.strokeStyle,
        s.lineWidth,
        s.lineCap,
        s.lineJoin,
        s.miterLimit,
        me,
        _e
      ],
      He
    );
    const a = t.getEnds(), l = t.getFlatCoordinates(), h = t.getStride();
    let c = 0;
    for (let u = 0, d = a.length; u < d; ++u)
      c = this.drawFlatCoordinates_(
        l,
        c,
        /** @type {number} */
        a[u],
        h
      );
    this.hitDetectionInstructions.push(De), this.endGeometry(e);
  }
  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   */
  finish() {
    const t = this.state;
    return t.lastStroke != null && t.lastStroke != this.coordinates.length && this.instructions.push(De), this.reverseHitDetectionInstructions(), this.state = null, super.finish();
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   */
  applyStroke(t) {
    t.lastStroke != null && t.lastStroke != this.coordinates.length && (this.instructions.push(De), t.lastStroke = this.coordinates.length), t.lastStroke = 0, super.applyStroke(t), this.instructions.push(He);
  }
}
const Md = Sd;
class Ld extends gn {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(t, e, i, s) {
    super(t, e, i, s);
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {Array<number>} ends Ends.
   * @param {number} stride Stride.
   * @private
   * @return {number} End.
   */
  drawFlatCoordinatess_(t, e, i, s) {
    const r = this.state, o = r.fillStyle !== void 0, a = r.strokeStyle !== void 0, l = i.length;
    this.instructions.push(He), this.hitDetectionInstructions.push(He);
    for (let h = 0; h < l; ++h) {
      const c = i[h], u = this.coordinates.length, d = this.appendFlatLineCoordinates(
        t,
        e,
        c,
        s,
        !0,
        !a
      ), f = [
        L.MOVE_TO_LINE_TO,
        u,
        d
      ];
      this.instructions.push(f), this.hitDetectionInstructions.push(f), a && (this.instructions.push(zo), this.hitDetectionInstructions.push(zo)), e = c;
    }
    return o && (this.instructions.push(Ln), this.hitDetectionInstructions.push(Ln)), a && (this.instructions.push(De), this.hitDetectionInstructions.push(De)), e;
  }
  /**
   * @param {import("../../geom/Circle.js").default} circleGeometry Circle geometry.
   * @param {import("../../Feature.js").default} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawCircle(t, e, i) {
    const s = this.state, r = s.fillStyle, o = s.strokeStyle;
    if (r === void 0 && o === void 0)
      return;
    this.setFillStrokeStyles_(), this.beginGeometry(t, e, i), s.fillStyle !== void 0 && this.hitDetectionInstructions.push([
      L.SET_FILL_STYLE,
      vt
    ]), s.strokeStyle !== void 0 && this.hitDetectionInstructions.push([
      L.SET_STROKE_STYLE,
      s.strokeStyle,
      s.lineWidth,
      s.lineCap,
      s.lineJoin,
      s.miterLimit,
      me,
      _e
    ]);
    const a = t.getFlatCoordinates(), l = t.getStride(), h = this.coordinates.length;
    this.appendFlatLineCoordinates(
      a,
      0,
      a.length,
      l,
      !1,
      !1
    );
    const c = [L.CIRCLE, h];
    this.instructions.push(He, c), this.hitDetectionInstructions.push(He, c), s.fillStyle !== void 0 && (this.instructions.push(Ln), this.hitDetectionInstructions.push(Ln)), s.strokeStyle !== void 0 && (this.instructions.push(De), this.hitDetectionInstructions.push(De)), this.endGeometry(e);
  }
  /**
   * @param {import("../../geom/Polygon.js").default|import("../Feature.js").default} polygonGeometry Polygon geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawPolygon(t, e, i) {
    const s = this.state, r = s.fillStyle, o = s.strokeStyle;
    if (r === void 0 && o === void 0)
      return;
    this.setFillStrokeStyles_(), this.beginGeometry(t, e, i), s.fillStyle !== void 0 && this.hitDetectionInstructions.push([
      L.SET_FILL_STYLE,
      vt
    ]), s.strokeStyle !== void 0 && this.hitDetectionInstructions.push([
      L.SET_STROKE_STYLE,
      s.strokeStyle,
      s.lineWidth,
      s.lineCap,
      s.lineJoin,
      s.miterLimit,
      me,
      _e
    ]);
    const a = t.getEnds(), l = t.getOrientedFlatCoordinates(), h = t.getStride();
    this.drawFlatCoordinatess_(
      l,
      0,
      /** @type {Array<number>} */
      a,
      h
    ), this.endGeometry(e);
  }
  /**
   * @param {import("../../geom/MultiPolygon.js").default} multiPolygonGeometry MultiPolygon geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawMultiPolygon(t, e, i) {
    const s = this.state, r = s.fillStyle, o = s.strokeStyle;
    if (r === void 0 && o === void 0)
      return;
    this.setFillStrokeStyles_(), this.beginGeometry(t, e, i), s.fillStyle !== void 0 && this.hitDetectionInstructions.push([
      L.SET_FILL_STYLE,
      vt
    ]), s.strokeStyle !== void 0 && this.hitDetectionInstructions.push([
      L.SET_STROKE_STYLE,
      s.strokeStyle,
      s.lineWidth,
      s.lineCap,
      s.lineJoin,
      s.miterLimit,
      me,
      _e
    ]);
    const a = t.getEndss(), l = t.getOrientedFlatCoordinates(), h = t.getStride();
    let c = 0;
    for (let u = 0, d = a.length; u < d; ++u)
      c = this.drawFlatCoordinatess_(
        l,
        c,
        a[u],
        h
      );
    this.endGeometry(e);
  }
  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   */
  finish() {
    this.reverseHitDetectionInstructions(), this.state = null;
    const t = this.tolerance;
    if (t !== 0) {
      const e = this.coordinates;
      for (let i = 0, s = e.length; i < s; ++i)
        e[i] = Ye(e[i], t);
    }
    return super.finish();
  }
  /**
   * @private
   */
  setFillStrokeStyles_() {
    const t = this.state;
    t.fillStyle !== void 0 && this.updateFillStyle(t, this.createFill), t.strokeStyle !== void 0 && this.updateStrokeStyle(t, this.applyStroke);
  }
}
const Xo = Ld;
function bd(n, t, e, i, s) {
  const r = [];
  let o = e, a = 0, l = t.slice(e, 2);
  for (; a < n && o + s < i; ) {
    const [h, c] = l.slice(-2), u = t[o + s], d = t[o + s + 1], f = Math.sqrt(
      (u - h) * (u - h) + (d - c) * (d - c)
    );
    if (a += f, a >= n) {
      const g = (n - a + f) / f, m = bt(h, u, g), _ = bt(c, d, g);
      l.push(m, _), r.push(l), l = [m, _], a == n && (o += s), a = 0;
    } else if (a < n)
      l.push(
        t[o + s],
        t[o + s + 1]
      ), o += s;
    else {
      const g = f - a, m = bt(h, u, g / f), _ = bt(c, d, g / f);
      l.push(m, _), r.push(l), l = [m, _], a = 0, o += s;
    }
  }
  return a > 0 && r.push(l), r;
}
function Dd(n, t, e, i, s) {
  let r = e, o = e, a = 0, l = 0, h = e, c, u, d, f, g, m, _, p, y, C;
  for (u = e; u < i; u += s) {
    const E = t[u], x = t[u + 1];
    g !== void 0 && (y = E - g, C = x - m, f = Math.sqrt(y * y + C * C), _ !== void 0 && (l += d, c = Math.acos((_ * y + p * C) / (d * f)), c > n && (l > a && (a = l, r = h, o = u), l = 0, h = u - s)), d = f, _ = y, p = C), g = E, m = x;
  }
  return l += f, l > a ? [h, u] : [r, o];
}
const Xn = {
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
class Pd extends gn {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(t, e, i, s) {
    super(t, e, i, s), this.labels_ = null, this.text_ = "", this.textOffsetX_ = 0, this.textOffsetY_ = 0, this.textRotateWithView_ = void 0, this.textRotation_ = 0, this.textFillState_ = null, this.fillStates = {}, this.fillStates[vt] = { fillStyle: vt }, this.textStrokeState_ = null, this.strokeStates = {}, this.textState_ = /** @type {import("../canvas.js").TextState} */
    {}, this.textStates = {}, this.textKey_ = "", this.fillKey_ = "", this.strokeKey_ = "", this.declutterMode_ = void 0, this.declutterImageWithText_ = void 0;
  }
  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   */
  finish() {
    const t = super.finish();
    return t.textStates = this.textStates, t.fillStates = this.fillStates, t.strokeStates = this.strokeStates, t;
  }
  /**
   * @param {import("../../geom/SimpleGeometry.js").default|import("../Feature.js").default} geometry Geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawText(t, e, i) {
    const s = this.textFillState_, r = this.textStrokeState_, o = this.textState_;
    if (this.text_ === "" || !o || !s && !r)
      return;
    const a = this.coordinates;
    let l = a.length;
    const h = t.getType();
    let c = null, u = t.getStride();
    if (o.placement === "line" && (h == "LineString" || h == "MultiLineString" || h == "Polygon" || h == "MultiPolygon")) {
      if (!Rt(this.maxExtent, t.getExtent()))
        return;
      let d;
      if (c = t.getFlatCoordinates(), h == "LineString")
        d = [c.length];
      else if (h == "MultiLineString")
        d = /** @type {import("../../geom/MultiLineString.js").default} */
        t.getEnds();
      else if (h == "Polygon")
        d = /** @type {import("../../geom/Polygon.js").default} */
        t.getEnds().slice(0, 1);
      else if (h == "MultiPolygon") {
        const _ = (
          /** @type {import("../../geom/MultiPolygon.js").default} */
          t.getEndss()
        );
        d = [];
        for (let p = 0, y = _.length; p < y; ++p)
          d.push(_[p][0]);
      }
      this.beginGeometry(t, e, i);
      const f = o.repeat, g = f ? void 0 : o.textAlign;
      let m = 0;
      for (let _ = 0, p = d.length; _ < p; ++_) {
        let y;
        f ? y = bd(
          f * this.resolution,
          c,
          m,
          d[_],
          u
        ) : y = [c.slice(m, d[_])];
        for (let C = 0, E = y.length; C < E; ++C) {
          const x = y[C];
          let v = 0, T = x.length;
          if (g == null) {
            const w = Dd(
              o.maxAngle,
              x,
              0,
              x.length,
              2
            );
            v = w[0], T = w[1];
          }
          for (let w = v; w < T; w += u)
            a.push(x[w], x[w + 1]);
          const I = a.length;
          m = d[_], this.drawChars_(l, I), l = I;
        }
      }
      this.endGeometry(e);
    } else {
      let d = o.overflow ? null : [];
      switch (h) {
        case "Point":
        case "MultiPoint":
          c = /** @type {import("../../geom/MultiPoint.js").default} */
          t.getFlatCoordinates();
          break;
        case "LineString":
          c = /** @type {import("../../geom/LineString.js").default} */
          t.getFlatMidpoint();
          break;
        case "Circle":
          c = /** @type {import("../../geom/Circle.js").default} */
          t.getCenter();
          break;
        case "MultiLineString":
          c = /** @type {import("../../geom/MultiLineString.js").default} */
          t.getFlatMidpoints(), u = 2;
          break;
        case "Polygon":
          c = /** @type {import("../../geom/Polygon.js").default} */
          t.getFlatInteriorPoint(), o.overflow || d.push(c[2] / this.resolution), u = 3;
          break;
        case "MultiPolygon":
          const y = (
            /** @type {import("../../geom/MultiPolygon.js").default} */
            t.getFlatInteriorPoints()
          );
          c = [];
          for (let C = 0, E = y.length; C < E; C += 3)
            o.overflow || d.push(y[C + 2] / this.resolution), c.push(y[C], y[C + 1]);
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
        d = d.filter((C, E) => {
          const x = a[(y + E) * 2] === c[E * u] && a[(y + E) * 2 + 1] === c[E * u + 1];
          return x || --y, x;
        });
      }
      this.saveTextStates_(), (o.backgroundFill || o.backgroundStroke) && (this.setFillStrokeStyle(
        o.backgroundFill,
        o.backgroundStroke
      ), o.backgroundFill && this.updateFillStyle(this.state, this.createFill), o.backgroundStroke && (this.updateStrokeStyle(this.state, this.applyStroke), this.hitDetectionInstructions.push(this.createStroke(this.state)))), this.beginGeometry(t, e, i);
      let g = o.padding;
      if (g != Ze && (o.scale[0] < 0 || o.scale[1] < 0)) {
        let y = o.padding[0], C = o.padding[1], E = o.padding[2], x = o.padding[3];
        o.scale[0] < 0 && (C = -C, x = -x), o.scale[1] < 0 && (y = -y, E = -E), g = [y, C, E, x];
      }
      const m = this.pixelRatio;
      this.instructions.push([
        L.DRAW_IMAGE,
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
        g == Ze ? Ze : g.map(function(y) {
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
      const _ = 1 / m, p = this.state.fillStyle;
      o.backgroundFill && (this.state.fillStyle = vt, this.hitDetectionInstructions.push(this.createFill(this.state))), this.hitDetectionInstructions.push([
        L.DRAW_IMAGE,
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
        [_, _],
        NaN,
        this.declutterMode_,
        this.declutterImageWithText_,
        g,
        !!o.backgroundFill,
        !!o.backgroundStroke,
        this.text_,
        this.textKey_,
        this.strokeKey_,
        this.fillKey_ ? vt : this.fillKey_,
        this.textOffsetX_,
        this.textOffsetY_,
        d
      ]), o.backgroundFill && (this.state.fillStyle = p, this.hitDetectionInstructions.push(this.createFill(this.state))), this.endGeometry(e);
    }
  }
  /**
   * @private
   */
  saveTextStates_() {
    const t = this.textStrokeState_, e = this.textState_, i = this.textFillState_, s = this.strokeKey_;
    t && (s in this.strokeStates || (this.strokeStates[s] = {
      strokeStyle: t.strokeStyle,
      lineCap: t.lineCap,
      lineDashOffset: t.lineDashOffset,
      lineWidth: t.lineWidth,
      lineJoin: t.lineJoin,
      miterLimit: t.miterLimit,
      lineDash: t.lineDash
    }));
    const r = this.textKey_;
    r in this.textStates || (this.textStates[r] = {
      font: e.font,
      textAlign: e.textAlign || $i,
      justify: e.justify,
      textBaseline: e.textBaseline || Nn,
      scale: e.scale
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
  drawChars_(t, e) {
    const i = this.textStrokeState_, s = this.textState_, r = this.strokeKey_, o = this.textKey_, a = this.fillKey_;
    this.saveTextStates_();
    const l = this.pixelRatio, h = Xn[s.textBaseline], c = this.textOffsetY_ * l, u = this.text_, d = i ? i.lineWidth * Math.abs(s.scale[0]) / 2 : 0;
    this.instructions.push([
      L.DRAW_CHARS,
      t,
      e,
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
      L.DRAW_CHARS,
      t,
      e,
      h,
      s.overflow,
      a && vt,
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
  setTextStyle(t, e) {
    let i, s, r;
    if (!t)
      this.text_ = "";
    else {
      const o = t.getFill();
      o ? (s = this.textFillState_, s || (s = /** @type {import("../canvas.js").FillState} */
      {}, this.textFillState_ = s), s.fillStyle = ee(
        o.getColor() || vt
      )) : (s = null, this.textFillState_ = s);
      const a = t.getStroke();
      if (!a)
        r = null, this.textStrokeState_ = r;
      else {
        r = this.textStrokeState_, r || (r = /** @type {import("../canvas.js").StrokeState} */
        {}, this.textStrokeState_ = r);
        const g = a.getLineDash(), m = a.getLineDashOffset(), _ = a.getWidth(), p = a.getMiterLimit();
        r.lineCap = a.getLineCap() || wi, r.lineDash = g ? g.slice() : me, r.lineDashOffset = m === void 0 ? _e : m, r.lineJoin = a.getLineJoin() || Ai, r.lineWidth = _ === void 0 ? tn : _, r.miterLimit = p === void 0 ? qi : p, r.strokeStyle = ee(
          a.getColor() || Ji
        );
      }
      i = this.textState_;
      const l = t.getFont() || Ga;
      zc(l);
      const h = t.getScaleArray();
      i.overflow = t.getOverflow(), i.font = l, i.maxAngle = t.getMaxAngle(), i.placement = t.getPlacement(), i.textAlign = t.getTextAlign(), i.repeat = t.getRepeat(), i.justify = t.getJustify(), i.textBaseline = t.getTextBaseline() || Nn, i.backgroundFill = t.getBackgroundFill(), i.backgroundStroke = t.getBackgroundStroke(), i.padding = t.getPadding() || Ze, i.scale = h === void 0 ? [1, 1] : h;
      const c = t.getOffsetX(), u = t.getOffsetY(), d = t.getRotateWithView(), f = t.getRotation();
      this.text_ = t.getText() || "", this.textOffsetX_ = c === void 0 ? 0 : c, this.textOffsetY_ = u === void 0 ? 0 : u, this.textRotateWithView_ = d === void 0 ? !1 : d, this.textRotation_ = f === void 0 ? 0 : f, this.strokeKey_ = r ? (typeof r.strokeStyle == "string" ? r.strokeStyle : Q(r.strokeStyle)) + r.lineCap + r.lineDashOffset + "|" + r.lineWidth + r.lineJoin + r.miterLimit + "[" + r.lineDash.join() + "]" : "", this.textKey_ = i.font + i.scale + (i.textAlign || "?") + (i.repeat || "?") + (i.justify || "?") + (i.textBaseline || "?"), this.fillKey_ = s && s.fillStyle ? typeof s.fillStyle == "string" ? s.fillStyle : "|" + Q(s.fillStyle) : "";
    }
    this.declutterMode_ = t.getDeclutterMode(), this.declutterImageWithText_ = e;
  }
}
const Od = {
  Circle: Xo,
  Default: gn,
  Image: Td,
  LineString: Md,
  Polygon: Xo,
  Text: Pd
};
class kd {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Max extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(t, e, i, s) {
    this.tolerance_ = t, this.maxExtent_ = e, this.pixelRatio_ = s, this.resolution_ = i, this.buildersByZIndex_ = {};
  }
  /**
   * @return {!Object<string, !Object<import("../canvas.js").BuilderType, import("./Builder.js").SerializableInstructions>>} The serializable instructions
   */
  finish() {
    const t = {};
    for (const e in this.buildersByZIndex_) {
      t[e] = t[e] || {};
      const i = this.buildersByZIndex_[e];
      for (const s in i) {
        const r = i[s].finish();
        t[e][s] = r;
      }
    }
    return t;
  }
  /**
   * @param {number|undefined} zIndex Z index.
   * @param {import("../canvas.js").BuilderType} builderType Replay type.
   * @return {import("../VectorContext.js").default} Replay.
   */
  getBuilder(t, e) {
    const i = t !== void 0 ? t.toString() : "0";
    let s = this.buildersByZIndex_[i];
    s === void 0 && (s = {}, this.buildersByZIndex_[i] = s);
    let r = s[e];
    if (r === void 0) {
      const o = Od[e];
      r = new o(
        this.tolerance_,
        this.maxExtent_,
        this.resolution_,
        this.pixelRatio_
      ), s[e] = r;
    }
    return r;
  }
}
function Fd(n, t, e, i, s, r, o, a, l, h, c, u) {
  let d = n[t], f = n[t + 1], g = 0, m = 0, _ = 0, p = 0;
  function y() {
    g = d, m = f, t += i, d = n[t], f = n[t + 1], p += _, _ = Math.sqrt((d - g) * (d - g) + (f - m) * (f - m));
  }
  do
    y();
  while (t < e - i && p + _ < r);
  let C = _ === 0 ? 0 : (r - p) / _;
  const E = bt(g, d, C), x = bt(m, f, C), v = t - i, T = p, I = r + a * l(h, s, c);
  for (; t < e - i && p + _ < I; )
    y();
  C = _ === 0 ? 0 : (I - p) / _;
  const w = bt(g, d, C), D = bt(m, f, C);
  let P;
  if (u) {
    const S = [E, x, w, D];
    ca(S, 0, 4, 2, u, S, S), P = S[0] > S[2];
  } else
    P = E > w;
  const k = Math.PI, Y = [], B = v + i === t;
  t = v, _ = 0, p = T, d = n[t], f = n[t + 1];
  let W;
  if (B) {
    y(), W = Math.atan2(f - m, d - g), P && (W += W > 0 ? -k : k);
    const S = (w + E) / 2, O = (D + x) / 2;
    return Y[0] = [S, O, (I - r) / 2, W, s], Y;
  }
  s = s.replace(/\n/g, " ");
  for (let S = 0, O = s.length; S < O; ) {
    y();
    let G = Math.atan2(f - m, d - g);
    if (P && (G += G > 0 ? -k : k), W !== void 0) {
      let R = G - W;
      if (R += R > k ? -2 * k : R < -k ? 2 * k : 0, Math.abs(R) > o)
        return null;
    }
    W = G;
    const et = S;
    let K = 0;
    for (; S < O; ++S) {
      const R = P ? O - S - 1 : S, nt = a * l(h, s[R], c);
      if (t + i < e && p + _ < r + K + nt / 2)
        break;
      K += nt;
    }
    if (S === et)
      continue;
    const J = P ? s.substring(O - et, O - S) : s.substring(et, S);
    C = _ === 0 ? 0 : (r + K / 2 - p) / _;
    const V = bt(g, d, C), ot = bt(m, f, C);
    Y.push([V, ot, K / 2, G, J]), r += K;
  }
  return Y;
}
const ri = Wt(), Ie = [], ce = [], ue = [], ve = [];
function Yo(n) {
  return n[3].declutterBox;
}
const Ko = new RegExp(
  /* eslint-disable prettier/prettier */
  "[֑-ࣿיִ-﷿ﹰ-ﻼࠀ-࿿-]"
  /* eslint-enable prettier/prettier */
);
function Os(n, t) {
  return t === "start" ? t = Ko.test(n) ? "right" : "left" : t === "end" && (t = Ko.test(n) ? "left" : "right"), Xn[t];
}
function Nd(n, t, e) {
  return e > 0 && n.push(`
`, ""), n.push(t, ""), n;
}
class Gd {
  /**
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {boolean} overlaps The replay can have overlapping geometries.
   * @param {import("../canvas.js").SerializableInstructions} instructions The serializable instructions.
   * @param {boolean} [deferredRendering] Enable deferred rendering.
   */
  constructor(t, e, i, s, r) {
    this.overlaps = i, this.pixelRatio = e, this.resolution = t, this.alignAndScaleFill_, this.instructions = s.instructions, this.coordinates = s.coordinates, this.coordinateCache_ = {}, this.renderedTransform_ = Ht(), this.hitDetectionInstructions = s.hitDetectionInstructions, this.pixelCoordinates_ = null, this.viewRotation_ = 0, this.fillStates = s.fillStates || {}, this.strokeStates = s.strokeStates || {}, this.textStates = s.textStates || {}, this.widths_ = {}, this.labels_ = {}, this.zIndexContext_ = r ? new wa() : null;
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
  createLabel(t, e, i, s) {
    const r = t + e + i + s;
    if (this.labels_[r])
      return this.labels_[r];
    const o = s ? this.strokeStates[s] : null, a = i ? this.fillStates[i] : null, l = this.textStates[e], h = this.pixelRatio, c = [
      l.scale[0] * h,
      l.scale[1] * h
    ], u = Array.isArray(t), d = l.justify ? Xn[l.justify] : Os(
      Array.isArray(t) ? t[0] : t,
      l.textAlign || $i
    ), f = s && o.lineWidth ? o.lineWidth : 0, g = u ? t : t.split(`
`).reduce(Nd, []), { width: m, height: _, widths: p, heights: y, lineWidths: C } = Yc(
      l,
      g
    ), E = m + f, x = [], v = (E + 2) * c[0], T = (_ + f) * c[1], I = {
      width: v < 0 ? Math.floor(v) : Math.ceil(v),
      height: T < 0 ? Math.floor(T) : Math.ceil(T),
      contextInstructions: x
    };
    (c[0] != 1 || c[1] != 1) && x.push("scale", c), s && (x.push("strokeStyle", o.strokeStyle), x.push("lineWidth", f), x.push("lineCap", o.lineCap), x.push("lineJoin", o.lineJoin), x.push("miterLimit", o.miterLimit), x.push("setLineDash", [o.lineDash]), x.push("lineDashOffset", o.lineDashOffset)), i && x.push("fillStyle", a.fillStyle), x.push("textBaseline", "middle"), x.push("textAlign", "center");
    const w = 0.5 - d;
    let D = d * E + w * f;
    const P = [], k = [];
    let Y = 0, B = 0, W = 0, S = 0, O;
    for (let G = 0, et = g.length; G < et; G += 2) {
      const K = g[G];
      if (K === `
`) {
        B += Y, Y = 0, D = d * E + w * f, ++S;
        continue;
      }
      const J = g[G + 1] || l.font;
      J !== O && (s && P.push("font", J), i && k.push("font", J), O = J), Y = Math.max(Y, y[W]);
      const V = [
        K,
        D + w * p[W] + d * (p[W] - C[S]),
        0.5 * (f + Y) + B
      ];
      D += p[W], s && P.push("strokeText", V), i && k.push("fillText", V), ++W;
    }
    return Array.prototype.push.apply(x, P), Array.prototype.push.apply(x, k), this.labels_[r] = I, I;
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
  replayTextBackground_(t, e, i, s, r, o, a) {
    t.beginPath(), t.moveTo.apply(t, e), t.lineTo.apply(t, i), t.lineTo.apply(t, s), t.lineTo.apply(t, r), t.lineTo.apply(t, e), o && (this.alignAndScaleFill_ = /** @type {number} */
    o[2], this.fill_(t)), a && (this.setStrokeStyle_(
      t,
      /** @type {Array<*>} */
      a
    ), t.stroke());
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
  calculateImageOrLabelDimensions_(t, e, i, s, r, o, a, l, h, c, u, d, f, g, m, _) {
    a *= d[0], l *= d[1];
    let p = i - a, y = s - l;
    const C = r + h > t ? t - h : r, E = o + c > e ? e - c : o, x = g[3] + C * d[0] + g[1], v = g[0] + E * d[1] + g[2], T = p - g[3], I = y - g[0];
    (m || u !== 0) && (Ie[0] = T, ve[0] = T, Ie[1] = I, ce[1] = I, ce[0] = T + x, ue[0] = ce[0], ue[1] = I + v, ve[1] = ue[1]);
    let w;
    return u !== 0 ? (w = pe(
      Ht(),
      i,
      s,
      1,
      1,
      u,
      -i,
      -s
    ), ut(w, Ie), ut(w, ce), ut(w, ue), ut(w, ve), ke(
      Math.min(Ie[0], ce[0], ue[0], ve[0]),
      Math.min(Ie[1], ce[1], ue[1], ve[1]),
      Math.max(Ie[0], ce[0], ue[0], ve[0]),
      Math.max(Ie[1], ce[1], ue[1], ve[1]),
      ri
    )) : ke(
      Math.min(T, T + x),
      Math.min(I, I + v),
      Math.max(T, T + x),
      Math.max(I, I + v),
      ri
    ), f && (p = Math.round(p), y = Math.round(y)), {
      drawImageX: p,
      drawImageY: y,
      drawImageW: C,
      drawImageH: E,
      originX: h,
      originY: c,
      declutterBox: {
        minX: ri[0],
        minY: ri[1],
        maxX: ri[2],
        maxY: ri[3],
        value: _
      },
      canvasTransform: w,
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
  replayImageOrLabel_(t, e, i, s, r, o, a) {
    const l = !!(o || a), h = s.declutterBox, c = a ? a[2] * s.scale[0] / 2 : 0;
    return h.minX - c <= e[0] && h.maxX + c >= 0 && h.minY - c <= e[1] && h.maxY + c >= 0 && (l && this.replayTextBackground_(
      t,
      Ie,
      ce,
      ue,
      ve,
      /** @type {Array<*>} */
      o,
      /** @type {Array<*>} */
      a
    ), Kc(
      t,
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
  fill_(t) {
    const e = this.alignAndScaleFill_;
    if (e) {
      const i = ut(this.renderedTransform_, [0, 0]), s = 512 * this.pixelRatio;
      t.save(), t.translate(i[0] % s, i[1] % s), e !== 1 && t.scale(e, e), t.rotate(this.viewRotation_);
    }
    t.fill(), e && t.restore();
  }
  /**
   * @private
   * @param {CanvasRenderingContext2D} context Context.
   * @param {Array<*>} instruction Instruction.
   */
  setStrokeStyle_(t, e) {
    t.strokeStyle = /** @type {import("../../colorlike.js").ColorLike} */
    e[1], t.lineWidth = /** @type {number} */
    e[2], t.lineCap = /** @type {CanvasLineCap} */
    e[3], t.lineJoin = /** @type {CanvasLineJoin} */
    e[4], t.miterLimit = /** @type {number} */
    e[5], t.lineDashOffset = /** @type {number} */
    e[7], t.setLineDash(
      /** @type {Array<number>} */
      e[6]
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
  drawLabelWithPointPlacement_(t, e, i, s) {
    const r = this.textStates[e], o = this.createLabel(t, e, s, i), a = this.strokeStates[i], l = this.pixelRatio, h = Os(
      Array.isArray(t) ? t[0] : t,
      r.textAlign || $i
    ), c = Xn[r.textBaseline || Nn], u = a && a.lineWidth ? a.lineWidth : 0, d = o.width / l - 2 * r.scale[0], f = h * d + 2 * (0.5 - h) * u, g = c * o.height / l + 2 * (0.5 - c) * u;
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
  execute_(t, e, i, s, r, o, a, l) {
    const h = this.zIndexContext_;
    let c;
    this.pixelCoordinates_ && Ne(i, this.renderedTransform_) ? c = this.pixelCoordinates_ : (this.pixelCoordinates_ || (this.pixelCoordinates_ = []), c = Pe(
      this.coordinates,
      0,
      this.coordinates.length,
      2,
      i,
      this.pixelCoordinates_
    ), oh(this.renderedTransform_, i));
    let u = 0;
    const d = s.length;
    let f = 0, g, m, _, p, y, C, E, x, v, T, I, w, D, P = 0, k = 0, Y = null, B = null;
    const W = this.coordinateCache_, S = this.viewRotation_, O = Math.round(Math.atan2(-i[1], i[0]) * 1e12) / 1e12, G = (
      /** @type {import("../../render.js").State} */
      {
        context: t,
        pixelRatio: this.pixelRatio,
        resolution: this.resolution,
        rotation: S
      }
    ), et = this.instructions != s || this.overlaps ? 0 : 200;
    let K, J, V, ot;
    for (; u < d; ) {
      const R = s[u];
      switch (
        /** @type {import("./Instruction.js").default} */
        R[0]
      ) {
        case L.BEGIN_GEOMETRY:
          K = /** @type {import("../../Feature.js").FeatureLike} */
          R[1], ot = R[3], K.getGeometry() ? a !== void 0 && !Rt(a, ot.getExtent()) ? u = /** @type {number} */
          R[2] + 1 : ++u : u = /** @type {number} */
          R[2], h && (h.zIndex = R[4]);
          break;
        case L.BEGIN_PATH:
          P > et && (this.fill_(t), P = 0), k > et && (t.stroke(), k = 0), !P && !k && (t.beginPath(), y = NaN, C = NaN), ++u;
          break;
        case L.CIRCLE:
          f = /** @type {number} */
          R[1];
          const Mt = c[f], ht = c[f + 1], wt = c[f + 2], Xt = c[f + 3], At = wt - Mt, Mi = Xt - ht, Ge = Math.sqrt(At * At + Mi * Mi);
          t.moveTo(Mt + Ge, ht), t.arc(Mt, ht, Ge, 0, 2 * Math.PI, !0), ++u;
          break;
        case L.CLOSE_PATH:
          t.closePath(), ++u;
          break;
        case L.CUSTOM:
          f = /** @type {number} */
          R[1], g = R[2];
          const cs = (
            /** @type {import("../../geom/SimpleGeometry.js").default} */
            R[3]
          ), mn = R[4], _n = R[5];
          G.geometry = cs, G.feature = K, u in W || (W[u] = []);
          const Pt = W[u];
          _n ? _n(c, f, g, 2, Pt) : (Pt[0] = c[f], Pt[1] = c[f + 1], Pt.length = 2), h && (h.zIndex = R[6]), mn(Pt, G), ++u;
          break;
        case L.DRAW_IMAGE:
          f = /** @type {number} */
          R[1], g = /** @type {number} */
          R[2], v = /** @type {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement} */
          R[3], m = /** @type {number} */
          R[4], _ = /** @type {number} */
          R[5];
          let qe = (
            /** @type {number} */
            R[6]
          );
          const pn = (
            /** @type {number} */
            R[7]
          ), us = (
            /** @type {number} */
            R[8]
          ), yn = (
            /** @type {number} */
            R[9]
          ), En = (
            /** @type {boolean} */
            R[10]
          );
          let Lt = (
            /** @type {number} */
            R[11]
          );
          const Yt = (
            /** @type {import("../../size.js").Size} */
            R[12]
          );
          let jt = (
            /** @type {number} */
            R[13]
          );
          p = R[14] || "declutter";
          const Kt = (
            /** @type {{args: import("../canvas.js").DeclutterImageWithText, declutterMode: import('../../style/Style.js').DeclutterMode}} */
            R[15]
          );
          if (!v && R.length >= 20) {
            T = /** @type {string} */
            R[19], I = /** @type {string} */
            R[20], w = /** @type {string} */
            R[21], D = /** @type {string} */
            R[22];
            const Ot = this.drawLabelWithPointPlacement_(
              T,
              I,
              w,
              D
            );
            v = Ot.label, R[3] = v;
            const Be = (
              /** @type {number} */
              R[23]
            );
            m = (Ot.anchorX - Be) * this.pixelRatio, R[4] = m;
            const kt = (
              /** @type {number} */
              R[24]
            );
            _ = (Ot.anchorY - kt) * this.pixelRatio, R[5] = _, qe = v.height, R[6] = qe, jt = v.width, R[13] = jt;
          }
          let Je;
          R.length > 25 && (Je = /** @type {number} */
          R[25]);
          let $e, Ce, re;
          R.length > 17 ? ($e = /** @type {Array<number>} */
          R[16], Ce = /** @type {boolean} */
          R[17], re = /** @type {boolean} */
          R[18]) : ($e = Ze, Ce = !1, re = !1), En && O ? Lt += S : !En && !O && (Lt -= S);
          let ds = 0;
          for (; f < g; f += 2) {
            if (Je && Je[ds++] < jt / this.pixelRatio)
              continue;
            const Ot = this.calculateImageOrLabelDimensions_(
              v.width,
              v.height,
              c[f],
              c[f + 1],
              jt,
              qe,
              m,
              _,
              us,
              yn,
              Lt,
              Yt,
              r,
              $e,
              Ce || re,
              K
            ), Be = [
              t,
              e,
              v,
              Ot,
              pn,
              Ce ? (
                /** @type {Array<*>} */
                Y
              ) : null,
              re ? (
                /** @type {Array<*>} */
                B
              ) : null
            ];
            if (l) {
              let kt, Qt, Ft;
              if (Kt) {
                const st = g - f;
                if (!Kt[st]) {
                  Kt[st] = { args: Be, declutterMode: p };
                  continue;
                }
                const xt = Kt[st];
                kt = xt.args, Qt = xt.declutterMode, delete Kt[st], Ft = Yo(kt);
              }
              let oe, ae;
              if (kt && (Qt !== "declutter" || !l.collides(Ft)) && (oe = !0), (p !== "declutter" || !l.collides(Ot.declutterBox)) && (ae = !0), Qt === "declutter" && p === "declutter") {
                const st = oe && ae;
                oe = st, ae = st;
              }
              oe && (Qt !== "none" && l.insert(Ft), this.replayImageOrLabel_.apply(this, kt)), ae && (p !== "none" && l.insert(Ot.declutterBox), this.replayImageOrLabel_.apply(this, Be));
            } else
              this.replayImageOrLabel_.apply(this, Be);
          }
          ++u;
          break;
        case L.DRAW_CHARS:
          const Et = (
            /** @type {number} */
            R[1]
          ), Fr = (
            /** @type {number} */
            R[2]
          ), fs = (
            /** @type {number} */
            R[3]
          ), ll = (
            /** @type {number} */
            R[4]
          );
          D = /** @type {string} */
          R[5];
          const hl = (
            /** @type {number} */
            R[6]
          ), Nr = (
            /** @type {number} */
            R[7]
          ), Gr = (
            /** @type {number} */
            R[8]
          );
          w = /** @type {string} */
          R[9];
          const gs = (
            /** @type {number} */
            R[10]
          );
          T = /** @type {string} */
          R[11], I = /** @type {string} */
          R[12];
          const Br = [
            /** @type {number} */
            R[13],
            /** @type {number} */
            R[13]
          ];
          p = R[14] || "declutter";
          const ms = this.textStates[I], Li = ms.font, bi = [
            ms.scale[0] * Nr,
            ms.scale[1] * Nr
          ];
          let Di;
          Li in this.widths_ ? Di = this.widths_[Li] : (Di = {}, this.widths_[Li] = Di);
          const Wr = el(c, Et, Fr, 2), zr = Math.abs(bi[0]) * bo(Li, T, Di);
          if (ll || zr <= Wr) {
            const Ot = this.textStates[I].textAlign, Be = (Wr - zr) * Os(T, Ot), kt = Fd(
              c,
              Et,
              Fr,
              2,
              T,
              Be,
              hl,
              Math.abs(bi[0]),
              bo,
              Li,
              Di,
              O ? 0 : this.viewRotation_
            );
            t:
              if (kt) {
                const Qt = [];
                let Ft, oe, ae, st, xt;
                if (w)
                  for (Ft = 0, oe = kt.length; Ft < oe; ++Ft) {
                    xt = kt[Ft], ae = /** @type {string} */
                    xt[4], st = this.createLabel(ae, I, "", w), m = /** @type {number} */
                    xt[2] + (bi[0] < 0 ? -gs : gs), _ = fs * st.height + (0.5 - fs) * 2 * gs * bi[1] / bi[0] - Gr;
                    const le = this.calculateImageOrLabelDimensions_(
                      st.width,
                      st.height,
                      xt[0],
                      xt[1],
                      st.width,
                      st.height,
                      m,
                      _,
                      0,
                      0,
                      xt[3],
                      Br,
                      !1,
                      Ze,
                      !1,
                      K
                    );
                    if (l && p === "declutter" && l.collides(le.declutterBox))
                      break t;
                    Qt.push([
                      t,
                      e,
                      st,
                      le,
                      1,
                      null,
                      null
                    ]);
                  }
                if (D)
                  for (Ft = 0, oe = kt.length; Ft < oe; ++Ft) {
                    xt = kt[Ft], ae = /** @type {string} */
                    xt[4], st = this.createLabel(ae, I, D, ""), m = /** @type {number} */
                    xt[2], _ = fs * st.height - Gr;
                    const le = this.calculateImageOrLabelDimensions_(
                      st.width,
                      st.height,
                      xt[0],
                      xt[1],
                      st.width,
                      st.height,
                      m,
                      _,
                      0,
                      0,
                      xt[3],
                      Br,
                      !1,
                      Ze,
                      !1,
                      K
                    );
                    if (l && p === "declutter" && l.collides(le.declutterBox))
                      break t;
                    Qt.push([
                      t,
                      e,
                      st,
                      le,
                      1,
                      null,
                      null
                    ]);
                  }
                l && p !== "none" && l.load(Qt.map(Yo));
                for (let le = 0, cl = Qt.length; le < cl; ++le)
                  this.replayImageOrLabel_.apply(this, Qt[le]);
              }
          }
          ++u;
          break;
        case L.END_GEOMETRY:
          if (o !== void 0) {
            K = /** @type {import("../../Feature.js").FeatureLike} */
            R[1];
            const Ot = o(K, ot);
            if (Ot)
              return Ot;
          }
          ++u;
          break;
        case L.FILL:
          et ? P++ : this.fill_(t), ++u;
          break;
        case L.MOVE_TO_LINE_TO:
          for (f = /** @type {number} */
          R[1], g = /** @type {number} */
          R[2], J = c[f], V = c[f + 1], E = J + 0.5 | 0, x = V + 0.5 | 0, (E !== y || x !== C) && (t.moveTo(J, V), y = E, C = x), f += 2; f < g; f += 2)
            J = c[f], V = c[f + 1], E = J + 0.5 | 0, x = V + 0.5 | 0, (f == g - 2 || E !== y || x !== C) && (t.lineTo(J, V), y = E, C = x);
          ++u;
          break;
        case L.SET_FILL_STYLE:
          Y = R, this.alignAndScaleFill_ = R[2], P && (this.fill_(t), P = 0, k && (t.stroke(), k = 0)), t.fillStyle = R[1], ++u;
          break;
        case L.SET_STROKE_STYLE:
          B = R, k && (t.stroke(), k = 0), this.setStrokeStyle_(
            t,
            /** @type {Array<*>} */
            R
          ), ++u;
          break;
        case L.STROKE:
          et ? k++ : t.stroke(), ++u;
          break;
        default:
          ++u;
          break;
      }
    }
    P && this.fill_(t), k && t.stroke();
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import('../../size.js').Size} scaledCanvasSize Scaled canvas size.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {number} viewRotation View rotation.
   * @param {boolean} snapToPixel Snap point symbols and text to integer pixels.
   * @param {import("rbush").default} [declutterTree] Declutter tree.
   */
  execute(t, e, i, s, r, o) {
    this.viewRotation_ = s, this.execute_(
      t,
      e,
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
  executeHitDetection(t, e, i, s, r) {
    return this.viewRotation_ = i, this.execute_(
      t,
      [t.canvas.width, t.canvas.height],
      e,
      this.hitDetectionInstructions,
      !0,
      s,
      r
    );
  }
}
const Yi = [
  "Polygon",
  "Circle",
  "LineString",
  "Image",
  "Text",
  "Default"
], nl = ["Image", "Text"], Bd = Yi.filter(
  (n) => !nl.includes(n)
);
class Wd {
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
  constructor(t, e, i, s, r, o, a) {
    this.maxExtent_ = t, this.overlaps_ = s, this.pixelRatio_ = i, this.resolution_ = e, this.renderBuffer_ = o, this.executorsByZIndex_ = {}, this.hitDetectionContext_ = null, this.hitDetectionTransform_ = Ht(), this.renderedContext_ = null, this.deferredZIndexContexts_ = [], this.createExecutors_(r, a);
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../transform.js").Transform} transform Transform.
   */
  clip(t, e) {
    const i = this.getClipCoords(e);
    t.beginPath(), t.moveTo(i[0], i[1]), t.lineTo(i[2], i[3]), t.lineTo(i[4], i[5]), t.lineTo(i[6], i[7]), t.clip();
  }
  /**
   * Create executors and populate them using the provided instructions.
   * @private
   * @param {!Object<string, !Object<string, import("../canvas.js").SerializableInstructions>>} allInstructions The serializable instructions
   * @param {boolean} deferredRendering Enable deferred rendering.
   */
  createExecutors_(t, e) {
    for (const i in t) {
      let s = this.executorsByZIndex_[i];
      s === void 0 && (s = {}, this.executorsByZIndex_[i] = s);
      const r = t[i];
      for (const o in r) {
        const a = r[o];
        s[o] = new Gd(
          this.resolution_,
          this.pixelRatio_,
          this.overlaps_,
          a,
          e
        );
      }
    }
  }
  /**
   * @param {Array<import("../canvas.js").BuilderType>} executors Executors.
   * @return {boolean} Has executors of the provided types.
   */
  hasExecutors(t) {
    for (const e in this.executorsByZIndex_) {
      const i = this.executorsByZIndex_[e];
      for (let s = 0, r = t.length; s < r; ++s)
        if (t[s] in i)
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
  forEachFeatureAtCoordinate(t, e, i, s, r, o) {
    s = Math.round(s);
    const a = s * 2 + 1, l = pe(
      this.hitDetectionTransform_,
      s + 0.5,
      s + 0.5,
      1 / e,
      -1 / e,
      -i,
      -t[0],
      -t[1]
    ), h = !this.hitDetectionContext_;
    h && (this.hitDetectionContext_ = ft(
      a,
      a,
      void 0,
      { willReadFrequently: !0 }
    ));
    const c = this.hitDetectionContext_;
    c.canvas.width !== a || c.canvas.height !== a ? (c.canvas.width = a, c.canvas.height = a) : h || c.clearRect(0, 0, a, a);
    let u;
    this.renderBuffer_ !== void 0 && (u = Wt(), zi(u, t), sr(
      u,
      e * (this.renderBuffer_ + s),
      u
    ));
    const d = zd(s);
    let f;
    function g(x, v) {
      const T = c.getImageData(
        0,
        0,
        a,
        a
      ).data;
      for (let I = 0, w = d.length; I < w; I++)
        if (T[d[I]] > 0) {
          if (!o || f !== "Image" && f !== "Text" || o.includes(x)) {
            const D = (d[I] - 3) / 4, P = s - D % a, k = s - (D / a | 0), Y = r(x, v, P * P + k * k);
            if (Y)
              return Y;
          }
          c.clearRect(0, 0, a, a);
          break;
        }
    }
    const m = Object.keys(this.executorsByZIndex_).map(Number);
    m.sort(Oe);
    let _, p, y, C, E;
    for (_ = m.length - 1; _ >= 0; --_) {
      const x = m[_].toString();
      for (y = this.executorsByZIndex_[x], p = Yi.length - 1; p >= 0; --p)
        if (f = Yi[p], C = y[f], C !== void 0 && (E = C.executeHitDetection(
          c,
          l,
          i,
          g,
          u
        ), E))
          return E;
    }
  }
  /**
   * @param {import("../../transform.js").Transform} transform Transform.
   * @return {Array<number>|null} Clip coordinates.
   */
  getClipCoords(t) {
    const e = this.maxExtent_;
    if (!e)
      return null;
    const i = e[0], s = e[1], r = e[2], o = e[3], a = [i, s, i, o, r, o, r, s];
    return Pe(a, 0, 8, 2, t, a), a;
  }
  /**
   * @return {boolean} Is empty.
   */
  isEmpty() {
    return xi(this.executorsByZIndex_);
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
  execute(t, e, i, s, r, o, a) {
    const l = Object.keys(this.executorsByZIndex_).map(Number);
    l.sort(Oe), o = o || Yi;
    let h, c, u, d, f, g;
    for (a && l.reverse(), h = 0, c = l.length; h < c; ++h) {
      const m = l[h].toString();
      for (f = this.executorsByZIndex_[m], u = 0, d = o.length; u < d; ++u) {
        const _ = o[u];
        if (g = f[_], g !== void 0) {
          const p = a === null ? void 0 : g.getZIndexContext(), y = p ? p.getContext() : t, C = this.maxExtent_ && _ !== "Image" && _ !== "Text";
          if (C && (y.save(), this.clip(y, i)), g.execute(
            y,
            e,
            i,
            s,
            r,
            a
          ), C && y.restore(), p) {
            p.offset();
            const E = l[h];
            this.deferredZIndexContexts_[E] || (this.deferredZIndexContexts_[E] = []), this.deferredZIndexContexts_[E].push(p);
          }
        }
      }
    }
    this.renderedContext_ = t;
  }
  getDeferredZIndexContexts() {
    return this.deferredZIndexContexts_;
  }
  getRenderedContext() {
    return this.renderedContext_;
  }
  renderDeferred() {
    this.deferredZIndexContexts_.forEach((t) => {
      t.forEach((e) => {
        e.draw(this.renderedContext_), e.clear();
      });
    });
  }
}
const ks = {};
function zd(n) {
  if (ks[n] !== void 0)
    return ks[n];
  const t = n * 2 + 1, e = n * n, i = new Array(e + 1);
  for (let r = 0; r <= n; ++r)
    for (let o = 0; o <= n; ++o) {
      const a = r * r + o * o;
      if (a > e)
        break;
      let l = i[a];
      l || (l = [], i[a] = l), l.push(((n + r) * t + (n + o)) * 4 + 3), r > 0 && l.push(((n - r) * t + (n + o)) * 4 + 3), o > 0 && (l.push(((n + r) * t + (n - o)) * 4 + 3), r > 0 && l.push(((n - r) * t + (n - o)) * 4 + 3));
    }
  const s = [];
  for (let r = 0, o = i.length; r < o; ++r)
    i[r] && s.push(...i[r]);
  return ks[n] = s, s;
}
class Xd extends il {
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../../extent.js").Extent} extent Extent.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {number} viewRotation View rotation.
   * @param {number} [squaredTolerance] Optional squared tolerance for simplification.
   * @param {import("../../proj.js").TransformFunction} [userTransform] Transform from user to view projection.
   */
  constructor(t, e, i, s, r, o, a) {
    super(), this.context_ = t, this.pixelRatio_ = e, this.extent_ = i, this.transform_ = s, this.transformRotation_ = s ? ir(Math.atan2(s[1], s[0]), 10) : 0, this.viewRotation_ = r, this.squaredTolerance_ = o, this.userTransform_ = a, this.contextFillState_ = null, this.contextStrokeState_ = null, this.contextTextState_ = null, this.fillState_ = null, this.strokeState_ = null, this.image_ = null, this.imageAnchorX_ = 0, this.imageAnchorY_ = 0, this.imageHeight_ = 0, this.imageOpacity_ = 0, this.imageOriginX_ = 0, this.imageOriginY_ = 0, this.imageRotateWithView_ = !1, this.imageRotation_ = 0, this.imageScale_ = [0, 0], this.imageWidth_ = 0, this.text_ = "", this.textOffsetX_ = 0, this.textOffsetY_ = 0, this.textRotateWithView_ = !1, this.textRotation_ = 0, this.textScale_ = [0, 0], this.textFillState_ = null, this.textStrokeState_ = null, this.textState_ = null, this.pixelCoordinates_ = [], this.tmpLocalTransform_ = Ht();
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @private
   */
  drawImages_(t, e, i, s) {
    if (!this.image_)
      return;
    const r = Pe(
      t,
      e,
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
        pe(
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
  drawText_(t, e, i, s) {
    if (!this.textState_ || this.text_ === "")
      return;
    this.textFillState_ && this.setContextFillState_(this.textFillState_), this.textStrokeState_ && this.setContextStrokeState_(this.textStrokeState_), this.setContextTextState_(this.textState_);
    const r = Pe(
      t,
      e,
      i,
      s,
      this.transform_,
      this.pixelCoordinates_
    ), o = this.context_;
    let a = this.textRotation_;
    for (this.transformRotation_ === 0 && (a -= this.viewRotation_), this.textRotateWithView_ && (a += this.viewRotation_); e < i; e += s) {
      const l = r[e] + this.textOffsetX_, h = r[e + 1] + this.textOffsetY_;
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
  moveToLineTo_(t, e, i, s, r) {
    const o = this.context_, a = Pe(
      t,
      e,
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
  drawRings_(t, e, i, s) {
    for (let r = 0, o = i.length; r < o; ++r)
      e = this.moveToLineTo_(
        t,
        e,
        i[r],
        s,
        !0
      );
    return e;
  }
  /**
   * Render a circle geometry into the canvas.  Rendering is immediate and uses
   * the current fill and stroke styles.
   *
   * @param {import("../../geom/Circle.js").default} geometry Circle geometry.
   * @api
   */
  drawCircle(t) {
    if (this.squaredTolerance_ && (t = /** @type {import("../../geom/Circle.js").default} */
    t.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    )), !!Rt(this.extent_, t.getExtent())) {
      if (this.fillState_ || this.strokeState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const e = fh(
          t,
          this.transform_,
          this.pixelCoordinates_
        ), i = e[2] - e[0], s = e[3] - e[1], r = Math.sqrt(i * i + s * s), o = this.context_;
        o.beginPath(), o.arc(
          e[0],
          e[1],
          r,
          0,
          2 * Math.PI
        ), this.fillState_ && o.fill(), this.strokeState_ && o.stroke();
      }
      this.text_ !== "" && this.drawText_(t.getCenter(), 0, 2, 2);
    }
  }
  /**
   * Set the rendering style.  Note that since this is an immediate rendering API,
   * any `zIndex` on the provided style will be ignored.
   *
   * @param {import("../../style/Style.js").default} style The rendering style.
   * @api
   */
  setStyle(t) {
    this.setFillStrokeStyle(t.getFill(), t.getStroke()), this.setImageStyle(t.getImage()), this.setTextStyle(t.getText());
  }
  /**
   * @param {import("../../transform.js").Transform} transform Transform.
   */
  setTransform(t) {
    this.transform_ = t;
  }
  /**
   * Render a geometry into the canvas.  Call
   * {@link module:ol/render/canvas/Immediate~CanvasImmediateRenderer#setStyle renderer.setStyle()} first to set the rendering style.
   *
   * @param {import("../../geom/Geometry.js").default|import("../Feature.js").default} geometry The geometry to render.
   * @api
   */
  drawGeometry(t) {
    switch (t.getType()) {
      case "Point":
        this.drawPoint(
          /** @type {import("../../geom/Point.js").default} */
          t
        );
        break;
      case "LineString":
        this.drawLineString(
          /** @type {import("../../geom/LineString.js").default} */
          t
        );
        break;
      case "Polygon":
        this.drawPolygon(
          /** @type {import("../../geom/Polygon.js").default} */
          t
        );
        break;
      case "MultiPoint":
        this.drawMultiPoint(
          /** @type {import("../../geom/MultiPoint.js").default} */
          t
        );
        break;
      case "MultiLineString":
        this.drawMultiLineString(
          /** @type {import("../../geom/MultiLineString.js").default} */
          t
        );
        break;
      case "MultiPolygon":
        this.drawMultiPolygon(
          /** @type {import("../../geom/MultiPolygon.js").default} */
          t
        );
        break;
      case "GeometryCollection":
        this.drawGeometryCollection(
          /** @type {import("../../geom/GeometryCollection.js").default} */
          t
        );
        break;
      case "Circle":
        this.drawCircle(
          /** @type {import("../../geom/Circle.js").default} */
          t
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
  drawFeature(t, e) {
    const i = e.getGeometryFunction()(t);
    i && (this.setStyle(e), this.drawGeometry(i));
  }
  /**
   * Render a GeometryCollection to the canvas.  Rendering is immediate and
   * uses the current styles appropriate for each geometry in the collection.
   *
   * @param {import("../../geom/GeometryCollection.js").default} geometry Geometry collection.
   */
  drawGeometryCollection(t) {
    const e = t.getGeometriesArray();
    for (let i = 0, s = e.length; i < s; ++i)
      this.drawGeometry(e[i]);
  }
  /**
   * Render a Point geometry into the canvas.  Rendering is immediate and uses
   * the current style.
   *
   * @param {import("../../geom/Point.js").default|import("../Feature.js").default} geometry Point geometry.
   */
  drawPoint(t) {
    this.squaredTolerance_ && (t = /** @type {import("../../geom/Point.js").default} */
    t.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    ));
    const e = t.getFlatCoordinates(), i = t.getStride();
    this.image_ && this.drawImages_(e, 0, e.length, i), this.text_ !== "" && this.drawText_(e, 0, e.length, i);
  }
  /**
   * Render a MultiPoint geometry  into the canvas.  Rendering is immediate and
   * uses the current style.
   *
   * @param {import("../../geom/MultiPoint.js").default|import("../Feature.js").default} geometry MultiPoint geometry.
   */
  drawMultiPoint(t) {
    this.squaredTolerance_ && (t = /** @type {import("../../geom/MultiPoint.js").default} */
    t.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    ));
    const e = t.getFlatCoordinates(), i = t.getStride();
    this.image_ && this.drawImages_(e, 0, e.length, i), this.text_ !== "" && this.drawText_(e, 0, e.length, i);
  }
  /**
   * Render a LineString into the canvas.  Rendering is immediate and uses
   * the current style.
   *
   * @param {import("../../geom/LineString.js").default|import("../Feature.js").default} geometry LineString geometry.
   */
  drawLineString(t) {
    if (this.squaredTolerance_ && (t = /** @type {import("../../geom/LineString.js").default} */
    t.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    )), !!Rt(this.extent_, t.getExtent())) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
        const e = this.context_, i = t.getFlatCoordinates();
        e.beginPath(), this.moveToLineTo_(
          i,
          0,
          i.length,
          t.getStride(),
          !1
        ), e.stroke();
      }
      if (this.text_ !== "") {
        const e = t.getFlatMidpoint();
        this.drawText_(e, 0, 2, 2);
      }
    }
  }
  /**
   * Render a MultiLineString geometry into the canvas.  Rendering is immediate
   * and uses the current style.
   *
   * @param {import("../../geom/MultiLineString.js").default|import("../Feature.js").default} geometry MultiLineString geometry.
   */
  drawMultiLineString(t) {
    this.squaredTolerance_ && (t = /** @type {import("../../geom/MultiLineString.js").default} */
    t.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    ));
    const e = t.getExtent();
    if (Rt(this.extent_, e)) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
        const i = this.context_, s = t.getFlatCoordinates();
        let r = 0;
        const o = (
          /** @type {Array<number>} */
          t.getEnds()
        ), a = t.getStride();
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
        const i = t.getFlatMidpoints();
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
  drawPolygon(t) {
    if (this.squaredTolerance_ && (t = /** @type {import("../../geom/Polygon.js").default} */
    t.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    )), !!Rt(this.extent_, t.getExtent())) {
      if (this.strokeState_ || this.fillState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const e = this.context_;
        e.beginPath(), this.drawRings_(
          t.getOrientedFlatCoordinates(),
          0,
          /** @type {Array<number>} */
          t.getEnds(),
          t.getStride()
        ), this.fillState_ && e.fill(), this.strokeState_ && e.stroke();
      }
      if (this.text_ !== "") {
        const e = t.getFlatInteriorPoint();
        this.drawText_(e, 0, 2, 2);
      }
    }
  }
  /**
   * Render MultiPolygon geometry into the canvas.  Rendering is immediate and
   * uses the current style.
   * @param {import("../../geom/MultiPolygon.js").default} geometry MultiPolygon geometry.
   */
  drawMultiPolygon(t) {
    if (this.squaredTolerance_ && (t = /** @type {import("../../geom/MultiPolygon.js").default} */
    t.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    )), !!Rt(this.extent_, t.getExtent())) {
      if (this.strokeState_ || this.fillState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const e = this.context_, i = t.getOrientedFlatCoordinates();
        let s = 0;
        const r = t.getEndss(), o = t.getStride();
        e.beginPath();
        for (let a = 0, l = r.length; a < l; ++a) {
          const h = r[a];
          s = this.drawRings_(i, s, h, o);
        }
        this.fillState_ && e.fill(), this.strokeState_ && e.stroke();
      }
      if (this.text_ !== "") {
        const e = t.getFlatInteriorPoints();
        this.drawText_(e, 0, e.length, 2);
      }
    }
  }
  /**
   * @param {import("../canvas.js").FillState} fillState Fill state.
   * @private
   */
  setContextFillState_(t) {
    const e = this.context_, i = this.contextFillState_;
    i ? i.fillStyle != t.fillStyle && (i.fillStyle = t.fillStyle, e.fillStyle = t.fillStyle) : (e.fillStyle = t.fillStyle, this.contextFillState_ = {
      fillStyle: t.fillStyle
    });
  }
  /**
   * @param {import("../canvas.js").StrokeState} strokeState Stroke state.
   * @private
   */
  setContextStrokeState_(t) {
    const e = this.context_, i = this.contextStrokeState_;
    i ? (i.lineCap != t.lineCap && (i.lineCap = t.lineCap, e.lineCap = t.lineCap), Ne(i.lineDash, t.lineDash) || e.setLineDash(
      i.lineDash = t.lineDash
    ), i.lineDashOffset != t.lineDashOffset && (i.lineDashOffset = t.lineDashOffset, e.lineDashOffset = t.lineDashOffset), i.lineJoin != t.lineJoin && (i.lineJoin = t.lineJoin, e.lineJoin = t.lineJoin), i.lineWidth != t.lineWidth && (i.lineWidth = t.lineWidth, e.lineWidth = t.lineWidth), i.miterLimit != t.miterLimit && (i.miterLimit = t.miterLimit, e.miterLimit = t.miterLimit), i.strokeStyle != t.strokeStyle && (i.strokeStyle = t.strokeStyle, e.strokeStyle = t.strokeStyle)) : (e.lineCap = t.lineCap, e.setLineDash(t.lineDash), e.lineDashOffset = t.lineDashOffset, e.lineJoin = t.lineJoin, e.lineWidth = t.lineWidth, e.miterLimit = t.miterLimit, e.strokeStyle = t.strokeStyle, this.contextStrokeState_ = {
      lineCap: t.lineCap,
      lineDash: t.lineDash,
      lineDashOffset: t.lineDashOffset,
      lineJoin: t.lineJoin,
      lineWidth: t.lineWidth,
      miterLimit: t.miterLimit,
      strokeStyle: t.strokeStyle
    });
  }
  /**
   * @param {import("../canvas.js").TextState} textState Text state.
   * @private
   */
  setContextTextState_(t) {
    const e = this.context_, i = this.contextTextState_, s = t.textAlign ? t.textAlign : $i;
    i ? (i.font != t.font && (i.font = t.font, e.font = t.font), i.textAlign != s && (i.textAlign = s, e.textAlign = s), i.textBaseline != t.textBaseline && (i.textBaseline = t.textBaseline, e.textBaseline = t.textBaseline)) : (e.font = t.font, e.textAlign = s, e.textBaseline = t.textBaseline, this.contextTextState_ = {
      font: t.font,
      textAlign: s,
      textBaseline: t.textBaseline
    });
  }
  /**
   * Set the fill and stroke style for subsequent draw operations.  To clear
   * either fill or stroke styles, pass null for the appropriate parameter.
   *
   * @param {import("../../style/Fill.js").default} fillStyle Fill style.
   * @param {import("../../style/Stroke.js").default} strokeStyle Stroke style.
   */
  setFillStrokeStyle(t, e) {
    if (!t)
      this.fillState_ = null;
    else {
      const i = t.getColor();
      this.fillState_ = {
        fillStyle: ee(
          i || vt
        )
      };
    }
    if (!e)
      this.strokeState_ = null;
    else {
      const i = e.getColor(), s = e.getLineCap(), r = e.getLineDash(), o = e.getLineDashOffset(), a = e.getLineJoin(), l = e.getWidth(), h = e.getMiterLimit(), c = r || me;
      this.strokeState_ = {
        lineCap: s !== void 0 ? s : wi,
        lineDash: this.pixelRatio_ === 1 ? c : c.map((u) => u * this.pixelRatio_),
        lineDashOffset: (o || _e) * this.pixelRatio_,
        lineJoin: a !== void 0 ? a : Ai,
        lineWidth: (l !== void 0 ? l : tn) * this.pixelRatio_,
        miterLimit: h !== void 0 ? h : qi,
        strokeStyle: ee(
          i || Ji
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
  setImageStyle(t) {
    let e;
    if (!t || !(e = t.getSize())) {
      this.image_ = null;
      return;
    }
    const i = t.getPixelRatio(this.pixelRatio_), s = t.getAnchor(), r = t.getOrigin();
    this.image_ = t.getImage(this.pixelRatio_), this.imageAnchorX_ = s[0] * i, this.imageAnchorY_ = s[1] * i, this.imageHeight_ = e[1] * i, this.imageOpacity_ = t.getOpacity(), this.imageOriginX_ = r[0], this.imageOriginY_ = r[1], this.imageRotateWithView_ = t.getRotateWithView(), this.imageRotation_ = t.getRotation();
    const o = t.getScaleArray();
    this.imageScale_ = [
      o[0] * this.pixelRatio_ / i,
      o[1] * this.pixelRatio_ / i
    ], this.imageWidth_ = e[0] * i;
  }
  /**
   * Set the text style for subsequent draw operations.  Pass null to
   * remove the text style.
   *
   * @param {import("../../style/Text.js").default} textStyle Text style.
   */
  setTextStyle(t) {
    if (!t)
      this.text_ = "";
    else {
      const e = t.getFill();
      if (!e)
        this.textFillState_ = null;
      else {
        const f = e.getColor();
        this.textFillState_ = {
          fillStyle: ee(
            f || vt
          )
        };
      }
      const i = t.getStroke();
      if (!i)
        this.textStrokeState_ = null;
      else {
        const f = i.getColor(), g = i.getLineCap(), m = i.getLineDash(), _ = i.getLineDashOffset(), p = i.getLineJoin(), y = i.getWidth(), C = i.getMiterLimit();
        this.textStrokeState_ = {
          lineCap: g !== void 0 ? g : wi,
          lineDash: m || me,
          lineDashOffset: _ || _e,
          lineJoin: p !== void 0 ? p : Ai,
          lineWidth: y !== void 0 ? y : tn,
          miterLimit: C !== void 0 ? C : qi,
          strokeStyle: ee(
            f || Ji
          )
        };
      }
      const s = t.getFont(), r = t.getOffsetX(), o = t.getOffsetY(), a = t.getRotateWithView(), l = t.getRotation(), h = t.getScaleArray(), c = t.getText(), u = t.getTextAlign(), d = t.getTextBaseline();
      this.textState_ = {
        font: s !== void 0 ? s : Ga,
        textAlign: u !== void 0 ? u : $i,
        textBaseline: d !== void 0 ? d : Nn
      }, this.text_ = c !== void 0 ? Array.isArray(c) ? c.reduce((f, g, m) => f += m % 2 ? " " : g, "") : c : "", this.textOffsetX_ = r !== void 0 ? this.pixelRatio_ * r : 0, this.textOffsetY_ = o !== void 0 ? this.pixelRatio_ * o : 0, this.textRotateWithView_ = a !== void 0 ? a : !1, this.textRotation_ = l !== void 0 ? l : 0, this.textScale_ = [
        this.pixelRatio_ * h[0],
        this.pixelRatio_ * h[1]
      ];
    }
  }
}
const sl = Xd, Jt = 0.5;
function Yd(n, t, e, i, s, r, o, a, l) {
  const h = l ? ur(s) : s, c = n[0] * Jt, u = n[1] * Jt, d = ft(c, u);
  d.imageSmoothingEnabled = !1;
  const f = d.canvas, g = new sl(
    d,
    Jt,
    s,
    null,
    o,
    a,
    l ? qn(jl(), l) : null
  ), m = e.length, _ = Math.floor((256 * 256 * 256 - 1) / m), p = {};
  for (let C = 1; C <= m; ++C) {
    const E = e[C - 1], x = E.getStyleFunction() || i;
    if (!x)
      continue;
    let v = x(E, r);
    if (!v)
      continue;
    Array.isArray(v) || (v = [v]);
    const I = (C * _).toString(16).padStart(7, "#00000");
    for (let w = 0, D = v.length; w < D; ++w) {
      const P = v[w], k = P.getGeometryFunction()(E);
      if (!k || !Rt(h, k.getExtent()))
        continue;
      const Y = P.clone(), B = Y.getFill();
      B && B.setColor(I);
      const W = Y.getStroke();
      W && (W.setColor(I), W.setLineDash(null)), Y.setText(void 0);
      const S = P.getImage();
      if (S) {
        const K = S.getImageSize();
        if (!K)
          continue;
        const J = ft(
          K[0],
          K[1],
          void 0,
          { alpha: !1 }
        ), V = J.canvas;
        J.fillStyle = I, J.fillRect(0, 0, V.width, V.height), Y.setImage(
          new cn({
            img: V,
            anchor: S.getAnchor(),
            anchorXUnits: "pixels",
            anchorYUnits: "pixels",
            offset: S.getOrigin(),
            opacity: 1,
            size: S.getSize(),
            scale: S.getScale(),
            rotation: S.getRotation(),
            rotateWithView: S.getRotateWithView()
          })
        );
      }
      const O = Y.getZIndex() || 0;
      let G = p[O];
      G || (G = {}, p[O] = G, G.Polygon = [], G.Circle = [], G.LineString = [], G.Point = []);
      const et = k.getType();
      if (et === "GeometryCollection") {
        const K = (
          /** @type {import("../../geom/GeometryCollection.js").default} */
          k.getGeometriesArrayRecursive()
        );
        for (let J = 0, V = K.length; J < V; ++J) {
          const ot = K[J];
          G[ot.getType().replace("Multi", "")].push(
            ot,
            Y
          );
        }
      } else
        G[et.replace("Multi", "")].push(k, Y);
    }
  }
  const y = Object.keys(p).map(Number).sort(Oe);
  for (let C = 0, E = y.length; C < E; ++C) {
    const x = p[y[C]];
    for (const v in x) {
      const T = x[v];
      for (let I = 0, w = T.length; I < w; I += 2) {
        g.setStyle(T[I + 1]);
        for (let D = 0, P = t.length; D < P; ++D)
          g.setTransform(t[D]), g.drawGeometry(T[I]);
      }
    }
  }
  return d.getImageData(0, 0, f.width, f.height);
}
function Kd(n, t, e) {
  const i = [];
  if (e) {
    const s = Math.floor(Math.round(n[0]) * Jt), r = Math.floor(Math.round(n[1]) * Jt), o = (lt(s, 0, e.width - 1) + lt(r, 0, e.height - 1) * e.width) * 4, a = e.data[o], l = e.data[o + 1], c = e.data[o + 2] + 256 * (l + 256 * a), u = Math.floor((256 * 256 * 256 - 1) / t.length);
    c && c % u === 0 && i.push(t[c / u - 1]);
  }
  return i;
}
const Ud = 0.5, rl = {
  Point: $d,
  LineString: Qd,
  Polygon: ef,
  MultiPoint: tf,
  MultiLineString: qd,
  MultiPolygon: Jd,
  GeometryCollection: jd,
  Circle: Zd
};
function Vd(n, t) {
  return parseInt(Q(n), 10) - parseInt(Q(t), 10);
}
function $s(n, t) {
  const e = ol(n, t);
  return e * e;
}
function ol(n, t) {
  return Ud * n / t;
}
function Zd(n, t, e, i) {
  const s = e.getFill(), r = e.getStroke();
  if (s || r) {
    const a = n.getBuilder(e.getZIndex(), "Circle");
    a.setFillStrokeStyle(s, r), a.drawCircle(t, i);
  }
  const o = e.getText();
  if (o && o.getText()) {
    const a = n.getBuilder(e.getZIndex(), "Text");
    a.setTextStyle(o), a.drawText(t, i);
  }
}
function Uo(n, t, e, i, s, r, o, a) {
  const l = [], h = e.getImage();
  if (h) {
    let d = !0;
    const f = h.getImageState();
    f == X.LOADED || f == X.ERROR ? d = !1 : f == X.IDLE && h.load(), d && l.push(h.ready());
  }
  const c = e.getFill();
  c && c.loading() && l.push(c.ready());
  const u = l.length > 0;
  return u && Promise.all(l).then(() => s(null)), Hd(
    n,
    t,
    e,
    i,
    r,
    o,
    a
  ), u;
}
function Hd(n, t, e, i, s, r, o) {
  const a = e.getGeometryFunction()(t);
  if (!a)
    return;
  const l = a.simplifyTransformed(
    i,
    s
  );
  if (e.getRenderer())
    al(n, l, e, t, o);
  else {
    const c = rl[l.getType()];
    c(
      n,
      l,
      e,
      t,
      o,
      r
    );
  }
}
function al(n, t, e, i, s) {
  if (t.getType() == "GeometryCollection") {
    const o = (
      /** @type {import("../geom/GeometryCollection.js").default} */
      t.getGeometries()
    );
    for (let a = 0, l = o.length; a < l; ++a)
      al(n, o[a], e, i, s);
    return;
  }
  n.getBuilder(e.getZIndex(), "Default").drawCustom(
    /** @type {import("../geom/SimpleGeometry.js").default} */
    t,
    i,
    e.getRenderer(),
    e.getHitDetectionRenderer(),
    s
  );
}
function jd(n, t, e, i, s, r) {
  const o = t.getGeometriesArray();
  let a, l;
  for (a = 0, l = o.length; a < l; ++a) {
    const h = rl[o[a].getType()];
    h(
      n,
      o[a],
      e,
      i,
      s,
      r
    );
  }
}
function Qd(n, t, e, i, s) {
  const r = e.getStroke();
  if (r) {
    const a = n.getBuilder(
      e.getZIndex(),
      "LineString"
    );
    a.setFillStrokeStyle(null, r), a.drawLineString(t, i, s);
  }
  const o = e.getText();
  if (o && o.getText()) {
    const a = n.getBuilder(e.getZIndex(), "Text");
    a.setTextStyle(o), a.drawText(t, i, s);
  }
}
function qd(n, t, e, i, s) {
  const r = e.getStroke();
  if (r) {
    const a = n.getBuilder(
      e.getZIndex(),
      "LineString"
    );
    a.setFillStrokeStyle(null, r), a.drawMultiLineString(t, i, s);
  }
  const o = e.getText();
  if (o && o.getText()) {
    const a = n.getBuilder(e.getZIndex(), "Text");
    a.setTextStyle(o), a.drawText(t, i, s);
  }
}
function Jd(n, t, e, i, s) {
  const r = e.getFill(), o = e.getStroke();
  if (o || r) {
    const l = n.getBuilder(e.getZIndex(), "Polygon");
    l.setFillStrokeStyle(r, o), l.drawMultiPolygon(t, i, s);
  }
  const a = e.getText();
  if (a && a.getText()) {
    const l = n.getBuilder(e.getZIndex(), "Text");
    l.setTextStyle(a), l.drawText(t, i, s);
  }
}
function $d(n, t, e, i, s, r) {
  const o = e.getImage(), a = e.getText(), l = a && a.getText(), h = r && o && l ? {} : void 0;
  if (o) {
    if (o.getImageState() != X.LOADED)
      return;
    const c = n.getBuilder(e.getZIndex(), "Image");
    c.setImageStyle(o, h), c.drawPoint(t, i, s);
  }
  if (l) {
    const c = n.getBuilder(e.getZIndex(), "Text");
    c.setTextStyle(a, h), c.drawText(t, i, s);
  }
}
function tf(n, t, e, i, s, r) {
  const o = e.getImage(), a = o && o.getOpacity() !== 0, l = e.getText(), h = l && l.getText(), c = r && a && h ? {} : void 0;
  if (a) {
    if (o.getImageState() != X.LOADED)
      return;
    const u = n.getBuilder(e.getZIndex(), "Image");
    u.setImageStyle(o, c), u.drawMultiPoint(t, i, s);
  }
  if (h) {
    const u = n.getBuilder(e.getZIndex(), "Text");
    u.setTextStyle(l, c), u.drawText(t, i, s);
  }
}
function ef(n, t, e, i, s) {
  const r = e.getFill(), o = e.getStroke();
  if (r || o) {
    const l = n.getBuilder(e.getZIndex(), "Polygon");
    l.setFillStrokeStyle(r, o), l.drawPolygon(t, i, s);
  }
  const a = e.getText();
  if (a && a.getText()) {
    const l = n.getBuilder(e.getZIndex(), "Text");
    l.setTextStyle(a), l.drawText(t, i, s);
  }
}
class nf extends Ra {
  /**
   * @param {import("../../layer/BaseVector.js").default} vectorLayer Vector layer.
   */
  constructor(t) {
    super(t), this.boundHandleStyleImageChange_ = this.handleStyleImageChange_.bind(this), this.animatingOrInteracting_, this.hitDetectionImageData_ = null, this.renderedFeatures_ = null, this.renderedRevision_ = -1, this.renderedResolution_ = NaN, this.renderedExtent_ = Wt(), this.wrappedRenderedExtent_ = Wt(), this.renderedRotation_, this.renderedCenter_ = null, this.renderedProjection_ = null, this.renderedPixelRatio_ = 1, this.renderedRenderOrder_ = null, this.replayGroup_ = null, this.replayGroupChanged = !0, this.clipping = !0, this.compositionContext_ = null, this.opacity_ = 1;
  }
  /**
   * @param {ExecutorGroup} executorGroup Executor group.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {boolean} [declutterable] `true` to only render declutterable items,
   *     `false` to only render non-declutterable items, `undefined` to render all.
   */
  renderWorlds(t, e, i) {
    const s = e.extent, r = e.viewState, o = r.center, a = r.resolution, l = r.projection, h = r.rotation, c = l.getExtent(), u = this.getLayer().getSource(), d = this.getLayer().getDeclutter(), f = e.pixelRatio, g = e.viewHints, m = !(g[_t.ANIMATING] || g[_t.INTERACTING]), _ = this.compositionContext_, p = Math.round(e.size[0] * f), y = Math.round(e.size[1] * f), C = u.getWrapX() && l.canWrapX(), E = C ? tt(c) : null, x = C ? Math.ceil((s[2] - c[2]) / E) + 1 : 1;
    let v = C ? Math.floor((s[0] - c[0]) / E) : 0;
    do {
      const T = this.getRenderTransform(
        o,
        a,
        h,
        f,
        p,
        y,
        v * E
      );
      t.execute(
        _,
        [_.canvas.width, _.canvas.height],
        T,
        h,
        m,
        i === void 0 ? Yi : i ? nl : Bd,
        i ? d && e.declutter[d] : void 0
      );
    } while (++v < x);
  }
  setupCompositionContext_() {
    if (this.opacity_ !== 1) {
      const t = ft(
        this.context.canvas.width,
        this.context.canvas.height,
        xo
      );
      this.compositionContext_ = t;
    } else
      this.compositionContext_ = this.context;
  }
  releaseCompositionContext_() {
    if (this.opacity_ !== 1) {
      const t = this.context.globalAlpha;
      this.context.globalAlpha = this.opacity_, this.context.drawImage(this.compositionContext_.canvas, 0, 0), this.context.globalAlpha = t, is(this.compositionContext_), xo.push(this.compositionContext_.canvas), this.compositionContext_ = null;
    }
  }
  /**
   * Render declutter items for this layer
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   */
  renderDeclutter(t) {
    this.getLayer().getDeclutter() && (this.setupCompositionContext_(), this.renderWorlds(this.replayGroup_, t, !0), this.releaseCompositionContext_());
  }
  /**
   * Render deferred instructions.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   */
  renderDeferredInternal(t) {
    this.replayGroup_.renderDeferred();
  }
  /**
   * Render the layer.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement|null} target Target that may be used to render content to.
   * @return {HTMLElement|null} The rendered element.
   */
  renderFrame(t, e) {
    const i = t.pixelRatio, s = t.layerStatesArray[t.layerIndex];
    ah(this.pixelTransform, 1 / i, 1 / i), mr(this.inversePixelTransform, this.pixelTransform);
    const r = ha(this.pixelTransform);
    this.useContainer(e, r, this.getBackground(t));
    const o = this.context, a = o.canvas, l = this.replayGroup_;
    let h = l && !l.isEmpty();
    if (!h && !(this.getLayer().hasListener(Bt.PRERENDER) || this.getLayer().hasListener(Bt.POSTRENDER)))
      return null;
    const c = Math.round(t.size[0] * i), u = Math.round(t.size[1] * i);
    a.width != c || a.height != u ? (a.width = c, a.height = u, a.style.transform !== r && (a.style.transform = r)) : this.containerReused || o.clearRect(0, 0, c, u), this.preRender(o, t);
    const d = t.viewState;
    d.projection, this.opacity_ = s.opacity, this.setupCompositionContext_();
    let f = !1;
    if (h && s.extent && this.clipping) {
      const g = Ke(s.extent);
      h = Rt(g, t.extent), f = h && !di(g, t.extent), f && this.clipUnrotated(this.compositionContext_, t, g);
    }
    return h && this.renderWorlds(
      l,
      t,
      this.getLayer().getDeclutter() ? !1 : void 0
    ), f && this.compositionContext_.restore(), this.releaseCompositionContext_(), this.postRender(o, t), this.renderedRotation_ !== d.rotation && (this.renderedRotation_ = d.rotation, this.hitDetectionImageData_ = null), this.container;
  }
  /**
   * Asynchronous layer level hit detection.
   * @param {import("../../pixel.js").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../../Feature").default>>} Promise
   * that resolves with an array of features.
   */
  getFeatures(t) {
    return new Promise((e) => {
      if (!this.hitDetectionImageData_ && !this.animatingOrInteracting_) {
        const i = [this.context.canvas.width, this.context.canvas.height];
        ut(this.pixelTransform, i);
        const s = this.renderedCenter_, r = this.renderedResolution_, o = this.renderedRotation_, a = this.renderedProjection_, l = this.wrappedRenderedExtent_, h = this.getLayer(), c = [], u = i[0] * Jt, d = i[1] * Jt;
        c.push(
          this.getRenderTransform(
            s,
            r,
            o,
            Jt,
            u,
            d,
            0
          ).slice()
        );
        const f = h.getSource(), g = a.getExtent();
        if (f.getWrapX() && a.canWrapX() && !di(g, l)) {
          let m = l[0];
          const _ = tt(g);
          let p = 0, y;
          for (; m < g[0]; )
            --p, y = _ * p, c.push(
              this.getRenderTransform(
                s,
                r,
                o,
                Jt,
                u,
                d,
                y
              ).slice()
            ), m += _;
          for (p = 0, m = l[2]; m > g[2]; )
            ++p, y = _ * p, c.push(
              this.getRenderTransform(
                s,
                r,
                o,
                Jt,
                u,
                d,
                y
              ).slice()
            ), m -= _;
        }
        this.hitDetectionImageData_ = Yd(
          i,
          c,
          this.renderedFeatures_,
          h.getStyleFunction(),
          l,
          r,
          o,
          $s(r, this.renderedPixelRatio_),
          null
        );
      }
      e(
        Kd(t, this.renderedFeatures_, this.hitDetectionImageData_)
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
  forEachFeatureAtCoordinate(t, e, i, s, r) {
    if (!this.replayGroup_)
      return;
    const o = e.viewState.resolution, a = e.viewState.rotation, l = this.getLayer(), h = {}, c = function(g, m, _) {
      const p = Q(g), y = h[p];
      if (y) {
        if (y !== !0 && _ < y.distanceSq) {
          if (_ === 0)
            return h[p] = !0, r.splice(r.lastIndexOf(y), 1), s(g, l, m);
          y.geometry = m, y.distanceSq = _;
        }
      } else {
        if (_ === 0)
          return h[p] = !0, s(g, l, m);
        r.push(
          h[p] = {
            feature: g,
            layer: l,
            geometry: m,
            distanceSq: _,
            callback: s
          }
        );
      }
    };
    let u;
    const d = [this.replayGroup_], f = this.getLayer().getDeclutter();
    return d.some((g) => u = g.forEachFeatureAtCoordinate(
      t,
      o,
      a,
      i,
      c,
      f && e.declutter[f] ? e.declutter[f].all().map((m) => m.value) : null
    )), u;
  }
  /**
   * Perform action necessary to get the layer rendered after new fonts have loaded
   */
  handleFontsChanged() {
    const t = this.getLayer();
    t.getVisible() && this.replayGroup_ && t.changed();
  }
  /**
   * Handle changes in image style state.
   * @param {import("../../events/Event.js").default} event Image style change event.
   * @private
   */
  handleStyleImageChange_(t) {
    this.renderIfReadyAndVisible();
  }
  /**
   * Determine whether render should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   */
  prepareFrame(t) {
    const e = this.getLayer(), i = e.getSource();
    if (!i)
      return !1;
    const s = t.viewHints[_t.ANIMATING], r = t.viewHints[_t.INTERACTING], o = e.getUpdateWhileAnimating(), a = e.getUpdateWhileInteracting();
    if (this.ready && !o && s || !a && r)
      return this.animatingOrInteracting_ = !0, !0;
    this.animatingOrInteracting_ = !1;
    const l = t.extent, h = t.viewState, c = h.projection, u = h.resolution, d = t.pixelRatio, f = e.getRevision(), g = e.getRenderBuffer();
    let m = e.getRenderOrder();
    m === void 0 && (m = Vd);
    const _ = h.center.slice(), p = sr(
      l,
      g * u
    ), y = p.slice(), C = [p.slice()], E = c.getExtent();
    if (i.getWrapX() && c.canWrapX() && !di(E, t.extent)) {
      const B = tt(E), W = Math.max(tt(p) / 2, B);
      p[0] = E[0] - W, p[2] = E[2] + W, ra(_, c);
      const S = sa(C[0], c);
      S[0] < E[0] && S[2] < E[2] ? C.push([
        S[0] + B,
        S[1],
        S[2] + B,
        S[3]
      ]) : S[0] > E[0] && S[2] > E[2] && C.push([
        S[0] - B,
        S[1],
        S[2] - B,
        S[3]
      ]);
    }
    if (this.ready && this.renderedResolution_ == u && this.renderedRevision_ == f && this.renderedRenderOrder_ == m && di(this.wrappedRenderedExtent_, p))
      return Ne(this.renderedExtent_, y) || (this.hitDetectionImageData_ = null, this.renderedExtent_ = y), this.renderedCenter_ = _, this.replayGroupChanged = !1, !0;
    this.replayGroup_ = null;
    const x = new kd(
      ol(u, d),
      p,
      u,
      d
    );
    let v;
    for (let B = 0, W = C.length; B < W; ++B)
      i.loadFeatures(C[B], u, c);
    const T = $s(u, d);
    let I = !0;
    const w = (
      /**
       * @param {import("../../Feature.js").default} feature Feature.
       * @param {number} index Index.
       */
      (B, W) => {
        let S;
        const O = B.getStyleFunction() || e.getStyleFunction();
        if (O && (S = O(B, u)), S) {
          const G = this.renderFeature(
            B,
            T,
            S,
            x,
            v,
            this.getLayer().getDeclutter(),
            W
          );
          I = I && !G;
        }
      }
    ), D = ur(p), P = i.getFeaturesInExtent(D);
    m && P.sort(m);
    for (let B = 0, W = P.length; B < W; ++B)
      w(P[B], B);
    this.renderedFeatures_ = P, this.ready = I;
    const k = x.finish(), Y = new Wd(
      p,
      u,
      d,
      i.getOverlaps(),
      k,
      e.getRenderBuffer(),
      !!t.declutter
    );
    return this.renderedResolution_ = u, this.renderedRevision_ = f, this.renderedRenderOrder_ = m, this.renderedExtent_ = y, this.wrappedRenderedExtent_ = p, this.renderedCenter_ = _, this.renderedProjection_ = c, this.renderedPixelRatio_ = d, this.replayGroup_ = Y, this.hitDetectionImageData_ = null, this.replayGroupChanged = !0, !0;
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
  renderFeature(t, e, i, s, r, o, a) {
    if (!i)
      return !1;
    let l = !1;
    if (Array.isArray(i))
      for (let h = 0, c = i.length; h < c; ++h)
        l = Uo(
          s,
          t,
          i[h],
          e,
          this.boundHandleStyleImageChange_,
          r,
          o,
          a
        ) || l;
    else
      l = Uo(
        s,
        t,
        i,
        e,
        this.boundHandleStyleImageChange_,
        r,
        o,
        a
      );
    return l;
  }
}
class sf extends Ha {
  /**
   * @param {import("./BaseVector.js").Options<VectorSourceType>} [options] Options.
   */
  constructor(t) {
    super(t);
  }
  createRenderer() {
    return new nf(this);
  }
}
class Vo {
  /**
   * @param {number} [maxEntries] Max entries.
   */
  constructor(t) {
    this.rbush_ = new Fa(t), this.items_ = {};
  }
  /**
   * Insert a value into the RBush.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {T} value Value.
   */
  insert(t, e) {
    const i = {
      minX: t[0],
      minY: t[1],
      maxX: t[2],
      maxY: t[3],
      value: e
    };
    this.rbush_.insert(i), this.items_[Q(e)] = i;
  }
  /**
   * Bulk-insert values into the RBush.
   * @param {Array<import("../extent.js").Extent>} extents Extents.
   * @param {Array<T>} values Values.
   */
  load(t, e) {
    const i = new Array(e.length);
    for (let s = 0, r = e.length; s < r; s++) {
      const o = t[s], a = e[s], l = {
        minX: o[0],
        minY: o[1],
        maxX: o[2],
        maxY: o[3],
        value: a
      };
      i[s] = l, this.items_[Q(a)] = l;
    }
    this.rbush_.load(i);
  }
  /**
   * Remove a value from the RBush.
   * @param {T} value Value.
   * @return {boolean} Removed.
   */
  remove(t) {
    const e = Q(t), i = this.items_[e];
    return delete this.items_[e], this.rbush_.remove(i) !== null;
  }
  /**
   * Update the extent of a value in the RBush.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {T} value Value.
   */
  update(t, e) {
    const i = this.items_[Q(e)], s = [i.minX, i.minY, i.maxX, i.maxY];
    Vi(s, t) || (this.remove(e), this.insert(t, e));
  }
  /**
   * Return all values in the RBush.
   * @return {Array<T>} All.
   */
  getAll() {
    return this.rbush_.all().map(function(e) {
      return e.value;
    });
  }
  /**
   * Return all values in the given extent.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {Array<T>} All in extent.
   */
  getInExtent(t) {
    const e = {
      minX: t[0],
      minY: t[1],
      maxX: t[2],
      maxY: t[3]
    };
    return this.rbush_.search(e).map(function(s) {
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
  forEach(t) {
    return this.forEach_(this.getAll(), t);
  }
  /**
   * Calls a callback function with each value in the provided extent.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {function(T): *} callback Callback.
   * @return {*} Callback return value.
   */
  forEachInExtent(t, e) {
    return this.forEach_(this.getInExtent(t), e);
  }
  /**
   * @param {Array<T>} values Values.
   * @param {function(T): *} callback Callback.
   * @private
   * @return {*} Callback return value.
   */
  forEach_(t, e) {
    let i;
    for (let s = 0, r = t.length; s < r; s++)
      if (i = e(t[s]), i)
        return i;
    return i;
  }
  /**
   * @return {boolean} Is empty.
   */
  isEmpty() {
    return xi(this.items_);
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
  getExtent(t) {
    const e = this.rbush_.toJSON();
    return ke(e.minX, e.minY, e.maxX, e.maxY, t);
  }
  /**
   * @param {RBush} rbush R-Tree.
   */
  concat(t) {
    this.rbush_.load(t.rbush_.all());
    for (const e in t.items_)
      this.items_[e] = t.items_[e];
  }
}
function rf(n, t, e, i) {
  const s = [];
  let r = Wt();
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o];
    r = or(
      n,
      t,
      l[0],
      i
    ), s.push((r[0] + r[2]) / 2, (r[1] + r[3]) / 2), t = l[l.length - 1];
  }
  return s;
}
const Zo = Ht();
class Nt {
  /**
   * @param {Type} type Geometry type.
   * @param {Array<number>} flatCoordinates Flat coordinates. These always need
   *     to be right-handed for polygons.
   * @param {Array<number>} ends Ends.
   * @param {number} stride Stride.
   * @param {Object<string, *>} properties Properties.
   * @param {number|string|undefined} id Feature id.
   */
  constructor(t, e, i, s, r, o) {
    this.styleFunction, this.extent_, this.id_ = o, this.type_ = t, this.flatCoordinates_ = e, this.flatInteriorPoints_ = null, this.flatMidpoints_ = null, this.ends_ = i || null, this.properties_ = r, this.squaredTolerance_, this.stride_ = s, this.simplifiedGeometry_;
  }
  /**
   * Get a feature property by its key.
   * @param {string} key Key
   * @return {*} Value for the requested key.
   * @api
   */
  get(t) {
    return this.properties_[t];
  }
  /**
   * Get the extent of this feature's geometry.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */
  getExtent() {
    return this.extent_ || (this.extent_ = this.type_ === "Point" ? ea(this.flatCoordinates_) : or(
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
      const t = je(this.getExtent());
      this.flatInteriorPoints_ = Er(
        this.flatCoordinates_,
        0,
        this.ends_,
        2,
        t,
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
      const t = Rh(this.flatCoordinates_, this.ends_), e = rf(this.flatCoordinates_, 0, t, 2);
      this.flatInteriorPoints_ = wh(
        this.flatCoordinates_,
        0,
        t,
        2,
        e
      );
    }
    return this.flatInteriorPoints_;
  }
  /**
   * @return {Array<number>} Flat midpoint.
   */
  getFlatMidpoint() {
    return this.flatMidpoints_ || (this.flatMidpoints_ = Js(
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
      const t = this.flatCoordinates_;
      let e = 0;
      const i = (
        /** @type {Array<number>} */
        this.ends_
      );
      for (let s = 0, r = i.length; s < r; ++s) {
        const o = i[s], a = Js(t, e, o, 2, 0.5);
        Yn(this.flatMidpoints_, a), e = o;
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
  getSimplifiedGeometry(t) {
    return this;
  }
  /**
   * Get a transformed and simplified version of the geometry.
   * @param {number} squaredTolerance Squared tolerance.
   * @param {import("../proj.js").TransformFunction} [transform] Optional transform function.
   * @return {RenderFeature} Simplified geometry.
   */
  simplifyTransformed(t, e) {
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
  transform(t) {
    t = zt(t);
    const e = t.getExtent(), i = t.getWorldExtent();
    if (e && i) {
      const s = St(i) / St(e);
      pe(
        Zo,
        i[0],
        i[3],
        s,
        -s,
        0,
        0,
        0
      ), Pe(
        this.flatCoordinates_,
        0,
        this.flatCoordinates_.length,
        2,
        Zo,
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
  applyTransform(t) {
    t(this.flatCoordinates_, this.flatCoordinates_, this.stride_);
  }
  /**
   * @return {RenderFeature} A cloned render feature.
   */
  clone() {
    var t;
    return new Nt(
      this.type_,
      this.flatCoordinates_.slice(),
      (t = this.ends_) == null ? void 0 : t.slice(),
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
    return this.simplifyTransformed = Qo((t, e) => {
      if (t === this.squaredTolerance_)
        return this.simplifiedGeometry_;
      this.simplifiedGeometry_ = this.clone(), e && this.simplifiedGeometry_.applyTransform(e);
      const i = this.simplifiedGeometry_.getFlatCoordinates();
      let s;
      switch (this.type_) {
        case "LineString":
          i.length = $n(
            i,
            0,
            this.simplifiedGeometry_.flatCoordinates_.length,
            this.simplifiedGeometry_.stride_,
            t,
            i,
            0
          ), s = [i.length];
          break;
        case "MultiLineString":
          s = [], i.length = yh(
            i,
            0,
            this.simplifiedGeometry_.ends_,
            this.simplifiedGeometry_.stride_,
            t,
            i,
            0,
            s
          );
          break;
        case "Polygon":
          s = [], i.length = ua(
            i,
            0,
            this.simplifiedGeometry_.ends_,
            this.simplifiedGeometry_.stride_,
            Math.sqrt(t),
            i,
            0,
            s
          );
          break;
      }
      return s && (this.simplifiedGeometry_ = new Nt(
        this.type_,
        i,
        s,
        2,
        this.properties_,
        this.id_
      )), this.squaredTolerance_ = t, this.simplifiedGeometry_;
    }), this;
  }
}
Nt.prototype.getFlatCoordinates = Nt.prototype.getOrientedFlatCoordinates;
const Vt = {
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
function of(n, t) {
  return [[-1 / 0, -1 / 0, 1 / 0, 1 / 0]];
}
let af = !1;
function lf(n, t, e, i, s, r, o) {
  const a = new XMLHttpRequest();
  a.open(
    "GET",
    typeof n == "function" ? n(e, i, s) : n,
    !0
  ), t.getType() == "arraybuffer" && (a.responseType = "arraybuffer"), a.withCredentials = af, a.onload = function(l) {
    if (!a.status || a.status >= 200 && a.status < 300) {
      const h = t.getType();
      let c;
      h == "json" ? c = JSON.parse(a.responseText) : h == "text" ? c = a.responseText : h == "xml" ? (c = a.responseXML, c || (c = new DOMParser().parseFromString(
        a.responseText,
        "application/xml"
      ))) : h == "arraybuffer" && (c = /** @type {ArrayBuffer} */
      a.response), c ? r(
        /** @type {Array<import("./Feature.js").default>} */
        t.readFeatures(c, {
          extent: e,
          featureProjection: s
        }),
        t.readProjection(c)
      ) : o();
    } else
      o();
  }, a.onerror = o, a.send();
}
function Ho(n, t) {
  return function(e, i, s, r, o) {
    const a = (
      /** @type {import("./source/Vector").default} */
      this
    );
    lf(
      n,
      t,
      e,
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
      o || Ei
    );
  };
}
class Re extends Ee {
  /**
   * @param {string} type Type.
   * @param {FeatureClass} [feature] Feature.
   * @param {Array<FeatureClass>} [features] Features.
   */
  constructor(t, e, i) {
    super(t), this.feature = e, this.features = i;
  }
}
class hf extends ba {
  /**
   * @param {Options<FeatureType>} [options] Vector source options.
   */
  constructor(t) {
    t = t || {}, super({
      attributions: t.attributions,
      interpolate: !0,
      projection: void 0,
      state: "ready",
      wrapX: t.wrapX !== void 0 ? t.wrapX : !0
    }), this.on, this.once, this.un, this.loader_ = Ei, this.format_ = t.format, this.overlaps_ = t.overlaps === void 0 ? !0 : t.overlaps, this.url_ = t.url, t.loader !== void 0 ? this.loader_ = t.loader : this.url_ !== void 0 && (U(this.format_, "`format` must be set when `url` is set"), this.loader_ = Ho(
      this.url_,
      /** @type {import("../format/Feature.js").default} */
      this.format_
    )), this.strategy_ = t.strategy !== void 0 ? t.strategy : of;
    const e = t.useSpatialIndex !== void 0 ? t.useSpatialIndex : !0;
    this.featuresRtree_ = e ? new Vo() : null, this.loadedExtentsRtree_ = new Vo(), this.loadingExtentsCount_ = 0, this.nullGeometryFeatures_ = {}, this.idIndex_ = {}, this.uidIndex_ = {}, this.featureChangeKeys_ = {}, this.featuresCollection_ = null;
    let i, s;
    Array.isArray(t.features) ? s = t.features : t.features && (i = t.features, s = i.getArray()), !e && i === void 0 && (i = new $t(s)), s !== void 0 && this.addFeaturesInternal(s), i !== void 0 && this.bindFeaturesCollection_(i);
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
  addFeature(t) {
    this.addFeatureInternal(t), this.changed();
  }
  /**
   * Add a feature without firing a `change` event.
   * @param {FeatureType} feature Feature.
   * @protected
   */
  addFeatureInternal(t) {
    const e = Q(t);
    if (!this.addToIndex_(e, t)) {
      this.featuresCollection_ && this.featuresCollection_.remove(t);
      return;
    }
    this.setupChangeEvents_(e, t);
    const i = t.getGeometry();
    if (i) {
      const s = i.getExtent();
      this.featuresRtree_ && this.featuresRtree_.insert(s, t);
    } else
      this.nullGeometryFeatures_[e] = t;
    this.dispatchEvent(
      new Re(Vt.ADDFEATURE, t)
    );
  }
  /**
   * @param {string} featureKey Unique identifier for the feature.
   * @param {FeatureType} feature The feature.
   * @private
   */
  setupChangeEvents_(t, e) {
    e instanceof Nt || (this.featureChangeKeys_[t] = [
      j(e, N.CHANGE, this.handleFeatureChange_, this),
      j(
        e,
        yi.PROPERTYCHANGE,
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
  addToIndex_(t, e) {
    let i = !0;
    if (e.getId() !== void 0) {
      const s = String(e.getId());
      if (!(s in this.idIndex_))
        this.idIndex_[s] = e;
      else if (e instanceof Nt) {
        const r = this.idIndex_[s];
        r instanceof Nt ? Array.isArray(r) ? r.push(e) : this.idIndex_[s] = [r, e] : i = !1;
      } else
        i = !1;
    }
    return i && (U(
      !(t in this.uidIndex_),
      "The passed `feature` was already added to the source"
    ), this.uidIndex_[t] = e), i;
  }
  /**
   * Add a batch of features to the source.
   * @param {Array<FeatureType>} features Features to add.
   * @api
   */
  addFeatures(t) {
    this.addFeaturesInternal(t), this.changed();
  }
  /**
   * Add features without firing a `change` event.
   * @param {Array<FeatureType>} features Features.
   * @protected
   */
  addFeaturesInternal(t) {
    const e = [], i = [], s = [];
    for (let r = 0, o = t.length; r < o; r++) {
      const a = t[r], l = Q(a);
      this.addToIndex_(l, a) && i.push(a);
    }
    for (let r = 0, o = i.length; r < o; r++) {
      const a = i[r], l = Q(a);
      this.setupChangeEvents_(l, a);
      const h = a.getGeometry();
      if (h) {
        const c = h.getExtent();
        e.push(c), s.push(a);
      } else
        this.nullGeometryFeatures_[l] = a;
    }
    if (this.featuresRtree_ && this.featuresRtree_.load(e, s), this.hasListener(Vt.ADDFEATURE))
      for (let r = 0, o = i.length; r < o; r++)
        this.dispatchEvent(
          new Re(Vt.ADDFEATURE, i[r])
        );
  }
  /**
   * @param {!Collection<FeatureType>} collection Collection.
   * @private
   */
  bindFeaturesCollection_(t) {
    let e = !1;
    this.addEventListener(
      Vt.ADDFEATURE,
      /**
       * @param {VectorSourceEvent<FeatureType>} evt The vector source event
       */
      function(i) {
        e || (e = !0, t.push(i.feature), e = !1);
      }
    ), this.addEventListener(
      Vt.REMOVEFEATURE,
      /**
       * @param {VectorSourceEvent<FeatureType>} evt The vector source event
       */
      function(i) {
        e || (e = !0, t.remove(i.feature), e = !1);
      }
    ), t.addEventListener(
      It.ADD,
      /**
       * @param {import("../Collection.js").CollectionEvent<FeatureType>} evt The collection event
       */
      (i) => {
        e || (e = !0, this.addFeature(i.element), e = !1);
      }
    ), t.addEventListener(
      It.REMOVE,
      /**
       * @param {import("../Collection.js").CollectionEvent<FeatureType>} evt The collection event
       */
      (i) => {
        e || (e = !0, this.removeFeature(i.element), e = !1);
      }
    ), this.featuresCollection_ = t;
  }
  /**
   * Remove all features from the source.
   * @param {boolean} [fast] Skip dispatching of {@link module:ol/source/Vector.VectorSourceEvent#event:removefeature} events.
   * @api
   */
  clear(t) {
    if (t) {
      for (const i in this.featureChangeKeys_)
        this.featureChangeKeys_[i].forEach(it);
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
    const e = new Re(Vt.CLEAR);
    this.dispatchEvent(e), this.changed();
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
  forEachFeature(t) {
    if (this.featuresRtree_)
      return this.featuresRtree_.forEach(t);
    this.featuresCollection_ && this.featuresCollection_.forEach(t);
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
  forEachFeatureAtCoordinateDirect(t, e) {
    const i = [t[0], t[1], t[0], t[1]];
    return this.forEachFeatureInExtent(i, function(s) {
      const r = s.getGeometry();
      if (r instanceof Nt || r.intersectsCoordinate(t))
        return e(s);
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
  forEachFeatureInExtent(t, e) {
    if (this.featuresRtree_)
      return this.featuresRtree_.forEachInExtent(t, e);
    this.featuresCollection_ && this.featuresCollection_.forEach(e);
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
  forEachFeatureIntersectingExtent(t, e) {
    return this.forEachFeatureInExtent(
      t,
      /**
       * @param {FeatureType} feature Feature.
       * @return {T|undefined} The return value from the last call to the callback.
       */
      function(i) {
        const s = i.getGeometry();
        if (s instanceof Nt || s.intersectsExtent(t)) {
          const r = e(i);
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
    let t;
    return this.featuresCollection_ ? t = this.featuresCollection_.getArray().slice(0) : this.featuresRtree_ && (t = this.featuresRtree_.getAll(), xi(this.nullGeometryFeatures_) || Yn(t, Object.values(this.nullGeometryFeatures_))), t;
  }
  /**
   * Get all features whose geometry intersects the provided coordinate.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @return {Array<import("../Feature.js").default>} Features.
   * @api
   */
  getFeaturesAtCoordinate(t) {
    const e = [];
    return this.forEachFeatureAtCoordinateDirect(t, function(i) {
      e.push(i);
    }), e;
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
  getFeaturesInExtent(t, e) {
    if (this.featuresRtree_) {
      if (!(e && e.canWrapX() && this.getWrapX()))
        return this.featuresRtree_.getInExtent(t);
      const s = Bl(t, e);
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
  getClosestFeatureToCoordinate(t, e) {
    const i = t[0], s = t[1];
    let r = null;
    const o = [NaN, NaN];
    let a = 1 / 0;
    const l = [-1 / 0, -1 / 0, 1 / 0, 1 / 0];
    return e = e || Ki, this.featuresRtree_.forEachInExtent(
      l,
      /**
       * @param {FeatureType} feature Feature.
       */
      function(h) {
        if (e(h)) {
          const c = h.getGeometry(), u = a;
          if (a = c instanceof Nt ? 0 : c.closestPointXY(i, s, o, a), a < u) {
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
  getExtent(t) {
    return this.featuresRtree_.getExtent(t);
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
  getFeatureById(t) {
    const e = this.idIndex_[t.toString()];
    return e !== void 0 ? (
      /** @type {FeatureClassOrArrayOfRenderFeatures<FeatureType>} */
      e
    ) : null;
  }
  /**
   * Get a feature by its internal unique identifier (using `getUid`).
   *
   * @param {string} uid Feature identifier.
   * @return {FeatureType|null} The feature (or `null` if not found).
   */
  getFeatureByUid(t) {
    const e = this.uidIndex_[t];
    return e !== void 0 ? e : null;
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
  handleFeatureChange_(t) {
    const e = (
      /** @type {FeatureType} */
      t.target
    ), i = Q(e), s = e.getGeometry();
    if (!s)
      i in this.nullGeometryFeatures_ || (this.featuresRtree_ && this.featuresRtree_.remove(e), this.nullGeometryFeatures_[i] = e);
    else {
      const o = s.getExtent();
      i in this.nullGeometryFeatures_ ? (delete this.nullGeometryFeatures_[i], this.featuresRtree_ && this.featuresRtree_.insert(o, e)) : this.featuresRtree_ && this.featuresRtree_.update(o, e);
    }
    const r = e.getId();
    if (r !== void 0) {
      const o = r.toString();
      this.idIndex_[o] !== e && (this.removeFromIdIndex_(e), this.idIndex_[o] = e);
    } else
      this.removeFromIdIndex_(e), this.uidIndex_[i] = e;
    this.changed(), this.dispatchEvent(
      new Re(Vt.CHANGEFEATURE, e)
    );
  }
  /**
   * Returns true if the feature is contained within the source.
   * @param {FeatureType} feature Feature.
   * @return {boolean} Has feature.
   * @api
   */
  hasFeature(t) {
    const e = t.getId();
    return e !== void 0 ? e in this.idIndex_ : Q(t) in this.uidIndex_;
  }
  /**
   * @return {boolean} Is empty.
   */
  isEmpty() {
    return this.featuresRtree_ ? this.featuresRtree_.isEmpty() && xi(this.nullGeometryFeatures_) : this.featuresCollection_ ? this.featuresCollection_.getLength() === 0 : !0;
  }
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} resolution Resolution.
   * @param {import("../proj/Projection.js").default} projection Projection.
   */
  loadFeatures(t, e, i) {
    const s = this.loadedExtentsRtree_, r = this.strategy_(t, e, i);
    for (let o = 0, a = r.length; o < a; ++o) {
      const l = r[o];
      s.forEachInExtent(
        l,
        /**
         * @param {{extent: import("../extent.js").Extent}} object Object.
         * @return {boolean} Contains.
         */
        function(c) {
          return di(c.extent, l);
        }
      ) || (++this.loadingExtentsCount_, this.dispatchEvent(
        new Re(Vt.FEATURESLOADSTART)
      ), this.loader_.call(
        this,
        l,
        e,
        i,
        (c) => {
          --this.loadingExtentsCount_, this.dispatchEvent(
            new Re(
              Vt.FEATURESLOADEND,
              void 0,
              c
            )
          );
        },
        () => {
          --this.loadingExtentsCount_, this.dispatchEvent(
            new Re(Vt.FEATURESLOADERROR)
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
  removeLoadedExtent(t) {
    const e = this.loadedExtentsRtree_;
    let i;
    e.forEachInExtent(t, function(s) {
      if (Vi(s.extent, t))
        return i = s, !0;
    }), i && e.remove(i);
  }
  /**
   * Remove a single feature from the source.  If you want to remove all features
   * at once, use the {@link module:ol/source/Vector~VectorSource#clear #clear()} method
   * instead.
   * @param {FeatureType} feature Feature to remove.
   * @api
   */
  removeFeature(t) {
    if (!t)
      return;
    const e = Q(t);
    e in this.nullGeometryFeatures_ ? delete this.nullGeometryFeatures_[e] : this.featuresRtree_ && this.featuresRtree_.remove(t), this.removeFeatureInternal(t) && this.changed();
  }
  /**
   * Remove feature without firing a `change` event.
   * @param {FeatureType} feature Feature.
   * @return {FeatureType|undefined} The removed feature
   *     (or undefined if the feature was not found).
   * @protected
   */
  removeFeatureInternal(t) {
    const e = Q(t), i = this.featureChangeKeys_[e];
    if (!i)
      return;
    i.forEach(it), delete this.featureChangeKeys_[e];
    const s = t.getId();
    return s !== void 0 && delete this.idIndex_[s.toString()], delete this.uidIndex_[e], this.dispatchEvent(
      new Re(Vt.REMOVEFEATURE, t)
    ), t;
  }
  /**
   * Remove a feature from the id index.  Called internally when the feature id
   * may have changed.
   * @param {FeatureType} feature The feature.
   * @return {boolean} Removed the feature from the index.
   * @private
   */
  removeFromIdIndex_(t) {
    let e = !1;
    for (const i in this.idIndex_) {
      const s = this.idIndex_[i];
      if (t instanceof Nt && Array.isArray(s) && s.includes(t))
        s.splice(s.indexOf(t), 1);
      else if (this.idIndex_[i] === t) {
        delete this.idIndex_[i], e = !0;
        break;
      }
    }
    return e;
  }
  /**
   * Set the new loader of the source. The next render cycle will use the
   * new loader.
   * @param {import("../featureloader.js").FeatureLoader} loader The loader to set.
   * @api
   */
  setLoader(t) {
    this.loader_ = t;
  }
  /**
   * Points the source to a new url. The next render cycle will use the new url.
   * @param {string|import("../featureloader.js").FeatureUrlFunction} url Url.
   * @api
   */
  setUrl(t) {
    U(this.format_, "`format` must be set when `url` is set"), this.url_ = t, this.setLoader(Ho(t, this.format_));
  }
}
function jo(n) {
  if (!(n.context instanceof CanvasRenderingContext2D))
    throw new Error("Only works for render events from Canvas 2D layers");
  const t = n.inversePixelTransform[0], e = n.inversePixelTransform[1], i = Math.sqrt(t * t + e * e), s = n.frameState, r = sh(
    n.inversePixelTransform.slice(),
    s.coordinateToPixelTransform
  ), o = $s(
    s.viewState.resolution,
    i
  );
  let a;
  return new sl(
    n.context,
    i,
    s.extent,
    r,
    s.viewState.rotation,
    o,
    a
  );
}
const cf = "data:image/png;base64,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";
class uf {
  constructor(t, e, i) {
    this.map = t, this.speed = 200, this.tracksLayer = [], this.allOverAnimates = [], this.styles = {}, this.lastTime, this.distance = 0, this.animating = e, this.trackDetails = i;
  }
  singleTrack(t, e) {
    let i = t.map((u) => {
      let { longitude: d, latitude: f } = u;
      return cr([d, f], "EPSG:4326", "EPSG:3857");
    }), s = new rn(i);
    const r = new fi({
      type: "track",
      geometry: s
    }), o = new fi({
      type: "carTrack",
      geometry: new rn([s.getFirstCoordinate()])
    }), l = new fi({
      type: "geoMarker",
      geometry: new ts(s.getFirstCoordinate())
    }).getGeometry().clone(), h = o.getGeometry().clone(), c = new fi({
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
      trackLineCoordinate: t,
      layer: new sf({
        source: new hf({
          features: [r, o, c]
        }),
        style: (u) => u.get("type") === "track" ? new Gt({
          stroke: new Le({
            width: 6,
            color: e
          })
        }) : this.styles[u.get("type")]
      })
    };
  }
  initMultiplyTrack(t, e) {
    return t.map((i) => {
      var r;
      let s = (r = e.filter((o) => {
        var a;
        return +o.rybh == +((a = i[0]) == null ? void 0 : a.rybh);
      })[0]) == null ? void 0 : r.color;
      return console.log("🚀 ~ returntracks.map ~ currentTrackColor:", s), this.singleTrack(i, s);
    });
  }
  addLayer(t, e) {
    this.styles = {
      track: new Gt({
        stroke: new Le({
          width: 6,
          color: [220, 30, 60, 0.9]
        })
      }),
      carTrack: new Gt({
        stroke: new Le({
          width: 6,
          color: [117, 46, 195, 1]
        })
      }),
      icon: new Gt({
        image: new cn({
          anchor: [0.5, 0.5],
          scale: 0.3,
          src: cf
        })
      }),
      geoMarker: new Gt({
        image: new hn({
          radius: 8,
          fill: new vi({ color: "#333" }),
          stroke: new Le({
            color: "#f00",
            width: 2
          })
        })
      })
    }, Array.isArray(t) && t.length > 0 && (this.tracksLayer = this.initMultiplyTrack(t, e), this.tracksLayer.forEach((i) => {
      this.map.addLayer(i.layer);
    }));
  }
  drawCarTrack(t, e) {
    const i = jo(t);
    i.setStyle(this.styles.carTrack), i.drawGeometry(e.carPosition);
  }
  moveFeature(t, e) {
    const i = t.frameState.time, s = i - this.lastTime;
    this.distance = (this.distance + this.speed * s / 1e6) % 2;
    let r = Math.floor(this.distance * e.trackLineCoordinate.length), o = e.trackLineCoordinate[r];
    o && (this.trackDetails.value[o.rybh] = o), this.lastTime = i;
    const a = e.trackLine.getCoordinateAt(this.distance > 1 ? 2 - this.distance : this.distance);
    this.distance >= 1 && this.stopMove("single", e), e.position.setCoordinates(a), e.passCoordinates.push(a), e.carPosition.setCoordinates(e.passCoordinates), this.drawCarTrack(t, e);
    const l = jo(t);
    l.setStyle(this.styles.icon), l.drawGeometry(e.position), this.map.render();
  }
  resetMove(t, e) {
    console.log("🚀 ~ DrawTracks ~ resetMove ~ chooseTracks:", e), this.stopMove(), this.distance = 0, this.lastTime = null, this.allOverAnimates = [], this.animating.value = !1, this.tracksLayer.forEach((i) => {
      i.layer.getSource().clear();
    }), this.tracksLayer = [], this.addTrack(t, e);
  }
  startMove(t) {
    t.length && (this.animating.value || this.distance >= 1 || (this.animating.value = !0, this.lastTime = Date.now(), this.tracksLayer.forEach((e) => {
      e.moveFeature = (i) => this.moveFeature(i, e), e.layer.on("postrender", e.moveFeature), e.geoMarker.setGeometry(null);
    })));
  }
  checkAllOverAnimating() {
    this.allOverAnimates.length === this.tracksLayer.length && (this.animating.value = !1);
  }
  stopMove(t, e) {
    if (this.animating.value) {
      if (console.log("🚀 ~ stopMove ~ item:", e), t === "single") {
        e.geoMarker.setGeometry(e.position), e.carTrackFeature.setGeometry(e.carPosition), e.layer.un("postrender", e.moveFeature), this.allOverAnimates.push(!0), this.checkAllOverAnimating();
        return;
      }
      this.animating.value = !1, this.tracksLayer.forEach((i) => {
        i.geoMarker.setGeometry(i.position), i.carTrackFeature.setGeometry(i.carPosition), i.layer.un("postrender", i.moveFeature);
      });
    }
  }
  addTrack(t, e) {
    console.log("🚀 ~ addTrack ~ data:", t), this.addLayer(t, e);
  }
}
const df = "data:image/png;base64,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", ff = "data:image/png;base64,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", gf = "data:image/png;base64,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", mf = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [i, s] of t)
    e[i] = s;
  return e;
}, kr = (n) => (ml("data-v-813d2793"), n = n(), _l(), n), _f = {
  key: 0,
  class: "flex flex-justify-between flex-items-center"
}, pf = { class: "mb-3 flex-shrink flex" }, yf = {
  key: 1,
  class: "details rounded-2 overflow-hidden px-5 bg-dark-100 bg-opacity-90"
}, Ef = { class: "text-[15px] text-white line-clamp-1" }, xf = { class: "des flex flex-justify-between" }, Cf = /* @__PURE__ */ kr(() => /* @__PURE__ */ Ct("span", { class: "" }, "时间", -1)), wf = { class: "" }, Af = { class: "des flex flex-justify-between" }, If = /* @__PURE__ */ kr(() => /* @__PURE__ */ Ct("span", { class: "" }, "经度", -1)), vf = { class: "" }, Rf = { class: "des flex flex-justify-between" }, Tf = /* @__PURE__ */ kr(() => /* @__PURE__ */ Ct("span", { class: "" }, "维度", -1)), Sf = { class: "" }, Mf = {
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
  setup(n, { expose: t }) {
    const e = We(), i = We(), s = We([]), r = We([]), o = We([]), a = We(!1), l = We([]);
    let h = {}, c = null;
    const u = n, d = () => {
      c == null || c.startMove(r.value);
    }, f = () => {
      c == null || c.stopMove();
    }, g = () => {
      _();
    }, m = () => {
      e.value = new Ad({
        // 设置地图图层
        layers: [
          // 创建一个使用Open Street Map地图源的瓦片图层
          new lc({ source: u.source || new Mc() })
        ],
        // 设置显示地图的视图
        view: new qt({
          // 地图中心点
          center: cr([121.480248, 31.036276], "EPSG:4326", "EPSG:3857"),
          zoom: 10
          // 层级显示为10
        }),
        // ref="mapRef"作为地图的容器
        target: i.value
      }), c = new uf(e.value, a, l);
    }, _ = () => {
      let E = C(s.value, r.value);
      c.resetMove(E, r.value);
    }, p = () => {
      h = {}, r.value.map((E) => {
        let x = l.value[E.rybh];
        x != null && x.rybh && (h[x.rybh] = x);
      }), l.value = h;
    }, y = () => {
      p(), _();
    }, C = (E, x) => {
      let v = [];
      return x.forEach((T) => {
        let I = E.filter((w) => T.rybh === w.rybh);
        I.length && v.push(I[0].streams);
      }), v;
    };
    return fl(() => {
      c == null || c.stopMove();
    }), gl(async () => {
      const { streams: E, colors: x } = u;
      console.log("🚀 ~ onMounted ~ props:", u), m();
      let v = E, T = x || [
        [220, 30, 60, 0.9],
        [255, 165, 0, 0.9],
        [255, 255, 0, 0.9],
        [0, 128, 0, 0.9],
        [0, 0, 255, 0.9],
        [0, 255, 255, 0.9]
      ], I = v.map((D, P) => {
        let { hphm: k, rybh: Y, sgid: B } = D;
        return {
          hphm: k,
          rybh: Y,
          sgid: B,
          color: T[P]
        };
      });
      s.value = v, o.value = I;
      const w = C(v, []);
      c.addTrack(w, r.value);
    }), t({ startAnimate: d, stopAnimate: f, resetAnimate: g }), (E, x) => {
      const v = _s("el-image"), T = _s("el-checkbox"), I = _s("el-checkbox-group");
      return he(), ti("div", {
        class: "track-area",
        style: Yr(n.height)
      }, [
        n.showHeader ? Kr((he(), ti("div", _f, [
          Ct("div", pf, [
            a.value ? (he(), ps(v, {
              key: 1,
              class: "w-9 mr-2",
              onClick: f,
              src: ys(ff)
            }, null, 8, ["src"])) : (he(), ps(v, {
              key: 0,
              class: "w-9 mr-2",
              onClick: d,
              src: ys(df)
            }, null, 8, ["src"])),
            Ur(v, {
              class: "w-9 mr-2",
              onClick: g,
              src: ys(gf)
            }, null, 8, ["src"])
          ]),
          Ct("div", null, [
            Ur(I, {
              modelValue: r.value,
              "onUpdate:modelValue": x[0] || (x[0] = (w) => r.value = w),
              onChange: y
            }, {
              default: Vr(() => [
                (he(!0), ti(Zr, null, Hr(o.value, (w, D) => (he(), ps(T, {
                  disabled: a.value,
                  key: D,
                  label: w
                }, {
                  default: Vr(() => [
                    Ct("span", null, Pi(w.hphm || `车辆${D + 1}`), 1),
                    Ct("span", {
                      class: "trackColor",
                      style: Yr(`background: rgba(${w.color})`)
                    }, null, 4)
                  ]),
                  _: 2
                }, 1032, ["disabled", "label"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ], 512)), [
          [jr, C(s.value, [])]
        ]) : Qr("", !0),
        n.showDetails ? Kr((he(), ti("div", yf, [
          (he(!0), ti(Zr, null, Hr(l.value, (w, D) => (he(), ti("div", {
            class: "w-60 text-[14px] text-stone-400 py-3 line-height-7 dash-border",
            key: D
          }, [
            Ct("div", Ef, Pi((w == null ? void 0 : w.hphm) || "-"), 1),
            Ct("div", xf, [
              Cf,
              Ct("span", wf, Pi((w == null ? void 0 : w.timestamp) || "0"), 1)
            ]),
            Ct("div", Af, [
              If,
              Ct("span", vf, Pi((w == null ? void 0 : w.longitude) || "0"), 1)
            ]),
            Ct("div", Rf, [
              Tf,
              Ct("span", Sf, Pi((w == null ? void 0 : w.latitude) || "0"), 1)
            ])
          ]))), 128))
        ], 512)), [
          [jr, Object.keys(l.value).length]
        ]) : Qr("", !0),
        Ct("div", {
          ref_key: "mapRef",
          ref: i,
          class: "w-full h-full"
        }, null, 512)
      ], 4);
    };
  }
}, Lf = /* @__PURE__ */ mf(Mf, [["__scopeId", "data-v-813d2793"]]), bf = [Lf], Df = function(n) {
  bf.forEach((t) => {
    n.component(t.name, t);
  });
}, Ff = { install: Df };
export {
  Lf as OL,
  Ff as default
};

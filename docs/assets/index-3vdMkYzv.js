var V9 = Object.defineProperty;
var Nd = (e) => {
  throw TypeError(e);
};
var z9 = (e, t, r) =>
  t in e
    ? V9(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r);
var B9 = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var Ke = (e, t, r) => z9(e, typeof t != "symbol" ? t + "" : t, r),
  Y1 = (e, t, r) => t.has(e) || Nd("Cannot " + r);
var w = (e, t, r) => (
    Y1(e, t, "read from private field"), r ? r.call(e) : t.get(e)
  ),
  se = (e, t, r) =>
    t.has(e)
      ? Nd("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, r),
  W = (e, t, r, n) => (
    Y1(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r
  ),
  pe = (e, t, r) => (Y1(e, t, "access private method"), r);
var $a = (e, t, r, n) => ({
  set _(s) {
    W(e, t, s, r);
  },
  get _() {
    return w(e, t, n);
  },
});
var nO = B9((Bt, Wt) => {
  (function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
      n(s);
    new MutationObserver((s) => {
      for (const o of s)
        if (o.type === "childList")
          for (const i of o.addedNodes)
            i.tagName === "LINK" && i.rel === "modulepreload" && n(i);
    }).observe(document, { childList: !0, subtree: !0 });
    function r(s) {
      const o = {};
      return (
        s.integrity && (o.integrity = s.integrity),
        s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials"
          ? (o.credentials = "include")
          : s.crossOrigin === "anonymous"
            ? (o.credentials = "omit")
            : (o.credentials = "same-origin"),
        o
      );
    }
    function n(s) {
      if (s.ep) return;
      s.ep = !0;
      const o = r(s);
      fetch(s.href, o);
    }
  })();
  var X1 =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof self < "u"
            ? self
            : {};
  function Sa(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  var rp = { exports: {} },
    u1 = {},
    np = { exports: {} },
    ce = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var ka = Symbol.for("react.element"),
    W9 = Symbol.for("react.portal"),
    q9 = Symbol.for("react.fragment"),
    Z9 = Symbol.for("react.strict_mode"),
    K9 = Symbol.for("react.profiler"),
    Q9 = Symbol.for("react.provider"),
    Y9 = Symbol.for("react.context"),
    X9 = Symbol.for("react.forward_ref"),
    J9 = Symbol.for("react.suspense"),
    eh = Symbol.for("react.memo"),
    th = Symbol.for("react.lazy"),
    Fd = Symbol.iterator;
  function rh(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Fd && e[Fd]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var sp = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    op = Object.assign,
    ip = {};
  function Xo(e, t, r) {
    (this.props = e),
      (this.context = t),
      (this.refs = ip),
      (this.updater = r || sp);
  }
  Xo.prototype.isReactComponent = {};
  Xo.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error(
        "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
      );
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  Xo.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function ap() {}
  ap.prototype = Xo.prototype;
  function D2(e, t, r) {
    (this.props = e),
      (this.context = t),
      (this.refs = ip),
      (this.updater = r || sp);
  }
  var G2 = (D2.prototype = new ap());
  G2.constructor = D2;
  op(G2, Xo.prototype);
  G2.isPureReactComponent = !0;
  var Id = Array.isArray,
    lp = Object.prototype.hasOwnProperty,
    U2 = { current: null },
    up = { key: !0, ref: !0, __self: !0, __source: !0 };
  function cp(e, t, r) {
    var n,
      s = {},
      o = null,
      i = null;
    if (t != null)
      for (n in (t.ref !== void 0 && (i = t.ref),
      t.key !== void 0 && (o = "" + t.key),
      t))
        lp.call(t, n) && !up.hasOwnProperty(n) && (s[n] = t[n]);
    var a = arguments.length - 2;
    if (a === 1) s.children = r;
    else if (1 < a) {
      for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
      s.children = l;
    }
    if (e && e.defaultProps)
      for (n in ((a = e.defaultProps), a)) s[n] === void 0 && (s[n] = a[n]);
    return {
      $$typeof: ka,
      type: e,
      key: o,
      ref: i,
      props: s,
      _owner: U2.current,
    };
  }
  function nh(e, t) {
    return {
      $$typeof: ka,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function $2(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ka;
  }
  function sh(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (r) {
        return t[r];
      })
    );
  }
  var Md = /\/+/g;
  function J1(e, t) {
    return typeof e == "object" && e !== null && e.key != null
      ? sh("" + e.key)
      : t.toString(36);
  }
  function hl(e, t, r, n, s) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var i = !1;
    if (e === null) i = !0;
    else
      switch (o) {
        case "string":
        case "number":
          i = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case ka:
            case W9:
              i = !0;
          }
      }
    if (i)
      return (
        (i = e),
        (s = s(i)),
        (e = n === "" ? "." + J1(i, 0) : n),
        Id(s)
          ? ((r = ""),
            e != null && (r = e.replace(Md, "$&/") + "/"),
            hl(s, t, r, "", function (c) {
              return c;
            }))
          : s != null &&
            ($2(s) &&
              (s = nh(
                s,
                r +
                  (!s.key || (i && i.key === s.key)
                    ? ""
                    : ("" + s.key).replace(Md, "$&/") + "/") +
                  e,
              )),
            t.push(s)),
        1
      );
    if (((i = 0), (n = n === "" ? "." : n + ":"), Id(e)))
      for (var a = 0; a < e.length; a++) {
        o = e[a];
        var l = n + J1(o, a);
        i += hl(o, t, r, l, s);
      }
    else if (((l = rh(e)), typeof l == "function"))
      for (e = l.call(e), a = 0; !(o = e.next()).done; )
        (o = o.value), (l = n + J1(o, a++)), (i += hl(o, t, r, l, s));
    else if (o === "object")
      throw (
        ((t = String(e)),
        Error(
          "Objects are not valid as a React child (found: " +
            (t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    return i;
  }
  function Ha(e, t, r) {
    if (e == null) return e;
    var n = [],
      s = 0;
    return (
      hl(e, n, "", "", function (o) {
        return t.call(r, o, s++);
      }),
      n
    );
  }
  function oh(e) {
    if (e._status === -1) {
      var t = e._result;
      (t = t()),
        t.then(
          function (r) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1), (e._result = r));
          },
          function (r) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2), (e._result = r));
          },
        ),
        e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var xt = { current: null },
    ml = { transition: null },
    ih = {
      ReactCurrentDispatcher: xt,
      ReactCurrentBatchConfig: ml,
      ReactCurrentOwner: U2,
    };
  function dp() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  ce.Children = {
    map: Ha,
    forEach: function (e, t, r) {
      Ha(
        e,
        function () {
          t.apply(this, arguments);
        },
        r,
      );
    },
    count: function (e) {
      var t = 0;
      return (
        Ha(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        Ha(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!$2(e))
        throw Error(
          "React.Children.only expected to receive a single React element child.",
        );
      return e;
    },
  };
  ce.Component = Xo;
  ce.Fragment = q9;
  ce.Profiler = K9;
  ce.PureComponent = D2;
  ce.StrictMode = Z9;
  ce.Suspense = J9;
  ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ih;
  ce.act = dp;
  ce.cloneElement = function (e, t, r) {
    if (e == null)
      throw Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
          e +
          ".",
      );
    var n = op({}, e.props),
      s = e.key,
      o = e.ref,
      i = e._owner;
    if (t != null) {
      if (
        (t.ref !== void 0 && ((o = t.ref), (i = U2.current)),
        t.key !== void 0 && (s = "" + t.key),
        e.type && e.type.defaultProps)
      )
        var a = e.type.defaultProps;
      for (l in t)
        lp.call(t, l) &&
          !up.hasOwnProperty(l) &&
          (n[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
    }
    var l = arguments.length - 2;
    if (l === 1) n.children = r;
    else if (1 < l) {
      a = Array(l);
      for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
      n.children = a;
    }
    return { $$typeof: ka, type: e.type, key: s, ref: o, props: n, _owner: i };
  };
  ce.createContext = function (e) {
    return (
      (e = {
        $$typeof: Y9,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (e.Provider = { $$typeof: Q9, _context: e }),
      (e.Consumer = e)
    );
  };
  ce.createElement = cp;
  ce.createFactory = function (e) {
    var t = cp.bind(null, e);
    return (t.type = e), t;
  };
  ce.createRef = function () {
    return { current: null };
  };
  ce.forwardRef = function (e) {
    return { $$typeof: X9, render: e };
  };
  ce.isValidElement = $2;
  ce.lazy = function (e) {
    return { $$typeof: th, _payload: { _status: -1, _result: e }, _init: oh };
  };
  ce.memo = function (e, t) {
    return { $$typeof: eh, type: e, compare: t === void 0 ? null : t };
  };
  ce.startTransition = function (e) {
    var t = ml.transition;
    ml.transition = {};
    try {
      e();
    } finally {
      ml.transition = t;
    }
  };
  ce.unstable_act = dp;
  ce.useCallback = function (e, t) {
    return xt.current.useCallback(e, t);
  };
  ce.useContext = function (e) {
    return xt.current.useContext(e);
  };
  ce.useDebugValue = function () {};
  ce.useDeferredValue = function (e) {
    return xt.current.useDeferredValue(e);
  };
  ce.useEffect = function (e, t) {
    return xt.current.useEffect(e, t);
  };
  ce.useId = function () {
    return xt.current.useId();
  };
  ce.useImperativeHandle = function (e, t, r) {
    return xt.current.useImperativeHandle(e, t, r);
  };
  ce.useInsertionEffect = function (e, t) {
    return xt.current.useInsertionEffect(e, t);
  };
  ce.useLayoutEffect = function (e, t) {
    return xt.current.useLayoutEffect(e, t);
  };
  ce.useMemo = function (e, t) {
    return xt.current.useMemo(e, t);
  };
  ce.useReducer = function (e, t, r) {
    return xt.current.useReducer(e, t, r);
  };
  ce.useRef = function (e) {
    return xt.current.useRef(e);
  };
  ce.useState = function (e) {
    return xt.current.useState(e);
  };
  ce.useSyncExternalStore = function (e, t, r) {
    return xt.current.useSyncExternalStore(e, t, r);
  };
  ce.useTransition = function () {
    return xt.current.useTransition();
  };
  ce.version = "18.3.1";
  np.exports = ce;
  var N = np.exports;
  const H2 = Sa(N);
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var ah = N,
    lh = Symbol.for("react.element"),
    uh = Symbol.for("react.fragment"),
    ch = Object.prototype.hasOwnProperty,
    dh =
      ah.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    fh = { key: !0, ref: !0, __self: !0, __source: !0 };
  function fp(e, t, r) {
    var n,
      s = {},
      o = null,
      i = null;
    r !== void 0 && (o = "" + r),
      t.key !== void 0 && (o = "" + t.key),
      t.ref !== void 0 && (i = t.ref);
    for (n in t) ch.call(t, n) && !fh.hasOwnProperty(n) && (s[n] = t[n]);
    if (e && e.defaultProps)
      for (n in ((t = e.defaultProps), t)) s[n] === void 0 && (s[n] = t[n]);
    return {
      $$typeof: lh,
      type: e,
      key: o,
      ref: i,
      props: s,
      _owner: dh.current,
    };
  }
  u1.Fragment = uh;
  u1.jsx = fp;
  u1.jsxs = fp;
  rp.exports = u1;
  var u = rp.exports,
    Qu = {},
    pp = { exports: {} },
    Xt = {},
    hp = { exports: {} },
    mp = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ (function (e) {
    function t(D, te) {
      var re = D.length;
      D.push(te);
      e: for (; 0 < re; ) {
        var Y = (re - 1) >>> 1,
          ve = D[Y];
        if (0 < s(ve, te)) (D[Y] = te), (D[re] = ve), (re = Y);
        else break e;
      }
    }
    function r(D) {
      return D.length === 0 ? null : D[0];
    }
    function n(D) {
      if (D.length === 0) return null;
      var te = D[0],
        re = D.pop();
      if (re !== te) {
        D[0] = re;
        e: for (var Y = 0, ve = D.length, we = ve >>> 1; Y < we; ) {
          var tt = 2 * (Y + 1) - 1,
            de = D[tt],
            Be = tt + 1,
            gt = D[Be];
          if (0 > s(de, re))
            Be < ve && 0 > s(gt, de)
              ? ((D[Y] = gt), (D[Be] = re), (Y = Be))
              : ((D[Y] = de), (D[tt] = re), (Y = tt));
          else if (Be < ve && 0 > s(gt, re))
            (D[Y] = gt), (D[Be] = re), (Y = Be);
          else break e;
        }
      }
      return te;
    }
    function s(D, te) {
      var re = D.sortIndex - te.sortIndex;
      return re !== 0 ? re : D.id - te.id;
    }
    if (
      typeof performance == "object" &&
      typeof performance.now == "function"
    ) {
      var o = performance;
      e.unstable_now = function () {
        return o.now();
      };
    } else {
      var i = Date,
        a = i.now();
      e.unstable_now = function () {
        return i.now() - a;
      };
    }
    var l = [],
      c = [],
      d = 1,
      p = null,
      f = 3,
      y = !1,
      b = !1,
      T = !1,
      _ = typeof setTimeout == "function" ? setTimeout : null,
      g = typeof clearTimeout == "function" ? clearTimeout : null,
      h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(D) {
      for (var te = r(c); te !== null; ) {
        if (te.callback === null) n(c);
        else if (te.startTime <= D)
          n(c), (te.sortIndex = te.expirationTime), t(l, te);
        else break;
        te = r(c);
      }
    }
    function E(D) {
      if (((T = !1), v(D), !b))
        if (r(l) !== null) (b = !0), St(P);
        else {
          var te = r(c);
          te !== null && Ut(E, te.startTime - D);
        }
    }
    function P(D, te) {
      (b = !1), T && ((T = !1), g(j), (j = -1)), (y = !0);
      var re = f;
      try {
        for (
          v(te), p = r(l);
          p !== null && (!(p.expirationTime > te) || (D && !X()));

        ) {
          var Y = p.callback;
          if (typeof Y == "function") {
            (p.callback = null), (f = p.priorityLevel);
            var ve = Y(p.expirationTime <= te);
            (te = e.unstable_now()),
              typeof ve == "function" ? (p.callback = ve) : p === r(l) && n(l),
              v(te);
          } else n(l);
          p = r(l);
        }
        if (p !== null) var we = !0;
        else {
          var tt = r(c);
          tt !== null && Ut(E, tt.startTime - te), (we = !1);
        }
        return we;
      } finally {
        (p = null), (f = re), (y = !1);
      }
    }
    var L = !1,
      A = null,
      j = -1,
      Z = 5,
      K = -1;
    function X() {
      return !(e.unstable_now() - K < Z);
    }
    function ne() {
      if (A !== null) {
        var D = e.unstable_now();
        K = D;
        var te = !0;
        try {
          te = A(!0, D);
        } finally {
          te ? Ce() : ((L = !1), (A = null));
        }
      } else L = !1;
    }
    var Ce;
    if (typeof h == "function")
      Ce = function () {
        h(ne);
      };
    else if (typeof MessageChannel < "u") {
      var Fe = new MessageChannel(),
        rr = Fe.port2;
      (Fe.port1.onmessage = ne),
        (Ce = function () {
          rr.postMessage(null);
        });
    } else
      Ce = function () {
        _(ne, 0);
      };
    function St(D) {
      (A = D), L || ((L = !0), Ce());
    }
    function Ut(D, te) {
      j = _(function () {
        D(e.unstable_now());
      }, te);
    }
    (e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (D) {
        D.callback = null;
      }),
      (e.unstable_continueExecution = function () {
        b || y || ((b = !0), St(P));
      }),
      (e.unstable_forceFrameRate = function (D) {
        0 > D || 125 < D
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
            )
          : (Z = 0 < D ? Math.floor(1e3 / D) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return r(l);
      }),
      (e.unstable_next = function (D) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var te = 3;
            break;
          default:
            te = f;
        }
        var re = f;
        f = te;
        try {
          return D();
        } finally {
          f = re;
        }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (D, te) {
        switch (D) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            D = 3;
        }
        var re = f;
        f = D;
        try {
          return te();
        } finally {
          f = re;
        }
      }),
      (e.unstable_scheduleCallback = function (D, te, re) {
        var Y = e.unstable_now();
        switch (
          (typeof re == "object" && re !== null
            ? ((re = re.delay),
              (re = typeof re == "number" && 0 < re ? Y + re : Y))
            : (re = Y),
          D)
        ) {
          case 1:
            var ve = -1;
            break;
          case 2:
            ve = 250;
            break;
          case 5:
            ve = 1073741823;
            break;
          case 4:
            ve = 1e4;
            break;
          default:
            ve = 5e3;
        }
        return (
          (ve = re + ve),
          (D = {
            id: d++,
            callback: te,
            priorityLevel: D,
            startTime: re,
            expirationTime: ve,
            sortIndex: -1,
          }),
          re > Y
            ? ((D.sortIndex = re),
              t(c, D),
              r(l) === null &&
                D === r(c) &&
                (T ? (g(j), (j = -1)) : (T = !0), Ut(E, re - Y)))
            : ((D.sortIndex = ve), t(l, D), b || y || ((b = !0), St(P))),
          D
        );
      }),
      (e.unstable_shouldYield = X),
      (e.unstable_wrapCallback = function (D) {
        var te = f;
        return function () {
          var re = f;
          f = te;
          try {
            return D.apply(this, arguments);
          } finally {
            f = re;
          }
        };
      });
  })(mp);
  hp.exports = mp;
  var ph = hp.exports;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var hh = N,
    Qt = ph;
  function F(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        r = 1;
      r < arguments.length;
      r++
    )
      t += "&args[]=" + encodeURIComponent(arguments[r]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var gp = new Set(),
    Yi = {};
  function Us(e, t) {
    $o(e, t), $o(e + "Capture", t);
  }
  function $o(e, t) {
    for (Yi[e] = t, e = 0; e < t.length; e++) gp.add(t[e]);
  }
  var ln = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Yu = Object.prototype.hasOwnProperty,
    mh =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Dd = {},
    Gd = {};
  function gh(e) {
    return Yu.call(Gd, e)
      ? !0
      : Yu.call(Dd, e)
        ? !1
        : mh.test(e)
          ? (Gd[e] = !0)
          : ((Dd[e] = !0), !1);
  }
  function vh(e, t, r, n) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return n
          ? !1
          : r !== null
            ? !r.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function yh(e, t, r, n) {
    if (t === null || typeof t > "u" || vh(e, t, r, n)) return !0;
    if (n) return !1;
    if (r !== null)
      switch (r.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function _t(e, t, r, n, s, o, i) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = n),
      (this.attributeNamespace = s),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = i);
  }
  var ut = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      ut[e] = new _t(e, 0, !1, e, null, !1, !1);
    });
  [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
  ].forEach(function (e) {
    var t = e[0];
    ut[t] = new _t(t, 1, !1, e[1], null, !1, !1);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    ut[e] = new _t(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
  ].forEach(function (e) {
    ut[e] = new _t(e, 2, !1, e, null, !1, !1);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
      ut[e] = new _t(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
  ["checked", "multiple", "muted", "selected"].forEach(function (e) {
    ut[e] = new _t(e, 3, !0, e, null, !1, !1);
  });
  ["capture", "download"].forEach(function (e) {
    ut[e] = new _t(e, 4, !1, e, null, !1, !1);
  });
  ["cols", "rows", "size", "span"].forEach(function (e) {
    ut[e] = new _t(e, 6, !1, e, null, !1, !1);
  });
  ["rowSpan", "start"].forEach(function (e) {
    ut[e] = new _t(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var V2 = /[\-:]([a-z])/g;
  function z2(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(V2, z2);
      ut[t] = new _t(t, 1, !1, e, null, !1, !1);
    });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(V2, z2);
      ut[t] = new _t(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
  ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(V2, z2);
    ut[t] = new _t(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  });
  ["tabIndex", "crossOrigin"].forEach(function (e) {
    ut[e] = new _t(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  ut.xlinkHref = new _t(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1,
  );
  ["src", "href", "action", "formAction"].forEach(function (e) {
    ut[e] = new _t(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function B2(e, t, r, n) {
    var s = ut.hasOwnProperty(t) ? ut[t] : null;
    (s !== null
      ? s.type !== 0
      : n ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (yh(t, r, s, n) && (r = null),
      n || s === null
        ? gh(t) &&
          (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
        : s.mustUseProperty
          ? (e[s.propertyName] = r === null ? (s.type === 3 ? !1 : "") : r)
          : ((t = s.attributeName),
            (n = s.attributeNamespace),
            r === null
              ? e.removeAttribute(t)
              : ((s = s.type),
                (r = s === 3 || (s === 4 && r === !0) ? "" : "" + r),
                n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
  }
  var hn = hh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Va = Symbol.for("react.element"),
    to = Symbol.for("react.portal"),
    ro = Symbol.for("react.fragment"),
    W2 = Symbol.for("react.strict_mode"),
    Xu = Symbol.for("react.profiler"),
    vp = Symbol.for("react.provider"),
    yp = Symbol.for("react.context"),
    q2 = Symbol.for("react.forward_ref"),
    Ju = Symbol.for("react.suspense"),
    ec = Symbol.for("react.suspense_list"),
    Z2 = Symbol.for("react.memo"),
    kn = Symbol.for("react.lazy"),
    Cp = Symbol.for("react.offscreen"),
    Ud = Symbol.iterator;
  function oi(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Ud && e[Ud]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Ge = Object.assign,
    eu;
  function Ai(e) {
    if (eu === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        eu = (t && t[1]) || "";
      }
    return (
      `
` +
      eu +
      e
    );
  }
  var tu = !1;
  function ru(e, t) {
    if (!e || tu) return "";
    tu = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (c) {
            var n = c;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (c) {
            n = c;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (c) {
          n = c;
        }
        e();
      }
    } catch (c) {
      if (c && n && typeof c.stack == "string") {
        for (
          var s = c.stack.split(`
`),
            o = n.stack.split(`
`),
            i = s.length - 1,
            a = o.length - 1;
          1 <= i && 0 <= a && s[i] !== o[a];

        )
          a--;
        for (; 1 <= i && 0 <= a; i--, a--)
          if (s[i] !== o[a]) {
            if (i !== 1 || a !== 1)
              do
                if ((i--, a--, 0 > a || s[i] !== o[a])) {
                  var l =
                    `
` + s[i].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      l.includes("<anonymous>") &&
                      (l = l.replace("<anonymous>", e.displayName)),
                    l
                  );
                }
              while (1 <= i && 0 <= a);
            break;
          }
      }
    } finally {
      (tu = !1), (Error.prepareStackTrace = r);
    }
    return (e = e ? e.displayName || e.name : "") ? Ai(e) : "";
  }
  function Ch(e) {
    switch (e.tag) {
      case 5:
        return Ai(e.type);
      case 16:
        return Ai("Lazy");
      case 13:
        return Ai("Suspense");
      case 19:
        return Ai("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = ru(e.type, !1)), e;
      case 11:
        return (e = ru(e.type.render, !1)), e;
      case 1:
        return (e = ru(e.type, !0)), e;
      default:
        return "";
    }
  }
  function tc(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ro:
        return "Fragment";
      case to:
        return "Portal";
      case Xu:
        return "Profiler";
      case W2:
        return "StrictMode";
      case Ju:
        return "Suspense";
      case ec:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case yp:
          return (e.displayName || "Context") + ".Consumer";
        case vp:
          return (e._context.displayName || "Context") + ".Provider";
        case q2:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Z2:
          return (
            (t = e.displayName || null), t !== null ? t : tc(e.type) || "Memo"
          );
        case kn:
          (t = e._payload), (e = e._init);
          try {
            return tc(e(t));
          } catch {}
      }
    return null;
  }
  function wh(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return tc(t);
      case 8:
        return t === W2 ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Kn(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function wp(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Eh(e) {
    var t = wp(e) ? "checked" : "value",
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      n = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < "u" &&
      typeof r.get == "function" &&
      typeof r.set == "function"
    ) {
      var s = r.get,
        o = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (i) {
            (n = "" + i), o.call(this, i);
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (i) {
            n = "" + i;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function za(e) {
    e._valueTracker || (e._valueTracker = Eh(e));
  }
  function Ep(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      n = "";
    return (
      e && (n = wp(e) ? (e.checked ? "true" : "false") : e.value),
      (e = n),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function Rl(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function rc(e, t) {
    var r = t.checked;
    return Ge({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function $d(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue,
      n = t.checked != null ? t.checked : t.defaultChecked;
    (r = Kn(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: n,
        initialValue: r,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function bp(e, t) {
    (t = t.checked), t != null && B2(e, "checked", t, !1);
  }
  function nc(e, t) {
    bp(e, t);
    var r = Kn(t.value),
      n = t.type;
    if (r != null)
      n === "number"
        ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
        : e.value !== "" + r && (e.value = "" + r);
    else if (n === "submit" || n === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? sc(e, t.type, r)
      : t.hasOwnProperty("defaultValue") && sc(e, t.type, Kn(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Hd(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var n = t.type;
      if (
        !(
          (n !== "submit" && n !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (r = e.name),
      r !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      r !== "" && (e.name = r);
  }
  function sc(e, t, r) {
    (t !== "number" || Rl(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var Pi = Array.isArray;
  function Co(e, t, r, n) {
    if (((e = e.options), t)) {
      t = {};
      for (var s = 0; s < r.length; s++) t["$" + r[s]] = !0;
      for (r = 0; r < e.length; r++)
        (s = t.hasOwnProperty("$" + e[r].value)),
          e[r].selected !== s && (e[r].selected = s),
          s && n && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + Kn(r), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === r) {
          (e[s].selected = !0), n && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function oc(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(F(91));
    return Ge({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Vd(e, t) {
    var r = t.value;
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(F(92));
        if (Pi(r)) {
          if (1 < r.length) throw Error(F(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ""), (r = t);
    }
    e._wrapperState = { initialValue: Kn(r) };
  }
  function Tp(e, t) {
    var r = Kn(t.value),
      n = Kn(t.defaultValue);
    r != null &&
      ((r = "" + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      n != null && (e.defaultValue = "" + n);
  }
  function zd(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function xp(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ic(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? xp(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Ba,
    _p = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, r, n, s) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, r, n, s);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Ba = Ba || document.createElement("div"),
            Ba.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Ba.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Xi(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Mi = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    bh = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Mi).forEach(function (e) {
    bh.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Mi[t] = Mi[e]);
    });
  });
  function Sp(e, t, r) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : r || typeof t != "number" || t === 0 || (Mi.hasOwnProperty(e) && Mi[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function kp(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var n = r.indexOf("--") === 0,
          s = Sp(r, t[r], n);
        r === "float" && (r = "cssFloat"), n ? e.setProperty(r, s) : (e[r] = s);
      }
  }
  var Th = Ge(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function ac(e, t) {
    if (t) {
      if (Th[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(F(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(F(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(F(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(F(62));
    }
  }
  function lc(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var uc = null;
  function K2(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var cc = null,
    wo = null,
    Eo = null;
  function Bd(e) {
    if ((e = Pa(e))) {
      if (typeof cc != "function") throw Error(F(280));
      var t = e.stateNode;
      t && ((t = h1(t)), cc(e.stateNode, e.type, t));
    }
  }
  function Op(e) {
    wo ? (Eo ? Eo.push(e) : (Eo = [e])) : (wo = e);
  }
  function Ap() {
    if (wo) {
      var e = wo,
        t = Eo;
      if (((Eo = wo = null), Bd(e), t)) for (e = 0; e < t.length; e++) Bd(t[e]);
    }
  }
  function Pp(e, t) {
    return e(t);
  }
  function Lp() {}
  var nu = !1;
  function Rp(e, t, r) {
    if (nu) return e(t, r);
    nu = !0;
    try {
      return Pp(e, t, r);
    } finally {
      (nu = !1), (wo !== null || Eo !== null) && (Lp(), Ap());
    }
  }
  function Ji(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var n = h1(r);
    if (n === null) return null;
    r = n[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (n = !n.disabled) ||
          ((e = e.type),
          (n = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !n);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(F(231, t, typeof r));
    return r;
  }
  var dc = !1;
  if (ln)
    try {
      var ii = {};
      Object.defineProperty(ii, "passive", {
        get: function () {
          dc = !0;
        },
      }),
        window.addEventListener("test", ii, ii),
        window.removeEventListener("test", ii, ii);
    } catch {
      dc = !1;
    }
  function xh(e, t, r, n, s, o, i, a, l) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, c);
    } catch (d) {
      this.onError(d);
    }
  }
  var Di = !1,
    jl = null,
    Nl = !1,
    fc = null,
    _h = {
      onError: function (e) {
        (Di = !0), (jl = e);
      },
    };
  function Sh(e, t, r, n, s, o, i, a, l) {
    (Di = !1), (jl = null), xh.apply(_h, arguments);
  }
  function kh(e, t, r, n, s, o, i, a, l) {
    if ((Sh.apply(this, arguments), Di)) {
      if (Di) {
        var c = jl;
        (Di = !1), (jl = null);
      } else throw Error(F(198));
      Nl || ((Nl = !0), (fc = c));
    }
  }
  function $s(e) {
    var t = e,
      r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function jp(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Wd(e) {
    if ($s(e) !== e) throw Error(F(188));
  }
  function Oh(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = $s(e)), t === null)) throw Error(F(188));
      return t !== e ? null : e;
    }
    for (var r = e, n = t; ; ) {
      var s = r.return;
      if (s === null) break;
      var o = s.alternate;
      if (o === null) {
        if (((n = s.return), n !== null)) {
          r = n;
          continue;
        }
        break;
      }
      if (s.child === o.child) {
        for (o = s.child; o; ) {
          if (o === r) return Wd(s), e;
          if (o === n) return Wd(s), t;
          o = o.sibling;
        }
        throw Error(F(188));
      }
      if (r.return !== n.return) (r = s), (n = o);
      else {
        for (var i = !1, a = s.child; a; ) {
          if (a === r) {
            (i = !0), (r = s), (n = o);
            break;
          }
          if (a === n) {
            (i = !0), (n = s), (r = o);
            break;
          }
          a = a.sibling;
        }
        if (!i) {
          for (a = o.child; a; ) {
            if (a === r) {
              (i = !0), (r = o), (n = s);
              break;
            }
            if (a === n) {
              (i = !0), (n = o), (r = s);
              break;
            }
            a = a.sibling;
          }
          if (!i) throw Error(F(189));
        }
      }
      if (r.alternate !== n) throw Error(F(190));
    }
    if (r.tag !== 3) throw Error(F(188));
    return r.stateNode.current === r ? e : t;
  }
  function Np(e) {
    return (e = Oh(e)), e !== null ? Fp(e) : null;
  }
  function Fp(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Fp(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ip = Qt.unstable_scheduleCallback,
    qd = Qt.unstable_cancelCallback,
    Ah = Qt.unstable_shouldYield,
    Ph = Qt.unstable_requestPaint,
    He = Qt.unstable_now,
    Lh = Qt.unstable_getCurrentPriorityLevel,
    Q2 = Qt.unstable_ImmediatePriority,
    Mp = Qt.unstable_UserBlockingPriority,
    Fl = Qt.unstable_NormalPriority,
    Rh = Qt.unstable_LowPriority,
    Dp = Qt.unstable_IdlePriority,
    c1 = null,
    zr = null;
  function jh(e) {
    if (zr && typeof zr.onCommitFiberRoot == "function")
      try {
        zr.onCommitFiberRoot(c1, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Sr = Math.clz32 ? Math.clz32 : Ih,
    Nh = Math.log,
    Fh = Math.LN2;
  function Ih(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Nh(e) / Fh) | 0)) | 0;
  }
  var Wa = 64,
    qa = 4194304;
  function Li(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Il(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var n = 0,
      s = e.suspendedLanes,
      o = e.pingedLanes,
      i = r & 268435455;
    if (i !== 0) {
      var a = i & ~s;
      a !== 0 ? (n = Li(a)) : ((o &= i), o !== 0 && (n = Li(o)));
    } else (i = r & ~s), i !== 0 ? (n = Li(i)) : o !== 0 && (n = Li(o));
    if (n === 0) return 0;
    if (
      t !== 0 &&
      t !== n &&
      !(t & s) &&
      ((s = n & -n), (o = t & -t), s >= o || (s === 16 && (o & 4194240) !== 0))
    )
      return t;
    if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= n; 0 < t; )
        (r = 31 - Sr(t)), (s = 1 << r), (n |= e[r]), (t &= ~s);
    return n;
  }
  function Mh(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Dh(e, t) {
    for (
      var r = e.suspendedLanes,
        n = e.pingedLanes,
        s = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;

    ) {
      var i = 31 - Sr(o),
        a = 1 << i,
        l = s[i];
      l === -1
        ? (!(a & r) || a & n) && (s[i] = Mh(a, t))
        : l <= t && (e.expiredLanes |= a),
        (o &= ~a);
    }
  }
  function pc(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Gp() {
    var e = Wa;
    return (Wa <<= 1), !(Wa & 4194240) && (Wa = 64), e;
  }
  function su(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function Oa(e, t, r) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Sr(t)),
      (e[t] = r);
  }
  function Gh(e, t) {
    var r = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var n = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var s = 31 - Sr(r),
        o = 1 << s;
      (t[s] = 0), (n[s] = -1), (e[s] = -1), (r &= ~o);
    }
  }
  function Y2(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var n = 31 - Sr(r),
        s = 1 << n;
      (s & t) | (e[n] & t) && (e[n] |= t), (r &= ~s);
    }
  }
  var be = 0;
  function Up(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var $p,
    X2,
    Hp,
    Vp,
    zp,
    hc = !1,
    Za = [],
    Un = null,
    $n = null,
    Hn = null,
    ea = new Map(),
    ta = new Map(),
    An = [],
    Uh =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function Zd(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Un = null;
        break;
      case "dragenter":
      case "dragleave":
        $n = null;
        break;
      case "mouseover":
      case "mouseout":
        Hn = null;
        break;
      case "pointerover":
      case "pointerout":
        ea.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ta.delete(t.pointerId);
    }
  }
  function ai(e, t, r, n, s, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: n,
          nativeEvent: o,
          targetContainers: [s],
        }),
        t !== null && ((t = Pa(t)), t !== null && X2(t)),
        e)
      : ((e.eventSystemFlags |= n),
        (t = e.targetContainers),
        s !== null && t.indexOf(s) === -1 && t.push(s),
        e);
  }
  function $h(e, t, r, n, s) {
    switch (t) {
      case "focusin":
        return (Un = ai(Un, e, t, r, n, s)), !0;
      case "dragenter":
        return ($n = ai($n, e, t, r, n, s)), !0;
      case "mouseover":
        return (Hn = ai(Hn, e, t, r, n, s)), !0;
      case "pointerover":
        var o = s.pointerId;
        return ea.set(o, ai(ea.get(o) || null, e, t, r, n, s)), !0;
      case "gotpointercapture":
        return (
          (o = s.pointerId), ta.set(o, ai(ta.get(o) || null, e, t, r, n, s)), !0
        );
    }
    return !1;
  }
  function Bp(e) {
    var t = hs(e.target);
    if (t !== null) {
      var r = $s(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = jp(r)), t !== null)) {
            (e.blockedOn = t),
              zp(e.priority, function () {
                Hp(r);
              });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function gl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = mc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var n = new r.constructor(r.type, r);
        (uc = n), r.target.dispatchEvent(n), (uc = null);
      } else return (t = Pa(r)), t !== null && X2(t), (e.blockedOn = r), !1;
      t.shift();
    }
    return !0;
  }
  function Kd(e, t, r) {
    gl(e) && r.delete(t);
  }
  function Hh() {
    (hc = !1),
      Un !== null && gl(Un) && (Un = null),
      $n !== null && gl($n) && ($n = null),
      Hn !== null && gl(Hn) && (Hn = null),
      ea.forEach(Kd),
      ta.forEach(Kd);
  }
  function li(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      hc ||
        ((hc = !0),
        Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority, Hh)));
  }
  function ra(e) {
    function t(s) {
      return li(s, e);
    }
    if (0 < Za.length) {
      li(Za[0], e);
      for (var r = 1; r < Za.length; r++) {
        var n = Za[r];
        n.blockedOn === e && (n.blockedOn = null);
      }
    }
    for (
      Un !== null && li(Un, e),
        $n !== null && li($n, e),
        Hn !== null && li(Hn, e),
        ea.forEach(t),
        ta.forEach(t),
        r = 0;
      r < An.length;
      r++
    )
      (n = An[r]), n.blockedOn === e && (n.blockedOn = null);
    for (; 0 < An.length && ((r = An[0]), r.blockedOn === null); )
      Bp(r), r.blockedOn === null && An.shift();
  }
  var bo = hn.ReactCurrentBatchConfig,
    Ml = !0;
  function Vh(e, t, r, n) {
    var s = be,
      o = bo.transition;
    bo.transition = null;
    try {
      (be = 1), J2(e, t, r, n);
    } finally {
      (be = s), (bo.transition = o);
    }
  }
  function zh(e, t, r, n) {
    var s = be,
      o = bo.transition;
    bo.transition = null;
    try {
      (be = 4), J2(e, t, r, n);
    } finally {
      (be = s), (bo.transition = o);
    }
  }
  function J2(e, t, r, n) {
    if (Ml) {
      var s = mc(e, t, r, n);
      if (s === null) hu(e, t, n, Dl, r), Zd(e, n);
      else if ($h(s, e, t, r, n)) n.stopPropagation();
      else if ((Zd(e, n), t & 4 && -1 < Uh.indexOf(e))) {
        for (; s !== null; ) {
          var o = Pa(s);
          if (
            (o !== null && $p(o),
            (o = mc(e, t, r, n)),
            o === null && hu(e, t, n, Dl, r),
            o === s)
          )
            break;
          s = o;
        }
        s !== null && n.stopPropagation();
      } else hu(e, t, n, null, r);
    }
  }
  var Dl = null;
  function mc(e, t, r, n) {
    if (((Dl = null), (e = K2(n)), (e = hs(e)), e !== null))
      if (((t = $s(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = jp(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Dl = e), null;
  }
  function Wp(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Lh()) {
          case Q2:
            return 1;
          case Mp:
            return 4;
          case Fl:
          case Rh:
            return 16;
          case Dp:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Mn = null,
    e0 = null,
    vl = null;
  function qp() {
    if (vl) return vl;
    var e,
      t = e0,
      r = t.length,
      n,
      s = "value" in Mn ? Mn.value : Mn.textContent,
      o = s.length;
    for (e = 0; e < r && t[e] === s[e]; e++);
    var i = r - e;
    for (n = 1; n <= i && t[r - n] === s[o - n]; n++);
    return (vl = s.slice(e, 1 < n ? 1 - n : void 0));
  }
  function yl(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ka() {
    return !0;
  }
  function Qd() {
    return !1;
  }
  function Jt(e) {
    function t(r, n, s, o, i) {
      (this._reactName = r),
        (this._targetInst = s),
        (this.type = n),
        (this.nativeEvent = o),
        (this.target = i),
        (this.currentTarget = null);
      for (var a in e)
        e.hasOwnProperty(a) && ((r = e[a]), (this[a] = r ? r(o) : o[a]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Ka
          : Qd),
        (this.isPropagationStopped = Qd),
        this
      );
    }
    return (
      Ge(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            (this.isDefaultPrevented = Ka));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            (this.isPropagationStopped = Ka));
        },
        persist: function () {},
        isPersistent: Ka,
      }),
      t
    );
  }
  var Jo = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    t0 = Jt(Jo),
    Aa = Ge({}, Jo, { view: 0, detail: 0 }),
    Bh = Jt(Aa),
    ou,
    iu,
    ui,
    d1 = Ge({}, Aa, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: r0,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== ui &&
              (ui && e.type === "mousemove"
                ? ((ou = e.screenX - ui.screenX), (iu = e.screenY - ui.screenY))
                : (iu = ou = 0),
              (ui = e)),
            ou);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : iu;
      },
    }),
    Yd = Jt(d1),
    Wh = Ge({}, d1, { dataTransfer: 0 }),
    qh = Jt(Wh),
    Zh = Ge({}, Aa, { relatedTarget: 0 }),
    au = Jt(Zh),
    Kh = Ge({}, Jo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Qh = Jt(Kh),
    Yh = Ge({}, Jo, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Xh = Jt(Yh),
    Jh = Ge({}, Jo, { data: 0 }),
    Xd = Jt(Jh),
    e7 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    t7 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    r7 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function n7(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = r7[e])
        ? !!t[e]
        : !1;
  }
  function r0() {
    return n7;
  }
  var s7 = Ge({}, Aa, {
      key: function (e) {
        if (e.key) {
          var t = e7[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = yl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? t7[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: r0,
      charCode: function (e) {
        return e.type === "keypress" ? yl(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? yl(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    o7 = Jt(s7),
    i7 = Ge({}, d1, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Jd = Jt(i7),
    a7 = Ge({}, Aa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: r0,
    }),
    l7 = Jt(a7),
    u7 = Ge({}, Jo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    c7 = Jt(u7),
    d7 = Ge({}, d1, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    f7 = Jt(d7),
    p7 = [9, 13, 27, 32],
    n0 = ln && "CompositionEvent" in window,
    Gi = null;
  ln && "documentMode" in document && (Gi = document.documentMode);
  var h7 = ln && "TextEvent" in window && !Gi,
    Zp = ln && (!n0 || (Gi && 8 < Gi && 11 >= Gi)),
    ef = " ",
    tf = !1;
  function Kp(e, t) {
    switch (e) {
      case "keyup":
        return p7.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Qp(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var no = !1;
  function m7(e, t) {
    switch (e) {
      case "compositionend":
        return Qp(t);
      case "keypress":
        return t.which !== 32 ? null : ((tf = !0), ef);
      case "textInput":
        return (e = t.data), e === ef && tf ? null : e;
      default:
        return null;
    }
  }
  function g7(e, t) {
    if (no)
      return e === "compositionend" || (!n0 && Kp(e, t))
        ? ((e = qp()), (vl = e0 = Mn = null), (no = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Zp && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var v7 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function rf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!v7[e.type] : t === "textarea";
  }
  function Yp(e, t, r, n) {
    Op(n),
      (t = Gl(t, "onChange")),
      0 < t.length &&
        ((r = new t0("onChange", "change", null, r, n)),
        e.push({ event: r, listeners: t }));
  }
  var Ui = null,
    na = null;
  function y7(e) {
    l5(e, 0);
  }
  function f1(e) {
    var t = io(e);
    if (Ep(t)) return e;
  }
  function C7(e, t) {
    if (e === "change") return t;
  }
  var Xp = !1;
  if (ln) {
    var lu;
    if (ln) {
      var uu = "oninput" in document;
      if (!uu) {
        var nf = document.createElement("div");
        nf.setAttribute("oninput", "return;"),
          (uu = typeof nf.oninput == "function");
      }
      lu = uu;
    } else lu = !1;
    Xp = lu && (!document.documentMode || 9 < document.documentMode);
  }
  function sf() {
    Ui && (Ui.detachEvent("onpropertychange", Jp), (na = Ui = null));
  }
  function Jp(e) {
    if (e.propertyName === "value" && f1(na)) {
      var t = [];
      Yp(t, na, e, K2(e)), Rp(y7, t);
    }
  }
  function w7(e, t, r) {
    e === "focusin"
      ? (sf(), (Ui = t), (na = r), Ui.attachEvent("onpropertychange", Jp))
      : e === "focusout" && sf();
  }
  function E7(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return f1(na);
  }
  function b7(e, t) {
    if (e === "click") return f1(t);
  }
  function T7(e, t) {
    if (e === "input" || e === "change") return f1(t);
  }
  function x7(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Or = typeof Object.is == "function" ? Object.is : x7;
  function sa(e, t) {
    if (Or(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (n = 0; n < r.length; n++) {
      var s = r[n];
      if (!Yu.call(t, s) || !Or(e[s], t[s])) return !1;
    }
    return !0;
  }
  function of(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function af(e, t) {
    var r = of(e);
    e = 0;
    for (var n; r; ) {
      if (r.nodeType === 3) {
        if (((n = e + r.textContent.length), e <= t && n >= t))
          return { node: r, offset: t - e };
        e = n;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = of(r);
    }
  }
  function e5(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? e5(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function t5() {
    for (var e = window, t = Rl(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = Rl(e.document);
    }
    return t;
  }
  function s0(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function _7(e) {
    var t = t5(),
      r = e.focusedElem,
      n = e.selectionRange;
    if (
      t !== r &&
      r &&
      r.ownerDocument &&
      e5(r.ownerDocument.documentElement, r)
    ) {
      if (n !== null && s0(r)) {
        if (
          ((t = n.start),
          (e = n.end),
          e === void 0 && (e = t),
          "selectionStart" in r)
        )
          (r.selectionStart = t),
            (r.selectionEnd = Math.min(e, r.value.length));
        else if (
          ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var s = r.textContent.length,
            o = Math.min(n.start, s);
          (n = n.end === void 0 ? o : Math.min(n.end, s)),
            !e.extend && o > n && ((s = n), (n = o), (o = s)),
            (s = af(r, o));
          var i = af(r, n);
          s &&
            i &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== s.node ||
              e.anchorOffset !== s.offset ||
              e.focusNode !== i.node ||
              e.focusOffset !== i.offset) &&
            ((t = t.createRange()),
            t.setStart(s.node, s.offset),
            e.removeAllRanges(),
            o > n
              ? (e.addRange(t), e.extend(i.node, i.offset))
              : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
        (e = t[r]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var S7 = ln && "documentMode" in document && 11 >= document.documentMode,
    so = null,
    gc = null,
    $i = null,
    vc = !1;
  function lf(e, t, r) {
    var n =
      r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    vc ||
      so == null ||
      so !== Rl(n) ||
      ((n = so),
      "selectionStart" in n && s0(n)
        ? (n = { start: n.selectionStart, end: n.selectionEnd })
        : ((n = (
            (n.ownerDocument && n.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset,
          })),
      ($i && sa($i, n)) ||
        (($i = n),
        (n = Gl(gc, "onSelect")),
        0 < n.length &&
          ((t = new t0("onSelect", "select", null, t, r)),
          e.push({ event: t, listeners: n }),
          (t.target = so))));
  }
  function Qa(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r["Webkit" + e] = "webkit" + t),
      (r["Moz" + e] = "moz" + t),
      r
    );
  }
  var oo = {
      animationend: Qa("Animation", "AnimationEnd"),
      animationiteration: Qa("Animation", "AnimationIteration"),
      animationstart: Qa("Animation", "AnimationStart"),
      transitionend: Qa("Transition", "TransitionEnd"),
    },
    cu = {},
    r5 = {};
  ln &&
    ((r5 = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete oo.animationend.animation,
      delete oo.animationiteration.animation,
      delete oo.animationstart.animation),
    "TransitionEvent" in window || delete oo.transitionend.transition);
  function p1(e) {
    if (cu[e]) return cu[e];
    if (!oo[e]) return e;
    var t = oo[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in r5) return (cu[e] = t[r]);
    return e;
  }
  var n5 = p1("animationend"),
    s5 = p1("animationiteration"),
    o5 = p1("animationstart"),
    i5 = p1("transitionend"),
    a5 = new Map(),
    uf =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function ts(e, t) {
    a5.set(e, t), Us(t, [e]);
  }
  for (var du = 0; du < uf.length; du++) {
    var fu = uf[du],
      k7 = fu.toLowerCase(),
      O7 = fu[0].toUpperCase() + fu.slice(1);
    ts(k7, "on" + O7);
  }
  ts(n5, "onAnimationEnd");
  ts(s5, "onAnimationIteration");
  ts(o5, "onAnimationStart");
  ts("dblclick", "onDoubleClick");
  ts("focusin", "onFocus");
  ts("focusout", "onBlur");
  ts(i5, "onTransitionEnd");
  $o("onMouseEnter", ["mouseout", "mouseover"]);
  $o("onMouseLeave", ["mouseout", "mouseover"]);
  $o("onPointerEnter", ["pointerout", "pointerover"]);
  $o("onPointerLeave", ["pointerout", "pointerover"]);
  Us(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
      " ",
    ),
  );
  Us(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " ",
    ),
  );
  Us("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  Us(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" "),
  );
  Us(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" "),
  );
  Us(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
  );
  var Ri =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    A7 = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Ri),
    );
  function cf(e, t, r) {
    var n = e.type || "unknown-event";
    (e.currentTarget = r), kh(n, t, void 0, e), (e.currentTarget = null);
  }
  function l5(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var n = e[r],
        s = n.event;
      n = n.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var i = n.length - 1; 0 <= i; i--) {
            var a = n[i],
              l = a.instance,
              c = a.currentTarget;
            if (((a = a.listener), l !== o && s.isPropagationStopped()))
              break e;
            cf(s, a, c), (o = l);
          }
        else
          for (i = 0; i < n.length; i++) {
            if (
              ((a = n[i]),
              (l = a.instance),
              (c = a.currentTarget),
              (a = a.listener),
              l !== o && s.isPropagationStopped())
            )
              break e;
            cf(s, a, c), (o = l);
          }
      }
    }
    if (Nl) throw ((e = fc), (Nl = !1), (fc = null), e);
  }
  function Oe(e, t) {
    var r = t[bc];
    r === void 0 && (r = t[bc] = new Set());
    var n = e + "__bubble";
    r.has(n) || (u5(t, e, 2, !1), r.add(n));
  }
  function pu(e, t, r) {
    var n = 0;
    t && (n |= 4), u5(r, e, n, t);
  }
  var Ya = "_reactListening" + Math.random().toString(36).slice(2);
  function oa(e) {
    if (!e[Ya]) {
      (e[Ya] = !0),
        gp.forEach(function (r) {
          r !== "selectionchange" && (A7.has(r) || pu(r, !1, e), pu(r, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ya] || ((t[Ya] = !0), pu("selectionchange", !1, t));
    }
  }
  function u5(e, t, r, n) {
    switch (Wp(t)) {
      case 1:
        var s = Vh;
        break;
      case 4:
        s = zh;
        break;
      default:
        s = J2;
    }
    (r = s.bind(null, t, r, e)),
      (s = void 0),
      !dc ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (s = !0),
      n
        ? s !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: s })
          : e.addEventListener(t, r, !0)
        : s !== void 0
          ? e.addEventListener(t, r, { passive: s })
          : e.addEventListener(t, r, !1);
  }
  function hu(e, t, r, n, s) {
    var o = n;
    if (!(t & 1) && !(t & 2) && n !== null)
      e: for (;;) {
        if (n === null) return;
        var i = n.tag;
        if (i === 3 || i === 4) {
          var a = n.stateNode.containerInfo;
          if (a === s || (a.nodeType === 8 && a.parentNode === s)) break;
          if (i === 4)
            for (i = n.return; i !== null; ) {
              var l = i.tag;
              if (
                (l === 3 || l === 4) &&
                ((l = i.stateNode.containerInfo),
                l === s || (l.nodeType === 8 && l.parentNode === s))
              )
                return;
              i = i.return;
            }
          for (; a !== null; ) {
            if (((i = hs(a)), i === null)) return;
            if (((l = i.tag), l === 5 || l === 6)) {
              n = o = i;
              continue e;
            }
            a = a.parentNode;
          }
        }
        n = n.return;
      }
    Rp(function () {
      var c = o,
        d = K2(r),
        p = [];
      e: {
        var f = a5.get(e);
        if (f !== void 0) {
          var y = t0,
            b = e;
          switch (e) {
            case "keypress":
              if (yl(r) === 0) break e;
            case "keydown":
            case "keyup":
              y = o7;
              break;
            case "focusin":
              (b = "focus"), (y = au);
              break;
            case "focusout":
              (b = "blur"), (y = au);
              break;
            case "beforeblur":
            case "afterblur":
              y = au;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              y = Yd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              y = qh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              y = l7;
              break;
            case n5:
            case s5:
            case o5:
              y = Qh;
              break;
            case i5:
              y = c7;
              break;
            case "scroll":
              y = Bh;
              break;
            case "wheel":
              y = f7;
              break;
            case "copy":
            case "cut":
            case "paste":
              y = Xh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              y = Jd;
          }
          var T = (t & 4) !== 0,
            _ = !T && e === "scroll",
            g = T ? (f !== null ? f + "Capture" : null) : f;
          T = [];
          for (var h = c, v; h !== null; ) {
            v = h;
            var E = v.stateNode;
            if (
              (v.tag === 5 &&
                E !== null &&
                ((v = E),
                g !== null &&
                  ((E = Ji(h, g)), E != null && T.push(ia(h, E, v)))),
              _)
            )
              break;
            h = h.return;
          }
          0 < T.length &&
            ((f = new y(f, b, null, r, d)), p.push({ event: f, listeners: T }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((f = e === "mouseover" || e === "pointerover"),
            (y = e === "mouseout" || e === "pointerout"),
            f &&
              r !== uc &&
              (b = r.relatedTarget || r.fromElement) &&
              (hs(b) || b[un]))
          )
            break e;
          if (
            (y || f) &&
            ((f =
              d.window === d
                ? d
                : (f = d.ownerDocument)
                  ? f.defaultView || f.parentWindow
                  : window),
            y
              ? ((b = r.relatedTarget || r.toElement),
                (y = c),
                (b = b ? hs(b) : null),
                b !== null &&
                  ((_ = $s(b)), b !== _ || (b.tag !== 5 && b.tag !== 6)) &&
                  (b = null))
              : ((y = null), (b = c)),
            y !== b)
          ) {
            if (
              ((T = Yd),
              (E = "onMouseLeave"),
              (g = "onMouseEnter"),
              (h = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((T = Jd),
                (E = "onPointerLeave"),
                (g = "onPointerEnter"),
                (h = "pointer")),
              (_ = y == null ? f : io(y)),
              (v = b == null ? f : io(b)),
              (f = new T(E, h + "leave", y, r, d)),
              (f.target = _),
              (f.relatedTarget = v),
              (E = null),
              hs(d) === c &&
                ((T = new T(g, h + "enter", b, r, d)),
                (T.target = v),
                (T.relatedTarget = _),
                (E = T)),
              (_ = E),
              y && b)
            )
              t: {
                for (T = y, g = b, h = 0, v = T; v; v = Qs(v)) h++;
                for (v = 0, E = g; E; E = Qs(E)) v++;
                for (; 0 < h - v; ) (T = Qs(T)), h--;
                for (; 0 < v - h; ) (g = Qs(g)), v--;
                for (; h--; ) {
                  if (T === g || (g !== null && T === g.alternate)) break t;
                  (T = Qs(T)), (g = Qs(g));
                }
                T = null;
              }
            else T = null;
            y !== null && df(p, f, y, T, !1),
              b !== null && _ !== null && df(p, _, b, T, !0);
          }
        }
        e: {
          if (
            ((f = c ? io(c) : window),
            (y = f.nodeName && f.nodeName.toLowerCase()),
            y === "select" || (y === "input" && f.type === "file"))
          )
            var P = C7;
          else if (rf(f))
            if (Xp) P = T7;
            else {
              P = E7;
              var L = w7;
            }
          else
            (y = f.nodeName) &&
              y.toLowerCase() === "input" &&
              (f.type === "checkbox" || f.type === "radio") &&
              (P = b7);
          if (P && (P = P(e, c))) {
            Yp(p, P, r, d);
            break e;
          }
          L && L(e, f, c),
            e === "focusout" &&
              (L = f._wrapperState) &&
              L.controlled &&
              f.type === "number" &&
              sc(f, "number", f.value);
        }
        switch (((L = c ? io(c) : window), e)) {
          case "focusin":
            (rf(L) || L.contentEditable === "true") &&
              ((so = L), (gc = c), ($i = null));
            break;
          case "focusout":
            $i = gc = so = null;
            break;
          case "mousedown":
            vc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (vc = !1), lf(p, r, d);
            break;
          case "selectionchange":
            if (S7) break;
          case "keydown":
          case "keyup":
            lf(p, r, d);
        }
        var A;
        if (n0)
          e: {
            switch (e) {
              case "compositionstart":
                var j = "onCompositionStart";
                break e;
              case "compositionend":
                j = "onCompositionEnd";
                break e;
              case "compositionupdate":
                j = "onCompositionUpdate";
                break e;
            }
            j = void 0;
          }
        else
          no
            ? Kp(e, r) && (j = "onCompositionEnd")
            : e === "keydown" &&
              r.keyCode === 229 &&
              (j = "onCompositionStart");
        j &&
          (Zp &&
            r.locale !== "ko" &&
            (no || j !== "onCompositionStart"
              ? j === "onCompositionEnd" && no && (A = qp())
              : ((Mn = d),
                (e0 = "value" in Mn ? Mn.value : Mn.textContent),
                (no = !0))),
          (L = Gl(c, j)),
          0 < L.length &&
            ((j = new Xd(j, e, null, r, d)),
            p.push({ event: j, listeners: L }),
            A ? (j.data = A) : ((A = Qp(r)), A !== null && (j.data = A)))),
          (A = h7 ? m7(e, r) : g7(e, r)) &&
            ((c = Gl(c, "onBeforeInput")),
            0 < c.length &&
              ((d = new Xd("onBeforeInput", "beforeinput", null, r, d)),
              p.push({ event: d, listeners: c }),
              (d.data = A)));
      }
      l5(p, t);
    });
  }
  function ia(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function Gl(e, t) {
    for (var r = t + "Capture", n = []; e !== null; ) {
      var s = e,
        o = s.stateNode;
      s.tag === 5 &&
        o !== null &&
        ((s = o),
        (o = Ji(e, r)),
        o != null && n.unshift(ia(e, o, s)),
        (o = Ji(e, t)),
        o != null && n.push(ia(e, o, s))),
        (e = e.return);
    }
    return n;
  }
  function Qs(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function df(e, t, r, n, s) {
    for (var o = t._reactName, i = []; r !== null && r !== n; ) {
      var a = r,
        l = a.alternate,
        c = a.stateNode;
      if (l !== null && l === n) break;
      a.tag === 5 &&
        c !== null &&
        ((a = c),
        s
          ? ((l = Ji(r, o)), l != null && i.unshift(ia(r, l, a)))
          : s || ((l = Ji(r, o)), l != null && i.push(ia(r, l, a)))),
        (r = r.return);
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var P7 = /\r\n?/g,
    L7 = /\u0000|\uFFFD/g;
  function ff(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        P7,
        `
`,
      )
      .replace(L7, "");
  }
  function Xa(e, t, r) {
    if (((t = ff(t)), ff(e) !== t && r)) throw Error(F(425));
  }
  function Ul() {}
  var yc = null,
    Cc = null;
  function wc(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ec = typeof setTimeout == "function" ? setTimeout : void 0,
    R7 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    pf = typeof Promise == "function" ? Promise : void 0,
    j7 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof pf < "u"
          ? function (e) {
              return pf.resolve(null).then(e).catch(N7);
            }
          : Ec;
  function N7(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function mu(e, t) {
    var r = t,
      n = 0;
    do {
      var s = r.nextSibling;
      if ((e.removeChild(r), s && s.nodeType === 8))
        if (((r = s.data), r === "/$")) {
          if (n === 0) {
            e.removeChild(s), ra(t);
            return;
          }
          n--;
        } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
      r = s;
    } while (r);
    ra(t);
  }
  function Vn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function hf(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (t === 0) return e;
          t--;
        } else r === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var ei = Math.random().toString(36).slice(2),
    $r = "__reactFiber$" + ei,
    aa = "__reactProps$" + ei,
    un = "__reactContainer$" + ei,
    bc = "__reactEvents$" + ei,
    F7 = "__reactListeners$" + ei,
    I7 = "__reactHandles$" + ei;
  function hs(e) {
    var t = e[$r];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[un] || r[$r])) {
        if (
          ((r = t.alternate),
          t.child !== null || (r !== null && r.child !== null))
        )
          for (e = hf(e); e !== null; ) {
            if ((r = e[$r])) return r;
            e = hf(e);
          }
        return t;
      }
      (e = r), (r = e.parentNode);
    }
    return null;
  }
  function Pa(e) {
    return (
      (e = e[$r] || e[un]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function io(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(F(33));
  }
  function h1(e) {
    return e[aa] || null;
  }
  var Tc = [],
    ao = -1;
  function rs(e) {
    return { current: e };
  }
  function Pe(e) {
    0 > ao || ((e.current = Tc[ao]), (Tc[ao] = null), ao--);
  }
  function Se(e, t) {
    ao++, (Tc[ao] = e.current), (e.current = t);
  }
  var Qn = {},
    mt = rs(Qn),
    Mt = rs(!1),
    Rs = Qn;
  function Ho(e, t) {
    var r = e.type.contextTypes;
    if (!r) return Qn;
    var n = e.stateNode;
    if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
      return n.__reactInternalMemoizedMaskedChildContext;
    var s = {},
      o;
    for (o in r) s[o] = t[o];
    return (
      n &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = s)),
      s
    );
  }
  function Dt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function $l() {
    Pe(Mt), Pe(mt);
  }
  function mf(e, t, r) {
    if (mt.current !== Qn) throw Error(F(168));
    Se(mt, t), Se(Mt, r);
  }
  function c5(e, t, r) {
    var n = e.stateNode;
    if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
      return r;
    n = n.getChildContext();
    for (var s in n) if (!(s in t)) throw Error(F(108, wh(e) || "Unknown", s));
    return Ge({}, r, n);
  }
  function Hl(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Qn),
      (Rs = mt.current),
      Se(mt, e),
      Se(Mt, Mt.current),
      !0
    );
  }
  function gf(e, t, r) {
    var n = e.stateNode;
    if (!n) throw Error(F(169));
    r
      ? ((e = c5(e, t, Rs)),
        (n.__reactInternalMemoizedMergedChildContext = e),
        Pe(Mt),
        Pe(mt),
        Se(mt, e))
      : Pe(Mt),
      Se(Mt, r);
  }
  var rn = null,
    m1 = !1,
    gu = !1;
  function d5(e) {
    rn === null ? (rn = [e]) : rn.push(e);
  }
  function M7(e) {
    (m1 = !0), d5(e);
  }
  function ns() {
    if (!gu && rn !== null) {
      gu = !0;
      var e = 0,
        t = be;
      try {
        var r = rn;
        for (be = 1; e < r.length; e++) {
          var n = r[e];
          do n = n(!0);
          while (n !== null);
        }
        (rn = null), (m1 = !1);
      } catch (s) {
        throw (rn !== null && (rn = rn.slice(e + 1)), Ip(Q2, ns), s);
      } finally {
        (be = t), (gu = !1);
      }
    }
    return null;
  }
  var lo = [],
    uo = 0,
    Vl = null,
    zl = 0,
    ar = [],
    lr = 0,
    js = null,
    sn = 1,
    on = "";
  function us(e, t) {
    (lo[uo++] = zl), (lo[uo++] = Vl), (Vl = e), (zl = t);
  }
  function f5(e, t, r) {
    (ar[lr++] = sn), (ar[lr++] = on), (ar[lr++] = js), (js = e);
    var n = sn;
    e = on;
    var s = 32 - Sr(n) - 1;
    (n &= ~(1 << s)), (r += 1);
    var o = 32 - Sr(t) + s;
    if (30 < o) {
      var i = s - (s % 5);
      (o = (n & ((1 << i) - 1)).toString(32)),
        (n >>= i),
        (s -= i),
        (sn = (1 << (32 - Sr(t) + s)) | (r << s) | n),
        (on = o + e);
    } else (sn = (1 << o) | (r << s) | n), (on = e);
  }
  function o0(e) {
    e.return !== null && (us(e, 1), f5(e, 1, 0));
  }
  function i0(e) {
    for (; e === Vl; )
      (Vl = lo[--uo]), (lo[uo] = null), (zl = lo[--uo]), (lo[uo] = null);
    for (; e === js; )
      (js = ar[--lr]),
        (ar[lr] = null),
        (on = ar[--lr]),
        (ar[lr] = null),
        (sn = ar[--lr]),
        (ar[lr] = null);
  }
  var qt = null,
    zt = null,
    je = !1,
    xr = null;
  function p5(e, t) {
    var r = cr(5, null, null, 0);
    (r.elementType = "DELETED"),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
  }
  function vf(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t =
            t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (qt = e), (zt = Vn(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (qt = e), (zt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = js !== null ? { id: sn, overflow: on } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: r,
                retryLane: 1073741824,
              }),
              (r = cr(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (qt = e),
              (zt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function xc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function _c(e) {
    if (je) {
      var t = zt;
      if (t) {
        var r = t;
        if (!vf(e, t)) {
          if (xc(e)) throw Error(F(418));
          t = Vn(r.nextSibling);
          var n = qt;
          t && vf(e, t)
            ? p5(n, r)
            : ((e.flags = (e.flags & -4097) | 2), (je = !1), (qt = e));
        }
      } else {
        if (xc(e)) throw Error(F(418));
        (e.flags = (e.flags & -4097) | 2), (je = !1), (qt = e);
      }
    }
  }
  function yf(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    qt = e;
  }
  function Ja(e) {
    if (e !== qt) return !1;
    if (!je) return yf(e), (je = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !wc(e.type, e.memoizedProps))),
      t && (t = zt))
    ) {
      if (xc(e)) throw (h5(), Error(F(418)));
      for (; t; ) p5(e, t), (t = Vn(t.nextSibling));
    }
    if ((yf(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(F(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                zt = Vn(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        zt = null;
      }
    } else zt = qt ? Vn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function h5() {
    for (var e = zt; e; ) e = Vn(e.nextSibling);
  }
  function Vo() {
    (zt = qt = null), (je = !1);
  }
  function a0(e) {
    xr === null ? (xr = [e]) : xr.push(e);
  }
  var D7 = hn.ReactCurrentBatchConfig;
  function ci(e, t, r) {
    if (
      ((e = r.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(F(309));
          var n = r.stateNode;
        }
        if (!n) throw Error(F(147, e));
        var s = n,
          o = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === o
          ? t.ref
          : ((t = function (i) {
              var a = s.refs;
              i === null ? delete a[o] : (a[o] = i);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != "string") throw Error(F(284));
      if (!r._owner) throw Error(F(290, e));
    }
    return e;
  }
  function el(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        F(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      ))
    );
  }
  function Cf(e) {
    var t = e._init;
    return t(e._payload);
  }
  function m5(e) {
    function t(g, h) {
      if (e) {
        var v = g.deletions;
        v === null ? ((g.deletions = [h]), (g.flags |= 16)) : v.push(h);
      }
    }
    function r(g, h) {
      if (!e) return null;
      for (; h !== null; ) t(g, h), (h = h.sibling);
      return null;
    }
    function n(g, h) {
      for (g = new Map(); h !== null; )
        h.key !== null ? g.set(h.key, h) : g.set(h.index, h), (h = h.sibling);
      return g;
    }
    function s(g, h) {
      return (g = qn(g, h)), (g.index = 0), (g.sibling = null), g;
    }
    function o(g, h, v) {
      return (
        (g.index = v),
        e
          ? ((v = g.alternate),
            v !== null
              ? ((v = v.index), v < h ? ((g.flags |= 2), h) : v)
              : ((g.flags |= 2), h))
          : ((g.flags |= 1048576), h)
      );
    }
    function i(g) {
      return e && g.alternate === null && (g.flags |= 2), g;
    }
    function a(g, h, v, E) {
      return h === null || h.tag !== 6
        ? ((h = Tu(v, g.mode, E)), (h.return = g), h)
        : ((h = s(h, v)), (h.return = g), h);
    }
    function l(g, h, v, E) {
      var P = v.type;
      return P === ro
        ? d(g, h, v.props.children, E, v.key)
        : h !== null &&
            (h.elementType === P ||
              (typeof P == "object" &&
                P !== null &&
                P.$$typeof === kn &&
                Cf(P) === h.type))
          ? ((E = s(h, v.props)), (E.ref = ci(g, h, v)), (E.return = g), E)
          : ((E = _l(v.type, v.key, v.props, null, g.mode, E)),
            (E.ref = ci(g, h, v)),
            (E.return = g),
            E);
    }
    function c(g, h, v, E) {
      return h === null ||
        h.tag !== 4 ||
        h.stateNode.containerInfo !== v.containerInfo ||
        h.stateNode.implementation !== v.implementation
        ? ((h = xu(v, g.mode, E)), (h.return = g), h)
        : ((h = s(h, v.children || [])), (h.return = g), h);
    }
    function d(g, h, v, E, P) {
      return h === null || h.tag !== 7
        ? ((h = Ss(v, g.mode, E, P)), (h.return = g), h)
        : ((h = s(h, v)), (h.return = g), h);
    }
    function p(g, h, v) {
      if ((typeof h == "string" && h !== "") || typeof h == "number")
        return (h = Tu("" + h, g.mode, v)), (h.return = g), h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case Va:
            return (
              (v = _l(h.type, h.key, h.props, null, g.mode, v)),
              (v.ref = ci(g, null, h)),
              (v.return = g),
              v
            );
          case to:
            return (h = xu(h, g.mode, v)), (h.return = g), h;
          case kn:
            var E = h._init;
            return p(g, E(h._payload), v);
        }
        if (Pi(h) || oi(h))
          return (h = Ss(h, g.mode, v, null)), (h.return = g), h;
        el(g, h);
      }
      return null;
    }
    function f(g, h, v, E) {
      var P = h !== null ? h.key : null;
      if ((typeof v == "string" && v !== "") || typeof v == "number")
        return P !== null ? null : a(g, h, "" + v, E);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Va:
            return v.key === P ? l(g, h, v, E) : null;
          case to:
            return v.key === P ? c(g, h, v, E) : null;
          case kn:
            return (P = v._init), f(g, h, P(v._payload), E);
        }
        if (Pi(v) || oi(v)) return P !== null ? null : d(g, h, v, E, null);
        el(g, v);
      }
      return null;
    }
    function y(g, h, v, E, P) {
      if ((typeof E == "string" && E !== "") || typeof E == "number")
        return (g = g.get(v) || null), a(h, g, "" + E, P);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case Va:
            return (
              (g = g.get(E.key === null ? v : E.key) || null), l(h, g, E, P)
            );
          case to:
            return (
              (g = g.get(E.key === null ? v : E.key) || null), c(h, g, E, P)
            );
          case kn:
            var L = E._init;
            return y(g, h, v, L(E._payload), P);
        }
        if (Pi(E) || oi(E)) return (g = g.get(v) || null), d(h, g, E, P, null);
        el(h, E);
      }
      return null;
    }
    function b(g, h, v, E) {
      for (
        var P = null, L = null, A = h, j = (h = 0), Z = null;
        A !== null && j < v.length;
        j++
      ) {
        A.index > j ? ((Z = A), (A = null)) : (Z = A.sibling);
        var K = f(g, A, v[j], E);
        if (K === null) {
          A === null && (A = Z);
          break;
        }
        e && A && K.alternate === null && t(g, A),
          (h = o(K, h, j)),
          L === null ? (P = K) : (L.sibling = K),
          (L = K),
          (A = Z);
      }
      if (j === v.length) return r(g, A), je && us(g, j), P;
      if (A === null) {
        for (; j < v.length; j++)
          (A = p(g, v[j], E)),
            A !== null &&
              ((h = o(A, h, j)),
              L === null ? (P = A) : (L.sibling = A),
              (L = A));
        return je && us(g, j), P;
      }
      for (A = n(g, A); j < v.length; j++)
        (Z = y(A, g, j, v[j], E)),
          Z !== null &&
            (e && Z.alternate !== null && A.delete(Z.key === null ? j : Z.key),
            (h = o(Z, h, j)),
            L === null ? (P = Z) : (L.sibling = Z),
            (L = Z));
      return (
        e &&
          A.forEach(function (X) {
            return t(g, X);
          }),
        je && us(g, j),
        P
      );
    }
    function T(g, h, v, E) {
      var P = oi(v);
      if (typeof P != "function") throw Error(F(150));
      if (((v = P.call(v)), v == null)) throw Error(F(151));
      for (
        var L = (P = null), A = h, j = (h = 0), Z = null, K = v.next();
        A !== null && !K.done;
        j++, K = v.next()
      ) {
        A.index > j ? ((Z = A), (A = null)) : (Z = A.sibling);
        var X = f(g, A, K.value, E);
        if (X === null) {
          A === null && (A = Z);
          break;
        }
        e && A && X.alternate === null && t(g, A),
          (h = o(X, h, j)),
          L === null ? (P = X) : (L.sibling = X),
          (L = X),
          (A = Z);
      }
      if (K.done) return r(g, A), je && us(g, j), P;
      if (A === null) {
        for (; !K.done; j++, K = v.next())
          (K = p(g, K.value, E)),
            K !== null &&
              ((h = o(K, h, j)),
              L === null ? (P = K) : (L.sibling = K),
              (L = K));
        return je && us(g, j), P;
      }
      for (A = n(g, A); !K.done; j++, K = v.next())
        (K = y(A, g, j, K.value, E)),
          K !== null &&
            (e && K.alternate !== null && A.delete(K.key === null ? j : K.key),
            (h = o(K, h, j)),
            L === null ? (P = K) : (L.sibling = K),
            (L = K));
      return (
        e &&
          A.forEach(function (ne) {
            return t(g, ne);
          }),
        je && us(g, j),
        P
      );
    }
    function _(g, h, v, E) {
      if (
        (typeof v == "object" &&
          v !== null &&
          v.type === ro &&
          v.key === null &&
          (v = v.props.children),
        typeof v == "object" && v !== null)
      ) {
        switch (v.$$typeof) {
          case Va:
            e: {
              for (var P = v.key, L = h; L !== null; ) {
                if (L.key === P) {
                  if (((P = v.type), P === ro)) {
                    if (L.tag === 7) {
                      r(g, L.sibling),
                        (h = s(L, v.props.children)),
                        (h.return = g),
                        (g = h);
                      break e;
                    }
                  } else if (
                    L.elementType === P ||
                    (typeof P == "object" &&
                      P !== null &&
                      P.$$typeof === kn &&
                      Cf(P) === L.type)
                  ) {
                    r(g, L.sibling),
                      (h = s(L, v.props)),
                      (h.ref = ci(g, L, v)),
                      (h.return = g),
                      (g = h);
                    break e;
                  }
                  r(g, L);
                  break;
                } else t(g, L);
                L = L.sibling;
              }
              v.type === ro
                ? ((h = Ss(v.props.children, g.mode, E, v.key)),
                  (h.return = g),
                  (g = h))
                : ((E = _l(v.type, v.key, v.props, null, g.mode, E)),
                  (E.ref = ci(g, h, v)),
                  (E.return = g),
                  (g = E));
            }
            return i(g);
          case to:
            e: {
              for (L = v.key; h !== null; ) {
                if (h.key === L)
                  if (
                    h.tag === 4 &&
                    h.stateNode.containerInfo === v.containerInfo &&
                    h.stateNode.implementation === v.implementation
                  ) {
                    r(g, h.sibling),
                      (h = s(h, v.children || [])),
                      (h.return = g),
                      (g = h);
                    break e;
                  } else {
                    r(g, h);
                    break;
                  }
                else t(g, h);
                h = h.sibling;
              }
              (h = xu(v, g.mode, E)), (h.return = g), (g = h);
            }
            return i(g);
          case kn:
            return (L = v._init), _(g, h, L(v._payload), E);
        }
        if (Pi(v)) return b(g, h, v, E);
        if (oi(v)) return T(g, h, v, E);
        el(g, v);
      }
      return (typeof v == "string" && v !== "") || typeof v == "number"
        ? ((v = "" + v),
          h !== null && h.tag === 6
            ? (r(g, h.sibling), (h = s(h, v)), (h.return = g), (g = h))
            : (r(g, h), (h = Tu(v, g.mode, E)), (h.return = g), (g = h)),
          i(g))
        : r(g, h);
    }
    return _;
  }
  var zo = m5(!0),
    g5 = m5(!1),
    Bl = rs(null),
    Wl = null,
    co = null,
    l0 = null;
  function u0() {
    l0 = co = Wl = null;
  }
  function c0(e) {
    var t = Bl.current;
    Pe(Bl), (e._currentValue = t);
  }
  function Sc(e, t, r) {
    for (; e !== null; ) {
      var n = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
          : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function To(e, t) {
    (Wl = e),
      (l0 = co = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (It = !0), (e.firstContext = null));
  }
  function fr(e) {
    var t = e._currentValue;
    if (l0 !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), co === null)) {
        if (Wl === null) throw Error(F(308));
        (co = e), (Wl.dependencies = { lanes: 0, firstContext: e });
      } else co = co.next = e;
    return t;
  }
  var ms = null;
  function d0(e) {
    ms === null ? (ms = [e]) : ms.push(e);
  }
  function v5(e, t, r, n) {
    var s = t.interleaved;
    return (
      s === null ? ((r.next = r), d0(t)) : ((r.next = s.next), (s.next = r)),
      (t.interleaved = r),
      cn(e, n)
    );
  }
  function cn(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (r = e.alternate),
        r !== null && (r.childLanes |= t),
        (r = e),
        (e = e.return);
    return r.tag === 3 ? r.stateNode : null;
  }
  var On = !1;
  function f0(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function y5(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function an(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function zn(e, t, r) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (((n = n.shared), me & 2)) {
      var s = n.pending;
      return (
        s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
        (n.pending = t),
        cn(e, r)
      );
    }
    return (
      (s = n.interleaved),
      s === null ? ((t.next = t), d0(n)) : ((t.next = s.next), (s.next = t)),
      (n.interleaved = t),
      cn(e, r)
    );
  }
  function Cl(e, t, r) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
    ) {
      var n = t.lanes;
      (n &= e.pendingLanes), (r |= n), (t.lanes = r), Y2(e, r);
    }
  }
  function wf(e, t) {
    var r = e.updateQueue,
      n = e.alternate;
    if (n !== null && ((n = n.updateQueue), r === n)) {
      var s = null,
        o = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var i = {
            eventTime: r.eventTime,
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          };
          o === null ? (s = o = i) : (o = o.next = i), (r = r.next);
        } while (r !== null);
        o === null ? (s = o = t) : (o = o.next = t);
      } else s = o = t;
      (r = {
        baseState: n.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: o,
        shared: n.shared,
        effects: n.effects,
      }),
        (e.updateQueue = r);
      return;
    }
    (e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t);
  }
  function ql(e, t, r, n) {
    var s = e.updateQueue;
    On = !1;
    var o = s.firstBaseUpdate,
      i = s.lastBaseUpdate,
      a = s.shared.pending;
    if (a !== null) {
      s.shared.pending = null;
      var l = a,
        c = l.next;
      (l.next = null), i === null ? (o = c) : (i.next = c), (i = l);
      var d = e.alternate;
      d !== null &&
        ((d = d.updateQueue),
        (a = d.lastBaseUpdate),
        a !== i &&
          (a === null ? (d.firstBaseUpdate = c) : (a.next = c),
          (d.lastBaseUpdate = l)));
    }
    if (o !== null) {
      var p = s.baseState;
      (i = 0), (d = c = l = null), (a = o);
      do {
        var f = a.lane,
          y = a.eventTime;
        if ((n & f) === f) {
          d !== null &&
            (d = d.next =
              {
                eventTime: y,
                lane: 0,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null,
              });
          e: {
            var b = e,
              T = a;
            switch (((f = t), (y = r), T.tag)) {
              case 1:
                if (((b = T.payload), typeof b == "function")) {
                  p = b.call(y, p, f);
                  break e;
                }
                p = b;
                break e;
              case 3:
                b.flags = (b.flags & -65537) | 128;
              case 0:
                if (
                  ((b = T.payload),
                  (f = typeof b == "function" ? b.call(y, p, f) : b),
                  f == null)
                )
                  break e;
                p = Ge({}, p, f);
                break e;
              case 2:
                On = !0;
            }
          }
          a.callback !== null &&
            a.lane !== 0 &&
            ((e.flags |= 64),
            (f = s.effects),
            f === null ? (s.effects = [a]) : f.push(a));
        } else
          (y = {
            eventTime: y,
            lane: f,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null,
          }),
            d === null ? ((c = d = y), (l = p)) : (d = d.next = y),
            (i |= f);
        if (((a = a.next), a === null)) {
          if (((a = s.shared.pending), a === null)) break;
          (f = a),
            (a = f.next),
            (f.next = null),
            (s.lastBaseUpdate = f),
            (s.shared.pending = null);
        }
      } while (!0);
      if (
        (d === null && (l = p),
        (s.baseState = l),
        (s.firstBaseUpdate = c),
        (s.lastBaseUpdate = d),
        (t = s.shared.interleaved),
        t !== null)
      ) {
        s = t;
        do (i |= s.lane), (s = s.next);
        while (s !== t);
      } else o === null && (s.shared.lanes = 0);
      (Fs |= i), (e.lanes = i), (e.memoizedState = p);
    }
  }
  function Ef(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var n = e[t],
          s = n.callback;
        if (s !== null) {
          if (((n.callback = null), (n = r), typeof s != "function"))
            throw Error(F(191, s));
          s.call(n);
        }
      }
  }
  var La = {},
    Br = rs(La),
    la = rs(La),
    ua = rs(La);
  function gs(e) {
    if (e === La) throw Error(F(174));
    return e;
  }
  function p0(e, t) {
    switch ((Se(ua, t), Se(la, e), Se(Br, La), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ic(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = ic(t, e));
    }
    Pe(Br), Se(Br, t);
  }
  function Bo() {
    Pe(Br), Pe(la), Pe(ua);
  }
  function C5(e) {
    gs(ua.current);
    var t = gs(Br.current),
      r = ic(t, e.type);
    t !== r && (Se(la, e), Se(Br, r));
  }
  function h0(e) {
    la.current === e && (Pe(Br), Pe(la));
  }
  var Me = rs(0);
  function Zl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (
          r !== null &&
          ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var vu = [];
  function m0() {
    for (var e = 0; e < vu.length; e++)
      vu[e]._workInProgressVersionPrimary = null;
    vu.length = 0;
  }
  var wl = hn.ReactCurrentDispatcher,
    yu = hn.ReactCurrentBatchConfig,
    Ns = 0,
    De = null,
    We = null,
    Xe = null,
    Kl = !1,
    Hi = !1,
    ca = 0,
    G7 = 0;
  function dt() {
    throw Error(F(321));
  }
  function g0(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!Or(e[r], t[r])) return !1;
    return !0;
  }
  function v0(e, t, r, n, s, o) {
    if (
      ((Ns = o),
      (De = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (wl.current = e === null || e.memoizedState === null ? V7 : z7),
      (e = r(n, s)),
      Hi)
    ) {
      o = 0;
      do {
        if (((Hi = !1), (ca = 0), 25 <= o)) throw Error(F(301));
        (o += 1),
          (Xe = We = null),
          (t.updateQueue = null),
          (wl.current = B7),
          (e = r(n, s));
      } while (Hi);
    }
    if (
      ((wl.current = Ql),
      (t = We !== null && We.next !== null),
      (Ns = 0),
      (Xe = We = De = null),
      (Kl = !1),
      t)
    )
      throw Error(F(300));
    return e;
  }
  function y0() {
    var e = ca !== 0;
    return (ca = 0), e;
  }
  function Nr() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Xe === null ? (De.memoizedState = Xe = e) : (Xe = Xe.next = e), Xe;
  }
  function pr() {
    if (We === null) {
      var e = De.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = We.next;
    var t = Xe === null ? De.memoizedState : Xe.next;
    if (t !== null) (Xe = t), (We = e);
    else {
      if (e === null) throw Error(F(310));
      (We = e),
        (e = {
          memoizedState: We.memoizedState,
          baseState: We.baseState,
          baseQueue: We.baseQueue,
          queue: We.queue,
          next: null,
        }),
        Xe === null ? (De.memoizedState = Xe = e) : (Xe = Xe.next = e);
    }
    return Xe;
  }
  function da(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Cu(e) {
    var t = pr(),
      r = t.queue;
    if (r === null) throw Error(F(311));
    r.lastRenderedReducer = e;
    var n = We,
      s = n.baseQueue,
      o = r.pending;
    if (o !== null) {
      if (s !== null) {
        var i = s.next;
        (s.next = o.next), (o.next = i);
      }
      (n.baseQueue = s = o), (r.pending = null);
    }
    if (s !== null) {
      (o = s.next), (n = n.baseState);
      var a = (i = null),
        l = null,
        c = o;
      do {
        var d = c.lane;
        if ((Ns & d) === d)
          l !== null &&
            (l = l.next =
              {
                lane: 0,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null,
              }),
            (n = c.hasEagerState ? c.eagerState : e(n, c.action));
        else {
          var p = {
            lane: d,
            action: c.action,
            hasEagerState: c.hasEagerState,
            eagerState: c.eagerState,
            next: null,
          };
          l === null ? ((a = l = p), (i = n)) : (l = l.next = p),
            (De.lanes |= d),
            (Fs |= d);
        }
        c = c.next;
      } while (c !== null && c !== o);
      l === null ? (i = n) : (l.next = a),
        Or(n, t.memoizedState) || (It = !0),
        (t.memoizedState = n),
        (t.baseState = i),
        (t.baseQueue = l),
        (r.lastRenderedState = n);
    }
    if (((e = r.interleaved), e !== null)) {
      s = e;
      do (o = s.lane), (De.lanes |= o), (Fs |= o), (s = s.next);
      while (s !== e);
    } else s === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function wu(e) {
    var t = pr(),
      r = t.queue;
    if (r === null) throw Error(F(311));
    r.lastRenderedReducer = e;
    var n = r.dispatch,
      s = r.pending,
      o = t.memoizedState;
    if (s !== null) {
      r.pending = null;
      var i = (s = s.next);
      do (o = e(o, i.action)), (i = i.next);
      while (i !== s);
      Or(o, t.memoizedState) || (It = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (r.lastRenderedState = o);
    }
    return [o, n];
  }
  function w5() {}
  function E5(e, t) {
    var r = De,
      n = pr(),
      s = t(),
      o = !Or(n.memoizedState, s);
    if (
      (o && ((n.memoizedState = s), (It = !0)),
      (n = n.queue),
      C0(x5.bind(null, r, n, e), [e]),
      n.getSnapshot !== t || o || (Xe !== null && Xe.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        fa(9, T5.bind(null, r, n, s, t), void 0, null),
        Je === null)
      )
        throw Error(F(349));
      Ns & 30 || b5(r, t, s);
    }
    return s;
  }
  function b5(e, t, r) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = De.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (De.updateQueue = t),
          (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
  }
  function T5(e, t, r, n) {
    (t.value = r), (t.getSnapshot = n), _5(t) && S5(e);
  }
  function x5(e, t, r) {
    return r(function () {
      _5(t) && S5(e);
    });
  }
  function _5(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Or(e, r);
    } catch {
      return !0;
    }
  }
  function S5(e) {
    var t = cn(e, 1);
    t !== null && kr(t, e, 1, -1);
  }
  function bf(e) {
    var t = Nr();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: da,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = H7.bind(null, De, e)),
      [t.memoizedState, e]
    );
  }
  function fa(e, t, r, n) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
      (t = De.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (De.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
      e
    );
  }
  function k5() {
    return pr().memoizedState;
  }
  function El(e, t, r, n) {
    var s = Nr();
    (De.flags |= e),
      (s.memoizedState = fa(1 | t, r, void 0, n === void 0 ? null : n));
  }
  function g1(e, t, r, n) {
    var s = pr();
    n = n === void 0 ? null : n;
    var o = void 0;
    if (We !== null) {
      var i = We.memoizedState;
      if (((o = i.destroy), n !== null && g0(n, i.deps))) {
        s.memoizedState = fa(t, r, o, n);
        return;
      }
    }
    (De.flags |= e), (s.memoizedState = fa(1 | t, r, o, n));
  }
  function Tf(e, t) {
    return El(8390656, 8, e, t);
  }
  function C0(e, t) {
    return g1(2048, 8, e, t);
  }
  function O5(e, t) {
    return g1(4, 2, e, t);
  }
  function A5(e, t) {
    return g1(4, 4, e, t);
  }
  function P5(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function L5(e, t, r) {
    return (
      (r = r != null ? r.concat([e]) : null), g1(4, 4, P5.bind(null, t, e), r)
    );
  }
  function w0() {}
  function R5(e, t) {
    var r = pr();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && g0(t, n[1])
      ? n[0]
      : ((r.memoizedState = [e, t]), e);
  }
  function j5(e, t) {
    var r = pr();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && g0(t, n[1])
      ? n[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function N5(e, t, r) {
    return Ns & 21
      ? (Or(r, t) ||
          ((r = Gp()), (De.lanes |= r), (Fs |= r), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (It = !0)), (e.memoizedState = r));
  }
  function U7(e, t) {
    var r = be;
    (be = r !== 0 && 4 > r ? r : 4), e(!0);
    var n = yu.transition;
    yu.transition = {};
    try {
      e(!1), t();
    } finally {
      (be = r), (yu.transition = n);
    }
  }
  function F5() {
    return pr().memoizedState;
  }
  function $7(e, t, r) {
    var n = Wn(e);
    if (
      ((r = {
        lane: n,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      I5(e))
    )
      M5(t, r);
    else if (((r = v5(e, t, r, n)), r !== null)) {
      var s = bt();
      kr(r, e, n, s), D5(r, t, n);
    }
  }
  function H7(e, t, r) {
    var n = Wn(e),
      s = {
        lane: n,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (I5(e)) M5(t, s);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var i = t.lastRenderedState,
            a = o(i, r);
          if (((s.hasEagerState = !0), (s.eagerState = a), Or(a, i))) {
            var l = t.interleaved;
            l === null
              ? ((s.next = s), d0(t))
              : ((s.next = l.next), (l.next = s)),
              (t.interleaved = s);
            return;
          }
        } catch {
        } finally {
        }
      (r = v5(e, t, s, n)),
        r !== null && ((s = bt()), kr(r, e, n, s), D5(r, t, n));
    }
  }
  function I5(e) {
    var t = e.alternate;
    return e === De || (t !== null && t === De);
  }
  function M5(e, t) {
    Hi = Kl = !0;
    var r = e.pending;
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t);
  }
  function D5(e, t, r) {
    if (r & 4194240) {
      var n = t.lanes;
      (n &= e.pendingLanes), (r |= n), (t.lanes = r), Y2(e, r);
    }
  }
  var Ql = {
      readContext: fr,
      useCallback: dt,
      useContext: dt,
      useEffect: dt,
      useImperativeHandle: dt,
      useInsertionEffect: dt,
      useLayoutEffect: dt,
      useMemo: dt,
      useReducer: dt,
      useRef: dt,
      useState: dt,
      useDebugValue: dt,
      useDeferredValue: dt,
      useTransition: dt,
      useMutableSource: dt,
      useSyncExternalStore: dt,
      useId: dt,
      unstable_isNewReconciler: !1,
    },
    V7 = {
      readContext: fr,
      useCallback: function (e, t) {
        return (Nr().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: fr,
      useEffect: Tf,
      useImperativeHandle: function (e, t, r) {
        return (
          (r = r != null ? r.concat([e]) : null),
          El(4194308, 4, P5.bind(null, t, e), r)
        );
      },
      useLayoutEffect: function (e, t) {
        return El(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return El(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = Nr();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (r.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, r) {
        var n = Nr();
        return (
          (t = r !== void 0 ? r(t) : t),
          (n.memoizedState = n.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (n.queue = e),
          (e = e.dispatch = $7.bind(null, De, e)),
          [n.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Nr();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: bf,
      useDebugValue: w0,
      useDeferredValue: function (e) {
        return (Nr().memoizedState = e);
      },
      useTransition: function () {
        var e = bf(!1),
          t = e[0];
        return (e = U7.bind(null, e[1])), (Nr().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var n = De,
          s = Nr();
        if (je) {
          if (r === void 0) throw Error(F(407));
          r = r();
        } else {
          if (((r = t()), Je === null)) throw Error(F(349));
          Ns & 30 || b5(n, t, r);
        }
        s.memoizedState = r;
        var o = { value: r, getSnapshot: t };
        return (
          (s.queue = o),
          Tf(x5.bind(null, n, o, e), [e]),
          (n.flags |= 2048),
          fa(9, T5.bind(null, n, o, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = Nr(),
          t = Je.identifierPrefix;
        if (je) {
          var r = on,
            n = sn;
          (r = (n & ~(1 << (32 - Sr(n) - 1))).toString(32) + r),
            (t = ":" + t + "R" + r),
            (r = ca++),
            0 < r && (t += "H" + r.toString(32)),
            (t += ":");
        } else (r = G7++), (t = ":" + t + "r" + r.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    z7 = {
      readContext: fr,
      useCallback: R5,
      useContext: fr,
      useEffect: C0,
      useImperativeHandle: L5,
      useInsertionEffect: O5,
      useLayoutEffect: A5,
      useMemo: j5,
      useReducer: Cu,
      useRef: k5,
      useState: function () {
        return Cu(da);
      },
      useDebugValue: w0,
      useDeferredValue: function (e) {
        var t = pr();
        return N5(t, We.memoizedState, e);
      },
      useTransition: function () {
        var e = Cu(da)[0],
          t = pr().memoizedState;
        return [e, t];
      },
      useMutableSource: w5,
      useSyncExternalStore: E5,
      useId: F5,
      unstable_isNewReconciler: !1,
    },
    B7 = {
      readContext: fr,
      useCallback: R5,
      useContext: fr,
      useEffect: C0,
      useImperativeHandle: L5,
      useInsertionEffect: O5,
      useLayoutEffect: A5,
      useMemo: j5,
      useReducer: wu,
      useRef: k5,
      useState: function () {
        return wu(da);
      },
      useDebugValue: w0,
      useDeferredValue: function (e) {
        var t = pr();
        return We === null ? (t.memoizedState = e) : N5(t, We.memoizedState, e);
      },
      useTransition: function () {
        var e = wu(da)[0],
          t = pr().memoizedState;
        return [e, t];
      },
      useMutableSource: w5,
      useSyncExternalStore: E5,
      useId: F5,
      unstable_isNewReconciler: !1,
    };
  function Er(e, t) {
    if (e && e.defaultProps) {
      (t = Ge({}, t)), (e = e.defaultProps);
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function kc(e, t, r, n) {
    (t = e.memoizedState),
      (r = r(n, t)),
      (r = r == null ? t : Ge({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var v1 = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? $s(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var n = bt(),
        s = Wn(e),
        o = an(n, s);
      (o.payload = t),
        r != null && (o.callback = r),
        (t = zn(e, o, s)),
        t !== null && (kr(t, e, s, n), Cl(t, e, s));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var n = bt(),
        s = Wn(e),
        o = an(n, s);
      (o.tag = 1),
        (o.payload = t),
        r != null && (o.callback = r),
        (t = zn(e, o, s)),
        t !== null && (kr(t, e, s, n), Cl(t, e, s));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = bt(),
        n = Wn(e),
        s = an(r, n);
      (s.tag = 2),
        t != null && (s.callback = t),
        (t = zn(e, s, n)),
        t !== null && (kr(t, e, n, r), Cl(t, e, n));
    },
  };
  function xf(e, t, r, n, s, o, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(n, o, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !sa(r, n) || !sa(s, o)
          : !0
    );
  }
  function G5(e, t, r) {
    var n = !1,
      s = Qn,
      o = t.contextType;
    return (
      typeof o == "object" && o !== null
        ? (o = fr(o))
        : ((s = Dt(t) ? Rs : mt.current),
          (n = t.contextTypes),
          (o = (n = n != null) ? Ho(e, s) : Qn)),
      (t = new t(r, o)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = v1),
      (e.stateNode = t),
      (t._reactInternals = e),
      n &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = s),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function _f(e, t, r, n) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(r, n),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(r, n),
      t.state !== e && v1.enqueueReplaceState(t, t.state, null);
  }
  function Oc(e, t, r, n) {
    var s = e.stateNode;
    (s.props = r), (s.state = e.memoizedState), (s.refs = {}), f0(e);
    var o = t.contextType;
    typeof o == "object" && o !== null
      ? (s.context = fr(o))
      : ((o = Dt(t) ? Rs : mt.current), (s.context = Ho(e, o))),
      (s.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == "function" && (kc(e, t, o, r), (s.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function" ||
        (typeof s.UNSAFE_componentWillMount != "function" &&
          typeof s.componentWillMount != "function") ||
        ((t = s.state),
        typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" &&
          s.UNSAFE_componentWillMount(),
        t !== s.state && v1.enqueueReplaceState(s, s.state, null),
        ql(e, r, s, n),
        (s.state = e.memoizedState)),
      typeof s.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Wo(e, t) {
    try {
      var r = "",
        n = t;
      do (r += Ch(n)), (n = n.return);
      while (n);
      var s = r;
    } catch (o) {
      s =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: s, digest: null };
  }
  function Eu(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function Ac(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var W7 = typeof WeakMap == "function" ? WeakMap : Map;
  function U5(e, t, r) {
    (r = an(-1, r)), (r.tag = 3), (r.payload = { element: null });
    var n = t.value;
    return (
      (r.callback = function () {
        Xl || ((Xl = !0), (Gc = n)), Ac(e, t);
      }),
      r
    );
  }
  function $5(e, t, r) {
    (r = an(-1, r)), (r.tag = 3);
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var s = t.value;
      (r.payload = function () {
        return n(s);
      }),
        (r.callback = function () {
          Ac(e, t);
        });
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == "function" &&
        (r.callback = function () {
          Ac(e, t),
            typeof n != "function" &&
              (Bn === null ? (Bn = new Set([this])) : Bn.add(this));
          var i = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : "",
          });
        }),
      r
    );
  }
  function Sf(e, t, r) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new W7();
      var s = new Set();
      n.set(t, s);
    } else (s = n.get(t)), s === void 0 && ((s = new Set()), n.set(t, s));
    s.has(r) || (s.add(r), (e = im.bind(null, e, t, r)), t.then(e, e));
  }
  function kf(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Of(e, t, r, n, s) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = s), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null
                ? (r.tag = 17)
                : ((t = an(-1, 1)), (t.tag = 2), zn(r, t, 1))),
            (r.lanes |= 1)),
        e);
  }
  var q7 = hn.ReactCurrentOwner,
    It = !1;
  function Et(e, t, r, n) {
    t.child = e === null ? g5(t, null, r, n) : zo(t, e.child, r, n);
  }
  function Af(e, t, r, n, s) {
    r = r.render;
    var o = t.ref;
    return (
      To(t, s),
      (n = v0(e, t, r, n, o, s)),
      (r = y0()),
      e !== null && !It
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~s),
          dn(e, t, s))
        : (je && r && o0(t), (t.flags |= 1), Et(e, t, n, s), t.child)
    );
  }
  function Pf(e, t, r, n, s) {
    if (e === null) {
      var o = r.type;
      return typeof o == "function" &&
        !O0(o) &&
        o.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), H5(e, t, o, n, s))
        : ((e = _l(r.type, null, n, t, t.mode, s)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), !(e.lanes & s))) {
      var i = o.memoizedProps;
      if (
        ((r = r.compare), (r = r !== null ? r : sa), r(i, n) && e.ref === t.ref)
      )
        return dn(e, t, s);
    }
    return (
      (t.flags |= 1),
      (e = qn(o, n)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function H5(e, t, r, n, s) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (sa(o, n) && e.ref === t.ref)
        if (((It = !1), (t.pendingProps = n = o), (e.lanes & s) !== 0))
          e.flags & 131072 && (It = !0);
        else return (t.lanes = e.lanes), dn(e, t, s);
    }
    return Pc(e, t, r, n, s);
  }
  function V5(e, t, r) {
    var n = t.pendingProps,
      s = n.children,
      o = e !== null ? e.memoizedState : null;
    if (n.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Se(po, Vt),
          (Vt |= r);
      else {
        if (!(r & 1073741824))
          return (
            (e = o !== null ? o.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Se(po, Vt),
            (Vt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (n = o !== null ? o.baseLanes : r),
          Se(po, Vt),
          (Vt |= n);
      }
    else
      o !== null ? ((n = o.baseLanes | r), (t.memoizedState = null)) : (n = r),
        Se(po, Vt),
        (Vt |= n);
    return Et(e, t, s, r), t.child;
  }
  function z5(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Pc(e, t, r, n, s) {
    var o = Dt(r) ? Rs : mt.current;
    return (
      (o = Ho(t, o)),
      To(t, s),
      (r = v0(e, t, r, n, o, s)),
      (n = y0()),
      e !== null && !It
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~s),
          dn(e, t, s))
        : (je && n && o0(t), (t.flags |= 1), Et(e, t, r, s), t.child)
    );
  }
  function Lf(e, t, r, n, s) {
    if (Dt(r)) {
      var o = !0;
      Hl(t);
    } else o = !1;
    if ((To(t, s), t.stateNode === null))
      bl(e, t), G5(t, r, n), Oc(t, r, n, s), (n = !0);
    else if (e === null) {
      var i = t.stateNode,
        a = t.memoizedProps;
      i.props = a;
      var l = i.context,
        c = r.contextType;
      typeof c == "object" && c !== null
        ? (c = fr(c))
        : ((c = Dt(r) ? Rs : mt.current), (c = Ho(t, c)));
      var d = r.getDerivedStateFromProps,
        p =
          typeof d == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function";
      p ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((a !== n || l !== c) && _f(t, i, n, c)),
        (On = !1);
      var f = t.memoizedState;
      (i.state = f),
        ql(t, n, i, s),
        (l = t.memoizedState),
        a !== n || f !== l || Mt.current || On
          ? (typeof d == "function" && (kc(t, r, d, n), (l = t.memoizedState)),
            (a = On || xf(t, r, a, n, f, l, c))
              ? (p ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = n),
                (t.memoizedState = l)),
            (i.props = n),
            (i.state = l),
            (i.context = c),
            (n = a))
          : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
            (n = !1));
    } else {
      (i = t.stateNode),
        y5(e, t),
        (a = t.memoizedProps),
        (c = t.type === t.elementType ? a : Er(t.type, a)),
        (i.props = c),
        (p = t.pendingProps),
        (f = i.context),
        (l = r.contextType),
        typeof l == "object" && l !== null
          ? (l = fr(l))
          : ((l = Dt(r) ? Rs : mt.current), (l = Ho(t, l)));
      var y = r.getDerivedStateFromProps;
      (d =
        typeof y == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function") ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((a !== p || f !== l) && _f(t, i, n, l)),
        (On = !1),
        (f = t.memoizedState),
        (i.state = f),
        ql(t, n, i, s);
      var b = t.memoizedState;
      a !== p || f !== b || Mt.current || On
        ? (typeof y == "function" && (kc(t, r, y, n), (b = t.memoizedState)),
          (c = On || xf(t, r, c, n, f, b, l) || !1)
            ? (d ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(n, b, l),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(n, b, l)),
              typeof i.componentDidUpdate == "function" && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (a === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (a === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = n),
              (t.memoizedState = b)),
          (i.props = n),
          (i.state = b),
          (i.context = l),
          (n = c))
        : (typeof i.componentDidUpdate != "function" ||
            (a === e.memoizedProps && f === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (a === e.memoizedProps && f === e.memoizedState) ||
            (t.flags |= 1024),
          (n = !1));
    }
    return Lc(e, t, r, n, o, s);
  }
  function Lc(e, t, r, n, s, o) {
    z5(e, t);
    var i = (t.flags & 128) !== 0;
    if (!n && !i) return s && gf(t, r, !1), dn(e, t, o);
    (n = t.stateNode), (q7.current = t);
    var a =
      i && typeof r.getDerivedStateFromError != "function" ? null : n.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = zo(t, e.child, null, o)), (t.child = zo(t, null, a, o)))
        : Et(e, t, a, o),
      (t.memoizedState = n.state),
      s && gf(t, r, !0),
      t.child
    );
  }
  function B5(e) {
    var t = e.stateNode;
    t.pendingContext
      ? mf(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && mf(e, t.context, !1),
      p0(e, t.containerInfo);
  }
  function Rf(e, t, r, n, s) {
    return Vo(), a0(s), (t.flags |= 256), Et(e, t, r, n), t.child;
  }
  var Rc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function jc(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function W5(e, t, r) {
    var n = t.pendingProps,
      s = Me.current,
      o = !1,
      i = (t.flags & 128) !== 0,
      a;
    if (
      ((a = i) ||
        (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
      a
        ? ((o = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (s |= 1),
      Se(Me, s & 1),
      e === null)
    )
      return (
        _c(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((i = n.children),
            (e = n.fallback),
            o
              ? ((n = t.mode),
                (o = t.child),
                (i = { mode: "hidden", children: i }),
                !(n & 1) && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = i))
                  : (o = w1(i, n, 0, null)),
                (e = Ss(e, n, r, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = jc(r)),
                (t.memoizedState = Rc),
                e)
              : E0(t, i))
      );
    if (((s = e.memoizedState), s !== null && ((a = s.dehydrated), a !== null)))
      return Z7(e, t, i, n, a, s, r);
    if (o) {
      (o = n.fallback), (i = t.mode), (s = e.child), (a = s.sibling);
      var l = { mode: "hidden", children: n.children };
      return (
        !(i & 1) && t.child !== s
          ? ((n = t.child),
            (n.childLanes = 0),
            (n.pendingProps = l),
            (t.deletions = null))
          : ((n = qn(s, l)), (n.subtreeFlags = s.subtreeFlags & 14680064)),
        a !== null ? (o = qn(a, o)) : ((o = Ss(o, i, r, null)), (o.flags |= 2)),
        (o.return = t),
        (n.return = t),
        (n.sibling = o),
        (t.child = n),
        (n = o),
        (o = t.child),
        (i = e.child.memoizedState),
        (i =
          i === null
            ? jc(r)
            : {
                baseLanes: i.baseLanes | r,
                cachePool: null,
                transitions: i.transitions,
              }),
        (o.memoizedState = i),
        (o.childLanes = e.childLanes & ~r),
        (t.memoizedState = Rc),
        n
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (n = qn(o, { mode: "visible", children: n.children })),
      !(t.mode & 1) && (n.lanes = r),
      (n.return = t),
      (n.sibling = null),
      e !== null &&
        ((r = t.deletions),
        r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
      (t.child = n),
      (t.memoizedState = null),
      n
    );
  }
  function E0(e, t) {
    return (
      (t = w1({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function tl(e, t, r, n) {
    return (
      n !== null && a0(n),
      zo(t, e.child, null, r),
      (e = E0(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Z7(e, t, r, n, s, o, i) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (n = Eu(Error(F(422)))), tl(e, t, i, n))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = n.fallback),
            (s = t.mode),
            (n = w1({ mode: "visible", children: n.children }, s, 0, null)),
            (o = Ss(o, s, i, null)),
            (o.flags |= 2),
            (n.return = t),
            (o.return = t),
            (n.sibling = o),
            (t.child = n),
            t.mode & 1 && zo(t, e.child, null, i),
            (t.child.memoizedState = jc(i)),
            (t.memoizedState = Rc),
            o);
    if (!(t.mode & 1)) return tl(e, t, i, null);
    if (s.data === "$!") {
      if (((n = s.nextSibling && s.nextSibling.dataset), n)) var a = n.dgst;
      return (
        (n = a), (o = Error(F(419))), (n = Eu(o, n, void 0)), tl(e, t, i, n)
      );
    }
    if (((a = (i & e.childLanes) !== 0), It || a)) {
      if (((n = Je), n !== null)) {
        switch (i & -i) {
          case 4:
            s = 2;
            break;
          case 16:
            s = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            s = 32;
            break;
          case 536870912:
            s = 268435456;
            break;
          default:
            s = 0;
        }
        (s = s & (n.suspendedLanes | i) ? 0 : s),
          s !== 0 &&
            s !== o.retryLane &&
            ((o.retryLane = s), cn(e, s), kr(n, e, s, -1));
      }
      return k0(), (n = Eu(Error(F(421)))), tl(e, t, i, n);
    }
    return s.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = am.bind(null, e)),
        (s._reactRetry = t),
        null)
      : ((e = o.treeContext),
        (zt = Vn(s.nextSibling)),
        (qt = t),
        (je = !0),
        (xr = null),
        e !== null &&
          ((ar[lr++] = sn),
          (ar[lr++] = on),
          (ar[lr++] = js),
          (sn = e.id),
          (on = e.overflow),
          (js = t)),
        (t = E0(t, n.children)),
        (t.flags |= 4096),
        t);
  }
  function jf(e, t, r) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), Sc(e.return, t, r);
  }
  function bu(e, t, r, n, s) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: n,
          tail: r,
          tailMode: s,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = n),
        (o.tail = r),
        (o.tailMode = s));
  }
  function q5(e, t, r) {
    var n = t.pendingProps,
      s = n.revealOrder,
      o = n.tail;
    if ((Et(e, t, n.children, r), (n = Me.current), n & 2))
      (n = (n & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && jf(e, r, t);
          else if (e.tag === 19) jf(e, r, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      n &= 1;
    }
    if ((Se(Me, n), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (s) {
        case "forwards":
          for (r = t.child, s = null; r !== null; )
            (e = r.alternate),
              e !== null && Zl(e) === null && (s = r),
              (r = r.sibling);
          (r = s),
            r === null
              ? ((s = t.child), (t.child = null))
              : ((s = r.sibling), (r.sibling = null)),
            bu(t, !1, s, r, o);
          break;
        case "backwards":
          for (r = null, s = t.child, t.child = null; s !== null; ) {
            if (((e = s.alternate), e !== null && Zl(e) === null)) {
              t.child = s;
              break;
            }
            (e = s.sibling), (s.sibling = r), (r = s), (s = e);
          }
          bu(t, !0, r, null, o);
          break;
        case "together":
          bu(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function bl(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function dn(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Fs |= t.lanes),
      !(r & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(F(153));
    if (t.child !== null) {
      for (
        e = t.child, r = qn(e, e.pendingProps), t.child = r, r.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (r = r.sibling = qn(e, e.pendingProps)),
          (r.return = t);
      r.sibling = null;
    }
    return t.child;
  }
  function K7(e, t, r) {
    switch (t.tag) {
      case 3:
        B5(t), Vo();
        break;
      case 5:
        C5(t);
        break;
      case 1:
        Dt(t.type) && Hl(t);
        break;
      case 4:
        p0(t, t.stateNode.containerInfo);
        break;
      case 10:
        var n = t.type._context,
          s = t.memoizedProps.value;
        Se(Bl, n._currentValue), (n._currentValue = s);
        break;
      case 13:
        if (((n = t.memoizedState), n !== null))
          return n.dehydrated !== null
            ? (Se(Me, Me.current & 1), (t.flags |= 128), null)
            : r & t.child.childLanes
              ? W5(e, t, r)
              : (Se(Me, Me.current & 1),
                (e = dn(e, t, r)),
                e !== null ? e.sibling : null);
        Se(Me, Me.current & 1);
        break;
      case 19:
        if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
          if (n) return q5(e, t, r);
          t.flags |= 128;
        }
        if (
          ((s = t.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          Se(Me, Me.current),
          n)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), V5(e, t, r);
    }
    return dn(e, t, r);
  }
  var Z5, Nc, K5, Q5;
  Z5 = function (e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
  };
  Nc = function () {};
  K5 = function (e, t, r, n) {
    var s = e.memoizedProps;
    if (s !== n) {
      (e = t.stateNode), gs(Br.current);
      var o = null;
      switch (r) {
        case "input":
          (s = rc(e, s)), (n = rc(e, n)), (o = []);
          break;
        case "select":
          (s = Ge({}, s, { value: void 0 })),
            (n = Ge({}, n, { value: void 0 })),
            (o = []);
          break;
        case "textarea":
          (s = oc(e, s)), (n = oc(e, n)), (o = []);
          break;
        default:
          typeof s.onClick != "function" &&
            typeof n.onClick == "function" &&
            (e.onclick = Ul);
      }
      ac(r, n);
      var i;
      r = null;
      for (c in s)
        if (!n.hasOwnProperty(c) && s.hasOwnProperty(c) && s[c] != null)
          if (c === "style") {
            var a = s[c];
            for (i in a) a.hasOwnProperty(i) && (r || (r = {}), (r[i] = ""));
          } else
            c !== "dangerouslySetInnerHTML" &&
              c !== "children" &&
              c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              c !== "autoFocus" &&
              (Yi.hasOwnProperty(c)
                ? o || (o = [])
                : (o = o || []).push(c, null));
      for (c in n) {
        var l = n[c];
        if (
          ((a = s != null ? s[c] : void 0),
          n.hasOwnProperty(c) && l !== a && (l != null || a != null))
        )
          if (c === "style")
            if (a) {
              for (i in a)
                !a.hasOwnProperty(i) ||
                  (l && l.hasOwnProperty(i)) ||
                  (r || (r = {}), (r[i] = ""));
              for (i in l)
                l.hasOwnProperty(i) &&
                  a[i] !== l[i] &&
                  (r || (r = {}), (r[i] = l[i]));
            } else r || (o || (o = []), o.push(c, r)), (r = l);
          else
            c === "dangerouslySetInnerHTML"
              ? ((l = l ? l.__html : void 0),
                (a = a ? a.__html : void 0),
                l != null && a !== l && (o = o || []).push(c, l))
              : c === "children"
                ? (typeof l != "string" && typeof l != "number") ||
                  (o = o || []).push(c, "" + l)
                : c !== "suppressContentEditableWarning" &&
                  c !== "suppressHydrationWarning" &&
                  (Yi.hasOwnProperty(c)
                    ? (l != null && c === "onScroll" && Oe("scroll", e),
                      o || a === l || (o = []))
                    : (o = o || []).push(c, l));
      }
      r && (o = o || []).push("style", r);
      var c = o;
      (t.updateQueue = c) && (t.flags |= 4);
    }
  };
  Q5 = function (e, t, r, n) {
    r !== n && (t.flags |= 4);
  };
  function di(e, t) {
    if (!je)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling);
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case "collapsed":
          r = e.tail;
          for (var n = null; r !== null; )
            r.alternate !== null && (n = r), (r = r.sibling);
          n === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (n.sibling = null);
      }
  }
  function ft(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      n = 0;
    if (t)
      for (var s = e.child; s !== null; )
        (r |= s.lanes | s.childLanes),
          (n |= s.subtreeFlags & 14680064),
          (n |= s.flags & 14680064),
          (s.return = e),
          (s = s.sibling);
    else
      for (s = e.child; s !== null; )
        (r |= s.lanes | s.childLanes),
          (n |= s.subtreeFlags),
          (n |= s.flags),
          (s.return = e),
          (s = s.sibling);
    return (e.subtreeFlags |= n), (e.childLanes = r), t;
  }
  function Q7(e, t, r) {
    var n = t.pendingProps;
    switch ((i0(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ft(t), null;
      case 1:
        return Dt(t.type) && $l(), ft(t), null;
      case 3:
        return (
          (n = t.stateNode),
          Bo(),
          Pe(Mt),
          Pe(mt),
          m0(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ja(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), xr !== null && (Hc(xr), (xr = null)))),
          Nc(e, t),
          ft(t),
          null
        );
      case 5:
        h0(t);
        var s = gs(ua.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          K5(e, t, r, n, s),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(F(166));
            return ft(t), null;
          }
          if (((e = gs(Br.current)), Ja(t))) {
            (n = t.stateNode), (r = t.type);
            var o = t.memoizedProps;
            switch (((n[$r] = t), (n[aa] = o), (e = (t.mode & 1) !== 0), r)) {
              case "dialog":
                Oe("cancel", n), Oe("close", n);
                break;
              case "iframe":
              case "object":
              case "embed":
                Oe("load", n);
                break;
              case "video":
              case "audio":
                for (s = 0; s < Ri.length; s++) Oe(Ri[s], n);
                break;
              case "source":
                Oe("error", n);
                break;
              case "img":
              case "image":
              case "link":
                Oe("error", n), Oe("load", n);
                break;
              case "details":
                Oe("toggle", n);
                break;
              case "input":
                $d(n, o), Oe("invalid", n);
                break;
              case "select":
                (n._wrapperState = { wasMultiple: !!o.multiple }),
                  Oe("invalid", n);
                break;
              case "textarea":
                Vd(n, o), Oe("invalid", n);
            }
            ac(r, o), (s = null);
            for (var i in o)
              if (o.hasOwnProperty(i)) {
                var a = o[i];
                i === "children"
                  ? typeof a == "string"
                    ? n.textContent !== a &&
                      (o.suppressHydrationWarning !== !0 &&
                        Xa(n.textContent, a, e),
                      (s = ["children", a]))
                    : typeof a == "number" &&
                      n.textContent !== "" + a &&
                      (o.suppressHydrationWarning !== !0 &&
                        Xa(n.textContent, a, e),
                      (s = ["children", "" + a]))
                  : Yi.hasOwnProperty(i) &&
                    a != null &&
                    i === "onScroll" &&
                    Oe("scroll", n);
              }
            switch (r) {
              case "input":
                za(n), Hd(n, o, !0);
                break;
              case "textarea":
                za(n), zd(n);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (n.onclick = Ul);
            }
            (n = s), (t.updateQueue = n), n !== null && (t.flags |= 4);
          } else {
            (i = s.nodeType === 9 ? s : s.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = xp(r)),
              e === "http://www.w3.org/1999/xhtml"
                ? r === "script"
                  ? ((e = i.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof n.is == "string"
                    ? (e = i.createElement(r, { is: n.is }))
                    : ((e = i.createElement(r)),
                      r === "select" &&
                        ((i = e),
                        n.multiple
                          ? (i.multiple = !0)
                          : n.size && (i.size = n.size)))
                : (e = i.createElementNS(e, r)),
              (e[$r] = t),
              (e[aa] = n),
              Z5(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((i = lc(r, n)), r)) {
                case "dialog":
                  Oe("cancel", e), Oe("close", e), (s = n);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Oe("load", e), (s = n);
                  break;
                case "video":
                case "audio":
                  for (s = 0; s < Ri.length; s++) Oe(Ri[s], e);
                  s = n;
                  break;
                case "source":
                  Oe("error", e), (s = n);
                  break;
                case "img":
                case "image":
                case "link":
                  Oe("error", e), Oe("load", e), (s = n);
                  break;
                case "details":
                  Oe("toggle", e), (s = n);
                  break;
                case "input":
                  $d(e, n), (s = rc(e, n)), Oe("invalid", e);
                  break;
                case "option":
                  s = n;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!n.multiple }),
                    (s = Ge({}, n, { value: void 0 })),
                    Oe("invalid", e);
                  break;
                case "textarea":
                  Vd(e, n), (s = oc(e, n)), Oe("invalid", e);
                  break;
                default:
                  s = n;
              }
              ac(r, s), (a = s);
              for (o in a)
                if (a.hasOwnProperty(o)) {
                  var l = a[o];
                  o === "style"
                    ? kp(e, l)
                    : o === "dangerouslySetInnerHTML"
                      ? ((l = l ? l.__html : void 0), l != null && _p(e, l))
                      : o === "children"
                        ? typeof l == "string"
                          ? (r !== "textarea" || l !== "") && Xi(e, l)
                          : typeof l == "number" && Xi(e, "" + l)
                        : o !== "suppressContentEditableWarning" &&
                          o !== "suppressHydrationWarning" &&
                          o !== "autoFocus" &&
                          (Yi.hasOwnProperty(o)
                            ? l != null && o === "onScroll" && Oe("scroll", e)
                            : l != null && B2(e, o, l, i));
                }
              switch (r) {
                case "input":
                  za(e), Hd(e, n, !1);
                  break;
                case "textarea":
                  za(e), zd(e);
                  break;
                case "option":
                  n.value != null && e.setAttribute("value", "" + Kn(n.value));
                  break;
                case "select":
                  (e.multiple = !!n.multiple),
                    (o = n.value),
                    o != null
                      ? Co(e, !!n.multiple, o, !1)
                      : n.defaultValue != null &&
                        Co(e, !!n.multiple, n.defaultValue, !0);
                  break;
                default:
                  typeof s.onClick == "function" && (e.onclick = Ul);
              }
              switch (r) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  n = !!n.autoFocus;
                  break e;
                case "img":
                  n = !0;
                  break e;
                default:
                  n = !1;
              }
            }
            n && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return ft(t), null;
      case 6:
        if (e && t.stateNode != null) Q5(e, t, e.memoizedProps, n);
        else {
          if (typeof n != "string" && t.stateNode === null) throw Error(F(166));
          if (((r = gs(ua.current)), gs(Br.current), Ja(t))) {
            if (
              ((n = t.stateNode),
              (r = t.memoizedProps),
              (n[$r] = t),
              (o = n.nodeValue !== r) && ((e = qt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Xa(n.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Xa(n.nodeValue, r, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
              (n[$r] = t),
              (t.stateNode = n);
        }
        return ft(t), null;
      case 13:
        if (
          (Pe(Me),
          (n = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (je && zt !== null && t.mode & 1 && !(t.flags & 128))
            h5(), Vo(), (t.flags |= 98560), (o = !1);
          else if (((o = Ja(t)), n !== null && n.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(F(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(F(317));
              o[$r] = t;
            } else
              Vo(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            ft(t), (o = !1);
          } else xr !== null && (Hc(xr), (xr = null)), (o = !0);
          if (!o) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = r), t)
          : ((n = n !== null),
            n !== (e !== null && e.memoizedState !== null) &&
              n &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || Me.current & 1 ? qe === 0 && (qe = 3) : k0())),
            t.updateQueue !== null && (t.flags |= 4),
            ft(t),
            null);
      case 4:
        return (
          Bo(),
          Nc(e, t),
          e === null && oa(t.stateNode.containerInfo),
          ft(t),
          null
        );
      case 10:
        return c0(t.type._context), ft(t), null;
      case 17:
        return Dt(t.type) && $l(), ft(t), null;
      case 19:
        if ((Pe(Me), (o = t.memoizedState), o === null)) return ft(t), null;
        if (((n = (t.flags & 128) !== 0), (i = o.rendering), i === null))
          if (n) di(o, !1);
          else {
            if (qe !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((i = Zl(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      di(o, !1),
                      n = i.updateQueue,
                      n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      n = r,
                      r = t.child;
                    r !== null;

                  )
                    (o = r),
                      (e = n),
                      (o.flags &= 14680066),
                      (i = o.alternate),
                      i === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = i.childLanes),
                          (o.lanes = i.lanes),
                          (o.child = i.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = i.memoizedProps),
                          (o.memoizedState = i.memoizedState),
                          (o.updateQueue = i.updateQueue),
                          (o.type = i.type),
                          (e = i.dependencies),
                          (o.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (r = r.sibling);
                  return Se(Me, (Me.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              He() > qo &&
              ((t.flags |= 128), (n = !0), di(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!n)
            if (((e = Zl(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (n = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                di(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !i.alternate &&
                  !je)
              )
                return ft(t), null;
            } else
              2 * He() - o.renderingStartTime > qo &&
                r !== 1073741824 &&
                ((t.flags |= 128), (n = !0), di(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((r = o.last),
              r !== null ? (r.sibling = i) : (t.child = i),
              (o.last = i));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = He()),
            (t.sibling = null),
            (r = Me.current),
            Se(Me, n ? (r & 1) | 2 : r & 1),
            t)
          : (ft(t), null);
      case 22:
      case 23:
        return (
          S0(),
          (n = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
          n && t.mode & 1
            ? Vt & 1073741824 &&
              (ft(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : ft(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(F(156, t.tag));
  }
  function Y7(e, t) {
    switch ((i0(t), t.tag)) {
      case 1:
        return (
          Dt(t.type) && $l(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Bo(),
          Pe(Mt),
          Pe(mt),
          m0(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return h0(t), null;
      case 13:
        if (
          (Pe(Me), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(F(340));
          Vo();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return Pe(Me), null;
      case 4:
        return Bo(), null;
      case 10:
        return c0(t.type._context), null;
      case 22:
      case 23:
        return S0(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var rl = !1,
    ht = !1,
    X7 = typeof WeakSet == "function" ? WeakSet : Set,
    V = null;
  function fo(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == "function")
        try {
          r(null);
        } catch (n) {
          $e(e, t, n);
        }
      else r.current = null;
  }
  function Fc(e, t, r) {
    try {
      r();
    } catch (n) {
      $e(e, t, n);
    }
  }
  var Nf = !1;
  function J7(e, t) {
    if (((yc = Ml), (e = t5()), s0(e))) {
      if ("selectionStart" in e)
        var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var n = r.getSelection && r.getSelection();
          if (n && n.rangeCount !== 0) {
            r = n.anchorNode;
            var s = n.anchorOffset,
              o = n.focusNode;
            n = n.focusOffset;
            try {
              r.nodeType, o.nodeType;
            } catch {
              r = null;
              break e;
            }
            var i = 0,
              a = -1,
              l = -1,
              c = 0,
              d = 0,
              p = e,
              f = null;
            t: for (;;) {
              for (
                var y;
                p !== r || (s !== 0 && p.nodeType !== 3) || (a = i + s),
                  p !== o || (n !== 0 && p.nodeType !== 3) || (l = i + n),
                  p.nodeType === 3 && (i += p.nodeValue.length),
                  (y = p.firstChild) !== null;

              )
                (f = p), (p = y);
              for (;;) {
                if (p === e) break t;
                if (
                  (f === r && ++c === s && (a = i),
                  f === o && ++d === n && (l = i),
                  (y = p.nextSibling) !== null)
                )
                  break;
                (p = f), (f = p.parentNode);
              }
              p = y;
            }
            r = a === -1 || l === -1 ? null : { start: a, end: l };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (
      Cc = { focusedElem: e, selectionRange: r }, Ml = !1, V = t;
      V !== null;

    )
      if (((t = V), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (V = e);
      else
        for (; V !== null; ) {
          t = V;
          try {
            var b = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (b !== null) {
                    var T = b.memoizedProps,
                      _ = b.memoizedState,
                      g = t.stateNode,
                      h = g.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? T : Er(t.type, T),
                        _,
                      );
                    g.__reactInternalSnapshotBeforeUpdate = h;
                  }
                  break;
                case 3:
                  var v = t.stateNode.containerInfo;
                  v.nodeType === 1
                    ? (v.textContent = "")
                    : v.nodeType === 9 &&
                      v.documentElement &&
                      v.removeChild(v.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(F(163));
              }
          } catch (E) {
            $e(t, t.return, E);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (V = e);
            break;
          }
          V = t.return;
        }
    return (b = Nf), (Nf = !1), b;
  }
  function Vi(e, t, r) {
    var n = t.updateQueue;
    if (((n = n !== null ? n.lastEffect : null), n !== null)) {
      var s = (n = n.next);
      do {
        if ((s.tag & e) === e) {
          var o = s.destroy;
          (s.destroy = void 0), o !== void 0 && Fc(t, r, o);
        }
        s = s.next;
      } while (s !== n);
    }
  }
  function y1(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var r = (t = t.next);
      do {
        if ((r.tag & e) === e) {
          var n = r.create;
          r.destroy = n();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function Ic(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
        case 5:
          e = r;
          break;
        default:
          e = r;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Y5(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Y5(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[$r],
          delete t[aa],
          delete t[bc],
          delete t[F7],
          delete t[I7])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function X5(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Ff(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || X5(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Mc(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6)
      (e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8
              ? ((t = r.parentNode), t.insertBefore(e, r))
              : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = Ul));
    else if (n !== 4 && ((e = e.child), e !== null))
      for (Mc(e, t, r), e = e.sibling; e !== null; )
        Mc(e, t, r), (e = e.sibling);
  }
  function Dc(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6)
      (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (n !== 4 && ((e = e.child), e !== null))
      for (Dc(e, t, r), e = e.sibling; e !== null; )
        Dc(e, t, r), (e = e.sibling);
  }
  var nt = null,
    Tr = !1;
  function bn(e, t, r) {
    for (r = r.child; r !== null; ) J5(e, t, r), (r = r.sibling);
  }
  function J5(e, t, r) {
    if (zr && typeof zr.onCommitFiberUnmount == "function")
      try {
        zr.onCommitFiberUnmount(c1, r);
      } catch {}
    switch (r.tag) {
      case 5:
        ht || fo(r, t);
      case 6:
        var n = nt,
          s = Tr;
        (nt = null),
          bn(e, t, r),
          (nt = n),
          (Tr = s),
          nt !== null &&
            (Tr
              ? ((e = nt),
                (r = r.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(r)
                  : e.removeChild(r))
              : nt.removeChild(r.stateNode));
        break;
      case 18:
        nt !== null &&
          (Tr
            ? ((e = nt),
              (r = r.stateNode),
              e.nodeType === 8
                ? mu(e.parentNode, r)
                : e.nodeType === 1 && mu(e, r),
              ra(e))
            : mu(nt, r.stateNode));
        break;
      case 4:
        (n = nt),
          (s = Tr),
          (nt = r.stateNode.containerInfo),
          (Tr = !0),
          bn(e, t, r),
          (nt = n),
          (Tr = s);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !ht &&
          ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
        ) {
          s = n = n.next;
          do {
            var o = s,
              i = o.destroy;
            (o = o.tag),
              i !== void 0 && (o & 2 || o & 4) && Fc(r, t, i),
              (s = s.next);
          } while (s !== n);
        }
        bn(e, t, r);
        break;
      case 1:
        if (
          !ht &&
          (fo(r, t),
          (n = r.stateNode),
          typeof n.componentWillUnmount == "function")
        )
          try {
            (n.props = r.memoizedProps),
              (n.state = r.memoizedState),
              n.componentWillUnmount();
          } catch (a) {
            $e(r, t, a);
          }
        bn(e, t, r);
        break;
      case 21:
        bn(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? ((ht = (n = ht) || r.memoizedState !== null), bn(e, t, r), (ht = n))
          : bn(e, t, r);
        break;
      default:
        bn(e, t, r);
    }
  }
  function If(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new X7()),
        t.forEach(function (n) {
          var s = lm.bind(null, e, n);
          r.has(n) || (r.add(n), n.then(s, s));
        });
    }
  }
  function yr(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var n = 0; n < r.length; n++) {
        var s = r[n];
        try {
          var o = e,
            i = t,
            a = i;
          e: for (; a !== null; ) {
            switch (a.tag) {
              case 5:
                (nt = a.stateNode), (Tr = !1);
                break e;
              case 3:
                (nt = a.stateNode.containerInfo), (Tr = !0);
                break e;
              case 4:
                (nt = a.stateNode.containerInfo), (Tr = !0);
                break e;
            }
            a = a.return;
          }
          if (nt === null) throw Error(F(160));
          J5(o, i, s), (nt = null), (Tr = !1);
          var l = s.alternate;
          l !== null && (l.return = null), (s.return = null);
        } catch (c) {
          $e(s, t, c);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) e6(t, e), (t = t.sibling);
  }
  function e6(e, t) {
    var r = e.alternate,
      n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((yr(t, e), jr(e), n & 4)) {
          try {
            Vi(3, e, e.return), y1(3, e);
          } catch (T) {
            $e(e, e.return, T);
          }
          try {
            Vi(5, e, e.return);
          } catch (T) {
            $e(e, e.return, T);
          }
        }
        break;
      case 1:
        yr(t, e), jr(e), n & 512 && r !== null && fo(r, r.return);
        break;
      case 5:
        if (
          (yr(t, e),
          jr(e),
          n & 512 && r !== null && fo(r, r.return),
          e.flags & 32)
        ) {
          var s = e.stateNode;
          try {
            Xi(s, "");
          } catch (T) {
            $e(e, e.return, T);
          }
        }
        if (n & 4 && ((s = e.stateNode), s != null)) {
          var o = e.memoizedProps,
            i = r !== null ? r.memoizedProps : o,
            a = e.type,
            l = e.updateQueue;
          if (((e.updateQueue = null), l !== null))
            try {
              a === "input" && o.type === "radio" && o.name != null && bp(s, o),
                lc(a, i);
              var c = lc(a, o);
              for (i = 0; i < l.length; i += 2) {
                var d = l[i],
                  p = l[i + 1];
                d === "style"
                  ? kp(s, p)
                  : d === "dangerouslySetInnerHTML"
                    ? _p(s, p)
                    : d === "children"
                      ? Xi(s, p)
                      : B2(s, d, p, c);
              }
              switch (a) {
                case "input":
                  nc(s, o);
                  break;
                case "textarea":
                  Tp(s, o);
                  break;
                case "select":
                  var f = s._wrapperState.wasMultiple;
                  s._wrapperState.wasMultiple = !!o.multiple;
                  var y = o.value;
                  y != null
                    ? Co(s, !!o.multiple, y, !1)
                    : f !== !!o.multiple &&
                      (o.defaultValue != null
                        ? Co(s, !!o.multiple, o.defaultValue, !0)
                        : Co(s, !!o.multiple, o.multiple ? [] : "", !1));
              }
              s[aa] = o;
            } catch (T) {
              $e(e, e.return, T);
            }
        }
        break;
      case 6:
        if ((yr(t, e), jr(e), n & 4)) {
          if (e.stateNode === null) throw Error(F(162));
          (s = e.stateNode), (o = e.memoizedProps);
          try {
            s.nodeValue = o;
          } catch (T) {
            $e(e, e.return, T);
          }
        }
        break;
      case 3:
        if (
          (yr(t, e), jr(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            ra(t.containerInfo);
          } catch (T) {
            $e(e, e.return, T);
          }
        break;
      case 4:
        yr(t, e), jr(e);
        break;
      case 13:
        yr(t, e),
          jr(e),
          (s = e.child),
          s.flags & 8192 &&
            ((o = s.memoizedState !== null),
            (s.stateNode.isHidden = o),
            !o ||
              (s.alternate !== null && s.alternate.memoizedState !== null) ||
              (x0 = He())),
          n & 4 && If(e);
        break;
      case 22:
        if (
          ((d = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((ht = (c = ht) || d), yr(t, e), (ht = c)) : yr(t, e),
          jr(e),
          n & 8192)
        ) {
          if (
            ((c = e.memoizedState !== null),
            (e.stateNode.isHidden = c) && !d && e.mode & 1)
          )
            for (V = e, d = e.child; d !== null; ) {
              for (p = V = d; V !== null; ) {
                switch (((f = V), (y = f.child), f.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Vi(4, f, f.return);
                    break;
                  case 1:
                    fo(f, f.return);
                    var b = f.stateNode;
                    if (typeof b.componentWillUnmount == "function") {
                      (n = f), (r = f.return);
                      try {
                        (t = n),
                          (b.props = t.memoizedProps),
                          (b.state = t.memoizedState),
                          b.componentWillUnmount();
                      } catch (T) {
                        $e(n, r, T);
                      }
                    }
                    break;
                  case 5:
                    fo(f, f.return);
                    break;
                  case 22:
                    if (f.memoizedState !== null) {
                      Df(p);
                      continue;
                    }
                }
                y !== null ? ((y.return = f), (V = y)) : Df(p);
              }
              d = d.sibling;
            }
          e: for (d = null, p = e; ; ) {
            if (p.tag === 5) {
              if (d === null) {
                d = p;
                try {
                  (s = p.stateNode),
                    c
                      ? ((o = s.style),
                        typeof o.setProperty == "function"
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none"))
                      : ((a = p.stateNode),
                        (l = p.memoizedProps.style),
                        (i =
                          l != null && l.hasOwnProperty("display")
                            ? l.display
                            : null),
                        (a.style.display = Sp("display", i)));
                } catch (T) {
                  $e(e, e.return, T);
                }
              }
            } else if (p.tag === 6) {
              if (d === null)
                try {
                  p.stateNode.nodeValue = c ? "" : p.memoizedProps;
                } catch (T) {
                  $e(e, e.return, T);
                }
            } else if (
              ((p.tag !== 22 && p.tag !== 23) ||
                p.memoizedState === null ||
                p === e) &&
              p.child !== null
            ) {
              (p.child.return = p), (p = p.child);
              continue;
            }
            if (p === e) break e;
            for (; p.sibling === null; ) {
              if (p.return === null || p.return === e) break e;
              d === p && (d = null), (p = p.return);
            }
            d === p && (d = null),
              (p.sibling.return = p.return),
              (p = p.sibling);
          }
        }
        break;
      case 19:
        yr(t, e), jr(e), n & 4 && If(e);
        break;
      case 21:
        break;
      default:
        yr(t, e), jr(e);
    }
  }
  function jr(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (X5(r)) {
              var n = r;
              break e;
            }
            r = r.return;
          }
          throw Error(F(160));
        }
        switch (n.tag) {
          case 5:
            var s = n.stateNode;
            n.flags & 32 && (Xi(s, ""), (n.flags &= -33));
            var o = Ff(e);
            Dc(e, o, s);
            break;
          case 3:
          case 4:
            var i = n.stateNode.containerInfo,
              a = Ff(e);
            Mc(e, a, i);
            break;
          default:
            throw Error(F(161));
        }
      } catch (l) {
        $e(e, e.return, l);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function em(e, t, r) {
    (V = e), t6(e);
  }
  function t6(e, t, r) {
    for (var n = (e.mode & 1) !== 0; V !== null; ) {
      var s = V,
        o = s.child;
      if (s.tag === 22 && n) {
        var i = s.memoizedState !== null || rl;
        if (!i) {
          var a = s.alternate,
            l = (a !== null && a.memoizedState !== null) || ht;
          a = rl;
          var c = ht;
          if (((rl = i), (ht = l) && !c))
            for (V = s; V !== null; )
              (i = V),
                (l = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? Gf(s)
                  : l !== null
                    ? ((l.return = i), (V = l))
                    : Gf(s);
          for (; o !== null; ) (V = o), t6(o), (o = o.sibling);
          (V = s), (rl = a), (ht = c);
        }
        Mf(e);
      } else
        s.subtreeFlags & 8772 && o !== null ? ((o.return = s), (V = o)) : Mf(e);
    }
  }
  function Mf(e) {
    for (; V !== null; ) {
      var t = V;
      if (t.flags & 8772) {
        var r = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                ht || y1(5, t);
                break;
              case 1:
                var n = t.stateNode;
                if (t.flags & 4 && !ht)
                  if (r === null) n.componentDidMount();
                  else {
                    var s =
                      t.elementType === t.type
                        ? r.memoizedProps
                        : Er(t.type, r.memoizedProps);
                    n.componentDidUpdate(
                      s,
                      r.memoizedState,
                      n.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var o = t.updateQueue;
                o !== null && Ef(t, o, n);
                break;
              case 3:
                var i = t.updateQueue;
                if (i !== null) {
                  if (((r = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        r = t.child.stateNode;
                        break;
                      case 1:
                        r = t.child.stateNode;
                    }
                  Ef(t, i, r);
                }
                break;
              case 5:
                var a = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = a;
                  var l = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      l.autoFocus && r.focus();
                      break;
                    case "img":
                      l.src && (r.src = l.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var c = t.alternate;
                  if (c !== null) {
                    var d = c.memoizedState;
                    if (d !== null) {
                      var p = d.dehydrated;
                      p !== null && ra(p);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(F(163));
            }
          ht || (t.flags & 512 && Ic(t));
        } catch (f) {
          $e(t, t.return, f);
        }
      }
      if (t === e) {
        V = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        (r.return = t.return), (V = r);
        break;
      }
      V = t.return;
    }
  }
  function Df(e) {
    for (; V !== null; ) {
      var t = V;
      if (t === e) {
        V = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        (r.return = t.return), (V = r);
        break;
      }
      V = t.return;
    }
  }
  function Gf(e) {
    for (; V !== null; ) {
      var t = V;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              y1(4, t);
            } catch (l) {
              $e(t, r, l);
            }
            break;
          case 1:
            var n = t.stateNode;
            if (typeof n.componentDidMount == "function") {
              var s = t.return;
              try {
                n.componentDidMount();
              } catch (l) {
                $e(t, s, l);
              }
            }
            var o = t.return;
            try {
              Ic(t);
            } catch (l) {
              $e(t, o, l);
            }
            break;
          case 5:
            var i = t.return;
            try {
              Ic(t);
            } catch (l) {
              $e(t, i, l);
            }
        }
      } catch (l) {
        $e(t, t.return, l);
      }
      if (t === e) {
        V = null;
        break;
      }
      var a = t.sibling;
      if (a !== null) {
        (a.return = t.return), (V = a);
        break;
      }
      V = t.return;
    }
  }
  var tm = Math.ceil,
    Yl = hn.ReactCurrentDispatcher,
    b0 = hn.ReactCurrentOwner,
    dr = hn.ReactCurrentBatchConfig,
    me = 0,
    Je = null,
    ze = null,
    lt = 0,
    Vt = 0,
    po = rs(0),
    qe = 0,
    pa = null,
    Fs = 0,
    C1 = 0,
    T0 = 0,
    zi = null,
    Rt = null,
    x0 = 0,
    qo = 1 / 0,
    tn = null,
    Xl = !1,
    Gc = null,
    Bn = null,
    nl = !1,
    Dn = null,
    Jl = 0,
    Bi = 0,
    Uc = null,
    Tl = -1,
    xl = 0;
  function bt() {
    return me & 6 ? He() : Tl !== -1 ? Tl : (Tl = He());
  }
  function Wn(e) {
    return e.mode & 1
      ? me & 2 && lt !== 0
        ? lt & -lt
        : D7.transition !== null
          ? (xl === 0 && (xl = Gp()), xl)
          : ((e = be),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : Wp(e.type))),
            e)
      : 1;
  }
  function kr(e, t, r, n) {
    if (50 < Bi) throw ((Bi = 0), (Uc = null), Error(F(185)));
    Oa(e, r, n),
      (!(me & 2) || e !== Je) &&
        (e === Je && (!(me & 2) && (C1 |= r), qe === 4 && Pn(e, lt)),
        Gt(e, n),
        r === 1 &&
          me === 0 &&
          !(t.mode & 1) &&
          ((qo = He() + 500), m1 && ns()));
  }
  function Gt(e, t) {
    var r = e.callbackNode;
    Dh(e, t);
    var n = Il(e, e === Je ? lt : 0);
    if (n === 0)
      r !== null && qd(r), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = n & -n), e.callbackPriority !== t)) {
      if ((r != null && qd(r), t === 1))
        e.tag === 0 ? M7(Uf.bind(null, e)) : d5(Uf.bind(null, e)),
          j7(function () {
            !(me & 6) && ns();
          }),
          (r = null);
      else {
        switch (Up(n)) {
          case 1:
            r = Q2;
            break;
          case 4:
            r = Mp;
            break;
          case 16:
            r = Fl;
            break;
          case 536870912:
            r = Dp;
            break;
          default:
            r = Fl;
        }
        r = u6(r, r6.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = r);
    }
  }
  function r6(e, t) {
    if (((Tl = -1), (xl = 0), me & 6)) throw Error(F(327));
    var r = e.callbackNode;
    if (xo() && e.callbackNode !== r) return null;
    var n = Il(e, e === Je ? lt : 0);
    if (n === 0) return null;
    if (n & 30 || n & e.expiredLanes || t) t = e1(e, n);
    else {
      t = n;
      var s = me;
      me |= 2;
      var o = s6();
      (Je !== e || lt !== t) && ((tn = null), (qo = He() + 500), _s(e, t));
      do
        try {
          sm();
          break;
        } catch (a) {
          n6(e, a);
        }
      while (!0);
      u0(),
        (Yl.current = o),
        (me = s),
        ze !== null ? (t = 0) : ((Je = null), (lt = 0), (t = qe));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((s = pc(e)), s !== 0 && ((n = s), (t = $c(e, s)))),
        t === 1)
      )
        throw ((r = pa), _s(e, 0), Pn(e, n), Gt(e, He()), r);
      if (t === 6) Pn(e, n);
      else {
        if (
          ((s = e.current.alternate),
          !(n & 30) &&
            !rm(s) &&
            ((t = e1(e, n)),
            t === 2 && ((o = pc(e)), o !== 0 && ((n = o), (t = $c(e, o)))),
            t === 1))
        )
          throw ((r = pa), _s(e, 0), Pn(e, n), Gt(e, He()), r);
        switch (((e.finishedWork = s), (e.finishedLanes = n), t)) {
          case 0:
          case 1:
            throw Error(F(345));
          case 2:
            cs(e, Rt, tn);
            break;
          case 3:
            if (
              (Pn(e, n),
              (n & 130023424) === n && ((t = x0 + 500 - He()), 10 < t))
            ) {
              if (Il(e, 0) !== 0) break;
              if (((s = e.suspendedLanes), (s & n) !== n)) {
                bt(), (e.pingedLanes |= e.suspendedLanes & s);
                break;
              }
              e.timeoutHandle = Ec(cs.bind(null, e, Rt, tn), t);
              break;
            }
            cs(e, Rt, tn);
            break;
          case 4:
            if ((Pn(e, n), (n & 4194240) === n)) break;
            for (t = e.eventTimes, s = -1; 0 < n; ) {
              var i = 31 - Sr(n);
              (o = 1 << i), (i = t[i]), i > s && (s = i), (n &= ~o);
            }
            if (
              ((n = s),
              (n = He() - n),
              (n =
                (120 > n
                  ? 120
                  : 480 > n
                    ? 480
                    : 1080 > n
                      ? 1080
                      : 1920 > n
                        ? 1920
                        : 3e3 > n
                          ? 3e3
                          : 4320 > n
                            ? 4320
                            : 1960 * tm(n / 1960)) - n),
              10 < n)
            ) {
              e.timeoutHandle = Ec(cs.bind(null, e, Rt, tn), n);
              break;
            }
            cs(e, Rt, tn);
            break;
          case 5:
            cs(e, Rt, tn);
            break;
          default:
            throw Error(F(329));
        }
      }
    }
    return Gt(e, He()), e.callbackNode === r ? r6.bind(null, e) : null;
  }
  function $c(e, t) {
    var r = zi;
    return (
      e.current.memoizedState.isDehydrated && (_s(e, t).flags |= 256),
      (e = e1(e, t)),
      e !== 2 && ((t = Rt), (Rt = r), t !== null && Hc(t)),
      e
    );
  }
  function Hc(e) {
    Rt === null ? (Rt = e) : Rt.push.apply(Rt, e);
  }
  function rm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var n = 0; n < r.length; n++) {
            var s = r[n],
              o = s.getSnapshot;
            s = s.value;
            try {
              if (!Or(o(), s)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
        (r.return = t), (t = r);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Pn(e, t) {
    for (
      t &= ~T0,
        t &= ~C1,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var r = 31 - Sr(t),
        n = 1 << r;
      (e[r] = -1), (t &= ~n);
    }
  }
  function Uf(e) {
    if (me & 6) throw Error(F(327));
    xo();
    var t = Il(e, 0);
    if (!(t & 1)) return Gt(e, He()), null;
    var r = e1(e, t);
    if (e.tag !== 0 && r === 2) {
      var n = pc(e);
      n !== 0 && ((t = n), (r = $c(e, n)));
    }
    if (r === 1) throw ((r = pa), _s(e, 0), Pn(e, t), Gt(e, He()), r);
    if (r === 6) throw Error(F(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      cs(e, Rt, tn),
      Gt(e, He()),
      null
    );
  }
  function _0(e, t) {
    var r = me;
    me |= 1;
    try {
      return e(t);
    } finally {
      (me = r), me === 0 && ((qo = He() + 500), m1 && ns());
    }
  }
  function Is(e) {
    Dn !== null && Dn.tag === 0 && !(me & 6) && xo();
    var t = me;
    me |= 1;
    var r = dr.transition,
      n = be;
    try {
      if (((dr.transition = null), (be = 1), e)) return e();
    } finally {
      (be = n), (dr.transition = r), (me = t), !(me & 6) && ns();
    }
  }
  function S0() {
    (Vt = po.current), Pe(po);
  }
  function _s(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), R7(r)), ze !== null))
      for (r = ze.return; r !== null; ) {
        var n = r;
        switch ((i0(n), n.tag)) {
          case 1:
            (n = n.type.childContextTypes), n != null && $l();
            break;
          case 3:
            Bo(), Pe(Mt), Pe(mt), m0();
            break;
          case 5:
            h0(n);
            break;
          case 4:
            Bo();
            break;
          case 13:
            Pe(Me);
            break;
          case 19:
            Pe(Me);
            break;
          case 10:
            c0(n.type._context);
            break;
          case 22:
          case 23:
            S0();
        }
        r = r.return;
      }
    if (
      ((Je = e),
      (ze = e = qn(e.current, null)),
      (lt = Vt = t),
      (qe = 0),
      (pa = null),
      (T0 = C1 = Fs = 0),
      (Rt = zi = null),
      ms !== null)
    ) {
      for (t = 0; t < ms.length; t++)
        if (((r = ms[t]), (n = r.interleaved), n !== null)) {
          r.interleaved = null;
          var s = n.next,
            o = r.pending;
          if (o !== null) {
            var i = o.next;
            (o.next = s), (n.next = i);
          }
          r.pending = n;
        }
      ms = null;
    }
    return e;
  }
  function n6(e, t) {
    do {
      var r = ze;
      try {
        if ((u0(), (wl.current = Ql), Kl)) {
          for (var n = De.memoizedState; n !== null; ) {
            var s = n.queue;
            s !== null && (s.pending = null), (n = n.next);
          }
          Kl = !1;
        }
        if (
          ((Ns = 0),
          (Xe = We = De = null),
          (Hi = !1),
          (ca = 0),
          (b0.current = null),
          r === null || r.return === null)
        ) {
          (qe = 1), (pa = t), (ze = null);
          break;
        }
        e: {
          var o = e,
            i = r.return,
            a = r,
            l = t;
          if (
            ((t = lt),
            (a.flags |= 32768),
            l !== null && typeof l == "object" && typeof l.then == "function")
          ) {
            var c = l,
              d = a,
              p = d.tag;
            if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
              var f = d.alternate;
              f
                ? ((d.updateQueue = f.updateQueue),
                  (d.memoizedState = f.memoizedState),
                  (d.lanes = f.lanes))
                : ((d.updateQueue = null), (d.memoizedState = null));
            }
            var y = kf(i);
            if (y !== null) {
              (y.flags &= -257),
                Of(y, i, a, o, t),
                y.mode & 1 && Sf(o, c, t),
                (t = y),
                (l = c);
              var b = t.updateQueue;
              if (b === null) {
                var T = new Set();
                T.add(l), (t.updateQueue = T);
              } else b.add(l);
              break e;
            } else {
              if (!(t & 1)) {
                Sf(o, c, t), k0();
                break e;
              }
              l = Error(F(426));
            }
          } else if (je && a.mode & 1) {
            var _ = kf(i);
            if (_ !== null) {
              !(_.flags & 65536) && (_.flags |= 256),
                Of(_, i, a, o, t),
                a0(Wo(l, a));
              break e;
            }
          }
          (o = l = Wo(l, a)),
            qe !== 4 && (qe = 2),
            zi === null ? (zi = [o]) : zi.push(o),
            (o = i);
          do {
            switch (o.tag) {
              case 3:
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var g = U5(o, l, t);
                wf(o, g);
                break e;
              case 1:
                a = l;
                var h = o.type,
                  v = o.stateNode;
                if (
                  !(o.flags & 128) &&
                  (typeof h.getDerivedStateFromError == "function" ||
                    (v !== null &&
                      typeof v.componentDidCatch == "function" &&
                      (Bn === null || !Bn.has(v))))
                ) {
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var E = $5(o, a, t);
                  wf(o, E);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        i6(r);
      } catch (P) {
        (t = P), ze === r && r !== null && (ze = r = r.return);
        continue;
      }
      break;
    } while (!0);
  }
  function s6() {
    var e = Yl.current;
    return (Yl.current = Ql), e === null ? Ql : e;
  }
  function k0() {
    (qe === 0 || qe === 3 || qe === 2) && (qe = 4),
      Je === null || (!(Fs & 268435455) && !(C1 & 268435455)) || Pn(Je, lt);
  }
  function e1(e, t) {
    var r = me;
    me |= 2;
    var n = s6();
    (Je !== e || lt !== t) && ((tn = null), _s(e, t));
    do
      try {
        nm();
        break;
      } catch (s) {
        n6(e, s);
      }
    while (!0);
    if ((u0(), (me = r), (Yl.current = n), ze !== null)) throw Error(F(261));
    return (Je = null), (lt = 0), qe;
  }
  function nm() {
    for (; ze !== null; ) o6(ze);
  }
  function sm() {
    for (; ze !== null && !Ah(); ) o6(ze);
  }
  function o6(e) {
    var t = l6(e.alternate, e, Vt);
    (e.memoizedProps = e.pendingProps),
      t === null ? i6(e) : (ze = t),
      (b0.current = null);
  }
  function i6(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((r = Y7(r, t)), r !== null)) {
          (r.flags &= 32767), (ze = r);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (qe = 6), (ze = null);
          return;
        }
      } else if (((r = Q7(r, t, Vt)), r !== null)) {
        ze = r;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        ze = t;
        return;
      }
      ze = t = e;
    } while (t !== null);
    qe === 0 && (qe = 5);
  }
  function cs(e, t, r) {
    var n = be,
      s = dr.transition;
    try {
      (dr.transition = null), (be = 1), om(e, t, r, n);
    } finally {
      (dr.transition = s), (be = n);
    }
    return null;
  }
  function om(e, t, r, n) {
    do xo();
    while (Dn !== null);
    if (me & 6) throw Error(F(327));
    r = e.finishedWork;
    var s = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
      throw Error(F(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = r.lanes | r.childLanes;
    if (
      (Gh(e, o),
      e === Je && ((ze = Je = null), (lt = 0)),
      (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
        nl ||
        ((nl = !0),
        u6(Fl, function () {
          return xo(), null;
        })),
      (o = (r.flags & 15990) !== 0),
      r.subtreeFlags & 15990 || o)
    ) {
      (o = dr.transition), (dr.transition = null);
      var i = be;
      be = 1;
      var a = me;
      (me |= 4),
        (b0.current = null),
        J7(e, r),
        e6(r, e),
        _7(Cc),
        (Ml = !!yc),
        (Cc = yc = null),
        (e.current = r),
        em(r),
        Ph(),
        (me = a),
        (be = i),
        (dr.transition = o);
    } else e.current = r;
    if (
      (nl && ((nl = !1), (Dn = e), (Jl = s)),
      (o = e.pendingLanes),
      o === 0 && (Bn = null),
      jh(r.stateNode),
      Gt(e, He()),
      t !== null)
    )
      for (n = e.onRecoverableError, r = 0; r < t.length; r++)
        (s = t[r]), n(s.value, { componentStack: s.stack, digest: s.digest });
    if (Xl) throw ((Xl = !1), (e = Gc), (Gc = null), e);
    return (
      Jl & 1 && e.tag !== 0 && xo(),
      (o = e.pendingLanes),
      o & 1 ? (e === Uc ? Bi++ : ((Bi = 0), (Uc = e))) : (Bi = 0),
      ns(),
      null
    );
  }
  function xo() {
    if (Dn !== null) {
      var e = Up(Jl),
        t = dr.transition,
        r = be;
      try {
        if (((dr.transition = null), (be = 16 > e ? 16 : e), Dn === null))
          var n = !1;
        else {
          if (((e = Dn), (Dn = null), (Jl = 0), me & 6)) throw Error(F(331));
          var s = me;
          for (me |= 4, V = e.current; V !== null; ) {
            var o = V,
              i = o.child;
            if (V.flags & 16) {
              var a = o.deletions;
              if (a !== null) {
                for (var l = 0; l < a.length; l++) {
                  var c = a[l];
                  for (V = c; V !== null; ) {
                    var d = V;
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Vi(8, d, o);
                    }
                    var p = d.child;
                    if (p !== null) (p.return = d), (V = p);
                    else
                      for (; V !== null; ) {
                        d = V;
                        var f = d.sibling,
                          y = d.return;
                        if ((Y5(d), d === c)) {
                          V = null;
                          break;
                        }
                        if (f !== null) {
                          (f.return = y), (V = f);
                          break;
                        }
                        V = y;
                      }
                  }
                }
                var b = o.alternate;
                if (b !== null) {
                  var T = b.child;
                  if (T !== null) {
                    b.child = null;
                    do {
                      var _ = T.sibling;
                      (T.sibling = null), (T = _);
                    } while (T !== null);
                  }
                }
                V = o;
              }
            }
            if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (V = i);
            else
              e: for (; V !== null; ) {
                if (((o = V), o.flags & 2048))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vi(9, o, o.return);
                  }
                var g = o.sibling;
                if (g !== null) {
                  (g.return = o.return), (V = g);
                  break e;
                }
                V = o.return;
              }
          }
          var h = e.current;
          for (V = h; V !== null; ) {
            i = V;
            var v = i.child;
            if (i.subtreeFlags & 2064 && v !== null) (v.return = i), (V = v);
            else
              e: for (i = h; V !== null; ) {
                if (((a = V), a.flags & 2048))
                  try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        y1(9, a);
                    }
                  } catch (P) {
                    $e(a, a.return, P);
                  }
                if (a === i) {
                  V = null;
                  break e;
                }
                var E = a.sibling;
                if (E !== null) {
                  (E.return = a.return), (V = E);
                  break e;
                }
                V = a.return;
              }
          }
          if (
            ((me = s),
            ns(),
            zr && typeof zr.onPostCommitFiberRoot == "function")
          )
            try {
              zr.onPostCommitFiberRoot(c1, e);
            } catch {}
          n = !0;
        }
        return n;
      } finally {
        (be = r), (dr.transition = t);
      }
    }
    return !1;
  }
  function $f(e, t, r) {
    (t = Wo(r, t)),
      (t = U5(e, t, 1)),
      (e = zn(e, t, 1)),
      (t = bt()),
      e !== null && (Oa(e, 1, t), Gt(e, t));
  }
  function $e(e, t, r) {
    if (e.tag === 3) $f(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          $f(t, e, r);
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof n.componentDidCatch == "function" &&
              (Bn === null || !Bn.has(n)))
          ) {
            (e = Wo(r, e)),
              (e = $5(t, e, 1)),
              (t = zn(t, e, 1)),
              (e = bt()),
              t !== null && (Oa(t, 1, e), Gt(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function im(e, t, r) {
    var n = e.pingCache;
    n !== null && n.delete(t),
      (t = bt()),
      (e.pingedLanes |= e.suspendedLanes & r),
      Je === e &&
        (lt & r) === r &&
        (qe === 4 || (qe === 3 && (lt & 130023424) === lt && 500 > He() - x0)
          ? _s(e, 0)
          : (T0 |= r)),
      Gt(e, t);
  }
  function a6(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = qa), (qa <<= 1), !(qa & 130023424) && (qa = 4194304))
        : (t = 1));
    var r = bt();
    (e = cn(e, t)), e !== null && (Oa(e, t, r), Gt(e, r));
  }
  function am(e) {
    var t = e.memoizedState,
      r = 0;
    t !== null && (r = t.retryLane), a6(e, r);
  }
  function lm(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var n = e.stateNode,
          s = e.memoizedState;
        s !== null && (r = s.retryLane);
        break;
      case 19:
        n = e.stateNode;
        break;
      default:
        throw Error(F(314));
    }
    n !== null && n.delete(t), a6(e, r);
  }
  var l6;
  l6 = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Mt.current) It = !0;
      else {
        if (!(e.lanes & r) && !(t.flags & 128)) return (It = !1), K7(e, t, r);
        It = !!(e.flags & 131072);
      }
    else (It = !1), je && t.flags & 1048576 && f5(t, zl, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var n = t.type;
        bl(e, t), (e = t.pendingProps);
        var s = Ho(t, mt.current);
        To(t, r), (s = v0(null, t, n, e, s, r));
        var o = y0();
        return (
          (t.flags |= 1),
          typeof s == "object" &&
          s !== null &&
          typeof s.render == "function" &&
          s.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Dt(n) ? ((o = !0), Hl(t)) : (o = !1),
              (t.memoizedState =
                s.state !== null && s.state !== void 0 ? s.state : null),
              f0(t),
              (s.updater = v1),
              (t.stateNode = s),
              (s._reactInternals = t),
              Oc(t, n, e, r),
              (t = Lc(null, t, n, !0, o, r)))
            : ((t.tag = 0), je && o && o0(t), Et(null, t, s, r), (t = t.child)),
          t
        );
      case 16:
        n = t.elementType;
        e: {
          switch (
            (bl(e, t),
            (e = t.pendingProps),
            (s = n._init),
            (n = s(n._payload)),
            (t.type = n),
            (s = t.tag = cm(n)),
            (e = Er(n, e)),
            s)
          ) {
            case 0:
              t = Pc(null, t, n, e, r);
              break e;
            case 1:
              t = Lf(null, t, n, e, r);
              break e;
            case 11:
              t = Af(null, t, n, e, r);
              break e;
            case 14:
              t = Pf(null, t, n, Er(n.type, e), r);
              break e;
          }
          throw Error(F(306, n, ""));
        }
        return t;
      case 0:
        return (
          (n = t.type),
          (s = t.pendingProps),
          (s = t.elementType === n ? s : Er(n, s)),
          Pc(e, t, n, s, r)
        );
      case 1:
        return (
          (n = t.type),
          (s = t.pendingProps),
          (s = t.elementType === n ? s : Er(n, s)),
          Lf(e, t, n, s, r)
        );
      case 3:
        e: {
          if ((B5(t), e === null)) throw Error(F(387));
          (n = t.pendingProps),
            (o = t.memoizedState),
            (s = o.element),
            y5(e, t),
            ql(t, n, null, r);
          var i = t.memoizedState;
          if (((n = i.element), o.isDehydrated))
            if (
              ((o = {
                element: n,
                isDehydrated: !1,
                cache: i.cache,
                pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                transitions: i.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              (s = Wo(Error(F(423)), t)), (t = Rf(e, t, n, r, s));
              break e;
            } else if (n !== s) {
              (s = Wo(Error(F(424)), t)), (t = Rf(e, t, n, r, s));
              break e;
            } else
              for (
                zt = Vn(t.stateNode.containerInfo.firstChild),
                  qt = t,
                  je = !0,
                  xr = null,
                  r = g5(t, null, n, r),
                  t.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
          else {
            if ((Vo(), n === s)) {
              t = dn(e, t, r);
              break e;
            }
            Et(e, t, n, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          C5(t),
          e === null && _c(t),
          (n = t.type),
          (s = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (i = s.children),
          wc(n, s) ? (i = null) : o !== null && wc(n, o) && (t.flags |= 32),
          z5(e, t),
          Et(e, t, i, r),
          t.child
        );
      case 6:
        return e === null && _c(t), null;
      case 13:
        return W5(e, t, r);
      case 4:
        return (
          p0(t, t.stateNode.containerInfo),
          (n = t.pendingProps),
          e === null ? (t.child = zo(t, null, n, r)) : Et(e, t, n, r),
          t.child
        );
      case 11:
        return (
          (n = t.type),
          (s = t.pendingProps),
          (s = t.elementType === n ? s : Er(n, s)),
          Af(e, t, n, s, r)
        );
      case 7:
        return Et(e, t, t.pendingProps, r), t.child;
      case 8:
        return Et(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return Et(e, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          if (
            ((n = t.type._context),
            (s = t.pendingProps),
            (o = t.memoizedProps),
            (i = s.value),
            Se(Bl, n._currentValue),
            (n._currentValue = i),
            o !== null)
          )
            if (Or(o.value, i)) {
              if (o.children === s.children && !Mt.current) {
                t = dn(e, t, r);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var a = o.dependencies;
                if (a !== null) {
                  i = o.child;
                  for (var l = a.firstContext; l !== null; ) {
                    if (l.context === n) {
                      if (o.tag === 1) {
                        (l = an(-1, r & -r)), (l.tag = 2);
                        var c = o.updateQueue;
                        if (c !== null) {
                          c = c.shared;
                          var d = c.pending;
                          d === null
                            ? (l.next = l)
                            : ((l.next = d.next), (d.next = l)),
                            (c.pending = l);
                        }
                      }
                      (o.lanes |= r),
                        (l = o.alternate),
                        l !== null && (l.lanes |= r),
                        Sc(o.return, r, t),
                        (a.lanes |= r);
                      break;
                    }
                    l = l.next;
                  }
                } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((i = o.return), i === null)) throw Error(F(341));
                  (i.lanes |= r),
                    (a = i.alternate),
                    a !== null && (a.lanes |= r),
                    Sc(i, r, t),
                    (i = o.sibling);
                } else i = o.child;
                if (i !== null) i.return = o;
                else
                  for (i = o; i !== null; ) {
                    if (i === t) {
                      i = null;
                      break;
                    }
                    if (((o = i.sibling), o !== null)) {
                      (o.return = i.return), (i = o);
                      break;
                    }
                    i = i.return;
                  }
                o = i;
              }
          Et(e, t, s.children, r), (t = t.child);
        }
        return t;
      case 9:
        return (
          (s = t.type),
          (n = t.pendingProps.children),
          To(t, r),
          (s = fr(s)),
          (n = n(s)),
          (t.flags |= 1),
          Et(e, t, n, r),
          t.child
        );
      case 14:
        return (
          (n = t.type),
          (s = Er(n, t.pendingProps)),
          (s = Er(n.type, s)),
          Pf(e, t, n, s, r)
        );
      case 15:
        return H5(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (n = t.type),
          (s = t.pendingProps),
          (s = t.elementType === n ? s : Er(n, s)),
          bl(e, t),
          (t.tag = 1),
          Dt(n) ? ((e = !0), Hl(t)) : (e = !1),
          To(t, r),
          G5(t, n, s),
          Oc(t, n, s, r),
          Lc(null, t, n, !0, e, r)
        );
      case 19:
        return q5(e, t, r);
      case 22:
        return V5(e, t, r);
    }
    throw Error(F(156, t.tag));
  };
  function u6(e, t) {
    return Ip(e, t);
  }
  function um(e, t, r, n) {
    (this.tag = e),
      (this.key = r),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = n),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function cr(e, t, r, n) {
    return new um(e, t, r, n);
  }
  function O0(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function cm(e) {
    if (typeof e == "function") return O0(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === q2)) return 11;
      if (e === Z2) return 14;
    }
    return 2;
  }
  function qn(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = cr(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 14680064),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      r
    );
  }
  function _l(e, t, r, n, s, o) {
    var i = 2;
    if (((n = e), typeof e == "function")) O0(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else
      e: switch (e) {
        case ro:
          return Ss(r.children, s, o, t);
        case W2:
          (i = 8), (s |= 8);
          break;
        case Xu:
          return (
            (e = cr(12, r, t, s | 2)), (e.elementType = Xu), (e.lanes = o), e
          );
        case Ju:
          return (e = cr(13, r, t, s)), (e.elementType = Ju), (e.lanes = o), e;
        case ec:
          return (e = cr(19, r, t, s)), (e.elementType = ec), (e.lanes = o), e;
        case Cp:
          return w1(r, s, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case vp:
                i = 10;
                break e;
              case yp:
                i = 9;
                break e;
              case q2:
                i = 11;
                break e;
              case Z2:
                i = 14;
                break e;
              case kn:
                (i = 16), (n = null);
                break e;
            }
          throw Error(F(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = cr(i, r, t, s)), (t.elementType = e), (t.type = n), (t.lanes = o), t
    );
  }
  function Ss(e, t, r, n) {
    return (e = cr(7, e, n, t)), (e.lanes = r), e;
  }
  function w1(e, t, r, n) {
    return (
      (e = cr(22, e, n, t)),
      (e.elementType = Cp),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Tu(e, t, r) {
    return (e = cr(6, e, null, t)), (e.lanes = r), e;
  }
  function xu(e, t, r) {
    return (
      (t = cr(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function dm(e, t, r, n, s) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = su(0)),
      (this.expirationTimes = su(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = su(0)),
      (this.identifierPrefix = n),
      (this.onRecoverableError = s),
      (this.mutableSourceEagerHydrationData = null);
  }
  function A0(e, t, r, n, s, o, i, a, l) {
    return (
      (e = new dm(e, t, r, a, l)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = cr(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: n,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      f0(o),
      e
    );
  }
  function fm(e, t, r) {
    var n =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: to,
      key: n == null ? null : "" + n,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function c6(e) {
    if (!e) return Qn;
    e = e._reactInternals;
    e: {
      if ($s(e) !== e || e.tag !== 1) throw Error(F(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Dt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(F(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (Dt(r)) return c5(e, r, t);
    }
    return t;
  }
  function d6(e, t, r, n, s, o, i, a, l) {
    return (
      (e = A0(r, n, !0, e, s, o, i, a, l)),
      (e.context = c6(null)),
      (r = e.current),
      (n = bt()),
      (s = Wn(r)),
      (o = an(n, s)),
      (o.callback = t ?? null),
      zn(r, o, s),
      (e.current.lanes = s),
      Oa(e, s, n),
      Gt(e, n),
      e
    );
  }
  function E1(e, t, r, n) {
    var s = t.current,
      o = bt(),
      i = Wn(s);
    return (
      (r = c6(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = an(o, i)),
      (t.payload = { element: e }),
      (n = n === void 0 ? null : n),
      n !== null && (t.callback = n),
      (e = zn(s, t, i)),
      e !== null && (kr(e, s, i, o), Cl(e, s, i)),
      i
    );
  }
  function t1(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Hf(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function P0(e, t) {
    Hf(e, t), (e = e.alternate) && Hf(e, t);
  }
  function pm() {
    return null;
  }
  var f6 =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function L0(e) {
    this._internalRoot = e;
  }
  b1.prototype.render = L0.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(F(409));
    E1(e, t, null, null);
  };
  b1.prototype.unmount = L0.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Is(function () {
        E1(null, e, null, null);
      }),
        (t[un] = null);
    }
  };
  function b1(e) {
    this._internalRoot = e;
  }
  b1.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Vp();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < An.length && t !== 0 && t < An[r].priority; r++);
      An.splice(r, 0, e), r === 0 && Bp(e);
    }
  };
  function R0(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function T1(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Vf() {}
  function hm(e, t, r, n, s) {
    if (s) {
      if (typeof n == "function") {
        var o = n;
        n = function () {
          var c = t1(i);
          o.call(c);
        };
      }
      var i = d6(t, n, e, 0, null, !1, !1, "", Vf);
      return (
        (e._reactRootContainer = i),
        (e[un] = i.current),
        oa(e.nodeType === 8 ? e.parentNode : e),
        Is(),
        i
      );
    }
    for (; (s = e.lastChild); ) e.removeChild(s);
    if (typeof n == "function") {
      var a = n;
      n = function () {
        var c = t1(l);
        a.call(c);
      };
    }
    var l = A0(e, 0, !1, null, null, !1, !1, "", Vf);
    return (
      (e._reactRootContainer = l),
      (e[un] = l.current),
      oa(e.nodeType === 8 ? e.parentNode : e),
      Is(function () {
        E1(t, l, r, n);
      }),
      l
    );
  }
  function x1(e, t, r, n, s) {
    var o = r._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof s == "function") {
        var a = s;
        s = function () {
          var l = t1(i);
          a.call(l);
        };
      }
      E1(t, i, e, s);
    } else i = hm(r, t, e, s, n);
    return t1(i);
  }
  $p = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = Li(t.pendingLanes);
          r !== 0 &&
            (Y2(t, r | 1), Gt(t, He()), !(me & 6) && ((qo = He() + 500), ns()));
        }
        break;
      case 13:
        Is(function () {
          var n = cn(e, 1);
          if (n !== null) {
            var s = bt();
            kr(n, e, 1, s);
          }
        }),
          P0(e, 1);
    }
  };
  X2 = function (e) {
    if (e.tag === 13) {
      var t = cn(e, 134217728);
      if (t !== null) {
        var r = bt();
        kr(t, e, 134217728, r);
      }
      P0(e, 134217728);
    }
  };
  Hp = function (e) {
    if (e.tag === 13) {
      var t = Wn(e),
        r = cn(e, t);
      if (r !== null) {
        var n = bt();
        kr(r, e, t, n);
      }
      P0(e, t);
    }
  };
  Vp = function () {
    return be;
  };
  zp = function (e, t) {
    var r = be;
    try {
      return (be = e), t();
    } finally {
      be = r;
    }
  };
  cc = function (e, t, r) {
    switch (t) {
      case "input":
        if ((nc(e, r), (t = r.name), r.type === "radio" && t != null)) {
          for (r = e; r.parentNode; ) r = r.parentNode;
          for (
            r = r.querySelectorAll(
              "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
            ),
              t = 0;
            t < r.length;
            t++
          ) {
            var n = r[t];
            if (n !== e && n.form === e.form) {
              var s = h1(n);
              if (!s) throw Error(F(90));
              Ep(n), nc(n, s);
            }
          }
        }
        break;
      case "textarea":
        Tp(e, r);
        break;
      case "select":
        (t = r.value), t != null && Co(e, !!r.multiple, t, !1);
    }
  };
  Pp = _0;
  Lp = Is;
  var mm = { usingClientEntryPoint: !1, Events: [Pa, io, h1, Op, Ap, _0] },
    fi = {
      findFiberByHostInstance: hs,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    gm = {
      bundleType: fi.bundleType,
      version: fi.version,
      rendererPackageName: fi.rendererPackageName,
      rendererConfig: fi.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: hn.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Np(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: fi.findFiberByHostInstance || pm,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var sl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!sl.isDisabled && sl.supportsFiber)
      try {
        (c1 = sl.inject(gm)), (zr = sl);
      } catch {}
  }
  Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mm;
  Xt.createPortal = function (e, t) {
    var r =
      2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!R0(t)) throw Error(F(200));
    return fm(e, t, null, r);
  };
  Xt.createRoot = function (e, t) {
    if (!R0(e)) throw Error(F(299));
    var r = !1,
      n = "",
      s = f6;
    return (
      t != null &&
        (t.unstable_strictMode === !0 && (r = !0),
        t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
      (t = A0(e, 1, !1, null, null, r, !1, n, s)),
      (e[un] = t.current),
      oa(e.nodeType === 8 ? e.parentNode : e),
      new L0(t)
    );
  };
  Xt.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(F(188))
        : ((e = Object.keys(e).join(",")), Error(F(268, e)));
    return (e = Np(t)), (e = e === null ? null : e.stateNode), e;
  };
  Xt.flushSync = function (e) {
    return Is(e);
  };
  Xt.hydrate = function (e, t, r) {
    if (!T1(t)) throw Error(F(200));
    return x1(null, e, t, !0, r);
  };
  Xt.hydrateRoot = function (e, t, r) {
    if (!R0(e)) throw Error(F(405));
    var n = (r != null && r.hydratedSources) || null,
      s = !1,
      o = "",
      i = f6;
    if (
      (r != null &&
        (r.unstable_strictMode === !0 && (s = !0),
        r.identifierPrefix !== void 0 && (o = r.identifierPrefix),
        r.onRecoverableError !== void 0 && (i = r.onRecoverableError)),
      (t = d6(t, null, e, 1, r ?? null, s, !1, o, i)),
      (e[un] = t.current),
      oa(e),
      n)
    )
      for (e = 0; e < n.length; e++)
        (r = n[e]),
          (s = r._getVersion),
          (s = s(r._source)),
          t.mutableSourceEagerHydrationData == null
            ? (t.mutableSourceEagerHydrationData = [r, s])
            : t.mutableSourceEagerHydrationData.push(r, s);
    return new b1(t);
  };
  Xt.render = function (e, t, r) {
    if (!T1(t)) throw Error(F(200));
    return x1(null, e, t, !1, r);
  };
  Xt.unmountComponentAtNode = function (e) {
    if (!T1(e)) throw Error(F(40));
    return e._reactRootContainer
      ? (Is(function () {
          x1(null, null, e, !1, function () {
            (e._reactRootContainer = null), (e[un] = null);
          });
        }),
        !0)
      : !1;
  };
  Xt.unstable_batchedUpdates = _0;
  Xt.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
    if (!T1(r)) throw Error(F(200));
    if (e == null || e._reactInternals === void 0) throw Error(F(38));
    return x1(e, t, r, !1, n);
  };
  Xt.version = "18.3.1-next-f1338f8080-20240426";
  function p6() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p6);
      } catch (e) {
        console.error(e);
      }
  }
  p6(), (pp.exports = Xt);
  var vm = pp.exports,
    zf = vm;
  (Qu.createRoot = zf.createRoot), (Qu.hydrateRoot = zf.hydrateRoot);
  var eo = ((e) => (
    (e.GLOBAL = "GLOBAL"),
    (e.ABOUT = "ABOUT"),
    (e.PROJECTS = "PROJECTS"),
    (e.SKILLS = "SKILLS"),
    (e.CONTACT = "CONTACT"),
    (e.EXPERIENCE = "EXPERIENCE"),
    e
  ))(eo || {});
  const Hs = new Map();
  Hs.set("ABOUT", {
    view: "ABOUT",
    horizontalTranslation: "-100vw",
    verticalTranslation: "-100vh",
  });
  Hs.set("SKILLS", {
    view: "SKILLS",
    horizontalTranslation: "0vw",
    verticalTranslation: "0vh",
  });
  Hs.set("PROJECTS", {
    view: "PROJECTS",
    horizontalTranslation: "-200vw",
    verticalTranslation: "0vh",
  });
  Hs.set("EXPERIENCE", {
    view: "EXPERIENCE",
    horizontalTranslation: "0vw",
    verticalTranslation: "-200vh",
  });
  Hs.set("CONTACT", {
    view: "CONTACT",
    horizontalTranslation: "-200vw",
    verticalTranslation: "-200vh",
  });
  const Sl = {
      currentView: Hs.get("ABOUT"),
      setCurrentView() {},
      isGlobalView: !1,
      setIsGlobalView() {},
      isMoving: !1,
      setIsMoving() {},
    },
    Ra = N.createContext(Sl);
  function ym({ children: e }) {
    const [t, r] = N.useState(Sl.currentView),
      [n, s] = N.useState(Sl.isMoving),
      [o, i] = N.useState(Sl.isGlobalView),
      a = (l) => {
        r(Hs.get(l));
      };
    return u.jsx(Ra.Provider, {
      value: {
        currentView: t,
        setCurrentView: a,
        isGlobalView: o,
        setIsGlobalView: i,
        isMoving: n,
        setIsMoving: s,
      },
      children: e,
    });
  }
  function h6(e) {
    var t,
      r,
      n = "";
    if (typeof e == "string" || typeof e == "number") n += e;
    else if (typeof e == "object")
      if (Array.isArray(e)) {
        var s = e.length;
        for (t = 0; t < s; t++)
          e[t] && (r = h6(e[t])) && (n && (n += " "), (n += r));
      } else for (r in e) e[r] && (n && (n += " "), (n += r));
    return n;
  }
  function Cm() {
    for (var e, t, r = 0, n = "", s = arguments.length; r < s; r++)
      (e = arguments[r]) && (t = h6(e)) && (n && (n += " "), (n += t));
    return n;
  }
  const j0 = "-",
    wm = (e) => {
      const t = bm(e),
        { conflictingClassGroups: r, conflictingClassGroupModifiers: n } = e;
      return {
        getClassGroupId: (i) => {
          const a = i.split(j0);
          return a[0] === "" && a.length !== 1 && a.shift(), m6(a, t) || Em(i);
        },
        getConflictingClassGroupIds: (i, a) => {
          const l = r[i] || [];
          return a && n[i] ? [...l, ...n[i]] : l;
        },
      };
    },
    m6 = (e, t) => {
      var i;
      if (e.length === 0) return t.classGroupId;
      const r = e[0],
        n = t.nextPart.get(r),
        s = n ? m6(e.slice(1), n) : void 0;
      if (s) return s;
      if (t.validators.length === 0) return;
      const o = e.join(j0);
      return (i = t.validators.find(({ validator: a }) => a(o))) == null
        ? void 0
        : i.classGroupId;
    },
    Bf = /^\[(.+)\]$/,
    Em = (e) => {
      if (Bf.test(e)) {
        const t = Bf.exec(e)[1],
          r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (r) return "arbitrary.." + r;
      }
    },
    bm = (e) => {
      const { theme: t, prefix: r } = e,
        n = { nextPart: new Map(), validators: [] };
      return (
        xm(Object.entries(e.classGroups), r).forEach(([o, i]) => {
          Vc(i, n, o, t);
        }),
        n
      );
    },
    Vc = (e, t, r, n) => {
      e.forEach((s) => {
        if (typeof s == "string") {
          const o = s === "" ? t : Wf(t, s);
          o.classGroupId = r;
          return;
        }
        if (typeof s == "function") {
          if (Tm(s)) {
            Vc(s(n), t, r, n);
            return;
          }
          t.validators.push({ validator: s, classGroupId: r });
          return;
        }
        Object.entries(s).forEach(([o, i]) => {
          Vc(i, Wf(t, o), r, n);
        });
      });
    },
    Wf = (e, t) => {
      let r = e;
      return (
        t.split(j0).forEach((n) => {
          r.nextPart.has(n) ||
            r.nextPart.set(n, { nextPart: new Map(), validators: [] }),
            (r = r.nextPart.get(n));
        }),
        r
      );
    },
    Tm = (e) => e.isThemeGetter,
    xm = (e, t) =>
      t
        ? e.map(([r, n]) => {
            const s = n.map((o) =>
              typeof o == "string"
                ? t + o
                : typeof o == "object"
                  ? Object.fromEntries(
                      Object.entries(o).map(([i, a]) => [t + i, a]),
                    )
                  : o,
            );
            return [r, s];
          })
        : e,
    _m = (e) => {
      if (e < 1) return { get: () => {}, set: () => {} };
      let t = 0,
        r = new Map(),
        n = new Map();
      const s = (o, i) => {
        r.set(o, i), t++, t > e && ((t = 0), (n = r), (r = new Map()));
      };
      return {
        get(o) {
          let i = r.get(o);
          if (i !== void 0) return i;
          if ((i = n.get(o)) !== void 0) return s(o, i), i;
        },
        set(o, i) {
          r.has(o) ? r.set(o, i) : s(o, i);
        },
      };
    },
    g6 = "!",
    Sm = (e) => {
      const { separator: t, experimentalParseClassName: r } = e,
        n = t.length === 1,
        s = t[0],
        o = t.length,
        i = (a) => {
          const l = [];
          let c = 0,
            d = 0,
            p;
          for (let _ = 0; _ < a.length; _++) {
            let g = a[_];
            if (c === 0) {
              if (g === s && (n || a.slice(_, _ + o) === t)) {
                l.push(a.slice(d, _)), (d = _ + o);
                continue;
              }
              if (g === "/") {
                p = _;
                continue;
              }
            }
            g === "[" ? c++ : g === "]" && c--;
          }
          const f = l.length === 0 ? a : a.substring(d),
            y = f.startsWith(g6),
            b = y ? f.substring(1) : f,
            T = p && p > d ? p - d : void 0;
          return {
            modifiers: l,
            hasImportantModifier: y,
            baseClassName: b,
            maybePostfixModifierPosition: T,
          };
        };
      return r ? (a) => r({ className: a, parseClassName: i }) : i;
    },
    km = (e) => {
      if (e.length <= 1) return e;
      const t = [];
      let r = [];
      return (
        e.forEach((n) => {
          n[0] === "[" ? (t.push(...r.sort(), n), (r = [])) : r.push(n);
        }),
        t.push(...r.sort()),
        t
      );
    },
    Om = (e) => ({ cache: _m(e.cacheSize), parseClassName: Sm(e), ...wm(e) }),
    Am = /\s+/,
    Pm = (e, t) => {
      const {
          parseClassName: r,
          getClassGroupId: n,
          getConflictingClassGroupIds: s,
        } = t,
        o = [],
        i = e.trim().split(Am);
      let a = "";
      for (let l = i.length - 1; l >= 0; l -= 1) {
        const c = i[l],
          {
            modifiers: d,
            hasImportantModifier: p,
            baseClassName: f,
            maybePostfixModifierPosition: y,
          } = r(c);
        let b = !!y,
          T = n(b ? f.substring(0, y) : f);
        if (!T) {
          if (!b) {
            a = c + (a.length > 0 ? " " + a : a);
            continue;
          }
          if (((T = n(f)), !T)) {
            a = c + (a.length > 0 ? " " + a : a);
            continue;
          }
          b = !1;
        }
        const _ = km(d).join(":"),
          g = p ? _ + g6 : _,
          h = g + T;
        if (o.includes(h)) continue;
        o.push(h);
        const v = s(T, b);
        for (let E = 0; E < v.length; ++E) {
          const P = v[E];
          o.push(g + P);
        }
        a = c + (a.length > 0 ? " " + a : a);
      }
      return a;
    };
  function Lm() {
    let e = 0,
      t,
      r,
      n = "";
    for (; e < arguments.length; )
      (t = arguments[e++]) && (r = v6(t)) && (n && (n += " "), (n += r));
    return n;
  }
  const v6 = (e) => {
    if (typeof e == "string") return e;
    let t,
      r = "";
    for (let n = 0; n < e.length; n++)
      e[n] && (t = v6(e[n])) && (r && (r += " "), (r += t));
    return r;
  };
  function Rm(e, ...t) {
    let r,
      n,
      s,
      o = i;
    function i(l) {
      const c = t.reduce((d, p) => p(d), e());
      return (r = Om(c)), (n = r.cache.get), (s = r.cache.set), (o = a), a(l);
    }
    function a(l) {
      const c = n(l);
      if (c) return c;
      const d = Pm(l, r);
      return s(l, d), d;
    }
    return function () {
      return o(Lm.apply(null, arguments));
    };
  }
  const ke = (e) => {
      const t = (r) => r[e] || [];
      return (t.isThemeGetter = !0), t;
    },
    y6 = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    jm = /^\d+\/\d+$/,
    Nm = new Set(["px", "full", "screen"]),
    Fm = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    Im =
      /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    Mm = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    Dm = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    Gm =
      /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    Xr = (e) => _o(e) || Nm.has(e) || jm.test(e),
    Tn = (e) => ti(e, "length", qm),
    _o = (e) => !!e && !Number.isNaN(Number(e)),
    _u = (e) => ti(e, "number", _o),
    pi = (e) => !!e && Number.isInteger(Number(e)),
    Um = (e) => e.endsWith("%") && _o(e.slice(0, -1)),
    ie = (e) => y6.test(e),
    xn = (e) => Fm.test(e),
    $m = new Set(["length", "size", "percentage"]),
    Hm = (e) => ti(e, $m, C6),
    Vm = (e) => ti(e, "position", C6),
    zm = new Set(["image", "url"]),
    Bm = (e) => ti(e, zm, Km),
    Wm = (e) => ti(e, "", Zm),
    hi = () => !0,
    ti = (e, t, r) => {
      const n = y6.exec(e);
      return n
        ? n[1]
          ? typeof t == "string"
            ? n[1] === t
            : t.has(n[1])
          : r(n[2])
        : !1;
    },
    qm = (e) => Im.test(e) && !Mm.test(e),
    C6 = () => !1,
    Zm = (e) => Dm.test(e),
    Km = (e) => Gm.test(e),
    Qm = () => {
      const e = ke("colors"),
        t = ke("spacing"),
        r = ke("blur"),
        n = ke("brightness"),
        s = ke("borderColor"),
        o = ke("borderRadius"),
        i = ke("borderSpacing"),
        a = ke("borderWidth"),
        l = ke("contrast"),
        c = ke("grayscale"),
        d = ke("hueRotate"),
        p = ke("invert"),
        f = ke("gap"),
        y = ke("gradientColorStops"),
        b = ke("gradientColorStopPositions"),
        T = ke("inset"),
        _ = ke("margin"),
        g = ke("opacity"),
        h = ke("padding"),
        v = ke("saturate"),
        E = ke("scale"),
        P = ke("sepia"),
        L = ke("skew"),
        A = ke("space"),
        j = ke("translate"),
        Z = () => ["auto", "contain", "none"],
        K = () => ["auto", "hidden", "clip", "visible", "scroll"],
        X = () => ["auto", ie, t],
        ne = () => [ie, t],
        Ce = () => ["", Xr, Tn],
        Fe = () => ["auto", _o, ie],
        rr = () => [
          "bottom",
          "center",
          "left",
          "left-bottom",
          "left-top",
          "right",
          "right-bottom",
          "right-top",
          "top",
        ],
        St = () => ["solid", "dashed", "dotted", "double", "none"],
        Ut = () => [
          "normal",
          "multiply",
          "screen",
          "overlay",
          "darken",
          "lighten",
          "color-dodge",
          "color-burn",
          "hard-light",
          "soft-light",
          "difference",
          "exclusion",
          "hue",
          "saturation",
          "color",
          "luminosity",
        ],
        D = () => [
          "start",
          "end",
          "center",
          "between",
          "around",
          "evenly",
          "stretch",
        ],
        te = () => ["", "0", ie],
        re = () => [
          "auto",
          "avoid",
          "all",
          "avoid-page",
          "page",
          "left",
          "right",
          "column",
        ],
        Y = () => [_o, ie];
      return {
        cacheSize: 500,
        separator: ":",
        theme: {
          colors: [hi],
          spacing: [Xr, Tn],
          blur: ["none", "", xn, ie],
          brightness: Y(),
          borderColor: [e],
          borderRadius: ["none", "", "full", xn, ie],
          borderSpacing: ne(),
          borderWidth: Ce(),
          contrast: Y(),
          grayscale: te(),
          hueRotate: Y(),
          invert: te(),
          gap: ne(),
          gradientColorStops: [e],
          gradientColorStopPositions: [Um, Tn],
          inset: X(),
          margin: X(),
          opacity: Y(),
          padding: ne(),
          saturate: Y(),
          scale: Y(),
          sepia: te(),
          skew: Y(),
          space: ne(),
          translate: ne(),
        },
        classGroups: {
          aspect: [{ aspect: ["auto", "square", "video", ie] }],
          container: ["container"],
          columns: [{ columns: [xn] }],
          "break-after": [{ "break-after": re() }],
          "break-before": [{ "break-before": re() }],
          "break-inside": [
            { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
          ],
          "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
          box: [{ box: ["border", "content"] }],
          display: [
            "block",
            "inline-block",
            "inline",
            "flex",
            "inline-flex",
            "table",
            "inline-table",
            "table-caption",
            "table-cell",
            "table-column",
            "table-column-group",
            "table-footer-group",
            "table-header-group",
            "table-row-group",
            "table-row",
            "flow-root",
            "grid",
            "inline-grid",
            "contents",
            "list-item",
            "hidden",
          ],
          float: [{ float: ["right", "left", "none", "start", "end"] }],
          clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
          isolation: ["isolate", "isolation-auto"],
          "object-fit": [
            { object: ["contain", "cover", "fill", "none", "scale-down"] },
          ],
          "object-position": [{ object: [...rr(), ie] }],
          overflow: [{ overflow: K() }],
          "overflow-x": [{ "overflow-x": K() }],
          "overflow-y": [{ "overflow-y": K() }],
          overscroll: [{ overscroll: Z() }],
          "overscroll-x": [{ "overscroll-x": Z() }],
          "overscroll-y": [{ "overscroll-y": Z() }],
          position: ["static", "fixed", "absolute", "relative", "sticky"],
          inset: [{ inset: [T] }],
          "inset-x": [{ "inset-x": [T] }],
          "inset-y": [{ "inset-y": [T] }],
          start: [{ start: [T] }],
          end: [{ end: [T] }],
          top: [{ top: [T] }],
          right: [{ right: [T] }],
          bottom: [{ bottom: [T] }],
          left: [{ left: [T] }],
          visibility: ["visible", "invisible", "collapse"],
          z: [{ z: ["auto", pi, ie] }],
          basis: [{ basis: X() }],
          "flex-direction": [
            { flex: ["row", "row-reverse", "col", "col-reverse"] },
          ],
          "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
          flex: [{ flex: ["1", "auto", "initial", "none", ie] }],
          grow: [{ grow: te() }],
          shrink: [{ shrink: te() }],
          order: [{ order: ["first", "last", "none", pi, ie] }],
          "grid-cols": [{ "grid-cols": [hi] }],
          "col-start-end": [{ col: ["auto", { span: ["full", pi, ie] }, ie] }],
          "col-start": [{ "col-start": Fe() }],
          "col-end": [{ "col-end": Fe() }],
          "grid-rows": [{ "grid-rows": [hi] }],
          "row-start-end": [{ row: ["auto", { span: [pi, ie] }, ie] }],
          "row-start": [{ "row-start": Fe() }],
          "row-end": [{ "row-end": Fe() }],
          "grid-flow": [
            { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
          ],
          "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", ie] }],
          "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", ie] }],
          gap: [{ gap: [f] }],
          "gap-x": [{ "gap-x": [f] }],
          "gap-y": [{ "gap-y": [f] }],
          "justify-content": [{ justify: ["normal", ...D()] }],
          "justify-items": [
            { "justify-items": ["start", "end", "center", "stretch"] },
          ],
          "justify-self": [
            { "justify-self": ["auto", "start", "end", "center", "stretch"] },
          ],
          "align-content": [{ content: ["normal", ...D(), "baseline"] }],
          "align-items": [
            { items: ["start", "end", "center", "baseline", "stretch"] },
          ],
          "align-self": [
            { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
          ],
          "place-content": [{ "place-content": [...D(), "baseline"] }],
          "place-items": [
            {
              "place-items": ["start", "end", "center", "baseline", "stretch"],
            },
          ],
          "place-self": [
            { "place-self": ["auto", "start", "end", "center", "stretch"] },
          ],
          p: [{ p: [h] }],
          px: [{ px: [h] }],
          py: [{ py: [h] }],
          ps: [{ ps: [h] }],
          pe: [{ pe: [h] }],
          pt: [{ pt: [h] }],
          pr: [{ pr: [h] }],
          pb: [{ pb: [h] }],
          pl: [{ pl: [h] }],
          m: [{ m: [_] }],
          mx: [{ mx: [_] }],
          my: [{ my: [_] }],
          ms: [{ ms: [_] }],
          me: [{ me: [_] }],
          mt: [{ mt: [_] }],
          mr: [{ mr: [_] }],
          mb: [{ mb: [_] }],
          ml: [{ ml: [_] }],
          "space-x": [{ "space-x": [A] }],
          "space-x-reverse": ["space-x-reverse"],
          "space-y": [{ "space-y": [A] }],
          "space-y-reverse": ["space-y-reverse"],
          w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ie, t] }],
          "min-w": [{ "min-w": [ie, t, "min", "max", "fit"] }],
          "max-w": [
            {
              "max-w": [
                ie,
                t,
                "none",
                "full",
                "min",
                "max",
                "fit",
                "prose",
                { screen: [xn] },
                xn,
              ],
            },
          ],
          h: [{ h: [ie, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
          "min-h": [
            { "min-h": [ie, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
          ],
          "max-h": [
            { "max-h": [ie, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
          ],
          size: [{ size: [ie, t, "auto", "min", "max", "fit"] }],
          "font-size": [{ text: ["base", xn, Tn] }],
          "font-smoothing": ["antialiased", "subpixel-antialiased"],
          "font-style": ["italic", "not-italic"],
          "font-weight": [
            {
              font: [
                "thin",
                "extralight",
                "light",
                "normal",
                "medium",
                "semibold",
                "bold",
                "extrabold",
                "black",
                _u,
              ],
            },
          ],
          "font-family": [{ font: [hi] }],
          "fvn-normal": ["normal-nums"],
          "fvn-ordinal": ["ordinal"],
          "fvn-slashed-zero": ["slashed-zero"],
          "fvn-figure": ["lining-nums", "oldstyle-nums"],
          "fvn-spacing": ["proportional-nums", "tabular-nums"],
          "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
          tracking: [
            {
              tracking: [
                "tighter",
                "tight",
                "normal",
                "wide",
                "wider",
                "widest",
                ie,
              ],
            },
          ],
          "line-clamp": [{ "line-clamp": ["none", _o, _u] }],
          leading: [
            {
              leading: [
                "none",
                "tight",
                "snug",
                "normal",
                "relaxed",
                "loose",
                Xr,
                ie,
              ],
            },
          ],
          "list-image": [{ "list-image": ["none", ie] }],
          "list-style-type": [{ list: ["none", "disc", "decimal", ie] }],
          "list-style-position": [{ list: ["inside", "outside"] }],
          "placeholder-color": [{ placeholder: [e] }],
          "placeholder-opacity": [{ "placeholder-opacity": [g] }],
          "text-alignment": [
            { text: ["left", "center", "right", "justify", "start", "end"] },
          ],
          "text-color": [{ text: [e] }],
          "text-opacity": [{ "text-opacity": [g] }],
          "text-decoration": [
            "underline",
            "overline",
            "line-through",
            "no-underline",
          ],
          "text-decoration-style": [{ decoration: [...St(), "wavy"] }],
          "text-decoration-thickness": [
            { decoration: ["auto", "from-font", Xr, Tn] },
          ],
          "underline-offset": [{ "underline-offset": ["auto", Xr, ie] }],
          "text-decoration-color": [{ decoration: [e] }],
          "text-transform": [
            "uppercase",
            "lowercase",
            "capitalize",
            "normal-case",
          ],
          "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
          "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
          indent: [{ indent: ne() }],
          "vertical-align": [
            {
              align: [
                "baseline",
                "top",
                "middle",
                "bottom",
                "text-top",
                "text-bottom",
                "sub",
                "super",
                ie,
              ],
            },
          ],
          whitespace: [
            {
              whitespace: [
                "normal",
                "nowrap",
                "pre",
                "pre-line",
                "pre-wrap",
                "break-spaces",
              ],
            },
          ],
          break: [{ break: ["normal", "words", "all", "keep"] }],
          hyphens: [{ hyphens: ["none", "manual", "auto"] }],
          content: [{ content: ["none", ie] }],
          "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
          "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
          "bg-opacity": [{ "bg-opacity": [g] }],
          "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
          "bg-position": [{ bg: [...rr(), Vm] }],
          "bg-repeat": [
            { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
          ],
          "bg-size": [{ bg: ["auto", "cover", "contain", Hm] }],
          "bg-image": [
            {
              bg: [
                "none",
                { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                Bm,
              ],
            },
          ],
          "bg-color": [{ bg: [e] }],
          "gradient-from-pos": [{ from: [b] }],
          "gradient-via-pos": [{ via: [b] }],
          "gradient-to-pos": [{ to: [b] }],
          "gradient-from": [{ from: [y] }],
          "gradient-via": [{ via: [y] }],
          "gradient-to": [{ to: [y] }],
          rounded: [{ rounded: [o] }],
          "rounded-s": [{ "rounded-s": [o] }],
          "rounded-e": [{ "rounded-e": [o] }],
          "rounded-t": [{ "rounded-t": [o] }],
          "rounded-r": [{ "rounded-r": [o] }],
          "rounded-b": [{ "rounded-b": [o] }],
          "rounded-l": [{ "rounded-l": [o] }],
          "rounded-ss": [{ "rounded-ss": [o] }],
          "rounded-se": [{ "rounded-se": [o] }],
          "rounded-ee": [{ "rounded-ee": [o] }],
          "rounded-es": [{ "rounded-es": [o] }],
          "rounded-tl": [{ "rounded-tl": [o] }],
          "rounded-tr": [{ "rounded-tr": [o] }],
          "rounded-br": [{ "rounded-br": [o] }],
          "rounded-bl": [{ "rounded-bl": [o] }],
          "border-w": [{ border: [a] }],
          "border-w-x": [{ "border-x": [a] }],
          "border-w-y": [{ "border-y": [a] }],
          "border-w-s": [{ "border-s": [a] }],
          "border-w-e": [{ "border-e": [a] }],
          "border-w-t": [{ "border-t": [a] }],
          "border-w-r": [{ "border-r": [a] }],
          "border-w-b": [{ "border-b": [a] }],
          "border-w-l": [{ "border-l": [a] }],
          "border-opacity": [{ "border-opacity": [g] }],
          "border-style": [{ border: [...St(), "hidden"] }],
          "divide-x": [{ "divide-x": [a] }],
          "divide-x-reverse": ["divide-x-reverse"],
          "divide-y": [{ "divide-y": [a] }],
          "divide-y-reverse": ["divide-y-reverse"],
          "divide-opacity": [{ "divide-opacity": [g] }],
          "divide-style": [{ divide: St() }],
          "border-color": [{ border: [s] }],
          "border-color-x": [{ "border-x": [s] }],
          "border-color-y": [{ "border-y": [s] }],
          "border-color-t": [{ "border-t": [s] }],
          "border-color-r": [{ "border-r": [s] }],
          "border-color-b": [{ "border-b": [s] }],
          "border-color-l": [{ "border-l": [s] }],
          "divide-color": [{ divide: [s] }],
          "outline-style": [{ outline: ["", ...St()] }],
          "outline-offset": [{ "outline-offset": [Xr, ie] }],
          "outline-w": [{ outline: [Xr, Tn] }],
          "outline-color": [{ outline: [e] }],
          "ring-w": [{ ring: Ce() }],
          "ring-w-inset": ["ring-inset"],
          "ring-color": [{ ring: [e] }],
          "ring-opacity": [{ "ring-opacity": [g] }],
          "ring-offset-w": [{ "ring-offset": [Xr, Tn] }],
          "ring-offset-color": [{ "ring-offset": [e] }],
          shadow: [{ shadow: ["", "inner", "none", xn, Wm] }],
          "shadow-color": [{ shadow: [hi] }],
          opacity: [{ opacity: [g] }],
          "mix-blend": [
            { "mix-blend": [...Ut(), "plus-lighter", "plus-darker"] },
          ],
          "bg-blend": [{ "bg-blend": Ut() }],
          filter: [{ filter: ["", "none"] }],
          blur: [{ blur: [r] }],
          brightness: [{ brightness: [n] }],
          contrast: [{ contrast: [l] }],
          "drop-shadow": [{ "drop-shadow": ["", "none", xn, ie] }],
          grayscale: [{ grayscale: [c] }],
          "hue-rotate": [{ "hue-rotate": [d] }],
          invert: [{ invert: [p] }],
          saturate: [{ saturate: [v] }],
          sepia: [{ sepia: [P] }],
          "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
          "backdrop-blur": [{ "backdrop-blur": [r] }],
          "backdrop-brightness": [{ "backdrop-brightness": [n] }],
          "backdrop-contrast": [{ "backdrop-contrast": [l] }],
          "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
          "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
          "backdrop-invert": [{ "backdrop-invert": [p] }],
          "backdrop-opacity": [{ "backdrop-opacity": [g] }],
          "backdrop-saturate": [{ "backdrop-saturate": [v] }],
          "backdrop-sepia": [{ "backdrop-sepia": [P] }],
          "border-collapse": [{ border: ["collapse", "separate"] }],
          "border-spacing": [{ "border-spacing": [i] }],
          "border-spacing-x": [{ "border-spacing-x": [i] }],
          "border-spacing-y": [{ "border-spacing-y": [i] }],
          "table-layout": [{ table: ["auto", "fixed"] }],
          caption: [{ caption: ["top", "bottom"] }],
          transition: [
            {
              transition: [
                "none",
                "all",
                "",
                "colors",
                "opacity",
                "shadow",
                "transform",
                ie,
              ],
            },
          ],
          duration: [{ duration: Y() }],
          ease: [{ ease: ["linear", "in", "out", "in-out", ie] }],
          delay: [{ delay: Y() }],
          animate: [
            { animate: ["none", "spin", "ping", "pulse", "bounce", ie] },
          ],
          transform: [{ transform: ["", "gpu", "none"] }],
          scale: [{ scale: [E] }],
          "scale-x": [{ "scale-x": [E] }],
          "scale-y": [{ "scale-y": [E] }],
          rotate: [{ rotate: [pi, ie] }],
          "translate-x": [{ "translate-x": [j] }],
          "translate-y": [{ "translate-y": [j] }],
          "skew-x": [{ "skew-x": [L] }],
          "skew-y": [{ "skew-y": [L] }],
          "transform-origin": [
            {
              origin: [
                "center",
                "top",
                "top-right",
                "right",
                "bottom-right",
                "bottom",
                "bottom-left",
                "left",
                "top-left",
                ie,
              ],
            },
          ],
          accent: [{ accent: ["auto", e] }],
          appearance: [{ appearance: ["none", "auto"] }],
          cursor: [
            {
              cursor: [
                "auto",
                "default",
                "pointer",
                "wait",
                "text",
                "move",
                "help",
                "not-allowed",
                "none",
                "context-menu",
                "progress",
                "cell",
                "crosshair",
                "vertical-text",
                "alias",
                "copy",
                "no-drop",
                "grab",
                "grabbing",
                "all-scroll",
                "col-resize",
                "row-resize",
                "n-resize",
                "e-resize",
                "s-resize",
                "w-resize",
                "ne-resize",
                "nw-resize",
                "se-resize",
                "sw-resize",
                "ew-resize",
                "ns-resize",
                "nesw-resize",
                "nwse-resize",
                "zoom-in",
                "zoom-out",
                ie,
              ],
            },
          ],
          "caret-color": [{ caret: [e] }],
          "pointer-events": [{ "pointer-events": ["none", "auto"] }],
          resize: [{ resize: ["none", "y", "x", ""] }],
          "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
          "scroll-m": [{ "scroll-m": ne() }],
          "scroll-mx": [{ "scroll-mx": ne() }],
          "scroll-my": [{ "scroll-my": ne() }],
          "scroll-ms": [{ "scroll-ms": ne() }],
          "scroll-me": [{ "scroll-me": ne() }],
          "scroll-mt": [{ "scroll-mt": ne() }],
          "scroll-mr": [{ "scroll-mr": ne() }],
          "scroll-mb": [{ "scroll-mb": ne() }],
          "scroll-ml": [{ "scroll-ml": ne() }],
          "scroll-p": [{ "scroll-p": ne() }],
          "scroll-px": [{ "scroll-px": ne() }],
          "scroll-py": [{ "scroll-py": ne() }],
          "scroll-ps": [{ "scroll-ps": ne() }],
          "scroll-pe": [{ "scroll-pe": ne() }],
          "scroll-pt": [{ "scroll-pt": ne() }],
          "scroll-pr": [{ "scroll-pr": ne() }],
          "scroll-pb": [{ "scroll-pb": ne() }],
          "scroll-pl": [{ "scroll-pl": ne() }],
          "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
          "snap-stop": [{ snap: ["normal", "always"] }],
          "snap-type": [{ snap: ["none", "x", "y", "both"] }],
          "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
          touch: [{ touch: ["auto", "none", "manipulation"] }],
          "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
          "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
          "touch-pz": ["touch-pinch-zoom"],
          select: [{ select: ["none", "text", "all", "auto"] }],
          "will-change": [
            { "will-change": ["auto", "scroll", "contents", "transform", ie] },
          ],
          fill: [{ fill: [e, "none"] }],
          "stroke-w": [{ stroke: [Xr, Tn, _u] }],
          stroke: [{ stroke: [e, "none"] }],
          sr: ["sr-only", "not-sr-only"],
          "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
        },
        conflictingClassGroups: {
          overflow: ["overflow-x", "overflow-y"],
          overscroll: ["overscroll-x", "overscroll-y"],
          inset: [
            "inset-x",
            "inset-y",
            "start",
            "end",
            "top",
            "right",
            "bottom",
            "left",
          ],
          "inset-x": ["right", "left"],
          "inset-y": ["top", "bottom"],
          flex: ["basis", "grow", "shrink"],
          gap: ["gap-x", "gap-y"],
          p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
          px: ["pr", "pl"],
          py: ["pt", "pb"],
          m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
          mx: ["mr", "ml"],
          my: ["mt", "mb"],
          size: ["w", "h"],
          "font-size": ["leading"],
          "fvn-normal": [
            "fvn-ordinal",
            "fvn-slashed-zero",
            "fvn-figure",
            "fvn-spacing",
            "fvn-fraction",
          ],
          "fvn-ordinal": ["fvn-normal"],
          "fvn-slashed-zero": ["fvn-normal"],
          "fvn-figure": ["fvn-normal"],
          "fvn-spacing": ["fvn-normal"],
          "fvn-fraction": ["fvn-normal"],
          "line-clamp": ["display", "overflow"],
          rounded: [
            "rounded-s",
            "rounded-e",
            "rounded-t",
            "rounded-r",
            "rounded-b",
            "rounded-l",
            "rounded-ss",
            "rounded-se",
            "rounded-ee",
            "rounded-es",
            "rounded-tl",
            "rounded-tr",
            "rounded-br",
            "rounded-bl",
          ],
          "rounded-s": ["rounded-ss", "rounded-es"],
          "rounded-e": ["rounded-se", "rounded-ee"],
          "rounded-t": ["rounded-tl", "rounded-tr"],
          "rounded-r": ["rounded-tr", "rounded-br"],
          "rounded-b": ["rounded-br", "rounded-bl"],
          "rounded-l": ["rounded-tl", "rounded-bl"],
          "border-spacing": ["border-spacing-x", "border-spacing-y"],
          "border-w": [
            "border-w-s",
            "border-w-e",
            "border-w-t",
            "border-w-r",
            "border-w-b",
            "border-w-l",
          ],
          "border-w-x": ["border-w-r", "border-w-l"],
          "border-w-y": ["border-w-t", "border-w-b"],
          "border-color": [
            "border-color-t",
            "border-color-r",
            "border-color-b",
            "border-color-l",
          ],
          "border-color-x": ["border-color-r", "border-color-l"],
          "border-color-y": ["border-color-t", "border-color-b"],
          "scroll-m": [
            "scroll-mx",
            "scroll-my",
            "scroll-ms",
            "scroll-me",
            "scroll-mt",
            "scroll-mr",
            "scroll-mb",
            "scroll-ml",
          ],
          "scroll-mx": ["scroll-mr", "scroll-ml"],
          "scroll-my": ["scroll-mt", "scroll-mb"],
          "scroll-p": [
            "scroll-px",
            "scroll-py",
            "scroll-ps",
            "scroll-pe",
            "scroll-pt",
            "scroll-pr",
            "scroll-pb",
            "scroll-pl",
          ],
          "scroll-px": ["scroll-pr", "scroll-pl"],
          "scroll-py": ["scroll-pt", "scroll-pb"],
          touch: ["touch-x", "touch-y", "touch-pz"],
          "touch-x": ["touch"],
          "touch-y": ["touch"],
          "touch-pz": ["touch"],
        },
        conflictingClassGroupModifiers: { "font-size": ["leading"] },
      };
    },
    Ym = Rm(Qm),
    U = (...e) => Ym(Cm(e));
  function Xm() {
    const { isMoving: e } = N.useContext(Ra);
    return u.jsx("div", {
      className: U(
        "flex fixed z-[100] top-0 left-0 h-[0.3rem] w-0 bg-primary-100",
        e && "animate-[transitionLoading_0.7s_ease]",
      ),
    });
  }
  function ol() {
    return u.jsx("div", {
      className: "flex min-h-screen max-h-screen min-w-screen max-w-screen",
    });
  }
  function w6(e) {
    var t,
      r,
      n = "";
    if (typeof e == "string" || typeof e == "number") n += e;
    else if (typeof e == "object")
      if (Array.isArray(e))
        for (t = 0; t < e.length; t++)
          e[t] && (r = w6(e[t])) && (n && (n += " "), (n += r));
      else for (t in e) e[t] && (n && (n += " "), (n += t));
    return n;
  }
  function Jm() {
    for (var e, t, r = 0, n = ""; r < arguments.length; )
      (e = arguments[r++]) && (t = w6(e)) && (n && (n += " "), (n += t));
    return n;
  }
  const qf = (e) => (typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e),
    Zf = Jm,
    oe = (e, t) => (r) => {
      var n;
      if ((t == null ? void 0 : t.variants) == null)
        return Zf(
          e,
          r == null ? void 0 : r.class,
          r == null ? void 0 : r.className,
        );
      const { variants: s, defaultVariants: o } = t,
        i = Object.keys(s).map((c) => {
          const d = r == null ? void 0 : r[c],
            p = o == null ? void 0 : o[c];
          if (d === null) return null;
          const f = qf(d) || qf(p);
          return s[c][f];
        }),
        a =
          r &&
          Object.entries(r).reduce((c, d) => {
            let [p, f] = d;
            return f === void 0 || (c[p] = f), c;
          }, {}),
        l =
          t == null || (n = t.compoundVariants) === null || n === void 0
            ? void 0
            : n.reduce((c, d) => {
                let { class: p, className: f, ...y } = d;
                return Object.entries(y).every((b) => {
                  let [T, _] = b;
                  return Array.isArray(_)
                    ? _.includes({ ...o, ...a }[T])
                    : { ...o, ...a }[T] === _;
                })
                  ? [...c, p, f]
                  : c;
              }, []);
      return Zf(
        e,
        i,
        l,
        r == null ? void 0 : r.class,
        r == null ? void 0 : r.className,
      );
    },
    eg = { variant: "edge-100", active: !1, inverted: !1 },
    N0 = N.createContext(eg),
    tg = oe(
      "relative flex flex-1 h-full bg-base-100 duration-150 min-h-[2.5rem] px-[1rem] items-center border group-hover/button:translate-x-[0.3rem] group-hover/button:translate-y-[-0.3rem]",
      {
        variants: {
          variant: {
            primary: "border-primary-100",
            success: "border-success-100",
            error: "border-error-100",
            warning: "border-warning-100",
            "edge-100": "border-edge-100",
          },
          active: { true: "translate-x-[0.3rem] translate-y-[-0.3rem]" },
          inverted: { true: "" },
        },
        compoundVariants: [
          { variant: "edge-100", inverted: !0, class: "bg-edge-100" },
          { variant: "primary", inverted: !0, class: "bg-primary-100" },
          { variant: "warning", inverted: !0, class: "bg-warning-100" },
          { variant: "error", inverted: !0, class: "bg-error-100" },
          { variant: "success", inverted: !0, class: "bg-success-100" },
        ],
        defaultVariants: { variant: "edge-100" },
      },
    );
  function st({ className: e, children: t, ...r }) {
    const { variant: n, active: s, inverted: o } = N.useContext(N0);
    return u.jsx("div", {
      className: U(
        tg({ variant: n || "edge-100", className: e, active: s, inverted: o }),
      ),
      ...r,
      children: t,
    });
  }
  const rg = oe(
    "flex absolute h-full w-0 group-hover/button:w-full duration-150 top-0 left-0",
    {
      variants: {
        variant: {
          primary: "bg-primary-100",
          success: "bg-success-100",
          error: "bg-error-100",
          warning: "bg-warning-100",
          "edge-100": "bg-edge-100",
        },
        active: { true: "w-full" },
        inverted: { true: "bg-base-100" },
      },
      defaultVariants: { variant: "edge-100" },
    },
  );
  function ot({ className: e, children: t, ...r }) {
    const { variant: n, active: s, inverted: o } = N.useContext(N0);
    return u.jsx("div", {
      className: U(rg({ variant: n, className: e, active: s, inverted: o })),
      ...r,
      children: t,
    });
  }
  const ng = oe(
    "group/button flex border border-edge-100 cursor-pointer hover:text-base-100",
    {
      variants: {
        variant: {
          primary: "border-primary-100 text-primary-100",
          success: "border-success-100 text-success-100",
          error: "border-error-100 text-error-100",
          warning: "border-warning-100 text-warning-100",
          "edge-100": "border-edge-100 text-edge-100",
        },
        active: { true: "text-base-100" },
        inverted: { true: "text-base-100" },
      },
      compoundVariants: [
        { variant: "edge-100", inverted: !0, class: "hover:text-edge-100" },
        { variant: "primary", inverted: !0, class: "hover:text-primary-100" },
        { variant: "error", inverted: !0, class: "hover:text-error-100" },
        { variant: "warning", inverted: !0, class: "hover:text-warning-100" },
        { variant: "success", inverted: !0, class: "hover:text-success-100" },
      ],
      defaultVariants: { variant: "edge-100" },
    },
  );
  function it({
    variant: e,
    className: t,
    children: r,
    active: n,
    inverted: s,
    ...o
  }) {
    return u.jsx(N0.Provider, {
      value: { variant: e, active: n, inverted: s },
      children: u.jsx("button", {
        className: U(ng({ variant: e, className: t, active: n, inverted: s })),
        ...o,
        children: r,
      }),
    });
  }
  const sg = oe("flex");
  function mi({ className: e, children: t, ...r }) {
    return u.jsx("a", {
      className: U(sg({ className: e })),
      ...r,
      children: u.jsx(it, {
        children: u.jsxs(st, {
          className: "flex-col justify-center h-[5.5rem] w-[5.5rem]",
          children: [
            u.jsx("div", {
              className: "flex h-[2.5rem] w-[2.5rem] z-10",
              children: t,
            }),
            u.jsx(ot, {}),
          ],
        }),
      }),
    });
  }
  const og = oe("flex");
  function ig({ className: e, fillColor: t, ...r }) {
    return u.jsx("svg", {
      viewBox: "0 0 3334 2501",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: U(og({ className: e })),
      ...r,
      children: u.jsx("path", {
        d: "M757.576 2501H227.273C101.894 2501 0 2399.49 0 2273.73V644.94V341.909C0 60.8487 320.455 -99.3786 545.455 69.182L757.576 228.273L1666.67 910.091L2575.76 228.273L2787.88 69.182C3012.5 -99.3786 3333.33 60.8487 3333.33 341.909V644.94V2273.73C3333.33 2399.11 3231.82 2501 3106.06 2501H2575.76V1213.12L1666.67 1894.94L757.576 1213.12V2501Z",
        className: t,
      }),
    });
  }
  const ag = oe("flex");
  function lg({ className: e, fillColor: t, ...r }) {
    return u.jsx("svg", {
      viewBox: "0 0 2567 2500",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: U(ag({ className: e })),
      ...r,
      children: u.jsx("path", {
        d: "M1026.09 19.708C685.178 95.7148 405.742 284.614 213.489 570.757C-122.952 1074.86 -55.8873 1751.1 373.327 2182.55C501.868 2312.21 697.474 2437.39 845.016 2485.46C899.786 2503.34 906.492 2503.34 931.083 2486.57C957.908 2468.69 959.026 2464.22 959.026 2335.68V2203.78L860.665 2209.37C745.537 2214.96 656.117 2194.84 602.465 2149.01C583.463 2133.37 546.578 2079.71 520.87 2030.53C478.395 1947.82 447.098 1909.82 359.914 1832.69C330.853 1806.98 329.735 1805.87 349.855 1791.34C397.918 1755.57 495.162 1790.22 556.638 1863.99C663.941 1994.77 705.298 2029.42 766.774 2042.83C821.543 2054.01 871.842 2049.54 947.849 2027.18C957.908 2023.83 971.321 2000.35 978.028 1973.53C984.734 1947.82 1002.62 1908.7 1017.15 1887.46L1043.97 1848.34L953.437 1830.46C763.421 1791.34 646.057 1723.15 568.933 1606.91C497.397 1499.6 473.924 1406.83 472.807 1233.58C472.807 1070.39 490.691 1003.32 561.109 911.67C592.405 871.431 595.759 859.135 586.817 835.663C570.051 795.424 574.521 625.526 592.405 574.11C606.936 536.107 614.76 529.4 644.94 526.047C695.238 520.458 789.129 552.873 884.137 606.525L965.733 653.47L1037.27 636.704C1138.98 613.231 1444.13 614.349 1535.78 636.704L1605.08 654.588L1669.91 615.467C1755.98 564.05 1865.52 523.812 1920.29 523.812C1963.88 523.812 1963.88 524.929 1981.76 581.934C2000.77 647.881 2004.12 767.48 1987.35 824.485C1978.41 858.018 1980.65 868.077 2005.24 900.492C2127.07 1061.45 2140.48 1328.59 2037.65 1547.67C1968.35 1691.86 1821.93 1792.45 1625.2 1829.34L1531.31 1847.22L1565.96 1908.7L1601.73 1971.29L1605.08 2220.55L1609.55 2469.81L1637.5 2487.69C1663.21 2504.46 1668.8 2504.46 1722.45 2485.46C1811.87 2455.28 1965 2372.56 2048.83 2308.85C2547.34 1935.53 2708.3 1266 2432.22 709.357C2270.14 381.858 1963.88 130.365 1612.91 36.4742C1459.78 -3.76466 1171.4 -12.7066 1026.09 19.708Z",
        className: t,
      }),
    });
  }
  const ug = oe("flex");
  function cg({ className: e, fillColor: t, ...r }) {
    return u.jsx("svg", {
      viewBox: "0 0 2769 2500",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: U(ug({ className: e })),
      ...r,
      children: u.jsx("path", {
        className: t,
        d: "M2187.27 0H2611.62L1679.89 1060.89L2768.45 2500H1914.21L1245.39 1625.46L479.705 2500H55.3506L1042.44 1365.31L0 0H875.461L1479.7 798.893L2187.27 0ZM2038.75 2250.92H2273.99L751.845 239.852H499.077L2038.75 2250.92Z",
      }),
    });
  }
  const dg = oe("flex");
  function fg({ className: e, fillColor: t, ...r }) {
    return u.jsx("svg", {
      viewBox: "0 0 2502 2500",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: U(dg({ className: e })),
      ...r,
      children: u.jsx("path", {
        d: "M1251.03 0C911.302 0 868.666 1.48395 735.233 7.55204C602.062 13.6456 511.161 34.7135 431.622 65.6262C349.348 97.5524 279.556 140.261 210.026 209.765C140.444 279.246 97.7024 348.984 65.6478 431.172C34.6347 510.678 13.5248 601.536 7.53172 734.558C1.56408 867.89 0 910.521 0 1250C0 1589.48 1.51193 1631.95 7.55714 1765.29C13.6825 1898.36 34.7657 1989.19 65.6733 2068.67C97.6503 2150.89 140.39 2220.62 209.947 2290.1C279.453 2359.64 349.244 2402.45 431.466 2434.38C511.055 2465.29 601.984 2486.35 735.129 2492.45C868.562 2498.52 911.171 2500 1250.88 2500C1590.63 2500 1633.14 2498.52 1766.57 2492.45C1899.74 2486.35 1990.75 2465.29 2070.34 2434.37C2152.59 2402.45 2222.28 2359.64 2291.78 2290.1C2361.36 2220.62 2404.1 2150.89 2436.16 2068.7C2466.91 1989.19 2488.02 1898.33 2494.27 1765.31C2500.27 1631.98 2501.83 1589.48 2501.83 1250C2501.83 910.52 2500.27 867.917 2494.27 734.583C2488.02 601.51 2466.91 510.678 2436.16 431.199C2404.1 348.984 2361.36 279.244 2291.78 209.765C2222.2 140.234 2152.61 97.5257 2070.26 65.625C1990.51 34.7135 1899.56 13.6456 1766.39 7.55204C1632.96 1.48395 1590.48 0 1250.64 0H1251.03ZM1138.81 225.261C1172.12 225.209 1209.28 225.261 1251.03 225.261C1585.03 225.261 1624.62 226.459 1756.51 232.448C1878.48 238.021 1944.67 258.385 1988.77 275.494C2047.14 298.151 2088.76 325.235 2132.52 368.984C2176.3 412.735 2203.41 454.402 2226.13 512.734C2243.25 556.744 2263.66 622.89 2269.21 744.766C2275.2 876.536 2276.51 916.12 2276.51 1249.71C2276.51 1583.31 2275.2 1622.89 2269.21 1754.66C2263.63 1876.54 2243.25 1942.68 2226.13 1986.69C2203.46 2045.03 2176.3 2086.56 2132.52 2130.29C2088.74 2174.04 2047.17 2201.12 1988.77 2223.78C1944.72 2240.96 1878.48 2261.28 1756.51 2266.85C1624.64 2272.84 1585.03 2274.14 1251.03 2274.14C917.009 2274.14 877.422 2272.84 745.553 2266.85C623.589 2261.22 557.394 2240.86 513.272 2223.75C454.895 2201.09 413.196 2174.01 369.415 2130.26C325.632 2086.51 298.53 2044.95 275.803 1986.59C258.681 1942.58 238.276 1876.43 232.725 1754.56C226.731 1622.79 225.532 1583.2 225.532 1249.4C225.532 915.6 226.731 876.223 232.725 744.453C238.303 622.578 258.681 556.433 275.803 512.37C298.476 454.037 325.632 412.37 369.415 368.62C413.196 324.87 454.895 297.787 513.272 275.079C557.367 257.89 623.589 237.579 745.553 231.979C860.951 226.77 905.672 225.209 1138.81 224.947L1138.81 225.261ZM1918.77 432.812C1835.89 432.812 1768.66 499.922 1768.66 582.76C1768.66 665.573 1835.89 732.761 1918.77 732.761C2001.64 732.761 2068.88 665.573 2068.88 582.76C2068.88 499.948 2001.64 432.761 1918.77 432.761L1918.77 432.812ZM1251.03 608.072C896.264 608.072 608.629 895.495 608.629 1250C608.629 1604.51 896.264 1891.8 1251.03 1891.8C1605.8 1891.8 1893.33 1604.51 1893.33 1250C1893.33 895.495 1605.78 608.072 1251.01 608.072H1251.03ZM1251.03 833.333C1481.31 833.333 1668.01 1019.87 1668.01 1250C1668.01 1480.1 1481.31 1666.67 1251.03 1666.67C1020.73 1666.67 834.057 1480.1 834.057 1250C834.057 1019.87 1020.73 833.333 1251.03 833.333Z",
        className: t,
      }),
    });
  }
  const pg = oe(
      "flex flex-col h-screen w-screen pl-0 pt-[3.8rem] lg:pt-0 lg:pl-[5rem] overflow-y-auto overflow-x-hidden z-10",
    ),
    ja = ({ className: e, children: t, reactRef: r, ...n }) =>
      u.jsx("div", {
        ref: r,
        className: U(pg({ className: e })),
        ...n,
        children: t,
      }),
    hg = {
      prefix: "fas",
      iconName: "at",
      icon: [
        512,
        512,
        [61946],
        "40",
        "M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256l0 32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32l0 80 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z",
      ],
    },
    mg = {
      prefix: "fas",
      iconName: "angles-down",
      icon: [
        448,
        512,
        ["angle-double-down"],
        "f103",
        "M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z",
      ],
    },
    gg = mg,
    vg = {
      prefix: "fas",
      iconName: "backward",
      icon: [
        512,
        512,
        [9194],
        "f04a",
        "M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-320c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3l0 41.7 0 41.7L459.5 440.6zM256 352l0-96 0-128 0-32c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-64z",
      ],
    },
    yg = {
      prefix: "fas",
      iconName: "laptop-code",
      icon: [
        640,
        512,
        [],
        "f5fc",
        "M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 256-64 0 0-256L128 96l0 256-64 0L64 96zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z",
      ],
    },
    Cg = {
      prefix: "fas",
      iconName: "square-check",
      icon: [
        448,
        512,
        [9745, 9989, 61510, "check-square"],
        "f14a",
        "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z",
      ],
    },
    wg = Cg,
    Eg = {
      prefix: "fas",
      iconName: "user",
      icon: [
        448,
        512,
        [128100, 62144],
        "f007",
        "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z",
      ],
    },
    E6 = {
      prefix: "fas",
      iconName: "star",
      icon: [
        576,
        512,
        [11088, 61446],
        "f005",
        "M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z",
      ],
    },
    bg = {
      prefix: "fas",
      iconName: "server",
      icon: [
        512,
        512,
        [],
        "f233",
        "M64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 32zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 288zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z",
      ],
    },
    b6 = {
      prefix: "fas",
      iconName: "code",
      icon: [
        640,
        512,
        [],
        "f121",
        "M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z",
      ],
    },
    Tg = {
      prefix: "fas",
      iconName: "wrench",
      icon: [
        512,
        512,
        [128295],
        "f0ad",
        "M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7L336 192c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z",
      ],
    },
    xg = {
      prefix: "fas",
      iconName: "envelope",
      icon: [
        512,
        512,
        [128386, 9993, 61443],
        "f0e0",
        "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z",
      ],
    },
    _g = {
      prefix: "fas",
      iconName: "circle-info",
      icon: [
        512,
        512,
        ["info-circle"],
        "f05a",
        "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z",
      ],
    },
    Sg = _g,
    kg = {
      prefix: "fas",
      iconName: "caret-down",
      icon: [
        320,
        512,
        [],
        "f0d7",
        "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z",
      ],
    },
    Kf = {
      prefix: "fas",
      iconName: "sun",
      icon: [
        512,
        512,
        [9728],
        "f185",
        "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z",
      ],
    },
    Og = {
      prefix: "fas",
      iconName: "ellipsis",
      icon: [
        448,
        512,
        ["ellipsis-h"],
        "f141",
        "M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z",
      ],
    },
    Ag = Og,
    Qf = {
      prefix: "fas",
      iconName: "paint-roller",
      icon: [
        512,
        512,
        [],
        "f5aa",
        "M0 64C0 28.7 28.7 0 64 0L352 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64L64 192c-35.3 0-64-28.7-64-64L0 64zM160 352c0-17.7 14.3-32 32-32l0-16c0-44.2 35.8-80 80-80l144 0c17.7 0 32-14.3 32-32l0-32 0-90.5c37.3 13.2 64 48.7 64 90.5l0 32c0 53-43 96-96 96l-144 0c-8.8 0-16 7.2-16 16l0 16c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-128z",
      ],
    },
    Pg = {
      prefix: "fas",
      iconName: "magnifying-glass",
      icon: [
        512,
        512,
        [128269, "search"],
        "f002",
        "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z",
      ],
    },
    Lg = Pg,
    T6 = {
      prefix: "fas",
      iconName: "list-check",
      icon: [
        512,
        512,
        ["tasks"],
        "f0ae",
        "M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z",
      ],
    },
    Yf = {
      prefix: "fas",
      iconName: "computer",
      icon: [
        640,
        512,
        [],
        "e4e5",
        "M384 96l0 224L64 320 64 96l320 0zM64 32C28.7 32 0 60.7 0 96L0 320c0 35.3 28.7 64 64 64l117.3 0-10.7 32L96 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-74.7 0-10.7-32L384 384c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L64 32zm464 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0zm16 64l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z",
      ],
    },
    Xf = {
      prefix: "fas",
      iconName: "moon",
      icon: [
        384,
        512,
        [127769, 9214],
        "f186",
        "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z",
      ],
    },
    Rg = {
      prefix: "fas",
      iconName: "briefcase",
      icon: [
        512,
        512,
        [128188],
        "f0b1",
        "M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z",
      ],
    },
    Jf = {
      prefix: "fas",
      iconName: "graduation-cap",
      icon: [
        640,
        512,
        [127891, "mortar-board"],
        "f19d",
        "M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z",
      ],
    },
    e3 = () => {};
  let F0 = {},
    x6 = {},
    _6 = null,
    S6 = { mark: e3, measure: e3 };
  try {
    typeof window < "u" && (F0 = window),
      typeof document < "u" && (x6 = document),
      typeof MutationObserver < "u" && (_6 = MutationObserver),
      typeof performance < "u" && (S6 = performance);
  } catch {}
  const { userAgent: t3 = "" } = F0.navigator || {},
    Yn = F0,
    Le = x6,
    r3 = _6,
    il = S6;
  Yn.document;
  const mn =
      !!Le.documentElement &&
      !!Le.head &&
      typeof Le.addEventListener == "function" &&
      typeof Le.createElement == "function",
    k6 = ~t3.indexOf("MSIE") || ~t3.indexOf("Trident/");
  var Ne = "classic",
    O6 = "duotone",
    Zt = "sharp",
    Kt = "sharp-duotone",
    jg = [Ne, O6, Zt, Kt],
    Ng = {
      classic: {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal",
        100: "fat",
      },
      sharp: { 900: "fass", 400: "fasr", 300: "fasl", 100: "fast" },
      "sharp-duotone": { 900: "fasds" },
    },
    n3 = {
      kit: { fak: "kit", "fa-kit": "kit" },
      "kit-duotone": { fakd: "kit-duotone", "fa-kit-duotone": "kit-duotone" },
    },
    Fg = ["kit"],
    Ig = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,
    Mg =
      /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,
    Dg = {
      "Font Awesome 5 Free": { 900: "fas", 400: "far" },
      "Font Awesome 5 Pro": {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal",
      },
      "Font Awesome 5 Brands": { 400: "fab", normal: "fab" },
      "Font Awesome 5 Duotone": { 900: "fad" },
    },
    Gg = {
      "Font Awesome 6 Free": { 900: "fas", 400: "far" },
      "Font Awesome 6 Pro": {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal",
        100: "fat",
      },
      "Font Awesome 6 Brands": { 400: "fab", normal: "fab" },
      "Font Awesome 6 Duotone": { 900: "fad" },
      "Font Awesome 6 Sharp": {
        900: "fass",
        400: "fasr",
        normal: "fasr",
        300: "fasl",
        100: "fast",
      },
      "Font Awesome 6 Sharp Duotone": { 900: "fasds" },
    },
    Ug = {
      classic: {
        "fa-brands": "fab",
        "fa-duotone": "fad",
        "fa-light": "fal",
        "fa-regular": "far",
        "fa-solid": "fas",
        "fa-thin": "fat",
      },
      sharp: {
        "fa-solid": "fass",
        "fa-regular": "fasr",
        "fa-light": "fasl",
        "fa-thin": "fast",
      },
      "sharp-duotone": { "fa-solid": "fasds" },
    },
    $g = {
      classic: ["fas", "far", "fal", "fat"],
      sharp: ["fass", "fasr", "fasl", "fast"],
      "sharp-duotone": ["fasds"],
    },
    Hg = {
      classic: {
        fab: "fa-brands",
        fad: "fa-duotone",
        fal: "fa-light",
        far: "fa-regular",
        fas: "fa-solid",
        fat: "fa-thin",
      },
      sharp: {
        fass: "fa-solid",
        fasr: "fa-regular",
        fasl: "fa-light",
        fast: "fa-thin",
      },
      "sharp-duotone": { fasds: "fa-solid" },
    },
    Vg = {
      classic: {
        solid: "fas",
        regular: "far",
        light: "fal",
        thin: "fat",
        duotone: "fad",
        brands: "fab",
      },
      sharp: { solid: "fass", regular: "fasr", light: "fasl", thin: "fast" },
      "sharp-duotone": { solid: "fasds" },
    },
    A6 = {
      classic: {
        fa: "solid",
        fas: "solid",
        "fa-solid": "solid",
        far: "regular",
        "fa-regular": "regular",
        fal: "light",
        "fa-light": "light",
        fat: "thin",
        "fa-thin": "thin",
        fad: "duotone",
        "fa-duotone": "duotone",
        fab: "brands",
        "fa-brands": "brands",
      },
      sharp: {
        fa: "solid",
        fass: "solid",
        "fa-solid": "solid",
        fasr: "regular",
        "fa-regular": "regular",
        fasl: "light",
        "fa-light": "light",
        fast: "thin",
        "fa-thin": "thin",
      },
      "sharp-duotone": { fa: "solid", fasds: "solid", "fa-solid": "solid" },
    },
    zg = ["solid", "regular", "light", "thin", "duotone", "brands"],
    P6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    Bg = P6.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
    ji = {
      GROUP: "duotone-group",
      SWAP_OPACITY: "swap-opacity",
      PRIMARY: "primary",
      SECONDARY: "secondary",
    },
    Wg = [
      ...Object.keys($g),
      ...zg,
      "2xs",
      "xs",
      "sm",
      "lg",
      "xl",
      "2xl",
      "beat",
      "border",
      "fade",
      "beat-fade",
      "bounce",
      "flip-both",
      "flip-horizontal",
      "flip-vertical",
      "flip",
      "fw",
      "inverse",
      "layers-counter",
      "layers-text",
      "layers",
      "li",
      "pull-left",
      "pull-right",
      "pulse",
      "rotate-180",
      "rotate-270",
      "rotate-90",
      "rotate-by",
      "shake",
      "spin-pulse",
      "spin-reverse",
      "spin",
      "stack-1x",
      "stack-2x",
      "stack",
      "ul",
      ji.GROUP,
      ji.SWAP_OPACITY,
      ji.PRIMARY,
      ji.SECONDARY,
    ]
      .concat(P6.map((e) => "".concat(e, "x")))
      .concat(Bg.map((e) => "w-".concat(e))),
    qg = {
      "Font Awesome Kit": { 400: "fak", normal: "fak" },
      "Font Awesome Kit Duotone": { 400: "fakd", normal: "fakd" },
    },
    Zg = {
      kit: { "fa-kit": "fak" },
      "kit-duotone": { "fa-kit-duotone": "fakd" },
    },
    Kg = { kit: { fak: "fa-kit" }, "kit-duotone": { fakd: "fa-kit-duotone" } },
    s3 = { kit: { kit: "fak" }, "kit-duotone": { "kit-duotone": "fakd" } };
  const fn = "___FONT_AWESOME___",
    zc = 16,
    L6 = "fa",
    R6 = "svg-inline--fa",
    Ms = "data-fa-i2svg",
    Bc = "data-fa-pseudo-element",
    Qg = "data-fa-pseudo-element-pending",
    I0 = "data-prefix",
    M0 = "data-icon",
    o3 = "fontawesome-i2svg",
    Yg = "async",
    Xg = ["HTML", "HEAD", "STYLE", "SCRIPT"],
    j6 = (() => {
      try {
        return !0;
      } catch {
        return !1;
      }
    })(),
    N6 = [Ne, Zt, Kt];
  function Na(e) {
    return new Proxy(e, {
      get(t, r) {
        return r in t ? t[r] : t[Ne];
      },
    });
  }
  const F6 = { ...A6 };
  F6[Ne] = { ...A6[Ne], ...n3.kit, ...n3["kit-duotone"] };
  const ks = Na(F6),
    Wc = { ...Vg };
  Wc[Ne] = { ...Wc[Ne], ...s3.kit, ...s3["kit-duotone"] };
  const ha = Na(Wc),
    qc = { ...Hg };
  qc[Ne] = { ...qc[Ne], ...Kg.kit };
  const Os = Na(qc),
    Zc = { ...Ug };
  Zc[Ne] = { ...Zc[Ne], ...Zg.kit };
  const Jg = Na(Zc),
    ev = Ig,
    I6 = "fa-layers-text",
    tv = Mg,
    rv = { ...Ng };
  Na(rv);
  const nv = [
      "class",
      "data-prefix",
      "data-icon",
      "data-fa-transform",
      "data-fa-mask",
    ],
    Su = ji,
    Zo = new Set();
  Object.keys(ha[Ne]).map(Zo.add.bind(Zo));
  Object.keys(ha[Zt]).map(Zo.add.bind(Zo));
  Object.keys(ha[Kt]).map(Zo.add.bind(Zo));
  const sv = [...Fg, ...Wg],
    Wi = Yn.FontAwesomeConfig || {};
  function ov(e) {
    var t = Le.querySelector("script[" + e + "]");
    if (t) return t.getAttribute(e);
  }
  function iv(e) {
    return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
  }
  Le &&
    typeof Le.querySelector == "function" &&
    [
      ["data-family-prefix", "familyPrefix"],
      ["data-css-prefix", "cssPrefix"],
      ["data-family-default", "familyDefault"],
      ["data-style-default", "styleDefault"],
      ["data-replacement-class", "replacementClass"],
      ["data-auto-replace-svg", "autoReplaceSvg"],
      ["data-auto-add-css", "autoAddCss"],
      ["data-auto-a11y", "autoA11y"],
      ["data-search-pseudo-elements", "searchPseudoElements"],
      ["data-observe-mutations", "observeMutations"],
      ["data-mutate-approach", "mutateApproach"],
      ["data-keep-original-source", "keepOriginalSource"],
      ["data-measure-performance", "measurePerformance"],
      ["data-show-missing-icons", "showMissingIcons"],
    ].forEach((t) => {
      let [r, n] = t;
      const s = iv(ov(r));
      s != null && (Wi[n] = s);
    });
  const M6 = {
    styleDefault: "solid",
    familyDefault: "classic",
    cssPrefix: L6,
    replacementClass: R6,
    autoReplaceSvg: !0,
    autoAddCss: !0,
    autoA11y: !0,
    searchPseudoElements: !1,
    observeMutations: !0,
    mutateApproach: "async",
    keepOriginalSource: !0,
    measurePerformance: !1,
    showMissingIcons: !0,
  };
  Wi.familyPrefix && (Wi.cssPrefix = Wi.familyPrefix);
  const Ko = { ...M6, ...Wi };
  Ko.autoReplaceSvg || (Ko.observeMutations = !1);
  const q = {};
  Object.keys(M6).forEach((e) => {
    Object.defineProperty(q, e, {
      enumerable: !0,
      set: function (t) {
        (Ko[e] = t), qi.forEach((r) => r(q));
      },
      get: function () {
        return Ko[e];
      },
    });
  });
  Object.defineProperty(q, "familyPrefix", {
    enumerable: !0,
    set: function (e) {
      (Ko.cssPrefix = e), qi.forEach((t) => t(q));
    },
    get: function () {
      return Ko.cssPrefix;
    },
  });
  Yn.FontAwesomeConfig = q;
  const qi = [];
  function av(e) {
    return (
      qi.push(e),
      () => {
        qi.splice(qi.indexOf(e), 1);
      }
    );
  }
  const _n = zc,
    Hr = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
  function lv(e) {
    if (!e || !mn) return;
    const t = Le.createElement("style");
    t.setAttribute("type", "text/css"), (t.innerHTML = e);
    const r = Le.head.childNodes;
    let n = null;
    for (let s = r.length - 1; s > -1; s--) {
      const o = r[s],
        i = (o.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(i) > -1 && (n = o);
    }
    return Le.head.insertBefore(t, n), e;
  }
  const uv = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  function ma() {
    let e = 12,
      t = "";
    for (; e-- > 0; ) t += uv[(Math.random() * 62) | 0];
    return t;
  }
  function ri(e) {
    const t = [];
    for (let r = (e || []).length >>> 0; r--; ) t[r] = e[r];
    return t;
  }
  function D0(e) {
    return e.classList
      ? ri(e.classList)
      : (e.getAttribute("class") || "").split(" ").filter((t) => t);
  }
  function D6(e) {
    return ""
      .concat(e)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
  function cv(e) {
    return Object.keys(e || {})
      .reduce((t, r) => t + "".concat(r, '="').concat(D6(e[r]), '" '), "")
      .trim();
  }
  function _1(e) {
    return Object.keys(e || {}).reduce(
      (t, r) => t + "".concat(r, ": ").concat(e[r].trim(), ";"),
      "",
    );
  }
  function G0(e) {
    return (
      e.size !== Hr.size ||
      e.x !== Hr.x ||
      e.y !== Hr.y ||
      e.rotate !== Hr.rotate ||
      e.flipX ||
      e.flipY
    );
  }
  function dv(e) {
    let { transform: t, containerWidth: r, iconWidth: n } = e;
    const s = { transform: "translate(".concat(r / 2, " 256)") },
      o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "),
      i = "scale("
        .concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
        .concat((t.size / 16) * (t.flipY ? -1 : 1), ") "),
      a = "rotate(".concat(t.rotate, " 0 0)"),
      l = { transform: "".concat(o, " ").concat(i, " ").concat(a) },
      c = { transform: "translate(".concat((n / 2) * -1, " -256)") };
    return { outer: s, inner: l, path: c };
  }
  function fv(e) {
    let {
        transform: t,
        width: r = zc,
        height: n = zc,
        startCentered: s = !1,
      } = e,
      o = "";
    return (
      s && k6
        ? (o += "translate("
            .concat(t.x / _n - r / 2, "em, ")
            .concat(t.y / _n - n / 2, "em) "))
        : s
          ? (o += "translate(calc(-50% + "
              .concat(t.x / _n, "em), calc(-50% + ")
              .concat(t.y / _n, "em)) "))
          : (o += "translate("
              .concat(t.x / _n, "em, ")
              .concat(t.y / _n, "em) ")),
      (o += "scale("
        .concat((t.size / _n) * (t.flipX ? -1 : 1), ", ")
        .concat((t.size / _n) * (t.flipY ? -1 : 1), ") ")),
      (o += "rotate(".concat(t.rotate, "deg) ")),
      o
    );
  }
  var pv = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
  function G6() {
    const e = L6,
      t = R6,
      r = q.cssPrefix,
      n = q.replacementClass;
    let s = pv;
    if (r !== e || n !== t) {
      const o = new RegExp("\\.".concat(e, "\\-"), "g"),
        i = new RegExp("\\--".concat(e, "\\-"), "g"),
        a = new RegExp("\\.".concat(t), "g");
      s = s
        .replace(o, ".".concat(r, "-"))
        .replace(i, "--".concat(r, "-"))
        .replace(a, ".".concat(n));
    }
    return s;
  }
  let i3 = !1;
  function ku() {
    q.autoAddCss && !i3 && (lv(G6()), (i3 = !0));
  }
  var hv = {
    mixout() {
      return { dom: { css: G6, insertCss: ku } };
    },
    hooks() {
      return {
        beforeDOMElementCreation() {
          ku();
        },
        beforeI2svg() {
          ku();
        },
      };
    },
  };
  const pn = Yn || {};
  pn[fn] || (pn[fn] = {});
  pn[fn].styles || (pn[fn].styles = {});
  pn[fn].hooks || (pn[fn].hooks = {});
  pn[fn].shims || (pn[fn].shims = []);
  var Vr = pn[fn];
  const U6 = [],
    $6 = function () {
      Le.removeEventListener("DOMContentLoaded", $6),
        (r1 = 1),
        U6.map((e) => e());
    };
  let r1 = !1;
  mn &&
    ((r1 = (Le.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
      Le.readyState,
    )),
    r1 || Le.addEventListener("DOMContentLoaded", $6));
  function mv(e) {
    mn && (r1 ? setTimeout(e, 0) : U6.push(e));
  }
  function Fa(e) {
    const { tag: t, attributes: r = {}, children: n = [] } = e;
    return typeof e == "string"
      ? D6(e)
      : "<"
          .concat(t, " ")
          .concat(cv(r), ">")
          .concat(n.map(Fa).join(""), "</")
          .concat(t, ">");
  }
  function a3(e, t, r) {
    if (e && e[t] && e[t][r]) return { prefix: t, iconName: r, icon: e[t][r] };
  }
  var Ou = function (t, r, n, s) {
    var o = Object.keys(t),
      i = o.length,
      a = r,
      l,
      c,
      d;
    for (
      n === void 0 ? ((l = 1), (d = t[o[0]])) : ((l = 0), (d = n));
      l < i;
      l++
    )
      (c = o[l]), (d = a(d, t[c], c, t));
    return d;
  };
  function gv(e) {
    const t = [];
    let r = 0;
    const n = e.length;
    for (; r < n; ) {
      const s = e.charCodeAt(r++);
      if (s >= 55296 && s <= 56319 && r < n) {
        const o = e.charCodeAt(r++);
        (o & 64512) == 56320
          ? t.push(((s & 1023) << 10) + (o & 1023) + 65536)
          : (t.push(s), r--);
      } else t.push(s);
    }
    return t;
  }
  function Kc(e) {
    const t = gv(e);
    return t.length === 1 ? t[0].toString(16) : null;
  }
  function vv(e, t) {
    const r = e.length;
    let n = e.charCodeAt(t),
      s;
    return n >= 55296 &&
      n <= 56319 &&
      r > t + 1 &&
      ((s = e.charCodeAt(t + 1)), s >= 56320 && s <= 57343)
      ? (n - 55296) * 1024 + s - 56320 + 65536
      : n;
  }
  function l3(e) {
    return Object.keys(e).reduce((t, r) => {
      const n = e[r];
      return !!n.icon ? (t[n.iconName] = n.icon) : (t[r] = n), t;
    }, {});
  }
  function Qc(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const { skipHooks: n = !1 } = r,
      s = l3(t);
    typeof Vr.hooks.addPack == "function" && !n
      ? Vr.hooks.addPack(e, l3(t))
      : (Vr.styles[e] = { ...(Vr.styles[e] || {}), ...s }),
      e === "fas" && Qc("fa", t);
  }
  const { styles: ps, shims: yv } = Vr,
    Cv = {
      [Ne]: Object.values(Os[Ne]),
      [Zt]: Object.values(Os[Zt]),
      [Kt]: Object.values(Os[Kt]),
    };
  let U0 = null,
    H6 = {},
    V6 = {},
    z6 = {},
    B6 = {},
    W6 = {};
  const wv = {
    [Ne]: Object.keys(ks[Ne]),
    [Zt]: Object.keys(ks[Zt]),
    [Kt]: Object.keys(ks[Kt]),
  };
  function Ev(e) {
    return ~sv.indexOf(e);
  }
  function bv(e, t) {
    const r = t.split("-"),
      n = r[0],
      s = r.slice(1).join("-");
    return n === e && s !== "" && !Ev(s) ? s : null;
  }
  const q6 = () => {
    const e = (n) => Ou(ps, (s, o, i) => ((s[i] = Ou(o, n, {})), s), {});
    (H6 = e(
      (n, s, o) => (
        s[3] && (n[s[3]] = o),
        s[2] &&
          s[2]
            .filter((a) => typeof a == "number")
            .forEach((a) => {
              n[a.toString(16)] = o;
            }),
        n
      ),
    )),
      (V6 = e(
        (n, s, o) => (
          (n[o] = o),
          s[2] &&
            s[2]
              .filter((a) => typeof a == "string")
              .forEach((a) => {
                n[a] = o;
              }),
          n
        ),
      )),
      (W6 = e((n, s, o) => {
        const i = s[2];
        return (
          (n[o] = o),
          i.forEach((a) => {
            n[a] = o;
          }),
          n
        );
      }));
    const t = "far" in ps || q.autoFetchSvg,
      r = Ou(
        yv,
        (n, s) => {
          const o = s[0];
          let i = s[1];
          const a = s[2];
          return (
            i === "far" && !t && (i = "fas"),
            typeof o == "string" && (n.names[o] = { prefix: i, iconName: a }),
            typeof o == "number" &&
              (n.unicodes[o.toString(16)] = { prefix: i, iconName: a }),
            n
          );
        },
        { names: {}, unicodes: {} },
      );
    (z6 = r.names),
      (B6 = r.unicodes),
      (U0 = S1(q.styleDefault, { family: q.familyDefault }));
  };
  av((e) => {
    U0 = S1(e.styleDefault, { family: q.familyDefault });
  });
  q6();
  function $0(e, t) {
    return (H6[e] || {})[t];
  }
  function Tv(e, t) {
    return (V6[e] || {})[t];
  }
  function Gn(e, t) {
    return (W6[e] || {})[t];
  }
  function Z6(e) {
    return z6[e] || { prefix: null, iconName: null };
  }
  function xv(e) {
    const t = B6[e],
      r = $0("fas", e);
    return (
      t ||
      (r ? { prefix: "fas", iconName: r } : null) || {
        prefix: null,
        iconName: null,
      }
    );
  }
  function Xn() {
    return U0;
  }
  const H0 = () => ({ prefix: null, iconName: null, rest: [] });
  function S1(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const { family: r = Ne } = t,
      n = ks[r][e],
      s = ha[r][e] || ha[r][n],
      o = e in Vr.styles ? e : null;
    return s || o || null;
  }
  const _v = {
    [Ne]: Object.keys(Os[Ne]),
    [Zt]: Object.keys(Os[Zt]),
    [Kt]: Object.keys(Os[Kt]),
  };
  function k1(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const { skipLookups: r = !1 } = t,
      n = {
        [Ne]: "".concat(q.cssPrefix, "-").concat(Ne),
        [Zt]: "".concat(q.cssPrefix, "-").concat(Zt),
        [Kt]: "".concat(q.cssPrefix, "-").concat(Kt),
      };
    let s = null,
      o = Ne;
    const i = jg.filter((l) => l !== O6);
    i.forEach((l) => {
      (e.includes(n[l]) || e.some((c) => _v[l].includes(c))) && (o = l);
    });
    const a = e.reduce((l, c) => {
      const d = bv(q.cssPrefix, c);
      if (
        (ps[c]
          ? ((c = Cv[o].includes(c) ? Jg[o][c] : c), (s = c), (l.prefix = c))
          : wv[o].indexOf(c) > -1
            ? ((s = c), (l.prefix = S1(c, { family: o })))
            : d
              ? (l.iconName = d)
              : c !== q.replacementClass &&
                !i.some((p) => c === n[p]) &&
                l.rest.push(c),
        !r && l.prefix && l.iconName)
      ) {
        const p = s === "fa" ? Z6(l.iconName) : {},
          f = Gn(l.prefix, l.iconName);
        p.prefix && (s = null),
          (l.iconName = p.iconName || f || l.iconName),
          (l.prefix = p.prefix || l.prefix),
          l.prefix === "far" &&
            !ps.far &&
            ps.fas &&
            !q.autoFetchSvg &&
            (l.prefix = "fas");
      }
      return l;
    }, H0());
    return (
      (e.includes("fa-brands") || e.includes("fab")) && (a.prefix = "fab"),
      (e.includes("fa-duotone") || e.includes("fad")) && (a.prefix = "fad"),
      !a.prefix &&
        o === Zt &&
        (ps.fass || q.autoFetchSvg) &&
        ((a.prefix = "fass"),
        (a.iconName = Gn(a.prefix, a.iconName) || a.iconName)),
      !a.prefix &&
        o === Kt &&
        (ps.fasds || q.autoFetchSvg) &&
        ((a.prefix = "fasds"),
        (a.iconName = Gn(a.prefix, a.iconName) || a.iconName)),
      (a.prefix === "fa" || s === "fa") && (a.prefix = Xn() || "fas"),
      a
    );
  }
  class Sv {
    constructor() {
      this.definitions = {};
    }
    add() {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      const s = r.reduce(this._pullDefinitions, {});
      Object.keys(s).forEach((o) => {
        (this.definitions[o] = { ...(this.definitions[o] || {}), ...s[o] }),
          Qc(o, s[o]);
        const i = Os[Ne][o];
        i && Qc(i, s[o]), q6();
      });
    }
    reset() {
      this.definitions = {};
    }
    _pullDefinitions(t, r) {
      const n = r.prefix && r.iconName && r.icon ? { 0: r } : r;
      return (
        Object.keys(n).map((s) => {
          const { prefix: o, iconName: i, icon: a } = n[s],
            l = a[2];
          t[o] || (t[o] = {}),
            l.length > 0 &&
              l.forEach((c) => {
                typeof c == "string" && (t[o][c] = a);
              }),
            (t[o][i] = a);
        }),
        t
      );
    }
  }
  let u3 = [],
    ho = {};
  const So = {},
    kv = Object.keys(So);
  function Ov(e, t) {
    let { mixoutsTo: r } = t;
    return (
      (u3 = e),
      (ho = {}),
      Object.keys(So).forEach((n) => {
        kv.indexOf(n) === -1 && delete So[n];
      }),
      u3.forEach((n) => {
        const s = n.mixout ? n.mixout() : {};
        if (
          (Object.keys(s).forEach((o) => {
            typeof s[o] == "function" && (r[o] = s[o]),
              typeof s[o] == "object" &&
                Object.keys(s[o]).forEach((i) => {
                  r[o] || (r[o] = {}), (r[o][i] = s[o][i]);
                });
          }),
          n.hooks)
        ) {
          const o = n.hooks();
          Object.keys(o).forEach((i) => {
            ho[i] || (ho[i] = []), ho[i].push(o[i]);
          });
        }
        n.provides && n.provides(So);
      }),
      r
    );
  }
  function Yc(e, t) {
    for (
      var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), s = 2;
      s < r;
      s++
    )
      n[s - 2] = arguments[s];
    return (
      (ho[e] || []).forEach((i) => {
        t = i.apply(null, [t, ...n]);
      }),
      t
    );
  }
  function Ds(e) {
    for (
      var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
      n < t;
      n++
    )
      r[n - 1] = arguments[n];
    (ho[e] || []).forEach((o) => {
      o.apply(null, r);
    });
  }
  function Jn() {
    const e = arguments[0],
      t = Array.prototype.slice.call(arguments, 1);
    return So[e] ? So[e].apply(null, t) : void 0;
  }
  function Xc(e) {
    e.prefix === "fa" && (e.prefix = "fas");
    let { iconName: t } = e;
    const r = e.prefix || Xn();
    if (t)
      return (
        (t = Gn(r, t) || t), a3(K6.definitions, r, t) || a3(Vr.styles, r, t)
      );
  }
  const K6 = new Sv(),
    Av = () => {
      (q.autoReplaceSvg = !1), (q.observeMutations = !1), Ds("noAuto");
    },
    Pv = {
      i2svg: function () {
        let e =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return mn
          ? (Ds("beforeI2svg", e), Jn("pseudoElements2svg", e), Jn("i2svg", e))
          : Promise.reject(new Error("Operation requires a DOM of some kind."));
      },
      watch: function () {
        let e =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const { autoReplaceSvgRoot: t } = e;
        q.autoReplaceSvg === !1 && (q.autoReplaceSvg = !0),
          (q.observeMutations = !0),
          mv(() => {
            Rv({ autoReplaceSvgRoot: t }), Ds("watch", e);
          });
      },
    },
    Lv = {
      icon: (e) => {
        if (e === null) return null;
        if (typeof e == "object" && e.prefix && e.iconName)
          return {
            prefix: e.prefix,
            iconName: Gn(e.prefix, e.iconName) || e.iconName,
          };
        if (Array.isArray(e) && e.length === 2) {
          const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1],
            r = S1(e[0]);
          return { prefix: r, iconName: Gn(r, t) || t };
        }
        if (
          typeof e == "string" &&
          (e.indexOf("".concat(q.cssPrefix, "-")) > -1 || e.match(ev))
        ) {
          const t = k1(e.split(" "), { skipLookups: !0 });
          return {
            prefix: t.prefix || Xn(),
            iconName: Gn(t.prefix, t.iconName) || t.iconName,
          };
        }
        if (typeof e == "string") {
          const t = Xn();
          return { prefix: t, iconName: Gn(t, e) || e };
        }
      },
    },
    er = {
      noAuto: Av,
      config: q,
      dom: Pv,
      parse: Lv,
      library: K6,
      findIconDefinition: Xc,
      toHtml: Fa,
    },
    Rv = function () {
      let e =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const { autoReplaceSvgRoot: t = Le } = e;
      (Object.keys(Vr.styles).length > 0 || q.autoFetchSvg) &&
        mn &&
        q.autoReplaceSvg &&
        er.dom.i2svg({ node: t });
    };
  function O1(e, t) {
    return (
      Object.defineProperty(e, "abstract", { get: t }),
      Object.defineProperty(e, "html", {
        get: function () {
          return e.abstract.map((r) => Fa(r));
        },
      }),
      Object.defineProperty(e, "node", {
        get: function () {
          if (!mn) return;
          const r = Le.createElement("div");
          return (r.innerHTML = e.html), r.children;
        },
      }),
      e
    );
  }
  function jv(e) {
    let {
      children: t,
      main: r,
      mask: n,
      attributes: s,
      styles: o,
      transform: i,
    } = e;
    if (G0(i) && r.found && !n.found) {
      const { width: a, height: l } = r,
        c = { x: a / l / 2, y: 0.5 };
      s.style = _1({
        ...o,
        "transform-origin": ""
          .concat(c.x + i.x / 16, "em ")
          .concat(c.y + i.y / 16, "em"),
      });
    }
    return [{ tag: "svg", attributes: s, children: t }];
  }
  function Nv(e) {
    let { prefix: t, iconName: r, children: n, attributes: s, symbol: o } = e;
    const i =
      o === !0 ? "".concat(t, "-").concat(q.cssPrefix, "-").concat(r) : o;
    return [
      {
        tag: "svg",
        attributes: { style: "display: none;" },
        children: [{ tag: "symbol", attributes: { ...s, id: i }, children: n }],
      },
    ];
  }
  function V0(e) {
    const {
        icons: { main: t, mask: r },
        prefix: n,
        iconName: s,
        transform: o,
        symbol: i,
        title: a,
        maskId: l,
        titleId: c,
        extra: d,
        watchable: p = !1,
      } = e,
      { width: f, height: y } = r.found ? r : t,
      b = n === "fak",
      T = [q.replacementClass, s ? "".concat(q.cssPrefix, "-").concat(s) : ""]
        .filter((P) => d.classes.indexOf(P) === -1)
        .filter((P) => P !== "" || !!P)
        .concat(d.classes)
        .join(" ");
    let _ = {
      children: [],
      attributes: {
        ...d.attributes,
        "data-prefix": n,
        "data-icon": s,
        class: T,
        role: d.attributes.role || "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 ".concat(f, " ").concat(y),
      },
    };
    const g =
      b && !~d.classes.indexOf("fa-fw")
        ? { width: "".concat((f / y) * 16 * 0.0625, "em") }
        : {};
    p && (_.attributes[Ms] = ""),
      a &&
        (_.children.push({
          tag: "title",
          attributes: {
            id: _.attributes["aria-labelledby"] || "title-".concat(c || ma()),
          },
          children: [a],
        }),
        delete _.attributes.title);
    const h = {
        ..._,
        prefix: n,
        iconName: s,
        main: t,
        mask: r,
        maskId: l,
        transform: o,
        symbol: i,
        styles: { ...g, ...d.styles },
      },
      { children: v, attributes: E } =
        r.found && t.found
          ? Jn("generateAbstractMask", h) || { children: [], attributes: {} }
          : Jn("generateAbstractIcon", h) || { children: [], attributes: {} };
    return (h.children = v), (h.attributes = E), i ? Nv(h) : jv(h);
  }
  function c3(e) {
    const {
        content: t,
        width: r,
        height: n,
        transform: s,
        title: o,
        extra: i,
        watchable: a = !1,
      } = e,
      l = {
        ...i.attributes,
        ...(o ? { title: o } : {}),
        class: i.classes.join(" "),
      };
    a && (l[Ms] = "");
    const c = { ...i.styles };
    G0(s) &&
      ((c.transform = fv({
        transform: s,
        startCentered: !0,
        width: r,
        height: n,
      })),
      (c["-webkit-transform"] = c.transform));
    const d = _1(c);
    d.length > 0 && (l.style = d);
    const p = [];
    return (
      p.push({ tag: "span", attributes: l, children: [t] }),
      o &&
        p.push({
          tag: "span",
          attributes: { class: "sr-only" },
          children: [o],
        }),
      p
    );
  }
  function Fv(e) {
    const { content: t, title: r, extra: n } = e,
      s = {
        ...n.attributes,
        ...(r ? { title: r } : {}),
        class: n.classes.join(" "),
      },
      o = _1(n.styles);
    o.length > 0 && (s.style = o);
    const i = [];
    return (
      i.push({ tag: "span", attributes: s, children: [t] }),
      r &&
        i.push({
          tag: "span",
          attributes: { class: "sr-only" },
          children: [r],
        }),
      i
    );
  }
  const { styles: Au } = Vr;
  function Jc(e) {
    const t = e[0],
      r = e[1],
      [n] = e.slice(4);
    let s = null;
    return (
      Array.isArray(n)
        ? (s = {
            tag: "g",
            attributes: { class: "".concat(q.cssPrefix, "-").concat(Su.GROUP) },
            children: [
              {
                tag: "path",
                attributes: {
                  class: "".concat(q.cssPrefix, "-").concat(Su.SECONDARY),
                  fill: "currentColor",
                  d: n[0],
                },
              },
              {
                tag: "path",
                attributes: {
                  class: "".concat(q.cssPrefix, "-").concat(Su.PRIMARY),
                  fill: "currentColor",
                  d: n[1],
                },
              },
            ],
          })
        : (s = { tag: "path", attributes: { fill: "currentColor", d: n } }),
      { found: !0, width: t, height: r, icon: s }
    );
  }
  const Iv = { found: !1, width: 512, height: 512 };
  function Mv(e, t) {
    !j6 &&
      !q.showMissingIcons &&
      e &&
      console.error(
        'Icon with name "'
          .concat(e, '" and prefix "')
          .concat(t, '" is missing.'),
      );
  }
  function e2(e, t) {
    let r = t;
    return (
      t === "fa" && q.styleDefault !== null && (t = Xn()),
      new Promise((n, s) => {
        if (r === "fa") {
          const o = Z6(e) || {};
          (e = o.iconName || e), (t = o.prefix || t);
        }
        if (e && t && Au[t] && Au[t][e]) {
          const o = Au[t][e];
          return n(Jc(o));
        }
        Mv(e, t),
          n({
            ...Iv,
            icon:
              q.showMissingIcons && e ? Jn("missingIconAbstract") || {} : {},
          });
      })
    );
  }
  const d3 = () => {},
    t2 =
      q.measurePerformance && il && il.mark && il.measure
        ? il
        : { mark: d3, measure: d3 },
    Ni = 'FA "6.6.0"',
    Dv = (e) => (t2.mark("".concat(Ni, " ").concat(e, " begins")), () => Q6(e)),
    Q6 = (e) => {
      t2.mark("".concat(Ni, " ").concat(e, " ends")),
        t2.measure(
          "".concat(Ni, " ").concat(e),
          "".concat(Ni, " ").concat(e, " begins"),
          "".concat(Ni, " ").concat(e, " ends"),
        );
    };
  var z0 = { begin: Dv, end: Q6 };
  const kl = () => {};
  function f3(e) {
    return typeof (e.getAttribute ? e.getAttribute(Ms) : null) == "string";
  }
  function Gv(e) {
    const t = e.getAttribute ? e.getAttribute(I0) : null,
      r = e.getAttribute ? e.getAttribute(M0) : null;
    return t && r;
  }
  function Uv(e) {
    return (
      e &&
      e.classList &&
      e.classList.contains &&
      e.classList.contains(q.replacementClass)
    );
  }
  function $v() {
    return q.autoReplaceSvg === !0
      ? Ol.replace
      : Ol[q.autoReplaceSvg] || Ol.replace;
  }
  function Hv(e) {
    return Le.createElementNS("http://www.w3.org/2000/svg", e);
  }
  function Vv(e) {
    return Le.createElement(e);
  }
  function Y6(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const { ceFn: r = e.tag === "svg" ? Hv : Vv } = t;
    if (typeof e == "string") return Le.createTextNode(e);
    const n = r(e.tag);
    return (
      Object.keys(e.attributes || []).forEach(function (o) {
        n.setAttribute(o, e.attributes[o]);
      }),
      (e.children || []).forEach(function (o) {
        n.appendChild(Y6(o, { ceFn: r }));
      }),
      n
    );
  }
  function zv(e) {
    let t = " ".concat(e.outerHTML, " ");
    return (t = "".concat(t, "Font Awesome fontawesome.com ")), t;
  }
  const Ol = {
    replace: function (e) {
      const t = e[0];
      if (t.parentNode)
        if (
          (e[1].forEach((r) => {
            t.parentNode.insertBefore(Y6(r), t);
          }),
          t.getAttribute(Ms) === null && q.keepOriginalSource)
        ) {
          let r = Le.createComment(zv(t));
          t.parentNode.replaceChild(r, t);
        } else t.remove();
    },
    nest: function (e) {
      const t = e[0],
        r = e[1];
      if (~D0(t).indexOf(q.replacementClass)) return Ol.replace(e);
      const n = new RegExp("".concat(q.cssPrefix, "-.*"));
      if ((delete r[0].attributes.id, r[0].attributes.class)) {
        const o = r[0].attributes.class
          .split(" ")
          .reduce(
            (i, a) => (
              a === q.replacementClass || a.match(n)
                ? i.toSvg.push(a)
                : i.toNode.push(a),
              i
            ),
            { toNode: [], toSvg: [] },
          );
        (r[0].attributes.class = o.toSvg.join(" ")),
          o.toNode.length === 0
            ? t.removeAttribute("class")
            : t.setAttribute("class", o.toNode.join(" "));
      }
      const s = r.map((o) => Fa(o)).join(`
`);
      t.setAttribute(Ms, ""), (t.innerHTML = s);
    },
  };
  function p3(e) {
    e();
  }
  function X6(e, t) {
    const r = typeof t == "function" ? t : kl;
    if (e.length === 0) r();
    else {
      let n = p3;
      q.mutateApproach === Yg && (n = Yn.requestAnimationFrame || p3),
        n(() => {
          const s = $v(),
            o = z0.begin("mutate");
          e.map(s), o(), r();
        });
    }
  }
  let B0 = !1;
  function J6() {
    B0 = !0;
  }
  function r2() {
    B0 = !1;
  }
  let n1 = null;
  function h3(e) {
    if (!r3 || !q.observeMutations) return;
    const {
      treeCallback: t = kl,
      nodeCallback: r = kl,
      pseudoElementsCallback: n = kl,
      observeMutationsRoot: s = Le,
    } = e;
    (n1 = new r3((o) => {
      if (B0) return;
      const i = Xn();
      ri(o).forEach((a) => {
        if (
          (a.type === "childList" &&
            a.addedNodes.length > 0 &&
            !f3(a.addedNodes[0]) &&
            (q.searchPseudoElements && n(a.target), t(a.target)),
          a.type === "attributes" &&
            a.target.parentNode &&
            q.searchPseudoElements &&
            n(a.target.parentNode),
          a.type === "attributes" &&
            f3(a.target) &&
            ~nv.indexOf(a.attributeName))
        )
          if (a.attributeName === "class" && Gv(a.target)) {
            const { prefix: l, iconName: c } = k1(D0(a.target));
            a.target.setAttribute(I0, l || i),
              c && a.target.setAttribute(M0, c);
          } else Uv(a.target) && r(a.target);
      });
    })),
      mn &&
        n1.observe(s, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0,
        });
  }
  function Bv() {
    n1 && n1.disconnect();
  }
  function Wv(e) {
    const t = e.getAttribute("style");
    let r = [];
    return (
      t &&
        (r = t.split(";").reduce((n, s) => {
          const o = s.split(":"),
            i = o[0],
            a = o.slice(1);
          return i && a.length > 0 && (n[i] = a.join(":").trim()), n;
        }, {})),
      r
    );
  }
  function qv(e) {
    const t = e.getAttribute("data-prefix"),
      r = e.getAttribute("data-icon"),
      n = e.innerText !== void 0 ? e.innerText.trim() : "";
    let s = k1(D0(e));
    return (
      s.prefix || (s.prefix = Xn()),
      t && r && ((s.prefix = t), (s.iconName = r)),
      (s.iconName && s.prefix) ||
        (s.prefix &&
          n.length > 0 &&
          (s.iconName =
            Tv(s.prefix, e.innerText) || $0(s.prefix, Kc(e.innerText))),
        !s.iconName &&
          q.autoFetchSvg &&
          e.firstChild &&
          e.firstChild.nodeType === Node.TEXT_NODE &&
          (s.iconName = e.firstChild.data)),
      s
    );
  }
  function Zv(e) {
    const t = ri(e.attributes).reduce(
        (s, o) => (
          s.name !== "class" && s.name !== "style" && (s[o.name] = o.value), s
        ),
        {},
      ),
      r = e.getAttribute("title"),
      n = e.getAttribute("data-fa-title-id");
    return (
      q.autoA11y &&
        (r
          ? (t["aria-labelledby"] = ""
              .concat(q.replacementClass, "-title-")
              .concat(n || ma()))
          : ((t["aria-hidden"] = "true"), (t.focusable = "false"))),
      t
    );
  }
  function Kv() {
    return {
      iconName: null,
      title: null,
      titleId: null,
      prefix: null,
      transform: Hr,
      symbol: !1,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      extra: { classes: [], styles: {}, attributes: {} },
    };
  }
  function m3(e) {
    let t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { styleParser: !0 };
    const { iconName: r, prefix: n, rest: s } = qv(e),
      o = Zv(e),
      i = Yc("parseNodeAttributes", {}, e);
    let a = t.styleParser ? Wv(e) : [];
    return {
      iconName: r,
      title: e.getAttribute("title"),
      titleId: e.getAttribute("data-fa-title-id"),
      prefix: n,
      transform: Hr,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: s, styles: a, attributes: o },
      ...i,
    };
  }
  const { styles: Qv } = Vr;
  function e4(e) {
    const t = q.autoReplaceSvg === "nest" ? m3(e, { styleParser: !1 }) : m3(e);
    return ~t.extra.classes.indexOf(I6)
      ? Jn("generateLayersText", e, t)
      : Jn("generateSvgReplacementMutation", e, t);
  }
  let Wr = new Set();
  N6.map((e) => {
    Wr.add("fa-".concat(e));
  });
  Object.keys(ks[Ne]).map(Wr.add.bind(Wr));
  Object.keys(ks[Zt]).map(Wr.add.bind(Wr));
  Object.keys(ks[Kt]).map(Wr.add.bind(Wr));
  Wr = [...Wr];
  function g3(e) {
    let t =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!mn) return Promise.resolve();
    const r = Le.documentElement.classList,
      n = (d) => r.add("".concat(o3, "-").concat(d)),
      s = (d) => r.remove("".concat(o3, "-").concat(d)),
      o = q.autoFetchSvg
        ? Wr
        : N6.map((d) => "fa-".concat(d)).concat(Object.keys(Qv));
    o.includes("fa") || o.push("fa");
    const i = [".".concat(I6, ":not([").concat(Ms, "])")]
      .concat(o.map((d) => ".".concat(d, ":not([").concat(Ms, "])")))
      .join(", ");
    if (i.length === 0) return Promise.resolve();
    let a = [];
    try {
      a = ri(e.querySelectorAll(i));
    } catch {}
    if (a.length > 0) n("pending"), s("complete");
    else return Promise.resolve();
    const l = z0.begin("onTree"),
      c = a.reduce((d, p) => {
        try {
          const f = e4(p);
          f && d.push(f);
        } catch (f) {
          j6 || (f.name === "MissingIcon" && console.error(f));
        }
        return d;
      }, []);
    return new Promise((d, p) => {
      Promise.all(c)
        .then((f) => {
          X6(f, () => {
            n("active"),
              n("complete"),
              s("pending"),
              typeof t == "function" && t(),
              l(),
              d();
          });
        })
        .catch((f) => {
          l(), p(f);
        });
    });
  }
  function Yv(e) {
    let t =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    e4(e).then((r) => {
      r && X6([r], t);
    });
  }
  function Xv(e) {
    return function (t) {
      let r =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      const n = (t || {}).icon ? t : Xc(t || {});
      let { mask: s } = r;
      return (
        s && (s = (s || {}).icon ? s : Xc(s || {})), e(n, { ...r, mask: s })
      );
    };
  }
  const Jv = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {
      transform: r = Hr,
      symbol: n = !1,
      mask: s = null,
      maskId: o = null,
      title: i = null,
      titleId: a = null,
      classes: l = [],
      attributes: c = {},
      styles: d = {},
    } = t;
    if (!e) return;
    const { prefix: p, iconName: f, icon: y } = e;
    return O1(
      { type: "icon", ...e },
      () => (
        Ds("beforeDOMElementCreation", { iconDefinition: e, params: t }),
        q.autoA11y &&
          (i
            ? (c["aria-labelledby"] = ""
                .concat(q.replacementClass, "-title-")
                .concat(a || ma()))
            : ((c["aria-hidden"] = "true"), (c.focusable = "false"))),
        V0({
          icons: {
            main: Jc(y),
            mask: s
              ? Jc(s.icon)
              : { found: !1, width: null, height: null, icon: {} },
          },
          prefix: p,
          iconName: f,
          transform: { ...Hr, ...r },
          symbol: n,
          title: i,
          maskId: o,
          titleId: a,
          extra: { attributes: c, styles: d, classes: l },
        })
      ),
    );
  };
  var ey = {
      mixout() {
        return { icon: Xv(Jv) };
      },
      hooks() {
        return {
          mutationObserverCallbacks(e) {
            return (e.treeCallback = g3), (e.nodeCallback = Yv), e;
          },
        };
      },
      provides(e) {
        (e.i2svg = function (t) {
          const { node: r = Le, callback: n = () => {} } = t;
          return g3(r, n);
        }),
          (e.generateSvgReplacementMutation = function (t, r) {
            const {
              iconName: n,
              title: s,
              titleId: o,
              prefix: i,
              transform: a,
              symbol: l,
              mask: c,
              maskId: d,
              extra: p,
            } = r;
            return new Promise((f, y) => {
              Promise.all([
                e2(n, i),
                c.iconName
                  ? e2(c.iconName, c.prefix)
                  : Promise.resolve({
                      found: !1,
                      width: 512,
                      height: 512,
                      icon: {},
                    }),
              ])
                .then((b) => {
                  let [T, _] = b;
                  f([
                    t,
                    V0({
                      icons: { main: T, mask: _ },
                      prefix: i,
                      iconName: n,
                      transform: a,
                      symbol: l,
                      maskId: d,
                      title: s,
                      titleId: o,
                      extra: p,
                      watchable: !0,
                    }),
                  ]);
                })
                .catch(y);
            });
          }),
          (e.generateAbstractIcon = function (t) {
            let {
              children: r,
              attributes: n,
              main: s,
              transform: o,
              styles: i,
            } = t;
            const a = _1(i);
            a.length > 0 && (n.style = a);
            let l;
            return (
              G0(o) &&
                (l = Jn("generateAbstractTransformGrouping", {
                  main: s,
                  transform: o,
                  containerWidth: s.width,
                  iconWidth: s.width,
                })),
              r.push(l || s.icon),
              { children: r, attributes: n }
            );
          });
      },
    },
    ty = {
      mixout() {
        return {
          layer(e) {
            let t =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {};
            const { classes: r = [] } = t;
            return O1({ type: "layer" }, () => {
              Ds("beforeDOMElementCreation", { assembler: e, params: t });
              let n = [];
              return (
                e((s) => {
                  Array.isArray(s)
                    ? s.map((o) => {
                        n = n.concat(o.abstract);
                      })
                    : (n = n.concat(s.abstract));
                }),
                [
                  {
                    tag: "span",
                    attributes: {
                      class: ["".concat(q.cssPrefix, "-layers"), ...r].join(
                        " ",
                      ),
                    },
                    children: n,
                  },
                ]
              );
            });
          },
        };
      },
    },
    ry = {
      mixout() {
        return {
          counter(e) {
            let t =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {};
            const {
              title: r = null,
              classes: n = [],
              attributes: s = {},
              styles: o = {},
            } = t;
            return O1(
              { type: "counter", content: e },
              () => (
                Ds("beforeDOMElementCreation", { content: e, params: t }),
                Fv({
                  content: e.toString(),
                  title: r,
                  extra: {
                    attributes: s,
                    styles: o,
                    classes: ["".concat(q.cssPrefix, "-layers-counter"), ...n],
                  },
                })
              ),
            );
          },
        };
      },
    },
    ny = {
      mixout() {
        return {
          text(e) {
            let t =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {};
            const {
              transform: r = Hr,
              title: n = null,
              classes: s = [],
              attributes: o = {},
              styles: i = {},
            } = t;
            return O1(
              { type: "text", content: e },
              () => (
                Ds("beforeDOMElementCreation", { content: e, params: t }),
                c3({
                  content: e,
                  transform: { ...Hr, ...r },
                  title: n,
                  extra: {
                    attributes: o,
                    styles: i,
                    classes: ["".concat(q.cssPrefix, "-layers-text"), ...s],
                  },
                })
              ),
            );
          },
        };
      },
      provides(e) {
        e.generateLayersText = function (t, r) {
          const { title: n, transform: s, extra: o } = r;
          let i = null,
            a = null;
          if (k6) {
            const l = parseInt(getComputedStyle(t).fontSize, 10),
              c = t.getBoundingClientRect();
            (i = c.width / l), (a = c.height / l);
          }
          return (
            q.autoA11y && !n && (o.attributes["aria-hidden"] = "true"),
            Promise.resolve([
              t,
              c3({
                content: t.innerHTML,
                width: i,
                height: a,
                transform: s,
                title: n,
                extra: o,
                watchable: !0,
              }),
            ])
          );
        };
      },
    };
  const sy = new RegExp('"', "ug"),
    v3 = [1105920, 1112319],
    y3 = { FontAwesome: { normal: "fas", 400: "fas" }, ...Gg, ...Dg, ...qg },
    n2 = Object.keys(y3).reduce(
      (e, t) => ((e[t.toLowerCase()] = y3[t]), e),
      {},
    ),
    oy = Object.keys(n2).reduce((e, t) => {
      const r = n2[t];
      return (e[t] = r[900] || [...Object.entries(r)][0][1]), e;
    }, {});
  function iy(e) {
    const t = e.replace(sy, ""),
      r = vv(t, 0),
      n = r >= v3[0] && r <= v3[1],
      s = t.length === 2 ? t[0] === t[1] : !1;
    return { value: Kc(s ? t[0] : t), isSecondary: n || s };
  }
  function ay(e, t) {
    const r = e.replace(/^['"]|['"]$/g, "").toLowerCase(),
      n = parseInt(t),
      s = isNaN(n) ? "normal" : n;
    return (n2[r] || {})[s] || oy[r];
  }
  function C3(e, t) {
    const r = "".concat(Qg).concat(t.replace(":", "-"));
    return new Promise((n, s) => {
      if (e.getAttribute(r) !== null) return n();
      const i = ri(e.children).filter((f) => f.getAttribute(Bc) === t)[0],
        a = Yn.getComputedStyle(e, t),
        l = a.getPropertyValue("font-family"),
        c = l.match(tv),
        d = a.getPropertyValue("font-weight"),
        p = a.getPropertyValue("content");
      if (i && !c) return e.removeChild(i), n();
      if (c && p !== "none" && p !== "") {
        const f = a.getPropertyValue("content");
        let y = ay(l, d);
        const { value: b, isSecondary: T } = iy(f),
          _ = c[0].startsWith("FontAwesome");
        let g = $0(y, b),
          h = g;
        if (_) {
          const v = xv(b);
          v.iconName && v.prefix && ((g = v.iconName), (y = v.prefix));
        }
        if (
          g &&
          !T &&
          (!i || i.getAttribute(I0) !== y || i.getAttribute(M0) !== h)
        ) {
          e.setAttribute(r, h), i && e.removeChild(i);
          const v = Kv(),
            { extra: E } = v;
          (E.attributes[Bc] = t),
            e2(g, y)
              .then((P) => {
                const L = V0({
                    ...v,
                    icons: { main: P, mask: H0() },
                    prefix: y,
                    iconName: h,
                    extra: E,
                    watchable: !0,
                  }),
                  A = Le.createElementNS("http://www.w3.org/2000/svg", "svg");
                t === "::before"
                  ? e.insertBefore(A, e.firstChild)
                  : e.appendChild(A),
                  (A.outerHTML = L.map((j) => Fa(j)).join(`
`)),
                  e.removeAttribute(r),
                  n();
              })
              .catch(s);
        } else n();
      } else n();
    });
  }
  function ly(e) {
    return Promise.all([C3(e, "::before"), C3(e, "::after")]);
  }
  function uy(e) {
    return (
      e.parentNode !== document.head &&
      !~Xg.indexOf(e.tagName.toUpperCase()) &&
      !e.getAttribute(Bc) &&
      (!e.parentNode || e.parentNode.tagName !== "svg")
    );
  }
  function w3(e) {
    if (mn)
      return new Promise((t, r) => {
        const n = ri(e.querySelectorAll("*")).filter(uy).map(ly),
          s = z0.begin("searchPseudoElements");
        J6(),
          Promise.all(n)
            .then(() => {
              s(), r2(), t();
            })
            .catch(() => {
              s(), r2(), r();
            });
      });
  }
  var cy = {
    hooks() {
      return {
        mutationObserverCallbacks(e) {
          return (e.pseudoElementsCallback = w3), e;
        },
      };
    },
    provides(e) {
      e.pseudoElements2svg = function (t) {
        const { node: r = Le } = t;
        q.searchPseudoElements && w3(r);
      };
    },
  };
  let E3 = !1;
  var dy = {
    mixout() {
      return {
        dom: {
          unwatch() {
            J6(), (E3 = !0);
          },
        },
      };
    },
    hooks() {
      return {
        bootstrap() {
          h3(Yc("mutationObserverCallbacks", {}));
        },
        noAuto() {
          Bv();
        },
        watch(e) {
          const { observeMutationsRoot: t } = e;
          E3
            ? r2()
            : h3(Yc("mutationObserverCallbacks", { observeMutationsRoot: t }));
        },
      };
    },
  };
  const b3 = (e) => {
    let t = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
    return e
      .toLowerCase()
      .split(" ")
      .reduce((r, n) => {
        const s = n.toLowerCase().split("-"),
          o = s[0];
        let i = s.slice(1).join("-");
        if (o && i === "h") return (r.flipX = !0), r;
        if (o && i === "v") return (r.flipY = !0), r;
        if (((i = parseFloat(i)), isNaN(i))) return r;
        switch (o) {
          case "grow":
            r.size = r.size + i;
            break;
          case "shrink":
            r.size = r.size - i;
            break;
          case "left":
            r.x = r.x - i;
            break;
          case "right":
            r.x = r.x + i;
            break;
          case "up":
            r.y = r.y - i;
            break;
          case "down":
            r.y = r.y + i;
            break;
          case "rotate":
            r.rotate = r.rotate + i;
            break;
        }
        return r;
      }, t);
  };
  var fy = {
    mixout() {
      return { parse: { transform: (e) => b3(e) } };
    },
    hooks() {
      return {
        parseNodeAttributes(e, t) {
          const r = t.getAttribute("data-fa-transform");
          return r && (e.transform = b3(r)), e;
        },
      };
    },
    provides(e) {
      e.generateAbstractTransformGrouping = function (t) {
        let { main: r, transform: n, containerWidth: s, iconWidth: o } = t;
        const i = { transform: "translate(".concat(s / 2, " 256)") },
          a = "translate(".concat(n.x * 32, ", ").concat(n.y * 32, ") "),
          l = "scale("
            .concat((n.size / 16) * (n.flipX ? -1 : 1), ", ")
            .concat((n.size / 16) * (n.flipY ? -1 : 1), ") "),
          c = "rotate(".concat(n.rotate, " 0 0)"),
          d = { transform: "".concat(a, " ").concat(l, " ").concat(c) },
          p = { transform: "translate(".concat((o / 2) * -1, " -256)") },
          f = { outer: i, inner: d, path: p };
        return {
          tag: "g",
          attributes: { ...f.outer },
          children: [
            {
              tag: "g",
              attributes: { ...f.inner },
              children: [
                {
                  tag: r.icon.tag,
                  children: r.icon.children,
                  attributes: { ...r.icon.attributes, ...f.path },
                },
              ],
            },
          ],
        };
      };
    },
  };
  const Pu = { x: 0, y: 0, width: "100%", height: "100%" };
  function T3(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return (
      e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"),
      e
    );
  }
  function py(e) {
    return e.tag === "g" ? e.children : [e];
  }
  var hy = {
      hooks() {
        return {
          parseNodeAttributes(e, t) {
            const r = t.getAttribute("data-fa-mask"),
              n = r ? k1(r.split(" ").map((s) => s.trim())) : H0();
            return (
              n.prefix || (n.prefix = Xn()),
              (e.mask = n),
              (e.maskId = t.getAttribute("data-fa-mask-id")),
              e
            );
          },
        };
      },
      provides(e) {
        e.generateAbstractMask = function (t) {
          let {
            children: r,
            attributes: n,
            main: s,
            mask: o,
            maskId: i,
            transform: a,
          } = t;
          const { width: l, icon: c } = s,
            { width: d, icon: p } = o,
            f = dv({ transform: a, containerWidth: d, iconWidth: l }),
            y = { tag: "rect", attributes: { ...Pu, fill: "white" } },
            b = c.children ? { children: c.children.map(T3) } : {},
            T = {
              tag: "g",
              attributes: { ...f.inner },
              children: [
                T3({
                  tag: c.tag,
                  attributes: { ...c.attributes, ...f.path },
                  ...b,
                }),
              ],
            },
            _ = { tag: "g", attributes: { ...f.outer }, children: [T] },
            g = "mask-".concat(i || ma()),
            h = "clip-".concat(i || ma()),
            v = {
              tag: "mask",
              attributes: {
                ...Pu,
                id: g,
                maskUnits: "userSpaceOnUse",
                maskContentUnits: "userSpaceOnUse",
              },
              children: [y, _],
            },
            E = {
              tag: "defs",
              children: [
                { tag: "clipPath", attributes: { id: h }, children: py(p) },
                v,
              ],
            };
          return (
            r.push(E, {
              tag: "rect",
              attributes: {
                fill: "currentColor",
                "clip-path": "url(#".concat(h, ")"),
                mask: "url(#".concat(g, ")"),
                ...Pu,
              },
            }),
            { children: r, attributes: n }
          );
        };
      },
    },
    my = {
      provides(e) {
        let t = !1;
        Yn.matchMedia &&
          (t = Yn.matchMedia("(prefers-reduced-motion: reduce)").matches),
          (e.missingIconAbstract = function () {
            const r = [],
              n = { fill: "currentColor" },
              s = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s",
              };
            r.push({
              tag: "path",
              attributes: {
                ...n,
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
              },
            });
            const o = { ...s, attributeName: "opacity" },
              i = {
                tag: "circle",
                attributes: { ...n, cx: "256", cy: "364", r: "28" },
                children: [],
              };
            return (
              t ||
                i.children.push(
                  {
                    tag: "animate",
                    attributes: {
                      ...s,
                      attributeName: "r",
                      values: "28;14;28;28;14;28;",
                    },
                  },
                  {
                    tag: "animate",
                    attributes: { ...o, values: "1;0;1;1;0;1;" },
                  },
                ),
              r.push(i),
              r.push({
                tag: "path",
                attributes: {
                  ...n,
                  opacity: "1",
                  d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                },
                children: t
                  ? []
                  : [
                      {
                        tag: "animate",
                        attributes: { ...o, values: "1;0;0;0;0;1;" },
                      },
                    ],
              }),
              t ||
                r.push({
                  tag: "path",
                  attributes: {
                    ...n,
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                  },
                  children: [
                    {
                      tag: "animate",
                      attributes: { ...o, values: "0;0;1;1;0;0;" },
                    },
                  ],
                }),
              { tag: "g", attributes: { class: "missing" }, children: r }
            );
          });
      },
    },
    gy = {
      hooks() {
        return {
          parseNodeAttributes(e, t) {
            const r = t.getAttribute("data-fa-symbol"),
              n = r === null ? !1 : r === "" ? !0 : r;
            return (e.symbol = n), e;
          },
        };
      },
    },
    vy = [hv, ey, ty, ry, ny, cy, dy, fy, hy, my, gy];
  Ov(vy, { mixoutsTo: er });
  er.noAuto;
  er.config;
  er.library;
  er.dom;
  const s2 = er.parse;
  er.findIconDefinition;
  er.toHtml;
  const yy = er.icon;
  er.layer;
  er.text;
  er.counter;
  var t4 = { exports: {} },
    Cy = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    wy = Cy,
    Ey = wy;
  function r4() {}
  function n4() {}
  n4.resetWarningCache = r4;
  var by = function () {
    function e(n, s, o, i, a, l) {
      if (l !== Ey) {
        var c = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
        );
        throw ((c.name = "Invariant Violation"), c);
      }
    }
    e.isRequired = e;
    function t() {
      return e;
    }
    var r = {
      array: e,
      bigint: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      elementType: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t,
      checkPropTypes: n4,
      resetWarningCache: r4,
    };
    return (r.PropTypes = r), r;
  };
  t4.exports = by();
  var Ty = t4.exports;
  const ae = Sa(Ty);
  function x3(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (s) {
          return Object.getOwnPropertyDescriptor(e, s).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function Ur(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? x3(Object(r), !0).forEach(function (n) {
            mo(e, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : x3(Object(r)).forEach(function (n) {
              Object.defineProperty(
                e,
                n,
                Object.getOwnPropertyDescriptor(r, n),
              );
            });
    }
    return e;
  }
  function s1(e) {
    "@babel/helpers - typeof";
    return (
      (s1 =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                typeof Symbol == "function" &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      s1(e)
    );
  }
  function mo(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  function xy(e, t) {
    if (e == null) return {};
    var r = {},
      n = Object.keys(e),
      s,
      o;
    for (o = 0; o < n.length; o++)
      (s = n[o]), !(t.indexOf(s) >= 0) && (r[s] = e[s]);
    return r;
  }
  function _y(e, t) {
    if (e == null) return {};
    var r = xy(e, t),
      n,
      s;
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (s = 0; s < o.length; s++)
        (n = o[s]),
          !(t.indexOf(n) >= 0) &&
            Object.prototype.propertyIsEnumerable.call(e, n) &&
            (r[n] = e[n]);
    }
    return r;
  }
  function o2(e) {
    return Sy(e) || ky(e) || Oy(e) || Ay();
  }
  function Sy(e) {
    if (Array.isArray(e)) return i2(e);
  }
  function ky(e) {
    if (
      (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
      e["@@iterator"] != null
    )
      return Array.from(e);
  }
  function Oy(e, t) {
    if (e) {
      if (typeof e == "string") return i2(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      if (
        (r === "Object" && e.constructor && (r = e.constructor.name),
        r === "Map" || r === "Set")
      )
        return Array.from(e);
      if (
        r === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return i2(e, t);
    }
  }
  function i2(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  function Ay() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Py(e) {
    var t,
      r = e.beat,
      n = e.fade,
      s = e.beatFade,
      o = e.bounce,
      i = e.shake,
      a = e.flash,
      l = e.spin,
      c = e.spinPulse,
      d = e.spinReverse,
      p = e.pulse,
      f = e.fixedWidth,
      y = e.inverse,
      b = e.border,
      T = e.listItem,
      _ = e.flip,
      g = e.size,
      h = e.rotation,
      v = e.pull,
      E =
        ((t = {
          "fa-beat": r,
          "fa-fade": n,
          "fa-beat-fade": s,
          "fa-bounce": o,
          "fa-shake": i,
          "fa-flash": a,
          "fa-spin": l,
          "fa-spin-reverse": d,
          "fa-spin-pulse": c,
          "fa-pulse": p,
          "fa-fw": f,
          "fa-inverse": y,
          "fa-border": b,
          "fa-li": T,
          "fa-flip": _ === !0,
          "fa-flip-horizontal": _ === "horizontal" || _ === "both",
          "fa-flip-vertical": _ === "vertical" || _ === "both",
        }),
        mo(t, "fa-".concat(g), typeof g < "u" && g !== null),
        mo(t, "fa-rotate-".concat(h), typeof h < "u" && h !== null && h !== 0),
        mo(t, "fa-pull-".concat(v), typeof v < "u" && v !== null),
        mo(t, "fa-swap-opacity", e.swapOpacity),
        t);
    return Object.keys(E)
      .map(function (P) {
        return E[P] ? P : null;
      })
      .filter(function (P) {
        return P;
      });
  }
  function Ly(e) {
    return (e = e - 0), e === e;
  }
  function s4(e) {
    return Ly(e)
      ? e
      : ((e = e.replace(/[\-_\s]+(.)?/g, function (t, r) {
          return r ? r.toUpperCase() : "";
        })),
        e.substr(0, 1).toLowerCase() + e.substr(1));
  }
  var Ry = ["style"];
  function jy(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  function Ny(e) {
    return e
      .split(";")
      .map(function (t) {
        return t.trim();
      })
      .filter(function (t) {
        return t;
      })
      .reduce(function (t, r) {
        var n = r.indexOf(":"),
          s = s4(r.slice(0, n)),
          o = r.slice(n + 1).trim();
        return s.startsWith("webkit") ? (t[jy(s)] = o) : (t[s] = o), t;
      }, {});
  }
  function o4(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (typeof t == "string") return t;
    var n = (t.children || []).map(function (l) {
        return o4(e, l);
      }),
      s = Object.keys(t.attributes || {}).reduce(
        function (l, c) {
          var d = t.attributes[c];
          switch (c) {
            case "class":
              (l.attrs.className = d), delete t.attributes.class;
              break;
            case "style":
              l.attrs.style = Ny(d);
              break;
            default:
              c.indexOf("aria-") === 0 || c.indexOf("data-") === 0
                ? (l.attrs[c.toLowerCase()] = d)
                : (l.attrs[s4(c)] = d);
          }
          return l;
        },
        { attrs: {} },
      ),
      o = r.style,
      i = o === void 0 ? {} : o,
      a = _y(r, Ry);
    return (
      (s.attrs.style = Ur(Ur({}, s.attrs.style), i)),
      e.apply(void 0, [t.tag, Ur(Ur({}, s.attrs), a)].concat(o2(n)))
    );
  }
  var i4 = !1;
  try {
    i4 = !0;
  } catch {}
  function Fy() {
    if (!i4 && console && typeof console.error == "function") {
      var e;
      (e = console).error.apply(e, arguments);
    }
  }
  function _3(e) {
    if (e && s1(e) === "object" && e.prefix && e.iconName && e.icon) return e;
    if (s2.icon) return s2.icon(e);
    if (e === null) return null;
    if (e && s1(e) === "object" && e.prefix && e.iconName) return e;
    if (Array.isArray(e) && e.length === 2)
      return { prefix: e[0], iconName: e[1] };
    if (typeof e == "string") return { prefix: "fas", iconName: e };
  }
  function Lu(e, t) {
    return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
      ? mo({}, e, t)
      : {};
  }
  var S3 = {
      border: !1,
      className: "",
      mask: null,
      maskId: null,
      fixedWidth: !1,
      inverse: !1,
      flip: !1,
      icon: null,
      listItem: !1,
      pull: null,
      pulse: !1,
      rotation: null,
      size: null,
      spin: !1,
      spinPulse: !1,
      spinReverse: !1,
      beat: !1,
      fade: !1,
      beatFade: !1,
      bounce: !1,
      shake: !1,
      symbol: !1,
      title: "",
      titleId: null,
      transform: null,
      swapOpacity: !1,
    },
    Ee = H2.forwardRef(function (e, t) {
      var r = Ur(Ur({}, S3), e),
        n = r.icon,
        s = r.mask,
        o = r.symbol,
        i = r.className,
        a = r.title,
        l = r.titleId,
        c = r.maskId,
        d = _3(n),
        p = Lu("classes", [].concat(o2(Py(r)), o2((i || "").split(" ")))),
        f = Lu(
          "transform",
          typeof r.transform == "string"
            ? s2.transform(r.transform)
            : r.transform,
        ),
        y = Lu("mask", _3(s)),
        b = yy(
          d,
          Ur(
            Ur(Ur(Ur({}, p), f), y),
            {},
            { symbol: o, title: a, titleId: l, maskId: c },
          ),
        );
      if (!b) return Fy("Could not find icon", d), null;
      var T = b.abstract,
        _ = { ref: t };
      return (
        Object.keys(r).forEach(function (g) {
          S3.hasOwnProperty(g) || (_[g] = r[g]);
        }),
        Iy(T[0], _)
      );
    });
  Ee.displayName = "FontAwesomeIcon";
  Ee.propTypes = {
    beat: ae.bool,
    border: ae.bool,
    beatFade: ae.bool,
    bounce: ae.bool,
    className: ae.string,
    fade: ae.bool,
    flash: ae.bool,
    mask: ae.oneOfType([ae.object, ae.array, ae.string]),
    maskId: ae.string,
    fixedWidth: ae.bool,
    inverse: ae.bool,
    flip: ae.oneOf([!0, !1, "horizontal", "vertical", "both"]),
    icon: ae.oneOfType([ae.object, ae.array, ae.string]),
    listItem: ae.bool,
    pull: ae.oneOf(["right", "left"]),
    pulse: ae.bool,
    rotation: ae.oneOf([0, 90, 180, 270]),
    shake: ae.bool,
    size: ae.oneOf([
      "2xs",
      "xs",
      "sm",
      "lg",
      "xl",
      "2xl",
      "1x",
      "2x",
      "3x",
      "4x",
      "5x",
      "6x",
      "7x",
      "8x",
      "9x",
      "10x",
    ]),
    spin: ae.bool,
    spinPulse: ae.bool,
    spinReverse: ae.bool,
    symbol: ae.oneOfType([ae.bool, ae.string]),
    title: ae.string,
    titleId: ae.string,
    transform: ae.oneOfType([ae.string, ae.object]),
    swapOpacity: ae.bool,
  };
  var Iy = o4.bind(null, H2.createElement);
  const My = { variant: "edge-100" },
    W0 = N.createContext(My),
    Dy = oe("flex", {
      variants: {
        variant: {
          primary: "",
          success: "",
          error: "",
          warning: "",
          "edge-100": "",
        },
      },
      defaultVariants: { variant: "edge-100" },
    });
  function ur({ className: e, children: t, ...r }) {
    const { variant: n } = N.useContext(W0);
    return u.jsx("div", {
      className: U(Dy({ variant: n, className: e })),
      ...r,
      children: t,
    });
  }
  const Gy = oe(
    "flex border-l border-b pl-[0.7rem] bg-base-100 fill-mode-backward",
    {
      variants: {
        variant: {
          primary: "border-primary-100",
          success: "border-success-100",
          error: "border-error-100",
          warning: "border-warning-100",
          "edge-100": "border-edge-100",
        },
      },
      defaultVariants: { variant: "edge-100" },
    },
  );
  function jt({ className: e, children: t, ...r }) {
    const { variant: n } = N.useContext(W0);
    return u.jsx("div", {
      className: U(Gy({ variant: n, className: e })),
      ...r,
      children: t,
    });
  }
  const Uy = oe("flex items-center space-x-3", {
    variants: {
      variant: {
        primary: "text-primary-100",
        success: "text-success-100",
        error: "text-error-100",
        warning: "text-warning-100",
        "edge-100": "text-edge-100",
      },
    },
    defaultVariants: { variant: "edge-100" },
  });
  function Nt({ variant: e, className: t, children: r, ...n }) {
    return u.jsx(W0.Provider, {
      value: { variant: e },
      children: u.jsx("div", {
        className: U(Uy({ variant: e, className: t })),
        ...n,
        children: r,
      }),
    });
  }
  const $y = oe("flex");
  function Hy({ className: e, fillColor: t, ...r }) {
    return u.jsx("svg", {
      className: U($y({ className: e })),
      ...r,
      viewBox: "0 0 2500 2500",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: u.jsx("path", {
        className: t,
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2318.93 0H188.452C86.5476 0 0 80.5952 0 179.881V2320C0 2419.4 56.7857 2500 158.69 2500H2289.17C2391.19 2500 2500 2419.4 2500 2320V179.881C2500 80.5952 2420.95 0 2318.93 0ZM952.381 952.381H1288.93V1123.93H1292.62C1343.93 1031.43 1495.48 937.5 1682.86 937.5C2042.5 937.5 2142.86 1128.45 2142.86 1482.14V2142.86H1785.71V1547.26C1785.71 1388.93 1722.5 1250 1574.64 1250C1395.12 1250 1309.52 1371.55 1309.52 1571.07V2142.86H952.381V952.381ZM357.143 2142.86H714.286V952.381H357.143V2142.86ZM758.929 535.714C758.942 565.023 753.182 594.047 741.977 621.129C730.772 648.212 714.341 672.821 693.625 693.553C672.908 714.285 648.31 730.733 621.236 741.957C594.162 753.182 565.142 758.963 535.833 758.971C506.525 758.978 477.501 753.213 450.421 742.003C423.341 730.793 398.734 714.358 378.007 693.637C357.279 672.917 340.835 648.316 329.616 621.239C318.397 594.163 312.621 565.142 312.619 535.833C312.614 476.656 336.115 419.901 377.952 378.049C419.789 336.197 476.537 312.677 535.714 312.661C594.891 312.645 651.651 336.135 693.511 377.965C735.371 419.794 758.902 476.537 758.929 535.714Z",
      }),
    });
  }
  const gi = 0.2,
    vi = 0.5;
  function Vy() {
    return u.jsx(ja, {
      children: u.jsx("div", {
        className: "flex flex-1 justify-center md:items-center pt-[1rem]",
        children: u.jsx("div", {
          className:
            "flex flex-col pb-[3rem] md:flex-row md:justify-center items-center space-y-5 md:space-y-0 md:space-x-5 w-full",
          children: u.jsxs("div", {
            className:
              "flex p-[1rem] flex-col md:border-b md:border-l border-edge-100",
            children: [
              u.jsxs(Nt, {
                className: "text-[20pt] mb-[1rem]",
                variant: "primary",
                children: [
                  u.jsx(ur, { children: u.jsx(Ee, { icon: xg }) }),
                  u.jsx(jt, { children: "Contact me" }),
                ],
              }),
              u.jsxs("div", {
                className: "flex justify-center gap-3 flex-wrap",
                children: [
                  u.jsx(mi, {
                    className: "animate-[fadeInLeft_ease] fill-mode-backward",
                    style: {
                      animationDelay: `${gi * 1}s`,
                      animationDuration: `${vi}s`,
                    },
                    href: "mailto:debbal.lotfi.dev@gmail.com",
                    children: u.jsx(ig, {
                      fillColor:
                        "fill-edge-100 group-hover/button:fill-base-100",
                    }),
                  }),
                  u.jsx(mi, {
                    className: "animate-[fadeInLeft_ease] fill-mode-backward",
                    style: {
                      animationDelay: `${gi * 2}s`,
                      animationDuration: `${vi}s`,
                    },
                    href: "https://github.com/devlotfi",
                    target: "_blank",
                    children: u.jsx(lg, {
                      fillColor:
                        "fill-edge-100 group-hover/button:fill-base-100",
                    }),
                  }),
                  u.jsx(mi, {
                    className: "animate-[fadeInLeft_ease] fill-mode-backward",
                    style: {
                      animationDelay: `${gi * 3}s`,
                      animationDuration: `${vi}s`,
                    },
                    href: "https://www.linkedin.com/in/lotfi-debbal-64489a2ba/",
                    target: "_blank",
                    children: u.jsx(Hy, {
                      fillColor:
                        "fill-edge-100 group-hover/button:fill-base-100",
                    }),
                  }),
                  u.jsx(mi, {
                    className: "animate-[fadeInLeft_ease] fill-mode-backward",
                    style: {
                      animationDelay: `${gi * 4}s`,
                      animationDuration: `${vi}s`,
                    },
                    href: "https://x.com/LDebbal",
                    target: "_blank",
                    children: u.jsx(cg, {
                      fillColor:
                        "fill-edge-100 group-hover/button:fill-base-100",
                    }),
                  }),
                  u.jsx(mi, {
                    className: "animate-[fadeInLeft_ease] fill-mode-backward",
                    style: {
                      animationDelay: `${gi * 5}s`,
                      animationDuration: `${vi}s`,
                    },
                    href: "https://www.instagram.com/lotfi_debbal/",
                    target: "_blank",
                    children: u.jsx(fg, {
                      fillColor:
                        "fill-edge-100 group-hover/button:fill-base-100",
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }
  const zy = "/portfolio-v1/assets/developer-xqk0dqKy.svg",
    By = oe("flex flex-col text-[15pt] z-10", {
      variants: {
        variant: {
          primary: "",
          success: "",
          error: "",
          warning: "",
          "edge-100": "",
        },
      },
      defaultVariants: { variant: "edge-100" },
    });
  function Lt({ variant: e, className: t, children: r, ...n }) {
    return u.jsx("div", {
      className: U(By({ variant: e, className: t })),
      ...n,
      children: r,
    });
  }
  const Wy = "/portfolio-v1/assets/profile-BXqc2fVG.jpg",
    qy = oe("z-10 flex-1 text-center ml-[0.5rem]", {
      variants: {
        variant: {
          primary: "",
          success: "",
          error: "",
          warning: "",
          "edge-100": "",
        },
      },
      defaultVariants: { variant: "edge-100" },
    });
  function Ia({ variant: e, className: t, children: r, ...n }) {
    return u.jsx("div", {
      className: U(qy({ variant: e, className: t })),
      ...n,
      children: r,
    });
  }
  function Zy() {
    const e = N.useRef(null);
    return u.jsxs(ja, {
      children: [
        u.jsx("div", {
          className:
            "flex flex-col relative min-h-full justify-start items-center lg:justify-center p-[1.5rem] md:p-0",
          children: u.jsx("div", {
            className:
              "flex w-full md:max-w-[90%] xl:max-w-[55rem] md:min-h-[20rem] mt-[3rem] lg:mt-0 border border-edge-100 animate-[fadeInRight_1s_ease] fill-mode-backward",
            children: u.jsx("div", {
              className:
                "flex flex-1 p-[1.5rem] md:p-[2rem] border translate-x-[0.5rem] translate-y-[-0.5rem] border-edge-100 bg-base-100",
              children: u.jsxs("div", {
                className:
                  "flex flex-col md:flex-row flex-1 space-y-7 md:space-y-0 md:space-x-7",
                children: [
                  u.jsx("img", {
                    className:
                      "w-[10rem] md:w-[20rem] animate-[flipInX_1s_0.5s_ease] fill-mode-backward",
                    src: zy,
                    alt: "developer",
                  }),
                  u.jsxs("div", {
                    className: "flex flex-1 items-start  flex-col",
                    children: [
                      u.jsx("div", {
                        className:
                          "flex text-[17pt] md:text-[20pt] text-edge-100 animate-[fadeInUp_0.7s_0.3s_ease] fill-mode-backward",
                        children: "Hello, i am",
                      }),
                      u.jsx("div", {
                        className:
                          "flex text-[20pt] md:text-[25pt] text-primary-100 font-bold animate-[fadeInUp_0.7s_0.7s_ease] fill-mode-backward font-['Press_Start_2P']",
                        children: "DEBBAL LOTFI",
                      }),
                      u.jsx("div", {
                        className:
                          "flex text-[15pt] md:text-[20pt] text-edge-100 animate-[fadeInUp_0.7s_1s_ease] fill-mode-backward",
                        children: "I am a Full-Stack Web & Mobile developer",
                      }),
                      u.jsx(it, {
                        onClick: () => {
                          e.current &&
                            e.current.scrollIntoView({ behavior: "smooth" });
                        },
                        variant: "primary",
                        className:
                          "mt-[1rem] fill-mode-backward animate-[flipInX_1s_0.5s_ease]",
                        children: u.jsxs(st, {
                          children: [
                            u.jsx(Lt, { children: u.jsx(Ee, { icon: gg }) }),
                            u.jsx(Ia, { children: "About me" }),
                            u.jsx(ot, {}),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        }),
        u.jsx("div", {
          id: "about",
          className:
            "flex scroll-mt-[3rem] mt-[3rem] min-h-full justify-center items-start",
          ref: e,
          children: u.jsx("div", {
            className:
              "flex md:border border-edge-100 md:max-w-[90%] xl:max-w-[55rem]",
            children: u.jsxs("div", {
              className:
                "flex flex-col p-[1rem] translate-x-[0.5rem] translate-y-[-0.5rem] bg-base-100 items-start lg:flex-row md:border border-edge-100 space-y-5 lg:space-y-0 lg:space-x-5 text-edge-100",
              children: [
                u.jsx("img", {
                  className:
                    "h-[15rem] min-w-[15rem] border border-edge-100 bg-base-100",
                  src: Wy,
                  alt: "profile",
                }),
                u.jsxs("div", {
                  className: "flex flex-col space-y-3",
                  children: [
                    u.jsxs(Nt, {
                      className: "text-[23pt]",
                      variant: "primary",
                      children: [
                        u.jsx(ur, { children: u.jsx(Ee, { icon: Sg }) }),
                        u.jsx(jt, { children: "About me" }),
                      ],
                    }),
                    u.jsx("div", {
                      children:
                        "I am a passionate full-stack web developer with a comprehensive background in both front-end and back-end development, as well as mobile development. Throughout my career, I have worked on a diverse range of projects, building robust and scalable web and mobile applications. My expertise spans designing intuitive user interfaces, developing efficient server-side logic",
                    }),
                    u.jsx("div", {
                      children:
                        "I am committed to continuous learning and staying updated with the latest industry trends to deliver high-quality and innovative solutions. Whether working on a solo project or collaborating with a team, I strive to create user-centric applications that meet business objectives and provide exceptional user experiences.",
                    }),
                    u.jsxs("div", {
                      children: [
                        "I hold a Bachelor's degree in Information Systems and Software Engineering from",
                        " ",
                        u.jsx("a", {
                          className: "inline text-primary-100 underline",
                          href: "https://www.usthb.dz/",
                          target: "_blank",
                          children: "USTHB University",
                        }),
                        ", where I developed a strong foundation in software engineering principles.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      ],
    });
  }
  var Ma = class {
      constructor() {
        (this.listeners = new Set()),
          (this.subscribe = this.subscribe.bind(this));
      }
      subscribe(e) {
        return (
          this.listeners.add(e),
          this.onSubscribe(),
          () => {
            this.listeners.delete(e), this.onUnsubscribe();
          }
        );
      }
      hasListeners() {
        return this.listeners.size > 0;
      }
      onSubscribe() {}
      onUnsubscribe() {}
    },
    Qo = typeof window > "u" || "Deno" in globalThis;
  function ir() {}
  function Ky(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function a2(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0;
  }
  function a4(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0);
  }
  function ko(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function _r(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function k3(e, t) {
    const {
      type: r = "all",
      exact: n,
      fetchStatus: s,
      predicate: o,
      queryKey: i,
      stale: a,
    } = e;
    if (i) {
      if (n) {
        if (t.queryHash !== q0(i, t.options)) return !1;
      } else if (!va(t.queryKey, i)) return !1;
    }
    if (r !== "all") {
      const l = t.isActive();
      if ((r === "active" && !l) || (r === "inactive" && l)) return !1;
    }
    return !(
      (typeof a == "boolean" && t.isStale() !== a) ||
      (s && s !== t.state.fetchStatus) ||
      (o && !o(t))
    );
  }
  function O3(e, t) {
    const { exact: r, status: n, predicate: s, mutationKey: o } = e;
    if (o) {
      if (!t.options.mutationKey) return !1;
      if (r) {
        if (ga(t.options.mutationKey) !== ga(o)) return !1;
      } else if (!va(t.options.mutationKey, o)) return !1;
    }
    return !((n && t.state.status !== n) || (s && !s(t)));
  }
  function q0(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || ga)(e);
  }
  function ga(e) {
    return JSON.stringify(e, (t, r) =>
      u2(r)
        ? Object.keys(r)
            .sort()
            .reduce((n, s) => ((n[s] = r[s]), n), {})
        : r,
    );
  }
  function va(e, t) {
    return e === t
      ? !0
      : typeof e != typeof t
        ? !1
        : e && t && typeof e == "object" && typeof t == "object"
          ? !Object.keys(t).some((r) => !va(e[r], t[r]))
          : !1;
  }
  function l4(e, t) {
    if (e === t) return e;
    const r = A3(e) && A3(t);
    if (r || (u2(e) && u2(t))) {
      const n = r ? e : Object.keys(e),
        s = n.length,
        o = r ? t : Object.keys(t),
        i = o.length,
        a = r ? [] : {};
      let l = 0;
      for (let c = 0; c < i; c++) {
        const d = r ? c : o[c];
        ((!r && n.includes(d)) || r) && e[d] === void 0 && t[d] === void 0
          ? ((a[d] = void 0), l++)
          : ((a[d] = l4(e[d], t[d])), a[d] === e[d] && e[d] !== void 0 && l++);
      }
      return s === i && l === s ? e : a;
    }
    return t;
  }
  function l2(e, t) {
    if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const r in e) if (e[r] !== t[r]) return !1;
    return !0;
  }
  function A3(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length;
  }
  function u2(e) {
    if (!P3(e)) return !1;
    const t = e.constructor;
    if (t === void 0) return !0;
    const r = t.prototype;
    return !(
      !P3(r) ||
      !r.hasOwnProperty("isPrototypeOf") ||
      Object.getPrototypeOf(e) !== Object.prototype
    );
  }
  function P3(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
  }
  function Qy(e) {
    return new Promise((t) => {
      setTimeout(t, e);
    });
  }
  function c2(e, t, r) {
    return typeof r.structuralSharing == "function"
      ? r.structuralSharing(e, t)
      : r.structuralSharing !== !1
        ? l4(e, t)
        : t;
  }
  function Yy(e, t, r = 0) {
    const n = [...e, t];
    return r && n.length > r ? n.slice(1) : n;
  }
  function Xy(e, t, r = 0) {
    const n = [t, ...e];
    return r && n.length > r ? n.slice(0, -1) : n;
  }
  var u4 = Symbol();
  function c4(e, t) {
    return !e.queryFn && t != null && t.initialPromise
      ? () => t.initialPromise
      : !e.queryFn || e.queryFn === u4
        ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
        : e.queryFn;
  }
  var ys,
    Ln,
    Oo,
    q8,
    Jy =
      ((q8 = class extends Ma {
        constructor() {
          super();
          se(this, ys);
          se(this, Ln);
          se(this, Oo);
          W(this, Oo, (t) => {
            if (!Qo && window.addEventListener) {
              const r = () => t();
              return (
                window.addEventListener("visibilitychange", r, !1),
                () => {
                  window.removeEventListener("visibilitychange", r);
                }
              );
            }
          });
        }
        onSubscribe() {
          w(this, Ln) || this.setEventListener(w(this, Oo));
        }
        onUnsubscribe() {
          var t;
          this.hasListeners() ||
            ((t = w(this, Ln)) == null || t.call(this), W(this, Ln, void 0));
        }
        setEventListener(t) {
          var r;
          W(this, Oo, t),
            (r = w(this, Ln)) == null || r.call(this),
            W(
              this,
              Ln,
              t((n) => {
                typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
              }),
            );
        }
        setFocused(t) {
          w(this, ys) !== t && (W(this, ys, t), this.onFocus());
        }
        onFocus() {
          const t = this.isFocused();
          this.listeners.forEach((r) => {
            r(t);
          });
        }
        isFocused() {
          var t;
          return typeof w(this, ys) == "boolean"
            ? w(this, ys)
            : ((t = globalThis.document) == null
                ? void 0
                : t.visibilityState) !== "hidden";
        }
      }),
      (ys = new WeakMap()),
      (Ln = new WeakMap()),
      (Oo = new WeakMap()),
      q8),
    Z0 = new Jy(),
    Ao,
    Rn,
    Po,
    Z8,
    eC =
      ((Z8 = class extends Ma {
        constructor() {
          super();
          se(this, Ao, !0);
          se(this, Rn);
          se(this, Po);
          W(this, Po, (t) => {
            if (!Qo && window.addEventListener) {
              const r = () => t(!0),
                n = () => t(!1);
              return (
                window.addEventListener("online", r, !1),
                window.addEventListener("offline", n, !1),
                () => {
                  window.removeEventListener("online", r),
                    window.removeEventListener("offline", n);
                }
              );
            }
          });
        }
        onSubscribe() {
          w(this, Rn) || this.setEventListener(w(this, Po));
        }
        onUnsubscribe() {
          var t;
          this.hasListeners() ||
            ((t = w(this, Rn)) == null || t.call(this), W(this, Rn, void 0));
        }
        setEventListener(t) {
          var r;
          W(this, Po, t),
            (r = w(this, Rn)) == null || r.call(this),
            W(this, Rn, t(this.setOnline.bind(this)));
        }
        setOnline(t) {
          w(this, Ao) !== t &&
            (W(this, Ao, t),
            this.listeners.forEach((n) => {
              n(t);
            }));
        }
        isOnline() {
          return w(this, Ao);
        }
      }),
      (Ao = new WeakMap()),
      (Rn = new WeakMap()),
      (Po = new WeakMap()),
      Z8),
    o1 = new eC();
  function tC(e) {
    return Math.min(1e3 * 2 ** e, 3e4);
  }
  function d4(e) {
    return (e ?? "online") === "online" ? o1.isOnline() : !0;
  }
  var f4 = class extends Error {
    constructor(e) {
      super("CancelledError"),
        (this.revert = e == null ? void 0 : e.revert),
        (this.silent = e == null ? void 0 : e.silent);
    }
  };
  function Ru(e) {
    return e instanceof f4;
  }
  function p4(e) {
    let t = !1,
      r = 0,
      n = !1,
      s,
      o,
      i;
    const a = new Promise((g, h) => {
        (o = g), (i = h);
      }),
      l = (g) => {
        var h;
        n || (b(new f4(g)), (h = e.abort) == null || h.call(e));
      },
      c = () => {
        t = !0;
      },
      d = () => {
        t = !1;
      },
      p = () =>
        Z0.isFocused() &&
        (e.networkMode === "always" || o1.isOnline()) &&
        e.canRun(),
      f = () => d4(e.networkMode) && e.canRun(),
      y = (g) => {
        var h;
        n ||
          ((n = !0),
          (h = e.onSuccess) == null || h.call(e, g),
          s == null || s(),
          o(g));
      },
      b = (g) => {
        var h;
        n ||
          ((n = !0),
          (h = e.onError) == null || h.call(e, g),
          s == null || s(),
          i(g));
      },
      T = () =>
        new Promise((g) => {
          var h;
          (s = (v) => {
            (n || p()) && g(v);
          }),
            (h = e.onPause) == null || h.call(e);
        }).then(() => {
          var g;
          (s = void 0), n || (g = e.onContinue) == null || g.call(e);
        }),
      _ = () => {
        if (n) return;
        let g;
        const h = r === 0 ? e.initialPromise : void 0;
        try {
          g = h ?? e.fn();
        } catch (v) {
          g = Promise.reject(v);
        }
        Promise.resolve(g)
          .then(y)
          .catch((v) => {
            var j;
            if (n) return;
            const E = e.retry ?? (Qo ? 0 : 3),
              P = e.retryDelay ?? tC,
              L = typeof P == "function" ? P(r, v) : P,
              A =
                E === !0 ||
                (typeof E == "number" && r < E) ||
                (typeof E == "function" && E(r, v));
            if (t || !A) {
              b(v);
              return;
            }
            r++,
              (j = e.onFail) == null || j.call(e, r, v),
              Qy(L)
                .then(() => (p() ? void 0 : T()))
                .then(() => {
                  t ? b(v) : _();
                });
          });
      };
    return {
      promise: a,
      cancel: l,
      continue: () => (s == null || s(), a),
      cancelRetry: c,
      continueRetry: d,
      canStart: f,
      start: () => (f() ? _() : T().then(_), a),
    };
  }
  function rC() {
    let e = [],
      t = 0,
      r = (f) => {
        f();
      },
      n = (f) => {
        f();
      },
      s = (f) => setTimeout(f, 0);
    const o = (f) => {
        s = f;
      },
      i = (f) => {
        let y;
        t++;
        try {
          y = f();
        } finally {
          t--, t || c();
        }
        return y;
      },
      a = (f) => {
        t
          ? e.push(f)
          : s(() => {
              r(f);
            });
      },
      l =
        (f) =>
        (...y) => {
          a(() => {
            f(...y);
          });
        },
      c = () => {
        const f = e;
        (e = []),
          f.length &&
            s(() => {
              n(() => {
                f.forEach((y) => {
                  r(y);
                });
              });
            });
      };
    return {
      batch: i,
      batchCalls: l,
      schedule: a,
      setNotifyFunction: (f) => {
        r = f;
      },
      setBatchNotifyFunction: (f) => {
        n = f;
      },
      setScheduler: o,
    };
  }
  var at = rC(),
    Cs,
    K8,
    h4 =
      ((K8 = class {
        constructor() {
          se(this, Cs);
        }
        destroy() {
          this.clearGcTimeout();
        }
        scheduleGc() {
          this.clearGcTimeout(),
            a2(this.gcTime) &&
              W(
                this,
                Cs,
                setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime),
              );
        }
        updateGcTime(e) {
          this.gcTime = Math.max(
            this.gcTime || 0,
            e ?? (Qo ? 1 / 0 : 5 * 60 * 1e3),
          );
        }
        clearGcTimeout() {
          w(this, Cs) && (clearTimeout(w(this, Cs)), W(this, Cs, void 0));
        }
      }),
      (Cs = new WeakMap()),
      K8),
    Lo,
    Ro,
    or,
    pt,
    ba,
    ws,
    br,
    en,
    Q8,
    nC =
      ((Q8 = class extends h4 {
        constructor(t) {
          super();
          se(this, br);
          se(this, Lo);
          se(this, Ro);
          se(this, or);
          se(this, pt);
          se(this, ba);
          se(this, ws);
          W(this, ws, !1),
            W(this, ba, t.defaultOptions),
            this.setOptions(t.options),
            (this.observers = []),
            W(this, or, t.cache),
            (this.queryKey = t.queryKey),
            (this.queryHash = t.queryHash),
            W(this, Lo, sC(this.options)),
            (this.state = t.state ?? w(this, Lo)),
            this.scheduleGc();
        }
        get meta() {
          return this.options.meta;
        }
        get promise() {
          var t;
          return (t = w(this, pt)) == null ? void 0 : t.promise;
        }
        setOptions(t) {
          (this.options = { ...w(this, ba), ...t }),
            this.updateGcTime(this.options.gcTime);
        }
        optionalRemove() {
          !this.observers.length &&
            this.state.fetchStatus === "idle" &&
            w(this, or).remove(this);
        }
        setData(t, r) {
          const n = c2(this.state.data, t, this.options);
          return (
            pe(this, br, en).call(this, {
              data: n,
              type: "success",
              dataUpdatedAt: r == null ? void 0 : r.updatedAt,
              manual: r == null ? void 0 : r.manual,
            }),
            n
          );
        }
        setState(t, r) {
          pe(this, br, en).call(this, {
            type: "setState",
            state: t,
            setStateOptions: r,
          });
        }
        cancel(t) {
          var n, s;
          const r = (n = w(this, pt)) == null ? void 0 : n.promise;
          return (
            (s = w(this, pt)) == null || s.cancel(t),
            r ? r.then(ir).catch(ir) : Promise.resolve()
          );
        }
        destroy() {
          super.destroy(), this.cancel({ silent: !0 });
        }
        reset() {
          this.destroy(), this.setState(w(this, Lo));
        }
        isActive() {
          return this.observers.some((t) => _r(t.options.enabled, this) !== !1);
        }
        isDisabled() {
          return this.getObserversCount() > 0 && !this.isActive();
        }
        isStale() {
          return this.state.isInvalidated
            ? !0
            : this.getObserversCount() > 0
              ? this.observers.some((t) => t.getCurrentResult().isStale)
              : this.state.data === void 0;
        }
        isStaleByTime(t = 0) {
          return (
            this.state.isInvalidated ||
            this.state.data === void 0 ||
            !a4(this.state.dataUpdatedAt, t)
          );
        }
        onFocus() {
          var r;
          const t = this.observers.find((n) => n.shouldFetchOnWindowFocus());
          t == null || t.refetch({ cancelRefetch: !1 }),
            (r = w(this, pt)) == null || r.continue();
        }
        onOnline() {
          var r;
          const t = this.observers.find((n) => n.shouldFetchOnReconnect());
          t == null || t.refetch({ cancelRefetch: !1 }),
            (r = w(this, pt)) == null || r.continue();
        }
        addObserver(t) {
          this.observers.includes(t) ||
            (this.observers.push(t),
            this.clearGcTimeout(),
            w(this, or).notify({
              type: "observerAdded",
              query: this,
              observer: t,
            }));
        }
        removeObserver(t) {
          this.observers.includes(t) &&
            ((this.observers = this.observers.filter((r) => r !== t)),
            this.observers.length ||
              (w(this, pt) &&
                (w(this, ws)
                  ? w(this, pt).cancel({ revert: !0 })
                  : w(this, pt).cancelRetry()),
              this.scheduleGc()),
            w(this, or).notify({
              type: "observerRemoved",
              query: this,
              observer: t,
            }));
        }
        getObserversCount() {
          return this.observers.length;
        }
        invalidate() {
          this.state.isInvalidated ||
            pe(this, br, en).call(this, { type: "invalidate" });
        }
        fetch(t, r) {
          var l, c, d;
          if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && r != null && r.cancelRefetch)
              this.cancel({ silent: !0 });
            else if (w(this, pt))
              return w(this, pt).continueRetry(), w(this, pt).promise;
          }
          if ((t && this.setOptions(t), !this.options.queryFn)) {
            const p = this.observers.find((f) => f.options.queryFn);
            p && this.setOptions(p.options);
          }
          const n = new AbortController(),
            s = (p) => {
              Object.defineProperty(p, "signal", {
                enumerable: !0,
                get: () => (W(this, ws, !0), n.signal),
              });
            },
            o = () => {
              const p = c4(this.options, r),
                f = { queryKey: this.queryKey, meta: this.meta };
              return (
                s(f),
                W(this, ws, !1),
                this.options.persister
                  ? this.options.persister(p, f, this)
                  : p(f)
              );
            },
            i = {
              fetchOptions: r,
              options: this.options,
              queryKey: this.queryKey,
              state: this.state,
              fetchFn: o,
            };
          s(i),
            (l = this.options.behavior) == null || l.onFetch(i, this),
            W(this, Ro, this.state),
            (this.state.fetchStatus === "idle" ||
              this.state.fetchMeta !==
                ((c = i.fetchOptions) == null ? void 0 : c.meta)) &&
              pe(this, br, en).call(this, {
                type: "fetch",
                meta: (d = i.fetchOptions) == null ? void 0 : d.meta,
              });
          const a = (p) => {
            var f, y, b, T;
            (Ru(p) && p.silent) ||
              pe(this, br, en).call(this, { type: "error", error: p }),
              Ru(p) ||
                ((y = (f = w(this, or).config).onError) == null ||
                  y.call(f, p, this),
                (T = (b = w(this, or).config).onSettled) == null ||
                  T.call(b, this.state.data, p, this)),
              this.isFetchingOptimistic || this.scheduleGc(),
              (this.isFetchingOptimistic = !1);
          };
          return (
            W(
              this,
              pt,
              p4({
                initialPromise: r == null ? void 0 : r.initialPromise,
                fn: i.fetchFn,
                abort: n.abort.bind(n),
                onSuccess: (p) => {
                  var f, y, b, T;
                  if (p === void 0) {
                    a(new Error(`${this.queryHash} data is undefined`));
                    return;
                  }
                  this.setData(p),
                    (y = (f = w(this, or).config).onSuccess) == null ||
                      y.call(f, p, this),
                    (T = (b = w(this, or).config).onSettled) == null ||
                      T.call(b, p, this.state.error, this),
                    this.isFetchingOptimistic || this.scheduleGc(),
                    (this.isFetchingOptimistic = !1);
                },
                onError: a,
                onFail: (p, f) => {
                  pe(this, br, en).call(this, {
                    type: "failed",
                    failureCount: p,
                    error: f,
                  });
                },
                onPause: () => {
                  pe(this, br, en).call(this, { type: "pause" });
                },
                onContinue: () => {
                  pe(this, br, en).call(this, { type: "continue" });
                },
                retry: i.options.retry,
                retryDelay: i.options.retryDelay,
                networkMode: i.options.networkMode,
                canRun: () => !0,
              }),
            ),
            w(this, pt).start()
          );
        }
      }),
      (Lo = new WeakMap()),
      (Ro = new WeakMap()),
      (or = new WeakMap()),
      (pt = new WeakMap()),
      (ba = new WeakMap()),
      (ws = new WeakMap()),
      (br = new WeakSet()),
      (en = function (t) {
        const r = (n) => {
          switch (t.type) {
            case "failed":
              return {
                ...n,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error,
              };
            case "pause":
              return { ...n, fetchStatus: "paused" };
            case "continue":
              return { ...n, fetchStatus: "fetching" };
            case "fetch":
              return {
                ...n,
                ...m4(n.data, this.options),
                fetchMeta: t.meta ?? null,
              };
            case "success":
              return {
                ...n,
                data: t.data,
                dataUpdateCount: n.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!t.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              };
            case "error":
              const s = t.error;
              return Ru(s) && s.revert && w(this, Ro)
                ? { ...w(this, Ro), fetchStatus: "idle" }
                : {
                    ...n,
                    error: s,
                    errorUpdateCount: n.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: n.fetchFailureCount + 1,
                    fetchFailureReason: s,
                    fetchStatus: "idle",
                    status: "error",
                  };
            case "invalidate":
              return { ...n, isInvalidated: !0 };
            case "setState":
              return { ...n, ...t.state };
          }
        };
        (this.state = r(this.state)),
          at.batch(() => {
            this.observers.forEach((n) => {
              n.onQueryUpdate();
            }),
              w(this, or).notify({ query: this, type: "updated", action: t });
          });
      }),
      Q8);
  function m4(e, t) {
    return {
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchStatus: d4(t.networkMode) ? "fetching" : "paused",
      ...(e === void 0 && { error: null, status: "pending" }),
    };
  }
  function sC(e) {
    const t =
        typeof e.initialData == "function" ? e.initialData() : e.initialData,
      r = t !== void 0,
      n = r
        ? typeof e.initialDataUpdatedAt == "function"
          ? e.initialDataUpdatedAt()
          : e.initialDataUpdatedAt
        : 0;
    return {
      data: t,
      dataUpdateCount: 0,
      dataUpdatedAt: r ? (n ?? Date.now()) : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchMeta: null,
      isInvalidated: !1,
      status: r ? "success" : "pending",
      fetchStatus: "idle",
    };
  }
  var Ir,
    Y8,
    oC =
      ((Y8 = class extends Ma {
        constructor(t = {}) {
          super();
          se(this, Ir);
          (this.config = t), W(this, Ir, new Map());
        }
        build(t, r, n) {
          const s = r.queryKey,
            o = r.queryHash ?? q0(s, r);
          let i = this.get(o);
          return (
            i ||
              ((i = new nC({
                cache: this,
                queryKey: s,
                queryHash: o,
                options: t.defaultQueryOptions(r),
                state: n,
                defaultOptions: t.getQueryDefaults(s),
              })),
              this.add(i)),
            i
          );
        }
        add(t) {
          w(this, Ir).has(t.queryHash) ||
            (w(this, Ir).set(t.queryHash, t),
            this.notify({ type: "added", query: t }));
        }
        remove(t) {
          const r = w(this, Ir).get(t.queryHash);
          r &&
            (t.destroy(),
            r === t && w(this, Ir).delete(t.queryHash),
            this.notify({ type: "removed", query: t }));
        }
        clear() {
          at.batch(() => {
            this.getAll().forEach((t) => {
              this.remove(t);
            });
          });
        }
        get(t) {
          return w(this, Ir).get(t);
        }
        getAll() {
          return [...w(this, Ir).values()];
        }
        find(t) {
          const r = { exact: !0, ...t };
          return this.getAll().find((n) => k3(r, n));
        }
        findAll(t = {}) {
          const r = this.getAll();
          return Object.keys(t).length > 0 ? r.filter((n) => k3(t, n)) : r;
        }
        notify(t) {
          at.batch(() => {
            this.listeners.forEach((r) => {
              r(t);
            });
          });
        }
        onFocus() {
          at.batch(() => {
            this.getAll().forEach((t) => {
              t.onFocus();
            });
          });
        }
        onOnline() {
          at.batch(() => {
            this.getAll().forEach((t) => {
              t.onOnline();
            });
          });
        }
      }),
      (Ir = new WeakMap()),
      Y8),
    Mr,
    Ct,
    Es,
    Dr,
    Sn,
    X8,
    iC =
      ((X8 = class extends h4 {
        constructor(t) {
          super();
          se(this, Dr);
          se(this, Mr);
          se(this, Ct);
          se(this, Es);
          (this.mutationId = t.mutationId),
            W(this, Ct, t.mutationCache),
            W(this, Mr, []),
            (this.state = t.state || aC()),
            this.setOptions(t.options),
            this.scheduleGc();
        }
        setOptions(t) {
          (this.options = t), this.updateGcTime(this.options.gcTime);
        }
        get meta() {
          return this.options.meta;
        }
        addObserver(t) {
          w(this, Mr).includes(t) ||
            (w(this, Mr).push(t),
            this.clearGcTimeout(),
            w(this, Ct).notify({
              type: "observerAdded",
              mutation: this,
              observer: t,
            }));
        }
        removeObserver(t) {
          W(
            this,
            Mr,
            w(this, Mr).filter((r) => r !== t),
          ),
            this.scheduleGc(),
            w(this, Ct).notify({
              type: "observerRemoved",
              mutation: this,
              observer: t,
            });
        }
        optionalRemove() {
          w(this, Mr).length ||
            (this.state.status === "pending"
              ? this.scheduleGc()
              : w(this, Ct).remove(this));
        }
        continue() {
          var t;
          return (
            ((t = w(this, Es)) == null ? void 0 : t.continue()) ??
            this.execute(this.state.variables)
          );
        }
        async execute(t) {
          var s, o, i, a, l, c, d, p, f, y, b, T, _, g, h, v, E, P, L, A;
          W(
            this,
            Es,
            p4({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(t)
                  : Promise.reject(new Error("No mutationFn found")),
              onFail: (j, Z) => {
                pe(this, Dr, Sn).call(this, {
                  type: "failed",
                  failureCount: j,
                  error: Z,
                });
              },
              onPause: () => {
                pe(this, Dr, Sn).call(this, { type: "pause" });
              },
              onContinue: () => {
                pe(this, Dr, Sn).call(this, { type: "continue" });
              },
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => w(this, Ct).canRun(this),
            }),
          );
          const r = this.state.status === "pending",
            n = !w(this, Es).canStart();
          try {
            if (!r) {
              pe(this, Dr, Sn).call(this, {
                type: "pending",
                variables: t,
                isPaused: n,
              }),
                await ((o = (s = w(this, Ct).config).onMutate) == null
                  ? void 0
                  : o.call(s, t, this));
              const Z = await ((a = (i = this.options).onMutate) == null
                ? void 0
                : a.call(i, t));
              Z !== this.state.context &&
                pe(this, Dr, Sn).call(this, {
                  type: "pending",
                  context: Z,
                  variables: t,
                  isPaused: n,
                });
            }
            const j = await w(this, Es).start();
            return (
              await ((c = (l = w(this, Ct).config).onSuccess) == null
                ? void 0
                : c.call(l, j, t, this.state.context, this)),
              await ((p = (d = this.options).onSuccess) == null
                ? void 0
                : p.call(d, j, t, this.state.context)),
              await ((y = (f = w(this, Ct).config).onSettled) == null
                ? void 0
                : y.call(
                    f,
                    j,
                    null,
                    this.state.variables,
                    this.state.context,
                    this,
                  )),
              await ((T = (b = this.options).onSettled) == null
                ? void 0
                : T.call(b, j, null, t, this.state.context)),
              pe(this, Dr, Sn).call(this, { type: "success", data: j }),
              j
            );
          } catch (j) {
            try {
              throw (
                (await ((g = (_ = w(this, Ct).config).onError) == null
                  ? void 0
                  : g.call(_, j, t, this.state.context, this)),
                await ((v = (h = this.options).onError) == null
                  ? void 0
                  : v.call(h, j, t, this.state.context)),
                await ((P = (E = w(this, Ct).config).onSettled) == null
                  ? void 0
                  : P.call(
                      E,
                      void 0,
                      j,
                      this.state.variables,
                      this.state.context,
                      this,
                    )),
                await ((A = (L = this.options).onSettled) == null
                  ? void 0
                  : A.call(L, void 0, j, t, this.state.context)),
                j)
              );
            } finally {
              pe(this, Dr, Sn).call(this, { type: "error", error: j });
            }
          } finally {
            w(this, Ct).runNext(this);
          }
        }
      }),
      (Mr = new WeakMap()),
      (Ct = new WeakMap()),
      (Es = new WeakMap()),
      (Dr = new WeakSet()),
      (Sn = function (t) {
        const r = (n) => {
          switch (t.type) {
            case "failed":
              return {
                ...n,
                failureCount: t.failureCount,
                failureReason: t.error,
              };
            case "pause":
              return { ...n, isPaused: !0 };
            case "continue":
              return { ...n, isPaused: !1 };
            case "pending":
              return {
                ...n,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now(),
              };
            case "success":
              return {
                ...n,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1,
              };
            case "error":
              return {
                ...n,
                data: void 0,
                error: t.error,
                failureCount: n.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error",
              };
          }
        };
        (this.state = r(this.state)),
          at.batch(() => {
            w(this, Mr).forEach((n) => {
              n.onMutationUpdate(t);
            }),
              w(this, Ct).notify({
                mutation: this,
                type: "updated",
                action: t,
              });
          });
      }),
      X8);
  function aC() {
    return {
      context: void 0,
      data: void 0,
      error: null,
      failureCount: 0,
      failureReason: null,
      isPaused: !1,
      status: "idle",
      variables: void 0,
      submittedAt: 0,
    };
  }
  var Ht,
    Ta,
    J8,
    lC =
      ((J8 = class extends Ma {
        constructor(t = {}) {
          super();
          se(this, Ht);
          se(this, Ta);
          (this.config = t), W(this, Ht, new Map()), W(this, Ta, Date.now());
        }
        build(t, r, n) {
          const s = new iC({
            mutationCache: this,
            mutationId: ++$a(this, Ta)._,
            options: t.defaultMutationOptions(r),
            state: n,
          });
          return this.add(s), s;
        }
        add(t) {
          const r = al(t),
            n = w(this, Ht).get(r) ?? [];
          n.push(t),
            w(this, Ht).set(r, n),
            this.notify({ type: "added", mutation: t });
        }
        remove(t) {
          var n;
          const r = al(t);
          if (w(this, Ht).has(r)) {
            const s =
              (n = w(this, Ht).get(r)) == null
                ? void 0
                : n.filter((o) => o !== t);
            s &&
              (s.length === 0 ? w(this, Ht).delete(r) : w(this, Ht).set(r, s));
          }
          this.notify({ type: "removed", mutation: t });
        }
        canRun(t) {
          var n;
          const r =
            (n = w(this, Ht).get(al(t))) == null
              ? void 0
              : n.find((s) => s.state.status === "pending");
          return !r || r === t;
        }
        runNext(t) {
          var n;
          const r =
            (n = w(this, Ht).get(al(t))) == null
              ? void 0
              : n.find((s) => s !== t && s.state.isPaused);
          return (r == null ? void 0 : r.continue()) ?? Promise.resolve();
        }
        clear() {
          at.batch(() => {
            this.getAll().forEach((t) => {
              this.remove(t);
            });
          });
        }
        getAll() {
          return [...w(this, Ht).values()].flat();
        }
        find(t) {
          const r = { exact: !0, ...t };
          return this.getAll().find((n) => O3(r, n));
        }
        findAll(t = {}) {
          return this.getAll().filter((r) => O3(t, r));
        }
        notify(t) {
          at.batch(() => {
            this.listeners.forEach((r) => {
              r(t);
            });
          });
        }
        resumePausedMutations() {
          const t = this.getAll().filter((r) => r.state.isPaused);
          return at.batch(() =>
            Promise.all(t.map((r) => r.continue().catch(ir))),
          );
        }
      }),
      (Ht = new WeakMap()),
      (Ta = new WeakMap()),
      J8);
  function al(e) {
    var t;
    return (
      ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
    );
  }
  function uC(e) {
    return {
      onFetch: (t, r) => {
        const n = async () => {
          var b, T, _, g, h;
          const s = t.options,
            o =
              (_ =
                (T = (b = t.fetchOptions) == null ? void 0 : b.meta) == null
                  ? void 0
                  : T.fetchMore) == null
                ? void 0
                : _.direction,
            i = ((g = t.state.data) == null ? void 0 : g.pages) || [],
            a = ((h = t.state.data) == null ? void 0 : h.pageParams) || [],
            l = { pages: [], pageParams: [] };
          let c = !1;
          const d = (v) => {
              Object.defineProperty(v, "signal", {
                enumerable: !0,
                get: () => (
                  t.signal.aborted
                    ? (c = !0)
                    : t.signal.addEventListener("abort", () => {
                        c = !0;
                      }),
                  t.signal
                ),
              });
            },
            p = c4(t.options, t.fetchOptions),
            f = async (v, E, P) => {
              if (c) return Promise.reject();
              if (E == null && v.pages.length) return Promise.resolve(v);
              const L = {
                queryKey: t.queryKey,
                pageParam: E,
                direction: P ? "backward" : "forward",
                meta: t.options.meta,
              };
              d(L);
              const A = await p(L),
                { maxPages: j } = t.options,
                Z = P ? Xy : Yy;
              return {
                pages: Z(v.pages, A, j),
                pageParams: Z(v.pageParams, E, j),
              };
            };
          let y;
          if (o && i.length) {
            const v = o === "backward",
              E = v ? cC : L3,
              P = { pages: i, pageParams: a },
              L = E(s, P);
            y = await f(P, L, v);
          } else {
            y = await f(l, a[0] ?? s.initialPageParam);
            const v = e ?? i.length;
            for (let E = 1; E < v; E++) {
              const P = L3(s, y);
              if (P == null) break;
              y = await f(y, P);
            }
          }
          return y;
        };
        t.options.persister
          ? (t.fetchFn = () => {
              var s, o;
              return (o = (s = t.options).persister) == null
                ? void 0
                : o.call(
                    s,
                    n,
                    {
                      queryKey: t.queryKey,
                      meta: t.options.meta,
                      signal: t.signal,
                    },
                    r,
                  );
            })
          : (t.fetchFn = n);
      },
    };
  }
  function L3(e, { pages: t, pageParams: r }) {
    const n = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[n], t, r[n], r) : void 0;
  }
  function cC(e, { pages: t, pageParams: r }) {
    var n;
    return t.length > 0
      ? (n = e.getPreviousPageParam) == null
        ? void 0
        : n.call(e, t[0], t, r[0], r)
      : void 0;
  }
  var Ue,
    jn,
    Nn,
    jo,
    No,
    Fn,
    Fo,
    Io,
    ep,
    dC =
      ((ep = class {
        constructor(e = {}) {
          se(this, Ue);
          se(this, jn);
          se(this, Nn);
          se(this, jo);
          se(this, No);
          se(this, Fn);
          se(this, Fo);
          se(this, Io);
          W(this, Ue, e.queryCache || new oC()),
            W(this, jn, e.mutationCache || new lC()),
            W(this, Nn, e.defaultOptions || {}),
            W(this, jo, new Map()),
            W(this, No, new Map()),
            W(this, Fn, 0);
        }
        mount() {
          $a(this, Fn)._++,
            w(this, Fn) === 1 &&
              (W(
                this,
                Fo,
                Z0.subscribe(async (e) => {
                  e &&
                    (await this.resumePausedMutations(), w(this, Ue).onFocus());
                }),
              ),
              W(
                this,
                Io,
                o1.subscribe(async (e) => {
                  e &&
                    (await this.resumePausedMutations(),
                    w(this, Ue).onOnline());
                }),
              ));
        }
        unmount() {
          var e, t;
          $a(this, Fn)._--,
            w(this, Fn) === 0 &&
              ((e = w(this, Fo)) == null || e.call(this),
              W(this, Fo, void 0),
              (t = w(this, Io)) == null || t.call(this),
              W(this, Io, void 0));
        }
        isFetching(e) {
          return w(this, Ue).findAll({ ...e, fetchStatus: "fetching" }).length;
        }
        isMutating(e) {
          return w(this, jn).findAll({ ...e, status: "pending" }).length;
        }
        getQueryData(e) {
          var r;
          const t = this.defaultQueryOptions({ queryKey: e });
          return (r = w(this, Ue).get(t.queryHash)) == null
            ? void 0
            : r.state.data;
        }
        ensureQueryData(e) {
          const t = this.getQueryData(e.queryKey);
          if (t === void 0) return this.fetchQuery(e);
          {
            const r = this.defaultQueryOptions(e),
              n = w(this, Ue).build(this, r);
            return (
              e.revalidateIfStale &&
                n.isStaleByTime(ko(r.staleTime, n)) &&
                this.prefetchQuery(r),
              Promise.resolve(t)
            );
          }
        }
        getQueriesData(e) {
          return w(this, Ue)
            .findAll(e)
            .map(({ queryKey: t, state: r }) => {
              const n = r.data;
              return [t, n];
            });
        }
        setQueryData(e, t, r) {
          const n = this.defaultQueryOptions({ queryKey: e }),
            s = w(this, Ue).get(n.queryHash),
            o = s == null ? void 0 : s.state.data,
            i = Ky(t, o);
          if (i !== void 0)
            return w(this, Ue)
              .build(this, n)
              .setData(i, { ...r, manual: !0 });
        }
        setQueriesData(e, t, r) {
          return at.batch(() =>
            w(this, Ue)
              .findAll(e)
              .map(({ queryKey: n }) => [n, this.setQueryData(n, t, r)]),
          );
        }
        getQueryState(e) {
          var r;
          const t = this.defaultQueryOptions({ queryKey: e });
          return (r = w(this, Ue).get(t.queryHash)) == null ? void 0 : r.state;
        }
        removeQueries(e) {
          const t = w(this, Ue);
          at.batch(() => {
            t.findAll(e).forEach((r) => {
              t.remove(r);
            });
          });
        }
        resetQueries(e, t) {
          const r = w(this, Ue),
            n = { type: "active", ...e };
          return at.batch(
            () => (
              r.findAll(e).forEach((s) => {
                s.reset();
              }),
              this.refetchQueries(n, t)
            ),
          );
        }
        cancelQueries(e = {}, t = {}) {
          const r = { revert: !0, ...t },
            n = at.batch(() =>
              w(this, Ue)
                .findAll(e)
                .map((s) => s.cancel(r)),
            );
          return Promise.all(n).then(ir).catch(ir);
        }
        invalidateQueries(e = {}, t = {}) {
          return at.batch(() => {
            if (
              (w(this, Ue)
                .findAll(e)
                .forEach((n) => {
                  n.invalidate();
                }),
              e.refetchType === "none")
            )
              return Promise.resolve();
            const r = { ...e, type: e.refetchType ?? e.type ?? "active" };
            return this.refetchQueries(r, t);
          });
        }
        refetchQueries(e = {}, t) {
          const r = {
              ...t,
              cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0,
            },
            n = at.batch(() =>
              w(this, Ue)
                .findAll(e)
                .filter((s) => !s.isDisabled())
                .map((s) => {
                  let o = s.fetch(void 0, r);
                  return (
                    r.throwOnError || (o = o.catch(ir)),
                    s.state.fetchStatus === "paused" ? Promise.resolve() : o
                  );
                }),
            );
          return Promise.all(n).then(ir);
        }
        fetchQuery(e) {
          const t = this.defaultQueryOptions(e);
          t.retry === void 0 && (t.retry = !1);
          const r = w(this, Ue).build(this, t);
          return r.isStaleByTime(ko(t.staleTime, r))
            ? r.fetch(t)
            : Promise.resolve(r.state.data);
        }
        prefetchQuery(e) {
          return this.fetchQuery(e).then(ir).catch(ir);
        }
        fetchInfiniteQuery(e) {
          return (e.behavior = uC(e.pages)), this.fetchQuery(e);
        }
        prefetchInfiniteQuery(e) {
          return this.fetchInfiniteQuery(e).then(ir).catch(ir);
        }
        resumePausedMutations() {
          return o1.isOnline()
            ? w(this, jn).resumePausedMutations()
            : Promise.resolve();
        }
        getQueryCache() {
          return w(this, Ue);
        }
        getMutationCache() {
          return w(this, jn);
        }
        getDefaultOptions() {
          return w(this, Nn);
        }
        setDefaultOptions(e) {
          W(this, Nn, e);
        }
        setQueryDefaults(e, t) {
          w(this, jo).set(ga(e), { queryKey: e, defaultOptions: t });
        }
        getQueryDefaults(e) {
          const t = [...w(this, jo).values()];
          let r = {};
          return (
            t.forEach((n) => {
              va(e, n.queryKey) && (r = { ...r, ...n.defaultOptions });
            }),
            r
          );
        }
        setMutationDefaults(e, t) {
          w(this, No).set(ga(e), { mutationKey: e, defaultOptions: t });
        }
        getMutationDefaults(e) {
          const t = [...w(this, No).values()];
          let r = {};
          return (
            t.forEach((n) => {
              va(e, n.mutationKey) && (r = { ...r, ...n.defaultOptions });
            }),
            r
          );
        }
        defaultQueryOptions(e) {
          if (e._defaulted) return e;
          const t = {
            ...w(this, Nn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0,
          };
          return (
            t.queryHash || (t.queryHash = q0(t.queryKey, t)),
            t.refetchOnReconnect === void 0 &&
              (t.refetchOnReconnect = t.networkMode !== "always"),
            t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
            !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
            t.enabled !== !0 && t.queryFn === u4 && (t.enabled = !1),
            t
          );
        }
        defaultMutationOptions(e) {
          return e != null && e._defaulted
            ? e
            : {
                ...w(this, Nn).mutations,
                ...((e == null ? void 0 : e.mutationKey) &&
                  this.getMutationDefaults(e.mutationKey)),
                ...e,
                _defaulted: !0,
              };
        }
        clear() {
          w(this, Ue).clear(), w(this, jn).clear();
        }
      }),
      (Ue = new WeakMap()),
      (jn = new WeakMap()),
      (Nn = new WeakMap()),
      (jo = new WeakMap()),
      (No = new WeakMap()),
      (Fn = new WeakMap()),
      (Fo = new WeakMap()),
      (Io = new WeakMap()),
      ep),
    Pt,
    he,
    xa,
    wt,
    bs,
    Mo,
    Gr,
    _a,
    Do,
    Go,
    Ts,
    xs,
    In,
    Uo,
    ye,
    Fi,
    d2,
    f2,
    p2,
    h2,
    m2,
    g2,
    v2,
    g4,
    tp,
    fC =
      ((tp = class extends Ma {
        constructor(t, r) {
          super();
          se(this, ye);
          se(this, Pt);
          se(this, he);
          se(this, xa);
          se(this, wt);
          se(this, bs);
          se(this, Mo);
          se(this, Gr);
          se(this, _a);
          se(this, Do);
          se(this, Go);
          se(this, Ts);
          se(this, xs);
          se(this, In);
          se(this, Uo, new Set());
          (this.options = r),
            W(this, Pt, t),
            W(this, Gr, null),
            this.bindMethods(),
            this.setOptions(r);
        }
        bindMethods() {
          this.refetch = this.refetch.bind(this);
        }
        onSubscribe() {
          this.listeners.size === 1 &&
            (w(this, he).addObserver(this),
            R3(w(this, he), this.options)
              ? pe(this, ye, Fi).call(this)
              : this.updateResult(),
            pe(this, ye, h2).call(this));
        }
        onUnsubscribe() {
          this.hasListeners() || this.destroy();
        }
        shouldFetchOnReconnect() {
          return y2(w(this, he), this.options, this.options.refetchOnReconnect);
        }
        shouldFetchOnWindowFocus() {
          return y2(
            w(this, he),
            this.options,
            this.options.refetchOnWindowFocus,
          );
        }
        destroy() {
          (this.listeners = new Set()),
            pe(this, ye, m2).call(this),
            pe(this, ye, g2).call(this),
            w(this, he).removeObserver(this);
        }
        setOptions(t, r) {
          const n = this.options,
            s = w(this, he);
          if (
            ((this.options = w(this, Pt).defaultQueryOptions(t)),
            this.options.enabled !== void 0 &&
              typeof this.options.enabled != "boolean" &&
              typeof this.options.enabled != "function" &&
              typeof _r(this.options.enabled, w(this, he)) != "boolean")
          )
            throw new Error(
              "Expected enabled to be a boolean or a callback that returns a boolean",
            );
          pe(this, ye, v2).call(this),
            w(this, he).setOptions(this.options),
            n._defaulted &&
              !l2(this.options, n) &&
              w(this, Pt)
                .getQueryCache()
                .notify({
                  type: "observerOptionsUpdated",
                  query: w(this, he),
                  observer: this,
                });
          const o = this.hasListeners();
          o &&
            j3(w(this, he), s, this.options, n) &&
            pe(this, ye, Fi).call(this),
            this.updateResult(r),
            o &&
              (w(this, he) !== s ||
                _r(this.options.enabled, w(this, he)) !==
                  _r(n.enabled, w(this, he)) ||
                ko(this.options.staleTime, w(this, he)) !==
                  ko(n.staleTime, w(this, he))) &&
              pe(this, ye, d2).call(this);
          const i = pe(this, ye, f2).call(this);
          o &&
            (w(this, he) !== s ||
              _r(this.options.enabled, w(this, he)) !==
                _r(n.enabled, w(this, he)) ||
              i !== w(this, In)) &&
            pe(this, ye, p2).call(this, i);
        }
        getOptimisticResult(t) {
          const r = w(this, Pt).getQueryCache().build(w(this, Pt), t),
            n = this.createResult(r, t);
          return (
            hC(this, n) &&
              (W(this, wt, n),
              W(this, Mo, this.options),
              W(this, bs, w(this, he).state)),
            n
          );
        }
        getCurrentResult() {
          return w(this, wt);
        }
        trackResult(t, r) {
          const n = {};
          return (
            Object.keys(t).forEach((s) => {
              Object.defineProperty(n, s, {
                configurable: !1,
                enumerable: !0,
                get: () => (this.trackProp(s), r == null || r(s), t[s]),
              });
            }),
            n
          );
        }
        trackProp(t) {
          w(this, Uo).add(t);
        }
        getCurrentQuery() {
          return w(this, he);
        }
        refetch({ ...t } = {}) {
          return this.fetch({ ...t });
        }
        fetchOptimistic(t) {
          const r = w(this, Pt).defaultQueryOptions(t),
            n = w(this, Pt).getQueryCache().build(w(this, Pt), r);
          return (
            (n.isFetchingOptimistic = !0),
            n.fetch().then(() => this.createResult(n, r))
          );
        }
        fetch(t) {
          return pe(this, ye, Fi)
            .call(this, { ...t, cancelRefetch: t.cancelRefetch ?? !0 })
            .then(() => (this.updateResult(), w(this, wt)));
        }
        createResult(t, r) {
          var A;
          const n = w(this, he),
            s = this.options,
            o = w(this, wt),
            i = w(this, bs),
            a = w(this, Mo),
            c = t !== n ? t.state : w(this, xa),
            { state: d } = t;
          let p = { ...d },
            f = !1,
            y;
          if (r._optimisticResults) {
            const j = this.hasListeners(),
              Z = !j && R3(t, r),
              K = j && j3(t, n, r, s);
            (Z || K) && (p = { ...p, ...m4(d.data, t.options) }),
              r._optimisticResults === "isRestoring" &&
                (p.fetchStatus = "idle");
          }
          let { error: b, errorUpdatedAt: T, status: _ } = p;
          if (r.select && p.data !== void 0)
            if (
              o &&
              p.data === (i == null ? void 0 : i.data) &&
              r.select === w(this, _a)
            )
              y = w(this, Do);
            else
              try {
                W(this, _a, r.select),
                  (y = r.select(p.data)),
                  (y = c2(o == null ? void 0 : o.data, y, r)),
                  W(this, Do, y),
                  W(this, Gr, null);
              } catch (j) {
                W(this, Gr, j);
              }
          else y = p.data;
          if (r.placeholderData !== void 0 && y === void 0 && _ === "pending") {
            let j;
            if (
              o != null &&
              o.isPlaceholderData &&
              r.placeholderData === (a == null ? void 0 : a.placeholderData)
            )
              j = o.data;
            else if (
              ((j =
                typeof r.placeholderData == "function"
                  ? r.placeholderData(
                      (A = w(this, Go)) == null ? void 0 : A.state.data,
                      w(this, Go),
                    )
                  : r.placeholderData),
              r.select && j !== void 0)
            )
              try {
                (j = r.select(j)), W(this, Gr, null);
              } catch (Z) {
                W(this, Gr, Z);
              }
            j !== void 0 &&
              ((_ = "success"),
              (y = c2(o == null ? void 0 : o.data, j, r)),
              (f = !0));
          }
          w(this, Gr) &&
            ((b = w(this, Gr)),
            (y = w(this, Do)),
            (T = Date.now()),
            (_ = "error"));
          const g = p.fetchStatus === "fetching",
            h = _ === "pending",
            v = _ === "error",
            E = h && g,
            P = y !== void 0;
          return {
            status: _,
            fetchStatus: p.fetchStatus,
            isPending: h,
            isSuccess: _ === "success",
            isError: v,
            isInitialLoading: E,
            isLoading: E,
            data: y,
            dataUpdatedAt: p.dataUpdatedAt,
            error: b,
            errorUpdatedAt: T,
            failureCount: p.fetchFailureCount,
            failureReason: p.fetchFailureReason,
            errorUpdateCount: p.errorUpdateCount,
            isFetched: p.dataUpdateCount > 0 || p.errorUpdateCount > 0,
            isFetchedAfterMount:
              p.dataUpdateCount > c.dataUpdateCount ||
              p.errorUpdateCount > c.errorUpdateCount,
            isFetching: g,
            isRefetching: g && !h,
            isLoadingError: v && !P,
            isPaused: p.fetchStatus === "paused",
            isPlaceholderData: f,
            isRefetchError: v && P,
            isStale: K0(t, r),
            refetch: this.refetch,
          };
        }
        updateResult(t) {
          const r = w(this, wt),
            n = this.createResult(w(this, he), this.options);
          if (
            (W(this, bs, w(this, he).state),
            W(this, Mo, this.options),
            w(this, bs).data !== void 0 && W(this, Go, w(this, he)),
            l2(n, r))
          )
            return;
          W(this, wt, n);
          const s = {},
            o = () => {
              if (!r) return !0;
              const { notifyOnChangeProps: i } = this.options,
                a = typeof i == "function" ? i() : i;
              if (a === "all" || (!a && !w(this, Uo).size)) return !0;
              const l = new Set(a ?? w(this, Uo));
              return (
                this.options.throwOnError && l.add("error"),
                Object.keys(w(this, wt)).some((c) => {
                  const d = c;
                  return w(this, wt)[d] !== r[d] && l.has(d);
                })
              );
            };
          (t == null ? void 0 : t.listeners) !== !1 &&
            o() &&
            (s.listeners = !0),
            pe(this, ye, g4).call(this, { ...s, ...t });
        }
        onQueryUpdate() {
          this.updateResult(),
            this.hasListeners() && pe(this, ye, h2).call(this);
        }
      }),
      (Pt = new WeakMap()),
      (he = new WeakMap()),
      (xa = new WeakMap()),
      (wt = new WeakMap()),
      (bs = new WeakMap()),
      (Mo = new WeakMap()),
      (Gr = new WeakMap()),
      (_a = new WeakMap()),
      (Do = new WeakMap()),
      (Go = new WeakMap()),
      (Ts = new WeakMap()),
      (xs = new WeakMap()),
      (In = new WeakMap()),
      (Uo = new WeakMap()),
      (ye = new WeakSet()),
      (Fi = function (t) {
        pe(this, ye, v2).call(this);
        let r = w(this, he).fetch(this.options, t);
        return (t != null && t.throwOnError) || (r = r.catch(ir)), r;
      }),
      (d2 = function () {
        pe(this, ye, m2).call(this);
        const t = ko(this.options.staleTime, w(this, he));
        if (Qo || w(this, wt).isStale || !a2(t)) return;
        const n = a4(w(this, wt).dataUpdatedAt, t) + 1;
        W(
          this,
          Ts,
          setTimeout(() => {
            w(this, wt).isStale || this.updateResult();
          }, n),
        );
      }),
      (f2 = function () {
        return (
          (typeof this.options.refetchInterval == "function"
            ? this.options.refetchInterval(w(this, he))
            : this.options.refetchInterval) ?? !1
        );
      }),
      (p2 = function (t) {
        pe(this, ye, g2).call(this),
          W(this, In, t),
          !(
            Qo ||
            _r(this.options.enabled, w(this, he)) === !1 ||
            !a2(w(this, In)) ||
            w(this, In) === 0
          ) &&
            W(
              this,
              xs,
              setInterval(
                () => {
                  (this.options.refetchIntervalInBackground ||
                    Z0.isFocused()) &&
                    pe(this, ye, Fi).call(this);
                },
                w(this, In),
              ),
            );
      }),
      (h2 = function () {
        pe(this, ye, d2).call(this),
          pe(this, ye, p2).call(this, pe(this, ye, f2).call(this));
      }),
      (m2 = function () {
        w(this, Ts) && (clearTimeout(w(this, Ts)), W(this, Ts, void 0));
      }),
      (g2 = function () {
        w(this, xs) && (clearInterval(w(this, xs)), W(this, xs, void 0));
      }),
      (v2 = function () {
        const t = w(this, Pt).getQueryCache().build(w(this, Pt), this.options);
        if (t === w(this, he)) return;
        const r = w(this, he);
        W(this, he, t),
          W(this, xa, t.state),
          this.hasListeners() &&
            (r == null || r.removeObserver(this), t.addObserver(this));
      }),
      (g4 = function (t) {
        at.batch(() => {
          t.listeners &&
            this.listeners.forEach((r) => {
              r(w(this, wt));
            }),
            w(this, Pt)
              .getQueryCache()
              .notify({ query: w(this, he), type: "observerResultsUpdated" });
        });
      }),
      tp);
  function pC(e, t) {
    return (
      _r(t.enabled, e) !== !1 &&
      e.state.data === void 0 &&
      !(e.state.status === "error" && t.retryOnMount === !1)
    );
  }
  function R3(e, t) {
    return pC(e, t) || (e.state.data !== void 0 && y2(e, t, t.refetchOnMount));
  }
  function y2(e, t, r) {
    if (_r(t.enabled, e) !== !1) {
      const n = typeof r == "function" ? r(e) : r;
      return n === "always" || (n !== !1 && K0(e, t));
    }
    return !1;
  }
  function j3(e, t, r, n) {
    return (
      (e !== t || _r(n.enabled, e) === !1) &&
      (!r.suspense || e.state.status !== "error") &&
      K0(e, r)
    );
  }
  function K0(e, t) {
    return _r(t.enabled, e) !== !1 && e.isStaleByTime(ko(t.staleTime, e));
  }
  function hC(e, t) {
    return !l2(e.getCurrentResult(), t);
  }
  var v4 = N.createContext(void 0),
    mC = (e) => {
      const t = N.useContext(v4);
      if (!t)
        throw new Error(
          "No QueryClient set, use QueryClientProvider to set one",
        );
      return t;
    },
    gC = ({ client: e, children: t }) => (
      N.useEffect(
        () => (
          e.mount(),
          () => {
            e.unmount();
          }
        ),
        [e],
      ),
      u.jsx(v4.Provider, { value: e, children: t })
    ),
    y4 = N.createContext(!1),
    vC = () => N.useContext(y4);
  y4.Provider;
  function yC() {
    let e = !1;
    return {
      clearReset: () => {
        e = !1;
      },
      reset: () => {
        e = !0;
      },
      isReset: () => e,
    };
  }
  var CC = N.createContext(yC()),
    wC = () => N.useContext(CC);
  function EC(e, t) {
    return typeof e == "function" ? e(...t) : !!e;
  }
  var bC = (e, t) => {
      (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1));
    },
    TC = (e) => {
      N.useEffect(() => {
        e.clearReset();
      }, [e]);
    },
    xC = ({ result: e, errorResetBoundary: t, throwOnError: r, query: n }) =>
      e.isError && !t.isReset() && !e.isFetching && n && EC(r, [e.error, n]),
    _C = (e) => {
      e.suspense &&
        (typeof e.staleTime != "number" && (e.staleTime = 1e3),
        typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
    },
    SC = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending,
    kC = (e, t, r) =>
      t.fetchOptimistic(e).catch(() => {
        r.clearReset();
      });
  function OC(e, t, r) {
    var c, d, p, f;
    const n = mC(),
      s = vC(),
      o = wC(),
      i = n.defaultQueryOptions(e);
    (d =
      (c = n.getDefaultOptions().queries) == null
        ? void 0
        : c._experimental_beforeQuery) == null || d.call(c, i),
      (i._optimisticResults = s ? "isRestoring" : "optimistic"),
      _C(i),
      bC(i, o),
      TC(o);
    const [a] = N.useState(() => new t(n, i)),
      l = a.getOptimisticResult(i);
    if (
      (N.useSyncExternalStore(
        N.useCallback(
          (y) => {
            const b = s ? () => {} : a.subscribe(at.batchCalls(y));
            return a.updateResult(), b;
          },
          [a, s],
        ),
        () => a.getCurrentResult(),
        () => a.getCurrentResult(),
      ),
      N.useEffect(() => {
        a.setOptions(i, { listeners: !1 });
      }, [i, a]),
      SC(i, l))
    )
      throw kC(i, a, o);
    if (
      xC({
        result: l,
        errorResetBoundary: o,
        throwOnError: i.throwOnError,
        query: n.getQueryCache().get(i.queryHash),
      })
    )
      throw l.error;
    return (
      (f =
        (p = n.getDefaultOptions().queries) == null
          ? void 0
          : p._experimental_afterQuery) == null || f.call(p, i, l),
      i.notifyOnChangeProps ? l : a.trackResult(l)
    );
  }
  function C2(e, t) {
    return OC(e, fC);
  }
  const AC = { "Content-Type": "application/json" },
    PC = /\{[^{}]+\}/g;
  class LC extends Request {
    constructor(t, r) {
      super(t, r);
      for (const n in r) n in this || (this[n] = r[n]);
    }
  }
  function RC() {
    return Math.random().toString(36).slice(2, 11);
  }
  function jC(e) {
    let {
      baseUrl: t = "",
      fetch: r = globalThis.fetch,
      querySerializer: n,
      bodySerializer: s,
      headers: o,
      ...i
    } = { ...e };
    t.endsWith("/") && (t = t.substring(0, t.length - 1)), (o = F3(AC, o));
    const a = [];
    async function l(c, d) {
      const {
        fetch: p = r,
        headers: f,
        params: y = {},
        parseAs: b = "json",
        querySerializer: T,
        bodySerializer: _ = s ?? FC,
        ...g
      } = d || {};
      let h = typeof n == "function" ? n : N3(n);
      T &&
        (h =
          typeof T == "function"
            ? T
            : N3({ ...(typeof n == "object" ? n : {}), ...T }));
      const v = { redirect: "follow", ...i, ...g, headers: F3(o, f, y.header) };
      v.body &&
        ((v.body = _(v.body)),
        v.body instanceof FormData && v.headers.delete("Content-Type"));
      let E,
        P,
        L = new LC(IC(c, { baseUrl: t, params: y, querySerializer: h }), v);
      if (a.length) {
        (E = RC()),
          (P = Object.freeze({
            baseUrl: t,
            fetch: p,
            parseAs: b,
            querySerializer: h,
            bodySerializer: _,
          }));
        for (const Z of a)
          if (Z && typeof Z == "object" && typeof Z.onRequest == "function") {
            const K = await Z.onRequest({
              request: L,
              schemaPath: c,
              params: y,
              options: P,
              id: E,
            });
            if (K) {
              if (!(K instanceof Request))
                throw new Error(
                  "onRequest: must return new Request() when modifying the request",
                );
              L = K;
            }
          }
      }
      let A = await p(L);
      if (a.length)
        for (let Z = a.length - 1; Z >= 0; Z--) {
          const K = a[Z];
          if (K && typeof K == "object" && typeof K.onResponse == "function") {
            const X = await K.onResponse({
              request: L,
              response: A,
              schemaPath: c,
              params: y,
              options: P,
              id: E,
            });
            if (X) {
              if (!(X instanceof Response))
                throw new Error(
                  "onResponse: must return new Response() when modifying the response",
                );
              A = X;
            }
          }
        }
      if (A.status === 204 || A.headers.get("Content-Length") === "0")
        return A.ok ? { data: {}, response: A } : { error: {}, response: A };
      if (A.ok)
        return b === "stream"
          ? { data: A.body, response: A }
          : { data: await A[b](), response: A };
      let j = await A.text();
      try {
        j = JSON.parse(j);
      } catch {}
      return { error: j, response: A };
    }
    return {
      GET(c, d) {
        return l(c, { ...d, method: "GET" });
      },
      PUT(c, d) {
        return l(c, { ...d, method: "PUT" });
      },
      POST(c, d) {
        return l(c, { ...d, method: "POST" });
      },
      DELETE(c, d) {
        return l(c, { ...d, method: "DELETE" });
      },
      OPTIONS(c, d) {
        return l(c, { ...d, method: "OPTIONS" });
      },
      HEAD(c, d) {
        return l(c, { ...d, method: "HEAD" });
      },
      PATCH(c, d) {
        return l(c, { ...d, method: "PATCH" });
      },
      TRACE(c, d) {
        return l(c, { ...d, method: "TRACE" });
      },
      use(...c) {
        for (const d of c)
          if (d) {
            if (
              typeof d != "object" ||
              !("onRequest" in d || "onResponse" in d)
            )
              throw new Error(
                "Middleware must be an object with one of `onRequest()` or `onResponse()`",
              );
            a.push(d);
          }
      },
      eject(...c) {
        for (const d of c) {
          const p = a.indexOf(d);
          p !== -1 && a.splice(p, 1);
        }
      },
    };
  }
  function A1(e, t, r) {
    if (t == null) return "";
    if (typeof t == "object")
      throw new Error(
        "Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.",
      );
    return `${e}=${(r == null ? void 0 : r.allowReserved) === !0 ? t : encodeURIComponent(t)}`;
  }
  function C4(e, t, r) {
    if (!t || typeof t != "object") return "";
    const n = [],
      s = { simple: ",", label: ".", matrix: ";" }[r.style] || "&";
    if (r.style !== "deepObject" && r.explode === !1) {
      for (const a in t)
        n.push(a, r.allowReserved === !0 ? t[a] : encodeURIComponent(t[a]));
      const i = n.join(",");
      switch (r.style) {
        case "form":
          return `${e}=${i}`;
        case "label":
          return `.${i}`;
        case "matrix":
          return `;${e}=${i}`;
        default:
          return i;
      }
    }
    for (const i in t) {
      const a = r.style === "deepObject" ? `${e}[${i}]` : i;
      n.push(A1(a, t[i], r));
    }
    const o = n.join(s);
    return r.style === "label" || r.style === "matrix" ? `${s}${o}` : o;
  }
  function w4(e, t, r) {
    if (!Array.isArray(t)) return "";
    if (r.explode === !1) {
      const o =
          { form: ",", spaceDelimited: "%20", pipeDelimited: "|" }[r.style] ||
          ",",
        i = (
          r.allowReserved === !0 ? t : t.map((a) => encodeURIComponent(a))
        ).join(o);
      switch (r.style) {
        case "simple":
          return i;
        case "label":
          return `.${i}`;
        case "matrix":
          return `;${e}=${i}`;
        default:
          return `${e}=${i}`;
      }
    }
    const n = { simple: ",", label: ".", matrix: ";" }[r.style] || "&",
      s = [];
    for (const o of t)
      r.style === "simple" || r.style === "label"
        ? s.push(r.allowReserved === !0 ? o : encodeURIComponent(o))
        : s.push(A1(e, o, r));
    return r.style === "label" || r.style === "matrix"
      ? `${n}${s.join(n)}`
      : s.join(n);
  }
  function N3(e) {
    return function (r) {
      const n = [];
      if (r && typeof r == "object")
        for (const s in r) {
          const o = r[s];
          if (o != null) {
            if (Array.isArray(o)) {
              n.push(
                w4(s, o, {
                  style: "form",
                  explode: !0,
                  ...(e == null ? void 0 : e.array),
                  allowReserved: (e == null ? void 0 : e.allowReserved) || !1,
                }),
              );
              continue;
            }
            if (typeof o == "object") {
              n.push(
                C4(s, o, {
                  style: "deepObject",
                  explode: !0,
                  ...(e == null ? void 0 : e.object),
                  allowReserved: (e == null ? void 0 : e.allowReserved) || !1,
                }),
              );
              continue;
            }
            n.push(A1(s, o, e));
          }
        }
      return n.join("&");
    };
  }
  function NC(e, t) {
    let r = e;
    for (const n of e.match(PC) ?? []) {
      let s = n.substring(1, n.length - 1),
        o = !1,
        i = "simple";
      if (
        (s.endsWith("*") && ((o = !0), (s = s.substring(0, s.length - 1))),
        s.startsWith(".")
          ? ((i = "label"), (s = s.substring(1)))
          : s.startsWith(";") && ((i = "matrix"), (s = s.substring(1))),
        !t || t[s] === void 0 || t[s] === null)
      )
        continue;
      const a = t[s];
      if (Array.isArray(a)) {
        r = r.replace(n, w4(s, a, { style: i, explode: o }));
        continue;
      }
      if (typeof a == "object") {
        r = r.replace(n, C4(s, a, { style: i, explode: o }));
        continue;
      }
      if (i === "matrix") {
        r = r.replace(n, `;${A1(s, a)}`);
        continue;
      }
      r = r.replace(
        n,
        i === "label" ? `.${encodeURIComponent(a)}` : encodeURIComponent(a),
      );
    }
    return r;
  }
  function FC(e) {
    return e instanceof FormData ? e : JSON.stringify(e);
  }
  function IC(e, t) {
    var s;
    let r = `${t.baseUrl}${e}`;
    (s = t.params) != null && s.path && (r = NC(r, t.params.path));
    let n = t.querySerializer(t.params.query ?? {});
    return n.startsWith("?") && (n = n.substring(1)), n && (r += `?${n}`), r;
  }
  function F3(...e) {
    const t = new Headers();
    for (const r of e) {
      if (!r || typeof r != "object") continue;
      const n = r instanceof Headers ? r.entries() : Object.entries(r);
      for (const [s, o] of n)
        if (o === null) t.delete(s);
        else if (Array.isArray(o)) for (const i of o) t.append(s, i);
        else o !== void 0 && t.set(s, o);
    }
    return t;
  }
  const E4 = jC({ baseUrl: "https://portfolio-v1-tau-cyan.vercel.app" });
  function P1() {
    return typeof navigator == "object" && "userAgent" in navigator
      ? navigator.userAgent
      : typeof process == "object" && process.version !== void 0
        ? `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`
        : "<environment undetectable>";
  }
  function Q0(e, t, r, n) {
    if (typeof r != "function")
      throw new Error("method for before hook must be a function");
    return (
      n || (n = {}),
      Array.isArray(t)
        ? t.reverse().reduce((s, o) => Q0.bind(null, e, o, s, n), r)()
        : Promise.resolve().then(() =>
            e.registry[t]
              ? e.registry[t].reduce((s, o) => o.hook.bind(null, s, n), r)()
              : r(n),
          )
    );
  }
  function MC(e, t, r, n) {
    const s = n;
    e.registry[r] || (e.registry[r] = []),
      t === "before" &&
        (n = (o, i) =>
          Promise.resolve().then(s.bind(null, i)).then(o.bind(null, i))),
      t === "after" &&
        (n = (o, i) => {
          let a;
          return Promise.resolve()
            .then(o.bind(null, i))
            .then((l) => ((a = l), s(a, i)))
            .then(() => a);
        }),
      t === "error" &&
        (n = (o, i) =>
          Promise.resolve()
            .then(o.bind(null, i))
            .catch((a) => s(a, i))),
      e.registry[r].push({ hook: n, orig: s });
  }
  function DC(e, t, r) {
    if (!e.registry[t]) return;
    const n = e.registry[t].map((s) => s.orig).indexOf(r);
    n !== -1 && e.registry[t].splice(n, 1);
  }
  const I3 = Function.bind,
    M3 = I3.bind(I3);
  function b4(e, t, r) {
    const n = M3(DC, null).apply(null, r ? [t, r] : [t]);
    (e.api = { remove: n }),
      (e.remove = n),
      ["before", "error", "after", "wrap"].forEach((s) => {
        const o = r ? [t, s, r] : [t, s];
        e[s] = e.api[s] = M3(MC, null).apply(null, o);
      });
  }
  function GC() {
    const e = Symbol("Singular"),
      t = { registry: {} },
      r = Q0.bind(null, t, e);
    return b4(r, t, e), r;
  }
  function UC() {
    const e = { registry: {} },
      t = Q0.bind(null, e);
    return b4(t, e), t;
  }
  const $C = { Singular: GC, Collection: UC };
  var HC = "0.0.0-development",
    VC = `octokit-endpoint.js/${HC} ${P1()}`,
    zC = {
      method: "GET",
      baseUrl: "https://api.github.com",
      headers: { accept: "application/vnd.github.v3+json", "user-agent": VC },
      mediaType: { format: "" },
    };
  function BC(e) {
    return e
      ? Object.keys(e).reduce((t, r) => ((t[r.toLowerCase()] = e[r]), t), {})
      : {};
  }
  function WC(e) {
    if (
      typeof e != "object" ||
      e === null ||
      Object.prototype.toString.call(e) !== "[object Object]"
    )
      return !1;
    const t = Object.getPrototypeOf(e);
    if (t === null) return !0;
    const r =
      Object.prototype.hasOwnProperty.call(t, "constructor") && t.constructor;
    return (
      typeof r == "function" &&
      r instanceof r &&
      Function.prototype.call(r) === Function.prototype.call(e)
    );
  }
  function T4(e, t) {
    const r = Object.assign({}, e);
    return (
      Object.keys(t).forEach((n) => {
        WC(t[n])
          ? n in e
            ? (r[n] = T4(e[n], t[n]))
            : Object.assign(r, { [n]: t[n] })
          : Object.assign(r, { [n]: t[n] });
      }),
      r
    );
  }
  function D3(e) {
    for (const t in e) e[t] === void 0 && delete e[t];
    return e;
  }
  function w2(e, t, r) {
    var s;
    if (typeof t == "string") {
      let [o, i] = t.split(" ");
      r = Object.assign(i ? { method: o, url: i } : { url: o }, r);
    } else r = Object.assign({}, t);
    (r.headers = BC(r.headers)), D3(r), D3(r.headers);
    const n = T4(e || {}, r);
    return (
      r.url === "/graphql" &&
        (e &&
          (s = e.mediaType.previews) != null &&
          s.length &&
          (n.mediaType.previews = e.mediaType.previews
            .filter((o) => !n.mediaType.previews.includes(o))
            .concat(n.mediaType.previews)),
        (n.mediaType.previews = (n.mediaType.previews || []).map((o) =>
          o.replace(/-preview/, ""),
        ))),
      n
    );
  }
  function qC(e, t) {
    const r = /\?/.test(e) ? "&" : "?",
      n = Object.keys(t);
    return n.length === 0
      ? e
      : e +
          r +
          n
            .map((s) =>
              s === "q"
                ? "q=" + t.q.split("+").map(encodeURIComponent).join("+")
                : `${s}=${encodeURIComponent(t[s])}`,
            )
            .join("&");
  }
  var ZC = /\{[^}]+\}/g;
  function KC(e) {
    return e.replace(/^\W+|\W+$/g, "").split(/,/);
  }
  function QC(e) {
    const t = e.match(ZC);
    return t ? t.map(KC).reduce((r, n) => r.concat(n), []) : [];
  }
  function G3(e, t) {
    const r = { __proto__: null };
    for (const n of Object.keys(e)) t.indexOf(n) === -1 && (r[n] = e[n]);
    return r;
  }
  function x4(e) {
    return e
      .split(/(%[0-9A-Fa-f]{2})/g)
      .map(function (t) {
        return (
          /%[0-9A-Fa-f]/.test(t) ||
            (t = encodeURI(t).replace(/%5B/g, "[").replace(/%5D/g, "]")),
          t
        );
      })
      .join("");
  }
  function go(e) {
    return encodeURIComponent(e).replace(/[!'()*]/g, function (t) {
      return "%" + t.charCodeAt(0).toString(16).toUpperCase();
    });
  }
  function yi(e, t, r) {
    return (
      (t = e === "+" || e === "#" ? x4(t) : go(t)), r ? go(r) + "=" + t : t
    );
  }
  function Ys(e) {
    return e != null;
  }
  function ju(e) {
    return e === ";" || e === "&" || e === "?";
  }
  function YC(e, t, r, n) {
    var s = e[r],
      o = [];
    if (Ys(s) && s !== "")
      if (typeof s == "string" || typeof s == "number" || typeof s == "boolean")
        (s = s.toString()),
          n && n !== "*" && (s = s.substring(0, parseInt(n, 10))),
          o.push(yi(t, s, ju(t) ? r : ""));
      else if (n === "*")
        Array.isArray(s)
          ? s.filter(Ys).forEach(function (i) {
              o.push(yi(t, i, ju(t) ? r : ""));
            })
          : Object.keys(s).forEach(function (i) {
              Ys(s[i]) && o.push(yi(t, s[i], i));
            });
      else {
        const i = [];
        Array.isArray(s)
          ? s.filter(Ys).forEach(function (a) {
              i.push(yi(t, a));
            })
          : Object.keys(s).forEach(function (a) {
              Ys(s[a]) && (i.push(go(a)), i.push(yi(t, s[a].toString())));
            }),
          ju(t)
            ? o.push(go(r) + "=" + i.join(","))
            : i.length !== 0 && o.push(i.join(","));
      }
    else
      t === ";"
        ? Ys(s) && o.push(go(r))
        : s === "" && (t === "&" || t === "?")
          ? o.push(go(r) + "=")
          : s === "" && o.push("");
    return o;
  }
  function XC(e) {
    return { expand: JC.bind(null, e) };
  }
  function JC(e, t) {
    var r = ["+", "#", ".", "/", ";", "?", "&"];
    return (
      (e = e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (n, s, o) {
        if (s) {
          let a = "";
          const l = [];
          if (
            (r.indexOf(s.charAt(0)) !== -1 &&
              ((a = s.charAt(0)), (s = s.substr(1))),
            s.split(/,/g).forEach(function (c) {
              var d = /([^:\*]*)(?::(\d+)|(\*))?/.exec(c);
              l.push(YC(t, a, d[1], d[2] || d[3]));
            }),
            a && a !== "+")
          ) {
            var i = ",";
            return (
              a === "?" ? (i = "&") : a !== "#" && (i = a),
              (l.length !== 0 ? a : "") + l.join(i)
            );
          } else return l.join(",");
        } else return x4(o);
      })),
      e === "/" ? e : e.replace(/\/$/, "")
    );
  }
  function _4(e) {
    var d;
    let t = e.method.toUpperCase(),
      r = (e.url || "/").replace(/:([a-z]\w+)/g, "{$1}"),
      n = Object.assign({}, e.headers),
      s,
      o = G3(e, [
        "method",
        "baseUrl",
        "url",
        "headers",
        "request",
        "mediaType",
      ]);
    const i = QC(r);
    (r = XC(r).expand(o)), /^http/.test(r) || (r = e.baseUrl + r);
    const a = Object.keys(e)
        .filter((p) => i.includes(p))
        .concat("baseUrl"),
      l = G3(o, a);
    if (
      !/application\/octet-stream/i.test(n.accept) &&
      (e.mediaType.format &&
        (n.accept = n.accept
          .split(/,/)
          .map((p) =>
            p.replace(
              /application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,
              `application/vnd$1$2.${e.mediaType.format}`,
            ),
          )
          .join(",")),
      r.endsWith("/graphql") && (d = e.mediaType.previews) != null && d.length)
    ) {
      const p = n.accept.match(/[\w-]+(?=-preview)/g) || [];
      n.accept = p
        .concat(e.mediaType.previews)
        .map((f) => {
          const y = e.mediaType.format ? `.${e.mediaType.format}` : "+json";
          return `application/vnd.github.${f}-preview${y}`;
        })
        .join(",");
    }
    return (
      ["GET", "HEAD"].includes(t)
        ? (r = qC(r, l))
        : "data" in l
          ? (s = l.data)
          : Object.keys(l).length && (s = l),
      !n["content-type"] &&
        typeof s < "u" &&
        (n["content-type"] = "application/json; charset=utf-8"),
      ["PATCH", "PUT"].includes(t) && typeof s > "u" && (s = ""),
      Object.assign(
        { method: t, url: r, headers: n },
        typeof s < "u" ? { body: s } : null,
        e.request ? { request: e.request } : null,
      )
    );
  }
  function ew(e, t, r) {
    return _4(w2(e, t, r));
  }
  function S4(e, t) {
    const r = w2(e, t),
      n = ew.bind(null, r);
    return Object.assign(n, {
      DEFAULTS: r,
      defaults: S4.bind(null, r),
      merge: w2.bind(null, r),
      parse: _4,
    });
  }
  var tw = S4(null, zC);
  class Ii extends Error {
    constructor(r, n, s) {
      super(r);
      Ke(this, "name");
      Ke(this, "status");
      Ke(this, "request");
      Ke(this, "response");
      (this.name = "HttpError"),
        (this.status = Number.parseInt(n)),
        Number.isNaN(this.status) && (this.status = 0),
        "response" in s && (this.response = s.response);
      const o = Object.assign({}, s.request);
      s.request.headers.authorization &&
        (o.headers = Object.assign({}, s.request.headers, {
          authorization: s.request.headers.authorization.replace(
            / .*$/,
            " [REDACTED]",
          ),
        })),
        (o.url = o.url
          .replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]")
          .replace(/\baccess_token=\w+/g, "access_token=[REDACTED]")),
        (this.request = o);
    }
  }
  var rw = "0.0.0-development",
    nw = { headers: { "user-agent": `octokit-request.js/${rw} ${P1()}` } };
  function sw(e) {
    if (
      typeof e != "object" ||
      e === null ||
      Object.prototype.toString.call(e) !== "[object Object]"
    )
      return !1;
    const t = Object.getPrototypeOf(e);
    if (t === null) return !0;
    const r =
      Object.prototype.hasOwnProperty.call(t, "constructor") && t.constructor;
    return (
      typeof r == "function" &&
      r instanceof r &&
      Function.prototype.call(r) === Function.prototype.call(e)
    );
  }
  async function U3(e) {
    var p, f, y, b, T;
    const t = ((p = e.request) == null ? void 0 : p.fetch) || globalThis.fetch;
    if (!t)
      throw new Error(
        "fetch is not set. Please pass a fetch implementation as new Octokit({ request: { fetch }}). Learn more at https://github.com/octokit/octokit.js/#fetch-missing",
      );
    const r = ((f = e.request) == null ? void 0 : f.log) || console,
      n =
        ((y = e.request) == null ? void 0 : y.parseSuccessResponseBody) !== !1,
      s = sw(e.body) || Array.isArray(e.body) ? JSON.stringify(e.body) : e.body,
      o = Object.fromEntries(
        Object.entries(e.headers).map(([_, g]) => [_, String(g)]),
      );
    let i;
    try {
      i = await t(e.url, {
        method: e.method,
        body: s,
        redirect: (b = e.request) == null ? void 0 : b.redirect,
        headers: o,
        signal: (T = e.request) == null ? void 0 : T.signal,
        ...(e.body && { duplex: "half" }),
      });
    } catch (_) {
      let g = "Unknown Error";
      if (_ instanceof Error) {
        if (_.name === "AbortError") throw ((_.status = 500), _);
        (g = _.message),
          _.name === "TypeError" &&
            "cause" in _ &&
            (_.cause instanceof Error
              ? (g = _.cause.message)
              : typeof _.cause == "string" && (g = _.cause));
      }
      const h = new Ii(g, 500, { request: e });
      throw ((h.cause = _), h);
    }
    const a = i.status,
      l = i.url,
      c = {};
    for (const [_, g] of i.headers) c[_] = g;
    const d = { url: l, status: a, headers: c, data: "" };
    if ("deprecation" in c) {
      const _ = c.link && c.link.match(/<([^>]+)>; rel="deprecation"/),
        g = _ && _.pop();
      r.warn(
        `[@octokit/request] "${e.method} ${e.url}" is deprecated. It is scheduled to be removed on ${c.sunset}${g ? `. See ${g}` : ""}`,
      );
    }
    if (a === 204 || a === 205) return d;
    if (e.method === "HEAD") {
      if (a < 400) return d;
      throw new Ii(i.statusText, a, { response: d, request: e });
    }
    if (a === 304)
      throw (
        ((d.data = await Nu(i)),
        new Ii("Not modified", a, { response: d, request: e }))
      );
    if (a >= 400)
      throw (
        ((d.data = await Nu(i)),
        new Ii(ow(d.data), a, { response: d, request: e }))
      );
    return (d.data = n ? await Nu(i) : i.body), d;
  }
  async function Nu(e) {
    const t = e.headers.get("content-type");
    return /application\/json/.test(t)
      ? e
          .json()
          .catch(() => e.text())
          .catch(() => "")
      : !t || /^text\/|charset=utf-8$/.test(t)
        ? e.text()
        : e.arrayBuffer();
  }
  function ow(e) {
    if (typeof e == "string") return e;
    if (e instanceof ArrayBuffer) return "Unknown error";
    if ("message" in e) {
      const t = "documentation_url" in e ? ` - ${e.documentation_url}` : "";
      return Array.isArray(e.errors)
        ? `${e.message}: ${e.errors.map((r) => JSON.stringify(r)).join(", ")}${t}`
        : `${e.message}${t}`;
    }
    return `Unknown error: ${JSON.stringify(e)}`;
  }
  function E2(e, t) {
    const r = e.defaults(t);
    return Object.assign(
      function (s, o) {
        const i = r.merge(s, o);
        if (!i.request || !i.request.hook) return U3(r.parse(i));
        const a = (l, c) => U3(r.parse(r.merge(l, c)));
        return (
          Object.assign(a, { endpoint: r, defaults: E2.bind(null, r) }),
          i.request.hook(a, i)
        );
      },
      { endpoint: r, defaults: E2.bind(null, r) },
    );
  }
  var b2 = E2(tw, nw),
    iw = "0.0.0-development";
  function aw(e) {
    return (
      `Request failed due to following response errors:
` +
      e.errors.map((t) => ` - ${t.message}`).join(`
`)
    );
  }
  var lw = class extends Error {
      constructor(t, r, n) {
        super(aw(n));
        Ke(this, "name", "GraphqlResponseError");
        Ke(this, "errors");
        Ke(this, "data");
        (this.request = t),
          (this.headers = r),
          (this.response = n),
          (this.errors = n.errors),
          (this.data = n.data),
          Error.captureStackTrace &&
            Error.captureStackTrace(this, this.constructor);
      }
    },
    uw = [
      "method",
      "baseUrl",
      "url",
      "headers",
      "request",
      "query",
      "mediaType",
    ],
    cw = ["query", "method", "url"],
    $3 = /\/api\/v3\/?$/;
  function dw(e, t, r) {
    if (r) {
      if (typeof t == "string" && "query" in r)
        return Promise.reject(
          new Error(
            '[@octokit/graphql] "query" cannot be used as variable name',
          ),
        );
      for (const i in r)
        if (cw.includes(i))
          return Promise.reject(
            new Error(
              `[@octokit/graphql] "${i}" cannot be used as variable name`,
            ),
          );
    }
    const n = typeof t == "string" ? Object.assign({ query: t }, r) : t,
      s = Object.keys(n).reduce(
        (i, a) =>
          uw.includes(a)
            ? ((i[a] = n[a]), i)
            : (i.variables || (i.variables = {}), (i.variables[a] = n[a]), i),
        {},
      ),
      o = n.baseUrl || e.endpoint.DEFAULTS.baseUrl;
    return (
      $3.test(o) && (s.url = o.replace($3, "/api/graphql")),
      e(s).then((i) => {
        if (i.data.errors) {
          const a = {};
          for (const l of Object.keys(i.headers)) a[l] = i.headers[l];
          throw new lw(s, a, i.data);
        }
        return i.data.data;
      })
    );
  }
  function Y0(e, t) {
    const r = e.defaults(t);
    return Object.assign((s, o) => dw(r, s, o), {
      defaults: Y0.bind(null, r),
      endpoint: r.endpoint,
    });
  }
  Y0(b2, {
    headers: { "user-agent": `octokit-graphql.js/${iw} ${P1()}` },
    method: "POST",
    url: "/graphql",
  });
  function fw(e) {
    return Y0(e, { method: "POST", url: "/graphql" });
  }
  var pw = /^v1\./,
    hw = /^ghs_/,
    mw = /^ghu_/;
  async function gw(e) {
    const t = e.split(/\./).length === 3,
      r = pw.test(e) || hw.test(e),
      n = mw.test(e);
    return {
      type: "token",
      token: e,
      tokenType: t
        ? "app"
        : r
          ? "installation"
          : n
            ? "user-to-server"
            : "oauth",
    };
  }
  function vw(e) {
    return e.split(/\./).length === 3 ? `bearer ${e}` : `token ${e}`;
  }
  async function yw(e, t, r, n) {
    const s = t.endpoint.merge(r, n);
    return (s.headers.authorization = vw(e)), t(s);
  }
  var Cw = function (t) {
    if (!t)
      throw new Error(
        "[@octokit/auth-token] No token passed to createTokenAuth",
      );
    if (typeof t != "string")
      throw new Error(
        "[@octokit/auth-token] Token passed to createTokenAuth is not a string",
      );
    return (
      (t = t.replace(/^(token|bearer) +/i, "")),
      Object.assign(gw.bind(null, t), { hook: yw.bind(null, t) })
    );
  };
  const k4 = "6.1.2",
    H3 = () => {},
    ww = console.warn.bind(console),
    Ew = console.error.bind(console),
    V3 = `octokit-core.js/${k4} ${P1()}`;
  var pl;
  let bw =
    ((pl = class {
      constructor(t = {}) {
        Ke(this, "request");
        Ke(this, "graphql");
        Ke(this, "log");
        Ke(this, "hook");
        Ke(this, "auth");
        const r = new $C.Collection(),
          n = {
            baseUrl: b2.endpoint.DEFAULTS.baseUrl,
            headers: {},
            request: Object.assign({}, t.request, {
              hook: r.bind(null, "request"),
            }),
            mediaType: { previews: [], format: "" },
          };
        if (
          ((n.headers["user-agent"] = t.userAgent
            ? `${t.userAgent} ${V3}`
            : V3),
          t.baseUrl && (n.baseUrl = t.baseUrl),
          t.previews && (n.mediaType.previews = t.previews),
          t.timeZone && (n.headers["time-zone"] = t.timeZone),
          (this.request = b2.defaults(n)),
          (this.graphql = fw(this.request).defaults(n)),
          (this.log = Object.assign(
            { debug: H3, info: H3, warn: ww, error: Ew },
            t.log,
          )),
          (this.hook = r),
          t.authStrategy)
        ) {
          const { authStrategy: o, ...i } = t,
            a = o(
              Object.assign(
                {
                  request: this.request,
                  log: this.log,
                  octokit: this,
                  octokitOptions: i,
                },
                t.auth,
              ),
            );
          r.wrap("request", a.hook), (this.auth = a);
        } else if (!t.auth)
          this.auth = async () => ({ type: "unauthenticated" });
        else {
          const o = Cw(t.auth);
          r.wrap("request", o.hook), (this.auth = o);
        }
        const s = this.constructor;
        for (let o = 0; o < s.plugins.length; ++o)
          Object.assign(this, s.plugins[o](this, t));
      }
      static defaults(t) {
        return class extends this {
          constructor(...n) {
            const s = n[0] || {};
            if (typeof t == "function") {
              super(t(s));
              return;
            }
            super(
              Object.assign(
                {},
                t,
                s,
                s.userAgent && t.userAgent
                  ? { userAgent: `${s.userAgent} ${t.userAgent}` }
                  : null,
              ),
            );
          }
        };
      }
      static plugin(...t) {
        var s;
        const r = this.plugins;
        return (
          (s = class extends this {}),
          Ke(s, "plugins", r.concat(t.filter((o) => !r.includes(o)))),
          s
        );
      }
    }),
    Ke(pl, "VERSION", k4),
    Ke(pl, "plugins", []),
    pl);
  var Tw = "0.0.0-development";
  function xw(e) {
    if (!e.data) return { ...e, data: [] };
    if (!("total_count" in e.data && !("url" in e.data))) return e;
    const r = e.data.incomplete_results,
      n = e.data.repository_selection,
      s = e.data.total_count;
    delete e.data.incomplete_results,
      delete e.data.repository_selection,
      delete e.data.total_count;
    const o = Object.keys(e.data)[0],
      i = e.data[o];
    return (
      (e.data = i),
      typeof r < "u" && (e.data.incomplete_results = r),
      typeof n < "u" && (e.data.repository_selection = n),
      (e.data.total_count = s),
      e
    );
  }
  function X0(e, t, r) {
    const n = typeof t == "function" ? t.endpoint(r) : e.request.endpoint(t, r),
      s = typeof t == "function" ? t : e.request,
      o = n.method,
      i = n.headers;
    let a = n.url;
    return {
      [Symbol.asyncIterator]: () => ({
        async next() {
          if (!a) return { done: !0 };
          try {
            const l = await s({ method: o, url: a, headers: i }),
              c = xw(l);
            return (
              (a = ((c.headers.link || "").match(/<([^>]+)>;\s*rel="next"/) ||
                [])[1]),
              { value: c }
            );
          } catch (l) {
            if (l.status !== 409) throw l;
            return (a = ""), { value: { status: 200, headers: {}, data: [] } };
          }
        },
      }),
    };
  }
  function O4(e, t, r, n) {
    return (
      typeof r == "function" && ((n = r), (r = void 0)),
      A4(e, [], X0(e, t, r)[Symbol.asyncIterator](), n)
    );
  }
  function A4(e, t, r, n) {
    return r.next().then((s) => {
      if (s.done) return t;
      let o = !1;
      function i() {
        o = !0;
      }
      return (
        (t = t.concat(n ? n(s.value, i) : s.value.data)), o ? t : A4(e, t, r, n)
      );
    });
  }
  Object.assign(O4, { iterator: X0 });
  function P4(e) {
    return {
      paginate: Object.assign(O4.bind(null, e), { iterator: X0.bind(null, e) }),
    };
  }
  P4.VERSION = Tw;
  var _w = (e, t) =>
      `The cursor at "${e.join(",")}" did not change its value "${t}" after a page transition. Please make sure your that your query is set up correctly.`,
    Sw = class extends Error {
      constructor(t, r) {
        super(_w(t.pathInQuery, r));
        Ke(this, "name", "MissingCursorChangeError");
        (this.pageInfo = t),
          (this.cursorValue = r),
          Error.captureStackTrace &&
            Error.captureStackTrace(this, this.constructor);
      }
    },
    kw = class extends Error {
      constructor(t) {
        super(
          `No pageInfo property found in response. Please make sure to specify the pageInfo in your query. Response-Data: ${JSON.stringify(t, null, 2)}`,
        );
        Ke(this, "name", "MissingPageInfo");
        (this.response = t),
          Error.captureStackTrace &&
            Error.captureStackTrace(this, this.constructor);
      }
    },
    Ow = (e) => Object.prototype.toString.call(e) === "[object Object]";
  function L4(e) {
    const t = R4(e, "pageInfo");
    if (t.length === 0) throw new kw(e);
    return t;
  }
  var R4 = (e, t, r = []) => {
      for (const n of Object.keys(e)) {
        const s = [...r, n],
          o = e[n];
        if (o.hasOwnProperty(t)) return s;
        if (Ow(o)) {
          const i = R4(o, t, s);
          if (i.length > 0) return i;
        }
      }
      return [];
    },
    Zi = (e, t) => t.reduce((r, n) => r[n], e),
    Fu = (e, t, r) => {
      const n = t[t.length - 1],
        s = [...t].slice(0, -1),
        o = Zi(e, s);
      typeof r == "function" ? (o[n] = r(o[n])) : (o[n] = r);
    },
    Aw = (e) => {
      const t = L4(e);
      return { pathInQuery: t, pageInfo: Zi(e, [...t, "pageInfo"]) };
    },
    j4 = (e) => e.hasOwnProperty("hasNextPage"),
    Pw = (e) => (j4(e) ? e.endCursor : e.startCursor),
    Lw = (e) => (j4(e) ? e.hasNextPage : e.hasPreviousPage),
    N4 =
      (e) =>
      (t, r = {}) => {
        let n = !0,
          s = { ...r };
        return {
          [Symbol.asyncIterator]: () => ({
            async next() {
              if (!n) return { done: !0, value: {} };
              const o = await e.graphql(t, s),
                i = Aw(o),
                a = Pw(i.pageInfo);
              if (((n = Lw(i.pageInfo)), n && a === s.cursor))
                throw new Sw(i, a);
              return (s = { ...s, cursor: a }), { done: !1, value: o };
            },
          }),
        };
      },
    Rw = (e, t) => {
      if (Object.keys(e).length === 0) return Object.assign(e, t);
      const r = L4(e),
        n = [...r, "nodes"],
        s = Zi(t, n);
      s && Fu(e, n, (l) => [...l, ...s]);
      const o = [...r, "edges"],
        i = Zi(t, o);
      i && Fu(e, o, (l) => [...l, ...i]);
      const a = [...r, "pageInfo"];
      return Fu(e, a, Zi(t, a)), e;
    },
    jw = (e) => {
      const t = N4(e);
      return async (r, n = {}) => {
        let s = {};
        for await (const o of t(r, n)) s = Rw(s, o);
        return s;
      };
    };
  function Nw(e) {
    return {
      graphql: Object.assign(e.graphql, {
        paginate: Object.assign(jw(e), { iterator: N4(e) }),
      }),
    };
  }
  const Fw = "13.2.4",
    Iw = {
      actions: {
        addCustomLabelsToSelfHostedRunnerForOrg: [
          "POST /orgs/{org}/actions/runners/{runner_id}/labels",
        ],
        addCustomLabelsToSelfHostedRunnerForRepo: [
          "POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels",
        ],
        addSelectedRepoToOrgSecret: [
          "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}",
        ],
        addSelectedRepoToOrgVariable: [
          "PUT /orgs/{org}/actions/variables/{name}/repositories/{repository_id}",
        ],
        approveWorkflowRun: [
          "POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve",
        ],
        cancelWorkflowRun: [
          "POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel",
        ],
        createEnvironmentVariable: [
          "POST /repos/{owner}/{repo}/environments/{environment_name}/variables",
        ],
        createOrUpdateEnvironmentSecret: [
          "PUT /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}",
        ],
        createOrUpdateOrgSecret: [
          "PUT /orgs/{org}/actions/secrets/{secret_name}",
        ],
        createOrUpdateRepoSecret: [
          "PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}",
        ],
        createOrgVariable: ["POST /orgs/{org}/actions/variables"],
        createRegistrationTokenForOrg: [
          "POST /orgs/{org}/actions/runners/registration-token",
        ],
        createRegistrationTokenForRepo: [
          "POST /repos/{owner}/{repo}/actions/runners/registration-token",
        ],
        createRemoveTokenForOrg: [
          "POST /orgs/{org}/actions/runners/remove-token",
        ],
        createRemoveTokenForRepo: [
          "POST /repos/{owner}/{repo}/actions/runners/remove-token",
        ],
        createRepoVariable: ["POST /repos/{owner}/{repo}/actions/variables"],
        createWorkflowDispatch: [
          "POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches",
        ],
        deleteActionsCacheById: [
          "DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}",
        ],
        deleteActionsCacheByKey: [
          "DELETE /repos/{owner}/{repo}/actions/caches{?key,ref}",
        ],
        deleteArtifact: [
          "DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}",
        ],
        deleteEnvironmentSecret: [
          "DELETE /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}",
        ],
        deleteEnvironmentVariable: [
          "DELETE /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}",
        ],
        deleteOrgSecret: ["DELETE /orgs/{org}/actions/secrets/{secret_name}"],
        deleteOrgVariable: ["DELETE /orgs/{org}/actions/variables/{name}"],
        deleteRepoSecret: [
          "DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}",
        ],
        deleteRepoVariable: [
          "DELETE /repos/{owner}/{repo}/actions/variables/{name}",
        ],
        deleteSelfHostedRunnerFromOrg: [
          "DELETE /orgs/{org}/actions/runners/{runner_id}",
        ],
        deleteSelfHostedRunnerFromRepo: [
          "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}",
        ],
        deleteWorkflowRun: [
          "DELETE /repos/{owner}/{repo}/actions/runs/{run_id}",
        ],
        deleteWorkflowRunLogs: [
          "DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs",
        ],
        disableSelectedRepositoryGithubActionsOrganization: [
          "DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}",
        ],
        disableWorkflow: [
          "PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable",
        ],
        downloadArtifact: [
          "GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}",
        ],
        downloadJobLogsForWorkflowRun: [
          "GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs",
        ],
        downloadWorkflowRunAttemptLogs: [
          "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs",
        ],
        downloadWorkflowRunLogs: [
          "GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs",
        ],
        enableSelectedRepositoryGithubActionsOrganization: [
          "PUT /orgs/{org}/actions/permissions/repositories/{repository_id}",
        ],
        enableWorkflow: [
          "PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable",
        ],
        forceCancelWorkflowRun: [
          "POST /repos/{owner}/{repo}/actions/runs/{run_id}/force-cancel",
        ],
        generateRunnerJitconfigForOrg: [
          "POST /orgs/{org}/actions/runners/generate-jitconfig",
        ],
        generateRunnerJitconfigForRepo: [
          "POST /repos/{owner}/{repo}/actions/runners/generate-jitconfig",
        ],
        getActionsCacheList: ["GET /repos/{owner}/{repo}/actions/caches"],
        getActionsCacheUsage: ["GET /repos/{owner}/{repo}/actions/cache/usage"],
        getActionsCacheUsageByRepoForOrg: [
          "GET /orgs/{org}/actions/cache/usage-by-repository",
        ],
        getActionsCacheUsageForOrg: ["GET /orgs/{org}/actions/cache/usage"],
        getAllowedActionsOrganization: [
          "GET /orgs/{org}/actions/permissions/selected-actions",
        ],
        getAllowedActionsRepository: [
          "GET /repos/{owner}/{repo}/actions/permissions/selected-actions",
        ],
        getArtifact: [
          "GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}",
        ],
        getCustomOidcSubClaimForRepo: [
          "GET /repos/{owner}/{repo}/actions/oidc/customization/sub",
        ],
        getEnvironmentPublicKey: [
          "GET /repos/{owner}/{repo}/environments/{environment_name}/secrets/public-key",
        ],
        getEnvironmentSecret: [
          "GET /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}",
        ],
        getEnvironmentVariable: [
          "GET /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}",
        ],
        getGithubActionsDefaultWorkflowPermissionsOrganization: [
          "GET /orgs/{org}/actions/permissions/workflow",
        ],
        getGithubActionsDefaultWorkflowPermissionsRepository: [
          "GET /repos/{owner}/{repo}/actions/permissions/workflow",
        ],
        getGithubActionsPermissionsOrganization: [
          "GET /orgs/{org}/actions/permissions",
        ],
        getGithubActionsPermissionsRepository: [
          "GET /repos/{owner}/{repo}/actions/permissions",
        ],
        getJobForWorkflowRun: [
          "GET /repos/{owner}/{repo}/actions/jobs/{job_id}",
        ],
        getOrgPublicKey: ["GET /orgs/{org}/actions/secrets/public-key"],
        getOrgSecret: ["GET /orgs/{org}/actions/secrets/{secret_name}"],
        getOrgVariable: ["GET /orgs/{org}/actions/variables/{name}"],
        getPendingDeploymentsForRun: [
          "GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments",
        ],
        getRepoPermissions: [
          "GET /repos/{owner}/{repo}/actions/permissions",
          {},
          { renamed: ["actions", "getGithubActionsPermissionsRepository"] },
        ],
        getRepoPublicKey: [
          "GET /repos/{owner}/{repo}/actions/secrets/public-key",
        ],
        getRepoSecret: [
          "GET /repos/{owner}/{repo}/actions/secrets/{secret_name}",
        ],
        getRepoVariable: ["GET /repos/{owner}/{repo}/actions/variables/{name}"],
        getReviewsForRun: [
          "GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals",
        ],
        getSelfHostedRunnerForOrg: [
          "GET /orgs/{org}/actions/runners/{runner_id}",
        ],
        getSelfHostedRunnerForRepo: [
          "GET /repos/{owner}/{repo}/actions/runners/{runner_id}",
        ],
        getWorkflow: [
          "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}",
        ],
        getWorkflowAccessToRepository: [
          "GET /repos/{owner}/{repo}/actions/permissions/access",
        ],
        getWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}"],
        getWorkflowRunAttempt: [
          "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}",
        ],
        getWorkflowRunUsage: [
          "GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing",
        ],
        getWorkflowUsage: [
          "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing",
        ],
        listArtifactsForRepo: ["GET /repos/{owner}/{repo}/actions/artifacts"],
        listEnvironmentSecrets: [
          "GET /repos/{owner}/{repo}/environments/{environment_name}/secrets",
        ],
        listEnvironmentVariables: [
          "GET /repos/{owner}/{repo}/environments/{environment_name}/variables",
        ],
        listJobsForWorkflowRun: [
          "GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs",
        ],
        listJobsForWorkflowRunAttempt: [
          "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs",
        ],
        listLabelsForSelfHostedRunnerForOrg: [
          "GET /orgs/{org}/actions/runners/{runner_id}/labels",
        ],
        listLabelsForSelfHostedRunnerForRepo: [
          "GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels",
        ],
        listOrgSecrets: ["GET /orgs/{org}/actions/secrets"],
        listOrgVariables: ["GET /orgs/{org}/actions/variables"],
        listRepoOrganizationSecrets: [
          "GET /repos/{owner}/{repo}/actions/organization-secrets",
        ],
        listRepoOrganizationVariables: [
          "GET /repos/{owner}/{repo}/actions/organization-variables",
        ],
        listRepoSecrets: ["GET /repos/{owner}/{repo}/actions/secrets"],
        listRepoVariables: ["GET /repos/{owner}/{repo}/actions/variables"],
        listRepoWorkflows: ["GET /repos/{owner}/{repo}/actions/workflows"],
        listRunnerApplicationsForOrg: [
          "GET /orgs/{org}/actions/runners/downloads",
        ],
        listRunnerApplicationsForRepo: [
          "GET /repos/{owner}/{repo}/actions/runners/downloads",
        ],
        listSelectedReposForOrgSecret: [
          "GET /orgs/{org}/actions/secrets/{secret_name}/repositories",
        ],
        listSelectedReposForOrgVariable: [
          "GET /orgs/{org}/actions/variables/{name}/repositories",
        ],
        listSelectedRepositoriesEnabledGithubActionsOrganization: [
          "GET /orgs/{org}/actions/permissions/repositories",
        ],
        listSelfHostedRunnersForOrg: ["GET /orgs/{org}/actions/runners"],
        listSelfHostedRunnersForRepo: [
          "GET /repos/{owner}/{repo}/actions/runners",
        ],
        listWorkflowRunArtifacts: [
          "GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts",
        ],
        listWorkflowRuns: [
          "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs",
        ],
        listWorkflowRunsForRepo: ["GET /repos/{owner}/{repo}/actions/runs"],
        reRunJobForWorkflowRun: [
          "POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun",
        ],
        reRunWorkflow: [
          "POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun",
        ],
        reRunWorkflowFailedJobs: [
          "POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs",
        ],
        removeAllCustomLabelsFromSelfHostedRunnerForOrg: [
          "DELETE /orgs/{org}/actions/runners/{runner_id}/labels",
        ],
        removeAllCustomLabelsFromSelfHostedRunnerForRepo: [
          "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels",
        ],
        removeCustomLabelFromSelfHostedRunnerForOrg: [
          "DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}",
        ],
        removeCustomLabelFromSelfHostedRunnerForRepo: [
          "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}",
        ],
        removeSelectedRepoFromOrgSecret: [
          "DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}",
        ],
        removeSelectedRepoFromOrgVariable: [
          "DELETE /orgs/{org}/actions/variables/{name}/repositories/{repository_id}",
        ],
        reviewCustomGatesForRun: [
          "POST /repos/{owner}/{repo}/actions/runs/{run_id}/deployment_protection_rule",
        ],
        reviewPendingDeploymentsForRun: [
          "POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments",
        ],
        setAllowedActionsOrganization: [
          "PUT /orgs/{org}/actions/permissions/selected-actions",
        ],
        setAllowedActionsRepository: [
          "PUT /repos/{owner}/{repo}/actions/permissions/selected-actions",
        ],
        setCustomLabelsForSelfHostedRunnerForOrg: [
          "PUT /orgs/{org}/actions/runners/{runner_id}/labels",
        ],
        setCustomLabelsForSelfHostedRunnerForRepo: [
          "PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels",
        ],
        setCustomOidcSubClaimForRepo: [
          "PUT /repos/{owner}/{repo}/actions/oidc/customization/sub",
        ],
        setGithubActionsDefaultWorkflowPermissionsOrganization: [
          "PUT /orgs/{org}/actions/permissions/workflow",
        ],
        setGithubActionsDefaultWorkflowPermissionsRepository: [
          "PUT /repos/{owner}/{repo}/actions/permissions/workflow",
        ],
        setGithubActionsPermissionsOrganization: [
          "PUT /orgs/{org}/actions/permissions",
        ],
        setGithubActionsPermissionsRepository: [
          "PUT /repos/{owner}/{repo}/actions/permissions",
        ],
        setSelectedReposForOrgSecret: [
          "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories",
        ],
        setSelectedReposForOrgVariable: [
          "PUT /orgs/{org}/actions/variables/{name}/repositories",
        ],
        setSelectedRepositoriesEnabledGithubActionsOrganization: [
          "PUT /orgs/{org}/actions/permissions/repositories",
        ],
        setWorkflowAccessToRepository: [
          "PUT /repos/{owner}/{repo}/actions/permissions/access",
        ],
        updateEnvironmentVariable: [
          "PATCH /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}",
        ],
        updateOrgVariable: ["PATCH /orgs/{org}/actions/variables/{name}"],
        updateRepoVariable: [
          "PATCH /repos/{owner}/{repo}/actions/variables/{name}",
        ],
      },
      activity: {
        checkRepoIsStarredByAuthenticatedUser: [
          "GET /user/starred/{owner}/{repo}",
        ],
        deleteRepoSubscription: ["DELETE /repos/{owner}/{repo}/subscription"],
        deleteThreadSubscription: [
          "DELETE /notifications/threads/{thread_id}/subscription",
        ],
        getFeeds: ["GET /feeds"],
        getRepoSubscription: ["GET /repos/{owner}/{repo}/subscription"],
        getThread: ["GET /notifications/threads/{thread_id}"],
        getThreadSubscriptionForAuthenticatedUser: [
          "GET /notifications/threads/{thread_id}/subscription",
        ],
        listEventsForAuthenticatedUser: ["GET /users/{username}/events"],
        listNotificationsForAuthenticatedUser: ["GET /notifications"],
        listOrgEventsForAuthenticatedUser: [
          "GET /users/{username}/events/orgs/{org}",
        ],
        listPublicEvents: ["GET /events"],
        listPublicEventsForRepoNetwork: ["GET /networks/{owner}/{repo}/events"],
        listPublicEventsForUser: ["GET /users/{username}/events/public"],
        listPublicOrgEvents: ["GET /orgs/{org}/events"],
        listReceivedEventsForUser: ["GET /users/{username}/received_events"],
        listReceivedPublicEventsForUser: [
          "GET /users/{username}/received_events/public",
        ],
        listRepoEvents: ["GET /repos/{owner}/{repo}/events"],
        listRepoNotificationsForAuthenticatedUser: [
          "GET /repos/{owner}/{repo}/notifications",
        ],
        listReposStarredByAuthenticatedUser: ["GET /user/starred"],
        listReposStarredByUser: ["GET /users/{username}/starred"],
        listReposWatchedByUser: ["GET /users/{username}/subscriptions"],
        listStargazersForRepo: ["GET /repos/{owner}/{repo}/stargazers"],
        listWatchedReposForAuthenticatedUser: ["GET /user/subscriptions"],
        listWatchersForRepo: ["GET /repos/{owner}/{repo}/subscribers"],
        markNotificationsAsRead: ["PUT /notifications"],
        markRepoNotificationsAsRead: [
          "PUT /repos/{owner}/{repo}/notifications",
        ],
        markThreadAsDone: ["DELETE /notifications/threads/{thread_id}"],
        markThreadAsRead: ["PATCH /notifications/threads/{thread_id}"],
        setRepoSubscription: ["PUT /repos/{owner}/{repo}/subscription"],
        setThreadSubscription: [
          "PUT /notifications/threads/{thread_id}/subscription",
        ],
        starRepoForAuthenticatedUser: ["PUT /user/starred/{owner}/{repo}"],
        unstarRepoForAuthenticatedUser: ["DELETE /user/starred/{owner}/{repo}"],
      },
      apps: {
        addRepoToInstallation: [
          "PUT /user/installations/{installation_id}/repositories/{repository_id}",
          {},
          { renamed: ["apps", "addRepoToInstallationForAuthenticatedUser"] },
        ],
        addRepoToInstallationForAuthenticatedUser: [
          "PUT /user/installations/{installation_id}/repositories/{repository_id}",
        ],
        checkToken: ["POST /applications/{client_id}/token"],
        createFromManifest: ["POST /app-manifests/{code}/conversions"],
        createInstallationAccessToken: [
          "POST /app/installations/{installation_id}/access_tokens",
        ],
        deleteAuthorization: ["DELETE /applications/{client_id}/grant"],
        deleteInstallation: ["DELETE /app/installations/{installation_id}"],
        deleteToken: ["DELETE /applications/{client_id}/token"],
        getAuthenticated: ["GET /app"],
        getBySlug: ["GET /apps/{app_slug}"],
        getInstallation: ["GET /app/installations/{installation_id}"],
        getOrgInstallation: ["GET /orgs/{org}/installation"],
        getRepoInstallation: ["GET /repos/{owner}/{repo}/installation"],
        getSubscriptionPlanForAccount: [
          "GET /marketplace_listing/accounts/{account_id}",
        ],
        getSubscriptionPlanForAccountStubbed: [
          "GET /marketplace_listing/stubbed/accounts/{account_id}",
        ],
        getUserInstallation: ["GET /users/{username}/installation"],
        getWebhookConfigForApp: ["GET /app/hook/config"],
        getWebhookDelivery: ["GET /app/hook/deliveries/{delivery_id}"],
        listAccountsForPlan: [
          "GET /marketplace_listing/plans/{plan_id}/accounts",
        ],
        listAccountsForPlanStubbed: [
          "GET /marketplace_listing/stubbed/plans/{plan_id}/accounts",
        ],
        listInstallationReposForAuthenticatedUser: [
          "GET /user/installations/{installation_id}/repositories",
        ],
        listInstallationRequestsForAuthenticatedApp: [
          "GET /app/installation-requests",
        ],
        listInstallations: ["GET /app/installations"],
        listInstallationsForAuthenticatedUser: ["GET /user/installations"],
        listPlans: ["GET /marketplace_listing/plans"],
        listPlansStubbed: ["GET /marketplace_listing/stubbed/plans"],
        listReposAccessibleToInstallation: ["GET /installation/repositories"],
        listSubscriptionsForAuthenticatedUser: [
          "GET /user/marketplace_purchases",
        ],
        listSubscriptionsForAuthenticatedUserStubbed: [
          "GET /user/marketplace_purchases/stubbed",
        ],
        listWebhookDeliveries: ["GET /app/hook/deliveries"],
        redeliverWebhookDelivery: [
          "POST /app/hook/deliveries/{delivery_id}/attempts",
        ],
        removeRepoFromInstallation: [
          "DELETE /user/installations/{installation_id}/repositories/{repository_id}",
          {},
          {
            renamed: ["apps", "removeRepoFromInstallationForAuthenticatedUser"],
          },
        ],
        removeRepoFromInstallationForAuthenticatedUser: [
          "DELETE /user/installations/{installation_id}/repositories/{repository_id}",
        ],
        resetToken: ["PATCH /applications/{client_id}/token"],
        revokeInstallationAccessToken: ["DELETE /installation/token"],
        scopeToken: ["POST /applications/{client_id}/token/scoped"],
        suspendInstallation: [
          "PUT /app/installations/{installation_id}/suspended",
        ],
        unsuspendInstallation: [
          "DELETE /app/installations/{installation_id}/suspended",
        ],
        updateWebhookConfigForApp: ["PATCH /app/hook/config"],
      },
      billing: {
        getGithubActionsBillingOrg: [
          "GET /orgs/{org}/settings/billing/actions",
        ],
        getGithubActionsBillingUser: [
          "GET /users/{username}/settings/billing/actions",
        ],
        getGithubPackagesBillingOrg: [
          "GET /orgs/{org}/settings/billing/packages",
        ],
        getGithubPackagesBillingUser: [
          "GET /users/{username}/settings/billing/packages",
        ],
        getSharedStorageBillingOrg: [
          "GET /orgs/{org}/settings/billing/shared-storage",
        ],
        getSharedStorageBillingUser: [
          "GET /users/{username}/settings/billing/shared-storage",
        ],
      },
      checks: {
        create: ["POST /repos/{owner}/{repo}/check-runs"],
        createSuite: ["POST /repos/{owner}/{repo}/check-suites"],
        get: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}"],
        getSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}"],
        listAnnotations: [
          "GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations",
        ],
        listForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-runs"],
        listForSuite: [
          "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs",
        ],
        listSuitesForRef: [
          "GET /repos/{owner}/{repo}/commits/{ref}/check-suites",
        ],
        rerequestRun: [
          "POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest",
        ],
        rerequestSuite: [
          "POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest",
        ],
        setSuitesPreferences: [
          "PATCH /repos/{owner}/{repo}/check-suites/preferences",
        ],
        update: ["PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}"],
      },
      codeScanning: {
        deleteAnalysis: [
          "DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}{?confirm_delete}",
        ],
        getAlert: [
          "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}",
          {},
          { renamedParameters: { alert_id: "alert_number" } },
        ],
        getAnalysis: [
          "GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}",
        ],
        getCodeqlDatabase: [
          "GET /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}",
        ],
        getDefaultSetup: [
          "GET /repos/{owner}/{repo}/code-scanning/default-setup",
        ],
        getSarif: ["GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}"],
        listAlertInstances: [
          "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances",
        ],
        listAlertsForOrg: ["GET /orgs/{org}/code-scanning/alerts"],
        listAlertsForRepo: ["GET /repos/{owner}/{repo}/code-scanning/alerts"],
        listAlertsInstances: [
          "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances",
          {},
          { renamed: ["codeScanning", "listAlertInstances"] },
        ],
        listCodeqlDatabases: [
          "GET /repos/{owner}/{repo}/code-scanning/codeql/databases",
        ],
        listRecentAnalyses: [
          "GET /repos/{owner}/{repo}/code-scanning/analyses",
        ],
        updateAlert: [
          "PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}",
        ],
        updateDefaultSetup: [
          "PATCH /repos/{owner}/{repo}/code-scanning/default-setup",
        ],
        uploadSarif: ["POST /repos/{owner}/{repo}/code-scanning/sarifs"],
      },
      codesOfConduct: {
        getAllCodesOfConduct: ["GET /codes_of_conduct"],
        getConductCode: ["GET /codes_of_conduct/{key}"],
      },
      codespaces: {
        addRepositoryForSecretForAuthenticatedUser: [
          "PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}",
        ],
        addSelectedRepoToOrgSecret: [
          "PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}",
        ],
        checkPermissionsForDevcontainer: [
          "GET /repos/{owner}/{repo}/codespaces/permissions_check",
        ],
        codespaceMachinesForAuthenticatedUser: [
          "GET /user/codespaces/{codespace_name}/machines",
        ],
        createForAuthenticatedUser: ["POST /user/codespaces"],
        createOrUpdateOrgSecret: [
          "PUT /orgs/{org}/codespaces/secrets/{secret_name}",
        ],
        createOrUpdateRepoSecret: [
          "PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}",
        ],
        createOrUpdateSecretForAuthenticatedUser: [
          "PUT /user/codespaces/secrets/{secret_name}",
        ],
        createWithPrForAuthenticatedUser: [
          "POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces",
        ],
        createWithRepoForAuthenticatedUser: [
          "POST /repos/{owner}/{repo}/codespaces",
        ],
        deleteForAuthenticatedUser: [
          "DELETE /user/codespaces/{codespace_name}",
        ],
        deleteFromOrganization: [
          "DELETE /orgs/{org}/members/{username}/codespaces/{codespace_name}",
        ],
        deleteOrgSecret: [
          "DELETE /orgs/{org}/codespaces/secrets/{secret_name}",
        ],
        deleteRepoSecret: [
          "DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}",
        ],
        deleteSecretForAuthenticatedUser: [
          "DELETE /user/codespaces/secrets/{secret_name}",
        ],
        exportForAuthenticatedUser: [
          "POST /user/codespaces/{codespace_name}/exports",
        ],
        getCodespacesForUserInOrg: [
          "GET /orgs/{org}/members/{username}/codespaces",
        ],
        getExportDetailsForAuthenticatedUser: [
          "GET /user/codespaces/{codespace_name}/exports/{export_id}",
        ],
        getForAuthenticatedUser: ["GET /user/codespaces/{codespace_name}"],
        getOrgPublicKey: ["GET /orgs/{org}/codespaces/secrets/public-key"],
        getOrgSecret: ["GET /orgs/{org}/codespaces/secrets/{secret_name}"],
        getPublicKeyForAuthenticatedUser: [
          "GET /user/codespaces/secrets/public-key",
        ],
        getRepoPublicKey: [
          "GET /repos/{owner}/{repo}/codespaces/secrets/public-key",
        ],
        getRepoSecret: [
          "GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}",
        ],
        getSecretForAuthenticatedUser: [
          "GET /user/codespaces/secrets/{secret_name}",
        ],
        listDevcontainersInRepositoryForAuthenticatedUser: [
          "GET /repos/{owner}/{repo}/codespaces/devcontainers",
        ],
        listForAuthenticatedUser: ["GET /user/codespaces"],
        listInOrganization: [
          "GET /orgs/{org}/codespaces",
          {},
          { renamedParameters: { org_id: "org" } },
        ],
        listInRepositoryForAuthenticatedUser: [
          "GET /repos/{owner}/{repo}/codespaces",
        ],
        listOrgSecrets: ["GET /orgs/{org}/codespaces/secrets"],
        listRepoSecrets: ["GET /repos/{owner}/{repo}/codespaces/secrets"],
        listRepositoriesForSecretForAuthenticatedUser: [
          "GET /user/codespaces/secrets/{secret_name}/repositories",
        ],
        listSecretsForAuthenticatedUser: ["GET /user/codespaces/secrets"],
        listSelectedReposForOrgSecret: [
          "GET /orgs/{org}/codespaces/secrets/{secret_name}/repositories",
        ],
        preFlightWithRepoForAuthenticatedUser: [
          "GET /repos/{owner}/{repo}/codespaces/new",
        ],
        publishForAuthenticatedUser: [
          "POST /user/codespaces/{codespace_name}/publish",
        ],
        removeRepositoryForSecretForAuthenticatedUser: [
          "DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}",
        ],
        removeSelectedRepoFromOrgSecret: [
          "DELETE /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}",
        ],
        repoMachinesForAuthenticatedUser: [
          "GET /repos/{owner}/{repo}/codespaces/machines",
        ],
        setRepositoriesForSecretForAuthenticatedUser: [
          "PUT /user/codespaces/secrets/{secret_name}/repositories",
        ],
        setSelectedReposForOrgSecret: [
          "PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories",
        ],
        startForAuthenticatedUser: [
          "POST /user/codespaces/{codespace_name}/start",
        ],
        stopForAuthenticatedUser: [
          "POST /user/codespaces/{codespace_name}/stop",
        ],
        stopInOrganization: [
          "POST /orgs/{org}/members/{username}/codespaces/{codespace_name}/stop",
        ],
        updateForAuthenticatedUser: ["PATCH /user/codespaces/{codespace_name}"],
      },
      copilot: {
        addCopilotSeatsForTeams: [
          "POST /orgs/{org}/copilot/billing/selected_teams",
        ],
        addCopilotSeatsForUsers: [
          "POST /orgs/{org}/copilot/billing/selected_users",
        ],
        cancelCopilotSeatAssignmentForTeams: [
          "DELETE /orgs/{org}/copilot/billing/selected_teams",
        ],
        cancelCopilotSeatAssignmentForUsers: [
          "DELETE /orgs/{org}/copilot/billing/selected_users",
        ],
        getCopilotOrganizationDetails: ["GET /orgs/{org}/copilot/billing"],
        getCopilotSeatDetailsForUser: [
          "GET /orgs/{org}/members/{username}/copilot",
        ],
        listCopilotSeats: ["GET /orgs/{org}/copilot/billing/seats"],
        usageMetricsForEnterprise: [
          "GET /enterprises/{enterprise}/copilot/usage",
        ],
        usageMetricsForOrg: ["GET /orgs/{org}/copilot/usage"],
        usageMetricsForTeam: ["GET /orgs/{org}/team/{team_slug}/copilot/usage"],
      },
      dependabot: {
        addSelectedRepoToOrgSecret: [
          "PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}",
        ],
        createOrUpdateOrgSecret: [
          "PUT /orgs/{org}/dependabot/secrets/{secret_name}",
        ],
        createOrUpdateRepoSecret: [
          "PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}",
        ],
        deleteOrgSecret: [
          "DELETE /orgs/{org}/dependabot/secrets/{secret_name}",
        ],
        deleteRepoSecret: [
          "DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}",
        ],
        getAlert: [
          "GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}",
        ],
        getOrgPublicKey: ["GET /orgs/{org}/dependabot/secrets/public-key"],
        getOrgSecret: ["GET /orgs/{org}/dependabot/secrets/{secret_name}"],
        getRepoPublicKey: [
          "GET /repos/{owner}/{repo}/dependabot/secrets/public-key",
        ],
        getRepoSecret: [
          "GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}",
        ],
        listAlertsForEnterprise: [
          "GET /enterprises/{enterprise}/dependabot/alerts",
        ],
        listAlertsForOrg: ["GET /orgs/{org}/dependabot/alerts"],
        listAlertsForRepo: ["GET /repos/{owner}/{repo}/dependabot/alerts"],
        listOrgSecrets: ["GET /orgs/{org}/dependabot/secrets"],
        listRepoSecrets: ["GET /repos/{owner}/{repo}/dependabot/secrets"],
        listSelectedReposForOrgSecret: [
          "GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories",
        ],
        removeSelectedRepoFromOrgSecret: [
          "DELETE /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}",
        ],
        setSelectedReposForOrgSecret: [
          "PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories",
        ],
        updateAlert: [
          "PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}",
        ],
      },
      dependencyGraph: {
        createRepositorySnapshot: [
          "POST /repos/{owner}/{repo}/dependency-graph/snapshots",
        ],
        diffRange: [
          "GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}",
        ],
        exportSbom: ["GET /repos/{owner}/{repo}/dependency-graph/sbom"],
      },
      emojis: { get: ["GET /emojis"] },
      gists: {
        checkIsStarred: ["GET /gists/{gist_id}/star"],
        create: ["POST /gists"],
        createComment: ["POST /gists/{gist_id}/comments"],
        delete: ["DELETE /gists/{gist_id}"],
        deleteComment: ["DELETE /gists/{gist_id}/comments/{comment_id}"],
        fork: ["POST /gists/{gist_id}/forks"],
        get: ["GET /gists/{gist_id}"],
        getComment: ["GET /gists/{gist_id}/comments/{comment_id}"],
        getRevision: ["GET /gists/{gist_id}/{sha}"],
        list: ["GET /gists"],
        listComments: ["GET /gists/{gist_id}/comments"],
        listCommits: ["GET /gists/{gist_id}/commits"],
        listForUser: ["GET /users/{username}/gists"],
        listForks: ["GET /gists/{gist_id}/forks"],
        listPublic: ["GET /gists/public"],
        listStarred: ["GET /gists/starred"],
        star: ["PUT /gists/{gist_id}/star"],
        unstar: ["DELETE /gists/{gist_id}/star"],
        update: ["PATCH /gists/{gist_id}"],
        updateComment: ["PATCH /gists/{gist_id}/comments/{comment_id}"],
      },
      git: {
        createBlob: ["POST /repos/{owner}/{repo}/git/blobs"],
        createCommit: ["POST /repos/{owner}/{repo}/git/commits"],
        createRef: ["POST /repos/{owner}/{repo}/git/refs"],
        createTag: ["POST /repos/{owner}/{repo}/git/tags"],
        createTree: ["POST /repos/{owner}/{repo}/git/trees"],
        deleteRef: ["DELETE /repos/{owner}/{repo}/git/refs/{ref}"],
        getBlob: ["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"],
        getCommit: ["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"],
        getRef: ["GET /repos/{owner}/{repo}/git/ref/{ref}"],
        getTag: ["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"],
        getTree: ["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"],
        listMatchingRefs: ["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"],
        updateRef: ["PATCH /repos/{owner}/{repo}/git/refs/{ref}"],
      },
      gitignore: {
        getAllTemplates: ["GET /gitignore/templates"],
        getTemplate: ["GET /gitignore/templates/{name}"],
      },
      interactions: {
        getRestrictionsForAuthenticatedUser: ["GET /user/interaction-limits"],
        getRestrictionsForOrg: ["GET /orgs/{org}/interaction-limits"],
        getRestrictionsForRepo: [
          "GET /repos/{owner}/{repo}/interaction-limits",
        ],
        getRestrictionsForYourPublicRepos: [
          "GET /user/interaction-limits",
          {},
          { renamed: ["interactions", "getRestrictionsForAuthenticatedUser"] },
        ],
        removeRestrictionsForAuthenticatedUser: [
          "DELETE /user/interaction-limits",
        ],
        removeRestrictionsForOrg: ["DELETE /orgs/{org}/interaction-limits"],
        removeRestrictionsForRepo: [
          "DELETE /repos/{owner}/{repo}/interaction-limits",
        ],
        removeRestrictionsForYourPublicRepos: [
          "DELETE /user/interaction-limits",
          {},
          {
            renamed: ["interactions", "removeRestrictionsForAuthenticatedUser"],
          },
        ],
        setRestrictionsForAuthenticatedUser: ["PUT /user/interaction-limits"],
        setRestrictionsForOrg: ["PUT /orgs/{org}/interaction-limits"],
        setRestrictionsForRepo: [
          "PUT /repos/{owner}/{repo}/interaction-limits",
        ],
        setRestrictionsForYourPublicRepos: [
          "PUT /user/interaction-limits",
          {},
          { renamed: ["interactions", "setRestrictionsForAuthenticatedUser"] },
        ],
      },
      issues: {
        addAssignees: [
          "POST /repos/{owner}/{repo}/issues/{issue_number}/assignees",
        ],
        addLabels: ["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"],
        checkUserCanBeAssigned: [
          "GET /repos/{owner}/{repo}/assignees/{assignee}",
        ],
        checkUserCanBeAssignedToIssue: [
          "GET /repos/{owner}/{repo}/issues/{issue_number}/assignees/{assignee}",
        ],
        create: ["POST /repos/{owner}/{repo}/issues"],
        createComment: [
          "POST /repos/{owner}/{repo}/issues/{issue_number}/comments",
        ],
        createLabel: ["POST /repos/{owner}/{repo}/labels"],
        createMilestone: ["POST /repos/{owner}/{repo}/milestones"],
        deleteComment: [
          "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}",
        ],
        deleteLabel: ["DELETE /repos/{owner}/{repo}/labels/{name}"],
        deleteMilestone: [
          "DELETE /repos/{owner}/{repo}/milestones/{milestone_number}",
        ],
        get: ["GET /repos/{owner}/{repo}/issues/{issue_number}"],
        getComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"],
        getEvent: ["GET /repos/{owner}/{repo}/issues/events/{event_id}"],
        getLabel: ["GET /repos/{owner}/{repo}/labels/{name}"],
        getMilestone: [
          "GET /repos/{owner}/{repo}/milestones/{milestone_number}",
        ],
        list: ["GET /issues"],
        listAssignees: ["GET /repos/{owner}/{repo}/assignees"],
        listComments: [
          "GET /repos/{owner}/{repo}/issues/{issue_number}/comments",
        ],
        listCommentsForRepo: ["GET /repos/{owner}/{repo}/issues/comments"],
        listEvents: ["GET /repos/{owner}/{repo}/issues/{issue_number}/events"],
        listEventsForRepo: ["GET /repos/{owner}/{repo}/issues/events"],
        listEventsForTimeline: [
          "GET /repos/{owner}/{repo}/issues/{issue_number}/timeline",
        ],
        listForAuthenticatedUser: ["GET /user/issues"],
        listForOrg: ["GET /orgs/{org}/issues"],
        listForRepo: ["GET /repos/{owner}/{repo}/issues"],
        listLabelsForMilestone: [
          "GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels",
        ],
        listLabelsForRepo: ["GET /repos/{owner}/{repo}/labels"],
        listLabelsOnIssue: [
          "GET /repos/{owner}/{repo}/issues/{issue_number}/labels",
        ],
        listMilestones: ["GET /repos/{owner}/{repo}/milestones"],
        lock: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"],
        removeAllLabels: [
          "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels",
        ],
        removeAssignees: [
          "DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees",
        ],
        removeLabel: [
          "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}",
        ],
        setLabels: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"],
        unlock: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"],
        update: ["PATCH /repos/{owner}/{repo}/issues/{issue_number}"],
        updateComment: [
          "PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}",
        ],
        updateLabel: ["PATCH /repos/{owner}/{repo}/labels/{name}"],
        updateMilestone: [
          "PATCH /repos/{owner}/{repo}/milestones/{milestone_number}",
        ],
      },
      licenses: {
        get: ["GET /licenses/{license}"],
        getAllCommonlyUsed: ["GET /licenses"],
        getForRepo: ["GET /repos/{owner}/{repo}/license"],
      },
      markdown: {
        render: ["POST /markdown"],
        renderRaw: [
          "POST /markdown/raw",
          { headers: { "content-type": "text/plain; charset=utf-8" } },
        ],
      },
      meta: {
        get: ["GET /meta"],
        getAllVersions: ["GET /versions"],
        getOctocat: ["GET /octocat"],
        getZen: ["GET /zen"],
        root: ["GET /"],
      },
      migrations: {
        deleteArchiveForAuthenticatedUser: [
          "DELETE /user/migrations/{migration_id}/archive",
        ],
        deleteArchiveForOrg: [
          "DELETE /orgs/{org}/migrations/{migration_id}/archive",
        ],
        downloadArchiveForOrg: [
          "GET /orgs/{org}/migrations/{migration_id}/archive",
        ],
        getArchiveForAuthenticatedUser: [
          "GET /user/migrations/{migration_id}/archive",
        ],
        getStatusForAuthenticatedUser: ["GET /user/migrations/{migration_id}"],
        getStatusForOrg: ["GET /orgs/{org}/migrations/{migration_id}"],
        listForAuthenticatedUser: ["GET /user/migrations"],
        listForOrg: ["GET /orgs/{org}/migrations"],
        listReposForAuthenticatedUser: [
          "GET /user/migrations/{migration_id}/repositories",
        ],
        listReposForOrg: [
          "GET /orgs/{org}/migrations/{migration_id}/repositories",
        ],
        listReposForUser: [
          "GET /user/migrations/{migration_id}/repositories",
          {},
          { renamed: ["migrations", "listReposForAuthenticatedUser"] },
        ],
        startForAuthenticatedUser: ["POST /user/migrations"],
        startForOrg: ["POST /orgs/{org}/migrations"],
        unlockRepoForAuthenticatedUser: [
          "DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock",
        ],
        unlockRepoForOrg: [
          "DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock",
        ],
      },
      oidc: {
        getOidcCustomSubTemplateForOrg: [
          "GET /orgs/{org}/actions/oidc/customization/sub",
        ],
        updateOidcCustomSubTemplateForOrg: [
          "PUT /orgs/{org}/actions/oidc/customization/sub",
        ],
      },
      orgs: {
        addSecurityManagerTeam: [
          "PUT /orgs/{org}/security-managers/teams/{team_slug}",
        ],
        assignTeamToOrgRole: [
          "PUT /orgs/{org}/organization-roles/teams/{team_slug}/{role_id}",
        ],
        assignUserToOrgRole: [
          "PUT /orgs/{org}/organization-roles/users/{username}/{role_id}",
        ],
        blockUser: ["PUT /orgs/{org}/blocks/{username}"],
        cancelInvitation: ["DELETE /orgs/{org}/invitations/{invitation_id}"],
        checkBlockedUser: ["GET /orgs/{org}/blocks/{username}"],
        checkMembershipForUser: ["GET /orgs/{org}/members/{username}"],
        checkPublicMembershipForUser: [
          "GET /orgs/{org}/public_members/{username}",
        ],
        convertMemberToOutsideCollaborator: [
          "PUT /orgs/{org}/outside_collaborators/{username}",
        ],
        createCustomOrganizationRole: ["POST /orgs/{org}/organization-roles"],
        createInvitation: ["POST /orgs/{org}/invitations"],
        createOrUpdateCustomProperties: ["PATCH /orgs/{org}/properties/schema"],
        createOrUpdateCustomPropertiesValuesForRepos: [
          "PATCH /orgs/{org}/properties/values",
        ],
        createOrUpdateCustomProperty: [
          "PUT /orgs/{org}/properties/schema/{custom_property_name}",
        ],
        createWebhook: ["POST /orgs/{org}/hooks"],
        delete: ["DELETE /orgs/{org}"],
        deleteCustomOrganizationRole: [
          "DELETE /orgs/{org}/organization-roles/{role_id}",
        ],
        deleteWebhook: ["DELETE /orgs/{org}/hooks/{hook_id}"],
        enableOrDisableSecurityProductOnAllOrgRepos: [
          "POST /orgs/{org}/{security_product}/{enablement}",
        ],
        get: ["GET /orgs/{org}"],
        getAllCustomProperties: ["GET /orgs/{org}/properties/schema"],
        getCustomProperty: [
          "GET /orgs/{org}/properties/schema/{custom_property_name}",
        ],
        getMembershipForAuthenticatedUser: ["GET /user/memberships/orgs/{org}"],
        getMembershipForUser: ["GET /orgs/{org}/memberships/{username}"],
        getOrgRole: ["GET /orgs/{org}/organization-roles/{role_id}"],
        getWebhook: ["GET /orgs/{org}/hooks/{hook_id}"],
        getWebhookConfigForOrg: ["GET /orgs/{org}/hooks/{hook_id}/config"],
        getWebhookDelivery: [
          "GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}",
        ],
        list: ["GET /organizations"],
        listAppInstallations: ["GET /orgs/{org}/installations"],
        listBlockedUsers: ["GET /orgs/{org}/blocks"],
        listCustomPropertiesValuesForRepos: [
          "GET /orgs/{org}/properties/values",
        ],
        listFailedInvitations: ["GET /orgs/{org}/failed_invitations"],
        listForAuthenticatedUser: ["GET /user/orgs"],
        listForUser: ["GET /users/{username}/orgs"],
        listInvitationTeams: [
          "GET /orgs/{org}/invitations/{invitation_id}/teams",
        ],
        listMembers: ["GET /orgs/{org}/members"],
        listMembershipsForAuthenticatedUser: ["GET /user/memberships/orgs"],
        listOrgRoleTeams: [
          "GET /orgs/{org}/organization-roles/{role_id}/teams",
        ],
        listOrgRoleUsers: [
          "GET /orgs/{org}/organization-roles/{role_id}/users",
        ],
        listOrgRoles: ["GET /orgs/{org}/organization-roles"],
        listOrganizationFineGrainedPermissions: [
          "GET /orgs/{org}/organization-fine-grained-permissions",
        ],
        listOutsideCollaborators: ["GET /orgs/{org}/outside_collaborators"],
        listPatGrantRepositories: [
          "GET /orgs/{org}/personal-access-tokens/{pat_id}/repositories",
        ],
        listPatGrantRequestRepositories: [
          "GET /orgs/{org}/personal-access-token-requests/{pat_request_id}/repositories",
        ],
        listPatGrantRequests: [
          "GET /orgs/{org}/personal-access-token-requests",
        ],
        listPatGrants: ["GET /orgs/{org}/personal-access-tokens"],
        listPendingInvitations: ["GET /orgs/{org}/invitations"],
        listPublicMembers: ["GET /orgs/{org}/public_members"],
        listSecurityManagerTeams: ["GET /orgs/{org}/security-managers"],
        listWebhookDeliveries: ["GET /orgs/{org}/hooks/{hook_id}/deliveries"],
        listWebhooks: ["GET /orgs/{org}/hooks"],
        patchCustomOrganizationRole: [
          "PATCH /orgs/{org}/organization-roles/{role_id}",
        ],
        pingWebhook: ["POST /orgs/{org}/hooks/{hook_id}/pings"],
        redeliverWebhookDelivery: [
          "POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts",
        ],
        removeCustomProperty: [
          "DELETE /orgs/{org}/properties/schema/{custom_property_name}",
        ],
        removeMember: ["DELETE /orgs/{org}/members/{username}"],
        removeMembershipForUser: ["DELETE /orgs/{org}/memberships/{username}"],
        removeOutsideCollaborator: [
          "DELETE /orgs/{org}/outside_collaborators/{username}",
        ],
        removePublicMembershipForAuthenticatedUser: [
          "DELETE /orgs/{org}/public_members/{username}",
        ],
        removeSecurityManagerTeam: [
          "DELETE /orgs/{org}/security-managers/teams/{team_slug}",
        ],
        reviewPatGrantRequest: [
          "POST /orgs/{org}/personal-access-token-requests/{pat_request_id}",
        ],
        reviewPatGrantRequestsInBulk: [
          "POST /orgs/{org}/personal-access-token-requests",
        ],
        revokeAllOrgRolesTeam: [
          "DELETE /orgs/{org}/organization-roles/teams/{team_slug}",
        ],
        revokeAllOrgRolesUser: [
          "DELETE /orgs/{org}/organization-roles/users/{username}",
        ],
        revokeOrgRoleTeam: [
          "DELETE /orgs/{org}/organization-roles/teams/{team_slug}/{role_id}",
        ],
        revokeOrgRoleUser: [
          "DELETE /orgs/{org}/organization-roles/users/{username}/{role_id}",
        ],
        setMembershipForUser: ["PUT /orgs/{org}/memberships/{username}"],
        setPublicMembershipForAuthenticatedUser: [
          "PUT /orgs/{org}/public_members/{username}",
        ],
        unblockUser: ["DELETE /orgs/{org}/blocks/{username}"],
        update: ["PATCH /orgs/{org}"],
        updateMembershipForAuthenticatedUser: [
          "PATCH /user/memberships/orgs/{org}",
        ],
        updatePatAccess: ["POST /orgs/{org}/personal-access-tokens/{pat_id}"],
        updatePatAccesses: ["POST /orgs/{org}/personal-access-tokens"],
        updateWebhook: ["PATCH /orgs/{org}/hooks/{hook_id}"],
        updateWebhookConfigForOrg: ["PATCH /orgs/{org}/hooks/{hook_id}/config"],
      },
      packages: {
        deletePackageForAuthenticatedUser: [
          "DELETE /user/packages/{package_type}/{package_name}",
        ],
        deletePackageForOrg: [
          "DELETE /orgs/{org}/packages/{package_type}/{package_name}",
        ],
        deletePackageForUser: [
          "DELETE /users/{username}/packages/{package_type}/{package_name}",
        ],
        deletePackageVersionForAuthenticatedUser: [
          "DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}",
        ],
        deletePackageVersionForOrg: [
          "DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}",
        ],
        deletePackageVersionForUser: [
          "DELETE /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}",
        ],
        getAllPackageVersionsForAPackageOwnedByAnOrg: [
          "GET /orgs/{org}/packages/{package_type}/{package_name}/versions",
          {},
          {
            renamed: ["packages", "getAllPackageVersionsForPackageOwnedByOrg"],
          },
        ],
        getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser: [
          "GET /user/packages/{package_type}/{package_name}/versions",
          {},
          {
            renamed: [
              "packages",
              "getAllPackageVersionsForPackageOwnedByAuthenticatedUser",
            ],
          },
        ],
        getAllPackageVersionsForPackageOwnedByAuthenticatedUser: [
          "GET /user/packages/{package_type}/{package_name}/versions",
        ],
        getAllPackageVersionsForPackageOwnedByOrg: [
          "GET /orgs/{org}/packages/{package_type}/{package_name}/versions",
        ],
        getAllPackageVersionsForPackageOwnedByUser: [
          "GET /users/{username}/packages/{package_type}/{package_name}/versions",
        ],
        getPackageForAuthenticatedUser: [
          "GET /user/packages/{package_type}/{package_name}",
        ],
        getPackageForOrganization: [
          "GET /orgs/{org}/packages/{package_type}/{package_name}",
        ],
        getPackageForUser: [
          "GET /users/{username}/packages/{package_type}/{package_name}",
        ],
        getPackageVersionForAuthenticatedUser: [
          "GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}",
        ],
        getPackageVersionForOrganization: [
          "GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}",
        ],
        getPackageVersionForUser: [
          "GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}",
        ],
        listDockerMigrationConflictingPackagesForAuthenticatedUser: [
          "GET /user/docker/conflicts",
        ],
        listDockerMigrationConflictingPackagesForOrganization: [
          "GET /orgs/{org}/docker/conflicts",
        ],
        listDockerMigrationConflictingPackagesForUser: [
          "GET /users/{username}/docker/conflicts",
        ],
        listPackagesForAuthenticatedUser: ["GET /user/packages"],
        listPackagesForOrganization: ["GET /orgs/{org}/packages"],
        listPackagesForUser: ["GET /users/{username}/packages"],
        restorePackageForAuthenticatedUser: [
          "POST /user/packages/{package_type}/{package_name}/restore{?token}",
        ],
        restorePackageForOrg: [
          "POST /orgs/{org}/packages/{package_type}/{package_name}/restore{?token}",
        ],
        restorePackageForUser: [
          "POST /users/{username}/packages/{package_type}/{package_name}/restore{?token}",
        ],
        restorePackageVersionForAuthenticatedUser: [
          "POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore",
        ],
        restorePackageVersionForOrg: [
          "POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore",
        ],
        restorePackageVersionForUser: [
          "POST /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore",
        ],
      },
      projects: {
        addCollaborator: [
          "PUT /projects/{project_id}/collaborators/{username}",
        ],
        createCard: ["POST /projects/columns/{column_id}/cards"],
        createColumn: ["POST /projects/{project_id}/columns"],
        createForAuthenticatedUser: ["POST /user/projects"],
        createForOrg: ["POST /orgs/{org}/projects"],
        createForRepo: ["POST /repos/{owner}/{repo}/projects"],
        delete: ["DELETE /projects/{project_id}"],
        deleteCard: ["DELETE /projects/columns/cards/{card_id}"],
        deleteColumn: ["DELETE /projects/columns/{column_id}"],
        get: ["GET /projects/{project_id}"],
        getCard: ["GET /projects/columns/cards/{card_id}"],
        getColumn: ["GET /projects/columns/{column_id}"],
        getPermissionForUser: [
          "GET /projects/{project_id}/collaborators/{username}/permission",
        ],
        listCards: ["GET /projects/columns/{column_id}/cards"],
        listCollaborators: ["GET /projects/{project_id}/collaborators"],
        listColumns: ["GET /projects/{project_id}/columns"],
        listForOrg: ["GET /orgs/{org}/projects"],
        listForRepo: ["GET /repos/{owner}/{repo}/projects"],
        listForUser: ["GET /users/{username}/projects"],
        moveCard: ["POST /projects/columns/cards/{card_id}/moves"],
        moveColumn: ["POST /projects/columns/{column_id}/moves"],
        removeCollaborator: [
          "DELETE /projects/{project_id}/collaborators/{username}",
        ],
        update: ["PATCH /projects/{project_id}"],
        updateCard: ["PATCH /projects/columns/cards/{card_id}"],
        updateColumn: ["PATCH /projects/columns/{column_id}"],
      },
      pulls: {
        checkIfMerged: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
        create: ["POST /repos/{owner}/{repo}/pulls"],
        createReplyForReviewComment: [
          "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies",
        ],
        createReview: [
          "POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews",
        ],
        createReviewComment: [
          "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments",
        ],
        deletePendingReview: [
          "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}",
        ],
        deleteReviewComment: [
          "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}",
        ],
        dismissReview: [
          "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals",
        ],
        get: ["GET /repos/{owner}/{repo}/pulls/{pull_number}"],
        getReview: [
          "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}",
        ],
        getReviewComment: [
          "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}",
        ],
        list: ["GET /repos/{owner}/{repo}/pulls"],
        listCommentsForReview: [
          "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments",
        ],
        listCommits: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"],
        listFiles: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"],
        listRequestedReviewers: [
          "GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
        ],
        listReviewComments: [
          "GET /repos/{owner}/{repo}/pulls/{pull_number}/comments",
        ],
        listReviewCommentsForRepo: ["GET /repos/{owner}/{repo}/pulls/comments"],
        listReviews: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
        merge: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
        removeRequestedReviewers: [
          "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
        ],
        requestReviewers: [
          "POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
        ],
        submitReview: [
          "POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events",
        ],
        update: ["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"],
        updateBranch: [
          "PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch",
        ],
        updateReview: [
          "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}",
        ],
        updateReviewComment: [
          "PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}",
        ],
      },
      rateLimit: { get: ["GET /rate_limit"] },
      reactions: {
        createForCommitComment: [
          "POST /repos/{owner}/{repo}/comments/{comment_id}/reactions",
        ],
        createForIssue: [
          "POST /repos/{owner}/{repo}/issues/{issue_number}/reactions",
        ],
        createForIssueComment: [
          "POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
        ],
        createForPullRequestReviewComment: [
          "POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions",
        ],
        createForRelease: [
          "POST /repos/{owner}/{repo}/releases/{release_id}/reactions",
        ],
        createForTeamDiscussionCommentInOrg: [
          "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions",
        ],
        createForTeamDiscussionInOrg: [
          "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions",
        ],
        deleteForCommitComment: [
          "DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}",
        ],
        deleteForIssue: [
          "DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}",
        ],
        deleteForIssueComment: [
          "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}",
        ],
        deleteForPullRequestComment: [
          "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}",
        ],
        deleteForRelease: [
          "DELETE /repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}",
        ],
        deleteForTeamDiscussion: [
          "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}",
        ],
        deleteForTeamDiscussionComment: [
          "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}",
        ],
        listForCommitComment: [
          "GET /repos/{owner}/{repo}/comments/{comment_id}/reactions",
        ],
        listForIssue: [
          "GET /repos/{owner}/{repo}/issues/{issue_number}/reactions",
        ],
        listForIssueComment: [
          "GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
        ],
        listForPullRequestReviewComment: [
          "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions",
        ],
        listForRelease: [
          "GET /repos/{owner}/{repo}/releases/{release_id}/reactions",
        ],
        listForTeamDiscussionCommentInOrg: [
          "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions",
        ],
        listForTeamDiscussionInOrg: [
          "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions",
        ],
      },
      repos: {
        acceptInvitation: [
          "PATCH /user/repository_invitations/{invitation_id}",
          {},
          { renamed: ["repos", "acceptInvitationForAuthenticatedUser"] },
        ],
        acceptInvitationForAuthenticatedUser: [
          "PATCH /user/repository_invitations/{invitation_id}",
        ],
        addAppAccessRestrictions: [
          "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
          {},
          { mapToData: "apps" },
        ],
        addCollaborator: ["PUT /repos/{owner}/{repo}/collaborators/{username}"],
        addStatusCheckContexts: [
          "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
          {},
          { mapToData: "contexts" },
        ],
        addTeamAccessRestrictions: [
          "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
          {},
          { mapToData: "teams" },
        ],
        addUserAccessRestrictions: [
          "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
          {},
          { mapToData: "users" },
        ],
        cancelPagesDeployment: [
          "POST /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}/cancel",
        ],
        checkAutomatedSecurityFixes: [
          "GET /repos/{owner}/{repo}/automated-security-fixes",
        ],
        checkCollaborator: [
          "GET /repos/{owner}/{repo}/collaborators/{username}",
        ],
        checkPrivateVulnerabilityReporting: [
          "GET /repos/{owner}/{repo}/private-vulnerability-reporting",
        ],
        checkVulnerabilityAlerts: [
          "GET /repos/{owner}/{repo}/vulnerability-alerts",
        ],
        codeownersErrors: ["GET /repos/{owner}/{repo}/codeowners/errors"],
        compareCommits: ["GET /repos/{owner}/{repo}/compare/{base}...{head}"],
        compareCommitsWithBasehead: [
          "GET /repos/{owner}/{repo}/compare/{basehead}",
        ],
        createAutolink: ["POST /repos/{owner}/{repo}/autolinks"],
        createCommitComment: [
          "POST /repos/{owner}/{repo}/commits/{commit_sha}/comments",
        ],
        createCommitSignatureProtection: [
          "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
        ],
        createCommitStatus: ["POST /repos/{owner}/{repo}/statuses/{sha}"],
        createDeployKey: ["POST /repos/{owner}/{repo}/keys"],
        createDeployment: ["POST /repos/{owner}/{repo}/deployments"],
        createDeploymentBranchPolicy: [
          "POST /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies",
        ],
        createDeploymentProtectionRule: [
          "POST /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules",
        ],
        createDeploymentStatus: [
          "POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses",
        ],
        createDispatchEvent: ["POST /repos/{owner}/{repo}/dispatches"],
        createForAuthenticatedUser: ["POST /user/repos"],
        createFork: ["POST /repos/{owner}/{repo}/forks"],
        createInOrg: ["POST /orgs/{org}/repos"],
        createOrUpdateCustomPropertiesValues: [
          "PATCH /repos/{owner}/{repo}/properties/values",
        ],
        createOrUpdateEnvironment: [
          "PUT /repos/{owner}/{repo}/environments/{environment_name}",
        ],
        createOrUpdateFileContents: [
          "PUT /repos/{owner}/{repo}/contents/{path}",
        ],
        createOrgRuleset: ["POST /orgs/{org}/rulesets"],
        createPagesDeployment: ["POST /repos/{owner}/{repo}/pages/deployments"],
        createPagesSite: ["POST /repos/{owner}/{repo}/pages"],
        createRelease: ["POST /repos/{owner}/{repo}/releases"],
        createRepoRuleset: ["POST /repos/{owner}/{repo}/rulesets"],
        createTagProtection: ["POST /repos/{owner}/{repo}/tags/protection"],
        createUsingTemplate: [
          "POST /repos/{template_owner}/{template_repo}/generate",
        ],
        createWebhook: ["POST /repos/{owner}/{repo}/hooks"],
        declineInvitation: [
          "DELETE /user/repository_invitations/{invitation_id}",
          {},
          { renamed: ["repos", "declineInvitationForAuthenticatedUser"] },
        ],
        declineInvitationForAuthenticatedUser: [
          "DELETE /user/repository_invitations/{invitation_id}",
        ],
        delete: ["DELETE /repos/{owner}/{repo}"],
        deleteAccessRestrictions: [
          "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions",
        ],
        deleteAdminBranchProtection: [
          "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins",
        ],
        deleteAnEnvironment: [
          "DELETE /repos/{owner}/{repo}/environments/{environment_name}",
        ],
        deleteAutolink: [
          "DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}",
        ],
        deleteBranchProtection: [
          "DELETE /repos/{owner}/{repo}/branches/{branch}/protection",
        ],
        deleteCommitComment: [
          "DELETE /repos/{owner}/{repo}/comments/{comment_id}",
        ],
        deleteCommitSignatureProtection: [
          "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
        ],
        deleteDeployKey: ["DELETE /repos/{owner}/{repo}/keys/{key_id}"],
        deleteDeployment: [
          "DELETE /repos/{owner}/{repo}/deployments/{deployment_id}",
        ],
        deleteDeploymentBranchPolicy: [
          "DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}",
        ],
        deleteFile: ["DELETE /repos/{owner}/{repo}/contents/{path}"],
        deleteInvitation: [
          "DELETE /repos/{owner}/{repo}/invitations/{invitation_id}",
        ],
        deleteOrgRuleset: ["DELETE /orgs/{org}/rulesets/{ruleset_id}"],
        deletePagesSite: ["DELETE /repos/{owner}/{repo}/pages"],
        deletePullRequestReviewProtection: [
          "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews",
        ],
        deleteRelease: ["DELETE /repos/{owner}/{repo}/releases/{release_id}"],
        deleteReleaseAsset: [
          "DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}",
        ],
        deleteRepoRuleset: [
          "DELETE /repos/{owner}/{repo}/rulesets/{ruleset_id}",
        ],
        deleteTagProtection: [
          "DELETE /repos/{owner}/{repo}/tags/protection/{tag_protection_id}",
        ],
        deleteWebhook: ["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"],
        disableAutomatedSecurityFixes: [
          "DELETE /repos/{owner}/{repo}/automated-security-fixes",
        ],
        disableDeploymentProtectionRule: [
          "DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}",
        ],
        disablePrivateVulnerabilityReporting: [
          "DELETE /repos/{owner}/{repo}/private-vulnerability-reporting",
        ],
        disableVulnerabilityAlerts: [
          "DELETE /repos/{owner}/{repo}/vulnerability-alerts",
        ],
        downloadArchive: [
          "GET /repos/{owner}/{repo}/zipball/{ref}",
          {},
          { renamed: ["repos", "downloadZipballArchive"] },
        ],
        downloadTarballArchive: ["GET /repos/{owner}/{repo}/tarball/{ref}"],
        downloadZipballArchive: ["GET /repos/{owner}/{repo}/zipball/{ref}"],
        enableAutomatedSecurityFixes: [
          "PUT /repos/{owner}/{repo}/automated-security-fixes",
        ],
        enablePrivateVulnerabilityReporting: [
          "PUT /repos/{owner}/{repo}/private-vulnerability-reporting",
        ],
        enableVulnerabilityAlerts: [
          "PUT /repos/{owner}/{repo}/vulnerability-alerts",
        ],
        generateReleaseNotes: [
          "POST /repos/{owner}/{repo}/releases/generate-notes",
        ],
        get: ["GET /repos/{owner}/{repo}"],
        getAccessRestrictions: [
          "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions",
        ],
        getAdminBranchProtection: [
          "GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins",
        ],
        getAllDeploymentProtectionRules: [
          "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules",
        ],
        getAllEnvironments: ["GET /repos/{owner}/{repo}/environments"],
        getAllStatusCheckContexts: [
          "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
        ],
        getAllTopics: ["GET /repos/{owner}/{repo}/topics"],
        getAppsWithAccessToProtectedBranch: [
          "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
        ],
        getAutolink: ["GET /repos/{owner}/{repo}/autolinks/{autolink_id}"],
        getBranch: ["GET /repos/{owner}/{repo}/branches/{branch}"],
        getBranchProtection: [
          "GET /repos/{owner}/{repo}/branches/{branch}/protection",
        ],
        getBranchRules: ["GET /repos/{owner}/{repo}/rules/branches/{branch}"],
        getClones: ["GET /repos/{owner}/{repo}/traffic/clones"],
        getCodeFrequencyStats: [
          "GET /repos/{owner}/{repo}/stats/code_frequency",
        ],
        getCollaboratorPermissionLevel: [
          "GET /repos/{owner}/{repo}/collaborators/{username}/permission",
        ],
        getCombinedStatusForRef: [
          "GET /repos/{owner}/{repo}/commits/{ref}/status",
        ],
        getCommit: ["GET /repos/{owner}/{repo}/commits/{ref}"],
        getCommitActivityStats: [
          "GET /repos/{owner}/{repo}/stats/commit_activity",
        ],
        getCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}"],
        getCommitSignatureProtection: [
          "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
        ],
        getCommunityProfileMetrics: [
          "GET /repos/{owner}/{repo}/community/profile",
        ],
        getContent: ["GET /repos/{owner}/{repo}/contents/{path}"],
        getContributorsStats: ["GET /repos/{owner}/{repo}/stats/contributors"],
        getCustomDeploymentProtectionRule: [
          "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}",
        ],
        getCustomPropertiesValues: [
          "GET /repos/{owner}/{repo}/properties/values",
        ],
        getDeployKey: ["GET /repos/{owner}/{repo}/keys/{key_id}"],
        getDeployment: [
          "GET /repos/{owner}/{repo}/deployments/{deployment_id}",
        ],
        getDeploymentBranchPolicy: [
          "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}",
        ],
        getDeploymentStatus: [
          "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}",
        ],
        getEnvironment: [
          "GET /repos/{owner}/{repo}/environments/{environment_name}",
        ],
        getLatestPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/latest"],
        getLatestRelease: ["GET /repos/{owner}/{repo}/releases/latest"],
        getOrgRuleSuite: [
          "GET /orgs/{org}/rulesets/rule-suites/{rule_suite_id}",
        ],
        getOrgRuleSuites: ["GET /orgs/{org}/rulesets/rule-suites"],
        getOrgRuleset: ["GET /orgs/{org}/rulesets/{ruleset_id}"],
        getOrgRulesets: ["GET /orgs/{org}/rulesets"],
        getPages: ["GET /repos/{owner}/{repo}/pages"],
        getPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/{build_id}"],
        getPagesDeployment: [
          "GET /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}",
        ],
        getPagesHealthCheck: ["GET /repos/{owner}/{repo}/pages/health"],
        getParticipationStats: [
          "GET /repos/{owner}/{repo}/stats/participation",
        ],
        getPullRequestReviewProtection: [
          "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews",
        ],
        getPunchCardStats: ["GET /repos/{owner}/{repo}/stats/punch_card"],
        getReadme: ["GET /repos/{owner}/{repo}/readme"],
        getReadmeInDirectory: ["GET /repos/{owner}/{repo}/readme/{dir}"],
        getRelease: ["GET /repos/{owner}/{repo}/releases/{release_id}"],
        getReleaseAsset: [
          "GET /repos/{owner}/{repo}/releases/assets/{asset_id}",
        ],
        getReleaseByTag: ["GET /repos/{owner}/{repo}/releases/tags/{tag}"],
        getRepoRuleSuite: [
          "GET /repos/{owner}/{repo}/rulesets/rule-suites/{rule_suite_id}",
        ],
        getRepoRuleSuites: ["GET /repos/{owner}/{repo}/rulesets/rule-suites"],
        getRepoRuleset: ["GET /repos/{owner}/{repo}/rulesets/{ruleset_id}"],
        getRepoRulesets: ["GET /repos/{owner}/{repo}/rulesets"],
        getStatusChecksProtection: [
          "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
        ],
        getTeamsWithAccessToProtectedBranch: [
          "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
        ],
        getTopPaths: ["GET /repos/{owner}/{repo}/traffic/popular/paths"],
        getTopReferrers: [
          "GET /repos/{owner}/{repo}/traffic/popular/referrers",
        ],
        getUsersWithAccessToProtectedBranch: [
          "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
        ],
        getViews: ["GET /repos/{owner}/{repo}/traffic/views"],
        getWebhook: ["GET /repos/{owner}/{repo}/hooks/{hook_id}"],
        getWebhookConfigForRepo: [
          "GET /repos/{owner}/{repo}/hooks/{hook_id}/config",
        ],
        getWebhookDelivery: [
          "GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}",
        ],
        listActivities: ["GET /repos/{owner}/{repo}/activity"],
        listAutolinks: ["GET /repos/{owner}/{repo}/autolinks"],
        listBranches: ["GET /repos/{owner}/{repo}/branches"],
        listBranchesForHeadCommit: [
          "GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head",
        ],
        listCollaborators: ["GET /repos/{owner}/{repo}/collaborators"],
        listCommentsForCommit: [
          "GET /repos/{owner}/{repo}/commits/{commit_sha}/comments",
        ],
        listCommitCommentsForRepo: ["GET /repos/{owner}/{repo}/comments"],
        listCommitStatusesForRef: [
          "GET /repos/{owner}/{repo}/commits/{ref}/statuses",
        ],
        listCommits: ["GET /repos/{owner}/{repo}/commits"],
        listContributors: ["GET /repos/{owner}/{repo}/contributors"],
        listCustomDeploymentRuleIntegrations: [
          "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/apps",
        ],
        listDeployKeys: ["GET /repos/{owner}/{repo}/keys"],
        listDeploymentBranchPolicies: [
          "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies",
        ],
        listDeploymentStatuses: [
          "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses",
        ],
        listDeployments: ["GET /repos/{owner}/{repo}/deployments"],
        listForAuthenticatedUser: ["GET /user/repos"],
        listForOrg: ["GET /orgs/{org}/repos"],
        listForUser: ["GET /users/{username}/repos"],
        listForks: ["GET /repos/{owner}/{repo}/forks"],
        listInvitations: ["GET /repos/{owner}/{repo}/invitations"],
        listInvitationsForAuthenticatedUser: [
          "GET /user/repository_invitations",
        ],
        listLanguages: ["GET /repos/{owner}/{repo}/languages"],
        listPagesBuilds: ["GET /repos/{owner}/{repo}/pages/builds"],
        listPublic: ["GET /repositories"],
        listPullRequestsAssociatedWithCommit: [
          "GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls",
        ],
        listReleaseAssets: [
          "GET /repos/{owner}/{repo}/releases/{release_id}/assets",
        ],
        listReleases: ["GET /repos/{owner}/{repo}/releases"],
        listTagProtection: ["GET /repos/{owner}/{repo}/tags/protection"],
        listTags: ["GET /repos/{owner}/{repo}/tags"],
        listTeams: ["GET /repos/{owner}/{repo}/teams"],
        listWebhookDeliveries: [
          "GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries",
        ],
        listWebhooks: ["GET /repos/{owner}/{repo}/hooks"],
        merge: ["POST /repos/{owner}/{repo}/merges"],
        mergeUpstream: ["POST /repos/{owner}/{repo}/merge-upstream"],
        pingWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"],
        redeliverWebhookDelivery: [
          "POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts",
        ],
        removeAppAccessRestrictions: [
          "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
          {},
          { mapToData: "apps" },
        ],
        removeCollaborator: [
          "DELETE /repos/{owner}/{repo}/collaborators/{username}",
        ],
        removeStatusCheckContexts: [
          "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
          {},
          { mapToData: "contexts" },
        ],
        removeStatusCheckProtection: [
          "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
        ],
        removeTeamAccessRestrictions: [
          "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
          {},
          { mapToData: "teams" },
        ],
        removeUserAccessRestrictions: [
          "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
          {},
          { mapToData: "users" },
        ],
        renameBranch: ["POST /repos/{owner}/{repo}/branches/{branch}/rename"],
        replaceAllTopics: ["PUT /repos/{owner}/{repo}/topics"],
        requestPagesBuild: ["POST /repos/{owner}/{repo}/pages/builds"],
        setAdminBranchProtection: [
          "POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins",
        ],
        setAppAccessRestrictions: [
          "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
          {},
          { mapToData: "apps" },
        ],
        setStatusCheckContexts: [
          "PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
          {},
          { mapToData: "contexts" },
        ],
        setTeamAccessRestrictions: [
          "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
          {},
          { mapToData: "teams" },
        ],
        setUserAccessRestrictions: [
          "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
          {},
          { mapToData: "users" },
        ],
        testPushWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"],
        transfer: ["POST /repos/{owner}/{repo}/transfer"],
        update: ["PATCH /repos/{owner}/{repo}"],
        updateBranchProtection: [
          "PUT /repos/{owner}/{repo}/branches/{branch}/protection",
        ],
        updateCommitComment: [
          "PATCH /repos/{owner}/{repo}/comments/{comment_id}",
        ],
        updateDeploymentBranchPolicy: [
          "PUT /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}",
        ],
        updateInformationAboutPagesSite: ["PUT /repos/{owner}/{repo}/pages"],
        updateInvitation: [
          "PATCH /repos/{owner}/{repo}/invitations/{invitation_id}",
        ],
        updateOrgRuleset: ["PUT /orgs/{org}/rulesets/{ruleset_id}"],
        updatePullRequestReviewProtection: [
          "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews",
        ],
        updateRelease: ["PATCH /repos/{owner}/{repo}/releases/{release_id}"],
        updateReleaseAsset: [
          "PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}",
        ],
        updateRepoRuleset: ["PUT /repos/{owner}/{repo}/rulesets/{ruleset_id}"],
        updateStatusCheckPotection: [
          "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
          {},
          { renamed: ["repos", "updateStatusCheckProtection"] },
        ],
        updateStatusCheckProtection: [
          "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
        ],
        updateWebhook: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"],
        updateWebhookConfigForRepo: [
          "PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config",
        ],
        uploadReleaseAsset: [
          "POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}",
          { baseUrl: "https://uploads.github.com" },
        ],
      },
      search: {
        code: ["GET /search/code"],
        commits: ["GET /search/commits"],
        issuesAndPullRequests: ["GET /search/issues"],
        labels: ["GET /search/labels"],
        repos: ["GET /search/repositories"],
        topics: ["GET /search/topics"],
        users: ["GET /search/users"],
      },
      secretScanning: {
        getAlert: [
          "GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}",
        ],
        listAlertsForEnterprise: [
          "GET /enterprises/{enterprise}/secret-scanning/alerts",
        ],
        listAlertsForOrg: ["GET /orgs/{org}/secret-scanning/alerts"],
        listAlertsForRepo: ["GET /repos/{owner}/{repo}/secret-scanning/alerts"],
        listLocationsForAlert: [
          "GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations",
        ],
        updateAlert: [
          "PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}",
        ],
      },
      securityAdvisories: {
        createFork: [
          "POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/forks",
        ],
        createPrivateVulnerabilityReport: [
          "POST /repos/{owner}/{repo}/security-advisories/reports",
        ],
        createRepositoryAdvisory: [
          "POST /repos/{owner}/{repo}/security-advisories",
        ],
        createRepositoryAdvisoryCveRequest: [
          "POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/cve",
        ],
        getGlobalAdvisory: ["GET /advisories/{ghsa_id}"],
        getRepositoryAdvisory: [
          "GET /repos/{owner}/{repo}/security-advisories/{ghsa_id}",
        ],
        listGlobalAdvisories: ["GET /advisories"],
        listOrgRepositoryAdvisories: ["GET /orgs/{org}/security-advisories"],
        listRepositoryAdvisories: [
          "GET /repos/{owner}/{repo}/security-advisories",
        ],
        updateRepositoryAdvisory: [
          "PATCH /repos/{owner}/{repo}/security-advisories/{ghsa_id}",
        ],
      },
      teams: {
        addOrUpdateMembershipForUserInOrg: [
          "PUT /orgs/{org}/teams/{team_slug}/memberships/{username}",
        ],
        addOrUpdateProjectPermissionsInOrg: [
          "PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}",
        ],
        addOrUpdateRepoPermissionsInOrg: [
          "PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
        ],
        checkPermissionsForProjectInOrg: [
          "GET /orgs/{org}/teams/{team_slug}/projects/{project_id}",
        ],
        checkPermissionsForRepoInOrg: [
          "GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
        ],
        create: ["POST /orgs/{org}/teams"],
        createDiscussionCommentInOrg: [
          "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments",
        ],
        createDiscussionInOrg: [
          "POST /orgs/{org}/teams/{team_slug}/discussions",
        ],
        deleteDiscussionCommentInOrg: [
          "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}",
        ],
        deleteDiscussionInOrg: [
          "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}",
        ],
        deleteInOrg: ["DELETE /orgs/{org}/teams/{team_slug}"],
        getByName: ["GET /orgs/{org}/teams/{team_slug}"],
        getDiscussionCommentInOrg: [
          "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}",
        ],
        getDiscussionInOrg: [
          "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}",
        ],
        getMembershipForUserInOrg: [
          "GET /orgs/{org}/teams/{team_slug}/memberships/{username}",
        ],
        list: ["GET /orgs/{org}/teams"],
        listChildInOrg: ["GET /orgs/{org}/teams/{team_slug}/teams"],
        listDiscussionCommentsInOrg: [
          "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments",
        ],
        listDiscussionsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions"],
        listForAuthenticatedUser: ["GET /user/teams"],
        listMembersInOrg: ["GET /orgs/{org}/teams/{team_slug}/members"],
        listPendingInvitationsInOrg: [
          "GET /orgs/{org}/teams/{team_slug}/invitations",
        ],
        listProjectsInOrg: ["GET /orgs/{org}/teams/{team_slug}/projects"],
        listReposInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos"],
        removeMembershipForUserInOrg: [
          "DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}",
        ],
        removeProjectInOrg: [
          "DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}",
        ],
        removeRepoInOrg: [
          "DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
        ],
        updateDiscussionCommentInOrg: [
          "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}",
        ],
        updateDiscussionInOrg: [
          "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}",
        ],
        updateInOrg: ["PATCH /orgs/{org}/teams/{team_slug}"],
      },
      users: {
        addEmailForAuthenticated: [
          "POST /user/emails",
          {},
          { renamed: ["users", "addEmailForAuthenticatedUser"] },
        ],
        addEmailForAuthenticatedUser: ["POST /user/emails"],
        addSocialAccountForAuthenticatedUser: ["POST /user/social_accounts"],
        block: ["PUT /user/blocks/{username}"],
        checkBlocked: ["GET /user/blocks/{username}"],
        checkFollowingForUser: [
          "GET /users/{username}/following/{target_user}",
        ],
        checkPersonIsFollowedByAuthenticated: [
          "GET /user/following/{username}",
        ],
        createGpgKeyForAuthenticated: [
          "POST /user/gpg_keys",
          {},
          { renamed: ["users", "createGpgKeyForAuthenticatedUser"] },
        ],
        createGpgKeyForAuthenticatedUser: ["POST /user/gpg_keys"],
        createPublicSshKeyForAuthenticated: [
          "POST /user/keys",
          {},
          { renamed: ["users", "createPublicSshKeyForAuthenticatedUser"] },
        ],
        createPublicSshKeyForAuthenticatedUser: ["POST /user/keys"],
        createSshSigningKeyForAuthenticatedUser: [
          "POST /user/ssh_signing_keys",
        ],
        deleteEmailForAuthenticated: [
          "DELETE /user/emails",
          {},
          { renamed: ["users", "deleteEmailForAuthenticatedUser"] },
        ],
        deleteEmailForAuthenticatedUser: ["DELETE /user/emails"],
        deleteGpgKeyForAuthenticated: [
          "DELETE /user/gpg_keys/{gpg_key_id}",
          {},
          { renamed: ["users", "deleteGpgKeyForAuthenticatedUser"] },
        ],
        deleteGpgKeyForAuthenticatedUser: [
          "DELETE /user/gpg_keys/{gpg_key_id}",
        ],
        deletePublicSshKeyForAuthenticated: [
          "DELETE /user/keys/{key_id}",
          {},
          { renamed: ["users", "deletePublicSshKeyForAuthenticatedUser"] },
        ],
        deletePublicSshKeyForAuthenticatedUser: ["DELETE /user/keys/{key_id}"],
        deleteSocialAccountForAuthenticatedUser: [
          "DELETE /user/social_accounts",
        ],
        deleteSshSigningKeyForAuthenticatedUser: [
          "DELETE /user/ssh_signing_keys/{ssh_signing_key_id}",
        ],
        follow: ["PUT /user/following/{username}"],
        getAuthenticated: ["GET /user"],
        getByUsername: ["GET /users/{username}"],
        getContextForUser: ["GET /users/{username}/hovercard"],
        getGpgKeyForAuthenticated: [
          "GET /user/gpg_keys/{gpg_key_id}",
          {},
          { renamed: ["users", "getGpgKeyForAuthenticatedUser"] },
        ],
        getGpgKeyForAuthenticatedUser: ["GET /user/gpg_keys/{gpg_key_id}"],
        getPublicSshKeyForAuthenticated: [
          "GET /user/keys/{key_id}",
          {},
          { renamed: ["users", "getPublicSshKeyForAuthenticatedUser"] },
        ],
        getPublicSshKeyForAuthenticatedUser: ["GET /user/keys/{key_id}"],
        getSshSigningKeyForAuthenticatedUser: [
          "GET /user/ssh_signing_keys/{ssh_signing_key_id}",
        ],
        list: ["GET /users"],
        listBlockedByAuthenticated: [
          "GET /user/blocks",
          {},
          { renamed: ["users", "listBlockedByAuthenticatedUser"] },
        ],
        listBlockedByAuthenticatedUser: ["GET /user/blocks"],
        listEmailsForAuthenticated: [
          "GET /user/emails",
          {},
          { renamed: ["users", "listEmailsForAuthenticatedUser"] },
        ],
        listEmailsForAuthenticatedUser: ["GET /user/emails"],
        listFollowedByAuthenticated: [
          "GET /user/following",
          {},
          { renamed: ["users", "listFollowedByAuthenticatedUser"] },
        ],
        listFollowedByAuthenticatedUser: ["GET /user/following"],
        listFollowersForAuthenticatedUser: ["GET /user/followers"],
        listFollowersForUser: ["GET /users/{username}/followers"],
        listFollowingForUser: ["GET /users/{username}/following"],
        listGpgKeysForAuthenticated: [
          "GET /user/gpg_keys",
          {},
          { renamed: ["users", "listGpgKeysForAuthenticatedUser"] },
        ],
        listGpgKeysForAuthenticatedUser: ["GET /user/gpg_keys"],
        listGpgKeysForUser: ["GET /users/{username}/gpg_keys"],
        listPublicEmailsForAuthenticated: [
          "GET /user/public_emails",
          {},
          { renamed: ["users", "listPublicEmailsForAuthenticatedUser"] },
        ],
        listPublicEmailsForAuthenticatedUser: ["GET /user/public_emails"],
        listPublicKeysForUser: ["GET /users/{username}/keys"],
        listPublicSshKeysForAuthenticated: [
          "GET /user/keys",
          {},
          { renamed: ["users", "listPublicSshKeysForAuthenticatedUser"] },
        ],
        listPublicSshKeysForAuthenticatedUser: ["GET /user/keys"],
        listSocialAccountsForAuthenticatedUser: ["GET /user/social_accounts"],
        listSocialAccountsForUser: ["GET /users/{username}/social_accounts"],
        listSshSigningKeysForAuthenticatedUser: ["GET /user/ssh_signing_keys"],
        listSshSigningKeysForUser: ["GET /users/{username}/ssh_signing_keys"],
        setPrimaryEmailVisibilityForAuthenticated: [
          "PATCH /user/email/visibility",
          {},
          {
            renamed: ["users", "setPrimaryEmailVisibilityForAuthenticatedUser"],
          },
        ],
        setPrimaryEmailVisibilityForAuthenticatedUser: [
          "PATCH /user/email/visibility",
        ],
        unblock: ["DELETE /user/blocks/{username}"],
        unfollow: ["DELETE /user/following/{username}"],
        updateAuthenticated: ["PATCH /user"],
      },
    };
  var Mw = Iw;
  const As = new Map();
  for (const [e, t] of Object.entries(Mw))
    for (const [r, n] of Object.entries(t)) {
      const [s, o, i] = n,
        [a, l] = s.split(/ /),
        c = Object.assign({ method: a, url: l }, o);
      As.has(e) || As.set(e, new Map()),
        As.get(e).set(r, {
          scope: e,
          methodName: r,
          endpointDefaults: c,
          decorations: i,
        });
    }
  const Dw = {
    has({ scope: e }, t) {
      return As.get(e).has(t);
    },
    getOwnPropertyDescriptor(e, t) {
      return {
        value: this.get(e, t),
        configurable: !0,
        writable: !0,
        enumerable: !0,
      };
    },
    defineProperty(e, t, r) {
      return Object.defineProperty(e.cache, t, r), !0;
    },
    deleteProperty(e, t) {
      return delete e.cache[t], !0;
    },
    ownKeys({ scope: e }) {
      return [...As.get(e).keys()];
    },
    set(e, t, r) {
      return (e.cache[t] = r);
    },
    get({ octokit: e, scope: t, cache: r }, n) {
      if (r[n]) return r[n];
      const s = As.get(t).get(n);
      if (!s) return;
      const { endpointDefaults: o, decorations: i } = s;
      return (
        i ? (r[n] = Uw(e, t, n, o, i)) : (r[n] = e.request.defaults(o)), r[n]
      );
    },
  };
  function Gw(e) {
    const t = {};
    for (const r of As.keys())
      t[r] = new Proxy({ octokit: e, scope: r, cache: {} }, Dw);
    return t;
  }
  function Uw(e, t, r, n, s) {
    const o = e.request.defaults(n);
    function i(...a) {
      let l = o.endpoint.merge(...a);
      if (s.mapToData)
        return (
          (l = Object.assign({}, l, {
            data: l[s.mapToData],
            [s.mapToData]: void 0,
          })),
          o(l)
        );
      if (s.renamed) {
        const [c, d] = s.renamed;
        e.log.warn(
          `octokit.${t}.${r}() has been renamed to octokit.${c}.${d}()`,
        );
      }
      if ((s.deprecated && e.log.warn(s.deprecated), s.renamedParameters)) {
        const c = o.endpoint.merge(...a);
        for (const [d, p] of Object.entries(s.renamedParameters))
          d in c &&
            (e.log.warn(
              `"${d}" parameter is deprecated for "octokit.${t}.${r}()". Use "${p}" instead`,
            ),
            p in c || (c[p] = c[d]),
            delete c[d]);
        return o(c);
      }
      return o(...a);
    }
    return Object.assign(i, o);
  }
  function F4(e) {
    return { rest: Gw(e) };
  }
  F4.VERSION = Fw;
  var I4 = { exports: {} };
  (function (e, t) {
    (function (r, n) {
      e.exports = n();
    })(X1, function () {
      var r =
        typeof globalThis < "u"
          ? globalThis
          : typeof window < "u"
            ? window
            : typeof X1 < "u"
              ? X1
              : typeof self < "u"
                ? self
                : {};
      function n(H) {
        return (H && H.default) || H;
      }
      var s = function (H, x, m = {}) {
          var S, O, R;
          for (S in x) (R = x[S]), (m[S] = (O = H[S]) != null ? O : R);
          return m;
        },
        o = function (H, x, m = {}) {
          var S, O;
          for (S in H) (O = H[S]), x[S] !== void 0 && (m[S] = O);
          return m;
        },
        i = { load: s, overwrite: o },
        a;
      a = class {
        constructor(x, m) {
          (this.incr = x),
            (this.decr = m),
            (this._first = null),
            (this._last = null),
            (this.length = 0);
        }
        push(x) {
          var m;
          this.length++,
            typeof this.incr == "function" && this.incr(),
            (m = { value: x, prev: this._last, next: null }),
            this._last != null
              ? ((this._last.next = m), (this._last = m))
              : (this._first = this._last = m);
        }
        shift() {
          var x;
          if (this._first != null)
            return (
              this.length--,
              typeof this.decr == "function" && this.decr(),
              (x = this._first.value),
              (this._first = this._first.next) != null
                ? (this._first.prev = null)
                : (this._last = null),
              x
            );
        }
        first() {
          if (this._first != null) return this._first.value;
        }
        getArray() {
          var x, m, S;
          for (x = this._first, S = []; x != null; )
            S.push(((m = x), (x = x.next), m.value));
          return S;
        }
        forEachShift(x) {
          var m;
          for (m = this.shift(); m != null; ) x(m), (m = this.shift());
        }
        debug() {
          var x, m, S, O, R;
          for (x = this._first, R = []; x != null; )
            R.push(
              ((m = x),
              (x = x.next),
              {
                value: m.value,
                prev: (S = m.prev) != null ? S.value : void 0,
                next: (O = m.next) != null ? O.value : void 0,
              }),
            );
          return R;
        }
      };
      var l = a,
        c;
      c = class {
        constructor(x) {
          if (
            ((this.instance = x),
            (this._events = {}),
            this.instance.on != null ||
              this.instance.once != null ||
              this.instance.removeAllListeners != null)
          )
            throw new Error("An Emitter already exists for this object");
          (this.instance.on = (m, S) => this._addListener(m, "many", S)),
            (this.instance.once = (m, S) => this._addListener(m, "once", S)),
            (this.instance.removeAllListeners = (m = null) =>
              m != null ? delete this._events[m] : (this._events = {}));
        }
        _addListener(x, m, S) {
          var O;
          return (
            (O = this._events)[x] == null && (O[x] = []),
            this._events[x].push({ cb: S, status: m }),
            this.instance
          );
        }
        listenerCount(x) {
          return this._events[x] != null ? this._events[x].length : 0;
        }
        async trigger(x, ...m) {
          var S, O;
          try {
            return (
              x !== "debug" &&
                this.trigger("debug", `Event triggered: ${x}`, m),
              this._events[x] == null
                ? void 0
                : ((this._events[x] = this._events[x].filter(function (R) {
                    return R.status !== "none";
                  })),
                  (O = this._events[x].map(async (R) => {
                    var I, z;
                    if (R.status !== "none") {
                      R.status === "once" && (R.status = "none");
                      try {
                        return (
                          (z = typeof R.cb == "function" ? R.cb(...m) : void 0),
                          typeof (z != null ? z.then : void 0) == "function"
                            ? await z
                            : z
                        );
                      } catch (ge) {
                        return (I = ge), this.trigger("error", I), null;
                      }
                    }
                  })),
                  (await Promise.all(O)).find(function (R) {
                    return R != null;
                  }))
            );
          } catch (R) {
            return (S = R), this.trigger("error", S), null;
          }
        }
      };
      var d = c,
        p,
        f,
        y;
      (p = l),
        (f = d),
        (y = class {
          constructor(x) {
            (this.Events = new f(this)),
              (this._length = 0),
              (this._lists = function () {
                var m, S, O;
                for (
                  O = [], m = 1, S = x;
                  1 <= S ? m <= S : m >= S;
                  1 <= S ? ++m : --m
                )
                  O.push(
                    new p(
                      () => this.incr(),
                      () => this.decr(),
                    ),
                  );
                return O;
              }.call(this));
          }
          incr() {
            if (this._length++ === 0) return this.Events.trigger("leftzero");
          }
          decr() {
            if (--this._length === 0) return this.Events.trigger("zero");
          }
          push(x) {
            return this._lists[x.options.priority].push(x);
          }
          queued(x) {
            return x != null ? this._lists[x].length : this._length;
          }
          shiftAll(x) {
            return this._lists.forEach(function (m) {
              return m.forEachShift(x);
            });
          }
          getFirst(x = this._lists) {
            var m, S, O;
            for (m = 0, S = x.length; m < S; m++)
              if (((O = x[m]), O.length > 0)) return O;
            return [];
          }
          shiftLastFrom(x) {
            return this.getFirst(this._lists.slice(x).reverse()).shift();
          }
        });
      var b = y,
        T;
      T = class extends Error {};
      var _ = T,
        g,
        h,
        v,
        E,
        P;
      (E = 10),
        (h = 5),
        (P = i),
        (g = _),
        (v = class {
          constructor(x, m, S, O, R, I, z, ge) {
            (this.task = x),
              (this.args = m),
              (this.rejectOnDrop = R),
              (this.Events = I),
              (this._states = z),
              (this.Promise = ge),
              (this.options = P.load(S, O)),
              (this.options.priority = this._sanitizePriority(
                this.options.priority,
              )),
              this.options.id === O.id &&
                (this.options.id = `${this.options.id}-${this._randomIndex()}`),
              (this.promise = new this.Promise((Ie, Ze) => {
                (this._resolve = Ie), (this._reject = Ze);
              })),
              (this.retryCount = 0);
          }
          _sanitizePriority(x) {
            var m;
            return (m = ~~x !== x ? h : x), m < 0 ? 0 : m > E - 1 ? E - 1 : m;
          }
          _randomIndex() {
            return Math.random().toString(36).slice(2);
          }
          doDrop({
            error: x,
            message: m = "This job has been dropped by Bottleneck",
          } = {}) {
            return this._states.remove(this.options.id)
              ? (this.rejectOnDrop && this._reject(x ?? new g(m)),
                this.Events.trigger("dropped", {
                  args: this.args,
                  options: this.options,
                  task: this.task,
                  promise: this.promise,
                }),
                !0)
              : !1;
          }
          _assertStatus(x) {
            var m;
            if (
              ((m = this._states.jobStatus(this.options.id)),
              !(m === x || (x === "DONE" && m === null)))
            )
              throw new g(
                `Invalid job status ${m}, expected ${x}. Please open an issue at https://github.com/SGrondin/bottleneck/issues`,
              );
          }
          doReceive() {
            return (
              this._states.start(this.options.id),
              this.Events.trigger("received", {
                args: this.args,
                options: this.options,
              })
            );
          }
          doQueue(x, m) {
            return (
              this._assertStatus("RECEIVED"),
              this._states.next(this.options.id),
              this.Events.trigger("queued", {
                args: this.args,
                options: this.options,
                reachedHWM: x,
                blocked: m,
              })
            );
          }
          doRun() {
            return (
              this.retryCount === 0
                ? (this._assertStatus("QUEUED"),
                  this._states.next(this.options.id))
                : this._assertStatus("EXECUTING"),
              this.Events.trigger("scheduled", {
                args: this.args,
                options: this.options,
              })
            );
          }
          async doExecute(x, m, S, O) {
            var R, I, z;
            this.retryCount === 0
              ? (this._assertStatus("RUNNING"),
                this._states.next(this.options.id))
              : this._assertStatus("EXECUTING"),
              (I = {
                args: this.args,
                options: this.options,
                retryCount: this.retryCount,
              }),
              this.Events.trigger("executing", I);
            try {
              if (
                ((z = await (x != null
                  ? x.schedule(this.options, this.task, ...this.args)
                  : this.task(...this.args))),
                m())
              )
                return (
                  this.doDone(I),
                  await O(this.options, I),
                  this._assertStatus("DONE"),
                  this._resolve(z)
                );
            } catch (ge) {
              return (R = ge), this._onFailure(R, I, m, S, O);
            }
          }
          doExpire(x, m, S) {
            var O, R;
            return (
              this._states.jobStatus(this.options.id === "RUNNING") &&
                this._states.next(this.options.id),
              this._assertStatus("EXECUTING"),
              (R = {
                args: this.args,
                options: this.options,
                retryCount: this.retryCount,
              }),
              (O = new g(
                `This job timed out after ${this.options.expiration} ms.`,
              )),
              this._onFailure(O, R, x, m, S)
            );
          }
          async _onFailure(x, m, S, O, R) {
            var I, z;
            if (S())
              return (
                (I = await this.Events.trigger("failed", x, m)),
                I != null
                  ? ((z = ~~I),
                    this.Events.trigger(
                      "retry",
                      `Retrying ${this.options.id} after ${z} ms`,
                      m,
                    ),
                    this.retryCount++,
                    O(z))
                  : (this.doDone(m),
                    await R(this.options, m),
                    this._assertStatus("DONE"),
                    this._reject(x))
              );
          }
          doDone(x) {
            return (
              this._assertStatus("EXECUTING"),
              this._states.next(this.options.id),
              this.Events.trigger("done", x)
            );
          }
        });
      var L = v,
        A,
        j,
        Z;
      (Z = i),
        (A = _),
        (j = class {
          constructor(x, m, S) {
            (this.instance = x),
              (this.storeOptions = m),
              (this.clientId = this.instance._randomIndex()),
              Z.load(S, S, this),
              (this._nextRequest =
                this._lastReservoirRefresh =
                this._lastReservoirIncrease =
                  Date.now()),
              (this._running = 0),
              (this._done = 0),
              (this._unblockTime = 0),
              (this.ready = this.Promise.resolve()),
              (this.clients = {}),
              this._startHeartbeat();
          }
          _startHeartbeat() {
            var x;
            return this.heartbeat == null &&
              ((this.storeOptions.reservoirRefreshInterval != null &&
                this.storeOptions.reservoirRefreshAmount != null) ||
                (this.storeOptions.reservoirIncreaseInterval != null &&
                  this.storeOptions.reservoirIncreaseAmount != null))
              ? typeof (x = this.heartbeat =
                  setInterval(() => {
                    var m, S, O, R, I;
                    if (
                      ((R = Date.now()),
                      this.storeOptions.reservoirRefreshInterval != null &&
                        R >=
                          this._lastReservoirRefresh +
                            this.storeOptions.reservoirRefreshInterval &&
                        ((this._lastReservoirRefresh = R),
                        (this.storeOptions.reservoir =
                          this.storeOptions.reservoirRefreshAmount),
                        this.instance._drainAll(this.computeCapacity())),
                      this.storeOptions.reservoirIncreaseInterval != null &&
                        R >=
                          this._lastReservoirIncrease +
                            this.storeOptions.reservoirIncreaseInterval &&
                        (({
                          reservoirIncreaseAmount: m,
                          reservoirIncreaseMaximum: O,
                          reservoir: I,
                        } = this.storeOptions),
                        (this._lastReservoirIncrease = R),
                        (S = O != null ? Math.min(m, O - I) : m),
                        S > 0))
                    )
                      return (
                        (this.storeOptions.reservoir += S),
                        this.instance._drainAll(this.computeCapacity())
                      );
                  }, this.heartbeatInterval)).unref == "function"
                ? x.unref()
                : void 0
              : clearInterval(this.heartbeat);
          }
          async __publish__(x) {
            return (
              await this.yieldLoop(),
              this.instance.Events.trigger("message", x.toString())
            );
          }
          async __disconnect__(x) {
            return (
              await this.yieldLoop(),
              clearInterval(this.heartbeat),
              this.Promise.resolve()
            );
          }
          yieldLoop(x = 0) {
            return new this.Promise(function (m, S) {
              return setTimeout(m, x);
            });
          }
          computePenalty() {
            var x;
            return (x = this.storeOptions.penalty) != null
              ? x
              : 15 * this.storeOptions.minTime || 5e3;
          }
          async __updateSettings__(x) {
            return (
              await this.yieldLoop(),
              Z.overwrite(x, x, this.storeOptions),
              this._startHeartbeat(),
              this.instance._drainAll(this.computeCapacity()),
              !0
            );
          }
          async __running__() {
            return await this.yieldLoop(), this._running;
          }
          async __queued__() {
            return await this.yieldLoop(), this.instance.queued();
          }
          async __done__() {
            return await this.yieldLoop(), this._done;
          }
          async __groupCheck__(x) {
            return await this.yieldLoop(), this._nextRequest + this.timeout < x;
          }
          computeCapacity() {
            var x, m;
            return (
              ({ maxConcurrent: x, reservoir: m } = this.storeOptions),
              x != null && m != null
                ? Math.min(x - this._running, m)
                : x != null
                  ? x - this._running
                  : (m ?? null)
            );
          }
          conditionsCheck(x) {
            var m;
            return (m = this.computeCapacity()), m == null || x <= m;
          }
          async __incrementReservoir__(x) {
            var m;
            return (
              await this.yieldLoop(),
              (m = this.storeOptions.reservoir += x),
              this.instance._drainAll(this.computeCapacity()),
              m
            );
          }
          async __currentReservoir__() {
            return await this.yieldLoop(), this.storeOptions.reservoir;
          }
          isBlocked(x) {
            return this._unblockTime >= x;
          }
          check(x, m) {
            return this.conditionsCheck(x) && this._nextRequest - m <= 0;
          }
          async __check__(x) {
            var m;
            return await this.yieldLoop(), (m = Date.now()), this.check(x, m);
          }
          async __register__(x, m, S) {
            var O, R;
            return (
              await this.yieldLoop(),
              (O = Date.now()),
              this.conditionsCheck(m)
                ? ((this._running += m),
                  this.storeOptions.reservoir != null &&
                    (this.storeOptions.reservoir -= m),
                  (R = Math.max(this._nextRequest - O, 0)),
                  (this._nextRequest = O + R + this.storeOptions.minTime),
                  {
                    success: !0,
                    wait: R,
                    reservoir: this.storeOptions.reservoir,
                  })
                : { success: !1 }
            );
          }
          strategyIsBlock() {
            return this.storeOptions.strategy === 3;
          }
          async __submit__(x, m) {
            var S, O, R;
            if (
              (await this.yieldLoop(),
              this.storeOptions.maxConcurrent != null &&
                m > this.storeOptions.maxConcurrent)
            )
              throw new A(
                `Impossible to add a job having a weight of ${m} to a limiter having a maxConcurrent setting of ${this.storeOptions.maxConcurrent}`,
              );
            return (
              (O = Date.now()),
              (R =
                this.storeOptions.highWater != null &&
                x === this.storeOptions.highWater &&
                !this.check(m, O)),
              (S = this.strategyIsBlock() && (R || this.isBlocked(O))),
              S &&
                ((this._unblockTime = O + this.computePenalty()),
                (this._nextRequest =
                  this._unblockTime + this.storeOptions.minTime),
                this.instance._dropAllQueued()),
              {
                reachedHWM: R,
                blocked: S,
                strategy: this.storeOptions.strategy,
              }
            );
          }
          async __free__(x, m) {
            return (
              await this.yieldLoop(),
              (this._running -= m),
              (this._done += m),
              this.instance._drainAll(this.computeCapacity()),
              { running: this._running }
            );
          }
        });
      var K = j,
        X,
        ne;
      (X = _),
        (ne = class {
          constructor(x) {
            (this.status = x),
              (this._jobs = {}),
              (this.counts = this.status.map(function () {
                return 0;
              }));
          }
          next(x) {
            var m, S;
            if (
              ((m = this._jobs[x]),
              (S = m + 1),
              m != null && S < this.status.length)
            )
              return this.counts[m]--, this.counts[S]++, this._jobs[x]++;
            if (m != null) return this.counts[m]--, delete this._jobs[x];
          }
          start(x) {
            var m;
            return (m = 0), (this._jobs[x] = m), this.counts[m]++;
          }
          remove(x) {
            var m;
            return (
              (m = this._jobs[x]),
              m != null && (this.counts[m]--, delete this._jobs[x]),
              m != null
            );
          }
          jobStatus(x) {
            var m;
            return (m = this.status[this._jobs[x]]) != null ? m : null;
          }
          statusJobs(x) {
            var m, S, O, R, I;
            if (x != null) {
              if (((S = this.status.indexOf(x)), S < 0))
                throw new X(`status must be one of ${this.status.join(", ")}`);
              (O = this._jobs), (R = []);
              for (m in O) (I = O[m]), I === S && R.push(m);
              return R;
            } else return Object.keys(this._jobs);
          }
          statusCounts() {
            return this.counts.reduce(
              (x, m, S) => ((x[this.status[S]] = m), x),
              {},
            );
          }
        });
      var Ce = ne,
        Fe,
        rr;
      (Fe = l),
        (rr = class {
          constructor(x, m) {
            (this.schedule = this.schedule.bind(this)),
              (this.name = x),
              (this.Promise = m),
              (this._running = 0),
              (this._queue = new Fe());
          }
          isEmpty() {
            return this._queue.length === 0;
          }
          async _tryToRun() {
            var x, m, S, O, R, I, z;
            if (this._running < 1 && this._queue.length > 0)
              return (
                this._running++,
                ({
                  task: z,
                  args: x,
                  resolve: R,
                  reject: O,
                } = this._queue.shift()),
                (m = await (async function () {
                  try {
                    return (
                      (I = await z(...x)),
                      function () {
                        return R(I);
                      }
                    );
                  } catch (ge) {
                    return (
                      (S = ge),
                      function () {
                        return O(S);
                      }
                    );
                  }
                })()),
                this._running--,
                this._tryToRun(),
                m()
              );
          }
          schedule(x, ...m) {
            var S, O, R;
            return (
              (R = O = null),
              (S = new this.Promise(function (I, z) {
                return (R = I), (O = z);
              })),
              this._queue.push({ task: x, args: m, resolve: R, reject: O }),
              this._tryToRun(),
              S
            );
          }
        });
      var St = rr,
        Ut = "2.19.5",
        D = { version: Ut },
        te = Object.freeze({ version: Ut, default: D }),
        re = () =>
          console.log(
            "You must import the full version of Bottleneck in order to use this feature.",
          ),
        Y = () =>
          console.log(
            "You must import the full version of Bottleneck in order to use this feature.",
          ),
        ve = () =>
          console.log(
            "You must import the full version of Bottleneck in order to use this feature.",
          ),
        we,
        tt,
        de,
        Be,
        gt,
        Ar;
      (Ar = i),
        (we = d),
        (Be = re),
        (de = Y),
        (gt = ve),
        (tt = function () {
          class H {
            constructor(m = {}) {
              (this.deleteKey = this.deleteKey.bind(this)),
                (this.limiterOptions = m),
                Ar.load(this.limiterOptions, this.defaults, this),
                (this.Events = new we(this)),
                (this.instances = {}),
                (this.Bottleneck = Re),
                this._startAutoCleanup(),
                (this.sharedConnection = this.connection != null),
                this.connection == null &&
                  (this.limiterOptions.datastore === "redis"
                    ? (this.connection = new Be(
                        Object.assign({}, this.limiterOptions, {
                          Events: this.Events,
                        }),
                      ))
                    : this.limiterOptions.datastore === "ioredis" &&
                      (this.connection = new de(
                        Object.assign({}, this.limiterOptions, {
                          Events: this.Events,
                        }),
                      )));
            }
            key(m = "") {
              var S;
              return (S = this.instances[m]) != null
                ? S
                : (() => {
                    var O;
                    return (
                      (O = this.instances[m] =
                        new this.Bottleneck(
                          Object.assign(this.limiterOptions, {
                            id: `${this.id}-${m}`,
                            timeout: this.timeout,
                            connection: this.connection,
                          }),
                        )),
                      this.Events.trigger("created", O, m),
                      O
                    );
                  })();
            }
            async deleteKey(m = "") {
              var S, O;
              return (
                (O = this.instances[m]),
                this.connection &&
                  (S = await this.connection.__runCommand__([
                    "del",
                    ...gt.allKeys(`${this.id}-${m}`),
                  ])),
                O != null && (delete this.instances[m], await O.disconnect()),
                O != null || S > 0
              );
            }
            limiters() {
              var m, S, O, R;
              (S = this.instances), (O = []);
              for (m in S) (R = S[m]), O.push({ key: m, limiter: R });
              return O;
            }
            keys() {
              return Object.keys(this.instances);
            }
            async clusterKeys() {
              var m, S, O, R, I, z, ge, Ie, Ze;
              if (this.connection == null)
                return this.Promise.resolve(this.keys());
              for (
                z = [], m = null, Ze = `b_${this.id}-`.length, S = 9;
                m !== 0;

              )
                for (
                  [Ie, O] = await this.connection.__runCommand__([
                    "scan",
                    m ?? 0,
                    "match",
                    `b_${this.id}-*_settings`,
                    "count",
                    1e4,
                  ]),
                    m = ~~Ie,
                    R = 0,
                    ge = O.length;
                  R < ge;
                  R++
                )
                  (I = O[R]), z.push(I.slice(Ze, -S));
              return z;
            }
            _startAutoCleanup() {
              var m;
              return (
                clearInterval(this.interval),
                typeof (m = this.interval =
                  setInterval(async () => {
                    var S, O, R, I, z, ge;
                    (z = Date.now()), (R = this.instances), (I = []);
                    for (O in R) {
                      ge = R[O];
                      try {
                        (await ge._store.__groupCheck__(z))
                          ? I.push(this.deleteKey(O))
                          : I.push(void 0);
                      } catch (Ie) {
                        (S = Ie), I.push(ge.Events.trigger("error", S));
                      }
                    }
                    return I;
                  }, this.timeout / 2)).unref == "function"
                  ? m.unref()
                  : void 0
              );
            }
            updateSettings(m = {}) {
              if (
                (Ar.overwrite(m, this.defaults, this),
                Ar.overwrite(m, m, this.limiterOptions),
                m.timeout != null)
              )
                return this._startAutoCleanup();
            }
            disconnect(m = !0) {
              var S;
              if (!this.sharedConnection)
                return (S = this.connection) != null ? S.disconnect(m) : void 0;
            }
          }
          return (
            (H.prototype.defaults = {
              timeout: 1e3 * 60 * 5,
              connection: null,
              Promise,
              id: "group-key",
            }),
            H
          );
        }.call(r));
      var vn = tt,
        yn,
        Kr,
        mr;
      (mr = i),
        (Kr = d),
        (yn = function () {
          class H {
            constructor(m = {}) {
              (this.options = m),
                mr.load(this.options, this.defaults, this),
                (this.Events = new Kr(this)),
                (this._arr = []),
                this._resetPromise(),
                (this._lastFlush = Date.now());
            }
            _resetPromise() {
              return (this._promise = new this.Promise(
                (m, S) => (this._resolve = m),
              ));
            }
            _flush() {
              return (
                clearTimeout(this._timeout),
                (this._lastFlush = Date.now()),
                this._resolve(),
                this.Events.trigger("batch", this._arr),
                (this._arr = []),
                this._resetPromise()
              );
            }
            add(m) {
              var S;
              return (
                this._arr.push(m),
                (S = this._promise),
                this._arr.length === this.maxSize
                  ? this._flush()
                  : this.maxTime != null &&
                    this._arr.length === 1 &&
                    (this._timeout = setTimeout(
                      () => this._flush(),
                      this.maxTime,
                    )),
                S
              );
            }
          }
          return (
            (H.prototype.defaults = { maxTime: null, maxSize: null, Promise }),
            H
          );
        }.call(r));
      var Cn = yn,
        gr = () =>
          console.log(
            "You must import the full version of Bottleneck in order to use this feature.",
          ),
        os = n(te),
        wn,
        vr,
        Pr,
        nr,
        is,
        En,
        k,
        G,
        $,
        B,
        J,
        fe = [].splice;
      (En = 10),
        (vr = 5),
        (J = i),
        (k = b),
        (nr = L),
        (is = K),
        (G = gr),
        (Pr = d),
        ($ = Ce),
        (B = St),
        (wn = function () {
          class H {
            constructor(m = {}, ...S) {
              var O, R;
              (this._addToQueue = this._addToQueue.bind(this)),
                this._validateOptions(m, S),
                J.load(m, this.instanceDefaults, this),
                (this._queues = new k(En)),
                (this._scheduled = {}),
                (this._states = new $(
                  ["RECEIVED", "QUEUED", "RUNNING", "EXECUTING"].concat(
                    this.trackDoneStatus ? ["DONE"] : [],
                  ),
                )),
                (this._limiter = null),
                (this.Events = new Pr(this)),
                (this._submitLock = new B("submit", this.Promise)),
                (this._registerLock = new B("register", this.Promise)),
                (R = J.load(m, this.storeDefaults, {})),
                (this._store = function () {
                  if (
                    this.datastore === "redis" ||
                    this.datastore === "ioredis" ||
                    this.connection != null
                  )
                    return (
                      (O = J.load(m, this.redisStoreDefaults, {})),
                      new G(this, R, O)
                    );
                  if (this.datastore === "local")
                    return (
                      (O = J.load(m, this.localStoreDefaults, {})),
                      new is(this, R, O)
                    );
                  throw new H.prototype.BottleneckError(
                    `Invalid datastore type: ${this.datastore}`,
                  );
                }.call(this)),
                this._queues.on("leftzero", () => {
                  var I;
                  return (I = this._store.heartbeat) != null &&
                    typeof I.ref == "function"
                    ? I.ref()
                    : void 0;
                }),
                this._queues.on("zero", () => {
                  var I;
                  return (I = this._store.heartbeat) != null &&
                    typeof I.unref == "function"
                    ? I.unref()
                    : void 0;
                });
            }
            _validateOptions(m, S) {
              if (!(m != null && typeof m == "object" && S.length === 0))
                throw new H.prototype.BottleneckError(
                  "Bottleneck v2 takes a single object argument. Refer to https://github.com/SGrondin/bottleneck#upgrading-to-v2 if you're upgrading from Bottleneck v1.",
                );
            }
            ready() {
              return this._store.ready;
            }
            clients() {
              return this._store.clients;
            }
            channel() {
              return `b_${this.id}`;
            }
            channel_client() {
              return `b_${this.id}_${this._store.clientId}`;
            }
            publish(m) {
              return this._store.__publish__(m);
            }
            disconnect(m = !0) {
              return this._store.__disconnect__(m);
            }
            chain(m) {
              return (this._limiter = m), this;
            }
            queued(m) {
              return this._queues.queued(m);
            }
            clusterQueued() {
              return this._store.__queued__();
            }
            empty() {
              return this.queued() === 0 && this._submitLock.isEmpty();
            }
            running() {
              return this._store.__running__();
            }
            done() {
              return this._store.__done__();
            }
            jobStatus(m) {
              return this._states.jobStatus(m);
            }
            jobs(m) {
              return this._states.statusJobs(m);
            }
            counts() {
              return this._states.statusCounts();
            }
            _randomIndex() {
              return Math.random().toString(36).slice(2);
            }
            check(m = 1) {
              return this._store.__check__(m);
            }
            _clearGlobalState(m) {
              return this._scheduled[m] != null
                ? (clearTimeout(this._scheduled[m].expiration),
                  delete this._scheduled[m],
                  !0)
                : !1;
            }
            async _free(m, S, O, R) {
              var I, z;
              try {
                if (
                  (({ running: z } = await this._store.__free__(m, O.weight)),
                  this.Events.trigger("debug", `Freed ${O.id}`, R),
                  z === 0 && this.empty())
                )
                  return this.Events.trigger("idle");
              } catch (ge) {
                return (I = ge), this.Events.trigger("error", I);
              }
            }
            _run(m, S, O) {
              var R, I, z;
              return (
                S.doRun(),
                (R = this._clearGlobalState.bind(this, m)),
                (z = this._run.bind(this, m, S)),
                (I = this._free.bind(this, m, S)),
                (this._scheduled[m] = {
                  timeout: setTimeout(
                    () => S.doExecute(this._limiter, R, z, I),
                    O,
                  ),
                  expiration:
                    S.options.expiration != null
                      ? setTimeout(function () {
                          return S.doExpire(R, z, I);
                        }, O + S.options.expiration)
                      : void 0,
                  job: S,
                })
              );
            }
            _drainOne(m) {
              return this._registerLock.schedule(() => {
                var S, O, R, I, z;
                return this.queued() === 0
                  ? this.Promise.resolve(null)
                  : ((z = this._queues.getFirst()),
                    ({ options: I, args: S } = R = z.first()),
                    m != null && I.weight > m
                      ? this.Promise.resolve(null)
                      : (this.Events.trigger("debug", `Draining ${I.id}`, {
                          args: S,
                          options: I,
                        }),
                        (O = this._randomIndex()),
                        this._store
                          .__register__(O, I.weight, I.expiration)
                          .then(({ success: ge, wait: Ie, reservoir: Ze }) => {
                            var as;
                            return (
                              this.Events.trigger("debug", `Drained ${I.id}`, {
                                success: ge,
                                args: S,
                                options: I,
                              }),
                              ge
                                ? (z.shift(),
                                  (as = this.empty()),
                                  as && this.Events.trigger("empty"),
                                  Ze === 0 &&
                                    this.Events.trigger("depleted", as),
                                  this._run(O, R, Ie),
                                  this.Promise.resolve(I.weight))
                                : this.Promise.resolve(null)
                            );
                          })));
              });
            }
            _drainAll(m, S = 0) {
              return this._drainOne(m)
                .then((O) => {
                  var R;
                  return O != null
                    ? ((R = m != null ? m - O : m), this._drainAll(R, S + O))
                    : this.Promise.resolve(S);
                })
                .catch((O) => this.Events.trigger("error", O));
            }
            _dropAllQueued(m) {
              return this._queues.shiftAll(function (S) {
                return S.doDrop({ message: m });
              });
            }
            stop(m = {}) {
              var S, O;
              return (
                (m = J.load(m, this.stopDefaults)),
                (O = (R) => {
                  var I;
                  return (
                    (I = () => {
                      var z;
                      return (
                        (z = this._states.counts),
                        z[0] + z[1] + z[2] + z[3] === R
                      );
                    }),
                    new this.Promise((z, ge) =>
                      I()
                        ? z()
                        : this.on("done", () => {
                            if (I())
                              return this.removeAllListeners("done"), z();
                          }),
                    )
                  );
                }),
                (S = m.dropWaitingJobs
                  ? ((this._run = function (R, I) {
                      return I.doDrop({ message: m.dropErrorMessage });
                    }),
                    (this._drainOne = () => this.Promise.resolve(null)),
                    this._registerLock.schedule(() =>
                      this._submitLock.schedule(() => {
                        var R, I, z;
                        I = this._scheduled;
                        for (R in I)
                          (z = I[R]),
                            this.jobStatus(z.job.options.id) === "RUNNING" &&
                              (clearTimeout(z.timeout),
                              clearTimeout(z.expiration),
                              z.job.doDrop({ message: m.dropErrorMessage }));
                        return this._dropAllQueued(m.dropErrorMessage), O(0);
                      }),
                    ))
                  : this.schedule({ priority: En - 1, weight: 0 }, () => O(1))),
                (this._receive = function (R) {
                  return R._reject(
                    new H.prototype.BottleneckError(m.enqueueErrorMessage),
                  );
                }),
                (this.stop = () =>
                  this.Promise.reject(
                    new H.prototype.BottleneckError(
                      "stop() has already been called",
                    ),
                  )),
                S
              );
            }
            async _addToQueue(m) {
              var S, O, R, I, z, ge, Ie;
              ({ args: S, options: I } = m);
              try {
                ({
                  reachedHWM: z,
                  blocked: O,
                  strategy: Ie,
                } = await this._store.__submit__(this.queued(), I.weight));
              } catch (Ze) {
                return (
                  (R = Ze),
                  this.Events.trigger("debug", `Could not queue ${I.id}`, {
                    args: S,
                    options: I,
                    error: R,
                  }),
                  m.doDrop({ error: R }),
                  !1
                );
              }
              return O
                ? (m.doDrop(), !0)
                : z &&
                    ((ge =
                      Ie === H.prototype.strategy.LEAK
                        ? this._queues.shiftLastFrom(I.priority)
                        : Ie === H.prototype.strategy.OVERFLOW_PRIORITY
                          ? this._queues.shiftLastFrom(I.priority + 1)
                          : Ie === H.prototype.strategy.OVERFLOW
                            ? m
                            : void 0),
                    ge != null && ge.doDrop(),
                    ge == null || Ie === H.prototype.strategy.OVERFLOW)
                  ? (ge == null && m.doDrop(), z)
                  : (m.doQueue(z, O),
                    this._queues.push(m),
                    await this._drainAll(),
                    z);
            }
            _receive(m) {
              return this._states.jobStatus(m.options.id) != null
                ? (m._reject(
                    new H.prototype.BottleneckError(
                      `A job with the same id already exists (id=${m.options.id})`,
                    ),
                  ),
                  !1)
                : (m.doReceive(),
                  this._submitLock.schedule(this._addToQueue, m));
            }
            submit(...m) {
              var S, O, R, I, z, ge, Ie;
              return (
                typeof m[0] == "function"
                  ? ((z = m),
                    ([O, ...m] = z),
                    ([S] = fe.call(m, -1)),
                    (I = J.load({}, this.jobDefaults)))
                  : ((ge = m),
                    ([I, O, ...m] = ge),
                    ([S] = fe.call(m, -1)),
                    (I = J.load(I, this.jobDefaults))),
                (Ie = (...Ze) =>
                  new this.Promise(function (as, Ve) {
                    return O(...Ze, function (...Qr) {
                      return (Qr[0] != null ? Ve : as)(Qr);
                    });
                  })),
                (R = new nr(
                  Ie,
                  m,
                  I,
                  this.jobDefaults,
                  this.rejectOnDrop,
                  this.Events,
                  this._states,
                  this.Promise,
                )),
                R.promise
                  .then(function (Ze) {
                    return typeof S == "function" ? S(...Ze) : void 0;
                  })
                  .catch(function (Ze) {
                    return Array.isArray(Ze)
                      ? typeof S == "function"
                        ? S(...Ze)
                        : void 0
                      : typeof S == "function"
                        ? S(Ze)
                        : void 0;
                  }),
                this._receive(R)
              );
            }
            schedule(...m) {
              var S, O, R;
              return (
                typeof m[0] == "function"
                  ? (([R, ...m] = m), (O = {}))
                  : ([O, R, ...m] = m),
                (S = new nr(
                  R,
                  m,
                  O,
                  this.jobDefaults,
                  this.rejectOnDrop,
                  this.Events,
                  this._states,
                  this.Promise,
                )),
                this._receive(S),
                S.promise
              );
            }
            wrap(m) {
              var S, O;
              return (
                (S = this.schedule.bind(this)),
                (O = function (...R) {
                  return S(m.bind(this), ...R);
                }),
                (O.withOptions = function (R, ...I) {
                  return S(R, m, ...I);
                }),
                O
              );
            }
            async updateSettings(m = {}) {
              return (
                await this._store.__updateSettings__(
                  J.overwrite(m, this.storeDefaults),
                ),
                J.overwrite(m, this.instanceDefaults, this),
                this
              );
            }
            currentReservoir() {
              return this._store.__currentReservoir__();
            }
            incrementReservoir(m = 0) {
              return this._store.__incrementReservoir__(m);
            }
          }
          return (
            (H.default = H),
            (H.Events = Pr),
            (H.version = H.prototype.version = os.version),
            (H.strategy = H.prototype.strategy =
              { LEAK: 1, OVERFLOW: 2, OVERFLOW_PRIORITY: 4, BLOCK: 3 }),
            (H.BottleneckError = H.prototype.BottleneckError = _),
            (H.Group = H.prototype.Group = vn),
            (H.RedisConnection = H.prototype.RedisConnection = re),
            (H.IORedisConnection = H.prototype.IORedisConnection = Y),
            (H.Batcher = H.prototype.Batcher = Cn),
            (H.prototype.jobDefaults = {
              priority: vr,
              weight: 1,
              expiration: null,
              id: "<no-id>",
            }),
            (H.prototype.storeDefaults = {
              maxConcurrent: null,
              minTime: 0,
              highWater: null,
              strategy: H.prototype.strategy.LEAK,
              penalty: null,
              reservoir: null,
              reservoirRefreshInterval: null,
              reservoirRefreshAmount: null,
              reservoirIncreaseInterval: null,
              reservoirIncreaseAmount: null,
              reservoirIncreaseMaximum: null,
            }),
            (H.prototype.localStoreDefaults = {
              Promise,
              timeout: null,
              heartbeatInterval: 250,
            }),
            (H.prototype.redisStoreDefaults = {
              Promise,
              timeout: null,
              heartbeatInterval: 5e3,
              clientTimeout: 1e4,
              Redis: null,
              clientOptions: {},
              clusterNodes: null,
              clearDatastore: !1,
              connection: null,
            }),
            (H.prototype.instanceDefaults = {
              datastore: "local",
              connection: null,
              id: "<no-id>",
              rejectOnDrop: !0,
              trackDoneStatus: !1,
              Promise,
            }),
            (H.prototype.stopDefaults = {
              enqueueErrorMessage:
                "This limiter has been stopped and cannot accept new jobs.",
              dropWaitingJobs: !0,
              dropErrorMessage: "This limiter has been stopped.",
            }),
            H
          );
        }.call(r));
      var Re = wn,
        kt = Re;
      return kt;
    });
  })(I4);
  var $w = I4.exports;
  const M4 = Sa($w);
  async function D4(e, t, r, n) {
    if (!r.request || !r.request.request) throw r;
    if (r.status >= 400 && !e.doNotRetry.includes(r.status)) {
      const s = n.request.retries != null ? n.request.retries : e.retries,
        o = Math.pow((n.request.retryCount || 0) + 1, 2);
      throw t.retry.retryRequest(r, s, o);
    }
    throw r;
  }
  async function Hw(e, t, r, n) {
    const s = new M4();
    return (
      s.on("failed", function (o, i) {
        const a = ~~o.request.request.retries,
          l = ~~o.request.request.retryAfter;
        if (((n.request.retryCount = i.retryCount + 1), a > i.retryCount))
          return l * e.retryAfterBaseValue;
      }),
      s.schedule(Vw.bind(null, e, t, r), n)
    );
  }
  async function Vw(e, t, r, n) {
    const s = await r(r, n);
    if (
      s.data &&
      s.data.errors &&
      /Something went wrong while executing your query/.test(
        s.data.errors[0].message,
      )
    ) {
      const o = new Ii(s.data.errors[0].message, 500, {
        request: n,
        response: s,
      });
      return D4(e, t, o, n);
    }
    return s;
  }
  var zw = "0.0.0-development";
  function G4(e, t) {
    const r = Object.assign(
      {
        enabled: !0,
        retryAfterBaseValue: 1e3,
        doNotRetry: [400, 401, 403, 404, 422, 451],
        retries: 3,
      },
      t.retry,
    );
    return (
      r.enabled &&
        (e.hook.error("request", D4.bind(null, r, e)),
        e.hook.wrap("request", Hw.bind(null, r, e))),
      {
        retry: {
          retryRequest: (n, s, o) => (
            (n.request.request = Object.assign({}, n.request.request, {
              retries: s,
              retryAfter: o,
            })),
            n
          ),
        },
      }
    );
  }
  G4.VERSION = zw;
  var Bw = "0.0.0-development",
    Iu = () => Promise.resolve();
  function Ww(e, t, r) {
    return e.retryLimiter.schedule(qw, e, t, r);
  }
  async function qw(e, t, r) {
    const n = r.method !== "GET" && r.method !== "HEAD",
      { pathname: s } = new URL(r.url, "http://github.test"),
      o = r.method === "GET" && s.startsWith("/search/"),
      i = s.startsWith("/graphql"),
      l = ~~t.retryCount > 0 ? { priority: 0, weight: 0 } : {};
    e.clustering && (l.expiration = 1e3 * 60),
      (n || i) && (await e.write.key(e.id).schedule(l, Iu)),
      n &&
        e.triggersNotification(s) &&
        (await e.notifications.key(e.id).schedule(l, Iu)),
      o && (await e.search.key(e.id).schedule(l, Iu));
    const c = e.global.key(e.id).schedule(l, t, r);
    if (i) {
      const d = await c;
      if (
        d.data.errors != null &&
        d.data.errors.some((p) => p.type === "RATE_LIMITED")
      )
        throw Object.assign(new Error("GraphQL Rate Limit Exceeded"), {
          response: d,
          data: d.data,
        });
    }
    return c;
  }
  var Zw = [
    "/orgs/{org}/invitations",
    "/orgs/{org}/invitations/{invitation_id}",
    "/orgs/{org}/teams/{team_slug}/discussions",
    "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments",
    "/repos/{owner}/{repo}/collaborators/{username}",
    "/repos/{owner}/{repo}/commits/{commit_sha}/comments",
    "/repos/{owner}/{repo}/issues",
    "/repos/{owner}/{repo}/issues/{issue_number}/comments",
    "/repos/{owner}/{repo}/pulls",
    "/repos/{owner}/{repo}/pulls/{pull_number}/comments",
    "/repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies",
    "/repos/{owner}/{repo}/pulls/{pull_number}/merge",
    "/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
    "/repos/{owner}/{repo}/pulls/{pull_number}/reviews",
    "/repos/{owner}/{repo}/releases",
    "/teams/{team_id}/discussions",
    "/teams/{team_id}/discussions/{discussion_number}/comments",
  ];
  function Kw(e) {
    const r = `^(?:${e
      .map((n) =>
        n
          .split("/")
          .map((s) => (s.startsWith("{") ? "(?:.+?)" : s))
          .join("/"),
      )
      .map((n) => `(?:${n})`)
      .join("|")})[^/]*$`;
    return new RegExp(r, "i");
  }
  var z3 = Kw(Zw),
    U4 = z3.test.bind(z3),
    vo = {},
    Qw = function (e, t) {
      (vo.global = new e.Group({
        id: "octokit-global",
        maxConcurrent: 10,
        ...t,
      })),
        (vo.search = new e.Group({
          id: "octokit-search",
          maxConcurrent: 1,
          minTime: 2e3,
          ...t,
        })),
        (vo.write = new e.Group({
          id: "octokit-write",
          maxConcurrent: 1,
          minTime: 1e3,
          ...t,
        })),
        (vo.notifications = new e.Group({
          id: "octokit-notifications",
          maxConcurrent: 1,
          minTime: 3e3,
          ...t,
        }));
    };
  function J0(e, t) {
    const {
      enabled: r = !0,
      Bottleneck: n = M4,
      id: s = "no-id",
      timeout: o = 1e3 * 60 * 2,
      connection: i,
    } = t.throttle || {};
    if (!r) return {};
    const a = { connection: i, timeout: o };
    vo.global == null && Qw(n, a);
    const l = Object.assign(
      {
        clustering: i != null,
        triggersNotification: U4,
        fallbackSecondaryRateRetryAfter: 60,
        retryAfterBaseValue: 1e3,
        retryLimiter: new n(),
        id: s,
        ...vo,
      },
      t.throttle,
    );
    if (
      typeof l.onSecondaryRateLimit != "function" ||
      typeof l.onRateLimit != "function"
    )
      throw new Error(`octokit/plugin-throttling error:
        You must pass the onSecondaryRateLimit and onRateLimit error handlers.
        See https://octokit.github.io/rest.js/#throttling

        const octokit = new Octokit({
          throttle: {
            onSecondaryRateLimit: (retryAfter, options) => {/* ... */},
            onRateLimit: (retryAfter, options) => {/* ... */}
          }
        })
    `);
    const c = {},
      d = new n.Events(c);
    return (
      c.on("secondary-limit", l.onSecondaryRateLimit),
      c.on("rate-limit", l.onRateLimit),
      c.on("error", (p) =>
        e.log.warn("Error in throttling-plugin limit handler", p),
      ),
      l.retryLimiter.on("failed", async function (p, f) {
        const [y, b, T] = f.args,
          { pathname: _ } = new URL(T.url, "http://github.test");
        if (
          !((_.startsWith("/graphql") && p.status !== 401) || p.status === 403)
        )
          return;
        const h = ~~b.retryCount;
        (b.retryCount = h), (T.request.retryCount = h);
        const { wantRetry: v, retryAfter: E = 0 } = await (async function () {
          var P;
          if (/\bsecondary rate\b/i.test(p.message)) {
            const L =
              Number(p.response.headers["retry-after"]) ||
              y.fallbackSecondaryRateRetryAfter;
            return {
              wantRetry: await d.trigger("secondary-limit", L, T, e, h),
              retryAfter: L,
            };
          }
          if (
            (p.response.headers != null &&
              p.response.headers["x-ratelimit-remaining"] === "0") ||
            (((P = p.response.data) == null ? void 0 : P.errors) ?? []).some(
              (L) => L.type === "RATE_LIMITED",
            )
          ) {
            const L = new Date(
                ~~p.response.headers["x-ratelimit-reset"] * 1e3,
              ).getTime(),
              A = Math.max(Math.ceil((L - Date.now()) / 1e3) + 1, 0);
            return {
              wantRetry: await d.trigger("rate-limit", A, T, e, h),
              retryAfter: A,
            };
          }
          return {};
        })();
        if (v) return b.retryCount++, E * y.retryAfterBaseValue;
      }),
      e.hook.wrap("request", Ww.bind(null, l)),
      {}
    );
  }
  J0.VERSION = Bw;
  J0.triggersNotification = U4;
  var Yw = "0.0.0-development",
    Xw = bw
      .plugin(F4, P4, Nw, G4, J0)
      .defaults({
        userAgent: `octokit.js/${Yw}`,
        throttle: { onRateLimit: Jw, onSecondaryRateLimit: eE },
      });
  function Jw(e, t, r) {
    if (
      (r.log.warn(`Request quota exhausted for request ${t.method} ${t.url}`),
      t.request.retryCount === 0)
    )
      return r.log.info(`Retrying after ${e} seconds!`), !0;
  }
  function eE(e, t, r) {
    if (
      (r.log.warn(
        `SecondaryRateLimit detected for request ${t.method} ${t.url}`,
      ),
      t.request.retryCount === 0)
    )
      return r.log.info(`Retrying after ${e} seconds!`), !0;
  }
  const tE = new Xw(),
    B3 = async () => {
      const { data: e, error: t } = await E4.GET("/api/categories/");
      if (t) throw t;
      return e;
    },
    W3 = async (e) => {
      const { data: t, error: r } = await E4.GET("/api/projects/", {
        params: { query: e.queryKey[1] },
      });
      if (r) throw r;
      return t;
    },
    q3 = async (e) =>
      (
        await tE.request("GET /repos/{owner}/{repo}/readme", {
          owner: "devlotfi",
          repo: e.queryKey[1],
          headers: { accept: "application/vnd.github.html+json" },
        })
      ).data,
    rE = oe("flex-1 text-center");
  function $4({ className: e, color: t, ...r }) {
    return u.jsxs("svg", {
      viewBox: "0 0 512 300",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: U(rE({ className: e })),
      ...r,
      children: [
        u.jsx("path", {
          d: "M121.716 46.5H175.795L109.671 235.263L109.438 235.929H110.143H235.929V266.5H47.6958L121.716 46.5ZM425.357 235.429V266.5H268.5V46.5H425.357V77.5714V78.0714H425.857H456.929V109.143V109.643H457.429H488.5V203.357H457.429H456.929V203.857V234.929H425.857H425.357V235.429ZM330.643 235.429V235.929H331.143H394.286H394.786V235.429V204.357H425.857H426.357V203.857V109.143V108.643H425.857H394.786V77.5714V77.0714H394.286H331.143H330.643V77.5714V235.429Z",
          stroke: t,
        }),
        u.jsx("path", {
          d: "M35 254L109.357 33H164.5L98.1429 222.429H224.429V254H35Z",
          fill: t,
        }),
        u.jsx("path", {
          d: "M256 254V33H413.857V64.5714H445.429V96.1428H477V190.857H445.429V222.429H413.857V254H256ZM319.143 222.429H382.286V190.857H413.857V96.1428H382.286V64.5714H319.143V222.429Z",
          fill: t,
        }),
      ],
    });
  }
  const nE = oe("spinner"),
    Mu = oe("", {
      variants: {
        variant: {
          primary: "bg-primary-100",
          success: "bg-success-100",
          error: "bg-error-100",
          warning: "bg-warning-100",
          "edge-100": "bg-edge-100",
          "base-100": "bg-base-100",
        },
      },
      defaultVariants: { variant: "primary" },
    }),
    sE = ({ className: e, dotProps: t, ...r }) =>
      u.jsxs("div", {
        className: U(nE({ className: e })),
        ...r,
        children: [
          u.jsx("div", {
            ...t,
            className: U(
              "bounce1",
              Mu({
                className: t ? t.className : void 0,
                variant: t ? t.variant : void 0,
              }),
            ),
          }),
          u.jsx("div", {
            ...t,
            className: U(
              "bounce2",
              Mu({
                className: t ? t.className : void 0,
                variant: t ? t.variant : void 0,
              }),
            ),
          }),
          u.jsx("div", {
            ...t,
            className: U(
              "bounce3",
              Mu({
                className: t ? t.className : void 0,
                variant: t ? t.variant : void 0,
              }),
            ),
          }),
        ],
      }),
    oE = oe("flex w-full h-full justify-center items-center");
  function T2({ className: e, loading: t, children: r, ...n }) {
    return t
      ? u.jsx("div", {
          className: U(oE({ className: e })),
          ...n,
          children: u.jsxs("div", {
            className: "flex flex-col space-y-5",
            children: [
              u.jsx($4, { className: "w-[7rem]", color: "var(--edge-100)" }),
              u.jsx(sE, {
                dotProps: { className: "bg-edge-100 h-[1rem] w-[1rem]" },
              }),
            ],
          }),
        })
      : r;
  }
  const iE = { variant: "edge-100" },
    L1 = N.createContext(iE),
    aE = oe(
      "flex flex-1 bg-base-100 duration-300 border border-edge-100 has-[:focus]:translate-x-[0.5rem] has-[:focus]:translate-y-[1.1rem] z-10",
      {
        variants: {
          variant: {
            primary: "border-primary-100",
            success: "border-success-100",
            error: "border-error-100",
            warning: "border-warning-100",
            "edge-100": "border-edge-100",
          },
        },
        defaultVariants: { variant: "edge-100" },
      },
    );
  function lE({ className: e, children: t, ...r }) {
    const { variant: n } = N.useContext(L1);
    return u.jsx("div", {
      className: U(aE({ variant: n, className: e })),
      ...r,
      children: t,
    });
  }
  const uE = oe(
    "flex flex-1 bg-transparent min-h-[2.8rem] px-[0.5rem] placeholder-edge-200 outline-none",
    {
      variants: {
        variant: {
          primary: "border-primary-100 text-primary-100",
          success: "border-success-100 text-success-100",
          error: "border-error-100 text-error-100",
          warning: "border-warning-100 text-warning-100",
          "edge-100": "border-edge-100 text-edge-100",
        },
      },
      defaultVariants: { variant: "edge-100" },
    },
  );
  function cE({ variant: e, className: t, ...r }) {
    return u.jsx("input", {
      className: U(uE({ variant: e, className: t })),
      ...r,
    });
  }
  const dE = oe(
    "flex justify-center items-center border-r text-[15pt] min-w-[2.8rem]",
    {
      variants: {
        variant: {
          primary: "text-primary-100 border-primary-100",
          success: "text-success-100 border-success-100",
          error: "text-error-100 border-error-100",
          warning: "text-warning-100 border-warning-100",
          "edge-100": "text-edge-100 border-edge-100",
        },
      },
      defaultVariants: { variant: "edge-100" },
    },
  );
  function fE({ className: e, children: t, ...r }) {
    const { variant: n } = N.useContext(L1);
    return u.jsx("div", {
      className: U(dE({ variant: n, className: e })),
      ...r,
      children: t,
    });
  }
  const pE = oe("flex absolute left-[0.5rem] text-[10pt]", {
    variants: {
      variant: {
        primary: "text-primary-100",
        success: "text-success-100",
        error: "text-error-100",
        warning: "text-warning-100",
        "edge-100": "text-edge-100",
      },
    },
    defaultVariants: { variant: "edge-100" },
  });
  function hE({ className: e, children: t, ...r }) {
    const { variant: n } = N.useContext(L1);
    return u.jsx("div", {
      className: U(pE({ variant: n, className: e })),
      ...r,
      children: t,
    });
  }
  const mE = oe(
    "group/text-input relative flex bg-base-100 border border-edge-100 mb-[2.8rem]",
    {
      variants: {
        variant: {
          primary: "border-primary-100",
          success: "border-success-100",
          error: "border-error-100",
          warning: "border-warning-100",
          "edge-100": "border-edge-100",
        },
      },
      defaultVariants: { variant: "edge-100" },
    },
  );
  function gE({ variant: e, className: t, children: r, ...n }) {
    return u.jsx(L1.Provider, {
      value: { variant: e },
      children: u.jsx("label", {
        className: U(mE({ variant: e, className: t })),
        ...n,
        children: r,
      }),
    });
  }
  function Vs(e) {
    (this._maxSize = e), this.clear();
  }
  Vs.prototype.clear = function () {
    (this._size = 0), (this._values = Object.create(null));
  };
  Vs.prototype.get = function (e) {
    return this._values[e];
  };
  Vs.prototype.set = function (e, t) {
    return (
      this._size >= this._maxSize && this.clear(),
      e in this._values || this._size++,
      (this._values[e] = t)
    );
  };
  var vE = /[^.^\]^[]+|(?=\[\]|\.\.)/g,
    H4 = /^\d+$/,
    yE = /^\d/,
    CE = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
    wE = /^\s*(['"]?)(.*?)(\1)\s*$/,
    ed = 512,
    Z3 = new Vs(ed),
    K3 = new Vs(ed),
    Q3 = new Vs(ed),
    Ps = {
      Cache: Vs,
      split: x2,
      normalizePath: Du,
      setter: function (e) {
        var t = Du(e);
        return (
          K3.get(e) ||
          K3.set(e, function (n, s) {
            for (var o = 0, i = t.length, a = n; o < i - 1; ) {
              var l = t[o];
              if (l === "__proto__" || l === "constructor" || l === "prototype")
                return n;
              a = a[t[o++]];
            }
            a[t[o]] = s;
          })
        );
      },
      getter: function (e, t) {
        var r = Du(e);
        return (
          Q3.get(e) ||
          Q3.set(e, function (s) {
            for (var o = 0, i = r.length; o < i; )
              if (s != null || !t) s = s[r[o++]];
              else return;
            return s;
          })
        );
      },
      join: function (e) {
        return e.reduce(function (t, r) {
          return t + (td(r) || H4.test(r) ? "[" + r + "]" : (t ? "." : "") + r);
        }, "");
      },
      forEach: function (e, t, r) {
        EE(Array.isArray(e) ? e : x2(e), t, r);
      },
    };
  function Du(e) {
    return (
      Z3.get(e) ||
      Z3.set(
        e,
        x2(e).map(function (t) {
          return t.replace(wE, "$2");
        }),
      )
    );
  }
  function x2(e) {
    return e.match(vE) || [""];
  }
  function EE(e, t, r) {
    var n = e.length,
      s,
      o,
      i,
      a;
    for (o = 0; o < n; o++)
      (s = e[o]),
        s &&
          (xE(s) && (s = '"' + s + '"'),
          (a = td(s)),
          (i = !a && /^\d+$/.test(s)),
          t.call(r, s, a, i, o, e));
  }
  function td(e) {
    return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
  }
  function bE(e) {
    return e.match(yE) && !e.match(H4);
  }
  function TE(e) {
    return CE.test(e);
  }
  function xE(e) {
    return !td(e) && (bE(e) || TE(e));
  }
  const _E =
      /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,
    R1 = (e) => e.match(_E) || [],
    j1 = (e) => e[0].toUpperCase() + e.slice(1),
    rd = (e, t) => R1(e).join(t).toLowerCase(),
    V4 = (e) =>
      R1(e).reduce(
        (t, r) =>
          `${t}${t ? r[0].toUpperCase() + r.slice(1).toLowerCase() : r.toLowerCase()}`,
        "",
      ),
    SE = (e) => j1(V4(e)),
    kE = (e) => rd(e, "_"),
    OE = (e) => rd(e, "-"),
    AE = (e) => j1(rd(e, " ")),
    PE = (e) => R1(e).map(j1).join(" ");
  var Gu = {
      words: R1,
      upperFirst: j1,
      camelCase: V4,
      pascalCase: SE,
      snakeCase: kE,
      kebabCase: OE,
      sentenceCase: AE,
      titleCase: PE,
    },
    nd = { exports: {} };
  nd.exports = function (e) {
    return z4(LE(e), e);
  };
  nd.exports.array = z4;
  function z4(e, t) {
    var r = e.length,
      n = new Array(r),
      s = {},
      o = r,
      i = RE(t),
      a = jE(e);
    for (
      t.forEach(function (c) {
        if (!a.has(c[0]) || !a.has(c[1]))
          throw new Error(
            "Unknown node. There is an unknown node in the supplied edges.",
          );
      });
      o--;

    )
      s[o] || l(e[o], o, new Set());
    return n;
    function l(c, d, p) {
      if (p.has(c)) {
        var f;
        try {
          f = ", node was:" + JSON.stringify(c);
        } catch {
          f = "";
        }
        throw new Error("Cyclic dependency" + f);
      }
      if (!a.has(c))
        throw new Error(
          "Found unknown node. Make sure to provided all involved nodes. Unknown node: " +
            JSON.stringify(c),
        );
      if (!s[d]) {
        s[d] = !0;
        var y = i.get(c) || new Set();
        if (((y = Array.from(y)), (d = y.length))) {
          p.add(c);
          do {
            var b = y[--d];
            l(b, a.get(b), p);
          } while (d);
          p.delete(c);
        }
        n[--r] = c;
      }
    }
  }
  function LE(e) {
    for (var t = new Set(), r = 0, n = e.length; r < n; r++) {
      var s = e[r];
      t.add(s[0]), t.add(s[1]);
    }
    return Array.from(t);
  }
  function RE(e) {
    for (var t = new Map(), r = 0, n = e.length; r < n; r++) {
      var s = e[r];
      t.has(s[0]) || t.set(s[0], new Set()),
        t.has(s[1]) || t.set(s[1], new Set()),
        t.get(s[0]).add(s[1]);
    }
    return t;
  }
  function jE(e) {
    for (var t = new Map(), r = 0, n = e.length; r < n; r++) t.set(e[r], r);
    return t;
  }
  var NE = nd.exports;
  const FE = Sa(NE),
    IE = Object.prototype.toString,
    ME = Error.prototype.toString,
    DE = RegExp.prototype.toString,
    GE = typeof Symbol < "u" ? Symbol.prototype.toString : () => "",
    UE = /^Symbol\((.*)\)(.*)$/;
  function $E(e) {
    return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
  }
  function Y3(e, t = !1) {
    if (e == null || e === !0 || e === !1) return "" + e;
    const r = typeof e;
    if (r === "number") return $E(e);
    if (r === "string") return t ? `"${e}"` : e;
    if (r === "function") return "[Function " + (e.name || "anonymous") + "]";
    if (r === "symbol") return GE.call(e).replace(UE, "Symbol($1)");
    const n = IE.call(e).slice(8, -1);
    return n === "Date"
      ? isNaN(e.getTime())
        ? "" + e
        : e.toISOString(e)
      : n === "Error" || e instanceof Error
        ? "[" + ME.call(e) + "]"
        : n === "RegExp"
          ? DE.call(e)
          : null;
  }
  function Zn(e, t) {
    let r = Y3(e, t);
    return r !== null
      ? r
      : JSON.stringify(
          e,
          function (n, s) {
            let o = Y3(this[n], t);
            return o !== null ? o : s;
          },
          2,
        );
  }
  function B4(e) {
    return e == null ? [] : [].concat(e);
  }
  let W4,
    q4,
    Z4,
    HE = /\$\{\s*(\w+)\s*\}/g;
  W4 = Symbol.toStringTag;
  class X3 {
    constructor(t, r, n, s) {
      (this.name = void 0),
        (this.message = void 0),
        (this.value = void 0),
        (this.path = void 0),
        (this.type = void 0),
        (this.params = void 0),
        (this.errors = void 0),
        (this.inner = void 0),
        (this[W4] = "Error"),
        (this.name = "ValidationError"),
        (this.value = r),
        (this.path = n),
        (this.type = s),
        (this.errors = []),
        (this.inner = []),
        B4(t).forEach((o) => {
          if (Ft.isError(o)) {
            this.errors.push(...o.errors);
            const i = o.inner.length ? o.inner : [o];
            this.inner.push(...i);
          } else this.errors.push(o);
        }),
        (this.message =
          this.errors.length > 1
            ? `${this.errors.length} errors occurred`
            : this.errors[0]);
    }
  }
  q4 = Symbol.hasInstance;
  Z4 = Symbol.toStringTag;
  class Ft extends Error {
    static formatError(t, r) {
      const n = r.label || r.path || "this";
      return (
        n !== r.path && (r = Object.assign({}, r, { path: n })),
        typeof t == "string"
          ? t.replace(HE, (s, o) => Zn(r[o]))
          : typeof t == "function"
            ? t(r)
            : t
      );
    }
    static isError(t) {
      return t && t.name === "ValidationError";
    }
    constructor(t, r, n, s, o) {
      const i = new X3(t, r, n, s);
      if (o) return i;
      super(),
        (this.value = void 0),
        (this.path = void 0),
        (this.type = void 0),
        (this.params = void 0),
        (this.errors = []),
        (this.inner = []),
        (this[Z4] = "Error"),
        (this.name = i.name),
        (this.message = i.message),
        (this.type = i.type),
        (this.value = i.value),
        (this.path = i.path),
        (this.errors = i.errors),
        (this.inner = i.inner),
        Error.captureStackTrace && Error.captureStackTrace(this, Ft);
    }
    static [q4](t) {
      return X3[Symbol.hasInstance](t) || super[Symbol.hasInstance](t);
    }
  }
  let Fr = {
      default: "${path} is invalid",
      required: "${path} is a required field",
      defined: "${path} must be defined",
      notNull: "${path} cannot be null",
      oneOf: "${path} must be one of the following values: ${values}",
      notOneOf: "${path} must not be one of the following values: ${values}",
      notType: ({ path: e, type: t, value: r, originalValue: n }) => {
        const s =
          n != null && n !== r
            ? ` (cast from the value \`${Zn(n, !0)}\`).`
            : ".";
        return t !== "mixed"
          ? `${e} must be a \`${t}\` type, but the final value was: \`${Zn(r, !0)}\`` +
              s
          : `${e} must match the configured type. The validated value was: \`${Zn(r, !0)}\`` +
              s;
      },
    },
    At = {
      length: "${path} must be exactly ${length} characters",
      min: "${path} must be at least ${min} characters",
      max: "${path} must be at most ${max} characters",
      matches: '${path} must match the following: "${regex}"',
      email: "${path} must be a valid email",
      url: "${path} must be a valid URL",
      uuid: "${path} must be a valid UUID",
      datetime: "${path} must be a valid ISO date-time",
      datetime_precision:
        "${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",
      datetime_offset:
        '${path} must be a valid ISO date-time with UTC "Z" timezone',
      trim: "${path} must be a trimmed string",
      lowercase: "${path} must be a lowercase string",
      uppercase: "${path} must be a upper case string",
    },
    VE = {
      min: "${path} must be greater than or equal to ${min}",
      max: "${path} must be less than or equal to ${max}",
      lessThan: "${path} must be less than ${less}",
      moreThan: "${path} must be greater than ${more}",
      positive: "${path} must be a positive number",
      negative: "${path} must be a negative number",
      integer: "${path} must be an integer",
    },
    _2 = {
      min: "${path} field must be later than ${min}",
      max: "${path} field must be at earlier than ${max}",
    },
    zE = { isValue: "${path} field must be ${value}" },
    S2 = { noUnknown: "${path} field has unspecified keys: ${unknown}" },
    BE = {
      min: "${path} field must have at least ${min} items",
      max: "${path} field must have less than or equal to ${max} items",
      length: "${path} must have ${length} items",
    },
    WE = {
      notType: (e) => {
        const { path: t, value: r, spec: n } = e,
          s = n.types.length;
        if (Array.isArray(r)) {
          if (r.length < s)
            return `${t} tuple value has too few items, expected a length of ${s} but got ${r.length} for value: \`${Zn(r, !0)}\``;
          if (r.length > s)
            return `${t} tuple value has too many items, expected a length of ${s} but got ${r.length} for value: \`${Zn(r, !0)}\``;
        }
        return Ft.formatError(Fr.notType, e);
      },
    };
  Object.assign(Object.create(null), {
    mixed: Fr,
    string: At,
    number: VE,
    date: _2,
    object: S2,
    array: BE,
    boolean: zE,
    tuple: WE,
  });
  const sd = (e) => e && e.__isYupSchema__;
  class i1 {
    static fromOptions(t, r) {
      if (!r.then && !r.otherwise)
        throw new TypeError(
          "either `then:` or `otherwise:` is required for `when()` conditions",
        );
      let { is: n, then: s, otherwise: o } = r,
        i = typeof n == "function" ? n : (...a) => a.every((l) => l === n);
      return new i1(t, (a, l) => {
        var c;
        let d = i(...a) ? s : o;
        return (c = d == null ? void 0 : d(l)) != null ? c : l;
      });
    }
    constructor(t, r) {
      (this.fn = void 0), (this.refs = t), (this.refs = t), (this.fn = r);
    }
    resolve(t, r) {
      let n = this.refs.map((o) =>
          o.getValue(
            r == null ? void 0 : r.value,
            r == null ? void 0 : r.parent,
            r == null ? void 0 : r.context,
          ),
        ),
        s = this.fn(n, t, r);
      if (s === void 0 || s === t) return t;
      if (!sd(s)) throw new TypeError("conditions must return a schema object");
      return s.resolve(r);
    }
  }
  const ll = { context: "$", value: "." };
  class zs {
    constructor(t, r = {}) {
      if (
        ((this.key = void 0),
        (this.isContext = void 0),
        (this.isValue = void 0),
        (this.isSibling = void 0),
        (this.path = void 0),
        (this.getter = void 0),
        (this.map = void 0),
        typeof t != "string")
      )
        throw new TypeError("ref must be a string, got: " + t);
      if (((this.key = t.trim()), t === ""))
        throw new TypeError("ref must be a non-empty string");
      (this.isContext = this.key[0] === ll.context),
        (this.isValue = this.key[0] === ll.value),
        (this.isSibling = !this.isContext && !this.isValue);
      let n = this.isContext ? ll.context : this.isValue ? ll.value : "";
      (this.path = this.key.slice(n.length)),
        (this.getter = this.path && Ps.getter(this.path, !0)),
        (this.map = r.map);
    }
    getValue(t, r, n) {
      let s = this.isContext ? n : this.isValue ? t : r;
      return (
        this.getter && (s = this.getter(s || {})),
        this.map && (s = this.map(s)),
        s
      );
    }
    cast(t, r) {
      return this.getValue(
        t,
        r == null ? void 0 : r.parent,
        r == null ? void 0 : r.context,
      );
    }
    resolve() {
      return this;
    }
    describe() {
      return { type: "ref", key: this.key };
    }
    toString() {
      return `Ref(${this.key})`;
    }
    static isRef(t) {
      return t && t.__isYupRef;
    }
  }
  zs.prototype.__isYupRef = !0;
  const vs = (e) => e == null;
  function Xs(e) {
    function t(
      { value: r, path: n = "", options: s, originalValue: o, schema: i },
      a,
      l,
    ) {
      const { name: c, test: d, params: p, message: f, skipAbsent: y } = e;
      let {
        parent: b,
        context: T,
        abortEarly: _ = i.spec.abortEarly,
        disableStackTrace: g = i.spec.disableStackTrace,
      } = s;
      function h(X) {
        return zs.isRef(X) ? X.getValue(r, b, T) : X;
      }
      function v(X = {}) {
        const ne = Object.assign(
          {
            value: r,
            originalValue: o,
            label: i.spec.label,
            path: X.path || n,
            spec: i.spec,
            disableStackTrace: X.disableStackTrace || g,
          },
          p,
          X.params,
        );
        for (const Fe of Object.keys(ne)) ne[Fe] = h(ne[Fe]);
        const Ce = new Ft(
          Ft.formatError(X.message || f, ne),
          r,
          ne.path,
          X.type || c,
          ne.disableStackTrace,
        );
        return (Ce.params = ne), Ce;
      }
      const E = _ ? a : l;
      let P = {
        path: n,
        parent: b,
        type: c,
        from: s.from,
        createError: v,
        resolve: h,
        options: s,
        originalValue: o,
        schema: i,
      };
      const L = (X) => {
          Ft.isError(X) ? E(X) : X ? l(null) : E(v());
        },
        A = (X) => {
          Ft.isError(X) ? E(X) : a(X);
        };
      if (y && vs(r)) return L(!0);
      let Z;
      try {
        var K;
        if (
          ((Z = d.call(P, r, P)),
          typeof ((K = Z) == null ? void 0 : K.then) == "function")
        ) {
          if (s.sync)
            throw new Error(
              `Validation test of type: "${P.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`,
            );
          return Promise.resolve(Z).then(L, A);
        }
      } catch (X) {
        A(X);
        return;
      }
      L(Z);
    }
    return (t.OPTIONS = e), t;
  }
  function qE(e, t, r, n = r) {
    let s, o, i;
    return t
      ? (Ps.forEach(t, (a, l, c) => {
          let d = l ? a.slice(1, a.length - 1) : a;
          e = e.resolve({ context: n, parent: s, value: r });
          let p = e.type === "tuple",
            f = c ? parseInt(d, 10) : 0;
          if (e.innerType || p) {
            if (p && !c)
              throw new Error(
                `Yup.reach cannot implicitly index into a tuple type. the path part "${i}" must contain an index to the tuple element, e.g. "${i}[0]"`,
              );
            if (r && f >= r.length)
              throw new Error(
                `Yup.reach cannot resolve an array item at index: ${a}, in the path: ${t}. because there is no value at that index. `,
              );
            (s = r), (r = r && r[f]), (e = p ? e.spec.types[f] : e.innerType);
          }
          if (!c) {
            if (!e.fields || !e.fields[d])
              throw new Error(
                `The schema does not contain the path: ${t}. (failed at: ${i} which is a type: "${e.type}")`,
              );
            (s = r), (r = r && r[d]), (e = e.fields[d]);
          }
          (o = d), (i = l ? "[" + a + "]" : "." + a);
        }),
        { schema: e, parent: s, parentPath: o })
      : { parent: s, parentPath: t, schema: e };
  }
  class a1 extends Set {
    describe() {
      const t = [];
      for (const r of this.values()) t.push(zs.isRef(r) ? r.describe() : r);
      return t;
    }
    resolveAll(t) {
      let r = [];
      for (const n of this.values()) r.push(t(n));
      return r;
    }
    clone() {
      return new a1(this.values());
    }
    merge(t, r) {
      const n = this.clone();
      return t.forEach((s) => n.add(s)), r.forEach((s) => n.delete(s)), n;
    }
  }
  function yo(e, t = new Map()) {
    if (sd(e) || !e || typeof e != "object") return e;
    if (t.has(e)) return t.get(e);
    let r;
    if (e instanceof Date) (r = new Date(e.getTime())), t.set(e, r);
    else if (e instanceof RegExp) (r = new RegExp(e)), t.set(e, r);
    else if (Array.isArray(e)) {
      (r = new Array(e.length)), t.set(e, r);
      for (let n = 0; n < e.length; n++) r[n] = yo(e[n], t);
    } else if (e instanceof Map) {
      (r = new Map()), t.set(e, r);
      for (const [n, s] of e.entries()) r.set(n, yo(s, t));
    } else if (e instanceof Set) {
      (r = new Set()), t.set(e, r);
      for (const n of e) r.add(yo(n, t));
    } else if (e instanceof Object) {
      (r = {}), t.set(e, r);
      for (const [n, s] of Object.entries(e)) r[n] = yo(s, t);
    } else throw Error(`Unable to clone ${e}`);
    return r;
  }
  class qr {
    constructor(t) {
      (this.type = void 0),
        (this.deps = []),
        (this.tests = void 0),
        (this.transforms = void 0),
        (this.conditions = []),
        (this._mutate = void 0),
        (this.internalTests = {}),
        (this._whitelist = new a1()),
        (this._blacklist = new a1()),
        (this.exclusiveTests = Object.create(null)),
        (this._typeCheck = void 0),
        (this.spec = void 0),
        (this.tests = []),
        (this.transforms = []),
        this.withMutation(() => {
          this.typeError(Fr.notType);
        }),
        (this.type = t.type),
        (this._typeCheck = t.check),
        (this.spec = Object.assign(
          {
            strip: !1,
            strict: !1,
            abortEarly: !0,
            recursive: !0,
            disableStackTrace: !1,
            nullable: !1,
            optional: !0,
            coerce: !0,
          },
          t == null ? void 0 : t.spec,
        )),
        this.withMutation((r) => {
          r.nonNullable();
        });
    }
    get _type() {
      return this.type;
    }
    clone(t) {
      if (this._mutate) return t && Object.assign(this.spec, t), this;
      const r = Object.create(Object.getPrototypeOf(this));
      return (
        (r.type = this.type),
        (r._typeCheck = this._typeCheck),
        (r._whitelist = this._whitelist.clone()),
        (r._blacklist = this._blacklist.clone()),
        (r.internalTests = Object.assign({}, this.internalTests)),
        (r.exclusiveTests = Object.assign({}, this.exclusiveTests)),
        (r.deps = [...this.deps]),
        (r.conditions = [...this.conditions]),
        (r.tests = [...this.tests]),
        (r.transforms = [...this.transforms]),
        (r.spec = yo(Object.assign({}, this.spec, t))),
        r
      );
    }
    label(t) {
      let r = this.clone();
      return (r.spec.label = t), r;
    }
    meta(...t) {
      if (t.length === 0) return this.spec.meta;
      let r = this.clone();
      return (r.spec.meta = Object.assign(r.spec.meta || {}, t[0])), r;
    }
    withMutation(t) {
      let r = this._mutate;
      this._mutate = !0;
      let n = t(this);
      return (this._mutate = r), n;
    }
    concat(t) {
      if (!t || t === this) return this;
      if (t.type !== this.type && this.type !== "mixed")
        throw new TypeError(
          `You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`,
        );
      let r = this,
        n = t.clone();
      const s = Object.assign({}, r.spec, n.spec);
      return (
        (n.spec = s),
        (n.internalTests = Object.assign({}, r.internalTests, n.internalTests)),
        (n._whitelist = r._whitelist.merge(t._whitelist, t._blacklist)),
        (n._blacklist = r._blacklist.merge(t._blacklist, t._whitelist)),
        (n.tests = r.tests),
        (n.exclusiveTests = r.exclusiveTests),
        n.withMutation((o) => {
          t.tests.forEach((i) => {
            o.test(i.OPTIONS);
          });
        }),
        (n.transforms = [...r.transforms, ...n.transforms]),
        n
      );
    }
    isType(t) {
      return t == null
        ? !!(
            (this.spec.nullable && t === null) ||
            (this.spec.optional && t === void 0)
          )
        : this._typeCheck(t);
    }
    resolve(t) {
      let r = this;
      if (r.conditions.length) {
        let n = r.conditions;
        (r = r.clone()),
          (r.conditions = []),
          (r = n.reduce((s, o) => o.resolve(s, t), r)),
          (r = r.resolve(t));
      }
      return r;
    }
    resolveOptions(t) {
      var r, n, s, o;
      return Object.assign({}, t, {
        from: t.from || [],
        strict: (r = t.strict) != null ? r : this.spec.strict,
        abortEarly: (n = t.abortEarly) != null ? n : this.spec.abortEarly,
        recursive: (s = t.recursive) != null ? s : this.spec.recursive,
        disableStackTrace:
          (o = t.disableStackTrace) != null ? o : this.spec.disableStackTrace,
      });
    }
    cast(t, r = {}) {
      let n = this.resolve(Object.assign({ value: t }, r)),
        s = r.assert === "ignore-optionality",
        o = n._cast(t, r);
      if (r.assert !== !1 && !n.isType(o)) {
        if (s && vs(o)) return o;
        let i = Zn(t),
          a = Zn(o);
        throw new TypeError(
          `The value of ${r.path || "field"} could not be cast to a value that satisfies the schema type: "${n.type}". 

attempted value: ${i} 
` + (a !== i ? `result of cast: ${a}` : ""),
        );
      }
      return o;
    }
    _cast(t, r) {
      let n =
        t === void 0
          ? t
          : this.transforms.reduce((s, o) => o.call(this, s, t, this), t);
      return n === void 0 && (n = this.getDefault(r)), n;
    }
    _validate(t, r = {}, n, s) {
      let { path: o, originalValue: i = t, strict: a = this.spec.strict } = r,
        l = t;
      a || (l = this._cast(l, Object.assign({ assert: !1 }, r)));
      let c = [];
      for (let d of Object.values(this.internalTests)) d && c.push(d);
      this.runTests(
        { path: o, value: l, originalValue: i, options: r, tests: c },
        n,
        (d) => {
          if (d.length) return s(d, l);
          this.runTests(
            {
              path: o,
              value: l,
              originalValue: i,
              options: r,
              tests: this.tests,
            },
            n,
            s,
          );
        },
      );
    }
    runTests(t, r, n) {
      let s = !1,
        { tests: o, value: i, originalValue: a, path: l, options: c } = t,
        d = (T) => {
          s || ((s = !0), r(T, i));
        },
        p = (T) => {
          s || ((s = !0), n(T, i));
        },
        f = o.length,
        y = [];
      if (!f) return p([]);
      let b = { value: i, originalValue: a, path: l, options: c, schema: this };
      for (let T = 0; T < o.length; T++) {
        const _ = o[T];
        _(b, d, function (h) {
          h && (Array.isArray(h) ? y.push(...h) : y.push(h)), --f <= 0 && p(y);
        });
      }
    }
    asNestedTest({
      key: t,
      index: r,
      parent: n,
      parentPath: s,
      originalParent: o,
      options: i,
    }) {
      const a = t ?? r;
      if (a == null)
        throw TypeError("Must include `key` or `index` for nested validations");
      const l = typeof a == "number";
      let c = n[a];
      const d = Object.assign({}, i, {
        strict: !0,
        parent: n,
        value: c,
        originalValue: o[a],
        key: void 0,
        [l ? "index" : "key"]: a,
        path:
          l || a.includes(".")
            ? `${s || ""}[${l ? a : `"${a}"`}]`
            : (s ? `${s}.` : "") + t,
      });
      return (p, f, y) => this.resolve(d)._validate(c, d, f, y);
    }
    validate(t, r) {
      var n;
      let s = this.resolve(Object.assign({}, r, { value: t })),
        o =
          (n = r == null ? void 0 : r.disableStackTrace) != null
            ? n
            : s.spec.disableStackTrace;
      return new Promise((i, a) =>
        s._validate(
          t,
          r,
          (l, c) => {
            Ft.isError(l) && (l.value = c), a(l);
          },
          (l, c) => {
            l.length ? a(new Ft(l, c, void 0, void 0, o)) : i(c);
          },
        ),
      );
    }
    validateSync(t, r) {
      var n;
      let s = this.resolve(Object.assign({}, r, { value: t })),
        o,
        i =
          (n = r == null ? void 0 : r.disableStackTrace) != null
            ? n
            : s.spec.disableStackTrace;
      return (
        s._validate(
          t,
          Object.assign({}, r, { sync: !0 }),
          (a, l) => {
            throw (Ft.isError(a) && (a.value = l), a);
          },
          (a, l) => {
            if (a.length) throw new Ft(a, t, void 0, void 0, i);
            o = l;
          },
        ),
        o
      );
    }
    isValid(t, r) {
      return this.validate(t, r).then(
        () => !0,
        (n) => {
          if (Ft.isError(n)) return !1;
          throw n;
        },
      );
    }
    isValidSync(t, r) {
      try {
        return this.validateSync(t, r), !0;
      } catch (n) {
        if (Ft.isError(n)) return !1;
        throw n;
      }
    }
    _getDefault(t) {
      let r = this.spec.default;
      return r == null ? r : typeof r == "function" ? r.call(this, t) : yo(r);
    }
    getDefault(t) {
      return this.resolve(t || {})._getDefault(t);
    }
    default(t) {
      return arguments.length === 0
        ? this._getDefault()
        : this.clone({ default: t });
    }
    strict(t = !0) {
      return this.clone({ strict: t });
    }
    nullability(t, r) {
      const n = this.clone({ nullable: t });
      return (
        (n.internalTests.nullable = Xs({
          message: r,
          name: "nullable",
          test(s) {
            return s === null ? this.schema.spec.nullable : !0;
          },
        })),
        n
      );
    }
    optionality(t, r) {
      const n = this.clone({ optional: t });
      return (
        (n.internalTests.optionality = Xs({
          message: r,
          name: "optionality",
          test(s) {
            return s === void 0 ? this.schema.spec.optional : !0;
          },
        })),
        n
      );
    }
    optional() {
      return this.optionality(!0);
    }
    defined(t = Fr.defined) {
      return this.optionality(!1, t);
    }
    nullable() {
      return this.nullability(!0);
    }
    nonNullable(t = Fr.notNull) {
      return this.nullability(!1, t);
    }
    required(t = Fr.required) {
      return this.clone().withMutation((r) => r.nonNullable(t).defined(t));
    }
    notRequired() {
      return this.clone().withMutation((t) => t.nullable().optional());
    }
    transform(t) {
      let r = this.clone();
      return r.transforms.push(t), r;
    }
    test(...t) {
      let r;
      if (
        (t.length === 1
          ? typeof t[0] == "function"
            ? (r = { test: t[0] })
            : (r = t[0])
          : t.length === 2
            ? (r = { name: t[0], test: t[1] })
            : (r = { name: t[0], message: t[1], test: t[2] }),
        r.message === void 0 && (r.message = Fr.default),
        typeof r.test != "function")
      )
        throw new TypeError("`test` is a required parameters");
      let n = this.clone(),
        s = Xs(r),
        o = r.exclusive || (r.name && n.exclusiveTests[r.name] === !0);
      if (r.exclusive && !r.name)
        throw new TypeError(
          "Exclusive tests must provide a unique `name` identifying the test",
        );
      return (
        r.name && (n.exclusiveTests[r.name] = !!r.exclusive),
        (n.tests = n.tests.filter(
          (i) =>
            !(
              i.OPTIONS.name === r.name &&
              (o || i.OPTIONS.test === s.OPTIONS.test)
            ),
        )),
        n.tests.push(s),
        n
      );
    }
    when(t, r) {
      !Array.isArray(t) && typeof t != "string" && ((r = t), (t = "."));
      let n = this.clone(),
        s = B4(t).map((o) => new zs(o));
      return (
        s.forEach((o) => {
          o.isSibling && n.deps.push(o.key);
        }),
        n.conditions.push(
          typeof r == "function" ? new i1(s, r) : i1.fromOptions(s, r),
        ),
        n
      );
    }
    typeError(t) {
      let r = this.clone();
      return (
        (r.internalTests.typeError = Xs({
          message: t,
          name: "typeError",
          skipAbsent: !0,
          test(n) {
            return this.schema._typeCheck(n)
              ? !0
              : this.createError({ params: { type: this.schema.type } });
          },
        })),
        r
      );
    }
    oneOf(t, r = Fr.oneOf) {
      let n = this.clone();
      return (
        t.forEach((s) => {
          n._whitelist.add(s), n._blacklist.delete(s);
        }),
        (n.internalTests.whiteList = Xs({
          message: r,
          name: "oneOf",
          skipAbsent: !0,
          test(s) {
            let o = this.schema._whitelist,
              i = o.resolveAll(this.resolve);
            return i.includes(s)
              ? !0
              : this.createError({
                  params: { values: Array.from(o).join(", "), resolved: i },
                });
          },
        })),
        n
      );
    }
    notOneOf(t, r = Fr.notOneOf) {
      let n = this.clone();
      return (
        t.forEach((s) => {
          n._blacklist.add(s), n._whitelist.delete(s);
        }),
        (n.internalTests.blacklist = Xs({
          message: r,
          name: "notOneOf",
          test(s) {
            let o = this.schema._blacklist,
              i = o.resolveAll(this.resolve);
            return i.includes(s)
              ? this.createError({
                  params: { values: Array.from(o).join(", "), resolved: i },
                })
              : !0;
          },
        })),
        n
      );
    }
    strip(t = !0) {
      let r = this.clone();
      return (r.spec.strip = t), r;
    }
    describe(t) {
      const r = (t ? this.resolve(t) : this).clone(),
        { label: n, meta: s, optional: o, nullable: i } = r.spec;
      return {
        meta: s,
        label: n,
        optional: o,
        nullable: i,
        default: r.getDefault(t),
        type: r.type,
        oneOf: r._whitelist.describe(),
        notOneOf: r._blacklist.describe(),
        tests: r.tests
          .map((l) => ({ name: l.OPTIONS.name, params: l.OPTIONS.params }))
          .filter((l, c, d) => d.findIndex((p) => p.name === l.name) === c),
      };
    }
  }
  qr.prototype.__isYupSchema__ = !0;
  for (const e of ["validate", "validateSync"])
    qr.prototype[`${e}At`] = function (t, r, n = {}) {
      const { parent: s, parentPath: o, schema: i } = qE(this, t, r, n.context);
      return i[e](s && s[o], Object.assign({}, n, { parent: s, path: t }));
    };
  for (const e of ["equals", "is"]) qr.prototype[e] = qr.prototype.oneOf;
  for (const e of ["not", "nope"]) qr.prototype[e] = qr.prototype.notOneOf;
  const ZE =
    /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
  function KE(e) {
    const t = k2(e);
    if (!t) return Date.parse ? Date.parse(e) : Number.NaN;
    if (t.z === void 0 && t.plusMinus === void 0)
      return new Date(
        t.year,
        t.month,
        t.day,
        t.hour,
        t.minute,
        t.second,
        t.millisecond,
      ).valueOf();
    let r = 0;
    return (
      t.z !== "Z" &&
        t.plusMinus !== void 0 &&
        ((r = t.hourOffset * 60 + t.minuteOffset),
        t.plusMinus === "+" && (r = 0 - r)),
      Date.UTC(
        t.year,
        t.month,
        t.day,
        t.hour,
        t.minute + r,
        t.second,
        t.millisecond,
      )
    );
  }
  function k2(e) {
    var t, r;
    const n = ZE.exec(e);
    return n
      ? {
          year: Jr(n[1]),
          month: Jr(n[2], 1) - 1,
          day: Jr(n[3], 1),
          hour: Jr(n[4]),
          minute: Jr(n[5]),
          second: Jr(n[6]),
          millisecond: n[7] ? Jr(n[7].substring(0, 3)) : 0,
          precision:
            (t = (r = n[7]) == null ? void 0 : r.length) != null ? t : void 0,
          z: n[8] || void 0,
          plusMinus: n[9] || void 0,
          hourOffset: Jr(n[10]),
          minuteOffset: Jr(n[11]),
        }
      : null;
  }
  function Jr(e, t = 0) {
    return Number(e) || t;
  }
  let QE =
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    YE =
      /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
    XE =
      /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
    JE = "^\\d{4}-\\d{2}-\\d{2}",
    eb = "\\d{2}:\\d{2}:\\d{2}",
    tb = "(([+-]\\d{2}(:?\\d{2})?)|Z)",
    rb = new RegExp(`${JE}T${eb}(\\.\\d+)?${tb}$`),
    nb = (e) => vs(e) || e === e.trim(),
    sb = {}.toString();
  function K4() {
    return new Q4();
  }
  class Q4 extends qr {
    constructor() {
      super({
        type: "string",
        check(t) {
          return t instanceof String && (t = t.valueOf()), typeof t == "string";
        },
      }),
        this.withMutation(() => {
          this.transform((t, r, n) => {
            if (!n.spec.coerce || n.isType(t) || Array.isArray(t)) return t;
            const s = t != null && t.toString ? t.toString() : t;
            return s === sb ? t : s;
          });
        });
    }
    required(t) {
      return super
        .required(t)
        .withMutation((r) =>
          r.test({
            message: t || Fr.required,
            name: "required",
            skipAbsent: !0,
            test: (n) => !!n.length,
          }),
        );
    }
    notRequired() {
      return super
        .notRequired()
        .withMutation(
          (t) => (
            (t.tests = t.tests.filter((r) => r.OPTIONS.name !== "required")), t
          ),
        );
    }
    length(t, r = At.length) {
      return this.test({
        message: r,
        name: "length",
        exclusive: !0,
        params: { length: t },
        skipAbsent: !0,
        test(n) {
          return n.length === this.resolve(t);
        },
      });
    }
    min(t, r = At.min) {
      return this.test({
        message: r,
        name: "min",
        exclusive: !0,
        params: { min: t },
        skipAbsent: !0,
        test(n) {
          return n.length >= this.resolve(t);
        },
      });
    }
    max(t, r = At.max) {
      return this.test({
        name: "max",
        exclusive: !0,
        message: r,
        params: { max: t },
        skipAbsent: !0,
        test(n) {
          return n.length <= this.resolve(t);
        },
      });
    }
    matches(t, r) {
      let n = !1,
        s,
        o;
      return (
        r &&
          (typeof r == "object"
            ? ({ excludeEmptyString: n = !1, message: s, name: o } = r)
            : (s = r)),
        this.test({
          name: o || "matches",
          message: s || At.matches,
          params: { regex: t },
          skipAbsent: !0,
          test: (i) => (i === "" && n) || i.search(t) !== -1,
        })
      );
    }
    email(t = At.email) {
      return this.matches(QE, {
        name: "email",
        message: t,
        excludeEmptyString: !0,
      });
    }
    url(t = At.url) {
      return this.matches(YE, {
        name: "url",
        message: t,
        excludeEmptyString: !0,
      });
    }
    uuid(t = At.uuid) {
      return this.matches(XE, {
        name: "uuid",
        message: t,
        excludeEmptyString: !1,
      });
    }
    datetime(t) {
      let r = "",
        n,
        s;
      return (
        t &&
          (typeof t == "object"
            ? ({
                message: r = "",
                allowOffset: n = !1,
                precision: s = void 0,
              } = t)
            : (r = t)),
        this.matches(rb, {
          name: "datetime",
          message: r || At.datetime,
          excludeEmptyString: !0,
        })
          .test({
            name: "datetime_offset",
            message: r || At.datetime_offset,
            params: { allowOffset: n },
            skipAbsent: !0,
            test: (o) => {
              if (!o || n) return !0;
              const i = k2(o);
              return i ? !!i.z : !1;
            },
          })
          .test({
            name: "datetime_precision",
            message: r || At.datetime_precision,
            params: { precision: s },
            skipAbsent: !0,
            test: (o) => {
              if (!o || s == null) return !0;
              const i = k2(o);
              return i ? i.precision === s : !1;
            },
          })
      );
    }
    ensure() {
      return this.default("").transform((t) => (t === null ? "" : t));
    }
    trim(t = At.trim) {
      return this.transform((r) => (r != null ? r.trim() : r)).test({
        message: t,
        name: "trim",
        test: nb,
      });
    }
    lowercase(t = At.lowercase) {
      return this.transform((r) => (vs(r) ? r : r.toLowerCase())).test({
        message: t,
        name: "string_case",
        exclusive: !0,
        skipAbsent: !0,
        test: (r) => vs(r) || r === r.toLowerCase(),
      });
    }
    uppercase(t = At.uppercase) {
      return this.transform((r) => (vs(r) ? r : r.toUpperCase())).test({
        message: t,
        name: "string_case",
        exclusive: !0,
        skipAbsent: !0,
        test: (r) => vs(r) || r === r.toUpperCase(),
      });
    }
  }
  K4.prototype = Q4.prototype;
  let ob = new Date(""),
    ib = (e) => Object.prototype.toString.call(e) === "[object Date]";
  class N1 extends qr {
    constructor() {
      super({
        type: "date",
        check(t) {
          return ib(t) && !isNaN(t.getTime());
        },
      }),
        this.withMutation(() => {
          this.transform((t, r, n) =>
            !n.spec.coerce || n.isType(t) || t === null
              ? t
              : ((t = KE(t)), isNaN(t) ? N1.INVALID_DATE : new Date(t)),
          );
        });
    }
    prepareParam(t, r) {
      let n;
      if (zs.isRef(t)) n = t;
      else {
        let s = this.cast(t);
        if (!this._typeCheck(s))
          throw new TypeError(
            `\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`,
          );
        n = s;
      }
      return n;
    }
    min(t, r = _2.min) {
      let n = this.prepareParam(t, "min");
      return this.test({
        message: r,
        name: "min",
        exclusive: !0,
        params: { min: t },
        skipAbsent: !0,
        test(s) {
          return s >= this.resolve(n);
        },
      });
    }
    max(t, r = _2.max) {
      let n = this.prepareParam(t, "max");
      return this.test({
        message: r,
        name: "max",
        exclusive: !0,
        params: { max: t },
        skipAbsent: !0,
        test(s) {
          return s <= this.resolve(n);
        },
      });
    }
  }
  N1.INVALID_DATE = ob;
  N1.prototype;
  function ab(e, t = []) {
    let r = [],
      n = new Set(),
      s = new Set(t.map(([i, a]) => `${i}-${a}`));
    function o(i, a) {
      let l = Ps.split(i)[0];
      n.add(l), s.has(`${a}-${l}`) || r.push([a, l]);
    }
    for (const i of Object.keys(e)) {
      let a = e[i];
      n.add(i),
        zs.isRef(a) && a.isSibling
          ? o(a.path, i)
          : sd(a) && "deps" in a && a.deps.forEach((l) => o(l, i));
    }
    return FE.array(Array.from(n), r).reverse();
  }
  function J3(e, t) {
    let r = 1 / 0;
    return (
      e.some((n, s) => {
        var o;
        if ((o = t.path) != null && o.includes(n)) return (r = s), !0;
      }),
      r
    );
  }
  function Y4(e) {
    return (t, r) => J3(e, t) - J3(e, r);
  }
  const lb = (e, t, r) => {
    if (typeof e != "string") return e;
    let n = e;
    try {
      n = JSON.parse(e);
    } catch {}
    return r.isType(n) ? n : e;
  };
  function Al(e) {
    if ("fields" in e) {
      const t = {};
      for (const [r, n] of Object.entries(e.fields)) t[r] = Al(n);
      return e.setFields(t);
    }
    if (e.type === "array") {
      const t = e.optional();
      return t.innerType && (t.innerType = Al(t.innerType)), t;
    }
    return e.type === "tuple"
      ? e.optional().clone({ types: e.spec.types.map(Al) })
      : "optional" in e
        ? e.optional()
        : e;
  }
  const ub = (e, t) => {
    const r = [...Ps.normalizePath(t)];
    if (r.length === 1) return r[0] in e;
    let n = r.pop(),
      s = Ps.getter(Ps.join(r), !0)(e);
    return !!(s && n in s);
  };
  let e8 = (e) => Object.prototype.toString.call(e) === "[object Object]";
  function cb(e, t) {
    let r = Object.keys(e.fields);
    return Object.keys(t).filter((n) => r.indexOf(n) === -1);
  }
  const db = Y4([]);
  function X4(e) {
    return new J4(e);
  }
  class J4 extends qr {
    constructor(t) {
      super({
        type: "object",
        check(r) {
          return e8(r) || typeof r == "function";
        },
      }),
        (this.fields = Object.create(null)),
        (this._sortErrors = db),
        (this._nodes = []),
        (this._excludedEdges = []),
        this.withMutation(() => {
          t && this.shape(t);
        });
    }
    _cast(t, r = {}) {
      var n;
      let s = super._cast(t, r);
      if (s === void 0) return this.getDefault(r);
      if (!this._typeCheck(s)) return s;
      let o = this.fields,
        i = (n = r.stripUnknown) != null ? n : this.spec.noUnknown,
        a = [].concat(
          this._nodes,
          Object.keys(s).filter((p) => !this._nodes.includes(p)),
        ),
        l = {},
        c = Object.assign({}, r, {
          parent: l,
          __validating: r.__validating || !1,
        }),
        d = !1;
      for (const p of a) {
        let f = o[p],
          y = p in s;
        if (f) {
          let b,
            T = s[p];
          (c.path = (r.path ? `${r.path}.` : "") + p),
            (f = f.resolve({ value: T, context: r.context, parent: l }));
          let _ = f instanceof qr ? f.spec : void 0,
            g = _ == null ? void 0 : _.strict;
          if (_ != null && _.strip) {
            d = d || p in s;
            continue;
          }
          (b = !r.__validating || !g ? f.cast(s[p], c) : s[p]),
            b !== void 0 && (l[p] = b);
        } else y && !i && (l[p] = s[p]);
        (y !== p in l || l[p] !== s[p]) && (d = !0);
      }
      return d ? l : s;
    }
    _validate(t, r = {}, n, s) {
      let {
        from: o = [],
        originalValue: i = t,
        recursive: a = this.spec.recursive,
      } = r;
      (r.from = [{ schema: this, value: i }, ...o]),
        (r.__validating = !0),
        (r.originalValue = i),
        super._validate(t, r, n, (l, c) => {
          if (!a || !e8(c)) {
            s(l, c);
            return;
          }
          i = i || c;
          let d = [];
          for (let p of this._nodes) {
            let f = this.fields[p];
            !f ||
              zs.isRef(f) ||
              d.push(
                f.asNestedTest({
                  options: r,
                  key: p,
                  parent: c,
                  parentPath: r.path,
                  originalParent: i,
                }),
              );
          }
          this.runTests(
            { tests: d, value: c, originalValue: i, options: r },
            n,
            (p) => {
              s(p.sort(this._sortErrors).concat(l), c);
            },
          );
        });
    }
    clone(t) {
      const r = super.clone(t);
      return (
        (r.fields = Object.assign({}, this.fields)),
        (r._nodes = this._nodes),
        (r._excludedEdges = this._excludedEdges),
        (r._sortErrors = this._sortErrors),
        r
      );
    }
    concat(t) {
      let r = super.concat(t),
        n = r.fields;
      for (let [s, o] of Object.entries(this.fields)) {
        const i = n[s];
        n[s] = i === void 0 ? o : i;
      }
      return r.withMutation((s) =>
        s.setFields(n, [...this._excludedEdges, ...t._excludedEdges]),
      );
    }
    _getDefault(t) {
      if ("default" in this.spec) return super._getDefault(t);
      if (!this._nodes.length) return;
      let r = {};
      return (
        this._nodes.forEach((n) => {
          var s;
          const o = this.fields[n];
          let i = t;
          (s = i) != null &&
            s.value &&
            (i = Object.assign({}, i, { parent: i.value, value: i.value[n] })),
            (r[n] = o && "getDefault" in o ? o.getDefault(i) : void 0);
        }),
        r
      );
    }
    setFields(t, r) {
      let n = this.clone();
      return (
        (n.fields = t),
        (n._nodes = ab(t, r)),
        (n._sortErrors = Y4(Object.keys(t))),
        r && (n._excludedEdges = r),
        n
      );
    }
    shape(t, r = []) {
      return this.clone().withMutation((n) => {
        let s = n._excludedEdges;
        return (
          r.length &&
            (Array.isArray(r[0]) || (r = [r]),
            (s = [...n._excludedEdges, ...r])),
          n.setFields(Object.assign(n.fields, t), s)
        );
      });
    }
    partial() {
      const t = {};
      for (const [r, n] of Object.entries(this.fields))
        t[r] =
          "optional" in n && n.optional instanceof Function ? n.optional() : n;
      return this.setFields(t);
    }
    deepPartial() {
      return Al(this);
    }
    pick(t) {
      const r = {};
      for (const n of t) this.fields[n] && (r[n] = this.fields[n]);
      return this.setFields(
        r,
        this._excludedEdges.filter(([n, s]) => t.includes(n) && t.includes(s)),
      );
    }
    omit(t) {
      const r = [];
      for (const n of Object.keys(this.fields)) t.includes(n) || r.push(n);
      return this.pick(r);
    }
    from(t, r, n) {
      let s = Ps.getter(t, !0);
      return this.transform((o) => {
        if (!o) return o;
        let i = o;
        return (
          ub(o, t) &&
            ((i = Object.assign({}, o)), n || delete i[t], (i[r] = s(o))),
          i
        );
      });
    }
    json() {
      return this.transform(lb);
    }
    noUnknown(t = !0, r = S2.noUnknown) {
      typeof t != "boolean" && ((r = t), (t = !0));
      let n = this.test({
        name: "noUnknown",
        exclusive: !0,
        message: r,
        test(s) {
          if (s == null) return !0;
          const o = cb(this.schema, s);
          return (
            !t ||
            o.length === 0 ||
            this.createError({ params: { unknown: o.join(", ") } })
          );
        },
      });
      return (n.spec.noUnknown = t), n;
    }
    unknown(t = !0, r = S2.noUnknown) {
      return this.noUnknown(!t, r);
    }
    transformKeys(t) {
      return this.transform((r) => {
        if (!r) return r;
        const n = {};
        for (const s of Object.keys(r)) n[t(s)] = r[s];
        return n;
      });
    }
    camelCase() {
      return this.transformKeys(Gu.camelCase);
    }
    snakeCase() {
      return this.transformKeys(Gu.snakeCase);
    }
    constantCase() {
      return this.transformKeys((t) => Gu.snakeCase(t).toUpperCase());
    }
    describe(t) {
      const r = (t ? this.resolve(t) : this).clone(),
        n = super.describe(t);
      n.fields = {};
      for (const [o, i] of Object.entries(r.fields)) {
        var s;
        let a = t;
        (s = a) != null &&
          s.value &&
          (a = Object.assign({}, a, { parent: a.value, value: a.value[o] })),
          (n.fields[o] = i.describe(a));
      }
      return n;
    }
  }
  X4.prototype = J4.prototype;
  var fb = function (t) {
    return pb(t) && !hb(t);
  };
  function pb(e) {
    return !!e && typeof e == "object";
  }
  function hb(e) {
    var t = Object.prototype.toString.call(e);
    return t === "[object RegExp]" || t === "[object Date]" || vb(e);
  }
  var mb = typeof Symbol == "function" && Symbol.for,
    gb = mb ? Symbol.for("react.element") : 60103;
  function vb(e) {
    return e.$$typeof === gb;
  }
  function yb(e) {
    return Array.isArray(e) ? [] : {};
  }
  function l1(e, t) {
    return t.clone !== !1 && t.isMergeableObject(e) ? ya(yb(e), e, t) : e;
  }
  function Cb(e, t, r) {
    return e.concat(t).map(function (n) {
      return l1(n, r);
    });
  }
  function wb(e, t, r) {
    var n = {};
    return (
      r.isMergeableObject(e) &&
        Object.keys(e).forEach(function (s) {
          n[s] = l1(e[s], r);
        }),
      Object.keys(t).forEach(function (s) {
        !r.isMergeableObject(t[s]) || !e[s]
          ? (n[s] = l1(t[s], r))
          : (n[s] = ya(e[s], t[s], r));
      }),
      n
    );
  }
  function ya(e, t, r) {
    (r = r || {}),
      (r.arrayMerge = r.arrayMerge || Cb),
      (r.isMergeableObject = r.isMergeableObject || fb);
    var n = Array.isArray(t),
      s = Array.isArray(e),
      o = n === s;
    return o ? (n ? r.arrayMerge(e, t, r) : wb(e, t, r)) : l1(t, r);
  }
  ya.all = function (t, r) {
    if (!Array.isArray(t)) throw new Error("first argument should be an array");
    return t.reduce(function (n, s) {
      return ya(n, s, r);
    }, {});
  };
  var O2 = ya,
    e9 =
      typeof global == "object" && global && global.Object === Object && global,
    Eb = typeof self == "object" && self && self.Object === Object && self,
    Zr = e9 || Eb || Function("return this")(),
    es = Zr.Symbol,
    t9 = Object.prototype,
    bb = t9.hasOwnProperty,
    Tb = t9.toString,
    Ci = es ? es.toStringTag : void 0;
  function xb(e) {
    var t = bb.call(e, Ci),
      r = e[Ci];
    try {
      e[Ci] = void 0;
      var n = !0;
    } catch {}
    var s = Tb.call(e);
    return n && (t ? (e[Ci] = r) : delete e[Ci]), s;
  }
  var _b = Object.prototype,
    Sb = _b.toString;
  function kb(e) {
    return Sb.call(e);
  }
  var Ob = "[object Null]",
    Ab = "[object Undefined]",
    t8 = es ? es.toStringTag : void 0;
  function Bs(e) {
    return e == null
      ? e === void 0
        ? Ab
        : Ob
      : t8 && t8 in Object(e)
        ? xb(e)
        : kb(e);
  }
  function r9(e, t) {
    return function (r) {
      return e(t(r));
    };
  }
  var od = r9(Object.getPrototypeOf, Object);
  function Ws(e) {
    return e != null && typeof e == "object";
  }
  var Pb = "[object Object]",
    Lb = Function.prototype,
    Rb = Object.prototype,
    n9 = Lb.toString,
    jb = Rb.hasOwnProperty,
    Nb = n9.call(Object);
  function r8(e) {
    if (!Ws(e) || Bs(e) != Pb) return !1;
    var t = od(e);
    if (t === null) return !0;
    var r = jb.call(t, "constructor") && t.constructor;
    return typeof r == "function" && r instanceof r && n9.call(r) == Nb;
  }
  function Fb() {
    (this.__data__ = []), (this.size = 0);
  }
  function s9(e, t) {
    return e === t || (e !== e && t !== t);
  }
  function F1(e, t) {
    for (var r = e.length; r--; ) if (s9(e[r][0], t)) return r;
    return -1;
  }
  var Ib = Array.prototype,
    Mb = Ib.splice;
  function Db(e) {
    var t = this.__data__,
      r = F1(t, e);
    if (r < 0) return !1;
    var n = t.length - 1;
    return r == n ? t.pop() : Mb.call(t, r, 1), --this.size, !0;
  }
  function Gb(e) {
    var t = this.__data__,
      r = F1(t, e);
    return r < 0 ? void 0 : t[r][1];
  }
  function Ub(e) {
    return F1(this.__data__, e) > -1;
  }
  function $b(e, t) {
    var r = this.__data__,
      n = F1(r, e);
    return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
  }
  function gn(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  gn.prototype.clear = Fb;
  gn.prototype.delete = Db;
  gn.prototype.get = Gb;
  gn.prototype.has = Ub;
  gn.prototype.set = $b;
  function Hb() {
    (this.__data__ = new gn()), (this.size = 0);
  }
  function Vb(e) {
    var t = this.__data__,
      r = t.delete(e);
    return (this.size = t.size), r;
  }
  function zb(e) {
    return this.__data__.get(e);
  }
  function Bb(e) {
    return this.__data__.has(e);
  }
  function Da(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  var Wb = "[object AsyncFunction]",
    qb = "[object Function]",
    Zb = "[object GeneratorFunction]",
    Kb = "[object Proxy]";
  function o9(e) {
    if (!Da(e)) return !1;
    var t = Bs(e);
    return t == qb || t == Zb || t == Wb || t == Kb;
  }
  var Uu = Zr["__core-js_shared__"],
    n8 = (function () {
      var e = /[^.]+$/.exec((Uu && Uu.keys && Uu.keys.IE_PROTO) || "");
      return e ? "Symbol(src)_1." + e : "";
    })();
  function Qb(e) {
    return !!n8 && n8 in e;
  }
  var Yb = Function.prototype,
    Xb = Yb.toString;
  function qs(e) {
    if (e != null) {
      try {
        return Xb.call(e);
      } catch {}
      try {
        return e + "";
      } catch {}
    }
    return "";
  }
  var Jb = /[\\^$.*+?()[\]{}|]/g,
    eT = /^\[object .+?Constructor\]$/,
    tT = Function.prototype,
    rT = Object.prototype,
    nT = tT.toString,
    sT = rT.hasOwnProperty,
    oT = RegExp(
      "^" +
        nT
          .call(sT)
          .replace(Jb, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?",
          ) +
        "$",
    );
  function iT(e) {
    if (!Da(e) || Qb(e)) return !1;
    var t = o9(e) ? oT : eT;
    return t.test(qs(e));
  }
  function aT(e, t) {
    return e == null ? void 0 : e[t];
  }
  function Zs(e, t) {
    var r = aT(e, t);
    return iT(r) ? r : void 0;
  }
  var Ca = Zs(Zr, "Map"),
    wa = Zs(Object, "create");
  function lT() {
    (this.__data__ = wa ? wa(null) : {}), (this.size = 0);
  }
  function uT(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  var cT = "__lodash_hash_undefined__",
    dT = Object.prototype,
    fT = dT.hasOwnProperty;
  function pT(e) {
    var t = this.__data__;
    if (wa) {
      var r = t[e];
      return r === cT ? void 0 : r;
    }
    return fT.call(t, e) ? t[e] : void 0;
  }
  var hT = Object.prototype,
    mT = hT.hasOwnProperty;
  function gT(e) {
    var t = this.__data__;
    return wa ? t[e] !== void 0 : mT.call(t, e);
  }
  var vT = "__lodash_hash_undefined__";
  function yT(e, t) {
    var r = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (r[e] = wa && t === void 0 ? vT : t),
      this
    );
  }
  function Gs(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  Gs.prototype.clear = lT;
  Gs.prototype.delete = uT;
  Gs.prototype.get = pT;
  Gs.prototype.has = gT;
  Gs.prototype.set = yT;
  function CT() {
    (this.size = 0),
      (this.__data__ = {
        hash: new Gs(),
        map: new (Ca || gn)(),
        string: new Gs(),
      });
  }
  function wT(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean"
      ? e !== "__proto__"
      : e === null;
  }
  function I1(e, t) {
    var r = e.__data__;
    return wT(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
  }
  function ET(e) {
    var t = I1(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  function bT(e) {
    return I1(this, e).get(e);
  }
  function TT(e) {
    return I1(this, e).has(e);
  }
  function xT(e, t) {
    var r = I1(this, e),
      n = r.size;
    return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
  }
  function ss(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  ss.prototype.clear = CT;
  ss.prototype.delete = ET;
  ss.prototype.get = bT;
  ss.prototype.has = TT;
  ss.prototype.set = xT;
  var _T = 200;
  function ST(e, t) {
    var r = this.__data__;
    if (r instanceof gn) {
      var n = r.__data__;
      if (!Ca || n.length < _T - 1)
        return n.push([e, t]), (this.size = ++r.size), this;
      r = this.__data__ = new ss(n);
    }
    return r.set(e, t), (this.size = r.size), this;
  }
  function ni(e) {
    var t = (this.__data__ = new gn(e));
    this.size = t.size;
  }
  ni.prototype.clear = Hb;
  ni.prototype.delete = Vb;
  ni.prototype.get = zb;
  ni.prototype.has = Bb;
  ni.prototype.set = ST;
  function kT(e, t) {
    for (
      var r = -1, n = e == null ? 0 : e.length;
      ++r < n && t(e[r], r, e) !== !1;

    );
    return e;
  }
  var s8 = (function () {
    try {
      var e = Zs(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {}
  })();
  function i9(e, t, r) {
    t == "__proto__" && s8
      ? s8(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
      : (e[t] = r);
  }
  var OT = Object.prototype,
    AT = OT.hasOwnProperty;
  function a9(e, t, r) {
    var n = e[t];
    (!(AT.call(e, t) && s9(n, r)) || (r === void 0 && !(t in e))) &&
      i9(e, t, r);
  }
  function M1(e, t, r, n) {
    var s = !r;
    r || (r = {});
    for (var o = -1, i = t.length; ++o < i; ) {
      var a = t[o],
        l = void 0;
      l === void 0 && (l = e[a]), s ? i9(r, a, l) : a9(r, a, l);
    }
    return r;
  }
  function PT(e, t) {
    for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
    return n;
  }
  var LT = "[object Arguments]";
  function o8(e) {
    return Ws(e) && Bs(e) == LT;
  }
  var l9 = Object.prototype,
    RT = l9.hasOwnProperty,
    jT = l9.propertyIsEnumerable,
    NT = o8(
      (function () {
        return arguments;
      })(),
    )
      ? o8
      : function (e) {
          return Ws(e) && RT.call(e, "callee") && !jT.call(e, "callee");
        },
    Ga = Array.isArray;
  function FT() {
    return !1;
  }
  var u9 = typeof Bt == "object" && Bt && !Bt.nodeType && Bt,
    i8 = u9 && typeof Wt == "object" && Wt && !Wt.nodeType && Wt,
    IT = i8 && i8.exports === u9,
    a8 = IT ? Zr.Buffer : void 0,
    MT = a8 ? a8.isBuffer : void 0,
    c9 = MT || FT,
    DT = 9007199254740991,
    GT = /^(?:0|[1-9]\d*)$/;
  function UT(e, t) {
    var r = typeof e;
    return (
      (t = t ?? DT),
      !!t &&
        (r == "number" || (r != "symbol" && GT.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
    );
  }
  var $T = 9007199254740991;
  function d9(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= $T;
  }
  var HT = "[object Arguments]",
    VT = "[object Array]",
    zT = "[object Boolean]",
    BT = "[object Date]",
    WT = "[object Error]",
    qT = "[object Function]",
    ZT = "[object Map]",
    KT = "[object Number]",
    QT = "[object Object]",
    YT = "[object RegExp]",
    XT = "[object Set]",
    JT = "[object String]",
    ex = "[object WeakMap]",
    tx = "[object ArrayBuffer]",
    rx = "[object DataView]",
    nx = "[object Float32Array]",
    sx = "[object Float64Array]",
    ox = "[object Int8Array]",
    ix = "[object Int16Array]",
    ax = "[object Int32Array]",
    lx = "[object Uint8Array]",
    ux = "[object Uint8ClampedArray]",
    cx = "[object Uint16Array]",
    dx = "[object Uint32Array]",
    Ae = {};
  Ae[nx] =
    Ae[sx] =
    Ae[ox] =
    Ae[ix] =
    Ae[ax] =
    Ae[lx] =
    Ae[ux] =
    Ae[cx] =
    Ae[dx] =
      !0;
  Ae[HT] =
    Ae[VT] =
    Ae[tx] =
    Ae[zT] =
    Ae[rx] =
    Ae[BT] =
    Ae[WT] =
    Ae[qT] =
    Ae[ZT] =
    Ae[KT] =
    Ae[QT] =
    Ae[YT] =
    Ae[XT] =
    Ae[JT] =
    Ae[ex] =
      !1;
  function fx(e) {
    return Ws(e) && d9(e.length) && !!Ae[Bs(e)];
  }
  function id(e) {
    return function (t) {
      return e(t);
    };
  }
  var f9 = typeof Bt == "object" && Bt && !Bt.nodeType && Bt,
    Ki = f9 && typeof Wt == "object" && Wt && !Wt.nodeType && Wt,
    px = Ki && Ki.exports === f9,
    $u = px && e9.process,
    Yo = (function () {
      try {
        var e = Ki && Ki.require && Ki.require("util").types;
        return e || ($u && $u.binding && $u.binding("util"));
      } catch {}
    })(),
    l8 = Yo && Yo.isTypedArray,
    hx = l8 ? id(l8) : fx,
    mx = Object.prototype,
    gx = mx.hasOwnProperty;
  function p9(e, t) {
    var r = Ga(e),
      n = !r && NT(e),
      s = !r && !n && c9(e),
      o = !r && !n && !s && hx(e),
      i = r || n || s || o,
      a = i ? PT(e.length, String) : [],
      l = a.length;
    for (var c in e)
      (t || gx.call(e, c)) &&
        !(
          i &&
          (c == "length" ||
            (s && (c == "offset" || c == "parent")) ||
            (o && (c == "buffer" || c == "byteLength" || c == "byteOffset")) ||
            UT(c, l))
        ) &&
        a.push(c);
    return a;
  }
  var vx = Object.prototype;
  function ad(e) {
    var t = e && e.constructor,
      r = (typeof t == "function" && t.prototype) || vx;
    return e === r;
  }
  var yx = r9(Object.keys, Object),
    Cx = Object.prototype,
    wx = Cx.hasOwnProperty;
  function Ex(e) {
    if (!ad(e)) return yx(e);
    var t = [];
    for (var r in Object(e)) wx.call(e, r) && r != "constructor" && t.push(r);
    return t;
  }
  function h9(e) {
    return e != null && d9(e.length) && !o9(e);
  }
  function ld(e) {
    return h9(e) ? p9(e) : Ex(e);
  }
  function bx(e, t) {
    return e && M1(t, ld(t), e);
  }
  function Tx(e) {
    var t = [];
    if (e != null) for (var r in Object(e)) t.push(r);
    return t;
  }
  var xx = Object.prototype,
    _x = xx.hasOwnProperty;
  function Sx(e) {
    if (!Da(e)) return Tx(e);
    var t = ad(e),
      r = [];
    for (var n in e) (n == "constructor" && (t || !_x.call(e, n))) || r.push(n);
    return r;
  }
  function ud(e) {
    return h9(e) ? p9(e, !0) : Sx(e);
  }
  function kx(e, t) {
    return e && M1(t, ud(t), e);
  }
  var m9 = typeof Bt == "object" && Bt && !Bt.nodeType && Bt,
    u8 = m9 && typeof Wt == "object" && Wt && !Wt.nodeType && Wt,
    Ox = u8 && u8.exports === m9,
    c8 = Ox ? Zr.Buffer : void 0,
    d8 = c8 ? c8.allocUnsafe : void 0;
  function Ax(e, t) {
    if (t) return e.slice();
    var r = e.length,
      n = d8 ? d8(r) : new e.constructor(r);
    return e.copy(n), n;
  }
  function g9(e, t) {
    var r = -1,
      n = e.length;
    for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
    return t;
  }
  function Px(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, s = 0, o = []; ++r < n; ) {
      var i = e[r];
      t(i, r, e) && (o[s++] = i);
    }
    return o;
  }
  function v9() {
    return [];
  }
  var Lx = Object.prototype,
    Rx = Lx.propertyIsEnumerable,
    f8 = Object.getOwnPropertySymbols,
    cd = f8
      ? function (e) {
          return e == null
            ? []
            : ((e = Object(e)),
              Px(f8(e), function (t) {
                return Rx.call(e, t);
              }));
        }
      : v9;
  function jx(e, t) {
    return M1(e, cd(e), t);
  }
  function y9(e, t) {
    for (var r = -1, n = t.length, s = e.length; ++r < n; ) e[s + r] = t[r];
    return e;
  }
  var Nx = Object.getOwnPropertySymbols,
    C9 = Nx
      ? function (e) {
          for (var t = []; e; ) y9(t, cd(e)), (e = od(e));
          return t;
        }
      : v9;
  function Fx(e, t) {
    return M1(e, C9(e), t);
  }
  function w9(e, t, r) {
    var n = t(e);
    return Ga(e) ? n : y9(n, r(e));
  }
  function Ix(e) {
    return w9(e, ld, cd);
  }
  function Mx(e) {
    return w9(e, ud, C9);
  }
  var A2 = Zs(Zr, "DataView"),
    P2 = Zs(Zr, "Promise"),
    L2 = Zs(Zr, "Set"),
    R2 = Zs(Zr, "WeakMap"),
    p8 = "[object Map]",
    Dx = "[object Object]",
    h8 = "[object Promise]",
    m8 = "[object Set]",
    g8 = "[object WeakMap]",
    v8 = "[object DataView]",
    Gx = qs(A2),
    Ux = qs(Ca),
    $x = qs(P2),
    Hx = qs(L2),
    Vx = qs(R2),
    nn = Bs;
  ((A2 && nn(new A2(new ArrayBuffer(1))) != v8) ||
    (Ca && nn(new Ca()) != p8) ||
    (P2 && nn(P2.resolve()) != h8) ||
    (L2 && nn(new L2()) != m8) ||
    (R2 && nn(new R2()) != g8)) &&
    (nn = function (e) {
      var t = Bs(e),
        r = t == Dx ? e.constructor : void 0,
        n = r ? qs(r) : "";
      if (n)
        switch (n) {
          case Gx:
            return v8;
          case Ux:
            return p8;
          case $x:
            return h8;
          case Hx:
            return m8;
          case Vx:
            return g8;
        }
      return t;
    });
  var zx = Object.prototype,
    Bx = zx.hasOwnProperty;
  function Wx(e) {
    var t = e.length,
      r = new e.constructor(t);
    return (
      t &&
        typeof e[0] == "string" &&
        Bx.call(e, "index") &&
        ((r.index = e.index), (r.input = e.input)),
      r
    );
  }
  var y8 = Zr.Uint8Array;
  function dd(e) {
    var t = new e.constructor(e.byteLength);
    return new y8(t).set(new y8(e)), t;
  }
  function qx(e, t) {
    var r = t ? dd(e.buffer) : e.buffer;
    return new e.constructor(r, e.byteOffset, e.byteLength);
  }
  var Zx = /\w*$/;
  function Kx(e) {
    var t = new e.constructor(e.source, Zx.exec(e));
    return (t.lastIndex = e.lastIndex), t;
  }
  var C8 = es ? es.prototype : void 0,
    w8 = C8 ? C8.valueOf : void 0;
  function Qx(e) {
    return w8 ? Object(w8.call(e)) : {};
  }
  function Yx(e, t) {
    var r = t ? dd(e.buffer) : e.buffer;
    return new e.constructor(r, e.byteOffset, e.length);
  }
  var Xx = "[object Boolean]",
    Jx = "[object Date]",
    e_ = "[object Map]",
    t_ = "[object Number]",
    r_ = "[object RegExp]",
    n_ = "[object Set]",
    s_ = "[object String]",
    o_ = "[object Symbol]",
    i_ = "[object ArrayBuffer]",
    a_ = "[object DataView]",
    l_ = "[object Float32Array]",
    u_ = "[object Float64Array]",
    c_ = "[object Int8Array]",
    d_ = "[object Int16Array]",
    f_ = "[object Int32Array]",
    p_ = "[object Uint8Array]",
    h_ = "[object Uint8ClampedArray]",
    m_ = "[object Uint16Array]",
    g_ = "[object Uint32Array]";
  function v_(e, t, r) {
    var n = e.constructor;
    switch (t) {
      case i_:
        return dd(e);
      case Xx:
      case Jx:
        return new n(+e);
      case a_:
        return qx(e, r);
      case l_:
      case u_:
      case c_:
      case d_:
      case f_:
      case p_:
      case h_:
      case m_:
      case g_:
        return Yx(e, r);
      case e_:
        return new n();
      case t_:
      case s_:
        return new n(e);
      case r_:
        return Kx(e);
      case n_:
        return new n();
      case o_:
        return Qx(e);
    }
  }
  var E8 = Object.create,
    y_ = (function () {
      function e() {}
      return function (t) {
        if (!Da(t)) return {};
        if (E8) return E8(t);
        e.prototype = t;
        var r = new e();
        return (e.prototype = void 0), r;
      };
    })();
  function C_(e) {
    return typeof e.constructor == "function" && !ad(e) ? y_(od(e)) : {};
  }
  var w_ = "[object Map]";
  function E_(e) {
    return Ws(e) && nn(e) == w_;
  }
  var b8 = Yo && Yo.isMap,
    b_ = b8 ? id(b8) : E_,
    T_ = "[object Set]";
  function x_(e) {
    return Ws(e) && nn(e) == T_;
  }
  var T8 = Yo && Yo.isSet,
    __ = T8 ? id(T8) : x_,
    S_ = 1,
    k_ = 2,
    O_ = 4,
    E9 = "[object Arguments]",
    A_ = "[object Array]",
    P_ = "[object Boolean]",
    L_ = "[object Date]",
    R_ = "[object Error]",
    b9 = "[object Function]",
    j_ = "[object GeneratorFunction]",
    N_ = "[object Map]",
    F_ = "[object Number]",
    T9 = "[object Object]",
    I_ = "[object RegExp]",
    M_ = "[object Set]",
    D_ = "[object String]",
    G_ = "[object Symbol]",
    U_ = "[object WeakMap]",
    $_ = "[object ArrayBuffer]",
    H_ = "[object DataView]",
    V_ = "[object Float32Array]",
    z_ = "[object Float64Array]",
    B_ = "[object Int8Array]",
    W_ = "[object Int16Array]",
    q_ = "[object Int32Array]",
    Z_ = "[object Uint8Array]",
    K_ = "[object Uint8ClampedArray]",
    Q_ = "[object Uint16Array]",
    Y_ = "[object Uint32Array]",
    _e = {};
  _e[E9] =
    _e[A_] =
    _e[$_] =
    _e[H_] =
    _e[P_] =
    _e[L_] =
    _e[V_] =
    _e[z_] =
    _e[B_] =
    _e[W_] =
    _e[q_] =
    _e[N_] =
    _e[F_] =
    _e[T9] =
    _e[I_] =
    _e[M_] =
    _e[D_] =
    _e[G_] =
    _e[Z_] =
    _e[K_] =
    _e[Q_] =
    _e[Y_] =
      !0;
  _e[R_] = _e[b9] = _e[U_] = !1;
  function Qi(e, t, r, n, s, o) {
    var i,
      a = t & S_,
      l = t & k_,
      c = t & O_;
    if (i !== void 0) return i;
    if (!Da(e)) return e;
    var d = Ga(e);
    if (d) {
      if (((i = Wx(e)), !a)) return g9(e, i);
    } else {
      var p = nn(e),
        f = p == b9 || p == j_;
      if (c9(e)) return Ax(e, a);
      if (p == T9 || p == E9 || (f && !s)) {
        if (((i = l || f ? {} : C_(e)), !a))
          return l ? Fx(e, kx(i, e)) : jx(e, bx(i, e));
      } else {
        if (!_e[p]) return s ? e : {};
        i = v_(e, p, a);
      }
    }
    o || (o = new ni());
    var y = o.get(e);
    if (y) return y;
    o.set(e, i),
      __(e)
        ? e.forEach(function (_) {
            i.add(Qi(_, t, r, _, e, o));
          })
        : b_(e) &&
          e.forEach(function (_, g) {
            i.set(g, Qi(_, t, r, g, e, o));
          });
    var b = c ? (l ? Mx : Ix) : l ? ud : ld,
      T = d ? void 0 : b(e);
    return (
      kT(T || e, function (_, g) {
        T && ((g = _), (_ = e[g])), a9(i, g, Qi(_, t, r, g, e, o));
      }),
      i
    );
  }
  var X_ = 1,
    J_ = 4;
  function ul(e) {
    return Qi(e, X_ | J_);
  }
  var x8 = Array.isArray,
    _8 = Object.keys,
    eS = Object.prototype.hasOwnProperty,
    tS = typeof Element < "u";
  function j2(e, t) {
    if (e === t) return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
      var r = x8(e),
        n = x8(t),
        s,
        o,
        i;
      if (r && n) {
        if (((o = e.length), o != t.length)) return !1;
        for (s = o; s-- !== 0; ) if (!j2(e[s], t[s])) return !1;
        return !0;
      }
      if (r != n) return !1;
      var a = e instanceof Date,
        l = t instanceof Date;
      if (a != l) return !1;
      if (a && l) return e.getTime() == t.getTime();
      var c = e instanceof RegExp,
        d = t instanceof RegExp;
      if (c != d) return !1;
      if (c && d) return e.toString() == t.toString();
      var p = _8(e);
      if (((o = p.length), o !== _8(t).length)) return !1;
      for (s = o; s-- !== 0; ) if (!eS.call(t, p[s])) return !1;
      if (tS && e instanceof Element && t instanceof Element) return e === t;
      for (s = o; s-- !== 0; )
        if (((i = p[s]), !(i === "_owner" && e.$$typeof) && !j2(e[i], t[i])))
          return !1;
      return !0;
    }
    return e !== e && t !== t;
  }
  var rS = function (t, r) {
    try {
      return j2(t, r);
    } catch (n) {
      if (
        (n.message && n.message.match(/stack|recursion/i)) ||
        n.number === -2146828260
      )
        return (
          console.warn(
            "Warning: react-fast-compare does not handle circular references.",
            n.name,
            n.message,
          ),
          !1
        );
      throw n;
    }
  };
  const ds = Sa(rS);
  var nS = 4;
  function S8(e) {
    return Qi(e, nS);
  }
  function x9(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, s = Array(n); ++r < n; )
      s[r] = t(e[r], r, e);
    return s;
  }
  var sS = "[object Symbol]";
  function fd(e) {
    return typeof e == "symbol" || (Ws(e) && Bs(e) == sS);
  }
  var oS = "Expected a function";
  function pd(e, t) {
    if (typeof e != "function" || (t != null && typeof t != "function"))
      throw new TypeError(oS);
    var r = function () {
      var n = arguments,
        s = t ? t.apply(this, n) : n[0],
        o = r.cache;
      if (o.has(s)) return o.get(s);
      var i = e.apply(this, n);
      return (r.cache = o.set(s, i) || o), i;
    };
    return (r.cache = new (pd.Cache || ss)()), r;
  }
  pd.Cache = ss;
  var iS = 500;
  function aS(e) {
    var t = pd(e, function (n) {
        return r.size === iS && r.clear(), n;
      }),
      r = t.cache;
    return t;
  }
  var lS =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    uS = /\\(\\)?/g,
    cS = aS(function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === 46 && t.push(""),
        e.replace(lS, function (r, n, s, o) {
          t.push(s ? o.replace(uS, "$1") : n || r);
        }),
        t
      );
    }),
    dS = 1 / 0;
  function fS(e) {
    if (typeof e == "string" || fd(e)) return e;
    var t = e + "";
    return t == "0" && 1 / e == -dS ? "-0" : t;
  }
  var pS = 1 / 0,
    k8 = es ? es.prototype : void 0,
    O8 = k8 ? k8.toString : void 0;
  function _9(e) {
    if (typeof e == "string") return e;
    if (Ga(e)) return x9(e, _9) + "";
    if (fd(e)) return O8 ? O8.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -pS ? "-0" : t;
  }
  function hS(e) {
    return e == null ? "" : _9(e);
  }
  function S9(e) {
    return Ga(e) ? x9(e, fS) : fd(e) ? [e] : g9(cS(hS(e)));
  }
  var k9 = { exports: {} },
    Te = {};
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var et = typeof Symbol == "function" && Symbol.for,
    hd = et ? Symbol.for("react.element") : 60103,
    md = et ? Symbol.for("react.portal") : 60106,
    D1 = et ? Symbol.for("react.fragment") : 60107,
    G1 = et ? Symbol.for("react.strict_mode") : 60108,
    U1 = et ? Symbol.for("react.profiler") : 60114,
    $1 = et ? Symbol.for("react.provider") : 60109,
    H1 = et ? Symbol.for("react.context") : 60110,
    gd = et ? Symbol.for("react.async_mode") : 60111,
    V1 = et ? Symbol.for("react.concurrent_mode") : 60111,
    z1 = et ? Symbol.for("react.forward_ref") : 60112,
    B1 = et ? Symbol.for("react.suspense") : 60113,
    mS = et ? Symbol.for("react.suspense_list") : 60120,
    W1 = et ? Symbol.for("react.memo") : 60115,
    q1 = et ? Symbol.for("react.lazy") : 60116,
    gS = et ? Symbol.for("react.block") : 60121,
    vS = et ? Symbol.for("react.fundamental") : 60117,
    yS = et ? Symbol.for("react.responder") : 60118,
    CS = et ? Symbol.for("react.scope") : 60119;
  function tr(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case hd:
          switch (((e = e.type), e)) {
            case gd:
            case V1:
            case D1:
            case U1:
            case G1:
            case B1:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case H1:
                case z1:
                case q1:
                case W1:
                case $1:
                  return e;
                default:
                  return t;
              }
          }
        case md:
          return t;
      }
    }
  }
  function O9(e) {
    return tr(e) === V1;
  }
  Te.AsyncMode = gd;
  Te.ConcurrentMode = V1;
  Te.ContextConsumer = H1;
  Te.ContextProvider = $1;
  Te.Element = hd;
  Te.ForwardRef = z1;
  Te.Fragment = D1;
  Te.Lazy = q1;
  Te.Memo = W1;
  Te.Portal = md;
  Te.Profiler = U1;
  Te.StrictMode = G1;
  Te.Suspense = B1;
  Te.isAsyncMode = function (e) {
    return O9(e) || tr(e) === gd;
  };
  Te.isConcurrentMode = O9;
  Te.isContextConsumer = function (e) {
    return tr(e) === H1;
  };
  Te.isContextProvider = function (e) {
    return tr(e) === $1;
  };
  Te.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === hd;
  };
  Te.isForwardRef = function (e) {
    return tr(e) === z1;
  };
  Te.isFragment = function (e) {
    return tr(e) === D1;
  };
  Te.isLazy = function (e) {
    return tr(e) === q1;
  };
  Te.isMemo = function (e) {
    return tr(e) === W1;
  };
  Te.isPortal = function (e) {
    return tr(e) === md;
  };
  Te.isProfiler = function (e) {
    return tr(e) === U1;
  };
  Te.isStrictMode = function (e) {
    return tr(e) === G1;
  };
  Te.isSuspense = function (e) {
    return tr(e) === B1;
  };
  Te.isValidElementType = function (e) {
    return (
      typeof e == "string" ||
      typeof e == "function" ||
      e === D1 ||
      e === V1 ||
      e === U1 ||
      e === G1 ||
      e === B1 ||
      e === mS ||
      (typeof e == "object" &&
        e !== null &&
        (e.$$typeof === q1 ||
          e.$$typeof === W1 ||
          e.$$typeof === $1 ||
          e.$$typeof === H1 ||
          e.$$typeof === z1 ||
          e.$$typeof === vS ||
          e.$$typeof === yS ||
          e.$$typeof === CS ||
          e.$$typeof === gS))
    );
  };
  Te.typeOf = tr;
  k9.exports = Te;
  var wS = k9.exports,
    A9 = wS,
    ES = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    bS = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    P9 = {};
  P9[A9.ForwardRef] = ES;
  P9[A9.Memo] = bS;
  function Ye() {
    return (
      (Ye =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
      Ye.apply(this, arguments)
    );
  }
  function L9(e, t) {
    if (e == null) return {};
    var r = {},
      n = Object.keys(e),
      s,
      o;
    for (o = 0; o < n.length; o++)
      (s = n[o]), !(t.indexOf(s) >= 0) && (r[s] = e[s]);
    return r;
  }
  var Z1 = N.createContext(void 0);
  Z1.displayName = "FormikContext";
  Z1.Provider;
  Z1.Consumer;
  function TS() {
    var e = N.useContext(Z1);
    return e;
  }
  var Cr = function (t) {
      return typeof t == "function";
    },
    K1 = function (t) {
      return t !== null && typeof t == "object";
    },
    xS = function (t) {
      return String(Math.floor(Number(t))) === t;
    },
    Hu = function (t) {
      return Object.prototype.toString.call(t) === "[object String]";
    },
    Vu = function (t) {
      return K1(t) && Cr(t.then);
    };
  function $t(e, t, r, n) {
    n === void 0 && (n = 0);
    for (var s = S9(t); e && n < s.length; ) e = e[s[n++]];
    return (n !== s.length && !e) || e === void 0 ? r : e;
  }
  function Ls(e, t, r) {
    for (var n = S8(e), s = n, o = 0, i = S9(t); o < i.length - 1; o++) {
      var a = i[o],
        l = $t(e, i.slice(0, o + 1));
      if (l && (K1(l) || Array.isArray(l))) s = s[a] = S8(l);
      else {
        var c = i[o + 1];
        s = s[a] = xS(c) && Number(c) >= 0 ? [] : {};
      }
    }
    return (o === 0 ? e : s)[i[o]] === r
      ? e
      : (r === void 0 ? delete s[i[o]] : (s[i[o]] = r),
        o === 0 && r === void 0 && delete n[i[o]],
        n);
  }
  function R9(e, t, r, n) {
    r === void 0 && (r = new WeakMap()), n === void 0 && (n = {});
    for (var s = 0, o = Object.keys(e); s < o.length; s++) {
      var i = o[s],
        a = e[i];
      K1(a)
        ? r.get(a) ||
          (r.set(a, !0), (n[i] = Array.isArray(a) ? [] : {}), R9(a, t, r, n[i]))
        : (n[i] = t);
    }
    return n;
  }
  function _S(e, t) {
    switch (t.type) {
      case "SET_VALUES":
        return Ye({}, e, { values: t.payload });
      case "SET_TOUCHED":
        return Ye({}, e, { touched: t.payload });
      case "SET_ERRORS":
        return ds(e.errors, t.payload) ? e : Ye({}, e, { errors: t.payload });
      case "SET_STATUS":
        return Ye({}, e, { status: t.payload });
      case "SET_ISSUBMITTING":
        return Ye({}, e, { isSubmitting: t.payload });
      case "SET_ISVALIDATING":
        return Ye({}, e, { isValidating: t.payload });
      case "SET_FIELD_VALUE":
        return Ye({}, e, {
          values: Ls(e.values, t.payload.field, t.payload.value),
        });
      case "SET_FIELD_TOUCHED":
        return Ye({}, e, {
          touched: Ls(e.touched, t.payload.field, t.payload.value),
        });
      case "SET_FIELD_ERROR":
        return Ye({}, e, {
          errors: Ls(e.errors, t.payload.field, t.payload.value),
        });
      case "RESET_FORM":
        return Ye({}, e, t.payload);
      case "SET_FORMIK_STATE":
        return t.payload(e);
      case "SUBMIT_ATTEMPT":
        return Ye({}, e, {
          touched: R9(e.values, !0),
          isSubmitting: !0,
          submitCount: e.submitCount + 1,
        });
      case "SUBMIT_FAILURE":
        return Ye({}, e, { isSubmitting: !1 });
      case "SUBMIT_SUCCESS":
        return Ye({}, e, { isSubmitting: !1 });
      default:
        return e;
    }
  }
  var ls = {},
    cl = {};
  function SS(e) {
    var t = e.validateOnChange,
      r = t === void 0 ? !0 : t,
      n = e.validateOnBlur,
      s = n === void 0 ? !0 : n,
      o = e.validateOnMount,
      i = o === void 0 ? !1 : o,
      a = e.isInitialValid,
      l = e.enableReinitialize,
      c = l === void 0 ? !1 : l,
      d = e.onSubmit,
      p = L9(e, [
        "validateOnChange",
        "validateOnBlur",
        "validateOnMount",
        "isInitialValid",
        "enableReinitialize",
        "onSubmit",
      ]),
      f = Ye(
        {
          validateOnChange: r,
          validateOnBlur: s,
          validateOnMount: i,
          onSubmit: d,
        },
        p,
      ),
      y = N.useRef(f.initialValues),
      b = N.useRef(f.initialErrors || ls),
      T = N.useRef(f.initialTouched || cl),
      _ = N.useRef(f.initialStatus),
      g = N.useRef(!1),
      h = N.useRef({});
    N.useEffect(function () {
      return (
        (g.current = !0),
        function () {
          g.current = !1;
        }
      );
    }, []);
    var v = N.useState(0),
      E = v[1],
      P = N.useRef({
        values: ul(f.initialValues),
        errors: ul(f.initialErrors) || ls,
        touched: ul(f.initialTouched) || cl,
        status: ul(f.initialStatus),
        isSubmitting: !1,
        isValidating: !1,
        submitCount: 0,
      }),
      L = P.current,
      A = N.useCallback(function (k) {
        var G = P.current;
        (P.current = _S(G, k)),
          G !== P.current &&
            E(function ($) {
              return $ + 1;
            });
      }, []),
      j = N.useCallback(
        function (k, G) {
          return new Promise(function ($, B) {
            var J = f.validate(k, G);
            J == null
              ? $(ls)
              : Vu(J)
                ? J.then(
                    function (fe) {
                      $(fe || ls);
                    },
                    function (fe) {
                      B(fe);
                    },
                  )
                : $(J);
          });
        },
        [f.validate],
      ),
      Z = N.useCallback(
        function (k, G) {
          var $ = f.validationSchema,
            B = Cr($) ? $(G) : $,
            J = G && B.validateAt ? B.validateAt(G, k) : OS(k, B);
          return new Promise(function (fe, Re) {
            J.then(
              function () {
                fe(ls);
              },
              function (kt) {
                kt.name === "ValidationError" ? fe(kS(kt)) : Re(kt);
              },
            );
          });
        },
        [f.validationSchema],
      ),
      K = N.useCallback(function (k, G) {
        return new Promise(function ($) {
          return $(h.current[k].validate(G));
        });
      }, []),
      X = N.useCallback(
        function (k) {
          var G = Object.keys(h.current).filter(function (B) {
              return Cr(h.current[B].validate);
            }),
            $ =
              G.length > 0
                ? G.map(function (B) {
                    return K(B, $t(k, B));
                  })
                : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
          return Promise.all($).then(function (B) {
            return B.reduce(function (J, fe, Re) {
              return (
                fe === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" ||
                  (fe && (J = Ls(J, G[Re], fe))),
                J
              );
            }, {});
          });
        },
        [K],
      ),
      ne = N.useCallback(
        function (k) {
          return Promise.all([
            X(k),
            f.validationSchema ? Z(k) : {},
            f.validate ? j(k) : {},
          ]).then(function (G) {
            var $ = G[0],
              B = G[1],
              J = G[2],
              fe = O2.all([$, B, J], { arrayMerge: AS });
            return fe;
          });
        },
        [f.validate, f.validationSchema, X, j, Z],
      ),
      Ce = sr(function (k) {
        return (
          k === void 0 && (k = L.values),
          A({ type: "SET_ISVALIDATING", payload: !0 }),
          ne(k).then(function (G) {
            return (
              g.current &&
                (A({ type: "SET_ISVALIDATING", payload: !1 }),
                A({ type: "SET_ERRORS", payload: G })),
              G
            );
          })
        );
      });
    N.useEffect(
      function () {
        i &&
          g.current === !0 &&
          ds(y.current, f.initialValues) &&
          Ce(y.current);
      },
      [i, Ce],
    );
    var Fe = N.useCallback(
      function (k) {
        var G = k && k.values ? k.values : y.current,
          $ =
            k && k.errors
              ? k.errors
              : b.current
                ? b.current
                : f.initialErrors || {},
          B =
            k && k.touched
              ? k.touched
              : T.current
                ? T.current
                : f.initialTouched || {},
          J =
            k && k.status ? k.status : _.current ? _.current : f.initialStatus;
        (y.current = G), (b.current = $), (T.current = B), (_.current = J);
        var fe = function () {
          A({
            type: "RESET_FORM",
            payload: {
              isSubmitting: !!k && !!k.isSubmitting,
              errors: $,
              touched: B,
              status: J,
              values: G,
              isValidating: !!k && !!k.isValidating,
              submitCount:
                k && k.submitCount && typeof k.submitCount == "number"
                  ? k.submitCount
                  : 0,
            },
          });
        };
        if (f.onReset) {
          var Re = f.onReset(L.values, Cn);
          Vu(Re) ? Re.then(fe) : fe();
        } else fe();
      },
      [f.initialErrors, f.initialStatus, f.initialTouched, f.onReset],
    );
    N.useEffect(
      function () {
        g.current === !0 &&
          !ds(y.current, f.initialValues) &&
          c &&
          ((y.current = f.initialValues), Fe(), i && Ce(y.current));
      },
      [c, f.initialValues, Fe, i, Ce],
    ),
      N.useEffect(
        function () {
          c &&
            g.current === !0 &&
            !ds(b.current, f.initialErrors) &&
            ((b.current = f.initialErrors || ls),
            A({ type: "SET_ERRORS", payload: f.initialErrors || ls }));
        },
        [c, f.initialErrors],
      ),
      N.useEffect(
        function () {
          c &&
            g.current === !0 &&
            !ds(T.current, f.initialTouched) &&
            ((T.current = f.initialTouched || cl),
            A({ type: "SET_TOUCHED", payload: f.initialTouched || cl }));
        },
        [c, f.initialTouched],
      ),
      N.useEffect(
        function () {
          c &&
            g.current === !0 &&
            !ds(_.current, f.initialStatus) &&
            ((_.current = f.initialStatus),
            A({ type: "SET_STATUS", payload: f.initialStatus }));
        },
        [c, f.initialStatus, f.initialTouched],
      );
    var rr = sr(function (k) {
        if (h.current[k] && Cr(h.current[k].validate)) {
          var G = $t(L.values, k),
            $ = h.current[k].validate(G);
          return Vu($)
            ? (A({ type: "SET_ISVALIDATING", payload: !0 }),
              $.then(function (B) {
                return B;
              }).then(function (B) {
                A({ type: "SET_FIELD_ERROR", payload: { field: k, value: B } }),
                  A({ type: "SET_ISVALIDATING", payload: !1 });
              }))
            : (A({ type: "SET_FIELD_ERROR", payload: { field: k, value: $ } }),
              Promise.resolve($));
        } else if (f.validationSchema)
          return (
            A({ type: "SET_ISVALIDATING", payload: !0 }),
            Z(L.values, k)
              .then(function (B) {
                return B;
              })
              .then(function (B) {
                A({
                  type: "SET_FIELD_ERROR",
                  payload: { field: k, value: $t(B, k) },
                }),
                  A({ type: "SET_ISVALIDATING", payload: !1 });
              })
          );
        return Promise.resolve();
      }),
      St = N.useCallback(function (k, G) {
        var $ = G.validate;
        h.current[k] = { validate: $ };
      }, []),
      Ut = N.useCallback(function (k) {
        delete h.current[k];
      }, []),
      D = sr(function (k, G) {
        A({ type: "SET_TOUCHED", payload: k });
        var $ = G === void 0 ? s : G;
        return $ ? Ce(L.values) : Promise.resolve();
      }),
      te = N.useCallback(function (k) {
        A({ type: "SET_ERRORS", payload: k });
      }, []),
      re = sr(function (k, G) {
        var $ = Cr(k) ? k(L.values) : k;
        A({ type: "SET_VALUES", payload: $ });
        var B = G === void 0 ? r : G;
        return B ? Ce($) : Promise.resolve();
      }),
      Y = N.useCallback(function (k, G) {
        A({ type: "SET_FIELD_ERROR", payload: { field: k, value: G } });
      }, []),
      ve = sr(function (k, G, $) {
        A({ type: "SET_FIELD_VALUE", payload: { field: k, value: G } });
        var B = $ === void 0 ? r : $;
        return B ? Ce(Ls(L.values, k, G)) : Promise.resolve();
      }),
      we = N.useCallback(
        function (k, G) {
          var $ = G,
            B = k,
            J;
          if (!Hu(k)) {
            k.persist && k.persist();
            var fe = k.target ? k.target : k.currentTarget,
              Re = fe.type,
              kt = fe.name,
              H = fe.id,
              x = fe.value,
              m = fe.checked,
              S = fe.outerHTML,
              O = fe.options,
              R = fe.multiple;
            ($ = G || kt || H),
              (B = /number|range/.test(Re)
                ? ((J = parseFloat(x)), isNaN(J) ? "" : J)
                : /checkbox/.test(Re)
                  ? LS($t(L.values, $), m, x)
                  : O && R
                    ? PS(O)
                    : x);
          }
          $ && ve($, B);
        },
        [ve, L.values],
      ),
      tt = sr(function (k) {
        if (Hu(k))
          return function (G) {
            return we(G, k);
          };
        we(k);
      }),
      de = sr(function (k, G, $) {
        G === void 0 && (G = !0),
          A({ type: "SET_FIELD_TOUCHED", payload: { field: k, value: G } });
        var B = $ === void 0 ? s : $;
        return B ? Ce(L.values) : Promise.resolve();
      }),
      Be = N.useCallback(
        function (k, G) {
          k.persist && k.persist();
          var $ = k.target,
            B = $.name,
            J = $.id,
            fe = $.outerHTML,
            Re = G || B || J;
          de(Re, !0);
        },
        [de],
      ),
      gt = sr(function (k) {
        if (Hu(k))
          return function (G) {
            return Be(G, k);
          };
        Be(k);
      }),
      Ar = N.useCallback(function (k) {
        Cr(k)
          ? A({ type: "SET_FORMIK_STATE", payload: k })
          : A({
              type: "SET_FORMIK_STATE",
              payload: function () {
                return k;
              },
            });
      }, []),
      vn = N.useCallback(function (k) {
        A({ type: "SET_STATUS", payload: k });
      }, []),
      yn = N.useCallback(function (k) {
        A({ type: "SET_ISSUBMITTING", payload: k });
      }, []),
      Kr = sr(function () {
        return (
          A({ type: "SUBMIT_ATTEMPT" }),
          Ce().then(function (k) {
            var G = k instanceof Error,
              $ = !G && Object.keys(k).length === 0;
            if ($) {
              var B;
              try {
                if (((B = gr()), B === void 0)) return;
              } catch (J) {
                throw J;
              }
              return Promise.resolve(B)
                .then(function (J) {
                  return g.current && A({ type: "SUBMIT_SUCCESS" }), J;
                })
                .catch(function (J) {
                  if (g.current) throw (A({ type: "SUBMIT_FAILURE" }), J);
                });
            } else if (g.current && (A({ type: "SUBMIT_FAILURE" }), G)) throw k;
          })
        );
      }),
      mr = sr(function (k) {
        k && k.preventDefault && Cr(k.preventDefault) && k.preventDefault(),
          k &&
            k.stopPropagation &&
            Cr(k.stopPropagation) &&
            k.stopPropagation(),
          Kr().catch(function (G) {
            console.warn(
              "Warning: An unhandled error was caught from submitForm()",
              G,
            );
          });
      }),
      Cn = {
        resetForm: Fe,
        validateForm: Ce,
        validateField: rr,
        setErrors: te,
        setFieldError: Y,
        setFieldTouched: de,
        setFieldValue: ve,
        setStatus: vn,
        setSubmitting: yn,
        setTouched: D,
        setValues: re,
        setFormikState: Ar,
        submitForm: Kr,
      },
      gr = sr(function () {
        return d(L.values, Cn);
      }),
      os = sr(function (k) {
        k && k.preventDefault && Cr(k.preventDefault) && k.preventDefault(),
          k &&
            k.stopPropagation &&
            Cr(k.stopPropagation) &&
            k.stopPropagation(),
          Fe();
      }),
      wn = N.useCallback(
        function (k) {
          return {
            value: $t(L.values, k),
            error: $t(L.errors, k),
            touched: !!$t(L.touched, k),
            initialValue: $t(y.current, k),
            initialTouched: !!$t(T.current, k),
            initialError: $t(b.current, k),
          };
        },
        [L.errors, L.touched, L.values],
      ),
      vr = N.useCallback(
        function (k) {
          return {
            setValue: function ($, B) {
              return ve(k, $, B);
            },
            setTouched: function ($, B) {
              return de(k, $, B);
            },
            setError: function ($) {
              return Y(k, $);
            },
          };
        },
        [ve, de, Y],
      ),
      Pr = N.useCallback(
        function (k) {
          var G = K1(k),
            $ = G ? k.name : k,
            B = $t(L.values, $),
            J = { name: $, value: B, onChange: tt, onBlur: gt };
          if (G) {
            var fe = k.type,
              Re = k.value,
              kt = k.as,
              H = k.multiple;
            fe === "checkbox"
              ? Re === void 0
                ? (J.checked = !!B)
                : ((J.checked = !!(Array.isArray(B) && ~B.indexOf(Re))),
                  (J.value = Re))
              : fe === "radio"
                ? ((J.checked = B === Re), (J.value = Re))
                : kt === "select" &&
                  H &&
                  ((J.value = J.value || []), (J.multiple = !0));
          }
          return J;
        },
        [gt, tt, L.values],
      ),
      nr = N.useMemo(
        function () {
          return !ds(y.current, L.values);
        },
        [y.current, L.values],
      ),
      is = N.useMemo(
        function () {
          return typeof a < "u"
            ? nr
              ? L.errors && Object.keys(L.errors).length === 0
              : a !== !1 && Cr(a)
                ? a(f)
                : a
            : L.errors && Object.keys(L.errors).length === 0;
        },
        [a, nr, L.errors, f],
      ),
      En = Ye({}, L, {
        initialValues: y.current,
        initialErrors: b.current,
        initialTouched: T.current,
        initialStatus: _.current,
        handleBlur: gt,
        handleChange: tt,
        handleReset: os,
        handleSubmit: mr,
        resetForm: Fe,
        setErrors: te,
        setFormikState: Ar,
        setFieldTouched: de,
        setFieldValue: ve,
        setFieldError: Y,
        setStatus: vn,
        setSubmitting: yn,
        setTouched: D,
        setValues: re,
        submitForm: Kr,
        validateForm: Ce,
        validateField: rr,
        isValid: is,
        dirty: nr,
        unregisterField: Ut,
        registerField: St,
        getFieldProps: Pr,
        getFieldMeta: wn,
        getFieldHelpers: vr,
        validateOnBlur: s,
        validateOnChange: r,
        validateOnMount: i,
      });
    return En;
  }
  function kS(e) {
    var t = {};
    if (e.inner) {
      if (e.inner.length === 0) return Ls(t, e.path, e.message);
      for (
        var s = e.inner,
          r = Array.isArray(s),
          n = 0,
          s = r ? s : s[Symbol.iterator]();
        ;

      ) {
        var o;
        if (r) {
          if (n >= s.length) break;
          o = s[n++];
        } else {
          if (((n = s.next()), n.done)) break;
          o = n.value;
        }
        var i = o;
        $t(t, i.path) || (t = Ls(t, i.path, i.message));
      }
    }
    return t;
  }
  function OS(e, t, r, n) {
    r === void 0 && (r = !1);
    var s = N2(e);
    return t[r ? "validateSync" : "validate"](s, {
      abortEarly: !1,
      context: s,
    });
  }
  function N2(e) {
    var t = Array.isArray(e) ? [] : {};
    for (var r in e)
      if (Object.prototype.hasOwnProperty.call(e, r)) {
        var n = String(r);
        Array.isArray(e[n]) === !0
          ? (t[n] = e[n].map(function (s) {
              return Array.isArray(s) === !0 || r8(s)
                ? N2(s)
                : s !== ""
                  ? s
                  : void 0;
            }))
          : r8(e[n])
            ? (t[n] = N2(e[n]))
            : (t[n] = e[n] !== "" ? e[n] : void 0);
      }
    return t;
  }
  function AS(e, t, r) {
    var n = e.slice();
    return (
      t.forEach(function (o, i) {
        if (typeof n[i] > "u") {
          var a = r.clone !== !1,
            l = a && r.isMergeableObject(o);
          n[i] = l ? O2(Array.isArray(o) ? [] : {}, o, r) : o;
        } else
          r.isMergeableObject(o)
            ? (n[i] = O2(e[i], o, r))
            : e.indexOf(o) === -1 && n.push(o);
      }),
      n
    );
  }
  function PS(e) {
    return Array.from(e)
      .filter(function (t) {
        return t.selected;
      })
      .map(function (t) {
        return t.value;
      });
  }
  function LS(e, t, r) {
    if (typeof e == "boolean") return !!t;
    var n = [],
      s = !1,
      o = -1;
    if (Array.isArray(e)) (n = e), (o = e.indexOf(r)), (s = o >= 0);
    else if (!r || r == "true" || r == "false") return !!t;
    return t && r && !s
      ? n.concat(r)
      : s
        ? n.slice(0, o).concat(n.slice(o + 1))
        : n;
  }
  var RS =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u"
      ? N.useLayoutEffect
      : N.useEffect;
  function sr(e) {
    var t = N.useRef(e);
    return (
      RS(function () {
        t.current = e;
      }),
      N.useCallback(function () {
        for (var r = arguments.length, n = new Array(r), s = 0; s < r; s++)
          n[s] = arguments[s];
        return t.current.apply(void 0, n);
      }, [])
    );
  }
  var jS = N.forwardRef(function (e, t) {
    var r = e.action,
      n = L9(e, ["action"]),
      s = r ?? "#",
      o = TS(),
      i = o.handleReset,
      a = o.handleSubmit;
    return N.createElement(
      "form",
      Ye({ onSubmit: a, ref: t, onReset: i, action: s }, n),
    );
  });
  jS.displayName = "Form";
  const Pl = {
      selectedProject: null,
      setSelectedProject() {},
      search: "",
      setSearch() {},
      categories: [],
      addCategory() {},
      deleteCategory() {},
      isCategorySelected() {
        return !1;
      },
      page: 1,
      setPage() {},
    },
    Ks = N.createContext(Pl);
  function NS({ children: e }) {
    const [t, r] = N.useState(Pl.selectedProject),
      [n, s] = N.useState(Pl.search),
      [o, i] = N.useState(Pl.categories),
      [a, l] = N.useState(1),
      c = (f) => {
        i([...o, f]);
      },
      d = (f) => {
        const y = [...o];
        y.splice(
          y.findIndex((b) => b.id === f),
          1,
        ),
          i(y);
      },
      p = (f) => o.findIndex((y) => y.id === f) !== -1;
    return u.jsx(Ks.Provider, {
      value: {
        selectedProject: t,
        setSelectedProject: r,
        search: n,
        setSearch: s,
        categories: o,
        addCategory: c,
        deleteCategory: d,
        isCategorySelected: p,
        page: a,
        setPage: l,
      },
      children: e,
    });
  }
  function FS({ className: e, category: t, ...r }) {
    const {
        isCategorySelected: n,
        addCategory: s,
        deleteCategory: o,
      } = N.useContext(Ks),
      i = () => {
        n(t.id) ? o(t.id) : s(t);
      };
    return u.jsx(it, {
      type: "button",
      active: n(t.id),
      variant: n(t.id) ? "primary" : "edge-100",
      onClick: i,
      className: U(e),
      ...r,
      children: u.jsxs(st, {
        className: "min-h-[2rem] px-[0.5rem]",
        children: [
          n(t.id)
            ? u.jsx(Lt, {
                className: "mr-[0.5rem]",
                children: u.jsx(Ee, { icon: wg }),
              })
            : null,
          u.jsx(Ia, { className: "m-0", children: t.name }),
          u.jsx(ot, {}),
        ],
      }),
    });
  }
  const IS = X4({ search: K4() });
  function MS({ className: e, categories: t, ...r }) {
    const { setSearch: n } = N.useContext(Ks),
      [s, o] = N.useState(!1),
      {
        values: i,
        handleChange: a,
        handleSubmit: l,
      } = SS({
        initialValues: { search: "" },
        validationSchema: IS,
        onSubmit(c) {
          n(c.search);
        },
      });
    return u.jsxs("form", {
      onSubmit: l,
      className: U("flex flex-col", e),
      ...r,
      children: [
        u.jsxs("div", {
          className:
            "flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2",
          children: [
            u.jsxs(gE, {
              className: "mb-0 flex-1",
              variant: "edge-100",
              children: [
                u.jsx(hE, { children: "Search" }),
                u.jsxs(lE, {
                  children: [
                    u.jsx(fE, { children: u.jsx(Ee, { icon: Lg }) }),
                    u.jsx(cE, {
                      placeholder: "Search",
                      name: "search",
                      value: i.search,
                      onChange: a,
                    }),
                  ],
                }),
              ],
            }),
            u.jsx(it, {
              type: "button",
              active: s,
              onClick: () => o(!s),
              children: u.jsxs(st, {
                children: [
                  u.jsx(Lt, {
                    children: u.jsx(Ee, {
                      className: U("duration-300", s && "rotate-180"),
                      icon: kg,
                    }),
                  }),
                  u.jsx(Ia, { children: "Categories" }),
                  u.jsx(ot, {}),
                ],
              }),
            }),
          ],
        }),
        u.jsx("div", {
          className: U("hidden mt-[1.5rem] flex-wrap gap-3", s && "flex "),
          children:
            t == null ? void 0 : t.map((c) => u.jsx(FS, { category: c }, c.id)),
        }),
      ],
    });
  }
  function DS({ className: e, project: t, ...r }) {
    const n = N.useRef(null),
      { selectedProject: s, setSelectedProject: o } = N.useContext(Ks),
      i = () => {
        (s == null ? void 0 : s.id) !== t.id && o(t);
      };
    return u.jsx("div", {
      ref: n,
      onClick: i,
      className: U(
        "flex w-full cursor-pointer md:w-[48%] mb-[1rem] border bg-edge-100 border-edge-100 duration-300",
        e,
      ),
      ...r,
      children: u.jsxs("div", {
        className:
          "flex flex-col justify-between w-full space-y-3 border border-edge-100 duration-150 bg-base-100 hover:translate-x-[0.5rem] hover:translate-y-[-0.5em]",
        children: [
          u.jsx("div", {
            className:
              "flex bg-base-100 justify-between items-center p-[0.7rem]",
            children: u.jsxs("div", {
              className: "flex space-x-3 justify-start items-start",
              children: [
                u.jsx("div", {
                  className: "flex border border-edge-100",
                  children: u.jsx("div", {
                    className:
                      "flex border border-edge-100 bg-base-100 p-[0.5rem] translate-x-[0.3rem] translate-y-[-0.3em]",
                    children: u.jsx("img", {
                      className:
                        "min-h-[3.5rem] min-w-[3.5rem] max-h-[3.5rem] max-w-[3.5rem]",
                      src: t.icon,
                      alt: "icon",
                    }),
                  }),
                }),
                u.jsxs("div", {
                  className: "flex flex-col text-edge-100",
                  children: [
                    u.jsx(Nt, {
                      children: u.jsx(jt, {
                        className: "pl-[0.3rem]",
                        children: t.display_name,
                      }),
                    }),
                    u.jsx("div", {
                      className: "flex text-[10pt] opacity-70",
                      children: t.description,
                    }),
                  ],
                }),
              ],
            }),
          }),
          u.jsx("div", {
            className: "flex p-[0.7rem] overflow-hidden w-full",
            children: u.jsx("img", {
              className:
                "h-full w-full overflow-hidden border border-edge-100 object-cover object-top",
              src: t.thumbnail,
              alt: "thumbnail",
            }),
          }),
        ],
      }),
    });
  }
  function GS({ className: e, count: t, ...r }) {
    const { page: n, setPage: s } = N.useContext(Ks),
      o = () => {
        const i = [];
        for (let a = 1; a <= Math.ceil(t / 10); a++)
          i.push(
            u.jsx(
              it,
              {
                onClick: () => s(a),
                active: a === n,
                variant: a === n ? "primary" : "edge-100",
                children: u.jsxs(st, {
                  children: [
                    u.jsx(Ia, { className: "m-0", children: a }),
                    u.jsx(ot, {}),
                  ],
                }),
              },
              a,
            ),
          );
        return i;
      };
    return u.jsx("div", {
      className: U("flex w-full justify-center", e),
      ...r,
      children: u.jsx("div", { className: "flex space-x-2", children: o() }),
    });
  }
  const US = {
    prefix: "fab",
    iconName: "github",
    icon: [
      496,
      512,
      [],
      "f09b",
      "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
    ],
  };
  /*! @license DOMPurify 3.1.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.6/LICENSE */ const {
    entries: j9,
    setPrototypeOf: A8,
    isFrozen: $S,
    getPrototypeOf: HS,
    getOwnPropertyDescriptor: VS,
  } = Object;
  let { freeze: Tt, seal: hr, create: N9 } = Object,
    { apply: F2, construct: I2 } = typeof Reflect < "u" && Reflect;
  Tt ||
    (Tt = function (t) {
      return t;
    });
  hr ||
    (hr = function (t) {
      return t;
    });
  F2 ||
    (F2 = function (t, r, n) {
      return t.apply(r, n);
    });
  I2 ||
    (I2 = function (t, r) {
      return new t(...r);
    });
  const dl = Yt(Array.prototype.forEach),
    P8 = Yt(Array.prototype.pop),
    wi = Yt(Array.prototype.push),
    Ll = Yt(String.prototype.toLowerCase),
    zu = Yt(String.prototype.toString),
    L8 = Yt(String.prototype.match),
    Ei = Yt(String.prototype.replace),
    zS = Yt(String.prototype.indexOf),
    BS = Yt(String.prototype.trim),
    wr = Yt(Object.prototype.hasOwnProperty),
    yt = Yt(RegExp.prototype.test),
    bi = WS(TypeError);
  function Yt(e) {
    return function (t) {
      for (
        var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), s = 1;
        s < r;
        s++
      )
        n[s - 1] = arguments[s];
      return F2(e, t, n);
    };
  }
  function WS(e) {
    return function () {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      return I2(e, r);
    };
  }
  function le(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ll;
    A8 && A8(e, null);
    let n = t.length;
    for (; n--; ) {
      let s = t[n];
      if (typeof s == "string") {
        const o = r(s);
        o !== s && ($S(t) || (t[n] = o), (s = o));
      }
      e[s] = !0;
    }
    return e;
  }
  function qS(e) {
    for (let t = 0; t < e.length; t++) wr(e, t) || (e[t] = null);
    return e;
  }
  function fs(e) {
    const t = N9(null);
    for (const [r, n] of j9(e))
      wr(e, r) &&
        (Array.isArray(n)
          ? (t[r] = qS(n))
          : n && typeof n == "object" && n.constructor === Object
            ? (t[r] = fs(n))
            : (t[r] = n));
    return t;
  }
  function Ti(e, t) {
    for (; e !== null; ) {
      const n = VS(e, t);
      if (n) {
        if (n.get) return Yt(n.get);
        if (typeof n.value == "function") return Yt(n.value);
      }
      e = HS(e);
    }
    function r() {
      return null;
    }
    return r;
  }
  const R8 = Tt([
      "a",
      "abbr",
      "acronym",
      "address",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "bdi",
      "bdo",
      "big",
      "blink",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "center",
      "cite",
      "code",
      "col",
      "colgroup",
      "content",
      "data",
      "datalist",
      "dd",
      "decorator",
      "del",
      "details",
      "dfn",
      "dialog",
      "dir",
      "div",
      "dl",
      "dt",
      "element",
      "em",
      "fieldset",
      "figcaption",
      "figure",
      "font",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "html",
      "i",
      "img",
      "input",
      "ins",
      "kbd",
      "label",
      "legend",
      "li",
      "main",
      "map",
      "mark",
      "marquee",
      "menu",
      "menuitem",
      "meter",
      "nav",
      "nobr",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "picture",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "section",
      "select",
      "shadow",
      "small",
      "source",
      "spacer",
      "span",
      "strike",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "template",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "tr",
      "track",
      "tt",
      "u",
      "ul",
      "var",
      "video",
      "wbr",
    ]),
    Bu = Tt([
      "svg",
      "a",
      "altglyph",
      "altglyphdef",
      "altglyphitem",
      "animatecolor",
      "animatemotion",
      "animatetransform",
      "circle",
      "clippath",
      "defs",
      "desc",
      "ellipse",
      "filter",
      "font",
      "g",
      "glyph",
      "glyphref",
      "hkern",
      "image",
      "line",
      "lineargradient",
      "marker",
      "mask",
      "metadata",
      "mpath",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialgradient",
      "rect",
      "stop",
      "style",
      "switch",
      "symbol",
      "text",
      "textpath",
      "title",
      "tref",
      "tspan",
      "view",
      "vkern",
    ]),
    Wu = Tt([
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feDropShadow",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
    ]),
    ZS = Tt([
      "animate",
      "color-profile",
      "cursor",
      "discard",
      "font-face",
      "font-face-format",
      "font-face-name",
      "font-face-src",
      "font-face-uri",
      "foreignobject",
      "hatch",
      "hatchpath",
      "mesh",
      "meshgradient",
      "meshpatch",
      "meshrow",
      "missing-glyph",
      "script",
      "set",
      "solidcolor",
      "unknown",
      "use",
    ]),
    qu = Tt([
      "math",
      "menclose",
      "merror",
      "mfenced",
      "mfrac",
      "mglyph",
      "mi",
      "mlabeledtr",
      "mmultiscripts",
      "mn",
      "mo",
      "mover",
      "mpadded",
      "mphantom",
      "mroot",
      "mrow",
      "ms",
      "mspace",
      "msqrt",
      "mstyle",
      "msub",
      "msup",
      "msubsup",
      "mtable",
      "mtd",
      "mtext",
      "mtr",
      "munder",
      "munderover",
      "mprescripts",
    ]),
    KS = Tt([
      "maction",
      "maligngroup",
      "malignmark",
      "mlongdiv",
      "mscarries",
      "mscarry",
      "msgroup",
      "mstack",
      "msline",
      "msrow",
      "semantics",
      "annotation",
      "annotation-xml",
      "mprescripts",
      "none",
    ]),
    j8 = Tt(["#text"]),
    N8 = Tt([
      "accept",
      "action",
      "align",
      "alt",
      "autocapitalize",
      "autocomplete",
      "autopictureinpicture",
      "autoplay",
      "background",
      "bgcolor",
      "border",
      "capture",
      "cellpadding",
      "cellspacing",
      "checked",
      "cite",
      "class",
      "clear",
      "color",
      "cols",
      "colspan",
      "controls",
      "controlslist",
      "coords",
      "crossorigin",
      "datetime",
      "decoding",
      "default",
      "dir",
      "disabled",
      "disablepictureinpicture",
      "disableremoteplayback",
      "download",
      "draggable",
      "enctype",
      "enterkeyhint",
      "face",
      "for",
      "headers",
      "height",
      "hidden",
      "high",
      "href",
      "hreflang",
      "id",
      "inputmode",
      "integrity",
      "ismap",
      "kind",
      "label",
      "lang",
      "list",
      "loading",
      "loop",
      "low",
      "max",
      "maxlength",
      "media",
      "method",
      "min",
      "minlength",
      "multiple",
      "muted",
      "name",
      "nonce",
      "noshade",
      "novalidate",
      "nowrap",
      "open",
      "optimum",
      "pattern",
      "placeholder",
      "playsinline",
      "popover",
      "popovertarget",
      "popovertargetaction",
      "poster",
      "preload",
      "pubdate",
      "radiogroup",
      "readonly",
      "rel",
      "required",
      "rev",
      "reversed",
      "role",
      "rows",
      "rowspan",
      "spellcheck",
      "scope",
      "selected",
      "shape",
      "size",
      "sizes",
      "span",
      "srclang",
      "start",
      "src",
      "srcset",
      "step",
      "style",
      "summary",
      "tabindex",
      "title",
      "translate",
      "type",
      "usemap",
      "valign",
      "value",
      "width",
      "wrap",
      "xmlns",
      "slot",
    ]),
    Zu = Tt([
      "accent-height",
      "accumulate",
      "additive",
      "alignment-baseline",
      "ascent",
      "attributename",
      "attributetype",
      "azimuth",
      "basefrequency",
      "baseline-shift",
      "begin",
      "bias",
      "by",
      "class",
      "clip",
      "clippathunits",
      "clip-path",
      "clip-rule",
      "color",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "cx",
      "cy",
      "d",
      "dx",
      "dy",
      "diffuseconstant",
      "direction",
      "display",
      "divisor",
      "dur",
      "edgemode",
      "elevation",
      "end",
      "fill",
      "fill-opacity",
      "fill-rule",
      "filter",
      "filterunits",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "fx",
      "fy",
      "g1",
      "g2",
      "glyph-name",
      "glyphref",
      "gradientunits",
      "gradienttransform",
      "height",
      "href",
      "id",
      "image-rendering",
      "in",
      "in2",
      "k",
      "k1",
      "k2",
      "k3",
      "k4",
      "kerning",
      "keypoints",
      "keysplines",
      "keytimes",
      "lang",
      "lengthadjust",
      "letter-spacing",
      "kernelmatrix",
      "kernelunitlength",
      "lighting-color",
      "local",
      "marker-end",
      "marker-mid",
      "marker-start",
      "markerheight",
      "markerunits",
      "markerwidth",
      "maskcontentunits",
      "maskunits",
      "max",
      "mask",
      "media",
      "method",
      "mode",
      "min",
      "name",
      "numoctaves",
      "offset",
      "operator",
      "opacity",
      "order",
      "orient",
      "orientation",
      "origin",
      "overflow",
      "paint-order",
      "path",
      "pathlength",
      "patterncontentunits",
      "patterntransform",
      "patternunits",
      "points",
      "preservealpha",
      "preserveaspectratio",
      "primitiveunits",
      "r",
      "rx",
      "ry",
      "radius",
      "refx",
      "refy",
      "repeatcount",
      "repeatdur",
      "restart",
      "result",
      "rotate",
      "scale",
      "seed",
      "shape-rendering",
      "specularconstant",
      "specularexponent",
      "spreadmethod",
      "startoffset",
      "stddeviation",
      "stitchtiles",
      "stop-color",
      "stop-opacity",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke",
      "stroke-width",
      "style",
      "surfacescale",
      "systemlanguage",
      "tabindex",
      "targetx",
      "targety",
      "transform",
      "transform-origin",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "textlength",
      "type",
      "u1",
      "u2",
      "unicode",
      "values",
      "viewbox",
      "visibility",
      "version",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "width",
      "word-spacing",
      "wrap",
      "writing-mode",
      "xchannelselector",
      "ychannelselector",
      "x",
      "x1",
      "x2",
      "xmlns",
      "y",
      "y1",
      "y2",
      "z",
      "zoomandpan",
    ]),
    F8 = Tt([
      "accent",
      "accentunder",
      "align",
      "bevelled",
      "close",
      "columnsalign",
      "columnlines",
      "columnspan",
      "denomalign",
      "depth",
      "dir",
      "display",
      "displaystyle",
      "encoding",
      "fence",
      "frame",
      "height",
      "href",
      "id",
      "largeop",
      "length",
      "linethickness",
      "lspace",
      "lquote",
      "mathbackground",
      "mathcolor",
      "mathsize",
      "mathvariant",
      "maxsize",
      "minsize",
      "movablelimits",
      "notation",
      "numalign",
      "open",
      "rowalign",
      "rowlines",
      "rowspacing",
      "rowspan",
      "rspace",
      "rquote",
      "scriptlevel",
      "scriptminsize",
      "scriptsizemultiplier",
      "selection",
      "separator",
      "separators",
      "stretchy",
      "subscriptshift",
      "supscriptshift",
      "symmetric",
      "voffset",
      "width",
      "xmlns",
    ]),
    fl = Tt([
      "xlink:href",
      "xml:id",
      "xlink:title",
      "xml:space",
      "xmlns:xlink",
    ]),
    QS = hr(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
    YS = hr(/<%[\w\W]*|[\w\W]*%>/gm),
    XS = hr(/\${[\w\W]*}/gm),
    JS = hr(/^data-[\-\w.\u00B7-\uFFFF]/),
    ek = hr(/^aria-[\-\w]+$/),
    F9 = hr(
      /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
    ),
    tk = hr(/^(?:\w+script|data):/i),
    rk = hr(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
    I9 = hr(/^html$/i),
    nk = hr(/^[a-z][.\w]*(-[.\w]+)+$/i);
  var I8 = Object.freeze({
    __proto__: null,
    MUSTACHE_EXPR: QS,
    ERB_EXPR: YS,
    TMPLIT_EXPR: XS,
    DATA_ATTR: JS,
    ARIA_ATTR: ek,
    IS_ALLOWED_URI: F9,
    IS_SCRIPT_OR_DATA: tk,
    ATTR_WHITESPACE: rk,
    DOCTYPE_NAME: I9,
    CUSTOM_ELEMENT: nk,
  });
  const xi = {
      element: 1,
      attribute: 2,
      text: 3,
      cdataSection: 4,
      entityReference: 5,
      entityNode: 6,
      progressingInstruction: 7,
      comment: 8,
      document: 9,
      documentType: 10,
      documentFragment: 11,
      notation: 12,
    },
    sk = function () {
      return typeof window > "u" ? null : window;
    },
    ok = function (t, r) {
      if (typeof t != "object" || typeof t.createPolicy != "function")
        return null;
      let n = null;
      const s = "data-tt-policy-suffix";
      r && r.hasAttribute(s) && (n = r.getAttribute(s));
      const o = "dompurify" + (n ? "#" + n : "");
      try {
        return t.createPolicy(o, {
          createHTML(i) {
            return i;
          },
          createScriptURL(i) {
            return i;
          },
        });
      } catch {
        return (
          console.warn("TrustedTypes policy " + o + " could not be created."),
          null
        );
      }
    };
  function M9() {
    let e =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : sk();
    const t = (ee) => M9(ee);
    if (
      ((t.version = "3.1.6"),
      (t.removed = []),
      !e || !e.document || e.document.nodeType !== xi.document)
    )
      return (t.isSupported = !1), t;
    let { document: r } = e;
    const n = r,
      s = n.currentScript,
      {
        DocumentFragment: o,
        HTMLTemplateElement: i,
        Node: a,
        Element: l,
        NodeFilter: c,
        NamedNodeMap: d = e.NamedNodeMap || e.MozNamedAttrMap,
        HTMLFormElement: p,
        DOMParser: f,
        trustedTypes: y,
      } = e,
      b = l.prototype,
      T = Ti(b, "cloneNode"),
      _ = Ti(b, "remove"),
      g = Ti(b, "nextSibling"),
      h = Ti(b, "childNodes"),
      v = Ti(b, "parentNode");
    if (typeof i == "function") {
      const ee = r.createElement("template");
      ee.content && ee.content.ownerDocument && (r = ee.content.ownerDocument);
    }
    let E,
      P = "";
    const {
        implementation: L,
        createNodeIterator: A,
        createDocumentFragment: j,
        getElementsByTagName: Z,
      } = r,
      { importNode: K } = n;
    let X = {};
    t.isSupported =
      typeof j9 == "function" &&
      typeof v == "function" &&
      L &&
      L.createHTMLDocument !== void 0;
    const {
      MUSTACHE_EXPR: ne,
      ERB_EXPR: Ce,
      TMPLIT_EXPR: Fe,
      DATA_ATTR: rr,
      ARIA_ATTR: St,
      IS_SCRIPT_OR_DATA: Ut,
      ATTR_WHITESPACE: D,
      CUSTOM_ELEMENT: te,
    } = I8;
    let { IS_ALLOWED_URI: re } = I8,
      Y = null;
    const ve = le({}, [...R8, ...Bu, ...Wu, ...qu, ...j8]);
    let we = null;
    const tt = le({}, [...N8, ...Zu, ...F8, ...fl]);
    let de = Object.seal(
        N9(null, {
          tagNameCheck: {
            writable: !0,
            configurable: !1,
            enumerable: !0,
            value: null,
          },
          attributeNameCheck: {
            writable: !0,
            configurable: !1,
            enumerable: !0,
            value: null,
          },
          allowCustomizedBuiltInElements: {
            writable: !0,
            configurable: !1,
            enumerable: !0,
            value: !1,
          },
        }),
      ),
      Be = null,
      gt = null,
      Ar = !0,
      vn = !0,
      yn = !1,
      Kr = !0,
      mr = !1,
      Cn = !0,
      gr = !1,
      os = !1,
      wn = !1,
      vr = !1,
      Pr = !1,
      nr = !1,
      is = !0,
      En = !1;
    const k = "user-content-";
    let G = !0,
      $ = !1,
      B = {},
      J = null;
    const fe = le({}, [
      "annotation-xml",
      "audio",
      "colgroup",
      "desc",
      "foreignobject",
      "head",
      "iframe",
      "math",
      "mi",
      "mn",
      "mo",
      "ms",
      "mtext",
      "noembed",
      "noframes",
      "noscript",
      "plaintext",
      "script",
      "style",
      "svg",
      "template",
      "thead",
      "title",
      "video",
      "xmp",
    ]);
    let Re = null;
    const kt = le({}, ["audio", "video", "img", "source", "image", "track"]);
    let H = null;
    const x = le({}, [
        "alt",
        "class",
        "for",
        "id",
        "label",
        "name",
        "pattern",
        "placeholder",
        "role",
        "summary",
        "title",
        "value",
        "style",
        "xmlns",
      ]),
      m = "http://www.w3.org/1998/Math/MathML",
      S = "http://www.w3.org/2000/svg",
      O = "http://www.w3.org/1999/xhtml";
    let R = O,
      I = !1,
      z = null;
    const ge = le({}, [m, S, O], zu);
    let Ie = null;
    const Ze = ["application/xhtml+xml", "text/html"],
      as = "text/html";
    let Ve = null,
      Qr = null;
    const G9 = r.createElement("form"),
      Cd = function (C) {
        return C instanceof RegExp || C instanceof Function;
      },
      Q1 = function () {
        let C =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (!(Qr && Qr === C)) {
          if (
            ((!C || typeof C != "object") && (C = {}),
            (C = fs(C)),
            (Ie =
              Ze.indexOf(C.PARSER_MEDIA_TYPE) === -1
                ? as
                : C.PARSER_MEDIA_TYPE),
            (Ve = Ie === "application/xhtml+xml" ? zu : Ll),
            (Y = wr(C, "ALLOWED_TAGS") ? le({}, C.ALLOWED_TAGS, Ve) : ve),
            (we = wr(C, "ALLOWED_ATTR") ? le({}, C.ALLOWED_ATTR, Ve) : tt),
            (z = wr(C, "ALLOWED_NAMESPACES")
              ? le({}, C.ALLOWED_NAMESPACES, zu)
              : ge),
            (H = wr(C, "ADD_URI_SAFE_ATTR")
              ? le(fs(x), C.ADD_URI_SAFE_ATTR, Ve)
              : x),
            (Re = wr(C, "ADD_DATA_URI_TAGS")
              ? le(fs(kt), C.ADD_DATA_URI_TAGS, Ve)
              : kt),
            (J = wr(C, "FORBID_CONTENTS") ? le({}, C.FORBID_CONTENTS, Ve) : fe),
            (Be = wr(C, "FORBID_TAGS") ? le({}, C.FORBID_TAGS, Ve) : {}),
            (gt = wr(C, "FORBID_ATTR") ? le({}, C.FORBID_ATTR, Ve) : {}),
            (B = wr(C, "USE_PROFILES") ? C.USE_PROFILES : !1),
            (Ar = C.ALLOW_ARIA_ATTR !== !1),
            (vn = C.ALLOW_DATA_ATTR !== !1),
            (yn = C.ALLOW_UNKNOWN_PROTOCOLS || !1),
            (Kr = C.ALLOW_SELF_CLOSE_IN_ATTR !== !1),
            (mr = C.SAFE_FOR_TEMPLATES || !1),
            (Cn = C.SAFE_FOR_XML !== !1),
            (gr = C.WHOLE_DOCUMENT || !1),
            (vr = C.RETURN_DOM || !1),
            (Pr = C.RETURN_DOM_FRAGMENT || !1),
            (nr = C.RETURN_TRUSTED_TYPE || !1),
            (wn = C.FORCE_BODY || !1),
            (is = C.SANITIZE_DOM !== !1),
            (En = C.SANITIZE_NAMED_PROPS || !1),
            (G = C.KEEP_CONTENT !== !1),
            ($ = C.IN_PLACE || !1),
            (re = C.ALLOWED_URI_REGEXP || F9),
            (R = C.NAMESPACE || O),
            (de = C.CUSTOM_ELEMENT_HANDLING || {}),
            C.CUSTOM_ELEMENT_HANDLING &&
              Cd(C.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
              (de.tagNameCheck = C.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
            C.CUSTOM_ELEMENT_HANDLING &&
              Cd(C.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
              (de.attributeNameCheck =
                C.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
            C.CUSTOM_ELEMENT_HANDLING &&
              typeof C.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements ==
                "boolean" &&
              (de.allowCustomizedBuiltInElements =
                C.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
            mr && (vn = !1),
            Pr && (vr = !0),
            B &&
              ((Y = le({}, j8)),
              (we = []),
              B.html === !0 && (le(Y, R8), le(we, N8)),
              B.svg === !0 && (le(Y, Bu), le(we, Zu), le(we, fl)),
              B.svgFilters === !0 && (le(Y, Wu), le(we, Zu), le(we, fl)),
              B.mathMl === !0 && (le(Y, qu), le(we, F8), le(we, fl))),
            C.ADD_TAGS && (Y === ve && (Y = fs(Y)), le(Y, C.ADD_TAGS, Ve)),
            C.ADD_ATTR && (we === tt && (we = fs(we)), le(we, C.ADD_ATTR, Ve)),
            C.ADD_URI_SAFE_ATTR && le(H, C.ADD_URI_SAFE_ATTR, Ve),
            C.FORBID_CONTENTS &&
              (J === fe && (J = fs(J)), le(J, C.FORBID_CONTENTS, Ve)),
            G && (Y["#text"] = !0),
            gr && le(Y, ["html", "head", "body"]),
            Y.table && (le(Y, ["tbody"]), delete Be.tbody),
            C.TRUSTED_TYPES_POLICY)
          ) {
            if (typeof C.TRUSTED_TYPES_POLICY.createHTML != "function")
              throw bi(
                'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.',
              );
            if (typeof C.TRUSTED_TYPES_POLICY.createScriptURL != "function")
              throw bi(
                'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.',
              );
            (E = C.TRUSTED_TYPES_POLICY), (P = E.createHTML(""));
          } else
            E === void 0 && (E = ok(y, s)),
              E !== null && typeof P == "string" && (P = E.createHTML(""));
          Tt && Tt(C), (Qr = C);
        }
      },
      wd = le({}, ["mi", "mo", "mn", "ms", "mtext"]),
      Ed = le({}, ["foreignobject", "annotation-xml"]),
      U9 = le({}, ["title", "style", "font", "a", "script"]),
      bd = le({}, [...Bu, ...Wu, ...ZS]),
      Td = le({}, [...qu, ...KS]),
      $9 = function (C) {
        let M = v(C);
        (!M || !M.tagName) && (M = { namespaceURI: R, tagName: "template" });
        const Q = Ll(C.tagName),
          xe = Ll(M.tagName);
        return z[C.namespaceURI]
          ? C.namespaceURI === S
            ? M.namespaceURI === O
              ? Q === "svg"
              : M.namespaceURI === m
                ? Q === "svg" && (xe === "annotation-xml" || wd[xe])
                : !!bd[Q]
            : C.namespaceURI === m
              ? M.namespaceURI === O
                ? Q === "math"
                : M.namespaceURI === S
                  ? Q === "math" && Ed[xe]
                  : !!Td[Q]
              : C.namespaceURI === O
                ? (M.namespaceURI === S && !Ed[xe]) ||
                  (M.namespaceURI === m && !wd[xe])
                  ? !1
                  : !Td[Q] && (U9[Q] || !bd[Q])
                : !!(Ie === "application/xhtml+xml" && z[C.namespaceURI])
          : !1;
      },
      Lr = function (C) {
        wi(t.removed, { element: C });
        try {
          v(C).removeChild(C);
        } catch {
          _(C);
        }
      },
      Ua = function (C, M) {
        try {
          wi(t.removed, { attribute: M.getAttributeNode(C), from: M });
        } catch {
          wi(t.removed, { attribute: null, from: M });
        }
        if ((M.removeAttribute(C), C === "is" && !we[C]))
          if (vr || Pr)
            try {
              Lr(M);
            } catch {}
          else
            try {
              M.setAttribute(C, "");
            } catch {}
      },
      xd = function (C) {
        let M = null,
          Q = null;
        if (wn) C = "<remove></remove>" + C;
        else {
          const rt = L8(C, /^[\r\n\t ]+/);
          Q = rt && rt[0];
        }
        Ie === "application/xhtml+xml" &&
          R === O &&
          (C =
            '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
            C +
            "</body></html>");
        const xe = E ? E.createHTML(C) : C;
        if (R === O)
          try {
            M = new f().parseFromString(xe, Ie);
          } catch {}
        if (!M || !M.documentElement) {
          M = L.createDocument(R, "template", null);
          try {
            M.documentElement.innerHTML = I ? P : xe;
          } catch {}
        }
        const ct = M.body || M.documentElement;
        return (
          C &&
            Q &&
            ct.insertBefore(r.createTextNode(Q), ct.childNodes[0] || null),
          R === O
            ? Z.call(M, gr ? "html" : "body")[0]
            : gr
              ? M.documentElement
              : ct
        );
      },
      _d = function (C) {
        return A.call(
          C.ownerDocument || C,
          C,
          c.SHOW_ELEMENT |
            c.SHOW_COMMENT |
            c.SHOW_TEXT |
            c.SHOW_PROCESSING_INSTRUCTION |
            c.SHOW_CDATA_SECTION,
          null,
        );
      },
      Sd = function (C) {
        return (
          C instanceof p &&
          (typeof C.nodeName != "string" ||
            typeof C.textContent != "string" ||
            typeof C.removeChild != "function" ||
            !(C.attributes instanceof d) ||
            typeof C.removeAttribute != "function" ||
            typeof C.setAttribute != "function" ||
            typeof C.namespaceURI != "string" ||
            typeof C.insertBefore != "function" ||
            typeof C.hasChildNodes != "function")
        );
      },
      kd = function (C) {
        return typeof a == "function" && C instanceof a;
      },
      Yr = function (C, M, Q) {
        X[C] &&
          dl(X[C], (xe) => {
            xe.call(t, M, Q, Qr);
          });
      },
      Od = function (C) {
        let M = null;
        if ((Yr("beforeSanitizeElements", C, null), Sd(C))) return Lr(C), !0;
        const Q = Ve(C.nodeName);
        if (
          (Yr("uponSanitizeElement", C, { tagName: Q, allowedTags: Y }),
          (C.hasChildNodes() &&
            !kd(C.firstElementChild) &&
            yt(/<[/\w]/g, C.innerHTML) &&
            yt(/<[/\w]/g, C.textContent)) ||
            C.nodeType === xi.progressingInstruction ||
            (Cn && C.nodeType === xi.comment && yt(/<[/\w]/g, C.data)))
        )
          return Lr(C), !0;
        if (!Y[Q] || Be[Q]) {
          if (
            !Be[Q] &&
            Pd(Q) &&
            ((de.tagNameCheck instanceof RegExp && yt(de.tagNameCheck, Q)) ||
              (de.tagNameCheck instanceof Function && de.tagNameCheck(Q)))
          )
            return !1;
          if (G && !J[Q]) {
            const xe = v(C) || C.parentNode,
              ct = h(C) || C.childNodes;
            if (ct && xe) {
              const rt = ct.length;
              for (let Ot = rt - 1; Ot >= 0; --Ot) {
                const Rr = T(ct[Ot], !0);
                (Rr.__removalCount = (C.__removalCount || 0) + 1),
                  xe.insertBefore(Rr, g(C));
              }
            }
          }
          return Lr(C), !0;
        }
        return (C instanceof l && !$9(C)) ||
          ((Q === "noscript" || Q === "noembed" || Q === "noframes") &&
            yt(/<\/no(script|embed|frames)/i, C.innerHTML))
          ? (Lr(C), !0)
          : (mr &&
              C.nodeType === xi.text &&
              ((M = C.textContent),
              dl([ne, Ce, Fe], (xe) => {
                M = Ei(M, xe, " ");
              }),
              C.textContent !== M &&
                (wi(t.removed, { element: C.cloneNode() }),
                (C.textContent = M))),
            Yr("afterSanitizeElements", C, null),
            !1);
      },
      Ad = function (C, M, Q) {
        if (is && (M === "id" || M === "name") && (Q in r || Q in G9))
          return !1;
        if (!(vn && !gt[M] && yt(rr, M))) {
          if (!(Ar && yt(St, M))) {
            if (!we[M] || gt[M]) {
              if (
                !(
                  (Pd(C) &&
                    ((de.tagNameCheck instanceof RegExp &&
                      yt(de.tagNameCheck, C)) ||
                      (de.tagNameCheck instanceof Function &&
                        de.tagNameCheck(C))) &&
                    ((de.attributeNameCheck instanceof RegExp &&
                      yt(de.attributeNameCheck, M)) ||
                      (de.attributeNameCheck instanceof Function &&
                        de.attributeNameCheck(M)))) ||
                  (M === "is" &&
                    de.allowCustomizedBuiltInElements &&
                    ((de.tagNameCheck instanceof RegExp &&
                      yt(de.tagNameCheck, Q)) ||
                      (de.tagNameCheck instanceof Function &&
                        de.tagNameCheck(Q))))
                )
              )
                return !1;
            } else if (!H[M]) {
              if (!yt(re, Ei(Q, D, ""))) {
                if (
                  !(
                    (M === "src" || M === "xlink:href" || M === "href") &&
                    C !== "script" &&
                    zS(Q, "data:") === 0 &&
                    Re[C]
                  )
                ) {
                  if (!(yn && !yt(Ut, Ei(Q, D, "")))) {
                    if (Q) return !1;
                  }
                }
              }
            }
          }
        }
        return !0;
      },
      Pd = function (C) {
        return C !== "annotation-xml" && L8(C, te);
      },
      Ld = function (C) {
        Yr("beforeSanitizeAttributes", C, null);
        const { attributes: M } = C;
        if (!M) return;
        const Q = {
          attrName: "",
          attrValue: "",
          keepAttr: !0,
          allowedAttributes: we,
        };
        let xe = M.length;
        for (; xe--; ) {
          const ct = M[xe],
            { name: rt, namespaceURI: Ot, value: Rr } = ct,
            si = Ve(rt);
          let vt = rt === "value" ? Rr : BS(Rr);
          if (
            ((Q.attrName = si),
            (Q.attrValue = vt),
            (Q.keepAttr = !0),
            (Q.forceKeepAttr = void 0),
            Yr("uponSanitizeAttribute", C, Q),
            (vt = Q.attrValue),
            Cn && yt(/((--!?|])>)|<\/(style|title)/i, vt))
          ) {
            Ua(rt, C);
            continue;
          }
          if (Q.forceKeepAttr || (Ua(rt, C), !Q.keepAttr)) continue;
          if (!Kr && yt(/\/>/i, vt)) {
            Ua(rt, C);
            continue;
          }
          mr &&
            dl([ne, Ce, Fe], (jd) => {
              vt = Ei(vt, jd, " ");
            });
          const Rd = Ve(C.nodeName);
          if (Ad(Rd, si, vt)) {
            if (
              (En &&
                (si === "id" || si === "name") &&
                (Ua(rt, C), (vt = k + vt)),
              E &&
                typeof y == "object" &&
                typeof y.getAttributeType == "function" &&
                !Ot)
            )
              switch (y.getAttributeType(Rd, si)) {
                case "TrustedHTML": {
                  vt = E.createHTML(vt);
                  break;
                }
                case "TrustedScriptURL": {
                  vt = E.createScriptURL(vt);
                  break;
                }
              }
            try {
              Ot ? C.setAttributeNS(Ot, rt, vt) : C.setAttribute(rt, vt),
                Sd(C) ? Lr(C) : P8(t.removed);
            } catch {}
          }
        }
        Yr("afterSanitizeAttributes", C, null);
      },
      H9 = function ee(C) {
        let M = null;
        const Q = _d(C);
        for (Yr("beforeSanitizeShadowDOM", C, null); (M = Q.nextNode()); )
          Yr("uponSanitizeShadowNode", M, null),
            !Od(M) && (M.content instanceof o && ee(M.content), Ld(M));
        Yr("afterSanitizeShadowDOM", C, null);
      };
    return (
      (t.sanitize = function (ee) {
        let C =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          M = null,
          Q = null,
          xe = null,
          ct = null;
        if (((I = !ee), I && (ee = "<!-->"), typeof ee != "string" && !kd(ee)))
          if (typeof ee.toString == "function") {
            if (((ee = ee.toString()), typeof ee != "string"))
              throw bi("dirty is not a string, aborting");
          } else throw bi("toString is not a function");
        if (!t.isSupported) return ee;
        if (
          (os || Q1(C), (t.removed = []), typeof ee == "string" && ($ = !1), $)
        ) {
          if (ee.nodeName) {
            const Rr = Ve(ee.nodeName);
            if (!Y[Rr] || Be[Rr])
              throw bi(
                "root node is forbidden and cannot be sanitized in-place",
              );
          }
        } else if (ee instanceof a)
          (M = xd("<!---->")),
            (Q = M.ownerDocument.importNode(ee, !0)),
            (Q.nodeType === xi.element && Q.nodeName === "BODY") ||
            Q.nodeName === "HTML"
              ? (M = Q)
              : M.appendChild(Q);
        else {
          if (!vr && !mr && !gr && ee.indexOf("<") === -1)
            return E && nr ? E.createHTML(ee) : ee;
          if (((M = xd(ee)), !M)) return vr ? null : nr ? P : "";
        }
        M && wn && Lr(M.firstChild);
        const rt = _d($ ? ee : M);
        for (; (xe = rt.nextNode()); )
          Od(xe) || (xe.content instanceof o && H9(xe.content), Ld(xe));
        if ($) return ee;
        if (vr) {
          if (Pr)
            for (ct = j.call(M.ownerDocument); M.firstChild; )
              ct.appendChild(M.firstChild);
          else ct = M;
          return (
            (we.shadowroot || we.shadowrootmode) && (ct = K.call(n, ct, !0)), ct
          );
        }
        let Ot = gr ? M.outerHTML : M.innerHTML;
        return (
          gr &&
            Y["!doctype"] &&
            M.ownerDocument &&
            M.ownerDocument.doctype &&
            M.ownerDocument.doctype.name &&
            yt(I9, M.ownerDocument.doctype.name) &&
            (Ot =
              "<!DOCTYPE " +
              M.ownerDocument.doctype.name +
              `>
` +
              Ot),
          mr &&
            dl([ne, Ce, Fe], (Rr) => {
              Ot = Ei(Ot, Rr, " ");
            }),
          E && nr ? E.createHTML(Ot) : Ot
        );
      }),
      (t.setConfig = function () {
        let ee =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        Q1(ee), (os = !0);
      }),
      (t.clearConfig = function () {
        (Qr = null), (os = !1);
      }),
      (t.isValidAttribute = function (ee, C, M) {
        Qr || Q1({});
        const Q = Ve(ee),
          xe = Ve(C);
        return Ad(Q, xe, M);
      }),
      (t.addHook = function (ee, C) {
        typeof C == "function" && ((X[ee] = X[ee] || []), wi(X[ee], C));
      }),
      (t.removeHook = function (ee) {
        if (X[ee]) return P8(X[ee]);
      }),
      (t.removeHooks = function (ee) {
        X[ee] && (X[ee] = []);
      }),
      (t.removeAllHooks = function () {
        X = {};
      }),
      t
    );
  }
  var ik = M9(),
    ue = ((e) => (
      (e.LIGHT = "LIGHT"), (e.DARK = "DARK"), (e.SYSTEM = "SYSTEM"), e
    ))(ue || {});
  const yd = class yd {};
  yd.THEME_STORAGE_KEY = "THEME";
  let Ea = yd;
  const ak = { themeOption: ue.SYSTEM, appliedTheme: ue.LIGHT, setTheme() {} },
    vd = N.createContext(ak),
    M2 = () =>
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? ue.DARK
        : ue.LIGHT,
    lk = () => {
      const e = localStorage.getItem(Ea.THEME_STORAGE_KEY);
      return e === ue.LIGHT || e === ue.DARK || e === ue.SYSTEM ? e : ue.SYSTEM;
    },
    uk = () => {
      const e = localStorage.getItem(Ea.THEME_STORAGE_KEY);
      return e === ue.SYSTEM
        ? M2()
        : e === ue.LIGHT || e === ue.DARK
          ? e
          : ue.LIGHT;
    };
  function ck({ children: e }) {
    const [t, r] = N.useState(lk()),
      [n, s] = N.useState(uk()),
      o = (i) => {
        const a = document.getElementById("theme-provider");
        if (i === ue.DARK || i === ue.LIGHT) (a.dataset.theme = i), s(i);
        else if (i === ue.SYSTEM) {
          const l = M2();
          (l === ue.LIGHT || l === ue.DARK) && ((a.dataset.theme = l), s(l));
        }
        localStorage.setItem(Ea.THEME_STORAGE_KEY, i);
      };
    return (
      N.useEffect(() => {
        o(t);
      }, [t]),
      N.useEffect(() => {
        const i = () => {
            r((l) => (l === ue.SYSTEM && o(M2()), l));
          },
          a = window.matchMedia("(prefers-color-scheme: dark)");
        return (
          a.addEventListener("change", i),
          () => {
            a.removeEventListener("change", i);
          }
        );
      }, [t]),
      u.jsx(vd.Provider, {
        value: { themeOption: t, appliedTheme: n, setTheme: r },
        children: e,
      })
    );
  }
  function dk({ className: e, project: t, ...r }) {
    const { appliedTheme: n } = N.useContext(vd),
      { data: s, isLoading: o } = C2({
        queryFn: q3,
        queryKey: [q3.name, t.repository_name],
      });
    return u.jsx(T2, {
      loading: o,
      children: u.jsx("div", {
        dangerouslySetInnerHTML: { __html: ik.sanitize(s) },
        "data-theme": n,
        className: U("markdown-body p-[1.5rem] max-w-[980px]", e),
        ...r,
      }),
    });
  }
  function fk() {
    const { selectedProject: e, setSelectedProject: t } = N.useContext(Ks);
    if (e)
      return u.jsxs("div", {
        className:
          "flex lg:items-center flex-col w-full animate-[fadeInRight_0.7s_ease]",
        children: [
          u.jsxs("div", {
            className:
              "flex w-full bg-base-100 justify-between items-center p-[0.7rem] sticky top-0 border-b border-edge-100",
            children: [
              u.jsxs("div", {
                className:
                  "flex flex-col sm:flex-row animate-[flipInX_0.7s_0.2s_ease] fill-mode-backward items-start sm:items-start sm:space-x-3 sm:justify-start",
                children: [
                  u.jsx("div", {
                    className: "flex border border-edge-100",
                    children: u.jsx("div", {
                      className:
                        "flex border border-edge-100 bg-base-100 p-[0.5rem] translate-x-[0.3rem] translate-y-[-0.3em]",
                      children: u.jsx("img", {
                        className: U(
                          "h-[3.5rem] w-[3.5rem]",
                          (e == null ? void 0 : e.id) === e.id &&
                            "h-[2rem] w-[2rem]",
                        ),
                        src: e.icon,
                        alt: "icon",
                      }),
                    }),
                  }),
                  u.jsx("div", {
                    className: "flex flex-col text-edge-100",
                    children: u.jsx(Nt, {
                      children: u.jsx(jt, {
                        className: "pl-[0.3rem]",
                        children: e.display_name,
                      }),
                    }),
                  }),
                ],
              }),
              u.jsxs("div", {
                className:
                  "flex flex-col-reverse items-end sm:items-start space-y-1 space-y-reverse sm:space-y-0 sm:space-x-2 sm:flex-row",
                children: [
                  u.jsx("a", {
                    href: e.repository,
                    target: "_blank",
                    children: u.jsx(it, {
                      children: u.jsxs(st, {
                        children: [
                          u.jsx(Lt, { children: u.jsx(Ee, { icon: US }) }),
                          u.jsx(ot, {}),
                        ],
                      }),
                    }),
                  }),
                  u.jsx(it, {
                    inverted: !0,
                    onClick: () => t(null),
                    children: u.jsxs(st, {
                      children: [
                        u.jsx(Lt, { children: u.jsx(Ee, { icon: vg }) }),
                        u.jsx(Ia, { children: "Back" }),
                        u.jsx(ot, {}),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
          u.jsx(dk, { project: e }),
        ],
      });
  }
  function pk() {
    const e = N.useRef(null),
      {
        selectedProject: t,
        search: r,
        categories: n,
        page: s,
        setPage: o,
      } = N.useContext(Ks),
      { data: i, isLoading: a } = C2({
        queryFn: B3,
        queryKey: [B3.name],
        refetchOnWindowFocus: !1,
      }),
      { data: l, isLoading: c } = C2({
        queryFn: W3,
        queryKey: [
          W3.name,
          { categories: n.map((d) => d.id), page: s, search: r },
        ],
        refetchOnWindowFocus: !1,
      });
    return (
      N.useEffect(() => {
        var d;
        (d = e.current) == null || d.scrollTo({ top: 0, behavior: "smooth" });
      }, [s]),
      N.useEffect(() => {
        o(1);
      }, [n, r, o]),
      u.jsx(ja, {
        reactRef: e,
        className: "items-center relative overflow-x-hidden",
        children: t
          ? u.jsx(fk, {})
          : u.jsxs("div", {
              className:
                "flex flex-col w-full p-[1rem] space-y-7 flex-1 lg:max-w-screen-lg",
              children: [
                u.jsxs(Nt, {
                  className: "text-[20pt] w-full",
                  variant: "primary",
                  children: [
                    u.jsx(ur, { children: u.jsx(Ee, { icon: T6 }) }),
                    u.jsx(jt, { children: "Projects" }),
                  ],
                }),
                u.jsxs(T2, {
                  loading: a,
                  children: [
                    u.jsx(MS, {
                      className: "animate-[flipInX_0.7s_ease]",
                      categories: i,
                    }),
                    u.jsxs(T2, {
                      loading: c,
                      children: [
                        u.jsx("div", {
                          className: "flex flex-wrap justify-between",
                          children:
                            l == null
                              ? void 0
                              : l.results.map((d) =>
                                  u.jsx(DS, { project: d }, d.id),
                                ),
                        }),
                        u.jsx(GS, { count: l == null ? void 0 : l.count }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
      })
    );
  }
  const hk = oe("flex");
  function mk({ className: e, fillColor: t, ...r }) {
    return u.jsxs("svg", {
      viewBox: "0 0 1772 2500",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: U(hk({ className: e })),
      ...r,
      children: [
        u.jsxs("g", {
          clipPath: "url(#clip0_98_11)",
          children: [
            u.jsx("path", {
              d: "M416.831 0H685.386V112.305H529.136V224.609H685.386V336.914H416.831V0Z",
              className: t,
            }),
            u.jsx("path", {
              d: "M739.097 0H1007.65V97.6562H851.401V117.188H1007.65V341.797H739.097V239.258H895.347V219.727H739.097V0Z",
              className: t,
            }),
            u.jsx("path", {
              d: "M1061.36 0H1329.92V97.6562H1173.67V117.188H1329.92V341.797H1061.36V239.258H1217.61V219.727H1061.36V0Z",
              className: t,
            }),
            u.jsx("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M1609.81 2298.92L1771.16 491.309H0L161.187 2299.2L884.497 2500L1609.81 2298.92ZM329.585 860.864H884.814H885.581H1440.25L1400.22 1309.65L1394.81 1369.19L1339.38 1990.4L885.581 2116.17V2116.21L884.561 2116.49L430.361 1990.4L399.297 1642.25H621.88L637.666 1819.09L884.609 1885.77L884.815 1885.72V1885.7L1132.11 1818.95L1157.85 1531.38H885.581H884.815H389.39L369.517 1309.65L884.815 1309.65L885.581 1309.65L1177.08 1309.65L1197.26 1082.6H885.581H884.815H349.741L329.585 860.864Z",
              className: t,
            }),
          ],
        }),
        u.jsx("defs", {
          children: u.jsx("clipPath", {
            id: "clip0_98_11",
            children: u.jsx("rect", {
              width: "1771.16",
              height: "2500",
              className: t,
            }),
          }),
        }),
      ],
    });
  }
  const gk = oe("flex");
  function vk({ className: e, fillColor: t, ...r }) {
    return u.jsxs("svg", {
      viewBox: "0 0 1943 2500",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: U(gk({ className: e })),
      ...r,
      children: [
        u.jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M412.216 1281.1C410.91 1529.51 593.06 1677.6 883.733 1610.27V951.936C589.385 862.296 413.447 1043.65 412.216 1281.1ZM892.625 0H1292.97V1894.96C909.226 1957.7 541.696 1997.49 278.768 1850.47C-59.7749 1661.19 -86.9912 1059.69 180.899 791.793C316.723 655.978 590.162 560.362 883.733 622.758V26.6956C882.966 14.0628 882.256 1.48667 892.625 0Z",
          className: t,
        }),
        u.jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M1942.42 418.136H1542.07V0H1942.42V418.136Z",
          className: t,
        }),
        u.jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M1942.41 629.855C1941.96 924.658 1942.02 1136.5 1941.99 1494.64C1924.99 1846.6 1928.94 2126.88 1800.07 2295.29C1774.65 2328.5 1720.68 2376.95 1675.52 2410.95C1637.59 2439.5 1565.31 2497.4 1524.27 2499.92C1482.91 2502.46 1376.64 2442.5 1328.54 2419.85C1265.39 2390.1 1207.01 2350.6 1141.73 2330.89C1294.01 2236.52 1438.56 2165.77 1497.58 1975.02C1548.91 1809.13 1542.07 1568.74 1542.07 1334.47C1542.07 1103.14 1543.1 834.203 1543.1 629.96L1942.41 629.855Z",
          className: t,
        }),
      ],
    });
  }
  const yk = oe("flex");
  function Ck({ className: e, fillColor: t, ...r }) {
    return u.jsxs("svg", {
      viewBox: "0 0 1667 2500",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: U(yk({ className: e })),
      ...r,
      children: [
        u.jsx("path", {
          d: "M416.833 2500C646.833 2500 833.5 2313.33 833.5 2083.33V1666.67H416.833C186.833 1666.67 0.166504 1853.33 0.166504 2083.33C0.166504 2313.33 186.833 2500 416.833 2500Z",
          className: t,
        }),
        u.jsx("path", {
          d: "M0.166504 1250C0.166504 1020 186.833 833.333 416.833 833.333H833.5V1666.67H416.833C186.833 1666.67 0.166504 1480 0.166504 1250Z",
          className: t,
        }),
        u.jsx("path", {
          d: "M0.166504 416.667C0.166504 186.667 186.833 0 416.833 0H833.5V833.333H416.833C186.833 833.333 0.166504 646.667 0.166504 416.667Z",
          className: t,
        }),
        u.jsx("path", {
          d: "M833.5 0H1250.17C1480.17 0 1666.83 186.667 1666.83 416.667C1666.83 646.667 1480.17 833.333 1250.17 833.333H833.5V0Z",
          className: t,
        }),
        u.jsx("path", {
          d: "M1666.83 1250C1666.83 1480 1480.17 1666.67 1250.17 1666.67C1020.17 1666.67 833.5 1480 833.5 1250C833.5 1020 1020.17 833.333 1250.17 833.333C1480.17 833.333 1666.83 1020 1666.83 1250Z",
          className: t,
        }),
      ],
    });
  }
  const wk = oe("flex");
  function Ek({ className: e, fillColor: t, ...r }) {
    return u.jsx("svg", {
      viewBox: "0 0 2501 2500",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: U(wk({ className: e })),
      ...r,
      children: u.jsx("path", {
        d: "M2452.96 1138.65L1361.33 47.1501C1298.52 -15.7167 1196.57 -15.7167 1133.68 47.1501L907.011 273.838L1194.53 561.356C1261.37 538.788 1337.98 553.919 1391.24 607.185C1444.77 660.782 1459.79 738.049 1436.66 805.114L1713.78 1082.23C1780.82 1059.13 1858.17 1074.05 1911.7 1127.68C1986.55 1202.5 1986.55 1323.75 1911.7 1398.59C1836.85 1473.45 1715.61 1473.45 1640.71 1398.59C1584.43 1342.27 1570.51 1259.58 1599.02 1190.24L1340.58 931.8L1340.55 1611.89C1358.8 1620.92 1376.02 1632.97 1391.23 1648.11C1466.05 1722.93 1466.05 1844.15 1391.23 1919.09C1316.38 1993.9 1195.09 1993.9 1120.32 1919.09C1045.49 1844.15 1045.49 1722.93 1120.32 1648.11C1138.81 1629.65 1160.21 1615.68 1183.05 1606.31V919.908C1160.2 910.582 1138.83 896.713 1120.31 878.104C1063.63 821.465 1049.97 738.273 1079.04 668.667L795.607 385.187L47.165 1133.61C-15.7217 1196.52 -15.7217 1298.48 47.165 1361.35L1138.73 2452.85C1201.58 2515.72 1303.5 2515.72 1366.43 2452.85L2452.95 1366.5C2515.82 1303.61 2515.82 1201.62 2452.95 1138.74",
        className: t,
      }),
    });
  }
  const bk = oe("flex");
  function Tk({ className: e, fillColor: t, ...r }) {
    return u.jsxs("svg", {
      viewBox: "0 0 2225 2500",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: U(bk({ className: e })),
      ...r,
      children: [
        u.jsx("path", {
          d: "M1106.7 127.472L137.277 1806.51C122.645 1831.85 131.328 1864.26 156.67 1878.89C182.013 1893.52 214.42 1884.84 229.052 1859.5L1198.47 180.459C1213.1 155.117 1204.42 122.71 1179.08 108.078C1153.74 93.446 1121.33 102.129 1106.7 127.472Z",
          className: t,
        }),
        u.jsx("path", {
          d: "M2081.59 1710.93H142.751C113.487 1710.93 89.7634 1734.65 89.7634 1763.92C89.7634 1793.18 113.487 1816.91 142.751 1816.91H2081.59C2110.86 1816.91 2134.58 1793.18 2134.58 1763.92C2134.58 1734.65 2110.86 1710.93 2081.59 1710.93Z",
          className: t,
        }),
        u.jsx("path", {
          d: "M176.113 1796.95L1107.13 2334.49C1132.47 2349.12 1164.88 2340.44 1179.51 2315.09C1194.14 2289.75 1185.46 2257.34 1160.12 2242.71L229.1 1705.17C203.758 1690.54 171.351 1699.22 156.719 1724.57C142.087 1749.91 150.77 1782.32 176.113 1796.95Z",
          className: t,
        }),
        u.jsx("path", {
          d: "M1064.61 257.89L1995.62 795.428C2020.97 810.06 2053.37 801.377 2068.01 776.034C2082.64 750.692 2073.95 718.285 2048.61 703.653L1117.6 166.115C1092.25 151.483 1059.85 160.165 1045.21 185.508C1030.58 210.851 1039.26 243.258 1064.61 257.89Z",
          className: t,
        }),
        u.jsx("path", {
          d: "M1107.41 165.718L176.391 703.257C151.048 717.889 142.365 750.295 156.998 775.638C171.63 800.981 204.036 809.664 229.379 795.031L1160.4 257.493C1185.74 242.861 1194.42 210.455 1179.79 185.112C1165.16 159.769 1132.75 151.086 1107.41 165.718Z",
          className: t,
        }),
        u.jsx("path", {
          d: "M1026.74 180.483L1996.16 1859.52C2010.8 1884.86 2043.2 1893.54 2068.55 1878.91C2093.89 1864.28 2102.57 1831.87 2087.94 1806.53L1118.52 127.495C1103.89 102.152 1071.48 93.4695 1046.14 108.102C1020.79 122.734 1012.11 155.14 1026.74 180.483Z",
          className: t,
        }),
        u.jsx("path", {
          d: "M276.812 1787.54V712.468C276.812 683.204 253.089 659.48 223.824 659.48C194.56 659.48 170.836 683.204 170.836 712.468V1787.54C170.836 1816.81 194.56 1840.53 223.824 1840.53C253.089 1840.53 276.812 1816.81 276.812 1787.54Z",
          className: t,
        }),
        u.jsx("path", {
          d: "M2054.14 1787.54V712.468C2054.14 683.204 2030.42 659.48 2001.15 659.48C1971.89 659.48 1948.16 683.204 1948.16 712.468V1787.54C1948.16 1816.81 1971.89 1840.53 2001.15 1840.53C2030.42 1840.53 2054.14 1816.81 2054.14 1787.54Z",
          className: t,
        }),
        u.jsx("path", {
          d: "M1938.16 1745.52L1128.77 2212.84C1106.63 2225.62 1099.05 2253.92 1111.83 2276.06C1124.61 2298.2 1152.92 2305.78 1175.05 2293L1984.44 1825.69C2006.58 1812.91 2014.16 1784.6 2001.38 1762.46C1988.6 1740.33 1960.29 1732.74 1938.16 1745.52Z",
          className: t,
        }),
        u.jsx("path", {
          d: "M2194.58 1875C2133.3 1981.61 1996.68 2018 1890.06 1956.72C1783.45 1895.43 1747.06 1758.81 1808.35 1652.2C1869.64 1545.58 2006.25 1509.19 2112.87 1570.48C2220.12 1632.41 2256.51 1768.39 2194.58 1875Z",
          className: t,
        }),
        u.jsx("path", {
          d: "M415.986 847.801C354.699 954.415 218.08 990.804 111.466 929.517C4.85232 868.23 -31.5369 731.611 29.7502 624.997C91.0372 518.384 227.656 481.994 334.27 543.281C440.884 605.207 477.273 741.187 415.986 847.801Z",
          className: t,
        }),
        u.jsx("path", {
          d: "M30.3862 1875C-30.9009 1768.39 5.48829 1632.41 112.102 1570.48C218.716 1509.19 354.697 1545.58 416.622 1652.2C477.909 1758.81 441.52 1894.79 334.906 1956.72C227.654 2018 91.6732 1981.61 30.3862 1875Z",
          className: t,
        }),
        u.jsx("path", {
          d: "M1808.99 847.801C1747.7 741.187 1784.09 605.207 1890.71 543.281C1997.32 481.994 2133.3 518.384 2195.23 624.997C2256.51 731.611 2220.12 867.592 2113.51 929.517C2006.9 990.804 1870.28 954.415 1808.99 847.801Z",
          className: t,
        }),
        u.jsx("path", {
          d: "M1112.49 2500.01C989.277 2500.01 889.686 2400.41 889.686 2277.2C889.686 2153.99 989.277 2054.4 1112.49 2054.4C1235.7 2054.4 1335.29 2153.99 1335.29 2277.2C1335.29 2399.78 1235.7 2500.01 1112.49 2500.01Z",
          className: t,
        }),
        u.jsx("path", {
          d: "M1112.49 445.608C989.277 445.608 889.686 346.016 889.686 222.804C889.686 99.5914 989.277 0 1112.49 0C1235.7 0 1335.29 99.5914 1335.29 222.804C1335.29 346.016 1235.7 445.608 1112.49 445.608Z",
          className: t,
        }),
      ],
    });
  }
  const xk = oe("flex");
  function _k({ className: e, fillColor: t, ...r }) {
    return u.jsxs("svg", {
      viewBox: "0 0 2500 2500",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: U(xk({ className: e })),
      ...r,
      children: [
        u.jsx("path", {
          d: "M529.297 0H641.602V111.328H745.117V0H857.422V336.914H745.117V224.609H642.578V336.914H529.297M1005.86 112.305H906.738V0H1217.77V112.305H1118.16V336.914H1005.86M1267.09 0H1384.77L1457.03 118.652L1529.3 0H1646.97V336.914H1534.67V169.922L1456.05 291.016L1377.44 169.922V336.914H1267.09M1702.64 0H1814.94V225.586H1974.12V336.914H1702.64",
          className: t,
        }),
        u.jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M1975.81 2298.61L2137.16 491H366L527.187 2298.9L1250.5 2499.69L1975.81 2298.61ZM1249.02 860.84H693.359L753.906 1530.76H1249.02V1531.25H1522.46L1496.58 1819.34L1249.51 1885.61L1001.95 1819.34L986.328 1642.09H763.672L794.922 1990.23L1250 2117.19V2115.94L1703.12 1990.23L1764.16 1309.57H1250H1249.02H957.031L936.523 1082.52H1249.02H1250H1784.18L1804.69 860.84H1250H1249.02Z",
          className: t,
        }),
      ],
    });
  }
  const Sk = oe("flex");
  function kk({ className: e, fillColor: t, ...r }) {
    return u.jsxs("svg", {
      viewBox: "0 0 1844 2500",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: U(Sk({ className: e })),
      ...r,
      children: [
        u.jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M593.789 1933.35C593.789 1933.35 498.308 1988.92 661.817 2007.68C859.935 2030.3 961.172 2027.04 1179.43 1985.78C1179.43 1985.78 1236.93 2021.75 1317.09 2052.9C827.654 2262.6 209.395 2040.75 593.789 1933.35Z",
          className: t,
        }),
        u.jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M533.951 1659.67C533.951 1659.67 426.846 1738.96 590.476 1755.88C802.127 1777.73 969.208 1779.52 1258.49 1723.84C1258.49 1723.84 1298.41 1764.39 1361.27 1786.55C769.608 1959.62 110.612 1800.17 533.951 1659.67Z",
          className: t,
        }),
        u.jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M1038.11 1195.35C1158.77 1334.24 1006.47 1459.12 1006.47 1459.12C1006.47 1459.12 1312.67 1301.09 1172.08 1103.08C1040.72 918.521 940.013 826.84 1485.22 510.656C1485.22 510.656 629.382 724.353 1038.11 1195.35Z",
          className: t,
        }),
        u.jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M1685.42 2135.81C1685.42 2135.81 1756.1 2194.08 1607.57 2239.14C1325.13 2324.69 431.806 2350.49 183.684 2242.56C94.5522 2203.74 261.777 2149.93 314.393 2138.57C369.253 2126.7 400.577 2128.87 400.577 2128.87C301.38 2059.01 -240.578 2266.06 125.323 2325.44C1123.15 2487.17 1944.21 2252.59 1685.42 2135.81Z",
          className: t,
        }),
        u.jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M639.74 1376.06C639.74 1376.06 185.399 1484.01 478.853 1523.24C602.798 1539.82 849.731 1536.01 1079.91 1516.7C1267.98 1500.91 1456.71 1467.15 1456.71 1467.15C1456.71 1467.15 1390.45 1495.58 1342.47 1528.32C881 1649.69 -10.3075 1593.17 246.326 1469.08C463.263 1364.13 639.74 1376.06 639.74 1376.06Z",
          className: t,
        }),
        u.jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M1454.83 1831.62C1923.9 1587.94 1706.99 1353.74 1555.61 1385.29C1518.59 1393.01 1501.98 1399.7 1501.98 1399.7C1501.98 1399.7 1515.77 1378.1 1542.04 1368.8C1841.53 1263.56 2071.81 1679.3 1445.46 1843.96C1445.46 1843.96 1452.66 1837.43 1454.83 1831.62Z",
          className: t,
        }),
        u.jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M1172.08 0C1172.08 0 1431.8 259.869 925.668 659.361C519.783 979.947 833.124 1162.67 925.524 1371.54C688.579 1157.78 514.783 969.578 631.357 794.444C802.541 537.401 1276.85 412.737 1172.08 0Z",
          className: t,
        }),
        u.jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M685.857 2492.16C1136.01 2520.94 1827.46 2476.14 1843.82 2263.12C1843.82 2263.12 1812.36 2343.87 1471.76 2407.95C1087.51 2480.29 613.477 2471.87 332.433 2425.46C332.433 2425.46 390.009 2473.12 685.857 2492.16Z",
          className: t,
        }),
      ],
    });
  }
  const Ok = oe("flex");
  function Ak({ className: e, fillColor: t, ...r }) {
    return u.jsx("svg", {
      viewBox: "0 0 2130 2500",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: U(Ok({ className: e })),
      ...r,
      children: u.jsx("path", {
        d: "M244.366 2365.5C376.215 2381.24 524.358 2466.66 648.334 2481.74C772.977 2497.47 811.548 2396.86 811.548 2396.86C811.548 2396.86 951.81 2365.5 1099.27 2361.89C1246.87 2357.75 1386.6 2392.59 1386.6 2392.59C1386.6 2392.59 1413.69 2454.64 1464.27 2481.74C1514.85 2509.36 1623.75 2513.09 1693.54 2439.56C1763.47 2365.5 1950.04 2272.21 2054.8 2213.89C2160.23 2155.44 2140.88 2066.29 2074.69 2039.2C2008.5 2012.11 1954.32 1969.4 1958.45 1887.46C1962.06 1806.19 1900 1752.01 1900 1752.01C1900 1752.01 1954.32 1573.18 1903.74 1425.05C1853.16 1277.59 1686.34 1040.44 1558.1 862.142C1429.85 683.317 1538.74 476.865 1421.98 213.024C1305.2 -51.2142 1002.4 -35.5951 839.183 77.0318C675.969 189.667 726.009 468.984 733.882 601.508C741.755 733.357 737.485 827.706 722.405 861.611C707.326 896.039 602.032 1021.09 532.104 1125.85C462.31 1231.14 411.723 1448.54 360.612 1538.22C310.564 1627.37 345.533 1708.64 345.533 1708.64C345.533 1708.64 310.572 1720.65 282.945 1779.11C255.85 1836.9 201.668 1864.51 104.112 1883.34C7.22327 1903.22 7.22328 1965.68 30.5804 2035.61C54.0645 2105.4 30.5804 2144.51 3.48517 2233.66C-23.6021 2322.79 111.985 2349.88 244.366 2365.5ZM1614.94 1958.86C1684.2 1989.15 1783.75 1946.98 1814.05 1916.68C1844.21 1886.52 1865.56 1841.68 1865.56 1841.68C1865.56 1841.68 1895.86 1856.76 1892.79 1904.67C1889.58 1953.25 1913.6 2022.51 1958.98 2046.53C2004.35 2070.42 2073.61 2103.78 2037.71 2137.14C2001.14 2170.51 1798.83 2251.91 1738.38 2315.44C1678.46 2378.55 1599.72 2430.21 1551.81 2414.99C1503.37 2399.91 1461.06 2333.72 1481.89 2236.83C1503.37 2140.35 1521.52 2034.51 1518.45 1974.06C1515.25 1913.61 1503.37 1832.21 1518.45 1820.19C1533.53 1808.31 1557.56 1814.05 1557.56 1814.05C1557.56 1814.05 1545.53 1928.71 1614.94 1958.86ZM1165.47 325.659C1232.19 325.659 1285.98 391.849 1285.98 473.254C1285.98 531.039 1258.88 581.087 1219.25 605.111C1209.24 600.976 1198.83 596.301 1187.35 591.492C1211.37 579.619 1228.05 549.325 1228.05 514.357C1228.05 468.587 1199.9 430.952 1164.52 430.952C1130.1 430.952 1101.4 468.579 1101.4 514.357C1101.4 531.047 1105.54 547.722 1112.34 560.801C1091.52 552.389 1072.71 545.19 1057.63 539.452C1049.75 519.563 1045.08 497.143 1045.08 473.262C1045.09 391.857 1098.73 325.659 1165.47 325.659ZM1000.25 580.023C1033.08 585.762 1123.29 624.865 1156.66 636.873C1190.02 648.349 1226.98 669.698 1223.38 691.055C1219.25 713.071 1202.03 713.071 1156.66 740.698C1111.82 767.793 1013.87 828.246 982.5 832.381C951.27 836.516 933.524 818.896 900.151 797.412C866.786 775.523 804.207 724.412 819.945 697.325C819.945 697.325 868.921 659.825 890.278 640.611C911.635 620.722 966.881 573.881 1000.25 580.023ZM856.381 349.151C908.961 349.151 951.802 411.738 951.802 488.873C951.802 502.889 950.199 515.96 947.667 529.039C934.588 533.174 921.516 539.984 908.961 550.928C902.826 556.135 897.08 560.801 891.881 566.008C900.151 550.397 903.358 527.976 899.62 504.484C892.413 462.849 864.254 432.024 836.628 436.158C808.866 440.833 792.318 479 798.993 521.174C806.334 563.881 833.953 594.698 862.112 590.031C863.715 589.5 865.183 588.968 866.786 588.428C853.31 601.508 840.762 612.984 827.683 622.325C789.651 604.571 761.493 551.46 761.493 488.873C761.501 411.206 803.667 349.151 856.381 349.151ZM563.453 1358.86C617.636 1273.45 652.596 1086.75 706.778 1024.69C761.501 962.769 803.667 830.785 784.453 772.468C784.453 772.468 901.223 912.19 982.5 889.238C1063.91 865.746 1246.87 729.762 1273.96 753.119C1301.06 776.603 1534.06 1289.06 1557.55 1452.28C1581.04 1615.36 1541.94 1740.01 1541.94 1740.01C1541.94 1740.01 1452.79 1716.52 1441.31 1770.7C1429.83 1825.41 1429.83 2023.59 1429.83 2023.59C1429.83 2023.59 1309.33 2190.41 1122.75 2218.03C936.183 2245.13 842.762 2225.37 842.762 2225.37L738.001 2105.4C738.001 2105.4 819.413 2093.39 807.929 2011.58C796.453 1930.31 559.167 1817.67 516.461 1716.51C473.771 1615.35 508.604 1444.4 563.453 1358.86ZM102.104 1970.87C111.445 1930.84 232.35 1930.84 278.794 1902.68C325.239 1874.52 334.572 1793.65 372.08 1772.3C409.04 1750.41 477.374 1828.09 505.532 1871.85C533.159 1914.55 638.993 2101.26 682.231 2147.7C726.001 2194.54 766.175 2256.59 753.628 2312.38C741.755 2368.16 675.961 2408.86 675.961 2408.86C617.112 2427.01 452.961 2356.15 378.366 2324.92C303.771 2293.56 113.993 2284.21 89.5724 2256.59C64.4851 2228.44 101.58 2166.38 111.453 2107.52C120.255 2048.01 92.6359 2011.04 102.104 1970.87Z",
        className: t,
      }),
    });
  }
  const Pk = oe("flex");
  function Lk({ className: e, fillColor: t, ...r }) {
    return u.jsx("svg", {
      viewBox: "0 0 2588 2500",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: U(Pk({ className: e })),
      ...r,
      children: u.jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1499.86 41.4727C1482.16 41.4727 1465.73 45.2652 1450.56 50.3216C1482.8 71.8119 1500.49 100.255 1509.34 132.491C1509.98 136.915 1511.24 140.076 1511.87 144.5C1512.51 148.292 1513.14 152.085 1513.14 155.877C1515.67 211.499 1498.6 218.452 1486.59 251.32C1468.26 293.668 1473.32 339.177 1495.44 375.837C1497.33 380.262 1499.86 385.318 1503.02 389.743C1479 229.829 1612.37 205.811 1637.02 155.877C1638.92 112.264 1602.89 83.1892 1574.45 62.963C1547.27 46.5292 1522.62 41.4727 1499.86 41.4727ZM1700.86 77.5006C1698.33 92.0382 1700.23 88.2457 1699.6 95.8306C1698.96 100.887 1698.96 107.208 1698.33 112.264C1697.07 117.321 1695.8 122.377 1693.91 127.434C1692.65 132.491 1690.75 137.547 1688.85 142.604C1686.32 147.66 1684.43 152.085 1681.9 157.141C1680 159.671 1678.74 162.198 1676.84 164.726C1675.58 166.622 1674.31 168.519 1673.05 170.415C1669.89 174.839 1666.73 179.264 1663.57 183.056C1659.78 186.849 1656.62 191.273 1652.19 194.434V195.066C1648.4 198.227 1644.61 202.019 1640.18 205.179C1626.91 215.292 1611.74 222.877 1597.84 232.358C1593.41 235.519 1588.99 238.047 1585.19 241.839C1580.77 245 1576.98 248.16 1573.18 251.953C1568.76 255.745 1565.6 259.537 1561.81 263.962C1558.65 267.754 1554.85 272.179 1552.33 276.603C1549.17 281.028 1546.01 285.452 1543.48 289.877C1540.95 294.933 1539.05 299.358 1536.52 304.414C1534.63 309.471 1532.73 313.895 1531.47 318.952C1529.57 324.64 1528.31 329.697 1527.04 334.754C1526.41 337.283 1526.41 340.442 1525.78 342.97C1525.15 345.5 1525.15 348.027 1524.52 350.555C1524.52 355.612 1523.88 361.301 1523.88 366.357C1523.88 370.149 1523.88 373.942 1524.52 377.734C1524.52 382.791 1525.15 387.847 1526.41 393.536C1527.05 398.592 1528.31 403.649 1529.57 408.706C1531.47 413.762 1532.73 418.819 1534.63 423.875C1535.89 427.036 1537.79 430.196 1539.05 432.724L1393.68 376.47C1369.03 369.517 1345.01 363.197 1320.36 357.508C1307.09 354.348 1293.81 351.187 1280.54 348.027C1242.61 340.442 1204.06 334.754 1165.5 330.961C1164.24 330.961 1163.61 330.328 1162.34 330.328C1124.42 326.536 1087.13 324.64 1049.2 324.64C1021.39 324.64 993.579 325.903 966.4 327.8C927.844 330.329 889.288 335.385 850.732 341.705C841.25 342.969 831.769 344.866 822.288 346.762C802.694 350.554 783.732 354.979 765.402 359.404C755.921 361.933 746.44 364.46 736.959 366.988C727.478 370.781 718.629 375.205 709.78 378.998C702.827 382.158 695.875 385.318 688.922 388.479C687.659 389.112 686.393 389.112 685.762 389.742C679.441 392.902 673.752 395.43 668.064 398.591C666.167 399.224 664.903 399.854 663.639 400.487C656.686 403.647 649.734 407.44 644.045 410.6C639.62 412.496 635.196 415.025 631.404 416.921C629.507 418.184 626.979 419.45 625.715 420.081C620.026 423.242 614.338 426.402 609.281 429.562C603.593 432.723 598.536 435.883 594.111 439.043C589.687 442.204 585.263 444.732 581.47 447.892C580.837 448.525 580.207 448.525 579.574 449.155C575.781 451.685 571.357 454.844 567.565 458.004C567.565 458.004 566.931 458.637 566.301 459.268C563.141 461.797 559.981 464.324 556.82 466.852C555.557 467.485 554.291 468.748 553.028 469.381C549.868 471.911 546.707 475.07 543.547 477.599C542.914 478.862 541.651 479.495 541.018 480.128C537.225 483.92 533.433 487.08 529.64 490.873C529.007 490.873 529.007 491.506 528.377 492.136C524.585 495.296 520.792 499.089 517 502.881C516.367 503.514 516.367 504.144 515.737 504.144C512.577 507.305 509.416 510.465 506.256 514.257C504.993 515.521 503.095 516.787 501.831 518.05C498.671 521.842 494.879 525.635 491.086 529.427C490.453 530.69 489.19 531.323 488.557 532.587C483.5 537.644 479.076 542.701 474.019 547.757C473.386 548.39 472.756 549.02 472.123 549.653C462.01 560.399 451.265 571.144 439.888 580.625C428.51 590.738 416.501 600.219 404.492 608.436C391.85 617.285 379.841 624.87 366.568 632.454C353.926 639.407 340.653 645.728 326.747 651.417C313.474 657.105 299.568 662.162 285.663 666.586C259.116 672.275 231.937 683.02 208.55 684.916C203.494 684.916 197.805 686.179 192.749 686.812C187.06 688.075 182.003 689.342 176.947 690.605C171.89 692.501 166.834 694.397 161.777 696.293C156.721 698.189 151.664 700.718 146.608 703.246C142.183 706.406 137.127 708.935 132.702 712.095C128.278 715.255 123.853 719.048 120.061 722.84C115.636 726.001 111.212 730.425 107.419 734.217C103.627 738.642 99.8344 742.435 96.6741 746.859C93.5138 751.915 89.7214 756.34 87.193 761.396C84.0327 765.821 80.8724 770.878 78.344 775.934C75.8148 781.623 73.2876 786.679 71.3913 792.368C69.4951 797.424 67.5989 803.113 65.7027 808.802C64.4395 813.858 63.1734 818.915 62.5424 823.971C62.5424 824.605 61.9094 825.234 61.9094 825.867C60.6462 831.556 60.6462 839.141 60.0131 842.934C59.3801 847.358 58.75 851.15 58.75 855.575C58.75 858.104 58.75 861.263 59.383 863.792C60.0161 868.216 60.6462 872.009 61.9123 875.801C63.1755 879.593 64.4416 883.386 66.3366 887.178V887.811C68.2329 891.604 70.7613 895.396 73.2894 899.189C75.8186 902.981 78.3461 906.774 81.5064 910.566C84.6667 913.726 88.4591 917.519 92.2516 920.679C96.044 924.471 99.8365 927.632 104.261 930.792C119.431 944.065 123.223 948.49 142.817 958.603C145.977 960.499 149.138 961.763 152.93 963.66C153.564 963.66 154.194 964.293 154.827 964.293C154.827 965.556 154.827 966.189 155.46 967.453C156.093 972.51 157.356 977.566 158.62 982.623C159.883 988.311 161.781 993.368 163.677 997.792C165.573 1001.59 166.837 1005.38 168.733 1009.17C169.366 1010.43 169.996 1011.7 170.629 1012.33C173.159 1017.39 175.686 1021.81 178.214 1026.24C181.375 1030.66 184.535 1035.08 187.695 1039.51C190.855 1043.3 194.648 1047.73 198.44 1051.52C202.233 1055.31 206.025 1058.47 210.45 1062.26C210.45 1062.26 211.083 1062.9 211.713 1062.9C215.505 1066.06 219.298 1069.22 223.09 1071.75C227.515 1074.91 231.939 1077.43 236.996 1079.96C241.42 1082.49 246.477 1085.02 251.533 1086.92C255.326 1088.81 259.75 1090.08 264.175 1091.34C264.808 1091.97 265.438 1091.97 266.704 1092.6C269.233 1093.24 272.392 1093.87 274.921 1094.5C273.025 1128.63 272.391 1160.87 277.45 1172.24C283.138 1184.89 310.95 1146.33 338.761 1102.08C334.968 1145.7 332.44 1196.89 338.761 1212.06C345.713 1227.87 383.638 1178.56 416.505 1124.21C864.642 1020.55 1273.59 1330.26 1316.57 1767.65C1308.35 1699.39 1224.29 1661.47 1185.73 1670.95C1166.77 1717.72 1134.54 1777.77 1082.71 1815.06C1087.13 1773.34 1085.24 1730.36 1076.39 1688.64C1062.48 1746.79 1035.3 1801.15 998.009 1847.93C937.962 1852.35 877.915 1823.28 846.312 1779.66C843.783 1777.77 843.152 1773.97 841.255 1771.45C839.359 1767.02 837.463 1762.6 836.199 1758.17C834.303 1753.75 833.039 1749.32 832.406 1744.9C831.773 1740.47 831.773 1736.05 831.773 1730.99C831.773 1727.83 831.773 1724.67 831.773 1721.51C832.406 1717.09 833.669 1712.66 834.934 1708.24C836.197 1703.81 837.463 1699.39 839.358 1694.97C841.887 1690.54 843.782 1686.12 846.943 1681.69C857.688 1651.35 857.688 1626.7 838.094 1612.16C834.302 1609.64 830.509 1607.74 826.085 1605.84C823.555 1605.21 820.396 1603.95 817.868 1603.31C815.972 1602.68 814.708 1602.05 812.811 1601.42C808.387 1600.15 803.962 1598.89 799.538 1598.26C795.113 1596.99 790.689 1596.36 786.264 1596.36C781.84 1595.73 776.783 1595.1 772.359 1595.1C769.199 1595.1 766.038 1595.73 762.878 1595.73C757.821 1595.73 753.397 1596.36 748.972 1597.63C744.548 1598.26 740.123 1598.89 735.699 1600.16C731.274 1601.42 726.85 1602.69 722.425 1604.58C718.001 1606.48 714.208 1608.37 709.784 1610.27C705.992 1612.17 702.199 1614.69 697.775 1616.59C550.502 1712.66 638.36 1937.68 738.859 2002.78C700.935 2009.74 662.379 2017.95 651.634 2026.17C651.001 2026.8 650.371 2027.43 650.371 2027.43C677.55 2043.87 705.993 2057.77 735.7 2069.78C776.152 2083.06 819.133 2095.07 838.095 2100.12V2100.76C890.557 2111.5 943.651 2115.29 997.376 2112.13C1277.38 2092.54 1506.82 1879.53 1548.54 1598.89C1549.8 1604.58 1551.07 1609.64 1552.33 1615.33C1554.23 1626.7 1556.76 1638.71 1558.02 1650.72V1651.36C1559.28 1657.04 1559.92 1662.73 1560.55 1667.79V1670.32C1561.18 1676.01 1561.81 1681.7 1561.81 1686.75C1562.45 1693.71 1563.08 1700.66 1563.08 1707.61V1717.72C1563.08 1720.88 1563.71 1724.68 1563.71 1727.84C1563.71 1731.63 1563.08 1735.42 1563.08 1739.21V1748.06C1563.08 1752.49 1562.44 1756.28 1562.44 1760.7C1562.44 1763.23 1562.44 1765.76 1561.81 1768.92C1561.81 1773.35 1561.18 1777.77 1561.18 1782.83C1560.54 1784.72 1560.54 1786.62 1560.54 1788.52C1559.91 1793.57 1559.28 1798 1558.65 1803.05C1558.65 1804.95 1558.65 1806.85 1558.01 1808.74C1557.38 1815.06 1556.12 1820.75 1555.49 1827.07V1827.71V1828.34C1554.22 1834.03 1552.96 1840.35 1551.69 1846.04V1847.93C1550.43 1853.62 1549.16 1859.31 1547.9 1865C1547.9 1865.63 1547.27 1866.89 1547.27 1867.53C1546 1873.22 1544.74 1878.9 1542.84 1884.59V1886.49C1540.95 1892.81 1539.05 1898.5 1537.79 1904.19C1537.15 1904.82 1537.15 1905.45 1537.15 1905.45C1535.26 1911.77 1533.36 1918.09 1531.47 1924.41C1528.94 1930.73 1527.04 1936.42 1524.51 1942.74C1521.98 1949.06 1520.09 1955.38 1517.56 1961.07C1515.03 1967.39 1512.5 1973.08 1509.98 1979.4H1509.34C1506.81 1985.09 1504.28 1991.41 1501.12 1997.1C1500.49 1999 1499.86 2000.26 1499.23 2001.53C1498.6 2002.16 1498.6 2002.79 1497.96 2003.42C1456.88 2086.22 1396.2 2158.91 1320.35 2215.8C1315.3 2218.96 1310.24 2222.75 1305.18 2226.54C1303.92 2227.8 1302.02 2228.44 1300.76 2229.7C1296.33 2232.86 1291.91 2236.02 1286.85 2239.18L1288.75 2242.98H1289.38C1298.23 2241.71 1307.08 2240.45 1315.93 2239.18H1316.56C1333 2236.65 1349.43 2233.49 1365.86 2230.33C1370.29 2229.7 1375.35 2228.44 1379.77 2227.17C1382.93 2226.54 1385.46 2225.91 1388.62 2225.28C1393.04 2224.64 1397.47 2223.38 1401.89 2222.75C1405.68 2221.49 1409.48 2220.85 1413.27 2219.59C1476.48 2204.42 1537.79 2183.56 1596.57 2158.91C1496.07 2296.07 1361.44 2406.68 1204.05 2479.37C1276.74 2474.31 1349.43 2462.3 1419.59 2442.08C1674.31 2366.86 1888.59 2195.57 2016.9 1964.86C1990.98 2110.87 1932.83 2249.93 1846.87 2371.28C1908.18 2330.83 1964.43 2284.06 2015.63 2230.96C2157.21 2083.06 2250.13 1895.34 2281.73 1693.71C2303.22 1793.57 2309.54 1896.6 2300.06 1998.36C2756.42 1361.87 2337.99 701.99 2162.9 528.171C2162.27 526.908 2161.64 526.275 2161.64 525.011C2161.01 525.644 2161.01 525.644 2161.01 526.274C2161.01 525.641 2161.01 525.641 2160.37 525.011C2160.37 532.596 2159.74 540.18 2159.11 547.765C2157.21 562.303 2155.32 576.208 2152.79 590.114C2149.63 604.02 2145.84 617.925 2142.04 631.831C2137.62 645.104 2132.56 659.009 2126.87 672.283C2121.19 684.924 2114.87 698.198 2107.91 710.839C2100.96 722.849 2093.38 735.49 2085.16 746.867C2076.94 758.877 2068.09 770.254 2059.24 780.999C2049.76 792.376 2039.65 802.489 2029.54 812.602C2023.22 818.291 2017.53 823.348 2011.21 828.404C2006.15 832.829 2001.73 836.621 1996.67 841.045C1985.29 849.894 1973.91 858.111 1961.27 865.696C1949.26 873.281 1936.62 880.866 1923.98 887.187C1910.71 893.507 1897.43 899.196 1884.16 904.884C1870.89 909.941 1856.98 914.365 1843.08 918.158C1829.17 921.95 1814.63 925.111 1800.73 927.639C1786.19 930.168 1771.65 931.431 1757.75 932.695C1747.63 933.328 1737.52 933.959 1727.41 933.959C1712.87 933.959 1698.33 932.695 1684.43 931.43C1669.89 930.166 1655.35 928.269 1641.45 925.109C1626.91 922.579 1613 918.788 1599.1 914.364H1598.46C1612.37 913.1 1626.28 911.834 1640.18 909.307C1654.72 906.777 1668.62 903.618 1682.53 899.826C1696.43 896.033 1710.34 891.609 1723.61 886.552C1737.52 881.496 1750.79 875.175 1763.43 868.854C1776.71 862.533 1788.72 855.581 1801.36 847.996C1813.37 839.779 1825.38 831.562 1836.75 822.713C1848.13 813.864 1858.88 804.383 1868.99 794.27C1879.74 784.789 1889.22 774.044 1898.7 763.299C1908.18 751.922 1917.03 740.544 1925.24 729.167C1926.51 727.271 1927.77 724.743 1929.04 722.846C1935.36 712.733 1941.68 702.62 1947.37 692.507C1954.32 679.866 1960.64 667.224 1966.33 653.951C1972.02 640.677 1977.07 627.404 1981.5 613.499C1985.92 600.225 1989.08 586.32 1992.24 572.414C1994.77 557.876 1997.3 543.971 1998.56 530.065C1999.83 515.528 2001.09 500.99 2001.09 487.085C2001.09 476.972 2000.46 466.859 1999.83 456.746C1998.57 442.208 1996.67 428.302 1994.77 414.397C1992.24 399.859 1989.09 385.954 1985.29 372.048C1980.87 358.775 1976.44 344.869 1971.39 331.596C1966.33 318.322 1960.01 305.049 1953.69 292.407C1946.74 279.766 1939.78 267.125 1932.2 255.116C1923.98 243.106 1915.76 231.729 1906.92 220.352C1897.44 209.606 1887.95 198.861 1877.84 188.116C1872.78 183.06 1867.1 177.371 1861.41 172.315C1832.96 150.192 1803.26 129.334 1773.55 110.372C1769.12 107.843 1765.33 105.947 1760.91 104.051C1740.05 90.7776 1720.45 83.8211 1700.86 77.5006Z",
        className: t,
      }),
    });
  }
  const Rk = oe("flex");
  function jk({ className: e, fillColor: t, ...r }) {
    return u.jsxs("svg", {
      viewBox: "0 0 2218 2500",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: U(Rk({ className: e })),
      ...r,
      children: [
        u.jsx("path", {
          d: "M1109.26 2500C1075.78 2500 1042.53 2491.22 1013.18 2474.32L707.348 2293.26C661.669 2267.71 683.958 2258.68 699.024 2253.47C759.928 2232.14 772.288 2227.33 837.297 2190.41C844.13 2186.51 853.073 2187.89 860.067 2192.02L1095.02 2331.44C1103.5 2336.02 1115.54 2336.02 1123.41 2331.44L2039.49 1802.65C2047.98 1797.83 2053.48 1787.97 2053.48 1777.89V720.774C2053.48 710.225 2047.98 700.824 2039.31 695.549L1123.59 167.223C1115.1 162.178 1103.87 162.178 1095.38 167.223L179.847 695.549C170.972 700.594 165.332 710.454 165.332 720.544V1777.66C165.332 1787.75 170.835 1797.38 179.549 1802.19L430.412 1947.11C566.621 2015.22 649.86 1934.96 649.86 1854.24V810.892C649.86 795.987 661.555 784.521 676.46 784.521H792.49C806.936 784.521 818.86 795.987 818.86 810.892V1854.7C818.86 2036.32 719.799 2140.65 547.589 2140.65C494.618 2140.65 452.884 2140.65 336.395 2083.32L96.0803 1944.82C36.6894 1910.43 0 1846.22 0 1777.66V720.544C0 651.752 36.6894 587.545 96.0803 553.608L1013.08 24.5933C1071.1 -8.19777 1148.15 -8.19777 1205.7 24.5933L2121.56 553.837C2180.72 588.004 2217.64 651.981 2217.64 720.774V1777.89C2217.64 1846.45 2180.72 1910.43 2121.56 1944.82L1205.7 2473.84C1176.35 2490.8 1143.1 2499.52 1109.16 2499.52",
          className: t,
        }),
        u.jsx("path", {
          d: "M1392.22 1771.58C991.391 1771.58 907.35 1587.58 907.35 1433.25C907.35 1418.58 919.182 1406.88 933.881 1406.88H1052.2C1065.27 1406.88 1076.28 1416.4 1078.34 1429.31C1096.23 1549.88 1149.43 1610.69 1391.81 1610.69C1584.89 1610.69 1666.98 1567.08 1666.98 1464.69C1666.98 1405.76 1643.59 1361.96 1343.65 1332.61C1092.79 1307.85 937.779 1252.58 937.779 1051.94C937.779 867.115 1093.71 757.047 1354.89 757.047C1648.18 757.047 1793.56 858.86 1811.9 1077.62C1812.59 1085.19 1809.84 1092.52 1804.79 1098.03C1799.75 1103.3 1792.64 1106.51 1785.3 1106.51H1666.29C1653.91 1106.51 1643.13 1097.8 1640.61 1085.88C1611.95 959.067 1542.69 918.48 1354.43 918.48C1143.7 918.48 1119.16 991.859 1119.16 1046.89C1119.16 1113.62 1148.05 1133.11 1432.4 1170.72C1713.99 1208.1 1847.67 1260.84 1847.67 1458.73C1847.67 1658.23 1681.2 1772.65 1390.89 1772.65",
          className: t,
        }),
      ],
    });
  }
  const Nk = oe("flex");
  function Fk({ className: e, fillColor: t, ...r }) {
    return u.jsxs("svg", {
      viewBox: "0 0 2500 2500",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: U(Nk({ className: e })),
      ...r,
      children: [
        u.jsx("g", {
          clipPath: "url(#clip0_108_242)",
          children: u.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M693.556 130.684C914.945 20.6265 1163.99 -21.3084 1409.21 10.182C1738.01 52.4048 2036.56 223.5 2239.21 485.835C2441.87 748.17 2532.02 1080.26 2489.84 1409.05C2458.38 1654.28 2354.91 1884.66 2192.51 2071.09C2030.11 2257.5 1816.07 2391.57 1577.48 2456.34C1338.88 2521.11 1086.43 2513.67 852.062 2434.97C617.691 2356.26 411.924 2209.82 260.783 2014.16C109.641 1818.52 19.9138 1582.43 2.94748 1335.78C-14.0189 1089.13 42.538 842.992 165.466 628.482C288.394 413.976 472.171 240.741 693.556 130.684ZM1759.71 488.635C1784.84 476.567 1812.34 470.287 1840.22 470.259C1882.9 470.123 1924.33 484.64 1957.59 511.384L1791.97 676.884C1790.52 678.335 1789.36 680.06 1788.57 681.957C1787.78 683.856 1787.38 685.891 1787.38 687.946C1787.38 690.002 1787.78 692.036 1788.57 693.935C1789.36 695.833 1790.52 697.557 1791.97 699.009L1918.72 825.759C1893.42 837.47 1865.83 843.36 1837.96 842.993C1810.09 842.626 1782.66 836.017 1757.68 823.642C1732.7 811.267 1710.82 793.454 1693.64 771.506C1676.47 749.558 1664.43 724.036 1658.41 696.82C1652.41 669.603 1652.58 641.386 1658.92 614.245C1665.26 587.103 1677.6 561.729 1695.05 539.991C1712.49 518.252 1734.59 500.703 1759.71 488.635ZM906.008 1331.23C905.008 1330.77 904.188 1329.99 903.703 1328.99C903.172 1327.99 903.031 1326.81 903.305 1325.7C903.586 1324.59 904.258 1323.63 905.203 1322.99L1025.08 1203.12L1109.2 1288.37L909.203 1331.49C908.141 1331.78 907.008 1331.69 906.008 1331.23ZM1980.34 532.876L1825.09 687.501L1946.84 809.251C1955.8 802.954 1964.17 795.837 1971.84 788.001C2005.2 754.407 2024.63 709.432 2026.2 662.108C2027.78 614.785 2011.39 568.617 1980.34 532.876ZM1666.95 818.259H1669.7C1672.85 818.407 1675.98 818.782 1679.08 819.384H1681.45C1693.24 821.751 1704.05 827.571 1712.53 836.087C1721.01 844.61 1726.77 855.462 1729.08 867.259C1729.7 868.759 1729.7 869.509 1729.7 871.759V878.509V882.634C1729.49 885.782 1729.07 888.907 1728.45 892.009C1728.32 892.554 1728.11 893.1 1727.91 893.645C1727.56 894.6 1727.2 895.554 1727.2 896.509C1726.63 898.587 1725.92 900.634 1725.08 902.634C1724.45 904.134 1723.83 905.634 1723.08 907.134C1721.75 909.767 1720.24 912.313 1718.58 914.759L1716.45 917.509C1714.22 920.407 1711.71 923.087 1708.95 925.509L1221.45 1353.38L1164.45 1296.38L1624.83 835.884C1627.46 833.313 1630.3 830.97 1633.33 828.884L1636.08 827.134C1638.39 825.681 1640.81 824.431 1643.33 823.384L1645.95 822.134C1649.3 820.884 1652.72 819.884 1656.2 819.134H1657.33C1660.5 818.524 1663.73 818.227 1666.95 818.259ZM1046.58 1181L1141.08 1275L1602.7 813.376C1617.73 798.688 1637.3 789.563 1658.2 787.501C1576.58 725.001 1487.58 741.376 1046.58 1181ZM1729.34 949.009L1734.96 943.509C1712.59 1080.01 1530.21 1265.13 1324.71 1459.51L1241.84 1376.76L1729.34 949.009ZM518.966 1945.62C519.22 1946.51 519.74 1947.29 520.455 1947.88C521.17 1948.45 522.047 1948.81 522.966 1948.87L735.466 1963.49L616.341 1844.37L519.966 1940.62C519.341 1941.27 518.916 1942.09 518.738 1942.97C518.562 1943.86 518.641 1944.77 518.966 1945.62ZM764.205 1947.87L638.581 1822.24L1026.95 1433.62L1214.45 1393.24L1301.95 1480.74C1171.58 1594.24 993.953 1707.87 773.705 1818.24C768.37 1821.01 764.109 1825.47 761.597 1830.92C759.084 1836.38 758.462 1842.52 759.83 1848.37L780.955 1938.62C781.531 1940.71 781.359 1942.95 780.468 1944.93C779.579 1946.91 778.027 1948.52 776.08 1949.49C774.216 1950.63 772.016 1951.09 769.854 1950.79C767.691 1950.49 765.696 1949.46 764.205 1947.87ZM1187.59 1366.75L1140.59 1319.75L1075.59 1384.63C1075.13 1385.19 1074.87 1385.9 1074.87 1386.63C1074.87 1387.36 1075.13 1388.06 1075.59 1388.63C1075.89 1389.29 1076.43 1389.83 1077.09 1390.13C1077.77 1390.42 1078.52 1390.47 1079.22 1390.25L1187.59 1366.75Z",
            className: t,
          }),
        }),
        u.jsx("defs", {
          children: u.jsx("clipPath", {
            id: "clip0_108_242",
            children: u.jsx("rect", {
              width: "2500",
              height: "2500",
              className: t,
            }),
          }),
        }),
      ],
    });
  }
  const Ik = oe("flex");
  function Mk({ className: e, fillColor: t, ...r }) {
    return u.jsxs("svg", {
      viewBox: "0 0 2473 2500",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: U(Ik({ className: e })),
      ...r,
      children: [
        u.jsx("path", {
          d: "M1221.62 0.0204485C1119.66 0.494204 1022.29 9.18989 936.619 24.35C684.232 68.9385 638.408 162.266 638.408 334.378V561.685H1234.83V637.455H638.408H414.576C241.24 637.455 89.461 741.64 41.9866 939.836C-12.7745 1167.01 -15.2034 1308.78 41.9866 1545.99C84.3824 1722.56 185.629 1848.37 358.966 1848.37H564.029V1575.88C564.029 1379.02 734.356 1205.38 936.619 1205.38H1532.35C1698.17 1205.38 1830.56 1068.84 1830.56 902.299V334.378C1830.56 172.744 1694.2 51.326 1532.35 24.35C1429.89 7.29484 1323.58 -0.453314 1221.62 0.0204485ZM899.082 182.84C960.688 182.84 1011 233.971 1011 296.841C1011 359.488 960.688 410.147 899.082 410.147C837.255 410.147 787.166 359.488 787.166 296.841C787.166 233.971 837.255 182.84 899.082 182.84Z",
          className: t,
        }),
        u.jsx("path", {
          d: "M1904.94 637.456V902.301C1904.94 1107.63 1730.86 1280.45 1532.35 1280.45H936.623C773.443 1280.45 638.412 1420.11 638.412 1583.53V2151.45C638.412 2313.08 778.964 2408.15 936.623 2454.53C1125.42 2510.04 1306.46 2520.07 1532.35 2454.53C1682.5 2411.05 1830.56 2323.56 1830.56 2151.45V1924.14H1234.83V1848.37H1830.56H2128.77C2302.11 1848.37 2366.7 1727.47 2426.98 1545.99C2489.25 1359.16 2486.6 1179.5 2426.98 939.838C2384.14 767.28 2302.33 637.456 2128.77 637.456H1904.94ZM1569.89 2075.68C1631.71 2075.68 1681.8 2126.34 1681.8 2188.99C1681.8 2251.86 1631.71 2302.99 1569.89 2302.99C1508.28 2302.99 1457.97 2251.86 1457.97 2188.99C1457.97 2126.34 1508.28 2075.68 1569.89 2075.68Z",
          className: t,
        }),
      ],
    });
  }
  const Dk = oe("flex");
  function M8({ className: e, fillColor: t, ...r }) {
    return u.jsxs("svg", {
      viewBox: "0 0 2808 2500",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: U(Dk({ className: e })),
      ...r,
      children: [
        u.jsx("path", {
          d: "M2807.23 1250.29C2807.23 1064.32 2574.34 888.075 2217.29 778.782C2299.68 414.855 2263.06 125.315 2101.7 32.6161C2064.51 10.872 2021.02 0.572205 1973.53 0.572205V128.176C1999.85 128.176 2021.02 133.326 2038.76 143.053C2116.58 187.686 2150.34 357.633 2124.02 576.219C2117.72 630.007 2107.42 686.656 2094.84 744.45C1982.68 716.983 1860.23 695.811 1731.49 682.078C1654.24 576.219 1574.13 480.087 1493.45 395.972C1679.99 222.591 1855.08 127.604 1974.1 127.604V0C1816.74 0 1610.75 112.154 1402.47 306.706C1194.19 113.298 988.195 2.28886 830.839 2.28886V129.892C949.285 129.892 1124.95 224.308 1311.49 396.544C1231.38 480.659 1151.27 576.219 1075.17 682.078C945.852 695.811 823.4 716.983 711.248 745.022C698.088 687.8 688.36 632.296 681.494 579.08C654.6 360.494 687.788 190.547 765.035 145.342C782.201 135.042 804.517 130.465 830.839 130.465V2.86107C782.774 2.86107 739.286 13.1609 701.521 34.905C540.732 127.604 504.683 416.571 587.652 779.354C231.742 889.219 0 1064.89 0 1250.29C0 1436.26 232.887 1612.5 589.941 1721.79C507.544 2085.72 544.165 2375.26 705.526 2467.96C742.72 2489.7 786.207 2500 834.272 2500C991.628 2500 1197.62 2387.85 1405.9 2193.29C1614.18 2386.7 1820.18 2497.71 1977.53 2497.71C2025.6 2497.71 2069.09 2487.41 2106.85 2465.67C2267.64 2372.97 2303.69 2084 2220.72 1721.22C2575.49 1611.92 2807.23 1435.68 2807.23 1250.29ZM2062.22 868.62C2041.05 942.435 2014.73 1018.54 1984.97 1094.64C1961.51 1048.87 1936.91 1003.09 1910.01 957.313C1883.69 911.536 1855.65 866.903 1827.62 823.415C1908.87 835.431 1987.26 850.309 2062.22 868.62ZM1800.15 1478.03C1755.52 1555.28 1709.74 1628.52 1662.25 1696.61C1576.99 1704.05 1490.59 1708.06 1403.61 1708.06C1317.21 1708.06 1230.81 1704.05 1146.12 1697.18C1098.63 1629.09 1052.28 1556.42 1007.65 1479.74C964.162 1404.78 924.68 1328.68 888.631 1252C924.108 1175.33 964.162 1098.65 1007.08 1023.69C1051.71 946.441 1097.49 873.197 1144.98 805.104C1230.24 797.665 1316.64 793.66 1403.61 793.66C1490.02 793.66 1576.42 797.665 1661.11 804.532C1708.6 872.625 1754.95 945.296 1799.58 1021.97C1843.07 1096.93 1882.55 1173.04 1918.6 1249.71C1882.55 1326.39 1843.07 1403.07 1800.15 1478.03ZM1984.97 1403.64C2015.87 1480.32 2042.19 1556.99 2063.94 1631.38C1988.98 1649.69 1910.01 1665.14 1828.19 1677.16C1856.23 1633.1 1884.26 1587.89 1910.59 1541.54C1936.91 1495.77 1961.51 1449.42 1984.97 1403.64ZM1404.76 2014.19C1351.54 1959.26 1298.33 1898.03 1245.69 1831.08C1297.18 1833.37 1349.83 1835.09 1403.04 1835.09C1456.83 1835.09 1510.04 1833.94 1562.11 1831.08C1510.62 1898.03 1457.4 1959.26 1404.76 2014.19ZM979.039 1677.16C897.786 1665.14 819.395 1650.26 744.436 1631.95C765.608 1558.14 791.929 1482.03 821.683 1405.93C845.144 1451.71 869.749 1497.48 896.642 1543.26C923.536 1589.04 951.001 1633.67 979.039 1677.16ZM1401.9 486.381C1455.11 541.314 1508.33 602.541 1560.97 669.49C1509.47 667.201 1456.83 665.484 1403.61 665.484C1349.83 665.484 1296.61 666.628 1244.54 669.49C1296.04 602.541 1349.25 541.314 1401.9 486.381ZM978.467 823.415C950.429 867.475 922.391 912.68 896.07 959.029C869.749 1004.81 845.144 1050.58 821.683 1096.36C790.785 1019.68 764.463 943.008 742.72 868.62C817.678 850.881 896.642 835.431 978.467 823.415ZM460.624 1539.83C258.064 1453.42 127.029 1340.12 127.029 1250.29C127.029 1160.45 258.064 1046.58 460.624 960.746C509.833 939.574 563.62 920.691 619.124 902.953C651.739 1015.11 694.654 1131.84 747.869 1251.43C695.227 1370.45 652.884 1486.61 620.84 1598.19C564.192 1580.45 510.405 1561 460.624 1539.83ZM768.469 2357.52C690.649 2312.89 656.889 2142.94 683.21 1924.35C689.505 1870.57 699.804 1813.92 712.393 1756.12C824.545 1783.59 946.996 1804.76 1075.74 1818.49C1152.99 1924.35 1233.1 2020.48 1313.78 2104.6C1127.24 2277.98 952.146 2372.97 833.128 2372.97C807.378 2372.4 785.635 2367.25 768.469 2357.52ZM2125.73 1921.49C2152.63 2140.08 2119.44 2310.02 2042.19 2355.23C2025.03 2365.53 2002.71 2370.11 1976.39 2370.11C1857.94 2370.11 1682.28 2275.69 1495.74 2103.46C1575.85 2019.34 1655.96 1923.78 1732.06 1817.92C1861.38 1804.19 1983.83 1783.02 2095.98 1754.98C2109.14 1812.77 2119.44 1868.28 2125.73 1921.49ZM2346.03 1539.83C2296.82 1561 2243.04 1579.88 2187.53 1597.62C2154.92 1485.47 2112 1368.73 2058.79 1249.14C2111.43 1130.12 2153.77 1013.96 2185.82 902.38C2242.46 920.119 2296.25 939.574 2346.6 960.746C2549.16 1047.15 2680.2 1160.45 2680.2 1250.29C2679.63 1340.12 2548.59 1453.99 2346.03 1539.83Z",
          className: t,
        }),
        u.jsx("path", {
          d: "M1403.04 1511.79C1547.46 1511.79 1664.54 1394.71 1664.54 1250.29C1664.54 1105.86 1547.46 988.784 1403.04 988.784C1258.62 988.784 1141.54 1105.86 1141.54 1250.29C1141.54 1394.71 1258.62 1511.79 1403.04 1511.79Z",
          className: t,
        }),
      ],
    });
  }
  const Gk = oe("flex");
  function Uk({ className: e, fillColor: t, ...r }) {
    return u.jsxs("svg", {
      viewBox: "0 0 2503 2500",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: U(Gk({ className: e })),
      ...r,
      children: [
        u.jsx("g", {
          clipPath: "url(#clip0_108_181)",
          children: u.jsx("path", {
            d: "M2278.35 144.33C2243.57 227.76 2198.55 306.543 2144.33 378.866C2028.24 258.772 1889.25 163.183 1735.57 97.7541C1581.89 32.3251 1416.65 -1.6144 1249.62 -2.05618C1082.59 -2.49796 917.175 30.567 763.151 95.1821C609.128 159.797 469.629 254.65 352.91 374.128C236.191 493.606 144.622 635.281 83.6214 790.772C22.6209 946.262 -6.57166 1112.41 -2.22916 1279.38C2.11334 1446.35 39.9027 1610.76 108.903 1762.87C177.903 1914.97 276.713 2051.7 399.485 2164.95L445.876 2206.19C621.926 2354.66 835.635 2451.51 1063.34 2486.01C1291.04 2520.52 1523.85 2491.32 1735.98 2401.67C1948.11 2312.01 2131.29 2165.39 2265.23 1978.05C2399.17 1790.7 2478.64 1569.94 2494.85 1340.21C2530.93 1025.77 2435.57 623.711 2278.35 144.33ZM579.897 2175.26C566.646 2191.54 548.864 2203.53 528.8 2209.71C508.736 2215.9 487.29 2215.99 467.172 2209.99C447.054 2203.98 429.167 2192.15 415.772 2175.99C402.376 2159.82 394.074 2140.05 391.913 2119.16C389.753 2098.28 393.832 2077.22 403.634 2058.66C413.437 2040.09 428.523 2024.85 446.986 2014.85C465.449 2004.86 486.46 2000.56 507.365 2002.51C528.269 2004.45 548.129 2012.55 564.433 2025.77C585.807 2043.88 599.351 2069.54 602.233 2097.41C605.116 2125.27 597.112 2153.16 579.897 2175.26ZM2270.62 1801.55C1963.92 2211.34 1304.12 2072.17 884.021 2092.78C884.021 2092.78 809.278 2097.94 734.536 2108.25C734.536 2108.25 762.887 2095.36 798.969 2082.47C1095.36 1979.38 1234.54 1958.76 1414.95 1865.98C1752.58 1693.3 2090.21 1314.43 2157.22 922.68C2028.35 1298.97 1636.6 1623.71 1280.93 1755.15C1036.08 1845.36 595.361 1932.99 595.361 1932.99L577.32 1922.68C278.351 1775.77 268.041 1126.29 814.433 917.526C1054.12 824.742 1280.93 876.289 1541.24 814.433C1817.01 750 2136.6 543.814 2265.46 273.196C2409.79 708.763 2585.05 1384.02 2270.62 1801.55Z",
            className: t,
          }),
        }),
        u.jsx("defs", {
          children: u.jsx("clipPath", {
            id: "clip0_108_181",
            children: u.jsx("rect", {
              width: "2502.58",
              height: "2500",
              className: t,
            }),
          }),
        }),
      ],
    });
  }
  const $k = oe("flex");
  function Hk({ className: e, fillColor: t, ...r }) {
    return u.jsx("svg", {
      viewBox: "0 0 4167 2500",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: U($k({ className: e })),
      ...r,
      children: u.jsx("path", {
        d: "M2083.28 0C1527.73 0 1180.53 277.773 1041.66 833.36C1250 555.547 1493.08 451.377 1770.85 520.85C1929.33 560.43 2042.6 675.47 2168 802.719C2372.24 1010.03 2608.66 1250 3125.02 1250C3680.57 1250 4027.77 972.227 4166.68 416.64C3958.34 694.453 3715.26 798.623 3437.49 729.15C3279.01 689.57 3165.74 574.53 3040.34 447.281C2836.06 239.965 2599.68 0 2083.28 0ZM1041.66 1250C486.113 1250 138.906 1527.77 0 2083.36C208.34 1805.55 451.377 1701.38 729.15 1770.85C887.67 1810.51 1000.9 1925.47 1126.3 2052.72C1330.54 2260.03 1567 2500 2083.32 2500C2638.91 2500 2986.11 2222.23 3125.02 1666.64C2916.68 1944.45 2673.6 2048.62 2395.83 1979.15C2237.35 1939.57 2124.08 1824.53 1998.68 1697.32C1794.44 1489.97 1558.02 1250 1041.66 1250Z",
        className: t,
      }),
    });
  }
  const Vk = oe("flex");
  function zk({ className: e, fillColor: t, ...r }) {
    return u.jsxs("svg", {
      viewBox: "0 0 2500 2500",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: U(Vk({ className: e })),
      ...r,
      children: [
        u.jsx("g", {
          clipPath: "url(#clip0_98_8)",
          children: u.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M0 0V2500H2500V0H0ZM548.125 1356.25V1254.38L550 1255V1152.5L987.5 1150.63C1228.12 1150.63 1426.25 1151.25 1426.25 1153.13C1428.75 1154.38 1428.75 1200 1428.75 1256.25V1356.25H1103.75V2281.25H873.125V1356.25H548.125ZM2165 1239.38C2121.25 1193.75 2072.5 1165 2008.75 1150L2010 1148.75C1966.88 1137.5 1863.75 1133.75 1820 1142.5C1685 1167.5 1590.62 1255 1563.75 1380C1555 1415.63 1558.12 1504.38 1567.5 1540.63C1580 1582.5 1606.88 1633.13 1636.25 1665.63C1687.5 1719.38 1742.5 1754.38 1871.88 1809.38C1984.38 1859.38 2024.38 1881.88 2044.38 1909.38C2058.75 1931.25 2063.12 1944.38 2063.12 1973.13C2063.12 2004.38 2053.12 2026.88 2030 2048.13C1976.25 2096.88 1867.5 2102.5 1786.25 2060.63C1759.38 2045.63 1713.12 2001.88 1692.5 1969.38L1676.25 1947.5L1605.62 1988.75L1511.88 2043.13L1488.12 2058.13C1485.62 2062.5 1530 2129.38 1553.12 2154.38C1611.88 2218.75 1707.5 2268.75 1807.5 2287.5C1854.38 2295.63 1954.38 2296.88 1998.13 2289.38C2137.5 2266.25 2235 2195.63 2275 2091.25C2310.62 1995.63 2298.75 1868.13 2245.62 1786.88C2198.75 1714.38 2121.25 1663.75 1942.5 1586.88C1845.62 1544.38 1814.38 1523.75 1797.5 1489.38C1790 1473.13 1786.25 1461.88 1786.25 1441.88C1786.25 1376.25 1836.25 1336.88 1911.25 1341.88C1963.12 1345.63 1996.25 1365.63 2028.75 1411.88C2038.75 1428.13 2048.75 1438.75 2051.25 1436.88C2116.88 1396.25 2225 1323.13 2225 1319.38C2222.5 1308.13 2188.12 1264.38 2165 1239.38Z",
            className: t,
          }),
        }),
        u.jsx("defs", {
          children: u.jsx("clipPath", {
            id: "clip0_98_8",
            children: u.jsx("rect", {
              width: "2500",
              height: "2500",
              className: t,
            }),
          }),
        }),
      ],
    });
  }
  const Bk = oe("flex");
  function Wk({ className: e, fillColor: t, ...r }) {
    return u.jsxs("svg", {
      viewBox: "0 0 2502 2488",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: U(Bk({ className: e })),
      ...r,
      children: [
        u.jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M1774.8 2476.93C1814.17 2492.27 1859.07 2491.28 1898.81 2472.16L2413.52 2224.49C2467.6 2198.47 2502 2143.73 2502 2083.68V404.332C2502 344.282 2467.61 289.544 2413.52 263.519L1898.81 15.8432C1846.65 -9.25394 1785.61 -3.10671 1739.84 30.173C1733.3 34.927 1727.07 40.235 1721.22 46.0845L735.878 945.037L306.68 619.239C266.725 588.912 210.841 591.397 173.733 625.152L36.0758 750.372C-9.31379 791.659 -9.36581 863.067 35.9633 904.424L408.178 1244L35.9633 1583.58C-9.36581 1624.93 -9.31379 1696.34 36.0758 1737.63L173.733 1862.85C210.841 1896.61 266.725 1899.09 306.68 1868.76L735.878 1542.97L1721.22 2441.92C1736.81 2457.51 1755.12 2469.26 1774.8 2476.93ZM1877.38 676.472L1129.73 1244L1877.38 1811.53V676.472Z",
          className: t,
        }),
        u.jsx("path", {
          d: "M2413.54 263.904L1898.42 15.8878C1838.8 -12.82 1767.54 -0.710438 1720.75 46.0825L34.4645 1583.58C-10.8923 1624.93 -10.8402 1696.34 34.577 1737.63L172.318 1862.85C209.448 1896.6 265.368 1899.09 305.345 1868.76L2336.02 328.247C2404.15 276.564 2502 325.154 2502 410.667V404.687C2502 344.662 2467.62 289.944 2413.54 263.904Z",
          className: t,
        }),
        u.jsx("path", {
          d: "M2413.54 2224.09L1898.42 2472.11C1838.8 2500.82 1767.54 2488.71 1720.75 2441.92L34.4645 904.422C-10.8923 863.067 -10.8402 791.657 34.577 750.369L172.318 625.149C209.448 591.394 265.368 588.909 305.345 619.237L2336.02 2159.75C2404.15 2211.43 2502 2162.84 2502 2077.33V2083.31C2502 2143.34 2467.62 2198.05 2413.54 2224.09Z",
          className: t,
        }),
        u.jsx("path", {
          d: "M1898.45 2472.16C1838.8 2500.85 1767.55 2488.71 1720.75 2441.91C1778.41 2499.57 1877 2458.74 1877 2377.19V110.803C1877 29.259 1778.41 -11.5774 1720.75 46.0825C1767.55 -0.714664 1838.8 -12.8424 1898.45 15.8401L2413.47 263.517C2467.59 289.542 2502 344.279 2502 404.329V2083.68C2502 2143.73 2467.59 2198.46 2413.47 2224.49L1898.45 2472.16Z",
          className: t,
        }),
        u.jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M1773.28 2476.93C1812.65 2492.26 1857.55 2491.28 1897.29 2472.16L2412 2224.49C2466.08 2198.47 2500.48 2143.73 2500.48 2083.68V404.332C2500.48 344.279 2466.09 289.542 2412 263.517L1897.29 15.8417C1845.14 -9.25546 1784.09 -3.10824 1738.32 30.1713C1731.78 34.9255 1725.55 40.2335 1719.7 46.083L734.357 945.034L305.16 619.239C265.207 588.909 209.321 591.397 172.214 625.149L34.5563 750.369C-10.8333 791.659 -10.8854 863.067 34.4438 904.422L406.657 1244L34.4438 1583.58C-10.8854 1624.93 -10.8333 1696.34 34.5563 1737.63L172.214 1862.85C209.321 1896.6 265.207 1899.09 305.16 1868.76L734.357 1542.96L1719.7 2441.92C1735.29 2457.51 1753.59 2469.26 1773.28 2476.93ZM1875.86 676.472L1128.21 1244L1875.86 1811.53V676.472Z",
          className: t,
        }),
      ],
    });
  }
  const qk = oe("flex border border-edge-100 mt-[1rem]");
  function _i({ className: e, children: t, heading: r, ...n }) {
    return u.jsx("div", {
      className: U(qk({ className: e })),
      ...n,
      children: u.jsxs("div", {
        className:
          "flex flex-col flex-1 translate-x-[0.5rem] translate-y-[-0.5rem] bg-base-100 items-start border border-edge-100 p-[1rem]",
        children: [
          r,
          u.jsx("div", {
            className: "flex items-start flex-wrap gap-3",
            children: t,
          }),
        ],
      }),
    });
  }
  function Qe({ name: e, children: t }) {
    return u.jsx(it, {
      children: u.jsxs(st, {
        className: "flex-col justify-center h-[7rem] w-[7rem]",
        children: [
          u.jsx("div", {
            className:
              "flex justify-center items-center min-h-[3.5rem] min-w-[3.5rem] max-h-[3.5rem] max-w-[3.5rem] z-10",
            children: t,
          }),
          u.jsx("div", { className: "flex z-10 text-[11pt]", children: e }),
          u.jsx(ot, {}),
        ],
      }),
    });
  }
  const Si = 0.3,
    ki = 0.7;
  function Zk() {
    return u.jsx(ja, {
      children: u.jsx("div", {
        className: "flex flex-1 flex-col items-center",
        children: u.jsxs("div", {
          className: "flex flex-col w-full max-w-[55rem] p-[2rem] space-y-10",
          children: [
            u.jsxs(Nt, {
              className: "text-[23pt] mb-[1rem]",
              variant: "primary",
              children: [
                u.jsx(ur, { children: u.jsx(Ee, { icon: E6 }) }),
                u.jsx(jt, { children: "Skills" }),
              ],
            }),
            u.jsxs(_i, {
              style: {
                animationDelay: `${Si * 0}s`,
                animationDuration: `${ki}s`,
              },
              className: "animate-[fadeInLeft_ease] fill-mode-backward",
              heading: u.jsxs(Nt, {
                className: "text-[20pt] mb-[1rem]",
                variant: "edge-100",
                children: [
                  u.jsx(ur, { children: u.jsx(Ee, { icon: b6 }) }),
                  u.jsx(jt, { children: "Languages" }),
                ],
              }),
              children: [
                u.jsx(Qe, {
                  name: "HTML",
                  children: u.jsx(_k, {
                    className: "max-h-full max-w-full",
                    fillColor: "fill-edge-100 group-hover/button:fill-base-100",
                  }),
                }),
                u.jsx(Qe, {
                  name: "CSS",
                  children: u.jsx(mk, {
                    className: "max-h-full max-w-full",
                    fillColor: "fill-edge-100 group-hover/button:fill-base-100",
                  }),
                }),
                u.jsx(Qe, {
                  name: "Typescript",
                  children: u.jsx(zk, {
                    className: "max-h-full max-w-full",
                    fillColor: "fill-edge-100 group-hover/button:fill-base-100",
                  }),
                }),
                u.jsx(Qe, {
                  name: "Python",
                  children: u.jsx(Mk, {
                    className: "max-h-full max-w-full",
                    fillColor: "fill-edge-100 group-hover/button:fill-base-100",
                  }),
                }),
                u.jsx(Qe, {
                  name: "Java",
                  children: u.jsx(kk, {
                    className: "max-h-full max-w-full",
                    fillColor: "fill-edge-100 group-hover/button:fill-base-100",
                  }),
                }),
              ],
            }),
            u.jsxs(_i, {
              style: {
                animationDelay: `${Si * 1}s`,
                animationDuration: `${ki}s`,
              },
              className: "animate-[fadeInLeft_ease] fill-mode-backward",
              heading: u.jsxs(Nt, {
                className: "text-[20pt] mb-[1rem]",
                variant: "edge-100",
                children: [
                  u.jsx(ur, { children: u.jsx(Ee, { icon: yg }) }),
                  u.jsx(jt, { children: "Front-End" }),
                ],
              }),
              children: [
                u.jsx(Qe, {
                  name: "React JS",
                  children: u.jsx(M8, {
                    className: "max-h-full max-w-full",
                    fillColor: "fill-edge-100 group-hover/button:fill-base-100",
                  }),
                }),
                u.jsx(Qe, {
                  name: "React Native",
                  children: u.jsx(M8, {
                    className: "max-h-full max-w-full",
                    fillColor: "fill-edge-100 group-hover/button:fill-base-100",
                  }),
                }),
                u.jsx(Qe, {
                  name: "Tailwind CSS",
                  children: u.jsx(Hk, {
                    className: "max-h-full max-w-full",
                    fillColor: "fill-edge-100 group-hover/button:fill-base-100",
                  }),
                }),
              ],
            }),
            u.jsxs(_i, {
              style: {
                animationDelay: `${Si * 2}s`,
                animationDuration: `${ki}s`,
              },
              className: "animate-[fadeInLeft_ease] fill-mode-backward",
              heading: u.jsxs(Nt, {
                className: "text-[20pt] mb-[1rem]",
                variant: "edge-100",
                children: [
                  u.jsx(ur, { children: u.jsx(Ee, { icon: bg }) }),
                  u.jsx(jt, { children: "Back-End" }),
                ],
              }),
              children: [
                u.jsx(Qe, {
                  name: "Node JS",
                  children: u.jsx(jk, {
                    className: "max-h-full max-w-full",
                    fillColor: "fill-edge-100 group-hover/button:fill-base-100",
                  }),
                }),
                u.jsx(Qe, {
                  name: "Nest JS",
                  children: u.jsx(Lk, {
                    className: "max-h-full max-w-full",
                    fillColor: "fill-edge-100 group-hover/button:fill-base-100",
                  }),
                }),
                u.jsx(Qe, {
                  name: "Django",
                  children: u.jsx(vk, {
                    className: "max-h-full max-w-full",
                    fillColor: "fill-edge-100 group-hover/button:fill-base-100",
                  }),
                }),
                u.jsx(Qe, {
                  name: "Spring Boot",
                  children: u.jsx(Uk, {
                    className: "max-h-full max-w-full",
                    fillColor: "fill-edge-100 group-hover/button:fill-base-100",
                  }),
                }),
              ],
            }),
            u.jsxs(_i, {
              style: {
                animationDelay: `${Si * 3}s`,
                animationDuration: `${ki}s`,
              },
              className: "animate-[fadeInLeft_ease] fill-mode-backward",
              heading: u.jsxs(Nt, {
                className: "text-[20pt] mb-[1rem]",
                variant: "edge-100",
                children: [
                  u.jsx(ur, { children: u.jsx(Ee, { icon: Tg }) }),
                  u.jsx(jt, { children: "Tools" }),
                ],
              }),
              children: [
                u.jsx(Qe, {
                  name: "VS Code",
                  children: u.jsx(Wk, {
                    className: "max-h-full max-w-full",
                    fillColor: "fill-edge-100 group-hover/button:fill-base-100",
                  }),
                }),
                u.jsx(Qe, {
                  name: "Postman",
                  children: u.jsx(Fk, {
                    className: "max-h-full max-w-full",
                    fillColor: "fill-edge-100 group-hover/button:fill-base-100",
                  }),
                }),
                u.jsx(Qe, {
                  name: "Figma",
                  children: u.jsx(Ck, {
                    className: "max-h-full max-w-full",
                    fillColor: "fill-edge-100 group-hover/button:fill-base-100",
                  }),
                }),
              ],
            }),
            u.jsxs(_i, {
              style: {
                animationDelay: `${Si * 4}s`,
                animationDuration: `${ki}s`,
              },
              className: "animate-[fadeInLeft_ease] fill-mode-backward",
              heading: u.jsxs(Nt, {
                className: "text-[20pt] mb-[1rem]",
                variant: "edge-100",
                children: [
                  u.jsx(ur, { children: u.jsx(Ee, { icon: Ag }) }),
                  u.jsx(jt, { children: "Other" }),
                ],
              }),
              children: [
                u.jsx(Qe, {
                  name: "Graphql",
                  children: u.jsx(Tk, {
                    className: "max-h-full max-w-full",
                    fillColor: "fill-edge-100 group-hover/button:fill-base-100",
                  }),
                }),
                u.jsx(Qe, {
                  name: "Git",
                  children: u.jsx(Ek, {
                    className: "max-h-full max-w-full",
                    fillColor: "fill-edge-100 group-hover/button:fill-base-100",
                  }),
                }),
                u.jsx(Qe, {
                  name: "Linux",
                  children: u.jsx(Ak, {
                    className: "max-h-full max-w-full",
                    fillColor: "fill-edge-100 group-hover/button:fill-base-100",
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    });
  }
  const Kk = oe("flex");
  function D8({ className: e, fillColor: t, ...r }) {
    return u.jsxs("svg", {
      viewBox: "0 0 2985 2838",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: U(Kk({ className: e })),
      ...r,
      children: [
        u.jsx("path", {
          d: "M2813.95 2832H2600V2501H2802.97C2847.38 2501 2885.52 2509.63 2917.39 2526.89C2949.26 2543.84 2965.2 2565.26 2965.2 2591.15C2965.2 2623.82 2939.86 2646.78 2889.19 2660.03V2661.88C2917.92 2667.42 2940.91 2677.06 2958.15 2690.77C2975.39 2704.48 2984 2720.13 2984 2737.69C2984 2764.81 2967.29 2787.31 2933.86 2805.19C2901.46 2823.06 2861.49 2832 2813.95 2832ZM2806.1 2541.68H2672.1V2642.92H2802.97C2828.57 2642.92 2849.99 2637.84 2867.23 2627.67C2884.47 2617.19 2893.1 2605.32 2893.1 2592.07C2893.1 2579.13 2884.75 2567.42 2868.01 2556.94C2851.3 2546.77 2830.67 2541.68 2806.1 2541.68ZM2813.95 2682.68H2672.1V2791.32H2817.07C2843.2 2791.32 2865.4 2785.93 2883.69 2775.14C2901.46 2764.35 2910.34 2751.56 2910.34 2736.77C2910.34 2722.28 2901.19 2709.65 2882.91 2698.86C2864.62 2688.07 2841.64 2682.68 2813.95 2682.68Z",
          className: t,
        }),
        u.jsx("path", {
          d: "M1986.14 2682.68V2832H1914V2501H1986.14V2642.92H2266.86V2501H2339V2832H2266.86V2682.68H1986.14Z",
          className: t,
        }),
        u.jsx("path", {
          d: "M1655 2541.68H1498.49V2832H1426.51V2541.68H1270V2501H1655V2541.68Z",
          className: t,
        }),
        u.jsx("path", {
          d: "M1010 2746.4C1010 2774.13 992.77 2796.4 958.326 2813.22C923.374 2829.74 880.925 2838 830.994 2838C786.564 2838 747.364 2830.33 713.411 2814.99C679.458 2799.65 655.982 2778.7 643 2752.15L708.909 2736.22C713.411 2745.66 719.64 2754.22 727.629 2761.89C735.617 2769.56 744.994 2776.12 755.725 2781.58C766.456 2787.04 778.321 2791.31 791.303 2794.41C804.285 2797.51 818.012 2799.06 832.5 2799.06C863.948 2799.06 889.658 2794.26 909.631 2784.68C929.62 2775.09 939.606 2762.33 939.606 2746.4C939.606 2733.12 931.363 2721.77 914.878 2712.33C899.408 2703.18 870.448 2694.33 827.998 2685.78C785.058 2676.63 758.349 2670.43 747.855 2667.19C690.934 2650.08 662.482 2624.86 662.482 2591.52C662.482 2568.21 678.205 2548.3 709.653 2531.78C741.609 2515.26 780.809 2507 827.253 2507C868.196 2507 903.639 2513.2 933.614 2525.59C963.573 2537.68 983.545 2552.87 993.531 2571.16L929.112 2587.09C923.12 2575.29 911.256 2565.49 893.534 2557.67C875.813 2549.85 854.216 2545.94 828.743 2545.94C801.78 2545.94 779.066 2550.37 760.583 2559.22C742.117 2567.48 732.875 2578.24 732.875 2591.52C732.875 2602.44 740.12 2611.88 754.591 2619.84C770.569 2627.81 805.284 2637.25 858.701 2648.16C913.134 2659.08 951.962 2672.43 975.167 2688.21C998.389 2703.99 1010 2723.39 1010 2746.4Z",
          className: t,
        }),
        u.jsx("path", {
          d: "M160 2832C112.101 2832 73.4595 2820.24 44.0751 2796.73C14.6922 2773.52 0 2742.77 0 2704.48V2501H55.5479V2706.29C55.5479 2732.82 64.8047 2753.77 83.3211 2769.15C101.836 2784.52 127.396 2792.21 160 2792.21C192.604 2792.21 218.164 2784.52 236.679 2769.15C255.195 2753.77 264.454 2732.82 264.454 2706.29V2501H320V2704.48C320 2743.67 305.51 2774.72 276.528 2797.63C247.547 2820.54 208.705 2832 160 2832Z",
          className: t,
        }),
        u.jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M2984.5 1295V1669.5H0V1295H2984.5ZM2821 1626V1363.5C2825.84 1354.02 2829.96 1350.62 2839.5 1347.5H2919.5C2929.97 1351.21 2933.78 1354.8 2937.5 1363.5V1626C2932.54 1633.32 2928.78 1636.92 2919.5 1642H2839.5C2828.84 1639.21 2824.5 1635.99 2821 1626ZM2684.5 1626V1363.5C2689.34 1354.02 2693.46 1350.62 2703 1347.5H2783C2793.47 1351.21 2797.28 1354.8 2801 1363.5V1626C2796.04 1633.32 2792.28 1636.92 2783 1642H2703C2692.34 1639.21 2688 1635.99 2684.5 1626ZM2546.5 1626V1363.5C2551.34 1354.02 2555.46 1350.62 2565 1347.5H2645C2655.47 1351.21 2659.28 1354.8 2663 1363.5V1626C2658.04 1633.32 2654.28 1636.92 2645 1642H2565C2554.34 1639.21 2550 1635.99 2546.5 1626ZM2413 1626V1363.5C2417.84 1354.02 2421.96 1350.62 2431.5 1347.5H2511.5C2521.97 1351.21 2525.78 1354.8 2529.5 1363.5V1626C2524.54 1633.32 2520.78 1636.92 2511.5 1642H2431.5C2420.84 1639.21 2416.5 1635.99 2413 1626ZM2278 1626V1363.5C2282.84 1354.02 2286.96 1350.62 2296.5 1347.5H2376.5C2386.97 1351.21 2390.78 1354.8 2394.5 1363.5V1626C2389.54 1633.32 2385.78 1636.92 2376.5 1642H2296.5C2285.84 1639.21 2281.5 1635.99 2278 1626ZM2146 1626V1363.5C2150.84 1354.02 2154.96 1350.62 2164.5 1347.5H2244.5C2254.97 1351.21 2258.78 1354.8 2262.5 1363.5V1626C2257.54 1633.32 2253.78 1636.92 2244.5 1642H2164.5C2153.84 1639.21 2149.5 1635.99 2146 1626ZM2016.5 1626V1363.5C2021.34 1354.02 2025.46 1350.62 2035 1347.5H2115C2125.47 1351.21 2129.28 1354.8 2133 1363.5V1626C2128.04 1633.32 2124.28 1636.92 2115 1642H2035C2024.34 1639.21 2020 1635.99 2016.5 1626ZM1881.5 1626V1363.5C1886.34 1354.02 1890.46 1350.62 1900 1347.5H1980C1990.47 1351.21 1994.28 1354.8 1998 1363.5V1626C1993.04 1633.32 1989.28 1636.92 1980 1642H1900C1889.34 1639.21 1885 1635.99 1881.5 1626ZM1751 1626V1363.5C1755.84 1354.02 1759.96 1350.62 1769.5 1347.5H1849.5C1859.97 1351.21 1863.78 1354.8 1867.5 1363.5V1626C1862.54 1633.32 1858.78 1636.92 1849.5 1642H1769.5C1758.84 1639.21 1754.5 1635.99 1751 1626ZM1618.5 1626V1363.5C1623.34 1354.02 1627.46 1350.62 1637 1347.5H1717C1727.47 1351.21 1731.28 1354.8 1735 1363.5V1626C1730.04 1633.32 1726.28 1636.92 1717 1642H1637C1626.34 1639.21 1622 1635.99 1618.5 1626ZM1485 1626V1363.5C1489.84 1354.02 1493.96 1350.62 1503.5 1347.5H1583.5C1593.97 1351.21 1597.78 1354.8 1601.5 1363.5V1626C1596.54 1633.32 1592.78 1636.92 1583.5 1642H1503.5C1492.84 1639.21 1488.5 1635.99 1485 1626ZM1351.5 1626V1363.5C1356.34 1354.02 1360.46 1350.62 1370 1347.5H1450C1460.47 1351.21 1464.28 1354.8 1468 1363.5V1626C1463.04 1633.32 1459.28 1636.92 1450 1642H1370C1359.34 1639.21 1355 1635.99 1351.5 1626ZM1218 1626V1363.5C1222.84 1354.02 1226.96 1350.62 1236.5 1347.5H1316.5C1326.97 1351.21 1330.78 1354.8 1334.5 1363.5V1626C1329.54 1633.32 1325.78 1636.92 1316.5 1642H1236.5C1225.84 1639.21 1221.5 1635.99 1218 1626ZM1080 1626V1363.5C1084.84 1354.02 1088.96 1350.62 1098.5 1347.5H1178.5C1188.97 1351.21 1192.78 1354.8 1196.5 1363.5V1626C1191.54 1633.32 1187.78 1636.92 1178.5 1642H1098.5C1087.84 1639.21 1083.5 1635.99 1080 1626ZM946.5 1626V1363.5C951.339 1354.02 955.463 1350.62 965 1347.5H1045C1055.47 1351.21 1059.28 1354.8 1063 1363.5V1626C1058.04 1633.32 1054.28 1636.92 1045 1642H965C954.338 1639.21 949.999 1635.99 946.5 1626ZM814.5 1626V1363.5C819.339 1354.02 823.463 1350.62 833 1347.5H913C923.47 1351.21 927.283 1354.8 931 1363.5V1626C926.04 1633.32 922.28 1636.92 913 1642H833C822.338 1639.21 817.999 1635.99 814.5 1626ZM682.5 1626V1363.5C687.339 1354.02 691.463 1350.62 701 1347.5H781C791.47 1351.21 795.283 1354.8 799 1363.5V1626C794.04 1633.32 790.28 1636.92 781 1642H701C690.338 1639.21 685.999 1635.99 682.5 1626ZM552 1626V1363.5C556.839 1354.02 560.963 1350.62 570.5 1347.5H650.5C660.97 1351.21 664.783 1354.8 668.5 1363.5V1626C663.54 1633.32 659.78 1636.92 650.5 1642H570.5C559.838 1639.21 555.499 1635.99 552 1626ZM424 1626V1363.5C428.839 1354.02 432.963 1350.62 442.5 1347.5H522.5C532.97 1351.21 536.783 1354.8 540.5 1363.5V1626C535.54 1633.32 531.78 1636.92 522.5 1642H442.5C431.838 1639.21 427.499 1635.99 424 1626ZM292.5 1626V1363.5C297.339 1354.02 301.463 1350.62 311 1347.5H391C401.47 1351.21 405.283 1354.8 409 1363.5V1626C404.04 1633.32 400.28 1636.92 391 1642H311C300.338 1639.21 295.999 1635.99 292.5 1626ZM159 1626V1363.5C163.839 1354.02 167.963 1350.62 177.5 1347.5H257.5C267.97 1351.21 271.783 1354.8 275.5 1363.5V1626C270.54 1633.32 266.78 1636.92 257.5 1642H177.5C166.838 1639.21 162.499 1635.99 159 1626ZM28.5 1626V1363.5C33.3394 1354.02 37.4631 1350.62 47 1347.5H127C137.47 1351.21 141.283 1354.8 145 1363.5V1626C140.04 1633.32 136.28 1636.92 127 1642H47C36.338 1639.21 31.999 1635.99 28.5 1626Z",
          className: t,
        }),
        u.jsx("path", {
          d: "M64.5572 2313.88H126.326V2241.25H79.1411C75.5675 2241.25 73.0646 2239.7 71.6349 2236.59C71.3492 2235.7 71.2063 2234.86 71.2063 2234.1L71.42 2087L0 2129.98V2263.74C0 2277.62 6.29138 2289.46 18.8742 2299.22C31.457 2309 46.6842 2313.88 64.5572 2313.88ZM91.3416 2376.18L117.079 2356.86L141.957 2376.18H148.391L177.774 2354.19V2349.54L148.391 2327.71H141.957L117.079 2346.87L91.3416 2327.71H84.9074L56.5968 2349.54V2354.19L84.9074 2376.18H91.3416ZM141.529 2313.88C154.397 2313.88 165.907 2310.83 176.059 2304.72C186.211 2298.61 193.003 2290.84 196.433 2281.4C199.865 2290.84 206.585 2298.61 216.594 2304.72C226.746 2310.83 238.256 2313.88 251.124 2313.88H277.719V2241.25H210.589C207.015 2241.25 204.584 2239.7 203.297 2236.59C203.012 2235.7 202.867 2234.86 202.867 2234.1L202.654 2214.77H171.34V2234.1C171.34 2236.2 170.268 2237.92 168.123 2239.25C165.979 2240.59 162.547 2241.25 157.828 2241.25H96.489V2313.88H141.529ZM305.199 2376.52H311.633L341.017 2354.53V2349.87L311.633 2328.05H305.199L277.103 2349.87V2354.53L305.199 2376.52ZM323.644 2313.88C333.081 2313.88 341.445 2313.56 348.738 2312.89C356.172 2312.11 362.536 2311.28 367.826 2310.39C373.116 2309.39 377.906 2307.83 382.196 2305.72C386.485 2303.5 389.845 2301.56 392.276 2299.89C394.85 2298.11 397.495 2295.45 400.212 2291.9C402.928 2288.23 404.929 2285.23 406.216 2282.9C407.646 2280.46 409.648 2276.79 412.222 2271.91C413.652 2269.13 414.796 2266.97 415.654 2265.41C420.372 2256.63 425.448 2249.25 430.881 2243.25C436.457 2237.25 441.462 2233.1 445.895 2230.76C450.47 2228.43 454.688 2226.71 458.548 2225.6C462.409 2224.49 465.411 2224.04 467.556 2224.26L470.774 2224.6L489.004 2181.45H469.058C442.463 2181.45 418.228 2177.89 396.351 2170.79C391.347 2169.13 383.911 2166.46 374.045 2162.79C364.323 2159.13 356.745 2156.4 351.312 2154.64C344.59 2152.41 337.8 2151.3 330.936 2151.3C328.076 2151.3 325.145 2151.64 322.143 2152.3C319.283 2152.86 316.638 2153.64 314.207 2154.64C311.776 2155.53 309.346 2156.74 306.915 2158.29C304.485 2159.74 302.339 2161.18 300.481 2162.63C298.622 2164.07 296.691 2165.79 294.69 2167.79C292.688 2169.68 291.043 2171.35 289.757 2172.79C288.47 2174.13 287.04 2175.79 285.468 2177.78C283.895 2179.67 282.751 2181.12 282.036 2182.12C281.464 2183.01 280.678 2184.17 279.677 2185.62L278.175 2187.78C275.173 2192.23 273.743 2197 273.886 2202.11C274.029 2207.11 275.673 2211.77 278.818 2216.1L287.183 2227.26L303.483 2218.1C303.483 2218.1 302.625 2216.65 300.91 2213.77C297.765 2205.77 302.269 2200.94 314.422 2199.27C317.281 2198.83 320.641 2198.61 324.501 2198.61C329.792 2198.61 336.656 2199.88 345.091 2202.44C353.67 2204.88 361.106 2207.44 367.397 2210.11C373.689 2212.66 380.98 2215.82 389.274 2219.6C397.709 2223.26 402.428 2225.32 403.429 2225.76C401.999 2227.54 400.998 2228.71 400.425 2229.26C399.997 2229.82 397.924 2231.1 394.206 2233.1C390.488 2234.98 386.127 2236.36 381.123 2237.25C376.262 2238.03 368.684 2238.92 358.389 2239.92C348.237 2240.81 336.298 2241.25 322.571 2241.25H247.291V2313.88H323.644ZM583.59 2213.27C589.167 2213.27 595.887 2215.6 603.751 2220.26C611.758 2224.93 618.335 2229.6 623.482 2234.26L631.203 2241.25H586.594C581.732 2241.25 577.085 2240.14 572.652 2237.92C568.363 2235.7 566.218 2232.37 566.218 2227.93C566.218 2218.15 572.008 2213.27 583.59 2213.27ZM619.408 2406.34C630.56 2402.12 640.998 2390.46 650.721 2371.36C660.443 2352.26 665.948 2333.1 667.235 2313.88H731.149V2241.25H673.241C672.24 2229.71 668.451 2219.37 661.874 2210.27C655.44 2201.16 646.86 2194.12 636.137 2189.12C625.413 2184.01 613.545 2181.45 600.534 2181.45C579.086 2181.45 563.43 2185.84 553.564 2194.62C543.841 2203.38 538.98 2214.94 538.98 2229.26V2277.4C538.98 2287.51 543.555 2296.11 552.706 2303.22C561.856 2310.33 572.938 2313.88 585.95 2313.88H625.842C622.41 2318.99 615.19 2324.49 604.18 2330.38C593.313 2336.26 581.302 2341.54 568.148 2346.2C554.994 2350.98 541.982 2355.36 529.114 2359.36C516.388 2363.36 505.808 2366.47 497.371 2368.69L484.503 2372.03V2381.52C484.646 2381.52 513.028 2388.63 569.65 2402.84C593.671 2408.62 610.256 2409.78 619.408 2406.34ZM751.984 2313.88C765.711 2313.88 776.506 2310.78 784.37 2304.56C792.377 2298.33 797.667 2290.68 800.241 2281.57C803.673 2291.01 810.393 2298.78 820.402 2304.89C830.554 2310.89 842.063 2313.88 854.938 2313.88H886.466V2241.25H813.539C810.536 2241.25 808.463 2239.92 807.319 2237.25C807.033 2236.59 806.89 2235.92 806.89 2235.25L806.675 2159.96L828.338 2147.8L805.818 2087L738.902 2130.65C730.037 2136.19 727.606 2143.75 731.61 2153.3L762.279 2225.76C764.567 2230.54 764.639 2234.21 762.494 2236.75C760.492 2239.31 755.845 2240.81 748.553 2241.25H701.584V2313.88H751.984ZM890.906 2195.94H897.34L926.719 2173.96V2169.29L897.34 2147.47H890.906L862.801 2169.29V2173.96L890.906 2195.94ZM901.201 2313.88C914.069 2313.88 925.573 2310.83 935.727 2304.72C945.88 2298.61 952.674 2290.84 956.097 2281.4C959.533 2290.84 966.251 2298.61 976.262 2304.72C986.415 2310.83 997.92 2313.88 1010.79 2313.88H1037.39V2241.25H970.253C966.675 2241.25 964.256 2239.7 962.969 2236.59C962.673 2235.7 962.532 2234.86 962.532 2234.1L962.326 2214.77H931.004V2234.1C931.004 2236.2 929.936 2237.92 927.787 2239.25C925.651 2240.59 922.215 2241.25 917.492 2241.25H856.161V2313.88H901.201ZM1088.89 2313.88C1102.62 2313.88 1113.41 2310.83 1121.28 2304.72C1129.28 2298.5 1134.57 2290.84 1137.14 2281.73C1140.58 2291.18 1147.3 2298.89 1157.31 2304.89C1167.46 2310.89 1178.97 2313.88 1191.83 2313.88H1227.65V2241.25H1156.02C1152.02 2241.25 1149.15 2239.75 1147.44 2236.75C1146.87 2235.75 1146.58 2234.76 1146.58 2233.76V2227.26C1146.58 2219.82 1145.37 2213 1142.93 2206.77C1140.64 2200.55 1137.57 2195.44 1133.71 2191.45C1129.85 2187.45 1125.64 2183.89 1121.06 2180.78C1116.48 2177.67 1111.91 2175.35 1107.33 2173.79C1102.76 2172.13 1098.54 2170.79 1094.68 2169.79C1090.82 2168.68 1087.74 2167.96 1085.45 2167.63L1081.81 2167.29L1157.09 2148.64V2099.16L1048.78 2125.98C1042.92 2127.54 1038.13 2130.26 1034.41 2134.15C1030.7 2138.03 1028.83 2142.36 1028.83 2147.14L1029.05 2206.77C1030.05 2206.66 1031.48 2206.61 1033.33 2206.61C1035.2 2206.5 1038.78 2206.44 1044.07 2206.44C1049.36 2206.44 1054.36 2206.61 1059.07 2206.94C1063.94 2207.16 1069.3 2207.72 1075.16 2208.61C1081.02 2209.5 1086.03 2210.66 1090.17 2212.11C1094.46 2213.44 1098.04 2215.37 1100.89 2217.93C1103.76 2220.37 1105.19 2223.26 1105.19 2226.6C1105.19 2232.15 1102.54 2235.98 1097.25 2238.09C1091.96 2240.2 1084.6 2241.25 1075.16 2241.25H1006.95V2313.88H1088.89ZM1209.58 2195.77L1235.32 2176.45L1260.19 2195.77H1266.63L1296 2173.79V2169.13L1266.63 2147.3H1260.19L1235.32 2166.46L1209.58 2147.3H1203.15L1174.84 2169.13V2173.79L1203.15 2195.77H1209.58ZM1251.18 2313.88C1264.05 2313.88 1275.56 2310.83 1285.71 2304.72C1295.86 2298.61 1302.66 2290.84 1306.09 2281.4C1309.52 2290.84 1316.23 2298.61 1326.25 2304.72C1336.4 2310.83 1347.92 2313.88 1360.78 2313.88H1387.37V2241.25H1320.25C1316.67 2241.25 1314.24 2239.7 1312.95 2236.59C1312.67 2235.7 1312.53 2234.86 1312.53 2234.1L1312.31 2214.77H1281V2234.1C1281 2236.2 1279.92 2237.92 1277.78 2239.25C1275.63 2240.59 1272.2 2241.25 1267.49 2241.25H1206.14V2313.88H1251.18ZM1356.95 2313.88H1405.85C1421.58 2313.88 1435.01 2309.56 1446.17 2300.89C1457.32 2292.12 1462.9 2281.62 1462.9 2269.41V2159.96L1484.77 2147.97L1462.03 2087L1395.56 2130.48C1386.55 2136.36 1383.9 2143.8 1387.62 2152.8L1418.72 2225.76C1420.85 2230.87 1420.71 2234.76 1418.28 2237.42C1415.85 2239.98 1410.28 2241.25 1401.55 2241.25H1356.95V2313.88ZM1533.93 2313.88L1583.91 2284.4L1588.2 2158.29L1606.21 2147.97L1583.69 2087L1534.57 2118.31C1529.14 2121.87 1525 2126.2 1522.14 2131.31C1519.41 2136.31 1518.35 2141.53 1518.93 2146.97L1533.93 2313.88ZM1690.1 2213.27C1693.68 2213.27 1697.68 2214.27 1702.11 2216.26C1706.69 2218.15 1710.97 2220.49 1714.98 2223.26C1718.98 2225.93 1722.7 2228.65 1726.13 2231.43C1729.71 2234.1 1732.49 2236.36 1734.5 2238.25L1737.5 2241.25H1692.89C1688.17 2241.25 1683.59 2240.14 1679.16 2237.92C1674.88 2235.7 1672.73 2232.37 1672.73 2227.93C1672.73 2218.15 1678.52 2213.27 1690.1 2213.27ZM1725.91 2406.34C1731.78 2404.12 1737.86 2399.17 1744.15 2391.52C1750.58 2383.96 1756.52 2374.52 1761.95 2363.19C1767.53 2351.98 1772.1 2338.43 1775.68 2322.55C1779.4 2306.67 1781.25 2290.46 1781.25 2273.91C1781.25 2267.24 1780.82 2260.69 1779.96 2254.25C1779.11 2247.81 1777.61 2240.98 1775.46 2233.76C1773.46 2226.54 1770.53 2219.93 1766.67 2213.94C1762.95 2207.83 1758.45 2202.33 1753.16 2197.44C1748.01 2192.45 1741.43 2188.56 1733.43 2185.78C1725.41 2182.89 1716.56 2181.45 1706.83 2181.45C1685.38 2181.45 1669.8 2185.84 1660.08 2194.62C1650.35 2203.38 1645.49 2214.94 1645.49 2229.26V2277.4C1645.49 2287.51 1650.07 2296.11 1659.22 2303.22C1668.37 2310.33 1679.45 2313.88 1692.46 2313.88H1732.35C1728.93 2318.99 1721.71 2324.49 1710.69 2330.38C1699.83 2336.26 1687.81 2341.54 1674.66 2346.2C1661.51 2350.98 1648.5 2355.36 1635.63 2359.36C1622.9 2363.36 1612.32 2366.47 1603.88 2368.69L1591.01 2372.03V2381.52C1591.16 2381.52 1619.54 2388.63 1676.17 2402.84C1700.18 2408.62 1716.77 2409.78 1725.91 2406.34ZM1978.05 2397.17C1973.47 2356.19 1971.05 2328.27 1970.75 2313.39C1970.47 2302.72 1972.26 2294.83 1976.12 2289.73C1979.98 2284.51 1987.2 2281.9 1997.77 2281.9C2006.22 2281.9 2014.8 2282.84 2023.51 2284.73C2032.24 2286.51 2039.82 2288.73 2046.25 2291.4C2052.68 2293.96 2058.47 2296.56 2063.62 2299.22C2068.77 2301.89 2072.71 2304.17 2075.42 2306.06L2079.49 2308.72L2122.82 2241.25C2122.82 2241.25 2121.03 2236.48 2117.45 2226.93C2105.59 2200.05 2090.79 2182.12 2073.05 2173.13C2065.33 2169.35 2057.33 2167.46 2049.04 2167.46C2040.32 2167.46 2031.81 2169.29 2023.51 2172.96C2015.37 2176.62 2008.29 2181.28 2002.28 2186.95C1996.42 2192.62 1991.48 2198.22 1987.48 2203.77C1983.48 2209.33 1980.48 2214.61 1978.47 2219.6C1977.91 2220.93 1978.33 2222.1 1979.76 2223.1C1981.34 2223.99 1982.83 2224.04 1984.26 2223.26C1997.71 2216.71 2012.07 2213.44 2027.37 2213.44C2032.96 2213.44 2038.53 2214.38 2044.1 2216.26C2049.69 2218.15 2054.4 2220.49 2058.26 2223.26C2062.12 2225.93 2065.55 2228.65 2068.55 2231.43C2071.56 2234.21 2073.84 2236.53 2075.42 2238.42L2077.56 2241.25C2044.24 2234.49 2015.51 2231.82 1991.34 2233.26C1967.33 2234.71 1948.53 2240.36 1934.94 2250.25C1921.35 2260.13 1914.57 2273.47 1914.57 2290.23V2422L1978.05 2397.17ZM2217.28 2213.27C2222.86 2213.27 2229.57 2215.6 2237.45 2220.26C2245.45 2224.93 2252.03 2229.6 2257.18 2234.26L2264.9 2241.25H2220.28C2215.42 2241.25 2210.77 2240.14 2206.35 2237.92C2202.06 2235.7 2199.91 2232.37 2199.91 2227.93C2199.91 2218.15 2205.7 2213.27 2217.28 2213.27ZM2253.1 2406.34C2264.25 2402.12 2274.69 2390.46 2284.42 2371.36C2294.13 2352.26 2299.64 2333.1 2300.93 2313.88H2364.85V2241.25H2306.94C2305.94 2229.71 2302.14 2219.37 2295.56 2210.27C2289.13 2201.16 2280.56 2194.12 2269.83 2189.12C2259.11 2184.01 2247.24 2181.45 2234.23 2181.45C2212.78 2181.45 2197.12 2185.84 2187.26 2194.62C2177.53 2203.38 2172.67 2214.94 2172.67 2229.26V2277.4C2172.67 2287.51 2177.25 2296.11 2186.4 2303.22C2195.55 2310.33 2206.63 2313.88 2219.64 2313.88H2259.53C2256.11 2318.99 2248.88 2324.49 2237.87 2330.38C2227 2336.26 2214.99 2341.54 2201.84 2346.2C2188.69 2350.98 2175.68 2355.36 2162.81 2359.36C2150.09 2363.36 2139.49 2366.47 2131.07 2368.69L2118.2 2372.03V2381.52C2118.34 2381.52 2146.73 2388.63 2203.35 2402.84C2227.36 2408.62 2243.95 2409.78 2253.1 2406.34ZM2385.68 2313.88C2399.4 2313.88 2410.2 2310.78 2418.06 2304.56C2426.07 2298.33 2431.36 2290.68 2433.94 2281.57C2437.36 2291.01 2444.09 2298.78 2454.09 2304.89C2464.24 2310.89 2475.76 2313.88 2488.63 2313.88H2520.16V2241.25H2447.23C2444.23 2241.25 2442.16 2239.92 2441.02 2237.25C2440.72 2236.59 2440.58 2235.92 2440.58 2235.25L2440.37 2159.96L2462.03 2147.8L2439.51 2087L2372.59 2130.65C2363.73 2136.19 2361.3 2143.75 2365.3 2153.3L2395.98 2225.76C2398.25 2230.54 2398.33 2234.21 2396.18 2236.75C2394.19 2239.31 2389.54 2240.81 2382.25 2241.25H2335.28V2313.88H2385.68ZM2548.83 2313.88C2561.7 2313.88 2573.2 2310.83 2583.35 2304.72C2593.51 2298.61 2600.3 2290.84 2603.74 2281.4C2607.16 2290.84 2613.89 2298.61 2623.89 2304.72C2634.04 2310.83 2645.56 2313.88 2658.43 2313.88H2731.78V2241.25H2644.05C2645.77 2240.03 2647.63 2238.42 2649.63 2236.42C2651.78 2234.43 2654.13 2231.93 2656.7 2228.93C2659.28 2225.93 2661.57 2222.82 2663.58 2219.6C2665.71 2216.37 2667.36 2213 2668.5 2209.44C2669.65 2205.88 2670.15 2202.5 2670.01 2199.27C2670.01 2195.94 2668.79 2192.78 2666.36 2189.78C2663.92 2186.78 2660.42 2184.23 2655.85 2182.12C2651.27 2179.89 2644.84 2178.12 2636.55 2176.78C2628.39 2175.46 2618.68 2174.79 2607.38 2174.79C2599.09 2174.79 2591.07 2175.4 2583.35 2176.62C2575.77 2177.84 2569.56 2179.34 2564.69 2181.12C2559.84 2182.78 2555.54 2184.51 2551.83 2186.28C2548.11 2188.06 2545.47 2189.56 2543.9 2190.78L2541.32 2192.62V2220.43C2547.9 2220.43 2554.19 2222.49 2560.19 2226.6C2566.2 2230.71 2570.63 2235.59 2573.5 2241.25H2489.85V2313.88H2548.83ZM2751.99 2313.88C2765.73 2313.88 2776.52 2310.78 2784.38 2304.56C2792.39 2298.33 2797.68 2290.68 2800.25 2281.57C2803.69 2291.01 2810.4 2298.78 2820.42 2304.89C2830.57 2310.89 2842.07 2313.88 2854.94 2313.88H2886.47V2241.25H2813.56C2810.55 2241.25 2808.47 2239.92 2807.33 2237.25C2807.05 2236.59 2806.9 2235.92 2806.9 2235.25L2806.69 2159.96L2828.36 2147.8L2805.84 2087L2738.92 2130.65C2730.05 2136.19 2727.62 2143.75 2731.62 2153.3L2762.29 2225.76C2764.58 2230.54 2764.66 2234.21 2762.51 2236.75C2760.51 2239.31 2755.86 2240.81 2748.57 2241.25H2701.6V2313.88H2751.99ZM2856.18 2313.88H2905.08C2920.8 2313.88 2934.24 2309.56 2945.39 2300.89C2956.55 2292.12 2962.12 2281.62 2962.12 2269.41V2159.96L2984 2147.97L2961.26 2087L2894.78 2130.48C2885.78 2136.36 2883.12 2143.8 2886.84 2152.8L2917.95 2225.76C2920.08 2230.87 2919.94 2234.76 2917.51 2237.42C2915.08 2239.98 2909.5 2241.25 2900.78 2241.25H2856.18V2313.88Z",
          className: t,
        }),
        u.jsx("path", {
          d: "M92.5409 1881.25H98.3719L125 1859.24V1854.56L98.3719 1832.72H92.5409L67.0781 1854.56V1859.24L92.5409 1881.25ZM197.499 1958.45V1940.78C207.605 1949.67 219.333 1954.12 232.679 1954.12H269.414V1881.41H219.657C216.417 1881.41 213.307 1880.8 210.327 1879.58C207.476 1878.36 205.014 1876.86 202.941 1875.08C200.868 1873.18 198.924 1871.01 197.11 1868.57C195.426 1866.13 194.065 1863.9 193.028 1861.9C191.991 1859.79 191.02 1857.63 190.112 1855.4C189.336 1853.06 188.817 1851.5 188.558 1850.73C188.428 1849.95 188.299 1849.34 188.169 1848.89L133.746 1886.08L156.682 1913.26C159.921 1916.49 161.8 1919.93 162.318 1923.6C162.967 1927.16 162.059 1930.6 159.597 1933.93C157.136 1937.28 153.442 1940.33 148.519 1943.11C143.594 1945.78 136.921 1947.94 128.498 1949.61C120.076 1951.28 110.552 1952.11 99.9265 1952.11C91.8925 1952.11 84.3775 1951.44 77.3803 1950.11C70.3831 1948.78 63.8396 1946.5 57.7485 1943.28C51.7881 1940.05 47.2527 1936 44.1436 1931.1C41.1628 1926.21 40.126 1919.88 41.0334 1912.09C41.9407 1904.2 45.2445 1895.37 50.9461 1885.58H18.8755C14.9886 1891.14 11.6836 1896.98 8.96282 1903.09C6.24208 1909.2 4.10326 1915.43 2.54872 1921.77C1.12362 1927.99 0.281616 1934.28 0.0215528 1940.61C-0.107895 1946.94 0.345765 1953.11 1.38252 1959.12C2.41927 1965.23 4.23272 1971.12 6.82519 1976.8C9.54593 1982.46 12.8498 1987.74 16.7379 1992.63C20.6248 1997.64 25.4191 2002.14 31.1206 2006.14C36.8222 2010.25 43.171 2013.76 50.1682 2016.65C57.2949 2019.65 65.3941 2021.93 74.4648 2023.48C83.5344 2025.15 93.2535 2025.98 103.62 2025.98C115.022 2025.98 125.453 2024.98 134.913 2022.98C144.501 2020.98 152.406 2018.37 158.625 2015.15C164.975 2011.92 170.547 2008.14 175.341 2003.81C180.265 1999.47 184.088 1995.2 186.808 1990.96C189.529 1986.85 191.732 1982.52 193.417 1977.96C195.101 1973.51 196.203 1969.73 196.721 1966.62C197.239 1963.62 197.499 1960.9 197.499 1958.45ZM238.088 2016.48L261.412 1997.14L283.959 2016.48H289.79L316.418 1994.47V1989.8L289.79 1967.95H283.959L261.412 1987.13L238.088 1967.95H232.257L206.6 1989.8V1994.47L232.257 2016.48H238.088ZM241.781 1954.12H282.793C297.046 1954.12 309.226 1949.78 319.333 1941.11C329.57 1932.32 334.689 1921.82 334.689 1909.59L334.494 1848.39C334.494 1844.06 333.845 1839.56 332.55 1834.88C331.254 1830.11 329.7 1825.94 327.885 1822.38C326.072 1818.83 324.193 1815.6 322.249 1812.71C320.434 1809.82 318.88 1807.6 317.584 1806.04C316.418 1804.48 315.835 1803.71 315.835 1803.71L271.519 1833.55C272.426 1834.22 273.592 1835.11 275.018 1836.23C276.443 1837.34 278.97 1839.73 282.598 1843.39C286.355 1846.95 289.595 1850.5 292.316 1854.06C295.167 1857.63 297.759 1861.96 300.091 1867.07C302.423 1872.07 303.59 1876.86 303.59 1881.41H241.781V1954.12ZM446.765 1954.12C458.427 1954.12 468.794 1951.11 477.864 1945.11C487.063 1939.11 493.218 1931.38 496.329 1921.93C499.439 1931.38 505.529 1939.11 514.6 1945.11C523.799 1951.11 534.23 1954.12 545.892 1954.12H581.656V1881.41H544.726C538.895 1881.41 534.619 1879.3 531.898 1875.08C531.12 1873.74 530.602 1872.4 530.343 1871.07L513.044 1783.53L468.923 1812.21L482.723 1881.41H428.494C424.737 1881.41 421.497 1880.91 418.776 1879.91C416.056 1878.91 413.982 1877.69 412.557 1876.25C411.26 1874.68 410.225 1872.9 409.447 1870.9C408.798 1868.9 408.41 1867.07 408.281 1865.4C408.151 1863.74 408.215 1862.01 408.475 1860.24C408.734 1858.35 408.928 1857.07 409.058 1856.4C409.188 1855.74 409.317 1855.23 409.447 1854.89H391.371C388.001 1861.24 385.215 1867.29 383.012 1873.07C380.939 1878.75 379.19 1885.02 377.765 1891.91C376.469 1898.7 376.405 1905.53 377.571 1912.42C378.867 1919.21 381.393 1925.66 385.151 1931.77C389.427 1938.55 395.516 1944 403.421 1948.11C411.325 1952.11 420.072 1954.12 429.661 1954.12H446.765ZM585.11 1954.12C593.144 1954.12 600.659 1952.55 607.657 1949.44C614.654 1946.33 619.513 1941.67 622.234 1935.44C635.581 1936.89 648.474 1938.72 660.914 1940.94C673.483 1943.17 682.682 1945 688.513 1946.44L697.066 1948.78L737.105 1881.08C737.105 1881.08 735.421 1876.3 732.052 1866.74C721.037 1839.84 707.432 1821.88 691.235 1812.87C684.238 1809.1 676.981 1807.21 669.465 1807.21C660.136 1807.21 652.231 1809.32 645.753 1813.54C639.403 1817.77 631.629 1825.22 622.429 1835.89C606.62 1854.23 600.465 1869.4 603.963 1881.41H554.4V1954.12H585.11ZM636.812 1868.07C636.812 1858.29 641.995 1853.39 652.361 1853.39C657.415 1853.39 663.505 1855.74 670.631 1860.4C677.888 1865.07 683.848 1869.74 688.513 1874.4L695.51 1881.41H655.083C650.806 1881.41 646.66 1880.3 642.643 1878.08C638.756 1875.86 636.812 1872.51 636.812 1868.07ZM822.726 1853.39C827.781 1853.39 833.87 1855.74 840.997 1860.4C848.253 1865.07 854.214 1869.74 858.878 1874.4L865.876 1881.41H825.448C821.042 1881.41 816.831 1880.3 812.813 1878.08C808.927 1875.86 806.982 1872.51 806.982 1868.07C806.982 1858.29 812.23 1853.39 822.726 1853.39ZM855.186 2046.66C865.293 2042.44 874.752 2030.76 883.563 2011.64C892.375 1992.52 897.363 1973.34 898.529 1954.12H956.454V1881.41H903.972C903.065 1869.85 899.631 1859.51 893.671 1850.39C887.84 1841.28 880.065 1834.22 870.347 1829.22C860.628 1824.11 849.873 1821.55 838.082 1821.55C818.644 1821.55 804.456 1825.94 795.515 1834.72C786.703 1843.5 782.299 1855.06 782.299 1869.4V1917.6C782.299 1927.71 786.445 1936.33 794.737 1943.44C803.03 1950.55 813.074 1954.12 824.865 1954.12H861.017C857.907 1959.23 851.363 1964.73 841.385 1970.62C831.538 1976.52 820.654 1981.8 808.732 1986.46C796.811 1991.24 785.019 1995.64 773.357 1999.64C761.825 2003.64 752.236 2006.75 744.591 2008.97L732.929 2012.31V2021.82C733.058 2021.82 758.78 2028.93 810.093 2043.16C831.862 2048.94 846.893 2050.1 855.186 2046.66ZM947.545 2016.15H953.376L980 1994.14V1989.46L953.376 1967.62H947.545L922.075 1989.46V1994.14L947.545 2016.15ZM929.655 1954.12H970.671C984.921 1954.12 997.108 1949.78 1007.21 1941.11C1017.45 1932.32 1022.57 1921.82 1022.57 1909.59L1022.37 1848.39C1022.37 1844.06 1021.73 1839.56 1020.43 1834.88C1019.13 1830.11 1017.58 1825.94 1015.77 1822.38C1013.95 1818.83 1012.07 1815.6 1010.12 1812.71C1008.32 1809.82 1006.75 1807.6 1005.46 1806.04C1004.29 1804.48 1003.71 1803.71 1003.71 1803.71L959.393 1833.55C960.303 1834.22 961.469 1835.11 962.892 1836.23C964.315 1837.34 966.845 1839.73 970.472 1843.39C974.227 1846.95 977.469 1850.5 980.198 1854.06C983.044 1857.63 985.633 1861.96 987.965 1867.07C990.298 1872.07 991.464 1876.86 991.464 1881.41H929.655V1954.12ZM1230.34 2062L1253.66 2042.66L1276.22 2062H1282.05L1308.67 2039.99V2035.33L1282.05 2013.48H1276.22L1253.66 2032.66L1230.34 2013.48H1224.51L1198.85 2035.33V2039.99L1224.51 2062H1230.34ZM1249.19 2002.81H1286.9C1300.76 2002.81 1313.53 1999.86 1325.2 1993.97C1336.99 1988.19 1346.25 1980.24 1352.99 1970.12C1359.86 1960.12 1363.28 1949.17 1363.28 1937.28V1881.25C1363.28 1869.35 1358.36 1859.18 1348.52 1850.73C1338.67 1842.28 1326.82 1838.06 1312.95 1838.06H1277.38C1281.14 1832.83 1285.6 1827.88 1290.79 1823.22C1296.1 1818.44 1301.16 1814.48 1305.95 1811.37C1310.75 1808.26 1315.28 1805.54 1319.55 1803.21C1323.96 1800.87 1327.46 1799.15 1330.05 1798.04L1333.94 1796.54V1781.03H1276.4C1263.45 1781.03 1252.37 1784.97 1243.17 1792.86C1234.1 1800.65 1229.57 1810.1 1229.57 1821.22V1882.75C1229.57 1890.52 1232.74 1897.2 1239.08 1902.76C1245.57 1908.2 1253.4 1910.92 1262.61 1910.92H1329.28C1329.15 1916.6 1326.16 1921.66 1320.33 1926.1C1314.5 1930.54 1305.43 1932.77 1293.13 1932.77H1242.2C1235.58 1932.77 1229.3 1932.27 1223.34 1931.27C1217.51 1930.27 1211.81 1928.77 1206.24 1926.77C1200.8 1924.66 1196.26 1921.82 1192.63 1918.27C1189.13 1914.6 1186.55 1910.42 1184.86 1905.76C1183.3 1900.98 1183.23 1895.2 1184.67 1888.41C1186.22 1881.64 1189.39 1874.24 1194.18 1866.24H1162.31C1157.26 1873.35 1153.18 1880.8 1150.07 1888.58C1146.95 1896.37 1144.82 1904.15 1143.65 1911.92C1142.49 1919.6 1142.49 1927.21 1143.65 1934.78C1144.82 1942.22 1146.95 1949.28 1150.07 1955.95C1153.31 1962.73 1157.85 1968.95 1163.68 1974.63C1169.64 1980.41 1176.56 1985.35 1184.47 1989.46C1192.38 1993.7 1201.83 1996.97 1212.84 1999.31C1223.86 2001.64 1235.98 2002.81 1249.19 2002.81ZM1418.98 2048.83C1427.14 2048.83 1435.04 2045.88 1442.69 2039.99C1450.34 2034.22 1456.88 2026.82 1462.32 2017.82C1467.76 2008.81 1472.56 1999.03 1476.71 1988.46C1480.85 1977.91 1483.96 1967.79 1486.04 1958.12C1488.1 1948.44 1489.14 1940.11 1489.14 1933.1C1489.14 1924.66 1488.3 1916.54 1486.62 1908.76C1485.06 1900.98 1482.99 1894.25 1480.39 1888.58C1477.93 1882.91 1475.15 1877.64 1472.04 1872.74C1468.93 1867.85 1465.82 1863.79 1462.71 1860.57C1459.6 1857.35 1456.75 1854.62 1454.15 1852.39C1451.69 1850.06 1449.62 1848.39 1447.94 1847.39L1445.61 1845.89L1407.9 1898.92C1407.9 1898.92 1412.11 1902.37 1420.53 1909.26C1438.81 1925.38 1447.94 1937.39 1447.94 1945.28C1447.94 1951.39 1440.74 1959.29 1426.36 1968.95C1411.98 1978.63 1394.68 1987.57 1374.47 1995.81C1354.26 2004.14 1336.24 2009.64 1320.44 2012.31V2021.82C1320.44 2021.82 1331.97 2025.71 1355.03 2033.49C1386.91 2043.72 1408.22 2048.83 1418.98 2048.83ZM1545.6 1954.12L1590.89 1924.6L1594.77 1798.37L1611.1 1788.03L1590.69 1727L1546.18 1758.35C1541.26 1761.91 1537.5 1766.24 1534.91 1771.35C1532.45 1776.35 1531.47 1781.59 1532 1787.03L1545.6 1954.12ZM1687.13 1853.39C1692.18 1853.39 1698.28 1855.74 1705.4 1860.4C1712.65 1865.07 1718.61 1869.74 1723.28 1874.4L1730.28 1881.41H1689.84C1685.45 1881.41 1681.24 1880.3 1677.21 1878.08C1673.33 1875.86 1671.38 1872.51 1671.38 1868.07C1671.38 1858.29 1676.63 1853.39 1687.13 1853.39ZM1719.58 2046.66C1729.69 2042.44 1739.15 2030.76 1747.97 2011.64C1756.77 1992.52 1761.76 1973.34 1762.93 1954.12H1820.85V1881.41H1768.38C1767.47 1869.85 1764.04 1859.51 1758.07 1850.39C1752.24 1841.28 1744.47 1834.22 1734.74 1829.22C1725.03 1824.11 1714.28 1821.55 1702.49 1821.55C1683.04 1821.55 1668.85 1825.94 1659.92 1834.72C1651.1 1843.5 1646.69 1855.06 1646.69 1869.4V1917.6C1646.69 1927.71 1650.85 1936.33 1659.14 1943.44C1667.43 1950.55 1677.47 1954.12 1689.26 1954.12H1725.41C1722.31 1959.23 1715.77 1964.73 1705.79 1970.62C1695.94 1976.52 1685.05 1981.8 1673.13 1986.46C1661.21 1991.24 1649.42 1995.64 1637.76 1999.64C1626.23 2003.64 1616.64 2006.75 1608.99 2008.97L1597.33 2012.31V2021.82C1597.46 2021.82 1623.18 2028.93 1674.5 2043.16C1696.26 2048.94 1711.29 2050.1 1719.58 2046.66ZM1847.51 1954.12C1861.76 1954.12 1874.01 1951.55 1884.25 1946.44C1894.6 1941.33 1901.93 1934.72 1906.21 1926.6C1921.11 1941.5 1939.83 1948.94 1962.38 1948.94L2002.81 1881.25C2002.81 1881.25 2002.09 1878.97 2000.67 1874.4C1993.55 1856.74 1977.28 1837.78 1951.89 1817.55C1946.7 1813.43 1941.32 1809.43 1935.75 1805.54C1935.49 1805.43 1933.67 1804.21 1930.31 1801.87C1927.07 1799.54 1922.66 1796.48 1917.09 1792.7C1911.51 1788.81 1905.88 1784.86 1900.18 1780.86C1896.17 1777.97 1891.56 1776.81 1886.38 1777.36C1881.19 1777.81 1876.98 1779.75 1873.75 1783.2L1846.35 1812.87L1862.28 1823.88C1843.36 1831.77 1832.61 1845.73 1830.02 1865.74C1829.24 1871.74 1829.24 1876.97 1830.02 1881.41H1794.06V1954.12H1847.51ZM1922.92 1893.41C1927.59 1880.75 1928.56 1870.13 1925.84 1861.57C1937.37 1867.46 1945.4 1874.29 1949.94 1882.08C1954.48 1889.86 1954.28 1897.42 1949.36 1904.76L1922.92 1893.41ZM1894.35 1869.9C1894.35 1873.9 1893.38 1876.86 1891.43 1878.75C1889.63 1880.52 1886.64 1881.41 1882.5 1881.41H1854.51C1853.47 1871.63 1855.41 1863.79 1860.34 1857.9C1865.26 1852 1871.86 1849.06 1880.17 1849.06C1881.19 1849.95 1882.5 1851.17 1884.05 1852.73C1885.6 1854.17 1887.68 1856.74 1890.27 1860.4C1893 1864.07 1894.35 1867.24 1894.35 1869.9ZM2154.74 1781.03L2178.06 1761.69L2200.6 1781.03H2206.44L2233.06 1759.02V1754.34L2206.44 1732.5H2200.6L2178.06 1751.68L2154.74 1732.5H2148.91L2123.25 1754.34V1759.02L2148.91 1781.03H2154.74ZM2159.79 1877.25C2158.75 1869.79 2160.7 1863.9 2165.62 1859.57C2170.54 1855.24 2176.77 1852.62 2184.28 1851.73C2189.72 1851.17 2192.83 1852.95 2193.61 1857.07L2200.41 1892.41C2199.38 1892.64 2198.02 1892.86 2196.32 1893.08C2194.64 1893.3 2191.6 1893.41 2187.19 1893.41C2182.78 1893.3 2178.83 1892.86 2175.33 1892.08C2171.83 1891.3 2168.48 1889.69 2165.23 1887.25C2162.12 1884.69 2160.31 1881.36 2159.79 1877.25ZM2261.63 1954.12H2297.2V1881.41H2260.28C2254.83 1881.41 2250.62 1879.36 2247.64 1875.25C2246.74 1873.79 2246.16 1872.35 2245.89 1870.9L2228.79 1783.53L2184.66 1812.04L2188.16 1830.38C2183.64 1830.94 2179.81 1831.49 2176.7 1832.05C2173.58 1832.61 2169.9 1833.33 2165.62 1834.22C2161.34 1834.99 2157.65 1835.95 2154.54 1837.06C2151.57 1838.17 2148.32 1839.5 2144.82 1841.06C2141.33 1842.62 2138.41 1844.45 2136.08 1846.56C2133.75 1848.67 2131.54 1851.06 2129.47 1853.73C2127.52 1856.29 2126.04 1859.29 2125 1862.74C2124.09 1866.18 2123.64 1869.96 2123.64 1874.07L2123.44 1898.59C2123.44 1903.7 2123.96 1908.42 2125 1912.76C2126.17 1917.1 2127.72 1920.77 2129.66 1923.77C2131.6 1926.77 2133.8 1929.49 2136.27 1931.93C2138.74 1934.28 2141.33 1936.17 2144.04 1937.61C2146.76 1939.05 2149.49 1940.33 2152.21 1941.44C2154.92 1942.44 2157.52 1943.17 2159.99 1943.61C2162.45 1944.05 2164.65 1944.44 2166.59 1944.78C2168.53 1945 2170.03 1945.11 2171.06 1945.11H2172.81L2202.55 1903.26C2203.85 1908.81 2205.27 1913.76 2206.82 1918.1C2208.38 1922.43 2210.72 1926.99 2213.82 1931.77C2216.93 1936.44 2220.5 1940.33 2224.51 1943.44C2228.53 1946.55 2233.71 1949.11 2240.06 1951.11C2246.41 1953.11 2253.61 1954.12 2261.63 1954.12ZM2323.56 1954.12C2335.22 1954.12 2345.64 1951.05 2354.85 1944.94C2364.05 1938.83 2370.2 1931.04 2373.32 1921.6C2376.42 1931.04 2382.51 1938.83 2391.58 1944.94C2400.78 1951.05 2411.22 1954.12 2422.88 1954.12H2489.36V1881.41H2409.86C2411.41 1880.19 2413.1 1878.58 2414.91 1876.58C2416.85 1874.57 2418.99 1872.07 2421.32 1869.07C2423.65 1866.07 2425.73 1862.96 2427.55 1859.74C2429.48 1856.51 2430.98 1853.12 2432.01 1849.56C2433.05 1846 2433.51 1842.62 2433.38 1839.39C2433.38 1836.06 2432.27 1832.88 2430.07 1829.88C2427.86 1826.88 2424.69 1824.33 2420.55 1822.22C2416.4 1819.99 2410.57 1818.22 2403.06 1816.88C2395.66 1815.54 2386.86 1814.87 2376.62 1814.87C2369.1 1814.87 2361.84 1815.48 2354.85 1816.72C2347.98 1817.94 2342.34 1819.44 2337.94 1821.22C2333.53 1822.88 2329.64 1824.61 2326.27 1826.38C2322.9 1828.16 2320.51 1829.66 2319.09 1830.88L2316.76 1832.72V1860.57C2322.72 1860.57 2328.42 1862.63 2333.85 1866.74C2339.3 1870.85 2343.31 1875.75 2345.91 1881.41H2270.11V1954.12H2323.56ZM2492.71 1954.12C2500.75 1954.12 2508.26 1952.55 2515.26 1949.44C2522.25 1946.33 2527.12 1941.67 2529.83 1935.44C2543.19 1936.89 2556.07 1938.72 2568.52 1940.94C2581.09 1943.17 2590.29 1945 2596.12 1946.44L2604.67 1948.78L2644.71 1881.08C2644.71 1881.08 2643.03 1876.3 2639.66 1866.74C2628.65 1839.84 2615.04 1821.88 2598.84 1812.87C2591.84 1809.1 2584.59 1807.21 2577.07 1807.21C2567.74 1807.21 2559.84 1809.32 2553.36 1813.54C2547.01 1817.77 2539.23 1825.22 2530.03 1835.89C2514.22 1854.23 2508.07 1869.4 2511.57 1881.41H2462.01V1954.12H2492.71ZM2544.41 1868.07C2544.41 1858.29 2549.6 1853.39 2559.97 1853.39C2565.02 1853.39 2571.11 1855.74 2578.23 1860.4C2585.5 1865.07 2591.46 1869.74 2596.12 1874.4L2603.12 1881.41H2562.69C2558.41 1881.41 2554.27 1880.3 2550.24 1878.08C2546.36 1875.86 2544.41 1872.51 2544.41 1868.07ZM2736.01 1954.12H2791.98V1881.41H2749.22C2745.98 1881.41 2743.72 1879.86 2742.42 1876.75C2742.16 1875.86 2742.04 1875.02 2742.04 1874.24L2742.22 1727L2677.5 1770.02V1903.92C2677.5 1917.82 2683.2 1929.66 2694.61 1939.44C2706.01 1949.22 2719.81 1954.12 2736.01 1954.12ZM2817.42 2016.82H2823.25L2849.89 1994.81V1990.13L2823.25 1968.29H2817.42L2791.96 1990.13V1994.81L2817.42 2016.82ZM2834.14 1954.12C2842.69 1954.12 2850.27 1953.79 2856.88 1953.11C2863.61 1952.33 2869.39 1951.5 2874.18 1950.61C2878.97 1949.61 2883.31 1948.05 2887.21 1945.94C2891.09 1943.72 2894.13 1941.78 2896.34 1940.11C2898.67 1938.33 2901.06 1935.67 2903.53 1932.1C2905.99 1928.43 2907.8 1925.43 2908.97 1923.1C2910.26 1920.66 2912.08 1916.99 2914.41 1912.09C2915.71 1909.31 2916.75 1907.15 2917.53 1905.59C2921.79 1896.81 2926.4 1889.41 2931.32 1883.41C2936.37 1877.41 2940.91 1873.24 2944.93 1870.9C2949.07 1868.57 2952.9 1866.85 2956.4 1865.74C2959.89 1864.63 2962.61 1864.18 2964.56 1864.4L2967.47 1864.74L2984 1821.55H2965.92C2941.82 1821.55 2919.86 1817.99 2900.03 1810.87C2895.5 1809.21 2888.76 1806.54 2879.81 1802.87C2871.01 1799.21 2864.14 1796.48 2859.22 1794.7C2853.12 1792.47 2846.97 1791.36 2840.74 1791.36C2838.15 1791.36 2835.5 1791.7 2832.78 1792.36C2830.19 1792.92 2827.79 1793.7 2825.58 1794.7C2823.38 1795.59 2821.18 1796.82 2818.98 1798.37C2816.78 1799.82 2814.83 1801.26 2813.15 1802.71C2811.46 1804.15 2809.71 1805.87 2807.9 1807.87C2806.08 1809.76 2804.59 1811.43 2803.43 1812.87C2802.26 1814.21 2800.96 1815.88 2799.54 1817.88C2798.12 1819.77 2797.08 1821.22 2796.43 1822.22C2795.91 1823.11 2795.2 1824.27 2794.29 1825.72L2792.93 1827.88C2790.21 1832.33 2788.92 1837.12 2789.05 1842.23C2789.17 1847.23 2790.67 1851.89 2793.51 1856.24L2801.09 1867.4L2815.87 1858.24C2815.87 1858.24 2815.09 1856.79 2813.54 1853.89C2810.68 1845.89 2814.76 1841.06 2825.78 1839.39C2828.37 1838.95 2831.41 1838.73 2834.91 1838.73C2839.71 1838.73 2845.93 1840 2853.57 1842.56C2861.35 1845 2868.09 1847.56 2873.79 1850.23C2879.49 1852.78 2886.1 1855.96 2893.62 1859.74C2901.26 1863.4 2905.54 1865.46 2906.45 1865.9C2905.14 1867.68 2904.24 1868.85 2903.72 1869.4C2903.33 1869.96 2901.46 1871.24 2898.09 1873.24C2894.72 1875.14 2890.76 1876.52 2886.23 1877.41C2881.82 1878.19 2874.96 1879.08 2865.63 1880.08C2856.43 1880.97 2845.61 1881.41 2833.16 1881.41H2764.94V1954.12H2834.14Z",
          className: t,
        }),
        u.jsx("path", {
          d: "M2288 444.496L2082 467.497C2223.69 374.619 2325.24 324.24 2462.08 299.303C2194.82 117.219 1854.16 16.0753 1512.07 2.34796C1511.89 2.34074 1511.71 2.33353 1511.53 2.32635C1510.99 2.30482 1510.45 2.2835 1509.91 2.2624C1504.93 2.06783 1499.95 1.89181 1494.96 1.73435C1481.12 1.29706 1467.29 1.00297 1453.45 0.852512C1451.47 0.831019 1449.5 0.812457 1447.52 0.796827C1436.52 0.709787 1425.52 0.713694 1414.52 0.808765C1409.31 0.853807 1404.1 0.919311 1398.89 1.0053C1389.94 1.15325 1380.98 1.36182 1372.03 1.63115C1370.92 1.66461 1369.81 1.69901 1368.7 1.73434C1363.63 1.89562 1358.56 2.07644 1353.49 2.27681C1353.02 2.29536 1352.55 2.31406 1352.08 2.33294C655.554 30.3668 2.5481e-05 427.823 0 1250.01H451C509.5 1044 756 673.999 1077 510.999C1062.06 505.03 1027.74 509.913 932.5 525.999C1129.5 383.999 1240 362.499 1390.5 362.499C1316.32 439.27 1289.87 477.942 1291 532.999L1224.5 469.996C971 714.499 874.953 902.822 899.5 1196L721.5 1141.01C738.101 1181.04 756.123 1216.32 780.747 1250.01C827.633 1314.16 898.457 1372.55 1029 1447C1035.51 1387.71 1049.91 1332.97 1085.17 1250.01C1097.42 1221.2 1112.18 1188.99 1130 1152.01L1021 1209C1130 795.999 1486 571.999 1666.5 473.497C1601.12 477.596 1564.52 477.142 1499.5 501.497C1614.13 371.83 1723.31 339.78 1966 325.997C1922.35 368.933 1900.01 404.388 1866.5 501.497L1811 439.496C1531.89 704.772 1474.82 871.547 1486 1189.51L1290 1141.01C1311.95 1182.77 1332.83 1218.63 1353.84 1250.01C1427.66 1360.29 1502.9 1415.17 1630.5 1476C1644.82 1384.09 1662.31 1321.95 1692.99 1250.01C1705.79 1220.01 1720.88 1188.3 1739 1152.01L1610.5 1216.01C1741.58 836.768 2003 594.917 2288 444.496Z",
          className: t,
        }),
        u.jsx("path", {
          d: "M2448.5 418.996C2259.5 548.997 2006 888.01 2074.5 1217.01L1922 1162.51C1928.91 1193.05 1939.87 1222.35 1953.5 1250.01C2025.42 1395.89 2171.87 1495.93 2193 1489.51C2183.5 1461 2218.81 1346.51 2284 1293.01L2231 1250.01H2983.5C2983.5 873.832 2813.3 577.29 2554.21 367.701C2533.91 399.587 2521.75 433.124 2515 479.996L2448.5 418.996Z",
          className: t,
        }),
      ],
    });
  }
  function G8({ className: e, children: t, ...r }) {
    return u.jsxs("div", {
      className: U("flex space-x-3", e),
      ...r,
      children: [
        u.jsxs("div", {
          className: "flex flex-col min-h-full items-center",
          children: [
            u.jsx("div", { className: "flex w-[0.2rem] h-full bg-edge-100" }),
            u.jsx("div", {
              className: "flex min-h-[1rem] min-w-[1rem] bg-primary-100",
            }),
            u.jsx("div", { className: "flex w-[0.2rem] h-full bg-edge-100" }),
          ],
        }),
        t,
      ],
    });
  }
  function U8({ className: e, children: t, ...r }) {
    return u.jsx("div", {
      className: U("flex bg-edge-100 p-[1rem]", e),
      ...r,
      children: t,
    });
  }
  function $8({ className: e, children: t, ...r }) {
    return u.jsx("div", {
      className: U("flex flex-col space-y-2", e),
      ...r,
      children: t,
    });
  }
  function Js({ className: e, children: t, ...r }) {
    return u.jsxs("div", {
      className: U("flex text-edge-100 ml-[1rem] items-center space-x-2", e),
      ...r,
      children: [
        u.jsx("div", {
          className: "flex min-h-[0.5rem] min-w-[0.5rem] bg-primary-100",
        }),
        u.jsx("div", { className: "flex", children: t }),
      ],
    });
  }
  function H8({ className: e, date: t, children: r, ...n }) {
    return u.jsxs("div", {
      className: U("flex flex-col items-start my-[3.8rem] space-y-3", e),
      ...n,
      children: [
        u.jsx("div", {
          className: "flex bg-edge-100 text-base-100 p-[0.5rem]",
          children: t,
        }),
        u.jsx("div", {
          className: "flex flex-col border border-edge-100",
          children: u.jsx("div", {
            className:
              "flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-3 bg-base-100 p-[1rem] border border-edge-100 translate-x-[0.3rem] translate-y-[-0.3rem]",
            children: r,
          }),
        }),
      ],
    });
  }
  const V8 = 0.3,
    z8 = 0.7;
  function Qk() {
    return u.jsx(ja, {
      children: u.jsx("div", {
        className: "flex flex-1 space-y-10 flex-col p-[1rem] items-center",
        children: u.jsxs("div", {
          className: "flex flex-col space-y-5",
          children: [
            u.jsxs(Nt, {
              className: "text-[20pt]",
              variant: "primary",
              children: [
                u.jsx(ur, { children: u.jsx(Ee, { icon: b6 }) }),
                u.jsx(jt, { children: "Experience" }),
              ],
            }),
            u.jsxs("div", {
              className: "flex flex-col items-start",
              children: [
                u.jsx(G8, {
                  children: u.jsxs(H8, {
                    date: "10/07/2024",
                    style: {
                      animationDelay: `${V8 * 0}s`,
                      animationDuration: `${z8}s`,
                    },
                    className: "animate-[fadeInRight_ease] fill-mode-backward",
                    children: [
                      u.jsx(U8, {
                        children: u.jsx(D8, {
                          className: "h-[5.5rem]",
                          fillColor: "fill-base-100",
                        }),
                      }),
                      u.jsxs($8, {
                        children: [
                          u.jsxs(Nt, {
                            children: [
                              u.jsx(ur, { children: u.jsx(Ee, { icon: Jf }) }),
                              u.jsx(jt, { children: "Bachelor's Degree" }),
                            ],
                          }),
                          u.jsx(Js, {
                            children:
                              "Studied for a bachelor's degree at USTHB",
                          }),
                          u.jsx(Js, {
                            children:
                              "Obtained a bachelor's degree in Information Systems and Software Engineering",
                          }),
                          u.jsx(Js, {
                            children:
                              "Completed several projects during the studies",
                          }),
                          u.jsx(Js, {
                            children: "Learned various technologies and skills",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                u.jsx(G8, {
                  children: u.jsxs(H8, {
                    date: "In Progress...",
                    style: {
                      animationDelay: `${V8 * 1}s`,
                      animationDuration: `${z8}s`,
                    },
                    className: "animate-[fadeInRight_ease] fill-mode-backward",
                    children: [
                      u.jsx(U8, {
                        children: u.jsx(D8, {
                          className: "h-[5.5rem]",
                          fillColor: "fill-base-100",
                        }),
                      }),
                      u.jsxs($8, {
                        children: [
                          u.jsxs(Nt, {
                            children: [
                              u.jsx(ur, { children: u.jsx(Ee, { icon: Jf }) }),
                              u.jsx(jt, { children: "Master's Degree" }),
                            ],
                          }),
                          u.jsx(Js, {
                            children:
                              "Currently studying for a master's degree",
                          }),
                          u.jsx(Js, {
                            children:
                              "Specializing in Networks and Distributed Systems",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    });
  }
  const Yk = { position: "bottom-left" },
    D9 = N.createContext(Yk),
    Xk = oe(
      "group-focus-within/dropdown:h-fit w-[10rem] scale-y-0 group-focus-within/dropdown:scale-y-100 overflow-hidden duration-300 absolute flex flex-col border border-edge-100 bg-base-100 z-50 p-[0.5rem] space-y-2",
      {
        variants: {
          position: {
            "top-left": "bottom-[3rem] left-0 origin-bottom",
            "top-right": "bottom-[3rem] right-0 origin-bottom",
            "bottom-left": "top-[3rem] left-0 origin-top",
            "bottom-right": "top-[3rem] right-0 origin-top",
          },
        },
        defaultVariants: { position: "bottom-left" },
      },
    );
  function B8({ className: e, children: t, ...r }) {
    const { position: n } = N.useContext(D9);
    return u.jsx("div", {
      className: U(Xk({ position: n, className: e })),
      ...r,
      children: t,
    });
  }
  const Jk = oe("group/dropdown flex relative", {
    variants: {
      position: {
        "top-left": "",
        "top-right": "",
        "bottom-left": "",
        "bottom-right": "",
      },
    },
    defaultVariants: { position: "bottom-left" },
  });
  function W8({ position: e, className: t, children: r, ...n }) {
    return u.jsx(D9.Provider, {
      value: { position: e },
      children: u.jsx("div", {
        className: U(Jk({ position: e, className: t })),
        ...n,
        children: r,
      }),
    });
  }
  function eO() {
    const { themeOption: e, setTheme: t } = N.useContext(vd),
      {
        isGlobalView: r,
        setIsGlobalView: n,
        isMoving: s,
        setIsMoving: o,
      } = N.useContext(Ra),
      i = () => {
        s ||
          (r
            ? (o(!0),
              n(!1),
              setTimeout(() => {
                o(!1);
              }, 700))
            : (o(!0),
              n(!0),
              setTimeout(() => {
                o(!1);
              }, 700)));
      };
    return u.jsxs("div", {
      className: U(
        "fixed duration-300 top-0 left-0 lg:left-0 h-[3.8rem] lg:h-screen w-screen lg:w-[5rem] transition-transform flex lg:flex-col justify-between bg-base-100 z-50 border-b lg:border-r lg:border-b-0 border-edge-100 p-[0.5rem] animate-[sidebar_0.5s_ease]",
        !open && "left-[-5rem]",
      ),
      children: [
        u.jsx("div", {
          className: "flex justify-end",
          children: u.jsx(it, {
            className: "w-full",
            onClick: i,
            children: u.jsxs(st, {
              className: "justify-center",
              children: [
                u.jsx(Lt, {
                  children: u.jsxs("div", {
                    className: U(
                      "flex flex-col justify-between min-h-[1.3rem] min-w-[1.5rem]",
                    ),
                    children: [
                      u.jsx("div", {
                        className: U(
                          "flex min-h-[0.2rem] bg-edge-100 group-hover/button:bg-base-100 duration-300 origin-left",
                          r && "rotate-45 translate-x-[0.2rem]",
                        ),
                      }),
                      u.jsx("div", {
                        className: U(
                          "flex min-h-[0.2rem] bg-edge-100 group-hover/button:bg-base-100 duration-300",
                          r && "translate-x-[-100%] opacity-0",
                        ),
                      }),
                      u.jsx("div", {
                        className: U(
                          "flex min-h-[0.2rem] bg-edge-100 group-hover/button:bg-base-100 duration-300 origin-left",
                          r && "-rotate-45 translate-x-[0.2rem]",
                        ),
                      }),
                    ],
                  }),
                }),
                u.jsx(ot, {}),
              ],
            }),
          }),
        }),
        u.jsx("div", {
          className: "flex",
          children: u.jsx($4, {
            color: "var(--edge-100)",
            className: "animate-[flipInX_0.7s_0.5s_ease] fill-mode-backward",
          }),
        }),
        u.jsxs(W8, {
          position: "bottom-right",
          className: "flax lg:hidden",
          children: [
            u.jsx(it, {
              tabIndex: 0,
              className:
                "w-full fill-mode-backward animate-[flipInX_1s_0.5s_ease]",
              children: u.jsxs(st, {
                className: "justify-center",
                children: [
                  u.jsx(Lt, { children: u.jsx(Ee, { icon: Qf }) }),
                  u.jsx(ot, {}),
                ],
              }),
            }),
            u.jsxs(B8, {
              tabIndex: 0,
              className: "w-[4rem]",
              children: [
                u.jsx(it, {
                  onClick: () => t(ue.SYSTEM),
                  variant: e === ue.SYSTEM ? "primary" : "edge-100",
                  active: e === ue.SYSTEM,
                  className: "w-full",
                  children: u.jsxs(st, {
                    className: "px-0 justify-center",
                    children: [
                      u.jsx(Lt, { children: u.jsx(Ee, { icon: Yf }) }),
                      u.jsx(ot, {}),
                    ],
                  }),
                }),
                u.jsx(it, {
                  onClick: () => t(ue.LIGHT),
                  variant: e === ue.LIGHT ? "primary" : "edge-100",
                  active: e === ue.LIGHT,
                  className: "w-full",
                  children: u.jsxs(st, {
                    className: "px-0 justify-center",
                    children: [
                      u.jsx(Lt, { children: u.jsx(Ee, { icon: Kf }) }),
                      u.jsx(ot, {}),
                    ],
                  }),
                }),
                u.jsx(it, {
                  onClick: () => t(ue.DARK),
                  variant: e === ue.DARK ? "primary" : "edge-100",
                  active: e === ue.DARK,
                  className: "w-full",
                  children: u.jsxs(st, {
                    className: "px-0 justify-center",
                    children: [
                      u.jsx(Lt, { children: u.jsx(Ee, { icon: Xf }) }),
                      u.jsx(ot, {}),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
        u.jsxs(W8, {
          position: "top-left",
          className: "hidden lg:flex lg:w-full",
          children: [
            u.jsx(it, {
              tabIndex: 0,
              className:
                "w-full fill-mode-backward animate-[flipInX_1s_0.5s_ease]",
              children: u.jsxs(st, {
                className: "justify-center lg:px-0",
                children: [
                  u.jsx(Lt, { children: u.jsx(Ee, { icon: Qf }) }),
                  u.jsx(ot, {}),
                ],
              }),
            }),
            u.jsxs(B8, {
              tabIndex: 0,
              className: "w-[4rem]",
              children: [
                u.jsx(it, {
                  onClick: () => t(ue.SYSTEM),
                  variant: e === ue.SYSTEM ? "primary" : "edge-100",
                  active: e === ue.SYSTEM,
                  className: "w-full",
                  children: u.jsxs(st, {
                    className: "px-0 justify-center",
                    children: [
                      u.jsx(Lt, { children: u.jsx(Ee, { icon: Yf }) }),
                      u.jsx(ot, {}),
                    ],
                  }),
                }),
                u.jsx(it, {
                  onClick: () => t(ue.LIGHT),
                  variant: e === ue.LIGHT ? "primary" : "edge-100",
                  active: e === ue.LIGHT,
                  className: "w-full",
                  children: u.jsxs(st, {
                    className: "px-0 justify-center",
                    children: [
                      u.jsx(Lt, { children: u.jsx(Ee, { icon: Kf }) }),
                      u.jsx(ot, {}),
                    ],
                  }),
                }),
                u.jsx(it, {
                  onClick: () => t(ue.DARK),
                  variant: e === ue.DARK ? "primary" : "edge-100",
                  active: e === ue.DARK,
                  className: "w-full",
                  children: u.jsxs(st, {
                    className: "px-0 justify-center",
                    children: [
                      u.jsx(Lt, { children: u.jsx(Ee, { icon: Xf }) }),
                      u.jsx(ot, {}),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }
  const Oi = ({ className: e, children: t, icon: r, view: n, ...s }) => {
      const {
          isMoving: o,
          setIsMoving: i,
          isGlobalView: a,
          setIsGlobalView: l,
          currentView: c,
          setCurrentView: d,
        } = N.useContext(Ra),
        p = () => {
          o ||
            (i(!0),
            d(n),
            l(!1),
            setTimeout(() => {
              i(!1);
            }, 700));
        };
      return u.jsxs("div", {
        className: U("flex relative flex-col h-screen w-screen", e),
        ...s,
        children: [
          u.jsx("div", {
            onClick: p,
            className: U(
              "group/view flex absolute top-0 left-0 bg-base-100 h-screen w-screen border-[0.5rem] border-edge-100 text-base-100 group-hover/view:text-edge-100 z-50 cursor-pointer pointer-events-none opacity-0 duration-700 transition-opacity",
              a && "opacity-100 pointer-events-auto",
            ),
            children: u.jsxs("div", {
              className: U(
                "flex relative flex-1 justify-center items-center flex-col bg-edge-100 border-[0.5rem] border-edge-100 duration-300 lg:group-hover/view:translate-x-[2rem] lg:group-hover/view:translate-y-[-2rem]",
                c.view === n && "text-primary-100",
              ),
              children: [
                u.jsx(Ee, { className: "text-[130pt] z-20", icon: r }),
                u.jsx("div", {
                  className:
                    "flex text-[35pt] pl-[1rem] border-base-100 md:text-[80pt] z-20",
                  children: n,
                }),
              ],
            }),
          }),
          u.jsx("div", {
            className: "flex",
            children: c.view === n ? t : null,
          }),
        ],
      });
    },
    Ku = () => window.matchMedia("(min-width: 1024px)");
  function tO() {
    const { currentView: e, isMoving: t, isGlobalView: r } = N.useContext(Ra),
      [n, s] = N.useState(Ku().matches);
    return (
      N.useEffect(() => {
        const o = (i) => {
          s(i.matches);
        };
        return (
          Ku().addEventListener("change", o),
          () => {
            Ku().removeEventListener("change", o);
          }
        );
      }, []),
      u.jsxs(u.Fragment, {
        children: [
          u.jsx(Xm, {}),
          u.jsx(eO, {}),
          u.jsx("div", {
            className: U(
              "flex h-screen w-screen bg-base-100 flex-1 main-background bg-center overflow-hidden duration-1000 transition-[background-size] will-change-[background-size]",
              r && "main-background-global-view",
            ),
            children: u.jsxs("div", {
              style: {
                transform: `translate3d(${r ? (n ? "calc(-100vw + 2.2rem)" : "-100vw") : e.horizontalTranslation}, ${r ? (n ? "-100vh" : "calc(-100vh + 2rem)") : e.verticalTranslation}, 0) scale3d(${r ? "25%" : "100%"}, ${r ? "25%" : "100%"}, 100%)`,
              },
              className: U(
                "grid grid-cols-3 min-h-[300vh] min-w-[300vw] transition-[transform] will-change-[transform]",
                t && "duration-700",
              ),
              children: [
                u.jsx(Oi, {
                  view: eo.SKILLS,
                  icon: E6,
                  children: u.jsx(Zk, {}),
                }),
                u.jsx(ol, {}),
                u.jsx(Oi, {
                  view: eo.PROJECTS,
                  icon: T6,
                  children: u.jsx(NS, { children: u.jsx(pk, {}) }),
                }),
                u.jsx(ol, {}),
                u.jsx(Oi, {
                  view: eo.ABOUT,
                  icon: Eg,
                  children: u.jsx(Zy, {}),
                }),
                u.jsx(ol, {}),
                u.jsx(Oi, {
                  view: eo.EXPERIENCE,
                  icon: Rg,
                  children: u.jsx(Qk, {}),
                }),
                u.jsx(ol, {}),
                u.jsx(Oi, {
                  view: eo.CONTACT,
                  icon: hg,
                  children: u.jsx(Vy, {}),
                }),
              ],
            }),
          }),
        ],
      })
    );
  }
  const rO = new dC();
  Qu.createRoot(document.getElementById("root")).render(
    u.jsx(H2.StrictMode, {
      children: u.jsx(gC, {
        client: rO,
        children: u.jsx(ck, {
          children: u.jsx(ym, { children: u.jsx(tO, {}) }),
        }),
      }),
    }),
  );
});
export default nO();

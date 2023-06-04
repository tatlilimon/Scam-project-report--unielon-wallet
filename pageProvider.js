!(function () {
  var r = {
      30659: function (e, t, r) {
        "use strict";
        var n,
          o = r(56690).default,
          i = r(89728).default,
          s = r(61655).default,
          u = r(26389).default,
          a = r(33496).default,
          c =
            (Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.EthereumProviderError = t.EthereumRpcError = void 0),
            r(31116)),
          a =
            ((r = a(Error)),
            s(f, r),
            (n = u(f)),
            i(f, [
              {
                key: "serialize",
                value: function () {
                  var e = { code: this.code, message: this.message };
                  return (
                    void 0 !== this.data && (e.data = this.data),
                    this.stack && (e.stack = this.stack),
                    e
                  );
                },
              },
              {
                key: "toString",
                value: function () {
                  return c.default(this.serialize(), d, 2);
                },
              },
            ]),
            f);
        function f(e, t, r) {
          if ((o(this, f), !Number.isInteger(e)))
            throw new Error('"code" must be an integer.');
          if (t && "string" == typeof t)
            return (
              ((t = n.call(this, t)).code = e), void 0 !== r && (t.data = r), t
            );
          throw new Error('"message" must be a nonempty string.');
        }
        t.EthereumRpcError = a;
        s(p, a), (l = u(p));
        var l,
          r = i(p);
        function p(e, t, r) {
          var n;
          if (
            (o(this, p), (n = e), Number.isInteger(n) && 1e3 <= n && n <= 4999)
          )
            return l.call(this, e, t, r);
          throw new Error(
            '"code" must be an integer such that: 1000 <= code <= 4999'
          );
        }
        function d(e, t) {
          if ("[Circular]" !== t) return t;
        }
        t.EthereumProviderError = r;
      },
      83133: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.errorValues = t.errorCodes = void 0),
          (t.errorCodes = {
            rpc: {
              invalidInput: -32e3,
              resourceNotFound: -32001,
              resourceUnavailable: -32002,
              transactionRejected: -32003,
              methodNotSupported: -32004,
              limitExceeded: -32005,
              parse: -32700,
              invalidRequest: -32600,
              methodNotFound: -32601,
              invalidParams: -32602,
              internal: -32603,
            },
            provider: {
              userRejectedRequest: 4001,
              unauthorized: 4100,
              unsupportedMethod: 4200,
              disconnected: 4900,
              chainDisconnected: 4901,
            },
          }),
          (t.errorValues = {
            "-32700": {
              standard: "JSON RPC 2.0",
              message:
                "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
            },
            "-32600": {
              standard: "JSON RPC 2.0",
              message: "The JSON sent is not a valid Request object.",
            },
            "-32601": {
              standard: "JSON RPC 2.0",
              message: "The method does not exist / is not available.",
            },
            "-32602": {
              standard: "JSON RPC 2.0",
              message: "Invalid method parameter(s).",
            },
            "-32603": {
              standard: "JSON RPC 2.0",
              message: "Internal JSON-RPC error.",
            },
            "-32000": { standard: "EIP-1474", message: "Invalid input." },
            "-32001": { standard: "EIP-1474", message: "Resource not found." },
            "-32002": {
              standard: "EIP-1474",
              message: "Resource unavailable.",
            },
            "-32003": {
              standard: "EIP-1474",
              message: "Transaction rejected.",
            },
            "-32004": {
              standard: "EIP-1474",
              message: "Method not supported.",
            },
            "-32005": {
              standard: "EIP-1474",
              message: "Request limit exceeded.",
            },
            4001: {
              standard: "EIP-1193",
              message: "User rejected the request.",
            },
            4100: {
              standard: "EIP-1193",
              message:
                "The requested account and/or method has not been authorized by the user.",
            },
            4200: {
              standard: "EIP-1193",
              message:
                "The requested method is not supported by this Ethereum provider.",
            },
            4900: {
              standard: "EIP-1193",
              message: "The provider is disconnected from all chains.",
            },
            4901: {
              standard: "EIP-1193",
              message: "The provider is disconnected from the specified chain.",
            },
          });
      },
      7801: function (e, t, r) {
        "use strict";
        var n = r(27424).default,
          o =
            (Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.ethErrors = void 0),
            r(30659)),
          i = r(91264),
          s = r(83133);
        function u(e, t) {
          var t = c(t),
            t = n(t, 2),
            r = t[0],
            t = t[1];
          return new o.EthereumRpcError(e, r || i.getMessageFromCode(e), t);
        }
        function a(e, t) {
          var t = c(t),
            t = n(t, 2),
            r = t[0],
            t = t[1];
          return new o.EthereumProviderError(
            e,
            r || i.getMessageFromCode(e),
            t
          );
        }
        function c(e) {
          if (e) {
            if ("string" == typeof e) return [e];
            if ("object" == typeof e && !Array.isArray(e)) {
              var t = e.message,
                e = e.data;
              if (t && "string" != typeof t)
                throw new Error("Must specify string message.");
              return [t || void 0, e];
            }
          }
          return [];
        }
        t.ethErrors = {
          rpc: {
            parse: function (e) {
              return u(s.errorCodes.rpc.parse, e);
            },
            invalidRequest: function (e) {
              return u(s.errorCodes.rpc.invalidRequest, e);
            },
            invalidParams: function (e) {
              return u(s.errorCodes.rpc.invalidParams, e);
            },
            methodNotFound: function (e) {
              return u(s.errorCodes.rpc.methodNotFound, e);
            },
            internal: function (e) {
              return u(s.errorCodes.rpc.internal, e);
            },
            server: function (e) {
              if (!e || "object" != typeof e || Array.isArray(e))
                throw new Error(
                  "Ethereum RPC Server errors must provide single object argument."
                );
              var t = e.code;
              if (!Number.isInteger(t) || -32005 < t || t < -32099)
                throw new Error(
                  '"code" must be an integer such that: -32099 <= code <= -32005'
                );
              return u(t, e);
            },
            invalidInput: function (e) {
              return u(s.errorCodes.rpc.invalidInput, e);
            },
            resourceNotFound: function (e) {
              return u(s.errorCodes.rpc.resourceNotFound, e);
            },
            resourceUnavailable: function (e) {
              return u(s.errorCodes.rpc.resourceUnavailable, e);
            },
            transactionRejected: function (e) {
              return u(s.errorCodes.rpc.transactionRejected, e);
            },
            methodNotSupported: function (e) {
              return u(s.errorCodes.rpc.methodNotSupported, e);
            },
            limitExceeded: function (e) {
              return u(s.errorCodes.rpc.limitExceeded, e);
            },
          },
          provider: {
            userRejectedRequest: function (e) {
              return a(s.errorCodes.provider.userRejectedRequest, e);
            },
            unauthorized: function (e) {
              return a(s.errorCodes.provider.unauthorized, e);
            },
            unsupportedMethod: function (e) {
              return a(s.errorCodes.provider.unsupportedMethod, e);
            },
            disconnected: function (e) {
              return a(s.errorCodes.provider.disconnected, e);
            },
            chainDisconnected: function (e) {
              return a(s.errorCodes.provider.chainDisconnected, e);
            },
            custom: function (e) {
              if (!e || "object" != typeof e || Array.isArray(e))
                throw new Error(
                  "Ethereum Provider custom errors must provide single object argument."
                );
              var t = e.code,
                r = e.message,
                e = e.data;
              if (r && "string" == typeof r)
                return new o.EthereumProviderError(t, r, e);
              throw new Error('"message" must be a nonempty string');
            },
          },
        };
      },
      84920: function (e, t, r) {
        "use strict";
        (t.Xy = t.Sy = void 0), r(30659);
        var n = r(91264),
          o =
            (Object.defineProperty(t, "Xy", {
              enumerable: !0,
              get: function () {
                return n.serializeError;
              },
            }),
            r(7801));
        Object.defineProperty(t, "Sy", {
          enumerable: !0,
          get: function () {
            return o.ethErrors;
          },
        }),
          r(83133);
      },
      91264: function (e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.serializeError =
            n.isValidCode =
            n.getMessageFromCode =
            n.JSON_RPC_SERVER_ERROR_MESSAGE =
              void 0);
        var o = t(83133),
          i = t(30659),
          t = o.errorCodes.rpc.internal,
          s = { code: t, message: u(t) };
        function u(e) {
          var t =
            1 < arguments.length && void 0 !== arguments[1]
              ? arguments[1]
              : "Unspecified error message. This is a bug, please report it.";
          if (Number.isInteger(e)) {
            var r = e.toString();
            if (l(o.errorValues, r)) return o.errorValues[r].message;
            if (c(e)) return n.JSON_RPC_SERVER_ERROR_MESSAGE;
          }
          return t;
        }
        function a(e) {
          var t;
          return (
            !!Number.isInteger(e) &&
            ((t = e.toString()), !!o.errorValues[t] || !!c(e))
          );
        }
        function c(e) {
          return -32099 <= e && e <= -32e3;
        }
        function f(e) {
          return e && "object" == typeof e && !Array.isArray(e)
            ? Object.assign({}, e)
            : e;
        }
        function l(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }
        (n.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error."),
          (n.getMessageFromCode = u),
          (n.isValidCode = a),
          (n.serializeError = function (e) {
            var t,
              r,
              n =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              o = n.fallbackError,
              o = void 0 === o ? s : o,
              n = n.shouldIncludeStack,
              n = void 0 !== n && n;
            if (o && Number.isInteger(o.code) && "string" == typeof o.message)
              return e instanceof i.EthereumRpcError
                ? e.serialize()
                : ((t = {}),
                  e &&
                  "object" == typeof e &&
                  !Array.isArray(e) &&
                  l(e, "code") &&
                  a(e.code)
                    ? ((t.code = (r = e).code),
                      r.message && "string" == typeof r.message
                        ? ((t.message = r.message),
                          l(r, "data") && (t.data = r.data))
                        : ((t.message = u(t.code)),
                          (t.data = { originalError: f(e) })))
                    : ((t.code = o.code),
                      (r = null == (r = e) ? void 0 : r.message),
                      (t.message = r && "string" == typeof r ? r : o.message),
                      (t.data = { originalError: f(e) })),
                  (o = null == (r = e) ? void 0 : r.stack),
                  n && e && o && "string" == typeof o && (t.stack = o),
                  t);
            throw new Error(
              "Must provide fallback error with integer number code and string message."
            );
          });
      },
      85375: function (e) {
        "use strict";
        var t = "object" == typeof Reflect ? Reflect : null,
          a =
            t && "function" == typeof t.apply
              ? t.apply
              : function (e, t, r) {
                  return Function.prototype.apply.call(e, t, r);
                },
          r =
            t && "function" == typeof t.ownKeys
              ? t.ownKeys
              : Object.getOwnPropertySymbols
              ? function (e) {
                  return Object.getOwnPropertyNames(e).concat(
                    Object.getOwnPropertySymbols(e)
                  );
                }
              : function (e) {
                  return Object.getOwnPropertyNames(e);
                },
          n =
            Number.isNaN ||
            function (e) {
              return e != e;
            };
        function o() {
          o.init.call(this);
        }
        (e.exports = o),
          (e.exports.once = function (o, i) {
            return new Promise(function (e, t) {
              function r(e) {
                o.removeListener(i, n), t(e);
              }
              function n() {
                "function" == typeof o.removeListener &&
                  o.removeListener("error", r),
                  e([].slice.call(arguments));
              }
              h(o, i, n, { once: !0 }),
                "error" !== i &&
                  "function" == typeof o.on &&
                  h(o, "error", r, { once: !0 });
            });
          }),
          ((o.EventEmitter = o).prototype._events = void 0),
          (o.prototype._eventsCount = 0),
          (o.prototype._maxListeners = void 0);
        var i = 10;
        function c(e) {
          if ("function" != typeof e)
            throw new TypeError(
              'The "listener" argument must be of type Function. Received type ' +
                typeof e
            );
        }
        function s(e) {
          return void 0 === e._maxListeners
            ? o.defaultMaxListeners
            : e._maxListeners;
        }
        function u(e, t, r, n) {
          var o, i;
          return (
            c(r),
            void 0 === (o = e._events)
              ? ((o = e._events = Object.create(null)), (e._eventsCount = 0))
              : (void 0 !== o.newListener &&
                  (e.emit("newListener", t, r.listener || r), (o = e._events)),
                (i = o[t])),
            void 0 === i
              ? ((i = o[t] = r), ++e._eventsCount)
              : ("function" == typeof i
                  ? (i = o[t] = n ? [r, i] : [i, r])
                  : n
                  ? i.unshift(r)
                  : i.push(r),
                0 < (o = s(e)) &&
                  i.length > o &&
                  !i.warned &&
                  ((i.warned = !0),
                  ((n = new Error(
                    "Possible EventEmitter memory leak detected. " +
                      i.length +
                      " " +
                      String(t) +
                      " listeners added. Use emitter.setMaxListeners() to increase limit"
                  )).name = "MaxListenersExceededWarning"),
                  (n.emitter = e),
                  (n.type = t),
                  (n.count = i.length),
                  console) &&
                  console.warn &&
                  console.warn(n)),
            e
          );
        }
        function f(e, t, r) {
          (e = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r }),
            (t = function () {
              if (!this.fired)
                return (
                  this.target.removeListener(this.type, this.wrapFn),
                  (this.fired = !0),
                  0 === arguments.length
                    ? this.listener.call(this.target)
                    : this.listener.apply(this.target, arguments)
                );
            }.bind(e));
          return (t.listener = r), (e.wrapFn = t);
        }
        function l(e, t, r) {
          e = e._events;
          if (void 0 === e) return [];
          e = e[t];
          {
            if (void 0 === e) return [];
            if ("function" == typeof e) return r ? [e.listener || e] : [e];
            if (r) {
              for (var n = e, o = new Array(n.length), i = 0; i < o.length; ++i)
                o[i] = n[i].listener || n[i];
              return o;
            }
            return d(e, e.length);
          }
        }
        function p(e) {
          var t = this._events;
          if (void 0 !== t) {
            t = t[e];
            if ("function" == typeof t) return 1;
            if (void 0 !== t) return t.length;
          }
          return 0;
        }
        function d(e, t) {
          for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
          return r;
        }
        function h(r, n, o, i) {
          if ("function" == typeof r.on) i.once ? r.once(n, o) : r.on(n, o);
          else {
            if ("function" != typeof r.addEventListener)
              throw new TypeError(
                'The "emitter" argument must be of type EventEmitter. Received type ' +
                  typeof r
              );
            r.addEventListener(n, function e(t) {
              i.once && r.removeEventListener(n, e), o(t);
            });
          }
        }
        Object.defineProperty(o, "defaultMaxListeners", {
          enumerable: !0,
          get: function () {
            return i;
          },
          set: function (e) {
            if ("number" != typeof e || e < 0 || n(e))
              throw new RangeError(
                'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                  e +
                  "."
              );
            i = e;
          },
        }),
          (o.init = function () {
            (void 0 !== this._events &&
              this._events !== Object.getPrototypeOf(this)._events) ||
              ((this._events = Object.create(null)), (this._eventsCount = 0)),
              (this._maxListeners = this._maxListeners || void 0);
          }),
          (o.prototype.setMaxListeners = function (e) {
            if ("number" != typeof e || e < 0 || n(e))
              throw new RangeError(
                'The value of "n" is out of range. It must be a non-negative number. Received ' +
                  e +
                  "."
              );
            return (this._maxListeners = e), this;
          }),
          (o.prototype.getMaxListeners = function () {
            return s(this);
          }),
          (o.prototype.emit = function (e) {
            for (var t = [], r = 1; r < arguments.length; r++)
              t.push(arguments[r]);
            var n = "error" === e,
              o = this._events;
            if (void 0 !== o) n = n && void 0 === o.error;
            else if (!n) return !1;
            if (n) {
              if ((i = 0 < t.length ? t[0] : i) instanceof Error) throw i;
              n = new Error(
                "Unhandled error." + (i ? " (" + i.message + ")" : "")
              );
              throw ((n.context = i), n);
            }
            var i = o[e];
            if (void 0 === i) return !1;
            if ("function" == typeof i) a(i, this, t);
            else
              for (var s = i.length, u = d(i, s), r = 0; r < s; ++r)
                a(u[r], this, t);
            return !0;
          }),
          (o.prototype.on = o.prototype.addListener =
            function (e, t) {
              return u(this, e, t, !1);
            }),
          (o.prototype.prependListener = function (e, t) {
            return u(this, e, t, !0);
          }),
          (o.prototype.once = function (e, t) {
            return c(t), this.on(e, f(this, e, t)), this;
          }),
          (o.prototype.prependOnceListener = function (e, t) {
            return c(t), this.prependListener(e, f(this, e, t)), this;
          }),
          (o.prototype.off = o.prototype.removeListener =
            function (e, t) {
              var r, n, o, i, s;
              if (
                (c(t), void 0 !== (n = this._events) && void 0 !== (r = n[e]))
              )
                if (r === t || r.listener === t)
                  0 == --this._eventsCount
                    ? (this._events = Object.create(null))
                    : (delete n[e],
                      n.removeListener &&
                        this.emit("removeListener", e, r.listener || t));
                else if ("function" != typeof r) {
                  for (o = -1, i = r.length - 1; 0 <= i; i--)
                    if (r[i] === t || r[i].listener === t) {
                      (s = r[i].listener), (o = i);
                      break;
                    }
                  if (o < 0) return this;
                  if (0 === o) r.shift();
                  else {
                    var u = r;
                    var a = o;
                    for (; a + 1 < u.length; a++) u[a] = u[a + 1];
                    u.pop();
                  }
                  1 === r.length && (n[e] = r[0]),
                    void 0 !== n.removeListener &&
                      this.emit("removeListener", e, s || t);
                }
              return this;
            }),
          (o.prototype.removeAllListeners = function (e) {
            var t, r;
            if (void 0 !== (r = this._events))
              if (void 0 === r.removeListener)
                0 === arguments.length
                  ? ((this._events = Object.create(null)),
                    (this._eventsCount = 0))
                  : void 0 !== r[e] &&
                    (0 == --this._eventsCount
                      ? (this._events = Object.create(null))
                      : delete r[e]);
              else if (0 === arguments.length) {
                for (var n, o = Object.keys(r), i = 0; i < o.length; ++i)
                  "removeListener" !== (n = o[i]) && this.removeAllListeners(n);
                this.removeAllListeners("removeListener"),
                  (this._events = Object.create(null)),
                  (this._eventsCount = 0);
              } else if ("function" == typeof (t = r[e]))
                this.removeListener(e, t);
              else if (void 0 !== t)
                for (i = t.length - 1; 0 <= i; i--)
                  this.removeListener(e, t[i]);
            return this;
          }),
          (o.prototype.listeners = function (e) {
            return l(this, e, !0);
          }),
          (o.prototype.rawListeners = function (e) {
            return l(this, e, !1);
          }),
          (o.listenerCount = function (e, t) {
            return "function" == typeof e.listenerCount
              ? e.listenerCount(t)
              : p.call(e, t);
          }),
          (o.prototype.listenerCount = p),
          (o.prototype.eventNames = function () {
            return 0 < this._eventsCount ? r(this._events) : [];
          });
      },
      31116: function (e) {
        (((e.exports = t).default = t).stable = r), (t.stableStringify = r);
        var p = "[...]",
          d = "[Circular]",
          h = [],
          s = [];
        function u() {
          return {
            depthLimit: Number.MAX_SAFE_INTEGER,
            edgesLimit: Number.MAX_SAFE_INTEGER,
          };
        }
        function t(e, t, r, n) {
          var o;
          (function e(t, r, n, o, i, s, u) {
            var a;
            if (((s += 1), "object" == typeof t && null !== t)) {
              for (a = 0; a < o.length; a++)
                if (o[a] === t) return void v(d, t, r, i);
              if (void 0 !== u.depthLimit && s > u.depthLimit) v(p, t, r, i);
              else if (void 0 !== u.edgesLimit && n + 1 > u.edgesLimit)
                v(p, t, r, i);
              else {
                if ((o.push(t), Array.isArray(t)))
                  for (a = 0; a < t.length; a++) e(t[a], a, a, o, t, s, u);
                else {
                  var c = Object.keys(t);
                  for (a = 0; a < c.length; a++) {
                    var f = c[a];
                    e(t[f], f, a, o, t, s, u);
                  }
                }
                o.pop();
              }
            }
          })(e, "", 0, [], void 0, 0, (n = void 0 === n ? u() : n));
          try {
            o =
              0 === s.length
                ? JSON.stringify(e, t, r)
                : JSON.stringify(e, a(t), r);
          } catch (e) {
            return JSON.stringify(
              "[unable to serialize, circular reference is too complex to analyze]"
            );
          } finally {
            for (; 0 !== h.length; ) {
              var i = h.pop();
              4 === i.length
                ? Object.defineProperty(i[0], i[1], i[3])
                : (i[0][i[1]] = i[2]);
            }
          }
          return o;
        }
        function v(e, t, r, n) {
          var o = Object.getOwnPropertyDescriptor(n, r);
          void 0 !== o.get
            ? o.configurable
              ? (Object.defineProperty(n, r, { value: e }),
                h.push([n, r, t, o]))
              : s.push([t, r, e])
            : ((n[r] = e), h.push([n, r, t]));
        }
        function y(e, t) {
          return e < t ? -1 : t < e ? 1 : 0;
        }
        function r(e, t, r, n) {
          var o,
            n =
              (function e(t, r, n, o, i, s, u) {
                var a;
                if (((s += 1), "object" == typeof t && null !== t)) {
                  for (a = 0; a < o.length; a++)
                    if (o[a] === t) return void v(d, t, r, i);
                  try {
                    if ("function" == typeof t.toJSON) return;
                  } catch (t) {
                    return;
                  }
                  if (void 0 !== u.depthLimit && s > u.depthLimit)
                    v(p, t, r, i);
                  else if (void 0 !== u.edgesLimit && n + 1 > u.edgesLimit)
                    v(p, t, r, i);
                  else {
                    if ((o.push(t), Array.isArray(t)))
                      for (a = 0; a < t.length; a++) e(t[a], a, a, o, t, s, u);
                    else {
                      var c = {},
                        f = Object.keys(t).sort(y);
                      for (a = 0; a < f.length; a++) {
                        var l = f[a];
                        e(t[l], l, a, o, t, s, u), (c[l] = t[l]);
                      }
                      if (void 0 === i) return c;
                      h.push([i, r, t]), (i[r] = c);
                    }
                    o.pop();
                  }
                }
              })(e, "", 0, [], void 0, 0, (n = void 0 === n ? u() : n)) || e;
          try {
            o =
              0 === s.length
                ? JSON.stringify(n, t, r)
                : JSON.stringify(n, a(t), r);
          } catch (e) {
            return JSON.stringify(
              "[unable to serialize, circular reference is too complex to analyze]"
            );
          } finally {
            for (; 0 !== h.length; ) {
              var i = h.pop();
              4 === i.length
                ? Object.defineProperty(i[0], i[1], i[3])
                : (i[0][i[1]] = i[2]);
            }
          }
          return o;
        }
        function a(o) {
          return (
            (o =
              void 0 !== o
                ? o
                : function (e, t) {
                    return t;
                  }),
            function (e, t) {
              if (0 < s.length)
                for (var r = 0; r < s.length; r++) {
                  var n = s[r];
                  if (n[1] === e && n[0] === t) {
                    (t = n[2]), s.splice(r, 1);
                    break;
                  }
                }
              return o.call(this, e, t);
            }
          );
        }
      },
      73897: function (e) {
        (e.exports = function (e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      85372: function (e) {
        (e.exports = function (e) {
          if (Array.isArray(e)) return e;
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      66115: function (e) {
        (e.exports = function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      56690: function (e) {
        (e.exports = function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      3515: function (n, e, t) {
        var o = t(6015),
          i = t(69617);
        function s(e, t, r) {
          return (
            i()
              ? (n.exports = s = Reflect.construct.bind())
              : (n.exports = s =
                  function (e, t, r) {
                    var n = [null],
                      t =
                        (n.push.apply(n, t), new (Function.bind.apply(e, n))());
                    return r && o(t, r.prototype), t;
                  }),
            (n.exports.__esModule = !0),
            (n.exports.default = n.exports),
            s.apply(null, arguments)
          );
        }
        (n.exports = s),
          (n.exports.__esModule = !0),
          (n.exports.default = n.exports);
      },
      89728: function (e, t, r) {
        var o = r(64062);
        function n(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, o(n.key), n);
          }
        }
        (e.exports = function (e, t, r) {
          return (
            t && n(e.prototype, t),
            r && n(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      26389: function (e, t, r) {
        var o = r(73808),
          i = r(69617),
          s = r(94993);
        (e.exports = function (r) {
          var n = i();
          return function () {
            var e,
              t = o(r);
            return (
              (e = n
                ? ((e = o(this).constructor),
                  Reflect.construct(t, arguments, e))
                : t.apply(this, arguments)),
              s(this, e)
            );
          };
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      73808: function (t) {
        function r(e) {
          return (
            (t.exports = r =
              Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports),
            r(e)
          );
        }
        (t.exports = r),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      61655: function (e, t, r) {
        var n = r(6015);
        (e.exports = function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && n(e, t);
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      46035: function (e) {
        (e.exports = function (e) {
          return -1 !== Function.toString.call(e).indexOf("[native code]");
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      69617: function (e) {
        (e.exports = function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      68872: function (e) {
        (e.exports = function (e, t) {
          var r =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != r) {
            var n,
              o,
              i,
              s,
              u = [],
              a = !0,
              c = !1;
            try {
              if (((i = (r = r.call(e)).next), 0 === t)) {
                if (Object(r) !== r) return;
                a = !1;
              } else
                for (
                  ;
                  !(a = (n = i.call(r)).done) &&
                  (u.push(n.value), u.length !== t);
                  a = !0
                );
            } catch (e) {
              (c = !0), (o = e);
            } finally {
              try {
                if (
                  !a &&
                  null != r.return &&
                  ((s = r.return()), Object(s) !== s)
                )
                  return;
              } finally {
                if (c) throw o;
              }
            }
            return u;
          }
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      12218: function (e) {
        (e.exports = function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      94993: function (e, t, r) {
        var n = r(18698).default,
          o = r(66115);
        (e.exports = function (e, t) {
          if (t && ("object" === n(t) || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return o(e);
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      6015: function (r) {
        function n(e, t) {
          return (
            (r.exports = n =
              Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
            (r.exports.__esModule = !0),
            (r.exports.default = r.exports),
            n(e, t)
          );
        }
        (r.exports = n),
          (r.exports.__esModule = !0),
          (r.exports.default = r.exports);
      },
      27424: function (e, t, r) {
        var n = r(85372),
          o = r(68872),
          i = r(86116),
          s = r(12218);
        (e.exports = function (e, t) {
          return n(e) || o(e, t) || i(e, t) || s();
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      95036: function (e, t, r) {
        var n = r(18698).default;
        (e.exports = function (e, t) {
          if ("object" !== n(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 === r) return ("string" === t ? String : Number)(e);
          r = r.call(e, t || "default");
          if ("object" !== n(r)) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      64062: function (e, t, r) {
        var n = r(18698).default,
          o = r(95036);
        (e.exports = function (e) {
          e = o(e, "string");
          return "symbol" === n(e) ? e : String(e);
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      18698: function (t) {
        function r(e) {
          return (
            (t.exports = r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports),
            r(e)
          );
        }
        (t.exports = r),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      86116: function (e, t, r) {
        var n = r(73897);
        (e.exports = function (e, t) {
          var r;
          if (e)
            return "string" == typeof e
              ? n(e, t)
              : "Map" ===
                  (r =
                    "Object" ===
                      (r = Object.prototype.toString.call(e).slice(8, -1)) &&
                    e.constructor
                      ? e.constructor.name
                      : r) || "Set" === r
              ? Array.from(e)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? n(e, t)
              : void 0;
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      33496: function (t, e, r) {
        var n = r(73808),
          o = r(6015),
          i = r(46035),
          s = r(3515);
        function u(e) {
          var r = "function" == typeof Map ? new Map() : void 0;
          return (
            (t.exports = u =
              function (e) {
                if (null === e || !i(e)) return e;
                if ("function" != typeof e)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                if (void 0 !== r) {
                  if (r.has(e)) return r.get(e);
                  r.set(e, t);
                }
                function t() {
                  return s(e, arguments, n(this).constructor);
                }
                return (
                  (t.prototype = Object.create(e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                  o(t, e)
                );
              }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports),
            u(e)
          );
        }
        (t.exports = u),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
    },
    n = {};
  function M(e) {
    var t = n[e];
    return (
      void 0 !== t || ((t = n[e] = { exports: {} }), r[e](t, t.exports, M)),
      t.exports
    );
  }
  !(function () {
    "use strict";
    function O(e) {
      return (O =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function P() {
      P = function () {
        return s;
      };
      var s = {},
        e = Object.prototype,
        a = e.hasOwnProperty,
        c =
          Object.defineProperty ||
          function (e, t, r) {
            e[t] = r.value;
          },
        t = "function" == typeof Symbol ? Symbol : {},
        n = t.iterator || "@@iterator",
        r = t.asyncIterator || "@@asyncIterator",
        o = t.toStringTag || "@@toStringTag";
      function i(e, t, r) {
        return (
          Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          e[t]
        );
      }
      try {
        i({}, "");
      } catch (e) {
        i = function (e, t, r) {
          return (e[t] = r);
        };
      }
      function u(e, t, r, n) {
        var o,
          i,
          s,
          u,
          t = t && t.prototype instanceof p ? t : p,
          t = Object.create(t.prototype),
          n = new w(n || []);
        return (
          c(t, "_invoke", {
            value:
              ((o = e),
              (i = r),
              (s = n),
              (u = "suspendedStart"),
              function (e, t) {
                if ("executing" === u)
                  throw new Error("Generator is already running");
                if ("completed" === u) {
                  if ("throw" === e) throw t;
                  return { value: void 0, done: !0 };
                }
                for (s.method = e, s.arg = t; ; ) {
                  var r = s.delegate;
                  if (r) {
                    r = (function e(t, r) {
                      var n = r.method,
                        o = t.iterator[n];
                      if (void 0 === o)
                        return (
                          (r.delegate = null),
                          ("throw" === n &&
                            t.iterator.return &&
                            ((r.method = "return"),
                            (r.arg = void 0),
                            e(t, r),
                            "throw" === r.method)) ||
                            ("return" !== n &&
                              ((r.method = "throw"),
                              (r.arg = new TypeError(
                                "The iterator does not provide a '" +
                                  n +
                                  "' method"
                              )))),
                          l
                        );
                      n = f(o, t.iterator, r.arg);
                      if ("throw" === n.type)
                        return (
                          (r.method = "throw"),
                          (r.arg = n.arg),
                          (r.delegate = null),
                          l
                        );
                      o = n.arg;
                      return o
                        ? o.done
                          ? ((r[t.resultName] = o.value),
                            (r.next = t.nextLoc),
                            "return" !== r.method &&
                              ((r.method = "next"), (r.arg = void 0)),
                            (r.delegate = null),
                            l)
                          : o
                        : ((r.method = "throw"),
                          (r.arg = new TypeError(
                            "iterator result is not an object"
                          )),
                          (r.delegate = null),
                          l);
                    })(r, s);
                    if (r) {
                      if (r === l) continue;
                      return r;
                    }
                  }
                  if ("next" === s.method) s.sent = s._sent = s.arg;
                  else if ("throw" === s.method) {
                    if ("suspendedStart" === u)
                      throw ((u = "completed"), s.arg);
                    s.dispatchException(s.arg);
                  } else "return" === s.method && s.abrupt("return", s.arg);
                  u = "executing";
                  r = f(o, i, s);
                  if ("normal" === r.type) {
                    if (
                      ((u = s.done ? "completed" : "suspendedYield"),
                      r.arg === l)
                    )
                      continue;
                    return { value: r.arg, done: s.done };
                  }
                  "throw" === r.type &&
                    ((u = "completed"), (s.method = "throw"), (s.arg = r.arg));
                }
              }),
          }),
          t
        );
      }
      function f(e, t, r) {
        try {
          return { type: "normal", arg: e.call(t, r) };
        } catch (e) {
          return { type: "throw", arg: e };
        }
      }
      s.wrap = u;
      var l = {};
      function p() {}
      function d() {}
      function h() {}
      var t = {},
        v =
          (i(t, n, function () {
            return this;
          }),
          Object.getPrototypeOf),
        v = v && v(v(x([]))),
        y =
          (v && v !== e && a.call(v, n) && (t = v),
          (h.prototype = p.prototype = Object.create(t)));
      function m(e) {
        ["next", "throw", "return"].forEach(function (t) {
          i(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function g(s, u) {
        var t;
        c(this, "_invoke", {
          value: function (r, n) {
            function e() {
              return new u(function (e, t) {
                !(function t(e, r, n, o) {
                  var i,
                    e = f(s[e], s, r);
                  if ("throw" !== e.type)
                    return (r = (i = e.arg).value) &&
                      "object" == O(r) &&
                      a.call(r, "__await")
                      ? u.resolve(r.__await).then(
                          function (e) {
                            t("next", e, n, o);
                          },
                          function (e) {
                            t("throw", e, n, o);
                          }
                        )
                      : u.resolve(r).then(
                          function (e) {
                            (i.value = e), n(i);
                          },
                          function (e) {
                            return t("throw", e, n, o);
                          }
                        );
                  o(e.arg);
                })(r, n, e, t);
              });
            }
            return (t = t ? t.then(e, e) : e());
          },
        });
      }
      function b(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function _(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function w(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(b, this),
          this.reset(!0);
      }
      function x(t) {
        if (t) {
          var r,
            e = t[n];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length))
            return (
              (r = -1),
              ((e = function e() {
                for (; ++r < t.length; )
                  if (a.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                return (e.value = void 0), (e.done = !0), e;
              }).next = e)
            );
        }
        return { next: E };
      }
      function E() {
        return { value: void 0, done: !0 };
      }
      return (
        c(y, "constructor", { value: (d.prototype = h), configurable: !0 }),
        c(h, "constructor", { value: d, configurable: !0 }),
        (d.displayName = i(h, o, "GeneratorFunction")),
        (s.isGeneratorFunction = function (e) {
          e = "function" == typeof e && e.constructor;
          return (
            !!e &&
            (e === d || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (s.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, h)
              : ((e.__proto__ = h), i(e, o, "GeneratorFunction")),
            (e.prototype = Object.create(y)),
            e
          );
        }),
        (s.awrap = function (e) {
          return { __await: e };
        }),
        m(g.prototype),
        i(g.prototype, r, function () {
          return this;
        }),
        (s.AsyncIterator = g),
        (s.async = function (e, t, r, n, o) {
          void 0 === o && (o = Promise);
          var i = new g(u(e, t, r, n), o);
          return s.isGeneratorFunction(t)
            ? i
            : i.next().then(function (e) {
                return e.done ? e.value : i.next();
              });
        }),
        m(y),
        i(y, o, "Generator"),
        i(y, n, function () {
          return this;
        }),
        i(y, "toString", function () {
          return "[object Generator]";
        }),
        (s.keys = function (e) {
          var t,
            r = Object(e),
            n = [];
          for (t in r) n.push(t);
          return (
            n.reverse(),
            function e() {
              for (; n.length; ) {
                var t = n.pop();
                if (t in r) return (e.value = t), (e.done = !1), e;
              }
              return (e.done = !0), e;
            }
          );
        }),
        (s.values = x),
        (w.prototype = {
          constructor: w,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(_),
              !e)
            )
              for (var t in this)
                "t" === t.charAt(0) &&
                  a.call(this, t) &&
                  !isNaN(+t.slice(1)) &&
                  (this[t] = void 0);
          },
          stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (r) {
            if (this.done) throw r;
            var n = this;
            function e(e, t) {
              return (
                (i.type = "throw"),
                (i.arg = r),
                (n.next = e),
                t && ((n.method = "next"), (n.arg = void 0)),
                !!t
              );
            }
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
              var o = this.tryEntries[t],
                i = o.completion;
              if ("root" === o.tryLoc) return e("end");
              if (o.tryLoc <= this.prev) {
                var s = a.call(o, "catchLoc"),
                  u = a.call(o, "finallyLoc");
                if (s && u) {
                  if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return e(o.finallyLoc);
                } else if (s) {
                  if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                } else {
                  if (!u)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < o.finallyLoc) return e(o.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
              var n = this.tryEntries[r];
              if (
                n.tryLoc <= this.prev &&
                a.call(n, "finallyLoc") &&
                this.prev < n.finallyLoc
              ) {
                var o = n;
                break;
              }
            }
            var i = (o =
              o &&
              ("break" === e || "continue" === e) &&
              o.tryLoc <= t &&
              t <= o.finallyLoc
                ? null
                : o)
              ? o.completion
              : {};
            return (
              (i.type = e),
              (i.arg = t),
              o
                ? ((this.method = "next"), (this.next = o.finallyLoc), l)
                : this.complete(i)
            );
          },
          complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              l
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
              var r = this.tryEntries[t];
              if (r.finallyLoc === e)
                return this.complete(r.completion, r.afterLoc), _(r), l;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
              var r,
                n,
                o = this.tryEntries[t];
              if (o.tryLoc === e)
                return (
                  "throw" === (r = o.completion).type && ((n = r.arg), _(o)), n
                );
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, t, r) {
            return (
              (this.delegate = { iterator: x(e), resultName: t, nextLoc: r }),
              "next" === this.method && (this.arg = void 0),
              l
            );
          },
        }),
        s
      );
    }
    function a(e, t, r, n, o, i, s) {
      try {
        var u = e[i](s),
          a = u.value;
      } catch (e) {
        return r(e);
      }
      u.done ? t(a) : Promise.resolve(a).then(n, o);
    }
    function p(u) {
      return function () {
        var e = this,
          s = arguments;
        return new Promise(function (t, r) {
          var n = u.apply(e, s);
          function o(e) {
            a(n, t, r, o, i, "next", e);
          }
          function i(e) {
            a(n, t, r, o, i, "throw", e);
          }
          o(void 0);
        });
      };
    }
    function n(e, t) {
      for (var r, n = 0; n < t.length; n++) {
        var o = t[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(
            e,
            ((r = (function (e) {
              if ("object" !== O(e) || null === e) return e;
              var t = e[Symbol.toPrimitive];
              if (void 0 === t) return String(e);
              t = t.call(e, "string");
              if ("object" !== O(t)) return t;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            })(o.key)),
            "symbol" === O(r) ? r : String(r)),
            o
          );
      }
    }
    function e(e, t, r) {
      return (
        t && n(e.prototype, t),
        r && n(e, r),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }
    function d(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function h(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function r(e, t) {
      return (r = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
    }
    function t(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && r(e, t);
    }
    function o(e) {
      return (o = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function i(r) {
      var n = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var e,
          t = o(r),
          t =
            ((e = n
              ? ((e = o(this).constructor), Reflect.construct(t, arguments, e))
              : t.apply(this, arguments)),
            this);
        if (e && ("object" === O(e) || "function" == typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return h(t);
      };
    }
    var v,
      y = M(84920),
      s = M(85375);
    function u(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    function c(e, t) {
      var r;
      if (e)
        return "string" == typeof e
          ? u(e, t)
          : "Map" ===
              (r =
                "Object" ===
                  (r = Object.prototype.toString.call(e).slice(8, -1)) &&
                e.constructor
                  ? e.constructor.name
                  : r) || "Set" === r
          ? Array.from(e)
          : "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? u(e, t)
          : void 0;
    }
    function f(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return u(e);
        })(e) ||
        (function () {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })() ||
        c(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    ((l = v = v || {})[(l.SIGN_TX = 0)] = "SIGN_TX"),
      (l[(l.SEND_DOGECOIN = 1)] = "SEND_DOGECOIN"),
      (l[(l.SEND_INSCRIPTION = 2)] = "SEND_INSCRIPTION");
    t(N, s.EventEmitter), (j = i(N));
    var l = e(N),
      m = (t(R, l), (k = i(R)), e(R));
    e(L, [
      {
        key: "_emit",
        value: function (e, t) {
          this.provider._initialized && this.provider.emit(e, t);
        },
      },
    ]);
    var g = L,
      b = e(function e(t) {
        var r = this;
        d(this, e),
          (this._allCheck = []),
          (this._tasks = []),
          (this.check = function (e) {
            (r._allCheck[e - 1] = !0), r._proceed();
          }),
          (this.uncheck = function (e) {
            r._allCheck[e - 1] = !1;
          }),
          (this._proceed = function () {
            if (
              !r._allCheck.some(function (e) {
                return !e;
              })
            )
              for (; r._tasks.length; ) {
                var e = r._tasks.shift();
                (0, e.resolve)((0, e.fn)());
              }
          }),
          (this.call = function (t) {
            return new Promise(function (e) {
              r._tasks.push({ fn: t, resolve: e }), r._proceed();
            });
          }),
          (this._allCheck = f(Array(t)));
      }),
      _ = 0,
      w = function e(t) {
        if (!(600 < ++_))
          return "complete" === document.readyState
            ? (t(), !0)
            : void setTimeout(function () {
                e(t);
              }, 100);
      },
      x = document.querySelector.bind(document),
      l = document.currentScript,
      E = (null == l ? void 0 : l.getAttribute("channel")) || "UNIELON";
    t(C, s.EventEmitter), (S = i(C));
    var S,
      k,
      j,
      l = new (e(C))();
    function C() {
      var o,
        r,
        t,
        n,
        i,
        s,
        u,
        a,
        c,
        f,
        l,
        e = (
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
        ).maxListeners,
        e = void 0 === e ? 100 : e;
      return (
        d(this, C),
        ((o = S.call(this))._selectedAddress = null),
        (o._network = null),
        (o._isConnected = !1),
        (o._initialized = !1),
        (o._isUnlocked = !1),
        (o._state = {
          accounts: null,
          isConnected: !1,
          isUnlocked: !1,
          initialized: !1,
          isPermanentlyDisconnected: !1,
        }),
        (o._pushEventHandlers = void 0),
        (o._requestPromise = new b(0)),
        (o._bcm = new m(E)),
        (o.initialize = p(
          P().mark(function e() {
            var t, r, n;
            return P().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        document.addEventListener(
                          "visibilitychange",
                          o._requestPromiseCheckVisibility
                        ),
                        o._bcm
                          .connect()
                          .on("message", o._handleBackgroundMessage),
                        w(function () {
                          var e =
                              null == (e = window.top)
                                ? void 0
                                : e.location.origin,
                            t =
                              (null == (t = x('head > link[rel~="icon"]'))
                                ? void 0
                                : t.href) ||
                              (null == (t = x('head > meta[itemprop="image"]'))
                                ? void 0
                                : t.content),
                            r =
                              document.title ||
                              (null == (r = x('head > meta[name="title"]'))
                                ? void 0
                                : r.content) ||
                              e;
                          o._bcm.request({
                            method: "tabCheckin",
                            params: { icon: t, name: r, origin: e },
                          });
                        }),
                        (e.prev = 3),
                        (e.next = 6),
                        o._request({ method: "getProviderState" })
                      );
                    case 6:
                      (t = e.sent),
                        (r = t.network),
                        (n = t.accounts),
                        t.isUnlocked &&
                          ((o._isUnlocked = !0), (o._state.isUnlocked = !0)),
                        o.emit("connect", {}),
                        o._pushEventHandlers.networkChanged({ network: r }),
                        o._pushEventHandlers.accountsChanged(n),
                        (e.next = 18);
                      break;
                    case 16:
                      (e.prev = 16), (e.t0 = e.catch(3));
                    case 18:
                      return (
                        (e.prev = 18),
                        (o._initialized = !0),
                        (o._state.initialized = !0),
                        o.emit("_initialized"),
                        e.finish(18)
                      );
                    case 23:
                      o.keepAlive();
                    case 24:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[3, 16, 18, 23]]
            );
          })
        )),
        (o.keepAlive = function () {
          o._request({ method: "keepAlive", params: {} }).then(function (e) {
            setTimeout(function () {
              o.keepAlive();
            }, 1e3);
          });
        }),
        (o._requestPromiseCheckVisibility = function () {
          "visible" === document.visibilityState
            ? o._requestPromise.check(1)
            : o._requestPromise.uncheck(1);
        }),
        (o._handleBackgroundMessage = function (e) {
          var t = e.event,
            e = e.data;
          if (o._pushEventHandlers[t]) return o._pushEventHandlers[t](e);
          o.emit(t, e);
        }),
        (o._request =
          ((l = p(
            P().mark(function e(t) {
              return P().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t) {
                        e.next = 2;
                        break;
                      }
                      throw y.Sy.rpc.invalidRequest();
                    case 2:
                      return (
                        o._requestPromiseCheckVisibility(),
                        e.abrupt(
                          "return",
                          o._requestPromise.call(function () {
                            return (
                              JSON.stringify(t, null, 2),
                              o._bcm
                                .request(t)
                                .then(function (e) {
                                  return t.method, e;
                                })
                                .catch(function (e) {
                                  throw (t.method, (0, y.Xy)(e), (0, y.Xy)(e));
                                })
                            );
                          })
                        )
                      );
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          function (e) {
            return l.apply(this, arguments);
          })),
        (o.requestAccounts = p(
          P().mark(function e() {
            return P().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      o._request({ method: "requestAccounts" })
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        (o.getNetwork = p(
          P().mark(function e() {
            return P().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      o._request({ method: "getNetwork" })
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        (o.switchNetwork =
          ((f = p(
            P().mark(function e(t) {
              return P().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        o._request({
                          method: "switchNetwork",
                          params: { network: t },
                        })
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          function (e) {
            return f.apply(this, arguments);
          })),
        (o.getAccounts = p(
          P().mark(function e() {
            return P().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      o._request({ method: "getAccounts" })
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        (o.getPublicKey = p(
          P().mark(function e() {
            return P().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      o._request({ method: "getPublicKey" })
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        (o.getBalance = p(
          P().mark(function e() {
            return P().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      o._request({ method: "getBalance" })
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        (o.getInscriptions = p(
          P().mark(function e() {
            var t,
              r,
              n = arguments;
            return P().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = 0 < n.length && void 0 !== n[0] ? n[0] : 0),
                      (r = 1 < n.length && void 0 !== n[1] ? n[1] : 20),
                      e.abrupt(
                        "return",
                        o._request({
                          method: "getInscriptions",
                          params: { cursor: t, size: r },
                        })
                      )
                    );
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        (o.signMessage =
          ((c = p(
            P().mark(function e(t, r) {
              return P().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        o._request({
                          method: "signMessage",
                          params: { text: t, type: r },
                        })
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          function (e, t) {
            return c.apply(this, arguments);
          })),
        (o.sendDogecoin =
          ((a = p(
            P().mark(function e(t, r, n) {
              return P().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        o._request({
                          method: "sendDogecoin",
                          params: {
                            toAddress: t,
                            satoshis: r,
                            feeRate: null == n ? void 0 : n.feeRate,
                            type: v.SEND_DOGECOIN,
                          },
                        })
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          function (e, t, r) {
            return a.apply(this, arguments);
          })),
        (o.sendInscription =
          ((u = p(
            P().mark(function e(t, r, n) {
              return P().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        o._request({
                          method: "sendInscription",
                          params: {
                            toAddress: t,
                            inscriptionId: r,
                            feeRate: null == n ? void 0 : n.feeRate,
                            type: v.SEND_INSCRIPTION,
                          },
                        })
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          function (e, t, r) {
            return u.apply(this, arguments);
          })),
        (o.pushTx =
          ((s = p(
            P().mark(function e(t) {
              return P().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        o._request({ method: "pushTx", params: { rawtx: t } })
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          function (e) {
            return s.apply(this, arguments);
          })),
        (o.signPsbt =
          ((i = p(
            P().mark(function e(t, r) {
              return P().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        o._request({
                          method: "signPsbt",
                          params: { psbtHex: t, type: v.SIGN_TX, options: r },
                        })
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          function (e, t) {
            return i.apply(this, arguments);
          })),
        (o.signPsbts =
          ((n = p(
            P().mark(function e(t, r) {
              return P().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        o._request({
                          method: "multiSignPsbt",
                          params: { psbtHexs: t, options: r },
                        })
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          function (e, t) {
            return n.apply(this, arguments);
          })),
        (o.pushPsbt =
          ((t = p(
            P().mark(function e(t) {
              return P().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        o._request({
                          method: "pushPsbt",
                          params: { psbtHex: t },
                        })
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          function (e) {
            return t.apply(this, arguments);
          })),
        (o.inscribeTransfer =
          ((r = p(
            P().mark(function e(t, r) {
              return P().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        o._request({
                          method: "inscribeTransfer",
                          params: { ticker: t, amount: r },
                        })
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          function (e, t) {
            return r.apply(this, arguments);
          })),
        o.setMaxListeners(e),
        o.initialize(),
        (o._pushEventHandlers = new g(h(o))),
        o
      );
    }
    function L(e) {
      var t = this;
      d(this, L),
        (this.provider = void 0),
        (this.connect = function (e) {
          t.provider._isConnected ||
            ((t.provider._isConnected = !0),
            (t.provider._state.isConnected = !0),
            t._emit("connect", e));
        }),
        (this.unlock = function () {
          (t.provider._isUnlocked = !0), (t.provider._state.isUnlocked = !0);
        }),
        (this.lock = function () {
          t.provider._isUnlocked = !1;
        }),
        (this.disconnect = function () {
          (t.provider._isConnected = !1),
            (t.provider._state.isConnected = !1),
            (t.provider._state.accounts = null),
            (t.provider._selectedAddress = null);
          var e = y.Sy.provider.disconnected();
          t._emit("accountsChanged", []),
            t._emit("disconnect", e),
            t._emit("close", e);
        }),
        (this.accountsChanged = function (e) {
          (null == e ? void 0 : e[0]) !== t.provider._selectedAddress &&
            ((t.provider._selectedAddress = null == e ? void 0 : e[0]),
            (t.provider._state.accounts = e),
            t._emit("accountsChanged", e));
        }),
        (this.networkChanged = function (e) {
          e = e.network;
          t.connect({}),
            e !== t.provider._network &&
              ((t.provider._network = e), t._emit("networkChanged", e));
        }),
        (this.provider = e);
    }
    function R(e) {
      var r;
      if (
        (d(this, R),
        ((r = k.call(this))._channel = void 0),
        (r.connect = function () {
          return (
            (r._channel.onmessage = function (e) {
              var e = e.data,
                t = e.type,
                e = e.data;
              "message" === t
                ? r.emit("message", e)
                : "response" === t && r.onResponse(e);
            }),
            h(r)
          );
        }),
        (r.listen = function (e) {
          return (
            (r.listenCallback = e),
            (r._channel.onmessage = function (e) {
              var e = e.data,
                t = e.type,
                e = e.data;
              "request" === t && r.onRequest(e);
            }),
            h(r)
          );
        }),
        (r.send = function (e, t) {
          r._channel.postMessage({ type: e, data: t });
        }),
        (r.dispose = function () {
          r._dispose(), r._channel.close();
        }),
        e)
      )
        return (r._channel = new BroadcastChannel(e)), r;
      throw new Error("the broadcastChannel name is missing");
    }
    function N() {
      var u;
      d(this, N);
      for (var t, e = arguments.length, r = new Array(e), n = 0; n < e; n++)
        r[n] = arguments[n];
      return (
        ((u = j.call.apply(j, [this].concat(r)))._requestIdPool = f(
          Array(500).keys()
        )),
        (u._EVENT_PRE = "UNISAT_WALLET_"),
        (u.listenCallback = void 0),
        (u._waitingMap = new Map()),
        (u.request = function (r) {
          var n;
          if (u._requestIdPool.length)
            return (
              (n = u._requestIdPool.shift()),
              new Promise(function (e, t) {
                u._waitingMap.set(n, { data: r, resolve: e, reject: t }),
                  u.send("request", { ident: n, data: r });
              })
            );
          throw y.Sy.rpc.limitExceeded();
        }),
        (u.onResponse = p(
          P().mark(function e() {
            var t,
              r,
              n,
              o,
              i,
              s = arguments;
            return P().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((t = (n = 0 < s.length && void 0 !== s[0] ? s[0] : {})
                        .ident),
                      (r = n.res),
                      (n = n.err),
                      u._waitingMap.has(t))
                    ) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt("return");
                  case 3:
                    (i = u._waitingMap.get(t)),
                      (o = i.resolve),
                      (i = i.reject),
                      u._requestIdPool.push(t),
                      u._waitingMap.delete(t),
                      n ? i(n) : o(r);
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        (u.onRequest =
          ((t = p(
            P().mark(function e(t) {
              var r, n, o, i;
              return P().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((r = t.ident), (n = t.data), u.listenCallback))
                          return (
                            (e.prev = 2), (e.next = 5), u.listenCallback(n)
                          );
                        e.next = 14;
                        break;
                      case 5:
                        (o = e.sent), (e.next = 13);
                        break;
                      case 8:
                        (e.prev = 8),
                          (e.t0 = e.catch(2)),
                          (i = { message: e.t0.message, stack: e.t0.stack }),
                          e.t0.code && (i.code = e.t0.code),
                          e.t0.data && (i.data = e.t0.data);
                      case 13:
                        u.send("response", { ident: r, res: o, err: i });
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[2, 8]]
              );
            })
          )),
          function (e) {
            return t.apply(this, arguments);
          })),
        (u._dispose = function () {
          var e,
            t = (function (e) {
              var t,
                r,
                n,
                o,
                i,
                s =
                  ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
              if (s)
                return (
                  (n = !(r = !0)),
                  {
                    s: function () {
                      s = s.call(e);
                    },
                    n: function () {
                      var e = s.next();
                      return (r = e.done), e;
                    },
                    e: function (e) {
                      (n = !0), (t = e);
                    },
                    f: function () {
                      try {
                        r || null == s.return || s.return();
                      } finally {
                        if (n) throw t;
                      }
                    },
                  }
                );
              if (Array.isArray(e) || (s = c(e)))
                return (
                  s && (e = s),
                  (o = 0),
                  {
                    s: (i = function () {}),
                    n: function () {
                      return o >= e.length
                        ? { done: !0 }
                        : { done: !1, value: e[o++] };
                    },
                    e: function (e) {
                      throw e;
                    },
                    f: i,
                  }
                );
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })(u._waitingMap.values());
          try {
            for (t.s(); !(e = t.n()).done; )
              e.value.reject(y.Sy.provider.userRejectedRequest());
          } catch (e) {
            t.e(e);
          } finally {
            t.f();
          }
          u._waitingMap.clear();
        }),
        u
      );
    }
    window.unielon ||
      (window.unielon = new Proxy(l, {
        deleteProperty: function () {
          return !0;
        },
      })),
      Object.defineProperty(window, "unielon", {
        value: new Proxy(l, {
          deleteProperty: function () {
            return !0;
          },
        }),
        writable: !1,
      }),
      window.dispatchEvent(new Event("unielon#initialized"));
  })();
})();

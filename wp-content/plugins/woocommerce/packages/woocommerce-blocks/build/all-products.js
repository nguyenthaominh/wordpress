(this.wc = this.wc || {}),
  (this.wc.blocks = this.wc.blocks || {}),
  (this.wc.blocks["all-products"] = (function (e) {
    function t(t) {
      for (
        var o, a, s = t[0], l = t[1], i = t[2], d = 0, b = [];
        d < s.length;
        d++
      )
        (a = s[d]),
          Object.prototype.hasOwnProperty.call(r, a) && r[a] && b.push(r[a][0]),
          (r[a] = 0);
      for (o in l) Object.prototype.hasOwnProperty.call(l, o) && (e[o] = l[o]);
      for (u && u(t); b.length; ) b.shift()();
      return n.push.apply(n, i || []), c();
    }
    function c() {
      for (var e, t = 0; t < n.length; t++) {
        for (var c = n[t], o = !0, s = 1; s < c.length; s++) {
          var l = c[s];
          0 !== r[l] && (o = !1);
        }
        o && (n.splice(t--, 1), (e = a((a.s = c[0]))));
      }
      return e;
    }
    var o = {},
      r = {
        6: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        23: 0,
        25: 0,
        35: 0,
        37: 0,
        38: 0,
        39: 0,
        41: 0,
        43: 0,
        44: 0,
        45: 0,
      },
      n = [];
    function a(t) {
      if (o[t]) return o[t].exports;
      var c = (o[t] = { i: t, l: !1, exports: {} });
      return e[t].call(c.exports, c, c.exports, a), (c.l = !0), c.exports;
    }
    (a.e = function (e) {
      var t = [],
        c = r[e];
      if (0 !== c)
        if (c) t.push(c[2]);
        else {
          var o = new Promise(function (t, o) {
            c = r[e] = [t, o];
          });
          t.push((c[2] = o));
          var n,
            s = document.createElement("script");
          (s.charset = "utf-8"),
            (s.timeout = 120),
            a.nc && s.setAttribute("nonce", a.nc),
            (s.src = (function (e) {
              return (
                a.p +
                "" +
                ({
                  1: "product-add-to-cart--product-average-rating--product-button--product-image--product-price--product---1d132d69",
                  2: "product-average-rating--product-button--product-image--product-price--product-rating--product-ratin--e23975b5",
                  3: "product-add-to-cart--product-button--product-rating--product-rating-counter--product-rating-stars",
                  4: "product-add-to-cart--product-image--product-title",
                  22: "product-add-to-cart",
                  23: "product-average-rating",
                  25: "product-button",
                  32: "product-image",
                  35: "product-price",
                  37: "product-rating",
                  38: "product-rating-counter",
                  39: "product-rating-stars",
                  41: "product-sale-badge",
                  43: "product-sku",
                  44: "product-stock-indicator",
                  45: "product-summary",
                  48: "product-title",
                }[e] || e) +
                ".js?ver=" +
                {
                  1: "a53104b51aebffdec5c5",
                  2: "b2ea0e89285af14743d0",
                  3: "44207eca1a6164e11e1b",
                  4: "38f39bad8cea16b6d010",
                  22: "fd848aeedd42c48ffe85",
                  23: "34b242ac43167b66d3ce",
                  25: "8248a3bcd0e2be4c9923",
                  32: "15ca729a17c92936f86f",
                  35: "7e1845ab55da984d1252",
                  37: "35e424800f0a65e5e921",
                  38: "7560a5a7089a046982fd",
                  39: "26fc5791bdcf249fd5de",
                  41: "a7b8af5f0d1f0bff4b82",
                  43: "87c0910d85dde261ccb0",
                  44: "648c19dc6e4b5d04fa99",
                  45: "2779cbcad4af6715d151",
                  48: "e24ce39f098035f501e3",
                }[e]
              );
            })(e));
          var l = new Error();
          n = function (t) {
            (s.onerror = s.onload = null), clearTimeout(i);
            var c = r[e];
            if (0 !== c) {
              if (c) {
                var o = t && ("load" === t.type ? "missing" : t.type),
                  n = t && t.target && t.target.src;
                (l.message =
                  "Loading chunk " + e + " failed.\n(" + o + ": " + n + ")"),
                  (l.name = "ChunkLoadError"),
                  (l.type = o),
                  (l.request = n),
                  c[1](l);
              }
              r[e] = void 0;
            }
          };
          var i = setTimeout(function () {
            n({ type: "timeout", target: s });
          }, 12e4);
          (s.onerror = s.onload = n), document.head.appendChild(s);
        }
      return Promise.all(t);
    }),
      (a.m = e),
      (a.c = o),
      (a.d = function (e, t, c) {
        a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: c });
      }),
      (a.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (a.t = function (e, t) {
        if ((1 & t && (e = a(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var c = Object.create(null);
        if (
          (a.r(c),
          Object.defineProperty(c, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var o in e)
            a.d(
              c,
              o,
              function (t) {
                return e[t];
              }.bind(null, o)
            );
        return c;
      }),
      (a.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return a.d(t, "a", t), t;
      }),
      (a.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (a.p = ""),
      (a.oe = function (e) {
        throw (console.error(e), e);
      });
    var s = (window.webpackWcBlocksJsonp = window.webpackWcBlocksJsonp || []),
      l = s.push.bind(s);
    (s.push = t), (s = s.slice());
    for (var i = 0; i < s.length; i++) t(s[i]);
    var u = l;
    return n.push([414, 0]), c();
  })([
    function (e, t) {
      e.exports = window.wp.element;
    },
    function (e, t) {
      e.exports = window.wp.i18n;
    },
    function (e, t) {
      e.exports = window.wp.components;
    },
    function (e, t) {
      e.exports = window.wc.wcSettings;
    },
    ,
    function (e, t) {
      e.exports = window.wp.blockEditor;
    },
    function (e, t) {
      e.exports = window.wp.data;
    },
    function (e, t) {
      e.exports = window.wp.blocks;
    },
    function (e, t) {
      e.exports = window.wc.wcBlocksData;
    },
    function (e, t) {
      e.exports = window.wp.primitives;
    },
    function (e, t) {
      e.exports = window.wp.htmlEntities;
    },
    function (e, t) {
      e.exports = window.wp.compose;
    },
    ,
    function (e, t) {
      e.exports = window.wc.blocksCheckout;
    },
    function (e, t) {
      e.exports = window.wp.apiFetch;
    },
    function (e, t) {
      e.exports = window.wp.url;
    },
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return a;
      }),
        c.d(t, "c", function () {
          return l;
        }),
        c.d(t, "d", function () {
          return i;
        }),
        c.d(t, "b", function () {
          return u;
        });
      var o = c(0),
        r = c(1),
        n = c(57);
      const a = {
          clear: Object(r.__)("Clear all selected items", "woocommerce"),
          noItems: Object(r.__)("No items found.", "woocommerce"),
          /* Translators: %s search term */
          noResults: Object(r.__)("No results for %s", "woocommerce"),
          search: Object(r.__)("Search for items", "woocommerce"),
          selected: (e) =>
            Object(r.sprintf)(
              /* translators: Number of items selected from list. */
              Object(r._n)(
                "%d item selected",
                "%d items selected",
                e,
                "woocommerce"
              ),
              e
            ),
          updated: Object(r.__)("Search results updated.", "woocommerce"),
        },
        s = (e, t = e) => {
          const c = e.reduce((e, t) => {
              const c = t.parent || 0;
              return e[c] || (e[c] = []), e[c].push(t), e;
            }, {}),
            o = Object(n.a)(t, "id"),
            r = ["0"],
            a = (e = {}) =>
              e.parent ? [...a(o[e.parent]), e.name] : e.name ? [e.name] : [],
            s = (e) =>
              e.map((e) => {
                const t = c[e.id];
                return (
                  r.push("" + e.id),
                  {
                    ...e,
                    breadcrumbs: a(o[e.parent]),
                    children: t && t.length ? s(t) : [],
                  }
                );
              }),
            l = s(c[0] || []);
          return (
            Object.entries(c).forEach(([e, t]) => {
              r.includes(e) || l.push(...s(t || []));
            }),
            l
          );
        },
        l = (e, t, c) => {
          if (!t) return c ? s(e) : e;
          const o = new RegExp(
              t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"),
              "i"
            ),
            r = e.map((e) => !!o.test(e.name) && e).filter(Boolean);
          return c ? s(r, e) : r;
        },
        i = (e, t) => {
          if (!t) return e;
          const c = new RegExp(
            `(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")})`,
            "ig"
          );
          return e
            .split(c)
            .map((e, t) =>
              c.test(e)
                ? Object(o.createElement)("strong", { key: t }, e)
                : Object(o.createElement)(o.Fragment, { key: t }, e)
            );
        },
        u = (e) =>
          1 === e.length
            ? e.slice(0, 1).toString()
            : 2 === e.length
            ? e.slice(0, 1).toString() + " › " + e.slice(-1).toString()
            : e.slice(0, 1).toString() + " … " + e.slice(-1).toString();
    },
    function (e, t, c) {
      "use strict";
      c.d(t, "p", function () {
        return n;
      }),
        c.d(t, "n", function () {
          return a;
        }),
        c.d(t, "m", function () {
          return s;
        }),
        c.d(t, "o", function () {
          return l;
        }),
        c.d(t, "k", function () {
          return i;
        }),
        c.d(t, "e", function () {
          return u;
        }),
        c.d(t, "h", function () {
          return d;
        }),
        c.d(t, "l", function () {
          return b;
        }),
        c.d(t, "c", function () {
          return p;
        }),
        c.d(t, "d", function () {
          return m;
        }),
        c.d(t, "g", function () {
          return g;
        }),
        c.d(t, "a", function () {
          return h;
        }),
        c.d(t, "b", function () {
          return _;
        }),
        c.d(t, "i", function () {
          return w;
        }),
        c.d(t, "j", function () {
          return E;
        }),
        c.d(t, "f", function () {
          return f;
        });
      var o,
        r = c(3);
      const n = Object(r.getSetting)("wcBlocksConfig", {
          buildPhase: 1,
          pluginUrl: "",
          productCount: 0,
          defaultAvatar: "",
          restApiRoutes: {},
          wordCountType: "words",
        }),
        a = n.pluginUrl + "images/",
        s = n.pluginUrl + "build/",
        l = n.buildPhase,
        i =
          null === (o = r.STORE_PAGES.shop) || void 0 === o
            ? void 0
            : o.permalink,
        u = r.STORE_PAGES.checkout.id,
        d = (r.STORE_PAGES.checkout.permalink, r.STORE_PAGES.privacy.permalink),
        b = (r.STORE_PAGES.privacy.title, r.STORE_PAGES.terms.permalink),
        p = (r.STORE_PAGES.terms.title, r.STORE_PAGES.cart.id),
        m = r.STORE_PAGES.cart.permalink,
        g =
          (r.STORE_PAGES.myaccount.permalink
            ? r.STORE_PAGES.myaccount.permalink
            : Object(r.getSetting)("wpLoginUrl", "/wp-login.php"),
          Object(r.getSetting)("localPickupEnabled", !1)),
        O = Object(r.getSetting)("countries", {}),
        j = Object(r.getSetting)("countryData", {}),
        h = Object.fromEntries(
          Object.keys(j)
            .filter((e) => !0 === j[e].allowBilling)
            .map((e) => [e, O[e] || ""])
        ),
        _ = Object.fromEntries(
          Object.keys(j)
            .filter((e) => !0 === j[e].allowBilling)
            .map((e) => [e, j[e].states || []])
        ),
        w = Object.fromEntries(
          Object.keys(j)
            .filter((e) => !0 === j[e].allowShipping)
            .map((e) => [e, O[e] || ""])
        ),
        E = Object.fromEntries(
          Object.keys(j)
            .filter((e) => !0 === j[e].allowShipping)
            .map((e) => [e, j[e].states || []])
        ),
        f = Object.fromEntries(
          Object.keys(j).map((e) => [e, j[e].locale || []])
        );
    },
    ,
    ,
    ,
    function (e, t, c) {
      "use strict";
      c.d(t, "b", function () {
        return r;
      }),
        c.d(t, "c", function () {
          return n;
        }),
        c.d(t, "a", function () {
          return a;
        });
      var o = c(42);
      const r = (e) =>
        !Object(o.a)(e) && e instanceof Object && e.constructor === Object;
      function n(e, t) {
        return r(e) && t in e;
      }
      const a = (e) => 0 === Object.keys(e).length;
    },
    function (e, t) {
      e.exports = window.wc.priceFormat;
    },
    function (e, t, c) {
      "use strict";
      c.d(t, "h", function () {
        return i;
      }),
        c.d(t, "e", function () {
          return u;
        }),
        c.d(t, "b", function () {
          return d;
        }),
        c.d(t, "i", function () {
          return b;
        }),
        c.d(t, "f", function () {
          return p;
        }),
        c.d(t, "c", function () {
          return m;
        }),
        c.d(t, "d", function () {
          return g;
        }),
        c.d(t, "g", function () {
          return O;
        }),
        c.d(t, "a", function () {
          return j;
        });
      var o = c(15),
        r = c(14),
        n = c.n(r),
        a = c(3),
        s = c(17);
      const l = (e, t) => {
          const c = new Map();
          return e.filter((e) => {
            const o = t(e);
            return !c.has(o) && (c.set(o, e), !0);
          });
        },
        i = ({ selected: e = [], search: t = "", queryArgs: c = {} }) => {
          const r = (({
            selected: e = [],
            search: t = "",
            queryArgs: c = {},
          }) => {
            const r = s.p.productCount > 100,
              n = {
                per_page: r ? 100 : 0,
                catalog_visibility: "any",
                search: t,
                orderby: "title",
                order: "asc",
              },
              a = [
                Object(o.addQueryArgs)("/wc/store/v1/products", { ...n, ...c }),
              ];
            return (
              r &&
                e.length &&
                a.push(
                  Object(o.addQueryArgs)("/wc/store/v1/products", {
                    catalog_visibility: "any",
                    include: e,
                    per_page: 0,
                  })
                ),
              a
            );
          })({ selected: e, search: t, queryArgs: c });
          return Promise.all(r.map((e) => n()({ path: e })))
            .then((e) => {
              const t = e.flat();
              return l(t, (e) => e.id).map((e) => ({ ...e, parent: 0 }));
            })
            .catch((e) => {
              throw e;
            });
        },
        u = (e) => n()({ path: `/wc/store/v1/products/${e}` }),
        d = () => n()({ path: "wc/store/v1/products/attributes" }),
        b = (e) => n()({ path: `wc/store/v1/products/attributes/${e}/terms` }),
        p = ({ selected: e = [], search: t }) => {
          const c = (({ selected: e = [], search: t }) => {
            const c = Object(a.getSetting)("limitTags", !1),
              r = [
                Object(o.addQueryArgs)("wc/store/v1/products/tags", {
                  per_page: c ? 100 : 0,
                  orderby: c ? "count" : "name",
                  order: c ? "desc" : "asc",
                  search: t,
                }),
              ];
            return (
              c &&
                e.length &&
                r.push(
                  Object(o.addQueryArgs)("wc/store/v1/products/tags", {
                    include: e,
                  })
                ),
              r
            );
          })({ selected: e, search: t });
          return Promise.all(c.map((e) => n()({ path: e }))).then((e) => {
            const t = e.flat();
            return l(t, (e) => e.id);
          });
        },
        m = (e) =>
          n()({
            path: Object(o.addQueryArgs)("wc/store/v1/products/categories", {
              per_page: 0,
              ...e,
            }),
          }),
        g = (e) => n()({ path: `wc/store/v1/products/categories/${e}` }),
        O = (e) =>
          n()({
            path: Object(o.addQueryArgs)("wc/store/v1/products", {
              per_page: 0,
              type: "variation",
              parent: e,
            }),
          }),
        j = (e, t) => {
          if (!e.title.raw) return e.slug;
          const c = 1 === t.filter((t) => t.title.raw === e.title.raw).length;
          return e.title.raw + (c ? "" : ` - ${e.slug}`);
        };
    },
    function (e, t) {
      e.exports = window.wc.wcBlocksSharedContext;
    },
    function (e, t) {
      e.exports = window.wp.isShallowEqual;
    },
    function (e, t) {
      e.exports = window.React;
    },
    function (e, t) {
      e.exports = window.lodash;
    },
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return o;
      });
      const o = async (e) => {
        if ("function" == typeof e.json)
          try {
            const t = await e.json();
            return { message: t.message, type: t.type || "api" };
          } catch (e) {
            return { message: e.message, type: "general" };
          }
        return { message: e.message, type: e.type || "general" };
      };
    },
    function (e, t, c) {
      "use strict";
      var o = c(0),
        r = c(4),
        n = c.n(r);
      t.a = ({
        label: e,
        screenReaderLabel: t,
        wrapperElement: c,
        wrapperProps: r = {},
      }) => {
        let a;
        const s = null != e,
          l = null != t;
        return !s && l
          ? ((a = c || "span"),
            (r = { ...r, className: n()(r.className, "screen-reader-text") }),
            Object(o.createElement)(a, { ...r }, t))
          : ((a = c || o.Fragment),
            s && l && e !== t
              ? Object(o.createElement)(
                  a,
                  { ...r },
                  Object(o.createElement)("span", { "aria-hidden": "true" }, e),
                  Object(o.createElement)(
                    "span",
                    { className: "screen-reader-text" },
                    t
                  )
                )
              : Object(o.createElement)(a, { ...r }, e));
      };
    },
    ,
    function (e, t) {
      e.exports = window.wp.escapeHtml;
    },
    ,
    ,
    function (e, t, c) {
      "use strict";
      var o = c(0),
        r = c(1),
        n = c(31);
      t.a = ({ error: e }) =>
        Object(o.createElement)(
          "div",
          { className: "wc-block-error-message" },
          (({ message: e, type: t }) =>
            e
              ? "general" === t
                ? Object(o.createElement)(
                    "span",
                    null,
                    Object(r.__)(
                      "The following error was returned",
                      "woocommerce"
                    ),
                    Object(o.createElement)("br", null),
                    Object(o.createElement)(
                      "code",
                      null,
                      Object(n.escapeHTML)(e)
                    )
                  )
                : "api" === t
                ? Object(o.createElement)(
                    "span",
                    null,
                    Object(r.__)(
                      "The following error was returned from the API",
                      "woocommerce"
                    ),
                    Object(o.createElement)("br", null),
                    Object(o.createElement)(
                      "code",
                      null,
                      Object(n.escapeHTML)(e)
                    )
                  )
                : e
              : Object(r.__)(
                  "An error has prevented the block from being updated.",
                  "woocommerce"
                ))(e)
        );
    },
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return b;
      });
      var o = c(0),
        r = c(4),
        n = c.n(r),
        a = c(2);
      function s(e, t, c) {
        const o = new Set(t.map((e) => e[c]));
        return e.filter((e) => !o.has(e[c]));
      }
      var l = c(10),
        i = c(16);
      const u = ({ label: e }) =>
          Object(o.createElement)(
            "span",
            { className: "woocommerce-search-list__item-count" },
            e
          ),
        d = (e) => {
          const { item: t, search: c } = e,
            r = t.breadcrumbs && t.breadcrumbs.length;
          return Object(o.createElement)(
            "span",
            { className: "woocommerce-search-list__item-label" },
            r
              ? Object(o.createElement)(
                  "span",
                  { className: "woocommerce-search-list__item-prefix" },
                  Object(i.b)(t.breadcrumbs)
                )
              : null,
            Object(o.createElement)(
              "span",
              { className: "woocommerce-search-list__item-name" },
              Object(i.d)(Object(l.decodeEntities)(t.name), c)
            )
          );
        },
        b = ({
          countLabel: e,
          className: t,
          depth: c = 0,
          controlId: r = "",
          item: b,
          isSelected: p,
          isSingle: m,
          onSelect: g,
          search: O = "",
          selected: j,
          useExpandedPanelId: h,
          ..._
        }) => {
          var w, E;
          const [f, k] = h,
            v = null != e && void 0 !== b.count && null !== b.count,
            y = !(null === (w = b.breadcrumbs) || void 0 === w || !w.length),
            S = !(null === (E = b.children) || void 0 === E || !E.length),
            C = f === b.id,
            x = n()(["woocommerce-search-list__item", `depth-${c}`, t], {
              "has-breadcrumbs": y,
              "has-children": S,
              "has-count": v,
              "is-expanded": C,
              "is-radio-button": m,
            }),
            N = _.name || `search-list-item-${r}`,
            P = `${N}-${b.id}`,
            T = Object(o.useCallback)(() => {
              k(C ? -1 : Number(b.id));
            }, [C, b.id, k]);
          return S
            ? Object(o.createElement)(
                "div",
                {
                  className: x,
                  onClick: T,
                  onKeyDown: (e) =>
                    "Enter" === e.key || " " === e.key ? T() : null,
                  role: "treeitem",
                  tabIndex: 0,
                },
                m
                  ? Object(o.createElement)(
                      o.Fragment,
                      null,
                      Object(o.createElement)("input", {
                        type: "radio",
                        id: P,
                        name: N,
                        value: b.value,
                        onChange: g(b),
                        onClick: (e) => e.stopPropagation(),
                        checked: p,
                        className: "woocommerce-search-list__item-input",
                        ..._,
                      }),
                      Object(o.createElement)(d, { item: b, search: O }),
                      v
                        ? Object(o.createElement)(u, { label: e || b.count })
                        : null
                    )
                  : Object(o.createElement)(
                      o.Fragment,
                      null,
                      Object(o.createElement)(a.CheckboxControl, {
                        className: "woocommerce-search-list__item-input",
                        checked: p,
                        ...(!p &&
                        b.children.some((e) => j.find((t) => t.id === e.id))
                          ? { indeterminate: !0 }
                          : {}),
                        label: Object(i.d)(Object(l.decodeEntities)(b.name), O),
                        onChange: () => {
                          p
                            ? g(s(j, b.children, "id"))()
                            : g(
                                (function (e, t, c) {
                                  const o = s(t, e, "id");
                                  return [...e, ...o];
                                })(j, b.children)
                              )();
                        },
                        onClick: (e) => e.stopPropagation(),
                      }),
                      v
                        ? Object(o.createElement)(u, { label: e || b.count })
                        : null
                    )
              )
            : Object(o.createElement)(
                "label",
                { htmlFor: P, className: x },
                m
                  ? Object(o.createElement)(
                      o.Fragment,
                      null,
                      Object(o.createElement)("input", {
                        type: "radio",
                        id: P,
                        name: N,
                        value: b.value,
                        onChange: g(b),
                        checked: p,
                        className: "woocommerce-search-list__item-input",
                        ..._,
                      }),
                      Object(o.createElement)(d, { item: b, search: O })
                    )
                  : Object(o.createElement)(a.CheckboxControl, {
                      id: P,
                      name: N,
                      className: "woocommerce-search-list__item-input",
                      value: Object(l.decodeEntities)(b.value),
                      label: Object(i.d)(Object(l.decodeEntities)(b.name), O),
                      onChange: g(b),
                      checked: p,
                      ..._,
                    }),
                v ? Object(o.createElement)(u, { label: e || b.count }) : null
              );
        };
      t.b = b;
    },
    function (e, t) {
      e.exports = window.wc.wcBlocksRegistry;
    },
    function (e, t) {
      e.exports = window.wp.deprecated;
    },
    ,
    ,
    function (e, t, c) {
      "use strict";
      var o = c(0),
        r = c(145),
        n = c(4),
        a = c.n(n);
      c(154);
      const s = (e) => ({
        thousandSeparator: null == e ? void 0 : e.thousandSeparator,
        decimalSeparator: null == e ? void 0 : e.decimalSeparator,
        fixedDecimalScale: !0,
        prefix: null == e ? void 0 : e.prefix,
        suffix: null == e ? void 0 : e.suffix,
        isNumericString: !0,
      });
      t.a = ({
        className: e,
        value: t,
        currency: c,
        onValueChange: n,
        displayType: l = "text",
        ...i
      }) => {
        var u;
        const d = "string" == typeof t ? parseInt(t, 10) : t;
        if (!Number.isFinite(d)) return null;
        const b = d / 10 ** c.minorUnit;
        if (!Number.isFinite(b)) return null;
        const p = a()(
            "wc-block-formatted-money-amount",
            "wc-block-components-formatted-money-amount",
            e
          ),
          m =
            null !== (u = i.decimalScale) && void 0 !== u
              ? u
              : null == c
              ? void 0
              : c.minorUnit,
          g = {
            ...i,
            ...s(c),
            decimalScale: m,
            value: void 0,
            currency: void 0,
            onValueChange: void 0,
          },
          O = n
            ? (e) => {
                const t = +e.value * 10 ** c.minorUnit;
                n(t);
              }
            : () => {};
        return Object(o.createElement)(r.a, {
          className: p,
          displayType: l,
          ...g,
          value: b,
          onValueChange: O,
        });
      };
    },
    ,
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return o;
      });
      const o = (e) => null === e;
    },
    function (e, t) {
      e.exports = window.wp.hooks;
    },
    function (e, t, c) {
      "use strict";
      c.d(t, "b", function () {
        return i;
      }),
        c.d(t, "f", function () {
          return u;
        }),
        c.d(t, "g", function () {
          return d;
        }),
        c.d(t, "d", function () {
          return b;
        }),
        c.d(t, "i", function () {
          return p;
        }),
        c.d(t, "a", function () {
          return m;
        }),
        c.d(t, "c", function () {
          return g;
        }),
        c.d(t, "j", function () {
          return O;
        }),
        c.d(t, "h", function () {
          return h;
        }),
        c.d(t, "e", function () {
          return w;
        });
      var o = c(3),
        r = c(207),
        n = c(80),
        a = c(89),
        s = c(117),
        l = c(60);
      const i = !1,
        u = !1,
        d = "woocommerce/product-query",
        b = "/wp-admin/edit.php?post_type=product&page=product_attributes",
        p = "core/query",
        m = [
          "attributes",
          "presets",
          "productSelector",
          "onSale",
          "stockStatus",
          "wooInherit",
        ],
        g = ["taxQuery", "search", ...m],
        O = Object(o.getSetting)("stockStatusOptions", []),
        j = Object(o.getSetting)("hideOutOfStockItems", !1),
        h = {
          allowedControls: g,
          displayLayout: { type: "flex", columns: 3 },
          query: {
            perPage: 9,
            pages: 0,
            offset: 0,
            postType: "product",
            order: "asc",
            orderBy: "title",
            author: "",
            search: "",
            exclude: [],
            sticky: "",
            inherit: !1,
            __woocommerceAttributes: [],
            __woocommerceStockStatus: j
              ? Object.keys(Object(r.a)(O, "outofstock"))
              : Object.keys(O),
          },
        },
        _ = Object(o.getSettingWithCoercion)(
          "postTemplateHasSupportForGridView",
          !1,
          n.a
        ),
        w = [
          [
            "core/post-template",
            {
              __woocommerceNamespace: s.b,
              className: "products-block-post-template",
              ...(_ && { layout: { type: "grid", columnCount: 3 } }),
            },
            [
              ["woocommerce/product-image", { imageSizing: l.a.THUMBNAIL }],
              [
                "core/post-title",
                {
                  textAlign: "center",
                  level: 3,
                  fontSize: "medium",
                  style: {
                    spacing: { margin: { bottom: "0.75rem", top: "0" } },
                  },
                  isLink: !0,
                  __woocommerceNamespace: a.b,
                },
              ],
              [
                "woocommerce/product-price",
                { textAlign: "center", fontSize: "small" },
              ],
              [
                "woocommerce/product-button",
                { textAlign: "center", fontSize: "small" },
              ],
            ],
          ],
          [
            "core/query-pagination",
            { layout: { type: "flex", justifyContent: "center" } },
          ],
          ["core/query-no-results"],
        ];
    },
    ,
    function (e, t) {
      e.exports = window.wp.a11y;
    },
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return a;
      });
      var o = c(0),
        r = c(25),
        n = c.n(r);
      function a(e) {
        const t = Object(o.useRef)(e);
        return n()(e, t.current) || (t.current = e), t.current;
      }
    },
    function (e, t) {
      e.exports = window.wc.wcBlocksSharedHocs;
    },
    ,
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return n;
      });
      var o = c(0);
      const r = Object(o.createContext)("page"),
        n = () => Object(o.useContext)(r);
      r.Provider;
    },
    function (e, t) {
      e.exports = window.wp.autop;
    },
    ,
    ,
    function (e, t) {},
    function (e, t) {},
    ,
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return o;
      });
      const o = (e, t) =>
        e.reduce((e, c) => ((e[String(t ? c[t] : c)] = c), e), {});
    },
    ,
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return w;
      });
      var o = c(116),
        r = c.n(o),
        n = c(0),
        a = c(8),
        s = c(6),
        l = c(10),
        i = c(282),
        u = c(95);
      var d = c(281);
      const b = (e) => {
          const t = null == e ? void 0 : e.detail;
          (t && t.preserveCartData) ||
            Object(s.dispatch)(a.CART_STORE_KEY).invalidateResolutionForStore();
        },
        p = (e) => {
          ((null != e && e.persisted) ||
            "back_forward" ===
              (window.performance &&
              window.performance.getEntriesByType("navigation").length
                ? window.performance.getEntriesByType("navigation")[0].type
                : "")) &&
            Object(s.dispatch)(a.CART_STORE_KEY).invalidateResolutionForStore();
        },
        m = () => {
          1 === window.wcBlocksStoreCartListeners.count &&
            window.wcBlocksStoreCartListeners.remove(),
            window.wcBlocksStoreCartListeners.count--;
        },
        g = {
          first_name: "",
          last_name: "",
          company: "",
          address_1: "",
          address_2: "",
          city: "",
          state: "",
          postcode: "",
          country: "",
          phone: "",
        },
        O = { ...g, email: "" },
        j = {
          total_items: "",
          total_items_tax: "",
          total_fees: "",
          total_fees_tax: "",
          total_discount: "",
          total_discount_tax: "",
          total_shipping: "",
          total_shipping_tax: "",
          total_price: "",
          total_tax: "",
          tax_lines: a.EMPTY_TAX_LINES,
          currency_code: "",
          currency_symbol: "",
          currency_minor_unit: 2,
          currency_decimal_separator: "",
          currency_thousand_separator: "",
          currency_prefix: "",
          currency_suffix: "",
        },
        h = (e) =>
          Object.fromEntries(
            Object.entries(e).map(([e, t]) => [e, Object(l.decodeEntities)(t)])
          ),
        _ = {
          cartCoupons: a.EMPTY_CART_COUPONS,
          cartItems: a.EMPTY_CART_ITEMS,
          cartFees: a.EMPTY_CART_FEES,
          cartItemsCount: 0,
          cartItemsWeight: 0,
          crossSellsProducts: a.EMPTY_CART_CROSS_SELLS,
          cartNeedsPayment: !0,
          cartNeedsShipping: !0,
          cartItemErrors: a.EMPTY_CART_ITEM_ERRORS,
          cartTotals: j,
          cartIsLoading: !0,
          cartErrors: a.EMPTY_CART_ERRORS,
          billingAddress: O,
          shippingAddress: g,
          shippingRates: a.EMPTY_SHIPPING_RATES,
          isLoadingRates: !1,
          cartHasCalculatedShipping: !1,
          paymentMethods: a.EMPTY_PAYMENT_METHODS,
          paymentRequirements: a.EMPTY_PAYMENT_REQUIREMENTS,
          receiveCart: () => {},
          receiveCartContents: () => {},
          extensions: a.EMPTY_EXTENSIONS,
        },
        w = (e = { shouldSelect: !0 }) => {
          const { isEditor: t, previewData: c } = Object(u.b)(),
            o = null == c ? void 0 : c.previewCart,
            { shouldSelect: l } = e,
            j = Object(n.useRef)();
          Object(n.useEffect)(
            () => (
              (() => {
                if (
                  (window.wcBlocksStoreCartListeners ||
                    (window.wcBlocksStoreCartListeners = {
                      count: 0,
                      remove: () => {},
                    }),
                  (null === (e = window.wcBlocksStoreCartListeners) ||
                  void 0 === e
                    ? void 0
                    : e.count) > 0)
                )
                  return void window.wcBlocksStoreCartListeners.count++;
                var e;
                document.body.addEventListener("wc-blocks_added_to_cart", b),
                  document.body.addEventListener(
                    "wc-blocks_removed_from_cart",
                    b
                  ),
                  window.addEventListener("pageshow", p);
                const t = Object(d.a)(
                    "added_to_cart",
                    "wc-blocks_added_to_cart"
                  ),
                  c = Object(d.a)(
                    "removed_from_cart",
                    "wc-blocks_removed_from_cart"
                  );
                (window.wcBlocksStoreCartListeners.count = 1),
                  (window.wcBlocksStoreCartListeners.remove = () => {
                    document.body.removeEventListener(
                      "wc-blocks_added_to_cart",
                      b
                    ),
                      document.body.removeEventListener(
                        "wc-blocks_removed_from_cart",
                        b
                      ),
                      window.removeEventListener("pageshow", p),
                      t(),
                      c();
                  });
              })(),
              m
            ),
            []
          );
          const w = Object(s.useSelect)(
            (e, { dispatch: c }) => {
              if (!l) return _;
              if (t)
                return {
                  cartCoupons: o.coupons,
                  cartItems: o.items,
                  crossSellsProducts: o.cross_sells,
                  cartFees: o.fees,
                  cartItemsCount: o.items_count,
                  cartItemsWeight: o.items_weight,
                  cartNeedsPayment: o.needs_payment,
                  cartNeedsShipping: o.needs_shipping,
                  cartItemErrors: a.EMPTY_CART_ITEM_ERRORS,
                  cartTotals: o.totals,
                  cartIsLoading: !1,
                  cartErrors: a.EMPTY_CART_ERRORS,
                  billingData: O,
                  billingAddress: O,
                  shippingAddress: g,
                  extensions: a.EMPTY_EXTENSIONS,
                  shippingRates: o.shipping_rates,
                  isLoadingRates: !1,
                  cartHasCalculatedShipping: o.has_calculated_shipping,
                  paymentRequirements: o.paymentRequirements,
                  receiveCart:
                    "function" == typeof (null == o ? void 0 : o.receiveCart)
                      ? o.receiveCart
                      : () => {},
                  receiveCartContents:
                    "function" ==
                    typeof (null == o ? void 0 : o.receiveCartContents)
                      ? o.receiveCartContents
                      : () => {},
                };
              const r = e(a.CART_STORE_KEY),
                n = r.getCartData(),
                s = r.getCartErrors(),
                u = r.getCartTotals(),
                d = !r.hasFinishedResolution("getCartData"),
                b = r.isCustomerDataUpdating(),
                { receiveCart: p, receiveCartContents: m } = c(
                  a.CART_STORE_KEY
                ),
                j = h(n.billingAddress),
                w = n.needsShipping ? h(n.shippingAddress) : j,
                E =
                  n.fees.length > 0
                    ? n.fees.map((e) => h(e))
                    : a.EMPTY_CART_FEES;
              return {
                cartCoupons:
                  n.coupons.length > 0
                    ? n.coupons.map((e) => ({ ...e, label: e.code }))
                    : a.EMPTY_CART_COUPONS,
                cartItems: n.items,
                crossSellsProducts: n.crossSells,
                cartFees: E,
                cartItemsCount: n.itemsCount,
                cartItemsWeight: n.itemsWeight,
                cartNeedsPayment: n.needsPayment,
                cartNeedsShipping: n.needsShipping,
                cartItemErrors: n.errors,
                cartTotals: u,
                cartIsLoading: d,
                cartErrors: s,
                billingData: Object(i.a)(j),
                billingAddress: Object(i.a)(j),
                shippingAddress: Object(i.a)(w),
                extensions: n.extensions,
                shippingRates: n.shippingRates,
                isLoadingRates: b,
                cartHasCalculatedShipping: n.hasCalculatedShipping,
                paymentRequirements: n.paymentRequirements,
                receiveCart: p,
                receiveCartContents: m,
              };
            },
            [l]
          );
          return (j.current && r()(j.current, w)) || (j.current = w), j.current;
        };
    },
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return o;
      });
      let o = (function (e) {
        return (e.SINGLE = "single"), (e.THUMBNAIL = "thumbnail"), e;
      })({});
    },
    ,
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return d;
      }),
        c.d(t, "b", function () {
          return b;
        }),
        c.d(t, "c", function () {
          return p;
        });
      var o = c(8),
        r = c(6),
        n = c(0),
        a = c(25),
        s = c.n(a),
        l = c(47),
        i = c(103),
        u = c(50);
      const d = (e) => {
          const t = Object(u.a)();
          e = e || t;
          const c = Object(r.useSelect)(
              (t) =>
                t(o.QUERY_STATE_STORE_KEY).getValueForQueryContext(e, void 0),
              [e]
            ),
            { setValueForQueryContext: a } = Object(r.useDispatch)(
              o.QUERY_STATE_STORE_KEY
            );
          return [
            c,
            Object(n.useCallback)(
              (t) => {
                a(e, t);
              },
              [e, a]
            ),
          ];
        },
        b = (e, t, c) => {
          const a = Object(u.a)();
          c = c || a;
          const s = Object(r.useSelect)(
              (r) => r(o.QUERY_STATE_STORE_KEY).getValueForQueryKey(c, e, t),
              [c, e]
            ),
            { setQueryValue: l } = Object(r.useDispatch)(
              o.QUERY_STATE_STORE_KEY
            );
          return [
            s,
            Object(n.useCallback)(
              (t) => {
                l(c, e, t);
              },
              [c, e, l]
            ),
          ];
        },
        p = (e, t) => {
          const c = Object(u.a)();
          t = t || c;
          const [o, r] = d(t),
            a = Object(l.a)(o),
            b = Object(l.a)(e),
            p = Object(i.a)(b),
            m = Object(n.useRef)(!1);
          return (
            Object(n.useEffect)(() => {
              s()(p, b) || (r(Object.assign({}, a, b)), (m.current = !0));
            }, [a, b, p, r]),
            m.current ? [o, r] : [e, r]
          );
        };
    },
    ,
    ,
    ,
    function (e, t, c) {
      "use strict";
      c.d(t, "c", function () {
        return s;
      }),
        c.d(t, "b", function () {
          return l;
        }),
        c.d(t, "a", function () {
          return i;
        });
      var o = c(0),
        r = c(1),
        n = c(70),
        a = c(166);
      const s = Object(r.__)("Product Title", "woocommerce"),
        l = Object(o.createElement)(n.a, {
          icon: a.a,
          className: "wc-block-editor-components-block-icon",
        }),
        i = Object(r.__)("Display the title of a product.", "woocommerce");
    },
    ,
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return r;
      }),
        c.d(t, "e", function () {
          return n;
        }),
        c.d(t, "d", function () {
          return a;
        }),
        c.d(t, "b", function () {
          return l;
        }),
        c.d(t, "c", function () {
          return i;
        });
      var o = c(21);
      const r = (e, t) =>
        e[t]
          ? Array.from(e[t].values()).sort((e, t) => e.priority - t.priority)
          : [];
      let n = (function (e) {
          return (
            (e.SUCCESS = "success"),
            (e.FAIL = "failure"),
            (e.ERROR = "error"),
            e
          );
        })({}),
        a = (function (e) {
          return (
            (e.CART = "wc/cart"),
            (e.CHECKOUT = "wc/checkout"),
            (e.PAYMENTS = "wc/checkout/payments"),
            (e.EXPRESS_PAYMENTS = "wc/checkout/express-payments"),
            (e.CONTACT_INFORMATION = "wc/checkout/contact-information"),
            (e.SHIPPING_ADDRESS = "wc/checkout/shipping-address"),
            (e.BILLING_ADDRESS = "wc/checkout/billing-address"),
            (e.SHIPPING_METHODS = "wc/checkout/shipping-methods"),
            (e.CHECKOUT_ACTIONS = "wc/checkout/checkout-actions"),
            e
          );
        })({});
      const s = (e, t) => Object(o.b)(e) && "type" in e && e.type === t,
        l = (e) => s(e, n.ERROR),
        i = (e) => s(e, n.FAIL);
    },
    ,
    ,
    function (e, t, c) {
      "use strict";
      var o = c(0),
        r = c(180),
        n = c(4),
        a = c.n(n),
        s = c(109);
      c(184),
        (t.a = ({
          className: e,
          showSpinner: t = !1,
          children: c,
          variant: n = "contained",
          ...l
        }) => {
          const i = a()(
            "wc-block-components-button",
            "wp-element-button",
            e,
            n,
            { "wc-block-components-button--loading": t }
          );
          return Object(o.createElement)(
            r.a,
            { className: i, ...l },
            t && Object(o.createElement)(s.a, null),
            Object(o.createElement)(
              "span",
              { className: "wc-block-components-button__text" },
              c
            )
          );
        });
    },
    ,
    function (e, t, c) {
      "use strict";
      var o = c(0),
        r = c(2),
        n = c(35),
        a = c(4),
        s = c.n(a);
      t.a = ({
        className: e,
        item: t,
        isSelected: c,
        isLoading: a,
        onSelect: l,
        disabled: i,
        ...u
      }) =>
        Object(o.createElement)(
          o.Fragment,
          null,
          Object(o.createElement)(n.a, {
            ...u,
            key: t.id,
            className: e,
            isSelected: c,
            item: t,
            onSelect: l,
            disabled: i,
          }),
          c &&
            a &&
            Object(o.createElement)(
              "div",
              {
                key: "loading",
                className: s()(
                  "woocommerce-search-list__item",
                  "woocommerce-product-attributes__item",
                  "depth-1",
                  "is-loading",
                  "is-not-active"
                ),
              },
              Object(o.createElement)(r.Spinner, null)
            )
        );
    },
    function (e, t, c) {
      "use strict";
      var o = c(0),
        r = c(1),
        n = c(2);
      const a = (e, t, c) =>
        c
          ? Math.min(e, t) === e
            ? t
            : Math.max(e, c) === e
            ? c
            : e
          : Math.max(e, t) === t
          ? e
          : t;
      t.a = ({
        columns: e,
        rows: t,
        setAttributes: c,
        alignButtons: s,
        minColumns: l = 1,
        maxColumns: i = 6,
        minRows: u = 1,
        maxRows: d = 6,
      }) =>
        Object(o.createElement)(
          o.Fragment,
          null,
          Object(o.createElement)(n.RangeControl, {
            label: Object(r.__)("Columns", "woocommerce"),
            value: e,
            onChange: (e) => {
              const t = a(e, l, i);
              c({ columns: Number.isNaN(t) ? "" : t });
            },
            min: l,
            max: i,
          }),
          Object(o.createElement)(n.RangeControl, {
            label: Object(r.__)("Rows", "woocommerce"),
            value: t,
            onChange: (e) => {
              const t = a(e, u, d);
              c({ rows: Number.isNaN(t) ? "" : t });
            },
            min: u,
            max: d,
          }),
          Object(o.createElement)(n.ToggleControl, {
            label: Object(r.__)(
              "Align the last block to the bottom",
              "woocommerce"
            ),
            help: s
              ? Object(r.__)(
                  "Align the last block to the bottom.",
                  "woocommerce"
                )
              : Object(r.__)(
                  "The last inner block will follow other content.",
                  "woocommerce"
                ),
            checked: s,
            onChange: () => c({ alignButtons: !s }),
          })
        );
    },
    ,
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return r;
      });
      var o = c(7);
      function r(
        e,
        { blockDescription: t, blockIcon: c, blockTitle: r, variationName: n }
      ) {
        Object(o.registerBlockVariation)(e, {
          description: t,
          name: n,
          title: r,
          isActive: (e) => e.__woocommerceNamespace === n,
          icon: { src: c },
          attributes: { __woocommerceNamespace: n },
          scope: ["block", "inserter"],
        });
      }
    },
    ,
    function (e, t) {
      e.exports = window.wp.dom;
    },
    ,
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return o;
      });
      const o = (e) => "boolean" == typeof e;
    },
    ,
    ,
    function (e, t, c) {
      "use strict";
      c.d(t, "c", function () {
        return n;
      }),
        c.d(t, "a", function () {
          return a;
        }),
        c.d(t, "b", function () {
          return s;
        });
      var o = c(7),
        r = c(17);
      const n = (e, t) => {
          if (r.o > 2) return Object(o.registerBlockType)(e, t);
        },
        a = () => r.o > 2,
        s = () => r.o > 1;
    },
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return o;
      });
      const o = (e) => "number" == typeof e;
    },
    ,
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return d;
      });
      var o = c(4),
        r = c.n(o),
        n = c(21),
        a = c(113),
        s = c(654),
        l = c(127);
      function i(e = {}) {
        const t = {};
        return (
          Object(l.getCSSRules)(e, { selector: "" }).forEach((e) => {
            t[e.key] = e.value;
          }),
          t
        );
      }
      function u(e, t) {
        return e && t ? `has-${Object(s.a)(t)}-${e}` : "";
      }
      const d = (e) => {
        const t = ((e) => {
            const t = Object(n.b)(e) ? e : { style: {} };
            let c = t.style;
            return (
              Object(a.a)(c) && (c = JSON.parse(c) || {}),
              Object(n.b)(c) || (c = {}),
              { ...t, style: c }
            );
          })(e),
          c = (function (e) {
            var t, c, o, a, s, l, d;
            const {
                backgroundColor: b,
                textColor: p,
                gradient: m,
                style: g,
              } = e,
              O = u("background-color", b),
              j = u("color", p),
              h = (function (e) {
                if (e) return `has-${e}-gradient-background`;
              })(m),
              _ =
                h ||
                (null == g || null === (t = g.color) || void 0 === t
                  ? void 0
                  : t.gradient);
            return {
              className: r()(j, h, {
                [O]: !_ && !!O,
                "has-text-color":
                  p ||
                  (null == g || null === (c = g.color) || void 0 === c
                    ? void 0
                    : c.text),
                "has-background":
                  b ||
                  (null == g || null === (o = g.color) || void 0 === o
                    ? void 0
                    : o.background) ||
                  m ||
                  (null == g || null === (a = g.color) || void 0 === a
                    ? void 0
                    : a.gradient),
                "has-link-color": Object(n.b)(
                  null == g || null === (s = g.elements) || void 0 === s
                    ? void 0
                    : s.link
                )
                  ? null == g ||
                    null === (l = g.elements) ||
                    void 0 === l ||
                    null === (d = l.link) ||
                    void 0 === d
                    ? void 0
                    : d.color
                  : void 0,
              }),
              style: i({ color: (null == g ? void 0 : g.color) || {} }),
            };
          })(t),
          o = (function (e) {
            var t;
            const c =
              (null === (t = e.style) || void 0 === t ? void 0 : t.border) ||
              {};
            return {
              className: (function (e) {
                var t;
                const { borderColor: c, style: o } = e,
                  n = c ? u("border-color", c) : "";
                return r()({
                  "has-border-color":
                    !!c ||
                    !(
                      null == o ||
                      null === (t = o.border) ||
                      void 0 === t ||
                      !t.color
                    ),
                  [n]: !!n,
                });
              })(e),
              style: i({ border: c }),
            };
          })(t),
          s = (function (e) {
            var t;
            return {
              className: void 0,
              style: i({
                spacing:
                  (null === (t = e.style) || void 0 === t
                    ? void 0
                    : t.spacing) || {},
              }),
            };
          })(t),
          l = ((e) => {
            const t = Object(n.b)(e.style.typography) ? e.style.typography : {},
              c = Object(a.a)(t.fontFamily) ? t.fontFamily : "";
            return {
              className: e.fontFamily ? `has-${e.fontFamily}-font-family` : c,
              style: {
                fontSize: e.fontSize
                  ? `var(--wp--preset--font-size--${e.fontSize})`
                  : t.fontSize,
                fontStyle: t.fontStyle,
                fontWeight: t.fontWeight,
                letterSpacing: t.letterSpacing,
                lineHeight: t.lineHeight,
                textDecoration: t.textDecoration,
                textTransform: t.textTransform,
              },
            };
          })(t);
        return {
          className: r()(l.className, c.className, o.className, s.className),
          style: { ...l.style, ...c.style, ...o.style, ...s.style },
        };
      };
    },
    function (e, t, c) {
      "use strict";
      c.d(t, "c", function () {
        return s;
      }),
        c.d(t, "b", function () {
          return l;
        }),
        c.d(t, "a", function () {
          return i;
        });
      var o = c(0),
        r = c(1),
        n = c(70),
        a = c(198);
      const s = Object(r.__)("Product Summary", "woocommerce"),
        l = Object(o.createElement)(n.a, {
          icon: a.a,
          className: "wc-block-editor-components-block-icon",
        }),
        i = Object(r.__)(
          "Display a short description about a product.",
          "woocommerce"
        );
    },
    ,
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return l;
      }),
        c.d(t, "b", function () {
          return i;
        });
      var o = c(0),
        r = c(2),
        n = c(66),
        a = c(166),
        s = c(76);
      const l = "core/post-title",
        i = "woocommerce/product-query/product-title";
      Object(s.a)(l, {
        blockDescription: n.a,
        blockIcon: Object(o.createElement)(r.Icon, { icon: a.a }),
        blockTitle: n.c,
        variationName: i,
      });
    },
    ,
    ,
    function (e, t, c) {
      "use strict";
      var o = c(0),
        r = c(1),
        n = c(40),
        a = c(4),
        s = c.n(a),
        l = c(22);
      c(183);
      const i = ({
          currency: e,
          maxPrice: t,
          minPrice: c,
          priceClassName: a,
          priceStyle: i = {},
        }) =>
          Object(o.createElement)(
            o.Fragment,
            null,
            Object(o.createElement)(
              "span",
              { className: "screen-reader-text" },
              Object(r.sprintf)(
                /* translators: %1$s min price, %2$s max price */
                Object(r.__)("Price between %1$s and %2$s", "woocommerce"),
                Object(l.formatPrice)(c),
                Object(l.formatPrice)(t)
              )
            ),
            Object(o.createElement)(
              "span",
              { "aria-hidden": !0 },
              Object(o.createElement)(n.a, {
                className: s()("wc-block-components-product-price__value", a),
                currency: e,
                value: c,
                style: i,
              }),
              " — ",
              Object(o.createElement)(n.a, {
                className: s()("wc-block-components-product-price__value", a),
                currency: e,
                value: t,
                style: i,
              })
            )
          ),
        u = ({
          currency: e,
          regularPriceClassName: t,
          regularPriceStyle: c,
          regularPrice: a,
          priceClassName: l,
          priceStyle: i,
          price: u,
        }) =>
          Object(o.createElement)(
            o.Fragment,
            null,
            Object(o.createElement)(
              "span",
              { className: "screen-reader-text" },
              Object(r.__)("Previous price:", "woocommerce")
            ),
            Object(o.createElement)(n.a, {
              currency: e,
              renderText: (e) =>
                Object(o.createElement)(
                  "del",
                  {
                    className: s()(
                      "wc-block-components-product-price__regular",
                      t
                    ),
                    style: c,
                  },
                  e
                ),
              value: a,
            }),
            Object(o.createElement)(
              "span",
              { className: "screen-reader-text" },
              Object(r.__)("Discounted price:", "woocommerce")
            ),
            Object(o.createElement)(n.a, {
              currency: e,
              renderText: (e) =>
                Object(o.createElement)(
                  "ins",
                  {
                    className: s()(
                      "wc-block-components-product-price__value",
                      "is-discounted",
                      l
                    ),
                    style: i,
                  },
                  e
                ),
              value: u,
            })
          );
      t.a = ({
        align: e,
        className: t,
        currency: c,
        format: r = "<price/>",
        maxPrice: a,
        minPrice: l,
        price: d,
        priceClassName: b,
        priceStyle: p,
        regularPrice: m,
        regularPriceClassName: g,
        regularPriceStyle: O,
        style: j,
      }) => {
        const h = s()(t, "price", "wc-block-components-product-price", {
          [`wc-block-components-product-price--align-${e}`]: e,
        });
        r.includes("<price/>") ||
          ((r = "<price/>"),
          console.error("Price formats need to include the `<price/>` tag."));
        const _ = m && d !== m;
        let w = Object(o.createElement)("span", {
          className: s()("wc-block-components-product-price__value", b),
        });
        return (
          _
            ? (w = Object(o.createElement)(u, {
                currency: c,
                price: d,
                priceClassName: b,
                priceStyle: p,
                regularPrice: m,
                regularPriceClassName: g,
                regularPriceStyle: O,
              }))
            : void 0 !== l && void 0 !== a
            ? (w = Object(o.createElement)(i, {
                currency: c,
                maxPrice: a,
                minPrice: l,
                priceClassName: b,
                priceStyle: p,
              }))
            : d &&
              (w = Object(o.createElement)(n.a, {
                className: s()("wc-block-components-product-price__value", b),
                currency: c,
                value: d,
                style: p,
              })),
          Object(o.createElement)(
            "span",
            { className: h, style: j },
            Object(o.createInterpolateElement)(r, { price: w })
          )
        );
      };
    },
    ,
    ,
    function (e, t, c) {
      "use strict";
      c.d(t, "b", function () {
        return a;
      }),
        c.d(t, "a", function () {
          return s;
        });
      var o = c(0),
        r = c(6);
      const n = Object(o.createContext)({
          isEditor: !1,
          currentPostId: 0,
          currentView: "",
          previewData: {},
          getPreviewData: () => ({}),
        }),
        a = () => Object(o.useContext)(n),
        s = ({
          children: e,
          currentPostId: t = 0,
          previewData: c = {},
          currentView: a = "",
          isPreview: s = !1,
        }) => {
          const l = Object(r.useSelect)(
              (e) => t || e("core/editor").getCurrentPostId(),
              [t]
            ),
            i = Object(o.useCallback)((e) => (c && e in c ? c[e] : {}), [c]),
            u = {
              isEditor: !0,
              currentPostId: l,
              currentView: a,
              previewData: c,
              getPreviewData: i,
              isPreview: s,
            };
          return Object(o.createElement)(n.Provider, { value: u }, e);
        };
    },
    ,
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return a;
      });
      var o = c(43),
        r = c(6),
        n = c(0);
      const a = () => ({
        dispatchStoreEvent: Object(n.useCallback)((e, t = {}) => {
          try {
            Object(o.doAction)(`experimental__woocommerce_blocks-${e}`, t);
          } catch (e) {
            console.error(e);
          }
        }, []),
        dispatchCheckoutEvent: Object(n.useCallback)((e, t = {}) => {
          try {
            Object(o.doAction)(
              `experimental__woocommerce_blocks-checkout-${e}`,
              {
                ...t,
                storeCart: Object(r.select)("wc/store/cart").getCartData(),
              }
            );
          } catch (e) {
            console.error(e);
          }
        }, []),
      });
    },
    ,
    ,
    ,
    ,
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return E;
      });
      var o = c(0),
        r = c(1),
        n = c(2),
        a = c(70),
        s = c(614),
        l = c(4),
        i = c.n(l),
        u = c(11),
        d = c(16),
        b = c(35),
        p = c(613),
        m = c(10);
      c(55);
      const g = ({
        id: e,
        label: t,
        popoverContents: c,
        remove: s,
        screenReaderLabel: l,
        className: d = "",
      }) => {
        const [b, O] = Object(o.useState)(!1),
          j = Object(u.useInstanceId)(g);
        if (((l = l || t), !t)) return null;
        t = Object(m.decodeEntities)(t);
        const h = i()("woocommerce-tag", d, { "has-remove": !!s }),
          _ = `woocommerce-tag__label-${j}`,
          w = Object(o.createElement)(
            o.Fragment,
            null,
            Object(o.createElement)(
              "span",
              { className: "screen-reader-text" },
              l
            ),
            Object(o.createElement)("span", { "aria-hidden": "true" }, t)
          );
        return Object(o.createElement)(
          "span",
          { className: h },
          c
            ? Object(o.createElement)(
                n.Button,
                {
                  className: "woocommerce-tag__text",
                  id: _,
                  onClick: () => O(!0),
                },
                w
              )
            : Object(o.createElement)(
                "span",
                { className: "woocommerce-tag__text", id: _ },
                w
              ),
          c &&
            b &&
            Object(o.createElement)(n.Popover, { onClose: () => O(!1) }, c),
          s &&
            Object(o.createElement)(
              n.Button,
              {
                className: "woocommerce-tag__remove",
                onClick: s(e),
                label: Object(r.sprintf)(
                  // Translators: %s label.
                  Object(r.__)("Remove %s", "woocommerce"),
                  t
                ),
                "aria-describedby": _,
              },
              Object(o.createElement)(a.a, {
                icon: p.a,
                size: 20,
                className: "clear-icon",
              })
            )
        );
      };
      var O = g;
      c(54);
      const j = (e) => Object(o.createElement)(b.b, { ...e }),
        h = (e) => {
          const {
              list: t,
              selected: c,
              renderItem: r,
              depth: n = 0,
              onSelect: a,
              instanceId: s,
              isSingle: l,
              search: i,
              useExpandedPanelId: u,
            } = e,
            [d] = u;
          return t
            ? Object(o.createElement)(
                o.Fragment,
                null,
                t.map((t) => {
                  var b, p;
                  const m =
                      null !== (b = t.children) &&
                      void 0 !== b &&
                      b.length &&
                      !l
                        ? t.children.every(({ id: e }) =>
                            c.find((t) => t.id === e)
                          )
                        : !!c.find(({ id: e }) => e === t.id),
                    g =
                      (null === (p = t.children) || void 0 === p
                        ? void 0
                        : p.length) && d === t.id;
                  return Object(o.createElement)(
                    o.Fragment,
                    { key: t.id },
                    Object(o.createElement)(
                      "li",
                      null,
                      r({
                        item: t,
                        isSelected: m,
                        onSelect: a,
                        isSingle: l,
                        selected: c,
                        search: i,
                        depth: n,
                        useExpandedPanelId: u,
                        controlId: s,
                      })
                    ),
                    g
                      ? Object(o.createElement)(h, {
                          ...e,
                          list: t.children,
                          depth: n + 1,
                        })
                      : null
                  );
                })
              )
            : null;
        },
        _ = ({
          isLoading: e,
          isSingle: t,
          selected: c,
          messages: a,
          onChange: s,
          onRemove: l,
        }) => {
          if (e || t || !c) return null;
          const i = c.length;
          return Object(o.createElement)(
            "div",
            { className: "woocommerce-search-list__selected" },
            Object(o.createElement)(
              "div",
              { className: "woocommerce-search-list__selected-header" },
              Object(o.createElement)("strong", null, a.selected(i)),
              i > 0
                ? Object(o.createElement)(
                    n.Button,
                    {
                      isLink: !0,
                      isDestructive: !0,
                      onClick: () => s([]),
                      "aria-label": a.clear,
                    },
                    Object(r.__)("Clear all", "woocommerce")
                  )
                : null
            ),
            i > 0
              ? Object(o.createElement)(
                  "ul",
                  null,
                  c.map((e, t) =>
                    Object(o.createElement)(
                      "li",
                      { key: t },
                      Object(o.createElement)(O, {
                        label: e.name,
                        id: e.id,
                        remove: l,
                      })
                    )
                  )
                )
              : null
          );
        },
        w = ({
          filteredList: e,
          search: t,
          onSelect: c,
          instanceId: n,
          useExpandedPanelId: l,
          ...i
        }) => {
          const { messages: u, renderItem: d, selected: b, isSingle: p } = i,
            m = d || j;
          return 0 === e.length
            ? Object(o.createElement)(
                "div",
                { className: "woocommerce-search-list__list is-not-found" },
                Object(o.createElement)(
                  "span",
                  { className: "woocommerce-search-list__not-found-icon" },
                  Object(o.createElement)(a.a, { icon: s.a })
                ),
                Object(o.createElement)(
                  "span",
                  { className: "woocommerce-search-list__not-found-text" },
                  t ? Object(r.sprintf)(u.noResults, t) : u.noItems
                )
              )
            : Object(o.createElement)(
                "ul",
                { className: "woocommerce-search-list__list" },
                Object(o.createElement)(h, {
                  useExpandedPanelId: l,
                  list: e,
                  selected: b,
                  renderItem: m,
                  onSelect: c,
                  instanceId: n,
                  isSingle: p,
                  search: t,
                })
              );
        },
        E = (e) => {
          const {
              className: t = "",
              isCompact: c,
              isHierarchical: a,
              isLoading: s,
              isSingle: l,
              list: b,
              messages: p = d.a,
              onChange: m,
              onSearch: g,
              selected: O,
              type: j = "text",
              debouncedSpeak: h,
            } = e,
            [f, k] = Object(o.useState)(""),
            v = Object(o.useState)(-1),
            y = Object(u.useInstanceId)(E),
            S = Object(o.useMemo)(() => ({ ...d.a, ...p }), [p]),
            C = Object(o.useMemo)(() => Object(d.c)(b, f, a), [b, f, a]);
          Object(o.useEffect)(() => {
            h && h(S.updated);
          }, [h, S]),
            Object(o.useEffect)(() => {
              "function" == typeof g && g(f);
            }, [f, g]);
          const x = Object(o.useCallback)(
              (e) => () => {
                l && m([]);
                const t = O.findIndex(({ id: t }) => t === e);
                m([...O.slice(0, t), ...O.slice(t + 1)]);
              },
              [l, O, m]
            ),
            N = Object(o.useCallback)(
              (e) => () => {
                Array.isArray(e)
                  ? m(e)
                  : -1 === O.findIndex(({ id: t }) => t === e.id)
                  ? m(l ? [e] : [...O, e])
                  : x(e.id)();
              },
              [l, x, m, O]
            ),
            P = Object(o.useCallback)(
              (e) => {
                const [t] = O.filter((t) => !e.find((e) => t.id === e.id));
                x(t.id)();
              },
              [x, O]
            );
          return Object(o.createElement)(
            "div",
            {
              className: i()("woocommerce-search-list", t, {
                "is-compact": c,
                "is-loading": s,
                "is-token": "token" === j,
              }),
            },
            "text" === j &&
              Object(o.createElement)(_, { ...e, onRemove: x, messages: S }),
            Object(o.createElement)(
              "div",
              { className: "woocommerce-search-list__search" },
              "text" === j
                ? Object(o.createElement)(n.TextControl, {
                    label: S.search,
                    type: "search",
                    value: f,
                    onChange: (e) => k(e),
                  })
                : Object(o.createElement)(n.FormTokenField, {
                    disabled: s,
                    label: S.search,
                    onChange: P,
                    onInputChange: (e) => k(e),
                    suggestions: [],
                    __experimentalValidateInput: () => !1,
                    value: s
                      ? [Object(r.__)("Loading…", "woocommerce")]
                      : O.map((e) => ({ ...e, value: e.name })),
                    __experimentalShowHowTo: !1,
                  })
            ),
            s
              ? Object(o.createElement)(
                  "div",
                  { className: "woocommerce-search-list__list" },
                  Object(o.createElement)(n.Spinner, null)
                )
              : Object(o.createElement)(w, {
                  ...e,
                  search: f,
                  filteredList: C,
                  messages: S,
                  onSelect: N,
                  instanceId: y,
                  useExpandedPanelId: v,
                })
          );
        };
      Object(n.withSpokenMessages)(E);
    },
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return r;
      });
      var o = c(0);
      function r(e, t) {
        const c = Object(o.useRef)();
        return (
          Object(o.useEffect)(() => {
            c.current === e || (t && !t(e, c.current)) || (c.current = e);
          }, [e, t]),
          c.current
        );
      }
    },
    function (e, t) {
      e.exports = window.wp.wordcount;
    },
    ,
    ,
    function (e, t, c) {
      "use strict";
      var o = c(3),
        r = c(1),
        n = c(84),
        a = c(113),
        s = c(17);
      const l = (e) => {
          const t = {};
          return (
            void 0 !== e.label && (t.label = e.label),
            void 0 !== e.required && (t.required = e.required),
            void 0 !== e.hidden && (t.hidden = e.hidden),
            void 0 === e.label ||
              e.optionalLabel ||
              (t.optionalLabel = Object(r.sprintf)(
                /* translators: %s Field label. */
                Object(r.__)("%s (optional)", "woocommerce"),
                e.label
              )),
            e.priority &&
              (Object(n.a)(e.priority) && (t.index = e.priority),
              Object(a.a)(e.priority) && (t.index = parseInt(e.priority, 10))),
            e.hidden && (t.required = !1),
            t
          );
        },
        i = Object.entries(s.f)
          .map(([e, t]) => [
            e,
            Object.entries(t)
              .map(([e, t]) => [e, l(t)])
              .reduce((e, [t, c]) => ((e[t] = c), e), {}),
          ])
          .reduce((e, [t, c]) => ((e[t] = c), e), {});
      t.a = (e, t, c = "") => {
        const r = c && void 0 !== i[c] ? i[c] : {};
        return e
          .map((e) => ({
            key: e,
            ...(o.defaultAddressFields[e] || {}),
            ...(r[e] || {}),
            ...(t[e] || {}),
          }))
          .sort((e, t) => e.index - t.index);
      };
    },
    function (e, t) {
      e.exports = window.wp.warning;
    },
    function (e, t, c) {
      "use strict";
      var o = c(0);
      c(185),
        (t.a = () =>
          Object(o.createElement)("span", {
            className: "wc-block-components-spinner",
            "aria-hidden": "true",
          }));
    },
    function (e, t, c) {
      "use strict";
      var o = c(0),
        r = c(1),
        n = c(260),
        a = c(35),
        s = c(102),
        l = c(11),
        i = c(218),
        u = c(18),
        d = c.n(u),
        b = c(25),
        p = c.n(b),
        m = c(23),
        g = c(28),
        O = Object(l.createHigherOrderComponent)((e) => {
          class t extends o.Component {
            constructor(...e) {
              super(...e),
                d()(this, "state", {
                  error: null,
                  loading: !1,
                  variations: {},
                }),
                d()(this, "loadVariations", () => {
                  const { products: e } = this.props,
                    { loading: t, variations: c } = this.state;
                  if (t) return;
                  const o = this.getExpandedProduct();
                  if (!o || c[o]) return;
                  const r = e.find((e) => e.id === o);
                  r.variations && 0 !== r.variations.length
                    ? (this.setState({ loading: !0 }),
                      Object(m.g)(o)
                        .then((e) => {
                          const t = e.map((e) => ({ ...e, parent: o }));
                          this.setState({
                            variations: { ...this.state.variations, [o]: t },
                            loading: !1,
                            error: null,
                          });
                        })
                        .catch(async (e) => {
                          const t = await Object(g.a)(e);
                          this.setState({
                            variations: { ...this.state.variations, [o]: null },
                            loading: !1,
                            error: t,
                          });
                        }))
                    : this.setState({
                        variations: { ...this.state.variations, [o]: null },
                        loading: !1,
                        error: null,
                      });
                });
            }
            componentDidMount() {
              const { selected: e, showVariations: t } = this.props;
              e && t && this.loadVariations();
            }
            componentDidUpdate(e) {
              const {
                isLoading: t,
                selected: c,
                showVariations: o,
              } = this.props;
              o &&
                (!p()(e.selected, c) || (e.isLoading && !t)) &&
                this.loadVariations();
            }
            isProductId(e) {
              const { products: t } = this.props;
              return t.some((t) => t.id === e);
            }
            findParentProduct(e) {
              var t;
              const { products: c } = this.props;
              return null ===
                (t = c.filter(
                  (t) =>
                    t.variations && t.variations.find(({ id: t }) => t === e)
                )[0]) || void 0 === t
                ? void 0
                : t.id;
            }
            getExpandedProduct() {
              const {
                isLoading: e,
                selected: t,
                showVariations: c,
              } = this.props;
              if (!c) return null;
              let o = t && t.length ? t[0] : null;
              return (
                o
                  ? (this.prevSelectedItem = o)
                  : this.prevSelectedItem &&
                    (e ||
                      this.isProductId(this.prevSelectedItem) ||
                      (o = this.prevSelectedItem)),
                !e && o
                  ? this.isProductId(o)
                    ? o
                    : this.findParentProduct(o)
                  : null
              );
            }
            render() {
              const { error: t, isLoading: c } = this.props,
                { error: r, loading: n, variations: a } = this.state;
              return Object(o.createElement)(e, {
                ...this.props,
                error: r || t,
                expandedProduct: this.getExpandedProduct(),
                isLoading: c,
                variations: a,
                variationsLoading: n,
              });
            }
          }
          return (
            d()(t, "defaultProps", { selected: [], showVariations: !1 }), t
          );
        }, "withProductVariations"),
        j = c(34),
        h = c(4),
        _ = c.n(h),
        w = c(73);
      c(155);
      const E = {
          list: Object(r.__)("Products", "woocommerce"),
          noItems: Object(r.__)(
            "Your store doesn't have any products.",
            "woocommerce"
          ),
          search: Object(r.__)(
            "Search for a product to display",
            "woocommerce"
          ),
          updated: Object(r.__)(
            "Product search results updated.",
            "woocommerce"
          ),
        },
        f = ({
          expandedProduct: e,
          error: t,
          instanceId: c,
          isCompact: l,
          isLoading: i,
          onChange: u,
          onSearch: d,
          products: b,
          renderItem: p,
          selected: m,
          showVariations: g,
          variations: O,
          variationsLoading: h,
        }) => {
          if (t) return Object(o.createElement)(j.a, { error: t });
          const f = [...b, ...(O && O[e] ? O[e] : [])];
          return Object(o.createElement)(s.a, {
            className: "woocommerce-products",
            list: f,
            isCompact: l,
            isLoading: i,
            isSingle: !0,
            selected: f.filter(({ id: e }) => m.includes(e)),
            onChange: u,
            renderItem:
              p ||
              (g
                ? (e) => {
                    const {
                        item: t,
                        search: s,
                        depth: l = 0,
                        isSelected: u,
                        onSelect: d,
                      } = e,
                      b =
                        t.variations && Array.isArray(t.variations)
                          ? t.variations.length
                          : 0,
                      p = _()(
                        "woocommerce-search-product__item",
                        "woocommerce-search-list__item",
                        `depth-${l}`,
                        "has-count",
                        {
                          "is-searching": s.length > 0,
                          "is-skip-level": 0 === l && 0 !== t.parent,
                          "is-variable": b > 0,
                        }
                      );
                    if (!t.breadcrumbs.length)
                      return Object(o.createElement)(w.a, {
                        ...e,
                        className: _()(p, { "is-selected": u }),
                        isSelected: u,
                        item: t,
                        onSelect: () => () => {
                          d(t)();
                        },
                        isLoading: i || h,
                        countLabel:
                          t.variations.length > 0
                            ? Object(r.sprintf)(
                                /* translators: %1$d is the number of variations of a product product. */
                                Object(r.__)("%1$d variations", "woocommerce"),
                                t.variations.length
                              )
                            : null,
                        name: `products-${c}`,
                        "aria-label": Object(r.sprintf)(
                          /* translators: %1$s is the product name, %2$d is the number of variations of that product. */
                          Object(r._n)(
                            "%1$s, has %2$d variation",
                            "%1$s, has %2$d variations",
                            t.variations.length,
                            "woocommerce"
                          ),
                          t.name,
                          t.variations.length
                        ),
                      });
                    const m = Object(n.a)(t.variation)
                      ? e
                      : {
                          ...e,
                          item: { ...e.item, name: t.variation },
                          "aria-label": `${t.breadcrumbs[0]}: ${t.variation}`,
                        };
                    return Object(o.createElement)(a.a, {
                      ...m,
                      className: p,
                      name: `variations-${c}`,
                    });
                  }
                : null),
            onSearch: d,
            messages: E,
            isHierarchical: !0,
          });
        };
      var k;
      (f.defaultProps = {
        isCompact: !1,
        expandedProduct: null,
        selected: [],
        showVariations: !1,
      }),
        (t.a =
          ((k = Object(i.a)(O(Object(l.withInstanceId)(f)))),
          (e) => {
            let { selected: t } = e;
            t = void 0 === t ? null : t;
            const c = null === t;
            return Array.isArray(t)
              ? Object(o.createElement)(k, { ...e })
              : Object(o.createElement)(k, { ...e, selected: c ? [] : [t] });
          }));
    },
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return r;
      }),
        c.d(t, "b", function () {
          return a;
        });
      let o = (function (e) {
        return (
          (e.ADD_EVENT_CALLBACK = "add_event_callback"),
          (e.REMOVE_EVENT_CALLBACK = "remove_event_callback"),
          e
        );
      })({});
      const r = {
          addEventCallback: (e, t, c = 10) => ({
            id: Math.floor(Math.random() * Date.now()).toString(),
            type: o.ADD_EVENT_CALLBACK,
            eventType: e,
            callback: t,
            priority: c,
          }),
          removeEventCallback: (e, t) => ({
            id: t,
            type: o.REMOVE_EVENT_CALLBACK,
            eventType: e,
          }),
        },
        n = {},
        a = (
          e = n,
          { type: t, eventType: c, id: r, callback: a, priority: s }
        ) => {
          const l = e.hasOwnProperty(c) ? new Map(e[c]) : new Map();
          switch (t) {
            case o.ADD_EVENT_CALLBACK:
              return l.set(r, { priority: s, callback: a }), { ...e, [c]: l };
            case o.REMOVE_EVENT_CALLBACK:
              return l.delete(r), { ...e, [c]: l };
          }
        };
    },
    ,
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return o;
      });
      const o = (e) => "string" == typeof e;
    },
    ,
    ,
    ,
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return l;
      }),
        c.d(t, "b", function () {
          return i;
        });
      var o = c(0),
        r = c(2),
        n = c(1),
        a = c(349),
        s = c(76);
      const l = "core/post-template",
        i = "woocommerce/product-query/product-template";
      Object(s.a)(l, {
        blockDescription: Object(n.__)(
          "Contains the block elements used to render a product, like its name, featured image, rating, and more.",
          "woocommerce"
        ),
        blockIcon: Object(o.createElement)(r.Icon, { icon: a.a }),
        blockTitle: Object(n.__)("Product template", "woocommerce"),
        variationName: i,
      });
    },
    ,
    function (e, t, c) {
      "use strict";
      var o = c(0),
        r = c(10),
        n = c(4),
        a = c.n(n);
      c(182),
        (t.a = ({
          className: e = "",
          disabled: t = !1,
          name: c,
          permalink: n = "",
          target: s,
          rel: l,
          style: i,
          onClick: u,
          ...d
        }) => {
          const b = a()("wc-block-components-product-name", e);
          if (t) {
            const e = d;
            return Object(o.createElement)("span", {
              className: b,
              ...e,
              dangerouslySetInnerHTML: { __html: Object(r.decodeEntities)(c) },
            });
          }
          return Object(o.createElement)("a", {
            className: b,
            href: n,
            target: s,
            ...d,
            dangerouslySetInnerHTML: { __html: Object(r.decodeEntities)(c) },
            style: i,
          });
        });
    },
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return s;
      });
      var o = c(8),
        r = c(6),
        n = c(0),
        a = c(47);
      const s = (e) => {
        const {
          namespace: t,
          resourceName: c,
          resourceValues: s = [],
          query: l = {},
          shouldSelect: i = !0,
        } = e;
        if (!t || !c)
          throw new Error(
            "The options object must have valid values for the namespace and the resource properties."
          );
        const u = Object(n.useRef)({ results: [], isLoading: !0 }),
          d = Object(a.a)(l),
          b = Object(a.a)(s),
          p = (() => {
            const [, e] = Object(n.useState)();
            return Object(n.useCallback)((t) => {
              e(() => {
                throw t;
              });
            }, []);
          })(),
          m = Object(r.useSelect)(
            (e) => {
              if (!i) return null;
              const r = e(o.COLLECTIONS_STORE_KEY),
                n = [t, c, d, b],
                a = r.getCollectionError(...n);
              if (a) {
                if (!(a instanceof Error))
                  throw new Error(
                    "TypeError: `error` object is not an instance of Error constructor"
                  );
                p(a);
              }
              return {
                results: r.getCollection(...n),
                isLoading: !r.hasFinishedResolution("getCollection", n),
              };
            },
            [t, c, b, d, i]
          );
        return null !== m && (u.current = m), u.current;
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t) {
      e.exports = window.wp.styleEngine;
    },
    ,
    ,
    ,
    ,
    function (e, t, c) {
      "use strict";
      var o = c(0),
        r = c(51),
        n = c(283),
        a = c(104);
      t.a = ({
        source: e,
        maxLength: t = 15,
        countType: c = "words",
        className: s = "",
        style: l = {},
      }) => {
        const i = Object(o.useMemo)(
          () =>
            ((e, t = 15, c = "words") => {
              const o = Object(r.autop)(e);
              if (Object(a.count)(o, c) <= t) return o;
              const s = ((e) => {
                const t = e.indexOf("</p>");
                return -1 === t ? e : e.substr(0, t + 4);
              })(o);
              return Object(a.count)(s, c) <= t
                ? s
                : "words" === c
                ? Object(n.b)(s, t)
                : Object(n.a)(s, t, "characters_including_spaces" === c);
            })(e, t, c),
          [e, t, c]
        );
        return Object(o.createElement)(
          o.RawHTML,
          { style: l, className: s },
          i
        );
      };
    },
    ,
    ,
    ,
    ,
    function (e, t, c) {
      "use strict";
      var o = c(0),
        r = c(4),
        n = c.n(r),
        a = c(29),
        s = c(11);
      c(188),
        (t.a = Object(s.withInstanceId)(
          ({
            className: e,
            instanceId: t,
            label: c = "",
            onChange: r,
            options: s,
            screenReaderLabel: l,
            value: i = "",
          }) => {
            const u = `wc-block-components-sort-select__select-${t}`;
            return Object(o.createElement)(
              "div",
              {
                className: n()(
                  "wc-block-sort-select",
                  "wc-block-components-sort-select",
                  e
                ),
              },
              Object(o.createElement)(a.a, {
                label: c,
                screenReaderLabel: l,
                wrapperElement: "label",
                wrapperProps: {
                  className:
                    "wc-block-sort-select__label wc-block-components-sort-select__label",
                  htmlFor: u,
                },
              }),
              Object(o.createElement)(
                "select",
                {
                  id: u,
                  className:
                    "wc-block-sort-select__select wc-block-components-sort-select__select",
                  onChange: r,
                  value: i,
                },
                s &&
                  s.map((e) =>
                    Object(o.createElement)(
                      "option",
                      { key: e.key, value: e.key },
                      e.label
                    )
                  )
              )
            );
          }
        ));
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t) {},
    function (e, t) {},
    function (e, t, c) {
      "use strict";
      c.r(t),
        c.d(t, "Block", function () {
          return d;
        });
      var o = c(0),
        r = c(1),
        n = c(4),
        a = c.n(n),
        s = c(29),
        l = c(24),
        i = c(86),
        u = c(48);
      c(276);
      const d = (e) => {
        const { className: t, align: c } = e,
          n = Object(i.a)(e),
          { parentClassName: u } = Object(l.useInnerBlockLayoutContext)(),
          { product: d } = Object(l.useProductDataContext)();
        if (!d.id || !d.on_sale) return null;
        const b =
          "string" == typeof c
            ? `wc-block-components-product-sale-badge--align-${c}`
            : "";
        return Object(o.createElement)(
          "div",
          {
            className: a()(
              "wc-block-components-product-sale-badge",
              t,
              b,
              { [`${u}__product-onsale`]: u },
              n.className
            ),
            style: n.style,
          },
          Object(o.createElement)(s.a, {
            label: Object(r.__)("Sale", "woocommerce"),
            screenReaderLabel: Object(r.__)("Product on sale", "woocommerce"),
          })
        );
      };
      t.default = Object(u.withProductDataContext)(d);
    },
    ,
    ,
    function (e, t, c) {
      "use strict";
      var o = c(0),
        r = c(1),
        n = c(70),
        a = c(211),
        s = c(3),
        l = c(5),
        i = c(24);
      t.a = (e) => {
        const t =
          (Object(i.useProductDataContext)().product || {}).id ||
          e.productId ||
          0;
        return t && 1 !== t
          ? Object(o.createElement)(
              l.InspectorControls,
              null,
              Object(o.createElement)(
                "div",
                { className: "wc-block-single-product__edit-card" },
                Object(o.createElement)(
                  "div",
                  { className: "wc-block-single-product__edit-card-title" },
                  Object(o.createElement)(
                    "a",
                    {
                      href: `${s.ADMIN_URL}post.php?post=${t}&action=edit`,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                    Object(r.__)("Edit this product's details", "woocommerce"),
                    Object(o.createElement)(n.a, { icon: a.a, size: 16 })
                  )
                ),
                Object(o.createElement)(
                  "div",
                  {
                    className: "wc-block-single-product__edit-card-description",
                  },
                  Object(r.__)(
                    "Edit details such as title, price, description and more.",
                    "woocommerce"
                  )
                )
              )
            )
          : null;
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return r;
      });
      var o = c(0);
      const r = Object(o.createElement)(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 230 250",
          style: { width: "100%" },
        },
        Object(o.createElement)("title", null, "Grid Block Preview"),
        Object(o.createElement)("rect", {
          width: "65.374",
          height: "65.374",
          x: ".162",
          y: ".779",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "47.266",
          height: "5.148",
          x: "9.216",
          y: "76.153",
          fill: "#E1E3E6",
          rx: "2.574",
        }),
        Object(o.createElement)("rect", {
          width: "62.8",
          height: "15",
          x: "1.565",
          y: "101.448",
          fill: "#E1E3E6",
          rx: "5",
        }),
        Object(o.createElement)("rect", {
          width: "65.374",
          height: "65.374",
          x: ".162",
          y: "136.277",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "47.266",
          height: "5.148",
          x: "9.216",
          y: "211.651",
          fill: "#E1E3E6",
          rx: "2.574",
        }),
        Object(o.createElement)("rect", {
          width: "62.8",
          height: "15",
          x: "1.565",
          y: "236.946",
          fill: "#E1E3E6",
          rx: "5",
        }),
        Object(o.createElement)("rect", {
          width: "65.374",
          height: "65.374",
          x: "82.478",
          y: ".779",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "47.266",
          height: "5.148",
          x: "91.532",
          y: "76.153",
          fill: "#E1E3E6",
          rx: "2.574",
        }),
        Object(o.createElement)("rect", {
          width: "62.8",
          height: "15",
          x: "83.882",
          y: "101.448",
          fill: "#E1E3E6",
          rx: "5",
        }),
        Object(o.createElement)("rect", {
          width: "65.374",
          height: "65.374",
          x: "82.478",
          y: "136.277",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "47.266",
          height: "5.148",
          x: "91.532",
          y: "211.651",
          fill: "#E1E3E6",
          rx: "2.574",
        }),
        Object(o.createElement)("rect", {
          width: "62.8",
          height: "15",
          x: "83.882",
          y: "236.946",
          fill: "#E1E3E6",
          rx: "5",
        }),
        Object(o.createElement)("rect", {
          width: "65.374",
          height: "65.374",
          x: "164.788",
          y: ".779",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "47.266",
          height: "5.148",
          x: "173.843",
          y: "76.153",
          fill: "#E1E3E6",
          rx: "2.574",
        }),
        Object(o.createElement)("rect", {
          width: "62.8",
          height: "15",
          x: "166.192",
          y: "101.448",
          fill: "#E1E3E6",
          rx: "5",
        }),
        Object(o.createElement)("rect", {
          width: "65.374",
          height: "65.374",
          x: "164.788",
          y: "136.277",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "47.266",
          height: "5.148",
          x: "173.843",
          y: "211.651",
          fill: "#E1E3E6",
          rx: "2.574",
        }),
        Object(o.createElement)("rect", {
          width: "62.8",
          height: "15",
          x: "166.192",
          y: "236.946",
          fill: "#E1E3E6",
          rx: "5",
        }),
        Object(o.createElement)("rect", {
          width: "6.177",
          height: "6.177",
          x: "13.283",
          y: "86.301",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "6.177",
          height: "6.177",
          x: "21.498",
          y: "86.301",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "6.177",
          height: "6.177",
          x: "29.713",
          y: "86.301",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "6.177",
          height: "6.177",
          x: "37.927",
          y: "86.301",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "6.177",
          height: "6.177",
          x: "46.238",
          y: "86.301",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "6.177",
          height: "6.177",
          x: "95.599",
          y: "86.301",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "6.177",
          height: "6.177",
          x: "103.814",
          y: "86.301",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "6.177",
          height: "6.177",
          x: "112.029",
          y: "86.301",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "6.177",
          height: "6.177",
          x: "120.243",
          y: "86.301",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "6.177",
          height: "6.177",
          x: "128.554",
          y: "86.301",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "6.177",
          height: "6.177",
          x: "177.909",
          y: "86.301",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "6.177",
          height: "6.177",
          x: "186.124",
          y: "86.301",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "6.177",
          height: "6.177",
          x: "194.339",
          y: "86.301",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "6.177",
          height: "6.177",
          x: "202.553",
          y: "86.301",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "6.177",
          height: "6.177",
          x: "210.864",
          y: "86.301",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "6.177",
          height: "6.177",
          x: "13.283",
          y: "221.798",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "6.177",
          height: "6.177",
          x: "21.498",
          y: "221.798",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "6.177",
          height: "6.177",
          x: "29.713",
          y: "221.798",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "6.177",
          height: "6.177",
          x: "37.927",
          y: "221.798",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "6.177",
          height: "6.177",
          x: "46.238",
          y: "221.798",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "6.177",
          height: "6.177",
          x: "95.599",
          y: "221.798",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "6.177",
          height: "6.177",
          x: "103.814",
          y: "221.798",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "6.177",
          height: "6.177",
          x: "112.029",
          y: "221.798",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "6.177",
          height: "6.177",
          x: "120.243",
          y: "221.798",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "6.177",
          height: "6.177",
          x: "128.554",
          y: "221.798",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "6.177",
          height: "6.177",
          x: "177.909",
          y: "221.798",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "6.177",
          height: "6.177",
          x: "186.124",
          y: "221.798",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "6.177",
          height: "6.177",
          x: "194.339",
          y: "221.798",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "6.177",
          height: "6.177",
          x: "202.553",
          y: "221.798",
          fill: "#E1E3E6",
          rx: "3",
        }),
        Object(o.createElement)("rect", {
          width: "6.177",
          height: "6.177",
          x: "210.864",
          y: "221.798",
          fill: "#E1E3E6",
          rx: "3",
        })
      );
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    ,
    ,
    function (e, t) {},
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, c) {
      "use strict";
      function o(e, t) {
        const { [t]: c, ...o } = e;
        return o;
      }
      c.d(t, "a", function () {
        return o;
      });
    },
    ,
    function (e) {
      e.exports = JSON.parse(
        '{"name":"woocommerce/product-button","version":"1.0.0","title":"Add to Cart Button","description":"Display a call to action button which either adds the product to the cart, or links to the product page.","category":"woocommerce","keywords":["WooCommerce"],"usesContext":["query","queryId","postId"],"textdomain":"woocommerce","attributes":{"productId":{"type":"number","default":0},"textAlign":{"type":"string","default":""},"width":{"type":"number"},"isDescendentOfSingleProductBlock":{"type":"boolean","default":false},"isDescendentOfQueryLoop":{"type":"boolean","default":false}},"supports":{"align":["wide","full"],"color":{"background":false,"link":true},"interactivity":true,"html":false,"typography":{"fontSize":true,"lineHeight":true}},"ancestor":["woocommerce/all-products","woocommerce/single-product","core/post-template","woocommerce/product-template"],"styles":[{"name":"fill","label":"Fill","isDefault":true},{"name":"outline","label":"Outline"}],"viewScript":["wc-product-button-interactivity-frontend"],"apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}'
      );
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return p;
      });
      var o = c(0),
        r = c(4),
        n = c.n(r),
        a = c(24),
        s = c(83),
        l = c(48),
        i = c(119),
        u = c(97),
        d = c(86);
      c(277);
      const b = ({
          children: e,
          headingLevel: t,
          elementType: c = `h${t}`,
          ...r
        }) => Object(o.createElement)(c, { ...r }, e),
        p = (e) => {
          const {
              className: t,
              headingLevel: c = 2,
              showProductLink: r = !0,
              linkTarget: l,
              align: p,
            } = e,
            m = Object(d.a)(e),
            { parentClassName: g } = Object(a.useInnerBlockLayoutContext)(),
            { product: O } = Object(a.useProductDataContext)(),
            { dispatchStoreEvent: j } = Object(u.a)();
          return O.id
            ? Object(o.createElement)(
                b,
                {
                  headingLevel: c,
                  className: n()(
                    t,
                    m.className,
                    "wc-block-components-product-title",
                    {
                      [`${g}__product-title`]: g,
                      [`wc-block-components-product-title--align-${p}`]:
                        p && Object(s.b)(),
                    }
                  ),
                  style: Object(s.b)() ? m.style : {},
                },
                Object(o.createElement)(i.a, {
                  disabled: !r,
                  name: O.name,
                  permalink: O.permalink,
                  target: l,
                  onClick: () => {
                    j("product-view-link", { product: O });
                  },
                })
              )
            : Object(o.createElement)(b, {
                headingLevel: c,
                className: n()(
                  t,
                  m.className,
                  "wc-block-components-product-title",
                  {
                    [`${g}__product-title`]: g,
                    [`wc-block-components-product-title--align-${p}`]:
                      p && Object(s.b)(),
                  }
                ),
                style: Object(s.b)() ? m.style : {},
              });
        };
      t.b = Object(l.withProductDataContext)(p);
    },
    function (e, t, c) {
      "use strict";
      var o = c(0),
        r = c(17),
        n = c(23),
        a = c(41),
        s = c(28);
      t.a =
        (e) =>
        ({ selected: t, ...c }) => {
          const [l, i] = Object(o.useState)(!0),
            [u, d] = Object(o.useState)(null),
            [b, p] = Object(o.useState)([]),
            m = r.p.productCount > 100,
            g = async (e) => {
              const t = await Object(s.a)(e);
              d(t), i(!1);
            },
            O = Object(o.useRef)(t);
          Object(o.useEffect)(() => {
            Object(n.h)({ selected: O.current })
              .then((e) => {
                p(e), i(!1);
              })
              .catch(g);
          }, [O]);
          const j = Object(a.b)((e) => {
              Object(n.h)({ selected: t, search: e })
                .then((e) => {
                  p(e), i(!1);
                })
                .catch(g);
            }, 400),
            h = Object(o.useCallback)(
              (e) => {
                i(!0), j(e);
              },
              [i, j]
            );
          return Object(o.createElement)(e, {
            ...c,
            selected: t,
            error: u,
            products: b,
            isLoading: l,
            onSearch: m ? h : null,
          });
        };
    },
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return O;
      });
      var o = c(0),
        r = c(1),
        n = c(4),
        a = c.n(n),
        s = c(3),
        l = c(24),
        i = c(86),
        u = c(48),
        d = c(97),
        b = c(156),
        p = (c(278), c(60));
      const m = (e) =>
          Object(o.createElement)("img", {
            ...e,
            src: s.PLACEHOLDER_IMG_SRC,
            alt: "",
            width: void 0,
            height: void 0,
          }),
        g = ({
          image: e,
          loaded: t,
          showFullSize: c,
          fallbackAlt: r,
          width: n,
          scale: a,
          height: s,
        }) => {
          const { thumbnail: l, src: i, srcset: u, sizes: d, alt: b } = e || {},
            p = {
              alt: b || r,
              hidden: !t,
              src: l,
              ...(c && { src: i, srcSet: u, sizes: d }),
            },
            g = { height: s, width: n, objectFit: a };
          return Object(o.createElement)(
            o.Fragment,
            null,
            p.src &&
              Object(o.createElement)("img", {
                style: g,
                "data-testid": "product-image",
                ...p,
              }),
            !e && Object(o.createElement)(m, { style: g })
          );
        },
        O = (e) => {
          const {
              className: t,
              imageSizing: c = p.a.SINGLE,
              showProductLink: n = !0,
              showSaleBadge: s,
              saleBadgeAlign: u = "right",
              height: O,
              width: j,
              scale: h,
              ..._
            } = e,
            w = Object(i.a)(e),
            { parentClassName: E } = Object(l.useInnerBlockLayoutContext)(),
            { product: f, isLoading: k } = Object(l.useProductDataContext)(),
            { dispatchStoreEvent: v } = Object(d.a)();
          if (!f.id)
            return Object(o.createElement)(
              "div",
              {
                className: a()(
                  t,
                  "wc-block-components-product-image",
                  { [`${E}__product-image`]: E },
                  w.className
                ),
              },
              Object(o.createElement)(m, null)
            );
          const y = !!f.images.length,
            S = y ? f.images[0] : null,
            C = n ? "a" : o.Fragment,
            x = Object(r.sprintf)(
              /* translators: %s is referring to the product name */
              Object(r.__)("Link to %s", "woocommerce"),
              f.name
            ),
            N = {
              href: f.permalink,
              ...(!y && { "aria-label": x }),
              onClick: () => {
                v("product-view-link", { product: f });
              },
            };
          return Object(o.createElement)(
            "div",
            {
              className: a()(
                t,
                "wc-block-components-product-image",
                { [`${E}__product-image`]: E },
                w.className
              ),
            },
            Object(o.createElement)(
              C,
              { ...(n && N) },
              !!s && Object(o.createElement)(b.default, { align: u, ..._ }),
              Object(o.createElement)(g, {
                fallbackAlt: f.name,
                image: S,
                loaded: !k,
                showFullSize: c !== p.a.THUMBNAIL,
                width: j,
                height: O,
                scale: h,
              })
            )
          );
        };
      t.b = Object(u.withProductDataContext)(O);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, c) {
      "use strict";
      c.r(t),
        c.d(t, "Block", function () {
          return d;
        });
      var o = c(0),
        r = c(4),
        n = c.n(r),
        a = c(92),
        s = c(22),
        l = c(24),
        i = c(86),
        u = c(48);
      const d = (e) => {
        var t, c;
        const {
            className: r,
            textAlign: u,
            isDescendentOfSingleProductTemplate: d,
          } = e,
          b = Object(i.a)(e),
          { parentName: p, parentClassName: m } = Object(
            l.useInnerBlockLayoutContext
          )(),
          { product: g } = Object(l.useProductDataContext)(),
          O = "woocommerce/all-products" === p,
          j = n()("wc-block-components-product-price", r, b.className, {
            [`${m}__product-price`]: m,
          });
        if (!g.id && !d) {
          const e = Object(o.createElement)(a.a, { align: u, className: j });
          return O
            ? Object(o.createElement)(
                "div",
                { className: "wp-block-woocommerce-product-price" },
                e
              )
            : e;
        }
        const h = g.prices,
          _ = d
            ? Object(s.getCurrencyFromPriceResponse)()
            : Object(s.getCurrencyFromPriceResponse)(h),
          w = "5000",
          E = h.price !== h.regular_price,
          f = n()({
            [`${m}__product-price__value`]: m,
            [`${m}__product-price__value--on-sale`]: E,
          }),
          k = Object(o.createElement)(a.a, {
            align: u,
            className: j,
            style: b.style,
            regularPriceStyle: b.style,
            priceStyle: b.style,
            priceClassName: f,
            currency: _,
            price: d ? w : h.price,
            minPrice:
              null == h || null === (t = h.price_range) || void 0 === t
                ? void 0
                : t.min_amount,
            maxPrice:
              null == h || null === (c = h.price_range) || void 0 === c
                ? void 0
                : c.max_amount,
            regularPrice: d ? w : h.regular_price,
            regularPriceClassName: n()({ [`${m}__product-price__regular`]: m }),
          });
        return O
          ? Object(o.createElement)(
              "div",
              { className: "wp-block-woocommerce-product-price" },
              k
            )
          : k;
      };
      t.default = (e) =>
        e.isDescendentOfSingleProductTemplate
          ? Object(o.createElement)(d, { ...e })
          : Object(u.withProductDataContext)(d)(e);
    },
    function (e, t, c) {
      "use strict";
      c.r(t),
        c.d(t, "Block", function () {
          return g;
        });
      var o = c(0),
        r = c(1),
        n = c(4),
        a = c.n(n),
        s = c(24),
        l = c(86),
        i = c(48),
        u = c(84);
      c(279);
      const d = (e) => ({ width: (e / 5) * 100 + "%" }),
        b = ({ parentClassName: e }) => {
          const t = d(0);
          return Object(o.createElement)(
            "div",
            {
              className: a()(
                "wc-block-components-product-rating__norating-container",
                `${e}-product-rating__norating-container`
              ),
            },
            Object(o.createElement)(
              "div",
              {
                className: "wc-block-components-product-rating__norating",
                role: "img",
              },
              Object(o.createElement)("span", { style: t })
            ),
            Object(o.createElement)(
              "span",
              null,
              Object(r.__)("No Reviews", "woocommerce")
            )
          );
        },
        p = (e) => {
          const { rating: t, reviews: c, parentClassName: n } = e,
            s = d(t),
            l = Object(r.sprintf)(
              /* translators: %f is referring to the average rating value */
              Object(r.__)("Rated %f out of 5", "woocommerce"),
              t
            ),
            i = {
              __html: Object(r.sprintf)(
                /* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */
                Object(r._n)(
                  "Rated %1$s out of 5 based on %2$s customer rating",
                  "Rated %1$s out of 5 based on %2$s customer ratings",
                  c,
                  "woocommerce"
                ),
                Object(r.sprintf)('<strong class="rating">%f</strong>', t),
                Object(r.sprintf)('<span class="rating">%d</span>', c)
              ),
            };
          return Object(o.createElement)(
            "div",
            {
              className: a()(
                "wc-block-components-product-rating__stars",
                `${n}__product-rating__stars`
              ),
              role: "img",
              "aria-label": l,
            },
            Object(o.createElement)("span", {
              style: s,
              dangerouslySetInnerHTML: i,
            })
          );
        },
        m = (e) => {
          const { reviews: t } = e,
            c = Object(r.sprintf)(
              /* translators: %s is referring to the total of reviews for a product */
              Object(r._n)(
                "(%s customer review)",
                "(%s customer reviews)",
                t,
                "woocommerce"
              ),
              t
            );
          return Object(o.createElement)(
            "span",
            { className: "wc-block-components-product-rating__reviews_count" },
            c
          );
        },
        g = (e) => {
          const {
              textAlign: t,
              isDescendentOfSingleProductBlock: c,
              shouldDisplayMockedReviewsWhenProductHasNoReviews: r,
            } = e,
            n = Object(l.a)(e),
            { parentClassName: i } = Object(s.useInnerBlockLayoutContext)(),
            { product: d } = Object(s.useProductDataContext)(),
            g = ((e) => {
              const t = parseFloat(e.average_rating);
              return Number.isFinite(t) && t > 0 ? t : 0;
            })(d),
            O = ((e) => {
              const t = Object(u.a)(e.review_count)
                ? e.review_count
                : parseInt(e.review_count, 10);
              return Number.isFinite(t) && t > 0 ? t : 0;
            })(d),
            j = a()(n.className, "wc-block-components-product-rating", {
              [`${i}__product-rating`]: i,
              [`has-text-align-${t}`]: t,
            }),
            h = r ? Object(o.createElement)(b, { parentClassName: i }) : null,
            _ = O
              ? Object(o.createElement)(p, {
                  rating: g,
                  reviews: O,
                  parentClassName: i,
                })
              : h;
          if (O || r)
            return Object(o.createElement)(
              "div",
              { className: j, style: n.style },
              Object(o.createElement)(
                "div",
                { className: "wc-block-components-product-rating__container" },
                _,
                O && c ? Object(o.createElement)(m, { reviews: O }) : null
              )
            );
        };
      t.default = Object(i.withProductDataContext)(g);
    },
    function (e, t, c) {
      "use strict";
      c.r(t),
        c.d(t, "Block", function () {
          return j;
        });
      var o = c(0),
        r = c(4),
        n = c.n(r),
        a = c(1),
        s = c(97),
        l = c(287),
        i = c(86),
        u = c(10),
        d = c(17),
        b = c(3),
        p = c(24),
        m = c(48);
      c(280);
      const g = ({ product: e, className: t, style: c, textAlign: r }) => {
          const {
              id: i,
              permalink: p,
              add_to_cart: m,
              has_options: g,
              is_purchasable: O,
              is_in_stock: j,
            } = e,
            { dispatchStoreEvent: h } = Object(s.a)(),
            { cartQuantity: _, addingToCart: w, addToCart: E } = Object(l.a)(i),
            f = Number.isFinite(_) && _ > 0,
            k = !g && O && j,
            v = Object(u.decodeEntities)(
              (null == m ? void 0 : m.description) || ""
            ),
            y = f
              ? Object(a.sprintf)(
                  /* translators: %s number of products in cart. */
                  Object(a._n)("%d in cart", "%d in cart", _, "woocommerce"),
                  _
                )
              : Object(u.decodeEntities)(
                  (null == m ? void 0 : m.text) ||
                    Object(a.__)("Add to cart", "woocommerce")
                ),
            S = k ? "button" : "a",
            C = {};
          return (
            k
              ? (C.onClick = async () => {
                  await E(), h("cart-add-item", { product: e });
                  const { cartRedirectAfterAdd: t } = Object(b.getSetting)(
                    "productsSettings"
                  );
                  t && (window.location.href = d.d);
                })
              : ((C.href = p),
                (C.rel = "nofollow"),
                (C.onClick = () => {
                  h("product-view-link", { product: e });
                })),
            Object(o.createElement)(
              S,
              {
                ...C,
                "aria-label": v,
                disabled: w,
                className: n()(
                  t,
                  "wp-block-button__link",
                  "wp-element-button",
                  "add_to_cart_button",
                  "wc-block-components-product-button__button",
                  { loading: w, added: f },
                  { [`has-text-align-${r}`]: r }
                ),
                style: c,
              },
              y
            )
          );
        },
        O = ({ className: e, style: t }) =>
          Object(o.createElement)("button", {
            className: n()(
              "wp-block-button__link",
              "wp-element-button",
              "add_to_cart_button",
              "wc-block-components-product-button__button",
              "wc-block-components-product-button__button--placeholder",
              e
            ),
            style: t,
            disabled: !0,
          }),
        j = (e) => {
          const { className: t, textAlign: c } = e,
            r = Object(i.a)(e),
            { parentClassName: a } = Object(p.useInnerBlockLayoutContext)(),
            { product: s } = Object(p.useProductDataContext)();
          return Object(o.createElement)(
            "div",
            {
              className: n()(
                t,
                "wp-block-button",
                "wc-block-components-product-button",
                { [`${a}__product-add-to-cart`]: a },
                { [`has-text-align-${c}`]: c }
              ),
            },
            s.id
              ? Object(o.createElement)(g, {
                  product: s,
                  style: r.style,
                  className: r.className,
                })
              : Object(o.createElement)(O, {
                  style: r.style,
                  className: r.className,
                })
          );
        };
      t.default = Object(m.withProductDataContext)(j);
    },
    ,
    function (e) {
      e.exports = JSON.parse(
        '{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":1,"textdomain":"woocommerce","name":"woocommerce/all-products","title":"All Products","category":"woocommerce","keywords":["WooCommerce"],"description":"Display products from your store in a grid layout.","supports":{"align":["wide","full"],"html":false,"multiple":false},"attributes":{"columns":{"type":"number"},"rows":{"type":"number"},"alignButtons":{"type":"boolean"},"contentVisibility":{"type":"object"},"orderby":{"type":"string"},"layoutConfig":{"type":"array"},"isPreview":{"type":"boolean","default":false}}}'
      );
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return o;
      });
      const o = (e) =>
        null == e ||
        ("object" == typeof e && 0 === Object.keys(e).length) ||
        ("string" == typeof e && 0 === e.trim().length);
    },
    ,
    ,
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return s;
      });
      var o = c(84),
        r = c(7),
        n = c(6);
      const a = new Set(),
        s = ({
          blockName: e,
          blockMetadata: t,
          blockSettings: c,
          isVariationBlock: s = !1,
          variationName: l,
          isAvailableOnPostEditor: i,
        }) => {
          let u = "";
          Object(n.subscribe)(() => {
            var a;
            const i = u,
              d = Object(n.select)("core/edit-site");
            u = (function (e) {
              const t = Object(o.a)(e) ? void 0 : e;
              return null == t ? void 0 : t.split("//")[1];
            })(null == d ? void 0 : d.getEditedPostId());
            const b = i !== u,
              p = Boolean(u);
            if (!b || !p || !e) return;
            let m = Boolean(Object(r.getBlockType)(e));
            var g, O;
            m &&
              ((null !== (a = u) &&
                void 0 !== a &&
                a.includes("single-product")) ||
                (null != i && i.includes("single-product"))) &&
              (s && l
                ? Object(r.unregisterBlockVariation)(e, l)
                : Object(r.unregisterBlockType)(e),
              (m = !1)),
              m ||
                (s
                  ? Object(r.registerBlockVariation)(e, {
                      ...c,
                      ancestor:
                        (null !== (g = u) &&
                          void 0 !== g &&
                          g.includes("single-product")) ||
                        null == c
                          ? void 0
                          : c.ancestor,
                    })
                  : Object(r.registerBlockType)(t, {
                      ...c,
                      ancestor:
                        (null !== (O = u) &&
                          void 0 !== O &&
                          O.includes("single-product")) ||
                        null == c
                          ? void 0
                          : c.ancestor,
                    }));
          }, "core/edit-site"),
            Object(n.subscribe)(() => {
              !(Boolean(l) ? a.has(l) : a.has(e)) &&
                i &&
                (s
                  ? (a.add(l), Object(r.registerBlockVariation)(e, c))
                  : (a.add(e), Object(r.registerBlockType)(t, c)));
            }, "core/edit-post");
        };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t, c) {
      "use strict";
      c.d(t, "b", function () {
        return n;
      }),
        c.d(t, "a", function () {
          return a;
        });
      const o = window.CustomEvent || null,
        r = (
          e,
          { bubbles: t = !1, cancelable: c = !1, element: r, detail: n = {} }
        ) => {
          if (!o) return;
          r || (r = document.body);
          const a = new o(e, { bubbles: t, cancelable: c, detail: n });
          r.dispatchEvent(a);
        },
        n = ({ preserveCartData: e = !1 }) => {
          r("wc-blocks_added_to_cart", {
            bubbles: !0,
            cancelable: !0,
            detail: { preserveCartData: e },
          });
        },
        a = (e, t, c = !1, o = !1) => {
          if ("function" != typeof jQuery) return () => {};
          const n = () => {
            r(t, { bubbles: c, cancelable: o });
          };
          return jQuery(document).on(e, n), () => jQuery(document).off(e, n);
        };
    },
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return s;
      }),
        c.d(t, "b", function () {
          return l;
        }),
        c.d(t, "c", function () {
          return i;
        });
      var o = c(107),
        r = (c(15), c(3)),
        n = c(10),
        a = c(17);
      const s = (e) => {
          const t = Object.keys(r.defaultAddressFields),
            c = Object(o.a)(t, {}, e.country),
            n = Object.assign({}, e);
          return (
            c.forEach(({ key: t = "", hidden: c = !1 }) => {
              c && ((e, t) => e in t)(t, e) && (n[t] = "");
            }),
            n
          );
        },
        l = (e) => {
          if (0 === Object.values(e).length) return null;
          const t =
              "string" == typeof a.i[e.country]
                ? Object(n.decodeEntities)(a.i[e.country])
                : "",
            c =
              "object" == typeof a.j[e.country] &&
              "string" == typeof a.j[e.country][e.state]
                ? Object(n.decodeEntities)(a.j[e.country][e.state])
                : e.state,
            o = [];
          o.push(e.postcode.toUpperCase()),
            o.push(e.city),
            o.push(c),
            o.push(t);
          return o.filter(Boolean).join(", ") || null;
        },
        i = (e) => !!e.city && !!e.country;
    },
    function (e, t, c) {
      "use strict";
      c.d(t, "b", function () {
        return a;
      }),
        c.d(t, "a", function () {
          return s;
        });
      var o = c(51);
      const r = (e) => e.replace(/<\/?[a-z][^>]*?>/gi, ""),
        n = (e, t) => e.replace(/[\s|\.\,]+$/i, "") + t,
        a = (e, t, c = "&hellip;", a = !0) => {
          const s = r(e),
            l = s.split(" ").splice(0, t).join(" ");
          return l === s
            ? a
              ? Object(o.autop)(s)
              : s
            : a
            ? Object(o.autop)(n(l, c))
            : n(l, c);
        },
        s = (e, t, c = !0, a = "&hellip;", s = !0) => {
          const l = r(e),
            i = l.slice(0, t);
          if (i === l) return s ? Object(o.autop)(l) : l;
          if (c) return Object(o.autop)(n(i, a));
          const u = i.match(/([\s]+)/g),
            d = u ? u.length : 0,
            b = l.slice(0, t + d);
          return s ? Object(o.autop)(n(b, a)) : n(b, a);
        };
    },
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return r;
      });
      var o = c(111);
      const r =
        (e, t) =>
        (c, r = 10) => {
          const n = o.a.addEventCallback(e, c, r);
          return (
            t(n),
            () => {
              t(o.a.removeEventCallback(e, n.id));
            }
          );
        };
    },
    ,
    ,
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return i;
      });
      var o = c(0),
        r = c(6),
        n = c(8),
        a = c(10),
        s = c(59);
      const l = (e, t) => {
          const c = e.find(({ id: e }) => e === t);
          return c ? c.quantity : 0;
        },
        i = (e) => {
          const { addItemToCart: t } = Object(r.useDispatch)(n.CART_STORE_KEY),
            { cartItems: c, cartIsLoading: i } = Object(s.a)(),
            { createErrorNotice: u, removeNotice: d } = Object(r.useDispatch)(
              "core/notices"
            ),
            [b, p] = Object(o.useState)(!1),
            m = Object(o.useRef)(l(c, e));
          return (
            Object(o.useEffect)(() => {
              const t = l(c, e);
              t !== m.current && (m.current = t);
            }, [c, e]),
            {
              cartQuantity: Number.isFinite(m.current) ? m.current : 0,
              addingToCart: b,
              cartIsLoading: i,
              addToCart: (c = 1) => (
                p(!0),
                t(e, c)
                  .then(() => {
                    d("add-to-cart");
                  })
                  .catch((e) => {
                    u(Object(a.decodeEntities)(e.message), {
                      id: "add-to-cart",
                      context: "wc/all-products",
                      isDismissible: !0,
                    });
                  })
                  .finally(() => {
                    p(!1);
                  })
              ),
            }
          );
        };
    },
    function (e, t, c) {
      "use strict";
      var o = c(0),
        r = c(9);
      const n = Object(o.createElement)(
        r.SVG,
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
        Object(o.createElement)("path", { fill: "none", d: "M0 0h24v24H0V0z" }),
        Object(o.createElement)("path", {
          d: "M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z",
        })
      );
      t.a = n;
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e) {
      e.exports = JSON.parse(
        '{"name":"woocommerce/add-to-cart-form","version":"1.0.0","title":"Add to Cart with Options","description":"Display a button so the customer can add a product to their cart. Options will also be displayed depending on product type. e.g. quantity, variation.","attributes":{"isDescendentOfSingleProductBlock":{"type":"boolean","default":false}},"category":"woocommerce","keywords":["WooCommerce"],"usesContext":["postId"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"name":"woocommerce/product-image-gallery","version":"1.0.0","title":"Product Image Gallery","icon":"gallery","description":"Display a product\'s images.","category":"woocommerce","supports":{"align":true,"multiple":false},"keywords":["WooCommerce"],"usesContext":["postId","postType","queryId"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"name":"woocommerce/product-details","version":"1.0.0","icon":"info","title":"Product Details","description":"Display a product\'s description, attributes, and reviews.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"align":true,"spacing":{"margin":true}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"name":"woocommerce/product-reviews","version":"1.0.0","icon":"admin-comments","title":"Product Reviews","description":"A block that shows the reviews for a product.","category":"woocommerce","keywords":["WooCommerce"],"supports":{},"attributes":{},"usesContext":["postId"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}'
      );
    },
    function (e, t, c) {
      "use strict";
      var o = c(0),
        r = c(9);
      const n = Object(o.createElement)(
        r.SVG,
        { xmlns: "http://www.w3.org/2000/SVG", viewBox: "0 0 24 24" },
        Object(o.createElement)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M4.5 19.375L4.5 7.625C4.5 7.55596 4.55596 7.5 4.625 7.5L16.375 7.5C16.444 7.5 16.5 7.55596 16.5 7.625L16.5 19.375C16.5 19.444 16.444 19.5 16.375 19.5L4.625 19.5C4.55596 19.5 4.5 19.444 4.5 19.375ZM4.625 21C3.72754 21 3 20.2725 3 19.375L3 7.625C3 6.72754 3.72754 6 4.625 6L16.375 6C17.2725 6 18 6.72754 18 7.625L18 19.375C18 20.2725 17.2725 21 16.375 21L4.625 21ZM19 3.75L8 3.75L8 2.25L19 2.25C20.5183 2.25 21.75 3.4796 21.75 4.99891L21.75 18L20.25 18L20.25 4.99891C20.25 4.30909 19.6909 3.75 19 3.75Z",
        })
      );
      t.a = n;
    },
    function (e) {
      e.exports = JSON.parse(
        '{"name":"woocommerce/related-products","version":"1.0.0","title":"Related Products","icon":"product","description":"Display related products.","category":"woocommerce","supports":{"align":true,"reusable":false},"keywords":["WooCommerce"],"usesContext":["postId","postType","queryId"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"name":"woocommerce/product-meta","version":"1.0.0","title":"Product Meta","icon":"product","description":"Display a product’s SKU, categories, tags, and more.","category":"woocommerce","supports":{"align":true,"reusable":false},"keywords":["WooCommerce"],"usesContext":["postId","postType","queryId"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}'
      );
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t) {},
    function (e, t, c) {
      "use strict";
      var o = c(83);
      let r = {
        headingLevel: { type: "number", default: 2 },
        showProductLink: { type: "boolean", default: !0 },
        linkTarget: { type: "string" },
        productId: { type: "number", default: 0 },
      };
      Object(o.b)() && (r = { ...r, align: { type: "string" } }), (t.a = r);
    },
    function (e, t, c) {
      "use strict";
      const o = {
        showProductLink: { type: "boolean", default: !0 },
        showSaleBadge: { type: "boolean", default: !0 },
        saleBadgeAlign: { type: "string", default: "right" },
        imageSizing: { type: "string", default: c(60).a.SINGLE },
        productId: { type: "number", default: 0 },
        isDescendentOfQueryLoop: { type: "boolean", default: !1 },
        isDescendentOfSingleProductBlock: { type: "boolean", default: !1 },
        width: { type: "string" },
        height: { type: "string" },
        scale: { type: "string", default: "cover" },
      };
      t.a = o;
    },
    function (e, t, c) {
      "use strict";
      t.a = {
        showFormElements: { type: "boolean", default: !1 },
        productId: { type: "number", default: 0 },
      };
    },
    function (e, t, c) {
      "use strict";
      var o = c(0),
        r = c(4),
        n = c.n(r),
        a = c(1),
        s = c(47),
        l = c(602),
        i = c(6),
        u = c(8);
      const d = {
          PRISTINE: "pristine",
          IDLE: "idle",
          DISABLED: "disabled",
          PROCESSING: "processing",
          BEFORE_PROCESSING: "before_processing",
          AFTER_PROCESSING: "after_processing",
        },
        b = {
          status: d.PRISTINE,
          hasError: !1,
          quantity: 0,
          processingResponse: null,
          requestParams: {},
        },
        p = {
          SET_PRISTINE: "set_pristine",
          SET_IDLE: "set_idle",
          SET_DISABLED: "set_disabled",
          SET_PROCESSING: "set_processing",
          SET_BEFORE_PROCESSING: "set_before_processing",
          SET_AFTER_PROCESSING: "set_after_processing",
          SET_PROCESSING_RESPONSE: "set_processing_response",
          SET_HAS_ERROR: "set_has_error",
          SET_NO_ERROR: "set_no_error",
          SET_QUANTITY: "set_quantity",
          SET_REQUEST_PARAMS: "set_request_params",
        },
        {
          SET_PRISTINE: m,
          SET_IDLE: g,
          SET_DISABLED: O,
          SET_PROCESSING: j,
          SET_BEFORE_PROCESSING: h,
          SET_AFTER_PROCESSING: _,
          SET_PROCESSING_RESPONSE: w,
          SET_HAS_ERROR: E,
          SET_NO_ERROR: f,
          SET_QUANTITY: k,
          SET_REQUEST_PARAMS: v,
        } = p,
        y = () => ({ type: g }),
        S = (e = !0) => ({ type: e ? E : f }),
        {
          SET_PRISTINE: C,
          SET_IDLE: x,
          SET_DISABLED: N,
          SET_PROCESSING: P,
          SET_BEFORE_PROCESSING: T,
          SET_AFTER_PROCESSING: I,
          SET_PROCESSING_RESPONSE: A,
          SET_HAS_ERROR: B,
          SET_NO_ERROR: R,
          SET_QUANTITY: D,
          SET_REQUEST_PARAMS: L,
        } = p,
        {
          PRISTINE: F,
          IDLE: V,
          DISABLED: M,
          PROCESSING: $,
          BEFORE_PROCESSING: H,
          AFTER_PROCESSING: z,
        } = d,
        q = (e = b, { quantity: t, type: c, data: o }) => {
          let r;
          switch (c) {
            case C:
              r = b;
              break;
            case x:
              r = e.status !== V ? { ...e, status: V } : e;
              break;
            case N:
              r = e.status !== M ? { ...e, status: M } : e;
              break;
            case D:
              r = t !== e.quantity ? { ...e, quantity: t } : e;
              break;
            case L:
              r = { ...e, requestParams: { ...e.requestParams, ...o } };
              break;
            case A:
              r = { ...e, processingResponse: o };
              break;
            case P:
              (r = e.status !== $ ? { ...e, status: $, hasError: !1 } : e),
                (r = !1 === r.hasError ? r : { ...r, hasError: !1 });
              break;
            case T:
              r = e.status !== H ? { ...e, status: H, hasError: !1 } : e;
              break;
            case I:
              r = e.status !== z ? { ...e, status: z } : e;
              break;
            case B:
              (r = e.hasError ? e : { ...e, hasError: !0 }),
                (r =
                  e.status === $ || e.status === H ? { ...r, status: V } : r);
              break;
            case R:
              r = e.hasError ? { ...e, hasError: !1 } : e;
          }
          return r !== e && c !== C && r.status === F && (r.status = V), r;
        };
      var G = c(111),
        Q = c(284);
      const W = "add_to_cart_before_processing",
        Y = "add_to_cart_after_processing_with_success",
        U = "add_to_cart_after_processing_with_error",
        K = (e) => ({
          onAddToCartAfterProcessingWithSuccess: Object(Q.a)(Y, e),
          onAddToCartProcessingWithError: Object(Q.a)(U, e),
          onAddToCartBeforeProcessing: Object(Q.a)(W, e),
        });
      var J = c(356),
        Z = c(68);
      const X = Object(o.createContext)({
          product: {},
          productType: "simple",
          productIsPurchasable: !0,
          productHasOptions: !1,
          supportsFormElements: !0,
          showFormElements: !1,
          quantity: 0,
          minQuantity: 1,
          maxQuantity: 99,
          requestParams: {},
          isIdle: !1,
          isDisabled: !1,
          isProcessing: !1,
          isBeforeProcessing: !1,
          isAfterProcessing: !1,
          hasError: !1,
          eventRegistration: {
            onAddToCartAfterProcessingWithSuccess: (e) => {},
            onAddToCartAfterProcessingWithError: (e) => {},
            onAddToCartBeforeProcessing: (e) => {},
          },
          dispatchActions: {
            resetForm: () => {},
            submitForm: () => {},
            setQuantity: (e) => {},
            setHasError: (e) => {},
            setAfterProcessing: (e) => {},
            setRequestParams: (e) => {},
          },
        }),
        ee = () => Object(o.useContext)(X),
        te = ({ children: e, product: t, showFormElements: c }) => {
          var r, n, p, g;
          const [E, f] = Object(o.useReducer)(q, b),
            [C, x] = Object(o.useReducer)(G.b, {}),
            N = Object(s.a)(C),
            { createErrorNotice: P } = Object(i.useDispatch)("core/notices"),
            { setValidationErrors: T } = Object(i.useDispatch)(
              u.VALIDATION_STORE_KEY
            ),
            I = Object(o.useMemo)(
              () => ({
                onAddToCartAfterProcessingWithSuccess:
                  K(x).onAddToCartAfterProcessingWithSuccess,
                onAddToCartAfterProcessingWithError:
                  K(x).onAddToCartAfterProcessingWithError,
                onAddToCartBeforeProcessing: K(x).onAddToCartBeforeProcessing,
              }),
              [x]
            ),
            A = Object(o.useMemo)(
              () => ({
                resetForm: () => {
                  f({ type: m });
                },
                submitForm: () => {
                  f({ type: h });
                },
                setQuantity: (e) => {
                  f(((e) => ({ type: k, quantity: e }))(e));
                },
                setHasError: (e) => {
                  f(S(e));
                },
                setRequestParams: (e) => {
                  f(((e) => ({ type: v, data: e }))(e));
                },
                setAfterProcessing: (e) => {
                  f({ type: w, data: e }), f({ type: _ });
                },
              }),
              []
            );
          Object(o.useEffect)(() => {
            const e = E.status,
              c = !t.id || !Object(l.a)(t);
            e !== d.DISABLED || c
              ? e !== d.DISABLED && c && f({ type: O })
              : f(y());
          }, [E.status, t, f]),
            Object(o.useEffect)(() => {
              E.status === d.BEFORE_PROCESSING &&
                (((e, t) => {
                  const c = Object(i.select)("core/notices").getNotices(t),
                    { removeNotice: o } = Object(i.dispatch)("core/notices");
                  c.filter((e) => "error" === e.status).forEach((e) =>
                    o(e.id, t)
                  );
                })(0, "wc/add-to-cart"),
                Object(J.a)(N, W, {}).then((e) => {
                  !0 !== e
                    ? (Array.isArray(e) &&
                        e.forEach(
                          ({ errorMessage: e, validationErrors: t }) => {
                            e && P(e, { context: "wc/add-to-cart" }), t && T(t);
                          }
                        ),
                      f(y()))
                    : f({ type: j });
                }));
            }, [E.status, T, P, f, N, null == t ? void 0 : t.id]),
            Object(o.useEffect)(() => {
              if (E.status === d.AFTER_PROCESSING) {
                const e = { processingResponse: E.processingResponse },
                  c = (e) => {
                    let t = !1;
                    return (
                      e.forEach((e) => {
                        const { message: c, messageContext: o } = e;
                        (Object(Z.b)(e) || Object(Z.c)(e)) &&
                          c &&
                          ((t = !0), P(c, o ? { context: o } : void 0));
                      }),
                      t
                    );
                  };
                if (E.hasError)
                  return void Object(J.b)(N, U, e).then((o) => {
                    if (!c(o)) {
                      var r;
                      const c =
                        (null === (r = e.processingResponse) || void 0 === r
                          ? void 0
                          : r.message) ||
                        Object(a.__)(
                          "Something went wrong. Please contact us for assistance.",
                          "woocommerce"
                        );
                      P(c, {
                        id: "add-to-cart",
                        context: `woocommerce/single-product/${
                          (null == t ? void 0 : t.id) || 0
                        }`,
                      });
                    }
                    f(y());
                  });
                Object(J.b)(N, Y, e).then((e) => {
                  c(e) ? f(S(!0)) : f(y());
                });
              }
            }, [
              E.status,
              E.hasError,
              E.processingResponse,
              A,
              P,
              N,
              null == t ? void 0 : t.id,
            ]);
          const B = Object(l.b)(t),
            R = {
              product: t,
              productType: t.type || "simple",
              productIsPurchasable: Object(l.a)(t),
              productHasOptions: t.has_options || !1,
              supportsFormElements: B,
              showFormElements: c && B,
              quantity:
                E.quantity ||
                (null == t || null === (r = t.add_to_cart) || void 0 === r
                  ? void 0
                  : r.minimum) ||
                1,
              minQuantity:
                (null == t || null === (n = t.add_to_cart) || void 0 === n
                  ? void 0
                  : n.minimum) || 1,
              maxQuantity:
                (null == t || null === (p = t.add_to_cart) || void 0 === p
                  ? void 0
                  : p.maximum) || 99,
              multipleOf:
                (null == t || null === (g = t.add_to_cart) || void 0 === g
                  ? void 0
                  : g.multiple_of) || 1,
              requestParams: E.requestParams,
              isIdle: E.status === d.IDLE,
              isDisabled: E.status === d.DISABLED,
              isProcessing: E.status === d.PROCESSING,
              isBeforeProcessing: E.status === d.BEFORE_PROCESSING,
              isAfterProcessing: E.status === d.AFTER_PROCESSING,
              hasError: E.hasError,
              eventRegistration: I,
              dispatchActions: A,
            };
          return Object(o.createElement)(X.Provider, { value: R }, e);
        };
      var ce = c(14),
        oe = c.n(ce),
        re = c(10),
        ne = c(281),
        ae = c(59),
        se = () => {
          const {
              dispatchActions: e,
              product: t,
              quantity: c,
              eventRegistration: r,
              hasError: n,
              isProcessing: s,
              requestParams: l,
            } = ee(),
            { showAllValidationErrors: d } = Object(i.useDispatch)(
              u.VALIDATION_STORE_KEY
            ),
            b = Object(i.useSelect)(
              (e) => e(u.VALIDATION_STORE_KEY).hasValidationErrors
            ),
            { createErrorNotice: p, removeNotice: m } = Object(i.useDispatch)(
              "core/notices"
            ),
            { receiveCart: g } = Object(ae.a)(),
            [O, j] = Object(o.useState)(!1),
            h = !n && s,
            _ = Object(o.useCallback)(
              () => !b() || (d(), { type: "error" }),
              [b, d]
            );
          Object(o.useEffect)(() => {
            const e = r.onAddToCartBeforeProcessing(_, 0);
            return () => {
              e();
            };
          }, [r, _]);
          const w = Object(o.useCallback)(() => {
            j(!0),
              m(
                "add-to-cart",
                `woocommerce/single-product/${(null == t ? void 0 : t.id) || 0}`
              );
            const o = { id: t.id || 0, quantity: c, ...l };
            oe()({
              path: "/wc/store/v1/cart/add-item",
              method: "POST",
              data: o,
              cache: "no-store",
              parse: !1,
            })
              .then((c) => {
                oe.a.setNonce(c.headers),
                  c.json().then(function (o) {
                    c.ok
                      ? g(o)
                      : (o.body && o.body.message
                          ? p(Object(re.decodeEntities)(o.body.message), {
                              id: "add-to-cart",
                              context: `woocommerce/single-product/${
                                (null == t ? void 0 : t.id) || 0
                              }`,
                            })
                          : p(
                              Object(a.__)(
                                "Something went wrong. Please contact us for assistance.",
                                "woocommerce"
                              ),
                              {
                                id: "add-to-cart",
                                context: `woocommerce/single-product/${
                                  (null == t ? void 0 : t.id) || 0
                                }`,
                              }
                            ),
                        e.setHasError()),
                      Object(ne.b)({ preserveCartData: !0 }),
                      e.setAfterProcessing(o),
                      j(!1);
                  });
              })
              .catch((t) => {
                t.json().then(function (t) {
                  var c;
                  null !== (c = t.data) &&
                    void 0 !== c &&
                    c.cart &&
                    g(t.data.cart),
                    e.setHasError(),
                    e.setAfterProcessing(t),
                    j(!1);
                });
              });
          }, [t, p, m, g, e, c, l]);
          return (
            Object(o.useEffect)(() => {
              h && !O && w();
            }, [h, w, O]),
            null
          );
        };
      const le = ({ children: e, product: t, showFormElements: c }) =>
        Object(o.createElement)(
          te,
          { product: t, showFormElements: c },
          e,
          Object(o.createElement)(se, null)
        );
      var ie = c(24),
        ue = c(260),
        de = c(48),
        be = (c(351), c(71)),
        pe = c(70),
        me = c(623),
        ge = c(97),
        Oe = c(287);
      const je = ({ className: e, href: t, text: c, onClick: r }) =>
          Object(o.createElement)(
            be.a,
            { className: e, href: t, onClick: r, rel: "nofollow" },
            c
          ),
        he = ({
          className: e,
          quantityInCart: t,
          isProcessing: c,
          isDisabled: r,
          isDone: n,
          onClick: s,
        }) =>
          Object(o.createElement)(
            be.a,
            { className: e, disabled: r, showSpinner: c, onClick: s },
            n && t > 0
              ? Object(a.sprintf)(
                  /* translators: %s number of products in cart. */
                  Object(a._n)("%d in cart", "%d in cart", t, "woocommerce"),
                  t
                )
              : Object(a.__)("Add to cart", "woocommerce"),
            !!n && Object(o.createElement)(pe.a, { icon: me.a })
          );
      var _e = () => {
          const {
              showFormElements: e,
              productIsPurchasable: t,
              productHasOptions: c,
              product: r,
              productType: n,
              isDisabled: s,
              isProcessing: l,
              eventRegistration: i,
              hasError: u,
              dispatchActions: d,
            } = ee(),
            { parentName: b } = Object(ie.useInnerBlockLayoutContext)(),
            { dispatchStoreEvent: p } = Object(ge.a)(),
            { cartQuantity: m } = Object(Oe.a)(r.id || 0),
            [g, O] = Object(o.useState)(!1),
            j = r.add_to_cart || { url: "", text: "" };
          return (
            Object(o.useEffect)(() => {
              const e = i.onAddToCartAfterProcessingWithSuccess(
                () => (u || O(!0), !0),
                0
              );
              return () => {
                e();
              };
            }, [i, u]),
            (e || (!c && "simple" === n)) && t
              ? Object(o.createElement)(he, {
                  className: "wc-block-components-product-add-to-cart-button",
                  quantityInCart: m,
                  isDisabled: s,
                  isProcessing: l,
                  isDone: g,
                  onClick: () => {
                    d.submitForm(
                      `woocommerce/single-product/${
                        (null == r ? void 0 : r.id) || 0
                      }`
                    ),
                      p("cart-add-item", { product: r, listName: b });
                  },
                })
              : Object(o.createElement)(je, {
                  className: "wc-block-components-product-add-to-cart-button",
                  href: j.url,
                  text: j.text || Object(a.__)("View Product", "woocommerce"),
                  onClick: () => {
                    p("product-view-link", { product: r, listName: b });
                  },
                })
          );
        },
        we = c(41),
        Ee = ({
          disabled: e,
          min: t,
          max: c,
          step: r = 1,
          value: n,
          onChange: a,
        }) => {
          const s = void 0 !== c,
            l = Object(we.b)((e) => {
              let o = e;
              s && (o = Math.min(o, Math.floor(c / r) * r)),
                (o = Math.max(o, Math.ceil(t / r) * r)),
                (o = Math.floor(o / r) * r),
                o !== e && (null == a || a(o));
            }, 300);
          return Object(o.createElement)("input", {
            className: "wc-block-components-product-add-to-cart-quantity",
            type: "number",
            value: n,
            min: t,
            max: c,
            step: r,
            hidden: 1 === c,
            disabled: e,
            onChange: (e) => {
              null == a || a(e.target.value), l(Number(e.target.value));
            },
          });
        },
        fe = ({
          reason: e = Object(a.__)(
            "Sorry, this product cannot be purchased.",
            "woocommerce"
          ),
        }) =>
          Object(o.createElement)(
            "div",
            {
              className: "wc-block-components-product-add-to-cart-unavailable",
            },
            e
          ),
        ke = () => {
          const {
            product: e,
            quantity: t,
            minQuantity: c,
            maxQuantity: r,
            multipleOf: n,
            dispatchActions: s,
            isDisabled: l,
          } = ee();
          return e.id && !e.is_purchasable
            ? Object(o.createElement)(fe, null)
            : e.id && !e.is_in_stock
            ? Object(o.createElement)(fe, {
                reason: Object(a.__)(
                  "This product is currently out of stock and cannot be purchased.",
                  "woocommerce"
                ),
              })
            : Object(o.createElement)(
                o.Fragment,
                null,
                Object(o.createElement)(Ee, {
                  value: t,
                  min: c,
                  max: r,
                  step: n,
                  disabled: l,
                  onChange: s.setQuantity,
                }),
                Object(o.createElement)(_e, null)
              );
        },
        ve = (c(398), c(653)),
        ye = c(13);
      const Se = {
        value: "",
        label: Object(a.__)("Select an option", "woocommerce"),
      };
      var Ce = ({
          attributeName: e,
          options: t = [],
          value: c = "",
          onChange: r = () => {},
          errorMessage: s = Object(a.__)(
            "Please select a value.",
            "woocommerce"
          ),
        }) => {
          const l = e,
            { setValidationErrors: d, clearValidationError: b } = Object(
              i.useDispatch
            )(u.VALIDATION_STORE_KEY),
            { error: p } = Object(i.useSelect)((e) => ({
              error: e(u.VALIDATION_STORE_KEY).getValidationError(l) || {},
            }));
          return (
            Object(o.useEffect)(() => {
              c ? b(l) : d({ [l]: { message: s, hidden: !0 } });
            }, [c, l, s, b, d]),
            Object(o.useEffect)(
              () => () => {
                b(l);
              },
              [l, b]
            ),
            Object(o.createElement)(
              "div",
              {
                className:
                  "wc-block-components-product-add-to-cart-attribute-picker__container",
              },
              Object(o.createElement)(ve.a, {
                label: Object(re.decodeEntities)(e),
                value: c || "",
                options: [Se, ...t],
                onChange: r,
                required: !0,
                className: n()(
                  "wc-block-components-product-add-to-cart-attribute-picker__select",
                  {
                    "has-error":
                      (null == p ? void 0 : p.message) &&
                      !(null != p && p.hidden),
                  }
                ),
              }),
              Object(o.createElement)(ye.ValidationInputError, {
                propertyName: l,
                elementId: l,
              })
            )
          );
        },
        xe = c(21),
        Ne = c(57);
      const Pe = (e, t, c) => {
        const o = Object.values(t).map(({ id: e }) => e);
        if (Object.values(c).every((e) => "" === e)) return o;
        const r = Object.keys(e);
        return o.filter((e) =>
          r.every((o) => {
            const r = c[o] || "",
              n = t["id:" + e].attributes[o];
            return "" === r || null === n || n === r;
          })
        );
      };
      var Te = ({
          attributes: e,
          variationAttributes: t,
          setRequestParams: c,
        }) => {
          const r = Object(s.a)(e),
            n = Object(s.a)(t),
            [a, l] = Object(o.useState)(0),
            [i, u] = Object(o.useState)({}),
            [d, b] = Object(o.useState)(!1),
            p = Object(o.useMemo)(
              () =>
                ((e, t, c) => {
                  const o = {},
                    r = Object.keys(e),
                    n = Object.values(c).filter(Boolean).length > 0;
                  return (
                    r.forEach((r) => {
                      const a = e[r],
                        s = { ...c, [r]: null },
                        l = n ? Pe(e, t, s) : null,
                        i =
                          null !== l
                            ? l.map((e) => t["id:" + e].attributes[r])
                            : null;
                      o[r] = ((e, t = null) =>
                        Object.values(e)
                          .map(({ name: e, slug: c }) =>
                            null === t || t.includes(null) || t.includes(c)
                              ? {
                                  value: c,
                                  label: Object(re.decodeEntities)(e),
                                }
                              : null
                          )
                          .filter(Boolean))(a.terms, i);
                    }),
                    o
                  );
                })(r, n, i),
              [i, r, n]
            );
          return (
            Object(o.useEffect)(() => {
              if (!d) {
                const t = ((e) =>
                  Object(xe.b)(e)
                    ? 0 === Object.keys(e).length
                      ? {}
                      : Object.values(e).reduce((e, t) => {
                          const c = t.terms.filter((e) => e.default);
                          var o;
                          return (
                            c.length > 0 &&
                              (e[t.name] =
                                null === (o = c[0]) || void 0 === o
                                  ? void 0
                                  : o.slug),
                            e
                          );
                        }, {})
                    : {})(e);
                t && u({ ...t }), b(!0);
              }
            }, [i, e, d]),
            Object(o.useEffect)(() => {
              Object.values(i).filter((e) => "" !== e).length ===
              Object.keys(r).length
                ? l(((e, t, c) => Pe(e, t, c)[0] || 0)(r, n, i))
                : a > 0 && l(0);
            }, [i, a, r, n]),
            Object(o.useEffect)(() => {
              c({
                id: a,
                variation: Object.keys(i).map((e) => ({
                  attribute: e,
                  value: i[e],
                })),
              });
            }, [c, a, i]),
            Object(o.createElement)(
              "div",
              {
                className:
                  "wc-block-components-product-add-to-cart-attribute-picker",
              },
              Object.keys(r).map((e) =>
                Object(o.createElement)(Ce, {
                  key: e,
                  attributeName: e,
                  options: p[e].filter(Boolean),
                  value: i[e],
                  onChange: (t) => {
                    u({ ...i, [e]: t });
                  },
                })
              )
            )
          );
        },
        Ie = ({ dispatchers: e, product: t }) => {
          const c = ((e) =>
              e
                ? Object(Ne.a)(
                    Object.values(e).filter(({ has_variations: e }) => e),
                    "name"
                  )
                : {})(t.attributes),
            r = ((e) => {
              if (!e) return {};
              const t = {};
              return (
                e.forEach(({ id: e, attributes: c }) => {
                  t[`id:${e}`] = {
                    id: e,
                    attributes: c.reduce(
                      (e, { name: t, value: c }) => ((e[t] = c), e),
                      {}
                    ),
                  };
                }),
                t
              );
            })(t.variations);
          return 0 === Object.keys(c).length || 0 === Object.keys(r).length
            ? null
            : Object(o.createElement)(Te, {
                attributes: c,
                variationAttributes: r,
                setRequestParams: e.setRequestParams,
              });
        },
        Ae = () => {
          const {
            product: e,
            quantity: t,
            minQuantity: c,
            maxQuantity: r,
            multipleOf: n,
            dispatchActions: s,
            isDisabled: l,
          } = ee();
          return e.id && !e.is_purchasable
            ? Object(o.createElement)(fe, null)
            : e.id && !e.is_in_stock
            ? Object(o.createElement)(fe, {
                reason: Object(a.__)(
                  "This product is currently out of stock and cannot be purchased.",
                  "woocommerce"
                ),
              })
            : Object(o.createElement)(
                o.Fragment,
                null,
                Object(o.createElement)(Ie, { product: e, dispatchers: s }),
                Object(o.createElement)(Ee, {
                  value: t,
                  min: c,
                  max: r,
                  step: n,
                  disabled: l,
                  onChange: s.setQuantity,
                }),
                Object(o.createElement)(_e, null)
              );
        },
        Be = () => Object(o.createElement)(_e, null),
        Re = () =>
          Object(o.createElement)(
            "p",
            null,
            "This is a placeholder for the grouped products form element."
          );
      const De = () => {
        const { showFormElements: e, productType: t } = ee();
        return e
          ? "variable" === t
            ? Object(o.createElement)(Ae, null)
            : "grouped" === t
            ? Object(o.createElement)(Re, null)
            : "external" === t
            ? Object(o.createElement)(Be, null)
            : "simple" === t || "variation" === t
            ? Object(o.createElement)(ke, null)
            : null
          : Object(o.createElement)(_e, null);
      };
      t.a = Object(de.withProductDataContext)(
        ({ className: e, showFormElements: t }) => {
          const { product: c } = Object(ie.useProductDataContext)(),
            r = n()(e, "wc-block-components-product-add-to-cart", {
              "wc-block-components-product-add-to-cart--placeholder": Object(
                ue.a
              )(c),
            });
          return Object(o.createElement)(
            le,
            { product: c, showFormElements: t },
            Object(o.createElement)(
              "div",
              { className: r },
              Object(o.createElement)(De, null)
            )
          );
        }
      );
    },
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return a;
      }),
        c.d(t, "b", function () {
          return s;
        });
      var o = c(68),
        r = c(21);
      const n = (e) => Object(r.b)(e) && Object(r.c)(e, "type"),
        a = async (e, t, c) => {
          const r = Object(o.a)(e, t),
            n = [];
          for (const e of r)
            try {
              const t = await Promise.resolve(e.callback(c));
              "object" == typeof t && n.push(t);
            } catch (e) {
              console.error(e);
            }
          return !n.length || n;
        },
        s = async (e, t, c) => {
          const r = [],
            a = Object(o.a)(e, t);
          for (const e of a)
            try {
              const t = await Promise.resolve(e.callback(c));
              if (!n(t)) continue;
              if (!t.hasOwnProperty("type"))
                throw new Error(
                  "Returned objects from event emitter observers must return an object with a type property"
                );
              if (Object(o.b)(t) || Object(o.c)(t)) return r.push(t), r;
              r.push(t);
            } catch (e) {
              return console.error(e), r.push({ type: o.e.ERROR }), r;
            }
          return r;
        };
    },
    ,
    ,
    ,
    ,
    function (e, t, c) {
      "use strict";
      c.r(t),
        c.d(t, "Block", function () {
          return m;
        });
      var o = c(0),
        r = c(1),
        n = c(4),
        a = c.n(n),
        s = c(24),
        l = c(86),
        i = c(48),
        u = c(84);
      c(394);
      const d = (e) => ({ width: (e / 5) * 100 + "%" }),
        b = ({ parentClassName: e }) => {
          const t = d(0);
          return Object(o.createElement)(
            "div",
            {
              className: a()(
                "wc-block-components-product-rating-stars__norating-container",
                `${e}-product-rating-stars__norating-container`
              ),
            },
            Object(o.createElement)(
              "div",
              {
                className: "wc-block-components-product-rating-stars__norating",
                role: "img",
              },
              Object(o.createElement)("span", { style: t })
            ),
            Object(o.createElement)(
              "span",
              null,
              Object(r.__)("No Reviews", "woocommerce")
            )
          );
        },
        p = (e) => {
          const { rating: t, reviews: c, parentClassName: n } = e,
            s = d(t),
            l = Object(r.sprintf)(
              /* translators: %f is referring to the average rating value */
              Object(r.__)("Rated %f out of 5", "woocommerce"),
              t
            ),
            i = {
              __html: Object(r.sprintf)(
                /* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */
                Object(r._n)(
                  "Rated %1$s out of 5 based on %2$s customer rating",
                  "Rated %1$s out of 5 based on %2$s customer ratings",
                  c,
                  "woocommerce"
                ),
                Object(r.sprintf)('<strong class="rating">%f</strong>', t),
                Object(r.sprintf)('<span class="rating">%d</span>', c)
              ),
            };
          return Object(o.createElement)(
            "div",
            {
              className: a()(
                "wc-block-components-product-rating-stars__stars",
                `${n}__product-rating-stars__stars`
              ),
              role: "img",
              "aria-label": l,
            },
            Object(o.createElement)("span", {
              style: s,
              dangerouslySetInnerHTML: i,
            })
          );
        },
        m = (e) => {
          const {
              textAlign: t,
              shouldDisplayMockedReviewsWhenProductHasNoReviews: c,
            } = e,
            r = Object(l.a)(e),
            { parentClassName: n } = Object(s.useInnerBlockLayoutContext)(),
            { product: i } = Object(s.useProductDataContext)(),
            d = ((e) => {
              const t = parseFloat(e.average_rating);
              return Number.isFinite(t) && t > 0 ? t : 0;
            })(i),
            m = ((e) => {
              const t = Object(u.a)(e.review_count)
                ? e.review_count
                : parseInt(e.review_count, 10);
              return Number.isFinite(t) && t > 0 ? t : 0;
            })(i),
            g = a()(r.className, "wc-block-components-product-rating-stars", {
              [`${n}__product-rating`]: n,
              [`has-text-align-${t}`]: t,
            }),
            O = c ? Object(o.createElement)(b, { parentClassName: n }) : null,
            j = m
              ? Object(o.createElement)(p, {
                  rating: d,
                  reviews: m,
                  parentClassName: n,
                })
              : O;
          return Object(o.createElement)(
            "div",
            { className: g, style: r.style },
            Object(o.createElement)(
              "div",
              {
                className:
                  "wc-block-components-product-rating-stars__container",
              },
              j
            )
          );
        };
      t.default = Object(i.withProductDataContext)(m);
    },
    function (e, t, c) {
      "use strict";
      c.r(t),
        c.d(t, "Block", function () {
          return p;
        });
      var o = c(0),
        r = c(1),
        n = c(4),
        a = c.n(n),
        s = c(24),
        l = c(86),
        i = c(48),
        u = c(84),
        d = c(2);
      const b = (e) => {
          const { reviews: t } = e,
            c = t
              ? Object(r.sprintf)(
                  /* translators: %s is referring to the total of reviews for a product */
                  Object(r._n)(
                    "(%s customer review)",
                    "(%s customer reviews)",
                    t,
                    "woocommerce"
                  ),
                  t
                )
              : Object(r.__)("(X customer reviews)", "woocommerce");
          return Object(o.createElement)(
            "span",
            {
              className:
                "wc-block-components-product-rating-counter__reviews_count",
            },
            Object(o.createElement)(
              d.Disabled,
              null,
              Object(o.createElement)("a", { href: "/" }, c)
            )
          );
        },
        p = (e) => {
          const {
              textAlign: t,
              shouldDisplayMockedReviewsWhenProductHasNoReviews: c,
            } = e,
            r = Object(l.a)(e),
            { parentClassName: n } = Object(s.useInnerBlockLayoutContext)(),
            { product: i } = Object(s.useProductDataContext)(),
            d = ((e) => {
              const t = Object(u.a)(e.review_count)
                ? e.review_count
                : parseInt(e.review_count, 10);
              return Number.isFinite(t) && t > 0 ? t : 0;
            })(i),
            p = a()(r.className, "wc-block-components-product-rating-counter", {
              [`${n}__product-rating`]: n,
              [`has-text-align-${t}`]: t,
            });
          if (d || c)
            return Object(o.createElement)(
              "div",
              { className: p, style: r.style },
              Object(o.createElement)(
                "div",
                {
                  className:
                    "wc-block-components-product-rating-counter__container",
                },
                Object(o.createElement)(b, { reviews: d })
              )
            );
        };
      t.default = Object(i.withProductDataContext)(p);
    },
    function (e, t, c) {
      "use strict";
      c.r(t),
        c.d(t, "Block", function () {
          return u;
        });
      var o = c(0),
        r = c(4),
        n = c.n(r),
        a = c(24),
        s = c(86),
        l = c(1),
        i = c(48);
      const u = (e) => {
        const { textAlign: t } = e,
          c = Object(s.a)(e),
          { product: r } = Object(a.useProductDataContext)(),
          i = n()(c.className, "wc-block-components-product-average-rating", {
            [`has-text-align-${t}`]: t,
          });
        return Object(o.createElement)(
          "div",
          { className: i, style: c.style },
          Number(r.average_rating) > 0
            ? r.average_rating
            : Object(l.__)("No ratings", "woocommerce")
        );
      };
      t.default = Object(i.withProductDataContext)(u);
    },
    function (e, t, c) {
      "use strict";
      c.r(t);
      var o = c(0),
        r = c(4),
        n = c.n(r),
        a = c(132),
        s = c(17),
        l = c(24),
        i = c(86),
        u = c(48);
      c(395),
        (t.default = Object(u.withProductDataContext)((e) => {
          const { className: t } = e,
            { parentClassName: c } = Object(l.useInnerBlockLayoutContext)(),
            { product: r } = Object(l.useProductDataContext)(),
            u = Object(i.a)(e);
          if (!r)
            return Object(o.createElement)("div", {
              className: n()(t, "wc-block-components-product-summary", {
                [`${c}__product-summary`]: c,
              }),
            });
          const d = r.short_description ? r.short_description : r.description;
          return d
            ? Object(o.createElement)(a.a, {
                className: n()(
                  t,
                  u.className,
                  "wc-block-components-product-summary",
                  { [`${c}__product-summary`]: c }
                ),
                source: d,
                maxLength: 150,
                countType: s.p.wordCountType || "words",
                style: u.style,
              })
            : null;
        }));
    },
    function (e, t, c) {
      "use strict";
      c.r(t);
      var o = c(0),
        r = c(1),
        n = c(4),
        a = c.n(n),
        s = c(24),
        l = c(48),
        i = c(86);
      c(396);
      const u = ({ parentClassName: e, sku: t, className: c, style: n }) =>
        Object(o.createElement)(
          "div",
          { className: a()(c, { [`${e}__product-sku`]: e }), style: n },
          Object(r.__)("SKU:", "woocommerce"),
          " ",
          Object(o.createElement)("strong", null, t)
        );
      t.default = Object(l.withProductDataContext)((e) => {
        const { className: t } = e,
          c = Object(i.a)(e),
          { parentClassName: r } = Object(s.useInnerBlockLayoutContext)(),
          { product: n } = Object(s.useProductDataContext)(),
          l = n.sku;
        return e.isDescendentOfSingleProductTemplate
          ? Object(o.createElement)(u, {
              parentClassName: r,
              className: t,
              sku: "Product SKU",
            })
          : l
          ? Object(o.createElement)(u, {
              className: t,
              parentClassName: r,
              sku: l,
              ...(e.isDescendantOfAllProducts && {
                className: a()(
                  t,
                  "wc-block-components-product-sku wp-block-woocommerce-product-sku",
                  c.className
                ),
                style: { ...c.style },
              }),
            })
          : null;
      });
    },
    function (e, t, c) {
      "use strict";
      c.r(t),
        c.d(t, "Block", function () {
          return u;
        });
      var o = c(0),
        r = c(1),
        n = c(4),
        a = c.n(n),
        s = c(24),
        l = c(86),
        i = c(48);
      c(397);
      const u = (e) => {
        const { className: t } = e,
          c = Object(l.a)(e),
          { parentClassName: n } = Object(s.useInnerBlockLayoutContext)(),
          { product: i } = Object(s.useProductDataContext)();
        if (!i.id) return null;
        const u = !!i.is_in_stock,
          d = i.low_stock_remaining,
          b = i.is_on_backorder;
        return Object(o.createElement)(
          "div",
          {
            className: a()(t, {
              [`${n}__stock-indicator`]: n,
              "wc-block-components-product-stock-indicator--in-stock": u,
              "wc-block-components-product-stock-indicator--out-of-stock": !u,
              "wc-block-components-product-stock-indicator--low-stock": !!d,
              "wc-block-components-product-stock-indicator--available-on-backorder":
                !!b,
              ...(e.isDescendantOfAllProducts && {
                [c.className]: c.className,
                "wc-block-components-product-stock-indicator wp-block-woocommerce-product-stock-indicator":
                  !0,
              }),
            }),
            ...(e.isDescendantOfAllProducts && { style: c.style }),
          },
          (({
            isInStock: e = !1,
            isLowStock: t = !1,
            lowStockAmount: c = null,
            isOnBackorder: o = !1,
          }) =>
            t && null !== c
              ? Object(r.sprintf)(
                  /* translators: %d stock amount (number of items in stock for product) */
                  Object(r.__)("%d left in stock", "woocommerce"),
                  c
                )
              : o
              ? Object(r.__)("Available on backorder", "woocommerce")
              : e
              ? Object(r.__)("In stock", "woocommerce")
              : Object(r.__)("Out of stock", "woocommerce"))({
            isInStock: u,
            isLowStock: !!d,
            lowStockAmount: d,
            isOnBackorder: b,
          })
        );
      };
      t.default = Object(i.withProductDataContext)(u);
    },
    function (e, t) {},
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return m;
      }),
        c.d(t, "b", function () {
          return O;
        });
      var o = c(0),
        r = c(2),
        n = c(1),
        a = c(331),
        s = c(263),
        l = c(3),
        i = c(80),
        u = c(44),
        d = c(117),
        b = c(89);
      const p = "woocommerce/related-products",
        m = {
          namespace: p,
          allowedControls: [],
          displayLayout: { type: "flex", columns: 5 },
          query: {
            perPage: 5,
            pages: 0,
            offset: 0,
            postType: "product",
            order: "asc",
            orderBy: "title",
            author: "",
            search: "",
            exclude: [],
            sticky: "",
            inherit: !1,
          },
          lock: { remove: !0, move: !0 },
        },
        g = Object(l.getSettingWithCoercion)(
          "postTemplateHasSupportForGridView",
          !1,
          i.a
        ),
        O = [
          [
            "core/heading",
            {
              level: 2,
              content: Object(n.__)("Related products", "woocommerce"),
            },
          ],
          [
            "core/post-template",
            {
              __woocommerceNamespace: d.b,
              ...(g && { layout: { type: "grid", columnCount: 3 } }),
            },
            [
              [
                "woocommerce/product-image",
                { productId: 0, imageSizing: "cropped" },
              ],
              [
                "core/post-title",
                {
                  textAlign: "center",
                  level: 3,
                  fontSize: "medium",
                  isLink: !0,
                  __woocommerceNamespace: b.b,
                },
                [],
              ],
              [
                "woocommerce/product-price",
                {
                  textAlign: "center",
                  fontSize: "small",
                  style: { spacing: { margin: { bottom: "1rem" } } },
                },
                [],
              ],
              [
                "woocommerce/product-button",
                {
                  textAlign: "center",
                  fontSize: "small",
                  style: { spacing: { margin: { bottom: "1rem" } } },
                },
                [],
              ],
            ],
          ],
        ];
      Object(s.a)({
        blockName: u.i,
        blockMetadata: {},
        blockSettings: {
          description: Object(n.__)("Display related products.", "woocommerce"),
          name: "Related Products Controls",
          title: Object(n.__)("Related Products Controls", "woocommerce"),
          isActive: (e) => e.namespace === p,
          icon: Object(o.createElement)(r.Icon, {
            icon: a.a,
            className:
              "wc-block-editor-components-block-icon wc-block-editor-components-block-icon--stacks",
          }),
          attributes: m,
          allowedControls: [],
          innerBlocks: O,
          scope: ["block"],
        },
        isVariationBlock: !0,
        variationName: p,
      });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e) {
      e.exports = JSON.parse(
        '{"name":"woocommerce/product-rating","version":"1.0.0","icon":"info","title":"Product Rating","description":"Display the average rating of a product.","attributes":{"productId":{"type":"number","default":0},"isDescendentOfQueryLoop":{"type":"boolean","default":false},"textAlign":{"type":"string","default":""},"isDescendentOfSingleProductBlock":{"type":"boolean","default":false},"isDescendentOfSingleProductTemplate":{"type":"boolean","default":false}},"usesContext":["query","queryId","postId"],"category":"woocommerce","keywords":["WooCommerce"],"supports":{"align":true},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"name":"woocommerce/product-rating-stars","version":"1.0.0","title":"Product Rating Stars","description":"Display the average rating of a product with stars","attributes":{"productId":{"type":"number","default":0},"isDescendentOfQueryLoop":{"type":"boolean","default":false},"textAlign":{"type":"string","default":""},"isDescendentOfSingleProductBlock":{"type":"boolean","default":false},"isDescendentOfSingleProductTemplate":{"type":"boolean","default":false}},"usesContext":["query","queryId","postId"],"category":"woocommerce","keywords":["WooCommerce"],"supports":{"align":true},"ancestor":["woocommerce/single-product"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"name":"woocommerce/product-rating-counter","version":"1.0.0","title":"Product Rating Counter","description":"Display the review count of a product","attributes":{"productId":{"type":"number","default":0},"isDescendentOfQueryLoop":{"type":"boolean","default":false},"textAlign":{"type":"string","default":""},"isDescendentOfSingleProductBlock":{"type":"boolean","default":false},"isDescendentOfSingleProductTemplate":{"type":"boolean","default":false}},"usesContext":["query","queryId","postId"],"category":"woocommerce","keywords":["WooCommerce"],"supports":{"align":true},"ancestor":["woocommerce/single-product"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"name":"woocommerce/product-average-rating","version":"1.0.0","title":"Product Average Rating (Beta)","description":"Display the average rating of a product","attributes":{"textAlign":{"type":"string"}},"category":"woocommerce","keywords":["WooCommerce"],"ancestor":["woocommerce/single-product"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}'
      );
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, c) {
      e.exports = c(557);
    },
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    ,
    ,
    ,
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return n;
      });
      var o = c(1),
        r = c(17);
      const n = [
        {
          id: 1,
          name: "WordPress Pennant",
          variation: "",
          permalink: "https://example.org",
          sku: "wp-pennant",
          short_description: Object(o.__)(
            "Fly your WordPress banner with this beauty! Deck out your office space or add it to your kids walls. This banner will spruce up any space it’s hung!",
            "woocommerce"
          ),
          description:
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
          price: "7.99",
          price_html:
            '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>7.99</span>',
          images: [
            {
              id: 1,
              src: r.n + "previews/pennant.jpg",
              thumbnail: r.n + "previews/pennant.jpg",
              name: "pennant-1.jpg",
              alt: "WordPress Pennant",
              srcset: "",
              sizes: "",
            },
          ],
          average_rating: 5,
          categories: [
            {
              id: 1,
              name: "Decor",
              slug: "decor",
              link: "https://example.org",
            },
          ],
          review_count: 1,
          prices: {
            currency_code: "GBP",
            decimal_separator: ".",
            thousand_separator: ",",
            decimals: 2,
            price_prefix: "£",
            price_suffix: "",
            price: "7.99",
            regular_price: "9.99",
            sale_price: "7.99",
            price_range: null,
          },
          add_to_cart: {
            text: Object(o.__)("Add to cart", "woocommerce"),
            description: Object(o.__)("Add to cart", "woocommerce"),
          },
          has_options: !1,
          is_purchasable: !0,
          is_in_stock: !0,
          on_sale: !0,
        },
      ];
    },
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, c) {
      "use strict";
      c.r(t),
        c.d(t, "metadata", function () {
          return St;
        }),
        c.d(t, "name", function () {
          return Oc;
        });
      var o = c(0),
        r = c(7),
        n = c(70),
        a = c(612),
        s = c(83),
        l = c(5),
        i = c(1),
        u = c(4),
        d = c.n(u),
        b = {
          category: "woocommerce-product-elements",
          keywords: [Object(i.__)("WooCommerce", "woocommerce")],
          icon: {
            src: Object(o.createElement)(n.a, {
              icon: a.a,
              className: "wc-block-editor-components-block-icon",
            }),
          },
          supports: { html: !1 },
          ancestor: ["woocommerce/all-products", "woocommerce/single-product"],
          save: ({ attributes: e }) =>
            e.isDescendentOfQueryLoop ||
            e.isDescendentOfSingleProductBlock ||
            e.isDescendentOfSingleProductTemplate
              ? null
              : Object(o.createElement)("div", {
                  className: d()("is-loading", e.className),
                }),
          deprecated: [{ attributes: {}, save: () => null }],
        },
        p = c(352),
        m = c(2),
        g = c(11),
        O = c(9);
      function j({ level: e }) {
        const t = {
          1: "M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z",
          2: "M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z",
          3: "M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z",
          4: "M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z",
          5: "M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z",
          6: "M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z",
        };
        return t.hasOwnProperty(e)
          ? Object(o.createElement)(
              O.SVG,
              {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg",
              },
              Object(o.createElement)(O.Path, { d: t[e] })
            )
          : null;
      }
      class h extends o.Component {
        createLevelControl(e, t, c) {
          const r = e === t;
          return {
            icon: Object(o.createElement)(j, { level: e }),
            title: Object(i.sprintf)(
              /* translators: %s: heading level e.g: "2", "3", "4" */
              Object(i.__)("Heading %d", "woocommerce"),
              e
            ),
            isActive: r,
            onClick: () => c(e),
          };
        }
        render() {
          const {
              isCollapsed: e = !0,
              minLevel: t,
              maxLevel: c,
              selectedLevel: r,
              onChange: n,
            } = this.props,
            a = Array.from({ length: c - t + 1 }, (e, c) => c + t);
          return Object(o.createElement)(m.ToolbarGroup, {
            isCollapsed: e,
            icon: Object(o.createElement)(j, { level: r }),
            controls: a.map((e) => this.createLevelControl(e, r, n)),
          });
        }
      }
      var _ = h,
        w = c(217),
        E = c(110);
      c(416);
      var f = function ({ className: e = "", ...t }) {
          const c = d()("wc-block-text-toolbar-button", e);
          return Object(o.createElement)(m.Button, { className: c, ...t });
        },
        k = c(24);
      c(415);
      var v = (e) => (t) => (c) => {
          var r;
          const n = Object(k.useProductDataContext)(),
            { attributes: a, setAttributes: s } = c,
            { productId: u } = a,
            [d, b] = Object(o.useState)(!u);
          return n.hasContext ||
            Number.isFinite(
              null === (r = c.context) || void 0 === r ? void 0 : r.queryId
            )
            ? Object(o.createElement)(t, { ...c })
            : Object(o.createElement)(
                o.Fragment,
                null,
                d
                  ? Object(o.createElement)(
                      m.Placeholder,
                      {
                        icon: e.icon || "",
                        label: e.label || "",
                        className: "wc-atomic-blocks-product",
                      },
                      !!e.description &&
                        Object(o.createElement)("div", null, e.description),
                      Object(o.createElement)(
                        "div",
                        { className: "wc-atomic-blocks-product__selection" },
                        Object(o.createElement)(E.a, {
                          selected: u || 0,
                          showVariations: !0,
                          onChange: (e = []) => {
                            s({ productId: e[0] ? e[0].id : 0 });
                          },
                        }),
                        Object(o.createElement)(
                          m.Button,
                          {
                            isSecondary: !0,
                            disabled: !u,
                            onClick: () => {
                              b(!1);
                            },
                          },
                          Object(i.__)("Done", "woocommerce")
                        )
                      )
                    )
                  : Object(o.createElement)(
                      o.Fragment,
                      null,
                      Object(o.createElement)(
                        l.BlockControls,
                        null,
                        Object(o.createElement)(
                          m.ToolbarGroup,
                          null,
                          Object(o.createElement)(
                            f,
                            { onClick: () => b(!0) },
                            Object(i.__)("Switch product…", "woocommerce")
                          )
                        )
                      ),
                      Object(o.createElement)(t, { ...c })
                    )
              );
        },
        y = c(66);
      c(417);
      const S = ({ attributes: e, setAttributes: t }) => {
        const c = Object(l.useBlockProps)(),
          { headingLevel: r, showProductLink: n, align: a, linkTarget: u } = e;
        return Object(o.createElement)(
          "div",
          { ...c },
          Object(o.createElement)(
            l.BlockControls,
            null,
            Object(o.createElement)(_, {
              isCollapsed: !0,
              minLevel: 1,
              maxLevel: 7,
              selectedLevel: r,
              onChange: (e) => t({ headingLevel: e }),
            }),
            Object(s.b)() &&
              Object(o.createElement)(l.AlignmentToolbar, {
                value: a,
                onChange: (e) => {
                  t({ align: e });
                },
              })
          ),
          Object(o.createElement)(
            l.InspectorControls,
            null,
            Object(o.createElement)(
              m.PanelBody,
              { title: Object(i.__)("Link settings", "woocommerce") },
              Object(o.createElement)(m.ToggleControl, {
                label: Object(i.__)("Make title a link", "woocommerce"),
                checked: n,
                onChange: () => t({ showProductLink: !n }),
              }),
              n &&
                Object(o.createElement)(
                  o.Fragment,
                  null,
                  Object(o.createElement)(m.ToggleControl, {
                    label: Object(i.__)("Open in new tab", "woocommerce"),
                    onChange: (e) => t({ linkTarget: e ? "_blank" : "_self" }),
                    checked: "_blank" === u,
                  })
                )
            )
          ),
          Object(o.createElement)(
            m.Disabled,
            null,
            Object(o.createElement)(w.b, { ...e })
          )
        );
      };
      var C = Object(s.b)()
        ? Object(g.compose)([
            v({
              icon: y.b,
              label: y.c,
              description: Object(i.__)(
                "Choose a product to display its title.",
                "woocommerce"
              ),
            }),
          ])(S)
        : S;
      const x = {
        ...b,
        apiVersion: 2,
        title: y.c,
        description: y.a,
        icon: { src: y.b },
        attributes: p.a,
        edit: C,
        save: ({ attributes: e }) =>
          Object(o.createElement)("div", {
            ...l.useBlockProps.save({
              className: d()("is-loading", e.className),
            }),
          }),
        supports: {
          ...b.supports,
          ...(Object(s.b)() && {
            typography: {
              fontSize: !0,
              lineHeight: !0,
              __experimentalFontWeight: !0,
              __experimentalTextTransform: !0,
              __experimentalFontFamily: !0,
            },
            color: {
              text: !0,
              background: !0,
              link: !1,
              gradients: !0,
              __experimentalSkipSerialization: !0,
            },
            ...("function" ==
              typeof l.__experimentalGetSpacingClassesAndStyles && {
              spacing: { margin: !0, __experimentalSkipSerialization: !0 },
            }),
            __experimentalSelector: ".wc-block-components-product-title",
          }),
        },
      };
      Object(r.registerBlockType)("woocommerce/product-title", x);
      var N = c(234),
        P = c(6);
      const T = () => ({
        isDescendentOfSingleProductTemplate: Object(P.useSelect)((e) => {
          const t = e("core/edit-site"),
            c = null == t ? void 0 : t.getEditedPostId();
          return Boolean(null == c ? void 0 : c.includes("//single-product"));
        }, []),
      });
      const I = {
        ...b.supports,
        ...(Object(s.b)() && {
          color: {
            text: !0,
            background: !0,
            link: !1,
            __experimentalSkipSerialization: !0,
          },
          typography: {
            fontSize: !0,
            lineHeight: !0,
            __experimentalFontFamily: !0,
            __experimentalFontWeight: !0,
            __experimentalFontStyle: !0,
            __experimentalSkipSerialization: !0,
            __experimentalLetterSpacing: !0,
          },
          __experimentalSelector:
            ".wp-block-woocommerce-product-price .wc-block-components-product-price",
        }),
        ...("function" == typeof l.__experimentalGetSpacingClassesAndStyles && {
          spacing: { margin: !0, padding: !0 },
        }),
      };
      var A = c(615);
      const B = Object(i.__)("Product Price", "woocommerce"),
        R = Object(o.createElement)(n.a, {
          icon: A.a,
          className: "wc-block-editor-components-block-icon",
        }),
        D = Object(i.__)("Display the price of a product.", "woocommerce"),
        { ancestor: L, ...F } = b,
        V = {
          ...F,
          apiVersion: 2,
          title: B,
          description: D,
          usesContext: ["query", "queryId", "postId"],
          icon: { src: R },
          attributes: {
            productId: { type: "number", default: 0 },
            isDescendentOfQueryLoop: { type: "boolean", default: !1 },
            textAlign: { type: "string", default: "" },
            isDescendentOfSingleProductTemplate: {
              type: "boolean",
              default: !1,
            },
            isDescendentOfSingleProductBlock: { type: "boolean", default: !1 },
          },
          supports: I,
          edit: ({ attributes: e, setAttributes: t, context: c }) => {
            const r = Object(l.useBlockProps)(),
              n = { ...e, ...c },
              a = Number.isFinite(c.queryId);
            let { isDescendentOfSingleProductTemplate: s } = T();
            return (
              a && (s = !1),
              Object(o.useEffect)(
                () =>
                  t({
                    isDescendentOfQueryLoop: a,
                    isDescendentOfSingleProductTemplate: s,
                  }),
                [a, s, t]
              ),
              Object(o.createElement)(
                o.Fragment,
                null,
                Object(o.createElement)(
                  l.BlockControls,
                  null,
                  Object(o.createElement)(l.AlignmentToolbar, {
                    value: e.textAlign,
                    onChange: (e) => {
                      t({ textAlign: e });
                    },
                  })
                ),
                Object(o.createElement)(
                  "div",
                  { ...r },
                  Object(o.createElement)(N.default, { ...n })
                )
              )
            );
          },
        };
      Object(r.registerBlockType)("woocommerce/product-price", V);
      var M = c(3),
        $ = c(80),
        H = c(219),
        z = c(616);
      const q = Object(i.__)("Product Image", "woocommerce"),
        G = Object(o.createElement)(n.a, {
          icon: z.a,
          className: "wc-block-editor-components-block-icon",
        }),
        Q = Object(i.__)("Display the main product image.", "woocommerce");
      var W = c(60);
      const Y = {
          cover: Object(i.__)(
            "Image is scaled and cropped to fill the entire space without being distorted.",
            "woocommerce"
          ),
          contain: Object(i.__)(
            "Image is scaled to fill the space without clipping nor distorting.",
            "woocommerce"
          ),
          fill: Object(i.__)(
            "Image will be stretched and distorted to completely fill the space.",
            "woocommerce"
          ),
        },
        U = ({ scale: e, width: t, height: c, setAttributes: r }) =>
          Object(o.createElement)(
            m.__experimentalToolsPanel,
            {
              className: "wc-block-product-image__tools-panel",
              label: Object(i.__)("Image size", "woocommerce"),
            },
            Object(o.createElement)(m.__experimentalUnitControl, {
              label: Object(i.__)("Height", "woocommerce"),
              onChange: (e) => {
                r({ height: e });
              },
              value: c,
              units: [{ value: "px", label: "px" }],
            }),
            Object(o.createElement)(m.__experimentalUnitControl, {
              label: Object(i.__)("Width", "woocommerce"),
              onChange: (e) => {
                r({ width: e });
              },
              value: t,
              units: [{ value: "px", label: "px" }],
            }),
            c &&
              Object(o.createElement)(
                m.__experimentalToolsPanelItem,
                {
                  hasValue: () => !0,
                  label: Object(i.__)("Scale", "woocommerce"),
                },
                Object(o.createElement)(
                  m.__experimentalToggleGroupControl,
                  {
                    label: Object(i.__)("Scale", "woocommerce"),
                    value: e,
                    help: Y[e],
                    onChange: (e) => r({ scale: e }),
                    isBlock: !0,
                  },
                  Object(o.createElement)(
                    o.Fragment,
                    null,
                    Object(o.createElement)(
                      m.__experimentalToggleGroupControlOption,
                      {
                        value: "cover",
                        label: Object(i.__)("Cover", "woocommerce"),
                      }
                    ),
                    Object(o.createElement)(
                      m.__experimentalToggleGroupControlOption,
                      {
                        value: "contain",
                        label: Object(i.__)("Contain", "woocommerce"),
                      }
                    ),
                    Object(o.createElement)(
                      m.__experimentalToggleGroupControlOption,
                      {
                        value: "fill",
                        label: Object(i.__)("Fill", "woocommerce"),
                      }
                    )
                  )
                )
              )
          );
      var K = v({ icon: G, label: q, description: Q })(
        ({ attributes: e, setAttributes: t, context: c }) => {
          const {
              showProductLink: r,
              imageSizing: n,
              showSaleBadge: a,
              saleBadgeAlign: s,
              width: u,
              height: d,
              scale: b,
            } = e,
            p = Object(l.useBlockProps)({ style: { width: u, height: d } }),
            g = Number.isFinite(c.queryId),
            O = Object(M.getSettingWithCoercion)(
              "isBlockThemeEnabled",
              !1,
              $.a
            );
          return (
            Object(o.useEffect)(
              () => t({ isDescendentOfQueryLoop: g }),
              [t, g]
            ),
            Object(o.createElement)(
              "div",
              { ...p },
              Object(o.createElement)(
                l.InspectorControls,
                null,
                Object(o.createElement)(U, {
                  scale: b,
                  width: u,
                  height: d,
                  setAttributes: t,
                }),
                Object(o.createElement)(
                  m.PanelBody,
                  { title: Object(i.__)("Content", "woocommerce") },
                  Object(o.createElement)(m.ToggleControl, {
                    label: Object(i.__)("Link to Product Page", "woocommerce"),
                    help: Object(i.__)(
                      "Links the image to the single product listing.",
                      "woocommerce"
                    ),
                    checked: r,
                    onChange: () => t({ showProductLink: !r }),
                  }),
                  Object(o.createElement)(m.ToggleControl, {
                    label: Object(i.__)("Show On-Sale Badge", "woocommerce"),
                    help: Object(i.__)(
                      "Display a “sale” badge if the product is on-sale.",
                      "woocommerce"
                    ),
                    checked: a,
                    onChange: () => t({ showSaleBadge: !a }),
                  }),
                  a &&
                    Object(o.createElement)(
                      m.__experimentalToggleGroupControl,
                      {
                        label: Object(i.__)(
                          "Sale Badge Alignment",
                          "woocommerce"
                        ),
                        value: s,
                        onChange: (e) => t({ saleBadgeAlign: e }),
                      },
                      Object(o.createElement)(
                        m.__experimentalToggleGroupControlOption,
                        {
                          value: "left",
                          label: Object(i.__)("Left", "woocommerce"),
                        }
                      ),
                      Object(o.createElement)(
                        m.__experimentalToggleGroupControlOption,
                        {
                          value: "center",
                          label: Object(i.__)("Center", "woocommerce"),
                        }
                      ),
                      Object(o.createElement)(
                        m.__experimentalToggleGroupControlOption,
                        {
                          value: "right",
                          label: Object(i.__)("Right", "woocommerce"),
                        }
                      )
                    ),
                  !O &&
                    Object(o.createElement)(
                      m.__experimentalToggleGroupControl,
                      {
                        label: Object(i.__)("Image Sizing", "woocommerce"),
                        help: Object(o.createInterpolateElement)(
                          Object(i.__)(
                            "Product image cropping can be modified in the <a>Customizer</a>.",
                            "woocommerce"
                          ),
                          {
                            a: Object(o.createElement)("a", {
                              href: `${Object(M.getAdminLink)(
                                "customize.php"
                              )}?autofocus[panel]=woocommerce&autofocus[section]=woocommerce_product_images`,
                              target: "_blank",
                              rel: "noopener noreferrer",
                            }),
                          }
                        ),
                        value: n,
                        onChange: (e) => t({ imageSizing: e }),
                      },
                      Object(o.createElement)(
                        m.__experimentalToggleGroupControlOption,
                        {
                          value: W.a.SINGLE,
                          label: Object(i.__)("Full Size", "woocommerce"),
                        }
                      ),
                      Object(o.createElement)(
                        m.__experimentalToggleGroupControlOption,
                        {
                          value: W.a.THUMBNAIL,
                          label: Object(i.__)("Cropped", "woocommerce"),
                        }
                      )
                    )
                )
              ),
              Object(o.createElement)(
                m.Disabled,
                null,
                Object(o.createElement)(H.b, { ...e, ...c })
              )
            )
          );
        }
      );
      const J = {
        html: !1,
        ...(Object(s.b)() && {
          __experimentalBorder: {
            radius: !0,
            __experimentalSkipSerialization: !0,
          },
          typography: { fontSize: !0, __experimentalSkipSerialization: !0 },
          ...("function" ==
            typeof l.__experimentalGetSpacingClassesAndStyles && {
            spacing: { margin: !0, padding: !0 },
          }),
          __experimentalSelector: ".wc-block-components-product-image",
        }),
      };
      var Z = c(353);
      const X = {
        ...b,
        apiVersion: 2,
        name: "woocommerce/product-image",
        title: q,
        icon: { src: G },
        keywords: ["WooCommerce"],
        description: Q,
        usesContext: ["query", "queryId", "postId"],
        ancestor: [
          "woocommerce/all-products",
          "woocommerce/single-product",
          "core/post-template",
          "woocommerce/product-template",
        ],
        textdomain: "woocommerce",
        attributes: Z.a,
        supports: J,
        edit: K,
      };
      Object(r.registerBlockType)("woocommerce/product-image", { ...X });
      var ee = c(263),
        te = c(235);
      c(418);
      const ce = ({ blockClientId: e }) => {
        const { isDescendentOfSingleProductBlock: t } = Object(P.useSelect)(
          (t) => {
            const { getBlockParentsByBlockName: c } = t("core/block-editor");
            return {
              isDescendentOfSingleProductBlock:
                c(null == e ? void 0 : e.replace("block-", ""), [
                  "woocommerce/single-product",
                ]).length > 0,
            };
          },
          [e]
        );
        return { isDescendentOfSingleProductBlock: t };
      };
      var oe = c(617);
      Object(i.__)("Product Rating", "woocommerce");
      const re = Object(o.createElement)(n.a, {
        icon: oe.a,
        className: "wc-block-editor-components-block-icon",
      });
      Object(i.__)("Display the average rating of a product.", "woocommerce");
      var ne = c(379);
      const ae = {
          ...(Object(s.b)() && {
            color: {
              text: !0,
              background: !1,
              link: !1,
              __experimentalSkipSerialization: !0,
            },
            spacing: { margin: !0, padding: !0 },
            typography: { fontSize: !0, __experimentalSkipSerialization: !0 },
            __experimentalSelector: ".wc-block-components-product-rating",
          }),
          ...(!Object(s.b)() &&
            "function" == typeof l.__experimentalGetSpacingClassesAndStyles && {
              spacing: { margin: !0 },
            }),
        },
        se = {
          ...b,
          ancestor: [
            "woocommerce/all-products",
            "woocommerce/single-product",
            "core/post-template",
            "woocommerce/product-template",
          ],
          icon: { src: re },
          supports: ae,
          edit: (e) => {
            const { attributes: t, setAttributes: c, context: r } = e,
              n = Object(l.useBlockProps)({
                className: "wp-block-woocommerce-product-rating",
              }),
              a = {
                ...t,
                ...r,
                shouldDisplayMockedReviewsWhenProductHasNoReviews: !0,
              },
              s = Number.isFinite(r.queryId),
              { isDescendentOfSingleProductBlock: i } = ce({
                blockClientId: null == n ? void 0 : n.id,
              });
            let { isDescendentOfSingleProductTemplate: u } = T();
            return (
              (s || i) && (u = !1),
              Object(o.useEffect)(() => {
                c({
                  isDescendentOfQueryLoop: s,
                  isDescendentOfSingleProductBlock: i,
                  isDescendentOfSingleProductTemplate: u,
                });
              }, [c, s, i, u]),
              Object(o.createElement)(
                o.Fragment,
                null,
                Object(o.createElement)(
                  l.BlockControls,
                  null,
                  Object(o.createElement)(l.AlignmentToolbar, {
                    value: t.textAlign,
                    onChange: (e) => {
                      c({ textAlign: e || "" });
                    },
                  })
                ),
                Object(o.createElement)(
                  "div",
                  { ...n },
                  Object(o.createElement)(te.default, { ...a })
                )
              )
            );
          },
        };
      Object(ee.a)({
        blockName: "woocommerce/product-rating",
        blockMetadata: ne,
        blockSettings: se,
        isAvailableOnPostEditor: !0,
      });
      var le = c(618),
        ie = c(380),
        ue = c(361);
      const de = {
        ...(Object(s.b)() && {
          color: {
            text: !0,
            background: !1,
            link: !1,
            __experimentalSkipSerialization: !0,
          },
          spacing: { margin: !0, padding: !0 },
          typography: { fontSize: !0, __experimentalSkipSerialization: !0 },
          __experimentalSelector: ".wc-block-components-product-rating",
        }),
      };
      Object(r.registerBlockType)(ie, {
        icon: {
          src: Object(o.createElement)(n.a, {
            icon: le.a,
            className: "wc-block-editor-components-block-icon",
          }),
        },
        supports: de,
        edit: (e) => {
          const { attributes: t, setAttributes: c, context: r } = e,
            n = Object(l.useBlockProps)({
              className: "wp-block-woocommerce-product-rating",
            }),
            a = {
              ...t,
              ...r,
              shouldDisplayMockedReviewsWhenProductHasNoReviews: !0,
            },
            s = Number.isFinite(r.queryId),
            { isDescendentOfSingleProductBlock: i } = ce({
              blockClientId: null == n ? void 0 : n.id,
            });
          let { isDescendentOfSingleProductTemplate: u } = T();
          return (
            (s || i) && (u = !1),
            Object(o.useEffect)(() => {
              c({
                isDescendentOfQueryLoop: s,
                isDescendentOfSingleProductBlock: i,
                isDescendentOfSingleProductTemplate: u,
              });
            }, [c, s, i, u]),
            Object(o.createElement)(
              o.Fragment,
              null,
              Object(o.createElement)(
                l.BlockControls,
                null,
                Object(o.createElement)(l.AlignmentToolbar, {
                  value: t.textAlign,
                  onChange: (e) => {
                    c({ textAlign: e || "" });
                  },
                })
              ),
              Object(o.createElement)(
                "div",
                { ...n },
                Object(o.createElement)(ue.default, { ...a })
              )
            )
          );
        },
      });
      var be = c(381),
        pe = c(362);
      const me = {
        ...(Object(s.b)() && {
          color: { text: !1, background: !1, link: !0 },
          spacing: { margin: !0, padding: !0 },
          typography: { fontSize: !0, __experimentalSkipSerialization: !0 },
          __experimentalSelector: ".wc-block-components-product-rating-counter",
        }),
      };
      Object(r.registerBlockType)(be, {
        icon: {
          src: Object(o.createElement)(n.a, {
            icon: le.a,
            className: "wc-block-editor-components-block-icon",
          }),
        },
        supports: me,
        edit: (e) => {
          const { attributes: t, setAttributes: c, context: r } = e,
            n = Object(l.useBlockProps)({
              className: "wp-block-woocommerce-product-rating-counter",
            }),
            a = {
              ...t,
              ...r,
              shouldDisplayMockedReviewsWhenProductHasNoReviews: !0,
            },
            s = Number.isFinite(r.queryId),
            { isDescendentOfSingleProductBlock: i } = ce({
              blockClientId: null == n ? void 0 : n.id,
            });
          let { isDescendentOfSingleProductTemplate: u } = T();
          return (
            (s || i) && (u = !1),
            Object(o.useEffect)(() => {
              c({
                isDescendentOfQueryLoop: s,
                isDescendentOfSingleProductBlock: i,
                isDescendentOfSingleProductTemplate: u,
              });
            }, [c, s, i, u]),
            Object(o.createElement)(
              o.Fragment,
              null,
              Object(o.createElement)(
                l.BlockControls,
                null,
                Object(o.createElement)(l.AlignmentToolbar, {
                  value: t.textAlign,
                  onChange: (e) => {
                    c({ textAlign: e || "" });
                  },
                })
              ),
              Object(o.createElement)(
                "div",
                { ...n },
                Object(o.createElement)(pe.default, { ...a })
              )
            )
          );
        },
      });
      var ge = c(619),
        Oe = c(382),
        je = c(363);
      const he = {
        ...(Object(s.b)() && {
          color: {
            text: !0,
            background: !0,
            __experimentalSkipSerialization: !0,
          },
          spacing: {
            margin: !0,
            padding: !0,
            __experimentalSkipSerialization: !0,
          },
          typography: {
            fontSize: !0,
            __experimentalFontWeight: !0,
            __experimentalSkipSerialization: !0,
          },
          __experimentalSelector: ".wc-block-components-product-average-rating",
        }),
      };
      Object(r.registerBlockType)(Oe, {
        icon: {
          src: Object(o.createElement)(n.a, {
            icon: ge.a,
            className: "wc-block-editor-components-block-icon",
          }),
        },
        supports: he,
        edit: (e) => {
          const { attributes: t, setAttributes: c } = e,
            r = Object(l.useBlockProps)({
              className: "wp-block-woocommerce-product-average-rating",
            });
          return Object(o.createElement)(
            o.Fragment,
            null,
            Object(o.createElement)(
              l.BlockControls,
              null,
              Object(o.createElement)(l.AlignmentToolbar, {
                value: t.textAlign,
                onChange: (e) => {
                  c({ textAlign: e || "" });
                },
              })
            ),
            Object(o.createElement)(
              "div",
              { ...r },
              Object(o.createElement)(je.default, { ...t })
            )
          );
        },
      });
      var _e = c(620),
        we = c(236);
      function Ee({ selectedWidth: e, setAttributes: t }) {
        return Object(o.createElement)(
          m.PanelBody,
          { title: Object(i.__)("Width settings", "woocommerce") },
          Object(o.createElement)(
            m.ButtonGroup,
            { "aria-label": Object(i.__)("Button width", "woocommerce") },
            [25, 50, 75, 100].map((c) =>
              Object(o.createElement)(
                m.Button,
                {
                  key: c,
                  isSmall: !0,
                  variant: c === e ? "primary" : void 0,
                  onClick: () => {
                    var o;
                    t({ width: e === (o = c) ? void 0 : o });
                  },
                },
                c,
                "%"
              )
            )
          )
        );
      }
      var fe = c(209);
      const ke = {
        ...fe.supports,
        ...(Object(s.b)() && {
          color: {
            text: !0,
            background: !0,
            link: !1,
            __experimentalSkipSerialization: !0,
          },
          __experimentalBorder: {
            radius: !0,
            __experimentalSkipSerialization: !0,
          },
          ...("function" ==
            typeof l.__experimentalGetSpacingClassesAndStyles && {
            spacing: {
              margin: !0,
              padding: !0,
              __experimentalSkipSerialization: !0,
            },
          }),
          typography: {
            fontSize: !0,
            lineHeight: !0,
            __experimentalFontWeight: !0,
            __experimentalFontFamily: !0,
            __experimentalFontStyle: !0,
            __experimentalTextTransform: !0,
            __experimentalTextDecoration: !0,
            __experimentalLetterSpacing: !0,
            __experimentalDefaultControls: { fontSize: !0 },
          },
          __experimentalSelector:
            ".wp-block-button.wc-block-components-product-button .wc-block-components-product-button__button",
        }),
        ...("function" == typeof l.__experimentalGetSpacingClassesAndStyles &&
          !Object(s.b)() && { spacing: { margin: !0 } }),
      };
      Object(r.registerBlockType)(fe, {
        icon: {
          src: Object(o.createElement)(n.a, {
            icon: _e.a,
            className: "wc-block-editor-components-block-icon",
          }),
        },
        attributes: { ...fe.attributes },
        supports: { ...ke },
        edit: ({ attributes: e, setAttributes: t, context: c }) => {
          const r = Object(l.useBlockProps)(),
            n = Number.isFinite(null == c ? void 0 : c.queryId),
            { width: a } = e;
          return (
            Object(o.useEffect)(
              () => t({ isDescendentOfQueryLoop: n }),
              [t, n]
            ),
            Object(o.createElement)(
              o.Fragment,
              null,
              Object(o.createElement)(
                l.BlockControls,
                null,
                n &&
                  Object(o.createElement)(l.AlignmentToolbar, {
                    value: e.textAlign,
                    onChange: (e) => {
                      t({ textAlign: e || "" });
                    },
                  })
              ),
              Object(o.createElement)(
                l.InspectorControls,
                null,
                Object(o.createElement)(Ee, {
                  selectedWidth: a,
                  setAttributes: t,
                })
              ),
              Object(o.createElement)(
                "div",
                { ...r },
                Object(o.createElement)(
                  m.Disabled,
                  null,
                  Object(o.createElement)(we.default, {
                    ...e,
                    ...c,
                    className: d()(e.className, {
                      [`has-custom-width wp-block-button__width-${a}`]: a,
                    }),
                  })
                )
              )
            )
          );
        },
        save: ({ attributes: e }) =>
          e.isDescendentOfQueryLoop || e.isDescendentOfSingleProductBlock
            ? null
            : Object(o.createElement)("div", {
                ...l.useBlockProps.save({
                  className: d()("is-loading", e.className, {
                    [`has-custom-width wp-block-button__width-${e.width}`]:
                      e.width,
                  }),
                }),
              }),
      });
      var ve = c(364),
        ye = c(87);
      c(419);
      var Se = v({ icon: ye.b, label: ye.c, description: ye.a })(
        ({ attributes: e }) => {
          const t = Object(l.useBlockProps)();
          return Object(o.createElement)(
            "div",
            { ...t },
            Object(o.createElement)(ve.default, { ...e })
          );
        }
      );
      const Ce = {
          ...(Object(s.b)() && {
            color: { background: !1 },
            typography: { fontSize: !0 },
            __experimentalSelector: ".wc-block-components-product-summary",
          }),
        },
        xe = {
          ...b,
          apiVersion: 2,
          title: ye.c,
          description: ye.a,
          icon: { src: ye.b },
          attributes: { productId: { type: "number", default: 0 } },
          supports: Ce,
          edit: Se,
          save: ({ attributes: e }) =>
            Object(o.createElement)("div", {
              ...l.useBlockProps.save({
                className: d()("is-loading", e.className),
              }),
            }),
        };
      Object(r.registerBlockType)("woocommerce/product-summary", xe);
      var Ne = c(156),
        Pe = c(621);
      const Te = Object(i.__)("On-Sale Badge", "woocommerce"),
        Ie = Object(o.createElement)(n.a, {
          icon: Pe.a,
          className: "wc-block-editor-components-block-icon",
        }),
        Ae = Object(i.__)(
          "Displays an on-sale badge if the product is on-sale.",
          "woocommerce"
        );
      var Be = v({ icon: Ie, label: Te, description: Ae })(
        ({ attributes: e, setAttributes: t, context: c }) => {
          const r = Object(l.useBlockProps)(),
            n = { ...e, ...c },
            a = Number.isFinite(c.queryId);
          return (
            Object(o.useEffect)(
              () => t({ isDescendentOfQueryLoop: a }),
              [t, a]
            ),
            Object(o.createElement)(
              "div",
              { ...r },
              Object(o.createElement)(Ne.default, { ...n })
            )
          );
        }
      );
      const Re = {
          html: !1,
          ...(Object(s.b)() && {
            color: {
              gradients: !0,
              background: !0,
              link: !1,
              __experimentalSkipSerialization: !0,
            },
            typography: {
              fontSize: !0,
              lineHeight: !0,
              __experimentalFontFamily: !0,
              __experimentalFontWeight: !0,
              __experimentalFontStyle: !0,
              __experimentalSkipSerialization: !0,
              __experimentalLetterSpacing: !0,
              __experimentalTextTransform: !0,
              __experimentalTextDecoration: !0,
            },
            __experimentalBorder: {
              color: !0,
              radius: !0,
              width: !0,
              __experimentalSkipSerialization: !0,
            },
            ...("function" ==
              typeof l.__experimentalGetSpacingClassesAndStyles && {
              spacing: { margin: !0, padding: !0 },
            }),
            __experimentalSelector: ".wc-block-components-product-sale-badge",
          }),
          ...("function" == typeof l.__experimentalGetSpacingClassesAndStyles &&
            !Object(s.b)() && { spacing: { margin: !0 } }),
        },
        De = {
          ...b,
          title: Te,
          description: Ae,
          icon: { src: Ie },
          apiVersion: 2,
          supports: Re,
          attributes: {
            productId: { type: "number", default: 0 },
            isDescendentOfQueryLoop: { type: "boolean", default: !1 },
          },
          edit: Be,
          usesContext: ["query", "queryId", "postId"],
          ancestor: [
            "woocommerce/all-products",
            "woocommerce/single-product",
            "core/post-template",
            "woocommerce/product-template",
          ],
        };
      Object(r.registerBlockType)("woocommerce/product-sale-badge", { ...De });
      var Le = c(159),
        Fe = c(365);
      const Ve = {
        ...b.supports,
        color: { text: !0, background: !0 },
        typography: {
          fontSize: !0,
          lineHeight: !0,
          ...(Object(s.b)() && {
            __experimentalFontWeight: !0,
            __experimentalFontFamily: !0,
            __experimentalFontStyle: !0,
            __experimentalTextTransform: !0,
            __experimentalTextDecoration: !0,
            __experimentalLetterSpacing: !0,
          }),
        },
        ...("function" == typeof l.__experimentalGetSpacingClassesAndStyles && {
          spacing: { margin: !0, padding: !0 },
        }),
      };
      var Me = Object(o.createElement)(
        O.SVG,
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
        Object(o.createElement)("path", {
          d: "M2 6h2v12H2V6m3 0h1v12H5V6m2 0h3v12H7V6m4 0h1v12h-1V6m3 0h2v12h-2V6m3 0h3v12h-3V6m4 0h1v12h-1V6z",
        })
      );
      const $e = Object(i.__)("Product SKU", "woocommerce"),
        He = Object(o.createElement)(n.a, {
          icon: Me,
          className: "wc-block-editor-components-block-icon",
        }),
        ze = Object(i.__)("Display the SKU of a product.", "woocommerce"),
        { ancestor: qe, ...Ge } = b,
        Qe = {
          ...Ge,
          apiVersion: 2,
          title: $e,
          description: ze,
          icon: { src: He },
          usesContext: ["query", "queryId", "postId"],
          attributes: {
            productId: { type: "number", default: 0 },
            isDescendentOfQueryLoop: { type: "boolean", default: !1 },
            isDescendentOfSingleProductTemplate: {
              type: "boolean",
              default: !1,
            },
            isDescendantOfAllProducts: { type: "boolean", default: !1 },
            showProductSelector: { type: "boolean", default: !1 },
          },
          ancestor: [
            "woocommerce/all-products",
            "woocommerce/single-product",
            "core/post-template",
            "woocommerce/product-template",
            "woocommerce/product-meta",
          ],
          edit: ({ attributes: e, setAttributes: t, context: c }) => {
            const { style: r, ...n } = Object(l.useBlockProps)({
                className:
                  "wc-block-components-product-sku wp-block-woocommerce-product-sku",
              }),
              a = { ...e, ...c },
              s = Number.isFinite(c.queryId),
              { isDescendentOfSingleProductBlock: i } = ce({
                blockClientId: n.id,
              });
            let { isDescendentOfSingleProductTemplate: u } = T();
            return (
              s && (u = !1),
              Object(o.useEffect)(
                () =>
                  t({
                    isDescendentOfQueryLoop: s,
                    isDescendentOfSingleProductTemplate: u,
                    isDescendentOfSingleProductBlock: i,
                  }),
                [t, s, u, i]
              ),
              Object(o.createElement)(
                o.Fragment,
                null,
                Object(o.createElement)(Le.a, null),
                Object(o.createElement)(
                  "div",
                  { ...n, style: e.isDescendantOfAllProducts ? void 0 : r },
                  Object(o.createElement)(Fe.default, { ...a })
                )
              )
            );
          },
          supports: Ve,
        };
      Object(r.registerBlockType)("woocommerce/product-sku", { ...Qe });
      var We = c(366),
        Ye = c(622);
      const Ue = Object(i.__)("Product Stock Indicator", "woocommerce"),
        Ke = Object(o.createElement)(n.a, {
          icon: Ye.a,
          className: "wc-block-editor-components-block-icon",
        }),
        Je = Object(i.__)("Display product stock status.", "woocommerce");
      var Ze = v({ icon: Ke, label: Ue, description: Je })(
        ({ attributes: e, setAttributes: t, context: c }) => {
          const { style: r, ...n } = Object(l.useBlockProps)({
              className: "wc-block-components-product-stock-indicator",
            }),
            a = { ...e, ...c },
            s = Number.isFinite(c.queryId);
          return (
            Object(o.useEffect)(
              () => t({ isDescendentOfQueryLoop: s }),
              [t, s]
            ),
            Object(o.createElement)(
              "div",
              { ...n, style: e.isDescendantOfAllProducts ? void 0 : r },
              Object(o.createElement)(Le.a, null),
              Object(o.createElement)(We.default, { ...a })
            )
          );
        }
      );
      const Xe = {
          ...b.supports,
          color: { text: !0, background: !0 },
          typography: {
            fontSize: !0,
            lineHeight: !0,
            ...(Object(s.b)() && {
              __experimentalFontWeight: !0,
              __experimentalFontFamily: !0,
              __experimentalFontStyle: !0,
              __experimentalTextTransform: !0,
              __experimentalTextDecoration: !0,
              __experimentalLetterSpacing: !0,
            }),
          },
          ...("function" ==
            typeof l.__experimentalGetSpacingClassesAndStyles && {
            spacing: { margin: !0, padding: !0 },
          }),
        },
        et = {
          ...b,
          apiVersion: 2,
          title: Ue,
          description: Je,
          icon: { src: Ke },
          attributes: {
            productId: { type: "number", default: 0 },
            isDescendentOfQueryLoop: { type: "boolean", default: !1 },
            isDescendantOfAllProducts: { type: "boolean", default: !1 },
          },
          supports: Xe,
          edit: Ze,
          usesContext: ["query", "queryId", "postId"],
          ancestor: [
            "woocommerce/all-products",
            "woocommerce/single-product",
            "core/post-template",
            "woocommerce/product-template",
          ],
        };
      Object(r.registerBlockType)("woocommerce/product-stock-indicator", {
        ...et,
      });
      var tt = c(602),
        ct = (c(351), c(355)),
        ot = c(288);
      const rt = Object(i.__)("Add to Cart", "woocommerce"),
        nt = Object(o.createElement)(n.a, {
          icon: ot.a,
          className: "wc-block-editor-components-block-icon",
        }),
        at = {
          title: rt,
          description: Object(i.__)(
            "Displays an add to cart button. Optionally displays other add to cart form elements.",
            "woocommerce"
          ),
          icon: { src: nt },
          edit: v({
            icon: nt,
            label: rt,
            description: Object(i.__)(
              "Choose a product to display its add to cart form.",
              "woocommerce"
            ),
          })(({ attributes: e, setAttributes: t }) => {
            const { product: c } = Object(k.useProductDataContext)(),
              { className: r, showFormElements: n } = e;
            return Object(o.createElement)(
              "div",
              { className: d()(r, "wc-block-components-product-add-to-cart") },
              Object(o.createElement)(Le.a, { productId: c.id }),
              Object(o.createElement)(
                l.InspectorControls,
                null,
                Object(o.createElement)(
                  m.PanelBody,
                  { title: Object(i.__)("Layout", "woocommerce") },
                  Object(tt.b)(c)
                    ? Object(o.createElement)(m.ToggleControl, {
                        label: Object(i.__)(
                          "Display form elements",
                          "woocommerce"
                        ),
                        help: Object(i.__)(
                          "Depending on product type, allow customers to select a quantity, variations etc.",
                          "woocommerce"
                        ),
                        checked: n,
                        onChange: () => t({ showFormElements: !n }),
                      })
                    : Object(o.createElement)(
                        m.Notice,
                        {
                          className:
                            "wc-block-components-product-add-to-cart-notice",
                          isDismissible: !1,
                          status: "info",
                        },
                        Object(i.__)(
                          "This product does not support the block based add to cart form. A link to the product page will be shown instead.",
                          "woocommerce"
                        )
                      )
                )
              ),
              Object(o.createElement)(
                m.Disabled,
                null,
                Object(o.createElement)(ct.a, { ...e })
              )
            );
          }),
          attributes: c(354).a,
        };
      Object(s.c)("woocommerce/product-add-to-cart", { ...b, ...at });
      var st = c(327);
      c(423);
      const lt = ({ numberOfLines: e = 1 }) => {
        const t = Array.from({ length: e }, (e, t) =>
          Object(o.createElement)("span", {
            className: "wc-block-components-skeleton-text-line",
            "aria-hidden": "true",
            key: t,
          })
        );
        return Object(o.createElement)(
          "div",
          { className: "wc-block-components-skeleton" },
          t
        );
      };
      c(367);
      c(424);
      const it = {
        edit: (e) => {
          const { setAttributes: t } = e,
            c = Object(l.useBlockProps)({
              className: "wc-block-add-to-cart-form",
            }),
            { isDescendentOfSingleProductBlock: r } = ce({
              blockClientId: null == c ? void 0 : c.id,
            });
          return (
            Object(o.useEffect)(() => {
              t({ isDescendentOfSingleProductBlock: r });
            }, [t, r]),
            Object(o.createElement)(
              "div",
              { ...c },
              Object(o.createElement)(
                m.Tooltip,
                {
                  text: "Customer will see product add-to-cart options in this space, dependend on the product type. ",
                  position: "bottom right",
                },
                Object(o.createElement)(
                  "div",
                  { className: "wc-block-editor-container" },
                  Object(o.createElement)(lt, { numberOfLines: 3 }),
                  Object(o.createElement)(
                    m.Disabled,
                    null,
                    Object(o.createElement)("input", {
                      type: "number",
                      value: "1",
                      className: "wc-block-editor-add-to-cart-form__quantity",
                      readOnly: !0,
                    }),
                    Object(o.createElement)(
                      m.Button,
                      {
                        variant: "primary",
                        className: "wc-block-editor-add-to-cart-form__button",
                      },
                      Object(i.__)("Add to cart", "woocommerce")
                    )
                  )
                )
              )
            )
          );
        },
        icon: {
          src: Object(o.createElement)(n.a, {
            icon: _e.a,
            className: "wc-block-editor-components-block-icon",
          }),
        },
        ancestor: ["woocommerce/single-product"],
        save: () => null,
      };
      Object(ee.a)({
        blockName: st.name,
        blockMetadata: st,
        blockSettings: it,
        isAvailableOnPostEditor: !0,
      });
      var ut = c(625),
        dt = c(17),
        bt = c(21);
      c(425);
      const pt = () =>
        Object(o.createElement)(
          "div",
          { className: "wc-block-editor-product-gallery" },
          Object(o.createElement)("img", {
            src: `${dt.n}block-placeholders/product-image-gallery.svg`,
            alt: "Placeholder",
          }),
          Object(o.createElement)(
            "div",
            { className: "wc-block-editor-product-gallery__other-images" },
            [...Array(4).keys()].map((e) =>
              Object(o.createElement)("img", {
                key: e,
                src: `${dt.n}block-placeholders/product-image-gallery.svg`,
                alt: "Placeholder",
              })
            )
          )
        );
      var mt = c(328);
      c(426),
        Object(ee.a)({
          blockName: mt.name,
          blockMetadata: mt,
          blockSettings: {
            icon: ut.a,
            edit: ({ context: e }) => {
              const t = Object(l.useBlockProps)();
              return Object(bt.a)(e)
                ? Object(o.createElement)(
                    "div",
                    { ...t },
                    Object(o.createElement)(
                      m.Disabled,
                      null,
                      Object(o.createElement)(pt, null)
                    )
                  )
                : Object(o.createElement)(o.Fragment, null);
            },
          },
          isAvailableOnPostEditor: !1,
        });
      var gt = Object(o.createElement)(
          O.SVG,
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
          Object(o.createElement)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            fill: "currentColor",
            d: "M5 5.5H19C19.1326 5.5 19.2598 5.55268 19.3536 5.64645C19.4473 5.74021 19.5 5.86739 19.5 6V7.5C19.5 7.63261 19.4473 7.75979 19.3536 7.85355C19.2598 7.94732 19.1326 8 19 8H5C4.86739 8 4.74021 7.94732 4.64645 7.85355C4.55268 7.75979 4.5 7.63261 4.5 7.5V6C4.5 5.86739 4.55268 5.74021 4.64645 5.64645C4.74021 5.55268 4.86739 5.5 5 5.5V5.5ZM4 9.232C3.69597 9.05647 3.4435 8.804 3.26796 8.49997C3.09243 8.19594 3.00001 7.85106 3 7.5V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V7.5C21 7.85106 20.9076 8.19594 20.732 8.49997C20.5565 8.804 20.304 9.05647 20 9.232V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V9.232ZM5.5 9.5V18C5.5 18.1326 5.55268 18.2598 5.64645 18.3536C5.74021 18.4473 5.86739 18.5 6 18.5H18C18.1326 18.5 18.2598 18.4473 18.3536 18.3536C18.4473 18.2598 18.5 18.1326 18.5 18V9.5H5.5Z",
          }),
          Object(o.createElement)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8 13.25V11.75H16V13.25L8 13.25Z",
          }),
          Object(o.createElement)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8 16.25V14.75H16V16.25H8Z",
          })
        ),
        Ot = c(329);
      const jt = ({ id: e, title: t, active: c }) =>
          Object(o.createElement)(
            "li",
            {
              className: d()(`${e}_tab`, { active: c }),
              id: `tab-title-${e}`,
              role: "tab",
              "aria-controls": `tab-${e}`,
            },
            Object(o.createElement)("a", { href: `#tab-${e}` }, t)
          ),
        ht = ({ id: e, content: t }) =>
          Object(o.createElement)(
            "div",
            {
              className: `${e}_tab`,
              id: `tab-title-${e}`,
              role: "tab",
              "aria-controls": `tab-${e}`,
            },
            t
          );
      var _t = () => {
        const e = Object(l.useBlockProps)(),
          t = [
            {
              id: "description",
              title: "Description",
              active: !0,
              content: Object(i.__)(
                "This block lists description, attributes and reviews for a single product.",
                "woocommerce"
              ),
            },
            {
              id: "additional_information",
              title: "Additional Information",
              active: !1,
            },
            { id: "reviews", title: "Reviews", active: !1 },
          ],
          c = t.map(({ id: e, title: t, active: c }) =>
            Object(o.createElement)(jt, { key: e, id: e, title: t, active: c })
          ),
          r = t.map(({ id: e, content: t }) =>
            Object(o.createElement)(ht, { key: e, id: e, content: t })
          );
        return Object(o.createElement)(
          "div",
          { ...e },
          Object(o.createElement)(
            "ul",
            { className: "wc-tabs tabs", role: "tablist" },
            c
          ),
          r
        );
      };
      c(427),
        Object(ee.a)({
          blockName: Ot.name,
          blockMetadata: Ot,
          blockSettings: {
            icon: {
              src: Object(o.createElement)(n.a, {
                icon: gt,
                className: "wc-block-editor-components-block-icon",
              }),
            },
            edit: ({ attributes: e }) => {
              const { className: t } = e,
                c = Object(l.useBlockProps)({ className: t });
              return Object(o.createElement)(
                o.Fragment,
                null,
                Object(o.createElement)(
                  "div",
                  { ...c },
                  Object(o.createElement)(
                    m.Disabled,
                    null,
                    Object(o.createElement)(_t, null)
                  )
                )
              );
            },
          },
          isAvailableOnPostEditor: !1,
        });
      var wt = c(330),
        Et = () => {
          const e = Object(l.useBlockProps)();
          return Object(o.createElement)(
            "div",
            { ...e },
            Object(o.createElement)(
              m.Notice,
              {
                className: "wc-block-editor-related-products__notice",
                status: "info",
                isDismissible: !1,
              },
              Object(o.createElement)(
                "p",
                null,
                Object(i.__)(
                  "The products reviews and the form to add a new review will be displayed here according to your theme. The look you see here is not representative of what is going to look like, this is just a placeholder.",
                  "woocommerce"
                )
              )
            ),
            Object(o.createElement)(
              "h2",
              null,
              Object(i.__)("3 reviews for this product", "woocommerce")
            ),
            Object(o.createElement)("img", {
              src: `${dt.n}block-placeholders/product-reviews.svg`,
              alt: "Placeholder",
            }),
            Object(o.createElement)(
              "h3",
              null,
              Object(i.__)("Add a review", "woocommerce")
            ),
            Object(o.createElement)(
              "div",
              {
                className:
                  "wp-block-woocommerce-product-reviews__editor__form-container",
              },
              Object(o.createElement)(
                "div",
                {
                  className:
                    "wp-block-woocommerce-product-reviews__editor__row",
                },
                Object(o.createElement)(
                  "span",
                  null,
                  Object(i.__)("Your rating *", "woocommerce")
                ),
                Object(o.createElement)("p", {
                  className:
                    "wp-block-woocommerce-product-reviews__editor__stars",
                })
              ),
              Object(o.createElement)(
                "div",
                {
                  className:
                    "wp-block-woocommerce-product-reviews__editor__row",
                },
                Object(o.createElement)(
                  "span",
                  null,
                  Object(i.__)("Your review *", "woocommerce")
                ),
                Object(o.createElement)("textarea", null)
              ),
              Object(o.createElement)("input", {
                type: "submit",
                className: "submit wp-block-button__link wp-element-button",
                value: Object(i.__)("Submit", "woocommerce"),
              })
            )
          );
        };
      c(428),
        Object(ee.a)({
          blockName: wt.name,
          blockMetadata: wt,
          blockSettings: {
            edit: ({ attributes: e }) => {
              const { className: t } = e,
                c = Object(l.useBlockProps)({ className: t });
              return Object(o.createElement)(
                o.Fragment,
                null,
                Object(o.createElement)(
                  "div",
                  { ...c },
                  Object(o.createElement)(
                    m.Disabled,
                    null,
                    Object(o.createElement)(Et, null)
                  )
                )
              );
            },
          },
          isAvailableOnPostEditor: !1,
        });
      var ft = c(368);
      c(429);
      var kt = c(332);
      Object(ee.a)({
        blockName: kt.name,
        blockMetadata: kt,
        blockSettings: {
          icon: Ye.a,
          edit: () => {
            const e = [["core/query", ft.a, ft.b]],
              t = Object(l.useBlockProps)();
            return Object(o.createElement)(
              "div",
              { ...t },
              Object(o.createElement)(
                l.InspectorControls,
                null,
                Object(o.createElement)(
                  m.Notice,
                  {
                    className: "wc-block-editor-related-products__notice",
                    status: "warning",
                    isDismissible: !1,
                  },
                  Object(o.createElement)(
                    "p",
                    null,
                    Object(i.__)(
                      "These products will vary depending on the main product in the page",
                      "woocommerce"
                    )
                  )
                )
              ),
              Object(o.createElement)(l.InnerBlocks, { template: e })
            );
          },
          save: () => {
            const e = l.useBlockProps.save();
            return Object(o.createElement)(
              "div",
              { ...e },
              Object(o.createElement)(l.InnerBlocks.Content, null)
            );
          },
        },
        isAvailableOnPostEditor: !1,
      });
      var vt = Object(o.createElement)(
        O.SVG,
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
        Object(o.createElement)("path", {
          id: "icon/action/view_list_24px",
          fillRule: "evenodd",
          clipRule: "evenodd",
          fill: "currentColor",
          d: "M5 5.5H19C19.1326 5.5 19.2598 5.55268 19.3536 5.64645C19.4473 5.74021 19.5 5.86739 19.5 6V7.5C19.5 7.63261 19.4473 7.75979 19.3536 7.85355C19.2598 7.94732 19.1326 8 19 8H5C4.86739 8 4.74021 7.94732 4.64645 7.85355C4.55268 7.75979 4.5 7.63261 4.5 7.5V6C4.5 5.86739 4.55268 5.74021 4.64645 5.64645C4.74021 5.55268 4.86739 5.5 5 5.5V5.5ZM4 9.232C3.69597 9.05647 3.4435 8.804 3.26796 8.49997C3.09243 8.19594 3.00001 7.85106 3 7.5V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V7.5C21 7.85106 20.9076 8.19594 20.732 8.49997C20.5565 8.804 20.304 9.05647 20 9.232V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V9.232ZM5.5 9.5V18C5.5 18.1326 5.55268 18.2598 5.64645 18.3536C5.74021 18.4473 5.86739 18.5 6 18.5H18C18.1326 18.5 18.2598 18.4473 18.3536 18.3536C18.4473 18.2598 18.5 18.1326 18.5 18V9.5H5.5Z",
        }),
        Object(o.createElement)("circle", { cx: "9", cy: "14", r: "1" }),
        Object(o.createElement)("circle", { cx: "12", cy: "14", r: "1" }),
        Object(o.createElement)("circle", { cx: "15", cy: "14", r: "1" })
      );
      c(430);
      var yt = c(333);
      Object(ee.a)({
        blockName: yt.name,
        blockMetadata: yt,
        blockSettings: {
          edit: () => {
            const e = [
                [
                  "core/group",
                  { layout: { type: "flex", flexWrap: "nowrap" } },
                  [
                    [
                      "woocommerce/product-sku",
                      { isDescendentOfSingleProductTemplate: T() },
                    ],
                    [
                      "core/post-terms",
                      { prefix: "Category: ", term: "product_cat" },
                    ],
                    [
                      "core/post-terms",
                      { prefix: "Tags: ", term: "product_tag" },
                    ],
                  ],
                ],
              ],
              t = Object(l.useBlockProps)();
            return Object(o.createElement)(
              "div",
              { ...t },
              Object(o.createElement)(l.InnerBlocks, { template: e })
            );
          },
          save: () => {
            const e = l.useBlockProps.save();
            return Object(o.createElement)(
              "div",
              { ...e },
              Object(o.createElement)(l.InnerBlocks.Content, null)
            );
          },
          icon: {
            src: Object(o.createElement)(n.a, {
              icon: vt,
              className: "wc-block-editor-components-block-icon",
            }),
          },
          ancestor: ["woocommerce/single-product"],
        },
        isAvailableOnPostEditor: !0,
      });
      var St = c(238);
      const Ct = (e, t) => {
          const { className: c, contentVisibility: o } = t;
          return d()(e, c, {
            "has-image": o && o.image,
            "has-title": o && o.title,
            "has-rating": o && o.rating,
            "has-price": o && o.price,
            "has-button": o && o.button,
          });
        },
        { attributes: xt } = St;
      var Nt = [
          {
            attributes: Object.assign({}, xt, {
              rows: { type: "number", default: 1 },
            }),
            save({ attributes: e }) {
              const t = { "data-attributes": JSON.stringify(e) };
              return Object(o.createElement)(
                "div",
                { className: Ct("wc-block-all-products", e), ...t },
                Object(o.createElement)(l.InnerBlocks.Content, null)
              );
            },
          },
        ],
        Pt = c(18),
        Tt = c.n(Pt),
        It = c(74),
        At = c(597),
        Bt = c(432),
        Rt = c(211);
      const Dt = [
          ["woocommerce/product-image", { imageSizing: W.a.THUMBNAIL }],
          ["woocommerce/product-title"],
          ["woocommerce/product-price"],
          ["woocommerce/product-rating"],
          ["woocommerce/product-button"],
        ],
        Lt = (e) =>
          e && 0 !== e.length
            ? e.map((e) => {
                var t, c;
                return [
                  e.name,
                  {
                    ...e.attributes,
                    product: void 0,
                    children: e.innerBlocks.length > 0 ? Lt(e.innerBlocks) : [],
                    ...(e.name === fe.name && {
                      className: d()(e.attributes.className, {
                        [`has-custom-width wp-block-button__width-${
                          null === (t = e.attributes) || void 0 === t
                            ? void 0
                            : t.width
                        }`]:
                          null === (c = e.attributes) || void 0 === c
                            ? void 0
                            : c.width,
                      }),
                    }),
                    isDescendantOfAllProducts: !0,
                  },
                ];
              })
            : [];
      var Ft = c(116),
        Vt = c.n(Ft),
        Mt = c(29);
      c(435);
      var $t = ({
          currentPage: e,
          displayFirstAndLastPages: t = !0,
          displayNextAndPreviousArrows: c = !0,
          pagesToDisplay: r = 3,
          onPageChange: n,
          totalPages: a,
        }) => {
          let { minIndex: s, maxIndex: l } = ((e, t, c) => {
            if (c <= 2) return { minIndex: null, maxIndex: null };
            const o = e - 1,
              r = Math.max(Math.floor(t - o / 2), 2),
              n = Math.min(Math.ceil(t + (o - (t - r))), c - 1);
            return {
              minIndex: Math.max(Math.floor(t - (o - (n - t))), 2),
              maxIndex: n,
            };
          })(r, e, a);
          const u = t && Boolean(1 !== s),
            b = t && Boolean(l !== a),
            p = t && Boolean(s && s > 3),
            m = t && Boolean(l && l < a - 2);
          u && 3 === s && (s -= 1), b && l === a - 2 && (l += 1);
          const g = [];
          if (s && l) for (let e = s; e <= l; e++) g.push(e);
          return Object(o.createElement)(
            "div",
            { className: "wc-block-pagination wc-block-components-pagination" },
            Object(o.createElement)(Mt.a, {
              screenReaderLabel: Object(i.__)(
                "Navigate to another page",
                "woocommerce"
              ),
            }),
            c &&
              Object(o.createElement)(
                "button",
                {
                  className:
                    "wc-block-pagination-page wc-block-components-pagination__page wc-block-components-pagination-page--arrow",
                  onClick: () => n(e - 1),
                  title: Object(i.__)("Previous page", "woocommerce"),
                  disabled: e <= 1,
                },
                Object(o.createElement)(Mt.a, {
                  label: "←",
                  screenReaderLabel: Object(i.__)(
                    "Previous page",
                    "woocommerce"
                  ),
                })
              ),
            u &&
              Object(o.createElement)(
                "button",
                {
                  className: d()(
                    "wc-block-pagination-page",
                    "wc-block-components-pagination__page",
                    {
                      "wc-block-pagination-page--active": 1 === e,
                      "wc-block-components-pagination__page--active": 1 === e,
                    }
                  ),
                  onClick: () => n(1),
                  disabled: 1 === e,
                },
                Object(o.createElement)(Mt.a, {
                  label: "1",
                  screenReaderLabel: Object(i.sprintf)(
                    /* translators: %d is the page number (1, 2, 3...). */
                    Object(i.__)("Page %d", "woocommerce"),
                    1
                  ),
                })
              ),
            p &&
              Object(o.createElement)(
                "span",
                {
                  className:
                    "wc-block-pagination-ellipsis wc-block-components-pagination__ellipsis",
                  "aria-hidden": "true",
                },
                Object(i.__)("…", "woocommerce")
              ),
            g.map((t) =>
              Object(o.createElement)(
                "button",
                {
                  key: t,
                  className: d()(
                    "wc-block-pagination-page",
                    "wc-block-components-pagination__page",
                    {
                      "wc-block-pagination-page--active": e === t,
                      "wc-block-components-pagination__page--active": e === t,
                    }
                  ),
                  onClick: e === t ? void 0 : () => n(t),
                  disabled: e === t,
                },
                Object(o.createElement)(Mt.a, {
                  label: t.toString(),
                  screenReaderLabel: Object(i.sprintf)(
                    /* translators: %d is the page number (1, 2, 3...). */
                    Object(i.__)("Page %d", "woocommerce"),
                    t
                  ),
                })
              )
            ),
            m &&
              Object(o.createElement)(
                "span",
                {
                  className:
                    "wc-block-pagination-ellipsis wc-block-components-pagination__ellipsis",
                  "aria-hidden": "true",
                },
                Object(i.__)("…", "woocommerce")
              ),
            b &&
              Object(o.createElement)(
                "button",
                {
                  className: d()(
                    "wc-block-pagination-page",
                    "wc-block-components-pagination__page",
                    {
                      "wc-block-pagination-page--active": e === a,
                      "wc-block-components-pagination__page--active": e === a,
                    }
                  ),
                  onClick: () => n(a),
                  disabled: e === a,
                },
                Object(o.createElement)(Mt.a, {
                  label: a.toString(),
                  screenReaderLabel: Object(i.sprintf)(
                    /* translators: %d is the page number (1, 2, 3...). */
                    Object(i.__)("Page %d", "woocommerce"),
                    a
                  ),
                })
              ),
            c &&
              Object(o.createElement)(
                "button",
                {
                  className:
                    "wc-block-pagination-page wc-block-components-pagination__page wc-block-components-pagination-page--arrow",
                  onClick: () => n(e + 1),
                  title: Object(i.__)("Next page", "woocommerce"),
                  disabled: e >= a,
                },
                Object(o.createElement)(Mt.a, {
                  label: "→",
                  screenReaderLabel: Object(i.__)("Next page", "woocommerce"),
                })
              )
          );
        },
        Ht = c(103),
        zt = c(62),
        qt = c(120),
        Gt = c(8),
        Qt = c(47);
      var Wt = c(97);
      c(436);
      const Yt = (e) => {
        if (!e) return;
        const t = e.getBoundingClientRect().bottom;
        (t >= 0 && t <= window.innerHeight) || e.scrollIntoView();
      };
      var Ut = c(46),
        Kt = c(212),
        Jt = () => {
          const { parentClassName: e } = Object(k.useInnerBlockLayoutContext)();
          return Object(o.createElement)(
            "div",
            { className: `${e}__no-products` },
            Object(o.createElement)(n.a, {
              className: `${e}__no-products-image`,
              icon: Kt.a,
              size: 100,
            }),
            Object(o.createElement)(
              "strong",
              { className: `${e}__no-products-title` },
              Object(i.__)("No products", "woocommerce")
            ),
            Object(o.createElement)(
              "p",
              { className: `${e}__no-products-description` },
              Object(i.__)(
                "There are currently no products available to display.",
                "woocommerce"
              )
            )
          );
        },
        Zt = c(626),
        Xt = ({ resetCallback: e = () => {} }) => {
          const { parentClassName: t } = Object(k.useInnerBlockLayoutContext)();
          return Object(o.createElement)(
            "div",
            { className: `${t}__no-products` },
            Object(o.createElement)(n.a, {
              className: `${t}__no-products-image`,
              icon: Zt.a,
              size: 100,
            }),
            Object(o.createElement)(
              "strong",
              { className: `${t}__no-products-title` },
              Object(i.__)("No products found", "woocommerce")
            ),
            Object(o.createElement)(
              "p",
              { className: `${t}__no-products-description` },
              Object(i.__)(
                "We were unable to find any results based on your search.",
                "woocommerce"
              )
            ),
            Object(o.createElement)(
              "button",
              { onClick: e },
              Object(i.__)("Reset Search", "woocommerce")
            )
          );
        },
        ec = c(137);
      c(434);
      var tc = ({ onChange: e, value: t }) =>
        Object(o.createElement)(ec.a, {
          className:
            "wc-block-product-sort-select wc-block-components-product-sort-select",
          onChange: e,
          options: [
            {
              key: "menu_order",
              label: Object(i.__)("Default sorting", "woocommerce"),
            },
            {
              key: "popularity",
              label: Object(i.__)("Popularity", "woocommerce"),
            },
            {
              key: "rating",
              label: Object(i.__)("Average rating", "woocommerce"),
            },
            { key: "date", label: Object(i.__)("Latest", "woocommerce") },
            {
              key: "price",
              label: Object(i.__)("Price: low to high", "woocommerce"),
            },
            {
              key: "price-desc",
              label: Object(i.__)("Price: high to low", "woocommerce"),
            },
          ],
          screenReaderLabel: Object(i.__)("Order products by", "woocommerce"),
          value: t,
        });
      const cc = (e, t, c, r) => {
        if (!c) return;
        const n = Object(At.a)(e);
        return c.map(([c, a = {}], s) => {
          let l = [];
          a.children && a.children.length > 0 && (l = cc(e, t, a.children, r));
          const i = n[c];
          if (!i) return null;
          const u = t.id || 0,
            d = ["layout", c, s, r, u];
          return Object(o.createElement)(
            o.Suspense,
            {
              key: d.join("_"),
              fallback: Object(o.createElement)("div", {
                className: "wc-block-placeholder",
              }),
            },
            Object(o.createElement)(i, { ...a, children: l, product: t })
          );
        });
      };
      var oc = Object(g.withInstanceId)(
        ({ product: e = {}, attributes: t, instanceId: c }) => {
          const { layoutConfig: r } = t,
            { parentClassName: n, parentName: a } = Object(
              k.useInnerBlockLayoutContext
            )(),
            s = 0 === Object.keys(e).length,
            l = d()(`${n}__product`, "wc-block-layout", { "is-loading": s });
          return Object(o.createElement)(
            "li",
            { className: l, "aria-hidden": s },
            cc(a, e, r, c)
          );
        }
      );
      c(433);
      const rc = (e) => {
          switch (e) {
            case "menu_order":
            case "popularity":
            case "rating":
            case "price":
              return { orderby: e, order: "asc" };
            case "price-desc":
              return { orderby: "price", order: "desc" };
            case "date":
              return { orderby: "date", order: "desc" };
          }
        },
        nc = ({ totalQuery: e, totalProducts: t }, { totalQuery: c } = {}) =>
          !Vt()(e, c) && Number.isFinite(t);
      var ac,
        sc =
          ((ac = ({
            attributes: e,
            currentPage: t,
            onPageChange: c,
            onSortChange: r,
            sortValue: n,
            scrollToTop: a,
          }) => {
            const [s, l] = Object(zt.b)("attributes", []),
              [u, b] = Object(zt.b)("stock_status", []),
              [p, m] = Object(zt.b)("rating", []),
              [g, O] = Object(zt.b)("min_price"),
              [j, h] = Object(zt.b)("max_price"),
              [_] = Object(zt.c)(
                (({ sortValue: e, currentPage: t, attributes: c }) => {
                  const { columns: o, rows: r } = c;
                  return {
                    ...rc(e),
                    catalog_visibility: "catalog",
                    per_page: o * r,
                    page: t,
                  };
                })({ attributes: e, sortValue: n, currentPage: t })
              ),
              {
                products: w,
                totalProducts: E,
                productsLoading: f,
              } = ((e) => {
                const t = {
                    namespace: "/wc/store/v1",
                    resourceName: "products",
                  },
                  { results: c, isLoading: o } = Object(qt.a)({
                    ...t,
                    query: e,
                  }),
                  { value: r } = ((e, t) => {
                    const {
                      namespace: c,
                      resourceName: o,
                      resourceValues: r = [],
                      query: n = {},
                    } = t;
                    if (!c || !o)
                      throw new Error(
                        "The options object must have valid values for the namespace and the resource name properties."
                      );
                    const a = Object(Qt.a)(n),
                      s = Object(Qt.a)(r),
                      { value: l, isLoading: i = !0 } = Object(P.useSelect)(
                        (t) => {
                          const r = t(Gt.COLLECTIONS_STORE_KEY),
                            n = [e, c, o, a, s];
                          return {
                            value: r.getCollectionHeader(...n),
                            isLoading: r.hasFinishedResolution(
                              "getCollectionHeader",
                              n
                            ),
                          };
                        },
                        [e, c, o, s, a]
                      );
                    return { value: l, isLoading: i };
                  })("x-wp-total", { ...t, query: e });
                return {
                  products: c,
                  totalProducts: parseInt(r, 10),
                  productsLoading: o,
                };
              })(_),
              { parentClassName: v, parentName: y } = Object(
                k.useInnerBlockLayoutContext
              )(),
              S = ((e) => {
                const { order: t, orderby: c, page: o, per_page: r, ...n } = e;
                return n || {};
              })(_),
              { dispatchStoreEvent: C } = Object(Wt.a)(),
              x = Object(Ht.a)({ totalQuery: S, totalProducts: E }, nc);
            Object(o.useEffect)(() => {
              C("product-list-render", { products: w, listName: y });
            }, [w, y, C]),
              Object(o.useEffect)(() => {
                Vt()(S, null == x ? void 0 : x.totalQuery) ||
                  (c(1),
                  null != x &&
                    x.totalQuery &&
                    ((e) => {
                      Number.isFinite(e) &&
                        (0 === e
                          ? Object(Ut.speak)(
                              Object(i.__)("No products found", "woocommerce")
                            )
                          : Object(Ut.speak)(
                              Object(i.sprintf)(
                                /* translators: %s is an integer higher than 0 (1, 2, 3...) */
                                Object(i._n)(
                                  "%d product found",
                                  "%d products found",
                                  e,
                                  "woocommerce"
                                ),
                                e
                              )
                            ));
                    })(E));
              }, [null == x ? void 0 : x.totalQuery, E, c, S]);
            const { contentVisibility: N } = e,
              T = e.columns * e.rows,
              I =
                !Number.isFinite(E) &&
                Number.isFinite(null == x ? void 0 : x.totalProducts) &&
                Vt()(S, null == x ? void 0 : x.totalQuery)
                  ? Math.ceil(((null == x ? void 0 : x.totalProducts) || 0) / T)
                  : Math.ceil(E / T),
              A = w.length ? w : Array.from({ length: T }),
              B = 0 !== w.length || f,
              R =
                s.length > 0 ||
                u.length > 0 ||
                p.length > 0 ||
                Number.isFinite(g) ||
                Number.isFinite(j);
            return Object(o.createElement)(
              "div",
              {
                className: (() => {
                  const { columns: t, rows: c, alignButtons: o, align: r } = e,
                    n = void 0 !== r ? "align" + r : "";
                  return d()(v, n, "has-" + t + "-columns", {
                    "has-multiple-rows": c > 1,
                    "has-aligned-buttons": o,
                  });
                })(),
              },
              (null == N ? void 0 : N.orderBy) &&
                B &&
                Object(o.createElement)(tc, { onChange: r, value: n }),
              !B &&
                R &&
                Object(o.createElement)(Xt, {
                  resetCallback: () => {
                    l([]), b([]), m([]), O(null), h(null);
                  },
                }),
              !B && !R && Object(o.createElement)(Jt, null),
              B &&
                Object(o.createElement)(
                  "ul",
                  {
                    className: d()(`${v}__products`, {
                      "is-loading-products": f,
                    }),
                  },
                  A.map((t = {}, c) =>
                    Object(o.createElement)(oc, {
                      key: t.id || c,
                      attributes: e,
                      product: t,
                    })
                  )
                ),
              I > 1 &&
                Object(o.createElement)($t, {
                  currentPage: t,
                  onPageChange: (e) => {
                    a({ focusableSelector: "a, button" }), c(e);
                  },
                  totalPages: I,
                })
            );
          }),
          (e) => {
            const t = Object(o.useRef)(null);
            return Object(o.createElement)(
              o.Fragment,
              null,
              Object(o.createElement)("div", {
                className: "with-scroll-to-top__scroll-point",
                ref: t,
                "aria-hidden": !0,
              }),
              Object(o.createElement)(ac, {
                ...e,
                scrollToTop: (e) => {
                  null !== t.current &&
                    ((e, t) => {
                      const { focusableSelector: c } = t || {};
                      window &&
                        Number.isFinite(window.innerHeight) &&
                        (c
                          ? ((e, t) => {
                              var c;
                              const o =
                                (null === (c = e.parentElement) || void 0 === c
                                  ? void 0
                                  : c.querySelectorAll(t)) || [];
                              if (o.length) {
                                const e = o[0];
                                Yt(e), null == e || e.focus();
                              } else Yt(e);
                            })(e, c)
                          : Yt(e));
                    })(t.current, e);
                },
              })
            );
          }),
        lc = ({ attributes: e }) => {
          const [t, c] = Object(o.useState)(1),
            [r, n] = Object(o.useState)(e.orderby);
          return (
            Object(o.useEffect)(() => {
              n(e.orderby);
            }, [e.orderby]),
            Object(o.createElement)(sc, {
              attributes: e,
              currentPage: t,
              onPageChange: (e) => {
                c(e);
              },
              onSortChange: (e) => {
                var t;
                const o =
                  null == e || null === (t = e.target) || void 0 === t
                    ? void 0
                    : t.value;
                n(o), c(1);
              },
              sortValue: r,
            })
          );
        },
        ic = c(167),
        uc = c(13);
      class dc extends o.Component {
        render() {
          const { attributes: e, urlParameterSuffix: t } = this.props;
          return e.isPreview
            ? ic.a
            : Object(o.createElement)(
                k.InnerBlockLayoutContextProvider,
                {
                  parentName: "woocommerce/all-products",
                  parentClassName: "wc-block-grid",
                },
                Object(o.createElement)(uc.StoreNoticesContainer, {
                  context: "wc/all-products",
                }),
                Object(o.createElement)(lc, {
                  attributes: e,
                  urlParameterSuffix: t,
                })
              );
        }
      }
      var bc = dc;
      c(431);
      class pc extends o.Component {
        constructor(...e) {
          super(...e),
            Tt()(this, "state", { isEditing: !1, innerBlocks: [] }),
            Tt()(this, "blockMap", Object(At.a)("woocommerce/all-products")),
            Tt()(this, "componentDidMount", () => {
              const { block: e } = this.props;
              this.setState({ innerBlocks: e.innerBlocks });
            }),
            Tt()(this, "getTitle", () =>
              Object(i.__)("All Products", "woocommerce")
            ),
            Tt()(this, "getIcon", () =>
              Object(o.createElement)(n.a, { icon: a.a })
            ),
            Tt()(this, "togglePreview", () => {
              const { debouncedSpeak: e } = this.props;
              this.setState({ isEditing: !this.state.isEditing }),
                this.state.isEditing ||
                  e(
                    Object(i.__)(
                      "Hiển thịProducts block preview.",
                      "woocommerce"
                    )
                  );
            }),
            Tt()(this, "getInspectorControls", () => {
              const { attributes: e, setAttributes: t } = this.props,
                { columns: c, rows: r, alignButtons: n } = e;
              return Object(o.createElement)(
                l.InspectorControls,
                { key: "inspector" },
                Object(o.createElement)(
                  m.PanelBody,
                  {
                    title: Object(i.__)("Layout Settings", "woocommerce"),
                    initialOpen: !0,
                  },
                  Object(o.createElement)(It.a, {
                    columns: c,
                    rows: r,
                    alignButtons: n,
                    setAttributes: t,
                    minColumns: Object(M.getSetting)("minColumns", 1),
                    maxColumns: Object(M.getSetting)("maxColumns", 6),
                    minRows: Object(M.getSetting)("minRows", 1),
                    maxRows: Object(M.getSetting)("maxRows", 6),
                  })
                ),
                Object(o.createElement)(
                  m.PanelBody,
                  { title: Object(i.__)("Content Settings", "woocommerce") },
                  ((e, t) => {
                    const { contentVisibility: c } = e;
                    return Object(o.createElement)(m.ToggleControl, {
                      label: Object(i.__)(
                        "Show Sorting Dropdown",
                        "woocommerce"
                      ),
                      checked: c.orderBy,
                      onChange: () =>
                        t({ contentVisibility: { ...c, orderBy: !c.orderBy } }),
                    });
                  })(e, t),
                  ((e, t) =>
                    Object(o.createElement)(m.SelectControl, {
                      label: Object(i.__)("Order Products By", "woocommerce"),
                      value: e.orderby,
                      options: [
                        {
                          label: Object(i.__)(
                            "Default sorting (menu order)",
                            "woocommerce"
                          ),
                          value: "menu_order",
                        },
                        {
                          label: Object(i.__)("Popularity", "woocommerce"),
                          value: "popularity",
                        },
                        {
                          label: Object(i.__)("Average rating", "woocommerce"),
                          value: "rating",
                        },
                        {
                          label: Object(i.__)("Latest", "woocommerce"),
                          value: "date",
                        },
                        {
                          label: Object(i.__)(
                            "Price: low to high",
                            "woocommerce"
                          ),
                          value: "price",
                        },
                        {
                          label: Object(i.__)(
                            "Price: high to low",
                            "woocommerce"
                          ),
                          value: "price-desc",
                        },
                      ],
                      onChange: (e) => t({ orderby: e }),
                    }))(e, t)
                )
              );
            }),
            Tt()(this, "getBlockControls", () => {
              const { isEditing: e } = this.state;
              return Object(o.createElement)(
                l.BlockControls,
                null,
                Object(o.createElement)(m.ToolbarGroup, {
                  controls: [
                    {
                      icon: "edit",
                      title: Object(i.__)(
                        "Edit the layout of each product",
                        "woocommerce"
                      ),
                      onClick: () => this.togglePreview(),
                      isActive: e,
                    },
                  ],
                })
              );
            }),
            Tt()(this, "renderEditMode", () => {
              const e = {
                template: this.props.attributes.layoutConfig,
                templateLock: !1,
                allowedBlocks: Object.keys(this.blockMap),
              };
              return (
                0 !== this.props.attributes.layoutConfig.length &&
                  (e.renderAppender = !1),
                Object(o.createElement)(
                  m.Placeholder,
                  { icon: this.getIcon(), label: this.getTitle() },
                  Object(i.__)(
                    "Display all products from your store as a grid.",
                    "woocommerce"
                  ),
                  Object(o.createElement)(
                    "div",
                    { className: "wc-block-all-products-grid-item-template" },
                    Object(o.createElement)(
                      m.Tip,
                      null,
                      Object(i.__)(
                        "Edit the blocks inside the example below to change the content displayed for all products within the product grid.",
                        "woocommerce"
                      )
                    ),
                    Object(o.createElement)(
                      k.InnerBlockLayoutContextProvider,
                      {
                        parentName: "woocommerce/all-products",
                        parentClassName: "wc-block-grid",
                      },
                      Object(o.createElement)(
                        "div",
                        {
                          className:
                            "wc-block-grid wc-block-layout has-1-columns",
                        },
                        Object(o.createElement)(
                          "ul",
                          { className: "wc-block-grid__products" },
                          Object(o.createElement)(
                            "li",
                            { className: "wc-block-grid__product" },
                            Object(o.createElement)(
                              k.ProductDataContextProvider,
                              { product: Bt.a[0] },
                              Object(o.createElement)(l.InnerBlocks, { ...e })
                            )
                          )
                        )
                      )
                    ),
                    Object(o.createElement)(
                      "div",
                      { className: "wc-block-all-products__actions" },
                      Object(o.createElement)(
                        m.Button,
                        {
                          className: "wc-block-all-products__done-button",
                          isPrimary: !0,
                          onClick: () => {
                            const { block: e, setAttributes: t } = this.props;
                            t({ layoutConfig: Lt(e.innerBlocks) }),
                              this.setState({ innerBlocks: e.innerBlocks }),
                              this.togglePreview();
                          },
                        },
                        Object(i.__)("Done", "woocommerce")
                      ),
                      Object(o.createElement)(
                        m.Button,
                        {
                          className: "wc-block-all-products__cancel-button",
                          isTertiary: !0,
                          onClick: () => {
                            const { block: e, replaceInnerBlocks: t } =
                                this.props,
                              { innerBlocks: c } = this.state;
                            t(e.clientId, c, !1), this.togglePreview();
                          },
                        },
                        Object(i.__)("Cancel", "woocommerce")
                      ),
                      Object(o.createElement)(
                        m.Button,
                        {
                          className: "wc-block-all-products__reset-button",
                          icon: Object(o.createElement)(n.a, { icon: a.a }),
                          label: Object(i.__)(
                            "Reset layout to default",
                            "woocommerce"
                          ),
                          onClick: () => {
                            const { block: e, replaceInnerBlocks: t } =
                                this.props,
                              c = [];
                            Dt.map(
                              ([e, t]) => (
                                c.push(Object(r.createBlock)(e, t)), !0
                              )
                            ),
                              t(e.clientId, c, !1),
                              this.setState({ innerBlocks: e.innerBlocks });
                          },
                        },
                        Object(i.__)("Reset Layout", "woocommerce")
                      )
                    )
                  )
                )
              );
            }),
            Tt()(this, "renderViewMode", () => {
              const { attributes: e } = this.props,
                { layoutConfig: t } = e,
                c = t && 0 !== t.length,
                r = this.getTitle(),
                n = this.getIcon();
              return c
                ? Object(o.createElement)(
                    m.Disabled,
                    null,
                    Object(o.createElement)(bc, { attributes: e })
                  )
                : ((e, t) =>
                    Object(o.createElement)(
                      m.Placeholder,
                      { className: "wc-block-products", icon: t, label: e },
                      Object(i.__)(
                        "The content for this block is hidden due to block settings.",
                        "woocommerce"
                      )
                    ))(r, n);
            }),
            Tt()(this, "render", () => {
              const { attributes: e } = this.props,
                { isEditing: t } = this.state,
                c = this.getTitle(),
                r = this.getIcon();
              return 0 === dt.p.productCount
                ? ((e, t) =>
                    Object(o.createElement)(
                      m.Placeholder,
                      { className: "wc-block-products", icon: t, label: e },
                      Object(o.createElement)(
                        "p",
                        null,
                        Object(i.__)(
                          "You haven't published any products to list here yet.",
                          "woocommerce"
                        )
                      ),
                      Object(o.createElement)(
                        m.Button,
                        {
                          className: "wc-block-products__add-product-button",
                          isSecondary: !0,
                          href: M.ADMIN_URL + "post-new.php?post_type=product",
                          target: "_top",
                        },
                        Object(i.__)("Add new product", "woocommerce") + " ",
                        Object(o.createElement)(n.a, { icon: Rt.a })
                      ),
                      Object(o.createElement)(
                        m.Button,
                        {
                          className: "wc-block-products__read_more_button",
                          isTertiary: !0,
                          href: "https://docs.woocommerce.com/document/managing-products/",
                          target: "_blank",
                        },
                        Object(i.__)("Learn more", "woocommerce")
                      )
                    ))(c, r)
                : Object(o.createElement)(
                    "div",
                    { className: Ct("wc-block-all-products", e) },
                    this.getBlockControls(),
                    this.getInspectorControls(),
                    t ? this.renderEditMode() : this.renderViewMode()
                  );
            });
        }
      }
      var mc = Object(g.compose)(
          m.withSpokenMessages,
          Object(P.withSelect)((e, { clientId: t }) => {
            const { getBlock: c } = e("core/block-editor");
            return { block: c(t) };
          }),
          Object(P.withDispatch)((e) => {
            const { replaceInnerBlocks: t } = e("core/block-editor");
            return { replaceInnerBlocks: t };
          })
        )(pc),
        gc = {
          columns: Object(M.getSetting)("defaultColumns", 3),
          rows: Object(M.getSetting)("defaultRows", 3),
          alignButtons: !1,
          contentVisibility: { orderBy: !0 },
          orderby: "date",
          layoutConfig: Dt,
          isPreview: !1,
        };
      const { name: Oc } = St,
        jc = {
          icon: {
            src: Object(o.createElement)(n.a, {
              icon: a.a,
              className: "wc-block-editor-components-block-icon",
            }),
          },
          edit: mc,
          save: function ({ attributes: e }) {
            const t = {};
            Object.keys(e)
              .sort()
              .forEach((c) => {
                t[c] = e[c];
              });
            const c = { "data-attributes": JSON.stringify(t) };
            return Object(o.createElement)(
              "div",
              { className: Ct("wc-block-all-products", e), ...c },
              Object(o.createElement)(l.InnerBlocks.Content, null)
            );
          },
          deprecated: Nt,
          defaults: gc,
        };
      Object(r.registerBlockType)(Oc, jc);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return a;
      });
      var o = c(36),
        r = c(0),
        n = c(17);
      (c.p = n.m),
        Object(o.registerBlockComponent)({
          blockName: "woocommerce/product-price",
          component: Object(r.lazy)(() =>
            Promise.all([c.e(0), c.e(1), c.e(2), c.e(35)]).then(
              c.bind(null, 234)
            )
          ),
        }),
        Object(o.registerBlockComponent)({
          blockName: "woocommerce/product-image",
          component: Object(r.lazy)(() =>
            Promise.all([c.e(0), c.e(1), c.e(2), c.e(4), c.e(32)]).then(
              c.bind(null, 657)
            )
          ),
        }),
        Object(o.registerBlockComponent)({
          blockName: "woocommerce/product-title",
          component: Object(r.lazy)(() =>
            Promise.all([c.e(0), c.e(1), c.e(2), c.e(4), c.e(48)]).then(
              c.bind(null, 658)
            )
          ),
        }),
        Object(o.registerBlockComponent)({
          blockName: "woocommerce/product-rating",
          component: Object(r.lazy)(() =>
            Promise.all([c.e(0), c.e(1), c.e(2), c.e(3), c.e(37)]).then(
              c.bind(null, 235)
            )
          ),
        }),
        Object(o.registerBlockComponent)({
          blockName: "woocommerce/product-rating-stars",
          component: Object(r.lazy)(() =>
            Promise.all([c.e(0), c.e(1), c.e(2), c.e(3), c.e(39)]).then(
              c.bind(null, 361)
            )
          ),
        }),
        Object(o.registerBlockComponent)({
          blockName: "woocommerce/product-rating-counter",
          component: Object(r.lazy)(() =>
            Promise.all([c.e(0), c.e(1), c.e(2), c.e(3), c.e(38)]).then(
              c.bind(null, 362)
            )
          ),
        }),
        Object(o.registerBlockComponent)({
          blockName: "woocommerce/product-average-rating",
          component: Object(r.lazy)(() =>
            Promise.all([c.e(0), c.e(1), c.e(2), c.e(23)]).then(
              c.bind(null, 363)
            )
          ),
        }),
        Object(o.registerBlockComponent)({
          blockName: "woocommerce/product-button",
          component: Object(r.lazy)(() =>
            Promise.all([c.e(0), c.e(1), c.e(2), c.e(3), c.e(25)]).then(
              c.bind(null, 236)
            )
          ),
        }),
        Object(o.registerBlockComponent)({
          blockName: "woocommerce/product-summary",
          component: Object(r.lazy)(() =>
            Promise.all([c.e(0), c.e(1), c.e(2), c.e(45)]).then(
              c.bind(null, 364)
            )
          ),
        }),
        Object(o.registerBlockComponent)({
          blockName: "woocommerce/product-sale-badge",
          component: Object(r.lazy)(() =>
            Promise.all([c.e(0), c.e(1), c.e(2), c.e(41)]).then(
              c.bind(null, 156)
            )
          ),
        }),
        Object(o.registerBlockComponent)({
          blockName: "woocommerce/product-sku",
          component: Object(r.lazy)(() =>
            Promise.all([c.e(0), c.e(1), c.e(2), c.e(43)]).then(
              c.bind(null, 365)
            )
          ),
        }),
        Object(o.registerBlockComponent)({
          blockName: "woocommerce/product-stock-indicator",
          component: Object(r.lazy)(() =>
            Promise.all([c.e(0), c.e(1), c.e(2), c.e(44)]).then(
              c.bind(null, 366)
            )
          ),
        }),
        Object(o.registerBlockComponent)({
          blockName: "woocommerce/product-add-to-cart",
          component: Object(r.lazy)(() =>
            Promise.all([c.e(0), c.e(1), c.e(3), c.e(4), c.e(22)]).then(
              c.bind(null, 659)
            )
          ),
        });
      const a = (e) => Object(o.getRegisteredBlockComponents)(e);
    },
    ,
    ,
    ,
    ,
    function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return o;
      }),
        c.d(t, "b", function () {
          return r;
        });
      const o = (e) => e.is_purchasable || !1,
        r = (e) => ["simple", "variable"].includes(e.type || "simple");
    },
  ]));

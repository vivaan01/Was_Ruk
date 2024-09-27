// FontAwesomeKitConfig defines configuration for loading Font Awesome icons
window.FontAwesomeKitConfig = {
    "id": 78850885,
    "version": "6.6.0",
    "token": "1f6398fd47",
    "method": "css",
    "baseUrl": "https://ka-f.fontawesome.com",
    "license": "free",
    "asyncLoading": {
        "enabled": false
    },
    "autoA11y": {
        "enabled": true
    },
    "baseUrlKit": "https://kit.fontawesome.com",
    "detectConflictsUntil": null,
    "iconUploads": {},
    "minify": {
        "enabled": true
    },
    "v4FontFaceShim": {
        "enabled": true
    },
    "v4shim": {
        "enabled": true
    },
    "v5FontFaceShim": {
        "enabled": true
    }
};

// Immediately Invoked Function Expression (IIFE) to load Font Awesome kit
!function (t) {
    // Checks if AMD (Asynchronous Module Definition) is supported and defines a module
    "function" == typeof define && define.amd ? define("kit-loader", t) : t()
}(
    (function () {
        "use strict";

        // Utility functions to manipulate objects and symbols
        function t(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })));
                n.push.apply(n, r)
            }
            return n
        }

        // Function to merge objects with symbol keys handling
        function e(e) {
            for (var n = 1; n < arguments.length; n++) {
                var o = null != arguments[n] ? arguments[n] : {};
                n % 2 ? t(Object(o), !0).forEach((function (t) {
                    r(e, t, o[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                }))
            }
            return e
        }

        // Determines the type of a variable, with support for Symbols
        function n(t) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        // Sets a property on an object
        function r(t, e, n) {
            return (e = function (t) {
                var e = function (t, e) {
                    if ("object" != typeof t || null === t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : String(e)
            }(e)) in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        // Functions to handle different types of data (arrays, objects, symbols)
        function o(t, e) {
            return function (t) {
                if (Array.isArray(t)) return t
            }(t) || function (t, e) {
                var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != n) {
                    var r, o, i, a, c = [], u = !0, s = !1;
                    try {
                        if (i = (n = n.call(t)).next, 0 === e) {
                            if (Object(n) !== n) return;
                            u = !1
                        } else for (; !(u = (r = i.call(n)).done) && (c.push(r.value), c.length !== e); u = !0);
                    } catch (t) {
                        s = !0, o = t
                    } finally {
                        try {
                            if (!u && null != n.return && (a = n.return(), Object(a) !== a)) return
                        } finally {
                            if (s) throw o
                        }
                    }
                    return c
                }
            }(t, e) || i(t, e) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function i(t, e) {
            if (t) {
                if ("string" == typeof t) return a(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(t, e) : void 0
            }
        }

        function a(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r
        }

        // Font Awesome icon style and version configurations
        var c, u, s, f = "classic", l = "duotone", d = "sharp", h = "sharp-duotone", p = [f, l, d, h],
            m = (r(c = {}, f, "Classic"), r(c, l, "Duotone"), r(c, d, "Sharp"), r(c, h, "Sharp Duotone"), r(u = {}, "kit", "Kit"), r(u, "kit-duotone", "Kit Duotone"), ["fak", "fa-kit", "fakd", "fa-kit-duotone"]),
            b = ["fa", "fas", "fa-solid", "far", "fa-regular", "fal", "fa-light", "fat", "fa-thin", "fad", "fa-duotone", "fab", "fa-brands", "fass", "fasr", "fasl", "fast", "fasds"],
            y = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], v = y.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
            g = "duotone-group", w = "swap-opacity", A = "primary", S = "secondary";

        // Extends arrays and configurations for Font Awesome
        [].concat((s = Object.keys({
            classic: ["fas", "far", "fal", "fat"],
            sharp: ["fass", "fasr", "fasl", "fast"],
            "sharp-duotone": ["fasds"]
        }), function (t) {
            if (Array.isArray(t)) return a(t)
        }(s) || function (t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(s) || i(s) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()), ["solid", "regular", "light", "thin", "duotone", "brands"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", g, w, A, S]).concat(y.map((function (t) {
            return "".concat(t, "x")
        }))).concat(v.map((function (t) {
            return "w-".concat(t)
        })));

        // Helper function to construct Font Awesome URLs
        function O(t, e) {
            var n = t.baseUrl, r = t.method, o = t.version, i = t.token, a = t.id;
            return "https://kit.fontawesome.com/".concat(a, ".js");
        }

        // Checks whether conflict detection is enabled for Font Awesome
        function E(t) {
            var e = t.detectConflictsUntil;
            if (void 0 !== e) {
                var n = new Date;
                return !("boolean" == typeof e && !1 === e || "number" == typeof e && e < n.getTime())
            }
            return !0
        }

        // Loads the Font Awesome kit
        function T(t) {
            return t.v4shim && (t.autoFetchSvg = !0, t.fetchSvgFromDom = !0), function (t, e) {
                var n = t.createElement("link");
                n.href = O(e), n.media = "all", n.rel = "stylesheet";
                var r = document.getElementsByTagName("head")[0];
                r.appendChild(n)
            }(document, t)
        }

        // Main function that initializes and loads the Font Awesome kit
        function x(t) {
            if (!function (t) {
                var e = t || {}, n = e.version;
                if (!n) throw new Error("Font Awesome kit version is required");
                if (6 < parseInt(n.split(".")[0])) throw new Error("Font Awesome Kit version mismatch")
            }(t), function (t) {
                var e = t || {}, n = e.method;
                if (!n) throw new Error("Font Awesome kit method is required");
                if ("css" !== n && "js" !== n) throw new Error("Font Awesome Kit method mismatch")
            }(t), T(t), E(t)) {
                var e = function (t) {
                    return {
                        autoA11y: t.autoA11y.enabled,
                        autoFetchSvg: t.autoFetchSvg,
                        baseUrl: t.baseUrl,
                        conflictDetection: E(t),
                        iconUploads: t.iconUploads,
                        license: t.license,
                        method: t.method,
                        minify: t.minify,
                        subdomains: t.subdomains,
                        token: t.token,
                        v4shim: t.v4shim,
                        version: t.version
                    }
                }(t);
                "function" == typeof FontAwesomeConfig.add && (FontAwesomeConfig.add(e), t.autoA11y.enabled && FontAwesomeConfig.autoA11y(e)), "function" == typeof FontAwesomeConfig.kitBootstrap && FontAwesomeConfig.kitBootstrap(e)
            }
        }

        // Invokes the main function to load Font Awesome kit with the given configuration
        window.FontAwesomeKitConfig && x(window.FontAwesomeKitConfig);
    })
);

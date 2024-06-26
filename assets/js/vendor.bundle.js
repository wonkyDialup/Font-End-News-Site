/*! For license information please see vendor.bundle.js.LICENSE.txt */
(self.webpackChunkcube = self.webpackChunkcube || []).push([
	[736],
	{
		711: function (t) {
			t.exports = (function (t) {
				function e(n) {
					if (i[n]) return i[n].exports;
					var s = (i[n] = { exports: {}, id: n, loaded: !1 });
					return (
						t[n].call(s.exports, s, s.exports, e), (s.loaded = !0), s.exports
					);
				}
				var i = {};
				return (e.m = t), (e.c = i), (e.p = "dist/"), e(0);
			})([
				function (t, e, i) {
					"use strict";
					function n(t) {
						return t && t.__esModule ? t : { default: t };
					}
					var s =
							Object.assign ||
							function (t) {
								for (var e = 1; e < arguments.length; e++) {
									var i = arguments[e];
									for (var n in i)
										Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
								}
								return t;
							},
						o = (n(i(1)), i(6)),
						r = n(o),
						a = n(i(7)),
						l = n(i(8)),
						c = n(i(9)),
						u = n(i(10)),
						h = n(i(11)),
						d = n(i(14)),
						p = [],
						f = !1,
						m = {
							offset: 120,
							delay: 0,
							easing: "ease",
							duration: 400,
							disable: !1,
							once: !1,
							startEvent: "DOMContentLoaded",
							throttleDelay: 99,
							debounceDelay: 50,
							disableMutationObserver: !1,
						},
						g = function () {
							if (
								(arguments.length > 0 &&
									void 0 !== arguments[0] &&
									arguments[0] &&
									(f = !0),
								f)
							)
								return (p = (0, h.default)(p, m)), (0, u.default)(p, m.once), p;
						},
						y = function () {
							(p = (0, d.default)()), g();
						};
					t.exports = {
						_init_1: function (t) {
							(m = s(m, t)), (p = (0, d.default)());
							var e = document.all && !window.atob;
							return (function (t) {
								return (
									!0 === t ||
									("mobile" === t && c.default.mobile()) ||
									("phone" === t && c.default.phone()) ||
									("tablet" === t && c.default.tablet()) ||
									("function" == typeof t && !0 === t())
								);
							})(m.disable) || e
								? void p.forEach(function (t, e) {
										t.node.removeAttribute("data-aos"),
											t.node.removeAttribute("data-aos-easing"),
											t.node.removeAttribute("data-aos-duration"),
											t.node.removeAttribute("data-aos-delay");
								  })
								: (m.disableMutationObserver ||
										l.default.isSupported() ||
										(console.info(
											'\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '
										),
										(m.disableMutationObserver = !0)),
								  document
										.querySelector("body")
										.setAttribute("data-aos-easing", m.easing),
								  document
										.querySelector("body")
										.setAttribute("data-aos-duration", m.duration),
								  document
										.querySelector("body")
										.setAttribute("data-aos-delay", m.delay),
								  "DOMContentLoaded" === m.startEvent &&
								  ["complete", "interactive"].indexOf(document.readyState) > -1
										? g(!0)
										: "load" === m.startEvent
										? window.addEventListener(m.startEvent, function () {
												g(!0);
										  })
										: document.addEventListener(m.startEvent, function () {
												g(!0);
										  }),
								  window.addEventListener(
										"resize",
										(0, a.default)(g, m.debounceDelay, !0)
								  ),
								  window.addEventListener(
										"orientationchange",
										(0, a.default)(g, m.debounceDelay, !0)
								  ),
								  window.addEventListener(
										"scroll",
										(0, r.default)(function () {
											(0, u.default)(p, m.once);
										}, m.throttleDelay)
								  ),
								  m.disableMutationObserver || l.default.ready("[data-aos]", y),
								  p);
						},
						get init_1() {
							return this._init_1;
						},
						set init_1(value) {
							this._init_1 = value;
						},
						get init() {
							return this._init_1;
						},
						set init(value) {
							this._init_1 = value;
						},
						refresh: g,
						refreshHard: y,
					};
				},
				function (t, e) {},
				,
				,
				,
				,
				function (t, e) {
					(function (e) {
						"use strict";
						function i(t, e, i) {
							function s(e) {
								var i = d,
									n = p;
								return (d = p = void 0), (v = e), (m = t.apply(n, i));
							}
							function r(t) {
								return (v = t), (g = setTimeout(c, e)), E ? s(t) : m;
							}
							function l(t) {
								var i = t - y;
								return void 0 === y || i >= e || i < 0 || (x && t - v >= f);
							}
							function c() {
								var t = _();
								return l(t)
									? u(t)
									: void (g = setTimeout(
											c,
											(function (t) {
												var i = e - (t - y);
												return x ? w(i, f - (t - v)) : i;
											})(t)
									  ));
							}
							function u(t) {
								return (g = void 0), k && d ? s(t) : ((d = p = void 0), m);
							}
							function h() {
								var t = _(),
									i = l(t);
								if (((d = arguments), (p = this), (y = t), i)) {
									if (void 0 === g) return r(y);
									if (x) return (g = setTimeout(c, e)), s(y);
								}
								return void 0 === g && (g = setTimeout(c, e)), m;
							}
							var d,
								p,
								f,
								m,
								g,
								y,
								v = 0,
								E = !1,
								x = !1,
								k = !0;
							if ("function" != typeof t) throw new TypeError(a);
							return (
								(e = o(e) || 0),
								n(i) &&
									((E = !!i.leading),
									(f = (x = "maxWait" in i) ? b(o(i.maxWait) || 0, e) : f),
									(k = "trailing" in i ? !!i.trailing : k)),
								(h.cancel = function () {
									void 0 !== g && clearTimeout(g),
										(v = 0),
										(d = y = p = g = void 0);
								}),
								(h.flush = function () {
									return void 0 === g ? m : u(_());
								}),
								h
							);
						}
						function n(t) {
							var e = void 0 === t ? "undefined" : r(t);
							return !!t && ("object" == e || "function" == e);
						}
						function s(t) {
							return (
								"symbol" == (void 0 === t ? "undefined" : r(t)) ||
								((function (t) {
									return !!t && "object" == (void 0 === t ? "undefined" : r(t));
								})(t) &&
									v.call(t) == c)
							);
						}
						function o(t) {
							if ("number" == typeof t) return t;
							if (s(t)) return l;
							if (n(t)) {
								var e = "function" == typeof t.valueOf ? t.valueOf() : t;
								t = n(e) ? e + "" : e;
							}
							if ("string" != typeof t) return 0 === t ? t : +t;
							t = t.replace(u, "");
							var i = d.test(t);
							return i || p.test(t)
								? f(t.slice(2), i ? 2 : 8)
								: h.test(t)
								? l
								: +t;
						}
						var r =
								"function" == typeof Symbol &&
								"symbol" == typeof Symbol.iterator
									? function (t) {
											return typeof t;
									  }
									: function (t) {
											return t &&
												"function" == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? "symbol"
												: typeof t;
									  },
							a = "Expected a function",
							l = NaN,
							c = "[object Symbol]",
							u = /^\s+|\s+$/g,
							h = /^[-+]0x[0-9a-f]+$/i,
							d = /^0b[01]+$/i,
							p = /^0o[0-7]+$/i,
							f = parseInt,
							m =
								"object" == (void 0 === e ? "undefined" : r(e)) &&
								e &&
								e.Object === Object &&
								e,
							g =
								"object" ==
									("undefined" == typeof self ? "undefined" : r(self)) &&
								self &&
								self.Object === Object &&
								self,
							y = m || g || Function("return this")(),
							v = Object.prototype.toString,
							b = Math.max,
							w = Math.min,
							_ = function () {
								return y.Date.now();
							};
						t.exports = function (t, e, s) {
							var o = !0,
								r = !0;
							if ("function" != typeof t) throw new TypeError(a);
							return (
								n(s) &&
									((o = "leading" in s ? !!s.leading : o),
									(r = "trailing" in s ? !!s.trailing : r)),
								i(t, e, { leading: o, maxWait: e, trailing: r })
							);
						};
					}).call(
						e,
						(function () {
							return this;
						})()
					);
				},
				function (t, e) {
					(function (e) {
						"use strict";
						function i(t) {
							var e = void 0 === t ? "undefined" : o(t);
							return !!t && ("object" == e || "function" == e);
						}
						function n(t) {
							return (
								"symbol" == (void 0 === t ? "undefined" : o(t)) ||
								((function (t) {
									return !!t && "object" == (void 0 === t ? "undefined" : o(t));
								})(t) &&
									y.call(t) == l)
							);
						}
						function s(t) {
							if ("number" == typeof t) return t;
							if (n(t)) return a;
							if (i(t)) {
								var e = "function" == typeof t.valueOf ? t.valueOf() : t;
								t = i(e) ? e + "" : e;
							}
							if ("string" != typeof t) return 0 === t ? t : +t;
							t = t.replace(c, "");
							var s = h.test(t);
							return s || d.test(t)
								? p(t.slice(2), s ? 2 : 8)
								: u.test(t)
								? a
								: +t;
						}
						var o =
								"function" == typeof Symbol &&
								"symbol" == typeof Symbol.iterator
									? function (t) {
											return typeof t;
									  }
									: function (t) {
											return t &&
												"function" == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? "symbol"
												: typeof t;
									  },
							r = "Expected a function",
							a = NaN,
							l = "[object Symbol]",
							c = /^\s+|\s+$/g,
							u = /^[-+]0x[0-9a-f]+$/i,
							h = /^0b[01]+$/i,
							d = /^0o[0-7]+$/i,
							p = parseInt,
							f =
								"object" == (void 0 === e ? "undefined" : o(e)) &&
								e &&
								e.Object === Object &&
								e,
							m =
								"object" ==
									("undefined" == typeof self ? "undefined" : o(self)) &&
								self &&
								self.Object === Object &&
								self,
							g = f || m || Function("return this")(),
							y = Object.prototype.toString,
							v = Math.max,
							b = Math.min,
							w = function () {
								return g.Date.now();
							};
						t.exports = function (t, e, n) {
							function o(e) {
								var i = d,
									n = p;
								return (d = p = void 0), (_ = e), (m = t.apply(n, i));
							}
							function a(t) {
								return (_ = t), (g = setTimeout(c, e)), E ? o(t) : m;
							}
							function l(t) {
								var i = t - y;
								return void 0 === y || i >= e || i < 0 || (x && t - _ >= f);
							}
							function c() {
								var t = w();
								return l(t)
									? u(t)
									: void (g = setTimeout(
											c,
											(function (t) {
												var i = e - (t - y);
												return x ? b(i, f - (t - _)) : i;
											})(t)
									  ));
							}
							function u(t) {
								return (g = void 0), k && d ? o(t) : ((d = p = void 0), m);
							}
							function h() {
								var t = w(),
									i = l(t);
								if (((d = arguments), (p = this), (y = t), i)) {
									if (void 0 === g) return a(y);
									if (x) return (g = setTimeout(c, e)), o(y);
								}
								return void 0 === g && (g = setTimeout(c, e)), m;
							}
							var d,
								p,
								f,
								m,
								g,
								y,
								_ = 0,
								E = !1,
								x = !1,
								k = !0;
							if ("function" != typeof t) throw new TypeError(r);
							return (
								(e = s(e) || 0),
								i(n) &&
									((E = !!n.leading),
									(f = (x = "maxWait" in n) ? v(s(n.maxWait) || 0, e) : f),
									(k = "trailing" in n ? !!n.trailing : k)),
								(h.cancel = function () {
									void 0 !== g && clearTimeout(g),
										(_ = 0),
										(d = y = p = g = void 0);
								}),
								(h.flush = function () {
									return void 0 === g ? m : u(w());
								}),
								h
							);
						};
					}).call(
						e,
						(function () {
							return this;
						})()
					);
				},
				function (t, e) {
					"use strict";
					function i(t) {
						var e = void 0,
							n = void 0;
						for (e = 0; e < t.length; e += 1) {
							if ((n = t[e]).dataset && n.dataset.aos) return !0;
							if (n.children && i(n.children)) return !0;
						}
						return !1;
					}
					function n() {
						return (
							window.MutationObserver ||
							window.WebKitMutationObserver ||
							window.MozMutationObserver
						);
					}
					function s(t) {
						t &&
							t.forEach(function (t) {
								var e = Array.prototype.slice.call(t.addedNodes),
									n = Array.prototype.slice.call(t.removedNodes);
								if (i(e.concat(n))) return o();
							});
					}
					Object.defineProperty(e, "__esModule", { value: !0 });
					var o = function () {};
					e.default = {
						isSupported: function () {
							return !!n();
						},
						ready: function (t, e) {
							var i = window.document,
								r = new (n())(s);
							(o = e),
								r.observe(i.documentElement, {
									childList: !0,
									subtree: !0,
									removedNodes: !0,
								});
						},
					};
				},
				function (t, e) {
					"use strict";
					function i() {
						return (
							navigator.userAgent || navigator.vendor || window.opera || ""
						);
					}
					Object.defineProperty(e, "__esModule", { value: !0 });
					var n = (function () {
							function t(t, e) {
								for (var i = 0; i < e.length; i++) {
									var n = e[i];
									(n.enumerable = n.enumerable || !1),
										(n.configurable = !0),
										"value" in n && (n.writable = !0),
										Object.defineProperty(t, n.key, n);
								}
							}
							return function (e, i, n) {
								return i && t(e.prototype, i), n && t(e, n), e;
							};
						})(),
						s =
							/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
						o =
							/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
						r =
							/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
						a =
							/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
						l = (function () {
							function t() {
								!(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError("Cannot call a class as a function");
								})(this, t);
							}
							return (
								n(t, [
									{
										key: "phone",
										value: function () {
											var t = i();
											return !(!s.test(t) && !o.test(t.substr(0, 4)));
										},
									},
									{
										key: "mobile",
										value: function () {
											var t = i();
											return !(!r.test(t) && !a.test(t.substr(0, 4)));
										},
									},
									{
										key: "tablet",
										value: function () {
											return this.mobile() && !this.phone();
										},
									},
								]),
								t
							);
						})();
					e.default = new l();
				},
				function (t, e) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });
					e.default = function (t, e) {
						var i = window.pageYOffset,
							n = window.innerHeight;
						t.forEach(function (t, s) {
							!(function (t, e, i) {
								var n = t.node.getAttribute("data-aos-once");
								e > t.position
									? t.node.classList.add("aos-animate")
									: void 0 !== n &&
									  ("false" === n || (!i && "true" !== n)) &&
									  t.node.classList.remove("aos-animate");
							})(t, n + i, e);
						});
					};
				},
				function (t, e, i) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });
					var n = (function (t) {
						return t && t.__esModule ? t : { default: t };
					})(i(12));
					e.default = function (t, e) {
						return (
							t.forEach(function (t, i) {
								t.node.classList.add("aos-init"),
									(t.position = (0, n.default)(t.node, e.offset));
							}),
							t
						);
					};
				},
				function (t, e, i) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });
					var n = (function (t) {
						return t && t.__esModule ? t : { default: t };
					})(i(13));
					e.default = function (t, e) {
						var i = 0,
							s = 0,
							o = window.innerHeight,
							r = {
								offset: t.getAttribute("data-aos-offset"),
								anchor: t.getAttribute("data-aos-anchor"),
								anchorPlacement: t.getAttribute("data-aos-anchor-placement"),
							};
						switch (
							(r.offset && !isNaN(r.offset) && (s = parseInt(r.offset)),
							r.anchor &&
								document.querySelectorAll(r.anchor) &&
								(t = document.querySelectorAll(r.anchor)[0]),
							(i = (0, n.default)(t).top),
							r.anchorPlacement)
						) {
							case "top-bottom":
								break;
							case "center-bottom":
								i += t.offsetHeight / 2;
								break;
							case "bottom-bottom":
								i += t.offsetHeight;
								break;
							case "top-center":
								i += o / 2;
								break;
							case "bottom-center":
								i += o / 2 + t.offsetHeight;
								break;
							case "center-center":
								i += o / 2 + t.offsetHeight / 2;
								break;
							case "top-top":
								i += o;
								break;
							case "bottom-top":
								i += t.offsetHeight + o;
								break;
							case "center-top":
								i += t.offsetHeight / 2 + o;
						}
						return r.anchorPlacement || r.offset || isNaN(e) || (s = e), i + s;
					};
				},
				function (t, e) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });
					e.default = function (t) {
						for (
							var e = 0, i = 0;
							t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop);

						)
							(e += t.offsetLeft - ("BODY" != t.tagName ? t.scrollLeft : 0)),
								(i += t.offsetTop - ("BODY" != t.tagName ? t.scrollTop : 0)),
								(t = t.offsetParent);
						return { top: i, left: e };
					};
				},
				function (t, e) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });
					e.default = function (t) {
						return (
							(t = t || document.querySelectorAll("[data-aos]")),
							Array.prototype.map.call(t, function (t) {
								return { node: t };
							})
						);
					};
				},
			]);
		},
		765: (t) => {
			var e,
				i,
				n,
				s,
				o,
				r,
				a,
				l,
				c,
				u,
				h,
				d,
				p,
				f,
				m,
				g,
				y,
				v,
				b,
				w,
				_,
				E,
				x,
				k,
				T,
				C,
				S,
				A,
				L,
				P,
				O,
				M,
				N,
				I = [],
				D = {},
				j = "appendChild",
				H = "createElement",
				F = "removeChild";
			function z() {
				var t = e.getBoundingClientRect(),
					i = t.top,
					o = t.left,
					r = t.width,
					a = t.height;
				return (
					"transform:translate3D(" +
					(o - (n.clientWidth - r) / 2) +
					"px, " +
					(i - (n.clientHeight - a) / 2) +
					"px, 0) scale3D(" +
					e.clientWidth / s.clientWidth +
					", " +
					e.clientHeight / s.clientHeight +
					", 0)"
				);
			}
			function R(t) {
				var e = P.length - 1;
				if (!p) {
					if ((t > 0 && L === e) || (t < 0 && !L)) {
						if (!N.loop)
							return (
								X(o, ""),
								void setTimeout(
									X,
									9,
									o,
									"animation:" +
										(t > 0 ? "bpl" : "bpf") +
										" .3s;transition:transform .35s"
								)
							);
						L = t > 0 ? -1 : e + 1;
					}
					if (
						([(L = Math.max(0, Math.min(L + t, e))) - 1, L, L + 1].forEach(
							function (t) {
								if (((t = Math.max(0, Math.min(t, e))), !D[t])) {
									var i = P[t].src,
										n = document[H]("IMG");
									n.addEventListener("load", U.bind(null, i)),
										(n.src = i),
										(D[t] = n);
								}
							}
						),
						D[L].complete)
					)
						return B(t);
					(p = !0),
						X(m, "opacity:.4;"),
						n[j](m),
						(D[L].onload = function () {
							_ && B(t);
						}),
						(D[L].onerror = function () {
							(P[L] = { error: "Error loading image" }), _ && B(t);
						});
				}
			}
			function B(t) {
				p && (n[F](m), (p = !1));
				var i = P[L];
				if (i.error) alert(i.error);
				else {
					var r = n.querySelector("img:last-of-type");
					X(
						(o = s = D[L]),
						"animation:" +
							(t > 0 ? "bpfl" : "bpfr") +
							" .35s;transition:transform .35s"
					),
						X(r, "animation:" + (t > 0 ? "bpfol" : "bpfor") + " .35s both"),
						n[j](o),
						i.el && (e = i.el);
				}
				(O.innerHTML = L + 1 + "/" + P.length),
					V(P[L].caption),
					C && C([o, P[L]]);
			}
			function $() {
				var t,
					e,
					i = 0.95 * window.innerHeight,
					n = 0.95 * window.innerWidth,
					s = i / n,
					o = N.dimensions || [1920, 1080],
					r = o[0],
					a = o[1],
					c = a / r;
				c > s ? (e = (t = Math.min(a, i)) / c) : (t = (e = Math.min(r, n)) * c),
					(l.style.cssText += "width:" + e + "px;height:" + t + "px;");
			}
			function q(t) {
				~[1, 4].indexOf(s.readyState)
					? (Y(),
					  setTimeout(function () {
							s.play();
					  }, 99))
					: s.error
					? Y(t)
					: (f = setTimeout(q, 35, t));
			}
			function W(t) {
				N.noLoader ||
					(t &&
						X(
							m,
							"top:" +
								e.offsetTop +
								"px;left:" +
								e.offsetLeft +
								"px;height:" +
								e.clientHeight +
								"px;width:" +
								e.clientWidth +
								"px"
						),
					e.parentElement[t ? j : F](m),
					(p = t));
			}
			function V(t) {
				t && (y.innerHTML = t),
					X(g, "opacity:" + (t ? "1;pointer-events:auto" : "0"));
			}
			function U(t) {
				!~I.indexOf(t) && I.push(t);
			}
			function Y(t) {
				if ((p && W(), k && k(), "string" == typeof t))
					return (
						K(),
						N.onError
							? N.onError()
							: alert("Error: The requested " + t + " could not be loaded.")
					);
				x && U(u),
					(s.style.cssText += z()),
					X(n, "opacity:1;pointer-events:auto"),
					T && (T = setTimeout(T, 410)),
					(w = !0),
					(_ = !!P),
					setTimeout(function () {
						(s.style.cssText += "transition:transform .35s;transform:none"),
							v && setTimeout(V, 250, v);
					}, 60);
			}
			function Q(t) {
				var e = t ? t.target : n,
					i = [g, b, r, a, y, A, S, m];
				e.blur(),
					E ||
						~i.indexOf(e) ||
						((s.style.cssText += z()),
						X(n, "pointer-events:auto"),
						setTimeout(K, 350),
						clearTimeout(T),
						(w = !1),
						(E = !0));
			}
			function K() {
				if (
					((s === l ? c : s).removeAttribute("src"),
					document.body[F](n),
					n[F](s),
					X(n, ""),
					X(s, ""),
					V(!1),
					_)
				) {
					for (var t = n.querySelectorAll("img"), e = 0; e < t.length; e++)
						n[F](t[e]);
					p && n[F](m),
						n[F](O),
						(_ = P = !1),
						(D = {}),
						M || n[F](S),
						M || n[F](A),
						(o.onload = Y),
						(o.onerror = Y.bind(null, "image"));
				}
				N.onClose && N.onClose(), (E = p = !1);
			}
			function X(t, e) {
				t.style.cssText = e;
			}
			t.exports = function (t) {
				var E, D, z, B;
				return (
					i ||
						(function () {
							var t;
							function e(t) {
								var e = document[H]("button");
								return (
									(e.className = t),
									(e.innerHTML =
										'<svg viewBox="0 0 48 48"><path d="M28 24L47 5a3 3 0 1 0-4-4L24 20 5 1a3 3 0 1 0-4 4l19 19L1 43a3 3 0 1 0 4 4l19-19 19 19a3 3 0 0 0 4 0v-4L28 24z"/></svg>'),
									e
								);
							}
							function u(t, e) {
								var i = document[H]("button");
								return (
									(i.className = "bp-lr"),
									(i.innerHTML =
										'<svg viewBox="0 0 129 129" height="70" fill="#fff"><path d="M88.6 121.3c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2a4.1 4.1 0 0 0 0-5.8l-51-51 51-51a4.1 4.1 0 0 0-5.8-5.8l-54 53.9a4.1 4.1 0 0 0 0 5.8l54 53.9z"/></svg>'),
									X(i, e),
									(i.onclick = function (e) {
										e.stopPropagation(), R(t);
									}),
									i
								);
							}
							var d = document[H]("STYLE");
							(d.innerHTML =
								"#bp_caption,#bp_container{bottom:0;left:0;right:0;position:fixed;opacity:0}#bp_container>*,#bp_loader{position:absolute;right:0;z-index:10}#bp_container,#bp_caption,#bp_container svg{pointer-events:none}#bp_container{top:0;z-index:9999;background:rgba(0,0,0,.7);opacity:0;transition:opacity .35s}#bp_loader{top:0;left:0;bottom:0;display:flex;align-items:center;cursor:wait;background:0;z-index:9}#bp_loader svg{width:50%;max-width:300px;max-height:50%;margin:auto;animation:bpturn 1s infinite linear}#bp_aud,#bp_container img,#bp_sv,#bp_vid{user-select:none;max-height:96%;max-width:96%;top:0;bottom:0;left:0;margin:auto;box-shadow:0 0 3em rgba(0,0,0,.4);z-index:-1}#bp_sv{background:#111}#bp_sv svg{width:66px}#bp_caption{font-size:.9em;padding:1.3em;background:rgba(15,15,15,.94);color:#fff;text-align:center;transition:opacity .3s}#bp_aud{width:650px;top:calc(50% - 20px);bottom:auto;box-shadow:none}#bp_count{left:0;right:auto;padding:14px;color:rgba(255,255,255,.7);font-size:22px;cursor:default}#bp_container button{position:absolute;border:0;outline:0;background:0;cursor:pointer;transition:all .1s}#bp_container>.bp-x{padding:0;height:41px;width:41px;border-radius:100%;top:8px;right:14px;opacity:.8;line-height:1}#bp_container>.bp-x:focus,#bp_container>.bp-x:hover{background:rgba(255,255,255,.2)}.bp-x svg,.bp-xc svg{height:21px;width:20px;fill:#fff;vertical-align:top;}.bp-xc svg{width:16px}#bp_container .bp-xc{left:2%;bottom:100%;padding:9px 20px 7px;background:#d04444;border-radius:2px 2px 0 0;opacity:.85}#bp_container .bp-xc:focus,#bp_container .bp-xc:hover{opacity:1}.bp-lr{top:50%;top:calc(50% - 130px);padding:99px 0;width:6%;background:0;border:0;opacity:.4;transition:opacity .1s}.bp-lr:focus,.bp-lr:hover{opacity:.8}@keyframes bpf{50%{transform:translatex(15px)}100%{transform:none}}@keyframes bpl{50%{transform:translatex(-15px)}100%{transform:none}}@keyframes bpfl{0%{opacity:0;transform:translatex(70px)}100%{opacity:1;transform:none}}@keyframes bpfr{0%{opacity:0;transform:translatex(-70px)}100%{opacity:1;transform:none}}@keyframes bpfol{0%{opacity:1;transform:none}100%{opacity:0;transform:translatex(-70px)}}@keyframes bpfor{0%{opacity:1;transform:none}100%{opacity:0;transform:translatex(70px)}}@keyframes bpturn{0%{transform:none}100%{transform:rotate(360deg)}}@media (max-width:600px){.bp-lr{font-size:15vw}}"),
								document.head[j](d),
								((n = document[H]("DIV")).id = "bp_container"),
								(n.onclick = Q),
								(h = e("bp-x")),
								n[j](h),
								"ontouchstart" in window &&
									((M = !0),
									(n.ontouchstart = function (e) {
										var i = e.changedTouches;
										t = i[0].pageX;
									}),
									(n.ontouchmove = function (t) {
										t.preventDefault();
									}),
									(n.ontouchend = function (e) {
										var i = e.changedTouches;
										if (_) {
											var n = i[0].pageX - t;
											n < -30 && R(1), n > 30 && R(-1);
										}
									})),
								(o = document[H]("IMG")),
								((r = document[H]("VIDEO")).id = "bp_vid"),
								r.setAttribute("playsinline", !0),
								(r.controls = !0),
								(r.loop = !0),
								((a = document[H]("audio")).id = "bp_aud"),
								(a.controls = !0),
								(a.loop = !0),
								((O = document[H]("span")).id = "bp_count"),
								((g = document[H]("DIV")).id = "bp_caption"),
								((b = e("bp-xc")).onclick = V.bind(null, !1)),
								g[j](b),
								(y = document[H]("SPAN")),
								g[j](y),
								n[j](g),
								(S = u(1, "transform:scalex(-1)")),
								(A = u(-1, "left:0;right:auto")),
								((m = document[H]("DIV")).id = "bp_loader"),
								(m.innerHTML =
									'<svg viewbox="0 0 32 32" fill="#fff" opacity=".8"><path d="M16 0a16 16 0 0 0 0 32 16 16 0 0 0 0-32m0 4a12 12 0 0 1 0 24 12 12 0 0 1 0-24" fill="#000" opacity=".5"/><path d="M16 0a16 16 0 0 1 16 16h-4A12 12 0 0 0 16 4z"/></svg>'),
								((l = document[H]("DIV")).id = "bp_sv"),
								(c = document[H]("IFRAME")).setAttribute("allowfullscreen", !0),
								(c.allow = "autoplay; fullscreen"),
								(c.onload = function () {
									return l[F](m);
								}),
								X(
									c,
									"border:0;position:absolute;height:100%;width:100%;left:0;top:0"
								),
								l[j](c),
								(o.onload = Y),
								(o.onerror = Y.bind(null, "image")),
								window.addEventListener("resize", function () {
									_ || (p && W(!0)), s === l && $();
								}),
								document.addEventListener("keyup", function (t) {
									var e = t.keyCode;
									27 === e && w && Q(),
										_ &&
											(39 === e && R(1),
											37 === e && R(-1),
											38 === e && R(10),
											40 === e && R(-10));
								}),
								document.addEventListener("keydown", function (t) {
									_ &&
										~[37, 38, 39, 40].indexOf(t.keyCode) &&
										t.preventDefault();
								}),
								document.addEventListener(
									"focus",
									function (t) {
										w &&
											!n.contains(t.target) &&
											(t.stopPropagation(), h.focus());
									},
									!0
								),
								(i = !0);
						})(),
					p && (clearTimeout(f), K()),
					(N = t),
					(d = t.ytSrc || t.vimeoSrc),
					(k = t.animationStart),
					(T = t.animationEnd),
					(C = t.onChangeImage),
					(e = t.el),
					(x = !1),
					(v = e.getAttribute("data-caption")),
					t.gallery
						? (function (t, i) {
								var r = N.galleryAttribute || "data-bp";
								if (Array.isArray(t)) (P = t), (v = t[(L = i || 0)].caption);
								else {
									var a = (P = [].slice.call(
										"string" == typeof t
											? document.querySelectorAll(t + " [" + r + "]")
											: t
									)).indexOf(e);
									(L = 0 === i || i ? i : -1 !== a ? a : 0),
										(P = P.map(function (t) {
											return {
												el: t,
												src: t.getAttribute(r),
												caption: t.getAttribute("data-caption"),
											};
										}));
								}
								(x = !0),
									(u = P[L].src),
									!~I.indexOf(u) && W(!0),
									P.length > 1
										? (n[j](O),
										  (O.innerHTML = L + 1 + "/" + P.length),
										  M || (n[j](S), n[j](A)))
										: (P = !1),
									((s = o).src = u);
						  })(t.gallery, t.position)
						: d || t.iframeSrc
						? ((s = l),
						  (z = "https://"),
						  (B = "autoplay=1"),
						  N.ytSrc
								? (D =
										z +
										"www.youtube" +
										(N.ytNoCookie ? "-nocookie" : "") +
										".com/embed/" +
										d +
										"?html5=1&rel=0&playsinline=1&" +
										B)
								: N.vimeoSrc
								? (D = z + "player.vimeo.com/video/" + d + "?" + B)
								: N.iframeSrc && (D = N.iframeSrc),
						  X(m, ""),
						  l[j](m),
						  (c.src = D),
						  $(),
						  setTimeout(Y, 9))
						: t.imgSrc
						? ((x = !0),
						  (u = t.imgSrc),
						  !~I.indexOf(u) && W(!0),
						  ((s = o).src = u))
						: t.audio
						? (W(!0), ((s = a).src = t.audio), q("audio file"))
						: t.vidSrc
						? (W(!0),
						  t.dimensions && X(r, "width:" + t.dimensions[0] + "px"),
						  (E = t.vidSrc),
						  Array.isArray(E)
								? ((s = r.cloneNode()),
								  E.forEach(function (t) {
										var e = document[H]("SOURCE");
										(e.src = t),
											(e.type = "video/" + t.match(/.(\w+)$/)[1]),
											s[j](e);
								  }))
								: ((s = r).src = E),
						  q("video"))
						: ((s = o).src =
								"IMG" === e.tagName
									? e.src
									: window
											.getComputedStyle(e)
											.backgroundImage.replace(/^url|[(|)|'|"]/g, "")),
					n[j](s),
					document.body[j](n),
					{
						close: Q,
						next: function () {
							return R(1);
						},
						prev: function () {
							return R(-1);
						},
					}
				);
			};
		},
		169: (t, e, i) => {
			"use strict";
			i.d(e, { u: () => un });
			var n = {};
			i.r(n),
				i.d(n, {
					afterMain: () => x,
					afterRead: () => w,
					afterWrite: () => C,
					applyStyles: () => N,
					arrow: () => G,
					auto: () => l,
					basePlacements: () => c,
					beforeMain: () => _,
					beforeRead: () => v,
					beforeWrite: () => k,
					bottom: () => o,
					clippingParents: () => d,
					computeStyles: () => tt,
					createPopper: () => Pt,
					createPopperBase: () => Lt,
					createPopperLite: () => Ot,
					detectOverflow: () => gt,
					end: () => h,
					eventListeners: () => it,
					flip: () => yt,
					hide: () => wt,
					left: () => a,
					main: () => E,
					modifierPhases: () => S,
					offset: () => _t,
					placements: () => y,
					popper: () => f,
					popperGenerator: () => At,
					popperOffsets: () => Et,
					preventOverflow: () => xt,
					read: () => b,
					reference: () => m,
					right: () => r,
					start: () => u,
					top: () => s,
					variationPlacements: () => g,
					viewport: () => p,
					write: () => T,
				});
			var s = "top",
				o = "bottom",
				r = "right",
				a = "left",
				l = "auto",
				c = [s, o, r, a],
				u = "start",
				h = "end",
				d = "clippingParents",
				p = "viewport",
				f = "popper",
				m = "reference",
				g = c.reduce(function (t, e) {
					return t.concat([e + "-" + u, e + "-" + h]);
				}, []),
				y = [].concat(c, [l]).reduce(function (t, e) {
					return t.concat([e, e + "-" + u, e + "-" + h]);
				}, []),
				v = "beforeRead",
				b = "read",
				w = "afterRead",
				_ = "beforeMain",
				E = "main",
				x = "afterMain",
				k = "beforeWrite",
				T = "write",
				C = "afterWrite",
				S = [v, b, w, _, E, x, k, T, C];
			function A(t) {
				return t ? (t.nodeName || "").toLowerCase() : null;
			}
			function L(t) {
				if (null == t) return window;
				if ("[object Window]" !== t.toString()) {
					var e = t.ownerDocument;
					return (e && e.defaultView) || window;
				}
				return t;
			}
			function P(t) {
				return t instanceof L(t).Element || t instanceof Element;
			}
			function O(t) {
				return t instanceof L(t).HTMLElement || t instanceof HTMLElement;
			}
			function M(t) {
				return (
					"undefined" != typeof ShadowRoot &&
					(t instanceof L(t).ShadowRoot || t instanceof ShadowRoot)
				);
			}
			const N = {
				name: "applyStyles",
				enabled: !0,
				phase: "write",
				fn: function (t) {
					var e = t.state;
					Object.keys(e.elements).forEach(function (t) {
						var i = e.styles[t] || {},
							n = e.attributes[t] || {},
							s = e.elements[t];
						O(s) &&
							A(s) &&
							(Object.assign(s.style, i),
							Object.keys(n).forEach(function (t) {
								var e = n[t];
								!1 === e
									? s.removeAttribute(t)
									: s.setAttribute(t, !0 === e ? "" : e);
							}));
					});
				},
				effect: function (t) {
					var e = t.state,
						i = {
							popper: {
								position: e.options.strategy,
								left: "0",
								top: "0",
								margin: "0",
							},
							arrow: { position: "absolute" },
							reference: {},
						};
					return (
						Object.assign(e.elements.popper.style, i.popper),
						(e.styles = i),
						e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
						function () {
							Object.keys(e.elements).forEach(function (t) {
								var n = e.elements[t],
									s = e.attributes[t] || {},
									o = Object.keys(
										e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]
									).reduce(function (t, e) {
										return (t[e] = ""), t;
									}, {});
								O(n) &&
									A(n) &&
									(Object.assign(n.style, o),
									Object.keys(s).forEach(function (t) {
										n.removeAttribute(t);
									}));
							});
						}
					);
				},
				requires: ["computeStyles"],
			};
			function I(t) {
				return t.split("-")[0];
			}
			function D(t) {
				var e = t.getBoundingClientRect();
				return {
					width: e.width,
					height: e.height,
					top: e.top,
					right: e.right,
					bottom: e.bottom,
					left: e.left,
					x: e.left,
					y: e.top,
				};
			}
			function j(t) {
				var e = D(t),
					i = t.offsetWidth,
					n = t.offsetHeight;
				return (
					Math.abs(e.width - i) <= 1 && (i = e.width),
					Math.abs(e.height - n) <= 1 && (n = e.height),
					{ x: t.offsetLeft, y: t.offsetTop, width: i, height: n }
				);
			}
			function H(t, e) {
				var i = e.getRootNode && e.getRootNode();
				if (t.contains(e)) return !0;
				if (i && M(i)) {
					var n = e;
					do {
						if (n && t.isSameNode(n)) return !0;
						n = n.parentNode || n.host;
					} while (n);
				}
				return !1;
			}
			function F(t) {
				return L(t).getComputedStyle(t);
			}
			function z(t) {
				return ["table", "td", "th"].indexOf(A(t)) >= 0;
			}
			function R(t) {
				return ((P(t) ? t.ownerDocument : t.document) || window.document)
					.documentElement;
			}
			function B(t) {
				return "html" === A(t)
					? t
					: t.assignedSlot || t.parentNode || (M(t) ? t.host : null) || R(t);
			}
			function $(t) {
				return O(t) && "fixed" !== F(t).position ? t.offsetParent : null;
			}
			function q(t) {
				for (var e = L(t), i = $(t); i && z(i) && "static" === F(i).position; )
					i = $(i);
				return i &&
					("html" === A(i) || ("body" === A(i) && "static" === F(i).position))
					? e
					: i ||
							(function (t) {
								var e =
									-1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
								if (
									-1 !== navigator.userAgent.indexOf("Trident") &&
									O(t) &&
									"fixed" === F(t).position
								)
									return null;
								for (
									var i = B(t);
									O(i) && ["html", "body"].indexOf(A(i)) < 0;

								) {
									var n = F(i);
									if (
										"none" !== n.transform ||
										"none" !== n.perspective ||
										"paint" === n.contain ||
										-1 !== ["transform", "perspective"].indexOf(n.willChange) ||
										(e && "filter" === n.willChange) ||
										(e && n.filter && "none" !== n.filter)
									)
										return i;
									i = i.parentNode;
								}
								return null;
							})(t) ||
							e;
			}
			function W(t) {
				return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
			}
			var V = Math.max,
				U = Math.min,
				Y = Math.round;
			function Q(t, e, i) {
				return V(t, U(e, i));
			}
			function K(t) {
				return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
			}
			function X(t, e) {
				return e.reduce(function (e, i) {
					return (e[i] = t), e;
				}, {});
			}
			const G = {
				name: "arrow",
				enabled: !0,
				phase: "main",
				fn: function (t) {
					var e,
						i = t.state,
						n = t.name,
						l = t.options,
						u = i.elements.arrow,
						h = i.modifiersData.popperOffsets,
						d = I(i.placement),
						p = W(d),
						f = [a, r].indexOf(d) >= 0 ? "height" : "width";
					if (u && h) {
						var m = (function (t, e) {
								return K(
									"number" !=
										typeof (t =
											"function" == typeof t
												? t(
														Object.assign({}, e.rects, {
															placement: e.placement,
														})
												  )
												: t)
										? t
										: X(t, c)
								);
							})(l.padding, i),
							g = j(u),
							y = "y" === p ? s : a,
							v = "y" === p ? o : r,
							b =
								i.rects.reference[f] +
								i.rects.reference[p] -
								h[p] -
								i.rects.popper[f],
							w = h[p] - i.rects.reference[p],
							_ = q(u),
							E = _
								? "y" === p
									? _.clientHeight || 0
									: _.clientWidth || 0
								: 0,
							x = b / 2 - w / 2,
							k = m[y],
							T = E - g[f] - m[v],
							C = E / 2 - g[f] / 2 + x,
							S = Q(k, C, T),
							A = p;
						i.modifiersData[n] =
							(((e = {})[A] = S), (e.centerOffset = S - C), e);
					}
				},
				effect: function (t) {
					var e = t.state,
						i = t.options.element,
						n = void 0 === i ? "[data-popper-arrow]" : i;
					null != n &&
						("string" != typeof n ||
							(n = e.elements.popper.querySelector(n))) &&
						H(e.elements.popper, n) &&
						(e.elements.arrow = n);
				},
				requires: ["popperOffsets"],
				requiresIfExists: ["preventOverflow"],
			};
			var J = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
			function Z(t) {
				var e,
					i = t.popper,
					n = t.popperRect,
					l = t.placement,
					c = t.offsets,
					u = t.position,
					h = t.gpuAcceleration,
					d = t.adaptive,
					p = t.roundOffsets,
					f =
						!0 === p
							? (function (t) {
									var e = t.x,
										i = t.y,
										n = window.devicePixelRatio || 1;
									return { x: Y(Y(e * n) / n) || 0, y: Y(Y(i * n) / n) || 0 };
							  })(c)
							: "function" == typeof p
							? p(c)
							: c,
					m = f.x,
					g = void 0 === m ? 0 : m,
					y = f.y,
					v = void 0 === y ? 0 : y,
					b = c.hasOwnProperty("x"),
					w = c.hasOwnProperty("y"),
					_ = a,
					E = s,
					x = window;
				if (d) {
					var k = q(i),
						T = "clientHeight",
						C = "clientWidth";
					k === L(i) &&
						"static" !== F((k = R(i))).position &&
						((T = "scrollHeight"), (C = "scrollWidth")),
						(k = k),
						l === s && ((E = o), (v -= k[T] - n.height), (v *= h ? 1 : -1)),
						l === a && ((_ = r), (g -= k[C] - n.width), (g *= h ? 1 : -1));
				}
				var S,
					A = Object.assign({ position: u }, d && J);
				return h
					? Object.assign(
							{},
							A,
							(((S = {})[E] = w ? "0" : ""),
							(S[_] = b ? "0" : ""),
							(S.transform =
								(x.devicePixelRatio || 1) < 2
									? "translate(" + g + "px, " + v + "px)"
									: "translate3d(" + g + "px, " + v + "px, 0)"),
							S)
					  )
					: Object.assign(
							{},
							A,
							(((e = {})[E] = w ? v + "px" : ""),
							(e[_] = b ? g + "px" : ""),
							(e.transform = ""),
							e)
					  );
			}
			const tt = {
				name: "computeStyles",
				enabled: !0,
				phase: "beforeWrite",
				fn: function (t) {
					var e = t.state,
						i = t.options,
						n = i.gpuAcceleration,
						s = void 0 === n || n,
						o = i.adaptive,
						r = void 0 === o || o,
						a = i.roundOffsets,
						l = void 0 === a || a,
						c = {
							placement: I(e.placement),
							popper: e.elements.popper,
							popperRect: e.rects.popper,
							gpuAcceleration: s,
						};
					null != e.modifiersData.popperOffsets &&
						(e.styles.popper = Object.assign(
							{},
							e.styles.popper,
							Z(
								Object.assign({}, c, {
									offsets: e.modifiersData.popperOffsets,
									position: e.options.strategy,
									adaptive: r,
									roundOffsets: l,
								})
							)
						)),
						null != e.modifiersData.arrow &&
							(e.styles.arrow = Object.assign(
								{},
								e.styles.arrow,
								Z(
									Object.assign({}, c, {
										offsets: e.modifiersData.arrow,
										position: "absolute",
										adaptive: !1,
										roundOffsets: l,
									})
								)
							)),
						(e.attributes.popper = Object.assign({}, e.attributes.popper, {
							"data-popper-placement": e.placement,
						}));
				},
				data: {},
			};
			var et = { passive: !0 };
			const it = {
				name: "eventListeners",
				enabled: !0,
				phase: "write",
				fn: function () {},
				effect: function (t) {
					var e = t.state,
						i = t.instance,
						n = t.options,
						s = n.scroll,
						o = void 0 === s || s,
						r = n.resize,
						a = void 0 === r || r,
						l = L(e.elements.popper),
						c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
					return (
						o &&
							c.forEach(function (t) {
								t.addEventListener("scroll", i.update, et);
							}),
						a && l.addEventListener("resize", i.update, et),
						function () {
							o &&
								c.forEach(function (t) {
									t.removeEventListener("scroll", i.update, et);
								}),
								a && l.removeEventListener("resize", i.update, et);
						}
					);
				},
				data: {},
			};
			var nt = { left: "right", right: "left", bottom: "top", top: "bottom" };
			function st(t) {
				return t.replace(/left|right|bottom|top/g, function (t) {
					return nt[t];
				});
			}
			var ot = { start: "end", end: "start" };
			function rt(t) {
				return t.replace(/start|end/g, function (t) {
					return ot[t];
				});
			}
			function at(t) {
				var e = L(t);
				return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
			}
			function lt(t) {
				return D(R(t)).left + at(t).scrollLeft;
			}
			function ct(t) {
				var e = F(t),
					i = e.overflow,
					n = e.overflowX,
					s = e.overflowY;
				return /auto|scroll|overlay|hidden/.test(i + s + n);
			}
			function ut(t) {
				return ["html", "body", "#document"].indexOf(A(t)) >= 0
					? t.ownerDocument.body
					: O(t) && ct(t)
					? t
					: ut(B(t));
			}
			function ht(t, e) {
				var i;
				void 0 === e && (e = []);
				var n = ut(t),
					s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
					o = L(n),
					r = s ? [o].concat(o.visualViewport || [], ct(n) ? n : []) : n,
					a = e.concat(r);
				return s ? a : a.concat(ht(B(r)));
			}
			function dt(t) {
				return Object.assign({}, t, {
					left: t.x,
					top: t.y,
					right: t.x + t.width,
					bottom: t.y + t.height,
				});
			}
			function pt(t, e) {
				return e === p
					? dt(
							(function (t) {
								var e = L(t),
									i = R(t),
									n = e.visualViewport,
									s = i.clientWidth,
									o = i.clientHeight,
									r = 0,
									a = 0;
								return (
									n &&
										((s = n.width),
										(o = n.height),
										/^((?!chrome|android).)*safari/i.test(
											navigator.userAgent
										) || ((r = n.offsetLeft), (a = n.offsetTop))),
									{ width: s, height: o, x: r + lt(t), y: a }
								);
							})(t)
					  )
					: O(e)
					? (function (t) {
							var e = D(t);
							return (
								(e.top = e.top + t.clientTop),
								(e.left = e.left + t.clientLeft),
								(e.bottom = e.top + t.clientHeight),
								(e.right = e.left + t.clientWidth),
								(e.width = t.clientWidth),
								(e.height = t.clientHeight),
								(e.x = e.left),
								(e.y = e.top),
								e
							);
					  })(e)
					: dt(
							(function (t) {
								var e,
									i = R(t),
									n = at(t),
									s = null == (e = t.ownerDocument) ? void 0 : e.body,
									o = V(
										i.scrollWidth,
										i.clientWidth,
										s ? s.scrollWidth : 0,
										s ? s.clientWidth : 0
									),
									r = V(
										i.scrollHeight,
										i.clientHeight,
										s ? s.scrollHeight : 0,
										s ? s.clientHeight : 0
									),
									a = -n.scrollLeft + lt(t),
									l = -n.scrollTop;
								return (
									"rtl" === F(s || i).direction &&
										(a += V(i.clientWidth, s ? s.clientWidth : 0) - o),
									{ width: o, height: r, x: a, y: l }
								);
							})(R(t))
					  );
			}
			function ft(t) {
				return t.split("-")[1];
			}
			function mt(t) {
				var e,
					i = t.reference,
					n = t.element,
					l = t.placement,
					c = l ? I(l) : null,
					d = l ? ft(l) : null,
					p = i.x + i.width / 2 - n.width / 2,
					f = i.y + i.height / 2 - n.height / 2;
				switch (c) {
					case s:
						e = { x: p, y: i.y - n.height };
						break;
					case o:
						e = { x: p, y: i.y + i.height };
						break;
					case r:
						e = { x: i.x + i.width, y: f };
						break;
					case a:
						e = { x: i.x - n.width, y: f };
						break;
					default:
						e = { x: i.x, y: i.y };
				}
				var m = c ? W(c) : null;
				if (null != m) {
					var g = "y" === m ? "height" : "width";
					switch (d) {
						case u:
							e[m] = e[m] - (i[g] / 2 - n[g] / 2);
							break;
						case h:
							e[m] = e[m] + (i[g] / 2 - n[g] / 2);
					}
				}
				return e;
			}
			function gt(t, e) {
				void 0 === e && (e = {});
				var i = e,
					n = i.placement,
					a = void 0 === n ? t.placement : n,
					l = i.boundary,
					u = void 0 === l ? d : l,
					h = i.rootBoundary,
					g = void 0 === h ? p : h,
					y = i.elementContext,
					v = void 0 === y ? f : y,
					b = i.altBoundary,
					w = void 0 !== b && b,
					_ = i.padding,
					E = void 0 === _ ? 0 : _,
					x = K("number" != typeof E ? E : X(E, c)),
					k = v === f ? m : f,
					T = t.elements.reference,
					C = t.rects.popper,
					S = t.elements[w ? k : v],
					L = (function (t, e, i) {
						var n =
								"clippingParents" === e
									? (function (t) {
											var e = ht(B(t)),
												i =
													["absolute", "fixed"].indexOf(F(t).position) >= 0 &&
													O(t)
														? q(t)
														: t;
											return P(i)
												? e.filter(function (t) {
														return P(t) && H(t, i) && "body" !== A(t);
												  })
												: [];
									  })(t)
									: [].concat(e),
							s = [].concat(n, [i]),
							o = s[0],
							r = s.reduce(function (e, i) {
								var n = pt(t, i);
								return (
									(e.top = V(n.top, e.top)),
									(e.right = U(n.right, e.right)),
									(e.bottom = U(n.bottom, e.bottom)),
									(e.left = V(n.left, e.left)),
									e
								);
							}, pt(t, o));
						return (
							(r.width = r.right - r.left),
							(r.height = r.bottom - r.top),
							(r.x = r.left),
							(r.y = r.top),
							r
						);
					})(P(S) ? S : S.contextElement || R(t.elements.popper), u, g),
					M = D(T),
					N = mt({
						reference: M,
						element: C,
						strategy: "absolute",
						placement: a,
					}),
					I = dt(Object.assign({}, C, N)),
					j = v === f ? I : M,
					z = {
						top: L.top - j.top + x.top,
						bottom: j.bottom - L.bottom + x.bottom,
						left: L.left - j.left + x.left,
						right: j.right - L.right + x.right,
					},
					$ = t.modifiersData.offset;
				if (v === f && $) {
					var W = $[a];
					Object.keys(z).forEach(function (t) {
						var e = [r, o].indexOf(t) >= 0 ? 1 : -1,
							i = [s, o].indexOf(t) >= 0 ? "y" : "x";
						z[t] += W[i] * e;
					});
				}
				return z;
			}
			const yt = {
				name: "flip",
				enabled: !0,
				phase: "main",
				fn: function (t) {
					var e = t.state,
						i = t.options,
						n = t.name;
					if (!e.modifiersData[n]._skip) {
						for (
							var h = i.mainAxis,
								d = void 0 === h || h,
								p = i.altAxis,
								f = void 0 === p || p,
								m = i.fallbackPlacements,
								v = i.padding,
								b = i.boundary,
								w = i.rootBoundary,
								_ = i.altBoundary,
								E = i.flipVariations,
								x = void 0 === E || E,
								k = i.allowedAutoPlacements,
								T = e.options.placement,
								C = I(T),
								S =
									m ||
									(C !== T && x
										? (function (t) {
												if (I(t) === l) return [];
												var e = st(t);
												return [rt(t), e, rt(e)];
										  })(T)
										: [st(T)]),
								A = [T].concat(S).reduce(function (t, i) {
									return t.concat(
										I(i) === l
											? (function (t, e) {
													void 0 === e && (e = {});
													var i = e,
														n = i.placement,
														s = i.boundary,
														o = i.rootBoundary,
														r = i.padding,
														a = i.flipVariations,
														l = i.allowedAutoPlacements,
														u = void 0 === l ? y : l,
														h = ft(n),
														d = h
															? a
																? g
																: g.filter(function (t) {
																		return ft(t) === h;
																  })
															: c,
														p = d.filter(function (t) {
															return u.indexOf(t) >= 0;
														});
													0 === p.length && (p = d);
													var f = p.reduce(function (e, i) {
														return (
															(e[i] = gt(t, {
																placement: i,
																boundary: s,
																rootBoundary: o,
																padding: r,
															})[I(i)]),
															e
														);
													}, {});
													return Object.keys(f).sort(function (t, e) {
														return f[t] - f[e];
													});
											  })(e, {
													placement: i,
													boundary: b,
													rootBoundary: w,
													padding: v,
													flipVariations: x,
													allowedAutoPlacements: k,
											  })
											: i
									);
								}, []),
								L = e.rects.reference,
								P = e.rects.popper,
								O = new Map(),
								M = !0,
								N = A[0],
								D = 0;
							D < A.length;
							D++
						) {
							var j = A[D],
								H = I(j),
								F = ft(j) === u,
								z = [s, o].indexOf(H) >= 0,
								R = z ? "width" : "height",
								B = gt(e, {
									placement: j,
									boundary: b,
									rootBoundary: w,
									altBoundary: _,
									padding: v,
								}),
								$ = z ? (F ? r : a) : F ? o : s;
							L[R] > P[R] && ($ = st($));
							var q = st($),
								W = [];
							if (
								(d && W.push(B[H] <= 0),
								f && W.push(B[$] <= 0, B[q] <= 0),
								W.every(function (t) {
									return t;
								}))
							) {
								(N = j), (M = !1);
								break;
							}
							O.set(j, W);
						}
						if (M)
							for (
								var V = function (t) {
										var e = A.find(function (e) {
											var i = O.get(e);
											if (i)
												return i.slice(0, t).every(function (t) {
													return t;
												});
										});
										if (e) return (N = e), "break";
									},
									U = x ? 3 : 1;
								U > 0 && "break" !== V(U);
								U--
							);
						e.placement !== N &&
							((e.modifiersData[n]._skip = !0),
							(e.placement = N),
							(e.reset = !0));
					}
				},
				requiresIfExists: ["offset"],
				data: { _skip: !1 },
			};
			function vt(t, e, i) {
				return (
					void 0 === i && (i = { x: 0, y: 0 }),
					{
						top: t.top - e.height - i.y,
						right: t.right - e.width + i.x,
						bottom: t.bottom - e.height + i.y,
						left: t.left - e.width - i.x,
					}
				);
			}
			function bt(t) {
				return [s, r, o, a].some(function (e) {
					return t[e] >= 0;
				});
			}
			const wt = {
					name: "hide",
					enabled: !0,
					phase: "main",
					requiresIfExists: ["preventOverflow"],
					fn: function (t) {
						var e = t.state,
							i = t.name,
							n = e.rects.reference,
							s = e.rects.popper,
							o = e.modifiersData.preventOverflow,
							r = gt(e, { elementContext: "reference" }),
							a = gt(e, { altBoundary: !0 }),
							l = vt(r, n),
							c = vt(a, s, o),
							u = bt(l),
							h = bt(c);
						(e.modifiersData[i] = {
							referenceClippingOffsets: l,
							popperEscapeOffsets: c,
							isReferenceHidden: u,
							hasPopperEscaped: h,
						}),
							(e.attributes.popper = Object.assign({}, e.attributes.popper, {
								"data-popper-reference-hidden": u,
								"data-popper-escaped": h,
							}));
					},
				},
				_t = {
					name: "offset",
					enabled: !0,
					phase: "main",
					requires: ["popperOffsets"],
					fn: function (t) {
						var e = t.state,
							i = t.options,
							n = t.name,
							o = i.offset,
							l = void 0 === o ? [0, 0] : o,
							c = y.reduce(function (t, i) {
								return (
									(t[i] = (function (t, e, i) {
										var n = I(t),
											o = [a, s].indexOf(n) >= 0 ? -1 : 1,
											l =
												"function" == typeof i
													? i(Object.assign({}, e, { placement: t }))
													: i,
											c = l[0],
											u = l[1];
										return (
											(c = c || 0),
											(u = (u || 0) * o),
											[a, r].indexOf(n) >= 0 ? { x: u, y: c } : { x: c, y: u }
										);
									})(i, e.rects, l)),
									t
								);
							}, {}),
							u = c[e.placement],
							h = u.x,
							d = u.y;
						null != e.modifiersData.popperOffsets &&
							((e.modifiersData.popperOffsets.x += h),
							(e.modifiersData.popperOffsets.y += d)),
							(e.modifiersData[n] = c);
					},
				},
				Et = {
					name: "popperOffsets",
					enabled: !0,
					phase: "read",
					fn: function (t) {
						var e = t.state,
							i = t.name;
						e.modifiersData[i] = mt({
							reference: e.rects.reference,
							element: e.rects.popper,
							strategy: "absolute",
							placement: e.placement,
						});
					},
					data: {},
				},
				xt = {
					name: "preventOverflow",
					enabled: !0,
					phase: "main",
					fn: function (t) {
						var e = t.state,
							i = t.options,
							n = t.name,
							l = i.mainAxis,
							c = void 0 === l || l,
							h = i.altAxis,
							d = void 0 !== h && h,
							p = i.boundary,
							f = i.rootBoundary,
							m = i.altBoundary,
							g = i.padding,
							y = i.tether,
							v = void 0 === y || y,
							b = i.tetherOffset,
							w = void 0 === b ? 0 : b,
							_ = gt(e, {
								boundary: p,
								rootBoundary: f,
								padding: g,
								altBoundary: m,
							}),
							E = I(e.placement),
							x = ft(e.placement),
							k = !x,
							T = W(E),
							C = "x" === T ? "y" : "x",
							S = e.modifiersData.popperOffsets,
							A = e.rects.reference,
							L = e.rects.popper,
							P =
								"function" == typeof w
									? w(Object.assign({}, e.rects, { placement: e.placement }))
									: w,
							O = { x: 0, y: 0 };
						if (S) {
							if (c || d) {
								var M = "y" === T ? s : a,
									N = "y" === T ? o : r,
									D = "y" === T ? "height" : "width",
									H = S[T],
									F = S[T] + _[M],
									z = S[T] - _[N],
									R = v ? -L[D] / 2 : 0,
									B = x === u ? A[D] : L[D],
									$ = x === u ? -L[D] : -A[D],
									Y = e.elements.arrow,
									K = v && Y ? j(Y) : { width: 0, height: 0 },
									X = e.modifiersData["arrow#persistent"]
										? e.modifiersData["arrow#persistent"].padding
										: { top: 0, right: 0, bottom: 0, left: 0 },
									G = X[M],
									J = X[N],
									Z = Q(0, A[D], K[D]),
									tt = k ? A[D] / 2 - R - Z - G - P : B - Z - G - P,
									et = k ? -A[D] / 2 + R + Z + J + P : $ + Z + J + P,
									it = e.elements.arrow && q(e.elements.arrow),
									nt = it
										? "y" === T
											? it.clientTop || 0
											: it.clientLeft || 0
										: 0,
									st = e.modifiersData.offset
										? e.modifiersData.offset[e.placement][T]
										: 0,
									ot = S[T] + tt - st - nt,
									rt = S[T] + et - st;
								if (c) {
									var at = Q(v ? U(F, ot) : F, H, v ? V(z, rt) : z);
									(S[T] = at), (O[T] = at - H);
								}
								if (d) {
									var lt = "x" === T ? s : a,
										ct = "x" === T ? o : r,
										ut = S[C],
										ht = ut + _[lt],
										dt = ut - _[ct],
										pt = Q(v ? U(ht, ot) : ht, ut, v ? V(dt, rt) : dt);
									(S[C] = pt), (O[C] = pt - ut);
								}
							}
							e.modifiersData[n] = O;
						}
					},
					requiresIfExists: ["offset"],
				};
			function kt(t, e, i) {
				void 0 === i && (i = !1);
				var n,
					s,
					o = R(e),
					r = D(t),
					a = O(e),
					l = { scrollLeft: 0, scrollTop: 0 },
					c = { x: 0, y: 0 };
				return (
					(a || (!a && !i)) &&
						(("body" !== A(e) || ct(o)) &&
							(l =
								(n = e) !== L(n) && O(n)
									? { scrollLeft: (s = n).scrollLeft, scrollTop: s.scrollTop }
									: at(n)),
						O(e)
							? (((c = D(e)).x += e.clientLeft), (c.y += e.clientTop))
							: o && (c.x = lt(o))),
					{
						x: r.left + l.scrollLeft - c.x,
						y: r.top + l.scrollTop - c.y,
						width: r.width,
						height: r.height,
					}
				);
			}
			function Tt(t) {
				var e = new Map(),
					i = new Set(),
					n = [];
				function s(t) {
					i.add(t.name),
						[]
							.concat(t.requires || [], t.requiresIfExists || [])
							.forEach(function (t) {
								if (!i.has(t)) {
									var n = e.get(t);
									n && s(n);
								}
							}),
						n.push(t);
				}
				return (
					t.forEach(function (t) {
						e.set(t.name, t);
					}),
					t.forEach(function (t) {
						i.has(t.name) || s(t);
					}),
					n
				);
			}
			var Ct = { placement: "bottom", modifiers: [], strategy: "absolute" };
			function St() {
				for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
					e[i] = arguments[i];
				return !e.some(function (t) {
					return !(t && "function" == typeof t.getBoundingClientRect);
				});
			}
			function At(t) {
				void 0 === t && (t = {});
				var e = t,
					i = e.defaultModifiers,
					n = void 0 === i ? [] : i,
					s = e.defaultOptions,
					o = void 0 === s ? Ct : s;
				return function (t, e, i) {
					void 0 === i && (i = o);
					var s,
						r,
						a = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign({}, Ct, o),
							modifiersData: {},
							elements: { reference: t, popper: e },
							attributes: {},
							styles: {},
						},
						l = [],
						c = !1,
						u = {
							state: a,
							setOptions: function (i) {
								h(),
									(a.options = Object.assign({}, o, a.options, i)),
									(a.scrollParents = {
										reference: P(t)
											? ht(t)
											: t.contextElement
											? ht(t.contextElement)
											: [],
										popper: ht(e),
									});
								var s,
									r,
									c = (function (t) {
										var e = Tt(t);
										return S.reduce(function (t, i) {
											return t.concat(
												e.filter(function (t) {
													return t.phase === i;
												})
											);
										}, []);
									})(
										((s = [].concat(n, a.options.modifiers)),
										(r = s.reduce(function (t, e) {
											var i = t[e.name];
											return (
												(t[e.name] = i
													? Object.assign({}, i, e, {
															options: Object.assign({}, i.options, e.options),
															data: Object.assign({}, i.data, e.data),
													  })
													: e),
												t
											);
										}, {})),
										Object.keys(r).map(function (t) {
											return r[t];
										}))
									);
								return (
									(a.orderedModifiers = c.filter(function (t) {
										return t.enabled;
									})),
									a.orderedModifiers.forEach(function (t) {
										var e = t.name,
											i = t.options,
											n = void 0 === i ? {} : i,
											s = t.effect;
										if ("function" == typeof s) {
											var o = s({ state: a, name: e, instance: u, options: n });
											l.push(o || function () {});
										}
									}),
									u.update()
								);
							},
							forceUpdate: function () {
								if (!c) {
									var t = a.elements,
										e = t.reference,
										i = t.popper;
									if (St(e, i)) {
										(a.rects = {
											reference: kt(e, q(i), "fixed" === a.options.strategy),
											popper: j(i),
										}),
											(a.reset = !1),
											(a.placement = a.options.placement),
											a.orderedModifiers.forEach(function (t) {
												return (a.modifiersData[t.name] = Object.assign(
													{},
													t.data
												));
											});
										for (var n = 0; n < a.orderedModifiers.length; n++)
											if (!0 !== a.reset) {
												var s = a.orderedModifiers[n],
													o = s.fn,
													r = s.options,
													l = void 0 === r ? {} : r,
													h = s.name;
												"function" == typeof o &&
													(a =
														o({ state: a, options: l, name: h, instance: u }) ||
														a);
											} else (a.reset = !1), (n = -1);
									}
								}
							},
							update:
								((s = function () {
									return new Promise(function (t) {
										u.forceUpdate(), t(a);
									});
								}),
								function () {
									return (
										r ||
											(r = new Promise(function (t) {
												Promise.resolve().then(function () {
													(r = void 0), t(s());
												});
											})),
										r
									);
								}),
							destroy: function () {
								h(), (c = !0);
							},
						};
					if (!St(t, e)) return u;
					function h() {
						l.forEach(function (t) {
							return t();
						}),
							(l = []);
					}
					return (
						u.setOptions(i).then(function (t) {
							!c && i.onFirstUpdate && i.onFirstUpdate(t);
						}),
						u
					);
				};
			}
			var Lt = At(),
				Pt = At({ defaultModifiers: [it, Et, tt, N, _t, yt, xt, G, wt] }),
				Ot = At({ defaultModifiers: [it, Et, tt, N] });
			const Mt = {
					find: (t, e = document.documentElement) =>
						[].concat(...Element.prototype.querySelectorAll.call(e, t)),
					findOne: (t, e = document.documentElement) =>
						Element.prototype.querySelector.call(e, t),
					children: (t, e) =>
						[].concat(...t.children).filter((t) => t.matches(e)),
					parents(t, e) {
						const i = [];
						let n = t.parentNode;
						for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType; )
							n.matches(e) && i.push(n), (n = n.parentNode);
						return i;
					},
					prev(t, e) {
						let i = t.previousElementSibling;
						for (; i; ) {
							if (i.matches(e)) return [i];
							i = i.previousElementSibling;
						}
						return [];
					},
					next(t, e) {
						let i = t.nextElementSibling;
						for (; i; ) {
							if (i.matches(e)) return [i];
							i = i.nextElementSibling;
						}
						return [];
					},
				},
				Nt = "transitionend",
				It = (t) => {
					do {
						t += Math.floor(1e6 * Math.random());
					} while (document.getElementById(t));
					return t;
				},
				Dt = (t) => {
					let e = t.getAttribute("data-bs-target");
					if (!e || "#" === e) {
						let i = t.getAttribute("href");
						if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
						i.includes("#") &&
							!i.startsWith("#") &&
							(i = `#${i.split("#")[1]}`),
							(e = i && "#" !== i ? i.trim() : null);
					}
					return e;
				},
				jt = (t) => {
					const e = Dt(t);
					return e && document.querySelector(e) ? e : null;
				},
				Ht = (t) => {
					const e = Dt(t);
					return e ? document.querySelector(e) : null;
				},
				Ft = (t) => {
					t.dispatchEvent(new Event(Nt));
				},
				zt = (t) =>
					!(!t || "object" != typeof t) &&
					(void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
				Rt = (t) =>
					zt(t)
						? t.jquery
							? t[0]
							: t
						: "string" == typeof t && t.length > 0
						? Mt.findOne(t)
						: null,
				Bt = (t, e, i) => {
					Object.keys(i).forEach((n) => {
						const s = i[n],
							o = e[n],
							r =
								o && zt(o)
									? "element"
									: null == (a = o)
									? `${a}`
									: {}.toString
											.call(a)
											.match(/\s([a-z]+)/i)[1]
											.toLowerCase();
						var a;
						if (!new RegExp(s).test(r))
							throw new TypeError(
								`${t.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`
							);
					});
				},
				$t = (t) =>
					!(!zt(t) || 0 === t.getClientRects().length) &&
					"visible" === getComputedStyle(t).getPropertyValue("visibility"),
				qt = (t) =>
					!t ||
					t.nodeType !== Node.ELEMENT_NODE ||
					!!t.classList.contains("disabled") ||
					(void 0 !== t.disabled
						? t.disabled
						: t.hasAttribute("disabled") &&
						  "false" !== t.getAttribute("disabled")),
				Wt = (t) => {
					if (!document.documentElement.attachShadow) return null;
					if ("function" == typeof t.getRootNode) {
						const e = t.getRootNode();
						return e instanceof ShadowRoot ? e : null;
					}
					return t instanceof ShadowRoot
						? t
						: t.parentNode
						? Wt(t.parentNode)
						: null;
				},
				Vt = () => {},
				Ut = (t) => t.offsetHeight,
				Yt = () => {
					const { jQuery: t } = window;
					return t && !document.body.hasAttribute("data-bs-no-jquery")
						? t
						: null;
				},
				Qt = [],
				Kt = () => "rtl" === document.documentElement.dir,
				Xt = (t) => {
					var e;
					(e = () => {
						const e = Yt();
						if (e) {
							const i = t.NAME,
								n = e.fn[i];
							(e.fn[i] = t.jQueryInterface),
								(e.fn[i].Constructor = t),
								(e.fn[i].noConflict = () => ((e.fn[i] = n), t.jQueryInterface));
						}
					}),
						"loading" === document.readyState
							? (Qt.length ||
									document.addEventListener("DOMContentLoaded", () => {
										Qt.forEach((t) => t());
									}),
							  Qt.push(e))
							: e();
				},
				Gt = (t) => {
					"function" == typeof t && t();
				},
				Jt = (t, e, i = !0) => {
					if (!i) return void Gt(t);
					const n =
						((t) => {
							if (!t) return 0;
							let { transitionDuration: e, transitionDelay: i } =
								window.getComputedStyle(t);
							const n = Number.parseFloat(e),
								s = Number.parseFloat(i);
							return n || s
								? ((e = e.split(",")[0]),
								  (i = i.split(",")[0]),
								  1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
								: 0;
						})(e) + 5;
					let s = !1;
					const o = ({ target: i }) => {
						i === e && ((s = !0), e.removeEventListener(Nt, o), Gt(t));
					};
					e.addEventListener(Nt, o),
						setTimeout(() => {
							s || Ft(e);
						}, n);
				},
				Zt = (t, e, i, n) => {
					let s = t.indexOf(e);
					if (-1 === s) return t[!i && n ? t.length - 1 : 0];
					const o = t.length;
					return (
						(s += i ? 1 : -1),
						n && (s = (s + o) % o),
						t[Math.max(0, Math.min(s, o - 1))]
					);
				},
				te = /[^.]*(?=\..*)\.|.*/,
				ee = /\..*/,
				ie = /::\d+$/,
				ne = {};
			let se = 1;
			const oe = { mouseenter: "mouseover", mouseleave: "mouseout" },
				re = /^(mouseenter|mouseleave)/i,
				ae = new Set([
					"click",
					"dblclick",
					"mouseup",
					"mousedown",
					"contextmenu",
					"mousewheel",
					"DOMMouseScroll",
					"mouseover",
					"mouseout",
					"mousemove",
					"selectstart",
					"selectend",
					"keydown",
					"keypress",
					"keyup",
					"orientationchange",
					"touchstart",
					"touchmove",
					"touchend",
					"touchcancel",
					"pointerdown",
					"pointermove",
					"pointerup",
					"pointerleave",
					"pointercancel",
					"gesturestart",
					"gesturechange",
					"gestureend",
					"focus",
					"blur",
					"change",
					"reset",
					"select",
					"submit",
					"focusin",
					"focusout",
					"load",
					"unload",
					"beforeunload",
					"resize",
					"move",
					"DOMContentLoaded",
					"readystatechange",
					"error",
					"abort",
					"scroll",
				]);
			function le(t, e) {
				return (e && `${e}::${se++}`) || t.uidEvent || se++;
			}
			function ce(t) {
				const e = le(t);
				return (t.uidEvent = e), (ne[e] = ne[e] || {}), ne[e];
			}
			function ue(t, e, i = null) {
				const n = Object.keys(t);
				for (let s = 0, o = n.length; s < o; s++) {
					const o = t[n[s]];
					if (o.originalHandler === e && o.delegationSelector === i) return o;
				}
				return null;
			}
			function he(t, e, i) {
				const n = "string" == typeof e,
					s = n ? i : e;
				let o = fe(t);
				return ae.has(o) || (o = t), [n, s, o];
			}
			function de(t, e, i, n, s) {
				if ("string" != typeof e || !t) return;
				if ((i || ((i = n), (n = null)), re.test(e))) {
					const t = (t) =>
						function (e) {
							if (
								!e.relatedTarget ||
								(e.relatedTarget !== e.delegateTarget &&
									!e.delegateTarget.contains(e.relatedTarget))
							)
								return t.call(this, e);
						};
					n ? (n = t(n)) : (i = t(i));
				}
				const [o, r, a] = he(e, i, n),
					l = ce(t),
					c = l[a] || (l[a] = {}),
					u = ue(c, r, o ? i : null);
				if (u) return void (u.oneOff = u.oneOff && s);
				const h = le(r, e.replace(te, "")),
					d = o
						? (function (t, e, i) {
								return function n(s) {
									const o = t.querySelectorAll(e);
									for (let { target: r } = s; r && r !== this; r = r.parentNode)
										for (let a = o.length; a--; )
											if (o[a] === r)
												return (
													(s.delegateTarget = r),
													n.oneOff && me.off(t, s.type, e, i),
													i.apply(r, [s])
												);
									return null;
								};
						  })(t, i, n)
						: (function (t, e) {
								return function i(n) {
									return (
										(n.delegateTarget = t),
										i.oneOff && me.off(t, n.type, e),
										e.apply(t, [n])
									);
								};
						  })(t, i);
				(d.delegationSelector = o ? i : null),
					(d.originalHandler = r),
					(d.oneOff = s),
					(d.uidEvent = h),
					(c[h] = d),
					t.addEventListener(a, d, o);
			}
			function pe(t, e, i, n, s) {
				const o = ue(e[i], n, s);
				o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
			}
			function fe(t) {
				return (t = t.replace(ee, "")), oe[t] || t;
			}
			const me = {
					on(t, e, i, n) {
						de(t, e, i, n, !1);
					},
					one(t, e, i, n) {
						de(t, e, i, n, !0);
					},
					off(t, e, i, n) {
						if ("string" != typeof e || !t) return;
						const [s, o, r] = he(e, i, n),
							a = r !== e,
							l = ce(t),
							c = e.startsWith(".");
						if (void 0 !== o) {
							if (!l || !l[r]) return;
							return void pe(t, l, r, o, s ? i : null);
						}
						c &&
							Object.keys(l).forEach((i) => {
								!(function (t, e, i, n) {
									const s = e[i] || {};
									Object.keys(s).forEach((o) => {
										if (o.includes(n)) {
											const n = s[o];
											pe(t, e, i, n.originalHandler, n.delegationSelector);
										}
									});
								})(t, l, i, e.slice(1));
							});
						const u = l[r] || {};
						Object.keys(u).forEach((i) => {
							const n = i.replace(ie, "");
							if (!a || e.includes(n)) {
								const e = u[i];
								pe(t, l, r, e.originalHandler, e.delegationSelector);
							}
						});
					},
					trigger(t, e, i) {
						if ("string" != typeof e || !t) return null;
						const n = Yt(),
							s = fe(e),
							o = e !== s,
							r = ae.has(s);
						let a,
							l = !0,
							c = !0,
							u = !1,
							h = null;
						return (
							o &&
								n &&
								((a = n.Event(e, i)),
								n(t).trigger(a),
								(l = !a.isPropagationStopped()),
								(c = !a.isImmediatePropagationStopped()),
								(u = a.isDefaultPrevented())),
							r
								? ((h = document.createEvent("HTMLEvents")),
								  h.initEvent(s, l, !0))
								: (h = new CustomEvent(e, { bubbles: l, cancelable: !0 })),
							void 0 !== i &&
								Object.keys(i).forEach((t) => {
									Object.defineProperty(h, t, { get: () => i[t] });
								}),
							u && h.preventDefault(),
							c && t.dispatchEvent(h),
							h.defaultPrevented && void 0 !== a && a.preventDefault(),
							h
						);
					},
				},
				ge = new Map();
			var ye = {
				set(t, e, i) {
					ge.has(t) || ge.set(t, new Map());
					const n = ge.get(t);
					n.has(e) || 0 === n.size
						? n.set(e, i)
						: console.error(
								`Bootstrap doesn't allow more than one instance per element. Bound instance: ${
									Array.from(n.keys())[0]
								}.`
						  );
				},
				get: (t, e) => (ge.has(t) && ge.get(t).get(e)) || null,
				remove(t, e) {
					if (!ge.has(t)) return;
					const i = ge.get(t);
					i.delete(e), 0 === i.size && ge.delete(t);
				},
			};
			class ve {
				constructor(t) {
					(t = Rt(t)) &&
						((this._element = t),
						ye.set(this._element, this.constructor.DATA_KEY, this));
				}
				dispose() {
					ye.remove(this._element, this.constructor.DATA_KEY),
						me.off(this._element, this.constructor.EVENT_KEY),
						Object.getOwnPropertyNames(this).forEach((t) => {
							this[t] = null;
						});
				}
				_queueCallback(t, e, i = !0) {
					Jt(t, e, i);
				}
				static getInstance(t) {
					return ye.get(t, this.DATA_KEY);
				}
				static getOrCreateInstance(t, e = {}) {
					return (
						this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
					);
				}
				static get VERSION() {
					return "5.0.2";
				}
				static get NAME() {
					throw new Error(
						'You have to implement the static method "NAME", for each component!'
					);
				}
				static get DATA_KEY() {
					return `bs.${this.NAME}`;
				}
				static get EVENT_KEY() {
					return `.${this.DATA_KEY}`;
				}
			}
			class be extends ve {
				static get NAME() {
					return "alert";
				}
				close(t) {
					const e = t ? this._getRootElement(t) : this._element,
						i = this._triggerCloseEvent(e);
					null === i || i.defaultPrevented || this._removeElement(e);
				}
				_getRootElement(t) {
					return Ht(t) || t.closest(".alert");
				}
				_triggerCloseEvent(t) {
					return me.trigger(t, "close.bs.alert");
				}
				_removeElement(t) {
					t.classList.remove("show");
					const e = t.classList.contains("fade");
					this._queueCallback(() => this._destroyElement(t), t, e);
				}
				_destroyElement(t) {
					t.remove(), me.trigger(t, "closed.bs.alert");
				}
				static jQueryInterface(t) {
					return this.each(function () {
						const e = be.getOrCreateInstance(this);
						"close" === t && e[t](this);
					});
				}
				static handleDismiss(t) {
					return function (e) {
						e && e.preventDefault(), t.close(this);
					};
				}
			}
			me.on(
				document,
				"click.bs.alert.data-api",
				'[data-bs-dismiss="alert"]',
				be.handleDismiss(new be())
			),
				Xt(be);
			const we = '[data-bs-toggle="button"]';
			class _e extends ve {
				static get NAME() {
					return "button";
				}
				toggle() {
					this._element.setAttribute(
						"aria-pressed",
						this._element.classList.toggle("active")
					);
				}
				static jQueryInterface(t) {
					return this.each(function () {
						const e = _e.getOrCreateInstance(this);
						"toggle" === t && e[t]();
					});
				}
			}
			function Ee(t) {
				return (
					"true" === t ||
					("false" !== t &&
						(t === Number(t).toString()
							? Number(t)
							: "" === t || "null" === t
							? null
							: t))
				);
			}
			function xe(t) {
				return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
			}
			me.on(document, "click.bs.button.data-api", we, (t) => {
				t.preventDefault();
				const e = t.target.closest(we);
				_e.getOrCreateInstance(e).toggle();
			}),
				Xt(_e);
			const ke = {
					setDataAttribute(t, e, i) {
						t.setAttribute(`data-bs-${xe(e)}`, i);
					},
					removeDataAttribute(t, e) {
						t.removeAttribute(`data-bs-${xe(e)}`);
					},
					getDataAttributes(t) {
						if (!t) return {};
						const e = {};
						return (
							Object.keys(t.dataset)
								.filter((t) => t.startsWith("bs"))
								.forEach((i) => {
									let n = i.replace(/^bs/, "");
									(n = n.charAt(0).toLowerCase() + n.slice(1, n.length)),
										(e[n] = Ee(t.dataset[i]));
								}),
							e
						);
					},
					getDataAttribute: (t, e) => Ee(t.getAttribute(`data-bs-${xe(e)}`)),
					offset(t) {
						const e = t.getBoundingClientRect();
						return {
							top: e.top + document.body.scrollTop,
							left: e.left + document.body.scrollLeft,
						};
					},
					position: (t) => ({ top: t.offsetTop, left: t.offsetLeft }),
				},
				Te = "carousel",
				Ce = {
					interval: 5e3,
					keyboard: !0,
					slide: !1,
					pause: "hover",
					wrap: !0,
					touch: !0,
				},
				Se = {
					interval: "(number|boolean)",
					keyboard: "boolean",
					slide: "(boolean|string)",
					pause: "(string|boolean)",
					wrap: "boolean",
					touch: "boolean",
				},
				Ae = "next",
				Le = "prev",
				Pe = "left",
				Oe = "right",
				Me = { ArrowLeft: Oe, ArrowRight: Pe },
				Ne = "slid.bs.carousel",
				Ie = "active",
				De = ".active.carousel-item",
				je = "touch";
			class He extends ve {
				constructor(t, e) {
					super(t),
						(this._items = null),
						(this._interval = null),
						(this._activeElement = null),
						(this._isPaused = !1),
						(this._isSliding = !1),
						(this.touchTimeout = null),
						(this.touchStartX = 0),
						(this.touchDeltaX = 0),
						(this._config = this._getConfig(e)),
						(this._indicatorsElement = Mt.findOne(
							".carousel-indicators",
							this._element
						)),
						(this._touchSupported =
							"ontouchstart" in document.documentElement ||
							navigator.maxTouchPoints > 0),
						(this._pointerEvent = Boolean(window.PointerEvent)),
						this._addEventListeners();
				}
				static get Default() {
					return Ce;
				}
				static get NAME() {
					return Te;
				}
				next() {
					this._slide(Ae);
				}
				nextWhenVisible() {
					!document.hidden && $t(this._element) && this.next();
				}
				prev() {
					this._slide(Le);
				}
				pause(t) {
					t || (this._isPaused = !0),
						Mt.findOne(
							".carousel-item-next, .carousel-item-prev",
							this._element
						) && (Ft(this._element), this.cycle(!0)),
						clearInterval(this._interval),
						(this._interval = null);
				}
				cycle(t) {
					t || (this._isPaused = !1),
						this._interval &&
							(clearInterval(this._interval), (this._interval = null)),
						this._config &&
							this._config.interval &&
							!this._isPaused &&
							(this._updateInterval(),
							(this._interval = setInterval(
								(document.visibilityState
									? this.nextWhenVisible
									: this.next
								).bind(this),
								this._config.interval
							)));
				}
				to(t) {
					this._activeElement = Mt.findOne(De, this._element);
					const e = this._getItemIndex(this._activeElement);
					if (t > this._items.length - 1 || t < 0) return;
					if (this._isSliding)
						return void me.one(this._element, Ne, () => this.to(t));
					if (e === t) return this.pause(), void this.cycle();
					const i = t > e ? Ae : Le;
					this._slide(i, this._items[t]);
				}
				_getConfig(t) {
					return (
						(t = {
							...Ce,
							...ke.getDataAttributes(this._element),
							...("object" == typeof t ? t : {}),
						}),
						Bt(Te, t, Se),
						t
					);
				}
				_handleSwipe() {
					const t = Math.abs(this.touchDeltaX);
					if (t <= 40) return;
					const e = t / this.touchDeltaX;
					(this.touchDeltaX = 0), e && this._slide(e > 0 ? Oe : Pe);
				}
				_addEventListeners() {
					this._config.keyboard &&
						me.on(this._element, "keydown.bs.carousel", (t) =>
							this._keydown(t)
						),
						"hover" === this._config.pause &&
							(me.on(this._element, "mouseenter.bs.carousel", (t) =>
								this.pause(t)
							),
							me.on(this._element, "mouseleave.bs.carousel", (t) =>
								this.cycle(t)
							)),
						this._config.touch &&
							this._touchSupported &&
							this._addTouchEventListeners();
				}
				_addTouchEventListeners() {
					const t = (t) => {
							!this._pointerEvent ||
							("pen" !== t.pointerType && t.pointerType !== je)
								? this._pointerEvent ||
								  (this.touchStartX = t.touches[0].clientX)
								: (this.touchStartX = t.clientX);
						},
						e = (t) => {
							this.touchDeltaX =
								t.touches && t.touches.length > 1
									? 0
									: t.touches[0].clientX - this.touchStartX;
						},
						i = (t) => {
							!this._pointerEvent ||
								("pen" !== t.pointerType && t.pointerType !== je) ||
								(this.touchDeltaX = t.clientX - this.touchStartX),
								this._handleSwipe(),
								"hover" === this._config.pause &&
									(this.pause(),
									this.touchTimeout && clearTimeout(this.touchTimeout),
									(this.touchTimeout = setTimeout(
										(t) => this.cycle(t),
										500 + this._config.interval
									)));
						};
					Mt.find(".carousel-item img", this._element).forEach((t) => {
						me.on(t, "dragstart.bs.carousel", (t) => t.preventDefault());
					}),
						this._pointerEvent
							? (me.on(this._element, "pointerdown.bs.carousel", (e) => t(e)),
							  me.on(this._element, "pointerup.bs.carousel", (t) => i(t)),
							  this._element.classList.add("pointer-event"))
							: (me.on(this._element, "touchstart.bs.carousel", (e) => t(e)),
							  me.on(this._element, "touchmove.bs.carousel", (t) => e(t)),
							  me.on(this._element, "touchend.bs.carousel", (t) => i(t)));
				}
				_keydown(t) {
					if (/input|textarea/i.test(t.target.tagName)) return;
					const e = Me[t.key];
					e && (t.preventDefault(), this._slide(e));
				}
				_getItemIndex(t) {
					return (
						(this._items =
							t && t.parentNode ? Mt.find(".carousel-item", t.parentNode) : []),
						this._items.indexOf(t)
					);
				}
				_getItemByOrder(t, e) {
					const i = t === Ae;
					return Zt(this._items, e, i, this._config.wrap);
				}
				_triggerSlideEvent(t, e) {
					const i = this._getItemIndex(t),
						n = this._getItemIndex(Mt.findOne(De, this._element));
					return me.trigger(this._element, "slide.bs.carousel", {
						relatedTarget: t,
						direction: e,
						from: n,
						to: i,
					});
				}
				_setActiveIndicatorElement(t) {
					if (this._indicatorsElement) {
						const e = Mt.findOne(".active", this._indicatorsElement);
						e.classList.remove(Ie), e.removeAttribute("aria-current");
						const i = Mt.find("[data-bs-target]", this._indicatorsElement);
						for (let e = 0; e < i.length; e++)
							if (
								Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) ===
								this._getItemIndex(t)
							) {
								i[e].classList.add(Ie),
									i[e].setAttribute("aria-current", "true");
								break;
							}
					}
				}
				_updateInterval() {
					const t = this._activeElement || Mt.findOne(De, this._element);
					if (!t) return;
					const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
					e
						? ((this._config.defaultInterval =
								this._config.defaultInterval || this._config.interval),
						  (this._config.interval = e))
						: (this._config.interval =
								this._config.defaultInterval || this._config.interval);
				}
				_slide(t, e) {
					const i = this._directionToOrder(t),
						n = Mt.findOne(De, this._element),
						s = this._getItemIndex(n),
						o = e || this._getItemByOrder(i, n),
						r = this._getItemIndex(o),
						a = Boolean(this._interval),
						l = i === Ae,
						c = l ? "carousel-item-start" : "carousel-item-end",
						u = l ? "carousel-item-next" : "carousel-item-prev",
						h = this._orderToDirection(i);
					if (o && o.classList.contains(Ie)) return void (this._isSliding = !1);
					if (this._isSliding) return;
					if (this._triggerSlideEvent(o, h).defaultPrevented) return;
					if (!n || !o) return;
					(this._isSliding = !0),
						a && this.pause(),
						this._setActiveIndicatorElement(o),
						(this._activeElement = o);
					const d = () => {
						me.trigger(this._element, Ne, {
							relatedTarget: o,
							direction: h,
							from: s,
							to: r,
						});
					};
					if (this._element.classList.contains("slide")) {
						o.classList.add(u), Ut(o), n.classList.add(c), o.classList.add(c);
						const t = () => {
							o.classList.remove(c, u),
								o.classList.add(Ie),
								n.classList.remove(Ie, u, c),
								(this._isSliding = !1),
								setTimeout(d, 0);
						};
						this._queueCallback(t, n, !0);
					} else
						n.classList.remove(Ie),
							o.classList.add(Ie),
							(this._isSliding = !1),
							d();
					a && this.cycle();
				}
				_directionToOrder(t) {
					return [Oe, Pe].includes(t)
						? Kt()
							? t === Pe
								? Le
								: Ae
							: t === Pe
							? Ae
							: Le
						: t;
				}
				_orderToDirection(t) {
					return [Ae, Le].includes(t)
						? Kt()
							? t === Le
								? Pe
								: Oe
							: t === Le
							? Oe
							: Pe
						: t;
				}
				static carouselInterface(t, e) {
					const i = He.getOrCreateInstance(t, e);
					let { _config: n } = i;
					"object" == typeof e && (n = { ...n, ...e });
					const s = "string" == typeof e ? e : n.slide;
					if ("number" == typeof e) i.to(e);
					else if ("string" == typeof s) {
						if (void 0 === i[s]) throw new TypeError(`No method named "${s}"`);
						i[s]();
					} else n.interval && n.ride && (i.pause(), i.cycle());
				}
				static jQueryInterface(t) {
					return this.each(function () {
						He.carouselInterface(this, t);
					});
				}
				static dataApiClickHandler(t) {
					const e = Ht(this);
					if (!e || !e.classList.contains("carousel")) return;
					const i = {
							...ke.getDataAttributes(e),
							...ke.getDataAttributes(this),
						},
						n = this.getAttribute("data-bs-slide-to");
					n && (i.interval = !1),
						He.carouselInterface(e, i),
						n && He.getInstance(e).to(n),
						t.preventDefault();
				}
			}
			me.on(
				document,
				"click.bs.carousel.data-api",
				"[data-bs-slide], [data-bs-slide-to]",
				He.dataApiClickHandler
			),
				me.on(window, "load.bs.carousel.data-api", () => {
					const t = Mt.find('[data-bs-ride="carousel"]');
					for (let e = 0, i = t.length; e < i; e++)
						He.carouselInterface(t[e], He.getInstance(t[e]));
				}),
				Xt(He);
			const Fe = "collapse",
				ze = { toggle: !0, parent: "" },
				Re = { toggle: "boolean", parent: "(string|element)" },
				Be = "show",
				$e = "collapse",
				qe = "collapsing",
				We = "collapsed",
				Ve = "width",
				Ue = '[data-bs-toggle="collapse"]';
			class Ye extends ve {
				constructor(t, e) {
					super(t),
						(this._isTransitioning = !1),
						(this._config = this._getConfig(e)),
						(this._triggerArray = Mt.find(
							`${Ue}[href="#${this._element.id}"],${Ue}[data-bs-target="#${this._element.id}"]`
						));
					const i = Mt.find(Ue);
					for (let t = 0, e = i.length; t < e; t++) {
						const e = i[t],
							n = jt(e),
							s = Mt.find(n).filter((t) => t === this._element);
						null !== n &&
							s.length &&
							((this._selector = n), this._triggerArray.push(e));
					}
					(this._parent = this._config.parent ? this._getParent() : null),
						this._config.parent ||
							this._addAriaAndCollapsedClass(this._element, this._triggerArray),
						this._config.toggle && this.toggle();
				}
				static get Default() {
					return ze;
				}
				static get NAME() {
					return Fe;
				}
				toggle() {
					this._element.classList.contains(Be) ? this.hide() : this.show();
				}
				show() {
					if (this._isTransitioning || this._element.classList.contains(Be))
						return;
					let t, e;
					this._parent &&
						((t = Mt.find(".show, .collapsing", this._parent).filter((t) =>
							"string" == typeof this._config.parent
								? t.getAttribute("data-bs-parent") === this._config.parent
								: t.classList.contains($e)
						)),
						0 === t.length && (t = null));
					const i = Mt.findOne(this._selector);
					if (t) {
						const n = t.find((t) => i !== t);
						if (((e = n ? Ye.getInstance(n) : null), e && e._isTransitioning))
							return;
					}
					if (me.trigger(this._element, "show.bs.collapse").defaultPrevented)
						return;
					t &&
						t.forEach((t) => {
							i !== t && Ye.collapseInterface(t, "hide"),
								e || ye.set(t, "bs.collapse", null);
						});
					const n = this._getDimension();
					this._element.classList.remove($e),
						this._element.classList.add(qe),
						(this._element.style[n] = 0),
						this._triggerArray.length &&
							this._triggerArray.forEach((t) => {
								t.classList.remove(We), t.setAttribute("aria-expanded", !0);
							}),
						this.setTransitioning(!0);
					const s = `scroll${n[0].toUpperCase() + n.slice(1)}`;
					this._queueCallback(
						() => {
							this._element.classList.remove(qe),
								this._element.classList.add($e, Be),
								(this._element.style[n] = ""),
								this.setTransitioning(!1),
								me.trigger(this._element, "shown.bs.collapse");
						},
						this._element,
						!0
					),
						(this._element.style[n] = `${this._element[s]}px`);
				}
				hide() {
					if (this._isTransitioning || !this._element.classList.contains(Be))
						return;
					if (me.trigger(this._element, "hide.bs.collapse").defaultPrevented)
						return;
					const t = this._getDimension();
					(this._element.style[t] = `${
						this._element.getBoundingClientRect()[t]
					}px`),
						Ut(this._element),
						this._element.classList.add(qe),
						this._element.classList.remove($e, Be);
					const e = this._triggerArray.length;
					if (e > 0)
						for (let t = 0; t < e; t++) {
							const e = this._triggerArray[t],
								i = Ht(e);
							i &&
								!i.classList.contains(Be) &&
								(e.classList.add(We), e.setAttribute("aria-expanded", !1));
						}
					this.setTransitioning(!0),
						(this._element.style[t] = ""),
						this._queueCallback(
							() => {
								this.setTransitioning(!1),
									this._element.classList.remove(qe),
									this._element.classList.add($e),
									me.trigger(this._element, "hidden.bs.collapse");
							},
							this._element,
							!0
						);
				}
				setTransitioning(t) {
					this._isTransitioning = t;
				}
				_getConfig(t) {
					return (
						((t = { ...ze, ...t }).toggle = Boolean(t.toggle)), Bt(Fe, t, Re), t
					);
				}
				_getDimension() {
					return this._element.classList.contains(Ve) ? Ve : "height";
				}
				_getParent() {
					let { parent: t } = this._config;
					t = Rt(t);
					const e = `${Ue}[data-bs-parent="${t}"]`;
					return (
						Mt.find(e, t).forEach((t) => {
							const e = Ht(t);
							this._addAriaAndCollapsedClass(e, [t]);
						}),
						t
					);
				}
				_addAriaAndCollapsedClass(t, e) {
					if (!t || !e.length) return;
					const i = t.classList.contains(Be);
					e.forEach((t) => {
						i ? t.classList.remove(We) : t.classList.add(We),
							t.setAttribute("aria-expanded", i);
					});
				}
				static collapseInterface(t, e) {
					let i = Ye.getInstance(t);
					const n = {
						...ze,
						...ke.getDataAttributes(t),
						...("object" == typeof e && e ? e : {}),
					};
					if (
						(!i &&
							n.toggle &&
							"string" == typeof e &&
							/show|hide/.test(e) &&
							(n.toggle = !1),
						i || (i = new Ye(t, n)),
						"string" == typeof e)
					) {
						if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
						i[e]();
					}
				}
				static jQueryInterface(t) {
					return this.each(function () {
						Ye.collapseInterface(this, t);
					});
				}
			}
			me.on(document, "click.bs.collapse.data-api", Ue, function (t) {
				("A" === t.target.tagName ||
					(t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
					t.preventDefault();
				const e = ke.getDataAttributes(this),
					i = jt(this);
				Mt.find(i).forEach((t) => {
					const i = Ye.getInstance(t);
					let n;
					i
						? (null === i._parent &&
								"string" == typeof e.parent &&
								((i._config.parent = e.parent), (i._parent = i._getParent())),
						  (n = "toggle"))
						: (n = e),
						Ye.collapseInterface(t, n);
				});
			}),
				Xt(Ye);
			const Qe = "dropdown",
				Ke = "Escape",
				Xe = "Space",
				Ge = "ArrowUp",
				Je = "ArrowDown",
				Ze = new RegExp("ArrowUp|ArrowDown|Escape"),
				ti = "click.bs.dropdown.data-api",
				ei = "keydown.bs.dropdown.data-api",
				ii = "show",
				ni = '[data-bs-toggle="dropdown"]',
				si = ".dropdown-menu",
				oi = Kt() ? "top-end" : "top-start",
				ri = Kt() ? "top-start" : "top-end",
				ai = Kt() ? "bottom-end" : "bottom-start",
				li = Kt() ? "bottom-start" : "bottom-end",
				ci = Kt() ? "left-start" : "right-start",
				ui = Kt() ? "right-start" : "left-start",
				hi = {
					offset: [0, 2],
					boundary: "clippingParents",
					reference: "toggle",
					display: "dynamic",
					popperConfig: null,
					autoClose: !0,
				},
				di = {
					offset: "(array|string|function)",
					boundary: "(string|element)",
					reference: "(string|element|object)",
					display: "string",
					popperConfig: "(null|object|function)",
					autoClose: "(boolean|string)",
				};
			class pi extends ve {
				constructor(t, e) {
					super(t),
						(this._popper = null),
						(this._config = this._getConfig(e)),
						(this._menu = this._getMenuElement()),
						(this._inNavbar = this._detectNavbar()),
						this._addEventListeners();
				}
				static get Default() {
					return hi;
				}
				static get DefaultType() {
					return di;
				}
				static get NAME() {
					return Qe;
				}
				toggle() {
					qt(this._element) ||
						(this._element.classList.contains(ii) ? this.hide() : this.show());
				}
				show() {
					if (qt(this._element) || this._menu.classList.contains(ii)) return;
					const t = pi.getParentFromElement(this._element),
						e = { relatedTarget: this._element };
					if (
						!me.trigger(this._element, "show.bs.dropdown", e).defaultPrevented
					) {
						if (this._inNavbar)
							ke.setDataAttribute(this._menu, "popper", "none");
						else {
							if (void 0 === n)
								throw new TypeError(
									"Bootstrap's dropdowns require Popper (https://popper.js.org)"
								);
							let e = this._element;
							"parent" === this._config.reference
								? (e = t)
								: zt(this._config.reference)
								? (e = Rt(this._config.reference))
								: "object" == typeof this._config.reference &&
								  (e = this._config.reference);
							const i = this._getPopperConfig(),
								s = i.modifiers.find(
									(t) => "applyStyles" === t.name && !1 === t.enabled
								);
							(this._popper = Pt(e, this._menu, i)),
								s && ke.setDataAttribute(this._menu, "popper", "static");
						}
						"ontouchstart" in document.documentElement &&
							!t.closest(".navbar-nav") &&
							[]
								.concat(...document.body.children)
								.forEach((t) => me.on(t, "mouseover", Vt)),
							this._element.focus(),
							this._element.setAttribute("aria-expanded", !0),
							this._menu.classList.toggle(ii),
							this._element.classList.toggle(ii),
							me.trigger(this._element, "shown.bs.dropdown", e);
					}
				}
				hide() {
					if (qt(this._element) || !this._menu.classList.contains(ii)) return;
					const t = { relatedTarget: this._element };
					this._completeHide(t);
				}
				dispose() {
					this._popper && this._popper.destroy(), super.dispose();
				}
				update() {
					(this._inNavbar = this._detectNavbar()),
						this._popper && this._popper.update();
				}
				_addEventListeners() {
					me.on(this._element, "click.bs.dropdown", (t) => {
						t.preventDefault(), this.toggle();
					});
				}
				_completeHide(t) {
					me.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented ||
						("ontouchstart" in document.documentElement &&
							[]
								.concat(...document.body.children)
								.forEach((t) => me.off(t, "mouseover", Vt)),
						this._popper && this._popper.destroy(),
						this._menu.classList.remove(ii),
						this._element.classList.remove(ii),
						this._element.setAttribute("aria-expanded", "false"),
						ke.removeDataAttribute(this._menu, "popper"),
						me.trigger(this._element, "hidden.bs.dropdown", t));
				}
				_getConfig(t) {
					if (
						((t = {
							...this.constructor.Default,
							...ke.getDataAttributes(this._element),
							...t,
						}),
						Bt(Qe, t, this.constructor.DefaultType),
						"object" == typeof t.reference &&
							!zt(t.reference) &&
							"function" != typeof t.reference.getBoundingClientRect)
					)
						throw new TypeError(
							`${Qe.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
						);
					return t;
				}
				_getMenuElement() {
					return Mt.next(this._element, si)[0];
				}
				_getPlacement() {
					const t = this._element.parentNode;
					if (t.classList.contains("dropend")) return ci;
					if (t.classList.contains("dropstart")) return ui;
					const e =
						"end" ===
						getComputedStyle(this._menu)
							.getPropertyValue("--bs-position")
							.trim();
					return t.classList.contains("dropup") ? (e ? ri : oi) : e ? li : ai;
				}
				_detectNavbar() {
					return null !== this._element.closest(".navbar");
				}
				_getOffset() {
					const { offset: t } = this._config;
					return "string" == typeof t
						? t.split(",").map((t) => Number.parseInt(t, 10))
						: "function" == typeof t
						? (e) => t(e, this._element)
						: t;
				}
				_getPopperConfig() {
					const t = {
						placement: this._getPlacement(),
						modifiers: [
							{
								name: "preventOverflow",
								options: { boundary: this._config.boundary },
							},
							{ name: "offset", options: { offset: this._getOffset() } },
						],
					};
					return (
						"static" === this._config.display &&
							(t.modifiers = [{ name: "applyStyles", enabled: !1 }]),
						{
							...t,
							...("function" == typeof this._config.popperConfig
								? this._config.popperConfig(t)
								: this._config.popperConfig),
						}
					);
				}
				_selectMenuItem({ key: t, target: e }) {
					const i = Mt.find(
						".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
						this._menu
					).filter($t);
					i.length && Zt(i, e, t === Je, !i.includes(e)).focus();
				}
				static dropdownInterface(t, e) {
					const i = pi.getOrCreateInstance(t, e);
					if ("string" == typeof e) {
						if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
						i[e]();
					}
				}
				static jQueryInterface(t) {
					return this.each(function () {
						pi.dropdownInterface(this, t);
					});
				}
				static clearMenus(t) {
					if (t && (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)))
						return;
					const e = Mt.find(ni);
					for (let i = 0, n = e.length; i < n; i++) {
						const n = pi.getInstance(e[i]);
						if (!n || !1 === n._config.autoClose) continue;
						if (!n._element.classList.contains(ii)) continue;
						const s = { relatedTarget: n._element };
						if (t) {
							const e = t.composedPath(),
								i = e.includes(n._menu);
							if (
								e.includes(n._element) ||
								("inside" === n._config.autoClose && !i) ||
								("outside" === n._config.autoClose && i)
							)
								continue;
							if (
								n._menu.contains(t.target) &&
								(("keyup" === t.type && "Tab" === t.key) ||
									/input|select|option|textarea|form/i.test(t.target.tagName))
							)
								continue;
							"click" === t.type && (s.clickEvent = t);
						}
						n._completeHide(s);
					}
				}
				static getParentFromElement(t) {
					return Ht(t) || t.parentNode;
				}
				static dataApiKeydownHandler(t) {
					if (
						/input|textarea/i.test(t.target.tagName)
							? t.key === Xe ||
							  (t.key !== Ke &&
									((t.key !== Je && t.key !== Ge) || t.target.closest(si)))
							: !Ze.test(t.key)
					)
						return;
					const e = this.classList.contains(ii);
					if (!e && t.key === Ke) return;
					if ((t.preventDefault(), t.stopPropagation(), qt(this))) return;
					const i = () => (this.matches(ni) ? this : Mt.prev(this, ni)[0]);
					return t.key === Ke
						? (i().focus(), void pi.clearMenus())
						: t.key === Ge || t.key === Je
						? (e || i().click(), void pi.getInstance(i())._selectMenuItem(t))
						: void ((e && t.key !== Xe) || pi.clearMenus());
				}
			}
			me.on(document, ei, ni, pi.dataApiKeydownHandler),
				me.on(document, ei, si, pi.dataApiKeydownHandler),
				me.on(document, ti, pi.clearMenus),
				me.on(document, "keyup.bs.dropdown.data-api", pi.clearMenus),
				me.on(document, ti, ni, function (t) {
					t.preventDefault(), pi.dropdownInterface(this);
				}),
				Xt(pi);
			const fi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
				mi = ".sticky-top";
			class gi {
				constructor() {
					this._element = document.body;
				}
				getWidth() {
					const t = document.documentElement.clientWidth;
					return Math.abs(window.innerWidth - t);
				}
				hide() {
					const t = this.getWidth();
					this._disableOverFlow(),
						this._setElementAttributes(
							this._element,
							"paddingRight",
							(e) => e + t
						),
						this._setElementAttributes(fi, "paddingRight", (e) => e + t),
						this._setElementAttributes(mi, "marginRight", (e) => e - t);
				}
				_disableOverFlow() {
					this._saveInitialAttribute(this._element, "overflow"),
						(this._element.style.overflow = "hidden");
				}
				_setElementAttributes(t, e, i) {
					const n = this.getWidth();
					this._applyManipulationCallback(t, (t) => {
						if (t !== this._element && window.innerWidth > t.clientWidth + n)
							return;
						this._saveInitialAttribute(t, e);
						const s = window.getComputedStyle(t)[e];
						t.style[e] = `${i(Number.parseFloat(s))}px`;
					});
				}
				reset() {
					this._resetElementAttributes(this._element, "overflow"),
						this._resetElementAttributes(this._element, "paddingRight"),
						this._resetElementAttributes(fi, "paddingRight"),
						this._resetElementAttributes(mi, "marginRight");
				}
				_saveInitialAttribute(t, e) {
					const i = t.style[e];
					i && ke.setDataAttribute(t, e, i);
				}
				_resetElementAttributes(t, e) {
					this._applyManipulationCallback(t, (t) => {
						const i = ke.getDataAttribute(t, e);
						void 0 === i
							? t.style.removeProperty(e)
							: (ke.removeDataAttribute(t, e), (t.style[e] = i));
					});
				}
				_applyManipulationCallback(t, e) {
					zt(t) ? e(t) : Mt.find(t, this._element).forEach(e);
				}
				isOverflowing() {
					return this.getWidth() > 0;
				}
			}
			const yi = {
					isVisible: !0,
					isAnimated: !1,
					rootElement: "body",
					clickCallback: null,
				},
				vi = {
					isVisible: "boolean",
					isAnimated: "boolean",
					rootElement: "(element|string)",
					clickCallback: "(function|null)",
				},
				bi = "show",
				wi = "mousedown.bs.backdrop";
			class _i {
				constructor(t) {
					(this._config = this._getConfig(t)),
						(this._isAppended = !1),
						(this._element = null);
				}
				show(t) {
					this._config.isVisible
						? (this._append(),
						  this._config.isAnimated && Ut(this._getElement()),
						  this._getElement().classList.add(bi),
						  this._emulateAnimation(() => {
								Gt(t);
						  }))
						: Gt(t);
				}
				hide(t) {
					this._config.isVisible
						? (this._getElement().classList.remove(bi),
						  this._emulateAnimation(() => {
								this.dispose(), Gt(t);
						  }))
						: Gt(t);
				}
				_getElement() {
					if (!this._element) {
						const t = document.createElement("div");
						(t.className = "modal-backdrop"),
							this._config.isAnimated && t.classList.add("fade"),
							(this._element = t);
					}
					return this._element;
				}
				_getConfig(t) {
					return (
						((t = { ...yi, ...("object" == typeof t ? t : {}) }).rootElement =
							Rt(t.rootElement)),
						Bt("backdrop", t, vi),
						t
					);
				}
				_append() {
					this._isAppended ||
						(this._config.rootElement.appendChild(this._getElement()),
						me.on(this._getElement(), wi, () => {
							Gt(this._config.clickCallback);
						}),
						(this._isAppended = !0));
				}
				dispose() {
					this._isAppended &&
						(me.off(this._element, wi),
						this._element.remove(),
						(this._isAppended = !1));
				}
				_emulateAnimation(t) {
					Jt(t, this._getElement(), this._config.isAnimated);
				}
			}
			const Ei = "modal",
				xi = "Escape",
				ki = { backdrop: !0, keyboard: !0, focus: !0 },
				Ti = {
					backdrop: "(boolean|string)",
					keyboard: "boolean",
					focus: "boolean",
				},
				Ci = "hidden.bs.modal",
				Si = "show.bs.modal",
				Ai = "focusin.bs.modal",
				Li = "resize.bs.modal",
				Pi = "click.dismiss.bs.modal",
				Oi = "keydown.dismiss.bs.modal",
				Mi = "mousedown.dismiss.bs.modal",
				Ni = "modal-open",
				Ii = "show",
				Di = "modal-static";
			class ji extends ve {
				constructor(t, e) {
					super(t),
						(this._config = this._getConfig(e)),
						(this._dialog = Mt.findOne(".modal-dialog", this._element)),
						(this._backdrop = this._initializeBackDrop()),
						(this._isShown = !1),
						(this._ignoreBackdropClick = !1),
						(this._isTransitioning = !1),
						(this._scrollBar = new gi());
				}
				static get Default() {
					return ki;
				}
				static get NAME() {
					return Ei;
				}
				toggle(t) {
					return this._isShown ? this.hide() : this.show(t);
				}
				show(t) {
					this._isShown ||
						this._isTransitioning ||
						me.trigger(this._element, Si, { relatedTarget: t })
							.defaultPrevented ||
						((this._isShown = !0),
						this._isAnimated() && (this._isTransitioning = !0),
						this._scrollBar.hide(),
						document.body.classList.add(Ni),
						this._adjustDialog(),
						this._setEscapeEvent(),
						this._setResizeEvent(),
						me.on(this._element, Pi, '[data-bs-dismiss="modal"]', (t) =>
							this.hide(t)
						),
						me.on(this._dialog, Mi, () => {
							me.one(this._element, "mouseup.dismiss.bs.modal", (t) => {
								t.target === this._element && (this._ignoreBackdropClick = !0);
							});
						}),
						this._showBackdrop(() => this._showElement(t)));
				}
				hide(t) {
					if (
						(t &&
							["A", "AREA"].includes(t.target.tagName) &&
							t.preventDefault(),
						!this._isShown || this._isTransitioning)
					)
						return;
					if (me.trigger(this._element, "hide.bs.modal").defaultPrevented)
						return;
					this._isShown = !1;
					const e = this._isAnimated();
					e && (this._isTransitioning = !0),
						this._setEscapeEvent(),
						this._setResizeEvent(),
						me.off(document, Ai),
						this._element.classList.remove(Ii),
						me.off(this._element, Pi),
						me.off(this._dialog, Mi),
						this._queueCallback(() => this._hideModal(), this._element, e);
				}
				dispose() {
					[window, this._dialog].forEach((t) => me.off(t, ".bs.modal")),
						this._backdrop.dispose(),
						super.dispose(),
						me.off(document, Ai);
				}
				handleUpdate() {
					this._adjustDialog();
				}
				_initializeBackDrop() {
					return new _i({
						isVisible: Boolean(this._config.backdrop),
						isAnimated: this._isAnimated(),
					});
				}
				_getConfig(t) {
					return (
						(t = {
							...ki,
							...ke.getDataAttributes(this._element),
							...("object" == typeof t ? t : {}),
						}),
						Bt(Ei, t, Ti),
						t
					);
				}
				_showElement(t) {
					const e = this._isAnimated(),
						i = Mt.findOne(".modal-body", this._dialog);
					(this._element.parentNode &&
						this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
						document.body.appendChild(this._element),
						(this._element.style.display = "block"),
						this._element.removeAttribute("aria-hidden"),
						this._element.setAttribute("aria-modal", !0),
						this._element.setAttribute("role", "dialog"),
						(this._element.scrollTop = 0),
						i && (i.scrollTop = 0),
						e && Ut(this._element),
						this._element.classList.add(Ii),
						this._config.focus && this._enforceFocus(),
						this._queueCallback(
							() => {
								this._config.focus && this._element.focus(),
									(this._isTransitioning = !1),
									me.trigger(this._element, "shown.bs.modal", {
										relatedTarget: t,
									});
							},
							this._dialog,
							e
						);
				}
				_enforceFocus() {
					me.off(document, Ai),
						me.on(document, Ai, (t) => {
							document === t.target ||
								this._element === t.target ||
								this._element.contains(t.target) ||
								this._element.focus();
						});
				}
				_setEscapeEvent() {
					this._isShown
						? me.on(this._element, Oi, (t) => {
								this._config.keyboard && t.key === xi
									? (t.preventDefault(), this.hide())
									: this._config.keyboard ||
									  t.key !== xi ||
									  this._triggerBackdropTransition();
						  })
						: me.off(this._element, Oi);
				}
				_setResizeEvent() {
					this._isShown
						? me.on(window, Li, () => this._adjustDialog())
						: me.off(window, Li);
				}
				_hideModal() {
					(this._element.style.display = "none"),
						this._element.setAttribute("aria-hidden", !0),
						this._element.removeAttribute("aria-modal"),
						this._element.removeAttribute("role"),
						(this._isTransitioning = !1),
						this._backdrop.hide(() => {
							document.body.classList.remove(Ni),
								this._resetAdjustments(),
								this._scrollBar.reset(),
								me.trigger(this._element, Ci);
						});
				}
				_showBackdrop(t) {
					me.on(this._element, Pi, (t) => {
						this._ignoreBackdropClick
							? (this._ignoreBackdropClick = !1)
							: t.target === t.currentTarget &&
							  (!0 === this._config.backdrop
									? this.hide()
									: "static" === this._config.backdrop &&
									  this._triggerBackdropTransition());
					}),
						this._backdrop.show(t);
				}
				_isAnimated() {
					return this._element.classList.contains("fade");
				}
				_triggerBackdropTransition() {
					if (
						me.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented
					)
						return;
					const { classList: t, scrollHeight: e, style: i } = this._element,
						n = e > document.documentElement.clientHeight;
					(!n && "hidden" === i.overflowY) ||
						t.contains(Di) ||
						(n || (i.overflowY = "hidden"),
						t.add(Di),
						this._queueCallback(() => {
							t.remove(Di),
								n ||
									this._queueCallback(() => {
										i.overflowY = "";
									}, this._dialog);
						}, this._dialog),
						this._element.focus());
				}
				_adjustDialog() {
					const t =
							this._element.scrollHeight >
							document.documentElement.clientHeight,
						e = this._scrollBar.getWidth(),
						i = e > 0;
					((!i && t && !Kt()) || (i && !t && Kt())) &&
						(this._element.style.paddingLeft = `${e}px`),
						((i && !t && !Kt()) || (!i && t && Kt())) &&
							(this._element.style.paddingRight = `${e}px`);
				}
				_resetAdjustments() {
					(this._element.style.paddingLeft = ""),
						(this._element.style.paddingRight = "");
				}
				static jQueryInterface(t, e) {
					return this.each(function () {
						const i = ji.getOrCreateInstance(this, t);
						if ("string" == typeof t) {
							if (void 0 === i[t])
								throw new TypeError(`No method named "${t}"`);
							i[t](e);
						}
					});
				}
			}
			me.on(
				document,
				"click.bs.modal.data-api",
				'[data-bs-toggle="modal"]',
				function (t) {
					const e = Ht(this);
					["A", "AREA"].includes(this.tagName) && t.preventDefault(),
						me.one(e, Si, (t) => {
							t.defaultPrevented ||
								me.one(e, Ci, () => {
									$t(this) && this.focus();
								});
						}),
						ji.getOrCreateInstance(e).toggle(this);
				}
			),
				Xt(ji);
			const Hi = "offcanvas",
				Fi = { backdrop: !0, keyboard: !0, scroll: !1 },
				zi = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" },
				Ri = "show",
				Bi = ".offcanvas.show",
				$i = "hidden.bs.offcanvas",
				qi = "focusin.bs.offcanvas";
			class Wi extends ve {
				constructor(t, e) {
					super(t),
						(this._config = this._getConfig(e)),
						(this._isShown = !1),
						(this._backdrop = this._initializeBackDrop()),
						this._addEventListeners();
				}
				static get NAME() {
					return Hi;
				}
				static get Default() {
					return Fi;
				}
				toggle(t) {
					return this._isShown ? this.hide() : this.show(t);
				}
				show(t) {
					this._isShown ||
						me.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t })
							.defaultPrevented ||
						((this._isShown = !0),
						(this._element.style.visibility = "visible"),
						this._backdrop.show(),
						this._config.scroll ||
							(new gi().hide(), this._enforceFocusOnElement(this._element)),
						this._element.removeAttribute("aria-hidden"),
						this._element.setAttribute("aria-modal", !0),
						this._element.setAttribute("role", "dialog"),
						this._element.classList.add(Ri),
						this._queueCallback(
							() => {
								me.trigger(this._element, "shown.bs.offcanvas", {
									relatedTarget: t,
								});
							},
							this._element,
							!0
						));
				}
				hide() {
					this._isShown &&
						(me.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
							(me.off(document, qi),
							this._element.blur(),
							(this._isShown = !1),
							this._element.classList.remove(Ri),
							this._backdrop.hide(),
							this._queueCallback(
								() => {
									this._element.setAttribute("aria-hidden", !0),
										this._element.removeAttribute("aria-modal"),
										this._element.removeAttribute("role"),
										(this._element.style.visibility = "hidden"),
										this._config.scroll || new gi().reset(),
										me.trigger(this._element, $i);
								},
								this._element,
								!0
							)));
				}
				dispose() {
					this._backdrop.dispose(), super.dispose(), me.off(document, qi);
				}
				_getConfig(t) {
					return (
						(t = {
							...Fi,
							...ke.getDataAttributes(this._element),
							...("object" == typeof t ? t : {}),
						}),
						Bt(Hi, t, zi),
						t
					);
				}
				_initializeBackDrop() {
					return new _i({
						isVisible: this._config.backdrop,
						isAnimated: !0,
						rootElement: this._element.parentNode,
						clickCallback: () => this.hide(),
					});
				}
				_enforceFocusOnElement(t) {
					me.off(document, qi),
						me.on(document, qi, (e) => {
							document === e.target ||
								t === e.target ||
								t.contains(e.target) ||
								t.focus();
						}),
						t.focus();
				}
				_addEventListeners() {
					me.on(
						this._element,
						"click.dismiss.bs.offcanvas",
						'[data-bs-dismiss="offcanvas"]',
						() => this.hide()
					),
						me.on(this._element, "keydown.dismiss.bs.offcanvas", (t) => {
							this._config.keyboard && "Escape" === t.key && this.hide();
						});
				}
				static jQueryInterface(t) {
					return this.each(function () {
						const e = Wi.getOrCreateInstance(this, t);
						if ("string" == typeof t) {
							if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
								throw new TypeError(`No method named "${t}"`);
							e[t](this);
						}
					});
				}
			}
			me.on(
				document,
				"click.bs.offcanvas.data-api",
				'[data-bs-toggle="offcanvas"]',
				function (t) {
					const e = Ht(this);
					if (
						(["A", "AREA"].includes(this.tagName) && t.preventDefault(),
						qt(this))
					)
						return;
					me.one(e, $i, () => {
						$t(this) && this.focus();
					});
					const i = Mt.findOne(Bi);
					i && i !== e && Wi.getInstance(i).hide(),
						Wi.getOrCreateInstance(e).toggle(this);
				}
			),
				me.on(window, "load.bs.offcanvas.data-api", () =>
					Mt.find(Bi).forEach((t) => Wi.getOrCreateInstance(t).show())
				),
				Xt(Wi);
			const Vi = new Set([
					"background",
					"cite",
					"href",
					"itemtype",
					"longdesc",
					"poster",
					"src",
					"xlink:href",
				]),
				Ui = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
				Yi =
					/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
				Qi = (t, e) => {
					const i = t.nodeName.toLowerCase();
					if (e.includes(i))
						return (
							!Vi.has(i) ||
							Boolean(Ui.test(t.nodeValue) || Yi.test(t.nodeValue))
						);
					const n = e.filter((t) => t instanceof RegExp);
					for (let t = 0, e = n.length; t < e; t++) if (n[t].test(i)) return !0;
					return !1;
				};
			function Ki(t, e, i) {
				if (!t.length) return t;
				if (i && "function" == typeof i) return i(t);
				const n = new window.DOMParser().parseFromString(t, "text/html"),
					s = Object.keys(e),
					o = [].concat(...n.body.querySelectorAll("*"));
				for (let t = 0, i = o.length; t < i; t++) {
					const i = o[t],
						n = i.nodeName.toLowerCase();
					if (!s.includes(n)) {
						i.remove();
						continue;
					}
					const r = [].concat(...i.attributes),
						a = [].concat(e["*"] || [], e[n] || []);
					r.forEach((t) => {
						Qi(t, a) || i.removeAttribute(t.nodeName);
					});
				}
				return n.body.innerHTML;
			}
			const Xi = "tooltip",
				Gi = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
				Ji = new Set(["sanitize", "allowList", "sanitizeFn"]),
				Zi = {
					animation: "boolean",
					template: "string",
					title: "(string|element|function)",
					trigger: "string",
					delay: "(number|object)",
					html: "boolean",
					selector: "(string|boolean)",
					placement: "(string|function)",
					offset: "(array|string|function)",
					container: "(string|element|boolean)",
					fallbackPlacements: "array",
					boundary: "(string|element)",
					customClass: "(string|function)",
					sanitize: "boolean",
					sanitizeFn: "(null|function)",
					allowList: "object",
					popperConfig: "(null|object|function)",
				},
				tn = {
					AUTO: "auto",
					TOP: "top",
					RIGHT: Kt() ? "left" : "right",
					BOTTOM: "bottom",
					LEFT: Kt() ? "right" : "left",
				},
				en = {
					animation: !0,
					template:
						'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
					trigger: "hover focus",
					title: "",
					delay: 0,
					html: !1,
					selector: !1,
					placement: "top",
					offset: [0, 0],
					container: !1,
					fallbackPlacements: ["top", "right", "bottom", "left"],
					boundary: "clippingParents",
					customClass: "",
					sanitize: !0,
					sanitizeFn: null,
					allowList: {
						"*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
						a: ["target", "href", "title", "rel"],
						area: [],
						b: [],
						br: [],
						col: [],
						code: [],
						div: [],
						em: [],
						hr: [],
						h1: [],
						h2: [],
						h3: [],
						h4: [],
						h5: [],
						h6: [],
						i: [],
						img: ["src", "srcset", "alt", "title", "width", "height"],
						li: [],
						ol: [],
						p: [],
						pre: [],
						s: [],
						small: [],
						span: [],
						sub: [],
						sup: [],
						strong: [],
						u: [],
						ul: [],
					},
					popperConfig: null,
				},
				nn = {
					HIDE: "hide.bs.tooltip",
					HIDDEN: "hidden.bs.tooltip",
					SHOW: "show.bs.tooltip",
					SHOWN: "shown.bs.tooltip",
					INSERTED: "inserted.bs.tooltip",
					CLICK: "click.bs.tooltip",
					FOCUSIN: "focusin.bs.tooltip",
					FOCUSOUT: "focusout.bs.tooltip",
					MOUSEENTER: "mouseenter.bs.tooltip",
					MOUSELEAVE: "mouseleave.bs.tooltip",
				},
				sn = "fade",
				on = "show",
				rn = "show",
				an = "out",
				ln = "hover",
				cn = "focus";
			class un extends ve {
				constructor(t, e) {
					if (void 0 === n)
						throw new TypeError(
							"Bootstrap's tooltips require Popper (https://popper.js.org)"
						);
					super(t),
						(this._isEnabled = !0),
						(this._timeout = 0),
						(this._hoverState = ""),
						(this._activeTrigger = {}),
						(this._popper = null),
						(this._config = this._getConfig(e)),
						(this.tip = null),
						this._setListeners();
				}
				static get Default() {
					return en;
				}
				static get NAME() {
					return Xi;
				}
				static get Event() {
					return nn;
				}
				static get DefaultType() {
					return Zi;
				}
				enable() {
					this._isEnabled = !0;
				}
				disable() {
					this._isEnabled = !1;
				}
				toggleEnabled() {
					this._isEnabled = !this._isEnabled;
				}
				toggle(t) {
					if (this._isEnabled)
						if (t) {
							const e = this._initializeOnDelegatedTarget(t);
							(e._activeTrigger.click = !e._activeTrigger.click),
								e._isWithActiveTrigger()
									? e._enter(null, e)
									: e._leave(null, e);
						} else {
							if (this.getTipElement().classList.contains(on))
								return void this._leave(null, this);
							this._enter(null, this);
						}
				}
				dispose() {
					clearTimeout(this._timeout),
						me.off(
							this._element.closest(".modal"),
							"hide.bs.modal",
							this._hideModalHandler
						),
						this.tip && this.tip.remove(),
						this._popper && this._popper.destroy(),
						super.dispose();
				}
				show() {
					if ("none" === this._element.style.display)
						throw new Error("Please use show on visible elements");
					if (!this.isWithContent() || !this._isEnabled) return;
					const t = me.trigger(this._element, this.constructor.Event.SHOW),
						e = Wt(this._element),
						i =
							null === e
								? this._element.ownerDocument.documentElement.contains(
										this._element
								  )
								: e.contains(this._element);
					if (t.defaultPrevented || !i) return;
					const n = this.getTipElement(),
						s = It(this.constructor.NAME);
					n.setAttribute("id", s),
						this._element.setAttribute("aria-describedby", s),
						this.setContent(),
						this._config.animation && n.classList.add(sn);
					const o =
							"function" == typeof this._config.placement
								? this._config.placement.call(this, n, this._element)
								: this._config.placement,
						r = this._getAttachment(o);
					this._addAttachmentClass(r);
					const { container: a } = this._config;
					ye.set(n, this.constructor.DATA_KEY, this),
						this._element.ownerDocument.documentElement.contains(this.tip) ||
							(a.appendChild(n),
							me.trigger(this._element, this.constructor.Event.INSERTED)),
						this._popper
							? this._popper.update()
							: (this._popper = Pt(this._element, n, this._getPopperConfig(r))),
						n.classList.add(on);
					const l =
						"function" == typeof this._config.customClass
							? this._config.customClass()
							: this._config.customClass;
					l && n.classList.add(...l.split(" ")),
						"ontouchstart" in document.documentElement &&
							[].concat(...document.body.children).forEach((t) => {
								me.on(t, "mouseover", Vt);
							});
					const c = this.tip.classList.contains(sn);
					this._queueCallback(
						() => {
							const t = this._hoverState;
							(this._hoverState = null),
								me.trigger(this._element, this.constructor.Event.SHOWN),
								t === an && this._leave(null, this);
						},
						this.tip,
						c
					);
				}
				hide() {
					if (!this._popper) return;
					const t = this.getTipElement();
					if (
						me.trigger(this._element, this.constructor.Event.HIDE)
							.defaultPrevented
					)
						return;
					t.classList.remove(on),
						"ontouchstart" in document.documentElement &&
							[]
								.concat(...document.body.children)
								.forEach((t) => me.off(t, "mouseover", Vt)),
						(this._activeTrigger.click = !1),
						(this._activeTrigger.focus = !1),
						(this._activeTrigger.hover = !1);
					const e = this.tip.classList.contains(sn);
					this._queueCallback(
						() => {
							this._isWithActiveTrigger() ||
								(this._hoverState !== rn && t.remove(),
								this._cleanTipClass(),
								this._element.removeAttribute("aria-describedby"),
								me.trigger(this._element, this.constructor.Event.HIDDEN),
								this._popper &&
									(this._popper.destroy(), (this._popper = null)));
						},
						this.tip,
						e
					),
						(this._hoverState = "");
				}
				update() {
					null !== this._popper && this._popper.update();
				}
				isWithContent() {
					return Boolean(this.getTitle());
				}
				getTipElement() {
					if (this.tip) return this.tip;
					const t = document.createElement("div");
					return (
						(t.innerHTML = this._config.template),
						(this.tip = t.children[0]),
						this.tip
					);
				}
				setContent() {
					const t = this.getTipElement();
					this.setElementContent(
						Mt.findOne(".tooltip-inner", t),
						this.getTitle()
					),
						t.classList.remove(sn, on);
				}
				setElementContent(t, e) {
					if (null !== t)
						return zt(e)
							? ((e = Rt(e)),
							  void (this._config.html
									? e.parentNode !== t && ((t.innerHTML = ""), t.appendChild(e))
									: (t.textContent = e.textContent)))
							: void (this._config.html
									? (this._config.sanitize &&
											(e = Ki(
												e,
												this._config.allowList,
												this._config.sanitizeFn
											)),
									  (t.innerHTML = e))
									: (t.textContent = e));
				}
				getTitle() {
					let t = this._element.getAttribute("data-bs-original-title");
					return (
						t ||
							(t =
								"function" == typeof this._config.title
									? this._config.title.call(this._element)
									: this._config.title),
						t
					);
				}
				updateAttachment(t) {
					return "right" === t ? "end" : "left" === t ? "start" : t;
				}
				_initializeOnDelegatedTarget(t, e) {
					const i = this.constructor.DATA_KEY;
					return (
						(e = e || ye.get(t.delegateTarget, i)) ||
							((e = new this.constructor(
								t.delegateTarget,
								this._getDelegateConfig()
							)),
							ye.set(t.delegateTarget, i, e)),
						e
					);
				}
				_getOffset() {
					const { offset: t } = this._config;
					return "string" == typeof t
						? t.split(",").map((t) => Number.parseInt(t, 10))
						: "function" == typeof t
						? (e) => t(e, this._element)
						: t;
				}
				_getPopperConfig(t) {
					const e = {
						placement: t,
						modifiers: [
							{
								name: "flip",
								options: {
									fallbackPlacements: this._config.fallbackPlacements,
								},
							},
							{ name: "offset", options: { offset: this._getOffset() } },
							{
								name: "preventOverflow",
								options: { boundary: this._config.boundary },
							},
							{
								name: "arrow",
								options: { element: `.${this.constructor.NAME}-arrow` },
							},
							{
								name: "onChange",
								enabled: !0,
								phase: "afterWrite",
								fn: (t) => this._handlePopperPlacementChange(t),
							},
						],
						onFirstUpdate: (t) => {
							t.options.placement !== t.placement &&
								this._handlePopperPlacementChange(t);
						},
					};
					return {
						...e,
						...("function" == typeof this._config.popperConfig
							? this._config.popperConfig(e)
							: this._config.popperConfig),
					};
				}
				_addAttachmentClass(t) {
					this.getTipElement().classList.add(
						`bs-tooltip-${this.updateAttachment(t)}`
					);
				}
				_getAttachment(t) {
					return tn[t.toUpperCase()];
				}
				_setListeners() {
					this._config.trigger.split(" ").forEach((t) => {
						if ("click" === t)
							me.on(
								this._element,
								this.constructor.Event.CLICK,
								this._config.selector,
								(t) => this.toggle(t)
							);
						else if ("manual" !== t) {
							const e =
									t === ln
										? this.constructor.Event.MOUSEENTER
										: this.constructor.Event.FOCUSIN,
								i =
									t === ln
										? this.constructor.Event.MOUSELEAVE
										: this.constructor.Event.FOCUSOUT;
							me.on(this._element, e, this._config.selector, (t) =>
								this._enter(t)
							),
								me.on(this._element, i, this._config.selector, (t) =>
									this._leave(t)
								);
						}
					}),
						(this._hideModalHandler = () => {
							this._element && this.hide();
						}),
						me.on(
							this._element.closest(".modal"),
							"hide.bs.modal",
							this._hideModalHandler
						),
						this._config.selector
							? (this._config = {
									...this._config,
									trigger: "manual",
									selector: "",
							  })
							: this._fixTitle();
				}
				_fixTitle() {
					const t = this._element.getAttribute("title"),
						e = typeof this._element.getAttribute("data-bs-original-title");
					(t || "string" !== e) &&
						(this._element.setAttribute("data-bs-original-title", t || ""),
						!t ||
							this._element.getAttribute("aria-label") ||
							this._element.textContent ||
							this._element.setAttribute("aria-label", t),
						this._element.setAttribute("title", ""));
				}
				_enter(t, e) {
					(e = this._initializeOnDelegatedTarget(t, e)),
						t && (e._activeTrigger["focusin" === t.type ? cn : ln] = !0),
						e.getTipElement().classList.contains(on) || e._hoverState === rn
							? (e._hoverState = rn)
							: (clearTimeout(e._timeout),
							  (e._hoverState = rn),
							  e._config.delay && e._config.delay.show
									? (e._timeout = setTimeout(() => {
											e._hoverState === rn && e.show();
									  }, e._config.delay.show))
									: e.show());
				}
				_leave(t, e) {
					(e = this._initializeOnDelegatedTarget(t, e)),
						t &&
							(e._activeTrigger["focusout" === t.type ? cn : ln] =
								e._element.contains(t.relatedTarget)),
						e._isWithActiveTrigger() ||
							(clearTimeout(e._timeout),
							(e._hoverState = an),
							e._config.delay && e._config.delay.hide
								? (e._timeout = setTimeout(() => {
										e._hoverState === an && e.hide();
								  }, e._config.delay.hide))
								: e.hide());
				}
				_isWithActiveTrigger() {
					for (const t in this._activeTrigger)
						if (this._activeTrigger[t]) return !0;
					return !1;
				}
				_getConfig(t) {
					const e = ke.getDataAttributes(this._element);
					return (
						Object.keys(e).forEach((t) => {
							Ji.has(t) && delete e[t];
						}),
						((t = {
							...this.constructor.Default,
							...e,
							...("object" == typeof t && t ? t : {}),
						}).container =
							!1 === t.container ? document.body : Rt(t.container)),
						"number" == typeof t.delay &&
							(t.delay = { show: t.delay, hide: t.delay }),
						"number" == typeof t.title && (t.title = t.title.toString()),
						"number" == typeof t.content && (t.content = t.content.toString()),
						Bt(Xi, t, this.constructor.DefaultType),
						t.sanitize &&
							(t.template = Ki(t.template, t.allowList, t.sanitizeFn)),
						t
					);
				}
				_getDelegateConfig() {
					const t = {};
					if (this._config)
						for (const e in this._config)
							this.constructor.Default[e] !== this._config[e] &&
								(t[e] = this._config[e]);
					return t;
				}
				_cleanTipClass() {
					const t = this.getTipElement(),
						e = t.getAttribute("class").match(Gi);
					null !== e &&
						e.length > 0 &&
						e.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
				}
				_handlePopperPlacementChange(t) {
					const { state: e } = t;
					e &&
						((this.tip = e.elements.popper),
						this._cleanTipClass(),
						this._addAttachmentClass(this._getAttachment(e.placement)));
				}
				static jQueryInterface(t) {
					return this.each(function () {
						const e = un.getOrCreateInstance(this, t);
						if ("string" == typeof t) {
							if (void 0 === e[t])
								throw new TypeError(`No method named "${t}"`);
							e[t]();
						}
					});
				}
			}
			Xt(un);
			const hn = new RegExp("(^|\\s)bs-popover\\S+", "g"),
				dn = {
					...un.Default,
					placement: "right",
					offset: [0, 8],
					trigger: "click",
					content: "",
					template:
						'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
				},
				pn = { ...un.DefaultType, content: "(string|element|function)" },
				fn = {
					HIDE: "hide.bs.popover",
					HIDDEN: "hidden.bs.popover",
					SHOW: "show.bs.popover",
					SHOWN: "shown.bs.popover",
					INSERTED: "inserted.bs.popover",
					CLICK: "click.bs.popover",
					FOCUSIN: "focusin.bs.popover",
					FOCUSOUT: "focusout.bs.popover",
					MOUSEENTER: "mouseenter.bs.popover",
					MOUSELEAVE: "mouseleave.bs.popover",
				},
				mn = ".popover-header",
				gn = ".popover-body";
			class yn extends un {
				static get Default() {
					return dn;
				}
				static get NAME() {
					return "popover";
				}
				static get Event() {
					return fn;
				}
				static get DefaultType() {
					return pn;
				}
				isWithContent() {
					return this.getTitle() || this._getContent();
				}
				getTipElement() {
					return (
						this.tip ||
							((this.tip = super.getTipElement()),
							this.getTitle() || Mt.findOne(mn, this.tip).remove(),
							this._getContent() || Mt.findOne(gn, this.tip).remove()),
						this.tip
					);
				}
				setContent() {
					const t = this.getTipElement();
					this.setElementContent(Mt.findOne(mn, t), this.getTitle());
					let e = this._getContent();
					"function" == typeof e && (e = e.call(this._element)),
						this.setElementContent(Mt.findOne(gn, t), e),
						t.classList.remove("fade", "show");
				}
				_addAttachmentClass(t) {
					this.getTipElement().classList.add(
						`bs-popover-${this.updateAttachment(t)}`
					);
				}
				_getContent() {
					return (
						this._element.getAttribute("data-bs-content") ||
						this._config.content
					);
				}
				_cleanTipClass() {
					const t = this.getTipElement(),
						e = t.getAttribute("class").match(hn);
					null !== e &&
						e.length > 0 &&
						e.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
				}
				static jQueryInterface(t) {
					return this.each(function () {
						const e = yn.getOrCreateInstance(this, t);
						if ("string" == typeof t) {
							if (void 0 === e[t])
								throw new TypeError(`No method named "${t}"`);
							e[t]();
						}
					});
				}
			}
			Xt(yn);
			const vn = "scrollspy",
				bn = { offset: 10, method: "auto", target: "" },
				wn = { offset: "number", method: "string", target: "(string|element)" },
				_n = "active",
				En = "position";
			class xn extends ve {
				constructor(t, e) {
					super(t),
						(this._scrollElement =
							"BODY" === this._element.tagName ? window : this._element),
						(this._config = this._getConfig(e)),
						(this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`),
						(this._offsets = []),
						(this._targets = []),
						(this._activeTarget = null),
						(this._scrollHeight = 0),
						me.on(this._scrollElement, "scroll.bs.scrollspy", () =>
							this._process()
						),
						this.refresh(),
						this._process();
				}
				static get Default() {
					return bn;
				}
				static get NAME() {
					return vn;
				}
				refresh() {
					const t =
							this._scrollElement === this._scrollElement.window
								? "offset"
								: En,
						e = "auto" === this._config.method ? t : this._config.method,
						i = e === En ? this._getScrollTop() : 0;
					(this._offsets = []),
						(this._targets = []),
						(this._scrollHeight = this._getScrollHeight()),
						Mt.find(this._selector)
							.map((t) => {
								const n = jt(t),
									s = n ? Mt.findOne(n) : null;
								if (s) {
									const t = s.getBoundingClientRect();
									if (t.width || t.height) return [ke[e](s).top + i, n];
								}
								return null;
							})
							.filter((t) => t)
							.sort((t, e) => t[0] - e[0])
							.forEach((t) => {
								this._offsets.push(t[0]), this._targets.push(t[1]);
							});
				}
				dispose() {
					me.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
				}
				_getConfig(t) {
					if (
						"string" !=
							typeof (t = {
								...bn,
								...ke.getDataAttributes(this._element),
								...("object" == typeof t && t ? t : {}),
							}).target &&
						zt(t.target)
					) {
						let { id: e } = t.target;
						e || ((e = It(vn)), (t.target.id = e)), (t.target = `#${e}`);
					}
					return Bt(vn, t, wn), t;
				}
				_getScrollTop() {
					return this._scrollElement === window
						? this._scrollElement.pageYOffset
						: this._scrollElement.scrollTop;
				}
				_getScrollHeight() {
					return (
						this._scrollElement.scrollHeight ||
						Math.max(
							document.body.scrollHeight,
							document.documentElement.scrollHeight
						)
					);
				}
				_getOffsetHeight() {
					return this._scrollElement === window
						? window.innerHeight
						: this._scrollElement.getBoundingClientRect().height;
				}
				_process() {
					const t = this._getScrollTop() + this._config.offset,
						e = this._getScrollHeight(),
						i = this._config.offset + e - this._getOffsetHeight();
					if ((this._scrollHeight !== e && this.refresh(), t >= i)) {
						const t = this._targets[this._targets.length - 1];
						this._activeTarget !== t && this._activate(t);
					} else {
						if (
							this._activeTarget &&
							t < this._offsets[0] &&
							this._offsets[0] > 0
						)
							return (this._activeTarget = null), void this._clear();
						for (let e = this._offsets.length; e--; )
							this._activeTarget !== this._targets[e] &&
								t >= this._offsets[e] &&
								(void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) &&
								this._activate(this._targets[e]);
					}
				}
				_activate(t) {
					(this._activeTarget = t), this._clear();
					const e = this._selector
							.split(",")
							.map((e) => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`),
						i = Mt.findOne(e.join(","));
					i.classList.contains("dropdown-item")
						? (Mt.findOne(
								".dropdown-toggle",
								i.closest(".dropdown")
						  ).classList.add(_n),
						  i.classList.add(_n))
						: (i.classList.add(_n),
						  Mt.parents(i, ".nav, .list-group").forEach((t) => {
								Mt.prev(t, ".nav-link, .list-group-item").forEach((t) =>
									t.classList.add(_n)
								),
									Mt.prev(t, ".nav-item").forEach((t) => {
										Mt.children(t, ".nav-link").forEach((t) =>
											t.classList.add(_n)
										);
									});
						  })),
						me.trigger(this._scrollElement, "activate.bs.scrollspy", {
							relatedTarget: t,
						});
				}
				_clear() {
					Mt.find(this._selector)
						.filter((t) => t.classList.contains(_n))
						.forEach((t) => t.classList.remove(_n));
				}
				static jQueryInterface(t) {
					return this.each(function () {
						const e = xn.getOrCreateInstance(this, t);
						if ("string" == typeof t) {
							if (void 0 === e[t])
								throw new TypeError(`No method named "${t}"`);
							e[t]();
						}
					});
				}
			}
			me.on(window, "load.bs.scrollspy.data-api", () => {
				Mt.find('[data-bs-spy="scroll"]').forEach((t) => new xn(t));
			}),
				Xt(xn);
			const kn = "active",
				Tn = "fade",
				Cn = "show",
				Sn = ".active",
				An = ":scope > li > .active";
			class Ln extends ve {
				static get NAME() {
					return "tab";
				}
				show() {
					if (
						this._element.parentNode &&
						this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
						this._element.classList.contains(kn)
					)
						return;
					let t;
					const e = Ht(this._element),
						i = this._element.closest(".nav, .list-group");
					if (i) {
						const e = "UL" === i.nodeName || "OL" === i.nodeName ? An : Sn;
						(t = Mt.find(e, i)), (t = t[t.length - 1]);
					}
					const n = t
						? me.trigger(t, "hide.bs.tab", { relatedTarget: this._element })
						: null;
					if (
						me.trigger(this._element, "show.bs.tab", { relatedTarget: t })
							.defaultPrevented ||
						(null !== n && n.defaultPrevented)
					)
						return;
					this._activate(this._element, i);
					const s = () => {
						me.trigger(t, "hidden.bs.tab", { relatedTarget: this._element }),
							me.trigger(this._element, "shown.bs.tab", { relatedTarget: t });
					};
					e ? this._activate(e, e.parentNode, s) : s();
				}
				_activate(t, e, i) {
					const n = (
							!e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
								? Mt.children(e, Sn)
								: Mt.find(An, e)
						)[0],
						s = i && n && n.classList.contains(Tn),
						o = () => this._transitionComplete(t, n, i);
					n && s
						? (n.classList.remove(Cn), this._queueCallback(o, t, !0))
						: o();
				}
				_transitionComplete(t, e, i) {
					if (e) {
						e.classList.remove(kn);
						const t = Mt.findOne(
							":scope > .dropdown-menu .active",
							e.parentNode
						);
						t && t.classList.remove(kn),
							"tab" === e.getAttribute("role") &&
								e.setAttribute("aria-selected", !1);
					}
					t.classList.add(kn),
						"tab" === t.getAttribute("role") &&
							t.setAttribute("aria-selected", !0),
						Ut(t),
						t.classList.contains(Tn) && t.classList.add(Cn);
					let n = t.parentNode;
					if (
						(n && "LI" === n.nodeName && (n = n.parentNode),
						n && n.classList.contains("dropdown-menu"))
					) {
						const e = t.closest(".dropdown");
						e &&
							Mt.find(".dropdown-toggle", e).forEach((t) =>
								t.classList.add(kn)
							),
							t.setAttribute("aria-expanded", !0);
					}
					i && i();
				}
				static jQueryInterface(t) {
					return this.each(function () {
						const e = Ln.getOrCreateInstance(this);
						if ("string" == typeof t) {
							if (void 0 === e[t])
								throw new TypeError(`No method named "${t}"`);
							e[t]();
						}
					});
				}
			}
			me.on(
				document,
				"click.bs.tab.data-api",
				'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
				function (t) {
					["A", "AREA"].includes(this.tagName) && t.preventDefault(),
						qt(this) || Ln.getOrCreateInstance(this).show();
				}
			),
				Xt(Ln);
			const Pn = "toast",
				On = "hide",
				Mn = "show",
				Nn = "showing",
				In = { animation: "boolean", autohide: "boolean", delay: "number" },
				Dn = { animation: !0, autohide: !0, delay: 5e3 };
			class jn extends ve {
				constructor(t, e) {
					super(t),
						(this._config = this._getConfig(e)),
						(this._timeout = null),
						(this._hasMouseInteraction = !1),
						(this._hasKeyboardInteraction = !1),
						this._setListeners();
				}
				static get DefaultType() {
					return In;
				}
				static get Default() {
					return Dn;
				}
				static get NAME() {
					return Pn;
				}
				show() {
					me.trigger(this._element, "show.bs.toast").defaultPrevented ||
						(this._clearTimeout(),
						this._config.animation && this._element.classList.add("fade"),
						this._element.classList.remove(On),
						Ut(this._element),
						this._element.classList.add(Nn),
						this._queueCallback(
							() => {
								this._element.classList.remove(Nn),
									this._element.classList.add(Mn),
									me.trigger(this._element, "shown.bs.toast"),
									this._maybeScheduleHide();
							},
							this._element,
							this._config.animation
						));
				}
				hide() {
					this._element.classList.contains(Mn) &&
						(me.trigger(this._element, "hide.bs.toast").defaultPrevented ||
							(this._element.classList.remove(Mn),
							this._queueCallback(
								() => {
									this._element.classList.add(On),
										me.trigger(this._element, "hidden.bs.toast");
								},
								this._element,
								this._config.animation
							)));
				}
				dispose() {
					this._clearTimeout(),
						this._element.classList.contains(Mn) &&
							this._element.classList.remove(Mn),
						super.dispose();
				}
				_getConfig(t) {
					return (
						(t = {
							...Dn,
							...ke.getDataAttributes(this._element),
							...("object" == typeof t && t ? t : {}),
						}),
						Bt(Pn, t, this.constructor.DefaultType),
						t
					);
				}
				_maybeScheduleHide() {
					this._config.autohide &&
						(this._hasMouseInteraction ||
							this._hasKeyboardInteraction ||
							(this._timeout = setTimeout(() => {
								this.hide();
							}, this._config.delay)));
				}
				_onInteraction(t, e) {
					switch (t.type) {
						case "mouseover":
						case "mouseout":
							this._hasMouseInteraction = e;
							break;
						case "focusin":
						case "focusout":
							this._hasKeyboardInteraction = e;
					}
					if (e) return void this._clearTimeout();
					const i = t.relatedTarget;
					this._element === i ||
						this._element.contains(i) ||
						this._maybeScheduleHide();
				}
				_setListeners() {
					me.on(
						this._element,
						"click.dismiss.bs.toast",
						'[data-bs-dismiss="toast"]',
						() => this.hide()
					),
						me.on(this._element, "mouseover.bs.toast", (t) =>
							this._onInteraction(t, !0)
						),
						me.on(this._element, "mouseout.bs.toast", (t) =>
							this._onInteraction(t, !1)
						),
						me.on(this._element, "focusin.bs.toast", (t) =>
							this._onInteraction(t, !0)
						),
						me.on(this._element, "focusout.bs.toast", (t) =>
							this._onInteraction(t, !1)
						);
				}
				_clearTimeout() {
					clearTimeout(this._timeout), (this._timeout = null);
				}
				static jQueryInterface(t) {
					return this.each(function () {
						const e = jn.getOrCreateInstance(this, t);
						if ("string" == typeof t) {
							if (void 0 === e[t])
								throw new TypeError(`No method named "${t}"`);
							e[t](this);
						}
					});
				}
			}
			Xt(jn);
		},
		741: (t, e, i) => {
			var n, s;
			!(function (o, r) {
				"use strict";
				void 0 ===
					(s = "function" == typeof (n = r) ? n.call(e, i, e, t) : n) ||
					(t.exports = s);
			})(window, function () {
				"use strict";
				var t = (function () {
					var t = window.Element.prototype;
					if (t.matches) return "matches";
					if (t.matchesSelector) return "matchesSelector";
					for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
						var n = e[i] + "MatchesSelector";
						if (t[n]) return n;
					}
				})();
				return function (e, i) {
					return e[t](i);
				};
			});
		},
		158: function (t, e, i) {
			var n, s;
			"undefined" != typeof window && window,
				void 0 ===
					(s =
						"function" ==
						typeof (n = function () {
							"use strict";
							function t() {}
							var e = t.prototype;
							return (
								(e.on = function (t, e) {
									if (t && e) {
										var i = (this._events = this._events || {}),
											n = (i[t] = i[t] || []);
										return -1 == n.indexOf(e) && n.push(e), this;
									}
								}),
								(e.once = function (t, e) {
									if (t && e) {
										this.on(t, e);
										var i = (this._onceEvents = this._onceEvents || {});
										return ((i[t] = i[t] || {})[e] = !0), this;
									}
								}),
								(e.off = function (t, e) {
									var i = this._events && this._events[t];
									if (i && i.length) {
										var n = i.indexOf(e);
										return -1 != n && i.splice(n, 1), this;
									}
								}),
								(e.emitEvent = function (t, e) {
									var i = this._events && this._events[t];
									if (i && i.length) {
										(i = i.slice(0)), (e = e || []);
										for (
											var n = this._onceEvents && this._onceEvents[t], s = 0;
											s < i.length;
											s++
										) {
											var o = i[s];
											n && n[o] && (this.off(t, o), delete n[o]),
												o.apply(this, e);
										}
										return this;
									}
								}),
								(e.allOff = function () {
									delete this._events, delete this._onceEvents;
								}),
								t
							);
						})
							? n.call(e, i, e, t)
							: n) || (t.exports = s);
		},
		47: (t, e, i) => {
			var n, s;
			!(function (o, r) {
				(n = [i(741)]),
					void 0 ===
						(s = function (t) {
							return (function (t, e) {
								"use strict";
								var i = {
										extend: function (t, e) {
											for (var i in e) t[i] = e[i];
											return t;
										},
										modulo: function (t, e) {
											return ((t % e) + e) % e;
										},
									},
									n = Array.prototype.slice;
								(i.makeArray = function (t) {
									return Array.isArray(t)
										? t
										: null == t
										? []
										: "object" == typeof t && "number" == typeof t.length
										? n.call(t)
										: [t];
								}),
									(i.removeFrom = function (t, e) {
										var i = t.indexOf(e);
										-1 != i && t.splice(i, 1);
									}),
									(i.getParent = function (t, i) {
										for (; t.parentNode && t != document.body; )
											if (((t = t.parentNode), e(t, i))) return t;
									}),
									(i.getQueryElement = function (t) {
										return "string" == typeof t ? document.querySelector(t) : t;
									}),
									(i.handleEvent = function (t) {
										var e = "on" + t.type;
										this[e] && this[e](t);
									}),
									(i.filterFindElements = function (t, n) {
										t = i.makeArray(t);
										var s = [];
										return (
											t.forEach(function (t) {
												if (t instanceof HTMLElement)
													if (n) {
														e(t, n) && s.push(t);
														for (
															var i = t.querySelectorAll(n), o = 0;
															o < i.length;
															o++
														)
															s.push(i[o]);
													} else s.push(t);
											}),
											s
										);
									}),
									(i.debounceMethod = function (t, e, i) {
										i = i || 100;
										var n = t.prototype[e],
											s = e + "Timeout";
										t.prototype[e] = function () {
											var t = this[s];
											clearTimeout(t);
											var e = arguments,
												o = this;
											this[s] = setTimeout(function () {
												n.apply(o, e), delete o[s];
											}, i);
										};
									}),
									(i.docReady = function (t) {
										var e = document.readyState;
										"complete" == e || "interactive" == e
											? setTimeout(t)
											: document.addEventListener("DOMContentLoaded", t);
									}),
									(i.toDashed = function (t) {
										return t
											.replace(/(.)([A-Z])/g, function (t, e, i) {
												return e + "-" + i;
											})
											.toLowerCase();
									});
								var s = t.console;
								return (
									(i.htmlInit = function (e, n) {
										i.docReady(function () {
											var o = i.toDashed(n),
												r = "data-" + o,
												a = document.querySelectorAll("[" + r + "]"),
												l = document.querySelectorAll(".js-" + o),
												c = i.makeArray(a).concat(i.makeArray(l)),
												u = r + "-options",
												h = t.jQuery;
											c.forEach(function (t) {
												var i,
													o = t.getAttribute(r) || t.getAttribute(u);
												try {
													i = o && JSON.parse(o);
												} catch (e) {
													return void (
														s &&
														s.error(
															"Error parsing " +
																r +
																" on " +
																t.className +
																": " +
																e
														)
													);
												}
												var a = new e(t, i);
												h && h.data(t, n, a);
											});
										});
									}),
									i
								);
							})(o, t);
						}.apply(e, n)) || (t.exports = s);
			})(window);
		},
		131: (t, e, i) => {
			var n, s;
			window,
				void 0 ===
					(s =
						"function" ==
						typeof (n = function () {
							"use strict";
							function t(t) {
								var e = parseFloat(t);
								return -1 == t.indexOf("%") && !isNaN(e) && e;
							}
							var e =
									"undefined" == typeof console
										? function () {}
										: function (t) {
												console.error(t);
										  },
								i = [
									"paddingLeft",
									"paddingRight",
									"paddingTop",
									"paddingBottom",
									"marginLeft",
									"marginRight",
									"marginTop",
									"marginBottom",
									"borderLeftWidth",
									"borderRightWidth",
									"borderTopWidth",
									"borderBottomWidth",
								],
								n = i.length;
							function s(t) {
								var i = getComputedStyle(t);
								return (
									i ||
										e(
											"Style returned " +
												i +
												". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
										),
									i
								);
							}
							var o,
								r = !1;
							function a(e) {
								if (
									((function () {
										if (!r) {
											r = !0;
											var e = document.createElement("div");
											(e.style.width = "200px"),
												(e.style.padding = "1px 2px 3px 4px"),
												(e.style.borderStyle = "solid"),
												(e.style.borderWidth = "1px 2px 3px 4px"),
												(e.style.boxSizing = "border-box");
											var i = document.body || document.documentElement;
											i.appendChild(e);
											var n = s(e);
											(o = 200 == Math.round(t(n.width))),
												(a.isBoxSizeOuter = o),
												i.removeChild(e);
										}
									})(),
									"string" == typeof e && (e = document.querySelector(e)),
									e && "object" == typeof e && e.nodeType)
								) {
									var l = s(e);
									if ("none" == l.display)
										return (function () {
											for (
												var t = {
														width: 0,
														height: 0,
														innerWidth: 0,
														innerHeight: 0,
														outerWidth: 0,
														outerHeight: 0,
													},
													e = 0;
												e < n;
												e++
											)
												t[i[e]] = 0;
											return t;
										})();
									var c = {};
									(c.width = e.offsetWidth), (c.height = e.offsetHeight);
									for (
										var u = (c.isBorderBox = "border-box" == l.boxSizing),
											h = 0;
										h < n;
										h++
									) {
										var d = i[h],
											p = l[d],
											f = parseFloat(p);
										c[d] = isNaN(f) ? 0 : f;
									}
									var m = c.paddingLeft + c.paddingRight,
										g = c.paddingTop + c.paddingBottom,
										y = c.marginLeft + c.marginRight,
										v = c.marginTop + c.marginBottom,
										b = c.borderLeftWidth + c.borderRightWidth,
										w = c.borderTopWidth + c.borderBottomWidth,
										_ = u && o,
										E = t(l.width);
									!1 !== E && (c.width = E + (_ ? 0 : m + b));
									var x = t(l.height);
									return (
										!1 !== x && (c.height = x + (_ ? 0 : g + w)),
										(c.innerWidth = c.width - (m + b)),
										(c.innerHeight = c.height - (g + w)),
										(c.outerWidth = c.width + y),
										(c.outerHeight = c.height + v),
										c
									);
								}
							}
							return a;
						})
							? n.call(e, i, e, t)
							: n) || (t.exports = s);
		},
		631: function (t) {
			t.exports = (function () {
				"use strict";
				function t() {
					return "undefined" != typeof window;
				}
				function e(t) {
					return (o = t) &&
						o.document &&
						(function (t) {
							return 9 === t.nodeType;
						})(o.document)
						? ((i = (e = t).document),
						  (n = i.body),
						  (s = i.documentElement),
						  {
								scrollHeight: function () {
									return Math.max(
										n.scrollHeight,
										s.scrollHeight,
										n.offsetHeight,
										s.offsetHeight,
										n.clientHeight,
										s.clientHeight
									);
								},
								height: function () {
									return e.innerHeight || s.clientHeight || n.clientHeight;
								},
								scrollY: function () {
									return void 0 !== e.pageYOffset
										? e.pageYOffset
										: (s || n.parentNode || n).scrollTop;
								},
						  })
						: (function (t) {
								return {
									scrollHeight: function () {
										return Math.max(
											t.scrollHeight,
											t.offsetHeight,
											t.clientHeight
										);
									},
									height: function () {
										return Math.max(t.offsetHeight, t.clientHeight);
									},
									scrollY: function () {
										return t.scrollTop;
									},
								};
						  })(t);
					var e, i, n, s, o;
				}
				function i(t, i, n) {
					var s,
						o = (function () {
							var t = !1;
							try {
								var e = {
									get passive() {
										t = !0;
									},
								};
								window.addEventListener("test", e, e),
									window.removeEventListener("test", e, e);
							} catch (e) {
								t = !1;
							}
							return t;
						})(),
						r = !1,
						a = e(t),
						l = a.scrollY(),
						c = {};
					function u() {
						var t = Math.round(a.scrollY()),
							e = a.height(),
							s = a.scrollHeight();
						(c.scrollY = t),
							(c.lastScrollY = l),
							(c.direction = t > l ? "down" : "up"),
							(c.distance = Math.abs(t - l)),
							(c.isOutOfBounds = t < 0 || t + e > s),
							(c.top = t <= i.offset[c.direction]),
							(c.bottom = t + e >= s),
							(c.toleranceExceeded = c.distance > i.tolerance[c.direction]),
							n(c),
							(l = t),
							(r = !1);
					}
					function h() {
						r || ((r = !0), (s = requestAnimationFrame(u)));
					}
					var d = !!o && { passive: !0, capture: !1 };
					return (
						t.addEventListener("scroll", h, d),
						u(),
						{
							destroy: function () {
								cancelAnimationFrame(s), t.removeEventListener("scroll", h, d);
							},
						}
					);
				}
				function n(t) {
					return t === Object(t) ? t : { down: t, up: t };
				}
				function s(t, e) {
					(e = e || {}),
						Object.assign(this, s.options, e),
						(this.classes = Object.assign({}, s.options.classes, e.classes)),
						(this.elem = t),
						(this.tolerance = n(this.tolerance)),
						(this.offset = n(this.offset)),
						(this.initialised = !1),
						(this.frozen = !1);
				}
				return (
					(s.prototype = {
						constructor: s,
						init: function () {
							return (
								s.cutsTheMustard &&
									!this.initialised &&
									(this.addClass("initial"),
									(this.initialised = !0),
									setTimeout(
										function (t) {
											t.scrollTracker = i(
												t.scroller,
												{ offset: t.offset, tolerance: t.tolerance },
												t.update.bind(t)
											);
										},
										100,
										this
									)),
								this
							);
						},
						destroy: function () {
							(this.initialised = !1),
								Object.keys(this.classes).forEach(this.removeClass, this),
								this.scrollTracker.destroy();
						},
						unpin: function () {
							(!this.hasClass("pinned") && this.hasClass("unpinned")) ||
								(this.addClass("unpinned"),
								this.removeClass("pinned"),
								this.onUnpin && this.onUnpin.call(this));
						},
						pin: function () {
							this.hasClass("unpinned") &&
								(this.addClass("pinned"),
								this.removeClass("unpinned"),
								this.onPin && this.onPin.call(this));
						},
						freeze: function () {
							(this.frozen = !0), this.addClass("frozen");
						},
						unfreeze: function () {
							(this.frozen = !1), this.removeClass("frozen");
						},
						top: function () {
							this.hasClass("top") ||
								(this.addClass("top"),
								this.removeClass("notTop"),
								this.onTop && this.onTop.call(this));
						},
						notTop: function () {
							this.hasClass("notTop") ||
								(this.addClass("notTop"),
								this.removeClass("top"),
								this.onNotTop && this.onNotTop.call(this));
						},
						bottom: function () {
							this.hasClass("bottom") ||
								(this.addClass("bottom"),
								this.removeClass("notBottom"),
								this.onBottom && this.onBottom.call(this));
						},
						notBottom: function () {
							this.hasClass("notBottom") ||
								(this.addClass("notBottom"),
								this.removeClass("bottom"),
								this.onNotBottom && this.onNotBottom.call(this));
						},
						shouldUnpin: function (t) {
							return "down" === t.direction && !t.top && t.toleranceExceeded;
						},
						shouldPin: function (t) {
							return ("up" === t.direction && t.toleranceExceeded) || t.top;
						},
						addClass: function (t) {
							this.elem.classList.add.apply(
								this.elem.classList,
								this.classes[t].split(" ")
							);
						},
						removeClass: function (t) {
							this.elem.classList.remove.apply(
								this.elem.classList,
								this.classes[t].split(" ")
							);
						},
						hasClass: function (t) {
							return this.classes[t].split(" ").every(function (t) {
								return this.classList.contains(t);
							}, this.elem);
						},
						update: function (t) {
							t.isOutOfBounds ||
								(!0 !== this.frozen &&
									(t.top ? this.top() : this.notTop(),
									t.bottom ? this.bottom() : this.notBottom(),
									this.shouldUnpin(t)
										? this.unpin()
										: this.shouldPin(t) && this.pin()));
						},
					}),
					(s.options = {
						tolerance: { up: 0, down: 0 },
						offset: 0,
						scroller: t() ? window : null,
						classes: {
							frozen: "headroom--frozen",
							pinned: "headroom--pinned",
							unpinned: "headroom--unpinned",
							top: "headroom--top",
							notTop: "headroom--not-top",
							bottom: "headroom--bottom",
							notBottom: "headroom--not-bottom",
							initial: "headroom",
						},
					}),
					(s.cutsTheMustard = !!(
						t() &&
						function () {}.bind &&
						"classList" in document.documentElement &&
						Object.assign &&
						Object.keys &&
						requestAnimationFrame
					)),
					s
				);
			})();
		},
		564: function (t, e, i) {
			var n, s;
			!(function (o, r) {
				"use strict";
				(n = [i(158)]),
					void 0 ===
						(s = function (t) {
							return (function (t, e) {
								var i = t.jQuery,
									n = t.console;
								function s(t, e) {
									for (var i in e) t[i] = e[i];
									return t;
								}
								var o = Array.prototype.slice;
								function r(t, e, a) {
									if (!(this instanceof r)) return new r(t, e, a);
									var l,
										c = t;
									"string" == typeof t && (c = document.querySelectorAll(t)),
										c
											? ((this.elements =
													((l = c),
													Array.isArray(l)
														? l
														: "object" == typeof l &&
														  "number" == typeof l.length
														? o.call(l)
														: [l])),
											  (this.options = s({}, this.options)),
											  "function" == typeof e ? (a = e) : s(this.options, e),
											  a && this.on("always", a),
											  this.getImages(),
											  i && (this.jqDeferred = new i.Deferred()),
											  setTimeout(this.check.bind(this)))
											: n.error("Bad element for imagesLoaded " + (c || t));
								}
								(r.prototype = Object.create(e.prototype)),
									(r.prototype.options = {}),
									(r.prototype.getImages = function () {
										(this.images = []),
											this.elements.forEach(this.addElementImages, this);
									}),
									(r.prototype.addElementImages = function (t) {
										"IMG" == t.nodeName && this.addImage(t),
											!0 === this.options.background &&
												this.addElementBackgroundImages(t);
										var e = t.nodeType;
										if (e && a[e]) {
											for (
												var i = t.querySelectorAll("img"), n = 0;
												n < i.length;
												n++
											) {
												var s = i[n];
												this.addImage(s);
											}
											if ("string" == typeof this.options.background) {
												var o = t.querySelectorAll(this.options.background);
												for (n = 0; n < o.length; n++) {
													var r = o[n];
													this.addElementBackgroundImages(r);
												}
											}
										}
									});
								var a = { 1: !0, 9: !0, 11: !0 };
								function l(t) {
									this.img = t;
								}
								function c(t, e) {
									(this.url = t), (this.element = e), (this.img = new Image());
								}
								return (
									(r.prototype.addElementBackgroundImages = function (t) {
										var e = getComputedStyle(t);
										if (e)
											for (
												var i = /url\((['"])?(.*?)\1\)/gi,
													n = i.exec(e.backgroundImage);
												null !== n;

											) {
												var s = n && n[2];
												s && this.addBackground(s, t),
													(n = i.exec(e.backgroundImage));
											}
									}),
									(r.prototype.addImage = function (t) {
										var e = new l(t);
										this.images.push(e);
									}),
									(r.prototype.addBackground = function (t, e) {
										var i = new c(t, e);
										this.images.push(i);
									}),
									(r.prototype.check = function () {
										var t = this;
										function e(e, i, n) {
											setTimeout(function () {
												t.progress(e, i, n);
											});
										}
										(this.progressedCount = 0),
											(this.hasAnyBroken = !1),
											this.images.length
												? this.images.forEach(function (t) {
														t.once("progress", e), t.check();
												  })
												: this.complete();
									}),
									(r.prototype.progress = function (t, e, i) {
										this.progressedCount++,
											(this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
											this.emitEvent("progress", [this, t, e]),
											this.jqDeferred &&
												this.jqDeferred.notify &&
												this.jqDeferred.notify(this, t),
											this.progressedCount == this.images.length &&
												this.complete(),
											this.options.debug && n && n.log("progress: " + i, t, e);
									}),
									(r.prototype.complete = function () {
										var t = this.hasAnyBroken ? "fail" : "done";
										if (
											((this.isComplete = !0),
											this.emitEvent(t, [this]),
											this.emitEvent("always", [this]),
											this.jqDeferred)
										) {
											var e = this.hasAnyBroken ? "reject" : "resolve";
											this.jqDeferred[e](this);
										}
									}),
									(l.prototype = Object.create(e.prototype)),
									(l.prototype.check = function () {
										this.getIsImageComplete()
											? this.confirm(
													0 !== this.img.naturalWidth,
													"naturalWidth"
											  )
											: ((this.proxyImage = new Image()),
											  this.proxyImage.addEventListener("load", this),
											  this.proxyImage.addEventListener("error", this),
											  this.img.addEventListener("load", this),
											  this.img.addEventListener("error", this),
											  (this.proxyImage.src = this.img.src));
									}),
									(l.prototype.getIsImageComplete = function () {
										return this.img.complete && this.img.naturalWidth;
									}),
									(l.prototype.confirm = function (t, e) {
										(this.isLoaded = t),
											this.emitEvent("progress", [this, this.img, e]);
									}),
									(l.prototype.handleEvent = function (t) {
										var e = "on" + t.type;
										this[e] && this[e](t);
									}),
									(l.prototype.onload = function () {
										this.confirm(!0, "onload"), this.unbindEvents();
									}),
									(l.prototype.onerror = function () {
										this.confirm(!1, "onerror"), this.unbindEvents();
									}),
									(l.prototype.unbindEvents = function () {
										this.proxyImage.removeEventListener("load", this),
											this.proxyImage.removeEventListener("error", this),
											this.img.removeEventListener("load", this),
											this.img.removeEventListener("error", this);
									}),
									(c.prototype = Object.create(l.prototype)),
									(c.prototype.check = function () {
										this.img.addEventListener("load", this),
											this.img.addEventListener("error", this),
											(this.img.src = this.url),
											this.getIsImageComplete() &&
												(this.confirm(
													0 !== this.img.naturalWidth,
													"naturalWidth"
												),
												this.unbindEvents());
									}),
									(c.prototype.unbindEvents = function () {
										this.img.removeEventListener("load", this),
											this.img.removeEventListener("error", this);
									}),
									(c.prototype.confirm = function (t, e) {
										(this.isLoaded = t),
											this.emitEvent("progress", [this, this.element, e]);
									}),
									(r.makeJQueryPlugin = function (e) {
										(e = e || t.jQuery) &&
											((i = e).fn.imagesLoaded = function (t, e) {
												return new r(this, t, e).jqDeferred.promise(i(this));
											});
									}),
									r.makeJQueryPlugin(),
									r
								);
							})(o, t);
						}.apply(e, n)) || (t.exports = s);
			})("undefined" != typeof window ? window : this);
		},
		391: (t, e, i) => {
			var n, s;
			!(function (o, r) {
				(n = [
					i(794),
					i(131),
					i(741),
					i(47),
					i(568),
					i(835),
					i(666),
					i(947),
					i(157),
				]),
					void 0 ===
						(s = function (t, e, i, n, s, r) {
							return (function (t, e, i, n, s, o, r) {
								"use strict";
								var a = t.jQuery,
									l = String.prototype.trim
										? function (t) {
												return t.trim();
										  }
										: function (t) {
												return t.replace(/^\s+|\s+$/g, "");
										  },
									c = e.create("isotope", {
										layoutMode: "masonry",
										isJQueryFiltering: !0,
										sortAscending: !0,
									});
								(c.Item = o), (c.LayoutMode = r);
								var u = c.prototype;
								(u._create = function () {
									for (var t in ((this.itemGUID = 0),
									(this._sorters = {}),
									this._getSorters(),
									e.prototype._create.call(this),
									(this.modes = {}),
									(this.filteredItems = this.items),
									(this.sortHistory = ["original-order"]),
									r.modes))
										this._initLayoutMode(t);
								}),
									(u.reloadItems = function () {
										(this.itemGUID = 0), e.prototype.reloadItems.call(this);
									}),
									(u._itemize = function () {
										for (
											var t = e.prototype._itemize.apply(this, arguments),
												i = 0;
											i < t.length;
											i++
										)
											t[i].id = this.itemGUID++;
										return this._updateItemsSortData(t), t;
									}),
									(u._initLayoutMode = function (t) {
										var e = r.modes[t],
											i = this.options[t] || {};
										(this.options[t] = e.options ? s.extend(e.options, i) : i),
											(this.modes[t] = new e(this));
									}),
									(u.layout = function () {
										this._isLayoutInited || !this._getOption("initLayout")
											? this._layout()
											: this.arrange();
									}),
									(u._layout = function () {
										var t = this._getIsInstant();
										this._resetLayout(),
											this._manageStamps(),
											this.layoutItems(this.filteredItems, t),
											(this._isLayoutInited = !0);
									}),
									(u.arrange = function (t) {
										this.option(t), this._getIsInstant();
										var e = this._filter(this.items);
										(this.filteredItems = e.matches),
											this._bindArrangeComplete(),
											this._isInstant
												? this._noTransition(this._hideReveal, [e])
												: this._hideReveal(e),
											this._sort(),
											this._layout();
									}),
									(u._init = u.arrange),
									(u._hideReveal = function (t) {
										this.reveal(t.needReveal), this.hide(t.needHide);
									}),
									(u._getIsInstant = function () {
										var t = this._getOption("layoutInstant"),
											e = void 0 !== t ? t : !this._isLayoutInited;
										return (this._isInstant = e), e;
									}),
									(u._bindArrangeComplete = function () {
										var t,
											e,
											i,
											n = this;
										function s() {
											t &&
												e &&
												i &&
												n.dispatchEvent("arrangeComplete", null, [
													n.filteredItems,
												]);
										}
										this.once("layoutComplete", function () {
											(t = !0), s();
										}),
											this.once("hideComplete", function () {
												(e = !0), s();
											}),
											this.once("revealComplete", function () {
												(i = !0), s();
											});
									}),
									(u._filter = function (t) {
										var e = this.options.filter;
										e = e || "*";
										for (
											var i = [],
												n = [],
												s = [],
												o = this._getFilterTest(e),
												r = 0;
											r < t.length;
											r++
										) {
											var a = t[r];
											if (!a.isIgnored) {
												var l = o(a);
												l && i.push(a),
													l && a.isHidden
														? n.push(a)
														: l || a.isHidden || s.push(a);
											}
										}
										return { matches: i, needReveal: n, needHide: s };
									}),
									(u._getFilterTest = function (t) {
										return a && this.options.isJQueryFiltering
											? function (e) {
													return a(e.element).is(t);
											  }
											: "function" == typeof t
											? function (e) {
													return t(e.element);
											  }
											: function (e) {
													return n(e.element, t);
											  };
									}),
									(u.updateSortData = function (t) {
										var e;
										t
											? ((t = s.makeArray(t)), (e = this.getItems(t)))
											: (e = this.items),
											this._getSorters(),
											this._updateItemsSortData(e);
									}),
									(u._getSorters = function () {
										var t = this.options.getSortData;
										for (var e in t) {
											var i = t[e];
											this._sorters[e] = h(i);
										}
									}),
									(u._updateItemsSortData = function (t) {
										for (var e = t && t.length, i = 0; e && i < e; i++)
											t[i].updateSortData();
									});
								var h = function (t) {
									if ("string" != typeof t) return t;
									var e = l(t).split(" "),
										i = e[0],
										n = i.match(/^\[(.+)\]$/),
										s = (function (t, e) {
											return t
												? function (e) {
														return e.getAttribute(t);
												  }
												: function (t) {
														var i = t.querySelector(e);
														return i && i.textContent;
												  };
										})(n && n[1], i),
										o = c.sortDataParsers[e[1]];
									return o
										? function (t) {
												return t && o(s(t));
										  }
										: function (t) {
												return t && s(t);
										  };
								};
								(c.sortDataParsers = {
									parseInt: function (t) {
										return parseInt(t, 10);
									},
									parseFloat: function (t) {
										return parseFloat(t);
									},
								}),
									(u._sort = function () {
										if (this.options.sortBy) {
											var t = s.makeArray(this.options.sortBy);
											this._getIsSameSortBy(t) ||
												(this.sortHistory = t.concat(this.sortHistory));
											var e = (function (t, e) {
												return function (i, n) {
													for (var s = 0; s < t.length; s++) {
														var o = t[s],
															r = i.sortData[o],
															a = n.sortData[o];
														if (r > a || r < a)
															return (
																(r > a ? 1 : -1) *
																((void 0 !== e[o] ? e[o] : e) ? 1 : -1)
															);
													}
													return 0;
												};
											})(this.sortHistory, this.options.sortAscending);
											this.filteredItems.sort(e);
										}
									}),
									(u._getIsSameSortBy = function (t) {
										for (var e = 0; e < t.length; e++)
											if (t[e] != this.sortHistory[e]) return !1;
										return !0;
									}),
									(u._mode = function () {
										var t = this.options.layoutMode,
											e = this.modes[t];
										if (!e) throw new Error("No layout mode: " + t);
										return (e.options = this.options[t]), e;
									}),
									(u._resetLayout = function () {
										e.prototype._resetLayout.call(this),
											this._mode()._resetLayout();
									}),
									(u._getItemLayoutPosition = function (t) {
										return this._mode()._getItemLayoutPosition(t);
									}),
									(u._manageStamp = function (t) {
										this._mode()._manageStamp(t);
									}),
									(u._getContainerSize = function () {
										return this._mode()._getContainerSize();
									}),
									(u.needsResizeLayout = function () {
										return this._mode().needsResizeLayout();
									}),
									(u.appended = function (t) {
										var e = this.addItems(t);
										if (e.length) {
											var i = this._filterRevealAdded(e);
											this.filteredItems = this.filteredItems.concat(i);
										}
									}),
									(u.prepended = function (t) {
										var e = this._itemize(t);
										if (e.length) {
											this._resetLayout(), this._manageStamps();
											var i = this._filterRevealAdded(e);
											this.layoutItems(this.filteredItems),
												(this.filteredItems = i.concat(this.filteredItems)),
												(this.items = e.concat(this.items));
										}
									}),
									(u._filterRevealAdded = function (t) {
										var e = this._filter(t);
										return (
											this.hide(e.needHide),
											this.reveal(e.matches),
											this.layoutItems(e.matches, !0),
											e.matches
										);
									}),
									(u.insert = function (t) {
										var e = this.addItems(t);
										if (e.length) {
											var i,
												n,
												s = e.length;
											for (i = 0; i < s; i++)
												(n = e[i]), this.element.appendChild(n.element);
											var o = this._filter(e).matches;
											for (i = 0; i < s; i++) e[i].isLayoutInstant = !0;
											for (this.arrange(), i = 0; i < s; i++)
												delete e[i].isLayoutInstant;
											this.reveal(o);
										}
									});
								var d = u.remove;
								return (
									(u.remove = function (t) {
										t = s.makeArray(t);
										var e = this.getItems(t);
										d.call(this, t);
										for (var i = e && e.length, n = 0; i && n < i; n++) {
											var o = e[n];
											s.removeFrom(this.filteredItems, o);
										}
									}),
									(u.shuffle = function () {
										for (var t = 0; t < this.items.length; t++)
											this.items[t].sortData.random = Math.random();
										(this.options.sortBy = "random"),
											this._sort(),
											this._layout();
									}),
									(u._noTransition = function (t, e) {
										var i = this.options.transitionDuration;
										this.options.transitionDuration = 0;
										var n = t.apply(this, e);
										return (this.options.transitionDuration = i), n;
									}),
									(u.getFilteredItemElements = function () {
										return this.filteredItems.map(function (t) {
											return t.element;
										});
									}),
									c
								);
							})(o, t, 0, i, n, s, r);
						}.apply(e, n)) || (t.exports = s);
			})(window);
		},
		568: (t, e, i) => {
			var n, s, o;
			window,
				(s = [i(794)]),
				void 0 ===
					(o =
						"function" ==
						typeof (n = function (t) {
							"use strict";
							function e() {
								t.Item.apply(this, arguments);
							}
							var i = (e.prototype = Object.create(t.Item.prototype)),
								n = i._create;
							(i._create = function () {
								(this.id = this.layout.itemGUID++),
									n.call(this),
									(this.sortData = {});
							}),
								(i.updateSortData = function () {
									if (!this.isIgnored) {
										(this.sortData.id = this.id),
											(this.sortData["original-order"] = this.id),
											(this.sortData.random = Math.random());
										var t = this.layout.options.getSortData,
											e = this.layout._sorters;
										for (var i in t) {
											var n = e[i];
											this.sortData[i] = n(this.element, this);
										}
									}
								});
							var s = i.destroy;
							return (
								(i.destroy = function () {
									s.apply(this, arguments), this.css({ display: "" });
								}),
								e
							);
						})
							? n.apply(e, s)
							: n) || (t.exports = o);
		},
		835: (t, e, i) => {
			var n, s, o;
			window,
				(s = [i(131), i(794)]),
				void 0 ===
					(o =
						"function" ==
						typeof (n = function (t, e) {
							"use strict";
							function i(t) {
								(this.isotope = t),
									t &&
										((this.options = t.options[this.namespace]),
										(this.element = t.element),
										(this.items = t.filteredItems),
										(this.size = t.size));
							}
							var n = i.prototype;
							return (
								[
									"_resetLayout",
									"_getItemLayoutPosition",
									"_manageStamp",
									"_getContainerSize",
									"_getElementOffset",
									"needsResizeLayout",
									"_getOption",
								].forEach(function (t) {
									n[t] = function () {
										return e.prototype[t].apply(this.isotope, arguments);
									};
								}),
								(n.needsVerticalResizeLayout = function () {
									var e = t(this.isotope.element);
									return (
										this.isotope.size &&
										e &&
										e.innerHeight != this.isotope.size.innerHeight
									);
								}),
								(n._getMeasurement = function () {
									this.isotope._getMeasurement.apply(this, arguments);
								}),
								(n.getColumnWidth = function () {
									this.getSegmentSize("column", "Width");
								}),
								(n.getRowHeight = function () {
									this.getSegmentSize("row", "Height");
								}),
								(n.getSegmentSize = function (t, e) {
									var i = t + e,
										n = "outer" + e;
									if ((this._getMeasurement(i, n), !this[i])) {
										var s = this.getFirstItemSize();
										this[i] = (s && s[n]) || this.isotope.size["inner" + e];
									}
								}),
								(n.getFirstItemSize = function () {
									var e = this.isotope.filteredItems[0];
									return e && e.element && t(e.element);
								}),
								(n.layout = function () {
									this.isotope.layout.apply(this.isotope, arguments);
								}),
								(n.getSize = function () {
									this.isotope.getSize(), (this.size = this.isotope.size);
								}),
								(i.modes = {}),
								(i.create = function (t, e) {
									function s() {
										i.apply(this, arguments);
									}
									return (
										(s.prototype = Object.create(n)),
										(s.prototype.constructor = s),
										e && (s.options = e),
										(s.prototype.namespace = t),
										(i.modes[t] = s),
										s
									);
								}),
								i
							);
						})
							? n.apply(e, s)
							: n) || (t.exports = o);
		},
		947: (t, e, i) => {
			var n, s, o;
			window,
				(s = [i(835)]),
				void 0 ===
					(o =
						"function" ==
						typeof (n = function (t) {
							"use strict";
							var e = t.create("fitRows"),
								i = e.prototype;
							return (
								(i._resetLayout = function () {
									(this.x = 0),
										(this.y = 0),
										(this.maxY = 0),
										this._getMeasurement("gutter", "outerWidth");
								}),
								(i._getItemLayoutPosition = function (t) {
									t.getSize();
									var e = t.size.outerWidth + this.gutter,
										i = this.isotope.size.innerWidth + this.gutter;
									0 !== this.x &&
										e + this.x > i &&
										((this.x = 0), (this.y = this.maxY));
									var n = { x: this.x, y: this.y };
									return (
										(this.maxY = Math.max(
											this.maxY,
											this.y + t.size.outerHeight
										)),
										(this.x += e),
										n
									);
								}),
								(i._getContainerSize = function () {
									return { height: this.maxY };
								}),
								e
							);
						})
							? n.apply(e, s)
							: n) || (t.exports = o);
		},
		666: (t, e, i) => {
			var n, s, o;
			window,
				(s = [i(835), i(751)]),
				void 0 ===
					(o =
						"function" ==
						typeof (n = function (t, e) {
							"use strict";
							var i = t.create("masonry"),
								n = i.prototype,
								s = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
							for (var o in e.prototype) s[o] || (n[o] = e.prototype[o]);
							var r = n.measureColumns;
							n.measureColumns = function () {
								(this.items = this.isotope.filteredItems), r.call(this);
							};
							var a = n._getOption;
							return (
								(n._getOption = function (t) {
									return "fitWidth" == t
										? void 0 !== this.options.isFitWidth
											? this.options.isFitWidth
											: this.options.fitWidth
										: a.apply(this.isotope, arguments);
								}),
								i
							);
						})
							? n.apply(e, s)
							: n) || (t.exports = o);
		},
		157: (t, e, i) => {
			var n, s, o;
			window,
				(s = [i(835)]),
				void 0 ===
					(o =
						"function" ==
						typeof (n = function (t) {
							"use strict";
							var e = t.create("vertical", { horizontalAlignment: 0 }),
								i = e.prototype;
							return (
								(i._resetLayout = function () {
									this.y = 0;
								}),
								(i._getItemLayoutPosition = function (t) {
									t.getSize();
									var e =
											(this.isotope.size.innerWidth - t.size.outerWidth) *
											this.options.horizontalAlignment,
										i = this.y;
									return (this.y += t.size.outerHeight), { x: e, y: i };
								}),
								(i._getContainerSize = function () {
									return { height: this.y };
								}),
								e
							);
						})
							? n.apply(e, s)
							: n) || (t.exports = o);
		},
		751: (t, e, i) => {
			var n, s, o;
			window,
				(s = [i(794), i(131)]),
				void 0 ===
					(o =
						"function" ==
						typeof (n = function (t, e) {
							"use strict";
							var i = t.create("masonry");
							i.compatOptions.fitWidth = "isFitWidth";
							var n = i.prototype;
							return (
								(n._resetLayout = function () {
									this.getSize(),
										this._getMeasurement("columnWidth", "outerWidth"),
										this._getMeasurement("gutter", "outerWidth"),
										this.measureColumns(),
										(this.colYs = []);
									for (var t = 0; t < this.cols; t++) this.colYs.push(0);
									(this.maxY = 0), (this.horizontalColIndex = 0);
								}),
								(n.measureColumns = function () {
									if ((this.getContainerWidth(), !this.columnWidth)) {
										var t = this.items[0],
											i = t && t.element;
										this.columnWidth =
											(i && e(i).outerWidth) || this.containerWidth;
									}
									var n = (this.columnWidth += this.gutter),
										s = this.containerWidth + this.gutter,
										o = s / n,
										r = n - (s % n);
									(o = Math[r && r < 1 ? "round" : "floor"](o)),
										(this.cols = Math.max(o, 1));
								}),
								(n.getContainerWidth = function () {
									var t = this._getOption("fitWidth")
											? this.element.parentNode
											: this.element,
										i = e(t);
									this.containerWidth = i && i.innerWidth;
								}),
								(n._getItemLayoutPosition = function (t) {
									t.getSize();
									var e = t.size.outerWidth % this.columnWidth,
										i = Math[e && e < 1 ? "round" : "ceil"](
											t.size.outerWidth / this.columnWidth
										);
									i = Math.min(i, this.cols);
									for (
										var n = this[
												this.options.horizontalOrder
													? "_getHorizontalColPosition"
													: "_getTopColPosition"
											](i, t),
											s = { x: this.columnWidth * n.col, y: n.y },
											o = n.y + t.size.outerHeight,
											r = i + n.col,
											a = n.col;
										a < r;
										a++
									)
										this.colYs[a] = o;
									return s;
								}),
								(n._getTopColPosition = function (t) {
									var e = this._getTopColGroup(t),
										i = Math.min.apply(Math, e);
									return { col: e.indexOf(i), y: i };
								}),
								(n._getTopColGroup = function (t) {
									if (t < 2) return this.colYs;
									for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++)
										e[n] = this._getColGroupY(n, t);
									return e;
								}),
								(n._getColGroupY = function (t, e) {
									if (e < 2) return this.colYs[t];
									var i = this.colYs.slice(t, t + e);
									return Math.max.apply(Math, i);
								}),
								(n._getHorizontalColPosition = function (t, e) {
									var i = this.horizontalColIndex % this.cols;
									i = t > 1 && i + t > this.cols ? 0 : i;
									var n = e.size.outerWidth && e.size.outerHeight;
									return (
										(this.horizontalColIndex = n
											? i + t
											: this.horizontalColIndex),
										{ col: i, y: this._getColGroupY(i, t) }
									);
								}),
								(n._manageStamp = function (t) {
									var i = e(t),
										n = this._getElementOffset(t),
										s = this._getOption("originLeft") ? n.left : n.right,
										o = s + i.outerWidth,
										r = Math.floor(s / this.columnWidth);
									r = Math.max(0, r);
									var a = Math.floor(o / this.columnWidth);
									(a -= o % this.columnWidth ? 0 : 1),
										(a = Math.min(this.cols - 1, a));
									for (
										var l =
												(this._getOption("originTop") ? n.top : n.bottom) +
												i.outerHeight,
											c = r;
										c <= a;
										c++
									)
										this.colYs[c] = Math.max(l, this.colYs[c]);
								}),
								(n._getContainerSize = function () {
									this.maxY = Math.max.apply(Math, this.colYs);
									var t = { height: this.maxY };
									return (
										this._getOption("fitWidth") &&
											(t.width = this._getContainerFitWidth()),
										t
									);
								}),
								(n._getContainerFitWidth = function () {
									for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; )
										t++;
									return (this.cols - t) * this.columnWidth - this.gutter;
								}),
								(n.needsResizeLayout = function () {
									var t = this.containerWidth;
									return this.getContainerWidth(), t != this.containerWidth;
								}),
								i
							);
						})
							? n.apply(e, s)
							: n) || (t.exports = o);
		},
		211: function (t, e) {
			!(function (t) {
				"use strict";
				function e(t) {
					return "object" == typeof t && "function" == typeof t.to;
				}
				function i(t) {
					t.parentElement.removeChild(t);
				}
				function n(t) {
					return null != t;
				}
				function s(t) {
					t.preventDefault();
				}
				function o(t) {
					return "number" == typeof t && !isNaN(t) && isFinite(t);
				}
				function r(t, e, i) {
					i > 0 &&
						(u(t, e),
						setTimeout(function () {
							h(t, e);
						}, i));
				}
				function a(t) {
					return Math.max(Math.min(t, 100), 0);
				}
				function l(t) {
					return Array.isArray(t) ? t : [t];
				}
				function c(t) {
					var e = (t = String(t)).split(".");
					return e.length > 1 ? e[1].length : 0;
				}
				function u(t, e) {
					t.classList && !/\s/.test(e)
						? t.classList.add(e)
						: (t.className += " " + e);
				}
				function h(t, e) {
					t.classList && !/\s/.test(e)
						? t.classList.remove(e)
						: (t.className = t.className.replace(
								new RegExp(
									"(^|\\b)" + e.split(" ").join("|") + "(\\b|$)",
									"gi"
								),
								" "
						  ));
				}
				function d(t) {
					var e = void 0 !== window.pageXOffset,
						i = "CSS1Compat" === (t.compatMode || "");
					return {
						x: e
							? window.pageXOffset
							: i
							? t.documentElement.scrollLeft
							: t.body.scrollLeft,
						y: e
							? window.pageYOffset
							: i
							? t.documentElement.scrollTop
							: t.body.scrollTop,
					};
				}
				function p(t, e) {
					return 100 / (e - t);
				}
				function f(t, e, i) {
					return (100 * e) / (t[i + 1] - t[i]);
				}
				function m(t, e) {
					for (var i = 1; t >= e[i]; ) i += 1;
					return i;
				}
				function g(t, e, i) {
					if (i >= t.slice(-1)[0]) return 100;
					var n = m(i, t),
						s = t[n - 1],
						o = t[n],
						r = e[n - 1],
						a = e[n];
					return (
						r +
						(function (t, e) {
							return f(t, t[0] < 0 ? e + Math.abs(t[0]) : e - t[0], 0);
						})([s, o], i) /
							p(r, a)
					);
				}
				function y(t, e, i, n) {
					if (100 === n) return n;
					var s = m(n, t),
						o = t[s - 1],
						r = t[s];
					return i
						? n - o > (r - o) / 2
							? r
							: o
						: e[s - 1]
						? t[s - 1] +
						  (function (t, e) {
								return Math.round(t / e) * e;
						  })(n - t[s - 1], e[s - 1])
						: n;
				}
				var v, b;
				(t.PipsMode = void 0),
					((b = t.PipsMode || (t.PipsMode = {})).Range = "range"),
					(b.Steps = "steps"),
					(b.Positions = "positions"),
					(b.Count = "count"),
					(b.Values = "values"),
					(t.PipsType = void 0),
					((v = t.PipsType || (t.PipsType = {}))[(v.None = -1)] = "None"),
					(v[(v.NoValue = 0)] = "NoValue"),
					(v[(v.LargeValue = 1)] = "LargeValue"),
					(v[(v.SmallValue = 2)] = "SmallValue");
				var w = (function () {
						function t(t, e, i) {
							var n;
							(this.xPct = []),
								(this.xVal = []),
								(this.xSteps = []),
								(this.xNumSteps = []),
								(this.xHighestCompleteStep = []),
								(this.xSteps = [i || !1]),
								(this.xNumSteps = [!1]),
								(this.snap = e);
							var s = [];
							for (
								Object.keys(t).forEach(function (e) {
									s.push([l(t[e]), e]);
								}),
									s.sort(function (t, e) {
										return t[0][0] - e[0][0];
									}),
									n = 0;
								n < s.length;
								n++
							)
								this.handleEntryPoint(s[n][1], s[n][0]);
							for (
								this.xNumSteps = this.xSteps.slice(0), n = 0;
								n < this.xNumSteps.length;
								n++
							)
								this.handleStepPoint(n, this.xNumSteps[n]);
						}
						return (
							(t.prototype.getDistance = function (t) {
								var e,
									i = [];
								for (e = 0; e < this.xNumSteps.length - 1; e++) {
									var n = this.xNumSteps[e];
									if (n && (t / n) % 1 != 0)
										throw new Error(
											"noUiSlider: 'limit', 'margin' and 'padding' of " +
												this.xPct[e] +
												"% range must be divisible by step."
										);
									i[e] = f(this.xVal, t, e);
								}
								return i;
							}),
							(t.prototype.getAbsoluteDistance = function (t, e, i) {
								var n,
									s = 0;
								if (t < this.xPct[this.xPct.length - 1])
									for (; t > this.xPct[s + 1]; ) s++;
								else
									t === this.xPct[this.xPct.length - 1] &&
										(s = this.xPct.length - 2);
								i || t !== this.xPct[s + 1] || s++, null === e && (e = []);
								var o = 1,
									r = e[s],
									a = 0,
									l = 0,
									c = 0,
									u = 0;
								for (
									n = i
										? (t - this.xPct[s]) / (this.xPct[s + 1] - this.xPct[s])
										: (this.xPct[s + 1] - t) /
										  (this.xPct[s + 1] - this.xPct[s]);
									r > 0;

								)
									(a = this.xPct[s + 1 + u] - this.xPct[s + u]),
										e[s + u] * o + 100 - 100 * n > 100
											? ((l = a * n), (o = (r - 100 * n) / e[s + u]), (n = 1))
											: ((l = ((e[s + u] * a) / 100) * o), (o = 0)),
										i
											? ((c -= l), this.xPct.length + u >= 1 && u--)
											: ((c += l), this.xPct.length - u >= 1 && u++),
										(r = e[s + u] * o);
								return t + c;
							}),
							(t.prototype.toStepping = function (t) {
								return g(this.xVal, this.xPct, t);
							}),
							(t.prototype.fromStepping = function (t) {
								return (function (t, e, i) {
									if (i >= 100) return t.slice(-1)[0];
									var n = m(i, e),
										s = t[n - 1],
										o = t[n],
										r = e[n - 1];
									return (function (t, e) {
										return (e * (t[1] - t[0])) / 100 + t[0];
									})([s, o], (i - r) * p(r, e[n]));
								})(this.xVal, this.xPct, t);
							}),
							(t.prototype.getStep = function (t) {
								return y(this.xPct, this.xSteps, this.snap, t);
							}),
							(t.prototype.getDefaultStep = function (t, e, i) {
								var n = m(t, this.xPct);
								return (
									(100 === t || (e && t === this.xPct[n - 1])) &&
										(n = Math.max(n - 1, 1)),
									(this.xVal[n] - this.xVal[n - 1]) / i
								);
							}),
							(t.prototype.getNearbySteps = function (t) {
								var e = m(t, this.xPct);
								return {
									stepBefore: {
										startValue: this.xVal[e - 2],
										step: this.xNumSteps[e - 2],
										highestStep: this.xHighestCompleteStep[e - 2],
									},
									thisStep: {
										startValue: this.xVal[e - 1],
										step: this.xNumSteps[e - 1],
										highestStep: this.xHighestCompleteStep[e - 1],
									},
									stepAfter: {
										startValue: this.xVal[e],
										step: this.xNumSteps[e],
										highestStep: this.xHighestCompleteStep[e],
									},
								};
							}),
							(t.prototype.countStepDecimals = function () {
								var t = this.xNumSteps.map(c);
								return Math.max.apply(null, t);
							}),
							(t.prototype.convert = function (t) {
								return this.getStep(this.toStepping(t));
							}),
							(t.prototype.handleEntryPoint = function (t, e) {
								var i;
								if (
									!o(
										(i = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t))
									) ||
									!o(e[0])
								)
									throw new Error("noUiSlider: 'range' value isn't numeric.");
								this.xPct.push(i), this.xVal.push(e[0]);
								var n = Number(e[1]);
								i
									? this.xSteps.push(!isNaN(n) && n)
									: isNaN(n) || (this.xSteps[0] = n),
									this.xHighestCompleteStep.push(0);
							}),
							(t.prototype.handleStepPoint = function (t, e) {
								if (e)
									if (this.xVal[t] !== this.xVal[t + 1]) {
										this.xSteps[t] =
											f([this.xVal[t], this.xVal[t + 1]], e, 0) /
											p(this.xPct[t], this.xPct[t + 1]);
										var i =
												(this.xVal[t + 1] - this.xVal[t]) / this.xNumSteps[t],
											n = Math.ceil(Number(i.toFixed(3)) - 1),
											s = this.xVal[t] + this.xNumSteps[t] * n;
										this.xHighestCompleteStep[t] = s;
									} else
										this.xSteps[t] = this.xHighestCompleteStep[t] =
											this.xVal[t];
							}),
							t
						);
					})(),
					_ = {
						to: function (t) {
							return void 0 === t ? "" : t.toFixed(2);
						},
						from: Number,
					},
					E = {
						target: "target",
						base: "base",
						origin: "origin",
						handle: "handle",
						handleLower: "handle-lower",
						handleUpper: "handle-upper",
						touchArea: "touch-area",
						horizontal: "horizontal",
						vertical: "vertical",
						background: "background",
						connect: "connect",
						connects: "connects",
						ltr: "ltr",
						rtl: "rtl",
						textDirectionLtr: "txt-dir-ltr",
						textDirectionRtl: "txt-dir-rtl",
						draggable: "draggable",
						drag: "state-drag",
						tap: "state-tap",
						active: "active",
						tooltip: "tooltip",
						pips: "pips",
						pipsHorizontal: "pips-horizontal",
						pipsVertical: "pips-vertical",
						marker: "marker",
						markerHorizontal: "marker-horizontal",
						markerVertical: "marker-vertical",
						markerNormal: "marker-normal",
						markerLarge: "marker-large",
						markerSub: "marker-sub",
						value: "value",
						valueHorizontal: "value-horizontal",
						valueVertical: "value-vertical",
						valueNormal: "value-normal",
						valueLarge: "value-large",
						valueSub: "value-sub",
					},
					x = ".__tooltips",
					k = ".__aria";
				function T(t, e) {
					if (!o(e)) throw new Error("noUiSlider: 'step' is not numeric.");
					t.singleStep = e;
				}
				function C(t, e) {
					if (!o(e))
						throw new Error(
							"noUiSlider: 'keyboardPageMultiplier' is not numeric."
						);
					t.keyboardPageMultiplier = e;
				}
				function S(t, e) {
					if (!o(e))
						throw new Error(
							"noUiSlider: 'keyboardDefaultStep' is not numeric."
						);
					t.keyboardDefaultStep = e;
				}
				function A(t, e) {
					if ("object" != typeof e || Array.isArray(e))
						throw new Error("noUiSlider: 'range' is not an object.");
					if (void 0 === e.min || void 0 === e.max)
						throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
					if (e.min === e.max)
						throw new Error(
							"noUiSlider: 'range' 'min' and 'max' cannot be equal."
						);
					t.spectrum = new w(e, t.snap || !1, t.singleStep);
				}
				function L(t, e) {
					if (((e = l(e)), !Array.isArray(e) || !e.length))
						throw new Error("noUiSlider: 'start' option is incorrect.");
					(t.handles = e.length), (t.start = e);
				}
				function P(t, e) {
					if ("boolean" != typeof e)
						throw new Error("noUiSlider: 'snap' option must be a boolean.");
					t.snap = e;
				}
				function O(t, e) {
					if ("boolean" != typeof e)
						throw new Error("noUiSlider: 'animate' option must be a boolean.");
					t.animate = e;
				}
				function M(t, e) {
					if ("number" != typeof e)
						throw new Error(
							"noUiSlider: 'animationDuration' option must be a number."
						);
					t.animationDuration = e;
				}
				function N(t, e) {
					var i,
						n = [!1];
					if (
						("lower" === e ? (e = [!0, !1]) : "upper" === e && (e = [!1, !0]),
						!0 === e || !1 === e)
					) {
						for (i = 1; i < t.handles; i++) n.push(e);
						n.push(!1);
					} else {
						if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1)
							throw new Error(
								"noUiSlider: 'connect' option doesn't match handle count."
							);
						n = e;
					}
					t.connect = n;
				}
				function I(t, e) {
					switch (e) {
						case "horizontal":
							t.ort = 0;
							break;
						case "vertical":
							t.ort = 1;
							break;
						default:
							throw new Error("noUiSlider: 'orientation' option is invalid.");
					}
				}
				function D(t, e) {
					if (!o(e))
						throw new Error("noUiSlider: 'margin' option must be numeric.");
					0 !== e && (t.margin = t.spectrum.getDistance(e));
				}
				function j(t, e) {
					if (!o(e))
						throw new Error("noUiSlider: 'limit' option must be numeric.");
					if (
						((t.limit = t.spectrum.getDistance(e)), !t.limit || t.handles < 2)
					)
						throw new Error(
							"noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles."
						);
				}
				function H(t, e) {
					var i;
					if (!o(e) && !Array.isArray(e))
						throw new Error(
							"noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
						);
					if (Array.isArray(e) && 2 !== e.length && !o(e[0]) && !o(e[1]))
						throw new Error(
							"noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
						);
					if (0 !== e) {
						for (
							Array.isArray(e) || (e = [e, e]),
								t.padding = [
									t.spectrum.getDistance(e[0]),
									t.spectrum.getDistance(e[1]),
								],
								i = 0;
							i < t.spectrum.xNumSteps.length - 1;
							i++
						)
							if (t.padding[0][i] < 0 || t.padding[1][i] < 0)
								throw new Error(
									"noUiSlider: 'padding' option must be a positive number(s)."
								);
						var n = e[0] + e[1],
							s = t.spectrum.xVal[0];
						if (n / (t.spectrum.xVal[t.spectrum.xVal.length - 1] - s) > 1)
							throw new Error(
								"noUiSlider: 'padding' option must not exceed 100% of the range."
							);
					}
				}
				function F(t, e) {
					switch (e) {
						case "ltr":
							t.dir = 0;
							break;
						case "rtl":
							t.dir = 1;
							break;
						default:
							throw new Error(
								"noUiSlider: 'direction' option was not recognized."
							);
					}
				}
				function z(t, e) {
					if ("string" != typeof e)
						throw new Error(
							"noUiSlider: 'behaviour' must be a string containing options."
						);
					var i = e.indexOf("tap") >= 0,
						n = e.indexOf("drag") >= 0,
						s = e.indexOf("fixed") >= 0,
						o = e.indexOf("snap") >= 0,
						r = e.indexOf("hover") >= 0,
						a = e.indexOf("unconstrained") >= 0;
					if (s) {
						if (2 !== t.handles)
							throw new Error(
								"noUiSlider: 'fixed' behaviour must be used with 2 handles"
							);
						D(t, t.start[1] - t.start[0]);
					}
					if (a && (t.margin || t.limit))
						throw new Error(
							"noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit"
						);
					t.events = {
						tap: i || o,
						drag: n,
						fixed: s,
						snap: o,
						hover: r,
						unconstrained: a,
					};
				}
				function R(t, i) {
					if (!1 !== i)
						if (!0 === i || e(i)) {
							t.tooltips = [];
							for (var n = 0; n < t.handles; n++) t.tooltips.push(i);
						} else {
							if ((i = l(i)).length !== t.handles)
								throw new Error(
									"noUiSlider: must pass a formatter for all handles."
								);
							i.forEach(function (t) {
								if ("boolean" != typeof t && !e(t))
									throw new Error(
										"noUiSlider: 'tooltips' must be passed a formatter or 'false'."
									);
							}),
								(t.tooltips = i);
						}
				}
				function B(t, i) {
					if (!e(i))
						throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
					t.ariaFormat = i;
				}
				function $(t, i) {
					if (
						!(function (t) {
							return e(t) && "function" == typeof t.from;
						})(i)
					)
						throw new Error(
							"noUiSlider: 'format' requires 'to' and 'from' methods."
						);
					t.format = i;
				}
				function q(t, e) {
					if ("boolean" != typeof e)
						throw new Error(
							"noUiSlider: 'keyboardSupport' option must be a boolean."
						);
					t.keyboardSupport = e;
				}
				function W(t, e) {
					t.documentElement = e;
				}
				function V(t, e) {
					if ("string" != typeof e && !1 !== e)
						throw new Error(
							"noUiSlider: 'cssPrefix' must be a string or `false`."
						);
					t.cssPrefix = e;
				}
				function U(t, e) {
					if ("object" != typeof e)
						throw new Error("noUiSlider: 'cssClasses' must be an object.");
					"string" == typeof t.cssPrefix
						? ((t.cssClasses = {}),
						  Object.keys(e).forEach(function (i) {
								t.cssClasses[i] = t.cssPrefix + e[i];
						  }))
						: (t.cssClasses = e);
				}
				function Y(t) {
					var e = {
							margin: null,
							limit: null,
							padding: null,
							animate: !0,
							animationDuration: 300,
							ariaFormat: _,
							format: _,
						},
						i = {
							step: { r: !1, t: T },
							keyboardPageMultiplier: { r: !1, t: C },
							keyboardDefaultStep: { r: !1, t: S },
							start: { r: !0, t: L },
							connect: { r: !0, t: N },
							direction: { r: !0, t: F },
							snap: { r: !1, t: P },
							animate: { r: !1, t: O },
							animationDuration: { r: !1, t: M },
							range: { r: !0, t: A },
							orientation: { r: !1, t: I },
							margin: { r: !1, t: D },
							limit: { r: !1, t: j },
							padding: { r: !1, t: H },
							behaviour: { r: !0, t: z },
							ariaFormat: { r: !1, t: B },
							format: { r: !1, t: $ },
							tooltips: { r: !1, t: R },
							keyboardSupport: { r: !0, t: q },
							documentElement: { r: !1, t: W },
							cssPrefix: { r: !0, t: V },
							cssClasses: { r: !0, t: U },
						},
						s = {
							connect: !1,
							direction: "ltr",
							behaviour: "tap",
							orientation: "horizontal",
							keyboardSupport: !0,
							cssPrefix: "noUi-",
							cssClasses: E,
							keyboardPageMultiplier: 5,
							keyboardDefaultStep: 10,
						};
					t.format && !t.ariaFormat && (t.ariaFormat = t.format),
						Object.keys(i).forEach(function (o) {
							if (n(t[o]) || void 0 !== s[o]) i[o].t(e, n(t[o]) ? t[o] : s[o]);
							else if (i[o].r)
								throw new Error("noUiSlider: '" + o + "' is required.");
						}),
						(e.pips = t.pips);
					var o = document.createElement("div"),
						r = void 0 !== o.style.msTransform,
						a = void 0 !== o.style.transform;
					e.transformRule = a
						? "transform"
						: r
						? "msTransform"
						: "webkitTransform";
					return (
						(e.style = [
							["left", "top"],
							["right", "bottom"],
						][e.dir][e.ort]),
						e
					);
				}
				function Q(e, o, c) {
					var p,
						f,
						m,
						g,
						y,
						v,
						b,
						w = window.navigator.pointerEnabled
							? { start: "pointerdown", move: "pointermove", end: "pointerup" }
							: window.navigator.msPointerEnabled
							? {
									start: "MSPointerDown",
									move: "MSPointerMove",
									end: "MSPointerUp",
							  }
							: {
									start: "mousedown touchstart",
									move: "mousemove touchmove",
									end: "mouseup touchend",
							  },
						_ =
							window.CSS &&
							CSS.supports &&
							CSS.supports("touch-action", "none") &&
							(function () {
								var t = !1;
								try {
									var e = Object.defineProperty({}, "passive", {
										get: function () {
											t = !0;
										},
									});
									window.addEventListener("test", null, e);
								} catch (t) {}
								return t;
							})(),
						E = e,
						T = o.spectrum,
						C = [],
						S = [],
						A = [],
						L = 0,
						P = {},
						O = e.ownerDocument,
						M = o.documentElement || O.documentElement,
						N = O.body,
						I = "rtl" === O.dir || 1 === o.ort ? 0 : 100;
					function D(t, e) {
						var i = O.createElement("div");
						return e && u(i, e), t.appendChild(i), i;
					}
					function j(t, e) {
						var i = D(t, o.cssClasses.origin),
							n = D(i, o.cssClasses.handle);
						return (
							D(n, o.cssClasses.touchArea),
							n.setAttribute("data-handle", String(e)),
							o.keyboardSupport &&
								(n.setAttribute("tabindex", "0"),
								n.addEventListener("keydown", function (t) {
									return (function (t, e) {
										if (z() || R(e)) return !1;
										var i = ["Left", "Right"],
											n = ["Down", "Up"],
											s = ["PageDown", "PageUp"],
											r = ["Home", "End"];
										o.dir && !o.ort
											? i.reverse()
											: o.ort && !o.dir && (n.reverse(), s.reverse());
										var a,
											l = t.key.replace("Arrow", ""),
											c = l === s[0],
											u = l === s[1],
											h = l === n[0] || l === i[0] || c,
											d = l === n[1] || l === i[1] || u,
											p = l === r[0],
											f = l === r[1];
										if (!(h || d || p || f)) return !0;
										if ((t.preventDefault(), d || h)) {
											var m = o.keyboardPageMultiplier,
												g = h ? 0 : 1,
												y = yt(e)[g];
											if (null === y) return !1;
											!1 === y &&
												(y = T.getDefaultStep(S[e], h, o.keyboardDefaultStep)),
												(u || c) && (y *= m),
												(y = Math.max(y, 1e-7)),
												(y *= h ? -1 : 1),
												(a = C[e] + y);
										} else a = f ? o.spectrum.xVal[o.spectrum.xVal.length - 1] : o.spectrum.xVal[0];
										return (
											dt(e, T.toStepping(a), !0, !0),
											rt("slide", e),
											rt("update", e),
											rt("change", e),
											rt("set", e),
											!1
										);
									})(t, e);
								})),
							n.setAttribute("role", "slider"),
							n.setAttribute(
								"aria-orientation",
								o.ort ? "vertical" : "horizontal"
							),
							0 === e
								? u(n, o.cssClasses.handleLower)
								: e === o.handles - 1 && u(n, o.cssClasses.handleUpper),
							i
						);
					}
					function H(t, e) {
						return !!e && D(t, o.cssClasses.connect);
					}
					function F(t, e) {
						return (
							!(!o.tooltips || !o.tooltips[e]) &&
							D(t.firstChild, o.cssClasses.tooltip)
						);
					}
					function z() {
						return E.hasAttribute("disabled");
					}
					function R(t) {
						return f[t].hasAttribute("disabled");
					}
					function B() {
						y &&
							(ot("update" + x),
							y.forEach(function (t) {
								t && i(t);
							}),
							(y = null));
					}
					function $() {
						B(),
							(y = f.map(F)),
							st("update" + x, function (t, e, i) {
								if (y && o.tooltips && !1 !== y[e]) {
									var n = t[e];
									!0 !== o.tooltips[e] && (n = o.tooltips[e].to(i[e])),
										(y[e].innerHTML = n);
								}
							});
					}
					function q(t, e) {
						return t.map(function (t) {
							return T.fromStepping(e ? T.getStep(t) : t);
						});
					}
					function W(e) {
						var i,
							n = (function (e) {
								if (e.mode === t.PipsMode.Range || e.mode === t.PipsMode.Steps)
									return T.xVal;
								if (e.mode === t.PipsMode.Count) {
									if (e.values < 2)
										throw new Error(
											"noUiSlider: 'values' (>= 2) required for mode 'count'."
										);
									for (var i = e.values - 1, n = 100 / i, s = []; i--; )
										s[i] = i * n;
									return s.push(100), q(s, e.stepped);
								}
								return e.mode === t.PipsMode.Positions
									? q(e.values, e.stepped)
									: e.mode === t.PipsMode.Values
									? e.stepped
										? e.values.map(function (t) {
												return T.fromStepping(T.getStep(T.toStepping(t)));
										  })
										: e.values
									: [];
							})(e),
							s = {},
							o = T.xVal[0],
							r = T.xVal[T.xVal.length - 1],
							a = !1,
							l = !1,
							c = 0;
						return (
							((i = n.slice().sort(function (t, e) {
								return t - e;
							})),
							(n = i.filter(function (t) {
								return !this[t] && (this[t] = !0);
							}, {})))[0] !== o && (n.unshift(o), (a = !0)),
							n[n.length - 1] !== r && (n.push(r), (l = !0)),
							n.forEach(function (i, o) {
								var r,
									u,
									h,
									d,
									p,
									f,
									m,
									g,
									y,
									v,
									b = i,
									w = n[o + 1],
									_ = e.mode === t.PipsMode.Steps;
								for (
									_ && (r = T.xNumSteps[o]),
										r || (r = w - b),
										void 0 === w && (w = b),
										r = Math.max(r, 1e-7),
										u = b;
									u <= w;
									u = Number((u + r).toFixed(7))
								) {
									for (
										g = (p = (d = T.toStepping(u)) - c) / (e.density || 1),
											v = p / (y = Math.round(g)),
											h = 1;
										h <= y;
										h += 1
									)
										s[(f = c + h * v).toFixed(5)] = [T.fromStepping(f), 0];
									(m =
										n.indexOf(u) > -1
											? t.PipsType.LargeValue
											: _
											? t.PipsType.SmallValue
											: t.PipsType.NoValue),
										!o && a && u !== w && (m = 0),
										(u === w && l) || (s[d.toFixed(5)] = [u, m]),
										(c = d);
								}
							}),
							s
						);
					}
					function V(e, i, n) {
						var s,
							r,
							a = O.createElement("div"),
							l =
								(((s = {})[t.PipsType.None] = ""),
								(s[t.PipsType.NoValue] = o.cssClasses.valueNormal),
								(s[t.PipsType.LargeValue] = o.cssClasses.valueLarge),
								(s[t.PipsType.SmallValue] = o.cssClasses.valueSub),
								s),
							c =
								(((r = {})[t.PipsType.None] = ""),
								(r[t.PipsType.NoValue] = o.cssClasses.markerNormal),
								(r[t.PipsType.LargeValue] = o.cssClasses.markerLarge),
								(r[t.PipsType.SmallValue] = o.cssClasses.markerSub),
								r),
							h = [o.cssClasses.valueHorizontal, o.cssClasses.valueVertical],
							d = [o.cssClasses.markerHorizontal, o.cssClasses.markerVertical];
						function p(t, e) {
							var i = e === o.cssClasses.value,
								n = i ? l : c;
							return e + " " + (i ? h : d)[o.ort] + " " + n[t];
						}
						return (
							u(a, o.cssClasses.pips),
							u(
								a,
								0 === o.ort
									? o.cssClasses.pipsHorizontal
									: o.cssClasses.pipsVertical
							),
							Object.keys(e).forEach(function (s) {
								!(function (e, s, r) {
									if ((r = i ? i(s, r) : r) !== t.PipsType.None) {
										var l = D(a, !1);
										(l.className = p(r, o.cssClasses.marker)),
											(l.style[o.style] = e + "%"),
											r > t.PipsType.NoValue &&
												(((l = D(a, !1)).className = p(r, o.cssClasses.value)),
												l.setAttribute("data-value", String(s)),
												(l.style[o.style] = e + "%"),
												(l.innerHTML = String(n.to(s))));
									}
								})(s, e[s][0], e[s][1]);
							}),
							a
						);
					}
					function U() {
						g && (i(g), (g = null));
					}
					function Q(t) {
						U();
						var e = W(t),
							i = t.filter,
							n = t.format || {
								to: function (t) {
									return String(Math.round(t));
								},
							};
						return (g = E.appendChild(V(e, i, n)));
					}
					function K() {
						var t = p.getBoundingClientRect(),
							e = "offset" + ["Width", "Height"][o.ort];
						return 0 === o.ort ? t.width || p[e] : t.height || p[e];
					}
					function X(t, e, i, n) {
						var s = function (s) {
								var r,
									a,
									l = (function (t, e, i) {
										var n = 0 === t.type.indexOf("touch"),
											s = 0 === t.type.indexOf("mouse"),
											o = 0 === t.type.indexOf("pointer"),
											r = 0,
											a = 0;
										if (
											(0 === t.type.indexOf("MSPointer") && (o = !0),
											"mousedown" === t.type && !t.buttons && !t.touches)
										)
											return !1;
										if (n) {
											var l = function (e) {
												var n = e.target;
												return (
													n === i ||
													i.contains(n) ||
													(t.composed && t.composedPath().shift() === i)
												);
											};
											if ("touchstart" === t.type) {
												var c = Array.prototype.filter.call(t.touches, l);
												if (c.length > 1) return !1;
												(r = c[0].pageX), (a = c[0].pageY);
											} else {
												var u = Array.prototype.find.call(t.changedTouches, l);
												if (!u) return !1;
												(r = u.pageX), (a = u.pageY);
											}
										}
										return (
											(e = e || d(O)),
											(s || o) &&
												((r = t.clientX + e.x), (a = t.clientY + e.y)),
											(t.pageOffset = e),
											(t.points = [r, a]),
											(t.cursor = s || o),
											t
										);
									})(s, n.pageOffset, n.target || e);
								return (
									!!l &&
									!(z() && !n.doNotReject) &&
									((r = E),
									(a = o.cssClasses.tap),
									!(
										(r.classList
											? r.classList.contains(a)
											: new RegExp("\\b" + a + "\\b").test(r.className)) &&
										!n.doNotReject
									)) &&
									!(t === w.start && void 0 !== l.buttons && l.buttons > 1) &&
									(!n.hover || !l.buttons) &&
									(_ || l.preventDefault(),
									(l.calcPoint = l.points[o.ort]),
									void i(l, n))
								);
							},
							r = [];
						return (
							t.split(" ").forEach(function (t) {
								e.addEventListener(t, s, !!_ && { passive: !0 }),
									r.push([t, s]);
							}),
							r
						);
					}
					function G(t) {
						var e,
							i,
							n,
							s,
							r,
							l,
							c =
								(100 *
									(t -
										((e = p),
										(i = o.ort),
										(n = e.getBoundingClientRect()),
										(s = e.ownerDocument),
										(r = s.documentElement),
										(l = d(s)),
										/webkit.*Chrome.*Mobile/i.test(navigator.userAgent) &&
											(l.x = 0),
										i
											? n.top + l.y - r.clientTop
											: n.left + l.x - r.clientLeft))) /
								K();
						return (c = a(c)), o.dir ? 100 - c : c;
					}
					function J(t, e) {
						"mouseout" === t.type &&
							"HTML" === t.target.nodeName &&
							null === t.relatedTarget &&
							tt(t, e);
					}
					function Z(t, e) {
						if (
							-1 === navigator.appVersion.indexOf("MSIE 9") &&
							0 === t.buttons &&
							0 !== e.buttonsProperty
						)
							return tt(t, e);
						var i = (o.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint);
						ct(
							i > 0,
							(100 * i) / e.baseSize,
							e.locations,
							e.handleNumbers,
							e.connect
						);
					}
					function tt(t, e) {
						e.handle && (h(e.handle, o.cssClasses.active), (L -= 1)),
							e.listeners.forEach(function (t) {
								M.removeEventListener(t[0], t[1]);
							}),
							0 === L &&
								(h(E, o.cssClasses.drag),
								ht(),
								t.cursor &&
									((N.style.cursor = ""),
									N.removeEventListener("selectstart", s))),
							e.handleNumbers.forEach(function (t) {
								rt("change", t), rt("set", t), rt("end", t);
							});
					}
					function et(t, e) {
						if (!e.handleNumbers.some(R)) {
							var i;
							1 === e.handleNumbers.length &&
								((i = f[e.handleNumbers[0]].children[0]),
								(L += 1),
								u(i, o.cssClasses.active)),
								t.stopPropagation();
							var n = [],
								r = X(w.move, M, Z, {
									target: t.target,
									handle: i,
									connect: e.connect,
									listeners: n,
									startCalcPoint: t.calcPoint,
									baseSize: K(),
									pageOffset: t.pageOffset,
									handleNumbers: e.handleNumbers,
									buttonsProperty: t.buttons,
									locations: S.slice(),
								}),
								a = X(w.end, M, tt, {
									target: t.target,
									handle: i,
									listeners: n,
									doNotReject: !0,
									handleNumbers: e.handleNumbers,
								}),
								l = X("mouseout", M, J, {
									target: t.target,
									handle: i,
									listeners: n,
									doNotReject: !0,
									handleNumbers: e.handleNumbers,
								});
							n.push.apply(n, r.concat(a, l)),
								t.cursor &&
									((N.style.cursor = getComputedStyle(t.target).cursor),
									f.length > 1 && u(E, o.cssClasses.drag),
									N.addEventListener("selectstart", s, !1)),
								e.handleNumbers.forEach(function (t) {
									rt("start", t);
								});
						}
					}
					function it(t) {
						t.stopPropagation();
						var e = G(t.calcPoint),
							i = (function (t) {
								var e = 100,
									i = !1;
								return (
									f.forEach(function (n, s) {
										if (!R(s)) {
											var o = S[s],
												r = Math.abs(o - t);
											(r < e ||
												(r <= e && t > o) ||
												(100 === r && 100 === e)) &&
												((i = s), (e = r));
										}
									}),
									i
								);
							})(e);
						!1 !== i &&
							(o.events.snap || r(E, o.cssClasses.tap, o.animationDuration),
							dt(i, e, !0, !0),
							ht(),
							rt("slide", i, !0),
							rt("update", i, !0),
							rt("change", i, !0),
							rt("set", i, !0),
							o.events.snap && et(t, { handleNumbers: [i] }));
					}
					function nt(t) {
						var e = G(t.calcPoint),
							i = T.getStep(e),
							n = T.fromStepping(i);
						Object.keys(P).forEach(function (t) {
							"hover" === t.split(".")[0] &&
								P[t].forEach(function (t) {
									t.call(vt, n);
								});
						});
					}
					function st(t, e) {
						(P[t] = P[t] || []),
							P[t].push(e),
							"update" === t.split(".")[0] &&
								f.forEach(function (t, e) {
									rt("update", e);
								});
					}
					function ot(t) {
						var e = t && t.split(".")[0],
							i = e ? t.substring(e.length) : t;
						Object.keys(P).forEach(function (t) {
							var n = t.split(".")[0],
								s = t.substring(n.length);
							(e && e !== n) ||
								(i && i !== s) ||
								((function (t) {
									return t === k || t === x;
								})(s) &&
									i !== s) ||
								delete P[t];
						});
					}
					function rt(t, e, i) {
						Object.keys(P).forEach(function (n) {
							var s = n.split(".")[0];
							t === s &&
								P[n].forEach(function (t) {
									t.call(
										vt,
										C.map(o.format.to),
										e,
										C.slice(),
										i || !1,
										S.slice(),
										vt
									);
								});
						});
					}
					function at(t, e, i, n, s, r) {
						var l;
						return (
							f.length > 1 &&
								!o.events.unconstrained &&
								(n &&
									e > 0 &&
									((l = T.getAbsoluteDistance(t[e - 1], o.margin, !1)),
									(i = Math.max(i, l))),
								s &&
									e < f.length - 1 &&
									((l = T.getAbsoluteDistance(t[e + 1], o.margin, !0)),
									(i = Math.min(i, l)))),
							f.length > 1 &&
								o.limit &&
								(n &&
									e > 0 &&
									((l = T.getAbsoluteDistance(t[e - 1], o.limit, !1)),
									(i = Math.min(i, l))),
								s &&
									e < f.length - 1 &&
									((l = T.getAbsoluteDistance(t[e + 1], o.limit, !0)),
									(i = Math.max(i, l)))),
							o.padding &&
								(0 === e &&
									((l = T.getAbsoluteDistance(0, o.padding[0], !1)),
									(i = Math.max(i, l))),
								e === f.length - 1 &&
									((l = T.getAbsoluteDistance(100, o.padding[1], !0)),
									(i = Math.min(i, l)))),
							!((i = a((i = T.getStep(i)))) === t[e] && !r) && i
						);
					}
					function lt(t, e) {
						var i = o.ort;
						return (i ? e : t) + ", " + (i ? t : e);
					}
					function ct(t, e, i, n, s) {
						var o = i.slice(),
							r = n[0],
							a = [!t, t],
							l = [t, !t];
						(n = n.slice()),
							t && n.reverse(),
							n.length > 1
								? n.forEach(function (t, i) {
										var n = at(o, t, o[t] + e, a[i], l[i], !1);
										!1 === n ? (e = 0) : ((e = n - o[t]), (o[t] = n));
								  })
								: (a = l = [!0]);
						var c = !1;
						n.forEach(function (t, n) {
							c = dt(t, i[t] + e, a[n], l[n]) || c;
						}),
							c &&
								(n.forEach(function (t) {
									rt("update", t), rt("slide", t);
								}),
								null != s && rt("drag", r));
					}
					function ut(t, e) {
						return o.dir ? 100 - t - e : t;
					}
					function ht() {
						A.forEach(function (t) {
							var e = S[t] > 50 ? -1 : 1,
								i = 3 + (f.length + e * t);
							f[t].style.zIndex = String(i);
						});
					}
					function dt(t, e, i, n, s) {
						return (
							s || (e = at(S, t, e, i, n, !1)),
							!1 !== e &&
								((function (t, e) {
									(S[t] = e), (C[t] = T.fromStepping(e));
									var i =
										"translate(" + lt(10 * (ut(e, 0) - I) + "%", "0") + ")";
									(f[t].style[o.transformRule] = i), pt(t), pt(t + 1);
								})(t, e),
								!0)
						);
					}
					function pt(t) {
						if (m[t]) {
							var e = 0,
								i = 100;
							0 !== t && (e = S[t - 1]), t !== m.length - 1 && (i = S[t]);
							var n = i - e,
								s = "translate(" + lt(ut(e, n) + "%", "0") + ")",
								r = "scale(" + lt(n / 100, "1") + ")";
							m[t].style[o.transformRule] = s + " " + r;
						}
					}
					function ft(t, e) {
						return null === t || !1 === t || void 0 === t
							? S[e]
							: ("number" == typeof t && (t = String(t)),
							  !1 !== (t = o.format.from(t)) && (t = T.toStepping(t)),
							  !1 === t || isNaN(t) ? S[e] : t);
					}
					function mt(t, e, i) {
						var n = l(t),
							s = void 0 === S[0];
						(e = void 0 === e || e),
							o.animate && !s && r(E, o.cssClasses.tap, o.animationDuration),
							A.forEach(function (t) {
								dt(t, ft(n[t], t), !0, !1, i);
							});
						for (var a = 1 === A.length ? 0 : 1; a < A.length; ++a)
							A.forEach(function (t) {
								dt(t, S[t], !0, !0, i);
							});
						ht(),
							A.forEach(function (t) {
								rt("update", t), null !== n[t] && e && rt("set", t);
							});
					}
					function gt(t) {
						if ((void 0 === t && (t = !1), t))
							return 1 === C.length ? C[0] : C.slice(0);
						var e = C.map(o.format.to);
						return 1 === e.length ? e[0] : e;
					}
					function yt(t) {
						var e = S[t],
							i = T.getNearbySteps(e),
							n = C[t],
							s = i.thisStep.step,
							r = null;
						if (o.snap)
							return [
								n - i.stepBefore.startValue || null,
								i.stepAfter.startValue - n || null,
							];
						!1 !== s &&
							n + s > i.stepAfter.startValue &&
							(s = i.stepAfter.startValue - n),
							(r =
								n > i.thisStep.startValue
									? i.thisStep.step
									: !1 !== i.stepBefore.step && n - i.stepBefore.highestStep),
							100 === e ? (s = null) : 0 === e && (r = null);
						var a = T.countStepDecimals();
						return (
							null !== s && !1 !== s && (s = Number(s.toFixed(a))),
							null !== r && !1 !== r && (r = Number(r.toFixed(a))),
							[r, s]
						);
					}
					u((b = E), o.cssClasses.target),
						0 === o.dir ? u(b, o.cssClasses.ltr) : u(b, o.cssClasses.rtl),
						0 === o.ort
							? u(b, o.cssClasses.horizontal)
							: u(b, o.cssClasses.vertical),
						u(
							b,
							"rtl" === getComputedStyle(b).direction
								? o.cssClasses.textDirectionRtl
								: o.cssClasses.textDirectionLtr
						),
						(p = D(b, o.cssClasses.base)),
						(function (t, e) {
							var i = D(e, o.cssClasses.connects);
							(f = []), (m = []).push(H(i, t[0]));
							for (var n = 0; n < o.handles; n++)
								f.push(j(e, n)), (A[n] = n), m.push(H(i, t[n + 1]));
						})(o.connect, p),
						(v = o.events).fixed ||
							f.forEach(function (t, e) {
								X(w.start, t.children[0], et, { handleNumbers: [e] });
							}),
						v.tap && X(w.start, p, it, {}),
						v.hover && X(w.move, p, nt, { hover: !0 }),
						v.drag &&
							m.forEach(function (t, e) {
								if (!1 !== t && 0 !== e && e !== m.length - 1) {
									var i = f[e - 1],
										n = f[e],
										s = [t];
									u(t, o.cssClasses.draggable),
										v.fixed && (s.push(i.children[0]), s.push(n.children[0])),
										s.forEach(function (s) {
											X(w.start, s, et, {
												handles: [i, n],
												handleNumbers: [e - 1, e],
												connect: t,
											});
										});
								}
							}),
						mt(o.start),
						o.pips && Q(o.pips),
						o.tooltips && $(),
						ot("update" + k),
						st("update" + k, function (t, e, i, n, s) {
							A.forEach(function (t) {
								var e = f[t],
									n = at(S, t, 0, !0, !0, !0),
									r = at(S, t, 100, !0, !0, !0),
									a = s[t],
									l = String(o.ariaFormat.to(i[t]));
								(n = T.fromStepping(n).toFixed(1)),
									(r = T.fromStepping(r).toFixed(1)),
									(a = T.fromStepping(a).toFixed(1)),
									e.children[0].setAttribute("aria-valuemin", n),
									e.children[0].setAttribute("aria-valuemax", r),
									e.children[0].setAttribute("aria-valuenow", a),
									e.children[0].setAttribute("aria-valuetext", l);
							});
						});
					var vt = {
						destroy: function () {
							for (
								ot(k),
									ot(x),
									Object.keys(o.cssClasses).forEach(function (t) {
										h(E, o.cssClasses[t]);
									});
								E.firstChild;

							)
								E.removeChild(E.firstChild);
							delete E.noUiSlider;
						},
						steps: function () {
							return A.map(yt);
						},
						on: st,
						off: ot,
						get: gt,
						set: mt,
						setHandle: function (t, e, i, n) {
							if (!((t = Number(t)) >= 0 && t < A.length))
								throw new Error("noUiSlider: invalid handle number, got: " + t);
							dt(t, ft(e, t), !0, !0, n), rt("update", t), i && rt("set", t);
						},
						reset: function (t) {
							mt(o.start, t);
						},
						__moveHandles: function (t, e, i) {
							ct(t, e, S, i);
						},
						options: c,
						updateOptions: function (t, e) {
							var i = gt(),
								s = [
									"margin",
									"limit",
									"padding",
									"range",
									"animate",
									"snap",
									"step",
									"format",
									"pips",
									"tooltips",
								];
							s.forEach(function (e) {
								void 0 !== t[e] && (c[e] = t[e]);
							});
							var r = Y(c);
							s.forEach(function (e) {
								void 0 !== t[e] && (o[e] = r[e]);
							}),
								(T = r.spectrum),
								(o.margin = r.margin),
								(o.limit = r.limit),
								(o.padding = r.padding),
								o.pips ? Q(o.pips) : U(),
								o.tooltips ? $() : B(),
								(S = []),
								mt(n(t.start) ? t.start : i, e);
						},
						target: E,
						removePips: U,
						removeTooltips: B,
						getTooltips: function () {
							return y;
						},
						getOrigins: function () {
							return f;
						},
						pips: Q,
					};
					return vt;
				}
				function K(t, e) {
					if (!t || !t.nodeName)
						throw new Error(
							"noUiSlider: create requires a single element, got: " + t
						);
					if (t.noUiSlider)
						throw new Error("noUiSlider: Slider was already initialized.");
					var i = Q(t, Y(e), e);
					return (t.noUiSlider = i), i;
				}
				var X = { __spectrum: w, cssClasses: E, create: K };
				(t.create = K),
					(t.cssClasses = E),
					(t.default = X),
					Object.defineProperty(t, "__esModule", { value: !0 });
			})(e);
		},
		652: (t, e, i) => {
			var n, s, o;
			window,
				(s = [i(158), i(131)]),
				void 0 ===
					(o =
						"function" ==
						typeof (n = function (t, e) {
							"use strict";
							var i = document.documentElement.style,
								n =
									"string" == typeof i.transition
										? "transition"
										: "WebkitTransition",
								s =
									"string" == typeof i.transform
										? "transform"
										: "WebkitTransform",
								o = {
									WebkitTransition: "webkitTransitionEnd",
									transition: "transitionend",
								}[n],
								r = {
									transform: s,
									transition: n,
									transitionDuration: n + "Duration",
									transitionProperty: n + "Property",
									transitionDelay: n + "Delay",
								};
							function a(t, e) {
								t &&
									((this.element = t),
									(this.layout = e),
									(this.position = { x: 0, y: 0 }),
									this._create());
							}
							var l = (a.prototype = Object.create(t.prototype));
							(l.constructor = a),
								(l._create = function () {
									(this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
										this.css({ position: "absolute" });
								}),
								(l.handleEvent = function (t) {
									var e = "on" + t.type;
									this[e] && this[e](t);
								}),
								(l.getSize = function () {
									this.size = e(this.element);
								}),
								(l.css = function (t) {
									var e = this.element.style;
									for (var i in t) e[r[i] || i] = t[i];
								}),
								(l.getPosition = function () {
									var t = getComputedStyle(this.element),
										e = this.layout._getOption("originLeft"),
										i = this.layout._getOption("originTop"),
										n = t[e ? "left" : "right"],
										s = t[i ? "top" : "bottom"],
										o = parseFloat(n),
										r = parseFloat(s),
										a = this.layout.size;
									-1 != n.indexOf("%") && (o = (o / 100) * a.width),
										-1 != s.indexOf("%") && (r = (r / 100) * a.height),
										(o = isNaN(o) ? 0 : o),
										(r = isNaN(r) ? 0 : r),
										(o -= e ? a.paddingLeft : a.paddingRight),
										(r -= i ? a.paddingTop : a.paddingBottom),
										(this.position.x = o),
										(this.position.y = r);
								}),
								(l.layoutPosition = function () {
									var t = this.layout.size,
										e = {},
										i = this.layout._getOption("originLeft"),
										n = this.layout._getOption("originTop"),
										s = i ? "paddingLeft" : "paddingRight",
										o = i ? "left" : "right",
										r = i ? "right" : "left",
										a = this.position.x + t[s];
									(e[o] = this.getXValue(a)), (e[r] = "");
									var l = n ? "paddingTop" : "paddingBottom",
										c = n ? "top" : "bottom",
										u = n ? "bottom" : "top",
										h = this.position.y + t[l];
									(e[c] = this.getYValue(h)),
										(e[u] = ""),
										this.css(e),
										this.emitEvent("layout", [this]);
								}),
								(l.getXValue = function (t) {
									var e = this.layout._getOption("horizontal");
									return this.layout.options.percentPosition && !e
										? (t / this.layout.size.width) * 100 + "%"
										: t + "px";
								}),
								(l.getYValue = function (t) {
									var e = this.layout._getOption("horizontal");
									return this.layout.options.percentPosition && e
										? (t / this.layout.size.height) * 100 + "%"
										: t + "px";
								}),
								(l._transitionTo = function (t, e) {
									this.getPosition();
									var i = this.position.x,
										n = this.position.y,
										s = t == this.position.x && e == this.position.y;
									if ((this.setPosition(t, e), !s || this.isTransitioning)) {
										var o = t - i,
											r = e - n,
											a = {};
										(a.transform = this.getTranslate(o, r)),
											this.transition({
												to: a,
												onTransitionEnd: { transform: this.layoutPosition },
												isCleaning: !0,
											});
									} else this.layoutPosition();
								}),
								(l.getTranslate = function (t, e) {
									return (
										"translate3d(" +
										(t = this.layout._getOption("originLeft") ? t : -t) +
										"px, " +
										(e = this.layout._getOption("originTop") ? e : -e) +
										"px, 0)"
									);
								}),
								(l.goTo = function (t, e) {
									this.setPosition(t, e), this.layoutPosition();
								}),
								(l.moveTo = l._transitionTo),
								(l.setPosition = function (t, e) {
									(this.position.x = parseFloat(t)),
										(this.position.y = parseFloat(e));
								}),
								(l._nonTransition = function (t) {
									for (var e in (this.css(t.to),
									t.isCleaning && this._removeStyles(t.to),
									t.onTransitionEnd))
										t.onTransitionEnd[e].call(this);
								}),
								(l.transition = function (t) {
									if (parseFloat(this.layout.options.transitionDuration)) {
										var e = this._transn;
										for (var i in t.onTransitionEnd)
											e.onEnd[i] = t.onTransitionEnd[i];
										for (i in t.to)
											(e.ingProperties[i] = !0),
												t.isCleaning && (e.clean[i] = !0);
										t.from && (this.css(t.from), this.element.offsetHeight),
											this.enableTransition(t.to),
											this.css(t.to),
											(this.isTransitioning = !0);
									} else this._nonTransition(t);
								});
							var c =
								"opacity," +
								s.replace(/([A-Z])/g, function (t) {
									return "-" + t.toLowerCase();
								});
							(l.enableTransition = function () {
								if (!this.isTransitioning) {
									var t = this.layout.options.transitionDuration;
									(t = "number" == typeof t ? t + "ms" : t),
										this.css({
											transitionProperty: c,
											transitionDuration: t,
											transitionDelay: this.staggerDelay || 0,
										}),
										this.element.addEventListener(o, this, !1);
								}
							}),
								(l.onwebkitTransitionEnd = function (t) {
									this.ontransitionend(t);
								}),
								(l.onotransitionend = function (t) {
									this.ontransitionend(t);
								});
							var u = { "-webkit-transform": "transform" };
							(l.ontransitionend = function (t) {
								if (t.target === this.element) {
									var e = this._transn,
										i = u[t.propertyName] || t.propertyName;
									delete e.ingProperties[i],
										(function (t) {
											for (var e in t) return !1;
											return !0;
										})(e.ingProperties) && this.disableTransition(),
										i in e.clean &&
											((this.element.style[t.propertyName] = ""),
											delete e.clean[i]),
										i in e.onEnd && (e.onEnd[i].call(this), delete e.onEnd[i]),
										this.emitEvent("transitionEnd", [this]);
								}
							}),
								(l.disableTransition = function () {
									this.removeTransitionStyles(),
										this.element.removeEventListener(o, this, !1),
										(this.isTransitioning = !1);
								}),
								(l._removeStyles = function (t) {
									var e = {};
									for (var i in t) e[i] = "";
									this.css(e);
								});
							var h = {
								transitionProperty: "",
								transitionDuration: "",
								transitionDelay: "",
							};
							return (
								(l.removeTransitionStyles = function () {
									this.css(h);
								}),
								(l.stagger = function (t) {
									(t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
								}),
								(l.removeElem = function () {
									this.element.parentNode.removeChild(this.element),
										this.css({ display: "" }),
										this.emitEvent("remove", [this]);
								}),
								(l.remove = function () {
									n && parseFloat(this.layout.options.transitionDuration)
										? (this.once("transitionEnd", function () {
												this.removeElem();
										  }),
										  this.hide())
										: this.removeElem();
								}),
								(l.reveal = function () {
									delete this.isHidden, this.css({ display: "" });
									var t = this.layout.options,
										e = {};
									(e[this.getHideRevealTransitionEndProperty("visibleStyle")] =
										this.onRevealTransitionEnd),
										this.transition({
											from: t.hiddenStyle,
											to: t.visibleStyle,
											isCleaning: !0,
											onTransitionEnd: e,
										});
								}),
								(l.onRevealTransitionEnd = function () {
									this.isHidden || this.emitEvent("reveal");
								}),
								(l.getHideRevealTransitionEndProperty = function (t) {
									var e = this.layout.options[t];
									if (e.opacity) return "opacity";
									for (var i in e) return i;
								}),
								(l.hide = function () {
									(this.isHidden = !0), this.css({ display: "" });
									var t = this.layout.options,
										e = {};
									(e[this.getHideRevealTransitionEndProperty("hiddenStyle")] =
										this.onHideTransitionEnd),
										this.transition({
											from: t.visibleStyle,
											to: t.hiddenStyle,
											isCleaning: !0,
											onTransitionEnd: e,
										});
								}),
								(l.onHideTransitionEnd = function () {
									this.isHidden &&
										(this.css({ display: "none" }), this.emitEvent("hide"));
								}),
								(l.destroy = function () {
									this.css({
										position: "",
										left: "",
										right: "",
										top: "",
										bottom: "",
										transition: "",
										transform: "",
									});
								}),
								a
							);
						})
							? n.apply(e, s)
							: n) || (t.exports = o);
		},
		794: (t, e, i) => {
			var n, s;
			!(function (o, r) {
				"use strict";
				(n = [i(158), i(131), i(47), i(652)]),
					void 0 ===
						(s = function (t, e, i, n) {
							return (function (t, e, i, n, s) {
								var o = t.console,
									r = t.jQuery,
									a = function () {},
									l = 0,
									c = {};
								function u(t, e) {
									var i = n.getQueryElement(t);
									if (i) {
										(this.element = i),
											r && (this.$element = r(this.element)),
											(this.options = n.extend({}, this.constructor.defaults)),
											this.option(e);
										var s = ++l;
										(this.element.outlayerGUID = s),
											(c[s] = this),
											this._create(),
											this._getOption("initLayout") && this.layout();
									} else
										o &&
											o.error(
												"Bad element for " +
													this.constructor.namespace +
													": " +
													(i || t)
											);
								}
								(u.namespace = "outlayer"),
									(u.Item = s),
									(u.defaults = {
										containerStyle: { position: "relative" },
										initLayout: !0,
										originLeft: !0,
										originTop: !0,
										resize: !0,
										resizeContainer: !0,
										transitionDuration: "0.4s",
										hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
										visibleStyle: { opacity: 1, transform: "scale(1)" },
									});
								var h = u.prototype;
								function d(t) {
									function e() {
										t.apply(this, arguments);
									}
									return (
										(e.prototype = Object.create(t.prototype)),
										(e.prototype.constructor = e),
										e
									);
								}
								n.extend(h, e.prototype),
									(h.option = function (t) {
										n.extend(this.options, t);
									}),
									(h._getOption = function (t) {
										var e = this.constructor.compatOptions[t];
										return e && void 0 !== this.options[e]
											? this.options[e]
											: this.options[t];
									}),
									(u.compatOptions = {
										initLayout: "isInitLayout",
										horizontal: "isHorizontal",
										layoutInstant: "isLayoutInstant",
										originLeft: "isOriginLeft",
										originTop: "isOriginTop",
										resize: "isResizeBound",
										resizeContainer: "isResizingContainer",
									}),
									(h._create = function () {
										this.reloadItems(),
											(this.stamps = []),
											this.stamp(this.options.stamp),
											n.extend(this.element.style, this.options.containerStyle),
											this._getOption("resize") && this.bindResize();
									}),
									(h.reloadItems = function () {
										this.items = this._itemize(this.element.children);
									}),
									(h._itemize = function (t) {
										for (
											var e = this._filterFindItemElements(t),
												i = this.constructor.Item,
												n = [],
												s = 0;
											s < e.length;
											s++
										) {
											var o = new i(e[s], this);
											n.push(o);
										}
										return n;
									}),
									(h._filterFindItemElements = function (t) {
										return n.filterFindElements(t, this.options.itemSelector);
									}),
									(h.getItemElements = function () {
										return this.items.map(function (t) {
											return t.element;
										});
									}),
									(h.layout = function () {
										this._resetLayout(), this._manageStamps();
										var t = this._getOption("layoutInstant"),
											e = void 0 !== t ? t : !this._isLayoutInited;
										this.layoutItems(this.items, e),
											(this._isLayoutInited = !0);
									}),
									(h._init = h.layout),
									(h._resetLayout = function () {
										this.getSize();
									}),
									(h.getSize = function () {
										this.size = i(this.element);
									}),
									(h._getMeasurement = function (t, e) {
										var n,
											s = this.options[t];
										s
											? ("string" == typeof s
													? (n = this.element.querySelector(s))
													: s instanceof HTMLElement && (n = s),
											  (this[t] = n ? i(n)[e] : s))
											: (this[t] = 0);
									}),
									(h.layoutItems = function (t, e) {
										(t = this._getItemsForLayout(t)),
											this._layoutItems(t, e),
											this._postLayout();
									}),
									(h._getItemsForLayout = function (t) {
										return t.filter(function (t) {
											return !t.isIgnored;
										});
									}),
									(h._layoutItems = function (t, e) {
										if (
											(this._emitCompleteOnItems("layout", t), t && t.length)
										) {
											var i = [];
											t.forEach(function (t) {
												var n = this._getItemLayoutPosition(t);
												(n.item = t),
													(n.isInstant = e || t.isLayoutInstant),
													i.push(n);
											}, this),
												this._processLayoutQueue(i);
										}
									}),
									(h._getItemLayoutPosition = function () {
										return { x: 0, y: 0 };
									}),
									(h._processLayoutQueue = function (t) {
										this.updateStagger(),
											t.forEach(function (t, e) {
												this._positionItem(t.item, t.x, t.y, t.isInstant, e);
											}, this);
									}),
									(h.updateStagger = function () {
										var t = this.options.stagger;
										if (null != t)
											return (
												(this.stagger = (function (t) {
													if ("number" == typeof t) return t;
													var e = t.match(/(^\d*\.?\d*)(\w*)/),
														i = e && e[1],
														n = e && e[2];
													return i.length
														? (i = parseFloat(i)) * (p[n] || 1)
														: 0;
												})(t)),
												this.stagger
											);
										this.stagger = 0;
									}),
									(h._positionItem = function (t, e, i, n, s) {
										n
											? t.goTo(e, i)
											: (t.stagger(s * this.stagger), t.moveTo(e, i));
									}),
									(h._postLayout = function () {
										this.resizeContainer();
									}),
									(h.resizeContainer = function () {
										if (this._getOption("resizeContainer")) {
											var t = this._getContainerSize();
											t &&
												(this._setContainerMeasure(t.width, !0),
												this._setContainerMeasure(t.height, !1));
										}
									}),
									(h._getContainerSize = a),
									(h._setContainerMeasure = function (t, e) {
										if (void 0 !== t) {
											var i = this.size;
											i.isBorderBox &&
												(t += e
													? i.paddingLeft +
													  i.paddingRight +
													  i.borderLeftWidth +
													  i.borderRightWidth
													: i.paddingBottom +
													  i.paddingTop +
													  i.borderTopWidth +
													  i.borderBottomWidth),
												(t = Math.max(t, 0)),
												(this.element.style[e ? "width" : "height"] = t + "px");
										}
									}),
									(h._emitCompleteOnItems = function (t, e) {
										var i = this;
										function n() {
											i.dispatchEvent(t + "Complete", null, [e]);
										}
										var s = e.length;
										if (e && s) {
											var o = 0;
											e.forEach(function (e) {
												e.once(t, r);
											});
										} else n();
										function r() {
											++o == s && n();
										}
									}),
									(h.dispatchEvent = function (t, e, i) {
										var n = e ? [e].concat(i) : i;
										if ((this.emitEvent(t, n), r))
											if (
												((this.$element = this.$element || r(this.element)), e)
											) {
												var s = r.Event(e);
												(s.type = t), this.$element.trigger(s, i);
											} else this.$element.trigger(t, i);
									}),
									(h.ignore = function (t) {
										var e = this.getItem(t);
										e && (e.isIgnored = !0);
									}),
									(h.unignore = function (t) {
										var e = this.getItem(t);
										e && delete e.isIgnored;
									}),
									(h.stamp = function (t) {
										(t = this._find(t)) &&
											((this.stamps = this.stamps.concat(t)),
											t.forEach(this.ignore, this));
									}),
									(h.unstamp = function (t) {
										(t = this._find(t)) &&
											t.forEach(function (t) {
												n.removeFrom(this.stamps, t), this.unignore(t);
											}, this);
									}),
									(h._find = function (t) {
										if (t)
											return (
												"string" == typeof t &&
													(t = this.element.querySelectorAll(t)),
												n.makeArray(t)
											);
									}),
									(h._manageStamps = function () {
										this.stamps &&
											this.stamps.length &&
											(this._getBoundingRect(),
											this.stamps.forEach(this._manageStamp, this));
									}),
									(h._getBoundingRect = function () {
										var t = this.element.getBoundingClientRect(),
											e = this.size;
										this._boundingRect = {
											left: t.left + e.paddingLeft + e.borderLeftWidth,
											top: t.top + e.paddingTop + e.borderTopWidth,
											right: t.right - (e.paddingRight + e.borderRightWidth),
											bottom:
												t.bottom - (e.paddingBottom + e.borderBottomWidth),
										};
									}),
									(h._manageStamp = a),
									(h._getElementOffset = function (t) {
										var e = t.getBoundingClientRect(),
											n = this._boundingRect,
											s = i(t);
										return {
											left: e.left - n.left - s.marginLeft,
											top: e.top - n.top - s.marginTop,
											right: n.right - e.right - s.marginRight,
											bottom: n.bottom - e.bottom - s.marginBottom,
										};
									}),
									(h.handleEvent = n.handleEvent),
									(h.bindResize = function () {
										t.addEventListener("resize", this),
											(this.isResizeBound = !0);
									}),
									(h.unbindResize = function () {
										t.removeEventListener("resize", this),
											(this.isResizeBound = !1);
									}),
									(h.onresize = function () {
										this.resize();
									}),
									n.debounceMethod(u, "onresize", 100),
									(h.resize = function () {
										this.isResizeBound &&
											this.needsResizeLayout() &&
											this.layout();
									}),
									(h.needsResizeLayout = function () {
										var t = i(this.element);
										return (
											this.size && t && t.innerWidth !== this.size.innerWidth
										);
									}),
									(h.addItems = function (t) {
										var e = this._itemize(t);
										return e.length && (this.items = this.items.concat(e)), e;
									}),
									(h.appended = function (t) {
										var e = this.addItems(t);
										e.length && (this.layoutItems(e, !0), this.reveal(e));
									}),
									(h.prepended = function (t) {
										var e = this._itemize(t);
										if (e.length) {
											var i = this.items.slice(0);
											(this.items = e.concat(i)),
												this._resetLayout(),
												this._manageStamps(),
												this.layoutItems(e, !0),
												this.reveal(e),
												this.layoutItems(i);
										}
									}),
									(h.reveal = function (t) {
										if (
											(this._emitCompleteOnItems("reveal", t), t && t.length)
										) {
											var e = this.updateStagger();
											t.forEach(function (t, i) {
												t.stagger(i * e), t.reveal();
											});
										}
									}),
									(h.hide = function (t) {
										if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
											var e = this.updateStagger();
											t.forEach(function (t, i) {
												t.stagger(i * e), t.hide();
											});
										}
									}),
									(h.revealItemElements = function (t) {
										var e = this.getItems(t);
										this.reveal(e);
									}),
									(h.hideItemElements = function (t) {
										var e = this.getItems(t);
										this.hide(e);
									}),
									(h.getItem = function (t) {
										for (var e = 0; e < this.items.length; e++) {
											var i = this.items[e];
											if (i.element == t) return i;
										}
									}),
									(h.getItems = function (t) {
										t = n.makeArray(t);
										var e = [];
										return (
											t.forEach(function (t) {
												var i = this.getItem(t);
												i && e.push(i);
											}, this),
											e
										);
									}),
									(h.remove = function (t) {
										var e = this.getItems(t);
										this._emitCompleteOnItems("remove", e),
											e &&
												e.length &&
												e.forEach(function (t) {
													t.remove(), n.removeFrom(this.items, t);
												}, this);
									}),
									(h.destroy = function () {
										var t = this.element.style;
										(t.height = ""),
											(t.position = ""),
											(t.width = ""),
											this.items.forEach(function (t) {
												t.destroy();
											}),
											this.unbindResize();
										var e = this.element.outlayerGUID;
										delete c[e],
											delete this.element.outlayerGUID,
											r &&
												r.removeData(this.element, this.constructor.namespace);
									}),
									(u.data = function (t) {
										var e = (t = n.getQueryElement(t)) && t.outlayerGUID;
										return e && c[e];
									}),
									(u.create = function (t, e) {
										var i = d(u);
										return (
											(i.defaults = n.extend({}, u.defaults)),
											n.extend(i.defaults, e),
											(i.compatOptions = n.extend({}, u.compatOptions)),
											(i.namespace = t),
											(i.data = u.data),
											(i.Item = d(s)),
											n.htmlInit(i, t),
											r && r.bridget && r.bridget(t, i),
											i
										);
									});
								var p = { ms: 1, s: 1e3 };
								return (u.Item = s), u;
							})(o, t, e, i, n);
						}.apply(e, n)) || (t.exports = s);
			})(window);
		},
		443: function (t, e, i) {
			"object" == typeof navigator &&
				(t.exports = (function () {
					"use strict";
					function t(t, e, i) {
						return (
							e in t
								? Object.defineProperty(t, e, {
										value: i,
										enumerable: !0,
										configurable: !0,
										writable: !0,
								  })
								: (t[e] = i),
							t
						);
					}
					function e(t, e) {
						for (var i = 0; i < e.length; i++) {
							var n = e[i];
							(n.enumerable = n.enumerable || !1),
								(n.configurable = !0),
								"value" in n && (n.writable = !0),
								Object.defineProperty(t, n.key, n);
						}
					}
					function n(t, e, i) {
						return (
							e in t
								? Object.defineProperty(t, e, {
										value: i,
										enumerable: !0,
										configurable: !0,
										writable: !0,
								  })
								: (t[e] = i),
							t
						);
					}
					function s(t, e) {
						var i = Object.keys(t);
						if (Object.getOwnPropertySymbols) {
							var n = Object.getOwnPropertySymbols(t);
							e &&
								(n = n.filter(function (e) {
									return Object.getOwnPropertyDescriptor(t, e).enumerable;
								})),
								i.push.apply(i, n);
						}
						return i;
					}
					function o(t) {
						for (var e = 1; e < arguments.length; e++) {
							var i = null != arguments[e] ? arguments[e] : {};
							e % 2
								? s(Object(i), !0).forEach(function (e) {
										n(t, e, i[e]);
								  })
								: Object.getOwnPropertyDescriptors
								? Object.defineProperties(
										t,
										Object.getOwnPropertyDescriptors(i)
								  )
								: s(Object(i)).forEach(function (e) {
										Object.defineProperty(
											t,
											e,
											Object.getOwnPropertyDescriptor(i, e)
										);
								  });
						}
						return t;
					}
					var r = { addCSS: !0, thumbWidth: 15, watch: !0 };
					function a(t, e) {
						return function () {
							return Array.from(document.querySelectorAll(e)).includes(this);
						}.call(t, e);
					}
					var l = function (t) {
							return null != t ? t.constructor : null;
						},
						c = function (t, e) {
							return !!(t && e && t instanceof e);
						},
						u = function (t) {
							return l(t) === String;
						},
						h = function (t) {
							return Array.isArray(t);
						},
						d = function (t) {
							return c(t, NodeList);
						},
						p = u,
						f = h,
						m = d,
						g = function (t) {
							return c(t, Element);
						},
						y = function (t) {
							return c(t, Event);
						},
						v = function (t) {
							return (
								(function (t) {
									return null == t;
								})(t) ||
								((u(t) || h(t) || d(t)) && !t.length) ||
								((function (t) {
									return l(t) === Object;
								})(t) &&
									!Object.keys(t).length)
							);
						};
					var b = (function () {
						function t(e, i) {
							(function (t, e) {
								if (!(t instanceof e))
									throw new TypeError("Cannot call a class as a function");
							})(this, t),
								g(e)
									? (this.element = e)
									: p(e) && (this.element = document.querySelector(e)),
								g(this.element) &&
									v(this.element.rangeTouch) &&
									((this.config = o({}, r, {}, i)), this.init());
						}
						return (
							(function (t, i, n) {
								i && e(t.prototype, i), n && e(t, n);
							})(
								t,
								[
									{
										key: "init",
										value: function () {
											t.enabled &&
												(this.config.addCSS &&
													((this.element.style.userSelect = "none"),
													(this.element.style.webKitUserSelect = "none"),
													(this.element.style.touchAction = "manipulation")),
												this.listeners(!0),
												(this.element.rangeTouch = this));
										},
									},
									{
										key: "destroy",
										value: function () {
											t.enabled &&
												(this.config.addCSS &&
													((this.element.style.userSelect = ""),
													(this.element.style.webKitUserSelect = ""),
													(this.element.style.touchAction = "")),
												this.listeners(!1),
												(this.element.rangeTouch = null));
										},
									},
									{
										key: "listeners",
										value: function (t) {
											var e = this,
												i = t ? "addEventListener" : "removeEventListener";
											["touchstart", "touchmove", "touchend"].forEach(function (
												t
											) {
												e.element[i](
													t,
													function (t) {
														return e.set(t);
													},
													!1
												);
											});
										},
									},
									{
										key: "get",
										value: function (e) {
											if (!t.enabled || !y(e)) return null;
											var i,
												n = e.target,
												s = e.changedTouches[0],
												o = parseFloat(n.getAttribute("min")) || 0,
												r = parseFloat(n.getAttribute("max")) || 100,
												a = parseFloat(n.getAttribute("step")) || 1,
												l = n.getBoundingClientRect(),
												c =
													((100 / l.width) * (this.config.thumbWidth / 2)) /
													100;
											return (
												0 > (i = (100 / l.width) * (s.clientX - l.left))
													? (i = 0)
													: 100 < i && (i = 100),
												50 > i
													? (i -= (100 - 2 * i) * c)
													: 50 < i && (i += 2 * (i - 50) * c),
												o +
													(function (t, e) {
														if (1 > e) {
															var i = (function (t) {
																var e = ""
																	.concat(t)
																	.match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
																return e
																	? Math.max(
																			0,
																			(e[1] ? e[1].length : 0) -
																				(e[2] ? +e[2] : 0)
																	  )
																	: 0;
															})(e);
															return parseFloat(t.toFixed(i));
														}
														return Math.round(t / e) * e;
													})((i / 100) * (r - o), a)
											);
										},
									},
									{
										key: "set",
										value: function (e) {
											t.enabled &&
												y(e) &&
												!e.target.disabled &&
												(e.preventDefault(),
												(e.target.value = this.get(e)),
												(function (t, e) {
													if (t && e) {
														var i = new Event(e, { bubbles: !0 });
														t.dispatchEvent(i);
													}
												})(
													e.target,
													"touchend" === e.type ? "change" : "input"
												));
										},
									},
								],
								[
									{
										key: "setup",
										value: function (e) {
											var i =
													1 < arguments.length && void 0 !== arguments[1]
														? arguments[1]
														: {},
												n = null;
											if (
												(v(e) || p(e)
													? (n = Array.from(
															document.querySelectorAll(
																p(e) ? e : 'input[type="range"]'
															)
													  ))
													: g(e)
													? (n = [e])
													: m(e)
													? (n = Array.from(e))
													: f(e) && (n = e.filter(g)),
												v(n))
											)
												return null;
											var s = o({}, r, {}, i);
											return (
												p(e) &&
													s.watch &&
													new MutationObserver(function (i) {
														Array.from(i).forEach(function (i) {
															Array.from(i.addedNodes).forEach(function (i) {
																g(i) && a(i, e) && new t(i, s);
															});
														});
													}).observe(document.body, {
														childList: !0,
														subtree: !0,
													}),
												n.map(function (e) {
													return new t(e, i);
												})
											);
										},
									},
									{
										key: "enabled",
										get: function () {
											return "ontouchstart" in document.documentElement;
										},
									},
								]
							),
							t
						);
					})();
					const w = (t) => (null != t ? t.constructor : null),
						_ = (t, e) => Boolean(t && e && t instanceof e),
						E = (t) => null == t,
						x = (t) => w(t) === Object,
						k = (t) => w(t) === String,
						T = (t) => w(t) === Function,
						C = (t) => Array.isArray(t),
						S = (t) => _(t, NodeList),
						A = (t) =>
							E(t) ||
							((k(t) || C(t) || S(t)) && !t.length) ||
							(x(t) && !Object.keys(t).length);
					var L = E,
						P = x,
						O = (t) => w(t) === Number && !Number.isNaN(t),
						M = k,
						N = (t) => w(t) === Boolean,
						I = T,
						D = C,
						j = S,
						H = (t) =>
							null !== t &&
							"object" == typeof t &&
							1 === t.nodeType &&
							"object" == typeof t.style &&
							"object" == typeof t.ownerDocument,
						F = (t) => _(t, Event),
						z = (t) => _(t, KeyboardEvent),
						R = (t) => _(t, TextTrack) || (!E(t) && k(t.kind)),
						B = (t) => {
							if (_(t, window.URL)) return !0;
							if (!k(t)) return !1;
							let e = t;
							(t.startsWith("http://") && t.startsWith("https://")) ||
								(e = `http://${t}`);
							try {
								return !A(new URL(e).hostname);
							} catch (t) {
								return !1;
							}
						},
						$ = A;
					const q = (() => {
						const t = document.createElement("span"),
							e = {
								WebkitTransition: "webkitTransitionEnd",
								MozTransition: "transitionend",
								OTransition: "oTransitionEnd otransitionend",
								transition: "transitionend",
							},
							i = Object.keys(e).find((e) => void 0 !== t.style[e]);
						return !!M(i) && e[i];
					})();
					function W(t, e) {
						setTimeout(() => {
							try {
								(t.hidden = !0), t.offsetHeight, (t.hidden = !1);
							} catch (t) {}
						}, e);
					}
					const V = {
						isIE: Boolean(window.document.documentMode),
						isEdge: window.navigator.userAgent.includes("Edge"),
						isWebkit:
							"WebkitAppearance" in document.documentElement.style &&
							!/Edge/.test(navigator.userAgent),
						isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
						isIos:
							("MacIntel" === navigator.platform &&
								navigator.maxTouchPoints > 1) ||
							/(iPad|iPhone|iPod)/gi.test(navigator.platform),
					};
					function U(t, e) {
						return e.split(".").reduce((t, e) => t && t[e], t);
					}
					function Y(t = {}, ...e) {
						if (!e.length) return t;
						const i = e.shift();
						return P(i)
							? (Object.keys(i).forEach((e) => {
									P(i[e])
										? (Object.keys(t).includes(e) ||
												Object.assign(t, { [e]: {} }),
										  Y(t[e], i[e]))
										: Object.assign(t, { [e]: i[e] });
							  }),
							  Y(t, ...e))
							: t;
					}
					function Q(t, e) {
						const i = t.length ? t : [t];
						Array.from(i)
							.reverse()
							.forEach((t, i) => {
								const n = i > 0 ? e.cloneNode(!0) : e,
									s = t.parentNode,
									o = t.nextSibling;
								n.appendChild(t), o ? s.insertBefore(n, o) : s.appendChild(n);
							});
					}
					function K(t, e) {
						H(t) &&
							!$(e) &&
							Object.entries(e)
								.filter(([, t]) => !L(t))
								.forEach(([e, i]) => t.setAttribute(e, i));
					}
					function X(t, e, i) {
						const n = document.createElement(t);
						return P(e) && K(n, e), M(i) && (n.innerText = i), n;
					}
					function G(t, e, i, n) {
						H(e) && e.appendChild(X(t, i, n));
					}
					function J(t) {
						j(t) || D(t)
							? Array.from(t).forEach(J)
							: H(t) && H(t.parentNode) && t.parentNode.removeChild(t);
					}
					function Z(t) {
						if (!H(t)) return;
						let { length: e } = t.childNodes;
						for (; e > 0; ) t.removeChild(t.lastChild), (e -= 1);
					}
					function tt(t, e) {
						return H(e) && H(e.parentNode) && H(t)
							? (e.parentNode.replaceChild(t, e), t)
							: null;
					}
					function et(t, e) {
						if (!M(t) || $(t)) return {};
						const i = {},
							n = Y({}, e);
						return (
							t.split(",").forEach((t) => {
								const e = t.trim(),
									s = e.replace(".", ""),
									o = e.replace(/[[\]]/g, "").split("="),
									[r] = o,
									a = o.length > 1 ? o[1].replace(/["']/g, "") : "";
								switch (e.charAt(0)) {
									case ".":
										M(n.class) ? (i.class = `${n.class} ${s}`) : (i.class = s);
										break;
									case "#":
										i.id = e.replace("#", "");
										break;
									case "[":
										i[r] = a;
								}
							}),
							Y(n, i)
						);
					}
					function it(t, e) {
						if (!H(t)) return;
						let i = e;
						N(i) || (i = !t.hidden), (t.hidden = i);
					}
					function nt(t, e, i) {
						if (j(t)) return Array.from(t).map((t) => nt(t, e, i));
						if (H(t)) {
							let n = "toggle";
							return (
								void 0 !== i && (n = i ? "add" : "remove"),
								t.classList[n](e),
								t.classList.contains(e)
							);
						}
						return !1;
					}
					function st(t, e) {
						return H(t) && t.classList.contains(e);
					}
					function ot(t, e) {
						const { prototype: i } = Element;
						return (
							i.matches ||
							i.webkitMatchesSelector ||
							i.mozMatchesSelector ||
							i.msMatchesSelector ||
							function () {
								return Array.from(document.querySelectorAll(e)).includes(this);
							}
						).call(t, e);
					}
					function rt(t) {
						return this.elements.container.querySelectorAll(t);
					}
					function at(t) {
						return this.elements.container.querySelector(t);
					}
					function lt(t = null, e = !1) {
						H(t) &&
							(t.focus({ preventScroll: !0 }),
							e && nt(t, this.config.classNames.tabFocus));
					}
					const ct = {
							"audio/ogg": "vorbis",
							"audio/wav": "1",
							"video/webm": "vp8, vorbis",
							"video/mp4": "avc1.42E01E, mp4a.40.2",
							"video/ogg": "theora",
						},
						ut = {
							audio: "canPlayType" in document.createElement("audio"),
							video: "canPlayType" in document.createElement("video"),
							check(t, e, i) {
								const n = V.isIPhone && i && ut.playsinline,
									s = ut[t] || "html5" !== e;
								return {
									api: s,
									ui: s && ut.rangeInput && ("video" !== t || !V.isIPhone || n),
								};
							},
							pip: !(
								V.isIPhone ||
								(!I(X("video").webkitSetPresentationMode) &&
									(!document.pictureInPictureEnabled ||
										X("video").disablePictureInPicture))
							),
							airplay: I(window.WebKitPlaybackTargetAvailabilityEvent),
							playsinline: "playsInline" in document.createElement("video"),
							mime(t) {
								if ($(t)) return !1;
								const [e] = t.split("/");
								let i = t;
								if (!this.isHTML5 || e !== this.type) return !1;
								Object.keys(ct).includes(i) && (i += `; codecs="${ct[t]}"`);
								try {
									return Boolean(
										i && this.media.canPlayType(i).replace(/no/, "")
									);
								} catch (t) {
									return !1;
								}
							},
							textTracks: "textTracks" in document.createElement("video"),
							rangeInput: (() => {
								const t = document.createElement("input");
								return (t.type = "range"), "range" === t.type;
							})(),
							touch: "ontouchstart" in document.documentElement,
							transitions: !1 !== q,
							reducedMotion:
								"matchMedia" in window &&
								window.matchMedia("(prefers-reduced-motion)").matches,
						},
						ht = (() => {
							let t = !1;
							try {
								const e = Object.defineProperty({}, "passive", {
									get: () => ((t = !0), null),
								});
								window.addEventListener("test", null, e),
									window.removeEventListener("test", null, e);
							} catch (t) {}
							return t;
						})();
					function dt(t, e, i, n = !1, s = !0, o = !1) {
						if (!t || !("addEventListener" in t) || $(e) || !I(i)) return;
						const r = e.split(" ");
						let a = o;
						ht && (a = { passive: s, capture: o }),
							r.forEach((e) => {
								this &&
									this.eventListeners &&
									n &&
									this.eventListeners.push({
										element: t,
										type: e,
										callback: i,
										options: a,
									}),
									t[n ? "addEventListener" : "removeEventListener"](e, i, a);
							});
					}
					function pt(t, e = "", i, n = !0, s = !1) {
						dt.call(this, t, e, i, !0, n, s);
					}
					function ft(t, e = "", i, n = !0, s = !1) {
						dt.call(this, t, e, i, !1, n, s);
					}
					function mt(t, e = "", i, n = !0, s = !1) {
						const o = (...r) => {
							ft(t, e, o, n, s), i.apply(this, r);
						};
						dt.call(this, t, e, o, !0, n, s);
					}
					function gt(t, e = "", i = !1, n = {}) {
						if (!H(t) || $(e)) return;
						const s = new CustomEvent(e, {
							bubbles: i,
							detail: { ...n, plyr: this },
						});
						t.dispatchEvent(s);
					}
					function yt() {
						this &&
							this.eventListeners &&
							(this.eventListeners.forEach((t) => {
								const { element: e, type: i, callback: n, options: s } = t;
								e.removeEventListener(i, n, s);
							}),
							(this.eventListeners = []));
					}
					function vt() {
						return new Promise((t) =>
							this.ready
								? setTimeout(t, 0)
								: pt.call(this, this.elements.container, "ready", t)
						).then(() => {});
					}
					function bt(t) {
						((t) => _(t, Promise) && T(t.then))(t) && t.then(null, () => {});
					}
					function wt(t) {
						return D(t) ? t.filter((e, i) => t.indexOf(e) === i) : t;
					}
					function _t(t, e) {
						return D(t) && t.length
							? t.reduce((t, i) => (Math.abs(i - e) < Math.abs(t - e) ? i : t))
							: null;
					}
					function Et(t) {
						return !(!window || !window.CSS) && window.CSS.supports(t);
					}
					const xt = [
						[1, 1],
						[4, 3],
						[3, 4],
						[5, 4],
						[4, 5],
						[3, 2],
						[2, 3],
						[16, 10],
						[10, 16],
						[16, 9],
						[9, 16],
						[21, 9],
						[9, 21],
						[32, 9],
						[9, 32],
					].reduce((t, [e, i]) => ({ ...t, [e / i]: [e, i] }), {});
					function kt(t) {
						return (
							!!(D(t) || (M(t) && t.includes(":"))) &&
							(D(t) ? t : t.split(":")).map(Number).every(O)
						);
					}
					function Tt(t) {
						if (!D(t) || !t.every(O)) return null;
						const [e, i] = t,
							n = (t, e) => (0 === e ? t : n(e, t % e)),
							s = n(e, i);
						return [e / s, i / s];
					}
					function Ct(t) {
						const e = (t) => (kt(t) ? t.split(":").map(Number) : null);
						let i = e(t);
						if (
							(null === i && (i = e(this.config.ratio)),
							null === i &&
								!$(this.embed) &&
								D(this.embed.ratio) &&
								({ ratio: i } = this.embed),
							null === i && this.isHTML5)
						) {
							const { videoWidth: t, videoHeight: e } = this.media;
							i = [t, e];
						}
						return Tt(i);
					}
					function St(t) {
						if (!this.isVideo) return {};
						const { wrapper: e } = this.elements,
							i = Ct.call(this, t);
						if (!D(i)) return {};
						const [n, s] = Tt(i),
							o = (100 / n) * s;
						if (
							(Et(`aspect-ratio: ${n}/${s}`)
								? (e.style.aspectRatio = `${n}/${s}`)
								: (e.style.paddingBottom = `${o}%`),
							this.isVimeo && !this.config.vimeo.premium && this.supported.ui)
						) {
							const t =
									(100 / this.media.offsetWidth) *
									parseInt(
										window.getComputedStyle(this.media).paddingBottom,
										10
									),
								i = (t - o) / (t / 50);
							this.fullscreen.active
								? (e.style.paddingBottom = null)
								: (this.media.style.transform = `translateY(-${i}%)`);
						} else
							this.isHTML5 &&
								e.classList.add(this.config.classNames.videoFixedRatio);
						return { padding: o, ratio: i };
					}
					function At(t, e, i = 0.05) {
						const n = t / e,
							s = _t(Object.keys(xt), n);
						return Math.abs(s - n) <= i ? xt[s] : [t, e];
					}
					const Lt = {
						getSources() {
							return this.isHTML5
								? Array.from(this.media.querySelectorAll("source")).filter(
										(t) => {
											const e = t.getAttribute("type");
											return !!$(e) || ut.mime.call(this, e);
										}
								  )
								: [];
						},
						getQualityOptions() {
							return this.config.quality.forced
								? this.config.quality.options
								: Lt.getSources
										.call(this)
										.map((t) => Number(t.getAttribute("size")))
										.filter(Boolean);
						},
						setup() {
							if (!this.isHTML5) return;
							const t = this;
							(t.options.speed = t.config.speed.options),
								$(this.config.ratio) || St.call(t),
								Object.defineProperty(t.media, "quality", {
									get() {
										const e = Lt.getSources
											.call(t)
											.find((e) => e.getAttribute("src") === t.source);
										return e && Number(e.getAttribute("size"));
									},
									set(e) {
										if (t.quality !== e) {
											if (
												t.config.quality.forced &&
												I(t.config.quality.onChange)
											)
												t.config.quality.onChange(e);
											else {
												const i = Lt.getSources
													.call(t)
													.find((t) => Number(t.getAttribute("size")) === e);
												if (!i) return;
												const {
													currentTime: n,
													paused: s,
													preload: o,
													readyState: r,
													playbackRate: a,
												} = t.media;
												(t.media.src = i.getAttribute("src")),
													("none" !== o || r) &&
														(t.once("loadedmetadata", () => {
															(t.speed = a),
																(t.currentTime = n),
																s || bt(t.play());
														}),
														t.media.load());
											}
											gt.call(t, t.media, "qualitychange", !1, { quality: e });
										}
									},
								});
						},
						cancelRequests() {
							this.isHTML5 &&
								(J(Lt.getSources.call(this)),
								this.media.setAttribute("src", this.config.blankVideo),
								this.media.load(),
								this.debug.log("Cancelled network requests"));
						},
					};
					function Pt(t, ...e) {
						return $(t)
							? t
							: t.toString().replace(/{(\d+)}/g, (t, i) => e[i].toString());
					}
					const Ot = (t = "", e = "", i = "") =>
							t.replace(
								new RegExp(
									e.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"),
									"g"
								),
								i.toString()
							),
						Mt = (t = "") =>
							t
								.toString()
								.replace(
									/\w\S*/g,
									(t) => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()
								);
					function Nt(t) {
						const e = document.createElement("div");
						return e.appendChild(t), e.innerHTML;
					}
					const It = {
							pip: "PIP",
							airplay: "AirPlay",
							html5: "HTML5",
							vimeo: "Vimeo",
							youtube: "YouTube",
						},
						Dt = {
							get(t = "", e = {}) {
								if ($(t) || $(e)) return "";
								let i = U(e.i18n, t);
								if ($(i)) return Object.keys(It).includes(t) ? It[t] : "";
								const n = { "{seektime}": e.seekTime, "{title}": e.title };
								return (
									Object.entries(n).forEach(([t, e]) => {
										i = Ot(i, t, e);
									}),
									i
								);
							},
						};
					class jt {
						constructor(e) {
							t(this, "get", (t) => {
								if (!jt.supported || !this.enabled) return null;
								const e = window.localStorage.getItem(this.key);
								if ($(e)) return null;
								const i = JSON.parse(e);
								return M(t) && t.length ? i[t] : i;
							}),
								t(this, "set", (t) => {
									if (!jt.supported || !this.enabled) return;
									if (!P(t)) return;
									let e = this.get();
									$(e) && (e = {}),
										Y(e, t),
										window.localStorage.setItem(this.key, JSON.stringify(e));
								}),
								(this.enabled = e.config.storage.enabled),
								(this.key = e.config.storage.key);
						}
						static get supported() {
							try {
								if (!("localStorage" in window)) return !1;
								const t = "___test";
								return (
									window.localStorage.setItem(t, t),
									window.localStorage.removeItem(t),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
					}
					function Ht(t, e = "text") {
						return new Promise((i, n) => {
							try {
								const n = new XMLHttpRequest();
								if (!("withCredentials" in n)) return;
								n.addEventListener("load", () => {
									if ("text" === e)
										try {
											i(JSON.parse(n.responseText));
										} catch (t) {
											i(n.responseText);
										}
									else i(n.response);
								}),
									n.addEventListener("error", () => {
										throw new Error(n.status);
									}),
									n.open("GET", t, !0),
									(n.responseType = e),
									n.send();
							} catch (t) {
								n(t);
							}
						});
					}
					function Ft(t, e) {
						if (!M(t)) return;
						const i = M(e);
						let n = !1;
						const s = () => null !== document.getElementById(e),
							o = (t, e) => {
								(t.innerHTML = e),
									(i && s()) ||
										document.body.insertAdjacentElement("afterbegin", t);
							};
						if (!i || !s()) {
							const s = jt.supported,
								r = document.createElement("div");
							if (
								(r.setAttribute("hidden", ""), i && r.setAttribute("id", e), s)
							) {
								const t = window.localStorage.getItem(`cache-${e}`);
								if (((n = null !== t), n)) {
									const e = JSON.parse(t);
									o(r, e.content);
								}
							}
							Ht(t)
								.then((t) => {
									$(t) ||
										(s &&
											window.localStorage.setItem(
												`cache-${e}`,
												JSON.stringify({ content: t })
											),
										o(r, t));
								})
								.catch(() => {});
						}
					}
					const zt = (t) => Math.trunc((t / 60 / 60) % 60, 10);
					function Rt(t = 0, e = !1, i = !1) {
						if (!O(t)) return Rt(void 0, e, i);
						const n = (t) => `0${t}`.slice(-2);
						let s = zt(t);
						const o = ((r = t), Math.trunc((r / 60) % 60, 10));
						var r;
						const a = ((t) => Math.trunc(t % 60, 10))(t);
						return (
							(s = e || s > 0 ? `${s}:` : ""),
							`${i && t > 0 ? "-" : ""}${s}${n(o)}:${n(a)}`
						);
					}
					const Bt = {
						getIconUrl() {
							const t =
								new URL(this.config.iconUrl, window.location).host !==
									window.location.host ||
								(V.isIE && !window.svg4everybody);
							return { url: this.config.iconUrl, cors: t };
						},
						findElements() {
							try {
								return (
									(this.elements.controls = at.call(
										this,
										this.config.selectors.controls.wrapper
									)),
									(this.elements.buttons = {
										play: rt.call(this, this.config.selectors.buttons.play),
										pause: at.call(this, this.config.selectors.buttons.pause),
										restart: at.call(
											this,
											this.config.selectors.buttons.restart
										),
										rewind: at.call(this, this.config.selectors.buttons.rewind),
										fastForward: at.call(
											this,
											this.config.selectors.buttons.fastForward
										),
										mute: at.call(this, this.config.selectors.buttons.mute),
										pip: at.call(this, this.config.selectors.buttons.pip),
										airplay: at.call(
											this,
											this.config.selectors.buttons.airplay
										),
										settings: at.call(
											this,
											this.config.selectors.buttons.settings
										),
										captions: at.call(
											this,
											this.config.selectors.buttons.captions
										),
										fullscreen: at.call(
											this,
											this.config.selectors.buttons.fullscreen
										),
									}),
									(this.elements.progress = at.call(
										this,
										this.config.selectors.progress
									)),
									(this.elements.inputs = {
										seek: at.call(this, this.config.selectors.inputs.seek),
										volume: at.call(this, this.config.selectors.inputs.volume),
									}),
									(this.elements.display = {
										buffer: at.call(this, this.config.selectors.display.buffer),
										currentTime: at.call(
											this,
											this.config.selectors.display.currentTime
										),
										duration: at.call(
											this,
											this.config.selectors.display.duration
										),
									}),
									H(this.elements.progress) &&
										(this.elements.display.seekTooltip =
											this.elements.progress.querySelector(
												`.${this.config.classNames.tooltip}`
											)),
									!0
								);
							} catch (t) {
								return (
									this.debug.warn(
										"It looks like there is a problem with your custom controls HTML",
										t
									),
									this.toggleNativeControls(!0),
									!1
								);
							}
						},
						createIcon(t, e) {
							const i = "http://www.w3.org/2000/svg",
								n = Bt.getIconUrl.call(this),
								s = `${n.cors ? "" : n.url}#${this.config.iconPrefix}`,
								o = document.createElementNS(i, "svg");
							K(o, Y(e, { "aria-hidden": "true", focusable: "false" }));
							const r = document.createElementNS(i, "use"),
								a = `${s}-${t}`;
							return (
								"href" in r &&
									r.setAttributeNS("http://www.w3.org/1999/xlink", "href", a),
								r.setAttributeNS(
									"http://www.w3.org/1999/xlink",
									"xlink:href",
									a
								),
								o.appendChild(r),
								o
							);
						},
						createLabel(t, e = {}) {
							const i = Dt.get(t, this.config);
							return X(
								"span",
								{
									...e,
									class: [e.class, this.config.classNames.hidden]
										.filter(Boolean)
										.join(" "),
								},
								i
							);
						},
						createBadge(t) {
							if ($(t)) return null;
							const e = X("span", { class: this.config.classNames.menu.value });
							return (
								e.appendChild(
									X("span", { class: this.config.classNames.menu.badge }, t)
								),
								e
							);
						},
						createButton(t, e) {
							const i = Y({}, e);
							let n = (function (t = "") {
								let e = t.toString();
								return (
									(e = (function (t = "") {
										let e = t.toString();
										return (
											(e = Ot(e, "-", " ")),
											(e = Ot(e, "_", " ")),
											(e = Mt(e)),
											Ot(e, " ", "")
										);
									})(e)),
									e.charAt(0).toLowerCase() + e.slice(1)
								);
							})(t);
							const s = {
								element: "button",
								toggle: !1,
								label: null,
								icon: null,
								labelPressed: null,
								iconPressed: null,
							};
							switch (
								(["element", "icon", "label"].forEach((t) => {
									Object.keys(i).includes(t) && ((s[t] = i[t]), delete i[t]);
								}),
								"button" !== s.element ||
									Object.keys(i).includes("type") ||
									(i.type = "button"),
								Object.keys(i).includes("class")
									? i.class
											.split(" ")
											.some((t) => t === this.config.classNames.control) ||
									  Y(i, {
											class: `${i.class} ${this.config.classNames.control}`,
									  })
									: (i.class = this.config.classNames.control),
								t)
							) {
								case "play":
									(s.toggle = !0),
										(s.label = "play"),
										(s.labelPressed = "pause"),
										(s.icon = "play"),
										(s.iconPressed = "pause");
									break;
								case "mute":
									(s.toggle = !0),
										(s.label = "mute"),
										(s.labelPressed = "unmute"),
										(s.icon = "volume"),
										(s.iconPressed = "muted");
									break;
								case "captions":
									(s.toggle = !0),
										(s.label = "enableCaptions"),
										(s.labelPressed = "disableCaptions"),
										(s.icon = "captions-off"),
										(s.iconPressed = "captions-on");
									break;
								case "fullscreen":
									(s.toggle = !0),
										(s.label = "enterFullscreen"),
										(s.labelPressed = "exitFullscreen"),
										(s.icon = "enter-fullscreen"),
										(s.iconPressed = "exit-fullscreen");
									break;
								case "play-large":
									(i.class += ` ${this.config.classNames.control}--overlaid`),
										(n = "play"),
										(s.label = "play"),
										(s.icon = "play");
									break;
								default:
									$(s.label) && (s.label = n), $(s.icon) && (s.icon = t);
							}
							const o = X(s.element);
							return (
								s.toggle
									? (o.appendChild(
											Bt.createIcon.call(this, s.iconPressed, {
												class: "icon--pressed",
											})
									  ),
									  o.appendChild(
											Bt.createIcon.call(this, s.icon, {
												class: "icon--not-pressed",
											})
									  ),
									  o.appendChild(
											Bt.createLabel.call(this, s.labelPressed, {
												class: "label--pressed",
											})
									  ),
									  o.appendChild(
											Bt.createLabel.call(this, s.label, {
												class: "label--not-pressed",
											})
									  ))
									: (o.appendChild(Bt.createIcon.call(this, s.icon)),
									  o.appendChild(Bt.createLabel.call(this, s.label))),
								Y(i, et(this.config.selectors.buttons[n], i)),
								K(o, i),
								"play" === n
									? (D(this.elements.buttons[n]) ||
											(this.elements.buttons[n] = []),
									  this.elements.buttons[n].push(o))
									: (this.elements.buttons[n] = o),
								o
							);
						},
						createRange(t, e) {
							const i = X(
								"input",
								Y(
									et(this.config.selectors.inputs[t]),
									{
										type: "range",
										min: 0,
										max: 100,
										step: 0.01,
										value: 0,
										autocomplete: "off",
										role: "slider",
										"aria-label": Dt.get(t, this.config),
										"aria-valuemin": 0,
										"aria-valuemax": 100,
										"aria-valuenow": 0,
									},
									e
								)
							);
							return (
								(this.elements.inputs[t] = i),
								Bt.updateRangeFill.call(this, i),
								b.setup(i),
								i
							);
						},
						createProgress(t, e) {
							const i = X(
								"progress",
								Y(
									et(this.config.selectors.display[t]),
									{
										min: 0,
										max: 100,
										value: 0,
										role: "progressbar",
										"aria-hidden": !0,
									},
									e
								)
							);
							if ("volume" !== t) {
								i.appendChild(X("span", null, "0"));
								const e = { played: "played", buffer: "buffered" }[t],
									n = e ? Dt.get(e, this.config) : "";
								i.innerText = `% ${n.toLowerCase()}`;
							}
							return (this.elements.display[t] = i), i;
						},
						createTime(t, e) {
							const i = et(this.config.selectors.display[t], e),
								n = X(
									"div",
									Y(i, {
										class: `${i.class ? i.class : ""} ${
											this.config.classNames.display.time
										} `.trim(),
										"aria-label": Dt.get(t, this.config),
									}),
									"00:00"
								);
							return (this.elements.display[t] = n), n;
						},
						bindMenuItemShortcuts(t, e) {
							pt.call(
								this,
								t,
								"keydown keyup",
								(i) => {
									if (![32, 38, 39, 40].includes(i.which)) return;
									if (
										(i.preventDefault(),
										i.stopPropagation(),
										"keydown" === i.type)
									)
										return;
									const n = ot(t, '[role="menuitemradio"]');
									if (!n && [32, 39].includes(i.which))
										Bt.showMenuPanel.call(this, e, !0);
									else {
										let e;
										32 !== i.which &&
											(40 === i.which || (n && 39 === i.which)
												? ((e = t.nextElementSibling),
												  H(e) || (e = t.parentNode.firstElementChild))
												: ((e = t.previousElementSibling),
												  H(e) || (e = t.parentNode.lastElementChild)),
											lt.call(this, e, !0));
									}
								},
								!1
							),
								pt.call(this, t, "keyup", (t) => {
									13 === t.which && Bt.focusFirstMenuItem.call(this, null, !0);
								});
						},
						createMenuItem({
							value: t,
							list: e,
							type: i,
							title: n,
							badge: s = null,
							checked: o = !1,
						}) {
							const r = et(this.config.selectors.inputs[i]),
								a = X(
									"button",
									Y(r, {
										type: "button",
										role: "menuitemradio",
										class: `${this.config.classNames.control} ${
											r.class ? r.class : ""
										}`.trim(),
										"aria-checked": o,
										value: t,
									})
								),
								l = X("span");
							(l.innerHTML = n),
								H(s) && l.appendChild(s),
								a.appendChild(l),
								Object.defineProperty(a, "checked", {
									enumerable: !0,
									get: () => "true" === a.getAttribute("aria-checked"),
									set(t) {
										t &&
											Array.from(a.parentNode.children)
												.filter((t) => ot(t, '[role="menuitemradio"]'))
												.forEach((t) =>
													t.setAttribute("aria-checked", "false")
												),
											a.setAttribute("aria-checked", t ? "true" : "false");
									},
								}),
								this.listeners.bind(
									a,
									"click keyup",
									(e) => {
										if (!z(e) || 32 === e.which) {
											switch (
												(e.preventDefault(),
												e.stopPropagation(),
												(a.checked = !0),
												i)
											) {
												case "language":
													this.currentTrack = Number(t);
													break;
												case "quality":
													this.quality = t;
													break;
												case "speed":
													this.speed = parseFloat(t);
											}
											Bt.showMenuPanel.call(this, "home", z(e));
										}
									},
									i,
									!1
								),
								Bt.bindMenuItemShortcuts.call(this, a, i),
								e.appendChild(a);
						},
						formatTime(t = 0, e = !1) {
							return O(t) ? Rt(t, zt(this.duration) > 0, e) : t;
						},
						updateTimeDisplay(t = null, e = 0, i = !1) {
							H(t) && O(e) && (t.innerText = Bt.formatTime(e, i));
						},
						updateVolume() {
							this.supported.ui &&
								(H(this.elements.inputs.volume) &&
									Bt.setRange.call(
										this,
										this.elements.inputs.volume,
										this.muted ? 0 : this.volume
									),
								H(this.elements.buttons.mute) &&
									(this.elements.buttons.mute.pressed =
										this.muted || 0 === this.volume));
						},
						setRange(t, e = 0) {
							H(t) && ((t.value = e), Bt.updateRangeFill.call(this, t));
						},
						updateProgress(t) {
							if (!this.supported.ui || !F(t)) return;
							let e = 0;
							const i = (t, e) => {
								const i = O(e) ? e : 0,
									n = H(t) ? t : this.elements.display.buffer;
								if (H(n)) {
									n.value = i;
									const t = n.getElementsByTagName("span")[0];
									H(t) && (t.childNodes[0].nodeValue = i);
								}
							};
							if (t)
								switch (t.type) {
									case "timeupdate":
									case "seeking":
									case "seeked":
										(n = this.currentTime),
											(s = this.duration),
											(e =
												0 === n || 0 === s || Number.isNaN(n) || Number.isNaN(s)
													? 0
													: ((n / s) * 100).toFixed(2)),
											"timeupdate" === t.type &&
												Bt.setRange.call(this, this.elements.inputs.seek, e);
										break;
									case "playing":
									case "progress":
										i(this.elements.display.buffer, 100 * this.buffered);
								}
							var n, s;
						},
						updateRangeFill(t) {
							const e = F(t) ? t.target : t;
							if (H(e) && "range" === e.getAttribute("type")) {
								if (ot(e, this.config.selectors.inputs.seek)) {
									e.setAttribute("aria-valuenow", this.currentTime);
									const t = Bt.formatTime(this.currentTime),
										i = Bt.formatTime(this.duration),
										n = Dt.get("seekLabel", this.config);
									e.setAttribute(
										"aria-valuetext",
										n.replace("{currentTime}", t).replace("{duration}", i)
									);
								} else if (ot(e, this.config.selectors.inputs.volume)) {
									const t = 100 * e.value;
									e.setAttribute("aria-valuenow", t),
										e.setAttribute("aria-valuetext", `${t.toFixed(1)}%`);
								} else e.setAttribute("aria-valuenow", e.value);
								V.isWebkit &&
									e.style.setProperty("--value", (e.value / e.max) * 100 + "%");
							}
						},
						updateSeekTooltip(t) {
							if (
								!this.config.tooltips.seek ||
								!H(this.elements.inputs.seek) ||
								!H(this.elements.display.seekTooltip) ||
								0 === this.duration
							)
								return;
							const e = `${this.config.classNames.tooltip}--visible`,
								i = (t) => nt(this.elements.display.seekTooltip, e, t);
							if (this.touch) return void i(!1);
							let n = 0;
							const s = this.elements.progress.getBoundingClientRect();
							if (F(t)) n = (100 / s.width) * (t.pageX - s.left);
							else {
								if (!st(this.elements.display.seekTooltip, e)) return;
								n = parseFloat(
									this.elements.display.seekTooltip.style.left,
									10
								);
							}
							n < 0 ? (n = 0) : n > 100 && (n = 100),
								Bt.updateTimeDisplay.call(
									this,
									this.elements.display.seekTooltip,
									(this.duration / 100) * n
								),
								(this.elements.display.seekTooltip.style.left = `${n}%`),
								F(t) &&
									["mouseenter", "mouseleave"].includes(t.type) &&
									i("mouseenter" === t.type);
						},
						timeUpdate(t) {
							const e =
								!H(this.elements.display.duration) && this.config.invertTime;
							Bt.updateTimeDisplay.call(
								this,
								this.elements.display.currentTime,
								e ? this.duration - this.currentTime : this.currentTime,
								e
							),
								(t && "timeupdate" === t.type && this.media.seeking) ||
									Bt.updateProgress.call(this, t);
						},
						durationUpdate() {
							if (
								!this.supported.ui ||
								(!this.config.invertTime && this.currentTime)
							)
								return;
							if (this.duration >= 2 ** 32)
								return (
									it(this.elements.display.currentTime, !0),
									void it(this.elements.progress, !0)
								);
							H(this.elements.inputs.seek) &&
								this.elements.inputs.seek.setAttribute(
									"aria-valuemax",
									this.duration
								);
							const t = H(this.elements.display.duration);
							!t &&
								this.config.displayDuration &&
								this.paused &&
								Bt.updateTimeDisplay.call(
									this,
									this.elements.display.currentTime,
									this.duration
								),
								t &&
									Bt.updateTimeDisplay.call(
										this,
										this.elements.display.duration,
										this.duration
									),
								Bt.updateSeekTooltip.call(this);
						},
						toggleMenuButton(t, e) {
							it(this.elements.settings.buttons[t], !e);
						},
						updateSetting(t, e, i) {
							const n = this.elements.settings.panels[t];
							let s = null,
								o = e;
							if ("captions" === t) s = this.currentTrack;
							else {
								if (
									((s = $(i) ? this[t] : i),
									$(s) && (s = this.config[t].default),
									!$(this.options[t]) && !this.options[t].includes(s))
								)
									return void this.debug.warn(
										`Unsupported value of '${s}' for ${t}`
									);
								if (!this.config[t].options.includes(s))
									return void this.debug.warn(
										`Disabled value of '${s}' for ${t}`
									);
							}
							if ((H(o) || (o = n && n.querySelector('[role="menu"]')), !H(o)))
								return;
							this.elements.settings.buttons[t].querySelector(
								`.${this.config.classNames.menu.value}`
							).innerHTML = Bt.getLabel.call(this, t, s);
							const r = o && o.querySelector(`[value="${s}"]`);
							H(r) && (r.checked = !0);
						},
						getLabel(t, e) {
							switch (t) {
								case "speed":
									return 1 === e
										? Dt.get("normal", this.config)
										: `${e}&times;`;
								case "quality":
									if (O(e)) {
										const t = Dt.get(`qualityLabel.${e}`, this.config);
										return t.length ? t : `${e}p`;
									}
									return Mt(e);
								case "captions":
									return Wt.getLabel.call(this);
								default:
									return null;
							}
						},
						setQualityMenu(t) {
							if (!H(this.elements.settings.panels.quality)) return;
							const e = "quality",
								i =
									this.elements.settings.panels.quality.querySelector(
										'[role="menu"]'
									);
							D(t) &&
								(this.options.quality = wt(t).filter((t) =>
									this.config.quality.options.includes(t)
								));
							const n =
								!$(this.options.quality) && this.options.quality.length > 1;
							if (
								(Bt.toggleMenuButton.call(this, e, n),
								Z(i),
								Bt.checkMenu.call(this),
								!n)
							)
								return;
							const s = (t) => {
								const e = Dt.get(`qualityBadge.${t}`, this.config);
								return e.length ? Bt.createBadge.call(this, e) : null;
							};
							this.options.quality
								.sort((t, e) => {
									const i = this.config.quality.options;
									return i.indexOf(t) > i.indexOf(e) ? 1 : -1;
								})
								.forEach((t) => {
									Bt.createMenuItem.call(this, {
										value: t,
										list: i,
										type: e,
										title: Bt.getLabel.call(this, "quality", t),
										badge: s(t),
									});
								}),
								Bt.updateSetting.call(this, e, i);
						},
						setCaptionsMenu() {
							if (!H(this.elements.settings.panels.captions)) return;
							const t = "captions",
								e =
									this.elements.settings.panels.captions.querySelector(
										'[role="menu"]'
									),
								i = Wt.getTracks.call(this),
								n = Boolean(i.length);
							if (
								(Bt.toggleMenuButton.call(this, t, n),
								Z(e),
								Bt.checkMenu.call(this),
								!n)
							)
								return;
							const s = i.map((t, i) => ({
								value: i,
								checked: this.captions.toggled && this.currentTrack === i,
								title: Wt.getLabel.call(this, t),
								badge:
									t.language &&
									Bt.createBadge.call(this, t.language.toUpperCase()),
								list: e,
								type: "language",
							}));
							s.unshift({
								value: -1,
								checked: !this.captions.toggled,
								title: Dt.get("disabled", this.config),
								list: e,
								type: "language",
							}),
								s.forEach(Bt.createMenuItem.bind(this)),
								Bt.updateSetting.call(this, t, e);
						},
						setSpeedMenu() {
							if (!H(this.elements.settings.panels.speed)) return;
							const t = "speed",
								e =
									this.elements.settings.panels.speed.querySelector(
										'[role="menu"]'
									);
							this.options.speed = this.options.speed.filter(
								(t) => t >= this.minimumSpeed && t <= this.maximumSpeed
							);
							const i = !$(this.options.speed) && this.options.speed.length > 1;
							Bt.toggleMenuButton.call(this, t, i),
								Z(e),
								Bt.checkMenu.call(this),
								i &&
									(this.options.speed.forEach((i) => {
										Bt.createMenuItem.call(this, {
											value: i,
											list: e,
											type: t,
											title: Bt.getLabel.call(this, "speed", i),
										});
									}),
									Bt.updateSetting.call(this, t, e));
						},
						checkMenu() {
							const { buttons: t } = this.elements.settings,
								e = !$(t) && Object.values(t).some((t) => !t.hidden);
							it(this.elements.settings.menu, !e);
						},
						focusFirstMenuItem(t, e = !1) {
							if (this.elements.settings.popup.hidden) return;
							let i = t;
							H(i) ||
								(i = Object.values(this.elements.settings.panels).find(
									(t) => !t.hidden
								));
							const n = i.querySelector('[role^="menuitem"]');
							lt.call(this, n, e);
						},
						toggleMenu(t) {
							const { popup: e } = this.elements.settings,
								i = this.elements.buttons.settings;
							if (!H(e) || !H(i)) return;
							const { hidden: n } = e;
							let s = n;
							if (N(t)) s = t;
							else if (z(t) && 27 === t.which) s = !1;
							else if (F(t)) {
								const n = I(t.composedPath) ? t.composedPath()[0] : t.target,
									o = e.contains(n);
								if (o || (!o && t.target !== i && s)) return;
							}
							i.setAttribute("aria-expanded", s),
								it(e, !s),
								nt(
									this.elements.container,
									this.config.classNames.menu.open,
									s
								),
								s && z(t)
									? Bt.focusFirstMenuItem.call(this, null, !0)
									: s || n || lt.call(this, i, z(t));
						},
						getMenuSize(t) {
							const e = t.cloneNode(!0);
							(e.style.position = "absolute"),
								(e.style.opacity = 0),
								e.removeAttribute("hidden"),
								t.parentNode.appendChild(e);
							const i = e.scrollWidth,
								n = e.scrollHeight;
							return J(e), { width: i, height: n };
						},
						showMenuPanel(t = "", e = !1) {
							const i = this.elements.container.querySelector(
								`#plyr-settings-${this.id}-${t}`
							);
							if (!H(i)) return;
							const n = i.parentNode,
								s = Array.from(n.children).find((t) => !t.hidden);
							if (ut.transitions && !ut.reducedMotion) {
								(n.style.width = `${s.scrollWidth}px`),
									(n.style.height = `${s.scrollHeight}px`);
								const t = Bt.getMenuSize.call(this, i),
									e = (t) => {
										t.target === n &&
											["width", "height"].includes(t.propertyName) &&
											((n.style.width = ""),
											(n.style.height = ""),
											ft.call(this, n, q, e));
									};
								pt.call(this, n, q, e),
									(n.style.width = `${t.width}px`),
									(n.style.height = `${t.height}px`);
							}
							it(s, !0), it(i, !1), Bt.focusFirstMenuItem.call(this, i, e);
						},
						setDownloadUrl() {
							const t = this.elements.buttons.download;
							H(t) && t.setAttribute("href", this.download);
						},
						create(t) {
							const {
								bindMenuItemShortcuts: e,
								createButton: i,
								createProgress: n,
								createRange: s,
								createTime: o,
								setQualityMenu: r,
								setSpeedMenu: a,
								showMenuPanel: l,
							} = Bt;
							(this.elements.controls = null),
								D(this.config.controls) &&
									this.config.controls.includes("play-large") &&
									this.elements.container.appendChild(
										i.call(this, "play-large")
									);
							const c = X("div", et(this.config.selectors.controls.wrapper));
							this.elements.controls = c;
							const u = { class: "plyr__controls__item" };
							return (
								wt(D(this.config.controls) ? this.config.controls : []).forEach(
									(r) => {
										if (
											("restart" === r &&
												c.appendChild(i.call(this, "restart", u)),
											"rewind" === r &&
												c.appendChild(i.call(this, "rewind", u)),
											"play" === r && c.appendChild(i.call(this, "play", u)),
											"fast-forward" === r &&
												c.appendChild(i.call(this, "fast-forward", u)),
											"progress" === r)
										) {
											const e = X("div", {
													class: `${u.class} plyr__progress__container`,
												}),
												i = X("div", et(this.config.selectors.progress));
											if (
												(i.appendChild(
													s.call(this, "seek", { id: `plyr-seek-${t.id}` })
												),
												i.appendChild(n.call(this, "buffer")),
												this.config.tooltips.seek)
											) {
												const t = X(
													"span",
													{ class: this.config.classNames.tooltip },
													"00:00"
												);
												i.appendChild(t),
													(this.elements.display.seekTooltip = t);
											}
											(this.elements.progress = i),
												e.appendChild(this.elements.progress),
												c.appendChild(e);
										}
										if (
											("current-time" === r &&
												c.appendChild(o.call(this, "currentTime", u)),
											"duration" === r &&
												c.appendChild(o.call(this, "duration", u)),
											"mute" === r || "volume" === r)
										) {
											let { volume: e } = this.elements;
											if (
												((H(e) && c.contains(e)) ||
													((e = X(
														"div",
														Y({}, u, {
															class: `${u.class} plyr__volume`.trim(),
														})
													)),
													(this.elements.volume = e),
													c.appendChild(e)),
												"mute" === r && e.appendChild(i.call(this, "mute")),
												"volume" === r && !V.isIos)
											) {
												const i = {
													max: 1,
													step: 0.05,
													value: this.config.volume,
												};
												e.appendChild(
													s.call(
														this,
														"volume",
														Y(i, { id: `plyr-volume-${t.id}` })
													)
												);
											}
										}
										if (
											("captions" === r &&
												c.appendChild(i.call(this, "captions", u)),
											"settings" === r && !$(this.config.settings))
										) {
											const n = X(
												"div",
												Y({}, u, {
													class: `${u.class} plyr__menu`.trim(),
													hidden: "",
												})
											);
											n.appendChild(
												i.call(this, "settings", {
													"aria-haspopup": !0,
													"aria-controls": `plyr-settings-${t.id}`,
													"aria-expanded": !1,
												})
											);
											const s = X("div", {
													class: "plyr__menu__container",
													id: `plyr-settings-${t.id}`,
													hidden: "",
												}),
												o = X("div"),
												r = X("div", { id: `plyr-settings-${t.id}-home` }),
												a = X("div", { role: "menu" });
											r.appendChild(a),
												o.appendChild(r),
												(this.elements.settings.panels.home = r),
												this.config.settings.forEach((i) => {
													const n = X(
														"button",
														Y(et(this.config.selectors.buttons.settings), {
															type: "button",
															class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
															role: "menuitem",
															"aria-haspopup": !0,
															hidden: "",
														})
													);
													e.call(this, n, i),
														pt.call(this, n, "click", () => {
															l.call(this, i, !1);
														});
													const s = X("span", null, Dt.get(i, this.config)),
														r = X("span", {
															class: this.config.classNames.menu.value,
														});
													(r.innerHTML = t[i]),
														s.appendChild(r),
														n.appendChild(s),
														a.appendChild(n);
													const c = X("div", {
															id: `plyr-settings-${t.id}-${i}`,
															hidden: "",
														}),
														u = X("button", {
															type: "button",
															class: `${this.config.classNames.control} ${this.config.classNames.control}--back`,
														});
													u.appendChild(
														X(
															"span",
															{ "aria-hidden": !0 },
															Dt.get(i, this.config)
														)
													),
														u.appendChild(
															X(
																"span",
																{ class: this.config.classNames.hidden },
																Dt.get("menuBack", this.config)
															)
														),
														pt.call(
															this,
															c,
															"keydown",
															(t) => {
																37 === t.which &&
																	(t.preventDefault(),
																	t.stopPropagation(),
																	l.call(this, "home", !0));
															},
															!1
														),
														pt.call(this, u, "click", () => {
															l.call(this, "home", !1);
														}),
														c.appendChild(u),
														c.appendChild(X("div", { role: "menu" })),
														o.appendChild(c),
														(this.elements.settings.buttons[i] = n),
														(this.elements.settings.panels[i] = c);
												}),
												s.appendChild(o),
												n.appendChild(s),
												c.appendChild(n),
												(this.elements.settings.popup = s),
												(this.elements.settings.menu = n);
										}
										if (
											("pip" === r &&
												ut.pip &&
												c.appendChild(i.call(this, "pip", u)),
											"airplay" === r &&
												ut.airplay &&
												c.appendChild(i.call(this, "airplay", u)),
											"download" === r)
										) {
											const t = Y({}, u, {
												element: "a",
												href: this.download,
												target: "_blank",
											});
											this.isHTML5 && (t.download = "");
											const { download: e } = this.config.urls;
											!B(e) &&
												this.isEmbed &&
												Y(t, {
													icon: `logo-${this.provider}`,
													label: this.provider,
												}),
												c.appendChild(i.call(this, "download", t));
										}
										"fullscreen" === r &&
											c.appendChild(i.call(this, "fullscreen", u));
									}
								),
								this.isHTML5 && r.call(this, Lt.getQualityOptions.call(this)),
								a.call(this),
								c
							);
						},
						inject() {
							if (this.config.loadSprite) {
								const t = Bt.getIconUrl.call(this);
								t.cors && Ft(t.url, "sprite-plyr");
							}
							this.id = Math.floor(1e4 * Math.random());
							let t = null;
							this.elements.controls = null;
							const e = {
								id: this.id,
								seektime: this.config.seekTime,
								title: this.config.title,
							};
							let i,
								n = !0;
							if (
								(I(this.config.controls) &&
									(this.config.controls = this.config.controls.call(this, e)),
								this.config.controls || (this.config.controls = []),
								H(this.config.controls) || M(this.config.controls)
									? (t = this.config.controls)
									: ((t = Bt.create.call(this, {
											id: this.id,
											seektime: this.config.seekTime,
											speed: this.speed,
											quality: this.quality,
											captions: Wt.getLabel.call(this),
									  })),
									  (n = !1)),
								n &&
									M(this.config.controls) &&
									(t = ((t) => {
										let i = t;
										return (
											Object.entries(e).forEach(([t, e]) => {
												i = Ot(i, `{${t}}`, e);
											}),
											i
										);
									})(t)),
								M(this.config.selectors.controls.container) &&
									(i = document.querySelector(
										this.config.selectors.controls.container
									)),
								H(i) || (i = this.elements.container),
								i[H(t) ? "insertAdjacentElement" : "insertAdjacentHTML"](
									"afterbegin",
									t
								),
								H(this.elements.controls) || Bt.findElements.call(this),
								!$(this.elements.buttons))
							) {
								const t = (t) => {
									const e = this.config.classNames.controlPressed;
									Object.defineProperty(t, "pressed", {
										enumerable: !0,
										get: () => st(t, e),
										set(i = !1) {
											nt(t, e, i);
										},
									});
								};
								Object.values(this.elements.buttons)
									.filter(Boolean)
									.forEach((e) => {
										D(e) || j(e)
											? Array.from(e).filter(Boolean).forEach(t)
											: t(e);
									});
							}
							if ((V.isEdge && W(i), this.config.tooltips.controls)) {
								const { classNames: t, selectors: e } = this.config,
									i = `${e.controls.wrapper} ${e.labels} .${t.hidden}`,
									n = rt.call(this, i);
								Array.from(n).forEach((t) => {
									nt(t, this.config.classNames.hidden, !1),
										nt(t, this.config.classNames.tooltip, !0);
								});
							}
						},
					};
					function $t(t, e = !0) {
						let i = t;
						if (e) {
							const t = document.createElement("a");
							(t.href = i), (i = t.href);
						}
						try {
							return new URL(i);
						} catch (t) {
							return null;
						}
					}
					function qt(t) {
						const e = new URLSearchParams();
						return (
							P(t) &&
								Object.entries(t).forEach(([t, i]) => {
									e.set(t, i);
								}),
							e
						);
					}
					const Wt = {
							setup() {
								if (!this.supported.ui) return;
								if (
									!this.isVideo ||
									this.isYouTube ||
									(this.isHTML5 && !ut.textTracks)
								)
									return void (
										D(this.config.controls) &&
										this.config.controls.includes("settings") &&
										this.config.settings.includes("captions") &&
										Bt.setCaptionsMenu.call(this)
									);
								var t, e;
								if (
									(H(this.elements.captions) ||
										((this.elements.captions = X(
											"div",
											et(this.config.selectors.captions)
										)),
										(t = this.elements.captions),
										(e = this.elements.wrapper),
										H(t) &&
											H(e) &&
											e.parentNode.insertBefore(t, e.nextSibling)),
									V.isIE && window.URL)
								) {
									const t = this.media.querySelectorAll("track");
									Array.from(t).forEach((t) => {
										const e = t.getAttribute("src"),
											i = $t(e);
										null !== i &&
											i.hostname !== window.location.href.hostname &&
											["http:", "https:"].includes(i.protocol) &&
											Ht(e, "blob")
												.then((e) => {
													t.setAttribute("src", window.URL.createObjectURL(e));
												})
												.catch(() => {
													J(t);
												});
									});
								}
								const i = wt(
									(
										navigator.languages || [
											navigator.language || navigator.userLanguage || "en",
										]
									).map((t) => t.split("-")[0])
								);
								let n = (
									this.storage.get("language") ||
									this.config.captions.language ||
									"auto"
								).toLowerCase();
								"auto" === n && ([n] = i);
								let s = this.storage.get("captions");
								if (
									(N(s) || ({ active: s } = this.config.captions),
									Object.assign(this.captions, {
										toggled: !1,
										active: s,
										language: n,
										languages: i,
									}),
									this.isHTML5)
								) {
									const t = this.config.captions.update
										? "addtrack removetrack"
										: "removetrack";
									pt.call(this, this.media.textTracks, t, Wt.update.bind(this));
								}
								setTimeout(Wt.update.bind(this), 0);
							},
							update() {
								const t = Wt.getTracks.call(this, !0),
									{
										active: e,
										language: i,
										meta: n,
										currentTrackNode: s,
									} = this.captions,
									o = Boolean(t.find((t) => t.language === i));
								this.isHTML5 &&
									this.isVideo &&
									t
										.filter((t) => !n.get(t))
										.forEach((t) => {
											this.debug.log("Track added", t),
												n.set(t, { default: "showing" === t.mode }),
												"showing" === t.mode && (t.mode = "hidden"),
												pt.call(this, t, "cuechange", () =>
													Wt.updateCues.call(this)
												);
										}),
									((o && this.language !== i) || !t.includes(s)) &&
										(Wt.setLanguage.call(this, i),
										Wt.toggle.call(this, e && o)),
									nt(
										this.elements.container,
										this.config.classNames.captions.enabled,
										!$(t)
									),
									D(this.config.controls) &&
										this.config.controls.includes("settings") &&
										this.config.settings.includes("captions") &&
										Bt.setCaptionsMenu.call(this);
							},
							toggle(t, e = !0) {
								if (!this.supported.ui) return;
								const { toggled: i } = this.captions,
									n = this.config.classNames.captions.active,
									s = L(t) ? !i : t;
								if (s !== i) {
									if (
										(e ||
											((this.captions.active = s),
											this.storage.set({ captions: s })),
										!this.language && s && !e)
									) {
										const t = Wt.getTracks.call(this),
											e = Wt.findTrack.call(
												this,
												[this.captions.language, ...this.captions.languages],
												!0
											);
										return (
											(this.captions.language = e.language),
											void Wt.set.call(this, t.indexOf(e))
										);
									}
									this.elements.buttons.captions &&
										(this.elements.buttons.captions.pressed = s),
										nt(this.elements.container, n, s),
										(this.captions.toggled = s),
										Bt.updateSetting.call(this, "captions"),
										gt.call(
											this,
											this.media,
											s ? "captionsenabled" : "captionsdisabled"
										);
								}
								setTimeout(() => {
									s &&
										this.captions.toggled &&
										(this.captions.currentTrackNode.mode = "hidden");
								});
							},
							set(t, e = !0) {
								const i = Wt.getTracks.call(this);
								if (-1 !== t)
									if (O(t))
										if (t in i) {
											if (this.captions.currentTrack !== t) {
												this.captions.currentTrack = t;
												const n = i[t],
													{ language: s } = n || {};
												(this.captions.currentTrackNode = n),
													Bt.updateSetting.call(this, "captions"),
													e ||
														((this.captions.language = s),
														this.storage.set({ language: s })),
													this.isVimeo && this.embed.enableTextTrack(s),
													gt.call(this, this.media, "languagechange");
											}
											Wt.toggle.call(this, !0, e),
												this.isHTML5 &&
													this.isVideo &&
													Wt.updateCues.call(this);
										} else this.debug.warn("Track not found", t);
									else this.debug.warn("Invalid caption argument", t);
								else Wt.toggle.call(this, !1, e);
							},
							setLanguage(t, e = !0) {
								if (!M(t))
									return void this.debug.warn("Invalid language argument", t);
								const i = t.toLowerCase();
								this.captions.language = i;
								const n = Wt.getTracks.call(this),
									s = Wt.findTrack.call(this, [i]);
								Wt.set.call(this, n.indexOf(s), e);
							},
							getTracks(t = !1) {
								return Array.from((this.media || {}).textTracks || [])
									.filter(
										(e) => !this.isHTML5 || t || this.captions.meta.has(e)
									)
									.filter((t) => ["captions", "subtitles"].includes(t.kind));
							},
							findTrack(t, e = !1) {
								const i = Wt.getTracks.call(this),
									n = (t) => Number((this.captions.meta.get(t) || {}).default),
									s = Array.from(i).sort((t, e) => n(e) - n(t));
								let o;
								return (
									t.every((t) => ((o = s.find((e) => e.language === t)), !o)),
									o || (e ? s[0] : void 0)
								);
							},
							getCurrentTrack() {
								return Wt.getTracks.call(this)[this.currentTrack];
							},
							getLabel(t) {
								let e = t;
								return (
									!R(e) &&
										ut.textTracks &&
										this.captions.toggled &&
										(e = Wt.getCurrentTrack.call(this)),
									R(e)
										? $(e.label)
											? $(e.language)
												? Dt.get("enabled", this.config)
												: t.language.toUpperCase()
											: e.label
										: Dt.get("disabled", this.config)
								);
							},
							updateCues(t) {
								if (!this.supported.ui) return;
								if (!H(this.elements.captions))
									return void this.debug.warn(
										"No captions element to render to"
									);
								if (!L(t) && !Array.isArray(t))
									return void this.debug.warn("updateCues: Invalid input", t);
								let e = t;
								if (!e) {
									const t = Wt.getCurrentTrack.call(this);
									e = Array.from((t || {}).activeCues || [])
										.map((t) => t.getCueAsHTML())
										.map(Nt);
								}
								const i = e.map((t) => t.trim()).join("\n");
								if (i !== this.elements.captions.innerHTML) {
									Z(this.elements.captions);
									const t = X("span", et(this.config.selectors.caption));
									(t.innerHTML = i),
										this.elements.captions.appendChild(t),
										gt.call(this, this.media, "cuechange");
								}
							},
						},
						Vt = {
							enabled: !0,
							title: "",
							debug: !1,
							autoplay: !1,
							autopause: !0,
							playsinline: !0,
							seekTime: 10,
							volume: 1,
							muted: !1,
							duration: null,
							displayDuration: !0,
							invertTime: !0,
							toggleInvert: !0,
							ratio: null,
							clickToPlay: !0,
							hideControls: !0,
							resetOnEnd: !1,
							disableContextMenu: !0,
							loadSprite: !0,
							iconPrefix: "plyr",
							iconUrl: "https://cdn.plyr.io/3.6.8/plyr.svg",
							blankVideo: "https://cdn.plyr.io/static/blank.mp4",
							quality: {
								default: 576,
								options: [
									4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240,
								],
								forced: !1,
								onChange: null,
							},
							loop: { active: !1 },
							speed: {
								selected: 1,
								options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4],
							},
							keyboard: { focused: !0, global: !1 },
							tooltips: { controls: !1, seek: !0 },
							captions: { active: !1, language: "auto", update: !1 },
							fullscreen: { enabled: !0, fallback: !0, iosNative: !1 },
							storage: { enabled: !0, key: "plyr" },
							controls: [
								"play-large",
								"play",
								"progress",
								"current-time",
								"mute",
								"volume",
								"captions",
								"settings",
								"pip",
								"airplay",
								"fullscreen",
							],
							settings: ["captions", "quality", "speed"],
							i18n: {
								restart: "Restart",
								rewind: "Rewind {seektime}s",
								play: "Play",
								pause: "Pause",
								fastForward: "Forward {seektime}s",
								seek: "Seek",
								seekLabel: "{currentTime} of {duration}",
								played: "Played",
								buffered: "Buffered",
								currentTime: "Current time",
								duration: "Duration",
								volume: "Volume",
								mute: "Mute",
								unmute: "Unmute",
								enableCaptions: "Enable captions",
								disableCaptions: "Disable captions",
								download: "Download",
								enterFullscreen: "Enter fullscreen",
								exitFullscreen: "Exit fullscreen",
								frameTitle: "Player for {title}",
								captions: "Captions",
								settings: "Settings",
								pip: "PIP",
								menuBack: "Go back to previous menu",
								speed: "Speed",
								normal: "Normal",
								quality: "Quality",
								loop: "Loop",
								start: "Start",
								end: "End",
								all: "All",
								reset: "Reset",
								disabled: "Disabled",
								enabled: "Enabled",
								advertisement: "Ad",
								qualityBadge: {
									2160: "4K",
									1440: "HD",
									1080: "HD",
									720: "HD",
									576: "SD",
									480: "SD",
								},
							},
							urls: {
								download: null,
								vimeo: {
									sdk: "https://player.vimeo.com/api/player.js",
									iframe: "https://player.vimeo.com/video/{0}?{1}",
									api: "https://vimeo.com/api/oembed.json?url={0}",
								},
								youtube: {
									sdk: "https://www.youtube.com/iframe_api",
									api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}",
								},
								googleIMA: {
									sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js",
								},
							},
							listeners: {
								seek: null,
								play: null,
								pause: null,
								restart: null,
								rewind: null,
								fastForward: null,
								mute: null,
								volume: null,
								captions: null,
								download: null,
								fullscreen: null,
								pip: null,
								airplay: null,
								speed: null,
								quality: null,
								loop: null,
								language: null,
							},
							events: [
								"ended",
								"progress",
								"stalled",
								"playing",
								"waiting",
								"canplay",
								"canplaythrough",
								"loadstart",
								"loadeddata",
								"loadedmetadata",
								"timeupdate",
								"volumechange",
								"play",
								"pause",
								"error",
								"seeking",
								"seeked",
								"emptied",
								"ratechange",
								"cuechange",
								"download",
								"enterfullscreen",
								"exitfullscreen",
								"captionsenabled",
								"captionsdisabled",
								"languagechange",
								"controlshidden",
								"controlsshown",
								"ready",
								"statechange",
								"qualitychange",
								"adsloaded",
								"adscontentpause",
								"adscontentresume",
								"adstarted",
								"adsmidpoint",
								"adscomplete",
								"adsallcomplete",
								"adsimpression",
								"adsclick",
							],
							selectors: {
								editable: "input, textarea, select, [contenteditable]",
								container: ".plyr",
								controls: { container: null, wrapper: ".plyr__controls" },
								labels: "[data-plyr]",
								buttons: {
									play: '[data-plyr="play"]',
									pause: '[data-plyr="pause"]',
									restart: '[data-plyr="restart"]',
									rewind: '[data-plyr="rewind"]',
									fastForward: '[data-plyr="fast-forward"]',
									mute: '[data-plyr="mute"]',
									captions: '[data-plyr="captions"]',
									download: '[data-plyr="download"]',
									fullscreen: '[data-plyr="fullscreen"]',
									pip: '[data-plyr="pip"]',
									airplay: '[data-plyr="airplay"]',
									settings: '[data-plyr="settings"]',
									loop: '[data-plyr="loop"]',
								},
								inputs: {
									seek: '[data-plyr="seek"]',
									volume: '[data-plyr="volume"]',
									speed: '[data-plyr="speed"]',
									language: '[data-plyr="language"]',
									quality: '[data-plyr="quality"]',
								},
								display: {
									currentTime: ".plyr__time--current",
									duration: ".plyr__time--duration",
									buffer: ".plyr__progress__buffer",
									loop: ".plyr__progress__loop",
									volume: ".plyr__volume--display",
								},
								progress: ".plyr__progress",
								captions: ".plyr__captions",
								caption: ".plyr__caption",
							},
							classNames: {
								type: "plyr--{0}",
								provider: "plyr--{0}",
								video: "plyr__video-wrapper",
								embed: "plyr__video-embed",
								videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
								embedContainer: "plyr__video-embed__container",
								poster: "plyr__poster",
								posterEnabled: "plyr__poster-enabled",
								ads: "plyr__ads",
								control: "plyr__control",
								controlPressed: "plyr__control--pressed",
								playing: "plyr--playing",
								paused: "plyr--paused",
								stopped: "plyr--stopped",
								loading: "plyr--loading",
								hover: "plyr--hover",
								tooltip: "plyr__tooltip",
								cues: "plyr__cues",
								hidden: "plyr__sr-only",
								hideControls: "plyr--hide-controls",
								isIos: "plyr--is-ios",
								isTouch: "plyr--is-touch",
								uiSupported: "plyr--full-ui",
								noTransition: "plyr--no-transition",
								display: { time: "plyr__time" },
								menu: {
									value: "plyr__menu__value",
									badge: "plyr__badge",
									open: "plyr--menu-open",
								},
								captions: {
									enabled: "plyr--captions-enabled",
									active: "plyr--captions-active",
								},
								fullscreen: {
									enabled: "plyr--fullscreen-enabled",
									fallback: "plyr--fullscreen-fallback",
								},
								pip: {
									supported: "plyr--pip-supported",
									active: "plyr--pip-active",
								},
								airplay: {
									supported: "plyr--airplay-supported",
									active: "plyr--airplay-active",
								},
								tabFocus: "plyr__tab-focus",
								previewThumbnails: {
									thumbContainer: "plyr__preview-thumb",
									thumbContainerShown: "plyr__preview-thumb--is-shown",
									imageContainer: "plyr__preview-thumb__image-container",
									timeContainer: "plyr__preview-thumb__time-container",
									scrubbingContainer: "plyr__preview-scrubbing",
									scrubbingContainerShown: "plyr__preview-scrubbing--is-shown",
								},
							},
							attributes: {
								embed: {
									provider: "data-plyr-provider",
									id: "data-plyr-embed-id",
								},
							},
							ads: { enabled: !1, publisherId: "", tagUrl: "" },
							previewThumbnails: { enabled: !1, src: "" },
							vimeo: {
								byline: !1,
								portrait: !1,
								title: !1,
								speed: !0,
								transparent: !1,
								customControls: !0,
								referrerPolicy: null,
								premium: !1,
							},
							youtube: {
								rel: 0,
								showinfo: 0,
								iv_load_policy: 3,
								modestbranding: 1,
								customControls: !0,
								noCookie: !1,
							},
						},
						Ut = "picture-in-picture",
						Yt = { html5: "html5", youtube: "youtube", vimeo: "vimeo" },
						Qt = "video",
						Kt = () => {};
					class Xt {
						constructor(t = !1) {
							(this.enabled = window.console && t),
								this.enabled && this.log("Debugging enabled");
						}
						get log() {
							return this.enabled
								? Function.prototype.bind.call(console.log, console)
								: Kt;
						}
						get warn() {
							return this.enabled
								? Function.prototype.bind.call(console.warn, console)
								: Kt;
						}
						get error() {
							return this.enabled
								? Function.prototype.bind.call(console.error, console)
								: Kt;
						}
					}
					class Gt {
						constructor(e) {
							t(this, "onChange", () => {
								if (!this.enabled) return;
								const t = this.player.elements.buttons.fullscreen;
								H(t) && (t.pressed = this.active);
								const e =
									this.target === this.player.media
										? this.target
										: this.player.elements.container;
								gt.call(
									this.player,
									e,
									this.active ? "enterfullscreen" : "exitfullscreen",
									!0
								);
							}),
								t(this, "toggleFallback", (t = !1) => {
									if (
										(t
											? (this.scrollPosition = {
													x: window.scrollX || 0,
													y: window.scrollY || 0,
											  })
											: window.scrollTo(
													this.scrollPosition.x,
													this.scrollPosition.y
											  ),
										(document.body.style.overflow = t ? "hidden" : ""),
										nt(
											this.target,
											this.player.config.classNames.fullscreen.fallback,
											t
										),
										V.isIos)
									) {
										let e = document.head.querySelector(
											'meta[name="viewport"]'
										);
										const i = "viewport-fit=cover";
										e ||
											((e = document.createElement("meta")),
											e.setAttribute("name", "viewport"));
										const n = M(e.content) && e.content.includes(i);
										t
											? ((this.cleanupViewport = !n),
											  n || (e.content += `,${i}`))
											: this.cleanupViewport &&
											  (e.content = e.content
													.split(",")
													.filter((t) => t.trim() !== i)
													.join(","));
									}
									this.onChange();
								}),
								t(this, "trapFocus", (t) => {
									if (
										V.isIos ||
										!this.active ||
										"Tab" !== t.key ||
										9 !== t.keyCode
									)
										return;
									const e = document.activeElement,
										i = rt.call(
											this.player,
											"a[href], button:not(:disabled), input:not(:disabled), [tabindex]"
										),
										[n] = i,
										s = i[i.length - 1];
									e !== s || t.shiftKey
										? e === n && t.shiftKey && (s.focus(), t.preventDefault())
										: (n.focus(), t.preventDefault());
								}),
								t(this, "update", () => {
									if (this.enabled) {
										let t;
										(t = this.forceFallback
											? "Fallback (forced)"
											: Gt.native
											? "Native"
											: "Fallback"),
											this.player.debug.log(`${t} fullscreen enabled`);
									} else
										this.player.debug.log(
											"Fullscreen not supported and fallback disabled"
										);
									nt(
										this.player.elements.container,
										this.player.config.classNames.fullscreen.enabled,
										this.enabled
									);
								}),
								t(this, "enter", () => {
									this.enabled &&
										(V.isIos && this.player.config.fullscreen.iosNative
											? this.player.isVimeo
												? this.player.embed.requestFullscreen()
												: this.target.webkitEnterFullscreen()
											: !Gt.native || this.forceFallback
											? this.toggleFallback(!0)
											: this.prefix
											? $(this.prefix) ||
											  this.target[`${this.prefix}Request${this.property}`]()
											: this.target.requestFullscreen({
													navigationUI: "hide",
											  }));
								}),
								t(this, "exit", () => {
									if (this.enabled)
										if (V.isIos && this.player.config.fullscreen.iosNative)
											this.target.webkitExitFullscreen(),
												bt(this.player.play());
										else if (!Gt.native || this.forceFallback)
											this.toggleFallback(!1);
										else if (this.prefix) {
											if (!$(this.prefix)) {
												const t = "moz" === this.prefix ? "Cancel" : "Exit";
												document[`${this.prefix}${t}${this.property}`]();
											}
										} else
											(
												document.cancelFullScreen || document.exitFullscreen
											).call(document);
								}),
								t(this, "toggle", () => {
									this.active ? this.exit() : this.enter();
								}),
								(this.player = e),
								(this.prefix = Gt.prefix),
								(this.property = Gt.property),
								(this.scrollPosition = { x: 0, y: 0 }),
								(this.forceFallback = "force" === e.config.fullscreen.fallback),
								(this.player.elements.fullscreen =
									e.config.fullscreen.container &&
									(function (t, e) {
										const { prototype: i } = Element;
										return (
											i.closest ||
											function () {
												let t = this;
												do {
													if (ot.matches(t, e)) return t;
													t = t.parentElement || t.parentNode;
												} while (null !== t && 1 === t.nodeType);
												return null;
											}
										).call(t, e);
									})(
										this.player.elements.container,
										e.config.fullscreen.container
									)),
								pt.call(
									this.player,
									document,
									"ms" === this.prefix
										? "MSFullscreenChange"
										: `${this.prefix}fullscreenchange`,
									() => {
										this.onChange();
									}
								),
								pt.call(
									this.player,
									this.player.elements.container,
									"dblclick",
									(t) => {
										(H(this.player.elements.controls) &&
											this.player.elements.controls.contains(t.target)) ||
											this.player.listeners.proxy(t, this.toggle, "fullscreen");
									}
								),
								pt.call(this, this.player.elements.container, "keydown", (t) =>
									this.trapFocus(t)
								),
								this.update();
						}
						static get native() {
							return !!(
								document.fullscreenEnabled ||
								document.webkitFullscreenEnabled ||
								document.mozFullScreenEnabled ||
								document.msFullscreenEnabled
							);
						}
						get usingNative() {
							return Gt.native && !this.forceFallback;
						}
						static get prefix() {
							if (I(document.exitFullscreen)) return "";
							let t = "";
							return (
								["webkit", "moz", "ms"].some(
									(e) =>
										!(
											(!I(document[`${e}ExitFullscreen`]) &&
												!I(document[`${e}CancelFullScreen`])) ||
											((t = e), 0)
										)
								),
								t
							);
						}
						static get property() {
							return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
						}
						get enabled() {
							return (
								(Gt.native || this.player.config.fullscreen.fallback) &&
								this.player.config.fullscreen.enabled &&
								this.player.supported.ui &&
								this.player.isVideo
							);
						}
						get active() {
							if (!this.enabled) return !1;
							if (!Gt.native || this.forceFallback)
								return st(
									this.target,
									this.player.config.classNames.fullscreen.fallback
								);
							const t = this.prefix
								? document[`${this.prefix}${this.property}Element`]
								: document.fullscreenElement;
							return t && t.shadowRoot
								? t === this.target.getRootNode().host
								: t === this.target;
						}
						get target() {
							return V.isIos && this.player.config.fullscreen.iosNative
								? this.player.media
								: this.player.elements.fullscreen ||
										this.player.elements.container;
						}
					}
					function Jt(t, e = 1) {
						return new Promise((i, n) => {
							const s = new Image(),
								o = () => {
									delete s.onload,
										delete s.onerror,
										(s.naturalWidth >= e ? i : n)(s);
								};
							Object.assign(s, { onload: o, onerror: o, src: t });
						});
					}
					const Zt = {
						addStyleHook() {
							nt(
								this.elements.container,
								this.config.selectors.container.replace(".", ""),
								!0
							),
								nt(
									this.elements.container,
									this.config.classNames.uiSupported,
									this.supported.ui
								);
						},
						toggleNativeControls(t = !1) {
							t && this.isHTML5
								? this.media.setAttribute("controls", "")
								: this.media.removeAttribute("controls");
						},
						build() {
							if ((this.listeners.media(), !this.supported.ui))
								return (
									this.debug.warn(
										`Basic support only for ${this.provider} ${this.type}`
									),
									void Zt.toggleNativeControls.call(this, !0)
								);
							H(this.elements.controls) ||
								(Bt.inject.call(this), this.listeners.controls()),
								Zt.toggleNativeControls.call(this),
								this.isHTML5 && Wt.setup.call(this),
								(this.volume = null),
								(this.muted = null),
								(this.loop = null),
								(this.quality = null),
								(this.speed = null),
								Bt.updateVolume.call(this),
								Bt.timeUpdate.call(this),
								Zt.checkPlaying.call(this),
								nt(
									this.elements.container,
									this.config.classNames.pip.supported,
									ut.pip && this.isHTML5 && this.isVideo
								),
								nt(
									this.elements.container,
									this.config.classNames.airplay.supported,
									ut.airplay && this.isHTML5
								),
								nt(
									this.elements.container,
									this.config.classNames.isIos,
									V.isIos
								),
								nt(
									this.elements.container,
									this.config.classNames.isTouch,
									this.touch
								),
								(this.ready = !0),
								setTimeout(() => {
									gt.call(this, this.media, "ready");
								}, 0),
								Zt.setTitle.call(this),
								this.poster &&
									Zt.setPoster.call(this, this.poster, !1).catch(() => {}),
								this.config.duration && Bt.durationUpdate.call(this);
						},
						setTitle() {
							let t = Dt.get("play", this.config);
							if (
								(M(this.config.title) &&
									!$(this.config.title) &&
									(t += `, ${this.config.title}`),
								Array.from(this.elements.buttons.play || []).forEach((e) => {
									e.setAttribute("aria-label", t);
								}),
								this.isEmbed)
							) {
								const t = at.call(this, "iframe");
								if (!H(t)) return;
								const e = $(this.config.title) ? "video" : this.config.title,
									i = Dt.get("frameTitle", this.config);
								t.setAttribute("title", i.replace("{title}", e));
							}
						},
						togglePoster(t) {
							nt(
								this.elements.container,
								this.config.classNames.posterEnabled,
								t
							);
						},
						setPoster(t, e = !0) {
							return e && this.poster
								? Promise.reject(new Error("Poster already set"))
								: (this.media.setAttribute("data-poster", t),
								  this.elements.poster.removeAttribute("hidden"),
								  vt
										.call(this)
										.then(() => Jt(t))
										.catch((e) => {
											throw (
												(t === this.poster && Zt.togglePoster.call(this, !1), e)
											);
										})
										.then(() => {
											if (t !== this.poster)
												throw new Error(
													"setPoster cancelled by later call to setPoster"
												);
										})
										.then(
											() => (
												Object.assign(this.elements.poster.style, {
													backgroundImage: `url('${t}')`,
													backgroundSize: "",
												}),
												Zt.togglePoster.call(this, !0),
												t
											)
										));
						},
						checkPlaying(t) {
							nt(
								this.elements.container,
								this.config.classNames.playing,
								this.playing
							),
								nt(
									this.elements.container,
									this.config.classNames.paused,
									this.paused
								),
								nt(
									this.elements.container,
									this.config.classNames.stopped,
									this.stopped
								),
								Array.from(this.elements.buttons.play || []).forEach((t) => {
									Object.assign(t, { pressed: this.playing }),
										t.setAttribute(
											"aria-label",
											Dt.get(this.playing ? "pause" : "play", this.config)
										);
								}),
								(F(t) && "timeupdate" === t.type) ||
									Zt.toggleControls.call(this);
						},
						checkLoading(t) {
							(this.loading = ["stalled", "waiting"].includes(t.type)),
								clearTimeout(this.timers.loading),
								(this.timers.loading = setTimeout(
									() => {
										nt(
											this.elements.container,
											this.config.classNames.loading,
											this.loading
										),
											Zt.toggleControls.call(this);
									},
									this.loading ? 250 : 0
								));
						},
						toggleControls(t) {
							const { controls: e } = this.elements;
							if (e && this.config.hideControls) {
								const i = this.touch && this.lastSeekTime + 2e3 > Date.now();
								this.toggleControls(
									Boolean(
										t ||
											this.loading ||
											this.paused ||
											e.pressed ||
											e.hover ||
											i
									)
								);
							}
						},
						migrateStyles() {
							Object.values({ ...this.media.style })
								.filter((t) => !$(t) && M(t) && t.startsWith("--plyr"))
								.forEach((t) => {
									this.elements.container.style.setProperty(
										t,
										this.media.style.getPropertyValue(t)
									),
										this.media.style.removeProperty(t);
								}),
								$(this.media.style) && this.media.removeAttribute("style");
						},
					};
					class te {
						constructor(e) {
							t(this, "firstTouch", () => {
								const { player: t } = this,
									{ elements: e } = t;
								(t.touch = !0),
									nt(e.container, t.config.classNames.isTouch, !0);
							}),
								t(this, "setTabFocus", (t) => {
									const { player: e } = this,
										{ elements: i } = e;
									if (
										(clearTimeout(this.focusTimer),
										"keydown" === t.type && 9 !== t.which)
									)
										return;
									"keydown" === t.type && (this.lastKeyDown = t.timeStamp);
									const n = t.timeStamp - this.lastKeyDown <= 20;
									("focus" !== t.type || n) &&
										((() => {
											const t = e.config.classNames.tabFocus;
											nt(rt.call(e, `.${t}`), t, !1);
										})(),
										"focusout" !== t.type &&
											(this.focusTimer = setTimeout(() => {
												const t = document.activeElement;
												i.container.contains(t) &&
													nt(
														document.activeElement,
														e.config.classNames.tabFocus,
														!0
													);
											}, 10)));
								}),
								t(this, "global", (t = !0) => {
									const { player: e } = this;
									e.config.keyboard.global &&
										dt.call(e, window, "keydown keyup", this.handleKey, t, !1),
										dt.call(e, document.body, "click", this.toggleMenu, t),
										mt.call(e, document.body, "touchstart", this.firstTouch),
										dt.call(
											e,
											document.body,
											"keydown focus blur focusout",
											this.setTabFocus,
											t,
											!1,
											!0
										);
								}),
								t(this, "container", () => {
									const { player: t } = this,
										{ config: e, elements: i, timers: n } = t;
									!e.keyboard.global &&
										e.keyboard.focused &&
										pt.call(
											t,
											i.container,
											"keydown keyup",
											this.handleKey,
											!1
										),
										pt.call(
											t,
											i.container,
											"mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",
											(e) => {
												const { controls: s } = i;
												s &&
													"enterfullscreen" === e.type &&
													((s.pressed = !1), (s.hover = !1));
												let o = 0;
												["touchstart", "touchmove", "mousemove"].includes(
													e.type
												) &&
													(Zt.toggleControls.call(t, !0),
													(o = t.touch ? 3e3 : 2e3)),
													clearTimeout(n.controls),
													(n.controls = setTimeout(
														() => Zt.toggleControls.call(t, !1),
														o
													));
											}
										);
									const s = () => {
											if (!t.isVimeo || t.config.vimeo.premium) return;
											const e = i.wrapper,
												{ active: n } = t.fullscreen,
												[s, o] = Ct.call(t),
												r = Et(`aspect-ratio: ${s} / ${o}`);
											if (!n)
												return void (r
													? ((e.style.width = null), (e.style.height = null))
													: ((e.style.maxWidth = null),
													  (e.style.margin = null)));
											const [a, l] = [
													Math.max(
														document.documentElement.clientWidth || 0,
														window.innerWidth || 0
													),
													Math.max(
														document.documentElement.clientHeight || 0,
														window.innerHeight || 0
													),
												],
												c = a / l > s / o;
											r
												? ((e.style.width = c ? "auto" : "100%"),
												  (e.style.height = c ? "100%" : "auto"))
												: ((e.style.maxWidth = c ? (l / o) * s + "px" : null),
												  (e.style.margin = c ? "0 auto" : null));
										},
										o = () => {
											clearTimeout(n.resized), (n.resized = setTimeout(s, 50));
										};
									pt.call(
										t,
										i.container,
										"enterfullscreen exitfullscreen",
										(e) => {
											const { target: n } = t.fullscreen;
											n === i.container &&
												((!t.isEmbed && $(t.config.ratio)) ||
													(s(),
													("enterfullscreen" === e.type ? pt : ft).call(
														t,
														window,
														"resize",
														o
													)));
										}
									);
								}),
								t(this, "media", () => {
									const { player: t } = this,
										{ elements: e } = t;
									if (
										(pt.call(t, t.media, "timeupdate seeking seeked", (e) =>
											Bt.timeUpdate.call(t, e)
										),
										pt.call(
											t,
											t.media,
											"durationchange loadeddata loadedmetadata",
											(e) => Bt.durationUpdate.call(t, e)
										),
										pt.call(t, t.media, "ended", () => {
											t.isHTML5 &&
												t.isVideo &&
												t.config.resetOnEnd &&
												(t.restart(), t.pause());
										}),
										pt.call(
											t,
											t.media,
											"progress playing seeking seeked",
											(e) => Bt.updateProgress.call(t, e)
										),
										pt.call(t, t.media, "volumechange", (e) =>
											Bt.updateVolume.call(t, e)
										),
										pt.call(
											t,
											t.media,
											"playing play pause ended emptied timeupdate",
											(e) => Zt.checkPlaying.call(t, e)
										),
										pt.call(t, t.media, "waiting canplay seeked playing", (e) =>
											Zt.checkLoading.call(t, e)
										),
										t.supported.ui && t.config.clickToPlay && !t.isAudio)
									) {
										const i = at.call(t, `.${t.config.classNames.video}`);
										if (!H(i)) return;
										pt.call(t, e.container, "click", (n) => {
											([e.container, i].includes(n.target) ||
												i.contains(n.target)) &&
												((t.touch && t.config.hideControls) ||
													(t.ended
														? (this.proxy(n, t.restart, "restart"),
														  this.proxy(
																n,
																() => {
																	bt(t.play());
																},
																"play"
														  ))
														: this.proxy(
																n,
																() => {
																	bt(t.togglePlay());
																},
																"play"
														  )));
										});
									}
									t.supported.ui &&
										t.config.disableContextMenu &&
										pt.call(
											t,
											e.wrapper,
											"contextmenu",
											(t) => {
												t.preventDefault();
											},
											!1
										),
										pt.call(t, t.media, "volumechange", () => {
											t.storage.set({ volume: t.volume, muted: t.muted });
										}),
										pt.call(t, t.media, "ratechange", () => {
											Bt.updateSetting.call(t, "speed"),
												t.storage.set({ speed: t.speed });
										}),
										pt.call(t, t.media, "qualitychange", (e) => {
											Bt.updateSetting.call(
												t,
												"quality",
												null,
												e.detail.quality
											);
										}),
										pt.call(t, t.media, "ready qualitychange", () => {
											Bt.setDownloadUrl.call(t);
										});
									const i = t.config.events
										.concat(["keyup", "keydown"])
										.join(" ");
									pt.call(t, t.media, i, (i) => {
										let { detail: n = {} } = i;
										"error" === i.type && (n = t.media.error),
											gt.call(t, e.container, i.type, !0, n);
									});
								}),
								t(this, "proxy", (t, e, i) => {
									const { player: n } = this,
										s = n.config.listeners[i];
									let o = !0;
									I(s) && (o = s.call(n, t)), !1 !== o && I(e) && e.call(n, t);
								}),
								t(this, "bind", (t, e, i, n, s = !0) => {
									const { player: o } = this,
										r = o.config.listeners[n],
										a = I(r);
									pt.call(o, t, e, (t) => this.proxy(t, i, n), s && !a);
								}),
								t(this, "controls", () => {
									const { player: t } = this,
										{ elements: e } = t,
										i = V.isIE ? "change" : "input";
									if (
										(e.buttons.play &&
											Array.from(e.buttons.play).forEach((e) => {
												this.bind(
													e,
													"click",
													() => {
														bt(t.togglePlay());
													},
													"play"
												);
											}),
										this.bind(e.buttons.restart, "click", t.restart, "restart"),
										this.bind(
											e.buttons.rewind,
											"click",
											() => {
												(t.lastSeekTime = Date.now()), t.rewind();
											},
											"rewind"
										),
										this.bind(
											e.buttons.fastForward,
											"click",
											() => {
												(t.lastSeekTime = Date.now()), t.forward();
											},
											"fastForward"
										),
										this.bind(
											e.buttons.mute,
											"click",
											() => {
												t.muted = !t.muted;
											},
											"mute"
										),
										this.bind(e.buttons.captions, "click", () =>
											t.toggleCaptions()
										),
										this.bind(
											e.buttons.download,
											"click",
											() => {
												gt.call(t, t.media, "download");
											},
											"download"
										),
										this.bind(
											e.buttons.fullscreen,
											"click",
											() => {
												t.fullscreen.toggle();
											},
											"fullscreen"
										),
										this.bind(
											e.buttons.pip,
											"click",
											() => {
												t.pip = "toggle";
											},
											"pip"
										),
										this.bind(e.buttons.airplay, "click", t.airplay, "airplay"),
										this.bind(
											e.buttons.settings,
											"click",
											(e) => {
												e.stopPropagation(),
													e.preventDefault(),
													Bt.toggleMenu.call(t, e);
											},
											null,
											!1
										),
										this.bind(
											e.buttons.settings,
											"keyup",
											(e) => {
												const i = e.which;
												[13, 32].includes(i) &&
													(13 !== i
														? (e.preventDefault(),
														  e.stopPropagation(),
														  Bt.toggleMenu.call(t, e))
														: Bt.focusFirstMenuItem.call(t, null, !0));
											},
											null,
											!1
										),
										this.bind(e.settings.menu, "keydown", (e) => {
											27 === e.which && Bt.toggleMenu.call(t, e);
										}),
										this.bind(e.inputs.seek, "mousedown mousemove", (t) => {
											const i = e.progress.getBoundingClientRect(),
												n = (100 / i.width) * (t.pageX - i.left);
											t.currentTarget.setAttribute("seek-value", n);
										}),
										this.bind(
											e.inputs.seek,
											"mousedown mouseup keydown keyup touchstart touchend",
											(e) => {
												const i = e.currentTarget,
													n = e.keyCode ? e.keyCode : e.which,
													s = "play-on-seeked";
												if (z(e) && 39 !== n && 37 !== n) return;
												t.lastSeekTime = Date.now();
												const o = i.hasAttribute(s),
													r = ["mouseup", "touchend", "keyup"].includes(e.type);
												o && r
													? (i.removeAttribute(s), bt(t.play()))
													: !r &&
													  t.playing &&
													  (i.setAttribute(s, ""), t.pause());
											}
										),
										V.isIos)
									) {
										const e = rt.call(t, 'input[type="range"]');
										Array.from(e).forEach((t) =>
											this.bind(t, i, (t) => W(t.target))
										);
									}
									this.bind(
										e.inputs.seek,
										i,
										(e) => {
											const i = e.currentTarget;
											let n = i.getAttribute("seek-value");
											$(n) && (n = i.value),
												i.removeAttribute("seek-value"),
												(t.currentTime = (n / i.max) * t.duration);
										},
										"seek"
									),
										this.bind(
											e.progress,
											"mouseenter mouseleave mousemove",
											(e) => Bt.updateSeekTooltip.call(t, e)
										),
										this.bind(e.progress, "mousemove touchmove", (e) => {
											const { previewThumbnails: i } = t;
											i && i.loaded && i.startMove(e);
										}),
										this.bind(e.progress, "mouseleave touchend click", () => {
											const { previewThumbnails: e } = t;
											e && e.loaded && e.endMove(!1, !0);
										}),
										this.bind(e.progress, "mousedown touchstart", (e) => {
											const { previewThumbnails: i } = t;
											i && i.loaded && i.startScrubbing(e);
										}),
										this.bind(e.progress, "mouseup touchend", (e) => {
											const { previewThumbnails: i } = t;
											i && i.loaded && i.endScrubbing(e);
										}),
										V.isWebkit &&
											Array.from(rt.call(t, 'input[type="range"]')).forEach(
												(e) => {
													this.bind(e, "input", (e) =>
														Bt.updateRangeFill.call(t, e.target)
													);
												}
											),
										t.config.toggleInvert &&
											!H(e.display.duration) &&
											this.bind(e.display.currentTime, "click", () => {
												0 !== t.currentTime &&
													((t.config.invertTime = !t.config.invertTime),
													Bt.timeUpdate.call(t));
											}),
										this.bind(
											e.inputs.volume,
											i,
											(e) => {
												t.volume = e.target.value;
											},
											"volume"
										),
										this.bind(e.controls, "mouseenter mouseleave", (i) => {
											e.controls.hover = !t.touch && "mouseenter" === i.type;
										}),
										e.fullscreen &&
											Array.from(e.fullscreen.children)
												.filter((t) => !t.contains(e.container))
												.forEach((i) => {
													this.bind(i, "mouseenter mouseleave", (i) => {
														e.controls.hover =
															!t.touch && "mouseenter" === i.type;
													});
												}),
										this.bind(
											e.controls,
											"mousedown mouseup touchstart touchend touchcancel",
											(t) => {
												e.controls.pressed = [
													"mousedown",
													"touchstart",
												].includes(t.type);
											}
										),
										this.bind(e.controls, "focusin", () => {
											const { config: i, timers: n } = t;
											nt(e.controls, i.classNames.noTransition, !0),
												Zt.toggleControls.call(t, !0),
												setTimeout(() => {
													nt(e.controls, i.classNames.noTransition, !1);
												}, 0);
											const s = this.touch ? 3e3 : 4e3;
											clearTimeout(n.controls),
												(n.controls = setTimeout(
													() => Zt.toggleControls.call(t, !1),
													s
												));
										}),
										this.bind(
											e.inputs.volume,
											"wheel",
											(e) => {
												const i = e.webkitDirectionInvertedFromDevice,
													[n, s] = [e.deltaX, -e.deltaY].map((t) =>
														i ? -t : t
													),
													o = Math.sign(Math.abs(n) > Math.abs(s) ? n : s);
												t.increaseVolume(o / 50);
												const { volume: r } = t.media;
												((1 === o && r < 1) || (-1 === o && r > 0)) &&
													e.preventDefault();
											},
											"volume",
											!1
										);
								}),
								(this.player = e),
								(this.lastKey = null),
								(this.focusTimer = null),
								(this.lastKeyDown = null),
								(this.handleKey = this.handleKey.bind(this)),
								(this.toggleMenu = this.toggleMenu.bind(this)),
								(this.setTabFocus = this.setTabFocus.bind(this)),
								(this.firstTouch = this.firstTouch.bind(this));
						}
						handleKey(t) {
							const { player: e } = this,
								{ elements: i } = e,
								n = t.keyCode ? t.keyCode : t.which,
								s = "keydown" === t.type,
								o = s && n === this.lastKey;
							if (!(t.altKey || t.ctrlKey || t.metaKey || t.shiftKey) && O(n))
								if (s) {
									const s = document.activeElement;
									if (H(s)) {
										const { editable: n } = e.config.selectors,
											{ seek: o } = i.inputs;
										if (s !== o && ot(s, n)) return;
										if (32 === t.which && ot(s, 'button, [role^="menuitem"]'))
											return;
									}
									switch (
										([
											32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57,
											67, 70, 73, 75, 76, 77, 79,
										].includes(n) && (t.preventDefault(), t.stopPropagation()),
										n)
									) {
										case 48:
										case 49:
										case 50:
										case 51:
										case 52:
										case 53:
										case 54:
										case 55:
										case 56:
										case 57:
											o || (e.currentTime = (e.duration / 10) * (n - 48));
											break;
										case 32:
										case 75:
											o || bt(e.togglePlay());
											break;
										case 38:
											e.increaseVolume(0.1);
											break;
										case 40:
											e.decreaseVolume(0.1);
											break;
										case 77:
											o || (e.muted = !e.muted);
											break;
										case 39:
											e.forward();
											break;
										case 37:
											e.rewind();
											break;
										case 70:
											e.fullscreen.toggle();
											break;
										case 67:
											o || e.toggleCaptions();
											break;
										case 76:
											e.loop = !e.loop;
									}
									27 === n &&
										!e.fullscreen.usingNative &&
										e.fullscreen.active &&
										e.fullscreen.toggle(),
										(this.lastKey = n);
								} else this.lastKey = null;
						}
						toggleMenu(t) {
							Bt.toggleMenu.call(this.player, t);
						}
					}
					"undefined" != typeof globalThis
						? globalThis
						: "undefined" != typeof window
						? window
						: void 0 !== i.g
						? i.g
						: "undefined" != typeof self && self;
					var ee = (function (t, e) {
						return (
							(function (t, e) {
								t.exports = (function () {
									var t = function () {},
										e = {},
										i = {},
										n = {};
									function s(t, e) {
										t = t.push ? t : [t];
										var s,
											o,
											r,
											a = [],
											l = t.length,
											c = l;
										for (
											s = function (t, i) {
												i.length && a.push(t), --c || e(a);
											};
											l--;

										)
											(o = t[l]),
												(r = i[o]) ? s(o, r) : (n[o] = n[o] || []).push(s);
									}
									function o(t, e) {
										if (t) {
											var s = n[t];
											if (((i[t] = e), s))
												for (; s.length; ) s[0](t, e), s.splice(0, 1);
										}
									}
									function r(e, i) {
										e.call && (e = { success: e }),
											i.length ? (e.error || t)(i) : (e.success || t)(e);
									}
									function a(e, i, n, s) {
										var o,
											r,
											l = document,
											c = n.async,
											u = (n.numRetries || 0) + 1,
											h = n.before || t,
											d = e.replace(/[\?|#].*$/, ""),
											p = e.replace(/^(css|img)!/, "");
										(s = s || 0),
											/(^css!|\.css$)/.test(d)
												? (((r = l.createElement("link")).rel = "stylesheet"),
												  (r.href = p),
												  (o = "hideFocus" in r) &&
														r.relList &&
														((o = 0), (r.rel = "preload"), (r.as = "style")))
												: /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d)
												? ((r = l.createElement("img")).src = p)
												: (((r = l.createElement("script")).src = e),
												  (r.async = void 0 === c || c)),
											(r.onload =
												r.onerror =
												r.onbeforeload =
													function (t) {
														var l = t.type[0];
														if (o)
															try {
																r.sheet.cssText.length || (l = "e");
															} catch (t) {
																18 != t.code && (l = "e");
															}
														if ("e" == l) {
															if ((s += 1) < u) return a(e, i, n, s);
														} else if ("preload" == r.rel && "style" == r.as)
															return (r.rel = "stylesheet");
														i(e, l, t.defaultPrevented);
													}),
											!1 !== h(e, r) && l.head.appendChild(r);
									}
									function l(t, e, i) {
										var n,
											s,
											o = (t = t.push ? t : [t]).length,
											r = o,
											l = [];
										for (
											n = function (t, i, n) {
												if (("e" == i && l.push(t), "b" == i)) {
													if (!n) return;
													l.push(t);
												}
												--o || e(l);
											},
												s = 0;
											s < r;
											s++
										)
											a(t[s], n, i);
									}
									function c(t, i, n) {
										var s, a;
										if ((i && i.trim && (s = i), (a = (s ? n : i) || {}), s)) {
											if (s in e) throw "LoadJS";
											e[s] = !0;
										}
										function c(e, i) {
											l(
												t,
												function (t) {
													r(a, t), e && r({ success: e, error: i }, t), o(s, t);
												},
												a
											);
										}
										if (a.returnPromise) return new Promise(c);
										c();
									}
									return (
										(c.ready = function (t, e) {
											return (
												s(t, function (t) {
													r(e, t);
												}),
												c
											);
										}),
										(c.done = function (t) {
											o(t, []);
										}),
										(c.reset = function () {
											(e = {}), (i = {}), (n = {});
										}),
										(c.isDefined = function (t) {
											return t in e;
										}),
										c
									);
								})();
							})((e = { exports: {} })),
							e.exports
						);
					})();
					function ie(t) {
						return new Promise((e, i) => {
							ee(t, { success: e, error: i });
						});
					}
					function ne(t) {
						t && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
							this.media.paused === t &&
								((this.media.paused = !t),
								gt.call(this, this.media, t ? "play" : "pause"));
					}
					const se = {
						setup() {
							const t = this;
							nt(t.elements.wrapper, t.config.classNames.embed, !0),
								(t.options.speed = t.config.speed.options),
								St.call(t),
								P(window.Vimeo)
									? se.ready.call(t)
									: ie(t.config.urls.vimeo.sdk)
											.then(() => {
												se.ready.call(t);
											})
											.catch((e) => {
												t.debug.warn("Vimeo SDK (player.js) failed to load", e);
											});
						},
						ready() {
							const t = this,
								e = t.config.vimeo,
								{ premium: i, referrerPolicy: n, ...s } = e;
							i && Object.assign(s, { controls: !1, sidedock: !1 });
							const o = qt({
								loop: t.config.loop.active,
								autoplay: t.autoplay,
								muted: t.muted,
								gesture: "media",
								playsinline: !this.config.fullscreen.iosNative,
								...s,
							});
							let r = t.media.getAttribute("src");
							$(r) && (r = t.media.getAttribute(t.config.attributes.embed.id));
							const a = $((l = r))
								? null
								: O(Number(l))
								? l
								: l.match(/^.*(vimeo.com\/|video\/)(\d+).*/)
								? RegExp.$2
								: l;
							var l;
							const c = X("iframe"),
								u = Pt(t.config.urls.vimeo.iframe, a, o);
							if (
								(c.setAttribute("src", u),
								c.setAttribute("allowfullscreen", ""),
								c.setAttribute(
									"allow",
									[
										"autoplay",
										"fullscreen",
										"picture-in-picture",
										"encrypted-media",
										"accelerometer",
										"gyroscope",
									].join("; ")
								),
								$(n) || c.setAttribute("referrerPolicy", n),
								i || !e.customControls)
							)
								c.setAttribute("data-poster", t.poster),
									(t.media = tt(c, t.media));
							else {
								const e = X("div", {
									class: t.config.classNames.embedContainer,
									"data-poster": t.poster,
								});
								e.appendChild(c), (t.media = tt(e, t.media));
							}
							e.customControls ||
								Ht(Pt(t.config.urls.vimeo.api, u)).then((e) => {
									!$(e) &&
										e.thumbnail_url &&
										Zt.setPoster.call(t, e.thumbnail_url).catch(() => {});
								}),
								(t.embed = new window.Vimeo.Player(c, {
									autopause: t.config.autopause,
									muted: t.muted,
								})),
								(t.media.paused = !0),
								(t.media.currentTime = 0),
								t.supported.ui && t.embed.disableTextTrack(),
								(t.media.play = () => (ne.call(t, !0), t.embed.play())),
								(t.media.pause = () => (ne.call(t, !1), t.embed.pause())),
								(t.media.stop = () => {
									t.pause(), (t.currentTime = 0);
								});
							let { currentTime: h } = t.media;
							Object.defineProperty(t.media, "currentTime", {
								get: () => h,
								set(e) {
									const { embed: i, media: n, paused: s, volume: o } = t,
										r = s && !i.hasPlayed;
									(n.seeking = !0),
										gt.call(t, n, "seeking"),
										Promise.resolve(r && i.setVolume(0))
											.then(() => i.setCurrentTime(e))
											.then(() => r && i.pause())
											.then(() => r && i.setVolume(o))
											.catch(() => {});
								},
							});
							let d = t.config.speed.selected;
							Object.defineProperty(t.media, "playbackRate", {
								get: () => d,
								set(e) {
									t.embed
										.setPlaybackRate(e)
										.then(() => {
											(d = e), gt.call(t, t.media, "ratechange");
										})
										.catch(() => {
											t.options.speed = [1];
										});
								},
							});
							let { volume: p } = t.config;
							Object.defineProperty(t.media, "volume", {
								get: () => p,
								set(e) {
									t.embed.setVolume(e).then(() => {
										(p = e), gt.call(t, t.media, "volumechange");
									});
								},
							});
							let { muted: f } = t.config;
							Object.defineProperty(t.media, "muted", {
								get: () => f,
								set(e) {
									const i = !!N(e) && e;
									t.embed.setVolume(i ? 0 : t.config.volume).then(() => {
										(f = i), gt.call(t, t.media, "volumechange");
									});
								},
							});
							let m,
								{ loop: g } = t.config;
							Object.defineProperty(t.media, "loop", {
								get: () => g,
								set(e) {
									const i = N(e) ? e : t.config.loop.active;
									t.embed.setLoop(i).then(() => {
										g = i;
									});
								},
							}),
								t.embed
									.getVideoUrl()
									.then((e) => {
										(m = e), Bt.setDownloadUrl.call(t);
									})
									.catch((t) => {
										this.debug.warn(t);
									}),
								Object.defineProperty(t.media, "currentSrc", { get: () => m }),
								Object.defineProperty(t.media, "ended", {
									get: () => t.currentTime === t.duration,
								}),
								Promise.all([
									t.embed.getVideoWidth(),
									t.embed.getVideoHeight(),
								]).then((e) => {
									const [i, n] = e;
									(t.embed.ratio = At(i, n)), St.call(this);
								}),
								t.embed.setAutopause(t.config.autopause).then((e) => {
									t.config.autopause = e;
								}),
								t.embed.getVideoTitle().then((e) => {
									(t.config.title = e), Zt.setTitle.call(this);
								}),
								t.embed.getCurrentTime().then((e) => {
									(h = e), gt.call(t, t.media, "timeupdate");
								}),
								t.embed.getDuration().then((e) => {
									(t.media.duration = e), gt.call(t, t.media, "durationchange");
								}),
								t.embed.getTextTracks().then((e) => {
									(t.media.textTracks = e), Wt.setup.call(t);
								}),
								t.embed.on("cuechange", ({ cues: e = [] }) => {
									const i = e.map((t) =>
										(function (t) {
											const e = document.createDocumentFragment(),
												i = document.createElement("div");
											return (
												e.appendChild(i),
												(i.innerHTML = t),
												e.firstChild.innerText
											);
										})(t.text)
									);
									Wt.updateCues.call(t, i);
								}),
								t.embed.on("loaded", () => {
									t.embed.getPaused().then((e) => {
										ne.call(t, !e), e || gt.call(t, t.media, "playing");
									}),
										H(t.embed.element) &&
											t.supported.ui &&
											t.embed.element.setAttribute("tabindex", -1);
								}),
								t.embed.on("bufferstart", () => {
									gt.call(t, t.media, "waiting");
								}),
								t.embed.on("bufferend", () => {
									gt.call(t, t.media, "playing");
								}),
								t.embed.on("play", () => {
									ne.call(t, !0), gt.call(t, t.media, "playing");
								}),
								t.embed.on("pause", () => {
									ne.call(t, !1);
								}),
								t.embed.on("timeupdate", (e) => {
									(t.media.seeking = !1),
										(h = e.seconds),
										gt.call(t, t.media, "timeupdate");
								}),
								t.embed.on("progress", (e) => {
									(t.media.buffered = e.percent),
										gt.call(t, t.media, "progress"),
										1 === parseInt(e.percent, 10) &&
											gt.call(t, t.media, "canplaythrough"),
										t.embed.getDuration().then((e) => {
											e !== t.media.duration &&
												((t.media.duration = e),
												gt.call(t, t.media, "durationchange"));
										});
								}),
								t.embed.on("seeked", () => {
									(t.media.seeking = !1), gt.call(t, t.media, "seeked");
								}),
								t.embed.on("ended", () => {
									(t.media.paused = !0), gt.call(t, t.media, "ended");
								}),
								t.embed.on("error", (e) => {
									(t.media.error = e), gt.call(t, t.media, "error");
								}),
								e.customControls && setTimeout(() => Zt.build.call(t), 0);
						},
					};
					function oe(t) {
						t && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
							this.media.paused === t &&
								((this.media.paused = !t),
								gt.call(this, this.media, t ? "play" : "pause"));
					}
					function re(t) {
						return t.noCookie
							? "https://www.youtube-nocookie.com"
							: "http:" === window.location.protocol
							? "http://www.youtube.com"
							: void 0;
					}
					const ae = {
							setup() {
								if (
									(nt(this.elements.wrapper, this.config.classNames.embed, !0),
									P(window.YT) && I(window.YT.Player))
								)
									ae.ready.call(this);
								else {
									const t = window.onYouTubeIframeAPIReady;
									(window.onYouTubeIframeAPIReady = () => {
										I(t) && t(), ae.ready.call(this);
									}),
										ie(this.config.urls.youtube.sdk).catch((t) => {
											this.debug.warn("YouTube API failed to load", t);
										});
								}
							},
							getTitle(t) {
								Ht(Pt(this.config.urls.youtube.api, t))
									.then((t) => {
										if (P(t)) {
											const { title: e, height: i, width: n } = t;
											(this.config.title = e),
												Zt.setTitle.call(this),
												(this.embed.ratio = At(n, i));
										}
										St.call(this);
									})
									.catch(() => {
										St.call(this);
									});
							},
							ready() {
								const t = this,
									e = t.config.youtube,
									i = t.media && t.media.getAttribute("id");
								if (!$(i) && i.startsWith("youtube-")) return;
								let n = t.media.getAttribute("src");
								$(n) &&
									(n = t.media.getAttribute(this.config.attributes.embed.id));
								const s = $((o = n))
									? null
									: o.match(
											/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
									  )
									? RegExp.$2
									: o;
								var o;
								const r = X("div", {
									id: `${t.provider}-${Math.floor(1e4 * Math.random())}`,
									"data-poster": e.customControls ? t.poster : void 0,
								});
								if (((t.media = tt(r, t.media)), e.customControls)) {
									const e = (t) =>
										`https://i.ytimg.com/vi/${s}/${t}default.jpg`;
									Jt(e("maxres"), 121)
										.catch(() => Jt(e("sd"), 121))
										.catch(() => Jt(e("hq")))
										.then((e) => Zt.setPoster.call(t, e.src))
										.then((e) => {
											e.includes("maxres") ||
												(t.elements.poster.style.backgroundSize = "cover");
										})
										.catch(() => {});
								}
								t.embed = new window.YT.Player(t.media, {
									videoId: s,
									host: re(e),
									playerVars: Y(
										{},
										{
											autoplay: t.config.autoplay ? 1 : 0,
											hl: t.config.hl,
											controls: t.supported.ui && e.customControls ? 0 : 1,
											disablekb: 1,
											playsinline: t.config.fullscreen.iosNative ? 0 : 1,
											cc_load_policy: t.captions.active ? 1 : 0,
											cc_lang_pref: t.config.captions.language,
											widget_referrer: window ? window.location.href : null,
										},
										e
									),
									events: {
										onError(e) {
											if (!t.media.error) {
												const i = e.data,
													n =
														{
															2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
															5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
															100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
															101: "The owner of the requested video does not allow it to be played in embedded players.",
															150: "The owner of the requested video does not allow it to be played in embedded players.",
														}[i] || "An unknown error occured";
												(t.media.error = { code: i, message: n }),
													gt.call(t, t.media, "error");
											}
										},
										onPlaybackRateChange(e) {
											const i = e.target;
											(t.media.playbackRate = i.getPlaybackRate()),
												gt.call(t, t.media, "ratechange");
										},
										onReady(i) {
											if (I(t.media.play)) return;
											const n = i.target;
											ae.getTitle.call(t, s),
												(t.media.play = () => {
													oe.call(t, !0), n.playVideo();
												}),
												(t.media.pause = () => {
													oe.call(t, !1), n.pauseVideo();
												}),
												(t.media.stop = () => {
													n.stopVideo();
												}),
												(t.media.duration = n.getDuration()),
												(t.media.paused = !0),
												(t.media.currentTime = 0),
												Object.defineProperty(t.media, "currentTime", {
													get: () => Number(n.getCurrentTime()),
													set(e) {
														t.paused && !t.embed.hasPlayed && t.embed.mute(),
															(t.media.seeking = !0),
															gt.call(t, t.media, "seeking"),
															n.seekTo(e);
													},
												}),
												Object.defineProperty(t.media, "playbackRate", {
													get: () => n.getPlaybackRate(),
													set(t) {
														n.setPlaybackRate(t);
													},
												});
											let { volume: o } = t.config;
											Object.defineProperty(t.media, "volume", {
												get: () => o,
												set(e) {
													(o = e),
														n.setVolume(100 * o),
														gt.call(t, t.media, "volumechange");
												},
											});
											let { muted: r } = t.config;
											Object.defineProperty(t.media, "muted", {
												get: () => r,
												set(e) {
													const i = N(e) ? e : r;
													(r = i),
														n[i ? "mute" : "unMute"](),
														n.setVolume(100 * o),
														gt.call(t, t.media, "volumechange");
												},
											}),
												Object.defineProperty(t.media, "currentSrc", {
													get: () => n.getVideoUrl(),
												}),
												Object.defineProperty(t.media, "ended", {
													get: () => t.currentTime === t.duration,
												});
											const a = n.getAvailablePlaybackRates();
											(t.options.speed = a.filter((e) =>
												t.config.speed.options.includes(e)
											)),
												t.supported.ui &&
													e.customControls &&
													t.media.setAttribute("tabindex", -1),
												gt.call(t, t.media, "timeupdate"),
												gt.call(t, t.media, "durationchange"),
												clearInterval(t.timers.buffering),
												(t.timers.buffering = setInterval(() => {
													(t.media.buffered = n.getVideoLoadedFraction()),
														(null === t.media.lastBuffered ||
															t.media.lastBuffered < t.media.buffered) &&
															gt.call(t, t.media, "progress"),
														(t.media.lastBuffered = t.media.buffered),
														1 === t.media.buffered &&
															(clearInterval(t.timers.buffering),
															gt.call(t, t.media, "canplaythrough"));
												}, 200)),
												e.customControls &&
													setTimeout(() => Zt.build.call(t), 50);
										},
										onStateChange(i) {
											const n = i.target;
											switch (
												(clearInterval(t.timers.playing),
												t.media.seeking &&
													[1, 2].includes(i.data) &&
													((t.media.seeking = !1),
													gt.call(t, t.media, "seeked")),
												i.data)
											) {
												case -1:
													gt.call(t, t.media, "timeupdate"),
														(t.media.buffered = n.getVideoLoadedFraction()),
														gt.call(t, t.media, "progress");
													break;
												case 0:
													oe.call(t, !1),
														t.media.loop
															? (n.stopVideo(), n.playVideo())
															: gt.call(t, t.media, "ended");
													break;
												case 1:
													e.customControls &&
													!t.config.autoplay &&
													t.media.paused &&
													!t.embed.hasPlayed
														? t.media.pause()
														: (oe.call(t, !0),
														  gt.call(t, t.media, "playing"),
														  (t.timers.playing = setInterval(() => {
																gt.call(t, t.media, "timeupdate");
														  }, 50)),
														  t.media.duration !== n.getDuration() &&
																((t.media.duration = n.getDuration()),
																gt.call(t, t.media, "durationchange")));
													break;
												case 2:
													t.muted || t.embed.unMute(), oe.call(t, !1);
													break;
												case 3:
													gt.call(t, t.media, "waiting");
											}
											gt.call(t, t.elements.container, "statechange", !1, {
												code: i.data,
											});
										},
									},
								});
							},
						},
						le = {
							setup() {
								this.media
									? (nt(
											this.elements.container,
											this.config.classNames.type.replace("{0}", this.type),
											!0
									  ),
									  nt(
											this.elements.container,
											this.config.classNames.provider.replace(
												"{0}",
												this.provider
											),
											!0
									  ),
									  this.isEmbed &&
											nt(
												this.elements.container,
												this.config.classNames.type.replace("{0}", "video"),
												!0
											),
									  this.isVideo &&
											((this.elements.wrapper = X("div", {
												class: this.config.classNames.video,
											})),
											Q(this.media, this.elements.wrapper),
											(this.elements.poster = X("div", {
												class: this.config.classNames.poster,
											})),
											this.elements.wrapper.appendChild(this.elements.poster)),
									  this.isHTML5
											? Lt.setup.call(this)
											: this.isYouTube
											? ae.setup.call(this)
											: this.isVimeo && se.setup.call(this))
									: this.debug.warn("No media element found!");
							},
						};
					class ce {
						constructor(e) {
							t(this, "load", () => {
								this.enabled &&
									(P(window.google) && P(window.google.ima)
										? this.ready()
										: ie(this.player.config.urls.googleIMA.sdk)
												.then(() => {
													this.ready();
												})
												.catch(() => {
													this.trigger(
														"error",
														new Error("Google IMA SDK failed to load")
													);
												}));
							}),
								t(this, "ready", () => {
									var t;
									this.enabled ||
										((t = this).manager && t.manager.destroy(),
										t.elements.displayContainer &&
											t.elements.displayContainer.destroy(),
										t.elements.container.remove()),
										this.startSafetyTimer(12e3, "ready()"),
										this.managerPromise.then(() => {
											this.clearSafetyTimer("onAdsManagerLoaded()");
										}),
										this.listeners(),
										this.setupIMA();
								}),
								t(this, "setupIMA", () => {
									(this.elements.container = X("div", {
										class: this.player.config.classNames.ads,
									})),
										this.player.elements.container.appendChild(
											this.elements.container
										),
										google.ima.settings.setVpaidMode(
											google.ima.ImaSdkSettings.VpaidMode.ENABLED
										),
										google.ima.settings.setLocale(
											this.player.config.ads.language
										),
										google.ima.settings.setDisableCustomPlaybackForIOS10Plus(
											this.player.config.playsinline
										),
										(this.elements.displayContainer =
											new google.ima.AdDisplayContainer(
												this.elements.container,
												this.player.media
											)),
										(this.loader = new google.ima.AdsLoader(
											this.elements.displayContainer
										)),
										this.loader.addEventListener(
											google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
											(t) => this.onAdsManagerLoaded(t),
											!1
										),
										this.loader.addEventListener(
											google.ima.AdErrorEvent.Type.AD_ERROR,
											(t) => this.onAdError(t),
											!1
										),
										this.requestAds();
								}),
								t(this, "requestAds", () => {
									const { container: t } = this.player.elements;
									try {
										const e = new google.ima.AdsRequest();
										(e.adTagUrl = this.tagUrl),
											(e.linearAdSlotWidth = t.offsetWidth),
											(e.linearAdSlotHeight = t.offsetHeight),
											(e.nonLinearAdSlotWidth = t.offsetWidth),
											(e.nonLinearAdSlotHeight = t.offsetHeight),
											(e.forceNonLinearFullSlot = !1),
											e.setAdWillPlayMuted(!this.player.muted),
											this.loader.requestAds(e);
									} catch (t) {
										this.onAdError(t);
									}
								}),
								t(this, "pollCountdown", (t = !1) => {
									if (!t)
										return (
											clearInterval(this.countdownTimer),
											void this.elements.container.removeAttribute(
												"data-badge-text"
											)
										);
									this.countdownTimer = setInterval(() => {
										const t = Rt(Math.max(this.manager.getRemainingTime(), 0)),
											e = `${Dt.get(
												"advertisement",
												this.player.config
											)} - ${t}`;
										this.elements.container.setAttribute("data-badge-text", e);
									}, 100);
								}),
								t(this, "onAdsManagerLoaded", (t) => {
									if (!this.enabled) return;
									const e = new google.ima.AdsRenderingSettings();
									(e.restoreCustomPlaybackStateOnAdBreakComplete = !0),
										(e.enablePreloading = !0),
										(this.manager = t.getAdsManager(this.player, e)),
										(this.cuePoints = this.manager.getCuePoints()),
										this.manager.addEventListener(
											google.ima.AdErrorEvent.Type.AD_ERROR,
											(t) => this.onAdError(t)
										),
										Object.keys(google.ima.AdEvent.Type).forEach((t) => {
											this.manager.addEventListener(
												google.ima.AdEvent.Type[t],
												(t) => this.onAdEvent(t)
											);
										}),
										this.trigger("loaded");
								}),
								t(this, "addCuePoints", () => {
									$(this.cuePoints) ||
										this.cuePoints.forEach((t) => {
											if (0 !== t && -1 !== t && t < this.player.duration) {
												const e = this.player.elements.progress;
												if (H(e)) {
													const i = (100 / this.player.duration) * t,
														n = X("span", {
															class: this.player.config.classNames.cues,
														});
													(n.style.left = `${i.toString()}%`), e.appendChild(n);
												}
											}
										});
								}),
								t(this, "onAdEvent", (t) => {
									const { container: e } = this.player.elements,
										i = t.getAd(),
										n = t.getAdData();
									switch (
										(((t) => {
											gt.call(
												this.player,
												this.player.media,
												`ads${t.replace(/_/g, "").toLowerCase()}`
											);
										})(t.type),
										t.type)
									) {
										case google.ima.AdEvent.Type.LOADED:
											this.trigger("loaded"),
												this.pollCountdown(!0),
												i.isLinear() ||
													((i.width = e.offsetWidth),
													(i.height = e.offsetHeight));
											break;
										case google.ima.AdEvent.Type.STARTED:
											this.manager.setVolume(this.player.volume);
											break;
										case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
											this.player.ended
												? this.loadAds()
												: this.loader.contentComplete();
											break;
										case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
											this.pauseContent();
											break;
										case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
											this.pollCountdown(), this.resumeContent();
											break;
										case google.ima.AdEvent.Type.LOG:
											n.adError &&
												this.player.debug.warn(
													`Non-fatal ad error: ${n.adError.getMessage()}`
												);
									}
								}),
								t(this, "onAdError", (t) => {
									this.cancel(), this.player.debug.warn("Ads error", t);
								}),
								t(this, "listeners", () => {
									const { container: t } = this.player.elements;
									let e;
									this.player.on("canplay", () => {
										this.addCuePoints();
									}),
										this.player.on("ended", () => {
											this.loader.contentComplete();
										}),
										this.player.on("timeupdate", () => {
											e = this.player.currentTime;
										}),
										this.player.on("seeked", () => {
											const t = this.player.currentTime;
											$(this.cuePoints) ||
												this.cuePoints.forEach((i, n) => {
													e < i &&
														i < t &&
														(this.manager.discardAdBreak(),
														this.cuePoints.splice(n, 1));
												});
										}),
										window.addEventListener("resize", () => {
											this.manager &&
												this.manager.resize(
													t.offsetWidth,
													t.offsetHeight,
													google.ima.ViewMode.NORMAL
												);
										});
								}),
								t(this, "play", () => {
									const { container: t } = this.player.elements;
									this.managerPromise || this.resumeContent(),
										this.managerPromise
											.then(() => {
												this.manager.setVolume(this.player.volume),
													this.elements.displayContainer.initialize();
												try {
													this.initialized ||
														(this.manager.init(
															t.offsetWidth,
															t.offsetHeight,
															google.ima.ViewMode.NORMAL
														),
														this.manager.start()),
														(this.initialized = !0);
												} catch (t) {
													this.onAdError(t);
												}
											})
											.catch(() => {});
								}),
								t(this, "resumeContent", () => {
									(this.elements.container.style.zIndex = ""),
										(this.playing = !1),
										bt(this.player.media.play());
								}),
								t(this, "pauseContent", () => {
									(this.elements.container.style.zIndex = 3),
										(this.playing = !0),
										this.player.media.pause();
								}),
								t(this, "cancel", () => {
									this.initialized && this.resumeContent(),
										this.trigger("error"),
										this.loadAds();
								}),
								t(this, "loadAds", () => {
									this.managerPromise
										.then(() => {
											this.manager && this.manager.destroy(),
												(this.managerPromise = new Promise((t) => {
													this.on("loaded", t),
														this.player.debug.log(this.manager);
												})),
												(this.initialized = !1),
												this.requestAds();
										})
										.catch(() => {});
								}),
								t(this, "trigger", (t, ...e) => {
									const i = this.events[t];
									D(i) &&
										i.forEach((t) => {
											I(t) && t.apply(this, e);
										});
								}),
								t(
									this,
									"on",
									(t, e) => (
										D(this.events[t]) || (this.events[t] = []),
										this.events[t].push(e),
										this
									)
								),
								t(this, "startSafetyTimer", (t, e) => {
									this.player.debug.log(`Safety timer invoked from: ${e}`),
										(this.safetyTimer = setTimeout(() => {
											this.cancel(),
												this.clearSafetyTimer("startSafetyTimer()");
										}, t));
								}),
								t(this, "clearSafetyTimer", (t) => {
									L(this.safetyTimer) ||
										(this.player.debug.log(`Safety timer cleared from: ${t}`),
										clearTimeout(this.safetyTimer),
										(this.safetyTimer = null));
								}),
								(this.player = e),
								(this.config = e.config.ads),
								(this.playing = !1),
								(this.initialized = !1),
								(this.elements = { container: null, displayContainer: null }),
								(this.manager = null),
								(this.loader = null),
								(this.cuePoints = null),
								(this.events = {}),
								(this.safetyTimer = null),
								(this.countdownTimer = null),
								(this.managerPromise = new Promise((t, e) => {
									this.on("loaded", t), this.on("error", e);
								})),
								this.load();
						}
						get enabled() {
							const { config: t } = this;
							return (
								this.player.isHTML5 &&
								this.player.isVideo &&
								t.enabled &&
								(!$(t.publisherId) || B(t.tagUrl))
							);
						}
						get tagUrl() {
							const { config: t } = this;
							return B(t.tagUrl)
								? t.tagUrl
								: `https://go.aniview.com/api/adserver6/vast/?${qt({
										AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
										AV_CHANNELID: "5a0458dc28a06145e4519d21",
										AV_URL: window.location.hostname,
										cb: Date.now(),
										AV_WIDTH: 640,
										AV_HEIGHT: 480,
										AV_CDIM2: t.publisherId,
								  })}`;
						}
					}
					const ue = (t) => {
							const e = [];
							return (
								t.split(/\r\n\r\n|\n\n|\r\r/).forEach((t) => {
									const i = {};
									t.split(/\r\n|\n|\r/).forEach((t) => {
										if (O(i.startTime)) {
											if (!$(t.trim()) && $(i.text)) {
												const e = t.trim().split("#xywh=");
												([i.text] = e),
													e[1] && ([i.x, i.y, i.w, i.h] = e[1].split(","));
											}
										} else {
											const e = t.match(
												/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/
											);
											e &&
												((i.startTime =
													60 * Number(e[1] || 0) * 60 +
													60 * Number(e[2]) +
													Number(e[3]) +
													Number(`0.${e[4]}`)),
												(i.endTime =
													60 * Number(e[6] || 0) * 60 +
													60 * Number(e[7]) +
													Number(e[8]) +
													Number(`0.${e[9]}`)));
										}
									}),
										i.text && e.push(i);
								}),
								e
							);
						},
						he = (t, e) => {
							const i = {};
							return (
								t > e.width / e.height
									? ((i.width = e.width), (i.height = (1 / t) * e.width))
									: ((i.height = e.height), (i.width = t * e.height)),
								i
							);
						};
					class de {
						constructor(e) {
							t(this, "load", () => {
								this.player.elements.display.seekTooltip &&
									(this.player.elements.display.seekTooltip.hidden =
										this.enabled),
									this.enabled &&
										this.getThumbnails().then(() => {
											this.enabled &&
												(this.render(),
												this.determineContainerAutoSizing(),
												(this.loaded = !0));
										});
							}),
								t(
									this,
									"getThumbnails",
									() =>
										new Promise((t) => {
											const { src: e } = this.player.config.previewThumbnails;
											if ($(e))
												throw new Error(
													"Missing previewThumbnails.src config attribute"
												);
											const i = () => {
												this.thumbnails.sort((t, e) => t.height - e.height),
													this.player.debug.log(
														"Preview thumbnails",
														this.thumbnails
													),
													t();
											};
											if (I(e))
												e((t) => {
													(this.thumbnails = t), i();
												});
											else {
												const t = (M(e) ? [e] : e).map((t) =>
													this.getThumbnail(t)
												);
												Promise.all(t).then(i);
											}
										})
								),
								t(
									this,
									"getThumbnail",
									(t) =>
										new Promise((e) => {
											Ht(t).then((i) => {
												const n = {
													frames: ue(i),
													height: null,
													urlPrefix: "",
												};
												n.frames[0].text.startsWith("/") ||
													n.frames[0].text.startsWith("http://") ||
													n.frames[0].text.startsWith("https://") ||
													(n.urlPrefix = t.substring(
														0,
														t.lastIndexOf("/") + 1
													));
												const s = new Image();
												(s.onload = () => {
													(n.height = s.naturalHeight),
														(n.width = s.naturalWidth),
														this.thumbnails.push(n),
														e();
												}),
													(s.src = n.urlPrefix + n.frames[0].text);
											});
										})
								),
								t(this, "startMove", (t) => {
									if (
										this.loaded &&
										F(t) &&
										["touchmove", "mousemove"].includes(t.type) &&
										this.player.media.duration
									) {
										if ("touchmove" === t.type)
											this.seekTime =
												this.player.media.duration *
												(this.player.elements.inputs.seek.value / 100);
										else {
											const e =
													this.player.elements.progress.getBoundingClientRect(),
												i = (100 / e.width) * (t.pageX - e.left);
											(this.seekTime = this.player.media.duration * (i / 100)),
												this.seekTime < 0 && (this.seekTime = 0),
												this.seekTime > this.player.media.duration - 1 &&
													(this.seekTime = this.player.media.duration - 1),
												(this.mousePosX = t.pageX),
												(this.elements.thumb.time.innerText = Rt(
													this.seekTime
												));
										}
										this.showImageAtCurrentTime();
									}
								}),
								t(this, "endMove", () => {
									this.toggleThumbContainer(!1, !0);
								}),
								t(this, "startScrubbing", (t) => {
									(L(t.button) || !1 === t.button || 0 === t.button) &&
										((this.mouseDown = !0),
										this.player.media.duration &&
											(this.toggleScrubbingContainer(!0),
											this.toggleThumbContainer(!1, !0),
											this.showImageAtCurrentTime()));
								}),
								t(this, "endScrubbing", () => {
									(this.mouseDown = !1),
										Math.ceil(this.lastTime) ===
										Math.ceil(this.player.media.currentTime)
											? this.toggleScrubbingContainer(!1)
											: mt.call(
													this.player,
													this.player.media,
													"timeupdate",
													() => {
														this.mouseDown || this.toggleScrubbingContainer(!1);
													}
											  );
								}),
								t(this, "listeners", () => {
									this.player.on("play", () => {
										this.toggleThumbContainer(!1, !0);
									}),
										this.player.on("seeked", () => {
											this.toggleThumbContainer(!1);
										}),
										this.player.on("timeupdate", () => {
											this.lastTime = this.player.media.currentTime;
										});
								}),
								t(this, "render", () => {
									(this.elements.thumb.container = X("div", {
										class:
											this.player.config.classNames.previewThumbnails
												.thumbContainer,
									})),
										(this.elements.thumb.imageContainer = X("div", {
											class:
												this.player.config.classNames.previewThumbnails
													.imageContainer,
										})),
										this.elements.thumb.container.appendChild(
											this.elements.thumb.imageContainer
										);
									const t = X("div", {
										class:
											this.player.config.classNames.previewThumbnails
												.timeContainer,
									});
									(this.elements.thumb.time = X("span", {}, "00:00")),
										t.appendChild(this.elements.thumb.time),
										this.elements.thumb.container.appendChild(t),
										H(this.player.elements.progress) &&
											this.player.elements.progress.appendChild(
												this.elements.thumb.container
											),
										(this.elements.scrubbing.container = X("div", {
											class:
												this.player.config.classNames.previewThumbnails
													.scrubbingContainer,
										})),
										this.player.elements.wrapper.appendChild(
											this.elements.scrubbing.container
										);
								}),
								t(this, "destroy", () => {
									this.elements.thumb.container &&
										this.elements.thumb.container.remove(),
										this.elements.scrubbing.container &&
											this.elements.scrubbing.container.remove();
								}),
								t(this, "showImageAtCurrentTime", () => {
									this.mouseDown
										? this.setScrubbingContainerSize()
										: this.setThumbContainerSizeAndPos();
									const t = this.thumbnails[0].frames.findIndex(
											(t) =>
												this.seekTime >= t.startTime &&
												this.seekTime <= t.endTime
										),
										e = t >= 0;
									let i = 0;
									this.mouseDown || this.toggleThumbContainer(e),
										e &&
											(this.thumbnails.forEach((e, n) => {
												this.loadedImages.includes(e.frames[t].text) && (i = n);
											}),
											t !== this.showingThumb &&
												((this.showingThumb = t), this.loadImage(i)));
								}),
								t(this, "loadImage", (t = 0) => {
									const e = this.showingThumb,
										i = this.thumbnails[t],
										{ urlPrefix: n } = i,
										s = i.frames[e],
										o = i.frames[e].text,
										r = n + o;
									if (
										this.currentImageElement &&
										this.currentImageElement.dataset.filename === o
									)
										this.showImage(this.currentImageElement, s, t, e, o, !1),
											(this.currentImageElement.dataset.index = e),
											this.removeOldImages(this.currentImageElement);
									else {
										this.loadingImage &&
											this.usingSprites &&
											(this.loadingImage.onload = null);
										const i = new Image();
										(i.src = r),
											(i.dataset.index = e),
											(i.dataset.filename = o),
											(this.showingThumbFilename = o),
											this.player.debug.log(`Loading image: ${r}`),
											(i.onload = () => this.showImage(i, s, t, e, o, !0)),
											(this.loadingImage = i),
											this.removeOldImages(i);
									}
								}),
								t(this, "showImage", (t, e, i, n, s, o = !0) => {
									this.player.debug.log(
										`Showing thumb: ${s}. num: ${n}. qual: ${i}. newimg: ${o}`
									),
										this.setImageSizeAndOffset(t, e),
										o &&
											(this.currentImageContainer.appendChild(t),
											(this.currentImageElement = t),
											this.loadedImages.includes(s) ||
												this.loadedImages.push(s)),
										this.preloadNearby(n, !0)
											.then(this.preloadNearby(n, !1))
											.then(this.getHigherQuality(i, t, e, s));
								}),
								t(this, "removeOldImages", (t) => {
									Array.from(this.currentImageContainer.children).forEach(
										(e) => {
											if ("img" !== e.tagName.toLowerCase()) return;
											const i = this.usingSprites ? 500 : 1e3;
											if (
												e.dataset.index !== t.dataset.index &&
												!e.dataset.deleting
											) {
												e.dataset.deleting = !0;
												const { currentImageContainer: t } = this;
												setTimeout(() => {
													t.removeChild(e),
														this.player.debug.log(
															`Removing thumb: ${e.dataset.filename}`
														);
												}, i);
											}
										}
									);
								}),
								t(
									this,
									"preloadNearby",
									(t, e = !0) =>
										new Promise((i) => {
											setTimeout(() => {
												const n = this.thumbnails[0].frames[t].text;
												if (this.showingThumbFilename === n) {
													let s;
													s = e
														? this.thumbnails[0].frames.slice(t)
														: this.thumbnails[0].frames.slice(0, t).reverse();
													let o = !1;
													s.forEach((t) => {
														const e = t.text;
														if (e !== n && !this.loadedImages.includes(e)) {
															(o = !0),
																this.player.debug.log(
																	`Preloading thumb filename: ${e}`
																);
															const { urlPrefix: t } = this.thumbnails[0],
																n = t + e,
																s = new Image();
															(s.src = n),
																(s.onload = () => {
																	this.player.debug.log(
																		`Preloaded thumb filename: ${e}`
																	),
																		this.loadedImages.includes(e) ||
																			this.loadedImages.push(e),
																		i();
																});
														}
													}),
														o || i();
												}
											}, 300);
										})
								),
								t(this, "getHigherQuality", (t, e, i, n) => {
									if (t < this.thumbnails.length - 1) {
										let s = e.naturalHeight;
										this.usingSprites && (s = i.h),
											s < this.thumbContainerHeight &&
												setTimeout(() => {
													this.showingThumbFilename === n &&
														(this.player.debug.log(
															`Showing higher quality thumb for: ${n}`
														),
														this.loadImage(t + 1));
												}, 300);
									}
								}),
								t(this, "toggleThumbContainer", (t = !1, e = !1) => {
									const i =
										this.player.config.classNames.previewThumbnails
											.thumbContainerShown;
									this.elements.thumb.container.classList.toggle(i, t),
										!t &&
											e &&
											((this.showingThumb = null),
											(this.showingThumbFilename = null));
								}),
								t(this, "toggleScrubbingContainer", (t = !1) => {
									const e =
										this.player.config.classNames.previewThumbnails
											.scrubbingContainerShown;
									this.elements.scrubbing.container.classList.toggle(e, t),
										t ||
											((this.showingThumb = null),
											(this.showingThumbFilename = null));
								}),
								t(this, "determineContainerAutoSizing", () => {
									(this.elements.thumb.imageContainer.clientHeight > 20 ||
										this.elements.thumb.imageContainer.clientWidth > 20) &&
										(this.sizeSpecifiedInCSS = !0);
								}),
								t(this, "setThumbContainerSizeAndPos", () => {
									if (this.sizeSpecifiedInCSS) {
										if (
											this.elements.thumb.imageContainer.clientHeight > 20 &&
											this.elements.thumb.imageContainer.clientWidth < 20
										) {
											const t = Math.floor(
												this.elements.thumb.imageContainer.clientHeight *
													this.thumbAspectRatio
											);
											this.elements.thumb.imageContainer.style.width = `${t}px`;
										} else if (
											this.elements.thumb.imageContainer.clientHeight < 20 &&
											this.elements.thumb.imageContainer.clientWidth > 20
										) {
											const t = Math.floor(
												this.elements.thumb.imageContainer.clientWidth /
													this.thumbAspectRatio
											);
											this.elements.thumb.imageContainer.style.height = `${t}px`;
										}
									} else {
										const t = Math.floor(
											this.thumbContainerHeight * this.thumbAspectRatio
										);
										(this.elements.thumb.imageContainer.style.height = `${this.thumbContainerHeight}px`),
											(this.elements.thumb.imageContainer.style.width = `${t}px`);
									}
									this.setThumbContainerPos();
								}),
								t(this, "setThumbContainerPos", () => {
									const t =
											this.player.elements.progress.getBoundingClientRect(),
										e = this.player.elements.container.getBoundingClientRect(),
										{ container: i } = this.elements.thumb,
										n = e.left - t.left + 10,
										s = e.right - t.left - i.clientWidth - 10;
									let o = this.mousePosX - t.left - i.clientWidth / 2;
									o < n && (o = n), o > s && (o = s), (i.style.left = `${o}px`);
								}),
								t(this, "setScrubbingContainerSize", () => {
									const { width: t, height: e } = he(this.thumbAspectRatio, {
										width: this.player.media.clientWidth,
										height: this.player.media.clientHeight,
									});
									(this.elements.scrubbing.container.style.width = `${t}px`),
										(this.elements.scrubbing.container.style.height = `${e}px`);
								}),
								t(this, "setImageSizeAndOffset", (t, e) => {
									if (!this.usingSprites) return;
									const i = this.thumbContainerHeight / e.h;
									(t.style.height = t.naturalHeight * i + "px"),
										(t.style.width = t.naturalWidth * i + "px"),
										(t.style.left = `-${e.x * i}px`),
										(t.style.top = `-${e.y * i}px`);
								}),
								(this.player = e),
								(this.thumbnails = []),
								(this.loaded = !1),
								(this.lastMouseMoveTime = Date.now()),
								(this.mouseDown = !1),
								(this.loadedImages = []),
								(this.elements = { thumb: {}, scrubbing: {} }),
								this.load();
						}
						get enabled() {
							return (
								this.player.isHTML5 &&
								this.player.isVideo &&
								this.player.config.previewThumbnails.enabled
							);
						}
						get currentImageContainer() {
							return this.mouseDown
								? this.elements.scrubbing.container
								: this.elements.thumb.imageContainer;
						}
						get usingSprites() {
							return Object.keys(this.thumbnails[0].frames[0]).includes("w");
						}
						get thumbAspectRatio() {
							return this.usingSprites
								? this.thumbnails[0].frames[0].w /
										this.thumbnails[0].frames[0].h
								: this.thumbnails[0].width / this.thumbnails[0].height;
						}
						get thumbContainerHeight() {
							if (this.mouseDown) {
								const { height: t } = he(this.thumbAspectRatio, {
									width: this.player.media.clientWidth,
									height: this.player.media.clientHeight,
								});
								return t;
							}
							return this.sizeSpecifiedInCSS
								? this.elements.thumb.imageContainer.clientHeight
								: Math.floor(
										this.player.media.clientWidth / this.thumbAspectRatio / 4
								  );
						}
						get currentImageElement() {
							return this.mouseDown
								? this.currentScrubbingImageElement
								: this.currentThumbnailImageElement;
						}
						set currentImageElement(t) {
							this.mouseDown
								? (this.currentScrubbingImageElement = t)
								: (this.currentThumbnailImageElement = t);
						}
					}
					const pe = {
						insertElements(t, e) {
							M(e)
								? G(t, this.media, { src: e })
								: D(e) &&
								  e.forEach((e) => {
										G(t, this.media, e);
								  });
						},
						change(t) {
							U(t, "sources.length")
								? (Lt.cancelRequests.call(this),
								  this.destroy.call(
										this,
										() => {
											(this.options.quality = []),
												J(this.media),
												(this.media = null),
												H(this.elements.container) &&
													this.elements.container.removeAttribute("class");
											const { sources: e, type: i } = t,
												[{ provider: n = Yt.html5, src: s }] = e,
												o = "html5" === n ? i : "div",
												r = "html5" === n ? {} : { src: s };
											Object.assign(this, {
												provider: n,
												type: i,
												supported: ut.check(i, n, this.config.playsinline),
												media: X(o, r),
											}),
												this.elements.container.appendChild(this.media),
												N(t.autoplay) && (this.config.autoplay = t.autoplay),
												this.isHTML5 &&
													(this.config.crossorigin &&
														this.media.setAttribute("crossorigin", ""),
													this.config.autoplay &&
														this.media.setAttribute("autoplay", ""),
													$(t.poster) || (this.poster = t.poster),
													this.config.loop.active &&
														this.media.setAttribute("loop", ""),
													this.config.muted &&
														this.media.setAttribute("muted", ""),
													this.config.playsinline &&
														this.media.setAttribute("playsinline", "")),
												Zt.addStyleHook.call(this),
												this.isHTML5 &&
													pe.insertElements.call(this, "source", e),
												(this.config.title = t.title),
												le.setup.call(this),
												this.isHTML5 &&
													Object.keys(t).includes("tracks") &&
													pe.insertElements.call(this, "track", t.tracks),
												(this.isHTML5 ||
													(this.isEmbed && !this.supported.ui)) &&
													Zt.build.call(this),
												this.isHTML5 && this.media.load(),
												$(t.previewThumbnails) ||
													(Object.assign(
														this.config.previewThumbnails,
														t.previewThumbnails
													),
													this.previewThumbnails &&
														this.previewThumbnails.loaded &&
														(this.previewThumbnails.destroy(),
														(this.previewThumbnails = null)),
													this.config.previewThumbnails.enabled &&
														(this.previewThumbnails = new de(this))),
												this.fullscreen.update();
										},
										!0
								  ))
								: this.debug.warn("Invalid source format");
						},
					};
					class fe {
						constructor(e, i) {
							if (
								(t(this, "play", () =>
									I(this.media.play)
										? (this.ads &&
												this.ads.enabled &&
												this.ads.managerPromise
													.then(() => this.ads.play())
													.catch(() => bt(this.media.play())),
										  this.media.play())
										: null
								),
								t(this, "pause", () =>
									this.playing && I(this.media.pause)
										? this.media.pause()
										: null
								),
								t(this, "togglePlay", (t) =>
									(N(t) ? t : !this.playing) ? this.play() : this.pause()
								),
								t(this, "stop", () => {
									this.isHTML5
										? (this.pause(), this.restart())
										: I(this.media.stop) && this.media.stop();
								}),
								t(this, "restart", () => {
									this.currentTime = 0;
								}),
								t(this, "rewind", (t) => {
									this.currentTime -= O(t) ? t : this.config.seekTime;
								}),
								t(this, "forward", (t) => {
									this.currentTime += O(t) ? t : this.config.seekTime;
								}),
								t(this, "increaseVolume", (t) => {
									const e = this.media.muted ? 0 : this.volume;
									this.volume = e + (O(t) ? t : 0);
								}),
								t(this, "decreaseVolume", (t) => {
									this.increaseVolume(-t);
								}),
								t(this, "airplay", () => {
									ut.airplay && this.media.webkitShowPlaybackTargetPicker();
								}),
								t(this, "toggleControls", (t) => {
									if (this.supported.ui && !this.isAudio) {
										const e = st(
												this.elements.container,
												this.config.classNames.hideControls
											),
											i = void 0 === t ? void 0 : !t,
											n = nt(
												this.elements.container,
												this.config.classNames.hideControls,
												i
											);
										if (
											(n &&
												D(this.config.controls) &&
												this.config.controls.includes("settings") &&
												!$(this.config.settings) &&
												Bt.toggleMenu.call(this, !1),
											n !== e)
										) {
											const t = n ? "controlshidden" : "controlsshown";
											gt.call(this, this.media, t);
										}
										return !n;
									}
									return !1;
								}),
								t(this, "on", (t, e) => {
									pt.call(this, this.elements.container, t, e);
								}),
								t(this, "once", (t, e) => {
									mt.call(this, this.elements.container, t, e);
								}),
								t(this, "off", (t, e) => {
									ft(this.elements.container, t, e);
								}),
								t(this, "destroy", (t, e = !1) => {
									if (!this.ready) return;
									const i = () => {
										(document.body.style.overflow = ""),
											(this.embed = null),
											e
												? (Object.keys(this.elements).length &&
														(J(this.elements.buttons.play),
														J(this.elements.captions),
														J(this.elements.controls),
														J(this.elements.wrapper),
														(this.elements.buttons.play = null),
														(this.elements.captions = null),
														(this.elements.controls = null),
														(this.elements.wrapper = null)),
												  I(t) && t())
												: (yt.call(this),
												  Lt.cancelRequests.call(this),
												  tt(this.elements.original, this.elements.container),
												  gt.call(
														this,
														this.elements.original,
														"destroyed",
														!0
												  ),
												  I(t) && t.call(this.elements.original),
												  (this.ready = !1),
												  setTimeout(() => {
														(this.elements = null), (this.media = null);
												  }, 200));
									};
									this.stop(),
										clearTimeout(this.timers.loading),
										clearTimeout(this.timers.controls),
										clearTimeout(this.timers.resized),
										this.isHTML5
											? (Zt.toggleNativeControls.call(this, !0), i())
											: this.isYouTube
											? (clearInterval(this.timers.buffering),
											  clearInterval(this.timers.playing),
											  null !== this.embed &&
													I(this.embed.destroy) &&
													this.embed.destroy(),
											  i())
											: this.isVimeo &&
											  (null !== this.embed && this.embed.unload().then(i),
											  setTimeout(i, 200));
								}),
								t(this, "supports", (t) => ut.mime.call(this, t)),
								(this.timers = {}),
								(this.ready = !1),
								(this.loading = !1),
								(this.failed = !1),
								(this.touch = ut.touch),
								(this.media = e),
								M(this.media) &&
									(this.media = document.querySelectorAll(this.media)),
								((window.jQuery && this.media instanceof jQuery) ||
									j(this.media) ||
									D(this.media)) &&
									(this.media = this.media[0]),
								(this.config = Y(
									{},
									Vt,
									fe.defaults,
									i || {},
									(() => {
										try {
											return JSON.parse(
												this.media.getAttribute("data-plyr-config")
											);
										} catch (t) {
											return {};
										}
									})()
								)),
								(this.elements = {
									container: null,
									fullscreen: null,
									captions: null,
									buttons: {},
									display: {},
									progress: {},
									inputs: {},
									settings: {
										popup: null,
										menu: null,
										panels: {},
										buttons: {},
									},
								}),
								(this.captions = {
									active: null,
									currentTrack: -1,
									meta: new WeakMap(),
								}),
								(this.fullscreen = { active: !1 }),
								(this.options = { speed: [], quality: [] }),
								(this.debug = new Xt(this.config.debug)),
								this.debug.log("Config", this.config),
								this.debug.log("Support", ut),
								L(this.media) || !H(this.media))
							)
								return void this.debug.error(
									"Setup failed: no suitable element passed"
								);
							if (this.media.plyr)
								return void this.debug.warn("Target already setup");
							if (!this.config.enabled)
								return void this.debug.error(
									"Setup failed: disabled by config"
								);
							if (!ut.check().api)
								return void this.debug.error("Setup failed: no support");
							const n = this.media.cloneNode(!0);
							(n.autoplay = !1), (this.elements.original = n);
							const s = this.media.tagName.toLowerCase();
							let o = null,
								r = null;
							switch (s) {
								case "div":
									if (((o = this.media.querySelector("iframe")), H(o))) {
										if (
											((r = $t(o.getAttribute("src"))),
											(this.provider = (function (t) {
												return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(
													t
												)
													? Yt.youtube
													: /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(
															t
													  )
													? Yt.vimeo
													: null;
											})(r.toString())),
											(this.elements.container = this.media),
											(this.media = o),
											(this.elements.container.className = ""),
											r.search.length)
										) {
											const t = ["1", "true"];
											t.includes(r.searchParams.get("autoplay")) &&
												(this.config.autoplay = !0),
												t.includes(r.searchParams.get("loop")) &&
													(this.config.loop.active = !0),
												this.isYouTube
													? ((this.config.playsinline = t.includes(
															r.searchParams.get("playsinline")
													  )),
													  (this.config.youtube.hl = r.searchParams.get("hl")))
													: (this.config.playsinline = !0);
										}
									} else
										(this.provider = this.media.getAttribute(
											this.config.attributes.embed.provider
										)),
											this.media.removeAttribute(
												this.config.attributes.embed.provider
											);
									if (
										$(this.provider) ||
										!Object.values(Yt).includes(this.provider)
									)
										return void this.debug.error(
											"Setup failed: Invalid provider"
										);
									this.type = Qt;
									break;
								case "video":
								case "audio":
									(this.type = s),
										(this.provider = Yt.html5),
										this.media.hasAttribute("crossorigin") &&
											(this.config.crossorigin = !0),
										this.media.hasAttribute("autoplay") &&
											(this.config.autoplay = !0),
										(this.media.hasAttribute("playsinline") ||
											this.media.hasAttribute("webkit-playsinline")) &&
											(this.config.playsinline = !0),
										this.media.hasAttribute("muted") &&
											(this.config.muted = !0),
										this.media.hasAttribute("loop") &&
											(this.config.loop.active = !0);
									break;
								default:
									return void this.debug.error(
										"Setup failed: unsupported type"
									);
							}
							(this.supported = ut.check(
								this.type,
								this.provider,
								this.config.playsinline
							)),
								this.supported.api
									? ((this.eventListeners = []),
									  (this.listeners = new te(this)),
									  (this.storage = new jt(this)),
									  (this.media.plyr = this),
									  H(this.elements.container) ||
											((this.elements.container = X("div", { tabindex: 0 })),
											Q(this.media, this.elements.container)),
									  Zt.migrateStyles.call(this),
									  Zt.addStyleHook.call(this),
									  le.setup.call(this),
									  this.config.debug &&
											pt.call(
												this,
												this.elements.container,
												this.config.events.join(" "),
												(t) => {
													this.debug.log(`event: ${t.type}`);
												}
											),
									  (this.fullscreen = new Gt(this)),
									  (this.isHTML5 || (this.isEmbed && !this.supported.ui)) &&
											Zt.build.call(this),
									  this.listeners.container(),
									  this.listeners.global(),
									  this.config.ads.enabled && (this.ads = new ce(this)),
									  this.isHTML5 &&
											this.config.autoplay &&
											this.once("canplay", () => bt(this.play())),
									  (this.lastSeekTime = 0),
									  this.config.previewThumbnails.enabled &&
											(this.previewThumbnails = new de(this)))
									: this.debug.error("Setup failed: no support");
						}
						get isHTML5() {
							return this.provider === Yt.html5;
						}
						get isEmbed() {
							return this.isYouTube || this.isVimeo;
						}
						get isYouTube() {
							return this.provider === Yt.youtube;
						}
						get isVimeo() {
							return this.provider === Yt.vimeo;
						}
						get isVideo() {
							return this.type === Qt;
						}
						get isAudio() {
							return "audio" === this.type;
						}
						get playing() {
							return Boolean(this.ready && !this.paused && !this.ended);
						}
						get paused() {
							return Boolean(this.media.paused);
						}
						get stopped() {
							return Boolean(this.paused && 0 === this.currentTime);
						}
						get ended() {
							return Boolean(this.media.ended);
						}
						set currentTime(t) {
							if (!this.duration) return;
							const e = O(t) && t > 0;
							(this.media.currentTime = e ? Math.min(t, this.duration) : 0),
								this.debug.log(`Seeking to ${this.currentTime} seconds`);
						}
						get currentTime() {
							return Number(this.media.currentTime);
						}
						get buffered() {
							const { buffered: t } = this.media;
							return O(t)
								? t
								: t && t.length && this.duration > 0
								? t.end(0) / this.duration
								: 0;
						}
						get seeking() {
							return Boolean(this.media.seeking);
						}
						get duration() {
							const t = parseFloat(this.config.duration),
								e = (this.media || {}).duration,
								i = O(e) && e !== 1 / 0 ? e : 0;
							return t || i;
						}
						set volume(t) {
							let e = t;
							M(e) && (e = Number(e)),
								O(e) || (e = this.storage.get("volume")),
								O(e) || ({ volume: e } = this.config),
								e > 1 && (e = 1),
								e < 0 && (e = 0),
								(this.config.volume = e),
								(this.media.volume = e),
								!$(t) && this.muted && e > 0 && (this.muted = !1);
						}
						get volume() {
							return Number(this.media.volume);
						}
						set muted(t) {
							let e = t;
							N(e) || (e = this.storage.get("muted")),
								N(e) || (e = this.config.muted),
								(this.config.muted = e),
								(this.media.muted = e);
						}
						get muted() {
							return Boolean(this.media.muted);
						}
						get hasAudio() {
							return (
								!this.isHTML5 ||
								!!this.isAudio ||
								Boolean(this.media.mozHasAudio) ||
								Boolean(this.media.webkitAudioDecodedByteCount) ||
								Boolean(this.media.audioTracks && this.media.audioTracks.length)
							);
						}
						set speed(t) {
							let e = null;
							O(t) && (e = t),
								O(e) || (e = this.storage.get("speed")),
								O(e) || (e = this.config.speed.selected);
							const { minimumSpeed: i, maximumSpeed: n } = this;
							(e = (function (t = 0, e = 0, i = 255) {
								return Math.min(Math.max(t, e), i);
							})(e, i, n)),
								(this.config.speed.selected = e),
								setTimeout(() => {
									this.media.playbackRate = e;
								}, 0);
						}
						get speed() {
							return Number(this.media.playbackRate);
						}
						get minimumSpeed() {
							return this.isYouTube
								? Math.min(...this.options.speed)
								: this.isVimeo
								? 0.5
								: 0.0625;
						}
						get maximumSpeed() {
							return this.isYouTube
								? Math.max(...this.options.speed)
								: this.isVimeo
								? 2
								: 16;
						}
						set quality(t) {
							const e = this.config.quality,
								i = this.options.quality;
							if (!i.length) return;
							let n = [
									!$(t) && Number(t),
									this.storage.get("quality"),
									e.selected,
									e.default,
								].find(O),
								s = !0;
							if (!i.includes(n)) {
								const t = _t(i, n);
								this.debug.warn(
									`Unsupported quality option: ${n}, using ${t} instead`
								),
									(n = t),
									(s = !1);
							}
							(e.selected = n),
								(this.media.quality = n),
								s && this.storage.set({ quality: n });
						}
						get quality() {
							return this.media.quality;
						}
						set loop(t) {
							const e = N(t) ? t : this.config.loop.active;
							(this.config.loop.active = e), (this.media.loop = e);
						}
						get loop() {
							return Boolean(this.media.loop);
						}
						set source(t) {
							pe.change.call(this, t);
						}
						get source() {
							return this.media.currentSrc;
						}
						get download() {
							const { download: t } = this.config.urls;
							return B(t) ? t : this.source;
						}
						set download(t) {
							B(t) &&
								((this.config.urls.download = t), Bt.setDownloadUrl.call(this));
						}
						set poster(t) {
							this.isVideo
								? Zt.setPoster.call(this, t, !1).catch(() => {})
								: this.debug.warn("Poster can only be set for video");
						}
						get poster() {
							return this.isVideo
								? this.media.getAttribute("poster") ||
										this.media.getAttribute("data-poster")
								: null;
						}
						get ratio() {
							if (!this.isVideo) return null;
							const t = Tt(Ct.call(this));
							return D(t) ? t.join(":") : t;
						}
						set ratio(t) {
							this.isVideo
								? M(t) && kt(t)
									? ((this.config.ratio = Tt(t)), St.call(this))
									: this.debug.error(`Invalid aspect ratio specified (${t})`)
								: this.debug.warn("Aspect ratio can only be set for video");
						}
						set autoplay(t) {
							const e = N(t) ? t : this.config.autoplay;
							this.config.autoplay = e;
						}
						get autoplay() {
							return Boolean(this.config.autoplay);
						}
						toggleCaptions(t) {
							Wt.toggle.call(this, t, !1);
						}
						set currentTrack(t) {
							Wt.set.call(this, t, !1);
						}
						get currentTrack() {
							const { toggled: t, currentTrack: e } = this.captions;
							return t ? e : -1;
						}
						set language(t) {
							Wt.setLanguage.call(this, t, !1);
						}
						get language() {
							return (Wt.getCurrentTrack.call(this) || {}).language;
						}
						set pip(t) {
							if (!ut.pip) return;
							const e = N(t) ? t : !this.pip;
							I(this.media.webkitSetPresentationMode) &&
								this.media.webkitSetPresentationMode(e ? Ut : "inline"),
								I(this.media.requestPictureInPicture) &&
									(!this.pip && e
										? this.media.requestPictureInPicture()
										: this.pip && !e && document.exitPictureInPicture());
						}
						get pip() {
							return ut.pip
								? $(this.media.webkitPresentationMode)
									? this.media === document.pictureInPictureElement
									: this.media.webkitPresentationMode === Ut
								: null;
						}
						static supported(t, e, i) {
							return ut.check(t, e, i);
						}
						static loadSprite(t, e) {
							return Ft(t, e);
						}
						static setup(t, e = {}) {
							let i = null;
							return (
								M(t)
									? (i = Array.from(document.querySelectorAll(t)))
									: j(t)
									? (i = Array.from(t))
									: D(t) && (i = t.filter(H)),
								$(i) ? null : i.map((t) => new fe(t, e))
							);
						}
					}
					var me;
					return (
						(fe.defaults = ((me = Vt), JSON.parse(JSON.stringify(me)))), fe
					);
				})());
		},
		263: () => {
			!(function () {
				function t(t) {
					var e = document.createElement("textarea");
					(e.value = t.getText()),
						(e.style.top = "0"),
						(e.style.left = "0"),
						(e.style.position = "fixed"),
						document.body.appendChild(e),
						e.focus(),
						e.select();
					try {
						var i = document.execCommand("copy");
						setTimeout(function () {
							i ? t.success() : t.error();
						}, 1);
					} catch (e) {
						setTimeout(function () {
							t.error(e);
						}, 1);
					}
					document.body.removeChild(e);
				}
				"undefined" != typeof Prism &&
					"undefined" != typeof document &&
					(Prism.plugins.toolbar
						? Prism.plugins.toolbar.registerButton(
								"copy-to-clipboard",
								function (e) {
									var i = e.element,
										n = (function (t) {
											var e = {
												copy: "Copy",
												"copy-error": "Press Ctrl+C to copy",
												"copy-success": "Copied!",
												"copy-timeout": 5e3,
											};
											for (var i in e) {
												for (
													var n = "data-prismjs-" + i, s = t;
													s && !s.hasAttribute(n);

												)
													s = s.parentElement;
												s && (e[i] = s.getAttribute(n));
											}
											return e;
										})(i),
										s = document.createElement("button");
									(s.className = "copy-to-clipboard-button"),
										s.setAttribute("type", "button");
									var o = document.createElement("span");
									return (
										s.appendChild(o),
										a("copy"),
										(function (e, i) {
											e.addEventListener("click", function () {
												!(function (e) {
													navigator.clipboard
														? navigator.clipboard
																.writeText(e.getText())
																.then(e.success, function () {
																	t(e);
																})
														: t(e);
												})(i);
											});
										})(s, {
											getText: function () {
												return i.textContent;
											},
											success: function () {
												a("copy-success"), r();
											},
											error: function () {
												a("copy-error"),
													setTimeout(function () {
														!(function (t) {
															window.getSelection().selectAllChildren(t);
														})(i);
													}, 1),
													r();
											},
										}),
										s
									);
									function r() {
										setTimeout(function () {
											a("copy");
										}, n["copy-timeout"]);
									}
									function a(t) {
										(o.textContent = n[t]),
											s.setAttribute("data-copy-state", t);
									}
								}
						  )
						: console.warn(
								"Copy to Clipboard plugin loaded before Toolbar plugin."
						  ));
			})();
		},
		781: (t) => {
			!(function () {
				if ("undefined" != typeof Prism && "undefined" != typeof document) {
					var e =
						Object.assign ||
						function (t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
							return t;
						};
					(i.prototype = {
						setDefaults: function (t) {
							this.defaults = e(this.defaults, t);
						},
						normalize: function (t, i) {
							for (var n in (i = e(this.defaults, i))) {
								var s = n.replace(/-(\w)/g, function (t, e) {
									return e.toUpperCase();
								});
								"normalize" !== n &&
									"setDefaults" !== s &&
									i[n] &&
									this[s] &&
									(t = this[s].call(this, t, i[n]));
							}
							return t;
						},
						leftTrim: function (t) {
							return t.replace(/^\s+/, "");
						},
						rightTrim: function (t) {
							return t.replace(/\s+$/, "");
						},
						tabsToSpaces: function (t, e) {
							return (
								(e = 0 | e || 4), t.replace(/\t/g, new Array(++e).join(" "))
							);
						},
						spacesToTabs: function (t, e) {
							return (
								(e = 0 | e || 4), t.replace(RegExp(" {" + e + "}", "g"), "\t")
							);
						},
						removeTrailing: function (t) {
							return t.replace(/\s*?$/gm, "");
						},
						removeInitialLineFeed: function (t) {
							return t.replace(/^(?:\r?\n|\r)/, "");
						},
						removeIndent: function (t) {
							var e = t.match(/^[^\S\n\r]*(?=\S)/gm);
							return e && e[0].length
								? (e.sort(function (t, e) {
										return t.length - e.length;
								  }),
								  e[0].length ? t.replace(RegExp("^" + e[0], "gm"), "") : t)
								: t;
						},
						indent: function (t, e) {
							return t.replace(
								/^[^\S\n\r]*(?=\S)/gm,
								new Array(++e).join("\t") + "$&"
							);
						},
						breakLines: function (t, e) {
							e = !0 === e ? 80 : 0 | e || 80;
							for (var i = t.split("\n"), s = 0; s < i.length; ++s)
								if (!(n(i[s]) <= e)) {
									for (
										var o = i[s].split(/(\s+)/g), r = 0, a = 0;
										a < o.length;
										++a
									) {
										var l = n(o[a]);
										(r += l) > e && ((o[a] = "\n" + o[a]), (r = l));
									}
									i[s] = o.join("");
								}
							return i.join("\n");
						},
					}),
						t.exports && (t.exports = i),
						"undefined" != typeof Prism &&
							((Prism.plugins.NormalizeWhitespace = new i({
								"remove-trailing": !0,
								"remove-indent": !0,
								"left-trim": !0,
								"right-trim": !0,
							})),
							Prism.hooks.add("before-sanity-check", function (t) {
								var e = Prism.plugins.NormalizeWhitespace;
								if (
									(!t.settings ||
										!1 !== t.settings["whitespace-normalization"]) &&
									Prism.util.isActive(t.element, "whitespace-normalization", !0)
								)
									if ((t.element && t.element.parentNode) || !t.code) {
										var i = t.element.parentNode;
										if (t.code && i && "pre" === i.nodeName.toLowerCase()) {
											for (
												var n = i.childNodes, s = "", o = "", r = !1, a = 0;
												a < n.length;
												++a
											) {
												var l = n[a];
												l == t.element
													? (r = !0)
													: "#text" === l.nodeName &&
													  (r ? (o += l.nodeValue) : (s += l.nodeValue),
													  i.removeChild(l),
													  --a);
											}
											if (
												t.element.children.length &&
												Prism.plugins.KeepMarkup
											) {
												var c = s + t.element.innerHTML + o;
												(t.element.innerHTML = e.normalize(c, t.settings)),
													(t.code = t.element.textContent);
											} else
												(t.code = s + t.code + o),
													(t.code = e.normalize(t.code, t.settings));
										}
									} else t.code = e.normalize(t.code, t.settings);
							}));
				}
				function i(t) {
					this.defaults = e({}, t);
				}
				function n(t) {
					for (var e = 0, i = 0; i < t.length; ++i)
						t.charCodeAt(i) == "\t".charCodeAt(0) && (e += 3);
					return t.length + e;
				}
			})();
		},
		206: () => {
			!(function () {
				if ("undefined" != typeof Prism && "undefined" != typeof document) {
					var t = [],
						e = {},
						i = function () {};
					Prism.plugins.toolbar = {};
					var n = (Prism.plugins.toolbar.registerButton = function (i, n) {
							var s;
							(s =
								"function" == typeof n
									? n
									: function (t) {
											var e;
											return (
												"function" == typeof n.onClick
													? (((e = document.createElement("button")).type =
															"button"),
													  e.addEventListener("click", function () {
															n.onClick.call(this, t);
													  }))
													: "string" == typeof n.url
													? ((e = document.createElement("a")).href = n.url)
													: (e = document.createElement("span")),
												n.className && e.classList.add(n.className),
												(e.textContent = n.text),
												e
											);
									  }),
								i in e
									? console.warn(
											'There is a button with the key "' +
												i +
												'" registered already.'
									  )
									: t.push((e[i] = s));
						}),
						s = (Prism.plugins.toolbar.hook = function (n) {
							var s = n.element.parentNode;
							if (
								s &&
								/pre/i.test(s.nodeName) &&
								!s.parentNode.classList.contains("code-toolbar")
							) {
								var o = document.createElement("div");
								o.classList.add("code-toolbar"),
									s.parentNode.insertBefore(o, s),
									o.appendChild(s);
								var r = document.createElement("div");
								r.classList.add("toolbar");
								var a = t,
									l = (function (t) {
										for (; t; ) {
											var e = t.getAttribute("data-toolbar-order");
											if (null != e)
												return (e = e.trim()).length ? e.split(/\s*,\s*/g) : [];
											t = t.parentElement;
										}
									})(n.element);
								l &&
									(a = l.map(function (t) {
										return e[t] || i;
									})),
									a.forEach(function (t) {
										var e = t(n);
										if (e) {
											var i = document.createElement("div");
											i.classList.add("toolbar-item"),
												i.appendChild(e),
												r.appendChild(i);
										}
									}),
									o.appendChild(r);
							}
						});
					n("label", function (t) {
						var e = t.element.parentNode;
						if (e && /pre/i.test(e.nodeName) && e.hasAttribute("data-label")) {
							var i,
								n,
								s = e.getAttribute("data-label");
							try {
								n = document.querySelector("template#" + s);
							} catch (t) {}
							return (
								n
									? (i = n.content)
									: (e.hasAttribute("data-url")
											? ((i = document.createElement("a")).href =
													e.getAttribute("data-url"))
											: (i = document.createElement("span")),
									  (i.textContent = s)),
								i
							);
						}
					}),
						Prism.hooks.add("complete", s);
				}
			})();
		},
		439: () => {
			"undefined" != typeof Prism &&
				"undefined" != typeof document &&
				(Element.prototype.matches ||
					(Element.prototype.matches =
						Element.prototype.msMatchesSelector ||
						Element.prototype.webkitMatchesSelector),
				(Prism.plugins.UnescapedMarkup = !0),
				Prism.hooks.add("before-highlightall", function (t) {
					t.selector +=
						', [class*="lang-"] script[type="text/plain"], [class*="language-"] script[type="text/plain"], script[type="text/plain"][class*="lang-"], script[type="text/plain"][class*="language-"]';
				}),
				Prism.hooks.add("before-sanity-check", function (t) {
					var e = t.element;
					if (e.matches('script[type="text/plain"]')) {
						var i = document.createElement("code"),
							n = document.createElement("pre");
						n.className = i.className = e.className;
						var s = e.dataset;
						return (
							Object.keys(s || {}).forEach(function (t) {
								Object.prototype.hasOwnProperty.call(s, t) &&
									(n.dataset[t] = s[t]);
							}),
							(i.textContent = t.code =
								t.code.replace(/&lt;\/script(?:>|&gt;)/gi, "</script>")),
							n.appendChild(i),
							e.parentNode.replaceChild(n, e),
							void (t.element = i)
						);
					}
					if (!t.code) {
						var o = e.childNodes;
						1 === o.length &&
							"#comment" == o[0].nodeName &&
							(e.textContent = t.code = o[0].textContent);
					}
				}));
		},
		660: (t, e, i) => {
			var n = (function (t) {
				var e = /\blang(?:uage)?-([\w-]+)\b/i,
					i = 0,
					n = {},
					s = {
						manual: t.Prism && t.Prism.manual,
						disableWorkerMessageHandler:
							t.Prism && t.Prism.disableWorkerMessageHandler,
						util: {
							encode: function t(e) {
								return e instanceof o
									? new o(e.type, t(e.content), e.alias)
									: Array.isArray(e)
									? e.map(t)
									: e
											.replace(/&/g, "&amp;")
											.replace(/</g, "&lt;")
											.replace(/\u00a0/g, " ");
							},
							type: function (t) {
								return Object.prototype.toString.call(t).slice(8, -1);
							},
							objId: function (t) {
								return (
									t.__id || Object.defineProperty(t, "__id", { value: ++i }),
									t.__id
								);
							},
							clone: function t(e, i) {
								var n, o;
								switch (((i = i || {}), s.util.type(e))) {
									case "Object":
										if (((o = s.util.objId(e)), i[o])) return i[o];
										for (var r in ((n = {}), (i[o] = n), e))
											e.hasOwnProperty(r) && (n[r] = t(e[r], i));
										return n;
									case "Array":
										return (
											(o = s.util.objId(e)),
											i[o]
												? i[o]
												: ((n = []),
												  (i[o] = n),
												  e.forEach(function (e, s) {
														n[s] = t(e, i);
												  }),
												  n)
										);
									default:
										return e;
								}
							},
							getLanguage: function (t) {
								for (; t && !e.test(t.className); ) t = t.parentElement;
								return t
									? (t.className.match(e) || [, "none"])[1].toLowerCase()
									: "none";
							},
							currentScript: function () {
								if ("undefined" == typeof document) return null;
								if ("currentScript" in document) return document.currentScript;
								try {
									throw new Error();
								} catch (n) {
									var t = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(n.stack) ||
										[])[1];
									if (t) {
										var e = document.getElementsByTagName("script");
										for (var i in e) if (e[i].src == t) return e[i];
									}
									return null;
								}
							},
							isActive: function (t, e, i) {
								for (var n = "no-" + e; t; ) {
									var s = t.classList;
									if (s.contains(e)) return !0;
									if (s.contains(n)) return !1;
									t = t.parentElement;
								}
								return !!i;
							},
						},
						languages: {
							plain: n,
							plaintext: n,
							text: n,
							txt: n,
							extend: function (t, e) {
								var i = s.util.clone(s.languages[t]);
								for (var n in e) i[n] = e[n];
								return i;
							},
							insertBefore: function (t, e, i, n) {
								var o = (n = n || s.languages)[t],
									r = {};
								for (var a in o)
									if (o.hasOwnProperty(a)) {
										if (a == e)
											for (var l in i) i.hasOwnProperty(l) && (r[l] = i[l]);
										i.hasOwnProperty(a) || (r[a] = o[a]);
									}
								var c = n[t];
								return (
									(n[t] = r),
									s.languages.DFS(s.languages, function (e, i) {
										i === c && e != t && (this[e] = r);
									}),
									r
								);
							},
							DFS: function t(e, i, n, o) {
								o = o || {};
								var r = s.util.objId;
								for (var a in e)
									if (e.hasOwnProperty(a)) {
										i.call(e, a, e[a], n || a);
										var l = e[a],
											c = s.util.type(l);
										"Object" !== c || o[r(l)]
											? "Array" !== c ||
											  o[r(l)] ||
											  ((o[r(l)] = !0), t(l, i, a, o))
											: ((o[r(l)] = !0), t(l, i, null, o));
									}
							},
						},
						plugins: {},
						highlightAll: function (t, e) {
							s.highlightAllUnder(document, t, e);
						},
						highlightAllUnder: function (t, e, i) {
							var n = {
								callback: i,
								container: t,
								selector:
									'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
							};
							s.hooks.run("before-highlightall", n),
								(n.elements = Array.prototype.slice.apply(
									n.container.querySelectorAll(n.selector)
								)),
								s.hooks.run("before-all-elements-highlight", n);
							for (var o, r = 0; (o = n.elements[r++]); )
								s.highlightElement(o, !0 === e, n.callback);
						},
						highlightElement: function (i, n, o) {
							var r = s.util.getLanguage(i),
								a = s.languages[r];
							i.className =
								i.className.replace(e, "").replace(/\s+/g, " ") +
								" language-" +
								r;
							var l = i.parentElement;
							l &&
								"pre" === l.nodeName.toLowerCase() &&
								(l.className =
									l.className.replace(e, "").replace(/\s+/g, " ") +
									" language-" +
									r);
							var c = {
								element: i,
								language: r,
								grammar: a,
								code: i.textContent,
							};
							function u(t) {
								(c.highlightedCode = t),
									s.hooks.run("before-insert", c),
									(c.element.innerHTML = c.highlightedCode),
									s.hooks.run("after-highlight", c),
									s.hooks.run("complete", c),
									o && o.call(c.element);
							}
							if (
								(s.hooks.run("before-sanity-check", c),
								(l = c.element.parentElement) &&
									"pre" === l.nodeName.toLowerCase() &&
									!l.hasAttribute("tabindex") &&
									l.setAttribute("tabindex", "0"),
								!c.code)
							)
								return (
									s.hooks.run("complete", c), void (o && o.call(c.element))
								);
							if ((s.hooks.run("before-highlight", c), c.grammar))
								if (n && t.Worker) {
									var h = new Worker(s.filename);
									(h.onmessage = function (t) {
										u(t.data);
									}),
										h.postMessage(
											JSON.stringify({
												language: c.language,
												code: c.code,
												immediateClose: !0,
											})
										);
								} else u(s.highlight(c.code, c.grammar, c.language));
							else u(s.util.encode(c.code));
						},
						highlight: function (t, e, i) {
							var n = { code: t, grammar: e, language: i };
							return (
								s.hooks.run("before-tokenize", n),
								(n.tokens = s.tokenize(n.code, n.grammar)),
								s.hooks.run("after-tokenize", n),
								o.stringify(s.util.encode(n.tokens), n.language)
							);
						},
						tokenize: function (t, e) {
							var i = e.rest;
							if (i) {
								for (var n in i) e[n] = i[n];
								delete e.rest;
							}
							var s = new l();
							return (
								c(s, s.head, t),
								a(t, s, e, s.head, 0),
								(function (t) {
									for (var e = [], i = t.head.next; i !== t.tail; )
										e.push(i.value), (i = i.next);
									return e;
								})(s)
							);
						},
						hooks: {
							all: {},
							add: function (t, e) {
								var i = s.hooks.all;
								(i[t] = i[t] || []), i[t].push(e);
							},
							run: function (t, e) {
								var i = s.hooks.all[t];
								if (i && i.length) for (var n, o = 0; (n = i[o++]); ) n(e);
							},
						},
						Token: o,
					};
				function o(t, e, i, n) {
					(this.type = t),
						(this.content = e),
						(this.alias = i),
						(this.length = 0 | (n || "").length);
				}
				function r(t, e, i, n) {
					t.lastIndex = e;
					var s = t.exec(i);
					if (s && n && s[1]) {
						var o = s[1].length;
						(s.index += o), (s[0] = s[0].slice(o));
					}
					return s;
				}
				function a(t, e, i, n, l, h) {
					for (var d in i)
						if (i.hasOwnProperty(d) && i[d]) {
							var p = i[d];
							p = Array.isArray(p) ? p : [p];
							for (var f = 0; f < p.length; ++f) {
								if (h && h.cause == d + "," + f) return;
								var m = p[f],
									g = m.inside,
									y = !!m.lookbehind,
									v = !!m.greedy,
									b = m.alias;
								if (v && !m.pattern.global) {
									var w = m.pattern.toString().match(/[imsuy]*$/)[0];
									m.pattern = RegExp(m.pattern.source, w + "g");
								}
								for (
									var _ = m.pattern || m, E = n.next, x = l;
									E !== e.tail && !(h && x >= h.reach);
									x += E.value.length, E = E.next
								) {
									var k = E.value;
									if (e.length > t.length) return;
									if (!(k instanceof o)) {
										var T,
											C = 1;
										if (v) {
											if (!(T = r(_, x, t, y))) break;
											var S = T.index,
												A = T.index + T[0].length,
												L = x;
											for (L += E.value.length; S >= L; )
												L += (E = E.next).value.length;
											if (((x = L -= E.value.length), E.value instanceof o))
												continue;
											for (
												var P = E;
												P !== e.tail && (L < A || "string" == typeof P.value);
												P = P.next
											)
												C++, (L += P.value.length);
											C--, (k = t.slice(x, L)), (T.index -= x);
										} else if (!(T = r(_, 0, k, y))) continue;
										S = T.index;
										var O = T[0],
											M = k.slice(0, S),
											N = k.slice(S + O.length),
											I = x + k.length;
										h && I > h.reach && (h.reach = I);
										var D = E.prev;
										if (
											(M && ((D = c(e, D, M)), (x += M.length)),
											u(e, D, C),
											(E = c(e, D, new o(d, g ? s.tokenize(O, g) : O, b, O))),
											N && c(e, E, N),
											C > 1)
										) {
											var j = { cause: d + "," + f, reach: I };
											a(t, e, i, E.prev, x, j),
												h && j.reach > h.reach && (h.reach = j.reach);
										}
									}
								}
							}
						}
				}
				function l() {
					var t = { value: null, prev: null, next: null },
						e = { value: null, prev: t, next: null };
					(t.next = e), (this.head = t), (this.tail = e), (this.length = 0);
				}
				function c(t, e, i) {
					var n = e.next,
						s = { value: i, prev: e, next: n };
					return (e.next = s), (n.prev = s), t.length++, s;
				}
				function u(t, e, i) {
					for (var n = e.next, s = 0; s < i && n !== t.tail; s++) n = n.next;
					(e.next = n), (n.prev = e), (t.length -= s);
				}
				if (
					((t.Prism = s),
					(o.stringify = function t(e, i) {
						if ("string" == typeof e) return e;
						if (Array.isArray(e)) {
							var n = "";
							return (
								e.forEach(function (e) {
									n += t(e, i);
								}),
								n
							);
						}
						var o = {
								type: e.type,
								content: t(e.content, i),
								tag: "span",
								classes: ["token", e.type],
								attributes: {},
								language: i,
							},
							r = e.alias;
						r &&
							(Array.isArray(r)
								? Array.prototype.push.apply(o.classes, r)
								: o.classes.push(r)),
							s.hooks.run("wrap", o);
						var a = "";
						for (var l in o.attributes)
							a +=
								" " +
								l +
								'="' +
								(o.attributes[l] || "").replace(/"/g, "&quot;") +
								'"';
						return (
							"<" +
							o.tag +
							' class="' +
							o.classes.join(" ") +
							'"' +
							a +
							">" +
							o.content +
							"</" +
							o.tag +
							">"
						);
					}),
					!t.document)
				)
					return t.addEventListener
						? (s.disableWorkerMessageHandler ||
								t.addEventListener(
									"message",
									function (e) {
										var i = JSON.parse(e.data),
											n = i.language,
											o = i.code,
											r = i.immediateClose;
										t.postMessage(s.highlight(o, s.languages[n], n)),
											r && t.close();
									},
									!1
								),
						  s)
						: s;
				var h = s.util.currentScript();
				function d() {
					s.manual || s.highlightAll();
				}
				if (
					(h &&
						((s.filename = h.src),
						h.hasAttribute("data-manual") && (s.manual = !0)),
					!s.manual)
				) {
					var p = document.readyState;
					"loading" === p || ("interactive" === p && h && h.defer)
						? document.addEventListener("DOMContentLoaded", d)
						: window.requestAnimationFrame
						? window.requestAnimationFrame(d)
						: window.setTimeout(d, 16);
				}
				return s;
			})(
				"undefined" != typeof window
					? window
					: "undefined" != typeof WorkerGlobalScope &&
					  self instanceof WorkerGlobalScope
					? self
					: {}
			);
			t.exports && (t.exports = n),
				void 0 !== i.g && (i.g.Prism = n),
				(n.languages.markup = {
					comment: /<!--[\s\S]*?-->/,
					prolog: /<\?[\s\S]+?\?>/,
					doctype: {
						pattern:
							/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
						greedy: !0,
						inside: {
							"internal-subset": {
								pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
								lookbehind: !0,
								greedy: !0,
								inside: null,
							},
							string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
							punctuation: /^<!|>$|[[\]]/,
							"doctype-tag": /^DOCTYPE/,
							name: /[^\s<>'"]+/,
						},
					},
					cdata: /<!\[CDATA\[[\s\S]*?\]\]>/i,
					tag: {
						pattern:
							/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
						greedy: !0,
						inside: {
							tag: {
								pattern: /^<\/?[^\s>\/]+/,
								inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
							},
							"special-attr": [],
							"attr-value": {
								pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
								inside: {
									punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
								},
							},
							punctuation: /\/?>/,
							"attr-name": {
								pattern: /[^\s>\/]+/,
								inside: { namespace: /^[^\s>\/:]+:/ },
							},
						},
					},
					entity: [
						{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
						/&#x?[\da-f]{1,8};/i,
					],
				}),
				(n.languages.markup.tag.inside["attr-value"].inside.entity =
					n.languages.markup.entity),
				(n.languages.markup.doctype.inside["internal-subset"].inside =
					n.languages.markup),
				n.hooks.add("wrap", function (t) {
					"entity" === t.type &&
						(t.attributes.title = t.content.replace(/&amp;/, "&"));
				}),
				Object.defineProperty(n.languages.markup.tag, "addInlined", {
					value: function (t, e) {
						var i = {};
						(i["language-" + e] = {
							pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
							lookbehind: !0,
							inside: n.languages[e],
						}),
							(i.cdata = /^<!\[CDATA\[|\]\]>$/i);
						var s = {
							"included-cdata": {
								pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
								inside: i,
							},
						};
						s["language-" + e] = { pattern: /[\s\S]+/, inside: n.languages[e] };
						var o = {};
						(o[t] = {
							pattern: RegExp(
								/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
									/__/g,
									function () {
										return t;
									}
								),
								"i"
							),
							lookbehind: !0,
							greedy: !0,
							inside: s,
						}),
							n.languages.insertBefore("markup", "cdata", o);
					},
				}),
				Object.defineProperty(n.languages.markup.tag, "addAttribute", {
					value: function (t, e) {
						n.languages.markup.tag.inside["special-attr"].push({
							pattern: RegExp(
								/(^|["'\s])/.source +
									"(?:" +
									t +
									")" +
									/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
								"i"
							),
							lookbehind: !0,
							inside: {
								"attr-name": /^[^\s=]+/,
								"attr-value": {
									pattern: /=[\s\S]+/,
									inside: {
										value: {
											pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
											lookbehind: !0,
											alias: [e, "language-" + e],
											inside: n.languages[e],
										},
										punctuation: [
											{ pattern: /^=/, alias: "attr-equals" },
											/"|'/,
										],
									},
								},
							},
						});
					},
				}),
				(n.languages.html = n.languages.markup),
				(n.languages.mathml = n.languages.markup),
				(n.languages.svg = n.languages.markup),
				(n.languages.xml = n.languages.extend("markup", {})),
				(n.languages.ssml = n.languages.xml),
				(n.languages.atom = n.languages.xml),
				(n.languages.rss = n.languages.xml),
				(function (t) {
					var e =
						/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
					(t.languages.css = {
						comment: /\/\*[\s\S]*?\*\//,
						atrule: {
							pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
							inside: {
								rule: /^@[\w-]+/,
								"selector-function-argument": {
									pattern:
										/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
									lookbehind: !0,
									alias: "selector",
								},
								keyword: {
									pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
									lookbehind: !0,
								},
							},
						},
						url: {
							pattern: RegExp(
								"\\burl\\((?:" +
									e.source +
									"|" +
									/(?:[^\\\r\n()"']|\\[\s\S])*/.source +
									")\\)",
								"i"
							),
							greedy: !0,
							inside: {
								function: /^url/i,
								punctuation: /^\(|\)$/,
								string: { pattern: RegExp("^" + e.source + "$"), alias: "url" },
							},
						},
						selector: {
							pattern: RegExp(
								"(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" +
									e.source +
									")*(?=\\s*\\{)"
							),
							lookbehind: !0,
						},
						string: { pattern: e, greedy: !0 },
						property: {
							pattern:
								/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
							lookbehind: !0,
						},
						important: /!important\b/i,
						function: {
							pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
							lookbehind: !0,
						},
						punctuation: /[(){};:,]/,
					}),
						(t.languages.css.atrule.inside.rest = t.languages.css);
					var i = t.languages.markup;
					i &&
						(i.tag.addInlined("style", "css"),
						i.tag.addAttribute("style", "css"));
				})(n),
				(n.languages.clike = {
					comment: [
						{
							pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
							lookbehind: !0,
							greedy: !0,
						},
						{ pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
					],
					string: {
						pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
						greedy: !0,
					},
					"class-name": {
						pattern:
							/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
						lookbehind: !0,
						inside: { punctuation: /[.\\]/ },
					},
					keyword:
						/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
					boolean: /\b(?:true|false)\b/,
					function: /\b\w+(?=\()/,
					number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
					operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
					punctuation: /[{}[\];(),.:]/,
				}),
				(n.languages.javascript = n.languages.extend("clike", {
					"class-name": [
						n.languages.clike["class-name"],
						{
							pattern:
								/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
							lookbehind: !0,
						},
					],
					keyword: [
						{ pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
						{
							pattern:
								/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
							lookbehind: !0,
						},
					],
					function:
						/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
					number:
						/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
					operator:
						/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
				})),
				(n.languages.javascript["class-name"][0].pattern =
					/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
				n.languages.insertBefore("javascript", "keyword", {
					regex: {
						pattern:
							/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
						lookbehind: !0,
						greedy: !0,
						inside: {
							"regex-source": {
								pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
								lookbehind: !0,
								alias: "language-regex",
								inside: n.languages.regex,
							},
							"regex-delimiter": /^\/|\/$/,
							"regex-flags": /^[a-z]+$/,
						},
					},
					"function-variable": {
						pattern:
							/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
						alias: "function",
					},
					parameter: [
						{
							pattern:
								/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
							lookbehind: !0,
							inside: n.languages.javascript,
						},
						{
							pattern:
								/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
							lookbehind: !0,
							inside: n.languages.javascript,
						},
						{
							pattern:
								/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
							lookbehind: !0,
							inside: n.languages.javascript,
						},
						{
							pattern:
								/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
							lookbehind: !0,
							inside: n.languages.javascript,
						},
					],
					constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
				}),
				n.languages.insertBefore("javascript", "string", {
					hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
					"template-string": {
						pattern:
							/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
						greedy: !0,
						inside: {
							"template-punctuation": { pattern: /^`|`$/, alias: "string" },
							interpolation: {
								pattern:
									/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
								lookbehind: !0,
								inside: {
									"interpolation-punctuation": {
										pattern: /^\$\{|\}$/,
										alias: "punctuation",
									},
									rest: n.languages.javascript,
								},
							},
							string: /[\s\S]+/,
						},
					},
				}),
				n.languages.markup &&
					(n.languages.markup.tag.addInlined("script", "javascript"),
					n.languages.markup.tag.addAttribute(
						/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
							.source,
						"javascript"
					)),
				(n.languages.js = n.languages.javascript),
				(function () {
					if (void 0 !== n && "undefined" != typeof document) {
						Element.prototype.matches ||
							(Element.prototype.matches =
								Element.prototype.msMatchesSelector ||
								Element.prototype.webkitMatchesSelector);
						var t = {
								js: "javascript",
								py: "python",
								rb: "ruby",
								ps1: "powershell",
								psm1: "powershell",
								sh: "bash",
								bat: "batch",
								h: "c",
								tex: "latex",
							},
							e = "data-src-status",
							i =
								'pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])',
							s = /\blang(?:uage)?-([\w-]+)\b/i;
						n.hooks.add("before-highlightall", function (t) {
							t.selector += ", " + i;
						}),
							n.hooks.add("before-sanity-check", function (s) {
								var o = s.element;
								if (o.matches(i)) {
									(s.code = ""), o.setAttribute(e, "loading");
									var a = o.appendChild(document.createElement("CODE"));
									a.textContent = "Loading…";
									var l = o.getAttribute("data-src"),
										c = s.language;
									if ("none" === c) {
										var u = (/\.(\w+)$/.exec(l) || [, "none"])[1];
										c = t[u] || u;
									}
									r(a, c), r(o, c);
									var h = n.plugins.autoloader;
									h && h.loadLanguages(c);
									var d = new XMLHttpRequest();
									d.open("GET", l, !0),
										(d.onreadystatechange = function () {
											4 == d.readyState &&
												(d.status < 400 && d.responseText
													? (o.setAttribute(e, "loaded"),
													  (a.textContent = d.responseText),
													  n.highlightElement(a))
													: (o.setAttribute(e, "failed"),
													  d.status >= 400
															? (a.textContent =
																	"✖ Error " +
																	d.status +
																	" while fetching file: " +
																	d.statusText)
															: (a.textContent =
																	"✖ Error: File does not exist or is empty")));
										}),
										d.send(null);
								}
							}),
							(n.plugins.fileHighlight = {
								highlight: function (t) {
									for (
										var e, s = (t || document).querySelectorAll(i), o = 0;
										(e = s[o++]);

									)
										n.highlightElement(e);
								},
							});
						var o = !1;
						n.fileHighlight = function () {
							o ||
								(console.warn(
									"Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."
								),
								(o = !0)),
								n.plugins.fileHighlight.highlight.apply(this, arguments);
						};
					}
					function r(t, e) {
						var i = t.className;
						(i = i.replace(s, " ") + " language-" + e),
							(t.className = i.replace(/\s+/g, " ").trim());
					}
				})();
		},
		2: function (t, e, i) {
			var n, s;
			window.Element &&
				!Element.prototype.closest &&
				(Element.prototype.closest = function (t) {
					var e,
						i = (this.document || this.ownerDocument).querySelectorAll(t),
						n = this;
					do {
						for (e = i.length; 0 <= --e && i.item(e) !== n; );
					} while (e < 0 && (n = n.parentElement));
					return n;
				}),
				(function () {
					function t(t, e) {
						e = e || { bubbles: !1, cancelable: !1, detail: void 0 };
						var i = document.createEvent("CustomEvent");
						return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i;
					}
					"function" != typeof window.CustomEvent &&
						((t.prototype = window.Event.prototype), (window.CustomEvent = t));
				})(),
				(function () {
					for (
						var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0;
						i < e.length && !window.requestAnimationFrame;
						++i
					)
						(window.requestAnimationFrame =
							window[e[i] + "RequestAnimationFrame"]),
							(window.cancelAnimationFrame =
								window[e[i] + "CancelAnimationFrame"] ||
								window[e[i] + "CancelRequestAnimationFrame"]);
					window.requestAnimationFrame ||
						(window.requestAnimationFrame = function (e, i) {
							var n = new Date().getTime(),
								s = Math.max(0, 16 - (n - t)),
								o = window.setTimeout(function () {
									e(n + s);
								}, s);
							return (t = n + s), o;
						}),
						window.cancelAnimationFrame ||
							(window.cancelAnimationFrame = function (t) {
								clearTimeout(t);
							});
				})(),
				(s =
					void 0 !== i.g ? i.g : "undefined" != typeof window ? window : this),
				void 0 ===
					(n = function () {
						return (function (t) {
							"use strict";
							var e = {
									ignore: "[data-scroll-ignore]",
									header: null,
									topOnEmptyHash: !0,
									speed: 500,
									speedAsDuration: !1,
									durationMax: null,
									durationMin: null,
									clip: !0,
									offset: 0,
									easing: "easeInOutCubic",
									customEasing: null,
									updateURL: !0,
									popstate: !0,
									emitEvents: !0,
								},
								i = function () {
									var t = {};
									return (
										Array.prototype.forEach.call(arguments, function (e) {
											for (var i in e) {
												if (!e.hasOwnProperty(i)) return;
												t[i] = e[i];
											}
										}),
										t
									);
								},
								n = function (t) {
									"#" === t.charAt(0) && (t = t.substr(1));
									for (
										var e,
											i = String(t),
											n = i.length,
											s = -1,
											o = "",
											r = i.charCodeAt(0);
										++s < n;

									) {
										if (0 === (e = i.charCodeAt(s)))
											throw new InvalidCharacterError(
												"Invalid character: the input contains U+0000."
											);
										o +=
											(1 <= e && e <= 31) ||
											127 == e ||
											(0 === s && 48 <= e && e <= 57) ||
											(1 === s && 48 <= e && e <= 57 && 45 === r)
												? "\\" + e.toString(16) + " "
												: 128 <= e ||
												  45 === e ||
												  95 === e ||
												  (48 <= e && e <= 57) ||
												  (65 <= e && e <= 90) ||
												  (97 <= e && e <= 122)
												? i.charAt(s)
												: "\\" + i.charAt(s);
									}
									return "#" + o;
								},
								s = function () {
									return Math.max(
										document.body.scrollHeight,
										document.documentElement.scrollHeight,
										document.body.offsetHeight,
										document.documentElement.offsetHeight,
										document.body.clientHeight,
										document.documentElement.clientHeight
									);
								},
								o = function (e, i, n) {
									0 === e && document.body.focus(),
										n ||
											(e.focus(),
											document.activeElement !== e &&
												(e.setAttribute("tabindex", "-1"),
												e.focus(),
												(e.style.outline = "none")),
											t.scrollTo(0, i));
								},
								r = function (e, i, n, s) {
									if (i.emitEvents && "function" == typeof t.CustomEvent) {
										var o = new CustomEvent(e, {
											bubbles: !0,
											detail: { anchor: n, toggle: s },
										});
										document.dispatchEvent(o);
									}
								};
							return function (a, l) {
								var c,
									u,
									h,
									d,
									p = {
										cancelScroll: function (t) {
											cancelAnimationFrame(d),
												(d = null),
												t || r("scrollCancel", c);
										},
										animateScroll: function (n, a, l) {
											p.cancelScroll();
											var u = i(c || e, l || {}),
												f =
													"[object Number]" ===
													Object.prototype.toString.call(n),
												m = f || !n.tagName ? null : n;
											if (f || m) {
												var g = t.pageYOffset;
												u.header &&
													!h &&
													(h = document.querySelector(u.header));
												var y,
													v,
													b,
													w,
													_,
													E,
													x,
													k,
													T = (function (e) {
														return e
															? ((i = e),
															  parseInt(t.getComputedStyle(i).height, 10) +
																	e.offsetTop)
															: 0;
														var i;
													})(h),
													C = f
														? n
														: (function (e, i, n, o) {
																var r = 0;
																if (e.offsetParent)
																	for (
																		;
																		(r += e.offsetTop), (e = e.offsetParent);

																	);
																return (
																	(r = Math.max(r - i - n, 0)),
																	o && (r = Math.min(r, s() - t.innerHeight)),
																	r
																);
														  })(
																m,
																T,
																parseInt(
																	"function" == typeof u.offset
																		? u.offset(n, a)
																		: u.offset,
																	10
																),
																u.clip
														  ),
													S = C - g,
													A = s(),
													L = 0,
													P =
														((y = S),
														(b = (v = u).speedAsDuration
															? v.speed
															: Math.abs((y / 1e3) * v.speed)),
														v.durationMax && b > v.durationMax
															? v.durationMax
															: v.durationMin && b < v.durationMin
															? v.durationMin
															: parseInt(b, 10)),
													O = function (e) {
														var i, s, l;
														w || (w = e),
															(L += e - w),
															(E =
																g +
																S *
																	((s = _ =
																		1 < (_ = 0 === P ? 0 : L / P) ? 1 : _),
																	"easeInQuad" === (i = u).easing &&
																		(l = s * s),
																	"easeOutQuad" === i.easing &&
																		(l = s * (2 - s)),
																	"easeInOutQuad" === i.easing &&
																		(l =
																			s < 0.5
																				? 2 * s * s
																				: (4 - 2 * s) * s - 1),
																	"easeInCubic" === i.easing && (l = s * s * s),
																	"easeOutCubic" === i.easing &&
																		(l = --s * s * s + 1),
																	"easeInOutCubic" === i.easing &&
																		(l =
																			s < 0.5
																				? 4 * s * s * s
																				: (s - 1) * (2 * s - 2) * (2 * s - 2) +
																				  1),
																	"easeInQuart" === i.easing &&
																		(l = s * s * s * s),
																	"easeOutQuart" === i.easing &&
																		(l = 1 - --s * s * s * s),
																	"easeInOutQuart" === i.easing &&
																		(l =
																			s < 0.5
																				? 8 * s * s * s * s
																				: 1 - 8 * --s * s * s * s),
																	"easeInQuint" === i.easing &&
																		(l = s * s * s * s * s),
																	"easeOutQuint" === i.easing &&
																		(l = 1 + --s * s * s * s * s),
																	"easeInOutQuint" === i.easing &&
																		(l =
																			s < 0.5
																				? 16 * s * s * s * s * s
																				: 1 + 16 * --s * s * s * s * s),
																	i.customEasing && (l = i.customEasing(s)),
																	l || s)),
															t.scrollTo(0, Math.floor(E)),
															(function (e, i) {
																var s = t.pageYOffset;
																if (
																	e == i ||
																	s == i ||
																	(g < i && t.innerHeight + s) >= A
																)
																	return (
																		p.cancelScroll(!0),
																		o(n, i, f),
																		r("scrollStop", u, n, a),
																		!(d = w = null)
																	);
															})(E, C) ||
																((d = t.requestAnimationFrame(O)), (w = e));
													};
												0 === t.pageYOffset && t.scrollTo(0, 0),
													(x = n),
													(k = u),
													f ||
														(history.pushState &&
															k.updateURL &&
															history.pushState(
																{
																	smoothScroll: JSON.stringify(k),
																	anchor: x.id,
																},
																document.title,
																x === document.documentElement
																	? "#top"
																	: "#" + x.id
															)),
													"matchMedia" in t &&
													t.matchMedia("(prefers-reduced-motion)").matches
														? o(n, Math.floor(C), !1)
														: (r("scrollStart", u, n, a),
														  p.cancelScroll(!0),
														  t.requestAnimationFrame(O));
											}
										},
									},
									f = function (e) {
										if (
											!e.defaultPrevented &&
											!(
												0 !== e.button ||
												e.metaKey ||
												e.ctrlKey ||
												e.shiftKey
											) &&
											"closest" in e.target &&
											(u = e.target.closest(a)) &&
											"a" === u.tagName.toLowerCase() &&
											!e.target.closest(c.ignore) &&
											u.hostname === t.location.hostname &&
											u.pathname === t.location.pathname &&
											/#/.test(u.href)
										) {
											var i, s;
											try {
												i = n(decodeURIComponent(u.hash));
											} catch (e) {
												i = n(u.hash);
											}
											if ("#" === i) {
												if (!c.topOnEmptyHash) return;
												s = document.documentElement;
											} else s = document.querySelector(i);
											(s = s || "#top" !== i ? s : document.documentElement) &&
												(e.preventDefault(),
												(function (e) {
													if (
														history.replaceState &&
														e.updateURL &&
														!history.state
													) {
														var i = t.location.hash;
														(i = i || ""),
															history.replaceState(
																{
																	smoothScroll: JSON.stringify(e),
																	anchor: i || t.pageYOffset,
																},
																document.title,
																i || t.location.href
															);
													}
												})(c),
												p.animateScroll(s, u));
										}
									},
									m = function (t) {
										if (
											null !== history.state &&
											history.state.smoothScroll &&
											history.state.smoothScroll === JSON.stringify(c)
										) {
											var e = history.state.anchor;
											("string" == typeof e &&
												e &&
												!(e = document.querySelector(
													n(history.state.anchor)
												))) ||
												p.animateScroll(e, null, { updateURL: !1 });
										}
									};
								return (
									(p.destroy = function () {
										c &&
											(document.removeEventListener("click", f, !1),
											t.removeEventListener("popstate", m, !1),
											p.cancelScroll(),
											(d = h = u = c = null));
									}),
									(function () {
										if (
											!(
												"querySelector" in document &&
												"addEventListener" in t &&
												"requestAnimationFrame" in t &&
												"closest" in t.Element.prototype
											)
										)
											throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
										p.destroy(),
											(c = i(e, l || {})),
											(h = c.header ? document.querySelector(c.header) : null),
											document.addEventListener("click", f, !1),
											c.updateURL &&
												c.popstate &&
												t.addEventListener("popstate", m, !1);
									})(),
									p
								);
							};
						})(s);
					}.apply(e, [])) || (t.exports = n);
		},
		740: (t, e, i) => {
			"use strict";
			i.d(e, { W: () => F });
			var n = window,
				s =
					n.requestAnimationFrame ||
					n.webkitRequestAnimationFrame ||
					n.mozRequestAnimationFrame ||
					n.msRequestAnimationFrame ||
					function (t) {
						return setTimeout(t, 16);
					},
				o = window,
				r =
					o.cancelAnimationFrame ||
					o.mozCancelAnimationFrame ||
					function (t) {
						clearTimeout(t);
					};
			function a() {
				for (
					var t, e, i, n = arguments[0] || {}, s = 1, o = arguments.length;
					s < o;
					s++
				)
					if (null !== (t = arguments[s]))
						for (e in t) n !== (i = t[e]) && void 0 !== i && (n[e] = i);
				return n;
			}
			function l(t) {
				return ["true", "false"].indexOf(t) >= 0 ? JSON.parse(t) : t;
			}
			function c(t, e, i, n) {
				if (n)
					try {
						t.setItem(e, i);
					} catch (t) {}
				return i;
			}
			function u() {
				var t = document,
					e = t.body;
				return e || ((e = t.createElement("body")).fake = !0), e;
			}
			var h = document.documentElement;
			function d(t) {
				var e = "";
				return (
					t.fake &&
						((e = h.style.overflow),
						(t.style.background = ""),
						(t.style.overflow = h.style.overflow = "hidden"),
						h.appendChild(t)),
					e
				);
			}
			function p(t, e) {
				t.fake && (t.remove(), (h.style.overflow = e), h.offsetHeight);
			}
			function f(t, e, i, n) {
				"insertRule" in t
					? t.insertRule(e + "{" + i + "}", n)
					: t.addRule(e, i, n);
			}
			function m(t) {
				return ("insertRule" in t ? t.cssRules : t.rules).length;
			}
			function g(t, e, i) {
				for (var n = 0, s = t.length; n < s; n++) e.call(i, t[n], n);
			}
			var y = "classList" in document.createElement("_"),
				v = y
					? function (t, e) {
							return t.classList.contains(e);
					  }
					: function (t, e) {
							return t.className.indexOf(e) >= 0;
					  },
				b = y
					? function (t, e) {
							v(t, e) || t.classList.add(e);
					  }
					: function (t, e) {
							v(t, e) || (t.className += " " + e);
					  },
				w = y
					? function (t, e) {
							v(t, e) && t.classList.remove(e);
					  }
					: function (t, e) {
							v(t, e) && (t.className = t.className.replace(e, ""));
					  };
			function _(t, e) {
				return t.hasAttribute(e);
			}
			function E(t, e) {
				return t.getAttribute(e);
			}
			function x(t) {
				return void 0 !== t.item;
			}
			function k(t, e) {
				if (
					((t = x(t) || t instanceof Array ? t : [t]),
					"[object Object]" === Object.prototype.toString.call(e))
				)
					for (var i = t.length; i--; )
						for (var n in e) t[i].setAttribute(n, e[n]);
			}
			function T(t, e) {
				t = x(t) || t instanceof Array ? t : [t];
				for (
					var i = (e = e instanceof Array ? e : [e]).length, n = t.length;
					n--;

				)
					for (var s = i; s--; ) t[n].removeAttribute(e[s]);
			}
			function C(t) {
				for (var e = [], i = 0, n = t.length; i < n; i++) e.push(t[i]);
				return e;
			}
			function S(t, e) {
				"none" !== t.style.display && (t.style.display = "none");
			}
			function A(t, e) {
				"none" === t.style.display && (t.style.display = "");
			}
			function L(t) {
				return "none" !== window.getComputedStyle(t).display;
			}
			function P(t) {
				if ("string" == typeof t) {
					var e = [t],
						i = t.charAt(0).toUpperCase() + t.substr(1);
					["Webkit", "Moz", "ms", "O"].forEach(function (n) {
						("ms" === n && "transform" !== t) || e.push(n + i);
					}),
						(t = e);
				}
				for (
					var n = document.createElement("fakeelement"), s = (t.length, 0);
					s < t.length;
					s++
				) {
					var o = t[s];
					if (void 0 !== n.style[o]) return o;
				}
				return !1;
			}
			function O(t, e) {
				var i = !1;
				return (
					/^Webkit/.test(t)
						? (i = "webkit" + e + "End")
						: /^O/.test(t)
						? (i = "o" + e + "End")
						: t && (i = e.toLowerCase() + "end"),
					i
				);
			}
			var M = !1;
			try {
				var N = Object.defineProperty({}, "passive", {
					get: function () {
						M = !0;
					},
				});
				window.addEventListener("test", null, N);
			} catch (t) {}
			var I = !!M && { passive: !0 };
			function D(t, e, i) {
				for (var n in e) {
					var s = ["touchstart", "touchmove"].indexOf(n) >= 0 && !i && I;
					t.addEventListener(n, e[n], s);
				}
			}
			function j(t, e) {
				for (var i in e) {
					var n = ["touchstart", "touchmove"].indexOf(i) >= 0 && I;
					t.removeEventListener(i, e[i], n);
				}
			}
			function H() {
				return {
					topics: {},
					on: function (t, e) {
						(this.topics[t] = this.topics[t] || []), this.topics[t].push(e);
					},
					off: function (t, e) {
						if (this.topics[t])
							for (var i = 0; i < this.topics[t].length; i++)
								if (this.topics[t][i] === e) {
									this.topics[t].splice(i, 1);
									break;
								}
					},
					emit: function (t, e) {
						(e.type = t),
							this.topics[t] &&
								this.topics[t].forEach(function (i) {
									i(e, t);
								});
					},
				};
			}
			Object.keys ||
				(Object.keys = function (t) {
					var e = [];
					for (var i in t)
						Object.prototype.hasOwnProperty.call(t, i) && e.push(i);
					return e;
				}),
				"remove" in Element.prototype ||
					(Element.prototype.remove = function () {
						this.parentNode && this.parentNode.removeChild(this);
					});
			var F = function (t) {
				t = a(
					{
						container: ".slider",
						mode: "carousel",
						axis: "horizontal",
						items: 1,
						gutter: 0,
						edgePadding: 0,
						fixedWidth: !1,
						autoWidth: !1,
						viewportMax: !1,
						slideBy: 1,
						center: !1,
						controls: !0,
						controlsPosition: "top",
						controlsText: ["prev", "next"],
						controlsContainer: !1,
						prevButton: !1,
						nextButton: !1,
						nav: !0,
						navPosition: "top",
						navContainer: !1,
						navAsThumbnails: !1,
						arrowKeys: !1,
						speed: 300,
						autoplay: !1,
						autoplayPosition: "top",
						autoplayTimeout: 5e3,
						autoplayDirection: "forward",
						autoplayText: ["start", "stop"],
						autoplayHoverPause: !1,
						autoplayButton: !1,
						autoplayButtonOutput: !0,
						autoplayResetOnVisibility: !0,
						animateIn: "tns-fadeIn",
						animateOut: "tns-fadeOut",
						animateNormal: "tns-normal",
						animateDelay: !1,
						loop: !0,
						rewind: !1,
						autoHeight: !1,
						responsive: !1,
						lazyload: !1,
						lazyloadSelector: ".tns-lazy-img",
						touch: !0,
						mouseDrag: !1,
						swipeAngle: 15,
						nested: !1,
						preventActionWhenRunning: !1,
						preventScrollOnTouch: !1,
						freezable: !0,
						onInit: !1,
						useLocalStorage: !0,
						nonce: !1,
					},
					t || {}
				);
				var e = document,
					i = window,
					n = { ENTER: 13, SPACE: 32, LEFT: 37, RIGHT: 39 },
					o = {},
					h = t.useLocalStorage;
				if (h) {
					var y = navigator.userAgent,
						x = new Date();
					try {
						(o = i.localStorage)
							? (o.setItem(x, x), (h = o.getItem(x) == x), o.removeItem(x))
							: (h = !1),
							h || (o = {});
					} catch (t) {
						h = !1;
					}
					h &&
						(o.tnsApp &&
							o.tnsApp !== y &&
							[
								"tC",
								"tPL",
								"tMQ",
								"tTf",
								"t3D",
								"tTDu",
								"tTDe",
								"tADu",
								"tADe",
								"tTE",
								"tAE",
							].forEach(function (t) {
								o.removeItem(t);
							}),
						(localStorage.tnsApp = y));
				}
				var M = o.tC
						? l(o.tC)
						: c(
								o,
								"tC",
								(function () {
									var t = document,
										e = u(),
										i = d(e),
										n = t.createElement("div"),
										s = !1;
									e.appendChild(n);
									try {
										for (
											var o,
												r = "(10px * 10)",
												a = ["calc" + r, "-moz-calc" + r, "-webkit-calc" + r],
												l = 0;
											l < 3;
											l++
										)
											if (
												((o = a[l]), (n.style.width = o), 100 === n.offsetWidth)
											) {
												s = o.replace(r, "");
												break;
											}
									} catch (t) {}
									return e.fake ? p(e, i) : n.remove(), s;
								})(),
								h
						  ),
					N = o.tPL
						? l(o.tPL)
						: c(
								o,
								"tPL",
								(function () {
									var t,
										e = document,
										i = u(),
										n = d(i),
										s = e.createElement("div"),
										o = e.createElement("div"),
										r = "";
									(s.className = "tns-t-subp2"), (o.className = "tns-t-ct");
									for (var a = 0; a < 70; a++) r += "<div></div>";
									return (
										(o.innerHTML = r),
										s.appendChild(o),
										i.appendChild(s),
										(t =
											Math.abs(
												s.getBoundingClientRect().left -
													o.children[67].getBoundingClientRect().left
											) < 2),
										i.fake ? p(i, n) : s.remove(),
										t
									);
								})(),
								h
						  ),
					I = o.tMQ
						? l(o.tMQ)
						: c(
								o,
								"tMQ",
								(function () {
									if (window.matchMedia || window.msMatchMedia) return !0;
									var t,
										e = document,
										i = u(),
										n = d(i),
										s = e.createElement("div"),
										o = e.createElement("style"),
										r =
											"@media all and (min-width:1px){.tns-mq-test{position:absolute}}";
									return (
										(o.type = "text/css"),
										(s.className = "tns-mq-test"),
										i.appendChild(o),
										i.appendChild(s),
										o.styleSheet
											? (o.styleSheet.cssText = r)
											: o.appendChild(e.createTextNode(r)),
										(t = window.getComputedStyle
											? window.getComputedStyle(s).position
											: s.currentStyle.position),
										i.fake ? p(i, n) : s.remove(),
										"absolute" === t
									);
								})(),
								h
						  ),
					z = o.tTf ? l(o.tTf) : c(o, "tTf", P("transform"), h),
					R = o.t3D
						? l(o.t3D)
						: c(
								o,
								"t3D",
								(function (t) {
									if (!t) return !1;
									if (!window.getComputedStyle) return !1;
									var e,
										i = document,
										n = u(),
										s = d(n),
										o = i.createElement("p"),
										r =
											t.length > 9
												? "-" + t.slice(0, -9).toLowerCase() + "-"
												: "";
									return (
										(r += "transform"),
										n.insertBefore(o, null),
										(o.style[t] = "translate3d(1px,1px,1px)"),
										(e = window.getComputedStyle(o).getPropertyValue(r)),
										n.fake ? p(n, s) : o.remove(),
										void 0 !== e && e.length > 0 && "none" !== e
									);
								})(z),
								h
						  ),
					B = o.tTDu ? l(o.tTDu) : c(o, "tTDu", P("transitionDuration"), h),
					$ = o.tTDe ? l(o.tTDe) : c(o, "tTDe", P("transitionDelay"), h),
					q = o.tADu ? l(o.tADu) : c(o, "tADu", P("animationDuration"), h),
					W = o.tADe ? l(o.tADe) : c(o, "tADe", P("animationDelay"), h),
					V = o.tTE ? l(o.tTE) : c(o, "tTE", O(B, "Transition"), h),
					U = o.tAE ? l(o.tAE) : c(o, "tAE", O(q, "Animation"), h),
					Y = i.console && "function" == typeof i.console.warn,
					Q = [
						"container",
						"controlsContainer",
						"prevButton",
						"nextButton",
						"navContainer",
						"autoplayButton",
					],
					K = {};
				if (
					(Q.forEach(function (i) {
						if ("string" == typeof t[i]) {
							var n = t[i],
								s = e.querySelector(n);
							if (((K[i] = n), !s || !s.nodeName))
								return void (Y && console.warn("Can't find", t[i]));
							t[i] = s;
						}
					}),
					!(t.container.children.length < 1))
				) {
					var X = t.responsive,
						G = t.nested,
						J = "carousel" === t.mode;
					if (X) {
						0 in X && ((t = a(t, X[0])), delete X[0]);
						var Z = {};
						for (var tt in X) {
							var et = X[tt];
							(et = "number" == typeof et ? { items: et } : et), (Z[tt] = et);
						}
						(X = Z), (Z = null);
					}
					if (
						(J ||
							(function t(e) {
								for (var i in e)
									J ||
										("slideBy" === i && (e[i] = "page"),
										"edgePadding" === i && (e[i] = !1),
										"autoHeight" === i && (e[i] = !1)),
										"responsive" === i && t(e[i]);
							})(t),
						!J)
					) {
						(t.axis = "horizontal"), (t.slideBy = "page"), (t.edgePadding = !1);
						var it = t.animateIn,
							nt = t.animateOut,
							st = t.animateDelay,
							ot = t.animateNormal;
					}
					var rt,
						at,
						lt = "horizontal" === t.axis,
						ct = e.createElement("div"),
						ut = e.createElement("div"),
						ht = t.container,
						dt = ht.parentNode,
						pt = ht.outerHTML,
						ft = ht.children,
						mt = ft.length,
						gt = Oi(),
						yt = !1;
					X && Ji(), J && (ht.className += " tns-vpfix");
					var vt,
						bt,
						wt,
						_t,
						Et,
						xt,
						kt,
						Tt,
						Ct = t.autoWidth,
						St = ji("fixedWidth"),
						At = ji("edgePadding"),
						Lt = ji("gutter"),
						Pt = Ii(),
						Ot = ji("center"),
						Mt = Ct ? 1 : Math.floor(ji("items")),
						Nt = ji("slideBy"),
						It = t.viewportMax || t.fixedWidthViewportWidth,
						Dt = ji("arrowKeys"),
						jt = ji("speed"),
						Ht = t.rewind,
						Ft = !Ht && t.loop,
						zt = ji("autoHeight"),
						Rt = ji("controls"),
						Bt = ji("controlsText"),
						$t = ji("nav"),
						qt = ji("touch"),
						Wt = ji("mouseDrag"),
						Vt = ji("autoplay"),
						Ut = ji("autoplayTimeout"),
						Yt = ji("autoplayText"),
						Qt = ji("autoplayHoverPause"),
						Kt = ji("autoplayResetOnVisibility"),
						Xt =
							(null,
							(kt = ji("nonce")),
							(Tt = document.createElement("style")),
							kt && Tt.setAttribute("nonce", kt),
							document.querySelector("head").appendChild(Tt),
							Tt.sheet ? Tt.sheet : Tt.styleSheet),
						Gt = t.lazyload,
						Jt = t.lazyloadSelector,
						Zt = [],
						te = Ft
							? ((Et = (function () {
									if (Ct || (St && !It)) return mt - 1;
									var e = St ? "fixedWidth" : "items",
										i = [];
									if (((St || t[e] < mt) && i.push(t[e]), X))
										for (var n in X) {
											var s = X[n][e];
											s && (St || s < mt) && i.push(s);
										}
									return (
										i.length || i.push(0),
										Math.ceil(
											St
												? It / Math.min.apply(null, i)
												: Math.max.apply(null, i)
										)
									);
							  })()),
							  (xt = J ? Math.ceil((5 * Et - mt) / 2) : 4 * Et - mt),
							  (xt = Math.max(Et, xt)),
							  Di("edgePadding") ? xt + 1 : xt)
							: 0,
						ee = J ? mt + 2 * te : mt + te,
						ie = !((!St && !Ct) || Ft),
						ne = St ? Tn() : null,
						se = !J || !Ft,
						oe = lt ? "left" : "top",
						re = "",
						ae = "",
						le = St
							? function () {
									return Ot && !Ft ? mt - 1 : Math.ceil(-ne / (St + Lt));
							  }
							: Ct
							? function () {
									for (var t = 0; t < ee; t++) if (vt[t] >= -ne) return t;
							  }
							: function () {
									return Ot && J && !Ft
										? mt - 1
										: Ft || J
										? Math.max(0, ee - Math.ceil(Mt))
										: ee - 1;
							  },
						ce = Ai(ji("startIndex")),
						ue = ce,
						he = (Si(), 0),
						de = Ct ? null : le(),
						pe = t.preventActionWhenRunning,
						fe = t.swipeAngle,
						me = !fe || "?",
						ge = !1,
						ye = t.onInit,
						ve = new H(),
						be = " tns-slider tns-" + t.mode,
						we =
							ht.id ||
							((_t = window.tnsId),
							(window.tnsId = _t ? _t + 1 : 1),
							"tns" + window.tnsId),
						_e = ji("disable"),
						Ee = !1,
						xe = t.freezable,
						ke = !(!xe || Ct) && Gi(),
						Te = !1,
						Ce = {
							click: In,
							keydown: function (t) {
								t = $n(t);
								var e = [n.LEFT, n.RIGHT].indexOf(t.keyCode);
								e >= 0 &&
									(0 === e
										? Qe.disabled || In(t, -1)
										: Ke.disabled || In(t, 1));
							},
						},
						Se = {
							click: function (t) {
								if (ge) {
									if (pe) return;
									Mn();
								}
								for (var e = qn((t = $n(t))); e !== Ze && !_(e, "data-nav"); )
									e = e.parentNode;
								if (_(e, "data-nav")) {
									var i = (ni = Number(E(e, "data-nav"))),
										n = St || Ct ? (i * mt) / ei : i * Mt;
									Nn(De ? i : Math.min(Math.ceil(n), mt - 1), t),
										si === i && (ui && zn(), (ni = -1));
								}
							},
							keydown: function (t) {
								t = $n(t);
								var i = e.activeElement;
								if (_(i, "data-nav")) {
									var s = [n.LEFT, n.RIGHT, n.ENTER, n.SPACE].indexOf(
											t.keyCode
										),
										o = Number(E(i, "data-nav"));
									s >= 0 &&
										(0 === s
											? o > 0 && Bn(Je[o - 1])
											: 1 === s
											? o < ei - 1 && Bn(Je[o + 1])
											: ((ni = o), Nn(o, t)));
								}
							},
						},
						Ae = {
							mouseover: function () {
								ui && (jn(), (hi = !0));
							},
							mouseout: function () {
								hi && (Dn(), (hi = !1));
							},
						},
						Le = {
							visibilitychange: function () {
								e.hidden ? ui && (jn(), (pi = !0)) : pi && (Dn(), (pi = !1));
							},
						},
						Pe = {
							keydown: function (t) {
								t = $n(t);
								var e = [n.LEFT, n.RIGHT].indexOf(t.keyCode);
								e >= 0 && In(t, 0 === e ? -1 : 1);
							},
						},
						Oe = {
							touchstart: Yn,
							touchmove: Qn,
							touchend: Xn,
							touchcancel: Xn,
						},
						Me = { mousedown: Yn, mousemove: Qn, mouseup: Xn, mouseleave: Xn },
						Ne = Di("controls"),
						Ie = Di("nav"),
						De = !!Ct || t.navAsThumbnails,
						je = Di("autoplay"),
						He = Di("touch"),
						Fe = Di("mouseDrag"),
						ze = "tns-slide-active",
						Re = "tns-slide-cloned",
						Be = "tns-complete",
						$e = {
							load: function (t) {
								ln(qn(t));
							},
							error: function (t) {
								var e;
								(e = qn(t)), b(e, "failed"), cn(e);
							},
						},
						qe = "force" === t.preventScrollOnTouch;
					if (Ne)
						var We,
							Ve,
							Ue = t.controlsContainer,
							Ye = t.controlsContainer ? t.controlsContainer.outerHTML : "",
							Qe = t.prevButton,
							Ke = t.nextButton,
							Xe = t.prevButton ? t.prevButton.outerHTML : "",
							Ge = t.nextButton ? t.nextButton.outerHTML : "";
					if (Ie)
						var Je,
							Ze = t.navContainer,
							ti = t.navContainer ? t.navContainer.outerHTML : "",
							ei = Ct ? mt : Jn(),
							ii = 0,
							ni = -1,
							si = Pi(),
							oi = si,
							ri = "tns-nav-active",
							ai = "Carousel Page ",
							li = " (Current Slide)";
					if (je)
						var ci,
							ui,
							hi,
							di,
							pi,
							fi = "forward" === t.autoplayDirection ? 1 : -1,
							mi = t.autoplayButton,
							gi = t.autoplayButton ? t.autoplayButton.outerHTML : "",
							yi = ["<span class='tns-visually-hidden'>", " animation</span>"];
					if (He || Fe)
						var vi,
							bi,
							wi = {},
							_i = {},
							Ei = !1,
							xi = lt
								? function (t, e) {
										return t.x - e.x;
								  }
								: function (t, e) {
										return t.y - e.y;
								  };
					Ct || Ci(_e || ke),
						z &&
							((oe = z),
							(re = "translate"),
							R
								? ((re += lt ? "3d(" : "3d(0px, "),
								  (ae = lt ? ", 0px, 0px)" : ", 0px)"))
								: ((re += lt ? "X(" : "Y("), (ae = ")"))),
						J && (ht.className = ht.className.replace("tns-vpfix", "")),
						(function () {
							if (
								(Di("gutter"),
								(ct.className = "tns-outer"),
								(ut.className = "tns-inner"),
								(ct.id = we + "-ow"),
								(ut.id = we + "-iw"),
								"" === ht.id && (ht.id = we),
								(be += N || Ct ? " tns-subpixel" : " tns-no-subpixel"),
								(be += M ? " tns-calc" : " tns-no-calc"),
								Ct && (be += " tns-autowidth"),
								(be += " tns-" + t.axis),
								(ht.className += be),
								J
									? (((rt = e.createElement("div")).id = we + "-mw"),
									  (rt.className = "tns-ovh"),
									  ct.appendChild(rt),
									  rt.appendChild(ut))
									: ct.appendChild(ut),
								zt && ((rt || ut).className += " tns-ah"),
								dt.insertBefore(ct, ht),
								ut.appendChild(ht),
								g(ft, function (t, e) {
									b(t, "tns-item"),
										t.id || (t.id = we + "-item" + e),
										!J && ot && b(t, ot),
										k(t, { "aria-hidden": "true", tabindex: "-1" });
								}),
								te)
							) {
								for (
									var i = e.createDocumentFragment(),
										n = e.createDocumentFragment(),
										s = te;
									s--;

								) {
									var o = s % mt,
										r = ft[o].cloneNode(!0);
									if (
										(b(r, Re), T(r, "id"), n.insertBefore(r, n.firstChild), J)
									) {
										var a = ft[mt - 1 - o].cloneNode(!0);
										b(a, Re), T(a, "id"), i.appendChild(a);
									}
								}
								ht.insertBefore(i, ht.firstChild),
									ht.appendChild(n),
									(ft = ht.children);
							}
						})(),
						(function () {
							if (!J)
								for (var e = ce, n = ce + Math.min(mt, Mt); e < n; e++) {
									var s = ft[e];
									(s.style.left = (100 * (e - ce)) / Mt + "%"),
										b(s, it),
										w(s, ot);
								}
							if (
								(lt &&
									(N || Ct
										? (f(
												Xt,
												"#" + we + " > .tns-item",
												"font-size:" + i.getComputedStyle(ft[0]).fontSize + ";",
												m(Xt)
										  ),
										  f(Xt, "#" + we, "font-size:0;", m(Xt)))
										: J &&
										  g(ft, function (t, e) {
												t.style.marginLeft = (function (t) {
													return M
														? M + "(" + 100 * t + "% / " + ee + ")"
														: (100 * t) / ee + "%";
												})(e);
										  })),
								I)
							) {
								if (B) {
									var o = rt && t.autoHeight ? $i(t.speed) : "";
									f(Xt, "#" + we + "-mw", o, m(Xt));
								}
								(o = Hi(
									t.edgePadding,
									t.gutter,
									t.fixedWidth,
									t.speed,
									t.autoHeight
								)),
									f(Xt, "#" + we + "-iw", o, m(Xt)),
									J &&
										((o =
											lt && !Ct
												? "width:" + Fi(t.fixedWidth, t.gutter, t.items) + ";"
												: ""),
										B && (o += $i(jt)),
										f(Xt, "#" + we, o, m(Xt))),
									(o = lt && !Ct ? zi(t.fixedWidth, t.gutter, t.items) : ""),
									t.gutter && (o += Ri(t.gutter)),
									J || (B && (o += $i(jt)), q && (o += qi(jt))),
									o && f(Xt, "#" + we + " > .tns-item", o, m(Xt));
							} else
								J && zt && (rt.style[B] = jt / 1e3 + "s"),
									(ut.style.cssText = Hi(At, Lt, St, zt)),
									J && lt && !Ct && (ht.style.width = Fi(St, Lt, Mt)),
									(o = lt && !Ct ? zi(St, Lt, Mt) : ""),
									Lt && (o += Ri(Lt)),
									o && f(Xt, "#" + we + " > .tns-item", o, m(Xt));
							if (X && I)
								for (var r in X) {
									r = parseInt(r);
									var a = X[r],
										l = ((o = ""), ""),
										c = "",
										u = "",
										h = "",
										d = Ct ? null : ji("items", r),
										p = ji("fixedWidth", r),
										y = ji("speed", r),
										v = ji("edgePadding", r),
										_ = ji("autoHeight", r),
										E = ji("gutter", r);
									B &&
										rt &&
										ji("autoHeight", r) &&
										"speed" in a &&
										(l = "#" + we + "-mw{" + $i(y) + "}"),
										("edgePadding" in a || "gutter" in a) &&
											(c = "#" + we + "-iw{" + Hi(v, E, p, y, _) + "}"),
										J &&
											lt &&
											!Ct &&
											("fixedWidth" in a ||
												"items" in a ||
												(St && "gutter" in a)) &&
											(u = "width:" + Fi(p, E, d) + ";"),
										B && "speed" in a && (u += $i(y)),
										u && (u = "#" + we + "{" + u + "}"),
										("fixedWidth" in a ||
											(St && "gutter" in a) ||
											(!J && "items" in a)) &&
											(h += zi(p, E, d)),
										"gutter" in a && (h += Ri(E)),
										!J &&
											"speed" in a &&
											(B && (h += $i(y)), q && (h += qi(y))),
										h && (h = "#" + we + " > .tns-item{" + h + "}"),
										(o = l + c + u + h) &&
											Xt.insertRule(
												"@media (min-width: " + r / 16 + "em) {" + o + "}",
												Xt.cssRules.length
											);
								}
						})(),
						Wi();
					var ki = Ft
							? J
								? function () {
										var t = he,
											e = de;
										(t += Nt),
											(e -= Nt),
											At
												? ((t += 1), (e -= 1))
												: St && (Pt + Lt) % (St + Lt) && (e -= 1),
											te && (ce > e ? (ce -= mt) : ce < t && (ce += mt));
								  }
								: function () {
										if (ce > de) for (; ce >= he + mt; ) ce -= mt;
										else if (ce < he) for (; ce <= de - mt; ) ce += mt;
								  }
							: function () {
									ce = Math.max(he, Math.min(de, ce));
							  },
						Ti = J
							? function () {
									var t, e, i, n, s, o, r, a, l, c, u;
									xn(ht, ""),
										B || !jt
											? (An(), (jt && L(ht)) || Mn())
											: ((t = ht),
											  (e = oe),
											  (i = re),
											  (n = ae),
											  (s = Cn()),
											  (o = jt),
											  (r = Mn),
											  (a = Math.min(o, 10)),
											  (l = s.indexOf("%") >= 0 ? "%" : "px"),
											  (s = s.replace(l, "")),
											  (c = Number(
													t.style[e]
														.replace(i, "")
														.replace(n, "")
														.replace(l, "")
											  )),
											  (u = ((s - c) / o) * a),
											  setTimeout(function s() {
													(o -= a),
														(c += u),
														(t.style[e] = i + c + l + n),
														o > 0 ? setTimeout(s, a) : r();
											  }, a)),
										lt || Gn();
							  }
							: function () {
									Zt = [];
									var t = {};
									(t[V] = t[U] = Mn),
										j(ft[ue], t),
										D(ft[ce], t),
										Ln(ue, it, nt, !0),
										Ln(ce, ot, it),
										(V && U && jt && L(ht)) || Mn();
							  };
					return {
						version: "2.9.3",
						getInfo: ts,
						events: ve,
						goTo: Nn,
						play: function () {
							Vt && !ui && (Fn(), (di = !1));
						},
						pause: function () {
							ui && (zn(), (di = !0));
						},
						isOn: yt,
						updateSliderHeight: mn,
						refresh: Wi,
						destroy: function () {
							if (
								((Xt.disabled = !0),
								Xt.ownerNode && Xt.ownerNode.remove(),
								j(i, { resize: Ki }),
								Dt && j(e, Pe),
								Ue && j(Ue, Ce),
								Ze && j(Ze, Se),
								j(ht, Ae),
								j(ht, Le),
								mi && j(mi, { click: Rn }),
								Vt && clearInterval(ci),
								J && V)
							) {
								var n = {};
								(n[V] = Mn), j(ht, n);
							}
							qt && j(ht, Oe), Wt && j(ht, Me);
							var s = [pt, Ye, Xe, Ge, ti, gi];
							for (var o in (Q.forEach(function (e, i) {
								var n = "container" === e ? ct : t[e];
								if ("object" == typeof n && n) {
									var o =
											!!n.previousElementSibling && n.previousElementSibling,
										r = n.parentNode;
									(n.outerHTML = s[i]),
										(t[e] = o ? o.nextElementSibling : r.firstElementChild);
								}
							}),
							(Q =
								it =
								nt =
								st =
								ot =
								lt =
								ct =
								ut =
								ht =
								dt =
								pt =
								ft =
								mt =
								at =
								gt =
								Ct =
								St =
								At =
								Lt =
								Pt =
								Mt =
								Nt =
								It =
								Dt =
								jt =
								Ht =
								Ft =
								zt =
								Xt =
								Gt =
								vt =
								Zt =
								te =
								ee =
								ie =
								ne =
								se =
								oe =
								re =
								ae =
								le =
								ce =
								ue =
								he =
								de =
								fe =
								me =
								ge =
								ye =
								ve =
								be =
								we =
								_e =
								Ee =
								xe =
								ke =
								Te =
								Ce =
								Se =
								Ae =
								Le =
								Pe =
								Oe =
								Me =
								Ne =
								Ie =
								De =
								je =
								He =
								Fe =
								ze =
								Be =
								$e =
								bt =
								Rt =
								Bt =
								Ue =
								Ye =
								Qe =
								Ke =
								We =
								Ve =
								$t =
								Ze =
								ti =
								Je =
								ei =
								ii =
								ni =
								si =
								oi =
								ri =
								ai =
								li =
								Vt =
								Ut =
								fi =
								Yt =
								Qt =
								mi =
								gi =
								Kt =
								yi =
								ci =
								ui =
								hi =
								di =
								pi =
								wi =
								_i =
								vi =
								Ei =
								bi =
								xi =
								qt =
								Wt =
									null),
							this))
								"rebuild" !== o && (this[o] = null);
							yt = !1;
						},
						rebuild: function () {
							return F(a(t, K));
						},
					};
				}
				function Ci(t) {
					t && (Rt = $t = qt = Wt = Dt = Vt = Qt = Kt = !1);
				}
				function Si() {
					for (var t = J ? ce - te : ce; t < 0; ) t += mt;
					return (t % mt) + 1;
				}
				function Ai(t) {
					return (
						(t = t ? Math.max(0, Math.min(Ft ? mt - 1 : mt - Mt, t)) : 0),
						J ? t + te : t
					);
				}
				function Li(t) {
					for (null == t && (t = ce), J && (t -= te); t < 0; ) t += mt;
					return Math.floor(t % mt);
				}
				function Pi() {
					var t,
						e = Li();
					return (
						(t = De
							? e
							: St || Ct
							? Math.ceil(((e + 1) * ei) / mt - 1)
							: Math.floor(e / Mt)),
						!Ft && J && ce === de && (t = ei - 1),
						t
					);
				}
				function Oi() {
					return (
						i.innerWidth || e.documentElement.clientWidth || e.body.clientWidth
					);
				}
				function Mi(t) {
					return "top" === t ? "afterbegin" : "beforeend";
				}
				function Ni(t) {
					if (null != t) {
						var i,
							n,
							s = e.createElement("div");
						return (
							t.appendChild(s),
							(n = (i = s.getBoundingClientRect()).right - i.left),
							s.remove(),
							n || Ni(t.parentNode)
						);
					}
				}
				function Ii() {
					var t = At ? 2 * At - Lt : 0;
					return Ni(dt) - t;
				}
				function Di(e) {
					if (t[e]) return !0;
					if (X) for (var i in X) if (X[i][e]) return !0;
					return !1;
				}
				function ji(e, i) {
					if ((null == i && (i = gt), "items" === e && St))
						return Math.floor((Pt + Lt) / (St + Lt)) || 1;
					var n = t[e];
					if (X)
						for (var s in X) i >= parseInt(s) && e in X[s] && (n = X[s][e]);
					return (
						"slideBy" === e && "page" === n && (n = ji("items")),
						J || ("slideBy" !== e && "items" !== e) || (n = Math.floor(n)),
						n
					);
				}
				function Hi(t, e, i, n, s) {
					var o = "";
					if (void 0 !== t) {
						var r = t;
						e && (r -= e),
							(o = lt
								? "margin: 0 " + r + "px 0 " + t + "px;"
								: "margin: " + t + "px 0 " + r + "px 0;");
					} else if (e && !i) {
						var a = "-" + e + "px";
						o = "margin: 0 " + (lt ? a + " 0 0" : "0 " + a + " 0") + ";";
					}
					return !J && s && B && n && (o += $i(n)), o;
				}
				function Fi(t, e, i) {
					return t
						? (t + e) * ee + "px"
						: M
						? M + "(" + 100 * ee + "% / " + i + ")"
						: (100 * ee) / i + "%";
				}
				function zi(t, e, i) {
					var n;
					if (t) n = t + e + "px";
					else {
						J || (i = Math.floor(i));
						var s = J ? ee : i;
						n = M ? M + "(100% / " + s + ")" : 100 / s + "%";
					}
					return (
						(n = "width:" + n), "inner" !== G ? n + ";" : n + " !important;"
					);
				}
				function Ri(t) {
					var e = "";
					return (
						!1 !== t &&
							(e =
								(lt ? "padding-" : "margin-") +
								(lt ? "right" : "bottom") +
								": " +
								t +
								"px;"),
						e
					);
				}
				function Bi(t, e) {
					var i = t.substring(0, t.length - e).toLowerCase();
					return i && (i = "-" + i + "-"), i;
				}
				function $i(t) {
					return Bi(B, 18) + "transition-duration:" + t / 1e3 + "s;";
				}
				function qi(t) {
					return Bi(q, 17) + "animation-duration:" + t / 1e3 + "s;";
				}
				function Wi() {
					if (Di("autoHeight") || Ct || !lt) {
						var t = ht.querySelectorAll("img");
						g(t, function (t) {
							var e = t.src;
							Gt ||
								(e && e.indexOf("data:image") < 0
									? ((t.src = ""), D(t, $e), b(t, "loading"), (t.src = e))
									: ln(t));
						}),
							s(function () {
								dn(C(t), function () {
									bt = !0;
								});
							}),
							Di("autoHeight") && (t = un(ce, Math.min(ce + Mt - 1, ee - 1))),
							Gt
								? Vi()
								: s(function () {
										dn(C(t), Vi);
								  });
					} else J && Sn(), Yi(), Qi();
				}
				function Vi() {
					if (Ct && mt > 1) {
						var t = Ft ? ce : mt - 1;
						!(function e() {
							var i = ft[t].getBoundingClientRect().left,
								n = ft[t - 1].getBoundingClientRect().right;
							Math.abs(i - n) <= 1
								? Ui()
								: setTimeout(function () {
										e();
								  }, 16);
						})();
					} else Ui();
				}
				function Ui() {
					(lt && !Ct) ||
						(gn(),
						Ct
							? ((ne = Tn()), xe && (ke = Gi()), (de = le()), Ci(_e || ke))
							: Gn()),
						J && Sn(),
						Yi(),
						Qi();
				}
				function Yi() {
					if (
						(yn(),
						ct.insertAdjacentHTML(
							"afterbegin",
							'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' +
								on() +
								"</span>  of " +
								mt +
								"</div>"
						),
						(wt = ct.querySelector(".tns-liveregion .current")),
						je)
					) {
						var e = Vt ? "stop" : "start";
						mi
							? k(mi, { "data-action": e })
							: t.autoplayButtonOutput &&
							  (ct.insertAdjacentHTML(
									Mi(t.autoplayPosition),
									'<button type="button" data-action="' +
										e +
										'">' +
										yi[0] +
										e +
										yi[1] +
										Yt[0] +
										"</button>"
							  ),
							  (mi = ct.querySelector("[data-action]"))),
							mi && D(mi, { click: Rn }),
							Vt && (Fn(), Qt && D(ht, Ae), Kt && D(ht, Le));
					}
					if (Ie) {
						if (Ze)
							k(Ze, { "aria-label": "Carousel Pagination" }),
								g((Je = Ze.children), function (t, e) {
									k(t, {
										"data-nav": e,
										tabindex: "-1",
										"aria-label": ai + (e + 1),
										"aria-controls": we,
									});
								});
						else {
							for (
								var i = "", n = De ? "" : 'style="display:none"', s = 0;
								s < mt;
								s++
							)
								i +=
									'<button type="button" data-nav="' +
									s +
									'" tabindex="-1" aria-controls="' +
									we +
									'" ' +
									n +
									' aria-label="' +
									ai +
									(s + 1) +
									'"></button>';
							(i =
								'<div class="tns-nav" aria-label="Carousel Pagination">' +
								i +
								"</div>"),
								ct.insertAdjacentHTML(Mi(t.navPosition), i),
								(Ze = ct.querySelector(".tns-nav")),
								(Je = Ze.children);
						}
						if ((Zn(), B)) {
							var o = B.substring(0, B.length - 18).toLowerCase(),
								r = "transition: all " + jt / 1e3 + "s";
							o && (r = "-" + o + "-" + r),
								f(Xt, "[aria-controls^=" + we + "-item]", r, m(Xt));
						}
						k(Je[si], { "aria-label": ai + (si + 1) + li }),
							T(Je[si], "tabindex"),
							b(Je[si], ri),
							D(Ze, Se);
					}
					Ne &&
						(Ue ||
							(Qe && Ke) ||
							(ct.insertAdjacentHTML(
								Mi(t.controlsPosition),
								'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' +
									we +
									'">' +
									Bt[0] +
									'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' +
									we +
									'">' +
									Bt[1] +
									"</button></div>"
							),
							(Ue = ct.querySelector(".tns-controls"))),
						(Qe && Ke) || ((Qe = Ue.children[0]), (Ke = Ue.children[1])),
						t.controlsContainer &&
							k(Ue, { "aria-label": "Carousel Navigation", tabindex: "0" }),
						(t.controlsContainer || (t.prevButton && t.nextButton)) &&
							k([Qe, Ke], { "aria-controls": we, tabindex: "-1" }),
						(t.controlsContainer || (t.prevButton && t.nextButton)) &&
							(k(Qe, { "data-controls": "prev" }),
							k(Ke, { "data-controls": "next" })),
						(We = bn(Qe)),
						(Ve = bn(Ke)),
						En(),
						Ue ? D(Ue, Ce) : (D(Qe, Ce), D(Ke, Ce))),
						Zi();
				}
				function Qi() {
					if (J && V) {
						var n = {};
						(n[V] = Mn), D(ht, n);
					}
					qt && D(ht, Oe, t.preventScrollOnTouch),
						Wt && D(ht, Me),
						Dt && D(e, Pe),
						"inner" === G
							? ve.on("outerResized", function () {
									Xi(), ve.emit("innerLoaded", ts());
							  })
							: (X || St || Ct || zt || !lt) && D(i, { resize: Ki }),
						zt && ("outer" === G ? ve.on("innerLoaded", hn) : _e || hn()),
						an(),
						_e ? nn() : ke && en(),
						ve.on("indexChanged", pn),
						"inner" === G && ve.emit("innerLoaded", ts()),
						"function" == typeof ye && ye(ts()),
						(yt = !0);
				}
				function Ki(t) {
					s(function () {
						Xi($n(t));
					});
				}
				function Xi(i) {
					if (yt) {
						"outer" === G && ve.emit("outerResized", ts(i)), (gt = Oi());
						var n,
							s = at,
							o = !1;
						X && (Ji(), (n = s !== at) && ve.emit("newBreakpointStart", ts(i)));
						var r,
							a,
							l = Mt,
							c = _e,
							u = ke,
							h = Dt,
							d = Rt,
							p = $t,
							y = qt,
							v = Wt,
							_ = Vt,
							E = Qt,
							x = Kt,
							k = ce;
						if (n) {
							var T = St,
								C = zt,
								L = Bt,
								P = Ot,
								O = Yt;
							if (!I)
								var M = Lt,
									N = At;
						}
						if (
							((Dt = ji("arrowKeys")),
							(Rt = ji("controls")),
							($t = ji("nav")),
							(qt = ji("touch")),
							(Ot = ji("center")),
							(Wt = ji("mouseDrag")),
							(Vt = ji("autoplay")),
							(Qt = ji("autoplayHoverPause")),
							(Kt = ji("autoplayResetOnVisibility")),
							n &&
								((_e = ji("disable")),
								(St = ji("fixedWidth")),
								(jt = ji("speed")),
								(zt = ji("autoHeight")),
								(Bt = ji("controlsText")),
								(Yt = ji("autoplayText")),
								(Ut = ji("autoplayTimeout")),
								I || ((At = ji("edgePadding")), (Lt = ji("gutter")))),
							Ci(_e),
							(Pt = Ii()),
							(lt && !Ct) || _e || (gn(), lt || (Gn(), (o = !0))),
							(St || Ct) && ((ne = Tn()), (de = le())),
							(n || St) &&
								((Mt = ji("items")),
								(Nt = ji("slideBy")),
								(a = Mt !== l) && (St || Ct || (de = le()), ki())),
							n &&
								_e !== c &&
								(_e
									? nn()
									: (function () {
											if (Ee) {
												if (
													((Xt.disabled = !1), (ht.className += be), Sn(), Ft)
												)
													for (var t = te; t--; )
														J && A(ft[t]), A(ft[ee - t - 1]);
												if (!J)
													for (var e = ce, i = ce + mt; e < i; e++) {
														var n = ft[e],
															s = e < ce + Mt ? it : ot;
														(n.style.left = (100 * (e - ce)) / Mt + "%"),
															b(n, s);
													}
												tn(), (Ee = !1);
											}
									  })()),
							xe &&
								(n || St || Ct) &&
								(ke = Gi()) !== u &&
								(ke
									? (An(Cn(Ai(0))), en())
									: ((function () {
											if (Te) {
												if ((At && I && (ut.style.margin = ""), te))
													for (var t = "tns-transparent", e = te; e--; )
														J && w(ft[e], t), w(ft[ee - e - 1], t);
												tn(), (Te = !1);
											}
									  })(),
									  (o = !0))),
							Ci(_e || ke),
							Vt || (Qt = Kt = !1),
							Dt !== h && (Dt ? D(e, Pe) : j(e, Pe)),
							Rt !== d &&
								(Rt
									? Ue
										? A(Ue)
										: (Qe && A(Qe), Ke && A(Ke))
									: Ue
									? S(Ue)
									: (Qe && S(Qe), Ke && S(Ke))),
							$t !== p && ($t ? (A(Ze), Zn()) : S(Ze)),
							qt !== y && (qt ? D(ht, Oe, t.preventScrollOnTouch) : j(ht, Oe)),
							Wt !== v && (Wt ? D(ht, Me) : j(ht, Me)),
							Vt !== _ &&
								(Vt
									? (mi && A(mi), ui || di || Fn())
									: (mi && S(mi), ui && zn())),
							Qt !== E && (Qt ? D(ht, Ae) : j(ht, Ae)),
							Kt !== x && (Kt ? D(e, Le) : j(e, Le)),
							n)
						) {
							if (
								((St === T && Ot === P) || (o = !0),
								zt !== C && (zt || (ut.style.height = "")),
								Rt &&
									Bt !== L &&
									((Qe.innerHTML = Bt[0]), (Ke.innerHTML = Bt[1])),
								mi && Yt !== O)
							) {
								var H = Vt ? 1 : 0,
									F = mi.innerHTML,
									z = F.length - O[H].length;
								F.substring(z) === O[H] &&
									(mi.innerHTML = F.substring(0, z) + Yt[H]);
							}
						} else Ot && (St || Ct) && (o = !0);
						if (
							((a || (St && !Ct)) && ((ei = Jn()), Zn()),
							(r = ce !== k)
								? (ve.emit("indexChanged", ts()), (o = !0))
								: a
								? r || pn()
								: (St || Ct) && (an(), yn(), sn()),
							a &&
								!J &&
								(function () {
									for (var t = ce + Math.min(mt, Mt), e = ee; e--; ) {
										var i = ft[e];
										e >= ce && e < t
											? (b(i, "tns-moving"),
											  (i.style.left = (100 * (e - ce)) / Mt + "%"),
											  b(i, it),
											  w(i, ot))
											: i.style.left &&
											  ((i.style.left = ""), b(i, ot), w(i, it)),
											w(i, nt);
									}
									setTimeout(function () {
										g(ft, function (t) {
											w(t, "tns-moving");
										});
									}, 300);
								})(),
							!_e && !ke)
						) {
							if (
								n &&
								!I &&
								((At === N && Lt === M) ||
									(ut.style.cssText = Hi(At, Lt, St, jt, zt)),
								lt)
							) {
								J && (ht.style.width = Fi(St, Lt, Mt));
								var R = zi(St, Lt, Mt) + Ri(Lt);
								!(function (t, e) {
									"deleteRule" in t ? t.deleteRule(e) : t.removeRule(e);
								})(Xt, m(Xt) - 1),
									f(Xt, "#" + we + " > .tns-item", R, m(Xt));
							}
							zt && hn(), o && (Sn(), (ue = ce));
						}
						n && ve.emit("newBreakpointEnd", ts(i));
					}
				}
				function Gi() {
					if (!St && !Ct) return mt <= (Ot ? Mt - (Mt - 1) / 2 : Mt);
					var t = St ? (St + Lt) * mt : vt[mt],
						e = At ? Pt + 2 * At : Pt + Lt;
					return (
						Ot &&
							(e -= St ? (Pt - St) / 2 : (Pt - (vt[ce + 1] - vt[ce] - Lt)) / 2),
						t <= e
					);
				}
				function Ji() {
					for (var t in ((at = 0), X)) (t = parseInt(t)), gt >= t && (at = t);
				}
				function Zi() {
					!Vt && mi && S(mi),
						!$t && Ze && S(Ze),
						Rt || (Ue ? S(Ue) : (Qe && S(Qe), Ke && S(Ke)));
				}
				function tn() {
					Vt && mi && A(mi),
						$t && Ze && A(Ze),
						Rt && (Ue ? A(Ue) : (Qe && A(Qe), Ke && A(Ke)));
				}
				function en() {
					if (!Te) {
						if ((At && (ut.style.margin = "0px"), te))
							for (var t = "tns-transparent", e = te; e--; )
								J && b(ft[e], t), b(ft[ee - e - 1], t);
						Zi(), (Te = !0);
					}
				}
				function nn() {
					if (!Ee) {
						if (
							((Xt.disabled = !0),
							(ht.className = ht.className.replace(be.substring(1), "")),
							T(ht, ["style"]),
							Ft)
						)
							for (var t = te; t--; ) J && S(ft[t]), S(ft[ee - t - 1]);
						if (((lt && J) || T(ut, ["style"]), !J))
							for (var e = ce, i = ce + mt; e < i; e++) {
								var n = ft[e];
								T(n, ["style"]), w(n, it), w(n, ot);
							}
						Zi(), (Ee = !0);
					}
				}
				function sn() {
					var t = on();
					wt.innerHTML !== t && (wt.innerHTML = t);
				}
				function on() {
					var t = rn(),
						e = t[0] + 1,
						i = t[1] + 1;
					return e === i ? e + "" : e + " to " + i;
				}
				function rn(t) {
					null == t && (t = Cn());
					var e,
						i,
						n,
						s = ce;
					if (
						(Ot || At
							? (Ct || St) &&
							  ((i = -(parseFloat(t) + At)), (n = i + Pt + 2 * At))
							: Ct && ((i = vt[ce]), (n = i + Pt)),
						Ct)
					)
						vt.forEach(function (t, o) {
							o < ee &&
								((Ot || At) && t <= i + 0.5 && (s = o),
								n - t >= 0.5 && (e = o));
						});
					else {
						if (St) {
							var o = St + Lt;
							Ot || At
								? ((s = Math.floor(i / o)), (e = Math.ceil(n / o - 1)))
								: (e = s + Math.ceil(Pt / o) - 1);
						} else if (Ot || At) {
							var r = Mt - 1;
							if ((Ot ? ((s -= r / 2), (e = ce + r / 2)) : (e = ce + r), At)) {
								var a = (At * Mt) / Pt;
								(s -= a), (e += a);
							}
							(s = Math.floor(s)), (e = Math.ceil(e));
						} else e = s + Mt - 1;
						(s = Math.max(s, 0)), (e = Math.min(e, ee - 1));
					}
					return [s, e];
				}
				function an() {
					if (Gt && !_e) {
						var t = rn();
						t.push(Jt),
							un.apply(null, t).forEach(function (t) {
								if (!v(t, Be)) {
									var e = {};
									(e[V] = function (t) {
										t.stopPropagation();
									}),
										D(t, e),
										D(t, $e),
										(t.src = E(t, "data-src"));
									var i = E(t, "data-srcset");
									i && (t.srcset = i), b(t, "loading");
								}
							});
					}
				}
				function ln(t) {
					b(t, "loaded"), cn(t);
				}
				function cn(t) {
					b(t, Be), w(t, "loading"), j(t, $e);
				}
				function un(t, e, i) {
					var n = [];
					for (i || (i = "img"); t <= e; )
						g(ft[t].querySelectorAll(i), function (t) {
							n.push(t);
						}),
							t++;
					return n;
				}
				function hn() {
					var t = un.apply(null, rn());
					s(function () {
						dn(t, mn);
					});
				}
				function dn(t, e) {
					return bt
						? e()
						: (t.forEach(function (e, i) {
								!Gt && e.complete && cn(e), v(e, Be) && t.splice(i, 1);
						  }),
						  t.length
								? void s(function () {
										dn(t, e);
								  })
								: e());
				}
				function pn() {
					an(),
						yn(),
						sn(),
						En(),
						(function () {
							if ($t && ((si = ni >= 0 ? ni : Pi()), (ni = -1), si !== oi)) {
								var t = Je[oi],
									e = Je[si];
								k(t, { tabindex: "-1", "aria-label": ai + (oi + 1) }),
									w(t, ri),
									k(e, { "aria-label": ai + (si + 1) + li }),
									T(e, "tabindex"),
									b(e, ri),
									(oi = si);
							}
						})();
				}
				function fn(t, e) {
					for (var i = [], n = t, s = Math.min(t + e, ee); n < s; n++)
						i.push(ft[n].offsetHeight);
					return Math.max.apply(null, i);
				}
				function mn() {
					var t = zt ? fn(ce, Mt) : fn(te, mt),
						e = rt || ut;
					e.style.height !== t && (e.style.height = t + "px");
				}
				function gn() {
					vt = [0];
					var t = lt ? "left" : "top",
						e = lt ? "right" : "bottom",
						i = ft[0].getBoundingClientRect()[t];
					g(ft, function (n, s) {
						s && vt.push(n.getBoundingClientRect()[t] - i),
							s === ee - 1 && vt.push(n.getBoundingClientRect()[e] - i);
					});
				}
				function yn() {
					var t = rn(),
						e = t[0],
						i = t[1];
					g(ft, function (t, n) {
						n >= e && n <= i
							? _(t, "aria-hidden") &&
							  (T(t, ["aria-hidden", "tabindex"]), b(t, ze))
							: _(t, "aria-hidden") ||
							  (k(t, { "aria-hidden": "true", tabindex: "-1" }), w(t, ze));
					});
				}
				function vn(t) {
					return t.nodeName.toLowerCase();
				}
				function bn(t) {
					return "button" === vn(t);
				}
				function wn(t) {
					return "true" === t.getAttribute("aria-disabled");
				}
				function _n(t, e, i) {
					t ? (e.disabled = i) : e.setAttribute("aria-disabled", i.toString());
				}
				function En() {
					if (Rt && !Ht && !Ft) {
						var t = We ? Qe.disabled : wn(Qe),
							e = Ve ? Ke.disabled : wn(Ke),
							i = ce <= he,
							n = !Ht && ce >= de;
						i && !t && _n(We, Qe, !0),
							!i && t && _n(We, Qe, !1),
							n && !e && _n(Ve, Ke, !0),
							!n && e && _n(Ve, Ke, !1);
					}
				}
				function xn(t, e) {
					B && (t.style[B] = e);
				}
				function kn(t) {
					return (
						null == t && (t = ce),
						Ct
							? (Pt - (At ? Lt : 0) - (vt[t + 1] - vt[t] - Lt)) / 2
							: St
							? (Pt - St) / 2
							: (Mt - 1) / 2
					);
				}
				function Tn() {
					var t = Pt + (At ? Lt : 0) - (St ? (St + Lt) * ee : vt[ee]);
					return (
						Ot &&
							!Ft &&
							(t = St ? -(St + Lt) * (ee - 1) - kn() : kn(ee - 1) - vt[ee - 1]),
						t > 0 && (t = 0),
						t
					);
				}
				function Cn(t) {
					var e;
					if ((null == t && (t = ce), lt && !Ct))
						if (St) (e = -(St + Lt) * t), Ot && (e += kn());
						else {
							var i = z ? ee : Mt;
							Ot && (t -= kn()), (e = (100 * -t) / i);
						}
					else (e = -vt[t]), Ot && Ct && (e += kn());
					return (
						ie && (e = Math.max(e, ne)), e + (!lt || Ct || St ? "px" : "%")
					);
				}
				function Sn(t) {
					xn(ht, "0s"), An(t);
				}
				function An(t) {
					null == t && (t = Cn()), (ht.style[oe] = re + t + ae);
				}
				function Ln(t, e, i, n) {
					var s = t + Mt;
					Ft || (s = Math.min(s, ee));
					for (var o = t; o < s; o++) {
						var r = ft[o];
						n || (r.style.left = (100 * (o - ce)) / Mt + "%"),
							st && $ && (r.style[$] = r.style[W] = (st * (o - t)) / 1e3 + "s"),
							w(r, e),
							b(r, i),
							n && Zt.push(r);
					}
				}
				function Pn(t, e) {
					se && ki(),
						(ce !== ue || e) &&
							(ve.emit("indexChanged", ts()),
							ve.emit("transitionStart", ts()),
							zt && hn(),
							ui && t && ["click", "keydown"].indexOf(t.type) >= 0 && zn(),
							(ge = !0),
							Ti());
				}
				function On(t) {
					return t.toLowerCase().replace(/-/g, "");
				}
				function Mn(t) {
					if (J || ge) {
						if ((ve.emit("transitionEnd", ts(t)), !J && Zt.length > 0))
							for (var e = 0; e < Zt.length; e++) {
								var i = Zt[e];
								(i.style.left = ""),
									W && $ && ((i.style[W] = ""), (i.style[$] = "")),
									w(i, nt),
									b(i, ot);
							}
						if (
							!t ||
							(!J && t.target.parentNode === ht) ||
							(t.target === ht && On(t.propertyName) === On(oe))
						) {
							if (!se) {
								var n = ce;
								ki(), ce !== n && (ve.emit("indexChanged", ts()), Sn());
							}
							"inner" === G && ve.emit("innerLoaded", ts()),
								(ge = !1),
								(ue = ce);
						}
					}
				}
				function Nn(t, e) {
					if (!ke)
						if ("prev" === t) In(e, -1);
						else if ("next" === t) In(e, 1);
						else {
							if (ge) {
								if (pe) return;
								Mn();
							}
							var i = Li(),
								n = 0;
							if (
								("first" === t
									? (n = -i)
									: "last" === t
									? (n = J ? mt - Mt - i : mt - 1 - i)
									: ("number" != typeof t && (t = parseInt(t)),
									  isNaN(t) ||
											(e || (t = Math.max(0, Math.min(mt - 1, t))),
											(n = t - i))),
								!J && n && Math.abs(n) < Mt)
							) {
								var s = n > 0 ? 1 : -1;
								n += ce + n - mt >= he ? mt * s : 2 * mt * s * -1;
							}
							(ce += n),
								J && Ft && (ce < he && (ce += mt), ce > de && (ce -= mt)),
								Li(ce) !== Li(ue) && Pn(e);
						}
				}
				function In(t, e) {
					if (ge) {
						if (pe) return;
						Mn();
					}
					var i;
					if (!e) {
						for (var n = qn((t = $n(t))); n !== Ue && [Qe, Ke].indexOf(n) < 0; )
							n = n.parentNode;
						var s = [Qe, Ke].indexOf(n);
						s >= 0 && ((i = !0), (e = 0 === s ? -1 : 1));
					}
					if (Ht) {
						if (ce === he && -1 === e) return void Nn("last", t);
						if (ce === de && 1 === e) return void Nn("first", t);
					}
					e &&
						((ce += Nt * e),
						Ct && (ce = Math.floor(ce)),
						Pn(i || (t && "keydown" === t.type) ? t : null));
				}
				function Dn() {
					(ci = setInterval(function () {
						In(null, fi);
					}, Ut)),
						(ui = !0);
				}
				function jn() {
					clearInterval(ci), (ui = !1);
				}
				function Hn(t, e) {
					k(mi, { "data-action": t }), (mi.innerHTML = yi[0] + t + yi[1] + e);
				}
				function Fn() {
					Dn(), mi && Hn("stop", Yt[1]);
				}
				function zn() {
					jn(), mi && Hn("start", Yt[0]);
				}
				function Rn() {
					ui ? (zn(), (di = !0)) : (Fn(), (di = !1));
				}
				function Bn(t) {
					t.focus();
				}
				function $n(t) {
					return Wn((t = t || i.event)) ? t.changedTouches[0] : t;
				}
				function qn(t) {
					return t.target || i.event.srcElement;
				}
				function Wn(t) {
					return t.type.indexOf("touch") >= 0;
				}
				function Vn(t) {
					t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
				}
				function Un() {
					return (
						(o = _i.y - wi.y),
						(r = _i.x - wi.x),
						(e = Math.atan2(o, r) * (180 / Math.PI)),
						(i = fe),
						(n = !1),
						(s = Math.abs(90 - Math.abs(e))) >= 90 - i
							? (n = "horizontal")
							: s <= i && (n = "vertical"),
						n === t.axis
					);
					var e, i, n, s, o, r;
				}
				function Yn(t) {
					if (ge) {
						if (pe) return;
						Mn();
					}
					Vt && ui && jn(), (Ei = !0), bi && (r(bi), (bi = null));
					var e = $n(t);
					ve.emit(Wn(t) ? "touchStart" : "dragStart", ts(t)),
						!Wn(t) && ["img", "a"].indexOf(vn(qn(t))) >= 0 && Vn(t),
						(_i.x = wi.x = e.clientX),
						(_i.y = wi.y = e.clientY),
						J &&
							((vi = parseFloat(ht.style[oe].replace(re, ""))), xn(ht, "0s"));
				}
				function Qn(t) {
					if (Ei) {
						var e = $n(t);
						(_i.x = e.clientX),
							(_i.y = e.clientY),
							J
								? bi ||
								  (bi = s(function () {
										Kn(t);
								  }))
								: ("?" === me && (me = Un()), me && (qe = !0)),
							("boolean" != typeof t.cancelable || t.cancelable) &&
								qe &&
								t.preventDefault();
					}
				}
				function Kn(t) {
					if (me) {
						if (
							(r(bi),
							Ei &&
								(bi = s(function () {
									Kn(t);
								})),
							"?" === me && (me = Un()),
							me)
						) {
							!qe && Wn(t) && (qe = !0);
							try {
								t.type && ve.emit(Wn(t) ? "touchMove" : "dragMove", ts(t));
							} catch (t) {}
							var e = vi,
								i = xi(_i, wi);
							!lt || St || Ct
								? ((e += i), (e += "px"))
								: ((e += z
										? (i * Mt * 100) / ((Pt + Lt) * ee)
										: (100 * i) / (Pt + Lt)),
								  (e += "%")),
								(ht.style[oe] = re + e + ae);
						}
					} else Ei = !1;
				}
				function Xn(e) {
					if (Ei) {
						bi && (r(bi), (bi = null)), J && xn(ht, ""), (Ei = !1);
						var i = $n(e);
						(_i.x = i.clientX), (_i.y = i.clientY);
						var n = xi(_i, wi);
						if (Math.abs(n)) {
							if (!Wn(e)) {
								var o = qn(e);
								D(o, {
									click: function t(e) {
										Vn(e), j(o, { click: t });
									},
								});
							}
							J
								? (bi = s(function () {
										if (lt && !Ct) {
											var t = (-n * Mt) / (Pt + Lt);
											(t = n > 0 ? Math.floor(t) : Math.ceil(t)), (ce += t);
										} else {
											var i = -(vi + n);
											if (i <= 0) ce = he;
											else if (i >= vt[ee - 1]) ce = de;
											else
												for (var s = 0; s < ee && i >= vt[s]; )
													(ce = s), i > vt[s] && n < 0 && (ce += 1), s++;
										}
										Pn(e, n), ve.emit(Wn(e) ? "touchEnd" : "dragEnd", ts(e));
								  }))
								: me && In(e, n > 0 ? -1 : 1);
						}
					}
					"auto" === t.preventScrollOnTouch && (qe = !1),
						fe && (me = "?"),
						Vt && !ui && Dn();
				}
				function Gn() {
					(rt || ut).style.height = vt[ce + Mt] - vt[ce] + "px";
				}
				function Jn() {
					var t = St ? ((St + Lt) * mt) / Pt : mt / Mt;
					return Math.min(Math.ceil(t), mt);
				}
				function Zn() {
					if ($t && !De && ei !== ii) {
						var t = ii,
							e = ei,
							i = A;
						for (ii > ei && ((t = ei), (e = ii), (i = S)); t < e; )
							i(Je[t]), t++;
						ii = ei;
					}
				}
				function ts(t) {
					return {
						container: ht,
						slideItems: ft,
						navContainer: Ze,
						navItems: Je,
						controlsContainer: Ue,
						hasControls: Ne,
						prevButton: Qe,
						nextButton: Ke,
						items: Mt,
						slideBy: Nt,
						cloneCount: te,
						slideCount: mt,
						slideCountNew: ee,
						index: ce,
						indexCached: ue,
						displayIndex: Si(),
						navCurrentIndex: si,
						navCurrentIndexCached: oi,
						pages: ei,
						pagesCached: ii,
						sheet: Xt,
						isOn: yt,
						event: t || {},
					};
				}
				Y && console.warn("No slides found in", t.container);
			};
		},
		614: function (t) {
			var e;
			(e = function () {
				return (function (t) {
					var e = {};
					function i(n) {
						if (e[n]) return e[n].exports;
						var s = (e[n] = { exports: {}, id: n, loaded: !1 });
						return (
							t[n].call(s.exports, s, s.exports, i), (s.loaded = !0), s.exports
						);
					}
					return (i.m = t), (i.c = e), (i.p = ""), i(0);
				})([
					function (t, e, i) {
						"use strict";
						Object.defineProperty(e, "__esModule", { value: !0 });
						var n = (function () {
								function t(t, e) {
									for (var i = 0; i < e.length; i++) {
										var n = e[i];
										(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											"value" in n && (n.writable = !0),
											Object.defineProperty(t, n.key, n);
									}
								}
								return function (e, i, n) {
									return i && t(e.prototype, i), n && t(e, n), e;
								};
							})(),
							s = i(1),
							o = i(3),
							r = (function () {
								function t(e, i) {
									!(function (t, e) {
										if (!(t instanceof e))
											throw new TypeError("Cannot call a class as a function");
									})(this, t),
										s.initializer.load(this, i, e),
										this.begin();
								}
								return (
									n(t, [
										{
											key: "toggle",
											value: function () {
												this.pause.status ? this.start() : this.stop();
											},
										},
										{
											key: "stop",
											value: function () {
												this.typingComplete ||
													this.pause.status ||
													(this.toggleBlinking(!0),
													(this.pause.status = !0),
													this.options.onStop(this.arrayPos, this));
											},
										},
										{
											key: "start",
											value: function () {
												this.typingComplete ||
													(this.pause.status &&
														((this.pause.status = !1),
														this.pause.typewrite
															? this.typewrite(
																	this.pause.curString,
																	this.pause.curStrPos
															  )
															: this.backspace(
																	this.pause.curString,
																	this.pause.curStrPos
															  ),
														this.options.onStart(this.arrayPos, this)));
											},
										},
										{
											key: "destroy",
											value: function () {
												this.reset(!1), this.options.onDestroy(this);
											},
										},
										{
											key: "reset",
											value: function () {
												var t =
													arguments.length <= 0 ||
													void 0 === arguments[0] ||
													arguments[0];
												clearInterval(this.timeout),
													this.replaceText(""),
													this.cursor &&
														this.cursor.parentNode &&
														(this.cursor.parentNode.removeChild(this.cursor),
														(this.cursor = null)),
													(this.strPos = 0),
													(this.arrayPos = 0),
													(this.curLoop = 0),
													t &&
														(this.insertCursor(),
														this.options.onReset(this),
														this.begin());
											},
										},
										{
											key: "begin",
											value: function () {
												var t = this;
												this.options.onBegin(this),
													(this.typingComplete = !1),
													this.shuffleStringsIfNeeded(this),
													this.insertCursor(),
													this.bindInputFocusEvents && this.bindFocusEvents(),
													(this.timeout = setTimeout(function () {
														t.currentElContent &&
														0 !== t.currentElContent.length
															? t.backspace(
																	t.currentElContent,
																	t.currentElContent.length
															  )
															: t.typewrite(
																	t.strings[t.sequence[t.arrayPos]],
																	t.strPos
															  );
													}, this.startDelay));
											},
										},
										{
											key: "typewrite",
											value: function (t, e) {
												var i = this;
												this.fadeOut &&
													this.el.classList.contains(this.fadeOutClass) &&
													(this.el.classList.remove(this.fadeOutClass),
													this.cursor &&
														this.cursor.classList.remove(this.fadeOutClass));
												var n = this.humanizer(this.typeSpeed),
													s = 1;
												!0 !== this.pause.status
													? (this.timeout = setTimeout(function () {
															e = o.htmlParser.typeHtmlChars(t, e, i);
															var n = 0,
																r = t.substr(e);
															if ("^" === r.charAt(0) && /^\^\d+/.test(r)) {
																var a = 1;
																(a += (r = /\d+/.exec(r)[0]).length),
																	(n = parseInt(r)),
																	(i.temporaryPause = !0),
																	i.options.onTypingPaused(i.arrayPos, i),
																	(t = t.substring(0, e) + t.substring(e + a)),
																	i.toggleBlinking(!0);
															}
															if ("`" === r.charAt(0)) {
																for (
																	;
																	"`" !== t.substr(e + s).charAt(0) &&
																	(s++, !(e + s > t.length));

																);
																var l = t.substring(0, e),
																	c = t.substring(l.length + 1, e + s),
																	u = t.substring(e + s + 1);
																(t = l + c + u), s--;
															}
															i.timeout = setTimeout(function () {
																i.toggleBlinking(!1),
																	e >= t.length
																		? i.doneTyping(t, e)
																		: i.keepTyping(t, e, s),
																	i.temporaryPause &&
																		((i.temporaryPause = !1),
																		i.options.onTypingResumed(i.arrayPos, i));
															}, n);
													  }, n))
													: this.setPauseStatus(t, e, !0);
											},
										},
										{
											key: "keepTyping",
											value: function (t, e, i) {
												0 === e &&
													(this.toggleBlinking(!1),
													this.options.preStringTyped(this.arrayPos, this)),
													(e += i);
												var n = t.substr(0, e);
												this.replaceText(n), this.typewrite(t, e);
											},
										},
										{
											key: "doneTyping",
											value: function (t, e) {
												var i = this;
												this.options.onStringTyped(this.arrayPos, this),
													this.toggleBlinking(!0),
													(this.arrayPos === this.strings.length - 1 &&
														(this.complete(),
														!1 === this.loop ||
															this.curLoop === this.loopCount)) ||
														(this.timeout = setTimeout(function () {
															i.backspace(t, e);
														}, this.backDelay));
											},
										},
										{
											key: "backspace",
											value: function (t, e) {
												var i = this;
												if (!0 !== this.pause.status) {
													if (this.fadeOut) return this.initFadeOut();
													this.toggleBlinking(!1);
													var n = this.humanizer(this.backSpeed);
													this.timeout = setTimeout(function () {
														e = o.htmlParser.backSpaceHtmlChars(t, e, i);
														var n = t.substr(0, e);
														if ((i.replaceText(n), i.smartBackspace)) {
															var s = i.strings[i.arrayPos + 1];
															s && n === s.substr(0, e)
																? (i.stopNum = e)
																: (i.stopNum = 0);
														}
														e > i.stopNum
															? (e--, i.backspace(t, e))
															: e <= i.stopNum &&
															  (i.arrayPos++,
															  i.arrayPos === i.strings.length
																	? ((i.arrayPos = 0),
																	  i.options.onLastStringBackspaced(),
																	  i.shuffleStringsIfNeeded(),
																	  i.begin())
																	: i.typewrite(
																			i.strings[i.sequence[i.arrayPos]],
																			e
																	  ));
													}, n);
												} else this.setPauseStatus(t, e, !1);
											},
										},
										{
											key: "complete",
											value: function () {
												this.options.onComplete(this),
													this.loop
														? this.curLoop++
														: (this.typingComplete = !0);
											},
										},
										{
											key: "setPauseStatus",
											value: function (t, e, i) {
												(this.pause.typewrite = i),
													(this.pause.curString = t),
													(this.pause.curStrPos = e);
											},
										},
										{
											key: "toggleBlinking",
											value: function (t) {
												this.cursor &&
													(this.pause.status ||
														(this.cursorBlinking !== t &&
															((this.cursorBlinking = t),
															t
																? this.cursor.classList.add(
																		"typed-cursor--blink"
																  )
																: this.cursor.classList.remove(
																		"typed-cursor--blink"
																  ))));
											},
										},
										{
											key: "humanizer",
											value: function (t) {
												return Math.round((Math.random() * t) / 2) + t;
											},
										},
										{
											key: "shuffleStringsIfNeeded",
											value: function () {
												this.shuffle &&
													(this.sequence = this.sequence.sort(function () {
														return Math.random() - 0.5;
													}));
											},
										},
										{
											key: "initFadeOut",
											value: function () {
												var t = this;
												return (
													(this.el.className += " " + this.fadeOutClass),
													this.cursor &&
														(this.cursor.className += " " + this.fadeOutClass),
													setTimeout(function () {
														t.arrayPos++,
															t.replaceText(""),
															t.strings.length > t.arrayPos
																? t.typewrite(
																		t.strings[t.sequence[t.arrayPos]],
																		0
																  )
																: (t.typewrite(t.strings[0], 0),
																  (t.arrayPos = 0));
													}, this.fadeOutDelay)
												);
											},
										},
										{
											key: "replaceText",
											value: function (t) {
												this.attr
													? this.el.setAttribute(this.attr, t)
													: this.isInput
													? (this.el.value = t)
													: "html" === this.contentType
													? (this.el.innerHTML = t)
													: (this.el.textContent = t);
											},
										},
										{
											key: "bindFocusEvents",
											value: function () {
												var t = this;
												this.isInput &&
													(this.el.addEventListener("focus", function (e) {
														t.stop();
													}),
													this.el.addEventListener("blur", function (e) {
														(t.el.value && 0 !== t.el.value.length) ||
															t.start();
													}));
											},
										},
										{
											key: "insertCursor",
											value: function () {
												this.showCursor &&
													(this.cursor ||
														((this.cursor = document.createElement("span")),
														(this.cursor.className = "typed-cursor"),
														this.cursor.setAttribute("aria-hidden", !0),
														(this.cursor.innerHTML = this.cursorChar),
														this.el.parentNode &&
															this.el.parentNode.insertBefore(
																this.cursor,
																this.el.nextSibling
															)));
											},
										},
									]),
									t
								);
							})();
						(e.default = r), (t.exports = e.default);
					},
					function (t, e, i) {
						"use strict";
						Object.defineProperty(e, "__esModule", { value: !0 });
						var n,
							s =
								Object.assign ||
								function (t) {
									for (var e = 1; e < arguments.length; e++) {
										var i = arguments[e];
										for (var n in i)
											Object.prototype.hasOwnProperty.call(i, n) &&
												(t[n] = i[n]);
									}
									return t;
								},
							o = (function () {
								function t(t, e) {
									for (var i = 0; i < e.length; i++) {
										var n = e[i];
										(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											"value" in n && (n.writable = !0),
											Object.defineProperty(t, n.key, n);
									}
								}
								return function (e, i, n) {
									return i && t(e.prototype, i), n && t(e, n), e;
								};
							})(),
							r = (n = i(2)) && n.__esModule ? n : { default: n },
							a = (function () {
								function t() {
									!(function (t, e) {
										if (!(t instanceof e))
											throw new TypeError("Cannot call a class as a function");
									})(this, t);
								}
								return (
									o(t, [
										{
											key: "load",
											value: function (t, e, i) {
												if (
													((t.el =
														"string" == typeof i
															? document.querySelector(i)
															: i),
													(t.options = s({}, r.default, e)),
													(t.isInput = "input" === t.el.tagName.toLowerCase()),
													(t.attr = t.options.attr),
													(t.bindInputFocusEvents =
														t.options.bindInputFocusEvents),
													(t.showCursor = !t.isInput && t.options.showCursor),
													(t.cursorChar = t.options.cursorChar),
													(t.cursorBlinking = !0),
													(t.elContent = t.attr
														? t.el.getAttribute(t.attr)
														: t.el.textContent),
													(t.contentType = t.options.contentType),
													(t.typeSpeed = t.options.typeSpeed),
													(t.startDelay = t.options.startDelay),
													(t.backSpeed = t.options.backSpeed),
													(t.smartBackspace = t.options.smartBackspace),
													(t.backDelay = t.options.backDelay),
													(t.fadeOut = t.options.fadeOut),
													(t.fadeOutClass = t.options.fadeOutClass),
													(t.fadeOutDelay = t.options.fadeOutDelay),
													(t.isPaused = !1),
													(t.strings = t.options.strings.map(function (t) {
														return t.trim();
													})),
													"string" == typeof t.options.stringsElement
														? (t.stringsElement = document.querySelector(
																t.options.stringsElement
														  ))
														: (t.stringsElement = t.options.stringsElement),
													t.stringsElement)
												) {
													(t.strings = []),
														(t.stringsElement.style.display = "none");
													var n = Array.prototype.slice.apply(
															t.stringsElement.children
														),
														o = n.length;
													if (o)
														for (var a = 0; a < o; a += 1) {
															var l = n[a];
															t.strings.push(l.innerHTML.trim());
														}
												}
												for (var a in ((t.strPos = 0),
												(t.arrayPos = 0),
												(t.stopNum = 0),
												(t.loop = t.options.loop),
												(t.loopCount = t.options.loopCount),
												(t.curLoop = 0),
												(t.shuffle = t.options.shuffle),
												(t.sequence = []),
												(t.pause = {
													status: !1,
													typewrite: !0,
													curString: "",
													curStrPos: 0,
												}),
												(t.typingComplete = !1),
												t.strings))
													t.sequence[a] = a;
												(t.currentElContent = this.getCurrentElContent(t)),
													(t.autoInsertCss = t.options.autoInsertCss),
													this.appendAnimationCss(t);
											},
										},
										{
											key: "getCurrentElContent",
											value: function (t) {
												return t.attr
													? t.el.getAttribute(t.attr)
													: t.isInput
													? t.el.value
													: "html" === t.contentType
													? t.el.innerHTML
													: t.el.textContent;
											},
										},
										{
											key: "appendAnimationCss",
											value: function (t) {
												var e = "data-typed-js-css";
												if (
													t.autoInsertCss &&
													(t.showCursor || t.fadeOut) &&
													!document.querySelector("[" + e + "]")
												) {
													var i = document.createElement("style");
													(i.type = "text/css"), i.setAttribute(e, !0);
													var n = "";
													t.showCursor &&
														(n +=
															"\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),
														t.fadeOut &&
															(n +=
																"\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),
														0 !== i.length &&
															((i.innerHTML = n), document.body.appendChild(i));
												}
											},
										},
									]),
									t
								);
							})();
						e.default = a;
						var l = new a();
						e.initializer = l;
					},
					function (t, e) {
						"use strict";
						Object.defineProperty(e, "__esModule", { value: !0 });
						(e.default = {
							strings: [
								"These are the default values...",
								"You know what you should do?",
								"Use your own!",
								"Have a great day!",
							],
							stringsElement: null,
							typeSpeed: 0,
							startDelay: 0,
							backSpeed: 0,
							smartBackspace: !0,
							shuffle: !1,
							backDelay: 700,
							fadeOut: !1,
							fadeOutClass: "typed-fade-out",
							fadeOutDelay: 500,
							loop: !1,
							loopCount: 1 / 0,
							showCursor: !0,
							cursorChar: "|",
							autoInsertCss: !0,
							attr: null,
							bindInputFocusEvents: !1,
							contentType: "html",
							onBegin: function (t) {},
							onComplete: function (t) {},
							preStringTyped: function (t, e) {},
							onStringTyped: function (t, e) {},
							onLastStringBackspaced: function (t) {},
							onTypingPaused: function (t, e) {},
							onTypingResumed: function (t, e) {},
							onReset: function (t) {},
							onStop: function (t, e) {},
							onStart: function (t, e) {},
							onDestroy: function (t) {},
						}),
							(t.exports = e.default);
					},
					function (t, e) {
						"use strict";
						Object.defineProperty(e, "__esModule", { value: !0 });
						var i = (function () {
								function t(t, e) {
									for (var i = 0; i < e.length; i++) {
										var n = e[i];
										(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											"value" in n && (n.writable = !0),
											Object.defineProperty(t, n.key, n);
									}
								}
								return function (e, i, n) {
									return i && t(e.prototype, i), n && t(e, n), e;
								};
							})(),
							n = (function () {
								function t() {
									!(function (t, e) {
										if (!(t instanceof e))
											throw new TypeError("Cannot call a class as a function");
									})(this, t);
								}
								return (
									i(t, [
										{
											key: "typeHtmlChars",
											value: function (t, e, i) {
												if ("html" !== i.contentType) return e;
												var n = t.substr(e).charAt(0);
												if ("<" === n || "&" === n) {
													var s;
													for (
														s = "<" === n ? ">" : ";";
														t.substr(e + 1).charAt(0) !== s &&
														!(1 + ++e > t.length);

													);
													e++;
												}
												return e;
											},
										},
										{
											key: "backSpaceHtmlChars",
											value: function (t, e, i) {
												if ("html" !== i.contentType) return e;
												var n = t.substr(e).charAt(0);
												if (">" === n || ";" === n) {
													var s;
													for (
														s = ">" === n ? "<" : "&";
														t.substr(e - 1).charAt(0) !== s && !(--e < 0);

													);
													e--;
												}
												return e;
											},
										},
									]),
									t
								);
							})();
						e.default = n;
						var s = new n();
						e.htmlParser = s;
					},
				]);
			}),
				(t.exports = e());
		},
	},
]);
//# sourceMappingURL=vendor.bundle.js.map

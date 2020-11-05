import { m as _typeof, M as _createClass, N as _classCallCheck, Q as _toConsumableArray, a8 as _asyncToGenerator, R as _slicedToArray } from './web.url.fd241fe0.js';
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, o as onMount, _ as _goto, V as assign, W as exclude_internal_props, f as element, l as claim_element, m as children, h as detach_dev, r as attr_dev, p as add_location, u as insert_dev, H as noop$1, b as binding_callbacks } from './client.65c31bad.js';
import './markmap.235e0705.js';

/*! @gera2ld/jsx-dom v1.2.1 | ISC License */
var propRules = ['innerHTML', 'innerText', 'textContent', {
  key: 'value',
  tag: 'textarea'
}];
var Fragment = {
  name: 'Fragment'
};

function createElement(tag, props) {
  var result;
  var ref;

  if (tag === Fragment) {
    result = document.createDocumentFragment();
  } else if (typeof tag !== 'string') {
    throw new Error("Invalid element type: " + tag);
  } else {
    var _el = createElement.createElement(tag);

    result = _el;

    if (props) {
      Object.keys(props).forEach(function (key) {
        var value = props[key];
        if (value == null) return;

        if (key.startsWith('on')) {
          _el.addEventListener(key.slice(2).toLowerCase(), value);
        } else if (key === 'children') {
          renderChildren(_el, value);
        } else if (key === 'style' && _typeof(value) === 'object') {
          renderStyle(_el, value);
        } else if (key === 'dangerouslySetInnerHTML' && value) {
          _el.innerHTML = value.__html || ''; // eslint-disable-line no-underscore-dangle
        } else if (key === 'ref' && typeof value === 'function') {
          ref = value;
        } else if (typeof value === 'boolean') {
          if (value) _el.setAttribute(key, key);else _el.removeAttribute(key);
        } else if (isProp(tag, key)) {
          _el[key] = value;
        } else {
          if (key === 'className') key = 'class';else if (key === 'labelFor') key = 'for';

          _el.setAttribute(key, "" + value);
        }
      });
    }
  }

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  renderChildren(result, children);
  if (ref) ref(result);
  return result;
}

createElement.createElement = function (tag) {
  return document.createElement(tag);
};

function isProp(tag, key) {
  var ctx = {
    tag: tag,
    key: key
  };
  return propRules.some(function (rule) {
    if (typeof rule === 'string') return key === rule;
    return Object.keys(rule).every(function (rk) {
      return rule[rk] === ctx[rk];
    });
  });
}

function renderChildren(el, children) {
  children.forEach(function (child) {
    if (child == null || child === false) return;

    if (Array.isArray(child)) {
      renderChildren(el, child);
      return;
    }

    if (_typeof(child) !== 'object') {
      el.appendChild(document.createTextNode("" + child));
    } else {
      el.appendChild(child);
    }
  });
}

function renderStyle(el, style) {
  Object.keys(style).forEach(function (key) {
    var value = style[key];
    if (typeof value === 'number') el.style[key] = value + "px";else el.style[key] = value;
  });
}

function renderBrand() {
  return /*#__PURE__*/createElement("div", {
    className: "mm-toolbar-brand"
  }, /*#__PURE__*/createElement("img", {
    alt: "markmap",
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACoFBMVEUAAAAAAAD//wAAAACAgAD//wAAAABVVQCqqgBAQACAQACAgABmZgBtbQAAAABgQABgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaFQAAAAAAAAAAAAAAAAAHAAARBQIdGAIYEwI/OgJYUQUfHQI+OgJDPgJJRARBPQRJQgRRSwRRTQRIQQRUTgRUUARZUgRSTQRPSQRjWgZORQRfWQZsZAhTTQRNRwRWUAZkXAZOSARUTgZPRwRRSQRoYwZWUQZWTgRbUwZmXQZoXghmXwdqYwdsYwdfVwVmXQdqYgdiWgVpYAl3bgl6cgl4cAqLggw8OAOWjA2Uig1OSAR2bQihlg55cAh5cAh6cQmMgwyOhAyUjA2QhQ2Uiw2Viw2soBCflA+voxGwpRGhlg+hlg+snxGroBGjmBCpnBC0pxKyphKxpRG2qhK0qBK5rBK5rBP/7h3/8B7/8R3/8h3/8R7/8h786x397B3+7R3EtxT66Rz66hz76hz86xz96xz97Bz+7Rz45xz56Bz76hz97Bz97B3MvRX15Rv25Rv45xz66Rz76hz97B3+7R3IuxX05Bv15Bv25Rz56Bz66Ry/sxPAsxPCtRTCthTNvxbZyxfczxfi0xjl1Rnn2Bnr2xrr3Brs3Rru3Rru3xrv3hrw3xrx4Bvx4Rvy4hvz4hvz4xv04xv05Bv14xv15Bv15Rv25Bv25Rv25Rz25hv35hv35xv45xv45xz55xz56Bv56Bz66Rv66Rz76Rv76Rz76hz86hv86xz+7h3/7R3/7h3/7x3/8B3/8B7/8R3/8R4Yqhj5AAAAq3RSTlMAAQECAgIDAwMEBAQFBwgICAwQERITFRYXGBkbHB0eHyQlJyguNTg8RUZISU5PV2FiY2RlZmdqa2xubnJzc3R2d3d3eXl5eXp7fH1+gIGCgoKDg4SEhIWGh4eHiYmJjIyMjZSUlJ+sra+zt7i4uru8ztHV1tbW2d7g4OHi4uPk5ufp7Ozv9fX29/f3+Pj6+vr7+/v7+/v7+/z8/Pz8/f39/f39/f3+/v7+/v7K6J1dAAACHklEQVQ4y2NgwAoYWdi5uLm5GXHIcrLCmMzYpDmAhKCKjoGtp40MFhVsDAwSxmmVEzZu2XvqSLkchjw3g0h445Ybd24vmTN1Usd5X3R5DgaNqgN35sycP2/GxMkTMRVwMOivvtO3YsWUm3duX790EcMKdgbNNXdnnJh1+9T6ipzU+FB0RzIyiFYB5WdfaElUF8TmTQ6GwH39J2bvypMHcpg4MAKKkUGo5s6KWRfyGRh4WJClGEGBCgS8DLobliy/3abMwM8NBYwQjXDgf3ryxOspyKYyg+RFTFwdnYDAzbrw+oLFm9Ot3J3AwNHFTBykQrhg++GDh48cOXzk4P6VZy8s230MyAGCwwcP7iyRBJpiur1n8hQIWHX27NkLi6bAwOSuow5ABeY7OydOhoCFIAULe6E8YFCf8QAqEC86evniZTA4tfLsuRXHr0E4ly9ePF0uC3KnpH1MZBQQxPoVgxyZ5RMdBQaRMc6yIEcihWbQGaA3k9G8CfQoN0pAtSoxCMACihk9qGtBQZ2LHtRIkRUMiqwd2TJADiswsrjQlAGju/o+MLrPNkWo8mFN1ewMWmvBCebQ0rKMJG87QzF0FRwMRuvugpLcrXu3rp7Zs61UCtMZ2nVHbk+fMX/+jMmTp3Sf9MLiULG45q237txaPG3yxPYrYQzYMo60RWbD3E27Ll68Uq+AK+uJqOlZBiSEKGLNnMA0iDfzwrI/NKgBOivk9piPdtUAAAAASUVORK5CYII="
  }), /*#__PURE__*/createElement("a", {
    href: "https://markmap.js.org/"
  }, "markmap"));
}

function renderItem(_ref) {
  var title = _ref.title,
      content = _ref.content,
      onClick = _ref.onClick;
  return /*#__PURE__*/createElement("div", {
    className: "mm-toolbar-item",
    title: title,
    innerHTML: content,
    onClick: onClick
  });
}

var promise;

function safeCaller(fn) {
  return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!promise) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            promise = fn.apply(void 0, _args);
            _context.prev = 3;
            _context.next = 6;
            return promise;

          case 6:
            _context.prev = 6;
            promise = null;
            return _context.finish(6);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3,, 6, 9]]);
  }));
}

var Toolbar = /*#__PURE__*/function () {
  _createClass(Toolbar, null, [{
    key: "create",
    value: function create(mm) {
      var toolbar = new Toolbar();
      toolbar.attach(mm);
      return toolbar.render();
    }
  }, {
    key: "icon",
    value: function icon(path) {
      return "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" on:click={onZoomIn}><path fill=\"none\" stroke-width=\"2\" stroke=\"currentColor\" d=\"".concat(path, "\"/></svg>");
    }
  }]);

  function Toolbar() {
    _classCallCheck(this, Toolbar);

    this.showBrand = true;
    this.registry = {};
    this.markmap = null;
    this.items = ['zoomIn', 'zoomOut', 'fit'];
    this.register({
      id: 'zoomIn',
      title: 'Zoom in',
      content: Toolbar.icon('M10 6 v8 M6 10 h8'),
      onClick: this.getHandler(function (mm) {
        return mm.rescale(1.25);
      })
    });
    this.register({
      id: 'zoomOut',
      title: 'Zoom out',
      content: Toolbar.icon('M6 10 h8'),
      onClick: this.getHandler(function (mm) {
        return mm.rescale(0.8);
      })
    });
    this.register({
      id: 'fit',
      title: 'Fit window size',
      content: Toolbar.icon('M4 8 h3 v-3 M4 12 h3 v3 M16 8 h-3 v-3 M16 12 h-3 v3'),
      onClick: this.getHandler(function (mm) {
        return mm.fit();
      })
    });
  }

  _createClass(Toolbar, [{
    key: "setBrand",
    value: function setBrand(show) {
      this.showBrand = show;
    }
  }, {
    key: "register",
    value: function register(data) {
      this.registry[data.id] = data;
    }
  }, {
    key: "getHandler",
    value: function getHandler(handle) {
      var _this = this;

      handle = safeCaller(handle);
      return function (e) {
        if (_this.markmap) handle(_this.markmap);
      };
    }
  }, {
    key: "setItems",
    value: function setItems(items) {
      this.items = _toConsumableArray(items);
    }
  }, {
    key: "attach",
    value: function attach(mm) {
      this.markmap = mm;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var items = this.items.map(function (item) {
        if (typeof item === 'string') {
          var data = _this2.registry[item];
          if (!data) console.warn("[markmap-toolbar] ".concat(item, " not found"));
          return data;
        }

        return item;
      }).filter(Boolean);
      return /*#__PURE__*/createElement("div", {
        className: "mm-toolbar"
      }, this.showBrand && renderBrand(), items.map(renderItem));
    }
  }]);

  return Toolbar;
}();

/* src/components/toolbar.svelte generated by Svelte v3.29.4 */
const file = "src/components/toolbar.svelte";

function create_fragment(ctx) {
	let div;
	let div_class_value;

	const block = {
		c: function create() {
			div = element("div");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			children(div).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", div_class_value = /*$$props*/ ctx[1].class);
			add_location(div, file, 41, 0, 926);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			/*div_binding*/ ctx[5](div);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*$$props*/ 2 && div_class_value !== (div_class_value = /*$$props*/ ctx[1].class)) {
				attr_dev(div, "class", div_class_value);
			}
		},
		i: noop$1,
		o: noop$1,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			/*div_binding*/ ctx[5](null);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Toolbar", slots, []);
	let el;
	let { mm } = $$props;
	let { showBrand = false } = $$props;
	let { isFull = false } = $$props;
	const toolbar = new Toolbar();
	toolbar.setBrand(showBrand);

	toolbar.register({
		id: "repl",
		title: "Open in REPL",
		content: Toolbar.icon("M5 6 v8 h10 v-8 h-10 z m5 0 v8"),
		onClick: handleREPL
	});

	toolbar.register({
		id: "full",
		title: "Full page view",
		content: Toolbar.icon("M5 9 v-3 h3 M5 11 v3 h3 M15 9 v-3 h-3 M15 11 v3 h-3"),
		onClick: handleFullPageView
	});

	toolbar.setItems(["zoomIn", "zoomOut", "fit", isFull ? "repl" : "full"]);

	onMount(() => {
		el.append(toolbar.render());
	});

	function handleFullPageView() {
		_goto("/full" + window.location.hash);
	}

	function handleREPL() {
		_goto("/repl" + window.location.hash);
	}

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			el = $$value;
			$$invalidate(0, el);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(1, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("mm" in $$new_props) $$invalidate(2, mm = $$new_props.mm);
		if ("showBrand" in $$new_props) $$invalidate(3, showBrand = $$new_props.showBrand);
		if ("isFull" in $$new_props) $$invalidate(4, isFull = $$new_props.isFull);
	};

	$$self.$capture_state = () => ({
		onMount,
		goto: _goto,
		Toolbar,
		el,
		mm,
		showBrand,
		isFull,
		toolbar,
		handleFullPageView,
		handleREPL
	});

	$$self.$inject_state = $$new_props => {
		$$invalidate(1, $$props = assign(assign({}, $$props), $$new_props));
		if ("el" in $$props) $$invalidate(0, el = $$new_props.el);
		if ("mm" in $$props) $$invalidate(2, mm = $$new_props.mm);
		if ("showBrand" in $$props) $$invalidate(3, showBrand = $$new_props.showBrand);
		if ("isFull" in $$props) $$invalidate(4, isFull = $$new_props.isFull);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*mm*/ 4) {
			 toolbar.attach(mm);
		}
	};

	$$props = exclude_internal_props($$props);
	return [el, $$props, mm, showBrand, isFull, div_binding];
}

class Toolbar_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { mm: 2, showBrand: 3, isFull: 4 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Toolbar_1",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*mm*/ ctx[2] === undefined && !("mm" in props)) {
			console.warn("<Toolbar> was created without expected prop 'mm'");
		}
	}

	get mm() {
		throw new Error("<Toolbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set mm(value) {
		throw new Error("<Toolbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get showBrand() {
		throw new Error("<Toolbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set showBrand(value) {
		throw new Error("<Toolbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isFull() {
		throw new Error("<Toolbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isFull(value) {
		throw new Error("<Toolbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

var DEFAULT_FILENAME = 'markmap.md';
var DEFAULT_GIST = ['af76a4c245b302206b16aec503dbe07b', 'gitee:a73wgucr28dhlxp91kytm57'];

function noop() {}

if (!Promise.any) {
  Promise.any = function (promises) {
    return new Promise(function (resolve, reject) {
      Promise.all(promises.map(function (item) {
        return Promise.resolve(item).then(resolve, noop);
      })).then(reject);
    });
  };
}

function loadFromGitHubGist(_x, _x2) {
  return _loadFromGitHubGist.apply(this, arguments);
}

function _loadFromGitHubGist() {
  _loadFromGitHubGist = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(key, filename) {
    var res, data, file, content, _res;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("https://api.github.com/gists/".concat(key), {
              headers: {
                Accept: 'application/vnd.github.v3+json'
              }
            });

          case 2:
            res = _context2.sent;
            _context2.next = 5;
            return res.json();

          case 5:
            data = _context2.sent;
            file = data.files[filename];

            if (file) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return");

          case 9:
            content = file.content;

            if (!file.truncated) {
              _context2.next = 17;
              break;
            }

            _context2.next = 13;
            return fetch(file.raw_url);

          case 13:
            _res = _context2.sent;
            _context2.next = 16;
            return _res.text();

          case 16:
            content = _context2.sent;

          case 17:
            return _context2.abrupt("return", content);

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _loadFromGitHubGist.apply(this, arguments);
}

function loadFromGiteeGist(_x3, _x4) {
  return _loadFromGiteeGist.apply(this, arguments);
}

function _loadFromGiteeGist() {
  _loadFromGiteeGist = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(key, filename) {
    var res, data, file, content, _res2;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch("https://gitee.com/api/v5/gists/".concat(key));

          case 2:
            res = _context3.sent;
            _context3.next = 5;
            return res.json();

          case 5:
            data = _context3.sent;
            file = data.files[filename];

            if (file) {
              _context3.next = 9;
              break;
            }

            return _context3.abrupt("return");

          case 9:
            content = file.content;

            if (!file.truncated) {
              _context3.next = 17;
              break;
            }

            _context3.next = 13;
            return fetch(file.raw_url);

          case 13:
            _res2 = _context3.sent;
            _context3.next = 16;
            return _res2.text();

          case 16:
            content = _context3.sent;

          case 17:
            return _context3.abrupt("return", content);

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _loadFromGiteeGist.apply(this, arguments);
}

function loadFromGist(_x5) {
  return _loadFromGist.apply(this, arguments);
}

function _loadFromGist() {
  _loadFromGist = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(gist) {
    var _gist$match, _gist$match2, source, key, pathname, filename;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _gist$match = gist.match(/^(?:(\w+):)?(\w+)(?:\/(.*))?$|/), _gist$match2 = _slicedToArray(_gist$match, 4), source = _gist$match2[1], key = _gist$match2[2], pathname = _gist$match2[3];

            if (key) {
              _context4.next = 3;
              break;
            }

            return _context4.abrupt("return");

          case 3:
            filename = pathname || DEFAULT_FILENAME;

            if (!(source === 'gitee')) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return", loadFromGiteeGist(key, filename));

          case 6:
            return _context4.abrupt("return", loadFromGitHubGist(key, filename));

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _loadFromGist.apply(this, arguments);
}

function loadFromFastestGist(_x6) {
  return _loadFromFastestGist.apply(this, arguments);
}

function _loadFromFastestGist() {
  _loadFromFastestGist = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(gistList) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", Promise.any(gistList.map(loadFromGist)));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _loadFromFastestGist.apply(this, arguments);
}

function getHashHandler(update) {
  var lastSession;

  function handleHashChange() {
    return _handleHashChange.apply(this, arguments);
  }

  function _handleHashChange() {
    _handleHashChange = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var session, hq, gist, text;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              session = {};
              lastSession = session;
              hq = new URLSearchParams(window.location.hash.slice(1));
              gist = hq.get('gist');
              gist = gist && gist.split(',');
              _context.next = 7;
              return loadFromFastestGist(gist || DEFAULT_GIST);

            case 7:
              text = _context.sent;

              if (text != null && session === lastSession) {
                update(text);
              }

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleHashChange.apply(this, arguments);
  }

  return handleHashChange;
}

function subscribeHash(update) {
  var handler = getHashHandler(update);
  window.addEventListener('hashchange', handler);
  handler(update);
  return function () {
    return window.removeEventListener('hashchange', handler);
  };
}

export { Toolbar_1 as T, subscribeHash as s };

import { ViteSSG } from "vite-ssg";
import { resolveComponent, useSSRContext, withCtx, createTextVNode } from "vue";
import { ssrRenderComponent, ssrRenderAttrs } from "vue/server-renderer";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_RouterView = resolveComponent("RouterView");
  _push(ssrRenderComponent(_component_RouterView, _attrs, null, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const routes$1 = [
  {
    path: "/",
    name: "/",
    component: () => import("./assets/index-DIZ4GsNG.js")
    /* no children */
  },
  {
    path: "/ulid",
    name: "/ulid",
    component: () => import("./assets/ulid-Dunddh_I.js")
    /* no children */
  }
];
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_link = resolveComponent("router-link");
  const _component_RouterView = resolveComponent("RouterView");
  _push(`<div${ssrRenderAttrs(_attrs)}><ul><li>`);
  _push(ssrRenderComponent(_component_router_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_router_link, { to: "/ulid" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Ulid`);
      } else {
        return [
          createTextVNode("Ulid")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul>`);
  _push(ssrRenderComponent(_component_RouterView, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _default
}, Symbol.toStringTag, { value: "Module" }));
const setupLayouts = (routes2) => {
  const layouts = {};
  const modules = /* @__PURE__ */ Object.assign({ "/src/layouts/default.vue": __vite_glob_0_0 });
  Object.entries(modules).forEach(([name, module]) => {
    let key = name.replace("/src/layouts/", "").replace(".vue", "");
    layouts[key] = module.default;
  });
  function deepSetupLayout(routes3, top = true) {
    return routes3.map((route) => {
      var _a, _b, _c, _d, _e, _f;
      if (((_a = route.children) == null ? void 0 : _a.length) > 0) {
        route.children = deepSetupLayout(route.children, false);
      }
      if (top) {
        const skipLayout = !route.component && ((_b = route.children) == null ? void 0 : _b.find((r) => {
          var _a2;
          return (r.path === "" || r.path === "/") && ((_a2 = r.meta) == null ? void 0 : _a2.isLayout);
        }));
        if (skipLayout) {
          return route;
        }
        if (((_c = route.meta) == null ? void 0 : _c.layout) !== false) {
          return {
            path: route.path,
            component: layouts[((_d = route.meta) == null ? void 0 : _d.layout) || "default"],
            children: route.path === "/" ? [route] : [{ ...route, path: "" }],
            meta: {
              isLayout: true
            }
          };
        }
      }
      if ((_e = route.meta) == null ? void 0 : _e.layout) {
        return {
          path: route.path,
          component: layouts[(_f = route.meta) == null ? void 0 : _f.layout],
          children: [{ ...route, path: "" }],
          meta: {
            isLayout: true
          }
        };
      }
      return route;
    });
  }
  return deepSetupLayout(routes2);
};
const routes = setupLayouts(routes$1);
const createApp = ViteSSG(App, { routes });
export {
  _export_sfc as _,
  createApp
};

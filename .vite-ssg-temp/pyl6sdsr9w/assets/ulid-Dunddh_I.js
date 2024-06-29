import { defineComponent, ref, onMounted, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { Ulid, Uuid4 } from "id128";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ulid",
  __ssrInlineRender: true,
  setup(__props) {
    const ulid = ref("");
    const guid = ref("");
    const generateNew = () => {
      const id = Ulid.generate();
      ulid.value = id.toCanonical();
      guid.value = Uuid4.fromRaw(id.toRaw()).toCanonical();
    };
    onMounted(() => {
      generateNew();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>Ulid</h1><form><div><label for="ulid">ULID</label><button class="copy-btn" type="button"> copy </button><br><input${ssrRenderAttr("value", unref(ulid))} name="ulid" type="text" class="id-input" readonly></div><div><label for="guid">GUID</label><button class="copy-btn" type="button"> copy </button><br><input${ssrRenderAttr("value", unref(guid))} name="guid" type="text" class="id-input" readonly></div><button type="submit">NEW ID</button></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/ulid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

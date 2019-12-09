// export const VueTinymce = require("./VueTinymce").default;
import index from "./VueTinymce";
export const VueTinymce = index;

let Vue;

function install(_Vue) {
  if (Vue) {
    console.warn(
      "[VueTinymce] already installed. Vue.use(VueTinymce) should be called only once."
    );
    return;
  }

  Vue = _Vue;

  Vue.component(VueTinymce.name, VueTinymce);
}

/* istanbul ignore next */
VueTinymce.install = install;

// auto install in dist mode
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

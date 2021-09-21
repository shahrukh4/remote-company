import {DropDown} from "@/js/components";

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue) {
    Vue.component("drop-down", DropDown);
  }
};

export default GlobalComponents;

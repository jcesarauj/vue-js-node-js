import { FormGroupInput, Card, DropDown, Select, Row, Grid } from "../components/layout/index";

const GlobalComponents = {
  install(Vue) {
    Vue.component("w-input", FormGroupInput);
    Vue.component("drop-down", DropDown);
    Vue.component("card", Card);
    Vue.component("v-select", Select);
    Vue.component("row", Row);
    Vue.component("grid", Grid);    
  }
};

export default GlobalComponents;

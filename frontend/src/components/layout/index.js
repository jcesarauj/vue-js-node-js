import FormGroupInput from "./inputs/input";
import DropDown from "./inputs/drop-down";
import Table from "./table/index.vue";
import Card from "./cards/card";
import ChartCard from "./cards/chart-card.vue";
import StatsCard from "./cards/stats-card.vue";
import SidebarPlugin from "./sidebar-plugin/index";
import Select from 'vue-select'
import Row from './group/row/index.vue'
import Grid from './group/grid/index.vue'

let components = {
  FormGroupInput,
  Card,
  ChartCard,
  StatsCard,
  Table,
  DropDown,
  SidebarPlugin,
  Select,
  Row,
  Grid
};

export default components;

export {
  FormGroupInput,
  Card,
  ChartCard,
  StatsCard,
  Table,
  DropDown,
  SidebarPlugin,
  Select,
  Row,
  Grid
};

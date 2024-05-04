import { createApp } from "vue";

import PrimeVue from 'primevue/config';
import "primevue/resources/themes/aura-light-green/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import Button from 'primevue/button';
import Card from 'primevue/card';
import Sidebar from 'primevue/sidebar';
import Toolbar from 'primevue/toolbar';
import Avatar from 'primevue/avatar';
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import InputText from "primevue/inputtext";
import Image from "primevue/image";
import SelectButton from 'primevue/selectbutton';
import Dialog from 'primevue/dialog';
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import DialogStyle from "primevue/dialog/style/dialogstyle.esm.js";
import DialogService from "primevue/dialogservice";
import Dropdown from "primevue/dropdown";
import MultiSelect from "primevue/multiselect";
import Checkbox from "primevue/checkbox";
import ColumnGroup from "primevue/columngroup";
import Row from "primevue/row";

import Ripple from 'primevue/ripple';
import Styleclass from 'primevue/styleclass';
import router from './router';

import App from "./App.vue";

const app = createApp(App);

app.use(PrimeVue, { ripple: true });

app.component('Button', Button);
app.component('Card', Card);
app.component('Sidebar', Sidebar);
app.component('Toolbar', Toolbar);
app.component('Avatar', Avatar);
app.component('IconField', IconField);
app.component('InputIcon', InputIcon);
app.component('InputText', InputText);
app.component('Image', Image);
app.component('SelectButton', SelectButton);
app.component('Dialog', Dialog);
app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('DialogStyle', DialogStyle);
app.component('DialogService', DialogService);
app.component('Dropdown', Dropdown);
app.component('MultiSelect', MultiSelect);
app.component('Checkbox', Checkbox);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);


app.directive('ripple', Ripple);
app.directive('styleclass', Styleclass);

app.use(router);

app.mount("#app");

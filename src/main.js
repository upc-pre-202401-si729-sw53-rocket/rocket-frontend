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

app.directive('ripple', Ripple);
app.directive('styleclass', Styleclass);

app.use(router);

app.mount("#app");

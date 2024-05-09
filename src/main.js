import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import './style/general.scss'
import App from './App.vue'

library.add(fas);

createApp(App)
.component('fa', FontAwesomeIcon)
.mount('#app')

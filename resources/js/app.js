import { Vue } from '@js/vue'
import axios from 'axios'

window.axios = axios

__webpack_public_path__ = 'http://penguin.linux.test:8080/'

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;

import App from '@pages/App'

const app = new Vue(App).$mount('#app')

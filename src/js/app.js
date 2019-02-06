import Vue from 'vue';
import App from '../components/App'
try {
    // window.$ = window.jQuery = require('jQuery');
    // require('bulma');
}
catch(e) {}

const app = new Vue({
    el: '#app',
    components: {
        App
    }
});
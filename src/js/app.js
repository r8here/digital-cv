import Vue from 'vue';

try {
    // window.$ = window.jQuery = require('jQuery');
    // require('bulma');
}
catch(e) {}

const app = new Vue({
    el: '#app',
    // render: h => h(TheApp)
});
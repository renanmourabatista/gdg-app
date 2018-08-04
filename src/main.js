// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBfmjz8SFxGuEZ86Oq5cawEm_Pns7OodYE",
    authDomain: "projeto-vue-gdg.firebaseapp.com",
    databaseURL: "https://projeto-vue-gdg.firebaseio.com",
    projectId: "projeto-vue-gdg",
    storageBucket: "projeto-vue-gdg.appspot.com",
    messagingSenderId: "339057106388"
};
firebase.initializeApp(config);

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */

firebase.auth()
    .onAuthStateChanged(() => {
        new Vue({
            el: '#app',
            router,
            components: { App },
            template: '<App/>',
        });
    });

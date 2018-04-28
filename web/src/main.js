import Vue from 'vue';

import App from './App.vue';
import store from './store';

const vm = new Vue({
  el: '#app',
  store,
  render: h => h(App),
  methods: {
    initMessage() {
      if (typeof window !== 'undefined') {
        window.addEventListener('message', e => {
          if (e) {
            if (e.data.type === 'init') {
              console.log('init data here??', e.data.data);
              store.dispatch('setAnimationData', e.data.data);
            } else if (e.data.type === 'update') {
              store.dispatch('setAnimationData', e.data.data);
            }
          }
        });
      }
    },
  },
});

vm.initMessage();

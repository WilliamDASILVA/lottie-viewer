export default {
  createInstance(store, payload) {
    const { container, data } = payload;
    store.commit('CREATE_INSTANCE', {
      container,
      data,
    });
  },
  updateInstanceData(store, payload) {
    const { data } = payload;
    store.commit('DESTROY_INSTANCE');

    if (store.getters.getContainer && data) {
      store.dispatch('createInstance', {
        container: store.getters.getContainer,
        data,
      });
    }
  },
  setLoop(store, value) {
    store.commit('SET_LOOP', value);
  },
  setAnimationData(store, value) {
    store.commit('SET_ANIMATION_DATA', value);
  },
  playPause(store) {
    if (store.getters.isPlaying) {
      store.commit('PAUSE');
    } else {
      store.commit('PLAY');
    }
  },
  setSpeed(store, speed) {
    store.commit('SET_SPEED', speed);
  },
};

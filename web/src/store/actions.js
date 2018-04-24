export default {
  setLoop(store, value) {
    store.commit('SET_LOOP', value);
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

export default {
  isLooping(state) {
    return state.loop;
  },
  isPlaying(state) {
    return state.play;
  },
  getSpeed(state) {
    return state.speed;
  },
};

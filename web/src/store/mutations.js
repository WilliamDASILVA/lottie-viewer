export default {
  PLAY(state) {
    state.play = true;
  },
  PAUSE(state) {
    state.play = false;
  },
  SET_SPEED(state, speed) {
    state.speed = speed;
  },
  SET_LOOP(state, value) {
    state.loop = value;
  },
};

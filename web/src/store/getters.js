export default {
  isLooping(state) {
    return state.instance ? state.instance.isLooping : state.loop;
  },
  isPlaying(state) {
    return state.instance ? !state.instance.isPaused : state.play;
  },
  getSpeed(state) {
    return state.speed;
  },
  getFramesCount(state) {
    console.log('ah', state.instance);
    return state.instance ? state.instance.totalFrames : 0;
  },
  getCurrentFrame(state) {
    return state.instance ? state.instance.currentFrame.toFixed(2) : 0;
  },
  getFrameRate(state) {
    return state.instance ? state.instance.frameRate.toFixed(2) : 0;
  },
};

import lottie from 'lottie-web';

export default {
  CREATE_INSTANCE(state, payload) {
    const { container, data } = payload;
    state.container = container;
    state.animationData = data;
    state.instance = lottie.loadAnimation({
      container,
      renderer: 'svg',
      loop: state.loop,
      autoplay: true,
      animationData: data,
    });
  },
  DESTROY_INSTANCE(state) {
    if (state.instance) {
      state.instance.destroy();
    }
  },
  SET_ANIMATION_DATA(state, data) {
    state.animationData = data;
  },
  PLAY(state) {
    state.play = true;
    if (state.instance) {
      state.instance.play();
    }
  },
  PAUSE(state) {
    state.play = false;
    if (state.instance) {
      state.instance.pause();
    }
  },
  SET_SPEED(state, speed) {
    state.speed = speed;
    if (state.instance) {
      state.instance.setSpeed(speed);
    }
  },
  SET_LOOP(state, value) {
    state.loop = value;
    if (state.instance) {
      state.instance.loop = value;
    }
  },
};

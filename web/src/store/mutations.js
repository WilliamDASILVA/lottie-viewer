import lottie from 'lottie-web';

export default {
  CREATE_INSTANCE(state, payload) {
    const { container, data } = payload;
    console.log('container', container, data);
    this.state.instance = lottie.loadAnimation({
      container,
      renderer: 'svg',
      loop: this.state.loop,
      autoplay: true,
      animationData: data,
    });
  },
  PLAY(state) {
    state.play = true;
    if (this.state.instance) {
      this.state.instance.play();
    }
  },
  PAUSE(state) {
    state.play = false;
    if (this.state.instance) {
      this.state.instance.pause();
    }
  },
  SET_SPEED(state, speed) {
    state.speed = speed;
    if (this.state.instance) {
      this.state.instance.setSpeed(speed);
    }
  },
  SET_LOOP(state, value) {
    state.loop = value;
    if (this.state.instance) {
      this.state.instance.loop = value;
    }
  },
};

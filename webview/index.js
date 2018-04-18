let animationInstance;
let playing = true;

const playPause = document.querySelector('#playpause');
const speed = document.querySelector('#speed');

speed.addEventListener('change', function() {
  const optionItem = this[this.selectedIndex];
  if (animationInstance) {
    animationInstance.setSpeed(optionItem.value);
  }
  console.log(`speed change ${optionItem.value}`);
});

playPause.addEventListener('click', () => {
  if (animationInstance) {
    playing = !playing;
    if (playing) animationInstance.pause();
    if (!playing) animationInstance.play();
  }
});

/**
 * Listen to extension events
 */
window.addEventListener('message', e => {
  if (e) {
    /**
     * Receives the init event from the extension
     */
    if (e.data.type === 'init') {
      animationInstance = lottie.loadAnimation({
        container: document.querySelector('#animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: e.data.data,
      });
    } else if (e.data.type === 'update') {
      /**
       * The data has been updated, try to update the
       * animation data
       */
      animationInstance.destroy();
      animationInstance = lottie.loadAnimation({
        container: document.querySelector('#animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: e.data.data,
      });
    }
  }
})
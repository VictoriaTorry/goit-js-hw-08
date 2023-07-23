import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const timekey = 'videoplayer-current-time';

function durationSetlocalstorage({ seconds }) {
  localStorage.setItem(timekey, seconds);
}

window.addEventListener('load', newStart);

player.on('timeupdate', Throttle(durationSetlocalstorage, 1000));

function newStart() {
  if (!localStorage.getItem(timekey)) {
    return;
  }
  player.setCurrentTime(localStorage.getItem(timekey) ?? 0);
}

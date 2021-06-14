import { forEach, map } from 'lodash';

const _waitTimers = [];

export default class Utils {
  static loadImages(images) {
    return Promise.all(map(images, src => Utils.loadImage(src)));
  }

  static loadImage(src) {
    return new Promise((resolve) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => {
        console.log(`load error: ${src}`);
        resolve();
      };
      image.src = src;
    });
  }

  static wait(duration) {
    return new Promise(resolve => {
      _waitTimers.push(setTimeout(resolve, duration));
    });
  }

  static clearWait() {
    forEach(_waitTimers, timer => clearTimeout(timer));
    _waitTimers.length = 0;
  }
}

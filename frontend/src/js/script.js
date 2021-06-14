import { forEach, map } from 'lodash';
import Password from '@/lib/Password';

const pass = new Password();
const $configs = document.querySelectorAll('[data-js-config]');
const $output = document.querySelector('[data-js-password="output"]');
const $generate = document.querySelector('[data-js-password="generate"]');

const init = () => {
  generate();
  document.addEventListener('copy' , event => onCopy(event));
  $output.addEventListener('click', event => copy(event));
  $generate.addEventListener('click', () => generate());
};

const generate = () => {
  setConfig();
  $output.value = pass.generate();
  const htmls = map(pass.generates(6), pass => {
    return `<input class="textarea" type="text" data-js-password="output" value="${pass}">`;
  });
  document.querySelector('.outputs').innerHTML = htmls.join('');
};

const copy = (event) => {
  event.preventDefault();
  document.execCommand('copy');
};

const onCopy = event => {
  event.clipboardData.setData('text/plain', $output.value);
  event.preventDefault();
};

const setConfig = () => {
  const config = {};
  forEach($configs, $item => {
    const key = $item.getAttribute('data-js-config');
    config[key] = key === 'wordLength' ? $item.value : $item.checked;
  });
  pass.setConfig(config);
};

window.addEventListener('DOMContentLoaded', init);

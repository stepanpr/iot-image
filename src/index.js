import { env } from './config';

Object.keys(env).forEach(key => {
  document.getElementById('app').innerHTML += `<div>${key}: ${env[key]}</div>`;
});

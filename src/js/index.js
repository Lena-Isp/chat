import {sum} from './modules/sum';

const root = document.querySelector('#root');
root.textContent = sum(5, 9).toString();
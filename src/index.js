import {sum} from './modules/sum';

const root = document.querySelector('#root');
root.textContent = sum(9, 9).toString();
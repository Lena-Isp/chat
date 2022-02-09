import '../../assets/app.scss';
import {sum} from '../../utils/sum.js';

const root = document.querySelector('#root');
root.textContent = sum(7, 9).toString();
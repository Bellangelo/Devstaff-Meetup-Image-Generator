import {join, dirname} from 'path';
import { fileURLToPath } from 'url';
import App from './src/App.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const svgPath = join(__dirname, './assets/meetup-template.svg');
console.log(svgPath);
const app = new App(svgPath);
app.save();
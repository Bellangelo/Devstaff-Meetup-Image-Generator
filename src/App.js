import {join, dirname} from 'path';
import { fileURLToPath } from 'url';
import Svg from './ulits/svg.js';

export default class App{
	#svgPath;

	constructor(){
		this.#setSvgPath();
	}

	#setSvgPath(){
		const __filename = fileURLToPath(import.meta.url);
		const __dirname = dirname(__filename);

		this.#svgPath = join(__dirname, './assets/meetup-template.svg');
	}

	save(){
		const svg = new Svg(this.#svgPath);
		svg.saveAsJPG();
	}
}
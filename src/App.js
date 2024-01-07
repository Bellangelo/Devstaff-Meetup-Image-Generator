import {join, dirname} from 'path';
import { fileURLToPath } from 'url';
import Svg from './ulits/svg.js';

export default class App{
	#svgPath;
	#date;
	#title;
	#secondaryTitle;

	/**
	 * @param {Date} date
	 * @param {string} title
	 * @param {string} secondaryTitle
	 */
	constructor(
		date,
		title,
		secondaryTitle = ''
	){
		this.#setSvgPath();
		this.#setDate(date);
		this.#setTitle(title);
		this.#setSecondaryTitle(secondaryTitle);
	}

	/**
	 * @param {Date} date
	 */
	#setDate(date){
		this.#date = date;
	}

	/**
	 * @param {string} title
	 */
	#setTitle(title){
		this.#title = title;
	}

	/**
	 * @param {string} secondaryTitle
	 */
	#setSecondaryTitle(secondaryTitle){
		this.#secondaryTitle = secondaryTitle;
	}

	#setSvgPath(){
		const __filename = fileURLToPath(import.meta.url);
		const __dirname = dirname(__filename);

		this.#svgPath = join(__dirname, './assets/meetup-template.svg');
	}

	/**
	 * @returns {Object}
	 */
	generateTemplateArguments(){
		return {
			dateDay: String(this.#date.getDate() + 1).padStart(2, '0'),
			dateMonth: String(this.#date.getMonth() + 1).padStart(2, '0'),
			day: this.#date.toLocaleString('en-US', {weekday: 'long'}).toUpperCase(),
			title: this.#title,
			SecondaryTitle: this.#secondaryTitle
		};
	}

	/**
	 * @param {string} fileName
	 */
	save(fileName = 'image.jpg'){
		const svg = new Svg(this.#svgPath);
		svg.saveAsJPG(fileName, this.generateTemplateArguments());
	}
}
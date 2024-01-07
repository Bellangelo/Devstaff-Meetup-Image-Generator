import Svg from './ulits/svg.js';

export default class App{
	#svgPath;

	/**
	 * @param {string} svgPath
	 */
	constructor(svgPath){
		this.#svgPath = svgPath;
	}

	save(){
		const svg = new Svg(this.#svgPath);
		svg.saveAsJPG();
	}
}
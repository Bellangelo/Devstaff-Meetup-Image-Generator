import {readFileSync} from'fs';
import nodeHtmlToImage from 'node-html-to-image';

export default class App{
	#svgHTML;

	constructor(svgFilePath){
		this.#loadSvg(svgFilePath);
	}

	#loadSvg(svgFilePath){
		this.#svgHTML = readFileSync(svgFilePath).toString();
	}

	saveAsJPG(){
		nodeHtmlToImage({
				quality: 100,
				output: './image.jpg',
				html: this.#svgHTML,
				puppeteerArgs: {
					defaultViewport: {
						width: 1920,
						height: 1080
					}
				}
			}).then(() => console.log('The image was created successfully!'))
	}
}
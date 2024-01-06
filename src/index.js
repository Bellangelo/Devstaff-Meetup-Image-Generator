const { promises } = require('fs');
const { join } = require('path');

async function main(){
	const svg = await promises.readFile(join(__dirname, './assets/meetup-template.svg'));

	const nodeHtmlToImage = require('node-html-to-image');

	nodeHtmlToImage(
		{
			quality: 100,
			output: './image.jpg',
			html: svg.toString(),
			puppeteerArgs: {
				defaultViewport: {
					width: 1920,
					height: 1080
				}
			}
		}).then(() => console.log('The image was created successfully!'))
}

main();
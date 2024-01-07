# Image meetup generator for Devstaff
A simple script that uses a svg as a template for generating images for the meetup events of Devstaff.

## How to use
1. Clone the repo.
2. Install the dependencies.
   - `npm install`
3. Run the script.
   - `node index.js`
     - `--date`: An ISO date string. For example: `1998-05-11`.
     - `--title`: The title of the event. For example: `A great event by Aggelos Bellos`.
     - `--secondaryTitle`: The secondary title of the event. For example: `The main title was too big so I have to use another line`.
4. An `image.jpg` will appear where you run the script.

## How it Works
The script uses the `meetup-template.svg` and fills it with the provided arguments.
Then, through the usage of `puppeteer`, it takes a screenshot of the svg and saves it as `image.jpg`.
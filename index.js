import minimist from 'minimist';
import App from './src/App.js';

const cliArguments = minimist(process.argv.slice(2), {
	string: ['date', 'title', 'secondaryTitle'],
	alias: {
		date: 'd',
		title: 't',
		secondaryTitle: 's'
	},
	default: {
		date: '1998-05-11',
		title: 'Meetup by Aggelos Bellos',
		secondaryTitle: ''
	}
});

const date = new Date(cliArguments.date);

if (isNaN(date)){
	console.error('Invalid date!');
	process.exit(1);
}

const app = new App(
	date,
	cliArguments.title,
	cliArguments.secondaryTitle
);

app.save();
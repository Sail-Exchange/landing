/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				mona: ['Mona-Sans', 'sans-serif'],
				hubot: ['Hubot-Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
};

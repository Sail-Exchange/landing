/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				'fade-in': 'fadeIn 2s ease-in-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: 0, transform: 'translateY(50%)' },
					'100%': { opacity: 1, transform: 'translateY(0)' },
				},
			},
			fontFamily: {
				mona: ['Mona-Sans', 'sans-serif'],
				hubot: ['Hubot-Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
};

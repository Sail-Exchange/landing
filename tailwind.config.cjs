const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				mona: ['Mona-Sans', 'sans-serif'],
				hubot: ['Hubot-Sans', 'sans-serif'],
				sans: ['Mona-Sans', 'Inter', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};

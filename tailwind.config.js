/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#FFFBDE',
				primaryShade: '#F6F2D0',
				primaryDark: '#333333'
			},
			fontFamily: {
				genSans: ['General Sans', 'sans-serif']
			}
		}
	},
	plugins: []
};

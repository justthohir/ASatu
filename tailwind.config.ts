import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				"primary-base": "#2B2E44",
				"primary-base-500": "#3A3E5C",
				"light-border": "#E4E8EE",
				"gray-base": "#6B7385",
				"upvote-base": "#28CA42",
				"downvote-base": "#FF5F57",
			},
		},
	},
	plugins: [],
}
export default config

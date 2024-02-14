import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import { skeleton } from '@skeletonlabs/tw-plugin'
import { myCustomTheme } from './theme.ts'


export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			fontFamily: {
				indie: ['"Indie Flower"', "serif"],
			}
		},
	},
	plugins: [
		forms,
		skeleton({
			themes: {
				custom : [ myCustomTheme ]
				/*
				preset: [
					{
						name: 'skeleton',
						enhancements: true,
					},
				],
				*/
			},
		}),
	],
} satisfies Config;

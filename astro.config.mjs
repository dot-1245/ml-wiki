// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'MiLight Server Wiki',

			customCss: [
				'./src/custom.css',
			],
			
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
    				label: '🛡️ 利用規約',
				    link: '/rules', // ここを追加
  				},
			],
		}),
	],
});

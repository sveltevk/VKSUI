<script context="module" lang="ts">
	import './prism.css';
	import type { Load } from '@sveltejs/kit';

	const capitalizeFirstLetter = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1);

	export const load: Load = async ({ url }) => {
		const path = url.pathname
			.replace(/\/$/gi, '') // remove trailing slash
			.replace('/VKSUI', ''); // remove /VKSUI

		const rawName = path.split('/').pop();

		const name = capitalizeFirstLetter(rawName)
			? capitalizeFirstLetter(rawName) + '— VKSUI'
			: 'VKSUI';

		const isComponent = path.includes('/components/');
		const capitalize = isComponent
			? path
					.split('/')
					.map((v, i) => (i !== 1 ? capitalizeFirstLetter(v) : v))
					.join('/') +
			  '/' +
			  capitalizeFirstLetter(rawName)
			: undefined;

		const currentPage = {
			path,
			name,
			capitalize,
			isComponent
		};
		return {
			props: {
				currentPage
			}
		};
	};
</script>

<script lang="ts">
	import { base } from '$app/paths';
	import { ConfigProvider } from '$lib/index';
	import Sidebar from '$site/lib/Sidebar/Sidebar.svelte';
	import Header from '$site/lib/Header/Header.svelte';
	import Article from '$site/lib/Article/Article.svelte';
	import type { Tree } from '$site/lib/Sidebar/types';

	export let currentPage = {
		path: '',
		capitalize: '',
		name: 'VKSUI',
		isComponent: false
	};

	let tree: Tree[] = [
		{
			header: '',
			child: [
				{
					name: 'О VKSUI',
					link: '/'
				}
				// {
				// 	name: 'Быстрый старт',
				// 	link: '/quickStart'
				// }
			]
		},
		// {
		// 	header: 'Основа',
		// 	child: [
		// 		{
		// 			name: 'О VKSUI',
		// 			link: '/'
		// 		},
		// 		{
		// 			name: 'Быстрый старт',
		// 			link: '/quickStart'
		// 		}
		// 	]
		// },
		{
			header: 'Компоненты',
			tree: [
				{
					header: 'Layout',
					child: [
						{
							name: 'FixedLayout',
							link: '/components/Layout/FixedLayout'
						}
					]
				},
				{
					header: 'Block',
					child: [
						{
							name: 'Badge',
							link: '/components/Blocks/Badge'
						},
						{
							name: 'Button',
							link: '/components/Blocks/Button',
							tokenized: true
						},
						{
							name: 'CellButton',
							link: '/components/Blocks/CellButton'
						},
						{
							name: 'IconButton',
							link: '/components/Blocks/IconButton'
						},
						{
							name: 'Div',
							link: '/components/Blocks/Div'
						},
						{
							name: 'Link',
							link: '/components/Blocks/Link'
						},
						{
							name: 'Header',
							link: '/components/Blocks/Header'
						},
						{
							name: 'Group',
							link: '/components/Blocks/Group'
						},
						{
							name: 'Card',
							link: '/components/Blocks/Card',
							tokenized: true
						},
						{
							name: 'CardGrid',
							link: '/components/Blocks/CardGrid'
						},

						{
							name: 'Gradient',
							link: '/components/Blocks/Gradient'
						},
						{
							name: 'SimpleCell',
							link: '/components/Blocks/SimpleCell'
						},

						{
							name: 'Footer',
							link: '/components/Blocks/Footer'
						},
						{
							name: 'Spinner',
							link: '/components/Blocks/Spinner'
						},
						{
							name: 'PanelSpinner',
							link: '/components/Blocks/PanelSpinner'
						},
						{
							name: 'Switch',
							link: '/components/Blocks/Switch'
						},
						{
							name: 'InfoRow',
							link: '/components/Blocks/InfoRow'
						},
						{
							name: 'Avatar',
							link: '/components/Blocks/Avatar'
						},
						{
							name: 'GridAvatar',
							link: '/components/Blocks/GridAvatar'
						},
						{
							name: 'InitialsAvatar',
							link: '/components/Blocks/InitialsAvatar'
						},
						{
							name: 'Progress',
							link: '/components/Blocks/Progress'
						},
						{
							name: 'Counter',
							link: '/components/Blocks/Counter'
						},

						{
							name: 'Separator',
							link: '/components/Blocks/Separator'
						}
					]
				},
				{
					header: 'Forms',
					child: [
						{
							name: 'Checkbox',
							link: '/components/Forms/Checkbox'
						}
					]
				},
				{
					header: 'Typography',
					child: [
						{
							name: 'Title',
							link: '/components/Typography/Title',
							tokenized: true
						},
						{
							name: 'Headline',
							link: '/components/Typography/Headline'
						},
						{
							name: 'Text',
							link: '/components/Typography/Text'
						},
						{
							name: 'Subhead',
							link: '/components/Typography/Subhead',
							tokenized: true
						},
						{
							name: 'Caption',
							link: '/components/Typography/Caption'
						}
					]
				},
				{
					header: 'Advertisement',
					child: [
						{
							name: 'PromoBanner',
							link: '/components/Advertisement/PromoBanner'
						}
					]
				},
				{
					header: 'Service',
					child: [
						{
							name: 'AdaptivityProvider',
							link: '/components/Service/AdaptivityProvider'
						},
						{
							name: 'ConfigProvider',
							link: '/components/Service/ConfigProvider'
						},
						{
							name: 'Touch',
							link: '/components/Service/Touch'
						}
					]
				}
			],
			child: []
		},
		{
			header: 'Прочее',
			child: [
				// {
				//   name: "Серверный рендеринг",
				//   link: "/ssr",
				// },
				{
					name: 'Утилиты',
					link: '/utils'
				},
				{
					name: 'Иконки',
					link: '/icons'
				},
				{
					name: 'Дизайн',
					link: '/design'
				},
				{
					name: 'Кастомизация',
					link: '/customize',
					tokenized: true
				}
			]
		}
	];

	const repositoryURL = 'https://github.com/sveltevk/VKSUI';
</script>

<svelte:head>
	<title>{currentPage.name}</title>
</svelte:head>

<ConfigProvider>
	<Header {base} {repositoryURL} />
	<main>
		<Sidebar {currentPage} {tree} {base} />
		<Article {currentPage} {repositoryURL}><slot /></Article>
	</main>
</ConfigProvider>

<style>
	main {
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: center;
	}
	:global(body) {
		background: var(--content_tint_background);
		margin: 0;
		padding: 0;
		--styleguide_header_height: 56px;
	}
</style>

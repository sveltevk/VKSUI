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
			? capitalizeFirstLetter(rawName) + ' — VKSUI'
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
	import { ConfigProvider, AdaptivityProvider, Platform } from '@sveltevk/vksui';
	import { WebviewType } from '@sveltevk/vksui/lib/config';
	import App from '$site/lib/App/App.svelte';
	import { base } from '$app/paths';
	import type { Tree } from '$site/lib/Sidebar/types';
	import Article from '$site/lib/Article/Article.svelte';
	import bridge from '@vkontakte/vk-bridge';
	import { onMount } from 'svelte';

	export let currentPage = {
		path: '',
		capitalize: '',
		name: 'VKSUI',
		isComponent: false
	};

	let platform: Platform | undefined = undefined;
	let webviewType: WebviewType = WebviewType.INTERNAL;
	let appearance: 'light' | 'dark' = 'light';

	onMount(() => {
		bridge.send('VKWebAppInit', {});
		if (bridge.supports('VKWebAppGetLaunchParams')) {
			bridge.send('VKWebAppGetLaunchParams').then((data) => {
				if (data.vk_platform !== 'desktop_web') {
					webviewType = WebviewType.VKAPPS;
				}
			});
		}

		bridge.subscribe((e) => {
			if (e.detail.type === 'VKWebAppUpdateConfig') {
				switch (e.detail.data.scheme) {
					case 'client_light':
						appearance = 'light';
						break;
					case 'client_dark':
						appearance = 'dark';
						break;
					case 'space_gray':
						appearance = 'dark';
						break;
					case 'bright_light':
						appearance = 'light';
						break;
				}
			}
		});
	});

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
		{
			header: 'Основа',
			child: [
				{
					name: 'Режимы подключения',
					link: '/modes'
				},
				{
					name: 'Адаптивность',
					link: '/adaptivity'
				},
				{
					name: 'Платформы и темы',
					link: '/platforms_and_themes'
				}
			]
		},
		{
			header: 'Компоненты',
			tree: [
				{
					header: 'Layout',
					child: [
						{
							name: 'SplitLayout',
							link: '/components/Layout/SplitLayout'
						},
						{
							name: 'SplitCol',
							link: '/components/Layout/SplitCol'
						},
						{
							name: 'Panel',
							link: '/components/Layout/Panel'
						},
						{
							name: 'PanelHeader',
							link: '/components/Layout/PanelHeader'
						},
						{
							name: 'PanelHeaderButton',
							link: '/components/Layout/PanelHeaderButton'
						},
						{
							name: 'PanelHeaderBack',
							link: '/components/Layout/PanelHeaderBack'
						},
						{
							name: 'PanelHeaderClose',
							link: '/components/Layout/PanelHeaderClose'
						},
						{
							name: 'PanelHeaderSubmit',
							link: '/components/Layout/PanelHeaderSubmit'
						},
						{
							name: 'PanelHeaderEdit',
							link: '/components/Layout/PanelHeaderEdit'
						},
						{
							name: 'Tabbar',
							link: '/components/Layout/Tabbar'
						},
						{
							name: 'TabbarItem',
							link: '/components/Layout/TabbarItem'
						},
						{
							name: 'FixedLayout',
							link: '/components/Layout/FixedLayout'
						}
					]
				},
				{
					header: 'Popouts',
					child: [
						{
							name: 'PopoutWrapper',
							link: '/components/Popouts/PopoutWrapper'
						},

						{
							name: 'Alert',
							link: '/components/Popouts/Alert'
						},
						{
							name: 'ScreenSpinner',
							link: '/components/Popouts/ScreenSpinner'
						},
						{
							name: 'Snackbar',
							link: '/components/Popouts/Snackbar'
						}
					]
				},
				{
					header: 'Modals',
					child: [
						{
							name: 'ModalDismissButton',
							link: '/components/Modals/ModalDismissButton'
						}
					]
				},
				{
					header: 'Blocks',
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
							name: 'ButtonGroup',
							link: '/components/Blocks/ButtonGroup',
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
							name: 'Cell',
							link: '/components/Blocks/Cell'
						},

						{
							name: 'RichCell',
							link: '/components/Blocks/RichCell'
						},
						{
							name: 'List',
							link: '/components/Blocks/List'
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
							name: 'Search',
							link: '/components/Blocks/Search'
						},
						{
							name: 'Counter',
							link: '/components/Blocks/Counter'
						},
						{
							name: 'UsersStack',
							link: '/components/Blocks/UsersStack'
						},
						{
							name: 'Spacing',
							link: '/components/Blocks/Spacing'
						},
						{
							name: 'Separator',
							link: '/components/Blocks/Separator'
						},
						{
							name: 'Placeholder',
							link: '/components/Blocks/Placeholder'
						},
						{
							name: 'Banner',
							link: '/components/Blocks/Banner'
						},
						{
							name: 'MiniInfoCell',
							link: '/components/Blocks/MiniInfoCell'
						},
						{
							name: 'WriteBar',
							link: '/components/Blocks/WriteBar'
						},
						{
							name: 'WriteBarIcon',
							link: '/components/Blocks/WriteBarIcon'
						},

						{
							name: 'ModalCardBase',
							link: '/components/Blocks/ModalCardBase'
						}
					]
				},
				{
					header: 'Forms',
					child: [
						{
							name: 'FormLayout',
							link: '/components/Forms/FormLayout'
						},
						{
							name: 'FormItem',
							link: '/components/Forms/FormItem'
						},
						{
							name: 'FormLayoutGroup',
							link: '/components/Forms/FormLayoutGroup'
						},
						{
							name: 'FormField',
							link: '/components/Forms/FormField'
						},
						{
							name: 'FormStatus',
							link: '/components/Forms/FormStatus'
						},

						{
							name: 'Checkbox',
							link: '/components/Forms/Checkbox'
						},

						{
							name: 'Input',
							link: '/components/Forms/Input'
						},

						{
							name: 'NativeSelect',
							link: '/components/Forms/NativeSelect'
						},
						{
							name: 'SelectMimicry',
							link: '/components/Forms/SelectMimicry'
						},
						{
							name: 'CustomSelectOption',
							link: '/components/Forms/CustomSelectOption'
						},
						{
							name: 'Textarea',
							link: '/components/Forms/Textarea'
						},
						{
							name: 'File',
							link: '/components/Forms/File'
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
							link: '/components/Typography/Caption',
							tokenized: true
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
				{
					name: 'Серверный рендеринг',
					link: '/ssr'
				},
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

<ConfigProvider {platform} {webviewType}>
	<AdaptivityProvider>
		<App {appearance} {currentPage} {tree} {base}>
			<Article {currentPage} {repositoryURL}>
				<slot />
			</Article>
		</App>
	</AdaptivityProvider>
</ConfigProvider>

<style>
	:global(.vkui--sizeX-regular),
	:global(body) {
		background: var(--content_tint_background);
		margin: 0;
		padding: 0;
	}
</style>

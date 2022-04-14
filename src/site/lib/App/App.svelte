<script lang="ts">
	import {
		AppRoot,
		SplitLayout,
		SplitCol,
		Panel,
		Group,
		PanelHeader,
		useAdaptivity,
		ViewWidth,
		PanelHeaderButton,
		Link,
		PanelHeaderClose
	} from '@sveltevk/vksui';
	import Icon28MenuOutline from '@sveltevk/icons/dist/28/menu_outline';
	import Icon28MoonOutline from '@sveltevk/icons/dist/28/moon_outline';
	import Icon28SunOutline from '@sveltevk/icons/dist/28/sun_outline';

	import Sidebar from '../Sidebar/Sidebar.svelte';
	import type { Tree } from '../Sidebar/types';

	const adaptivity = useAdaptivity();

	export let base = '';
	export let tree: Tree[];
	export let currentPage = {
		path: '',
		capitalize: '',
		name: 'VKSUI',
		isComponent: false
	};

	// Apperance
	export let appearance: 'light' | 'dark' = 'light';
	const toggleAppearance = () => (appearance = appearance === 'light' ? 'dark' : 'light');

	// Menu
	let menu = false;
	const toggleMenu = () => (menu = !menu);

	$: isViewMenu = menu && $adaptivity.viewWidth < ViewWidth.SMALL_TABLET;

	// Other
	const title = '@sveltevk/vksui';
	const repositoryURL = 'https://github.com/sveltevk/VKSUI';

	// eslint-disable-next-line no-undef
	const version = __version__ || '0.0.0';
</script>

<AppRoot>
	<SplitLayout class="Doc">
		<svelte:fragment slot="header">
			<PanelHeader separator={false} />
		</svelte:fragment>

		{#if $adaptivity.viewWidth >= ViewWidth.SMALL_TABLET}
			<SplitCol maxWidth="280px">
				<Panel>
					<PanelHeader>
						{title}
					</PanelHeader>
					<Sidebar {currentPage} {tree} {base} />
				</Panel>
			</SplitCol>
		{/if}

		<SplitCol
			spaced={$adaptivity.viewWidth >= ViewWidth.SMALL_TABLET}
			animate={$adaptivity.viewWidth <= ViewWidth.MOBILE}
			maxWidth="1360px"
		>
			<Panel>
				{#if $adaptivity.viewWidth >= ViewWidth.SMALL_TABLET}
					<PanelHeader>
						<PanelHeaderButton slot="right" on:click={toggleAppearance}>
							{#if appearance === 'dark'}
								<Icon28SunOutline fill="" />
							{:else}
								<Icon28MoonOutline />
							{/if}
						</PanelHeaderButton>

						<div class="Links">
							<Link
								href="https://www.npmjs.com/package/@sveltevk/vksui"
								target="_blank"
								rel="noopener noreferrer"
								>{version}
							</Link>
							<Link href={repositoryURL} target="_blank" rel="noopener noreferrer">GitHub</Link>
							<Link href="{repositoryURL}/releases" target="_blank" rel="noopener noreferrer"
								>Релизы</Link
							>
						</div>
					</PanelHeader>
				{:else}
					<PanelHeader>
						<svelte:fragment slot="left">
							{#if menu}
								<PanelHeaderClose on:click={toggleMenu} />
							{:else}
								<PanelHeaderButton on:click={toggleMenu}>
									<Icon28MenuOutline />
								</PanelHeaderButton>
							{/if}
						</svelte:fragment>
						<PanelHeaderButton slot="right" on:click={toggleAppearance}>
							{#if appearance === 'dark'}
								<Icon28SunOutline />
							{:else}
								<Icon28MoonOutline />
							{/if}
						</PanelHeaderButton>
						{title}
					</PanelHeader>
				{/if}

				{#if isViewMenu}
					<Sidebar {currentPage} {tree} {base} on:click={toggleMenu} />
				{/if}

				<Group hidden={isViewMenu}>
					<slot />
				</Group>
			</Panel>
		</SplitCol>
	</SplitLayout>
</AppRoot>

<style>
	.Links {
		display: flex;
		font-size: 15px;
		line-height: 20px;
		font-weight: 400;
		font-family: var(--font-common);
		padding: 0 40px;
		gap: 16px;
	}

	:global(.Doc) {
		justify-content: center;
	}
</style>

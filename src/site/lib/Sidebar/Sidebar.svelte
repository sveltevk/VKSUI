<script lang="ts">
	import { Group, Header, SimpleCell } from '@sveltevk/vksui';
	import Icon28TokenizedOutline from '../Icon28TokenizedOutline/Icon28TokenizedOutline.svelte';
	import Components from './Components.svelte';
	import type { Tree } from './types';
	export let base = '';

	export let tree: Tree[];

	export let currentPage = {
		path: '',
		capitalize: '',
		name: 'VKSUI',
		isComponent: false
	};
</script>

<div class="Sidebar">
	<div class="Sidebar__in">
		{#each tree as group}
			<Group mode="plain">
				{#if group.header}
					<Header mode="secondary">{group.header}</Header>
				{/if}
				{#if group.header === 'Компоненты'}
					<Components tree={group.tree} {currentPage} {base} />
				{/if}
				{#each group.child as el}
					<SimpleCell
						class={el.link === currentPage.path ? 'Sidebar__selected' : ''}
						href="{base}{el.link}"
					>
						<svelte:fragment slot="after">
							{#if el.tokenized}
								<Icon28TokenizedOutline title="Компонент поддерживает vkui-tokens" />
							{/if}
						</svelte:fragment>
						{el.name}
					</SimpleCell>
				{/each}
			</Group>
		{/each}
	</div>
</div>

<style>
	.Sidebar {
		flex-shrink: 0;
		position: relative;
		max-width: 480px;
		width: 340px;
		min-width: 340px;
		height: auto;
		box-sizing: border-box;
	}
	.Sidebar__in {
		width: 340px;
		box-sizing: border-box;
		height: calc(100vh - var(--styleguide_header_height));
		position: fixed;
		overflow: auto;
		margin-top: calc(var(--styleguide_header_height));
		padding: 20px 16px;
	}

	:global(.Sidebar__selected) {
		background: var(--background_hover);
	}
</style>

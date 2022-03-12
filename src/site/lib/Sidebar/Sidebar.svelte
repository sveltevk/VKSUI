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

{#each tree as group}
	<Group mode="plain">
		{#if group.header}
			<Header mode="secondary">{group.header}</Header>
		{/if}
		{#if group.header === 'Компоненты'}
			<Components tree={group.tree} {currentPage} {base} on:click />
		{/if}
		{#each group.child as el}
			<SimpleCell
				class={el.link === currentPage.path ? 'Sidebar__selected' : ''}
				href="{base}{el.link}"
				on:click
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

<style>
	:global(.Sidebar__selected) {
		background: var(--background_hover);
	}
</style>

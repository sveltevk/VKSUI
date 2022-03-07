<script lang="ts">
	import { Link } from '$lib/index';
	import Caption from '@sveltevk/vksui/components/Typography/Caption/Caption.svelte';

	export let currentPage = {
		path: '',
		capitalize: '',
		name: 'VKSUI',
		isComponent: false
	};

	export let repositoryURL: string;
</script>

<div class="article">
	<div class="header">
		{#if currentPage.isComponent}
			<Link
				href="{repositoryURL}/tree/master/src/lib{currentPage.capitalize}.svelte"
				target="_blank"
				rel="noopener noreferrer"><Caption weight="regular" level="1">GitHub</Caption></Link
			>
		{:else}
			<div />
		{/if}
		<Link
			href="{repositoryURL}/edit/master/src{currentPage.isComponent
				? '/lib' + currentPage.path + '/README.md'
				: '/routes' + (currentPage.path || '/index') + '.md'}"
			target="_blank"
			rel="noopener noreferrer"
			><Caption weight="regular" level="1">Редактировать страницу</Caption>
		</Link>
	</div>
	<article>
		<slot />
	</article>
</div>

<style>
	.header {
		margin-block-start: 32px;
		display: flex;
		justify-content: space-between;
	}
	.header :global(.Link) {
		color: var(--text_secondary);
	}
	.article {
		display: flex;
		flex-direction: column;
		padding: 0 40px 50px;
		max-width: 1360px;
		width: 100%;
		min-width: 320px;
		background: var(--background_content);
		box-shadow: inset 0 0 0 1px var(--image_border);
		box-sizing: border-box;
		border-radius: 8px;
		margin-bottom: 20px;
		margin-top: calc(20px + var(--styleguide_header_height));
	}
	article :global(a:not([class])) {
		color: var(--accent);
		text-decoration: none;
		border: 0;
		background: none;
		margin: 0;
		padding: 0;
		cursor: pointer;
		font-size: inherit;
		display: inline;
		border-radius: 0;
	}
	article :global(a:not([class]):hover) {
		opacity: 0.8;
	}

	article > :global(h1) {
		margin-block-start: 4px;
		font-size: var(--vkui--font_title1--font_size--regular);
		line-height: var(--vkui--font_title1--line_height--regular);
		font-weight: var(--vkui--font_title1--font_weight--regular);
	}

	article > :global(h2) {
		font-size: var(--vkui--font_title2--font_size--regular);
		line-height: var(--vkui--font_title2--line_height--regular);
		font-weight: var(--vkui--font_weight_accent2);
	}
	article > :global(h3) {
		font-size: var(--vkui--font_title3--font_size--regular);
		line-height: var(--vkui--font_title3--line_height--regular);
		font-weight: var(--vkui--font_title3--font_weight--regular);
	}

	article > :global(pre[class*='language-']) {
		background: var(--background_content);
		overflow: auto;
		margin: 0.8rem 0 2.4rem;
		padding: 20px;
		border-radius: 16px;
		box-shadow: inset 0 0 0 1px var(--image_border);
		max-height: 400px;
	}
</style>

<script lang="ts">
	import { Div, Link, useAdaptivity, ViewWidth, Caption } from '@sveltevk/vksui';

	export let currentPage = {
		path: '',
		capitalize: '',
		name: 'VKSUI',
		isComponent: false
	};

	export let repositoryURL: string;

	const adaptivity = useAdaptivity();
</script>

<Div
	class="article"
	style={$adaptivity.viewWidth >= ViewWidth.SMALL_TABLET ? 'padding: 32px 40px 50px' : undefined}
>
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
</Div>

<style>
	.header {
		margin-block-start: 8px;
		display: flex;
		justify-content: space-between;
	}

	.header :global(.Link) {
		color: var(--text_secondary);
	}

	article :global(a:not(.Example a)) {
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
	article :global(a:not(.Example a):hover) {
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

	article > :global(blockquote) {
		padding: 12px 16px;
		background: var(--content_warning_background);
		border-radius: 8px;
		margin: 0;
	}

	article > :global(blockquote:not(:first-child)) {
		margin-top: 16px;
	}

	article > :global(blockquote:not(:last-child)) {
		margin-bottom: 16px;
	}

	article :global(p:not(.Example p)) {
		font-size: 16px;
		line-height: 24px;
		margin: 0;
	}

	article :global(code:not(pre[class*='language-'] code)) {
		padding: 0 3px;
		background: var(--button_secondary_background);
		border-radius: 4px;
		font-size: 16px;
		line-height: 24px;
	}
</style>

<script lang="ts">
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import Subhead from '@sveltevk/vksui/components/Typography/Subhead/Subhead.svelte';
	import Headline from '@sveltevk/vksui/components/Typography/Headline/Headline.svelte';

	export let header = '';

	const platform = usePlatform();
</script>

<!-- 
@component
Информационный блок. Используется для отрисовки некликабельных блоков с неизменяемым контентом (то есть без инпутов, слайдеров и т.п.)
Если таких блоков несколько и они объединены по смыслу, то рекомендуется оборачивать список в `Group` с указанием `header`.
-->

<Headline
	{...$$restProps}
	weight="3"
	class={classNames(getClassName('InfoRow', $platform), $$props.class)}
>
	{#if $$slots.header || header}
		<Subhead class="InfoRow__header">
			<slot name="header">{header}</slot>
		</Subhead>
	{/if}
	<slot />
</Headline>

<style>
	:global(.InfoRow) {
		user-select: text;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	:global(.InfoRow__header) {
		display: block;
		margin-bottom: 2px;
		color: var(--text_subhead);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>

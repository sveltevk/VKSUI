<script lang="ts">
	import { usePlatform } from '$lib/hooks/usePlatform';
	import classNames from '$lib/lib/classNames';
	import getClassName from '$lib/lib/getClassName';
	import Subhead from '$lib/components/Typography/Subhead/Subhead.svelte';
	import Headline from '$lib/components/Typography/Headline/Headline.svelte';

	export let header: string = '';

	const platform = usePlatform();
</script>

<!-- 
@component
Информационный блок. Используется для отрисовки некликабельных блоков с неизменяемым контентом (то есть без инпутов, слайдеров и т.п.)
Если таких блоков несколько и они объединены по смыслу, то рекомендуется оборачивать список в `Group` с указанием `header`.
-->

<Headline
	{...$$restProps}
	weight="regular"
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
		margin-bottom: 2px;
		color: var(--text_subhead);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	/* margin у .Subhead перекрывает margin-bottom */
	/* :global(.InfoRow__header) {
    margin-bottom: 2px;
    color: var(--text_secondary);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  } */
</style>

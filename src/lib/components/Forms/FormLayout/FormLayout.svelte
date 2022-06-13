<script lang="ts">
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';

	export let Element = 'form';

	const platform = usePlatform();
</script>

<!-- 
@component
Компонент для создания `form`. Содержит скрытый `<input type="submit" />`, обеспечивающий отправку формы
по enter.
-->

<svelte:element
	this={Element}
	{...$$restProps}
	on:submit
	class={classNames(getClassName('FormLayout', $platform), $$props.class)}
>
	<div class="FormLayout__container">
		<slot />
	</div>
	{#if Element === 'form'}
		<input type="submit" class="FormLayout__submit" value="" />
	{/if}
</svelte:element>

<style>
	:global(.FormLayout) {
		position: relative;
	}

	.FormLayout__submit {
		position: absolute;
		visibility: hidden;
		pointer-events: none;
		left: 0;
		top: 0;
		padding: 0;
		width: 0;
		height: 0;
		appearance: none;
		border: none;
	}
</style>

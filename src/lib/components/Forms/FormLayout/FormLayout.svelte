<script lang="ts">
	import { usePlatform } from '$lib/hooks/usePlatform';
	import classNames from '$lib/lib/classNames';
	import getClassName from '$lib/lib/getClassName';
	import Form from '$lib/components/Elements/form/form.svelte';

	export let component = Form;

	const platform = usePlatform();
</script>

<!-- 
@component
Компонент для создания `form`. Содержит скрытый `<input type="submit" />`, обеспечивающий отправку формы
по enter.
-->

<svelte:component
	this={component}
	{...$$restProps}
	on:submit
	class={classNames(getClassName('FormLayout', $platform), $$props.class)}
>
	<div class="FormLayout__container">
		<slot />
	</div>
	{#if component === Form}
		<input type="submit" class="FormLayout__submit" value="" />
	{/if}
</svelte:component>

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

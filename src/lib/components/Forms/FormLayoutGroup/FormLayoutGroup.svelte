<script lang="ts">
	import usePlatform from '$lib/hooks/usePlatform';
	import classNames from '$lib/lib/classNames';
	import getClassName from '$lib/lib/getClassName';

	export let mode: 'vertical' | 'horizontal' = 'vertical';

	const platform = usePlatform();
</script>

<!-- 
@component
Компонент помогает сгруппировать несколько `FormItem` по какому-то признаку, расположив их по-вертикали или
по-горизонтали.
-->

<div
	{...$$restProps}
	class={classNames(
		getClassName('FormLayoutGroup', $platform),
		`FormLayoutGroup--${mode}`,
		$$props.class
	)}
>
	<slot />
</div>

<style>
	.FormLayoutGroup--horizontal {
		flex-direction: row;
		display: flex;
	}

	.FormLayoutGroup--horizontal > :global(.FormItem) {
		max-width: 100%;
		flex-grow: 1;
		flex-shrink: 0;
		flex-basis: 0;
		padding-left: 0;
		padding-right: 0;
	}

	.FormLayoutGroup--horizontal > :global(.FormItem + .FormItem) {
		margin-left: 24px;
	}

	.FormLayoutGroup--ios.FormLayoutGroup--horizontal {
		padding-left: 12px;
		padding-right: 12px;
	}

	.FormLayoutGroup--android.FormLayoutGroup--horizontal,
	.FormLayoutGroup--vkcom.FormLayoutGroup--horizontal {
		padding-left: 16px;
		padding-right: 16px;
	}
</style>

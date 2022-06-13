<script lang="ts">
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import Button from '@sveltevk/vksui/components/Blocks/Button/Button.svelte';

	export let before = '';
	export let after = '';

	export let mode:
		| 'primary'
		| 'secondary'
		| 'tertiary'
		| 'outline'
		| 'commerce'
		| 'destructive'
		| 'overlay_primary'
		| 'overlay_secondary'
		| 'overlay_outline' = 'primary';
	export let controlSize: 's' | 'm' | 'l' = 's';
	export let stretched = false;
	export let align: 'left' | 'center' | 'right' = 'center';
	export let style = '';

	const platform = usePlatform();
</script>

<!-- 
@component
Надстройка над `<input type="file" />`. Компонент принимает все валидные для этого элемента свойства.
`File` под капотом использует `Button`. То есть все свойства, применимые к `Button`, применимы и к `File`.
-->

<Button
	{align}
	class={classNames(getClassName('File', $platform), $$props.class)}
	Element="label"
	{stretched}
	{mode}
	size={controlSize}
	{before}
	{after}
	{style}
	disabled={$$restProps.disabled}
	type="button"
>
	<slot name="before" slot="before" />
	<slot name="after" slot="after" />
	<input {...$$restProps} class="File__input" type="file" />
	<slot>Выберите файл</slot>
</Button>

<style>
	.File__input {
		display: none;
	}
</style>

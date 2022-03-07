<script lang="ts">
	import { usePlatform } from '$lib/hooks/usePlatform';
	import classNames from '$lib/lib/classNames';
	import getClassName from '$lib/lib/getClassName';
	import Button from '$lib/components/Blocks/Button/Button.svelte';
	import label from '$lib/components/Elements/label/label.svelte';

	export let before: any = undefined;
	export let after: any = undefined;

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
	export let stretched: boolean = false;
	export let align: 'left' | 'center' | 'right' = 'center';
	export let style: string = '';

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
	component={label}
	{stretched}
	{mode}
	size={controlSize}
	{before}
	{after}
	{style}
	disabled={$$restProps.disabled}
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

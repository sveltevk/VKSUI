<script lang="ts">
	import classNames from '$lib/lib/classNames';
	import Caption from '../../Typography/Caption/Caption.svelte';
	import Div from '../Div/Div.svelte';
</script>

<!-- 
@component
Подвал для списков.
-->

<Caption level="1" weight="regular" component="footer" class={classNames('Footer', $$props.class)}>
	<slot />
</Caption>

<style>
	:global(.Footer) {
		display: block;
		margin: 24px 0;
		padding-top: 0;
		padding-bottom: 0;
		text-align: center;
		color: var(--text_secondary);
	}
</style>

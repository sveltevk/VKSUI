<script lang="ts">
	import classNames from '$lib/lib/classNames';
	import Div from '../Div/Div.svelte';
</script>

<!-- 
@component
Подвал для списков.
-->

<Div class={classNames('Footer', $$props.class)}>
	<slot />
</Div>

<style>
	:global(.Footer) {
		margin: 24px 0;
		font-size: 13px;
		color: var(--text_secondary);
		line-height: 16px;
		font-weight: normal;
		text-align: center;
	}

	:global(.Div.Footer) {
		padding-top: 0;
		padding-bottom: 0;
	}
</style>

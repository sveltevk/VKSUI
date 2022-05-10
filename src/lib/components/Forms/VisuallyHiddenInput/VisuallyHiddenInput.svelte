<script>
	export let type = 'hidden';
	export let getRef = undefined;
</script>

<!-- @component
Обертка над обычным `<input/>`; дает
скрыть его визуально и оставить
доступным для ассистивных технологий.
-->

<input
	{...$$restProps}
	{type}
	bind:this={getRef}
	on:blur
	on:focus
	on:change
	class="VisuallyHiddenInput"
/>

<style>
	.VisuallyHiddenInput {
		position: absolute;
		height: 1px;
		white-space: nowrap;
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		overflow: hidden;
		opacity: 0;
	}
</style>

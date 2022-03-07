<script>
	export let this_ = undefined;
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label
	bind:this={this_}
	{...$$restProps}
	on:click
	on:dragstart
	on:mouseover
	on:mouseout
	on:focus
	on:blur
	on:mouseleave
	on:pointerleave
	on:mouseenter
	on:pointerenter
>
	<slot />
</label>

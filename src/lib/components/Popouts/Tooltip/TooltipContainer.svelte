<script lang="ts">
	export let this_ = undefined;
	export let fixed = false;

	$: $$restProps['data-tooltip-container'] = fixed ? 'fixed' : 'true';
</script>

<div
	bind:this={this_}
	{...$$restProps}
	on:click
	on:dragstart
	on:mouseover
	on:mouseout
	on:blur
	on:focus
	on:mouseleave
	on:pointerleave
	on:mouseenter
	on:pointerenter
>
	<slot />
</div>

<script>
	export let this_ = undefined;
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label bind:this={this_} {...$$restProps} on:click on:dragstart on:mouseover on:mouseout>
	<slot />
</label>

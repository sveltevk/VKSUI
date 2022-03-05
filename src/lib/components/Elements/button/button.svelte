<script>
	export let this_ = undefined;
</script>

<button bind:this={this_} {...$$restProps} on:click on:dragstart on:mouseover on:mouseout>
	<slot />
</button>

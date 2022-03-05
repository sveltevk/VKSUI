<script>
	export let this_ = undefined;
</script>

<form bind:this={this_} {...$$restProps} on:click on:dragstart on:mouseover on:mouseout on:submit>
	<slot />
</form>

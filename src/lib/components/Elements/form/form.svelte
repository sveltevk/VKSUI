<script>
	export let this_ = undefined;
</script>

<form
	bind:this={this_}
	{...$$restProps}
	on:click
	on:focus
	on:blur
	on:dragstart
	on:mouseover
	on:mouseout
	on:submit
>
	<slot />
</form>

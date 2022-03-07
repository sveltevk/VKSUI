<script>
	import { createEventForwarder } from '@sveltevk/vksui/lib/events';
	import { get_current_component } from 'svelte/internal';

	export let this_ = undefined;

	const forwardEvents = createEventForwarder(get_current_component());
</script>

<button
	use:forwardEvents
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
</button>

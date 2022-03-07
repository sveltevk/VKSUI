<script>
	import { createEventForwarder } from '@sveltevk/vksui/lib/events';
	import { get_current_component } from 'svelte/internal';

	export let href;
	export let this_ = undefined;

	const forwardEvents = createEventForwarder(get_current_component());
</script>

<a
	use:forwardEvents
	bind:this={this_}
	{href}
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
</a>

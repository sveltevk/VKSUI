<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let x: number;
	export let y: number;

	const dispatch = createEventDispatcher();
	setTimeout(() => dispatch('clear'), 225);
</script>

<span class="Tappable__wave" style:top={y + 'px'} style:left={x + 'px'} />

<style>
	.Tappable__wave {
		position: absolute;
		top: 0;
		left: 0;
		width: 24px;
		height: 24px;
		margin: -12px 0 0 -12px;
		opacity: 0;
		content: '';
		border-radius: 50%;
		background: rgba(127, 127, 127, 0.1);
		animation: vkui-animation-wave 0.3s var(--android-easing);
	}
	/**
 * Animations
 */
	@keyframes vkui-animation-wave {
		0% {
			transform: scale(1);
			opacity: 1;
		}

		30% {
			opacity: 1;
		}

		100% {
			transform: scale(8);
			opacity: 0;
		}
	}
</style>

<script context="module" lang="ts">
	export type FocusVisibleMode = 'inside' | 'outside';
</script>

<script lang="ts">
	export let mode: FocusVisibleMode;
</script>

<span
	aria-hidden="true"
	class:FocusVisible={true}
	class:FocusVisible--inside={mode === 'inside'}
	class:FocusVisible--outside={mode === 'outside'}
	class={$$restProps.class}
/>

<style>
	:global([class$='--focus-visible']) > .FocusVisible {
		position: absolute;
		top: 2px;
		left: 2px;
		right: 2px;
		bottom: 2px;
		border-radius: inherit;
		box-shadow: 0 0 0 2px var(--accent);
		user-select: none;
		pointer-events: none;
		overflow: hidden;
		z-index: 0;
	}

	:global([class$='--focus-visible']) > .FocusVisible--outside {
		top: -2px;
		left: -2px;
		right: -2px;
		bottom: -2px;
	}

	/**
 * [a11y]
 * add animation for browsers that support prefers-reduced-motion
 * so that users with vestibular motion disorders have no problem
 * navigating accessible vkui apps via keyboard
 */
	@media (prefers-reduced-motion: no-preference) {
		:global([class$='--focus-visible']) > .FocusVisible {
			top: 4px;
			left: 4px;
			right: 4px;
			bottom: 4px;
			animation: vkui-animation-focus-visible 0.15s ease-in-out forwards;
			animation-delay: 0.01ms;
			will-change: top, left, bottom, right;
		}

		:global([class$='--focus-visible']) > .FocusVisible--outside {
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			animation-name: vkui-animation-focus-visible-outside;
		}

		@keyframes vkui-animation-focus-visible {
			0% {
			}

			100% {
				top: 2px;
				left: 2px;
				bottom: 2px;
				right: 2px;
				will-change: auto;
			}
		}

		@keyframes vkui-animation-focus-visible-outside {
			0% {
			}

			100% {
				top: -2px;
				left: -2px;
				bottom: -2px;
				right: -2px;
				will-change: auto;
			}
		}
	}
</style>
